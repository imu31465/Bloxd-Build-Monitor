export const id = 262;
export const ids = [262, 267];
export const modules = {
  54015: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => PW
    });
    var mW = OW(53951),
      EW = OW(41511);
    let NW = !1;

    function PW() {
      NW || (NW = !0, EW.c.prototype._sphericalPolynomialTargetSize = 0, EW.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(EW.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = mW.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((WW => {
              this._texture._sphericalPolynomial = WW, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(WW) {
          this._texture && (this._texture._sphericalPolynomial = WW)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  38369: (WW, iW, OW) => {
    OW.d(iW, {
      Color3: () => mW.b,
      c: () => mW.d
    });
    var mW = OW(38372);
    (0, mW.f)()
  },
  38937: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(38939);
    class EW {
      static GetPlanes(WW) {
        const iW = [];
        for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
        return EW.GetPlanesToRef(WW, iW), iW
      }
      static GetNearPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
      }
      static GetFarPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
      }
      static GetLeftPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
      }
      static GetRightPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
      }
      static GetTopPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
      }
      static GetBottomPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
      }
      static GetPlanesToRef(WW, iW) {
        EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
      }
      static IsPointInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; OW++)
          if (iW[OW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  38939: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(38241);
    class EW {
      constructor(WW, iW, OW, EW) {
        this.normal = new mW.q(WW, iW, OW), this.d = EW
      }
      wEW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let iW = 0;
        return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
      }
      transform(WW) {
        const iW = EW._TmpMatrix;
        WW.invertToRef(iW);
        const OW = iW.m,
          mW = this.normal.x,
          NW = this.normal.y,
          PW = this.normal.z,
          LW = this.d,
          cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
          wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
          tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
          ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
        return new EW(cW, wW, tW, ZW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, iW, OW) {
        const mW = iW.x - WW.x,
          EW = iW.y - WW.y,
          NW = iW.z - WW.z,
          PW = OW.x - WW.x,
          LW = OW.y - WW.y,
          cW = OW.z - WW.z,
          wW = EW * cW - NW * LW,
          tW = NW * PW - mW * cW,
          ZW = mW * LW - EW * PW,
          xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
        let lW;
        return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, iW) {
        return mW.q.Dot(this.normal, WW) <= iW
      }
      signedDistanceTo(WW) {
        return mW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new EW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, iW, OW) {
        const mW = new EW(0, 0, 0, 0);
        return mW.copyFromPoints(WW, iW, OW), mW
      }
      static FromPositionAndNormal(WW, iW) {
        const OW = new EW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, iW, OW)
      }
      static FromPositionAndNormalToRef(WW, iW, OW) {
        return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
        const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
        return mW.q.Dot(OW, iW) + EW
      }
    }
    EW._TmpMatrix = mW.d.Identity()
  },
  38235: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Matrix: () => mW.d,
      Quaternion: () => mW.g,
      RegisterMathVector: () => mW.j,
      TmpVectors: () => mW.l,
      Vector2: () => mW.m,
      fA: () => mW.q,
      Vector4: () => mW.r
    });
    var mW = OW(38241);
    (0, mW.j)()
  },
  39271: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW, mW) {
        this.x = WW, this.y = iW, this.width = OW, this.height = mW
      }
      toGlobal(WW, iW) {
        return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
      }
      toGlobalToRef(WW, iW, OW) {
        return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
      }
      clone() {
        return new mW(this.x, this.y, this.width, this.height)
      }
    }
  },
  53951: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => wW
    });
    var mW = OW(38241),
      EW = OW(38285),
      NW = OW(41506),
      PW = OW(38249),
      LW = OW(38372);
    class cW {
      constructor(WW, iW, OW, mW) {
        this.name = WW, this.worldAxisForNormal = iW, this.worldAxisForFileX = OW, this.worldAxisForFileY = mW
      }
    }
    class wW {
      static _NearestPow2Floor(WW) {
        return WW <= 1 ? 1 : 1 << Math.floor(Math.log2(WW))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(WW) {
        if (!WW.isCube) return null;
        WW.bD()?.VA().flushFramebuffer();
        const iW = WW.getSize().width,
          OW = WW._sphericalPolynomialTargetSize,
          mW = OW > 0 ? this._NearestPow2Floor(OW) : 0,
          EW = !WW.noMipmap && !0 === WW._texture?.generateMipMaps,
          NW = mW > 0 && mW < iW && EW,
          PW = NW ? Math.max(0, Math.round(Math.log2(iW / mW))) : 0,
          LW = NW ? Math.max(1, Math.floor(iW / Math.pow(2, PW))) : iW,
          cW = WW.readPixels(0, PW, void 0, !1),
          wW = WW.readPixels(1, PW, void 0, !1);
        let tW, ZW;
        WW.isRenderTarget ? (tW = WW.readPixels(3, PW, void 0, !1), ZW = WW.readPixels(2, PW, void 0, !1)) : (tW = WW.readPixels(2, PW, void 0, !1), ZW = WW.readPixels(3, PW, void 0, !1));
        const xW = WW.readPixels(4, PW, void 0, !1),
          lW = WW.readPixels(5, PW, void 0, !1),
          AW = WW.gammaSpace,
          bW = mW > 0 && mW < iW && !NW;
        return new Promise((WW => {
          Promise.all([wW, cW, tW, ZW, xW, lW]).then((OW => {
            let [EW, NW, PW, cW, wW, tW] = OW, ZW = LW;
            if (bW) {
              const WW = 4;
              EW = this._DownsampleFace(EW, iW, mW, WW), NW = this._DownsampleFace(NW, iW, mW, WW), PW = this._DownsampleFace(PW, iW, mW, WW), cW = this._DownsampleFace(cW, iW, mW, WW), wW = this._DownsampleFace(wW, iW, mW, WW), tW = this._DownsampleFace(tW, iW, mW, WW), ZW = mW
            }
            const xW = {
              size: ZW,
              right: NW,
              left: EW,
              up: PW,
              down: cW,
              front: wW,
              back: tW,
              format: 5,
              type: EW instanceof Float32Array ? 1 : 0,
              gammaSpace: AW
            };
            WW(this.ConvertCubeMapToSphericalPolynomial(xW))
          }))
        }))
      }
      static _AreaElement(WW, iW) {
        return Math.atan2(WW * iW, Math.sqrt(WW * WW + iW * iW + 1))
      }
      static _DownsampleFace(WW, iW, OW, mW) {
        const EW = WW instanceof Float32Array ? WW : Float32Array.from(WW),
          NW = OW * OW * mW,
          PW = new Float32Array(NW),
          LW = iW / OW,
          cW = 1 / (LW * LW);
        for (let tW = 0; tW < OW; tW++) {
          const WW = Math.floor(tW * LW),
            NW = Math.floor((tW + 1) * LW);
          for (let wW = 0; wW < OW; wW++) {
            const ZW = Math.floor(wW * LW),
              xW = Math.floor((wW + 1) * LW),
              lW = (tW * OW + wW) * mW;
            for (let OW = 0; OW < mW; OW++) {
              let LW = 0;
              for (let PW = WW; PW < NW; PW++)
                for (let WW = ZW; WW < xW; WW++) LW += EW[(PW * iW + WW) * mW + OW];
              PW[lW + OW] = LW * cW
            }
          }
        }
        if (WW instanceof Float32Array) return PW;
        const wW = new(0, WW.constructor)(NW);
        for (let tW = 0; tW < NW; tW++) wW[tW] = PW[tW] + .5 | 0;
        return wW
      }
      static ConvertCubeMapToSphericalPolynomial(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = iW > 0 ? this._NearestPow2Floor(iW) : 0;
        if (OW > 0 && WW.size > OW) {
          const iW = 5 === WW.format ? 4 : 3,
            mW = ["right", "left", "up", "down", "front", "back"],
            EW = {};
          for (const NW of mW) EW[NW] = this._DownsampleFace(WW[NW], WW.size, OW, iW);
          WW = {
            ...WW,
            ...EW,
            size: OW
          }
        }
        const mW = new NW.e;
        let cW = 0;
        const wW = 2 / WW.size,
          tW = wW,
          ZW = .5 * wW,
          xW = ZW - 1;
        for (let NW = 0; NW < 6; NW++) {
          const iW = this._FileFaces[NW],
            OW = WW[iW.name];
          let lW = xW;
          const AW = 5 === WW.format ? 4 : 3;
          for (let NW = 0; NW < WW.size; NW++) {
            let bW = xW;
            for (let tW = 0; tW < WW.size; tW++) {
              const xW = iW.worldAxisForFileX.scale(bW).add(iW.worldAxisForFileY.scale(lW)).add(iW.worldAxisForNormal);
              xW.normalize();
              const jW = this._AreaElement(bW - ZW, lW - ZW) - this._AreaElement(bW - ZW, lW + ZW) - this._AreaElement(bW + ZW, lW - ZW) + this._AreaElement(bW + ZW, lW + ZW);
              let UW = OW[NW * WW.size * AW + tW * AW + 0],
                kW = OW[NW * WW.size * AW + tW * AW + 1],
                sW = OW[NW * WW.size * AW + tW * AW + 2];
              isNaN(UW) && (UW = 0), isNaN(kW) && (kW = 0), isNaN(sW) && (sW = 0), 0 === WW.type && (UW /= 255, kW /= 255, sW /= 255), WW.gammaSpace && (UW = Math.pow((0, EW.Clamp)(UW), PW.i), kW = Math.pow((0, EW.Clamp)(kW), PW.i), sW = Math.pow((0, EW.Clamp)(sW), PW.i));
              const MW = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const WW = Math.max(UW, kW, sW);
                if (WW > MW) {
                  const iW = MW / WW;
                  UW *= iW, kW *= iW, sW *= iW
                }
              } else UW = (0, EW.Clamp)(UW, 0, MW), kW = (0, EW.Clamp)(kW, 0, MW), sW = (0, EW.Clamp)(sW, 0, MW);
              const KW = new LW.b(UW, kW, sW);
              mW.addLight(xW, KW, jW), cW += jW, bW += wW
            }
            lW += tW
          }
        }
        const lW = 6 * (4 * Math.PI) / 6 / cW;
        return mW.scaleInPlace(lW), mW.convertIncidentRadianceToIrradiance(), mW.convertIrradianceToLambertianRadiance(), NW.f.FromHarmonics(mW)
      }
    }
    wW._FileFaces = [new cW("right", new mW.q(1, 0, 0), new mW.q(0, 0, -1), new mW.q(0, -1, 0)), new cW("left", new mW.q(-1, 0, 0), new mW.q(0, 0, 1), new mW.q(0, -1, 0)), new cW("up", new mW.q(0, 1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, 1)), new cW("down", new mW.q(0, -1, 0), new mW.q(1, 0, 0), new mW.q(0, 0, -1)), new cW("front", new mW.q(0, 0, 1), new mW.q(1, 0, 0), new mW.q(0, -1, 0)), new cW("back", new mW.q(0, 0, -1), new mW.q(-1, 0, 0), new mW.q(0, -1, 0))], wW.MAX_HDRI_VALUE = 4096, wW.PRESERVE_CLAMPED_COLORS = !1
  },
  53812: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW.i,
      f: () => mW.s
    });
    var mW = OW(41558);
    (0, mW.z)()
  },
  39088: (WW, iW, OW) => {
    function mW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const iW = 16 * Math.random() | 0;
        return ("x" === WW ? iW : 3 & iW | 8).toString(16)
      }))
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  53986: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => NW
    });
    var mW = OW(53977),
      EW = OW(53995);
    class NW {
      static ExpandRGBDTexture(WW) {
        const iW = WW._texture;
        if (!iW || !WW.isRGBD) return;
        const EW = iW.VA(),
          NW = EW.getCaps(),
          PW = iW.isReady;
        let LW = !1;
        NW.textureHalfFloatRender && NW.textureHalfFloatLinearFiltering ? (LW = !0, iW.type = 2) : NW.textureFloatRender && NW.textureFloatLinearFiltering && (LW = !0, iW.type = 1), LW && (iW.isReady = !1, iW._isRGBD = !1, iW.invertY = !1);
        const cW = async () => {
          const NW = EW.isWebGPU,
            PW = NW ? 1 : 0;
          iW.isReady = !1, NW ? await OW.e(660).then((() => OW(64519))) : await OW.e(642).then((() => OW(64523)));
          const LW = new mW.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, EW, !1, void 0, iW.type, void 0, null, !1, void 0, PW);
          LW.externalTextureSamplerBinding = !0;
          const cW = EW.createRenderTargetTexture(iW.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: iW.samplingMode,
            type: iW.type,
            format: 5
          });
          LW.onEffectCreatedObservable.addOnce((OW => {
            OW.executeWhenCompiled((() => {
              LW.onApply = WW => {
                WW._bindTexture("textureSampler", iW), WW.setFloat2("scale", 1, 1)
              }, WW.bD()?.postProcessManager.directRender([LW], cW, !0), EW.restoreDefaultFramebuffer(), EW._releaseTexture(iW), LW && LW.dispose(), cW._swapAndDie(iW), iW.isReady = !0
            }))
          }))
        };
        LW && (PW ? cW() : WW.onLoadObservable.addOnce(cW))
      }
      static async EncodeTextureToRGBD(WW, iW) {
        let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return iW.VA().isWebGPU ? await OW.e(661).then((() => OW(64545))) : await OW.e(643).then((() => OW(64537))), await (0, EW.c)("rgbdEncode", WW, iW, mW, 1, 5)
      }
    }
  },
  64385: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AsyncLoop: () => mW.b,
      RegisterTools: () => mW.c,
      Tools: () => mW.f,
      className: () => mW.h
    });
    var mW = OW(41620);
    (0, mW.c)()
  },
  54026: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    class mW {
      constructor(WW) {
        this._pendingActions = new Array, this._workerInfos = WW.map((WW => ({
          workerPromise: Promise.resolve(WW),
          idle: !0
        })))
      }
      dispose() {
        for (const WW of this._workerInfos) WW.workerPromise.then((WW => {
          WW.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(WW) {
        this._executeOnIdleWorker(WW) || this._pendingActions.push(WW)
      }
      _executeOnIdleWorker(WW) {
        for (const iW of this._workerInfos)
          if (iW.idle) return this._execute(iW, WW), !0;
        return !1
      }
      _execute(WW, iW) {
        WW.idle = !1, WW.workerPromise.then((OW => {
          iW(OW, (() => {
            const iW = this._pendingActions.shift();
            iW ? this._execute(WW, iW) : WW.idle = !0
          }))
        }))
      }
    }
    class EW extends mW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : EW.DefaultOptions;
        super([]), this._maxWorkers = WW, this._createWorkerAsync = iW, this._options = OW
      }
      push(WW) {
        if (!this._executeOnIdleWorker(WW))
          if (this._workerInfos.length < this._maxWorkers) {
            const iW = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(iW), this._execute(iW, WW)
          } else this._pendingActions.push(WW)
      }
      _execute(WW, iW) {
        WW.timeoutId && (clearTimeout(WW.timeoutId), delete WW.timeoutId), super._execute(WW, ((OW, mW) => {
          iW(OW, (() => {
            mW(), WW.idle && (WW.timeoutId = setTimeout((() => {
              WW.workerPromise.then((WW => {
                WW.terminate()
              }));
              const iW = this._workerInfos.indexOf(WW); - 1 !== iW && this._workerInfos.splice(iW, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    EW.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  64419: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AbstractThreeMfSerializer: () => aL,
      BVHExporter: () => HP,
      ContentTypeFileName: () => jL,
      DefaultXmlSerializerFormatOptions: () => qP,
      DefaultXmlSerializerNumberOptions: () => BP,
      EXT_lights_area: () => sE,
      EXT_mesh_gpu_instancing: () => Cm,
      EXT_texture_avif: () => LP,
      EXT_texture_webp: () => mP,
      GLTF2Export: () => Vm,
      GLTFData: () => wW,
      GetXmlFieldMeta: () => VP,
      GetXmlName: () => pP,
      IsQualifiedName: () => nP,
      KHR_draco_mesh_compression: () => WE,
      KHR_interactivity: () => xE,
      KHR_lights_punctual: () => cE,
      KHR_materials_anisotropy: () => YE,
      KHR_materials_clearcoat: () => HE,
      KHR_materials_coat: () => vE,
      KHR_materials_diffuse_roughness: () => pN,
      KHR_materials_diffuse_transmission: () => CE,
      KHR_materials_dispersion: () => RE,
      KHR_materials_emissive_strength: () => rE,
      KHR_materials_fuzz: () => lN,
      KHR_materials_ior: () => WN,
      KHR_materials_iridescence: () => EN,
      KHR_materials_openpbr: () => BN,
      KHR_materials_sheen: () => cN,
      KHR_materials_specular: () => UN,
      KHR_materials_transmission: () => KN,
      KHR_materials_unlit: () => JN,
      KHR_materials_volume: () => uN,
      KHR_materials_volume_scatter: () => vN,
      KHR_texture_basisu: () => QN,
      KHR_texture_transform: () => IN,
      Known3mfRelationshipTypes: () => UL,
      KnownI3mfContentType: () => ZL,
      Matrix3d: () => YL,
      MatrixFormatter: () => yL,
      ModelFileName: () => AL,
      NumberFormatter: () => IP,
      OBJExport: () => PW,
      Object3dDirName: () => lL,
      OpenXmlContentTypesNamespace: () => wL,
      OpenXmlRelationshipsNamespace: () => tL,
      RegisterEXT_lights_area: () => KE,
      RegisterEXT_mesh_gpu_instancing: () => Bm,
      RegisterEXT_texture_avif: () => wP,
      RegisterEXT_texture_webp: () => NP,
      RegisterKHR_draco_mesh_compression: () => OE,
      RegisterKHR_interactivity: () => AE,
      RegisterKHR_lights_punctual: () => tE,
      RegisterKHR_materials_anisotropy: () => TE,
      RegisterKHR_materials_clearcoat: () => uE,
      RegisterKHR_materials_coat: () => DE,
      RegisterKHR_materials_diffuse_roughness: () => CN,
      RegisterKHR_materials_diffuse_transmission: () => BE,
      RegisterKHR_materials_dispersion: () => IE,
      RegisterKHR_materials_emissive_strength: () => FE,
      RegisterKHR_materials_fuzz: () => bN,
      RegisterKHR_materials_ior: () => ON,
      RegisterKHR_materials_iridescence: () => PN,
      RegisterKHR_materials_openpbr: () => RN,
      RegisterKHR_materials_sheen: () => tN,
      RegisterKHR_materials_specular: () => sN,
      RegisterKHR_materials_transmission: () => YN,
      RegisterKHR_materials_unlit: () => HN,
      RegisterKHR_materials_volume: () => dN,
      RegisterKHR_materials_volume_scatter: () => DN,
      RegisterKHR_texture_basisu: () => iP,
      RegisterKHR_texture_transform: () => rN,
      RelationshipDirName: () => xL,
      RelationshipFileName: () => bL,
      ResolveFormatOptions: () => GP,
      ResolveNumberOptions: () => RP,
      STLExport: () => tP,
      ST_ObjectType: () => cL,
      ST_Unit: () => LL,
      StringXmlWriter: () => mL,
      ThreeDimModelNamespace: () => NL,
      ThreeMf: () => rL,
      ThreeMfBase: () => pL,
      ThreeMfBaseMaterials: () => VL,
      ThreeMfBuild: () => fL,
      ThreeMfComponent: () => DL,
      ThreeMfComponents: () => gL,
      ThreeMfComponentsBuilder: () => BL,
      ThreeMfContentType: () => sL,
      ThreeMfContentTypes: () => kL,
      ThreeMfDocument: () => SL,
      ThreeMfDocumentBuilder: () => IL,
      ThreeMfItem: () => CL,
      ThreeMfMaterialBuilder: () => RL,
      ThreeMfMesh: () => uL,
      ThreeMfMeshBuilder: () => qL,
      ThreeMfMeta: () => JL,
      ThreeMfMetadataGroup: () => hL,
      ThreeMfModel: () => TL,
      ThreeMfModelBuilder: () => GL,
      ThreeMfObject: () => nL,
      ThreeMfObjectBuilder: () => XL,
      ThreeMfRelationship: () => KL,
      ThreeMfRelationships: () => ML,
      ThreeMfResources: () => HL,
      ThreeMfSerializer: () => QL,
      ThreeMfSerializerGlobalConfiguration: () => zL,
      ThreeMfTriangle: () => vL,
      ThreeMfTriangles: () => eL,
      ThreeMfVertex: () => dL,
      ThreeMfVertices: () => oL,
      ToQualifiedString: () => XP,
      TokenType: () => iL,
      TriangleSetsNamespace: () => PL,
      USDZExportAsync: () => JP,
      Utf8XmlWriterToBytes: () => EL,
      XmlAttr: () => gP,
      XmlBuilder: () => OL,
      XmlElem: () => DP,
      XmlIgnore: () => vP,
      XmlName: () => eP,
      XmlNameToParts: () => CP,
      XmlSerializer: () => QP,
      _ConvertToGLTFPBRMetallicRoughness: () => hO,
      _SolveMetallic: () => JO,
      __IGLTFExporterExtension: () => LW
    });
    var mW = OW(38235),
      EW = OW(64385),
      NW = OW(41805);
    class PW {
      static OBJ(WW, iW, OW, PW) {
        const LW = [];
        let cW = 1,
          wW = 1;
        iW && (OW || (OW = "mat"), LW.push("mtllib " + OW + ".mtl"));
        for (let tW = 0; tW < WW.length; tW++) {
          const OW = WW[tW],
            ZW = OW.name || `mesh${tW}}`;
          LW.push(`o ${ZW}`);
          let xW = null;
          if (PW) {
            const WW = OW.computeWorldMatrix(!0);
            xW = new mW.Matrix, WW.invertToRef(xW), OW.bakeTransformIntoVertices(WW)
          }
          if (iW) {
            const WW = OW.material;
            WW && LW.push("usemtl " + WW.id)
          }
          const lW = OW.geometry;
          if (!lW) {
            EW.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const AW = lW.getVerticesData("position"),
            bW = lW.getVerticesData("normal"),
            jW = lW.getVerticesData("uv"),
            UW = lW.IEW();
          let kW = 0,
            sW = 0;
          if (!AW || !UW) {
            EW.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const MW = WW[0].bD().useRightHandedSystem ? 1 : -1;
          for (let WW = 0; WW < AW.length; WW += 3) LW.push("v " + AW[WW] * MW + " " + AW[WW + 1] + " " + AW[WW + 2]), kW++;
          if (null != bW)
            for (let WW = 0; WW < bW.length; WW += 3) LW.push("vn " + bW[WW] * MW + " " + bW[WW + 1] + " " + bW[WW + 2]);
          if (null != jW)
            for (let WW = 0; WW < jW.length; WW += 2) LW.push("vt " + jW[WW] + " " + jW[WW + 1]), sW++;
          const KW = ["", "", ""],
            SW = (OW.material || OW.bD().defaultMaterial)._getEffectiveOrientation(OW),
            [YW, yW] = SW === NW.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let WW = 0; WW < UW.length; WW += 3) {
            const iW = [String(UW[WW] + cW), String(UW[WW + YW] + cW), String(UW[WW + yW] + cW)],
              OW = [String(UW[WW] + wW), String(UW[WW + YW] + wW), String(UW[WW + yW] + wW)],
              mW = iW,
              EW = null != jW ? OW : KW,
              NW = null != bW ? iW : KW;
            LW.push("f " + mW[0] + "/" + EW[0] + "/" + NW[0] + " " + mW[1] + "/" + EW[1] + "/" + NW[1] + " " + mW[2] + "/" + EW[2] + "/" + NW[2])
          }
          PW && xW && OW.bakeTransformIntoVertices(xW), cW += kW, wW += sW
        }
        return LW.join("\n")
      }
      static MTL(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const OW = [],
          mW = WW.material;
        OW.push("newmtl " + iW), OW.push("  Ns " + mW.specularPower.toFixed(4)), OW.push("  Ni 1.5000"), OW.push("  d " + mW.alpha.toFixed(4)), OW.push("  Tr 0.0000"), OW.push("  Tf 1.0000 1.0000 1.0000"), OW.push("  illum 2"), OW.push("  Ka " + mW.ambientColor.r.toFixed(4) + " " + mW.ambientColor.g.toFixed(4) + " " + mW.ambientColor.b.toFixed(4)), OW.push("  Kd " + mW.diffuseColor.r.toFixed(4) + " " + mW.diffuseColor.g.toFixed(4) + " " + mW.diffuseColor.b.toFixed(4)), OW.push("  Ks " + mW.specularColor.r.toFixed(4) + " " + mW.specularColor.g.toFixed(4) + " " + mW.specularColor.b.toFixed(4)), OW.push("  Ke " + mW.emissiveColor.r.toFixed(4) + " " + mW.emissiveColor.g.toFixed(4) + " " + mW.emissiveColor.b.toFixed(4));
        mW.ambientTexture && OW.push("  map_Ka " + mW.ambientTexture.name), mW.diffuseTexture && OW.push("  map_Kd " + mW.diffuseTexture.name), mW.specularTexture && OW.push("  map_Ks " + mW.specularTexture.name), mW.bumpTexture && OW.push("  map_bump -imfchan z " + mW.bumpTexture.name), mW.opacityTexture && OW.push("  map_d " + mW.opacityTexture.name);
        return OW.join("\n")
      }
    }
    var LW = 0,
      cW = OW(53812);
    class wW {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const WW in this.files) {
          const iW = this.files[WW],
            OW = new Blob([iW], {
              type: (0, cW.e)(WW)
            });
          EW.Tools.Download(OW, WW)
        }
      }
    }
    var tW = OW(42635),
      ZW = OW(42588),
      xW = OW(53801),
      lW = OW(42599),
      AW = OW(41359),
      bW = OW(38270),
      jW = OW(38369),
      UW = OW(38285);
    const kW = UW.HighestCommonFactor,
      sW = {
        ...UW,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: kW
      };
    var MW = OW(53995),
      KW = OW(42616),
      SW = OW(53763),
      YW = OW(53769),
      yW = OW(54011);
    (0, yW.RegisterDumpTools)();
    var TW = OW(41516),
      JW = OW(41519),
      hW = OW(39911),
      HW = OW(41628),
      nW = OW(41992),
      uW = OW(53986);
    let oW = 0;
    const dW = (WW, iW, OW, mW) => {
        if (!WW[OW]) {
          const EW = WW.useDelayedTextureLoading;
          WW.useDelayedTextureLoading = !1;
          const NW = WW._blockEntityCollection;
          WW._blockEntityCollection = !1;
          const PW = nW.h.CreateFromBase64String(iW, mW + oW++, WW, !0, !1, nW.h.BILINEAR_SAMPLINGMODE);
          WW._blockEntityCollection = NW;
          const LW = WW.VA().getLoadedTexturesCache(),
            cW = LW.indexOf(PW.getInternalTexture()); - 1 !== cW && LW.splice(cW, 1), PW.isRGBD = !0, PW.wrapU = nW.h.CLAMP_ADDRESSMODE, PW.wrapV = nW.h.CLAMP_ADDRESSMODE, WW[OW] = PW, WW.useDelayedTextureLoading = EW, uW.b.ExpandRGBDTexture(PW);
          const wW = WW.VA().DA.add((() => {
            PW.isRGBD = !0;
            const iW = WW.onBeforeRenderObservable.add((() => {
              PW.isReady() && (WW.onBeforeRenderObservable.remove(iW), uW.b.ExpandRGBDTexture(PW))
            }))
          }));
          WW.jD.add((() => {
            WW.VA().DA.remove(wW)
          }))
        }
        return WW[OW]
      },
      eW = WW => dW(WW, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      vW = WW => dW(WW, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      gW = WW => dW(WW, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var DW = OW(41612),
      VW = OW(38241),
      pW = OW(41660),
      fW = OW(41801),
      CW = OW(41877);
    class XW extends fW.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let BW = (() => {
      var WW, iW, OW, mW, EW, NW, PW, LW, cW, wW;
      let tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW = CW.e,
        MW = [],
        KW = [],
        SW = [],
        YW = [],
        yW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [];
      return WW = class extends sW {
        get useEnergyConservation() {
          return (0, TW.b)(this, iW, "f")
        }
        set useEnergyConservation(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, TW.b)(this, OW, "f")
        }
        set useSmithVisibilityHeightCorrelated(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get useSphericalHarmonics() {
          return (0, TW.b)(this, mW, "f")
        }
        set useSphericalHarmonics(WW) {
          (0, TW.d)(this, mW, WW, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, TW.b)(this, EW, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(WW) {
          (0, TW.d)(this, EW, WW, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, TW.b)(this, NW, "f")
        }
        set mixIblRadianceWithIrradiance(WW) {
          (0, TW.d)(this, NW, WW, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, TW.b)(this, PW, "f")
        }
        set useLegacySpecularEnergyConservation(WW) {
          (0, TW.d)(this, PW, WW, "f")
        }
        get baseDiffuseModel() {
          return (0, TW.b)(this, LW, "f")
        }
        set baseDiffuseModel(WW) {
          (0, TW.d)(this, LW, WW, "f")
        }
        get dielectricSpecularModel() {
          return (0, TW.b)(this, cW, "f")
        }
        set dielectricSpecularModel(WW) {
          (0, TW.d)(this, cW, WW, "f")
        }
        get conductorSpecularModel() {
          return (0, TW.b)(this, wW, "f")
        }
        set conductorSpecularModel(WW) {
          (0, TW.d)(this, wW, WW, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tW) {
          let ZW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tW, "PBRBRDF", 90, new XW, ZW), this._useEnergyConservation = WW.DEFAULT_USE_ENERGY_CONSERVATION, iW.set(this, (0, TW.g)(this, MW, WW.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, TW.g)(this, KW), WW.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), OW.set(this, (0, TW.g)(this, SW, WW.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, TW.g)(this, YW), WW.DEFAULT_USE_SPHERICAL_HARMONICS), mW.set(this, (0, TW.g)(this, yW, WW.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, TW.g)(this, hW), WW.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), EW.set(this, (0, TW.g)(this, HW, WW.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, TW.g)(this, nW), WW.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), NW.set(this, (0, TW.g)(this, uW, WW.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, TW.g)(this, oW), WW.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), PW.set(this, (0, TW.g)(this, dW, WW.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, TW.g)(this, eW), WW.DEFAULT_DIFFUSE_MODEL), LW.set(this, (0, TW.g)(this, vW, WW.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, TW.g)(this, gW), WW.DEFAULT_DIELECTRIC_SPECULAR_MODEL), cW.set(this, (0, TW.g)(this, DW, WW.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, TW.g)(this, VW), WW.DEFAULT_CONDUCTOR_SPECULAR_MODEL), wW.set(this, (0, TW.g)(this, pW, WW.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, TW.g)(this, fW), this._internalMarkAllSubMeshesAsMiscDirty = tW._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(WW) {
          WW.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, WW.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, WW.SPHERICAL_HARMONICS = this._useSphericalHarmonics, WW.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, WW.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, WW.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, WW.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, WW.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, WW.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, EW = new WeakMap, NW = new WeakMap, PW = new WeakMap, LW = new WeakMap, cW = new WeakMap, wW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(sW[Symbol.metadata] ?? null) : void 0;
        tW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], ZW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], xW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], lW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], AW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], bW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], jW = [(0, JW.M)("baseDiffuseModel"), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], UW = [(0, JW.M)("dielectricSpecularModel"), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], kW = [(0, JW.M)("conductorSpecularModel"), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], (0, TW.e)(WW, null, tW, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: WW => "useEnergyConservation" in WW,
            get: WW => WW.useEnergyConservation,
            set: (WW, iW) => {
              WW.useEnergyConservation = iW
            }
          },
          metadata: iW
        }, MW, KW), (0, TW.e)(WW, null, ZW, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSmithVisibilityHeightCorrelated" in WW,
            get: WW => WW.useSmithVisibilityHeightCorrelated,
            set: (WW, iW) => {
              WW.useSmithVisibilityHeightCorrelated = iW
            }
          },
          metadata: iW
        }, SW, YW), (0, TW.e)(WW, null, xW, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSphericalHarmonics" in WW,
            get: WW => WW.useSphericalHarmonics,
            set: (WW, iW) => {
              WW.useSphericalHarmonics = iW
            }
          },
          metadata: iW
        }, yW, hW), (0, TW.e)(WW, null, lW, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSpecularGlossinessInputEnergyConservation" in WW,
            get: WW => WW.useSpecularGlossinessInputEnergyConservation,
            set: (WW, iW) => {
              WW.useSpecularGlossinessInputEnergyConservation = iW
            }
          },
          metadata: iW
        }, HW, nW), (0, TW.e)(WW, null, AW, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: WW => "mixIblRadianceWithIrradiance" in WW,
            get: WW => WW.mixIblRadianceWithIrradiance,
            set: (WW, iW) => {
              WW.mixIblRadianceWithIrradiance = iW
            }
          },
          metadata: iW
        }, uW, oW), (0, TW.e)(WW, null, bW, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLegacySpecularEnergyConservation" in WW,
            get: WW => WW.useLegacySpecularEnergyConservation,
            set: (WW, iW) => {
              WW.useLegacySpecularEnergyConservation = iW
            }
          },
          metadata: iW
        }, dW, eW), (0, TW.e)(WW, null, jW, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseDiffuseModel" in WW,
            get: WW => WW.baseDiffuseModel,
            set: (WW, iW) => {
              WW.baseDiffuseModel = iW
            }
          },
          metadata: iW
        }, vW, gW), (0, TW.e)(WW, null, UW, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: WW => "dielectricSpecularModel" in WW,
            get: WW => WW.dielectricSpecularModel,
            set: (WW, iW) => {
              WW.dielectricSpecularModel = iW
            }
          },
          metadata: iW
        }, DW, VW), (0, TW.e)(WW, null, kW, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: WW => "conductorSpecularModel" in WW,
            get: WW => WW.conductorSpecularModel,
            set: (WW, iW) => {
              WW.conductorSpecularModel = iW
            }
          },
          metadata: iW
        }, pW, fW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW.DEFAULT_USE_ENERGY_CONSERVATION = !0, WW.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, WW.DEFAULT_USE_SPHERICAL_HARMONICS = !0, WW.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, WW.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, WW.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, WW.DEFAULT_DIFFUSE_MODEL = 0, WW.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, WW.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, WW
    })();
    var qW = OW(41792),
      RW = OW(38372),
      GW = OW(41795),
      IW = OW(41634),
      aW = OW(41861),
      rW = OW(41857),
      zW = OW(41867),
      FW = OW(41845);
    class QW extends fW.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Wi = (() => {
      var WW, iW, OW, mW, EW, NW, PW, LW, cW, wW;
      let tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW = CW.e,
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [],
        XW = [],
        BW = [],
        qW = [],
        GW = [],
        IW = [],
        aW = [],
        zW = [],
        Wi = [],
        ii = [],
        Oi = [],
        mi = [],
        Ei = [],
        Ni = [],
        Pi = [],
        Li = [];
      return WW = class extends yW {
        get isEnabled() {
          return (0, TW.b)(this, iW, "f")
        }
        set isEnabled(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        get indexOfRefraction() {
          return (0, TW.b)(this, OW, "f")
        }
        set indexOfRefraction(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get texture() {
          return (0, TW.b)(this, mW, "f")
        }
        set texture(WW) {
          (0, TW.d)(this, mW, WW, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, TW.b)(this, EW, "f")
        }
        set useRoughnessFromMainTexture(WW) {
          (0, TW.d)(this, EW, WW, "f")
        }
        get textureRoughness() {
          return (0, TW.b)(this, NW, "f")
        }
        set textureRoughness(WW) {
          (0, TW.d)(this, NW, WW, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, TW.b)(this, PW, "f")
        }
        set remapF0OnInterfaceChange(WW) {
          (0, TW.d)(this, PW, WW, "f")
        }
        get bumpTexture() {
          return (0, TW.b)(this, LW, "f")
        }
        set bumpTexture(WW) {
          (0, TW.d)(this, LW, WW, "f")
        }
        get isTintEnabled() {
          return (0, TW.b)(this, cW, "f")
        }
        set isTintEnabled(WW) {
          (0, TW.d)(this, cW, WW, "f")
        }
        get tintTexture() {
          return (0, TW.b)(this, wW, "f")
        }
        set tintTexture(WW) {
          (0, TW.d)(this, wW, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tW) {
          let ZW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tW, "PBRClearCoat", 100, new QW, ZW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, hW, !1)), this.intensity = ((0, TW.g)(this, HW), (0, TW.g)(this, nW, 1)), this.roughness = ((0, TW.g)(this, uW), (0, TW.g)(this, oW, 0)), this._indexOfRefraction = ((0, TW.g)(this, dW), WW._DefaultIndexOfRefraction), OW.set(this, (0, TW.g)(this, eW, WW._DefaultIndexOfRefraction)), this._texture = ((0, TW.g)(this, vW), null), mW.set(this, (0, TW.g)(this, gW, null)), this._useRoughnessFromMainTexture = ((0, TW.g)(this, DW), !0), EW.set(this, (0, TW.g)(this, VW, !0)), this._textureRoughness = ((0, TW.g)(this, pW), null), NW.set(this, (0, TW.g)(this, fW, null)), this._remapF0OnInterfaceChange = ((0, TW.g)(this, XW), !0), PW.set(this, (0, TW.g)(this, BW, !0)), this._bumpTexture = ((0, TW.g)(this, qW), null), LW.set(this, (0, TW.g)(this, GW, null)), this._isTintEnabled = ((0, TW.g)(this, IW), !1), cW.set(this, (0, TW.g)(this, aW, !1)), this.tintColor = ((0, TW.g)(this, zW), (0, TW.g)(this, Wi, RW.b.White())), this.tintColorAtDistance = ((0, TW.g)(this, ii), (0, TW.g)(this, Oi, 1)), this.tintThickness = ((0, TW.g)(this, mi), (0, TW.g)(this, Ei, 1)), this._tintTexture = ((0, TW.g)(this, Ni), null), wW.set(this, (0, TW.g)(this, Pi, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, TW.g)(this, Li), this._internalMarkAllSubMeshesAsTexturesDirty = tW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, iW, OW) {
          if (!this._isEnabled) return !0;
          const mW = this._material._disableBumpMap;
          if (WW._areTexturesDirty && iW.texturesEnabled) {
            if (this._texture && rW.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && rW.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (OW.getCaps().standardDerivatives && this._bumpTexture && rW.e.ClearCoatBumpTextureEnabled && !mW && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && rW.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(iW, OW) {
          this._isEnabled ? (iW.CLEARCOAT = !0, iW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, iW.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, iW._areTexturesDirty && OW.texturesEnabled && (this._texture && rW.e.ClearCoatTextureEnabled ? (0, FW.W)(this._texture, iW, "CLEARCOAT_TEXTURE") : iW.CLEARCOAT_TEXTURE = !1, this._textureRoughness && rW.e.ClearCoatTextureEnabled ? (0, FW.W)(this._textureRoughness, iW, "CLEARCOAT_TEXTURE_ROUGHNESS") : iW.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && rW.e.ClearCoatBumpTextureEnabled ? (0, FW.W)(this._bumpTexture, iW, "CLEARCOAT_BUMP") : iW.CLEARCOAT_BUMP = !1, iW.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === WW._DefaultIndexOfRefraction, this._isTintEnabled ? (iW.CLEARCOAT_TINT = !0, this._tintTexture && rW.e.ClearCoatTintTextureEnabled ? ((0, FW.W)(this._tintTexture, iW, "CLEARCOAT_TINT_TEXTURE"), iW.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : iW.CLEARCOAT_TINT_TEXTURE = !1) : (iW.CLEARCOAT_TINT = !1, iW.CLEARCOAT_TINT_TEXTURE = !1))) : (iW.CLEARCOAT = !1, iW.CLEARCOAT_TEXTURE = !1, iW.CLEARCOAT_TEXTURE_ROUGHNESS = !1, iW.CLEARCOAT_BUMP = !1, iW.CLEARCOAT_TINT = !1, iW.CLEARCOAT_TINT_TEXTURE = !1, iW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, iW.CLEARCOAT_DEFAULTIOR = !1, iW.CLEARCOAT_TEXTUREDIRECTUV = 0, iW.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, iW.CLEARCOAT_BUMPDIRECTUV = 0, iW.CLEARCOAT_REMAP_F0 = !1, iW.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, iW.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(WW, iW, OW, mW) {
          if (!this._isEnabled) return;
          const EW = mW.materialDefines,
            NW = this._material.isFrozen,
            PW = this._material._disableBumpMap,
            LW = this._material._invertNormalMapX,
            cW = this._material._invertNormalMapY;
          if (!WW.useUbo || !NW || !WW.isSync) {
            (this._texture || this._textureRoughness) && rW.e.ClearCoatTextureEnabled && (WW.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, FW.v)(this._texture, WW, "clearCoat"), this._textureRoughness && !EW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, FW.v)(this._textureRoughness, WW, "clearCoatRoughness")), this._bumpTexture && OW.getCaps().standardDerivatives && rW.e.ClearCoatTextureEnabled && !PW && (WW.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, FW.v)(this._bumpTexture, WW, "clearCoatBump"), iW._mirroredCameraPosition ? WW.updateFloat2("vClearCoatTangentSpaceParams", LW ? 1 : -1, cW ? 1 : -1) : WW.updateFloat2("vClearCoatTangentSpaceParams", LW ? -1 : 1, cW ? -1 : 1)), this._tintTexture && rW.e.ClearCoatTintTextureEnabled && (WW.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, FW.v)(this._tintTexture, WW, "clearCoatTint")), WW.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const mW = 1 - this._indexOfRefraction,
              NW = 1 + this._indexOfRefraction,
              wW = Math.pow(-mW / NW, 2),
              tW = 1 / this._indexOfRefraction;
            WW.updateFloat4("vClearCoatRefractionParams", wW, tW, mW, NW), this._isTintEnabled && (WW.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), WW.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          iW.texturesEnabled && (this._texture && rW.e.ClearCoatTextureEnabled && WW.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !EW.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && rW.e.ClearCoatTextureEnabled && WW.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && OW.getCaps().standardDerivatives && rW.e.ClearCoatBumpTextureEnabled && !PW && WW.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && rW.e.ClearCoatTintTextureEnabled && WW.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(WW) {
          return this._texture === WW || (this._textureRoughness === WW || (this._bumpTexture === WW || this._tintTexture === WW))
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture), this._textureRoughness && WW.push(this._textureRoughness), this._bumpTexture && WW.push(this._bumpTexture), this._tintTexture && WW.push(this._tintTexture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && WW.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && WW.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && WW.push(this._tintTexture)
        }
        dispose(WW) {
          WW && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(WW, iW, OW) {
          return WW.CLEARCOAT_BUMP && iW.addFallback(OW++, "CLEARCOAT_BUMP"), WW.CLEARCOAT_TINT && iW.addFallback(OW++, "CLEARCOAT_TINT"), WW.CLEARCOAT && iW.addFallback(OW++, "CLEARCOAT"), OW
        }
        getSamplers(WW) {
          WW.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, EW = new WeakMap, NW = new WeakMap, PW = new WeakMap, LW = new WeakMap, cW = new WeakMap, wW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(yW[Symbol.metadata] ?? null) : void 0;
        tW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ZW = [(0, JW.M)()], xW = [(0, JW.M)()], lW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, JW.n)()], KW = [(0, JW.M)()], SW = [(0, JW.M)()], YW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], (0, TW.e)(WW, null, tW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, iW) => {
              WW.isEnabled = iW
            }
          },
          metadata: iW
        }, hW, HW), (0, TW.e)(WW, null, lW, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "indexOfRefraction" in WW,
            get: WW => WW.indexOfRefraction,
            set: (WW, iW) => {
              WW.indexOfRefraction = iW
            }
          },
          metadata: iW
        }, eW, vW), (0, TW.e)(WW, null, AW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, iW) => {
              WW.texture = iW
            }
          },
          metadata: iW
        }, gW, DW), (0, TW.e)(WW, null, bW, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMainTexture" in WW,
            get: WW => WW.useRoughnessFromMainTexture,
            set: (WW, iW) => {
              WW.useRoughnessFromMainTexture = iW
            }
          },
          metadata: iW
        }, VW, pW), (0, TW.e)(WW, null, jW, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "textureRoughness" in WW,
            get: WW => WW.textureRoughness,
            set: (WW, iW) => {
              WW.textureRoughness = iW
            }
          },
          metadata: iW
        }, fW, XW), (0, TW.e)(WW, null, UW, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: WW => "remapF0OnInterfaceChange" in WW,
            get: WW => WW.remapF0OnInterfaceChange,
            set: (WW, iW) => {
              WW.remapF0OnInterfaceChange = iW
            }
          },
          metadata: iW
        }, BW, qW), (0, TW.e)(WW, null, kW, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "bumpTexture" in WW,
            get: WW => WW.bumpTexture,
            set: (WW, iW) => {
              WW.bumpTexture = iW
            }
          },
          metadata: iW
        }, GW, IW), (0, TW.e)(WW, null, sW, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isTintEnabled" in WW,
            get: WW => WW.isTintEnabled,
            set: (WW, iW) => {
              WW.isTintEnabled = iW
            }
          },
          metadata: iW
        }, aW, zW), (0, TW.e)(WW, null, YW, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintTexture" in WW,
            get: WW => WW.tintTexture,
            set: (WW, iW) => {
              WW.tintTexture = iW
            }
          },
          metadata: iW
        }, Pi, Li), (0, TW.e)(null, null, ZW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, iW) => {
              WW.intensity = iW
            }
          },
          metadata: iW
        }, nW, uW), (0, TW.e)(null, null, xW, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughness" in WW,
            get: WW => WW.roughness,
            set: (WW, iW) => {
              WW.roughness = iW
            }
          },
          metadata: iW
        }, oW, dW), (0, TW.e)(null, null, MW, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColor" in WW,
            get: WW => WW.tintColor,
            set: (WW, iW) => {
              WW.tintColor = iW
            }
          },
          metadata: iW
        }, Wi, ii), (0, TW.e)(null, null, KW, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColorAtDistance" in WW,
            get: WW => WW.tintColorAtDistance,
            set: (WW, iW) => {
              WW.tintColorAtDistance = iW
            }
          },
          metadata: iW
        }, Oi, mi), (0, TW.e)(null, null, SW, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintThickness" in WW,
            get: WW => WW.tintThickness,
            set: (WW, iW) => {
              WW.tintThickness = iW
            }
          },
          metadata: iW
        }, Ei, Ni), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW._DefaultIndexOfRefraction = 1.5, WW
    })();
    class ii extends fW.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Oi = (() => {
      var WW, iW, OW, mW;
      let EW, NW, PW, LW, cW, wW, tW, ZW = CW.e,
        xW = [],
        lW = [],
        AW = [],
        bW = [],
        jW = [],
        UW = [],
        kW = [],
        sW = [],
        MW = [],
        KW = [],
        SW = [],
        YW = [],
        yW = [],
        hW = [];
      return WW = class extends ZW {
        get isEnabled() {
          return (0, TW.b)(this, iW, "f")
        }
        set isEnabled(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        get texture() {
          return (0, TW.b)(this, OW, "f")
        }
        set texture(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get thicknessTexture() {
          return (0, TW.b)(this, mW, "f")
        }
        set thicknessTexture(WW) {
          (0, TW.d)(this, mW, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(EW) {
          let NW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(EW, "PBRIridescence", 110, new ii, NW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, xW, !1)), this.intensity = ((0, TW.g)(this, lW), (0, TW.g)(this, AW, 1)), this.minimumThickness = ((0, TW.g)(this, bW), (0, TW.g)(this, jW, WW._DefaultMinimumThickness)), this.maximumThickness = ((0, TW.g)(this, UW), (0, TW.g)(this, kW, WW._DefaultMaximumThickness)), this.indexOfRefraction = ((0, TW.g)(this, sW), (0, TW.g)(this, MW, WW._DefaultIndexOfRefraction)), this._texture = ((0, TW.g)(this, KW), null), OW.set(this, (0, TW.g)(this, SW, null)), this._thicknessTexture = ((0, TW.g)(this, YW), null), mW.set(this, (0, TW.g)(this, yW, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, TW.g)(this, hW), this._internalMarkAllSubMeshesAsTexturesDirty = EW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, iW) {
          if (!this._isEnabled) return !0;
          if (WW._areTexturesDirty && iW.texturesEnabled) {
            if (this._texture && rW.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && rW.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WW, iW) {
          this._isEnabled ? (WW.IRIDESCENCE = !0, WW._areTexturesDirty && iW.texturesEnabled && (this._texture && rW.e.IridescenceTextureEnabled ? (0, FW.W)(this._texture, WW, "IRIDESCENCE_TEXTURE") : WW.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && rW.e.IridescenceTextureEnabled ? (0, FW.W)(this._thicknessTexture, WW, "IRIDESCENCE_THICKNESS_TEXTURE") : WW.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (WW.IRIDESCENCE = !1, WW.IRIDESCENCE_TEXTURE = !1, WW.IRIDESCENCE_THICKNESS_TEXTURE = !1, WW.IRIDESCENCE_TEXTUREDIRECTUV = 0, WW.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(WW, iW) {
          if (!this._isEnabled) return;
          const OW = this._material.isFrozen;
          WW.useUbo && OW && WW.isSync || ((this._texture || this._thicknessTexture) && rW.e.IridescenceTextureEnabled && (WW.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, FW.v)(this._texture, WW, "iridescence"), this._thicknessTexture && (0, FW.v)(this._thicknessTexture, WW, "iridescenceThickness")), WW.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), iW.texturesEnabled && (this._texture && rW.e.IridescenceTextureEnabled && WW.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && rW.e.IridescenceTextureEnabled && WW.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(WW) {
          return this._texture === WW || this._thicknessTexture === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture), this._thicknessTexture && WW.push(this._thicknessTexture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && WW.push(this._thicknessTexture)
        }
        dispose(WW) {
          WW && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(WW, iW, OW) {
          return WW.IRIDESCENCE && iW.addFallback(OW++, "IRIDESCENCE"), OW
        }
        getSamplers(WW) {
          WW.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZW[Symbol.metadata] ?? null) : void 0;
        EW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, JW.M)()], PW = [(0, JW.M)()], LW = [(0, JW.M)()], cW = [(0, JW.M)()], wW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], (0, TW.e)(WW, null, EW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, iW) => {
              WW.isEnabled = iW
            }
          },
          metadata: iW
        }, xW, lW), (0, TW.e)(WW, null, wW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, iW) => {
              WW.texture = iW
            }
          },
          metadata: iW
        }, SW, YW), (0, TW.e)(WW, null, tW, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "thicknessTexture" in WW,
            get: WW => WW.thicknessTexture,
            set: (WW, iW) => {
              WW.thicknessTexture = iW
            }
          },
          metadata: iW
        }, yW, hW), (0, TW.e)(null, null, NW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, iW) => {
              WW.intensity = iW
            }
          },
          metadata: iW
        }, AW, bW), (0, TW.e)(null, null, PW, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "minimumThickness" in WW,
            get: WW => WW.minimumThickness,
            set: (WW, iW) => {
              WW.minimumThickness = iW
            }
          },
          metadata: iW
        }, jW, UW), (0, TW.e)(null, null, LW, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "maximumThickness" in WW,
            get: WW => WW.maximumThickness,
            set: (WW, iW) => {
              WW.maximumThickness = iW
            }
          },
          metadata: iW
        }, kW, sW), (0, TW.e)(null, null, cW, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "indexOfRefraction" in WW,
            get: WW => WW.indexOfRefraction,
            set: (WW, iW) => {
              WW.indexOfRefraction = iW
            }
          },
          metadata: iW
        }, MW, KW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW._DefaultMinimumThickness = 100, WW._DefaultMaximumThickness = 400, WW._DefaultIndexOfRefraction = 1.3, WW
    })();
    class mi extends fW.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Ei = (() => {
      var WW, iW, OW, mW;
      let EW, NW, PW, LW, cW, wW = CW.e,
        tW = [],
        ZW = [],
        xW = [],
        lW = [],
        AW = [],
        bW = [],
        jW = [],
        UW = [],
        kW = [],
        sW = [];
      return WW = class extends wW {
        get isEnabled() {
          return (0, TW.b)(this, iW, "f")
        }
        set isEnabled(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        set angle(WW) {
          this.direction.x = Math.cos(WW), this.direction.y = Math.sin(WW)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, TW.b)(this, OW, "f")
        }
        set texture(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get legacy() {
          return (0, TW.b)(this, mW, "f")
        }
        set legacy(WW) {
          (0, TW.d)(this, mW, WW, "f")
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
        constructor(WW) {
          let EW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WW, "PBRAnisotropic", 110, new mi, EW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, tW, !1)), this.intensity = ((0, TW.g)(this, ZW), (0, TW.g)(this, xW, 1)), this.direction = ((0, TW.g)(this, lW), (0, TW.g)(this, AW, new VW.m(1, 0))), this._texture = ((0, TW.g)(this, bW), null), OW.set(this, (0, TW.g)(this, jW, null)), this._legacy = ((0, TW.g)(this, UW), !1), mW.set(this, (0, TW.g)(this, kW, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, TW.g)(this, sW), this._internalMarkAllSubMeshesAsTexturesDirty = WW._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = WW._dirtyCallbacks[16]
        }
        isReadyForSubMesh(WW, iW) {
          return !this._isEnabled || !(WW._areTexturesDirty && iW.texturesEnabled && this._texture && rW.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(WW, iW, OW) {
          this._isEnabled ? (WW.ANISOTROPIC = this._isEnabled, this._isEnabled && !OW.isVerticesDataPresent(pW.k.TangentKind) && (WW._needUVs = !0, WW.MAINUV1 = !0), WW._areTexturesDirty && iW.texturesEnabled && (this._texture && rW.e.AnisotropicTextureEnabled ? (0, FW.W)(this._texture, WW, "ANISOTROPIC_TEXTURE") : WW.ANISOTROPIC_TEXTURE = !1), WW._areMiscDirty && (WW.ANISOTROPIC_LEGACY = this._legacy)) : (WW.ANISOTROPIC = !1, WW.ANISOTROPIC_TEXTURE = !1, WW.ANISOTROPIC_TEXTUREDIRECTUV = 0, WW.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(WW, iW) {
          if (!this._isEnabled) return;
          const OW = this._material.isFrozen;
          WW.useUbo && OW && WW.isSync || (this._texture && rW.e.AnisotropicTextureEnabled && (WW.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, FW.v)(this._texture, WW, "anisotropy")), WW.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), iW.texturesEnabled && this._texture && rW.e.AnisotropicTextureEnabled && WW.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(WW) {
          return this._texture === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture)
        }
        dispose(WW) {
          WW && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(WW, iW, OW) {
          return WW.ANISOTROPIC && iW.addFallback(OW++, "ANISOTROPIC"), OW
        }
        getSamplers(WW) {
          WW.push("anisotropySampler")
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
        parse(WW, iW, OW) {
          super.parse(WW, iW, OW), void 0 === WW.legacy && (this.legacy = !0)
        }
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(wW[Symbol.metadata] ?? null) : void 0;
        EW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], NW = [(0, JW.M)()], PW = [(0, JW.H)()], LW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], cW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], (0, TW.e)(WW, null, EW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, iW) => {
              WW.isEnabled = iW
            }
          },
          metadata: iW
        }, tW, ZW), (0, TW.e)(WW, null, LW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, iW) => {
              WW.texture = iW
            }
          },
          metadata: iW
        }, jW, UW), (0, TW.e)(WW, null, cW, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: WW => "legacy" in WW,
            get: WW => WW.legacy,
            set: (WW, iW) => {
              WW.legacy = iW
            }
          },
          metadata: iW
        }, kW, sW), (0, TW.e)(null, null, NW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, iW) => {
              WW.intensity = iW
            }
          },
          metadata: iW
        }, xW, lW), (0, TW.e)(null, null, PW, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: WW => "direction" in WW,
            get: WW => WW.direction,
            set: (WW, iW) => {
              WW.direction = iW
            }
          },
          metadata: iW
        }, AW, bW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW
    })();
    class Ni extends fW.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Pi = (() => {
      var WW, iW, OW, mW, EW, NW, PW, LW;
      let cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW = CW.e,
        kW = [],
        sW = [],
        MW = [],
        KW = [],
        SW = [],
        YW = [],
        yW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [];
      return WW = class extends UW {
        get isEnabled() {
          return (0, TW.b)(this, iW, "f")
        }
        set isEnabled(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, TW.b)(this, OW, "f")
        }
        set linkSheenWithAlbedo(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get texture() {
          return (0, TW.b)(this, mW, "f")
        }
        set texture(WW) {
          (0, TW.d)(this, mW, WW, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, TW.b)(this, EW, "f")
        }
        set useRoughnessFromMainTexture(WW) {
          (0, TW.d)(this, EW, WW, "f")
        }
        get roughness() {
          return (0, TW.b)(this, NW, "f")
        }
        set roughness(WW) {
          (0, TW.d)(this, NW, WW, "f")
        }
        get textureRoughness() {
          return (0, TW.b)(this, PW, "f")
        }
        set textureRoughness(WW) {
          (0, TW.d)(this, PW, WW, "f")
        }
        get albedoScaling() {
          return (0, TW.b)(this, LW, "f")
        }
        set albedoScaling(WW) {
          (0, TW.d)(this, LW, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(WW) {
          let cW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WW, "Sheen", 120, new Ni, cW), this._isEnabled = !1, iW.set(this, (0, TW.g)(this, kW, !1)), this._linkSheenWithAlbedo = ((0, TW.g)(this, sW), !1), OW.set(this, (0, TW.g)(this, MW, !1)), this.intensity = ((0, TW.g)(this, KW), (0, TW.g)(this, SW, 1)), this.color = ((0, TW.g)(this, YW), (0, TW.g)(this, yW, RW.b.White())), this._texture = ((0, TW.g)(this, hW), null), mW.set(this, (0, TW.g)(this, HW, null)), this._useRoughnessFromMainTexture = ((0, TW.g)(this, nW), !0), EW.set(this, (0, TW.g)(this, uW, !0)), this._roughness = ((0, TW.g)(this, oW), null), NW.set(this, (0, TW.g)(this, dW, null)), this._textureRoughness = ((0, TW.g)(this, eW), null), PW.set(this, (0, TW.g)(this, vW, null)), this._albedoScaling = ((0, TW.g)(this, gW), !1), LW.set(this, (0, TW.g)(this, DW, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, TW.g)(this, VW), this._internalMarkAllSubMeshesAsTexturesDirty = WW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, iW) {
          if (!this._isEnabled) return !0;
          if (WW._areTexturesDirty && iW.texturesEnabled) {
            if (this._texture && rW.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && rW.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WW, iW) {
          this._isEnabled ? (WW.SHEEN = !0, WW.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, WW.SHEEN_ROUGHNESS = null !== this._roughness, WW.SHEEN_ALBEDOSCALING = this._albedoScaling, WW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, WW._areTexturesDirty && iW.texturesEnabled && (this._texture && rW.e.SheenTextureEnabled ? ((0, FW.W)(this._texture, WW, "SHEEN_TEXTURE"), WW.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : WW.SHEEN_TEXTURE = !1, this._textureRoughness && rW.e.SheenTextureEnabled ? (0, FW.W)(this._textureRoughness, WW, "SHEEN_TEXTURE_ROUGHNESS") : WW.SHEEN_TEXTURE_ROUGHNESS = !1)) : (WW.SHEEN = !1, WW.SHEEN_TEXTURE = !1, WW.SHEEN_TEXTURE_ROUGHNESS = !1, WW.SHEEN_LINKWITHALBEDO = !1, WW.SHEEN_ROUGHNESS = !1, WW.SHEEN_ALBEDOSCALING = !1, WW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, WW.SHEEN_GAMMATEXTURE = !1, WW.SHEEN_TEXTUREDIRECTUV = 0, WW.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(WW, iW, OW, mW) {
          if (!this._isEnabled) return;
          const EW = mW.materialDefines,
            NW = this._material.isFrozen;
          WW.useUbo && NW && WW.isSync || ((this._texture || this._textureRoughness) && rW.e.SheenTextureEnabled && (WW.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, FW.v)(this._texture, WW, "sheen"), this._textureRoughness && !EW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, FW.v)(this._textureRoughness, WW, "sheenRoughness")), WW.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && WW.updateFloat("vSheenRoughness", this._roughness)), iW.texturesEnabled && (this._texture && rW.e.SheenTextureEnabled && WW.setTexture("sheenSampler", this._texture), this._textureRoughness && !EW.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && rW.e.SheenTextureEnabled && WW.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(WW) {
          return this._texture === WW || this._textureRoughness === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture), this._textureRoughness && WW.push(this._textureRoughness)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && WW.push(this._textureRoughness)
        }
        dispose(WW) {
          WW && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(WW, iW, OW) {
          return WW.SHEEN && iW.addFallback(OW++, "SHEEN"), OW
        }
        getSamplers(WW) {
          WW.push("sheenSampler", "sheenRoughnessSampler")
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
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, EW = new WeakMap, NW = new WeakMap, PW = new WeakMap, LW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(UW[Symbol.metadata] ?? null) : void 0;
        cW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, JW.M)()], ZW = [(0, JW.n)()], xW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], lW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], (0, TW.e)(WW, null, cW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, iW) => {
              WW.isEnabled = iW
            }
          },
          metadata: iW
        }, kW, sW), (0, TW.e)(WW, null, wW, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: WW => "linkSheenWithAlbedo" in WW,
            get: WW => WW.linkSheenWithAlbedo,
            set: (WW, iW) => {
              WW.linkSheenWithAlbedo = iW
            }
          },
          metadata: iW
        }, MW, KW), (0, TW.e)(WW, null, xW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, iW) => {
              WW.texture = iW
            }
          },
          metadata: iW
        }, HW, nW), (0, TW.e)(WW, null, lW, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMainTexture" in WW,
            get: WW => WW.useRoughnessFromMainTexture,
            set: (WW, iW) => {
              WW.useRoughnessFromMainTexture = iW
            }
          },
          metadata: iW
        }, uW, oW), (0, TW.e)(WW, null, AW, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughness" in WW,
            get: WW => WW.roughness,
            set: (WW, iW) => {
              WW.roughness = iW
            }
          },
          metadata: iW
        }, dW, eW), (0, TW.e)(WW, null, bW, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "textureRoughness" in WW,
            get: WW => WW.textureRoughness,
            set: (WW, iW) => {
              WW.textureRoughness = iW
            }
          },
          metadata: iW
        }, vW, gW), (0, TW.e)(WW, null, jW, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: WW => "albedoScaling" in WW,
            get: WW => WW.albedoScaling,
            set: (WW, iW) => {
              WW.albedoScaling = iW
            }
          },
          metadata: iW
        }, DW, VW), (0, TW.e)(null, null, tW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, iW) => {
              WW.intensity = iW
            }
          },
          metadata: iW
        }, SW, YW), (0, TW.e)(null, null, ZW, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: WW => "color" in WW,
            get: WW => WW.color,
            set: (WW, iW) => {
              WW.color = iW
            }
          },
          metadata: iW
        }, yW, hW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW
    })();
    class Li extends fW.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let ci = (() => {
      var WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW;
      let UW, kW, sW, MW, KW, SW, YW, yW, hW, HW, nW, uW, oW, dW, eW, vW, gW, DW, pW, fW, XW, BW, qW, GW, IW, aW, zW, QW, Wi, ii, Oi = CW.e,
        mi = [],
        Ei = [],
        Ni = [],
        Pi = [],
        ci = [],
        wi = [],
        ti = [],
        Zi = [],
        xi = [],
        li = [],
        Ai = [],
        bi = [],
        ji = [],
        Ui = [],
        ki = [],
        si = [],
        Mi = [],
        Ki = [],
        Si = [],
        Yi = [],
        yi = [],
        Ti = [],
        Ji = [],
        Hi = [],
        ni = [],
        ui = [],
        oi = [],
        di = [],
        ei = [],
        vi = [],
        gi = [],
        Di = [],
        Vi = [],
        fi = [],
        Ci = [],
        Xi = [],
        Bi = [],
        qi = [],
        Ri = [],
        Gi = [],
        Ii = [],
        ai = [],
        ri = [],
        zi = [],
        Fi = [],
        Qi = [],
        WO = [],
        iO = [],
        OO = [],
        mO = [],
        EO = [],
        NO = [],
        PO = [],
        LO = [],
        cO = [],
        wO = [],
        tO = [],
        ZO = [],
        xO = [],
        lO = [];
      return WW = class extends Oi {
        get isRefractionEnabled() {
          return (0, TW.b)(this, iW, "f")
        }
        set isRefractionEnabled(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        get isTranslucencyEnabled() {
          return (0, TW.b)(this, OW, "f")
        }
        set isTranslucencyEnabled(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get isDispersionEnabled() {
          return (0, TW.b)(this, mW, "f")
        }
        set isDispersionEnabled(WW) {
          (0, TW.d)(this, mW, WW, "f")
        }
        get isScatteringEnabled() {
          return (0, TW.b)(this, EW, "f")
        }
        set isScatteringEnabled(WW) {
          (0, TW.d)(this, EW, WW, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(WW) {
          this._scene.enableSubSurfaceForPrePass() && WW && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(WW))
        }
        get useAlbedoToTintRefraction() {
          return (0, TW.b)(this, NW, "f")
        }
        set useAlbedoToTintRefraction(WW) {
          (0, TW.d)(this, NW, WW, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, TW.b)(this, PW, "f")
        }
        set useAlbedoToTintTranslucency(WW) {
          (0, TW.d)(this, PW, WW, "f")
        }
        get thicknessTexture() {
          return (0, TW.b)(this, LW, "f")
        }
        set thicknessTexture(WW) {
          (0, TW.d)(this, LW, WW, "f")
        }
        get refractionTexture() {
          return (0, TW.b)(this, cW, "f")
        }
        set refractionTexture(WW) {
          (0, TW.d)(this, cW, WW, "f")
        }
        get indexOfRefraction() {
          return (0, TW.b)(this, wW, "f")
        }
        set indexOfRefraction(WW) {
          (0, TW.d)(this, wW, WW, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(WW) {
          const iW = WW >= 1 ? WW : -1;
          this._volumeIndexOfRefraction !== iW && (this._volumeIndexOfRefraction = iW, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, TW.b)(this, tW, "f")
        }
        set invertRefractionY(WW) {
          (0, TW.d)(this, tW, WW, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, TW.b)(this, ZW, "f")
        }
        set linkRefractionWithTransparency(WW) {
          (0, TW.d)(this, ZW, WW, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, TW.b)(this, xW, "f")
        }
        set useMaskFromThicknessTexture(WW) {
          (0, TW.d)(this, xW, WW, "f")
        }
        get refractionIntensityTexture() {
          return (0, TW.b)(this, lW, "f")
        }
        set refractionIntensityTexture(WW) {
          (0, TW.d)(this, lW, WW, "f")
        }
        get translucencyIntensityTexture() {
          return (0, TW.b)(this, AW, "f")
        }
        set translucencyIntensityTexture(WW) {
          (0, TW.d)(this, AW, WW, "f")
        }
        get translucencyColorTexture() {
          return (0, TW.b)(this, bW, "f")
        }
        set translucencyColorTexture(WW) {
          (0, TW.d)(this, bW, WW, "f")
        }
        get useGltfStyleTextures() {
          return (0, TW.b)(this, jW, "f")
        }
        set useGltfStyleTextures(WW) {
          (0, TW.d)(this, jW, WW, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(WW) {
          this.legacyTranslucency = WW
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
        constructor(UW) {
          let kW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UW, "PBRSubSurface", 130, new Li, kW), this._isRefractionEnabled = !1, iW.set(this, (0, TW.g)(this, mi, !1)), this._isTranslucencyEnabled = ((0, TW.g)(this, Ei), !1), OW.set(this, (0, TW.g)(this, Ni, !1)), this._isDispersionEnabled = ((0, TW.g)(this, Pi), !1), mW.set(this, (0, TW.g)(this, ci, !1)), this._isScatteringEnabled = ((0, TW.g)(this, wi), !1), EW.set(this, (0, TW.g)(this, ti, !1)), this._scatteringDiffusionProfileIndex = ((0, TW.g)(this, Zi), (0, TW.g)(this, xi, 0)), this.refractionIntensity = ((0, TW.g)(this, li), (0, TW.g)(this, Ai, 1)), this.translucencyIntensity = ((0, TW.g)(this, bi), (0, TW.g)(this, ji, 1)), this._useAlbedoToTintRefraction = ((0, TW.g)(this, Ui), !1), NW.set(this, (0, TW.g)(this, ki, !1)), this._useAlbedoToTintTranslucency = ((0, TW.g)(this, si), !1), PW.set(this, (0, TW.g)(this, Mi, !1)), this._thicknessTexture = ((0, TW.g)(this, Ki), null), LW.set(this, (0, TW.g)(this, Si, null)), this._refractionTexture = ((0, TW.g)(this, Yi), null), cW.set(this, (0, TW.g)(this, yi, null)), this._indexOfRefraction = ((0, TW.g)(this, Ti), 1.5), wW.set(this, (0, TW.g)(this, Ji, 1.5)), this._volumeIndexOfRefraction = ((0, TW.g)(this, Hi), (0, TW.g)(this, ni, -1)), this._invertRefractionY = ((0, TW.g)(this, ui), !1), tW.set(this, (0, TW.g)(this, oi, !1)), this._linkRefractionWithTransparency = ((0, TW.g)(this, di), !1), ZW.set(this, (0, TW.g)(this, ei, !1)), this.minimumThickness = ((0, TW.g)(this, vi), (0, TW.g)(this, gi, 0)), this.maximumThickness = ((0, TW.g)(this, Di), (0, TW.g)(this, Vi, 1)), this.useThicknessAsDepth = ((0, TW.g)(this, fi), (0, TW.g)(this, Ci, !1)), this.tintColor = ((0, TW.g)(this, Xi), (0, TW.g)(this, Bi, RW.b.White())), this.tintColorAtDistance = ((0, TW.g)(this, qi), (0, TW.g)(this, Ri, 1)), this.dispersion = ((0, TW.g)(this, Gi), (0, TW.g)(this, Ii, 0)), this.diffusionDistance = ((0, TW.g)(this, ai), (0, TW.g)(this, ri, RW.b.White())), this._useMaskFromThicknessTexture = ((0, TW.g)(this, zi), !1), xW.set(this, (0, TW.g)(this, Fi, !1)), this._refractionIntensityTexture = ((0, TW.g)(this, Qi), null), lW.set(this, (0, TW.g)(this, WO, null)), this._translucencyIntensityTexture = ((0, TW.g)(this, iO), null), AW.set(this, (0, TW.g)(this, OO, null)), this.translucencyColor = ((0, TW.g)(this, mO), (0, TW.g)(this, EO, null)), this._translucencyColorTexture = ((0, TW.g)(this, NO), null), bW.set(this, (0, TW.g)(this, PO, null)), this._useGltfStyleTextures = ((0, TW.g)(this, LO), !0), jW.set(this, (0, TW.g)(this, cO, !0)), this.applyAlbedoAfterSubSurface = ((0, TW.g)(this, wO), (0, TW.g)(this, tO, WW.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, TW.g)(this, ZO), (0, TW.g)(this, xO, WW.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, TW.g)(this, lO), this._scene = UW.bD(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = UW._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = UW._dirtyCallbacks[32]
        }
        isReadyForSubMesh(WW, iW) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (WW._areTexturesDirty && iW.texturesEnabled) {
            if (this._thicknessTexture && rW.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && rW.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && rW.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && rW.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const WW = this._getRefractionTexture(iW);
            if (WW && rW.e.RefractionTextureEnabled && !WW.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(WW, iW) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return WW.SUBSURFACE = !1, WW.SS_DISPERSION = !1, WW.SS_TRANSLUCENCY = !1, WW.SS_SCATTERING = !1, WW.SS_REFRACTION = !1, WW.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_THICKNESSANDMASK_TEXTURE = !1, WW.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, WW.SS_HAS_THICKNESS = !1, WW.SS_REFRACTIONINTENSITY_TEXTURE = !1, WW.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, WW.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, WW.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, WW.SS_REFRACTIONMAP_3D = !1, WW.SS_REFRACTIONMAP_OPPOSITEZ = !1, WW.SS_LODINREFRACTIONALPHA = !1, WW.SS_GAMMAREFRACTION = !1, WW.SS_RGBDREFRACTION = !1, WW.SS_LINEARSPECULARREFRACTION = !1, WW.SS_LINKREFRACTIONTOTRANSPARENCY = !1, WW.SS_ALBEDOFORREFRACTIONTINT = !1, WW.SS_ALBEDOFORTRANSLUCENCYTINT = !1, WW.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, WW.SS_USE_THICKNESS_AS_DEPTH = !1, WW.SS_USE_GLTF_TEXTURES = !1, WW.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, WW.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, WW.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(WW.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (WW._areTexturesDirty) {
            if (WW.SUBSURFACE = !0, WW.SS_DISPERSION = this._isDispersionEnabled, WW.SS_TRANSLUCENCY = this._isTranslucencyEnabled, WW.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, WW.SS_SCATTERING = this._isScatteringEnabled, WW.SS_THICKNESSANDMASK_TEXTURE = !1, WW.SS_REFRACTIONINTENSITY_TEXTURE = !1, WW.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, WW.SS_HAS_THICKNESS = !1, WW.SS_USE_GLTF_TEXTURES = !1, WW.SS_REFRACTION = !1, WW.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, WW.SS_REFRACTIONMAP_3D = !1, WW.SS_GAMMAREFRACTION = !1, WW.SS_RGBDREFRACTION = !1, WW.SS_LINEARSPECULARREFRACTION = !1, WW.SS_REFRACTIONMAP_OPPOSITEZ = !1, WW.SS_LODINREFRACTIONALPHA = !1, WW.SS_LINKREFRACTIONTOTRANSPARENCY = !1, WW.SS_ALBEDOFORREFRACTIONTINT = !1, WW.SS_ALBEDOFORTRANSLUCENCYTINT = !1, WW.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, WW.SS_USE_THICKNESS_AS_DEPTH = !1, WW.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, WW.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, WW._areTexturesDirty && iW.texturesEnabled && (this._thicknessTexture && rW.e.ThicknessTextureEnabled && (0, FW.W)(this._thicknessTexture, WW, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && rW.e.RefractionIntensityTextureEnabled && (0, FW.W)(this._refractionIntensityTexture, WW, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && rW.e.TranslucencyIntensityTextureEnabled && (0, FW.W)(this._translucencyIntensityTexture, WW, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && rW.e.TranslucencyColorTextureEnabled && ((0, FW.W)(this._translucencyColorTexture, WW, "SS_TRANSLUCENCYCOLOR_TEXTURE"), WW.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), WW.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, WW.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, WW.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, WW.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && iW.texturesEnabled) {
              const OW = this._getRefractionTexture(iW);
              OW && rW.e.RefractionTextureEnabled && (WW.SS_REFRACTION = !0, WW.SS_REFRACTIONMAP_3D = OW.isCube, WW.SS_GAMMAREFRACTION = OW.gammaSpace, WW.SS_RGBDREFRACTION = OW.isRGBD, WW.SS_LINEARSPECULARREFRACTION = OW.linearSpecularLOD, WW.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && OW.isCube ? !OW.invertZ : OW.invertZ, WW.SS_LODINREFRACTIONALPHA = OW.lodLevelInAlpha, WW.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, WW.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, WW.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = OW.isCube && OW.boundingBoxSize, WW.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (WW.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(WW, iW, OW, mW) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) WW.updateFloat2("vThicknessParam", 0, 0);
            else {
              mW.getRenderingMesh().getWorldMatrix().decompose(VW.l.fA[0]);
              const iW = Math.max(Math.abs(VW.l.fA[0].x), Math.abs(VW.l.fA[0].y), Math.abs(VW.l.fA[0].z));
              WW.updateFloat2("vThicknessParam", this.minimumThickness * iW, (this.maximumThickness - this.minimumThickness) * iW)
            }
        }
        bindForSubMesh(WW, iW, OW, mW) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const EW = mW.materialDefines,
            NW = this._material.isFrozen,
            PW = this._material.realTimeFiltering,
            LW = EW.LODBASEDMICROSFURACE,
            cW = this._getRefractionTexture(iW);
          if (!WW.useUbo || !NW || !WW.isSync) {
            if (this._thicknessTexture && rW.e.ThicknessTextureEnabled && (WW.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, FW.v)(this._thicknessTexture, WW, "thickness")), this._refractionIntensityTexture && rW.e.RefractionIntensityTextureEnabled && EW.SS_REFRACTIONINTENSITY_TEXTURE && (WW.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, FW.v)(this._refractionIntensityTexture, WW, "refractionIntensity")), this._translucencyColorTexture && rW.e.TranslucencyColorTextureEnabled && EW.SS_TRANSLUCENCYCOLOR_TEXTURE && (WW.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, FW.v)(this._translucencyColorTexture, WW, "translucencyColor")), this._translucencyIntensityTexture && rW.e.TranslucencyIntensityTextureEnabled && EW.SS_TRANSLUCENCYINTENSITY_TEXTURE && (WW.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, FW.v)(this._translucencyIntensityTexture, WW, "translucencyIntensity")), cW && rW.e.RefractionTextureEnabled) {
              WW.tWW("refractionMatrix", cW.getRefractionTextureMatrix());
              let iW = 1;
              cW.isCube || cW.depth && (iW = cW.depth);
              const OW = cW.getSize().width,
                mW = this.volumeIndexOfRefraction;
              if (WW.updateFloat4("vRefractionInfos", cW.level, 1 / mW, iW, this._invertRefractionY ? -1 : 1), WW.updateFloat4("vRefractionMicrosurfaceInfos", OW, cW.lodGenerationScale, cW.lodGenerationOffset, 1 / this.indexOfRefraction), PW && WW.updateFloat2("vRefractionFilteringInfo", OW, Math.log2(OW)), cW.boundingBoxSize) {
                const iW = cW;
                WW.updateVector3("vRefractionPosition", iW.boundingBoxPosition), WW.updateVector3("vRefractionSize", iW.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && WW.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), WW.updateColor3("vDiffusionDistance", this.diffusionDistance), WW.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), WW.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), WW.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), WW.updateFloat("dispersion", this.dispersion)
          }
          iW.texturesEnabled && (this._thicknessTexture && rW.e.ThicknessTextureEnabled && WW.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && rW.e.RefractionIntensityTextureEnabled && EW.SS_REFRACTIONINTENSITY_TEXTURE && WW.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && rW.e.TranslucencyIntensityTextureEnabled && EW.SS_TRANSLUCENCYINTENSITY_TEXTURE && WW.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && rW.e.TranslucencyColorTextureEnabled && EW.SS_TRANSLUCENCYCOLOR_TEXTURE && WW.setTexture("translucencyColorSampler", this._translucencyColorTexture), cW && rW.e.RefractionTextureEnabled && (LW ? WW.setTexture("refractionSampler", cW) : (WW.setTexture("refractionSampler", cW._lodTextureMid || cW), WW.setTexture("refractionSamplerLow", cW._lodTextureLow || cW), WW.setTexture("refractionSamplerHigh", cW._lodTextureHigh || cW))))
        }
        _getRefractionTexture(WW) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? WW.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(WW) {
          rW.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && WW.push(this._refractionTexture)
        }
        hasTexture(WW) {
          return this._thicknessTexture === WW || (this._refractionTexture === WW || (this._refractionIntensityTexture === WW || (this._translucencyIntensityTexture === WW || this._translucencyColorTexture === WW)))
        }
        hasRenderTargetTextures() {
          return !!(rW.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(WW) {
          this._thicknessTexture && WW.push(this._thicknessTexture), this._refractionTexture && WW.push(this._refractionTexture), this._refractionIntensityTexture && WW.push(this._refractionIntensityTexture), this._translucencyColorTexture && WW.push(this._translucencyColorTexture), this._translucencyIntensityTexture && WW.push(this._translucencyIntensityTexture)
        }
        getAnimatables(WW) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && WW.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && WW.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && WW.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && WW.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && WW.push(this._translucencyIntensityTexture)
        }
        dispose(WW) {
          WW && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(WW, iW, OW) {
          return WW.SS_SCATTERING && iW.addFallback(OW++, "SS_SCATTERING"), WW.SS_TRANSLUCENCY && iW.addFallback(OW++, "SS_TRANSLUCENCY"), OW
        }
        getSamplers(WW) {
          WW.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, EW = new WeakMap, NW = new WeakMap, PW = new WeakMap, LW = new WeakMap, cW = new WeakMap, wW = new WeakMap, tW = new WeakMap, ZW = new WeakMap, xW = new WeakMap, lW = new WeakMap, AW = new WeakMap, bW = new WeakMap, jW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(Oi[Symbol.metadata] ?? null) : void 0;
        UW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], sW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], MW = [(0, JW.M)(), (0, JW.h)("_markScenePrePassDirty")], KW = [(0, JW.M)()], SW = [(0, JW.M)()], YW = [(0, JW.M)()], yW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], hW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, JW.M)()], dW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], vW = [(0, JW.M)()], gW = [(0, JW.M)()], DW = [(0, JW.M)()], pW = [(0, JW.n)()], fW = [(0, JW.M)()], XW = [(0, JW.M)()], BW = [(0, JW.n)()], qW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], GW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], IW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], aW = [(0, JW.n)()], zW = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Wi = [(0, JW.M)()], ii = [(0, JW.M)()], (0, TW.e)(WW, null, UW, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isRefractionEnabled" in WW,
            get: WW => WW.isRefractionEnabled,
            set: (WW, iW) => {
              WW.isRefractionEnabled = iW
            }
          },
          metadata: iW
        }, mi, Ei), (0, TW.e)(WW, null, kW, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isTranslucencyEnabled" in WW,
            get: WW => WW.isTranslucencyEnabled,
            set: (WW, iW) => {
              WW.isTranslucencyEnabled = iW
            }
          },
          metadata: iW
        }, Ni, Pi), (0, TW.e)(WW, null, sW, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isDispersionEnabled" in WW,
            get: WW => WW.isDispersionEnabled,
            set: (WW, iW) => {
              WW.isDispersionEnabled = iW
            }
          },
          metadata: iW
        }, ci, wi), (0, TW.e)(WW, null, MW, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isScatteringEnabled" in WW,
            get: WW => WW.isScatteringEnabled,
            set: (WW, iW) => {
              WW.isScatteringEnabled = iW
            }
          },
          metadata: iW
        }, ti, Zi), (0, TW.e)(WW, null, yW, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlbedoToTintRefraction" in WW,
            get: WW => WW.useAlbedoToTintRefraction,
            set: (WW, iW) => {
              WW.useAlbedoToTintRefraction = iW
            }
          },
          metadata: iW
        }, ki, si), (0, TW.e)(WW, null, hW, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlbedoToTintTranslucency" in WW,
            get: WW => WW.useAlbedoToTintTranslucency,
            set: (WW, iW) => {
              WW.useAlbedoToTintTranslucency = iW
            }
          },
          metadata: iW
        }, Mi, Ki), (0, TW.e)(WW, null, HW, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "thicknessTexture" in WW,
            get: WW => WW.thicknessTexture,
            set: (WW, iW) => {
              WW.thicknessTexture = iW
            }
          },
          metadata: iW
        }, Si, Yi), (0, TW.e)(WW, null, nW, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "refractionTexture" in WW,
            get: WW => WW.refractionTexture,
            set: (WW, iW) => {
              WW.refractionTexture = iW
            }
          },
          metadata: iW
        }, yi, Ti), (0, TW.e)(WW, null, uW, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "indexOfRefraction" in WW,
            get: WW => WW.indexOfRefraction,
            set: (WW, iW) => {
              WW.indexOfRefraction = iW
            }
          },
          metadata: iW
        }, Ji, Hi), (0, TW.e)(WW, null, dW, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertRefractionY" in WW,
            get: WW => WW.invertRefractionY,
            set: (WW, iW) => {
              WW.invertRefractionY = iW
            }
          },
          metadata: iW
        }, oi, di), (0, TW.e)(WW, null, eW, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: WW => "linkRefractionWithTransparency" in WW,
            get: WW => WW.linkRefractionWithTransparency,
            set: (WW, iW) => {
              WW.linkRefractionWithTransparency = iW
            }
          },
          metadata: iW
        }, ei, vi), (0, TW.e)(WW, null, qW, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useMaskFromThicknessTexture" in WW,
            get: WW => WW.useMaskFromThicknessTexture,
            set: (WW, iW) => {
              WW.useMaskFromThicknessTexture = iW
            }
          },
          metadata: iW
        }, Fi, Qi), (0, TW.e)(WW, null, GW, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "refractionIntensityTexture" in WW,
            get: WW => WW.refractionIntensityTexture,
            set: (WW, iW) => {
              WW.refractionIntensityTexture = iW
            }
          },
          metadata: iW
        }, WO, iO), (0, TW.e)(WW, null, IW, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyIntensityTexture" in WW,
            get: WW => WW.translucencyIntensityTexture,
            set: (WW, iW) => {
              WW.translucencyIntensityTexture = iW
            }
          },
          metadata: iW
        }, OO, mO), (0, TW.e)(WW, null, zW, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyColorTexture" in WW,
            get: WW => WW.translucencyColorTexture,
            set: (WW, iW) => {
              WW.translucencyColorTexture = iW
            }
          },
          metadata: iW
        }, PO, LO), (0, TW.e)(WW, null, QW, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: WW => "useGltfStyleTextures" in WW,
            get: WW => WW.useGltfStyleTextures,
            set: (WW, iW) => {
              WW.useGltfStyleTextures = iW
            }
          },
          metadata: iW
        }, cO, wO), (0, TW.e)(null, null, KW, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: WW => "_scatteringDiffusionProfileIndex" in WW,
            get: WW => WW._scatteringDiffusionProfileIndex,
            set: (WW, iW) => {
              WW._scatteringDiffusionProfileIndex = iW
            }
          },
          metadata: iW
        }, xi, li), (0, TW.e)(null, null, SW, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "refractionIntensity" in WW,
            get: WW => WW.refractionIntensity,
            set: (WW, iW) => {
              WW.refractionIntensity = iW
            }
          },
          metadata: iW
        }, Ai, bi), (0, TW.e)(null, null, YW, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyIntensity" in WW,
            get: WW => WW.translucencyIntensity,
            set: (WW, iW) => {
              WW.translucencyIntensity = iW
            }
          },
          metadata: iW
        }, ji, Ui), (0, TW.e)(null, null, oW, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: WW => "_volumeIndexOfRefraction" in WW,
            get: WW => WW._volumeIndexOfRefraction,
            set: (WW, iW) => {
              WW._volumeIndexOfRefraction = iW
            }
          },
          metadata: iW
        }, ni, ui), (0, TW.e)(null, null, vW, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "minimumThickness" in WW,
            get: WW => WW.minimumThickness,
            set: (WW, iW) => {
              WW.minimumThickness = iW
            }
          },
          metadata: iW
        }, gi, Di), (0, TW.e)(null, null, gW, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: WW => "maximumThickness" in WW,
            get: WW => WW.maximumThickness,
            set: (WW, iW) => {
              WW.maximumThickness = iW
            }
          },
          metadata: iW
        }, Vi, fi), (0, TW.e)(null, null, DW, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: WW => "useThicknessAsDepth" in WW,
            get: WW => WW.useThicknessAsDepth,
            set: (WW, iW) => {
              WW.useThicknessAsDepth = iW
            }
          },
          metadata: iW
        }, Ci, Xi), (0, TW.e)(null, null, pW, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColor" in WW,
            get: WW => WW.tintColor,
            set: (WW, iW) => {
              WW.tintColor = iW
            }
          },
          metadata: iW
        }, Bi, qi), (0, TW.e)(null, null, fW, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "tintColorAtDistance" in WW,
            get: WW => WW.tintColorAtDistance,
            set: (WW, iW) => {
              WW.tintColorAtDistance = iW
            }
          },
          metadata: iW
        }, Ri, Gi), (0, TW.e)(null, null, XW, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: WW => "dispersion" in WW,
            get: WW => WW.dispersion,
            set: (WW, iW) => {
              WW.dispersion = iW
            }
          },
          metadata: iW
        }, Ii, ai), (0, TW.e)(null, null, BW, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: WW => "diffusionDistance" in WW,
            get: WW => WW.diffusionDistance,
            set: (WW, iW) => {
              WW.diffusionDistance = iW
            }
          },
          metadata: iW
        }, ri, zi), (0, TW.e)(null, null, aW, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "translucencyColor" in WW,
            get: WW => WW.translucencyColor,
            set: (WW, iW) => {
              WW.translucencyColor = iW
            }
          },
          metadata: iW
        }, EO, NO), (0, TW.e)(null, null, Wi, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: WW => "applyAlbedoAfterSubSurface" in WW,
            get: WW => WW.applyAlbedoAfterSubSurface,
            set: (WW, iW) => {
              WW.applyAlbedoAfterSubSurface = iW
            }
          },
          metadata: iW
        }, tO, ZO), (0, TW.e)(null, null, ii, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: WW => "legacyTranslucency" in WW,
            get: WW => WW.legacyTranslucency,
            set: (WW, iW) => {
              WW.legacyTranslucency = iW
            }
          },
          metadata: iW
        }, xO, lO), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, WW.DEFAULT_LEGACY_TRANSLUCENCY = !1, WW
    })();
    var wi = OW(41873),
      ti = OW(41853),
      Zi = OW(41886),
      xi = OW(41889),
      li = OW(41892),
      Ai = OW(41895),
      bi = OW(41904),
      ji = OW(41912),
      Ui = OW(41415);
    const ki = {
      effect: null,
      subMesh: null
    };
    class si extends((0, bi.b)((0, Ai.d)(fW.c))) {}
    class Mi extends((0, GW.f)(si)) {
      constructor(WW) {
        super(WW), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Ki extends((0, ji.b)(aW.e)) {}
    let Si = (() => {
      var WW, iW;
      let mW, EW = Ki,
        PW = [],
        LW = [];
      return WW = class extends EW {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(WW) {
          this._realTimeFiltering = WW, this.xOW(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(WW) {
          this._realTimeFilteringQuality = WW, this.xOW(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, TW.b)(this, iW, "f")
        }
        set debugMode(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        constructor(OW, mW) {
          super(OW, mW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || WW.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new VW.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = RW.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new RW.b(0, 0, 0), this._albedoColor = new RW.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new RW.b(1, 1, 1), this._reflectionColor = new RW.b(1, 1, 1), this._emissiveColor = new RW.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = WW.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new HW.g(16), this._globalAmbientColor = new RW.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, iW.set(this, (0, TW.g)(this, PW, 0)), this.debugLimit = ((0, TW.g)(this, LW), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new BW(this), this.clearCoat = new Wi(this), this.iridescence = new Oi(this), this.anisotropy = new Ei(this), this.sheen = new Pi(this), this.subSurface = new ci(this), this.detailMap = new wi.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rW.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = eW(this.bD()), this.prePassConfiguration = new qW.e
        }
        get hasRenderTargetTextures() {
          return !!(rW.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === WW.PBRMATERIAL_OPAQUE || this._transparencyMode === WW.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === WW.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== WW.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(WW, iW, OW) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const mW = iW._drawWrapper;
          if (mW.effect && this.isFrozen && mW._wasPreviouslyReady && mW._wasPreviouslyUsingInstances === OW) return !0;
          iW.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), iW.materialDefines = new Mi(this._eventInfo.defineNames));
          const EW = iW.materialDefines;
          if (this._isReadyForSubMesh(iW)) return !0;
          const NW = this.bD(),
            PW = NW.VA();
          if (EW._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, NW.texturesEnabled)) {
            if (this._albedoTexture && rW.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && rW.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && rW.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && rW.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && rW.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const WW = this._getReflectionTexture();
            if (WW && rW.e.ReflectionTextureEnabled) {
              if (!WW.isReadyOrNotBlocking()) return !1;
              if (WW.irradianceTexture) {
                if (!WW.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!WW.sphericalPolynomial && WW.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && rW.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && rW.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (rW.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (PW.getCaps().standardDerivatives && this._bumpTexture && rW.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && rW.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = EW, this._eventInfo.subMesh = iW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (EW._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (EW.AREALIGHTUSED || EW.CLUSTLIGHT_BATCH)
            for (let ZW = 0; ZW < WW.lightSources.length; ZW++)
              if (!WW.lightSources[ZW]._isReady()) return !1;
          if (PW.getCaps().standardDerivatives || WW.isVerticesDataPresent(pW.k.NormalKind) || (WW.createNormals(!0), hW.b.Warn("PBRMaterial: Normals have been created for the mesh: " + WW.name)), !(0, FW.c)(NW, WW, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const LW = iW.effect,
            cW = EW._areLightsDisposed,
            wW = this._prepareEffect(WW, iW.getRenderingMesh(), EW, this.onCompiled, this.onError, OW, null);
          let tW = !1;
          if (wW)
            if (this._onEffectCreatedObservable && (ki.effect = wW, ki.subMesh = iW, this._onEffectCreatedObservable.notifyObservers(ki)), this.allowShaderHotSwapping && LW && !wW.isReady()) {
              if (EW.markAsUnprocessed(), tW = this.isFrozen, cW) return EW._areLightsDisposed = !0, !1
            } else NW.resetCachedMaterial(), iW.setEffect(wW, EW, this._materialContext);
          return !(!iW.effect || !iW.effect.isReady()) && (EW._renderId = NW.getRenderId(), mW._wasPreviouslyReady = !tW, mW._wasPreviouslyUsingInstances = !!OW, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(iW, OW, mW) {
          let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(iW, OW, mW, PW, LW), !mW.isDirty) return null;
          mW.markAsProcessed();
          const cW = this.bD().VA(),
            wW = new zW.e;
          let tW = 0;
          mW.USESPHERICALINVERTEX && wW.addFallback(tW++, "USESPHERICALINVERTEX"), mW.FOG && wW.addFallback(tW, "FOG"), mW.SPECULARAA && wW.addFallback(tW, "SPECULARAA"), mW.POINTSIZE && wW.addFallback(tW, "POINTSIZE"), mW.LOGARITHMICDEPTH && wW.addFallback(tW, "LOGARITHMICDEPTH"), mW.PARALLAX && wW.addFallback(tW, "PARALLAX"), mW.PARALLAX_RHS && wW.addFallback(tW, "PARALLAX_RHS"), mW.PARALLAXOCCLUSION && wW.addFallback(tW++, "PARALLAXOCCLUSION"), mW.ENVIRONMENTBRDF && wW.addFallback(tW++, "ENVIRONMENTBRDF"), mW.TANGENT && wW.addFallback(tW++, "TANGENT"), mW.BUMP && wW.addFallback(tW++, "BUMP"), tW = (0, FW.w)(mW, wW, this._maxSimultaneousLights, tW), mW.SPECULARTERM && wW.addFallback(tW++, "SPECULARTERM"), mW.USESPHERICALFROMREFLECTIONMAP && wW.addFallback(tW++, "USESPHERICALFROMREFLECTIONMAP"), mW.USEIRRADIANCEMAP && wW.addFallback(tW++, "USEIRRADIANCEMAP"), mW.LIGHTMAP && wW.addFallback(tW++, "LIGHTMAP"), mW.NORMAL && wW.addFallback(tW++, "NORMAL"), mW.AMBIENT && wW.addFallback(tW++, "AMBIENT"), mW.EMISSIVE && wW.addFallback(tW++, "EMISSIVE"), mW.VERTEXCOLOR && wW.addFallback(tW++, "VERTEXCOLOR"), mW.MORPHTARGETS && wW.addFallback(tW++, "MORPHTARGETS"), mW.MULTIVIEW && wW.addFallback(0, "MULTIVIEW");
          const ZW = [pW.k.PositionKind];
          mW.NORMAL && ZW.push(pW.k.NormalKind), mW.TANGENT && ZW.push(pW.k.TangentKind);
          for (let WW = 1; WW <= 6; ++WW) mW["UV" + WW] && ZW.push(`uv${1===WW?"":WW}`);
          mW.VERTEXCOLOR && ZW.push(pW.k.ColorKind), (0, FW.B)(ZW, iW, mW, wW), (0, FW.F)(ZW, mW), (0, FW.I)(ZW, iW, mW), (0, FW.z)(ZW, iW, mW);
          let xW = "pbr";
          const lW = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            AW = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, FW.jb)(lW, AW, !0);
          const bW = ["Material", "Scene", "Mesh"],
            jW = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: mW.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = wW, this._eventInfo.fallbackRank = tW, this._eventInfo.defines = mW, this._eventInfo.uniforms = lW, this._eventInfo.attributes = ZW, this._eventInfo.samplers = AW, this._eventInfo.uniformBuffersNames = bW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = iW, this._eventInfo.indexParameters = jW, this._callbackPluginEventGeneric(128, this._eventInfo), li.d.AddUniformsAndSamplers(lW, AW), qW.e.AddUniforms(lW), qW.e.AddSamplers(AW), (0, ti.d)(lW), this._useVertexPulling) {
            const WW = OW?.geometry;
            WW && (this._vertexPullingMetadata = (0, Zi.c)(WW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, iW) => {
              lW.push(`vp_${iW}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          IW.e && (IW.e.PrepareUniforms(lW, mW), IW.e.PrepareSamplers(AW, mW)), (0, FW.mb)({
            uniformsNames: lW,
            uniformBuffersNames: bW,
            samplers: AW,
            defines: mW,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const UW = {};
          this.customShaderNameResolve && (xW = this.customShaderNameResolve(xW, lW, bW, AW, mW, ZW, UW));
          const kW = mW.toString(),
            sW = cW.createEffect(xW, {
              attributes: ZW,
              uniformsNames: lW,
              uniformBuffersNames: bW,
              samplers: AW,
              defines: kW,
              fallbacks: wW,
              onCompiled: EW,
              onError: NW,
              indexParameters: jW,
              processFinalCode: UW.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: mW.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, cW);
          return this._eventInfo.customCode = void 0, sW
        }
        _prepareDefines(iW, OW, mW) {
          let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const PW = OW.hasThinInstances,
            LW = this.bD(),
            cW = LW.VA();
          (0, FW.U)(LW, iW, mW, !0, this._maxSimultaneousLights, this._disableLighting), mW._needNormals = !0, (0, FW.$)(LW, mW);
          const wW = this.needAlphaBlendingForMesh(iW) && this.bD().useOrderIndependentTransparency;
          if ((0, FW.hb)(LW, mW, this.canRenderToMRT && !wW), (0, FW.db)(LW, mW, wW), li.d.PrepareDefines(cW.currentRenderPassId, iW, mW), mW.METALLICWORKFLOW = this.isMetallicWorkflow(), mW._areTexturesDirty) {
            mW._needUVs = !1;
            for (let WW = 1; WW <= 6; ++WW) mW["MAINUV" + WW] = !1;
            if (LW.texturesEnabled) {
              mW.ALBEDODIRECTUV = 0, mW.BASE_WEIGHTDIRECTUV = 0, mW.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, mW.AMBIENTDIRECTUV = 0, mW.OPACITYDIRECTUV = 0, mW.EMISSIVEDIRECTUV = 0, mW.REFLECTIVITYDIRECTUV = 0, mW.MICROSURFACEMAPDIRECTUV = 0, mW.METALLIC_REFLECTANCEDIRECTUV = 0, mW.REFLECTANCEDIRECTUV = 0, mW.BUMPDIRECTUV = 0, mW.LIGHTMAPDIRECTUV = 0, cW.getCaps().textureLOD && (mW.LODBASEDMICROSFURACE = !0), this._albedoTexture && rW.e.DiffuseTextureEnabled ? ((0, FW.W)(this._albedoTexture, mW, "ALBEDO"), mW.GAMMAALBEDO = this._albedoTexture.gammaSpace) : mW.ALBEDO = !1, this._baseWeightTexture && rW.e.BaseWeightTextureEnabled ? (0, FW.W)(this._baseWeightTexture, mW, "BASE_WEIGHT") : mW.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && rW.e.BaseDiffuseRoughnessTextureEnabled ? (0, FW.W)(this._baseDiffuseRoughnessTexture, mW, "BASE_DIFFUSE_ROUGHNESS") : mW.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && rW.e.AmbientTextureEnabled ? ((0, FW.W)(this._ambientTexture, mW, "AMBIENT"), mW.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : mW.AMBIENT = !1, this._opacityTexture && rW.e.OpacityTextureEnabled ? ((0, FW.W)(this._opacityTexture, mW, "OPACITY"), mW.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : mW.OPACITY = !1;
              const WW = this._getReflectionTexture(),
                iW = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || cW.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, FW.R)(LW, WW, mW, this.realTimeFiltering, this.realTimeFilteringQuality, !iW), this._lightmapTexture && rW.e.LightmapTextureEnabled ? ((0, FW.W)(this._lightmapTexture, mW, "LIGHTMAP"), mW.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, mW.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, mW.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : mW.LIGHTMAP = !1, this._emissiveTexture && rW.e.EmissiveTextureEnabled ? ((0, FW.W)(this._emissiveTexture, mW, "EMISSIVE"), mW.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : mW.EMISSIVE = !1, rW.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, FW.W)(this._metallicTexture, mW, "REFLECTIVITY"), mW.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, mW.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, mW.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, mW.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, mW.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, FW.W)(this._reflectivityTexture, mW, "REFLECTIVITY"), mW.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, mW.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, mW.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : mW.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (mW.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, FW.W)(this._metallicReflectanceTexture, mW, "METALLIC_REFLECTANCE"), mW.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : mW.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, FW.W)(this._reflectanceTexture, mW, "REFLECTANCE"), mW.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : mW.REFLECTANCE = !1) : (mW.METALLIC_REFLECTANCE = !1, mW.REFLECTANCE = !1), this._microSurfaceTexture ? (0, FW.W)(this._microSurfaceTexture, mW, "MICROSURFACEMAP") : mW.MICROSURFACEMAP = !1) : (mW.REFLECTIVITY = !1, mW.MICROSURFACEMAP = !1), cW.getCaps().standardDerivatives && this._bumpTexture && rW.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, FW.W)(this._bumpTexture, mW, "BUMP"), this._useParallax && this._albedoTexture && rW.e.DiffuseTextureEnabled ? (mW.PARALLAX = !0, mW.PARALLAX_RHS = LW.useRightHandedSystem, mW.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : mW.PARALLAX = !1, mW.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (mW.BUMP = !1, mW.PARALLAX = !1, mW.PARALLAX_RHS = !1, mW.PARALLAXOCCLUSION = !1, mW.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && rW.e.ReflectionTextureEnabled ? (mW.ENVIRONMENTBRDF = !0, mW.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (mW.ENVIRONMENTBRDF = !1, mW.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? mW.ALPHAFROMALBEDO = !0 : mW.ALPHAFROMALBEDO = !1
            }
            mW.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === WW.LIGHTFALLOFF_STANDARD ? (mW.USEPHYSICALLIGHTFALLOFF = !1, mW.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === WW.LIGHTFALLOFF_GLTF ? (mW.USEPHYSICALLIGHTFALLOFF = !1, mW.USEGLTFLIGHTFALLOFF = !0) : (mW.USEPHYSICALLIGHTFALLOFF = !0, mW.USEGLTFLIGHTFALLOFF = !1), mW.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? mW.TWOSIDEDLIGHTING = !0 : mW.TWOSIDEDLIGHTING = !1, mW.MIRRORED = !!LW._mirroredCameraPosition, mW.SPECULARAA = cW.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(mW._areTexturesDirty || mW._areMiscDirty) && (mW.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, mW.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, mW.ALPHABLEND = this.needAlphaBlendingForMesh(iW), mW.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, mW.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), mW._areTexturesDirty && (mW.TEXTURE_REPETITION_MODE = cW.version > 1 || cW.isWebGPU ? this.textureRepetitionMode : 0), mW._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(mW), mW.FORCENORMALFORWARD = this._forceNormalForward, mW.RADIANCEOCCLUSION = this._useRadianceOcclusion, mW.HORIZONOCCLUSION = this._useHorizonOcclusion, mW._areMiscDirty && ((0, FW.Z)(iW, LW, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(iW), mW, this._applyDecalMapAfterDetailMap, this._useVertexPulling, OW, this._isVertexOutputInvariant), mW.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !iW.isVerticesDataPresent(pW.k.NormalKind), mW.DEBUGMODE = this._debugMode), (0, FW.O)(LW, cW, this, mW, !!EW, NW, PW), this._eventInfo.defines = mW, this._eventInfo.mesh = iW, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, FW.M)(iW, mW, !0, !0, !0, this._transparencyMode !== WW.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(WW, iW, OW) {
          const mW = {
            clipPlane: !1,
            useInstances: !1,
            ...OW
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const OW = new Mi(this._eventInfo.defineNames),
              EW = this._prepareEffect(WW, WW, OW, void 0, void 0, mW.useInstances, mW.clipPlane);
            this._onEffectCreatedObservable && (ki.effect = EW, ki.subMesh = null, this._onEffectCreatedObservable.notifyObservers(ki)), EW.isReady() ? iW && iW(this) : EW.onCompileObservable.add((() => {
              iW && iW(this)
            }))
          })()
        }
        buildUniformLayout() {
          const WW = this._uniformBuffer;
          WW.addUniform("vAlbedoInfos", 2), WW.addUniform("vBaseWeightInfos", 2), WW.addUniform("vBaseDiffuseRoughnessInfos", 2), WW.addUniform("vAmbientInfos", 4), WW.addUniform("vOpacityInfos", 2), WW.addUniform("vEmissiveInfos", 2), WW.addUniform("vLightmapInfos", 2), WW.addUniform("vReflectivityInfos", 3), WW.addUniform("vMicroSurfaceSamplerInfos", 2), WW.addUniform("vBumpInfos", 3), WW.addUniform("albedoMatrix", 16), WW.addUniform("baseWeightMatrix", 16), WW.addUniform("baseDiffuseRoughnessMatrix", 16), WW.addUniform("ambientMatrix", 16), WW.addUniform("opacityMatrix", 16), WW.addUniform("emissiveMatrix", 16), WW.addUniform("lightmapMatrix", 16), WW.addUniform("reflectivityMatrix", 16), WW.addUniform("microSurfaceSamplerMatrix", 16), WW.addUniform("bumpMatrix", 16), WW.addUniform("vTangentSpaceParams", 2), WW.addUniform("vAlbedoColor", 4), WW.addUniform("baseWeight", 1), WW.addUniform("baseDiffuseRoughness", 1), WW.addUniform("vLightingIntensity", 4), WW.addUniform("pointSize", 1), WW.addUniform("vReflectivityColor", 4), WW.addUniform("vEmissiveColor", 3), WW.addUniform("vAmbientColor", 3), WW.addUniform("vDebugMode", 2), WW.addUniform("vMetallicReflectanceFactors", 4), WW.addUniform("vMetallicReflectanceInfos", 2), WW.addUniform("metallicReflectanceMatrix", 16), WW.addUniform("vReflectanceInfos", 2), WW.addUniform("reflectanceMatrix", 16), WW.addUniform("cameraInfo", 4), WW.addUniform("vTextureRepetitionHexTilingParams", 4), (0, FW.ib)(WW, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(WW, iW, OW) {
          const mW = this.bD(),
            EW = OW.materialDefines;
          if (!EW) return;
          const NW = OW.effect;
          if (!NW) return;
          this._activeEffect = NW, iW.getMeshUniformBuffer().bindToEffect(NW, "Mesh"), iW.transferToEffect(WW);
          const PW = mW.VA();
          this._uniformBuffer.bindToEffect(NW, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, mW, iW, WW, this.isFrozen), li.d.Bind(PW.currentRenderPassId, this._activeEffect, iW, WW, this);
          const LW = mW.activeCamera;
          LW ? this._uniformBuffer.updateFloat4("cameraInfo", LW.minZ, LW.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const cW = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", cW[0], cW[1], cW[2], cW[3]), this._eventInfo.subMesh = OW, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), EW.OBJECTSPACE_NORMALMAP && (WW.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const wW = this._mustRebind(mW, NW, OW, iW.visibility),
            tW = PW._features.needToAlwaysBindUniformBuffers;
          (0, FW.f)(iW, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Zi.b)(this._activeEffect, this._vertexPullingMetadata);
          let ZW = null;
          const xW = this._uniformBuffer;
          if (wW) {
            if (this.bindViewProjection(NW), ZW = this._getReflectionTexture(), !xW.useUbo || !this.isFrozen || !xW.isSync || OW._drawWrapper._forceRebindOnNextCall) {
              if (mW.texturesEnabled && (this._albedoTexture && rW.e.DiffuseTextureEnabled && (xW.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, FW.v)(this._albedoTexture, xW, "albedo")), this._baseWeightTexture && rW.e.BaseWeightTextureEnabled && (xW.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, FW.v)(this._baseWeightTexture, xW, "baseWeight")), this._baseDiffuseRoughnessTexture && rW.e.BaseDiffuseRoughnessTextureEnabled && (xW.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, FW.v)(this._baseDiffuseRoughnessTexture, xW, "baseDiffuseRoughness")), this._ambientTexture && rW.e.AmbientTextureEnabled && (xW.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, FW.v)(this._ambientTexture, xW, "ambient")), this._opacityTexture && rW.e.OpacityTextureEnabled && (xW.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, FW.v)(this._opacityTexture, xW, "opacity")), this._emissiveTexture && rW.e.EmissiveTextureEnabled && (xW.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, FW.v)(this._emissiveTexture, xW, "emissive")), this._lightmapTexture && rW.e.LightmapTextureEnabled && (xW.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, FW.v)(this._lightmapTexture, xW, "lightmap")), rW.e.SpecularTextureEnabled && (this._metallicTexture ? (xW.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, FW.v)(this._metallicTexture, xW, "reflectivity")) : this._reflectivityTexture && (xW.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, FW.v)(this._reflectivityTexture, xW, "reflectivity")), this._metallicReflectanceTexture && (xW.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, FW.v)(this._metallicReflectanceTexture, xW, "metallicReflectance")), this._reflectanceTexture && EW.REFLECTANCE && (xW.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, FW.v)(this._reflectanceTexture, xW, "reflectance")), this._microSurfaceTexture && (xW.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, FW.v)(this._microSurfaceTexture, xW, "microSurfaceSampler"))), this._bumpTexture && PW.getCaps().standardDerivatives && rW.e.BumpTextureEnabled && !this._disableBumpMap && (xW.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, FW.v)(this._bumpTexture, xW, "bump"), mW._mirroredCameraPosition ? xW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : xW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, FW.h)(mW, EW, xW, this._reflectionColor, ZW, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && xW.updateFloat("pointSize", this.pointSize), EW.METALLICWORKFLOW) {
                RW.j.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, RW.j.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const WW = this.subSurface?._indexOfRefraction ?? 1.5,
                  iW = 1;
                RW.j.Color4[0].b = WW;
                const OW = Math.pow((WW - iW) / (WW + iW), 2);
                RW.j.Color4[0].a = OW, xW.updateDirectColor4("vReflectivityColor", RW.j.Color4[0]), xW.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else xW.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              xW.updateColor3("vEmissiveColor", rW.e.EmissiveTextureEnabled ? this._emissiveColor : RW.b.BlackReadOnly), !EW.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? xW.updateColor4("vAlbedoColor", this._albedoColor, 1) : xW.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), xW.updateFloat("baseWeight", this._baseWeight), xW.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * mW.environmentIntensity, this._lightingInfos.w = this._specularIntensity, xW.updateVector4("vLightingIntensity", this._lightingInfos), mW.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), xW.updateColor3("vAmbientColor", this._globalAmbientColor), xW.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            mW.texturesEnabled && (this._albedoTexture && rW.e.DiffuseTextureEnabled && xW.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && rW.e.BaseWeightTextureEnabled && xW.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && rW.e.BaseDiffuseRoughnessTextureEnabled && xW.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && rW.e.AmbientTextureEnabled && xW.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && rW.e.OpacityTextureEnabled && xW.setTexture("opacitySampler", this._opacityTexture), (0, FW.i)(mW, EW, xW, ZW, this.realTimeFiltering), EW.ENVIRONMENTBRDF && xW.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && rW.e.EmissiveTextureEnabled && xW.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && rW.e.LightmapTextureEnabled && xW.setTexture("lightmapSampler", this._lightmapTexture), rW.e.SpecularTextureEnabled && (this._metallicTexture ? xW.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && xW.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && xW.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && EW.REFLECTANCE && xW.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && xW.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && PW.getCaps().standardDerivatives && rW.e.BumpTextureEnabled && !this._disableBumpMap && xW.setTexture("bumpSampler", this._bumpTexture)), this.bD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(iW) && this.bD().depthPeelingRenderer.bind(NW), this._eventInfo.subMesh = OW, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, ti.g)(this._activeEffect, this, mW), this.bindEyePosition(NW)
          } else tW && (this._needToBindSceneUbo = !0);
          !wW && this.isFrozen && !tW || !mW.lightsEnabled || this._disableLighting || (0, FW.l)(mW, iW, this._activeEffect, EW, this._maxSimultaneousLights), !wW && this.isFrozen || ((mW.fogEnabled && iW.applyFog && mW.fogMode !== DW.i.FOGMODE_NONE || ZW || this.subSurface.refractionTexture || iW.receiveShadows || EW.PREPASS || EW.CLUSTLIGHT_BATCH) && this.bindView(NW), (0, FW.g)(mW, iW, this._activeEffect, !0), EW.NUM_MORPH_INFLUENCERS && (0, FW.r)(iW, this._activeEffect), EW.BAKED_VERTEX_ANIMATION_TEXTURE && iW.bakedVertexAnimationManager?.bind(NW, EW.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, FW.p)(EW, this._activeEffect, mW)), this._afterBind(iW, this._activeEffect, OW), xW.update()
        }
        getAnimatables() {
          const WW = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && WW.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && WW.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && WW.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && WW.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && WW.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && WW.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && WW.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? WW.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && WW.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && WW.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && WW.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && WW.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && WW.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && WW.push(this._microSurfaceTexture), WW
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.bD().environmentTexture
        }
        getActiveTextures() {
          const WW = super.getActiveTextures();
          return this._albedoTexture && WW.push(this._albedoTexture), this._baseWeightTexture && WW.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && WW.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && WW.push(this._ambientTexture), this._opacityTexture && WW.push(this._opacityTexture), this._reflectionTexture && WW.push(this._reflectionTexture), this._emissiveTexture && WW.push(this._emissiveTexture), this._reflectivityTexture && WW.push(this._reflectivityTexture), this._metallicTexture && WW.push(this._metallicTexture), this._metallicReflectanceTexture && WW.push(this._metallicReflectanceTexture), this._reflectanceTexture && WW.push(this._reflectanceTexture), this._microSurfaceTexture && WW.push(this._microSurfaceTexture), this._bumpTexture && WW.push(this._bumpTexture), this._lightmapTexture && WW.push(this._lightmapTexture), WW
        }
        hasTexture(WW) {
          return !!super.hasTexture(WW) || (this._albedoTexture === WW || (this._baseWeightTexture === WW || (this._baseDiffuseRoughnessTexture === WW || (this._ambientTexture === WW || (this._opacityTexture === WW || (this._reflectionTexture === WW || (this._emissiveTexture === WW || (this._reflectivityTexture === WW || (this._metallicTexture === WW || (this._metallicReflectanceTexture === WW || (this._reflectanceTexture === WW || (this._microSurfaceTexture === WW || (this._bumpTexture === WW || this._lightmapTexture === WW)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const WW = this.bD().enableSubSurfaceForPrePass();
          return WW && (WW.enabled = !0), !0
        }
        dispose(WW, iW) {
          this._breakShaderLoadedCheck = !0, iW && (this._environmentBRDFTexture && this.bD().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(WW, iW)
        }
      }, iW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(EW[Symbol.metadata] ?? null) : void 0;
        mW = [(0, JW.h)("_markAllSubMeshesAsMiscDirty")], (0, TW.e)(WW, null, mW, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "debugMode" in WW,
            get: WW => WW.debugMode,
            set: (WW, iW) => {
              WW.debugMode = iW
            }
          },
          metadata: iW
        }, PW, LW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW.PBRMATERIAL_OPAQUE = NW.d.MATERIAL_OPAQUE, WW.PBRMATERIAL_ALPHATEST = NW.d.MATERIAL_ALPHATEST, WW.PBRMATERIAL_ALPHABLEND = NW.d.MATERIAL_ALPHABLEND, WW.PBRMATERIAL_ALPHATESTANDBLEND = NW.d.MATERIAL_ALPHATESTANDBLEND, WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, WW.LIGHTFALLOFF_PHYSICAL = 0, WW.LIGHTFALLOFF_GLTF = 1, WW.LIGHTFALLOFF_STANDARD = 2, WW.ForceGLSL = !1, WW._ShaderLoader = new xi.d((() => [Promise.all([OW.e(635), OW.e(646)]).then((() => OW(64665))), Promise.all([OW.e(640), OW.e(636), OW.e(697), OW.e(649), OW.e(696)]).then((() => OW(64686)))]), (() => [Promise.all([OW.e(654), OW.e(656), OW.e(663)]).then((() => OW(64768))), Promise.all([OW.e(654), OW.e(657), OW.e(700), OW.e(667), OW.e(699)]).then((() => OW(64791)))])), WW
    })();
    Object.getOwnPropertyDescriptor(Si.prototype, "decalMap") || Object.defineProperty(Si.prototype, "decalMap", (0, Ui.h)("PBRBaseMaterial", "decalMap")), (0, OW(54015).c)();
    var Yi = OW(41538);
    var yi = OW(41620),
      Ti = OW(53997),
      Ji = OW(41371),
      Hi = OW(41384),
      ni = OW(41467);
    let ui = !1;
    const oi = new RW.d,
      di = new RW.d;
    class ei extends Ti.e {
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
      set wrapU(WW) {
        if (this._textures)
          for (let iW = 0; iW < this._textures.length; iW++) this._textures[iW].wrapU = WW
      }
      set wrapV(WW) {
        if (this._textures)
          for (let iW = 0; iW < this._textures.length; iW++) this._textures[iW].wrapV = WW
      }
      constructor(WW, iW, OW, mW, EW, NW) {
        const PW = !(!EW || !EW.generateMipMaps) && EW.generateMipMaps,
          LW = !(!EW || !EW.generateDepthTexture) && EW.generateDepthTexture,
          cW = EW && EW.depthTextureFormat ? EW.depthTextureFormat : 15,
          wW = !EW || void 0 === EW.doNotChangeAspectRatio || EW.doNotChangeAspectRatio,
          tW = !(!EW || !EW.drawOnlyOnFirstAttachmentByDefault) && EW.drawOnlyOnFirstAttachmentByDefault;
        if (super(WW, iW, mW, PW, wW, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), ui || (ui = !0, Hi.ThinEngine.prototype.restoreSingleAttachment = function() {
            const WW = this._gl;
            this.bindAttachments([WW.BACK])
          }, Hi.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const WW = this._gl;
            this.bindAttachments([WW.COLOR_ATTACHMENT0])
          }, Hi.ThinEngine.prototype.buildTextureLayout = function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const OW = this._gl,
              mW = [];
            if (iW) mW.push(OW.BACK);
            else
              for (let EW = 0; EW < WW.length; EW++) WW[EW] ? mW.push(OW["COLOR_ATTACHMENT" + EW]) : mW.push(OW.NONE);
            return mW
          }, Hi.ThinEngine.prototype.bindAttachments = function(WW) {
            const iW = this._gl,
              OW = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, OW)
              for (let mW = 0; mW < WW.length; mW++) WW[mW] !== iW.NONE && OW[mW] && (0, ni.i)(OW[mW].format) && (this._integerMRTAttachmentsMask |= 1 << mW);
            iW.drawBuffers(WW)
          }, Hi.ThinEngine.prototype.clearAttachments = function(WW, iW, OW, mW) {
            let EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const PW = this._currentRenderTarget?.textures;
            let LW = !1;
            if (OW && WW && PW)
              for (let cW = 0; cW < iW.length; cW++) {
                const WW = PW[cW];
                if (iW[cW] !== this._gl.NONE && WW && (0, ni.i)(WW.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  LW = !0;
                  break
                }
              }
            if (!LW || !WW || !PW) return this.bindAttachments(iW), void this.clear(WW, OW, mW, EW, NW);
            this.bindAttachments(iW), this._applyColorWriteState();
            for (let cW = 0; cW < iW.length; cW++) {
              const OW = PW[cW];
              if (iW[cW] !== this._gl.NONE && OW) {
                let iW = WW;
                if ((0, ni.i)(OW.format)) {
                  const mW = (0, ni.m)(OW.type);
                  iW = mW ? oi : di;
                  const EW = mW ? 255 : 1;
                  iW.r = Math.round(WW.r * EW), iW.g = Math.round(WW.g * EW), iW.b = Math.round(WW.b * EW), iW.a = Math.round(WW.a * EW)
                }
                this._clearColorAttachment(cW, iW, OW.format, OW.type)
              }
            }
            if (mW || EW) {
              const WW = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, mW, EW, NW)
              } finally {
                this._integerMRTAttachmentsMask = WW
              }
            }
          }, Hi.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              OW = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, WW.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(WW), iW || this.generateMipMapsMultiFramebuffer(WW), OW && (WW._MSAAFramebuffer && this._bindUnboundFramebuffer(WW._framebuffer), OW()), this._bindUnboundFramebuffer(null)
          }, Hi.ThinEngine.prototype.createMultipleRenderTarget = function(WW, iW) {
            let OW, mW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              EW = !1,
              NW = !0,
              PW = !1,
              LW = !1,
              cW = 1,
              wW = 1,
              tW = [],
              ZW = [],
              xW = [],
              lW = [],
              AW = [],
              bW = [],
              jW = [],
              UW = [],
              kW = [],
              sW = !1;
            const MW = this._createHardwareRenderTargetWrapper(!0, !1, WW);
            void 0 !== iW && (EW = void 0 !== iW.generateMipMaps && iW.generateMipMaps, NW = void 0 === iW.generateDepthBuffer || iW.generateDepthBuffer, PW = void 0 !== iW.generateStencilBuffer && iW.generateStencilBuffer, LW = void 0 !== iW.generateDepthTexture && iW.generateDepthTexture, cW = iW.ALW ?? 1, wW = iW.samples ?? wW, tW = iW.types || tW, ZW = iW.samplingModes || ZW, xW = iW.useSRGBBuffers || xW, lW = iW.formats || lW, AW = iW.targetTypes || AW, bW = iW.faceIndex || bW, jW = iW.layerIndex || jW, UW = iW.layerCounts || UW, kW = iW.labels || kW, sW = iW.dontCreateTextures ?? !1, this.bb > 1 && (13 === iW.depthTextureFormat || 17 === iW.depthTextureFormat || 16 === iW.depthTextureFormat || 14 === iW.depthTextureFormat || 18 === iW.depthTextureFormat) && (OW = iW.depthTextureFormat)), void 0 === OW && (OW = PW ? 13 : 14);
            const KW = this._gl,
              SW = this._currentFramebuffer,
              YW = KW.createFramebuffer();
            this._bindUnboundFramebuffer(YW);
            const yW = WW.width ?? WW,
              TW = WW.height ?? WW,
              JW = [],
              HW = [],
              nW = this.bb > 1 && (13 === OW || 17 === OW || 18 === OW);
            MW.label = iW?.label ?? "MultiRenderTargetWrapper", MW._framebuffer = YW, MW._generateDepthBuffer = LW || NW, MW._generateStencilBuffer = LW ? nW : PW, MW._depthStencilBuffer = this._setupFramebufferDepthAttachments(MW._generateStencilBuffer, MW._generateDepthBuffer, yW, TW, 1, OW), MW._attachments = HW;
            for (let uW = 0; uW < cW; uW++) {
              let WW = ZW[uW] || 3,
                iW = tW[uW] || 0,
                OW = xW[uW] || !1;
              const mW = lW[uW] || 5,
                NW = AW[uW] || 3553,
                PW = UW[uW] ?? 1;
              (1 !== iW || this._caps.textureFloatLinearFiltering) && (2 !== iW || this._caps.textureHalfFloatLinearFiltering) || (WW = 1);
              const LW = this._getSamplingParameters(WW, EW);
              1 !== iW || this._caps.textureFloat || (iW = 0, hW.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), OW = OW && this._caps.supportSRGBBuffers && (this.bb > 1 || this.isWebGPU);
              const cW = this.bb > 1,
                wW = KW[cW ? "COLOR_ATTACHMENT" + uW : "COLOR_ATTACHMENT" + uW + "_WEBGL"];
              if (HW.push(wW), -1 === NW || sW) continue;
              const bW = new Ji.e(this, 6);
              JW[uW] = bW, KW.activeTexture(KW["TEXTURE" + uW]), KW.bindTexture(NW, bW._hardwareTexture.underlyingResource), KW.texParameteri(NW, KW.TEXTURE_MAG_FILTER, LW.mag), KW.texParameteri(NW, KW.TEXTURE_MIN_FILTER, LW.min), KW.texParameteri(NW, KW.TEXTURE_WRAP_S, KW.CLAMP_TO_EDGE), KW.texParameteri(NW, KW.TEXTURE_WRAP_T, KW.CLAMP_TO_EDGE);
              const jW = this._getRGBABufferInternalSizedFormat(iW, mW, OW),
                SW = this._getInternalFormat(mW),
                YW = this._getWebGLTextureType(iW);
              if (!cW || 35866 !== NW && 32879 !== NW)
                if (34067 === NW) {
                  for (let WW = 0; WW < 6; WW++) KW.texImage2D(KW.TEXTURE_CUBE_MAP_POSITIVE_X + WW, 0, jW, yW, TW, 0, SW, YW, null);
                  bW.isCube = !0
                } else KW.texImage2D(KW.TEXTURE_2D, 0, jW, yW, TW, 0, SW, YW, null);
              else 35866 === NW ? bW.is2DArray = !0 : bW.is3D = !0, bW.baseDepth = bW.depth = PW, KW.texImage3D(NW, 0, jW, yW, TW, PW, 0, SW, YW, null);
              EW && KW.generateMipmap(NW), this._bindTextureDirectly(NW, null), bW.baseWidth = yW, bW.baseHeight = TW, bW.width = yW, bW.height = TW, bW.isReady = !0, bW.samples = 1, bW.generateMipMaps = EW, bW.samplingMode = WW, bW.type = iW, bW._useSRGBBuffer = OW, bW.format = mW, bW.label = kW[uW] ?? MW.label + "-Texture" + uW, this._internalTexturesCache.push(bW)
            }
            if (LW && this._caps.depthTextureExtension && !sW) {
              const WW = new Ji.e(this, 14);
              let iW = 5,
                mW = KW.DEPTH_COMPONENT16,
                NW = KW.DEPTH_COMPONENT,
                PW = KW.UNSIGNED_SHORT,
                LW = KW.DEPTH_ATTACHMENT;
              this.bb < 2 ? mW = KW.DEPTH_COMPONENT : 14 === OW ? (iW = 1, PW = KW.FLOAT, mW = KW.DEPTH_COMPONENT32F) : 18 === OW ? (iW = 0, PW = KW.FLOAT_32_UNSIGNED_INT_24_8_REV, mW = KW.DEPTH32F_STENCIL8, NW = KW.DEPTH_STENCIL, LW = KW.DEPTH_STENCIL_ATTACHMENT) : 16 === OW ? (iW = 0, PW = KW.UNSIGNED_INT, mW = KW.DEPTH_COMPONENT24, LW = KW.DEPTH_ATTACHMENT) : 13 !== OW && 17 !== OW || (iW = 12, PW = KW.UNSIGNED_INT_24_8, mW = KW.DEPTH24_STENCIL8, NW = KW.DEPTH_STENCIL, LW = KW.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(KW.TEXTURE_2D, WW, !0), KW.texParameteri(KW.TEXTURE_2D, KW.TEXTURE_MAG_FILTER, KW.NEAREST), KW.texParameteri(KW.TEXTURE_2D, KW.TEXTURE_MIN_FILTER, KW.NEAREST), KW.texParameteri(KW.TEXTURE_2D, KW.TEXTURE_WRAP_S, KW.CLAMP_TO_EDGE), KW.texParameteri(KW.TEXTURE_2D, KW.TEXTURE_WRAP_T, KW.CLAMP_TO_EDGE), KW.texImage2D(KW.TEXTURE_2D, 0, mW, yW, TW, 0, NW, PW, null), KW.framebufferTexture2D(KW.FRAMEBUFFER, LW, KW.TEXTURE_2D, WW._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(KW.TEXTURE_2D, null), MW._depthStencilTexture = WW, MW._depthStencilTextureWithStencil = nW, WW.baseWidth = yW, WW.baseHeight = TW, WW.width = yW, WW.height = TW, WW.isReady = !0, WW.samples = 1, WW.generateMipMaps = EW, WW.samplingMode = 1, WW.format = OW, WW.type = iW, WW.label = MW.label + "-DepthStencil", JW[cW] = WW, this._internalTexturesCache.push(WW)
            }
            if (MW.setTextures(JW), mW && KW.drawBuffers(HW), this._bindUnboundFramebuffer(SW), MW.setLayerAndFaceIndices(jW, bW), this.resetTextureCache(), sW) {
              if (wW > 1) {
                const WW = KW.createFramebuffer();
                if (!WW) throw new Error("Unable to create multi sampled framebuffer");
                MW._samples = wW, MW._MSAAFramebuffer = WW, cW > 0 && mW && (this._bindUnboundFramebuffer(WW), KW.drawBuffers(HW), this._bindUnboundFramebuffer(SW))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(MW, wW, mW);
            return MW
          }, Hi.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(WW, iW) {
            let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.bb < 2 || !WW) return 1;
            if (WW.samples === iW) return iW;
            const mW = this._gl;
            iW = Math.min(iW, this.getCaps().maxMSAASamples), WW._depthStencilBuffer && (mW.deleteRenderbuffer(WW._depthStencilBuffer), WW._depthStencilBuffer = null), WW._MSAAFramebuffer && (mW.deleteFramebuffer(WW._MSAAFramebuffer), WW._MSAAFramebuffer = null);
            const EW = WW._attachments.length;
            for (let PW = 0; PW < EW; PW++) {
              const iW = WW.textures[PW]._hardwareTexture;
              iW?.releaseMSAARenderBuffers()
            }
            if (iW > 1 && "function" === typeof mW.renderbufferStorageMultisample) {
              const NW = mW.createFramebuffer();
              if (!NW) throw new Error("Unable to create multi sampled framebuffer");
              WW._MSAAFramebuffer = NW, this._bindUnboundFramebuffer(NW);
              const PW = [];
              for (let OW = 0; OW < EW; OW++) {
                const EW = WW.textures[OW],
                  NW = EW._hardwareTexture,
                  LW = mW[this.bb > 1 ? "COLOR_ATTACHMENT" + OW : "COLOR_ATTACHMENT" + OW + "_WEBGL"],
                  cW = this._createRenderBuffer(EW.width, EW.height, iW, -1, this._getRGBABufferInternalSizedFormat(EW.type, EW.format, EW._useSRGBBuffer), LW);
                if (!cW) throw new Error("Unable to create multi sampled framebuffer");
                NW.addMSAARenderBuffer(cW), EW.samples = iW, PW.push(LW)
              }
              OW && mW.drawBuffers(PW)
            } else this._bindUnboundFramebuffer(WW._framebuffer);
            const NW = WW._depthStencilTexture ? WW._depthStencilTexture.format : void 0;
            return WW._depthStencilBuffer = this._setupFramebufferDepthAttachments(WW._generateStencilBuffer, WW._generateDepthBuffer, WW.width, WW.height, iW, NW), this._bindUnboundFramebuffer(null), WW._samples = iW, iW
          }, Hi.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(WW) {
            const iW = WW,
              OW = this._gl;
            if (iW.isMulti)
              for (let mW = 0; mW < iW._attachments.length; mW++) {
                const WW = iW.textures[mW];
                !WW?.generateMipMaps || WW?.isCube || WW?.is3D || (this._bindTextureDirectly(OW.TEXTURE_2D, WW, !0), OW.generateMipmap(OW.TEXTURE_2D), this._bindTextureDirectly(OW.TEXTURE_2D, null))
              }
          }, Hi.ThinEngine.prototype.resolveMultiFramebuffer = function(WW) {
            const iW = WW,
              OW = this._gl;
            if (!iW._MSAAFramebuffer || !iW.isMulti) return;
            let mW = iW.resolveMSAAColors ? OW.COLOR_BUFFER_BIT : 0;
            mW |= iW._generateDepthBuffer && iW.resolveMSAADepth ? OW.DEPTH_BUFFER_BIT : 0, mW |= iW._generateStencilBuffer && iW.resolveMSAAStencil ? OW.STENCIL_BUFFER_BIT : 0;
            const EW = iW._attachments,
              NW = EW.length;
            OW.bindFramebuffer(OW.READ_FRAMEBUFFER, iW._MSAAFramebuffer), OW.bindFramebuffer(OW.DRAW_FRAMEBUFFER, iW._framebuffer);
            for (let PW = 0; PW < NW; PW++) {
              const WW = iW.textures[PW];
              for (let iW = 0; iW < NW; iW++) EW[iW] = OW.NONE;
              EW[PW] = OW[this.bb > 1 ? "COLOR_ATTACHMENT" + PW : "COLOR_ATTACHMENT" + PW + "_WEBGL"], OW.readBuffer(EW[PW]), OW.drawBuffers(EW), OW.blitFramebuffer(0, 0, WW.width, WW.height, 0, 0, WW.width, WW.height, mW, OW.NEAREST)
            }
            for (let PW = 0; PW < NW; PW++) EW[PW] = OW[this.bb > 1 ? "COLOR_ATTACHMENT" + PW : "COLOR_ATTACHMENT" + PW + "_WEBGL"];
            OW.drawBuffers(EW), OW.bindFramebuffer(this._gl.FRAMEBUFFER, iW._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = NW;
        const ZW = [],
          xW = [],
          lW = [],
          AW = [],
          bW = [],
          jW = [],
          UW = [],
          kW = [];
        this._initTypes(OW, ZW, xW, lW, AW, bW, jW, UW, kW, EW);
        const sW = !EW || void 0 === EW.generateDepthBuffer || EW.generateDepthBuffer,
          MW = !(!EW || void 0 === EW.generateStencilBuffer) && EW.generateStencilBuffer,
          KW = EW && EW.samples ? EW.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: xW,
          generateMipMaps: PW,
          generateDepthBuffer: sW,
          generateStencilBuffer: MW,
          generateDepthTexture: LW,
          depthTextureFormat: cW,
          types: ZW,
          ALW: OW,
          useSRGBBuffers: lW,
          samples: KW,
          formats: AW,
          targetTypes: bW,
          faceIndex: jW,
          layerIndex: UW,
          layerCounts: kW,
          labels: NW,
          label: WW
        }, this._count = OW, this._drawOnlyOnFirstAttachmentByDefault = tW, OW > 0 && (this._createInternalTextures(), this._createTextures(NW))
      }
      _initTypes(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        for (let tW = 0; tW < WW; tW++) wW && wW.types && void 0 !== wW.types[tW] ? iW.push(wW.types[tW]) : iW.push(wW && wW.defaultType ? wW.defaultType : 0), wW && wW.samplingModes && void 0 !== wW.samplingModes[tW] ? OW.push(wW.samplingModes[tW]) : OW.push(nW.h.BILINEAR_SAMPLINGMODE), wW && wW.useSRGBBuffers && void 0 !== wW.useSRGBBuffers[tW] ? mW.push(wW.useSRGBBuffers[tW]) : mW.push(!1), wW && wW.formats && void 0 !== wW.formats[tW] ? EW.push(wW.formats[tW]) : EW.push(5), wW && wW.targetTypes && void 0 !== wW.targetTypes[tW] ? NW.push(wW.targetTypes[tW]) : NW.push(3553), wW && wW.faceIndex && void 0 !== wW.faceIndex[tW] ? PW.push(wW.faceIndex[tW]) : PW.push(0), wW && wW.layerIndex && void 0 !== wW.layerIndex[tW] ? LW.push(wW.layerIndex[tW]) : LW.push(0), wW && wW.layerCounts && void 0 !== wW.layerCounts[tW] ? cW.push(wW.layerCounts[tW]) : cW.push(1)
      }
      _createInternaTextureIndexMapping() {
        const WW = {},
          iW = [];
        if (!this._renderTarget) return iW;
        const OW = this._renderTarget.textures;
        for (let mW = 0; mW < OW.length; mW++) {
          const EW = OW[mW];
          if (!EW) continue;
          const NW = WW[EW.uniqueId];
          void 0 !== NW ? iW[mW] = NW : WW[EW.uniqueId] = mW
        }
        return iW
      }
      _rebuild() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || WW) return;
        const mW = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), iW && (this._releaseTextures(), this._createTextures(OW));
        const EW = this._renderTarget.textures;
        for (let NW = 0; NW < EW.length; NW++) {
          const WW = this._textures[NW];
          void 0 !== mW[NW] && this._renderTarget.setTexture(EW[mW[NW]], NW), WW._texture = EW[NW], WW._texture && (WW._noMipmap = !WW._texture.useMipMaps, WW._useSRGBBuffer = WW._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let WW = 0; WW < this._textures.length; WW++) this._textures[WW]._texture = null, this._textures[WW].dispose()
      }
      _createTextures(WW) {
        const iW = this._renderTarget.textures;
        this._textures = [];
        for (let OW = 0; OW < iW.length; OW++) {
          const mW = new nW.h(null, this.bD());
          WW?.[OW] && (mW.name = WW[OW]), mW._texture = iW[OW], mW._texture && (mW._noMipmap = !mW._texture.useMipMaps, mW._useSRGBBuffer = mW._texture._useSRGBBuffer), this._textures.push(mW)
        }
      }
      setInternalTexture(WW, iW) {
        let OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === iW && (this._texture = WW), this.renderTarget.setTexture(WW, iW, OW), this.textures[iW] || (this.textures[iW] = new nW.h(null, this.bD()), this.textures[iW].name = this._textureNames?.[iW] ?? this.textures[iW].name), this.textures[iW]._texture = WW, this.textures[iW]._noMipmap = !WW.useMipMaps, this.textures[iW]._useSRGBBuffer = WW._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[iW] = WW.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[iW] = WW.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[iW] = WW._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[iW])) {
          let OW;
          OW = WW.is2DArray ? 35866 : WW.isCube ? 34067 : WW.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[iW] = OW
        }
      }
      setLayerAndFaceIndex(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[WW] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[WW] = iW), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[WW] = OW), this.renderTarget.setLayerAndFaceIndex(WW, iW, OW))
      }
      setLayerAndFaceIndices(WW, iW) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = WW, this._multiRenderTargetOptions.faceIndex = iW, this.renderTarget.setLayerAndFaceIndices(WW, iW))
      }
      get samples() {
        return this._samples
      }
      set samples(WW) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(WW) : this._samples = WW
      }
      resize(WW) {
        this._processSizeParameter(WW), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(WW, iW, OW) {
        this._multiRenderTargetOptions.ALW = WW, this._count = WW;
        const mW = [],
          EW = [],
          NW = [],
          PW = [],
          LW = [],
          cW = [],
          wW = [],
          tW = [];
        this._textureNames = OW, this._initTypes(WW, mW, EW, NW, PW, LW, cW, wW, tW, iW), this._multiRenderTargetOptions.types = mW, this._multiRenderTargetOptions.samplingModes = EW, this._multiRenderTargetOptions.useSRGBBuffers = NW, this._multiRenderTargetOptions.formats = PW, this._multiRenderTargetOptions.targetTypes = LW, this._multiRenderTargetOptions.faceIndex = cW, this._multiRenderTargetOptions.layerIndex = wW, this._multiRenderTargetOptions.layerCounts = tW, this._multiRenderTargetOptions.labels = OW, this._rebuild(!1, !0, OW)
      }
      _unbindFrameBuffer(WW, iW) {
        this._renderTarget && WW.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(iW)
        }))
      }
      dispose() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), WW ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const WW = this._renderTarget?.textures;
        if (WW) {
          for (let iW = WW.length - 1; iW >= 0; iW--) this._textures[iW]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var vi = OW(41689);
    class gi {
      constructor(WW) {
        this.name = vi.b.NAME_GEOMETRYBUFFERRENDERER, this.rb = WW
      }
      register() {
        this.rb._gatherRenderTargetsStage.registerStep(vi.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(WW) {
        this.rb._geometryBufferRenderer && WW.push(this.rb._geometryBufferRenderer.getGBuffer())
      }
    }
    let Di = !1;
    var Vi;
    ! function(WW) {
      WW[WW.Small = 0] = "Small", WW[WW.Medium = 1] = "Medium", WW[WW.Large = 2] = "Large", WW[WW.ExtraLarge = 3] = "ExtraLarge"
    }(Vi || (Vi = {}));
    const fi = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Ci = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Xi {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(WW) {
        if (WW && this._enableMeshBlendTag && !this._scene.VA().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = WW
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(WW) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = WW, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(WW, iW) {
        WW === Xi.POSITION_TEXTURE_TYPE ? (this._positionIndex = iW, this._enablePosition = !0) : WW === Xi.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = iW, this._enableVelocity = !0) : WW === Xi.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = iW, this._enableVelocityLinear = !0) : WW === Xi.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = iW, this._enableReflectivity = !0) : WW === Xi.DEPTH_TEXTURE_TYPE ? (this._depthIndex = iW, this._enableDepth = !0) : WW === Xi.NORMAL_TEXTURE_TYPE ? (this._normalIndex = iW, this._enableNormal = !0) : WW === Xi.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = iW, this._enableScreenspaceDepth = !0) : WW === Xi.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = iW, this._enableIrradiance = !0) : WW === Xi.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = iW, this._enableObjectId = !0) : WW === Xi.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = iW, this._enableMeshBlendTag = !0)
      }
      _setAttachments(WW) {
        this._attachmentsFromPrePass = WW
      }
      _linkInternalTexture(WW) {
        this._multiRenderTarget.setInternalTexture(WW, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(WW) {
        this._multiRenderTarget.renderList = WW
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(WW) {
        switch (WW) {
          case Xi.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Xi.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Xi.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Xi.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Xi.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Xi.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Xi.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Xi.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Xi.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Xi.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(WW) {
        this._enableDepth = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(WW) {
        this._enableNormal = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(WW) {
        this._enablePosition = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(WW) {
        this._enableVelocity = WW, WW || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = WW
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(WW) {
        this._enableVelocityLinear = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(WW) {
        this._enableReflectivity = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(WW) {
        this._enableScreenspaceDepth = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(WW) {
        this._enableIrradiance = WW, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(WW) {
        if (WW && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (WW && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (WW && !this._enableObjectId && !this._linkedWithPrePass) {
          const WW = this._scene.VA(),
            iW = Math.min(WW.getCaps().maxDrawBuffers ?? 1, 8),
            OW = this._assignRenderTargetIndices()[0] + 1;
          if (WW.getCaps().drawBuffersExtension && OW > iW) throw new Error(`GeometryBufferRenderer: ${OW} color attachments were requested, but this engine supports at most ${iW}`)
        }
        this._enableObjectId = WW, WW || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(WW) {
        if (this._enableMeshBlendTag !== WW) {
          if (WW) {
            const WW = this._scene.VA();
            if (! function(WW) {
                return "NATIVE" !== WW.shaderPlatformName && (WW.isWebGPU || 2 === WW.bb)
              }(WW)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !WW.isWebGPU && !WW.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const iW = Math.min(WW.getCaps().maxDrawBuffers ?? 1, 8),
                OW = this._assignRenderTargetIndices()[0] + 1;
              if (WW.getCaps().drawBuffersExtension && OW > iW) throw new Error(`GeometryBufferRenderer: ${OW} color attachments were requested, but this engine supports at most ${iW}`)
            }
          }
          this._enableMeshBlendTag = WW, WW || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get rb() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        var EW;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new RW.d(0, 0, 0, 0), this._clearDepthColor = new RW.d(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = WW, this._ratioOrDimensions = iW, this._useUbo = WW.VA().supportsUniformBuffers, this._depthFormat = OW, this._textureTypesAndFormats = mW || {}, this._initShaderSourceAsync(), EW = Xi, Di || (Di = !0, Object.defineProperty(DW.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(WW) {
            WW && WW.isSupported && (this._geometryBufferRenderer = WW)
          },
          enumerable: !0,
          configurable: !0
        }), DW.i.prototype.enableGeometryBufferRenderer = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            OW = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new EW(this, WW, iW, OW), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, DW.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, EW._SceneComponentInitialization = WW => {
          let iW = WW._getComponent(vi.b.NAME_GEOMETRYBUFFERRENDERER);
          iW || (iW = new gi(WW), WW.MmW(iW))
        }), Xi._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.VA().isWebGPU && !Xi.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([OW.e(655).then((() => OW(64999))), Promise.all([OW.e(654), OW.e(666)]).then((() => OW(65003)))])) : await Promise.all([OW.e(638).then((() => OW(65008))), OW.e(637).then((() => OW(65010)))]), this._shadersLoaded = !0
      }
      isReady(WW, iW) {
        if (!this._shadersLoaded) return !1;
        const OW = WW.BA();
        if (OW && OW.disableDepthWrite) return !1;
        if (function(WW) {
            return WW._isGaussianSplatting || "GaussianSplattingMesh" === (iW = WW.getClassName()) || "GaussianSplattingStream" === iW;
            var iW
          }(WW.getMesh())) return !1;
        const mW = [],
          EW = [pW.k.PositionKind],
          NW = WW.getMesh();
        NW.isVerticesDataPresent(pW.k.NormalKind) && (mW.push("#define HAS_NORMAL_ATTRIBUTE"), EW.push(pW.k.NormalKind));
        let PW = !1,
          LW = !1;
        if (OW) {
          let WW = !1;
          if (OW.needAlphaTestingForMesh(NW) && OW.getAlphaTestTexture() && (mW.push("#define ALPHATEST"), mW.push(`#define ALPHATEST_UV${OW.getAlphaTestTexture().coordinatesIndex+1}`), WW = !0), (OW.bumpTexture || OW.normalTexture || OW.geometryNormalTexture) && rW.e.BumpTextureEnabled) {
            const iW = OW.bumpTexture || OW.normalTexture || OW.geometryNormalTexture;
            mW.push("#define BUMP"), mW.push(`#define BUMP_UV${iW.coordinatesIndex+1}`), WW = !0
          }
          if (this._enableReflectivity) {
            let iW = !1;
            if ("PBRMetallicRoughnessMaterial" === OW.getClassName()) OW.metallicRoughnessTexture && (mW.push("#define ORMTEXTURE"), mW.push(`#define REFLECTIVITY_UV${OW.metallicRoughnessTexture.coordinatesIndex+1}`), mW.push("#define METALLICWORKFLOW"), WW = !0, iW = !0), null != OW.metallic && (mW.push("#define METALLIC"), mW.push("#define METALLICWORKFLOW"), iW = !0), null != OW.roughness && (mW.push("#define ROUGHNESS"), mW.push("#define METALLICWORKFLOW"), iW = !0), iW && (OW.baseTexture && (mW.push("#define ALBEDOTEXTURE"), mW.push(`#define ALBEDO_UV${OW.baseTexture.coordinatesIndex+1}`), OW.baseTexture.gammaSpace && mW.push("#define GAMMAALBEDO"), WW = !0), OW.baseColor && mW.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === OW.getClassName()) OW.specularGlossinessTexture ? (mW.push("#define SPECULARGLOSSINESSTEXTURE"), mW.push(`#define REFLECTIVITY_UV${OW.specularGlossinessTexture.coordinatesIndex+1}`), WW = !0, OW.specularGlossinessTexture.gammaSpace && mW.push("#define GAMMAREFLECTIVITYTEXTURE")) : OW.specularColor && mW.push("#define REFLECTIVITYCOLOR"), null != OW.glossiness && mW.push("#define GLOSSINESS");
            else if ("PBRMaterial" === OW.getClassName()) OW.metallicTexture && (mW.push("#define ORMTEXTURE"), mW.push(`#define REFLECTIVITY_UV${OW.metallicTexture.coordinatesIndex+1}`), mW.push("#define METALLICWORKFLOW"), WW = !0, iW = !0), null != OW.metallic && (mW.push("#define METALLIC"), mW.push("#define METALLICWORKFLOW"), iW = !0), null != OW.roughness && (mW.push("#define ROUGHNESS"), mW.push("#define METALLICWORKFLOW"), iW = !0), iW ? (OW.albedoTexture && (mW.push("#define ALBEDOTEXTURE"), mW.push(`#define ALBEDO_UV${OW.albedoTexture.coordinatesIndex+1}`), OW.albedoTexture.gammaSpace && mW.push("#define GAMMAALBEDO"), WW = !0), OW.albedoColor && mW.push("#define ALBEDOCOLOR")) : (OW.reflectivityTexture ? (mW.push("#define SPECULARGLOSSINESSTEXTURE"), mW.push(`#define REFLECTIVITY_UV${OW.reflectivityTexture.coordinatesIndex+1}`), OW.reflectivityTexture.gammaSpace && mW.push("#define GAMMAREFLECTIVITYTEXTURE"), WW = !0) : OW.reflectivityColor && mW.push("#define REFLECTIVITYCOLOR"), null != OW.microSurface && mW.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === OW.getClassName()) OW.specularTexture && (mW.push("#define REFLECTIVITYTEXTURE"), mW.push(`#define REFLECTIVITY_UV${OW.specularTexture.coordinatesIndex+1}`), OW.specularTexture.gammaSpace && mW.push("#define GAMMAREFLECTIVITYTEXTURE"), WW = !0), OW.specularColor && mW.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === OW.getClassName()) {
              const iW = OW;
              mW.push("#define METALLIC"), mW.push("#define ROUGHNESS"), iW._useRoughnessFromMetallicTextureGreen && iW.baseMetalnessTexture ? (mW.push("#define ORMTEXTURE"), mW.push(`#define REFLECTIVITY_UV${iW.baseMetalnessTexture.coordinatesIndex+1}`), WW = !0) : iW.baseMetalnessTexture ? (mW.push("#define METALLIC_TEXTURE"), mW.push(`#define METALLIC_UV${iW.baseMetalnessTexture.coordinatesIndex+1}`), WW = !0) : iW.specularRoughnessTexture && (mW.push("#define ROUGHNESS_TEXTURE"), mW.push(`#define ROUGHNESS_UV${iW.specularRoughnessTexture.coordinatesIndex+1}`), WW = !0), iW.baseColorTexture && (mW.push("#define ALBEDOTEXTURE"), mW.push(`#define ALBEDO_UV${iW.baseColorTexture.coordinatesIndex+1}`), iW.baseColorTexture.gammaSpace && mW.push("#define GAMMAALBEDO"), WW = !0), iW.baseColor && mW.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (mW.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === OW.getClassName())) {
            const iW = OW;
            iW.subsurfaceWeight > 0 && iW.subsurfaceWeightTexture && (mW.push("#define SUBSURFACE_WEIGHT"), mW.push(`#define SUBSURFACEWEIGHT_UV${iW.subsurfaceWeightTexture.coordinatesIndex+1}`), WW = !0), iW.transmissionWeight > 0 && iW.transmissionWeightTexture && (mW.push("#define TRANSMISSION_WEIGHT"), mW.push(`#define TRANSMISSIONWEIGHT_UV${iW.transmissionWeightTexture.coordinatesIndex+1}`), WW = !0)
          }
          WW && (mW.push("#define NEED_UV"), NW.isVerticesDataPresent(pW.k.UVKind) && (EW.push(pW.k.UVKind), mW.push("#define UV1"), PW = !0), NW.isVerticesDataPresent(pW.k.UV2Kind) && (EW.push(pW.k.UV2Kind), mW.push("#define UV2"), LW = !0))
        }
        if (this._enableDepth && (mW.push("#define DEPTH"), mW.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (mW.push("#define NORMAL"), mW.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (mW.push("#define POSITION"), mW.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (mW.push("#define VELOCITY"), mW.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(NW) && mW.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (mW.push("#define VELOCITY_LINEAR"), mW.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(NW) && mW.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (mW.push("#define REFLECTIVITY"), mW.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (mW.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), mW.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          mW.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), mW.push("#define IRRADIANCE");
          const WW = this._scene;
          if (WW.environmentTexture) {
            const iW = {};
            let EW = !1,
              NW = 0;
            "OpenPBRMaterial" !== OW.getClassName() && "StandardMaterial" !== OW.getClassName() && "PBRMetallicRoughnessMaterial" !== OW.getClassName() && "PBRSpecularGlossinessMaterial" !== OW.getClassName() && "PBRMaterial" !== OW.getClassName() || (EW = !!OW.realtimeFiltering, NW = OW.realtimeFilteringQuality || 0), (0, FW.R)(WW, WW.environmentTexture, iW, EW, NW, !0);
            for (const WW in iW) iW[WW] && mW.push("#define " + WW);
            iW.USEIRRADIANCEMAP || mW.push("#define SPHERICAL_HARMONICS");
            const PW = WW.postProcessRenderPipelineManager.supportedPipelines.find((WW => "IBLShadowsRenderPipeline" === WW.getClassName()));
            if (PW) {
              const WW = PW;
              WW._getAccumulatedTexture() && (mW.push("#define IBL_SHADOW_TEXTURE"), WW.coloredShadows && mW.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (mW.push("#define OBJECT_ID"), mW.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (mW.push("#define MESH_BLEND_TAG"), mW.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && mW.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && mW.push("#define ENCODE_NORMAL"), NW.useBones && NW.computeBonesUsingShaders && NW.skeleton ? (EW.push(pW.k.MatricesIndicesKind), EW.push(pW.k.MatricesWeightsKind), NW.numBoneInfluencers > 4 && (EW.push(pW.k.MatricesIndicesExtraKind), EW.push(pW.k.MatricesWeightsExtraKind)), mW.push("#define NUM_BONE_INFLUENCERS " + NW.numBoneInfluencers), mW.push("#define BONETEXTURE " + NW.skeleton.isUsingTextureForMatrices), mW.push("#define BonesPerMesh " + (NW.skeleton.bones.length + 1))) : (mW.push("#define NUM_BONE_INFLUENCERS 0"), mW.push("#define BONETEXTURE false"), mW.push("#define BonesPerMesh 0"));
        const cW = NW.morphTargetManager ? (0, FW.K)(NW.morphTargetManager, mW, EW, NW, !0, !0, !1, PW, LW, !1) : 0;
        iW && (mW.push("#define INSTANCES"), (0, FW.qb)(EW, this._enableVelocity || this._enableVelocityLinear), WW.getRenderingMesh().hasThinInstances && mW.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? mW.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : mW.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, ti.k)(OW, this._scene, mW);
        const wW = this._scene.VA(),
          tW = WW._getDrawWrapper(void 0, !0),
          ZW = tW.defines,
          xW = mW.join("\n");
        return ZW !== xW && tW.setEffect(wW.createEffect("geometry", {
          attributes: EW,
          uniformsNames: Ci,
          samplers: fi,
          defines: xW,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: cW
          },
          shaderLanguage: this.shaderLanguage
        }, wW), xW), tW.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(WW) {
        if (this._enableObjectId && 1 !== WW) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== WW) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = WW
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.VA().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.rb.VA()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.rb.VA().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const WW = [],
          iW = [];
        let OW = 0;
        return this._enableDepth && (this._depthIndex = OW, OW++, WW.push("gBuffer_Depth"), iW.push(this._textureTypesAndFormats[Xi.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = OW, OW++, WW.push("gBuffer_Normal"), iW.push(this._textureTypesAndFormats[Xi.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = OW, OW++, WW.push("gBuffer_Position"), iW.push(this._textureTypesAndFormats[Xi.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = OW, OW++, WW.push("gBuffer_Velocity"), iW.push(this._textureTypesAndFormats[Xi.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = OW, OW++, WW.push("gBuffer_VelocityLinear"), iW.push(this._textureTypesAndFormats[Xi.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = OW, OW++, WW.push("gBuffer_Reflectivity"), iW.push(this._textureTypesAndFormats[Xi.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = OW, OW++, WW.push("gBuffer_ScreenspaceDepth"), iW.push(this._textureTypesAndFormats[Xi.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = OW, OW++, WW.push("gBuffer_Irradiance"), iW.push(this._textureTypesAndFormats[Xi.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = OW, OW++, WW.push("gBuffer_ObjectId"), iW.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = OW, OW++, WW.push("gBuffer_MeshBlendTag"), iW.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [OW, WW, iW]
      }
      _createRenderTargets() {
        const WW = this._scene.VA(),
          [iW, OW, mW] = this._assignRenderTargetIndices(),
          EW = Math.min(WW.getCaps().maxDrawBuffers ?? 1, 8);
        if (WW.getCaps().drawBuffersExtension && iW > EW) throw new Error(`GeometryBufferRenderer: ${iW} color attachments were requested, but this engine supports at most ${EW}`);
        let PW = 0;
        WW._caps.textureFloat && WW._caps.textureFloatLinearFiltering ? PW = 1 : WW._caps.textureHalfFloat && WW._caps.textureHalfFloatLinearFiltering && (PW = 2);
        const LW = this._getRenderTargetDimensions(),
          cW = [],
          wW = [],
          tW = [];
        for (const NW of mW) NW ? (cW.push(NW.textureType), wW.push(NW.textureFormat), tW.push(NW.samplingMode ?? 2)) : (cW.push(PW), wW.push(5), tW.push(2));
        if (this._normalsAreUnsigned = 11 === cW[Xi.NORMAL_TEXTURE_TYPE] || 13 === cW[Xi.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new ei("gBuffer", LW, iW, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: cW,
            formats: wW,
            samplingModes: tW,
            depthTextureFormat: this._depthFormat
          }, OW.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = nW.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = nW.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const ZW = [!0],
          xW = [!1],
          lW = [!0];
        for (let NW = 1; NW < iW; ++NW) ZW.push(!0), lW.push(!1), xW.push(!0);
        const AW = WW.buildTextureLayout(ZW),
          bW = WW.buildTextureLayout(xW),
          jW = WW.buildTextureLayout(lW);
        this._multiRenderTarget.onClearObservable.add((WW => {
          const iW = this.useSpecificClearForDepthTexture ? bW : AW;
          WW.clearAttachments(this._clearColor, iW, !0, !0, !0), this.useSpecificClearForDepthTexture && WW.clearAttachments(this._clearDepthColor, jW, !0, !1, !1), WW.bindAttachments(AW)
        })), this._resizeObserver = WW.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const UW = WW => {
          const iW = WW.getRenderingMesh(),
            OW = WW.getEffectiveMesh(),
            mW = this._scene,
            EW = mW.VA(),
            PW = WW.BA();
          if (!PW) return;
          if (OW._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[OW.uniqueId] && (this._previousTransformationMatrices[OW.uniqueId] = {
              oZ: VW.d.Identity(),
              viewProjection: mW.getTransformMatrix()
            }, iW.skeleton)) {
            const WW = iW.skeleton.getTransformMatrices(iW);
            this._previousBonesTransformationMatrices[iW.uniqueId] = this._copyBonesTransformationMatrices(WW, new Float32Array(WW.length))
          }
          const LW = iW._getInstancesRenderList(WW._id, !!WW.getReplacementMesh());
          if (LW.mustReturn) return;
          const cW = EW.getCaps().instancedArrays && (null !== LW.visibleInstances[WW._id] || iW.hasThinInstances),
            wW = OW.getWorldMatrix();
          if (this.isReady(WW, cW)) {
            const tW = WW._getDrawWrapper();
            if (!tW) return;
            const ZW = tW.effect;
            let xW;
            EW.enableEffect(tW), cW || iW._bind(WW, ZW, PW.fillMode), this._useUbo ? ((0, FW.s)(ZW, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (ZW.setMatrix("viewProjection", mW.getTransformMatrix()), ZW.setMatrix("view", mW.getViewMatrix()), this._scene.bindEyePosition(ZW, "vEyePosition"));
            if (iW._instanceDataStorage.isFrozen || !PW.backFaceCulling && null === PW.sideOrientation) xW = iW._effectiveSideOrientation;
            else {
              const WW = OW._getWorldMatrixDeterminant();
              xW = PW._getEffectiveOrientation(iW), WW < 0 && (xW = xW === NW.d.ClockWiseSideOrientation ? NW.d.CounterClockWiseSideOrientation : NW.d.ClockWiseSideOrientation)
            }
            if (PW._preBind(tW, xW), PW.needAlphaTestingForMesh(OW)) {
              const WW = PW.getAlphaTestTexture();
              WW && (ZW.setTexture("diffuseSampler", WW), ZW.setMatrix("diffuseMatrix", WW.getTextureMatrix()), ZW.setFloat("alphaCutOff", PW.alphaCutOff ?? .4))
            }
            if ((PW.bumpTexture || PW.normalTexture || PW.geometryNormalTexture) && mW.VA().getCaps().standardDerivatives && rW.e.BumpTextureEnabled) {
              const WW = PW.bumpTexture || PW.normalTexture || PW.geometryNormalTexture;
              ZW.setFloat3("vBumpInfos", WW.coordinatesIndex, 1 / WW.level, PW.parallaxScaleBias), ZW.setMatrix("bumpMatrix", WW.getTextureMatrix()), ZW.setTexture("bumpSampler", WW), ZW.setFloat2("vTangentSpaceParams", PW.invertNormalMapX ? -1 : 1, PW.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === PW.getClassName()) null !== PW.metallicRoughnessTexture && (ZW.setTexture("reflectivitySampler", PW.metallicRoughnessTexture), ZW.setMatrix("reflectivityMatrix", PW.metallicRoughnessTexture.getTextureMatrix())), null !== PW.metallic && ZW.setFloat("metallic", PW.metallic), null !== PW.roughness && ZW.setFloat("glossiness", 1 - PW.roughness), null !== PW.baseTexture && (ZW.setTexture("albedoSampler", PW.baseTexture), ZW.setMatrix("albedoMatrix", PW.baseTexture.getTextureMatrix())), null !== PW.baseColor && ZW.setColor3("albedoColor", PW.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === PW.getClassName()) null !== PW.specularGlossinessTexture ? (ZW.setTexture("reflectivitySampler", PW.specularGlossinessTexture), ZW.setMatrix("reflectivityMatrix", PW.specularGlossinessTexture.getTextureMatrix())) : null !== PW.specularColor && ZW.setColor3("reflectivityColor", PW.specularColor), null !== PW.glossiness && ZW.setFloat("glossiness", PW.glossiness);
            else if ("PBRMaterial" === PW.getClassName()) null !== PW.metallicTexture && (ZW.setTexture("reflectivitySampler", PW.metallicTexture), ZW.setMatrix("reflectivityMatrix", PW.metallicTexture.getTextureMatrix())), null !== PW.metallic && ZW.setFloat("metallic", PW.metallic), null !== PW.roughness && ZW.setFloat("glossiness", 1 - PW.roughness), null !== PW.roughness || null !== PW.metallic || null !== PW.metallicTexture ? (null !== PW.albedoTexture && (ZW.setTexture("albedoSampler", PW.albedoTexture), ZW.setMatrix("albedoMatrix", PW.albedoTexture.getTextureMatrix())), null !== PW.albedoColor && ZW.setColor3("albedoColor", PW.albedoColor)) : (null !== PW.reflectivityTexture ? (ZW.setTexture("reflectivitySampler", PW.reflectivityTexture), ZW.setMatrix("reflectivityMatrix", PW.reflectivityTexture.getTextureMatrix())) : null !== PW.reflectivityColor && ZW.setColor3("reflectivityColor", PW.reflectivityColor), null !== PW.microSurface && ZW.setFloat("glossiness", PW.microSurface));
            else if ("StandardMaterial" === PW.getClassName()) null !== PW.specularTexture && (ZW.setTexture("reflectivitySampler", PW.specularTexture), ZW.setMatrix("reflectivityMatrix", PW.specularTexture.getTextureMatrix())), null !== PW.specularColor && ZW.setColor3("reflectivityColor", PW.specularColor);
            else if ("OpenPBRMaterial" === PW.getClassName()) {
              const WW = PW;
              WW._useRoughnessFromMetallicTextureGreen && WW.baseMetalnessTexture ? (ZW.setTexture("reflectivitySampler", WW.baseMetalnessTexture), ZW.setMatrix("reflectivityMatrix", WW.baseMetalnessTexture.getTextureMatrix())) : WW.baseMetalnessTexture ? (ZW.setTexture("metallicSampler", WW.baseMetalnessTexture), ZW.setMatrix("metallicMatrix", WW.baseMetalnessTexture.getTextureMatrix())) : WW.specularRoughnessTexture && (ZW.setTexture("roughnessSampler", WW.specularRoughnessTexture), ZW.setMatrix("roughnessMatrix", WW.specularRoughnessTexture.getTextureMatrix())), ZW.setFloat("metallic", WW.baseMetalness), ZW.setFloat("glossiness", 1 - WW.specularRoughness), null !== WW.baseColorTexture && (ZW.setTexture("albedoSampler", WW.baseColorTexture), ZW.setMatrix("albedoMatrix", WW.baseColorTexture.getTextureMatrix())), null !== WW.baseColor && ZW.setColor3("albedoColor", WW.baseColor)
            }
            if (this._enableIrradiance && mW.environmentTexture) {
              const WW = mW.environmentTexture,
                iW = mW.postProcessRenderPipelineManager.supportedPipelines.find((WW => "IBLShadowsRenderPipeline" === WW.getClassName()));
              if (iW) {
                const WW = iW._getAccumulatedTexture();
                WW && (ZW.setTexture("iblShadowSampler", WW), ZW.setFloat2("shadowTextureSize", WW.getSize().width, WW.getSize().height))
              }
              if (ZW.setMatrix("reflectionMatrix", WW.getReflectionTextureMatrix()), ZW.setFloat2("vReflectionInfos", WW.level * mW.iblIntensity, 0), ZW.setTexture("reflectionSampler", WW), WW.irradianceTexture && (ZW.setTexture("irradianceSampler", WW.irradianceTexture), WW.irradianceTexture._dominantDirection && ZW.setVector3("vReflectionDominantDirection", WW.irradianceTexture._dominantDirection)), WW.sphericalPolynomial) {
                const iW = WW.sphericalPolynomial;
                if (iW.preScaledHarmonics) {
                  const WW = iW.preScaledHarmonics;
                  ZW.setVector3("vSphericalL00", WW.l00), ZW.setVector3("vSphericalL1_1", WW.l1_1), ZW.setVector3("vSphericalL10", WW.l10), ZW.setVector3("vSphericalL11", WW.l11), ZW.setVector3("vSphericalL2_2", WW.l2_2), ZW.setVector3("vSphericalL2_1", WW.l2_1), ZW.setVector3("vSphericalL20", WW.l20), ZW.setVector3("vSphericalL21", WW.l21), ZW.setVector3("vSphericalL22", WW.l22)
                } else ZW.setFloat3("vSphericalX", iW.x.x, iW.x.y, iW.x.z), ZW.setFloat3("vSphericalY", iW.y.x, iW.y.y, iW.y.z), ZW.setFloat3("vSphericalZ", iW.z.x, iW.z.y, iW.z.z), ZW.setFloat3("vSphericalXX_ZZ", iW.xx.x - iW.zz.x, iW.xx.y - iW.zz.y, iW.xx.z - iW.zz.z), ZW.setFloat3("vSphericalYY_ZZ", iW.yy.x - iW.zz.x, iW.yy.y - iW.zz.y, iW.yy.z - iW.zz.z), ZW.setFloat3("vSphericalZZ", iW.zz.x, iW.zz.y, iW.zz.z), ZW.setFloat3("vSphericalXY", iW.xy.x, iW.xy.y, iW.xy.z), ZW.setFloat3("vSphericalYZ", iW.yz.x, iW.yz.y, iW.yz.z), ZW.setFloat3("vSphericalZX", iW.zx.x, iW.zx.y, iW.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === PW.getClassName()) {
                const WW = PW;
                ZW.setFloat("vSubsurfaceWeight", WW.subsurfaceWeight), WW.subsurfaceWeightTexture && (ZW.setTexture("subsurfaceWeightSampler", WW.subsurfaceWeightTexture), ZW.setMatrix("subsurfaceWeightMatrix", WW.subsurfaceWeightTexture.getTextureMatrix())), ZW.setFloat("vTransmissionWeight", WW.transmissionWeight), WW.transmissionWeightTexture && (ZW.setTexture("transmissionWeightSampler", WW.transmissionWeightTexture), ZW.setMatrix("transmissionWeightMatrix", WW.transmissionWeightTexture.getTextureMatrix())), ZW.setFloat("vTransmissionScatterAnisotropy", WW.transmissionScatterAnisotropy), ZW.setFloat("vSubsurfaceScatterAnisotropy", WW.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, ti.g)(ZW, PW, this._scene), iW.useBones && iW.computeBonesUsingShaders && iW.skeleton) {
              const WW = iW.skeleton;
              if (WW.isUsingTextureForMatrices && ZW.getUniformIndex("boneTextureInfo") > -1) {
                const OW = WW.getTransformMatrixTexture(iW);
                ZW.setTexture("boneSampler", OW), ZW.setFloat2("boneTextureInfo", WW._textureWidth, WW._textureHeight)
              } else ZW.setMatrices("mBones", iW.skeleton.getTransformMatrices(iW));
              (this._enableVelocity || this._enableVelocityLinear) && ZW.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[iW.uniqueId])
            }
            if ((0, FW.r)(iW, ZW), iW.morphTargetManager && iW.morphTargetManager.isUsingTextureForTargets && iW.morphTargetManager._bind(ZW), (this._enableVelocity || this._enableVelocityLinear) && (ZW.setMatrix("previousWorld", this._previousTransformationMatrices[OW.uniqueId].oZ), ZW.setMatrix("previousViewProjection", this._previousTransformationMatrices[OW.uniqueId].viewProjection)), this._enableObjectId) {
              let WW = iW.uniqueId;
              if (this.objectIdProvider) WW = (0, li.i)(iW, this.objectIdProvider);
              else if (WW > 16777215) throw new Error(`Invalid geometry object ID ${WW} for mesh "${iW.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              ZW.setFloat("objectId", WW)
            }
            if (this._enableMeshBlendTag) {
              const WW = this.meshBlendTagProvider ? (0, li.e)(iW, this.meshBlendTagProvider) : iW.meshBlendingTag;
              ZW.setInt("meshBlendTag", WW)
            }
            cW && iW.hasThinInstances && ZW.setMatrix("world", wW), iW._processRendering(OW, WW, ZW, PW.fillMode, LW, cW, ((WW, iW) => {
              WW || ZW.setMatrix("world", iW)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[OW.uniqueId].oZ = wW.clone(), this._previousTransformationMatrices[OW.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), iW.skeleton && this._copyBonesTransformationMatrices(iW.skeleton.getTransformMatrices(iW), this._previousBonesTransformationMatrices[OW.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (iW, OW, mW) => {
          if ((mW || 0 === OW) && iW.hY)
            for (let EW = 0; EW < iW.hY.length; ++EW) {
              const OW = iW.hY[EW],
                mW = OW.BA(),
                NW = OW.getRenderingMesh();
              if (!mW) continue;
              const PW = NW._getInstancesRenderList(OW._id, !!OW.getReplacementMesh()),
                LW = WW.getCaps().instancedArrays && (null !== PW.visibleInstances[OW._id] || NW.hasThinInstances);
              if (!this.isReady(OW, LW)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (iW, OW, mW, EW) => {
          let NW;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.VA().bindAttachments(this._attachmentsFromPrePass)
          }
          if (EW.length) {
            for (WW.setColorWrite(!1), NW = 0; NW < EW.length; NW++) UW(EW.data[NW]);
            WW.setColorWrite(!0)
          }
          for (NW = 0; NW < iW.length; NW++) UW(iW.data[NW]);
          for (WW.setDepthWrite(!1), NW = 0; NW < OW.length; NW++) UW(OW.data[NW]);
          if (this.renderTransparentMeshes)
            for (NW = 0; NW < mW.length; NW++) UW(mW.data[NW]);
          WW.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const WW = this._scene.VA();
        return {
          width: Math.max(1, Math.floor(WW.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(WW.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(WW, iW) {
        for (let OW = 0; OW < WW.length; OW++) iW[OW] = WW[OW];
        return iW
      }
    }
    Xi.ForceGLSL = !1, Xi.DEPTH_TEXTURE_TYPE = 0, Xi.NORMAL_TEXTURE_TYPE = 1, Xi.POSITION_TEXTURE_TYPE = 2, Xi.VELOCITY_TEXTURE_TYPE = 3, Xi.REFLECTIVITY_TEXTURE_TYPE = 4, Xi.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Xi.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Xi.IRRADIANCE_TEXTURE_TYPE = 7, Xi.OBJECT_ID_TEXTURE_TYPE = 8, Xi.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Xi._SceneComponentInitialization = WW => {
      throw (0, Ui.o)("GeometryBufferRendererSceneComponent")
    };
    var Bi = OW(38299);
    const qi = {
      effect: null,
      subMesh: null
    };

    function Ri(WW) {
      if ("number" === typeof WW) return 1;
      if (WW instanceof VW.m) return 2;
      if (WW instanceof VW.q || WW instanceof RW.b) return 3;
      if (WW instanceof VW.r || WW instanceof RW.d) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Gi {
      populateVectorFromLinkedProperties(WW) {
        const iW = Ri(WW);
        for (const OW in this.linkedProperties) {
          const WW = this.linkedProperties[OW],
            mW = WW.numComponents;
          if (iW < mW || WW.targetUniformComponentOffset > iW - mW) return void(1 == mW ? hW.b.Error(`Float property ${WW.name} has an offset that is too large.`) : hW.b.Error(`Vector${mW} property ${WW.name} won't fit in Vector${iW} or has an offset that is too large.`));
          "number" === typeof WW.value ? Gi._tmpArray[WW.targetUniformComponentOffset] = WW.value : WW.value.toArray(Gi._tmpArray, WW.targetUniformComponentOffset)
        }
        WW.mZ(Gi._tmpArray)
      }
      constructor(WW, iW) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = WW, this.numComponents = iW
      }
    }
    Gi._tmpArray = [0, 0, 0, 0];
    class Ii {
      constructor(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          NW = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = WW, this.targetUniformName = OW, this.defaultValue = iW, this.value = iW, this.targetUniformComponentNum = mW, this.targetUniformComponentOffset = EW, this.requiredDefine = NW
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : Ri(this.defaultValue)
      }
    }
    class ai {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(WW, iW, OW) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = WW, this.samplerPrefix = iW, this.textureDefine = OW
      }
    }
    class ri extends((0, bi.b)((0, Ai.d)(fW.c))) {}
    class zi extends(function(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(ri)) {}
    class Fi extends((0, GW.f)(zi)) {
      constructor(WW) {
        super(WW), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Qi extends((0, ji.b)(aW.e)) {}
    let WO = (() => {
        var WW, iW, mW, EW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, uW, oW, dW, eW, DW, fW, CW, XW, BW, GW, aW, QW, Wi, ii, Oi, mi, Ei, Ni, Pi, Li, ci, wi, Ai, bi, ji, Ui, ki, si, Mi, Ki, Si, Ti, Ji, Hi, ni, ui, oi, di, ei, vi, gi, Di, Vi, fi, Ci, Bi, Ri, ri, zi, WO, iO, OO, mO, EO, NO, PO, LO, cO, wO, tO, ZO, xO, lO, AO, bO, jO, UO, kO, sO, MO, KO, SO, YO, yO, TO, JO, hO, HO, nO, uO;
        let oO, dO, eO, vO, gO, DO, VO, pO, fO, CO, XO, BO, qO, RO, GO, IO, aO, rO, zO, FO, QO, Wm, im, Om, mm, Em, Nm, Pm, Lm, cm, wm, tm, Zm, xm, lm, Am, bm, jm, Um, km, sm, Mm, Km, Sm, Ym, ym, Tm, Jm, hm, Hm, nm, um, om, dm, em, gm, Dm, Vm, pm, fm, Cm, Xm, Bm, qm, Rm, Gm, Im, am, rm, zm, Fm, Qm, WE, iE, OE, mE, EE, NE, PE, LE, cE, wE, tE, ZE, xE, lE, AE, bE, jE, UE, kE, sE, ME, KE, SE, YE, yE, TE, JE, hE, HE, nE, uE, oE, dE, eE = Qi,
          vE = [],
          gE = [],
          DE = [],
          VE = [],
          pE = [],
          fE = [],
          CE = [],
          XE = [],
          BE = [],
          qE = [],
          RE = [],
          GE = [],
          IE = [],
          aE = [],
          rE = [],
          zE = [],
          FE = [],
          QE = [],
          WN = [],
          iN = [],
          ON = [],
          mN = [],
          EN = [],
          NN = [],
          PN = [],
          LN = [],
          cN = [],
          wN = [],
          tN = [],
          ZN = [],
          xN = [],
          lN = [],
          AN = [],
          bN = [],
          jN = [],
          UN = [],
          kN = [],
          sN = [],
          MN = [],
          KN = [],
          SN = [],
          YN = [],
          yN = [],
          TN = [],
          JN = [],
          hN = [],
          HN = [],
          nN = [],
          uN = [],
          oN = [],
          dN = [],
          eN = [],
          vN = [],
          gN = [],
          DN = [],
          VN = [],
          pN = [],
          fN = [],
          CN = [],
          XN = [],
          BN = [],
          qN = [],
          RN = [],
          GN = [],
          IN = [],
          aN = [],
          rN = [],
          zN = [],
          FN = [],
          QN = [],
          WP = [],
          iP = [],
          OP = [],
          mP = [],
          EP = [],
          NP = [],
          PP = [],
          LP = [],
          cP = [],
          wP = [],
          tP = [],
          ZP = [],
          xP = [],
          lP = [],
          AP = [],
          bP = [],
          jP = [],
          UP = [],
          kP = [],
          sP = [],
          MP = [],
          KP = [],
          SP = [],
          YP = [],
          yP = [],
          TP = [],
          JP = [],
          hP = [],
          HP = [],
          nP = [],
          uP = [],
          oP = [],
          dP = [],
          eP = [],
          vP = [],
          gP = [],
          DP = [],
          VP = [],
          pP = [],
          fP = [],
          CP = [],
          XP = [],
          BP = [],
          qP = [],
          RP = [],
          GP = [],
          IP = [],
          aP = [],
          rP = [],
          zP = [],
          FP = [],
          QP = [],
          WL = [],
          iL = [],
          OL = [],
          mL = [],
          EL = [],
          NL = [],
          PL = [],
          LL = [],
          cL = [],
          wL = [],
          tL = [],
          ZL = [],
          xL = [],
          lL = [],
          AL = [],
          bL = [],
          jL = [],
          UL = [],
          kL = [],
          sL = [],
          ML = [],
          KL = [],
          SL = [],
          YL = [],
          yL = [],
          TL = [],
          JL = [],
          hL = [],
          HL = [],
          nL = [],
          uL = [],
          oL = [],
          dL = [],
          eL = [],
          vL = [],
          gL = [],
          DL = [],
          VL = [],
          pL = [],
          fL = [],
          CL = [],
          XL = [],
          BL = [],
          qL = [],
          RL = [],
          GL = [],
          IL = [],
          aL = [],
          rL = [],
          zL = [],
          FL = [],
          QL = [],
          Wc = [],
          ic = [],
          Oc = [],
          mc = [],
          Ec = [],
          Nc = [],
          Pc = [],
          Lc = [],
          cc = [],
          wc = [],
          tc = [],
          Zc = [],
          xc = [],
          lc = [],
          Ac = [],
          bc = [],
          jc = [],
          Uc = [],
          kc = [],
          sc = [],
          Mc = [],
          Kc = [],
          Sc = [],
          Yc = [],
          yc = [],
          Tc = [],
          Jc = [],
          hc = [],
          Hc = [],
          nc = [],
          uc = [];
        return WW = class extends eE {
          get baseWeight() {
            return (0, TW.b)(this, iW, "f")
          }
          set baseWeight(WW) {
            (0, TW.d)(this, iW, WW, "f")
          }
          get baseWeightTexture() {
            return (0, TW.b)(this, mW, "f")
          }
          set baseWeightTexture(WW) {
            (0, TW.d)(this, mW, WW, "f")
          }
          get baseColor() {
            return (0, TW.b)(this, EW, "f")
          }
          set baseColor(WW) {
            (0, TW.d)(this, EW, WW, "f")
          }
          get baseColorTexture() {
            return (0, TW.b)(this, PW, "f")
          }
          set baseColorTexture(WW) {
            (0, TW.d)(this, PW, WW, "f")
          }
          get baseDiffuseRoughness() {
            return (0, TW.b)(this, LW, "f")
          }
          set baseDiffuseRoughness(WW) {
            (0, TW.d)(this, LW, WW, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, TW.b)(this, cW, "f")
          }
          set baseDiffuseRoughnessTexture(WW) {
            (0, TW.d)(this, cW, WW, "f")
          }
          get baseMetalness() {
            return (0, TW.b)(this, wW, "f")
          }
          set baseMetalness(WW) {
            (0, TW.d)(this, wW, WW, "f")
          }
          get baseMetalnessTexture() {
            return (0, TW.b)(this, tW, "f")
          }
          set baseMetalnessTexture(WW) {
            (0, TW.d)(this, tW, WW, "f")
          }
          get specularWeight() {
            return (0, TW.b)(this, ZW, "f")
          }
          set specularWeight(WW) {
            (0, TW.d)(this, ZW, WW, "f")
          }
          get specularWeightTexture() {
            return (0, TW.b)(this, xW, "f")
          }
          set specularWeightTexture(WW) {
            (0, TW.d)(this, xW, WW, "f")
          }
          get specularColor() {
            return (0, TW.b)(this, lW, "f")
          }
          set specularColor(WW) {
            (0, TW.d)(this, lW, WW, "f")
          }
          get specularColorTexture() {
            return (0, TW.b)(this, AW, "f")
          }
          set specularColorTexture(WW) {
            (0, TW.d)(this, AW, WW, "f")
          }
          get specularRoughness() {
            return (0, TW.b)(this, bW, "f")
          }
          set specularRoughness(WW) {
            (0, TW.d)(this, bW, WW, "f")
          }
          get specularRoughnessTexture() {
            return (0, TW.b)(this, jW, "f")
          }
          set specularRoughnessTexture(WW) {
            (0, TW.d)(this, jW, WW, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, TW.b)(this, UW, "f")
          }
          set specularRoughnessAnisotropy(WW) {
            (0, TW.d)(this, UW, WW, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, TW.b)(this, kW, "f")
          }
          set specularRoughnessAnisotropyTexture(WW) {
            (0, TW.d)(this, kW, WW, "f")
          }
          get specularIor() {
            return (0, TW.b)(this, sW, "f")
          }
          set specularIor(WW) {
            (0, TW.d)(this, sW, WW, "f")
          }
          get transmissionWeight() {
            return (0, TW.b)(this, MW, "f")
          }
          set transmissionWeight(WW) {
            (0, TW.d)(this, MW, WW, "f")
          }
          get transmissionWeightTexture() {
            return (0, TW.b)(this, KW, "f")
          }
          set transmissionWeightTexture(WW) {
            (0, TW.d)(this, KW, WW, "f")
          }
          get transmissionColor() {
            return (0, TW.b)(this, SW, "f")
          }
          set transmissionColor(WW) {
            (0, TW.d)(this, SW, WW, "f")
          }
          get transmissionColorTexture() {
            return (0, TW.b)(this, YW, "f")
          }
          set transmissionColorTexture(WW) {
            (0, TW.d)(this, YW, WW, "f")
          }
          get transmissionDepth() {
            return (0, TW.b)(this, yW, "f")
          }
          set transmissionDepth(WW) {
            (0, TW.d)(this, yW, WW, "f")
          }
          get transmissionDepthTexture() {
            return (0, TW.b)(this, uW, "f")
          }
          set transmissionDepthTexture(WW) {
            (0, TW.d)(this, uW, WW, "f")
          }
          get transmissionScatter() {
            return (0, TW.b)(this, oW, "f")
          }
          set transmissionScatter(WW) {
            (0, TW.d)(this, oW, WW, "f")
          }
          get transmissionScatterTexture() {
            return (0, TW.b)(this, dW, "f")
          }
          set transmissionScatterTexture(WW) {
            (0, TW.d)(this, dW, WW, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, TW.b)(this, eW, "f")
          }
          set transmissionScatterAnisotropy(WW) {
            (0, TW.d)(this, eW, WW, "f")
          }
          get transmissionDispersionScale() {
            return (0, TW.b)(this, DW, "f")
          }
          set transmissionDispersionScale(WW) {
            (0, TW.d)(this, DW, WW, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, TW.b)(this, fW, "f")
          }
          set transmissionDispersionScaleTexture(WW) {
            (0, TW.d)(this, fW, WW, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, TW.b)(this, CW, "f")
          }
          set transmissionDispersionAbbeNumber(WW) {
            (0, TW.d)(this, CW, WW, "f")
          }
          get subsurfaceWeight() {
            return (0, TW.b)(this, XW, "f")
          }
          set subsurfaceWeight(WW) {
            (0, TW.d)(this, XW, WW, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, TW.b)(this, BW, "f")
          }
          set subsurfaceWeightTexture(WW) {
            (0, TW.d)(this, BW, WW, "f")
          }
          get subsurfaceColor() {
            return (0, TW.b)(this, GW, "f")
          }
          set subsurfaceColor(WW) {
            (0, TW.d)(this, GW, WW, "f")
          }
          get subsurfaceColorTexture() {
            return (0, TW.b)(this, aW, "f")
          }
          set subsurfaceColorTexture(WW) {
            (0, TW.d)(this, aW, WW, "f")
          }
          get subsurfaceRadius() {
            return (0, TW.b)(this, QW, "f")
          }
          set subsurfaceRadius(WW) {
            (0, TW.d)(this, QW, WW, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, TW.b)(this, Wi, "f")
          }
          set subsurfaceRadiusScale(WW) {
            (0, TW.d)(this, Wi, WW, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, TW.b)(this, ii, "f")
          }
          set subsurfaceRadiusScaleTexture(WW) {
            (0, TW.d)(this, ii, WW, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, TW.b)(this, Oi, "f")
          }
          set subsurfaceScatterAnisotropy(WW) {
            (0, TW.d)(this, Oi, WW, "f")
          }
          get coatWeight() {
            return (0, TW.b)(this, mi, "f")
          }
          set coatWeight(WW) {
            (0, TW.d)(this, mi, WW, "f")
          }
          get coatWeightTexture() {
            return (0, TW.b)(this, Ei, "f")
          }
          set coatWeightTexture(WW) {
            (0, TW.d)(this, Ei, WW, "f")
          }
          get coatColor() {
            return (0, TW.b)(this, Ni, "f")
          }
          set coatColor(WW) {
            (0, TW.d)(this, Ni, WW, "f")
          }
          get coatColorTexture() {
            return (0, TW.b)(this, Pi, "f")
          }
          set coatColorTexture(WW) {
            (0, TW.d)(this, Pi, WW, "f")
          }
          get coatRoughness() {
            return (0, TW.b)(this, Li, "f")
          }
          set coatRoughness(WW) {
            (0, TW.d)(this, Li, WW, "f")
          }
          get coatRoughnessTexture() {
            return (0, TW.b)(this, ci, "f")
          }
          set coatRoughnessTexture(WW) {
            (0, TW.d)(this, ci, WW, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, TW.b)(this, wi, "f")
          }
          set coatRoughnessAnisotropy(WW) {
            (0, TW.d)(this, wi, WW, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, TW.b)(this, Ai, "f")
          }
          set coatRoughnessAnisotropyTexture(WW) {
            (0, TW.d)(this, Ai, WW, "f")
          }
          get coatIor() {
            return (0, TW.b)(this, bi, "f")
          }
          set coatIor(WW) {
            (0, TW.d)(this, bi, WW, "f")
          }
          get coatDarkening() {
            return (0, TW.b)(this, ji, "f")
          }
          set coatDarkening(WW) {
            (0, TW.d)(this, ji, WW, "f")
          }
          get coatDarkeningTexture() {
            return (0, TW.b)(this, Ui, "f")
          }
          set coatDarkeningTexture(WW) {
            (0, TW.d)(this, Ui, WW, "f")
          }
          get fuzzWeight() {
            return (0, TW.b)(this, ki, "f")
          }
          set fuzzWeight(WW) {
            (0, TW.d)(this, ki, WW, "f")
          }
          get fuzzWeightTexture() {
            return (0, TW.b)(this, si, "f")
          }
          set fuzzWeightTexture(WW) {
            (0, TW.d)(this, si, WW, "f")
          }
          get fuzzColor() {
            return (0, TW.b)(this, Mi, "f")
          }
          set fuzzColor(WW) {
            (0, TW.d)(this, Mi, WW, "f")
          }
          get fuzzColorTexture() {
            return (0, TW.b)(this, Ki, "f")
          }
          set fuzzColorTexture(WW) {
            (0, TW.d)(this, Ki, WW, "f")
          }
          get fuzzRoughness() {
            return (0, TW.b)(this, Si, "f")
          }
          set fuzzRoughness(WW) {
            (0, TW.d)(this, Si, WW, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, TW.b)(this, Ti, "f")
          }
          set fuzzRoughnessTexture(WW) {
            (0, TW.d)(this, Ti, WW, "f")
          }
          get geometryThinWalled() {
            return (0, TW.b)(this, Ji, "f")
          }
          set geometryThinWalled(WW) {
            (0, TW.d)(this, Ji, WW, "f")
          }
          get geometryNormalTexture() {
            return (0, TW.b)(this, Hi, "f")
          }
          set geometryNormalTexture(WW) {
            (0, TW.d)(this, Hi, WW, "f")
          }
          get geometryTangent() {
            return (0, TW.b)(this, ni, "f")
          }
          set geometryTangent(WW) {
            (0, TW.d)(this, ni, WW, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(WW) {
            this.geometryTangent = new VW.m(Math.cos(WW), Math.sin(WW))
          }
          get geometryTangentTexture() {
            return (0, TW.b)(this, ui, "f")
          }
          set geometryTangentTexture(WW) {
            (0, TW.d)(this, ui, WW, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, TW.b)(this, oi, "f")
          }
          set geometryCoatNormalTexture(WW) {
            (0, TW.d)(this, oi, WW, "f")
          }
          get geometryCoatTangent() {
            return (0, TW.b)(this, di, "f")
          }
          set geometryCoatTangent(WW) {
            (0, TW.d)(this, di, WW, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(WW) {
            this.geometryCoatTangent = new VW.m(Math.cos(WW), Math.sin(WW))
          }
          get geometryCoatTangentTexture() {
            return (0, TW.b)(this, ei, "f")
          }
          set geometryCoatTangentTexture(WW) {
            (0, TW.d)(this, ei, WW, "f")
          }
          get geometryOpacity() {
            return (0, TW.b)(this, vi, "f")
          }
          set geometryOpacity(WW) {
            (0, TW.d)(this, vi, WW, "f")
          }
          get geometryOpacityTexture() {
            return (0, TW.b)(this, gi, "f")
          }
          set geometryOpacityTexture(WW) {
            (0, TW.d)(this, gi, WW, "f")
          }
          get geometryThickness() {
            return (0, TW.b)(this, Di, "f")
          }
          set geometryThickness(WW) {
            (0, TW.d)(this, Di, WW, "f")
          }
          get geometryThicknessTexture() {
            return (0, TW.b)(this, Vi, "f")
          }
          set geometryThicknessTexture(WW) {
            (0, TW.d)(this, Vi, WW, "f")
          }
          get emissionLuminance() {
            return (0, TW.b)(this, fi, "f")
          }
          set emissionLuminance(WW) {
            (0, TW.d)(this, fi, WW, "f")
          }
          get emissionColor() {
            return (0, TW.b)(this, Ci, "f")
          }
          set emissionColor(WW) {
            (0, TW.d)(this, Ci, WW, "f")
          }
          get emissionColorTexture() {
            return (0, TW.b)(this, Bi, "f")
          }
          set emissionColorTexture(WW) {
            (0, TW.d)(this, Bi, WW, "f")
          }
          get thinFilmWeight() {
            return (0, TW.b)(this, Ri, "f")
          }
          set thinFilmWeight(WW) {
            (0, TW.d)(this, Ri, WW, "f")
          }
          get thinFilmWeightTexture() {
            return (0, TW.b)(this, ri, "f")
          }
          set thinFilmWeightTexture(WW) {
            (0, TW.d)(this, ri, WW, "f")
          }
          get thinFilmThickness() {
            return (0, TW.b)(this, zi, "f")
          }
          set thinFilmThickness(WW) {
            (0, TW.d)(this, zi, WW, "f")
          }
          get thinFilmThicknessMin() {
            return (0, TW.b)(this, WO, "f")
          }
          set thinFilmThicknessMin(WW) {
            (0, TW.d)(this, WO, WW, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, TW.b)(this, iO, "f")
          }
          set thinFilmThicknessTexture(WW) {
            (0, TW.d)(this, iO, WW, "f")
          }
          get thinFilmIor() {
            return (0, TW.b)(this, OO, "f")
          }
          set thinFilmIor(WW) {
            (0, TW.d)(this, OO, WW, "f")
          }
          get ambientOcclusionTexture() {
            return (0, TW.b)(this, mO, "f")
          }
          set ambientOcclusionTexture(WW) {
            (0, TW.d)(this, mO, WW, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(WW) {
            this._sssQuality !== WW && (this._sssQuality = WW, this.xOW(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(WW) {
            this._sssIrradianceTexture !== WW && (this._sssIrradianceTexture = WW, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(WW) {
            this._sssDepthTexture !== WW && (this._sssDepthTexture = WW, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, TW.b)(this, EO, "f")
          }
          set directIntensity(WW) {
            (0, TW.d)(this, EO, WW, "f")
          }
          get environmentIntensity() {
            return (0, TW.b)(this, NO, "f")
          }
          set environmentIntensity(WW) {
            (0, TW.d)(this, NO, WW, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, TW.b)(this, PO, "f")
          }
          set useSpecularWeightFromTextureAlpha(WW) {
            (0, TW.d)(this, PO, WW, "f")
          }
          get forceAlphaTest() {
            return (0, TW.b)(this, LO, "f")
          }
          set forceAlphaTest(WW) {
            (0, TW.d)(this, LO, WW, "f")
          }
          get alphaCutOff() {
            return (0, TW.b)(this, cO, "f")
          }
          set alphaCutOff(WW) {
            (0, TW.d)(this, cO, WW, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, TW.b)(this, wO, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(WW) {
            (0, TW.d)(this, wO, WW, "f")
          }
          get useAmbientInGrayScale() {
            return (0, TW.b)(this, tO, "f")
          }
          set useAmbientInGrayScale(WW) {
            (0, TW.d)(this, tO, WW, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(RW.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === NW.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(WW) {
            WW !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? NW.d.LIGHTFALLOFF_PHYSICAL : NW.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === NW.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(WW) {
            WW !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? NW.d.LIGHTFALLOFF_GLTF : NW.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, TW.b)(this, ZO, "f")
          }
          set useObjectSpaceNormalMap(WW) {
            (0, TW.d)(this, ZO, WW, "f")
          }
          get useParallax() {
            return (0, TW.b)(this, xO, "f")
          }
          set useParallax(WW) {
            (0, TW.d)(this, xO, WW, "f")
          }
          get useParallaxOcclusion() {
            return (0, TW.b)(this, lO, "f")
          }
          set useParallaxOcclusion(WW) {
            (0, TW.d)(this, lO, WW, "f")
          }
          get parallaxScaleBias() {
            return (0, TW.b)(this, AO, "f")
          }
          set parallaxScaleBias(WW) {
            (0, TW.d)(this, AO, WW, "f")
          }
          get disableLighting() {
            return (0, TW.b)(this, bO, "f")
          }
          set disableLighting(WW) {
            (0, TW.d)(this, bO, WW, "f")
          }
          get forceIrradianceInFragment() {
            return (0, TW.b)(this, jO, "f")
          }
          set forceIrradianceInFragment(WW) {
            (0, TW.d)(this, jO, WW, "f")
          }
          get maxSimultaneousLights() {
            return (0, TW.b)(this, UO, "f")
          }
          set maxSimultaneousLights(WW) {
            (0, TW.d)(this, UO, WW, "f")
          }
          get invertNormalMapX() {
            return (0, TW.b)(this, kO, "f")
          }
          set invertNormalMapX(WW) {
            (0, TW.d)(this, kO, WW, "f")
          }
          get invertNormalMapY() {
            return (0, TW.b)(this, sO, "f")
          }
          set invertNormalMapY(WW) {
            (0, TW.d)(this, sO, WW, "f")
          }
          get twoSidedLighting() {
            return (0, TW.b)(this, MO, "f")
          }
          set twoSidedLighting(WW) {
            (0, TW.d)(this, MO, WW, "f")
          }
          get useAlphaFresnel() {
            return (0, TW.b)(this, KO, "f")
          }
          set useAlphaFresnel(WW) {
            (0, TW.d)(this, KO, WW, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, TW.b)(this, SO, "f")
          }
          set useLinearAlphaFresnel(WW) {
            (0, TW.d)(this, SO, WW, "f")
          }
          get environmentBRDFTexture() {
            return (0, TW.b)(this, YO, "f")
          }
          set environmentBRDFTexture(WW) {
            (0, TW.d)(this, YO, WW, "f")
          }
          get forceNormalForward() {
            return (0, TW.b)(this, yO, "f")
          }
          set forceNormalForward(WW) {
            (0, TW.d)(this, yO, WW, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, TW.b)(this, TO, "f")
          }
          set enableSpecularAntiAliasing(WW) {
            (0, TW.d)(this, TO, WW, "f")
          }
          get useHorizonOcclusion() {
            return (0, TW.b)(this, JO, "f")
          }
          set useHorizonOcclusion(WW) {
            (0, TW.d)(this, JO, WW, "f")
          }
          get useRadianceOcclusion() {
            return (0, TW.b)(this, hO, "f")
          }
          set useRadianceOcclusion(WW) {
            (0, TW.d)(this, hO, WW, "f")
          }
          get unlit() {
            return (0, TW.b)(this, HO, "f")
          }
          set unlit(WW) {
            (0, TW.d)(this, HO, WW, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, TW.b)(this, nO, "f")
          }
          set applyDecalMapAfterDetailMap(WW) {
            (0, TW.d)(this, nO, WW, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(WW) {
            this._backgroundRefractionTexture = WW, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(WW) {
            this._refractionHighQualityBlur !== WW && (this._refractionHighQualityBlur = WW, this.xOW(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(WW) {
            this._realTimeFiltering = WW, this.xOW(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(WW) {
            this._realTimeFilteringQuality = WW, this.xOW(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(WW) {
            this._fuzzSampleNumber = WW, this.xOW(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, TW.b)(this, uO, "f")
          }
          set debugMode(WW) {
            (0, TW.d)(this, uO, WW, "f")
          }
          constructor(OW, JW) {
            super(OW, JW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || WW.ForceGLSL), iW.set(this, ((0, TW.g)(this, vE), (0, TW.g)(this, gE, void 0))), this._baseWeight = ((0, TW.g)(this, DE), new Ii("base_weight", 1, "vBaseWeight", 1)), mW.set(this, (0, TW.g)(this, VE, void 0)), this._baseWeightTexture = ((0, TW.g)(this, pE), new ai("base_weight", "baseWeight", "BASE_WEIGHT")), EW.set(this, (0, TW.g)(this, fE, void 0)), this._baseColor = ((0, TW.g)(this, CE), new Ii("base_color", RW.b.White(), "vBaseColor", 4)), PW.set(this, (0, TW.g)(this, XE, void 0)), this._baseColorTexture = ((0, TW.g)(this, BE), new ai("base_color", "baseColor", "BASE_COLOR")), LW.set(this, (0, TW.g)(this, qE, void 0)), this._baseDiffuseRoughness = ((0, TW.g)(this, RE), new Ii("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), cW.set(this, (0, TW.g)(this, GE, void 0)), this._baseDiffuseRoughnessTexture = ((0, TW.g)(this, IE), new ai("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), wW.set(this, (0, TW.g)(this, aE, void 0)), this._baseMetalness = ((0, TW.g)(this, rE), new Ii("base_metalness", 0, "vReflectanceInfo", 4, 0)), tW.set(this, (0, TW.g)(this, zE, void 0)), this._baseMetalnessTexture = ((0, TW.g)(this, FE), new ai("base_metalness", "baseMetalness", "BASE_METALNESS")), ZW.set(this, (0, TW.g)(this, QE, void 0)), this._specularWeight = ((0, TW.g)(this, WN), new Ii("specular_weight", 1, "vReflectanceInfo", 4, 3)), xW.set(this, (0, TW.g)(this, iN, void 0)), this._specularWeightTexture = ((0, TW.g)(this, ON), new ai("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), lW.set(this, (0, TW.g)(this, mN, void 0)), this._specularColor = ((0, TW.g)(this, EN), new Ii("specular_color", RW.b.White(), "vSpecularColor", 4)), AW.set(this, (0, TW.g)(this, NN, void 0)), this._specularColorTexture = ((0, TW.g)(this, PN), new ai("specular_color", "specularColor", "SPECULAR_COLOR")), bW.set(this, (0, TW.g)(this, LN, void 0)), this._specularRoughness = ((0, TW.g)(this, cN), new Ii("specular_roughness", .3, "vReflectanceInfo", 4, 1)), jW.set(this, (0, TW.g)(this, wN, void 0)), this._specularRoughnessTexture = ((0, TW.g)(this, tN), new ai("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), UW.set(this, (0, TW.g)(this, ZN, void 0)), this._specularRoughnessAnisotropy = ((0, TW.g)(this, xN), new Ii("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), kW.set(this, (0, TW.g)(this, lN, void 0)), this._specularRoughnessAnisotropyTexture = ((0, TW.g)(this, AN), new ai("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), sW.set(this, (0, TW.g)(this, bN, void 0)), this._specularIor = ((0, TW.g)(this, jN), new Ii("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), MW.set(this, (0, TW.g)(this, UN, void 0)), this._transmissionWeight = ((0, TW.g)(this, kN), new Ii("transmission_weight", 0, "vTransmissionWeight", 1)), KW.set(this, (0, TW.g)(this, sN, void 0)), this._transmissionWeightTexture = ((0, TW.g)(this, MN), new ai("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), SW.set(this, (0, TW.g)(this, KN, void 0)), this._transmissionColor = ((0, TW.g)(this, SN), new Ii("transmission_color", RW.b.White(), "vTransmissionColor", 3, 0)), YW.set(this, (0, TW.g)(this, YN, void 0)), this._transmissionColorTexture = ((0, TW.g)(this, yN), new ai("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), yW.set(this, (0, TW.g)(this, TN, void 0)), this._transmissionDepth = ((0, TW.g)(this, JN), new Ii("transmission_depth", 0, "vTransmissionDepth", 1, 0)), uW.set(this, (0, TW.g)(this, hN, void 0)), this._transmissionDepthTexture = ((0, TW.g)(this, HN), new ai("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), oW.set(this, (0, TW.g)(this, nN, void 0)), this._transmissionScatter = ((0, TW.g)(this, uN), new Ii("transmission_scatter", RW.b.Black(), "vTransmissionScatter", 3, 0)), dW.set(this, (0, TW.g)(this, oN, void 0)), this._transmissionScatterTexture = ((0, TW.g)(this, dN), new ai("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), eW.set(this, (0, TW.g)(this, eN, void 0)), this._transmissionScatterAnisotropy = ((0, TW.g)(this, vN), new Ii("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), DW.set(this, (0, TW.g)(this, gN, void 0)), this._transmissionDispersionScale = ((0, TW.g)(this, DN), new Ii("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), fW.set(this, (0, TW.g)(this, VN, void 0)), this._transmissionDispersionScaleTexture = ((0, TW.g)(this, pN), new ai("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), CW.set(this, (0, TW.g)(this, fN, void 0)), this._transmissionDispersionAbbeNumber = ((0, TW.g)(this, CN), new Ii("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), XW.set(this, (0, TW.g)(this, XN, void 0)), this._subsurfaceWeight = ((0, TW.g)(this, BN), new Ii("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), BW.set(this, (0, TW.g)(this, qN, void 0)), this._subsurfaceWeightTexture = ((0, TW.g)(this, RN), new ai("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), GW.set(this, (0, TW.g)(this, GN, void 0)), this._subsurfaceColor = ((0, TW.g)(this, IN), new Ii("subsurface_color", new RW.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), aW.set(this, (0, TW.g)(this, aN, void 0)), this._subsurfaceColorTexture = ((0, TW.g)(this, rN), new ai("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), QW.set(this, (0, TW.g)(this, zN, void 0)), this._subsurfaceRadius = ((0, TW.g)(this, FN), new Ii("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Wi.set(this, (0, TW.g)(this, QN, void 0)), this._subsurfaceRadiusScale = ((0, TW.g)(this, WP), new Ii("subsurface_radius_scale", new RW.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), ii.set(this, (0, TW.g)(this, iP, void 0)), this._subsurfaceRadiusScaleTexture = ((0, TW.g)(this, OP), new ai("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Oi.set(this, (0, TW.g)(this, mP, void 0)), this._subsurfaceScatterAnisotropy = ((0, TW.g)(this, EP), new Ii("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), mi.set(this, (0, TW.g)(this, NP, void 0)), this._coatWeight = ((0, TW.g)(this, PP), new Ii("coat_weight", 0, "vCoatWeight", 1, 0)), Ei.set(this, (0, TW.g)(this, LP, void 0)), this._coatWeightTexture = ((0, TW.g)(this, cP), new ai("coat_weight", "coatWeight", "COAT_WEIGHT")), Ni.set(this, (0, TW.g)(this, wP, void 0)), this._coatColor = ((0, TW.g)(this, tP), new Ii("coat_color", RW.b.White(), "vCoatColor", 3, 0)), Pi.set(this, (0, TW.g)(this, ZP, void 0)), this._coatColorTexture = ((0, TW.g)(this, xP), new ai("coat_color", "coatColor", "COAT_COLOR")), Li.set(this, (0, TW.g)(this, lP, void 0)), this._coatRoughness = ((0, TW.g)(this, AP), new Ii("coat_roughness", 0, "vCoatRoughness", 1, 0)), ci.set(this, (0, TW.g)(this, bP, void 0)), this._coatRoughnessTexture = ((0, TW.g)(this, jP), new ai("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), wi.set(this, (0, TW.g)(this, UP, void 0)), this._coatRoughnessAnisotropy = ((0, TW.g)(this, kP), new Ii("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Ai.set(this, (0, TW.g)(this, sP, void 0)), this._coatRoughnessAnisotropyTexture = ((0, TW.g)(this, MP), new ai("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), bi.set(this, (0, TW.g)(this, KP, void 0)), this._coatIor = ((0, TW.g)(this, SP), new Ii("coat_ior", 1.5, "vCoatIor", 1, 0)), ji.set(this, (0, TW.g)(this, YP, void 0)), this._coatDarkening = ((0, TW.g)(this, yP), new Ii("coat_darkening", 1, "vCoatDarkening", 1, 0)), Ui.set(this, (0, TW.g)(this, TP, void 0)), this._coatDarkeningTexture = ((0, TW.g)(this, JP), new ai("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, ki.set(this, (0, TW.g)(this, hP, void 0)), this._fuzzWeight = ((0, TW.g)(this, HP), new Ii("fuzz_weight", 0, "vFuzzWeight", 1, 0)), si.set(this, (0, TW.g)(this, nP, void 0)), this._fuzzWeightTexture = ((0, TW.g)(this, uP), new ai("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Mi.set(this, (0, TW.g)(this, oP, void 0)), this._fuzzColor = ((0, TW.g)(this, dP), new Ii("fuzz_color", RW.b.White(), "vFuzzColor", 3, 0)), Ki.set(this, (0, TW.g)(this, eP, void 0)), this._fuzzColorTexture = ((0, TW.g)(this, vP), new ai("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Si.set(this, (0, TW.g)(this, gP, void 0)), this._fuzzRoughness = ((0, TW.g)(this, DP), new Ii("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Ti.set(this, (0, TW.g)(this, VP, void 0)), this._fuzzRoughnessTexture = ((0, TW.g)(this, pP), new ai("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Ji.set(this, (0, TW.g)(this, fP, void 0)), this._geometryThinWalled = ((0, TW.g)(this, CP), new Ii("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Hi.set(this, (0, TW.g)(this, XP, void 0)), this._geometryNormalTexture = ((0, TW.g)(this, BP), new ai("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), ni.set(this, (0, TW.g)(this, qP, void 0)), this._geometryTangent = ((0, TW.g)(this, RP), new Ii("geometry_tangent", new VW.m(1, 0), "vSpecularAnisotropy", 3, 0)), ui.set(this, (0, TW.g)(this, GP, void 0)), this._geometryTangentTexture = ((0, TW.g)(this, IP), new ai("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), oi.set(this, (0, TW.g)(this, aP, void 0)), this._geometryCoatNormalTexture = ((0, TW.g)(this, rP), new ai("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), di.set(this, (0, TW.g)(this, zP, void 0)), this._geometryCoatTangent = ((0, TW.g)(this, FP), new Ii("geometry_coat_tangent", new VW.m(1, 0), "vGeometryCoatTangent", 2, 0)), ei.set(this, (0, TW.g)(this, QP, void 0)), this._geometryCoatTangentTexture = ((0, TW.g)(this, WL), new ai("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), vi.set(this, (0, TW.g)(this, iL, void 0)), this._geometryOpacity = ((0, TW.g)(this, OL), new Ii("geometry_opacity", 1, "vBaseColor", 4, 3)), gi.set(this, (0, TW.g)(this, mL, void 0)), this._geometryOpacityTexture = ((0, TW.g)(this, EL), new ai("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Di.set(this, (0, TW.g)(this, NL, void 0)), this._geometryThickness = ((0, TW.g)(this, PL), new Ii("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Vi.set(this, (0, TW.g)(this, LL, void 0)), this._geometryThicknessTexture = ((0, TW.g)(this, cL), new ai("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), fi.set(this, (0, TW.g)(this, wL, void 0)), this._emissionLuminance = ((0, TW.g)(this, tL), new Ii("emission_luminance", 1, "vLightingIntensity", 4, 1)), Ci.set(this, (0, TW.g)(this, ZL, void 0)), this._emissionColor = ((0, TW.g)(this, xL), new Ii("emission_color", RW.b.Black(), "vEmissionColor", 3)), Bi.set(this, (0, TW.g)(this, lL, void 0)), this._emissionColorTexture = ((0, TW.g)(this, AL), new ai("emission_color", "emissionColor", "EMISSION_COLOR")), Ri.set(this, (0, TW.g)(this, bL, void 0)), this._thinFilmWeight = ((0, TW.g)(this, jL), new Ii("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), ri.set(this, (0, TW.g)(this, UL, void 0)), this._thinFilmWeightTexture = ((0, TW.g)(this, kL), new ai("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), zi.set(this, (0, TW.g)(this, sL, void 0)), this._thinFilmThickness = ((0, TW.g)(this, ML), new Ii("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), WO.set(this, (0, TW.g)(this, KL, void 0)), this._thinFilmThicknessMin = ((0, TW.g)(this, SL), new Ii("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), iO.set(this, (0, TW.g)(this, YL, void 0)), this._thinFilmThicknessTexture = ((0, TW.g)(this, yL), new ai("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), OO.set(this, (0, TW.g)(this, TL, void 0)), this._thinFilmIor = ((0, TW.g)(this, JL), new Ii("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), mO.set(this, (0, TW.g)(this, hL, void 0)), this._ambientOcclusionTexture = ((0, TW.g)(this, HL), new ai("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = WW.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, EO.set(this, (0, TW.g)(this, nL, 1)), NO.set(this, ((0, TW.g)(this, uL), (0, TW.g)(this, oL, 1))), PO.set(this, ((0, TW.g)(this, dL), (0, TW.g)(this, eL, !1))), LO.set(this, ((0, TW.g)(this, vL), (0, TW.g)(this, gL, !1))), cO.set(this, ((0, TW.g)(this, DL), (0, TW.g)(this, VL, .4))), wO.set(this, ((0, TW.g)(this, pL), (0, TW.g)(this, fL, !1))), tO.set(this, ((0, TW.g)(this, CL), (0, TW.g)(this, XL, !1))), ZO.set(this, ((0, TW.g)(this, BL), (0, TW.g)(this, qL, !1))), xO.set(this, ((0, TW.g)(this, RL), (0, TW.g)(this, GL, !1))), lO.set(this, ((0, TW.g)(this, IL), (0, TW.g)(this, aL, !1))), AO.set(this, ((0, TW.g)(this, rL), (0, TW.g)(this, zL, .05))), bO.set(this, ((0, TW.g)(this, FL), (0, TW.g)(this, QL, !1))), jO.set(this, ((0, TW.g)(this, Wc), (0, TW.g)(this, ic, !1))), UO.set(this, ((0, TW.g)(this, Oc), (0, TW.g)(this, mc, 4))), kO.set(this, ((0, TW.g)(this, Ec), (0, TW.g)(this, Nc, !1))), sO.set(this, ((0, TW.g)(this, Pc), (0, TW.g)(this, Lc, !1))), MO.set(this, ((0, TW.g)(this, cc), (0, TW.g)(this, wc, !1))), KO.set(this, ((0, TW.g)(this, tc), (0, TW.g)(this, Zc, !1))), SO.set(this, ((0, TW.g)(this, xc), (0, TW.g)(this, lc, !1))), YO.set(this, ((0, TW.g)(this, Ac), (0, TW.g)(this, bc, null))), yO.set(this, ((0, TW.g)(this, jc), (0, TW.g)(this, Uc, !1))), TO.set(this, ((0, TW.g)(this, kc), (0, TW.g)(this, sc, !1))), JO.set(this, ((0, TW.g)(this, Mc), (0, TW.g)(this, Kc, !0))), hO.set(this, ((0, TW.g)(this, Sc), (0, TW.g)(this, Yc, !0))), HO.set(this, ((0, TW.g)(this, yc), (0, TW.g)(this, Tc, !1))), nO.set(this, ((0, TW.g)(this, Jc), (0, TW.g)(this, hc, !1))), this._lightingInfos = ((0, TW.g)(this, Hc), new VW.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = NW.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new HW.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, uO.set(this, (0, TW.g)(this, nc, 0)), this.debugLimit = ((0, TW.g)(this, uc), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = NW.d.MATERIAL_OPAQUE, this.bD() && !this.bD()?.VA().isWebGPU && this.bD().VA().bb < 2 && hW.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), WW._noiseTextures[this.bD().uniqueId] || (WW._noiseTextures[this.bD().uniqueId] = new nW.h(yi.f.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.bD(), !1, !0, 1), this.bD().jD.addOnce((() => {
              WW._noiseTextures[this.bD().uniqueId]?.dispose(), delete WW._noiseTextures[this.bD().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), rW.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), rW.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = gW(this.bD()), this._environmentFuzzBRDFTexture = vW(this.bD()), this.prePassConfiguration = new qW.e, this._propertyList = {};
            for (const WW of Object.getOwnPropertyNames(this)) {
              const iW = this[WW];
              iW instanceof Ii && (this._propertyList[WW] = iW)
            }
            Object.keys(this._propertyList).forEach((WW => {
              const iW = this._propertyList[WW];
              let OW = this._uniformsList[iW.targetUniformName];
              OW ? OW.numComponents !== iW.targetUniformComponentNum ? hW.b.Error(`Uniform ${iW.targetUniformName} already exists of size ${OW.numComponents}, but trying to set it to ${iW.targetUniformComponentNum}.`) : OW.requiredDefine !== iW.requiredDefine && (OW.requiredDefine = void 0) : (OW = new Gi(iW.targetUniformName, iW.targetUniformComponentNum), OW.requiredDefine = iW.requiredDefine, this._uniformsList[iW.targetUniformName] = OW), "" === OW.firstLinkedKey && (OW.firstLinkedKey = iW.name), OW.linkedProperties[iW.name] = iW
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const WW of Object.getOwnPropertyNames(this)) {
              const iW = this[WW];
              iW instanceof ai && (this._samplersList[WW] = iW)
            }
            for (const WW in this._samplersList) {
              const iW = this._samplersList[WW].textureDefine;
              this._samplerDefines[iW] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[iW + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[iW + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(rW.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(rW.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(WW) {
            this._transparencyMode !== WW && (this._transparencyMode = WW, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== NW.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(WW) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(WW)
          }
          clone(iW) {
            let OW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const EW = Yi.d.Clone((() => new WW(iW, this.bD())), this, {
              cloneTexturesOnlyOnce: OW
            });
            return EW.id = iW, EW.name = iW, this.stencil.copyTo(EW.stencil), this._clonePlugins(EW, mW), EW
          }
          serialize() {
            const WW = super.serialize();
            return WW.customType = "BABYLON.OpenPBRMaterial", WW
          }
          static Parse(iW, OW, mW) {
            const EW = Yi.d.Parse((() => new WW(iW.name, OW)), iW, OW, mW);
            return iW.stencil && EW.stencil.parse(iW.stencil, OW, mW), NW.d._ParsePlugins(iW, EW, OW, mW), EW
          }
          forceCompilation(WW, iW, OW) {
            const mW = {
              clipPlane: !1,
              useInstances: !1,
              ...OW
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const OW = new Fi({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                EW = this._prepareEffect(WW, WW, OW, void 0, void 0, mW.useInstances, mW.clipPlane);
              this._onEffectCreatedObservable && (qi.effect = EW, qi.subMesh = null, this._onEffectCreatedObservable.notifyObservers(qi)), EW.isReady() ? iW && iW(this) : EW.onCompileObservable.add((() => {
                iW && iW(this)
              }))
            })()
          }
          isReadyForSubMesh(iW, OW, mW) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const EW = OW._drawWrapper;
            if (EW.effect && this.isFrozen && EW._wasPreviouslyReady && EW._wasPreviouslyUsingInstances === mW) return !0;
            OW.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), OW.materialDefines = new Fi({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const NW = OW.materialDefines;
            if (this._isReadyForSubMesh(OW)) return !0;
            const PW = this.bD(),
              LW = PW.VA();
            if (NW._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, PW.texturesEnabled)) {
              for (const WW in this._samplersList) {
                const iW = this._samplersList[WW];
                if (iW.value && !iW.value.isReadyOrNotBlocking()) return !1
              }
              const iW = this._getRadianceTexture();
              if (iW && rW.e.ReflectionTextureEnabled) {
                if (!iW.isReadyOrNotBlocking()) return !1;
                if (iW.irradianceTexture) {
                  if (!iW.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!iW.sphericalPolynomial && iW.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && rW.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && rW.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && rW.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (WW._noiseTextures[PW.uniqueId] && !WW._noiseTextures[PW.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = NW, this._eventInfo.subMesh = OW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (NW._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (NW.AREALIGHTUSED)
              for (let WW = 0; WW < iW.lightSources.length; WW++)
                if (!iW.lightSources[WW]._isReady()) return !1;
            if (LW.getCaps().standardDerivatives || iW.isVerticesDataPresent(pW.k.NormalKind) || (iW.createNormals(!0), hW.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + iW.name)), !(0, FW.c)(PW, iW, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const cW = OW.effect,
              wW = NW._areLightsDisposed,
              tW = this._prepareEffect(iW, OW.getRenderingMesh(), NW, this.onCompiled, this.onError, mW, null);
            let ZW = !1;
            if (tW)
              if (this._onEffectCreatedObservable && (qi.effect = tW, qi.subMesh = OW, this._onEffectCreatedObservable.notifyObservers(qi)), this.allowShaderHotSwapping && cW && !tW.isReady()) {
                if (NW.markAsUnprocessed(), ZW = this.isFrozen, wW) return NW._areLightsDisposed = !0, !1
              } else PW.resetCachedMaterial(), OW.setEffect(tW, NW, this._materialContext);
            return !(!OW.effect || !OW.effect.isReady()) && (NW._renderId = PW.getRenderId(), EW._wasPreviouslyReady = !ZW, EW._wasPreviouslyUsingInstances = !!mW, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const WW = this._uniformBuffer;
            WW.addUniform("vTangentSpaceParams", 2), WW.addUniform("vLightingIntensity", 4), WW.addUniform("pointSize", 1), WW.addUniform("vDebugMode", 2), WW.addUniform("renderTargetSize", 2), WW.addUniform("cameraInfo", 4), WW.addUniform("vTextureRepetitionHexTilingParams", 4), WW.addUniform("backgroundRefractionMatrix", 16), WW.addUniform("vBackgroundRefractionInfos", 3), (0, FW.ib)(WW, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((iW => {
              WW.addUniform(iW.name, iW.numComponents)
            })), Object.values(this._samplersList).forEach((iW => {
              WW.addUniform(iW.samplerInfoName, 2), WW.addUniform(iW.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(WW, iW, OW, mW) {
            if (0 === this.geometryThickness) WW.updateFloat("vGeometryThickness", 0);
            else {
              mW.getRenderingMesh().getWorldMatrix().decompose(VW.l.fA[0]);
              const iW = Math.max(Math.abs(VW.l.fA[0].x), Math.abs(VW.l.fA[0].y), Math.abs(VW.l.fA[0].z));
              WW.updateFloat("vGeometryThickness", this.geometryThickness * iW)
            }
          }
          bindForSubMesh(iW, OW, mW) {
            const EW = this.bD(),
              NW = mW.materialDefines;
            if (!NW) return;
            const PW = mW.effect;
            if (!PW) return;
            this._activeEffect = PW, OW.getMeshUniformBuffer().bindToEffect(PW, "Mesh"), OW.transferToEffect(iW);
            const LW = EW.VA();
            this._uniformBuffer.bindToEffect(PW, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, EW, OW, iW, this.isFrozen), li.d.Bind(LW.currentRenderPassId, this._activeEffect, OW, iW, this);
            const cW = EW.activeCamera;
            cW ? this._uniformBuffer.updateFloat4("cameraInfo", cW.minZ, cW.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const wW = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", wW[0], wW[1], wW[2], wW[3]), this._eventInfo.subMesh = mW, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), NW.OBJECTSPACE_NORMALMAP && (iW.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const tW = this._mustRebind(EW, PW, mW, OW.visibility),
              ZW = LW._features.needToAlwaysBindUniformBuffers;
            (0, FW.f)(OW, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Zi.b)(this._activeEffect, this._vertexPullingMetadata);
            const xW = this._uniformBuffer;
            if (tW) {
              this.bindViewProjection(PW);
              const iW = this._getRadianceTexture();
              if (!xW.useUbo || !this.isFrozen || !xW.isSync || mW._drawWrapper._forceRebindOnNextCall) {
                if (EW.texturesEnabled) {
                  for (const WW in this._samplersList) {
                    const iW = this._samplersList[WW];
                    iW.value && (xW.updateFloat2(iW.samplerInfoName, iW.value.coordinatesIndex, iW.value.level), (0, FW.v)(iW.value, xW, iW.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (EW._mirroredCameraPosition ? xW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : xW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, FW.h)(EW, NW, xW, RW.b.White(), iW, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && xW.updateFloat("pointSize", this.pointSize);
                const WW = this._uniformsArray;
                for (let iW = 0, OW = WW.length; iW < OW; iW++) {
                  const OW = WW[iW];
                  (void 0 === OW.requiredDefine || NW[OW.requiredDefine]) && (4 === OW.numComponents ? (OW.populateVectorFromLinkedProperties(VW.l.Vector4[0]), xW.updateVector4(OW.name, VW.l.Vector4[0])) : 3 === OW.numComponents ? (OW.populateVectorFromLinkedProperties(VW.l.fA[0]), xW.updateVector3(OW.name, VW.l.fA[0])) : 2 === OW.numComponents ? (OW.populateVectorFromLinkedProperties(VW.l.Vector2[0]), xW.updateFloat2(OW.name, VW.l.Vector2[0].x, VW.l.Vector2[0].y)) : 1 === OW.numComponents && xW.updateFloat(OW.name, OW.linkedProperties[OW.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * EW.environmentIntensity, this._lightingInfos.w = 1, xW.updateVector4("vLightingIntensity", this._lightingInfos), xW.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (EW.texturesEnabled) {
                for (const WW in this._samplersList) {
                  const iW = this._samplersList[WW];
                  iW.value && xW.setTexture(iW.samplerName, iW.value)
                }
                if ((0, FW.i)(EW, NW, xW, iW, this.realTimeFiltering), NW.ENVIRONMENTBRDF && xW.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), NW.FUZZENVIRONMENTBRDF && xW.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), NW.REFRACTED_BACKGROUND && (xW.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), xW.tWW("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), VW.l.fA[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), xW.updateVector3("vBackgroundRefractionInfos", VW.l.fA[1])), (NW.ANISOTROPIC || NW.FUZZ || NW.REFRACTED_BACKGROUND || NW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && xW.setTexture("blueNoiseSampler", WW._noiseTextures[this.bD().uniqueId]), NW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const WW = this.sssIrradianceTexture.getSize().width,
                    iW = this.sssIrradianceTexture.getSize().height;
                  xW.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), xW.setTexture("sceneDepthSampler", this.sssDepthTexture), xW.updateFloat2("renderTargetSize", WW, iW)
                }
              }
              this.bD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(OW) && this.bD().depthPeelingRenderer.bind(PW), this._eventInfo.subMesh = mW, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, ti.g)(this._activeEffect, this, EW), this.bindEyePosition(PW)
            } else ZW && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, EW, EW.VA(), mW), !tW && this.isFrozen && !ZW || !EW.lightsEnabled || this._disableLighting || (0, FW.l)(EW, OW, this._activeEffect, NW, this._maxSimultaneousLights), !tW && this.isFrozen || (this.bindView(PW), (0, FW.g)(EW, OW, this._activeEffect, !0), NW.NUM_MORPH_INFLUENCERS && (0, FW.r)(OW, this._activeEffect), NW.BAKED_VERTEX_ANIMATION_TEXTURE && OW.bakedVertexAnimationManager?.bind(PW, NW.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, FW.p)(NW, this._activeEffect, EW)), this._afterBind(OW, this._activeEffect, mW), xW.update()
          }
          getAnimatables() {
            const WW = super.getAnimatables();
            for (const iW in this._samplersList) {
              const OW = this._samplersList[iW];
              OW.value && OW.value.animations && OW.value.animations.length > 0 && WW.push(OW.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && WW.push(this._radianceTexture), WW
          }
          getActiveTextures() {
            const WW = super.getActiveTextures();
            for (const iW in this._samplersList) {
              const OW = this._samplersList[iW];
              OW.value && WW.push(OW.value)
            }
            return this._radianceTexture && WW.push(this._radianceTexture), WW
          }
          hasTexture(WW) {
            if (super.hasTexture(WW)) return !0;
            for (const iW in this._samplersList) {
              if (this._samplersList[iW].value === WW) return !0
            }
            return this._radianceTexture === WW
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(WW, iW) {
            if (this._breakShaderLoadedCheck = !0, iW) {
              this._environmentBRDFTexture && this.bD().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.bD().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const WW in this._samplersList) {
                const iW = this._samplersList[WW];
                iW.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(WW, iW)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.bD().environmentTexture
          }
          _prepareEffect(iW, OW, mW) {
            let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              NW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              PW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              LW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(iW, OW, mW, PW, LW), !mW.isDirty) return null;
            mW.markAsProcessed();
            const cW = this.bD().VA(),
              wW = new zW.e;
            let tW = 0;
            mW.USESPHERICALINVERTEX && wW.addFallback(tW++, "USESPHERICALINVERTEX"), mW.FOG && wW.addFallback(tW, "FOG"), mW.SPECULARAA && wW.addFallback(tW, "SPECULARAA"), mW.POINTSIZE && wW.addFallback(tW, "POINTSIZE"), mW.LOGARITHMICDEPTH && wW.addFallback(tW, "LOGARITHMICDEPTH"), mW.PARALLAX && wW.addFallback(tW, "PARALLAX"), mW.PARALLAX_RHS && wW.addFallback(tW, "PARALLAX_RHS"), mW.PARALLAXOCCLUSION && wW.addFallback(tW++, "PARALLAXOCCLUSION"), mW.ENVIRONMENTBRDF && wW.addFallback(tW++, "ENVIRONMENTBRDF"), mW.TANGENT && wW.addFallback(tW++, "TANGENT"), tW = (0, FW.w)(mW, wW, this._maxSimultaneousLights, tW), mW.SPECULARTERM && wW.addFallback(tW++, "SPECULARTERM"), mW.USESPHERICALFROMREFLECTIONMAP && wW.addFallback(tW++, "USESPHERICALFROMREFLECTIONMAP"), mW.USEIRRADIANCEMAP && wW.addFallback(tW++, "USEIRRADIANCEMAP"), mW.NORMAL && wW.addFallback(tW++, "NORMAL"), mW.VERTEXCOLOR && wW.addFallback(tW++, "VERTEXCOLOR"), mW.MORPHTARGETS && wW.addFallback(tW++, "MORPHTARGETS"), mW.MULTIVIEW && wW.addFallback(0, "MULTIVIEW");
            const ZW = [pW.k.PositionKind];
            mW.NORMAL && ZW.push(pW.k.NormalKind), mW.TANGENT && ZW.push(pW.k.TangentKind);
            for (let WW = 1; WW <= 6; ++WW) mW["UV" + WW] && ZW.push(`uv${1===WW?"":WW}`);
            mW.VERTEXCOLOR && ZW.push(pW.k.ColorKind), (0, FW.B)(ZW, iW, mW, wW), (0, FW.F)(ZW, mW), (0, FW.I)(ZW, iW, mW), (0, FW.z)(ZW, iW, mW);
            let xW = "openpbr";
            const lW = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const WW in this._uniformsList) lW.push(WW);
            const AW = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            mW.FUZZENVIRONMENTBRDF && AW.push("environmentFuzzBrdfSampler"), mW.REFRACTED_BACKGROUND && AW.push("backgroundRefractionSampler"), (mW.ANISOTROPIC || mW.FUZZ || mW.REFRACTED_BACKGROUND || mW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && AW.push("blueNoiseSampler"), mW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (AW.push("sceneIrradianceSampler"), AW.push("sceneDepthSampler"));
            for (const WW in this._samplersList) {
              const iW = this._samplersList[WW];
              AW.push(iW.samplerName), lW.push(iW.samplerInfoName), lW.push(iW.samplerMatrixName)
            }(0, FW.jb)(lW, AW, !0);
            const bW = ["Material", "Scene", "Mesh"],
              jW = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: mW.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = wW, this._eventInfo.fallbackRank = tW, this._eventInfo.defines = mW, this._eventInfo.uniforms = lW, this._eventInfo.attributes = ZW, this._eventInfo.samplers = AW, this._eventInfo.uniformBuffersNames = bW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = iW, this._eventInfo.indexParameters = jW, this._callbackPluginEventGeneric(128, this._eventInfo), li.d.AddUniformsAndSamplers(lW, AW), qW.e.AddUniforms(lW), qW.e.AddSamplers(AW), (0, ti.d)(lW), this._useVertexPulling) {
              const WW = OW?.geometry;
              WW && (this._vertexPullingMetadata = (0, Zi.c)(WW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, iW) => {
                lW.push(`vp_${iW}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            IW.e && (IW.e.PrepareUniforms(lW, mW), IW.e.PrepareSamplers(AW, mW)), (0, FW.mb)({
              uniformsNames: lW,
              uniformBuffersNames: bW,
              samplers: AW,
              defines: mW,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const UW = {};
            this.customShaderNameResolve && (xW = this.customShaderNameResolve(xW, lW, bW, AW, mW, ZW, UW));
            const kW = mW.toString(),
              sW = cW.createEffect(xW, {
                attributes: ZW,
                uniformsNames: lW,
                uniformBuffersNames: bW,
                samplers: AW,
                defines: kW,
                fallbacks: wW,
                onCompiled: EW,
                onError: NW,
                indexParameters: jW,
                processFinalCode: UW.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: mW.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, cW);
            return this._eventInfo.customCode = void 0, sW
          }
          _prepareDefines(iW, OW, mW) {
            let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              PW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const LW = OW.hasThinInstances,
              cW = this.bD(),
              wW = cW.VA();
            (0, FW.U)(cW, iW, mW, !0, this._maxSimultaneousLights, this._disableLighting), mW._needNormals = !0, (0, FW.$)(cW, mW);
            const tW = this.needAlphaBlendingForMesh(iW) && this.bD().useOrderIndependentTransparency;
            if ((0, FW.hb)(cW, mW, this.canRenderToMRT && !tW), (0, FW.db)(cW, mW, tW), li.d.PrepareDefines(wW.currentRenderPassId, iW, mW), mW._areTexturesDirty) {
              mW._needUVs = !1;
              for (let WW = 1; WW <= 6; ++WW) mW["MAINUV" + WW] = !1;
              if (cW.texturesEnabled) {
                for (const OW in this._samplersList) {
                  const WW = this._samplersList[OW];
                  WW.value ? ((0, FW.W)(WW.value, mW, WW.textureDefine), mW[WW.textureDefine + "_GAMMA"] = WW.value.gammaSpace) : mW[WW.textureDefine] = !1
                }
                const WW = this._getRadianceTexture(),
                  iW = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || wW.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, FW.R)(cW, WW, mW, this.realTimeFiltering, this.realTimeFilteringQuality, !iW), this._baseMetalnessTexture && (mW.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), mW.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, mW.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, mW.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, mW.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, mW.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, mW.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, mW.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, mW.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, mW.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, mW.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, mW.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && rW.e.DiffuseTextureEnabled ? (mW.PARALLAX = !0, mW.PARALLAX_RHS = cW.useRightHandedSystem, mW.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : mW.PARALLAX = !1, mW.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (mW.PARALLAX = !1, mW.PARALLAX_RHS = !1, mW.PARALLAXOCCLUSION = !1, mW.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && rW.e.ReflectionTextureEnabled ? (mW.ENVIRONMENTBRDF = !0, mW.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (mW.ENVIRONMENTBRDF = !1, mW.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? mW.FUZZENVIRONMENTBRDF = !0 : mW.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  mW.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && rW.e.RefractionTextureEnabled, mW.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, mW.REFRACTED_LIGHTS = !0;
                  const WW = this._getRadianceTexture();
                  WW ? (mW.REFRACTED_ENVIRONMENT = rW.e.RefractionTextureEnabled, mW.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.bD().useRightHandedSystem ? !WW.invertZ : WW.invertZ, mW.REFRACTED_ENVIRONMENT_LOCAL_CUBE = WW.isCube && WW.boundingBoxSize) : mW.REFRACTED_ENVIRONMENT = !1
                } else mW.REFRACTED_BACKGROUND = !1, mW.REFRACTED_LIGHTS = !1, mW.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? mW.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : mW.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === NW.d.LIGHTFALLOFF_STANDARD ? (mW.USEPHYSICALLIGHTFALLOFF = !1, mW.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === NW.d.LIGHTFALLOFF_GLTF ? (mW.USEPHYSICALLIGHTFALLOFF = !1, mW.USEGLTFLIGHTFALLOFF = !0) : (mW.USEPHYSICALLIGHTFALLOFF = !0, mW.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? mW.TWOSIDEDLIGHTING = !0 : mW.TWOSIDEDLIGHTING = !1, mW.MIRRORED = !!cW._mirroredCameraPosition, mW.SPECULARAA = wW.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(mW._areTexturesDirty || mW._areMiscDirty) && (mW.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, mW.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, mW.ALPHABLEND = this.needAlphaBlendingForMesh(iW)), mW._areTexturesDirty && (mW.TEXTURE_REPETITION_MODE = wW.version > 1 || wW.isWebGPU ? this.textureRepetitionMode : 0), mW._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(mW), mW.FORCENORMALFORWARD = this._forceNormalForward, mW.RADIANCEOCCLUSION = this._useRadianceOcclusion, mW.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && WW._noiseTextures[cW.uniqueId] && rW.e.ReflectionTextureEnabled ? (mW.ANISOTROPIC = !0, iW.isVerticesDataPresent(pW.k.TangentKind) || (mW._needUVs = !0, mW.MAINUV1 = !0), this._useGltfStyleAnisotropy && (mW.USE_GLTF_STYLE_ANISOTROPY = !0), mW.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, mW.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (mW.ANISOTROPIC = !1, mW.USE_GLTF_STYLE_ANISOTROPY = !1, mW.ANISOTROPIC_BASE = !1, mW.ANISOTROPIC_COAT = !1), mW.THIN_FILM = this.thinFilmWeight > 0, mW.IRIDESCENCE = this.thinFilmWeight > 0, mW.DISPERSION = this.transmissionDispersionScale > 0, mW.SCATTERING = this.hasScattering;
            if (mW.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, mW.TRANSMISSION_SLAB = this.transmissionWeight > 0, mW.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, mW.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !mW.PREPASS && (mW.SUBSURFACE_SLAB || mW.TRANSMISSION_SLAB_VOLUME)) {
              let WW = !1;
              if (!this.sssIrradianceTexture && cW.geometryBufferRenderer) {
                const iW = cW.geometryBufferRenderer.getTextureIndex(Xi.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = cW.geometryBufferRenderer.getGBuffer().textures[iW], WW = !0
              }
              if (!this.sssDepthTexture && cW.geometryBufferRenderer) {
                const iW = cW.geometryBufferRenderer.getTextureIndex(Xi.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = cW.geometryBufferRenderer.getGBuffer().textures[iW], WW = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (mW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, WW && (mW.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            mW.FUZZ = this.fuzzWeight > 0 && rW.e.ReflectionTextureEnabled, mW.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, mW.FUZZ ? (iW.isVerticesDataPresent(pW.k.TangentKind) || (mW._needUVs = !0, mW.MAINUV1 = !0), this._environmentFuzzBRDFTexture = vW(this.bD()), mW.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, mW.FUZZENVIRONMENTBRDF = !1, mW.FUZZ_IBL_SAMPLES = 0), mW._areMiscDirty && ((0, FW.Z)(iW, cW, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(iW), mW, this._applyDecalMapAfterDetailMap, this._useVertexPulling, OW, this._isVertexOutputInvariant), mW.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !iW.isVerticesDataPresent(pW.k.NormalKind), mW.DEBUGMODE = this._debugMode), (0, FW.O)(cW, wW, this, mW, !!EW, PW, LW), this._eventInfo.defines = mW, this._eventInfo.mesh = iW, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, FW.M)(iW, mW, !0, !0, !0, this._transparencyMode !== NW.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, iW = new WeakMap, mW = new WeakMap, EW = new WeakMap, PW = new WeakMap, LW = new WeakMap, cW = new WeakMap, wW = new WeakMap, tW = new WeakMap, ZW = new WeakMap, xW = new WeakMap, lW = new WeakMap, AW = new WeakMap, bW = new WeakMap, jW = new WeakMap, UW = new WeakMap, kW = new WeakMap, sW = new WeakMap, MW = new WeakMap, KW = new WeakMap, SW = new WeakMap, YW = new WeakMap, yW = new WeakMap, uW = new WeakMap, oW = new WeakMap, dW = new WeakMap, eW = new WeakMap, DW = new WeakMap, fW = new WeakMap, CW = new WeakMap, XW = new WeakMap, BW = new WeakMap, GW = new WeakMap, aW = new WeakMap, QW = new WeakMap, Wi = new WeakMap, ii = new WeakMap, Oi = new WeakMap, mi = new WeakMap, Ei = new WeakMap, Ni = new WeakMap, Pi = new WeakMap, Li = new WeakMap, ci = new WeakMap, wi = new WeakMap, Ai = new WeakMap, bi = new WeakMap, ji = new WeakMap, Ui = new WeakMap, ki = new WeakMap, si = new WeakMap, Mi = new WeakMap, Ki = new WeakMap, Si = new WeakMap, Ti = new WeakMap, Ji = new WeakMap, Hi = new WeakMap, ni = new WeakMap, ui = new WeakMap, oi = new WeakMap, di = new WeakMap, ei = new WeakMap, vi = new WeakMap, gi = new WeakMap, Di = new WeakMap, Vi = new WeakMap, fi = new WeakMap, Ci = new WeakMap, Bi = new WeakMap, Ri = new WeakMap, ri = new WeakMap, zi = new WeakMap, WO = new WeakMap, iO = new WeakMap, OO = new WeakMap, mO = new WeakMap, EO = new WeakMap, NO = new WeakMap, PO = new WeakMap, LO = new WeakMap, cO = new WeakMap, wO = new WeakMap, tO = new WeakMap, ZO = new WeakMap, xO = new WeakMap, lO = new WeakMap, AO = new WeakMap, bO = new WeakMap, jO = new WeakMap, UO = new WeakMap, kO = new WeakMap, sO = new WeakMap, MO = new WeakMap, KO = new WeakMap, SO = new WeakMap, YO = new WeakMap, yO = new WeakMap, TO = new WeakMap, JO = new WeakMap, hO = new WeakMap, HO = new WeakMap, nO = new WeakMap, uO = new WeakMap, (() => {
          const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(eE[Symbol.metadata] ?? null) : void 0;
          oO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], vO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], XO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], BO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], qO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], RO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], GO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], aO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], zO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], FO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], QO = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Wm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], im = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Om = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], mm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Em = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Nm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Pm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Lm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], cm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], wm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], tm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Zm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], xm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], lm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Am = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], bm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], jm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Um = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], km = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], sm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Mm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Km = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Sm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Ym = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], ym = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Tm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Jm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], hm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Hm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], nm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], um = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], om = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], dm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], em = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], gm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Dm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Vm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], pm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], fm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Cm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Xm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Bm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], qm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Rm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Gm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Im = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], am = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], rm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], zm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Fm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], Qm = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], iE = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], OE = [(0, JW.d)("_markAllSubMeshesAsTexturesDirty")], mE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], EE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], NE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], LE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], cE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], wE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], tE = [(0, JW.M)()], ZE = [(0, JW.M)()], xE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], lE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], AE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], bE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], jE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsLightsDirty")], UE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], kE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsLightsDirty")], sE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ME = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], KE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], SE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], YE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], yE = [(0, JW.h)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], hE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], HE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], nE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], uE = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], oE = [(0, JW.h)("_markAllSubMeshesAsMiscDirty")], dE = [(0, JW.M)()], (0, TW.e)(WW, null, oO, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseWeight" in WW,
              get: WW => WW.baseWeight,
              set: (WW, iW) => {
                WW.baseWeight = iW
              }
            },
            metadata: iW
          }, gE, DE), (0, TW.e)(WW, null, dO, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseWeightTexture" in WW,
              get: WW => WW.baseWeightTexture,
              set: (WW, iW) => {
                WW.baseWeightTexture = iW
              }
            },
            metadata: iW
          }, VE, pE), (0, TW.e)(WW, null, eO, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseColor" in WW,
              get: WW => WW.baseColor,
              set: (WW, iW) => {
                WW.baseColor = iW
              }
            },
            metadata: iW
          }, fE, CE), (0, TW.e)(WW, null, vO, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseColorTexture" in WW,
              get: WW => WW.baseColorTexture,
              set: (WW, iW) => {
                WW.baseColorTexture = iW
              }
            },
            metadata: iW
          }, XE, BE), (0, TW.e)(WW, null, gO, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseDiffuseRoughness" in WW,
              get: WW => WW.baseDiffuseRoughness,
              set: (WW, iW) => {
                WW.baseDiffuseRoughness = iW
              }
            },
            metadata: iW
          }, qE, RE), (0, TW.e)(WW, null, DO, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseDiffuseRoughnessTexture" in WW,
              get: WW => WW.baseDiffuseRoughnessTexture,
              set: (WW, iW) => {
                WW.baseDiffuseRoughnessTexture = iW
              }
            },
            metadata: iW
          }, GE, IE), (0, TW.e)(WW, null, VO, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseMetalness" in WW,
              get: WW => WW.baseMetalness,
              set: (WW, iW) => {
                WW.baseMetalness = iW
              }
            },
            metadata: iW
          }, aE, rE), (0, TW.e)(WW, null, pO, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "baseMetalnessTexture" in WW,
              get: WW => WW.baseMetalnessTexture,
              set: (WW, iW) => {
                WW.baseMetalnessTexture = iW
              }
            },
            metadata: iW
          }, zE, FE), (0, TW.e)(WW, null, fO, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularWeight" in WW,
              get: WW => WW.specularWeight,
              set: (WW, iW) => {
                WW.specularWeight = iW
              }
            },
            metadata: iW
          }, QE, WN), (0, TW.e)(WW, null, CO, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularWeightTexture" in WW,
              get: WW => WW.specularWeightTexture,
              set: (WW, iW) => {
                WW.specularWeightTexture = iW
              }
            },
            metadata: iW
          }, iN, ON), (0, TW.e)(WW, null, XO, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularColor" in WW,
              get: WW => WW.specularColor,
              set: (WW, iW) => {
                WW.specularColor = iW
              }
            },
            metadata: iW
          }, mN, EN), (0, TW.e)(WW, null, BO, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularColorTexture" in WW,
              get: WW => WW.specularColorTexture,
              set: (WW, iW) => {
                WW.specularColorTexture = iW
              }
            },
            metadata: iW
          }, NN, PN), (0, TW.e)(WW, null, qO, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughness" in WW,
              get: WW => WW.specularRoughness,
              set: (WW, iW) => {
                WW.specularRoughness = iW
              }
            },
            metadata: iW
          }, LN, cN), (0, TW.e)(WW, null, RO, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughnessTexture" in WW,
              get: WW => WW.specularRoughnessTexture,
              set: (WW, iW) => {
                WW.specularRoughnessTexture = iW
              }
            },
            metadata: iW
          }, wN, tN), (0, TW.e)(WW, null, GO, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughnessAnisotropy" in WW,
              get: WW => WW.specularRoughnessAnisotropy,
              set: (WW, iW) => {
                WW.specularRoughnessAnisotropy = iW
              }
            },
            metadata: iW
          }, ZN, xN), (0, TW.e)(WW, null, IO, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularRoughnessAnisotropyTexture" in WW,
              get: WW => WW.specularRoughnessAnisotropyTexture,
              set: (WW, iW) => {
                WW.specularRoughnessAnisotropyTexture = iW
              }
            },
            metadata: iW
          }, lN, AN), (0, TW.e)(WW, null, aO, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularIor" in WW,
              get: WW => WW.specularIor,
              set: (WW, iW) => {
                WW.specularIor = iW
              }
            },
            metadata: iW
          }, bN, jN), (0, TW.e)(WW, null, rO, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionWeight" in WW,
              get: WW => WW.transmissionWeight,
              set: (WW, iW) => {
                WW.transmissionWeight = iW
              }
            },
            metadata: iW
          }, UN, kN), (0, TW.e)(WW, null, zO, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionWeightTexture" in WW,
              get: WW => WW.transmissionWeightTexture,
              set: (WW, iW) => {
                WW.transmissionWeightTexture = iW
              }
            },
            metadata: iW
          }, sN, MN), (0, TW.e)(WW, null, FO, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionColor" in WW,
              get: WW => WW.transmissionColor,
              set: (WW, iW) => {
                WW.transmissionColor = iW
              }
            },
            metadata: iW
          }, KN, SN), (0, TW.e)(WW, null, QO, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionColorTexture" in WW,
              get: WW => WW.transmissionColorTexture,
              set: (WW, iW) => {
                WW.transmissionColorTexture = iW
              }
            },
            metadata: iW
          }, YN, yN), (0, TW.e)(WW, null, Wm, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDepth" in WW,
              get: WW => WW.transmissionDepth,
              set: (WW, iW) => {
                WW.transmissionDepth = iW
              }
            },
            metadata: iW
          }, TN, JN), (0, TW.e)(WW, null, im, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDepthTexture" in WW,
              get: WW => WW.transmissionDepthTexture,
              set: (WW, iW) => {
                WW.transmissionDepthTexture = iW
              }
            },
            metadata: iW
          }, hN, HN), (0, TW.e)(WW, null, Om, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionScatter" in WW,
              get: WW => WW.transmissionScatter,
              set: (WW, iW) => {
                WW.transmissionScatter = iW
              }
            },
            metadata: iW
          }, nN, uN), (0, TW.e)(WW, null, mm, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionScatterTexture" in WW,
              get: WW => WW.transmissionScatterTexture,
              set: (WW, iW) => {
                WW.transmissionScatterTexture = iW
              }
            },
            metadata: iW
          }, oN, dN), (0, TW.e)(WW, null, Em, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionScatterAnisotropy" in WW,
              get: WW => WW.transmissionScatterAnisotropy,
              set: (WW, iW) => {
                WW.transmissionScatterAnisotropy = iW
              }
            },
            metadata: iW
          }, eN, vN), (0, TW.e)(WW, null, Nm, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDispersionScale" in WW,
              get: WW => WW.transmissionDispersionScale,
              set: (WW, iW) => {
                WW.transmissionDispersionScale = iW
              }
            },
            metadata: iW
          }, gN, DN), (0, TW.e)(WW, null, Pm, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDispersionScaleTexture" in WW,
              get: WW => WW.transmissionDispersionScaleTexture,
              set: (WW, iW) => {
                WW.transmissionDispersionScaleTexture = iW
              }
            },
            metadata: iW
          }, VN, pN), (0, TW.e)(WW, null, Lm, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: WW => "transmissionDispersionAbbeNumber" in WW,
              get: WW => WW.transmissionDispersionAbbeNumber,
              set: (WW, iW) => {
                WW.transmissionDispersionAbbeNumber = iW
              }
            },
            metadata: iW
          }, fN, CN), (0, TW.e)(WW, null, cm, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceWeight" in WW,
              get: WW => WW.subsurfaceWeight,
              set: (WW, iW) => {
                WW.subsurfaceWeight = iW
              }
            },
            metadata: iW
          }, XN, BN), (0, TW.e)(WW, null, wm, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceWeightTexture" in WW,
              get: WW => WW.subsurfaceWeightTexture,
              set: (WW, iW) => {
                WW.subsurfaceWeightTexture = iW
              }
            },
            metadata: iW
          }, qN, RN), (0, TW.e)(WW, null, tm, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceColor" in WW,
              get: WW => WW.subsurfaceColor,
              set: (WW, iW) => {
                WW.subsurfaceColor = iW
              }
            },
            metadata: iW
          }, GN, IN), (0, TW.e)(WW, null, Zm, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceColorTexture" in WW,
              get: WW => WW.subsurfaceColorTexture,
              set: (WW, iW) => {
                WW.subsurfaceColorTexture = iW
              }
            },
            metadata: iW
          }, aN, rN), (0, TW.e)(WW, null, xm, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceRadius" in WW,
              get: WW => WW.subsurfaceRadius,
              set: (WW, iW) => {
                WW.subsurfaceRadius = iW
              }
            },
            metadata: iW
          }, zN, FN), (0, TW.e)(WW, null, lm, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceRadiusScale" in WW,
              get: WW => WW.subsurfaceRadiusScale,
              set: (WW, iW) => {
                WW.subsurfaceRadiusScale = iW
              }
            },
            metadata: iW
          }, QN, WP), (0, TW.e)(WW, null, Am, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceRadiusScaleTexture" in WW,
              get: WW => WW.subsurfaceRadiusScaleTexture,
              set: (WW, iW) => {
                WW.subsurfaceRadiusScaleTexture = iW
              }
            },
            metadata: iW
          }, iP, OP), (0, TW.e)(WW, null, bm, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "subsurfaceScatterAnisotropy" in WW,
              get: WW => WW.subsurfaceScatterAnisotropy,
              set: (WW, iW) => {
                WW.subsurfaceScatterAnisotropy = iW
              }
            },
            metadata: iW
          }, mP, EP), (0, TW.e)(WW, null, jm, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatWeight" in WW,
              get: WW => WW.coatWeight,
              set: (WW, iW) => {
                WW.coatWeight = iW
              }
            },
            metadata: iW
          }, NP, PP), (0, TW.e)(WW, null, Um, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatWeightTexture" in WW,
              get: WW => WW.coatWeightTexture,
              set: (WW, iW) => {
                WW.coatWeightTexture = iW
              }
            },
            metadata: iW
          }, LP, cP), (0, TW.e)(WW, null, km, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatColor" in WW,
              get: WW => WW.coatColor,
              set: (WW, iW) => {
                WW.coatColor = iW
              }
            },
            metadata: iW
          }, wP, tP), (0, TW.e)(WW, null, sm, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatColorTexture" in WW,
              get: WW => WW.coatColorTexture,
              set: (WW, iW) => {
                WW.coatColorTexture = iW
              }
            },
            metadata: iW
          }, ZP, xP), (0, TW.e)(WW, null, Mm, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughness" in WW,
              get: WW => WW.coatRoughness,
              set: (WW, iW) => {
                WW.coatRoughness = iW
              }
            },
            metadata: iW
          }, lP, AP), (0, TW.e)(WW, null, Km, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughnessTexture" in WW,
              get: WW => WW.coatRoughnessTexture,
              set: (WW, iW) => {
                WW.coatRoughnessTexture = iW
              }
            },
            metadata: iW
          }, bP, jP), (0, TW.e)(WW, null, Sm, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughnessAnisotropy" in WW,
              get: WW => WW.coatRoughnessAnisotropy,
              set: (WW, iW) => {
                WW.coatRoughnessAnisotropy = iW
              }
            },
            metadata: iW
          }, UP, kP), (0, TW.e)(WW, null, Ym, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatRoughnessAnisotropyTexture" in WW,
              get: WW => WW.coatRoughnessAnisotropyTexture,
              set: (WW, iW) => {
                WW.coatRoughnessAnisotropyTexture = iW
              }
            },
            metadata: iW
          }, sP, MP), (0, TW.e)(WW, null, ym, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatIor" in WW,
              get: WW => WW.coatIor,
              set: (WW, iW) => {
                WW.coatIor = iW
              }
            },
            metadata: iW
          }, KP, SP), (0, TW.e)(WW, null, Tm, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatDarkening" in WW,
              get: WW => WW.coatDarkening,
              set: (WW, iW) => {
                WW.coatDarkening = iW
              }
            },
            metadata: iW
          }, YP, yP), (0, TW.e)(WW, null, Jm, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "coatDarkeningTexture" in WW,
              get: WW => WW.coatDarkeningTexture,
              set: (WW, iW) => {
                WW.coatDarkeningTexture = iW
              }
            },
            metadata: iW
          }, TP, JP), (0, TW.e)(WW, null, hm, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzWeight" in WW,
              get: WW => WW.fuzzWeight,
              set: (WW, iW) => {
                WW.fuzzWeight = iW
              }
            },
            metadata: iW
          }, hP, HP), (0, TW.e)(WW, null, Hm, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzWeightTexture" in WW,
              get: WW => WW.fuzzWeightTexture,
              set: (WW, iW) => {
                WW.fuzzWeightTexture = iW
              }
            },
            metadata: iW
          }, nP, uP), (0, TW.e)(WW, null, nm, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzColor" in WW,
              get: WW => WW.fuzzColor,
              set: (WW, iW) => {
                WW.fuzzColor = iW
              }
            },
            metadata: iW
          }, oP, dP), (0, TW.e)(WW, null, um, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzColorTexture" in WW,
              get: WW => WW.fuzzColorTexture,
              set: (WW, iW) => {
                WW.fuzzColorTexture = iW
              }
            },
            metadata: iW
          }, eP, vP), (0, TW.e)(WW, null, om, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzRoughness" in WW,
              get: WW => WW.fuzzRoughness,
              set: (WW, iW) => {
                WW.fuzzRoughness = iW
              }
            },
            metadata: iW
          }, gP, DP), (0, TW.e)(WW, null, dm, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "fuzzRoughnessTexture" in WW,
              get: WW => WW.fuzzRoughnessTexture,
              set: (WW, iW) => {
                WW.fuzzRoughnessTexture = iW
              }
            },
            metadata: iW
          }, VP, pP), (0, TW.e)(WW, null, em, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryThinWalled" in WW,
              get: WW => WW.geometryThinWalled,
              set: (WW, iW) => {
                WW.geometryThinWalled = iW
              }
            },
            metadata: iW
          }, fP, CP), (0, TW.e)(WW, null, gm, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryNormalTexture" in WW,
              get: WW => WW.geometryNormalTexture,
              set: (WW, iW) => {
                WW.geometryNormalTexture = iW
              }
            },
            metadata: iW
          }, XP, BP), (0, TW.e)(WW, null, Dm, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryTangent" in WW,
              get: WW => WW.geometryTangent,
              set: (WW, iW) => {
                WW.geometryTangent = iW
              }
            },
            metadata: iW
          }, qP, RP), (0, TW.e)(WW, null, Vm, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryTangentTexture" in WW,
              get: WW => WW.geometryTangentTexture,
              set: (WW, iW) => {
                WW.geometryTangentTexture = iW
              }
            },
            metadata: iW
          }, GP, IP), (0, TW.e)(WW, null, pm, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryCoatNormalTexture" in WW,
              get: WW => WW.geometryCoatNormalTexture,
              set: (WW, iW) => {
                WW.geometryCoatNormalTexture = iW
              }
            },
            metadata: iW
          }, aP, rP), (0, TW.e)(WW, null, fm, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryCoatTangent" in WW,
              get: WW => WW.geometryCoatTangent,
              set: (WW, iW) => {
                WW.geometryCoatTangent = iW
              }
            },
            metadata: iW
          }, zP, FP), (0, TW.e)(WW, null, Cm, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryCoatTangentTexture" in WW,
              get: WW => WW.geometryCoatTangentTexture,
              set: (WW, iW) => {
                WW.geometryCoatTangentTexture = iW
              }
            },
            metadata: iW
          }, QP, WL), (0, TW.e)(WW, null, Xm, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryOpacity" in WW,
              get: WW => WW.geometryOpacity,
              set: (WW, iW) => {
                WW.geometryOpacity = iW
              }
            },
            metadata: iW
          }, iL, OL), (0, TW.e)(WW, null, Bm, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryOpacityTexture" in WW,
              get: WW => WW.geometryOpacityTexture,
              set: (WW, iW) => {
                WW.geometryOpacityTexture = iW
              }
            },
            metadata: iW
          }, mL, EL), (0, TW.e)(WW, null, qm, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryThickness" in WW,
              get: WW => WW.geometryThickness,
              set: (WW, iW) => {
                WW.geometryThickness = iW
              }
            },
            metadata: iW
          }, NL, PL), (0, TW.e)(WW, null, Rm, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "geometryThicknessTexture" in WW,
              get: WW => WW.geometryThicknessTexture,
              set: (WW, iW) => {
                WW.geometryThicknessTexture = iW
              }
            },
            metadata: iW
          }, LL, cL), (0, TW.e)(WW, null, Gm, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissionLuminance" in WW,
              get: WW => WW.emissionLuminance,
              set: (WW, iW) => {
                WW.emissionLuminance = iW
              }
            },
            metadata: iW
          }, wL, tL), (0, TW.e)(WW, null, Im, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissionColor" in WW,
              get: WW => WW.emissionColor,
              set: (WW, iW) => {
                WW.emissionColor = iW
              }
            },
            metadata: iW
          }, ZL, xL), (0, TW.e)(WW, null, am, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissionColorTexture" in WW,
              get: WW => WW.emissionColorTexture,
              set: (WW, iW) => {
                WW.emissionColorTexture = iW
              }
            },
            metadata: iW
          }, lL, AL), (0, TW.e)(WW, null, rm, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmWeight" in WW,
              get: WW => WW.thinFilmWeight,
              set: (WW, iW) => {
                WW.thinFilmWeight = iW
              }
            },
            metadata: iW
          }, bL, jL), (0, TW.e)(WW, null, zm, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmWeightTexture" in WW,
              get: WW => WW.thinFilmWeightTexture,
              set: (WW, iW) => {
                WW.thinFilmWeightTexture = iW
              }
            },
            metadata: iW
          }, UL, kL), (0, TW.e)(WW, null, Fm, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmThickness" in WW,
              get: WW => WW.thinFilmThickness,
              set: (WW, iW) => {
                WW.thinFilmThickness = iW
              }
            },
            metadata: iW
          }, sL, ML), (0, TW.e)(WW, null, Qm, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmThicknessMin" in WW,
              get: WW => WW.thinFilmThicknessMin,
              set: (WW, iW) => {
                WW.thinFilmThicknessMin = iW
              }
            },
            metadata: iW
          }, KL, SL), (0, TW.e)(WW, null, WE, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmThicknessTexture" in WW,
              get: WW => WW.thinFilmThicknessTexture,
              set: (WW, iW) => {
                WW.thinFilmThicknessTexture = iW
              }
            },
            metadata: iW
          }, YL, yL), (0, TW.e)(WW, null, iE, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: WW => "thinFilmIor" in WW,
              get: WW => WW.thinFilmIor,
              set: (WW, iW) => {
                WW.thinFilmIor = iW
              }
            },
            metadata: iW
          }, TL, JL), (0, TW.e)(WW, null, OE, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "ambientOcclusionTexture" in WW,
              get: WW => WW.ambientOcclusionTexture,
              set: (WW, iW) => {
                WW.ambientOcclusionTexture = iW
              }
            },
            metadata: iW
          }, hL, HL), (0, TW.e)(WW, null, mE, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: WW => "directIntensity" in WW,
              get: WW => WW.directIntensity,
              set: (WW, iW) => {
                WW.directIntensity = iW
              }
            },
            metadata: iW
          }, nL, uL), (0, TW.e)(WW, null, EE, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: WW => "environmentIntensity" in WW,
              get: WW => WW.environmentIntensity,
              set: (WW, iW) => {
                WW.environmentIntensity = iW
              }
            },
            metadata: iW
          }, oL, dL), (0, TW.e)(WW, null, NE, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useSpecularWeightFromTextureAlpha" in WW,
              get: WW => WW.useSpecularWeightFromTextureAlpha,
              set: (WW, iW) => {
                WW.useSpecularWeightFromTextureAlpha = iW
              }
            },
            metadata: iW
          }, eL, vL), (0, TW.e)(WW, null, PE, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceAlphaTest" in WW,
              get: WW => WW.forceAlphaTest,
              set: (WW, iW) => {
                WW.forceAlphaTest = iW
              }
            },
            metadata: iW
          }, gL, DL), (0, TW.e)(WW, null, LE, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaCutOff" in WW,
              get: WW => WW.alphaCutOff,
              set: (WW, iW) => {
                WW.alphaCutOff = iW
              }
            },
            metadata: iW
          }, VL, pL), (0, TW.e)(WW, null, cE, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAmbientOcclusionFromMetallicTextureRed" in WW,
              get: WW => WW.useAmbientOcclusionFromMetallicTextureRed,
              set: (WW, iW) => {
                WW.useAmbientOcclusionFromMetallicTextureRed = iW
              }
            },
            metadata: iW
          }, fL, CL), (0, TW.e)(WW, null, wE, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAmbientInGrayScale" in WW,
              get: WW => WW.useAmbientInGrayScale,
              set: (WW, iW) => {
                WW.useAmbientInGrayScale = iW
              }
            },
            metadata: iW
          }, XL, BL), (0, TW.e)(WW, null, tE, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: WW => "usePhysicalLightFalloff" in WW,
              get: WW => WW.usePhysicalLightFalloff
            },
            metadata: iW
          }, null, vE), (0, TW.e)(WW, null, ZE, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: WW => "useGLTFLightFalloff" in WW,
              get: WW => WW.useGLTFLightFalloff
            },
            metadata: iW
          }, null, vE), (0, TW.e)(WW, null, xE, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "useObjectSpaceNormalMap" in WW,
              get: WW => WW.useObjectSpaceNormalMap,
              set: (WW, iW) => {
                WW.useObjectSpaceNormalMap = iW
              }
            },
            metadata: iW
          }, qL, RL), (0, TW.e)(WW, null, lE, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallax" in WW,
              get: WW => WW.useParallax,
              set: (WW, iW) => {
                WW.useParallax = iW
              }
            },
            metadata: iW
          }, GL, IL), (0, TW.e)(WW, null, AE, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallaxOcclusion" in WW,
              get: WW => WW.useParallaxOcclusion,
              set: (WW, iW) => {
                WW.useParallaxOcclusion = iW
              }
            },
            metadata: iW
          }, aL, rL), (0, TW.e)(WW, null, bE, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: WW => "parallaxScaleBias" in WW,
              get: WW => WW.parallaxScaleBias,
              set: (WW, iW) => {
                WW.parallaxScaleBias = iW
              }
            },
            metadata: iW
          }, zL, FL), (0, TW.e)(WW, null, jE, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "disableLighting" in WW,
              get: WW => WW.disableLighting,
              set: (WW, iW) => {
                WW.disableLighting = iW
              }
            },
            metadata: iW
          }, QL, Wc), (0, TW.e)(WW, null, UE, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceIrradianceInFragment" in WW,
              get: WW => WW.forceIrradianceInFragment,
              set: (WW, iW) => {
                WW.forceIrradianceInFragment = iW
              }
            },
            metadata: iW
          }, ic, Oc), (0, TW.e)(WW, null, kE, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: WW => "maxSimultaneousLights" in WW,
              get: WW => WW.maxSimultaneousLights,
              set: (WW, iW) => {
                WW.maxSimultaneousLights = iW
              }
            },
            metadata: iW
          }, mc, Ec), (0, TW.e)(WW, null, sE, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapX" in WW,
              get: WW => WW.invertNormalMapX,
              set: (WW, iW) => {
                WW.invertNormalMapX = iW
              }
            },
            metadata: iW
          }, Nc, Pc), (0, TW.e)(WW, null, ME, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapY" in WW,
              get: WW => WW.invertNormalMapY,
              set: (WW, iW) => {
                WW.invertNormalMapY = iW
              }
            },
            metadata: iW
          }, Lc, cc), (0, TW.e)(WW, null, KE, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "twoSidedLighting" in WW,
              get: WW => WW.twoSidedLighting,
              set: (WW, iW) => {
                WW.twoSidedLighting = iW
              }
            },
            metadata: iW
          }, wc, tc), (0, TW.e)(WW, null, SE, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAlphaFresnel" in WW,
              get: WW => WW.useAlphaFresnel,
              set: (WW, iW) => {
                WW.useAlphaFresnel = iW
              }
            },
            metadata: iW
          }, Zc, xc), (0, TW.e)(WW, null, YE, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: WW => "useLinearAlphaFresnel" in WW,
              get: WW => WW.useLinearAlphaFresnel,
              set: (WW, iW) => {
                WW.useLinearAlphaFresnel = iW
              }
            },
            metadata: iW
          }, lc, Ac), (0, TW.e)(WW, null, yE, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "environmentBRDFTexture" in WW,
              get: WW => WW.environmentBRDFTexture,
              set: (WW, iW) => {
                WW.environmentBRDFTexture = iW
              }
            },
            metadata: iW
          }, bc, jc), (0, TW.e)(WW, null, TE, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: WW => "forceNormalForward" in WW,
              get: WW => WW.forceNormalForward,
              set: (WW, iW) => {
                WW.forceNormalForward = iW
              }
            },
            metadata: iW
          }, Uc, kc), (0, TW.e)(WW, null, JE, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: WW => "enableSpecularAntiAliasing" in WW,
              get: WW => WW.enableSpecularAntiAliasing,
              set: (WW, iW) => {
                WW.enableSpecularAntiAliasing = iW
              }
            },
            metadata: iW
          }, sc, Mc), (0, TW.e)(WW, null, hE, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useHorizonOcclusion" in WW,
              get: WW => WW.useHorizonOcclusion,
              set: (WW, iW) => {
                WW.useHorizonOcclusion = iW
              }
            },
            metadata: iW
          }, Kc, Sc), (0, TW.e)(WW, null, HE, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useRadianceOcclusion" in WW,
              get: WW => WW.useRadianceOcclusion,
              set: (WW, iW) => {
                WW.useRadianceOcclusion = iW
              }
            },
            metadata: iW
          }, Yc, yc), (0, TW.e)(WW, null, nE, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: WW => "unlit" in WW,
              get: WW => WW.unlit,
              set: (WW, iW) => {
                WW.unlit = iW
              }
            },
            metadata: iW
          }, Tc, Jc), (0, TW.e)(WW, null, uE, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "applyDecalMapAfterDetailMap" in WW,
              get: WW => WW.applyDecalMapAfterDetailMap,
              set: (WW, iW) => {
                WW.applyDecalMapAfterDetailMap = iW
              }
            },
            metadata: iW
          }, hc, Hc), (0, TW.e)(WW, null, oE, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "debugMode" in WW,
              get: WW => WW.debugMode,
              set: (WW, iW) => {
                WW.debugMode = iW
              }
            },
            metadata: iW
          }, nc, uc), (0, TW.e)(WW, null, dE, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: WW => "transparencyMode" in WW,
              get: WW => WW.transparencyMode
            },
            metadata: iW
          }, null, vE), iW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iW
          })
        })(), WW.SSS_QUALITY_LOW = 0, WW.SSS_QUALITY_MEDIUM = 1, WW.SSS_QUALITY_HIGH = 2, WW._noiseTextures = {}, WW.ForceGLSL = !1, WW._ShaderLoader = new xi.d((() => [Promise.all([OW.e(635), OW.e(698)]).then((() => OW(64891))), Promise.all([OW.e(640), OW.e(636), OW.e(697), OW.e(702)]).then((() => OW(64908)))]), (() => [Promise.all([OW.e(654), OW.e(656), OW.e(701)]).then((() => OW(64954))), Promise.all([OW.e(654), OW.e(657), OW.e(700), OW.e(703)]).then((() => OW(64963)))])), WW
      })(),
      iO = !1;
    iO || (iO = !0, (0, IW.g)(), (0, Bi.h)("BABYLON.OpenPBRMaterial", WO));
    var OO = OW(38276);
    class mO {
      constructor(WW) {
        this.name = vi.b.NAME_PROCEDURALTEXTURE, this.rb = WW
      }
      register() {
        this.rb._beforeClearStage.registerStep(vi.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.rb.proceduralTexturesEnabled) {
          yi.f.StartPerformanceCounter("Procedural textures", this.rb.proceduralTextures.length > 0);
          for (let WW = 0; WW < this.rb.proceduralTextures.length; WW++) {
            const iW = this.rb.proceduralTextures[WW];
            iW._shouldRender() && iW.render()
          }
          yi.f.EndPerformanceCounter("Procedural textures", this.rb.proceduralTextures.length > 0)
        }
      }
    }
    var EO = OW(41840);
    let NO = (() => {
      var WW;
      let iW, mW, EW, PW, LW, cW = nW.h,
        wW = [],
        tW = [],
        ZW = [],
        xW = [],
        lW = [],
        AW = [],
        jW = [],
        UW = [],
        kW = [];
      return WW = class extends cW {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(WW, iW, OW, mW) {
          let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, mW, !NW), this.isEnabled = ((0, TW.g)(this, wW), (0, TW.g)(this, tW, !0)), this.autoClear = ((0, TW.g)(this, ZW), (0, TW.g)(this, xW, !0)), this.onGenerated = (0, TW.g)(this, lW), this.onGeneratedObservable = new OO.e, this.onBeforeGenerationObservable = new OO.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, TW.g)(this, AW, void 0), this._drawWrapper = (0, TW.g)(this, jW), this._textures = {}, this._size = (0, TW.g)(this, UW, void 0), this._textureType = (0, TW.g)(this, kW), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === EW || EW instanceof nW.h ? (this._options = {}, this._fallbackTexture = EW) : (this._options = EW, this._fallbackTexture = EW.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let cW = (mW = this.bD() || bW.d.LastCreatedScene)._getComponent(vi.b.NAME_PROCEDURALTEXTURE);
          cW || (cW = new mO(mW), mW.MmW(cW)), this._options.skipSceneRegistration || mW.proceduralTextures.push(this), this._fullEngine = mW.VA(), this.name = WW, this.isRenderTarget = !0, this._size = iW, this._textureType = LW, this._generateMipMaps = NW, this._drawWrapper = new EO.d(this._fullEngine), this.setFragment(OW);
          const sW = this._createRtWrapper(PW, iW, NW, LW);
          this._texture = sW.texture;
          const MW = [];
          MW.push(1, 1), MW.push(-1, 1), MW.push(-1, -1), MW.push(1, -1), this._vertexBuffers[pW.k.PositionKind] = new pW.k(this._fullEngine, MW, pW.k.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(WW, iW, OW, mW) {
          return WW ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(iW, {
            generateMipMaps: OW,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: mW,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(iW, {
            generateMipMaps: OW,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: mW,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(WW) {
          this._drawWrapper.effect = WW
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((WW => {
            this._contentData = this.readPixels(0, 0, WW), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const WW = this._fullEngine,
            iW = [];
          iW.push(0), iW.push(1), iW.push(2), iW.push(0), iW.push(2), iW.push(3), this._indexBuffer = WW.createIndexBuffer(iW)
        }
        _rebuild() {
          const WW = this._vertexBuffers[pW.k.PositionKind];
          WW && WW._rebuild(), this._createIndexBuffer(), this.refreshRate === Ti.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Ti.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(WW) {
          if (this.isReady()) return void WW(this);
          const iW = this.getEffect();
          iW && iW.executeWhenCompiled((() => {
            WW(this)
          }))
        }
        isReady() {
          const WW = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const iW = this._getDefines();
          if (this._drawWrapper.effect && iW === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const mW = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== iW && (this._cachedDefines = iW, this._drawWrapper.effect = WW.createEffect(mW, [pW.k.PositionKind], this._uniforms, this._samplers, iW, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([OW.e(706).then((() => OW(65029))), this._options.extraInitializationsAsync()]) : await Promise.all([OW.e(707).then((() => OW(65038))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await OW.e(706).then((() => OW(65029))) : await OW.e(707).then((() => OW(65038)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(WW) {
          this._fragment = WW
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(WW) {
          this._refreshRate = WW, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(WW, iW) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const OW = this._texture.isCube;
          this._rtWrapper.dispose();
          const mW = this._createRtWrapper(OW, WW, iW, this._textureType);
          this._texture = mW.texture, this._size = WW, this._generateMipMaps = iW
        }
        _checkUniform(WW) {
          -1 === this._uniforms.indexOf(WW) && this._uniforms.push(WW)
        }
        setTexture(WW, iW) {
          return -1 === this._samplers.indexOf(WW) && this._samplers.push(WW), this._textures[WW] = iW, this
        }
        setFloat(WW, iW) {
          return this._checkUniform(WW), this._floats[WW] = iW, this
        }
        setInt(WW, iW) {
          return this._checkUniform(WW), this._ints[WW] = iW, this
        }
        setFloats(WW, iW) {
          return this._checkUniform(WW), this._floatsArrays[WW] = iW, this
        }
        setColor3(WW, iW) {
          return this._checkUniform(WW), this._colors3[WW] = iW, this
        }
        setColor4(WW, iW) {
          return this._checkUniform(WW), this._colors4[WW] = iW, this
        }
        setVector2(WW, iW) {
          return this._checkUniform(WW), this._vectors2[WW] = iW, this
        }
        setVector3(WW, iW) {
          return this._checkUniform(WW), this._vectors3[WW] = iW, this
        }
        setVector4(WW, iW) {
          return this._checkUniform(WW), this._vectors4[WW] = iW, this
        }
        setMatrix(WW, iW) {
          return this._checkUniform(WW), this._matrices[WW] = iW, this
        }
        render(WW) {
          const iW = this.bD();
          if (!iW) return;
          const OW = this._fullEngine;
          if (OW.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), OW.setState(!1), !this.nodeMaterialSource) {
            for (const WW in this._textures) this._drawWrapper.effect.setTexture(WW, this._textures[WW]);
            for (const WW in this._ints) this._drawWrapper.effect.setInt(WW, this._ints[WW]);
            for (const WW in this._floats) this._drawWrapper.effect.setFloat(WW, this._floats[WW]);
            for (const WW in this._floatsArrays) this._drawWrapper.effect.setArray(WW, this._floatsArrays[WW]);
            for (const WW in this._colors3) this._drawWrapper.effect.setColor3(WW, this._colors3[WW]);
            for (const WW in this._colors4) {
              const iW = this._colors4[WW];
              this._drawWrapper.effect.setFloat4(WW, iW.r, iW.g, iW.b, iW.a)
            }
            for (const WW in this._vectors2) this._drawWrapper.effect.setVector2(WW, this._vectors2[WW]);
            for (const WW in this._vectors3) this._drawWrapper.effect.setVector3(WW, this._vectors3[WW]);
            for (const WW in this._vectors4) this._drawWrapper.effect.setVector4(WW, this._vectors4[WW]);
            for (const WW in this._matrices) this._drawWrapper.effect.setMatrix(WW, this._matrices[WW])
          }
          if (!this._texture || !this._rtWrapper) return;
          OW._enableGPUDebugMarkers && OW._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const mW = OW.currentViewport;
          if (this.isCube)
            for (let EW = 0; EW < 6; EW++) OW.bindFramebuffer(this._rtWrapper, EW, void 0, void 0, !0), OW.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", EW), this.autoClear && OW.clear(iW.clearColor, !0, !1, !1), OW.drawElementsType(NW.d.TriangleFillMode, 0, 6), OW.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let WW = 1;
            this._rtWrapper.is3D ? WW = this._rtWrapper.depth : this._rtWrapper.is2DArray && (WW = this._rtWrapper.layers);
            for (let mW = 0; mW < WW; mW++) {
              if (OW.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, mW), OW.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== WW ? mW / (WW - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", mW);
                for (const WW in this._textures) this._drawWrapper.effect.setTexture(WW, this._textures[WW])
              }
              this.autoClear && OW.clear(iW.clearColor, !0, !1, !1), OW.drawElementsType(NW.d.TriangleFillMode, 0, 6), OW.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          mW && OW.setViewport(mW), this.isCube && OW.generateMipMapsForCubemap(this._texture, !0), OW._enableGPUDebugMarkers && OW._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const iW = this.getSize(),
            OW = new WW(this.name, iW.width, this._fragment, this.bD(), this._fallbackTexture, this._generateMipMaps);
          return OW.hasAlpha = this.hasAlpha, OW.level = this.level, OW.coordinatesMode = this.coordinatesMode, OW
        }
        dispose() {
          const WW = this.bD();
          if (!WW) return;
          const iW = WW.proceduralTextures.indexOf(this);
          iW >= 0 && WW.proceduralTextures.splice(iW, 1);
          const OW = this._vertexBuffers[pW.k.PositionKind];
          OW && (OW.dispose(), this._vertexBuffers[pW.k.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const OW = "function" === typeof Symbol && Symbol.metadata ? Object.create(cW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, JW.M)()], mW = [(0, JW.M)()], EW = [(0, JW.M)()], PW = [(0, JW.M)()], LW = [(0, JW.M)()], (0, TW.e)(WW, null, LW, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: WW => "refreshRate" in WW,
            get: WW => WW.refreshRate
          },
          metadata: OW
        }, null, wW), (0, TW.e)(null, null, iW, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, iW) => {
              WW.isEnabled = iW
            }
          },
          metadata: OW
        }, tW, ZW), (0, TW.e)(null, null, mW, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: WW => "autoClear" in WW,
            get: WW => WW.autoClear,
            set: (WW, iW) => {
              WW.autoClear = iW
            }
          },
          metadata: OW
        }, xW, lW), (0, TW.e)(null, null, EW, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: WW => "_generateMipMaps" in WW,
            get: WW => WW._generateMipMaps,
            set: (WW, iW) => {
              WW._generateMipMaps = iW
            }
          },
          metadata: OW
        }, AW, jW), (0, TW.e)(null, null, PW, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: WW => "_size" in WW,
            get: WW => WW._size,
            set: (WW, iW) => {
              WW._size = iW
            }
          },
          metadata: OW
        }, UW, kW), OW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OW
        })
      })(), WW
    })();

    function PO(WW) {
      return "texture" in WW
    }

    function LO(WW) {
      return "value" in WW
    }
    async function cO(WW, iW, mW) {
      const EW = [iW.red, iW.green, iW.blue, iW.alpha],
        NW = [],
        PW = [];
      for (let OW = 0; OW < 4; OW++) {
        const WW = EW[OW];
        if (WW)
          if (PO(WW)) {
            if (WW.sourceChannel < 0 || WW.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let iW = NW.indexOf(WW.texture); - 1 === iW && (iW = NW.length, NW.push(WW.texture)), PW[OW] = iW
          } else {
            if (!LO(WW)) throw new Error("Invalid channel input configuration");
            if (WW.value < 0 || WW.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            PW[OW] = -1
          }
        else PW[OW] = -1
      }
      let LW = iW.outputSize;
      if (!LW && NW.length > 0) {
        let WW = 0;
        for (const iW of NW) {
          const OW = iW.getSize(),
            mW = Math.max(OW.width, OW.height);
          mW > WW && (WW = mW, LW = OW.width === OW.height ? WW : OW)
        }
      }
      LW = LW || 512;
      const cW = [],
        wW = new Set;
      for (let OW = 0; OW < 4; OW++) {
        const WW = EW[OW],
          iW = ["RED", "GREEN", "BLUE", "ALPHA"][OW];
        if (WW && PO(WW)) {
          cW.push(`${iW}_FROM_TEXTURE`);
          const WW = PW[OW];
          wW.add(WW)
        }
      }
      wW.forEach((WW => {
        cW.push(`USE_TEXTURE${WW}`)
      }));
      const tW = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: mW.VA().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            mW.VA().isWebGPU ? await Promise.all([OW.e(704).then((() => OW(65017)))]) : await Promise.all([OW.e(705).then((() => OW(65021)))])
          },
          skipSceneRegistration: !0
        },
        ZW = new NO(WW, LW, "textureMerger", mW, tW);
      ZW.refreshRate = -1, ZW.defines = cW.length > 0 ? "#define " + cW.join("\n#define ") + "\n" : "";
      for (let OW = 0; OW < NW.length; OW++) xW = NW[OW], (lW = ZW).uOffset = xW.uOffset, lW.vOffset = xW.vOffset, lW.uScale = xW.uScale, lW.vScale = xW.vScale, lW.uAng = xW.uAng, lW.vAng = xW.vAng, lW.wAng = xW.wAng, lW.uRotationCenter = xW.uRotationCenter, lW.vRotationCenter = xW.vRotationCenter, ZW.setTexture(`inputTexture${OW}`, NW[OW]);
      var xW, lW;
      for (let OW = 0; OW < 4; OW++) {
        const WW = EW[OW],
          iW = ["red", "green", "blue", "alpha"][OW];
        if (WW && PO(WW)) {
          const mW = PW[OW];
          ZW.setInt(`${iW}TextureIndex`, mW), ZW.setInt(`${iW}SourceChannel`, WW.sourceChannel)
        } else {
          let mW;
          mW = WW && LO(WW) ? WW.value : 3 === OW ? 1 : 0, ZW.setFloat(`${iW}ConstantValue`, mW)
        }
      }
      return await new Promise(((WW, iW) => {
        ZW.executeWhenReady((() => {
          try {
            ZW.render(), WW(ZW)
          } catch (OW) {
            iW(OW instanceof Error ? OW : new Error(String(OW)))
          }
        }))
      }))
    }

    function wO(WW, iW) {
      return {
        texture: WW,
        sourceChannel: iW
      }
    }

    function tO(WW) {
      return {
        value: WW
      }
    }

    function ZO(WW, iW, OW, mW) {
      return {
        red: WW,
        green: iW,
        blue: OW,
        alpha: mW
      }
    }
    var xO = OW(41362),
      lO = OW(41453),
      AO = OW(38262),
      bO = OW(41500),
      jO = OW(41439);
    class UO {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class kO extends xO.e {
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
        return !!this._options?.enableMultiview || this.bb > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new UO;
        super(null), void 0 === WW.deterministicLockstep && (WW.deterministicLockstep = !1), void 0 !== WW.timeStep && (this._timeStep = WW.timeStep), void 0 === WW.lockstepMaxSteps && (WW.lockstepMaxSteps = 4), this._options = WW, AO.c.SetMatrixPrecision(!!WW.useHighPrecisionMatrix), this._caps = {
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
        }, WW.enableMultiview && (this._caps.multiview = {
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
        }, WW.renderingCanvas && (this._renderingCanvas = WW.renderingCanvas), hW.b.Log(`Babylon.js v${xO.e.Version} - Null engine`);
        const iW = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (iW.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (iW.Blob = function() {})
      }
      createVertexBuffer(WW) {
        const iW = new lO.e;
        return iW.references = 1, iW
      }
      createIndexBuffer(WW) {
        const iW = new lO.e;
        return iW.references = 1, iW
      }
      clear(WW, iW, OW) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(WW, iW, OW) {
        this._cachedViewport = WW
      }
      createUniformBuffer(WW) {
        const iW = new lO.e;
        return iW.references = 1, iW.aZ = WW instanceof Array ? WW.length * Float32Array.BYTES_PER_ELEMENT : WW.byteLength, iW
      }
      createDynamicUniformBuffer(WW) {
        return this.createUniformBuffer(WW)
      }
      updateUniformBuffer(WW, iW, OW, mW) {}
      bindUniformBufferBase(WW, iW, OW) {}
      bindUniformBlock(WW, iW, OW) {}
      createShaderProgram(WW, iW, OW, mW, EW) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(WW, iW) {
        return []
      }
      getAttributes(WW, iW) {
        return []
      }
      bindSamplers(WW) {
        this._currentEffect = null
      }
      enableEffect(WW) {
        WW = null !== WW && (0, jO.d)(WW) ? WW.effect : WW, this._currentEffect = WW, WW && (WW.onBind && WW.onBind(WW), WW._onBindObservable && WW._onBindObservable.notifyObservers(WW))
      }
      setStateCullFaceType(WW, iW) {}
      setState(WW) {}
      setIntArray(WW, iW) {
        return !0
      }
      setIntArray2(WW, iW) {
        return !0
      }
      setIntArray3(WW, iW) {
        return !0
      }
      setIntArray4(WW, iW) {
        return !0
      }
      setFloatArray(WW, iW) {
        return !0
      }
      setFloatArray2(WW, iW) {
        return !0
      }
      setFloatArray3(WW, iW) {
        return !0
      }
      setFloatArray4(WW, iW) {
        return !0
      }
      setArray(WW, iW) {
        return !0
      }
      setArray2(WW, iW) {
        return !0
      }
      setArray3(WW, iW) {
        return !0
      }
      setArray4(WW, iW) {
        return !0
      }
      setMatrices(WW, iW) {
        return !0
      }
      setMatrix3x3(WW, iW) {
        return !0
      }
      setMatrix2x2(WW, iW) {
        return !0
      }
      setFloat(WW, iW) {
        return !0
      }
      setFloat2(WW, iW, OW) {
        return !0
      }
      setFloat3(WW, iW, OW, mW) {
        return !0
      }
      setBool(WW, iW) {
        return !0
      }
      setFloat4(WW, iW, OW, mW, EW) {
        return !0
      }
      setAlphaMode(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[OW] !== WW && (this.alphaState.setAlphaBlend(0 !== WW, 0), iW || this.setDepthWrite(0 === WW), this._alphaMode[OW] = WW)
      }
      bindBuffers(WW, iW, OW) {}
      wipeCaches(WW) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, WW && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(WW, iW, OW, mW) {}
      drawElementsType(WW, iW, OW, mW) {}
      drawArraysType(WW, iW, OW, mW) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(WW) {}
      createTexture(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          LW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const cW = new Ji.e(this, 1),
          wW = String(WW);
        return cW.url = wW, cW.generateMipMaps = !iW, cW.samplingMode = EW, cW.invertY = OW, cW.baseWidth = this._options.textureSize, cW.baseHeight = this._options.textureSize, cW.width = this._options.textureSize, cW.height = this._options.textureSize, LW && (cW.format = LW), PW && (cW._buffer = PW), cW.isReady = !0, NW && setTimeout((() => {
          NW(cW)
        })), this._internalTexturesCache.push(cW), cW
      }
      _createHardwareRenderTargetWrapper(WW, iW, OW) {
        const mW = new bO.b(WW, iW, OW, this);
        return this._renderTargetWrapperCache.push(mW), mW
      }
      createRenderTargetTexture(WW, iW) {
        const OW = this._createHardwareRenderTargetWrapper(!1, !1, WW),
          mW = {};
        void 0 !== iW && "object" === typeof iW ? (mW.generateMipMaps = iW.generateMipMaps, mW.generateDepthBuffer = void 0 === iW.generateDepthBuffer || iW.generateDepthBuffer, mW.generateStencilBuffer = mW.generateDepthBuffer && iW.generateStencilBuffer, mW.type = void 0 === iW.type ? 0 : iW.type, mW.samplingMode = void 0 === iW.samplingMode ? 3 : iW.samplingMode) : (mW.generateMipMaps = iW, mW.generateDepthBuffer = !0, mW.generateStencilBuffer = !1, mW.type = 0, mW.samplingMode = 3);
        const EW = new Ji.e(this, 5);
        OW.setTexture(EW);
        const NW = WW.width || WW,
          PW = WW.height || WW;
        return OW._generateDepthBuffer = mW.generateDepthBuffer, OW._generateStencilBuffer = !!mW.generateStencilBuffer, EW.baseWidth = NW, EW.baseHeight = PW, EW.width = NW, EW.height = PW, EW.isReady = !0, EW.samples = 1, EW.generateMipMaps = !!mW.generateMipMaps, EW.samplingMode = mW.samplingMode, EW.type = mW.type, this._internalTexturesCache.push(EW), OW
      }
      createMultiviewRenderTargetTexture(WW, iW) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const OW = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: WW,
            height: iW
          }),
          mW = new Ji.e(this, 5, !0);
        return mW.baseWidth = WW, mW.baseHeight = iW, mW.width = WW, mW.height = iW, mW.isMultiview = !0, mW.isReady = !0, mW.format = 5, mW.samples = 1, OW.setTextures(mW), OW
      }
      bindMultiviewFramebuffer(WW) {
        this.bindFramebuffer(WW, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(WW, iW) {
        const OW = this._createHardwareRenderTargetWrapper(!1, !0, WW),
          mW = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...iW
          };
        mW.generateStencilBuffer = mW.generateDepthBuffer && mW.generateStencilBuffer, (1 !== mW.type || this._caps.textureFloatLinearFiltering) && (2 !== mW.type || this._caps.textureHalfFloatLinearFiltering) || (mW.samplingMode = 1), OW._generateDepthBuffer = mW.generateDepthBuffer, OW._generateStencilBuffer = !!mW.generateStencilBuffer;
        const EW = new Ji.e(this, 5);
        return EW.baseWidth = WW, EW.baseHeight = WW, EW.width = WW, EW.height = WW, EW.isReady = !0, EW.isCube = !0, EW.samples = 1, EW.generateMipMaps = !!mW.generateMipMaps, EW.samplingMode = mW.samplingMode, EW.type = mW.type, this._internalTexturesCache.push(EW), OW
      }
      updateTextureSamplingMode(WW, iW) {
        iW.samplingMode = WW
      }
      createRawTexture(WW, iW, OW, mW, EW, NW, PW) {
        let LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          wW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const tW = new Ji.e(this, 3);
        return tW.baseWidth = iW, tW.baseHeight = OW, tW.width = iW, tW.height = OW, tW.format = mW, tW.generateMipMaps = EW, tW.samplingMode = PW, tW.invertY = NW, tW._compression = LW, tW.type = cW, tW._useSRGBBuffer = wW, this._doNotHandleContextLost || (tW._bufferView = WW), tW
      }
      updateRawTexture(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        WW && (WW._bufferView = iW, WW.format = OW, WW.invertY = mW, WW._compression = EW, WW.type = NW, WW._useSRGBBuffer = PW)
      }
      bindFramebuffer(WW, iW, OW, mW, EW) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = WW, this._currentFramebuffer = null, this._cachedViewport && !EW && this.setViewport(this._cachedViewport, OW, mW)
      }
      unBindFramebuffer(WW) {
        let iW = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, iW && iW(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(WW) {
        const iW = new lO.e;
        return iW.references = 1, iW.aZ = 1, iW
      }
      updateDynamicTexture(WW, iW, OW) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(WW) {}
      updateDynamicIndexBuffer(WW, iW) {}
      updateDynamicVertexBuffer(WW, iW, OW, mW) {}
      _bindTextureDirectly(WW, iW) {
        return this._boundTexturesCache[this._activeChannel] !== iW && (this._boundTexturesCache[this._activeChannel] = iW, !0)
      }
      _bindTexture(WW, iW) {
        WW < 0 || this._bindTextureDirectly(0, iW)
      }
      _deleteBuffer(WW) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(WW) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(WW, iW, OW, mW, EW) {}
      _uploadDataToTextureDirectly(WW, iW) {}
      _uploadArrayBufferViewToTexture(WW, iW) {}
      _uploadImageToTexture(WW, iW) {}
    }
    OW(41556), OW(41589), OW(41553);
    async function sO(WW) {
      const iW = WW.getInternalTexture();
      if (!iW || 1 !== iW.source) return null;
      if (iW.invertY) {
        const iW = WW.bD()?.VA();
        if (!(iW instanceof kO)) return null
      }
      const OW = iW._buffer;
      let mW, NW = WW.mimeType;
      try {
        OW ? ArrayBuffer.isView(OW) ? mW = OW.buffer.slice(OW.byteOffset, OW.byteOffset + OW.byteLength) : OW instanceof ArrayBuffer ? mW = OW : OW instanceof Blob ? (mW = await OW.arrayBuffer(), NW = OW.type || NW) : "string" === typeof OW ? (mW = await EW.Tools.LoadFileAsync(OW), NW = (0, cW.e)(OW) || NW) : "undefined" !== typeof HTMLImageElement && OW instanceof HTMLImageElement && (mW = await EW.Tools.LoadFileAsync(OW.src), NW = (0, cW.e)(OW.src) || NW) : (mW = await EW.Tools.LoadFileAsync(iW.url), NW = (0, cW.e)(iW.url) || NW)
      } catch {
        return null
      }
      if (mW && !NW && iW.url) {
        const WW = iW.url.match(/^data:([^;,]+)/);
        NW = WW ? WW[1] : (0, cW.e)(iW.url)
      }
      return mW && NW ? {
        data: mW,
        mimeType: NW
      } : null
    }
    const MO = 1e-6,
      KO = new jW.Color3(.04, .04, .04),
      SO = 1024,
      YO = jW.Color3.White(),
      yO = jW.Color3.BlackReadOnly;

    function TO(WW) {
      switch (WW) {
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

    function JO(WW, iW, OW) {
      if (iW < KO.r) return 0;
      const mW = KO.r,
        EW = WW * OW / (1 - KO.r) + iW - 2 * KO.r,
        NW = EW * EW - 4 * mW * (KO.r - iW);
      return sW.Clamp((-EW + Math.sqrt(NW)) / (2 * mW), 0, 1)
    }

    function hO(WW) {
      const iW = WW.diffuseColor.toLinearSpace(WW.bD().VA().useExactSrgbConversions).scale(.5),
        OW = WW.alpha,
        mW = function(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new VW.m(0, 1),
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new VW.m(0, .1),
            mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new VW.m(0, .1),
            EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new VW.m(1300, .1);
          return function(WW, iW, OW, mW, EW) {
            return (1 - WW) * (1 - WW) * (1 - WW) * iW + 3 * (1 - WW) * (1 - WW) * WW * OW + 3 * (1 - WW) * WW * WW * mW + WW * WW * WW * EW
          }(Math.pow(WW / EW.x, .333333), iW.y, OW.y, mW.y, EW.y)
        }(sW.Clamp(WW.specularPower, 0, SO));
      return {
        baseColorFactor: [iW.r, iW.g, iW.b, OW],
        metallicFactor: 0,
        roughnessFactor: mW
      }
    }

    function HO(WW, iW) {
      iW.needAlphaBlending() ? WW.alphaMode = "BLEND" : iW.needAlphaTesting() && (WW.alphaMode = "MASK", WW.alphaCutoff = iW.alphaCutOff)
    }

    function nO(WW, iW, OW) {
      const mW = new Uint8Array(WW * iW * 4);
      for (let EW = 0; EW < mW.length; EW += 4) mW[EW] = mW[EW + 1] = mW[EW + 2] = mW[EW + 3] = 255;
      return SW.b.CreateRGBATexture(mW, WW, iW, OW)
    }

    function uO(WW) {
      if (WW instanceof Uint8Array) {
        const iW = WW.length,
          OW = new Float32Array(WW.length);
        for (let mW = 0; mW < iW; ++mW) OW[mW] = WW[mW] / 255;
        return OW
      }
      if (WW instanceof Float32Array) return WW;
      throw new Error("Unsupported pixel format!")
    }
    class oO {
      constructor(WW) {
        this._exporter = WW, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(WW) {
        return WW ? this._textureMap.get(WW.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(WW, iW) {
        const OW = hO(WW),
          mW = {
            name: WW.name
          };
        if (null == WW.backFaceCulling || WW.backFaceCulling || (WW.twoSidedLighting || EW.Tools.Warn(WW.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), mW.doubleSided = !0), iW) {
          const iW = [],
            EW = WW.diffuseTexture;
          EW && iW.push(this.exportTextureAsync(EW).then((WW => {
            WW && (OW.baseColorTexture = WW)
          })));
          const NW = WW.bumpTexture;
          NW && iW.push(this.exportTextureAsync(NW).then((WW => {
            WW && (mW.normalTexture = WW, 1 !== NW.level && (mW.normalTexture.scale = NW.level))
          })));
          const PW = WW.emissiveTexture;
          PW && (mW.emissiveFactor = [1, 1, 1], iW.push(this.exportTextureAsync(PW).then((WW => {
            WW && (mW.emissiveTexture = WW)
          }))));
          const LW = WW.ambientTexture;
          LW && iW.push(this.exportTextureAsync(LW).then((WW => {
            if (WW) {
              const iW = {
                index: WW.index
              };
              mW.occlusionTexture = iW
            }
          }))), iW.length > 0 && (this._exporter._materialNeedsUVsSet.add(WW), await Promise.all(iW))
        }(WW.alpha < 1 || WW.opacityTexture) && (WW.alphaMode === YW.e.ALPHA_COMBINE ? mW.alphaMode = "BLEND" : EW.Tools.Warn(WW.name + ": glTF 2.0 does not support alpha mode: " + WW.alphaMode.toString())), WW.emissiveColor && !WW.emissiveColor.equalsWithEpsilon(yO, MO) && (mW.emissiveFactor = WW.emissiveColor.wEW()), mW.pbrMetallicRoughness = OW, HO(mW, WW), await this._finishMaterialAsync(mW, WW);
        const NW = this._exporter._materials;
        return NW.push(mW), NW.length - 1
      }
      async _finishMaterialAsync(WW, iW) {
        const OW = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", WW, iW),
          mW = [];
        for (const EW of OW) mW.push(this.exportTextureAsync(EW));
        await Promise.all(mW), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", WW, iW)
      }
      _resizeTexturesToSameDimensions(WW, iW, OW) {
        const mW = WW ? WW.getSize() : {
            width: 0,
            height: 0
          },
          EW = iW ? iW.getSize() : {
            width: 0,
            height: 0
          };
        let NW, PW;
        return mW.width < EW.width ? (NW = WW && WW instanceof KW.d ? MW.i.CreateResizedCopy(WW, EW.width, EW.height, !0) : nO(EW.width, EW.height, OW), PW = iW) : mW.width > EW.width ? (PW = iW && iW instanceof KW.d ? MW.i.CreateResizedCopy(iW, mW.width, mW.height, !0) : nO(mW.width, mW.height, OW), NW = WW) : (NW = WW, PW = iW), {
          texture1: NW,
          texture2: PW
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(WW, iW, OW) {
        const mW = new Array;
        if (!WW && !iW) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const EW = WW ? WW.bD() : iW ? iW.bD() : null;
        if (EW) {
          const NW = this._resizeTexturesToSameDimensions(WW, iW, EW),
            PW = NW.texture1?.getSize();
          let LW, cW;
          const wW = PW.width,
            tW = PW.height,
            ZW = await NW.texture1.readPixels(),
            xW = await NW.texture2.readPixels();
          if (!ZW) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (LW = uO(ZW), !xW) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          cW = uO(xW);
          const lW = cW.byteLength,
            AW = new Uint8Array(lW),
            bW = new Uint8Array(lW),
            UW = 4,
            kW = new jW.Color3(0, 0, 0);
          let sW = 0,
            MW = 0;
          for (let WW = 0; WW < tW; ++WW)
            for (let iW = 0; iW < wW; ++iW) {
              const mW = (wW * WW + iW) * UW,
                PW = {
                  diffuseColor: new jW.Color3(LW[mW], LW[mW + 1], LW[mW + 2]).toLinearSpace(EW.VA().useExactSrgbConversions).multiply(OW.diffuseColor),
                  specularColor: new jW.Color3(cW[mW], cW[mW + 1], cW[mW + 2]).toLinearSpace(EW.VA().useExactSrgbConversions).multiply(OW.specularColor),
                  glossiness: cW[mW + 3] * OW.glossiness
                },
                tW = this._convertSpecularGlossinessToMetallicRoughness(PW);
              kW.r = Math.max(kW.r, tW.baseColor.r), kW.g = Math.max(kW.g, tW.baseColor.g), kW.b = Math.max(kW.b, tW.baseColor.b), sW = Math.max(sW, tW.metallic), MW = Math.max(MW, tW.roughness), bW[mW] = 255 * tW.baseColor.r, bW[mW + 1] = 255 * tW.baseColor.g, bW[mW + 2] = 255 * tW.baseColor.b, bW[mW + 3] = NW.texture1.hasAlpha ? 255 * LW[mW + 3] : 255, AW[mW] = 0, AW[mW + 1] = 255 * tW.roughness, AW[mW + 2] = 255 * tW.metallic, AW[mW + 3] = 255
            }
          const KW = {
            baseColor: kW,
            metallic: sW,
            roughness: MW
          };
          let SW = !1,
            YW = !1;
          for (let WW = 0; WW < tW; ++WW)
            for (let iW = 0; iW < wW; ++iW) {
              const OW = (wW * WW + iW) * UW;
              bW[OW] /= KW.baseColor.r > MO ? KW.baseColor.r : 1, bW[OW + 1] /= KW.baseColor.g > MO ? KW.baseColor.g : 1, bW[OW + 2] /= KW.baseColor.b > MO ? KW.baseColor.b : 1;
              const mW = jW.Color3.FromInts(bW[OW], bW[OW + 1], bW[OW + 2]).toGammaSpace(EW.VA().useExactSrgbConversions);
              bW[OW] = 255 * mW.r, bW[OW + 1] = 255 * mW.g, bW[OW + 2] = 255 * mW.b, mW.equalsWithEpsilon(YO, MO) || (YW = !0), AW[OW + 1] /= KW.roughness > MO ? KW.roughness : 1, AW[OW + 2] /= KW.metallic > MO ? KW.metallic : 1;
              jW.Color3.FromInts(255, AW[OW + 1], AW[OW + 2]).equalsWithEpsilon(YO, MO) || (SW = !0)
            }
          return SW && mW.push((0, yW.EncodeImageAsync)(AW, wW, tW).then((WW => {
            KW.metallicRoughnessTextureData = WW
          }))), YW && mW.push((0, yW.EncodeImageAsync)(bW, wW, tW).then((WW => {
            KW.baseColorTextureData = WW
          }))), await Promise.all(mW).then((() => KW))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(WW) {
        const iW = this._getPerceivedBrightness(WW.diffuseColor),
          OW = this._getPerceivedBrightness(WW.specularColor),
          mW = 1 - this._getMaxComponent(WW.specularColor),
          EW = JO(iW, OW, mW),
          NW = WW.diffuseColor.scale(mW / (1 - KO.r) / Math.max(1 - EW, MO)),
          PW = WW.specularColor.subtract(KO.scale(1 - EW)).scale(1 / Math.max(EW, MO));
        let LW = jW.Color3.Lerp(NW, PW, EW * EW);
        LW = LW.clampToRef(0, 1, LW);
        return {
          baseColor: LW,
          metallic: EW,
          roughness: 1 - WW.glossiness
        }
      }
      _getPerceivedBrightness(WW) {
        return Math.sqrt(.299 * WW.r * WW.r + .587 * WW.g * WW.g + .114 * WW.b * WW.b)
      }
      _getMaxComponent(WW) {
        return Math.max(WW.r, Math.max(WW.g, WW.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
        const wW = [],
          tW = {
            baseColor: WW,
            metallic: iW,
            roughness: OW
          };
        if (cW)
          if (PW instanceof WO) {
            if (PW.geometryOpacityTexture) {
              const WW = mW && mW.getInternalTexture() ? mW.getInternalTexture().uniqueId : 0,
                iW = PW.geometryOpacityTexture && PW.geometryOpacityTexture.getInternalTexture() ? PW.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                OW = Number(`${WW}${iW}`),
                EW = this._textureMap.get(OW);
              EW ? LW.baseColorTexture = EW : wW.push(cO("baseColorOpacityTexture", ZO(mW ? wO(mW, 0) : tO(1), mW ? wO(mW, 1) : tO(1), mW ? wO(mW, 2) : tO(1), wO(PW.geometryOpacityTexture, 0)), PW.bD()).then((async WW => {
                const iW = await this.exportTextureAsync(WW, OW);
                iW && (LW.baseColorTexture = iW)
              })))
            } else mW && wW.push(this.exportTextureAsync(mW).then((WW => {
              WW && (LW.baseColorTexture = WW)
            })));
            if (PW._useMetallicFromMetallicTextureBlue && EW) wW.push(this.exportTextureAsync(EW).then((WW => {
              WW && (LW.metallicRoughnessTexture = WW)
            })));
            else if (NW || EW) {
              const WW = EW && EW.getInternalTexture() ? EW.getInternalTexture().uniqueId : 0,
                iW = NW && NW.getInternalTexture() ? NW.getInternalTexture().uniqueId : 0,
                OW = Number(`${WW}${iW}`),
                mW = this._textureMap.get(OW);
              mW ? LW.metallicRoughnessTexture = mW : wW.push(cO("MetalRoughTexture", ZO(PW.ambientOcclusionTexture ? wO(PW.ambientOcclusionTexture, 0) : tO(1), NW ? wO(NW, 0) : tO(1), EW ? wO(EW, 0) : tO(1)), PW.bD()).then((async WW => {
                const iW = await this.exportTextureAsync(WW, OW);
                iW && (LW.metallicRoughnessTexture = iW)
              })))
            }
          } else mW && wW.push(this.exportTextureAsync(mW).then((WW => {
            WW && (LW.baseColorTexture = WW)
          }))), EW && wW.push(this.exportTextureAsync(EW).then((WW => {
            WW && (LW.metallicRoughnessTexture = WW)
          })));
        return wW.length > 0 && (this._exporter._materialNeedsUVsSet.add(PW), await Promise.all(wW)), tW
      }
      _getTextureSampler(WW) {
        const iW = {};
        if (!WW || !(WW instanceof KW.d)) return iW;
        const OW = this._getGLTFTextureWrapMode(WW.wrapU);
        10497 !== OW && (iW.wrapS = OW);
        const mW = this._getGLTFTextureWrapMode(WW.wrapV);
        switch (10497 !== mW && (iW.wrapT = mW), WW.samplingMode) {
          case KW.d.LINEAR_LINEAR:
            iW.magFilter = 9729, iW.minFilter = 9729;
            break;
          case KW.d.LINEAR_NEAREST:
            iW.magFilter = 9729, iW.minFilter = 9728;
            break;
          case KW.d.NEAREST_LINEAR:
            iW.magFilter = 9728, iW.minFilter = 9729;
            break;
          case KW.d.NEAREST_LINEAR_MIPLINEAR:
            iW.magFilter = 9728, iW.minFilter = 9987;
            break;
          case KW.d.NEAREST_NEAREST:
            iW.magFilter = 9728, iW.minFilter = 9728;
            break;
          case KW.d.NEAREST_LINEAR_MIPNEAREST:
            iW.magFilter = 9728, iW.minFilter = 9985;
            break;
          case KW.d.LINEAR_NEAREST_MIPNEAREST:
            iW.magFilter = 9729, iW.minFilter = 9984;
            break;
          case KW.d.LINEAR_NEAREST_MIPLINEAR:
            iW.magFilter = 9729, iW.minFilter = 9986;
            break;
          case KW.d.NEAREST_NEAREST_MIPLINEAR:
            iW.magFilter = 9728, iW.minFilter = 9986;
            break;
          case KW.d.LINEAR_LINEAR_MIPLINEAR:
            iW.magFilter = 9729, iW.minFilter = 9987;
            break;
          case KW.d.LINEAR_LINEAR_MIPNEAREST:
            iW.magFilter = 9729, iW.minFilter = 9985;
            break;
          case KW.d.NEAREST_NEAREST_MIPNEAREST:
            iW.magFilter = 9728, iW.minFilter = 9984
        }
        return iW
      }
      _getGLTFTextureWrapMode(WW) {
        switch (WW) {
          case KW.d.WRAP_ADDRESSMODE:
            return 10497;
          case KW.d.CLAMP_ADDRESSMODE:
            return 33071;
          case KW.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return EW.Tools.Error(`Unsupported Texture Wrap Mode ${WW}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(WW, iW, OW) {
        const mW = {
            diffuseColor: WW._albedoColor,
            specularColor: WW._reflectivityColor,
            glossiness: WW._microSurface
          },
          EW = WW._albedoTexture,
          NW = WW._reflectivityTexture,
          PW = WW._useMicroSurfaceFromReflectivityMapAlpha;
        if (NW && !PW) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((EW || NW) && OW) {
          this._exporter._materialNeedsUVsSet.add(WW);
          const OW = this._exportTextureSampler(EW || NW),
            PW = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(EW, NW, mW),
            LW = this._exporter._textures;
          if (PW.baseColorTextureData) {
            const WW = await this._exportImageAsync(`baseColor${LW.length}`, PW.baseColorTextureData);
            iW.baseColorTexture = this._exportTextureInfo(WW, OW, EW?.coordinatesIndex)
          }
          if (PW.metallicRoughnessTextureData) {
            const WW = await this._exportImageAsync(`metallicRoughness${LW.length}`, PW.metallicRoughnessTextureData);
            iW.metallicRoughnessTexture = this._exportTextureInfo(WW, OW, NW?.coordinatesIndex)
          }
          return PW
        }
        return this._convertSpecularGlossinessToMetallicRoughness(mW)
      }
      async exportPBRMaterialAsync(WW, iW) {
        const OW = {},
          mW = {
            name: WW.name
          },
          EW = WW.isMetallicWorkflow();
        if (EW) {
          const iW = WW._albedoColor,
            mW = WW.alpha;
          iW && (OW.baseColorFactor = [iW.r, iW.g, iW.b, mW])
        }
        const NW = EW ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(WW._albedoColor, WW._metallic, WW._roughness, WW._albedoTexture, WW._metallicTexture, WW._metallicTexture, WW, OW, iW) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(WW, OW, iW);
        await this._setMetallicRoughnessPbrMaterialAsync(NW, WW, mW, OW, iW), await this._finishMaterialAsync(mW, WW);
        const PW = this._exporter._materials;
        return PW.push(mW), PW.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(WW, iW, OW, mW, NW) {
        if (HO(OW, iW), WW.baseColor.equalsWithEpsilon(YO, MO) && sW.WithinEpsilon(iW.alpha, 1, MO) || (mW.baseColorFactor = [WW.baseColor.r, WW.baseColor.g, WW.baseColor.b, iW.alpha]), null != WW.metallic && 1 !== WW.metallic && (mW.metallicFactor = WW.metallic), null != WW.roughness && 1 !== WW.roughness && (mW.roughnessFactor = WW.roughness), null == iW.backFaceCulling || iW.backFaceCulling || (iW._twoSidedLighting || EW.Tools.Warn(iW.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), OW.doubleSided = !0), NW) {
          const WW = [],
            EW = iW instanceof Si ? iW._bumpTexture : iW.geometryNormalTexture;
          EW && WW.push(this.exportTextureAsync(EW).then((WW => {
            WW && (OW.normalTexture = WW, 1 !== EW.level && (OW.normalTexture.scale = EW.level))
          })));
          const NW = iW instanceof Si ? iW._ambientTexture : iW.ambientOcclusionTexture;
          NW && WW.push(new Promise((async WW => {
            if (iW instanceof WO && mW.metallicRoughnessTexture) {
              const iW = this._exportTextureSampler(NW),
                OW = this._exporter._textures[mW.metallicRoughnessTexture.index].source,
                EW = this._exportTextureInfo(OW, iW, NW.coordinatesIndex);
              return this._textureMap.set(NW.uniqueId, EW), this._exporter._extensionsPostExportTextures("exporter", EW, NW), WW(EW)
            }
            return WW(await this.exportTextureAsync(NW))
          })).then((async WW => {
            if (WW) {
              const mW = {
                index: WW.index,
                texCoord: WW.texCoord,
                extensions: WW.extensions
              };
              OW.occlusionTexture = mW, mW.strength = iW instanceof Si ? iW._ambientTextureStrength : iW.ambientOcclusionTexture.level
            }
          })));
          const PW = iW instanceof Si ? iW._emissiveTexture : iW.emissionColorTexture;
          PW && WW.push(this.exportTextureAsync(PW).then((WW => {
            WW && (OW.emissiveTexture = WW)
          }))), WW.length > 0 && (this._exporter._materialNeedsUVsSet.add(iW), await Promise.all(WW))
        }
        const PW = iW instanceof Si ? iW._emissiveColor : iW.emissionColor;
        PW.equalsWithEpsilon(yO, MO) || (OW.emissiveFactor = PW.wEW()), OW.pbrMetallicRoughness = mW
      }
      async exportOpenPBRMaterialAsync(WW, iW) {
        const OW = {},
          mW = {
            name: WW.name
          },
          EW = WW.baseColor,
          NW = WW.geometryOpacity;
        EW && (OW.baseColorFactor = [EW.r, EW.g, EW.b, NW]);
        const PW = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(WW.baseColor, WW.baseMetalness, WW.specularRoughness, WW.baseColorTexture, WW.baseMetalnessTexture, WW.specularRoughnessTexture, WW, OW, iW);
        await this._setMetallicRoughnessPbrMaterialAsync(PW, WW, mW, OW, iW), await this._finishMaterialAsync(mW, WW);
        const LW = this._exporter._materials;
        return LW.push(mW), LW.length - 1
      }
      async exportTextureAsync(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = this._textureMap.get(iW ?? WW.uniqueId);
        if (OW) return OW;
        const mW = this._exportTextureSampler(WW),
          EW = await this._exportTextureImageAsync(WW);
        return OW = this._exportTextureInfo(EW, mW, WW.coordinatesIndex), this._textureMap.set(iW ?? WW.uniqueId, OW), this._exporter._extensionsPostExportTextures("exporter", OW, WW), OW
      }
      async _exportTextureImageAsync(WW) {
        const iW = WW.mimeType ?? "none",
          OW = this._internalTextureToImage,
          mW = WW.getInternalTexture().uniqueId;
        OW[mW] = OW[mW] || {};
        let NW = OW[mW][iW];
        return void 0 === NW && (NW = (async () => {
          const OW = await sO(WW);
          if (OW && TO(OW.mimeType) && ("none" === iW || OW.mimeType === iW)) return await this._exportImageAsync(WW.name, new Blob([OW.data], {
            type: OW.mimeType
          }));
          let mW = "image/png";
          "none" !== iW && (TO(iW) ? mW = iW : (mW = "image/png", EW.Tools.Warn(`Unsupported media type: ${iW}. Exporting texture as PNG.`)));
          const NW = WW.getSize(),
            PW = await (0, MW.f)(WW),
            LW = await (0, yW.EncodeImageAsync)(PW, NW.width, NW.height, mW);
          return await this._exportImageAsync(WW.name, LW)
        })(), OW[mW][iW] = NW), await NW
      }
      async _exportImageAsync(WW, iW) {
        const OW = this._exporter._images;
        let mW;
        if (this._exporter._shouldUseGlb) {
          mW = {
            name: WW,
            mimeType: iW.type,
            bufferView: void 0
          };
          const OW = await iW.arrayBuffer(),
            EW = this._exporter._bufferManager.createBufferView(new Uint8Array(OW));
          this._exporter._bufferManager.setBufferView(mW, EW)
        } else {
          const NW = WW.replace(/\.\/|\/|\.\\|\\/g, "_"),
            PW = function(WW) {
              switch (WW) {
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
            }(iW.type);
          let LW = NW + PW;
          OW.some((WW => WW.uri === LW)) && (LW = `${NW}_${EW.Tools.RandomId()}${PW}`), mW = {
            name: WW,
            uri: LW
          }, this._exporter._imageData[LW] = iW
        }
        return OW.push(mW), OW.length - 1
      }
      _exportTextureInfo(WW, iW, OW) {
        const mW = this._exporter._textures;
        let EW = mW.findIndex((OW => OW.sampler == iW && OW.source === WW)); - 1 === EW && (EW = mW.length, mW.push({
          source: WW,
          sampler: iW
        }));
        const NW = {
          index: EW
        };
        return OW && (NW.texCoord = OW), NW
      }
      _exportTextureSampler(WW) {
        const iW = this._getTextureSampler(WW),
          OW = this._exporter._samplers,
          mW = OW.findIndex((WW => WW.minFilter === iW.minFilter && WW.magFilter === iW.magFilter && WW.wrapS === iW.wrapS && WW.wrapT === iW.wrapT));
        return -1 !== mW ? mW : (OW.push(iW), OW.length - 1)
      }
    }
    var dO = OW(41582),
      eO = OW(41719);
    (0, eO.b)();
    var vO = OW(38249);
    const gO = mW.Matrix.Compose(new mW.fA(-1, 1, 1), mW.Quaternion.Identity(), mW.fA.Zero());

    function DO(WW, iW) {
      if (!(WW instanceof ZW.e)) return !1;
      if (iW) {
        if (!WW.getWorldMatrix().equalsWithEpsilon(mW.Matrix.IdentityReadOnly, vO.e)) return !1
      } else {
        if (!WW.getWorldMatrix().multiplyToRef(gO, mW.TmpVectors.Matrix[0]).equalsWithEpsilon(mW.Matrix.IdentityReadOnly, vO.e)) return !1
      }
      return !(WW instanceof xW.b && WW.geometry)
    }
    const VO = mW.fA.ZeroReadOnly,
      pO = mW.Quaternion.Identity(),
      fO = mW.fA.OneReadOnly,
      CO = new mW.fA(-1, 1, 1);

    function XO(WW, iW) {
      const {
        byteOffset: OW,
        byteStride: mW,
        type: EW,
        normalized: NW
      } = WW, PW = WW.getSize(), LW = iW.reduce(((WW, iW) => iW.getTotalVertices() > WW ? iW.getTotalVertices() : WW), -Number.MAX_VALUE);
      return {
        byteOffset: OW,
        byteStride: mW,
        componentCount: PW,
        type: EW,
        count: LW * PW,
        normalized: NW,
        totalVertices: LW,
        kind: WW.getKind()
      }
    }

    function BO(WW) {
      switch (WW) {
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

    function qO(WW) {
      switch (WW) {
        case tW.g.PositionKind:
        case tW.g.NormalKind:
        case tW.g.TangentKind:
        case tW.g.ColorKind:
        case tW.g.MatricesIndicesKind:
        case tW.g.MatricesIndicesExtraKind:
        case tW.g.MatricesWeightsKind:
        case tW.g.MatricesWeightsExtraKind:
        case tW.g.UVKind:
        case tW.g.UV2Kind:
        case tW.g.UV3Kind:
        case tW.g.UV4Kind:
        case tW.g.UV5Kind:
        case tW.g.UV6Kind:
          return !0
      }
      return !1
    }

    function RO(WW) {
      const iW = Math.sqrt(WW.x * WW.x + WW.y * WW.y + WW.z * WW.z);
      iW > 0 && (WW.x /= iW, WW.y /= iW, WW.z /= iW)
    }

    function GO(WW) {
      return WW.x *= -1, WW
    }

    function IO(WW) {
      if (WW.x * WW.x + WW.y * WW.y > .5) {
        const iW = Math.abs(WW.x),
          OW = Math.abs(WW.y);
        if (iW > OW) {
          const OW = Math.sign(WW.x);
          WW.x = iW, WW.y *= -OW, WW.z *= -OW, WW.w *= OW
        } else {
          const iW = Math.sign(WW.y);
          WW.x *= -iW, WW.y = OW, WW.z *= iW, WW.w *= -iW
        }
      } else {
        const iW = Math.abs(WW.z),
          OW = Math.abs(WW.w);
        if (iW > OW) {
          const OW = Math.sign(WW.z);
          WW.x *= -OW, WW.y *= OW, WW.z = iW, WW.w *= -OW
        } else {
          const iW = Math.sign(WW.w);
          WW.x *= iW, WW.y *= -iW, WW.z *= -iW, WW.w = OW
        }
      }
      return WW
    }

    function aO(WW) {
      WW.yWW(-WW.z, WW.w, WW.x, -WW.y)
    }

    function rO(WW, iW) {
      const OW = mW.fA.FromArrayToRef(iW.translation || [0, 0, 0], 0, mW.TmpVectors.fA[0]),
        EW = mW.Quaternion.FromArrayToRef(iW.rotation || [0, 0, 0, 1], 0, mW.TmpVectors.Quaternion[0]),
        NW = mW.Matrix.ComposeToRef(fO, EW, OW, mW.TmpVectors.Matrix[0]),
        PW = mW.fA.FromArrayToRef(WW.translation || [0, 0, 0], 0, mW.TmpVectors.fA[2]),
        LW = mW.Quaternion.FromArrayToRef(WW.rotation || [0, 0, 0, 1], 0, mW.TmpVectors.Quaternion[1]),
        cW = mW.Matrix.ComposeToRef(fO, LW, PW, mW.TmpVectors.Matrix[1]);
      NW.multiplyToRef(cW, cW), cW.decompose(void 0, EW, OW), OW.equalsWithEpsilon(VO, vO.e) ? delete iW.translation : iW.translation = OW.wEW(), EW.equalsWithEpsilon(pO, vO.e) ? delete iW.rotation : iW.rotation = EW.wEW(), iW.scale && delete iW.scale
    }

    function zO(WW, iW) {
      if (!(iW instanceof ZW.e)) return !1;
      if (!(1 === iW.getChildren().length && 0 === WW.getChildren().length && WW.parent === iW)) return !1;
      const OW = WW.bD(),
        mW = WW instanceof eO.d && !OW.useRightHandedSystem ? CO : fO;
      return !!iW.YZ.equalsWithEpsilon(mW, vO.e) || (hW.b.Warn(`Cannot collapse node ${WW.name} into parent node ${iW.name} with modified scaling.`), !1)
    }

    function FO(WW) {
      if (WW instanceof Array) {
        const iW = new Float32Array(WW);
        return new Uint8Array(iW.buffer, iW.byteOffset, iW.byteLength)
      }
      return ArrayBuffer.isView(WW) ? new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength) : new Uint8Array(WW)
    }

    function QO(WW, iW) {
      for (const [OW, mW] of Object.entries(WW)) {
        const EW = iW[OW];
        (Array.isArray(mW) && Array.isArray(EW) && Wm(mW, EW) || mW === EW) && delete WW[OW]
      }
      return WW
    }

    function Wm(WW, iW) {
      return WW.length === iW.length && WW.every(((WW, OW) => WW === iW[OW]))
    }
    const im = new Map([
      [Int8Array, (WW, iW, OW) => WW.setInt8(iW, OW)],
      [Uint8Array, (WW, iW, OW) => WW.setUint8(iW, OW)],
      [Uint8ClampedArray, (WW, iW, OW) => WW.setUint8(iW, OW)],
      [Int16Array, (WW, iW, OW) => WW.setInt16(iW, OW, !0)],
      [Uint16Array, (WW, iW, OW) => WW.setUint16(iW, OW, !0)],
      [Int32Array, (WW, iW, OW) => WW.setInt32(iW, OW, !0)],
      [Uint32Array, (WW, iW, OW) => WW.setUint32(iW, OW, !0)],
      [Float32Array, (WW, iW, OW) => WW.setFloat32(iW, OW, !0)],
      [Float64Array, (WW, iW, OW) => WW.setFloat64(iW, OW, !0)]
    ]);
    class Om {
      writeTypedArray(WW) {
        this._checkGrowBuffer(WW.byteLength);
        const iW = im.get(WW.constructor);
        for (let OW = 0; OW < WW.length; OW++) iW(this._dataView, this._byteOffset, WW[OW]), this._byteOffset += WW.BYTES_PER_ELEMENT
      }
      constructor(WW) {
        this._data = new Uint8Array(WW), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(WW) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, WW), this._byteOffset++
      }
      writeInt8(WW) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, WW), this._byteOffset++
      }
      writeInt16(WW) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, WW, !0), this._byteOffset += 2
      }
      writeUInt16(WW) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, WW, !0), this._byteOffset += 2
      }
      writeInt32(WW) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, WW, !0), this._byteOffset += 4
      }
      writeUInt32(WW) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, WW, !0), this._byteOffset += 4
      }
      writeFloat32(WW) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, WW, !0), this._byteOffset += 4
      }
      writeFloat64(WW) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, WW, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(WW) {
        const iW = this.byteOffset + WW;
        if (iW > this._data.byteLength) {
          const WW = new Uint8Array(2 * iW);
          WW.set(this._data), this._data = WW, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function mm(WW) {
      return WW % 4 === 0 ? 4 : WW % 2 === 0 ? 2 : 1
    }
    class Em {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(WW) {
        let iW = 0;
        this._bufferViewToData.forEach((WW => {
          iW += WW.byteLength
        }));
        const OW = new Om(iW),
          mW = Array.from(this._bufferViewToData.keys()).sort(((WW, iW) => mm(iW.byteLength) - mm(WW.byteLength)));
        for (const EW of mW) {
          EW.byteOffset = OW.byteOffset, WW.push(EW);
          const iW = WW.length - 1,
            mW = this.getPropertiesWithBufferView(EW);
          for (const WW of mW) WW.bufferView = iW;
          OW.writeTypedArray(this._bufferViewToData.get(EW)), this._bufferViewToData.delete(EW)
        }
        return OW.getOutputData()
      }
      createBufferView(WW, iW) {
        const OW = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: WW.byteLength,
          byteStride: iW
        };
        return this._bufferViewToData.set(OW, WW), OW
      }
      createAccessor(WW, iW, OW, mW, EW, NW, PW) {
        this._verifyBufferView(WW);
        const LW = {
          bufferView: void 0,
          componentType: OW,
          count: mW,
          type: iW,
          min: NW?.min,
          max: NW?.max,
          normalized: PW,
          byteOffset: EW
        };
        return this.setBufferView(LW, WW), this._accessorToBufferView.set(LW, WW), LW
      }
      setBufferView(WW, iW) {
        this._verifyBufferView(iW);
        this.getPropertiesWithBufferView(iW).push(WW)
      }
      removeBufferView(WW) {
        const iW = this.getPropertiesWithBufferView(WW);
        for (const OW of iW) void 0 !== OW.bufferView && delete OW.bufferView;
        this._bufferViewToData.delete(WW), this._bufferViewToProperties.delete(WW), this._accessorToBufferView.forEach(((iW, OW) => {
          iW === WW && (void 0 !== OW.byteOffset && delete OW.byteOffset, this._accessorToBufferView.delete(OW))
        }))
      }
      getBufferView(WW) {
        const iW = this._accessorToBufferView.get(WW);
        return this._verifyBufferView(iW), iW
      }
      getPropertiesWithBufferView(WW) {
        return this._verifyBufferView(WW), this._bufferViewToProperties.set(WW, this._bufferViewToProperties.get(WW) ?? []), this._bufferViewToProperties.get(WW)
      }
      getData(WW) {
        return this._verifyBufferView(WW), this._bufferViewToData.get(WW)
      }
      _verifyBufferView(WW) {
        if (void 0 === WW || !this._bufferViewToData.has(WW)) throw new Error(`BufferView ${WW} not found in BufferManager.`)
      }
    }
    var Nm = OW(41723);
    (0, Nm.h)();
    var Pm = OW(41957);
    (0, Pm.f)();
    var Lm = OW(41782),
      cm = OW(42580);
    (0, cm.g)();
    let wm = (() => {
      var WW;
      let iW, OW, mW = [],
        EW = [],
        NW = [],
        PW = [];
      return WW = class {
        get influence() {
          return this._influence
        }
        set influence(WW) {
          if (this._influence === WW) return;
          const iW = this._influence;
          this._influence = WW, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === iW || 0 === WW)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(WW) {
          this._animationPropertiesOverride = WW
        }
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            LW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = WW, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new OO.e, this._onDataLayoutChanged = new OO.e, this.id = (0, TW.g)(this, mW, void 0), this.morphTargetManager = ((0, TW.g)(this, EW), (0, TW.g)(this, NW, null)), this._animationPropertiesOverride = ((0, TW.g)(this, PW), null), this.id = WW, this.morphTargetManager = LW, this._scene = OW || bW.d.LastCreatedScene, this.influence = iW, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        bLW(WW) {
          const iW = this.hasPositions;
          this._positions = WW, iW !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(WW) {
          const iW = this.hasNormals;
          this._normals = WW, iW !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(WW) {
          const iW = this.hasTangents;
          this._tangents = WW, iW !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(WW) {
          const iW = this.hasUVs;
          this._uvs = WW, iW !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(WW) {
          const iW = this.hasUV2s;
          this._uv2s = WW, iW !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(WW) {
          const iW = this.hasColors;
          this._colors = WW, iW !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const iW = Yi.d.Clone((() => new WW(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return iW._positions = this._positions, iW._normals = this._normals, iW._tangents = this._tangents, iW._uvs = this._uvs, iW._uv2s = this._uv2s, iW._colors = this._colors, iW
        }
        serialize() {
          const WW = {};
          return WW.name = this.name, WW.influence = this.influence, null != this.id && (WW.id = this.id), WW.uniqueId = this.uniqueId, WW.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (WW.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (WW.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (WW.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (WW.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (WW.colors = Array.prototype.slice.call(this.getColors())), Yi.d.AppendSerializedAnimations(this, WW), WW
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(iW, OW) {
          let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const EW = new WW(iW.name, iW.influence, OW, mW);
          if (EW.bLW(iW.positions), null != iW.id && (EW.id = iW.id), iW.normals && EW.setNormals(iW.normals), iW.tangents && EW.setTangents(iW.tangents), iW.uvs && EW.setUVs(iW.uvs), iW.uv2s && EW.setUV2s(iW.uv2s), iW.colors && EW.setColors(iW.colors), iW.animations) {
            for (let WW = 0; WW < iW.animations.length; WW++) {
              const OW = iW.animations[WW],
                mW = (0, Bi.d)("BABYLON.Animation");
              mW && EW.animations.push(mW.Parse(OW))
            }
            iW.autoAnimate && OW && OW.beginAnimation(EW, iW.autoAnimateFrom, iW.autoAnimateTo, iW.autoAnimateLoop, iW.autoAnimateSpeed || 1)
          }
          return EW
        }
        static FromMesh(iW, OW, mW) {
          OW || (OW = iW.name);
          const EW = new WW(OW, mW, iW.bD(), iW.morphTargetManager);
          return EW.bLW(iW.getVerticesData(pW.k.PositionKind)), iW.isVerticesDataPresent(pW.k.NormalKind) && EW.setNormals(iW.getVerticesData(pW.k.NormalKind)), iW.isVerticesDataPresent(pW.k.TangentKind) && EW.setTangents(iW.getVerticesData(pW.k.TangentKind)), iW.isVerticesDataPresent(pW.k.UVKind) && EW.setUVs(iW.getVerticesData(pW.k.UVKind)), iW.isVerticesDataPresent(pW.k.UV2Kind) && EW.setUV2s(iW.getVerticesData(pW.k.UV2Kind)), iW.isVerticesDataPresent(pW.k.ColorKind) && EW.setColors(iW.getVerticesData(pW.k.ColorKind)), EW
        }
      }, (() => {
        const LW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, JW.M)()], OW = [(0, JW.M)()], (0, TW.e)(null, null, iW, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: WW => "id" in WW,
            get: WW => WW.id,
            set: (WW, iW) => {
              WW.id = iW
            }
          },
          metadata: LW
        }, mW, EW), (0, TW.e)(null, null, OW, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: WW => "morphTargetManager" in WW,
            get: WW => WW.morphTargetManager,
            set: (WW, iW) => {
              WW.morphTargetManager = iW
            }
          },
          metadata: LW
        }, NW, PW), LW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: LW
        })
      })(), WW
    })();
    var tm, Zm = OW(42641),
      xm = OW(41773);
    ! function(WW) {
      WW[WW.INTANGENT = 0] = "INTANGENT", WW[WW.OUTTANGENT = 1] = "OUTTANGENT"
    }(tm || (tm = {}));
    class lm {
      static _IsTransformable(WW) {
        return WW && (WW instanceof ZW.e || WW instanceof Nm.e || WW instanceof xm.b)
      }
      static _CreateNodeAnimation(WW, iW, OW, mW, NW) {
        if (this._IsTransformable(WW)) {
          const PW = [],
            LW = [],
            cW = iW.getKeys(),
            wW = lm._CalculateMinMaxKeyFrames(cW),
            tW = lm._DeduceInterpolation(cW, OW, mW),
            ZW = tW.interpolationType,
            xW = tW.shouldBakeAnimation;
          if (xW ? lm._CreateBakedAnimation(WW, iW, OW, wW.min, wW.max, iW.framePerSecond, NW, PW, LW, wW, mW) : "LINEAR" === ZW || "STEP" === ZW ? lm._CreateLinearOrStepAnimation(WW, iW, OW, PW, LW, mW) : "CUBICSPLINE" === ZW ? lm._CreateCubicSplineAnimation(WW, iW, OW, PW, LW, mW) : lm._CreateBakedAnimation(WW, iW, OW, wW.min, wW.max, iW.framePerSecond, NW, PW, LW, wW, mW), PW.length && LW.length) {
            return {
              inputs: PW,
              outputs: LW,
              samplerInterpolation: ZW,
              inputsMin: xW ? wW.min : EW.Tools.FloatRound(wW.min / iW.framePerSecond),
              inputsMax: xW ? wW.max : EW.Tools.FloatRound(wW.max / iW.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(WW) {
        let iW = null,
          OW = "VEC3",
          mW = !1;
        const NW = WW.targetProperty.split(".");
        switch (NW[0]) {
          case "YZ":
            iW = "scale";
            break;
          case "position":
            iW = "translation";
            break;
          case "rotation":
            OW = "VEC4", iW = "rotation";
            break;
          case "rotationQuaternion":
            OW = "VEC4", mW = !0, iW = "rotation";
            break;
          case "influence":
            OW = "SCALAR", iW = "weights";
            break;
          default:
            EW.Tools.Error(`Unsupported animatable property ${NW[0]}`)
        }
        return iW ? {
          animationChannelTargetPath: iW,
          dataAccessorType: OW,
          useQuaternion: mW
        } : (EW.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        let ZW;
        if (lm._IsTransformable(WW) && WW.animations)
          for (const xW of WW.animations) {
            if (tW && !tW(xW)) continue;
            const EW = lm._DeduceAnimationInfo(xW);
            EW && (ZW = {
              name: xW.name,
              samplers: [],
              channels: []
            }, lm._AddAnimation(`${xW.name}`, xW.hasRunningRuntimeAnimations ? iW : ZW, WW, xW, EW.dataAccessorType, EW.animationChannelTargetPath, mW, NW, PW, LW, EW.useQuaternion, cW, wW), ZW.samplers.length && ZW.channels.length && OW.push(ZW))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        let ZW;
        if (WW instanceof Zm.e) {
          const EW = WW.morphTargetManager;
          if (EW)
            for (let xW = 0; xW < EW.numTargets; ++xW) {
              const lW = EW.getTarget(xW);
              for (const AW of lW.animations) {
                if (tW && !tW(AW)) continue;
                const lW = new cm.d(`${AW.name}`, "influence", AW.framePerSecond, AW.dataType, AW.sO, AW.enableBlending),
                  bW = [],
                  jW = AW.getKeys();
                for (let WW = 0; WW < jW.length; ++WW) {
                  const iW = jW[WW];
                  for (let WW = 0; WW < EW.numTargets; ++WW) WW == xW ? bW.push(iW) : bW.push({
                    frame: iW.frame,
                    value: 0
                  })
                }
                lW.setKeys(bW, !0);
                const UW = lm._DeduceAnimationInfo(lW);
                UW && (ZW = {
                  name: lW.name,
                  samplers: [],
                  channels: []
                }, lm._AddAnimation(AW.name, AW.hasRunningRuntimeAnimations ? iW : ZW, WW, lW, UW.dataAccessorType, UW.animationChannelTargetPath, mW, NW, PW, LW, UW.useQuaternion, cW, wW, EW.numTargets), ZW.samplers.length && ZW.channels.length && OW.push(ZW))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
        let tW;
        if (WW.animationGroups) {
          const ZW = WW.animationGroups;
          for (const xW of ZW) {
            const ZW = new Map,
              lW = new Map,
              AW = new Set,
              bW = xW.to - xW.from;
            tW = {
              name: xW.name,
              channels: [],
              samplers: []
            };
            for (let iW = 0; iW < xW.targetedAnimations.length; ++iW) {
              const wW = xW.targetedAnimations[iW],
                bW = wW.target,
                jW = wW.animation;
              if (cW && !cW(jW)) continue;
              const UW = LW.has(bW);
              if (this._IsTransformable(bW) || 1 === bW.length && this._IsTransformable(bW[0])) {
                const WW = lm._DeduceAnimationInfo(wW.animation);
                if (WW) {
                  const iW = this._IsTransformable(bW) ? bW : this._IsTransformable(bW[0]) ? bW[0] : null;
                  iW && lm._AddAnimation(`${jW.name}`, tW, iW, jW, WW.dataAccessorType, WW.animationChannelTargetPath, OW, mW, EW, NW, WW.useQuaternion, PW, UW)
                }
              } else if (bW instanceof wm || 1 === bW.length && bW[0] instanceof wm) {
                if (lm._DeduceAnimationInfo(wW.animation)) {
                  const iW = bW instanceof wm ? bW : bW[0];
                  if (iW) {
                    const OW = WW.morphTargetManagers.find((WW => {
                      for (let OW = 0; OW < WW.numTargets; ++OW)
                        if (WW.getTarget(OW) === iW) return !0;
                      return !1
                    }));
                    if (OW) {
                      const mW = WW.meshes.find((WW => WW.morphTargetManager === OW));
                      mW && (ZW.has(mW) || ZW.set(mW, new Map), ZW.get(mW)?.set(iW, jW), AW.add(mW), lW.set(mW, jW))
                    }
                  }
                }
              }
            }
            AW.forEach((WW => {
              const iW = WW.morphTargetManager;
              let LW = null;
              const cW = [],
                wW = lW.get(WW).getKeys(),
                AW = wW.length;
              for (let OW = 0; OW < AW; ++OW)
                for (let mW = 0; mW < iW.numTargets; ++mW) {
                  const EW = iW.getTarget(mW),
                    NW = ZW.get(WW);
                  if (NW) {
                    const iW = NW.get(EW);
                    iW ? (LW || (LW = new cm.d(`${xW.name}_${WW.name}_MorphWeightAnimation`, "influence", iW.framePerSecond, cm.d.ANIMATIONTYPE_FLOAT, iW.sO, iW.enableBlending)), cW.push(iW.getKeys()[OW])) : cW.push({
                      frame: xW.from + bW / AW * OW,
                      value: EW.influence,
                      inTangent: wW[0].inTangent ? 0 : void 0,
                      outTangent: wW[0].outTangent ? 0 : void 0
                    })
                  }
                }
              LW.setKeys(cW, !0);
              const jW = lm._DeduceAnimationInfo(LW);
              jW && lm._AddAnimation(`${xW.name}_${WW.name}_MorphWeightAnimation`, tW, WW, LW, jW.dataAccessorType, jW.animationChannelTargetPath, OW, mW, EW, NW, jW.useQuaternion, PW, !1, iW?.numTargets)
            })), tW.channels.length && tW.samplers.length && (wW?.set(xW, iW.length), iW.push(tW))
          }
        }
      }
      static _AddAnimation(WW, iW, OW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW) {
        const bW = lm._CreateNodeAnimation(OW, EW, PW, ZW, xW);
        let jW, UW, kW, sW, MW, KW;
        if (bW) {
          if (AW) {
            let WW, iW = 0;
            const OW = [];
            for (; bW.inputs.length > 0;) WW = bW.inputs.shift(), iW % AW == 0 && OW.push(WW), iW++;
            bW.inputs = OW
          }
          const WW = LW.get(OW),
            EW = new Float32Array(bW.inputs);
          jW = cW.createBufferView(EW), UW = cW.createAccessor(jW, "SCALAR", 5126, bW.inputs.length, void 0, {
            min: [bW.inputsMin],
            max: [bW.inputsMax]
          }), tW.push(UW), kW = tW.length - 1;
          const wW = new mW.Quaternion,
            ZW = new mW.fA,
            xW = new mW.fA,
            SW = OW instanceof Nm.e,
            YW = BO(NW),
            yW = new Float32Array(bW.outputs.length * YW);
          bW.outputs.forEach((function(WW, iW) {
            let OW = WW;
            switch (PW) {
              case "translation":
                lW && (mW.fA.FromArrayToRef(WW, 0, xW), GO(xW), xW.toArray(OW));
                break;
              case "rotation":
                4 === WW.length ? mW.Quaternion.FromArrayToRef(WW, 0, wW) : (OW = new Array(4), mW.fA.FromArrayToRef(WW, 0, ZW), mW.Quaternion.FromEulerVectorToRef(ZW, wW)), lW && (IO(wW), SW && aO(wW)), wW.toArray(OW)
            }
            yW.set(OW, iW * YW)
          })), jW = cW.createBufferView(yW), UW = cW.createAccessor(jW, NW, 5126, bW.outputs.length), tW.push(UW), sW = tW.length - 1, MW = {
            interpolation: bW.samplerInterpolation,
            input: kW,
            output: sW
          }, iW.samplers.push(MW), KW = {
            sampler: iW.samplers.length - 1,
            target: {
              node: WW,
              path: PW
            }
          }, iW.channels.push(KW)
        }
      }
      static _CreateBakedAnimation(WW, iW, OW, NW, PW, LW, cW, wW, tW, ZW, xW) {
        let lW;
        const AW = mW.Quaternion.Identity();
        let bW, jW, UW, kW, sW, MW = null,
          KW = null;
        ZW.min = EW.Tools.FloatRound(NW / LW);
        const SW = iW.getKeys();
        for (let mW = 0, YW = SW.length; mW < YW; ++mW) {
          if (jW = SW[mW], mW + 1 < YW)
            if (UW = SW[mW + 1], jW.value.equals && jW.value.equals(UW.value) || jW.value === UW.value) {
              if (0 !== mW) continue;
              sW = jW.frame
            } else sW = UW.frame;
          else {
            if (kW = SW[mW - 1], jW.value.equals && jW.value.equals(kW.value) || jW.value === kW.value) continue;
            sW = PW
          }
          if (sW)
            for (let mW = jW.frame; mW <= sW; mW += cW) {
              if (bW = EW.Tools.FloatRound(mW / LW), bW === MW) continue;
              MW = bW, KW = bW;
              const NW = {
                key: 0,
                repeatCount: 0,
                sO: iW.sO
              };
              lW = iW._interpolate(mW, NW), lm._SetInterpolatedValue(WW, lW, bW, iW, OW, AW, wW, tW, xW)
            }
        }
        KW && (ZW.max = KW)
      }
      static _ConvertFactorToVector3OrQuaternion(WW, iW, OW, NW, PW) {
        const LW = lm._GetBasePositionRotationOrScale(iW, NW, PW),
          cW = OW.targetProperty.split("."),
          wW = cW ? cW[1] : "",
          tW = PW ? mW.Quaternion.FromArray(LW).normalize() : mW.fA.FromArray(LW);
        switch (wW) {
          case "x":
          case "y":
          case "z":
            tW[wW] = WW;
            break;
          case "w":
            tW.w = WW;
            break;
          default:
            EW.Tools.Error(`glTFAnimation: Unsupported component name "${wW}"!`)
        }
        return tW
      }
      static _SetInterpolatedValue(WW, iW, OW, EW, NW, PW, LW, cW, wW) {
        let tW;
        LW.push(OW), "weights" !== NW ? (EW.dataType === cm.d.ANIMATIONTYPE_FLOAT && (iW = this._ConvertFactorToVector3OrQuaternion(iW, WW, EW, NW, wW)), "rotation" === NW ? (wW ? PW = iW : (tW = iW, mW.Quaternion.RotationYawPitchRollToRef(tW.y, tW.x, tW.z, PW)), cW.push(PW.wEW())) : (tW = iW, cW.push(tW.wEW()))) : cW.push([iW])
      }
      static _CreateLinearOrStepAnimation(WW, iW, OW, mW, EW, NW) {
        for (const PW of iW.getKeys()) mW.push(PW.frame / iW.framePerSecond), lm._AddKeyframeValue(PW, iW, EW, OW, WW, NW)
      }
      static _CreateCubicSplineAnimation(WW, iW, OW, mW, EW, NW) {
        iW.getKeys().forEach((function(PW) {
          mW.push(PW.frame / iW.framePerSecond), lm._AddSplineTangent(tm.INTANGENT, EW, OW, "CUBICSPLINE", PW, NW), lm._AddKeyframeValue(PW, iW, EW, OW, WW, NW), lm._AddSplineTangent(tm.OUTTANGENT, EW, OW, "CUBICSPLINE", PW, NW)
        }))
      }
      static _GetBasePositionRotationOrScale(WW, iW, OW) {
        let EW;
        if ("rotation" === iW)
          if (OW) {
            EW = (WW.rotationQuaternion ?? mW.Quaternion.Identity()).wEW()
          } else {
            EW = (WW.rotation ?? mW.fA.Zero()).wEW()
          }
        else if ("translation" === iW) {
          EW = (WW.position ?? mW.fA.Zero()).wEW()
        } else {
          EW = (WW.YZ ?? mW.fA.One()).wEW()
        }
        return EW
      }
      static _AddKeyframeValue(WW, iW, OW, NW, PW, LW) {
        let cW;
        const wW = iW.dataType;
        if (wW === cm.d.ANIMATIONTYPE_VECTOR3) {
          let iW = WW.value.wEW();
          if ("rotation" === NW) {
            const WW = mW.fA.FromArray(iW);
            iW = mW.Quaternion.RotationYawPitchRoll(WW.y, WW.x, WW.z).wEW()
          }
          OW.push(iW)
        } else if (wW === cm.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === NW) OW.push([WW.value]);
          else if (cW = this._ConvertFactorToVector3OrQuaternion(WW.value, PW, iW, NW, LW), cW) {
            if ("rotation" === NW) {
              const WW = LW ? cW : mW.Quaternion.RotationYawPitchRoll(cW.y, cW.x, cW.z).normalize();
              OW.push(WW.wEW())
            }
            OW.push(cW.wEW())
          }
        } else wW === cm.d.ANIMATIONTYPE_QUATERNION ? OW.push(WW.value.normalize().wEW()) : EW.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(WW, iW, OW) {
        let mW, EW, NW = !1;
        if ("rotation" === iW && !OW) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let PW = 0, LW = WW.length; PW < LW; ++PW)
          if (EW = WW[PW], EW.inTangent || EW.outTangent)
            if (mW) {
              if ("CUBICSPLINE" !== mW) {
                mW = "LINEAR", NW = !0;
                break
              }
            } else mW = "CUBICSPLINE";
        else if (mW) {
          if ("CUBICSPLINE" === mW || EW.interpolation && 1 === EW.interpolation && "STEP" !== mW) {
            mW = "LINEAR", NW = !0;
            break
          }
        } else mW = EW.interpolation && 1 === EW.interpolation ? "STEP" : "LINEAR";
        return mW || (mW = "LINEAR"), {
          interpolationType: mW,
          shouldBakeAnimation: NW
        }
      }
      static _AddSplineTangent(WW, iW, OW, EW, NW, PW) {
        let LW;
        const cW = WW === tm.INTANGENT ? NW.inTangent : NW.outTangent;
        if ("CUBICSPLINE" === EW) {
          if ("rotation" === OW)
            if (cW)
              if (PW) LW = cW.wEW();
              else {
                const WW = cW;
                LW = mW.Quaternion.RotationYawPitchRoll(WW.y, WW.x, WW.z).wEW()
              }
          else LW = [0, 0, 0, 0];
          else LW = "weights" === OW ? cW ? [cW] : [0] : cW ? cW.wEW() : [0, 0, 0];
          iW.push(LW)
        }
      }
      static _CalculateMinMaxKeyFrames(WW) {
        let iW = 1 / 0,
          OW = -1 / 0;
        return WW.forEach((function(WW) {
          iW = Math.min(iW, WW.frame), OW = Math.max(OW, WW.frame)
        })), {
          min: iW,
          max: OW
        }
      }
    }

    function Am(WW, iW, OW, NW, PW, LW) {
      const cW = {
          attributes: {},
          influence: WW.influence,
          name: WW.name
        },
        wW = iW.geometry;
      if (!wW) return EW.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), cW;
      const ZW = LW ? -1 : 1,
        xW = mW.fA.Zero();
      let lW, AW;
      if (WW.hasPositions) {
        const NW = WW.getPositions(),
          LW = wW.getVerticesData(tW.g.PositionKind);
        if (LW) {
          const WW = new Float32Array(LW.length),
            iW = [1 / 0, 1 / 0, 1 / 0],
            EW = [-1 / 0, -1 / 0, -1 / 0];
          AW = LW.length / 3, lW = 0;
          for (let OW = lW; OW < AW; ++OW) {
            const PW = mW.fA.FromArray(LW, 3 * OW);
            mW.fA.FromArray(NW, 3 * OW).subtractToRef(PW, xW), xW.x *= ZW, iW[0] = Math.min(iW[0], xW.x), EW[0] = Math.max(EW[0], xW.x), iW[1] = Math.min(iW[1], xW.y), EW[1] = Math.max(EW[1], xW.y), iW[2] = Math.min(iW[2], xW.z), EW[2] = Math.max(EW[2], xW.z), WW[3 * OW] = xW.x, WW[3 * OW + 1] = xW.y, WW[3 * OW + 2] = xW.z
          }
          const wW = OW.createBufferView(WW, 12),
            tW = OW.createAccessor(wW, "VEC3", 5126, NW.length / 3, 0, {
              min: iW,
              max: EW
            });
          PW.push(tW), cW.attributes.POSITION = PW.length - 1
        } else EW.Tools.Warn(`Morph target positions for mesh ${iW.name} were not exported. Mesh does not have position vertex data`)
      }
      if (WW.hasNormals) {
        const NW = WW.getNormals(),
          LW = wW.getVerticesData(tW.g.NormalKind);
        if (LW) {
          const WW = new Float32Array(LW.length);
          AW = LW.length / 3, lW = 0;
          for (let OW = lW; OW < AW; ++OW) {
            const iW = mW.fA.FromArray(LW, 3 * OW).normalize();
            mW.fA.FromArray(NW, 3 * OW).normalize().subtractToRef(iW, xW), WW[3 * OW] = xW.x * ZW, WW[3 * OW + 1] = xW.y, WW[3 * OW + 2] = xW.z
          }
          const iW = OW.createBufferView(WW, 12),
            EW = OW.createAccessor(iW, "VEC3", 5126, NW.length / 3, 0);
          PW.push(EW), cW.attributes.NORMAL = PW.length - 1
        } else EW.Tools.Warn(`Morph target normals for mesh ${iW.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (WW.hasTangents) {
        const NW = WW.getTangents(),
          LW = wW.getVerticesData(tW.g.TangentKind);
        if (LW) {
          AW = LW.length / 4;
          const WW = new Float32Array(3 * AW);
          lW = 0;
          for (let OW = lW; OW < AW; ++OW) {
            const iW = mW.fA.FromArray(LW, 4 * OW);
            RO(iW);
            const EW = mW.fA.FromArray(NW, 3 * OW);
            RO(EW), EW.subtractToRef(iW, xW), WW[3 * OW] = xW.x * ZW, WW[3 * OW + 1] = xW.y, WW[3 * OW + 2] = xW.z
          }
          const iW = OW.createBufferView(WW, 12),
            EW = OW.createAccessor(iW, "VEC3", 5126, AW, 0);
          PW.push(EW), cW.attributes.TANGENT = PW.length - 1
        } else EW.Tools.Warn(`Morph target tangents for mesh ${iW.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (WW.hasColors) {
        const NW = WW.getColors(),
          LW = wW.getVerticesData(tW.g.ColorKind),
          ZW = wW.getVertexBuffer(tW.g.ColorKind);
        if (LW && ZW) {
          const WW = ZW.getSize();
          AW = LW.length / WW;
          const iW = new Float32Array(AW * WW);
          lW = 0;
          for (let OW = lW; OW < AW; ++OW)
            if (3 === WW) {
              const EW = mW.fA.FromArray(LW, OW * WW);
              mW.fA.FromArray(NW, OW * WW).subtractToRef(EW, xW), iW[3 * OW] = xW.x, iW[3 * OW + 1] = xW.y, iW[3 * OW + 2] = xW.z
            } else if (4 === WW) {
            const EW = new mW.Vector4,
              PW = mW.Vector4.FromArray(LW, OW * WW);
            mW.Vector4.FromArray(NW, OW * WW).subtractToRef(PW, EW), iW[4 * OW] = EW.x, iW[4 * OW + 1] = EW.y, iW[4 * OW + 2] = EW.z, iW[4 * OW + 3] = EW.w
          } else EW.Tools.Warn(`Unsupported number of components for color attribute: ${WW}`);
          const wW = OW.createBufferView(iW, 4 * WW),
            tW = OW.createAccessor(wW, 3 === WW ? "VEC3" : "VEC4", 5126, AW, 0);
          PW.push(tW), cW.attributes.COLOR_0 = PW.length - 1
        } else EW.Tools.Warn(`Morph target colors for mesh ${iW.name} were not exported. Mesh does not have colors vertex data`)
      }
      return cW
    }
    var bm = OW(53752);
    class jm {}
    jm.DEFAULT_COLOR = RW.b.White(), jm.DEFAULT_WIDTH_ATTENUATED = 1, jm.DEFAULT_WIDTH = .1;
    var Um = OW(42573);
    class km {
      constructor(WW) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = WW
      }
      moveTo(WW, iW) {
        this._currentPath = new Um.h(WW, iW), this._tempPaths.push(this._currentPath)
      }
      lineTo(WW, iW) {
        this._currentPath.addLineTo(WW, iW)
      }
      quadraticCurveTo(WW, iW, OW, mW) {
        this._currentPath.addQuadraticCurveTo(WW, iW, OW, mW, this._resolution)
      }
      bezierCurveTo(WW, iW, OW, mW, EW, NW) {
        this._currentPath.addBezierCurveTo(WW, iW, OW, mW, EW, NW, this._resolution)
      }
      extractHoles() {
        for (const WW of this._tempPaths) WW.area() > 0 ? this._holes.push(WW) : this._paths.push(WW);
        if (!this._paths.length && this._holes.length) {
          const WW = this._holes;
          this._holes = this._paths, this._paths = WW
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

    function sm(WW, iW, OW, mW, EW, NW) {
      const PW = NW.glyphs[WW] || NW.glyphs["?"];
      if (!PW) return null;
      const LW = new km(EW);
      if (PW.o) {
        const WW = PW.o.split(" ");
        for (let EW = 0, NW = WW.length; EW < NW;) {
          switch (WW[EW++]) {
            case "m": {
              const NW = parseInt(WW[EW++]) * iW + OW,
                PW = parseInt(WW[EW++]) * iW + mW;
              LW.moveTo(NW, PW);
              break
            }
            case "l": {
              const NW = parseInt(WW[EW++]) * iW + OW,
                PW = parseInt(WW[EW++]) * iW + mW;
              LW.lineTo(NW, PW);
              break
            }
            case "q": {
              const NW = parseInt(WW[EW++]) * iW + OW,
                PW = parseInt(WW[EW++]) * iW + mW,
                cW = parseInt(WW[EW++]) * iW + OW,
                wW = parseInt(WW[EW++]) * iW + mW;
              LW.quadraticCurveTo(cW, wW, NW, PW);
              break
            }
            case "b": {
              const NW = parseInt(WW[EW++]) * iW + OW,
                PW = parseInt(WW[EW++]) * iW + mW,
                cW = parseInt(WW[EW++]) * iW + OW,
                wW = parseInt(WW[EW++]) * iW + mW,
                tW = parseInt(WW[EW++]) * iW + OW,
                ZW = parseInt(WW[EW++]) * iW + mW;
              LW.bezierCurveTo(cW, wW, tW, ZW, NW, PW);
              break
            }
          }
        }
      }
      return LW.extractHoles(), {
        offsetX: PW.ha * iW,
        shapePath: LW
      }
    }

    function Mm(WW, iW, OW, mW) {
      const EW = Array.from(WW),
        NW = iW / mW.resolution,
        PW = (mW.boundingBox.yMax - mW.boundingBox.yMin + mW.underlineThickness) * NW,
        LW = [];
      let cW = 0,
        wW = 0;
      for (let tW = 0; tW < EW.length; tW++) {
        const WW = EW[tW];
        if ("\n" === WW) cW = 0, wW -= PW;
        else {
          const iW = sm(WW, NW, cW, wW, OW, mW);
          iW && (cW += iW.offsetX, LW.push(iW.shapePath))
        }
      }
      return LW
    }
    class Km {
      static ConvertPoints(WW, iW) {
        if (WW.length && Array.isArray(WW) && "number" === typeof WW[0]) return [WW];
        if (WW.length && Array.isArray(WW[0]) && "number" === typeof WW[0][0]) return WW;
        if (WW.length && !Array.isArray(WW[0]) && WW[0] instanceof VW.q) {
          const iW = [];
          for (let OW = 0; OW < WW.length; OW++) {
            const mW = WW[OW];
            iW.push(mW.x, mW.y, mW.z)
          }
          return [iW]
        }
        if (WW.length > 0 && Array.isArray(WW[0]) && WW[0].length > 0 && WW[0][0] instanceof VW.q) {
          const iW = [],
            OW = WW;
          for (const WW of OW) iW.push(WW.flatMap((WW => [WW.x, WW.y, WW.z])));
          return iW
        }
        if (WW instanceof Float32Array) {
          if (iW?.floatArrayStride) {
            const OW = [],
              mW = 3 * iW.floatArrayStride;
            for (let iW = 0; iW < WW.length; iW += mW) {
              const EW = new Array(mW);
              for (let OW = 0; OW < mW; OW++) EW[OW] = WW[iW + OW];
              OW.push(EW)
            }
            return OW
          }
          return [Array.from(WW)]
        }
        if (WW.length && WW[0] instanceof Float32Array) {
          const iW = [];
          for (const OW of WW) iW.push(Array.from(OW));
          return iW
        }
        return []
      }
      static OmitZeroLengthPredicate(WW, iW, OW) {
        const mW = [];
        return iW.subtract(WW).lengthSquared() > 0 && mW.push([WW, iW]), OW.subtract(iW).lengthSquared() > 0 && mW.push([iW, OW]), WW.subtract(OW).lengthSquared() > 0 && mW.push([OW, WW]), 0 === mW.length ? null : mW
      }
      static OmitDuplicatesPredicate(WW, iW, OW, mW) {
        const EW = [];
        return Km._SearchInPoints(WW, iW, mW) || EW.push([WW, iW]), Km._SearchInPoints(iW, OW, mW) || EW.push([iW, OW]), Km._SearchInPoints(OW, WW, mW) || EW.push([OW, WW]), 0 === EW.length ? null : EW
      }
      static _SearchInPoints(WW, iW, OW) {
        for (const mW of OW)
          for (let OW = 0; OW < mW.length; OW++)
            if (mW[OW]?.equals(WW) && (mW[OW + 1]?.equals(iW) || mW[OW - 1]?.equals(iW))) return !0;
        return !1
      }
      static MeshesToLines(WW, iW) {
        const OW = [];
        for (let mW = 0; mW < WW.length; mW++) {
          const EW = WW[mW],
            NW = EW.getVerticesData(pW.k.PositionKind),
            PW = EW.IEW();
          if (NW && PW)
            for (let WW = 0, LW = 0; WW < PW.length; WW++) {
              const cW = 3 * PW[LW++],
                wW = 3 * PW[LW++],
                tW = 3 * PW[LW++],
                ZW = new VW.q(NW[cW], NW[cW + 1], NW[cW + 2]),
                xW = new VW.q(NW[wW], NW[wW + 1], NW[wW + 2]),
                lW = new VW.q(NW[tW], NW[tW + 1], NW[tW + 2]);
              if (iW) {
                const LW = iW(ZW, xW, lW, OW, WW, cW, EW, mW, NW, PW);
                if (LW)
                  for (const WW of LW) OW.push(WW)
              } else OW.push([ZW, xW], [xW, lW], [lW, ZW])
            }
        }
        return OW
      }
      static ToVector3Array(WW) {
        if (Array.isArray(WW[0])) {
          const iW = [],
            OW = WW;
          for (const WW of OW) {
            const OW = [];
            for (let iW = 0; iW < WW.length; iW += 3) OW.push(new VW.q(WW[iW], WW[iW + 1], WW[iW + 2]));
            iW.push(OW)
          }
          return iW
        }
        const iW = WW,
          OW = [];
        for (let mW = 0; mW < iW.length; mW += 3) OW.push(new VW.q(iW[mW], iW[mW + 1], iW[mW + 2]));
        return OW
      }
      static ToNumberArray(WW) {
        return WW.flatMap((WW => [WW.x, WW.y, WW.z]))
      }
      static GetPointsCountInfo(WW) {
        const iW = new Array(WW.length);
        let OW = 0;
        for (let mW = WW.length; mW--;) iW[mW] = WW[mW].length / 3, OW += iW[mW];
        return {
          total: OW,
          counts: iW
        }
      }
      static GetLineLength(WW) {
        if (0 === WW.length) return 0;
        let iW;
        iW = "number" === typeof WW[0] ? Km.ToVector3Array(WW) : WW;
        const OW = VW.l.fA[0];
        let mW = 0;
        for (let EW = 0; EW < iW.length - 1; EW++) {
          const WW = iW[EW];
          mW += iW[EW + 1].subtractToRef(WW, OW).length()
        }
        return mW
      }
      static GetLineLengthArray(WW, iW) {
        const OW = iW ? new Float32Array(iW, 0, WW.length / 3) : new Float32Array(WW.length / 3);
        let mW = 0;
        for (let EW = 0, NW = WW.length / 3 - 1; EW < NW; EW++) {
          let iW = WW[3 * EW + 0],
            NW = WW[3 * EW + 1],
            PW = WW[3 * EW + 2];
          iW -= WW[3 * EW + 3], NW -= WW[3 * EW + 4], PW -= WW[3 * EW + 5];
          mW += Math.sqrt(iW * iW + NW * NW + PW * PW), OW[EW + 1] = mW
        }
        return OW
      }
      static SegmentizeSegmentByCount(WW, iW, OW) {
        const mW = [],
          EW = iW.subtract(WW),
          NW = VW.l.fA[0];
        NW.Z5(OW);
        const PW = VW.l.fA[1];
        EW.divideToRef(NW, PW);
        let LW = WW.clone();
        mW.push(LW);
        for (let cW = 0; cW < OW; cW++) LW = LW.clone(), mW.push(LW.addInPlace(PW));
        return mW
      }
      static SegmentizeLineBySegmentLength(WW, iW) {
        const OW = WW[0] instanceof VW.q ? Km.GetLineSegments(WW) : "number" === typeof WW[0] ? Km.GetLineSegments(Km.ToVector3Array(WW)) : WW,
          mW = [];
        for (const EW of OW)
          if (EW.length > iW) {
            const WW = Km.SegmentizeSegmentByCount(EW.point1, EW.point2, Math.ceil(EW.length / iW));
            for (const iW of WW) mW.push(iW)
          } else mW.push(EW.point1), mW.push(EW.point2);
        return mW
      }
      static SegmentizeLineBySegmentCount(WW, iW) {
        const OW = "number" === typeof WW[0] ? Km.ToVector3Array(WW) : WW,
          mW = Km.GetLineLength(OW) / iW;
        return Km.SegmentizeLineBySegmentLength(OW, mW)
      }
      static GetLineSegments(WW) {
        const iW = [];
        for (let OW = 0; OW < WW.length - 1; OW++) {
          const mW = WW[OW],
            EW = WW[OW + 1],
            NW = EW.subtract(mW).length();
          iW.push({
            point1: mW,
            point2: EW,
            length: NW
          })
        }
        return iW
      }
      static GetMinMaxSegmentLength(WW) {
        const iW = Km.GetLineSegments(WW).sort((WW => WW.length));
        return {
          min: iW[0].length,
          max: iW[iW.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const EW = iW * OW;
        let NW = 0,
          PW = 0;
        const LW = WW.length;
        for (let wW = 0; wW < LW; wW++) {
          if (EW <= NW + WW[wW].length) {
            PW = wW;
            break
          }
          NW += WW[wW].length
        }
        const cW = (EW - NW) / WW[PW].length;
        return WW[PW].point2.subtractToRef(WW[PW].point1, VW.l.fA[0]), VW.l.fA[0].scaleToRef(cW, VW.l.fA[1]), mW || VW.l.fA[1].addInPlace(WW[PW].point1), VW.l.fA[1].clone()
      }
      static GetCircleLinePoints(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WW,
          EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / iW;
        const NW = [];
        for (let PW = 0; PW <= iW; PW++) NW.push(new VW.q(Math.cos(PW * EW) * WW, Math.sin(PW * EW) * mW, OW));
        return NW
      }
      static GetBezierLinePoints(WW, iW, OW, mW) {
        return Um.g.CreateQuadraticBezier(WW, iW, OW, mW).getPoints().flatMap((WW => [WW.x, WW.y, WW.z]))
      }
      static GetArrowCap(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [WW.clone(), WW.add(iW.multiplyByFloats(OW, OW, OW))],
          widths: [mW, EW, NW, PW]
        }
      }
      static GetPointsFromText(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const PW = [],
          LW = Mm(WW, iW, OW, mW);
        for (const cW of LW) {
          for (const WW of cW.paths) {
            const iW = [],
              OW = WW.getPoints();
            for (const WW of OW) iW.push(WW.x, WW.y, EW);
            PW.push(iW)
          }
          if (NW)
            for (const WW of cW.holes) {
              const iW = [],
                OW = WW.getPoints();
              for (const WW of OW) iW.push(WW.x, WW.y, EW);
              PW.push(iW)
            }
        }
        return PW
      }
      static Color3toRGBAUint8(WW) {
        const iW = new Uint8Array(4 * WW.length);
        for (let OW = 0, mW = 0; OW < WW.length; OW++) iW[mW++] = 255 * WW[OW].r, iW[mW++] = 255 * WW[OW].g, iW[mW++] = 255 * WW[OW].b, iW[mW++] = 255;
        return iW
      }
      static CreateColorsTexture(WW, iW, OW, mW) {
        const EW = mW.VA().getCaps().maxTextureSize ?? 1,
          NW = iW.length > EW ? EW : iW.length,
          PW = Math.ceil(iW.length / EW);
        PW > 1 && (iW = [...iW, ...Array(NW * PW - iW.length).fill(iW[0])]);
        const LW = Km.Color3toRGBAUint8(iW),
          cW = new SW.b(LW, NW, PW, xO.e.TEXTUREFORMAT_RGBA, mW, !1, !0, OW);
        return cW.name = WW, cW
      }
      static PrepareEmptyColorsTexture(WW) {
        if (!jm.EmptyColorsTexture) {
          const iW = new Uint8Array(4);
          jm.EmptyColorsTexture = new SW.b(iW, 1, 1, xO.e.TEXTUREFORMAT_RGBA, WW, !1, !1, SW.b.NEAREST_NEAREST), jm.EmptyColorsTexture.name = "grlEmptyColorsTexture", jm.EmptyColorsTexture.jD.addOnce((() => {
            jm.EmptyColorsTexture = null
          }))
        }
        return jm.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        jm.EmptyColorsTexture?.dispose(), jm.EmptyColorsTexture = null
      }
      static BooleanToNumber(WW) {
        return WW ? 1 : 0
      }
    }
    class Sm extends fW.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Ym extends CW.e {
      isCompatible(WW) {
        return !0
      }
      constructor(WW, iW, OW) {
        OW = OW || {
          color: jm.DEFAULT_COLOR
        };
        const mW = new Sm;
        mW.GREASED_LINE_HAS_COLOR = !!OW.color && !OW.useColors, mW.GREASED_LINE_SIZE_ATTENUATION = OW.sizeAttenuation ?? !1, mW.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === OW.colorDistributionType, mW.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (iW ?? WW.bD()).useRightHandedSystem, mW.GREASED_LINE_CAMERA_FACING = OW.cameraFacing ?? !0, super(WW, Ym.GREASED_LINE_MATERIAL_NAME, 200, mW, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = OW?.forceGLSL || Ym.ForceGLSL, this._scene = iW ?? WW.bD(), this._engine = this._scene.VA(), this._cameraFacing = OW.cameraFacing ?? !0, this.visibility = OW.visibility ?? 1, this.useDash = OW.useDash ?? !1, this.dashRatio = OW.dashRatio ?? .5, this.dashOffset = OW.dashOffset ?? 0, this.width = OW.width ? OW.width : OW.sizeAttenuation ? jm.DEFAULT_WIDTH_ATTENUATED : jm.DEFAULT_WIDTH, this._sizeAttenuation = OW.sizeAttenuation ?? !1, this.colorMode = OW.colorMode ?? 0, this._color = OW.color ?? null, this.useColors = OW.useColors ?? !1, this._colorsDistributionType = OW.colorDistributionType ?? 0, this.colorsSampling = OW.colorsSampling ?? SW.b.NEAREST_NEAREST, this._colors = OW.colors ?? null, this.dashCount = OW.dashCount ?? 1, this.resolution = OW.resolution ?? new VW.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), OW.colorsTexture ? this.colorsTexture = OW.colorsTexture : this._colors ? this.colorsTexture = Km.CreateColorsTexture(`${WW.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? jm.DEFAULT_COLOR, Km.PrepareEmptyColorsTexture(this._scene)), this._engine.jD.add((() => {
          Km.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(WW) {
        WW.push("grl_offsets"), WW.push("grl_widths"), WW.push("grl_colorPointers"), WW.push("grl_counters"), this._cameraFacing ? (WW.push("grl_previousAndSide"), WW.push("grl_nextAndCounters")) : WW.push("grl_slopes")
      }
      getSamplers(WW) {
        WW.push("grl_colors")
      }
      getActiveTextures(WW) {
        this.colorsTexture && WW.push(this.colorsTexture)
      }
      getUniforms() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const iW = [{
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
        return this._cameraFacing && iW.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === WW && iW.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: iW,
          vertex: this._cameraFacing && this._isGLSL(WW) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(WW) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(WW) {
        if (this._cameraFacing) {
          WW.tWW("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || WW.tWW("viewProjection", this._scene.getTransformMatrix());
          const iW = VW.l.Vector4[0];
          iW.x = this._aspect, iW.y = this._resolution.x, iW.z = this._resolution.y, iW.w = this.width, WW.updateVector4("grl_aspect_resolution_lineWidth", iW)
        }
        const iW = VW.l.Vector4[0];
        iW.x = Km.BooleanToNumber(this.useDash), iW.y = this._dashArray, iW.z = this.dashOffset, iW.w = this.dashRatio, WW.updateVector4("grl_dashOptions", iW);
        const OW = VW.l.Vector4[1];
        OW.x = this.colorMode, OW.y = this.visibility, OW.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, OW.w = Km.BooleanToNumber(this.useColors), WW.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", OW), this._color && WW.updateColor3("grl_singleColor", this._color);
        const mW = this.colorsTexture ?? jm.EmptyColorsTexture;
        WW.setTexture("grl_colors", mW), WW.updateFloat2("grl_textureSize", mW?.getSize().width ?? 1, mW?.getSize().height ?? 1)
      }
      prepareDefines(WW, iW, OW) {
        WW.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, WW.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, WW.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, WW.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = iW.useRightHandedSystem, WW.GREASED_LINE_CAMERA_FACING = this._cameraFacing, WW.GREASED_LINE_USE_OFFSETS = !!OW.offsets
      }
      getClassName() {
        return Ym.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(iW) ? function(WW, iW) {
          if ("vertex" === WW) {
            const WW = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return iW && (WW["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), WW
          }
          return "fragment" === WW ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(WW, this._cameraFacing) : function(WW, iW) {
          if ("vertex" === WW) {
            const WW = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return iW && (WW["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), WW
          }
          return "fragment" === WW ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(WW, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(WW) {
        this.setColors(WW)
      }
      setColors(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = this._colors?.length ?? 0;
        if (this._colors = WW, null !== WW && 0 !== WW.length) {
          if (!iW || OW)
            if (this.colorsTexture && mW === WW.length && !OW) {
              const iW = Km.Color3toRGBAUint8(WW);
              this.colorsTexture.update(iW)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Km.CreateColorsTexture(`${this._material.name}-colors-texture`, WW, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(WW) {
        this._dashCount = WW, this._dashArray = 1 / WW
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(WW) {
        this._sizeAttenuation = WW, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(WW) {
        this.setColor(WW)
      }
      setColor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== WW || null !== this._color && null === WW ? (this._color = WW, iW || this.markAllDefinesAsDirty()) : this._color = WW
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(WW) {
        this._colorsDistributionType = WW, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(WW) {
        this._aspect = WW.x / WW.y, this._resolution = WW
      }
      serialize() {
        const WW = super.serialize(),
          iW = {
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
        return this._colors && (iW.colors = this._colors), this._color && (iW.color = this._color), WW.greasedLineMaterialOptions = iW, WW
      }
      parse(WW, iW, OW) {
        super.parse(WW, iW, OW);
        const mW = WW.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), mW.color && this.setColor(mW.color, !0), mW.colorDistributionType && (this.colorsDistributionType = mW.colorDistributionType), mW.colors && (this.colors = mW.colors), mW.colorsSampling && (this.colorsSampling = mW.colorsSampling), mW.colorMode && (this.colorMode = mW.colorMode), mW.useColors && (this.useColors = mW.useColors), mW.visibility && (this.visibility = mW.visibility), mW.useDash && (this.useDash = mW.useDash), mW.dashCount && (this.dashCount = mW.dashCount), mW.dashRatio && (this.dashRatio = mW.dashRatio), mW.dashOffset && (this.dashOffset = mW.dashOffset), mW.width && (this.width = mW.width), mW.sizeAttenuation && (this.sizeAttenuation = mW.sizeAttenuation), mW.resolution && (this.resolution = mW.resolution), this.colors ? this.colorsTexture = Km.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, iW) : Km.PrepareEmptyColorsTexture(iW), this.markAllDefinesAsDirty()
      }
      copyTo(WW) {
        const iW = WW;
        iW.colorsTexture?.dispose(), this._colors && (iW.colorsTexture = Km.CreateColorsTexture(`${iW._material.name}-colors-texture`, this._colors, iW.colorsSampling, this._scene)), iW.setColor(this.color, !0), iW.colorsDistributionType = this.colorsDistributionType, iW.colorsSampling = this.colorsSampling, iW.colorMode = this.colorMode, iW.useColors = this.useColors, iW.visibility = this.visibility, iW.useDash = this.useDash, iW.dashCount = this.dashCount, iW.dashRatio = this.dashRatio, iW.dashOffset = this.dashOffset, iW.width = this.width, iW.sizeAttenuation = this.sizeAttenuation, iW.resolution = this.resolution, iW.markAllDefinesAsDirty()
      }
      _isGLSL(WW) {
        return 0 === WW || this._forceGLSL
      }
    }
    Ym.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Ym.ForceGLSL = !1;
    var ym = OW(41919),
      Tm = OW(41927),
      Jm = OW(39908),
      hm = OW(41985),
      Hm = OW(41380);
    class nm extends hm.o {
      constructor(WW, iW, mW) {
        const EW = iW.VA(),
          NW = EW.isWebGPU && !(mW.forceGLSL || nm.ForceGLSL),
          PW = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        iW.useRightHandedSystem && PW.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const LW = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        mW.cameraFacing ? (PW.push("GREASED_LINE_CAMERA_FACING"), LW.push("grl_previousAndSide", "grl_nextAndCounters")) : (LW.push("grl_slopes"), LW.push("grl_counters"));
        const cW = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (NW || cW.push("world", "viewProjection", "view", "projection"), super(WW, iW, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: NW ? ["Scene", "Mesh"] : void 0,
            attributes: LW,
            uniforms: cW,
            samplers: NW ? [] : ["grlColors"],
            defines: PW,
            extraInitializationsAsync: async () => {
              NW ? await Promise.all([OW.e(652).then((() => OW(65046))), OW.e(708).then((() => OW(65051)))]) : await Promise.all([OW.e(645).then((() => OW(65053))), OW.e(709).then((() => OW(65056)))])
            },
            shaderLanguage: NW ? 1 : 0
          }), this._color = RW.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, mW = mW || {
            color: jm.DEFAULT_COLOR
          }, this.visibility = mW.visibility ?? 1, this.useDash = mW.useDash ?? !1, this.dashRatio = mW.dashRatio ?? .5, this.dashOffset = mW.dashOffset ?? 0, this.dashCount = mW.dashCount ?? 1, this.width = mW.width ? mW.width : mW.sizeAttenuation && mW.cameraFacing ? jm.DEFAULT_WIDTH_ATTENUATED : jm.DEFAULT_WIDTH, this.sizeAttenuation = mW.sizeAttenuation ?? !1, this.color = mW.color ?? RW.b.White(), this.useColors = mW.useColors ?? !1, this.colorsDistributionType = mW.colorDistributionType ?? 0, this.colorsSampling = mW.colorsSampling ?? SW.b.NEAREST_NEAREST, this.colorMode = mW.colorMode ?? 0, this._colors = mW.colors ?? null, this._cameraFacing = mW.cameraFacing ?? !0, this.resolution = mW.resolution ?? new VW.m(EW.getRenderWidth(), EW.getRenderHeight()), mW.colorsTexture ? this.colorsTexture = mW.colorsTexture : this._colors ? this.colorsTexture = Km.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, iW) : (this._color = this._color ?? jm.DEFAULT_COLOR, this.colorsTexture = Km.PrepareEmptyColorsTexture(iW)), NW) {
          const WW = new Hm.c;
          WW.setParameters(), WW.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", WW)
        }
        EW.jD.add((() => {
          Km.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== jm.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new VW.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(WW) {
        this.setColors(WW)
      }
      setColors(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const mW = this._colors?.length ?? 0;
        if (this._colors = WW, null !== WW && 0 !== WW.length) {
          if (!iW || OW)
            if (this._colorsTexture && mW === WW.length && !OW) {
              const iW = Km.Color3toRGBAUint8(WW);
              this._colorsTexture.update(iW)
            } else this._colorsTexture && this._colorsTexture !== jm.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Km.CreateColorsTexture(`${this.name}-colors-texture`, WW, this.colorsSampling, this.bD())
        } else {
          this._colorsTexture && this._colorsTexture !== jm.EmptyColorsTexture && this._colorsTexture.dispose();
          const WW = this.bD();
          WW && (this.colorsTexture = Km.PrepareEmptyColorsTexture(WW))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(WW) {
        this._colorsTexture = WW, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(WW) {
        this._width = WW, this.setFloat("grlWidth", WW)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(WW) {
        this._useColors = WW, this.setFloat("grlUseColors", Km.BooleanToNumber(WW))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(WW) {
        this._colorsSampling = WW
      }
      get visibility() {
        return this._visibility
      }
      set visibility(WW) {
        this._visibility = WW, this.setFloat("grlVisibility", WW)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(WW) {
        this._useDash = WW, this.setFloat("grlUseDash", Km.BooleanToNumber(WW))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(WW) {
        this._dashOffset = WW, this.setFloat("grlDashOffset", WW)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(WW) {
        this._dashRatio = WW, this.setFloat("grlDashRatio", WW)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(WW) {
        this._dashCount = WW, this._dashArray = 1 / WW, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(WW) {
        this._sizeAttenuation = WW, this.setFloat("grlSizeAttenuation", Km.BooleanToNumber(WW))
      }
      get color() {
        return this._color
      }
      set color(WW) {
        this.setColor(WW)
      }
      setColor(WW) {
        WW = WW ?? jm.DEFAULT_COLOR, this._color = WW, this.setColor3("grlColor", WW)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(WW) {
        this._colorsDistributionType = WW, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(WW) {
        this._colorMode = WW, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(WW) {
        this._resolution = WW, this.setVector2("grlResolution", WW), this.setFloat("grlAspect", WW.x / WW.y)
      }
      serialize() {
        const WW = super.serialize(),
          iW = {
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
        return this._colors && (iW.colors = this._colors), WW.greasedLineMaterialOptions = iW, WW
      }
      parse(WW, iW, OW) {
        const mW = WW.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), mW.color && (this.color = mW.color), mW.colorDistributionType && (this.colorsDistributionType = mW.colorDistributionType), mW.colorsSampling && (this.colorsSampling = mW.colorsSampling), mW.colorMode && (this.colorMode = mW.colorMode), mW.useColors && (this.useColors = mW.useColors), mW.visibility && (this.visibility = mW.visibility), mW.useDash && (this.useDash = mW.useDash), mW.dashCount && (this.dashCount = mW.dashCount), mW.dashRatio && (this.dashRatio = mW.dashRatio), mW.dashOffset && (this.dashOffset = mW.dashOffset), mW.width && (this.width = mW.width), mW.sizeAttenuation && (this.sizeAttenuation = mW.sizeAttenuation), mW.resolution && (this.resolution = mW.resolution), mW.colors ? this.colorsTexture = Km.CreateColorsTexture(`${this.name}-colors-texture`, mW.colors, this.colorsSampling, this.bD()) : this.colorsTexture = Km.PrepareEmptyColorsTexture(iW), this._cameraFacing = mW.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var um, om, dm;
    nm.ForceGLSL = !1,
      function(WW) {
        WW[WW.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", WW[WW.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(um || (um = {})),
      function(WW) {
        WW[WW.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", WW[WW.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", WW[WW.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(om || (om = {})),
      function(WW) {
        WW[WW.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", WW[WW.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", WW[WW.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", WW[WW.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", WW[WW.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(dm || (dm = {}));
    class em extends ym.e {
      constructor(WW, iW, OW) {
        super(WW, iW, null, null, !1, !1), this.name = WW, this._options = OW, this._lazy = !1, this._updatable = !1, this._engine = iW.VA(), this._lazy = OW.lazy ?? !1, this._updatable = OW.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = OW.colorPointers ?? [], this._widths = OW.widths ?? new Array(OW.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(WW) {
        let iW = 0;
        for (const mW of this._points) iW += mW.length;
        const OW = iW / 3 * 2 - this._widths.length;
        for (let mW = 0; mW < OW; mW++) this._widths.push(WW)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.XA && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(WW, iW) {
        for (const OW of WW) this._points.push(OW);
        this._lazy || this.setPoints(this._points, iW)
      }
      dispose(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(WW, iW)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(WW) {
        this._uvs = WW instanceof Float32Array ? WW : new Float32Array(WW), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(WW) {
        this.material instanceof nm && this.material.setDefine("GREASED_LINE_USE_OFFSETS", WW?.length > 0), this._offsets = WW, this._offsetsBuffer ? this._offsetsBuffer.update(WW) : this._createOffsetsBuffer(WW)
      }
      get widths() {
        return this._widths
      }
      set widths(WW) {
        this._widths = WW, this._lazy || this._widthsBuffer && this._widthsBuffer.update(WW)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(WW) {
        this._colorPointers = WW, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(WW)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof nm) return this.material;
        const WW = this.material?.pluginManager?.getPlugin(Ym.GREASED_LINE_MATERIAL_NAME);
        return WW || void 0
      }
      get points() {
        const WW = [];
        return Jm.c.DeepCopy(this._points, WW), WW
      }
      setPoints(WW, iW) {
        this._points = Km.ConvertPoints(WW, iW?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), iW?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, iW)
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
      serialize(WW) {
        super.serialize(WW), WW.type = this.getClassName(), WW.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = new Tm.c;
        return iW.positions = this._vertexPositions, iW.indices = this._indices, iW.uvs = this._uvs, WW && (iW.normals = [], Tm.c.ComputeNormals(this._vertexPositions, this._indices, iW.normals)), iW.applyToMesh(this, this._options.updatable), iW
      }
      _createOffsetsBuffer(WW) {
        const iW = this._scene.VA(),
          OW = new pW.b(iW, WW, this._updatable, 3);
        this.setVerticesBuffer(OW.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = OW
      }
    }
    class gm {
      constructor(WW, iW) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = WW, this.wasAddedByNoopNode = iW
      }
      getIndicesAccessor(WW, iW, OW, mW, EW) {
        return this._indicesAccessorMap.get(WW)?.get(iW)?.get(OW)?.get(mW)?.get(EW)
      }
      setIndicesAccessor(WW, iW, OW, mW, EW, NW) {
        let PW = this._indicesAccessorMap.get(WW);
        PW || (PW = new Map, this._indicesAccessorMap.set(WW, PW));
        let LW = PW.get(iW);
        LW || (LW = new Map, PW.set(iW, LW));
        let cW = LW.get(OW);
        cW || (cW = new Map, LW.set(OW, cW));
        let wW = cW.get(mW);
        wW || (wW = new Map, cW.set(mW, wW)), wW.set(EW, NW)
      }
      pushExportedNode(WW) {
        this._exportedNodes.has(WW) || this._exportedNodes.add(WW)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(WW) {
        return this._vertexBufferViewMap.get(WW)
      }
      setVertexBufferView(WW, iW) {
        this._vertexBufferViewMap.set(WW, iW)
      }
      setRemappedBufferView(WW, iW, OW) {
        this._remappedBufferView.set(WW, new Map), this._remappedBufferView.get(WW).set(iW, OW)
      }
      getRemappedBufferView(WW, iW) {
        return this._remappedBufferView.get(WW)?.get(iW)
      }
      getVertexAccessor(WW, iW, OW) {
        return this._vertexAccessorMap.get(WW)?.get(iW)?.get(OW)
      }
      setVertexAccessor(WW, iW, OW, mW) {
        let EW = this._vertexAccessorMap.get(WW);
        EW || (EW = new Map, this._vertexAccessorMap.set(WW, EW));
        let NW = EW.get(iW);
        NW || (NW = new Map, EW.set(iW, NW)), NW.set(OW, mW)
      }
      hasVertexColorAlpha(WW) {
        return this._vertexMapColorAlpha.get(WW) || !1
      }
      setHasVertexColorAlpha(WW, iW) {
        return this._vertexMapColorAlpha.set(WW, iW)
      }
      getMesh(WW) {
        return this._meshMap.get(WW)
      }
      setMesh(WW, iW) {
        this._meshMap.set(WW, iW)
      }
      bindMorphDataToMesh(WW, iW) {
        const OW = this._meshMorphTargetMap.get(WW) || [];
        this._meshMorphTargetMap.set(WW, OW), -1 === OW.indexOf(iW) && OW.push(iW)
      }
      getMorphTargetsFromMesh(WW) {
        return this._meshMorphTargetMap.get(WW)
      }
    }
    class Dm {
      _ApplyExtension(WW, iW, OW, mW) {
        if (OW >= iW.length) return Promise.resolve(WW);
        const EW = mW(iW[OW], WW);
        return EW ? EW.then((async WW => WW ? await this._ApplyExtension(WW, iW, OW + 1, mW) : null)) : this._ApplyExtension(WW, iW, OW + 1, mW)
      }
      _ApplyExtensions(WW, iW) {
        const OW = [];
        for (const mW of Dm._ExtensionNames) OW.push(this._extensions[mW]);
        return this._ApplyExtension(WW, OW, 0, iW)
      }
      _extensionsPostExportNodeAsync(WW, iW, OW, mW, EW) {
        return this._ApplyExtensions(iW, ((iW, NW) => iW.postExportNodeAsync && iW.postExportNodeAsync(WW, NW, OW, mW, EW, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(WW, iW, OW) {
        return this._ApplyExtensions(iW, ((iW, mW) => iW.postExportMaterialAsync && iW.postExportMaterialAsync(WW, mW, OW)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        return await Promise.all(Dm._ExtensionNames.map((async EW => {
          const NW = this._extensions[EW];
          if (NW.postExportMaterialAdditionalTexturesAsync) {
            const EW = await NW.postExportMaterialAdditionalTexturesAsync(WW, iW, OW);
            mW.push(...EW)
          }
        }))), mW
      }
      _extensionsPostExportTextures(WW, iW, OW) {
        for (const mW of Dm._ExtensionNames) {
          const EW = this._extensions[mW];
          EW.postExportTexture && EW.postExportTexture(WW, iW, OW)
        }
      }
      _extensionsPostExportMeshPrimitive(WW) {
        for (const iW of Dm._ExtensionNames) {
          const OW = this._extensions[iW];
          OW.postExportMeshPrimitive && OW.postExportMeshPrimitive(WW, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const WW of Dm._ExtensionNames) {
          const iW = this._extensions[WW];
          iW.preGenerateBinaryAsync && await iW.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(WW) {
        for (const iW of Dm._ExtensionNames) {
          const OW = this._extensions[iW];
          OW.enabled && WW(OW)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((WW => {
          var iW, OW, mW;
          WW.wasUsed && ((iW = this._glTF).extensionsUsed || (iW.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(WW.name) && this._glTF.extensionsUsed.push(WW.name), WW.required && ((OW = this._glTF).extensionsRequired || (OW.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(WW.name) && this._glTF.extensionsRequired.push(WW.name)), (mW = this._glTF).extensions || (mW.extensions = {}), WW.onExporting && WW.onExporting())
        }))
      }
      _loadExtensions() {
        for (const WW of Dm._ExtensionNames) {
          const iW = Dm._ExtensionFactories[WW](this);
          this._extensions[WW] = iW
        }
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bW.d.LastCreatedScene,
          iW = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${AW.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new oO(this), this._extensions = {}, this._bufferManager = new Em, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !WW) throw new Error("No scene available to export");
        this._babylonScene = WW, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: WW => WW?.uH?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...iW
        }, this._loadExtensions()
      }
      dispose() {
        for (const WW in this._extensions) {
          this._extensions[WW].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Dm.UnregisterExtension(WW) && EW.Tools.Warn(`Extension with the name ${WW} already exists`), Dm._ExtensionFactories[WW] = iW;
        const mW = OW ?? 0;
        Dm._ExtensionOrders[WW] = mW;
        let NW = Dm._ExtensionNames.length;
        for (let EW = 0; EW < Dm._ExtensionNames.length; EW++) {
          const WW = Dm._ExtensionNames[EW];
          if (mW < Dm._ExtensionOrders[WW]) {
            NW = EW;
            break
          }
        }
        Dm._ExtensionNames.splice(NW, 0, WW)
      }
      static UnregisterExtension(WW) {
        if (!Dm._ExtensionFactories[WW]) return !1;
        delete Dm._ExtensionFactories[WW], delete Dm._ExtensionOrders[WW];
        const iW = Dm._ExtensionNames.indexOf(WW);
        return -1 !== iW && Dm._ExtensionNames.splice(iW, 1), !0
      }
      _generateJSON(WW, iW, OW) {
        const mW = {
          byteLength: WW
        };
        return mW.byteLength && (this._glTF.buffers = [mW]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.rb = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (mW.uri = iW + ".bin"), OW ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(WW) {
        const iW = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const OW = this._generateJSON(iW.byteLength, WW, !0),
          mW = new Blob([iW], {
            type: "application/octet-stream"
          }),
          EW = WW + ".gltf",
          NW = WW + ".bin",
          PW = new wW;
        if (PW.files[EW] = OW, PW.files[NW] = mW, this._imageData)
          for (const LW in this._imageData) PW.files[LW] = this._imageData[LW];
        return PW
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(WW) {
        const iW = WW % 4;
        return 0 === iW ? iW : 4 - iW
      }
      async generateGLBAsync(WW) {
        this._shouldUseGlb = !0;
        const iW = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const OW = this._generateJSON(iW.byteLength),
          mW = WW + ".glb";
        let EW, NW = OW.length;
        if ("undefined" !== typeof TextEncoder) {
          EW = (new TextEncoder).encode(OW), NW = EW.length
        }
        const PW = this._getPadding(NW),
          LW = this._getPadding(iW.byteLength),
          cW = 28 + NW + PW + iW.byteLength + LW,
          tW = new Om(cW);
        if (tW.writeUInt32(1179937895), tW.writeUInt32(2), tW.writeUInt32(cW), tW.writeUInt32(NW + PW), tW.writeUInt32(1313821514), EW) tW.writeTypedArray(EW);
        else {
          const WW = "_".charCodeAt(0);
          for (let iW = 0; iW < NW; ++iW) {
            const mW = OW.charCodeAt(iW);
            mW != OW.codePointAt(iW) ? tW.writeUInt8(WW) : tW.writeUInt8(mW)
          }
        }
        for (let wW = 0; wW < PW; ++wW) tW.writeUInt8(32);
        tW.writeUInt32(iW.byteLength + LW), tW.writeUInt32(5130562), tW.writeTypedArray(iW);
        for (let wW = 0; wW < LW; ++wW) tW.writeUInt8(0);
        const ZW = new wW;
        return ZW.files[mW] = new Blob([tW.getOutputData()], {
          type: "application/octet-stream"
        }), ZW
      }
      _setNodeTransformation(WW, iW, OW) {
        if (iW.getPivotPoint().equalsWithEpsilon(VO, vO.e) || EW.Tools.Warn("Pivot points are not supported in the glTF serializer"), !iW.position.equalsWithEpsilon(VO, vO.e)) {
          const EW = mW.TmpVectors.fA[0].HJ(iW.position);
          OW && GO(EW), WW.translation = EW.wEW()
        }
        iW.YZ.equalsWithEpsilon(fO, vO.e) || (WW.scale = iW.YZ.wEW());
        const NW = iW.rotationQuaternion?.clone() || mW.Quaternion.FromEulerAngles(iW.rotation.x, iW.rotation.y, iW.rotation.z);
        NW.equalsWithEpsilon(pO, vO.e) || (OW && IO(NW), WW.rotation = NW.normalize().wEW())
      }
      _setCameraTransformation(WW, iW, OW) {
        const EW = mW.TmpVectors.fA[0],
          NW = mW.TmpVectors.Quaternion[0],
          PW = iW.getWorldMatrix();
        if (iW.parent) {
          const WW = iW.parent.getWorldMatrix().invertToRef(mW.TmpVectors.Matrix[0]);
          PW.multiplyToRef(WW, mW.TmpVectors.Matrix[1]).decompose(void 0, NW, EW)
        } else PW.decompose(void 0, NW, EW);
        EW.equalsWithEpsilon(VO, vO.e) || (OW && GO(EW), WW.translation = EW.wEW()), OW && IO(NW), this._babylonScene.useRightHandedSystem || aO(NW), NW.equalsWithEpsilon(pO, vO.e) || (WW.rotation = NW.wEW())
      }
      _listAvailableCameras() {
        for (const WW of this._babylonScene.cameras) {
          const iW = {
            type: WW.mode === Nm.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (WW.name && (iW.name = WW.name), "perspective" === iW.type) iW.perspective = {
            aspectRatio: WW.VA().getAspectRatio(WW),
            yfov: WW.fovMode === Nm.e.FOVMODE_VERTICAL_FIXED ? WW.fov : WW.fov * WW.VA().getAspectRatio(WW),
            znear: WW.minZ,
            zfar: WW.maxZ
          };
          else if ("orthographic" === iW.type) {
            const OW = WW.orthoLeft && WW.orthoRight ? .5 * (WW.orthoRight - WW.orthoLeft) : .5 * WW.VA().getRenderWidth(),
              mW = WW.orthoBottom && WW.orthoTop ? .5 * (WW.orthoTop - WW.orthoBottom) : .5 * WW.VA().getRenderHeight();
            iW.orthographic = {
              xmag: OW,
              ymag: mW,
              znear: WW.minZ,
              zfar: WW.maxZ
            }
          }
          this._camerasMap.set(WW, iW)
        }
      }
      _exportAndAssignCameras() {
        const WW = Array.from(this._camerasMap.values());
        for (const iW of WW) {
          const WW = this._nodesCameraMap.get(iW);
          if (void 0 !== WW) {
            this._cameras.push(iW);
            for (const iW of WW) iW.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const WW of this._babylonScene.skeletons) {
          if (WW.bones.length <= 0) continue;
          const iW = {
            joints: []
          };
          this._skinMap.set(WW, iW)
        }
      }
      _exportAndAssignSkeletons(WW) {
        for (const OW of this._babylonScene.skeletons) {
          if (OW.bones.length <= 0) continue;
          const NW = this._skinMap.get(OW);
          if (void 0 == NW) continue;
          const PW = {};
          let LW = -1;
          for (let WW = 0; WW < OW.bones.length; ++WW) {
            const iW = OW.bones[WW],
              mW = iW.getIndex() ?? WW; - 1 !== mW && (PW[mW] = iW, mW > LW && (LW = mW))
          }
          const cW = [];
          for (let OW = 0; OW <= LW; ++OW) {
            const LW = PW[OW],
              wW = LW.getTransformNode(),
              tW = wW ? this._nodeMap.get(wW) : void 0;
            if (void 0 === tW) {
              EW.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            NW.joints.push(tW);
            const ZW = LW.getAbsoluteInverseBindMatrix().clone();
            WW.has(wW) && (iW = ZW, gO.invertToRef(mW.TmpVectors.Matrix[0]).multiplyToRef(iW, iW).multiplyToRef(gO, iW)), cW.push(ZW)
          }
          const wW = this._nodesSkinMap.get(NW);
          if (NW.joints.length > 0 && void 0 !== wW) {
            const WW = new Float32Array(16 * cW.length);
            cW.forEach(((iW, OW) => {
              WW.set(iW.m, 16 * OW)
            }));
            const iW = this._bufferManager.createBufferView(WW);
            this._accessors.push(this._bufferManager.createAccessor(iW, "MAT4", 5126, cW.length)), NW.inverseBindMatrices = this._accessors.length - 1, this._skins.push(NW);
            const OW = this._skins.length - 1;
            for (const mW of wW) mW.skin = OW
          }
        }
        var iW
      }
      async _exportSceneAsync() {
        const WW = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const iW = this._options.metadataSelector(this._babylonScene.metadata);
          iW && (WW.extras = iW)
        }
        const iW = new Array,
          OW = new Array,
          mW = new Array,
          EW = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let NW;
        if (EW && !this._options.includeCoordinateSystemConversionNodes)
          for (const wW of this._babylonScene.animationGroups)
            for (const WW of wW.targetedAnimations) {
              const iW = WW.target;
              iW instanceof ZW.e && !iW.parent && (NW ?? (NW = new Set)).add(iW)
            }
        for (const wW of this._babylonScene.rootNodes) {
          const WW = wW.animations,
            PW = !!WW && WW.length > 0 || NW?.has(wW);
          EW && !this._options.includeCoordinateSystemConversionNodes && DO(wW, this._babylonScene.useRightHandedSystem) && !PW ? mW.push(...wW.getChildren()) : this._babylonScene.useRightHandedSystem ? iW.push(wW) : OW.push(wW)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const PW = new gm(!0, !1);
        WW.nodes.push(...await this._exportNodesAsync(OW, PW));
        const LW = new gm(!1, !1);
        WW.nodes.push(...await this._exportNodesAsync(iW, LW));
        const cW = new gm(!1, !0);
        WW.nodes.push(...await this._exportNodesAsync(mW, cW)), WW.nodes.length && this._scenes.push(WW), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(PW.getNodesSet()), this._babylonScene.animationGroups.length && lm._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, PW.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(WW) {
        return this._nodeMap.get(WW)
      }
      _getAnimationIndex(WW) {
        return this._animationGroupMap.get(WW)
      }
      _getCameraIndex(WW) {
        const iW = this._camerasMap.get(WW);
        if (!iW) return;
        const OW = this._cameras.indexOf(iW);
        return OW >= 0 ? OW : void 0
      }
      _getMaterialIndex(WW) {
        return this._materialMap.get(WW)
      }
      _getRootIndex(WW, iW) {
        switch (WW) {
          case "nodes":
            return this._getNodeIndex(iW);
          case "animations":
            return this._getAnimationIndex(iW);
          case "cameras":
            return this._getCameraIndex(iW);
          case "materials":
            return this._getMaterialIndex(iW);
          case "meshes": {
            const WW = this._getNodeIndex(iW);
            return void 0 === WW ? void 0 : this._nodes[WW]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(iW)?.index;
          case "images": {
            const WW = this._materialExporter.getTextureInfo(iW)?.index;
            if (void 0 === WW) return;
            const OW = this._textures[WW];
            for (const iW of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const WW = OW?.extensions?.[iW]?.source;
              if ("number" === typeof WW) return WW
            }
            return OW?.source
          }
          case "samplers": {
            const WW = this._materialExporter.getTextureInfo(iW)?.index;
            return void 0 === WW ? void 0 : this._textures[WW]?.sampler
          }
          case "skins": {
            const WW = this._skinMap.get(iW),
              OW = WW ? this._skins.indexOf(WW) : -1;
            return OW >= 0 ? OW : void 0
          }
          case "scenes":
            return iW === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(WW, iW, OW) {
        const mW = this._nodes[WW];
        if (!mW) throw new Error(`Cannot write ${iW}: glTF node ${WW} does not exist.`);
        mW.extensions || (mW.extensions = {}), mW.extensions[iW] = OW
      }
      _shouldExportNode(WW) {
        let iW = this._shouldExportNodeMap.get(WW);
        return void 0 === iW && (iW = this._options.shouldExportNode(WW), this._shouldExportNodeMap.set(WW, iW)), iW
      }
      async _exportNodesAsync(WW, iW) {
        const OW = new Array;
        this._exportBuffers(WW, iW);
        for (const mW of WW) await this._exportNodeAsync(mW, OW, iW);
        return OW
      }
      _collectBuffers(WW, iW, OW, mW, EW) {
        if (this._shouldExportNode(WW) && WW instanceof xW.b && WW.geometry) {
          const NW = WW.geometry.getVertexBuffers();
          if (NW)
            for (const mW in NW) {
              if (!qO(mW)) continue;
              const PW = NW[mW];
              EW.setHasVertexColorAlpha(PW, WW.hasVertexAlpha);
              const LW = PW._buffer,
                cW = iW.get(LW) || [];
              iW.set(LW, cW), -1 === cW.indexOf(PW) && cW.push(PW);
              const wW = OW.get(PW) || [];
              OW.set(PW, wW), -1 === wW.indexOf(WW) && wW.push(WW)
            }
          const PW = WW.morphTargetManager;
          if (PW)
            for (let iW = 0; iW < PW.numTargets; iW++) {
              const OW = PW.getTarget(iW),
                EW = mW.get(OW) || [];
              mW.set(OW, EW), -1 === EW.indexOf(WW) && EW.push(WW)
            }
        }
        for (const NW of WW.getChildren()) this._collectBuffers(NW, iW, OW, mW, EW)
      }
      _exportBuffers(WW, iW) {
        const OW = new Map,
          mW = new Map,
          EW = new Map;
        for (const LW of WW) this._collectBuffers(LW, OW, mW, EW, iW);
        const NW = Array.from(OW.keys());
        for (const LW of NW) {
          const WW = LW.getData();
          if (!WW) throw new Error("Buffer data is not available");
          const EW = OW.get(LW);
          if (!EW) continue;
          const NW = EW[0].byteStride;
          if (EW.some((WW => WW.byteStride !== NW))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const PW = FO(WW).slice();
          for (const iW of EW) {
            const WW = mW.get(iW),
              {
                byteOffset: OW,
                byteStride: EW,
                componentCount: NW,
                type: LW,
                count: cW,
                normalized: wW,
                kind: ZW
              } = XO(iW, WW);
            switch (ZW) {
              case tW.g.NormalKind:
              case tW.g.TangentKind:
                (0, dO.f)(PW, OW, EW, NW, LW, cW, wW, (WW => {
                  const iW = Math.sqrt(WW[0] * WW[0] + WW[1] * WW[1] + WW[2] * WW[2]);
                  if (iW > 0) {
                    const OW = 1 / iW;
                    WW[0] *= OW, WW[1] *= OW, WW[2] *= OW
                  }
                }));
                break;
              case tW.g.ColorKind: {
                const iW = WW.filter((WW => WW.material instanceof Lm.StandardMaterial || null == WW.material)).length;
                if (0 == iW) break;
                if (iW != WW.length) {
                  hW.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                LW == tW.g.UNSIGNED_BYTE && hW.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const mW = new jW.Color3,
                  ZW = new jW.c,
                  xW = this._babylonScene.VA().useExactSrgbConversions;
                (0, dO.f)(PW, OW, EW, NW, LW, cW, wW, (WW => {
                  3 === WW.length ? (mW.mZ(WW, 0), mW.toLinearSpaceToRef(mW, xW), mW.toArray(WW, 0)) : (ZW.mZ(WW, 0), ZW.toLinearSpaceToRef(ZW, xW), ZW.toArray(WW, 0))
                }))
              }
            }
          }
          if (iW.convertToRightHanded) {
            for (const WW of EW) {
              const iW = mW.get(WW),
                {
                  byteOffset: OW,
                  byteStride: EW,
                  componentCount: NW,
                  type: LW,
                  count: cW,
                  normalized: wW,
                  kind: ZW
                } = XO(WW, iW);
              switch (ZW) {
                case tW.g.PositionKind:
                case tW.g.NormalKind:
                case tW.g.TangentKind:
                  (0, dO.f)(PW, OW, EW, NW, LW, cW, wW, (WW => {
                    WW[0] = -WW[0]
                  }))
              }
            }
            iW.convertedToRightHandedBuffers.set(LW, PW)
          }
          const cW = this._bufferManager.createBufferView(PW, NW);
          iW.setVertexBufferView(LW, cW);
          const wW = new Map;
          for (const iW of EW) {
            const WW = mW.get(iW),
              {
                kind: OW,
                totalVertices: EW
              } = XO(iW, WW);
            switch (OW) {
              case tW.g.MatricesIndicesKind:
              case tW.g.MatricesIndicesExtraKind:
                if (iW.type == tW.g.FLOAT) {
                  const WW = iW.getFloatData(EW);
                  null !== WW && wW.set(iW, WW)
                }
            }
          }
          0 !== wW.size && hW.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const ZW = Array.from(wW.keys());
          for (const OW of ZW) {
            const WW = wW.get(OW);
            if (!WW) continue;
            const mW = WW.some((WW => WW >= 256)),
              EW = new(mW ? Uint16Array : Uint8Array)(WW.length);
            for (let iW = 0; iW < WW.length; iW++) EW[iW] = WW[iW];
            const NW = this._bufferManager.createBufferView(EW, 4 * (mW ? 2 : 1));
            iW.setRemappedBufferView(LW, OW, NW)
          }
        }
        const PW = Array.from(EW.keys());
        for (const LW of PW) {
          const WW = EW.get(LW);
          if (!WW) continue;
          const OW = Am(LW, WW[0], this._bufferManager, this._bufferViews, this._accessors, iW.convertToRightHanded);
          for (const mW of WW) iW.bindMorphDataToMesh(mW, OW)
        }
      }
      async _exportNodeAsync(WW, iW, OW) {
        let mW = this._nodeMap.get(WW);
        if (void 0 !== mW) return void(iW.includes(mW) || iW.push(mW));
        const EW = await this._createNodeAsync(WW, OW);
        if (EW) {
          mW = this._nodes.length, this._nodes.push(EW), this._nodeMap.set(WW, mW), OW.pushExportedNode(WW), iW.push(mW);
          const NW = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            PW = [];
          this._babylonScene.animationGroups.length || (lm._CreateMorphTargetAnimationFromMorphTargetAnimations(WW, NW, PW, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, OW.convertToRightHanded, this._options.shouldExportAnimation), WW.animations.length && lm._CreateNodeAnimationFromNodeAnimations(WW, NW, PW, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, OW.convertToRightHanded, this._options.shouldExportAnimation)), NW.channels.length && NW.samplers.length && this._animations.push(NW), PW.forEach((WW => {
            WW.channels.length && WW.samplers.length && this._animations.push(WW)
          }))
        }
        const NW = EW ? [] : iW;
        for (const PW of WW.getChildren()) await this._exportNodeAsync(PW, NW, OW);
        EW && NW.length && (EW.children = NW)
      }
      async _createNodeAsync(WW, iW) {
        if (!this._shouldExportNode(WW)) return null;
        const OW = {};
        if (WW.name && (OW.name = WW.name), WW.metadata) {
          const iW = this._options.metadataSelector(WW.metadata);
          iW && (OW.extras = iW)
        }
        if (WW instanceof ZW.e && (this._setNodeTransformation(OW, WW, iW.convertToRightHanded), WW instanceof xW.b)) {
          const mW = WW instanceof lW.d ? WW.WNW : WW;
          if (mW.hY && mW.hY.length > 0 && (OW.mesh = await this._exportMeshAsync(mW, iW)), WW.skeleton) {
            const iW = this._skinMap.get(WW.skeleton);
            void 0 !== iW && (void 0 === this._nodesSkinMap.get(iW) && this._nodesSkinMap.set(iW, []), this._nodesSkinMap.get(iW)?.push(OW))
          }
        }
        if (WW instanceof eO.d) {
          const mW = this._camerasMap.get(WW);
          if (mW) {
            void 0 === this._nodesCameraMap.get(mW) && this._nodesCameraMap.set(mW, []), this._setCameraTransformation(OW, WW, iW.convertToRightHanded);
            const EW = WW.parent;
            if (null !== EW && zO(WW, EW)) {
              const WW = this._nodeMap.get(EW);
              if (void 0 !== WW) {
                const iW = this._nodes[WW];
                return rO(OW, iW), this._nodesCameraMap.get(mW)?.push(iW), null
              }
            }
            this._nodesCameraMap.get(mW)?.push(OW)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", OW, WW, this._nodeMap, iW.convertToRightHanded) ? OW : (hW.b.Warn(`Not exporting node ${WW.name}`), null)
      }
      _exportIndices(WW, iW, OW, mW, EW, PW, LW, cW, wW) {
        let tW = null;
        wW.mode = function(WW) {
          switch (WW) {
            case NW.d.TriangleFillMode:
              return 4;
            case NW.d.TriangleStripDrawMode:
              return 5;
            case NW.d.TriangleFanDrawMode:
              return 6;
            case NW.d.PointListDrawMode:
            case NW.d.PointFillMode:
              return 0;
            case NW.d.LineLoopDrawMode:
              return 2;
            case NW.d.LineListDrawMode:
              return 1;
            case NW.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${WW}`)
        }(PW);
        const ZW = LW !== NW.d.CounterClockWiseSideOrientation && function(WW) {
          switch (WW) {
            case NW.d.TriangleFillMode:
            case NW.d.TriangleStripDrawMode:
            case NW.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(PW);
        if (ZW) {
          if (PW === NW.d.TriangleStripDrawMode || PW === NW.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const LW = iW ? new Uint32Array(mW) : new Uint16Array(mW);
          if (WW)
            for (let iW = 0; iW + 2 < mW; iW += 3) LW[iW] = WW[OW + iW] + EW, LW[iW + 1] = WW[OW + iW + 2] + EW, LW[iW + 2] = WW[OW + iW + 1] + EW;
          else
            for (let WW = 0; WW + 2 < mW; WW += 3) LW[WW] = WW, LW[WW + 1] = WW + 2, LW[WW + 2] = WW + 1;
          tW = LW
        } else if (WW && 0 !== EW) {
          const NW = iW ? new Uint32Array(mW) : new Uint16Array(mW);
          for (let iW = 0; iW < mW; iW++) NW[iW] = WW[OW + iW] + EW;
          tW = NW
        } else WW && (tW = function(WW, iW, OW, mW) {
          let EW = WW;
          return 0 === iW && OW === WW.length || (EW = Array.isArray(WW) ? WW.slice(iW, iW + OW) : WW.subarray(iW, iW + OW)), EW instanceof Int32Array ? new Uint32Array(EW.buffer, EW.byteOffset, EW.length) : Array.isArray(EW) ? mW ? new Uint32Array(EW) : new Uint16Array(EW) : EW
        }(WW, OW, mW, iW));
        if (tW) {
          let NW = cW.getIndicesAccessor(WW, OW, mW, EW, ZW);
          if (void 0 === NW) {
            const PW = this._bufferManager.createBufferView(tW),
              LW = iW ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(PW, "SCALAR", LW, mW, 0)), NW = this._accessors.length - 1, cW.setIndicesAccessor(WW, OW, mW, EW, ZW, NW)
          }
          wW.indices = NW
        }
      }
      _exportVertexBuffer(WW, iW, OW, mW, EW, NW) {
        const PW = WW.getKind();
        if (!qO(PW)) return;
        if (PW.startsWith("uv") && !this._options.exportUnusedUVs && (!iW || !this._materialNeedsUVsSet.has(iW))) return;
        let LW = EW.getVertexAccessor(WW, OW, mW);
        if (void 0 === LW) {
          const iW = EW.convertedToRightHandedBuffers.get(WW._buffer) || WW._buffer.getData(),
            NW = PW === tW.g.PositionKind ? function(WW, iW, OW, mW) {
              const {
                byteOffset: EW,
                byteStride: NW,
                type: PW,
                normalized: LW
              } = iW, cW = iW.getSize(), wW = new Array(cW).fill(1 / 0), tW = new Array(cW).fill(-1 / 0);
              return (0, dO.f)(WW, EW + OW * NW, NW, cW, PW, mW * cW, LW, (WW => {
                for (let iW = 0; iW < cW; iW++) wW[iW] = Math.min(wW[iW], WW[iW]), tW[iW] = Math.max(tW[iW], WW[iW])
              })), {
                min: wW,
                max: tW
              }
            }(iW, WW, OW, mW) : void 0,
            cW = (PW === tW.g.MatricesIndicesKind || PW === tW.g.MatricesIndicesExtraKind) && WW.type === tW.g.FLOAT,
            wW = cW ? tW.g.UNSIGNED_BYTE : WW.type,
            ZW = cW ? void 0 : WW.normalized,
            xW = cW ? EW.getRemappedBufferView(WW._buffer, WW) : EW.getVertexBufferView(WW._buffer),
            lW = WW.byteOffset + OW * WW.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(xW, function(WW, iW) {
            if (WW == tW.g.ColorKind) return iW ? "VEC4" : "VEC3";
            switch (WW) {
              case tW.g.PositionKind:
              case tW.g.NormalKind:
                return "VEC3";
              case tW.g.TangentKind:
              case tW.g.MatricesIndicesKind:
              case tW.g.MatricesIndicesExtraKind:
              case tW.g.MatricesWeightsKind:
              case tW.g.MatricesWeightsExtraKind:
                return "VEC4";
              case tW.g.UVKind:
              case tW.g.UV2Kind:
              case tW.g.UV3Kind:
              case tW.g.UV4Kind:
              case tW.g.UV5Kind:
              case tW.g.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${WW}`)
          }(PW, EW.hasVertexColorAlpha(WW)), wW, mW, lW, NW, ZW)), LW = this._accessors.length - 1, EW.setVertexAccessor(WW, OW, mW, LW)
        }
        NW.attributes[function(WW) {
          switch (WW) {
            case tW.g.PositionKind:
              return "POSITION";
            case tW.g.NormalKind:
              return "NORMAL";
            case tW.g.TangentKind:
              return "TANGENT";
            case tW.g.ColorKind:
              return "COLOR_0";
            case tW.g.UVKind:
              return "TEXCOORD_0";
            case tW.g.UV2Kind:
              return "TEXCOORD_1";
            case tW.g.UV3Kind:
              return "TEXCOORD_2";
            case tW.g.UV4Kind:
              return "TEXCOORD_3";
            case tW.g.UV5Kind:
              return "TEXCOORD_4";
            case tW.g.UV6Kind:
              return "TEXCOORD_5";
            case tW.g.MatricesIndicesKind:
              return "JOINTS_0";
            case tW.g.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case tW.g.MatricesWeightsKind:
              return "WEIGHTS_0";
            case tW.g.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${WW}`)
        }(PW)] = LW
      }
      async _exportMaterialAsync(WW, iW, OW, mW) {
        let EW = this._materialMap.get(WW);
        if (void 0 === EW) {
          const mW = iW && Object.keys(iW).some((WW => WW.startsWith("uv")));
          if ((WW = WW instanceof Pm.e ? WW.MWW[OW.materialIndex] : WW) instanceof Si) EW = await this._materialExporter.exportPBRMaterialAsync(WW, mW);
          else if (WW instanceof Lm.StandardMaterial) EW = await this._materialExporter.exportStandardMaterialAsync(WW, mW);
          else {
            if (!(WW instanceof WO)) return void hW.b.Warn(`Unsupported material '${WW.name}' with type ${WW.getClassName()}`);
            EW = await this._materialExporter.exportOpenPBRMaterialAsync(WW, mW)
          }
          this._materialMap.set(WW, EW)
        }
        mW.material = EW
      }
      async _exportMeshAsync(WW, iW) {
        let OW = iW.getMesh(WW);
        if (void 0 !== OW) return OW;
        const mW = {
          primitives: []
        };
        OW = this._meshes.length, this._meshes.push(mW), iW.setMesh(WW, OW);
        const EW = WW.isUnIndexed ? null : WW.IEW(),
          PW = WW.geometry?.getVertexBuffers(),
          LW = iW.getMorphTargetsFromMesh(WW),
          cW = WW instanceof bm.b,
          wW = WW instanceof em,
          tW = WW.hY;
        if (PW && tW && tW.length > 0)
          for (const ZW of tW) {
            const OW = {
                attributes: {}
              },
              tW = ZW.BA() || this._babylonScene.defaultMaterial;
            if (wW) {
              const iW = {
                  name: tW.name
                },
                mW = WW,
                EW = jW.Color3.White(),
                NW = mW.material?.alpha ?? 1,
                PW = mW.greasedLineMaterial?.color ?? EW;
              (!PW.equalsWithEpsilon(EW, vO.e) || NW < 1) && (iW.pbrMetallicRoughness = {
                baseColorFactor: [...PW.wEW(), NW]
              }), this._materials.push(iW), OW.material = this._materials.length - 1
            } else if (cW) {
              const iW = {
                  name: tW.name
                },
                mW = WW;
              (!mW.color.equalsWithEpsilon(jW.Color3.White(), vO.e) || mW.alpha < 1) && (iW.pbrMetallicRoughness = {
                baseColorFactor: [...mW.color.wEW(), mW.alpha]
              }), this._materials.push(iW), OW.material = this._materials.length - 1
            } else await this._exportMaterialAsync(tW, PW, ZW, OW);
            const xW = cW || wW ? NW.d.LineListDrawMode : WW.overrideRenderingFillMode ?? tW.fillMode;
            let lW = tW._getEffectiveOrientation(WW);
            iW.wasAddedByNoopNode && !WW.bD().useRightHandedSystem && (lW = lW === NW.d.ClockWiseSideOrientation ? NW.d.CounterClockWiseSideOrientation : NW.d.ClockWiseSideOrientation), this._exportIndices(EW, EW ? (0, dO.c)(EW, ZW.indexCount, ZW.indexStart, ZW.verticesStart) : ZW.verticesCount > 65535, EW ? ZW.indexStart : ZW.verticesStart, EW ? ZW.indexCount : ZW.verticesCount, -ZW.verticesStart, xW, lW, iW, OW);
            for (const WW of Object.values(PW)) this._exportVertexBuffer(WW, tW, ZW.verticesStart, ZW.verticesCount, iW, OW);
            if (LW) {
              OW.targets = [];
              for (const WW of LW) OW.targets.push(WW.attributes)
            }
            mW.primitives.push(OW), this._extensionsPostExportMeshPrimitive(OW)
          }
        if (LW) {
          mW.weights = [], mW.extras || (mW.extras = {}), mW.extras.targetNames = [];
          for (const WW of LW) mW.weights.push(WW.influence), mW.extras.targetNames.push(WW.name)
        }
        return OW
      }
    }
    Dm._ExtensionNames = new Array, Dm._ExtensionFactories = {}, Dm._ExtensionOrders = {};
    class Vm {
      static async GLTFAsync(WW, iW, OW) {
        OW && OW.exportWithoutWaitingForScene || await WW.whenReadyAsync();
        const mW = new Dm(WW, OW),
          EW = await mW.generateGLTFAsync(iW.replace(/\.[^/.]+$/, ""));
        return mW.dispose(), EW
      }
      static async GLBAsync(WW, iW, OW) {
        OW && OW.exportWithoutWaitingForScene || await WW.whenReadyAsync();
        const mW = new Dm(WW, OW),
          EW = await mW.generateGLBAsync(iW.replace(/\.[^/.]+$/, ""));
        return mW.dispose(), EW
      }
    }
    const pm = "EXT_mesh_gpu_instancing";

    function fm(WW, iW) {
      const OW = new Float32Array(3 * iW);
      for (let mW = 0; mW < iW; mW++) OW[3 * mW + 0] = WW[4 * mW + 0], OW[3 * mW + 1] = WW[4 * mW + 1], OW[3 * mW + 2] = WW[4 * mW + 2];
      return OW
    }
    class Cm {
      constructor(WW) {
        this.name = pm, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(WW, iW, OW, mW, EW, NW) {
        return await new Promise((WW => {
          if (iW && OW instanceof ym.e && OW.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const WW = VW.q.Zero(),
              mW = VW.g.Identity(),
              PW = VW.q.One(),
              LW = OW.thinInstanceGetWorldMatrices(),
              cW = VW.l.fA[2],
              wW = VW.l.Quaternion[1],
              tW = VW.l.fA[3];
            let ZW = !1,
              xW = !1,
              lW = !1;
            const AW = new Float32Array(3 * OW.OWW),
              bW = new Float32Array(4 * OW.OWW),
              jW = new Float32Array(3 * OW.OWW);
            let UW = 0;
            for (const iW of LW) iW.decompose(tW, wW, cW), EW && (GO(cW), IO(wW)), AW.set(cW.wEW(), 3 * UW), bW.set(wW.normalize().wEW(), 4 * UW), jW.set(tW.wEW(), 3 * UW), ZW = ZW || !cW.equalsWithEpsilon(WW), xW = xW || !wW.equalsWithEpsilon(mW), lW = lW || !tW.equalsWithEpsilon(PW), UW++;
            const kW = {
              attributes: {}
            };
            ZW && (kW.attributes.TRANSLATION = this._buildAccessor(AW, "VEC3", OW.OWW, NW)), xW && (kW.attributes.ROTATION = this._buildAccessor(bW, "VEC4", OW.OWW, NW)), lW && (kW.attributes.SCALE = this._buildAccessor(jW, "VEC3", OW.OWW, NW));
            let sW = OW._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (sW) {
              const WW = OW.OWW,
                iW = "VEC3";
              OW.hasVertexAlpha && sW.length === 4 * WW ? (this._instanceColorWarned || (hW.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), sW = fm(sW, WW)) : sW.length === 4 * WW && (sW = fm(sW, WW)), sW.length === 3 * WW && (kW.attributes._COLOR_0 = this._buildAccessor(sW, iW, WW, NW))
            }
            iW.extensions = iW.extensions || {}, iW.extensions[pm] = kW
          }
          WW(iW)
        }))
      }
      _buildAccessor(WW, iW, OW, mW) {
        const EW = mW.createBufferView(WW),
          NW = mW.createAccessor(EW, iW, 5126, OW);
        return this._exporter._accessors.push(NW), this._exporter._accessors.length - 1
      }
    }
    let Xm = !1;

    function Bm() {
      Xm || (Xm = !0, Dm.RegisterExtension(pm, (WW => new Cm(WW))))
    }
    OW(41997);
    Bm();
    var qm = OW(54026);

    function Rm(WW, iW, OW, mW) {
      const EW = WW;
      let NW = null,
        PW = null,
        LW = null,
        cW = null;
      const wW = {},
        tW = iW.find((WW => "POSITION" === WW.dracoName));
      if (!tW) throw new Error("Draco: Missing position attribute for encoding.");
      if (!OW) {
        const WW = tW.data.length / tW.size;
        OW = new(WW > 65535 ? Uint32Array : Uint16Array)(WW);
        for (let iW = 0; iW < WW; iW++) OW[iW] = iW
      }
      try {
        NW = new EW.Encoder, PW = new EW.MeshBuilder, LW = new EW.Mesh, PW.AddFacesToMesh(LW, OW.length / 3, OW);
        const WW = new Map([
          [Float32Array, (WW, iW, OW, mW, EW, NW) => WW.AddFloatAttribute(iW, OW, mW, EW, NW)],
          [Uint32Array, (WW, iW, OW, mW, EW, NW) => WW.AddUInt32Attribute(iW, OW, mW, EW, NW)],
          [Uint16Array, (WW, iW, OW, mW, EW, NW) => WW.AddUInt16Attribute(iW, OW, mW, EW, NW)],
          [Uint8Array, (WW, iW, OW, mW, EW, NW) => WW.AddUInt8Attribute(iW, OW, mW, EW, NW)],
          [Int32Array, (WW, iW, OW, mW, EW, NW) => WW.AddInt32Attribute(iW, OW, mW, EW, NW)],
          [Int16Array, (WW, iW, OW, mW, EW, NW) => WW.AddInt16Attribute(iW, OW, mW, EW, NW)],
          [Int8Array, (WW, iW, OW, mW, EW, NW) => WW.AddInt8Attribute(iW, OW, mW, EW, NW)]
        ]);
        for (const OW of iW) {
          OW.data instanceof Uint8ClampedArray && (OW.data = new Uint8Array(OW.data));
          const iW = WW.get(OW.data.constructor),
            cW = OW.data.length / OW.size;
          wW[OW.kind] = iW(PW, LW, EW[OW.dracoName], cW, OW.size, OW.data), mW.quantizationBits && mW.quantizationBits[OW.dracoName] && NW.SetAttributeQuantization(EW[OW.dracoName], mW.quantizationBits[OW.dracoName])
        }
        mW.method && NW.SetEncodingMethod(EW[mW.method]), void 0 !== mW.encodeSpeed && void 0 !== mW.decodeSpeed && NW.SetSpeedOptions(mW.encodeSpeed, mW.decodeSpeed), cW = new EW.DracoInt8Array;
        const tW = NW.EncodeMeshToDracoBuffer(LW, cW);
        if (tW <= 0) throw new Error("Draco: Failed to encode.");
        const ZW = new Int8Array(tW);
        for (let iW = 0; iW < tW; iW++) ZW[iW] = cW.GetValue(iW);
        return {
          data: ZW,
          attributeIds: wW
        }
      } finally {
        LW && EW.destroy(LW), PW && EW.destroy(PW), NW && EW.destroy(NW), cW && EW.destroy(cW)
      }
    }

    function Gm() {
      let WW;
      onmessage = iW => {
        const OW = iW.data;
        switch (OW.id) {
          case "init": {
            OW.url && importScripts(OW.url);
            const iW = OW.wasmBinary ? {
              wasmBinary: OW.wasmBinary
            } : {};
            WW = DracoEncoderModule(iW), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!WW) throw new Error("Draco: Encoder module is not available.");
            WW.then((WW => {
              const iW = Rm(WW, OW.attributes, OW.indices, OW.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: iW
              }, iW ? [iW.data.buffer] : void 0)
            })).catch((WW => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: WW.message
              })
            }))
        }
      }
    }
    class Im {
      constructor(WW) {
        if (WW.workerPool) return void(this._workerPoolPromise = Promise.resolve(WW.workerPool));
        const iW = WW.wasmBinary,
          OW = WW.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          mW = OW && "function" === typeof Worker && "function" === typeof URL,
          EW = mW || !WW.jsModule,
          NW = WW.wasmUrl && WW.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: EW ? yi.f.GetBabylonScriptURL(WW.wasmUrl, !0) : "",
            wasmBinaryPromise: iW ? Promise.resolve(iW) : yi.f.LoadFileAsync(yi.f.GetBabylonScriptURL(WW.wasmBinaryUrl, !0))
          } : {
            url: EW ? yi.f.GetBabylonScriptURL(WW.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        mW ? this._workerPoolPromise = NW.wasmBinaryPromise.then((WW => {
          const iW = this._getWorkerContent(),
            mW = URL.createObjectURL(new Blob([iW], {
              type: "application/javascript"
            }));
          return new qm.d(OW, (() => async function(WW, iW, OW) {
            return await new Promise(((mW, EW) => {
              const NW = iW => {
                  WW.removeEventListener("error", NW), WW.removeEventListener("message", PW), EW(iW)
                },
                PW = iW => {
                  "initDone" === iW.data.id && (WW.removeEventListener("error", NW), WW.removeEventListener("message", PW), mW(WW))
                };
              if (WW.addEventListener("error", NW), WW.addEventListener("message", PW), iW) {
                const mW = iW.slice(0);
                WW.postMessage({
                  id: "init",
                  url: OW,
                  wasmBinary: mW
                }, [mW])
              } else WW.postMessage({
                id: "init",
                url: OW
              })
            }))
          }(new Worker(mW), WW, NW.url)))
        })) : this._modulePromise = NW.wasmBinaryPromise.then((async iW => {
          if (!this._isModuleAvailable() && !WW.jsModule) {
            if (!NW.url) throw new Error("Draco codec module is not available");
            await yi.f.LoadBabylonScriptAsync(NW.url)
          }
          return await this._createModuleAsync(iW, WW.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((WW => {
          WW.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function am() {
      const WW = WW => !!WW && "object" === typeof WW;
      for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
      return OW.reduce(((iW, OW) => {
        const mW = Object.keys(OW);
        for (const EW of mW) {
          const mW = iW[EW],
            NW = OW[EW];
          Array.isArray(mW) && Array.isArray(NW) ? iW[EW] = mW.concat(NW) : WW(mW) && WW(NW) ? iW[EW] = am(mW, NW) : iW[EW] = NW
        }
        return iW
      }), {})
    }

    function rm(WW) {
      return WW === pW.k.PositionKind ? "POSITION" : WW === pW.k.NormalKind ? "NORMAL" : WW === pW.k.ColorKind ? "COLOR" : WW.startsWith(pW.k.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const zm = {
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
    class Fm extends Im {
      static get DefaultAvailable() {
        return !!((WW = Fm.DefaultConfiguration).wasmUrl && (WW.wasmBinary || WW.wasmBinaryUrl) && "object" === typeof WebAssembly || WW.fallbackUrl);
        var WW
      }
      static get Default() {
        return Fm._Default ?? (Fm._Default = new Fm), Fm._Default
      }
      static ResetDefault(WW) {
        Fm._Default && (WW || Fm._Default.dispose(), Fm._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(WW, iW) {
        return {
          module: await (iW || DracoEncoderModule)({
            wasmBinary: WW
          })
        }
      }
      _getWorkerContent() {
        return `${Rm}(${Gm})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fm.DefaultConfiguration)
      }
      async _encodeAsync(WW, iW, OW) {
        const mW = OW ? am(zm, OW) : zm;
        if (this._workerPoolPromise) {
          const OW = await this._workerPoolPromise;
          return await new Promise(((EW, NW) => {
            OW.push(((OW, PW) => {
              const LW = WW => {
                  OW.removeEventListener("error", LW), OW.removeEventListener("message", cW), NW(WW), PW()
                },
                cW = WW => {
                  "encodeMeshSuccess" === WW.data.id ? (OW.removeEventListener("error", LW), OW.removeEventListener("message", cW), EW(WW.data.encodedMeshData), PW()) : "encodeMeshError" === WW.data.id && (OW.removeEventListener("error", LW), OW.removeEventListener("message", cW), NW(new Error(WW.data.errorMessage)), PW())
                };
              OW.addEventListener("error", LW), OW.addEventListener("message", cW);
              const wW = [];
              for (const iW of WW) wW.push(iW.data.buffer);
              iW && wW.push(iW.buffer), OW.postMessage({
                id: "encodeMesh",
                attributes: WW,
                indices: iW,
                options: mW
              }, wW)
            }))
          }))
        }
        if (this._modulePromise) {
          return Rm((await this._modulePromise).module, WW, iW, mW)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(WW, iW) {
        if (0 == WW.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        WW instanceof ym.e && WW.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === iW?.method && (hW.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), iW.method = "MESH_SEQUENTIAL_ENCODING");
        const OW = function(WW) {
            let iW = WW.IEW(void 0, !0);
            return !iW || iW instanceof Uint32Array || iW instanceof Uint16Array || (iW = ((0, dO.c)(iW, iW.length) ? Uint32Array : Uint16Array).from(iW)), iW
          }(WW),
          mW = function(WW, iW) {
            const OW = [];
            for (const mW of WW.getVerticesDataKinds()) {
              if (iW?.includes(mW)) {
                if (mW === pW.k.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const EW = WW.getVertexBuffer(mW),
                NW = EW.getSize(),
                PW = (0, dO.l)(EW.getData(), NW, EW.type, EW.byteOffset, EW.byteStride, WW.getTotalVertices(), !0);
              OW.push({
                kind: mW,
                dracoName: rm(mW),
                size: NW,
                data: PW
              })
            }
            return OW
          }(WW, iW?.excludedAttributes);
        return await this._encodeAsync(mW, OW, iW)
      }
    }
    Fm.DefaultConfiguration = {
      wasmUrl: `${yi.f._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${yi.f._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${yi.f._DefaultCdnUrl}/draco_encoder.js`
    }, Fm._Default = null;
    const Qm = "KHR_draco_mesh_compression";
    class WE {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = Qm, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === WW.options.meshCompressionMethod && Fm.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(WW, iW, OW) {
        if (!this.enabled) return;
        if (4 !== WW.mode && 5 !== WW.mode) return void hW.b.Warn("Cannot compress primitive with mode " + WW.mode + ".");
        const mW = [],
          EW = [];
        let NW = null;
        if (void 0 !== WW.indices) {
          const PW = OW[WW.indices],
            LW = iW.getBufferView(PW);
          NW = iW.getData(LW).slice(), mW.push(LW), EW.push(PW)
        }
        const PW = [];
        for (const [tW, ZW] of Object.entries(WW.attributes)) {
          const WW = OW[ZW],
            NW = iW.getBufferView(WW),
            cW = BO(WW.type),
            wW = (0, dO.l)(iW.getData(NW), cW, WW.componentType, WW.byteOffset || 0, NW.byteStride || (0, dO.k)(WW.componentType) * cW, WW.count, !0);
          PW.push({
            kind: tW,
            dracoName: (LW = tW, "POSITION" === LW ? "POSITION" : "NORMAL" === LW ? "NORMAL" : LW.startsWith("COLOR") ? "COLOR" : LW.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: BO(WW.type),
            data: wW
          }), mW.push(NW), EW.push(WW)
        }
        var LW;
        const cW = {
            method: WW.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          wW = Fm.Default._encodeAsync(PW, NW, cW).then((OW => {
            const NW = {
                bufferView: -1,
                attributes: OW.attributeIds
              },
              PW = iW.createBufferView(OW.data);
            iW.setBufferView(NW, PW);
            for (const WW of mW) this._bufferViewsUsed.add(WW);
            for (const WW of EW) this._accessorsUsed.add(WW);
            WW.extensions || (WW.extensions = {}), WW.extensions[Qm] = NW
          })).catch((WW => {
            hW.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + WW.message)
          }));
        this._encodePromises.push(wW), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(WW) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((iW => {
          WW.getPropertiesWithBufferView(iW).every((WW => this._accessorsUsed.has(WW))) && WW.removeBufferView(iW)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let iE = !1;

    function OE() {
      iE || (iE = !0, Dm.RegisterExtension(Qm, (WW => new WE(WW))))
    }
    OE();
    var mE = OW(53745);
    const EE = "KHR_lights_punctual",
      NE = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      PE = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      LE = VW.q.Backward();
    class cE {
      constructor(WW) {
        this.name = EE, this.enabled = !0, this.required = !1, this._exporter = WW
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[EE] = this._lights
      }
      async postExportNodeAsync(WW, iW, OW, mW, EW) {
        return await new Promise((NW => {
          if (!(OW instanceof xm.b)) return void NW(iW);
          const PW = OW.getTypeID() == xm.b.LIGHTTYPEID_POINTLIGHT ? "point" : OW.getTypeID() == xm.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : OW.getTypeID() == xm.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!PW || !(OW instanceof mE.e)) return hW.b.Warn(`${WW}: Light ${OW.name} is not supported in ${EE}`), void NW(iW);
          if (OW.falloffType !== xm.b.FALLOFF_GLTF && hW.b.Warn(`${WW}: Light falloff for ${OW.name} does not match the ${EE} specification!`), !OW.position.jLW(0, 0, 0)) {
            const WW = VW.l.fA[0].HJ(OW.position);
            EW && GO(WW), iW.translation = WW.wEW()
          }
          if ("point" !== PW) {
            const WW = OW.direction.normalizeToRef(VW.l.fA[0]);
            EW && GO(WW);
            const mW = VW.g.FromUnitVectorsToRef(LE, WW, VW.l.Quaternion[0]);
            VW.g.IsIdentity(mW) || (iW.rotation = mW.wEW())
          }
          const LW = {
            type: PW,
            name: OW.name,
            color: OW.diffuse.wEW(),
            intensity: OW.intensity,
            range: OW.range
          };
          if (QO(LW, NE), "spot" === PW) {
            const WW = OW;
            LW.spot = {
              innerConeAngle: WW.innerAngle / 2,
              outerConeAngle: WW.angle / 2
            }, QO(LW.spot, PE)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(LW);
          const cW = {
              light: this._lights.lights.length - 1
            },
            wW = OW.parent;
          if (wW && zO(OW, wW)) {
            const WW = mW.get(wW);
            if (WW) {
              const OW = this._exporter._nodes[WW];
              return rO(iW, OW), OW.extensions || (OW.extensions = {}), OW.extensions[EE] = cW, void NW(null)
            }
          }
          iW.extensions || (iW.extensions = {}), iW.extensions[EE] = cW, NW(iW)
        }))
      }
    }
    let wE = !1;

    function tE() {
      wE || (wE = !0, Dm.RegisterExtension(EE, (WW => new cE(WW))))
    }
    tE();
    const ZE = "KHR_interactivity";
    class xE {
      constructor(WW) {
        this._exporter = WW, this.name = ZE, this.enabled = !!WW.options.khrInteractivity, this.required = WW.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var WW, iW, OW;
        const mW = this._exporter.options.khrInteractivity;
        if (!mW) return;
        const EW = mW.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: WW => this._exporter._getNodeIndex(WW),
          getAnimationIndex: WW => this._exporter._getAnimationIndex(WW),
          getCameraIndex: WW => this._exporter._getCameraIndex(WW),
          getMaterialIndex: WW => this._exporter._getMaterialIndex(WW),
          getRootIndex: (WW, iW) => this._exporter._getRootIndex(WW, iW),
          setNodeExtension: (WW, iW, OW) => this._exporter._setNodeExtension(WW, iW, OW)
        });
        this._exporter._glTF.extensions[ZE] = EW;
        for (const NW of mW.additionalExtensionsUsed)(WW = this._exporter._glTF).extensionsUsed || (WW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(NW) && this._exporter._glTF.extensionsUsed.push(NW);
        for (const NW of mW.additionalExtensionsRequired)(iW = this._exporter._glTF).extensionsUsed || (iW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(NW) && this._exporter._glTF.extensionsUsed.push(NW), (OW = this._exporter._glTF).extensionsRequired || (OW.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(NW) && this._exporter._glTF.extensionsRequired.push(NW)
      }
    }
    let lE = !1;

    function AE() {
      lE || (lE = !0, Dm.RegisterExtension(ZE, (WW => new xE(WW)), 200))
    }
    AE();
    const bE = "EXT_lights_area",
      jE = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      UE = {
        aspect: 1
      },
      kE = VW.q.Backward();
    class sE {
      constructor(WW) {
        this.name = bE, this.enabled = !0, this.required = !1, this._exporter = WW
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[bE] = this._lights
      }
      async postExportNodeAsync(WW, iW, OW, mW, EW) {
        return await new Promise((NW => {
          if (!(OW instanceof xm.b)) return void NW(iW);
          const PW = OW.getTypeID() == xm.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!PW) return hW.b.Warn(`${WW}: Light ${OW.name} is not supported in ${bE}`), void NW(iW);
          const LW = OW;
          if (LW.falloffType !== xm.b.FALLOFF_GLTF && hW.b.Warn(`${WW}: Light falloff for ${OW.name} does not match the ${bE} specification!`), !LW.position.jLW(0, 0, 0)) {
            const WW = VW.l.fA[0].HJ(LW.position);
            EW && GO(WW), iW.translation = WW.wEW()
          }
          const cW = VW.q.Forward();
          EW && GO(cW);
          const wW = VW.g.FromUnitVectorsToRef(kE, cW, VW.l.Quaternion[0]);
          VW.g.IsIdentity(wW) || (iW.rotation = wW.wEW());
          const tW = {
            type: PW,
            name: LW.name,
            color: LW.diffuse.wEW(),
            intensity: LW.intensity,
            size: LW.height,
            rect: {
              aspect: LW.width / LW.height
            }
          };
          QO(tW, jE), tW.rect && QO(tW.rect, UE), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(tW);
          const ZW = {
              light: this._lights.lights.length - 1
            },
            xW = OW.parent;
          if (xW && zO(LW, xW)) {
            const WW = mW.get(xW);
            if (WW) {
              const OW = this._exporter._nodes[WW];
              return rO(iW, OW), OW.extensions || (OW.extensions = {}), OW.extensions[bE] = ZW, void NW(null)
            }
          }
          iW.extensions || (iW.extensions = {}), iW.extensions[bE] = ZW, NW(iW)
        }))
      }
    }
    let ME = !1;

    function KE() {
      ME || (ME = !0, Dm.RegisterExtension(bE, (WW => new sE(WW))))
    }
    KE();
    const SE = "KHR_materials_anisotropy";
    class YE {
      constructor(WW) {
        this.name = SE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof Si) {
          if (OW.anisotropy.isEnabled && !OW.anisotropy.legacy) return OW.anisotropy.texture && mW.push(OW.anisotropy.texture), mW
        } else if (OW instanceof WO && OW.specularRoughnessAnisotropy > 0) {
          const WW = function(WW) {
            const iW = WW.specularRoughnessAnisotropyTexture,
              OW = WW.geometryTangentTexture;
            return `${iW&&iW.getInternalTexture()?iW.getInternalTexture().uniqueId:"NoStrength"}_${OW&&OW.getInternalTexture()?OW.getInternalTexture().uniqueId:"NoTangent"}`
          }(OW);
          if (this._anisoTexturesMap[WW]) mW.push(this._anisoTexturesMap[WW]);
          else {
            const iW = await async function(WW) {
              const iW = WW.bD(),
                OW = WW.specularRoughnessAnisotropyTexture,
                mW = WW.geometryTangentTexture;
              return OW || mW ? await cO("AnisotropyTexture", ZO(mW ? wO(mW, 0) : tO(1), mW ? wO(mW, 1) : tO(0), OW ? wO(OW, 0) : tO(1)), iW) : null
            }(OW);
            iW && (mW.push(iW), this._anisoTexturesMap[WW] = iW)
          }
          return mW
        }
        return []
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          var mW;
          if (OW instanceof Si) {
            if (!OW.anisotropy.isEnabled || OW.anisotropy.legacy) return void WW(iW);
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            const mW = this._exporter._materialExporter.getTextureInfo(OW.anisotropy.texture),
              EW = {
                anisotropyStrength: OW.anisotropy.intensity,
                anisotropyRotation: OW.anisotropy.angle,
                anisotropyTexture: mW ?? void 0
              };
            null !== EW.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[SE] = EW
          } else if (OW instanceof WO && OW.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            let EW = OW.specularRoughnessTexture;
            OW._useRoughnessFromMetallicTextureGreen && (EW = OW.baseMetalnessTexture);
            const NW = this._anisoTexturesMap[OW.id];
            if (!EW && !NW) {
              let mW = OW.specularRoughness,
                EW = OW.specularRoughnessAnisotropy;
              if (!OW._useGltfStyleAnisotropy) {
                const WW = function(WW, iW) {
                  const OW = WW * WW,
                    mW = OW * Math.sqrt(2 / (1 + (1 - iW) * (1 - iW))),
                    EW = (1 - iW) * mW;
                  return {
                    newBaseRoughness: Math.sqrt(EW),
                    newAnisotropyStrength: Math.min(Math.sqrt((mW - OW) / Math.max(1 - OW, 1e-4)), 1)
                  }
                }(OW.specularRoughness, OW.specularRoughnessAnisotropy);
                mW = WW.newBaseRoughness, EW = WW.newAnisotropyStrength
              }
              iW.pbrMetallicRoughness && (iW.pbrMetallicRoughness.roughnessFactor = mW);
              const NW = {
                anisotropyStrength: EW,
                anisotropyRotation: OW.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return iW.extensions[SE] = NW, WW(iW)
            }
            const PW = NW ? this._exporter._materialExporter.getTextureInfo(NW) : null,
              LW = {
                anisotropyStrength: OW.specularRoughnessAnisotropy,
                anisotropyRotation: OW.geometryTangentAngle,
                anisotropyTexture: PW || void 0,
                extensions: {}
              };
            OW._useGltfStyleAnisotropy || (iW.extensions.KHR_materials_openpbr = {}, (mW = this._exporter._glTF).extensionsUsed || (mW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[SE] = LW
          }
          WW(iW)
        }))
      }
    }
    let yE = !1;

    function TE() {
      yE || (yE = !0, Dm.RegisterExtension(SE, (WW => new YE(WW))))
    }
    TE();
    const JE = "KHR_materials_clearcoat";

    function hE(WW, iW) {
      const OW = new nW.h(iW.name, iW.bD());
      return OW._texture = WW, OW.coordinatesIndex = iW.coordinatesIndex, iW instanceof nW.h && (OW.uOffset = iW.uOffset, OW.vOffset = iW.vOffset, OW.uScale = iW.uScale, OW.vScale = iW.vScale, OW.wAng = iW.wAng), OW.wrapU = iW.wrapU, OW.wrapV = iW.wrapV, OW
    }
    class HE {
      constructor(WW) {
        this.name = JE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = WW
      }
      dispose() {
        for (const WW of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[WW].dispose()
        }
        this._mergedTexturesMap = {};
        for (const WW of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[WW].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof Si) {
          if (OW.clearCoat.isEnabled) return OW.clearCoat.texture && mW.push(OW.clearCoat.texture), !OW.clearCoat.useRoughnessFromMainTexture && OW.clearCoat.textureRoughness && mW.push(OW.clearCoat.textureRoughness), OW.clearCoat.bumpTexture && mW.push(OW.clearCoat.bumpTexture), mW
        } else if (OW instanceof WO && OW.coatWeight > 0) {
          let WW = !1;
          if (OW.coatWeightTexture ? OW.coatRoughnessTexture ? OW._useCoatRoughnessFromGreenChannel && OW.coatWeightTexture.getInternalTexture() === OW.coatRoughnessTexture.getInternalTexture() ? (mW.push(OW.coatWeightTexture), mW.push(OW.coatRoughnessTexture)) : WW = !0 : mW.push(OW.coatWeightTexture) : OW.coatRoughnessTexture && (OW._useCoatRoughnessFromGreenChannel ? mW.push(OW.coatRoughnessTexture) : WW = !0), WW) {
            const WW = function(WW) {
              const iW = WW.coatWeightTexture,
                OW = iW && iW.getInternalTexture() ? iW.getInternalTexture().uniqueId : "NoCoat",
                mW = WW.coatRoughnessTexture;
              return `${OW}_${mW&&mW.getInternalTexture()?mW.getInternalTexture().uniqueId:"NoRoughness"}`
            }(OW);
            if (!this._cachedInternalTexturesMap[WW]) {
              const iW = await async function(WW) {
                const iW = WW.bD(),
                  OW = WW.coatWeightTexture,
                  mW = WW.coatRoughnessTexture;
                return OW || mW ? (await cO("CoatTexture", ZO(OW ? wO(OW, 0) : tO(1), mW ? wO(mW, WW._useCoatRoughnessFromGreenChannel ? 1 : 0) : tO(1)), iW)).getInternalTexture() : null
              }(OW);
              iW && (this._cachedInternalTexturesMap[WW] = iW)
            }
            this._cachedInternalTexturesMap[WW] && (OW.coatWeightTexture && (this._mergedTexturesMap[OW.coatWeightTexture.uniqueId] = hE(this._cachedInternalTexturesMap[WW], OW.coatWeightTexture), mW.push(this._mergedTexturesMap[OW.coatWeightTexture.uniqueId])), OW.coatRoughnessTexture && (this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId] = hE(this._cachedInternalTexturesMap[WW], OW.coatRoughnessTexture), mW.push(this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId])))
          }
          return OW.geometryCoatNormalTexture && mW.push(OW.geometryCoatNormalTexture), mW
        }
        return []
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          if (OW instanceof Si) {
            if (!OW.clearCoat.isEnabled) return void WW(iW);
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            const mW = this._exporter._materialExporter.getTextureInfo(OW.clearCoat.texture);
            let EW;
            EW = OW.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(OW.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(OW.clearCoat.textureRoughness), OW.clearCoat.isTintEnabled && yi.f.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${OW.name}`), OW.clearCoat.remapF0OnInterfaceChange && yi.f.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${OW.name}`);
            const NW = this._exporter._materialExporter.getTextureInfo(OW.clearCoat.bumpTexture),
              PW = {
                clearcoatFactor: OW.clearCoat.intensity,
                clearcoatTexture: mW ?? void 0,
                clearcoatRoughnessFactor: OW.clearCoat.roughness,
                clearcoatRoughnessTexture: EW ?? void 0,
                clearcoatNormalTexture: NW ?? void 0
              };
            null === PW.clearcoatTexture && null === PW.clearcoatRoughnessTexture && null === PW.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[JE] = PW
          } else if (OW instanceof WO) {
            if (0 == OW.coatWeight) return void WW(iW);
            let mW, EW, NW, PW;
            this._wasUsed = !0, iW.extensions = iW.extensions || {}, OW.coatWeightTexture && (mW = this._mergedTexturesMap[OW.coatWeightTexture.uniqueId], EW = this._exporter._materialExporter.getTextureInfo(mW)), OW.coatRoughnessTexture && (NW = this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId], PW = this._exporter._materialExporter.getTextureInfo(NW)), OW.coatColorTexture && yi.f.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${OW.name}`);
            const LW = this._exporter._materialExporter.getTextureInfo(OW.geometryCoatNormalTexture),
              cW = {
                clearcoatFactor: OW.coatWeight,
                clearcoatTexture: EW ?? void 0,
                clearcoatRoughnessFactor: OW.coatRoughness,
                clearcoatRoughnessTexture: PW ?? void 0,
                clearcoatNormalTexture: LW ?? void 0
              };
            null === cW.clearcoatTexture && null === cW.clearcoatRoughnessTexture && null === cW.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[JE] = cW
          }
          WW(iW)
        }))
      }
    }
    let nE = !1;

    function uE() {
      nE || (nE = !0, Dm.RegisterExtension(JE, (WW => new HE(WW))))
    }
    uE();
    const oE = "KHR_materials_coat";

    function dE(WW) {
      const iW = WW.coatRoughnessAnisotropyTexture,
        OW = WW.geometryCoatTangentTexture;
      return `${iW&&iW.getInternalTexture()?iW.getInternalTexture().uniqueId:"NoStrength"}_${OW&&OW.getInternalTexture()?OW.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function eE(WW, iW) {
      const OW = new nW.h(iW.name, iW.bD());
      return OW._texture = WW, OW.coordinatesIndex = iW.coordinatesIndex, iW instanceof nW.h && (OW.uOffset = iW.uOffset, OW.vOffset = iW.vOffset, OW.uScale = iW.uScale, OW.vScale = iW.vScale, OW.wAng = iW.wAng), OW.wrapU = iW.wrapU, OW.wrapV = iW.wrapV, OW
    }
    class vE {
      constructor(WW) {
        this.name = oE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = WW
      }
      dispose() {
        for (const WW of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[WW].dispose()
        }
        this._mergedTexturesMap = {};
        for (const WW of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[WW].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof Si) {
          if (OW.clearCoat.isEnabled) return OW.clearCoat.texture && mW.push(OW.clearCoat.texture), !OW.clearCoat.useRoughnessFromMainTexture && OW.clearCoat.textureRoughness && mW.push(OW.clearCoat.textureRoughness), OW.clearCoat.bumpTexture && mW.push(OW.clearCoat.bumpTexture), OW.clearCoat.tintTexture && mW.push(OW.clearCoat.tintTexture), mW
        } else if (OW instanceof WO && OW.coatWeight > 0) {
          let WW = !1;
          if (OW.coatWeightTexture ? OW.coatRoughnessTexture ? OW._useCoatRoughnessFromGreenChannel && OW.coatWeightTexture.getInternalTexture() === OW.coatRoughnessTexture.getInternalTexture() ? (mW.push(OW.coatWeightTexture), mW.push(OW.coatRoughnessTexture)) : WW = !0 : mW.push(OW.coatWeightTexture) : OW.coatRoughnessTexture && (OW._useCoatRoughnessFromGreenChannel ? mW.push(OW.coatRoughnessTexture) : WW = !0), WW) {
            const WW = function(WW) {
              const iW = WW.coatWeightTexture,
                OW = iW && iW.getInternalTexture() ? iW.getInternalTexture().uniqueId : "NoCoat",
                mW = WW.coatRoughnessTexture;
              return `${OW}_${mW&&mW.getInternalTexture()?mW.getInternalTexture().uniqueId:"NoRoughness"}`
            }(OW);
            if (!this._cachedInternalTexturesMap[WW]) {
              const iW = await async function(WW) {
                const iW = WW.bD(),
                  OW = WW.coatWeightTexture,
                  mW = WW.coatRoughnessTexture;
                return OW || mW ? (await cO("CoatTexture", ZO(OW ? wO(OW, 0) : tO(1), mW ? wO(mW, WW._useCoatRoughnessFromGreenChannel ? 1 : 0) : tO(1)), iW)).getInternalTexture() : null
              }(OW);
              iW && (this._cachedInternalTexturesMap[WW] = iW)
            }
            this._cachedInternalTexturesMap[WW] && (OW.coatWeightTexture && (this._mergedTexturesMap[OW.coatWeightTexture.uniqueId] = eE(this._cachedInternalTexturesMap[WW], OW.coatWeightTexture), mW.push(this._mergedTexturesMap[OW.coatWeightTexture.uniqueId])), OW.coatRoughnessTexture && (this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId] = eE(this._cachedInternalTexturesMap[WW], OW.coatRoughnessTexture), mW.push(this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId])))
          }
          if (OW.geometryCoatNormalTexture && mW.push(OW.geometryCoatNormalTexture), OW.coatColorTexture && mW.push(OW.coatColorTexture), OW.coatRoughnessAnisotropy > 0) {
            const WW = dE(OW);
            if (this._mergedTexturesMap[WW]) mW.push(this._mergedTexturesMap[WW]);
            else {
              const iW = await async function(WW) {
                const iW = WW.bD(),
                  OW = WW.coatRoughnessAnisotropyTexture,
                  mW = WW.geometryCoatTangentTexture;
                return OW || mW ? await cO("AnisotropyTexture", ZO(mW ? wO(mW, 0) : tO(1), mW ? wO(mW, 1) : tO(0), OW ? wO(OW, 0) : tO(1)), iW) : null
              }(OW);
              iW && (mW.push(iW), this._mergedTexturesMap[WW] = iW)
            }
            return mW
          }
          return mW
        }
        return []
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          var mW;
          if (OW instanceof Si) {
            if (!OW.clearCoat.isEnabled) return void WW(iW);
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            const mW = this._exporter._materialExporter.getTextureInfo(OW.clearCoat.texture);
            let EW, NW;
            EW = OW.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(OW.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(OW.clearCoat.textureRoughness), OW.clearCoat.isTintEnabled && (NW = this._exporter._materialExporter.getTextureInfo(OW.clearCoat.tintTexture));
            const PW = this._exporter._materialExporter.getTextureInfo(OW.clearCoat.bumpTexture),
              LW = OW.clearCoat.indexOfRefraction,
              cW = {
                coatFactor: OW.clearCoat.intensity,
                coatTexture: mW ?? void 0,
                coatRoughnessFactor: OW.clearCoat.roughness,
                coatRoughnessTexture: EW ?? void 0,
                coatNormalTexture: PW ?? void 0,
                coatColorFactor: OW.clearCoat.tintColor.wEW(),
                coatColorTexture: NW ?? void 0,
                coatIor: 1.5 !== LW ? LW : void 0
              };
            null === cW.coatTexture && null === cW.coatRoughnessTexture && null === cW.coatRoughnessTexture && null === cW.coatColorTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[oE] = cW
          } else if (OW instanceof WO) {
            if (0 == OW.coatWeight) return void WW(iW);
            let EW, NW, PW, LW;
            this._wasUsed = !0, iW.extensions = iW.extensions || {}, OW.coatWeightTexture && (EW = this._mergedTexturesMap[OW.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[OW.coatWeightTexture.uniqueId] : OW.coatWeightTexture, NW = this._exporter._materialExporter.getTextureInfo(EW)), OW.coatRoughnessTexture && (PW = this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[OW.coatRoughnessTexture.uniqueId] : OW.coatRoughnessTexture, LW = this._exporter._materialExporter.getTextureInfo(PW));
            const cW = this._exporter._materialExporter.getTextureInfo(OW.geometryCoatNormalTexture),
              wW = this._exporter._materialExporter.getTextureInfo(OW.coatColorTexture),
              tW = OW.coatIor,
              ZW = OW.coatDarkening,
              xW = OW.coatRoughnessTexture,
              lW = dE(OW),
              AW = this._mergedTexturesMap[lW];
            let bW, jW = 0,
              UW = 0;
            if (OW.coatRoughnessAnisotropy > 0) {
              if (xW || AW) {
                const WW = AW ? this._exporter._materialExporter.getTextureInfo(AW) : null;
                jW = OW.coatRoughnessAnisotropy, UW = OW.geometryCoatTangentAngle, bW = WW || void 0
              } else {
                let WW = OW.coatRoughness,
                  mW = OW.coatRoughnessAnisotropy;
                if (!OW._useGltfStyleAnisotropy) {
                  const iW = function(WW, iW) {
                    const OW = WW * WW,
                      mW = OW * Math.sqrt(2 / (1 + (1 - iW) * (1 - iW))),
                      EW = (1 - iW) * mW;
                    return {
                      newBaseRoughness: Math.sqrt(EW),
                      newAnisotropyStrength: Math.min(Math.sqrt((mW - OW) / Math.max(1 - OW, 1e-4)), 1)
                    }
                  }(OW.coatRoughness, OW.coatRoughnessAnisotropy);
                  WW = iW.newBaseRoughness, mW = iW.newAnisotropyStrength
                }
                iW.pbrMetallicRoughness && (iW.pbrMetallicRoughness.roughnessFactor = WW), jW = mW, UW = OW.geometryCoatTangentAngle + .5 * Math.PI, bW = void 0
              }
              OW._useGltfStyleAnisotropy || (iW.extensions.KHR_materials_openpbr = {}, (mW = this._exporter._glTF).extensionsUsed || (mW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const kW = {
              coatFactor: OW.coatWeight,
              coatTexture: NW ?? void 0,
              coatRoughnessFactor: OW.coatRoughness,
              coatRoughnessTexture: LW ?? void 0,
              coatNormalTexture: cW ?? void 0,
              coatColorFactor: OW.coatColor.wEW(),
              coatColorTexture: wW ?? void 0,
              coatIor: 1.5 !== tW ? tW : void 0,
              coatDarkeningFactor: 1 !== ZW ? ZW : void 0,
              coatAnisotropyRotation: UW,
              coatAnisotropyStrength: jW,
              coatAnisotropyTexture: bW
            };
            null === kW.coatTexture && null === kW.coatRoughnessTexture && null === kW.coatRoughnessTexture && null === kW.coatAnisotropyTexture && null === kW.coatColorTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[oE] = kW
          }
          WW(iW)
        }))
      }
    }
    let gE = !1;

    function DE() {
      gE || (gE = !0, Dm.RegisterExtension(oE, (WW => new vE(WW))))
    }
    DE();
    let VE = (() => {
      var WW, iW, OW, mW, EW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW, hW, HW, nW, uW, oW, dW, vW, gW, DW, VW, pW, fW, CW, XW, BW, qW, GW, IW, aW, rW, zW, FW, QW, Wi, ii, Oi, mi, Ei, Ni, Pi, Li, ci, wi, ti, Zi, xi, li, Ai, bi, ji, Ui, ki, si;
      let Mi, Ki, yi, Ti, Ji, Hi, ni, ui, oi, di, ei, vi, gi, Di, Vi, fi, Ci, Xi, Bi, qi, Ri, Gi, Ii, ai, ri, zi, Fi, Qi, WO, iO, OO, mO, EO, NO, PO, LO, cO, wO, tO, ZO, xO, lO, AO, bO, jO, UO, kO, sO, MO, KO, SO, YO, yO, TO, JO, hO, HO, nO, uO, oO, dO, eO, vO, gO, DO, VO, pO, fO, CO = Si,
        XO = [],
        BO = [],
        qO = [],
        RO = [],
        GO = [],
        IO = [],
        aO = [],
        rO = [],
        zO = [],
        FO = [],
        QO = [],
        Wm = [],
        im = [],
        Om = [],
        mm = [],
        Em = [],
        Nm = [],
        Pm = [],
        Lm = [],
        cm = [],
        wm = [],
        tm = [],
        Zm = [],
        xm = [],
        lm = [],
        Am = [],
        bm = [],
        jm = [],
        Um = [],
        km = [],
        sm = [],
        Mm = [],
        Km = [],
        Sm = [],
        Ym = [],
        ym = [],
        Tm = [],
        Jm = [],
        hm = [],
        Hm = [],
        nm = [],
        um = [],
        om = [],
        dm = [],
        em = [],
        gm = [],
        Dm = [],
        Vm = [],
        pm = [],
        fm = [],
        Cm = [],
        Xm = [],
        Bm = [],
        qm = [],
        Rm = [],
        Gm = [],
        Im = [],
        am = [],
        rm = [],
        zm = [],
        Fm = [],
        Qm = [],
        WE = [],
        iE = [],
        OE = [],
        mE = [],
        EE = [],
        NE = [],
        PE = [],
        LE = [],
        cE = [],
        wE = [],
        tE = [],
        ZE = [],
        xE = [],
        lE = [],
        AE = [],
        bE = [],
        jE = [],
        UE = [],
        kE = [],
        sE = [],
        ME = [],
        KE = [],
        SE = [],
        YE = [],
        yE = [],
        TE = [],
        JE = [],
        hE = [],
        HE = [],
        nE = [],
        uE = [],
        oE = [],
        dE = [],
        eE = [],
        vE = [],
        gE = [],
        DE = [],
        VE = [],
        pE = [],
        fE = [],
        CE = [],
        XE = [],
        BE = [],
        qE = [],
        RE = [],
        GE = [],
        IE = [],
        aE = [],
        rE = [],
        zE = [],
        FE = [],
        QE = [],
        WN = [],
        iN = [],
        ON = [],
        mN = [],
        EN = [],
        NN = [],
        PN = [],
        LN = [],
        cN = [],
        wN = [],
        tN = [],
        ZN = [],
        xN = [],
        lN = [],
        AN = [],
        bN = [],
        jN = [],
        UN = [],
        kN = [];
      return WW = class extends CO {
        get directIntensity() {
          return (0, TW.b)(this, iW, "f")
        }
        set directIntensity(WW) {
          (0, TW.d)(this, iW, WW, "f")
        }
        get emissiveIntensity() {
          return (0, TW.b)(this, OW, "f")
        }
        set emissiveIntensity(WW) {
          (0, TW.d)(this, OW, WW, "f")
        }
        get environmentIntensity() {
          return (0, TW.b)(this, mW, "f")
        }
        set environmentIntensity(WW) {
          (0, TW.d)(this, mW, WW, "f")
        }
        get specularIntensity() {
          return (0, TW.b)(this, EW, "f")
        }
        set specularIntensity(WW) {
          (0, TW.d)(this, EW, WW, "f")
        }
        get disableBumpMap() {
          return (0, TW.b)(this, PW, "f")
        }
        set disableBumpMap(WW) {
          (0, TW.d)(this, PW, WW, "f")
        }
        get albedoTexture() {
          return (0, TW.b)(this, LW, "f")
        }
        set albedoTexture(WW) {
          (0, TW.d)(this, LW, WW, "f")
        }
        get baseWeightTexture() {
          return (0, TW.b)(this, cW, "f")
        }
        set baseWeightTexture(WW) {
          (0, TW.d)(this, cW, WW, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, TW.b)(this, wW, "f")
        }
        set baseDiffuseRoughnessTexture(WW) {
          (0, TW.d)(this, wW, WW, "f")
        }
        get ambientTexture() {
          return (0, TW.b)(this, tW, "f")
        }
        set ambientTexture(WW) {
          (0, TW.d)(this, tW, WW, "f")
        }
        get ambientTextureStrength() {
          return (0, TW.b)(this, ZW, "f")
        }
        set ambientTextureStrength(WW) {
          (0, TW.d)(this, ZW, WW, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, TW.b)(this, xW, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(WW) {
          (0, TW.d)(this, xW, WW, "f")
        }
        get opacityTexture() {
          return (0, TW.b)(this, lW, "f")
        }
        set opacityTexture(WW) {
          (0, TW.d)(this, lW, WW, "f")
        }
        get reflectionTexture() {
          return (0, TW.b)(this, AW, "f")
        }
        set reflectionTexture(WW) {
          (0, TW.d)(this, AW, WW, "f")
        }
        get emissiveTexture() {
          return (0, TW.b)(this, bW, "f")
        }
        set emissiveTexture(WW) {
          (0, TW.d)(this, bW, WW, "f")
        }
        get reflectivityTexture() {
          return (0, TW.b)(this, jW, "f")
        }
        set reflectivityTexture(WW) {
          (0, TW.d)(this, jW, WW, "f")
        }
        get metallicTexture() {
          return (0, TW.b)(this, UW, "f")
        }
        set metallicTexture(WW) {
          (0, TW.d)(this, UW, WW, "f")
        }
        get metallic() {
          return (0, TW.b)(this, kW, "f")
        }
        set metallic(WW) {
          (0, TW.d)(this, kW, WW, "f")
        }
        get roughness() {
          return (0, TW.b)(this, sW, "f")
        }
        set roughness(WW) {
          (0, TW.d)(this, sW, WW, "f")
        }
        get metallicF0Factor() {
          return (0, TW.b)(this, MW, "f")
        }
        set metallicF0Factor(WW) {
          (0, TW.d)(this, MW, WW, "f")
        }
        get metallicReflectanceColor() {
          return (0, TW.b)(this, KW, "f")
        }
        set metallicReflectanceColor(WW) {
          (0, TW.d)(this, KW, WW, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, TW.b)(this, SW, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(WW) {
          (0, TW.d)(this, SW, WW, "f")
        }
        get metallicReflectanceTexture() {
          return (0, TW.b)(this, YW, "f")
        }
        set metallicReflectanceTexture(WW) {
          (0, TW.d)(this, YW, WW, "f")
        }
        get reflectanceTexture() {
          return (0, TW.b)(this, yW, "f")
        }
        set reflectanceTexture(WW) {
          (0, TW.d)(this, yW, WW, "f")
        }
        get microSurfaceTexture() {
          return (0, TW.b)(this, hW, "f")
        }
        set microSurfaceTexture(WW) {
          (0, TW.d)(this, hW, WW, "f")
        }
        get bumpTexture() {
          return (0, TW.b)(this, HW, "f")
        }
        set bumpTexture(WW) {
          (0, TW.d)(this, HW, WW, "f")
        }
        get lightmapTexture() {
          return (0, TW.b)(this, nW, "f")
        }
        set lightmapTexture(WW) {
          (0, TW.d)(this, nW, WW, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(WW) {
          this.subSurface.refractionTexture = WW, WW ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, TW.b)(this, uW, "f")
        }
        set ambientColor(WW) {
          (0, TW.d)(this, uW, WW, "f")
        }
        get albedoColor() {
          return (0, TW.b)(this, oW, "f")
        }
        set albedoColor(WW) {
          (0, TW.d)(this, oW, WW, "f")
        }
        get baseWeight() {
          return (0, TW.b)(this, dW, "f")
        }
        set baseWeight(WW) {
          (0, TW.d)(this, dW, WW, "f")
        }
        get baseDiffuseRoughness() {
          return (0, TW.b)(this, vW, "f")
        }
        set baseDiffuseRoughness(WW) {
          (0, TW.d)(this, vW, WW, "f")
        }
        get reflectivityColor() {
          return (0, TW.b)(this, gW, "f")
        }
        set reflectivityColor(WW) {
          (0, TW.d)(this, gW, WW, "f")
        }
        get reflectionColor() {
          return (0, TW.b)(this, DW, "f")
        }
        set reflectionColor(WW) {
          (0, TW.d)(this, DW, WW, "f")
        }
        get emissiveColor() {
          return (0, TW.b)(this, VW, "f")
        }
        set emissiveColor(WW) {
          (0, TW.d)(this, VW, WW, "f")
        }
        get microSurface() {
          return (0, TW.b)(this, pW, "f")
        }
        set microSurface(WW) {
          (0, TW.d)(this, pW, WW, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(WW) {
          this.subSurface.indexOfRefraction = WW
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(WW) {
          this.subSurface.invertRefractionY = WW
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(WW) {
          this.subSurface.linkRefractionWithTransparency = WW, WW && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, TW.b)(this, fW, "f")
        }
        set useLightmapAsShadowmap(WW) {
          (0, TW.d)(this, fW, WW, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, TW.b)(this, CW, "f")
        }
        set useAlphaFromAlbedoTexture(WW) {
          (0, TW.d)(this, CW, WW, "f")
        }
        get forceAlphaTest() {
          return (0, TW.b)(this, XW, "f")
        }
        set forceAlphaTest(WW) {
          (0, TW.d)(this, XW, WW, "f")
        }
        get alphaCutOff() {
          return (0, TW.b)(this, BW, "f")
        }
        set alphaCutOff(WW) {
          (0, TW.d)(this, BW, WW, "f")
        }
        get useSpecularOverAlpha() {
          return (0, TW.b)(this, qW, "f")
        }
        set useSpecularOverAlpha(WW) {
          (0, TW.d)(this, qW, WW, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, TW.b)(this, GW, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(WW) {
          (0, TW.d)(this, GW, WW, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, TW.b)(this, IW, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(WW) {
          (0, TW.d)(this, IW, WW, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, TW.b)(this, aW, "f")
        }
        set useRoughnessFromMetallicTextureGreen(WW) {
          (0, TW.d)(this, aW, WW, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, TW.b)(this, rW, "f")
        }
        set useMetallnessFromMetallicTextureBlue(WW) {
          (0, TW.d)(this, rW, WW, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, TW.b)(this, zW, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(WW) {
          (0, TW.d)(this, zW, WW, "f")
        }
        get useAmbientInGrayScale() {
          return (0, TW.b)(this, FW, "f")
        }
        set useAmbientInGrayScale(WW) {
          (0, TW.d)(this, FW, WW, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, TW.b)(this, QW, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(WW) {
          (0, TW.d)(this, QW, WW, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Si.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(WW) {
          WW !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? Si.LIGHTFALLOFF_PHYSICAL : Si.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Si.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(WW) {
          WW !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = WW ? Si.LIGHTFALLOFF_GLTF : Si.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, TW.b)(this, Wi, "f")
        }
        set useRadianceOverAlpha(WW) {
          (0, TW.d)(this, Wi, WW, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, TW.b)(this, ii, "f")
        }
        set useObjectSpaceNormalMap(WW) {
          (0, TW.d)(this, ii, WW, "f")
        }
        get useParallax() {
          return (0, TW.b)(this, Oi, "f")
        }
        set useParallax(WW) {
          (0, TW.d)(this, Oi, WW, "f")
        }
        get useParallaxOcclusion() {
          return (0, TW.b)(this, mi, "f")
        }
        set useParallaxOcclusion(WW) {
          (0, TW.d)(this, mi, WW, "f")
        }
        get parallaxScaleBias() {
          return (0, TW.b)(this, Ei, "f")
        }
        set parallaxScaleBias(WW) {
          (0, TW.d)(this, Ei, WW, "f")
        }
        get disableLighting() {
          return (0, TW.b)(this, Ni, "f")
        }
        set disableLighting(WW) {
          (0, TW.d)(this, Ni, WW, "f")
        }
        get forceIrradianceInFragment() {
          return (0, TW.b)(this, Pi, "f")
        }
        set forceIrradianceInFragment(WW) {
          (0, TW.d)(this, Pi, WW, "f")
        }
        get maxSimultaneousLights() {
          return (0, TW.b)(this, Li, "f")
        }
        set maxSimultaneousLights(WW) {
          (0, TW.d)(this, Li, WW, "f")
        }
        get invertNormalMapX() {
          return (0, TW.b)(this, ci, "f")
        }
        set invertNormalMapX(WW) {
          (0, TW.d)(this, ci, WW, "f")
        }
        get invertNormalMapY() {
          return (0, TW.b)(this, wi, "f")
        }
        set invertNormalMapY(WW) {
          (0, TW.d)(this, wi, WW, "f")
        }
        get twoSidedLighting() {
          return (0, TW.b)(this, ti, "f")
        }
        set twoSidedLighting(WW) {
          (0, TW.d)(this, ti, WW, "f")
        }
        get useAlphaFresnel() {
          return (0, TW.b)(this, Zi, "f")
        }
        set useAlphaFresnel(WW) {
          (0, TW.d)(this, Zi, WW, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, TW.b)(this, xi, "f")
        }
        set useLinearAlphaFresnel(WW) {
          (0, TW.d)(this, xi, WW, "f")
        }
        get environmentBRDFTexture() {
          return (0, TW.b)(this, li, "f")
        }
        set environmentBRDFTexture(WW) {
          (0, TW.d)(this, li, WW, "f")
        }
        get forceNormalForward() {
          return (0, TW.b)(this, Ai, "f")
        }
        set forceNormalForward(WW) {
          (0, TW.d)(this, Ai, WW, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, TW.b)(this, bi, "f")
        }
        set enableSpecularAntiAliasing(WW) {
          (0, TW.d)(this, bi, WW, "f")
        }
        get useHorizonOcclusion() {
          return (0, TW.b)(this, ji, "f")
        }
        set useHorizonOcclusion(WW) {
          (0, TW.d)(this, ji, WW, "f")
        }
        get useRadianceOcclusion() {
          return (0, TW.b)(this, Ui, "f")
        }
        set useRadianceOcclusion(WW) {
          (0, TW.d)(this, Ui, WW, "f")
        }
        get unlit() {
          return (0, TW.b)(this, ki, "f")
        }
        set unlit(WW) {
          (0, TW.d)(this, ki, WW, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, TW.b)(this, si, "f")
        }
        set applyDecalMapAfterDetailMap(WW) {
          (0, TW.d)(this, si, WW, "f")
        }
        constructor(NW, JW) {
          super(NW, JW, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), iW.set(this, ((0, TW.g)(this, XO), (0, TW.g)(this, BO, 1))), OW.set(this, ((0, TW.g)(this, qO), (0, TW.g)(this, RO, 1))), mW.set(this, ((0, TW.g)(this, GO), (0, TW.g)(this, IO, 1))), EW.set(this, ((0, TW.g)(this, aO), (0, TW.g)(this, rO, 1))), PW.set(this, ((0, TW.g)(this, zO), (0, TW.g)(this, FO, !1))), LW.set(this, ((0, TW.g)(this, QO), (0, TW.g)(this, Wm, void 0))), cW.set(this, ((0, TW.g)(this, im), (0, TW.g)(this, Om, void 0))), wW.set(this, ((0, TW.g)(this, mm), (0, TW.g)(this, Em, void 0))), tW.set(this, ((0, TW.g)(this, Nm), (0, TW.g)(this, Pm, void 0))), ZW.set(this, ((0, TW.g)(this, Lm), (0, TW.g)(this, cm, 1))), xW.set(this, ((0, TW.g)(this, wm), (0, TW.g)(this, tm, WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), lW.set(this, ((0, TW.g)(this, Zm), (0, TW.g)(this, xm, void 0))), AW.set(this, ((0, TW.g)(this, lm), (0, TW.g)(this, Am, void 0))), bW.set(this, ((0, TW.g)(this, bm), (0, TW.g)(this, jm, void 0))), jW.set(this, ((0, TW.g)(this, Um), (0, TW.g)(this, km, void 0))), UW.set(this, ((0, TW.g)(this, sm), (0, TW.g)(this, Mm, void 0))), kW.set(this, ((0, TW.g)(this, Km), (0, TW.g)(this, Sm, void 0))), sW.set(this, ((0, TW.g)(this, Ym), (0, TW.g)(this, ym, void 0))), MW.set(this, ((0, TW.g)(this, Tm), (0, TW.g)(this, Jm, 1))), KW.set(this, ((0, TW.g)(this, hm), (0, TW.g)(this, Hm, RW.b.White()))), SW.set(this, ((0, TW.g)(this, nm), (0, TW.g)(this, um, !1))), YW.set(this, ((0, TW.g)(this, om), (0, TW.g)(this, dm, void 0))), yW.set(this, ((0, TW.g)(this, em), (0, TW.g)(this, gm, void 0))), hW.set(this, ((0, TW.g)(this, Dm), (0, TW.g)(this, Vm, void 0))), HW.set(this, ((0, TW.g)(this, pm), (0, TW.g)(this, fm, void 0))), nW.set(this, ((0, TW.g)(this, Cm), (0, TW.g)(this, Xm, void 0))), uW.set(this, ((0, TW.g)(this, Bm), (0, TW.g)(this, qm, new RW.b(0, 0, 0)))), oW.set(this, ((0, TW.g)(this, Rm), (0, TW.g)(this, Gm, new RW.b(1, 1, 1)))), dW.set(this, ((0, TW.g)(this, Im), (0, TW.g)(this, am, 1))), vW.set(this, ((0, TW.g)(this, rm), (0, TW.g)(this, zm, void 0))), gW.set(this, ((0, TW.g)(this, Fm), (0, TW.g)(this, Qm, new RW.b(1, 1, 1)))), DW.set(this, ((0, TW.g)(this, WE), (0, TW.g)(this, iE, new RW.b(1, 1, 1)))), VW.set(this, ((0, TW.g)(this, OE), (0, TW.g)(this, mE, new RW.b(0, 0, 0)))), pW.set(this, ((0, TW.g)(this, EE), (0, TW.g)(this, NE, 1))), fW.set(this, ((0, TW.g)(this, PE), (0, TW.g)(this, LE, !1))), CW.set(this, ((0, TW.g)(this, cE), (0, TW.g)(this, wE, !1))), XW.set(this, ((0, TW.g)(this, tE), (0, TW.g)(this, ZE, !1))), BW.set(this, ((0, TW.g)(this, xE), (0, TW.g)(this, lE, .4))), qW.set(this, ((0, TW.g)(this, AE), (0, TW.g)(this, bE, !0))), GW.set(this, ((0, TW.g)(this, jE), (0, TW.g)(this, UE, !1))), IW.set(this, ((0, TW.g)(this, kE), (0, TW.g)(this, sE, !0))), aW.set(this, ((0, TW.g)(this, ME), (0, TW.g)(this, KE, !1))), rW.set(this, ((0, TW.g)(this, SE), (0, TW.g)(this, YE, !1))), zW.set(this, ((0, TW.g)(this, yE), (0, TW.g)(this, TE, !1))), FW.set(this, ((0, TW.g)(this, JE), (0, TW.g)(this, hE, !1))), QW.set(this, ((0, TW.g)(this, HE), (0, TW.g)(this, nE, !1))), Wi.set(this, ((0, TW.g)(this, uE), (0, TW.g)(this, oE, !0))), ii.set(this, ((0, TW.g)(this, dE), (0, TW.g)(this, eE, !1))), Oi.set(this, ((0, TW.g)(this, vE), (0, TW.g)(this, gE, !1))), mi.set(this, ((0, TW.g)(this, DE), (0, TW.g)(this, VE, !1))), Ei.set(this, ((0, TW.g)(this, pE), (0, TW.g)(this, fE, .05))), Ni.set(this, ((0, TW.g)(this, CE), (0, TW.g)(this, XE, !1))), Pi.set(this, ((0, TW.g)(this, BE), (0, TW.g)(this, qE, !1))), Li.set(this, ((0, TW.g)(this, RE), (0, TW.g)(this, GE, 4))), ci.set(this, ((0, TW.g)(this, IE), (0, TW.g)(this, aE, !1))), wi.set(this, ((0, TW.g)(this, rE), (0, TW.g)(this, zE, !1))), ti.set(this, ((0, TW.g)(this, FE), (0, TW.g)(this, QE, !1))), Zi.set(this, ((0, TW.g)(this, WN), (0, TW.g)(this, iN, !1))), xi.set(this, ((0, TW.g)(this, ON), (0, TW.g)(this, mN, !1))), li.set(this, ((0, TW.g)(this, EN), (0, TW.g)(this, NN, null))), Ai.set(this, ((0, TW.g)(this, PN), (0, TW.g)(this, LN, !1))), bi.set(this, ((0, TW.g)(this, cN), (0, TW.g)(this, wN, !1))), ji.set(this, ((0, TW.g)(this, tN), (0, TW.g)(this, ZN, !0))), Ui.set(this, ((0, TW.g)(this, xN), (0, TW.g)(this, lN, !0))), ki.set(this, ((0, TW.g)(this, AN), (0, TW.g)(this, bN, !1))), si.set(this, ((0, TW.g)(this, jN), (0, TW.g)(this, UN, !1))), (0, TW.g)(this, kN), this._environmentBRDFTexture = eW(this.bD())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(iW) {
          let OW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const EW = Yi.d.Clone((() => new WW(iW, this.bD())), this, {
            cloneTexturesOnlyOnce: OW
          });
          return EW.id = iW, EW.name = iW, this.stencil.copyTo(EW.stencil), this._clonePlugins(EW, mW), EW
        }
        serialize() {
          const WW = super.serialize();
          return WW.customType = "BABYLON.PBRMaterial", WW
        }
        static Parse(iW, OW, mW) {
          const EW = Yi.d.Parse((() => new WW(iW.name, OW)), iW, OW, mW);
          return iW.stencil && EW.stencil.parse(iW.stencil, OW, mW), NW.d._ParsePlugins(iW, EW, OW, mW), iW.clearCoat && EW.clearCoat.parse(iW.clearCoat, OW, mW), iW.anisotropy && EW.anisotropy.parse(iW.anisotropy, OW, mW), iW.brdf && EW.brdf.parse(iW.brdf, OW, mW), iW.sheen && EW.sheen.parse(iW.sheen, OW, mW), iW.subSurface && EW.subSurface.parse(iW.subSurface, OW, mW), iW.iridescence && EW.iridescence.parse(iW.iridescence, OW, mW), EW
        }
      }, iW = new WeakMap, OW = new WeakMap, mW = new WeakMap, EW = new WeakMap, PW = new WeakMap, LW = new WeakMap, cW = new WeakMap, wW = new WeakMap, tW = new WeakMap, ZW = new WeakMap, xW = new WeakMap, lW = new WeakMap, AW = new WeakMap, bW = new WeakMap, jW = new WeakMap, UW = new WeakMap, kW = new WeakMap, sW = new WeakMap, MW = new WeakMap, KW = new WeakMap, SW = new WeakMap, YW = new WeakMap, yW = new WeakMap, hW = new WeakMap, HW = new WeakMap, nW = new WeakMap, uW = new WeakMap, oW = new WeakMap, dW = new WeakMap, vW = new WeakMap, gW = new WeakMap, DW = new WeakMap, VW = new WeakMap, pW = new WeakMap, fW = new WeakMap, CW = new WeakMap, XW = new WeakMap, BW = new WeakMap, qW = new WeakMap, GW = new WeakMap, IW = new WeakMap, aW = new WeakMap, rW = new WeakMap, zW = new WeakMap, FW = new WeakMap, QW = new WeakMap, Wi = new WeakMap, ii = new WeakMap, Oi = new WeakMap, mi = new WeakMap, Ei = new WeakMap, Ni = new WeakMap, Pi = new WeakMap, Li = new WeakMap, ci = new WeakMap, wi = new WeakMap, ti = new WeakMap, Zi = new WeakMap, xi = new WeakMap, li = new WeakMap, Ai = new WeakMap, bi = new WeakMap, ji = new WeakMap, Ui = new WeakMap, ki = new WeakMap, si = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(CO[Symbol.metadata] ?? null) : void 0;
        Mi = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Ki = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], yi = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Ti = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Ji = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Hi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ni = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ui = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], oi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], di = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ei = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], gi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Xi = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], qi = [(0, JW.n)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Ri = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Ii = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, JW.F)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty", null)], Fi = [(0, JW.n)("ambient"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, JW.n)("albedo"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], WO = [(0, JW.M)("baseWeight"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, JW.M)("baseDiffuseRoughness"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], OO = [(0, JW.n)("reflectivity"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, JW.n)("reflection"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], EO = [(0, JW.n)("emissive"), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], NO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], PO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], LO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], cO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], wO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], tO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], xO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], lO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], jO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], kO = [(0, JW.M)()], sO = [(0, JW.M)()], MO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], SO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], YO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsLightsDirty")], JO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsLightsDirty")], HO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], uO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], oO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], dO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, JW.h)("_markAllSubMeshesAsTexturesDirty")], vO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], VO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], fO = [(0, JW.M)(), (0, JW.h)("_markAllSubMeshesAsMiscDirty")], (0, TW.e)(WW, null, Mi, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "directIntensity" in WW,
            get: WW => WW.directIntensity,
            set: (WW, iW) => {
              WW.directIntensity = iW
            }
          },
          metadata: iW
        }, BO, qO), (0, TW.e)(WW, null, Ki, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "emissiveIntensity" in WW,
            get: WW => WW.emissiveIntensity,
            set: (WW, iW) => {
              WW.emissiveIntensity = iW
            }
          },
          metadata: iW
        }, RO, GO), (0, TW.e)(WW, null, yi, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "environmentIntensity" in WW,
            get: WW => WW.environmentIntensity,
            set: (WW, iW) => {
              WW.environmentIntensity = iW
            }
          },
          metadata: iW
        }, IO, aO), (0, TW.e)(WW, null, Ti, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "specularIntensity" in WW,
            get: WW => WW.specularIntensity,
            set: (WW, iW) => {
              WW.specularIntensity = iW
            }
          },
          metadata: iW
        }, rO, zO), (0, TW.e)(WW, null, Ji, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableBumpMap" in WW,
            get: WW => WW.disableBumpMap,
            set: (WW, iW) => {
              WW.disableBumpMap = iW
            }
          },
          metadata: iW
        }, FO, QO), (0, TW.e)(WW, null, Hi, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "albedoTexture" in WW,
            get: WW => WW.albedoTexture,
            set: (WW, iW) => {
              WW.albedoTexture = iW
            }
          },
          metadata: iW
        }, Wm, im), (0, TW.e)(WW, null, ni, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseWeightTexture" in WW,
            get: WW => WW.baseWeightTexture,
            set: (WW, iW) => {
              WW.baseWeightTexture = iW
            }
          },
          metadata: iW
        }, Om, mm), (0, TW.e)(WW, null, ui, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseDiffuseRoughnessTexture" in WW,
            get: WW => WW.baseDiffuseRoughnessTexture,
            set: (WW, iW) => {
              WW.baseDiffuseRoughnessTexture = iW
            }
          },
          metadata: iW
        }, Em, Nm), (0, TW.e)(WW, null, oi, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientTexture" in WW,
            get: WW => WW.ambientTexture,
            set: (WW, iW) => {
              WW.ambientTexture = iW
            }
          },
          metadata: iW
        }, Pm, Lm), (0, TW.e)(WW, null, di, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientTextureStrength" in WW,
            get: WW => WW.ambientTextureStrength,
            set: (WW, iW) => {
              WW.ambientTextureStrength = iW
            }
          },
          metadata: iW
        }, cm, wm), (0, TW.e)(WW, null, ei, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientTextureImpactOnAnalyticalLights" in WW,
            get: WW => WW.ambientTextureImpactOnAnalyticalLights,
            set: (WW, iW) => {
              WW.ambientTextureImpactOnAnalyticalLights = iW
            }
          },
          metadata: iW
        }, tm, Zm), (0, TW.e)(WW, null, vi, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "opacityTexture" in WW,
            get: WW => WW.opacityTexture,
            set: (WW, iW) => {
              WW.opacityTexture = iW
            }
          },
          metadata: iW
        }, xm, lm), (0, TW.e)(WW, null, gi, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectionTexture" in WW,
            get: WW => WW.reflectionTexture,
            set: (WW, iW) => {
              WW.reflectionTexture = iW
            }
          },
          metadata: iW
        }, Am, bm), (0, TW.e)(WW, null, Di, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "emissiveTexture" in WW,
            get: WW => WW.emissiveTexture,
            set: (WW, iW) => {
              WW.emissiveTexture = iW
            }
          },
          metadata: iW
        }, jm, Um), (0, TW.e)(WW, null, Vi, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectivityTexture" in WW,
            get: WW => WW.reflectivityTexture,
            set: (WW, iW) => {
              WW.reflectivityTexture = iW
            }
          },
          metadata: iW
        }, km, sm), (0, TW.e)(WW, null, fi, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicTexture" in WW,
            get: WW => WW.metallicTexture,
            set: (WW, iW) => {
              WW.metallicTexture = iW
            }
          },
          metadata: iW
        }, Mm, Km), (0, TW.e)(WW, null, Ci, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallic" in WW,
            get: WW => WW.metallic,
            set: (WW, iW) => {
              WW.metallic = iW
            }
          },
          metadata: iW
        }, Sm, Ym), (0, TW.e)(WW, null, Xi, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughness" in WW,
            get: WW => WW.roughness,
            set: (WW, iW) => {
              WW.roughness = iW
            }
          },
          metadata: iW
        }, ym, Tm), (0, TW.e)(WW, null, Bi, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicF0Factor" in WW,
            get: WW => WW.metallicF0Factor,
            set: (WW, iW) => {
              WW.metallicF0Factor = iW
            }
          },
          metadata: iW
        }, Jm, hm), (0, TW.e)(WW, null, qi, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicReflectanceColor" in WW,
            get: WW => WW.metallicReflectanceColor,
            set: (WW, iW) => {
              WW.metallicReflectanceColor = iW
            }
          },
          metadata: iW
        }, Hm, nm), (0, TW.e)(WW, null, Ri, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useOnlyMetallicFromMetallicReflectanceTexture" in WW,
            get: WW => WW.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (WW, iW) => {
              WW.useOnlyMetallicFromMetallicReflectanceTexture = iW
            }
          },
          metadata: iW
        }, um, om), (0, TW.e)(WW, null, Gi, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "metallicReflectanceTexture" in WW,
            get: WW => WW.metallicReflectanceTexture,
            set: (WW, iW) => {
              WW.metallicReflectanceTexture = iW
            }
          },
          metadata: iW
        }, dm, em), (0, TW.e)(WW, null, Ii, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectanceTexture" in WW,
            get: WW => WW.reflectanceTexture,
            set: (WW, iW) => {
              WW.reflectanceTexture = iW
            }
          },
          metadata: iW
        }, gm, Dm), (0, TW.e)(WW, null, ai, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "microSurfaceTexture" in WW,
            get: WW => WW.microSurfaceTexture,
            set: (WW, iW) => {
              WW.microSurfaceTexture = iW
            }
          },
          metadata: iW
        }, Vm, pm), (0, TW.e)(WW, null, ri, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "bumpTexture" in WW,
            get: WW => WW.bumpTexture,
            set: (WW, iW) => {
              WW.bumpTexture = iW
            }
          },
          metadata: iW
        }, fm, Cm), (0, TW.e)(WW, null, zi, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "lightmapTexture" in WW,
            get: WW => WW.lightmapTexture,
            set: (WW, iW) => {
              WW.lightmapTexture = iW
            }
          },
          metadata: iW
        }, Xm, Bm), (0, TW.e)(WW, null, Fi, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "ambientColor" in WW,
            get: WW => WW.ambientColor,
            set: (WW, iW) => {
              WW.ambientColor = iW
            }
          },
          metadata: iW
        }, qm, Rm), (0, TW.e)(WW, null, Qi, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "albedoColor" in WW,
            get: WW => WW.albedoColor,
            set: (WW, iW) => {
              WW.albedoColor = iW
            }
          },
          metadata: iW
        }, Gm, Im), (0, TW.e)(WW, null, WO, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseWeight" in WW,
            get: WW => WW.baseWeight,
            set: (WW, iW) => {
              WW.baseWeight = iW
            }
          },
          metadata: iW
        }, am, rm), (0, TW.e)(WW, null, iO, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: WW => "baseDiffuseRoughness" in WW,
            get: WW => WW.baseDiffuseRoughness,
            set: (WW, iW) => {
              WW.baseDiffuseRoughness = iW
            }
          },
          metadata: iW
        }, zm, Fm), (0, TW.e)(WW, null, OO, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectivityColor" in WW,
            get: WW => WW.reflectivityColor,
            set: (WW, iW) => {
              WW.reflectivityColor = iW
            }
          },
          metadata: iW
        }, Qm, WE), (0, TW.e)(WW, null, mO, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "reflectionColor" in WW,
            get: WW => WW.reflectionColor,
            set: (WW, iW) => {
              WW.reflectionColor = iW
            }
          },
          metadata: iW
        }, iE, OE), (0, TW.e)(WW, null, EO, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: WW => "emissiveColor" in WW,
            get: WW => WW.emissiveColor,
            set: (WW, iW) => {
              WW.emissiveColor = iW
            }
          },
          metadata: iW
        }, mE, EE), (0, TW.e)(WW, null, NO, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: WW => "microSurface" in WW,
            get: WW => WW.microSurface,
            set: (WW, iW) => {
              WW.microSurface = iW
            }
          },
          metadata: iW
        }, NE, PE), (0, TW.e)(WW, null, PO, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLightmapAsShadowmap" in WW,
            get: WW => WW.useLightmapAsShadowmap,
            set: (WW, iW) => {
              WW.useLightmapAsShadowmap = iW
            }
          },
          metadata: iW
        }, LE, cE), (0, TW.e)(WW, null, LO, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlphaFromAlbedoTexture" in WW,
            get: WW => WW.useAlphaFromAlbedoTexture,
            set: (WW, iW) => {
              WW.useAlphaFromAlbedoTexture = iW
            }
          },
          metadata: iW
        }, wE, tE), (0, TW.e)(WW, null, cO, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceAlphaTest" in WW,
            get: WW => WW.forceAlphaTest,
            set: (WW, iW) => {
              WW.forceAlphaTest = iW
            }
          },
          metadata: iW
        }, ZE, xE), (0, TW.e)(WW, null, wO, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: WW => "alphaCutOff" in WW,
            get: WW => WW.alphaCutOff,
            set: (WW, iW) => {
              WW.alphaCutOff = iW
            }
          },
          metadata: iW
        }, lE, AE), (0, TW.e)(WW, null, tO, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useSpecularOverAlpha" in WW,
            get: WW => WW.useSpecularOverAlpha,
            set: (WW, iW) => {
              WW.useSpecularOverAlpha = iW
            }
          },
          metadata: iW
        }, bE, jE), (0, TW.e)(WW, null, ZO, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useMicroSurfaceFromReflectivityMapAlpha" in WW,
            get: WW => WW.useMicroSurfaceFromReflectivityMapAlpha,
            set: (WW, iW) => {
              WW.useMicroSurfaceFromReflectivityMapAlpha = iW
            }
          },
          metadata: iW
        }, UE, kE), (0, TW.e)(WW, null, xO, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMetallicTextureAlpha" in WW,
            get: WW => WW.useRoughnessFromMetallicTextureAlpha,
            set: (WW, iW) => {
              WW.useRoughnessFromMetallicTextureAlpha = iW
            }
          },
          metadata: iW
        }, sE, ME), (0, TW.e)(WW, null, lO, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRoughnessFromMetallicTextureGreen" in WW,
            get: WW => WW.useRoughnessFromMetallicTextureGreen,
            set: (WW, iW) => {
              WW.useRoughnessFromMetallicTextureGreen = iW
            }
          },
          metadata: iW
        }, KE, SE), (0, TW.e)(WW, null, AO, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: WW => "useMetallnessFromMetallicTextureBlue" in WW,
            get: WW => WW.useMetallnessFromMetallicTextureBlue,
            set: (WW, iW) => {
              WW.useMetallnessFromMetallicTextureBlue = iW
            }
          },
          metadata: iW
        }, YE, yE), (0, TW.e)(WW, null, bO, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAmbientOcclusionFromMetallicTextureRed" in WW,
            get: WW => WW.useAmbientOcclusionFromMetallicTextureRed,
            set: (WW, iW) => {
              WW.useAmbientOcclusionFromMetallicTextureRed = iW
            }
          },
          metadata: iW
        }, TE, JE), (0, TW.e)(WW, null, jO, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAmbientInGrayScale" in WW,
            get: WW => WW.useAmbientInGrayScale,
            set: (WW, iW) => {
              WW.useAmbientInGrayScale = iW
            }
          },
          metadata: iW
        }, hE, HE), (0, TW.e)(WW, null, UO, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAutoMicroSurfaceFromReflectivityMap" in WW,
            get: WW => WW.useAutoMicroSurfaceFromReflectivityMap,
            set: (WW, iW) => {
              WW.useAutoMicroSurfaceFromReflectivityMap = iW
            }
          },
          metadata: iW
        }, nE, uE), (0, TW.e)(WW, null, kO, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: WW => "usePhysicalLightFalloff" in WW,
            get: WW => WW.usePhysicalLightFalloff
          },
          metadata: iW
        }, null, XO), (0, TW.e)(WW, null, sO, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: WW => "useGLTFLightFalloff" in WW,
            get: WW => WW.useGLTFLightFalloff
          },
          metadata: iW
        }, null, XO), (0, TW.e)(WW, null, MO, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRadianceOverAlpha" in WW,
            get: WW => WW.useRadianceOverAlpha,
            set: (WW, iW) => {
              WW.useRadianceOverAlpha = iW
            }
          },
          metadata: iW
        }, oE, dE), (0, TW.e)(WW, null, KO, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "useObjectSpaceNormalMap" in WW,
            get: WW => WW.useObjectSpaceNormalMap,
            set: (WW, iW) => {
              WW.useObjectSpaceNormalMap = iW
            }
          },
          metadata: iW
        }, eE, vE), (0, TW.e)(WW, null, SO, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: WW => "useParallax" in WW,
            get: WW => WW.useParallax,
            set: (WW, iW) => {
              WW.useParallax = iW
            }
          },
          metadata: iW
        }, gE, DE), (0, TW.e)(WW, null, YO, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: WW => "useParallaxOcclusion" in WW,
            get: WW => WW.useParallaxOcclusion,
            set: (WW, iW) => {
              WW.useParallaxOcclusion = iW
            }
          },
          metadata: iW
        }, VE, pE), (0, TW.e)(WW, null, yO, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: WW => "parallaxScaleBias" in WW,
            get: WW => WW.parallaxScaleBias,
            set: (WW, iW) => {
              WW.parallaxScaleBias = iW
            }
          },
          metadata: iW
        }, fE, CE), (0, TW.e)(WW, null, TO, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: WW => "disableLighting" in WW,
            get: WW => WW.disableLighting,
            set: (WW, iW) => {
              WW.disableLighting = iW
            }
          },
          metadata: iW
        }, XE, BE), (0, TW.e)(WW, null, JO, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceIrradianceInFragment" in WW,
            get: WW => WW.forceIrradianceInFragment,
            set: (WW, iW) => {
              WW.forceIrradianceInFragment = iW
            }
          },
          metadata: iW
        }, qE, RE), (0, TW.e)(WW, null, hO, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: WW => "maxSimultaneousLights" in WW,
            get: WW => WW.maxSimultaneousLights,
            set: (WW, iW) => {
              WW.maxSimultaneousLights = iW
            }
          },
          metadata: iW
        }, GE, IE), (0, TW.e)(WW, null, HO, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertNormalMapX" in WW,
            get: WW => WW.invertNormalMapX,
            set: (WW, iW) => {
              WW.invertNormalMapX = iW
            }
          },
          metadata: iW
        }, aE, rE), (0, TW.e)(WW, null, nO, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: WW => "invertNormalMapY" in WW,
            get: WW => WW.invertNormalMapY,
            set: (WW, iW) => {
              WW.invertNormalMapY = iW
            }
          },
          metadata: iW
        }, zE, FE), (0, TW.e)(WW, null, uO, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: WW => "twoSidedLighting" in WW,
            get: WW => WW.twoSidedLighting,
            set: (WW, iW) => {
              WW.twoSidedLighting = iW
            }
          },
          metadata: iW
        }, QE, WN), (0, TW.e)(WW, null, oO, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: WW => "useAlphaFresnel" in WW,
            get: WW => WW.useAlphaFresnel,
            set: (WW, iW) => {
              WW.useAlphaFresnel = iW
            }
          },
          metadata: iW
        }, iN, ON), (0, TW.e)(WW, null, dO, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: WW => "useLinearAlphaFresnel" in WW,
            get: WW => WW.useLinearAlphaFresnel,
            set: (WW, iW) => {
              WW.useLinearAlphaFresnel = iW
            }
          },
          metadata: iW
        }, mN, EN), (0, TW.e)(WW, null, eO, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: WW => "environmentBRDFTexture" in WW,
            get: WW => WW.environmentBRDFTexture,
            set: (WW, iW) => {
              WW.environmentBRDFTexture = iW
            }
          },
          metadata: iW
        }, NN, PN), (0, TW.e)(WW, null, vO, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: WW => "forceNormalForward" in WW,
            get: WW => WW.forceNormalForward,
            set: (WW, iW) => {
              WW.forceNormalForward = iW
            }
          },
          metadata: iW
        }, LN, cN), (0, TW.e)(WW, null, gO, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: WW => "enableSpecularAntiAliasing" in WW,
            get: WW => WW.enableSpecularAntiAliasing,
            set: (WW, iW) => {
              WW.enableSpecularAntiAliasing = iW
            }
          },
          metadata: iW
        }, wN, tN), (0, TW.e)(WW, null, DO, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: WW => "useHorizonOcclusion" in WW,
            get: WW => WW.useHorizonOcclusion,
            set: (WW, iW) => {
              WW.useHorizonOcclusion = iW
            }
          },
          metadata: iW
        }, ZN, xN), (0, TW.e)(WW, null, VO, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: WW => "useRadianceOcclusion" in WW,
            get: WW => WW.useRadianceOcclusion,
            set: (WW, iW) => {
              WW.useRadianceOcclusion = iW
            }
          },
          metadata: iW
        }, lN, AN), (0, TW.e)(WW, null, pO, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: WW => "unlit" in WW,
            get: WW => WW.unlit,
            set: (WW, iW) => {
              WW.unlit = iW
            }
          },
          metadata: iW
        }, bN, jN), (0, TW.e)(WW, null, fO, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: WW => "applyDecalMapAfterDetailMap" in WW,
            get: WW => WW.applyDecalMapAfterDetailMap,
            set: (WW, iW) => {
              WW.applyDecalMapAfterDetailMap = iW
            }
          },
          metadata: iW
        }, UN, kN), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW.PBRMATERIAL_OPAQUE = Si.PBRMATERIAL_OPAQUE, WW.PBRMATERIAL_ALPHATEST = Si.PBRMATERIAL_ALPHATEST, WW.PBRMATERIAL_ALPHABLEND = Si.PBRMATERIAL_ALPHABLEND, WW.PBRMATERIAL_ALPHATESTANDBLEND = Si.PBRMATERIAL_ALPHATESTANDBLEND, WW.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Si.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, WW
    })();
    const pE = "KHR_materials_diffuse_transmission";

    function fE(WW, iW) {
      const OW = iW.subSurface;
      let mW = null;
      return OW.translucencyIntensityTexture ? mW = OW.translucencyIntensityTexture : OW.thicknessTexture && OW.useMaskFromThicknessTexture && (mW = OW.thicknessTexture), mW && !OW.useGltfStyleTextures ? (hW.b.Warn(`${WW}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${iW.name}`, 1), null) : mW
    }
    class CE {
      constructor(WW) {
        this.name = pE, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof VE && this._isExtensionEnabled(OW)) {
          const iW = fE(WW, OW);
          return iW && mW.push(iW), OW.subSurface.translucencyColorTexture && mW.push(OW.subSurface.translucencyColorTexture), mW
        }
        return mW
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const iW = WW.subSurface;
        return !!iW.isTranslucencyEnabled && (!WW.unlit && !iW.useAlbedoToTintTranslucency && iW.useGltfStyleTextures && 1 === iW.volumeIndexOfRefraction && 0 === iW.minimumThickness && 0 === iW.maximumThickness)
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((mW => {
          if (OW instanceof VE && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0;
            const mW = OW.subSurface,
              EW = fE(WW, OW),
              NW = 0 == mW.translucencyIntensity ? void 0 : mW.translucencyIntensity,
              PW = this._exporter._materialExporter.getTextureInfo(EW) ?? void 0,
              LW = !mW.translucencyColor || mW.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : mW.translucencyColor.wEW(),
              cW = this._exporter._materialExporter.getTextureInfo(mW.translucencyColorTexture) ?? void 0,
              wW = {
                diffuseTransmissionFactor: NW,
                diffuseTransmissionTexture: PW,
                diffuseTransmissionColorFactor: LW,
                diffuseTransmissionColorTexture: cW
              };
            (PW || cW) && this._exporter._materialNeedsUVsSet.add(OW), iW.extensions = iW.extensions || {}, iW.extensions[pE] = wW
          }
          mW(iW)
        }))
      }
    }
    let XE = !1;

    function BE() {
      XE || (XE = !0, Dm.RegisterExtension(pE, (WW => new CE(WW))))
    }
    BE();
    const qE = "KHR_materials_dispersion";
    class RE {
      constructor() {
        this.name = qE, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const iW = WW.subSurface;
        return !(!iW.isRefractionEnabled && !iW.isDispersionEnabled)
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          if (OW instanceof VE && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0;
            const WW = {
              dispersion: OW.subSurface.dispersion
            };
            iW.extensions = iW.extensions || {}, iW.extensions[qE] = WW
          }
          WW(iW)
        }))
      }
    }
    let GE = !1;

    function IE() {
      GE || (GE = !0, Dm.RegisterExtension(qE, (() => new RE)))
    }
    IE();
    const aE = "KHR_materials_emissive_strength";
    class rE {
      constructor() {
        this.name = aE, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(WW, iW, OW) {
        return await new Promise((WW => {
          if (!(OW instanceof VE)) return WW(iW);
          const mW = OW.emissiveColor.scale(OW.emissiveIntensity),
            EW = Math.max(...mW.wEW());
          if (EW > 1) {
            iW.emissiveFactor = mW.scale(1 / EW).wEW(), this._wasUsed = !0;
            const WW = {
              emissiveStrength: EW
            };
            iW.extensions || (iW.extensions = {}), iW.extensions[aE] = WW
          } else iW.emissiveFactor = mW.wEW();
          return WW(iW)
        }))
      }
    }
    let zE = !1;

    function FE() {
      zE || (zE = !0, Dm.RegisterExtension(aE, (() => new rE)))
    }
    FE();
    const QE = "KHR_materials_ior";
    class WN {
      constructor() {
        this.name = QE, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(WW) {
        return !WW.unlit && (WW instanceof WO ? 1.5 != WW.specularIor : WW instanceof VE && (void 0 != WW.indexOfRefraction && 1.5 != WW.indexOfRefraction))
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          if (OW instanceof VE && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0;
            const WW = {
              ior: OW.indexOfRefraction
            };
            iW.extensions = iW.extensions || {}, iW.extensions[QE] = WW
          } else if (OW instanceof WO && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0;
            const WW = {
              ior: OW.specularIor
            };
            iW.extensions = iW.extensions || {}, iW.extensions[QE] = WW
          }
          WW(iW)
        }))
      }
    }
    let iN = !1;

    function ON() {
      iN || (iN = !0, Dm.RegisterExtension(QE, (() => new WN)))
    }
    ON();
    const mN = "KHR_materials_iridescence";
    class EN {
      constructor(WW) {
        this.name = mN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof Si) {
          if (OW.iridescence.isEnabled) return OW.iridescence.texture && mW.push(OW.iridescence.texture), OW.iridescence.thicknessTexture && OW.iridescence.thicknessTexture !== OW.iridescence.texture && mW.push(OW.iridescence.thicknessTexture), mW
        } else if (OW instanceof WO && OW.thinFilmWeight > 0) return OW.thinFilmWeightTexture && mW.push(OW.thinFilmWeightTexture), OW.thinFilmThicknessTexture && OW.thinFilmThicknessTexture !== OW.thinFilmWeightTexture && mW.push(OW.thinFilmThicknessTexture), mW;
        return []
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          if (OW instanceof Si) {
            if (!OW.iridescence.isEnabled) return void WW(iW);
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            const mW = this._exporter._materialExporter.getTextureInfo(OW.iridescence.texture),
              EW = this._exporter._materialExporter.getTextureInfo(OW.iridescence.thicknessTexture),
              NW = {
                iridescenceFactor: OW.iridescence.intensity,
                iridescenceIor: OW.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: OW.iridescence.minimumThickness,
                iridescenceThicknessMaximum: OW.iridescence.maximumThickness,
                iridescenceTexture: mW ?? void 0,
                iridescenceThicknessTexture: EW ?? void 0
              };
            null === NW.iridescenceTexture && null === NW.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[mN] = NW
          } else if (OW instanceof WO) {
            if (OW.thinFilmWeight <= 0) return void WW(iW);
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            const mW = this._exporter._materialExporter.getTextureInfo(OW.thinFilmWeightTexture),
              EW = this._exporter._materialExporter.getTextureInfo(OW.thinFilmThicknessTexture),
              NW = {
                iridescenceFactor: OW.thinFilmWeight,
                iridescenceIor: OW.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * OW.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * OW.thinFilmThickness,
                iridescenceTexture: mW ?? void 0,
                iridescenceThicknessTexture: EW ?? void 0
              };
            null === NW.iridescenceTexture && null === NW.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[mN] = NW
          }
          WW(iW)
        }))
      }
    }
    let NN = !1;

    function PN() {
      NN || (NN = !0, Dm.RegisterExtension(mN, (WW => new EN(WW))))
    }
    PN();
    const LN = "KHR_materials_sheen";
    class cN {
      constructor(WW) {
        this.name = LN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        return OW instanceof VE && OW.sheen.isEnabled && OW.sheen.texture ? [OW.sheen.texture] : []
      }
      async postExportMaterialAsync(WW, iW, OW) {
        return await new Promise((WW => {
          if (OW instanceof VE) {
            if (!OW.sheen.isEnabled) return void WW(iW);
            this._wasUsed = !0, null == iW.extensions && (iW.extensions = {});
            const mW = {
              sheenColorFactor: OW.sheen.color.wEW(),
              sheenRoughnessFactor: OW.sheen.roughness ?? 0
            };
            null === mW.sheenColorTexture && null === mW.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(OW), OW.sheen.texture && (mW.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(OW.sheen.texture) ?? void 0), OW.sheen.textureRoughness && !OW.sheen.useRoughnessFromMainTexture ? mW.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(OW.sheen.textureRoughness) ?? void 0 : OW.sheen.texture && OW.sheen.useRoughnessFromMainTexture && (mW.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(OW.sheen.texture) ?? void 0), iW.extensions[LN] = mW
          }
          WW(iW)
        }))
      }
    }
    let wN = !1;

    function tN() {
      wN || (wN = !0, Dm.RegisterExtension(LN, (WW => new cN(WW))))
    }
    tN();
    const ZN = "KHR_materials_fuzz";

    function xN(WW, iW) {
      const OW = new nW.h(iW.name, iW.bD());
      return OW._texture = WW, OW.coordinatesIndex = iW.coordinatesIndex, iW instanceof nW.h && (OW.uOffset = iW.uOffset, OW.vOffset = iW.vOffset, OW.uScale = iW.uScale, OW.vScale = iW.vScale, OW.wAng = iW.wAng), OW.wrapU = iW.wrapU, OW.wrapV = iW.wrapV, OW
    }
    class lN {
      constructor(WW) {
        this.name = ZN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = WW
      }
      dispose() {
        for (const WW of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[WW].dispose()
        }
        this._mergedTexturesMap = {};
        for (const WW of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[WW].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        if (OW instanceof WO) {
          const WW = [];
          if (OW.fuzzWeight > 0) {
            OW.fuzzWeightTexture && WW.push(OW.fuzzWeightTexture);
            let iW = !1;
            if (OW.fuzzRoughnessTexture && (OW._useFuzzRoughnessFromTextureAlpha ? WW.push(OW.fuzzRoughnessTexture) : iW = !0), OW.fuzzColorTexture && !iW && WW.push(OW.fuzzColorTexture), iW) {
              const iW = function(WW) {
                const iW = WW.fuzzColorTexture,
                  OW = iW && iW.getInternalTexture() ? iW.getInternalTexture().uniqueId : "NoFuzzColor",
                  mW = WW.fuzzRoughnessTexture;
                return `FuzzColor_${OW}_FuzzRoughness_${mW&&mW.getInternalTexture()?mW.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(OW);
              if (!this._cachedInternalTexturesMap[iW]) {
                const WW = await async function(WW) {
                  const iW = WW.bD(),
                    OW = WW.fuzzColorTexture,
                    mW = WW.fuzzRoughnessTexture;
                  return OW || mW ? (await cO("FuzzTexture", ZO(OW ? wO(OW, 0) : tO(1), OW ? wO(OW, 1) : tO(1), OW ? wO(OW, 2) : tO(1), mW ? wO(mW, WW._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : tO(1)), iW)).getInternalTexture() : null
                }(OW);
                WW && (this._cachedInternalTexturesMap[iW] = WW)
              }
              this._cachedInternalTexturesMap[iW] && (OW.fuzzColorTexture && (this._mergedTexturesMap[OW.fuzzColorTexture.uniqueId] = xN(this._cachedInternalTexturesMap[iW], OW.fuzzColorTexture), WW.push(this._mergedTexturesMap[OW.fuzzColorTexture.uniqueId])), OW.fuzzRoughnessTexture && (this._mergedTexturesMap[OW.fuzzRoughnessTexture.uniqueId] = xN(this._cachedInternalTexturesMap[iW], OW.fuzzRoughnessTexture), WW.push(this._mergedTexturesMap[OW.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return WW
        }
        return []
      }
      async postExportMaterialAsync(WW, iW, OW) {
        return await new Promise((WW => {
          if (OW instanceof WO) {
            if (0 == OW.fuzzWeight) return void WW(iW);
            this._wasUsed = !0, null == iW.extensions && (iW.extensions = {});
            const mW = {
              fuzzFactor: OW.fuzzWeight,
              fuzzColorFactor: OW.fuzzColor.wEW(),
              fuzzRoughnessFactor: OW.fuzzRoughness
            };
            let EW, NW;
            OW.fuzzWeightTexture && (mW.fuzzTexture = this._exporter._materialExporter.getTextureInfo(OW.fuzzWeightTexture) ?? void 0), OW.fuzzColorTexture && (EW = this._mergedTexturesMap[OW.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[OW.fuzzColorTexture.uniqueId] : OW.fuzzColorTexture, mW.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(EW) ?? void 0), OW.fuzzRoughnessTexture && (NW = this._mergedTexturesMap[OW.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[OW.fuzzRoughnessTexture.uniqueId] : OW.fuzzRoughnessTexture, mW.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(NW) ?? void 0), null === mW.fuzzColorTexture && null === mW.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[ZN] = mW
          }
          WW(iW)
        }))
      }
    }
    let AN = !1;

    function bN() {
      AN || (AN = !0, Dm.RegisterExtension(ZN, (WW => new lN(WW))))
    }
    bN();
    const jN = "KHR_materials_specular";
    class UN {
      constructor(WW) {
        this.name = jN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        return OW instanceof VE && this._isExtensionEnabled(OW) ? (OW.metallicReflectanceTexture && mW.push(OW.metallicReflectanceTexture), OW.reflectanceTexture && mW.push(OW.reflectanceTexture), mW) : mW
      }
      _isExtensionEnabled(WW) {
        return !WW.unlit && (void 0 != WW.metallicF0Factor && 1 != WW.metallicF0Factor || void 0 != WW.metallicReflectanceColor && !WW.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(WW))
      }
      _hasTexturesExtension(WW) {
        return null != WW.metallicReflectanceTexture || null != WW.reflectanceTexture
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          var mW;
          if (OW instanceof VE && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0, iW.extensions = iW.extensions || {};
            const WW = this._exporter._materialExporter.getTextureInfo(OW.metallicReflectanceTexture) ?? void 0,
              mW = this._exporter._materialExporter.getTextureInfo(OW.reflectanceTexture) ?? void 0,
              EW = {
                specularFactor: 1 == OW.metallicF0Factor ? void 0 : OW.metallicF0Factor,
                specularTexture: WW,
                specularColorFactor: OW.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : OW.metallicReflectanceColor.wEW(),
                specularColorTexture: mW
              };
            this._hasTexturesExtension(OW) && this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[jN] = EW
          } else if (OW instanceof WO) {
            iW.extensions = iW.extensions || {};
            const EW = this._exporter._materialExporter.getTextureInfo(OW.specularWeightTexture) ?? void 0,
              NW = this._exporter._materialExporter.getTextureInfo(OW.specularColorTexture) ?? void 0,
              PW = 1 == OW.specularWeight ? void 0 : OW.specularWeight,
              LW = OW.specularColor.equalsFloats(1, 1, 1) ? void 0 : OW.specularColor.wEW();
            if (!NW && !EW && void 0 === PW && void 0 === LW) return WW(iW);
            this._wasUsed = !0;
            const cW = {
                specularEdgeColorEnabled: !0
              },
              wW = {
                specularFactor: PW,
                specularTexture: EW,
                specularColorFactor: LW,
                specularColorTexture: NW,
                extensions: {}
              };
            wW.extensions.EXT_materials_specular_edge_color = cW, (mW = this._exporter._glTF).extensionsUsed || (mW.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (EW || NW) && this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[jN] = wW
          }
          WW(iW)
        }))
      }
    }
    let kN = !1;

    function sN() {
      kN || (kN = !0, Dm.RegisterExtension(jN, (WW => new UN(WW))))
    }
    sN();
    const MN = "KHR_materials_transmission";
    class KN {
      constructor(WW) {
        this.name = MN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof VE) {
          if (this._isExtensionEnabled(OW)) return OW.subSurface.refractionIntensityTexture && OW.subSurface.useGltfStyleTextures && mW.push(OW.subSurface.refractionIntensityTexture), mW
        } else OW instanceof WO && (OW.transmissionWeight > 0 && OW.transmissionWeightTexture && (mW.push(OW.transmissionWeightTexture), OW.transmissionColorTexture && mW.push(OW.transmissionColorTexture)), OW.subsurfaceWeight > 0 && OW.subsurfaceWeightTexture && mW.push(OW.subsurfaceWeightTexture));
        return mW
      }
      _isExtensionEnabled(WW) {
        if (WW instanceof WO && !WW.unlit) return WW.transmissionWeight > 0 || WW.subsurfaceWeight > 0;
        if (WW instanceof VE && !WW.unlit) {
          const iW = WW.subSurface;
          return iW.isRefractionEnabled && void 0 != iW.refractionIntensity && 0 != iW.refractionIntensity || null != iW.refractionIntensityTexture && iW.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(WW, iW, OW) {
        if (!this._isExtensionEnabled(OW)) return iW;
        if (OW instanceof VE) {
          this._wasUsed = !0;
          const mW = OW.subSurface,
            EW = {
              transmissionFactor: 0 === mW.refractionIntensity ? void 0 : mW.refractionIntensity
            };
          if (mW.refractionIntensityTexture)
            if (mW.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(OW);
              const WW = this._exporter._materialExporter.getTextureInfo(mW.refractionIntensityTexture);
              WW && (EW.transmissionTexture = WW)
            } else hW.b.Warn(`${WW}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          iW.extensions || (iW.extensions = {}), iW.extensions[MN] = EW
        } else if (OW instanceof WO) {
          this._wasUsed = !0;
          const WW = {
            transmissionFactor: (1 - OW.transmissionWeight) * OW.subsurfaceWeight + OW.transmissionWeight
          };
          if (OW.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(OW);
            const iW = this._exporter._materialExporter.getTextureInfo(OW.transmissionWeightTexture);
            iW && (WW.transmissionTexture = iW)
          } else if (OW.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(OW);
            const iW = this._exporter._materialExporter.getTextureInfo(OW.subsurfaceWeightTexture);
            iW && (WW.transmissionTexture = iW)
          }
          if (0 == OW.transmissionDepth && (!OW.transmissionColor.equals(RW.b.White()) || OW.transmissionColorTexture) && iW.pbrMetallicRoughness && (iW.pbrMetallicRoughness.baseColorFactor || (iW.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), iW.pbrMetallicRoughness.baseColorFactor[0] *= OW.transmissionColor.r, iW.pbrMetallicRoughness.baseColorFactor[1] *= OW.transmissionColor.g, iW.pbrMetallicRoughness.baseColorFactor[2] *= OW.transmissionColor.b, OW.transmissionColorTexture && !iW.pbrMetallicRoughness.baseColorTexture)) {
            const WW = this._exporter._materialExporter.getTextureInfo(OW.transmissionColorTexture);
            WW && (iW.pbrMetallicRoughness.baseColorTexture = WW, this._exporter._materialNeedsUVsSet.add(OW))
          }
          iW.extensions || (iW.extensions = {}), iW.extensions[MN] = WW
        }
        return iW
      }
    }
    let SN = !1;

    function YN() {
      SN || (SN = !0, Dm.RegisterExtension(MN, (WW => new KN(WW))))
    }
    YN();
    var yN = OW(41784);
    const TN = "KHR_materials_unlit";
    class JN {
      constructor() {
        this.name = TN, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          let mW = !1;
          OW instanceof VE ? mW = OW.unlit : OW instanceof yN.f && (mW = OW.disableLighting), mW && (this._wasUsed = !0, null == iW.extensions && (iW.extensions = {}), iW.extensions[TN] = {}), WW(iW)
        }))
      }
    }
    let hN = !1;

    function HN() {
      hN || (hN = !0, Dm.RegisterExtension(TN, (() => new JN)))
    }
    HN();
    const nN = "KHR_materials_volume";
    class uN {
      constructor(WW) {
        this.name = nN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof VE) {
          if (this._isExtensionEnabled(OW)) return OW.subSurface.thicknessTexture && mW.push(OW.subSurface.thicknessTexture), mW
        } else OW instanceof WO && (OW.transmissionWeight > 0 || OW.subsurfaceWeight > 0) && OW.geometryThicknessTexture && mW.push(OW.geometryThicknessTexture);
        return mW
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const iW = WW.subSurface;
        return !(!iW.isRefractionEnabled && !iW.isTranslucencyEnabled) && (void 0 != iW.maximumThickness && 0 != iW.maximumThickness || void 0 != iW.tintColorAtDistance && iW.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != iW.tintColor && iW.tintColor != RW.b.White() || this._hasTexturesExtension(WW))
      }
      _hasTexturesExtension(WW) {
        return null != WW.subSurface.thicknessTexture
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          if (OW instanceof VE && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0;
            const WW = OW.subSurface,
              mW = {
                thicknessFactor: 0 == WW.maximumThickness ? void 0 : WW.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(WW.thicknessTexture) ?? void 0,
                attenuationDistance: WW.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : WW.tintColorAtDistance,
                attenuationColor: WW.tintColor.equalsFloats(1, 1, 1) ? void 0 : WW.tintColor.wEW()
              };
            this._hasTexturesExtension(OW) && this._exporter._materialNeedsUVsSet.add(OW), iW.extensions = iW.extensions || {}, iW.extensions[nN] = mW
          } else if (OW instanceof WO) {
            const WW = OW.transmissionWeight > 0 && !OW.geometryThinWalled,
              mW = OW.subsurfaceWeight > 0 && !OW.geometryThinWalled;
            if (WW || mW) {
              this._wasUsed = !0;
              const EW = OW.geometryThickness,
                NW = this._exporter._materialExporter.getTextureInfo(OW.geometryThicknessTexture) ?? void 0;
              let PW;
              NW && this._exporter._materialNeedsUVsSet.add(OW);
              const LW = RW.b.White().wEW();
              if (WW && OW.transmissionDepth > 0) {
                const WW = 1 / OW.transmissionDepth;
                let iW = new VW.q(-Math.log(OW.transmissionColor.r) * WW, -Math.log(OW.transmissionColor.g) * WW, -Math.log(OW.transmissionColor.b) * WW);
                const mW = new VW.q(OW.transmissionScatter.r * WW, OW.transmissionScatter.g * WW, OW.transmissionScatter.b * WW),
                  EW = iW.subtract(mW),
                  NW = Math.min(EW.x, EW.y, EW.z);
                NW < 0 && (EW.x = EW.x - NW, EW.y = EW.y - NW, EW.z = EW.z - NW), iW = EW.add(mW);
                PW = 1 / Math.max(iW.x, iW.y, iW.z), LW[0] = Math.exp(-iW.x * PW), LW[1] = Math.exp(-iW.y * PW), LW[2] = Math.exp(-iW.z * PW)
              } else PW = Number.MAX_VALUE, LW[0] = 1, LW[1] = 1, LW[2] = 1;
              let cW = 1;
              const wW = RW.b.White().wEW();
              if (mW) {
                const WW = OW.subsurfaceRadius,
                  iW = OW.subsurfaceRadiusScale,
                  mW = new VW.q(iW.r, iW.g, iW.b).multiplyByFloats(WW, WW, WW),
                  EW = new VW.q(1 / Math.max(mW.x, 1e-6), 1 / Math.max(mW.y, 1e-6), 1 / Math.max(mW.z, 1e-6));
                cW = 1 / Math.max(EW.x, EW.y, EW.z), wW[0] = Math.exp(-EW.x * cW), wW[1] = Math.exp(-EW.y * cW), wW[2] = Math.exp(-EW.z * cW)
              }
              const tW = (1 - OW.transmissionWeight) * OW.subsurfaceWeight,
                ZW = tW + OW.transmissionWeight,
                xW = 1 / Math.max(ZW, 1e-6),
                lW = OW.transmissionWeight * xW,
                AW = tW * xW,
                bW = LW.map(((WW, iW) => WW * lW + wW[iW] * AW)),
                jW = {
                  thicknessFactor: EW,
                  thicknessTexture: NW,
                  attenuationDistance: PW * lW + cW * AW,
                  attenuationColor: bW
                };
              iW.extensions = iW.extensions || {}, iW.extensions[nN] = jW
            }
          }
          WW(iW)
        }))
      }
    }
    let oN = !1;

    function dN() {
      oN || (oN = !0, Dm.RegisterExtension(nN, (WW => new uN(WW))))
    }
    dN();
    const eN = "KHR_materials_volume_scatter";
    class vN {
      constructor(WW) {
        this.name = eN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        return OW instanceof WO && (OW.transmissionWeight > 0 && OW.transmissionScatterTexture && mW.push(OW.transmissionScatterTexture), OW.subsurfaceWeight > 0 && OW.subsurfaceColorTexture && mW.push(OW.subsurfaceColorTexture)), mW
      }
      _isExtensionEnabled(WW) {
        if (WW.unlit) return !1;
        const iW = WW.transmissionWeight > 0 && !WW.geometryThinWalled && WW.transmissionDepth > 0 && !WW.transmissionScatter.equals(RW.b.Black()),
          OW = WW.subsurfaceWeight > 0 && !WW.geometryThinWalled;
        return !(!iW && !OW)
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          if (OW instanceof WO && this._isExtensionEnabled(OW)) {
            this._wasUsed = !0;
            let WW = VW.q.Zero(),
              mW = 0;
            if (OW.transmissionWeight > 0) {
              WW = function(WW) {
                const iW = new VW.q(Math.sqrt(1 - WW.x), Math.sqrt(1 - WW.y), Math.sqrt(1 - WW.z)),
                  OW = new VW.q(1, 1, 1),
                  mW = OW.subtract(iW),
                  EW = OW.subtract(new VW.q(.139, .139, .139).multiplyInPlace(iW)),
                  NW = OW.add(new VW.q(1.17, 1.17, 1.17).multiplyInPlace(iW));
                return mW.multiplyInPlace(EW).divideInPlace(NW)
              }(new VW.q(OW.transmissionScatter.r, OW.transmissionScatter.g, OW.transmissionScatter.b)), mW = OW.transmissionScatterAnisotropy
            }
            const EW = VW.q.Zero();
            let NW = 0;
            OW.subsurfaceWeight > 0 && (EW.set(OW.subsurfaceColor.r, OW.subsurfaceColor.g, OW.subsurfaceColor.b), NW = OW.subsurfaceScatterAnisotropy);
            const PW = (1 - OW.transmissionWeight) * OW.subsurfaceWeight,
              LW = PW + OW.transmissionWeight,
              cW = 1 / Math.max(LW, 1e-6),
              wW = OW.transmissionWeight * cW,
              tW = PW * cW,
              ZW = {
                multiscatterColorFactor: WW.multiplyByFloats(wW, wW, wW).addInPlace(EW.multiplyByFloats(tW, tW, tW)).wEW(),
                scatterAnisotropy: mW * wW + NW * tW
              };
            if (OW.subsurfaceWeight > 0 && OW.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(OW);
              const WW = this._exporter._materialExporter.getTextureInfo(OW.subsurfaceColorTexture);
              WW && (ZW.multiscatterColorTexture = WW)
            } else if (OW.transmissionWeight > 0 && OW.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(OW);
              const WW = this._exporter._materialExporter.getTextureInfo(OW.transmissionScatterTexture);
              WW && (ZW.multiscatterColorTexture = WW)
            }
            iW.extensions = iW.extensions || {}, iW.extensions[eN] = ZW
          }
          WW(iW)
        }))
      }
    }
    let gN = !1;

    function DN() {
      gN || (gN = !0, Dm.RegisterExtension(eN, (WW => new vN(WW)), 101))
    }
    DN();
    const VN = "KHR_materials_diffuse_roughness";
    class pN {
      constructor(WW) {
        this.name = VN, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(WW, iW, OW) {
        const mW = [];
        if (OW instanceof Si) {
          if (OW._baseDiffuseRoughness) return OW._baseDiffuseRoughnessTexture && mW.push(OW._baseDiffuseRoughnessTexture), mW
        } else if (OW instanceof WO && OW.baseDiffuseRoughness) return OW.baseDiffuseRoughnessTexture && mW.push(OW.baseDiffuseRoughnessTexture), mW;
        return []
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          let mW = null,
            EW = null;
          if (OW instanceof Si ? (mW = OW._baseDiffuseRoughness, EW = OW._baseDiffuseRoughnessTexture) : OW instanceof WO && (mW = OW.baseDiffuseRoughness, EW = OW.baseDiffuseRoughnessTexture), !mW) return void WW(iW);
          this._wasUsed = !0, iW.extensions = iW.extensions || {};
          const NW = {
            diffuseRoughnessFactor: mW,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(EW) ?? void 0
          };
          null !== NW.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(OW), iW.extensions[VN] = NW, WW(iW)
        }))
      }
    }
    let fN = !1;

    function CN() {
      fN || (fN = !0, Dm.RegisterExtension(VN, (WW => new pN(WW))))
    }
    CN();
    const XN = "KHR_materials_openpbr";
    class BN {
      constructor() {
        this.name = XN, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(WW, iW, OW) {
        return new Promise((WW => {
          OW instanceof WO && (this._wasUsed = !0, iW.extensions = iW.extensions || {}, iW.extensions[XN] = {}), WW(iW)
        }))
      }
    }
    let qN = !1;

    function RN() {
      qN || (qN = !0, Dm.RegisterExtension(XN, (() => new BN)))
    }
    RN();
    const GN = "KHR_texture_transform";
    class IN {
      constructor() {
        this.name = GN, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(WW, iW, OW) {
        if (OW.bD() || yi.f.Warn(`${WW}: "scene" is not defined for Babylon texture ${OW.name}!`), (0 !== OW.uAng || 0 !== OW.vAng) && (yi.f.Warn(`${WW}: Texture ${OW.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== OW.uRotationCenter || 0 !== OW.vRotationCenter)) return;
        const mW = {};
        let EW = !1;
        if (0 === OW.uOffset && 0 === OW.vOffset || (mW.offset = [OW.uOffset, OW.vOffset], EW = !0), 1 === OW.uScale && 1 === OW.vScale || (mW.scale = [OW.uScale, OW.vScale], EW = !0), 0 !== OW.wAng) {
          if (0 !== OW.uRotationCenter || 0 !== OW.vRotationCenter) {
            if (OW.homogeneousRotationInUVTransform && OW.uScale !== OW.vScale) return void yi.f.Warn(`${WW}: Texture ${OW.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${GN}.`);
            yi.f.Warn(`${WW}: Texture ${OW.name} with non-origin rotation center will be exported using an adjusted offset with ${GN}.`), mW.offset = function(WW) {
              const {
                uOffset: iW,
                vOffset: OW,
                uRotationCenter: mW,
                vRotationCenter: EW,
                uScale: NW,
                vScale: PW,
                wAng: LW
              } = WW, cW = Math.cos(LW), wW = Math.sin(LW), tW = mW * NW, ZW = EW * PW;
              return [iW + (tW * (1 - cW) + ZW * wW), OW + (ZW * (1 - cW) - tW * wW)]
            }(OW)
          }
          mW.rotation = -OW.wAng, EW = !0
        }
        0 !== OW.coordinatesIndex && (mW.texCoord = OW.coordinatesIndex, EW = !0), EW && (this._wasUsed = !0, iW.extensions || (iW.extensions = {}), iW.extensions[GN] = mW)
      }
    }
    let aN = !1;

    function rN() {
      aN || (aN = !0, Dm.RegisterExtension(GN, (() => new IN)))
    }
    rN();
    var zN = OW(41558);
    const FN = "KHR_texture_basisu";
    class QN {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = FN, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      postExportTexture(WW, iW) {
        const OW = this._exporter._textures[iW.index],
          mW = OW.source;
        if (void 0 === mW) return;
        const EW = this._exporter._images[mW];
        "image/ktx2" === (EW.mimeType || (0, zN.i)(EW.uri)) && (OW.source = void 0, OW.extensions || (OW.extensions = {}), OW.extensions[FN] = {
          source: mW
        }, this._wasUsed = !0)
      }
    }
    let WP = !1;

    function iP() {
      WP || (WP = !0, Dm.RegisterExtension(FN, (WW => new QN(WW))))
    }
    iP();
    const OP = "EXT_texture_webp";
    class mP {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = OP, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      postExportTexture(WW, iW) {
        const OW = this._exporter._textures[iW.index],
          mW = OW.source;
        if (void 0 === mW) return;
        const EW = this._exporter._images[mW];
        "image/webp" === (EW.mimeType || (0, zN.i)(EW.uri)) && (OW.source = void 0, OW.extensions || (OW.extensions = {}), OW.extensions[OP] = {
          source: mW
        }, this._wasUsed = !0)
      }
    }
    let EP = !1;

    function NP() {
      EP || (EP = !0, Dm.RegisterExtension(OP, (WW => new mP(WW))))
    }
    NP();
    const PP = "EXT_texture_avif";
    class LP {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(WW) {
        this.name = PP, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = WW
      }
      dispose() {}
      postExportTexture(WW, iW) {
        const OW = this._exporter._textures[iW.index],
          mW = OW.source;
        if (void 0 === mW) return;
        const EW = this._exporter._images[mW];
        "image/avif" === (EW.mimeType || (0, zN.i)(EW.uri)) && (OW.source = void 0, OW.extensions || (OW.extensions = {}), OW.extensions[PP] = {
          source: mW
        }, this._wasUsed = !0)
      }
    }
    let cP = !1;

    function wP() {
      cP || (cP = !0, Dm.RegisterExtension(PP, (WW => new LP(WW))))
    }
    wP();
    class tP {
      static CreateSTL(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          NW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          LW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          cW = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const wW = function(WW, iW, OW) {
            const EW = [3 * WW[OW], 3 * WW[OW + 1], 3 * WW[OW + 2]],
              NW = [new mW.fA(iW[EW[0]], iW[EW[0] + 2], iW[EW[0] + 1]), new mW.fA(iW[EW[1]], iW[EW[1] + 2], iW[EW[1] + 1]), new mW.fA(iW[EW[2]], iW[EW[2] + 2], iW[EW[2] + 1])],
              PW = NW[0].subtract(NW[1]),
              LW = NW[2].subtract(NW[1]);
            return {
              v: NW,
              n: mW.fA.Cross(LW, PW).normalize()
            }
          },
          ZW = function(WW, iW, OW, mW) {
            return iW = xW(WW, iW, OW.x, mW), iW = xW(WW, iW, OW.y, mW), xW(WW, iW, OW.z, mW)
          },
          xW = function(WW, iW, OW, mW) {
            return WW.setFloat32(iW, OW, mW), iW + 4
          },
          AW = function(WW) {
            if (LW) {
              let iW = WW;
              WW instanceof lW.d && (iW = WW.WNW);
              const OW = iW.getVerticesData(tW.g.PositionKind, !0, !0);
              if (!OW) return [];
              const EW = mW.fA.Zero();
              let NW;
              for (NW = 0; NW < OW.length; NW += 3) mW.fA.TransformCoordinatesFromFloatsToRef(OW[NW], OW[NW + 1], OW[NW + 2], WW.computeWorldMatrix(!0), EW).toArray(OW, NW);
              return OW
            }
            return WW.getVerticesData(tW.g.PositionKind) || []
          };
        LW && (PW = !0);
        let bW = "",
          jW = 0,
          UW = 0;
        if (EW) {
          for (let OW = 0; OW < WW.length; OW++) {
            const iW = WW[OW].IEW();
            jW += iW ? iW.length / 3 : 0
          }
          const iW = new ArrayBuffer(84 + 50 * jW);
          bW = new DataView(iW), UW += 80, bW.setUint32(UW, jW, NW), UW += 4
        } else cW || (bW = "solid stlmesh\r\n");
        for (let mW = 0; mW < WW.length; mW++) {
          const iW = WW[mW];
          !EW && cW && (bW += "solid " + iW.name + "\r\n"), !PW && iW instanceof Zm.e && iW.bakeCurrentTransformIntoVertices();
          const OW = AW(iW),
            LW = iW.IEW() || [];
          for (let WW = 0; WW < LW.length; WW += 3) {
            const iW = wW(LW, OW, WW);
            EW ? (UW = ZW(bW, UW, iW.n, NW), UW = ZW(bW, UW, iW.v[0], NW), UW = ZW(bW, UW, iW.v[1], NW), UW = ZW(bW, UW, iW.v[2], NW), UW += 2) : (bW += "\tfacet normal " + iW.n.x + " " + iW.n.y + " " + iW.n.z + "\r\n", bW += "\t\touter loop\r\n", bW += "\t\t\tvertex " + iW.v[0].x + " " + iW.v[0].y + " " + iW.v[0].z + "\r\n", bW += "\t\t\tvertex " + iW.v[1].x + " " + iW.v[1].y + " " + iW.v[1].z + "\r\n", bW += "\t\t\tvertex " + iW.v[2].x + " " + iW.v[2].y + " " + iW.v[2].z + "\r\n", bW += "\t\tendloop\r\n", bW += "\tendfacet\r\n")
          }!EW && cW && (bW += "endsolid " + name + "\r\n")
        }
        if (EW || cW || (bW += "endsolid stlmesh"), iW) {
          const WW = document.createElement("a"),
            iW = new Blob([bW], {
              type: "application/octet-stream"
            });
          WW.href = window.URL.createObjectURL(iW), WW.download = OW + ".stl", WW.click()
        }
        return bW
      }
    }

    function ZP(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const EW = [];
      for (let NW = 0; NW < WW.length / OW; NW++) {
        const PW = WW[NW * OW] * (mW ? -1 : 1),
          LW = WW[NW * OW + 1],
          cW = WW[NW * OW + 2];
        EW.push(`(${PW.toPrecision(iW.precision)}, ${LW.toPrecision(iW.precision)}, ${cW.toPrecision(iW.precision)})`)
      }
      return EW.join(", ")
    }

    function xP(WW, iW) {
      const OW = [];
      for (let mW = 0; mW < WW.length / 2; mW++) {
        const EW = WW[2 * mW],
          NW = WW[2 * mW + 1];
        OW.push(`(${EW.toPrecision(iW.precision)}, ${(1-NW).toPrecision(iW.precision)})`)
      }
      return OW.join(", ")
    }

    function lP(WW, iW, OW, mW) {
      const EW = WW.getVerticesData(tW.g.PositionKind),
        NW = WW.getVerticesData(tW.g.NormalKind);
      if (EW && NW) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${OW}"\n\t\tint[] faceVertexCounts = [${function(WW){const iW=WW.IEW()?.length?WW.getTotalIndices():WW.getTotalVertices();return Array(iW/3).fill(3).join(", ")}(WW)}]\n\t\tint[] faceVertexIndices = [${function(WW){const iW=WW.IEW(),OW=iW?.length??WW.getTotalVertices(),mW=[];if(null!==iW)for(let EW=0;EW<OW;EW++)mW.push(iW[EW]);else for(let EW=0;EW<OW;EW++)mW.push(EW);return mW.join(", ")}(WW)}]\n\t\tnormal3f[] normals = [${ZP(NW,iW,void 0,mW)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${ZP(EW,iW,void 0,mW)}]\n        ${function(WW,iW){let OW="";for(let EW=0;EW<4;EW++){const mW=EW>0?EW:"",NW=WW.getVerticesData(tW.g.UVKind+(mW?mW+1:""));NW&&(OW+=`\n\t\ttexCoord2f[] primvars:st${mW} = [${xP(NW,iW)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const mW=WW.getVerticesData(tW.g.ColorKind);return mW&&(OW+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        ZP(mW, iW, mW.length / WW.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),OW}(WW,iW)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function AP(WW, iW, OW, mW) {
      return `\n        def "Geometry"\n        {\n        ${lP(WW,iW,OW,mW)}\n        }\n        `
    }

    function bP(WW) {
      let iW = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return iW += WW, fflate.strToU8(iW)
    }

    function jP(WW) {
      const iW = WW.m;
      return `( ${UP(iW,0)}, ${UP(iW,4)}, ${UP(iW,8)}, ${UP(iW,12)} )`
    }

    function UP(WW, iW) {
      return `(${WW[iW+0]}, ${WW[iW+1]}, ${WW[iW+2]}, ${WW[iW+3]})`
    }

    function kP(WW, iW) {
      const OW = "Object_" + WW.uniqueId,
        mW = jP(iW);
      return `def Xform "${OW}" (\n\tprepend references = @./geometries/Geometry_${WW.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${mW}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${WW.material.uniqueId}>\n}\n\n`
    }

    function sP(WW) {
      switch (WW) {
        case YW.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case YW.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case YW.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function MP(WW) {
      return `(${WW.x}, ${WW.y})`
    }

    function KP(WW) {
      return `(${WW.r}, ${WW.g}, ${WW.b})`
    }

    function SP(WW) {
      return "image/jpeg" === WW || "image/png" === WW
    }

    function YP(WW, iW, OW, EW, NW, PW) {
      const LW = WW.getInternalTexture().uniqueId + "_" + WW.invertY,
        wW = WW.mimeType || (0, cW.e)(WW.getInternalTexture()?.url ?? ""),
        tW = SP(wW) ? wW : "image/png",
        ZW = "image/jpeg" === tW ? "jpg" : "png";
      NW[LW] = {
        texture: WW,
        mimeType: tW,
        ext: ZW
      };
      const xW = WW.coordinatesIndex > 0 ? "st" + WW.coordinatesIndex : "st",
        lW = new mW.Vector2(WW.uScale, WW.vScale),
        AW = new mW.Vector2(WW.uOffset, WW.vOffset),
        bW = WW.wAng,
        jW = Math.sin(bW),
        UW = Math.cos(bW);
      return AW.y = 1 - AW.y - lW.y, AW.x += jW * lW.x, AW.y += (1 - UW) * lW.y, `\n    def Shader "PrimvarReader_${OW}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${xW}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${OW}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${iW.uniqueId}/PrimvarReader_${OW}.outputs:result>\n        float inputs:rotation = ${(bW*(180/Math.PI)).toFixed(PW.precision)}\n        float2 inputs:scale = ${MP(lW)}\n        float2 inputs:translation = ${MP(AW)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${WW.uniqueId}_${OW}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${LW}.${ZW}@\n        float2 inputs:st.connect = </Root/Materials/Material_${iW.uniqueId}/Transform2d_${OW}.outputs:result>\n        ${EW?"float4 inputs:scale = "+function(WW){return`(${WW.r}, ${WW.g}, ${WW.b}, 1.0)`}(EW):""}\n        token inputs:sourceColorSpace = "${WW.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${sP(WW.wrapU)}"\n        token inputs:wrapT = "${sP(WW.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${iW.needAlphaBlending()||iW.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function yP(WW, iW, OW) {
      const mW = "\t\t\t",
        EW = [],
        NW = [],
        {
          diffuseMap: PW,
          diffuse: LW,
          alphaCutOff: cW,
          emissiveMap: wW,
          emissive: tW,
          normalMap: ZW,
          roughnessMap: xW,
          roughnessChannel: lW,
          roughness: AW,
          metalnessMap: bW,
          metalnessChannel: UW,
          metalness: kW,
          aoMap: sW,
          aoMapChannel: MW,
          aoMapIntensity: KW,
          alphaMap: SW,
          ior: YW,
          clearCoatEnabled: yW,
          clearCoat: TW,
          clearCoatMap: JW,
          clearCoatRoughness: hW,
          clearCoatRoughnessMap: HW
        } = function(WW) {
          const iW = {
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
          return WW instanceof Lm.StandardMaterial ? {
            ...iW,
            diffuseMap: WW.diffuseTexture,
            diffuse: WW.diffuseColor,
            alphaCutOff: WW.alphaCutOff,
            emissiveMap: WW.emissiveTexture,
            emissive: WW.emissiveColor,
            roughness: 1,
            alphaMap: WW.opacityTexture
          } : WW instanceof Si ? {
            ...iW,
            diffuseMap: WW._albedoTexture,
            diffuse: WW._albedoColor,
            alphaCutOff: WW._alphaCutOff,
            emissiveMap: WW._emissiveTexture,
            emissive: WW._emissiveColor,
            normalMap: WW._bumpTexture,
            roughnessMap: WW._metallicTexture,
            roughnessChannel: WW._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: WW._roughness ?? 1,
            metalnessMap: WW._metallicTexture,
            metalnessChannel: WW._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: WW._metallic ?? 0,
            aoMap: WW._ambientTexture,
            aoMapChannel: WW._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: WW._ambientTextureStrength,
            alphaMap: WW._opacityTexture,
            ior: WW.subSurface.indexOfRefraction,
            clearCoatEnabled: WW.clearCoat.isEnabled,
            clearCoat: WW.clearCoat.intensity,
            clearCoatMap: WW.clearCoat.texture,
            clearCoatRoughness: WW.clearCoat.roughness,
            clearCoatRoughnessMap: WW.clearCoat.useRoughnessFromMainTexture ? WW.clearCoat.texture : WW.clearCoat.textureRoughness
          } : iW
        }(WW);
      return null !== PW ? (EW.push(`${mW}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${PW.uniqueId}_diffuse.outputs:rgb>`), WW.needAlphaBlending() ? EW.push(`${mW}float inputs:opacity.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${PW.uniqueId}_diffuse.outputs:a>`) : WW.needAlphaTesting() && (EW.push(`${mW}float inputs:opacity.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${PW.uniqueId}_diffuse.outputs:a>`), EW.push(`${mW}float inputs:opacityThreshold = ${cW}`)), NW.push(YP(PW, WW, "diffuse", LW, iW, OW))) : EW.push(`${mW}color3f inputs:diffuseColor = ${KP(LW||jW.Color3.White())}`), null !== wW ? (EW.push(`${mW}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${wW.uniqueId}_emissive.outputs:rgb>`), NW.push(YP(wW, WW, "emissive", tW, iW, OW))) : tW && tW.toLuminance() > 0 && EW.push(`${mW}color3f inputs:emissiveColor = ${KP(tW)}`), null !== ZW && (EW.push(`${mW}normal3f inputs:normal.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${ZW.uniqueId}_normal.outputs:rgb>`), NW.push(YP(ZW, WW, "normal", null, iW, OW))), null !== sW && (EW.push(`${mW}float inputs:occlusion.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${sW.uniqueId}_occlusion.outputs:${MW}>`), NW.push(YP(sW, WW, "occlusion", new jW.Color3(KW, KW, KW), iW, OW))), null !== xW ? (EW.push(`${mW}float inputs:roughness.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${xW.uniqueId}_roughness.outputs:${lW}>`), NW.push(YP(xW, WW, "roughness", new jW.Color3(AW, AW, AW), iW, OW))) : EW.push(`${mW}float inputs:roughness = ${AW}`), null !== bW ? (EW.push(`${mW}float inputs:metallic.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${bW.uniqueId}_metallic.outputs:${UW}>`), NW.push(YP(bW, WW, "metallic", new jW.Color3(kW, kW, kW), iW, OW))) : EW.push(`${mW}float inputs:metallic = ${kW}`), null !== SW ? (EW.push(`${mW}float inputs:opacity.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${SW.uniqueId}_opacity.outputs:r>`), EW.push(`${mW}float inputs:opacityThreshold = 0.0001`), NW.push(YP(SW, WW, "opacity", null, iW, OW))) : EW.push(`${mW}float inputs:opacity = ${WW.alpha}`), yW && (null !== JW ? (EW.push(`${mW}float inputs:clearcoat.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${JW.uniqueId}_clearcoat.outputs:r>`), NW.push(YP(JW, WW, "clearcoat", new jW.Color3(TW, TW, TW), iW, OW))) : EW.push(`${mW}float inputs:clearcoat = ${TW}`), null !== HW ? (EW.push(`${mW}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${WW.uniqueId}/Texture_${HW.uniqueId}_clearcoatRoughness.outputs:g>`), NW.push(YP(HW, WW, "clearcoatRoughness", new jW.Color3(hW, hW, hW), iW, OW))) : EW.push(`${mW}float inputs:clearcoatRoughness = ${hW}`)), EW.push(`${mW}float inputs:ior = ${YW}`), `\n\tdef Material "Material_${WW.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${EW.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${WW.uniqueId}/PreviewSurface.outputs:surface>\n\n${NW.join("\n")}\n\n\t}\n`
    }

    function TP(WW) {
      WW.computeWorldMatrix(!0);
      const iW = WW.getWorldMatrix().clone(),
        OW = WW.bD().useRightHandedSystem;
      let mW = WW.material?._getEffectiveOrientation(WW) ?? WW.sideOrientation,
        PW = !OW,
        LW = WW.parent;
      for (; LW;) {
        if (DO(LW, OW) && null === LW.parent) {
          OW || (iW.multiplyToRef(LW.getWorldMatrix().invert(), iW), mW = mW === NW.d.ClockWiseSideOrientation ? NW.d.CounterClockWiseSideOrientation : NW.d.ClockWiseSideOrientation), PW = !1;
          break
        }
        LW = LW.parent
      }
      return iW.determinant() < 0 && EW.Tools.Warn(`Mesh ${WW.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: iW,
        windingOrder: mW === NW.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: PW
      }
    }
    async function JP(WW, iW, OW) {
      const NW = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...iW
      };
      "undefined" === typeof fflate && await EW.Tools.LoadScriptAsync(NW.fflateUrl);
      const PW = {};
      PW[NW.modelFileName] = null;
      let LW = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      LW += function(WW) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===WW.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${WW.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${WW.planeAnchoringAlignment}"`:""}\n            `
      }(NW);
      const cW = {};
      for (const mW of WW.meshes) {
        if (0 === mW.getTotalVertices()) continue;
        const WW = mW,
          iW = WW.geometry,
          wW = WW.material;
        if (!wW || !iW || OW && !OW(WW)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(wW.getClassName())) {
          const OW = "geometries/Geometry_" + iW.uniqueId + ".usda",
            {
              matrix: mW,
              windingOrder: EW,
              convertToRightHanded: tW
            } = TP(WW);
          if (!(OW in PW)) {
            const WW = AP(iW, NW, EW, tW);
            PW[OW] = bP(WW)
          }
          wW.uniqueId in cW || (cW[wW.uniqueId] = wW), LW += kP(WW, mW)
        } else EW.Tools.Warn("USDZExportAsync does not support this material type: " + wW.getClassName())
      }
      WW.activeCamera && NW.exportCamera && (LW += function(WW, iW) {
        const OW = "Camera_" + WW.uniqueId,
          EW = jP(mW.Matrix.RotationY(Math.PI).multiply(WW.getWorldMatrix()));
        if (WW.mode === YW.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${OW}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${EW}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${WW.minZ.toPrecision(iW.precision)}, ${WW.maxZ.toPrecision(iW.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(WW.orthoLeft||1)+Math.abs(WW.orthoRight||1))).toPrecision(iW.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(WW.orthoTop||1)+Math.abs(WW.orthoBottom||1))).toPrecision(iW.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const mW = WW.VA().getAspectRatio(WW),
            NW = iW.cameraSensorWidth || 35;
          return `def Camera "${OW}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${EW}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${WW.minZ.toPrecision(iW.precision)}, ${WW.maxZ.toPrecision(iW.precision)})\n\t\t\tfloat focalLength = ${(NW/(2*Math.tan(.5*WW.fov))).toPrecision(iW.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(NW*mW).toPrecision(iW.precision)}\n\t\t\tfloat verticalAperture = ${(NW/mW).toPrecision(iW.precision)}            \n\t\t}\n\t\n\t`
        }
      }(WW.activeCamera, NW)), LW += "\n            }\n        }";
      const wW = {};
      LW += function(WW, iW, OW) {
        const mW = [];
        for (const EW in WW) {
          const NW = WW[EW];
          mW.push(yP(NW, iW, OW))
        }
        return `\n    def "Materials"\n{\n${mW.join("")}\n}\n\n`
      }(cW, wW, NW), LW += "\n    }", PW[NW.modelFileName] = fflate.strToU8(LW);
      for (const mW in wW) {
        const {
          texture: WW,
          ext: iW,
          mimeType: OW
        } = wW[mW], EW = await sO(WW);
        if (EW && SP(EW.mimeType) && EW.mimeType === OW) PW[`textures/Texture_${mW}.${iW}`] = new Uint8Array(EW.data);
        else {
          const EW = WW.getSize(),
            NW = await (0, MW.f)(WW),
            LW = await yW.DumpTools.DumpDataAsync(EW.width, EW.height, NW, OW, void 0, !1, !0);
          PW[`textures/Texture_${mW}.${iW}`] = new Uint8Array(LW).slice()
        }
      }
      let tW = 0;
      for (const mW in PW) {
        const WW = PW[mW];
        if (!WW) continue;
        tW += 34 + mW.length;
        const iW = 63 & tW;
        if (4 !== iW) {
          const OW = new Uint8Array(64 - iW);
          PW[mW] = [WW, {
            extra: {
              12345: OW
            }
          }]
        }
        tW = WW.length
      }
      return fflate.zipSync(PW, {
        level: 0
      })
    }
    var hP = OW(42586);
    class HP {
      static Export(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (!WW || 0 === WW.bones.length) throw new Error("Invalid or empty skeleton provided");
        let mW = iW;
        iW && 0 !== iW.length || (mW = WW.animations.map((WW => WW.name)));
        let EW = null;
        for (const wW of mW) {
          const iW = WW.getAnimationRange(wW);
          iW && (EW = EW ? new hP.c("animation-range", Math.min(EW.from, iW.from), Math.max(EW.to, iW.to)) : iW)
        }
        if (!EW && (WW.animations.length > 0 && (EW = WW.getAnimationRange(WW.animations[0].name)), !EW)) throw new Error("No animation range found in skeleton");
        const NW = OW || 1 / (WW.animations[0]?.framePerSecond || 30),
          PW = this._BuildBoneHierarchy(WW, mW);
        let LW = 0;
        for (const wW of PW) wW.positionKeys.length > 0 && (LW = Math.max(LW, wW.positionKeys.length)), wW.rotationKeys.length > 0 && (LW = Math.max(LW, wW.rotationKeys.length));
        0 === LW && (LW = Math.floor((EW.to - EW.from) / NW) + 1);
        let cW = "";
        return cW += "HIERARCHY\n", cW += this._ExportHierarchy(PW, 0), cW += "MOTION\n", cW += `Frames: ${LW}\n`, cW += `Frame Time: ${NW.toFixed(6)}\n`, cW += this._ExportMotionData(PW, LW, 0, mW), cW
      }
      static _BuildBoneHierarchy(WW, iW) {
        const OW = new Map,
          mW = [];
        for (const EW of WW.bones) {
          const WW = {
            bone: EW,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          OW.set(EW, WW)
        }
        for (const EW of WW.bones) {
          const WW = OW.get(EW);
          if (EW.animations.length > 0)
            for (const OW of EW.animations) iW.includes(OW.name) && ("position" === OW.targetProperty ? (WW.hasPositionChannels = !0, WW.positionKeys.push(...OW.getKeys())) : "rotationQuaternion" === OW.targetProperty && (WW.hasRotationChannels = !0, WW.rotationKeys.push(...OW.getKeys())));
          if (EW.getParent()) {
            const iW = OW.get(EW.getParent());
            iW && iW.children.push(WW)
          } else mW.push(WW)
        }
        return mW
      }
      static _ExportHierarchy(WW, iW) {
        let OW = "";
        const mW = "    ".repeat(iW);
        for (const EW of WW) {
          const WW = EW.bone;
          if (this._IsEndSite(EW)) {
            OW += `${mW}End Site\n`, OW += `${mW}{\n`;
            const iW = this._GetBoneOffset(WW);
            OW += `${mW}    OFFSET ${iW.x.toFixed(6)} ${iW.y.toFixed(6)} ${iW.z.toFixed(6)}\n`, OW += `${mW}}\n`
          } else {
            OW += `${0===iW?"ROOT":`${mW}JOINT`} ${WW.name}\n`, OW += `${mW}{\n`;
            const NW = this._GetBoneOffset(WW);
            OW += `${mW}    OFFSET ${NW.x.toFixed(6)} ${NW.y.toFixed(6)} ${NW.z.toFixed(6)}\n`;
            const PW = [];
            EW.hasPositionChannels && PW.push("Xposition", "Yposition", "Zposition"), EW.hasRotationChannels && PW.push("Zrotation", "Xrotation", "Yrotation"), PW.length > 0 && (OW += `${mW}    CHANNELS ${PW.length} ${PW.join(" ")}\n`), EW.children.length > 0 && (OW += this._ExportHierarchy(EW.children, iW + 1)), OW += `${mW}}\n`
          }
        }
        return OW
      }
      static _IsEndSite(WW) {
        return 0 === WW.children.length
      }
      static _GetBoneOffset(WW) {
        try {
          if (!WW.getParent()) return WW.getRestMatrix().getTranslation();
          return WW.getLocalMatrix().getTranslation()
        } catch (iW) {
          return mW.fA.Zero()
        }
      }
      static _ExportMotionData(WW, iW, OW, mW) {
        let EW = "";
        for (let NW = 0; NW < iW; NW++) {
          const iW = [];
          this._CollectFrameValues(WW, NW + OW, iW, mW), EW += iW.map((WW => WW.toFixed(6))).join(" ") + "\n"
        }
        return EW
      }
      static _CollectFrameValues(WW, iW, OW, mW) {
        for (const EW of WW)
          if (!this._IsEndSite(EW)) {
            if (EW.hasPositionChannels) {
              const WW = this._GetPositionAtFrameIndex(EW.positionKeys, iW);
              OW.push(WW.x, WW.y, WW.z)
            }
            if (EW.hasRotationChannels) {
              const WW = this._GetRotationAtFrameIndex(EW.rotationKeys, iW),
                mW = this._QuaternionToEuler(WW);
              OW.push(mW.z, mW.x, mW.y)
            }
            EW.children.length > 0 && this._CollectFrameValues(EW.children, iW, OW, mW)
          }
      }
      static _GetPositionAtFrameIndex(WW, iW) {
        if (0 === WW.length) return mW.fA.Zero();
        return WW[Math.max(0, Math.min(iW, WW.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(WW, iW) {
        if (0 === WW.length) return mW.Quaternion.Identity();
        return WW[Math.max(0, Math.min(iW, WW.length - 1))].value.clone()
      }
      static _QuaternionToEuler(WW) {
        const iW = new mW.Matrix;
        WW.toRotationMatrix(iW);
        const OW = iW.m;
        let NW, PW, LW;
        const cW = Math.sqrt(OW[0] * OW[0] + OW[1] * OW[1]);
        return cW > vO.e ? (NW = Math.atan2(OW[6], OW[10]), PW = Math.atan2(-OW[2], cW), LW = Math.atan2(OW[1], OW[0])) : (NW = Math.atan2(-OW[9], OW[5]), PW = Math.atan2(-OW[2], cW), LW = 0), new mW.fA(EW.Tools.ToDegrees(NW), EW.Tools.ToDegrees(PW), EW.Tools.ToDegrees(LW))
      }
    }

    function nP(WW) {
      return "string" === typeof WW?.name
    }
    const uP = Symbol("__xml:meta$__"),
      oP = Symbol("__xml:name$__");

    function dP(WW, iW) {
      Object.prototype.hasOwnProperty.call(WW.metadata, uP) || (WW.metadata[uP] = []), WW.metadata[uP].push(iW)
    }

    function eP(WW) {
      return (iW, OW) => {
        iW[oP] = WW
      }
    }

    function vP() {
      return (WW, iW) => dP(iW, {
        kind: "none",
        prop: String(iW.name),
        ignore: !0
      })
    }

    function gP(WW) {
      return (iW, OW) => dP(OW, {
        kind: "attr",
        prop: String(OW.name),
        ...WW
      })
    }

    function DP(WW) {
      return (iW, OW) => dP(OW, {
        kind: "elem",
        prop: String(OW.name),
        ...WW
      })
    }

    function VP(WW) {
      const iW = "function" === typeof WW ? WW : WW?.constructor,
        OW = iW?.[Symbol.metadata];
      if (!OW) return [];
      const mW = [];
      let EW = OW;
      for (; EW;) Object.prototype.hasOwnProperty.call(EW, uP) && mW.push(...EW[uP]), EW = Object.getPrototypeOf(EW);
      return mW
    }

    function pP(WW) {
      const iW = WW?.constructor?.[oP];
      return iW || void 0
    }

    function fP(WW) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(WW)
    }

    function CP(WW) {
      if (nP(WW)) return WW;
      const iW = (WW ?? "").trim();
      if (!iW) return {
        name: ""
      };
      const OW = iW.indexOf(":");
      if (-1 === OW) return {
        name: iW
      };
      if (-1 !== iW.indexOf(":", OW + 1)) return {
        name: iW
      };
      const mW = iW.slice(0, OW),
        EW = iW.slice(OW + 1);
      return fP(mW) && fP(EW) ? {
        ns: mW,
        name: EW
      } : {
        name: iW
      }
    }

    function XP(WW, iW) {
      return iW ? `${iW}:${WW}` : WW
    }
    const BP = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      qP = Object.freeze({
        number: BP
      });

    function RP(WW) {
      const iW = WW?.eps ?? BP.eps;
      return {
        eps: iW,
        maxDecimalsCap: WW?.maxDecimalsCap ?? BP.maxDecimalsCap,
        trimTrailingZeros: WW?.trimTrailingZeros ?? BP.trimTrailingZeros,
        fixedDecimals: WW?.fixedDecimals,
        allowScientific: WW?.allowScientific ?? BP.allowScientific,
        snapNearZero: WW?.snapNearZero ?? BP.snapNearZero,
        zeroThreshold: WW?.zeroThreshold ?? iW,
        perAttributeEps: WW?.perAttributeEps
      }
    }

    function GP(WW) {
      return {
        number: RP(WW?.number)
      }
    }
    class IP {
      constructor(WW) {
        if (this.o = WW, this._o = WW.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(WW) {
        if (!Number.isFinite(WW)) throw new Error(`Cannot format non-finite number: ${WW}`);
        const iW = this._o,
          OW = this._clampInt(iW.maxDecimalsCap ?? 15, 0, 20),
          mW = iW.trimTrailingZeros ?? !0,
          EW = iW.snapNearZero ?? !0,
          NW = iW.zeroThreshold ?? iW.eps,
          PW = 1 / iW.eps;
        let LW, cW = Math.round(WW * PW) / PW;
        if (Object.is(cW, -0) && (cW = 0), EW && Math.abs(cW) <= NW && (cW = 0), LW = void 0 !== iW.fixedDecimals ? this._clampInt(iW.fixedDecimals, 0, OW) : this._clampInt(Math.ceil(-Math.log10(iW.eps)), 0, OW), iW.allowScientific, 0 === LW) return String(Math.trunc(cW));
        let wW = cW.toFixed(LW);
        if (mW && void 0 === iW.fixedDecimals && (wW = wW.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(wW)) throw new Error(`Scientific notation not allowed in XML output: ${wW}`);
        return wW
      }
      _clampInt(WW, iW, OW) {
        return Number.isFinite(WW) ? (WW = Math.trunc(WW), Math.max(iW, Math.min(OW, WW))) : iW
      }
    }

    function aP(WW) {
      return WW instanceof Date
    }

    function rP(WW) {
      return "string" === typeof WW
    }

    function zP(WW) {
      return "string" === typeof WW || "number" === typeof WW || "boolean" === typeof WW || "bigint" === typeof WW || aP(WW)
    }

    function FP(WW) {
      return "number" === typeof WW || "boolean" === typeof WW || "bigint" === typeof WW || aP(WW)
    }
    class QP {
      constructor(WW, iW) {
        this._ns = new Map, this._prefixCount = 0, this._builder = WW, this._format = GP(iW), this._nFmt = new IP(this._format)
      }
      withNamespace() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        for (const mW of iW) this._assignNamespace(mW);
        return this
      }
      serialize(WW, iW) {
        if (!(iW = iW ?? pP(WW))) throw new Error("can not find name for given object");
        const OW = CP(iW);
        OW.ns && this._assignNamespace(OW.ns, "xmlns"), this._gatherNamespaces(WW, new WeakSet);
        const mW = this._builder.ele(null, OW.name);
        for (const [EW, NW] of Array.from(this._ns.entries())) mW.att("xmlns", NW, EW);
        this._writeObjectContent(mW, WW, (new WeakSet).add(WW)), this._builder.end()
      }
      _writeObject(WW, iW, OW) {
        if (OW.has(iW)) return;
        if (OW.add(iW), Array.isArray(iW)) {
          for (const mW of iW) FP(mW) || (rP(mW) ? this._builder.text(mW) : this._writeObject(WW, mW, OW));
          return
        }
        const mW = pP(iW);
        if (!mW) return;
        const EW = CP(mW),
          NW = this._getPrefix(EW),
          PW = XP(EW.name, NW);
        WW.ele(null, PW), this._writeObjectContent(WW, iW, OW), this._builder.end()
      }
      _getPrefix(WW) {
        if (WW.ns) {
          const iW = this._ns.get(WW.ns.toLowerCase());
          if ("xmlns" !== iW) return iW
        }
      }
      _writeObjectContent(WW, iW, OW) {
        const mW = VP(iW) ?? [],
          EW = new Map;
        for (const PW of mW) {
          const WW = EW.get(PW.prop) ?? [];
          WW.push(PW), EW.set(PW.prop, WW)
        }
        const NW = Object.keys(iW).sort(((WW, iW) => {
          const OW = (EW.get(WW) ?? []).some((WW => "attr" === WW.kind));
          return OW === (EW.get(iW) ?? []).some((WW => "attr" === WW.kind)) ? 0 : OW ? -1 : 1
        }));
        for (const PW of NW) {
          const mW = iW[PW];
          if (null === mW || void 0 === mW) continue;
          const NW = EW.get(PW);
          if (NW) {
            if (NW.some((WW => !0 === WW.ignore || "none" === WW.kind))) continue;
            for (const iW of NW) {
              const OW = iW.name ?? iW.prop.toLowerCase();
              if (OW) switch (iW.kind) {
                case "attr": {
                  let EW = null;
                  if ("number" === typeof mW && this._nFmt && (EW = this._nFmt.toString(mW)), iW.formatter) {
                    EW = new iW.formatter(this._format).toString(mW)
                  }
                  if (EW = EW ?? mW.toString(), EW) {
                    const iW = CP(OW),
                      mW = this._getPrefix(iW),
                      NW = XP(iW.name, mW);
                    WW.att(null, NW, EW)
                  }
                  break
                }
              }
            }
          } else FP(mW) || (rP(mW) ? this._builder.text(mW) : this._writeObject(WW, mW, OW))
        }
      }
      _gatherNamespaces(WW, iW) {
        if (iW.has(WW)) return;
        if (iW.add(WW), Array.isArray(WW)) {
          for (const OW of WW) zP(OW) || this._gatherNamespaces(OW, iW);
          return
        }
        const OW = pP(WW);
        OW && this._assignNamespace(OW);
        const mW = VP(WW) ?? [],
          EW = new Map;
        for (const PW of mW) {
          const WW = EW.get(PW.prop) ?? [];
          WW.push(PW), EW.set(PW.prop, WW)
        }
        const NW = [];
        for (const PW of Object.keys(WW)) {
          const iW = WW[PW];
          if (null === iW || void 0 === iW) continue;
          const OW = EW.get(PW);
          if (OW) {
            if (OW.some((WW => !0 === WW.ignore || "none" === WW.kind))) continue;
            for (const WW of OW) WW.name && this._assignNamespace(WW.name)
          }
          NW.push(iW)
        }
        for (const PW of NW) zP(PW) || this._gatherNamespaces(PW, iW)
      }
      _assignNamespace(WW, iW) {
        const OW = CP(WW);
        if (OW?.ns) {
          const WW = OW.ns.toLowerCase();
          this._ns.get(WW) || this._ns.set(WW, iW ?? this._buildNsPrefix(WW))
        } else if ("xmlns" === iW) {
          const WW = OW.name.toLowerCase();
          this._ns.get(WW) || this._ns.set(WW, iW ?? this._buildNsPrefix(WW))
        }
      }
      _buildNsPrefix(WW) {
        let iW, OW = !1;
        do {
          iW = "ns" + this._prefixCount++;
          for (const WW of Array.from(this._ns.values()))
            if (WW === iW) {
              OW = !0;
              break
            }
        } while (OW);
        return iW
      }
    }
    class WL {}
    var iL;
    WL.OpenTag = "<", WL.CloseTag = ">", WL.Slash = "/", WL.Question = "?", WL.Quote = '"', WL.Equal = "=", WL.Space = " ", WL.Semicolon = ":", WL.Dec = "<?xml", WL.Xml = "xml", WL.Xmlns = "xmlns", WL.Xsi = "xsi", WL.VersionKeyword = "version", WL.EncodingKeyword = "encoding", WL.StandaloneKeyword = "standalone",
      function(WW) {
        WW[WW.Declaration = 0] = "Declaration", WW[WW.Tag = 1] = "Tag", WW[WW.Attribute = 2] = "Attribute", WW[WW.Text = 3] = "Text"
      }(iL || (iL = {}));
    class OL {
      constructor(WW) {
        this._ctxStack = [], this._d = 0, this._w = WW
      }
      dec(WW, iW, OW) {
        return this._w.write(WL.Dec), this._writeAttStr(WL.VersionKeyword, WW), iW && this._writeAttStr(WL.EncodingKeyword, iW), void 0 !== OW && this._writeAttStr(WL.StandaloneKeyword, OW ? "yes" : "no"), this._w.write(WL.Question, WL.CloseTag), this
      }
      att(WW, iW, OW) {
        const mW = this._peekContext();
        if (!mW) throw new Error("att() without open element");
        if (mW.closed) throw new Error(`att() after start tag closed for <${mW.name}>`);
        if (this._isXmlnsDecl(WW, iW)) {
          if (iW === WL.Xmlns) mW.defaultNs = OW, this._registerNamespace(mW, "", OW), this._writeAttStr(WL.Xmlns, OW);
          else if (WW) this._registerNamespace(mW, iW, OW), this._writeAttStr(`${WW}:${iW}`, OW);
          else {
            const WW = iW.slice(6);
            this._registerNamespace(mW, WW, OW), this._writeAttStr(iW, OW)
          }
          return mW.lastToken = iL.Attribute, this
        }
        let EW = iW;
        if (WW) {
          EW = `${this._ensurePrefixDeclared(mW,WW)}:${iW}`
        }
        return mW.lastToken = iL.Attribute, this._writeAttStr(EW, OW), this
      }
      ele(WW, iW) {
        const OW = this._peekContext();
        OW && this._closeOpenTagIfNeeded(OW);
        let mW = iW;
        if (WW) {
          mW = `${this._lookupPrefix(WW)??WW}:${iW}`
        }
        return this._pushContext(mW, ++this._d), this._w.write(WL.OpenTag, mW), this
      }
      text(WW) {
        const iW = this._peekContext();
        if (!iW) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(iW), iW.lastToken = iL.Text, this._w.write(this._escText(WW)), this
      }
      end() {
        const WW = this._popContext();
        return WW && (this._d--, WW.closed ? this._w.write(WL.OpenTag, WL.Slash, WW.name, WL.CloseTag) : this._w.write(WL.Slash, WL.CloseTag)), this
      }
      _pushContext(WW, iW) {
        const OW = new OL.Context(WW, iW);
        return this._ctxStack.push(OW), OW
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
      _writeAttStr(WW, iW) {
        this._w.write(WL.Space, WW, WL.Equal, WL.Quote, this._escAttr(iW), WL.Quote)
      }
      _lookupPrefix(WW) {
        let iW = this._ctxStack.length - 1;
        if (iW >= 0)
          do {
            const OW = this._ctxStack[iW--],
              mW = OW.ns2prefix?.get(WW);
            if (mW) return mW
          } while (iW >= 0)
      }
      _escText(WW) {
        return WW.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(WW) {
        return this._escText(WW).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(WW, iW) {
        if (WW) return WW === WL.Xmlns;
        const OW = iW.length,
          mW = WL.Xmlns.length;
        return OW >= mW && (iW.startsWith(WL.Xmlns) && (iW.length == mW || iW[mW] == WL.Semicolon))
      }
      _registerNamespace(WW, iW, OW) {
        if (iW === WL.Xml || iW === WL.Xmlns) throw new Error(`reserved prefix '${iW}'`);
        const mW = WW.prefix2ns.get(iW);
        if (mW && mW !== OW) throw new Error(`prefix '${iW}' already bound to a different namespace`);
        WW.ns2prefix.get(OW) || WW.ns2prefix.set(OW, iW), WW.prefix2ns.set(iW, OW)
      }
      _allocPrefix(WW) {
        let iW = 1;
        for (;;) {
          const OW = "ns" + iW++;
          if (!WW.prefix2ns.has(OW)) return OW
        }
      }
      _ensurePrefixDeclared(WW, iW) {
        const OW = this._lookupPrefix(iW);
        if (OW) return OW;
        if (WW.closed) throw new Error(`can not declare namespace after start tag closed for <${WW.name}>`);
        const mW = this._allocPrefix(WW);
        return this._writeAttStr(`${WL.Xmlns}:${mW}`, iW), this._registerNamespace(WW, mW, iW), mW
      }
      _closeOpenTagIfNeeded(WW) {
        WW.closed || (this._w.write(WL.CloseTag), WW.closed = !0)
      }
    }
    OL.Context = class {
      constructor(WW, iW) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = WW, this.depth = iW
      }
    };
    class mL {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        if (0 === iW.length) return this;
        const mW = iW.join("");
        return this._chunks.push(mW), this.count += mW.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class EL {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = WW, this._opts = iW, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        if (0 === iW.length) return this;
        const mW = iW.join("");
        if (0 === mW.length) return this;
        this._pending += mW, this._pendingChars += mW.length;
        const EW = this._opts.flushChars ?? 65536;
        return this._pendingChars >= EW && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const WW = this._encoder.encode(this._pending);
        return this._sink.push(WW), this.count += WW.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const NL = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      PL = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var LL, cL;
    ! function(WW) {
      WW.micron = "micron", WW.millimeter = "millimeter", WW.centimeter = "centimeter", WW.inch = "inch", WW.foot = "foot", WW.meter = "meter"
    }(LL || (LL = {})),
    function(WW) {
      WW.model = "model", WW.solidsupport = "solidsupport", WW.support = "support", WW.surface = "surface", WW.other = "other"
    }(cL || (cL = {}));
    const wL = "http://schemas.openxmlformats.org/package/2006/content-types",
      tL = "http://schemas.openxmlformats.org/package/2006/relationships";
    var ZL;
    ! function(WW) {
      WW.Relationships = "application/vnd.openxmlformats-package.relationships+xml", WW.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", WW.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", WW.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", WW.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", WW.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", WW.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", WW.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", WW.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", WW.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", WW.Png = "image/png", WW.Jpeg = "image/jpeg", WW.Tiff = "image/tiff", WW.Xml = "application/xml"
    }(ZL || (ZL = {}));
    const xL = "_rels/",
      lL = "3D/",
      AL = "3dmodel.model",
      bL = ".rels",
      jL = "[Content_Types].xml";
    class UL {
      static IsKnown(WW) {
        return UL.Known.has(WW)
      }
      static IsThreeDimModel(WW) {
        return WW === UL.ThreeDimModel
      }
    }
    UL.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", UL.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", UL.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", UL.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", UL.Known = new Set([UL.ThreeDimModel, UL.Thumbnail, UL.PrintTicket, UL.MustPreserve]);
    let kL = (() => {
        let WW, iW, OW = [eP({
            ns: wL,
            name: "Types"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.items = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfContentTypes"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      sL = (() => {
        let WW, iW, OW, mW, EW = [eP({
            ns: wL,
            name: "Default"
          })],
          NW = [],
          PW = [],
          LW = [],
          cW = [],
          wW = [];
        iW = class {
          constructor(WW, iW) {
            this.ext = (0, TW.g)(this, PW, void 0), this.ct = ((0, TW.g)(this, LW), (0, TW.g)(this, cW, void 0)), (0, TW.g)(this, wW), this.ext = WW, this.ct = iW
          }
        };
        return (0, TW.k)(iW, "ThreeMfContentType"), (() => {
          const tW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: {
              ns: wL,
              name: "Extension"
            }
          })], mW = [gP({
            name: {
              ns: wL,
              name: "ContentType"
            }
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: WW => "ext" in WW,
              get: WW => WW.ext,
              set: (WW, iW) => {
                WW.ext = iW
              }
            },
            metadata: tW
          }, PW, LW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: WW => "ct" in WW,
              get: WW => WW.ct,
              set: (WW, iW) => {
                WW.ct = iW
              }
            },
            metadata: tW
          }, cW, wW), (0, TW.e)(null, WW = {
            value: iW
          }, EW, {
            kind: "class",
            name: iW.name,
            metadata: tW
          }, null, NW), iW = WW.value, tW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tW
          }), (0, TW.g)(iW, NW)
        })(), iW
      })(),
      ML = (() => {
        let WW, iW, OW = [eP({
            ns: tL,
            name: "Relationships"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.items = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfRelationships"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      KL = (() => {
        let WW, iW, OW, mW, EW, NW = [eP({
            ns: tL,
            name: "Relationship"
          })],
          PW = [],
          LW = [],
          cW = [],
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        iW = class {
          constructor(WW, iW, OW) {
            this.id = (0, TW.g)(this, LW, void 0), this.type = ((0, TW.g)(this, cW), (0, TW.g)(this, wW, void 0)), this.target = ((0, TW.g)(this, tW), (0, TW.g)(this, ZW, void 0)), (0, TW.g)(this, xW), this.id = WW, this.type = iW, this.target = OW
          }
        };
        return (0, TW.k)(iW, "ThreeMfRelationship"), (() => {
          const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "Id"
          })], mW = [gP({
            name: "Type"
          })], EW = [gP({
            name: "Target"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: WW => "id" in WW,
              get: WW => WW.id,
              set: (WW, iW) => {
                WW.id = iW
              }
            },
            metadata: lW
          }, LW, cW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: WW => "type" in WW,
              get: WW => WW.type,
              set: (WW, iW) => {
                WW.type = iW
              }
            },
            metadata: lW
          }, wW, tW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: WW => "target" in WW,
              get: WW => WW.target,
              set: (WW, iW) => {
                WW.target = iW
              }
            },
            metadata: lW
          }, ZW, xW), (0, TW.e)(null, WW = {
            value: iW
          }, NW, {
            kind: "class",
            name: iW.name,
            metadata: lW
          }, null, PW), iW = WW.value, lW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lW
          }), (0, TW.g)(iW, PW)
        })(), iW
      })();
    class SL {
      constructor(WW, iW, OW) {
        this.contentTypes = WW, this.relationships = iW, this.model = OW
      }
    }
    class YL {
      static Zero() {
        return new YL([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(WW) {
        this.values = WW
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class yL {
      constructor(WW) {
        this.o = WW, this._f = new IP(WW)
      }
      toString(WW) {
        return WW.values.map((WW => this._f.toString(WW))).join(" ")
      }
    }
    let TL = (() => {
        let WW, iW, OW, mW, EW, NW = [eP({
            ns: NL,
            name: "model"
          })],
          PW = [],
          LW = [],
          cW = [],
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        iW = class {
          constructor() {
            this.unit = (0, TW.g)(this, LW, LL.millimeter), this.requiredextensions = ((0, TW.g)(this, cW), (0, TW.g)(this, wW, void 0)), this.recommendedextensions = ((0, TW.g)(this, tW), (0, TW.g)(this, ZW, void 0)), this.metadata = (0, TW.g)(this, xW)
          }
        };
        return (0, TW.k)(iW, "ThreeMfModel"), (() => {
          const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "unit"
          })], mW = [gP({
            name: "requiredextensions"
          })], EW = [gP({
            name: "recommendedextensions"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: WW => "unit" in WW,
              get: WW => WW.unit,
              set: (WW, iW) => {
                WW.unit = iW
              }
            },
            metadata: lW
          }, LW, cW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: WW => "requiredextensions" in WW,
              get: WW => WW.requiredextensions,
              set: (WW, iW) => {
                WW.requiredextensions = iW
              }
            },
            metadata: lW
          }, wW, tW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: WW => "recommendedextensions" in WW,
              get: WW => WW.recommendedextensions,
              set: (WW, iW) => {
                WW.recommendedextensions = iW
              }
            },
            metadata: lW
          }, ZW, xW), (0, TW.e)(null, WW = {
            value: iW
          }, NW, {
            kind: "class",
            name: iW.name,
            metadata: lW
          }, null, PW), iW = WW.value, lW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lW
          })
        })(), iW.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, TW.g)(iW, PW), iW
      })(),
      JL = (() => {
        let WW, iW, OW, mW, EW, NW = [eP({
            ns: NL,
            name: "meta"
          })],
          PW = [],
          LW = [],
          cW = [],
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        iW = class {
          constructor(WW, iW, OW, mW) {
            this.name = (0, TW.g)(this, LW, void 0), this.preserve = ((0, TW.g)(this, cW), (0, TW.g)(this, wW, void 0)), this.type = ((0, TW.g)(this, tW), (0, TW.g)(this, ZW, void 0)), this.value = (0, TW.g)(this, xW), this.name = WW, this.value = iW, this.preserve = OW, this.type = mW
          }
        };
        return (0, TW.k)(iW, "ThreeMfMeta"), (() => {
          const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "name"
          })], mW = [gP({
            name: "preserve"
          })], EW = [gP({
            name: "type"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, iW) => {
                WW.name = iW
              }
            },
            metadata: lW
          }, LW, cW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: WW => "preserve" in WW,
              get: WW => WW.preserve,
              set: (WW, iW) => {
                WW.preserve = iW
              }
            },
            metadata: lW
          }, wW, tW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: WW => "type" in WW,
              get: WW => WW.type,
              set: (WW, iW) => {
                WW.type = iW
              }
            },
            metadata: lW
          }, ZW, xW), (0, TW.e)(null, WW = {
            value: iW
          }, NW, {
            kind: "class",
            name: iW.name,
            metadata: lW
          }, null, PW), iW = WW.value, lW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lW
          }), (0, TW.g)(iW, PW)
        })(), iW
      })(),
      hL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "metadatagroup"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfMetadataGroup"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      HL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "resources"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.object = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfResources"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      nL = (() => {
        let WW, iW, OW, mW, EW, NW, PW, LW, cW, wW = [eP({
            ns: NL,
            name: "object"
          })],
          tW = [],
          ZW = [],
          xW = [],
          lW = [],
          AW = [],
          bW = [],
          jW = [],
          UW = [],
          kW = [],
          sW = [],
          MW = [],
          KW = [],
          SW = [],
          YW = [],
          yW = [];
        iW = class {
          constructor(WW) {
            let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cL.model;
            this.id = (0, TW.g)(this, ZW, void 0), this.type = ((0, TW.g)(this, xW), (0, TW.g)(this, lW, void 0)), this.thumbnail = ((0, TW.g)(this, AW), (0, TW.g)(this, bW, void 0)), this.partnumber = ((0, TW.g)(this, jW), (0, TW.g)(this, UW, void 0)), this.name = ((0, TW.g)(this, kW), (0, TW.g)(this, sW, void 0)), this.pid = ((0, TW.g)(this, MW), (0, TW.g)(this, KW, void 0)), this.pindex = ((0, TW.g)(this, SW), (0, TW.g)(this, YW, void 0)), this.metadatagroup = (0, TW.g)(this, yW), this.id = WW, this.type = iW
          }
        };
        return (0, TW.k)(iW, "ThreeMfObject"), (() => {
          const JW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "id"
          })], mW = [gP({
            name: "type"
          })], EW = [gP({
            name: "thumbnail"
          })], NW = [gP({
            name: "partnumber"
          })], PW = [gP({
            name: "name"
          })], LW = [gP({
            name: "pid"
          })], cW = [gP({
            name: "pindex"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: WW => "id" in WW,
              get: WW => WW.id,
              set: (WW, iW) => {
                WW.id = iW
              }
            },
            metadata: JW
          }, ZW, xW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: WW => "type" in WW,
              get: WW => WW.type,
              set: (WW, iW) => {
                WW.type = iW
              }
            },
            metadata: JW
          }, lW, AW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: WW => "thumbnail" in WW,
              get: WW => WW.thumbnail,
              set: (WW, iW) => {
                WW.thumbnail = iW
              }
            },
            metadata: JW
          }, bW, jW), (0, TW.e)(null, null, NW, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: WW => "partnumber" in WW,
              get: WW => WW.partnumber,
              set: (WW, iW) => {
                WW.partnumber = iW
              }
            },
            metadata: JW
          }, UW, kW), (0, TW.e)(null, null, PW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, iW) => {
                WW.name = iW
              }
            },
            metadata: JW
          }, sW, MW), (0, TW.e)(null, null, LW, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: WW => "pid" in WW,
              get: WW => WW.pid,
              set: (WW, iW) => {
                WW.pid = iW
              }
            },
            metadata: JW
          }, KW, SW), (0, TW.e)(null, null, cW, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: WW => "pindex" in WW,
              get: WW => WW.pindex,
              set: (WW, iW) => {
                WW.pindex = iW
              }
            },
            metadata: JW
          }, YW, yW), (0, TW.e)(null, WW = {
            value: iW
          }, wW, {
            kind: "class",
            name: iW.name,
            metadata: JW
          }, null, tW), iW = WW.value, JW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JW
          }), (0, TW.g)(iW, tW)
        })(), iW
      })(),
      uL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "mesh"
          })],
          mW = [];
        iW = class {
          constructor(WW, iW) {
            this.vertices = WW ?? new oL, this.triangles = iW ?? new eL
          }
        };
        return (0, TW.k)(iW, "ThreeMfMesh"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      oL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "vertices"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfVertices"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      dL = (() => {
        let WW, iW, OW, mW, EW, NW = [eP({
            ns: NL,
            name: "vertex"
          })],
          PW = [],
          LW = [],
          cW = [],
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        iW = class {
          constructor() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, TW.g)(this, LW, void 0), this.y = ((0, TW.g)(this, cW), (0, TW.g)(this, wW, void 0)), this.z = ((0, TW.g)(this, tW), (0, TW.g)(this, ZW, void 0)), (0, TW.g)(this, xW), this.x = WW, this.y = iW, this.z = OW
          }
        };
        return (0, TW.k)(iW, "ThreeMfVertex"), (() => {
          const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "x"
          })], mW = [gP({
            name: "y"
          })], EW = [gP({
            name: "z"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: WW => "x" in WW,
              get: WW => WW.x,
              set: (WW, iW) => {
                WW.x = iW
              }
            },
            metadata: lW
          }, LW, cW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: WW => "y" in WW,
              get: WW => WW.y,
              set: (WW, iW) => {
                WW.y = iW
              }
            },
            metadata: lW
          }, wW, tW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: WW => "z" in WW,
              get: WW => WW.z,
              set: (WW, iW) => {
                WW.z = iW
              }
            },
            metadata: lW
          }, ZW, xW), (0, TW.e)(null, WW = {
            value: iW
          }, NW, {
            kind: "class",
            name: iW.name,
            metadata: lW
          }, null, PW), iW = WW.value, lW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lW
          }), (0, TW.g)(iW, PW)
        })(), iW
      })(),
      eL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "triangles"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfTriangles"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      vL = (() => {
        let WW, iW, OW, mW, EW, NW, PW, LW, cW, wW = [eP({
            ns: NL,
            name: "triangle"
          })],
          tW = [],
          ZW = [],
          xW = [],
          lW = [],
          AW = [],
          bW = [],
          jW = [],
          UW = [],
          kW = [],
          sW = [],
          MW = [],
          KW = [],
          SW = [],
          YW = [],
          yW = [];
        iW = class {
          constructor(WW, iW, OW) {
            this.v1 = (0, TW.g)(this, ZW, void 0), this.v2 = ((0, TW.g)(this, xW), (0, TW.g)(this, lW, void 0)), this.v3 = ((0, TW.g)(this, AW), (0, TW.g)(this, bW, void 0)), this.p1 = ((0, TW.g)(this, jW), (0, TW.g)(this, UW, void 0)), this.p2 = ((0, TW.g)(this, kW), (0, TW.g)(this, sW, void 0)), this.p3 = ((0, TW.g)(this, MW), (0, TW.g)(this, KW, void 0)), this.pid = ((0, TW.g)(this, SW), (0, TW.g)(this, YW, void 0)), (0, TW.g)(this, yW), this.v1 = WW, this.v2 = iW, this.v3 = OW
          }
        };
        return (0, TW.k)(iW, "ThreeMfTriangle"), (() => {
          const JW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "v1"
          })], mW = [gP({
            name: "v2"
          })], EW = [gP({
            name: "v3"
          })], NW = [gP({
            name: "p1"
          })], PW = [gP({
            name: "p2"
          })], LW = [gP({
            name: "p3"
          })], cW = [gP({
            name: "pid"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: WW => "v1" in WW,
              get: WW => WW.v1,
              set: (WW, iW) => {
                WW.v1 = iW
              }
            },
            metadata: JW
          }, ZW, xW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: WW => "v2" in WW,
              get: WW => WW.v2,
              set: (WW, iW) => {
                WW.v2 = iW
              }
            },
            metadata: JW
          }, lW, AW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: WW => "v3" in WW,
              get: WW => WW.v3,
              set: (WW, iW) => {
                WW.v3 = iW
              }
            },
            metadata: JW
          }, bW, jW), (0, TW.e)(null, null, NW, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: WW => "p1" in WW,
              get: WW => WW.p1,
              set: (WW, iW) => {
                WW.p1 = iW
              }
            },
            metadata: JW
          }, UW, kW), (0, TW.e)(null, null, PW, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: WW => "p2" in WW,
              get: WW => WW.p2,
              set: (WW, iW) => {
                WW.p2 = iW
              }
            },
            metadata: JW
          }, sW, MW), (0, TW.e)(null, null, LW, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: WW => "p3" in WW,
              get: WW => WW.p3,
              set: (WW, iW) => {
                WW.p3 = iW
              }
            },
            metadata: JW
          }, KW, SW), (0, TW.e)(null, null, cW, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: WW => "pid" in WW,
              get: WW => WW.pid,
              set: (WW, iW) => {
                WW.pid = iW
              }
            },
            metadata: JW
          }, YW, yW), (0, TW.e)(null, WW = {
            value: iW
          }, wW, {
            kind: "class",
            name: iW.name,
            metadata: JW
          }, null, tW), iW = WW.value, JW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JW
          }), (0, TW.g)(iW, tW)
        })(), iW
      })(),
      gL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "components"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.component = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfComponents"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      DL = (() => {
        let WW, iW, OW, mW, EW = [eP({
            ns: NL,
            name: "component"
          })],
          NW = [],
          PW = [],
          LW = [],
          cW = [],
          wW = [];
        iW = class {
          constructor(WW, iW) {
            this.objectid = (0, TW.g)(this, PW, void 0), this.transform = ((0, TW.g)(this, LW), (0, TW.g)(this, cW, void 0)), (0, TW.g)(this, wW), this.objectid = WW, this.transform = iW
          }
        };
        return (0, TW.k)(iW, "ThreeMfComponent"), (() => {
          const tW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "objectid"
          })], mW = [gP({
            name: "transform",
            formatter: yL
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: WW => "objectid" in WW,
              get: WW => WW.objectid,
              set: (WW, iW) => {
                WW.objectid = iW
              }
            },
            metadata: tW
          }, PW, LW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: WW => "transform" in WW,
              get: WW => WW.transform,
              set: (WW, iW) => {
                WW.transform = iW
              }
            },
            metadata: tW
          }, cW, wW), (0, TW.e)(null, WW = {
            value: iW
          }, EW, {
            kind: "class",
            name: iW.name,
            metadata: tW
          }, null, NW), iW = WW.value, tW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tW
          }), (0, TW.g)(iW, NW)
        })(), iW
      })(),
      VL = (() => {
        let WW, iW, OW, mW = [eP({
            ns: NL,
            name: "basematerials"
          })],
          EW = [],
          NW = [],
          PW = [];
        iW = class {
          constructor(WW) {
            this.id = (0, TW.g)(this, NW, void 0), this.base = ((0, TW.g)(this, PW), []), this.id = WW
          }
        };
        return (0, TW.k)(iW, "ThreeMfBaseMaterials"), (() => {
          const LW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "id"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: WW => "id" in WW,
              get: WW => WW.id,
              set: (WW, iW) => {
                WW.id = iW
              }
            },
            metadata: LW
          }, NW, PW), (0, TW.e)(null, WW = {
            value: iW
          }, mW, {
            kind: "class",
            name: iW.name,
            metadata: LW
          }, null, EW), iW = WW.value, LW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LW
          }), (0, TW.g)(iW, EW)
        })(), iW
      })(),
      pL = (() => {
        let WW, iW, OW, mW, EW = [eP({
            ns: NL,
            name: "base"
          })],
          NW = [],
          PW = [],
          LW = [],
          cW = [],
          wW = [];
        iW = class {
          constructor(WW, iW) {
            this.name = (0, TW.g)(this, PW, void 0), this.displaycolor = ((0, TW.g)(this, LW), (0, TW.g)(this, cW, void 0)), (0, TW.g)(this, wW), this.name = WW, this.displaycolor = iW
          }
        };
        return (0, TW.k)(iW, "ThreeMfBase"), (() => {
          const tW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "name"
          })], mW = [gP({
            name: "displaycolor"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, iW) => {
                WW.name = iW
              }
            },
            metadata: tW
          }, PW, LW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: WW => "displaycolor" in WW,
              get: WW => WW.displaycolor,
              set: (WW, iW) => {
                WW.displaycolor = iW
              }
            },
            metadata: tW
          }, cW, wW), (0, TW.e)(null, WW = {
            value: iW
          }, EW, {
            kind: "class",
            name: iW.name,
            metadata: tW
          }, null, NW), iW = WW.value, tW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tW
          }), (0, TW.g)(iW, NW)
        })(), iW
      })(),
      fL = (() => {
        let WW, iW, OW = [eP({
            ns: NL,
            name: "build"
          })],
          mW = [];
        iW = class {
          constructor() {
            this.item = []
          }
        };
        return (0, TW.k)(iW, "ThreeMfBuild"), (() => {
          const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, TW.e)(null, WW = {
            value: iW
          }, OW, {
            kind: "class",
            name: iW.name,
            metadata: EW
          }, null, mW), iW = WW.value, EW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EW
          }), (0, TW.g)(iW, mW)
        })(), iW
      })(),
      CL = (() => {
        let WW, iW, OW, mW, EW, NW = [eP({
            ns: NL,
            name: "item"
          })],
          PW = [],
          LW = [],
          cW = [],
          wW = [],
          tW = [],
          ZW = [],
          xW = [];
        iW = class {
          constructor(WW, iW, OW) {
            this.objectid = (0, TW.g)(this, LW, void 0), this.transform = ((0, TW.g)(this, cW), (0, TW.g)(this, wW, void 0)), this.partnumber = ((0, TW.g)(this, tW), (0, TW.g)(this, ZW, void 0)), this.metadatagroup = (0, TW.g)(this, xW), this.objectid = WW, this.transform = iW, this.partnumber = OW
          }
        };
        return (0, TW.k)(iW, "ThreeMfItem"), (() => {
          const lW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OW = [gP({
            name: "objectid"
          })], mW = [gP({
            name: "transform",
            formatter: yL
          })], EW = [gP({
            name: "partnumber"
          })], (0, TW.e)(null, null, OW, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: WW => "objectid" in WW,
              get: WW => WW.objectid,
              set: (WW, iW) => {
                WW.objectid = iW
              }
            },
            metadata: lW
          }, LW, cW), (0, TW.e)(null, null, mW, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: WW => "transform" in WW,
              get: WW => WW.transform,
              set: (WW, iW) => {
                WW.transform = iW
              }
            },
            metadata: lW
          }, wW, tW), (0, TW.e)(null, null, EW, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: WW => "partnumber" in WW,
              get: WW => WW.partnumber,
              set: (WW, iW) => {
                WW.partnumber = iW
              }
            },
            metadata: lW
          }, ZW, xW), (0, TW.e)(null, WW = {
            value: iW
          }, NW, {
            kind: "class",
            name: iW.name,
            metadata: lW
          }, null, PW), iW = WW.value, lW && Object.defineProperty(iW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lW
          }), (0, TW.g)(iW, PW)
        })(), iW
      })();
    class XL {
      constructor(WW, iW) {
        this._object = new nL(WW, iW)
      }
      withName(WW) {
        return this._object.name = WW, this
      }
      withThumbnail(WW) {
        return this._object.thumbnail = WW, this
      }
      withProperty(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = WW, this._object.id = iW, this
      }
      build() {
        return this._object
      }
      reset(WW, iW) {
        this._object = new nL(WW, iW)
      }
    }
    class BL extends XL {
      constructor(WW) {
        super(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cL.model), this._object.content = new gL
      }
      withComponent(WW, iW) {
        return this._object.content.component.push(new DL(WW, iW)), this
      }
    }
    class qL extends XL {
      constructor(WW) {
        super(WW, cL.model)
      }
      withPostProcessHandlers(WW, iW) {
        return this._vh = WW, this._th = iW, this
      }
      withData(WW) {
        return this._object.content = this._buildMesh(WW), this
      }
      withMaterial(WW, iW) {
        return this._object.pid = WW, this._object.pindex = iW, this
      }
      _buildMesh(WW) {
        const iW = this._buildVertices(WW.positions),
          OW = this._buildTriangle(WW.indices);
        return new uL(iW, OW)
      }
      _buildVertices(WW) {
        const iW = new oL;
        if (WW)
          for (let OW = 0; OW < WW.length;) {
            const mW = WW[OW++],
              EW = WW[OW++],
              NW = WW[OW++];
            let PW = new dL(mW, EW, NW);
            this._vh && (PW = this._vh(PW)), iW.vertex.push(PW)
          }
        return iW
      }
      _buildTriangle(WW) {
        const iW = new eL;
        if (WW)
          for (let OW = 0; OW < WW.length;) {
            const mW = WW[OW++],
              EW = WW[OW++],
              NW = WW[OW++];
            let PW = new vL(mW, EW, NW);
            this._th && (PW = this._th(PW)), iW.triangle.push(PW)
          }
        return iW
      }
    }
    class RL {
      constructor(WW) {
        this._m = new VL(WW)
      }
      withColor(WW, iW) {
        this._m.base = this._m.base ?? [];
        let OW = this._m.base.find((iW => iW.name.toLowerCase() === WW.toLowerCase()));
        return OW ? (OW.displaycolor = this._rgbaToHex(iW), this) : (OW = new pL(WW, this._rgbaToHex(iW)), this._m.base.push(OW), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(WW) {
        const iW = WW => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(WW, 1 / 2.2)))),
          OW = iW(WW.r).toString(16).padStart(2, "0").toUpperCase(),
          mW = iW(WW.g).toString(16).padStart(2, "0").toUpperCase(),
          EW = iW(WW.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof WW.a) {
          return `#${OW}${mW}${EW}${Math.round(Math.min(255,Math.max(0,255*WW.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${OW}${mW}${EW}`
      }
    }
    class GL {
      constructor() {
        this._model = new TL, this._objects = new Map
      }
      withMetaData(WW, iW, OW, mW) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new JL(WW, iW, OW, mW)), this
      }
      withMaterial(WW) {
        return WW instanceof RL && (WW = WW.build()), WW && (this._model.resources = this._model.resources ?? new HL, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(WW)), this
      }
      withMesh(WW) {
        return WW instanceof qL && (WW = WW.build()), this._model.resources = this._model.resources ?? new HL, this._model.resources.object.push(WW), this
      }
      withComponents(WW) {
        return WW instanceof BL && (WW = WW.build()), this._model.resources = this._model.resources ?? new HL, this._model.resources.object.push(WW), this
      }
      withBuild(WW, iW, OW) {
        return this._model.build = this._model.build ?? new fL, this._model.build.item?.push(new CL(WW, iW, OW)), this
      }
      withUnit(WW) {
        return this._model.unit = WW, this
      }
      reset() {
        return this._model = new TL, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    GL.KnownMetaSet = new Set(TL.KnownMeta.map((WW => WW.toLowerCase())));
    class IL {
      withContentType(WW) {
        this._cts || (this._cts = new kL);
        const iW = this._cts.items;
        return iW.some((iW => iW.ext === WW.ext && iW.ct === WW.ct)) || iW.push(WW), this
      }
      withRelationship(WW) {
        this._rs || (this._rs = new ML);
        const iW = this._rs.items;
        return iW.some((iW => iW.id === WW.id)) || iW.push(WW), this.withContentType(new sL("rels", ZL.Relationships)), this
      }
      withModel(WW) {
        return WW instanceof GL && (WW = WW.build()), this._m = WW, this.withContentType(new sL("model", ZL.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const WW = `${lL}${AL}`;
        if (!this._rs) {
          const iW = `/${WW}`;
          this.withRelationship(new KL("rel0", UL.ThreeDimModel, iW))
        }
        return new SL(this._cts, this._rs, this._m)
      }
    }
    class aL {
      constructor(WW) {
        this._o = WW
      }
      get options() {
        return this._o
      }
      async serializeAsync(WW) {
        const iW = await this.ensureZipLibReadyAsync();
        if (!iW) return;
        const OW = iW.Zip,
          mW = iW.ZipDeflate;
        if (!OW || !mW) throw new Error("fflate Zip / ZipDeflate not available");
        const EW = function(WW, iW, OW) {
          const EW = new mW(iW, {
            level: 6
          });
          WW.add(EW);
          const NW = function(WW) {
              return {
                push: (iW, OW) => WW.push(iW, OW)
              }
            }(EW),
            PW = new EL(NW),
            LW = new OL(PW).dec("1.0", "UTF-8");
          new QP(LW).serialize(OW), PW.finish()
        };
        for (var NW = arguments.length, PW = new Array(NW > 1 ? NW - 1 : 0), LW = 1; LW < NW; LW++) PW[LW - 1] = arguments[LW];
        const cW = this.toDocument(...PW);
        if (!cW) return;
        const wW = new OW(WW);
        EW(wW, jL, cW.contentTypes), EW(wW, `${xL}${bL}`, cW.relationships), EW(wW, `${lL}${AL}`, cW.model), wW.end()
      }
      toDocument() {
        const WW = (new GL).withUnit(this._o?.unit ?? LL.millimeter);
        if (this.options.metadata)
          for (const EW in this.options.metadata) WW.withMetaData(EW, this.options.metadata[EW]);
        for (var iW = arguments.length, OW = new Array(iW), mW = 0; mW < iW; mW++) OW[mW] = arguments[mW];
        return (new IL).withModel(this.toModel(WW, ...OW)).build()
      }
    }
    class rL {
      static async SerializeToMemoryAsync(WW) {
        const iW = new Array;
        let OW = 0;
        for (var mW = arguments.length, EW = new Array(mW > 1 ? mW - 1 : 0), NW = 1; NW < mW; NW++) EW[NW - 1] = arguments[NW];
        if (await WW.serializeAsync((function(WW, mW, EW) {
            iW.push(mW), OW += mW.length
          }), ...EW), !OW) return;
        const PW = new Uint8Array(OW);
        let LW = 0;
        for (const cW of iW) PW.set(cW, LW), LW += cW.length;
        return PW
      }
    }
    class zL {}
    zL.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class FL {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = WW, this._to = iW, this._step = OW, this._i = WW
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const WW = this._i;
        return this._i += this._step, WW
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class QL extends aL {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...QL.DefaultOptions,
          ...WW
        })
      }
      toModel(WW) {
        for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
        OW = OW.filter((WW => WW instanceof Zm.e || WW instanceof lW.d));
        const EW = new FL,
          NW = WW,
          PW = new Map,
          LW = this.options.exportInstances ? [] : null;
        for (let cW = 0; cW < OW.length; cW++) {
          const WW = OW[cW];
          if (WW instanceof lW.d) {
            LW?.push(WW);
            continue
          }
          const iW = WW.name || `mesh${cW}`,
            mW = WW.getWorldMatrix(),
            wW = this._handleBabylonTo3mfMatrixTransformToRef(mW, YL.Zero()),
            tW = WW.hY;
          if (void 0 === tW) continue;
          const ZW = 1 == tW.length;
          for (let OW = 0; OW < tW.length; OW++) {
            const mW = tW[OW],
              LW = this._extractSubMesh(WW, mW);
            if (LW) {
              const WW = ZW ? `${iW}` : `${iW}_${OW}`,
                cW = new qL(EW.next()).withData(LW).withName(WW).build();
              NW.withMesh(cW), NW.withBuild(cW.id, wW), PW.set(mW, cW)
            }
          }
        }
        if (LW && LW.length) {
          const WW = this._groupBy(LW, (WW => WW.WNW));
          for (const [iW, OW] of Array.from(WW.entries()))
            if (OW && OW.length)
              for (let WW = 0; WW < OW.length; WW++) {
                const mW = OW[WW].getWorldMatrix(),
                  EW = iW.hY;
                for (let WW = 0; WW < EW.length; WW++) {
                  const iW = EW[WW],
                    OW = PW.get(iW);
                  OW && NW.withBuild(OW.id, this._handleBabylonTo3mfMatrixTransformToRef(mW, YL.Zero()))
                }
              }
        }
        return NW.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const WW = globalThis;
          return WW.fflate || await EW.Tools.LoadScriptAsync(zL.FFLATEUrl), WW.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(WW, iW) {
        const OW = WW.IEW();
        if (!OW) return;
        const mW = WW.getVerticesData(QL._PositionKind);
        if (!mW) return;
        if (0 == iW.indexStart && iW.indexCount == OW.length) return {
          positions: mW,
          indices: OW
        };
        const EW = iW.indexStart,
          NW = new Map,
          PW = [],
          LW = new Uint32Array(iW.indexCount);
        for (let cW = 0; cW < iW.indexCount; cW++) {
          const WW = OW[EW + cW];
          let iW = NW.get(WW);
          if (void 0 === iW) {
            iW = NW.size, NW.set(WW, iW);
            const OW = 3 * WW;
            PW.push(mW[OW], mW[OW + 1], mW[OW + 2])
          }
          LW[cW] = iW
        }
        return {
          positions: new Float32Array(PW),
          indices: LW
        }
      }
      _groupBy(WW, iW) {
        const OW = new Map;
        for (const mW of WW) {
          const WW = iW(mW),
            EW = OW.get(WW);
          EW ? EW.push(mW) : OW.set(WW, [mW])
        }
        return OW
      }
      _handleBabylonTo3mfMatrixTransformToRef(WW, iW) {
        const OW = WW.multiplyToRef(QL._R_BJS_TO_3MF, VW.d.Zero()).m;
        return iW.values = [OW[0], OW[1], OW[2], OW[4], OW[5], OW[6], OW[8], OW[9], OW[10], OW[12], OW[13], OW[14]], iW
      }
    }
    QL.DefaultOptions = {
      unit: LL.meter,
      exportInstances: !1
    }, QL._PositionKind = "position", QL._R_BJS_TO_3MF = VW.d.RotationX(Math.PI / 2).multiply(VW.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);