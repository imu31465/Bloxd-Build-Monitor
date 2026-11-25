export const id = 253;
export const ids = [253, 258];
export const modules = {
  44485: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(44412),
      SM = iM(41091);
    let jM = !1;

    function aM() {
      jM || (jM = !0, SM.c.prototype._sphericalPolynomialTargetSize = 0, SM.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(SM.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = OM.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((MM => {
              this._texture._sphericalPolynomial = MM, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(MM) {
          this._texture && (this._texture._sphericalPolynomial = MM)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38167: (MM, rM, iM) => {
    iM.d(rM, {
      Color3: () => OM.d,
      d: () => OM.h
    });
    var OM = iM(38173);
    (0, OM.i)()
  },
  38740: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38744);
    class SM {
      static GetPlanes(MM) {
        const rM = [];
        for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
        return SM.GetPlanesToRef(MM, rM), rM
      }
      static GetNearPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
      }
      static GetFarPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
      }
      static GetLeftPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
      }
      static GetRightPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
      }
      static GetTopPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
      }
      static GetBottomPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
      }
      static GetPlanesToRef(MM, rM) {
        SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
      }
      static IsPointInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; iM++)
          if (rM[iM].dotCoordinate(MM) < 0) return !1;
        return !0
      }
    }
  },
  38744: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38040);
    class SM {
      constructor(MM, rM, iM, SM) {
        this.normal = new OM.q(MM, rM, iM), this.d = SM
      }
      HOM() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let MM = this.normal.getHashCode();
        return MM = 397 * MM ^ this.d, MM
      }
      normalize() {
        const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rM = 0;
        return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
      }
      transform(MM) {
        const rM = SM._TmpMatrix;
        MM.invertToRef(rM);
        const iM = rM.m,
          OM = this.normal.x,
          jM = this.normal.y,
          aM = this.normal.z,
          PM = this.d,
          nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
          QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
          zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
          LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
        return new SM(nM, QM, zM, LM)
      }
      dotCoordinate(MM) {
        return this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z + this.d
      }
      copyFromPoints(MM, rM, iM) {
        const OM = rM.x - MM.x,
          SM = rM.y - MM.y,
          jM = rM.z - MM.z,
          aM = iM.x - MM.x,
          PM = iM.y - MM.y,
          nM = iM.z - MM.z,
          QM = SM * nM - jM * PM,
          zM = jM * aM - OM * nM,
          LM = OM * PM - SM * aM,
          mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
        let HM;
        return HM = 0 !== mM ? 1 / mM : 0, this.normal.x = QM * HM, this.normal.y = zM * HM, this.normal.z = LM * HM, this.d = -(this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z), this
      }
      isFrontFacingTo(MM, rM) {
        return OM.q.Dot(this.normal, MM) <= rM
      }
      signedDistanceTo(MM) {
        return OM.q.Dot(MM, this.normal) + this.d
      }
      static FromArray(MM) {
        return new SM(MM[0], MM[1], MM[2], MM[3])
      }
      static FromPoints(MM, rM, iM) {
        const OM = new SM(0, 0, 0, 0);
        return OM.copyFromPoints(MM, rM, iM), OM
      }
      static FromPositionAndNormal(MM, rM) {
        const iM = new SM(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(MM, rM, iM)
      }
      static FromPositionAndNormalToRef(MM, rM, iM) {
        return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
      }
      static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
        const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
        return OM.q.Dot(iM, rM) + SM
      }
    }
    SM._TmpMatrix = OM.d.Identity()
  },
  38034: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Matrix: () => OM.d,
      Quaternion: () => OM.h,
      RegisterMathVector: () => OM.i,
      TmpVectors: () => OM.l,
      Vector2: () => OM.o,
      sh: () => OM.q,
      Vector4: () => OM.u
    });
    var OM = iM(38040);
    (0, OM.i)()
  },
  39078: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM, rM, iM, OM) {
        this.x = MM, this.y = rM, this.width = iM, this.height = OM
      }
      toGlobal(MM, rM) {
        return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
      }
      toGlobalToRef(MM, rM, iM) {
        return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
      }
      clone() {
        return new OM(this.x, this.y, this.width, this.height)
      }
    }
  },
  44412: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => QM
    });
    var OM = iM(38040),
      SM = iM(38074),
      jM = iM(41086),
      aM = iM(38044),
      PM = iM(38173);
    class nM {
      constructor(MM, rM, iM, OM) {
        this.name = MM, this.worldAxisForNormal = rM, this.worldAxisForFileX = iM, this.worldAxisForFileY = OM
      }
    }
    class QM {
      static _NearestPow2Floor(MM) {
        return MM <= 1 ? 1 : 1 << Math.floor(Math.log2(MM))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(MM) {
        if (!MM.isCube) return null;
        MM.Hk()?.ph().flushFramebuffer();
        const rM = MM.getSize().width,
          iM = MM._sphericalPolynomialTargetSize,
          OM = iM > 0 ? this._NearestPow2Floor(iM) : 0,
          SM = !MM.noMipmap && !0 === MM._texture?.generateMipMaps,
          jM = OM > 0 && OM < rM && SM,
          aM = jM ? Math.max(0, Math.round(Math.log2(rM / OM))) : 0,
          PM = jM ? Math.max(1, Math.floor(rM / Math.pow(2, aM))) : rM,
          nM = MM.readPixels(0, aM, void 0, !1),
          QM = MM.readPixels(1, aM, void 0, !1);
        let zM, LM;
        MM.isRenderTarget ? (zM = MM.readPixels(3, aM, void 0, !1), LM = MM.readPixels(2, aM, void 0, !1)) : (zM = MM.readPixels(2, aM, void 0, !1), LM = MM.readPixels(3, aM, void 0, !1));
        const mM = MM.readPixels(4, aM, void 0, !1),
          HM = MM.readPixels(5, aM, void 0, !1),
          hM = MM.gammaSpace,
          JM = OM > 0 && OM < rM && !jM;
        return new Promise((MM => {
          Promise.all([QM, nM, zM, LM, mM, HM]).then((iM => {
            let [SM, jM, aM, nM, QM, zM] = iM, LM = PM;
            if (JM) {
              const MM = 4;
              SM = this._DownsampleFace(SM, rM, OM, MM), jM = this._DownsampleFace(jM, rM, OM, MM), aM = this._DownsampleFace(aM, rM, OM, MM), nM = this._DownsampleFace(nM, rM, OM, MM), QM = this._DownsampleFace(QM, rM, OM, MM), zM = this._DownsampleFace(zM, rM, OM, MM), LM = OM
            }
            const mM = {
              size: LM,
              right: jM,
              left: SM,
              up: aM,
              down: nM,
              front: QM,
              back: zM,
              format: 5,
              type: SM instanceof Float32Array ? 1 : 0,
              gammaSpace: hM
            };
            MM(this.ConvertCubeMapToSphericalPolynomial(mM))
          }))
        }))
      }
      static _AreaElement(MM, rM) {
        return Math.atan2(MM * rM, Math.sqrt(MM * MM + rM * rM + 1))
      }
      static _DownsampleFace(MM, rM, iM, OM) {
        const SM = MM instanceof Float32Array ? MM : Float32Array.from(MM),
          jM = iM * iM * OM,
          aM = new Float32Array(jM),
          PM = rM / iM,
          nM = 1 / (PM * PM);
        for (let zM = 0; zM < iM; zM++) {
          const MM = Math.floor(zM * PM),
            jM = Math.floor((zM + 1) * PM);
          for (let QM = 0; QM < iM; QM++) {
            const LM = Math.floor(QM * PM),
              mM = Math.floor((QM + 1) * PM),
              HM = (zM * iM + QM) * OM;
            for (let iM = 0; iM < OM; iM++) {
              let PM = 0;
              for (let aM = MM; aM < jM; aM++)
                for (let MM = LM; MM < mM; MM++) PM += SM[(aM * rM + MM) * OM + iM];
              aM[HM + iM] = PM * nM
            }
          }
        }
        if (MM instanceof Float32Array) return aM;
        const QM = new(0, MM.constructor)(jM);
        for (let zM = 0; zM < jM; zM++) QM[zM] = aM[zM] + .5 | 0;
        return QM
      }
      static ConvertCubeMapToSphericalPolynomial(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = rM > 0 ? this._NearestPow2Floor(rM) : 0;
        if (iM > 0 && MM.size > iM) {
          const rM = 5 === MM.format ? 4 : 3,
            OM = ["right", "left", "up", "down", "front", "back"],
            SM = {};
          for (const jM of OM) SM[jM] = this._DownsampleFace(MM[jM], MM.size, iM, rM);
          MM = {
            ...MM,
            ...SM,
            size: iM
          }
        }
        const OM = new jM.b;
        let nM = 0;
        const QM = 2 / MM.size,
          zM = QM,
          LM = .5 * QM,
          mM = LM - 1;
        for (let jM = 0; jM < 6; jM++) {
          const rM = this._FileFaces[jM],
            iM = MM[rM.name];
          let HM = mM;
          const hM = 5 === MM.format ? 4 : 3;
          for (let jM = 0; jM < MM.size; jM++) {
            let JM = mM;
            for (let zM = 0; zM < MM.size; zM++) {
              const mM = rM.worldAxisForFileX.scale(JM).add(rM.worldAxisForFileY.scale(HM)).add(rM.worldAxisForNormal);
              mM.normalize();
              const dM = this._AreaElement(JM - LM, HM - LM) - this._AreaElement(JM - LM, HM + LM) - this._AreaElement(JM + LM, HM - LM) + this._AreaElement(JM + LM, HM + LM);
              let yM = iM[jM * MM.size * hM + zM * hM + 0],
                lM = iM[jM * MM.size * hM + zM * hM + 1],
                EM = iM[jM * MM.size * hM + zM * hM + 2];
              isNaN(yM) && (yM = 0), isNaN(lM) && (lM = 0), isNaN(EM) && (EM = 0), 0 === MM.type && (yM /= 255, lM /= 255, EM /= 255), MM.gammaSpace && (yM = Math.pow((0, SM.Clamp)(yM), aM.h), lM = Math.pow((0, SM.Clamp)(lM), aM.h), EM = Math.pow((0, SM.Clamp)(EM), aM.h));
              const UM = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const MM = Math.max(yM, lM, EM);
                if (MM > UM) {
                  const rM = UM / MM;
                  yM *= rM, lM *= rM, EM *= rM
                }
              } else yM = (0, SM.Clamp)(yM, 0, UM), lM = (0, SM.Clamp)(lM, 0, UM), EM = (0, SM.Clamp)(EM, 0, UM);
              const GM = new PM.d(yM, lM, EM);
              OM.addLight(mM, GM, dM), nM += dM, JM += QM
            }
            HM += zM
          }
        }
        const HM = 6 * (4 * Math.PI) / 6 / nM;
        return OM.scaleInPlace(HM), OM.convertIncidentRadianceToIrradiance(), OM.convertIrradianceToLambertianRadiance(), jM.c.FromHarmonics(OM)
      }
    }
    QM._FileFaces = [new nM("right", new OM.q(1, 0, 0), new OM.q(0, 0, -1), new OM.q(0, -1, 0)), new nM("left", new OM.q(-1, 0, 0), new OM.q(0, 0, 1), new OM.q(0, -1, 0)), new nM("up", new OM.q(0, 1, 0), new OM.q(1, 0, 0), new OM.q(0, 0, 1)), new nM("down", new OM.q(0, -1, 0), new OM.q(1, 0, 0), new OM.q(0, 0, -1)), new nM("front", new OM.q(0, 0, 1), new OM.q(1, 0, 0), new OM.q(0, -1, 0)), new nM("back", new OM.q(0, 0, -1), new OM.q(-1, 0, 0), new OM.q(0, -1, 0))], QM.MAX_HDRI_VALUE = 4096, QM.PRESERVE_CLAMPED_COLORS = !1
  },
  44300: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM.j,
      c: () => OM.p
    });
    var OM = iM(41145);
    (0, OM.u)()
  },
  38885: (MM, rM, iM) => {
    function OM() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
        const rM = 16 * Math.random() | 0;
        return ("x" === MM ? rM : 3 & rM | 8).toString(16)
      }))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  44452: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => jM
    });
    var OM = iM(44439),
      SM = iM(44458);
    class jM {
      static ExpandRGBDTexture(MM) {
        const rM = MM._texture;
        if (!rM || !MM.isRGBD) return;
        const SM = rM.ph(),
          jM = SM.getCaps(),
          aM = rM.isReady;
        let PM = !1;
        jM.textureHalfFloatRender && jM.textureHalfFloatLinearFiltering ? (PM = !0, rM.type = 2) : jM.textureFloatRender && jM.textureFloatLinearFiltering && (PM = !0, rM.type = 1), PM && (rM.isReady = !1, rM._isRGBD = !1, rM.invertY = !1);
        const nM = async () => {
          const jM = SM.isWebGPU,
            aM = jM ? 1 : 0;
          rM.isReady = !1, jM ? await iM.e(651).then((() => iM(64026))) : await iM.e(633).then((() => iM(64034)));
          const PM = new OM.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, SM, !1, void 0, rM.type, void 0, null, !1, void 0, aM);
          PM.externalTextureSamplerBinding = !0;
          const nM = SM.createRenderTargetTexture(rM.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: rM.samplingMode,
            type: rM.type,
            format: 5
          });
          PM.onEffectCreatedObservable.addOnce((iM => {
            iM.executeWhenCompiled((() => {
              PM.onApply = MM => {
                MM._bindTexture("textureSampler", rM), MM.setFloat2("scale", 1, 1)
              }, MM.Hk()?.postProcessManager.directRender([PM], nM, !0), SM.restoreDefaultFramebuffer(), SM._releaseTexture(rM), PM && PM.dispose(), nM._swapAndDie(rM), rM.isReady = !0
            }))
          }))
        };
        PM && (aM ? nM() : MM.onLoadObservable.addOnce(nM))
      }
      static async EncodeTextureToRGBD(MM, rM) {
        let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return rM.ph().isWebGPU ? await iM.e(652).then((() => iM(64042))) : await iM.e(634).then((() => iM(64039))), await (0, SM.d)("rgbdEncode", MM, rM, OM, 1, 5)
      }
    }
  },
  63884: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AsyncLoop: () => OM.c,
      RegisterTools: () => OM.d,
      Tools: () => OM.e,
      className: () => OM.g
    });
    var OM = iM(41205);
    (0, OM.d)()
  },
  44499: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    class OM {
      constructor(MM) {
        this._pendingActions = new Array, this._workerInfos = MM.map((MM => ({
          workerPromise: Promise.resolve(MM),
          idle: !0
        })))
      }
      dispose() {
        for (const MM of this._workerInfos) MM.workerPromise.then((MM => {
          MM.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(MM) {
        this._executeOnIdleWorker(MM) || this._pendingActions.push(MM)
      }
      _executeOnIdleWorker(MM) {
        for (const rM of this._workerInfos)
          if (rM.idle) return this._execute(rM, MM), !0;
        return !1
      }
      _execute(MM, rM) {
        MM.idle = !1, MM.workerPromise.then((iM => {
          rM(iM, (() => {
            const rM = this._pendingActions.shift();
            rM ? this._execute(MM, rM) : MM.idle = !0
          }))
        }))
      }
    }
    class SM extends OM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM.DefaultOptions;
        super([]), this._maxWorkers = MM, this._createWorkerAsync = rM, this._options = iM
      }
      push(MM) {
        if (!this._executeOnIdleWorker(MM))
          if (this._workerInfos.length < this._maxWorkers) {
            const rM = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(rM), this._execute(rM, MM)
          } else this._pendingActions.push(MM)
      }
      _execute(MM, rM) {
        MM.timeoutId && (clearTimeout(MM.timeoutId), delete MM.timeoutId), super._execute(MM, ((iM, OM) => {
          rM(iM, (() => {
            OM(), MM.idle && (MM.timeoutId = setTimeout((() => {
              MM.workerPromise.then((MM => {
                MM.terminate()
              }));
              const rM = this._workerInfos.indexOf(MM); - 1 !== rM && this._workerInfos.splice(rM, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    SM.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  63927: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AbstractThreeMfSerializer: () => IP,
      BVHExporter: () => ga,
      ContentTypeFileName: () => JP,
      DefaultXmlSerializerFormatOptions: () => va,
      DefaultXmlSerializerNumberOptions: () => xa,
      EXT_lights_area: () => lS,
      EXT_mesh_gpu_instancing: () => NO,
      EXT_texture_avif: () => aa,
      EXT_texture_webp: () => ia,
      GLTF2Export: () => oO,
      GLTFData: () => QM,
      GetXmlFieldMeta: () => oa,
      GetXmlName: () => fa,
      IsQualifiedName: () => ua,
      KHR_draco_mesh_compression: () => cO,
      KHR_interactivity: () => LS,
      KHR_lights_punctual: () => PS,
      KHR_materials_anisotropy: () => CS,
      KHR_materials_clearcoat: () => gS,
      KHR_materials_coat: () => DS,
      KHR_materials_diffuse_roughness: () => fj,
      KHR_materials_diffuse_transmission: () => NS,
      KHR_materials_dispersion: () => FS,
      KHR_materials_emissive_strength: () => KS,
      KHR_materials_fuzz: () => mj,
      KHR_materials_ior: () => cS,
      KHR_materials_iridescence: () => Oj,
      KHR_materials_openpbr: () => xj,
      KHR_materials_sheen: () => Pj,
      KHR_materials_specular: () => dj,
      KHR_materials_transmission: () => Uj,
      KHR_materials_unlit: () => wj,
      KHR_materials_volume: () => Rj,
      KHR_materials_volume_scatter: () => Dj,
      KHR_texture_basisu: () => Vj,
      KHR_texture_transform: () => Xj,
      Known3mfRelationshipTypes: () => dP,
      KnownI3mfContentType: () => zP,
      Matrix3d: () => CP,
      MatrixFormatter: () => eP,
      ModelFileName: () => HP,
      NumberFormatter: () => Xa,
      OBJExport: () => aM,
      Object3dDirName: () => mP,
      OpenXmlContentTypesNamespace: () => nP,
      OpenXmlRelationshipsNamespace: () => QP,
      RegisterEXT_lights_area: () => US,
      RegisterEXT_mesh_gpu_instancing: () => xO,
      RegisterEXT_texture_avif: () => na,
      RegisterEXT_texture_webp: () => Sa,
      RegisterKHR_draco_mesh_compression: () => rS,
      RegisterKHR_interactivity: () => HS,
      RegisterKHR_lights_punctual: () => QS,
      RegisterKHR_materials_anisotropy: () => bS,
      RegisterKHR_materials_clearcoat: () => RS,
      RegisterKHR_materials_coat: () => ZS,
      RegisterKHR_materials_diffuse_roughness: () => Nj,
      RegisterKHR_materials_diffuse_transmission: () => xS,
      RegisterKHR_materials_dispersion: () => XS,
      RegisterKHR_materials_emissive_strength: () => TS,
      RegisterKHR_materials_fuzz: () => hj,
      RegisterKHR_materials_ior: () => rj,
      RegisterKHR_materials_iridescence: () => jj,
      RegisterKHR_materials_openpbr: () => Fj,
      RegisterKHR_materials_sheen: () => Qj,
      RegisterKHR_materials_specular: () => lj,
      RegisterKHR_materials_transmission: () => Cj,
      RegisterKHR_materials_unlit: () => gj,
      RegisterKHR_materials_volume: () => Wj,
      RegisterKHR_materials_volume_scatter: () => Zj,
      RegisterKHR_texture_basisu: () => Ma,
      RegisterKHR_texture_transform: () => Kj,
      RelationshipDirName: () => LP,
      RelationshipFileName: () => hP,
      ResolveFormatOptions: () => Ba,
      ResolveNumberOptions: () => Fa,
      STLExport: () => Qa,
      ST_ObjectType: () => PP,
      ST_Unit: () => aP,
      StringXmlWriter: () => iP,
      ThreeDimModelNamespace: () => SP,
      ThreeMf: () => KP,
      ThreeMfBase: () => fP,
      ThreeMfBaseMaterials: () => oP,
      ThreeMfBuild: () => YP,
      ThreeMfComponent: () => ZP,
      ThreeMfComponents: () => kP,
      ThreeMfComponentsBuilder: () => xP,
      ThreeMfContentType: () => lP,
      ThreeMfContentTypes: () => yP,
      ThreeMfDocument: () => GP,
      ThreeMfDocumentBuilder: () => XP,
      ThreeMfItem: () => NP,
      ThreeMfMaterialBuilder: () => FP,
      ThreeMfMesh: () => RP,
      ThreeMfMeshBuilder: () => vP,
      ThreeMfMeta: () => wP,
      ThreeMfMetadataGroup: () => tP,
      ThreeMfModel: () => bP,
      ThreeMfModelBuilder: () => BP,
      ThreeMfObject: () => uP,
      ThreeMfObjectBuilder: () => AP,
      ThreeMfRelationship: () => UP,
      ThreeMfRelationships: () => EP,
      ThreeMfResources: () => gP,
      ThreeMfSerializer: () => VP,
      ThreeMfSerializerGlobalConfiguration: () => qP,
      ThreeMfTriangle: () => DP,
      ThreeMfTriangles: () => sP,
      ThreeMfVertex: () => WP,
      ThreeMfVertices: () => pP,
      ToQualifiedString: () => Aa,
      TokenType: () => MP,
      TriangleSetsNamespace: () => jP,
      USDZExportAsync: () => wa,
      Utf8XmlWriterToBytes: () => OP,
      XmlAttr: () => ka,
      XmlBuilder: () => rP,
      XmlElem: () => Za,
      XmlIgnore: () => Da,
      XmlName: () => sa,
      XmlNameToParts: () => Na,
      XmlSerializer: () => Va,
      _ConvertToGLTFPBRMetallicRoughness: () => ti,
      _SolveMetallic: () => wi,
      __IGLTFExporterExtension: () => PM
    });
    var OM = iM(38034),
      SM = iM(63884),
      jM = iM(41397);
    class aM {
      static OBJ(MM, rM, iM, aM) {
        const PM = [];
        let nM = 1,
          QM = 1;
        rM && (iM || (iM = "mat"), PM.push("mtllib " + iM + ".mtl"));
        for (let zM = 0; zM < MM.length; zM++) {
          const iM = MM[zM],
            LM = iM.name || `mesh${zM}}`;
          PM.push(`o ${LM}`);
          let mM = null;
          if (aM) {
            const MM = iM.computeWorldMatrix(!0);
            mM = new OM.Matrix, MM.invertToRef(mM), iM.bakeTransformIntoVertices(MM)
          }
          if (rM) {
            const MM = iM.material;
            MM && PM.push("usemtl " + MM.id)
          }
          const HM = iM.geometry;
          if (!HM) {
            SM.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const hM = HM.getVerticesData("position"),
            JM = HM.getVerticesData("normal"),
            dM = HM.getVerticesData("uv"),
            yM = HM.hOM();
          let lM = 0,
            EM = 0;
          if (!hM || !yM) {
            SM.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const UM = MM[0].Hk().useRightHandedSystem ? 1 : -1;
          for (let MM = 0; MM < hM.length; MM += 3) PM.push("v " + hM[MM] * UM + " " + hM[MM + 1] + " " + hM[MM + 2]), lM++;
          if (null != JM)
            for (let MM = 0; MM < JM.length; MM += 3) PM.push("vn " + JM[MM] * UM + " " + JM[MM + 1] + " " + JM[MM + 2]);
          if (null != dM)
            for (let MM = 0; MM < dM.length; MM += 2) PM.push("vt " + dM[MM] + " " + dM[MM + 1]), EM++;
          const GM = ["", "", ""],
            CM = (iM.material || iM.Hk().defaultMaterial)._getEffectiveOrientation(iM),
            [eM, bM] = CM === jM.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let MM = 0; MM < yM.length; MM += 3) {
            const rM = [String(yM[MM] + nM), String(yM[MM + eM] + nM), String(yM[MM + bM] + nM)],
              iM = [String(yM[MM] + QM), String(yM[MM + eM] + QM), String(yM[MM + bM] + QM)],
              OM = rM,
              SM = null != dM ? iM : GM,
              jM = null != JM ? rM : GM;
            PM.push("f " + OM[0] + "/" + SM[0] + "/" + jM[0] + " " + OM[1] + "/" + SM[1] + "/" + jM[1] + " " + OM[2] + "/" + SM[2] + "/" + jM[2])
          }
          aM && mM && iM.bakeTransformIntoVertices(mM), nM += lM, QM += EM
        }
        return PM.join("\n")
      }
      static MTL(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const iM = [],
          OM = MM.material;
        iM.push("newmtl " + rM), iM.push("  Ns " + OM.specularPower.toFixed(4)), iM.push("  Ni 1.5000"), iM.push("  d " + OM.alpha.toFixed(4)), iM.push("  Tr 0.0000"), iM.push("  Tf 1.0000 1.0000 1.0000"), iM.push("  illum 2"), iM.push("  Ka " + OM.ambientColor.r.toFixed(4) + " " + OM.ambientColor.g.toFixed(4) + " " + OM.ambientColor.b.toFixed(4)), iM.push("  Kd " + OM.diffuseColor.r.toFixed(4) + " " + OM.diffuseColor.g.toFixed(4) + " " + OM.diffuseColor.b.toFixed(4)), iM.push("  Ks " + OM.specularColor.r.toFixed(4) + " " + OM.specularColor.g.toFixed(4) + " " + OM.specularColor.b.toFixed(4)), iM.push("  Ke " + OM.emissiveColor.r.toFixed(4) + " " + OM.emissiveColor.g.toFixed(4) + " " + OM.emissiveColor.b.toFixed(4));
        OM.ambientTexture && iM.push("  map_Ka " + OM.ambientTexture.name), OM.diffuseTexture && iM.push("  map_Kd " + OM.diffuseTexture.name), OM.specularTexture && iM.push("  map_Ks " + OM.specularTexture.name), OM.bumpTexture && iM.push("  map_bump -imfchan z " + OM.bumpTexture.name), OM.opacityTexture && iM.push("  map_d " + OM.opacityTexture.name);
        return iM.join("\n")
      }
    }
    var PM = 0,
      nM = iM(44300);
    class QM {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const MM in this.files) {
          const rM = this.files[MM],
            iM = new Blob([rM], {
              type: (0, nM.b)(MM)
            });
          SM.Tools.Download(iM, MM)
        }
      }
    }
    var zM = iM(42269),
      LM = iM(42212),
      mM = iM(44287),
      HM = iM(42220),
      hM = iM(40931),
      JM = iM(38064),
      dM = iM(38167),
      yM = iM(38074);
    const lM = yM.HighestCommonFactor,
      EM = {
        ...yM,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: lM
      };
    var UM = iM(44458),
      GM = iM(42248),
      CM = iM(44239),
      eM = iM(44241),
      bM = iM(44478);
    (0, bM.RegisterDumpTools)();
    var wM = iM(41099),
      tM = iM(41105),
      gM = iM(39711),
      uM = iM(41213),
      RM = iM(41560),
      pM = iM(44452);
    let WM = 0;
    const sM = (MM, rM, iM, OM) => {
        if (!MM[iM]) {
          const SM = MM.useDelayedTextureLoading;
          MM.useDelayedTextureLoading = !1;
          const jM = MM._blockEntityCollection;
          MM._blockEntityCollection = !1;
          const aM = RM.h.CreateFromBase64String(rM, OM + WM++, MM, !0, !1, RM.h.BILINEAR_SAMPLINGMODE);
          MM._blockEntityCollection = jM;
          const PM = MM.ph().getLoadedTexturesCache(),
            nM = PM.indexOf(aM.getInternalTexture()); - 1 !== nM && PM.splice(nM, 1), aM.isRGBD = !0, aM.wrapU = RM.h.CLAMP_ADDRESSMODE, aM.wrapV = RM.h.CLAMP_ADDRESSMODE, MM[iM] = aM, MM.useDelayedTextureLoading = SM, pM.e.ExpandRGBDTexture(aM);
          const QM = MM.ph().Rh.add((() => {
            aM.isRGBD = !0;
            const rM = MM.onBeforeRenderObservable.add((() => {
              aM.isReady() && (MM.onBeforeRenderObservable.remove(rM), pM.e.ExpandRGBDTexture(aM))
            }))
          }));
          MM.Rk.add((() => {
            MM.ph().Rh.remove(QM)
          }))
        }
        return MM[iM]
      },
      DM = MM => sM(MM, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      kM = MM => sM(MM, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      ZM = MM => sM(MM, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var oM = iM(41196),
      fM = iM(38040),
      YM = iM(41250),
      NM = iM(41393),
      AM = iM(41463);
    class xM extends NM.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let vM = (() => {
      var MM, rM, iM, OM, SM, jM, aM, PM, nM, QM;
      let zM, LM, mM, HM, hM, JM, dM, yM, lM, EM = AM.b,
        UM = [],
        GM = [],
        CM = [],
        eM = [],
        bM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [];
      return MM = class extends EM {
        get useEnergyConservation() {
          return (0, wM.c)(this, rM, "f")
        }
        set useEnergyConservation(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, wM.c)(this, iM, "f")
        }
        set useSmithVisibilityHeightCorrelated(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get useSphericalHarmonics() {
          return (0, wM.c)(this, OM, "f")
        }
        set useSphericalHarmonics(MM) {
          (0, wM.f)(this, OM, MM, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, wM.c)(this, SM, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(MM) {
          (0, wM.f)(this, SM, MM, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, wM.c)(this, jM, "f")
        }
        set mixIblRadianceWithIrradiance(MM) {
          (0, wM.f)(this, jM, MM, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, wM.c)(this, aM, "f")
        }
        set useLegacySpecularEnergyConservation(MM) {
          (0, wM.f)(this, aM, MM, "f")
        }
        get baseDiffuseModel() {
          return (0, wM.c)(this, PM, "f")
        }
        set baseDiffuseModel(MM) {
          (0, wM.f)(this, PM, MM, "f")
        }
        get dielectricSpecularModel() {
          return (0, wM.c)(this, nM, "f")
        }
        set dielectricSpecularModel(MM) {
          (0, wM.f)(this, nM, MM, "f")
        }
        get conductorSpecularModel() {
          return (0, wM.c)(this, QM, "f")
        }
        set conductorSpecularModel(MM) {
          (0, wM.f)(this, QM, MM, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zM) {
          let LM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zM, "PBRBRDF", 90, new xM, LM), this._useEnergyConservation = MM.DEFAULT_USE_ENERGY_CONSERVATION, rM.set(this, (0, wM.m)(this, UM, MM.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, wM.m)(this, GM), MM.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), iM.set(this, (0, wM.m)(this, CM, MM.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, wM.m)(this, eM), MM.DEFAULT_USE_SPHERICAL_HARMONICS), OM.set(this, (0, wM.m)(this, bM, MM.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, wM.m)(this, gM), MM.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), SM.set(this, (0, wM.m)(this, uM, MM.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, wM.m)(this, RM), MM.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), jM.set(this, (0, wM.m)(this, pM, MM.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, wM.m)(this, WM), MM.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), aM.set(this, (0, wM.m)(this, sM, MM.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, wM.m)(this, DM), MM.DEFAULT_DIFFUSE_MODEL), PM.set(this, (0, wM.m)(this, kM, MM.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, wM.m)(this, ZM), MM.DEFAULT_DIELECTRIC_SPECULAR_MODEL), nM.set(this, (0, wM.m)(this, oM, MM.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, wM.m)(this, fM), MM.DEFAULT_CONDUCTOR_SPECULAR_MODEL), QM.set(this, (0, wM.m)(this, YM, MM.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, wM.m)(this, NM), this._internalMarkAllSubMeshesAsMiscDirty = zM._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(MM) {
          MM.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, MM.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, MM.SPHERICAL_HARMONICS = this._useSphericalHarmonics, MM.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, MM.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, MM.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, MM.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, MM.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, MM.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, SM = new WeakMap, jM = new WeakMap, aM = new WeakMap, PM = new WeakMap, nM = new WeakMap, QM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(EM[Symbol.metadata] ?? null) : void 0;
        zM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], LM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], mM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], HM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], hM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], JM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], dM = [(0, tM.L)("baseDiffuseModel"), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], yM = [(0, tM.L)("dielectricSpecularModel"), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], lM = [(0, tM.L)("conductorSpecularModel"), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], (0, wM.i)(MM, null, zM, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: MM => "useEnergyConservation" in MM,
            get: MM => MM.useEnergyConservation,
            set: (MM, rM) => {
              MM.useEnergyConservation = rM
            }
          },
          metadata: rM
        }, UM, GM), (0, wM.i)(MM, null, LM, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: MM => "useSmithVisibilityHeightCorrelated" in MM,
            get: MM => MM.useSmithVisibilityHeightCorrelated,
            set: (MM, rM) => {
              MM.useSmithVisibilityHeightCorrelated = rM
            }
          },
          metadata: rM
        }, CM, eM), (0, wM.i)(MM, null, mM, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: MM => "useSphericalHarmonics" in MM,
            get: MM => MM.useSphericalHarmonics,
            set: (MM, rM) => {
              MM.useSphericalHarmonics = rM
            }
          },
          metadata: rM
        }, bM, gM), (0, wM.i)(MM, null, HM, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: MM => "useSpecularGlossinessInputEnergyConservation" in MM,
            get: MM => MM.useSpecularGlossinessInputEnergyConservation,
            set: (MM, rM) => {
              MM.useSpecularGlossinessInputEnergyConservation = rM
            }
          },
          metadata: rM
        }, uM, RM), (0, wM.i)(MM, null, hM, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: MM => "mixIblRadianceWithIrradiance" in MM,
            get: MM => MM.mixIblRadianceWithIrradiance,
            set: (MM, rM) => {
              MM.mixIblRadianceWithIrradiance = rM
            }
          },
          metadata: rM
        }, pM, WM), (0, wM.i)(MM, null, JM, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: MM => "useLegacySpecularEnergyConservation" in MM,
            get: MM => MM.useLegacySpecularEnergyConservation,
            set: (MM, rM) => {
              MM.useLegacySpecularEnergyConservation = rM
            }
          },
          metadata: rM
        }, sM, DM), (0, wM.i)(MM, null, dM, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: MM => "baseDiffuseModel" in MM,
            get: MM => MM.baseDiffuseModel,
            set: (MM, rM) => {
              MM.baseDiffuseModel = rM
            }
          },
          metadata: rM
        }, kM, ZM), (0, wM.i)(MM, null, yM, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: MM => "dielectricSpecularModel" in MM,
            get: MM => MM.dielectricSpecularModel,
            set: (MM, rM) => {
              MM.dielectricSpecularModel = rM
            }
          },
          metadata: rM
        }, oM, fM), (0, wM.i)(MM, null, lM, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: MM => "conductorSpecularModel" in MM,
            get: MM => MM.conductorSpecularModel,
            set: (MM, rM) => {
              MM.conductorSpecularModel = rM
            }
          },
          metadata: rM
        }, YM, NM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM.DEFAULT_USE_ENERGY_CONSERVATION = !0, MM.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, MM.DEFAULT_USE_SPHERICAL_HARMONICS = !0, MM.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, MM.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, MM.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, MM.DEFAULT_DIFFUSE_MODEL = 0, MM.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, MM.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, MM
    })();
    var FM = iM(41378),
      BM = iM(38173),
      XM = iM(41386),
      IM = iM(41220),
      KM = iM(41442),
      qM = iM(41438),
      TM = iM(41447),
      VM = iM(41426);
    class cM extends NM.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Mr = (() => {
      var MM, rM, iM, OM, SM, jM, aM, PM, nM, QM;
      let zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM = AM.b,
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [],
        YM = [],
        NM = [],
        xM = [],
        vM = [],
        FM = [],
        XM = [],
        IM = [],
        KM = [],
        TM = [],
        Mr = [],
        rr = [],
        ir = [],
        Or = [],
        Sr = [],
        jr = [],
        ar = [],
        Pr = [];
      return MM = class extends bM {
        get isEnabled() {
          return (0, wM.c)(this, rM, "f")
        }
        set isEnabled(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        get indexOfRefraction() {
          return (0, wM.c)(this, iM, "f")
        }
        set indexOfRefraction(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get texture() {
          return (0, wM.c)(this, OM, "f")
        }
        set texture(MM) {
          (0, wM.f)(this, OM, MM, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, wM.c)(this, SM, "f")
        }
        set useRoughnessFromMainTexture(MM) {
          (0, wM.f)(this, SM, MM, "f")
        }
        get textureRoughness() {
          return (0, wM.c)(this, jM, "f")
        }
        set textureRoughness(MM) {
          (0, wM.f)(this, jM, MM, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, wM.c)(this, aM, "f")
        }
        set remapF0OnInterfaceChange(MM) {
          (0, wM.f)(this, aM, MM, "f")
        }
        get bumpTexture() {
          return (0, wM.c)(this, PM, "f")
        }
        set bumpTexture(MM) {
          (0, wM.f)(this, PM, MM, "f")
        }
        get isTintEnabled() {
          return (0, wM.c)(this, nM, "f")
        }
        set isTintEnabled(MM) {
          (0, wM.f)(this, nM, MM, "f")
        }
        get tintTexture() {
          return (0, wM.c)(this, QM, "f")
        }
        set tintTexture(MM) {
          (0, wM.f)(this, QM, MM, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zM) {
          let LM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zM, "PBRClearCoat", 100, new cM, LM), this._isEnabled = !1, rM.set(this, (0, wM.m)(this, gM, !1)), this.intensity = ((0, wM.m)(this, uM), (0, wM.m)(this, RM, 1)), this.roughness = ((0, wM.m)(this, pM), (0, wM.m)(this, WM, 0)), this._indexOfRefraction = ((0, wM.m)(this, sM), MM._DefaultIndexOfRefraction), iM.set(this, (0, wM.m)(this, DM, MM._DefaultIndexOfRefraction)), this._texture = ((0, wM.m)(this, kM), null), OM.set(this, (0, wM.m)(this, ZM, null)), this._useRoughnessFromMainTexture = ((0, wM.m)(this, oM), !0), SM.set(this, (0, wM.m)(this, fM, !0)), this._textureRoughness = ((0, wM.m)(this, YM), null), jM.set(this, (0, wM.m)(this, NM, null)), this._remapF0OnInterfaceChange = ((0, wM.m)(this, xM), !0), aM.set(this, (0, wM.m)(this, vM, !0)), this._bumpTexture = ((0, wM.m)(this, FM), null), PM.set(this, (0, wM.m)(this, XM, null)), this._isTintEnabled = ((0, wM.m)(this, IM), !1), nM.set(this, (0, wM.m)(this, KM, !1)), this.tintColor = ((0, wM.m)(this, TM), (0, wM.m)(this, Mr, BM.d.White())), this.tintColorAtDistance = ((0, wM.m)(this, rr), (0, wM.m)(this, ir, 1)), this.tintThickness = ((0, wM.m)(this, Or), (0, wM.m)(this, Sr, 1)), this._tintTexture = ((0, wM.m)(this, jr), null), QM.set(this, (0, wM.m)(this, ar, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wM.m)(this, Pr), this._internalMarkAllSubMeshesAsTexturesDirty = zM._dirtyCallbacks[1]
        }
        isReadyForSubMesh(MM, rM, iM) {
          if (!this._isEnabled) return !0;
          const OM = this._material._disableBumpMap;
          if (MM._areTexturesDirty && rM.texturesEnabled) {
            if (this._texture && qM.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && qM.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (iM.getCaps().standardDerivatives && this._bumpTexture && qM.e.ClearCoatBumpTextureEnabled && !OM && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && qM.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(rM, iM) {
          this._isEnabled ? (rM.CLEARCOAT = !0, rM.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, rM.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, rM._areTexturesDirty && iM.texturesEnabled && (this._texture && qM.e.ClearCoatTextureEnabled ? (0, VM.W)(this._texture, rM, "CLEARCOAT_TEXTURE") : rM.CLEARCOAT_TEXTURE = !1, this._textureRoughness && qM.e.ClearCoatTextureEnabled ? (0, VM.W)(this._textureRoughness, rM, "CLEARCOAT_TEXTURE_ROUGHNESS") : rM.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && qM.e.ClearCoatBumpTextureEnabled ? (0, VM.W)(this._bumpTexture, rM, "CLEARCOAT_BUMP") : rM.CLEARCOAT_BUMP = !1, rM.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === MM._DefaultIndexOfRefraction, this._isTintEnabled ? (rM.CLEARCOAT_TINT = !0, this._tintTexture && qM.e.ClearCoatTintTextureEnabled ? ((0, VM.W)(this._tintTexture, rM, "CLEARCOAT_TINT_TEXTURE"), rM.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : rM.CLEARCOAT_TINT_TEXTURE = !1) : (rM.CLEARCOAT_TINT = !1, rM.CLEARCOAT_TINT_TEXTURE = !1))) : (rM.CLEARCOAT = !1, rM.CLEARCOAT_TEXTURE = !1, rM.CLEARCOAT_TEXTURE_ROUGHNESS = !1, rM.CLEARCOAT_BUMP = !1, rM.CLEARCOAT_TINT = !1, rM.CLEARCOAT_TINT_TEXTURE = !1, rM.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, rM.CLEARCOAT_DEFAULTIOR = !1, rM.CLEARCOAT_TEXTUREDIRECTUV = 0, rM.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, rM.CLEARCOAT_BUMPDIRECTUV = 0, rM.CLEARCOAT_REMAP_F0 = !1, rM.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, rM.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(MM, rM, iM, OM) {
          if (!this._isEnabled) return;
          const SM = OM.materialDefines,
            jM = this._material.isFrozen,
            aM = this._material._disableBumpMap,
            PM = this._material._invertNormalMapX,
            nM = this._material._invertNormalMapY;
          if (!MM.useUbo || !jM || !MM.isSync) {
            (this._texture || this._textureRoughness) && qM.e.ClearCoatTextureEnabled && (MM.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, VM.x)(this._texture, MM, "clearCoat"), this._textureRoughness && !SM.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, VM.x)(this._textureRoughness, MM, "clearCoatRoughness")), this._bumpTexture && iM.getCaps().standardDerivatives && qM.e.ClearCoatTextureEnabled && !aM && (MM.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, VM.x)(this._bumpTexture, MM, "clearCoatBump"), rM._mirroredCameraPosition ? MM.updateFloat2("vClearCoatTangentSpaceParams", PM ? 1 : -1, nM ? 1 : -1) : MM.updateFloat2("vClearCoatTangentSpaceParams", PM ? -1 : 1, nM ? -1 : 1)), this._tintTexture && qM.e.ClearCoatTintTextureEnabled && (MM.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, VM.x)(this._tintTexture, MM, "clearCoatTint")), MM.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const OM = 1 - this._indexOfRefraction,
              jM = 1 + this._indexOfRefraction,
              QM = Math.pow(-OM / jM, 2),
              zM = 1 / this._indexOfRefraction;
            MM.updateFloat4("vClearCoatRefractionParams", QM, zM, OM, jM), this._isTintEnabled && (MM.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), MM.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          rM.texturesEnabled && (this._texture && qM.e.ClearCoatTextureEnabled && MM.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !SM.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && qM.e.ClearCoatTextureEnabled && MM.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && iM.getCaps().standardDerivatives && qM.e.ClearCoatBumpTextureEnabled && !aM && MM.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && qM.e.ClearCoatTintTextureEnabled && MM.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(MM) {
          return this._texture === MM || (this._textureRoughness === MM || (this._bumpTexture === MM || this._tintTexture === MM))
        }
        getActiveTextures(MM) {
          this._texture && MM.push(this._texture), this._textureRoughness && MM.push(this._textureRoughness), this._bumpTexture && MM.push(this._bumpTexture), this._tintTexture && MM.push(this._tintTexture)
        }
        getAnimatables(MM) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && MM.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && MM.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && MM.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && MM.push(this._tintTexture)
        }
        dispose(MM) {
          MM && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(MM, rM, iM) {
          return MM.CLEARCOAT_BUMP && rM.addFallback(iM++, "CLEARCOAT_BUMP"), MM.CLEARCOAT_TINT && rM.addFallback(iM++, "CLEARCOAT_TINT"), MM.CLEARCOAT && rM.addFallback(iM++, "CLEARCOAT"), iM
        }
        getSamplers(MM) {
          MM.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, SM = new WeakMap, jM = new WeakMap, aM = new WeakMap, PM = new WeakMap, nM = new WeakMap, QM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(bM[Symbol.metadata] ?? null) : void 0;
        zM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], LM = [(0, tM.L)()], mM = [(0, tM.L)()], HM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], JM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], yM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], lM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], EM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], UM = [(0, tM.r)()], GM = [(0, tM.L)()], CM = [(0, tM.L)()], eM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], (0, wM.i)(MM, null, zM, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isEnabled" in MM,
            get: MM => MM.isEnabled,
            set: (MM, rM) => {
              MM.isEnabled = rM
            }
          },
          metadata: rM
        }, gM, uM), (0, wM.i)(MM, null, HM, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: MM => "indexOfRefraction" in MM,
            get: MM => MM.indexOfRefraction,
            set: (MM, rM) => {
              MM.indexOfRefraction = rM
            }
          },
          metadata: rM
        }, DM, kM), (0, wM.i)(MM, null, hM, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: MM => "texture" in MM,
            get: MM => MM.texture,
            set: (MM, rM) => {
              MM.texture = rM
            }
          },
          metadata: rM
        }, ZM, oM), (0, wM.i)(MM, null, JM, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "useRoughnessFromMainTexture" in MM,
            get: MM => MM.useRoughnessFromMainTexture,
            set: (MM, rM) => {
              MM.useRoughnessFromMainTexture = rM
            }
          },
          metadata: rM
        }, fM, YM), (0, wM.i)(MM, null, dM, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: MM => "textureRoughness" in MM,
            get: MM => MM.textureRoughness,
            set: (MM, rM) => {
              MM.textureRoughness = rM
            }
          },
          metadata: rM
        }, NM, xM), (0, wM.i)(MM, null, yM, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: MM => "remapF0OnInterfaceChange" in MM,
            get: MM => MM.remapF0OnInterfaceChange,
            set: (MM, rM) => {
              MM.remapF0OnInterfaceChange = rM
            }
          },
          metadata: rM
        }, vM, FM), (0, wM.i)(MM, null, lM, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "bumpTexture" in MM,
            get: MM => MM.bumpTexture,
            set: (MM, rM) => {
              MM.bumpTexture = rM
            }
          },
          metadata: rM
        }, XM, IM), (0, wM.i)(MM, null, EM, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isTintEnabled" in MM,
            get: MM => MM.isTintEnabled,
            set: (MM, rM) => {
              MM.isTintEnabled = rM
            }
          },
          metadata: rM
        }, KM, TM), (0, wM.i)(MM, null, eM, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "tintTexture" in MM,
            get: MM => MM.tintTexture,
            set: (MM, rM) => {
              MM.tintTexture = rM
            }
          },
          metadata: rM
        }, ar, Pr), (0, wM.i)(null, null, LM, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "intensity" in MM,
            get: MM => MM.intensity,
            set: (MM, rM) => {
              MM.intensity = rM
            }
          },
          metadata: rM
        }, RM, pM), (0, wM.i)(null, null, mM, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: MM => "roughness" in MM,
            get: MM => MM.roughness,
            set: (MM, rM) => {
              MM.roughness = rM
            }
          },
          metadata: rM
        }, WM, sM), (0, wM.i)(null, null, UM, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "tintColor" in MM,
            get: MM => MM.tintColor,
            set: (MM, rM) => {
              MM.tintColor = rM
            }
          },
          metadata: rM
        }, Mr, rr), (0, wM.i)(null, null, GM, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: MM => "tintColorAtDistance" in MM,
            get: MM => MM.tintColorAtDistance,
            set: (MM, rM) => {
              MM.tintColorAtDistance = rM
            }
          },
          metadata: rM
        }, ir, Or), (0, wM.i)(null, null, CM, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: MM => "tintThickness" in MM,
            get: MM => MM.tintThickness,
            set: (MM, rM) => {
              MM.tintThickness = rM
            }
          },
          metadata: rM
        }, Sr, jr), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM._DefaultIndexOfRefraction = 1.5, MM
    })();
    class rr extends NM.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let ir = (() => {
      var MM, rM, iM, OM;
      let SM, jM, aM, PM, nM, QM, zM, LM = AM.b,
        mM = [],
        HM = [],
        hM = [],
        JM = [],
        dM = [],
        yM = [],
        lM = [],
        EM = [],
        UM = [],
        GM = [],
        CM = [],
        eM = [],
        bM = [],
        gM = [];
      return MM = class extends LM {
        get isEnabled() {
          return (0, wM.c)(this, rM, "f")
        }
        set isEnabled(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        get texture() {
          return (0, wM.c)(this, iM, "f")
        }
        set texture(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get thicknessTexture() {
          return (0, wM.c)(this, OM, "f")
        }
        set thicknessTexture(MM) {
          (0, wM.f)(this, OM, MM, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(SM) {
          let jM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SM, "PBRIridescence", 110, new rr, jM), this._isEnabled = !1, rM.set(this, (0, wM.m)(this, mM, !1)), this.intensity = ((0, wM.m)(this, HM), (0, wM.m)(this, hM, 1)), this.minimumThickness = ((0, wM.m)(this, JM), (0, wM.m)(this, dM, MM._DefaultMinimumThickness)), this.maximumThickness = ((0, wM.m)(this, yM), (0, wM.m)(this, lM, MM._DefaultMaximumThickness)), this.indexOfRefraction = ((0, wM.m)(this, EM), (0, wM.m)(this, UM, MM._DefaultIndexOfRefraction)), this._texture = ((0, wM.m)(this, GM), null), iM.set(this, (0, wM.m)(this, CM, null)), this._thicknessTexture = ((0, wM.m)(this, eM), null), OM.set(this, (0, wM.m)(this, bM, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wM.m)(this, gM), this._internalMarkAllSubMeshesAsTexturesDirty = SM._dirtyCallbacks[1]
        }
        isReadyForSubMesh(MM, rM) {
          if (!this._isEnabled) return !0;
          if (MM._areTexturesDirty && rM.texturesEnabled) {
            if (this._texture && qM.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && qM.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(MM, rM) {
          this._isEnabled ? (MM.IRIDESCENCE = !0, MM._areTexturesDirty && rM.texturesEnabled && (this._texture && qM.e.IridescenceTextureEnabled ? (0, VM.W)(this._texture, MM, "IRIDESCENCE_TEXTURE") : MM.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && qM.e.IridescenceTextureEnabled ? (0, VM.W)(this._thicknessTexture, MM, "IRIDESCENCE_THICKNESS_TEXTURE") : MM.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (MM.IRIDESCENCE = !1, MM.IRIDESCENCE_TEXTURE = !1, MM.IRIDESCENCE_THICKNESS_TEXTURE = !1, MM.IRIDESCENCE_TEXTUREDIRECTUV = 0, MM.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(MM, rM) {
          if (!this._isEnabled) return;
          const iM = this._material.isFrozen;
          MM.useUbo && iM && MM.isSync || ((this._texture || this._thicknessTexture) && qM.e.IridescenceTextureEnabled && (MM.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, VM.x)(this._texture, MM, "iridescence"), this._thicknessTexture && (0, VM.x)(this._thicknessTexture, MM, "iridescenceThickness")), MM.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), rM.texturesEnabled && (this._texture && qM.e.IridescenceTextureEnabled && MM.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && qM.e.IridescenceTextureEnabled && MM.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(MM) {
          return this._texture === MM || this._thicknessTexture === MM
        }
        getActiveTextures(MM) {
          this._texture && MM.push(this._texture), this._thicknessTexture && MM.push(this._thicknessTexture)
        }
        getAnimatables(MM) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && MM.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && MM.push(this._thicknessTexture)
        }
        dispose(MM) {
          MM && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(MM, rM, iM) {
          return MM.IRIDESCENCE && rM.addFallback(iM++, "IRIDESCENCE"), iM
        }
        getSamplers(MM) {
          MM.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(LM[Symbol.metadata] ?? null) : void 0;
        SM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], jM = [(0, tM.L)()], aM = [(0, tM.L)()], PM = [(0, tM.L)()], nM = [(0, tM.L)()], QM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], zM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], (0, wM.i)(MM, null, SM, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isEnabled" in MM,
            get: MM => MM.isEnabled,
            set: (MM, rM) => {
              MM.isEnabled = rM
            }
          },
          metadata: rM
        }, mM, HM), (0, wM.i)(MM, null, QM, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: MM => "texture" in MM,
            get: MM => MM.texture,
            set: (MM, rM) => {
              MM.texture = rM
            }
          },
          metadata: rM
        }, CM, eM), (0, wM.i)(MM, null, zM, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "thicknessTexture" in MM,
            get: MM => MM.thicknessTexture,
            set: (MM, rM) => {
              MM.thicknessTexture = rM
            }
          },
          metadata: rM
        }, bM, gM), (0, wM.i)(null, null, jM, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "intensity" in MM,
            get: MM => MM.intensity,
            set: (MM, rM) => {
              MM.intensity = rM
            }
          },
          metadata: rM
        }, hM, JM), (0, wM.i)(null, null, aM, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: MM => "minimumThickness" in MM,
            get: MM => MM.minimumThickness,
            set: (MM, rM) => {
              MM.minimumThickness = rM
            }
          },
          metadata: rM
        }, dM, yM), (0, wM.i)(null, null, PM, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: MM => "maximumThickness" in MM,
            get: MM => MM.maximumThickness,
            set: (MM, rM) => {
              MM.maximumThickness = rM
            }
          },
          metadata: rM
        }, lM, EM), (0, wM.i)(null, null, nM, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: MM => "indexOfRefraction" in MM,
            get: MM => MM.indexOfRefraction,
            set: (MM, rM) => {
              MM.indexOfRefraction = rM
            }
          },
          metadata: rM
        }, UM, GM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM._DefaultMinimumThickness = 100, MM._DefaultMaximumThickness = 400, MM._DefaultIndexOfRefraction = 1.3, MM
    })();
    class Or extends NM.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Sr = (() => {
      var MM, rM, iM, OM;
      let SM, jM, aM, PM, nM, QM = AM.b,
        zM = [],
        LM = [],
        mM = [],
        HM = [],
        hM = [],
        JM = [],
        dM = [],
        yM = [],
        lM = [],
        EM = [];
      return MM = class extends QM {
        get isEnabled() {
          return (0, wM.c)(this, rM, "f")
        }
        set isEnabled(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        set angle(MM) {
          this.direction.x = Math.cos(MM), this.direction.y = Math.sin(MM)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, wM.c)(this, iM, "f")
        }
        set texture(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get legacy() {
          return (0, wM.c)(this, OM, "f")
        }
        set legacy(MM) {
          (0, wM.f)(this, OM, MM, "f")
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
        constructor(MM) {
          let SM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MM, "PBRAnisotropic", 110, new Or, SM), this._isEnabled = !1, rM.set(this, (0, wM.m)(this, zM, !1)), this.intensity = ((0, wM.m)(this, LM), (0, wM.m)(this, mM, 1)), this.direction = ((0, wM.m)(this, HM), (0, wM.m)(this, hM, new fM.o(1, 0))), this._texture = ((0, wM.m)(this, JM), null), iM.set(this, (0, wM.m)(this, dM, null)), this._legacy = ((0, wM.m)(this, yM), !1), OM.set(this, (0, wM.m)(this, lM, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wM.m)(this, EM), this._internalMarkAllSubMeshesAsTexturesDirty = MM._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = MM._dirtyCallbacks[16]
        }
        isReadyForSubMesh(MM, rM) {
          return !this._isEnabled || !(MM._areTexturesDirty && rM.texturesEnabled && this._texture && qM.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(MM, rM, iM) {
          this._isEnabled ? (MM.ANISOTROPIC = this._isEnabled, this._isEnabled && !iM.isVerticesDataPresent(YM.j.TangentKind) && (MM._needUVs = !0, MM.MAINUV1 = !0), MM._areTexturesDirty && rM.texturesEnabled && (this._texture && qM.e.AnisotropicTextureEnabled ? (0, VM.W)(this._texture, MM, "ANISOTROPIC_TEXTURE") : MM.ANISOTROPIC_TEXTURE = !1), MM._areMiscDirty && (MM.ANISOTROPIC_LEGACY = this._legacy)) : (MM.ANISOTROPIC = !1, MM.ANISOTROPIC_TEXTURE = !1, MM.ANISOTROPIC_TEXTUREDIRECTUV = 0, MM.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(MM, rM) {
          if (!this._isEnabled) return;
          const iM = this._material.isFrozen;
          MM.useUbo && iM && MM.isSync || (this._texture && qM.e.AnisotropicTextureEnabled && (MM.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, VM.x)(this._texture, MM, "anisotropy")), MM.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), rM.texturesEnabled && this._texture && qM.e.AnisotropicTextureEnabled && MM.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(MM) {
          return this._texture === MM
        }
        getActiveTextures(MM) {
          this._texture && MM.push(this._texture)
        }
        getAnimatables(MM) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && MM.push(this._texture)
        }
        dispose(MM) {
          MM && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(MM, rM, iM) {
          return MM.ANISOTROPIC && rM.addFallback(iM++, "ANISOTROPIC"), iM
        }
        getSamplers(MM) {
          MM.push("anisotropySampler")
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
        parse(MM, rM, iM) {
          super.parse(MM, rM, iM), void 0 === MM.legacy && (this.legacy = !0)
        }
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(QM[Symbol.metadata] ?? null) : void 0;
        SM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], jM = [(0, tM.L)()], aM = [(0, tM.F)()], PM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], nM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], (0, wM.i)(MM, null, SM, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isEnabled" in MM,
            get: MM => MM.isEnabled,
            set: (MM, rM) => {
              MM.isEnabled = rM
            }
          },
          metadata: rM
        }, zM, LM), (0, wM.i)(MM, null, PM, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: MM => "texture" in MM,
            get: MM => MM.texture,
            set: (MM, rM) => {
              MM.texture = rM
            }
          },
          metadata: rM
        }, dM, yM), (0, wM.i)(MM, null, nM, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: MM => "legacy" in MM,
            get: MM => MM.legacy,
            set: (MM, rM) => {
              MM.legacy = rM
            }
          },
          metadata: rM
        }, lM, EM), (0, wM.i)(null, null, jM, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "intensity" in MM,
            get: MM => MM.intensity,
            set: (MM, rM) => {
              MM.intensity = rM
            }
          },
          metadata: rM
        }, mM, HM), (0, wM.i)(null, null, aM, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: MM => "direction" in MM,
            get: MM => MM.direction,
            set: (MM, rM) => {
              MM.direction = rM
            }
          },
          metadata: rM
        }, hM, JM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM
    })();
    class jr extends NM.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let ar = (() => {
      var MM, rM, iM, OM, SM, jM, aM, PM;
      let nM, QM, zM, LM, mM, HM, hM, JM, dM, yM = AM.b,
        lM = [],
        EM = [],
        UM = [],
        GM = [],
        CM = [],
        eM = [],
        bM = [],
        gM = [],
        uM = [],
        RM = [],
        pM = [],
        WM = [],
        sM = [],
        DM = [],
        kM = [],
        ZM = [],
        oM = [],
        fM = [];
      return MM = class extends yM {
        get isEnabled() {
          return (0, wM.c)(this, rM, "f")
        }
        set isEnabled(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, wM.c)(this, iM, "f")
        }
        set linkSheenWithAlbedo(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get texture() {
          return (0, wM.c)(this, OM, "f")
        }
        set texture(MM) {
          (0, wM.f)(this, OM, MM, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, wM.c)(this, SM, "f")
        }
        set useRoughnessFromMainTexture(MM) {
          (0, wM.f)(this, SM, MM, "f")
        }
        get roughness() {
          return (0, wM.c)(this, jM, "f")
        }
        set roughness(MM) {
          (0, wM.f)(this, jM, MM, "f")
        }
        get textureRoughness() {
          return (0, wM.c)(this, aM, "f")
        }
        set textureRoughness(MM) {
          (0, wM.f)(this, aM, MM, "f")
        }
        get albedoScaling() {
          return (0, wM.c)(this, PM, "f")
        }
        set albedoScaling(MM) {
          (0, wM.f)(this, PM, MM, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(MM) {
          let nM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MM, "Sheen", 120, new jr, nM), this._isEnabled = !1, rM.set(this, (0, wM.m)(this, lM, !1)), this._linkSheenWithAlbedo = ((0, wM.m)(this, EM), !1), iM.set(this, (0, wM.m)(this, UM, !1)), this.intensity = ((0, wM.m)(this, GM), (0, wM.m)(this, CM, 1)), this.color = ((0, wM.m)(this, eM), (0, wM.m)(this, bM, BM.d.White())), this._texture = ((0, wM.m)(this, gM), null), OM.set(this, (0, wM.m)(this, uM, null)), this._useRoughnessFromMainTexture = ((0, wM.m)(this, RM), !0), SM.set(this, (0, wM.m)(this, pM, !0)), this._roughness = ((0, wM.m)(this, WM), null), jM.set(this, (0, wM.m)(this, sM, null)), this._textureRoughness = ((0, wM.m)(this, DM), null), aM.set(this, (0, wM.m)(this, kM, null)), this._albedoScaling = ((0, wM.m)(this, ZM), !1), PM.set(this, (0, wM.m)(this, oM, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wM.m)(this, fM), this._internalMarkAllSubMeshesAsTexturesDirty = MM._dirtyCallbacks[1]
        }
        isReadyForSubMesh(MM, rM) {
          if (!this._isEnabled) return !0;
          if (MM._areTexturesDirty && rM.texturesEnabled) {
            if (this._texture && qM.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && qM.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(MM, rM) {
          this._isEnabled ? (MM.SHEEN = !0, MM.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, MM.SHEEN_ROUGHNESS = null !== this._roughness, MM.SHEEN_ALBEDOSCALING = this._albedoScaling, MM.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, MM._areTexturesDirty && rM.texturesEnabled && (this._texture && qM.e.SheenTextureEnabled ? ((0, VM.W)(this._texture, MM, "SHEEN_TEXTURE"), MM.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : MM.SHEEN_TEXTURE = !1, this._textureRoughness && qM.e.SheenTextureEnabled ? (0, VM.W)(this._textureRoughness, MM, "SHEEN_TEXTURE_ROUGHNESS") : MM.SHEEN_TEXTURE_ROUGHNESS = !1)) : (MM.SHEEN = !1, MM.SHEEN_TEXTURE = !1, MM.SHEEN_TEXTURE_ROUGHNESS = !1, MM.SHEEN_LINKWITHALBEDO = !1, MM.SHEEN_ROUGHNESS = !1, MM.SHEEN_ALBEDOSCALING = !1, MM.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, MM.SHEEN_GAMMATEXTURE = !1, MM.SHEEN_TEXTUREDIRECTUV = 0, MM.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(MM, rM, iM, OM) {
          if (!this._isEnabled) return;
          const SM = OM.materialDefines,
            jM = this._material.isFrozen;
          MM.useUbo && jM && MM.isSync || ((this._texture || this._textureRoughness) && qM.e.SheenTextureEnabled && (MM.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, VM.x)(this._texture, MM, "sheen"), this._textureRoughness && !SM.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, VM.x)(this._textureRoughness, MM, "sheenRoughness")), MM.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && MM.updateFloat("vSheenRoughness", this._roughness)), rM.texturesEnabled && (this._texture && qM.e.SheenTextureEnabled && MM.setTexture("sheenSampler", this._texture), this._textureRoughness && !SM.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && qM.e.SheenTextureEnabled && MM.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(MM) {
          return this._texture === MM || this._textureRoughness === MM
        }
        getActiveTextures(MM) {
          this._texture && MM.push(this._texture), this._textureRoughness && MM.push(this._textureRoughness)
        }
        getAnimatables(MM) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && MM.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && MM.push(this._textureRoughness)
        }
        dispose(MM) {
          MM && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(MM, rM, iM) {
          return MM.SHEEN && rM.addFallback(iM++, "SHEEN"), iM
        }
        getSamplers(MM) {
          MM.push("sheenSampler", "sheenRoughnessSampler")
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
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, SM = new WeakMap, jM = new WeakMap, aM = new WeakMap, PM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(yM[Symbol.metadata] ?? null) : void 0;
        nM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], QM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], zM = [(0, tM.L)()], LM = [(0, tM.r)()], mM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], HM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], JM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], (0, wM.i)(MM, null, nM, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isEnabled" in MM,
            get: MM => MM.isEnabled,
            set: (MM, rM) => {
              MM.isEnabled = rM
            }
          },
          metadata: rM
        }, lM, EM), (0, wM.i)(MM, null, QM, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: MM => "linkSheenWithAlbedo" in MM,
            get: MM => MM.linkSheenWithAlbedo,
            set: (MM, rM) => {
              MM.linkSheenWithAlbedo = rM
            }
          },
          metadata: rM
        }, UM, GM), (0, wM.i)(MM, null, mM, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: MM => "texture" in MM,
            get: MM => MM.texture,
            set: (MM, rM) => {
              MM.texture = rM
            }
          },
          metadata: rM
        }, uM, RM), (0, wM.i)(MM, null, HM, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "useRoughnessFromMainTexture" in MM,
            get: MM => MM.useRoughnessFromMainTexture,
            set: (MM, rM) => {
              MM.useRoughnessFromMainTexture = rM
            }
          },
          metadata: rM
        }, pM, WM), (0, wM.i)(MM, null, hM, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: MM => "roughness" in MM,
            get: MM => MM.roughness,
            set: (MM, rM) => {
              MM.roughness = rM
            }
          },
          metadata: rM
        }, sM, DM), (0, wM.i)(MM, null, JM, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: MM => "textureRoughness" in MM,
            get: MM => MM.textureRoughness,
            set: (MM, rM) => {
              MM.textureRoughness = rM
            }
          },
          metadata: rM
        }, kM, ZM), (0, wM.i)(MM, null, dM, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: MM => "albedoScaling" in MM,
            get: MM => MM.albedoScaling,
            set: (MM, rM) => {
              MM.albedoScaling = rM
            }
          },
          metadata: rM
        }, oM, fM), (0, wM.i)(null, null, zM, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "intensity" in MM,
            get: MM => MM.intensity,
            set: (MM, rM) => {
              MM.intensity = rM
            }
          },
          metadata: rM
        }, CM, eM), (0, wM.i)(null, null, LM, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: MM => "color" in MM,
            get: MM => MM.color,
            set: (MM, rM) => {
              MM.color = rM
            }
          },
          metadata: rM
        }, bM, gM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM
    })();
    class Pr extends NM.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let nr = (() => {
      var MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM;
      let yM, lM, EM, UM, GM, CM, eM, bM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, YM, NM, xM, vM, FM, XM, IM, KM, TM, cM, Mr, rr, ir = AM.b,
        Or = [],
        Sr = [],
        jr = [],
        ar = [],
        nr = [],
        Qr = [],
        zr = [],
        Lr = [],
        mr = [],
        Hr = [],
        hr = [],
        Jr = [],
        dr = [],
        yr = [],
        lr = [],
        Er = [],
        Ur = [],
        Gr = [],
        Cr = [],
        er = [],
        br = [],
        wr = [],
        tr = [],
        gr = [],
        ur = [],
        Rr = [],
        pr = [],
        Wr = [],
        sr = [],
        Dr = [],
        kr = [],
        Zr = [],
        or = [],
        fr = [],
        Yr = [],
        Nr = [],
        Ar = [],
        xr = [],
        vr = [],
        Fr = [],
        Br = [],
        Xr = [],
        Ir = [],
        Kr = [],
        qr = [],
        Tr = [],
        Vr = [],
        cr = [],
        Mi = [],
        ri = [],
        ii = [],
        Oi = [],
        Si = [],
        ji = [],
        ai = [],
        Pi = [],
        ni = [],
        Qi = [],
        zi = [],
        Li = [];
      return MM = class extends ir {
        get isRefractionEnabled() {
          return (0, wM.c)(this, rM, "f")
        }
        set isRefractionEnabled(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        get isTranslucencyEnabled() {
          return (0, wM.c)(this, iM, "f")
        }
        set isTranslucencyEnabled(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get isDispersionEnabled() {
          return (0, wM.c)(this, OM, "f")
        }
        set isDispersionEnabled(MM) {
          (0, wM.f)(this, OM, MM, "f")
        }
        get isScatteringEnabled() {
          return (0, wM.c)(this, SM, "f")
        }
        set isScatteringEnabled(MM) {
          (0, wM.f)(this, SM, MM, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(MM) {
          this._scene.enableSubSurfaceForPrePass() && MM && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(MM))
        }
        get useAlbedoToTintRefraction() {
          return (0, wM.c)(this, jM, "f")
        }
        set useAlbedoToTintRefraction(MM) {
          (0, wM.f)(this, jM, MM, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, wM.c)(this, aM, "f")
        }
        set useAlbedoToTintTranslucency(MM) {
          (0, wM.f)(this, aM, MM, "f")
        }
        get thicknessTexture() {
          return (0, wM.c)(this, PM, "f")
        }
        set thicknessTexture(MM) {
          (0, wM.f)(this, PM, MM, "f")
        }
        get refractionTexture() {
          return (0, wM.c)(this, nM, "f")
        }
        set refractionTexture(MM) {
          (0, wM.f)(this, nM, MM, "f")
        }
        get indexOfRefraction() {
          return (0, wM.c)(this, QM, "f")
        }
        set indexOfRefraction(MM) {
          (0, wM.f)(this, QM, MM, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(MM) {
          const rM = MM >= 1 ? MM : -1;
          this._volumeIndexOfRefraction !== rM && (this._volumeIndexOfRefraction = rM, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, wM.c)(this, zM, "f")
        }
        set invertRefractionY(MM) {
          (0, wM.f)(this, zM, MM, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, wM.c)(this, LM, "f")
        }
        set linkRefractionWithTransparency(MM) {
          (0, wM.f)(this, LM, MM, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, wM.c)(this, mM, "f")
        }
        set useMaskFromThicknessTexture(MM) {
          (0, wM.f)(this, mM, MM, "f")
        }
        get refractionIntensityTexture() {
          return (0, wM.c)(this, HM, "f")
        }
        set refractionIntensityTexture(MM) {
          (0, wM.f)(this, HM, MM, "f")
        }
        get translucencyIntensityTexture() {
          return (0, wM.c)(this, hM, "f")
        }
        set translucencyIntensityTexture(MM) {
          (0, wM.f)(this, hM, MM, "f")
        }
        get translucencyColorTexture() {
          return (0, wM.c)(this, JM, "f")
        }
        set translucencyColorTexture(MM) {
          (0, wM.f)(this, JM, MM, "f")
        }
        get useGltfStyleTextures() {
          return (0, wM.c)(this, dM, "f")
        }
        set useGltfStyleTextures(MM) {
          (0, wM.f)(this, dM, MM, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(MM) {
          this.legacyTranslucency = MM
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
        constructor(yM) {
          let lM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yM, "PBRSubSurface", 130, new Pr, lM), this._isRefractionEnabled = !1, rM.set(this, (0, wM.m)(this, Or, !1)), this._isTranslucencyEnabled = ((0, wM.m)(this, Sr), !1), iM.set(this, (0, wM.m)(this, jr, !1)), this._isDispersionEnabled = ((0, wM.m)(this, ar), !1), OM.set(this, (0, wM.m)(this, nr, !1)), this._isScatteringEnabled = ((0, wM.m)(this, Qr), !1), SM.set(this, (0, wM.m)(this, zr, !1)), this._scatteringDiffusionProfileIndex = ((0, wM.m)(this, Lr), (0, wM.m)(this, mr, 0)), this.refractionIntensity = ((0, wM.m)(this, Hr), (0, wM.m)(this, hr, 1)), this.translucencyIntensity = ((0, wM.m)(this, Jr), (0, wM.m)(this, dr, 1)), this._useAlbedoToTintRefraction = ((0, wM.m)(this, yr), !1), jM.set(this, (0, wM.m)(this, lr, !1)), this._useAlbedoToTintTranslucency = ((0, wM.m)(this, Er), !1), aM.set(this, (0, wM.m)(this, Ur, !1)), this._thicknessTexture = ((0, wM.m)(this, Gr), null), PM.set(this, (0, wM.m)(this, Cr, null)), this._refractionTexture = ((0, wM.m)(this, er), null), nM.set(this, (0, wM.m)(this, br, null)), this._indexOfRefraction = ((0, wM.m)(this, wr), 1.5), QM.set(this, (0, wM.m)(this, tr, 1.5)), this._volumeIndexOfRefraction = ((0, wM.m)(this, gr), (0, wM.m)(this, ur, -1)), this._invertRefractionY = ((0, wM.m)(this, Rr), !1), zM.set(this, (0, wM.m)(this, pr, !1)), this._linkRefractionWithTransparency = ((0, wM.m)(this, Wr), !1), LM.set(this, (0, wM.m)(this, sr, !1)), this.minimumThickness = ((0, wM.m)(this, Dr), (0, wM.m)(this, kr, 0)), this.maximumThickness = ((0, wM.m)(this, Zr), (0, wM.m)(this, or, 1)), this.useThicknessAsDepth = ((0, wM.m)(this, fr), (0, wM.m)(this, Yr, !1)), this.tintColor = ((0, wM.m)(this, Nr), (0, wM.m)(this, Ar, BM.d.White())), this.tintColorAtDistance = ((0, wM.m)(this, xr), (0, wM.m)(this, vr, 1)), this.dispersion = ((0, wM.m)(this, Fr), (0, wM.m)(this, Br, 0)), this.diffusionDistance = ((0, wM.m)(this, Xr), (0, wM.m)(this, Ir, BM.d.White())), this._useMaskFromThicknessTexture = ((0, wM.m)(this, Kr), !1), mM.set(this, (0, wM.m)(this, qr, !1)), this._refractionIntensityTexture = ((0, wM.m)(this, Tr), null), HM.set(this, (0, wM.m)(this, Vr, null)), this._translucencyIntensityTexture = ((0, wM.m)(this, cr), null), hM.set(this, (0, wM.m)(this, Mi, null)), this.translucencyColor = ((0, wM.m)(this, ri), (0, wM.m)(this, ii, null)), this._translucencyColorTexture = ((0, wM.m)(this, Oi), null), JM.set(this, (0, wM.m)(this, Si, null)), this._useGltfStyleTextures = ((0, wM.m)(this, ji), !0), dM.set(this, (0, wM.m)(this, ai, !0)), this.applyAlbedoAfterSubSurface = ((0, wM.m)(this, Pi), (0, wM.m)(this, ni, MM.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, wM.m)(this, Qi), (0, wM.m)(this, zi, MM.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, wM.m)(this, Li), this._scene = yM.Hk(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = yM._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = yM._dirtyCallbacks[32]
        }
        isReadyForSubMesh(MM, rM) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (MM._areTexturesDirty && rM.texturesEnabled) {
            if (this._thicknessTexture && qM.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && qM.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && qM.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && qM.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const MM = this._getRefractionTexture(rM);
            if (MM && qM.e.RefractionTextureEnabled && !MM.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(MM, rM) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return MM.SUBSURFACE = !1, MM.SS_DISPERSION = !1, MM.SS_TRANSLUCENCY = !1, MM.SS_SCATTERING = !1, MM.SS_REFRACTION = !1, MM.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, MM.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, MM.SS_THICKNESSANDMASK_TEXTURE = !1, MM.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, MM.SS_HAS_THICKNESS = !1, MM.SS_REFRACTIONINTENSITY_TEXTURE = !1, MM.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, MM.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, MM.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, MM.SS_REFRACTIONMAP_3D = !1, MM.SS_REFRACTIONMAP_OPPOSITEZ = !1, MM.SS_LODINREFRACTIONALPHA = !1, MM.SS_GAMMAREFRACTION = !1, MM.SS_RGBDREFRACTION = !1, MM.SS_LINEARSPECULARREFRACTION = !1, MM.SS_LINKREFRACTIONTOTRANSPARENCY = !1, MM.SS_ALBEDOFORREFRACTIONTINT = !1, MM.SS_ALBEDOFORTRANSLUCENCYTINT = !1, MM.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, MM.SS_USE_THICKNESS_AS_DEPTH = !1, MM.SS_USE_GLTF_TEXTURES = !1, MM.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, MM.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, MM.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(MM.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (MM._areTexturesDirty) {
            if (MM.SUBSURFACE = !0, MM.SS_DISPERSION = this._isDispersionEnabled, MM.SS_TRANSLUCENCY = this._isTranslucencyEnabled, MM.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, MM.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, MM.SS_SCATTERING = this._isScatteringEnabled, MM.SS_THICKNESSANDMASK_TEXTURE = !1, MM.SS_REFRACTIONINTENSITY_TEXTURE = !1, MM.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, MM.SS_HAS_THICKNESS = !1, MM.SS_USE_GLTF_TEXTURES = !1, MM.SS_REFRACTION = !1, MM.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, MM.SS_REFRACTIONMAP_3D = !1, MM.SS_GAMMAREFRACTION = !1, MM.SS_RGBDREFRACTION = !1, MM.SS_LINEARSPECULARREFRACTION = !1, MM.SS_REFRACTIONMAP_OPPOSITEZ = !1, MM.SS_LODINREFRACTIONALPHA = !1, MM.SS_LINKREFRACTIONTOTRANSPARENCY = !1, MM.SS_ALBEDOFORREFRACTIONTINT = !1, MM.SS_ALBEDOFORTRANSLUCENCYTINT = !1, MM.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, MM.SS_USE_THICKNESS_AS_DEPTH = !1, MM.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, MM.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, MM._areTexturesDirty && rM.texturesEnabled && (this._thicknessTexture && qM.e.ThicknessTextureEnabled && (0, VM.W)(this._thicknessTexture, MM, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && qM.e.RefractionIntensityTextureEnabled && (0, VM.W)(this._refractionIntensityTexture, MM, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && qM.e.TranslucencyIntensityTextureEnabled && (0, VM.W)(this._translucencyIntensityTexture, MM, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && qM.e.TranslucencyColorTextureEnabled && ((0, VM.W)(this._translucencyColorTexture, MM, "SS_TRANSLUCENCYCOLOR_TEXTURE"), MM.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), MM.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, MM.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, MM.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, MM.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && rM.texturesEnabled) {
              const iM = this._getRefractionTexture(rM);
              iM && qM.e.RefractionTextureEnabled && (MM.SS_REFRACTION = !0, MM.SS_REFRACTIONMAP_3D = iM.isCube, MM.SS_GAMMAREFRACTION = iM.gammaSpace, MM.SS_RGBDREFRACTION = iM.isRGBD, MM.SS_LINEARSPECULARREFRACTION = iM.linearSpecularLOD, MM.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && iM.isCube ? !iM.invertZ : iM.invertZ, MM.SS_LODINREFRACTIONALPHA = iM.lodLevelInAlpha, MM.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, MM.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, MM.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = iM.isCube && iM.boundingBoxSize, MM.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (MM.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(MM, rM, iM, OM) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) MM.updateFloat2("vThicknessParam", 0, 0);
            else {
              OM.getRenderingMesh().getWorldMatrix().decompose(fM.l.sh[0]);
              const rM = Math.max(Math.abs(fM.l.sh[0].x), Math.abs(fM.l.sh[0].y), Math.abs(fM.l.sh[0].z));
              MM.updateFloat2("vThicknessParam", this.minimumThickness * rM, (this.maximumThickness - this.minimumThickness) * rM)
            }
        }
        bindForSubMesh(MM, rM, iM, OM) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const SM = OM.materialDefines,
            jM = this._material.isFrozen,
            aM = this._material.realTimeFiltering,
            PM = SM.LODBASEDMICROSFURACE,
            nM = this._getRefractionTexture(rM);
          if (!MM.useUbo || !jM || !MM.isSync) {
            if (this._thicknessTexture && qM.e.ThicknessTextureEnabled && (MM.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, VM.x)(this._thicknessTexture, MM, "thickness")), this._refractionIntensityTexture && qM.e.RefractionIntensityTextureEnabled && SM.SS_REFRACTIONINTENSITY_TEXTURE && (MM.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, VM.x)(this._refractionIntensityTexture, MM, "refractionIntensity")), this._translucencyColorTexture && qM.e.TranslucencyColorTextureEnabled && SM.SS_TRANSLUCENCYCOLOR_TEXTURE && (MM.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, VM.x)(this._translucencyColorTexture, MM, "translucencyColor")), this._translucencyIntensityTexture && qM.e.TranslucencyIntensityTextureEnabled && SM.SS_TRANSLUCENCYINTENSITY_TEXTURE && (MM.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, VM.x)(this._translucencyIntensityTexture, MM, "translucencyIntensity")), nM && qM.e.RefractionTextureEnabled) {
              MM.p_("refractionMatrix", nM.getRefractionTextureMatrix());
              let rM = 1;
              nM.isCube || nM.depth && (rM = nM.depth);
              const iM = nM.getSize().width,
                OM = this.volumeIndexOfRefraction;
              if (MM.updateFloat4("vRefractionInfos", nM.level, 1 / OM, rM, this._invertRefractionY ? -1 : 1), MM.updateFloat4("vRefractionMicrosurfaceInfos", iM, nM.lodGenerationScale, nM.lodGenerationOffset, 1 / this.indexOfRefraction), aM && MM.updateFloat2("vRefractionFilteringInfo", iM, Math.log2(iM)), nM.boundingBoxSize) {
                const rM = nM;
                MM.updateVector3("vRefractionPosition", rM.boundingBoxPosition), MM.updateVector3("vRefractionSize", rM.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && MM.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), MM.updateColor3("vDiffusionDistance", this.diffusionDistance), MM.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), MM.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), MM.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), MM.updateFloat("dispersion", this.dispersion)
          }
          rM.texturesEnabled && (this._thicknessTexture && qM.e.ThicknessTextureEnabled && MM.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && qM.e.RefractionIntensityTextureEnabled && SM.SS_REFRACTIONINTENSITY_TEXTURE && MM.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && qM.e.TranslucencyIntensityTextureEnabled && SM.SS_TRANSLUCENCYINTENSITY_TEXTURE && MM.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && qM.e.TranslucencyColorTextureEnabled && SM.SS_TRANSLUCENCYCOLOR_TEXTURE && MM.setTexture("translucencyColorSampler", this._translucencyColorTexture), nM && qM.e.RefractionTextureEnabled && (PM ? MM.setTexture("refractionSampler", nM) : (MM.setTexture("refractionSampler", nM._lodTextureMid || nM), MM.setTexture("refractionSamplerLow", nM._lodTextureLow || nM), MM.setTexture("refractionSamplerHigh", nM._lodTextureHigh || nM))))
        }
        _getRefractionTexture(MM) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? MM.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(MM) {
          qM.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && MM.push(this._refractionTexture)
        }
        hasTexture(MM) {
          return this._thicknessTexture === MM || (this._refractionTexture === MM || (this._refractionIntensityTexture === MM || (this._translucencyIntensityTexture === MM || this._translucencyColorTexture === MM)))
        }
        hasRenderTargetTextures() {
          return !!(qM.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(MM) {
          this._thicknessTexture && MM.push(this._thicknessTexture), this._refractionTexture && MM.push(this._refractionTexture), this._refractionIntensityTexture && MM.push(this._refractionIntensityTexture), this._translucencyColorTexture && MM.push(this._translucencyColorTexture), this._translucencyIntensityTexture && MM.push(this._translucencyIntensityTexture)
        }
        getAnimatables(MM) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && MM.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && MM.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && MM.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && MM.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && MM.push(this._translucencyIntensityTexture)
        }
        dispose(MM) {
          MM && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(MM, rM, iM) {
          return MM.SS_SCATTERING && rM.addFallback(iM++, "SS_SCATTERING"), MM.SS_TRANSLUCENCY && rM.addFallback(iM++, "SS_TRANSLUCENCY"), iM
        }
        getSamplers(MM) {
          MM.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, SM = new WeakMap, jM = new WeakMap, aM = new WeakMap, PM = new WeakMap, nM = new WeakMap, QM = new WeakMap, zM = new WeakMap, LM = new WeakMap, mM = new WeakMap, HM = new WeakMap, hM = new WeakMap, JM = new WeakMap, dM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(ir[Symbol.metadata] ?? null) : void 0;
        yM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], lM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], EM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], UM = [(0, tM.L)(), (0, tM.g)("_markScenePrePassDirty")], GM = [(0, tM.L)()], CM = [(0, tM.L)()], eM = [(0, tM.L)()], bM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], gM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], uM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], RM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], pM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], WM = [(0, tM.L)()], sM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], DM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], kM = [(0, tM.L)()], ZM = [(0, tM.L)()], oM = [(0, tM.L)()], YM = [(0, tM.r)()], NM = [(0, tM.L)()], xM = [(0, tM.L)()], vM = [(0, tM.r)()], FM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], XM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], IM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], KM = [(0, tM.r)()], TM = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], cM = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Mr = [(0, tM.L)()], rr = [(0, tM.L)()], (0, wM.i)(MM, null, yM, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isRefractionEnabled" in MM,
            get: MM => MM.isRefractionEnabled,
            set: (MM, rM) => {
              MM.isRefractionEnabled = rM
            }
          },
          metadata: rM
        }, Or, Sr), (0, wM.i)(MM, null, lM, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isTranslucencyEnabled" in MM,
            get: MM => MM.isTranslucencyEnabled,
            set: (MM, rM) => {
              MM.isTranslucencyEnabled = rM
            }
          },
          metadata: rM
        }, jr, ar), (0, wM.i)(MM, null, EM, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isDispersionEnabled" in MM,
            get: MM => MM.isDispersionEnabled,
            set: (MM, rM) => {
              MM.isDispersionEnabled = rM
            }
          },
          metadata: rM
        }, nr, Qr), (0, wM.i)(MM, null, UM, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isScatteringEnabled" in MM,
            get: MM => MM.isScatteringEnabled,
            set: (MM, rM) => {
              MM.isScatteringEnabled = rM
            }
          },
          metadata: rM
        }, zr, Lr), (0, wM.i)(MM, null, bM, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAlbedoToTintRefraction" in MM,
            get: MM => MM.useAlbedoToTintRefraction,
            set: (MM, rM) => {
              MM.useAlbedoToTintRefraction = rM
            }
          },
          metadata: rM
        }, lr, Er), (0, wM.i)(MM, null, gM, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAlbedoToTintTranslucency" in MM,
            get: MM => MM.useAlbedoToTintTranslucency,
            set: (MM, rM) => {
              MM.useAlbedoToTintTranslucency = rM
            }
          },
          metadata: rM
        }, Ur, Gr), (0, wM.i)(MM, null, uM, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "thicknessTexture" in MM,
            get: MM => MM.thicknessTexture,
            set: (MM, rM) => {
              MM.thicknessTexture = rM
            }
          },
          metadata: rM
        }, Cr, er), (0, wM.i)(MM, null, RM, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "refractionTexture" in MM,
            get: MM => MM.refractionTexture,
            set: (MM, rM) => {
              MM.refractionTexture = rM
            }
          },
          metadata: rM
        }, br, wr), (0, wM.i)(MM, null, pM, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: MM => "indexOfRefraction" in MM,
            get: MM => MM.indexOfRefraction,
            set: (MM, rM) => {
              MM.indexOfRefraction = rM
            }
          },
          metadata: rM
        }, tr, gr), (0, wM.i)(MM, null, sM, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: MM => "invertRefractionY" in MM,
            get: MM => MM.invertRefractionY,
            set: (MM, rM) => {
              MM.invertRefractionY = rM
            }
          },
          metadata: rM
        }, pr, Wr), (0, wM.i)(MM, null, DM, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: MM => "linkRefractionWithTransparency" in MM,
            get: MM => MM.linkRefractionWithTransparency,
            set: (MM, rM) => {
              MM.linkRefractionWithTransparency = rM
            }
          },
          metadata: rM
        }, sr, Dr), (0, wM.i)(MM, null, FM, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "useMaskFromThicknessTexture" in MM,
            get: MM => MM.useMaskFromThicknessTexture,
            set: (MM, rM) => {
              MM.useMaskFromThicknessTexture = rM
            }
          },
          metadata: rM
        }, qr, Tr), (0, wM.i)(MM, null, XM, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "refractionIntensityTexture" in MM,
            get: MM => MM.refractionIntensityTexture,
            set: (MM, rM) => {
              MM.refractionIntensityTexture = rM
            }
          },
          metadata: rM
        }, Vr, cr), (0, wM.i)(MM, null, IM, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "translucencyIntensityTexture" in MM,
            get: MM => MM.translucencyIntensityTexture,
            set: (MM, rM) => {
              MM.translucencyIntensityTexture = rM
            }
          },
          metadata: rM
        }, Mi, ri), (0, wM.i)(MM, null, TM, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "translucencyColorTexture" in MM,
            get: MM => MM.translucencyColorTexture,
            set: (MM, rM) => {
              MM.translucencyColorTexture = rM
            }
          },
          metadata: rM
        }, Si, ji), (0, wM.i)(MM, null, cM, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: MM => "useGltfStyleTextures" in MM,
            get: MM => MM.useGltfStyleTextures,
            set: (MM, rM) => {
              MM.useGltfStyleTextures = rM
            }
          },
          metadata: rM
        }, ai, Pi), (0, wM.i)(null, null, GM, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: MM => "_scatteringDiffusionProfileIndex" in MM,
            get: MM => MM._scatteringDiffusionProfileIndex,
            set: (MM, rM) => {
              MM._scatteringDiffusionProfileIndex = rM
            }
          },
          metadata: rM
        }, mr, Hr), (0, wM.i)(null, null, CM, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "refractionIntensity" in MM,
            get: MM => MM.refractionIntensity,
            set: (MM, rM) => {
              MM.refractionIntensity = rM
            }
          },
          metadata: rM
        }, hr, Jr), (0, wM.i)(null, null, eM, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "translucencyIntensity" in MM,
            get: MM => MM.translucencyIntensity,
            set: (MM, rM) => {
              MM.translucencyIntensity = rM
            }
          },
          metadata: rM
        }, dr, yr), (0, wM.i)(null, null, WM, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: MM => "_volumeIndexOfRefraction" in MM,
            get: MM => MM._volumeIndexOfRefraction,
            set: (MM, rM) => {
              MM._volumeIndexOfRefraction = rM
            }
          },
          metadata: rM
        }, ur, Rr), (0, wM.i)(null, null, kM, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: MM => "minimumThickness" in MM,
            get: MM => MM.minimumThickness,
            set: (MM, rM) => {
              MM.minimumThickness = rM
            }
          },
          metadata: rM
        }, kr, Zr), (0, wM.i)(null, null, ZM, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: MM => "maximumThickness" in MM,
            get: MM => MM.maximumThickness,
            set: (MM, rM) => {
              MM.maximumThickness = rM
            }
          },
          metadata: rM
        }, or, fr), (0, wM.i)(null, null, oM, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: MM => "useThicknessAsDepth" in MM,
            get: MM => MM.useThicknessAsDepth,
            set: (MM, rM) => {
              MM.useThicknessAsDepth = rM
            }
          },
          metadata: rM
        }, Yr, Nr), (0, wM.i)(null, null, YM, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "tintColor" in MM,
            get: MM => MM.tintColor,
            set: (MM, rM) => {
              MM.tintColor = rM
            }
          },
          metadata: rM
        }, Ar, xr), (0, wM.i)(null, null, NM, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: MM => "tintColorAtDistance" in MM,
            get: MM => MM.tintColorAtDistance,
            set: (MM, rM) => {
              MM.tintColorAtDistance = rM
            }
          },
          metadata: rM
        }, vr, Fr), (0, wM.i)(null, null, xM, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: MM => "dispersion" in MM,
            get: MM => MM.dispersion,
            set: (MM, rM) => {
              MM.dispersion = rM
            }
          },
          metadata: rM
        }, Br, Xr), (0, wM.i)(null, null, vM, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: MM => "diffusionDistance" in MM,
            get: MM => MM.diffusionDistance,
            set: (MM, rM) => {
              MM.diffusionDistance = rM
            }
          },
          metadata: rM
        }, Ir, Kr), (0, wM.i)(null, null, KM, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "translucencyColor" in MM,
            get: MM => MM.translucencyColor,
            set: (MM, rM) => {
              MM.translucencyColor = rM
            }
          },
          metadata: rM
        }, ii, Oi), (0, wM.i)(null, null, Mr, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: MM => "applyAlbedoAfterSubSurface" in MM,
            get: MM => MM.applyAlbedoAfterSubSurface,
            set: (MM, rM) => {
              MM.applyAlbedoAfterSubSurface = rM
            }
          },
          metadata: rM
        }, ni, Qi), (0, wM.i)(null, null, rr, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: MM => "legacyTranslucency" in MM,
            get: MM => MM.legacyTranslucency,
            set: (MM, rM) => {
              MM.legacyTranslucency = rM
            }
          },
          metadata: rM
        }, zi, Li), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, MM.DEFAULT_LEGACY_TRANSLUCENCY = !1, MM
    })();
    var Qr = iM(41454),
      zr = iM(41433),
      Lr = iM(41469),
      mr = iM(41472),
      Hr = iM(41474),
      hr = iM(41477),
      Jr = iM(41483),
      dr = iM(41491),
      yr = iM(40990);
    const lr = {
      effect: null,
      subMesh: null
    };
    class Er extends((0, Jr.d)((0, hr.e)(NM.c))) {}
    class Ur extends((0, XM.h)(Er)) {
      constructor(MM) {
        super(MM), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Gr extends((0, dr.e)(KM.c)) {}
    let Cr = (() => {
      var MM, rM;
      let OM, SM = Gr,
        aM = [],
        PM = [];
      return MM = class extends SM {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(MM) {
          this._realTimeFiltering = MM, this.FrM(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(MM) {
          this._realTimeFilteringQuality = MM, this.FrM(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, wM.c)(this, rM, "f")
        }
        set debugMode(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        constructor(iM, OM) {
          super(iM, OM, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || MM.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new fM.u(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = MM.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = BM.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new BM.d(0, 0, 0), this._albedoColor = new BM.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new BM.d(1, 1, 1), this._reflectionColor = new BM.d(1, 1, 1), this._emissiveColor = new BM.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = MM.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new uM.e(16), this._globalAmbientColor = new BM.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, rM.set(this, (0, wM.m)(this, aM, 0)), this.debugLimit = ((0, wM.m)(this, PM), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new vM(this), this.clearCoat = new Mr(this), this.iridescence = new ir(this), this.anisotropy = new Sr(this), this.sheen = new ar(this), this.subSurface = new nr(this), this.detailMap = new Qr.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), qM.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = DM(this.Hk()), this.prePassConfiguration = new FM.e
        }
        get hasRenderTargetTextures() {
          return !!(qM.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === MM.PBRMATERIAL_OPAQUE || this._transparencyMode === MM.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === MM.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== MM.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(MM, rM, iM) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const OM = rM._drawWrapper;
          if (OM.effect && this.isFrozen && OM._wasPreviouslyReady && OM._wasPreviouslyUsingInstances === iM) return !0;
          rM.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), rM.materialDefines = new Ur(this._eventInfo.defineNames));
          const SM = rM.materialDefines;
          if (this._isReadyForSubMesh(rM)) return !0;
          const jM = this.Hk(),
            aM = jM.ph();
          if (SM._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, jM.texturesEnabled)) {
            if (this._albedoTexture && qM.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && qM.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && qM.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && qM.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && qM.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const MM = this._getReflectionTexture();
            if (MM && qM.e.ReflectionTextureEnabled) {
              if (!MM.isReadyOrNotBlocking()) return !1;
              if (MM.irradianceTexture) {
                if (!MM.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!MM.sphericalPolynomial && MM.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && qM.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && qM.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (qM.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (aM.getCaps().standardDerivatives && this._bumpTexture && qM.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && qM.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = SM, this._eventInfo.subMesh = rM, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (SM._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (SM.AREALIGHTUSED || SM.CLUSTLIGHT_BATCH)
            for (let LM = 0; LM < MM.lightSources.length; LM++)
              if (!MM.lightSources[LM]._isReady()) return !1;
          if (aM.getCaps().standardDerivatives || MM.isVerticesDataPresent(YM.j.NormalKind) || (MM.createNormals(!0), gM.e.Warn("PBRMaterial: Normals have been created for the mesh: " + MM.name)), !(0, VM.b)(jM, MM, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const PM = rM.effect,
            nM = SM._areLightsDisposed,
            QM = this._prepareEffect(MM, rM.getRenderingMesh(), SM, this.onCompiled, this.onError, iM, null);
          let zM = !1;
          if (QM)
            if (this._onEffectCreatedObservable && (lr.effect = QM, lr.subMesh = rM, this._onEffectCreatedObservable.notifyObservers(lr)), this.allowShaderHotSwapping && PM && !QM.isReady()) {
              if (SM.markAsUnprocessed(), zM = this.isFrozen, nM) return SM._areLightsDisposed = !0, !1
            } else jM.resetCachedMaterial(), rM.setEffect(QM, SM, this._materialContext);
          return !(!rM.effect || !rM.effect.isReady()) && (SM._renderId = jM.getRenderId(), OM._wasPreviouslyReady = !zM, OM._wasPreviouslyUsingInstances = !!iM, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(rM, iM, OM) {
          let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(rM, iM, OM, aM, PM), !OM.isDirty) return null;
          OM.markAsProcessed();
          const nM = this.Hk().ph(),
            QM = new TM.b;
          let zM = 0;
          OM.USESPHERICALINVERTEX && QM.addFallback(zM++, "USESPHERICALINVERTEX"), OM.FOG && QM.addFallback(zM, "FOG"), OM.SPECULARAA && QM.addFallback(zM, "SPECULARAA"), OM.POINTSIZE && QM.addFallback(zM, "POINTSIZE"), OM.LOGARITHMICDEPTH && QM.addFallback(zM, "LOGARITHMICDEPTH"), OM.PARALLAX && QM.addFallback(zM, "PARALLAX"), OM.PARALLAX_RHS && QM.addFallback(zM, "PARALLAX_RHS"), OM.PARALLAXOCCLUSION && QM.addFallback(zM++, "PARALLAXOCCLUSION"), OM.ENVIRONMENTBRDF && QM.addFallback(zM++, "ENVIRONMENTBRDF"), OM.TANGENT && QM.addFallback(zM++, "TANGENT"), OM.BUMP && QM.addFallback(zM++, "BUMP"), zM = (0, VM.y)(OM, QM, this._maxSimultaneousLights, zM), OM.SPECULARTERM && QM.addFallback(zM++, "SPECULARTERM"), OM.USESPHERICALFROMREFLECTIONMAP && QM.addFallback(zM++, "USESPHERICALFROMREFLECTIONMAP"), OM.USEIRRADIANCEMAP && QM.addFallback(zM++, "USEIRRADIANCEMAP"), OM.LIGHTMAP && QM.addFallback(zM++, "LIGHTMAP"), OM.NORMAL && QM.addFallback(zM++, "NORMAL"), OM.AMBIENT && QM.addFallback(zM++, "AMBIENT"), OM.EMISSIVE && QM.addFallback(zM++, "EMISSIVE"), OM.VERTEXCOLOR && QM.addFallback(zM++, "VERTEXCOLOR"), OM.MORPHTARGETS && QM.addFallback(zM++, "MORPHTARGETS"), OM.MULTIVIEW && QM.addFallback(0, "MULTIVIEW");
          const LM = [YM.j.PositionKind];
          OM.NORMAL && LM.push(YM.j.NormalKind), OM.TANGENT && LM.push(YM.j.TangentKind);
          for (let MM = 1; MM <= 6; ++MM) OM["UV" + MM] && LM.push(`uv${1===MM?"":MM}`);
          OM.VERTEXCOLOR && LM.push(YM.j.ColorKind), (0, VM.D)(LM, rM, OM, QM), (0, VM.F)(LM, OM), (0, VM.G)(LM, rM, OM), (0, VM.A)(LM, rM, OM);
          let mM = "pbr";
          const HM = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            hM = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, VM.gb)(HM, hM, !0);
          const JM = ["Material", "Scene", "Mesh"],
            dM = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: OM.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = QM, this._eventInfo.fallbackRank = zM, this._eventInfo.defines = OM, this._eventInfo.uniforms = HM, this._eventInfo.attributes = LM, this._eventInfo.samplers = hM, this._eventInfo.uniformBuffersNames = JM, this._eventInfo.customCode = void 0, this._eventInfo.mesh = rM, this._eventInfo.indexParameters = dM, this._callbackPluginEventGeneric(128, this._eventInfo), Hr.c.AddUniformsAndSamplers(HM, hM), FM.e.AddUniforms(HM), FM.e.AddSamplers(hM), (0, zr.b)(HM), this._useVertexPulling) {
            const MM = iM?.geometry;
            MM && (this._vertexPullingMetadata = (0, Lr.g)(MM), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((MM, rM) => {
              HM.push(`vp_${rM}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          IM.b && (IM.b.PrepareUniforms(HM, OM), IM.b.PrepareSamplers(hM, OM)), (0, VM.ib)({
            uniformsNames: HM,
            uniformBuffersNames: JM,
            samplers: hM,
            defines: OM,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const yM = {};
          this.customShaderNameResolve && (mM = this.customShaderNameResolve(mM, HM, JM, hM, OM, LM, yM));
          const lM = OM.toString(),
            EM = nM.createEffect(mM, {
              attributes: LM,
              uniformsNames: HM,
              uniformBuffersNames: JM,
              samplers: hM,
              defines: lM,
              fallbacks: QM,
              onCompiled: SM,
              onError: jM,
              indexParameters: dM,
              processFinalCode: yM.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: OM.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: MM._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, nM);
          return this._eventInfo.customCode = void 0, EM
        }
        _prepareDefines(rM, iM, OM) {
          let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const aM = iM.hasThinInstances,
            PM = this.Hk(),
            nM = PM.ph();
          (0, VM.S)(PM, rM, OM, !0, this._maxSimultaneousLights, this._disableLighting), OM._needNormals = !0, (0, VM.$)(PM, OM);
          const QM = this.needAlphaBlendingForMesh(rM) && this.Hk().useOrderIndependentTransparency;
          if ((0, VM.eb)(PM, OM, this.canRenderToMRT && !QM), (0, VM.db)(PM, OM, QM), Hr.c.PrepareDefines(nM.currentRenderPassId, rM, OM), OM.METALLICWORKFLOW = this.isMetallicWorkflow(), OM._areTexturesDirty) {
            OM._needUVs = !1;
            for (let MM = 1; MM <= 6; ++MM) OM["MAINUV" + MM] = !1;
            if (PM.texturesEnabled) {
              OM.ALBEDODIRECTUV = 0, OM.BASE_WEIGHTDIRECTUV = 0, OM.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, OM.AMBIENTDIRECTUV = 0, OM.OPACITYDIRECTUV = 0, OM.EMISSIVEDIRECTUV = 0, OM.REFLECTIVITYDIRECTUV = 0, OM.MICROSURFACEMAPDIRECTUV = 0, OM.METALLIC_REFLECTANCEDIRECTUV = 0, OM.REFLECTANCEDIRECTUV = 0, OM.BUMPDIRECTUV = 0, OM.LIGHTMAPDIRECTUV = 0, nM.getCaps().textureLOD && (OM.LODBASEDMICROSFURACE = !0), this._albedoTexture && qM.e.DiffuseTextureEnabled ? ((0, VM.W)(this._albedoTexture, OM, "ALBEDO"), OM.GAMMAALBEDO = this._albedoTexture.gammaSpace) : OM.ALBEDO = !1, this._baseWeightTexture && qM.e.BaseWeightTextureEnabled ? (0, VM.W)(this._baseWeightTexture, OM, "BASE_WEIGHT") : OM.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && qM.e.BaseDiffuseRoughnessTextureEnabled ? (0, VM.W)(this._baseDiffuseRoughnessTexture, OM, "BASE_DIFFUSE_ROUGHNESS") : OM.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && qM.e.AmbientTextureEnabled ? ((0, VM.W)(this._ambientTexture, OM, "AMBIENT"), OM.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : OM.AMBIENT = !1, this._opacityTexture && qM.e.OpacityTextureEnabled ? ((0, VM.W)(this._opacityTexture, OM, "OPACITY"), OM.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : OM.OPACITY = !1;
              const MM = this._getReflectionTexture(),
                rM = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || nM.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, VM.R)(PM, MM, OM, this.realTimeFiltering, this.realTimeFilteringQuality, !rM), this._lightmapTexture && qM.e.LightmapTextureEnabled ? ((0, VM.W)(this._lightmapTexture, OM, "LIGHTMAP"), OM.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, OM.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, OM.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : OM.LIGHTMAP = !1, this._emissiveTexture && qM.e.EmissiveTextureEnabled ? ((0, VM.W)(this._emissiveTexture, OM, "EMISSIVE"), OM.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : OM.EMISSIVE = !1, qM.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, VM.W)(this._metallicTexture, OM, "REFLECTIVITY"), OM.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, OM.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, OM.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, OM.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, OM.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, VM.W)(this._reflectivityTexture, OM, "REFLECTIVITY"), OM.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, OM.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, OM.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : OM.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (OM.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, VM.W)(this._metallicReflectanceTexture, OM, "METALLIC_REFLECTANCE"), OM.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : OM.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, VM.W)(this._reflectanceTexture, OM, "REFLECTANCE"), OM.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : OM.REFLECTANCE = !1) : (OM.METALLIC_REFLECTANCE = !1, OM.REFLECTANCE = !1), this._microSurfaceTexture ? (0, VM.W)(this._microSurfaceTexture, OM, "MICROSURFACEMAP") : OM.MICROSURFACEMAP = !1) : (OM.REFLECTIVITY = !1, OM.MICROSURFACEMAP = !1), nM.getCaps().standardDerivatives && this._bumpTexture && qM.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, VM.W)(this._bumpTexture, OM, "BUMP"), this._useParallax && this._albedoTexture && qM.e.DiffuseTextureEnabled ? (OM.PARALLAX = !0, OM.PARALLAX_RHS = PM.useRightHandedSystem, OM.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : OM.PARALLAX = !1, OM.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (OM.BUMP = !1, OM.PARALLAX = !1, OM.PARALLAX_RHS = !1, OM.PARALLAXOCCLUSION = !1, OM.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && qM.e.ReflectionTextureEnabled ? (OM.ENVIRONMENTBRDF = !0, OM.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (OM.ENVIRONMENTBRDF = !1, OM.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? OM.ALPHAFROMALBEDO = !0 : OM.ALPHAFROMALBEDO = !1
            }
            OM.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === MM.LIGHTFALLOFF_STANDARD ? (OM.USEPHYSICALLIGHTFALLOFF = !1, OM.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === MM.LIGHTFALLOFF_GLTF ? (OM.USEPHYSICALLIGHTFALLOFF = !1, OM.USEGLTFLIGHTFALLOFF = !0) : (OM.USEPHYSICALLIGHTFALLOFF = !0, OM.USEGLTFLIGHTFALLOFF = !1), OM.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? OM.TWOSIDEDLIGHTING = !0 : OM.TWOSIDEDLIGHTING = !1, OM.MIRRORED = !!PM._mirroredCameraPosition, OM.SPECULARAA = nM.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(OM._areTexturesDirty || OM._areMiscDirty) && (OM.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, OM.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, OM.ALPHABLEND = this.needAlphaBlendingForMesh(rM), OM.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, OM.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), OM._areTexturesDirty && (OM.TEXTURE_REPETITION_MODE = nM.version > 1 || nM.isWebGPU ? this.textureRepetitionMode : 0), OM._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(OM), OM.FORCENORMALFORWARD = this._forceNormalForward, OM.RADIANCEOCCLUSION = this._useRadianceOcclusion, OM.HORIZONOCCLUSION = this._useHorizonOcclusion, OM._areMiscDirty && ((0, VM.X)(rM, PM, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(rM), OM, this._applyDecalMapAfterDetailMap, this._useVertexPulling, iM, this._isVertexOutputInvariant), OM.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !rM.isVerticesDataPresent(YM.j.NormalKind), OM.DEBUGMODE = this._debugMode), (0, VM.N)(PM, nM, this, OM, !!SM, jM, aM), this._eventInfo.defines = OM, this._eventInfo.mesh = rM, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, VM.K)(rM, OM, !0, !0, !0, this._transparencyMode !== MM.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(MM, rM, iM) {
          const OM = {
            clipPlane: !1,
            useInstances: !1,
            ...iM
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const iM = new Ur(this._eventInfo.defineNames),
              SM = this._prepareEffect(MM, MM, iM, void 0, void 0, OM.useInstances, OM.clipPlane);
            this._onEffectCreatedObservable && (lr.effect = SM, lr.subMesh = null, this._onEffectCreatedObservable.notifyObservers(lr)), SM.isReady() ? rM && rM(this) : SM.onCompileObservable.add((() => {
              rM && rM(this)
            }))
          })()
        }
        buildUniformLayout() {
          const MM = this._uniformBuffer;
          MM.addUniform("vAlbedoInfos", 2), MM.addUniform("vBaseWeightInfos", 2), MM.addUniform("vBaseDiffuseRoughnessInfos", 2), MM.addUniform("vAmbientInfos", 4), MM.addUniform("vOpacityInfos", 2), MM.addUniform("vEmissiveInfos", 2), MM.addUniform("vLightmapInfos", 2), MM.addUniform("vReflectivityInfos", 3), MM.addUniform("vMicroSurfaceSamplerInfos", 2), MM.addUniform("vBumpInfos", 3), MM.addUniform("albedoMatrix", 16), MM.addUniform("baseWeightMatrix", 16), MM.addUniform("baseDiffuseRoughnessMatrix", 16), MM.addUniform("ambientMatrix", 16), MM.addUniform("opacityMatrix", 16), MM.addUniform("emissiveMatrix", 16), MM.addUniform("lightmapMatrix", 16), MM.addUniform("reflectivityMatrix", 16), MM.addUniform("microSurfaceSamplerMatrix", 16), MM.addUniform("bumpMatrix", 16), MM.addUniform("vTangentSpaceParams", 2), MM.addUniform("vAlbedoColor", 4), MM.addUniform("baseWeight", 1), MM.addUniform("baseDiffuseRoughness", 1), MM.addUniform("vLightingIntensity", 4), MM.addUniform("pointSize", 1), MM.addUniform("vReflectivityColor", 4), MM.addUniform("vEmissiveColor", 3), MM.addUniform("vAmbientColor", 3), MM.addUniform("vDebugMode", 2), MM.addUniform("vMetallicReflectanceFactors", 4), MM.addUniform("vMetallicReflectanceInfos", 2), MM.addUniform("metallicReflectanceMatrix", 16), MM.addUniform("vReflectanceInfos", 2), MM.addUniform("reflectanceMatrix", 16), MM.addUniform("cameraInfo", 4), MM.addUniform("vTextureRepetitionHexTilingParams", 4), (0, VM.fb)(MM, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(MM, rM, iM) {
          const OM = this.Hk(),
            SM = iM.materialDefines;
          if (!SM) return;
          const jM = iM.effect;
          if (!jM) return;
          this._activeEffect = jM, rM.getMeshUniformBuffer().bindToEffect(jM, "Mesh"), rM.transferToEffect(MM);
          const aM = OM.ph();
          this._uniformBuffer.bindToEffect(jM, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, OM, rM, MM, this.isFrozen), Hr.c.Bind(aM.currentRenderPassId, this._activeEffect, rM, MM, this);
          const PM = OM.activeCamera;
          PM ? this._uniformBuffer.updateFloat4("cameraInfo", PM.minZ, PM.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const nM = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", nM[0], nM[1], nM[2], nM[3]), this._eventInfo.subMesh = iM, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), SM.OBJECTSPACE_NORMALMAP && (MM.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const QM = this._mustRebind(OM, jM, iM, rM.visibility),
            zM = aM._features.needToAlwaysBindUniformBuffers;
          (0, VM.d)(rM, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Lr.d)(this._activeEffect, this._vertexPullingMetadata);
          let LM = null;
          const mM = this._uniformBuffer;
          if (QM) {
            if (this.bindViewProjection(jM), LM = this._getReflectionTexture(), !mM.useUbo || !this.isFrozen || !mM.isSync || iM._drawWrapper._forceRebindOnNextCall) {
              if (OM.texturesEnabled && (this._albedoTexture && qM.e.DiffuseTextureEnabled && (mM.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, VM.x)(this._albedoTexture, mM, "albedo")), this._baseWeightTexture && qM.e.BaseWeightTextureEnabled && (mM.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, VM.x)(this._baseWeightTexture, mM, "baseWeight")), this._baseDiffuseRoughnessTexture && qM.e.BaseDiffuseRoughnessTextureEnabled && (mM.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, VM.x)(this._baseDiffuseRoughnessTexture, mM, "baseDiffuseRoughness")), this._ambientTexture && qM.e.AmbientTextureEnabled && (mM.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, VM.x)(this._ambientTexture, mM, "ambient")), this._opacityTexture && qM.e.OpacityTextureEnabled && (mM.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, VM.x)(this._opacityTexture, mM, "opacity")), this._emissiveTexture && qM.e.EmissiveTextureEnabled && (mM.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, VM.x)(this._emissiveTexture, mM, "emissive")), this._lightmapTexture && qM.e.LightmapTextureEnabled && (mM.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, VM.x)(this._lightmapTexture, mM, "lightmap")), qM.e.SpecularTextureEnabled && (this._metallicTexture ? (mM.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, VM.x)(this._metallicTexture, mM, "reflectivity")) : this._reflectivityTexture && (mM.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, VM.x)(this._reflectivityTexture, mM, "reflectivity")), this._metallicReflectanceTexture && (mM.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, VM.x)(this._metallicReflectanceTexture, mM, "metallicReflectance")), this._reflectanceTexture && SM.REFLECTANCE && (mM.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, VM.x)(this._reflectanceTexture, mM, "reflectance")), this._microSurfaceTexture && (mM.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, VM.x)(this._microSurfaceTexture, mM, "microSurfaceSampler"))), this._bumpTexture && aM.getCaps().standardDerivatives && qM.e.BumpTextureEnabled && !this._disableBumpMap && (mM.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, VM.x)(this._bumpTexture, mM, "bump"), OM._mirroredCameraPosition ? mM.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : mM.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, VM.j)(OM, SM, mM, this._reflectionColor, LM, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && mM.updateFloat("pointSize", this.pointSize), SM.METALLICWORKFLOW) {
                BM.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, BM.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const MM = this.subSurface?._indexOfRefraction ?? 1.5,
                  rM = 1;
                BM.j.Color4[0].b = MM;
                const iM = Math.pow((MM - rM) / (MM + rM), 2);
                BM.j.Color4[0].a = iM, mM.updateDirectColor4("vReflectivityColor", BM.j.Color4[0]), mM.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else mM.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              mM.updateColor3("vEmissiveColor", qM.e.EmissiveTextureEnabled ? this._emissiveColor : BM.d.BlackReadOnly), !SM.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? mM.updateColor4("vAlbedoColor", this._albedoColor, 1) : mM.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), mM.updateFloat("baseWeight", this._baseWeight), mM.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * OM.environmentIntensity, this._lightingInfos.w = this._specularIntensity, mM.updateVector4("vLightingIntensity", this._lightingInfos), OM.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), mM.updateColor3("vAmbientColor", this._globalAmbientColor), mM.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            OM.texturesEnabled && (this._albedoTexture && qM.e.DiffuseTextureEnabled && mM.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && qM.e.BaseWeightTextureEnabled && mM.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && qM.e.BaseDiffuseRoughnessTextureEnabled && mM.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && qM.e.AmbientTextureEnabled && mM.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && qM.e.OpacityTextureEnabled && mM.setTexture("opacitySampler", this._opacityTexture), (0, VM.l)(OM, SM, mM, LM, this.realTimeFiltering), SM.ENVIRONMENTBRDF && mM.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && qM.e.EmissiveTextureEnabled && mM.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && qM.e.LightmapTextureEnabled && mM.setTexture("lightmapSampler", this._lightmapTexture), qM.e.SpecularTextureEnabled && (this._metallicTexture ? mM.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && mM.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && mM.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && SM.REFLECTANCE && mM.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && mM.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && aM.getCaps().standardDerivatives && qM.e.BumpTextureEnabled && !this._disableBumpMap && mM.setTexture("bumpSampler", this._bumpTexture)), this.Hk().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(rM) && this.Hk().depthPeelingRenderer.bind(jM), this._eventInfo.subMesh = iM, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, zr.e)(this._activeEffect, this, OM), this.bindEyePosition(jM)
          } else zM && (this._needToBindSceneUbo = !0);
          !QM && this.isFrozen && !zM || !OM.lightsEnabled || this._disableLighting || (0, VM.o)(OM, rM, this._activeEffect, SM, this._maxSimultaneousLights), !QM && this.isFrozen || ((OM.fogEnabled && rM.applyFog && OM.fogMode !== oM.d.FOGMODE_NONE || LM || this.subSurface.refractionTexture || rM.receiveShadows || SM.PREPASS || SM.CLUSTLIGHT_BATCH) && this.bindView(jM), (0, VM.g)(OM, rM, this._activeEffect, !0), SM.NUM_MORPH_INFLUENCERS && (0, VM.r)(rM, this._activeEffect), SM.BAKED_VERTEX_ANIMATION_TEXTURE && rM.bakedVertexAnimationManager?.bind(jM, SM.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, VM.q)(SM, this._activeEffect, OM)), this._afterBind(rM, this._activeEffect, iM), mM.update()
        }
        getAnimatables() {
          const MM = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && MM.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && MM.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && MM.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && MM.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && MM.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && MM.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && MM.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? MM.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && MM.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && MM.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && MM.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && MM.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && MM.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && MM.push(this._microSurfaceTexture), MM
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Hk().environmentTexture
        }
        getActiveTextures() {
          const MM = super.getActiveTextures();
          return this._albedoTexture && MM.push(this._albedoTexture), this._baseWeightTexture && MM.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && MM.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && MM.push(this._ambientTexture), this._opacityTexture && MM.push(this._opacityTexture), this._reflectionTexture && MM.push(this._reflectionTexture), this._emissiveTexture && MM.push(this._emissiveTexture), this._reflectivityTexture && MM.push(this._reflectivityTexture), this._metallicTexture && MM.push(this._metallicTexture), this._metallicReflectanceTexture && MM.push(this._metallicReflectanceTexture), this._reflectanceTexture && MM.push(this._reflectanceTexture), this._microSurfaceTexture && MM.push(this._microSurfaceTexture), this._bumpTexture && MM.push(this._bumpTexture), this._lightmapTexture && MM.push(this._lightmapTexture), MM
        }
        hasTexture(MM) {
          return !!super.hasTexture(MM) || (this._albedoTexture === MM || (this._baseWeightTexture === MM || (this._baseDiffuseRoughnessTexture === MM || (this._ambientTexture === MM || (this._opacityTexture === MM || (this._reflectionTexture === MM || (this._emissiveTexture === MM || (this._reflectivityTexture === MM || (this._metallicTexture === MM || (this._metallicReflectanceTexture === MM || (this._reflectanceTexture === MM || (this._microSurfaceTexture === MM || (this._bumpTexture === MM || this._lightmapTexture === MM)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const MM = this.Hk().enableSubSurfaceForPrePass();
          return MM && (MM.enabled = !0), !0
        }
        dispose(MM, rM) {
          this._breakShaderLoadedCheck = !0, rM && (this._environmentBRDFTexture && this.Hk().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(MM, rM)
        }
      }, rM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(SM[Symbol.metadata] ?? null) : void 0;
        OM = [(0, tM.g)("_markAllSubMeshesAsMiscDirty")], (0, wM.i)(MM, null, OM, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: MM => "debugMode" in MM,
            get: MM => MM.debugMode,
            set: (MM, rM) => {
              MM.debugMode = rM
            }
          },
          metadata: rM
        }, aM, PM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM.PBRMATERIAL_OPAQUE = jM.c.MATERIAL_OPAQUE, MM.PBRMATERIAL_ALPHATEST = jM.c.MATERIAL_ALPHATEST, MM.PBRMATERIAL_ALPHABLEND = jM.c.MATERIAL_ALPHABLEND, MM.PBRMATERIAL_ALPHATESTANDBLEND = jM.c.MATERIAL_ALPHATESTANDBLEND, MM.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, MM.LIGHTFALLOFF_PHYSICAL = 0, MM.LIGHTFALLOFF_GLTF = 1, MM.LIGHTFALLOFF_STANDARD = 2, MM.ForceGLSL = !1, MM._ShaderLoader = new mr.c((() => [Promise.all([iM.e(626), iM.e(637)]).then((() => iM(64169))), Promise.all([iM.e(631), iM.e(627), iM.e(688), iM.e(640), iM.e(687)]).then((() => iM(64199)))]), (() => [Promise.all([iM.e(645), iM.e(647), iM.e(654)]).then((() => iM(64276))), Promise.all([iM.e(645), iM.e(648), iM.e(691), iM.e(658), iM.e(690)]).then((() => iM(64290)))])), MM
    })();
    Object.getOwnPropertyDescriptor(Cr.prototype, "decalMap") || Object.defineProperty(Cr.prototype, "decalMap", (0, yr.g)("PBRBaseMaterial", "decalMap")), (0, iM(44485).d)();
    var er = iM(41121);
    var br = iM(41205),
      wr = iM(44465),
      tr = iM(40939),
      gr = iM(40949),
      ur = iM(41042);
    let Rr = !1;
    const pr = new BM.h,
      Wr = new BM.h;
    class sr extends wr.c {
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
      set wrapU(MM) {
        if (this._textures)
          for (let rM = 0; rM < this._textures.length; rM++) this._textures[rM].wrapU = MM
      }
      set wrapV(MM) {
        if (this._textures)
          for (let rM = 0; rM < this._textures.length; rM++) this._textures[rM].wrapV = MM
      }
      constructor(MM, rM, iM, OM, SM, jM) {
        const aM = !(!SM || !SM.generateMipMaps) && SM.generateMipMaps,
          PM = !(!SM || !SM.generateDepthTexture) && SM.generateDepthTexture,
          nM = SM && SM.depthTextureFormat ? SM.depthTextureFormat : 15,
          QM = !SM || void 0 === SM.doNotChangeAspectRatio || SM.doNotChangeAspectRatio,
          zM = !(!SM || !SM.drawOnlyOnFirstAttachmentByDefault) && SM.drawOnlyOnFirstAttachmentByDefault;
        if (super(MM, rM, OM, aM, QM, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Rr || (Rr = !0, gr.ThinEngine.prototype.restoreSingleAttachment = function() {
            const MM = this._gl;
            this.bindAttachments([MM.BACK])
          }, gr.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const MM = this._gl;
            this.bindAttachments([MM.COLOR_ATTACHMENT0])
          }, gr.ThinEngine.prototype.buildTextureLayout = function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const iM = this._gl,
              OM = [];
            if (rM) OM.push(iM.BACK);
            else
              for (let SM = 0; SM < MM.length; SM++) MM[SM] ? OM.push(iM["COLOR_ATTACHMENT" + SM]) : OM.push(iM.NONE);
            return OM
          }, gr.ThinEngine.prototype.bindAttachments = function(MM) {
            const rM = this._gl,
              iM = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, iM)
              for (let OM = 0; OM < MM.length; OM++) MM[OM] !== rM.NONE && iM[OM] && (0, ur.l)(iM[OM].format) && (this._integerMRTAttachmentsMask |= 1 << OM);
            rM.drawBuffers(MM)
          }, gr.ThinEngine.prototype.clearAttachments = function(MM, rM, iM, OM) {
            let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const aM = this._currentRenderTarget?.textures;
            let PM = !1;
            if (iM && MM && aM)
              for (let nM = 0; nM < rM.length; nM++) {
                const MM = aM[nM];
                if (rM[nM] !== this._gl.NONE && MM && (0, ur.l)(MM.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  PM = !0;
                  break
                }
              }
            if (!PM || !MM || !aM) return this.bindAttachments(rM), void this.clear(MM, iM, OM, SM, jM);
            this.bindAttachments(rM), this._applyColorWriteState();
            for (let nM = 0; nM < rM.length; nM++) {
              const iM = aM[nM];
              if (rM[nM] !== this._gl.NONE && iM) {
                let rM = MM;
                if ((0, ur.l)(iM.format)) {
                  const OM = (0, ur.m)(iM.type);
                  rM = OM ? pr : Wr;
                  const SM = OM ? 255 : 1;
                  rM.r = Math.round(MM.r * SM), rM.g = Math.round(MM.g * SM), rM.b = Math.round(MM.b * SM), rM.a = Math.round(MM.a * SM)
                }
                this._clearColorAttachment(nM, rM, iM.format, iM.type)
              }
            }
            if (OM || SM) {
              const MM = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, OM, SM, jM)
              } finally {
                this._integerMRTAttachmentsMask = MM
              }
            }
          }, gr.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              iM = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, MM.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(MM), rM || this.generateMipMapsMultiFramebuffer(MM), iM && (MM._MSAAFramebuffer && this._bindUnboundFramebuffer(MM._framebuffer), iM()), this._bindUnboundFramebuffer(null)
          }, gr.ThinEngine.prototype.createMultipleRenderTarget = function(MM, rM) {
            let iM, OM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              SM = !1,
              jM = !0,
              aM = !1,
              PM = !1,
              nM = 1,
              QM = 1,
              zM = [],
              LM = [],
              mM = [],
              HM = [],
              hM = [],
              JM = [],
              dM = [],
              yM = [],
              lM = [],
              EM = !1;
            const UM = this._createHardwareRenderTargetWrapper(!0, !1, MM);
            void 0 !== rM && (SM = void 0 !== rM.generateMipMaps && rM.generateMipMaps, jM = void 0 === rM.generateDepthBuffer || rM.generateDepthBuffer, aM = void 0 !== rM.generateStencilBuffer && rM.generateStencilBuffer, PM = void 0 !== rM.generateDepthTexture && rM.generateDepthTexture, nM = rM.BaM ?? 1, QM = rM.samples ?? QM, zM = rM.types || zM, LM = rM.samplingModes || LM, mM = rM.useSRGBBuffers || mM, HM = rM.formats || HM, hM = rM.targetTypes || hM, JM = rM.faceIndex || JM, dM = rM.layerIndex || dM, yM = rM.layerCounts || yM, lM = rM.labels || lM, EM = rM.dontCreateTextures ?? !1, this.PJ > 1 && (13 === rM.depthTextureFormat || 17 === rM.depthTextureFormat || 16 === rM.depthTextureFormat || 14 === rM.depthTextureFormat || 18 === rM.depthTextureFormat) && (iM = rM.depthTextureFormat)), void 0 === iM && (iM = aM ? 13 : 14);
            const GM = this._gl,
              CM = this._currentFramebuffer,
              eM = GM.createFramebuffer();
            this._bindUnboundFramebuffer(eM);
            const bM = MM.width ?? MM,
              wM = MM.height ?? MM,
              tM = [],
              uM = [],
              RM = this.PJ > 1 && (13 === iM || 17 === iM || 18 === iM);
            UM.label = rM?.label ?? "MultiRenderTargetWrapper", UM._framebuffer = eM, UM._generateDepthBuffer = PM || jM, UM._generateStencilBuffer = PM ? RM : aM, UM._depthStencilBuffer = this._setupFramebufferDepthAttachments(UM._generateStencilBuffer, UM._generateDepthBuffer, bM, wM, 1, iM), UM._attachments = uM;
            for (let pM = 0; pM < nM; pM++) {
              let MM = LM[pM] || 3,
                rM = zM[pM] || 0,
                iM = mM[pM] || !1;
              const OM = HM[pM] || 5,
                jM = hM[pM] || 3553,
                aM = yM[pM] ?? 1;
              (1 !== rM || this._caps.textureFloatLinearFiltering) && (2 !== rM || this._caps.textureHalfFloatLinearFiltering) || (MM = 1);
              const PM = this._getSamplingParameters(MM, SM);
              1 !== rM || this._caps.textureFloat || (rM = 0, gM.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), iM = iM && this._caps.supportSRGBBuffers && (this.PJ > 1 || this.isWebGPU);
              const nM = this.PJ > 1,
                QM = GM[nM ? "COLOR_ATTACHMENT" + pM : "COLOR_ATTACHMENT" + pM + "_WEBGL"];
              if (uM.push(QM), -1 === jM || EM) continue;
              const JM = new tr.c(this, 6);
              tM[pM] = JM, GM.activeTexture(GM["TEXTURE" + pM]), GM.bindTexture(jM, JM._hardwareTexture.underlyingResource), GM.texParameteri(jM, GM.TEXTURE_MAG_FILTER, PM.mag), GM.texParameteri(jM, GM.TEXTURE_MIN_FILTER, PM.min), GM.texParameteri(jM, GM.TEXTURE_WRAP_S, GM.CLAMP_TO_EDGE), GM.texParameteri(jM, GM.TEXTURE_WRAP_T, GM.CLAMP_TO_EDGE);
              const dM = this._getRGBABufferInternalSizedFormat(rM, OM, iM),
                CM = this._getInternalFormat(OM),
                eM = this._getWebGLTextureType(rM);
              if (!nM || 35866 !== jM && 32879 !== jM)
                if (34067 === jM) {
                  for (let MM = 0; MM < 6; MM++) GM.texImage2D(GM.TEXTURE_CUBE_MAP_POSITIVE_X + MM, 0, dM, bM, wM, 0, CM, eM, null);
                  JM.isCube = !0
                } else GM.texImage2D(GM.TEXTURE_2D, 0, dM, bM, wM, 0, CM, eM, null);
              else 35866 === jM ? JM.is2DArray = !0 : JM.is3D = !0, JM.baseDepth = JM.depth = aM, GM.texImage3D(jM, 0, dM, bM, wM, aM, 0, CM, eM, null);
              SM && GM.generateMipmap(jM), this._bindTextureDirectly(jM, null), JM.baseWidth = bM, JM.baseHeight = wM, JM.width = bM, JM.height = wM, JM.isReady = !0, JM.samples = 1, JM.generateMipMaps = SM, JM.samplingMode = MM, JM.type = rM, JM._useSRGBBuffer = iM, JM.format = OM, JM.label = lM[pM] ?? UM.label + "-Texture" + pM, this._internalTexturesCache.push(JM)
            }
            if (PM && this._caps.depthTextureExtension && !EM) {
              const MM = new tr.c(this, 14);
              let rM = 5,
                OM = GM.DEPTH_COMPONENT16,
                jM = GM.DEPTH_COMPONENT,
                aM = GM.UNSIGNED_SHORT,
                PM = GM.DEPTH_ATTACHMENT;
              this.PJ < 2 ? OM = GM.DEPTH_COMPONENT : 14 === iM ? (rM = 1, aM = GM.FLOAT, OM = GM.DEPTH_COMPONENT32F) : 18 === iM ? (rM = 0, aM = GM.FLOAT_32_UNSIGNED_INT_24_8_REV, OM = GM.DEPTH32F_STENCIL8, jM = GM.DEPTH_STENCIL, PM = GM.DEPTH_STENCIL_ATTACHMENT) : 16 === iM ? (rM = 0, aM = GM.UNSIGNED_INT, OM = GM.DEPTH_COMPONENT24, PM = GM.DEPTH_ATTACHMENT) : 13 !== iM && 17 !== iM || (rM = 12, aM = GM.UNSIGNED_INT_24_8, OM = GM.DEPTH24_STENCIL8, jM = GM.DEPTH_STENCIL, PM = GM.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(GM.TEXTURE_2D, MM, !0), GM.texParameteri(GM.TEXTURE_2D, GM.TEXTURE_MAG_FILTER, GM.NEAREST), GM.texParameteri(GM.TEXTURE_2D, GM.TEXTURE_MIN_FILTER, GM.NEAREST), GM.texParameteri(GM.TEXTURE_2D, GM.TEXTURE_WRAP_S, GM.CLAMP_TO_EDGE), GM.texParameteri(GM.TEXTURE_2D, GM.TEXTURE_WRAP_T, GM.CLAMP_TO_EDGE), GM.texImage2D(GM.TEXTURE_2D, 0, OM, bM, wM, 0, jM, aM, null), GM.framebufferTexture2D(GM.FRAMEBUFFER, PM, GM.TEXTURE_2D, MM._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(GM.TEXTURE_2D, null), UM._depthStencilTexture = MM, UM._depthStencilTextureWithStencil = RM, MM.baseWidth = bM, MM.baseHeight = wM, MM.width = bM, MM.height = wM, MM.isReady = !0, MM.samples = 1, MM.generateMipMaps = SM, MM.samplingMode = 1, MM.format = iM, MM.type = rM, MM.label = UM.label + "-DepthStencil", tM[nM] = MM, this._internalTexturesCache.push(MM)
            }
            if (UM.setTextures(tM), OM && GM.drawBuffers(uM), this._bindUnboundFramebuffer(CM), UM.setLayerAndFaceIndices(dM, JM), this.resetTextureCache(), EM) {
              if (QM > 1) {
                const MM = GM.createFramebuffer();
                if (!MM) throw new Error("Unable to create multi sampled framebuffer");
                UM._samples = QM, UM._MSAAFramebuffer = MM, nM > 0 && OM && (this._bindUnboundFramebuffer(MM), GM.drawBuffers(uM), this._bindUnboundFramebuffer(CM))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(UM, QM, OM);
            return UM
          }, gr.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(MM, rM) {
            let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.PJ < 2 || !MM) return 1;
            if (MM.samples === rM) return rM;
            const OM = this._gl;
            rM = Math.min(rM, this.getCaps().maxMSAASamples), MM._depthStencilBuffer && (OM.deleteRenderbuffer(MM._depthStencilBuffer), MM._depthStencilBuffer = null), MM._MSAAFramebuffer && (OM.deleteFramebuffer(MM._MSAAFramebuffer), MM._MSAAFramebuffer = null);
            const SM = MM._attachments.length;
            for (let aM = 0; aM < SM; aM++) {
              const rM = MM.textures[aM]._hardwareTexture;
              rM?.releaseMSAARenderBuffers()
            }
            if (rM > 1 && "function" === typeof OM.renderbufferStorageMultisample) {
              const jM = OM.createFramebuffer();
              if (!jM) throw new Error("Unable to create multi sampled framebuffer");
              MM._MSAAFramebuffer = jM, this._bindUnboundFramebuffer(jM);
              const aM = [];
              for (let iM = 0; iM < SM; iM++) {
                const SM = MM.textures[iM],
                  jM = SM._hardwareTexture,
                  PM = OM[this.PJ > 1 ? "COLOR_ATTACHMENT" + iM : "COLOR_ATTACHMENT" + iM + "_WEBGL"],
                  nM = this._createRenderBuffer(SM.width, SM.height, rM, -1, this._getRGBABufferInternalSizedFormat(SM.type, SM.format, SM._useSRGBBuffer), PM);
                if (!nM) throw new Error("Unable to create multi sampled framebuffer");
                jM.addMSAARenderBuffer(nM), SM.samples = rM, aM.push(PM)
              }
              iM && OM.drawBuffers(aM)
            } else this._bindUnboundFramebuffer(MM._framebuffer);
            const jM = MM._depthStencilTexture ? MM._depthStencilTexture.format : void 0;
            return MM._depthStencilBuffer = this._setupFramebufferDepthAttachments(MM._generateStencilBuffer, MM._generateDepthBuffer, MM.width, MM.height, rM, jM), this._bindUnboundFramebuffer(null), MM._samples = rM, rM
          }, gr.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(MM) {
            const rM = MM,
              iM = this._gl;
            if (rM.isMulti)
              for (let OM = 0; OM < rM._attachments.length; OM++) {
                const MM = rM.textures[OM];
                !MM?.generateMipMaps || MM?.isCube || MM?.is3D || (this._bindTextureDirectly(iM.TEXTURE_2D, MM, !0), iM.generateMipmap(iM.TEXTURE_2D), this._bindTextureDirectly(iM.TEXTURE_2D, null))
              }
          }, gr.ThinEngine.prototype.resolveMultiFramebuffer = function(MM) {
            const rM = MM,
              iM = this._gl;
            if (!rM._MSAAFramebuffer || !rM.isMulti) return;
            let OM = rM.resolveMSAAColors ? iM.COLOR_BUFFER_BIT : 0;
            OM |= rM._generateDepthBuffer && rM.resolveMSAADepth ? iM.DEPTH_BUFFER_BIT : 0, OM |= rM._generateStencilBuffer && rM.resolveMSAAStencil ? iM.STENCIL_BUFFER_BIT : 0;
            const SM = rM._attachments,
              jM = SM.length;
            iM.bindFramebuffer(iM.READ_FRAMEBUFFER, rM._MSAAFramebuffer), iM.bindFramebuffer(iM.DRAW_FRAMEBUFFER, rM._framebuffer);
            for (let aM = 0; aM < jM; aM++) {
              const MM = rM.textures[aM];
              for (let rM = 0; rM < jM; rM++) SM[rM] = iM.NONE;
              SM[aM] = iM[this.PJ > 1 ? "COLOR_ATTACHMENT" + aM : "COLOR_ATTACHMENT" + aM + "_WEBGL"], iM.readBuffer(SM[aM]), iM.drawBuffers(SM), iM.blitFramebuffer(0, 0, MM.width, MM.height, 0, 0, MM.width, MM.height, OM, iM.NEAREST)
            }
            for (let aM = 0; aM < jM; aM++) SM[aM] = iM[this.PJ > 1 ? "COLOR_ATTACHMENT" + aM : "COLOR_ATTACHMENT" + aM + "_WEBGL"];
            iM.drawBuffers(SM), iM.bindFramebuffer(this._gl.FRAMEBUFFER, rM._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = jM;
        const LM = [],
          mM = [],
          HM = [],
          hM = [],
          JM = [],
          dM = [],
          yM = [],
          lM = [];
        this._initTypes(iM, LM, mM, HM, hM, JM, dM, yM, lM, SM);
        const EM = !SM || void 0 === SM.generateDepthBuffer || SM.generateDepthBuffer,
          UM = !(!SM || void 0 === SM.generateStencilBuffer) && SM.generateStencilBuffer,
          GM = SM && SM.samples ? SM.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: mM,
          generateMipMaps: aM,
          generateDepthBuffer: EM,
          generateStencilBuffer: UM,
          generateDepthTexture: PM,
          depthTextureFormat: nM,
          types: LM,
          BaM: iM,
          useSRGBBuffers: HM,
          samples: GM,
          formats: hM,
          targetTypes: JM,
          faceIndex: dM,
          layerIndex: yM,
          layerCounts: lM,
          labels: jM,
          label: MM
        }, this._count = iM, this._drawOnlyOnFirstAttachmentByDefault = zM, iM > 0 && (this._createInternalTextures(), this._createTextures(jM))
      }
      _initTypes(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        for (let zM = 0; zM < MM; zM++) QM && QM.types && void 0 !== QM.types[zM] ? rM.push(QM.types[zM]) : rM.push(QM && QM.defaultType ? QM.defaultType : 0), QM && QM.samplingModes && void 0 !== QM.samplingModes[zM] ? iM.push(QM.samplingModes[zM]) : iM.push(RM.h.BILINEAR_SAMPLINGMODE), QM && QM.useSRGBBuffers && void 0 !== QM.useSRGBBuffers[zM] ? OM.push(QM.useSRGBBuffers[zM]) : OM.push(!1), QM && QM.formats && void 0 !== QM.formats[zM] ? SM.push(QM.formats[zM]) : SM.push(5), QM && QM.targetTypes && void 0 !== QM.targetTypes[zM] ? jM.push(QM.targetTypes[zM]) : jM.push(3553), QM && QM.faceIndex && void 0 !== QM.faceIndex[zM] ? aM.push(QM.faceIndex[zM]) : aM.push(0), QM && QM.layerIndex && void 0 !== QM.layerIndex[zM] ? PM.push(QM.layerIndex[zM]) : PM.push(0), QM && QM.layerCounts && void 0 !== QM.layerCounts[zM] ? nM.push(QM.layerCounts[zM]) : nM.push(1)
      }
      _createInternaTextureIndexMapping() {
        const MM = {},
          rM = [];
        if (!this._renderTarget) return rM;
        const iM = this._renderTarget.textures;
        for (let OM = 0; OM < iM.length; OM++) {
          const SM = iM[OM];
          if (!SM) continue;
          const jM = MM[SM.uniqueId];
          void 0 !== jM ? rM[OM] = jM : MM[SM.uniqueId] = OM
        }
        return rM
      }
      _rebuild() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || MM) return;
        const OM = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), rM && (this._releaseTextures(), this._createTextures(iM));
        const SM = this._renderTarget.textures;
        for (let jM = 0; jM < SM.length; jM++) {
          const MM = this._textures[jM];
          void 0 !== OM[jM] && this._renderTarget.setTexture(SM[OM[jM]], jM), MM._texture = SM[jM], MM._texture && (MM._noMipmap = !MM._texture.useMipMaps, MM._useSRGBBuffer = MM._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let MM = 0; MM < this._textures.length; MM++) this._textures[MM]._texture = null, this._textures[MM].dispose()
      }
      _createTextures(MM) {
        const rM = this._renderTarget.textures;
        this._textures = [];
        for (let iM = 0; iM < rM.length; iM++) {
          const OM = new RM.h(null, this.Hk());
          MM?.[iM] && (OM.name = MM[iM]), OM._texture = rM[iM], OM._texture && (OM._noMipmap = !OM._texture.useMipMaps, OM._useSRGBBuffer = OM._texture._useSRGBBuffer), this._textures.push(OM)
        }
      }
      setInternalTexture(MM, rM) {
        let iM = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === rM && (this._texture = MM), this.renderTarget.setTexture(MM, rM, iM), this.textures[rM] || (this.textures[rM] = new RM.h(null, this.Hk()), this.textures[rM].name = this._textureNames?.[rM] ?? this.textures[rM].name), this.textures[rM]._texture = MM, this.textures[rM]._noMipmap = !MM.useMipMaps, this.textures[rM]._useSRGBBuffer = MM._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[rM] = MM.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[rM] = MM.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[rM] = MM._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[rM])) {
          let iM;
          iM = MM.is2DArray ? 35866 : MM.isCube ? 34067 : MM.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[rM] = iM
        }
      }
      setLayerAndFaceIndex(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[MM] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[MM] = rM), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[MM] = iM), this.renderTarget.setLayerAndFaceIndex(MM, rM, iM))
      }
      setLayerAndFaceIndices(MM, rM) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = MM, this._multiRenderTargetOptions.faceIndex = rM, this.renderTarget.setLayerAndFaceIndices(MM, rM))
      }
      get samples() {
        return this._samples
      }
      set samples(MM) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(MM) : this._samples = MM
      }
      resize(MM) {
        this._processSizeParameter(MM), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(MM, rM, iM) {
        this._multiRenderTargetOptions.BaM = MM, this._count = MM;
        const OM = [],
          SM = [],
          jM = [],
          aM = [],
          PM = [],
          nM = [],
          QM = [],
          zM = [];
        this._textureNames = iM, this._initTypes(MM, OM, SM, jM, aM, PM, nM, QM, zM, rM), this._multiRenderTargetOptions.types = OM, this._multiRenderTargetOptions.samplingModes = SM, this._multiRenderTargetOptions.useSRGBBuffers = jM, this._multiRenderTargetOptions.formats = aM, this._multiRenderTargetOptions.targetTypes = PM, this._multiRenderTargetOptions.faceIndex = nM, this._multiRenderTargetOptions.layerIndex = QM, this._multiRenderTargetOptions.layerCounts = zM, this._multiRenderTargetOptions.labels = iM, this._rebuild(!1, !0, iM)
      }
      _unbindFrameBuffer(MM, rM) {
        this._renderTarget && MM.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(rM)
        }))
      }
      dispose() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), MM ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const MM = this._renderTarget?.textures;
        if (MM) {
          for (let rM = MM.length - 1; rM >= 0; rM--) this._textures[rM]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Dr = iM(41278);
    class kr {
      constructor(MM) {
        this.name = Dr.e.NAME_GEOMETRYBUFFERRENDERER, this.YJ = MM
      }
      register() {
        this.YJ._gatherRenderTargetsStage.registerStep(Dr.e.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(MM) {
        this.YJ._geometryBufferRenderer && MM.push(this.YJ._geometryBufferRenderer.getGBuffer())
      }
    }
    let Zr = !1;
    var or;
    ! function(MM) {
      MM[MM.Small = 0] = "Small", MM[MM.Medium = 1] = "Medium", MM[MM.Large = 2] = "Large", MM[MM.ExtraLarge = 3] = "ExtraLarge"
    }(or || (or = {}));
    const fr = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Yr = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Nr {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(MM) {
        if (MM && this._enableMeshBlendTag && !this._scene.ph().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = MM
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(MM) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = MM, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(MM, rM) {
        MM === Nr.POSITION_TEXTURE_TYPE ? (this._positionIndex = rM, this._enablePosition = !0) : MM === Nr.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = rM, this._enableVelocity = !0) : MM === Nr.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = rM, this._enableVelocityLinear = !0) : MM === Nr.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = rM, this._enableReflectivity = !0) : MM === Nr.DEPTH_TEXTURE_TYPE ? (this._depthIndex = rM, this._enableDepth = !0) : MM === Nr.NORMAL_TEXTURE_TYPE ? (this._normalIndex = rM, this._enableNormal = !0) : MM === Nr.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = rM, this._enableScreenspaceDepth = !0) : MM === Nr.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = rM, this._enableIrradiance = !0) : MM === Nr.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = rM, this._enableObjectId = !0) : MM === Nr.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = rM, this._enableMeshBlendTag = !0)
      }
      _setAttachments(MM) {
        this._attachmentsFromPrePass = MM
      }
      _linkInternalTexture(MM) {
        this._multiRenderTarget.setInternalTexture(MM, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(MM) {
        this._multiRenderTarget.renderList = MM
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(MM) {
        switch (MM) {
          case Nr.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Nr.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Nr.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Nr.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Nr.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Nr.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Nr.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Nr.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Nr.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Nr.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(MM) {
        this._enableDepth = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(MM) {
        this._enableNormal = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(MM) {
        this._enablePosition = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(MM) {
        this._enableVelocity = MM, MM || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = MM
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(MM) {
        this._enableVelocityLinear = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(MM) {
        this._enableReflectivity = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(MM) {
        this._enableScreenspaceDepth = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(MM) {
        this._enableIrradiance = MM, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(MM) {
        if (MM && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (MM && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (MM && !this._enableObjectId && !this._linkedWithPrePass) {
          const MM = this._scene.ph(),
            rM = Math.min(MM.getCaps().maxDrawBuffers ?? 1, 8),
            iM = this._assignRenderTargetIndices()[0] + 1;
          if (MM.getCaps().drawBuffersExtension && iM > rM) throw new Error(`GeometryBufferRenderer: ${iM} color attachments were requested, but this engine supports at most ${rM}`)
        }
        this._enableObjectId = MM, MM || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(MM) {
        if (this._enableMeshBlendTag !== MM) {
          if (MM) {
            const MM = this._scene.ph();
            if (! function(MM) {
                return "NATIVE" !== MM.shaderPlatformName && (MM.isWebGPU || 2 === MM.PJ)
              }(MM)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !MM.isWebGPU && !MM.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const rM = Math.min(MM.getCaps().maxDrawBuffers ?? 1, 8),
                iM = this._assignRenderTargetIndices()[0] + 1;
              if (MM.getCaps().drawBuffersExtension && iM > rM) throw new Error(`GeometryBufferRenderer: ${iM} color attachments were requested, but this engine supports at most ${rM}`)
            }
          }
          this._enableMeshBlendTag = MM, MM || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get YJ() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        var SM;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new BM.h(0, 0, 0, 0), this._clearDepthColor = new BM.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = MM, this._ratioOrDimensions = rM, this._useUbo = MM.ph().supportsUniformBuffers, this._depthFormat = iM, this._textureTypesAndFormats = OM || {}, this._initShaderSourceAsync(), SM = Nr, Zr || (Zr = !0, Object.defineProperty(oM.d.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(MM) {
            MM && MM.isSupported && (this._geometryBufferRenderer = MM)
          },
          enumerable: !0,
          configurable: !0
        }), oM.d.prototype.enableGeometryBufferRenderer = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            iM = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new SM(this, MM, rM, iM), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, oM.d.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, SM._SceneComponentInitialization = MM => {
          let rM = MM._getComponent(Dr.e.NAME_GEOMETRYBUFFERRENDERER);
          rM || (rM = new kr(MM), MM.MOM(rM))
        }), Nr._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.ph().isWebGPU && !Nr.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([iM.e(646).then((() => iM(64457))), Promise.all([iM.e(645), iM.e(657)]).then((() => iM(64465)))])) : await Promise.all([iM.e(629).then((() => iM(64473))), iM.e(628).then((() => iM(64478)))]), this._shadersLoaded = !0
      }
      isReady(MM, rM) {
        if (!this._shadersLoaded) return !1;
        const iM = MM.Zh();
        if (iM && iM.disableDepthWrite) return !1;
        if (function(MM) {
            return MM._isGaussianSplatting || "GaussianSplattingMesh" === (rM = MM.getClassName()) || "GaussianSplattingStream" === rM;
            var rM
          }(MM.getMesh())) return !1;
        const OM = [],
          SM = [YM.j.PositionKind],
          jM = MM.getMesh();
        jM.isVerticesDataPresent(YM.j.NormalKind) && (OM.push("#define HAS_NORMAL_ATTRIBUTE"), SM.push(YM.j.NormalKind));
        let aM = !1,
          PM = !1;
        if (iM) {
          let MM = !1;
          if (iM.needAlphaTestingForMesh(jM) && iM.getAlphaTestTexture() && (OM.push("#define ALPHATEST"), OM.push(`#define ALPHATEST_UV${iM.getAlphaTestTexture().coordinatesIndex+1}`), MM = !0), (iM.bumpTexture || iM.normalTexture || iM.geometryNormalTexture) && qM.e.BumpTextureEnabled) {
            const rM = iM.bumpTexture || iM.normalTexture || iM.geometryNormalTexture;
            OM.push("#define BUMP"), OM.push(`#define BUMP_UV${rM.coordinatesIndex+1}`), MM = !0
          }
          if (this._enableReflectivity) {
            let rM = !1;
            if ("PBRMetallicRoughnessMaterial" === iM.getClassName()) iM.metallicRoughnessTexture && (OM.push("#define ORMTEXTURE"), OM.push(`#define REFLECTIVITY_UV${iM.metallicRoughnessTexture.coordinatesIndex+1}`), OM.push("#define METALLICWORKFLOW"), MM = !0, rM = !0), null != iM.metallic && (OM.push("#define METALLIC"), OM.push("#define METALLICWORKFLOW"), rM = !0), null != iM.roughness && (OM.push("#define ROUGHNESS"), OM.push("#define METALLICWORKFLOW"), rM = !0), rM && (iM.baseTexture && (OM.push("#define ALBEDOTEXTURE"), OM.push(`#define ALBEDO_UV${iM.baseTexture.coordinatesIndex+1}`), iM.baseTexture.gammaSpace && OM.push("#define GAMMAALBEDO"), MM = !0), iM.baseColor && OM.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === iM.getClassName()) iM.specularGlossinessTexture ? (OM.push("#define SPECULARGLOSSINESSTEXTURE"), OM.push(`#define REFLECTIVITY_UV${iM.specularGlossinessTexture.coordinatesIndex+1}`), MM = !0, iM.specularGlossinessTexture.gammaSpace && OM.push("#define GAMMAREFLECTIVITYTEXTURE")) : iM.specularColor && OM.push("#define REFLECTIVITYCOLOR"), null != iM.glossiness && OM.push("#define GLOSSINESS");
            else if ("PBRMaterial" === iM.getClassName()) iM.metallicTexture && (OM.push("#define ORMTEXTURE"), OM.push(`#define REFLECTIVITY_UV${iM.metallicTexture.coordinatesIndex+1}`), OM.push("#define METALLICWORKFLOW"), MM = !0, rM = !0), null != iM.metallic && (OM.push("#define METALLIC"), OM.push("#define METALLICWORKFLOW"), rM = !0), null != iM.roughness && (OM.push("#define ROUGHNESS"), OM.push("#define METALLICWORKFLOW"), rM = !0), rM ? (iM.albedoTexture && (OM.push("#define ALBEDOTEXTURE"), OM.push(`#define ALBEDO_UV${iM.albedoTexture.coordinatesIndex+1}`), iM.albedoTexture.gammaSpace && OM.push("#define GAMMAALBEDO"), MM = !0), iM.albedoColor && OM.push("#define ALBEDOCOLOR")) : (iM.reflectivityTexture ? (OM.push("#define SPECULARGLOSSINESSTEXTURE"), OM.push(`#define REFLECTIVITY_UV${iM.reflectivityTexture.coordinatesIndex+1}`), iM.reflectivityTexture.gammaSpace && OM.push("#define GAMMAREFLECTIVITYTEXTURE"), MM = !0) : iM.reflectivityColor && OM.push("#define REFLECTIVITYCOLOR"), null != iM.microSurface && OM.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === iM.getClassName()) iM.specularTexture && (OM.push("#define REFLECTIVITYTEXTURE"), OM.push(`#define REFLECTIVITY_UV${iM.specularTexture.coordinatesIndex+1}`), iM.specularTexture.gammaSpace && OM.push("#define GAMMAREFLECTIVITYTEXTURE"), MM = !0), iM.specularColor && OM.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === iM.getClassName()) {
              const rM = iM;
              OM.push("#define METALLIC"), OM.push("#define ROUGHNESS"), rM._useRoughnessFromMetallicTextureGreen && rM.baseMetalnessTexture ? (OM.push("#define ORMTEXTURE"), OM.push(`#define REFLECTIVITY_UV${rM.baseMetalnessTexture.coordinatesIndex+1}`), MM = !0) : rM.baseMetalnessTexture ? (OM.push("#define METALLIC_TEXTURE"), OM.push(`#define METALLIC_UV${rM.baseMetalnessTexture.coordinatesIndex+1}`), MM = !0) : rM.specularRoughnessTexture && (OM.push("#define ROUGHNESS_TEXTURE"), OM.push(`#define ROUGHNESS_UV${rM.specularRoughnessTexture.coordinatesIndex+1}`), MM = !0), rM.baseColorTexture && (OM.push("#define ALBEDOTEXTURE"), OM.push(`#define ALBEDO_UV${rM.baseColorTexture.coordinatesIndex+1}`), rM.baseColorTexture.gammaSpace && OM.push("#define GAMMAALBEDO"), MM = !0), rM.baseColor && OM.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (OM.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === iM.getClassName())) {
            const rM = iM;
            rM.subsurfaceWeight > 0 && rM.subsurfaceWeightTexture && (OM.push("#define SUBSURFACE_WEIGHT"), OM.push(`#define SUBSURFACEWEIGHT_UV${rM.subsurfaceWeightTexture.coordinatesIndex+1}`), MM = !0), rM.transmissionWeight > 0 && rM.transmissionWeightTexture && (OM.push("#define TRANSMISSION_WEIGHT"), OM.push(`#define TRANSMISSIONWEIGHT_UV${rM.transmissionWeightTexture.coordinatesIndex+1}`), MM = !0)
          }
          MM && (OM.push("#define NEED_UV"), jM.isVerticesDataPresent(YM.j.UVKind) && (SM.push(YM.j.UVKind), OM.push("#define UV1"), aM = !0), jM.isVerticesDataPresent(YM.j.UV2Kind) && (SM.push(YM.j.UV2Kind), OM.push("#define UV2"), PM = !0))
        }
        if (this._enableDepth && (OM.push("#define DEPTH"), OM.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (OM.push("#define NORMAL"), OM.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (OM.push("#define POSITION"), OM.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (OM.push("#define VELOCITY"), OM.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(jM) && OM.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (OM.push("#define VELOCITY_LINEAR"), OM.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(jM) && OM.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (OM.push("#define REFLECTIVITY"), OM.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (OM.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), OM.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          OM.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), OM.push("#define IRRADIANCE");
          const MM = this._scene;
          if (MM.environmentTexture) {
            const rM = {};
            let SM = !1,
              jM = 0;
            "OpenPBRMaterial" !== iM.getClassName() && "StandardMaterial" !== iM.getClassName() && "PBRMetallicRoughnessMaterial" !== iM.getClassName() && "PBRSpecularGlossinessMaterial" !== iM.getClassName() && "PBRMaterial" !== iM.getClassName() || (SM = !!iM.realtimeFiltering, jM = iM.realtimeFilteringQuality || 0), (0, VM.R)(MM, MM.environmentTexture, rM, SM, jM, !0);
            for (const MM in rM) rM[MM] && OM.push("#define " + MM);
            rM.USEIRRADIANCEMAP || OM.push("#define SPHERICAL_HARMONICS");
            const aM = MM.postProcessRenderPipelineManager.supportedPipelines.find((MM => "IBLShadowsRenderPipeline" === MM.getClassName()));
            if (aM) {
              const MM = aM;
              MM._getAccumulatedTexture() && (OM.push("#define IBL_SHADOW_TEXTURE"), MM.coloredShadows && OM.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (OM.push("#define OBJECT_ID"), OM.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (OM.push("#define MESH_BLEND_TAG"), OM.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && OM.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && OM.push("#define ENCODE_NORMAL"), jM.useBones && jM.computeBonesUsingShaders && jM.skeleton ? (SM.push(YM.j.MatricesIndicesKind), SM.push(YM.j.MatricesWeightsKind), jM.numBoneInfluencers > 4 && (SM.push(YM.j.MatricesIndicesExtraKind), SM.push(YM.j.MatricesWeightsExtraKind)), OM.push("#define NUM_BONE_INFLUENCERS " + jM.numBoneInfluencers), OM.push("#define BONETEXTURE " + jM.skeleton.isUsingTextureForMatrices), OM.push("#define BonesPerMesh " + (jM.skeleton.bones.length + 1))) : (OM.push("#define NUM_BONE_INFLUENCERS 0"), OM.push("#define BONETEXTURE false"), OM.push("#define BonesPerMesh 0"));
        const nM = jM.morphTargetManager ? (0, VM.H)(jM.morphTargetManager, OM, SM, jM, !0, !0, !1, aM, PM, !1) : 0;
        rM && (OM.push("#define INSTANCES"), (0, VM.jb)(SM, this._enableVelocity || this._enableVelocityLinear), MM.getRenderingMesh().hasThinInstances && OM.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? OM.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : OM.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, zr.j)(iM, this._scene, OM);
        const QM = this._scene.ph(),
          zM = MM._getDrawWrapper(void 0, !0),
          LM = zM.defines,
          mM = OM.join("\n");
        return LM !== mM && zM.setEffect(QM.createEffect("geometry", {
          attributes: SM,
          uniformsNames: Yr,
          samplers: fr,
          defines: mM,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: nM
          },
          shaderLanguage: this.shaderLanguage
        }, QM), mM), zM.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(MM) {
        if (this._enableObjectId && 1 !== MM) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== MM) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = MM
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.ph().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.YJ.ph()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.YJ.ph().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const MM = [],
          rM = [];
        let iM = 0;
        return this._enableDepth && (this._depthIndex = iM, iM++, MM.push("gBuffer_Depth"), rM.push(this._textureTypesAndFormats[Nr.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = iM, iM++, MM.push("gBuffer_Normal"), rM.push(this._textureTypesAndFormats[Nr.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = iM, iM++, MM.push("gBuffer_Position"), rM.push(this._textureTypesAndFormats[Nr.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = iM, iM++, MM.push("gBuffer_Velocity"), rM.push(this._textureTypesAndFormats[Nr.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = iM, iM++, MM.push("gBuffer_VelocityLinear"), rM.push(this._textureTypesAndFormats[Nr.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = iM, iM++, MM.push("gBuffer_Reflectivity"), rM.push(this._textureTypesAndFormats[Nr.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = iM, iM++, MM.push("gBuffer_ScreenspaceDepth"), rM.push(this._textureTypesAndFormats[Nr.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = iM, iM++, MM.push("gBuffer_Irradiance"), rM.push(this._textureTypesAndFormats[Nr.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = iM, iM++, MM.push("gBuffer_ObjectId"), rM.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = iM, iM++, MM.push("gBuffer_MeshBlendTag"), rM.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [iM, MM, rM]
      }
      _createRenderTargets() {
        const MM = this._scene.ph(),
          [rM, iM, OM] = this._assignRenderTargetIndices(),
          SM = Math.min(MM.getCaps().maxDrawBuffers ?? 1, 8);
        if (MM.getCaps().drawBuffersExtension && rM > SM) throw new Error(`GeometryBufferRenderer: ${rM} color attachments were requested, but this engine supports at most ${SM}`);
        let aM = 0;
        MM._caps.textureFloat && MM._caps.textureFloatLinearFiltering ? aM = 1 : MM._caps.textureHalfFloat && MM._caps.textureHalfFloatLinearFiltering && (aM = 2);
        const PM = this._getRenderTargetDimensions(),
          nM = [],
          QM = [],
          zM = [];
        for (const jM of OM) jM ? (nM.push(jM.textureType), QM.push(jM.textureFormat), zM.push(jM.samplingMode ?? 2)) : (nM.push(aM), QM.push(5), zM.push(2));
        if (this._normalsAreUnsigned = 11 === nM[Nr.NORMAL_TEXTURE_TYPE] || 13 === nM[Nr.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new sr("gBuffer", PM, rM, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: nM,
            formats: QM,
            samplingModes: zM,
            depthTextureFormat: this._depthFormat
          }, iM.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = RM.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = RM.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const LM = [!0],
          mM = [!1],
          HM = [!0];
        for (let jM = 1; jM < rM; ++jM) LM.push(!0), HM.push(!1), mM.push(!0);
        const hM = MM.buildTextureLayout(LM),
          JM = MM.buildTextureLayout(mM),
          dM = MM.buildTextureLayout(HM);
        this._multiRenderTarget.onClearObservable.add((MM => {
          const rM = this.useSpecificClearForDepthTexture ? JM : hM;
          MM.clearAttachments(this._clearColor, rM, !0, !0, !0), this.useSpecificClearForDepthTexture && MM.clearAttachments(this._clearDepthColor, dM, !0, !1, !1), MM.bindAttachments(hM)
        })), this._resizeObserver = MM.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const yM = MM => {
          const rM = MM.getRenderingMesh(),
            iM = MM.getEffectiveMesh(),
            OM = this._scene,
            SM = OM.ph(),
            aM = MM.Zh();
          if (!aM) return;
          if (iM._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[iM.uniqueId] && (this._previousTransformationMatrices[iM.uniqueId] = {
              uL: fM.d.Identity(),
              viewProjection: OM.getTransformMatrix()
            }, rM.skeleton)) {
            const MM = rM.skeleton.getTransformMatrices(rM);
            this._previousBonesTransformationMatrices[rM.uniqueId] = this._copyBonesTransformationMatrices(MM, new Float32Array(MM.length))
          }
          const PM = rM._getInstancesRenderList(MM._id, !!MM.getReplacementMesh());
          if (PM.mustReturn) return;
          const nM = SM.getCaps().instancedArrays && (null !== PM.visibleInstances[MM._id] || rM.hasThinInstances),
            QM = iM.getWorldMatrix();
          if (this.isReady(MM, nM)) {
            const zM = MM._getDrawWrapper();
            if (!zM) return;
            const LM = zM.effect;
            let mM;
            SM.enableEffect(zM), nM || rM._bind(MM, LM, aM.fillMode), this._useUbo ? ((0, VM.v)(LM, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (LM.setMatrix("viewProjection", OM.getTransformMatrix()), LM.setMatrix("view", OM.getViewMatrix()), this._scene.bindEyePosition(LM, "vEyePosition"));
            if (rM._instanceDataStorage.isFrozen || !aM.backFaceCulling && null === aM.sideOrientation) mM = rM._effectiveSideOrientation;
            else {
              const MM = iM._getWorldMatrixDeterminant();
              mM = aM._getEffectiveOrientation(rM), MM < 0 && (mM = mM === jM.c.ClockWiseSideOrientation ? jM.c.CounterClockWiseSideOrientation : jM.c.ClockWiseSideOrientation)
            }
            if (aM._preBind(zM, mM), aM.needAlphaTestingForMesh(iM)) {
              const MM = aM.getAlphaTestTexture();
              MM && (LM.setTexture("diffuseSampler", MM), LM.setMatrix("diffuseMatrix", MM.getTextureMatrix()), LM.setFloat("alphaCutOff", aM.alphaCutOff ?? .4))
            }
            if ((aM.bumpTexture || aM.normalTexture || aM.geometryNormalTexture) && OM.ph().getCaps().standardDerivatives && qM.e.BumpTextureEnabled) {
              const MM = aM.bumpTexture || aM.normalTexture || aM.geometryNormalTexture;
              LM.setFloat3("vBumpInfos", MM.coordinatesIndex, 1 / MM.level, aM.parallaxScaleBias), LM.setMatrix("bumpMatrix", MM.getTextureMatrix()), LM.setTexture("bumpSampler", MM), LM.setFloat2("vTangentSpaceParams", aM.invertNormalMapX ? -1 : 1, aM.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === aM.getClassName()) null !== aM.metallicRoughnessTexture && (LM.setTexture("reflectivitySampler", aM.metallicRoughnessTexture), LM.setMatrix("reflectivityMatrix", aM.metallicRoughnessTexture.getTextureMatrix())), null !== aM.metallic && LM.setFloat("metallic", aM.metallic), null !== aM.roughness && LM.setFloat("glossiness", 1 - aM.roughness), null !== aM.baseTexture && (LM.setTexture("albedoSampler", aM.baseTexture), LM.setMatrix("albedoMatrix", aM.baseTexture.getTextureMatrix())), null !== aM.baseColor && LM.setColor3("albedoColor", aM.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === aM.getClassName()) null !== aM.specularGlossinessTexture ? (LM.setTexture("reflectivitySampler", aM.specularGlossinessTexture), LM.setMatrix("reflectivityMatrix", aM.specularGlossinessTexture.getTextureMatrix())) : null !== aM.specularColor && LM.setColor3("reflectivityColor", aM.specularColor), null !== aM.glossiness && LM.setFloat("glossiness", aM.glossiness);
            else if ("PBRMaterial" === aM.getClassName()) null !== aM.metallicTexture && (LM.setTexture("reflectivitySampler", aM.metallicTexture), LM.setMatrix("reflectivityMatrix", aM.metallicTexture.getTextureMatrix())), null !== aM.metallic && LM.setFloat("metallic", aM.metallic), null !== aM.roughness && LM.setFloat("glossiness", 1 - aM.roughness), null !== aM.roughness || null !== aM.metallic || null !== aM.metallicTexture ? (null !== aM.albedoTexture && (LM.setTexture("albedoSampler", aM.albedoTexture), LM.setMatrix("albedoMatrix", aM.albedoTexture.getTextureMatrix())), null !== aM.albedoColor && LM.setColor3("albedoColor", aM.albedoColor)) : (null !== aM.reflectivityTexture ? (LM.setTexture("reflectivitySampler", aM.reflectivityTexture), LM.setMatrix("reflectivityMatrix", aM.reflectivityTexture.getTextureMatrix())) : null !== aM.reflectivityColor && LM.setColor3("reflectivityColor", aM.reflectivityColor), null !== aM.microSurface && LM.setFloat("glossiness", aM.microSurface));
            else if ("StandardMaterial" === aM.getClassName()) null !== aM.specularTexture && (LM.setTexture("reflectivitySampler", aM.specularTexture), LM.setMatrix("reflectivityMatrix", aM.specularTexture.getTextureMatrix())), null !== aM.specularColor && LM.setColor3("reflectivityColor", aM.specularColor);
            else if ("OpenPBRMaterial" === aM.getClassName()) {
              const MM = aM;
              MM._useRoughnessFromMetallicTextureGreen && MM.baseMetalnessTexture ? (LM.setTexture("reflectivitySampler", MM.baseMetalnessTexture), LM.setMatrix("reflectivityMatrix", MM.baseMetalnessTexture.getTextureMatrix())) : MM.baseMetalnessTexture ? (LM.setTexture("metallicSampler", MM.baseMetalnessTexture), LM.setMatrix("metallicMatrix", MM.baseMetalnessTexture.getTextureMatrix())) : MM.specularRoughnessTexture && (LM.setTexture("roughnessSampler", MM.specularRoughnessTexture), LM.setMatrix("roughnessMatrix", MM.specularRoughnessTexture.getTextureMatrix())), LM.setFloat("metallic", MM.baseMetalness), LM.setFloat("glossiness", 1 - MM.specularRoughness), null !== MM.baseColorTexture && (LM.setTexture("albedoSampler", MM.baseColorTexture), LM.setMatrix("albedoMatrix", MM.baseColorTexture.getTextureMatrix())), null !== MM.baseColor && LM.setColor3("albedoColor", MM.baseColor)
            }
            if (this._enableIrradiance && OM.environmentTexture) {
              const MM = OM.environmentTexture,
                rM = OM.postProcessRenderPipelineManager.supportedPipelines.find((MM => "IBLShadowsRenderPipeline" === MM.getClassName()));
              if (rM) {
                const MM = rM._getAccumulatedTexture();
                MM && (LM.setTexture("iblShadowSampler", MM), LM.setFloat2("shadowTextureSize", MM.getSize().width, MM.getSize().height))
              }
              if (LM.setMatrix("reflectionMatrix", MM.getReflectionTextureMatrix()), LM.setFloat2("vReflectionInfos", MM.level * OM.iblIntensity, 0), LM.setTexture("reflectionSampler", MM), MM.irradianceTexture && (LM.setTexture("irradianceSampler", MM.irradianceTexture), MM.irradianceTexture._dominantDirection && LM.setVector3("vReflectionDominantDirection", MM.irradianceTexture._dominantDirection)), MM.sphericalPolynomial) {
                const rM = MM.sphericalPolynomial;
                if (rM.preScaledHarmonics) {
                  const MM = rM.preScaledHarmonics;
                  LM.setVector3("vSphericalL00", MM.l00), LM.setVector3("vSphericalL1_1", MM.l1_1), LM.setVector3("vSphericalL10", MM.l10), LM.setVector3("vSphericalL11", MM.l11), LM.setVector3("vSphericalL2_2", MM.l2_2), LM.setVector3("vSphericalL2_1", MM.l2_1), LM.setVector3("vSphericalL20", MM.l20), LM.setVector3("vSphericalL21", MM.l21), LM.setVector3("vSphericalL22", MM.l22)
                } else LM.setFloat3("vSphericalX", rM.x.x, rM.x.y, rM.x.z), LM.setFloat3("vSphericalY", rM.y.x, rM.y.y, rM.y.z), LM.setFloat3("vSphericalZ", rM.z.x, rM.z.y, rM.z.z), LM.setFloat3("vSphericalXX_ZZ", rM.xx.x - rM.zz.x, rM.xx.y - rM.zz.y, rM.xx.z - rM.zz.z), LM.setFloat3("vSphericalYY_ZZ", rM.yy.x - rM.zz.x, rM.yy.y - rM.zz.y, rM.yy.z - rM.zz.z), LM.setFloat3("vSphericalZZ", rM.zz.x, rM.zz.y, rM.zz.z), LM.setFloat3("vSphericalXY", rM.xy.x, rM.xy.y, rM.xy.z), LM.setFloat3("vSphericalYZ", rM.yz.x, rM.yz.y, rM.yz.z), LM.setFloat3("vSphericalZX", rM.zx.x, rM.zx.y, rM.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === aM.getClassName()) {
                const MM = aM;
                LM.setFloat("vSubsurfaceWeight", MM.subsurfaceWeight), MM.subsurfaceWeightTexture && (LM.setTexture("subsurfaceWeightSampler", MM.subsurfaceWeightTexture), LM.setMatrix("subsurfaceWeightMatrix", MM.subsurfaceWeightTexture.getTextureMatrix())), LM.setFloat("vTransmissionWeight", MM.transmissionWeight), MM.transmissionWeightTexture && (LM.setTexture("transmissionWeightSampler", MM.transmissionWeightTexture), LM.setMatrix("transmissionWeightMatrix", MM.transmissionWeightTexture.getTextureMatrix())), LM.setFloat("vTransmissionScatterAnisotropy", MM.transmissionScatterAnisotropy), LM.setFloat("vSubsurfaceScatterAnisotropy", MM.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, zr.e)(LM, aM, this._scene), rM.useBones && rM.computeBonesUsingShaders && rM.skeleton) {
              const MM = rM.skeleton;
              if (MM.isUsingTextureForMatrices && LM.getUniformIndex("boneTextureInfo") > -1) {
                const iM = MM.getTransformMatrixTexture(rM);
                LM.setTexture("boneSampler", iM), LM.setFloat2("boneTextureInfo", MM._textureWidth, MM._textureHeight)
              } else LM.setMatrices("mBones", rM.skeleton.getTransformMatrices(rM));
              (this._enableVelocity || this._enableVelocityLinear) && LM.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[rM.uniqueId])
            }
            if ((0, VM.r)(rM, LM), rM.morphTargetManager && rM.morphTargetManager.isUsingTextureForTargets && rM.morphTargetManager._bind(LM), (this._enableVelocity || this._enableVelocityLinear) && (LM.setMatrix("previousWorld", this._previousTransformationMatrices[iM.uniqueId].uL), LM.setMatrix("previousViewProjection", this._previousTransformationMatrices[iM.uniqueId].viewProjection)), this._enableObjectId) {
              let MM = rM.uniqueId;
              if (this.objectIdProvider) MM = (0, Hr.h)(rM, this.objectIdProvider);
              else if (MM > 16777215) throw new Error(`Invalid geometry object ID ${MM} for mesh "${rM.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              LM.setFloat("objectId", MM)
            }
            if (this._enableMeshBlendTag) {
              const MM = this.meshBlendTagProvider ? (0, Hr.d)(rM, this.meshBlendTagProvider) : rM.meshBlendingTag;
              LM.setInt("meshBlendTag", MM)
            }
            nM && rM.hasThinInstances && LM.setMatrix("world", QM), rM._processRendering(iM, MM, LM, aM.fillMode, PM, nM, ((MM, rM) => {
              MM || LM.setMatrix("world", rM)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[iM.uniqueId].uL = QM.clone(), this._previousTransformationMatrices[iM.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), rM.skeleton && this._copyBonesTransformationMatrices(rM.skeleton.getTransformMatrices(rM), this._previousBonesTransformationMatrices[iM.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (rM, iM, OM) => {
          if ((OM || 0 === iM) && rM.iG)
            for (let SM = 0; SM < rM.iG.length; ++SM) {
              const iM = rM.iG[SM],
                OM = iM.Zh(),
                jM = iM.getRenderingMesh();
              if (!OM) continue;
              const aM = jM._getInstancesRenderList(iM._id, !!iM.getReplacementMesh()),
                PM = MM.getCaps().instancedArrays && (null !== aM.visibleInstances[iM._id] || jM.hasThinInstances);
              if (!this.isReady(iM, PM)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (rM, iM, OM, SM) => {
          let jM;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.ph().bindAttachments(this._attachmentsFromPrePass)
          }
          if (SM.length) {
            for (MM.setColorWrite(!1), jM = 0; jM < SM.length; jM++) yM(SM.data[jM]);
            MM.setColorWrite(!0)
          }
          for (jM = 0; jM < rM.length; jM++) yM(rM.data[jM]);
          for (MM.setDepthWrite(!1), jM = 0; jM < iM.length; jM++) yM(iM.data[jM]);
          if (this.renderTransparentMeshes)
            for (jM = 0; jM < OM.length; jM++) yM(OM.data[jM]);
          MM.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const MM = this._scene.ph();
        return {
          width: Math.max(1, Math.floor(MM.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(MM.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(MM, rM) {
        for (let iM = 0; iM < MM.length; iM++) rM[iM] = MM[iM];
        return rM
      }
    }
    Nr.ForceGLSL = !1, Nr.DEPTH_TEXTURE_TYPE = 0, Nr.NORMAL_TEXTURE_TYPE = 1, Nr.POSITION_TEXTURE_TYPE = 2, Nr.VELOCITY_TEXTURE_TYPE = 3, Nr.REFLECTIVITY_TEXTURE_TYPE = 4, Nr.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Nr.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Nr.IRRADIANCE_TEXTURE_TYPE = 7, Nr.OBJECT_ID_TEXTURE_TYPE = 8, Nr.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Nr._SceneComponentInitialization = MM => {
      throw (0, yr.n)("GeometryBufferRendererSceneComponent")
    };
    var Ar = iM(38085);
    const xr = {
      effect: null,
      subMesh: null
    };

    function vr(MM) {
      if ("number" === typeof MM) return 1;
      if (MM instanceof fM.o) return 2;
      if (MM instanceof fM.q || MM instanceof BM.d) return 3;
      if (MM instanceof fM.u || MM instanceof BM.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Fr {
      populateVectorFromLinkedProperties(MM) {
        const rM = vr(MM);
        for (const iM in this.linkedProperties) {
          const MM = this.linkedProperties[iM],
            OM = MM.numComponents;
          if (rM < OM || MM.targetUniformComponentOffset > rM - OM) return void(1 == OM ? gM.e.Error(`Float property ${MM.name} has an offset that is too large.`) : gM.e.Error(`Vector${OM} property ${MM.name} won't fit in Vector${rM} or has an offset that is too large.`));
          "number" === typeof MM.value ? Fr._tmpArray[MM.targetUniformComponentOffset] = MM.value : MM.value.toArray(Fr._tmpArray, MM.targetUniformComponentOffset)
        }
        MM.cz(Fr._tmpArray)
      }
      constructor(MM, rM) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = MM, this.numComponents = rM
      }
    }
    Fr._tmpArray = [0, 0, 0, 0];
    class Br {
      constructor(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          jM = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = MM, this.targetUniformName = iM, this.defaultValue = rM, this.value = rM, this.targetUniformComponentNum = OM, this.targetUniformComponentOffset = SM, this.requiredDefine = jM
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : vr(this.defaultValue)
      }
    }
    class Xr {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(MM, rM, iM) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = MM, this.samplerPrefix = rM, this.textureDefine = iM
      }
    }
    class Ir extends((0, Jr.d)((0, hr.e)(NM.c))) {}
    class Kr extends(function(MM) {
      return class extends MM {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Ir)) {}
    class qr extends((0, XM.h)(Kr)) {
      constructor(MM) {
        super(MM), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Tr extends((0, dr.e)(KM.c)) {}
    let Vr = (() => {
        var MM, rM, OM, SM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, pM, WM, sM, DM, oM, NM, AM, xM, vM, XM, KM, cM, Mr, rr, ir, Or, Sr, jr, ar, Pr, nr, Qr, hr, Jr, dr, yr, lr, Er, Ur, Gr, Cr, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Ar, vr, Ir, Kr, Vr, cr, Mi, ri, ii, Oi, Si, ji, ai, Pi, ni, Qi, zi, Li, mi, Hi, Ji, di, yi, li, Ei, Ui, Gi, Ci, ei, bi, wi, ti, gi, ui, Ri;
        let Wi, si, Di, ki, Zi, oi, fi, Yi, Ni, Ai, xi, vi, Fi, Bi, Xi, Ii, Ki, qi, Ti, Vi, ci, MO, rO, iO, OO, SO, jO, aO, PO, nO, QO, zO, LO, mO, HO, hO, JO, dO, yO, lO, EO, UO, GO, CO, eO, bO, wO, tO, gO, uO, RO, pO, WO, sO, DO, kO, ZO, oO, fO, YO, NO, AO, xO, vO, FO, BO, XO, IO, KO, qO, TO, VO, cO, MS, rS, iS, OS, SS, jS, aS, PS, nS, QS, zS, LS, mS, HS, hS, JS, dS, yS, lS, ES, US, GS, CS, eS, bS, wS, tS, gS, uS, RS, pS, WS, sS = Tr,
          DS = [],
          kS = [],
          ZS = [],
          oS = [],
          fS = [],
          YS = [],
          NS = [],
          AS = [],
          xS = [],
          vS = [],
          FS = [],
          BS = [],
          XS = [],
          IS = [],
          KS = [],
          qS = [],
          TS = [],
          VS = [],
          cS = [],
          Mj = [],
          rj = [],
          ij = [],
          Oj = [],
          Sj = [],
          jj = [],
          aj = [],
          Pj = [],
          nj = [],
          Qj = [],
          zj = [],
          Lj = [],
          mj = [],
          Hj = [],
          hj = [],
          Jj = [],
          dj = [],
          yj = [],
          lj = [],
          Ej = [],
          Uj = [],
          Gj = [],
          Cj = [],
          ej = [],
          bj = [],
          wj = [],
          tj = [],
          gj = [],
          uj = [],
          Rj = [],
          pj = [],
          Wj = [],
          sj = [],
          Dj = [],
          kj = [],
          Zj = [],
          oj = [],
          fj = [],
          Yj = [],
          Nj = [],
          Aj = [],
          xj = [],
          vj = [],
          Fj = [],
          Bj = [],
          Xj = [],
          Ij = [],
          Kj = [],
          qj = [],
          Tj = [],
          Vj = [],
          cj = [],
          Ma = [],
          ra = [],
          ia = [],
          Oa = [],
          Sa = [],
          ja = [],
          aa = [],
          Pa = [],
          na = [],
          Qa = [],
          za = [],
          La = [],
          ma = [],
          Ha = [],
          ha = [],
          Ja = [],
          da = [],
          ya = [],
          la = [],
          Ea = [],
          Ua = [],
          Ga = [],
          Ca = [],
          ea = [],
          ba = [],
          wa = [],
          ta = [],
          ga = [],
          ua = [],
          Ra = [],
          pa = [],
          Wa = [],
          sa = [],
          Da = [],
          ka = [],
          Za = [],
          oa = [],
          fa = [],
          Ya = [],
          Na = [],
          Aa = [],
          xa = [],
          va = [],
          Fa = [],
          Ba = [],
          Xa = [],
          Ia = [],
          Ka = [],
          qa = [],
          Ta = [],
          Va = [],
          ca = [],
          MP = [],
          rP = [],
          iP = [],
          OP = [],
          SP = [],
          jP = [],
          aP = [],
          PP = [],
          nP = [],
          QP = [],
          zP = [],
          LP = [],
          mP = [],
          HP = [],
          hP = [],
          JP = [],
          dP = [],
          yP = [],
          lP = [],
          EP = [],
          UP = [],
          GP = [],
          CP = [],
          eP = [],
          bP = [],
          wP = [],
          tP = [],
          gP = [],
          uP = [],
          RP = [],
          pP = [],
          WP = [],
          sP = [],
          DP = [],
          kP = [],
          ZP = [],
          oP = [],
          fP = [],
          YP = [],
          NP = [],
          AP = [],
          xP = [],
          vP = [],
          FP = [],
          BP = [],
          XP = [],
          IP = [],
          KP = [],
          qP = [],
          TP = [],
          VP = [],
          cP = [],
          Mn = [],
          rn = [],
          On = [],
          Sn = [],
          jn = [],
          an = [],
          Pn = [],
          nn = [],
          Qn = [],
          zn = [],
          Ln = [],
          mn = [],
          Hn = [],
          hn = [],
          Jn = [],
          dn = [],
          yn = [],
          En = [],
          Un = [],
          Gn = [],
          Cn = [],
          en = [],
          bn = [],
          wn = [],
          tn = [],
          gn = [],
          un = [],
          Rn = [],
          pn = [],
          Wn = [];
        return MM = class extends sS {
          get baseWeight() {
            return (0, wM.c)(this, rM, "f")
          }
          set baseWeight(MM) {
            (0, wM.f)(this, rM, MM, "f")
          }
          get baseWeightTexture() {
            return (0, wM.c)(this, OM, "f")
          }
          set baseWeightTexture(MM) {
            (0, wM.f)(this, OM, MM, "f")
          }
          get baseColor() {
            return (0, wM.c)(this, SM, "f")
          }
          set baseColor(MM) {
            (0, wM.f)(this, SM, MM, "f")
          }
          get baseColorTexture() {
            return (0, wM.c)(this, aM, "f")
          }
          set baseColorTexture(MM) {
            (0, wM.f)(this, aM, MM, "f")
          }
          get baseDiffuseRoughness() {
            return (0, wM.c)(this, PM, "f")
          }
          set baseDiffuseRoughness(MM) {
            (0, wM.f)(this, PM, MM, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, wM.c)(this, nM, "f")
          }
          set baseDiffuseRoughnessTexture(MM) {
            (0, wM.f)(this, nM, MM, "f")
          }
          get baseMetalness() {
            return (0, wM.c)(this, QM, "f")
          }
          set baseMetalness(MM) {
            (0, wM.f)(this, QM, MM, "f")
          }
          get baseMetalnessTexture() {
            return (0, wM.c)(this, zM, "f")
          }
          set baseMetalnessTexture(MM) {
            (0, wM.f)(this, zM, MM, "f")
          }
          get specularWeight() {
            return (0, wM.c)(this, LM, "f")
          }
          set specularWeight(MM) {
            (0, wM.f)(this, LM, MM, "f")
          }
          get specularWeightTexture() {
            return (0, wM.c)(this, mM, "f")
          }
          set specularWeightTexture(MM) {
            (0, wM.f)(this, mM, MM, "f")
          }
          get specularColor() {
            return (0, wM.c)(this, HM, "f")
          }
          set specularColor(MM) {
            (0, wM.f)(this, HM, MM, "f")
          }
          get specularColorTexture() {
            return (0, wM.c)(this, hM, "f")
          }
          set specularColorTexture(MM) {
            (0, wM.f)(this, hM, MM, "f")
          }
          get specularRoughness() {
            return (0, wM.c)(this, JM, "f")
          }
          set specularRoughness(MM) {
            (0, wM.f)(this, JM, MM, "f")
          }
          get specularRoughnessTexture() {
            return (0, wM.c)(this, dM, "f")
          }
          set specularRoughnessTexture(MM) {
            (0, wM.f)(this, dM, MM, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, wM.c)(this, yM, "f")
          }
          set specularRoughnessAnisotropy(MM) {
            (0, wM.f)(this, yM, MM, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, wM.c)(this, lM, "f")
          }
          set specularRoughnessAnisotropyTexture(MM) {
            (0, wM.f)(this, lM, MM, "f")
          }
          get specularIor() {
            return (0, wM.c)(this, EM, "f")
          }
          set specularIor(MM) {
            (0, wM.f)(this, EM, MM, "f")
          }
          get transmissionWeight() {
            return (0, wM.c)(this, UM, "f")
          }
          set transmissionWeight(MM) {
            (0, wM.f)(this, UM, MM, "f")
          }
          get transmissionWeightTexture() {
            return (0, wM.c)(this, GM, "f")
          }
          set transmissionWeightTexture(MM) {
            (0, wM.f)(this, GM, MM, "f")
          }
          get transmissionColor() {
            return (0, wM.c)(this, CM, "f")
          }
          set transmissionColor(MM) {
            (0, wM.f)(this, CM, MM, "f")
          }
          get transmissionColorTexture() {
            return (0, wM.c)(this, eM, "f")
          }
          set transmissionColorTexture(MM) {
            (0, wM.f)(this, eM, MM, "f")
          }
          get transmissionDepth() {
            return (0, wM.c)(this, bM, "f")
          }
          set transmissionDepth(MM) {
            (0, wM.f)(this, bM, MM, "f")
          }
          get transmissionDepthTexture() {
            return (0, wM.c)(this, pM, "f")
          }
          set transmissionDepthTexture(MM) {
            (0, wM.f)(this, pM, MM, "f")
          }
          get transmissionScatter() {
            return (0, wM.c)(this, WM, "f")
          }
          set transmissionScatter(MM) {
            (0, wM.f)(this, WM, MM, "f")
          }
          get transmissionScatterTexture() {
            return (0, wM.c)(this, sM, "f")
          }
          set transmissionScatterTexture(MM) {
            (0, wM.f)(this, sM, MM, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, wM.c)(this, DM, "f")
          }
          set transmissionScatterAnisotropy(MM) {
            (0, wM.f)(this, DM, MM, "f")
          }
          get transmissionDispersionScale() {
            return (0, wM.c)(this, oM, "f")
          }
          set transmissionDispersionScale(MM) {
            (0, wM.f)(this, oM, MM, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, wM.c)(this, NM, "f")
          }
          set transmissionDispersionScaleTexture(MM) {
            (0, wM.f)(this, NM, MM, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, wM.c)(this, AM, "f")
          }
          set transmissionDispersionAbbeNumber(MM) {
            (0, wM.f)(this, AM, MM, "f")
          }
          get subsurfaceWeight() {
            return (0, wM.c)(this, xM, "f")
          }
          set subsurfaceWeight(MM) {
            (0, wM.f)(this, xM, MM, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, wM.c)(this, vM, "f")
          }
          set subsurfaceWeightTexture(MM) {
            (0, wM.f)(this, vM, MM, "f")
          }
          get subsurfaceColor() {
            return (0, wM.c)(this, XM, "f")
          }
          set subsurfaceColor(MM) {
            (0, wM.f)(this, XM, MM, "f")
          }
          get subsurfaceColorTexture() {
            return (0, wM.c)(this, KM, "f")
          }
          set subsurfaceColorTexture(MM) {
            (0, wM.f)(this, KM, MM, "f")
          }
          get subsurfaceRadius() {
            return (0, wM.c)(this, cM, "f")
          }
          set subsurfaceRadius(MM) {
            (0, wM.f)(this, cM, MM, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, wM.c)(this, Mr, "f")
          }
          set subsurfaceRadiusScale(MM) {
            (0, wM.f)(this, Mr, MM, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, wM.c)(this, rr, "f")
          }
          set subsurfaceRadiusScaleTexture(MM) {
            (0, wM.f)(this, rr, MM, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, wM.c)(this, ir, "f")
          }
          set subsurfaceScatterAnisotropy(MM) {
            (0, wM.f)(this, ir, MM, "f")
          }
          get coatWeight() {
            return (0, wM.c)(this, Or, "f")
          }
          set coatWeight(MM) {
            (0, wM.f)(this, Or, MM, "f")
          }
          get coatWeightTexture() {
            return (0, wM.c)(this, Sr, "f")
          }
          set coatWeightTexture(MM) {
            (0, wM.f)(this, Sr, MM, "f")
          }
          get coatColor() {
            return (0, wM.c)(this, jr, "f")
          }
          set coatColor(MM) {
            (0, wM.f)(this, jr, MM, "f")
          }
          get coatColorTexture() {
            return (0, wM.c)(this, ar, "f")
          }
          set coatColorTexture(MM) {
            (0, wM.f)(this, ar, MM, "f")
          }
          get coatRoughness() {
            return (0, wM.c)(this, Pr, "f")
          }
          set coatRoughness(MM) {
            (0, wM.f)(this, Pr, MM, "f")
          }
          get coatRoughnessTexture() {
            return (0, wM.c)(this, nr, "f")
          }
          set coatRoughnessTexture(MM) {
            (0, wM.f)(this, nr, MM, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, wM.c)(this, Qr, "f")
          }
          set coatRoughnessAnisotropy(MM) {
            (0, wM.f)(this, Qr, MM, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, wM.c)(this, hr, "f")
          }
          set coatRoughnessAnisotropyTexture(MM) {
            (0, wM.f)(this, hr, MM, "f")
          }
          get coatIor() {
            return (0, wM.c)(this, Jr, "f")
          }
          set coatIor(MM) {
            (0, wM.f)(this, Jr, MM, "f")
          }
          get coatDarkening() {
            return (0, wM.c)(this, dr, "f")
          }
          set coatDarkening(MM) {
            (0, wM.f)(this, dr, MM, "f")
          }
          get coatDarkeningTexture() {
            return (0, wM.c)(this, yr, "f")
          }
          set coatDarkeningTexture(MM) {
            (0, wM.f)(this, yr, MM, "f")
          }
          get fuzzWeight() {
            return (0, wM.c)(this, lr, "f")
          }
          set fuzzWeight(MM) {
            (0, wM.f)(this, lr, MM, "f")
          }
          get fuzzWeightTexture() {
            return (0, wM.c)(this, Er, "f")
          }
          set fuzzWeightTexture(MM) {
            (0, wM.f)(this, Er, MM, "f")
          }
          get fuzzColor() {
            return (0, wM.c)(this, Ur, "f")
          }
          set fuzzColor(MM) {
            (0, wM.f)(this, Ur, MM, "f")
          }
          get fuzzColorTexture() {
            return (0, wM.c)(this, Gr, "f")
          }
          set fuzzColorTexture(MM) {
            (0, wM.f)(this, Gr, MM, "f")
          }
          get fuzzRoughness() {
            return (0, wM.c)(this, Cr, "f")
          }
          set fuzzRoughness(MM) {
            (0, wM.f)(this, Cr, MM, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, wM.c)(this, wr, "f")
          }
          set fuzzRoughnessTexture(MM) {
            (0, wM.f)(this, wr, MM, "f")
          }
          get geometryThinWalled() {
            return (0, wM.c)(this, tr, "f")
          }
          set geometryThinWalled(MM) {
            (0, wM.f)(this, tr, MM, "f")
          }
          get geometryNormalTexture() {
            return (0, wM.c)(this, gr, "f")
          }
          set geometryNormalTexture(MM) {
            (0, wM.f)(this, gr, MM, "f")
          }
          get geometryTangent() {
            return (0, wM.c)(this, ur, "f")
          }
          set geometryTangent(MM) {
            (0, wM.f)(this, ur, MM, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(MM) {
            this.geometryTangent = new fM.o(Math.cos(MM), Math.sin(MM))
          }
          get geometryTangentTexture() {
            return (0, wM.c)(this, Rr, "f")
          }
          set geometryTangentTexture(MM) {
            (0, wM.f)(this, Rr, MM, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, wM.c)(this, pr, "f")
          }
          set geometryCoatNormalTexture(MM) {
            (0, wM.f)(this, pr, MM, "f")
          }
          get geometryCoatTangent() {
            return (0, wM.c)(this, Wr, "f")
          }
          set geometryCoatTangent(MM) {
            (0, wM.f)(this, Wr, MM, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(MM) {
            this.geometryCoatTangent = new fM.o(Math.cos(MM), Math.sin(MM))
          }
          get geometryCoatTangentTexture() {
            return (0, wM.c)(this, sr, "f")
          }
          set geometryCoatTangentTexture(MM) {
            (0, wM.f)(this, sr, MM, "f")
          }
          get geometryOpacity() {
            return (0, wM.c)(this, Dr, "f")
          }
          set geometryOpacity(MM) {
            (0, wM.f)(this, Dr, MM, "f")
          }
          get geometryOpacityTexture() {
            return (0, wM.c)(this, kr, "f")
          }
          set geometryOpacityTexture(MM) {
            (0, wM.f)(this, kr, MM, "f")
          }
          get geometryThickness() {
            return (0, wM.c)(this, Zr, "f")
          }
          set geometryThickness(MM) {
            (0, wM.f)(this, Zr, MM, "f")
          }
          get geometryThicknessTexture() {
            return (0, wM.c)(this, or, "f")
          }
          set geometryThicknessTexture(MM) {
            (0, wM.f)(this, or, MM, "f")
          }
          get emissionLuminance() {
            return (0, wM.c)(this, fr, "f")
          }
          set emissionLuminance(MM) {
            (0, wM.f)(this, fr, MM, "f")
          }
          get emissionColor() {
            return (0, wM.c)(this, Yr, "f")
          }
          set emissionColor(MM) {
            (0, wM.f)(this, Yr, MM, "f")
          }
          get emissionColorTexture() {
            return (0, wM.c)(this, Ar, "f")
          }
          set emissionColorTexture(MM) {
            (0, wM.f)(this, Ar, MM, "f")
          }
          get thinFilmWeight() {
            return (0, wM.c)(this, vr, "f")
          }
          set thinFilmWeight(MM) {
            (0, wM.f)(this, vr, MM, "f")
          }
          get thinFilmWeightTexture() {
            return (0, wM.c)(this, Ir, "f")
          }
          set thinFilmWeightTexture(MM) {
            (0, wM.f)(this, Ir, MM, "f")
          }
          get thinFilmThickness() {
            return (0, wM.c)(this, Kr, "f")
          }
          set thinFilmThickness(MM) {
            (0, wM.f)(this, Kr, MM, "f")
          }
          get thinFilmThicknessMin() {
            return (0, wM.c)(this, Vr, "f")
          }
          set thinFilmThicknessMin(MM) {
            (0, wM.f)(this, Vr, MM, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, wM.c)(this, cr, "f")
          }
          set thinFilmThicknessTexture(MM) {
            (0, wM.f)(this, cr, MM, "f")
          }
          get thinFilmIor() {
            return (0, wM.c)(this, Mi, "f")
          }
          set thinFilmIor(MM) {
            (0, wM.f)(this, Mi, MM, "f")
          }
          get ambientOcclusionTexture() {
            return (0, wM.c)(this, ri, "f")
          }
          set ambientOcclusionTexture(MM) {
            (0, wM.f)(this, ri, MM, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(MM) {
            this._sssQuality !== MM && (this._sssQuality = MM, this.FrM(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(MM) {
            this._sssIrradianceTexture !== MM && (this._sssIrradianceTexture = MM, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(MM) {
            this._sssDepthTexture !== MM && (this._sssDepthTexture = MM, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, wM.c)(this, ii, "f")
          }
          set directIntensity(MM) {
            (0, wM.f)(this, ii, MM, "f")
          }
          get environmentIntensity() {
            return (0, wM.c)(this, Oi, "f")
          }
          set environmentIntensity(MM) {
            (0, wM.f)(this, Oi, MM, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, wM.c)(this, Si, "f")
          }
          set useSpecularWeightFromTextureAlpha(MM) {
            (0, wM.f)(this, Si, MM, "f")
          }
          get forceAlphaTest() {
            return (0, wM.c)(this, ji, "f")
          }
          set forceAlphaTest(MM) {
            (0, wM.f)(this, ji, MM, "f")
          }
          get alphaCutOff() {
            return (0, wM.c)(this, ai, "f")
          }
          set alphaCutOff(MM) {
            (0, wM.f)(this, ai, MM, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, wM.c)(this, Pi, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(MM) {
            (0, wM.f)(this, Pi, MM, "f")
          }
          get useAmbientInGrayScale() {
            return (0, wM.c)(this, ni, "f")
          }
          set useAmbientInGrayScale(MM) {
            (0, wM.f)(this, ni, MM, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(BM.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === jM.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(MM) {
            MM !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = MM ? jM.c.LIGHTFALLOFF_PHYSICAL : jM.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === jM.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(MM) {
            MM !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = MM ? jM.c.LIGHTFALLOFF_GLTF : jM.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, wM.c)(this, Qi, "f")
          }
          set useObjectSpaceNormalMap(MM) {
            (0, wM.f)(this, Qi, MM, "f")
          }
          get useParallax() {
            return (0, wM.c)(this, zi, "f")
          }
          set useParallax(MM) {
            (0, wM.f)(this, zi, MM, "f")
          }
          get useParallaxOcclusion() {
            return (0, wM.c)(this, Li, "f")
          }
          set useParallaxOcclusion(MM) {
            (0, wM.f)(this, Li, MM, "f")
          }
          get parallaxScaleBias() {
            return (0, wM.c)(this, mi, "f")
          }
          set parallaxScaleBias(MM) {
            (0, wM.f)(this, mi, MM, "f")
          }
          get disableLighting() {
            return (0, wM.c)(this, Hi, "f")
          }
          set disableLighting(MM) {
            (0, wM.f)(this, Hi, MM, "f")
          }
          get forceIrradianceInFragment() {
            return (0, wM.c)(this, Ji, "f")
          }
          set forceIrradianceInFragment(MM) {
            (0, wM.f)(this, Ji, MM, "f")
          }
          get maxSimultaneousLights() {
            return (0, wM.c)(this, di, "f")
          }
          set maxSimultaneousLights(MM) {
            (0, wM.f)(this, di, MM, "f")
          }
          get invertNormalMapX() {
            return (0, wM.c)(this, yi, "f")
          }
          set invertNormalMapX(MM) {
            (0, wM.f)(this, yi, MM, "f")
          }
          get invertNormalMapY() {
            return (0, wM.c)(this, li, "f")
          }
          set invertNormalMapY(MM) {
            (0, wM.f)(this, li, MM, "f")
          }
          get twoSidedLighting() {
            return (0, wM.c)(this, Ei, "f")
          }
          set twoSidedLighting(MM) {
            (0, wM.f)(this, Ei, MM, "f")
          }
          get useAlphaFresnel() {
            return (0, wM.c)(this, Ui, "f")
          }
          set useAlphaFresnel(MM) {
            (0, wM.f)(this, Ui, MM, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, wM.c)(this, Gi, "f")
          }
          set useLinearAlphaFresnel(MM) {
            (0, wM.f)(this, Gi, MM, "f")
          }
          get environmentBRDFTexture() {
            return (0, wM.c)(this, Ci, "f")
          }
          set environmentBRDFTexture(MM) {
            (0, wM.f)(this, Ci, MM, "f")
          }
          get forceNormalForward() {
            return (0, wM.c)(this, ei, "f")
          }
          set forceNormalForward(MM) {
            (0, wM.f)(this, ei, MM, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, wM.c)(this, bi, "f")
          }
          set enableSpecularAntiAliasing(MM) {
            (0, wM.f)(this, bi, MM, "f")
          }
          get useHorizonOcclusion() {
            return (0, wM.c)(this, wi, "f")
          }
          set useHorizonOcclusion(MM) {
            (0, wM.f)(this, wi, MM, "f")
          }
          get useRadianceOcclusion() {
            return (0, wM.c)(this, ti, "f")
          }
          set useRadianceOcclusion(MM) {
            (0, wM.f)(this, ti, MM, "f")
          }
          get unlit() {
            return (0, wM.c)(this, gi, "f")
          }
          set unlit(MM) {
            (0, wM.f)(this, gi, MM, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, wM.c)(this, ui, "f")
          }
          set applyDecalMapAfterDetailMap(MM) {
            (0, wM.f)(this, ui, MM, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(MM) {
            this._backgroundRefractionTexture = MM, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(MM) {
            this._refractionHighQualityBlur !== MM && (this._refractionHighQualityBlur = MM, this.FrM(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(MM) {
            this._realTimeFiltering = MM, this.FrM(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(MM) {
            this._realTimeFilteringQuality = MM, this.FrM(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(MM) {
            this._fuzzSampleNumber = MM, this.FrM(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, wM.c)(this, Ri, "f")
          }
          set debugMode(MM) {
            (0, wM.f)(this, Ri, MM, "f")
          }
          constructor(iM, tM) {
            super(iM, tM, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || MM.ForceGLSL), rM.set(this, ((0, wM.m)(this, DS), (0, wM.m)(this, kS, void 0))), this._baseWeight = ((0, wM.m)(this, ZS), new Br("base_weight", 1, "vBaseWeight", 1)), OM.set(this, (0, wM.m)(this, oS, void 0)), this._baseWeightTexture = ((0, wM.m)(this, fS), new Xr("base_weight", "baseWeight", "BASE_WEIGHT")), SM.set(this, (0, wM.m)(this, YS, void 0)), this._baseColor = ((0, wM.m)(this, NS), new Br("base_color", BM.d.White(), "vBaseColor", 4)), aM.set(this, (0, wM.m)(this, AS, void 0)), this._baseColorTexture = ((0, wM.m)(this, xS), new Xr("base_color", "baseColor", "BASE_COLOR")), PM.set(this, (0, wM.m)(this, vS, void 0)), this._baseDiffuseRoughness = ((0, wM.m)(this, FS), new Br("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), nM.set(this, (0, wM.m)(this, BS, void 0)), this._baseDiffuseRoughnessTexture = ((0, wM.m)(this, XS), new Xr("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), QM.set(this, (0, wM.m)(this, IS, void 0)), this._baseMetalness = ((0, wM.m)(this, KS), new Br("base_metalness", 0, "vReflectanceInfo", 4, 0)), zM.set(this, (0, wM.m)(this, qS, void 0)), this._baseMetalnessTexture = ((0, wM.m)(this, TS), new Xr("base_metalness", "baseMetalness", "BASE_METALNESS")), LM.set(this, (0, wM.m)(this, VS, void 0)), this._specularWeight = ((0, wM.m)(this, cS), new Br("specular_weight", 1, "vReflectanceInfo", 4, 3)), mM.set(this, (0, wM.m)(this, Mj, void 0)), this._specularWeightTexture = ((0, wM.m)(this, rj), new Xr("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), HM.set(this, (0, wM.m)(this, ij, void 0)), this._specularColor = ((0, wM.m)(this, Oj), new Br("specular_color", BM.d.White(), "vSpecularColor", 4)), hM.set(this, (0, wM.m)(this, Sj, void 0)), this._specularColorTexture = ((0, wM.m)(this, jj), new Xr("specular_color", "specularColor", "SPECULAR_COLOR")), JM.set(this, (0, wM.m)(this, aj, void 0)), this._specularRoughness = ((0, wM.m)(this, Pj), new Br("specular_roughness", .3, "vReflectanceInfo", 4, 1)), dM.set(this, (0, wM.m)(this, nj, void 0)), this._specularRoughnessTexture = ((0, wM.m)(this, Qj), new Xr("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), yM.set(this, (0, wM.m)(this, zj, void 0)), this._specularRoughnessAnisotropy = ((0, wM.m)(this, Lj), new Br("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), lM.set(this, (0, wM.m)(this, mj, void 0)), this._specularRoughnessAnisotropyTexture = ((0, wM.m)(this, Hj), new Xr("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), EM.set(this, (0, wM.m)(this, hj, void 0)), this._specularIor = ((0, wM.m)(this, Jj), new Br("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), UM.set(this, (0, wM.m)(this, dj, void 0)), this._transmissionWeight = ((0, wM.m)(this, yj), new Br("transmission_weight", 0, "vTransmissionWeight", 1)), GM.set(this, (0, wM.m)(this, lj, void 0)), this._transmissionWeightTexture = ((0, wM.m)(this, Ej), new Xr("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), CM.set(this, (0, wM.m)(this, Uj, void 0)), this._transmissionColor = ((0, wM.m)(this, Gj), new Br("transmission_color", BM.d.White(), "vTransmissionColor", 3, 0)), eM.set(this, (0, wM.m)(this, Cj, void 0)), this._transmissionColorTexture = ((0, wM.m)(this, ej), new Xr("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), bM.set(this, (0, wM.m)(this, bj, void 0)), this._transmissionDepth = ((0, wM.m)(this, wj), new Br("transmission_depth", 0, "vTransmissionDepth", 1, 0)), pM.set(this, (0, wM.m)(this, tj, void 0)), this._transmissionDepthTexture = ((0, wM.m)(this, gj), new Xr("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), WM.set(this, (0, wM.m)(this, uj, void 0)), this._transmissionScatter = ((0, wM.m)(this, Rj), new Br("transmission_scatter", BM.d.Black(), "vTransmissionScatter", 3, 0)), sM.set(this, (0, wM.m)(this, pj, void 0)), this._transmissionScatterTexture = ((0, wM.m)(this, Wj), new Xr("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), DM.set(this, (0, wM.m)(this, sj, void 0)), this._transmissionScatterAnisotropy = ((0, wM.m)(this, Dj), new Br("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), oM.set(this, (0, wM.m)(this, kj, void 0)), this._transmissionDispersionScale = ((0, wM.m)(this, Zj), new Br("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), NM.set(this, (0, wM.m)(this, oj, void 0)), this._transmissionDispersionScaleTexture = ((0, wM.m)(this, fj), new Xr("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), AM.set(this, (0, wM.m)(this, Yj, void 0)), this._transmissionDispersionAbbeNumber = ((0, wM.m)(this, Nj), new Br("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), xM.set(this, (0, wM.m)(this, Aj, void 0)), this._subsurfaceWeight = ((0, wM.m)(this, xj), new Br("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), vM.set(this, (0, wM.m)(this, vj, void 0)), this._subsurfaceWeightTexture = ((0, wM.m)(this, Fj), new Xr("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), XM.set(this, (0, wM.m)(this, Bj, void 0)), this._subsurfaceColor = ((0, wM.m)(this, Xj), new Br("subsurface_color", new BM.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), KM.set(this, (0, wM.m)(this, Ij, void 0)), this._subsurfaceColorTexture = ((0, wM.m)(this, Kj), new Xr("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), cM.set(this, (0, wM.m)(this, qj, void 0)), this._subsurfaceRadius = ((0, wM.m)(this, Tj), new Br("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Mr.set(this, (0, wM.m)(this, Vj, void 0)), this._subsurfaceRadiusScale = ((0, wM.m)(this, cj), new Br("subsurface_radius_scale", new BM.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), rr.set(this, (0, wM.m)(this, Ma, void 0)), this._subsurfaceRadiusScaleTexture = ((0, wM.m)(this, ra), new Xr("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), ir.set(this, (0, wM.m)(this, ia, void 0)), this._subsurfaceScatterAnisotropy = ((0, wM.m)(this, Oa), new Br("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Or.set(this, (0, wM.m)(this, Sa, void 0)), this._coatWeight = ((0, wM.m)(this, ja), new Br("coat_weight", 0, "vCoatWeight", 1, 0)), Sr.set(this, (0, wM.m)(this, aa, void 0)), this._coatWeightTexture = ((0, wM.m)(this, Pa), new Xr("coat_weight", "coatWeight", "COAT_WEIGHT")), jr.set(this, (0, wM.m)(this, na, void 0)), this._coatColor = ((0, wM.m)(this, Qa), new Br("coat_color", BM.d.White(), "vCoatColor", 3, 0)), ar.set(this, (0, wM.m)(this, za, void 0)), this._coatColorTexture = ((0, wM.m)(this, La), new Xr("coat_color", "coatColor", "COAT_COLOR")), Pr.set(this, (0, wM.m)(this, ma, void 0)), this._coatRoughness = ((0, wM.m)(this, Ha), new Br("coat_roughness", 0, "vCoatRoughness", 1, 0)), nr.set(this, (0, wM.m)(this, ha, void 0)), this._coatRoughnessTexture = ((0, wM.m)(this, Ja), new Xr("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Qr.set(this, (0, wM.m)(this, da, void 0)), this._coatRoughnessAnisotropy = ((0, wM.m)(this, ya), new Br("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), hr.set(this, (0, wM.m)(this, la, void 0)), this._coatRoughnessAnisotropyTexture = ((0, wM.m)(this, Ea), new Xr("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Jr.set(this, (0, wM.m)(this, Ua, void 0)), this._coatIor = ((0, wM.m)(this, Ga), new Br("coat_ior", 1.5, "vCoatIor", 1, 0)), dr.set(this, (0, wM.m)(this, Ca, void 0)), this._coatDarkening = ((0, wM.m)(this, ea), new Br("coat_darkening", 1, "vCoatDarkening", 1, 0)), yr.set(this, (0, wM.m)(this, ba, void 0)), this._coatDarkeningTexture = ((0, wM.m)(this, wa), new Xr("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, lr.set(this, (0, wM.m)(this, ta, void 0)), this._fuzzWeight = ((0, wM.m)(this, ga), new Br("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Er.set(this, (0, wM.m)(this, ua, void 0)), this._fuzzWeightTexture = ((0, wM.m)(this, Ra), new Xr("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Ur.set(this, (0, wM.m)(this, pa, void 0)), this._fuzzColor = ((0, wM.m)(this, Wa), new Br("fuzz_color", BM.d.White(), "vFuzzColor", 3, 0)), Gr.set(this, (0, wM.m)(this, sa, void 0)), this._fuzzColorTexture = ((0, wM.m)(this, Da), new Xr("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Cr.set(this, (0, wM.m)(this, ka, void 0)), this._fuzzRoughness = ((0, wM.m)(this, Za), new Br("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), wr.set(this, (0, wM.m)(this, oa, void 0)), this._fuzzRoughnessTexture = ((0, wM.m)(this, fa), new Xr("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), tr.set(this, (0, wM.m)(this, Ya, void 0)), this._geometryThinWalled = ((0, wM.m)(this, Na), new Br("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), gr.set(this, (0, wM.m)(this, Aa, void 0)), this._geometryNormalTexture = ((0, wM.m)(this, xa), new Xr("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ur.set(this, (0, wM.m)(this, va, void 0)), this._geometryTangent = ((0, wM.m)(this, Fa), new Br("geometry_tangent", new fM.o(1, 0), "vSpecularAnisotropy", 3, 0)), Rr.set(this, (0, wM.m)(this, Ba, void 0)), this._geometryTangentTexture = ((0, wM.m)(this, Xa), new Xr("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), pr.set(this, (0, wM.m)(this, Ia, void 0)), this._geometryCoatNormalTexture = ((0, wM.m)(this, Ka), new Xr("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Wr.set(this, (0, wM.m)(this, qa, void 0)), this._geometryCoatTangent = ((0, wM.m)(this, Ta), new Br("geometry_coat_tangent", new fM.o(1, 0), "vGeometryCoatTangent", 2, 0)), sr.set(this, (0, wM.m)(this, Va, void 0)), this._geometryCoatTangentTexture = ((0, wM.m)(this, ca), new Xr("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Dr.set(this, (0, wM.m)(this, MP, void 0)), this._geometryOpacity = ((0, wM.m)(this, rP), new Br("geometry_opacity", 1, "vBaseColor", 4, 3)), kr.set(this, (0, wM.m)(this, iP, void 0)), this._geometryOpacityTexture = ((0, wM.m)(this, OP), new Xr("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Zr.set(this, (0, wM.m)(this, SP, void 0)), this._geometryThickness = ((0, wM.m)(this, jP), new Br("geometry_thickness", 0, "vGeometryThickness", 1, 0)), or.set(this, (0, wM.m)(this, aP, void 0)), this._geometryThicknessTexture = ((0, wM.m)(this, PP), new Xr("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), fr.set(this, (0, wM.m)(this, nP, void 0)), this._emissionLuminance = ((0, wM.m)(this, QP), new Br("emission_luminance", 1, "vLightingIntensity", 4, 1)), Yr.set(this, (0, wM.m)(this, zP, void 0)), this._emissionColor = ((0, wM.m)(this, LP), new Br("emission_color", BM.d.Black(), "vEmissionColor", 3)), Ar.set(this, (0, wM.m)(this, mP, void 0)), this._emissionColorTexture = ((0, wM.m)(this, HP), new Xr("emission_color", "emissionColor", "EMISSION_COLOR")), vr.set(this, (0, wM.m)(this, hP, void 0)), this._thinFilmWeight = ((0, wM.m)(this, JP), new Br("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Ir.set(this, (0, wM.m)(this, dP, void 0)), this._thinFilmWeightTexture = ((0, wM.m)(this, yP), new Xr("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Kr.set(this, (0, wM.m)(this, lP, void 0)), this._thinFilmThickness = ((0, wM.m)(this, EP), new Br("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Vr.set(this, (0, wM.m)(this, UP, void 0)), this._thinFilmThicknessMin = ((0, wM.m)(this, GP), new Br("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), cr.set(this, (0, wM.m)(this, CP, void 0)), this._thinFilmThicknessTexture = ((0, wM.m)(this, eP), new Xr("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Mi.set(this, (0, wM.m)(this, bP, void 0)), this._thinFilmIor = ((0, wM.m)(this, wP), new Br("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), ri.set(this, (0, wM.m)(this, tP, void 0)), this._ambientOcclusionTexture = ((0, wM.m)(this, gP), new Xr("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = MM.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ii.set(this, (0, wM.m)(this, uP, 1)), Oi.set(this, ((0, wM.m)(this, RP), (0, wM.m)(this, pP, 1))), Si.set(this, ((0, wM.m)(this, WP), (0, wM.m)(this, sP, !1))), ji.set(this, ((0, wM.m)(this, DP), (0, wM.m)(this, kP, !1))), ai.set(this, ((0, wM.m)(this, ZP), (0, wM.m)(this, oP, .4))), Pi.set(this, ((0, wM.m)(this, fP), (0, wM.m)(this, YP, !1))), ni.set(this, ((0, wM.m)(this, NP), (0, wM.m)(this, AP, !1))), Qi.set(this, ((0, wM.m)(this, xP), (0, wM.m)(this, vP, !1))), zi.set(this, ((0, wM.m)(this, FP), (0, wM.m)(this, BP, !1))), Li.set(this, ((0, wM.m)(this, XP), (0, wM.m)(this, IP, !1))), mi.set(this, ((0, wM.m)(this, KP), (0, wM.m)(this, qP, .05))), Hi.set(this, ((0, wM.m)(this, TP), (0, wM.m)(this, VP, !1))), Ji.set(this, ((0, wM.m)(this, cP), (0, wM.m)(this, Mn, !1))), di.set(this, ((0, wM.m)(this, rn), (0, wM.m)(this, On, 4))), yi.set(this, ((0, wM.m)(this, Sn), (0, wM.m)(this, jn, !1))), li.set(this, ((0, wM.m)(this, an), (0, wM.m)(this, Pn, !1))), Ei.set(this, ((0, wM.m)(this, nn), (0, wM.m)(this, Qn, !1))), Ui.set(this, ((0, wM.m)(this, zn), (0, wM.m)(this, Ln, !1))), Gi.set(this, ((0, wM.m)(this, mn), (0, wM.m)(this, Hn, !1))), Ci.set(this, ((0, wM.m)(this, hn), (0, wM.m)(this, Jn, null))), ei.set(this, ((0, wM.m)(this, dn), (0, wM.m)(this, yn, !1))), bi.set(this, ((0, wM.m)(this, En), (0, wM.m)(this, Un, !1))), wi.set(this, ((0, wM.m)(this, Gn), (0, wM.m)(this, Cn, !0))), ti.set(this, ((0, wM.m)(this, en), (0, wM.m)(this, bn, !0))), gi.set(this, ((0, wM.m)(this, wn), (0, wM.m)(this, tn, !1))), ui.set(this, ((0, wM.m)(this, gn), (0, wM.m)(this, un, !1))), this._lightingInfos = ((0, wM.m)(this, Rn), new fM.u(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = jM.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new uM.e(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Ri.set(this, (0, wM.m)(this, pn, 0)), this.debugLimit = ((0, wM.m)(this, Wn), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = jM.c.MATERIAL_OPAQUE, this.Hk() && !this.Hk()?.ph().isWebGPU && this.Hk().ph().PJ < 2 && gM.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), MM._noiseTextures[this.Hk().uniqueId] || (MM._noiseTextures[this.Hk().uniqueId] = new RM.h(br.e.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Hk(), !1, !0, 1), this.Hk().Rk.addOnce((() => {
              MM._noiseTextures[this.Hk().uniqueId]?.dispose(), delete MM._noiseTextures[this.Hk().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), qM.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), qM.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = ZM(this.Hk()), this._environmentFuzzBRDFTexture = kM(this.Hk()), this.prePassConfiguration = new FM.e, this._propertyList = {};
            for (const MM of Object.getOwnPropertyNames(this)) {
              const rM = this[MM];
              rM instanceof Br && (this._propertyList[MM] = rM)
            }
            Object.keys(this._propertyList).forEach((MM => {
              const rM = this._propertyList[MM];
              let iM = this._uniformsList[rM.targetUniformName];
              iM ? iM.numComponents !== rM.targetUniformComponentNum ? gM.e.Error(`Uniform ${rM.targetUniformName} already exists of size ${iM.numComponents}, but trying to set it to ${rM.targetUniformComponentNum}.`) : iM.requiredDefine !== rM.requiredDefine && (iM.requiredDefine = void 0) : (iM = new Fr(rM.targetUniformName, rM.targetUniformComponentNum), iM.requiredDefine = rM.requiredDefine, this._uniformsList[rM.targetUniformName] = iM), "" === iM.firstLinkedKey && (iM.firstLinkedKey = rM.name), iM.linkedProperties[rM.name] = rM
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const MM of Object.getOwnPropertyNames(this)) {
              const rM = this[MM];
              rM instanceof Xr && (this._samplersList[MM] = rM)
            }
            for (const MM in this._samplersList) {
              const rM = this._samplersList[MM].textureDefine;
              this._samplerDefines[rM] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[rM + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[rM + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(qM.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(qM.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(MM) {
            this._transparencyMode !== MM && (this._transparencyMode = MM, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== jM.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(MM) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(MM)
          }
          clone(rM) {
            let iM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const SM = er.b.Clone((() => new MM(rM, this.Hk())), this, {
              cloneTexturesOnlyOnce: iM
            });
            return SM.id = rM, SM.name = rM, this.stencil.copyTo(SM.stencil), this._clonePlugins(SM, OM), SM
          }
          serialize() {
            const MM = super.serialize();
            return MM.customType = "BABYLON.OpenPBRMaterial", MM
          }
          static Parse(rM, iM, OM) {
            const SM = er.b.Parse((() => new MM(rM.name, iM)), rM, iM, OM);
            return rM.stencil && SM.stencil.parse(rM.stencil, iM, OM), jM.c._ParsePlugins(rM, SM, iM, OM), SM
          }
          forceCompilation(MM, rM, iM) {
            const OM = {
              clipPlane: !1,
              useInstances: !1,
              ...iM
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const iM = new qr({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                SM = this._prepareEffect(MM, MM, iM, void 0, void 0, OM.useInstances, OM.clipPlane);
              this._onEffectCreatedObservable && (xr.effect = SM, xr.subMesh = null, this._onEffectCreatedObservable.notifyObservers(xr)), SM.isReady() ? rM && rM(this) : SM.onCompileObservable.add((() => {
                rM && rM(this)
              }))
            })()
          }
          isReadyForSubMesh(rM, iM, OM) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const SM = iM._drawWrapper;
            if (SM.effect && this.isFrozen && SM._wasPreviouslyReady && SM._wasPreviouslyUsingInstances === OM) return !0;
            iM.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), iM.materialDefines = new qr({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const jM = iM.materialDefines;
            if (this._isReadyForSubMesh(iM)) return !0;
            const aM = this.Hk(),
              PM = aM.ph();
            if (jM._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, aM.texturesEnabled)) {
              for (const MM in this._samplersList) {
                const rM = this._samplersList[MM];
                if (rM.value && !rM.value.isReadyOrNotBlocking()) return !1
              }
              const rM = this._getRadianceTexture();
              if (rM && qM.e.ReflectionTextureEnabled) {
                if (!rM.isReadyOrNotBlocking()) return !1;
                if (rM.irradianceTexture) {
                  if (!rM.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!rM.sphericalPolynomial && rM.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && qM.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && qM.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && qM.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (MM._noiseTextures[aM.uniqueId] && !MM._noiseTextures[aM.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = jM, this._eventInfo.subMesh = iM, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (jM._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (jM.AREALIGHTUSED)
              for (let MM = 0; MM < rM.lightSources.length; MM++)
                if (!rM.lightSources[MM]._isReady()) return !1;
            if (PM.getCaps().standardDerivatives || rM.isVerticesDataPresent(YM.j.NormalKind) || (rM.createNormals(!0), gM.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + rM.name)), !(0, VM.b)(aM, rM, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const nM = iM.effect,
              QM = jM._areLightsDisposed,
              zM = this._prepareEffect(rM, iM.getRenderingMesh(), jM, this.onCompiled, this.onError, OM, null);
            let LM = !1;
            if (zM)
              if (this._onEffectCreatedObservable && (xr.effect = zM, xr.subMesh = iM, this._onEffectCreatedObservable.notifyObservers(xr)), this.allowShaderHotSwapping && nM && !zM.isReady()) {
                if (jM.markAsUnprocessed(), LM = this.isFrozen, QM) return jM._areLightsDisposed = !0, !1
              } else aM.resetCachedMaterial(), iM.setEffect(zM, jM, this._materialContext);
            return !(!iM.effect || !iM.effect.isReady()) && (jM._renderId = aM.getRenderId(), SM._wasPreviouslyReady = !LM, SM._wasPreviouslyUsingInstances = !!OM, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const MM = this._uniformBuffer;
            MM.addUniform("vTangentSpaceParams", 2), MM.addUniform("vLightingIntensity", 4), MM.addUniform("pointSize", 1), MM.addUniform("vDebugMode", 2), MM.addUniform("renderTargetSize", 2), MM.addUniform("cameraInfo", 4), MM.addUniform("vTextureRepetitionHexTilingParams", 4), MM.addUniform("backgroundRefractionMatrix", 16), MM.addUniform("vBackgroundRefractionInfos", 3), (0, VM.fb)(MM, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((rM => {
              MM.addUniform(rM.name, rM.numComponents)
            })), Object.values(this._samplersList).forEach((rM => {
              MM.addUniform(rM.samplerInfoName, 2), MM.addUniform(rM.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(MM, rM, iM, OM) {
            if (0 === this.geometryThickness) MM.updateFloat("vGeometryThickness", 0);
            else {
              OM.getRenderingMesh().getWorldMatrix().decompose(fM.l.sh[0]);
              const rM = Math.max(Math.abs(fM.l.sh[0].x), Math.abs(fM.l.sh[0].y), Math.abs(fM.l.sh[0].z));
              MM.updateFloat("vGeometryThickness", this.geometryThickness * rM)
            }
          }
          bindForSubMesh(rM, iM, OM) {
            const SM = this.Hk(),
              jM = OM.materialDefines;
            if (!jM) return;
            const aM = OM.effect;
            if (!aM) return;
            this._activeEffect = aM, iM.getMeshUniformBuffer().bindToEffect(aM, "Mesh"), iM.transferToEffect(rM);
            const PM = SM.ph();
            this._uniformBuffer.bindToEffect(aM, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, SM, iM, rM, this.isFrozen), Hr.c.Bind(PM.currentRenderPassId, this._activeEffect, iM, rM, this);
            const nM = SM.activeCamera;
            nM ? this._uniformBuffer.updateFloat4("cameraInfo", nM.minZ, nM.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const QM = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", QM[0], QM[1], QM[2], QM[3]), this._eventInfo.subMesh = OM, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), jM.OBJECTSPACE_NORMALMAP && (rM.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const zM = this._mustRebind(SM, aM, OM, iM.visibility),
              LM = PM._features.needToAlwaysBindUniformBuffers;
            (0, VM.d)(iM, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Lr.d)(this._activeEffect, this._vertexPullingMetadata);
            const mM = this._uniformBuffer;
            if (zM) {
              this.bindViewProjection(aM);
              const rM = this._getRadianceTexture();
              if (!mM.useUbo || !this.isFrozen || !mM.isSync || OM._drawWrapper._forceRebindOnNextCall) {
                if (SM.texturesEnabled) {
                  for (const MM in this._samplersList) {
                    const rM = this._samplersList[MM];
                    rM.value && (mM.updateFloat2(rM.samplerInfoName, rM.value.coordinatesIndex, rM.value.level), (0, VM.x)(rM.value, mM, rM.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (SM._mirroredCameraPosition ? mM.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : mM.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, VM.j)(SM, jM, mM, BM.d.White(), rM, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && mM.updateFloat("pointSize", this.pointSize);
                const MM = this._uniformsArray;
                for (let rM = 0, iM = MM.length; rM < iM; rM++) {
                  const iM = MM[rM];
                  (void 0 === iM.requiredDefine || jM[iM.requiredDefine]) && (4 === iM.numComponents ? (iM.populateVectorFromLinkedProperties(fM.l.Vector4[0]), mM.updateVector4(iM.name, fM.l.Vector4[0])) : 3 === iM.numComponents ? (iM.populateVectorFromLinkedProperties(fM.l.sh[0]), mM.updateVector3(iM.name, fM.l.sh[0])) : 2 === iM.numComponents ? (iM.populateVectorFromLinkedProperties(fM.l.Vector2[0]), mM.updateFloat2(iM.name, fM.l.Vector2[0].x, fM.l.Vector2[0].y)) : 1 === iM.numComponents && mM.updateFloat(iM.name, iM.linkedProperties[iM.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * SM.environmentIntensity, this._lightingInfos.w = 1, mM.updateVector4("vLightingIntensity", this._lightingInfos), mM.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (SM.texturesEnabled) {
                for (const MM in this._samplersList) {
                  const rM = this._samplersList[MM];
                  rM.value && mM.setTexture(rM.samplerName, rM.value)
                }
                if ((0, VM.l)(SM, jM, mM, rM, this.realTimeFiltering), jM.ENVIRONMENTBRDF && mM.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), jM.FUZZENVIRONMENTBRDF && mM.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), jM.REFRACTED_BACKGROUND && (mM.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), mM.p_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), fM.l.sh[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), mM.updateVector3("vBackgroundRefractionInfos", fM.l.sh[1])), (jM.ANISOTROPIC || jM.FUZZ || jM.REFRACTED_BACKGROUND || jM.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && mM.setTexture("blueNoiseSampler", MM._noiseTextures[this.Hk().uniqueId]), jM.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const MM = this.sssIrradianceTexture.getSize().width,
                    rM = this.sssIrradianceTexture.getSize().height;
                  mM.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), mM.setTexture("sceneDepthSampler", this.sssDepthTexture), mM.updateFloat2("renderTargetSize", MM, rM)
                }
              }
              this.Hk().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(iM) && this.Hk().depthPeelingRenderer.bind(aM), this._eventInfo.subMesh = OM, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, zr.e)(this._activeEffect, this, SM), this.bindEyePosition(aM)
            } else LM && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, SM, SM.ph(), OM), !zM && this.isFrozen && !LM || !SM.lightsEnabled || this._disableLighting || (0, VM.o)(SM, iM, this._activeEffect, jM, this._maxSimultaneousLights), !zM && this.isFrozen || (this.bindView(aM), (0, VM.g)(SM, iM, this._activeEffect, !0), jM.NUM_MORPH_INFLUENCERS && (0, VM.r)(iM, this._activeEffect), jM.BAKED_VERTEX_ANIMATION_TEXTURE && iM.bakedVertexAnimationManager?.bind(aM, jM.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, VM.q)(jM, this._activeEffect, SM)), this._afterBind(iM, this._activeEffect, OM), mM.update()
          }
          getAnimatables() {
            const MM = super.getAnimatables();
            for (const rM in this._samplersList) {
              const iM = this._samplersList[rM];
              iM.value && iM.value.animations && iM.value.animations.length > 0 && MM.push(iM.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && MM.push(this._radianceTexture), MM
          }
          getActiveTextures() {
            const MM = super.getActiveTextures();
            for (const rM in this._samplersList) {
              const iM = this._samplersList[rM];
              iM.value && MM.push(iM.value)
            }
            return this._radianceTexture && MM.push(this._radianceTexture), MM
          }
          hasTexture(MM) {
            if (super.hasTexture(MM)) return !0;
            for (const rM in this._samplersList) {
              if (this._samplersList[rM].value === MM) return !0
            }
            return this._radianceTexture === MM
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(MM, rM) {
            if (this._breakShaderLoadedCheck = !0, rM) {
              this._environmentBRDFTexture && this.Hk().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Hk().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const MM in this._samplersList) {
                const rM = this._samplersList[MM];
                rM.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(MM, rM)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Hk().environmentTexture
          }
          _prepareEffect(rM, iM, OM) {
            let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(rM, iM, OM, aM, PM), !OM.isDirty) return null;
            OM.markAsProcessed();
            const nM = this.Hk().ph(),
              QM = new TM.b;
            let zM = 0;
            OM.USESPHERICALINVERTEX && QM.addFallback(zM++, "USESPHERICALINVERTEX"), OM.FOG && QM.addFallback(zM, "FOG"), OM.SPECULARAA && QM.addFallback(zM, "SPECULARAA"), OM.POINTSIZE && QM.addFallback(zM, "POINTSIZE"), OM.LOGARITHMICDEPTH && QM.addFallback(zM, "LOGARITHMICDEPTH"), OM.PARALLAX && QM.addFallback(zM, "PARALLAX"), OM.PARALLAX_RHS && QM.addFallback(zM, "PARALLAX_RHS"), OM.PARALLAXOCCLUSION && QM.addFallback(zM++, "PARALLAXOCCLUSION"), OM.ENVIRONMENTBRDF && QM.addFallback(zM++, "ENVIRONMENTBRDF"), OM.TANGENT && QM.addFallback(zM++, "TANGENT"), zM = (0, VM.y)(OM, QM, this._maxSimultaneousLights, zM), OM.SPECULARTERM && QM.addFallback(zM++, "SPECULARTERM"), OM.USESPHERICALFROMREFLECTIONMAP && QM.addFallback(zM++, "USESPHERICALFROMREFLECTIONMAP"), OM.USEIRRADIANCEMAP && QM.addFallback(zM++, "USEIRRADIANCEMAP"), OM.NORMAL && QM.addFallback(zM++, "NORMAL"), OM.VERTEXCOLOR && QM.addFallback(zM++, "VERTEXCOLOR"), OM.MORPHTARGETS && QM.addFallback(zM++, "MORPHTARGETS"), OM.MULTIVIEW && QM.addFallback(0, "MULTIVIEW");
            const LM = [YM.j.PositionKind];
            OM.NORMAL && LM.push(YM.j.NormalKind), OM.TANGENT && LM.push(YM.j.TangentKind);
            for (let MM = 1; MM <= 6; ++MM) OM["UV" + MM] && LM.push(`uv${1===MM?"":MM}`);
            OM.VERTEXCOLOR && LM.push(YM.j.ColorKind), (0, VM.D)(LM, rM, OM, QM), (0, VM.F)(LM, OM), (0, VM.G)(LM, rM, OM), (0, VM.A)(LM, rM, OM);
            let mM = "openpbr";
            const HM = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const MM in this._uniformsList) HM.push(MM);
            const hM = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            OM.FUZZENVIRONMENTBRDF && hM.push("environmentFuzzBrdfSampler"), OM.REFRACTED_BACKGROUND && hM.push("backgroundRefractionSampler"), (OM.ANISOTROPIC || OM.FUZZ || OM.REFRACTED_BACKGROUND || OM.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && hM.push("blueNoiseSampler"), OM.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (hM.push("sceneIrradianceSampler"), hM.push("sceneDepthSampler"));
            for (const MM in this._samplersList) {
              const rM = this._samplersList[MM];
              hM.push(rM.samplerName), HM.push(rM.samplerInfoName), HM.push(rM.samplerMatrixName)
            }(0, VM.gb)(HM, hM, !0);
            const JM = ["Material", "Scene", "Mesh"],
              dM = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: OM.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = QM, this._eventInfo.fallbackRank = zM, this._eventInfo.defines = OM, this._eventInfo.uniforms = HM, this._eventInfo.attributes = LM, this._eventInfo.samplers = hM, this._eventInfo.uniformBuffersNames = JM, this._eventInfo.customCode = void 0, this._eventInfo.mesh = rM, this._eventInfo.indexParameters = dM, this._callbackPluginEventGeneric(128, this._eventInfo), Hr.c.AddUniformsAndSamplers(HM, hM), FM.e.AddUniforms(HM), FM.e.AddSamplers(hM), (0, zr.b)(HM), this._useVertexPulling) {
              const MM = iM?.geometry;
              MM && (this._vertexPullingMetadata = (0, Lr.g)(MM), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((MM, rM) => {
                HM.push(`vp_${rM}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            IM.b && (IM.b.PrepareUniforms(HM, OM), IM.b.PrepareSamplers(hM, OM)), (0, VM.ib)({
              uniformsNames: HM,
              uniformBuffersNames: JM,
              samplers: hM,
              defines: OM,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const yM = {};
            this.customShaderNameResolve && (mM = this.customShaderNameResolve(mM, HM, JM, hM, OM, LM, yM));
            const lM = OM.toString(),
              EM = nM.createEffect(mM, {
                attributes: LM,
                uniformsNames: HM,
                uniformBuffersNames: JM,
                samplers: hM,
                defines: lM,
                fallbacks: QM,
                onCompiled: SM,
                onError: jM,
                indexParameters: dM,
                processFinalCode: yM.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: OM.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: MM._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, nM);
            return this._eventInfo.customCode = void 0, EM
          }
          _prepareDefines(rM, iM, OM) {
            let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              aM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const PM = iM.hasThinInstances,
              nM = this.Hk(),
              QM = nM.ph();
            (0, VM.S)(nM, rM, OM, !0, this._maxSimultaneousLights, this._disableLighting), OM._needNormals = !0, (0, VM.$)(nM, OM);
            const zM = this.needAlphaBlendingForMesh(rM) && this.Hk().useOrderIndependentTransparency;
            if ((0, VM.eb)(nM, OM, this.canRenderToMRT && !zM), (0, VM.db)(nM, OM, zM), Hr.c.PrepareDefines(QM.currentRenderPassId, rM, OM), OM._areTexturesDirty) {
              OM._needUVs = !1;
              for (let MM = 1; MM <= 6; ++MM) OM["MAINUV" + MM] = !1;
              if (nM.texturesEnabled) {
                for (const iM in this._samplersList) {
                  const MM = this._samplersList[iM];
                  MM.value ? ((0, VM.W)(MM.value, OM, MM.textureDefine), OM[MM.textureDefine + "_GAMMA"] = MM.value.gammaSpace) : OM[MM.textureDefine] = !1
                }
                const MM = this._getRadianceTexture(),
                  rM = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || QM.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, VM.R)(nM, MM, OM, this.realTimeFiltering, this.realTimeFilteringQuality, !rM), this._baseMetalnessTexture && (OM.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), OM.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, OM.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, OM.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, OM.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, OM.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, OM.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, OM.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, OM.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, OM.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, OM.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, OM.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && qM.e.DiffuseTextureEnabled ? (OM.PARALLAX = !0, OM.PARALLAX_RHS = nM.useRightHandedSystem, OM.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : OM.PARALLAX = !1, OM.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (OM.PARALLAX = !1, OM.PARALLAX_RHS = !1, OM.PARALLAXOCCLUSION = !1, OM.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && qM.e.ReflectionTextureEnabled ? (OM.ENVIRONMENTBRDF = !0, OM.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (OM.ENVIRONMENTBRDF = !1, OM.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? OM.FUZZENVIRONMENTBRDF = !0 : OM.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  OM.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && qM.e.RefractionTextureEnabled, OM.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, OM.REFRACTED_LIGHTS = !0;
                  const MM = this._getRadianceTexture();
                  MM ? (OM.REFRACTED_ENVIRONMENT = qM.e.RefractionTextureEnabled, OM.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Hk().useRightHandedSystem ? !MM.invertZ : MM.invertZ, OM.REFRACTED_ENVIRONMENT_LOCAL_CUBE = MM.isCube && MM.boundingBoxSize) : OM.REFRACTED_ENVIRONMENT = !1
                } else OM.REFRACTED_BACKGROUND = !1, OM.REFRACTED_LIGHTS = !1, OM.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? OM.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : OM.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === jM.c.LIGHTFALLOFF_STANDARD ? (OM.USEPHYSICALLIGHTFALLOFF = !1, OM.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === jM.c.LIGHTFALLOFF_GLTF ? (OM.USEPHYSICALLIGHTFALLOFF = !1, OM.USEGLTFLIGHTFALLOFF = !0) : (OM.USEPHYSICALLIGHTFALLOFF = !0, OM.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? OM.TWOSIDEDLIGHTING = !0 : OM.TWOSIDEDLIGHTING = !1, OM.MIRRORED = !!nM._mirroredCameraPosition, OM.SPECULARAA = QM.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(OM._areTexturesDirty || OM._areMiscDirty) && (OM.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, OM.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, OM.ALPHABLEND = this.needAlphaBlendingForMesh(rM)), OM._areTexturesDirty && (OM.TEXTURE_REPETITION_MODE = QM.version > 1 || QM.isWebGPU ? this.textureRepetitionMode : 0), OM._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(OM), OM.FORCENORMALFORWARD = this._forceNormalForward, OM.RADIANCEOCCLUSION = this._useRadianceOcclusion, OM.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && MM._noiseTextures[nM.uniqueId] && qM.e.ReflectionTextureEnabled ? (OM.ANISOTROPIC = !0, rM.isVerticesDataPresent(YM.j.TangentKind) || (OM._needUVs = !0, OM.MAINUV1 = !0), this._useGltfStyleAnisotropy && (OM.USE_GLTF_STYLE_ANISOTROPY = !0), OM.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, OM.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (OM.ANISOTROPIC = !1, OM.USE_GLTF_STYLE_ANISOTROPY = !1, OM.ANISOTROPIC_BASE = !1, OM.ANISOTROPIC_COAT = !1), OM.THIN_FILM = this.thinFilmWeight > 0, OM.IRIDESCENCE = this.thinFilmWeight > 0, OM.DISPERSION = this.transmissionDispersionScale > 0, OM.SCATTERING = this.hasScattering;
            if (OM.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, OM.TRANSMISSION_SLAB = this.transmissionWeight > 0, OM.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, OM.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !OM.PREPASS && (OM.SUBSURFACE_SLAB || OM.TRANSMISSION_SLAB_VOLUME)) {
              let MM = !1;
              if (!this.sssIrradianceTexture && nM.geometryBufferRenderer) {
                const rM = nM.geometryBufferRenderer.getTextureIndex(Nr.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = nM.geometryBufferRenderer.getGBuffer().textures[rM], MM = !0
              }
              if (!this.sssDepthTexture && nM.geometryBufferRenderer) {
                const rM = nM.geometryBufferRenderer.getTextureIndex(Nr.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = nM.geometryBufferRenderer.getGBuffer().textures[rM], MM = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (OM.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, MM && (OM.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            OM.FUZZ = this.fuzzWeight > 0 && qM.e.ReflectionTextureEnabled, OM.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, OM.FUZZ ? (rM.isVerticesDataPresent(YM.j.TangentKind) || (OM._needUVs = !0, OM.MAINUV1 = !0), this._environmentFuzzBRDFTexture = kM(this.Hk()), OM.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, OM.FUZZENVIRONMENTBRDF = !1, OM.FUZZ_IBL_SAMPLES = 0), OM._areMiscDirty && ((0, VM.X)(rM, nM, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(rM), OM, this._applyDecalMapAfterDetailMap, this._useVertexPulling, iM, this._isVertexOutputInvariant), OM.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !rM.isVerticesDataPresent(YM.j.NormalKind), OM.DEBUGMODE = this._debugMode), (0, VM.N)(nM, QM, this, OM, !!SM, aM, PM), this._eventInfo.defines = OM, this._eventInfo.mesh = rM, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, VM.K)(rM, OM, !0, !0, !0, this._transparencyMode !== jM.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, rM = new WeakMap, OM = new WeakMap, SM = new WeakMap, aM = new WeakMap, PM = new WeakMap, nM = new WeakMap, QM = new WeakMap, zM = new WeakMap, LM = new WeakMap, mM = new WeakMap, HM = new WeakMap, hM = new WeakMap, JM = new WeakMap, dM = new WeakMap, yM = new WeakMap, lM = new WeakMap, EM = new WeakMap, UM = new WeakMap, GM = new WeakMap, CM = new WeakMap, eM = new WeakMap, bM = new WeakMap, pM = new WeakMap, WM = new WeakMap, sM = new WeakMap, DM = new WeakMap, oM = new WeakMap, NM = new WeakMap, AM = new WeakMap, xM = new WeakMap, vM = new WeakMap, XM = new WeakMap, KM = new WeakMap, cM = new WeakMap, Mr = new WeakMap, rr = new WeakMap, ir = new WeakMap, Or = new WeakMap, Sr = new WeakMap, jr = new WeakMap, ar = new WeakMap, Pr = new WeakMap, nr = new WeakMap, Qr = new WeakMap, hr = new WeakMap, Jr = new WeakMap, dr = new WeakMap, yr = new WeakMap, lr = new WeakMap, Er = new WeakMap, Ur = new WeakMap, Gr = new WeakMap, Cr = new WeakMap, wr = new WeakMap, tr = new WeakMap, gr = new WeakMap, ur = new WeakMap, Rr = new WeakMap, pr = new WeakMap, Wr = new WeakMap, sr = new WeakMap, Dr = new WeakMap, kr = new WeakMap, Zr = new WeakMap, or = new WeakMap, fr = new WeakMap, Yr = new WeakMap, Ar = new WeakMap, vr = new WeakMap, Ir = new WeakMap, Kr = new WeakMap, Vr = new WeakMap, cr = new WeakMap, Mi = new WeakMap, ri = new WeakMap, ii = new WeakMap, Oi = new WeakMap, Si = new WeakMap, ji = new WeakMap, ai = new WeakMap, Pi = new WeakMap, ni = new WeakMap, Qi = new WeakMap, zi = new WeakMap, Li = new WeakMap, mi = new WeakMap, Hi = new WeakMap, Ji = new WeakMap, di = new WeakMap, yi = new WeakMap, li = new WeakMap, Ei = new WeakMap, Ui = new WeakMap, Gi = new WeakMap, Ci = new WeakMap, ei = new WeakMap, bi = new WeakMap, wi = new WeakMap, ti = new WeakMap, gi = new WeakMap, ui = new WeakMap, Ri = new WeakMap, (() => {
          const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(sS[Symbol.metadata] ?? null) : void 0;
          Wi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], si = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Zi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], oi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Yi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Ni = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Ai = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], xi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Fi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Xi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Ii = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Ki = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], qi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Ti = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], MO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], OO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], SO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], jO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], PO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], QO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], zO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], LO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], HO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], JO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], lO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], EO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], GO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], wO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], tO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], RO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], WO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], sO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], kO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], oO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], YO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], NO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], xO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], vO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], FO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], XO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], qO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], cO = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], MS = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], rS = [(0, tM.d)("_markAllSubMeshesAsTexturesDirty")], iS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], OS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], SS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], jS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], aS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], PS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], nS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], QS = [(0, tM.L)()], zS = [(0, tM.L)()], LS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], mS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], HS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], hS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], JS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsLightsDirty")], dS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], yS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsLightsDirty")], lS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ES = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], US = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], CS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], eS = [(0, tM.g)("_markAllSubMeshesAsTexturesDirty")], bS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], wS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], tS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], gS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], uS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], RS = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], pS = [(0, tM.g)("_markAllSubMeshesAsMiscDirty")], WS = [(0, tM.L)()], (0, wM.i)(MM, null, Wi, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseWeight" in MM,
              get: MM => MM.baseWeight,
              set: (MM, rM) => {
                MM.baseWeight = rM
              }
            },
            metadata: rM
          }, kS, ZS), (0, wM.i)(MM, null, si, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseWeightTexture" in MM,
              get: MM => MM.baseWeightTexture,
              set: (MM, rM) => {
                MM.baseWeightTexture = rM
              }
            },
            metadata: rM
          }, oS, fS), (0, wM.i)(MM, null, Di, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseColor" in MM,
              get: MM => MM.baseColor,
              set: (MM, rM) => {
                MM.baseColor = rM
              }
            },
            metadata: rM
          }, YS, NS), (0, wM.i)(MM, null, ki, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseColorTexture" in MM,
              get: MM => MM.baseColorTexture,
              set: (MM, rM) => {
                MM.baseColorTexture = rM
              }
            },
            metadata: rM
          }, AS, xS), (0, wM.i)(MM, null, Zi, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseDiffuseRoughness" in MM,
              get: MM => MM.baseDiffuseRoughness,
              set: (MM, rM) => {
                MM.baseDiffuseRoughness = rM
              }
            },
            metadata: rM
          }, vS, FS), (0, wM.i)(MM, null, oi, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseDiffuseRoughnessTexture" in MM,
              get: MM => MM.baseDiffuseRoughnessTexture,
              set: (MM, rM) => {
                MM.baseDiffuseRoughnessTexture = rM
              }
            },
            metadata: rM
          }, BS, XS), (0, wM.i)(MM, null, fi, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseMetalness" in MM,
              get: MM => MM.baseMetalness,
              set: (MM, rM) => {
                MM.baseMetalness = rM
              }
            },
            metadata: rM
          }, IS, KS), (0, wM.i)(MM, null, Yi, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "baseMetalnessTexture" in MM,
              get: MM => MM.baseMetalnessTexture,
              set: (MM, rM) => {
                MM.baseMetalnessTexture = rM
              }
            },
            metadata: rM
          }, qS, TS), (0, wM.i)(MM, null, Ni, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularWeight" in MM,
              get: MM => MM.specularWeight,
              set: (MM, rM) => {
                MM.specularWeight = rM
              }
            },
            metadata: rM
          }, VS, cS), (0, wM.i)(MM, null, Ai, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularWeightTexture" in MM,
              get: MM => MM.specularWeightTexture,
              set: (MM, rM) => {
                MM.specularWeightTexture = rM
              }
            },
            metadata: rM
          }, Mj, rj), (0, wM.i)(MM, null, xi, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularColor" in MM,
              get: MM => MM.specularColor,
              set: (MM, rM) => {
                MM.specularColor = rM
              }
            },
            metadata: rM
          }, ij, Oj), (0, wM.i)(MM, null, vi, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularColorTexture" in MM,
              get: MM => MM.specularColorTexture,
              set: (MM, rM) => {
                MM.specularColorTexture = rM
              }
            },
            metadata: rM
          }, Sj, jj), (0, wM.i)(MM, null, Fi, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularRoughness" in MM,
              get: MM => MM.specularRoughness,
              set: (MM, rM) => {
                MM.specularRoughness = rM
              }
            },
            metadata: rM
          }, aj, Pj), (0, wM.i)(MM, null, Bi, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularRoughnessTexture" in MM,
              get: MM => MM.specularRoughnessTexture,
              set: (MM, rM) => {
                MM.specularRoughnessTexture = rM
              }
            },
            metadata: rM
          }, nj, Qj), (0, wM.i)(MM, null, Xi, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularRoughnessAnisotropy" in MM,
              get: MM => MM.specularRoughnessAnisotropy,
              set: (MM, rM) => {
                MM.specularRoughnessAnisotropy = rM
              }
            },
            metadata: rM
          }, zj, Lj), (0, wM.i)(MM, null, Ii, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularRoughnessAnisotropyTexture" in MM,
              get: MM => MM.specularRoughnessAnisotropyTexture,
              set: (MM, rM) => {
                MM.specularRoughnessAnisotropyTexture = rM
              }
            },
            metadata: rM
          }, mj, Hj), (0, wM.i)(MM, null, Ki, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularIor" in MM,
              get: MM => MM.specularIor,
              set: (MM, rM) => {
                MM.specularIor = rM
              }
            },
            metadata: rM
          }, hj, Jj), (0, wM.i)(MM, null, qi, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionWeight" in MM,
              get: MM => MM.transmissionWeight,
              set: (MM, rM) => {
                MM.transmissionWeight = rM
              }
            },
            metadata: rM
          }, dj, yj), (0, wM.i)(MM, null, Ti, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionWeightTexture" in MM,
              get: MM => MM.transmissionWeightTexture,
              set: (MM, rM) => {
                MM.transmissionWeightTexture = rM
              }
            },
            metadata: rM
          }, lj, Ej), (0, wM.i)(MM, null, Vi, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionColor" in MM,
              get: MM => MM.transmissionColor,
              set: (MM, rM) => {
                MM.transmissionColor = rM
              }
            },
            metadata: rM
          }, Uj, Gj), (0, wM.i)(MM, null, ci, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionColorTexture" in MM,
              get: MM => MM.transmissionColorTexture,
              set: (MM, rM) => {
                MM.transmissionColorTexture = rM
              }
            },
            metadata: rM
          }, Cj, ej), (0, wM.i)(MM, null, MO, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionDepth" in MM,
              get: MM => MM.transmissionDepth,
              set: (MM, rM) => {
                MM.transmissionDepth = rM
              }
            },
            metadata: rM
          }, bj, wj), (0, wM.i)(MM, null, rO, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionDepthTexture" in MM,
              get: MM => MM.transmissionDepthTexture,
              set: (MM, rM) => {
                MM.transmissionDepthTexture = rM
              }
            },
            metadata: rM
          }, tj, gj), (0, wM.i)(MM, null, iO, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionScatter" in MM,
              get: MM => MM.transmissionScatter,
              set: (MM, rM) => {
                MM.transmissionScatter = rM
              }
            },
            metadata: rM
          }, uj, Rj), (0, wM.i)(MM, null, OO, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionScatterTexture" in MM,
              get: MM => MM.transmissionScatterTexture,
              set: (MM, rM) => {
                MM.transmissionScatterTexture = rM
              }
            },
            metadata: rM
          }, pj, Wj), (0, wM.i)(MM, null, SO, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionScatterAnisotropy" in MM,
              get: MM => MM.transmissionScatterAnisotropy,
              set: (MM, rM) => {
                MM.transmissionScatterAnisotropy = rM
              }
            },
            metadata: rM
          }, sj, Dj), (0, wM.i)(MM, null, jO, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionDispersionScale" in MM,
              get: MM => MM.transmissionDispersionScale,
              set: (MM, rM) => {
                MM.transmissionDispersionScale = rM
              }
            },
            metadata: rM
          }, kj, Zj), (0, wM.i)(MM, null, aO, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionDispersionScaleTexture" in MM,
              get: MM => MM.transmissionDispersionScaleTexture,
              set: (MM, rM) => {
                MM.transmissionDispersionScaleTexture = rM
              }
            },
            metadata: rM
          }, oj, fj), (0, wM.i)(MM, null, PO, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: MM => "transmissionDispersionAbbeNumber" in MM,
              get: MM => MM.transmissionDispersionAbbeNumber,
              set: (MM, rM) => {
                MM.transmissionDispersionAbbeNumber = rM
              }
            },
            metadata: rM
          }, Yj, Nj), (0, wM.i)(MM, null, nO, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceWeight" in MM,
              get: MM => MM.subsurfaceWeight,
              set: (MM, rM) => {
                MM.subsurfaceWeight = rM
              }
            },
            metadata: rM
          }, Aj, xj), (0, wM.i)(MM, null, QO, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceWeightTexture" in MM,
              get: MM => MM.subsurfaceWeightTexture,
              set: (MM, rM) => {
                MM.subsurfaceWeightTexture = rM
              }
            },
            metadata: rM
          }, vj, Fj), (0, wM.i)(MM, null, zO, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceColor" in MM,
              get: MM => MM.subsurfaceColor,
              set: (MM, rM) => {
                MM.subsurfaceColor = rM
              }
            },
            metadata: rM
          }, Bj, Xj), (0, wM.i)(MM, null, LO, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceColorTexture" in MM,
              get: MM => MM.subsurfaceColorTexture,
              set: (MM, rM) => {
                MM.subsurfaceColorTexture = rM
              }
            },
            metadata: rM
          }, Ij, Kj), (0, wM.i)(MM, null, mO, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceRadius" in MM,
              get: MM => MM.subsurfaceRadius,
              set: (MM, rM) => {
                MM.subsurfaceRadius = rM
              }
            },
            metadata: rM
          }, qj, Tj), (0, wM.i)(MM, null, HO, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceRadiusScale" in MM,
              get: MM => MM.subsurfaceRadiusScale,
              set: (MM, rM) => {
                MM.subsurfaceRadiusScale = rM
              }
            },
            metadata: rM
          }, Vj, cj), (0, wM.i)(MM, null, hO, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceRadiusScaleTexture" in MM,
              get: MM => MM.subsurfaceRadiusScaleTexture,
              set: (MM, rM) => {
                MM.subsurfaceRadiusScaleTexture = rM
              }
            },
            metadata: rM
          }, Ma, ra), (0, wM.i)(MM, null, JO, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: MM => "subsurfaceScatterAnisotropy" in MM,
              get: MM => MM.subsurfaceScatterAnisotropy,
              set: (MM, rM) => {
                MM.subsurfaceScatterAnisotropy = rM
              }
            },
            metadata: rM
          }, ia, Oa), (0, wM.i)(MM, null, dO, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatWeight" in MM,
              get: MM => MM.coatWeight,
              set: (MM, rM) => {
                MM.coatWeight = rM
              }
            },
            metadata: rM
          }, Sa, ja), (0, wM.i)(MM, null, yO, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatWeightTexture" in MM,
              get: MM => MM.coatWeightTexture,
              set: (MM, rM) => {
                MM.coatWeightTexture = rM
              }
            },
            metadata: rM
          }, aa, Pa), (0, wM.i)(MM, null, lO, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatColor" in MM,
              get: MM => MM.coatColor,
              set: (MM, rM) => {
                MM.coatColor = rM
              }
            },
            metadata: rM
          }, na, Qa), (0, wM.i)(MM, null, EO, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatColorTexture" in MM,
              get: MM => MM.coatColorTexture,
              set: (MM, rM) => {
                MM.coatColorTexture = rM
              }
            },
            metadata: rM
          }, za, La), (0, wM.i)(MM, null, UO, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatRoughness" in MM,
              get: MM => MM.coatRoughness,
              set: (MM, rM) => {
                MM.coatRoughness = rM
              }
            },
            metadata: rM
          }, ma, Ha), (0, wM.i)(MM, null, GO, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatRoughnessTexture" in MM,
              get: MM => MM.coatRoughnessTexture,
              set: (MM, rM) => {
                MM.coatRoughnessTexture = rM
              }
            },
            metadata: rM
          }, ha, Ja), (0, wM.i)(MM, null, CO, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatRoughnessAnisotropy" in MM,
              get: MM => MM.coatRoughnessAnisotropy,
              set: (MM, rM) => {
                MM.coatRoughnessAnisotropy = rM
              }
            },
            metadata: rM
          }, da, ya), (0, wM.i)(MM, null, eO, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatRoughnessAnisotropyTexture" in MM,
              get: MM => MM.coatRoughnessAnisotropyTexture,
              set: (MM, rM) => {
                MM.coatRoughnessAnisotropyTexture = rM
              }
            },
            metadata: rM
          }, la, Ea), (0, wM.i)(MM, null, bO, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatIor" in MM,
              get: MM => MM.coatIor,
              set: (MM, rM) => {
                MM.coatIor = rM
              }
            },
            metadata: rM
          }, Ua, Ga), (0, wM.i)(MM, null, wO, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatDarkening" in MM,
              get: MM => MM.coatDarkening,
              set: (MM, rM) => {
                MM.coatDarkening = rM
              }
            },
            metadata: rM
          }, Ca, ea), (0, wM.i)(MM, null, tO, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "coatDarkeningTexture" in MM,
              get: MM => MM.coatDarkeningTexture,
              set: (MM, rM) => {
                MM.coatDarkeningTexture = rM
              }
            },
            metadata: rM
          }, ba, wa), (0, wM.i)(MM, null, gO, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "fuzzWeight" in MM,
              get: MM => MM.fuzzWeight,
              set: (MM, rM) => {
                MM.fuzzWeight = rM
              }
            },
            metadata: rM
          }, ta, ga), (0, wM.i)(MM, null, uO, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "fuzzWeightTexture" in MM,
              get: MM => MM.fuzzWeightTexture,
              set: (MM, rM) => {
                MM.fuzzWeightTexture = rM
              }
            },
            metadata: rM
          }, ua, Ra), (0, wM.i)(MM, null, RO, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "fuzzColor" in MM,
              get: MM => MM.fuzzColor,
              set: (MM, rM) => {
                MM.fuzzColor = rM
              }
            },
            metadata: rM
          }, pa, Wa), (0, wM.i)(MM, null, pO, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "fuzzColorTexture" in MM,
              get: MM => MM.fuzzColorTexture,
              set: (MM, rM) => {
                MM.fuzzColorTexture = rM
              }
            },
            metadata: rM
          }, sa, Da), (0, wM.i)(MM, null, WO, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: MM => "fuzzRoughness" in MM,
              get: MM => MM.fuzzRoughness,
              set: (MM, rM) => {
                MM.fuzzRoughness = rM
              }
            },
            metadata: rM
          }, ka, Za), (0, wM.i)(MM, null, sO, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "fuzzRoughnessTexture" in MM,
              get: MM => MM.fuzzRoughnessTexture,
              set: (MM, rM) => {
                MM.fuzzRoughnessTexture = rM
              }
            },
            metadata: rM
          }, oa, fa), (0, wM.i)(MM, null, DO, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryThinWalled" in MM,
              get: MM => MM.geometryThinWalled,
              set: (MM, rM) => {
                MM.geometryThinWalled = rM
              }
            },
            metadata: rM
          }, Ya, Na), (0, wM.i)(MM, null, kO, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryNormalTexture" in MM,
              get: MM => MM.geometryNormalTexture,
              set: (MM, rM) => {
                MM.geometryNormalTexture = rM
              }
            },
            metadata: rM
          }, Aa, xa), (0, wM.i)(MM, null, ZO, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryTangent" in MM,
              get: MM => MM.geometryTangent,
              set: (MM, rM) => {
                MM.geometryTangent = rM
              }
            },
            metadata: rM
          }, va, Fa), (0, wM.i)(MM, null, oO, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryTangentTexture" in MM,
              get: MM => MM.geometryTangentTexture,
              set: (MM, rM) => {
                MM.geometryTangentTexture = rM
              }
            },
            metadata: rM
          }, Ba, Xa), (0, wM.i)(MM, null, fO, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryCoatNormalTexture" in MM,
              get: MM => MM.geometryCoatNormalTexture,
              set: (MM, rM) => {
                MM.geometryCoatNormalTexture = rM
              }
            },
            metadata: rM
          }, Ia, Ka), (0, wM.i)(MM, null, YO, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryCoatTangent" in MM,
              get: MM => MM.geometryCoatTangent,
              set: (MM, rM) => {
                MM.geometryCoatTangent = rM
              }
            },
            metadata: rM
          }, qa, Ta), (0, wM.i)(MM, null, NO, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryCoatTangentTexture" in MM,
              get: MM => MM.geometryCoatTangentTexture,
              set: (MM, rM) => {
                MM.geometryCoatTangentTexture = rM
              }
            },
            metadata: rM
          }, Va, ca), (0, wM.i)(MM, null, AO, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryOpacity" in MM,
              get: MM => MM.geometryOpacity,
              set: (MM, rM) => {
                MM.geometryOpacity = rM
              }
            },
            metadata: rM
          }, MP, rP), (0, wM.i)(MM, null, xO, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryOpacityTexture" in MM,
              get: MM => MM.geometryOpacityTexture,
              set: (MM, rM) => {
                MM.geometryOpacityTexture = rM
              }
            },
            metadata: rM
          }, iP, OP), (0, wM.i)(MM, null, vO, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryThickness" in MM,
              get: MM => MM.geometryThickness,
              set: (MM, rM) => {
                MM.geometryThickness = rM
              }
            },
            metadata: rM
          }, SP, jP), (0, wM.i)(MM, null, FO, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "geometryThicknessTexture" in MM,
              get: MM => MM.geometryThicknessTexture,
              set: (MM, rM) => {
                MM.geometryThicknessTexture = rM
              }
            },
            metadata: rM
          }, aP, PP), (0, wM.i)(MM, null, BO, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: MM => "emissionLuminance" in MM,
              get: MM => MM.emissionLuminance,
              set: (MM, rM) => {
                MM.emissionLuminance = rM
              }
            },
            metadata: rM
          }, nP, QP), (0, wM.i)(MM, null, XO, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "emissionColor" in MM,
              get: MM => MM.emissionColor,
              set: (MM, rM) => {
                MM.emissionColor = rM
              }
            },
            metadata: rM
          }, zP, LP), (0, wM.i)(MM, null, IO, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "emissionColorTexture" in MM,
              get: MM => MM.emissionColorTexture,
              set: (MM, rM) => {
                MM.emissionColorTexture = rM
              }
            },
            metadata: rM
          }, mP, HP), (0, wM.i)(MM, null, KO, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: MM => "thinFilmWeight" in MM,
              get: MM => MM.thinFilmWeight,
              set: (MM, rM) => {
                MM.thinFilmWeight = rM
              }
            },
            metadata: rM
          }, hP, JP), (0, wM.i)(MM, null, qO, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "thinFilmWeightTexture" in MM,
              get: MM => MM.thinFilmWeightTexture,
              set: (MM, rM) => {
                MM.thinFilmWeightTexture = rM
              }
            },
            metadata: rM
          }, dP, yP), (0, wM.i)(MM, null, TO, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: MM => "thinFilmThickness" in MM,
              get: MM => MM.thinFilmThickness,
              set: (MM, rM) => {
                MM.thinFilmThickness = rM
              }
            },
            metadata: rM
          }, lP, EP), (0, wM.i)(MM, null, VO, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: MM => "thinFilmThicknessMin" in MM,
              get: MM => MM.thinFilmThicknessMin,
              set: (MM, rM) => {
                MM.thinFilmThicknessMin = rM
              }
            },
            metadata: rM
          }, UP, GP), (0, wM.i)(MM, null, cO, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "thinFilmThicknessTexture" in MM,
              get: MM => MM.thinFilmThicknessTexture,
              set: (MM, rM) => {
                MM.thinFilmThicknessTexture = rM
              }
            },
            metadata: rM
          }, CP, eP), (0, wM.i)(MM, null, MS, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: MM => "thinFilmIor" in MM,
              get: MM => MM.thinFilmIor,
              set: (MM, rM) => {
                MM.thinFilmIor = rM
              }
            },
            metadata: rM
          }, bP, wP), (0, wM.i)(MM, null, rS, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "ambientOcclusionTexture" in MM,
              get: MM => MM.ambientOcclusionTexture,
              set: (MM, rM) => {
                MM.ambientOcclusionTexture = rM
              }
            },
            metadata: rM
          }, tP, gP), (0, wM.i)(MM, null, iS, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: MM => "directIntensity" in MM,
              get: MM => MM.directIntensity,
              set: (MM, rM) => {
                MM.directIntensity = rM
              }
            },
            metadata: rM
          }, uP, RP), (0, wM.i)(MM, null, OS, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: MM => "environmentIntensity" in MM,
              get: MM => MM.environmentIntensity,
              set: (MM, rM) => {
                MM.environmentIntensity = rM
              }
            },
            metadata: rM
          }, pP, WP), (0, wM.i)(MM, null, SS, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "useSpecularWeightFromTextureAlpha" in MM,
              get: MM => MM.useSpecularWeightFromTextureAlpha,
              set: (MM, rM) => {
                MM.useSpecularWeightFromTextureAlpha = rM
              }
            },
            metadata: rM
          }, sP, DP), (0, wM.i)(MM, null, jS, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: MM => "forceAlphaTest" in MM,
              get: MM => MM.forceAlphaTest,
              set: (MM, rM) => {
                MM.forceAlphaTest = rM
              }
            },
            metadata: rM
          }, kP, ZP), (0, wM.i)(MM, null, aS, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: MM => "alphaCutOff" in MM,
              get: MM => MM.alphaCutOff,
              set: (MM, rM) => {
                MM.alphaCutOff = rM
              }
            },
            metadata: rM
          }, oP, fP), (0, wM.i)(MM, null, PS, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: MM => "useAmbientOcclusionFromMetallicTextureRed" in MM,
              get: MM => MM.useAmbientOcclusionFromMetallicTextureRed,
              set: (MM, rM) => {
                MM.useAmbientOcclusionFromMetallicTextureRed = rM
              }
            },
            metadata: rM
          }, YP, NP), (0, wM.i)(MM, null, nS, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: MM => "useAmbientInGrayScale" in MM,
              get: MM => MM.useAmbientInGrayScale,
              set: (MM, rM) => {
                MM.useAmbientInGrayScale = rM
              }
            },
            metadata: rM
          }, AP, xP), (0, wM.i)(MM, null, QS, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: MM => "usePhysicalLightFalloff" in MM,
              get: MM => MM.usePhysicalLightFalloff
            },
            metadata: rM
          }, null, DS), (0, wM.i)(MM, null, zS, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: MM => "useGLTFLightFalloff" in MM,
              get: MM => MM.useGLTFLightFalloff
            },
            metadata: rM
          }, null, DS), (0, wM.i)(MM, null, LS, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: MM => "useObjectSpaceNormalMap" in MM,
              get: MM => MM.useObjectSpaceNormalMap,
              set: (MM, rM) => {
                MM.useObjectSpaceNormalMap = rM
              }
            },
            metadata: rM
          }, vP, FP), (0, wM.i)(MM, null, mS, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: MM => "useParallax" in MM,
              get: MM => MM.useParallax,
              set: (MM, rM) => {
                MM.useParallax = rM
              }
            },
            metadata: rM
          }, BP, XP), (0, wM.i)(MM, null, HS, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: MM => "useParallaxOcclusion" in MM,
              get: MM => MM.useParallaxOcclusion,
              set: (MM, rM) => {
                MM.useParallaxOcclusion = rM
              }
            },
            metadata: rM
          }, IP, KP), (0, wM.i)(MM, null, hS, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: MM => "parallaxScaleBias" in MM,
              get: MM => MM.parallaxScaleBias,
              set: (MM, rM) => {
                MM.parallaxScaleBias = rM
              }
            },
            metadata: rM
          }, qP, TP), (0, wM.i)(MM, null, JS, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: MM => "disableLighting" in MM,
              get: MM => MM.disableLighting,
              set: (MM, rM) => {
                MM.disableLighting = rM
              }
            },
            metadata: rM
          }, VP, cP), (0, wM.i)(MM, null, dS, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: MM => "forceIrradianceInFragment" in MM,
              get: MM => MM.forceIrradianceInFragment,
              set: (MM, rM) => {
                MM.forceIrradianceInFragment = rM
              }
            },
            metadata: rM
          }, Mn, rn), (0, wM.i)(MM, null, yS, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: MM => "maxSimultaneousLights" in MM,
              get: MM => MM.maxSimultaneousLights,
              set: (MM, rM) => {
                MM.maxSimultaneousLights = rM
              }
            },
            metadata: rM
          }, On, Sn), (0, wM.i)(MM, null, lS, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: MM => "invertNormalMapX" in MM,
              get: MM => MM.invertNormalMapX,
              set: (MM, rM) => {
                MM.invertNormalMapX = rM
              }
            },
            metadata: rM
          }, jn, an), (0, wM.i)(MM, null, ES, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: MM => "invertNormalMapY" in MM,
              get: MM => MM.invertNormalMapY,
              set: (MM, rM) => {
                MM.invertNormalMapY = rM
              }
            },
            metadata: rM
          }, Pn, nn), (0, wM.i)(MM, null, US, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: MM => "twoSidedLighting" in MM,
              get: MM => MM.twoSidedLighting,
              set: (MM, rM) => {
                MM.twoSidedLighting = rM
              }
            },
            metadata: rM
          }, Qn, zn), (0, wM.i)(MM, null, GS, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: MM => "useAlphaFresnel" in MM,
              get: MM => MM.useAlphaFresnel,
              set: (MM, rM) => {
                MM.useAlphaFresnel = rM
              }
            },
            metadata: rM
          }, Ln, mn), (0, wM.i)(MM, null, CS, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: MM => "useLinearAlphaFresnel" in MM,
              get: MM => MM.useLinearAlphaFresnel,
              set: (MM, rM) => {
                MM.useLinearAlphaFresnel = rM
              }
            },
            metadata: rM
          }, Hn, hn), (0, wM.i)(MM, null, eS, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "environmentBRDFTexture" in MM,
              get: MM => MM.environmentBRDFTexture,
              set: (MM, rM) => {
                MM.environmentBRDFTexture = rM
              }
            },
            metadata: rM
          }, Jn, dn), (0, wM.i)(MM, null, bS, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: MM => "forceNormalForward" in MM,
              get: MM => MM.forceNormalForward,
              set: (MM, rM) => {
                MM.forceNormalForward = rM
              }
            },
            metadata: rM
          }, yn, En), (0, wM.i)(MM, null, wS, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: MM => "enableSpecularAntiAliasing" in MM,
              get: MM => MM.enableSpecularAntiAliasing,
              set: (MM, rM) => {
                MM.enableSpecularAntiAliasing = rM
              }
            },
            metadata: rM
          }, Un, Gn), (0, wM.i)(MM, null, tS, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: MM => "useHorizonOcclusion" in MM,
              get: MM => MM.useHorizonOcclusion,
              set: (MM, rM) => {
                MM.useHorizonOcclusion = rM
              }
            },
            metadata: rM
          }, Cn, en), (0, wM.i)(MM, null, gS, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: MM => "useRadianceOcclusion" in MM,
              get: MM => MM.useRadianceOcclusion,
              set: (MM, rM) => {
                MM.useRadianceOcclusion = rM
              }
            },
            metadata: rM
          }, bn, wn), (0, wM.i)(MM, null, uS, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: MM => "unlit" in MM,
              get: MM => MM.unlit,
              set: (MM, rM) => {
                MM.unlit = rM
              }
            },
            metadata: rM
          }, tn, gn), (0, wM.i)(MM, null, RS, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: MM => "applyDecalMapAfterDetailMap" in MM,
              get: MM => MM.applyDecalMapAfterDetailMap,
              set: (MM, rM) => {
                MM.applyDecalMapAfterDetailMap = rM
              }
            },
            metadata: rM
          }, un, Rn), (0, wM.i)(MM, null, pS, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "debugMode" in MM,
              get: MM => MM.debugMode,
              set: (MM, rM) => {
                MM.debugMode = rM
              }
            },
            metadata: rM
          }, pn, Wn), (0, wM.i)(MM, null, WS, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: MM => "transparencyMode" in MM,
              get: MM => MM.transparencyMode
            },
            metadata: rM
          }, null, DS), rM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rM
          })
        })(), MM.SSS_QUALITY_LOW = 0, MM.SSS_QUALITY_MEDIUM = 1, MM.SSS_QUALITY_HIGH = 2, MM._noiseTextures = {}, MM.ForceGLSL = !1, MM._ShaderLoader = new mr.c((() => [Promise.all([iM.e(626), iM.e(689)]).then((() => iM(64371))), Promise.all([iM.e(631), iM.e(627), iM.e(688), iM.e(693)]).then((() => iM(64381)))]), (() => [Promise.all([iM.e(645), iM.e(647), iM.e(692)]).then((() => iM(64422))), Promise.all([iM.e(645), iM.e(648), iM.e(691), iM.e(694)]).then((() => iM(64430)))])), MM
      })(),
      cr = !1;
    cr || (cr = !0, (0, IM.d)(), (0, Ar.e)("BABYLON.OpenPBRMaterial", Vr));
    var Mi = iM(38068);
    class ri {
      constructor(MM) {
        this.name = Dr.e.NAME_PROCEDURALTEXTURE, this.YJ = MM
      }
      register() {
        this.YJ._beforeClearStage.registerStep(Dr.e.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.YJ.proceduralTexturesEnabled) {
          br.e.StartPerformanceCounter("Procedural textures", this.YJ.proceduralTextures.length > 0);
          for (let MM = 0; MM < this.YJ.proceduralTextures.length; MM++) {
            const rM = this.YJ.proceduralTextures[MM];
            rM._shouldRender() && rM.render()
          }
          br.e.EndPerformanceCounter("Procedural textures", this.YJ.proceduralTextures.length > 0)
        }
      }
    }
    var ii = iM(41424);
    let Oi = (() => {
      var MM;
      let rM, OM, SM, aM, PM, nM = RM.h,
        QM = [],
        zM = [],
        LM = [],
        mM = [],
        HM = [],
        hM = [],
        dM = [],
        yM = [],
        lM = [];
      return MM = class extends nM {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(MM, rM, iM, OM) {
          let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, OM, !jM), this.isEnabled = ((0, wM.m)(this, QM), (0, wM.m)(this, zM, !0)), this.autoClear = ((0, wM.m)(this, LM), (0, wM.m)(this, mM, !0)), this.onGenerated = (0, wM.m)(this, HM), this.onGeneratedObservable = new Mi.d, this.onBeforeGenerationObservable = new Mi.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, wM.m)(this, hM, void 0), this._drawWrapper = (0, wM.m)(this, dM), this._textures = {}, this._size = (0, wM.m)(this, yM, void 0), this._textureType = (0, wM.m)(this, lM), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === SM || SM instanceof RM.h ? (this._options = {}, this._fallbackTexture = SM) : (this._options = SM, this._fallbackTexture = SM.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let nM = (OM = this.Hk() || JM.c.LastCreatedScene)._getComponent(Dr.e.NAME_PROCEDURALTEXTURE);
          nM || (nM = new ri(OM), OM.MOM(nM)), this._options.skipSceneRegistration || OM.proceduralTextures.push(this), this._fullEngine = OM.ph(), this.name = MM, this.isRenderTarget = !0, this._size = rM, this._textureType = PM, this._generateMipMaps = jM, this._drawWrapper = new ii.c(this._fullEngine), this.setFragment(iM);
          const EM = this._createRtWrapper(aM, rM, jM, PM);
          this._texture = EM.texture;
          const UM = [];
          UM.push(1, 1), UM.push(-1, 1), UM.push(-1, -1), UM.push(1, -1), this._vertexBuffers[YM.j.PositionKind] = new YM.j(this._fullEngine, UM, YM.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(MM, rM, iM, OM) {
          return MM ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(rM, {
            generateMipMaps: iM,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: OM,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(rM, {
            generateMipMaps: iM,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: OM,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(MM) {
          this._drawWrapper.effect = MM
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((MM => {
            this._contentData = this.readPixels(0, 0, MM), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const MM = this._fullEngine,
            rM = [];
          rM.push(0), rM.push(1), rM.push(2), rM.push(0), rM.push(2), rM.push(3), this._indexBuffer = MM.createIndexBuffer(rM)
        }
        _rebuild() {
          const MM = this._vertexBuffers[YM.j.PositionKind];
          MM && MM._rebuild(), this._createIndexBuffer(), this.refreshRate === wr.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = wr.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(MM) {
          if (this.isReady()) return void MM(this);
          const rM = this.getEffect();
          rM && rM.executeWhenCompiled((() => {
            MM(this)
          }))
        }
        isReady() {
          const MM = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const rM = this._getDefines();
          if (this._drawWrapper.effect && rM === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const OM = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== rM && (this._cachedDefines = rM, this._drawWrapper.effect = MM.createEffect(OM, [YM.j.PositionKind], this._uniforms, this._samplers, rM, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([iM.e(697).then((() => iM(64492))), this._options.extraInitializationsAsync()]) : await Promise.all([iM.e(698).then((() => iM(64495))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await iM.e(697).then((() => iM(64492))) : await iM.e(698).then((() => iM(64495)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(MM) {
          this._fragment = MM
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(MM) {
          this._refreshRate = MM, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(MM, rM) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const iM = this._texture.isCube;
          this._rtWrapper.dispose();
          const OM = this._createRtWrapper(iM, MM, rM, this._textureType);
          this._texture = OM.texture, this._size = MM, this._generateMipMaps = rM
        }
        _checkUniform(MM) {
          -1 === this._uniforms.indexOf(MM) && this._uniforms.push(MM)
        }
        setTexture(MM, rM) {
          return -1 === this._samplers.indexOf(MM) && this._samplers.push(MM), this._textures[MM] = rM, this
        }
        setFloat(MM, rM) {
          return this._checkUniform(MM), this._floats[MM] = rM, this
        }
        setInt(MM, rM) {
          return this._checkUniform(MM), this._ints[MM] = rM, this
        }
        setFloats(MM, rM) {
          return this._checkUniform(MM), this._floatsArrays[MM] = rM, this
        }
        setColor3(MM, rM) {
          return this._checkUniform(MM), this._colors3[MM] = rM, this
        }
        setColor4(MM, rM) {
          return this._checkUniform(MM), this._colors4[MM] = rM, this
        }
        setVector2(MM, rM) {
          return this._checkUniform(MM), this._vectors2[MM] = rM, this
        }
        setVector3(MM, rM) {
          return this._checkUniform(MM), this._vectors3[MM] = rM, this
        }
        setVector4(MM, rM) {
          return this._checkUniform(MM), this._vectors4[MM] = rM, this
        }
        setMatrix(MM, rM) {
          return this._checkUniform(MM), this._matrices[MM] = rM, this
        }
        render(MM) {
          const rM = this.Hk();
          if (!rM) return;
          const iM = this._fullEngine;
          if (iM.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), iM.setState(!1), !this.nodeMaterialSource) {
            for (const MM in this._textures) this._drawWrapper.effect.setTexture(MM, this._textures[MM]);
            for (const MM in this._ints) this._drawWrapper.effect.setInt(MM, this._ints[MM]);
            for (const MM in this._floats) this._drawWrapper.effect.setFloat(MM, this._floats[MM]);
            for (const MM in this._floatsArrays) this._drawWrapper.effect.setArray(MM, this._floatsArrays[MM]);
            for (const MM in this._colors3) this._drawWrapper.effect.setColor3(MM, this._colors3[MM]);
            for (const MM in this._colors4) {
              const rM = this._colors4[MM];
              this._drawWrapper.effect.setFloat4(MM, rM.r, rM.g, rM.b, rM.a)
            }
            for (const MM in this._vectors2) this._drawWrapper.effect.setVector2(MM, this._vectors2[MM]);
            for (const MM in this._vectors3) this._drawWrapper.effect.setVector3(MM, this._vectors3[MM]);
            for (const MM in this._vectors4) this._drawWrapper.effect.setVector4(MM, this._vectors4[MM]);
            for (const MM in this._matrices) this._drawWrapper.effect.setMatrix(MM, this._matrices[MM])
          }
          if (!this._texture || !this._rtWrapper) return;
          iM._enableGPUDebugMarkers && iM._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const OM = iM.currentViewport;
          if (this.isCube)
            for (let SM = 0; SM < 6; SM++) iM.bindFramebuffer(this._rtWrapper, SM, void 0, void 0, !0), iM.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", SM), this.autoClear && iM.clear(rM.clearColor, !0, !1, !1), iM.drawElementsType(jM.c.TriangleFillMode, 0, 6), iM.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let MM = 1;
            this._rtWrapper.is3D ? MM = this._rtWrapper.depth : this._rtWrapper.is2DArray && (MM = this._rtWrapper.layers);
            for (let OM = 0; OM < MM; OM++) {
              if (iM.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, OM), iM.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== MM ? OM / (MM - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", OM);
                for (const MM in this._textures) this._drawWrapper.effect.setTexture(MM, this._textures[MM])
              }
              this.autoClear && iM.clear(rM.clearColor, !0, !1, !1), iM.drawElementsType(jM.c.TriangleFillMode, 0, 6), iM.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          OM && iM.setViewport(OM), this.isCube && iM.generateMipMapsForCubemap(this._texture, !0), iM._enableGPUDebugMarkers && iM._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const rM = this.getSize(),
            iM = new MM(this.name, rM.width, this._fragment, this.Hk(), this._fallbackTexture, this._generateMipMaps);
          return iM.hasAlpha = this.hasAlpha, iM.level = this.level, iM.coordinatesMode = this.coordinatesMode, iM
        }
        dispose() {
          const MM = this.Hk();
          if (!MM) return;
          const rM = MM.proceduralTextures.indexOf(this);
          rM >= 0 && MM.proceduralTextures.splice(rM, 1);
          const iM = this._vertexBuffers[YM.j.PositionKind];
          iM && (iM.dispose(), this._vertexBuffers[YM.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const iM = "function" === typeof Symbol && Symbol.metadata ? Object.create(nM[Symbol.metadata] ?? null) : void 0;
        rM = [(0, tM.L)()], OM = [(0, tM.L)()], SM = [(0, tM.L)()], aM = [(0, tM.L)()], PM = [(0, tM.L)()], (0, wM.i)(MM, null, PM, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: MM => "refreshRate" in MM,
            get: MM => MM.refreshRate
          },
          metadata: iM
        }, null, QM), (0, wM.i)(null, null, rM, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isEnabled" in MM,
            get: MM => MM.isEnabled,
            set: (MM, rM) => {
              MM.isEnabled = rM
            }
          },
          metadata: iM
        }, zM, LM), (0, wM.i)(null, null, OM, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: MM => "autoClear" in MM,
            get: MM => MM.autoClear,
            set: (MM, rM) => {
              MM.autoClear = rM
            }
          },
          metadata: iM
        }, mM, HM), (0, wM.i)(null, null, SM, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: MM => "_generateMipMaps" in MM,
            get: MM => MM._generateMipMaps,
            set: (MM, rM) => {
              MM._generateMipMaps = rM
            }
          },
          metadata: iM
        }, hM, dM), (0, wM.i)(null, null, aM, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: MM => "_size" in MM,
            get: MM => MM._size,
            set: (MM, rM) => {
              MM._size = rM
            }
          },
          metadata: iM
        }, yM, lM), iM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iM
        })
      })(), MM
    })();

    function Si(MM) {
      return "texture" in MM
    }

    function ji(MM) {
      return "value" in MM
    }
    async function ai(MM, rM, OM) {
      const SM = [rM.red, rM.green, rM.blue, rM.alpha],
        jM = [],
        aM = [];
      for (let iM = 0; iM < 4; iM++) {
        const MM = SM[iM];
        if (MM)
          if (Si(MM)) {
            if (MM.sourceChannel < 0 || MM.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let rM = jM.indexOf(MM.texture); - 1 === rM && (rM = jM.length, jM.push(MM.texture)), aM[iM] = rM
          } else {
            if (!ji(MM)) throw new Error("Invalid channel input configuration");
            if (MM.value < 0 || MM.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            aM[iM] = -1
          }
        else aM[iM] = -1
      }
      let PM = rM.outputSize;
      if (!PM && jM.length > 0) {
        let MM = 0;
        for (const rM of jM) {
          const iM = rM.getSize(),
            OM = Math.max(iM.width, iM.height);
          OM > MM && (MM = OM, PM = iM.width === iM.height ? MM : iM)
        }
      }
      PM = PM || 512;
      const nM = [],
        QM = new Set;
      for (let iM = 0; iM < 4; iM++) {
        const MM = SM[iM],
          rM = ["RED", "GREEN", "BLUE", "ALPHA"][iM];
        if (MM && Si(MM)) {
          nM.push(`${rM}_FROM_TEXTURE`);
          const MM = aM[iM];
          QM.add(MM)
        }
      }
      QM.forEach((MM => {
        nM.push(`USE_TEXTURE${MM}`)
      }));
      const zM = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: OM.ph().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            OM.ph().isWebGPU ? await Promise.all([iM.e(695).then((() => iM(64481)))]) : await Promise.all([iM.e(696).then((() => iM(64489)))])
          },
          skipSceneRegistration: !0
        },
        LM = new Oi(MM, PM, "textureMerger", OM, zM);
      LM.refreshRate = -1, LM.defines = nM.length > 0 ? "#define " + nM.join("\n#define ") + "\n" : "";
      for (let iM = 0; iM < jM.length; iM++) mM = jM[iM], (HM = LM).uOffset = mM.uOffset, HM.vOffset = mM.vOffset, HM.uScale = mM.uScale, HM.vScale = mM.vScale, HM.uAng = mM.uAng, HM.vAng = mM.vAng, HM.wAng = mM.wAng, HM.uRotationCenter = mM.uRotationCenter, HM.vRotationCenter = mM.vRotationCenter, LM.setTexture(`inputTexture${iM}`, jM[iM]);
      var mM, HM;
      for (let iM = 0; iM < 4; iM++) {
        const MM = SM[iM],
          rM = ["red", "green", "blue", "alpha"][iM];
        if (MM && Si(MM)) {
          const OM = aM[iM];
          LM.setInt(`${rM}TextureIndex`, OM), LM.setInt(`${rM}SourceChannel`, MM.sourceChannel)
        } else {
          let OM;
          OM = MM && ji(MM) ? MM.value : 3 === iM ? 1 : 0, LM.setFloat(`${rM}ConstantValue`, OM)
        }
      }
      return await new Promise(((MM, rM) => {
        LM.executeWhenReady((() => {
          try {
            LM.render(), MM(LM)
          } catch (iM) {
            rM(iM instanceof Error ? iM : new Error(String(iM)))
          }
        }))
      }))
    }

    function Pi(MM, rM) {
      return {
        texture: MM,
        sourceChannel: rM
      }
    }

    function ni(MM) {
      return {
        value: MM
      }
    }

    function Qi(MM, rM, iM, OM) {
      return {
        red: MM,
        green: rM,
        blue: iM,
        alpha: OM
      }
    }
    var zi = iM(40935),
      Li = iM(41026),
      mi = iM(38056),
      Hi = iM(41081),
      Ji = iM(41015);
    class di {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class yi extends zi.d {
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
        return !!this._options?.enableMultiview || this.PJ > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new di;
        super(null), void 0 === MM.deterministicLockstep && (MM.deterministicLockstep = !1), void 0 !== MM.timeStep && (this._timeStep = MM.timeStep), void 0 === MM.lockstepMaxSteps && (MM.lockstepMaxSteps = 4), this._options = MM, mi.b.SetMatrixPrecision(!!MM.useHighPrecisionMatrix), this._caps = {
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
        }, MM.enableMultiview && (this._caps.multiview = {
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
        }, MM.renderingCanvas && (this._renderingCanvas = MM.renderingCanvas), gM.e.Log(`Babylon.js v${zi.d.Version} - Null engine`);
        const rM = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (rM.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (rM.Blob = function() {})
      }
      createVertexBuffer(MM) {
        const rM = new Li.c;
        return rM.references = 1, rM
      }
      createIndexBuffer(MM) {
        const rM = new Li.c;
        return rM.references = 1, rM
      }
      clear(MM, rM, iM) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(MM, rM, iM) {
        this._cachedViewport = MM
      }
      createUniformBuffer(MM) {
        const rM = new Li.c;
        return rM.references = 1, rM.vL = MM instanceof Array ? MM.length * Float32Array.BYTES_PER_ELEMENT : MM.byteLength, rM
      }
      createDynamicUniformBuffer(MM) {
        return this.createUniformBuffer(MM)
      }
      updateUniformBuffer(MM, rM, iM, OM) {}
      bindUniformBufferBase(MM, rM, iM) {}
      bindUniformBlock(MM, rM, iM) {}
      createShaderProgram(MM, rM, iM, OM, SM) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(MM, rM) {
        return []
      }
      getAttributes(MM, rM) {
        return []
      }
      bindSamplers(MM) {
        this._currentEffect = null
      }
      enableEffect(MM) {
        MM = null !== MM && (0, Ji.e)(MM) ? MM.effect : MM, this._currentEffect = MM, MM && (MM.onBind && MM.onBind(MM), MM._onBindObservable && MM._onBindObservable.notifyObservers(MM))
      }
      setStateCullFaceType(MM, rM) {}
      setState(MM) {}
      setIntArray(MM, rM) {
        return !0
      }
      setIntArray2(MM, rM) {
        return !0
      }
      setIntArray3(MM, rM) {
        return !0
      }
      setIntArray4(MM, rM) {
        return !0
      }
      setFloatArray(MM, rM) {
        return !0
      }
      setFloatArray2(MM, rM) {
        return !0
      }
      setFloatArray3(MM, rM) {
        return !0
      }
      setFloatArray4(MM, rM) {
        return !0
      }
      setArray(MM, rM) {
        return !0
      }
      setArray2(MM, rM) {
        return !0
      }
      setArray3(MM, rM) {
        return !0
      }
      setArray4(MM, rM) {
        return !0
      }
      setMatrices(MM, rM) {
        return !0
      }
      setMatrix3x3(MM, rM) {
        return !0
      }
      setMatrix2x2(MM, rM) {
        return !0
      }
      setFloat(MM, rM) {
        return !0
      }
      setFloat2(MM, rM, iM) {
        return !0
      }
      setFloat3(MM, rM, iM, OM) {
        return !0
      }
      setBool(MM, rM) {
        return !0
      }
      setFloat4(MM, rM, iM, OM, SM) {
        return !0
      }
      setAlphaMode(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[iM] !== MM && (this.alphaState.setAlphaBlend(0 !== MM, 0), rM || this.setDepthWrite(0 === MM), this._alphaMode[iM] = MM)
      }
      bindBuffers(MM, rM, iM) {}
      wipeCaches(MM) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, MM && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(MM, rM, iM, OM) {}
      drawElementsType(MM, rM, iM, OM) {}
      drawArraysType(MM, rM, iM, OM) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(MM) {}
      createTexture(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          aM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          PM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const nM = new tr.c(this, 1),
          QM = String(MM);
        return nM.url = QM, nM.generateMipMaps = !rM, nM.samplingMode = SM, nM.invertY = iM, nM.baseWidth = this._options.textureSize, nM.baseHeight = this._options.textureSize, nM.width = this._options.textureSize, nM.height = this._options.textureSize, PM && (nM.format = PM), aM && (nM._buffer = aM), nM.isReady = !0, jM && setTimeout((() => {
          jM(nM)
        })), this._internalTexturesCache.push(nM), nM
      }
      _createHardwareRenderTargetWrapper(MM, rM, iM) {
        const OM = new Hi.b(MM, rM, iM, this);
        return this._renderTargetWrapperCache.push(OM), OM
      }
      createRenderTargetTexture(MM, rM) {
        const iM = this._createHardwareRenderTargetWrapper(!1, !1, MM),
          OM = {};
        void 0 !== rM && "object" === typeof rM ? (OM.generateMipMaps = rM.generateMipMaps, OM.generateDepthBuffer = void 0 === rM.generateDepthBuffer || rM.generateDepthBuffer, OM.generateStencilBuffer = OM.generateDepthBuffer && rM.generateStencilBuffer, OM.type = void 0 === rM.type ? 0 : rM.type, OM.samplingMode = void 0 === rM.samplingMode ? 3 : rM.samplingMode) : (OM.generateMipMaps = rM, OM.generateDepthBuffer = !0, OM.generateStencilBuffer = !1, OM.type = 0, OM.samplingMode = 3);
        const SM = new tr.c(this, 5);
        iM.setTexture(SM);
        const jM = MM.width || MM,
          aM = MM.height || MM;
        return iM._generateDepthBuffer = OM.generateDepthBuffer, iM._generateStencilBuffer = !!OM.generateStencilBuffer, SM.baseWidth = jM, SM.baseHeight = aM, SM.width = jM, SM.height = aM, SM.isReady = !0, SM.samples = 1, SM.generateMipMaps = !!OM.generateMipMaps, SM.samplingMode = OM.samplingMode, SM.type = OM.type, this._internalTexturesCache.push(SM), iM
      }
      createMultiviewRenderTargetTexture(MM, rM) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const iM = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: MM,
            height: rM
          }),
          OM = new tr.c(this, 5, !0);
        return OM.baseWidth = MM, OM.baseHeight = rM, OM.width = MM, OM.height = rM, OM.isMultiview = !0, OM.isReady = !0, OM.format = 5, OM.samples = 1, iM.setTextures(OM), iM
      }
      bindMultiviewFramebuffer(MM) {
        this.bindFramebuffer(MM, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(MM, rM) {
        const iM = this._createHardwareRenderTargetWrapper(!1, !0, MM),
          OM = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...rM
          };
        OM.generateStencilBuffer = OM.generateDepthBuffer && OM.generateStencilBuffer, (1 !== OM.type || this._caps.textureFloatLinearFiltering) && (2 !== OM.type || this._caps.textureHalfFloatLinearFiltering) || (OM.samplingMode = 1), iM._generateDepthBuffer = OM.generateDepthBuffer, iM._generateStencilBuffer = !!OM.generateStencilBuffer;
        const SM = new tr.c(this, 5);
        return SM.baseWidth = MM, SM.baseHeight = MM, SM.width = MM, SM.height = MM, SM.isReady = !0, SM.isCube = !0, SM.samples = 1, SM.generateMipMaps = !!OM.generateMipMaps, SM.samplingMode = OM.samplingMode, SM.type = OM.type, this._internalTexturesCache.push(SM), iM
      }
      updateTextureSamplingMode(MM, rM) {
        rM.samplingMode = MM
      }
      createRawTexture(MM, rM, iM, OM, SM, jM, aM) {
        let PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          QM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const zM = new tr.c(this, 3);
        return zM.baseWidth = rM, zM.baseHeight = iM, zM.width = rM, zM.height = iM, zM.format = OM, zM.generateMipMaps = SM, zM.samplingMode = aM, zM.invertY = jM, zM._compression = PM, zM.type = nM, zM._useSRGBBuffer = QM, this._doNotHandleContextLost || (zM._bufferView = MM), zM
      }
      updateRawTexture(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        MM && (MM._bufferView = rM, MM.format = iM, MM.invertY = OM, MM._compression = SM, MM.type = jM, MM._useSRGBBuffer = aM)
      }
      bindFramebuffer(MM, rM, iM, OM, SM) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = MM, this._currentFramebuffer = null, this._cachedViewport && !SM && this.setViewport(this._cachedViewport, iM, OM)
      }
      unBindFramebuffer(MM) {
        let rM = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, rM && rM(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(MM) {
        const rM = new Li.c;
        return rM.references = 1, rM.vL = 1, rM
      }
      updateDynamicTexture(MM, rM, iM) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(MM) {}
      updateDynamicIndexBuffer(MM, rM) {}
      updateDynamicVertexBuffer(MM, rM, iM, OM) {}
      _bindTextureDirectly(MM, rM) {
        return this._boundTexturesCache[this._activeChannel] !== rM && (this._boundTexturesCache[this._activeChannel] = rM, !0)
      }
      _bindTexture(MM, rM) {
        MM < 0 || this._bindTextureDirectly(0, rM)
      }
      _deleteBuffer(MM) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(MM) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(MM, rM, iM, OM, SM) {}
      _uploadDataToTextureDirectly(MM, rM) {}
      _uploadArrayBufferViewToTexture(MM, rM) {}
      _uploadImageToTexture(MM, rM) {}
    }
    iM(41137), iM(41184), iM(41128);
    async function li(MM) {
      const rM = MM.getInternalTexture();
      if (!rM || 1 !== rM.source) return null;
      if (rM.invertY) {
        const rM = MM.Hk()?.ph();
        if (!(rM instanceof yi)) return null
      }
      const iM = rM._buffer;
      let OM, jM = MM.mimeType;
      try {
        iM ? ArrayBuffer.isView(iM) ? OM = iM.buffer.slice(iM.byteOffset, iM.byteOffset + iM.byteLength) : iM instanceof ArrayBuffer ? OM = iM : iM instanceof Blob ? (OM = await iM.arrayBuffer(), jM = iM.type || jM) : "string" === typeof iM ? (OM = await SM.Tools.LoadFileAsync(iM), jM = (0, nM.b)(iM) || jM) : "undefined" !== typeof HTMLImageElement && iM instanceof HTMLImageElement && (OM = await SM.Tools.LoadFileAsync(iM.src), jM = (0, nM.b)(iM.src) || jM) : (OM = await SM.Tools.LoadFileAsync(rM.url), jM = (0, nM.b)(rM.url) || jM)
      } catch {
        return null
      }
      if (OM && !jM && rM.url) {
        const MM = rM.url.match(/^data:([^;,]+)/);
        jM = MM ? MM[1] : (0, nM.b)(rM.url)
      }
      return OM && jM ? {
        data: OM,
        mimeType: jM
      } : null
    }
    const Ei = 1e-6,
      Ui = new dM.Color3(.04, .04, .04),
      Gi = 1024,
      Ci = dM.Color3.White(),
      ei = dM.Color3.BlackReadOnly;

    function bi(MM) {
      switch (MM) {
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

    function wi(MM, rM, iM) {
      if (rM < Ui.r) return 0;
      const OM = Ui.r,
        SM = MM * iM / (1 - Ui.r) + rM - 2 * Ui.r,
        jM = SM * SM - 4 * OM * (Ui.r - rM);
      return EM.Clamp((-SM + Math.sqrt(jM)) / (2 * OM), 0, 1)
    }

    function ti(MM) {
      const rM = MM.diffuseColor.toLinearSpace(MM.Hk().ph().useExactSrgbConversions).scale(.5),
        iM = MM.alpha,
        OM = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new fM.o(0, 1),
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new fM.o(0, .1),
            OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new fM.o(0, .1),
            SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new fM.o(1300, .1);
          return function(MM, rM, iM, OM, SM) {
            return (1 - MM) * (1 - MM) * (1 - MM) * rM + 3 * (1 - MM) * (1 - MM) * MM * iM + 3 * (1 - MM) * MM * MM * OM + MM * MM * MM * SM
          }(Math.pow(MM / SM.x, .333333), rM.y, iM.y, OM.y, SM.y)
        }(EM.Clamp(MM.specularPower, 0, Gi));
      return {
        baseColorFactor: [rM.r, rM.g, rM.b, iM],
        metallicFactor: 0,
        roughnessFactor: OM
      }
    }

    function gi(MM, rM) {
      rM.needAlphaBlending() ? MM.alphaMode = "BLEND" : rM.needAlphaTesting() && (MM.alphaMode = "MASK", MM.alphaCutoff = rM.alphaCutOff)
    }

    function ui(MM, rM, iM) {
      const OM = new Uint8Array(MM * rM * 4);
      for (let SM = 0; SM < OM.length; SM += 4) OM[SM] = OM[SM + 1] = OM[SM + 2] = OM[SM + 3] = 255;
      return CM.e.CreateRGBATexture(OM, MM, rM, iM)
    }

    function Ri(MM) {
      if (MM instanceof Uint8Array) {
        const rM = MM.length,
          iM = new Float32Array(MM.length);
        for (let OM = 0; OM < rM; ++OM) iM[OM] = MM[OM] / 255;
        return iM
      }
      if (MM instanceof Float32Array) return MM;
      throw new Error("Unsupported pixel format!")
    }
    class Wi {
      constructor(MM) {
        this._exporter = MM, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(MM) {
        return MM ? this._textureMap.get(MM.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(MM, rM) {
        const iM = ti(MM),
          OM = {
            name: MM.name
          };
        if (null == MM.backFaceCulling || MM.backFaceCulling || (MM.twoSidedLighting || SM.Tools.Warn(MM.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), OM.doubleSided = !0), rM) {
          const rM = [],
            SM = MM.diffuseTexture;
          SM && rM.push(this.exportTextureAsync(SM).then((MM => {
            MM && (iM.baseColorTexture = MM)
          })));
          const jM = MM.bumpTexture;
          jM && rM.push(this.exportTextureAsync(jM).then((MM => {
            MM && (OM.normalTexture = MM, 1 !== jM.level && (OM.normalTexture.scale = jM.level))
          })));
          const aM = MM.emissiveTexture;
          aM && (OM.emissiveFactor = [1, 1, 1], rM.push(this.exportTextureAsync(aM).then((MM => {
            MM && (OM.emissiveTexture = MM)
          }))));
          const PM = MM.ambientTexture;
          PM && rM.push(this.exportTextureAsync(PM).then((MM => {
            if (MM) {
              const rM = {
                index: MM.index
              };
              OM.occlusionTexture = rM
            }
          }))), rM.length > 0 && (this._exporter._materialNeedsUVsSet.add(MM), await Promise.all(rM))
        }(MM.alpha < 1 || MM.opacityTexture) && (MM.alphaMode === eM.d.ALPHA_COMBINE ? OM.alphaMode = "BLEND" : SM.Tools.Warn(MM.name + ": glTF 2.0 does not support alpha mode: " + MM.alphaMode.toString())), MM.emissiveColor && !MM.emissiveColor.equalsWithEpsilon(ei, Ei) && (OM.emissiveFactor = MM.emissiveColor.HOM()), OM.pbrMetallicRoughness = iM, gi(OM, MM), await this._finishMaterialAsync(OM, MM);
        const jM = this._exporter._materials;
        return jM.push(OM), jM.length - 1
      }
      async _finishMaterialAsync(MM, rM) {
        const iM = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", MM, rM),
          OM = [];
        for (const SM of iM) OM.push(this.exportTextureAsync(SM));
        await Promise.all(OM), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", MM, rM)
      }
      _resizeTexturesToSameDimensions(MM, rM, iM) {
        const OM = MM ? MM.getSize() : {
            width: 0,
            height: 0
          },
          SM = rM ? rM.getSize() : {
            width: 0,
            height: 0
          };
        let jM, aM;
        return OM.width < SM.width ? (jM = MM && MM instanceof GM.c ? UM.j.CreateResizedCopy(MM, SM.width, SM.height, !0) : ui(SM.width, SM.height, iM), aM = rM) : OM.width > SM.width ? (aM = rM && rM instanceof GM.c ? UM.j.CreateResizedCopy(rM, OM.width, OM.height, !0) : ui(OM.width, OM.height, iM), jM = MM) : (jM = MM, aM = rM), {
          texture1: jM,
          texture2: aM
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(MM, rM, iM) {
        const OM = new Array;
        if (!MM && !rM) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const SM = MM ? MM.Hk() : rM ? rM.Hk() : null;
        if (SM) {
          const jM = this._resizeTexturesToSameDimensions(MM, rM, SM),
            aM = jM.texture1?.getSize();
          let PM, nM;
          const QM = aM.width,
            zM = aM.height,
            LM = await jM.texture1.readPixels(),
            mM = await jM.texture2.readPixels();
          if (!LM) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (PM = Ri(LM), !mM) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          nM = Ri(mM);
          const HM = nM.byteLength,
            hM = new Uint8Array(HM),
            JM = new Uint8Array(HM),
            yM = 4,
            lM = new dM.Color3(0, 0, 0);
          let EM = 0,
            UM = 0;
          for (let MM = 0; MM < zM; ++MM)
            for (let rM = 0; rM < QM; ++rM) {
              const OM = (QM * MM + rM) * yM,
                aM = {
                  diffuseColor: new dM.Color3(PM[OM], PM[OM + 1], PM[OM + 2]).toLinearSpace(SM.ph().useExactSrgbConversions).multiply(iM.diffuseColor),
                  specularColor: new dM.Color3(nM[OM], nM[OM + 1], nM[OM + 2]).toLinearSpace(SM.ph().useExactSrgbConversions).multiply(iM.specularColor),
                  glossiness: nM[OM + 3] * iM.glossiness
                },
                zM = this._convertSpecularGlossinessToMetallicRoughness(aM);
              lM.r = Math.max(lM.r, zM.baseColor.r), lM.g = Math.max(lM.g, zM.baseColor.g), lM.b = Math.max(lM.b, zM.baseColor.b), EM = Math.max(EM, zM.metallic), UM = Math.max(UM, zM.roughness), JM[OM] = 255 * zM.baseColor.r, JM[OM + 1] = 255 * zM.baseColor.g, JM[OM + 2] = 255 * zM.baseColor.b, JM[OM + 3] = jM.texture1.hasAlpha ? 255 * PM[OM + 3] : 255, hM[OM] = 0, hM[OM + 1] = 255 * zM.roughness, hM[OM + 2] = 255 * zM.metallic, hM[OM + 3] = 255
            }
          const GM = {
            baseColor: lM,
            metallic: EM,
            roughness: UM
          };
          let CM = !1,
            eM = !1;
          for (let MM = 0; MM < zM; ++MM)
            for (let rM = 0; rM < QM; ++rM) {
              const iM = (QM * MM + rM) * yM;
              JM[iM] /= GM.baseColor.r > Ei ? GM.baseColor.r : 1, JM[iM + 1] /= GM.baseColor.g > Ei ? GM.baseColor.g : 1, JM[iM + 2] /= GM.baseColor.b > Ei ? GM.baseColor.b : 1;
              const OM = dM.Color3.FromInts(JM[iM], JM[iM + 1], JM[iM + 2]).toGammaSpace(SM.ph().useExactSrgbConversions);
              JM[iM] = 255 * OM.r, JM[iM + 1] = 255 * OM.g, JM[iM + 2] = 255 * OM.b, OM.equalsWithEpsilon(Ci, Ei) || (eM = !0), hM[iM + 1] /= GM.roughness > Ei ? GM.roughness : 1, hM[iM + 2] /= GM.metallic > Ei ? GM.metallic : 1;
              dM.Color3.FromInts(255, hM[iM + 1], hM[iM + 2]).equalsWithEpsilon(Ci, Ei) || (CM = !0)
            }
          return CM && OM.push((0, bM.EncodeImageAsync)(hM, QM, zM).then((MM => {
            GM.metallicRoughnessTextureData = MM
          }))), eM && OM.push((0, bM.EncodeImageAsync)(JM, QM, zM).then((MM => {
            GM.baseColorTextureData = MM
          }))), await Promise.all(OM).then((() => GM))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(MM) {
        const rM = this._getPerceivedBrightness(MM.diffuseColor),
          iM = this._getPerceivedBrightness(MM.specularColor),
          OM = 1 - this._getMaxComponent(MM.specularColor),
          SM = wi(rM, iM, OM),
          jM = MM.diffuseColor.scale(OM / (1 - Ui.r) / Math.max(1 - SM, Ei)),
          aM = MM.specularColor.subtract(Ui.scale(1 - SM)).scale(1 / Math.max(SM, Ei));
        let PM = dM.Color3.Lerp(jM, aM, SM * SM);
        PM = PM.clampToRef(0, 1, PM);
        return {
          baseColor: PM,
          metallic: SM,
          roughness: 1 - MM.glossiness
        }
      }
      _getPerceivedBrightness(MM) {
        return Math.sqrt(.299 * MM.r * MM.r + .587 * MM.g * MM.g + .114 * MM.b * MM.b)
      }
      _getMaxComponent(MM) {
        return Math.max(MM.r, Math.max(MM.g, MM.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
        const QM = [],
          zM = {
            baseColor: MM,
            metallic: rM,
            roughness: iM
          };
        if (nM)
          if (aM instanceof Vr) {
            if (aM.geometryOpacityTexture) {
              const MM = OM && OM.getInternalTexture() ? OM.getInternalTexture().uniqueId : 0,
                rM = aM.geometryOpacityTexture && aM.geometryOpacityTexture.getInternalTexture() ? aM.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                iM = Number(`${MM}${rM}`),
                SM = this._textureMap.get(iM);
              SM ? PM.baseColorTexture = SM : QM.push(ai("baseColorOpacityTexture", Qi(OM ? Pi(OM, 0) : ni(1), OM ? Pi(OM, 1) : ni(1), OM ? Pi(OM, 2) : ni(1), Pi(aM.geometryOpacityTexture, 0)), aM.Hk()).then((async MM => {
                const rM = await this.exportTextureAsync(MM, iM);
                rM && (PM.baseColorTexture = rM)
              })))
            } else OM && QM.push(this.exportTextureAsync(OM).then((MM => {
              MM && (PM.baseColorTexture = MM)
            })));
            if (aM._useMetallicFromMetallicTextureBlue && SM) QM.push(this.exportTextureAsync(SM).then((MM => {
              MM && (PM.metallicRoughnessTexture = MM)
            })));
            else if (jM || SM) {
              const MM = SM && SM.getInternalTexture() ? SM.getInternalTexture().uniqueId : 0,
                rM = jM && jM.getInternalTexture() ? jM.getInternalTexture().uniqueId : 0,
                iM = Number(`${MM}${rM}`),
                OM = this._textureMap.get(iM);
              OM ? PM.metallicRoughnessTexture = OM : QM.push(ai("MetalRoughTexture", Qi(aM.ambientOcclusionTexture ? Pi(aM.ambientOcclusionTexture, 0) : ni(1), jM ? Pi(jM, 0) : ni(1), SM ? Pi(SM, 0) : ni(1)), aM.Hk()).then((async MM => {
                const rM = await this.exportTextureAsync(MM, iM);
                rM && (PM.metallicRoughnessTexture = rM)
              })))
            }
          } else OM && QM.push(this.exportTextureAsync(OM).then((MM => {
            MM && (PM.baseColorTexture = MM)
          }))), SM && QM.push(this.exportTextureAsync(SM).then((MM => {
            MM && (PM.metallicRoughnessTexture = MM)
          })));
        return QM.length > 0 && (this._exporter._materialNeedsUVsSet.add(aM), await Promise.all(QM)), zM
      }
      _getTextureSampler(MM) {
        const rM = {};
        if (!MM || !(MM instanceof GM.c)) return rM;
        const iM = this._getGLTFTextureWrapMode(MM.wrapU);
        10497 !== iM && (rM.wrapS = iM);
        const OM = this._getGLTFTextureWrapMode(MM.wrapV);
        switch (10497 !== OM && (rM.wrapT = OM), MM.samplingMode) {
          case GM.c.LINEAR_LINEAR:
            rM.magFilter = 9729, rM.minFilter = 9729;
            break;
          case GM.c.LINEAR_NEAREST:
            rM.magFilter = 9729, rM.minFilter = 9728;
            break;
          case GM.c.NEAREST_LINEAR:
            rM.magFilter = 9728, rM.minFilter = 9729;
            break;
          case GM.c.NEAREST_LINEAR_MIPLINEAR:
            rM.magFilter = 9728, rM.minFilter = 9987;
            break;
          case GM.c.NEAREST_NEAREST:
            rM.magFilter = 9728, rM.minFilter = 9728;
            break;
          case GM.c.NEAREST_LINEAR_MIPNEAREST:
            rM.magFilter = 9728, rM.minFilter = 9985;
            break;
          case GM.c.LINEAR_NEAREST_MIPNEAREST:
            rM.magFilter = 9729, rM.minFilter = 9984;
            break;
          case GM.c.LINEAR_NEAREST_MIPLINEAR:
            rM.magFilter = 9729, rM.minFilter = 9986;
            break;
          case GM.c.NEAREST_NEAREST_MIPLINEAR:
            rM.magFilter = 9728, rM.minFilter = 9986;
            break;
          case GM.c.LINEAR_LINEAR_MIPLINEAR:
            rM.magFilter = 9729, rM.minFilter = 9987;
            break;
          case GM.c.LINEAR_LINEAR_MIPNEAREST:
            rM.magFilter = 9729, rM.minFilter = 9985;
            break;
          case GM.c.NEAREST_NEAREST_MIPNEAREST:
            rM.magFilter = 9728, rM.minFilter = 9984
        }
        return rM
      }
      _getGLTFTextureWrapMode(MM) {
        switch (MM) {
          case GM.c.WRAP_ADDRESSMODE:
            return 10497;
          case GM.c.CLAMP_ADDRESSMODE:
            return 33071;
          case GM.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return SM.Tools.Error(`Unsupported Texture Wrap Mode ${MM}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(MM, rM, iM) {
        const OM = {
            diffuseColor: MM._albedoColor,
            specularColor: MM._reflectivityColor,
            glossiness: MM._microSurface
          },
          SM = MM._albedoTexture,
          jM = MM._reflectivityTexture,
          aM = MM._useMicroSurfaceFromReflectivityMapAlpha;
        if (jM && !aM) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((SM || jM) && iM) {
          this._exporter._materialNeedsUVsSet.add(MM);
          const iM = this._exportTextureSampler(SM || jM),
            aM = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(SM, jM, OM),
            PM = this._exporter._textures;
          if (aM.baseColorTextureData) {
            const MM = await this._exportImageAsync(`baseColor${PM.length}`, aM.baseColorTextureData);
            rM.baseColorTexture = this._exportTextureInfo(MM, iM, SM?.coordinatesIndex)
          }
          if (aM.metallicRoughnessTextureData) {
            const MM = await this._exportImageAsync(`metallicRoughness${PM.length}`, aM.metallicRoughnessTextureData);
            rM.metallicRoughnessTexture = this._exportTextureInfo(MM, iM, jM?.coordinatesIndex)
          }
          return aM
        }
        return this._convertSpecularGlossinessToMetallicRoughness(OM)
      }
      async exportPBRMaterialAsync(MM, rM) {
        const iM = {},
          OM = {
            name: MM.name
          },
          SM = MM.isMetallicWorkflow();
        if (SM) {
          const rM = MM._albedoColor,
            OM = MM.alpha;
          rM && (iM.baseColorFactor = [rM.r, rM.g, rM.b, OM])
        }
        const jM = SM ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(MM._albedoColor, MM._metallic, MM._roughness, MM._albedoTexture, MM._metallicTexture, MM._metallicTexture, MM, iM, rM) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(MM, iM, rM);
        await this._setMetallicRoughnessPbrMaterialAsync(jM, MM, OM, iM, rM), await this._finishMaterialAsync(OM, MM);
        const aM = this._exporter._materials;
        return aM.push(OM), aM.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(MM, rM, iM, OM, jM) {
        if (gi(iM, rM), MM.baseColor.equalsWithEpsilon(Ci, Ei) && EM.WithinEpsilon(rM.alpha, 1, Ei) || (OM.baseColorFactor = [MM.baseColor.r, MM.baseColor.g, MM.baseColor.b, rM.alpha]), null != MM.metallic && 1 !== MM.metallic && (OM.metallicFactor = MM.metallic), null != MM.roughness && 1 !== MM.roughness && (OM.roughnessFactor = MM.roughness), null == rM.backFaceCulling || rM.backFaceCulling || (rM._twoSidedLighting || SM.Tools.Warn(rM.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), iM.doubleSided = !0), jM) {
          const MM = [],
            SM = rM instanceof Cr ? rM._bumpTexture : rM.geometryNormalTexture;
          SM && MM.push(this.exportTextureAsync(SM).then((MM => {
            MM && (iM.normalTexture = MM, 1 !== SM.level && (iM.normalTexture.scale = SM.level))
          })));
          const jM = rM instanceof Cr ? rM._ambientTexture : rM.ambientOcclusionTexture;
          jM && MM.push(new Promise((async MM => {
            if (rM instanceof Vr && OM.metallicRoughnessTexture) {
              const rM = this._exportTextureSampler(jM),
                iM = this._exporter._textures[OM.metallicRoughnessTexture.index].source,
                SM = this._exportTextureInfo(iM, rM, jM.coordinatesIndex);
              return this._textureMap.set(jM.uniqueId, SM), this._exporter._extensionsPostExportTextures("exporter", SM, jM), MM(SM)
            }
            return MM(await this.exportTextureAsync(jM))
          })).then((async MM => {
            if (MM) {
              const OM = {
                index: MM.index,
                texCoord: MM.texCoord,
                extensions: MM.extensions
              };
              iM.occlusionTexture = OM, OM.strength = rM instanceof Cr ? rM._ambientTextureStrength : rM.ambientOcclusionTexture.level
            }
          })));
          const aM = rM instanceof Cr ? rM._emissiveTexture : rM.emissionColorTexture;
          aM && MM.push(this.exportTextureAsync(aM).then((MM => {
            MM && (iM.emissiveTexture = MM)
          }))), MM.length > 0 && (this._exporter._materialNeedsUVsSet.add(rM), await Promise.all(MM))
        }
        const aM = rM instanceof Cr ? rM._emissiveColor : rM.emissionColor;
        aM.equalsWithEpsilon(ei, Ei) || (iM.emissiveFactor = aM.HOM()), iM.pbrMetallicRoughness = OM
      }
      async exportOpenPBRMaterialAsync(MM, rM) {
        const iM = {},
          OM = {
            name: MM.name
          },
          SM = MM.baseColor,
          jM = MM.geometryOpacity;
        SM && (iM.baseColorFactor = [SM.r, SM.g, SM.b, jM]);
        const aM = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(MM.baseColor, MM.baseMetalness, MM.specularRoughness, MM.baseColorTexture, MM.baseMetalnessTexture, MM.specularRoughnessTexture, MM, iM, rM);
        await this._setMetallicRoughnessPbrMaterialAsync(aM, MM, OM, iM, rM), await this._finishMaterialAsync(OM, MM);
        const PM = this._exporter._materials;
        return PM.push(OM), PM.length - 1
      }
      async exportTextureAsync(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          iM = this._textureMap.get(rM ?? MM.uniqueId);
        if (iM) return iM;
        const OM = this._exportTextureSampler(MM),
          SM = await this._exportTextureImageAsync(MM);
        return iM = this._exportTextureInfo(SM, OM, MM.coordinatesIndex), this._textureMap.set(rM ?? MM.uniqueId, iM), this._exporter._extensionsPostExportTextures("exporter", iM, MM), iM
      }
      async _exportTextureImageAsync(MM) {
        const rM = MM.mimeType ?? "none",
          iM = this._internalTextureToImage,
          OM = MM.getInternalTexture().uniqueId;
        iM[OM] = iM[OM] || {};
        let jM = iM[OM][rM];
        return void 0 === jM && (jM = (async () => {
          const iM = await li(MM);
          if (iM && bi(iM.mimeType) && ("none" === rM || iM.mimeType === rM)) return await this._exportImageAsync(MM.name, new Blob([iM.data], {
            type: iM.mimeType
          }));
          let OM = "image/png";
          "none" !== rM && (bi(rM) ? OM = rM : (OM = "image/png", SM.Tools.Warn(`Unsupported media type: ${rM}. Exporting texture as PNG.`)));
          const jM = MM.getSize(),
            aM = await (0, UM.g)(MM),
            PM = await (0, bM.EncodeImageAsync)(aM, jM.width, jM.height, OM);
          return await this._exportImageAsync(MM.name, PM)
        })(), iM[OM][rM] = jM), await jM
      }
      async _exportImageAsync(MM, rM) {
        const iM = this._exporter._images;
        let OM;
        if (this._exporter._shouldUseGlb) {
          OM = {
            name: MM,
            mimeType: rM.type,
            bufferView: void 0
          };
          const iM = await rM.arrayBuffer(),
            SM = this._exporter._bufferManager.createBufferView(new Uint8Array(iM));
          this._exporter._bufferManager.setBufferView(OM, SM)
        } else {
          const jM = MM.replace(/\.\/|\/|\.\\|\\/g, "_"),
            aM = function(MM) {
              switch (MM) {
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
            }(rM.type);
          let PM = jM + aM;
          iM.some((MM => MM.uri === PM)) && (PM = `${jM}_${SM.Tools.RandomId()}${aM}`), OM = {
            name: MM,
            uri: PM
          }, this._exporter._imageData[PM] = rM
        }
        return iM.push(OM), iM.length - 1
      }
      _exportTextureInfo(MM, rM, iM) {
        const OM = this._exporter._textures;
        let SM = OM.findIndex((iM => iM.sampler == rM && iM.source === MM)); - 1 === SM && (SM = OM.length, OM.push({
          source: MM,
          sampler: rM
        }));
        const jM = {
          index: SM
        };
        return iM && (jM.texCoord = iM), jM
      }
      _exportTextureSampler(MM) {
        const rM = this._getTextureSampler(MM),
          iM = this._exporter._samplers,
          OM = iM.findIndex((MM => MM.minFilter === rM.minFilter && MM.magFilter === rM.magFilter && MM.wrapS === rM.wrapS && MM.wrapT === rM.wrapT));
        return -1 !== OM ? OM : (iM.push(rM), iM.length - 1)
      }
    }
    var si = iM(41167),
      Di = iM(41320);
    (0, Di.c)();
    var ki = iM(38044);
    const Zi = OM.Matrix.Compose(new OM.sh(-1, 1, 1), OM.Quaternion.Identity(), OM.sh.Zero());

    function oi(MM, rM) {
      if (!(MM instanceof LM.e)) return !1;
      if (rM) {
        if (!MM.getWorldMatrix().equalsWithEpsilon(OM.Matrix.IdentityReadOnly, ki.d)) return !1
      } else {
        if (!MM.getWorldMatrix().multiplyToRef(Zi, OM.TmpVectors.Matrix[0]).equalsWithEpsilon(OM.Matrix.IdentityReadOnly, ki.d)) return !1
      }
      return !(MM instanceof mM.b && MM.geometry)
    }
    const fi = OM.sh.ZeroReadOnly,
      Yi = OM.Quaternion.Identity(),
      Ni = OM.sh.OneReadOnly,
      Ai = new OM.sh(-1, 1, 1);

    function xi(MM, rM) {
      const {
        byteOffset: iM,
        byteStride: OM,
        type: SM,
        normalized: jM
      } = MM, aM = MM.getSize(), PM = rM.reduce(((MM, rM) => rM.getTotalVertices() > MM ? rM.getTotalVertices() : MM), -Number.MAX_VALUE);
      return {
        byteOffset: iM,
        byteStride: OM,
        componentCount: aM,
        type: SM,
        count: PM * aM,
        normalized: jM,
        totalVertices: PM,
        kind: MM.getKind()
      }
    }

    function vi(MM) {
      switch (MM) {
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

    function Fi(MM) {
      switch (MM) {
        case zM.e.PositionKind:
        case zM.e.NormalKind:
        case zM.e.TangentKind:
        case zM.e.ColorKind:
        case zM.e.MatricesIndicesKind:
        case zM.e.MatricesIndicesExtraKind:
        case zM.e.MatricesWeightsKind:
        case zM.e.MatricesWeightsExtraKind:
        case zM.e.UVKind:
        case zM.e.UV2Kind:
        case zM.e.UV3Kind:
        case zM.e.UV4Kind:
        case zM.e.UV5Kind:
        case zM.e.UV6Kind:
          return !0
      }
      return !1
    }

    function Bi(MM) {
      const rM = Math.sqrt(MM.x * MM.x + MM.y * MM.y + MM.z * MM.z);
      rM > 0 && (MM.x /= rM, MM.y /= rM, MM.z /= rM)
    }

    function Xi(MM) {
      return MM.x *= -1, MM
    }

    function Ii(MM) {
      if (MM.x * MM.x + MM.y * MM.y > .5) {
        const rM = Math.abs(MM.x),
          iM = Math.abs(MM.y);
        if (rM > iM) {
          const iM = Math.sign(MM.x);
          MM.x = rM, MM.y *= -iM, MM.z *= -iM, MM.w *= iM
        } else {
          const rM = Math.sign(MM.y);
          MM.x *= -rM, MM.y = iM, MM.z *= rM, MM.w *= -rM
        }
      } else {
        const rM = Math.abs(MM.z),
          iM = Math.abs(MM.w);
        if (rM > iM) {
          const iM = Math.sign(MM.z);
          MM.x *= -iM, MM.y *= iM, MM.z = rM, MM.w *= -iM
        } else {
          const rM = Math.sign(MM.w);
          MM.x *= rM, MM.y *= -rM, MM.z *= -rM, MM.w = iM
        }
      }
      return MM
    }

    function Ki(MM) {
      MM.iMM(-MM.z, MM.w, MM.x, -MM.y)
    }

    function qi(MM, rM) {
      const iM = OM.sh.FromArrayToRef(rM.translation || [0, 0, 0], 0, OM.TmpVectors.sh[0]),
        SM = OM.Quaternion.FromArrayToRef(rM.rotation || [0, 0, 0, 1], 0, OM.TmpVectors.Quaternion[0]),
        jM = OM.Matrix.ComposeToRef(Ni, SM, iM, OM.TmpVectors.Matrix[0]),
        aM = OM.sh.FromArrayToRef(MM.translation || [0, 0, 0], 0, OM.TmpVectors.sh[2]),
        PM = OM.Quaternion.FromArrayToRef(MM.rotation || [0, 0, 0, 1], 0, OM.TmpVectors.Quaternion[1]),
        nM = OM.Matrix.ComposeToRef(Ni, PM, aM, OM.TmpVectors.Matrix[1]);
      jM.multiplyToRef(nM, nM), nM.decompose(void 0, SM, iM), iM.equalsWithEpsilon(fi, ki.d) ? delete rM.translation : rM.translation = iM.HOM(), SM.equalsWithEpsilon(Yi, ki.d) ? delete rM.rotation : rM.rotation = SM.HOM(), rM.scale && delete rM.scale
    }

    function Ti(MM, rM) {
      if (!(rM instanceof LM.e)) return !1;
      if (!(1 === rM.getChildren().length && 0 === MM.getChildren().length && MM.parent === rM)) return !1;
      const iM = MM.Hk(),
        OM = MM instanceof Di.g && !iM.useRightHandedSystem ? Ai : Ni;
      return !!rM.UL.equalsWithEpsilon(OM, ki.d) || (gM.e.Warn(`Cannot collapse node ${MM.name} into parent node ${rM.name} with modified scaling.`), !1)
    }

    function Vi(MM) {
      if (MM instanceof Array) {
        const rM = new Float32Array(MM);
        return new Uint8Array(rM.buffer, rM.byteOffset, rM.byteLength)
      }
      return ArrayBuffer.isView(MM) ? new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength) : new Uint8Array(MM)
    }

    function ci(MM, rM) {
      for (const [iM, OM] of Object.entries(MM)) {
        const SM = rM[iM];
        (Array.isArray(OM) && Array.isArray(SM) && MO(OM, SM) || OM === SM) && delete MM[iM]
      }
      return MM
    }

    function MO(MM, rM) {
      return MM.length === rM.length && MM.every(((MM, iM) => MM === rM[iM]))
    }
    const rO = new Map([
      [Int8Array, (MM, rM, iM) => MM.setInt8(rM, iM)],
      [Uint8Array, (MM, rM, iM) => MM.setUint8(rM, iM)],
      [Uint8ClampedArray, (MM, rM, iM) => MM.setUint8(rM, iM)],
      [Int16Array, (MM, rM, iM) => MM.setInt16(rM, iM, !0)],
      [Uint16Array, (MM, rM, iM) => MM.setUint16(rM, iM, !0)],
      [Int32Array, (MM, rM, iM) => MM.setInt32(rM, iM, !0)],
      [Uint32Array, (MM, rM, iM) => MM.setUint32(rM, iM, !0)],
      [Float32Array, (MM, rM, iM) => MM.setFloat32(rM, iM, !0)],
      [Float64Array, (MM, rM, iM) => MM.setFloat64(rM, iM, !0)]
    ]);
    class iO {
      writeTypedArray(MM) {
        this._checkGrowBuffer(MM.byteLength);
        const rM = rO.get(MM.constructor);
        for (let iM = 0; iM < MM.length; iM++) rM(this._dataView, this._byteOffset, MM[iM]), this._byteOffset += MM.BYTES_PER_ELEMENT
      }
      constructor(MM) {
        this._data = new Uint8Array(MM), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(MM) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, MM), this._byteOffset++
      }
      writeInt8(MM) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, MM), this._byteOffset++
      }
      writeInt16(MM) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, MM, !0), this._byteOffset += 2
      }
      writeUInt16(MM) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, MM, !0), this._byteOffset += 2
      }
      writeInt32(MM) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, MM, !0), this._byteOffset += 4
      }
      writeUInt32(MM) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, MM, !0), this._byteOffset += 4
      }
      writeFloat32(MM) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, MM, !0), this._byteOffset += 4
      }
      writeFloat64(MM) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, MM, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(MM) {
        const rM = this.byteOffset + MM;
        if (rM > this._data.byteLength) {
          const MM = new Uint8Array(2 * rM);
          MM.set(this._data), this._data = MM, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function OO(MM) {
      return MM % 4 === 0 ? 4 : MM % 2 === 0 ? 2 : 1
    }
    class SO {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(MM) {
        let rM = 0;
        this._bufferViewToData.forEach((MM => {
          rM += MM.byteLength
        }));
        const iM = new iO(rM),
          OM = Array.from(this._bufferViewToData.keys()).sort(((MM, rM) => OO(rM.byteLength) - OO(MM.byteLength)));
        for (const SM of OM) {
          SM.byteOffset = iM.byteOffset, MM.push(SM);
          const rM = MM.length - 1,
            OM = this.getPropertiesWithBufferView(SM);
          for (const MM of OM) MM.bufferView = rM;
          iM.writeTypedArray(this._bufferViewToData.get(SM)), this._bufferViewToData.delete(SM)
        }
        return iM.getOutputData()
      }
      createBufferView(MM, rM) {
        const iM = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: MM.byteLength,
          byteStride: rM
        };
        return this._bufferViewToData.set(iM, MM), iM
      }
      createAccessor(MM, rM, iM, OM, SM, jM, aM) {
        this._verifyBufferView(MM);
        const PM = {
          bufferView: void 0,
          componentType: iM,
          count: OM,
          type: rM,
          min: jM?.min,
          max: jM?.max,
          normalized: aM,
          byteOffset: SM
        };
        return this.setBufferView(PM, MM), this._accessorToBufferView.set(PM, MM), PM
      }
      setBufferView(MM, rM) {
        this._verifyBufferView(rM);
        this.getPropertiesWithBufferView(rM).push(MM)
      }
      removeBufferView(MM) {
        const rM = this.getPropertiesWithBufferView(MM);
        for (const iM of rM) void 0 !== iM.bufferView && delete iM.bufferView;
        this._bufferViewToData.delete(MM), this._bufferViewToProperties.delete(MM), this._accessorToBufferView.forEach(((rM, iM) => {
          rM === MM && (void 0 !== iM.byteOffset && delete iM.byteOffset, this._accessorToBufferView.delete(iM))
        }))
      }
      getBufferView(MM) {
        const rM = this._accessorToBufferView.get(MM);
        return this._verifyBufferView(rM), rM
      }
      getPropertiesWithBufferView(MM) {
        return this._verifyBufferView(MM), this._bufferViewToProperties.set(MM, this._bufferViewToProperties.get(MM) ?? []), this._bufferViewToProperties.get(MM)
      }
      getData(MM) {
        return this._verifyBufferView(MM), this._bufferViewToData.get(MM)
      }
      _verifyBufferView(MM) {
        if (void 0 === MM || !this._bufferViewToData.has(MM)) throw new Error(`BufferView ${MM} not found in BufferManager.`)
      }
    }
    var jO = iM(41323);
    (0, jO.d)();
    var aO = iM(41538);
    (0, aO.i)();
    var PO = iM(41374),
      nO = iM(42200);
    (0, nO.f)();
    let QO = (() => {
      var MM;
      let rM, iM, OM = [],
        SM = [],
        jM = [],
        aM = [];
      return MM = class {
        get influence() {
          return this._influence
        }
        set influence(MM) {
          if (this._influence === MM) return;
          const rM = this._influence;
          this._influence = MM, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === rM || 0 === MM)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(MM) {
          this._animationPropertiesOverride = MM
        }
        constructor(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = MM, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Mi.d, this._onDataLayoutChanged = new Mi.d, this.id = (0, wM.m)(this, OM, void 0), this.morphTargetManager = ((0, wM.m)(this, SM), (0, wM.m)(this, jM, null)), this._animationPropertiesOverride = ((0, wM.m)(this, aM), null), this.id = MM, this.morphTargetManager = PM, this._scene = iM || JM.c.LastCreatedScene, this.influence = rM, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        XaM(MM) {
          const rM = this.hasPositions;
          this._positions = MM, rM !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(MM) {
          const rM = this.hasNormals;
          this._normals = MM, rM !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(MM) {
          const rM = this.hasTangents;
          this._tangents = MM, rM !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(MM) {
          const rM = this.hasUVs;
          this._uvs = MM, rM !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(MM) {
          const rM = this.hasUV2s;
          this._uv2s = MM, rM !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(MM) {
          const rM = this.hasColors;
          this._colors = MM, rM !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const rM = er.b.Clone((() => new MM(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return rM._positions = this._positions, rM._normals = this._normals, rM._tangents = this._tangents, rM._uvs = this._uvs, rM._uv2s = this._uv2s, rM._colors = this._colors, rM
        }
        serialize() {
          const MM = {};
          return MM.name = this.name, MM.influence = this.influence, null != this.id && (MM.id = this.id), MM.uniqueId = this.uniqueId, MM.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (MM.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (MM.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (MM.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (MM.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (MM.colors = Array.prototype.slice.call(this.getColors())), er.b.AppendSerializedAnimations(this, MM), MM
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(rM, iM) {
          let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const SM = new MM(rM.name, rM.influence, iM, OM);
          if (SM.XaM(rM.positions), null != rM.id && (SM.id = rM.id), rM.normals && SM.setNormals(rM.normals), rM.tangents && SM.setTangents(rM.tangents), rM.uvs && SM.setUVs(rM.uvs), rM.uv2s && SM.setUV2s(rM.uv2s), rM.colors && SM.setColors(rM.colors), rM.animations) {
            for (let MM = 0; MM < rM.animations.length; MM++) {
              const iM = rM.animations[MM],
                OM = (0, Ar.b)("BABYLON.Animation");
              OM && SM.animations.push(OM.Parse(iM))
            }
            rM.autoAnimate && iM && iM.beginAnimation(SM, rM.autoAnimateFrom, rM.autoAnimateTo, rM.autoAnimateLoop, rM.autoAnimateSpeed || 1)
          }
          return SM
        }
        static FromMesh(rM, iM, OM) {
          iM || (iM = rM.name);
          const SM = new MM(iM, OM, rM.Hk(), rM.morphTargetManager);
          return SM.XaM(rM.getVerticesData(YM.j.PositionKind)), rM.isVerticesDataPresent(YM.j.NormalKind) && SM.setNormals(rM.getVerticesData(YM.j.NormalKind)), rM.isVerticesDataPresent(YM.j.TangentKind) && SM.setTangents(rM.getVerticesData(YM.j.TangentKind)), rM.isVerticesDataPresent(YM.j.UVKind) && SM.setUVs(rM.getVerticesData(YM.j.UVKind)), rM.isVerticesDataPresent(YM.j.UV2Kind) && SM.setUV2s(rM.getVerticesData(YM.j.UV2Kind)), rM.isVerticesDataPresent(YM.j.ColorKind) && SM.setColors(rM.getVerticesData(YM.j.ColorKind)), SM
        }
      }, (() => {
        const PM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rM = [(0, tM.L)()], iM = [(0, tM.L)()], (0, wM.i)(null, null, rM, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: MM => "id" in MM,
            get: MM => MM.id,
            set: (MM, rM) => {
              MM.id = rM
            }
          },
          metadata: PM
        }, OM, SM), (0, wM.i)(null, null, iM, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: MM => "morphTargetManager" in MM,
            get: MM => MM.morphTargetManager,
            set: (MM, rM) => {
              MM.morphTargetManager = rM
            }
          },
          metadata: PM
        }, jM, aM), PM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PM
        })
      })(), MM
    })();
    var zO, LO = iM(42278),
      mO = iM(41366);
    ! function(MM) {
      MM[MM.INTANGENT = 0] = "INTANGENT", MM[MM.OUTTANGENT = 1] = "OUTTANGENT"
    }(zO || (zO = {}));
    class HO {
      static _IsTransformable(MM) {
        return MM && (MM instanceof LM.e || MM instanceof jO.b || MM instanceof mO.d)
      }
      static _CreateNodeAnimation(MM, rM, iM, OM, jM) {
        if (this._IsTransformable(MM)) {
          const aM = [],
            PM = [],
            nM = rM.getKeys(),
            QM = HO._CalculateMinMaxKeyFrames(nM),
            zM = HO._DeduceInterpolation(nM, iM, OM),
            LM = zM.interpolationType,
            mM = zM.shouldBakeAnimation;
          if (mM ? HO._CreateBakedAnimation(MM, rM, iM, QM.min, QM.max, rM.framePerSecond, jM, aM, PM, QM, OM) : "LINEAR" === LM || "STEP" === LM ? HO._CreateLinearOrStepAnimation(MM, rM, iM, aM, PM, OM) : "CUBICSPLINE" === LM ? HO._CreateCubicSplineAnimation(MM, rM, iM, aM, PM, OM) : HO._CreateBakedAnimation(MM, rM, iM, QM.min, QM.max, rM.framePerSecond, jM, aM, PM, QM, OM), aM.length && PM.length) {
            return {
              inputs: aM,
              outputs: PM,
              samplerInterpolation: LM,
              inputsMin: mM ? QM.min : SM.Tools.FloatRound(QM.min / rM.framePerSecond),
              inputsMax: mM ? QM.max : SM.Tools.FloatRound(QM.max / rM.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(MM) {
        let rM = null,
          iM = "VEC3",
          OM = !1;
        const jM = MM.targetProperty.split(".");
        switch (jM[0]) {
          case "UL":
            rM = "scale";
            break;
          case "position":
            rM = "translation";
            break;
          case "rotation":
            iM = "VEC4", rM = "rotation";
            break;
          case "rotationQuaternion":
            iM = "VEC4", OM = !0, rM = "rotation";
            break;
          case "influence":
            iM = "SCALAR", rM = "weights";
            break;
          default:
            SM.Tools.Error(`Unsupported animatable property ${jM[0]}`)
        }
        return rM ? {
          animationChannelTargetPath: rM,
          dataAccessorType: iM,
          useQuaternion: OM
        } : (SM.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        let LM;
        if (HO._IsTransformable(MM) && MM.animations)
          for (const mM of MM.animations) {
            if (zM && !zM(mM)) continue;
            const SM = HO._DeduceAnimationInfo(mM);
            SM && (LM = {
              name: mM.name,
              samplers: [],
              channels: []
            }, HO._AddAnimation(`${mM.name}`, mM.hasRunningRuntimeAnimations ? rM : LM, MM, mM, SM.dataAccessorType, SM.animationChannelTargetPath, OM, jM, aM, PM, SM.useQuaternion, nM, QM), LM.samplers.length && LM.channels.length && iM.push(LM))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        let LM;
        if (MM instanceof LO.d) {
          const SM = MM.morphTargetManager;
          if (SM)
            for (let mM = 0; mM < SM.numTargets; ++mM) {
              const HM = SM.getTarget(mM);
              for (const hM of HM.animations) {
                if (zM && !zM(hM)) continue;
                const HM = new nO.b(`${hM.name}`, "influence", hM.framePerSecond, hM.dataType, hM.lS, hM.enableBlending),
                  JM = [],
                  dM = hM.getKeys();
                for (let MM = 0; MM < dM.length; ++MM) {
                  const rM = dM[MM];
                  for (let MM = 0; MM < SM.numTargets; ++MM) MM == mM ? JM.push(rM) : JM.push({
                    frame: rM.frame,
                    value: 0
                  })
                }
                HM.setKeys(JM, !0);
                const yM = HO._DeduceAnimationInfo(HM);
                yM && (LM = {
                  name: HM.name,
                  samplers: [],
                  channels: []
                }, HO._AddAnimation(hM.name, hM.hasRunningRuntimeAnimations ? rM : LM, MM, HM, yM.dataAccessorType, yM.animationChannelTargetPath, OM, jM, aM, PM, yM.useQuaternion, nM, QM, SM.numTargets), LM.samplers.length && LM.channels.length && iM.push(LM))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
        let zM;
        if (MM.animationGroups) {
          const LM = MM.animationGroups;
          for (const mM of LM) {
            const LM = new Map,
              HM = new Map,
              hM = new Set,
              JM = mM.to - mM.from;
            zM = {
              name: mM.name,
              channels: [],
              samplers: []
            };
            for (let rM = 0; rM < mM.targetedAnimations.length; ++rM) {
              const QM = mM.targetedAnimations[rM],
                JM = QM.target,
                dM = QM.animation;
              if (nM && !nM(dM)) continue;
              const yM = PM.has(JM);
              if (this._IsTransformable(JM) || 1 === JM.length && this._IsTransformable(JM[0])) {
                const MM = HO._DeduceAnimationInfo(QM.animation);
                if (MM) {
                  const rM = this._IsTransformable(JM) ? JM : this._IsTransformable(JM[0]) ? JM[0] : null;
                  rM && HO._AddAnimation(`${dM.name}`, zM, rM, dM, MM.dataAccessorType, MM.animationChannelTargetPath, iM, OM, SM, jM, MM.useQuaternion, aM, yM)
                }
              } else if (JM instanceof QO || 1 === JM.length && JM[0] instanceof QO) {
                if (HO._DeduceAnimationInfo(QM.animation)) {
                  const rM = JM instanceof QO ? JM : JM[0];
                  if (rM) {
                    const iM = MM.morphTargetManagers.find((MM => {
                      for (let iM = 0; iM < MM.numTargets; ++iM)
                        if (MM.getTarget(iM) === rM) return !0;
                      return !1
                    }));
                    if (iM) {
                      const OM = MM.meshes.find((MM => MM.morphTargetManager === iM));
                      OM && (LM.has(OM) || LM.set(OM, new Map), LM.get(OM)?.set(rM, dM), hM.add(OM), HM.set(OM, dM))
                    }
                  }
                }
              }
            }
            hM.forEach((MM => {
              const rM = MM.morphTargetManager;
              let PM = null;
              const nM = [],
                QM = HM.get(MM).getKeys(),
                hM = QM.length;
              for (let iM = 0; iM < hM; ++iM)
                for (let OM = 0; OM < rM.numTargets; ++OM) {
                  const SM = rM.getTarget(OM),
                    jM = LM.get(MM);
                  if (jM) {
                    const rM = jM.get(SM);
                    rM ? (PM || (PM = new nO.b(`${mM.name}_${MM.name}_MorphWeightAnimation`, "influence", rM.framePerSecond, nO.b.ANIMATIONTYPE_FLOAT, rM.lS, rM.enableBlending)), nM.push(rM.getKeys()[iM])) : nM.push({
                      frame: mM.from + JM / hM * iM,
                      value: SM.influence,
                      inTangent: QM[0].inTangent ? 0 : void 0,
                      outTangent: QM[0].outTangent ? 0 : void 0
                    })
                  }
                }
              PM.setKeys(nM, !0);
              const dM = HO._DeduceAnimationInfo(PM);
              dM && HO._AddAnimation(`${mM.name}_${MM.name}_MorphWeightAnimation`, zM, MM, PM, dM.dataAccessorType, dM.animationChannelTargetPath, iM, OM, SM, jM, dM.useQuaternion, aM, !1, rM?.numTargets)
            })), zM.channels.length && zM.samplers.length && (QM?.set(mM, rM.length), rM.push(zM))
          }
        }
      }
      static _AddAnimation(MM, rM, iM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM) {
        const JM = HO._CreateNodeAnimation(iM, SM, aM, LM, mM);
        let dM, yM, lM, EM, UM, GM;
        if (JM) {
          if (hM) {
            let MM, rM = 0;
            const iM = [];
            for (; JM.inputs.length > 0;) MM = JM.inputs.shift(), rM % hM == 0 && iM.push(MM), rM++;
            JM.inputs = iM
          }
          const MM = PM.get(iM),
            SM = new Float32Array(JM.inputs);
          dM = nM.createBufferView(SM), yM = nM.createAccessor(dM, "SCALAR", 5126, JM.inputs.length, void 0, {
            min: [JM.inputsMin],
            max: [JM.inputsMax]
          }), zM.push(yM), lM = zM.length - 1;
          const QM = new OM.Quaternion,
            LM = new OM.sh,
            mM = new OM.sh,
            CM = iM instanceof jO.b,
            eM = vi(jM),
            bM = new Float32Array(JM.outputs.length * eM);
          JM.outputs.forEach((function(MM, rM) {
            let iM = MM;
            switch (aM) {
              case "translation":
                HM && (OM.sh.FromArrayToRef(MM, 0, mM), Xi(mM), mM.toArray(iM));
                break;
              case "rotation":
                4 === MM.length ? OM.Quaternion.FromArrayToRef(MM, 0, QM) : (iM = new Array(4), OM.sh.FromArrayToRef(MM, 0, LM), OM.Quaternion.FromEulerVectorToRef(LM, QM)), HM && (Ii(QM), CM && Ki(QM)), QM.toArray(iM)
            }
            bM.set(iM, rM * eM)
          })), dM = nM.createBufferView(bM), yM = nM.createAccessor(dM, jM, 5126, JM.outputs.length), zM.push(yM), EM = zM.length - 1, UM = {
            interpolation: JM.samplerInterpolation,
            input: lM,
            output: EM
          }, rM.samplers.push(UM), GM = {
            sampler: rM.samplers.length - 1,
            target: {
              node: MM,
              path: aM
            }
          }, rM.channels.push(GM)
        }
      }
      static _CreateBakedAnimation(MM, rM, iM, jM, aM, PM, nM, QM, zM, LM, mM) {
        let HM;
        const hM = OM.Quaternion.Identity();
        let JM, dM, yM, lM, EM, UM = null,
          GM = null;
        LM.min = SM.Tools.FloatRound(jM / PM);
        const CM = rM.getKeys();
        for (let OM = 0, eM = CM.length; OM < eM; ++OM) {
          if (dM = CM[OM], OM + 1 < eM)
            if (yM = CM[OM + 1], dM.value.equals && dM.value.equals(yM.value) || dM.value === yM.value) {
              if (0 !== OM) continue;
              EM = dM.frame
            } else EM = yM.frame;
          else {
            if (lM = CM[OM - 1], dM.value.equals && dM.value.equals(lM.value) || dM.value === lM.value) continue;
            EM = aM
          }
          if (EM)
            for (let OM = dM.frame; OM <= EM; OM += nM) {
              if (JM = SM.Tools.FloatRound(OM / PM), JM === UM) continue;
              UM = JM, GM = JM;
              const jM = {
                key: 0,
                repeatCount: 0,
                lS: rM.lS
              };
              HM = rM._interpolate(OM, jM), HO._SetInterpolatedValue(MM, HM, JM, rM, iM, hM, QM, zM, mM)
            }
        }
        GM && (LM.max = GM)
      }
      static _ConvertFactorToVector3OrQuaternion(MM, rM, iM, jM, aM) {
        const PM = HO._GetBasePositionRotationOrScale(rM, jM, aM),
          nM = iM.targetProperty.split("."),
          QM = nM ? nM[1] : "",
          zM = aM ? OM.Quaternion.FromArray(PM).normalize() : OM.sh.FromArray(PM);
        switch (QM) {
          case "x":
          case "y":
          case "z":
            zM[QM] = MM;
            break;
          case "w":
            zM.w = MM;
            break;
          default:
            SM.Tools.Error(`glTFAnimation: Unsupported component name "${QM}"!`)
        }
        return zM
      }
      static _SetInterpolatedValue(MM, rM, iM, SM, jM, aM, PM, nM, QM) {
        let zM;
        PM.push(iM), "weights" !== jM ? (SM.dataType === nO.b.ANIMATIONTYPE_FLOAT && (rM = this._ConvertFactorToVector3OrQuaternion(rM, MM, SM, jM, QM)), "rotation" === jM ? (QM ? aM = rM : (zM = rM, OM.Quaternion.RotationYawPitchRollToRef(zM.y, zM.x, zM.z, aM)), nM.push(aM.HOM())) : (zM = rM, nM.push(zM.HOM()))) : nM.push([rM])
      }
      static _CreateLinearOrStepAnimation(MM, rM, iM, OM, SM, jM) {
        for (const aM of rM.getKeys()) OM.push(aM.frame / rM.framePerSecond), HO._AddKeyframeValue(aM, rM, SM, iM, MM, jM)
      }
      static _CreateCubicSplineAnimation(MM, rM, iM, OM, SM, jM) {
        rM.getKeys().forEach((function(aM) {
          OM.push(aM.frame / rM.framePerSecond), HO._AddSplineTangent(zO.INTANGENT, SM, iM, "CUBICSPLINE", aM, jM), HO._AddKeyframeValue(aM, rM, SM, iM, MM, jM), HO._AddSplineTangent(zO.OUTTANGENT, SM, iM, "CUBICSPLINE", aM, jM)
        }))
      }
      static _GetBasePositionRotationOrScale(MM, rM, iM) {
        let SM;
        if ("rotation" === rM)
          if (iM) {
            SM = (MM.rotationQuaternion ?? OM.Quaternion.Identity()).HOM()
          } else {
            SM = (MM.rotation ?? OM.sh.Zero()).HOM()
          }
        else if ("translation" === rM) {
          SM = (MM.position ?? OM.sh.Zero()).HOM()
        } else {
          SM = (MM.UL ?? OM.sh.One()).HOM()
        }
        return SM
      }
      static _AddKeyframeValue(MM, rM, iM, jM, aM, PM) {
        let nM;
        const QM = rM.dataType;
        if (QM === nO.b.ANIMATIONTYPE_VECTOR3) {
          let rM = MM.value.HOM();
          if ("rotation" === jM) {
            const MM = OM.sh.FromArray(rM);
            rM = OM.Quaternion.RotationYawPitchRoll(MM.y, MM.x, MM.z).HOM()
          }
          iM.push(rM)
        } else if (QM === nO.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === jM) iM.push([MM.value]);
          else if (nM = this._ConvertFactorToVector3OrQuaternion(MM.value, aM, rM, jM, PM), nM) {
            if ("rotation" === jM) {
              const MM = PM ? nM : OM.Quaternion.RotationYawPitchRoll(nM.y, nM.x, nM.z).normalize();
              iM.push(MM.HOM())
            }
            iM.push(nM.HOM())
          }
        } else QM === nO.b.ANIMATIONTYPE_QUATERNION ? iM.push(MM.value.normalize().HOM()) : SM.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(MM, rM, iM) {
        let OM, SM, jM = !1;
        if ("rotation" === rM && !iM) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let aM = 0, PM = MM.length; aM < PM; ++aM)
          if (SM = MM[aM], SM.inTangent || SM.outTangent)
            if (OM) {
              if ("CUBICSPLINE" !== OM) {
                OM = "LINEAR", jM = !0;
                break
              }
            } else OM = "CUBICSPLINE";
        else if (OM) {
          if ("CUBICSPLINE" === OM || SM.interpolation && 1 === SM.interpolation && "STEP" !== OM) {
            OM = "LINEAR", jM = !0;
            break
          }
        } else OM = SM.interpolation && 1 === SM.interpolation ? "STEP" : "LINEAR";
        return OM || (OM = "LINEAR"), {
          interpolationType: OM,
          shouldBakeAnimation: jM
        }
      }
      static _AddSplineTangent(MM, rM, iM, SM, jM, aM) {
        let PM;
        const nM = MM === zO.INTANGENT ? jM.inTangent : jM.outTangent;
        if ("CUBICSPLINE" === SM) {
          if ("rotation" === iM)
            if (nM)
              if (aM) PM = nM.HOM();
              else {
                const MM = nM;
                PM = OM.Quaternion.RotationYawPitchRoll(MM.y, MM.x, MM.z).HOM()
              }
          else PM = [0, 0, 0, 0];
          else PM = "weights" === iM ? nM ? [nM] : [0] : nM ? nM.HOM() : [0, 0, 0];
          rM.push(PM)
        }
      }
      static _CalculateMinMaxKeyFrames(MM) {
        let rM = 1 / 0,
          iM = -1 / 0;
        return MM.forEach((function(MM) {
          rM = Math.min(rM, MM.frame), iM = Math.max(iM, MM.frame)
        })), {
          min: rM,
          max: iM
        }
      }
    }

    function hO(MM, rM, iM, jM, aM, PM) {
      const nM = {
          attributes: {},
          influence: MM.influence,
          name: MM.name
        },
        QM = rM.geometry;
      if (!QM) return SM.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), nM;
      const LM = PM ? -1 : 1,
        mM = OM.sh.Zero();
      let HM, hM;
      if (MM.hasPositions) {
        const jM = MM.getPositions(),
          PM = QM.getVerticesData(zM.e.PositionKind);
        if (PM) {
          const MM = new Float32Array(PM.length),
            rM = [1 / 0, 1 / 0, 1 / 0],
            SM = [-1 / 0, -1 / 0, -1 / 0];
          hM = PM.length / 3, HM = 0;
          for (let iM = HM; iM < hM; ++iM) {
            const aM = OM.sh.FromArray(PM, 3 * iM);
            OM.sh.FromArray(jM, 3 * iM).subtractToRef(aM, mM), mM.x *= LM, rM[0] = Math.min(rM[0], mM.x), SM[0] = Math.max(SM[0], mM.x), rM[1] = Math.min(rM[1], mM.y), SM[1] = Math.max(SM[1], mM.y), rM[2] = Math.min(rM[2], mM.z), SM[2] = Math.max(SM[2], mM.z), MM[3 * iM] = mM.x, MM[3 * iM + 1] = mM.y, MM[3 * iM + 2] = mM.z
          }
          const QM = iM.createBufferView(MM, 12),
            zM = iM.createAccessor(QM, "VEC3", 5126, jM.length / 3, 0, {
              min: rM,
              max: SM
            });
          aM.push(zM), nM.attributes.POSITION = aM.length - 1
        } else SM.Tools.Warn(`Morph target positions for mesh ${rM.name} were not exported. Mesh does not have position vertex data`)
      }
      if (MM.hasNormals) {
        const jM = MM.getNormals(),
          PM = QM.getVerticesData(zM.e.NormalKind);
        if (PM) {
          const MM = new Float32Array(PM.length);
          hM = PM.length / 3, HM = 0;
          for (let iM = HM; iM < hM; ++iM) {
            const rM = OM.sh.FromArray(PM, 3 * iM).normalize();
            OM.sh.FromArray(jM, 3 * iM).normalize().subtractToRef(rM, mM), MM[3 * iM] = mM.x * LM, MM[3 * iM + 1] = mM.y, MM[3 * iM + 2] = mM.z
          }
          const rM = iM.createBufferView(MM, 12),
            SM = iM.createAccessor(rM, "VEC3", 5126, jM.length / 3, 0);
          aM.push(SM), nM.attributes.NORMAL = aM.length - 1
        } else SM.Tools.Warn(`Morph target normals for mesh ${rM.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (MM.hasTangents) {
        const jM = MM.getTangents(),
          PM = QM.getVerticesData(zM.e.TangentKind);
        if (PM) {
          hM = PM.length / 4;
          const MM = new Float32Array(3 * hM);
          HM = 0;
          for (let iM = HM; iM < hM; ++iM) {
            const rM = OM.sh.FromArray(PM, 4 * iM);
            Bi(rM);
            const SM = OM.sh.FromArray(jM, 3 * iM);
            Bi(SM), SM.subtractToRef(rM, mM), MM[3 * iM] = mM.x * LM, MM[3 * iM + 1] = mM.y, MM[3 * iM + 2] = mM.z
          }
          const rM = iM.createBufferView(MM, 12),
            SM = iM.createAccessor(rM, "VEC3", 5126, hM, 0);
          aM.push(SM), nM.attributes.TANGENT = aM.length - 1
        } else SM.Tools.Warn(`Morph target tangents for mesh ${rM.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (MM.hasColors) {
        const jM = MM.getColors(),
          PM = QM.getVerticesData(zM.e.ColorKind),
          LM = QM.getVertexBuffer(zM.e.ColorKind);
        if (PM && LM) {
          const MM = LM.getSize();
          hM = PM.length / MM;
          const rM = new Float32Array(hM * MM);
          HM = 0;
          for (let iM = HM; iM < hM; ++iM)
            if (3 === MM) {
              const SM = OM.sh.FromArray(PM, iM * MM);
              OM.sh.FromArray(jM, iM * MM).subtractToRef(SM, mM), rM[3 * iM] = mM.x, rM[3 * iM + 1] = mM.y, rM[3 * iM + 2] = mM.z
            } else if (4 === MM) {
            const SM = new OM.Vector4,
              aM = OM.Vector4.FromArray(PM, iM * MM);
            OM.Vector4.FromArray(jM, iM * MM).subtractToRef(aM, SM), rM[4 * iM] = SM.x, rM[4 * iM + 1] = SM.y, rM[4 * iM + 2] = SM.z, rM[4 * iM + 3] = SM.w
          } else SM.Tools.Warn(`Unsupported number of components for color attribute: ${MM}`);
          const QM = iM.createBufferView(rM, 4 * MM),
            zM = iM.createAccessor(QM, 3 === MM ? "VEC3" : "VEC4", 5126, hM, 0);
          aM.push(zM), nM.attributes.COLOR_0 = aM.length - 1
        } else SM.Tools.Warn(`Morph target colors for mesh ${rM.name} were not exported. Mesh does not have colors vertex data`)
      }
      return nM
    }
    var JO = iM(44235);
    class dO {}
    dO.DEFAULT_COLOR = BM.d.White(), dO.DEFAULT_WIDTH_ATTENUATED = 1, dO.DEFAULT_WIDTH = .1;
    var yO = iM(42196);
    class lO {
      constructor(MM) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = MM
      }
      moveTo(MM, rM) {
        this._currentPath = new yO.g(MM, rM), this._tempPaths.push(this._currentPath)
      }
      lineTo(MM, rM) {
        this._currentPath.addLineTo(MM, rM)
      }
      quadraticCurveTo(MM, rM, iM, OM) {
        this._currentPath.addQuadraticCurveTo(MM, rM, iM, OM, this._resolution)
      }
      bezierCurveTo(MM, rM, iM, OM, SM, jM) {
        this._currentPath.addBezierCurveTo(MM, rM, iM, OM, SM, jM, this._resolution)
      }
      extractHoles() {
        for (const MM of this._tempPaths) MM.area() > 0 ? this._holes.push(MM) : this._paths.push(MM);
        if (!this._paths.length && this._holes.length) {
          const MM = this._holes;
          this._holes = this._paths, this._paths = MM
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

    function EO(MM, rM, iM, OM, SM, jM) {
      const aM = jM.glyphs[MM] || jM.glyphs["?"];
      if (!aM) return null;
      const PM = new lO(SM);
      if (aM.o) {
        const MM = aM.o.split(" ");
        for (let SM = 0, jM = MM.length; SM < jM;) {
          switch (MM[SM++]) {
            case "m": {
              const jM = parseInt(MM[SM++]) * rM + iM,
                aM = parseInt(MM[SM++]) * rM + OM;
              PM.moveTo(jM, aM);
              break
            }
            case "l": {
              const jM = parseInt(MM[SM++]) * rM + iM,
                aM = parseInt(MM[SM++]) * rM + OM;
              PM.lineTo(jM, aM);
              break
            }
            case "q": {
              const jM = parseInt(MM[SM++]) * rM + iM,
                aM = parseInt(MM[SM++]) * rM + OM,
                nM = parseInt(MM[SM++]) * rM + iM,
                QM = parseInt(MM[SM++]) * rM + OM;
              PM.quadraticCurveTo(nM, QM, jM, aM);
              break
            }
            case "b": {
              const jM = parseInt(MM[SM++]) * rM + iM,
                aM = parseInt(MM[SM++]) * rM + OM,
                nM = parseInt(MM[SM++]) * rM + iM,
                QM = parseInt(MM[SM++]) * rM + OM,
                zM = parseInt(MM[SM++]) * rM + iM,
                LM = parseInt(MM[SM++]) * rM + OM;
              PM.bezierCurveTo(nM, QM, zM, LM, jM, aM);
              break
            }
          }
        }
      }
      return PM.extractHoles(), {
        offsetX: aM.ha * rM,
        shapePath: PM
      }
    }

    function UO(MM, rM, iM, OM) {
      const SM = Array.from(MM),
        jM = rM / OM.resolution,
        aM = (OM.boundingBox.yMax - OM.boundingBox.yMin + OM.underlineThickness) * jM,
        PM = [];
      let nM = 0,
        QM = 0;
      for (let zM = 0; zM < SM.length; zM++) {
        const MM = SM[zM];
        if ("\n" === MM) nM = 0, QM -= aM;
        else {
          const rM = EO(MM, jM, nM, QM, iM, OM);
          rM && (nM += rM.offsetX, PM.push(rM.shapePath))
        }
      }
      return PM
    }
    class GO {
      static ConvertPoints(MM, rM) {
        if (MM.length && Array.isArray(MM) && "number" === typeof MM[0]) return [MM];
        if (MM.length && Array.isArray(MM[0]) && "number" === typeof MM[0][0]) return MM;
        if (MM.length && !Array.isArray(MM[0]) && MM[0] instanceof fM.q) {
          const rM = [];
          for (let iM = 0; iM < MM.length; iM++) {
            const OM = MM[iM];
            rM.push(OM.x, OM.y, OM.z)
          }
          return [rM]
        }
        if (MM.length > 0 && Array.isArray(MM[0]) && MM[0].length > 0 && MM[0][0] instanceof fM.q) {
          const rM = [],
            iM = MM;
          for (const MM of iM) rM.push(MM.flatMap((MM => [MM.x, MM.y, MM.z])));
          return rM
        }
        if (MM instanceof Float32Array) {
          if (rM?.floatArrayStride) {
            const iM = [],
              OM = 3 * rM.floatArrayStride;
            for (let rM = 0; rM < MM.length; rM += OM) {
              const SM = new Array(OM);
              for (let iM = 0; iM < OM; iM++) SM[iM] = MM[rM + iM];
              iM.push(SM)
            }
            return iM
          }
          return [Array.from(MM)]
        }
        if (MM.length && MM[0] instanceof Float32Array) {
          const rM = [];
          for (const iM of MM) rM.push(Array.from(iM));
          return rM
        }
        return []
      }
      static OmitZeroLengthPredicate(MM, rM, iM) {
        const OM = [];
        return rM.subtract(MM).lengthSquared() > 0 && OM.push([MM, rM]), iM.subtract(rM).lengthSquared() > 0 && OM.push([rM, iM]), MM.subtract(iM).lengthSquared() > 0 && OM.push([iM, MM]), 0 === OM.length ? null : OM
      }
      static OmitDuplicatesPredicate(MM, rM, iM, OM) {
        const SM = [];
        return GO._SearchInPoints(MM, rM, OM) || SM.push([MM, rM]), GO._SearchInPoints(rM, iM, OM) || SM.push([rM, iM]), GO._SearchInPoints(iM, MM, OM) || SM.push([iM, MM]), 0 === SM.length ? null : SM
      }
      static _SearchInPoints(MM, rM, iM) {
        for (const OM of iM)
          for (let iM = 0; iM < OM.length; iM++)
            if (OM[iM]?.equals(MM) && (OM[iM + 1]?.equals(rM) || OM[iM - 1]?.equals(rM))) return !0;
        return !1
      }
      static MeshesToLines(MM, rM) {
        const iM = [];
        for (let OM = 0; OM < MM.length; OM++) {
          const SM = MM[OM],
            jM = SM.getVerticesData(YM.j.PositionKind),
            aM = SM.hOM();
          if (jM && aM)
            for (let MM = 0, PM = 0; MM < aM.length; MM++) {
              const nM = 3 * aM[PM++],
                QM = 3 * aM[PM++],
                zM = 3 * aM[PM++],
                LM = new fM.q(jM[nM], jM[nM + 1], jM[nM + 2]),
                mM = new fM.q(jM[QM], jM[QM + 1], jM[QM + 2]),
                HM = new fM.q(jM[zM], jM[zM + 1], jM[zM + 2]);
              if (rM) {
                const PM = rM(LM, mM, HM, iM, MM, nM, SM, OM, jM, aM);
                if (PM)
                  for (const MM of PM) iM.push(MM)
              } else iM.push([LM, mM], [mM, HM], [HM, LM])
            }
        }
        return iM
      }
      static ToVector3Array(MM) {
        if (Array.isArray(MM[0])) {
          const rM = [],
            iM = MM;
          for (const MM of iM) {
            const iM = [];
            for (let rM = 0; rM < MM.length; rM += 3) iM.push(new fM.q(MM[rM], MM[rM + 1], MM[rM + 2]));
            rM.push(iM)
          }
          return rM
        }
        const rM = MM,
          iM = [];
        for (let OM = 0; OM < rM.length; OM += 3) iM.push(new fM.q(rM[OM], rM[OM + 1], rM[OM + 2]));
        return iM
      }
      static ToNumberArray(MM) {
        return MM.flatMap((MM => [MM.x, MM.y, MM.z]))
      }
      static GetPointsCountInfo(MM) {
        const rM = new Array(MM.length);
        let iM = 0;
        for (let OM = MM.length; OM--;) rM[OM] = MM[OM].length / 3, iM += rM[OM];
        return {
          total: iM,
          counts: rM
        }
      }
      static GetLineLength(MM) {
        if (0 === MM.length) return 0;
        let rM;
        rM = "number" === typeof MM[0] ? GO.ToVector3Array(MM) : MM;
        const iM = fM.l.sh[0];
        let OM = 0;
        for (let SM = 0; SM < rM.length - 1; SM++) {
          const MM = rM[SM];
          OM += rM[SM + 1].subtractToRef(MM, iM).length()
        }
        return OM
      }
      static GetLineLengthArray(MM, rM) {
        const iM = rM ? new Float32Array(rM, 0, MM.length / 3) : new Float32Array(MM.length / 3);
        let OM = 0;
        for (let SM = 0, jM = MM.length / 3 - 1; SM < jM; SM++) {
          let rM = MM[3 * SM + 0],
            jM = MM[3 * SM + 1],
            aM = MM[3 * SM + 2];
          rM -= MM[3 * SM + 3], jM -= MM[3 * SM + 4], aM -= MM[3 * SM + 5];
          OM += Math.sqrt(rM * rM + jM * jM + aM * aM), iM[SM + 1] = OM
        }
        return iM
      }
      static SegmentizeSegmentByCount(MM, rM, iM) {
        const OM = [],
          SM = rM.subtract(MM),
          jM = fM.l.sh[0];
        jM.P_(iM);
        const aM = fM.l.sh[1];
        SM.divideToRef(jM, aM);
        let PM = MM.clone();
        OM.push(PM);
        for (let nM = 0; nM < iM; nM++) PM = PM.clone(), OM.push(PM.addInPlace(aM));
        return OM
      }
      static SegmentizeLineBySegmentLength(MM, rM) {
        const iM = MM[0] instanceof fM.q ? GO.GetLineSegments(MM) : "number" === typeof MM[0] ? GO.GetLineSegments(GO.ToVector3Array(MM)) : MM,
          OM = [];
        for (const SM of iM)
          if (SM.length > rM) {
            const MM = GO.SegmentizeSegmentByCount(SM.point1, SM.point2, Math.ceil(SM.length / rM));
            for (const rM of MM) OM.push(rM)
          } else OM.push(SM.point1), OM.push(SM.point2);
        return OM
      }
      static SegmentizeLineBySegmentCount(MM, rM) {
        const iM = "number" === typeof MM[0] ? GO.ToVector3Array(MM) : MM,
          OM = GO.GetLineLength(iM) / rM;
        return GO.SegmentizeLineBySegmentLength(iM, OM)
      }
      static GetLineSegments(MM) {
        const rM = [];
        for (let iM = 0; iM < MM.length - 1; iM++) {
          const OM = MM[iM],
            SM = MM[iM + 1],
            jM = SM.subtract(OM).length();
          rM.push({
            point1: OM,
            point2: SM,
            length: jM
          })
        }
        return rM
      }
      static GetMinMaxSegmentLength(MM) {
        const rM = GO.GetLineSegments(MM).sort((MM => MM.length));
        return {
          min: rM[0].length,
          max: rM[rM.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SM = rM * iM;
        let jM = 0,
          aM = 0;
        const PM = MM.length;
        for (let QM = 0; QM < PM; QM++) {
          if (SM <= jM + MM[QM].length) {
            aM = QM;
            break
          }
          jM += MM[QM].length
        }
        const nM = (SM - jM) / MM[aM].length;
        return MM[aM].point2.subtractToRef(MM[aM].point1, fM.l.sh[0]), fM.l.sh[0].scaleToRef(nM, fM.l.sh[1]), OM || fM.l.sh[1].addInPlace(MM[aM].point1), fM.l.sh[1].clone()
      }
      static GetCircleLinePoints(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM,
          SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / rM;
        const jM = [];
        for (let aM = 0; aM <= rM; aM++) jM.push(new fM.q(Math.cos(aM * SM) * MM, Math.sin(aM * SM) * OM, iM));
        return jM
      }
      static GetBezierLinePoints(MM, rM, iM, OM) {
        return yO.c.CreateQuadraticBezier(MM, rM, iM, OM).getPoints().flatMap((MM => [MM.x, MM.y, MM.z]))
      }
      static GetArrowCap(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [MM.clone(), MM.add(rM.multiplyByFloats(iM, iM, iM))],
          widths: [OM, SM, jM, aM]
        }
      }
      static GetPointsFromText(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const aM = [],
          PM = UO(MM, rM, iM, OM);
        for (const nM of PM) {
          for (const MM of nM.paths) {
            const rM = [],
              iM = MM.getPoints();
            for (const MM of iM) rM.push(MM.x, MM.y, SM);
            aM.push(rM)
          }
          if (jM)
            for (const MM of nM.holes) {
              const rM = [],
                iM = MM.getPoints();
              for (const MM of iM) rM.push(MM.x, MM.y, SM);
              aM.push(rM)
            }
        }
        return aM
      }
      static Color3toRGBAUint8(MM) {
        const rM = new Uint8Array(4 * MM.length);
        for (let iM = 0, OM = 0; iM < MM.length; iM++) rM[OM++] = 255 * MM[iM].r, rM[OM++] = 255 * MM[iM].g, rM[OM++] = 255 * MM[iM].b, rM[OM++] = 255;
        return rM
      }
      static CreateColorsTexture(MM, rM, iM, OM) {
        const SM = OM.ph().getCaps().maxTextureSize ?? 1,
          jM = rM.length > SM ? SM : rM.length,
          aM = Math.ceil(rM.length / SM);
        aM > 1 && (rM = [...rM, ...Array(jM * aM - rM.length).fill(rM[0])]);
        const PM = GO.Color3toRGBAUint8(rM),
          nM = new CM.e(PM, jM, aM, zi.d.TEXTUREFORMAT_RGBA, OM, !1, !0, iM);
        return nM.name = MM, nM
      }
      static PrepareEmptyColorsTexture(MM) {
        if (!dO.EmptyColorsTexture) {
          const rM = new Uint8Array(4);
          dO.EmptyColorsTexture = new CM.e(rM, 1, 1, zi.d.TEXTUREFORMAT_RGBA, MM, !1, !1, CM.e.NEAREST_NEAREST), dO.EmptyColorsTexture.name = "grlEmptyColorsTexture", dO.EmptyColorsTexture.Rk.addOnce((() => {
            dO.EmptyColorsTexture = null
          }))
        }
        return dO.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        dO.EmptyColorsTexture?.dispose(), dO.EmptyColorsTexture = null
      }
      static BooleanToNumber(MM) {
        return MM ? 1 : 0
      }
    }
    class CO extends NM.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class eO extends AM.b {
      isCompatible(MM) {
        return !0
      }
      constructor(MM, rM, iM) {
        iM = iM || {
          color: dO.DEFAULT_COLOR
        };
        const OM = new CO;
        OM.GREASED_LINE_HAS_COLOR = !!iM.color && !iM.useColors, OM.GREASED_LINE_SIZE_ATTENUATION = iM.sizeAttenuation ?? !1, OM.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === iM.colorDistributionType, OM.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (rM ?? MM.Hk()).useRightHandedSystem, OM.GREASED_LINE_CAMERA_FACING = iM.cameraFacing ?? !0, super(MM, eO.GREASED_LINE_MATERIAL_NAME, 200, OM, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = iM?.forceGLSL || eO.ForceGLSL, this._scene = rM ?? MM.Hk(), this._engine = this._scene.ph(), this._cameraFacing = iM.cameraFacing ?? !0, this.visibility = iM.visibility ?? 1, this.useDash = iM.useDash ?? !1, this.dashRatio = iM.dashRatio ?? .5, this.dashOffset = iM.dashOffset ?? 0, this.width = iM.width ? iM.width : iM.sizeAttenuation ? dO.DEFAULT_WIDTH_ATTENUATED : dO.DEFAULT_WIDTH, this._sizeAttenuation = iM.sizeAttenuation ?? !1, this.colorMode = iM.colorMode ?? 0, this._color = iM.color ?? null, this.useColors = iM.useColors ?? !1, this._colorsDistributionType = iM.colorDistributionType ?? 0, this.colorsSampling = iM.colorsSampling ?? CM.e.NEAREST_NEAREST, this._colors = iM.colors ?? null, this.dashCount = iM.dashCount ?? 1, this.resolution = iM.resolution ?? new fM.o(this._engine.getRenderWidth(), this._engine.getRenderHeight()), iM.colorsTexture ? this.colorsTexture = iM.colorsTexture : this._colors ? this.colorsTexture = GO.CreateColorsTexture(`${MM.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? dO.DEFAULT_COLOR, GO.PrepareEmptyColorsTexture(this._scene)), this._engine.Rk.add((() => {
          GO.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(MM) {
        MM.push("grl_offsets"), MM.push("grl_widths"), MM.push("grl_colorPointers"), MM.push("grl_counters"), this._cameraFacing ? (MM.push("grl_previousAndSide"), MM.push("grl_nextAndCounters")) : MM.push("grl_slopes")
      }
      getSamplers(MM) {
        MM.push("grl_colors")
      }
      getActiveTextures(MM) {
        this.colorsTexture && MM.push(this.colorsTexture)
      }
      getUniforms() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const rM = [{
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
        return this._cameraFacing && rM.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === MM && rM.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: rM,
          vertex: this._cameraFacing && this._isGLSL(MM) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(MM) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(MM) {
        if (this._cameraFacing) {
          MM.p_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || MM.p_("viewProjection", this._scene.getTransformMatrix());
          const rM = fM.l.Vector4[0];
          rM.x = this._aspect, rM.y = this._resolution.x, rM.z = this._resolution.y, rM.w = this.width, MM.updateVector4("grl_aspect_resolution_lineWidth", rM)
        }
        const rM = fM.l.Vector4[0];
        rM.x = GO.BooleanToNumber(this.useDash), rM.y = this._dashArray, rM.z = this.dashOffset, rM.w = this.dashRatio, MM.updateVector4("grl_dashOptions", rM);
        const iM = fM.l.Vector4[1];
        iM.x = this.colorMode, iM.y = this.visibility, iM.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, iM.w = GO.BooleanToNumber(this.useColors), MM.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", iM), this._color && MM.updateColor3("grl_singleColor", this._color);
        const OM = this.colorsTexture ?? dO.EmptyColorsTexture;
        MM.setTexture("grl_colors", OM), MM.updateFloat2("grl_textureSize", OM?.getSize().width ?? 1, OM?.getSize().height ?? 1)
      }
      prepareDefines(MM, rM, iM) {
        MM.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, MM.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, MM.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, MM.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = rM.useRightHandedSystem, MM.GREASED_LINE_CAMERA_FACING = this._cameraFacing, MM.GREASED_LINE_USE_OFFSETS = !!iM.offsets
      }
      getClassName() {
        return eO.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(rM) ? function(MM, rM) {
          if ("vertex" === MM) {
            const MM = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return rM && (MM["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), MM
          }
          return "fragment" === MM ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(MM, this._cameraFacing) : function(MM, rM) {
          if ("vertex" === MM) {
            const MM = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return rM && (MM["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), MM
          }
          return "fragment" === MM ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(MM, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(MM) {
        this.setColors(MM)
      }
      setColors(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = this._colors?.length ?? 0;
        if (this._colors = MM, null !== MM && 0 !== MM.length) {
          if (!rM || iM)
            if (this.colorsTexture && OM === MM.length && !iM) {
              const rM = GO.Color3toRGBAUint8(MM);
              this.colorsTexture.update(rM)
            } else this.colorsTexture?.dispose(), this.colorsTexture = GO.CreateColorsTexture(`${this._material.name}-colors-texture`, MM, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(MM) {
        this._dashCount = MM, this._dashArray = 1 / MM
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(MM) {
        this._sizeAttenuation = MM, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(MM) {
        this.setColor(MM)
      }
      setColor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== MM || null !== this._color && null === MM ? (this._color = MM, rM || this.markAllDefinesAsDirty()) : this._color = MM
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(MM) {
        this._colorsDistributionType = MM, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(MM) {
        this._aspect = MM.x / MM.y, this._resolution = MM
      }
      serialize() {
        const MM = super.serialize(),
          rM = {
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
        return this._colors && (rM.colors = this._colors), this._color && (rM.color = this._color), MM.greasedLineMaterialOptions = rM, MM
      }
      parse(MM, rM, iM) {
        super.parse(MM, rM, iM);
        const OM = MM.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), OM.color && this.setColor(OM.color, !0), OM.colorDistributionType && (this.colorsDistributionType = OM.colorDistributionType), OM.colors && (this.colors = OM.colors), OM.colorsSampling && (this.colorsSampling = OM.colorsSampling), OM.colorMode && (this.colorMode = OM.colorMode), OM.useColors && (this.useColors = OM.useColors), OM.visibility && (this.visibility = OM.visibility), OM.useDash && (this.useDash = OM.useDash), OM.dashCount && (this.dashCount = OM.dashCount), OM.dashRatio && (this.dashRatio = OM.dashRatio), OM.dashOffset && (this.dashOffset = OM.dashOffset), OM.width && (this.width = OM.width), OM.sizeAttenuation && (this.sizeAttenuation = OM.sizeAttenuation), OM.resolution && (this.resolution = OM.resolution), this.colors ? this.colorsTexture = GO.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, rM) : GO.PrepareEmptyColorsTexture(rM), this.markAllDefinesAsDirty()
      }
      copyTo(MM) {
        const rM = MM;
        rM.colorsTexture?.dispose(), this._colors && (rM.colorsTexture = GO.CreateColorsTexture(`${rM._material.name}-colors-texture`, this._colors, rM.colorsSampling, this._scene)), rM.setColor(this.color, !0), rM.colorsDistributionType = this.colorsDistributionType, rM.colorsSampling = this.colorsSampling, rM.colorMode = this.colorMode, rM.useColors = this.useColors, rM.visibility = this.visibility, rM.useDash = this.useDash, rM.dashCount = this.dashCount, rM.dashRatio = this.dashRatio, rM.dashOffset = this.dashOffset, rM.width = this.width, rM.sizeAttenuation = this.sizeAttenuation, rM.resolution = this.resolution, rM.markAllDefinesAsDirty()
      }
      _isGLSL(MM) {
        return 0 === MM || this._forceGLSL
      }
    }
    eO.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", eO.ForceGLSL = !1;
    var bO = iM(41502),
      wO = iM(41508),
      tO = iM(39705),
      gO = iM(41556),
      uO = iM(40947);
    class RO extends gO.n {
      constructor(MM, rM, OM) {
        const SM = rM.ph(),
          jM = SM.isWebGPU && !(OM.forceGLSL || RO.ForceGLSL),
          aM = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        rM.useRightHandedSystem && aM.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const PM = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        OM.cameraFacing ? (aM.push("GREASED_LINE_CAMERA_FACING"), PM.push("grl_previousAndSide", "grl_nextAndCounters")) : (PM.push("grl_slopes"), PM.push("grl_counters"));
        const nM = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (jM || nM.push("world", "viewProjection", "view", "projection"), super(MM, rM, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: jM ? ["Scene", "Mesh"] : void 0,
            attributes: PM,
            uniforms: nM,
            samplers: jM ? [] : ["grlColors"],
            defines: aM,
            extraInitializationsAsync: async () => {
              jM ? await Promise.all([iM.e(643).then((() => iM(64502))), iM.e(699).then((() => iM(64504)))]) : await Promise.all([iM.e(636).then((() => iM(64511))), iM.e(700).then((() => iM(64515)))])
            },
            shaderLanguage: jM ? 1 : 0
          }), this._color = BM.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, OM = OM || {
            color: dO.DEFAULT_COLOR
          }, this.visibility = OM.visibility ?? 1, this.useDash = OM.useDash ?? !1, this.dashRatio = OM.dashRatio ?? .5, this.dashOffset = OM.dashOffset ?? 0, this.dashCount = OM.dashCount ?? 1, this.width = OM.width ? OM.width : OM.sizeAttenuation && OM.cameraFacing ? dO.DEFAULT_WIDTH_ATTENUATED : dO.DEFAULT_WIDTH, this.sizeAttenuation = OM.sizeAttenuation ?? !1, this.color = OM.color ?? BM.d.White(), this.useColors = OM.useColors ?? !1, this.colorsDistributionType = OM.colorDistributionType ?? 0, this.colorsSampling = OM.colorsSampling ?? CM.e.NEAREST_NEAREST, this.colorMode = OM.colorMode ?? 0, this._colors = OM.colors ?? null, this._cameraFacing = OM.cameraFacing ?? !0, this.resolution = OM.resolution ?? new fM.o(SM.getRenderWidth(), SM.getRenderHeight()), OM.colorsTexture ? this.colorsTexture = OM.colorsTexture : this._colors ? this.colorsTexture = GO.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, rM) : (this._color = this._color ?? dO.DEFAULT_COLOR, this.colorsTexture = GO.PrepareEmptyColorsTexture(rM)), jM) {
          const MM = new uO.d;
          MM.setParameters(), MM.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", MM)
        }
        SM.Rk.add((() => {
          GO.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== dO.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new fM.o(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(MM) {
        this.setColors(MM)
      }
      setColors(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const OM = this._colors?.length ?? 0;
        if (this._colors = MM, null !== MM && 0 !== MM.length) {
          if (!rM || iM)
            if (this._colorsTexture && OM === MM.length && !iM) {
              const rM = GO.Color3toRGBAUint8(MM);
              this._colorsTexture.update(rM)
            } else this._colorsTexture && this._colorsTexture !== dO.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = GO.CreateColorsTexture(`${this.name}-colors-texture`, MM, this.colorsSampling, this.Hk())
        } else {
          this._colorsTexture && this._colorsTexture !== dO.EmptyColorsTexture && this._colorsTexture.dispose();
          const MM = this.Hk();
          MM && (this.colorsTexture = GO.PrepareEmptyColorsTexture(MM))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(MM) {
        this._colorsTexture = MM, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(MM) {
        this._width = MM, this.setFloat("grlWidth", MM)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(MM) {
        this._useColors = MM, this.setFloat("grlUseColors", GO.BooleanToNumber(MM))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(MM) {
        this._colorsSampling = MM
      }
      get visibility() {
        return this._visibility
      }
      set visibility(MM) {
        this._visibility = MM, this.setFloat("grlVisibility", MM)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(MM) {
        this._useDash = MM, this.setFloat("grlUseDash", GO.BooleanToNumber(MM))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(MM) {
        this._dashOffset = MM, this.setFloat("grlDashOffset", MM)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(MM) {
        this._dashRatio = MM, this.setFloat("grlDashRatio", MM)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(MM) {
        this._dashCount = MM, this._dashArray = 1 / MM, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(MM) {
        this._sizeAttenuation = MM, this.setFloat("grlSizeAttenuation", GO.BooleanToNumber(MM))
      }
      get color() {
        return this._color
      }
      set color(MM) {
        this.setColor(MM)
      }
      setColor(MM) {
        MM = MM ?? dO.DEFAULT_COLOR, this._color = MM, this.setColor3("grlColor", MM)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(MM) {
        this._colorsDistributionType = MM, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(MM) {
        this._colorMode = MM, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(MM) {
        this._resolution = MM, this.setVector2("grlResolution", MM), this.setFloat("grlAspect", MM.x / MM.y)
      }
      serialize() {
        const MM = super.serialize(),
          rM = {
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
        return this._colors && (rM.colors = this._colors), MM.greasedLineMaterialOptions = rM, MM
      }
      parse(MM, rM, iM) {
        const OM = MM.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), OM.color && (this.color = OM.color), OM.colorDistributionType && (this.colorsDistributionType = OM.colorDistributionType), OM.colorsSampling && (this.colorsSampling = OM.colorsSampling), OM.colorMode && (this.colorMode = OM.colorMode), OM.useColors && (this.useColors = OM.useColors), OM.visibility && (this.visibility = OM.visibility), OM.useDash && (this.useDash = OM.useDash), OM.dashCount && (this.dashCount = OM.dashCount), OM.dashRatio && (this.dashRatio = OM.dashRatio), OM.dashOffset && (this.dashOffset = OM.dashOffset), OM.width && (this.width = OM.width), OM.sizeAttenuation && (this.sizeAttenuation = OM.sizeAttenuation), OM.resolution && (this.resolution = OM.resolution), OM.colors ? this.colorsTexture = GO.CreateColorsTexture(`${this.name}-colors-texture`, OM.colors, this.colorsSampling, this.Hk()) : this.colorsTexture = GO.PrepareEmptyColorsTexture(rM), this._cameraFacing = OM.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var pO, WO, sO;
    RO.ForceGLSL = !1,
      function(MM) {
        MM[MM.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", MM[MM.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(pO || (pO = {})),
      function(MM) {
        MM[MM.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", MM[MM.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", MM[MM.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(WO || (WO = {})),
      function(MM) {
        MM[MM.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", MM[MM.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", MM[MM.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", MM[MM.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", MM[MM.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(sO || (sO = {}));
    class DO extends bO.d {
      constructor(MM, rM, iM) {
        super(MM, rM, null, null, !1, !1), this.name = MM, this._options = iM, this._lazy = !1, this._updatable = !1, this._engine = rM.ph(), this._lazy = iM.lazy ?? !1, this._updatable = iM.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = iM.colorPointers ?? [], this._widths = iM.widths ?? new Array(iM.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(MM) {
        let rM = 0;
        for (const OM of this._points) rM += OM.length;
        const iM = rM / 3 * 2 - this._widths.length;
        for (let OM = 0; OM < iM; OM++) this._widths.push(MM)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.kh && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(MM, rM) {
        for (const iM of MM) this._points.push(iM);
        this._lazy || this.setPoints(this._points, rM)
      }
      dispose(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(MM, rM)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(MM) {
        this._uvs = MM instanceof Float32Array ? MM : new Float32Array(MM), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(MM) {
        this.material instanceof RO && this.material.setDefine("GREASED_LINE_USE_OFFSETS", MM?.length > 0), this._offsets = MM, this._offsetsBuffer ? this._offsetsBuffer.update(MM) : this._createOffsetsBuffer(MM)
      }
      get widths() {
        return this._widths
      }
      set widths(MM) {
        this._widths = MM, this._lazy || this._widthsBuffer && this._widthsBuffer.update(MM)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(MM) {
        this._colorPointers = MM, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(MM)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof RO) return this.material;
        const MM = this.material?.pluginManager?.getPlugin(eO.GREASED_LINE_MATERIAL_NAME);
        return MM || void 0
      }
      get points() {
        const MM = [];
        return tO.b.DeepCopy(this._points, MM), MM
      }
      setPoints(MM, rM) {
        this._points = GO.ConvertPoints(MM, rM?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), rM?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, rM)
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
      serialize(MM) {
        super.serialize(MM), MM.type = this.getClassName(), MM.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = new wO.d;
        return rM.positions = this._vertexPositions, rM.indices = this._indices, rM.uvs = this._uvs, MM && (rM.normals = [], wO.d.ComputeNormals(this._vertexPositions, this._indices, rM.normals)), rM.applyToMesh(this, this._options.updatable), rM
      }
      _createOffsetsBuffer(MM) {
        const rM = this._scene.ph(),
          iM = new YM.d(rM, MM, this._updatable, 3);
        this.setVerticesBuffer(iM.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = iM
      }
    }
    class kO {
      constructor(MM, rM) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = MM, this.wasAddedByNoopNode = rM
      }
      getIndicesAccessor(MM, rM, iM, OM, SM) {
        return this._indicesAccessorMap.get(MM)?.get(rM)?.get(iM)?.get(OM)?.get(SM)
      }
      setIndicesAccessor(MM, rM, iM, OM, SM, jM) {
        let aM = this._indicesAccessorMap.get(MM);
        aM || (aM = new Map, this._indicesAccessorMap.set(MM, aM));
        let PM = aM.get(rM);
        PM || (PM = new Map, aM.set(rM, PM));
        let nM = PM.get(iM);
        nM || (nM = new Map, PM.set(iM, nM));
        let QM = nM.get(OM);
        QM || (QM = new Map, nM.set(OM, QM)), QM.set(SM, jM)
      }
      pushExportedNode(MM) {
        this._exportedNodes.has(MM) || this._exportedNodes.add(MM)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(MM) {
        return this._vertexBufferViewMap.get(MM)
      }
      setVertexBufferView(MM, rM) {
        this._vertexBufferViewMap.set(MM, rM)
      }
      setRemappedBufferView(MM, rM, iM) {
        this._remappedBufferView.set(MM, new Map), this._remappedBufferView.get(MM).set(rM, iM)
      }
      getRemappedBufferView(MM, rM) {
        return this._remappedBufferView.get(MM)?.get(rM)
      }
      getVertexAccessor(MM, rM, iM) {
        return this._vertexAccessorMap.get(MM)?.get(rM)?.get(iM)
      }
      setVertexAccessor(MM, rM, iM, OM) {
        let SM = this._vertexAccessorMap.get(MM);
        SM || (SM = new Map, this._vertexAccessorMap.set(MM, SM));
        let jM = SM.get(rM);
        jM || (jM = new Map, SM.set(rM, jM)), jM.set(iM, OM)
      }
      hasVertexColorAlpha(MM) {
        return this._vertexMapColorAlpha.get(MM) || !1
      }
      setHasVertexColorAlpha(MM, rM) {
        return this._vertexMapColorAlpha.set(MM, rM)
      }
      getMesh(MM) {
        return this._meshMap.get(MM)
      }
      setMesh(MM, rM) {
        this._meshMap.set(MM, rM)
      }
      bindMorphDataToMesh(MM, rM) {
        const iM = this._meshMorphTargetMap.get(MM) || [];
        this._meshMorphTargetMap.set(MM, iM), -1 === iM.indexOf(rM) && iM.push(rM)
      }
      getMorphTargetsFromMesh(MM) {
        return this._meshMorphTargetMap.get(MM)
      }
    }
    class ZO {
      _ApplyExtension(MM, rM, iM, OM) {
        if (iM >= rM.length) return Promise.resolve(MM);
        const SM = OM(rM[iM], MM);
        return SM ? SM.then((async MM => MM ? await this._ApplyExtension(MM, rM, iM + 1, OM) : null)) : this._ApplyExtension(MM, rM, iM + 1, OM)
      }
      _ApplyExtensions(MM, rM) {
        const iM = [];
        for (const OM of ZO._ExtensionNames) iM.push(this._extensions[OM]);
        return this._ApplyExtension(MM, iM, 0, rM)
      }
      _extensionsPostExportNodeAsync(MM, rM, iM, OM, SM) {
        return this._ApplyExtensions(rM, ((rM, jM) => rM.postExportNodeAsync && rM.postExportNodeAsync(MM, jM, iM, OM, SM, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(MM, rM, iM) {
        return this._ApplyExtensions(rM, ((rM, OM) => rM.postExportMaterialAsync && rM.postExportMaterialAsync(MM, OM, iM)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        return await Promise.all(ZO._ExtensionNames.map((async SM => {
          const jM = this._extensions[SM];
          if (jM.postExportMaterialAdditionalTexturesAsync) {
            const SM = await jM.postExportMaterialAdditionalTexturesAsync(MM, rM, iM);
            OM.push(...SM)
          }
        }))), OM
      }
      _extensionsPostExportTextures(MM, rM, iM) {
        for (const OM of ZO._ExtensionNames) {
          const SM = this._extensions[OM];
          SM.postExportTexture && SM.postExportTexture(MM, rM, iM)
        }
      }
      _extensionsPostExportMeshPrimitive(MM) {
        for (const rM of ZO._ExtensionNames) {
          const iM = this._extensions[rM];
          iM.postExportMeshPrimitive && iM.postExportMeshPrimitive(MM, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const MM of ZO._ExtensionNames) {
          const rM = this._extensions[MM];
          rM.preGenerateBinaryAsync && await rM.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(MM) {
        for (const rM of ZO._ExtensionNames) {
          const iM = this._extensions[rM];
          iM.enabled && MM(iM)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((MM => {
          var rM, iM, OM;
          MM.wasUsed && ((rM = this._glTF).extensionsUsed || (rM.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(MM.name) && this._glTF.extensionsUsed.push(MM.name), MM.required && ((iM = this._glTF).extensionsRequired || (iM.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(MM.name) && this._glTF.extensionsRequired.push(MM.name)), (OM = this._glTF).extensions || (OM.extensions = {}), MM.onExporting && MM.onExporting())
        }))
      }
      _loadExtensions() {
        for (const MM of ZO._ExtensionNames) {
          const rM = ZO._ExtensionFactories[MM](this);
          this._extensions[MM] = rM
        }
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JM.c.LastCreatedScene,
          rM = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${hM.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Wi(this), this._extensions = {}, this._bufferManager = new SO, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !MM) throw new Error("No scene available to export");
        this._babylonScene = MM, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: MM => MM?.dD?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...rM
        }, this._loadExtensions()
      }
      dispose() {
        for (const MM in this._extensions) {
          this._extensions[MM].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        ZO.UnregisterExtension(MM) && SM.Tools.Warn(`Extension with the name ${MM} already exists`), ZO._ExtensionFactories[MM] = rM;
        const OM = iM ?? 0;
        ZO._ExtensionOrders[MM] = OM;
        let jM = ZO._ExtensionNames.length;
        for (let SM = 0; SM < ZO._ExtensionNames.length; SM++) {
          const MM = ZO._ExtensionNames[SM];
          if (OM < ZO._ExtensionOrders[MM]) {
            jM = SM;
            break
          }
        }
        ZO._ExtensionNames.splice(jM, 0, MM)
      }
      static UnregisterExtension(MM) {
        if (!ZO._ExtensionFactories[MM]) return !1;
        delete ZO._ExtensionFactories[MM], delete ZO._ExtensionOrders[MM];
        const rM = ZO._ExtensionNames.indexOf(MM);
        return -1 !== rM && ZO._ExtensionNames.splice(rM, 1), !0
      }
      _generateJSON(MM, rM, iM) {
        const OM = {
          byteLength: MM
        };
        return OM.byteLength && (this._glTF.buffers = [OM]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.YJ = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (OM.uri = rM + ".bin"), iM ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(MM) {
        const rM = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const iM = this._generateJSON(rM.byteLength, MM, !0),
          OM = new Blob([rM], {
            type: "application/octet-stream"
          }),
          SM = MM + ".gltf",
          jM = MM + ".bin",
          aM = new QM;
        if (aM.files[SM] = iM, aM.files[jM] = OM, this._imageData)
          for (const PM in this._imageData) aM.files[PM] = this._imageData[PM];
        return aM
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(MM) {
        const rM = MM % 4;
        return 0 === rM ? rM : 4 - rM
      }
      async generateGLBAsync(MM) {
        this._shouldUseGlb = !0;
        const rM = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const iM = this._generateJSON(rM.byteLength),
          OM = MM + ".glb";
        let SM, jM = iM.length;
        if ("undefined" !== typeof TextEncoder) {
          SM = (new TextEncoder).encode(iM), jM = SM.length
        }
        const aM = this._getPadding(jM),
          PM = this._getPadding(rM.byteLength),
          nM = 28 + jM + aM + rM.byteLength + PM,
          zM = new iO(nM);
        if (zM.writeUInt32(1179937895), zM.writeUInt32(2), zM.writeUInt32(nM), zM.writeUInt32(jM + aM), zM.writeUInt32(1313821514), SM) zM.writeTypedArray(SM);
        else {
          const MM = "_".charCodeAt(0);
          for (let rM = 0; rM < jM; ++rM) {
            const OM = iM.charCodeAt(rM);
            OM != iM.codePointAt(rM) ? zM.writeUInt8(MM) : zM.writeUInt8(OM)
          }
        }
        for (let QM = 0; QM < aM; ++QM) zM.writeUInt8(32);
        zM.writeUInt32(rM.byteLength + PM), zM.writeUInt32(5130562), zM.writeTypedArray(rM);
        for (let QM = 0; QM < PM; ++QM) zM.writeUInt8(0);
        const LM = new QM;
        return LM.files[OM] = new Blob([zM.getOutputData()], {
          type: "application/octet-stream"
        }), LM
      }
      _setNodeTransformation(MM, rM, iM) {
        if (rM.getPivotPoint().equalsWithEpsilon(fi, ki.d) || SM.Tools.Warn("Pivot points are not supported in the glTF serializer"), !rM.position.equalsWithEpsilon(fi, ki.d)) {
          const SM = OM.TmpVectors.sh[0].jR(rM.position);
          iM && Xi(SM), MM.translation = SM.HOM()
        }
        rM.UL.equalsWithEpsilon(Ni, ki.d) || (MM.scale = rM.UL.HOM());
        const jM = rM.rotationQuaternion?.clone() || OM.Quaternion.FromEulerAngles(rM.rotation.x, rM.rotation.y, rM.rotation.z);
        jM.equalsWithEpsilon(Yi, ki.d) || (iM && Ii(jM), MM.rotation = jM.normalize().HOM())
      }
      _setCameraTransformation(MM, rM, iM) {
        const SM = OM.TmpVectors.sh[0],
          jM = OM.TmpVectors.Quaternion[0],
          aM = rM.getWorldMatrix();
        if (rM.parent) {
          const MM = rM.parent.getWorldMatrix().invertToRef(OM.TmpVectors.Matrix[0]);
          aM.multiplyToRef(MM, OM.TmpVectors.Matrix[1]).decompose(void 0, jM, SM)
        } else aM.decompose(void 0, jM, SM);
        SM.equalsWithEpsilon(fi, ki.d) || (iM && Xi(SM), MM.translation = SM.HOM()), iM && Ii(jM), this._babylonScene.useRightHandedSystem || Ki(jM), jM.equalsWithEpsilon(Yi, ki.d) || (MM.rotation = jM.HOM())
      }
      _listAvailableCameras() {
        for (const MM of this._babylonScene.cameras) {
          const rM = {
            type: MM.mode === jO.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (MM.name && (rM.name = MM.name), "perspective" === rM.type) rM.perspective = {
            aspectRatio: MM.ph().getAspectRatio(MM),
            yfov: MM.fovMode === jO.b.FOVMODE_VERTICAL_FIXED ? MM.fov : MM.fov * MM.ph().getAspectRatio(MM),
            znear: MM.minZ,
            zfar: MM.maxZ
          };
          else if ("orthographic" === rM.type) {
            const iM = MM.orthoLeft && MM.orthoRight ? .5 * (MM.orthoRight - MM.orthoLeft) : .5 * MM.ph().getRenderWidth(),
              OM = MM.orthoBottom && MM.orthoTop ? .5 * (MM.orthoTop - MM.orthoBottom) : .5 * MM.ph().getRenderHeight();
            rM.orthographic = {
              xmag: iM,
              ymag: OM,
              znear: MM.minZ,
              zfar: MM.maxZ
            }
          }
          this._camerasMap.set(MM, rM)
        }
      }
      _exportAndAssignCameras() {
        const MM = Array.from(this._camerasMap.values());
        for (const rM of MM) {
          const MM = this._nodesCameraMap.get(rM);
          if (void 0 !== MM) {
            this._cameras.push(rM);
            for (const rM of MM) rM.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const MM of this._babylonScene.skeletons) {
          if (MM.bones.length <= 0) continue;
          const rM = {
            joints: []
          };
          this._skinMap.set(MM, rM)
        }
      }
      _exportAndAssignSkeletons(MM) {
        for (const iM of this._babylonScene.skeletons) {
          if (iM.bones.length <= 0) continue;
          const jM = this._skinMap.get(iM);
          if (void 0 == jM) continue;
          const aM = {};
          let PM = -1;
          for (let MM = 0; MM < iM.bones.length; ++MM) {
            const rM = iM.bones[MM],
              OM = rM.getIndex() ?? MM; - 1 !== OM && (aM[OM] = rM, OM > PM && (PM = OM))
          }
          const nM = [];
          for (let iM = 0; iM <= PM; ++iM) {
            const PM = aM[iM],
              QM = PM.getTransformNode(),
              zM = QM ? this._nodeMap.get(QM) : void 0;
            if (void 0 === zM) {
              SM.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            jM.joints.push(zM);
            const LM = PM.getAbsoluteInverseBindMatrix().clone();
            MM.has(QM) && (rM = LM, Zi.invertToRef(OM.TmpVectors.Matrix[0]).multiplyToRef(rM, rM).multiplyToRef(Zi, rM)), nM.push(LM)
          }
          const QM = this._nodesSkinMap.get(jM);
          if (jM.joints.length > 0 && void 0 !== QM) {
            const MM = new Float32Array(16 * nM.length);
            nM.forEach(((rM, iM) => {
              MM.set(rM.m, 16 * iM)
            }));
            const rM = this._bufferManager.createBufferView(MM);
            this._accessors.push(this._bufferManager.createAccessor(rM, "MAT4", 5126, nM.length)), jM.inverseBindMatrices = this._accessors.length - 1, this._skins.push(jM);
            const iM = this._skins.length - 1;
            for (const OM of QM) OM.skin = iM
          }
        }
        var rM
      }
      async _exportSceneAsync() {
        const MM = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const rM = this._options.metadataSelector(this._babylonScene.metadata);
          rM && (MM.extras = rM)
        }
        const rM = new Array,
          iM = new Array,
          OM = new Array,
          SM = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let jM;
        if (SM && !this._options.includeCoordinateSystemConversionNodes)
          for (const QM of this._babylonScene.animationGroups)
            for (const MM of QM.targetedAnimations) {
              const rM = MM.target;
              rM instanceof LM.e && !rM.parent && (jM ?? (jM = new Set)).add(rM)
            }
        for (const QM of this._babylonScene.rootNodes) {
          const MM = QM.animations,
            aM = !!MM && MM.length > 0 || jM?.has(QM);
          SM && !this._options.includeCoordinateSystemConversionNodes && oi(QM, this._babylonScene.useRightHandedSystem) && !aM ? OM.push(...QM.getChildren()) : this._babylonScene.useRightHandedSystem ? rM.push(QM) : iM.push(QM)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const aM = new kO(!0, !1);
        MM.nodes.push(...await this._exportNodesAsync(iM, aM));
        const PM = new kO(!1, !1);
        MM.nodes.push(...await this._exportNodesAsync(rM, PM));
        const nM = new kO(!1, !0);
        MM.nodes.push(...await this._exportNodesAsync(OM, nM)), MM.nodes.length && this._scenes.push(MM), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(aM.getNodesSet()), this._babylonScene.animationGroups.length && HO._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, aM.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(MM) {
        return this._nodeMap.get(MM)
      }
      _getAnimationIndex(MM) {
        return this._animationGroupMap.get(MM)
      }
      _getCameraIndex(MM) {
        const rM = this._camerasMap.get(MM);
        if (!rM) return;
        const iM = this._cameras.indexOf(rM);
        return iM >= 0 ? iM : void 0
      }
      _getMaterialIndex(MM) {
        return this._materialMap.get(MM)
      }
      _getRootIndex(MM, rM) {
        switch (MM) {
          case "nodes":
            return this._getNodeIndex(rM);
          case "animations":
            return this._getAnimationIndex(rM);
          case "cameras":
            return this._getCameraIndex(rM);
          case "materials":
            return this._getMaterialIndex(rM);
          case "meshes": {
            const MM = this._getNodeIndex(rM);
            return void 0 === MM ? void 0 : this._nodes[MM]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(rM)?.index;
          case "images": {
            const MM = this._materialExporter.getTextureInfo(rM)?.index;
            if (void 0 === MM) return;
            const iM = this._textures[MM];
            for (const rM of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const MM = iM?.extensions?.[rM]?.source;
              if ("number" === typeof MM) return MM
            }
            return iM?.source
          }
          case "samplers": {
            const MM = this._materialExporter.getTextureInfo(rM)?.index;
            return void 0 === MM ? void 0 : this._textures[MM]?.sampler
          }
          case "skins": {
            const MM = this._skinMap.get(rM),
              iM = MM ? this._skins.indexOf(MM) : -1;
            return iM >= 0 ? iM : void 0
          }
          case "scenes":
            return rM === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(MM, rM, iM) {
        const OM = this._nodes[MM];
        if (!OM) throw new Error(`Cannot write ${rM}: glTF node ${MM} does not exist.`);
        OM.extensions || (OM.extensions = {}), OM.extensions[rM] = iM
      }
      _shouldExportNode(MM) {
        let rM = this._shouldExportNodeMap.get(MM);
        return void 0 === rM && (rM = this._options.shouldExportNode(MM), this._shouldExportNodeMap.set(MM, rM)), rM
      }
      async _exportNodesAsync(MM, rM) {
        const iM = new Array;
        this._exportBuffers(MM, rM);
        for (const OM of MM) await this._exportNodeAsync(OM, iM, rM);
        return iM
      }
      _collectBuffers(MM, rM, iM, OM, SM) {
        if (this._shouldExportNode(MM) && MM instanceof mM.b && MM.geometry) {
          const jM = MM.geometry.getVertexBuffers();
          if (jM)
            for (const OM in jM) {
              if (!Fi(OM)) continue;
              const aM = jM[OM];
              SM.setHasVertexColorAlpha(aM, MM.hasVertexAlpha);
              const PM = aM._buffer,
                nM = rM.get(PM) || [];
              rM.set(PM, nM), -1 === nM.indexOf(aM) && nM.push(aM);
              const QM = iM.get(aM) || [];
              iM.set(aM, QM), -1 === QM.indexOf(MM) && QM.push(MM)
            }
          const aM = MM.morphTargetManager;
          if (aM)
            for (let rM = 0; rM < aM.numTargets; rM++) {
              const iM = aM.getTarget(rM),
                SM = OM.get(iM) || [];
              OM.set(iM, SM), -1 === SM.indexOf(MM) && SM.push(MM)
            }
        }
        for (const jM of MM.getChildren()) this._collectBuffers(jM, rM, iM, OM, SM)
      }
      _exportBuffers(MM, rM) {
        const iM = new Map,
          OM = new Map,
          SM = new Map;
        for (const PM of MM) this._collectBuffers(PM, iM, OM, SM, rM);
        const jM = Array.from(iM.keys());
        for (const PM of jM) {
          const MM = PM.getData();
          if (!MM) throw new Error("Buffer data is not available");
          const SM = iM.get(PM);
          if (!SM) continue;
          const jM = SM[0].byteStride;
          if (SM.some((MM => MM.byteStride !== jM))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const aM = Vi(MM).slice();
          for (const rM of SM) {
            const MM = OM.get(rM),
              {
                byteOffset: iM,
                byteStride: SM,
                componentCount: jM,
                type: PM,
                count: nM,
                normalized: QM,
                kind: LM
              } = xi(rM, MM);
            switch (LM) {
              case zM.e.NormalKind:
              case zM.e.TangentKind:
                (0, si.h)(aM, iM, SM, jM, PM, nM, QM, (MM => {
                  const rM = Math.sqrt(MM[0] * MM[0] + MM[1] * MM[1] + MM[2] * MM[2]);
                  if (rM > 0) {
                    const iM = 1 / rM;
                    MM[0] *= iM, MM[1] *= iM, MM[2] *= iM
                  }
                }));
                break;
              case zM.e.ColorKind: {
                const rM = MM.filter((MM => MM.material instanceof PO.StandardMaterial || null == MM.material)).length;
                if (0 == rM) break;
                if (rM != MM.length) {
                  gM.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                PM == zM.e.UNSIGNED_BYTE && gM.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const OM = new dM.Color3,
                  LM = new dM.d,
                  mM = this._babylonScene.ph().useExactSrgbConversions;
                (0, si.h)(aM, iM, SM, jM, PM, nM, QM, (MM => {
                  3 === MM.length ? (OM.cz(MM, 0), OM.toLinearSpaceToRef(OM, mM), OM.toArray(MM, 0)) : (LM.cz(MM, 0), LM.toLinearSpaceToRef(LM, mM), LM.toArray(MM, 0))
                }))
              }
            }
          }
          if (rM.convertToRightHanded) {
            for (const MM of SM) {
              const rM = OM.get(MM),
                {
                  byteOffset: iM,
                  byteStride: SM,
                  componentCount: jM,
                  type: PM,
                  count: nM,
                  normalized: QM,
                  kind: LM
                } = xi(MM, rM);
              switch (LM) {
                case zM.e.PositionKind:
                case zM.e.NormalKind:
                case zM.e.TangentKind:
                  (0, si.h)(aM, iM, SM, jM, PM, nM, QM, (MM => {
                    MM[0] = -MM[0]
                  }))
              }
            }
            rM.convertedToRightHandedBuffers.set(PM, aM)
          }
          const nM = this._bufferManager.createBufferView(aM, jM);
          rM.setVertexBufferView(PM, nM);
          const QM = new Map;
          for (const rM of SM) {
            const MM = OM.get(rM),
              {
                kind: iM,
                totalVertices: SM
              } = xi(rM, MM);
            switch (iM) {
              case zM.e.MatricesIndicesKind:
              case zM.e.MatricesIndicesExtraKind:
                if (rM.type == zM.e.FLOAT) {
                  const MM = rM.getFloatData(SM);
                  null !== MM && QM.set(rM, MM)
                }
            }
          }
          0 !== QM.size && gM.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const LM = Array.from(QM.keys());
          for (const iM of LM) {
            const MM = QM.get(iM);
            if (!MM) continue;
            const OM = MM.some((MM => MM >= 256)),
              SM = new(OM ? Uint16Array : Uint8Array)(MM.length);
            for (let rM = 0; rM < MM.length; rM++) SM[rM] = MM[rM];
            const jM = this._bufferManager.createBufferView(SM, 4 * (OM ? 2 : 1));
            rM.setRemappedBufferView(PM, iM, jM)
          }
        }
        const aM = Array.from(SM.keys());
        for (const PM of aM) {
          const MM = SM.get(PM);
          if (!MM) continue;
          const iM = hO(PM, MM[0], this._bufferManager, this._bufferViews, this._accessors, rM.convertToRightHanded);
          for (const OM of MM) rM.bindMorphDataToMesh(OM, iM)
        }
      }
      async _exportNodeAsync(MM, rM, iM) {
        let OM = this._nodeMap.get(MM);
        if (void 0 !== OM) return void(rM.includes(OM) || rM.push(OM));
        const SM = await this._createNodeAsync(MM, iM);
        if (SM) {
          OM = this._nodes.length, this._nodes.push(SM), this._nodeMap.set(MM, OM), iM.pushExportedNode(MM), rM.push(OM);
          const jM = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            aM = [];
          this._babylonScene.animationGroups.length || (HO._CreateMorphTargetAnimationFromMorphTargetAnimations(MM, jM, aM, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, iM.convertToRightHanded, this._options.shouldExportAnimation), MM.animations.length && HO._CreateNodeAnimationFromNodeAnimations(MM, jM, aM, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, iM.convertToRightHanded, this._options.shouldExportAnimation)), jM.channels.length && jM.samplers.length && this._animations.push(jM), aM.forEach((MM => {
            MM.channels.length && MM.samplers.length && this._animations.push(MM)
          }))
        }
        const jM = SM ? [] : rM;
        for (const aM of MM.getChildren()) await this._exportNodeAsync(aM, jM, iM);
        SM && jM.length && (SM.children = jM)
      }
      async _createNodeAsync(MM, rM) {
        if (!this._shouldExportNode(MM)) return null;
        const iM = {};
        if (MM.name && (iM.name = MM.name), MM.metadata) {
          const rM = this._options.metadataSelector(MM.metadata);
          rM && (iM.extras = rM)
        }
        if (MM instanceof LM.e && (this._setNodeTransformation(iM, MM, rM.convertToRightHanded), MM instanceof mM.b)) {
          const OM = MM instanceof HM.b ? MM.QSM : MM;
          if (OM.iG && OM.iG.length > 0 && (iM.mesh = await this._exportMeshAsync(OM, rM)), MM.skeleton) {
            const rM = this._skinMap.get(MM.skeleton);
            void 0 !== rM && (void 0 === this._nodesSkinMap.get(rM) && this._nodesSkinMap.set(rM, []), this._nodesSkinMap.get(rM)?.push(iM))
          }
        }
        if (MM instanceof Di.g) {
          const OM = this._camerasMap.get(MM);
          if (OM) {
            void 0 === this._nodesCameraMap.get(OM) && this._nodesCameraMap.set(OM, []), this._setCameraTransformation(iM, MM, rM.convertToRightHanded);
            const SM = MM.parent;
            if (null !== SM && Ti(MM, SM)) {
              const MM = this._nodeMap.get(SM);
              if (void 0 !== MM) {
                const rM = this._nodes[MM];
                return qi(iM, rM), this._nodesCameraMap.get(OM)?.push(rM), null
              }
            }
            this._nodesCameraMap.get(OM)?.push(iM)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", iM, MM, this._nodeMap, rM.convertToRightHanded) ? iM : (gM.e.Warn(`Not exporting node ${MM.name}`), null)
      }
      _exportIndices(MM, rM, iM, OM, SM, aM, PM, nM, QM) {
        let zM = null;
        QM.mode = function(MM) {
          switch (MM) {
            case jM.c.TriangleFillMode:
              return 4;
            case jM.c.TriangleStripDrawMode:
              return 5;
            case jM.c.TriangleFanDrawMode:
              return 6;
            case jM.c.PointListDrawMode:
            case jM.c.PointFillMode:
              return 0;
            case jM.c.LineLoopDrawMode:
              return 2;
            case jM.c.LineListDrawMode:
              return 1;
            case jM.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${MM}`)
        }(aM);
        const LM = PM !== jM.c.CounterClockWiseSideOrientation && function(MM) {
          switch (MM) {
            case jM.c.TriangleFillMode:
            case jM.c.TriangleStripDrawMode:
            case jM.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(aM);
        if (LM) {
          if (aM === jM.c.TriangleStripDrawMode || aM === jM.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const PM = rM ? new Uint32Array(OM) : new Uint16Array(OM);
          if (MM)
            for (let rM = 0; rM + 2 < OM; rM += 3) PM[rM] = MM[iM + rM] + SM, PM[rM + 1] = MM[iM + rM + 2] + SM, PM[rM + 2] = MM[iM + rM + 1] + SM;
          else
            for (let MM = 0; MM + 2 < OM; MM += 3) PM[MM] = MM, PM[MM + 1] = MM + 2, PM[MM + 2] = MM + 1;
          zM = PM
        } else if (MM && 0 !== SM) {
          const jM = rM ? new Uint32Array(OM) : new Uint16Array(OM);
          for (let rM = 0; rM < OM; rM++) jM[rM] = MM[iM + rM] + SM;
          zM = jM
        } else MM && (zM = function(MM, rM, iM, OM) {
          let SM = MM;
          return 0 === rM && iM === MM.length || (SM = Array.isArray(MM) ? MM.slice(rM, rM + iM) : MM.subarray(rM, rM + iM)), SM instanceof Int32Array ? new Uint32Array(SM.buffer, SM.byteOffset, SM.length) : Array.isArray(SM) ? OM ? new Uint32Array(SM) : new Uint16Array(SM) : SM
        }(MM, iM, OM, rM));
        if (zM) {
          let jM = nM.getIndicesAccessor(MM, iM, OM, SM, LM);
          if (void 0 === jM) {
            const aM = this._bufferManager.createBufferView(zM),
              PM = rM ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(aM, "SCALAR", PM, OM, 0)), jM = this._accessors.length - 1, nM.setIndicesAccessor(MM, iM, OM, SM, LM, jM)
          }
          QM.indices = jM
        }
      }
      _exportVertexBuffer(MM, rM, iM, OM, SM, jM) {
        const aM = MM.getKind();
        if (!Fi(aM)) return;
        if (aM.startsWith("uv") && !this._options.exportUnusedUVs && (!rM || !this._materialNeedsUVsSet.has(rM))) return;
        let PM = SM.getVertexAccessor(MM, iM, OM);
        if (void 0 === PM) {
          const rM = SM.convertedToRightHandedBuffers.get(MM._buffer) || MM._buffer.getData(),
            jM = aM === zM.e.PositionKind ? function(MM, rM, iM, OM) {
              const {
                byteOffset: SM,
                byteStride: jM,
                type: aM,
                normalized: PM
              } = rM, nM = rM.getSize(), QM = new Array(nM).fill(1 / 0), zM = new Array(nM).fill(-1 / 0);
              return (0, si.h)(MM, SM + iM * jM, jM, nM, aM, OM * nM, PM, (MM => {
                for (let rM = 0; rM < nM; rM++) QM[rM] = Math.min(QM[rM], MM[rM]), zM[rM] = Math.max(zM[rM], MM[rM])
              })), {
                min: QM,
                max: zM
              }
            }(rM, MM, iM, OM) : void 0,
            nM = (aM === zM.e.MatricesIndicesKind || aM === zM.e.MatricesIndicesExtraKind) && MM.type === zM.e.FLOAT,
            QM = nM ? zM.e.UNSIGNED_BYTE : MM.type,
            LM = nM ? void 0 : MM.normalized,
            mM = nM ? SM.getRemappedBufferView(MM._buffer, MM) : SM.getVertexBufferView(MM._buffer),
            HM = MM.byteOffset + iM * MM.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(mM, function(MM, rM) {
            if (MM == zM.e.ColorKind) return rM ? "VEC4" : "VEC3";
            switch (MM) {
              case zM.e.PositionKind:
              case zM.e.NormalKind:
                return "VEC3";
              case zM.e.TangentKind:
              case zM.e.MatricesIndicesKind:
              case zM.e.MatricesIndicesExtraKind:
              case zM.e.MatricesWeightsKind:
              case zM.e.MatricesWeightsExtraKind:
                return "VEC4";
              case zM.e.UVKind:
              case zM.e.UV2Kind:
              case zM.e.UV3Kind:
              case zM.e.UV4Kind:
              case zM.e.UV5Kind:
              case zM.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${MM}`)
          }(aM, SM.hasVertexColorAlpha(MM)), QM, OM, HM, jM, LM)), PM = this._accessors.length - 1, SM.setVertexAccessor(MM, iM, OM, PM)
        }
        jM.attributes[function(MM) {
          switch (MM) {
            case zM.e.PositionKind:
              return "POSITION";
            case zM.e.NormalKind:
              return "NORMAL";
            case zM.e.TangentKind:
              return "TANGENT";
            case zM.e.ColorKind:
              return "COLOR_0";
            case zM.e.UVKind:
              return "TEXCOORD_0";
            case zM.e.UV2Kind:
              return "TEXCOORD_1";
            case zM.e.UV3Kind:
              return "TEXCOORD_2";
            case zM.e.UV4Kind:
              return "TEXCOORD_3";
            case zM.e.UV5Kind:
              return "TEXCOORD_4";
            case zM.e.UV6Kind:
              return "TEXCOORD_5";
            case zM.e.MatricesIndicesKind:
              return "JOINTS_0";
            case zM.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case zM.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case zM.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${MM}`)
        }(aM)] = PM
      }
      async _exportMaterialAsync(MM, rM, iM, OM) {
        let SM = this._materialMap.get(MM);
        if (void 0 === SM) {
          const OM = rM && Object.keys(rM).some((MM => MM.startsWith("uv")));
          if ((MM = MM instanceof aO.e ? MM.B_[iM.materialIndex] : MM) instanceof Cr) SM = await this._materialExporter.exportPBRMaterialAsync(MM, OM);
          else if (MM instanceof PO.StandardMaterial) SM = await this._materialExporter.exportStandardMaterialAsync(MM, OM);
          else {
            if (!(MM instanceof Vr)) return void gM.e.Warn(`Unsupported material '${MM.name}' with type ${MM.getClassName()}`);
            SM = await this._materialExporter.exportOpenPBRMaterialAsync(MM, OM)
          }
          this._materialMap.set(MM, SM)
        }
        OM.material = SM
      }
      async _exportMeshAsync(MM, rM) {
        let iM = rM.getMesh(MM);
        if (void 0 !== iM) return iM;
        const OM = {
          primitives: []
        };
        iM = this._meshes.length, this._meshes.push(OM), rM.setMesh(MM, iM);
        const SM = MM.isUnIndexed ? null : MM.hOM(),
          aM = MM.geometry?.getVertexBuffers(),
          PM = rM.getMorphTargetsFromMesh(MM),
          nM = MM instanceof JO.d,
          QM = MM instanceof DO,
          zM = MM.iG;
        if (aM && zM && zM.length > 0)
          for (const LM of zM) {
            const iM = {
                attributes: {}
              },
              zM = LM.Zh() || this._babylonScene.defaultMaterial;
            if (QM) {
              const rM = {
                  name: zM.name
                },
                OM = MM,
                SM = dM.Color3.White(),
                jM = OM.material?.alpha ?? 1,
                aM = OM.greasedLineMaterial?.color ?? SM;
              (!aM.equalsWithEpsilon(SM, ki.d) || jM < 1) && (rM.pbrMetallicRoughness = {
                baseColorFactor: [...aM.HOM(), jM]
              }), this._materials.push(rM), iM.material = this._materials.length - 1
            } else if (nM) {
              const rM = {
                  name: zM.name
                },
                OM = MM;
              (!OM.color.equalsWithEpsilon(dM.Color3.White(), ki.d) || OM.alpha < 1) && (rM.pbrMetallicRoughness = {
                baseColorFactor: [...OM.color.HOM(), OM.alpha]
              }), this._materials.push(rM), iM.material = this._materials.length - 1
            } else await this._exportMaterialAsync(zM, aM, LM, iM);
            const mM = nM || QM ? jM.c.LineListDrawMode : MM.overrideRenderingFillMode ?? zM.fillMode;
            let HM = zM._getEffectiveOrientation(MM);
            rM.wasAddedByNoopNode && !MM.Hk().useRightHandedSystem && (HM = HM === jM.c.ClockWiseSideOrientation ? jM.c.CounterClockWiseSideOrientation : jM.c.ClockWiseSideOrientation), this._exportIndices(SM, SM ? (0, si.c)(SM, LM.indexCount, LM.indexStart, LM.verticesStart) : LM.verticesCount > 65535, SM ? LM.indexStart : LM.verticesStart, SM ? LM.indexCount : LM.verticesCount, -LM.verticesStart, mM, HM, rM, iM);
            for (const MM of Object.values(aM)) this._exportVertexBuffer(MM, zM, LM.verticesStart, LM.verticesCount, rM, iM);
            if (PM) {
              iM.targets = [];
              for (const MM of PM) iM.targets.push(MM.attributes)
            }
            OM.primitives.push(iM), this._extensionsPostExportMeshPrimitive(iM)
          }
        if (PM) {
          OM.weights = [], OM.extras || (OM.extras = {}), OM.extras.targetNames = [];
          for (const MM of PM) OM.weights.push(MM.influence), OM.extras.targetNames.push(MM.name)
        }
        return iM
      }
    }
    ZO._ExtensionNames = new Array, ZO._ExtensionFactories = {}, ZO._ExtensionOrders = {};
    class oO {
      static async GLTFAsync(MM, rM, iM) {
        iM && iM.exportWithoutWaitingForScene || await MM.whenReadyAsync();
        const OM = new ZO(MM, iM),
          SM = await OM.generateGLTFAsync(rM.replace(/\.[^/.]+$/, ""));
        return OM.dispose(), SM
      }
      static async GLBAsync(MM, rM, iM) {
        iM && iM.exportWithoutWaitingForScene || await MM.whenReadyAsync();
        const OM = new ZO(MM, iM),
          SM = await OM.generateGLBAsync(rM.replace(/\.[^/.]+$/, ""));
        return OM.dispose(), SM
      }
    }
    const fO = "EXT_mesh_gpu_instancing";

    function YO(MM, rM) {
      const iM = new Float32Array(3 * rM);
      for (let OM = 0; OM < rM; OM++) iM[3 * OM + 0] = MM[4 * OM + 0], iM[3 * OM + 1] = MM[4 * OM + 1], iM[3 * OM + 2] = MM[4 * OM + 2];
      return iM
    }
    class NO {
      constructor(MM) {
        this.name = fO, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(MM, rM, iM, OM, SM, jM) {
        return await new Promise((MM => {
          if (rM && iM instanceof bO.d && iM.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const MM = fM.q.Zero(),
              OM = fM.h.Identity(),
              aM = fM.q.One(),
              PM = iM.thinInstanceGetWorldMatrices(),
              nM = fM.l.sh[2],
              QM = fM.l.Quaternion[1],
              zM = fM.l.sh[3];
            let LM = !1,
              mM = !1,
              HM = !1;
            const hM = new Float32Array(3 * iM.y_),
              JM = new Float32Array(4 * iM.y_),
              dM = new Float32Array(3 * iM.y_);
            let yM = 0;
            for (const rM of PM) rM.decompose(zM, QM, nM), SM && (Xi(nM), Ii(QM)), hM.set(nM.HOM(), 3 * yM), JM.set(QM.normalize().HOM(), 4 * yM), dM.set(zM.HOM(), 3 * yM), LM = LM || !nM.equalsWithEpsilon(MM), mM = mM || !QM.equalsWithEpsilon(OM), HM = HM || !zM.equalsWithEpsilon(aM), yM++;
            const lM = {
              attributes: {}
            };
            LM && (lM.attributes.TRANSLATION = this._buildAccessor(hM, "VEC3", iM.y_, jM)), mM && (lM.attributes.ROTATION = this._buildAccessor(JM, "VEC4", iM.y_, jM)), HM && (lM.attributes.SCALE = this._buildAccessor(dM, "VEC3", iM.y_, jM));
            let EM = iM._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (EM) {
              const MM = iM.y_,
                rM = "VEC3";
              iM.hasVertexAlpha && EM.length === 4 * MM ? (this._instanceColorWarned || (gM.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), EM = YO(EM, MM)) : EM.length === 4 * MM && (EM = YO(EM, MM)), EM.length === 3 * MM && (lM.attributes._COLOR_0 = this._buildAccessor(EM, rM, MM, jM))
            }
            rM.extensions = rM.extensions || {}, rM.extensions[fO] = lM
          }
          MM(rM)
        }))
      }
      _buildAccessor(MM, rM, iM, OM) {
        const SM = OM.createBufferView(MM),
          jM = OM.createAccessor(SM, rM, 5126, iM);
        return this._exporter._accessors.push(jM), this._exporter._accessors.length - 1
      }
    }
    let AO = !1;

    function xO() {
      AO || (AO = !0, ZO.RegisterExtension(fO, (MM => new NO(MM))))
    }
    iM(41564);
    xO();
    var vO = iM(44499);

    function FO(MM, rM, iM, OM) {
      const SM = MM;
      let jM = null,
        aM = null,
        PM = null,
        nM = null;
      const QM = {},
        zM = rM.find((MM => "POSITION" === MM.dracoName));
      if (!zM) throw new Error("Draco: Missing position attribute for encoding.");
      if (!iM) {
        const MM = zM.data.length / zM.size;
        iM = new(MM > 65535 ? Uint32Array : Uint16Array)(MM);
        for (let rM = 0; rM < MM; rM++) iM[rM] = rM
      }
      try {
        jM = new SM.Encoder, aM = new SM.MeshBuilder, PM = new SM.Mesh, aM.AddFacesToMesh(PM, iM.length / 3, iM);
        const MM = new Map([
          [Float32Array, (MM, rM, iM, OM, SM, jM) => MM.AddFloatAttribute(rM, iM, OM, SM, jM)],
          [Uint32Array, (MM, rM, iM, OM, SM, jM) => MM.AddUInt32Attribute(rM, iM, OM, SM, jM)],
          [Uint16Array, (MM, rM, iM, OM, SM, jM) => MM.AddUInt16Attribute(rM, iM, OM, SM, jM)],
          [Uint8Array, (MM, rM, iM, OM, SM, jM) => MM.AddUInt8Attribute(rM, iM, OM, SM, jM)],
          [Int32Array, (MM, rM, iM, OM, SM, jM) => MM.AddInt32Attribute(rM, iM, OM, SM, jM)],
          [Int16Array, (MM, rM, iM, OM, SM, jM) => MM.AddInt16Attribute(rM, iM, OM, SM, jM)],
          [Int8Array, (MM, rM, iM, OM, SM, jM) => MM.AddInt8Attribute(rM, iM, OM, SM, jM)]
        ]);
        for (const iM of rM) {
          iM.data instanceof Uint8ClampedArray && (iM.data = new Uint8Array(iM.data));
          const rM = MM.get(iM.data.constructor),
            nM = iM.data.length / iM.size;
          QM[iM.kind] = rM(aM, PM, SM[iM.dracoName], nM, iM.size, iM.data), OM.quantizationBits && OM.quantizationBits[iM.dracoName] && jM.SetAttributeQuantization(SM[iM.dracoName], OM.quantizationBits[iM.dracoName])
        }
        OM.method && jM.SetEncodingMethod(SM[OM.method]), void 0 !== OM.encodeSpeed && void 0 !== OM.decodeSpeed && jM.SetSpeedOptions(OM.encodeSpeed, OM.decodeSpeed), nM = new SM.DracoInt8Array;
        const zM = jM.EncodeMeshToDracoBuffer(PM, nM);
        if (zM <= 0) throw new Error("Draco: Failed to encode.");
        const LM = new Int8Array(zM);
        for (let rM = 0; rM < zM; rM++) LM[rM] = nM.GetValue(rM);
        return {
          data: LM,
          attributeIds: QM
        }
      } finally {
        PM && SM.destroy(PM), aM && SM.destroy(aM), jM && SM.destroy(jM), nM && SM.destroy(nM)
      }
    }

    function BO() {
      let MM;
      onmessage = rM => {
        const iM = rM.data;
        switch (iM.id) {
          case "init": {
            iM.url && importScripts(iM.url);
            const rM = iM.wasmBinary ? {
              wasmBinary: iM.wasmBinary
            } : {};
            MM = DracoEncoderModule(rM), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!MM) throw new Error("Draco: Encoder module is not available.");
            MM.then((MM => {
              const rM = FO(MM, iM.attributes, iM.indices, iM.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: rM
              }, rM ? [rM.data.buffer] : void 0)
            })).catch((MM => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: MM.message
              })
            }))
        }
      }
    }
    class XO {
      constructor(MM) {
        if (MM.workerPool) return void(this._workerPoolPromise = Promise.resolve(MM.workerPool));
        const rM = MM.wasmBinary,
          iM = MM.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          OM = iM && "function" === typeof Worker && "function" === typeof URL,
          SM = OM || !MM.jsModule,
          jM = MM.wasmUrl && MM.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: SM ? br.e.GetBabylonScriptURL(MM.wasmUrl, !0) : "",
            wasmBinaryPromise: rM ? Promise.resolve(rM) : br.e.LoadFileAsync(br.e.GetBabylonScriptURL(MM.wasmBinaryUrl, !0))
          } : {
            url: SM ? br.e.GetBabylonScriptURL(MM.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        OM ? this._workerPoolPromise = jM.wasmBinaryPromise.then((MM => {
          const rM = this._getWorkerContent(),
            OM = URL.createObjectURL(new Blob([rM], {
              type: "application/javascript"
            }));
          return new vO.d(iM, (() => async function(MM, rM, iM) {
            return await new Promise(((OM, SM) => {
              const jM = rM => {
                  MM.removeEventListener("error", jM), MM.removeEventListener("message", aM), SM(rM)
                },
                aM = rM => {
                  "initDone" === rM.data.id && (MM.removeEventListener("error", jM), MM.removeEventListener("message", aM), OM(MM))
                };
              if (MM.addEventListener("error", jM), MM.addEventListener("message", aM), rM) {
                const OM = rM.slice(0);
                MM.postMessage({
                  id: "init",
                  url: iM,
                  wasmBinary: OM
                }, [OM])
              } else MM.postMessage({
                id: "init",
                url: iM
              })
            }))
          }(new Worker(OM), MM, jM.url)))
        })) : this._modulePromise = jM.wasmBinaryPromise.then((async rM => {
          if (!this._isModuleAvailable() && !MM.jsModule) {
            if (!jM.url) throw new Error("Draco codec module is not available");
            await br.e.LoadBabylonScriptAsync(jM.url)
          }
          return await this._createModuleAsync(rM, MM.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((MM => {
          MM.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function IO() {
      const MM = MM => !!MM && "object" === typeof MM;
      for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
      return iM.reduce(((rM, iM) => {
        const OM = Object.keys(iM);
        for (const SM of OM) {
          const OM = rM[SM],
            jM = iM[SM];
          Array.isArray(OM) && Array.isArray(jM) ? rM[SM] = OM.concat(jM) : MM(OM) && MM(jM) ? rM[SM] = IO(OM, jM) : rM[SM] = jM
        }
        return rM
      }), {})
    }

    function KO(MM) {
      return MM === YM.j.PositionKind ? "POSITION" : MM === YM.j.NormalKind ? "NORMAL" : MM === YM.j.ColorKind ? "COLOR" : MM.startsWith(YM.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const qO = {
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
    class TO extends XO {
      static get DefaultAvailable() {
        return !!((MM = TO.DefaultConfiguration).wasmUrl && (MM.wasmBinary || MM.wasmBinaryUrl) && "object" === typeof WebAssembly || MM.fallbackUrl);
        var MM
      }
      static get Default() {
        return TO._Default ?? (TO._Default = new TO), TO._Default
      }
      static ResetDefault(MM) {
        TO._Default && (MM || TO._Default.dispose(), TO._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(MM, rM) {
        return {
          module: await (rM || DracoEncoderModule)({
            wasmBinary: MM
          })
        }
      }
      _getWorkerContent() {
        return `${FO}(${BO})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TO.DefaultConfiguration)
      }
      async _encodeAsync(MM, rM, iM) {
        const OM = iM ? IO(qO, iM) : qO;
        if (this._workerPoolPromise) {
          const iM = await this._workerPoolPromise;
          return await new Promise(((SM, jM) => {
            iM.push(((iM, aM) => {
              const PM = MM => {
                  iM.removeEventListener("error", PM), iM.removeEventListener("message", nM), jM(MM), aM()
                },
                nM = MM => {
                  "encodeMeshSuccess" === MM.data.id ? (iM.removeEventListener("error", PM), iM.removeEventListener("message", nM), SM(MM.data.encodedMeshData), aM()) : "encodeMeshError" === MM.data.id && (iM.removeEventListener("error", PM), iM.removeEventListener("message", nM), jM(new Error(MM.data.errorMessage)), aM())
                };
              iM.addEventListener("error", PM), iM.addEventListener("message", nM);
              const QM = [];
              for (const rM of MM) QM.push(rM.data.buffer);
              rM && QM.push(rM.buffer), iM.postMessage({
                id: "encodeMesh",
                attributes: MM,
                indices: rM,
                options: OM
              }, QM)
            }))
          }))
        }
        if (this._modulePromise) {
          return FO((await this._modulePromise).module, MM, rM, OM)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(MM, rM) {
        if (0 == MM.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        MM instanceof bO.d && MM.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === rM?.method && (gM.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), rM.method = "MESH_SEQUENTIAL_ENCODING");
        const iM = function(MM) {
            let rM = MM.hOM(void 0, !0);
            return !rM || rM instanceof Uint32Array || rM instanceof Uint16Array || (rM = ((0, si.c)(rM, rM.length) ? Uint32Array : Uint16Array).from(rM)), rM
          }(MM),
          OM = function(MM, rM) {
            const iM = [];
            for (const OM of MM.getVerticesDataKinds()) {
              if (rM?.includes(OM)) {
                if (OM === YM.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const SM = MM.getVertexBuffer(OM),
                jM = SM.getSize(),
                aM = (0, si.r)(SM.getData(), jM, SM.type, SM.byteOffset, SM.byteStride, MM.getTotalVertices(), !0);
              iM.push({
                kind: OM,
                dracoName: KO(OM),
                size: jM,
                data: aM
              })
            }
            return iM
          }(MM, rM?.excludedAttributes);
        return await this._encodeAsync(OM, iM, rM)
      }
    }
    TO.DefaultConfiguration = {
      wasmUrl: `${br.e._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${br.e._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${br.e._DefaultCdnUrl}/draco_encoder.js`
    }, TO._Default = null;
    const VO = "KHR_draco_mesh_compression";
    class cO {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(MM) {
        this.name = VO, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === MM.options.meshCompressionMethod && TO.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(MM, rM, iM) {
        if (!this.enabled) return;
        if (4 !== MM.mode && 5 !== MM.mode) return void gM.e.Warn("Cannot compress primitive with mode " + MM.mode + ".");
        const OM = [],
          SM = [];
        let jM = null;
        if (void 0 !== MM.indices) {
          const aM = iM[MM.indices],
            PM = rM.getBufferView(aM);
          jM = rM.getData(PM).slice(), OM.push(PM), SM.push(aM)
        }
        const aM = [];
        for (const [zM, LM] of Object.entries(MM.attributes)) {
          const MM = iM[LM],
            jM = rM.getBufferView(MM),
            nM = vi(MM.type),
            QM = (0, si.r)(rM.getData(jM), nM, MM.componentType, MM.byteOffset || 0, jM.byteStride || (0, si.n)(MM.componentType) * nM, MM.count, !0);
          aM.push({
            kind: zM,
            dracoName: (PM = zM, "POSITION" === PM ? "POSITION" : "NORMAL" === PM ? "NORMAL" : PM.startsWith("COLOR") ? "COLOR" : PM.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: vi(MM.type),
            data: QM
          }), OM.push(jM), SM.push(MM)
        }
        var PM;
        const nM = {
            method: MM.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          QM = TO.Default._encodeAsync(aM, jM, nM).then((iM => {
            const jM = {
                bufferView: -1,
                attributes: iM.attributeIds
              },
              aM = rM.createBufferView(iM.data);
            rM.setBufferView(jM, aM);
            for (const MM of OM) this._bufferViewsUsed.add(MM);
            for (const MM of SM) this._accessorsUsed.add(MM);
            MM.extensions || (MM.extensions = {}), MM.extensions[VO] = jM
          })).catch((MM => {
            gM.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + MM.message)
          }));
        this._encodePromises.push(QM), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(MM) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((rM => {
          MM.getPropertiesWithBufferView(rM).every((MM => this._accessorsUsed.has(MM))) && MM.removeBufferView(rM)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let MS = !1;

    function rS() {
      MS || (MS = !0, ZO.RegisterExtension(VO, (MM => new cO(MM))))
    }
    rS();
    var iS = iM(44229);
    const OS = "KHR_lights_punctual",
      SS = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      jS = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      aS = fM.q.Backward();
    class PS {
      constructor(MM) {
        this.name = OS, this.enabled = !0, this.required = !1, this._exporter = MM
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[OS] = this._lights
      }
      async postExportNodeAsync(MM, rM, iM, OM, SM) {
        return await new Promise((jM => {
          if (!(iM instanceof mO.d)) return void jM(rM);
          const aM = iM.getTypeID() == mO.d.LIGHTTYPEID_POINTLIGHT ? "point" : iM.getTypeID() == mO.d.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : iM.getTypeID() == mO.d.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!aM || !(iM instanceof iS.d)) return gM.e.Warn(`${MM}: Light ${iM.name} is not supported in ${OS}`), void jM(rM);
          if (iM.falloffType !== mO.d.FALLOFF_GLTF && gM.e.Warn(`${MM}: Light falloff for ${iM.name} does not match the ${OS} specification!`), !iM.position.IaM(0, 0, 0)) {
            const MM = fM.l.sh[0].jR(iM.position);
            SM && Xi(MM), rM.translation = MM.HOM()
          }
          if ("point" !== aM) {
            const MM = iM.direction.normalizeToRef(fM.l.sh[0]);
            SM && Xi(MM);
            const OM = fM.h.FromUnitVectorsToRef(aS, MM, fM.l.Quaternion[0]);
            fM.h.IsIdentity(OM) || (rM.rotation = OM.HOM())
          }
          const PM = {
            type: aM,
            name: iM.name,
            color: iM.diffuse.HOM(),
            intensity: iM.intensity,
            range: iM.range
          };
          if (ci(PM, SS), "spot" === aM) {
            const MM = iM;
            PM.spot = {
              innerConeAngle: MM.innerAngle / 2,
              outerConeAngle: MM.angle / 2
            }, ci(PM.spot, jS)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(PM);
          const nM = {
              light: this._lights.lights.length - 1
            },
            QM = iM.parent;
          if (QM && Ti(iM, QM)) {
            const MM = OM.get(QM);
            if (MM) {
              const iM = this._exporter._nodes[MM];
              return qi(rM, iM), iM.extensions || (iM.extensions = {}), iM.extensions[OS] = nM, void jM(null)
            }
          }
          rM.extensions || (rM.extensions = {}), rM.extensions[OS] = nM, jM(rM)
        }))
      }
    }
    let nS = !1;

    function QS() {
      nS || (nS = !0, ZO.RegisterExtension(OS, (MM => new PS(MM))))
    }
    QS();
    const zS = "KHR_interactivity";
    class LS {
      constructor(MM) {
        this._exporter = MM, this.name = zS, this.enabled = !!MM.options.khrInteractivity, this.required = MM.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var MM, rM, iM;
        const OM = this._exporter.options.khrInteractivity;
        if (!OM) return;
        const SM = OM.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: MM => this._exporter._getNodeIndex(MM),
          getAnimationIndex: MM => this._exporter._getAnimationIndex(MM),
          getCameraIndex: MM => this._exporter._getCameraIndex(MM),
          getMaterialIndex: MM => this._exporter._getMaterialIndex(MM),
          getRootIndex: (MM, rM) => this._exporter._getRootIndex(MM, rM),
          setNodeExtension: (MM, rM, iM) => this._exporter._setNodeExtension(MM, rM, iM)
        });
        this._exporter._glTF.extensions[zS] = SM;
        for (const jM of OM.additionalExtensionsUsed)(MM = this._exporter._glTF).extensionsUsed || (MM.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(jM) && this._exporter._glTF.extensionsUsed.push(jM);
        for (const jM of OM.additionalExtensionsRequired)(rM = this._exporter._glTF).extensionsUsed || (rM.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(jM) && this._exporter._glTF.extensionsUsed.push(jM), (iM = this._exporter._glTF).extensionsRequired || (iM.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(jM) && this._exporter._glTF.extensionsRequired.push(jM)
      }
    }
    let mS = !1;

    function HS() {
      mS || (mS = !0, ZO.RegisterExtension(zS, (MM => new LS(MM)), 200))
    }
    HS();
    const hS = "EXT_lights_area",
      JS = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      dS = {
        aspect: 1
      },
      yS = fM.q.Backward();
    class lS {
      constructor(MM) {
        this.name = hS, this.enabled = !0, this.required = !1, this._exporter = MM
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[hS] = this._lights
      }
      async postExportNodeAsync(MM, rM, iM, OM, SM) {
        return await new Promise((jM => {
          if (!(iM instanceof mO.d)) return void jM(rM);
          const aM = iM.getTypeID() == mO.d.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!aM) return gM.e.Warn(`${MM}: Light ${iM.name} is not supported in ${hS}`), void jM(rM);
          const PM = iM;
          if (PM.falloffType !== mO.d.FALLOFF_GLTF && gM.e.Warn(`${MM}: Light falloff for ${iM.name} does not match the ${hS} specification!`), !PM.position.IaM(0, 0, 0)) {
            const MM = fM.l.sh[0].jR(PM.position);
            SM && Xi(MM), rM.translation = MM.HOM()
          }
          const nM = fM.q.Forward();
          SM && Xi(nM);
          const QM = fM.h.FromUnitVectorsToRef(yS, nM, fM.l.Quaternion[0]);
          fM.h.IsIdentity(QM) || (rM.rotation = QM.HOM());
          const zM = {
            type: aM,
            name: PM.name,
            color: PM.diffuse.HOM(),
            intensity: PM.intensity,
            size: PM.height,
            rect: {
              aspect: PM.width / PM.height
            }
          };
          ci(zM, JS), zM.rect && ci(zM.rect, dS), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(zM);
          const LM = {
              light: this._lights.lights.length - 1
            },
            mM = iM.parent;
          if (mM && Ti(PM, mM)) {
            const MM = OM.get(mM);
            if (MM) {
              const iM = this._exporter._nodes[MM];
              return qi(rM, iM), iM.extensions || (iM.extensions = {}), iM.extensions[hS] = LM, void jM(null)
            }
          }
          rM.extensions || (rM.extensions = {}), rM.extensions[hS] = LM, jM(rM)
        }))
      }
    }
    let ES = !1;

    function US() {
      ES || (ES = !0, ZO.RegisterExtension(hS, (MM => new lS(MM))))
    }
    US();
    const GS = "KHR_materials_anisotropy";
    class CS {
      constructor(MM) {
        this.name = GS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof Cr) {
          if (iM.anisotropy.isEnabled && !iM.anisotropy.legacy) return iM.anisotropy.texture && OM.push(iM.anisotropy.texture), OM
        } else if (iM instanceof Vr && iM.specularRoughnessAnisotropy > 0) {
          const MM = function(MM) {
            const rM = MM.specularRoughnessAnisotropyTexture,
              iM = MM.geometryTangentTexture;
            return `${rM&&rM.getInternalTexture()?rM.getInternalTexture().uniqueId:"NoStrength"}_${iM&&iM.getInternalTexture()?iM.getInternalTexture().uniqueId:"NoTangent"}`
          }(iM);
          if (this._anisoTexturesMap[MM]) OM.push(this._anisoTexturesMap[MM]);
          else {
            const rM = await async function(MM) {
              const rM = MM.Hk(),
                iM = MM.specularRoughnessAnisotropyTexture,
                OM = MM.geometryTangentTexture;
              return iM || OM ? await ai("AnisotropyTexture", Qi(OM ? Pi(OM, 0) : ni(1), OM ? Pi(OM, 1) : ni(0), iM ? Pi(iM, 0) : ni(1)), rM) : null
            }(iM);
            rM && (OM.push(rM), this._anisoTexturesMap[MM] = rM)
          }
          return OM
        }
        return []
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          var OM;
          if (iM instanceof Cr) {
            if (!iM.anisotropy.isEnabled || iM.anisotropy.legacy) return void MM(rM);
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            const OM = this._exporter._materialExporter.getTextureInfo(iM.anisotropy.texture),
              SM = {
                anisotropyStrength: iM.anisotropy.intensity,
                anisotropyRotation: iM.anisotropy.angle,
                anisotropyTexture: OM ?? void 0
              };
            null !== SM.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[GS] = SM
          } else if (iM instanceof Vr && iM.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            let SM = iM.specularRoughnessTexture;
            iM._useRoughnessFromMetallicTextureGreen && (SM = iM.baseMetalnessTexture);
            const jM = this._anisoTexturesMap[iM.id];
            if (!SM && !jM) {
              let OM = iM.specularRoughness,
                SM = iM.specularRoughnessAnisotropy;
              if (!iM._useGltfStyleAnisotropy) {
                const MM = function(MM, rM) {
                  const iM = MM * MM,
                    OM = iM * Math.sqrt(2 / (1 + (1 - rM) * (1 - rM))),
                    SM = (1 - rM) * OM;
                  return {
                    newBaseRoughness: Math.sqrt(SM),
                    newAnisotropyStrength: Math.min(Math.sqrt((OM - iM) / Math.max(1 - iM, 1e-4)), 1)
                  }
                }(iM.specularRoughness, iM.specularRoughnessAnisotropy);
                OM = MM.newBaseRoughness, SM = MM.newAnisotropyStrength
              }
              rM.pbrMetallicRoughness && (rM.pbrMetallicRoughness.roughnessFactor = OM);
              const jM = {
                anisotropyStrength: SM,
                anisotropyRotation: iM.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return rM.extensions[GS] = jM, MM(rM)
            }
            const aM = jM ? this._exporter._materialExporter.getTextureInfo(jM) : null,
              PM = {
                anisotropyStrength: iM.specularRoughnessAnisotropy,
                anisotropyRotation: iM.geometryTangentAngle,
                anisotropyTexture: aM || void 0,
                extensions: {}
              };
            iM._useGltfStyleAnisotropy || (rM.extensions.KHR_materials_openpbr = {}, (OM = this._exporter._glTF).extensionsUsed || (OM.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[GS] = PM
          }
          MM(rM)
        }))
      }
    }
    let eS = !1;

    function bS() {
      eS || (eS = !0, ZO.RegisterExtension(GS, (MM => new CS(MM))))
    }
    bS();
    const wS = "KHR_materials_clearcoat";

    function tS(MM, rM) {
      const iM = new RM.h(rM.name, rM.Hk());
      return iM._texture = MM, iM.coordinatesIndex = rM.coordinatesIndex, rM instanceof RM.h && (iM.uOffset = rM.uOffset, iM.vOffset = rM.vOffset, iM.uScale = rM.uScale, iM.vScale = rM.vScale, iM.wAng = rM.wAng), iM.wrapU = rM.wrapU, iM.wrapV = rM.wrapV, iM
    }
    class gS {
      constructor(MM) {
        this.name = wS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = MM
      }
      dispose() {
        for (const MM of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[MM].dispose()
        }
        this._mergedTexturesMap = {};
        for (const MM of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[MM].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof Cr) {
          if (iM.clearCoat.isEnabled) return iM.clearCoat.texture && OM.push(iM.clearCoat.texture), !iM.clearCoat.useRoughnessFromMainTexture && iM.clearCoat.textureRoughness && OM.push(iM.clearCoat.textureRoughness), iM.clearCoat.bumpTexture && OM.push(iM.clearCoat.bumpTexture), OM
        } else if (iM instanceof Vr && iM.coatWeight > 0) {
          let MM = !1;
          if (iM.coatWeightTexture ? iM.coatRoughnessTexture ? iM._useCoatRoughnessFromGreenChannel && iM.coatWeightTexture.getInternalTexture() === iM.coatRoughnessTexture.getInternalTexture() ? (OM.push(iM.coatWeightTexture), OM.push(iM.coatRoughnessTexture)) : MM = !0 : OM.push(iM.coatWeightTexture) : iM.coatRoughnessTexture && (iM._useCoatRoughnessFromGreenChannel ? OM.push(iM.coatRoughnessTexture) : MM = !0), MM) {
            const MM = function(MM) {
              const rM = MM.coatWeightTexture,
                iM = rM && rM.getInternalTexture() ? rM.getInternalTexture().uniqueId : "NoCoat",
                OM = MM.coatRoughnessTexture;
              return `${iM}_${OM&&OM.getInternalTexture()?OM.getInternalTexture().uniqueId:"NoRoughness"}`
            }(iM);
            if (!this._cachedInternalTexturesMap[MM]) {
              const rM = await async function(MM) {
                const rM = MM.Hk(),
                  iM = MM.coatWeightTexture,
                  OM = MM.coatRoughnessTexture;
                return iM || OM ? (await ai("CoatTexture", Qi(iM ? Pi(iM, 0) : ni(1), OM ? Pi(OM, MM._useCoatRoughnessFromGreenChannel ? 1 : 0) : ni(1)), rM)).getInternalTexture() : null
              }(iM);
              rM && (this._cachedInternalTexturesMap[MM] = rM)
            }
            this._cachedInternalTexturesMap[MM] && (iM.coatWeightTexture && (this._mergedTexturesMap[iM.coatWeightTexture.uniqueId] = tS(this._cachedInternalTexturesMap[MM], iM.coatWeightTexture), OM.push(this._mergedTexturesMap[iM.coatWeightTexture.uniqueId])), iM.coatRoughnessTexture && (this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId] = tS(this._cachedInternalTexturesMap[MM], iM.coatRoughnessTexture), OM.push(this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId])))
          }
          return iM.geometryCoatNormalTexture && OM.push(iM.geometryCoatNormalTexture), OM
        }
        return []
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          if (iM instanceof Cr) {
            if (!iM.clearCoat.isEnabled) return void MM(rM);
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            const OM = this._exporter._materialExporter.getTextureInfo(iM.clearCoat.texture);
            let SM;
            SM = iM.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(iM.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(iM.clearCoat.textureRoughness), iM.clearCoat.isTintEnabled && br.e.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${iM.name}`), iM.clearCoat.remapF0OnInterfaceChange && br.e.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${iM.name}`);
            const jM = this._exporter._materialExporter.getTextureInfo(iM.clearCoat.bumpTexture),
              aM = {
                clearcoatFactor: iM.clearCoat.intensity,
                clearcoatTexture: OM ?? void 0,
                clearcoatRoughnessFactor: iM.clearCoat.roughness,
                clearcoatRoughnessTexture: SM ?? void 0,
                clearcoatNormalTexture: jM ?? void 0
              };
            null === aM.clearcoatTexture && null === aM.clearcoatRoughnessTexture && null === aM.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[wS] = aM
          } else if (iM instanceof Vr) {
            if (0 == iM.coatWeight) return void MM(rM);
            let OM, SM, jM, aM;
            this._wasUsed = !0, rM.extensions = rM.extensions || {}, iM.coatWeightTexture && (OM = this._mergedTexturesMap[iM.coatWeightTexture.uniqueId], SM = this._exporter._materialExporter.getTextureInfo(OM)), iM.coatRoughnessTexture && (jM = this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId], aM = this._exporter._materialExporter.getTextureInfo(jM)), iM.coatColorTexture && br.e.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${iM.name}`);
            const PM = this._exporter._materialExporter.getTextureInfo(iM.geometryCoatNormalTexture),
              nM = {
                clearcoatFactor: iM.coatWeight,
                clearcoatTexture: SM ?? void 0,
                clearcoatRoughnessFactor: iM.coatRoughness,
                clearcoatRoughnessTexture: aM ?? void 0,
                clearcoatNormalTexture: PM ?? void 0
              };
            null === nM.clearcoatTexture && null === nM.clearcoatRoughnessTexture && null === nM.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[wS] = nM
          }
          MM(rM)
        }))
      }
    }
    let uS = !1;

    function RS() {
      uS || (uS = !0, ZO.RegisterExtension(wS, (MM => new gS(MM))))
    }
    RS();
    const pS = "KHR_materials_coat";

    function WS(MM) {
      const rM = MM.coatRoughnessAnisotropyTexture,
        iM = MM.geometryCoatTangentTexture;
      return `${rM&&rM.getInternalTexture()?rM.getInternalTexture().uniqueId:"NoStrength"}_${iM&&iM.getInternalTexture()?iM.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function sS(MM, rM) {
      const iM = new RM.h(rM.name, rM.Hk());
      return iM._texture = MM, iM.coordinatesIndex = rM.coordinatesIndex, rM instanceof RM.h && (iM.uOffset = rM.uOffset, iM.vOffset = rM.vOffset, iM.uScale = rM.uScale, iM.vScale = rM.vScale, iM.wAng = rM.wAng), iM.wrapU = rM.wrapU, iM.wrapV = rM.wrapV, iM
    }
    class DS {
      constructor(MM) {
        this.name = pS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = MM
      }
      dispose() {
        for (const MM of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[MM].dispose()
        }
        this._mergedTexturesMap = {};
        for (const MM of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[MM].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof Cr) {
          if (iM.clearCoat.isEnabled) return iM.clearCoat.texture && OM.push(iM.clearCoat.texture), !iM.clearCoat.useRoughnessFromMainTexture && iM.clearCoat.textureRoughness && OM.push(iM.clearCoat.textureRoughness), iM.clearCoat.bumpTexture && OM.push(iM.clearCoat.bumpTexture), iM.clearCoat.tintTexture && OM.push(iM.clearCoat.tintTexture), OM
        } else if (iM instanceof Vr && iM.coatWeight > 0) {
          let MM = !1;
          if (iM.coatWeightTexture ? iM.coatRoughnessTexture ? iM._useCoatRoughnessFromGreenChannel && iM.coatWeightTexture.getInternalTexture() === iM.coatRoughnessTexture.getInternalTexture() ? (OM.push(iM.coatWeightTexture), OM.push(iM.coatRoughnessTexture)) : MM = !0 : OM.push(iM.coatWeightTexture) : iM.coatRoughnessTexture && (iM._useCoatRoughnessFromGreenChannel ? OM.push(iM.coatRoughnessTexture) : MM = !0), MM) {
            const MM = function(MM) {
              const rM = MM.coatWeightTexture,
                iM = rM && rM.getInternalTexture() ? rM.getInternalTexture().uniqueId : "NoCoat",
                OM = MM.coatRoughnessTexture;
              return `${iM}_${OM&&OM.getInternalTexture()?OM.getInternalTexture().uniqueId:"NoRoughness"}`
            }(iM);
            if (!this._cachedInternalTexturesMap[MM]) {
              const rM = await async function(MM) {
                const rM = MM.Hk(),
                  iM = MM.coatWeightTexture,
                  OM = MM.coatRoughnessTexture;
                return iM || OM ? (await ai("CoatTexture", Qi(iM ? Pi(iM, 0) : ni(1), OM ? Pi(OM, MM._useCoatRoughnessFromGreenChannel ? 1 : 0) : ni(1)), rM)).getInternalTexture() : null
              }(iM);
              rM && (this._cachedInternalTexturesMap[MM] = rM)
            }
            this._cachedInternalTexturesMap[MM] && (iM.coatWeightTexture && (this._mergedTexturesMap[iM.coatWeightTexture.uniqueId] = sS(this._cachedInternalTexturesMap[MM], iM.coatWeightTexture), OM.push(this._mergedTexturesMap[iM.coatWeightTexture.uniqueId])), iM.coatRoughnessTexture && (this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId] = sS(this._cachedInternalTexturesMap[MM], iM.coatRoughnessTexture), OM.push(this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId])))
          }
          if (iM.geometryCoatNormalTexture && OM.push(iM.geometryCoatNormalTexture), iM.coatColorTexture && OM.push(iM.coatColorTexture), iM.coatRoughnessAnisotropy > 0) {
            const MM = WS(iM);
            if (this._mergedTexturesMap[MM]) OM.push(this._mergedTexturesMap[MM]);
            else {
              const rM = await async function(MM) {
                const rM = MM.Hk(),
                  iM = MM.coatRoughnessAnisotropyTexture,
                  OM = MM.geometryCoatTangentTexture;
                return iM || OM ? await ai("AnisotropyTexture", Qi(OM ? Pi(OM, 0) : ni(1), OM ? Pi(OM, 1) : ni(0), iM ? Pi(iM, 0) : ni(1)), rM) : null
              }(iM);
              rM && (OM.push(rM), this._mergedTexturesMap[MM] = rM)
            }
            return OM
          }
          return OM
        }
        return []
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          var OM;
          if (iM instanceof Cr) {
            if (!iM.clearCoat.isEnabled) return void MM(rM);
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            const OM = this._exporter._materialExporter.getTextureInfo(iM.clearCoat.texture);
            let SM, jM;
            SM = iM.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(iM.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(iM.clearCoat.textureRoughness), iM.clearCoat.isTintEnabled && (jM = this._exporter._materialExporter.getTextureInfo(iM.clearCoat.tintTexture));
            const aM = this._exporter._materialExporter.getTextureInfo(iM.clearCoat.bumpTexture),
              PM = iM.clearCoat.indexOfRefraction,
              nM = {
                coatFactor: iM.clearCoat.intensity,
                coatTexture: OM ?? void 0,
                coatRoughnessFactor: iM.clearCoat.roughness,
                coatRoughnessTexture: SM ?? void 0,
                coatNormalTexture: aM ?? void 0,
                coatColorFactor: iM.clearCoat.tintColor.HOM(),
                coatColorTexture: jM ?? void 0,
                coatIor: 1.5 !== PM ? PM : void 0
              };
            null === nM.coatTexture && null === nM.coatRoughnessTexture && null === nM.coatRoughnessTexture && null === nM.coatColorTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[pS] = nM
          } else if (iM instanceof Vr) {
            if (0 == iM.coatWeight) return void MM(rM);
            let SM, jM, aM, PM;
            this._wasUsed = !0, rM.extensions = rM.extensions || {}, iM.coatWeightTexture && (SM = this._mergedTexturesMap[iM.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[iM.coatWeightTexture.uniqueId] : iM.coatWeightTexture, jM = this._exporter._materialExporter.getTextureInfo(SM)), iM.coatRoughnessTexture && (aM = this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[iM.coatRoughnessTexture.uniqueId] : iM.coatRoughnessTexture, PM = this._exporter._materialExporter.getTextureInfo(aM));
            const nM = this._exporter._materialExporter.getTextureInfo(iM.geometryCoatNormalTexture),
              QM = this._exporter._materialExporter.getTextureInfo(iM.coatColorTexture),
              zM = iM.coatIor,
              LM = iM.coatDarkening,
              mM = iM.coatRoughnessTexture,
              HM = WS(iM),
              hM = this._mergedTexturesMap[HM];
            let JM, dM = 0,
              yM = 0;
            if (iM.coatRoughnessAnisotropy > 0) {
              if (mM || hM) {
                const MM = hM ? this._exporter._materialExporter.getTextureInfo(hM) : null;
                dM = iM.coatRoughnessAnisotropy, yM = iM.geometryCoatTangentAngle, JM = MM || void 0
              } else {
                let MM = iM.coatRoughness,
                  OM = iM.coatRoughnessAnisotropy;
                if (!iM._useGltfStyleAnisotropy) {
                  const rM = function(MM, rM) {
                    const iM = MM * MM,
                      OM = iM * Math.sqrt(2 / (1 + (1 - rM) * (1 - rM))),
                      SM = (1 - rM) * OM;
                    return {
                      newBaseRoughness: Math.sqrt(SM),
                      newAnisotropyStrength: Math.min(Math.sqrt((OM - iM) / Math.max(1 - iM, 1e-4)), 1)
                    }
                  }(iM.coatRoughness, iM.coatRoughnessAnisotropy);
                  MM = rM.newBaseRoughness, OM = rM.newAnisotropyStrength
                }
                rM.pbrMetallicRoughness && (rM.pbrMetallicRoughness.roughnessFactor = MM), dM = OM, yM = iM.geometryCoatTangentAngle + .5 * Math.PI, JM = void 0
              }
              iM._useGltfStyleAnisotropy || (rM.extensions.KHR_materials_openpbr = {}, (OM = this._exporter._glTF).extensionsUsed || (OM.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const lM = {
              coatFactor: iM.coatWeight,
              coatTexture: jM ?? void 0,
              coatRoughnessFactor: iM.coatRoughness,
              coatRoughnessTexture: PM ?? void 0,
              coatNormalTexture: nM ?? void 0,
              coatColorFactor: iM.coatColor.HOM(),
              coatColorTexture: QM ?? void 0,
              coatIor: 1.5 !== zM ? zM : void 0,
              coatDarkeningFactor: 1 !== LM ? LM : void 0,
              coatAnisotropyRotation: yM,
              coatAnisotropyStrength: dM,
              coatAnisotropyTexture: JM
            };
            null === lM.coatTexture && null === lM.coatRoughnessTexture && null === lM.coatRoughnessTexture && null === lM.coatAnisotropyTexture && null === lM.coatColorTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[pS] = lM
          }
          MM(rM)
        }))
      }
    }
    let kS = !1;

    function ZS() {
      kS || (kS = !0, ZO.RegisterExtension(pS, (MM => new DS(MM))))
    }
    ZS();
    let oS = (() => {
      var MM, rM, iM, OM, SM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, gM, uM, RM, pM, WM, sM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, XM, IM, KM, qM, TM, VM, cM, Mr, rr, ir, Or, Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr, Er;
      let Ur, Gr, br, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Nr, Ar, xr, vr, Fr, Br, Xr, Ir, Kr, qr, Tr, Vr, cr, Mi, ri, ii, Oi, Si, ji, ai, Pi, ni, Qi, zi, Li, mi, Hi, Ji, di, yi, li, Ei, Ui, Gi, Ci, ei, bi, wi, ti, gi, ui, Ri, Wi, si, Di, ki, Zi, oi, fi, Yi, Ni, Ai = Cr,
        xi = [],
        vi = [],
        Fi = [],
        Bi = [],
        Xi = [],
        Ii = [],
        Ki = [],
        qi = [],
        Ti = [],
        Vi = [],
        ci = [],
        MO = [],
        rO = [],
        iO = [],
        OO = [],
        SO = [],
        jO = [],
        aO = [],
        PO = [],
        nO = [],
        QO = [],
        zO = [],
        LO = [],
        mO = [],
        HO = [],
        hO = [],
        JO = [],
        dO = [],
        yO = [],
        lO = [],
        EO = [],
        UO = [],
        GO = [],
        CO = [],
        eO = [],
        bO = [],
        wO = [],
        tO = [],
        gO = [],
        uO = [],
        RO = [],
        pO = [],
        WO = [],
        sO = [],
        DO = [],
        kO = [],
        ZO = [],
        oO = [],
        fO = [],
        YO = [],
        NO = [],
        AO = [],
        xO = [],
        vO = [],
        FO = [],
        BO = [],
        XO = [],
        IO = [],
        KO = [],
        qO = [],
        TO = [],
        VO = [],
        cO = [],
        MS = [],
        rS = [],
        iS = [],
        OS = [],
        SS = [],
        jS = [],
        aS = [],
        PS = [],
        nS = [],
        QS = [],
        zS = [],
        LS = [],
        mS = [],
        HS = [],
        hS = [],
        JS = [],
        dS = [],
        yS = [],
        lS = [],
        ES = [],
        US = [],
        GS = [],
        CS = [],
        eS = [],
        bS = [],
        wS = [],
        tS = [],
        gS = [],
        uS = [],
        RS = [],
        pS = [],
        WS = [],
        sS = [],
        DS = [],
        kS = [],
        ZS = [],
        oS = [],
        fS = [],
        YS = [],
        NS = [],
        AS = [],
        xS = [],
        vS = [],
        FS = [],
        BS = [],
        XS = [],
        IS = [],
        KS = [],
        qS = [],
        TS = [],
        VS = [],
        cS = [],
        Mj = [],
        rj = [],
        ij = [],
        Oj = [],
        Sj = [],
        jj = [],
        aj = [],
        Pj = [],
        nj = [],
        Qj = [],
        zj = [],
        Lj = [],
        mj = [],
        Hj = [],
        hj = [],
        Jj = [],
        dj = [],
        yj = [];
      return MM = class extends Ai {
        get directIntensity() {
          return (0, wM.c)(this, rM, "f")
        }
        set directIntensity(MM) {
          (0, wM.f)(this, rM, MM, "f")
        }
        get emissiveIntensity() {
          return (0, wM.c)(this, iM, "f")
        }
        set emissiveIntensity(MM) {
          (0, wM.f)(this, iM, MM, "f")
        }
        get environmentIntensity() {
          return (0, wM.c)(this, OM, "f")
        }
        set environmentIntensity(MM) {
          (0, wM.f)(this, OM, MM, "f")
        }
        get specularIntensity() {
          return (0, wM.c)(this, SM, "f")
        }
        set specularIntensity(MM) {
          (0, wM.f)(this, SM, MM, "f")
        }
        get disableBumpMap() {
          return (0, wM.c)(this, aM, "f")
        }
        set disableBumpMap(MM) {
          (0, wM.f)(this, aM, MM, "f")
        }
        get albedoTexture() {
          return (0, wM.c)(this, PM, "f")
        }
        set albedoTexture(MM) {
          (0, wM.f)(this, PM, MM, "f")
        }
        get baseWeightTexture() {
          return (0, wM.c)(this, nM, "f")
        }
        set baseWeightTexture(MM) {
          (0, wM.f)(this, nM, MM, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, wM.c)(this, QM, "f")
        }
        set baseDiffuseRoughnessTexture(MM) {
          (0, wM.f)(this, QM, MM, "f")
        }
        get ambientTexture() {
          return (0, wM.c)(this, zM, "f")
        }
        set ambientTexture(MM) {
          (0, wM.f)(this, zM, MM, "f")
        }
        get ambientTextureStrength() {
          return (0, wM.c)(this, LM, "f")
        }
        set ambientTextureStrength(MM) {
          (0, wM.f)(this, LM, MM, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, wM.c)(this, mM, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(MM) {
          (0, wM.f)(this, mM, MM, "f")
        }
        get opacityTexture() {
          return (0, wM.c)(this, HM, "f")
        }
        set opacityTexture(MM) {
          (0, wM.f)(this, HM, MM, "f")
        }
        get reflectionTexture() {
          return (0, wM.c)(this, hM, "f")
        }
        set reflectionTexture(MM) {
          (0, wM.f)(this, hM, MM, "f")
        }
        get emissiveTexture() {
          return (0, wM.c)(this, JM, "f")
        }
        set emissiveTexture(MM) {
          (0, wM.f)(this, JM, MM, "f")
        }
        get reflectivityTexture() {
          return (0, wM.c)(this, dM, "f")
        }
        set reflectivityTexture(MM) {
          (0, wM.f)(this, dM, MM, "f")
        }
        get metallicTexture() {
          return (0, wM.c)(this, yM, "f")
        }
        set metallicTexture(MM) {
          (0, wM.f)(this, yM, MM, "f")
        }
        get metallic() {
          return (0, wM.c)(this, lM, "f")
        }
        set metallic(MM) {
          (0, wM.f)(this, lM, MM, "f")
        }
        get roughness() {
          return (0, wM.c)(this, EM, "f")
        }
        set roughness(MM) {
          (0, wM.f)(this, EM, MM, "f")
        }
        get metallicF0Factor() {
          return (0, wM.c)(this, UM, "f")
        }
        set metallicF0Factor(MM) {
          (0, wM.f)(this, UM, MM, "f")
        }
        get metallicReflectanceColor() {
          return (0, wM.c)(this, GM, "f")
        }
        set metallicReflectanceColor(MM) {
          (0, wM.f)(this, GM, MM, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, wM.c)(this, CM, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(MM) {
          (0, wM.f)(this, CM, MM, "f")
        }
        get metallicReflectanceTexture() {
          return (0, wM.c)(this, eM, "f")
        }
        set metallicReflectanceTexture(MM) {
          (0, wM.f)(this, eM, MM, "f")
        }
        get reflectanceTexture() {
          return (0, wM.c)(this, bM, "f")
        }
        set reflectanceTexture(MM) {
          (0, wM.f)(this, bM, MM, "f")
        }
        get microSurfaceTexture() {
          return (0, wM.c)(this, gM, "f")
        }
        set microSurfaceTexture(MM) {
          (0, wM.f)(this, gM, MM, "f")
        }
        get bumpTexture() {
          return (0, wM.c)(this, uM, "f")
        }
        set bumpTexture(MM) {
          (0, wM.f)(this, uM, MM, "f")
        }
        get lightmapTexture() {
          return (0, wM.c)(this, RM, "f")
        }
        set lightmapTexture(MM) {
          (0, wM.f)(this, RM, MM, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(MM) {
          this.subSurface.refractionTexture = MM, MM ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, wM.c)(this, pM, "f")
        }
        set ambientColor(MM) {
          (0, wM.f)(this, pM, MM, "f")
        }
        get albedoColor() {
          return (0, wM.c)(this, WM, "f")
        }
        set albedoColor(MM) {
          (0, wM.f)(this, WM, MM, "f")
        }
        get baseWeight() {
          return (0, wM.c)(this, sM, "f")
        }
        set baseWeight(MM) {
          (0, wM.f)(this, sM, MM, "f")
        }
        get baseDiffuseRoughness() {
          return (0, wM.c)(this, kM, "f")
        }
        set baseDiffuseRoughness(MM) {
          (0, wM.f)(this, kM, MM, "f")
        }
        get reflectivityColor() {
          return (0, wM.c)(this, ZM, "f")
        }
        set reflectivityColor(MM) {
          (0, wM.f)(this, ZM, MM, "f")
        }
        get reflectionColor() {
          return (0, wM.c)(this, oM, "f")
        }
        set reflectionColor(MM) {
          (0, wM.f)(this, oM, MM, "f")
        }
        get emissiveColor() {
          return (0, wM.c)(this, fM, "f")
        }
        set emissiveColor(MM) {
          (0, wM.f)(this, fM, MM, "f")
        }
        get microSurface() {
          return (0, wM.c)(this, YM, "f")
        }
        set microSurface(MM) {
          (0, wM.f)(this, YM, MM, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(MM) {
          this.subSurface.indexOfRefraction = MM
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(MM) {
          this.subSurface.invertRefractionY = MM
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(MM) {
          this.subSurface.linkRefractionWithTransparency = MM, MM && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, wM.c)(this, NM, "f")
        }
        set useLightmapAsShadowmap(MM) {
          (0, wM.f)(this, NM, MM, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, wM.c)(this, AM, "f")
        }
        set useAlphaFromAlbedoTexture(MM) {
          (0, wM.f)(this, AM, MM, "f")
        }
        get forceAlphaTest() {
          return (0, wM.c)(this, xM, "f")
        }
        set forceAlphaTest(MM) {
          (0, wM.f)(this, xM, MM, "f")
        }
        get alphaCutOff() {
          return (0, wM.c)(this, vM, "f")
        }
        set alphaCutOff(MM) {
          (0, wM.f)(this, vM, MM, "f")
        }
        get useSpecularOverAlpha() {
          return (0, wM.c)(this, FM, "f")
        }
        set useSpecularOverAlpha(MM) {
          (0, wM.f)(this, FM, MM, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, wM.c)(this, XM, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(MM) {
          (0, wM.f)(this, XM, MM, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, wM.c)(this, IM, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(MM) {
          (0, wM.f)(this, IM, MM, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, wM.c)(this, KM, "f")
        }
        set useRoughnessFromMetallicTextureGreen(MM) {
          (0, wM.f)(this, KM, MM, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, wM.c)(this, qM, "f")
        }
        set useMetallnessFromMetallicTextureBlue(MM) {
          (0, wM.f)(this, qM, MM, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, wM.c)(this, TM, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(MM) {
          (0, wM.f)(this, TM, MM, "f")
        }
        get useAmbientInGrayScale() {
          return (0, wM.c)(this, VM, "f")
        }
        set useAmbientInGrayScale(MM) {
          (0, wM.f)(this, VM, MM, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, wM.c)(this, cM, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(MM) {
          (0, wM.f)(this, cM, MM, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Cr.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(MM) {
          MM !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = MM ? Cr.LIGHTFALLOFF_PHYSICAL : Cr.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Cr.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(MM) {
          MM !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = MM ? Cr.LIGHTFALLOFF_GLTF : Cr.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, wM.c)(this, Mr, "f")
        }
        set useRadianceOverAlpha(MM) {
          (0, wM.f)(this, Mr, MM, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, wM.c)(this, rr, "f")
        }
        set useObjectSpaceNormalMap(MM) {
          (0, wM.f)(this, rr, MM, "f")
        }
        get useParallax() {
          return (0, wM.c)(this, ir, "f")
        }
        set useParallax(MM) {
          (0, wM.f)(this, ir, MM, "f")
        }
        get useParallaxOcclusion() {
          return (0, wM.c)(this, Or, "f")
        }
        set useParallaxOcclusion(MM) {
          (0, wM.f)(this, Or, MM, "f")
        }
        get parallaxScaleBias() {
          return (0, wM.c)(this, Sr, "f")
        }
        set parallaxScaleBias(MM) {
          (0, wM.f)(this, Sr, MM, "f")
        }
        get disableLighting() {
          return (0, wM.c)(this, jr, "f")
        }
        set disableLighting(MM) {
          (0, wM.f)(this, jr, MM, "f")
        }
        get forceIrradianceInFragment() {
          return (0, wM.c)(this, ar, "f")
        }
        set forceIrradianceInFragment(MM) {
          (0, wM.f)(this, ar, MM, "f")
        }
        get maxSimultaneousLights() {
          return (0, wM.c)(this, Pr, "f")
        }
        set maxSimultaneousLights(MM) {
          (0, wM.f)(this, Pr, MM, "f")
        }
        get invertNormalMapX() {
          return (0, wM.c)(this, nr, "f")
        }
        set invertNormalMapX(MM) {
          (0, wM.f)(this, nr, MM, "f")
        }
        get invertNormalMapY() {
          return (0, wM.c)(this, Qr, "f")
        }
        set invertNormalMapY(MM) {
          (0, wM.f)(this, Qr, MM, "f")
        }
        get twoSidedLighting() {
          return (0, wM.c)(this, zr, "f")
        }
        set twoSidedLighting(MM) {
          (0, wM.f)(this, zr, MM, "f")
        }
        get useAlphaFresnel() {
          return (0, wM.c)(this, Lr, "f")
        }
        set useAlphaFresnel(MM) {
          (0, wM.f)(this, Lr, MM, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, wM.c)(this, mr, "f")
        }
        set useLinearAlphaFresnel(MM) {
          (0, wM.f)(this, mr, MM, "f")
        }
        get environmentBRDFTexture() {
          return (0, wM.c)(this, Hr, "f")
        }
        set environmentBRDFTexture(MM) {
          (0, wM.f)(this, Hr, MM, "f")
        }
        get forceNormalForward() {
          return (0, wM.c)(this, hr, "f")
        }
        set forceNormalForward(MM) {
          (0, wM.f)(this, hr, MM, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, wM.c)(this, Jr, "f")
        }
        set enableSpecularAntiAliasing(MM) {
          (0, wM.f)(this, Jr, MM, "f")
        }
        get useHorizonOcclusion() {
          return (0, wM.c)(this, dr, "f")
        }
        set useHorizonOcclusion(MM) {
          (0, wM.f)(this, dr, MM, "f")
        }
        get useRadianceOcclusion() {
          return (0, wM.c)(this, yr, "f")
        }
        set useRadianceOcclusion(MM) {
          (0, wM.f)(this, yr, MM, "f")
        }
        get unlit() {
          return (0, wM.c)(this, lr, "f")
        }
        set unlit(MM) {
          (0, wM.f)(this, lr, MM, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, wM.c)(this, Er, "f")
        }
        set applyDecalMapAfterDetailMap(MM) {
          (0, wM.f)(this, Er, MM, "f")
        }
        constructor(jM, tM) {
          super(jM, tM, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), rM.set(this, ((0, wM.m)(this, xi), (0, wM.m)(this, vi, 1))), iM.set(this, ((0, wM.m)(this, Fi), (0, wM.m)(this, Bi, 1))), OM.set(this, ((0, wM.m)(this, Xi), (0, wM.m)(this, Ii, 1))), SM.set(this, ((0, wM.m)(this, Ki), (0, wM.m)(this, qi, 1))), aM.set(this, ((0, wM.m)(this, Ti), (0, wM.m)(this, Vi, !1))), PM.set(this, ((0, wM.m)(this, ci), (0, wM.m)(this, MO, void 0))), nM.set(this, ((0, wM.m)(this, rO), (0, wM.m)(this, iO, void 0))), QM.set(this, ((0, wM.m)(this, OO), (0, wM.m)(this, SO, void 0))), zM.set(this, ((0, wM.m)(this, jO), (0, wM.m)(this, aO, void 0))), LM.set(this, ((0, wM.m)(this, PO), (0, wM.m)(this, nO, 1))), mM.set(this, ((0, wM.m)(this, QO), (0, wM.m)(this, zO, MM.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), HM.set(this, ((0, wM.m)(this, LO), (0, wM.m)(this, mO, void 0))), hM.set(this, ((0, wM.m)(this, HO), (0, wM.m)(this, hO, void 0))), JM.set(this, ((0, wM.m)(this, JO), (0, wM.m)(this, dO, void 0))), dM.set(this, ((0, wM.m)(this, yO), (0, wM.m)(this, lO, void 0))), yM.set(this, ((0, wM.m)(this, EO), (0, wM.m)(this, UO, void 0))), lM.set(this, ((0, wM.m)(this, GO), (0, wM.m)(this, CO, void 0))), EM.set(this, ((0, wM.m)(this, eO), (0, wM.m)(this, bO, void 0))), UM.set(this, ((0, wM.m)(this, wO), (0, wM.m)(this, tO, 1))), GM.set(this, ((0, wM.m)(this, gO), (0, wM.m)(this, uO, BM.d.White()))), CM.set(this, ((0, wM.m)(this, RO), (0, wM.m)(this, pO, !1))), eM.set(this, ((0, wM.m)(this, WO), (0, wM.m)(this, sO, void 0))), bM.set(this, ((0, wM.m)(this, DO), (0, wM.m)(this, kO, void 0))), gM.set(this, ((0, wM.m)(this, ZO), (0, wM.m)(this, oO, void 0))), uM.set(this, ((0, wM.m)(this, fO), (0, wM.m)(this, YO, void 0))), RM.set(this, ((0, wM.m)(this, NO), (0, wM.m)(this, AO, void 0))), pM.set(this, ((0, wM.m)(this, xO), (0, wM.m)(this, vO, new BM.d(0, 0, 0)))), WM.set(this, ((0, wM.m)(this, FO), (0, wM.m)(this, BO, new BM.d(1, 1, 1)))), sM.set(this, ((0, wM.m)(this, XO), (0, wM.m)(this, IO, 1))), kM.set(this, ((0, wM.m)(this, KO), (0, wM.m)(this, qO, void 0))), ZM.set(this, ((0, wM.m)(this, TO), (0, wM.m)(this, VO, new BM.d(1, 1, 1)))), oM.set(this, ((0, wM.m)(this, cO), (0, wM.m)(this, MS, new BM.d(1, 1, 1)))), fM.set(this, ((0, wM.m)(this, rS), (0, wM.m)(this, iS, new BM.d(0, 0, 0)))), YM.set(this, ((0, wM.m)(this, OS), (0, wM.m)(this, SS, 1))), NM.set(this, ((0, wM.m)(this, jS), (0, wM.m)(this, aS, !1))), AM.set(this, ((0, wM.m)(this, PS), (0, wM.m)(this, nS, !1))), xM.set(this, ((0, wM.m)(this, QS), (0, wM.m)(this, zS, !1))), vM.set(this, ((0, wM.m)(this, LS), (0, wM.m)(this, mS, .4))), FM.set(this, ((0, wM.m)(this, HS), (0, wM.m)(this, hS, !0))), XM.set(this, ((0, wM.m)(this, JS), (0, wM.m)(this, dS, !1))), IM.set(this, ((0, wM.m)(this, yS), (0, wM.m)(this, lS, !0))), KM.set(this, ((0, wM.m)(this, ES), (0, wM.m)(this, US, !1))), qM.set(this, ((0, wM.m)(this, GS), (0, wM.m)(this, CS, !1))), TM.set(this, ((0, wM.m)(this, eS), (0, wM.m)(this, bS, !1))), VM.set(this, ((0, wM.m)(this, wS), (0, wM.m)(this, tS, !1))), cM.set(this, ((0, wM.m)(this, gS), (0, wM.m)(this, uS, !1))), Mr.set(this, ((0, wM.m)(this, RS), (0, wM.m)(this, pS, !0))), rr.set(this, ((0, wM.m)(this, WS), (0, wM.m)(this, sS, !1))), ir.set(this, ((0, wM.m)(this, DS), (0, wM.m)(this, kS, !1))), Or.set(this, ((0, wM.m)(this, ZS), (0, wM.m)(this, oS, !1))), Sr.set(this, ((0, wM.m)(this, fS), (0, wM.m)(this, YS, .05))), jr.set(this, ((0, wM.m)(this, NS), (0, wM.m)(this, AS, !1))), ar.set(this, ((0, wM.m)(this, xS), (0, wM.m)(this, vS, !1))), Pr.set(this, ((0, wM.m)(this, FS), (0, wM.m)(this, BS, 4))), nr.set(this, ((0, wM.m)(this, XS), (0, wM.m)(this, IS, !1))), Qr.set(this, ((0, wM.m)(this, KS), (0, wM.m)(this, qS, !1))), zr.set(this, ((0, wM.m)(this, TS), (0, wM.m)(this, VS, !1))), Lr.set(this, ((0, wM.m)(this, cS), (0, wM.m)(this, Mj, !1))), mr.set(this, ((0, wM.m)(this, rj), (0, wM.m)(this, ij, !1))), Hr.set(this, ((0, wM.m)(this, Oj), (0, wM.m)(this, Sj, null))), hr.set(this, ((0, wM.m)(this, jj), (0, wM.m)(this, aj, !1))), Jr.set(this, ((0, wM.m)(this, Pj), (0, wM.m)(this, nj, !1))), dr.set(this, ((0, wM.m)(this, Qj), (0, wM.m)(this, zj, !0))), yr.set(this, ((0, wM.m)(this, Lj), (0, wM.m)(this, mj, !0))), lr.set(this, ((0, wM.m)(this, Hj), (0, wM.m)(this, hj, !1))), Er.set(this, ((0, wM.m)(this, Jj), (0, wM.m)(this, dj, !1))), (0, wM.m)(this, yj), this._environmentBRDFTexture = DM(this.Hk())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(rM) {
          let iM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const SM = er.b.Clone((() => new MM(rM, this.Hk())), this, {
            cloneTexturesOnlyOnce: iM
          });
          return SM.id = rM, SM.name = rM, this.stencil.copyTo(SM.stencil), this._clonePlugins(SM, OM), SM
        }
        serialize() {
          const MM = super.serialize();
          return MM.customType = "BABYLON.PBRMaterial", MM
        }
        static Parse(rM, iM, OM) {
          const SM = er.b.Parse((() => new MM(rM.name, iM)), rM, iM, OM);
          return rM.stencil && SM.stencil.parse(rM.stencil, iM, OM), jM.c._ParsePlugins(rM, SM, iM, OM), rM.clearCoat && SM.clearCoat.parse(rM.clearCoat, iM, OM), rM.anisotropy && SM.anisotropy.parse(rM.anisotropy, iM, OM), rM.brdf && SM.brdf.parse(rM.brdf, iM, OM), rM.sheen && SM.sheen.parse(rM.sheen, iM, OM), rM.subSurface && SM.subSurface.parse(rM.subSurface, iM, OM), rM.iridescence && SM.iridescence.parse(rM.iridescence, iM, OM), SM
        }
      }, rM = new WeakMap, iM = new WeakMap, OM = new WeakMap, SM = new WeakMap, aM = new WeakMap, PM = new WeakMap, nM = new WeakMap, QM = new WeakMap, zM = new WeakMap, LM = new WeakMap, mM = new WeakMap, HM = new WeakMap, hM = new WeakMap, JM = new WeakMap, dM = new WeakMap, yM = new WeakMap, lM = new WeakMap, EM = new WeakMap, UM = new WeakMap, GM = new WeakMap, CM = new WeakMap, eM = new WeakMap, bM = new WeakMap, gM = new WeakMap, uM = new WeakMap, RM = new WeakMap, pM = new WeakMap, WM = new WeakMap, sM = new WeakMap, kM = new WeakMap, ZM = new WeakMap, oM = new WeakMap, fM = new WeakMap, YM = new WeakMap, NM = new WeakMap, AM = new WeakMap, xM = new WeakMap, vM = new WeakMap, FM = new WeakMap, XM = new WeakMap, IM = new WeakMap, KM = new WeakMap, qM = new WeakMap, TM = new WeakMap, VM = new WeakMap, cM = new WeakMap, Mr = new WeakMap, rr = new WeakMap, ir = new WeakMap, Or = new WeakMap, Sr = new WeakMap, jr = new WeakMap, ar = new WeakMap, Pr = new WeakMap, nr = new WeakMap, Qr = new WeakMap, zr = new WeakMap, Lr = new WeakMap, mr = new WeakMap, Hr = new WeakMap, hr = new WeakMap, Jr = new WeakMap, dr = new WeakMap, yr = new WeakMap, lr = new WeakMap, Er = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ai[Symbol.metadata] ?? null) : void 0;
        Ur = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Gr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], br = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], wr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], tr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], gr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ur = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Rr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], pr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Wr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], sr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Dr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], kr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Zr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], or = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], fr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Yr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Nr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Ar = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], xr = [(0, tM.r)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], vr = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Fr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Br = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Xr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Ir = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Kr = [(0, tM.B)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty", null)], qr = [(0, tM.r)("ambient"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Tr = [(0, tM.r)("albedo"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Vr = [(0, tM.L)("baseWeight"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], cr = [(0, tM.L)("baseDiffuseRoughness"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Mi = [(0, tM.r)("reflectivity"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, tM.r)("reflection"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ii = [(0, tM.r)("emissive"), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Oi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Si = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], ai = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], ni = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Li = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], mi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Hi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Ji = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], di = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], yi = [(0, tM.L)()], li = [(0, tM.L)()], Ei = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Ui = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ei = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], bi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsLightsDirty")], wi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ti = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsLightsDirty")], gi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ui = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Ri = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Wi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], si = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, tM.g)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Zi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], oi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsTexturesDirty")], Yi = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], Ni = [(0, tM.L)(), (0, tM.g)("_markAllSubMeshesAsMiscDirty")], (0, wM.i)(MM, null, Ur, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "directIntensity" in MM,
            get: MM => MM.directIntensity,
            set: (MM, rM) => {
              MM.directIntensity = rM
            }
          },
          metadata: rM
        }, vi, Fi), (0, wM.i)(MM, null, Gr, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "emissiveIntensity" in MM,
            get: MM => MM.emissiveIntensity,
            set: (MM, rM) => {
              MM.emissiveIntensity = rM
            }
          },
          metadata: rM
        }, Bi, Xi), (0, wM.i)(MM, null, br, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "environmentIntensity" in MM,
            get: MM => MM.environmentIntensity,
            set: (MM, rM) => {
              MM.environmentIntensity = rM
            }
          },
          metadata: rM
        }, Ii, Ki), (0, wM.i)(MM, null, wr, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: MM => "specularIntensity" in MM,
            get: MM => MM.specularIntensity,
            set: (MM, rM) => {
              MM.specularIntensity = rM
            }
          },
          metadata: rM
        }, qi, Ti), (0, wM.i)(MM, null, tr, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: MM => "disableBumpMap" in MM,
            get: MM => MM.disableBumpMap,
            set: (MM, rM) => {
              MM.disableBumpMap = rM
            }
          },
          metadata: rM
        }, Vi, ci), (0, wM.i)(MM, null, gr, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "albedoTexture" in MM,
            get: MM => MM.albedoTexture,
            set: (MM, rM) => {
              MM.albedoTexture = rM
            }
          },
          metadata: rM
        }, MO, rO), (0, wM.i)(MM, null, ur, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "baseWeightTexture" in MM,
            get: MM => MM.baseWeightTexture,
            set: (MM, rM) => {
              MM.baseWeightTexture = rM
            }
          },
          metadata: rM
        }, iO, OO), (0, wM.i)(MM, null, Rr, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "baseDiffuseRoughnessTexture" in MM,
            get: MM => MM.baseDiffuseRoughnessTexture,
            set: (MM, rM) => {
              MM.baseDiffuseRoughnessTexture = rM
            }
          },
          metadata: rM
        }, SO, jO), (0, wM.i)(MM, null, pr, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "ambientTexture" in MM,
            get: MM => MM.ambientTexture,
            set: (MM, rM) => {
              MM.ambientTexture = rM
            }
          },
          metadata: rM
        }, aO, PO), (0, wM.i)(MM, null, Wr, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: MM => "ambientTextureStrength" in MM,
            get: MM => MM.ambientTextureStrength,
            set: (MM, rM) => {
              MM.ambientTextureStrength = rM
            }
          },
          metadata: rM
        }, nO, QO), (0, wM.i)(MM, null, sr, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: MM => "ambientTextureImpactOnAnalyticalLights" in MM,
            get: MM => MM.ambientTextureImpactOnAnalyticalLights,
            set: (MM, rM) => {
              MM.ambientTextureImpactOnAnalyticalLights = rM
            }
          },
          metadata: rM
        }, zO, LO), (0, wM.i)(MM, null, Dr, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "opacityTexture" in MM,
            get: MM => MM.opacityTexture,
            set: (MM, rM) => {
              MM.opacityTexture = rM
            }
          },
          metadata: rM
        }, mO, HO), (0, wM.i)(MM, null, kr, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "reflectionTexture" in MM,
            get: MM => MM.reflectionTexture,
            set: (MM, rM) => {
              MM.reflectionTexture = rM
            }
          },
          metadata: rM
        }, hO, JO), (0, wM.i)(MM, null, Zr, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "emissiveTexture" in MM,
            get: MM => MM.emissiveTexture,
            set: (MM, rM) => {
              MM.emissiveTexture = rM
            }
          },
          metadata: rM
        }, dO, yO), (0, wM.i)(MM, null, or, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "reflectivityTexture" in MM,
            get: MM => MM.reflectivityTexture,
            set: (MM, rM) => {
              MM.reflectivityTexture = rM
            }
          },
          metadata: rM
        }, lO, EO), (0, wM.i)(MM, null, fr, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "metallicTexture" in MM,
            get: MM => MM.metallicTexture,
            set: (MM, rM) => {
              MM.metallicTexture = rM
            }
          },
          metadata: rM
        }, UO, GO), (0, wM.i)(MM, null, Yr, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: MM => "metallic" in MM,
            get: MM => MM.metallic,
            set: (MM, rM) => {
              MM.metallic = rM
            }
          },
          metadata: rM
        }, CO, eO), (0, wM.i)(MM, null, Nr, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: MM => "roughness" in MM,
            get: MM => MM.roughness,
            set: (MM, rM) => {
              MM.roughness = rM
            }
          },
          metadata: rM
        }, bO, wO), (0, wM.i)(MM, null, Ar, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: MM => "metallicF0Factor" in MM,
            get: MM => MM.metallicF0Factor,
            set: (MM, rM) => {
              MM.metallicF0Factor = rM
            }
          },
          metadata: rM
        }, tO, gO), (0, wM.i)(MM, null, xr, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "metallicReflectanceColor" in MM,
            get: MM => MM.metallicReflectanceColor,
            set: (MM, rM) => {
              MM.metallicReflectanceColor = rM
            }
          },
          metadata: rM
        }, uO, RO), (0, wM.i)(MM, null, vr, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "useOnlyMetallicFromMetallicReflectanceTexture" in MM,
            get: MM => MM.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (MM, rM) => {
              MM.useOnlyMetallicFromMetallicReflectanceTexture = rM
            }
          },
          metadata: rM
        }, pO, WO), (0, wM.i)(MM, null, Fr, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "metallicReflectanceTexture" in MM,
            get: MM => MM.metallicReflectanceTexture,
            set: (MM, rM) => {
              MM.metallicReflectanceTexture = rM
            }
          },
          metadata: rM
        }, sO, DO), (0, wM.i)(MM, null, Br, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "reflectanceTexture" in MM,
            get: MM => MM.reflectanceTexture,
            set: (MM, rM) => {
              MM.reflectanceTexture = rM
            }
          },
          metadata: rM
        }, kO, ZO), (0, wM.i)(MM, null, Xr, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "microSurfaceTexture" in MM,
            get: MM => MM.microSurfaceTexture,
            set: (MM, rM) => {
              MM.microSurfaceTexture = rM
            }
          },
          metadata: rM
        }, oO, fO), (0, wM.i)(MM, null, Ir, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "bumpTexture" in MM,
            get: MM => MM.bumpTexture,
            set: (MM, rM) => {
              MM.bumpTexture = rM
            }
          },
          metadata: rM
        }, YO, NO), (0, wM.i)(MM, null, Kr, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "lightmapTexture" in MM,
            get: MM => MM.lightmapTexture,
            set: (MM, rM) => {
              MM.lightmapTexture = rM
            }
          },
          metadata: rM
        }, AO, xO), (0, wM.i)(MM, null, qr, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "ambientColor" in MM,
            get: MM => MM.ambientColor,
            set: (MM, rM) => {
              MM.ambientColor = rM
            }
          },
          metadata: rM
        }, vO, FO), (0, wM.i)(MM, null, Tr, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "albedoColor" in MM,
            get: MM => MM.albedoColor,
            set: (MM, rM) => {
              MM.albedoColor = rM
            }
          },
          metadata: rM
        }, BO, XO), (0, wM.i)(MM, null, Vr, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: MM => "baseWeight" in MM,
            get: MM => MM.baseWeight,
            set: (MM, rM) => {
              MM.baseWeight = rM
            }
          },
          metadata: rM
        }, IO, KO), (0, wM.i)(MM, null, cr, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: MM => "baseDiffuseRoughness" in MM,
            get: MM => MM.baseDiffuseRoughness,
            set: (MM, rM) => {
              MM.baseDiffuseRoughness = rM
            }
          },
          metadata: rM
        }, qO, TO), (0, wM.i)(MM, null, Mi, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "reflectivityColor" in MM,
            get: MM => MM.reflectivityColor,
            set: (MM, rM) => {
              MM.reflectivityColor = rM
            }
          },
          metadata: rM
        }, VO, cO), (0, wM.i)(MM, null, ri, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "reflectionColor" in MM,
            get: MM => MM.reflectionColor,
            set: (MM, rM) => {
              MM.reflectionColor = rM
            }
          },
          metadata: rM
        }, MS, rS), (0, wM.i)(MM, null, ii, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: MM => "emissiveColor" in MM,
            get: MM => MM.emissiveColor,
            set: (MM, rM) => {
              MM.emissiveColor = rM
            }
          },
          metadata: rM
        }, iS, OS), (0, wM.i)(MM, null, Oi, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: MM => "microSurface" in MM,
            get: MM => MM.microSurface,
            set: (MM, rM) => {
              MM.microSurface = rM
            }
          },
          metadata: rM
        }, SS, jS), (0, wM.i)(MM, null, Si, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: MM => "useLightmapAsShadowmap" in MM,
            get: MM => MM.useLightmapAsShadowmap,
            set: (MM, rM) => {
              MM.useLightmapAsShadowmap = rM
            }
          },
          metadata: rM
        }, aS, PS), (0, wM.i)(MM, null, ji, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAlphaFromAlbedoTexture" in MM,
            get: MM => MM.useAlphaFromAlbedoTexture,
            set: (MM, rM) => {
              MM.useAlphaFromAlbedoTexture = rM
            }
          },
          metadata: rM
        }, nS, QS), (0, wM.i)(MM, null, ai, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: MM => "forceAlphaTest" in MM,
            get: MM => MM.forceAlphaTest,
            set: (MM, rM) => {
              MM.forceAlphaTest = rM
            }
          },
          metadata: rM
        }, zS, LS), (0, wM.i)(MM, null, Pi, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: MM => "alphaCutOff" in MM,
            get: MM => MM.alphaCutOff,
            set: (MM, rM) => {
              MM.alphaCutOff = rM
            }
          },
          metadata: rM
        }, mS, HS), (0, wM.i)(MM, null, ni, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "useSpecularOverAlpha" in MM,
            get: MM => MM.useSpecularOverAlpha,
            set: (MM, rM) => {
              MM.useSpecularOverAlpha = rM
            }
          },
          metadata: rM
        }, hS, JS), (0, wM.i)(MM, null, Qi, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "useMicroSurfaceFromReflectivityMapAlpha" in MM,
            get: MM => MM.useMicroSurfaceFromReflectivityMapAlpha,
            set: (MM, rM) => {
              MM.useMicroSurfaceFromReflectivityMapAlpha = rM
            }
          },
          metadata: rM
        }, dS, yS), (0, wM.i)(MM, null, zi, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "useRoughnessFromMetallicTextureAlpha" in MM,
            get: MM => MM.useRoughnessFromMetallicTextureAlpha,
            set: (MM, rM) => {
              MM.useRoughnessFromMetallicTextureAlpha = rM
            }
          },
          metadata: rM
        }, lS, ES), (0, wM.i)(MM, null, Li, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: MM => "useRoughnessFromMetallicTextureGreen" in MM,
            get: MM => MM.useRoughnessFromMetallicTextureGreen,
            set: (MM, rM) => {
              MM.useRoughnessFromMetallicTextureGreen = rM
            }
          },
          metadata: rM
        }, US, GS), (0, wM.i)(MM, null, mi, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: MM => "useMetallnessFromMetallicTextureBlue" in MM,
            get: MM => MM.useMetallnessFromMetallicTextureBlue,
            set: (MM, rM) => {
              MM.useMetallnessFromMetallicTextureBlue = rM
            }
          },
          metadata: rM
        }, CS, eS), (0, wM.i)(MM, null, Hi, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAmbientOcclusionFromMetallicTextureRed" in MM,
            get: MM => MM.useAmbientOcclusionFromMetallicTextureRed,
            set: (MM, rM) => {
              MM.useAmbientOcclusionFromMetallicTextureRed = rM
            }
          },
          metadata: rM
        }, bS, wS), (0, wM.i)(MM, null, Ji, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAmbientInGrayScale" in MM,
            get: MM => MM.useAmbientInGrayScale,
            set: (MM, rM) => {
              MM.useAmbientInGrayScale = rM
            }
          },
          metadata: rM
        }, tS, gS), (0, wM.i)(MM, null, di, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAutoMicroSurfaceFromReflectivityMap" in MM,
            get: MM => MM.useAutoMicroSurfaceFromReflectivityMap,
            set: (MM, rM) => {
              MM.useAutoMicroSurfaceFromReflectivityMap = rM
            }
          },
          metadata: rM
        }, uS, RS), (0, wM.i)(MM, null, yi, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: MM => "usePhysicalLightFalloff" in MM,
            get: MM => MM.usePhysicalLightFalloff
          },
          metadata: rM
        }, null, xi), (0, wM.i)(MM, null, li, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: MM => "useGLTFLightFalloff" in MM,
            get: MM => MM.useGLTFLightFalloff
          },
          metadata: rM
        }, null, xi), (0, wM.i)(MM, null, Ei, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: MM => "useRadianceOverAlpha" in MM,
            get: MM => MM.useRadianceOverAlpha,
            set: (MM, rM) => {
              MM.useRadianceOverAlpha = rM
            }
          },
          metadata: rM
        }, pS, WS), (0, wM.i)(MM, null, Ui, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: MM => "useObjectSpaceNormalMap" in MM,
            get: MM => MM.useObjectSpaceNormalMap,
            set: (MM, rM) => {
              MM.useObjectSpaceNormalMap = rM
            }
          },
          metadata: rM
        }, sS, DS), (0, wM.i)(MM, null, Gi, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: MM => "useParallax" in MM,
            get: MM => MM.useParallax,
            set: (MM, rM) => {
              MM.useParallax = rM
            }
          },
          metadata: rM
        }, kS, ZS), (0, wM.i)(MM, null, Ci, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: MM => "useParallaxOcclusion" in MM,
            get: MM => MM.useParallaxOcclusion,
            set: (MM, rM) => {
              MM.useParallaxOcclusion = rM
            }
          },
          metadata: rM
        }, oS, fS), (0, wM.i)(MM, null, ei, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: MM => "parallaxScaleBias" in MM,
            get: MM => MM.parallaxScaleBias,
            set: (MM, rM) => {
              MM.parallaxScaleBias = rM
            }
          },
          metadata: rM
        }, YS, NS), (0, wM.i)(MM, null, bi, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: MM => "disableLighting" in MM,
            get: MM => MM.disableLighting,
            set: (MM, rM) => {
              MM.disableLighting = rM
            }
          },
          metadata: rM
        }, AS, xS), (0, wM.i)(MM, null, wi, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: MM => "forceIrradianceInFragment" in MM,
            get: MM => MM.forceIrradianceInFragment,
            set: (MM, rM) => {
              MM.forceIrradianceInFragment = rM
            }
          },
          metadata: rM
        }, vS, FS), (0, wM.i)(MM, null, ti, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: MM => "maxSimultaneousLights" in MM,
            get: MM => MM.maxSimultaneousLights,
            set: (MM, rM) => {
              MM.maxSimultaneousLights = rM
            }
          },
          metadata: rM
        }, BS, XS), (0, wM.i)(MM, null, gi, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: MM => "invertNormalMapX" in MM,
            get: MM => MM.invertNormalMapX,
            set: (MM, rM) => {
              MM.invertNormalMapX = rM
            }
          },
          metadata: rM
        }, IS, KS), (0, wM.i)(MM, null, ui, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: MM => "invertNormalMapY" in MM,
            get: MM => MM.invertNormalMapY,
            set: (MM, rM) => {
              MM.invertNormalMapY = rM
            }
          },
          metadata: rM
        }, qS, TS), (0, wM.i)(MM, null, Ri, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: MM => "twoSidedLighting" in MM,
            get: MM => MM.twoSidedLighting,
            set: (MM, rM) => {
              MM.twoSidedLighting = rM
            }
          },
          metadata: rM
        }, VS, cS), (0, wM.i)(MM, null, Wi, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: MM => "useAlphaFresnel" in MM,
            get: MM => MM.useAlphaFresnel,
            set: (MM, rM) => {
              MM.useAlphaFresnel = rM
            }
          },
          metadata: rM
        }, Mj, rj), (0, wM.i)(MM, null, si, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: MM => "useLinearAlphaFresnel" in MM,
            get: MM => MM.useLinearAlphaFresnel,
            set: (MM, rM) => {
              MM.useLinearAlphaFresnel = rM
            }
          },
          metadata: rM
        }, ij, Oj), (0, wM.i)(MM, null, Di, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: MM => "environmentBRDFTexture" in MM,
            get: MM => MM.environmentBRDFTexture,
            set: (MM, rM) => {
              MM.environmentBRDFTexture = rM
            }
          },
          metadata: rM
        }, Sj, jj), (0, wM.i)(MM, null, ki, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: MM => "forceNormalForward" in MM,
            get: MM => MM.forceNormalForward,
            set: (MM, rM) => {
              MM.forceNormalForward = rM
            }
          },
          metadata: rM
        }, aj, Pj), (0, wM.i)(MM, null, Zi, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: MM => "enableSpecularAntiAliasing" in MM,
            get: MM => MM.enableSpecularAntiAliasing,
            set: (MM, rM) => {
              MM.enableSpecularAntiAliasing = rM
            }
          },
          metadata: rM
        }, nj, Qj), (0, wM.i)(MM, null, oi, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: MM => "useHorizonOcclusion" in MM,
            get: MM => MM.useHorizonOcclusion,
            set: (MM, rM) => {
              MM.useHorizonOcclusion = rM
            }
          },
          metadata: rM
        }, zj, Lj), (0, wM.i)(MM, null, fi, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: MM => "useRadianceOcclusion" in MM,
            get: MM => MM.useRadianceOcclusion,
            set: (MM, rM) => {
              MM.useRadianceOcclusion = rM
            }
          },
          metadata: rM
        }, mj, Hj), (0, wM.i)(MM, null, Yi, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: MM => "unlit" in MM,
            get: MM => MM.unlit,
            set: (MM, rM) => {
              MM.unlit = rM
            }
          },
          metadata: rM
        }, hj, Jj), (0, wM.i)(MM, null, Ni, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: MM => "applyDecalMapAfterDetailMap" in MM,
            get: MM => MM.applyDecalMapAfterDetailMap,
            set: (MM, rM) => {
              MM.applyDecalMapAfterDetailMap = rM
            }
          },
          metadata: rM
        }, dj, yj), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM.PBRMATERIAL_OPAQUE = Cr.PBRMATERIAL_OPAQUE, MM.PBRMATERIAL_ALPHATEST = Cr.PBRMATERIAL_ALPHATEST, MM.PBRMATERIAL_ALPHABLEND = Cr.PBRMATERIAL_ALPHABLEND, MM.PBRMATERIAL_ALPHATESTANDBLEND = Cr.PBRMATERIAL_ALPHATESTANDBLEND, MM.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Cr.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, MM
    })();
    const fS = "KHR_materials_diffuse_transmission";

    function YS(MM, rM) {
      const iM = rM.subSurface;
      let OM = null;
      return iM.translucencyIntensityTexture ? OM = iM.translucencyIntensityTexture : iM.thicknessTexture && iM.useMaskFromThicknessTexture && (OM = iM.thicknessTexture), OM && !iM.useGltfStyleTextures ? (gM.e.Warn(`${MM}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${rM.name}`, 1), null) : OM
    }
    class NS {
      constructor(MM) {
        this.name = fS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof oS && this._isExtensionEnabled(iM)) {
          const rM = YS(MM, iM);
          return rM && OM.push(rM), iM.subSurface.translucencyColorTexture && OM.push(iM.subSurface.translucencyColorTexture), OM
        }
        return OM
      }
      _isExtensionEnabled(MM) {
        if (MM.unlit) return !1;
        const rM = MM.subSurface;
        return !!rM.isTranslucencyEnabled && (!MM.unlit && !rM.useAlbedoToTintTranslucency && rM.useGltfStyleTextures && 1 === rM.volumeIndexOfRefraction && 0 === rM.minimumThickness && 0 === rM.maximumThickness)
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((OM => {
          if (iM instanceof oS && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0;
            const OM = iM.subSurface,
              SM = YS(MM, iM),
              jM = 0 == OM.translucencyIntensity ? void 0 : OM.translucencyIntensity,
              aM = this._exporter._materialExporter.getTextureInfo(SM) ?? void 0,
              PM = !OM.translucencyColor || OM.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : OM.translucencyColor.HOM(),
              nM = this._exporter._materialExporter.getTextureInfo(OM.translucencyColorTexture) ?? void 0,
              QM = {
                diffuseTransmissionFactor: jM,
                diffuseTransmissionTexture: aM,
                diffuseTransmissionColorFactor: PM,
                diffuseTransmissionColorTexture: nM
              };
            (aM || nM) && this._exporter._materialNeedsUVsSet.add(iM), rM.extensions = rM.extensions || {}, rM.extensions[fS] = QM
          }
          OM(rM)
        }))
      }
    }
    let AS = !1;

    function xS() {
      AS || (AS = !0, ZO.RegisterExtension(fS, (MM => new NS(MM))))
    }
    xS();
    const vS = "KHR_materials_dispersion";
    class FS {
      constructor() {
        this.name = vS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(MM) {
        if (MM.unlit) return !1;
        const rM = MM.subSurface;
        return !(!rM.isRefractionEnabled && !rM.isDispersionEnabled)
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          if (iM instanceof oS && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0;
            const MM = {
              dispersion: iM.subSurface.dispersion
            };
            rM.extensions = rM.extensions || {}, rM.extensions[vS] = MM
          }
          MM(rM)
        }))
      }
    }
    let BS = !1;

    function XS() {
      BS || (BS = !0, ZO.RegisterExtension(vS, (() => new FS)))
    }
    XS();
    const IS = "KHR_materials_emissive_strength";
    class KS {
      constructor() {
        this.name = IS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(MM, rM, iM) {
        return await new Promise((MM => {
          if (!(iM instanceof oS)) return MM(rM);
          const OM = iM.emissiveColor.scale(iM.emissiveIntensity),
            SM = Math.max(...OM.HOM());
          if (SM > 1) {
            rM.emissiveFactor = OM.scale(1 / SM).HOM(), this._wasUsed = !0;
            const MM = {
              emissiveStrength: SM
            };
            rM.extensions || (rM.extensions = {}), rM.extensions[IS] = MM
          } else rM.emissiveFactor = OM.HOM();
          return MM(rM)
        }))
      }
    }
    let qS = !1;

    function TS() {
      qS || (qS = !0, ZO.RegisterExtension(IS, (() => new KS)))
    }
    TS();
    const VS = "KHR_materials_ior";
    class cS {
      constructor() {
        this.name = VS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(MM) {
        return !MM.unlit && (MM instanceof Vr ? 1.5 != MM.specularIor : MM instanceof oS && (void 0 != MM.indexOfRefraction && 1.5 != MM.indexOfRefraction))
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          if (iM instanceof oS && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0;
            const MM = {
              ior: iM.indexOfRefraction
            };
            rM.extensions = rM.extensions || {}, rM.extensions[VS] = MM
          } else if (iM instanceof Vr && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0;
            const MM = {
              ior: iM.specularIor
            };
            rM.extensions = rM.extensions || {}, rM.extensions[VS] = MM
          }
          MM(rM)
        }))
      }
    }
    let Mj = !1;

    function rj() {
      Mj || (Mj = !0, ZO.RegisterExtension(VS, (() => new cS)))
    }
    rj();
    const ij = "KHR_materials_iridescence";
    class Oj {
      constructor(MM) {
        this.name = ij, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof Cr) {
          if (iM.iridescence.isEnabled) return iM.iridescence.texture && OM.push(iM.iridescence.texture), iM.iridescence.thicknessTexture && iM.iridescence.thicknessTexture !== iM.iridescence.texture && OM.push(iM.iridescence.thicknessTexture), OM
        } else if (iM instanceof Vr && iM.thinFilmWeight > 0) return iM.thinFilmWeightTexture && OM.push(iM.thinFilmWeightTexture), iM.thinFilmThicknessTexture && iM.thinFilmThicknessTexture !== iM.thinFilmWeightTexture && OM.push(iM.thinFilmThicknessTexture), OM;
        return []
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          if (iM instanceof Cr) {
            if (!iM.iridescence.isEnabled) return void MM(rM);
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            const OM = this._exporter._materialExporter.getTextureInfo(iM.iridescence.texture),
              SM = this._exporter._materialExporter.getTextureInfo(iM.iridescence.thicknessTexture),
              jM = {
                iridescenceFactor: iM.iridescence.intensity,
                iridescenceIor: iM.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: iM.iridescence.minimumThickness,
                iridescenceThicknessMaximum: iM.iridescence.maximumThickness,
                iridescenceTexture: OM ?? void 0,
                iridescenceThicknessTexture: SM ?? void 0
              };
            null === jM.iridescenceTexture && null === jM.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[ij] = jM
          } else if (iM instanceof Vr) {
            if (iM.thinFilmWeight <= 0) return void MM(rM);
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            const OM = this._exporter._materialExporter.getTextureInfo(iM.thinFilmWeightTexture),
              SM = this._exporter._materialExporter.getTextureInfo(iM.thinFilmThicknessTexture),
              jM = {
                iridescenceFactor: iM.thinFilmWeight,
                iridescenceIor: iM.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * iM.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * iM.thinFilmThickness,
                iridescenceTexture: OM ?? void 0,
                iridescenceThicknessTexture: SM ?? void 0
              };
            null === jM.iridescenceTexture && null === jM.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[ij] = jM
          }
          MM(rM)
        }))
      }
    }
    let Sj = !1;

    function jj() {
      Sj || (Sj = !0, ZO.RegisterExtension(ij, (MM => new Oj(MM))))
    }
    jj();
    const aj = "KHR_materials_sheen";
    class Pj {
      constructor(MM) {
        this.name = aj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        return iM instanceof oS && iM.sheen.isEnabled && iM.sheen.texture ? [iM.sheen.texture] : []
      }
      async postExportMaterialAsync(MM, rM, iM) {
        return await new Promise((MM => {
          if (iM instanceof oS) {
            if (!iM.sheen.isEnabled) return void MM(rM);
            this._wasUsed = !0, null == rM.extensions && (rM.extensions = {});
            const OM = {
              sheenColorFactor: iM.sheen.color.HOM(),
              sheenRoughnessFactor: iM.sheen.roughness ?? 0
            };
            null === OM.sheenColorTexture && null === OM.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(iM), iM.sheen.texture && (OM.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(iM.sheen.texture) ?? void 0), iM.sheen.textureRoughness && !iM.sheen.useRoughnessFromMainTexture ? OM.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(iM.sheen.textureRoughness) ?? void 0 : iM.sheen.texture && iM.sheen.useRoughnessFromMainTexture && (OM.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(iM.sheen.texture) ?? void 0), rM.extensions[aj] = OM
          }
          MM(rM)
        }))
      }
    }
    let nj = !1;

    function Qj() {
      nj || (nj = !0, ZO.RegisterExtension(aj, (MM => new Pj(MM))))
    }
    Qj();
    const zj = "KHR_materials_fuzz";

    function Lj(MM, rM) {
      const iM = new RM.h(rM.name, rM.Hk());
      return iM._texture = MM, iM.coordinatesIndex = rM.coordinatesIndex, rM instanceof RM.h && (iM.uOffset = rM.uOffset, iM.vOffset = rM.vOffset, iM.uScale = rM.uScale, iM.vScale = rM.vScale, iM.wAng = rM.wAng), iM.wrapU = rM.wrapU, iM.wrapV = rM.wrapV, iM
    }
    class mj {
      constructor(MM) {
        this.name = zj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = MM
      }
      dispose() {
        for (const MM of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[MM].dispose()
        }
        this._mergedTexturesMap = {};
        for (const MM of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[MM].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        if (iM instanceof Vr) {
          const MM = [];
          if (iM.fuzzWeight > 0) {
            iM.fuzzWeightTexture && MM.push(iM.fuzzWeightTexture);
            let rM = !1;
            if (iM.fuzzRoughnessTexture && (iM._useFuzzRoughnessFromTextureAlpha ? MM.push(iM.fuzzRoughnessTexture) : rM = !0), iM.fuzzColorTexture && !rM && MM.push(iM.fuzzColorTexture), rM) {
              const rM = function(MM) {
                const rM = MM.fuzzColorTexture,
                  iM = rM && rM.getInternalTexture() ? rM.getInternalTexture().uniqueId : "NoFuzzColor",
                  OM = MM.fuzzRoughnessTexture;
                return `FuzzColor_${iM}_FuzzRoughness_${OM&&OM.getInternalTexture()?OM.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(iM);
              if (!this._cachedInternalTexturesMap[rM]) {
                const MM = await async function(MM) {
                  const rM = MM.Hk(),
                    iM = MM.fuzzColorTexture,
                    OM = MM.fuzzRoughnessTexture;
                  return iM || OM ? (await ai("FuzzTexture", Qi(iM ? Pi(iM, 0) : ni(1), iM ? Pi(iM, 1) : ni(1), iM ? Pi(iM, 2) : ni(1), OM ? Pi(OM, MM._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : ni(1)), rM)).getInternalTexture() : null
                }(iM);
                MM && (this._cachedInternalTexturesMap[rM] = MM)
              }
              this._cachedInternalTexturesMap[rM] && (iM.fuzzColorTexture && (this._mergedTexturesMap[iM.fuzzColorTexture.uniqueId] = Lj(this._cachedInternalTexturesMap[rM], iM.fuzzColorTexture), MM.push(this._mergedTexturesMap[iM.fuzzColorTexture.uniqueId])), iM.fuzzRoughnessTexture && (this._mergedTexturesMap[iM.fuzzRoughnessTexture.uniqueId] = Lj(this._cachedInternalTexturesMap[rM], iM.fuzzRoughnessTexture), MM.push(this._mergedTexturesMap[iM.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return MM
        }
        return []
      }
      async postExportMaterialAsync(MM, rM, iM) {
        return await new Promise((MM => {
          if (iM instanceof Vr) {
            if (0 == iM.fuzzWeight) return void MM(rM);
            this._wasUsed = !0, null == rM.extensions && (rM.extensions = {});
            const OM = {
              fuzzFactor: iM.fuzzWeight,
              fuzzColorFactor: iM.fuzzColor.HOM(),
              fuzzRoughnessFactor: iM.fuzzRoughness
            };
            let SM, jM;
            iM.fuzzWeightTexture && (OM.fuzzTexture = this._exporter._materialExporter.getTextureInfo(iM.fuzzWeightTexture) ?? void 0), iM.fuzzColorTexture && (SM = this._mergedTexturesMap[iM.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[iM.fuzzColorTexture.uniqueId] : iM.fuzzColorTexture, OM.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(SM) ?? void 0), iM.fuzzRoughnessTexture && (jM = this._mergedTexturesMap[iM.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[iM.fuzzRoughnessTexture.uniqueId] : iM.fuzzRoughnessTexture, OM.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(jM) ?? void 0), null === OM.fuzzColorTexture && null === OM.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[zj] = OM
          }
          MM(rM)
        }))
      }
    }
    let Hj = !1;

    function hj() {
      Hj || (Hj = !0, ZO.RegisterExtension(zj, (MM => new mj(MM))))
    }
    hj();
    const Jj = "KHR_materials_specular";
    class dj {
      constructor(MM) {
        this.name = Jj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        return iM instanceof oS && this._isExtensionEnabled(iM) ? (iM.metallicReflectanceTexture && OM.push(iM.metallicReflectanceTexture), iM.reflectanceTexture && OM.push(iM.reflectanceTexture), OM) : OM
      }
      _isExtensionEnabled(MM) {
        return !MM.unlit && (void 0 != MM.metallicF0Factor && 1 != MM.metallicF0Factor || void 0 != MM.metallicReflectanceColor && !MM.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(MM))
      }
      _hasTexturesExtension(MM) {
        return null != MM.metallicReflectanceTexture || null != MM.reflectanceTexture
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          var OM;
          if (iM instanceof oS && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0, rM.extensions = rM.extensions || {};
            const MM = this._exporter._materialExporter.getTextureInfo(iM.metallicReflectanceTexture) ?? void 0,
              OM = this._exporter._materialExporter.getTextureInfo(iM.reflectanceTexture) ?? void 0,
              SM = {
                specularFactor: 1 == iM.metallicF0Factor ? void 0 : iM.metallicF0Factor,
                specularTexture: MM,
                specularColorFactor: iM.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : iM.metallicReflectanceColor.HOM(),
                specularColorTexture: OM
              };
            this._hasTexturesExtension(iM) && this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[Jj] = SM
          } else if (iM instanceof Vr) {
            rM.extensions = rM.extensions || {};
            const SM = this._exporter._materialExporter.getTextureInfo(iM.specularWeightTexture) ?? void 0,
              jM = this._exporter._materialExporter.getTextureInfo(iM.specularColorTexture) ?? void 0,
              aM = 1 == iM.specularWeight ? void 0 : iM.specularWeight,
              PM = iM.specularColor.equalsFloats(1, 1, 1) ? void 0 : iM.specularColor.HOM();
            if (!jM && !SM && void 0 === aM && void 0 === PM) return MM(rM);
            this._wasUsed = !0;
            const nM = {
                specularEdgeColorEnabled: !0
              },
              QM = {
                specularFactor: aM,
                specularTexture: SM,
                specularColorFactor: PM,
                specularColorTexture: jM,
                extensions: {}
              };
            QM.extensions.EXT_materials_specular_edge_color = nM, (OM = this._exporter._glTF).extensionsUsed || (OM.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (SM || jM) && this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[Jj] = QM
          }
          MM(rM)
        }))
      }
    }
    let yj = !1;

    function lj() {
      yj || (yj = !0, ZO.RegisterExtension(Jj, (MM => new dj(MM))))
    }
    lj();
    const Ej = "KHR_materials_transmission";
    class Uj {
      constructor(MM) {
        this.name = Ej, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof oS) {
          if (this._isExtensionEnabled(iM)) return iM.subSurface.refractionIntensityTexture && iM.subSurface.useGltfStyleTextures && OM.push(iM.subSurface.refractionIntensityTexture), OM
        } else iM instanceof Vr && (iM.transmissionWeight > 0 && iM.transmissionWeightTexture && (OM.push(iM.transmissionWeightTexture), iM.transmissionColorTexture && OM.push(iM.transmissionColorTexture)), iM.subsurfaceWeight > 0 && iM.subsurfaceWeightTexture && OM.push(iM.subsurfaceWeightTexture));
        return OM
      }
      _isExtensionEnabled(MM) {
        if (MM instanceof Vr && !MM.unlit) return MM.transmissionWeight > 0 || MM.subsurfaceWeight > 0;
        if (MM instanceof oS && !MM.unlit) {
          const rM = MM.subSurface;
          return rM.isRefractionEnabled && void 0 != rM.refractionIntensity && 0 != rM.refractionIntensity || null != rM.refractionIntensityTexture && rM.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(MM, rM, iM) {
        if (!this._isExtensionEnabled(iM)) return rM;
        if (iM instanceof oS) {
          this._wasUsed = !0;
          const OM = iM.subSurface,
            SM = {
              transmissionFactor: 0 === OM.refractionIntensity ? void 0 : OM.refractionIntensity
            };
          if (OM.refractionIntensityTexture)
            if (OM.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(iM);
              const MM = this._exporter._materialExporter.getTextureInfo(OM.refractionIntensityTexture);
              MM && (SM.transmissionTexture = MM)
            } else gM.e.Warn(`${MM}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          rM.extensions || (rM.extensions = {}), rM.extensions[Ej] = SM
        } else if (iM instanceof Vr) {
          this._wasUsed = !0;
          const MM = {
            transmissionFactor: (1 - iM.transmissionWeight) * iM.subsurfaceWeight + iM.transmissionWeight
          };
          if (iM.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(iM);
            const rM = this._exporter._materialExporter.getTextureInfo(iM.transmissionWeightTexture);
            rM && (MM.transmissionTexture = rM)
          } else if (iM.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(iM);
            const rM = this._exporter._materialExporter.getTextureInfo(iM.subsurfaceWeightTexture);
            rM && (MM.transmissionTexture = rM)
          }
          if (0 == iM.transmissionDepth && (!iM.transmissionColor.equals(BM.d.White()) || iM.transmissionColorTexture) && rM.pbrMetallicRoughness && (rM.pbrMetallicRoughness.baseColorFactor || (rM.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), rM.pbrMetallicRoughness.baseColorFactor[0] *= iM.transmissionColor.r, rM.pbrMetallicRoughness.baseColorFactor[1] *= iM.transmissionColor.g, rM.pbrMetallicRoughness.baseColorFactor[2] *= iM.transmissionColor.b, iM.transmissionColorTexture && !rM.pbrMetallicRoughness.baseColorTexture)) {
            const MM = this._exporter._materialExporter.getTextureInfo(iM.transmissionColorTexture);
            MM && (rM.pbrMetallicRoughness.baseColorTexture = MM, this._exporter._materialNeedsUVsSet.add(iM))
          }
          rM.extensions || (rM.extensions = {}), rM.extensions[Ej] = MM
        }
        return rM
      }
    }
    let Gj = !1;

    function Cj() {
      Gj || (Gj = !0, ZO.RegisterExtension(Ej, (MM => new Uj(MM))))
    }
    Cj();
    var ej = iM(41376);
    const bj = "KHR_materials_unlit";
    class wj {
      constructor() {
        this.name = bj, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          let OM = !1;
          iM instanceof oS ? OM = iM.unlit : iM instanceof ej.g && (OM = iM.disableLighting), OM && (this._wasUsed = !0, null == rM.extensions && (rM.extensions = {}), rM.extensions[bj] = {}), MM(rM)
        }))
      }
    }
    let tj = !1;

    function gj() {
      tj || (tj = !0, ZO.RegisterExtension(bj, (() => new wj)))
    }
    gj();
    const uj = "KHR_materials_volume";
    class Rj {
      constructor(MM) {
        this.name = uj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof oS) {
          if (this._isExtensionEnabled(iM)) return iM.subSurface.thicknessTexture && OM.push(iM.subSurface.thicknessTexture), OM
        } else iM instanceof Vr && (iM.transmissionWeight > 0 || iM.subsurfaceWeight > 0) && iM.geometryThicknessTexture && OM.push(iM.geometryThicknessTexture);
        return OM
      }
      _isExtensionEnabled(MM) {
        if (MM.unlit) return !1;
        const rM = MM.subSurface;
        return !(!rM.isRefractionEnabled && !rM.isTranslucencyEnabled) && (void 0 != rM.maximumThickness && 0 != rM.maximumThickness || void 0 != rM.tintColorAtDistance && rM.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != rM.tintColor && rM.tintColor != BM.d.White() || this._hasTexturesExtension(MM))
      }
      _hasTexturesExtension(MM) {
        return null != MM.subSurface.thicknessTexture
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          if (iM instanceof oS && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0;
            const MM = iM.subSurface,
              OM = {
                thicknessFactor: 0 == MM.maximumThickness ? void 0 : MM.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(MM.thicknessTexture) ?? void 0,
                attenuationDistance: MM.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : MM.tintColorAtDistance,
                attenuationColor: MM.tintColor.equalsFloats(1, 1, 1) ? void 0 : MM.tintColor.HOM()
              };
            this._hasTexturesExtension(iM) && this._exporter._materialNeedsUVsSet.add(iM), rM.extensions = rM.extensions || {}, rM.extensions[uj] = OM
          } else if (iM instanceof Vr) {
            const MM = iM.transmissionWeight > 0 && !iM.geometryThinWalled,
              OM = iM.subsurfaceWeight > 0 && !iM.geometryThinWalled;
            if (MM || OM) {
              this._wasUsed = !0;
              const SM = iM.geometryThickness,
                jM = this._exporter._materialExporter.getTextureInfo(iM.geometryThicknessTexture) ?? void 0;
              let aM;
              jM && this._exporter._materialNeedsUVsSet.add(iM);
              const PM = BM.d.White().HOM();
              if (MM && iM.transmissionDepth > 0) {
                const MM = 1 / iM.transmissionDepth;
                let rM = new fM.q(-Math.log(iM.transmissionColor.r) * MM, -Math.log(iM.transmissionColor.g) * MM, -Math.log(iM.transmissionColor.b) * MM);
                const OM = new fM.q(iM.transmissionScatter.r * MM, iM.transmissionScatter.g * MM, iM.transmissionScatter.b * MM),
                  SM = rM.subtract(OM),
                  jM = Math.min(SM.x, SM.y, SM.z);
                jM < 0 && (SM.x = SM.x - jM, SM.y = SM.y - jM, SM.z = SM.z - jM), rM = SM.add(OM);
                aM = 1 / Math.max(rM.x, rM.y, rM.z), PM[0] = Math.exp(-rM.x * aM), PM[1] = Math.exp(-rM.y * aM), PM[2] = Math.exp(-rM.z * aM)
              } else aM = Number.MAX_VALUE, PM[0] = 1, PM[1] = 1, PM[2] = 1;
              let nM = 1;
              const QM = BM.d.White().HOM();
              if (OM) {
                const MM = iM.subsurfaceRadius,
                  rM = iM.subsurfaceRadiusScale,
                  OM = new fM.q(rM.r, rM.g, rM.b).multiplyByFloats(MM, MM, MM),
                  SM = new fM.q(1 / Math.max(OM.x, 1e-6), 1 / Math.max(OM.y, 1e-6), 1 / Math.max(OM.z, 1e-6));
                nM = 1 / Math.max(SM.x, SM.y, SM.z), QM[0] = Math.exp(-SM.x * nM), QM[1] = Math.exp(-SM.y * nM), QM[2] = Math.exp(-SM.z * nM)
              }
              const zM = (1 - iM.transmissionWeight) * iM.subsurfaceWeight,
                LM = zM + iM.transmissionWeight,
                mM = 1 / Math.max(LM, 1e-6),
                HM = iM.transmissionWeight * mM,
                hM = zM * mM,
                JM = PM.map(((MM, rM) => MM * HM + QM[rM] * hM)),
                dM = {
                  thicknessFactor: SM,
                  thicknessTexture: jM,
                  attenuationDistance: aM * HM + nM * hM,
                  attenuationColor: JM
                };
              rM.extensions = rM.extensions || {}, rM.extensions[uj] = dM
            }
          }
          MM(rM)
        }))
      }
    }
    let pj = !1;

    function Wj() {
      pj || (pj = !0, ZO.RegisterExtension(uj, (MM => new Rj(MM))))
    }
    Wj();
    const sj = "KHR_materials_volume_scatter";
    class Dj {
      constructor(MM) {
        this.name = sj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        return iM instanceof Vr && (iM.transmissionWeight > 0 && iM.transmissionScatterTexture && OM.push(iM.transmissionScatterTexture), iM.subsurfaceWeight > 0 && iM.subsurfaceColorTexture && OM.push(iM.subsurfaceColorTexture)), OM
      }
      _isExtensionEnabled(MM) {
        if (MM.unlit) return !1;
        const rM = MM.transmissionWeight > 0 && !MM.geometryThinWalled && MM.transmissionDepth > 0 && !MM.transmissionScatter.equals(BM.d.Black()),
          iM = MM.subsurfaceWeight > 0 && !MM.geometryThinWalled;
        return !(!rM && !iM)
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          if (iM instanceof Vr && this._isExtensionEnabled(iM)) {
            this._wasUsed = !0;
            let MM = fM.q.Zero(),
              OM = 0;
            if (iM.transmissionWeight > 0) {
              MM = function(MM) {
                const rM = new fM.q(Math.sqrt(1 - MM.x), Math.sqrt(1 - MM.y), Math.sqrt(1 - MM.z)),
                  iM = new fM.q(1, 1, 1),
                  OM = iM.subtract(rM),
                  SM = iM.subtract(new fM.q(.139, .139, .139).multiplyInPlace(rM)),
                  jM = iM.add(new fM.q(1.17, 1.17, 1.17).multiplyInPlace(rM));
                return OM.multiplyInPlace(SM).divideInPlace(jM)
              }(new fM.q(iM.transmissionScatter.r, iM.transmissionScatter.g, iM.transmissionScatter.b)), OM = iM.transmissionScatterAnisotropy
            }
            const SM = fM.q.Zero();
            let jM = 0;
            iM.subsurfaceWeight > 0 && (SM.set(iM.subsurfaceColor.r, iM.subsurfaceColor.g, iM.subsurfaceColor.b), jM = iM.subsurfaceScatterAnisotropy);
            const aM = (1 - iM.transmissionWeight) * iM.subsurfaceWeight,
              PM = aM + iM.transmissionWeight,
              nM = 1 / Math.max(PM, 1e-6),
              QM = iM.transmissionWeight * nM,
              zM = aM * nM,
              LM = {
                multiscatterColorFactor: MM.multiplyByFloats(QM, QM, QM).addInPlace(SM.multiplyByFloats(zM, zM, zM)).HOM(),
                scatterAnisotropy: OM * QM + jM * zM
              };
            if (iM.subsurfaceWeight > 0 && iM.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(iM);
              const MM = this._exporter._materialExporter.getTextureInfo(iM.subsurfaceColorTexture);
              MM && (LM.multiscatterColorTexture = MM)
            } else if (iM.transmissionWeight > 0 && iM.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(iM);
              const MM = this._exporter._materialExporter.getTextureInfo(iM.transmissionScatterTexture);
              MM && (LM.multiscatterColorTexture = MM)
            }
            rM.extensions = rM.extensions || {}, rM.extensions[sj] = LM
          }
          MM(rM)
        }))
      }
    }
    let kj = !1;

    function Zj() {
      kj || (kj = !0, ZO.RegisterExtension(sj, (MM => new Dj(MM)), 101))
    }
    Zj();
    const oj = "KHR_materials_diffuse_roughness";
    class fj {
      constructor(MM) {
        this.name = oj, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(MM, rM, iM) {
        const OM = [];
        if (iM instanceof Cr) {
          if (iM._baseDiffuseRoughness) return iM._baseDiffuseRoughnessTexture && OM.push(iM._baseDiffuseRoughnessTexture), OM
        } else if (iM instanceof Vr && iM.baseDiffuseRoughness) return iM.baseDiffuseRoughnessTexture && OM.push(iM.baseDiffuseRoughnessTexture), OM;
        return []
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          let OM = null,
            SM = null;
          if (iM instanceof Cr ? (OM = iM._baseDiffuseRoughness, SM = iM._baseDiffuseRoughnessTexture) : iM instanceof Vr && (OM = iM.baseDiffuseRoughness, SM = iM.baseDiffuseRoughnessTexture), !OM) return void MM(rM);
          this._wasUsed = !0, rM.extensions = rM.extensions || {};
          const jM = {
            diffuseRoughnessFactor: OM,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(SM) ?? void 0
          };
          null !== jM.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(iM), rM.extensions[oj] = jM, MM(rM)
        }))
      }
    }
    let Yj = !1;

    function Nj() {
      Yj || (Yj = !0, ZO.RegisterExtension(oj, (MM => new fj(MM))))
    }
    Nj();
    const Aj = "KHR_materials_openpbr";
    class xj {
      constructor() {
        this.name = Aj, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(MM, rM, iM) {
        return new Promise((MM => {
          iM instanceof Vr && (this._wasUsed = !0, rM.extensions = rM.extensions || {}, rM.extensions[Aj] = {}), MM(rM)
        }))
      }
    }
    let vj = !1;

    function Fj() {
      vj || (vj = !0, ZO.RegisterExtension(Aj, (() => new xj)))
    }
    Fj();
    const Bj = "KHR_texture_transform";
    class Xj {
      constructor() {
        this.name = Bj, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(MM, rM, iM) {
        if (iM.Hk() || br.e.Warn(`${MM}: "scene" is not defined for Babylon texture ${iM.name}!`), (0 !== iM.uAng || 0 !== iM.vAng) && (br.e.Warn(`${MM}: Texture ${iM.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== iM.uRotationCenter || 0 !== iM.vRotationCenter)) return;
        const OM = {};
        let SM = !1;
        if (0 === iM.uOffset && 0 === iM.vOffset || (OM.offset = [iM.uOffset, iM.vOffset], SM = !0), 1 === iM.uScale && 1 === iM.vScale || (OM.scale = [iM.uScale, iM.vScale], SM = !0), 0 !== iM.wAng) {
          if (0 !== iM.uRotationCenter || 0 !== iM.vRotationCenter) {
            if (iM.homogeneousRotationInUVTransform && iM.uScale !== iM.vScale) return void br.e.Warn(`${MM}: Texture ${iM.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Bj}.`);
            br.e.Warn(`${MM}: Texture ${iM.name} with non-origin rotation center will be exported using an adjusted offset with ${Bj}.`), OM.offset = function(MM) {
              const {
                uOffset: rM,
                vOffset: iM,
                uRotationCenter: OM,
                vRotationCenter: SM,
                uScale: jM,
                vScale: aM,
                wAng: PM
              } = MM, nM = Math.cos(PM), QM = Math.sin(PM), zM = OM * jM, LM = SM * aM;
              return [rM + (zM * (1 - nM) + LM * QM), iM + (LM * (1 - nM) - zM * QM)]
            }(iM)
          }
          OM.rotation = -iM.wAng, SM = !0
        }
        0 !== iM.coordinatesIndex && (OM.texCoord = iM.coordinatesIndex, SM = !0), SM && (this._wasUsed = !0, rM.extensions || (rM.extensions = {}), rM.extensions[Bj] = OM)
      }
    }
    let Ij = !1;

    function Kj() {
      Ij || (Ij = !0, ZO.RegisterExtension(Bj, (() => new Xj)))
    }
    Kj();
    var qj = iM(41145);
    const Tj = "KHR_texture_basisu";
    class Vj {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(MM) {
        this.name = Tj, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      postExportTexture(MM, rM) {
        const iM = this._exporter._textures[rM.index],
          OM = iM.source;
        if (void 0 === OM) return;
        const SM = this._exporter._images[OM];
        "image/ktx2" === (SM.mimeType || (0, qj.j)(SM.uri)) && (iM.source = void 0, iM.extensions || (iM.extensions = {}), iM.extensions[Tj] = {
          source: OM
        }, this._wasUsed = !0)
      }
    }
    let cj = !1;

    function Ma() {
      cj || (cj = !0, ZO.RegisterExtension(Tj, (MM => new Vj(MM))))
    }
    Ma();
    const ra = "EXT_texture_webp";
    class ia {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(MM) {
        this.name = ra, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      postExportTexture(MM, rM) {
        const iM = this._exporter._textures[rM.index],
          OM = iM.source;
        if (void 0 === OM) return;
        const SM = this._exporter._images[OM];
        "image/webp" === (SM.mimeType || (0, qj.j)(SM.uri)) && (iM.source = void 0, iM.extensions || (iM.extensions = {}), iM.extensions[ra] = {
          source: OM
        }, this._wasUsed = !0)
      }
    }
    let Oa = !1;

    function Sa() {
      Oa || (Oa = !0, ZO.RegisterExtension(ra, (MM => new ia(MM))))
    }
    Sa();
    const ja = "EXT_texture_avif";
    class aa {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(MM) {
        this.name = ja, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = MM
      }
      dispose() {}
      postExportTexture(MM, rM) {
        const iM = this._exporter._textures[rM.index],
          OM = iM.source;
        if (void 0 === OM) return;
        const SM = this._exporter._images[OM];
        "image/avif" === (SM.mimeType || (0, qj.j)(SM.uri)) && (iM.source = void 0, iM.extensions || (iM.extensions = {}), iM.extensions[ja] = {
          source: OM
        }, this._wasUsed = !0)
      }
    }
    let Pa = !1;

    function na() {
      Pa || (Pa = !0, ZO.RegisterExtension(ja, (MM => new aa(MM))))
    }
    na();
    class Qa {
      static CreateSTL(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          jM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          PM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          nM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const QM = function(MM, rM, iM) {
            const SM = [3 * MM[iM], 3 * MM[iM + 1], 3 * MM[iM + 2]],
              jM = [new OM.sh(rM[SM[0]], rM[SM[0] + 2], rM[SM[0] + 1]), new OM.sh(rM[SM[1]], rM[SM[1] + 2], rM[SM[1] + 1]), new OM.sh(rM[SM[2]], rM[SM[2] + 2], rM[SM[2] + 1])],
              aM = jM[0].subtract(jM[1]),
              PM = jM[2].subtract(jM[1]);
            return {
              v: jM,
              n: OM.sh.Cross(PM, aM).normalize()
            }
          },
          LM = function(MM, rM, iM, OM) {
            return rM = mM(MM, rM, iM.x, OM), rM = mM(MM, rM, iM.y, OM), mM(MM, rM, iM.z, OM)
          },
          mM = function(MM, rM, iM, OM) {
            return MM.setFloat32(rM, iM, OM), rM + 4
          },
          hM = function(MM) {
            if (PM) {
              let rM = MM;
              MM instanceof HM.b && (rM = MM.QSM);
              const iM = rM.getVerticesData(zM.e.PositionKind, !0, !0);
              if (!iM) return [];
              const SM = OM.sh.Zero();
              let jM;
              for (jM = 0; jM < iM.length; jM += 3) OM.sh.TransformCoordinatesFromFloatsToRef(iM[jM], iM[jM + 1], iM[jM + 2], MM.computeWorldMatrix(!0), SM).toArray(iM, jM);
              return iM
            }
            return MM.getVerticesData(zM.e.PositionKind) || []
          };
        PM && (aM = !0);
        let JM = "",
          dM = 0,
          yM = 0;
        if (SM) {
          for (let iM = 0; iM < MM.length; iM++) {
            const rM = MM[iM].hOM();
            dM += rM ? rM.length / 3 : 0
          }
          const rM = new ArrayBuffer(84 + 50 * dM);
          JM = new DataView(rM), yM += 80, JM.setUint32(yM, dM, jM), yM += 4
        } else nM || (JM = "solid stlmesh\r\n");
        for (let OM = 0; OM < MM.length; OM++) {
          const rM = MM[OM];
          !SM && nM && (JM += "solid " + rM.name + "\r\n"), !aM && rM instanceof LO.d && rM.bakeCurrentTransformIntoVertices();
          const iM = hM(rM),
            PM = rM.hOM() || [];
          for (let MM = 0; MM < PM.length; MM += 3) {
            const rM = QM(PM, iM, MM);
            SM ? (yM = LM(JM, yM, rM.n, jM), yM = LM(JM, yM, rM.v[0], jM), yM = LM(JM, yM, rM.v[1], jM), yM = LM(JM, yM, rM.v[2], jM), yM += 2) : (JM += "\tfacet normal " + rM.n.x + " " + rM.n.y + " " + rM.n.z + "\r\n", JM += "\t\touter loop\r\n", JM += "\t\t\tvertex " + rM.v[0].x + " " + rM.v[0].y + " " + rM.v[0].z + "\r\n", JM += "\t\t\tvertex " + rM.v[1].x + " " + rM.v[1].y + " " + rM.v[1].z + "\r\n", JM += "\t\t\tvertex " + rM.v[2].x + " " + rM.v[2].y + " " + rM.v[2].z + "\r\n", JM += "\t\tendloop\r\n", JM += "\tendfacet\r\n")
          }!SM && nM && (JM += "endsolid " + name + "\r\n")
        }
        if (SM || nM || (JM += "endsolid stlmesh"), rM) {
          const MM = document.createElement("a"),
            rM = new Blob([JM], {
              type: "application/octet-stream"
            });
          MM.href = window.URL.createObjectURL(rM), MM.download = iM + ".stl", MM.click()
        }
        return JM
      }
    }

    function za(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SM = [];
      for (let jM = 0; jM < MM.length / iM; jM++) {
        const aM = MM[jM * iM] * (OM ? -1 : 1),
          PM = MM[jM * iM + 1],
          nM = MM[jM * iM + 2];
        SM.push(`(${aM.toPrecision(rM.precision)}, ${PM.toPrecision(rM.precision)}, ${nM.toPrecision(rM.precision)})`)
      }
      return SM.join(", ")
    }

    function La(MM, rM) {
      const iM = [];
      for (let OM = 0; OM < MM.length / 2; OM++) {
        const SM = MM[2 * OM],
          jM = MM[2 * OM + 1];
        iM.push(`(${SM.toPrecision(rM.precision)}, ${(1-jM).toPrecision(rM.precision)})`)
      }
      return iM.join(", ")
    }

    function ma(MM, rM, iM, OM) {
      const SM = MM.getVerticesData(zM.e.PositionKind),
        jM = MM.getVerticesData(zM.e.NormalKind);
      if (SM && jM) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${iM}"\n\t\tint[] faceVertexCounts = [${function(MM){const rM=MM.hOM()?.length?MM.getTotalIndices():MM.getTotalVertices();return Array(rM/3).fill(3).join(", ")}(MM)}]\n\t\tint[] faceVertexIndices = [${function(MM){const rM=MM.hOM(),iM=rM?.length??MM.getTotalVertices(),OM=[];if(null!==rM)for(let SM=0;SM<iM;SM++)OM.push(rM[SM]);else for(let SM=0;SM<iM;SM++)OM.push(SM);return OM.join(", ")}(MM)}]\n\t\tnormal3f[] normals = [${za(jM,rM,void 0,OM)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${za(SM,rM,void 0,OM)}]\n        ${function(MM,rM){let iM="";for(let SM=0;SM<4;SM++){const OM=SM>0?SM:"",jM=MM.getVerticesData(zM.e.UVKind+(OM?OM+1:""));jM&&(iM+=`\n\t\ttexCoord2f[] primvars:st${OM} = [${La(jM,rM)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const OM=MM.getVerticesData(zM.e.ColorKind);return OM&&(iM+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        za(OM, rM, OM.length / MM.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),iM}(MM,rM)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Ha(MM, rM, iM, OM) {
      return `\n        def "Geometry"\n        {\n        ${ma(MM,rM,iM,OM)}\n        }\n        `
    }

    function ha(MM) {
      let rM = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return rM += MM, fflate.strToU8(rM)
    }

    function Ja(MM) {
      const rM = MM.m;
      return `( ${da(rM,0)}, ${da(rM,4)}, ${da(rM,8)}, ${da(rM,12)} )`
    }

    function da(MM, rM) {
      return `(${MM[rM+0]}, ${MM[rM+1]}, ${MM[rM+2]}, ${MM[rM+3]})`
    }

    function ya(MM, rM) {
      const iM = "Object_" + MM.uniqueId,
        OM = Ja(rM);
      return `def Xform "${iM}" (\n\tprepend references = @./geometries/Geometry_${MM.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${OM}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${MM.material.uniqueId}>\n}\n\n`
    }

    function la(MM) {
      switch (MM) {
        case eM.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case eM.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case eM.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Ea(MM) {
      return `(${MM.x}, ${MM.y})`
    }

    function Ua(MM) {
      return `(${MM.r}, ${MM.g}, ${MM.b})`
    }

    function Ga(MM) {
      return "image/jpeg" === MM || "image/png" === MM
    }

    function Ca(MM, rM, iM, SM, jM, aM) {
      const PM = MM.getInternalTexture().uniqueId + "_" + MM.invertY,
        QM = MM.mimeType || (0, nM.b)(MM.getInternalTexture()?.url ?? ""),
        zM = Ga(QM) ? QM : "image/png",
        LM = "image/jpeg" === zM ? "jpg" : "png";
      jM[PM] = {
        texture: MM,
        mimeType: zM,
        ext: LM
      };
      const mM = MM.coordinatesIndex > 0 ? "st" + MM.coordinatesIndex : "st",
        HM = new OM.Vector2(MM.uScale, MM.vScale),
        hM = new OM.Vector2(MM.uOffset, MM.vOffset),
        JM = MM.wAng,
        dM = Math.sin(JM),
        yM = Math.cos(JM);
      return hM.y = 1 - hM.y - HM.y, hM.x += dM * HM.x, hM.y += (1 - yM) * HM.y, `\n    def Shader "PrimvarReader_${iM}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${mM}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${iM}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${rM.uniqueId}/PrimvarReader_${iM}.outputs:result>\n        float inputs:rotation = ${(JM*(180/Math.PI)).toFixed(aM.precision)}\n        float2 inputs:scale = ${Ea(HM)}\n        float2 inputs:translation = ${Ea(hM)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${MM.uniqueId}_${iM}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${PM}.${LM}@\n        float2 inputs:st.connect = </Root/Materials/Material_${rM.uniqueId}/Transform2d_${iM}.outputs:result>\n        ${SM?"float4 inputs:scale = "+function(MM){return`(${MM.r}, ${MM.g}, ${MM.b}, 1.0)`}(SM):""}\n        token inputs:sourceColorSpace = "${MM.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${la(MM.wrapU)}"\n        token inputs:wrapT = "${la(MM.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${rM.needAlphaBlending()||rM.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function ea(MM, rM, iM) {
      const OM = "\t\t\t",
        SM = [],
        jM = [],
        {
          diffuseMap: aM,
          diffuse: PM,
          alphaCutOff: nM,
          emissiveMap: QM,
          emissive: zM,
          normalMap: LM,
          roughnessMap: mM,
          roughnessChannel: HM,
          roughness: hM,
          metalnessMap: JM,
          metalnessChannel: yM,
          metalness: lM,
          aoMap: EM,
          aoMapChannel: UM,
          aoMapIntensity: GM,
          alphaMap: CM,
          ior: eM,
          clearCoatEnabled: bM,
          clearCoat: wM,
          clearCoatMap: tM,
          clearCoatRoughness: gM,
          clearCoatRoughnessMap: uM
        } = function(MM) {
          const rM = {
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
          return MM instanceof PO.StandardMaterial ? {
            ...rM,
            diffuseMap: MM.diffuseTexture,
            diffuse: MM.diffuseColor,
            alphaCutOff: MM.alphaCutOff,
            emissiveMap: MM.emissiveTexture,
            emissive: MM.emissiveColor,
            roughness: 1,
            alphaMap: MM.opacityTexture
          } : MM instanceof Cr ? {
            ...rM,
            diffuseMap: MM._albedoTexture,
            diffuse: MM._albedoColor,
            alphaCutOff: MM._alphaCutOff,
            emissiveMap: MM._emissiveTexture,
            emissive: MM._emissiveColor,
            normalMap: MM._bumpTexture,
            roughnessMap: MM._metallicTexture,
            roughnessChannel: MM._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: MM._roughness ?? 1,
            metalnessMap: MM._metallicTexture,
            metalnessChannel: MM._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: MM._metallic ?? 0,
            aoMap: MM._ambientTexture,
            aoMapChannel: MM._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: MM._ambientTextureStrength,
            alphaMap: MM._opacityTexture,
            ior: MM.subSurface.indexOfRefraction,
            clearCoatEnabled: MM.clearCoat.isEnabled,
            clearCoat: MM.clearCoat.intensity,
            clearCoatMap: MM.clearCoat.texture,
            clearCoatRoughness: MM.clearCoat.roughness,
            clearCoatRoughnessMap: MM.clearCoat.useRoughnessFromMainTexture ? MM.clearCoat.texture : MM.clearCoat.textureRoughness
          } : rM
        }(MM);
      return null !== aM ? (SM.push(`${OM}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${aM.uniqueId}_diffuse.outputs:rgb>`), MM.needAlphaBlending() ? SM.push(`${OM}float inputs:opacity.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${aM.uniqueId}_diffuse.outputs:a>`) : MM.needAlphaTesting() && (SM.push(`${OM}float inputs:opacity.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${aM.uniqueId}_diffuse.outputs:a>`), SM.push(`${OM}float inputs:opacityThreshold = ${nM}`)), jM.push(Ca(aM, MM, "diffuse", PM, rM, iM))) : SM.push(`${OM}color3f inputs:diffuseColor = ${Ua(PM||dM.Color3.White())}`), null !== QM ? (SM.push(`${OM}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${QM.uniqueId}_emissive.outputs:rgb>`), jM.push(Ca(QM, MM, "emissive", zM, rM, iM))) : zM && zM.toLuminance() > 0 && SM.push(`${OM}color3f inputs:emissiveColor = ${Ua(zM)}`), null !== LM && (SM.push(`${OM}normal3f inputs:normal.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${LM.uniqueId}_normal.outputs:rgb>`), jM.push(Ca(LM, MM, "normal", null, rM, iM))), null !== EM && (SM.push(`${OM}float inputs:occlusion.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${EM.uniqueId}_occlusion.outputs:${UM}>`), jM.push(Ca(EM, MM, "occlusion", new dM.Color3(GM, GM, GM), rM, iM))), null !== mM ? (SM.push(`${OM}float inputs:roughness.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${mM.uniqueId}_roughness.outputs:${HM}>`), jM.push(Ca(mM, MM, "roughness", new dM.Color3(hM, hM, hM), rM, iM))) : SM.push(`${OM}float inputs:roughness = ${hM}`), null !== JM ? (SM.push(`${OM}float inputs:metallic.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${JM.uniqueId}_metallic.outputs:${yM}>`), jM.push(Ca(JM, MM, "metallic", new dM.Color3(lM, lM, lM), rM, iM))) : SM.push(`${OM}float inputs:metallic = ${lM}`), null !== CM ? (SM.push(`${OM}float inputs:opacity.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${CM.uniqueId}_opacity.outputs:r>`), SM.push(`${OM}float inputs:opacityThreshold = 0.0001`), jM.push(Ca(CM, MM, "opacity", null, rM, iM))) : SM.push(`${OM}float inputs:opacity = ${MM.alpha}`), bM && (null !== tM ? (SM.push(`${OM}float inputs:clearcoat.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${tM.uniqueId}_clearcoat.outputs:r>`), jM.push(Ca(tM, MM, "clearcoat", new dM.Color3(wM, wM, wM), rM, iM))) : SM.push(`${OM}float inputs:clearcoat = ${wM}`), null !== uM ? (SM.push(`${OM}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${MM.uniqueId}/Texture_${uM.uniqueId}_clearcoatRoughness.outputs:g>`), jM.push(Ca(uM, MM, "clearcoatRoughness", new dM.Color3(gM, gM, gM), rM, iM))) : SM.push(`${OM}float inputs:clearcoatRoughness = ${gM}`)), SM.push(`${OM}float inputs:ior = ${eM}`), `\n\tdef Material "Material_${MM.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${SM.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${MM.uniqueId}/PreviewSurface.outputs:surface>\n\n${jM.join("\n")}\n\n\t}\n`
    }

    function ba(MM) {
      MM.computeWorldMatrix(!0);
      const rM = MM.getWorldMatrix().clone(),
        iM = MM.Hk().useRightHandedSystem;
      let OM = MM.material?._getEffectiveOrientation(MM) ?? MM.sideOrientation,
        aM = !iM,
        PM = MM.parent;
      for (; PM;) {
        if (oi(PM, iM) && null === PM.parent) {
          iM || (rM.multiplyToRef(PM.getWorldMatrix().invert(), rM), OM = OM === jM.c.ClockWiseSideOrientation ? jM.c.CounterClockWiseSideOrientation : jM.c.ClockWiseSideOrientation), aM = !1;
          break
        }
        PM = PM.parent
      }
      return rM.determinant() < 0 && SM.Tools.Warn(`Mesh ${MM.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: rM,
        windingOrder: OM === jM.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: aM
      }
    }
    async function wa(MM, rM, iM) {
      const jM = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...rM
      };
      "undefined" === typeof fflate && await SM.Tools.LoadScriptAsync(jM.fflateUrl);
      const aM = {};
      aM[jM.modelFileName] = null;
      let PM = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      PM += function(MM) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===MM.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${MM.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${MM.planeAnchoringAlignment}"`:""}\n            `
      }(jM);
      const nM = {};
      for (const OM of MM.meshes) {
        if (0 === OM.getTotalVertices()) continue;
        const MM = OM,
          rM = MM.geometry,
          QM = MM.material;
        if (!QM || !rM || iM && !iM(MM)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(QM.getClassName())) {
          const iM = "geometries/Geometry_" + rM.uniqueId + ".usda",
            {
              matrix: OM,
              windingOrder: SM,
              convertToRightHanded: zM
            } = ba(MM);
          if (!(iM in aM)) {
            const MM = Ha(rM, jM, SM, zM);
            aM[iM] = ha(MM)
          }
          QM.uniqueId in nM || (nM[QM.uniqueId] = QM), PM += ya(MM, OM)
        } else SM.Tools.Warn("USDZExportAsync does not support this material type: " + QM.getClassName())
      }
      MM.activeCamera && jM.exportCamera && (PM += function(MM, rM) {
        const iM = "Camera_" + MM.uniqueId,
          SM = Ja(OM.Matrix.RotationY(Math.PI).multiply(MM.getWorldMatrix()));
        if (MM.mode === eM.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${iM}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${SM}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${MM.minZ.toPrecision(rM.precision)}, ${MM.maxZ.toPrecision(rM.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(MM.orthoLeft||1)+Math.abs(MM.orthoRight||1))).toPrecision(rM.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(MM.orthoTop||1)+Math.abs(MM.orthoBottom||1))).toPrecision(rM.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const OM = MM.ph().getAspectRatio(MM),
            jM = rM.cameraSensorWidth || 35;
          return `def Camera "${iM}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${SM}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${MM.minZ.toPrecision(rM.precision)}, ${MM.maxZ.toPrecision(rM.precision)})\n\t\t\tfloat focalLength = ${(jM/(2*Math.tan(.5*MM.fov))).toPrecision(rM.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(jM*OM).toPrecision(rM.precision)}\n\t\t\tfloat verticalAperture = ${(jM/OM).toPrecision(rM.precision)}            \n\t\t}\n\t\n\t`
        }
      }(MM.activeCamera, jM)), PM += "\n            }\n        }";
      const QM = {};
      PM += function(MM, rM, iM) {
        const OM = [];
        for (const SM in MM) {
          const jM = MM[SM];
          OM.push(ea(jM, rM, iM))
        }
        return `\n    def "Materials"\n{\n${OM.join("")}\n}\n\n`
      }(nM, QM, jM), PM += "\n    }", aM[jM.modelFileName] = fflate.strToU8(PM);
      for (const OM in QM) {
        const {
          texture: MM,
          ext: rM,
          mimeType: iM
        } = QM[OM], SM = await li(MM);
        if (SM && Ga(SM.mimeType) && SM.mimeType === iM) aM[`textures/Texture_${OM}.${rM}`] = new Uint8Array(SM.data);
        else {
          const SM = MM.getSize(),
            jM = await (0, UM.g)(MM),
            PM = await bM.DumpTools.DumpDataAsync(SM.width, SM.height, jM, iM, void 0, !1, !0);
          aM[`textures/Texture_${OM}.${rM}`] = new Uint8Array(PM).slice()
        }
      }
      let zM = 0;
      for (const OM in aM) {
        const MM = aM[OM];
        if (!MM) continue;
        zM += 34 + OM.length;
        const rM = 63 & zM;
        if (4 !== rM) {
          const iM = new Uint8Array(64 - rM);
          aM[OM] = [MM, {
            extra: {
              12345: iM
            }
          }]
        }
        zM = MM.length
      }
      return fflate.zipSync(aM, {
        level: 0
      })
    }
    var ta = iM(42208);
    class ga {
      static Export(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          iM = arguments.length > 2 ? arguments[2] : void 0;
        if (!MM || 0 === MM.bones.length) throw new Error("Invalid or empty skeleton provided");
        let OM = rM;
        rM && 0 !== rM.length || (OM = MM.animations.map((MM => MM.name)));
        let SM = null;
        for (const QM of OM) {
          const rM = MM.getAnimationRange(QM);
          rM && (SM = SM ? new ta.d("animation-range", Math.min(SM.from, rM.from), Math.max(SM.to, rM.to)) : rM)
        }
        if (!SM && (MM.animations.length > 0 && (SM = MM.getAnimationRange(MM.animations[0].name)), !SM)) throw new Error("No animation range found in skeleton");
        const jM = iM || 1 / (MM.animations[0]?.framePerSecond || 30),
          aM = this._BuildBoneHierarchy(MM, OM);
        let PM = 0;
        for (const QM of aM) QM.positionKeys.length > 0 && (PM = Math.max(PM, QM.positionKeys.length)), QM.rotationKeys.length > 0 && (PM = Math.max(PM, QM.rotationKeys.length));
        0 === PM && (PM = Math.floor((SM.to - SM.from) / jM) + 1);
        let nM = "";
        return nM += "HIERARCHY\n", nM += this._ExportHierarchy(aM, 0), nM += "MOTION\n", nM += `Frames: ${PM}\n`, nM += `Frame Time: ${jM.toFixed(6)}\n`, nM += this._ExportMotionData(aM, PM, 0, OM), nM
      }
      static _BuildBoneHierarchy(MM, rM) {
        const iM = new Map,
          OM = [];
        for (const SM of MM.bones) {
          const MM = {
            bone: SM,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          iM.set(SM, MM)
        }
        for (const SM of MM.bones) {
          const MM = iM.get(SM);
          if (SM.animations.length > 0)
            for (const iM of SM.animations) rM.includes(iM.name) && ("position" === iM.targetProperty ? (MM.hasPositionChannels = !0, MM.positionKeys.push(...iM.getKeys())) : "rotationQuaternion" === iM.targetProperty && (MM.hasRotationChannels = !0, MM.rotationKeys.push(...iM.getKeys())));
          if (SM.getParent()) {
            const rM = iM.get(SM.getParent());
            rM && rM.children.push(MM)
          } else OM.push(MM)
        }
        return OM
      }
      static _ExportHierarchy(MM, rM) {
        let iM = "";
        const OM = "    ".repeat(rM);
        for (const SM of MM) {
          const MM = SM.bone;
          if (this._IsEndSite(SM)) {
            iM += `${OM}End Site\n`, iM += `${OM}{\n`;
            const rM = this._GetBoneOffset(MM);
            iM += `${OM}    OFFSET ${rM.x.toFixed(6)} ${rM.y.toFixed(6)} ${rM.z.toFixed(6)}\n`, iM += `${OM}}\n`
          } else {
            iM += `${0===rM?"ROOT":`${OM}JOINT`} ${MM.name}\n`, iM += `${OM}{\n`;
            const jM = this._GetBoneOffset(MM);
            iM += `${OM}    OFFSET ${jM.x.toFixed(6)} ${jM.y.toFixed(6)} ${jM.z.toFixed(6)}\n`;
            const aM = [];
            SM.hasPositionChannels && aM.push("Xposition", "Yposition", "Zposition"), SM.hasRotationChannels && aM.push("Zrotation", "Xrotation", "Yrotation"), aM.length > 0 && (iM += `${OM}    CHANNELS ${aM.length} ${aM.join(" ")}\n`), SM.children.length > 0 && (iM += this._ExportHierarchy(SM.children, rM + 1)), iM += `${OM}}\n`
          }
        }
        return iM
      }
      static _IsEndSite(MM) {
        return 0 === MM.children.length
      }
      static _GetBoneOffset(MM) {
        try {
          if (!MM.getParent()) return MM.getRestMatrix().getTranslation();
          return MM.getLocalMatrix().getTranslation()
        } catch (rM) {
          return OM.sh.Zero()
        }
      }
      static _ExportMotionData(MM, rM, iM, OM) {
        let SM = "";
        for (let jM = 0; jM < rM; jM++) {
          const rM = [];
          this._CollectFrameValues(MM, jM + iM, rM, OM), SM += rM.map((MM => MM.toFixed(6))).join(" ") + "\n"
        }
        return SM
      }
      static _CollectFrameValues(MM, rM, iM, OM) {
        for (const SM of MM)
          if (!this._IsEndSite(SM)) {
            if (SM.hasPositionChannels) {
              const MM = this._GetPositionAtFrameIndex(SM.positionKeys, rM);
              iM.push(MM.x, MM.y, MM.z)
            }
            if (SM.hasRotationChannels) {
              const MM = this._GetRotationAtFrameIndex(SM.rotationKeys, rM),
                OM = this._QuaternionToEuler(MM);
              iM.push(OM.z, OM.x, OM.y)
            }
            SM.children.length > 0 && this._CollectFrameValues(SM.children, rM, iM, OM)
          }
      }
      static _GetPositionAtFrameIndex(MM, rM) {
        if (0 === MM.length) return OM.sh.Zero();
        return MM[Math.max(0, Math.min(rM, MM.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(MM, rM) {
        if (0 === MM.length) return OM.Quaternion.Identity();
        return MM[Math.max(0, Math.min(rM, MM.length - 1))].value.clone()
      }
      static _QuaternionToEuler(MM) {
        const rM = new OM.Matrix;
        MM.toRotationMatrix(rM);
        const iM = rM.m;
        let jM, aM, PM;
        const nM = Math.sqrt(iM[0] * iM[0] + iM[1] * iM[1]);
        return nM > ki.d ? (jM = Math.atan2(iM[6], iM[10]), aM = Math.atan2(-iM[2], nM), PM = Math.atan2(iM[1], iM[0])) : (jM = Math.atan2(-iM[9], iM[5]), aM = Math.atan2(-iM[2], nM), PM = 0), new OM.sh(SM.Tools.ToDegrees(jM), SM.Tools.ToDegrees(aM), SM.Tools.ToDegrees(PM))
      }
    }

    function ua(MM) {
      return "string" === typeof MM?.name
    }
    const Ra = Symbol("__xml:meta$__"),
      pa = Symbol("__xml:name$__");

    function Wa(MM, rM) {
      Object.prototype.hasOwnProperty.call(MM.metadata, Ra) || (MM.metadata[Ra] = []), MM.metadata[Ra].push(rM)
    }

    function sa(MM) {
      return (rM, iM) => {
        rM[pa] = MM
      }
    }

    function Da() {
      return (MM, rM) => Wa(rM, {
        kind: "none",
        prop: String(rM.name),
        ignore: !0
      })
    }

    function ka(MM) {
      return (rM, iM) => Wa(iM, {
        kind: "attr",
        prop: String(iM.name),
        ...MM
      })
    }

    function Za(MM) {
      return (rM, iM) => Wa(iM, {
        kind: "elem",
        prop: String(iM.name),
        ...MM
      })
    }

    function oa(MM) {
      const rM = "function" === typeof MM ? MM : MM?.constructor,
        iM = rM?.[Symbol.metadata];
      if (!iM) return [];
      const OM = [];
      let SM = iM;
      for (; SM;) Object.prototype.hasOwnProperty.call(SM, Ra) && OM.push(...SM[Ra]), SM = Object.getPrototypeOf(SM);
      return OM
    }

    function fa(MM) {
      const rM = MM?.constructor?.[pa];
      return rM || void 0
    }

    function Ya(MM) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(MM)
    }

    function Na(MM) {
      if (ua(MM)) return MM;
      const rM = (MM ?? "").trim();
      if (!rM) return {
        name: ""
      };
      const iM = rM.indexOf(":");
      if (-1 === iM) return {
        name: rM
      };
      if (-1 !== rM.indexOf(":", iM + 1)) return {
        name: rM
      };
      const OM = rM.slice(0, iM),
        SM = rM.slice(iM + 1);
      return Ya(OM) && Ya(SM) ? {
        ns: OM,
        name: SM
      } : {
        name: rM
      }
    }

    function Aa(MM, rM) {
      return rM ? `${rM}:${MM}` : MM
    }
    const xa = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      va = Object.freeze({
        number: xa
      });

    function Fa(MM) {
      const rM = MM?.eps ?? xa.eps;
      return {
        eps: rM,
        maxDecimalsCap: MM?.maxDecimalsCap ?? xa.maxDecimalsCap,
        trimTrailingZeros: MM?.trimTrailingZeros ?? xa.trimTrailingZeros,
        fixedDecimals: MM?.fixedDecimals,
        allowScientific: MM?.allowScientific ?? xa.allowScientific,
        snapNearZero: MM?.snapNearZero ?? xa.snapNearZero,
        zeroThreshold: MM?.zeroThreshold ?? rM,
        perAttributeEps: MM?.perAttributeEps
      }
    }

    function Ba(MM) {
      return {
        number: Fa(MM?.number)
      }
    }
    class Xa {
      constructor(MM) {
        if (this.o = MM, this._o = MM.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(MM) {
        if (!Number.isFinite(MM)) throw new Error(`Cannot format non-finite number: ${MM}`);
        const rM = this._o,
          iM = this._clampInt(rM.maxDecimalsCap ?? 15, 0, 20),
          OM = rM.trimTrailingZeros ?? !0,
          SM = rM.snapNearZero ?? !0,
          jM = rM.zeroThreshold ?? rM.eps,
          aM = 1 / rM.eps;
        let PM, nM = Math.round(MM * aM) / aM;
        if (Object.is(nM, -0) && (nM = 0), SM && Math.abs(nM) <= jM && (nM = 0), PM = void 0 !== rM.fixedDecimals ? this._clampInt(rM.fixedDecimals, 0, iM) : this._clampInt(Math.ceil(-Math.log10(rM.eps)), 0, iM), rM.allowScientific, 0 === PM) return String(Math.trunc(nM));
        let QM = nM.toFixed(PM);
        if (OM && void 0 === rM.fixedDecimals && (QM = QM.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(QM)) throw new Error(`Scientific notation not allowed in XML output: ${QM}`);
        return QM
      }
      _clampInt(MM, rM, iM) {
        return Number.isFinite(MM) ? (MM = Math.trunc(MM), Math.max(rM, Math.min(iM, MM))) : rM
      }
    }

    function Ia(MM) {
      return MM instanceof Date
    }

    function Ka(MM) {
      return "string" === typeof MM
    }

    function qa(MM) {
      return "string" === typeof MM || "number" === typeof MM || "boolean" === typeof MM || "bigint" === typeof MM || Ia(MM)
    }

    function Ta(MM) {
      return "number" === typeof MM || "boolean" === typeof MM || "bigint" === typeof MM || Ia(MM)
    }
    class Va {
      constructor(MM, rM) {
        this._ns = new Map, this._prefixCount = 0, this._builder = MM, this._format = Ba(rM), this._nFmt = new Xa(this._format)
      }
      withNamespace() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        for (const OM of rM) this._assignNamespace(OM);
        return this
      }
      serialize(MM, rM) {
        if (!(rM = rM ?? fa(MM))) throw new Error("can not find name for given object");
        const iM = Na(rM);
        iM.ns && this._assignNamespace(iM.ns, "xmlns"), this._gatherNamespaces(MM, new WeakSet);
        const OM = this._builder.ele(null, iM.name);
        for (const [SM, jM] of Array.from(this._ns.entries())) OM.att("xmlns", jM, SM);
        this._writeObjectContent(OM, MM, (new WeakSet).add(MM)), this._builder.end()
      }
      _writeObject(MM, rM, iM) {
        if (iM.has(rM)) return;
        if (iM.add(rM), Array.isArray(rM)) {
          for (const OM of rM) Ta(OM) || (Ka(OM) ? this._builder.text(OM) : this._writeObject(MM, OM, iM));
          return
        }
        const OM = fa(rM);
        if (!OM) return;
        const SM = Na(OM),
          jM = this._getPrefix(SM),
          aM = Aa(SM.name, jM);
        MM.ele(null, aM), this._writeObjectContent(MM, rM, iM), this._builder.end()
      }
      _getPrefix(MM) {
        if (MM.ns) {
          const rM = this._ns.get(MM.ns.toLowerCase());
          if ("xmlns" !== rM) return rM
        }
      }
      _writeObjectContent(MM, rM, iM) {
        const OM = oa(rM) ?? [],
          SM = new Map;
        for (const aM of OM) {
          const MM = SM.get(aM.prop) ?? [];
          MM.push(aM), SM.set(aM.prop, MM)
        }
        const jM = Object.keys(rM).sort(((MM, rM) => {
          const iM = (SM.get(MM) ?? []).some((MM => "attr" === MM.kind));
          return iM === (SM.get(rM) ?? []).some((MM => "attr" === MM.kind)) ? 0 : iM ? -1 : 1
        }));
        for (const aM of jM) {
          const OM = rM[aM];
          if (null === OM || void 0 === OM) continue;
          const jM = SM.get(aM);
          if (jM) {
            if (jM.some((MM => !0 === MM.ignore || "none" === MM.kind))) continue;
            for (const rM of jM) {
              const iM = rM.name ?? rM.prop.toLowerCase();
              if (iM) switch (rM.kind) {
                case "attr": {
                  let SM = null;
                  if ("number" === typeof OM && this._nFmt && (SM = this._nFmt.toString(OM)), rM.formatter) {
                    SM = new rM.formatter(this._format).toString(OM)
                  }
                  if (SM = SM ?? OM.toString(), SM) {
                    const rM = Na(iM),
                      OM = this._getPrefix(rM),
                      jM = Aa(rM.name, OM);
                    MM.att(null, jM, SM)
                  }
                  break
                }
              }
            }
          } else Ta(OM) || (Ka(OM) ? this._builder.text(OM) : this._writeObject(MM, OM, iM))
        }
      }
      _gatherNamespaces(MM, rM) {
        if (rM.has(MM)) return;
        if (rM.add(MM), Array.isArray(MM)) {
          for (const iM of MM) qa(iM) || this._gatherNamespaces(iM, rM);
          return
        }
        const iM = fa(MM);
        iM && this._assignNamespace(iM);
        const OM = oa(MM) ?? [],
          SM = new Map;
        for (const aM of OM) {
          const MM = SM.get(aM.prop) ?? [];
          MM.push(aM), SM.set(aM.prop, MM)
        }
        const jM = [];
        for (const aM of Object.keys(MM)) {
          const rM = MM[aM];
          if (null === rM || void 0 === rM) continue;
          const iM = SM.get(aM);
          if (iM) {
            if (iM.some((MM => !0 === MM.ignore || "none" === MM.kind))) continue;
            for (const MM of iM) MM.name && this._assignNamespace(MM.name)
          }
          jM.push(rM)
        }
        for (const aM of jM) qa(aM) || this._gatherNamespaces(aM, rM)
      }
      _assignNamespace(MM, rM) {
        const iM = Na(MM);
        if (iM?.ns) {
          const MM = iM.ns.toLowerCase();
          this._ns.get(MM) || this._ns.set(MM, rM ?? this._buildNsPrefix(MM))
        } else if ("xmlns" === rM) {
          const MM = iM.name.toLowerCase();
          this._ns.get(MM) || this._ns.set(MM, rM ?? this._buildNsPrefix(MM))
        }
      }
      _buildNsPrefix(MM) {
        let rM, iM = !1;
        do {
          rM = "ns" + this._prefixCount++;
          for (const MM of Array.from(this._ns.values()))
            if (MM === rM) {
              iM = !0;
              break
            }
        } while (iM);
        return rM
      }
    }
    class ca {}
    var MP;
    ca.OpenTag = "<", ca.CloseTag = ">", ca.Slash = "/", ca.Question = "?", ca.Quote = '"', ca.Equal = "=", ca.Space = " ", ca.Semicolon = ":", ca.Dec = "<?xml", ca.Xml = "xml", ca.Xmlns = "xmlns", ca.Xsi = "xsi", ca.VersionKeyword = "version", ca.EncodingKeyword = "encoding", ca.StandaloneKeyword = "standalone",
      function(MM) {
        MM[MM.Declaration = 0] = "Declaration", MM[MM.Tag = 1] = "Tag", MM[MM.Attribute = 2] = "Attribute", MM[MM.Text = 3] = "Text"
      }(MP || (MP = {}));
    class rP {
      constructor(MM) {
        this._ctxStack = [], this._d = 0, this._w = MM
      }
      dec(MM, rM, iM) {
        return this._w.write(ca.Dec), this._writeAttStr(ca.VersionKeyword, MM), rM && this._writeAttStr(ca.EncodingKeyword, rM), void 0 !== iM && this._writeAttStr(ca.StandaloneKeyword, iM ? "yes" : "no"), this._w.write(ca.Question, ca.CloseTag), this
      }
      att(MM, rM, iM) {
        const OM = this._peekContext();
        if (!OM) throw new Error("att() without open element");
        if (OM.closed) throw new Error(`att() after start tag closed for <${OM.name}>`);
        if (this._isXmlnsDecl(MM, rM)) {
          if (rM === ca.Xmlns) OM.defaultNs = iM, this._registerNamespace(OM, "", iM), this._writeAttStr(ca.Xmlns, iM);
          else if (MM) this._registerNamespace(OM, rM, iM), this._writeAttStr(`${MM}:${rM}`, iM);
          else {
            const MM = rM.slice(6);
            this._registerNamespace(OM, MM, iM), this._writeAttStr(rM, iM)
          }
          return OM.lastToken = MP.Attribute, this
        }
        let SM = rM;
        if (MM) {
          SM = `${this._ensurePrefixDeclared(OM,MM)}:${rM}`
        }
        return OM.lastToken = MP.Attribute, this._writeAttStr(SM, iM), this
      }
      ele(MM, rM) {
        const iM = this._peekContext();
        iM && this._closeOpenTagIfNeeded(iM);
        let OM = rM;
        if (MM) {
          OM = `${this._lookupPrefix(MM)??MM}:${rM}`
        }
        return this._pushContext(OM, ++this._d), this._w.write(ca.OpenTag, OM), this
      }
      text(MM) {
        const rM = this._peekContext();
        if (!rM) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(rM), rM.lastToken = MP.Text, this._w.write(this._escText(MM)), this
      }
      end() {
        const MM = this._popContext();
        return MM && (this._d--, MM.closed ? this._w.write(ca.OpenTag, ca.Slash, MM.name, ca.CloseTag) : this._w.write(ca.Slash, ca.CloseTag)), this
      }
      _pushContext(MM, rM) {
        const iM = new rP.Context(MM, rM);
        return this._ctxStack.push(iM), iM
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
      _writeAttStr(MM, rM) {
        this._w.write(ca.Space, MM, ca.Equal, ca.Quote, this._escAttr(rM), ca.Quote)
      }
      _lookupPrefix(MM) {
        let rM = this._ctxStack.length - 1;
        if (rM >= 0)
          do {
            const iM = this._ctxStack[rM--],
              OM = iM.ns2prefix?.get(MM);
            if (OM) return OM
          } while (rM >= 0)
      }
      _escText(MM) {
        return MM.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(MM) {
        return this._escText(MM).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(MM, rM) {
        if (MM) return MM === ca.Xmlns;
        const iM = rM.length,
          OM = ca.Xmlns.length;
        return iM >= OM && (rM.startsWith(ca.Xmlns) && (rM.length == OM || rM[OM] == ca.Semicolon))
      }
      _registerNamespace(MM, rM, iM) {
        if (rM === ca.Xml || rM === ca.Xmlns) throw new Error(`reserved prefix '${rM}'`);
        const OM = MM.prefix2ns.get(rM);
        if (OM && OM !== iM) throw new Error(`prefix '${rM}' already bound to a different namespace`);
        MM.ns2prefix.get(iM) || MM.ns2prefix.set(iM, rM), MM.prefix2ns.set(rM, iM)
      }
      _allocPrefix(MM) {
        let rM = 1;
        for (;;) {
          const iM = "ns" + rM++;
          if (!MM.prefix2ns.has(iM)) return iM
        }
      }
      _ensurePrefixDeclared(MM, rM) {
        const iM = this._lookupPrefix(rM);
        if (iM) return iM;
        if (MM.closed) throw new Error(`can not declare namespace after start tag closed for <${MM.name}>`);
        const OM = this._allocPrefix(MM);
        return this._writeAttStr(`${ca.Xmlns}:${OM}`, rM), this._registerNamespace(MM, OM, rM), OM
      }
      _closeOpenTagIfNeeded(MM) {
        MM.closed || (this._w.write(ca.CloseTag), MM.closed = !0)
      }
    }
    rP.Context = class {
      constructor(MM, rM) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = MM, this.depth = rM
      }
    };
    class iP {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        if (0 === rM.length) return this;
        const OM = rM.join("");
        return this._chunks.push(OM), this.count += OM.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class OP {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = MM, this._opts = rM, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        if (0 === rM.length) return this;
        const OM = rM.join("");
        if (0 === OM.length) return this;
        this._pending += OM, this._pendingChars += OM.length;
        const SM = this._opts.flushChars ?? 65536;
        return this._pendingChars >= SM && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const MM = this._encoder.encode(this._pending);
        return this._sink.push(MM), this.count += MM.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const SP = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      jP = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var aP, PP;
    ! function(MM) {
      MM.micron = "micron", MM.millimeter = "millimeter", MM.centimeter = "centimeter", MM.inch = "inch", MM.foot = "foot", MM.meter = "meter"
    }(aP || (aP = {})),
    function(MM) {
      MM.model = "model", MM.solidsupport = "solidsupport", MM.support = "support", MM.surface = "surface", MM.other = "other"
    }(PP || (PP = {}));
    const nP = "http://schemas.openxmlformats.org/package/2006/content-types",
      QP = "http://schemas.openxmlformats.org/package/2006/relationships";
    var zP;
    ! function(MM) {
      MM.Relationships = "application/vnd.openxmlformats-package.relationships+xml", MM.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", MM.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", MM.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", MM.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", MM.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", MM.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", MM.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", MM.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", MM.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", MM.Png = "image/png", MM.Jpeg = "image/jpeg", MM.Tiff = "image/tiff", MM.Xml = "application/xml"
    }(zP || (zP = {}));
    const LP = "_rels/",
      mP = "3D/",
      HP = "3dmodel.model",
      hP = ".rels",
      JP = "[Content_Types].xml";
    class dP {
      static IsKnown(MM) {
        return dP.Known.has(MM)
      }
      static IsThreeDimModel(MM) {
        return MM === dP.ThreeDimModel
      }
    }
    dP.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", dP.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", dP.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", dP.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", dP.Known = new Set([dP.ThreeDimModel, dP.Thumbnail, dP.PrintTicket, dP.MustPreserve]);
    let yP = (() => {
        let MM, rM, iM = [sa({
            ns: nP,
            name: "Types"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.items = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfContentTypes"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      lP = (() => {
        let MM, rM, iM, OM, SM = [sa({
            ns: nP,
            name: "Default"
          })],
          jM = [],
          aM = [],
          PM = [],
          nM = [],
          QM = [];
        rM = class {
          constructor(MM, rM) {
            this.ext = (0, wM.m)(this, aM, void 0), this.ct = ((0, wM.m)(this, PM), (0, wM.m)(this, nM, void 0)), (0, wM.m)(this, QM), this.ext = MM, this.ct = rM
          }
        };
        return (0, wM.p)(rM, "ThreeMfContentType"), (() => {
          const zM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: {
              ns: nP,
              name: "Extension"
            }
          })], OM = [ka({
            name: {
              ns: nP,
              name: "ContentType"
            }
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: MM => "ext" in MM,
              get: MM => MM.ext,
              set: (MM, rM) => {
                MM.ext = rM
              }
            },
            metadata: zM
          }, aM, PM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: MM => "ct" in MM,
              get: MM => MM.ct,
              set: (MM, rM) => {
                MM.ct = rM
              }
            },
            metadata: zM
          }, nM, QM), (0, wM.i)(null, MM = {
            value: rM
          }, SM, {
            kind: "class",
            name: rM.name,
            metadata: zM
          }, null, jM), rM = MM.value, zM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zM
          }), (0, wM.m)(rM, jM)
        })(), rM
      })(),
      EP = (() => {
        let MM, rM, iM = [sa({
            ns: QP,
            name: "Relationships"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.items = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfRelationships"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      UP = (() => {
        let MM, rM, iM, OM, SM, jM = [sa({
            ns: QP,
            name: "Relationship"
          })],
          aM = [],
          PM = [],
          nM = [],
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        rM = class {
          constructor(MM, rM, iM) {
            this.id = (0, wM.m)(this, PM, void 0), this.type = ((0, wM.m)(this, nM), (0, wM.m)(this, QM, void 0)), this.target = ((0, wM.m)(this, zM), (0, wM.m)(this, LM, void 0)), (0, wM.m)(this, mM), this.id = MM, this.type = rM, this.target = iM
          }
        };
        return (0, wM.p)(rM, "ThreeMfRelationship"), (() => {
          const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "Id"
          })], OM = [ka({
            name: "Type"
          })], SM = [ka({
            name: "Target"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: MM => "id" in MM,
              get: MM => MM.id,
              set: (MM, rM) => {
                MM.id = rM
              }
            },
            metadata: HM
          }, PM, nM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: MM => "type" in MM,
              get: MM => MM.type,
              set: (MM, rM) => {
                MM.type = rM
              }
            },
            metadata: HM
          }, QM, zM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: MM => "target" in MM,
              get: MM => MM.target,
              set: (MM, rM) => {
                MM.target = rM
              }
            },
            metadata: HM
          }, LM, mM), (0, wM.i)(null, MM = {
            value: rM
          }, jM, {
            kind: "class",
            name: rM.name,
            metadata: HM
          }, null, aM), rM = MM.value, HM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HM
          }), (0, wM.m)(rM, aM)
        })(), rM
      })();
    class GP {
      constructor(MM, rM, iM) {
        this.contentTypes = MM, this.relationships = rM, this.model = iM
      }
    }
    class CP {
      static Zero() {
        return new CP([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(MM) {
        this.values = MM
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class eP {
      constructor(MM) {
        this.o = MM, this._f = new Xa(MM)
      }
      toString(MM) {
        return MM.values.map((MM => this._f.toString(MM))).join(" ")
      }
    }
    let bP = (() => {
        let MM, rM, iM, OM, SM, jM = [sa({
            ns: SP,
            name: "model"
          })],
          aM = [],
          PM = [],
          nM = [],
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        rM = class {
          constructor() {
            this.unit = (0, wM.m)(this, PM, aP.millimeter), this.requiredextensions = ((0, wM.m)(this, nM), (0, wM.m)(this, QM, void 0)), this.recommendedextensions = ((0, wM.m)(this, zM), (0, wM.m)(this, LM, void 0)), this.metadata = (0, wM.m)(this, mM)
          }
        };
        return (0, wM.p)(rM, "ThreeMfModel"), (() => {
          const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "unit"
          })], OM = [ka({
            name: "requiredextensions"
          })], SM = [ka({
            name: "recommendedextensions"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: MM => "unit" in MM,
              get: MM => MM.unit,
              set: (MM, rM) => {
                MM.unit = rM
              }
            },
            metadata: HM
          }, PM, nM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: MM => "requiredextensions" in MM,
              get: MM => MM.requiredextensions,
              set: (MM, rM) => {
                MM.requiredextensions = rM
              }
            },
            metadata: HM
          }, QM, zM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: MM => "recommendedextensions" in MM,
              get: MM => MM.recommendedextensions,
              set: (MM, rM) => {
                MM.recommendedextensions = rM
              }
            },
            metadata: HM
          }, LM, mM), (0, wM.i)(null, MM = {
            value: rM
          }, jM, {
            kind: "class",
            name: rM.name,
            metadata: HM
          }, null, aM), rM = MM.value, HM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HM
          })
        })(), rM.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, wM.m)(rM, aM), rM
      })(),
      wP = (() => {
        let MM, rM, iM, OM, SM, jM = [sa({
            ns: SP,
            name: "meta"
          })],
          aM = [],
          PM = [],
          nM = [],
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        rM = class {
          constructor(MM, rM, iM, OM) {
            this.name = (0, wM.m)(this, PM, void 0), this.preserve = ((0, wM.m)(this, nM), (0, wM.m)(this, QM, void 0)), this.type = ((0, wM.m)(this, zM), (0, wM.m)(this, LM, void 0)), this.value = (0, wM.m)(this, mM), this.name = MM, this.value = rM, this.preserve = iM, this.type = OM
          }
        };
        return (0, wM.p)(rM, "ThreeMfMeta"), (() => {
          const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "name"
          })], OM = [ka({
            name: "preserve"
          })], SM = [ka({
            name: "type"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: MM => "name" in MM,
              get: MM => MM.name,
              set: (MM, rM) => {
                MM.name = rM
              }
            },
            metadata: HM
          }, PM, nM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: MM => "preserve" in MM,
              get: MM => MM.preserve,
              set: (MM, rM) => {
                MM.preserve = rM
              }
            },
            metadata: HM
          }, QM, zM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: MM => "type" in MM,
              get: MM => MM.type,
              set: (MM, rM) => {
                MM.type = rM
              }
            },
            metadata: HM
          }, LM, mM), (0, wM.i)(null, MM = {
            value: rM
          }, jM, {
            kind: "class",
            name: rM.name,
            metadata: HM
          }, null, aM), rM = MM.value, HM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HM
          }), (0, wM.m)(rM, aM)
        })(), rM
      })(),
      tP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "metadatagroup"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfMetadataGroup"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      gP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "resources"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.object = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfResources"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      uP = (() => {
        let MM, rM, iM, OM, SM, jM, aM, PM, nM, QM = [sa({
            ns: SP,
            name: "object"
          })],
          zM = [],
          LM = [],
          mM = [],
          HM = [],
          hM = [],
          JM = [],
          dM = [],
          yM = [],
          lM = [],
          EM = [],
          UM = [],
          GM = [],
          CM = [],
          eM = [],
          bM = [];
        rM = class {
          constructor(MM) {
            let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PP.model;
            this.id = (0, wM.m)(this, LM, void 0), this.type = ((0, wM.m)(this, mM), (0, wM.m)(this, HM, void 0)), this.thumbnail = ((0, wM.m)(this, hM), (0, wM.m)(this, JM, void 0)), this.partnumber = ((0, wM.m)(this, dM), (0, wM.m)(this, yM, void 0)), this.name = ((0, wM.m)(this, lM), (0, wM.m)(this, EM, void 0)), this.pid = ((0, wM.m)(this, UM), (0, wM.m)(this, GM, void 0)), this.pindex = ((0, wM.m)(this, CM), (0, wM.m)(this, eM, void 0)), this.metadatagroup = (0, wM.m)(this, bM), this.id = MM, this.type = rM
          }
        };
        return (0, wM.p)(rM, "ThreeMfObject"), (() => {
          const tM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "id"
          })], OM = [ka({
            name: "type"
          })], SM = [ka({
            name: "thumbnail"
          })], jM = [ka({
            name: "partnumber"
          })], aM = [ka({
            name: "name"
          })], PM = [ka({
            name: "pid"
          })], nM = [ka({
            name: "pindex"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: MM => "id" in MM,
              get: MM => MM.id,
              set: (MM, rM) => {
                MM.id = rM
              }
            },
            metadata: tM
          }, LM, mM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: MM => "type" in MM,
              get: MM => MM.type,
              set: (MM, rM) => {
                MM.type = rM
              }
            },
            metadata: tM
          }, HM, hM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: MM => "thumbnail" in MM,
              get: MM => MM.thumbnail,
              set: (MM, rM) => {
                MM.thumbnail = rM
              }
            },
            metadata: tM
          }, JM, dM), (0, wM.i)(null, null, jM, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: MM => "partnumber" in MM,
              get: MM => MM.partnumber,
              set: (MM, rM) => {
                MM.partnumber = rM
              }
            },
            metadata: tM
          }, yM, lM), (0, wM.i)(null, null, aM, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: MM => "name" in MM,
              get: MM => MM.name,
              set: (MM, rM) => {
                MM.name = rM
              }
            },
            metadata: tM
          }, EM, UM), (0, wM.i)(null, null, PM, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: MM => "pid" in MM,
              get: MM => MM.pid,
              set: (MM, rM) => {
                MM.pid = rM
              }
            },
            metadata: tM
          }, GM, CM), (0, wM.i)(null, null, nM, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: MM => "pindex" in MM,
              get: MM => MM.pindex,
              set: (MM, rM) => {
                MM.pindex = rM
              }
            },
            metadata: tM
          }, eM, bM), (0, wM.i)(null, MM = {
            value: rM
          }, QM, {
            kind: "class",
            name: rM.name,
            metadata: tM
          }, null, zM), rM = MM.value, tM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tM
          }), (0, wM.m)(rM, zM)
        })(), rM
      })(),
      RP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "mesh"
          })],
          OM = [];
        rM = class {
          constructor(MM, rM) {
            this.vertices = MM ?? new pP, this.triangles = rM ?? new sP
          }
        };
        return (0, wM.p)(rM, "ThreeMfMesh"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      pP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "vertices"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfVertices"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      WP = (() => {
        let MM, rM, iM, OM, SM, jM = [sa({
            ns: SP,
            name: "vertex"
          })],
          aM = [],
          PM = [],
          nM = [],
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        rM = class {
          constructor() {
            let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, wM.m)(this, PM, void 0), this.y = ((0, wM.m)(this, nM), (0, wM.m)(this, QM, void 0)), this.z = ((0, wM.m)(this, zM), (0, wM.m)(this, LM, void 0)), (0, wM.m)(this, mM), this.x = MM, this.y = rM, this.z = iM
          }
        };
        return (0, wM.p)(rM, "ThreeMfVertex"), (() => {
          const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "x"
          })], OM = [ka({
            name: "y"
          })], SM = [ka({
            name: "z"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: MM => "x" in MM,
              get: MM => MM.x,
              set: (MM, rM) => {
                MM.x = rM
              }
            },
            metadata: HM
          }, PM, nM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: MM => "y" in MM,
              get: MM => MM.y,
              set: (MM, rM) => {
                MM.y = rM
              }
            },
            metadata: HM
          }, QM, zM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: MM => "z" in MM,
              get: MM => MM.z,
              set: (MM, rM) => {
                MM.z = rM
              }
            },
            metadata: HM
          }, LM, mM), (0, wM.i)(null, MM = {
            value: rM
          }, jM, {
            kind: "class",
            name: rM.name,
            metadata: HM
          }, null, aM), rM = MM.value, HM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HM
          }), (0, wM.m)(rM, aM)
        })(), rM
      })(),
      sP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "triangles"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfTriangles"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      DP = (() => {
        let MM, rM, iM, OM, SM, jM, aM, PM, nM, QM = [sa({
            ns: SP,
            name: "triangle"
          })],
          zM = [],
          LM = [],
          mM = [],
          HM = [],
          hM = [],
          JM = [],
          dM = [],
          yM = [],
          lM = [],
          EM = [],
          UM = [],
          GM = [],
          CM = [],
          eM = [],
          bM = [];
        rM = class {
          constructor(MM, rM, iM) {
            this.v1 = (0, wM.m)(this, LM, void 0), this.v2 = ((0, wM.m)(this, mM), (0, wM.m)(this, HM, void 0)), this.v3 = ((0, wM.m)(this, hM), (0, wM.m)(this, JM, void 0)), this.p1 = ((0, wM.m)(this, dM), (0, wM.m)(this, yM, void 0)), this.p2 = ((0, wM.m)(this, lM), (0, wM.m)(this, EM, void 0)), this.p3 = ((0, wM.m)(this, UM), (0, wM.m)(this, GM, void 0)), this.pid = ((0, wM.m)(this, CM), (0, wM.m)(this, eM, void 0)), (0, wM.m)(this, bM), this.v1 = MM, this.v2 = rM, this.v3 = iM
          }
        };
        return (0, wM.p)(rM, "ThreeMfTriangle"), (() => {
          const tM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "v1"
          })], OM = [ka({
            name: "v2"
          })], SM = [ka({
            name: "v3"
          })], jM = [ka({
            name: "p1"
          })], aM = [ka({
            name: "p2"
          })], PM = [ka({
            name: "p3"
          })], nM = [ka({
            name: "pid"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: MM => "v1" in MM,
              get: MM => MM.v1,
              set: (MM, rM) => {
                MM.v1 = rM
              }
            },
            metadata: tM
          }, LM, mM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: MM => "v2" in MM,
              get: MM => MM.v2,
              set: (MM, rM) => {
                MM.v2 = rM
              }
            },
            metadata: tM
          }, HM, hM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: MM => "v3" in MM,
              get: MM => MM.v3,
              set: (MM, rM) => {
                MM.v3 = rM
              }
            },
            metadata: tM
          }, JM, dM), (0, wM.i)(null, null, jM, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: MM => "p1" in MM,
              get: MM => MM.p1,
              set: (MM, rM) => {
                MM.p1 = rM
              }
            },
            metadata: tM
          }, yM, lM), (0, wM.i)(null, null, aM, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: MM => "p2" in MM,
              get: MM => MM.p2,
              set: (MM, rM) => {
                MM.p2 = rM
              }
            },
            metadata: tM
          }, EM, UM), (0, wM.i)(null, null, PM, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: MM => "p3" in MM,
              get: MM => MM.p3,
              set: (MM, rM) => {
                MM.p3 = rM
              }
            },
            metadata: tM
          }, GM, CM), (0, wM.i)(null, null, nM, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: MM => "pid" in MM,
              get: MM => MM.pid,
              set: (MM, rM) => {
                MM.pid = rM
              }
            },
            metadata: tM
          }, eM, bM), (0, wM.i)(null, MM = {
            value: rM
          }, QM, {
            kind: "class",
            name: rM.name,
            metadata: tM
          }, null, zM), rM = MM.value, tM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tM
          }), (0, wM.m)(rM, zM)
        })(), rM
      })(),
      kP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "components"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.component = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfComponents"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      ZP = (() => {
        let MM, rM, iM, OM, SM = [sa({
            ns: SP,
            name: "component"
          })],
          jM = [],
          aM = [],
          PM = [],
          nM = [],
          QM = [];
        rM = class {
          constructor(MM, rM) {
            this.objectid = (0, wM.m)(this, aM, void 0), this.transform = ((0, wM.m)(this, PM), (0, wM.m)(this, nM, void 0)), (0, wM.m)(this, QM), this.objectid = MM, this.transform = rM
          }
        };
        return (0, wM.p)(rM, "ThreeMfComponent"), (() => {
          const zM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "objectid"
          })], OM = [ka({
            name: "transform",
            formatter: eP
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: MM => "objectid" in MM,
              get: MM => MM.objectid,
              set: (MM, rM) => {
                MM.objectid = rM
              }
            },
            metadata: zM
          }, aM, PM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: MM => "transform" in MM,
              get: MM => MM.transform,
              set: (MM, rM) => {
                MM.transform = rM
              }
            },
            metadata: zM
          }, nM, QM), (0, wM.i)(null, MM = {
            value: rM
          }, SM, {
            kind: "class",
            name: rM.name,
            metadata: zM
          }, null, jM), rM = MM.value, zM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zM
          }), (0, wM.m)(rM, jM)
        })(), rM
      })(),
      oP = (() => {
        let MM, rM, iM, OM = [sa({
            ns: SP,
            name: "basematerials"
          })],
          SM = [],
          jM = [],
          aM = [];
        rM = class {
          constructor(MM) {
            this.id = (0, wM.m)(this, jM, void 0), this.base = ((0, wM.m)(this, aM), []), this.id = MM
          }
        };
        return (0, wM.p)(rM, "ThreeMfBaseMaterials"), (() => {
          const PM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "id"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: MM => "id" in MM,
              get: MM => MM.id,
              set: (MM, rM) => {
                MM.id = rM
              }
            },
            metadata: PM
          }, jM, aM), (0, wM.i)(null, MM = {
            value: rM
          }, OM, {
            kind: "class",
            name: rM.name,
            metadata: PM
          }, null, SM), rM = MM.value, PM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: PM
          }), (0, wM.m)(rM, SM)
        })(), rM
      })(),
      fP = (() => {
        let MM, rM, iM, OM, SM = [sa({
            ns: SP,
            name: "base"
          })],
          jM = [],
          aM = [],
          PM = [],
          nM = [],
          QM = [];
        rM = class {
          constructor(MM, rM) {
            this.name = (0, wM.m)(this, aM, void 0), this.displaycolor = ((0, wM.m)(this, PM), (0, wM.m)(this, nM, void 0)), (0, wM.m)(this, QM), this.name = MM, this.displaycolor = rM
          }
        };
        return (0, wM.p)(rM, "ThreeMfBase"), (() => {
          const zM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "name"
          })], OM = [ka({
            name: "displaycolor"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: MM => "name" in MM,
              get: MM => MM.name,
              set: (MM, rM) => {
                MM.name = rM
              }
            },
            metadata: zM
          }, aM, PM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: MM => "displaycolor" in MM,
              get: MM => MM.displaycolor,
              set: (MM, rM) => {
                MM.displaycolor = rM
              }
            },
            metadata: zM
          }, nM, QM), (0, wM.i)(null, MM = {
            value: rM
          }, SM, {
            kind: "class",
            name: rM.name,
            metadata: zM
          }, null, jM), rM = MM.value, zM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zM
          }), (0, wM.m)(rM, jM)
        })(), rM
      })(),
      YP = (() => {
        let MM, rM, iM = [sa({
            ns: SP,
            name: "build"
          })],
          OM = [];
        rM = class {
          constructor() {
            this.item = []
          }
        };
        return (0, wM.p)(rM, "ThreeMfBuild"), (() => {
          const SM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, wM.i)(null, MM = {
            value: rM
          }, iM, {
            kind: "class",
            name: rM.name,
            metadata: SM
          }, null, OM), rM = MM.value, SM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SM
          }), (0, wM.m)(rM, OM)
        })(), rM
      })(),
      NP = (() => {
        let MM, rM, iM, OM, SM, jM = [sa({
            ns: SP,
            name: "item"
          })],
          aM = [],
          PM = [],
          nM = [],
          QM = [],
          zM = [],
          LM = [],
          mM = [];
        rM = class {
          constructor(MM, rM, iM) {
            this.objectid = (0, wM.m)(this, PM, void 0), this.transform = ((0, wM.m)(this, nM), (0, wM.m)(this, QM, void 0)), this.partnumber = ((0, wM.m)(this, zM), (0, wM.m)(this, LM, void 0)), this.metadatagroup = (0, wM.m)(this, mM), this.objectid = MM, this.transform = rM, this.partnumber = iM
          }
        };
        return (0, wM.p)(rM, "ThreeMfItem"), (() => {
          const HM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iM = [ka({
            name: "objectid"
          })], OM = [ka({
            name: "transform",
            formatter: eP
          })], SM = [ka({
            name: "partnumber"
          })], (0, wM.i)(null, null, iM, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: MM => "objectid" in MM,
              get: MM => MM.objectid,
              set: (MM, rM) => {
                MM.objectid = rM
              }
            },
            metadata: HM
          }, PM, nM), (0, wM.i)(null, null, OM, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: MM => "transform" in MM,
              get: MM => MM.transform,
              set: (MM, rM) => {
                MM.transform = rM
              }
            },
            metadata: HM
          }, QM, zM), (0, wM.i)(null, null, SM, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: MM => "partnumber" in MM,
              get: MM => MM.partnumber,
              set: (MM, rM) => {
                MM.partnumber = rM
              }
            },
            metadata: HM
          }, LM, mM), (0, wM.i)(null, MM = {
            value: rM
          }, jM, {
            kind: "class",
            name: rM.name,
            metadata: HM
          }, null, aM), rM = MM.value, HM && Object.defineProperty(rM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HM
          }), (0, wM.m)(rM, aM)
        })(), rM
      })();
    class AP {
      constructor(MM, rM) {
        this._object = new uP(MM, rM)
      }
      withName(MM) {
        return this._object.name = MM, this
      }
      withThumbnail(MM) {
        return this._object.thumbnail = MM, this
      }
      withProperty(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = MM, this._object.id = rM, this
      }
      build() {
        return this._object
      }
      reset(MM, rM) {
        this._object = new uP(MM, rM)
      }
    }
    class xP extends AP {
      constructor(MM) {
        super(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PP.model), this._object.content = new kP
      }
      withComponent(MM, rM) {
        return this._object.content.component.push(new ZP(MM, rM)), this
      }
    }
    class vP extends AP {
      constructor(MM) {
        super(MM, PP.model)
      }
      withPostProcessHandlers(MM, rM) {
        return this._vh = MM, this._th = rM, this
      }
      withData(MM) {
        return this._object.content = this._buildMesh(MM), this
      }
      withMaterial(MM, rM) {
        return this._object.pid = MM, this._object.pindex = rM, this
      }
      _buildMesh(MM) {
        const rM = this._buildVertices(MM.positions),
          iM = this._buildTriangle(MM.indices);
        return new RP(rM, iM)
      }
      _buildVertices(MM) {
        const rM = new pP;
        if (MM)
          for (let iM = 0; iM < MM.length;) {
            const OM = MM[iM++],
              SM = MM[iM++],
              jM = MM[iM++];
            let aM = new WP(OM, SM, jM);
            this._vh && (aM = this._vh(aM)), rM.vertex.push(aM)
          }
        return rM
      }
      _buildTriangle(MM) {
        const rM = new sP;
        if (MM)
          for (let iM = 0; iM < MM.length;) {
            const OM = MM[iM++],
              SM = MM[iM++],
              jM = MM[iM++];
            let aM = new DP(OM, SM, jM);
            this._th && (aM = this._th(aM)), rM.triangle.push(aM)
          }
        return rM
      }
    }
    class FP {
      constructor(MM) {
        this._m = new oP(MM)
      }
      withColor(MM, rM) {
        this._m.base = this._m.base ?? [];
        let iM = this._m.base.find((rM => rM.name.toLowerCase() === MM.toLowerCase()));
        return iM ? (iM.displaycolor = this._rgbaToHex(rM), this) : (iM = new fP(MM, this._rgbaToHex(rM)), this._m.base.push(iM), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(MM) {
        const rM = MM => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(MM, 1 / 2.2)))),
          iM = rM(MM.r).toString(16).padStart(2, "0").toUpperCase(),
          OM = rM(MM.g).toString(16).padStart(2, "0").toUpperCase(),
          SM = rM(MM.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof MM.a) {
          return `#${iM}${OM}${SM}${Math.round(Math.min(255,Math.max(0,255*MM.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${iM}${OM}${SM}`
      }
    }
    class BP {
      constructor() {
        this._model = new bP, this._objects = new Map
      }
      withMetaData(MM, rM, iM, OM) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new wP(MM, rM, iM, OM)), this
      }
      withMaterial(MM) {
        return MM instanceof FP && (MM = MM.build()), MM && (this._model.resources = this._model.resources ?? new gP, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(MM)), this
      }
      withMesh(MM) {
        return MM instanceof vP && (MM = MM.build()), this._model.resources = this._model.resources ?? new gP, this._model.resources.object.push(MM), this
      }
      withComponents(MM) {
        return MM instanceof xP && (MM = MM.build()), this._model.resources = this._model.resources ?? new gP, this._model.resources.object.push(MM), this
      }
      withBuild(MM, rM, iM) {
        return this._model.build = this._model.build ?? new YP, this._model.build.item?.push(new NP(MM, rM, iM)), this
      }
      withUnit(MM) {
        return this._model.unit = MM, this
      }
      reset() {
        return this._model = new bP, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    BP.KnownMetaSet = new Set(bP.KnownMeta.map((MM => MM.toLowerCase())));
    class XP {
      withContentType(MM) {
        this._cts || (this._cts = new yP);
        const rM = this._cts.items;
        return rM.some((rM => rM.ext === MM.ext && rM.ct === MM.ct)) || rM.push(MM), this
      }
      withRelationship(MM) {
        this._rs || (this._rs = new EP);
        const rM = this._rs.items;
        return rM.some((rM => rM.id === MM.id)) || rM.push(MM), this.withContentType(new lP("rels", zP.Relationships)), this
      }
      withModel(MM) {
        return MM instanceof BP && (MM = MM.build()), this._m = MM, this.withContentType(new lP("model", zP.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const MM = `${mP}${HP}`;
        if (!this._rs) {
          const rM = `/${MM}`;
          this.withRelationship(new UP("rel0", dP.ThreeDimModel, rM))
        }
        return new GP(this._cts, this._rs, this._m)
      }
    }
    class IP {
      constructor(MM) {
        this._o = MM
      }
      get options() {
        return this._o
      }
      async serializeAsync(MM) {
        const rM = await this.ensureZipLibReadyAsync();
        if (!rM) return;
        const iM = rM.Zip,
          OM = rM.ZipDeflate;
        if (!iM || !OM) throw new Error("fflate Zip / ZipDeflate not available");
        const SM = function(MM, rM, iM) {
          const SM = new OM(rM, {
            level: 6
          });
          MM.add(SM);
          const jM = function(MM) {
              return {
                push: (rM, iM) => MM.push(rM, iM)
              }
            }(SM),
            aM = new OP(jM),
            PM = new rP(aM).dec("1.0", "UTF-8");
          new Va(PM).serialize(iM), aM.finish()
        };
        for (var jM = arguments.length, aM = new Array(jM > 1 ? jM - 1 : 0), PM = 1; PM < jM; PM++) aM[PM - 1] = arguments[PM];
        const nM = this.toDocument(...aM);
        if (!nM) return;
        const QM = new iM(MM);
        SM(QM, JP, nM.contentTypes), SM(QM, `${LP}${hP}`, nM.relationships), SM(QM, `${mP}${HP}`, nM.model), QM.end()
      }
      toDocument() {
        const MM = (new BP).withUnit(this._o?.unit ?? aP.millimeter);
        if (this.options.metadata)
          for (const SM in this.options.metadata) MM.withMetaData(SM, this.options.metadata[SM]);
        for (var rM = arguments.length, iM = new Array(rM), OM = 0; OM < rM; OM++) iM[OM] = arguments[OM];
        return (new XP).withModel(this.toModel(MM, ...iM)).build()
      }
    }
    class KP {
      static async SerializeToMemoryAsync(MM) {
        const rM = new Array;
        let iM = 0;
        for (var OM = arguments.length, SM = new Array(OM > 1 ? OM - 1 : 0), jM = 1; jM < OM; jM++) SM[jM - 1] = arguments[jM];
        if (await MM.serializeAsync((function(MM, OM, SM) {
            rM.push(OM), iM += OM.length
          }), ...SM), !iM) return;
        const aM = new Uint8Array(iM);
        let PM = 0;
        for (const nM of rM) aM.set(nM, PM), PM += nM.length;
        return aM
      }
    }
    class qP {}
    qP.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class TP {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = MM, this._to = rM, this._step = iM, this._i = MM
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const MM = this._i;
        return this._i += this._step, MM
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class VP extends IP {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...VP.DefaultOptions,
          ...MM
        })
      }
      toModel(MM) {
        for (var rM = arguments.length, iM = new Array(rM > 1 ? rM - 1 : 0), OM = 1; OM < rM; OM++) iM[OM - 1] = arguments[OM];
        iM = iM.filter((MM => MM instanceof LO.d || MM instanceof HM.b));
        const SM = new TP,
          jM = MM,
          aM = new Map,
          PM = this.options.exportInstances ? [] : null;
        for (let nM = 0; nM < iM.length; nM++) {
          const MM = iM[nM];
          if (MM instanceof HM.b) {
            PM?.push(MM);
            continue
          }
          const rM = MM.name || `mesh${nM}`,
            OM = MM.getWorldMatrix(),
            QM = this._handleBabylonTo3mfMatrixTransformToRef(OM, CP.Zero()),
            zM = MM.iG;
          if (void 0 === zM) continue;
          const LM = 1 == zM.length;
          for (let iM = 0; iM < zM.length; iM++) {
            const OM = zM[iM],
              PM = this._extractSubMesh(MM, OM);
            if (PM) {
              const MM = LM ? `${rM}` : `${rM}_${iM}`,
                nM = new vP(SM.next()).withData(PM).withName(MM).build();
              jM.withMesh(nM), jM.withBuild(nM.id, QM), aM.set(OM, nM)
            }
          }
        }
        if (PM && PM.length) {
          const MM = this._groupBy(PM, (MM => MM.QSM));
          for (const [rM, iM] of Array.from(MM.entries()))
            if (iM && iM.length)
              for (let MM = 0; MM < iM.length; MM++) {
                const OM = iM[MM].getWorldMatrix(),
                  SM = rM.iG;
                for (let MM = 0; MM < SM.length; MM++) {
                  const rM = SM[MM],
                    iM = aM.get(rM);
                  iM && jM.withBuild(iM.id, this._handleBabylonTo3mfMatrixTransformToRef(OM, CP.Zero()))
                }
              }
        }
        return jM.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const MM = globalThis;
          return MM.fflate || await SM.Tools.LoadScriptAsync(qP.FFLATEUrl), MM.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(MM, rM) {
        const iM = MM.hOM();
        if (!iM) return;
        const OM = MM.getVerticesData(VP._PositionKind);
        if (!OM) return;
        if (0 == rM.indexStart && rM.indexCount == iM.length) return {
          positions: OM,
          indices: iM
        };
        const SM = rM.indexStart,
          jM = new Map,
          aM = [],
          PM = new Uint32Array(rM.indexCount);
        for (let nM = 0; nM < rM.indexCount; nM++) {
          const MM = iM[SM + nM];
          let rM = jM.get(MM);
          if (void 0 === rM) {
            rM = jM.size, jM.set(MM, rM);
            const iM = 3 * MM;
            aM.push(OM[iM], OM[iM + 1], OM[iM + 2])
          }
          PM[nM] = rM
        }
        return {
          positions: new Float32Array(aM),
          indices: PM
        }
      }
      _groupBy(MM, rM) {
        const iM = new Map;
        for (const OM of MM) {
          const MM = rM(OM),
            SM = iM.get(MM);
          SM ? SM.push(OM) : iM.set(MM, [OM])
        }
        return iM
      }
      _handleBabylonTo3mfMatrixTransformToRef(MM, rM) {
        const iM = MM.multiplyToRef(VP._R_BJS_TO_3MF, fM.d.Zero()).m;
        return rM.values = [iM[0], iM[1], iM[2], iM[4], iM[5], iM[6], iM[8], iM[9], iM[10], iM[12], iM[13], iM[14]], rM
      }
    }
    VP.DefaultOptions = {
      unit: aP.meter,
      exportInstances: !1
    }, VP._PositionKind = "position", VP._R_BJS_TO_3MF = fM.d.RotationX(Math.PI / 2).multiply(fM.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);