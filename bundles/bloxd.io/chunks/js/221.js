export const id = 221;
export const ids = [221, 225];
export const modules = {
  40643: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => WT
    });
    var iT = IT(40597),
      zT = IT(38758);
    let kT = !1;

    function WT() {
      kT || (kT = !0, zT.e.prototype._sphericalPolynomialTargetSize = 0, zT.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(zT.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = iT.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((TT => {
              this._texture._sphericalPolynomial = TT, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(TT) {
          this._texture && (this._texture._sphericalPolynomial = TT)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36175: (TT, oT, IT) => {
    IT.d(oT, {
      Color3: () => iT.e,
      b: () => iT.i
    });
    var iT = IT(36177);
    (0, iT.j)()
  },
  36710: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36717);
    class zT {
      static GetPlanes(TT) {
        const oT = [];
        for (let IT = 0; IT < 6; IT++) oT.push(new iT.b(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, oT), oT
      }
      static GetNearPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[2], oT.normal.y = IT[7] + IT[6], oT.normal.z = IT[11] + IT[10], oT.d = IT[15] + IT[14], oT.normalize()
      }
      static GetFarPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[2], oT.normal.y = IT[7] - IT[6], oT.normal.z = IT[11] - IT[10], oT.d = IT[15] - IT[14], oT.normalize()
      }
      static GetLeftPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[0], oT.normal.y = IT[7] + IT[4], oT.normal.z = IT[11] + IT[8], oT.d = IT[15] + IT[12], oT.normalize()
      }
      static GetRightPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[0], oT.normal.y = IT[7] - IT[4], oT.normal.z = IT[11] - IT[8], oT.d = IT[15] - IT[12], oT.normalize()
      }
      static GetTopPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[1], oT.normal.y = IT[7] - IT[5], oT.normal.z = IT[11] - IT[9], oT.d = IT[15] - IT[13], oT.normalize()
      }
      static GetBottomPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[1], oT.normal.y = IT[7] + IT[5], oT.normal.z = IT[11] + IT[9], oT.d = IT[15] + IT[13], oT.normalize()
      }
      static GetPlanesToRef(TT, oT) {
        zT.GetNearPlaneToRef(TT, oT[0]), zT.GetFarPlaneToRef(TT, oT[1]), zT.GetLeftPlaneToRef(TT, oT[2]), zT.GetRightPlaneToRef(TT, oT[3]), zT.GetTopPlaneToRef(TT, oT[4]), zT.GetBottomPlaneToRef(TT, oT[5])
      }
      static IsPointInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; IT++)
          if (oT[IT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  36717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36118);
    class zT {
      constructor(TT, oT, IT, zT) {
        this.normal = new iT.m(TT, oT, IT), this.d = zT
      }
      bIT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let oT = 0;
        return 0 !== TT && (oT = 1 / TT), this.normal.x *= oT, this.normal.y *= oT, this.normal.z *= oT, this.d *= oT, this
      }
      transform(TT) {
        const oT = zT._TmpMatrix;
        TT.invertToRef(oT);
        const IT = oT.m,
          iT = this.normal.x,
          kT = this.normal.y,
          WT = this.normal.z,
          XT = this.d,
          BT = iT * IT[0] + kT * IT[1] + WT * IT[2] + XT * IT[3],
          FT = iT * IT[4] + kT * IT[5] + WT * IT[6] + XT * IT[7],
          ST = iT * IT[8] + kT * IT[9] + WT * IT[10] + XT * IT[11],
          DT = iT * IT[12] + kT * IT[13] + WT * IT[14] + XT * IT[15];
        return new zT(BT, FT, ST, DT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, oT, IT) {
        const iT = oT.x - TT.x,
          zT = oT.y - TT.y,
          kT = oT.z - TT.z,
          WT = IT.x - TT.x,
          XT = IT.y - TT.y,
          BT = IT.z - TT.z,
          FT = zT * BT - kT * XT,
          ST = kT * WT - iT * BT,
          DT = iT * XT - zT * WT,
          LT = Math.sqrt(FT * FT + ST * ST + DT * DT);
        let xT;
        return xT = 0 !== LT ? 1 / LT : 0, this.normal.x = FT * xT, this.normal.y = ST * xT, this.normal.z = DT * xT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, oT) {
        return iT.m.Dot(this.normal, TT) <= oT
      }
      signedDistanceTo(TT) {
        return iT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, oT, IT) {
        const iT = new zT(0, 0, 0, 0);
        return iT.copyFromPoints(TT, oT, IT), iT
      }
      static FromPositionAndNormal(TT, oT) {
        const IT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, oT, IT)
      }
      static FromPositionAndNormalToRef(TT, oT, IT) {
        return IT.normal.SIT(oT), IT.normal.normalize(), IT.d = -TT.dot(IT.normal), IT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, oT, IT) {
        const zT = -(oT.x * TT.x + oT.y * TT.y + oT.z * TT.z);
        return iT.m.Dot(IT, oT) + zT
      }
    }
    zT._TmpMatrix = iT.b.Identity()
  },
  36114: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      Matrix: () => iT.b,
      Quaternion: () => iT.c,
      RegisterMathVector: () => iT.g,
      TmpVectors: () => iT.i,
      Vector2: () => iT.j,
      sc: () => iT.m,
      Vector4: () => iT.n
    });
    var iT = IT(36118);
    (0, iT.g)()
  },
  37105: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT
    });
    class iT {
      constructor(TT, oT, IT, iT) {
        this.x = TT, this.y = oT, this.width = IT, this.height = iT
      }
      toGlobal(TT, oT) {
        return new iT(this.x * TT, this.y * oT, this.width * TT, this.height * oT)
      }
      toGlobalToRef(TT, oT, IT) {
        return IT.x = this.x * TT, IT.y = this.y * oT, IT.width = this.width * TT, IT.height = this.height * oT, this
      }
      clone() {
        return new iT(this.x, this.y, this.width, this.height)
      }
    }
  },
  40597: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => FT
    });
    var iT = IT(36118),
      zT = IT(36156),
      kT = IT(38752),
      WT = IT(36125),
      XT = IT(36177);
    class BT {
      constructor(TT, oT, IT, iT) {
        this.name = TT, this.worldAxisForNormal = oT, this.worldAxisForFileX = IT, this.worldAxisForFileY = iT
      }
    }
    class FT {
      static _NearestPow2Floor(TT) {
        return TT <= 1 ? 1 : 1 << Math.floor(Math.log2(TT))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(TT) {
        if (!TT.isCube) return null;
        TT.pC()?.Zc().flushFramebuffer();
        const oT = TT.getSize().width,
          IT = TT._sphericalPolynomialTargetSize,
          iT = IT > 0 ? this._NearestPow2Floor(IT) : 0,
          zT = !TT.noMipmap && !0 === TT._texture?.generateMipMaps,
          kT = iT > 0 && iT < oT && zT,
          WT = kT ? Math.max(0, Math.round(Math.log2(oT / iT))) : 0,
          XT = kT ? Math.max(1, Math.floor(oT / Math.pow(2, WT))) : oT,
          BT = TT.readPixels(0, WT, void 0, !1),
          FT = TT.readPixels(1, WT, void 0, !1);
        let ST, DT;
        TT.isRenderTarget ? (ST = TT.readPixels(3, WT, void 0, !1), DT = TT.readPixels(2, WT, void 0, !1)) : (ST = TT.readPixels(2, WT, void 0, !1), DT = TT.readPixels(3, WT, void 0, !1));
        const LT = TT.readPixels(4, WT, void 0, !1),
          xT = TT.readPixels(5, WT, void 0, !1),
          cT = TT.gammaSpace,
          KT = iT > 0 && iT < oT && !kT;
        return new Promise((TT => {
          Promise.all([FT, BT, ST, DT, LT, xT]).then((IT => {
            let [zT, kT, WT, BT, FT, ST] = IT, DT = XT;
            if (KT) {
              const TT = 4;
              zT = this._DownsampleFace(zT, oT, iT, TT), kT = this._DownsampleFace(kT, oT, iT, TT), WT = this._DownsampleFace(WT, oT, iT, TT), BT = this._DownsampleFace(BT, oT, iT, TT), FT = this._DownsampleFace(FT, oT, iT, TT), ST = this._DownsampleFace(ST, oT, iT, TT), DT = iT
            }
            const LT = {
              size: DT,
              right: kT,
              left: zT,
              up: WT,
              down: BT,
              front: FT,
              back: ST,
              format: 5,
              type: zT instanceof Float32Array ? 1 : 0,
              gammaSpace: cT
            };
            TT(this.ConvertCubeMapToSphericalPolynomial(LT))
          }))
        }))
      }
      static _AreaElement(TT, oT) {
        return Math.atan2(TT * oT, Math.sqrt(TT * TT + oT * oT + 1))
      }
      static _DownsampleFace(TT, oT, IT, iT) {
        const zT = TT instanceof Float32Array ? TT : Float32Array.from(TT),
          kT = IT * IT * iT,
          WT = new Float32Array(kT),
          XT = oT / IT,
          BT = 1 / (XT * XT);
        for (let ST = 0; ST < IT; ST++) {
          const TT = Math.floor(ST * XT),
            kT = Math.floor((ST + 1) * XT);
          for (let FT = 0; FT < IT; FT++) {
            const DT = Math.floor(FT * XT),
              LT = Math.floor((FT + 1) * XT),
              xT = (ST * IT + FT) * iT;
            for (let IT = 0; IT < iT; IT++) {
              let XT = 0;
              for (let WT = TT; WT < kT; WT++)
                for (let TT = DT; TT < LT; TT++) XT += zT[(WT * oT + TT) * iT + IT];
              WT[xT + IT] = XT * BT
            }
          }
        }
        if (TT instanceof Float32Array) return WT;
        const FT = new(0, TT.constructor)(kT);
        for (let ST = 0; ST < kT; ST++) FT[ST] = WT[ST] + .5 | 0;
        return FT
      }
      static ConvertCubeMapToSphericalPolynomial(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = oT > 0 ? this._NearestPow2Floor(oT) : 0;
        if (IT > 0 && TT.size > IT) {
          const oT = 5 === TT.format ? 4 : 3,
            iT = ["right", "left", "up", "down", "front", "back"],
            zT = {};
          for (const kT of iT) zT[kT] = this._DownsampleFace(TT[kT], TT.size, IT, oT);
          TT = {
            ...TT,
            ...zT,
            size: IT
          }
        }
        const iT = new kT.b;
        let BT = 0;
        const FT = 2 / TT.size,
          ST = FT,
          DT = .5 * FT,
          LT = DT - 1;
        for (let kT = 0; kT < 6; kT++) {
          const oT = this._FileFaces[kT],
            IT = TT[oT.name];
          let xT = LT;
          const cT = 5 === TT.format ? 4 : 3;
          for (let kT = 0; kT < TT.size; kT++) {
            let KT = LT;
            for (let ST = 0; ST < TT.size; ST++) {
              const LT = oT.worldAxisForFileX.scale(KT).add(oT.worldAxisForFileY.scale(xT)).add(oT.worldAxisForNormal);
              LT.normalize();
              const MT = this._AreaElement(KT - DT, xT - DT) - this._AreaElement(KT - DT, xT + DT) - this._AreaElement(KT + DT, xT - DT) + this._AreaElement(KT + DT, xT + DT);
              let rT = IT[kT * TT.size * cT + ST * cT + 0],
                AT = IT[kT * TT.size * cT + ST * cT + 1],
                gT = IT[kT * TT.size * cT + ST * cT + 2];
              isNaN(rT) && (rT = 0), isNaN(AT) && (AT = 0), isNaN(gT) && (gT = 0), 0 === TT.type && (rT /= 255, AT /= 255, gT /= 255), TT.gammaSpace && (rT = Math.pow((0, zT.Clamp)(rT), WT.l), AT = Math.pow((0, zT.Clamp)(AT), WT.l), gT = Math.pow((0, zT.Clamp)(gT), WT.l));
              const hT = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const TT = Math.max(rT, AT, gT);
                if (TT > hT) {
                  const oT = hT / TT;
                  rT *= oT, AT *= oT, gT *= oT
                }
              } else rT = (0, zT.Clamp)(rT, 0, hT), AT = (0, zT.Clamp)(AT, 0, hT), gT = (0, zT.Clamp)(gT, 0, hT);
              const wT = new XT.e(rT, AT, gT);
              iT.addLight(LT, wT, MT), BT += MT, KT += FT
            }
            xT += ST
          }
        }
        const xT = 6 * (4 * Math.PI) / 6 / BT;
        return iT.scaleInPlace(xT), iT.convertIncidentRadianceToIrradiance(), iT.convertIrradianceToLambertianRadiance(), kT.c.FromHarmonics(iT)
      }
    }
    FT._FileFaces = [new BT("right", new iT.m(1, 0, 0), new iT.m(0, 0, -1), new iT.m(0, -1, 0)), new BT("left", new iT.m(-1, 0, 0), new iT.m(0, 0, 1), new iT.m(0, -1, 0)), new BT("up", new iT.m(0, 1, 0), new iT.m(1, 0, 0), new iT.m(0, 0, 1)), new BT("down", new iT.m(0, -1, 0), new iT.m(1, 0, 0), new iT.m(0, 0, -1)), new BT("front", new iT.m(0, 0, 1), new iT.m(1, 0, 0), new iT.m(0, -1, 0)), new BT("back", new iT.m(0, 0, -1), new iT.m(-1, 0, 0), new iT.m(0, -1, 0))], FT.MAX_HDRI_VALUE = 4096, FT.PRESERVE_CLAMPED_COLORS = !1
  },
  40366: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.i,
      h: () => iT.r
    });
    var iT = IT(38827);
    (0, iT.v)()
  },
  36851: (TT, oT, IT) => {
    function iT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const oT = 16 * Math.random() | 0;
        return ("x" === TT ? oT : 3 & oT | 8).toString(16)
      }))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  40629: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => kT
    });
    var iT = IT(40618),
      zT = IT(40631);
    class kT {
      static ExpandRGBDTexture(TT) {
        const oT = TT._texture;
        if (!oT || !TT.isRGBD) return;
        const zT = oT.Zc(),
          kT = zT.getCaps(),
          WT = oT.isReady;
        let XT = !1;
        kT.textureHalfFloatRender && kT.textureHalfFloatLinearFiltering ? (XT = !0, oT.type = 2) : kT.textureFloatRender && kT.textureFloatLinearFiltering && (XT = !0, oT.type = 1), XT && (oT.isReady = !1, oT._isRGBD = !1, oT.invertY = !1);
        const BT = async () => {
          const kT = zT.isWebGPU,
            WT = kT ? 1 : 0;
          oT.isReady = !1, kT ? await IT.e(332).then((() => IT(60246))) : await IT.e(314).then((() => IT(60251)));
          const XT = new iT.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, zT, !1, void 0, oT.type, void 0, null, !1, void 0, WT);
          XT.externalTextureSamplerBinding = !0;
          const BT = zT.createRenderTargetTexture(oT.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: oT.samplingMode,
            type: oT.type,
            format: 5
          });
          XT.onEffectCreatedObservable.addOnce((IT => {
            IT.executeWhenCompiled((() => {
              XT.onApply = TT => {
                TT._bindTexture("textureSampler", oT), TT.setFloat2("scale", 1, 1)
              }, TT.pC()?.postProcessManager.directRender([XT], BT, !0), zT.restoreDefaultFramebuffer(), zT._releaseTexture(oT), XT && XT.dispose(), BT._swapAndDie(oT), oT.isReady = !0
            }))
          }))
        };
        XT && (WT ? BT() : TT.onLoadObservable.addOnce(BT))
      }
      static async EncodeTextureToRGBD(TT, oT) {
        let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return oT.Zc().isWebGPU ? await IT.e(333).then((() => IT(60271))) : await IT.e(315).then((() => IT(60264))), await (0, zT.b)("rgbdEncode", TT, oT, iT, 1, 5)
      }
    }
  },
  59995: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AsyncLoop: () => iT.d,
      RegisterTools: () => iT.e,
      Tools: () => iT.i,
      className: () => iT.k
    });
    var iT = IT(38886);
    (0, iT.e)()
  },
  40663: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => zT
    });
    class iT {
      constructor(TT) {
        this._pendingActions = new Array, this._workerInfos = TT.map((TT => ({
          workerPromise: Promise.resolve(TT),
          idle: !0
        })))
      }
      dispose() {
        for (const TT of this._workerInfos) TT.workerPromise.then((TT => {
          TT.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(TT) {
        this._executeOnIdleWorker(TT) || this._pendingActions.push(TT)
      }
      _executeOnIdleWorker(TT) {
        for (const oT of this._workerInfos)
          if (oT.idle) return this._execute(oT, TT), !0;
        return !1
      }
      _execute(TT, oT) {
        TT.idle = !1, TT.workerPromise.then((IT => {
          oT(IT, (() => {
            const oT = this._pendingActions.shift();
            oT ? this._execute(TT, oT) : TT.idle = !0
          }))
        }))
      }
    }
    class zT extends iT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zT.DefaultOptions;
        super([]), this._maxWorkers = TT, this._createWorkerAsync = oT, this._options = IT
      }
      push(TT) {
        if (!this._executeOnIdleWorker(TT))
          if (this._workerInfos.length < this._maxWorkers) {
            const oT = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(oT), this._execute(oT, TT)
          } else this._pendingActions.push(TT)
      }
      _execute(TT, oT) {
        TT.timeoutId && (clearTimeout(TT.timeoutId), delete TT.timeoutId), super._execute(TT, ((IT, iT) => {
          oT(IT, (() => {
            iT(), TT.idle && (TT.timeoutId = setTimeout((() => {
              TT.workerPromise.then((TT => {
                TT.terminate()
              }));
              const oT = this._workerInfos.indexOf(TT); - 1 !== oT && this._workerInfos.splice(oT, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    zT.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60029: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AbstractThreeMfSerializer: () => PX,
      BVHExporter: () => jW,
      ContentTypeFileName: () => AX,
      DefaultXmlSerializerFormatOptions: () => pW,
      DefaultXmlSerializerNumberOptions: () => GW,
      EXT_lights_area: () => hz,
      EXT_mesh_gpu_instancing: () => Zi,
      EXT_texture_avif: () => FW,
      EXT_texture_webp: () => kW,
      GLTF2Export: () => Hi,
      GLTFData: () => FT,
      GetXmlFieldMeta: () => qW,
      GetXmlName: () => ZW,
      IsQualifiedName: () => JW,
      KHR_draco_mesh_compression: () => oz,
      KHR_interactivity: () => xz,
      KHR_lights_punctual: () => Fz,
      KHR_materials_anisotropy: () => Rz,
      KHR_materials_clearcoat: () => Cz,
      KHR_materials_coat: () => Qz,
      KHR_materials_diffuse_roughness: () => Zk,
      KHR_materials_diffuse_transmission: () => lz,
      KHR_materials_dispersion: () => pz,
      KHR_materials_emissive_strength: () => Pz,
      KHR_materials_fuzz: () => Kk,
      KHR_materials_ior: () => Ik,
      KHR_materials_iridescence: () => Wk,
      KHR_materials_openpbr: () => Gk,
      KHR_materials_sheen: () => Sk,
      KHR_materials_specular: () => gk,
      KHR_materials_transmission: () => ek,
      KHR_materials_unlit: () => fk,
      KHR_materials_volume: () => Uk,
      KHR_materials_volume_scatter: () => Ok,
      KHR_texture_basisu: () => oW,
      KHR_texture_transform: () => Nk,
      Known3mfRelationshipTypes: () => gX,
      KnownI3mfContentType: () => xX,
      Matrix3d: () => uX,
      MatrixFormatter: () => vX,
      ModelFileName: () => MX,
      NumberFormatter: () => NW,
      OBJExport: () => WT,
      Object3dDirName: () => KX,
      OpenXmlContentTypesNamespace: () => DX,
      OpenXmlRelationshipsNamespace: () => LX,
      RegisterEXT_lights_area: () => mz,
      RegisterEXT_mesh_gpu_instancing: () => si,
      RegisterEXT_texture_avif: () => DW,
      RegisterEXT_texture_webp: () => XW,
      RegisterKHR_draco_mesh_compression: () => iz,
      RegisterKHR_interactivity: () => Kz,
      RegisterKHR_lights_punctual: () => Dz,
      RegisterKHR_materials_anisotropy: () => vz,
      RegisterKHR_materials_clearcoat: () => Jz,
      RegisterKHR_materials_coat: () => Hz,
      RegisterKHR_materials_diffuse_roughness: () => sk,
      RegisterKHR_materials_diffuse_transmission: () => tz,
      RegisterKHR_materials_dispersion: () => yz,
      RegisterKHR_materials_emissive_strength: () => Vz,
      RegisterKHR_materials_fuzz: () => rk,
      RegisterKHR_materials_ior: () => zk,
      RegisterKHR_materials_iridescence: () => Bk,
      RegisterKHR_materials_openpbr: () => bk,
      RegisterKHR_materials_sheen: () => Lk,
      RegisterKHR_materials_specular: () => wk,
      RegisterKHR_materials_transmission: () => uk,
      RegisterKHR_materials_unlit: () => jk,
      RegisterKHR_materials_volume: () => Yk,
      RegisterKHR_materials_volume_scatter: () => nk,
      RegisterKHR_texture_basisu: () => iW,
      RegisterKHR_texture_transform: () => dk,
      RelationshipDirName: () => cX,
      RelationshipFileName: () => rX,
      ResolveFormatOptions: () => yW,
      ResolveNumberOptions: () => bW,
      STLExport: () => LW,
      ST_ObjectType: () => SX,
      ST_Unit: () => FX,
      StringXmlWriter: () => kX,
      ThreeDimModelNamespace: () => XX,
      ThreeMf: () => dX,
      ThreeMfBase: () => ZX,
      ThreeMfBaseMaterials: () => qX,
      ThreeMfBuild: () => lX,
      ThreeMfComponent: () => nX,
      ThreeMfComponents: () => HX,
      ThreeMfComponentsBuilder: () => GX,
      ThreeMfContentType: () => wX,
      ThreeMfContentTypes: () => hX,
      ThreeMfDocument: () => RX,
      ThreeMfDocumentBuilder: () => NX,
      ThreeMfItem: () => sX,
      ThreeMfMaterialBuilder: () => bX,
      ThreeMfMesh: () => UX,
      ThreeMfMeshBuilder: () => pX,
      ThreeMfMeta: () => fX,
      ThreeMfMetadataGroup: () => CX,
      ThreeMfModel: () => EX,
      ThreeMfModelBuilder: () => yX,
      ThreeMfObject: () => JX,
      ThreeMfObjectBuilder: () => tX,
      ThreeMfRelationship: () => eX,
      ThreeMfRelationships: () => mX,
      ThreeMfResources: () => jX,
      ThreeMfSerializer: () => oB,
      ThreeMfSerializerGlobalConfiguration: () => VX,
      ThreeMfTriangle: () => OX,
      ThreeMfTriangles: () => QX,
      ThreeMfVertex: () => YX,
      ThreeMfVertices: () => aX,
      ToQualifiedString: () => tW,
      TokenType: () => iX,
      TriangleSetsNamespace: () => BX,
      USDZExportAsync: () => fW,
      Utf8XmlWriterToBytes: () => WX,
      XmlAttr: () => HW,
      XmlBuilder: () => zX,
      XmlElem: () => nW,
      XmlIgnore: () => OW,
      XmlName: () => QW,
      XmlNameToParts: () => sW,
      XmlSerializer: () => oX,
      _ConvertToGLTFPBRMetallicRoughness: () => EI,
      _SolveMetallic: () => vI,
      __IGLTFExporterExtension: () => XT
    });
    var iT = IT(36114),
      zT = IT(59995),
      kT = IT(39068);
    class WT {
      static OBJ(TT, oT, IT, WT) {
        const XT = [];
        let BT = 1,
          FT = 1;
        oT && (IT || (IT = "mat"), XT.push("mtllib " + IT + ".mtl"));
        for (let ST = 0; ST < TT.length; ST++) {
          const IT = TT[ST],
            DT = IT.name || `mesh${ST}}`;
          XT.push(`o ${DT}`);
          let LT = null;
          if (WT) {
            const TT = IT.computeWorldMatrix(!0);
            LT = new iT.Matrix, TT.invertToRef(LT), IT.bakeTransformIntoVertices(TT)
          }
          if (oT) {
            const TT = IT.material;
            TT && XT.push("usemtl " + TT.id)
          }
          const xT = IT.geometry;
          if (!xT) {
            zT.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const cT = xT.getVerticesData("position"),
            KT = xT.getVerticesData("normal"),
            MT = xT.getVerticesData("uv"),
            rT = xT.hWT();
          let AT = 0,
            gT = 0;
          if (!cT || !rT) {
            zT.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const hT = TT[0].pC().useRightHandedSystem ? 1 : -1;
          for (let TT = 0; TT < cT.length; TT += 3) XT.push("v " + cT[TT] * hT + " " + cT[TT + 1] + " " + cT[TT + 2]), AT++;
          if (null != KT)
            for (let TT = 0; TT < KT.length; TT += 3) XT.push("vn " + KT[TT] * hT + " " + KT[TT + 1] + " " + KT[TT + 2]);
          if (null != MT)
            for (let TT = 0; TT < MT.length; TT += 2) XT.push("vt " + MT[TT] + " " + MT[TT + 1]), gT++;
          const wT = ["", "", ""],
            mT = (IT.material || IT.pC().defaultMaterial)._getEffectiveOrientation(IT),
            [eT, RT] = mT === kT.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let TT = 0; TT < rT.length; TT += 3) {
            const oT = [String(rT[TT] + BT), String(rT[TT + eT] + BT), String(rT[TT + RT] + BT)],
              IT = [String(rT[TT] + FT), String(rT[TT + eT] + FT), String(rT[TT + RT] + FT)],
              iT = oT,
              zT = null != MT ? IT : wT,
              kT = null != KT ? oT : wT;
            XT.push("f " + iT[0] + "/" + zT[0] + "/" + kT[0] + " " + iT[1] + "/" + zT[1] + "/" + kT[1] + " " + iT[2] + "/" + zT[2] + "/" + kT[2])
          }
          WT && LT && IT.bakeTransformIntoVertices(LT), BT += AT, FT += gT
        }
        return XT.join("\n")
      }
      static MTL(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const IT = [],
          iT = TT.material;
        IT.push("newmtl " + oT), IT.push("  Ns " + iT.specularPower.toFixed(4)), IT.push("  Ni 1.5000"), IT.push("  d " + iT.alpha.toFixed(4)), IT.push("  Tr 0.0000"), IT.push("  Tf 1.0000 1.0000 1.0000"), IT.push("  illum 2"), IT.push("  Ka " + iT.ambientColor.r.toFixed(4) + " " + iT.ambientColor.g.toFixed(4) + " " + iT.ambientColor.b.toFixed(4)), IT.push("  Kd " + iT.diffuseColor.r.toFixed(4) + " " + iT.diffuseColor.g.toFixed(4) + " " + iT.diffuseColor.b.toFixed(4)), IT.push("  Ks " + iT.specularColor.r.toFixed(4) + " " + iT.specularColor.g.toFixed(4) + " " + iT.specularColor.b.toFixed(4)), IT.push("  Ke " + iT.emissiveColor.r.toFixed(4) + " " + iT.emissiveColor.g.toFixed(4) + " " + iT.emissiveColor.b.toFixed(4));
        iT.ambientTexture && IT.push("  map_Ka " + iT.ambientTexture.name), iT.diffuseTexture && IT.push("  map_Kd " + iT.diffuseTexture.name), iT.specularTexture && IT.push("  map_Ks " + iT.specularTexture.name), iT.bumpTexture && IT.push("  map_bump -imfchan z " + iT.bumpTexture.name), iT.opacityTexture && IT.push("  map_d " + iT.opacityTexture.name);
        return IT.join("\n")
      }
    }
    var XT = 0,
      BT = IT(40366);
    class FT {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const TT in this.files) {
          const oT = this.files[TT],
            IT = new Blob([oT], {
              type: (0, BT.d)(TT)
            });
          zT.Tools.Download(IT, TT)
        }
      }
    }
    var ST = IT(40072),
      DT = IT(40023),
      LT = IT(40451),
      xT = IT(40029),
      cT = IT(38589),
      KT = IT(36146),
      MT = IT(36175),
      rT = IT(36156);
    const AT = rT.HighestCommonFactor,
      gT = {
        ...rT,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: AT
      };
    var hT = IT(40631),
      wT = IT(40055),
      mT = IT(40411),
      eT = IT(40413),
      RT = IT(40639);
    (0, RT.RegisterDumpTools)();
    var uT = IT(38764),
      vT = IT(38773),
      ET = IT(37660),
      fT = IT(38897),
      CT = IT(39270),
      jT = IT(40629);
    let JT = 0;
    const UT = (TT, oT, IT, iT) => {
        if (!TT[IT]) {
          const zT = TT.useDelayedTextureLoading;
          TT.useDelayedTextureLoading = !1;
          const kT = TT._blockEntityCollection;
          TT._blockEntityCollection = !1;
          const WT = CT.g.CreateFromBase64String(oT, iT + JT++, TT, !0, !1, CT.g.BILINEAR_SAMPLINGMODE);
          TT._blockEntityCollection = kT;
          const XT = TT.Zc().getLoadedTexturesCache(),
            BT = XT.indexOf(WT.getInternalTexture()); - 1 !== BT && XT.splice(BT, 1), WT.isRGBD = !0, WT.wrapU = CT.g.CLAMP_ADDRESSMODE, WT.wrapV = CT.g.CLAMP_ADDRESSMODE, TT[IT] = WT, TT.useDelayedTextureLoading = zT, jT.e.ExpandRGBDTexture(WT);
          const FT = TT.Zc().onContextRestoredObservable.add((() => {
            WT.isRGBD = !0;
            const oT = TT.onBeforeRenderObservable.add((() => {
              WT.isReady() && (TT.onBeforeRenderObservable.remove(oT), jT.e.ExpandRGBDTexture(WT))
            }))
          }));
          TT.bC.add((() => {
            TT.Zc().onContextRestoredObservable.remove(FT)
          }))
        }
        return TT[IT]
      },
      aT = TT => UT(TT, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      YT = TT => UT(TT, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      QT = TT => UT(TT, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var OT = IT(38882),
      HT = IT(36118),
      nT = IT(38923),
      qT = IT(39063),
      ZT = IT(39149);
    class lT extends qT.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let sT = (() => {
      var TT, oT, IT, iT, zT, kT, WT, XT, BT, FT;
      let ST, DT, LT, xT, cT, KT, MT, rT, AT, gT = ZT.b,
        hT = [],
        wT = [],
        mT = [],
        eT = [],
        RT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [];
      return TT = class extends gT {
        get useEnergyConservation() {
          return (0, uT.b)(this, oT, "f")
        }
        set useEnergyConservation(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, uT.b)(this, IT, "f")
        }
        set useSmithVisibilityHeightCorrelated(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get useSphericalHarmonics() {
          return (0, uT.b)(this, iT, "f")
        }
        set useSphericalHarmonics(TT) {
          (0, uT.e)(this, iT, TT, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, uT.b)(this, zT, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(TT) {
          (0, uT.e)(this, zT, TT, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, uT.b)(this, kT, "f")
        }
        set mixIblRadianceWithIrradiance(TT) {
          (0, uT.e)(this, kT, TT, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, uT.b)(this, WT, "f")
        }
        set useLegacySpecularEnergyConservation(TT) {
          (0, uT.e)(this, WT, TT, "f")
        }
        get baseDiffuseModel() {
          return (0, uT.b)(this, XT, "f")
        }
        set baseDiffuseModel(TT) {
          (0, uT.e)(this, XT, TT, "f")
        }
        get dielectricSpecularModel() {
          return (0, uT.b)(this, BT, "f")
        }
        set dielectricSpecularModel(TT) {
          (0, uT.e)(this, BT, TT, "f")
        }
        get conductorSpecularModel() {
          return (0, uT.b)(this, FT, "f")
        }
        set conductorSpecularModel(TT) {
          (0, uT.e)(this, FT, TT, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(ST) {
          let DT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ST, "PBRBRDF", 90, new lT, DT), this._useEnergyConservation = TT.DEFAULT_USE_ENERGY_CONSERVATION, oT.set(this, (0, uT.j)(this, hT, TT.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, uT.j)(this, wT), TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), IT.set(this, (0, uT.j)(this, mT, TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, uT.j)(this, eT), TT.DEFAULT_USE_SPHERICAL_HARMONICS), iT.set(this, (0, uT.j)(this, RT, TT.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, uT.j)(this, ET), TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), zT.set(this, (0, uT.j)(this, fT, TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, uT.j)(this, CT), TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), kT.set(this, (0, uT.j)(this, jT, TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, uT.j)(this, JT), TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), WT.set(this, (0, uT.j)(this, UT, TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, uT.j)(this, aT), TT.DEFAULT_DIFFUSE_MODEL), XT.set(this, (0, uT.j)(this, YT, TT.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, uT.j)(this, QT), TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL), BT.set(this, (0, uT.j)(this, OT, TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, uT.j)(this, HT), TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL), FT.set(this, (0, uT.j)(this, nT, TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, uT.j)(this, qT), this._internalMarkAllSubMeshesAsMiscDirty = ST._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(TT) {
          TT.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, TT.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, TT.SPHERICAL_HARMONICS = this._useSphericalHarmonics, TT.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, TT.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, TT.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, TT.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, TT.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, TT.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, zT = new WeakMap, kT = new WeakMap, WT = new WeakMap, XT = new WeakMap, BT = new WeakMap, FT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(gT[Symbol.metadata] ?? null) : void 0;
        ST = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], DT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], LT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], xT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], cT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], KT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], MT = [(0, vT.P)("baseDiffuseModel"), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], rT = [(0, vT.P)("dielectricSpecularModel"), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], AT = [(0, vT.P)("conductorSpecularModel"), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], (0, uT.h)(TT, null, ST, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useEnergyConservation" in TT,
            get: TT => TT.useEnergyConservation,
            set: (TT, oT) => {
              TT.useEnergyConservation = oT
            }
          },
          metadata: oT
        }, hT, wT), (0, uT.h)(TT, null, DT, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSmithVisibilityHeightCorrelated" in TT,
            get: TT => TT.useSmithVisibilityHeightCorrelated,
            set: (TT, oT) => {
              TT.useSmithVisibilityHeightCorrelated = oT
            }
          },
          metadata: oT
        }, mT, eT), (0, uT.h)(TT, null, LT, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSphericalHarmonics" in TT,
            get: TT => TT.useSphericalHarmonics,
            set: (TT, oT) => {
              TT.useSphericalHarmonics = oT
            }
          },
          metadata: oT
        }, RT, ET), (0, uT.h)(TT, null, xT, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSpecularGlossinessInputEnergyConservation" in TT,
            get: TT => TT.useSpecularGlossinessInputEnergyConservation,
            set: (TT, oT) => {
              TT.useSpecularGlossinessInputEnergyConservation = oT
            }
          },
          metadata: oT
        }, fT, CT), (0, uT.h)(TT, null, cT, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: TT => "mixIblRadianceWithIrradiance" in TT,
            get: TT => TT.mixIblRadianceWithIrradiance,
            set: (TT, oT) => {
              TT.mixIblRadianceWithIrradiance = oT
            }
          },
          metadata: oT
        }, jT, JT), (0, uT.h)(TT, null, KT, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLegacySpecularEnergyConservation" in TT,
            get: TT => TT.useLegacySpecularEnergyConservation,
            set: (TT, oT) => {
              TT.useLegacySpecularEnergyConservation = oT
            }
          },
          metadata: oT
        }, UT, aT), (0, uT.h)(TT, null, MT, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseModel" in TT,
            get: TT => TT.baseDiffuseModel,
            set: (TT, oT) => {
              TT.baseDiffuseModel = oT
            }
          },
          metadata: oT
        }, YT, QT), (0, uT.h)(TT, null, rT, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "dielectricSpecularModel" in TT,
            get: TT => TT.dielectricSpecularModel,
            set: (TT, oT) => {
              TT.dielectricSpecularModel = oT
            }
          },
          metadata: oT
        }, OT, HT), (0, uT.h)(TT, null, AT, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: TT => "conductorSpecularModel" in TT,
            get: TT => TT.conductorSpecularModel,
            set: (TT, oT) => {
              TT.conductorSpecularModel = oT
            }
          },
          metadata: oT
        }, nT, qT), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT.DEFAULT_USE_ENERGY_CONSERVATION = !0, TT.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, TT.DEFAULT_USE_SPHERICAL_HARMONICS = !0, TT.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, TT.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, TT.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, TT.DEFAULT_DIFFUSE_MODEL = 0, TT.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, TT.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, TT
    })();
    var tT = IT(39049),
      GT = IT(36177),
      pT = IT(39057),
      bT = IT(38899),
      yT = IT(39131),
      NT = IT(39125),
      PT = IT(39135),
      dT = IT(39113);
    class VT extends qT.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let To = (() => {
      var TT, oT, IT, iT, zT, kT, WT, XT, BT, FT;
      let ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT = ZT.b,
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [],
        lT = [],
        sT = [],
        tT = [],
        pT = [],
        bT = [],
        yT = [],
        PT = [],
        To = [],
        oo = [],
        Io = [],
        io = [],
        zo = [],
        ko = [],
        Wo = [],
        Xo = [];
      return TT = class extends RT {
        get isEnabled() {
          return (0, uT.b)(this, oT, "f")
        }
        set isEnabled(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        get indexOfRefraction() {
          return (0, uT.b)(this, IT, "f")
        }
        set indexOfRefraction(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get texture() {
          return (0, uT.b)(this, iT, "f")
        }
        set texture(TT) {
          (0, uT.e)(this, iT, TT, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, uT.b)(this, zT, "f")
        }
        set useRoughnessFromMainTexture(TT) {
          (0, uT.e)(this, zT, TT, "f")
        }
        get textureRoughness() {
          return (0, uT.b)(this, kT, "f")
        }
        set textureRoughness(TT) {
          (0, uT.e)(this, kT, TT, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, uT.b)(this, WT, "f")
        }
        set remapF0OnInterfaceChange(TT) {
          (0, uT.e)(this, WT, TT, "f")
        }
        get bumpTexture() {
          return (0, uT.b)(this, XT, "f")
        }
        set bumpTexture(TT) {
          (0, uT.e)(this, XT, TT, "f")
        }
        get isTintEnabled() {
          return (0, uT.b)(this, BT, "f")
        }
        set isTintEnabled(TT) {
          (0, uT.e)(this, BT, TT, "f")
        }
        get tintTexture() {
          return (0, uT.b)(this, FT, "f")
        }
        set tintTexture(TT) {
          (0, uT.e)(this, FT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(ST) {
          let DT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ST, "PBRClearCoat", 100, new VT, DT), this._isEnabled = !1, oT.set(this, (0, uT.j)(this, ET, !1)), this.intensity = ((0, uT.j)(this, fT), (0, uT.j)(this, CT, 1)), this.roughness = ((0, uT.j)(this, jT), (0, uT.j)(this, JT, 0)), this._indexOfRefraction = ((0, uT.j)(this, UT), TT._DefaultIndexOfRefraction), IT.set(this, (0, uT.j)(this, aT, TT._DefaultIndexOfRefraction)), this._texture = ((0, uT.j)(this, YT), null), iT.set(this, (0, uT.j)(this, QT, null)), this._useRoughnessFromMainTexture = ((0, uT.j)(this, OT), !0), zT.set(this, (0, uT.j)(this, HT, !0)), this._textureRoughness = ((0, uT.j)(this, nT), null), kT.set(this, (0, uT.j)(this, qT, null)), this._remapF0OnInterfaceChange = ((0, uT.j)(this, lT), !0), WT.set(this, (0, uT.j)(this, sT, !0)), this._bumpTexture = ((0, uT.j)(this, tT), null), XT.set(this, (0, uT.j)(this, pT, null)), this._isTintEnabled = ((0, uT.j)(this, bT), !1), BT.set(this, (0, uT.j)(this, yT, !1)), this.tintColor = ((0, uT.j)(this, PT), (0, uT.j)(this, To, GT.e.White())), this.tintColorAtDistance = ((0, uT.j)(this, oo), (0, uT.j)(this, Io, 1)), this.tintThickness = ((0, uT.j)(this, io), (0, uT.j)(this, zo, 1)), this._tintTexture = ((0, uT.j)(this, ko), null), FT.set(this, (0, uT.j)(this, Wo, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, uT.j)(this, Xo), this._internalMarkAllSubMeshesAsTexturesDirty = ST._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, oT, IT) {
          if (!this._isEnabled) return !0;
          const iT = this._material._disableBumpMap;
          if (TT._areTexturesDirty && oT.texturesEnabled) {
            if (this._texture && NT.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && NT.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (IT.getCaps().standardDerivatives && this._bumpTexture && NT.c.ClearCoatBumpTextureEnabled && !iT && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && NT.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(oT, IT) {
          this._isEnabled ? (oT.CLEARCOAT = !0, oT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, oT.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, oT._areTexturesDirty && IT.texturesEnabled && (this._texture && NT.c.ClearCoatTextureEnabled ? (0, dT.Q)(this._texture, oT, "CLEARCOAT_TEXTURE") : oT.CLEARCOAT_TEXTURE = !1, this._textureRoughness && NT.c.ClearCoatTextureEnabled ? (0, dT.Q)(this._textureRoughness, oT, "CLEARCOAT_TEXTURE_ROUGHNESS") : oT.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && NT.c.ClearCoatBumpTextureEnabled ? (0, dT.Q)(this._bumpTexture, oT, "CLEARCOAT_BUMP") : oT.CLEARCOAT_BUMP = !1, oT.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === TT._DefaultIndexOfRefraction, this._isTintEnabled ? (oT.CLEARCOAT_TINT = !0, this._tintTexture && NT.c.ClearCoatTintTextureEnabled ? ((0, dT.Q)(this._tintTexture, oT, "CLEARCOAT_TINT_TEXTURE"), oT.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : oT.CLEARCOAT_TINT_TEXTURE = !1) : (oT.CLEARCOAT_TINT = !1, oT.CLEARCOAT_TINT_TEXTURE = !1))) : (oT.CLEARCOAT = !1, oT.CLEARCOAT_TEXTURE = !1, oT.CLEARCOAT_TEXTURE_ROUGHNESS = !1, oT.CLEARCOAT_BUMP = !1, oT.CLEARCOAT_TINT = !1, oT.CLEARCOAT_TINT_TEXTURE = !1, oT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, oT.CLEARCOAT_DEFAULTIOR = !1, oT.CLEARCOAT_TEXTUREDIRECTUV = 0, oT.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, oT.CLEARCOAT_BUMPDIRECTUV = 0, oT.CLEARCOAT_REMAP_F0 = !1, oT.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, oT.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(TT, oT, IT, iT) {
          if (!this._isEnabled) return;
          const zT = iT.materialDefines,
            kT = this._material.isFrozen,
            WT = this._material._disableBumpMap,
            XT = this._material._invertNormalMapX,
            BT = this._material._invertNormalMapY;
          if (!TT.useUbo || !kT || !TT.isSync) {
            (this._texture || this._textureRoughness) && NT.c.ClearCoatTextureEnabled && (TT.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, dT.v)(this._texture, TT, "clearCoat"), this._textureRoughness && !zT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, dT.v)(this._textureRoughness, TT, "clearCoatRoughness")), this._bumpTexture && IT.getCaps().standardDerivatives && NT.c.ClearCoatTextureEnabled && !WT && (TT.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, dT.v)(this._bumpTexture, TT, "clearCoatBump"), oT._mirroredCameraPosition ? TT.updateFloat2("vClearCoatTangentSpaceParams", XT ? 1 : -1, BT ? 1 : -1) : TT.updateFloat2("vClearCoatTangentSpaceParams", XT ? -1 : 1, BT ? -1 : 1)), this._tintTexture && NT.c.ClearCoatTintTextureEnabled && (TT.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, dT.v)(this._tintTexture, TT, "clearCoatTint")), TT.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const iT = 1 - this._indexOfRefraction,
              kT = 1 + this._indexOfRefraction,
              FT = Math.pow(-iT / kT, 2),
              ST = 1 / this._indexOfRefraction;
            TT.updateFloat4("vClearCoatRefractionParams", FT, ST, iT, kT), this._isTintEnabled && (TT.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), TT.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          oT.texturesEnabled && (this._texture && NT.c.ClearCoatTextureEnabled && TT.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !zT.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && NT.c.ClearCoatTextureEnabled && TT.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && IT.getCaps().standardDerivatives && NT.c.ClearCoatBumpTextureEnabled && !WT && TT.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && NT.c.ClearCoatTintTextureEnabled && TT.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(TT) {
          return this._texture === TT || (this._textureRoughness === TT || (this._bumpTexture === TT || this._tintTexture === TT))
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture), this._textureRoughness && TT.push(this._textureRoughness), this._bumpTexture && TT.push(this._bumpTexture), this._tintTexture && TT.push(this._tintTexture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && TT.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && TT.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && TT.push(this._tintTexture)
        }
        dispose(TT) {
          TT && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(TT, oT, IT) {
          return TT.CLEARCOAT_BUMP && oT.addFallback(IT++, "CLEARCOAT_BUMP"), TT.CLEARCOAT_TINT && oT.addFallback(IT++, "CLEARCOAT_TINT"), TT.CLEARCOAT && oT.addFallback(IT++, "CLEARCOAT"), IT
        }
        getSamplers(TT) {
          TT.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, zT = new WeakMap, kT = new WeakMap, WT = new WeakMap, XT = new WeakMap, BT = new WeakMap, FT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(RT[Symbol.metadata] ?? null) : void 0;
        ST = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], DT = [(0, vT.P)()], LT = [(0, vT.P)()], xT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], rT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], AT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], gT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, vT.q)()], wT = [(0, vT.P)()], mT = [(0, vT.P)()], eT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], (0, uT.h)(TT, null, ST, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, oT) => {
              TT.isEnabled = oT
            }
          },
          metadata: oT
        }, ET, fT), (0, uT.h)(TT, null, xT, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, oT) => {
              TT.indexOfRefraction = oT
            }
          },
          metadata: oT
        }, aT, YT), (0, uT.h)(TT, null, cT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, oT) => {
              TT.texture = oT
            }
          },
          metadata: oT
        }, QT, OT), (0, uT.h)(TT, null, KT, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMainTexture" in TT,
            get: TT => TT.useRoughnessFromMainTexture,
            set: (TT, oT) => {
              TT.useRoughnessFromMainTexture = oT
            }
          },
          metadata: oT
        }, HT, nT), (0, uT.h)(TT, null, MT, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRoughness" in TT,
            get: TT => TT.textureRoughness,
            set: (TT, oT) => {
              TT.textureRoughness = oT
            }
          },
          metadata: oT
        }, qT, lT), (0, uT.h)(TT, null, rT, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: TT => "remapF0OnInterfaceChange" in TT,
            get: TT => TT.remapF0OnInterfaceChange,
            set: (TT, oT) => {
              TT.remapF0OnInterfaceChange = oT
            }
          },
          metadata: oT
        }, sT, tT), (0, uT.h)(TT, null, AT, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpTexture" in TT,
            get: TT => TT.bumpTexture,
            set: (TT, oT) => {
              TT.bumpTexture = oT
            }
          },
          metadata: oT
        }, pT, bT), (0, uT.h)(TT, null, gT, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isTintEnabled" in TT,
            get: TT => TT.isTintEnabled,
            set: (TT, oT) => {
              TT.isTintEnabled = oT
            }
          },
          metadata: oT
        }, yT, PT), (0, uT.h)(TT, null, eT, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintTexture" in TT,
            get: TT => TT.tintTexture,
            set: (TT, oT) => {
              TT.tintTexture = oT
            }
          },
          metadata: oT
        }, Wo, Xo), (0, uT.h)(null, null, DT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, oT) => {
              TT.intensity = oT
            }
          },
          metadata: oT
        }, CT, jT), (0, uT.h)(null, null, LT, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, oT) => {
              TT.roughness = oT
            }
          },
          metadata: oT
        }, JT, UT), (0, uT.h)(null, null, hT, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColor" in TT,
            get: TT => TT.tintColor,
            set: (TT, oT) => {
              TT.tintColor = oT
            }
          },
          metadata: oT
        }, To, oo), (0, uT.h)(null, null, wT, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColorAtDistance" in TT,
            get: TT => TT.tintColorAtDistance,
            set: (TT, oT) => {
              TT.tintColorAtDistance = oT
            }
          },
          metadata: oT
        }, Io, io), (0, uT.h)(null, null, mT, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintThickness" in TT,
            get: TT => TT.tintThickness,
            set: (TT, oT) => {
              TT.tintThickness = oT
            }
          },
          metadata: oT
        }, zo, ko), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT._DefaultIndexOfRefraction = 1.5, TT
    })();
    class oo extends qT.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Io = (() => {
      var TT, oT, IT, iT;
      let zT, kT, WT, XT, BT, FT, ST, DT = ZT.b,
        LT = [],
        xT = [],
        cT = [],
        KT = [],
        MT = [],
        rT = [],
        AT = [],
        gT = [],
        hT = [],
        wT = [],
        mT = [],
        eT = [],
        RT = [],
        ET = [];
      return TT = class extends DT {
        get isEnabled() {
          return (0, uT.b)(this, oT, "f")
        }
        set isEnabled(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        get texture() {
          return (0, uT.b)(this, IT, "f")
        }
        set texture(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get thicknessTexture() {
          return (0, uT.b)(this, iT, "f")
        }
        set thicknessTexture(TT) {
          (0, uT.e)(this, iT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zT) {
          let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zT, "PBRIridescence", 110, new oo, kT), this._isEnabled = !1, oT.set(this, (0, uT.j)(this, LT, !1)), this.intensity = ((0, uT.j)(this, xT), (0, uT.j)(this, cT, 1)), this.minimumThickness = ((0, uT.j)(this, KT), (0, uT.j)(this, MT, TT._DefaultMinimumThickness)), this.maximumThickness = ((0, uT.j)(this, rT), (0, uT.j)(this, AT, TT._DefaultMaximumThickness)), this.indexOfRefraction = ((0, uT.j)(this, gT), (0, uT.j)(this, hT, TT._DefaultIndexOfRefraction)), this._texture = ((0, uT.j)(this, wT), null), IT.set(this, (0, uT.j)(this, mT, null)), this._thicknessTexture = ((0, uT.j)(this, eT), null), iT.set(this, (0, uT.j)(this, RT, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, uT.j)(this, ET), this._internalMarkAllSubMeshesAsTexturesDirty = zT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, oT) {
          if (!this._isEnabled) return !0;
          if (TT._areTexturesDirty && oT.texturesEnabled) {
            if (this._texture && NT.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && NT.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, oT) {
          this._isEnabled ? (TT.IRIDESCENCE = !0, TT._areTexturesDirty && oT.texturesEnabled && (this._texture && NT.c.IridescenceTextureEnabled ? (0, dT.Q)(this._texture, TT, "IRIDESCENCE_TEXTURE") : TT.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && NT.c.IridescenceTextureEnabled ? (0, dT.Q)(this._thicknessTexture, TT, "IRIDESCENCE_THICKNESS_TEXTURE") : TT.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (TT.IRIDESCENCE = !1, TT.IRIDESCENCE_TEXTURE = !1, TT.IRIDESCENCE_THICKNESS_TEXTURE = !1, TT.IRIDESCENCE_TEXTUREDIRECTUV = 0, TT.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(TT, oT) {
          if (!this._isEnabled) return;
          const IT = this._material.isFrozen;
          TT.useUbo && IT && TT.isSync || ((this._texture || this._thicknessTexture) && NT.c.IridescenceTextureEnabled && (TT.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, dT.v)(this._texture, TT, "iridescence"), this._thicknessTexture && (0, dT.v)(this._thicknessTexture, TT, "iridescenceThickness")), TT.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), oT.texturesEnabled && (this._texture && NT.c.IridescenceTextureEnabled && TT.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && NT.c.IridescenceTextureEnabled && TT.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(TT) {
          return this._texture === TT || this._thicknessTexture === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture), this._thicknessTexture && TT.push(this._thicknessTexture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && TT.push(this._thicknessTexture)
        }
        dispose(TT) {
          TT && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(TT, oT, IT) {
          return TT.IRIDESCENCE && oT.addFallback(IT++, "IRIDESCENCE"), IT
        }
        getSamplers(TT) {
          TT.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(DT[Symbol.metadata] ?? null) : void 0;
        zT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], kT = [(0, vT.P)()], WT = [(0, vT.P)()], XT = [(0, vT.P)()], BT = [(0, vT.P)()], FT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], (0, uT.h)(TT, null, zT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, oT) => {
              TT.isEnabled = oT
            }
          },
          metadata: oT
        }, LT, xT), (0, uT.h)(TT, null, FT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, oT) => {
              TT.texture = oT
            }
          },
          metadata: oT
        }, mT, eT), (0, uT.h)(TT, null, ST, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "thicknessTexture" in TT,
            get: TT => TT.thicknessTexture,
            set: (TT, oT) => {
              TT.thicknessTexture = oT
            }
          },
          metadata: oT
        }, RT, ET), (0, uT.h)(null, null, kT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, oT) => {
              TT.intensity = oT
            }
          },
          metadata: oT
        }, cT, KT), (0, uT.h)(null, null, WT, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "minimumThickness" in TT,
            get: TT => TT.minimumThickness,
            set: (TT, oT) => {
              TT.minimumThickness = oT
            }
          },
          metadata: oT
        }, MT, rT), (0, uT.h)(null, null, XT, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "maximumThickness" in TT,
            get: TT => TT.maximumThickness,
            set: (TT, oT) => {
              TT.maximumThickness = oT
            }
          },
          metadata: oT
        }, AT, gT), (0, uT.h)(null, null, BT, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, oT) => {
              TT.indexOfRefraction = oT
            }
          },
          metadata: oT
        }, hT, wT), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT._DefaultMinimumThickness = 100, TT._DefaultMaximumThickness = 400, TT._DefaultIndexOfRefraction = 1.3, TT
    })();
    class io extends qT.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let zo = (() => {
      var TT, oT, IT, iT;
      let zT, kT, WT, XT, BT, FT = ZT.b,
        ST = [],
        DT = [],
        LT = [],
        xT = [],
        cT = [],
        KT = [],
        MT = [],
        rT = [],
        AT = [],
        gT = [];
      return TT = class extends FT {
        get isEnabled() {
          return (0, uT.b)(this, oT, "f")
        }
        set isEnabled(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        set angle(TT) {
          this.direction.x = Math.cos(TT), this.direction.y = Math.sin(TT)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, uT.b)(this, IT, "f")
        }
        set texture(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get legacy() {
          return (0, uT.b)(this, iT, "f")
        }
        set legacy(TT) {
          (0, uT.e)(this, iT, TT, "f")
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
        constructor(TT) {
          let zT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "PBRAnisotropic", 110, new io, zT), this._isEnabled = !1, oT.set(this, (0, uT.j)(this, ST, !1)), this.intensity = ((0, uT.j)(this, DT), (0, uT.j)(this, LT, 1)), this.direction = ((0, uT.j)(this, xT), (0, uT.j)(this, cT, new HT.j(1, 0))), this._texture = ((0, uT.j)(this, KT), null), IT.set(this, (0, uT.j)(this, MT, null)), this._legacy = ((0, uT.j)(this, rT), !1), iT.set(this, (0, uT.j)(this, AT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, uT.j)(this, gT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = TT._dirtyCallbacks[16]
        }
        isReadyForSubMesh(TT, oT) {
          return !this._isEnabled || !(TT._areTexturesDirty && oT.texturesEnabled && this._texture && NT.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(TT, oT, IT) {
          this._isEnabled ? (TT.ANISOTROPIC = this._isEnabled, this._isEnabled && !IT.isVerticesDataPresent(nT.i.TangentKind) && (TT._needUVs = !0, TT.MAINUV1 = !0), TT._areTexturesDirty && oT.texturesEnabled && (this._texture && NT.c.AnisotropicTextureEnabled ? (0, dT.Q)(this._texture, TT, "ANISOTROPIC_TEXTURE") : TT.ANISOTROPIC_TEXTURE = !1), TT._areMiscDirty && (TT.ANISOTROPIC_LEGACY = this._legacy)) : (TT.ANISOTROPIC = !1, TT.ANISOTROPIC_TEXTURE = !1, TT.ANISOTROPIC_TEXTUREDIRECTUV = 0, TT.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(TT, oT) {
          if (!this._isEnabled) return;
          const IT = this._material.isFrozen;
          TT.useUbo && IT && TT.isSync || (this._texture && NT.c.AnisotropicTextureEnabled && (TT.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, dT.v)(this._texture, TT, "anisotropy")), TT.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), oT.texturesEnabled && this._texture && NT.c.AnisotropicTextureEnabled && TT.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(TT) {
          return this._texture === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture)
        }
        dispose(TT) {
          TT && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(TT, oT, IT) {
          return TT.ANISOTROPIC && oT.addFallback(IT++, "ANISOTROPIC"), IT
        }
        getSamplers(TT) {
          TT.push("anisotropySampler")
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
        parse(TT, oT, IT) {
          super.parse(TT, oT, IT), void 0 === TT.legacy && (this.legacy = !0)
        }
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(FT[Symbol.metadata] ?? null) : void 0;
        zT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], kT = [(0, vT.P)()], WT = [(0, vT.I)()], XT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], (0, uT.h)(TT, null, zT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, oT) => {
              TT.isEnabled = oT
            }
          },
          metadata: oT
        }, ST, DT), (0, uT.h)(TT, null, XT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, oT) => {
              TT.texture = oT
            }
          },
          metadata: oT
        }, MT, rT), (0, uT.h)(TT, null, BT, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: TT => "legacy" in TT,
            get: TT => TT.legacy,
            set: (TT, oT) => {
              TT.legacy = oT
            }
          },
          metadata: oT
        }, AT, gT), (0, uT.h)(null, null, kT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, oT) => {
              TT.intensity = oT
            }
          },
          metadata: oT
        }, LT, xT), (0, uT.h)(null, null, WT, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: TT => "direction" in TT,
            get: TT => TT.direction,
            set: (TT, oT) => {
              TT.direction = oT
            }
          },
          metadata: oT
        }, cT, KT), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT
    })();
    class ko extends qT.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Wo = (() => {
      var TT, oT, IT, iT, zT, kT, WT, XT;
      let BT, FT, ST, DT, LT, xT, cT, KT, MT, rT = ZT.b,
        AT = [],
        gT = [],
        hT = [],
        wT = [],
        mT = [],
        eT = [],
        RT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [];
      return TT = class extends rT {
        get isEnabled() {
          return (0, uT.b)(this, oT, "f")
        }
        set isEnabled(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, uT.b)(this, IT, "f")
        }
        set linkSheenWithAlbedo(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get texture() {
          return (0, uT.b)(this, iT, "f")
        }
        set texture(TT) {
          (0, uT.e)(this, iT, TT, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, uT.b)(this, zT, "f")
        }
        set useRoughnessFromMainTexture(TT) {
          (0, uT.e)(this, zT, TT, "f")
        }
        get roughness() {
          return (0, uT.b)(this, kT, "f")
        }
        set roughness(TT) {
          (0, uT.e)(this, kT, TT, "f")
        }
        get textureRoughness() {
          return (0, uT.b)(this, WT, "f")
        }
        set textureRoughness(TT) {
          (0, uT.e)(this, WT, TT, "f")
        }
        get albedoScaling() {
          return (0, uT.b)(this, XT, "f")
        }
        set albedoScaling(TT) {
          (0, uT.e)(this, XT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(TT) {
          let BT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "Sheen", 120, new ko, BT), this._isEnabled = !1, oT.set(this, (0, uT.j)(this, AT, !1)), this._linkSheenWithAlbedo = ((0, uT.j)(this, gT), !1), IT.set(this, (0, uT.j)(this, hT, !1)), this.intensity = ((0, uT.j)(this, wT), (0, uT.j)(this, mT, 1)), this.color = ((0, uT.j)(this, eT), (0, uT.j)(this, RT, GT.e.White())), this._texture = ((0, uT.j)(this, ET), null), iT.set(this, (0, uT.j)(this, fT, null)), this._useRoughnessFromMainTexture = ((0, uT.j)(this, CT), !0), zT.set(this, (0, uT.j)(this, jT, !0)), this._roughness = ((0, uT.j)(this, JT), null), kT.set(this, (0, uT.j)(this, UT, null)), this._textureRoughness = ((0, uT.j)(this, aT), null), WT.set(this, (0, uT.j)(this, YT, null)), this._albedoScaling = ((0, uT.j)(this, QT), !1), XT.set(this, (0, uT.j)(this, OT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, uT.j)(this, HT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, oT) {
          if (!this._isEnabled) return !0;
          if (TT._areTexturesDirty && oT.texturesEnabled) {
            if (this._texture && NT.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && NT.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, oT) {
          this._isEnabled ? (TT.SHEEN = !0, TT.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, TT.SHEEN_ROUGHNESS = null !== this._roughness, TT.SHEEN_ALBEDOSCALING = this._albedoScaling, TT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, TT._areTexturesDirty && oT.texturesEnabled && (this._texture && NT.c.SheenTextureEnabled ? ((0, dT.Q)(this._texture, TT, "SHEEN_TEXTURE"), TT.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : TT.SHEEN_TEXTURE = !1, this._textureRoughness && NT.c.SheenTextureEnabled ? (0, dT.Q)(this._textureRoughness, TT, "SHEEN_TEXTURE_ROUGHNESS") : TT.SHEEN_TEXTURE_ROUGHNESS = !1)) : (TT.SHEEN = !1, TT.SHEEN_TEXTURE = !1, TT.SHEEN_TEXTURE_ROUGHNESS = !1, TT.SHEEN_LINKWITHALBEDO = !1, TT.SHEEN_ROUGHNESS = !1, TT.SHEEN_ALBEDOSCALING = !1, TT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, TT.SHEEN_GAMMATEXTURE = !1, TT.SHEEN_TEXTUREDIRECTUV = 0, TT.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(TT, oT, IT, iT) {
          if (!this._isEnabled) return;
          const zT = iT.materialDefines,
            kT = this._material.isFrozen;
          TT.useUbo && kT && TT.isSync || ((this._texture || this._textureRoughness) && NT.c.SheenTextureEnabled && (TT.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, dT.v)(this._texture, TT, "sheen"), this._textureRoughness && !zT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, dT.v)(this._textureRoughness, TT, "sheenRoughness")), TT.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && TT.updateFloat("vSheenRoughness", this._roughness)), oT.texturesEnabled && (this._texture && NT.c.SheenTextureEnabled && TT.setTexture("sheenSampler", this._texture), this._textureRoughness && !zT.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && NT.c.SheenTextureEnabled && TT.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(TT) {
          return this._texture === TT || this._textureRoughness === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture), this._textureRoughness && TT.push(this._textureRoughness)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && TT.push(this._textureRoughness)
        }
        dispose(TT) {
          TT && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(TT, oT, IT) {
          return TT.SHEEN && oT.addFallback(IT++, "SHEEN"), IT
        }
        getSamplers(TT) {
          TT.push("sheenSampler", "sheenRoughnessSampler")
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
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, zT = new WeakMap, kT = new WeakMap, WT = new WeakMap, XT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(rT[Symbol.metadata] ?? null) : void 0;
        BT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], FT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], ST = [(0, vT.P)()], DT = [(0, vT.q)()], LT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], xT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], (0, uT.h)(TT, null, BT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, oT) => {
              TT.isEnabled = oT
            }
          },
          metadata: oT
        }, AT, gT), (0, uT.h)(TT, null, FT, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: TT => "linkSheenWithAlbedo" in TT,
            get: TT => TT.linkSheenWithAlbedo,
            set: (TT, oT) => {
              TT.linkSheenWithAlbedo = oT
            }
          },
          metadata: oT
        }, hT, wT), (0, uT.h)(TT, null, LT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, oT) => {
              TT.texture = oT
            }
          },
          metadata: oT
        }, fT, CT), (0, uT.h)(TT, null, xT, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMainTexture" in TT,
            get: TT => TT.useRoughnessFromMainTexture,
            set: (TT, oT) => {
              TT.useRoughnessFromMainTexture = oT
            }
          },
          metadata: oT
        }, jT, JT), (0, uT.h)(TT, null, cT, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, oT) => {
              TT.roughness = oT
            }
          },
          metadata: oT
        }, UT, aT), (0, uT.h)(TT, null, KT, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "textureRoughness" in TT,
            get: TT => TT.textureRoughness,
            set: (TT, oT) => {
              TT.textureRoughness = oT
            }
          },
          metadata: oT
        }, YT, QT), (0, uT.h)(TT, null, MT, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoScaling" in TT,
            get: TT => TT.albedoScaling,
            set: (TT, oT) => {
              TT.albedoScaling = oT
            }
          },
          metadata: oT
        }, OT, HT), (0, uT.h)(null, null, ST, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, oT) => {
              TT.intensity = oT
            }
          },
          metadata: oT
        }, mT, eT), (0, uT.h)(null, null, DT, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: TT => "color" in TT,
            get: TT => TT.color,
            set: (TT, oT) => {
              TT.color = oT
            }
          },
          metadata: oT
        }, RT, ET), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT
    })();
    class Xo extends qT.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Bo = (() => {
      var TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT;
      let rT, AT, gT, hT, wT, mT, eT, RT, ET, fT, CT, jT, JT, UT, aT, YT, QT, OT, nT, qT, lT, sT, tT, pT, bT, yT, PT, VT, To, oo, Io = ZT.b,
        io = [],
        zo = [],
        ko = [],
        Wo = [],
        Bo = [],
        Fo = [],
        So = [],
        Do = [],
        Lo = [],
        xo = [],
        co = [],
        Ko = [],
        Mo = [],
        ro = [],
        Ao = [],
        go = [],
        ho = [],
        wo = [],
        mo = [],
        eo = [],
        Ro = [],
        uo = [],
        vo = [],
        Eo = [],
        fo = [],
        Co = [],
        jo = [],
        Jo = [],
        Uo = [],
        ao = [],
        Yo = [],
        Qo = [],
        Oo = [],
        Ho = [],
        no = [],
        qo = [],
        Zo = [],
        so = [],
        to = [],
        Go = [],
        po = [],
        bo = [],
        yo = [],
        No = [],
        Po = [],
        Vo = [],
        TI = [],
        oI = [],
        II = [],
        iI = [],
        zI = [],
        kI = [],
        WI = [],
        XI = [],
        BI = [],
        FI = [],
        SI = [],
        DI = [],
        LI = [],
        xI = [];
      return TT = class extends Io {
        get isRefractionEnabled() {
          return (0, uT.b)(this, oT, "f")
        }
        set isRefractionEnabled(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        get isTranslucencyEnabled() {
          return (0, uT.b)(this, IT, "f")
        }
        set isTranslucencyEnabled(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get isDispersionEnabled() {
          return (0, uT.b)(this, iT, "f")
        }
        set isDispersionEnabled(TT) {
          (0, uT.e)(this, iT, TT, "f")
        }
        get isScatteringEnabled() {
          return (0, uT.b)(this, zT, "f")
        }
        set isScatteringEnabled(TT) {
          (0, uT.e)(this, zT, TT, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(TT) {
          this._scene.enableSubSurfaceForPrePass() && TT && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(TT))
        }
        get useAlbedoToTintRefraction() {
          return (0, uT.b)(this, kT, "f")
        }
        set useAlbedoToTintRefraction(TT) {
          (0, uT.e)(this, kT, TT, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, uT.b)(this, WT, "f")
        }
        set useAlbedoToTintTranslucency(TT) {
          (0, uT.e)(this, WT, TT, "f")
        }
        get thicknessTexture() {
          return (0, uT.b)(this, XT, "f")
        }
        set thicknessTexture(TT) {
          (0, uT.e)(this, XT, TT, "f")
        }
        get refractionTexture() {
          return (0, uT.b)(this, BT, "f")
        }
        set refractionTexture(TT) {
          (0, uT.e)(this, BT, TT, "f")
        }
        get indexOfRefraction() {
          return (0, uT.b)(this, FT, "f")
        }
        set indexOfRefraction(TT) {
          (0, uT.e)(this, FT, TT, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(TT) {
          const oT = TT >= 1 ? TT : -1;
          this._volumeIndexOfRefraction !== oT && (this._volumeIndexOfRefraction = oT, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, uT.b)(this, ST, "f")
        }
        set invertRefractionY(TT) {
          (0, uT.e)(this, ST, TT, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, uT.b)(this, DT, "f")
        }
        set linkRefractionWithTransparency(TT) {
          (0, uT.e)(this, DT, TT, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, uT.b)(this, LT, "f")
        }
        set useMaskFromThicknessTexture(TT) {
          (0, uT.e)(this, LT, TT, "f")
        }
        get refractionIntensityTexture() {
          return (0, uT.b)(this, xT, "f")
        }
        set refractionIntensityTexture(TT) {
          (0, uT.e)(this, xT, TT, "f")
        }
        get translucencyIntensityTexture() {
          return (0, uT.b)(this, cT, "f")
        }
        set translucencyIntensityTexture(TT) {
          (0, uT.e)(this, cT, TT, "f")
        }
        get translucencyColorTexture() {
          return (0, uT.b)(this, KT, "f")
        }
        set translucencyColorTexture(TT) {
          (0, uT.e)(this, KT, TT, "f")
        }
        get useGltfStyleTextures() {
          return (0, uT.b)(this, MT, "f")
        }
        set useGltfStyleTextures(TT) {
          (0, uT.e)(this, MT, TT, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(TT) {
          this.legacyTranslucency = TT
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
        constructor(rT) {
          let AT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(rT, "PBRSubSurface", 130, new Xo, AT), this._isRefractionEnabled = !1, oT.set(this, (0, uT.j)(this, io, !1)), this._isTranslucencyEnabled = ((0, uT.j)(this, zo), !1), IT.set(this, (0, uT.j)(this, ko, !1)), this._isDispersionEnabled = ((0, uT.j)(this, Wo), !1), iT.set(this, (0, uT.j)(this, Bo, !1)), this._isScatteringEnabled = ((0, uT.j)(this, Fo), !1), zT.set(this, (0, uT.j)(this, So, !1)), this._scatteringDiffusionProfileIndex = ((0, uT.j)(this, Do), (0, uT.j)(this, Lo, 0)), this.refractionIntensity = ((0, uT.j)(this, xo), (0, uT.j)(this, co, 1)), this.translucencyIntensity = ((0, uT.j)(this, Ko), (0, uT.j)(this, Mo, 1)), this._useAlbedoToTintRefraction = ((0, uT.j)(this, ro), !1), kT.set(this, (0, uT.j)(this, Ao, !1)), this._useAlbedoToTintTranslucency = ((0, uT.j)(this, go), !1), WT.set(this, (0, uT.j)(this, ho, !1)), this._thicknessTexture = ((0, uT.j)(this, wo), null), XT.set(this, (0, uT.j)(this, mo, null)), this._refractionTexture = ((0, uT.j)(this, eo), null), BT.set(this, (0, uT.j)(this, Ro, null)), this._indexOfRefraction = ((0, uT.j)(this, uo), 1.5), FT.set(this, (0, uT.j)(this, vo, 1.5)), this._volumeIndexOfRefraction = ((0, uT.j)(this, Eo), (0, uT.j)(this, fo, -1)), this._invertRefractionY = ((0, uT.j)(this, Co), !1), ST.set(this, (0, uT.j)(this, jo, !1)), this._linkRefractionWithTransparency = ((0, uT.j)(this, Jo), !1), DT.set(this, (0, uT.j)(this, Uo, !1)), this.minimumThickness = ((0, uT.j)(this, ao), (0, uT.j)(this, Yo, 0)), this.maximumThickness = ((0, uT.j)(this, Qo), (0, uT.j)(this, Oo, 1)), this.useThicknessAsDepth = ((0, uT.j)(this, Ho), (0, uT.j)(this, no, !1)), this.tintColor = ((0, uT.j)(this, qo), (0, uT.j)(this, Zo, GT.e.White())), this.tintColorAtDistance = ((0, uT.j)(this, so), (0, uT.j)(this, to, 1)), this.dispersion = ((0, uT.j)(this, Go), (0, uT.j)(this, po, 0)), this.diffusionDistance = ((0, uT.j)(this, bo), (0, uT.j)(this, yo, GT.e.White())), this._useMaskFromThicknessTexture = ((0, uT.j)(this, No), !1), LT.set(this, (0, uT.j)(this, Po, !1)), this._refractionIntensityTexture = ((0, uT.j)(this, Vo), null), xT.set(this, (0, uT.j)(this, TI, null)), this._translucencyIntensityTexture = ((0, uT.j)(this, oI), null), cT.set(this, (0, uT.j)(this, II, null)), this.translucencyColor = ((0, uT.j)(this, iI), (0, uT.j)(this, zI, null)), this._translucencyColorTexture = ((0, uT.j)(this, kI), null), KT.set(this, (0, uT.j)(this, WI, null)), this._useGltfStyleTextures = ((0, uT.j)(this, XI), !0), MT.set(this, (0, uT.j)(this, BI, !0)), this.applyAlbedoAfterSubSurface = ((0, uT.j)(this, FI), (0, uT.j)(this, SI, TT.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, uT.j)(this, DI), (0, uT.j)(this, LI, TT.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, uT.j)(this, xI), this._scene = rT.pC(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = rT._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = rT._dirtyCallbacks[32]
        }
        isReadyForSubMesh(TT, oT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (TT._areTexturesDirty && oT.texturesEnabled) {
            if (this._thicknessTexture && NT.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && NT.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && NT.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && NT.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const TT = this._getRefractionTexture(oT);
            if (TT && NT.c.RefractionTextureEnabled && !TT.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TT, oT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return TT.SUBSURFACE = !1, TT.SS_DISPERSION = !1, TT.SS_TRANSLUCENCY = !1, TT.SS_SCATTERING = !1, TT.SS_REFRACTION = !1, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_THICKNESSANDMASK_TEXTURE = !1, TT.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, TT.SS_HAS_THICKNESS = !1, TT.SS_REFRACTIONINTENSITY_TEXTURE = !1, TT.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, TT.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, TT.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, TT.SS_REFRACTIONMAP_3D = !1, TT.SS_REFRACTIONMAP_OPPOSITEZ = !1, TT.SS_LODINREFRACTIONALPHA = !1, TT.SS_GAMMAREFRACTION = !1, TT.SS_RGBDREFRACTION = !1, TT.SS_LINEARSPECULARREFRACTION = !1, TT.SS_LINKREFRACTIONTOTRANSPARENCY = !1, TT.SS_ALBEDOFORREFRACTIONTINT = !1, TT.SS_ALBEDOFORTRANSLUCENCYTINT = !1, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, TT.SS_USE_THICKNESS_AS_DEPTH = !1, TT.SS_USE_GLTF_TEXTURES = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, TT.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(TT.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (TT._areTexturesDirty) {
            if (TT.SUBSURFACE = !0, TT.SS_DISPERSION = this._isDispersionEnabled, TT.SS_TRANSLUCENCY = this._isTranslucencyEnabled, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, TT.SS_SCATTERING = this._isScatteringEnabled, TT.SS_THICKNESSANDMASK_TEXTURE = !1, TT.SS_REFRACTIONINTENSITY_TEXTURE = !1, TT.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, TT.SS_HAS_THICKNESS = !1, TT.SS_USE_GLTF_TEXTURES = !1, TT.SS_REFRACTION = !1, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, TT.SS_REFRACTIONMAP_3D = !1, TT.SS_GAMMAREFRACTION = !1, TT.SS_RGBDREFRACTION = !1, TT.SS_LINEARSPECULARREFRACTION = !1, TT.SS_REFRACTIONMAP_OPPOSITEZ = !1, TT.SS_LODINREFRACTIONALPHA = !1, TT.SS_LINKREFRACTIONTOTRANSPARENCY = !1, TT.SS_ALBEDOFORREFRACTIONTINT = !1, TT.SS_ALBEDOFORTRANSLUCENCYTINT = !1, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, TT.SS_USE_THICKNESS_AS_DEPTH = !1, TT.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, TT.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, TT._areTexturesDirty && oT.texturesEnabled && (this._thicknessTexture && NT.c.ThicknessTextureEnabled && (0, dT.Q)(this._thicknessTexture, TT, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && NT.c.RefractionIntensityTextureEnabled && (0, dT.Q)(this._refractionIntensityTexture, TT, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && NT.c.TranslucencyIntensityTextureEnabled && (0, dT.Q)(this._translucencyIntensityTexture, TT, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && NT.c.TranslucencyColorTextureEnabled && ((0, dT.Q)(this._translucencyColorTexture, TT, "SS_TRANSLUCENCYCOLOR_TEXTURE"), TT.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), TT.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, TT.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, TT.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, TT.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && oT.texturesEnabled) {
              const IT = this._getRefractionTexture(oT);
              IT && NT.c.RefractionTextureEnabled && (TT.SS_REFRACTION = !0, TT.SS_REFRACTIONMAP_3D = IT.isCube, TT.SS_GAMMAREFRACTION = IT.gammaSpace, TT.SS_RGBDREFRACTION = IT.isRGBD, TT.SS_LINEARSPECULARREFRACTION = IT.linearSpecularLOD, TT.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && IT.isCube ? !IT.invertZ : IT.invertZ, TT.SS_LODINREFRACTIONALPHA = IT.lodLevelInAlpha, TT.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, TT.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, TT.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = IT.isCube && IT.boundingBoxSize, TT.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (TT.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(TT, oT, IT, iT) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) TT.updateFloat2("vThicknessParam", 0, 0);
            else {
              iT.getRenderingMesh().getWorldMatrix().decompose(HT.i.sc[0]);
              const oT = Math.max(Math.abs(HT.i.sc[0].x), Math.abs(HT.i.sc[0].y), Math.abs(HT.i.sc[0].z));
              TT.updateFloat2("vThicknessParam", this.minimumThickness * oT, (this.maximumThickness - this.minimumThickness) * oT)
            }
        }
        bindForSubMesh(TT, oT, IT, iT) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const zT = iT.materialDefines,
            kT = this._material.isFrozen,
            WT = this._material.realTimeFiltering,
            XT = zT.LODBASEDMICROSFURACE,
            BT = this._getRefractionTexture(oT);
          if (!TT.useUbo || !kT || !TT.isSync) {
            if (this._thicknessTexture && NT.c.ThicknessTextureEnabled && (TT.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, dT.v)(this._thicknessTexture, TT, "thickness")), this._refractionIntensityTexture && NT.c.RefractionIntensityTextureEnabled && zT.SS_REFRACTIONINTENSITY_TEXTURE && (TT.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, dT.v)(this._refractionIntensityTexture, TT, "refractionIntensity")), this._translucencyColorTexture && NT.c.TranslucencyColorTextureEnabled && zT.SS_TRANSLUCENCYCOLOR_TEXTURE && (TT.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, dT.v)(this._translucencyColorTexture, TT, "translucencyColor")), this._translucencyIntensityTexture && NT.c.TranslucencyIntensityTextureEnabled && zT.SS_TRANSLUCENCYINTENSITY_TEXTURE && (TT.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, dT.v)(this._translucencyIntensityTexture, TT, "translucencyIntensity")), BT && NT.c.RefractionTextureEnabled) {
              TT.Y1("refractionMatrix", BT.getRefractionTextureMatrix());
              let oT = 1;
              BT.isCube || BT.depth && (oT = BT.depth);
              const IT = BT.getSize().width,
                iT = this.volumeIndexOfRefraction;
              if (TT.updateFloat4("vRefractionInfos", BT.level, 1 / iT, oT, this._invertRefractionY ? -1 : 1), TT.updateFloat4("vRefractionMicrosurfaceInfos", IT, BT.lodGenerationScale, BT.lodGenerationOffset, 1 / this.indexOfRefraction), WT && TT.updateFloat2("vRefractionFilteringInfo", IT, Math.log2(IT)), BT.boundingBoxSize) {
                const oT = BT;
                TT.updateVector3("vRefractionPosition", oT.boundingBoxPosition), TT.updateVector3("vRefractionSize", oT.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && TT.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), TT.updateColor3("vDiffusionDistance", this.diffusionDistance), TT.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), TT.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), TT.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), TT.updateFloat("dispersion", this.dispersion)
          }
          oT.texturesEnabled && (this._thicknessTexture && NT.c.ThicknessTextureEnabled && TT.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && NT.c.RefractionIntensityTextureEnabled && zT.SS_REFRACTIONINTENSITY_TEXTURE && TT.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && NT.c.TranslucencyIntensityTextureEnabled && zT.SS_TRANSLUCENCYINTENSITY_TEXTURE && TT.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && NT.c.TranslucencyColorTextureEnabled && zT.SS_TRANSLUCENCYCOLOR_TEXTURE && TT.setTexture("translucencyColorSampler", this._translucencyColorTexture), BT && NT.c.RefractionTextureEnabled && (XT ? TT.setTexture("refractionSampler", BT) : (TT.setTexture("refractionSampler", BT._lodTextureMid || BT), TT.setTexture("refractionSamplerLow", BT._lodTextureLow || BT), TT.setTexture("refractionSamplerHigh", BT._lodTextureHigh || BT))))
        }
        _getRefractionTexture(TT) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? TT.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(TT) {
          NT.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && TT.push(this._refractionTexture)
        }
        hasTexture(TT) {
          return this._thicknessTexture === TT || (this._refractionTexture === TT || (this._refractionIntensityTexture === TT || (this._translucencyIntensityTexture === TT || this._translucencyColorTexture === TT)))
        }
        hasRenderTargetTextures() {
          return !!(NT.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(TT) {
          this._thicknessTexture && TT.push(this._thicknessTexture), this._refractionTexture && TT.push(this._refractionTexture), this._refractionIntensityTexture && TT.push(this._refractionIntensityTexture), this._translucencyColorTexture && TT.push(this._translucencyColorTexture), this._translucencyIntensityTexture && TT.push(this._translucencyIntensityTexture)
        }
        getAnimatables(TT) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && TT.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && TT.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && TT.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && TT.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && TT.push(this._translucencyIntensityTexture)
        }
        dispose(TT) {
          TT && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(TT, oT, IT) {
          return TT.SS_SCATTERING && oT.addFallback(IT++, "SS_SCATTERING"), TT.SS_TRANSLUCENCY && oT.addFallback(IT++, "SS_TRANSLUCENCY"), IT
        }
        getSamplers(TT) {
          TT.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, zT = new WeakMap, kT = new WeakMap, WT = new WeakMap, XT = new WeakMap, BT = new WeakMap, FT = new WeakMap, ST = new WeakMap, DT = new WeakMap, LT = new WeakMap, xT = new WeakMap, cT = new WeakMap, KT = new WeakMap, MT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(Io[Symbol.metadata] ?? null) : void 0;
        rT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], AT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], gT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, vT.P)(), (0, vT.h)("_markScenePrePassDirty")], wT = [(0, vT.P)()], mT = [(0, vT.P)()], eT = [(0, vT.P)()], RT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], ET = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], fT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], CT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], JT = [(0, vT.P)()], UT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], aT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], YT = [(0, vT.P)()], QT = [(0, vT.P)()], OT = [(0, vT.P)()], nT = [(0, vT.q)()], qT = [(0, vT.P)()], lT = [(0, vT.P)()], sT = [(0, vT.q)()], tT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], pT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], bT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], yT = [(0, vT.q)()], PT = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], VT = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], To = [(0, vT.P)()], oo = [(0, vT.P)()], (0, uT.h)(TT, null, rT, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isRefractionEnabled" in TT,
            get: TT => TT.isRefractionEnabled,
            set: (TT, oT) => {
              TT.isRefractionEnabled = oT
            }
          },
          metadata: oT
        }, io, zo), (0, uT.h)(TT, null, AT, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isTranslucencyEnabled" in TT,
            get: TT => TT.isTranslucencyEnabled,
            set: (TT, oT) => {
              TT.isTranslucencyEnabled = oT
            }
          },
          metadata: oT
        }, ko, Wo), (0, uT.h)(TT, null, gT, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isDispersionEnabled" in TT,
            get: TT => TT.isDispersionEnabled,
            set: (TT, oT) => {
              TT.isDispersionEnabled = oT
            }
          },
          metadata: oT
        }, Bo, Fo), (0, uT.h)(TT, null, hT, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isScatteringEnabled" in TT,
            get: TT => TT.isScatteringEnabled,
            set: (TT, oT) => {
              TT.isScatteringEnabled = oT
            }
          },
          metadata: oT
        }, So, Do), (0, uT.h)(TT, null, RT, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlbedoToTintRefraction" in TT,
            get: TT => TT.useAlbedoToTintRefraction,
            set: (TT, oT) => {
              TT.useAlbedoToTintRefraction = oT
            }
          },
          metadata: oT
        }, Ao, go), (0, uT.h)(TT, null, ET, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlbedoToTintTranslucency" in TT,
            get: TT => TT.useAlbedoToTintTranslucency,
            set: (TT, oT) => {
              TT.useAlbedoToTintTranslucency = oT
            }
          },
          metadata: oT
        }, ho, wo), (0, uT.h)(TT, null, fT, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "thicknessTexture" in TT,
            get: TT => TT.thicknessTexture,
            set: (TT, oT) => {
              TT.thicknessTexture = oT
            }
          },
          metadata: oT
        }, mo, eo), (0, uT.h)(TT, null, CT, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionTexture" in TT,
            get: TT => TT.refractionTexture,
            set: (TT, oT) => {
              TT.refractionTexture = oT
            }
          },
          metadata: oT
        }, Ro, uo), (0, uT.h)(TT, null, jT, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "indexOfRefraction" in TT,
            get: TT => TT.indexOfRefraction,
            set: (TT, oT) => {
              TT.indexOfRefraction = oT
            }
          },
          metadata: oT
        }, vo, Eo), (0, uT.h)(TT, null, UT, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertRefractionY" in TT,
            get: TT => TT.invertRefractionY,
            set: (TT, oT) => {
              TT.invertRefractionY = oT
            }
          },
          metadata: oT
        }, jo, Jo), (0, uT.h)(TT, null, aT, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: TT => "linkRefractionWithTransparency" in TT,
            get: TT => TT.linkRefractionWithTransparency,
            set: (TT, oT) => {
              TT.linkRefractionWithTransparency = oT
            }
          },
          metadata: oT
        }, Uo, ao), (0, uT.h)(TT, null, tT, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMaskFromThicknessTexture" in TT,
            get: TT => TT.useMaskFromThicknessTexture,
            set: (TT, oT) => {
              TT.useMaskFromThicknessTexture = oT
            }
          },
          metadata: oT
        }, Po, Vo), (0, uT.h)(TT, null, pT, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionIntensityTexture" in TT,
            get: TT => TT.refractionIntensityTexture,
            set: (TT, oT) => {
              TT.refractionIntensityTexture = oT
            }
          },
          metadata: oT
        }, TI, oI), (0, uT.h)(TT, null, bT, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyIntensityTexture" in TT,
            get: TT => TT.translucencyIntensityTexture,
            set: (TT, oT) => {
              TT.translucencyIntensityTexture = oT
            }
          },
          metadata: oT
        }, II, iI), (0, uT.h)(TT, null, PT, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyColorTexture" in TT,
            get: TT => TT.translucencyColorTexture,
            set: (TT, oT) => {
              TT.translucencyColorTexture = oT
            }
          },
          metadata: oT
        }, WI, XI), (0, uT.h)(TT, null, VT, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: TT => "useGltfStyleTextures" in TT,
            get: TT => TT.useGltfStyleTextures,
            set: (TT, oT) => {
              TT.useGltfStyleTextures = oT
            }
          },
          metadata: oT
        }, BI, FI), (0, uT.h)(null, null, wT, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: TT => "_scatteringDiffusionProfileIndex" in TT,
            get: TT => TT._scatteringDiffusionProfileIndex,
            set: (TT, oT) => {
              TT._scatteringDiffusionProfileIndex = oT
            }
          },
          metadata: oT
        }, Lo, xo), (0, uT.h)(null, null, mT, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "refractionIntensity" in TT,
            get: TT => TT.refractionIntensity,
            set: (TT, oT) => {
              TT.refractionIntensity = oT
            }
          },
          metadata: oT
        }, co, Ko), (0, uT.h)(null, null, eT, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyIntensity" in TT,
            get: TT => TT.translucencyIntensity,
            set: (TT, oT) => {
              TT.translucencyIntensity = oT
            }
          },
          metadata: oT
        }, Mo, ro), (0, uT.h)(null, null, JT, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: TT => "_volumeIndexOfRefraction" in TT,
            get: TT => TT._volumeIndexOfRefraction,
            set: (TT, oT) => {
              TT._volumeIndexOfRefraction = oT
            }
          },
          metadata: oT
        }, fo, Co), (0, uT.h)(null, null, YT, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "minimumThickness" in TT,
            get: TT => TT.minimumThickness,
            set: (TT, oT) => {
              TT.minimumThickness = oT
            }
          },
          metadata: oT
        }, Yo, Qo), (0, uT.h)(null, null, QT, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: TT => "maximumThickness" in TT,
            get: TT => TT.maximumThickness,
            set: (TT, oT) => {
              TT.maximumThickness = oT
            }
          },
          metadata: oT
        }, Oo, Ho), (0, uT.h)(null, null, OT, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: TT => "useThicknessAsDepth" in TT,
            get: TT => TT.useThicknessAsDepth,
            set: (TT, oT) => {
              TT.useThicknessAsDepth = oT
            }
          },
          metadata: oT
        }, no, qo), (0, uT.h)(null, null, nT, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColor" in TT,
            get: TT => TT.tintColor,
            set: (TT, oT) => {
              TT.tintColor = oT
            }
          },
          metadata: oT
        }, Zo, so), (0, uT.h)(null, null, qT, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "tintColorAtDistance" in TT,
            get: TT => TT.tintColorAtDistance,
            set: (TT, oT) => {
              TT.tintColorAtDistance = oT
            }
          },
          metadata: oT
        }, to, Go), (0, uT.h)(null, null, lT, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: TT => "dispersion" in TT,
            get: TT => TT.dispersion,
            set: (TT, oT) => {
              TT.dispersion = oT
            }
          },
          metadata: oT
        }, po, bo), (0, uT.h)(null, null, sT, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffusionDistance" in TT,
            get: TT => TT.diffusionDistance,
            set: (TT, oT) => {
              TT.diffusionDistance = oT
            }
          },
          metadata: oT
        }, yo, No), (0, uT.h)(null, null, yT, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "translucencyColor" in TT,
            get: TT => TT.translucencyColor,
            set: (TT, oT) => {
              TT.translucencyColor = oT
            }
          },
          metadata: oT
        }, zI, kI), (0, uT.h)(null, null, To, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: TT => "applyAlbedoAfterSubSurface" in TT,
            get: TT => TT.applyAlbedoAfterSubSurface,
            set: (TT, oT) => {
              TT.applyAlbedoAfterSubSurface = oT
            }
          },
          metadata: oT
        }, SI, DI), (0, uT.h)(null, null, oo, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: TT => "legacyTranslucency" in TT,
            get: TT => TT.legacyTranslucency,
            set: (TT, oT) => {
              TT.legacyTranslucency = oT
            }
          },
          metadata: oT
        }, LI, xI), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, TT.DEFAULT_LEGACY_TRANSLUCENCY = !1, TT
    })();
    var Fo = IT(39143),
      So = IT(39117),
      Do = IT(39152),
      Lo = IT(39161),
      xo = IT(39170),
      co = IT(39173),
      Ko = IT(39175),
      Mo = IT(39184),
      ro = IT(38643);
    const Ao = {
      effect: null,
      subMesh: null
    };
    class go extends((0, Ko.e)((0, co.c)(qT.d))) {}
    class ho extends((0, pT.h)(go)) {
      constructor(TT) {
        super(TT), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class wo extends((0, Mo.d)(yT.e)) {}
    let mo = (() => {
      var TT, oT;
      let iT, zT = wo,
        WT = [],
        XT = [];
      return TT = class extends zT {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(TT) {
          this._realTimeFiltering = TT, this.roT(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(TT) {
          this._realTimeFilteringQuality = TT, this.roT(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, uT.b)(this, oT, "f")
        }
        set debugMode(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        constructor(IT, iT) {
          super(IT, iT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new HT.n(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = GT.e.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new GT.e(0, 0, 0), this._albedoColor = new GT.e(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new GT.e(1, 1, 1), this._reflectionColor = new GT.e(1, 1, 1), this._emissiveColor = new GT.e(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = TT.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new fT.f(16), this._globalAmbientColor = new GT.e(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, oT.set(this, (0, uT.j)(this, WT, 0)), this.debugLimit = ((0, uT.j)(this, XT), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new sT(this), this.clearCoat = new To(this), this.iridescence = new Io(this), this.anisotropy = new zo(this), this.sheen = new Wo(this), this.subSurface = new Bo(this), this.detailMap = new Fo.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), NT.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = aT(this.pC()), this.prePassConfiguration = new tT.d
        }
        get hasRenderTargetTextures() {
          return !!(NT.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === TT.PBRMATERIAL_OPAQUE || this._transparencyMode === TT.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === TT.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== TT.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(TT, oT, IT) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const iT = oT._drawWrapper;
          if (iT.effect && this.isFrozen && iT._wasPreviouslyReady && iT._wasPreviouslyUsingInstances === IT) return !0;
          oT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), oT.materialDefines = new ho(this._eventInfo.defineNames));
          const zT = oT.materialDefines;
          if (this._isReadyForSubMesh(oT)) return !0;
          const kT = this.pC(),
            WT = kT.Zc();
          if (zT._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, kT.texturesEnabled)) {
            if (this._albedoTexture && NT.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && NT.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && NT.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && NT.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && NT.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const TT = this._getReflectionTexture();
            if (TT && NT.c.ReflectionTextureEnabled) {
              if (!TT.isReadyOrNotBlocking()) return !1;
              if (TT.irradianceTexture) {
                if (!TT.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!TT.sphericalPolynomial && TT.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && NT.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && NT.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (NT.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (WT.getCaps().standardDerivatives && this._bumpTexture && NT.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && NT.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = zT, this._eventInfo.subMesh = oT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (zT._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (zT.AREALIGHTUSED || zT.CLUSTLIGHT_BATCH)
            for (let DT = 0; DT < TT.lightSources.length; DT++)
              if (!TT.lightSources[DT]._isReady()) return !1;
          if (WT.getCaps().standardDerivatives || TT.isVerticesDataPresent(nT.i.NormalKind) || (TT.createNormals(!0), ET.d.Warn("PBRMaterial: Normals have been created for the mesh: " + TT.name)), !(0, dT.c)(kT, TT, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const XT = oT.effect,
            BT = zT._areLightsDisposed,
            FT = this._prepareEffect(TT, oT.getRenderingMesh(), zT, this.onCompiled, this.onError, IT, null);
          let ST = !1;
          if (FT)
            if (this._onEffectCreatedObservable && (Ao.effect = FT, Ao.subMesh = oT, this._onEffectCreatedObservable.notifyObservers(Ao)), this.allowShaderHotSwapping && XT && !FT.isReady()) {
              if (zT.markAsUnprocessed(), ST = this.isFrozen, BT) return zT._areLightsDisposed = !0, !1
            } else kT.resetCachedMaterial(), oT.setEffect(FT, zT, this._materialContext);
          return !(!oT.effect || !oT.effect.isReady()) && (zT._renderId = kT.getRenderId(), iT._wasPreviouslyReady = !ST, iT._wasPreviouslyUsingInstances = !!IT, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(oT, IT, iT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(oT, IT, iT, WT, XT), !iT.isDirty) return null;
          iT.markAsProcessed();
          const BT = this.pC().Zc(),
            FT = new PT.e;
          let ST = 0;
          iT.USESPHERICALINVERTEX && FT.addFallback(ST++, "USESPHERICALINVERTEX"), iT.FOG && FT.addFallback(ST, "FOG"), iT.SPECULARAA && FT.addFallback(ST, "SPECULARAA"), iT.POINTSIZE && FT.addFallback(ST, "POINTSIZE"), iT.LOGARITHMICDEPTH && FT.addFallback(ST, "LOGARITHMICDEPTH"), iT.PARALLAX && FT.addFallback(ST, "PARALLAX"), iT.PARALLAX_RHS && FT.addFallback(ST, "PARALLAX_RHS"), iT.PARALLAXOCCLUSION && FT.addFallback(ST++, "PARALLAXOCCLUSION"), iT.ENVIRONMENTBRDF && FT.addFallback(ST++, "ENVIRONMENTBRDF"), iT.TANGENT && FT.addFallback(ST++, "TANGENT"), iT.BUMP && FT.addFallback(ST++, "BUMP"), ST = (0, dT.x)(iT, FT, this._maxSimultaneousLights, ST), iT.SPECULARTERM && FT.addFallback(ST++, "SPECULARTERM"), iT.USESPHERICALFROMREFLECTIONMAP && FT.addFallback(ST++, "USESPHERICALFROMREFLECTIONMAP"), iT.USEIRRADIANCEMAP && FT.addFallback(ST++, "USEIRRADIANCEMAP"), iT.LIGHTMAP && FT.addFallback(ST++, "LIGHTMAP"), iT.NORMAL && FT.addFallback(ST++, "NORMAL"), iT.AMBIENT && FT.addFallback(ST++, "AMBIENT"), iT.EMISSIVE && FT.addFallback(ST++, "EMISSIVE"), iT.VERTEXCOLOR && FT.addFallback(ST++, "VERTEXCOLOR"), iT.MORPHTARGETS && FT.addFallback(ST++, "MORPHTARGETS"), iT.MULTIVIEW && FT.addFallback(0, "MULTIVIEW");
          const DT = [nT.i.PositionKind];
          iT.NORMAL && DT.push(nT.i.NormalKind), iT.TANGENT && DT.push(nT.i.TangentKind);
          for (let TT = 1; TT <= 6; ++TT) iT["UV" + TT] && DT.push(`uv${1===TT?"":TT}`);
          iT.VERTEXCOLOR && DT.push(nT.i.ColorKind), (0, dT.C)(DT, oT, iT, FT), (0, dT.D)(DT, iT), (0, dT.F)(DT, oT, iT), (0, dT.y)(DT, oT, iT);
          let LT = "pbr";
          const xT = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            cT = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, dT.$)(xT, cT, !0);
          const KT = ["Material", "Scene", "Mesh"],
            MT = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: iT.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = FT, this._eventInfo.fallbackRank = ST, this._eventInfo.defines = iT, this._eventInfo.uniforms = xT, this._eventInfo.attributes = DT, this._eventInfo.samplers = cT, this._eventInfo.uniformBuffersNames = KT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = oT, this._eventInfo.indexParameters = MT, this._callbackPluginEventGeneric(128, this._eventInfo), xo.d.AddUniformsAndSamplers(xT, cT), tT.d.AddUniforms(xT), tT.d.AddSamplers(cT), (0, So.b)(xT), this._useVertexPulling) {
            const TT = IT?.geometry;
            TT && (this._vertexPullingMetadata = (0, Do.d)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, oT) => {
              xT.push(`vp_${oT}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          bT.c && (bT.c.PrepareUniforms(xT, iT), bT.c.PrepareSamplers(cT, iT)), (0, dT.ab)({
            uniformsNames: xT,
            uniformBuffersNames: KT,
            samplers: cT,
            defines: iT,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const rT = {};
          this.customShaderNameResolve && (LT = this.customShaderNameResolve(LT, xT, KT, cT, iT, DT, rT));
          const AT = iT.toString(),
            gT = BT.createEffect(LT, {
              attributes: DT,
              uniformsNames: xT,
              uniformBuffersNames: KT,
              samplers: cT,
              defines: AT,
              fallbacks: FT,
              onCompiled: zT,
              onError: kT,
              indexParameters: MT,
              processFinalCode: rT.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: iT.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, BT);
          return this._eventInfo.customCode = void 0, gT
        }
        _prepareDefines(oT, IT, iT) {
          let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const WT = IT.hasThinInstances,
            XT = this.pC(),
            BT = XT.Zc();
          (0, dT.M)(XT, oT, iT, !0, this._maxSimultaneousLights, this._disableLighting), iT._needNormals = !0, (0, dT.V)(XT, iT);
          const FT = this.needAlphaBlendingForMesh(oT) && this.pC().useOrderIndependentTransparency;
          if ((0, dT.X)(XT, iT, this.canRenderToMRT && !FT), (0, dT.W)(XT, iT, FT), xo.d.PrepareDefines(BT.currentRenderPassId, oT, iT), iT.METALLICWORKFLOW = this.isMetallicWorkflow(), iT._areTexturesDirty) {
            iT._needUVs = !1;
            for (let TT = 1; TT <= 6; ++TT) iT["MAINUV" + TT] = !1;
            if (XT.texturesEnabled) {
              iT.ALBEDODIRECTUV = 0, iT.BASE_WEIGHTDIRECTUV = 0, iT.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, iT.AMBIENTDIRECTUV = 0, iT.OPACITYDIRECTUV = 0, iT.EMISSIVEDIRECTUV = 0, iT.REFLECTIVITYDIRECTUV = 0, iT.MICROSURFACEMAPDIRECTUV = 0, iT.METALLIC_REFLECTANCEDIRECTUV = 0, iT.REFLECTANCEDIRECTUV = 0, iT.BUMPDIRECTUV = 0, iT.LIGHTMAPDIRECTUV = 0, BT.getCaps().textureLOD && (iT.LODBASEDMICROSFURACE = !0), this._albedoTexture && NT.c.DiffuseTextureEnabled ? ((0, dT.Q)(this._albedoTexture, iT, "ALBEDO"), iT.GAMMAALBEDO = this._albedoTexture.gammaSpace) : iT.ALBEDO = !1, this._baseWeightTexture && NT.c.BaseWeightTextureEnabled ? (0, dT.Q)(this._baseWeightTexture, iT, "BASE_WEIGHT") : iT.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && NT.c.BaseDiffuseRoughnessTextureEnabled ? (0, dT.Q)(this._baseDiffuseRoughnessTexture, iT, "BASE_DIFFUSE_ROUGHNESS") : iT.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && NT.c.AmbientTextureEnabled ? ((0, dT.Q)(this._ambientTexture, iT, "AMBIENT"), iT.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : iT.AMBIENT = !1, this._opacityTexture && NT.c.OpacityTextureEnabled ? ((0, dT.Q)(this._opacityTexture, iT, "OPACITY"), iT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : iT.OPACITY = !1;
              const TT = this._getReflectionTexture(),
                oT = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || BT.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, dT.J)(XT, TT, iT, this.realTimeFiltering, this.realTimeFilteringQuality, !oT), this._lightmapTexture && NT.c.LightmapTextureEnabled ? ((0, dT.Q)(this._lightmapTexture, iT, "LIGHTMAP"), iT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, iT.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, iT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : iT.LIGHTMAP = !1, this._emissiveTexture && NT.c.EmissiveTextureEnabled ? ((0, dT.Q)(this._emissiveTexture, iT, "EMISSIVE"), iT.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : iT.EMISSIVE = !1, NT.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, dT.Q)(this._metallicTexture, iT, "REFLECTIVITY"), iT.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, iT.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, iT.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, iT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, iT.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, dT.Q)(this._reflectivityTexture, iT, "REFLECTIVITY"), iT.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, iT.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, iT.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : iT.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (iT.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, dT.Q)(this._metallicReflectanceTexture, iT, "METALLIC_REFLECTANCE"), iT.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : iT.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, dT.Q)(this._reflectanceTexture, iT, "REFLECTANCE"), iT.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : iT.REFLECTANCE = !1) : (iT.METALLIC_REFLECTANCE = !1, iT.REFLECTANCE = !1), this._microSurfaceTexture ? (0, dT.Q)(this._microSurfaceTexture, iT, "MICROSURFACEMAP") : iT.MICROSURFACEMAP = !1) : (iT.REFLECTIVITY = !1, iT.MICROSURFACEMAP = !1), BT.getCaps().standardDerivatives && this._bumpTexture && NT.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, dT.Q)(this._bumpTexture, iT, "BUMP"), this._useParallax && this._albedoTexture && NT.c.DiffuseTextureEnabled ? (iT.PARALLAX = !0, iT.PARALLAX_RHS = XT.useRightHandedSystem, iT.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : iT.PARALLAX = !1, iT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (iT.BUMP = !1, iT.PARALLAX = !1, iT.PARALLAX_RHS = !1, iT.PARALLAXOCCLUSION = !1, iT.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && NT.c.ReflectionTextureEnabled ? (iT.ENVIRONMENTBRDF = !0, iT.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (iT.ENVIRONMENTBRDF = !1, iT.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? iT.ALPHAFROMALBEDO = !0 : iT.ALPHAFROMALBEDO = !1
            }
            iT.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === TT.LIGHTFALLOFF_STANDARD ? (iT.USEPHYSICALLIGHTFALLOFF = !1, iT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === TT.LIGHTFALLOFF_GLTF ? (iT.USEPHYSICALLIGHTFALLOFF = !1, iT.USEGLTFLIGHTFALLOFF = !0) : (iT.USEPHYSICALLIGHTFALLOFF = !0, iT.USEGLTFLIGHTFALLOFF = !1), iT.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? iT.TWOSIDEDLIGHTING = !0 : iT.TWOSIDEDLIGHTING = !1, iT.MIRRORED = !!XT._mirroredCameraPosition, iT.SPECULARAA = BT.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(iT._areTexturesDirty || iT._areMiscDirty) && (iT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, iT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, iT.ALPHABLEND = this.needAlphaBlendingForMesh(oT), iT.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, iT.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), iT._areTexturesDirty && (iT.TEXTURE_REPETITION_MODE = BT.version > 1 || BT.isWebGPU ? this.textureRepetitionMode : 0), iT._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(iT), iT.FORCENORMALFORWARD = this._forceNormalForward, iT.RADIANCEOCCLUSION = this._useRadianceOcclusion, iT.HORIZONOCCLUSION = this._useHorizonOcclusion, iT._areMiscDirty && ((0, dT.U)(oT, XT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(oT), iT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, IT, this._isVertexOutputInvariant), iT.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !oT.isVerticesDataPresent(nT.i.NormalKind), iT.DEBUGMODE = this._debugMode), (0, dT.I)(XT, BT, this, iT, !!zT, kT, WT), this._eventInfo.defines = iT, this._eventInfo.mesh = oT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dT.H)(oT, iT, !0, !0, !0, this._transparencyMode !== TT.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(TT, oT, IT) {
          const iT = {
            clipPlane: !1,
            useInstances: !1,
            ...IT
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const IT = new ho(this._eventInfo.defineNames),
              zT = this._prepareEffect(TT, TT, IT, void 0, void 0, iT.useInstances, iT.clipPlane);
            this._onEffectCreatedObservable && (Ao.effect = zT, Ao.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Ao)), zT.isReady() ? oT && oT(this) : zT.onCompileObservable.add((() => {
              oT && oT(this)
            }))
          })()
        }
        buildUniformLayout() {
          const TT = this._uniformBuffer;
          TT.addUniform("vAlbedoInfos", 2), TT.addUniform("vBaseWeightInfos", 2), TT.addUniform("vBaseDiffuseRoughnessInfos", 2), TT.addUniform("vAmbientInfos", 4), TT.addUniform("vOpacityInfos", 2), TT.addUniform("vEmissiveInfos", 2), TT.addUniform("vLightmapInfos", 2), TT.addUniform("vReflectivityInfos", 3), TT.addUniform("vMicroSurfaceSamplerInfos", 2), TT.addUniform("vBumpInfos", 3), TT.addUniform("albedoMatrix", 16), TT.addUniform("baseWeightMatrix", 16), TT.addUniform("baseDiffuseRoughnessMatrix", 16), TT.addUniform("ambientMatrix", 16), TT.addUniform("opacityMatrix", 16), TT.addUniform("emissiveMatrix", 16), TT.addUniform("lightmapMatrix", 16), TT.addUniform("reflectivityMatrix", 16), TT.addUniform("microSurfaceSamplerMatrix", 16), TT.addUniform("bumpMatrix", 16), TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("vAlbedoColor", 4), TT.addUniform("baseWeight", 1), TT.addUniform("baseDiffuseRoughness", 1), TT.addUniform("vLightingIntensity", 4), TT.addUniform("pointSize", 1), TT.addUniform("vReflectivityColor", 4), TT.addUniform("vEmissiveColor", 3), TT.addUniform("vAmbientColor", 3), TT.addUniform("vDebugMode", 2), TT.addUniform("vMetallicReflectanceFactors", 4), TT.addUniform("vMetallicReflectanceInfos", 2), TT.addUniform("metallicReflectanceMatrix", 16), TT.addUniform("vReflectanceInfos", 2), TT.addUniform("reflectanceMatrix", 16), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), (0, dT.Y)(TT, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(TT, oT, IT) {
          const iT = this.pC(),
            zT = IT.materialDefines;
          if (!zT) return;
          const kT = IT.effect;
          if (!kT) return;
          this._activeEffect = kT, oT.getMeshUniformBuffer().bindToEffect(kT, "Mesh"), oT.transferToEffect(TT);
          const WT = iT.Zc();
          this._uniformBuffer.bindToEffect(kT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, iT, oT, TT, this.isFrozen), xo.d.Bind(WT.currentRenderPassId, this._activeEffect, oT, TT, this);
          const XT = iT.activeCamera;
          XT ? this._uniformBuffer.updateFloat4("cameraInfo", XT.minZ, XT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const BT = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", BT[0], BT[1], BT[2], BT[3]), this._eventInfo.subMesh = IT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), zT.OBJECTSPACE_NORMALMAP && (TT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const FT = this._mustRebind(iT, kT, IT, oT.visibility),
            ST = WT._features.needToAlwaysBindUniformBuffers;
          (0, dT.d)(oT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Do.b)(this._activeEffect, this._vertexPullingMetadata);
          let DT = null;
          const LT = this._uniformBuffer;
          if (FT) {
            if (this.bindViewProjection(kT), DT = this._getReflectionTexture(), !LT.useUbo || !this.isFrozen || !LT.isSync || IT._drawWrapper._forceRebindOnNextCall) {
              if (iT.texturesEnabled && (this._albedoTexture && NT.c.DiffuseTextureEnabled && (LT.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, dT.v)(this._albedoTexture, LT, "albedo")), this._baseWeightTexture && NT.c.BaseWeightTextureEnabled && (LT.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, dT.v)(this._baseWeightTexture, LT, "baseWeight")), this._baseDiffuseRoughnessTexture && NT.c.BaseDiffuseRoughnessTextureEnabled && (LT.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, dT.v)(this._baseDiffuseRoughnessTexture, LT, "baseDiffuseRoughness")), this._ambientTexture && NT.c.AmbientTextureEnabled && (LT.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, dT.v)(this._ambientTexture, LT, "ambient")), this._opacityTexture && NT.c.OpacityTextureEnabled && (LT.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, dT.v)(this._opacityTexture, LT, "opacity")), this._emissiveTexture && NT.c.EmissiveTextureEnabled && (LT.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, dT.v)(this._emissiveTexture, LT, "emissive")), this._lightmapTexture && NT.c.LightmapTextureEnabled && (LT.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, dT.v)(this._lightmapTexture, LT, "lightmap")), NT.c.SpecularTextureEnabled && (this._metallicTexture ? (LT.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, dT.v)(this._metallicTexture, LT, "reflectivity")) : this._reflectivityTexture && (LT.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, dT.v)(this._reflectivityTexture, LT, "reflectivity")), this._metallicReflectanceTexture && (LT.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, dT.v)(this._metallicReflectanceTexture, LT, "metallicReflectance")), this._reflectanceTexture && zT.REFLECTANCE && (LT.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, dT.v)(this._reflectanceTexture, LT, "reflectance")), this._microSurfaceTexture && (LT.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, dT.v)(this._microSurfaceTexture, LT, "microSurfaceSampler"))), this._bumpTexture && WT.getCaps().standardDerivatives && NT.c.BumpTextureEnabled && !this._disableBumpMap && (LT.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, dT.v)(this._bumpTexture, LT, "bump"), iT._mirroredCameraPosition ? LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, dT.g)(iT, zT, LT, this._reflectionColor, DT, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && LT.updateFloat("pointSize", this.pointSize), zT.METALLICWORKFLOW) {
                GT.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, GT.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const TT = this.subSurface?._indexOfRefraction ?? 1.5,
                  oT = 1;
                GT.m.Color4[0].b = TT;
                const IT = Math.pow((TT - oT) / (TT + oT), 2);
                GT.m.Color4[0].a = IT, LT.updateDirectColor4("vReflectivityColor", GT.m.Color4[0]), LT.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else LT.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              LT.updateColor3("vEmissiveColor", NT.c.EmissiveTextureEnabled ? this._emissiveColor : GT.e.BlackReadOnly), !zT.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? LT.updateColor4("vAlbedoColor", this._albedoColor, 1) : LT.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), LT.updateFloat("baseWeight", this._baseWeight), LT.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * iT.environmentIntensity, this._lightingInfos.w = this._specularIntensity, LT.updateVector4("vLightingIntensity", this._lightingInfos), iT.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), LT.updateColor3("vAmbientColor", this._globalAmbientColor), LT.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            iT.texturesEnabled && (this._albedoTexture && NT.c.DiffuseTextureEnabled && LT.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && NT.c.BaseWeightTextureEnabled && LT.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && NT.c.BaseDiffuseRoughnessTextureEnabled && LT.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && NT.c.AmbientTextureEnabled && LT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && NT.c.OpacityTextureEnabled && LT.setTexture("opacitySampler", this._opacityTexture), (0, dT.j)(iT, zT, LT, DT, this.realTimeFiltering), zT.ENVIRONMENTBRDF && LT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && NT.c.EmissiveTextureEnabled && LT.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && NT.c.LightmapTextureEnabled && LT.setTexture("lightmapSampler", this._lightmapTexture), NT.c.SpecularTextureEnabled && (this._metallicTexture ? LT.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && LT.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && LT.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && zT.REFLECTANCE && LT.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && LT.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && WT.getCaps().standardDerivatives && NT.c.BumpTextureEnabled && !this._disableBumpMap && LT.setTexture("bumpSampler", this._bumpTexture)), this.pC().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(oT) && this.pC().depthPeelingRenderer.bind(kT), this._eventInfo.subMesh = IT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, So.d)(this._activeEffect, this, iT), this.bindEyePosition(kT)
          } else ST && (this._needToBindSceneUbo = !0);
          !FT && this.isFrozen && !ST || !iT.lightsEnabled || this._disableLighting || (0, dT.m)(iT, oT, this._activeEffect, zT, this._maxSimultaneousLights), !FT && this.isFrozen || ((iT.fogEnabled && oT.applyFog && iT.fogMode !== OT.d.FOGMODE_NONE || DT || this.subSurface.refractionTexture || oT.receiveShadows || zT.PREPASS || zT.CLUSTLIGHT_BATCH) && this.bindView(kT), (0, dT.e)(iT, oT, this._activeEffect, !0), zT.NUM_MORPH_INFLUENCERS && (0, dT.r)(oT, this._activeEffect), zT.BAKED_VERTEX_ANIMATION_TEXTURE && oT.bakedVertexAnimationManager?.bind(kT, zT.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, dT.q)(zT, this._activeEffect, iT)), this._afterBind(oT, this._activeEffect, IT), LT.update()
        }
        getAnimatables() {
          const TT = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && TT.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && TT.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && TT.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && TT.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && TT.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && TT.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && TT.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? TT.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && TT.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && TT.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && TT.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && TT.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && TT.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && TT.push(this._microSurfaceTexture), TT
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.pC().environmentTexture
        }
        getActiveTextures() {
          const TT = super.getActiveTextures();
          return this._albedoTexture && TT.push(this._albedoTexture), this._baseWeightTexture && TT.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && TT.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && TT.push(this._ambientTexture), this._opacityTexture && TT.push(this._opacityTexture), this._reflectionTexture && TT.push(this._reflectionTexture), this._emissiveTexture && TT.push(this._emissiveTexture), this._reflectivityTexture && TT.push(this._reflectivityTexture), this._metallicTexture && TT.push(this._metallicTexture), this._metallicReflectanceTexture && TT.push(this._metallicReflectanceTexture), this._reflectanceTexture && TT.push(this._reflectanceTexture), this._microSurfaceTexture && TT.push(this._microSurfaceTexture), this._bumpTexture && TT.push(this._bumpTexture), this._lightmapTexture && TT.push(this._lightmapTexture), TT
        }
        hasTexture(TT) {
          return !!super.hasTexture(TT) || (this._albedoTexture === TT || (this._baseWeightTexture === TT || (this._baseDiffuseRoughnessTexture === TT || (this._ambientTexture === TT || (this._opacityTexture === TT || (this._reflectionTexture === TT || (this._emissiveTexture === TT || (this._reflectivityTexture === TT || (this._metallicTexture === TT || (this._metallicReflectanceTexture === TT || (this._reflectanceTexture === TT || (this._microSurfaceTexture === TT || (this._bumpTexture === TT || this._lightmapTexture === TT)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const TT = this.pC().enableSubSurfaceForPrePass();
          return TT && (TT.enabled = !0), !0
        }
        dispose(TT, oT) {
          this._breakShaderLoadedCheck = !0, oT && (this._environmentBRDFTexture && this.pC().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, oT)
        }
      }, oT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(zT[Symbol.metadata] ?? null) : void 0;
        iT = [(0, vT.h)("_markAllSubMeshesAsMiscDirty")], (0, uT.h)(TT, null, iT, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "debugMode" in TT,
            get: TT => TT.debugMode,
            set: (TT, oT) => {
              TT.debugMode = oT
            }
          },
          metadata: oT
        }, WT, XT), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT.PBRMATERIAL_OPAQUE = kT.c.MATERIAL_OPAQUE, TT.PBRMATERIAL_ALPHATEST = kT.c.MATERIAL_ALPHATEST, TT.PBRMATERIAL_ALPHABLEND = kT.c.MATERIAL_ALPHABLEND, TT.PBRMATERIAL_ALPHATESTANDBLEND = kT.c.MATERIAL_ALPHATESTANDBLEND, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, TT.LIGHTFALLOFF_PHYSICAL = 0, TT.LIGHTFALLOFF_GLTF = 1, TT.LIGHTFALLOFF_STANDARD = 2, TT.ForceGLSL = !1, TT._ShaderLoader = new Lo.c((() => [Promise.all([IT.e(307), IT.e(318)]).then((() => IT(60392))), Promise.all([IT.e(312), IT.e(308), IT.e(372), IT.e(321), IT.e(371)]).then((() => IT(60414)))]), (() => [Promise.all([IT.e(326), IT.e(328), IT.e(335)]).then((() => IT(60499))), Promise.all([IT.e(326), IT.e(329), IT.e(375), IT.e(339), IT.e(374)]).then((() => IT(60522)))])), TT
    })();
    Object.getOwnPropertyDescriptor(mo.prototype, "decalMap") || Object.defineProperty(mo.prototype, "decalMap", (0, ro.f)("PBRBaseMaterial", "decalMap")), (0, IT(40643).c)();
    var eo = IT(38799);
    var Ro = IT(38886),
      uo = IT(40635),
      vo = IT(38594),
      Eo = IT(38607),
      fo = IT(38708);
    let Co = !1;
    const jo = new GT.i,
      Jo = new GT.i;
    class Uo extends uo.c {
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
      set wrapU(TT) {
        if (this._textures)
          for (let oT = 0; oT < this._textures.length; oT++) this._textures[oT].wrapU = TT
      }
      set wrapV(TT) {
        if (this._textures)
          for (let oT = 0; oT < this._textures.length; oT++) this._textures[oT].wrapV = TT
      }
      constructor(TT, oT, IT, iT, zT, kT) {
        const WT = !(!zT || !zT.generateMipMaps) && zT.generateMipMaps,
          XT = !(!zT || !zT.generateDepthTexture) && zT.generateDepthTexture,
          BT = zT && zT.depthTextureFormat ? zT.depthTextureFormat : 15,
          FT = !zT || void 0 === zT.doNotChangeAspectRatio || zT.doNotChangeAspectRatio,
          ST = !(!zT || !zT.drawOnlyOnFirstAttachmentByDefault) && zT.drawOnlyOnFirstAttachmentByDefault;
        if (super(TT, oT, iT, WT, FT, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Co || (Co = !0, Eo.ThinEngine.prototype.restoreSingleAttachment = function() {
            const TT = this._gl;
            this.bindAttachments([TT.BACK])
          }, Eo.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const TT = this._gl;
            this.bindAttachments([TT.COLOR_ATTACHMENT0])
          }, Eo.ThinEngine.prototype.buildTextureLayout = function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const IT = this._gl,
              iT = [];
            if (oT) iT.push(IT.BACK);
            else
              for (let zT = 0; zT < TT.length; zT++) TT[zT] ? iT.push(IT["COLOR_ATTACHMENT" + zT]) : iT.push(IT.NONE);
            return iT
          }, Eo.ThinEngine.prototype.bindAttachments = function(TT) {
            const oT = this._gl,
              IT = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, IT)
              for (let iT = 0; iT < TT.length; iT++) TT[iT] !== oT.NONE && IT[iT] && (0, fo.i)(IT[iT].format) && (this._integerMRTAttachmentsMask |= 1 << iT);
            oT.drawBuffers(TT)
          }, Eo.ThinEngine.prototype.clearAttachments = function(TT, oT, IT, iT) {
            let zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const WT = this._currentRenderTarget?.textures;
            let XT = !1;
            if (IT && TT && WT)
              for (let BT = 0; BT < oT.length; BT++) {
                const TT = WT[BT];
                if (oT[BT] !== this._gl.NONE && TT && (0, fo.i)(TT.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  XT = !0;
                  break
                }
              }
            if (!XT || !TT || !WT) return this.bindAttachments(oT), void this.clear(TT, IT, iT, zT, kT);
            this.bindAttachments(oT), this._applyColorWriteState();
            for (let BT = 0; BT < oT.length; BT++) {
              const IT = WT[BT];
              if (oT[BT] !== this._gl.NONE && IT) {
                let oT = TT;
                if ((0, fo.i)(IT.format)) {
                  const iT = (0, fo.m)(IT.type);
                  oT = iT ? jo : Jo;
                  const zT = iT ? 255 : 1;
                  oT.r = Math.round(TT.r * zT), oT.g = Math.round(TT.g * zT), oT.b = Math.round(TT.b * zT), oT.a = Math.round(TT.a * zT)
                }
                this._clearColorAttachment(BT, oT, IT.format, IT.type)
              }
            }
            if (iT || zT) {
              const TT = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, iT, zT, kT)
              } finally {
                this._integerMRTAttachmentsMask = TT
              }
            }
          }, Eo.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              IT = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, TT.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(TT), oT || this.generateMipMapsMultiFramebuffer(TT), IT && (TT._MSAAFramebuffer && this._bindUnboundFramebuffer(TT._framebuffer), IT()), this._bindUnboundFramebuffer(null)
          }, Eo.ThinEngine.prototype.createMultipleRenderTarget = function(TT, oT) {
            let IT, iT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              zT = !1,
              kT = !0,
              WT = !1,
              XT = !1,
              BT = 1,
              FT = 1,
              ST = [],
              DT = [],
              LT = [],
              xT = [],
              cT = [],
              KT = [],
              MT = [],
              rT = [],
              AT = [],
              gT = !1;
            const hT = this._createHardwareRenderTargetWrapper(!0, !1, TT);
            void 0 !== oT && (zT = void 0 !== oT.generateMipMaps && oT.generateMipMaps, kT = void 0 === oT.generateDepthBuffer || oT.generateDepthBuffer, WT = void 0 !== oT.generateStencilBuffer && oT.generateStencilBuffer, XT = void 0 !== oT.generateDepthTexture && oT.generateDepthTexture, BT = oT.wWT ?? 1, FT = oT.samples ?? FT, ST = oT.types || ST, DT = oT.samplingModes || DT, LT = oT.useSRGBBuffers || LT, xT = oT.formats || xT, cT = oT.targetTypes || cT, KT = oT.faceIndex || KT, MT = oT.layerIndex || MT, rT = oT.layerCounts || rT, AT = oT.labels || AT, gT = oT.dontCreateTextures ?? !1, this.rK > 1 && (13 === oT.depthTextureFormat || 17 === oT.depthTextureFormat || 16 === oT.depthTextureFormat || 14 === oT.depthTextureFormat || 18 === oT.depthTextureFormat) && (IT = oT.depthTextureFormat)), void 0 === IT && (IT = WT ? 13 : 14);
            const wT = this._gl,
              mT = this._currentFramebuffer,
              eT = wT.createFramebuffer();
            this._bindUnboundFramebuffer(eT);
            const RT = TT.width ?? TT,
              uT = TT.height ?? TT,
              vT = [],
              fT = [],
              CT = this.rK > 1 && (13 === IT || 17 === IT || 18 === IT);
            hT.label = oT?.label ?? "MultiRenderTargetWrapper", hT._framebuffer = eT, hT._generateDepthBuffer = XT || kT, hT._generateStencilBuffer = XT ? CT : WT, hT._depthStencilBuffer = this._setupFramebufferDepthAttachments(hT._generateStencilBuffer, hT._generateDepthBuffer, RT, uT, 1, IT), hT._attachments = fT;
            for (let jT = 0; jT < BT; jT++) {
              let TT = DT[jT] || 3,
                oT = ST[jT] || 0,
                IT = LT[jT] || !1;
              const iT = xT[jT] || 5,
                kT = cT[jT] || 3553,
                WT = rT[jT] ?? 1;
              (1 !== oT || this._caps.textureFloatLinearFiltering) && (2 !== oT || this._caps.textureHalfFloatLinearFiltering) || (TT = 1);
              const XT = this._getSamplingParameters(TT, zT);
              1 !== oT || this._caps.textureFloat || (oT = 0, ET.d.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), IT = IT && this._caps.supportSRGBBuffers && (this.rK > 1 || this.isWebGPU);
              const BT = this.rK > 1,
                FT = wT[BT ? "COLOR_ATTACHMENT" + jT : "COLOR_ATTACHMENT" + jT + "_WEBGL"];
              if (fT.push(FT), -1 === kT || gT) continue;
              const KT = new vo.e(this, 6);
              vT[jT] = KT, wT.activeTexture(wT["TEXTURE" + jT]), wT.bindTexture(kT, KT._hardwareTexture.underlyingResource), wT.texParameteri(kT, wT.TEXTURE_MAG_FILTER, XT.mag), wT.texParameteri(kT, wT.TEXTURE_MIN_FILTER, XT.min), wT.texParameteri(kT, wT.TEXTURE_WRAP_S, wT.CLAMP_TO_EDGE), wT.texParameteri(kT, wT.TEXTURE_WRAP_T, wT.CLAMP_TO_EDGE);
              const MT = this._getRGBABufferInternalSizedFormat(oT, iT, IT),
                mT = this._getInternalFormat(iT),
                eT = this._getWebGLTextureType(oT);
              if (!BT || 35866 !== kT && 32879 !== kT)
                if (34067 === kT) {
                  for (let TT = 0; TT < 6; TT++) wT.texImage2D(wT.TEXTURE_CUBE_MAP_POSITIVE_X + TT, 0, MT, RT, uT, 0, mT, eT, null);
                  KT.isCube = !0
                } else wT.texImage2D(wT.TEXTURE_2D, 0, MT, RT, uT, 0, mT, eT, null);
              else 35866 === kT ? KT.is2DArray = !0 : KT.is3D = !0, KT.baseDepth = KT.depth = WT, wT.texImage3D(kT, 0, MT, RT, uT, WT, 0, mT, eT, null);
              zT && wT.generateMipmap(kT), this._bindTextureDirectly(kT, null), KT.baseWidth = RT, KT.baseHeight = uT, KT.width = RT, KT.height = uT, KT.isReady = !0, KT.samples = 1, KT.generateMipMaps = zT, KT.samplingMode = TT, KT.type = oT, KT._useSRGBBuffer = IT, KT.format = iT, KT.label = AT[jT] ?? hT.label + "-Texture" + jT, this._internalTexturesCache.push(KT)
            }
            if (XT && this._caps.depthTextureExtension && !gT) {
              const TT = new vo.e(this, 14);
              let oT = 5,
                iT = wT.DEPTH_COMPONENT16,
                kT = wT.DEPTH_COMPONENT,
                WT = wT.UNSIGNED_SHORT,
                XT = wT.DEPTH_ATTACHMENT;
              this.rK < 2 ? iT = wT.DEPTH_COMPONENT : 14 === IT ? (oT = 1, WT = wT.FLOAT, iT = wT.DEPTH_COMPONENT32F) : 18 === IT ? (oT = 0, WT = wT.FLOAT_32_UNSIGNED_INT_24_8_REV, iT = wT.DEPTH32F_STENCIL8, kT = wT.DEPTH_STENCIL, XT = wT.DEPTH_STENCIL_ATTACHMENT) : 16 === IT ? (oT = 0, WT = wT.UNSIGNED_INT, iT = wT.DEPTH_COMPONENT24, XT = wT.DEPTH_ATTACHMENT) : 13 !== IT && 17 !== IT || (oT = 12, WT = wT.UNSIGNED_INT_24_8, iT = wT.DEPTH24_STENCIL8, kT = wT.DEPTH_STENCIL, XT = wT.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(wT.TEXTURE_2D, TT, !0), wT.texParameteri(wT.TEXTURE_2D, wT.TEXTURE_MAG_FILTER, wT.NEAREST), wT.texParameteri(wT.TEXTURE_2D, wT.TEXTURE_MIN_FILTER, wT.NEAREST), wT.texParameteri(wT.TEXTURE_2D, wT.TEXTURE_WRAP_S, wT.CLAMP_TO_EDGE), wT.texParameteri(wT.TEXTURE_2D, wT.TEXTURE_WRAP_T, wT.CLAMP_TO_EDGE), wT.texImage2D(wT.TEXTURE_2D, 0, iT, RT, uT, 0, kT, WT, null), wT.framebufferTexture2D(wT.FRAMEBUFFER, XT, wT.TEXTURE_2D, TT._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(wT.TEXTURE_2D, null), hT._depthStencilTexture = TT, hT._depthStencilTextureWithStencil = CT, TT.baseWidth = RT, TT.baseHeight = uT, TT.width = RT, TT.height = uT, TT.isReady = !0, TT.samples = 1, TT.generateMipMaps = zT, TT.samplingMode = 1, TT.format = IT, TT.type = oT, TT.label = hT.label + "-DepthStencil", vT[BT] = TT, this._internalTexturesCache.push(TT)
            }
            if (hT.setTextures(vT), iT && wT.drawBuffers(fT), this._bindUnboundFramebuffer(mT), hT.setLayerAndFaceIndices(MT, KT), this.resetTextureCache(), gT) {
              if (FT > 1) {
                const TT = wT.createFramebuffer();
                if (!TT) throw new Error("Unable to create multi sampled framebuffer");
                hT._samples = FT, hT._MSAAFramebuffer = TT, BT > 0 && iT && (this._bindUnboundFramebuffer(TT), wT.drawBuffers(fT), this._bindUnboundFramebuffer(mT))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(hT, FT, iT);
            return hT
          }, Eo.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(TT, oT) {
            let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.rK < 2 || !TT) return 1;
            if (TT.samples === oT) return oT;
            const iT = this._gl;
            oT = Math.min(oT, this.getCaps().maxMSAASamples), TT._depthStencilBuffer && (iT.deleteRenderbuffer(TT._depthStencilBuffer), TT._depthStencilBuffer = null), TT._MSAAFramebuffer && (iT.deleteFramebuffer(TT._MSAAFramebuffer), TT._MSAAFramebuffer = null);
            const zT = TT._attachments.length;
            for (let WT = 0; WT < zT; WT++) {
              const oT = TT.textures[WT]._hardwareTexture;
              oT?.releaseMSAARenderBuffers()
            }
            if (oT > 1 && "function" === typeof iT.renderbufferStorageMultisample) {
              const kT = iT.createFramebuffer();
              if (!kT) throw new Error("Unable to create multi sampled framebuffer");
              TT._MSAAFramebuffer = kT, this._bindUnboundFramebuffer(kT);
              const WT = [];
              for (let IT = 0; IT < zT; IT++) {
                const zT = TT.textures[IT],
                  kT = zT._hardwareTexture,
                  XT = iT[this.rK > 1 ? "COLOR_ATTACHMENT" + IT : "COLOR_ATTACHMENT" + IT + "_WEBGL"],
                  BT = this._createRenderBuffer(zT.width, zT.height, oT, -1, this._getRGBABufferInternalSizedFormat(zT.type, zT.format, zT._useSRGBBuffer), XT);
                if (!BT) throw new Error("Unable to create multi sampled framebuffer");
                kT.addMSAARenderBuffer(BT), zT.samples = oT, WT.push(XT)
              }
              IT && iT.drawBuffers(WT)
            } else this._bindUnboundFramebuffer(TT._framebuffer);
            const kT = TT._depthStencilTexture ? TT._depthStencilTexture.format : void 0;
            return TT._depthStencilBuffer = this._setupFramebufferDepthAttachments(TT._generateStencilBuffer, TT._generateDepthBuffer, TT.width, TT.height, oT, kT), this._bindUnboundFramebuffer(null), TT._samples = oT, oT
          }, Eo.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(TT) {
            const oT = TT,
              IT = this._gl;
            if (oT.isMulti)
              for (let iT = 0; iT < oT._attachments.length; iT++) {
                const TT = oT.textures[iT];
                !TT?.generateMipMaps || TT?.isCube || TT?.is3D || (this._bindTextureDirectly(IT.TEXTURE_2D, TT, !0), IT.generateMipmap(IT.TEXTURE_2D), this._bindTextureDirectly(IT.TEXTURE_2D, null))
              }
          }, Eo.ThinEngine.prototype.resolveMultiFramebuffer = function(TT) {
            const oT = TT,
              IT = this._gl;
            if (!oT._MSAAFramebuffer || !oT.isMulti) return;
            let iT = oT.resolveMSAAColors ? IT.COLOR_BUFFER_BIT : 0;
            iT |= oT._generateDepthBuffer && oT.resolveMSAADepth ? IT.DEPTH_BUFFER_BIT : 0, iT |= oT._generateStencilBuffer && oT.resolveMSAAStencil ? IT.STENCIL_BUFFER_BIT : 0;
            const zT = oT._attachments,
              kT = zT.length;
            IT.bindFramebuffer(IT.READ_FRAMEBUFFER, oT._MSAAFramebuffer), IT.bindFramebuffer(IT.DRAW_FRAMEBUFFER, oT._framebuffer);
            for (let WT = 0; WT < kT; WT++) {
              const TT = oT.textures[WT];
              for (let oT = 0; oT < kT; oT++) zT[oT] = IT.NONE;
              zT[WT] = IT[this.rK > 1 ? "COLOR_ATTACHMENT" + WT : "COLOR_ATTACHMENT" + WT + "_WEBGL"], IT.readBuffer(zT[WT]), IT.drawBuffers(zT), IT.blitFramebuffer(0, 0, TT.width, TT.height, 0, 0, TT.width, TT.height, iT, IT.NEAREST)
            }
            for (let WT = 0; WT < kT; WT++) zT[WT] = IT[this.rK > 1 ? "COLOR_ATTACHMENT" + WT : "COLOR_ATTACHMENT" + WT + "_WEBGL"];
            IT.drawBuffers(zT), IT.bindFramebuffer(this._gl.FRAMEBUFFER, oT._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = kT;
        const DT = [],
          LT = [],
          xT = [],
          cT = [],
          KT = [],
          MT = [],
          rT = [],
          AT = [];
        this._initTypes(IT, DT, LT, xT, cT, KT, MT, rT, AT, zT);
        const gT = !zT || void 0 === zT.generateDepthBuffer || zT.generateDepthBuffer,
          hT = !(!zT || void 0 === zT.generateStencilBuffer) && zT.generateStencilBuffer,
          wT = zT && zT.samples ? zT.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: LT,
          generateMipMaps: WT,
          generateDepthBuffer: gT,
          generateStencilBuffer: hT,
          generateDepthTexture: XT,
          depthTextureFormat: BT,
          types: DT,
          wWT: IT,
          useSRGBBuffers: xT,
          samples: wT,
          formats: cT,
          targetTypes: KT,
          faceIndex: MT,
          layerIndex: rT,
          layerCounts: AT,
          labels: kT,
          label: TT
        }, this._count = IT, this._drawOnlyOnFirstAttachmentByDefault = ST, IT > 0 && (this._createInternalTextures(), this._createTextures(kT))
      }
      _initTypes(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        for (let ST = 0; ST < TT; ST++) FT && FT.types && void 0 !== FT.types[ST] ? oT.push(FT.types[ST]) : oT.push(FT && FT.defaultType ? FT.defaultType : 0), FT && FT.samplingModes && void 0 !== FT.samplingModes[ST] ? IT.push(FT.samplingModes[ST]) : IT.push(CT.g.BILINEAR_SAMPLINGMODE), FT && FT.useSRGBBuffers && void 0 !== FT.useSRGBBuffers[ST] ? iT.push(FT.useSRGBBuffers[ST]) : iT.push(!1), FT && FT.formats && void 0 !== FT.formats[ST] ? zT.push(FT.formats[ST]) : zT.push(5), FT && FT.targetTypes && void 0 !== FT.targetTypes[ST] ? kT.push(FT.targetTypes[ST]) : kT.push(3553), FT && FT.faceIndex && void 0 !== FT.faceIndex[ST] ? WT.push(FT.faceIndex[ST]) : WT.push(0), FT && FT.layerIndex && void 0 !== FT.layerIndex[ST] ? XT.push(FT.layerIndex[ST]) : XT.push(0), FT && FT.layerCounts && void 0 !== FT.layerCounts[ST] ? BT.push(FT.layerCounts[ST]) : BT.push(1)
      }
      _createInternaTextureIndexMapping() {
        const TT = {},
          oT = [];
        if (!this._renderTarget) return oT;
        const IT = this._renderTarget.textures;
        for (let iT = 0; iT < IT.length; iT++) {
          const zT = IT[iT];
          if (!zT) continue;
          const kT = TT[zT.uniqueId];
          void 0 !== kT ? oT[iT] = kT : TT[zT.uniqueId] = iT
        }
        return oT
      }
      _rebuild() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || TT) return;
        const iT = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), oT && (this._releaseTextures(), this._createTextures(IT));
        const zT = this._renderTarget.textures;
        for (let kT = 0; kT < zT.length; kT++) {
          const TT = this._textures[kT];
          void 0 !== iT[kT] && this._renderTarget.setTexture(zT[iT[kT]], kT), TT._texture = zT[kT], TT._texture && (TT._noMipmap = !TT._texture.useMipMaps, TT._useSRGBBuffer = TT._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let TT = 0; TT < this._textures.length; TT++) this._textures[TT]._texture = null, this._textures[TT].dispose()
      }
      _createTextures(TT) {
        const oT = this._renderTarget.textures;
        this._textures = [];
        for (let IT = 0; IT < oT.length; IT++) {
          const iT = new CT.g(null, this.pC());
          TT?.[IT] && (iT.name = TT[IT]), iT._texture = oT[IT], iT._texture && (iT._noMipmap = !iT._texture.useMipMaps, iT._useSRGBBuffer = iT._texture._useSRGBBuffer), this._textures.push(iT)
        }
      }
      setInternalTexture(TT, oT) {
        let IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === oT && (this._texture = TT), this.renderTarget.setTexture(TT, oT, IT), this.textures[oT] || (this.textures[oT] = new CT.g(null, this.pC()), this.textures[oT].name = this._textureNames?.[oT] ?? this.textures[oT].name), this.textures[oT]._texture = TT, this.textures[oT]._noMipmap = !TT.useMipMaps, this.textures[oT]._useSRGBBuffer = TT._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[oT] = TT.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[oT] = TT.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[oT] = TT._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[oT])) {
          let IT;
          IT = TT.is2DArray ? 35866 : TT.isCube ? 34067 : TT.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[oT] = IT
        }
      }
      setLayerAndFaceIndex(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[TT] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[TT] = oT), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[TT] = IT), this.renderTarget.setLayerAndFaceIndex(TT, oT, IT))
      }
      setLayerAndFaceIndices(TT, oT) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = TT, this._multiRenderTargetOptions.faceIndex = oT, this.renderTarget.setLayerAndFaceIndices(TT, oT))
      }
      get samples() {
        return this._samples
      }
      set samples(TT) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(TT) : this._samples = TT
      }
      resize(TT) {
        this._processSizeParameter(TT), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(TT, oT, IT) {
        this._multiRenderTargetOptions.wWT = TT, this._count = TT;
        const iT = [],
          zT = [],
          kT = [],
          WT = [],
          XT = [],
          BT = [],
          FT = [],
          ST = [];
        this._textureNames = IT, this._initTypes(TT, iT, zT, kT, WT, XT, BT, FT, ST, oT), this._multiRenderTargetOptions.types = iT, this._multiRenderTargetOptions.samplingModes = zT, this._multiRenderTargetOptions.useSRGBBuffers = kT, this._multiRenderTargetOptions.formats = WT, this._multiRenderTargetOptions.targetTypes = XT, this._multiRenderTargetOptions.faceIndex = BT, this._multiRenderTargetOptions.layerIndex = FT, this._multiRenderTargetOptions.layerCounts = ST, this._multiRenderTargetOptions.labels = IT, this._rebuild(!1, !0, IT)
      }
      _unbindFrameBuffer(TT, oT) {
        this._renderTarget && TT.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(oT)
        }))
      }
      dispose() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), TT ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const TT = this._renderTarget?.textures;
        if (TT) {
          for (let oT = TT.length - 1; oT >= 0; oT--) this._textures[oT]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var ao = IT(38949);
    class Yo {
      constructor(TT) {
        this.name = ao.d.NAME_GEOMETRYBUFFERRENDERER, this.NK = TT
      }
      register() {
        this.NK._gatherRenderTargetsStage.registerStep(ao.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(TT) {
        this.NK._geometryBufferRenderer && TT.push(this.NK._geometryBufferRenderer.getGBuffer())
      }
    }
    let Qo = !1;
    var Oo;
    ! function(TT) {
      TT[TT.Small = 0] = "Small", TT[TT.Medium = 1] = "Medium", TT[TT.Large = 2] = "Large", TT[TT.ExtraLarge = 3] = "ExtraLarge"
    }(Oo || (Oo = {}));
    const Ho = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      no = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class qo {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(TT) {
        if (TT && this._enableMeshBlendTag && !this._scene.Zc().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = TT
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(TT) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = TT, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(TT, oT) {
        TT === qo.POSITION_TEXTURE_TYPE ? (this._positionIndex = oT, this._enablePosition = !0) : TT === qo.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = oT, this._enableVelocity = !0) : TT === qo.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = oT, this._enableVelocityLinear = !0) : TT === qo.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = oT, this._enableReflectivity = !0) : TT === qo.DEPTH_TEXTURE_TYPE ? (this._depthIndex = oT, this._enableDepth = !0) : TT === qo.NORMAL_TEXTURE_TYPE ? (this._normalIndex = oT, this._enableNormal = !0) : TT === qo.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = oT, this._enableScreenspaceDepth = !0) : TT === qo.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = oT, this._enableIrradiance = !0) : TT === qo.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = oT, this._enableObjectId = !0) : TT === qo.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = oT, this._enableMeshBlendTag = !0)
      }
      _setAttachments(TT) {
        this._attachmentsFromPrePass = TT
      }
      _linkInternalTexture(TT) {
        this._multiRenderTarget.setInternalTexture(TT, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(TT) {
        this._multiRenderTarget.renderList = TT
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(TT) {
        switch (TT) {
          case qo.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case qo.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case qo.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case qo.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case qo.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case qo.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case qo.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case qo.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case qo.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case qo.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(TT) {
        this._enableDepth = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(TT) {
        this._enableNormal = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(TT) {
        this._enablePosition = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(TT) {
        this._enableVelocity = TT, TT || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = TT
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(TT) {
        this._enableVelocityLinear = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(TT) {
        this._enableReflectivity = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(TT) {
        this._enableScreenspaceDepth = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(TT) {
        this._enableIrradiance = TT, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(TT) {
        if (TT && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (TT && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (TT && !this._enableObjectId && !this._linkedWithPrePass) {
          const TT = this._scene.Zc(),
            oT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8),
            IT = this._assignRenderTargetIndices()[0] + 1;
          if (TT.getCaps().drawBuffersExtension && IT > oT) throw new Error(`GeometryBufferRenderer: ${IT} color attachments were requested, but this engine supports at most ${oT}`)
        }
        this._enableObjectId = TT, TT || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(TT) {
        if (this._enableMeshBlendTag !== TT) {
          if (TT) {
            const TT = this._scene.Zc();
            if (! function(TT) {
                return "NATIVE" !== TT.shaderPlatformName && (TT.isWebGPU || 2 === TT.rK)
              }(TT)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !TT.isWebGPU && !TT.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const oT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8),
                IT = this._assignRenderTargetIndices()[0] + 1;
              if (TT.getCaps().drawBuffersExtension && IT > oT) throw new Error(`GeometryBufferRenderer: ${IT} color attachments were requested, but this engine supports at most ${oT}`)
            }
          }
          this._enableMeshBlendTag = TT, TT || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get NK() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        var zT;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new GT.i(0, 0, 0, 0), this._clearDepthColor = new GT.i(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = TT, this._ratioOrDimensions = oT, this._useUbo = TT.Zc().supportsUniformBuffers, this._depthFormat = IT, this._textureTypesAndFormats = iT || {}, this._initShaderSourceAsync(), zT = qo, Qo || (Qo = !0, Object.defineProperty(OT.d.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(TT) {
            TT && TT.isSupported && (this._geometryBufferRenderer = TT)
          },
          enumerable: !0,
          configurable: !0
        }), OT.d.prototype.enableGeometryBufferRenderer = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            IT = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new zT(this, TT, oT, IT), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, OT.d.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, zT._SceneComponentInitialization = TT => {
          let oT = TT._getComponent(ao.d.NAME_GEOMETRYBUFFERRENDERER);
          oT || (oT = new Yo(TT), TT.fIT(oT))
        }), qo._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.Zc().isWebGPU && !qo.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([IT.e(327).then((() => IT(60713))), Promise.all([IT.e(326), IT.e(338)]).then((() => IT(60717)))])) : await Promise.all([IT.e(310).then((() => IT(60725))), IT.e(309).then((() => IT(60733)))]), this._shadersLoaded = !0
      }
      isReady(TT, oT) {
        if (!this._shadersLoaded) return !1;
        const IT = TT.bc();
        if (IT && IT.disableDepthWrite) return !1;
        if (function(TT) {
            return TT._isGaussianSplatting || "GaussianSplattingMesh" === (oT = TT.getClassName()) || "GaussianSplattingStream" === oT;
            var oT
          }(TT.getMesh())) return !1;
        const iT = [],
          zT = [nT.i.PositionKind],
          kT = TT.getMesh();
        kT.isVerticesDataPresent(nT.i.NormalKind) && (iT.push("#define HAS_NORMAL_ATTRIBUTE"), zT.push(nT.i.NormalKind));
        let WT = !1,
          XT = !1;
        if (IT) {
          let TT = !1;
          if (IT.needAlphaTestingForMesh(kT) && IT.getAlphaTestTexture() && (iT.push("#define ALPHATEST"), iT.push(`#define ALPHATEST_UV${IT.getAlphaTestTexture().coordinatesIndex+1}`), TT = !0), (IT.bumpTexture || IT.normalTexture || IT.geometryNormalTexture) && NT.c.BumpTextureEnabled) {
            const oT = IT.bumpTexture || IT.normalTexture || IT.geometryNormalTexture;
            iT.push("#define BUMP"), iT.push(`#define BUMP_UV${oT.coordinatesIndex+1}`), TT = !0
          }
          if (this._enableReflectivity) {
            let oT = !1;
            if ("PBRMetallicRoughnessMaterial" === IT.getClassName()) IT.metallicRoughnessTexture && (iT.push("#define ORMTEXTURE"), iT.push(`#define REFLECTIVITY_UV${IT.metallicRoughnessTexture.coordinatesIndex+1}`), iT.push("#define METALLICWORKFLOW"), TT = !0, oT = !0), null != IT.metallic && (iT.push("#define METALLIC"), iT.push("#define METALLICWORKFLOW"), oT = !0), null != IT.roughness && (iT.push("#define ROUGHNESS"), iT.push("#define METALLICWORKFLOW"), oT = !0), oT && (IT.baseTexture && (iT.push("#define ALBEDOTEXTURE"), iT.push(`#define ALBEDO_UV${IT.baseTexture.coordinatesIndex+1}`), IT.baseTexture.gammaSpace && iT.push("#define GAMMAALBEDO"), TT = !0), IT.baseColor && iT.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === IT.getClassName()) IT.specularGlossinessTexture ? (iT.push("#define SPECULARGLOSSINESSTEXTURE"), iT.push(`#define REFLECTIVITY_UV${IT.specularGlossinessTexture.coordinatesIndex+1}`), TT = !0, IT.specularGlossinessTexture.gammaSpace && iT.push("#define GAMMAREFLECTIVITYTEXTURE")) : IT.specularColor && iT.push("#define REFLECTIVITYCOLOR"), null != IT.glossiness && iT.push("#define GLOSSINESS");
            else if ("PBRMaterial" === IT.getClassName()) IT.metallicTexture && (iT.push("#define ORMTEXTURE"), iT.push(`#define REFLECTIVITY_UV${IT.metallicTexture.coordinatesIndex+1}`), iT.push("#define METALLICWORKFLOW"), TT = !0, oT = !0), null != IT.metallic && (iT.push("#define METALLIC"), iT.push("#define METALLICWORKFLOW"), oT = !0), null != IT.roughness && (iT.push("#define ROUGHNESS"), iT.push("#define METALLICWORKFLOW"), oT = !0), oT ? (IT.albedoTexture && (iT.push("#define ALBEDOTEXTURE"), iT.push(`#define ALBEDO_UV${IT.albedoTexture.coordinatesIndex+1}`), IT.albedoTexture.gammaSpace && iT.push("#define GAMMAALBEDO"), TT = !0), IT.albedoColor && iT.push("#define ALBEDOCOLOR")) : (IT.reflectivityTexture ? (iT.push("#define SPECULARGLOSSINESSTEXTURE"), iT.push(`#define REFLECTIVITY_UV${IT.reflectivityTexture.coordinatesIndex+1}`), IT.reflectivityTexture.gammaSpace && iT.push("#define GAMMAREFLECTIVITYTEXTURE"), TT = !0) : IT.reflectivityColor && iT.push("#define REFLECTIVITYCOLOR"), null != IT.microSurface && iT.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === IT.getClassName()) IT.specularTexture && (iT.push("#define REFLECTIVITYTEXTURE"), iT.push(`#define REFLECTIVITY_UV${IT.specularTexture.coordinatesIndex+1}`), IT.specularTexture.gammaSpace && iT.push("#define GAMMAREFLECTIVITYTEXTURE"), TT = !0), IT.specularColor && iT.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === IT.getClassName()) {
              const oT = IT;
              iT.push("#define METALLIC"), iT.push("#define ROUGHNESS"), oT._useRoughnessFromMetallicTextureGreen && oT.baseMetalnessTexture ? (iT.push("#define ORMTEXTURE"), iT.push(`#define REFLECTIVITY_UV${oT.baseMetalnessTexture.coordinatesIndex+1}`), TT = !0) : oT.baseMetalnessTexture ? (iT.push("#define METALLIC_TEXTURE"), iT.push(`#define METALLIC_UV${oT.baseMetalnessTexture.coordinatesIndex+1}`), TT = !0) : oT.specularRoughnessTexture && (iT.push("#define ROUGHNESS_TEXTURE"), iT.push(`#define ROUGHNESS_UV${oT.specularRoughnessTexture.coordinatesIndex+1}`), TT = !0), oT.baseColorTexture && (iT.push("#define ALBEDOTEXTURE"), iT.push(`#define ALBEDO_UV${oT.baseColorTexture.coordinatesIndex+1}`), oT.baseColorTexture.gammaSpace && iT.push("#define GAMMAALBEDO"), TT = !0), oT.baseColor && iT.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (iT.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === IT.getClassName())) {
            const oT = IT;
            oT.subsurfaceWeight > 0 && oT.subsurfaceWeightTexture && (iT.push("#define SUBSURFACE_WEIGHT"), iT.push(`#define SUBSURFACEWEIGHT_UV${oT.subsurfaceWeightTexture.coordinatesIndex+1}`), TT = !0), oT.transmissionWeight > 0 && oT.transmissionWeightTexture && (iT.push("#define TRANSMISSION_WEIGHT"), iT.push(`#define TRANSMISSIONWEIGHT_UV${oT.transmissionWeightTexture.coordinatesIndex+1}`), TT = !0)
          }
          TT && (iT.push("#define NEED_UV"), kT.isVerticesDataPresent(nT.i.UVKind) && (zT.push(nT.i.UVKind), iT.push("#define UV1"), WT = !0), kT.isVerticesDataPresent(nT.i.UV2Kind) && (zT.push(nT.i.UV2Kind), iT.push("#define UV2"), XT = !0))
        }
        if (this._enableDepth && (iT.push("#define DEPTH"), iT.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (iT.push("#define NORMAL"), iT.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (iT.push("#define POSITION"), iT.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (iT.push("#define VELOCITY"), iT.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(kT) && iT.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (iT.push("#define VELOCITY_LINEAR"), iT.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(kT) && iT.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (iT.push("#define REFLECTIVITY"), iT.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (iT.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), iT.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          iT.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), iT.push("#define IRRADIANCE");
          const TT = this._scene;
          if (TT.environmentTexture) {
            const oT = {};
            let zT = !1,
              kT = 0;
            "OpenPBRMaterial" !== IT.getClassName() && "StandardMaterial" !== IT.getClassName() && "PBRMetallicRoughnessMaterial" !== IT.getClassName() && "PBRSpecularGlossinessMaterial" !== IT.getClassName() && "PBRMaterial" !== IT.getClassName() || (zT = !!IT.realtimeFiltering, kT = IT.realtimeFilteringQuality || 0), (0, dT.J)(TT, TT.environmentTexture, oT, zT, kT, !0);
            for (const TT in oT) oT[TT] && iT.push("#define " + TT);
            oT.USEIRRADIANCEMAP || iT.push("#define SPHERICAL_HARMONICS");
            const WT = TT.postProcessRenderPipelineManager.supportedPipelines.find((TT => "IBLShadowsRenderPipeline" === TT.getClassName()));
            if (WT) {
              const TT = WT;
              TT._getAccumulatedTexture() && (iT.push("#define IBL_SHADOW_TEXTURE"), TT.coloredShadows && iT.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (iT.push("#define OBJECT_ID"), iT.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (iT.push("#define MESH_BLEND_TAG"), iT.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && iT.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && iT.push("#define ENCODE_NORMAL"), kT.useBones && kT.computeBonesUsingShaders && kT.skeleton ? (zT.push(nT.i.MatricesIndicesKind), zT.push(nT.i.MatricesWeightsKind), kT.numBoneInfluencers > 4 && (zT.push(nT.i.MatricesIndicesExtraKind), zT.push(nT.i.MatricesWeightsExtraKind)), iT.push("#define NUM_BONE_INFLUENCERS " + kT.numBoneInfluencers), iT.push("#define BONETEXTURE " + kT.skeleton.isUsingTextureForMatrices), iT.push("#define BonesPerMesh " + (kT.skeleton.bones.length + 1))) : (iT.push("#define NUM_BONE_INFLUENCERS 0"), iT.push("#define BONETEXTURE false"), iT.push("#define BonesPerMesh 0"));
        const BT = kT.morphTargetManager ? (0, dT.G)(kT.morphTargetManager, iT, zT, kT, !0, !0, !1, WT, XT, !1) : 0;
        oT && (iT.push("#define INSTANCES"), (0, dT.eb)(zT, this._enableVelocity || this._enableVelocityLinear), TT.getRenderingMesh().hasThinInstances && iT.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? iT.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : iT.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, So.g)(IT, this._scene, iT);
        const FT = this._scene.Zc(),
          ST = TT._getDrawWrapper(void 0, !0),
          DT = ST.defines,
          LT = iT.join("\n");
        return DT !== LT && ST.setEffect(FT.createEffect("geometry", {
          attributes: zT,
          uniformsNames: no,
          samplers: Ho,
          defines: LT,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: BT
          },
          shaderLanguage: this.shaderLanguage
        }, FT), LT), ST.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(TT) {
        if (this._enableObjectId && 1 !== TT) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== TT) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = TT
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.Zc().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.NK.Zc()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.NK.Zc().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const TT = [],
          oT = [];
        let IT = 0;
        return this._enableDepth && (this._depthIndex = IT, IT++, TT.push("gBuffer_Depth"), oT.push(this._textureTypesAndFormats[qo.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = IT, IT++, TT.push("gBuffer_Normal"), oT.push(this._textureTypesAndFormats[qo.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = IT, IT++, TT.push("gBuffer_Position"), oT.push(this._textureTypesAndFormats[qo.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = IT, IT++, TT.push("gBuffer_Velocity"), oT.push(this._textureTypesAndFormats[qo.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = IT, IT++, TT.push("gBuffer_VelocityLinear"), oT.push(this._textureTypesAndFormats[qo.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = IT, IT++, TT.push("gBuffer_Reflectivity"), oT.push(this._textureTypesAndFormats[qo.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = IT, IT++, TT.push("gBuffer_ScreenspaceDepth"), oT.push(this._textureTypesAndFormats[qo.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = IT, IT++, TT.push("gBuffer_Irradiance"), oT.push(this._textureTypesAndFormats[qo.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = IT, IT++, TT.push("gBuffer_ObjectId"), oT.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = IT, IT++, TT.push("gBuffer_MeshBlendTag"), oT.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [IT, TT, oT]
      }
      _createRenderTargets() {
        const TT = this._scene.Zc(),
          [oT, IT, iT] = this._assignRenderTargetIndices(),
          zT = Math.min(TT.getCaps().maxDrawBuffers ?? 1, 8);
        if (TT.getCaps().drawBuffersExtension && oT > zT) throw new Error(`GeometryBufferRenderer: ${oT} color attachments were requested, but this engine supports at most ${zT}`);
        let WT = 0;
        TT._caps.textureFloat && TT._caps.textureFloatLinearFiltering ? WT = 1 : TT._caps.textureHalfFloat && TT._caps.textureHalfFloatLinearFiltering && (WT = 2);
        const XT = this._getRenderTargetDimensions(),
          BT = [],
          FT = [],
          ST = [];
        for (const kT of iT) kT ? (BT.push(kT.textureType), FT.push(kT.textureFormat), ST.push(kT.samplingMode ?? 2)) : (BT.push(WT), FT.push(5), ST.push(2));
        if (this._normalsAreUnsigned = 11 === BT[qo.NORMAL_TEXTURE_TYPE] || 13 === BT[qo.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Uo("gBuffer", XT, oT, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: BT,
            formats: FT,
            samplingModes: ST,
            depthTextureFormat: this._depthFormat
          }, IT.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = CT.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = CT.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const DT = [!0],
          LT = [!1],
          xT = [!0];
        for (let kT = 1; kT < oT; ++kT) DT.push(!0), xT.push(!1), LT.push(!0);
        const cT = TT.buildTextureLayout(DT),
          KT = TT.buildTextureLayout(LT),
          MT = TT.buildTextureLayout(xT);
        this._multiRenderTarget.onClearObservable.add((TT => {
          const oT = this.useSpecificClearForDepthTexture ? KT : cT;
          TT.clearAttachments(this._clearColor, oT, !0, !0, !0), this.useSpecificClearForDepthTexture && TT.clearAttachments(this._clearDepthColor, MT, !0, !1, !1), TT.bindAttachments(cT)
        })), this._resizeObserver = TT.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const rT = TT => {
          const oT = TT.getRenderingMesh(),
            IT = TT.getEffectiveMesh(),
            iT = this._scene,
            zT = iT.Zc(),
            WT = TT.bc();
          if (!WT) return;
          if (IT._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[IT.uniqueId] && (this._previousTransformationMatrices[IT.uniqueId] = {
              iL: HT.b.Identity(),
              viewProjection: iT.getTransformMatrix()
            }, oT.skeleton)) {
            const TT = oT.skeleton.getTransformMatrices(oT);
            this._previousBonesTransformationMatrices[oT.uniqueId] = this._copyBonesTransformationMatrices(TT, new Float32Array(TT.length))
          }
          const XT = oT._getInstancesRenderList(TT._id, !!TT.getReplacementMesh());
          if (XT.mustReturn) return;
          const BT = zT.getCaps().instancedArrays && (null !== XT.visibleInstances[TT._id] || oT.hasThinInstances),
            FT = IT.getWorldMatrix();
          if (this.isReady(TT, BT)) {
            const ST = TT._getDrawWrapper();
            if (!ST) return;
            const DT = ST.effect;
            let LT;
            zT.enableEffect(ST), BT || oT._bind(TT, DT, WT.fillMode), this._useUbo ? ((0, dT.t)(DT, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (DT.setMatrix("viewProjection", iT.getTransformMatrix()), DT.setMatrix("view", iT.getViewMatrix()), this._scene.bindEyePosition(DT, "vEyePosition"));
            if (oT._instanceDataStorage.isFrozen || !WT.backFaceCulling && null === WT.sideOrientation) LT = oT._effectiveSideOrientation;
            else {
              const TT = IT._getWorldMatrixDeterminant();
              LT = WT._getEffectiveOrientation(oT), TT < 0 && (LT = LT === kT.c.ClockWiseSideOrientation ? kT.c.CounterClockWiseSideOrientation : kT.c.ClockWiseSideOrientation)
            }
            if (WT._preBind(ST, LT), WT.needAlphaTestingForMesh(IT)) {
              const TT = WT.getAlphaTestTexture();
              TT && (DT.setTexture("diffuseSampler", TT), DT.setMatrix("diffuseMatrix", TT.getTextureMatrix()), DT.setFloat("alphaCutOff", WT.alphaCutOff ?? .4))
            }
            if ((WT.bumpTexture || WT.normalTexture || WT.geometryNormalTexture) && iT.Zc().getCaps().standardDerivatives && NT.c.BumpTextureEnabled) {
              const TT = WT.bumpTexture || WT.normalTexture || WT.geometryNormalTexture;
              DT.setFloat3("vBumpInfos", TT.coordinatesIndex, 1 / TT.level, WT.parallaxScaleBias), DT.setMatrix("bumpMatrix", TT.getTextureMatrix()), DT.setTexture("bumpSampler", TT), DT.setFloat2("vTangentSpaceParams", WT.invertNormalMapX ? -1 : 1, WT.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === WT.getClassName()) null !== WT.metallicRoughnessTexture && (DT.setTexture("reflectivitySampler", WT.metallicRoughnessTexture), DT.setMatrix("reflectivityMatrix", WT.metallicRoughnessTexture.getTextureMatrix())), null !== WT.metallic && DT.setFloat("metallic", WT.metallic), null !== WT.roughness && DT.setFloat("glossiness", 1 - WT.roughness), null !== WT.baseTexture && (DT.setTexture("albedoSampler", WT.baseTexture), DT.setMatrix("albedoMatrix", WT.baseTexture.getTextureMatrix())), null !== WT.baseColor && DT.setColor3("albedoColor", WT.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === WT.getClassName()) null !== WT.specularGlossinessTexture ? (DT.setTexture("reflectivitySampler", WT.specularGlossinessTexture), DT.setMatrix("reflectivityMatrix", WT.specularGlossinessTexture.getTextureMatrix())) : null !== WT.specularColor && DT.setColor3("reflectivityColor", WT.specularColor), null !== WT.glossiness && DT.setFloat("glossiness", WT.glossiness);
            else if ("PBRMaterial" === WT.getClassName()) null !== WT.metallicTexture && (DT.setTexture("reflectivitySampler", WT.metallicTexture), DT.setMatrix("reflectivityMatrix", WT.metallicTexture.getTextureMatrix())), null !== WT.metallic && DT.setFloat("metallic", WT.metallic), null !== WT.roughness && DT.setFloat("glossiness", 1 - WT.roughness), null !== WT.roughness || null !== WT.metallic || null !== WT.metallicTexture ? (null !== WT.albedoTexture && (DT.setTexture("albedoSampler", WT.albedoTexture), DT.setMatrix("albedoMatrix", WT.albedoTexture.getTextureMatrix())), null !== WT.albedoColor && DT.setColor3("albedoColor", WT.albedoColor)) : (null !== WT.reflectivityTexture ? (DT.setTexture("reflectivitySampler", WT.reflectivityTexture), DT.setMatrix("reflectivityMatrix", WT.reflectivityTexture.getTextureMatrix())) : null !== WT.reflectivityColor && DT.setColor3("reflectivityColor", WT.reflectivityColor), null !== WT.microSurface && DT.setFloat("glossiness", WT.microSurface));
            else if ("StandardMaterial" === WT.getClassName()) null !== WT.specularTexture && (DT.setTexture("reflectivitySampler", WT.specularTexture), DT.setMatrix("reflectivityMatrix", WT.specularTexture.getTextureMatrix())), null !== WT.specularColor && DT.setColor3("reflectivityColor", WT.specularColor);
            else if ("OpenPBRMaterial" === WT.getClassName()) {
              const TT = WT;
              TT._useRoughnessFromMetallicTextureGreen && TT.baseMetalnessTexture ? (DT.setTexture("reflectivitySampler", TT.baseMetalnessTexture), DT.setMatrix("reflectivityMatrix", TT.baseMetalnessTexture.getTextureMatrix())) : TT.baseMetalnessTexture ? (DT.setTexture("metallicSampler", TT.baseMetalnessTexture), DT.setMatrix("metallicMatrix", TT.baseMetalnessTexture.getTextureMatrix())) : TT.specularRoughnessTexture && (DT.setTexture("roughnessSampler", TT.specularRoughnessTexture), DT.setMatrix("roughnessMatrix", TT.specularRoughnessTexture.getTextureMatrix())), DT.setFloat("metallic", TT.baseMetalness), DT.setFloat("glossiness", 1 - TT.specularRoughness), null !== TT.baseColorTexture && (DT.setTexture("albedoSampler", TT.baseColorTexture), DT.setMatrix("albedoMatrix", TT.baseColorTexture.getTextureMatrix())), null !== TT.baseColor && DT.setColor3("albedoColor", TT.baseColor)
            }
            if (this._enableIrradiance && iT.environmentTexture) {
              const TT = iT.environmentTexture,
                oT = iT.postProcessRenderPipelineManager.supportedPipelines.find((TT => "IBLShadowsRenderPipeline" === TT.getClassName()));
              if (oT) {
                const TT = oT._getAccumulatedTexture();
                TT && (DT.setTexture("iblShadowSampler", TT), DT.setFloat2("shadowTextureSize", TT.getSize().width, TT.getSize().height))
              }
              if (DT.setMatrix("reflectionMatrix", TT.getReflectionTextureMatrix()), DT.setFloat2("vReflectionInfos", TT.level * iT.iblIntensity, 0), DT.setTexture("reflectionSampler", TT), TT.irradianceTexture && (DT.setTexture("irradianceSampler", TT.irradianceTexture), TT.irradianceTexture._dominantDirection && DT.setVector3("vReflectionDominantDirection", TT.irradianceTexture._dominantDirection)), TT.sphericalPolynomial) {
                const oT = TT.sphericalPolynomial;
                if (oT.preScaledHarmonics) {
                  const TT = oT.preScaledHarmonics;
                  DT.setVector3("vSphericalL00", TT.l00), DT.setVector3("vSphericalL1_1", TT.l1_1), DT.setVector3("vSphericalL10", TT.l10), DT.setVector3("vSphericalL11", TT.l11), DT.setVector3("vSphericalL2_2", TT.l2_2), DT.setVector3("vSphericalL2_1", TT.l2_1), DT.setVector3("vSphericalL20", TT.l20), DT.setVector3("vSphericalL21", TT.l21), DT.setVector3("vSphericalL22", TT.l22)
                } else DT.setFloat3("vSphericalX", oT.x.x, oT.x.y, oT.x.z), DT.setFloat3("vSphericalY", oT.y.x, oT.y.y, oT.y.z), DT.setFloat3("vSphericalZ", oT.z.x, oT.z.y, oT.z.z), DT.setFloat3("vSphericalXX_ZZ", oT.xx.x - oT.zz.x, oT.xx.y - oT.zz.y, oT.xx.z - oT.zz.z), DT.setFloat3("vSphericalYY_ZZ", oT.yy.x - oT.zz.x, oT.yy.y - oT.zz.y, oT.yy.z - oT.zz.z), DT.setFloat3("vSphericalZZ", oT.zz.x, oT.zz.y, oT.zz.z), DT.setFloat3("vSphericalXY", oT.xy.x, oT.xy.y, oT.xy.z), DT.setFloat3("vSphericalYZ", oT.yz.x, oT.yz.y, oT.yz.z), DT.setFloat3("vSphericalZX", oT.zx.x, oT.zx.y, oT.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === WT.getClassName()) {
                const TT = WT;
                DT.setFloat("vSubsurfaceWeight", TT.subsurfaceWeight), TT.subsurfaceWeightTexture && (DT.setTexture("subsurfaceWeightSampler", TT.subsurfaceWeightTexture), DT.setMatrix("subsurfaceWeightMatrix", TT.subsurfaceWeightTexture.getTextureMatrix())), DT.setFloat("vTransmissionWeight", TT.transmissionWeight), TT.transmissionWeightTexture && (DT.setTexture("transmissionWeightSampler", TT.transmissionWeightTexture), DT.setMatrix("transmissionWeightMatrix", TT.transmissionWeightTexture.getTextureMatrix())), DT.setFloat("vTransmissionScatterAnisotropy", TT.transmissionScatterAnisotropy), DT.setFloat("vSubsurfaceScatterAnisotropy", TT.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, So.d)(DT, WT, this._scene), oT.useBones && oT.computeBonesUsingShaders && oT.skeleton) {
              const TT = oT.skeleton;
              if (TT.isUsingTextureForMatrices && DT.getUniformIndex("boneTextureInfo") > -1) {
                const IT = TT.getTransformMatrixTexture(oT);
                DT.setTexture("boneSampler", IT), DT.setFloat2("boneTextureInfo", TT._textureWidth, TT._textureHeight)
              } else DT.setMatrices("mBones", oT.skeleton.getTransformMatrices(oT));
              (this._enableVelocity || this._enableVelocityLinear) && DT.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[oT.uniqueId])
            }
            if ((0, dT.r)(oT, DT), oT.morphTargetManager && oT.morphTargetManager.isUsingTextureForTargets && oT.morphTargetManager._bind(DT), (this._enableVelocity || this._enableVelocityLinear) && (DT.setMatrix("previousWorld", this._previousTransformationMatrices[IT.uniqueId].iL), DT.setMatrix("previousViewProjection", this._previousTransformationMatrices[IT.uniqueId].viewProjection)), this._enableObjectId) {
              let TT = oT.uniqueId;
              if (this.objectIdProvider) TT = (0, xo.i)(oT, this.objectIdProvider);
              else if (TT > 16777215) throw new Error(`Invalid geometry object ID ${TT} for mesh "${oT.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              DT.setFloat("objectId", TT)
            }
            if (this._enableMeshBlendTag) {
              const TT = this.meshBlendTagProvider ? (0, xo.f)(oT, this.meshBlendTagProvider) : oT.meshBlendingTag;
              DT.setInt("meshBlendTag", TT)
            }
            BT && oT.hasThinInstances && DT.setMatrix("world", FT), oT._processRendering(IT, TT, DT, WT.fillMode, XT, BT, ((TT, oT) => {
              TT || DT.setMatrix("world", oT)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[IT.uniqueId].iL = FT.clone(), this._previousTransformationMatrices[IT.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), oT.skeleton && this._copyBonesTransformationMatrices(oT.skeleton.getTransformMatrices(oT), this._previousBonesTransformationMatrices[IT.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (oT, IT, iT) => {
          if ((iT || 0 === IT) && oT.pR)
            for (let zT = 0; zT < oT.pR.length; ++zT) {
              const IT = oT.pR[zT],
                iT = IT.bc(),
                kT = IT.getRenderingMesh();
              if (!iT) continue;
              const WT = kT._getInstancesRenderList(IT._id, !!IT.getReplacementMesh()),
                XT = TT.getCaps().instancedArrays && (null !== WT.visibleInstances[IT._id] || kT.hasThinInstances);
              if (!this.isReady(IT, XT)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (oT, IT, iT, zT) => {
          let kT;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.Zc().bindAttachments(this._attachmentsFromPrePass)
          }
          if (zT.length) {
            for (TT.setColorWrite(!1), kT = 0; kT < zT.length; kT++) rT(zT.data[kT]);
            TT.setColorWrite(!0)
          }
          for (kT = 0; kT < oT.length; kT++) rT(oT.data[kT]);
          for (TT.setDepthWrite(!1), kT = 0; kT < IT.length; kT++) rT(IT.data[kT]);
          if (this.renderTransparentMeshes)
            for (kT = 0; kT < iT.length; kT++) rT(iT.data[kT]);
          TT.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const TT = this._scene.Zc();
        return {
          width: Math.max(1, Math.floor(TT.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(TT.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(TT, oT) {
        for (let IT = 0; IT < TT.length; IT++) oT[IT] = TT[IT];
        return oT
      }
    }
    qo.ForceGLSL = !1, qo.DEPTH_TEXTURE_TYPE = 0, qo.NORMAL_TEXTURE_TYPE = 1, qo.POSITION_TEXTURE_TYPE = 2, qo.VELOCITY_TEXTURE_TYPE = 3, qo.REFLECTIVITY_TEXTURE_TYPE = 4, qo.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, qo.VELOCITY_LINEAR_TEXTURE_TYPE = 6, qo.IRRADIANCE_TEXTURE_TYPE = 7, qo.OBJECT_ID_TEXTURE_TYPE = 8, qo.MESH_BLEND_TAG_TEXTURE_TYPE = 9, qo._SceneComponentInitialization = TT => {
      throw (0, ro.k)("GeometryBufferRendererSceneComponent")
    };
    var Zo = IT(36166);
    const so = {
      effect: null,
      subMesh: null
    };

    function to(TT) {
      if ("number" === typeof TT) return 1;
      if (TT instanceof HT.j) return 2;
      if (TT instanceof HT.m || TT instanceof GT.e) return 3;
      if (TT instanceof HT.n || TT instanceof GT.i) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Go {
      populateVectorFromLinkedProperties(TT) {
        const oT = to(TT);
        for (const IT in this.linkedProperties) {
          const TT = this.linkedProperties[IT],
            iT = TT.numComponents;
          if (oT < iT || TT.targetUniformComponentOffset > oT - iT) return void(1 == iT ? ET.d.Error(`Float property ${TT.name} has an offset that is too large.`) : ET.d.Error(`Vector${iT} property ${TT.name} won't fit in Vector${oT} or has an offset that is too large.`));
          "number" === typeof TT.value ? Go._tmpArray[TT.targetUniformComponentOffset] = TT.value : TT.value.toArray(Go._tmpArray, TT.targetUniformComponentOffset)
        }
        TT.joT(Go._tmpArray)
      }
      constructor(TT, oT) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = TT, this.numComponents = oT
      }
    }
    Go._tmpArray = [0, 0, 0, 0];
    class po {
      constructor(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          kT = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = TT, this.targetUniformName = IT, this.defaultValue = oT, this.value = oT, this.targetUniformComponentNum = iT, this.targetUniformComponentOffset = zT, this.requiredDefine = kT
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : to(this.defaultValue)
      }
    }
    class bo {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(TT, oT, IT) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = TT, this.samplerPrefix = oT, this.textureDefine = IT
      }
    }
    class yo extends((0, Ko.e)((0, co.c)(qT.d))) {}
    class No extends(function(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(yo)) {}
    class Po extends((0, pT.h)(No)) {
      constructor(TT) {
        super(TT), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Vo extends((0, Mo.d)(yT.e)) {}
    let TI = (() => {
        var TT, oT, iT, zT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT, jT, JT, UT, aT, OT, qT, ZT, lT, sT, pT, yT, VT, To, oo, Io, io, zo, ko, Wo, Xo, Bo, Fo, co, Ko, Mo, ro, Ao, go, ho, wo, mo, uo, vo, Eo, fo, Co, jo, Jo, Uo, ao, Yo, Qo, Oo, Ho, no, Zo, to, yo, No, TI, oI, II, iI, zI, kI, WI, XI, BI, FI, SI, DI, LI, xI, cI, KI, MI, rI, AI, gI, hI, wI, mI, eI, RI, uI, vI, EI, fI, CI, jI;
        let JI, UI, aI, YI, QI, OI, HI, nI, qI, ZI, lI, sI, tI, GI, pI, bI, yI, NI, PI, dI, VI, Ti, oi, Ii, ii, zi, ki, Wi, Xi, Bi, Fi, Si, Di, Li, xi, ci, Ki, Mi, ri, Ai, gi, wi, mi, ei, Ri, ui, vi, Ei, fi, Ci, ji, Ji, Ui, ai, Yi, Qi, Oi, Hi, ni, qi, Zi, li, si, ti, Gi, bi, yi, Ni, Pi, di, Vi, Tz, oz, Iz, iz, zz, kz, Wz, Xz, Bz, Fz, Sz, Dz, Lz, xz, cz, Kz, Mz, rz, Az, gz, hz, wz, mz, ez, Rz, uz, vz, Ez, fz, Cz, jz, Jz, Uz, az, Yz = Vo,
          Qz = [],
          Oz = [],
          Hz = [],
          nz = [],
          qz = [],
          Zz = [],
          lz = [],
          sz = [],
          tz = [],
          Gz = [],
          pz = [],
          bz = [],
          yz = [],
          Nz = [],
          Pz = [],
          dz = [],
          Vz = [],
          Tk = [],
          Ik = [],
          ik = [],
          zk = [],
          kk = [],
          Wk = [],
          Xk = [],
          Bk = [],
          Fk = [],
          Sk = [],
          Dk = [],
          Lk = [],
          xk = [],
          ck = [],
          Kk = [],
          Mk = [],
          rk = [],
          Ak = [],
          gk = [],
          hk = [],
          wk = [],
          mk = [],
          ek = [],
          Rk = [],
          uk = [],
          vk = [],
          Ek = [],
          fk = [],
          Ck = [],
          jk = [],
          Jk = [],
          Uk = [],
          ak = [],
          Yk = [],
          Qk = [],
          Ok = [],
          Hk = [],
          nk = [],
          qk = [],
          Zk = [],
          lk = [],
          sk = [],
          tk = [],
          Gk = [],
          pk = [],
          bk = [],
          yk = [],
          Nk = [],
          Pk = [],
          dk = [],
          Vk = [],
          TW = [],
          oW = [],
          IW = [],
          iW = [],
          zW = [],
          kW = [],
          WW = [],
          XW = [],
          BW = [],
          FW = [],
          SW = [],
          DW = [],
          LW = [],
          xW = [],
          cW = [],
          KW = [],
          MW = [],
          rW = [],
          AW = [],
          gW = [],
          hW = [],
          wW = [],
          mW = [],
          eW = [],
          RW = [],
          uW = [],
          vW = [],
          EW = [],
          fW = [],
          CW = [],
          jW = [],
          JW = [],
          UW = [],
          aW = [],
          YW = [],
          QW = [],
          OW = [],
          HW = [],
          nW = [],
          qW = [],
          ZW = [],
          lW = [],
          sW = [],
          tW = [],
          GW = [],
          pW = [],
          bW = [],
          yW = [],
          NW = [],
          PW = [],
          dW = [],
          VW = [],
          TX = [],
          oX = [],
          IX = [],
          iX = [],
          zX = [],
          kX = [],
          WX = [],
          XX = [],
          BX = [],
          FX = [],
          SX = [],
          DX = [],
          LX = [],
          xX = [],
          cX = [],
          KX = [],
          MX = [],
          rX = [],
          AX = [],
          gX = [],
          hX = [],
          wX = [],
          mX = [],
          eX = [],
          RX = [],
          uX = [],
          vX = [],
          EX = [],
          fX = [],
          CX = [],
          jX = [],
          JX = [],
          UX = [],
          aX = [],
          YX = [],
          QX = [],
          OX = [],
          HX = [],
          nX = [],
          qX = [],
          ZX = [],
          lX = [],
          sX = [],
          tX = [],
          GX = [],
          pX = [],
          bX = [],
          yX = [],
          NX = [],
          PX = [],
          dX = [],
          VX = [],
          TB = [],
          oB = [],
          IB = [],
          iB = [],
          zB = [],
          kB = [],
          WB = [],
          XB = [],
          BB = [],
          FB = [],
          SB = [],
          DB = [],
          LB = [],
          xB = [],
          cB = [],
          KB = [],
          MB = [],
          rB = [],
          AB = [],
          gB = [],
          hB = [],
          wB = [],
          mB = [],
          eB = [],
          RB = [],
          uB = [],
          vB = [],
          EB = [],
          fB = [],
          CB = [],
          jB = [],
          JB = [],
          UB = [];
        return TT = class extends Yz {
          get baseWeight() {
            return (0, uT.b)(this, oT, "f")
          }
          set baseWeight(TT) {
            (0, uT.e)(this, oT, TT, "f")
          }
          get baseWeightTexture() {
            return (0, uT.b)(this, iT, "f")
          }
          set baseWeightTexture(TT) {
            (0, uT.e)(this, iT, TT, "f")
          }
          get baseColor() {
            return (0, uT.b)(this, zT, "f")
          }
          set baseColor(TT) {
            (0, uT.e)(this, zT, TT, "f")
          }
          get baseColorTexture() {
            return (0, uT.b)(this, WT, "f")
          }
          set baseColorTexture(TT) {
            (0, uT.e)(this, WT, TT, "f")
          }
          get baseDiffuseRoughness() {
            return (0, uT.b)(this, XT, "f")
          }
          set baseDiffuseRoughness(TT) {
            (0, uT.e)(this, XT, TT, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, uT.b)(this, BT, "f")
          }
          set baseDiffuseRoughnessTexture(TT) {
            (0, uT.e)(this, BT, TT, "f")
          }
          get baseMetalness() {
            return (0, uT.b)(this, FT, "f")
          }
          set baseMetalness(TT) {
            (0, uT.e)(this, FT, TT, "f")
          }
          get baseMetalnessTexture() {
            return (0, uT.b)(this, ST, "f")
          }
          set baseMetalnessTexture(TT) {
            (0, uT.e)(this, ST, TT, "f")
          }
          get specularWeight() {
            return (0, uT.b)(this, DT, "f")
          }
          set specularWeight(TT) {
            (0, uT.e)(this, DT, TT, "f")
          }
          get specularWeightTexture() {
            return (0, uT.b)(this, LT, "f")
          }
          set specularWeightTexture(TT) {
            (0, uT.e)(this, LT, TT, "f")
          }
          get specularColor() {
            return (0, uT.b)(this, xT, "f")
          }
          set specularColor(TT) {
            (0, uT.e)(this, xT, TT, "f")
          }
          get specularColorTexture() {
            return (0, uT.b)(this, cT, "f")
          }
          set specularColorTexture(TT) {
            (0, uT.e)(this, cT, TT, "f")
          }
          get specularRoughness() {
            return (0, uT.b)(this, KT, "f")
          }
          set specularRoughness(TT) {
            (0, uT.e)(this, KT, TT, "f")
          }
          get specularRoughnessTexture() {
            return (0, uT.b)(this, MT, "f")
          }
          set specularRoughnessTexture(TT) {
            (0, uT.e)(this, MT, TT, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, uT.b)(this, rT, "f")
          }
          set specularRoughnessAnisotropy(TT) {
            (0, uT.e)(this, rT, TT, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, uT.b)(this, AT, "f")
          }
          set specularRoughnessAnisotropyTexture(TT) {
            (0, uT.e)(this, AT, TT, "f")
          }
          get specularIor() {
            return (0, uT.b)(this, gT, "f")
          }
          set specularIor(TT) {
            (0, uT.e)(this, gT, TT, "f")
          }
          get transmissionWeight() {
            return (0, uT.b)(this, hT, "f")
          }
          set transmissionWeight(TT) {
            (0, uT.e)(this, hT, TT, "f")
          }
          get transmissionWeightTexture() {
            return (0, uT.b)(this, wT, "f")
          }
          set transmissionWeightTexture(TT) {
            (0, uT.e)(this, wT, TT, "f")
          }
          get transmissionColor() {
            return (0, uT.b)(this, mT, "f")
          }
          set transmissionColor(TT) {
            (0, uT.e)(this, mT, TT, "f")
          }
          get transmissionColorTexture() {
            return (0, uT.b)(this, eT, "f")
          }
          set transmissionColorTexture(TT) {
            (0, uT.e)(this, eT, TT, "f")
          }
          get transmissionDepth() {
            return (0, uT.b)(this, RT, "f")
          }
          set transmissionDepth(TT) {
            (0, uT.e)(this, RT, TT, "f")
          }
          get transmissionDepthTexture() {
            return (0, uT.b)(this, jT, "f")
          }
          set transmissionDepthTexture(TT) {
            (0, uT.e)(this, jT, TT, "f")
          }
          get transmissionScatter() {
            return (0, uT.b)(this, JT, "f")
          }
          set transmissionScatter(TT) {
            (0, uT.e)(this, JT, TT, "f")
          }
          get transmissionScatterTexture() {
            return (0, uT.b)(this, UT, "f")
          }
          set transmissionScatterTexture(TT) {
            (0, uT.e)(this, UT, TT, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, uT.b)(this, aT, "f")
          }
          set transmissionScatterAnisotropy(TT) {
            (0, uT.e)(this, aT, TT, "f")
          }
          get transmissionDispersionScale() {
            return (0, uT.b)(this, OT, "f")
          }
          set transmissionDispersionScale(TT) {
            (0, uT.e)(this, OT, TT, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, uT.b)(this, qT, "f")
          }
          set transmissionDispersionScaleTexture(TT) {
            (0, uT.e)(this, qT, TT, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, uT.b)(this, ZT, "f")
          }
          set transmissionDispersionAbbeNumber(TT) {
            (0, uT.e)(this, ZT, TT, "f")
          }
          get subsurfaceWeight() {
            return (0, uT.b)(this, lT, "f")
          }
          set subsurfaceWeight(TT) {
            (0, uT.e)(this, lT, TT, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, uT.b)(this, sT, "f")
          }
          set subsurfaceWeightTexture(TT) {
            (0, uT.e)(this, sT, TT, "f")
          }
          get subsurfaceColor() {
            return (0, uT.b)(this, pT, "f")
          }
          set subsurfaceColor(TT) {
            (0, uT.e)(this, pT, TT, "f")
          }
          get subsurfaceColorTexture() {
            return (0, uT.b)(this, yT, "f")
          }
          set subsurfaceColorTexture(TT) {
            (0, uT.e)(this, yT, TT, "f")
          }
          get subsurfaceRadius() {
            return (0, uT.b)(this, VT, "f")
          }
          set subsurfaceRadius(TT) {
            (0, uT.e)(this, VT, TT, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, uT.b)(this, To, "f")
          }
          set subsurfaceRadiusScale(TT) {
            (0, uT.e)(this, To, TT, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, uT.b)(this, oo, "f")
          }
          set subsurfaceRadiusScaleTexture(TT) {
            (0, uT.e)(this, oo, TT, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, uT.b)(this, Io, "f")
          }
          set subsurfaceScatterAnisotropy(TT) {
            (0, uT.e)(this, Io, TT, "f")
          }
          get coatWeight() {
            return (0, uT.b)(this, io, "f")
          }
          set coatWeight(TT) {
            (0, uT.e)(this, io, TT, "f")
          }
          get coatWeightTexture() {
            return (0, uT.b)(this, zo, "f")
          }
          set coatWeightTexture(TT) {
            (0, uT.e)(this, zo, TT, "f")
          }
          get coatColor() {
            return (0, uT.b)(this, ko, "f")
          }
          set coatColor(TT) {
            (0, uT.e)(this, ko, TT, "f")
          }
          get coatColorTexture() {
            return (0, uT.b)(this, Wo, "f")
          }
          set coatColorTexture(TT) {
            (0, uT.e)(this, Wo, TT, "f")
          }
          get coatRoughness() {
            return (0, uT.b)(this, Xo, "f")
          }
          set coatRoughness(TT) {
            (0, uT.e)(this, Xo, TT, "f")
          }
          get coatRoughnessTexture() {
            return (0, uT.b)(this, Bo, "f")
          }
          set coatRoughnessTexture(TT) {
            (0, uT.e)(this, Bo, TT, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, uT.b)(this, Fo, "f")
          }
          set coatRoughnessAnisotropy(TT) {
            (0, uT.e)(this, Fo, TT, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, uT.b)(this, co, "f")
          }
          set coatRoughnessAnisotropyTexture(TT) {
            (0, uT.e)(this, co, TT, "f")
          }
          get coatIor() {
            return (0, uT.b)(this, Ko, "f")
          }
          set coatIor(TT) {
            (0, uT.e)(this, Ko, TT, "f")
          }
          get coatDarkening() {
            return (0, uT.b)(this, Mo, "f")
          }
          set coatDarkening(TT) {
            (0, uT.e)(this, Mo, TT, "f")
          }
          get coatDarkeningTexture() {
            return (0, uT.b)(this, ro, "f")
          }
          set coatDarkeningTexture(TT) {
            (0, uT.e)(this, ro, TT, "f")
          }
          get fuzzWeight() {
            return (0, uT.b)(this, Ao, "f")
          }
          set fuzzWeight(TT) {
            (0, uT.e)(this, Ao, TT, "f")
          }
          get fuzzWeightTexture() {
            return (0, uT.b)(this, go, "f")
          }
          set fuzzWeightTexture(TT) {
            (0, uT.e)(this, go, TT, "f")
          }
          get fuzzColor() {
            return (0, uT.b)(this, ho, "f")
          }
          set fuzzColor(TT) {
            (0, uT.e)(this, ho, TT, "f")
          }
          get fuzzColorTexture() {
            return (0, uT.b)(this, wo, "f")
          }
          set fuzzColorTexture(TT) {
            (0, uT.e)(this, wo, TT, "f")
          }
          get fuzzRoughness() {
            return (0, uT.b)(this, mo, "f")
          }
          set fuzzRoughness(TT) {
            (0, uT.e)(this, mo, TT, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, uT.b)(this, uo, "f")
          }
          set fuzzRoughnessTexture(TT) {
            (0, uT.e)(this, uo, TT, "f")
          }
          get geometryThinWalled() {
            return (0, uT.b)(this, vo, "f")
          }
          set geometryThinWalled(TT) {
            (0, uT.e)(this, vo, TT, "f")
          }
          get geometryNormalTexture() {
            return (0, uT.b)(this, Eo, "f")
          }
          set geometryNormalTexture(TT) {
            (0, uT.e)(this, Eo, TT, "f")
          }
          get geometryTangent() {
            return (0, uT.b)(this, fo, "f")
          }
          set geometryTangent(TT) {
            (0, uT.e)(this, fo, TT, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(TT) {
            this.geometryTangent = new HT.j(Math.cos(TT), Math.sin(TT))
          }
          get geometryTangentTexture() {
            return (0, uT.b)(this, Co, "f")
          }
          set geometryTangentTexture(TT) {
            (0, uT.e)(this, Co, TT, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, uT.b)(this, jo, "f")
          }
          set geometryCoatNormalTexture(TT) {
            (0, uT.e)(this, jo, TT, "f")
          }
          get geometryCoatTangent() {
            return (0, uT.b)(this, Jo, "f")
          }
          set geometryCoatTangent(TT) {
            (0, uT.e)(this, Jo, TT, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(TT) {
            this.geometryCoatTangent = new HT.j(Math.cos(TT), Math.sin(TT))
          }
          get geometryCoatTangentTexture() {
            return (0, uT.b)(this, Uo, "f")
          }
          set geometryCoatTangentTexture(TT) {
            (0, uT.e)(this, Uo, TT, "f")
          }
          get geometryOpacity() {
            return (0, uT.b)(this, ao, "f")
          }
          set geometryOpacity(TT) {
            (0, uT.e)(this, ao, TT, "f")
          }
          get geometryOpacityTexture() {
            return (0, uT.b)(this, Yo, "f")
          }
          set geometryOpacityTexture(TT) {
            (0, uT.e)(this, Yo, TT, "f")
          }
          get geometryThickness() {
            return (0, uT.b)(this, Qo, "f")
          }
          set geometryThickness(TT) {
            (0, uT.e)(this, Qo, TT, "f")
          }
          get geometryThicknessTexture() {
            return (0, uT.b)(this, Oo, "f")
          }
          set geometryThicknessTexture(TT) {
            (0, uT.e)(this, Oo, TT, "f")
          }
          get emissionLuminance() {
            return (0, uT.b)(this, Ho, "f")
          }
          set emissionLuminance(TT) {
            (0, uT.e)(this, Ho, TT, "f")
          }
          get emissionColor() {
            return (0, uT.b)(this, no, "f")
          }
          set emissionColor(TT) {
            (0, uT.e)(this, no, TT, "f")
          }
          get emissionColorTexture() {
            return (0, uT.b)(this, Zo, "f")
          }
          set emissionColorTexture(TT) {
            (0, uT.e)(this, Zo, TT, "f")
          }
          get thinFilmWeight() {
            return (0, uT.b)(this, to, "f")
          }
          set thinFilmWeight(TT) {
            (0, uT.e)(this, to, TT, "f")
          }
          get thinFilmWeightTexture() {
            return (0, uT.b)(this, yo, "f")
          }
          set thinFilmWeightTexture(TT) {
            (0, uT.e)(this, yo, TT, "f")
          }
          get thinFilmThickness() {
            return (0, uT.b)(this, No, "f")
          }
          set thinFilmThickness(TT) {
            (0, uT.e)(this, No, TT, "f")
          }
          get thinFilmThicknessMin() {
            return (0, uT.b)(this, TI, "f")
          }
          set thinFilmThicknessMin(TT) {
            (0, uT.e)(this, TI, TT, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, uT.b)(this, oI, "f")
          }
          set thinFilmThicknessTexture(TT) {
            (0, uT.e)(this, oI, TT, "f")
          }
          get thinFilmIor() {
            return (0, uT.b)(this, II, "f")
          }
          set thinFilmIor(TT) {
            (0, uT.e)(this, II, TT, "f")
          }
          get ambientOcclusionTexture() {
            return (0, uT.b)(this, iI, "f")
          }
          set ambientOcclusionTexture(TT) {
            (0, uT.e)(this, iI, TT, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(TT) {
            this._sssQuality !== TT && (this._sssQuality = TT, this.roT(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(TT) {
            this._sssIrradianceTexture !== TT && (this._sssIrradianceTexture = TT, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(TT) {
            this._sssDepthTexture !== TT && (this._sssDepthTexture = TT, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, uT.b)(this, zI, "f")
          }
          set directIntensity(TT) {
            (0, uT.e)(this, zI, TT, "f")
          }
          get environmentIntensity() {
            return (0, uT.b)(this, kI, "f")
          }
          set environmentIntensity(TT) {
            (0, uT.e)(this, kI, TT, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, uT.b)(this, WI, "f")
          }
          set useSpecularWeightFromTextureAlpha(TT) {
            (0, uT.e)(this, WI, TT, "f")
          }
          get forceAlphaTest() {
            return (0, uT.b)(this, XI, "f")
          }
          set forceAlphaTest(TT) {
            (0, uT.e)(this, XI, TT, "f")
          }
          get alphaCutOff() {
            return (0, uT.b)(this, BI, "f")
          }
          set alphaCutOff(TT) {
            (0, uT.e)(this, BI, TT, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, uT.b)(this, FI, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(TT) {
            (0, uT.e)(this, FI, TT, "f")
          }
          get useAmbientInGrayScale() {
            return (0, uT.b)(this, SI, "f")
          }
          set useAmbientInGrayScale(TT) {
            (0, uT.e)(this, SI, TT, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(GT.e.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === kT.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(TT) {
            TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? kT.c.LIGHTFALLOFF_PHYSICAL : kT.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === kT.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(TT) {
            TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? kT.c.LIGHTFALLOFF_GLTF : kT.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, uT.b)(this, DI, "f")
          }
          set useObjectSpaceNormalMap(TT) {
            (0, uT.e)(this, DI, TT, "f")
          }
          get useParallax() {
            return (0, uT.b)(this, LI, "f")
          }
          set useParallax(TT) {
            (0, uT.e)(this, LI, TT, "f")
          }
          get useParallaxOcclusion() {
            return (0, uT.b)(this, xI, "f")
          }
          set useParallaxOcclusion(TT) {
            (0, uT.e)(this, xI, TT, "f")
          }
          get parallaxScaleBias() {
            return (0, uT.b)(this, cI, "f")
          }
          set parallaxScaleBias(TT) {
            (0, uT.e)(this, cI, TT, "f")
          }
          get disableLighting() {
            return (0, uT.b)(this, KI, "f")
          }
          set disableLighting(TT) {
            (0, uT.e)(this, KI, TT, "f")
          }
          get forceIrradianceInFragment() {
            return (0, uT.b)(this, MI, "f")
          }
          set forceIrradianceInFragment(TT) {
            (0, uT.e)(this, MI, TT, "f")
          }
          get maxSimultaneousLights() {
            return (0, uT.b)(this, rI, "f")
          }
          set maxSimultaneousLights(TT) {
            (0, uT.e)(this, rI, TT, "f")
          }
          get invertNormalMapX() {
            return (0, uT.b)(this, AI, "f")
          }
          set invertNormalMapX(TT) {
            (0, uT.e)(this, AI, TT, "f")
          }
          get invertNormalMapY() {
            return (0, uT.b)(this, gI, "f")
          }
          set invertNormalMapY(TT) {
            (0, uT.e)(this, gI, TT, "f")
          }
          get twoSidedLighting() {
            return (0, uT.b)(this, hI, "f")
          }
          set twoSidedLighting(TT) {
            (0, uT.e)(this, hI, TT, "f")
          }
          get useAlphaFresnel() {
            return (0, uT.b)(this, wI, "f")
          }
          set useAlphaFresnel(TT) {
            (0, uT.e)(this, wI, TT, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, uT.b)(this, mI, "f")
          }
          set useLinearAlphaFresnel(TT) {
            (0, uT.e)(this, mI, TT, "f")
          }
          get environmentBRDFTexture() {
            return (0, uT.b)(this, eI, "f")
          }
          set environmentBRDFTexture(TT) {
            (0, uT.e)(this, eI, TT, "f")
          }
          get forceNormalForward() {
            return (0, uT.b)(this, RI, "f")
          }
          set forceNormalForward(TT) {
            (0, uT.e)(this, RI, TT, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, uT.b)(this, uI, "f")
          }
          set enableSpecularAntiAliasing(TT) {
            (0, uT.e)(this, uI, TT, "f")
          }
          get useHorizonOcclusion() {
            return (0, uT.b)(this, vI, "f")
          }
          set useHorizonOcclusion(TT) {
            (0, uT.e)(this, vI, TT, "f")
          }
          get useRadianceOcclusion() {
            return (0, uT.b)(this, EI, "f")
          }
          set useRadianceOcclusion(TT) {
            (0, uT.e)(this, EI, TT, "f")
          }
          get unlit() {
            return (0, uT.b)(this, fI, "f")
          }
          set unlit(TT) {
            (0, uT.e)(this, fI, TT, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, uT.b)(this, CI, "f")
          }
          set applyDecalMapAfterDetailMap(TT) {
            (0, uT.e)(this, CI, TT, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(TT) {
            this._backgroundRefractionTexture = TT, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(TT) {
            this._refractionHighQualityBlur !== TT && (this._refractionHighQualityBlur = TT, this.roT(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(TT) {
            this._realTimeFiltering = TT, this.roT(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(TT) {
            this._realTimeFilteringQuality = TT, this.roT(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(TT) {
            this._fuzzSampleNumber = TT, this.roT(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, uT.b)(this, jI, "f")
          }
          set debugMode(TT) {
            (0, uT.e)(this, jI, TT, "f")
          }
          constructor(IT, vT) {
            super(IT, vT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), oT.set(this, ((0, uT.j)(this, Qz), (0, uT.j)(this, Oz, void 0))), this._baseWeight = ((0, uT.j)(this, Hz), new po("base_weight", 1, "vBaseWeight", 1)), iT.set(this, (0, uT.j)(this, nz, void 0)), this._baseWeightTexture = ((0, uT.j)(this, qz), new bo("base_weight", "baseWeight", "BASE_WEIGHT")), zT.set(this, (0, uT.j)(this, Zz, void 0)), this._baseColor = ((0, uT.j)(this, lz), new po("base_color", GT.e.White(), "vBaseColor", 4)), WT.set(this, (0, uT.j)(this, sz, void 0)), this._baseColorTexture = ((0, uT.j)(this, tz), new bo("base_color", "baseColor", "BASE_COLOR")), XT.set(this, (0, uT.j)(this, Gz, void 0)), this._baseDiffuseRoughness = ((0, uT.j)(this, pz), new po("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), BT.set(this, (0, uT.j)(this, bz, void 0)), this._baseDiffuseRoughnessTexture = ((0, uT.j)(this, yz), new bo("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), FT.set(this, (0, uT.j)(this, Nz, void 0)), this._baseMetalness = ((0, uT.j)(this, Pz), new po("base_metalness", 0, "vReflectanceInfo", 4, 0)), ST.set(this, (0, uT.j)(this, dz, void 0)), this._baseMetalnessTexture = ((0, uT.j)(this, Vz), new bo("base_metalness", "baseMetalness", "BASE_METALNESS")), DT.set(this, (0, uT.j)(this, Tk, void 0)), this._specularWeight = ((0, uT.j)(this, Ik), new po("specular_weight", 1, "vReflectanceInfo", 4, 3)), LT.set(this, (0, uT.j)(this, ik, void 0)), this._specularWeightTexture = ((0, uT.j)(this, zk), new bo("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), xT.set(this, (0, uT.j)(this, kk, void 0)), this._specularColor = ((0, uT.j)(this, Wk), new po("specular_color", GT.e.White(), "vSpecularColor", 4)), cT.set(this, (0, uT.j)(this, Xk, void 0)), this._specularColorTexture = ((0, uT.j)(this, Bk), new bo("specular_color", "specularColor", "SPECULAR_COLOR")), KT.set(this, (0, uT.j)(this, Fk, void 0)), this._specularRoughness = ((0, uT.j)(this, Sk), new po("specular_roughness", .3, "vReflectanceInfo", 4, 1)), MT.set(this, (0, uT.j)(this, Dk, void 0)), this._specularRoughnessTexture = ((0, uT.j)(this, Lk), new bo("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), rT.set(this, (0, uT.j)(this, xk, void 0)), this._specularRoughnessAnisotropy = ((0, uT.j)(this, ck), new po("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), AT.set(this, (0, uT.j)(this, Kk, void 0)), this._specularRoughnessAnisotropyTexture = ((0, uT.j)(this, Mk), new bo("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), gT.set(this, (0, uT.j)(this, rk, void 0)), this._specularIor = ((0, uT.j)(this, Ak), new po("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), hT.set(this, (0, uT.j)(this, gk, void 0)), this._transmissionWeight = ((0, uT.j)(this, hk), new po("transmission_weight", 0, "vTransmissionWeight", 1)), wT.set(this, (0, uT.j)(this, wk, void 0)), this._transmissionWeightTexture = ((0, uT.j)(this, mk), new bo("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), mT.set(this, (0, uT.j)(this, ek, void 0)), this._transmissionColor = ((0, uT.j)(this, Rk), new po("transmission_color", GT.e.White(), "vTransmissionColor", 3, 0)), eT.set(this, (0, uT.j)(this, uk, void 0)), this._transmissionColorTexture = ((0, uT.j)(this, vk), new bo("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), RT.set(this, (0, uT.j)(this, Ek, void 0)), this._transmissionDepth = ((0, uT.j)(this, fk), new po("transmission_depth", 0, "vTransmissionDepth", 1, 0)), jT.set(this, (0, uT.j)(this, Ck, void 0)), this._transmissionDepthTexture = ((0, uT.j)(this, jk), new bo("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), JT.set(this, (0, uT.j)(this, Jk, void 0)), this._transmissionScatter = ((0, uT.j)(this, Uk), new po("transmission_scatter", GT.e.Black(), "vTransmissionScatter", 3, 0)), UT.set(this, (0, uT.j)(this, ak, void 0)), this._transmissionScatterTexture = ((0, uT.j)(this, Yk), new bo("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), aT.set(this, (0, uT.j)(this, Qk, void 0)), this._transmissionScatterAnisotropy = ((0, uT.j)(this, Ok), new po("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), OT.set(this, (0, uT.j)(this, Hk, void 0)), this._transmissionDispersionScale = ((0, uT.j)(this, nk), new po("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), qT.set(this, (0, uT.j)(this, qk, void 0)), this._transmissionDispersionScaleTexture = ((0, uT.j)(this, Zk), new bo("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), ZT.set(this, (0, uT.j)(this, lk, void 0)), this._transmissionDispersionAbbeNumber = ((0, uT.j)(this, sk), new po("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), lT.set(this, (0, uT.j)(this, tk, void 0)), this._subsurfaceWeight = ((0, uT.j)(this, Gk), new po("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), sT.set(this, (0, uT.j)(this, pk, void 0)), this._subsurfaceWeightTexture = ((0, uT.j)(this, bk), new bo("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), pT.set(this, (0, uT.j)(this, yk, void 0)), this._subsurfaceColor = ((0, uT.j)(this, Nk), new po("subsurface_color", new GT.e(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), yT.set(this, (0, uT.j)(this, Pk, void 0)), this._subsurfaceColorTexture = ((0, uT.j)(this, dk), new bo("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), VT.set(this, (0, uT.j)(this, Vk, void 0)), this._subsurfaceRadius = ((0, uT.j)(this, TW), new po("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), To.set(this, (0, uT.j)(this, oW, void 0)), this._subsurfaceRadiusScale = ((0, uT.j)(this, IW), new po("subsurface_radius_scale", new GT.e(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), oo.set(this, (0, uT.j)(this, iW, void 0)), this._subsurfaceRadiusScaleTexture = ((0, uT.j)(this, zW), new bo("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Io.set(this, (0, uT.j)(this, kW, void 0)), this._subsurfaceScatterAnisotropy = ((0, uT.j)(this, WW), new po("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), io.set(this, (0, uT.j)(this, XW, void 0)), this._coatWeight = ((0, uT.j)(this, BW), new po("coat_weight", 0, "vCoatWeight", 1, 0)), zo.set(this, (0, uT.j)(this, FW, void 0)), this._coatWeightTexture = ((0, uT.j)(this, SW), new bo("coat_weight", "coatWeight", "COAT_WEIGHT")), ko.set(this, (0, uT.j)(this, DW, void 0)), this._coatColor = ((0, uT.j)(this, LW), new po("coat_color", GT.e.White(), "vCoatColor", 3, 0)), Wo.set(this, (0, uT.j)(this, xW, void 0)), this._coatColorTexture = ((0, uT.j)(this, cW), new bo("coat_color", "coatColor", "COAT_COLOR")), Xo.set(this, (0, uT.j)(this, KW, void 0)), this._coatRoughness = ((0, uT.j)(this, MW), new po("coat_roughness", 0, "vCoatRoughness", 1, 0)), Bo.set(this, (0, uT.j)(this, rW, void 0)), this._coatRoughnessTexture = ((0, uT.j)(this, AW), new bo("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Fo.set(this, (0, uT.j)(this, gW, void 0)), this._coatRoughnessAnisotropy = ((0, uT.j)(this, hW), new po("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), co.set(this, (0, uT.j)(this, wW, void 0)), this._coatRoughnessAnisotropyTexture = ((0, uT.j)(this, mW), new bo("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Ko.set(this, (0, uT.j)(this, eW, void 0)), this._coatIor = ((0, uT.j)(this, RW), new po("coat_ior", 1.5, "vCoatIor", 1, 0)), Mo.set(this, (0, uT.j)(this, uW, void 0)), this._coatDarkening = ((0, uT.j)(this, vW), new po("coat_darkening", 1, "vCoatDarkening", 1, 0)), ro.set(this, (0, uT.j)(this, EW, void 0)), this._coatDarkeningTexture = ((0, uT.j)(this, fW), new bo("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Ao.set(this, (0, uT.j)(this, CW, void 0)), this._fuzzWeight = ((0, uT.j)(this, jW), new po("fuzz_weight", 0, "vFuzzWeight", 1, 0)), go.set(this, (0, uT.j)(this, JW, void 0)), this._fuzzWeightTexture = ((0, uT.j)(this, UW), new bo("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), ho.set(this, (0, uT.j)(this, aW, void 0)), this._fuzzColor = ((0, uT.j)(this, YW), new po("fuzz_color", GT.e.White(), "vFuzzColor", 3, 0)), wo.set(this, (0, uT.j)(this, QW, void 0)), this._fuzzColorTexture = ((0, uT.j)(this, OW), new bo("fuzz_color", "fuzzColor", "FUZZ_COLOR")), mo.set(this, (0, uT.j)(this, HW, void 0)), this._fuzzRoughness = ((0, uT.j)(this, nW), new po("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), uo.set(this, (0, uT.j)(this, qW, void 0)), this._fuzzRoughnessTexture = ((0, uT.j)(this, ZW), new bo("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), vo.set(this, (0, uT.j)(this, lW, void 0)), this._geometryThinWalled = ((0, uT.j)(this, sW), new po("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), Eo.set(this, (0, uT.j)(this, tW, void 0)), this._geometryNormalTexture = ((0, uT.j)(this, GW), new bo("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), fo.set(this, (0, uT.j)(this, pW, void 0)), this._geometryTangent = ((0, uT.j)(this, bW), new po("geometry_tangent", new HT.j(1, 0), "vSpecularAnisotropy", 3, 0)), Co.set(this, (0, uT.j)(this, yW, void 0)), this._geometryTangentTexture = ((0, uT.j)(this, NW), new bo("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), jo.set(this, (0, uT.j)(this, PW, void 0)), this._geometryCoatNormalTexture = ((0, uT.j)(this, dW), new bo("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Jo.set(this, (0, uT.j)(this, VW, void 0)), this._geometryCoatTangent = ((0, uT.j)(this, TX), new po("geometry_coat_tangent", new HT.j(1, 0), "vGeometryCoatTangent", 2, 0)), Uo.set(this, (0, uT.j)(this, oX, void 0)), this._geometryCoatTangentTexture = ((0, uT.j)(this, IX), new bo("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), ao.set(this, (0, uT.j)(this, iX, void 0)), this._geometryOpacity = ((0, uT.j)(this, zX), new po("geometry_opacity", 1, "vBaseColor", 4, 3)), Yo.set(this, (0, uT.j)(this, kX, void 0)), this._geometryOpacityTexture = ((0, uT.j)(this, WX), new bo("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Qo.set(this, (0, uT.j)(this, XX, void 0)), this._geometryThickness = ((0, uT.j)(this, BX), new po("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Oo.set(this, (0, uT.j)(this, FX, void 0)), this._geometryThicknessTexture = ((0, uT.j)(this, SX), new bo("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Ho.set(this, (0, uT.j)(this, DX, void 0)), this._emissionLuminance = ((0, uT.j)(this, LX), new po("emission_luminance", 1, "vLightingIntensity", 4, 1)), no.set(this, (0, uT.j)(this, xX, void 0)), this._emissionColor = ((0, uT.j)(this, cX), new po("emission_color", GT.e.Black(), "vEmissionColor", 3)), Zo.set(this, (0, uT.j)(this, KX, void 0)), this._emissionColorTexture = ((0, uT.j)(this, MX), new bo("emission_color", "emissionColor", "EMISSION_COLOR")), to.set(this, (0, uT.j)(this, rX, void 0)), this._thinFilmWeight = ((0, uT.j)(this, AX), new po("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), yo.set(this, (0, uT.j)(this, gX, void 0)), this._thinFilmWeightTexture = ((0, uT.j)(this, hX), new bo("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), No.set(this, (0, uT.j)(this, wX, void 0)), this._thinFilmThickness = ((0, uT.j)(this, mX), new po("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), TI.set(this, (0, uT.j)(this, eX, void 0)), this._thinFilmThicknessMin = ((0, uT.j)(this, RX), new po("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), oI.set(this, (0, uT.j)(this, uX, void 0)), this._thinFilmThicknessTexture = ((0, uT.j)(this, vX), new bo("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), II.set(this, (0, uT.j)(this, EX, void 0)), this._thinFilmIor = ((0, uT.j)(this, fX), new po("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), iI.set(this, (0, uT.j)(this, CX, void 0)), this._ambientOcclusionTexture = ((0, uT.j)(this, jX), new bo("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = TT.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, zI.set(this, (0, uT.j)(this, JX, 1)), kI.set(this, ((0, uT.j)(this, UX), (0, uT.j)(this, aX, 1))), WI.set(this, ((0, uT.j)(this, YX), (0, uT.j)(this, QX, !1))), XI.set(this, ((0, uT.j)(this, OX), (0, uT.j)(this, HX, !1))), BI.set(this, ((0, uT.j)(this, nX), (0, uT.j)(this, qX, .4))), FI.set(this, ((0, uT.j)(this, ZX), (0, uT.j)(this, lX, !1))), SI.set(this, ((0, uT.j)(this, sX), (0, uT.j)(this, tX, !1))), DI.set(this, ((0, uT.j)(this, GX), (0, uT.j)(this, pX, !1))), LI.set(this, ((0, uT.j)(this, bX), (0, uT.j)(this, yX, !1))), xI.set(this, ((0, uT.j)(this, NX), (0, uT.j)(this, PX, !1))), cI.set(this, ((0, uT.j)(this, dX), (0, uT.j)(this, VX, .05))), KI.set(this, ((0, uT.j)(this, TB), (0, uT.j)(this, oB, !1))), MI.set(this, ((0, uT.j)(this, IB), (0, uT.j)(this, iB, !1))), rI.set(this, ((0, uT.j)(this, zB), (0, uT.j)(this, kB, 4))), AI.set(this, ((0, uT.j)(this, WB), (0, uT.j)(this, XB, !1))), gI.set(this, ((0, uT.j)(this, BB), (0, uT.j)(this, FB, !1))), hI.set(this, ((0, uT.j)(this, SB), (0, uT.j)(this, DB, !1))), wI.set(this, ((0, uT.j)(this, LB), (0, uT.j)(this, xB, !1))), mI.set(this, ((0, uT.j)(this, cB), (0, uT.j)(this, KB, !1))), eI.set(this, ((0, uT.j)(this, MB), (0, uT.j)(this, rB, null))), RI.set(this, ((0, uT.j)(this, AB), (0, uT.j)(this, gB, !1))), uI.set(this, ((0, uT.j)(this, hB), (0, uT.j)(this, wB, !1))), vI.set(this, ((0, uT.j)(this, mB), (0, uT.j)(this, eB, !0))), EI.set(this, ((0, uT.j)(this, RB), (0, uT.j)(this, uB, !0))), fI.set(this, ((0, uT.j)(this, vB), (0, uT.j)(this, EB, !1))), CI.set(this, ((0, uT.j)(this, fB), (0, uT.j)(this, CB, !1))), this._lightingInfos = ((0, uT.j)(this, jB), new HT.n(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = kT.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new fT.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, jI.set(this, (0, uT.j)(this, JB, 0)), this.debugLimit = ((0, uT.j)(this, UB), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = kT.c.MATERIAL_OPAQUE, this.pC() && !this.pC()?.Zc().isWebGPU && this.pC().Zc().rK < 2 && ET.d.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), TT._noiseTextures[this.pC().uniqueId] || (TT._noiseTextures[this.pC().uniqueId] = new CT.g(Ro.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.pC(), !1, !0, 1), this.pC().bC.addOnce((() => {
              TT._noiseTextures[this.pC().uniqueId]?.dispose(), delete TT._noiseTextures[this.pC().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), NT.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), NT.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = QT(this.pC()), this._environmentFuzzBRDFTexture = YT(this.pC()), this.prePassConfiguration = new tT.d, this._propertyList = {};
            for (const TT of Object.getOwnPropertyNames(this)) {
              const oT = this[TT];
              oT instanceof po && (this._propertyList[TT] = oT)
            }
            Object.keys(this._propertyList).forEach((TT => {
              const oT = this._propertyList[TT];
              let IT = this._uniformsList[oT.targetUniformName];
              IT ? IT.numComponents !== oT.targetUniformComponentNum ? ET.d.Error(`Uniform ${oT.targetUniformName} already exists of size ${IT.numComponents}, but trying to set it to ${oT.targetUniformComponentNum}.`) : IT.requiredDefine !== oT.requiredDefine && (IT.requiredDefine = void 0) : (IT = new Go(oT.targetUniformName, oT.targetUniformComponentNum), IT.requiredDefine = oT.requiredDefine, this._uniformsList[oT.targetUniformName] = IT), "" === IT.firstLinkedKey && (IT.firstLinkedKey = oT.name), IT.linkedProperties[oT.name] = oT
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const TT of Object.getOwnPropertyNames(this)) {
              const oT = this[TT];
              oT instanceof bo && (this._samplersList[TT] = oT)
            }
            for (const TT in this._samplersList) {
              const oT = this._samplersList[TT].textureDefine;
              this._samplerDefines[oT] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[oT + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[oT + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(NT.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(NT.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(TT) {
            this._transparencyMode !== TT && (this._transparencyMode = TT, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== kT.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(TT) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(TT)
          }
          clone(oT) {
            let IT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const zT = eo.c.Clone((() => new TT(oT, this.pC())), this, {
              cloneTexturesOnlyOnce: IT
            });
            return zT.id = oT, zT.name = oT, this.stencil.copyTo(zT.stencil), this._clonePlugins(zT, iT), zT
          }
          serialize() {
            const TT = super.serialize();
            return TT.customType = "BABYLON.OpenPBRMaterial", TT
          }
          static Parse(oT, IT, iT) {
            const zT = eo.c.Parse((() => new TT(oT.name, IT)), oT, IT, iT);
            return oT.stencil && zT.stencil.parse(oT.stencil, IT, iT), kT.c._ParsePlugins(oT, zT, IT, iT), zT
          }
          forceCompilation(TT, oT, IT) {
            const iT = {
              clipPlane: !1,
              useInstances: !1,
              ...IT
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const IT = new Po({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                zT = this._prepareEffect(TT, TT, IT, void 0, void 0, iT.useInstances, iT.clipPlane);
              this._onEffectCreatedObservable && (so.effect = zT, so.subMesh = null, this._onEffectCreatedObservable.notifyObservers(so)), zT.isReady() ? oT && oT(this) : zT.onCompileObservable.add((() => {
                oT && oT(this)
              }))
            })()
          }
          isReadyForSubMesh(oT, IT, iT) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const zT = IT._drawWrapper;
            if (zT.effect && this.isFrozen && zT._wasPreviouslyReady && zT._wasPreviouslyUsingInstances === iT) return !0;
            IT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), IT.materialDefines = new Po({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const kT = IT.materialDefines;
            if (this._isReadyForSubMesh(IT)) return !0;
            const WT = this.pC(),
              XT = WT.Zc();
            if (kT._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, WT.texturesEnabled)) {
              for (const TT in this._samplersList) {
                const oT = this._samplersList[TT];
                if (oT.value && !oT.value.isReadyOrNotBlocking()) return !1
              }
              const oT = this._getRadianceTexture();
              if (oT && NT.c.ReflectionTextureEnabled) {
                if (!oT.isReadyOrNotBlocking()) return !1;
                if (oT.irradianceTexture) {
                  if (!oT.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!oT.sphericalPolynomial && oT.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && NT.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && NT.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && NT.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (TT._noiseTextures[WT.uniqueId] && !TT._noiseTextures[WT.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = kT, this._eventInfo.subMesh = IT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (kT._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (kT.AREALIGHTUSED)
              for (let TT = 0; TT < oT.lightSources.length; TT++)
                if (!oT.lightSources[TT]._isReady()) return !1;
            if (XT.getCaps().standardDerivatives || oT.isVerticesDataPresent(nT.i.NormalKind) || (oT.createNormals(!0), ET.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + oT.name)), !(0, dT.c)(WT, oT, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const BT = IT.effect,
              FT = kT._areLightsDisposed,
              ST = this._prepareEffect(oT, IT.getRenderingMesh(), kT, this.onCompiled, this.onError, iT, null);
            let DT = !1;
            if (ST)
              if (this._onEffectCreatedObservable && (so.effect = ST, so.subMesh = IT, this._onEffectCreatedObservable.notifyObservers(so)), this.allowShaderHotSwapping && BT && !ST.isReady()) {
                if (kT.markAsUnprocessed(), DT = this.isFrozen, FT) return kT._areLightsDisposed = !0, !1
              } else WT.resetCachedMaterial(), IT.setEffect(ST, kT, this._materialContext);
            return !(!IT.effect || !IT.effect.isReady()) && (kT._renderId = WT.getRenderId(), zT._wasPreviouslyReady = !DT, zT._wasPreviouslyUsingInstances = !!iT, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const TT = this._uniformBuffer;
            TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("vLightingIntensity", 4), TT.addUniform("pointSize", 1), TT.addUniform("vDebugMode", 2), TT.addUniform("renderTargetSize", 2), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), TT.addUniform("backgroundRefractionMatrix", 16), TT.addUniform("vBackgroundRefractionInfos", 3), (0, dT.Y)(TT, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((oT => {
              TT.addUniform(oT.name, oT.numComponents)
            })), Object.values(this._samplersList).forEach((oT => {
              TT.addUniform(oT.samplerInfoName, 2), TT.addUniform(oT.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(TT, oT, IT, iT) {
            if (0 === this.geometryThickness) TT.updateFloat("vGeometryThickness", 0);
            else {
              iT.getRenderingMesh().getWorldMatrix().decompose(HT.i.sc[0]);
              const oT = Math.max(Math.abs(HT.i.sc[0].x), Math.abs(HT.i.sc[0].y), Math.abs(HT.i.sc[0].z));
              TT.updateFloat("vGeometryThickness", this.geometryThickness * oT)
            }
          }
          bindForSubMesh(oT, IT, iT) {
            const zT = this.pC(),
              kT = iT.materialDefines;
            if (!kT) return;
            const WT = iT.effect;
            if (!WT) return;
            this._activeEffect = WT, IT.getMeshUniformBuffer().bindToEffect(WT, "Mesh"), IT.transferToEffect(oT);
            const XT = zT.Zc();
            this._uniformBuffer.bindToEffect(WT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, zT, IT, oT, this.isFrozen), xo.d.Bind(XT.currentRenderPassId, this._activeEffect, IT, oT, this);
            const BT = zT.activeCamera;
            BT ? this._uniformBuffer.updateFloat4("cameraInfo", BT.minZ, BT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const FT = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", FT[0], FT[1], FT[2], FT[3]), this._eventInfo.subMesh = iT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), kT.OBJECTSPACE_NORMALMAP && (oT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const ST = this._mustRebind(zT, WT, iT, IT.visibility),
              DT = XT._features.needToAlwaysBindUniformBuffers;
            (0, dT.d)(IT, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, Do.b)(this._activeEffect, this._vertexPullingMetadata);
            const LT = this._uniformBuffer;
            if (ST) {
              this.bindViewProjection(WT);
              const oT = this._getRadianceTexture();
              if (!LT.useUbo || !this.isFrozen || !LT.isSync || iT._drawWrapper._forceRebindOnNextCall) {
                if (zT.texturesEnabled) {
                  for (const TT in this._samplersList) {
                    const oT = this._samplersList[TT];
                    oT.value && (LT.updateFloat2(oT.samplerInfoName, oT.value.coordinatesIndex, oT.value.level), (0, dT.v)(oT.value, LT, oT.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (zT._mirroredCameraPosition ? LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : LT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, dT.g)(zT, kT, LT, GT.e.White(), oT, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && LT.updateFloat("pointSize", this.pointSize);
                const TT = this._uniformsArray;
                for (let oT = 0, IT = TT.length; oT < IT; oT++) {
                  const IT = TT[oT];
                  (void 0 === IT.requiredDefine || kT[IT.requiredDefine]) && (4 === IT.numComponents ? (IT.populateVectorFromLinkedProperties(HT.i.Vector4[0]), LT.updateVector4(IT.name, HT.i.Vector4[0])) : 3 === IT.numComponents ? (IT.populateVectorFromLinkedProperties(HT.i.sc[0]), LT.updateVector3(IT.name, HT.i.sc[0])) : 2 === IT.numComponents ? (IT.populateVectorFromLinkedProperties(HT.i.Vector2[0]), LT.updateFloat2(IT.name, HT.i.Vector2[0].x, HT.i.Vector2[0].y)) : 1 === IT.numComponents && LT.updateFloat(IT.name, IT.linkedProperties[IT.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * zT.environmentIntensity, this._lightingInfos.w = 1, LT.updateVector4("vLightingIntensity", this._lightingInfos), LT.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (zT.texturesEnabled) {
                for (const TT in this._samplersList) {
                  const oT = this._samplersList[TT];
                  oT.value && LT.setTexture(oT.samplerName, oT.value)
                }
                if ((0, dT.j)(zT, kT, LT, oT, this.realTimeFiltering), kT.ENVIRONMENTBRDF && LT.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), kT.FUZZENVIRONMENTBRDF && LT.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), kT.REFRACTED_BACKGROUND && (LT.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), LT.Y1("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), HT.i.sc[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), LT.updateVector3("vBackgroundRefractionInfos", HT.i.sc[1])), (kT.ANISOTROPIC || kT.FUZZ || kT.REFRACTED_BACKGROUND || kT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && LT.setTexture("blueNoiseSampler", TT._noiseTextures[this.pC().uniqueId]), kT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const TT = this.sssIrradianceTexture.getSize().width,
                    oT = this.sssIrradianceTexture.getSize().height;
                  LT.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), LT.setTexture("sceneDepthSampler", this.sssDepthTexture), LT.updateFloat2("renderTargetSize", TT, oT)
                }
              }
              this.pC().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(IT) && this.pC().depthPeelingRenderer.bind(WT), this._eventInfo.subMesh = iT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, So.d)(this._activeEffect, this, zT), this.bindEyePosition(WT)
            } else DT && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, zT, zT.Zc(), iT), !ST && this.isFrozen && !DT || !zT.lightsEnabled || this._disableLighting || (0, dT.m)(zT, IT, this._activeEffect, kT, this._maxSimultaneousLights), !ST && this.isFrozen || (this.bindView(WT), (0, dT.e)(zT, IT, this._activeEffect, !0), kT.NUM_MORPH_INFLUENCERS && (0, dT.r)(IT, this._activeEffect), kT.BAKED_VERTEX_ANIMATION_TEXTURE && IT.bakedVertexAnimationManager?.bind(WT, kT.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, dT.q)(kT, this._activeEffect, zT)), this._afterBind(IT, this._activeEffect, iT), LT.update()
          }
          getAnimatables() {
            const TT = super.getAnimatables();
            for (const oT in this._samplersList) {
              const IT = this._samplersList[oT];
              IT.value && IT.value.animations && IT.value.animations.length > 0 && TT.push(IT.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && TT.push(this._radianceTexture), TT
          }
          getActiveTextures() {
            const TT = super.getActiveTextures();
            for (const oT in this._samplersList) {
              const IT = this._samplersList[oT];
              IT.value && TT.push(IT.value)
            }
            return this._radianceTexture && TT.push(this._radianceTexture), TT
          }
          hasTexture(TT) {
            if (super.hasTexture(TT)) return !0;
            for (const oT in this._samplersList) {
              if (this._samplersList[oT].value === TT) return !0
            }
            return this._radianceTexture === TT
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(TT, oT) {
            if (this._breakShaderLoadedCheck = !0, oT) {
              this._environmentBRDFTexture && this.pC().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.pC().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const TT in this._samplersList) {
                const oT = this._samplersList[TT];
                oT.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, oT)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.pC().environmentTexture
          }
          _prepareEffect(oT, IT, iT) {
            let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              kT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              XT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(oT, IT, iT, WT, XT), !iT.isDirty) return null;
            iT.markAsProcessed();
            const BT = this.pC().Zc(),
              FT = new PT.e;
            let ST = 0;
            iT.USESPHERICALINVERTEX && FT.addFallback(ST++, "USESPHERICALINVERTEX"), iT.FOG && FT.addFallback(ST, "FOG"), iT.SPECULARAA && FT.addFallback(ST, "SPECULARAA"), iT.POINTSIZE && FT.addFallback(ST, "POINTSIZE"), iT.LOGARITHMICDEPTH && FT.addFallback(ST, "LOGARITHMICDEPTH"), iT.PARALLAX && FT.addFallback(ST, "PARALLAX"), iT.PARALLAX_RHS && FT.addFallback(ST, "PARALLAX_RHS"), iT.PARALLAXOCCLUSION && FT.addFallback(ST++, "PARALLAXOCCLUSION"), iT.ENVIRONMENTBRDF && FT.addFallback(ST++, "ENVIRONMENTBRDF"), iT.TANGENT && FT.addFallback(ST++, "TANGENT"), ST = (0, dT.x)(iT, FT, this._maxSimultaneousLights, ST), iT.SPECULARTERM && FT.addFallback(ST++, "SPECULARTERM"), iT.USESPHERICALFROMREFLECTIONMAP && FT.addFallback(ST++, "USESPHERICALFROMREFLECTIONMAP"), iT.USEIRRADIANCEMAP && FT.addFallback(ST++, "USEIRRADIANCEMAP"), iT.NORMAL && FT.addFallback(ST++, "NORMAL"), iT.VERTEXCOLOR && FT.addFallback(ST++, "VERTEXCOLOR"), iT.MORPHTARGETS && FT.addFallback(ST++, "MORPHTARGETS"), iT.MULTIVIEW && FT.addFallback(0, "MULTIVIEW");
            const DT = [nT.i.PositionKind];
            iT.NORMAL && DT.push(nT.i.NormalKind), iT.TANGENT && DT.push(nT.i.TangentKind);
            for (let TT = 1; TT <= 6; ++TT) iT["UV" + TT] && DT.push(`uv${1===TT?"":TT}`);
            iT.VERTEXCOLOR && DT.push(nT.i.ColorKind), (0, dT.C)(DT, oT, iT, FT), (0, dT.D)(DT, iT), (0, dT.F)(DT, oT, iT), (0, dT.y)(DT, oT, iT);
            let LT = "openpbr";
            const xT = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const TT in this._uniformsList) xT.push(TT);
            const cT = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            iT.FUZZENVIRONMENTBRDF && cT.push("environmentFuzzBrdfSampler"), iT.REFRACTED_BACKGROUND && cT.push("backgroundRefractionSampler"), (iT.ANISOTROPIC || iT.FUZZ || iT.REFRACTED_BACKGROUND || iT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && cT.push("blueNoiseSampler"), iT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (cT.push("sceneIrradianceSampler"), cT.push("sceneDepthSampler"));
            for (const TT in this._samplersList) {
              const oT = this._samplersList[TT];
              cT.push(oT.samplerName), xT.push(oT.samplerInfoName), xT.push(oT.samplerMatrixName)
            }(0, dT.$)(xT, cT, !0);
            const KT = ["Material", "Scene", "Mesh"],
              MT = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: iT.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = FT, this._eventInfo.fallbackRank = ST, this._eventInfo.defines = iT, this._eventInfo.uniforms = xT, this._eventInfo.attributes = DT, this._eventInfo.samplers = cT, this._eventInfo.uniformBuffersNames = KT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = oT, this._eventInfo.indexParameters = MT, this._callbackPluginEventGeneric(128, this._eventInfo), xo.d.AddUniformsAndSamplers(xT, cT), tT.d.AddUniforms(xT), tT.d.AddSamplers(cT), (0, So.b)(xT), this._useVertexPulling) {
              const TT = IT?.geometry;
              TT && (this._vertexPullingMetadata = (0, Do.d)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, oT) => {
                xT.push(`vp_${oT}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            bT.c && (bT.c.PrepareUniforms(xT, iT), bT.c.PrepareSamplers(cT, iT)), (0, dT.ab)({
              uniformsNames: xT,
              uniformBuffersNames: KT,
              samplers: cT,
              defines: iT,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const rT = {};
            this.customShaderNameResolve && (LT = this.customShaderNameResolve(LT, xT, KT, cT, iT, DT, rT));
            const AT = iT.toString(),
              gT = BT.createEffect(LT, {
                attributes: DT,
                uniformsNames: xT,
                uniformBuffersNames: KT,
                samplers: cT,
                defines: AT,
                fallbacks: FT,
                onCompiled: zT,
                onError: kT,
                indexParameters: MT,
                processFinalCode: rT.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: iT.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, BT);
            return this._eventInfo.customCode = void 0, gT
          }
          _prepareDefines(oT, IT, iT) {
            let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              WT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const XT = IT.hasThinInstances,
              BT = this.pC(),
              FT = BT.Zc();
            (0, dT.M)(BT, oT, iT, !0, this._maxSimultaneousLights, this._disableLighting), iT._needNormals = !0, (0, dT.V)(BT, iT);
            const ST = this.needAlphaBlendingForMesh(oT) && this.pC().useOrderIndependentTransparency;
            if ((0, dT.X)(BT, iT, this.canRenderToMRT && !ST), (0, dT.W)(BT, iT, ST), xo.d.PrepareDefines(FT.currentRenderPassId, oT, iT), iT._areTexturesDirty) {
              iT._needUVs = !1;
              for (let TT = 1; TT <= 6; ++TT) iT["MAINUV" + TT] = !1;
              if (BT.texturesEnabled) {
                for (const IT in this._samplersList) {
                  const TT = this._samplersList[IT];
                  TT.value ? ((0, dT.Q)(TT.value, iT, TT.textureDefine), iT[TT.textureDefine + "_GAMMA"] = TT.value.gammaSpace) : iT[TT.textureDefine] = !1
                }
                const TT = this._getRadianceTexture(),
                  oT = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || FT.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, dT.J)(BT, TT, iT, this.realTimeFiltering, this.realTimeFilteringQuality, !oT), this._baseMetalnessTexture && (iT.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), iT.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, iT.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, iT.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, iT.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, iT.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, iT.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, iT.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, iT.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, iT.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, iT.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, iT.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && NT.c.DiffuseTextureEnabled ? (iT.PARALLAX = !0, iT.PARALLAX_RHS = BT.useRightHandedSystem, iT.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : iT.PARALLAX = !1, iT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (iT.PARALLAX = !1, iT.PARALLAX_RHS = !1, iT.PARALLAXOCCLUSION = !1, iT.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && NT.c.ReflectionTextureEnabled ? (iT.ENVIRONMENTBRDF = !0, iT.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (iT.ENVIRONMENTBRDF = !1, iT.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? iT.FUZZENVIRONMENTBRDF = !0 : iT.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  iT.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && NT.c.RefractionTextureEnabled, iT.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, iT.REFRACTED_LIGHTS = !0;
                  const TT = this._getRadianceTexture();
                  TT ? (iT.REFRACTED_ENVIRONMENT = NT.c.RefractionTextureEnabled, iT.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.pC().useRightHandedSystem ? !TT.invertZ : TT.invertZ, iT.REFRACTED_ENVIRONMENT_LOCAL_CUBE = TT.isCube && TT.boundingBoxSize) : iT.REFRACTED_ENVIRONMENT = !1
                } else iT.REFRACTED_BACKGROUND = !1, iT.REFRACTED_LIGHTS = !1, iT.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? iT.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : iT.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === kT.c.LIGHTFALLOFF_STANDARD ? (iT.USEPHYSICALLIGHTFALLOFF = !1, iT.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === kT.c.LIGHTFALLOFF_GLTF ? (iT.USEPHYSICALLIGHTFALLOFF = !1, iT.USEGLTFLIGHTFALLOFF = !0) : (iT.USEPHYSICALLIGHTFALLOFF = !0, iT.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? iT.TWOSIDEDLIGHTING = !0 : iT.TWOSIDEDLIGHTING = !1, iT.MIRRORED = !!BT._mirroredCameraPosition, iT.SPECULARAA = FT.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(iT._areTexturesDirty || iT._areMiscDirty) && (iT.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, iT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, iT.ALPHABLEND = this.needAlphaBlendingForMesh(oT)), iT._areTexturesDirty && (iT.TEXTURE_REPETITION_MODE = FT.version > 1 || FT.isWebGPU ? this.textureRepetitionMode : 0), iT._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(iT), iT.FORCENORMALFORWARD = this._forceNormalForward, iT.RADIANCEOCCLUSION = this._useRadianceOcclusion, iT.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && TT._noiseTextures[BT.uniqueId] && NT.c.ReflectionTextureEnabled ? (iT.ANISOTROPIC = !0, oT.isVerticesDataPresent(nT.i.TangentKind) || (iT._needUVs = !0, iT.MAINUV1 = !0), this._useGltfStyleAnisotropy && (iT.USE_GLTF_STYLE_ANISOTROPY = !0), iT.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, iT.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (iT.ANISOTROPIC = !1, iT.USE_GLTF_STYLE_ANISOTROPY = !1, iT.ANISOTROPIC_BASE = !1, iT.ANISOTROPIC_COAT = !1), iT.THIN_FILM = this.thinFilmWeight > 0, iT.IRIDESCENCE = this.thinFilmWeight > 0, iT.DISPERSION = this.transmissionDispersionScale > 0, iT.SCATTERING = this.hasScattering;
            if (iT.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, iT.TRANSMISSION_SLAB = this.transmissionWeight > 0, iT.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, iT.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !iT.PREPASS && (iT.SUBSURFACE_SLAB || iT.TRANSMISSION_SLAB_VOLUME)) {
              let TT = !1;
              if (!this.sssIrradianceTexture && BT.geometryBufferRenderer) {
                const oT = BT.geometryBufferRenderer.getTextureIndex(qo.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = BT.geometryBufferRenderer.getGBuffer().textures[oT], TT = !0
              }
              if (!this.sssDepthTexture && BT.geometryBufferRenderer) {
                const oT = BT.geometryBufferRenderer.getTextureIndex(qo.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = BT.geometryBufferRenderer.getGBuffer().textures[oT], TT = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (iT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, TT && (iT.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            iT.FUZZ = this.fuzzWeight > 0 && NT.c.ReflectionTextureEnabled, iT.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, iT.FUZZ ? (oT.isVerticesDataPresent(nT.i.TangentKind) || (iT._needUVs = !0, iT.MAINUV1 = !0), this._environmentFuzzBRDFTexture = YT(this.pC()), iT.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, iT.FUZZENVIRONMENTBRDF = !1, iT.FUZZ_IBL_SAMPLES = 0), iT._areMiscDirty && ((0, dT.U)(oT, BT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(oT), iT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, IT, this._isVertexOutputInvariant), iT.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !oT.isVerticesDataPresent(nT.i.NormalKind), iT.DEBUGMODE = this._debugMode), (0, dT.I)(BT, FT, this, iT, !!zT, WT, XT), this._eventInfo.defines = iT, this._eventInfo.mesh = oT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dT.H)(oT, iT, !0, !0, !0, this._transparencyMode !== kT.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, oT = new WeakMap, iT = new WeakMap, zT = new WeakMap, WT = new WeakMap, XT = new WeakMap, BT = new WeakMap, FT = new WeakMap, ST = new WeakMap, DT = new WeakMap, LT = new WeakMap, xT = new WeakMap, cT = new WeakMap, KT = new WeakMap, MT = new WeakMap, rT = new WeakMap, AT = new WeakMap, gT = new WeakMap, hT = new WeakMap, wT = new WeakMap, mT = new WeakMap, eT = new WeakMap, RT = new WeakMap, jT = new WeakMap, JT = new WeakMap, UT = new WeakMap, aT = new WeakMap, OT = new WeakMap, qT = new WeakMap, ZT = new WeakMap, lT = new WeakMap, sT = new WeakMap, pT = new WeakMap, yT = new WeakMap, VT = new WeakMap, To = new WeakMap, oo = new WeakMap, Io = new WeakMap, io = new WeakMap, zo = new WeakMap, ko = new WeakMap, Wo = new WeakMap, Xo = new WeakMap, Bo = new WeakMap, Fo = new WeakMap, co = new WeakMap, Ko = new WeakMap, Mo = new WeakMap, ro = new WeakMap, Ao = new WeakMap, go = new WeakMap, ho = new WeakMap, wo = new WeakMap, mo = new WeakMap, uo = new WeakMap, vo = new WeakMap, Eo = new WeakMap, fo = new WeakMap, Co = new WeakMap, jo = new WeakMap, Jo = new WeakMap, Uo = new WeakMap, ao = new WeakMap, Yo = new WeakMap, Qo = new WeakMap, Oo = new WeakMap, Ho = new WeakMap, no = new WeakMap, Zo = new WeakMap, to = new WeakMap, yo = new WeakMap, No = new WeakMap, TI = new WeakMap, oI = new WeakMap, II = new WeakMap, iI = new WeakMap, zI = new WeakMap, kI = new WeakMap, WI = new WeakMap, XI = new WeakMap, BI = new WeakMap, FI = new WeakMap, SI = new WeakMap, DI = new WeakMap, LI = new WeakMap, xI = new WeakMap, cI = new WeakMap, KI = new WeakMap, MI = new WeakMap, rI = new WeakMap, AI = new WeakMap, gI = new WeakMap, hI = new WeakMap, wI = new WeakMap, mI = new WeakMap, eI = new WeakMap, RI = new WeakMap, uI = new WeakMap, vI = new WeakMap, EI = new WeakMap, fI = new WeakMap, CI = new WeakMap, jI = new WeakMap, (() => {
          const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yz[Symbol.metadata] ?? null) : void 0;
          JI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], aI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], YI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], QI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], nI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], qI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ZI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], lI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], sI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], tI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], GI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], pI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], yI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], NI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], PI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], dI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], VI = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ti = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], oi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ii = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ii = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Wi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Xi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Fi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Si = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Li = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], xi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ki = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Mi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ai = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], gi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], wi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], mi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ei = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ri = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ui = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ei = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ji = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ui = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Yi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Oi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Hi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ni = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], qi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Zi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], li = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], si = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], ti = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], bi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], yi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Ni = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Pi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], di = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], oz = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], Iz = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, vT.d)("_markAllSubMeshesAsTexturesDirty")], zz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], kz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Wz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Bz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Fz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, vT.P)()], Lz = [(0, vT.P)()], xz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Mz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsLightsDirty")], Az = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], gz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsLightsDirty")], hz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], wz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, vT.h)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Cz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], Jz = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], Uz = [(0, vT.h)("_markAllSubMeshesAsMiscDirty")], az = [(0, vT.P)()], (0, uT.h)(TT, null, JI, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseWeight" in TT,
              get: TT => TT.baseWeight,
              set: (TT, oT) => {
                TT.baseWeight = oT
              }
            },
            metadata: oT
          }, Oz, Hz), (0, uT.h)(TT, null, UI, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseWeightTexture" in TT,
              get: TT => TT.baseWeightTexture,
              set: (TT, oT) => {
                TT.baseWeightTexture = oT
              }
            },
            metadata: oT
          }, nz, qz), (0, uT.h)(TT, null, aI, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseColor" in TT,
              get: TT => TT.baseColor,
              set: (TT, oT) => {
                TT.baseColor = oT
              }
            },
            metadata: oT
          }, Zz, lz), (0, uT.h)(TT, null, YI, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseColorTexture" in TT,
              get: TT => TT.baseColorTexture,
              set: (TT, oT) => {
                TT.baseColorTexture = oT
              }
            },
            metadata: oT
          }, sz, tz), (0, uT.h)(TT, null, QI, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseDiffuseRoughness" in TT,
              get: TT => TT.baseDiffuseRoughness,
              set: (TT, oT) => {
                TT.baseDiffuseRoughness = oT
              }
            },
            metadata: oT
          }, Gz, pz), (0, uT.h)(TT, null, OI, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseDiffuseRoughnessTexture" in TT,
              get: TT => TT.baseDiffuseRoughnessTexture,
              set: (TT, oT) => {
                TT.baseDiffuseRoughnessTexture = oT
              }
            },
            metadata: oT
          }, bz, yz), (0, uT.h)(TT, null, HI, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseMetalness" in TT,
              get: TT => TT.baseMetalness,
              set: (TT, oT) => {
                TT.baseMetalness = oT
              }
            },
            metadata: oT
          }, Nz, Pz), (0, uT.h)(TT, null, nI, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "baseMetalnessTexture" in TT,
              get: TT => TT.baseMetalnessTexture,
              set: (TT, oT) => {
                TT.baseMetalnessTexture = oT
              }
            },
            metadata: oT
          }, dz, Vz), (0, uT.h)(TT, null, qI, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularWeight" in TT,
              get: TT => TT.specularWeight,
              set: (TT, oT) => {
                TT.specularWeight = oT
              }
            },
            metadata: oT
          }, Tk, Ik), (0, uT.h)(TT, null, ZI, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularWeightTexture" in TT,
              get: TT => TT.specularWeightTexture,
              set: (TT, oT) => {
                TT.specularWeightTexture = oT
              }
            },
            metadata: oT
          }, ik, zk), (0, uT.h)(TT, null, lI, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColor" in TT,
              get: TT => TT.specularColor,
              set: (TT, oT) => {
                TT.specularColor = oT
              }
            },
            metadata: oT
          }, kk, Wk), (0, uT.h)(TT, null, sI, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColorTexture" in TT,
              get: TT => TT.specularColorTexture,
              set: (TT, oT) => {
                TT.specularColorTexture = oT
              }
            },
            metadata: oT
          }, Xk, Bk), (0, uT.h)(TT, null, tI, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughness" in TT,
              get: TT => TT.specularRoughness,
              set: (TT, oT) => {
                TT.specularRoughness = oT
              }
            },
            metadata: oT
          }, Fk, Sk), (0, uT.h)(TT, null, GI, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessTexture" in TT,
              get: TT => TT.specularRoughnessTexture,
              set: (TT, oT) => {
                TT.specularRoughnessTexture = oT
              }
            },
            metadata: oT
          }, Dk, Lk), (0, uT.h)(TT, null, pI, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessAnisotropy" in TT,
              get: TT => TT.specularRoughnessAnisotropy,
              set: (TT, oT) => {
                TT.specularRoughnessAnisotropy = oT
              }
            },
            metadata: oT
          }, xk, ck), (0, uT.h)(TT, null, bI, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularRoughnessAnisotropyTexture" in TT,
              get: TT => TT.specularRoughnessAnisotropyTexture,
              set: (TT, oT) => {
                TT.specularRoughnessAnisotropyTexture = oT
              }
            },
            metadata: oT
          }, Kk, Mk), (0, uT.h)(TT, null, yI, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularIor" in TT,
              get: TT => TT.specularIor,
              set: (TT, oT) => {
                TT.specularIor = oT
              }
            },
            metadata: oT
          }, rk, Ak), (0, uT.h)(TT, null, NI, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionWeight" in TT,
              get: TT => TT.transmissionWeight,
              set: (TT, oT) => {
                TT.transmissionWeight = oT
              }
            },
            metadata: oT
          }, gk, hk), (0, uT.h)(TT, null, PI, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionWeightTexture" in TT,
              get: TT => TT.transmissionWeightTexture,
              set: (TT, oT) => {
                TT.transmissionWeightTexture = oT
              }
            },
            metadata: oT
          }, wk, mk), (0, uT.h)(TT, null, dI, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionColor" in TT,
              get: TT => TT.transmissionColor,
              set: (TT, oT) => {
                TT.transmissionColor = oT
              }
            },
            metadata: oT
          }, ek, Rk), (0, uT.h)(TT, null, VI, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionColorTexture" in TT,
              get: TT => TT.transmissionColorTexture,
              set: (TT, oT) => {
                TT.transmissionColorTexture = oT
              }
            },
            metadata: oT
          }, uk, vk), (0, uT.h)(TT, null, Ti, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDepth" in TT,
              get: TT => TT.transmissionDepth,
              set: (TT, oT) => {
                TT.transmissionDepth = oT
              }
            },
            metadata: oT
          }, Ek, fk), (0, uT.h)(TT, null, oi, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDepthTexture" in TT,
              get: TT => TT.transmissionDepthTexture,
              set: (TT, oT) => {
                TT.transmissionDepthTexture = oT
              }
            },
            metadata: oT
          }, Ck, jk), (0, uT.h)(TT, null, Ii, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatter" in TT,
              get: TT => TT.transmissionScatter,
              set: (TT, oT) => {
                TT.transmissionScatter = oT
              }
            },
            metadata: oT
          }, Jk, Uk), (0, uT.h)(TT, null, ii, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatterTexture" in TT,
              get: TT => TT.transmissionScatterTexture,
              set: (TT, oT) => {
                TT.transmissionScatterTexture = oT
              }
            },
            metadata: oT
          }, ak, Yk), (0, uT.h)(TT, null, zi, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionScatterAnisotropy" in TT,
              get: TT => TT.transmissionScatterAnisotropy,
              set: (TT, oT) => {
                TT.transmissionScatterAnisotropy = oT
              }
            },
            metadata: oT
          }, Qk, Ok), (0, uT.h)(TT, null, ki, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionScale" in TT,
              get: TT => TT.transmissionDispersionScale,
              set: (TT, oT) => {
                TT.transmissionDispersionScale = oT
              }
            },
            metadata: oT
          }, Hk, nk), (0, uT.h)(TT, null, Wi, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionScaleTexture" in TT,
              get: TT => TT.transmissionDispersionScaleTexture,
              set: (TT, oT) => {
                TT.transmissionDispersionScaleTexture = oT
              }
            },
            metadata: oT
          }, qk, Zk), (0, uT.h)(TT, null, Xi, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "transmissionDispersionAbbeNumber" in TT,
              get: TT => TT.transmissionDispersionAbbeNumber,
              set: (TT, oT) => {
                TT.transmissionDispersionAbbeNumber = oT
              }
            },
            metadata: oT
          }, lk, sk), (0, uT.h)(TT, null, Bi, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceWeight" in TT,
              get: TT => TT.subsurfaceWeight,
              set: (TT, oT) => {
                TT.subsurfaceWeight = oT
              }
            },
            metadata: oT
          }, tk, Gk), (0, uT.h)(TT, null, Fi, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceWeightTexture" in TT,
              get: TT => TT.subsurfaceWeightTexture,
              set: (TT, oT) => {
                TT.subsurfaceWeightTexture = oT
              }
            },
            metadata: oT
          }, pk, bk), (0, uT.h)(TT, null, Si, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceColor" in TT,
              get: TT => TT.subsurfaceColor,
              set: (TT, oT) => {
                TT.subsurfaceColor = oT
              }
            },
            metadata: oT
          }, yk, Nk), (0, uT.h)(TT, null, Di, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceColorTexture" in TT,
              get: TT => TT.subsurfaceColorTexture,
              set: (TT, oT) => {
                TT.subsurfaceColorTexture = oT
              }
            },
            metadata: oT
          }, Pk, dk), (0, uT.h)(TT, null, Li, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadius" in TT,
              get: TT => TT.subsurfaceRadius,
              set: (TT, oT) => {
                TT.subsurfaceRadius = oT
              }
            },
            metadata: oT
          }, Vk, TW), (0, uT.h)(TT, null, xi, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadiusScale" in TT,
              get: TT => TT.subsurfaceRadiusScale,
              set: (TT, oT) => {
                TT.subsurfaceRadiusScale = oT
              }
            },
            metadata: oT
          }, oW, IW), (0, uT.h)(TT, null, ci, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceRadiusScaleTexture" in TT,
              get: TT => TT.subsurfaceRadiusScaleTexture,
              set: (TT, oT) => {
                TT.subsurfaceRadiusScaleTexture = oT
              }
            },
            metadata: oT
          }, iW, zW), (0, uT.h)(TT, null, Ki, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "subsurfaceScatterAnisotropy" in TT,
              get: TT => TT.subsurfaceScatterAnisotropy,
              set: (TT, oT) => {
                TT.subsurfaceScatterAnisotropy = oT
              }
            },
            metadata: oT
          }, kW, WW), (0, uT.h)(TT, null, Mi, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatWeight" in TT,
              get: TT => TT.coatWeight,
              set: (TT, oT) => {
                TT.coatWeight = oT
              }
            },
            metadata: oT
          }, XW, BW), (0, uT.h)(TT, null, ri, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatWeightTexture" in TT,
              get: TT => TT.coatWeightTexture,
              set: (TT, oT) => {
                TT.coatWeightTexture = oT
              }
            },
            metadata: oT
          }, FW, SW), (0, uT.h)(TT, null, Ai, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatColor" in TT,
              get: TT => TT.coatColor,
              set: (TT, oT) => {
                TT.coatColor = oT
              }
            },
            metadata: oT
          }, DW, LW), (0, uT.h)(TT, null, gi, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatColorTexture" in TT,
              get: TT => TT.coatColorTexture,
              set: (TT, oT) => {
                TT.coatColorTexture = oT
              }
            },
            metadata: oT
          }, xW, cW), (0, uT.h)(TT, null, wi, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughness" in TT,
              get: TT => TT.coatRoughness,
              set: (TT, oT) => {
                TT.coatRoughness = oT
              }
            },
            metadata: oT
          }, KW, MW), (0, uT.h)(TT, null, mi, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessTexture" in TT,
              get: TT => TT.coatRoughnessTexture,
              set: (TT, oT) => {
                TT.coatRoughnessTexture = oT
              }
            },
            metadata: oT
          }, rW, AW), (0, uT.h)(TT, null, ei, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessAnisotropy" in TT,
              get: TT => TT.coatRoughnessAnisotropy,
              set: (TT, oT) => {
                TT.coatRoughnessAnisotropy = oT
              }
            },
            metadata: oT
          }, gW, hW), (0, uT.h)(TT, null, Ri, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatRoughnessAnisotropyTexture" in TT,
              get: TT => TT.coatRoughnessAnisotropyTexture,
              set: (TT, oT) => {
                TT.coatRoughnessAnisotropyTexture = oT
              }
            },
            metadata: oT
          }, wW, mW), (0, uT.h)(TT, null, ui, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatIor" in TT,
              get: TT => TT.coatIor,
              set: (TT, oT) => {
                TT.coatIor = oT
              }
            },
            metadata: oT
          }, eW, RW), (0, uT.h)(TT, null, vi, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatDarkening" in TT,
              get: TT => TT.coatDarkening,
              set: (TT, oT) => {
                TT.coatDarkening = oT
              }
            },
            metadata: oT
          }, uW, vW), (0, uT.h)(TT, null, Ei, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "coatDarkeningTexture" in TT,
              get: TT => TT.coatDarkeningTexture,
              set: (TT, oT) => {
                TT.coatDarkeningTexture = oT
              }
            },
            metadata: oT
          }, EW, fW), (0, uT.h)(TT, null, fi, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzWeight" in TT,
              get: TT => TT.fuzzWeight,
              set: (TT, oT) => {
                TT.fuzzWeight = oT
              }
            },
            metadata: oT
          }, CW, jW), (0, uT.h)(TT, null, Ci, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzWeightTexture" in TT,
              get: TT => TT.fuzzWeightTexture,
              set: (TT, oT) => {
                TT.fuzzWeightTexture = oT
              }
            },
            metadata: oT
          }, JW, UW), (0, uT.h)(TT, null, ji, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzColor" in TT,
              get: TT => TT.fuzzColor,
              set: (TT, oT) => {
                TT.fuzzColor = oT
              }
            },
            metadata: oT
          }, aW, YW), (0, uT.h)(TT, null, Ji, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzColorTexture" in TT,
              get: TT => TT.fuzzColorTexture,
              set: (TT, oT) => {
                TT.fuzzColorTexture = oT
              }
            },
            metadata: oT
          }, QW, OW), (0, uT.h)(TT, null, Ui, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzRoughness" in TT,
              get: TT => TT.fuzzRoughness,
              set: (TT, oT) => {
                TT.fuzzRoughness = oT
              }
            },
            metadata: oT
          }, HW, nW), (0, uT.h)(TT, null, ai, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "fuzzRoughnessTexture" in TT,
              get: TT => TT.fuzzRoughnessTexture,
              set: (TT, oT) => {
                TT.fuzzRoughnessTexture = oT
              }
            },
            metadata: oT
          }, qW, ZW), (0, uT.h)(TT, null, Yi, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThinWalled" in TT,
              get: TT => TT.geometryThinWalled,
              set: (TT, oT) => {
                TT.geometryThinWalled = oT
              }
            },
            metadata: oT
          }, lW, sW), (0, uT.h)(TT, null, Qi, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryNormalTexture" in TT,
              get: TT => TT.geometryNormalTexture,
              set: (TT, oT) => {
                TT.geometryNormalTexture = oT
              }
            },
            metadata: oT
          }, tW, GW), (0, uT.h)(TT, null, Oi, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryTangent" in TT,
              get: TT => TT.geometryTangent,
              set: (TT, oT) => {
                TT.geometryTangent = oT
              }
            },
            metadata: oT
          }, pW, bW), (0, uT.h)(TT, null, Hi, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryTangentTexture" in TT,
              get: TT => TT.geometryTangentTexture,
              set: (TT, oT) => {
                TT.geometryTangentTexture = oT
              }
            },
            metadata: oT
          }, yW, NW), (0, uT.h)(TT, null, ni, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatNormalTexture" in TT,
              get: TT => TT.geometryCoatNormalTexture,
              set: (TT, oT) => {
                TT.geometryCoatNormalTexture = oT
              }
            },
            metadata: oT
          }, PW, dW), (0, uT.h)(TT, null, qi, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatTangent" in TT,
              get: TT => TT.geometryCoatTangent,
              set: (TT, oT) => {
                TT.geometryCoatTangent = oT
              }
            },
            metadata: oT
          }, VW, TX), (0, uT.h)(TT, null, Zi, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryCoatTangentTexture" in TT,
              get: TT => TT.geometryCoatTangentTexture,
              set: (TT, oT) => {
                TT.geometryCoatTangentTexture = oT
              }
            },
            metadata: oT
          }, oX, IX), (0, uT.h)(TT, null, li, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryOpacity" in TT,
              get: TT => TT.geometryOpacity,
              set: (TT, oT) => {
                TT.geometryOpacity = oT
              }
            },
            metadata: oT
          }, iX, zX), (0, uT.h)(TT, null, si, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryOpacityTexture" in TT,
              get: TT => TT.geometryOpacityTexture,
              set: (TT, oT) => {
                TT.geometryOpacityTexture = oT
              }
            },
            metadata: oT
          }, kX, WX), (0, uT.h)(TT, null, ti, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThickness" in TT,
              get: TT => TT.geometryThickness,
              set: (TT, oT) => {
                TT.geometryThickness = oT
              }
            },
            metadata: oT
          }, XX, BX), (0, uT.h)(TT, null, Gi, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "geometryThicknessTexture" in TT,
              get: TT => TT.geometryThicknessTexture,
              set: (TT, oT) => {
                TT.geometryThicknessTexture = oT
              }
            },
            metadata: oT
          }, FX, SX), (0, uT.h)(TT, null, bi, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionLuminance" in TT,
              get: TT => TT.emissionLuminance,
              set: (TT, oT) => {
                TT.emissionLuminance = oT
              }
            },
            metadata: oT
          }, DX, LX), (0, uT.h)(TT, null, yi, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionColor" in TT,
              get: TT => TT.emissionColor,
              set: (TT, oT) => {
                TT.emissionColor = oT
              }
            },
            metadata: oT
          }, xX, cX), (0, uT.h)(TT, null, Ni, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissionColorTexture" in TT,
              get: TT => TT.emissionColorTexture,
              set: (TT, oT) => {
                TT.emissionColorTexture = oT
              }
            },
            metadata: oT
          }, KX, MX), (0, uT.h)(TT, null, Pi, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmWeight" in TT,
              get: TT => TT.thinFilmWeight,
              set: (TT, oT) => {
                TT.thinFilmWeight = oT
              }
            },
            metadata: oT
          }, rX, AX), (0, uT.h)(TT, null, di, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmWeightTexture" in TT,
              get: TT => TT.thinFilmWeightTexture,
              set: (TT, oT) => {
                TT.thinFilmWeightTexture = oT
              }
            },
            metadata: oT
          }, gX, hX), (0, uT.h)(TT, null, Vi, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThickness" in TT,
              get: TT => TT.thinFilmThickness,
              set: (TT, oT) => {
                TT.thinFilmThickness = oT
              }
            },
            metadata: oT
          }, wX, mX), (0, uT.h)(TT, null, Tz, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThicknessMin" in TT,
              get: TT => TT.thinFilmThicknessMin,
              set: (TT, oT) => {
                TT.thinFilmThicknessMin = oT
              }
            },
            metadata: oT
          }, eX, RX), (0, uT.h)(TT, null, oz, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmThicknessTexture" in TT,
              get: TT => TT.thinFilmThicknessTexture,
              set: (TT, oT) => {
                TT.thinFilmThicknessTexture = oT
              }
            },
            metadata: oT
          }, uX, vX), (0, uT.h)(TT, null, Iz, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: TT => "thinFilmIor" in TT,
              get: TT => TT.thinFilmIor,
              set: (TT, oT) => {
                TT.thinFilmIor = oT
              }
            },
            metadata: oT
          }, EX, fX), (0, uT.h)(TT, null, iz, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientOcclusionTexture" in TT,
              get: TT => TT.ambientOcclusionTexture,
              set: (TT, oT) => {
                TT.ambientOcclusionTexture = oT
              }
            },
            metadata: oT
          }, CX, jX), (0, uT.h)(TT, null, zz, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "directIntensity" in TT,
              get: TT => TT.directIntensity,
              set: (TT, oT) => {
                TT.directIntensity = oT
              }
            },
            metadata: oT
          }, JX, UX), (0, uT.h)(TT, null, kz, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: TT => "environmentIntensity" in TT,
              get: TT => TT.environmentIntensity,
              set: (TT, oT) => {
                TT.environmentIntensity = oT
              }
            },
            metadata: oT
          }, aX, YX), (0, uT.h)(TT, null, Wz, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useSpecularWeightFromTextureAlpha" in TT,
              get: TT => TT.useSpecularWeightFromTextureAlpha,
              set: (TT, oT) => {
                TT.useSpecularWeightFromTextureAlpha = oT
              }
            },
            metadata: oT
          }, QX, OX), (0, uT.h)(TT, null, Xz, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceAlphaTest" in TT,
              get: TT => TT.forceAlphaTest,
              set: (TT, oT) => {
                TT.forceAlphaTest = oT
              }
            },
            metadata: oT
          }, HX, nX), (0, uT.h)(TT, null, Bz, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaCutOff" in TT,
              get: TT => TT.alphaCutOff,
              set: (TT, oT) => {
                TT.alphaCutOff = oT
              }
            },
            metadata: oT
          }, qX, ZX), (0, uT.h)(TT, null, Fz, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAmbientOcclusionFromMetallicTextureRed" in TT,
              get: TT => TT.useAmbientOcclusionFromMetallicTextureRed,
              set: (TT, oT) => {
                TT.useAmbientOcclusionFromMetallicTextureRed = oT
              }
            },
            metadata: oT
          }, lX, sX), (0, uT.h)(TT, null, Sz, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAmbientInGrayScale" in TT,
              get: TT => TT.useAmbientInGrayScale,
              set: (TT, oT) => {
                TT.useAmbientInGrayScale = oT
              }
            },
            metadata: oT
          }, tX, GX), (0, uT.h)(TT, null, Dz, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: TT => "usePhysicalLightFalloff" in TT,
              get: TT => TT.usePhysicalLightFalloff
            },
            metadata: oT
          }, null, Qz), (0, uT.h)(TT, null, Lz, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: TT => "useGLTFLightFalloff" in TT,
              get: TT => TT.useGLTFLightFalloff
            },
            metadata: oT
          }, null, Qz), (0, uT.h)(TT, null, xz, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useObjectSpaceNormalMap" in TT,
              get: TT => TT.useObjectSpaceNormalMap,
              set: (TT, oT) => {
                TT.useObjectSpaceNormalMap = oT
              }
            },
            metadata: oT
          }, pX, bX), (0, uT.h)(TT, null, cz, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallax" in TT,
              get: TT => TT.useParallax,
              set: (TT, oT) => {
                TT.useParallax = oT
              }
            },
            metadata: oT
          }, yX, NX), (0, uT.h)(TT, null, Kz, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallaxOcclusion" in TT,
              get: TT => TT.useParallaxOcclusion,
              set: (TT, oT) => {
                TT.useParallaxOcclusion = oT
              }
            },
            metadata: oT
          }, PX, dX), (0, uT.h)(TT, null, Mz, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: TT => "parallaxScaleBias" in TT,
              get: TT => TT.parallaxScaleBias,
              set: (TT, oT) => {
                TT.parallaxScaleBias = oT
              }
            },
            metadata: oT
          }, VX, TB), (0, uT.h)(TT, null, rz, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "disableLighting" in TT,
              get: TT => TT.disableLighting,
              set: (TT, oT) => {
                TT.disableLighting = oT
              }
            },
            metadata: oT
          }, oB, IB), (0, uT.h)(TT, null, Az, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceIrradianceInFragment" in TT,
              get: TT => TT.forceIrradianceInFragment,
              set: (TT, oT) => {
                TT.forceIrradianceInFragment = oT
              }
            },
            metadata: oT
          }, iB, zB), (0, uT.h)(TT, null, gz, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "maxSimultaneousLights" in TT,
              get: TT => TT.maxSimultaneousLights,
              set: (TT, oT) => {
                TT.maxSimultaneousLights = oT
              }
            },
            metadata: oT
          }, kB, WB), (0, uT.h)(TT, null, hz, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapX" in TT,
              get: TT => TT.invertNormalMapX,
              set: (TT, oT) => {
                TT.invertNormalMapX = oT
              }
            },
            metadata: oT
          }, XB, BB), (0, uT.h)(TT, null, wz, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapY" in TT,
              get: TT => TT.invertNormalMapY,
              set: (TT, oT) => {
                TT.invertNormalMapY = oT
              }
            },
            metadata: oT
          }, FB, SB), (0, uT.h)(TT, null, mz, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "twoSidedLighting" in TT,
              get: TT => TT.twoSidedLighting,
              set: (TT, oT) => {
                TT.twoSidedLighting = oT
              }
            },
            metadata: oT
          }, DB, LB), (0, uT.h)(TT, null, ez, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAlphaFresnel" in TT,
              get: TT => TT.useAlphaFresnel,
              set: (TT, oT) => {
                TT.useAlphaFresnel = oT
              }
            },
            metadata: oT
          }, xB, cB), (0, uT.h)(TT, null, Rz, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: TT => "useLinearAlphaFresnel" in TT,
              get: TT => TT.useLinearAlphaFresnel,
              set: (TT, oT) => {
                TT.useLinearAlphaFresnel = oT
              }
            },
            metadata: oT
          }, KB, MB), (0, uT.h)(TT, null, uz, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "environmentBRDFTexture" in TT,
              get: TT => TT.environmentBRDFTexture,
              set: (TT, oT) => {
                TT.environmentBRDFTexture = oT
              }
            },
            metadata: oT
          }, rB, AB), (0, uT.h)(TT, null, vz, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: TT => "forceNormalForward" in TT,
              get: TT => TT.forceNormalForward,
              set: (TT, oT) => {
                TT.forceNormalForward = oT
              }
            },
            metadata: oT
          }, gB, hB), (0, uT.h)(TT, null, Ez, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: TT => "enableSpecularAntiAliasing" in TT,
              get: TT => TT.enableSpecularAntiAliasing,
              set: (TT, oT) => {
                TT.enableSpecularAntiAliasing = oT
              }
            },
            metadata: oT
          }, wB, mB), (0, uT.h)(TT, null, fz, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useHorizonOcclusion" in TT,
              get: TT => TT.useHorizonOcclusion,
              set: (TT, oT) => {
                TT.useHorizonOcclusion = oT
              }
            },
            metadata: oT
          }, eB, RB), (0, uT.h)(TT, null, Cz, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useRadianceOcclusion" in TT,
              get: TT => TT.useRadianceOcclusion,
              set: (TT, oT) => {
                TT.useRadianceOcclusion = oT
              }
            },
            metadata: oT
          }, uB, vB), (0, uT.h)(TT, null, jz, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: TT => "unlit" in TT,
              get: TT => TT.unlit,
              set: (TT, oT) => {
                TT.unlit = oT
              }
            },
            metadata: oT
          }, EB, fB), (0, uT.h)(TT, null, Jz, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyDecalMapAfterDetailMap" in TT,
              get: TT => TT.applyDecalMapAfterDetailMap,
              set: (TT, oT) => {
                TT.applyDecalMapAfterDetailMap = oT
              }
            },
            metadata: oT
          }, CB, jB), (0, uT.h)(TT, null, Uz, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "debugMode" in TT,
              get: TT => TT.debugMode,
              set: (TT, oT) => {
                TT.debugMode = oT
              }
            },
            metadata: oT
          }, JB, UB), (0, uT.h)(TT, null, az, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: TT => "transparencyMode" in TT,
              get: TT => TT.transparencyMode
            },
            metadata: oT
          }, null, Qz), oT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oT
          })
        })(), TT.SSS_QUALITY_LOW = 0, TT.SSS_QUALITY_MEDIUM = 1, TT.SSS_QUALITY_HIGH = 2, TT._noiseTextures = {}, TT.ForceGLSL = !1, TT._ShaderLoader = new Lo.c((() => [Promise.all([IT.e(307), IT.e(373)]).then((() => IT(60605))), Promise.all([IT.e(312), IT.e(308), IT.e(372), IT.e(377)]).then((() => IT(60617)))]), (() => [Promise.all([IT.e(326), IT.e(328), IT.e(376)]).then((() => IT(60657))), Promise.all([IT.e(326), IT.e(329), IT.e(375), IT.e(378)]).then((() => IT(60667)))])), TT
      })(),
      oI = !1;
    oI || (oI = !0, (0, bT.e)(), (0, Zo.h)("BABYLON.OpenPBRMaterial", TI));
    var II = IT(36149);
    class iI {
      constructor(TT) {
        this.name = ao.d.NAME_PROCEDURALTEXTURE, this.NK = TT
      }
      register() {
        this.NK._beforeClearStage.registerStep(ao.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.NK.proceduralTexturesEnabled) {
          Ro.i.StartPerformanceCounter("Procedural textures", this.NK.proceduralTextures.length > 0);
          for (let TT = 0; TT < this.NK.proceduralTextures.length; TT++) {
            const oT = this.NK.proceduralTextures[TT];
            oT._shouldRender() && oT.render()
          }
          Ro.i.EndPerformanceCounter("Procedural textures", this.NK.proceduralTextures.length > 0)
        }
      }
    }
    var zI = IT(39105);
    let kI = (() => {
      var TT;
      let oT, iT, zT, WT, XT, BT = CT.g,
        FT = [],
        ST = [],
        DT = [],
        LT = [],
        xT = [],
        cT = [],
        MT = [],
        rT = [],
        AT = [];
      return TT = class extends BT {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(TT, oT, IT, iT) {
          let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, iT, !kT), this.isEnabled = ((0, uT.j)(this, FT), (0, uT.j)(this, ST, !0)), this.autoClear = ((0, uT.j)(this, DT), (0, uT.j)(this, LT, !0)), this.onGenerated = (0, uT.j)(this, xT), this.onGeneratedObservable = new II.d, this.onBeforeGenerationObservable = new II.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, uT.j)(this, cT, void 0), this._drawWrapper = (0, uT.j)(this, MT), this._textures = {}, this._size = (0, uT.j)(this, rT, void 0), this._textureType = (0, uT.j)(this, AT), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === zT || zT instanceof CT.g ? (this._options = {}, this._fallbackTexture = zT) : (this._options = zT, this._fallbackTexture = zT.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let BT = (iT = this.pC() || KT.d.LastCreatedScene)._getComponent(ao.d.NAME_PROCEDURALTEXTURE);
          BT || (BT = new iI(iT), iT.fIT(BT)), this._options.skipSceneRegistration || iT.proceduralTextures.push(this), this._fullEngine = iT.Zc(), this.name = TT, this.isRenderTarget = !0, this._size = oT, this._textureType = XT, this._generateMipMaps = kT, this._drawWrapper = new zI.c(this._fullEngine), this.setFragment(IT);
          const gT = this._createRtWrapper(WT, oT, kT, XT);
          this._texture = gT.texture;
          const hT = [];
          hT.push(1, 1), hT.push(-1, 1), hT.push(-1, -1), hT.push(1, -1), this._vertexBuffers[nT.i.PositionKind] = new nT.i(this._fullEngine, hT, nT.i.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(TT, oT, IT, iT) {
          return TT ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(oT, {
            generateMipMaps: IT,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: iT,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(oT, {
            generateMipMaps: IT,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: iT,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(TT) {
          this._drawWrapper.effect = TT
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((TT => {
            this._contentData = this.readPixels(0, 0, TT), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const TT = this._fullEngine,
            oT = [];
          oT.push(0), oT.push(1), oT.push(2), oT.push(0), oT.push(2), oT.push(3), this._indexBuffer = TT.createIndexBuffer(oT)
        }
        _rebuild() {
          const TT = this._vertexBuffers[nT.i.PositionKind];
          TT && TT._rebuild(), this._createIndexBuffer(), this.refreshRate === uo.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = uo.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(TT) {
          if (this.isReady()) return void TT(this);
          const oT = this.getEffect();
          oT && oT.executeWhenCompiled((() => {
            TT(this)
          }))
        }
        isReady() {
          const TT = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const oT = this._getDefines();
          if (this._drawWrapper.effect && oT === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const iT = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== oT && (this._cachedDefines = oT, this._drawWrapper.effect = TT.createEffect(iT, [nT.i.PositionKind], this._uniforms, this._samplers, oT, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([IT.e(381).then((() => IT(60741))), this._options.extraInitializationsAsync()]) : await Promise.all([IT.e(382).then((() => IT(60743))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await IT.e(381).then((() => IT(60741))) : await IT.e(382).then((() => IT(60743)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(TT) {
          this._fragment = TT
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(TT) {
          this._refreshRate = TT, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(TT, oT) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const IT = this._texture.isCube;
          this._rtWrapper.dispose();
          const iT = this._createRtWrapper(IT, TT, oT, this._textureType);
          this._texture = iT.texture, this._size = TT, this._generateMipMaps = oT
        }
        _checkUniform(TT) {
          -1 === this._uniforms.indexOf(TT) && this._uniforms.push(TT)
        }
        setTexture(TT, oT) {
          return -1 === this._samplers.indexOf(TT) && this._samplers.push(TT), this._textures[TT] = oT, this
        }
        setFloat(TT, oT) {
          return this._checkUniform(TT), this._floats[TT] = oT, this
        }
        setInt(TT, oT) {
          return this._checkUniform(TT), this._ints[TT] = oT, this
        }
        setFloats(TT, oT) {
          return this._checkUniform(TT), this._floatsArrays[TT] = oT, this
        }
        setColor3(TT, oT) {
          return this._checkUniform(TT), this._colors3[TT] = oT, this
        }
        setColor4(TT, oT) {
          return this._checkUniform(TT), this._colors4[TT] = oT, this
        }
        setVector2(TT, oT) {
          return this._checkUniform(TT), this._vectors2[TT] = oT, this
        }
        setVector3(TT, oT) {
          return this._checkUniform(TT), this._vectors3[TT] = oT, this
        }
        setVector4(TT, oT) {
          return this._checkUniform(TT), this._vectors4[TT] = oT, this
        }
        setMatrix(TT, oT) {
          return this._checkUniform(TT), this._matrices[TT] = oT, this
        }
        render(TT) {
          const oT = this.pC();
          if (!oT) return;
          const IT = this._fullEngine;
          if (IT.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), IT.setState(!1), !this.nodeMaterialSource) {
            for (const TT in this._textures) this._drawWrapper.effect.setTexture(TT, this._textures[TT]);
            for (const TT in this._ints) this._drawWrapper.effect.setInt(TT, this._ints[TT]);
            for (const TT in this._floats) this._drawWrapper.effect.setFloat(TT, this._floats[TT]);
            for (const TT in this._floatsArrays) this._drawWrapper.effect.setArray(TT, this._floatsArrays[TT]);
            for (const TT in this._colors3) this._drawWrapper.effect.setColor3(TT, this._colors3[TT]);
            for (const TT in this._colors4) {
              const oT = this._colors4[TT];
              this._drawWrapper.effect.setFloat4(TT, oT.r, oT.g, oT.b, oT.a)
            }
            for (const TT in this._vectors2) this._drawWrapper.effect.setVector2(TT, this._vectors2[TT]);
            for (const TT in this._vectors3) this._drawWrapper.effect.setVector3(TT, this._vectors3[TT]);
            for (const TT in this._vectors4) this._drawWrapper.effect.setVector4(TT, this._vectors4[TT]);
            for (const TT in this._matrices) this._drawWrapper.effect.setMatrix(TT, this._matrices[TT])
          }
          if (!this._texture || !this._rtWrapper) return;
          IT._enableGPUDebugMarkers && IT._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const iT = IT.currentViewport;
          if (this.isCube)
            for (let zT = 0; zT < 6; zT++) IT.bindFramebuffer(this._rtWrapper, zT, void 0, void 0, !0), IT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", zT), this.autoClear && IT.clear(oT.clearColor, !0, !1, !1), IT.drawElementsType(kT.c.TriangleFillMode, 0, 6), IT.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let TT = 1;
            this._rtWrapper.is3D ? TT = this._rtWrapper.depth : this._rtWrapper.is2DArray && (TT = this._rtWrapper.layers);
            for (let iT = 0; iT < TT; iT++) {
              if (IT.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, iT), IT.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== TT ? iT / (TT - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", iT);
                for (const TT in this._textures) this._drawWrapper.effect.setTexture(TT, this._textures[TT])
              }
              this.autoClear && IT.clear(oT.clearColor, !0, !1, !1), IT.drawElementsType(kT.c.TriangleFillMode, 0, 6), IT.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          iT && IT.setViewport(iT), this.isCube && IT.generateMipMapsForCubemap(this._texture, !0), IT._enableGPUDebugMarkers && IT._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const oT = this.getSize(),
            IT = new TT(this.name, oT.width, this._fragment, this.pC(), this._fallbackTexture, this._generateMipMaps);
          return IT.hasAlpha = this.hasAlpha, IT.level = this.level, IT.coordinatesMode = this.coordinatesMode, IT
        }
        dispose() {
          const TT = this.pC();
          if (!TT) return;
          const oT = TT.proceduralTextures.indexOf(this);
          oT >= 0 && TT.proceduralTextures.splice(oT, 1);
          const IT = this._vertexBuffers[nT.i.PositionKind];
          IT && (IT.dispose(), this._vertexBuffers[nT.i.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const IT = "function" === typeof Symbol && Symbol.metadata ? Object.create(BT[Symbol.metadata] ?? null) : void 0;
        oT = [(0, vT.P)()], iT = [(0, vT.P)()], zT = [(0, vT.P)()], WT = [(0, vT.P)()], XT = [(0, vT.P)()], (0, uT.h)(TT, null, XT, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: TT => "refreshRate" in TT,
            get: TT => TT.refreshRate
          },
          metadata: IT
        }, null, FT), (0, uT.h)(null, null, oT, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, oT) => {
              TT.isEnabled = oT
            }
          },
          metadata: IT
        }, ST, DT), (0, uT.h)(null, null, iT, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: TT => "autoClear" in TT,
            get: TT => TT.autoClear,
            set: (TT, oT) => {
              TT.autoClear = oT
            }
          },
          metadata: IT
        }, LT, xT), (0, uT.h)(null, null, zT, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: TT => "_generateMipMaps" in TT,
            get: TT => TT._generateMipMaps,
            set: (TT, oT) => {
              TT._generateMipMaps = oT
            }
          },
          metadata: IT
        }, cT, MT), (0, uT.h)(null, null, WT, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: TT => "_size" in TT,
            get: TT => TT._size,
            set: (TT, oT) => {
              TT._size = oT
            }
          },
          metadata: IT
        }, rT, AT), IT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IT
        })
      })(), TT
    })();

    function WI(TT) {
      return "texture" in TT
    }

    function XI(TT) {
      return "value" in TT
    }
    async function BI(TT, oT, iT) {
      const zT = [oT.red, oT.green, oT.blue, oT.alpha],
        kT = [],
        WT = [];
      for (let IT = 0; IT < 4; IT++) {
        const TT = zT[IT];
        if (TT)
          if (WI(TT)) {
            if (TT.sourceChannel < 0 || TT.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let oT = kT.indexOf(TT.texture); - 1 === oT && (oT = kT.length, kT.push(TT.texture)), WT[IT] = oT
          } else {
            if (!XI(TT)) throw new Error("Invalid channel input configuration");
            if (TT.value < 0 || TT.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            WT[IT] = -1
          }
        else WT[IT] = -1
      }
      let XT = oT.outputSize;
      if (!XT && kT.length > 0) {
        let TT = 0;
        for (const oT of kT) {
          const IT = oT.getSize(),
            iT = Math.max(IT.width, IT.height);
          iT > TT && (TT = iT, XT = IT.width === IT.height ? TT : IT)
        }
      }
      XT = XT || 512;
      const BT = [],
        FT = new Set;
      for (let IT = 0; IT < 4; IT++) {
        const TT = zT[IT],
          oT = ["RED", "GREEN", "BLUE", "ALPHA"][IT];
        if (TT && WI(TT)) {
          BT.push(`${oT}_FROM_TEXTURE`);
          const TT = WT[IT];
          FT.add(TT)
        }
      }
      FT.forEach((TT => {
        BT.push(`USE_TEXTURE${TT}`)
      }));
      const ST = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: iT.Zc().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            iT.Zc().isWebGPU ? await Promise.all([IT.e(379).then((() => IT(60735)))]) : await Promise.all([IT.e(380).then((() => IT(60738)))])
          },
          skipSceneRegistration: !0
        },
        DT = new kI(TT, XT, "textureMerger", iT, ST);
      DT.refreshRate = -1, DT.defines = BT.length > 0 ? "#define " + BT.join("\n#define ") + "\n" : "";
      for (let IT = 0; IT < kT.length; IT++) LT = kT[IT], (xT = DT).uOffset = LT.uOffset, xT.vOffset = LT.vOffset, xT.uScale = LT.uScale, xT.vScale = LT.vScale, xT.uAng = LT.uAng, xT.vAng = LT.vAng, xT.wAng = LT.wAng, xT.uRotationCenter = LT.uRotationCenter, xT.vRotationCenter = LT.vRotationCenter, DT.setTexture(`inputTexture${IT}`, kT[IT]);
      var LT, xT;
      for (let IT = 0; IT < 4; IT++) {
        const TT = zT[IT],
          oT = ["red", "green", "blue", "alpha"][IT];
        if (TT && WI(TT)) {
          const iT = WT[IT];
          DT.setInt(`${oT}TextureIndex`, iT), DT.setInt(`${oT}SourceChannel`, TT.sourceChannel)
        } else {
          let iT;
          iT = TT && XI(TT) ? TT.value : 3 === IT ? 1 : 0, DT.setFloat(`${oT}ConstantValue`, iT)
        }
      }
      return await new Promise(((TT, oT) => {
        DT.executeWhenReady((() => {
          try {
            DT.render(), TT(DT)
          } catch (IT) {
            oT(IT instanceof Error ? IT : new Error(String(IT)))
          }
        }))
      }))
    }

    function FI(TT, oT) {
      return {
        texture: TT,
        sourceChannel: oT
      }
    }

    function SI(TT) {
      return {
        value: TT
      }
    }

    function DI(TT, oT, IT, iT) {
      return {
        red: TT,
        green: oT,
        blue: IT,
        alpha: iT
      }
    }
    var LI = IT(38592),
      xI = IT(38691),
      cI = IT(36137),
      KI = IT(38746),
      MI = IT(38679);
    class rI {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class AI extends LI.c {
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
        return !!this._options?.enableMultiview || this.rK > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new rI;
        super(null), void 0 === TT.deterministicLockstep && (TT.deterministicLockstep = !1), void 0 !== TT.timeStep && (this._timeStep = TT.timeStep), void 0 === TT.lockstepMaxSteps && (TT.lockstepMaxSteps = 4), this._options = TT, cI.c.SetMatrixPrecision(!!TT.useHighPrecisionMatrix), this._caps = {
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
        }, TT.enableMultiview && (this._caps.multiview = {
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
        }, TT.renderingCanvas && (this._renderingCanvas = TT.renderingCanvas), ET.d.Log(`Babylon.js v${LI.c.Version} - Null engine`);
        const oT = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (oT.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (oT.Blob = function() {})
      }
      createVertexBuffer(TT) {
        const oT = new xI.d;
        return oT.references = 1, oT
      }
      createIndexBuffer(TT) {
        const oT = new xI.d;
        return oT.references = 1, oT
      }
      clear(TT, oT, IT) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(TT, oT, IT) {
        this._cachedViewport = TT
      }
      createUniformBuffer(TT) {
        const oT = new xI.d;
        return oT.references = 1, oT.fD = TT instanceof Array ? TT.length * Float32Array.BYTES_PER_ELEMENT : TT.byteLength, oT
      }
      createDynamicUniformBuffer(TT) {
        return this.createUniformBuffer(TT)
      }
      updateUniformBuffer(TT, oT, IT, iT) {}
      bindUniformBufferBase(TT, oT, IT) {}
      bindUniformBlock(TT, oT, IT) {}
      createShaderProgram(TT, oT, IT, iT, zT) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(TT, oT) {
        return []
      }
      getAttributes(TT, oT) {
        return []
      }
      bindSamplers(TT) {
        this._currentEffect = null
      }
      enableEffect(TT) {
        TT = null !== TT && (0, MI.d)(TT) ? TT.effect : TT, this._currentEffect = TT, TT && (TT.onBind && TT.onBind(TT), TT._onBindObservable && TT._onBindObservable.notifyObservers(TT))
      }
      setStateCullFaceType(TT, oT) {}
      setState(TT) {}
      setIntArray(TT, oT) {
        return !0
      }
      setIntArray2(TT, oT) {
        return !0
      }
      setIntArray3(TT, oT) {
        return !0
      }
      setIntArray4(TT, oT) {
        return !0
      }
      setFloatArray(TT, oT) {
        return !0
      }
      setFloatArray2(TT, oT) {
        return !0
      }
      setFloatArray3(TT, oT) {
        return !0
      }
      setFloatArray4(TT, oT) {
        return !0
      }
      setArray(TT, oT) {
        return !0
      }
      setArray2(TT, oT) {
        return !0
      }
      setArray3(TT, oT) {
        return !0
      }
      setArray4(TT, oT) {
        return !0
      }
      setMatrices(TT, oT) {
        return !0
      }
      setMatrix3x3(TT, oT) {
        return !0
      }
      setMatrix2x2(TT, oT) {
        return !0
      }
      setFloat(TT, oT) {
        return !0
      }
      setFloat2(TT, oT, IT) {
        return !0
      }
      setFloat3(TT, oT, IT, iT) {
        return !0
      }
      setBool(TT, oT) {
        return !0
      }
      setFloat4(TT, oT, IT, iT, zT) {
        return !0
      }
      setAlphaMode(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[IT] !== TT && (this.alphaState.setAlphaBlend(0 !== TT, 0), oT || this.setDepthWrite(0 === TT), this._alphaMode[IT] = TT)
      }
      bindBuffers(TT, oT, IT) {}
      wipeCaches(TT) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, TT && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(TT, oT, IT, iT) {}
      drawElementsType(TT, oT, IT, iT) {}
      drawArraysType(TT, oT, IT, iT) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(TT) {}
      createTexture(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          WT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          XT = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const BT = new vo.e(this, 1),
          FT = String(TT);
        return BT.url = FT, BT.generateMipMaps = !oT, BT.samplingMode = zT, BT.invertY = IT, BT.baseWidth = this._options.textureSize, BT.baseHeight = this._options.textureSize, BT.width = this._options.textureSize, BT.height = this._options.textureSize, XT && (BT.format = XT), WT && (BT._buffer = WT), BT.isReady = !0, kT && setTimeout((() => {
          kT(BT)
        })), this._internalTexturesCache.push(BT), BT
      }
      _createHardwareRenderTargetWrapper(TT, oT, IT) {
        const iT = new KI.e(TT, oT, IT, this);
        return this._renderTargetWrapperCache.push(iT), iT
      }
      createRenderTargetTexture(TT, oT) {
        const IT = this._createHardwareRenderTargetWrapper(!1, !1, TT),
          iT = {};
        void 0 !== oT && "object" === typeof oT ? (iT.generateMipMaps = oT.generateMipMaps, iT.generateDepthBuffer = void 0 === oT.generateDepthBuffer || oT.generateDepthBuffer, iT.generateStencilBuffer = iT.generateDepthBuffer && oT.generateStencilBuffer, iT.type = void 0 === oT.type ? 0 : oT.type, iT.samplingMode = void 0 === oT.samplingMode ? 3 : oT.samplingMode) : (iT.generateMipMaps = oT, iT.generateDepthBuffer = !0, iT.generateStencilBuffer = !1, iT.type = 0, iT.samplingMode = 3);
        const zT = new vo.e(this, 5);
        IT.setTexture(zT);
        const kT = TT.width || TT,
          WT = TT.height || TT;
        return IT._generateDepthBuffer = iT.generateDepthBuffer, IT._generateStencilBuffer = !!iT.generateStencilBuffer, zT.baseWidth = kT, zT.baseHeight = WT, zT.width = kT, zT.height = WT, zT.isReady = !0, zT.samples = 1, zT.generateMipMaps = !!iT.generateMipMaps, zT.samplingMode = iT.samplingMode, zT.type = iT.type, this._internalTexturesCache.push(zT), IT
      }
      createMultiviewRenderTargetTexture(TT, oT) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const IT = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: TT,
            height: oT
          }),
          iT = new vo.e(this, 5, !0);
        return iT.baseWidth = TT, iT.baseHeight = oT, iT.width = TT, iT.height = oT, iT.isMultiview = !0, iT.isReady = !0, iT.format = 5, iT.samples = 1, IT.setTextures(iT), IT
      }
      bindMultiviewFramebuffer(TT) {
        this.bindFramebuffer(TT, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(TT, oT) {
        const IT = this._createHardwareRenderTargetWrapper(!1, !0, TT),
          iT = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...oT
          };
        iT.generateStencilBuffer = iT.generateDepthBuffer && iT.generateStencilBuffer, (1 !== iT.type || this._caps.textureFloatLinearFiltering) && (2 !== iT.type || this._caps.textureHalfFloatLinearFiltering) || (iT.samplingMode = 1), IT._generateDepthBuffer = iT.generateDepthBuffer, IT._generateStencilBuffer = !!iT.generateStencilBuffer;
        const zT = new vo.e(this, 5);
        return zT.baseWidth = TT, zT.baseHeight = TT, zT.width = TT, zT.height = TT, zT.isReady = !0, zT.isCube = !0, zT.samples = 1, zT.generateMipMaps = !!iT.generateMipMaps, zT.samplingMode = iT.samplingMode, zT.type = iT.type, this._internalTexturesCache.push(zT), IT
      }
      updateTextureSamplingMode(TT, oT) {
        oT.samplingMode = TT
      }
      createRawTexture(TT, oT, IT, iT, zT, kT, WT) {
        let XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          BT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          FT = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const ST = new vo.e(this, 3);
        return ST.baseWidth = oT, ST.baseHeight = IT, ST.width = oT, ST.height = IT, ST.format = iT, ST.generateMipMaps = zT, ST.samplingMode = WT, ST.invertY = kT, ST._compression = XT, ST.type = BT, ST._useSRGBBuffer = FT, this._doNotHandleContextLost || (ST._bufferView = TT), ST
      }
      updateRawTexture(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        TT && (TT._bufferView = oT, TT.format = IT, TT.invertY = iT, TT._compression = zT, TT.type = kT, TT._useSRGBBuffer = WT)
      }
      bindFramebuffer(TT, oT, IT, iT, zT) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = TT, this._currentFramebuffer = null, this._cachedViewport && !zT && this.setViewport(this._cachedViewport, IT, iT)
      }
      unBindFramebuffer(TT) {
        let oT = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, oT && oT(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(TT) {
        const oT = new xI.d;
        return oT.references = 1, oT.fD = 1, oT
      }
      updateDynamicTexture(TT, oT, IT) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(TT) {}
      updateDynamicIndexBuffer(TT, oT) {}
      updateDynamicVertexBuffer(TT, oT, IT, iT) {}
      _bindTextureDirectly(TT, oT) {
        return this._boundTexturesCache[this._activeChannel] !== oT && (this._boundTexturesCache[this._activeChannel] = oT, !0)
      }
      _bindTexture(TT, oT) {
        TT < 0 || this._bindTextureDirectly(0, oT)
      }
      _deleteBuffer(TT) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(TT) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(TT, oT, IT, iT, zT) {}
      _uploadDataToTextureDirectly(TT, oT) {}
      _uploadArrayBufferViewToTexture(TT, oT) {}
      _uploadImageToTexture(TT, oT) {}
    }
    IT(38820), IT(38858), IT(38817);
    async function gI(TT) {
      const oT = TT.getInternalTexture();
      if (!oT || 1 !== oT.source) return null;
      if (oT.invertY) {
        const oT = TT.pC()?.Zc();
        if (!(oT instanceof AI)) return null
      }
      const IT = oT._buffer;
      let iT, kT = TT.mimeType;
      try {
        IT ? ArrayBuffer.isView(IT) ? iT = IT.buffer.slice(IT.byteOffset, IT.byteOffset + IT.byteLength) : IT instanceof ArrayBuffer ? iT = IT : IT instanceof Blob ? (iT = await IT.arrayBuffer(), kT = IT.type || kT) : "string" === typeof IT ? (iT = await zT.Tools.LoadFileAsync(IT), kT = (0, BT.d)(IT) || kT) : "undefined" !== typeof HTMLImageElement && IT instanceof HTMLImageElement && (iT = await zT.Tools.LoadFileAsync(IT.src), kT = (0, BT.d)(IT.src) || kT) : (iT = await zT.Tools.LoadFileAsync(oT.url), kT = (0, BT.d)(oT.url) || kT)
      } catch {
        return null
      }
      if (iT && !kT && oT.url) {
        const TT = oT.url.match(/^data:([^;,]+)/);
        kT = TT ? TT[1] : (0, BT.d)(oT.url)
      }
      return iT && kT ? {
        data: iT,
        mimeType: kT
      } : null
    }
    const hI = 1e-6,
      wI = new MT.Color3(.04, .04, .04),
      mI = 1024,
      eI = MT.Color3.White(),
      RI = MT.Color3.BlackReadOnly;

    function uI(TT) {
      switch (TT) {
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

    function vI(TT, oT, IT) {
      if (oT < wI.r) return 0;
      const iT = wI.r,
        zT = TT * IT / (1 - wI.r) + oT - 2 * wI.r,
        kT = zT * zT - 4 * iT * (wI.r - oT);
      return gT.Clamp((-zT + Math.sqrt(kT)) / (2 * iT), 0, 1)
    }

    function EI(TT) {
      const oT = TT.diffuseColor.toLinearSpace(TT.pC().Zc().useExactSrgbConversions).scale(.5),
        IT = TT.alpha,
        iT = function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new HT.j(0, 1),
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new HT.j(0, .1),
            iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new HT.j(0, .1),
            zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new HT.j(1300, .1);
          return function(TT, oT, IT, iT, zT) {
            return (1 - TT) * (1 - TT) * (1 - TT) * oT + 3 * (1 - TT) * (1 - TT) * TT * IT + 3 * (1 - TT) * TT * TT * iT + TT * TT * TT * zT
          }(Math.pow(TT / zT.x, .333333), oT.y, IT.y, iT.y, zT.y)
        }(gT.Clamp(TT.specularPower, 0, mI));
      return {
        baseColorFactor: [oT.r, oT.g, oT.b, IT],
        metallicFactor: 0,
        roughnessFactor: iT
      }
    }

    function fI(TT, oT) {
      oT.needAlphaBlending() ? TT.alphaMode = "BLEND" : oT.needAlphaTesting() && (TT.alphaMode = "MASK", TT.alphaCutoff = oT.alphaCutOff)
    }

    function CI(TT, oT, IT) {
      const iT = new Uint8Array(TT * oT * 4);
      for (let zT = 0; zT < iT.length; zT += 4) iT[zT] = iT[zT + 1] = iT[zT + 2] = iT[zT + 3] = 255;
      return mT.e.CreateRGBATexture(iT, TT, oT, IT)
    }

    function jI(TT) {
      if (TT instanceof Uint8Array) {
        const oT = TT.length,
          IT = new Float32Array(TT.length);
        for (let iT = 0; iT < oT; ++iT) IT[iT] = TT[iT] / 255;
        return IT
      }
      if (TT instanceof Float32Array) return TT;
      throw new Error("Unsupported pixel format!")
    }
    class JI {
      constructor(TT) {
        this._exporter = TT, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(TT) {
        return TT ? this._textureMap.get(TT.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(TT, oT) {
        const IT = EI(TT),
          iT = {
            name: TT.name
          };
        if (null == TT.backFaceCulling || TT.backFaceCulling || (TT.twoSidedLighting || zT.Tools.Warn(TT.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), iT.doubleSided = !0), oT) {
          const oT = [],
            zT = TT.diffuseTexture;
          zT && oT.push(this.exportTextureAsync(zT).then((TT => {
            TT && (IT.baseColorTexture = TT)
          })));
          const kT = TT.bumpTexture;
          kT && oT.push(this.exportTextureAsync(kT).then((TT => {
            TT && (iT.normalTexture = TT, 1 !== kT.level && (iT.normalTexture.scale = kT.level))
          })));
          const WT = TT.emissiveTexture;
          WT && (iT.emissiveFactor = [1, 1, 1], oT.push(this.exportTextureAsync(WT).then((TT => {
            TT && (iT.emissiveTexture = TT)
          }))));
          const XT = TT.ambientTexture;
          XT && oT.push(this.exportTextureAsync(XT).then((TT => {
            if (TT) {
              const oT = {
                index: TT.index
              };
              iT.occlusionTexture = oT
            }
          }))), oT.length > 0 && (this._exporter._materialNeedsUVsSet.add(TT), await Promise.all(oT))
        }(TT.alpha < 1 || TT.opacityTexture) && (TT.alphaMode === eT.d.ALPHA_COMBINE ? iT.alphaMode = "BLEND" : zT.Tools.Warn(TT.name + ": glTF 2.0 does not support alpha mode: " + TT.alphaMode.toString())), TT.emissiveColor && !TT.emissiveColor.equalsWithEpsilon(RI, hI) && (iT.emissiveFactor = TT.emissiveColor.bIT()), iT.pbrMetallicRoughness = IT, fI(iT, TT), await this._finishMaterialAsync(iT, TT);
        const kT = this._exporter._materials;
        return kT.push(iT), kT.length - 1
      }
      async _finishMaterialAsync(TT, oT) {
        const IT = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", TT, oT),
          iT = [];
        for (const zT of IT) iT.push(this.exportTextureAsync(zT));
        await Promise.all(iT), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", TT, oT)
      }
      _resizeTexturesToSameDimensions(TT, oT, IT) {
        const iT = TT ? TT.getSize() : {
            width: 0,
            height: 0
          },
          zT = oT ? oT.getSize() : {
            width: 0,
            height: 0
          };
        let kT, WT;
        return iT.width < zT.width ? (kT = TT && TT instanceof wT.d ? hT.h.CreateResizedCopy(TT, zT.width, zT.height, !0) : CI(zT.width, zT.height, IT), WT = oT) : iT.width > zT.width ? (WT = oT && oT instanceof wT.d ? hT.h.CreateResizedCopy(oT, iT.width, iT.height, !0) : CI(iT.width, iT.height, IT), kT = TT) : (kT = TT, WT = oT), {
          texture1: kT,
          texture2: WT
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(TT, oT, IT) {
        const iT = new Array;
        if (!TT && !oT) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const zT = TT ? TT.pC() : oT ? oT.pC() : null;
        if (zT) {
          const kT = this._resizeTexturesToSameDimensions(TT, oT, zT),
            WT = kT.texture1?.getSize();
          let XT, BT;
          const FT = WT.width,
            ST = WT.height,
            DT = await kT.texture1.readPixels(),
            LT = await kT.texture2.readPixels();
          if (!DT) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (XT = jI(DT), !LT) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          BT = jI(LT);
          const xT = BT.byteLength,
            cT = new Uint8Array(xT),
            KT = new Uint8Array(xT),
            rT = 4,
            AT = new MT.Color3(0, 0, 0);
          let gT = 0,
            hT = 0;
          for (let TT = 0; TT < ST; ++TT)
            for (let oT = 0; oT < FT; ++oT) {
              const iT = (FT * TT + oT) * rT,
                WT = {
                  diffuseColor: new MT.Color3(XT[iT], XT[iT + 1], XT[iT + 2]).toLinearSpace(zT.Zc().useExactSrgbConversions).multiply(IT.diffuseColor),
                  specularColor: new MT.Color3(BT[iT], BT[iT + 1], BT[iT + 2]).toLinearSpace(zT.Zc().useExactSrgbConversions).multiply(IT.specularColor),
                  glossiness: BT[iT + 3] * IT.glossiness
                },
                ST = this._convertSpecularGlossinessToMetallicRoughness(WT);
              AT.r = Math.max(AT.r, ST.baseColor.r), AT.g = Math.max(AT.g, ST.baseColor.g), AT.b = Math.max(AT.b, ST.baseColor.b), gT = Math.max(gT, ST.metallic), hT = Math.max(hT, ST.roughness), KT[iT] = 255 * ST.baseColor.r, KT[iT + 1] = 255 * ST.baseColor.g, KT[iT + 2] = 255 * ST.baseColor.b, KT[iT + 3] = kT.texture1.hasAlpha ? 255 * XT[iT + 3] : 255, cT[iT] = 0, cT[iT + 1] = 255 * ST.roughness, cT[iT + 2] = 255 * ST.metallic, cT[iT + 3] = 255
            }
          const wT = {
            baseColor: AT,
            metallic: gT,
            roughness: hT
          };
          let mT = !1,
            eT = !1;
          for (let TT = 0; TT < ST; ++TT)
            for (let oT = 0; oT < FT; ++oT) {
              const IT = (FT * TT + oT) * rT;
              KT[IT] /= wT.baseColor.r > hI ? wT.baseColor.r : 1, KT[IT + 1] /= wT.baseColor.g > hI ? wT.baseColor.g : 1, KT[IT + 2] /= wT.baseColor.b > hI ? wT.baseColor.b : 1;
              const iT = MT.Color3.FromInts(KT[IT], KT[IT + 1], KT[IT + 2]).toGammaSpace(zT.Zc().useExactSrgbConversions);
              KT[IT] = 255 * iT.r, KT[IT + 1] = 255 * iT.g, KT[IT + 2] = 255 * iT.b, iT.equalsWithEpsilon(eI, hI) || (eT = !0), cT[IT + 1] /= wT.roughness > hI ? wT.roughness : 1, cT[IT + 2] /= wT.metallic > hI ? wT.metallic : 1;
              MT.Color3.FromInts(255, cT[IT + 1], cT[IT + 2]).equalsWithEpsilon(eI, hI) || (mT = !0)
            }
          return mT && iT.push((0, RT.EncodeImageAsync)(cT, FT, ST).then((TT => {
            wT.metallicRoughnessTextureData = TT
          }))), eT && iT.push((0, RT.EncodeImageAsync)(KT, FT, ST).then((TT => {
            wT.baseColorTextureData = TT
          }))), await Promise.all(iT).then((() => wT))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(TT) {
        const oT = this._getPerceivedBrightness(TT.diffuseColor),
          IT = this._getPerceivedBrightness(TT.specularColor),
          iT = 1 - this._getMaxComponent(TT.specularColor),
          zT = vI(oT, IT, iT),
          kT = TT.diffuseColor.scale(iT / (1 - wI.r) / Math.max(1 - zT, hI)),
          WT = TT.specularColor.subtract(wI.scale(1 - zT)).scale(1 / Math.max(zT, hI));
        let XT = MT.Color3.Lerp(kT, WT, zT * zT);
        XT = XT.clampToRef(0, 1, XT);
        return {
          baseColor: XT,
          metallic: zT,
          roughness: 1 - TT.glossiness
        }
      }
      _getPerceivedBrightness(TT) {
        return Math.sqrt(.299 * TT.r * TT.r + .587 * TT.g * TT.g + .114 * TT.b * TT.b)
      }
      _getMaxComponent(TT) {
        return Math.max(TT.r, Math.max(TT.g, TT.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(TT, oT, IT, iT, zT, kT, WT, XT, BT) {
        const FT = [],
          ST = {
            baseColor: TT,
            metallic: oT,
            roughness: IT
          };
        if (BT)
          if (WT instanceof TI) {
            if (WT.geometryOpacityTexture) {
              const TT = iT && iT.getInternalTexture() ? iT.getInternalTexture().uniqueId : 0,
                oT = WT.geometryOpacityTexture && WT.geometryOpacityTexture.getInternalTexture() ? WT.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                IT = Number(`${TT}${oT}`),
                zT = this._textureMap.get(IT);
              zT ? XT.baseColorTexture = zT : FT.push(BI("baseColorOpacityTexture", DI(iT ? FI(iT, 0) : SI(1), iT ? FI(iT, 1) : SI(1), iT ? FI(iT, 2) : SI(1), FI(WT.geometryOpacityTexture, 0)), WT.pC()).then((async TT => {
                const oT = await this.exportTextureAsync(TT, IT);
                oT && (XT.baseColorTexture = oT)
              })))
            } else iT && FT.push(this.exportTextureAsync(iT).then((TT => {
              TT && (XT.baseColorTexture = TT)
            })));
            if (WT._useMetallicFromMetallicTextureBlue && zT) FT.push(this.exportTextureAsync(zT).then((TT => {
              TT && (XT.metallicRoughnessTexture = TT)
            })));
            else if (kT || zT) {
              const TT = zT && zT.getInternalTexture() ? zT.getInternalTexture().uniqueId : 0,
                oT = kT && kT.getInternalTexture() ? kT.getInternalTexture().uniqueId : 0,
                IT = Number(`${TT}${oT}`),
                iT = this._textureMap.get(IT);
              iT ? XT.metallicRoughnessTexture = iT : FT.push(BI("MetalRoughTexture", DI(WT.ambientOcclusionTexture ? FI(WT.ambientOcclusionTexture, 0) : SI(1), kT ? FI(kT, 0) : SI(1), zT ? FI(zT, 0) : SI(1)), WT.pC()).then((async TT => {
                const oT = await this.exportTextureAsync(TT, IT);
                oT && (XT.metallicRoughnessTexture = oT)
              })))
            }
          } else iT && FT.push(this.exportTextureAsync(iT).then((TT => {
            TT && (XT.baseColorTexture = TT)
          }))), zT && FT.push(this.exportTextureAsync(zT).then((TT => {
            TT && (XT.metallicRoughnessTexture = TT)
          })));
        return FT.length > 0 && (this._exporter._materialNeedsUVsSet.add(WT), await Promise.all(FT)), ST
      }
      _getTextureSampler(TT) {
        const oT = {};
        if (!TT || !(TT instanceof wT.d)) return oT;
        const IT = this._getGLTFTextureWrapMode(TT.wrapU);
        10497 !== IT && (oT.wrapS = IT);
        const iT = this._getGLTFTextureWrapMode(TT.wrapV);
        switch (10497 !== iT && (oT.wrapT = iT), TT.samplingMode) {
          case wT.d.LINEAR_LINEAR:
            oT.magFilter = 9729, oT.minFilter = 9729;
            break;
          case wT.d.LINEAR_NEAREST:
            oT.magFilter = 9729, oT.minFilter = 9728;
            break;
          case wT.d.NEAREST_LINEAR:
            oT.magFilter = 9728, oT.minFilter = 9729;
            break;
          case wT.d.NEAREST_LINEAR_MIPLINEAR:
            oT.magFilter = 9728, oT.minFilter = 9987;
            break;
          case wT.d.NEAREST_NEAREST:
            oT.magFilter = 9728, oT.minFilter = 9728;
            break;
          case wT.d.NEAREST_LINEAR_MIPNEAREST:
            oT.magFilter = 9728, oT.minFilter = 9985;
            break;
          case wT.d.LINEAR_NEAREST_MIPNEAREST:
            oT.magFilter = 9729, oT.minFilter = 9984;
            break;
          case wT.d.LINEAR_NEAREST_MIPLINEAR:
            oT.magFilter = 9729, oT.minFilter = 9986;
            break;
          case wT.d.NEAREST_NEAREST_MIPLINEAR:
            oT.magFilter = 9728, oT.minFilter = 9986;
            break;
          case wT.d.LINEAR_LINEAR_MIPLINEAR:
            oT.magFilter = 9729, oT.minFilter = 9987;
            break;
          case wT.d.LINEAR_LINEAR_MIPNEAREST:
            oT.magFilter = 9729, oT.minFilter = 9985;
            break;
          case wT.d.NEAREST_NEAREST_MIPNEAREST:
            oT.magFilter = 9728, oT.minFilter = 9984
        }
        return oT
      }
      _getGLTFTextureWrapMode(TT) {
        switch (TT) {
          case wT.d.WRAP_ADDRESSMODE:
            return 10497;
          case wT.d.CLAMP_ADDRESSMODE:
            return 33071;
          case wT.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return zT.Tools.Error(`Unsupported Texture Wrap Mode ${TT}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(TT, oT, IT) {
        const iT = {
            diffuseColor: TT._albedoColor,
            specularColor: TT._reflectivityColor,
            glossiness: TT._microSurface
          },
          zT = TT._albedoTexture,
          kT = TT._reflectivityTexture,
          WT = TT._useMicroSurfaceFromReflectivityMapAlpha;
        if (kT && !WT) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((zT || kT) && IT) {
          this._exporter._materialNeedsUVsSet.add(TT);
          const IT = this._exportTextureSampler(zT || kT),
            WT = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(zT, kT, iT),
            XT = this._exporter._textures;
          if (WT.baseColorTextureData) {
            const TT = await this._exportImageAsync(`baseColor${XT.length}`, WT.baseColorTextureData);
            oT.baseColorTexture = this._exportTextureInfo(TT, IT, zT?.coordinatesIndex)
          }
          if (WT.metallicRoughnessTextureData) {
            const TT = await this._exportImageAsync(`metallicRoughness${XT.length}`, WT.metallicRoughnessTextureData);
            oT.metallicRoughnessTexture = this._exportTextureInfo(TT, IT, kT?.coordinatesIndex)
          }
          return WT
        }
        return this._convertSpecularGlossinessToMetallicRoughness(iT)
      }
      async exportPBRMaterialAsync(TT, oT) {
        const IT = {},
          iT = {
            name: TT.name
          },
          zT = TT.isMetallicWorkflow();
        if (zT) {
          const oT = TT._albedoColor,
            iT = TT.alpha;
          oT && (IT.baseColorFactor = [oT.r, oT.g, oT.b, iT])
        }
        const kT = zT ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(TT._albedoColor, TT._metallic, TT._roughness, TT._albedoTexture, TT._metallicTexture, TT._metallicTexture, TT, IT, oT) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(TT, IT, oT);
        await this._setMetallicRoughnessPbrMaterialAsync(kT, TT, iT, IT, oT), await this._finishMaterialAsync(iT, TT);
        const WT = this._exporter._materials;
        return WT.push(iT), WT.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(TT, oT, IT, iT, kT) {
        if (fI(IT, oT), TT.baseColor.equalsWithEpsilon(eI, hI) && gT.WithinEpsilon(oT.alpha, 1, hI) || (iT.baseColorFactor = [TT.baseColor.r, TT.baseColor.g, TT.baseColor.b, oT.alpha]), null != TT.metallic && 1 !== TT.metallic && (iT.metallicFactor = TT.metallic), null != TT.roughness && 1 !== TT.roughness && (iT.roughnessFactor = TT.roughness), null == oT.backFaceCulling || oT.backFaceCulling || (oT._twoSidedLighting || zT.Tools.Warn(oT.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), IT.doubleSided = !0), kT) {
          const TT = [],
            zT = oT instanceof mo ? oT._bumpTexture : oT.geometryNormalTexture;
          zT && TT.push(this.exportTextureAsync(zT).then((TT => {
            TT && (IT.normalTexture = TT, 1 !== zT.level && (IT.normalTexture.scale = zT.level))
          })));
          const kT = oT instanceof mo ? oT._ambientTexture : oT.ambientOcclusionTexture;
          kT && TT.push(new Promise((async TT => {
            if (oT instanceof TI && iT.metallicRoughnessTexture) {
              const oT = this._exportTextureSampler(kT),
                IT = this._exporter._textures[iT.metallicRoughnessTexture.index].source,
                zT = this._exportTextureInfo(IT, oT, kT.coordinatesIndex);
              return this._textureMap.set(kT.uniqueId, zT), this._exporter._extensionsPostExportTextures("exporter", zT, kT), TT(zT)
            }
            return TT(await this.exportTextureAsync(kT))
          })).then((async TT => {
            if (TT) {
              const iT = {
                index: TT.index,
                texCoord: TT.texCoord,
                extensions: TT.extensions
              };
              IT.occlusionTexture = iT, iT.strength = oT instanceof mo ? oT._ambientTextureStrength : oT.ambientOcclusionTexture.level
            }
          })));
          const WT = oT instanceof mo ? oT._emissiveTexture : oT.emissionColorTexture;
          WT && TT.push(this.exportTextureAsync(WT).then((TT => {
            TT && (IT.emissiveTexture = TT)
          }))), TT.length > 0 && (this._exporter._materialNeedsUVsSet.add(oT), await Promise.all(TT))
        }
        const WT = oT instanceof mo ? oT._emissiveColor : oT.emissionColor;
        WT.equalsWithEpsilon(RI, hI) || (IT.emissiveFactor = WT.bIT()), IT.pbrMetallicRoughness = iT
      }
      async exportOpenPBRMaterialAsync(TT, oT) {
        const IT = {},
          iT = {
            name: TT.name
          },
          zT = TT.baseColor,
          kT = TT.geometryOpacity;
        zT && (IT.baseColorFactor = [zT.r, zT.g, zT.b, kT]);
        const WT = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(TT.baseColor, TT.baseMetalness, TT.specularRoughness, TT.baseColorTexture, TT.baseMetalnessTexture, TT.specularRoughnessTexture, TT, IT, oT);
        await this._setMetallicRoughnessPbrMaterialAsync(WT, TT, iT, IT, oT), await this._finishMaterialAsync(iT, TT);
        const XT = this._exporter._materials;
        return XT.push(iT), XT.length - 1
      }
      async exportTextureAsync(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = this._textureMap.get(oT ?? TT.uniqueId);
        if (IT) return IT;
        const iT = this._exportTextureSampler(TT),
          zT = await this._exportTextureImageAsync(TT);
        return IT = this._exportTextureInfo(zT, iT, TT.coordinatesIndex), this._textureMap.set(oT ?? TT.uniqueId, IT), this._exporter._extensionsPostExportTextures("exporter", IT, TT), IT
      }
      async _exportTextureImageAsync(TT) {
        const oT = TT.mimeType ?? "none",
          IT = this._internalTextureToImage,
          iT = TT.getInternalTexture().uniqueId;
        IT[iT] = IT[iT] || {};
        let kT = IT[iT][oT];
        return void 0 === kT && (kT = (async () => {
          const IT = await gI(TT);
          if (IT && uI(IT.mimeType) && ("none" === oT || IT.mimeType === oT)) return await this._exportImageAsync(TT.name, new Blob([IT.data], {
            type: IT.mimeType
          }));
          let iT = "image/png";
          "none" !== oT && (uI(oT) ? iT = oT : (iT = "image/png", zT.Tools.Warn(`Unsupported media type: ${oT}. Exporting texture as PNG.`)));
          const kT = TT.getSize(),
            WT = await (0, hT.d)(TT),
            XT = await (0, RT.EncodeImageAsync)(WT, kT.width, kT.height, iT);
          return await this._exportImageAsync(TT.name, XT)
        })(), IT[iT][oT] = kT), await kT
      }
      async _exportImageAsync(TT, oT) {
        const IT = this._exporter._images;
        let iT;
        if (this._exporter._shouldUseGlb) {
          iT = {
            name: TT,
            mimeType: oT.type,
            bufferView: void 0
          };
          const IT = await oT.arrayBuffer(),
            zT = this._exporter._bufferManager.createBufferView(new Uint8Array(IT));
          this._exporter._bufferManager.setBufferView(iT, zT)
        } else {
          const kT = TT.replace(/\.\/|\/|\.\\|\\/g, "_"),
            WT = function(TT) {
              switch (TT) {
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
            }(oT.type);
          let XT = kT + WT;
          IT.some((TT => TT.uri === XT)) && (XT = `${kT}_${zT.Tools.RandomId()}${WT}`), iT = {
            name: TT,
            uri: XT
          }, this._exporter._imageData[XT] = oT
        }
        return IT.push(iT), IT.length - 1
      }
      _exportTextureInfo(TT, oT, IT) {
        const iT = this._exporter._textures;
        let zT = iT.findIndex((IT => IT.sampler == oT && IT.source === TT)); - 1 === zT && (zT = iT.length, iT.push({
          source: TT,
          sampler: oT
        }));
        const kT = {
          index: zT
        };
        return IT && (kT.texCoord = IT), kT
      }
      _exportTextureSampler(TT) {
        const oT = this._getTextureSampler(TT),
          IT = this._exporter._samplers,
          iT = IT.findIndex((TT => TT.minFilter === oT.minFilter && TT.magFilter === oT.magFilter && TT.wrapS === oT.wrapS && TT.wrapT === oT.wrapT));
        return -1 !== iT ? iT : (IT.push(oT), IT.length - 1)
      }
    }
    var UI = IT(38851),
      aI = IT(38983);
    (0, aI.c)();
    var YI = IT(36125);
    const QI = iT.Matrix.Compose(new iT.sc(-1, 1, 1), iT.Quaternion.Identity(), iT.sc.Zero());

    function OI(TT, oT) {
      if (!(TT instanceof DT.c)) return !1;
      if (oT) {
        if (!TT.getWorldMatrix().equalsWithEpsilon(iT.Matrix.IdentityReadOnly, YI.d)) return !1
      } else {
        if (!TT.getWorldMatrix().multiplyToRef(QI, iT.TmpVectors.Matrix[0]).equalsWithEpsilon(iT.Matrix.IdentityReadOnly, YI.d)) return !1
      }
      return !(TT instanceof LT.b && TT.geometry)
    }
    const HI = iT.sc.ZeroReadOnly,
      nI = iT.Quaternion.Identity(),
      qI = iT.sc.OneReadOnly,
      ZI = new iT.sc(-1, 1, 1);

    function lI(TT, oT) {
      const {
        byteOffset: IT,
        byteStride: iT,
        type: zT,
        normalized: kT
      } = TT, WT = TT.getSize(), XT = oT.reduce(((TT, oT) => oT.getTotalVertices() > TT ? oT.getTotalVertices() : TT), -Number.MAX_VALUE);
      return {
        byteOffset: IT,
        byteStride: iT,
        componentCount: WT,
        type: zT,
        count: XT * WT,
        normalized: kT,
        totalVertices: XT,
        kind: TT.getKind()
      }
    }

    function sI(TT) {
      switch (TT) {
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

    function tI(TT) {
      switch (TT) {
        case ST.d.PositionKind:
        case ST.d.NormalKind:
        case ST.d.TangentKind:
        case ST.d.ColorKind:
        case ST.d.MatricesIndicesKind:
        case ST.d.MatricesIndicesExtraKind:
        case ST.d.MatricesWeightsKind:
        case ST.d.MatricesWeightsExtraKind:
        case ST.d.UVKind:
        case ST.d.UV2Kind:
        case ST.d.UV3Kind:
        case ST.d.UV4Kind:
        case ST.d.UV5Kind:
        case ST.d.UV6Kind:
          return !0
      }
      return !1
    }

    function GI(TT) {
      const oT = Math.sqrt(TT.x * TT.x + TT.y * TT.y + TT.z * TT.z);
      oT > 0 && (TT.x /= oT, TT.y /= oT, TT.z /= oT)
    }

    function pI(TT) {
      return TT.x *= -1, TT
    }

    function bI(TT) {
      if (TT.x * TT.x + TT.y * TT.y > .5) {
        const oT = Math.abs(TT.x),
          IT = Math.abs(TT.y);
        if (oT > IT) {
          const IT = Math.sign(TT.x);
          TT.x = oT, TT.y *= -IT, TT.z *= -IT, TT.w *= IT
        } else {
          const oT = Math.sign(TT.y);
          TT.x *= -oT, TT.y = IT, TT.z *= oT, TT.w *= -oT
        }
      } else {
        const oT = Math.abs(TT.z),
          IT = Math.abs(TT.w);
        if (oT > IT) {
          const IT = Math.sign(TT.z);
          TT.x *= -IT, TT.y *= IT, TT.z = oT, TT.w *= -IT
        } else {
          const oT = Math.sign(TT.w);
          TT.x *= oT, TT.y *= -oT, TT.z *= -oT, TT.w = IT
        }
      }
      return TT
    }

    function yI(TT) {
      TT.S_(-TT.z, TT.w, TT.x, -TT.y)
    }

    function NI(TT, oT) {
      const IT = iT.sc.FromArrayToRef(oT.translation || [0, 0, 0], 0, iT.TmpVectors.sc[0]),
        zT = iT.Quaternion.FromArrayToRef(oT.rotation || [0, 0, 0, 1], 0, iT.TmpVectors.Quaternion[0]),
        kT = iT.Matrix.ComposeToRef(qI, zT, IT, iT.TmpVectors.Matrix[0]),
        WT = iT.sc.FromArrayToRef(TT.translation || [0, 0, 0], 0, iT.TmpVectors.sc[2]),
        XT = iT.Quaternion.FromArrayToRef(TT.rotation || [0, 0, 0, 1], 0, iT.TmpVectors.Quaternion[1]),
        BT = iT.Matrix.ComposeToRef(qI, XT, WT, iT.TmpVectors.Matrix[1]);
      kT.multiplyToRef(BT, BT), BT.decompose(void 0, zT, IT), IT.equalsWithEpsilon(HI, YI.d) ? delete oT.translation : oT.translation = IT.bIT(), zT.equalsWithEpsilon(nI, YI.d) ? delete oT.rotation : oT.rotation = zT.bIT(), oT.scale && delete oT.scale
    }

    function PI(TT, oT) {
      if (!(oT instanceof DT.c)) return !1;
      if (!(1 === oT.getChildren().length && 0 === TT.getChildren().length && TT.parent === oT)) return !1;
      const IT = TT.pC(),
        iT = TT instanceof aI.d && !IT.useRightHandedSystem ? ZI : qI;
      return !!oT.ti.equalsWithEpsilon(iT, YI.d) || (ET.d.Warn(`Cannot collapse node ${TT.name} into parent node ${oT.name} with modified scaling.`), !1)
    }

    function dI(TT) {
      if (TT instanceof Array) {
        const oT = new Float32Array(TT);
        return new Uint8Array(oT.buffer, oT.byteOffset, oT.byteLength)
      }
      return ArrayBuffer.isView(TT) ? new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength) : new Uint8Array(TT)
    }

    function VI(TT, oT) {
      for (const [IT, iT] of Object.entries(TT)) {
        const zT = oT[IT];
        (Array.isArray(iT) && Array.isArray(zT) && Ti(iT, zT) || iT === zT) && delete TT[IT]
      }
      return TT
    }

    function Ti(TT, oT) {
      return TT.length === oT.length && TT.every(((TT, IT) => TT === oT[IT]))
    }
    const oi = new Map([
      [Int8Array, (TT, oT, IT) => TT.setInt8(oT, IT)],
      [Uint8Array, (TT, oT, IT) => TT.setUint8(oT, IT)],
      [Uint8ClampedArray, (TT, oT, IT) => TT.setUint8(oT, IT)],
      [Int16Array, (TT, oT, IT) => TT.setInt16(oT, IT, !0)],
      [Uint16Array, (TT, oT, IT) => TT.setUint16(oT, IT, !0)],
      [Int32Array, (TT, oT, IT) => TT.setInt32(oT, IT, !0)],
      [Uint32Array, (TT, oT, IT) => TT.setUint32(oT, IT, !0)],
      [Float32Array, (TT, oT, IT) => TT.setFloat32(oT, IT, !0)],
      [Float64Array, (TT, oT, IT) => TT.setFloat64(oT, IT, !0)]
    ]);
    class Ii {
      writeTypedArray(TT) {
        this._checkGrowBuffer(TT.byteLength);
        const oT = oi.get(TT.constructor);
        for (let IT = 0; IT < TT.length; IT++) oT(this._dataView, this._byteOffset, TT[IT]), this._byteOffset += TT.BYTES_PER_ELEMENT
      }
      constructor(TT) {
        this._data = new Uint8Array(TT), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(TT) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, TT), this._byteOffset++
      }
      writeInt8(TT) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, TT), this._byteOffset++
      }
      writeInt16(TT) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, TT, !0), this._byteOffset += 2
      }
      writeUInt16(TT) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, TT, !0), this._byteOffset += 2
      }
      writeInt32(TT) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, TT, !0), this._byteOffset += 4
      }
      writeUInt32(TT) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, TT, !0), this._byteOffset += 4
      }
      writeFloat32(TT) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, TT, !0), this._byteOffset += 4
      }
      writeFloat64(TT) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, TT, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(TT) {
        const oT = this.byteOffset + TT;
        if (oT > this._data.byteLength) {
          const TT = new Uint8Array(2 * oT);
          TT.set(this._data), this._data = TT, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function ii(TT) {
      return TT % 4 === 0 ? 4 : TT % 2 === 0 ? 2 : 1
    }
    class zi {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(TT) {
        let oT = 0;
        this._bufferViewToData.forEach((TT => {
          oT += TT.byteLength
        }));
        const IT = new Ii(oT),
          iT = Array.from(this._bufferViewToData.keys()).sort(((TT, oT) => ii(oT.byteLength) - ii(TT.byteLength)));
        for (const zT of iT) {
          zT.byteOffset = IT.byteOffset, TT.push(zT);
          const oT = TT.length - 1,
            iT = this.getPropertiesWithBufferView(zT);
          for (const TT of iT) TT.bufferView = oT;
          IT.writeTypedArray(this._bufferViewToData.get(zT)), this._bufferViewToData.delete(zT)
        }
        return IT.getOutputData()
      }
      createBufferView(TT, oT) {
        const IT = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: TT.byteLength,
          byteStride: oT
        };
        return this._bufferViewToData.set(IT, TT), IT
      }
      createAccessor(TT, oT, IT, iT, zT, kT, WT) {
        this._verifyBufferView(TT);
        const XT = {
          bufferView: void 0,
          componentType: IT,
          count: iT,
          type: oT,
          min: kT?.min,
          max: kT?.max,
          normalized: WT,
          byteOffset: zT
        };
        return this.setBufferView(XT, TT), this._accessorToBufferView.set(XT, TT), XT
      }
      setBufferView(TT, oT) {
        this._verifyBufferView(oT);
        this.getPropertiesWithBufferView(oT).push(TT)
      }
      removeBufferView(TT) {
        const oT = this.getPropertiesWithBufferView(TT);
        for (const IT of oT) void 0 !== IT.bufferView && delete IT.bufferView;
        this._bufferViewToData.delete(TT), this._bufferViewToProperties.delete(TT), this._accessorToBufferView.forEach(((oT, IT) => {
          oT === TT && (void 0 !== IT.byteOffset && delete IT.byteOffset, this._accessorToBufferView.delete(IT))
        }))
      }
      getBufferView(TT) {
        const oT = this._accessorToBufferView.get(TT);
        return this._verifyBufferView(oT), oT
      }
      getPropertiesWithBufferView(TT) {
        return this._verifyBufferView(TT), this._bufferViewToProperties.set(TT, this._bufferViewToProperties.get(TT) ?? []), this._bufferViewToProperties.get(TT)
      }
      getData(TT) {
        return this._verifyBufferView(TT), this._bufferViewToData.get(TT)
      }
      _verifyBufferView(TT) {
        if (void 0 === TT || !this._bufferViewToData.has(TT)) throw new Error(`BufferView ${TT} not found in BufferManager.`)
      }
    }
    var ki = IT(38986);
    (0, ki.e)();
    var Wi = IT(39238);
    (0, Wi.d)();
    var Xi = IT(39038),
      Bi = IT(40011);
    (0, Bi.e)();
    let Fi = (() => {
      var TT;
      let oT, IT, iT = [],
        zT = [],
        kT = [],
        WT = [];
      return TT = class {
        get influence() {
          return this._influence
        }
        set influence(TT) {
          if (this._influence === TT) return;
          const oT = this._influence;
          this._influence = TT, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === oT || 0 === TT)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(TT) {
          this._animationPropertiesOverride = TT
        }
        constructor(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            XT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = TT, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new II.d, this._onDataLayoutChanged = new II.d, this.id = (0, uT.j)(this, iT, void 0), this.morphTargetManager = ((0, uT.j)(this, zT), (0, uT.j)(this, kT, null)), this._animationPropertiesOverride = ((0, uT.j)(this, WT), null), this.id = TT, this.morphTargetManager = XT, this._scene = IT || KT.d.LastCreatedScene, this.influence = oT, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        mWT(TT) {
          const oT = this.hasPositions;
          this._positions = TT, oT !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(TT) {
          const oT = this.hasNormals;
          this._normals = TT, oT !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(TT) {
          const oT = this.hasTangents;
          this._tangents = TT, oT !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(TT) {
          const oT = this.hasUVs;
          this._uvs = TT, oT !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(TT) {
          const oT = this.hasUV2s;
          this._uv2s = TT, oT !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(TT) {
          const oT = this.hasColors;
          this._colors = TT, oT !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const oT = eo.c.Clone((() => new TT(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return oT._positions = this._positions, oT._normals = this._normals, oT._tangents = this._tangents, oT._uvs = this._uvs, oT._uv2s = this._uv2s, oT._colors = this._colors, oT
        }
        serialize() {
          const TT = {};
          return TT.name = this.name, TT.influence = this.influence, null != this.id && (TT.id = this.id), TT.uniqueId = this.uniqueId, TT.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (TT.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (TT.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (TT.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (TT.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (TT.colors = Array.prototype.slice.call(this.getColors())), eo.c.AppendSerializedAnimations(this, TT), TT
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(oT, IT) {
          let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const zT = new TT(oT.name, oT.influence, IT, iT);
          if (zT.mWT(oT.positions), null != oT.id && (zT.id = oT.id), oT.normals && zT.setNormals(oT.normals), oT.tangents && zT.setTangents(oT.tangents), oT.uvs && zT.setUVs(oT.uvs), oT.uv2s && zT.setUV2s(oT.uv2s), oT.colors && zT.setColors(oT.colors), oT.animations) {
            for (let TT = 0; TT < oT.animations.length; TT++) {
              const IT = oT.animations[TT],
                iT = (0, Zo.d)("BABYLON.Animation");
              iT && zT.animations.push(iT.Parse(IT))
            }
            oT.autoAnimate && IT && IT.beginAnimation(zT, oT.autoAnimateFrom, oT.autoAnimateTo, oT.autoAnimateLoop, oT.autoAnimateSpeed || 1)
          }
          return zT
        }
        static FromMesh(oT, IT, iT) {
          IT || (IT = oT.name);
          const zT = new TT(IT, iT, oT.pC(), oT.morphTargetManager);
          return zT.mWT(oT.getVerticesData(nT.i.PositionKind)), oT.isVerticesDataPresent(nT.i.NormalKind) && zT.setNormals(oT.getVerticesData(nT.i.NormalKind)), oT.isVerticesDataPresent(nT.i.TangentKind) && zT.setTangents(oT.getVerticesData(nT.i.TangentKind)), oT.isVerticesDataPresent(nT.i.UVKind) && zT.setUVs(oT.getVerticesData(nT.i.UVKind)), oT.isVerticesDataPresent(nT.i.UV2Kind) && zT.setUV2s(oT.getVerticesData(nT.i.UV2Kind)), oT.isVerticesDataPresent(nT.i.ColorKind) && zT.setColors(oT.getVerticesData(nT.i.ColorKind)), zT
        }
      }, (() => {
        const XT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, vT.P)()], IT = [(0, vT.P)()], (0, uT.h)(null, null, oT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, oT) => {
              TT.id = oT
            }
          },
          metadata: XT
        }, iT, zT), (0, uT.h)(null, null, IT, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: TT => "morphTargetManager" in TT,
            get: TT => TT.morphTargetManager,
            set: (TT, oT) => {
              TT.morphTargetManager = oT
            }
          },
          metadata: XT
        }, kT, WT), XT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XT
        })
      })(), TT
    })();
    var Si, Di = IT(40079),
      Li = IT(39031);
    ! function(TT) {
      TT[TT.INTANGENT = 0] = "INTANGENT", TT[TT.OUTTANGENT = 1] = "OUTTANGENT"
    }(Si || (Si = {}));
    class xi {
      static _IsTransformable(TT) {
        return TT && (TT instanceof DT.c || TT instanceof ki.c || TT instanceof Li.b)
      }
      static _CreateNodeAnimation(TT, oT, IT, iT, kT) {
        if (this._IsTransformable(TT)) {
          const WT = [],
            XT = [],
            BT = oT.getKeys(),
            FT = xi._CalculateMinMaxKeyFrames(BT),
            ST = xi._DeduceInterpolation(BT, IT, iT),
            DT = ST.interpolationType,
            LT = ST.shouldBakeAnimation;
          if (LT ? xi._CreateBakedAnimation(TT, oT, IT, FT.min, FT.max, oT.framePerSecond, kT, WT, XT, FT, iT) : "LINEAR" === DT || "STEP" === DT ? xi._CreateLinearOrStepAnimation(TT, oT, IT, WT, XT, iT) : "CUBICSPLINE" === DT ? xi._CreateCubicSplineAnimation(TT, oT, IT, WT, XT, iT) : xi._CreateBakedAnimation(TT, oT, IT, FT.min, FT.max, oT.framePerSecond, kT, WT, XT, FT, iT), WT.length && XT.length) {
            return {
              inputs: WT,
              outputs: XT,
              samplerInterpolation: DT,
              inputsMin: LT ? FT.min : zT.Tools.FloatRound(FT.min / oT.framePerSecond),
              inputsMax: LT ? FT.max : zT.Tools.FloatRound(FT.max / oT.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(TT) {
        let oT = null,
          IT = "VEC3",
          iT = !1;
        const kT = TT.targetProperty.split(".");
        switch (kT[0]) {
          case "ti":
            oT = "scale";
            break;
          case "position":
            oT = "translation";
            break;
          case "rotation":
            IT = "VEC4", oT = "rotation";
            break;
          case "rotationQuaternion":
            IT = "VEC4", iT = !0, oT = "rotation";
            break;
          case "influence":
            IT = "SCALAR", oT = "weights";
            break;
          default:
            zT.Tools.Error(`Unsupported animatable property ${kT[0]}`)
        }
        return oT ? {
          animationChannelTargetPath: oT,
          dataAccessorType: IT,
          useQuaternion: iT
        } : (zT.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
        let DT;
        if (xi._IsTransformable(TT) && TT.animations)
          for (const LT of TT.animations) {
            if (ST && !ST(LT)) continue;
            const zT = xi._DeduceAnimationInfo(LT);
            zT && (DT = {
              name: LT.name,
              samplers: [],
              channels: []
            }, xi._AddAnimation(`${LT.name}`, LT.hasRunningRuntimeAnimations ? oT : DT, TT, LT, zT.dataAccessorType, zT.animationChannelTargetPath, iT, kT, WT, XT, zT.useQuaternion, BT, FT), DT.samplers.length && DT.channels.length && IT.push(DT))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
        let DT;
        if (TT instanceof Di.b) {
          const zT = TT.morphTargetManager;
          if (zT)
            for (let LT = 0; LT < zT.numTargets; ++LT) {
              const xT = zT.getTarget(LT);
              for (const cT of xT.animations) {
                if (ST && !ST(cT)) continue;
                const xT = new Bi.b(`${cT.name}`, "influence", cT.framePerSecond, cT.dataType, cT.Kz, cT.enableBlending),
                  KT = [],
                  MT = cT.getKeys();
                for (let TT = 0; TT < MT.length; ++TT) {
                  const oT = MT[TT];
                  for (let TT = 0; TT < zT.numTargets; ++TT) TT == LT ? KT.push(oT) : KT.push({
                    frame: oT.frame,
                    value: 0
                  })
                }
                xT.setKeys(KT, !0);
                const rT = xi._DeduceAnimationInfo(xT);
                rT && (DT = {
                  name: xT.name,
                  samplers: [],
                  channels: []
                }, xi._AddAnimation(cT.name, cT.hasRunningRuntimeAnimations ? oT : DT, TT, xT, rT.dataAccessorType, rT.animationChannelTargetPath, iT, kT, WT, XT, rT.useQuaternion, BT, FT, zT.numTargets), DT.samplers.length && DT.channels.length && IT.push(DT))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
        let ST;
        if (TT.animationGroups) {
          const DT = TT.animationGroups;
          for (const LT of DT) {
            const DT = new Map,
              xT = new Map,
              cT = new Set,
              KT = LT.to - LT.from;
            ST = {
              name: LT.name,
              channels: [],
              samplers: []
            };
            for (let oT = 0; oT < LT.targetedAnimations.length; ++oT) {
              const FT = LT.targetedAnimations[oT],
                KT = FT.target,
                MT = FT.animation;
              if (BT && !BT(MT)) continue;
              const rT = XT.has(KT);
              if (this._IsTransformable(KT) || 1 === KT.length && this._IsTransformable(KT[0])) {
                const TT = xi._DeduceAnimationInfo(FT.animation);
                if (TT) {
                  const oT = this._IsTransformable(KT) ? KT : this._IsTransformable(KT[0]) ? KT[0] : null;
                  oT && xi._AddAnimation(`${MT.name}`, ST, oT, MT, TT.dataAccessorType, TT.animationChannelTargetPath, IT, iT, zT, kT, TT.useQuaternion, WT, rT)
                }
              } else if (KT instanceof Fi || 1 === KT.length && KT[0] instanceof Fi) {
                if (xi._DeduceAnimationInfo(FT.animation)) {
                  const oT = KT instanceof Fi ? KT : KT[0];
                  if (oT) {
                    const IT = TT.morphTargetManagers.find((TT => {
                      for (let IT = 0; IT < TT.numTargets; ++IT)
                        if (TT.getTarget(IT) === oT) return !0;
                      return !1
                    }));
                    if (IT) {
                      const iT = TT.meshes.find((TT => TT.morphTargetManager === IT));
                      iT && (DT.has(iT) || DT.set(iT, new Map), DT.get(iT)?.set(oT, MT), cT.add(iT), xT.set(iT, MT))
                    }
                  }
                }
              }
            }
            cT.forEach((TT => {
              const oT = TT.morphTargetManager;
              let XT = null;
              const BT = [],
                FT = xT.get(TT).getKeys(),
                cT = FT.length;
              for (let IT = 0; IT < cT; ++IT)
                for (let iT = 0; iT < oT.numTargets; ++iT) {
                  const zT = oT.getTarget(iT),
                    kT = DT.get(TT);
                  if (kT) {
                    const oT = kT.get(zT);
                    oT ? (XT || (XT = new Bi.b(`${LT.name}_${TT.name}_MorphWeightAnimation`, "influence", oT.framePerSecond, Bi.b.ANIMATIONTYPE_FLOAT, oT.Kz, oT.enableBlending)), BT.push(oT.getKeys()[IT])) : BT.push({
                      frame: LT.from + KT / cT * IT,
                      value: zT.influence,
                      inTangent: FT[0].inTangent ? 0 : void 0,
                      outTangent: FT[0].outTangent ? 0 : void 0
                    })
                  }
                }
              XT.setKeys(BT, !0);
              const MT = xi._DeduceAnimationInfo(XT);
              MT && xi._AddAnimation(`${LT.name}_${TT.name}_MorphWeightAnimation`, ST, TT, XT, MT.dataAccessorType, MT.animationChannelTargetPath, IT, iT, zT, kT, MT.useQuaternion, WT, !1, oT?.numTargets)
            })), ST.channels.length && ST.samplers.length && (FT?.set(LT, oT.length), oT.push(ST))
          }
        }
      }
      static _AddAnimation(TT, oT, IT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT) {
        const KT = xi._CreateNodeAnimation(IT, zT, WT, DT, LT);
        let MT, rT, AT, gT, hT, wT;
        if (KT) {
          if (cT) {
            let TT, oT = 0;
            const IT = [];
            for (; KT.inputs.length > 0;) TT = KT.inputs.shift(), oT % cT == 0 && IT.push(TT), oT++;
            KT.inputs = IT
          }
          const TT = XT.get(IT),
            zT = new Float32Array(KT.inputs);
          MT = BT.createBufferView(zT), rT = BT.createAccessor(MT, "SCALAR", 5126, KT.inputs.length, void 0, {
            min: [KT.inputsMin],
            max: [KT.inputsMax]
          }), ST.push(rT), AT = ST.length - 1;
          const FT = new iT.Quaternion,
            DT = new iT.sc,
            LT = new iT.sc,
            mT = IT instanceof ki.c,
            eT = sI(kT),
            RT = new Float32Array(KT.outputs.length * eT);
          KT.outputs.forEach((function(TT, oT) {
            let IT = TT;
            switch (WT) {
              case "translation":
                xT && (iT.sc.FromArrayToRef(TT, 0, LT), pI(LT), LT.toArray(IT));
                break;
              case "rotation":
                4 === TT.length ? iT.Quaternion.FromArrayToRef(TT, 0, FT) : (IT = new Array(4), iT.sc.FromArrayToRef(TT, 0, DT), iT.Quaternion.FromEulerVectorToRef(DT, FT)), xT && (bI(FT), mT && yI(FT)), FT.toArray(IT)
            }
            RT.set(IT, oT * eT)
          })), MT = BT.createBufferView(RT), rT = BT.createAccessor(MT, kT, 5126, KT.outputs.length), ST.push(rT), gT = ST.length - 1, hT = {
            interpolation: KT.samplerInterpolation,
            input: AT,
            output: gT
          }, oT.samplers.push(hT), wT = {
            sampler: oT.samplers.length - 1,
            target: {
              node: TT,
              path: WT
            }
          }, oT.channels.push(wT)
        }
      }
      static _CreateBakedAnimation(TT, oT, IT, kT, WT, XT, BT, FT, ST, DT, LT) {
        let xT;
        const cT = iT.Quaternion.Identity();
        let KT, MT, rT, AT, gT, hT = null,
          wT = null;
        DT.min = zT.Tools.FloatRound(kT / XT);
        const mT = oT.getKeys();
        for (let iT = 0, eT = mT.length; iT < eT; ++iT) {
          if (MT = mT[iT], iT + 1 < eT)
            if (rT = mT[iT + 1], MT.value.equals && MT.value.equals(rT.value) || MT.value === rT.value) {
              if (0 !== iT) continue;
              gT = MT.frame
            } else gT = rT.frame;
          else {
            if (AT = mT[iT - 1], MT.value.equals && MT.value.equals(AT.value) || MT.value === AT.value) continue;
            gT = WT
          }
          if (gT)
            for (let iT = MT.frame; iT <= gT; iT += BT) {
              if (KT = zT.Tools.FloatRound(iT / XT), KT === hT) continue;
              hT = KT, wT = KT;
              const kT = {
                key: 0,
                repeatCount: 0,
                Kz: oT.Kz
              };
              xT = oT._interpolate(iT, kT), xi._SetInterpolatedValue(TT, xT, KT, oT, IT, cT, FT, ST, LT)
            }
        }
        wT && (DT.max = wT)
      }
      static _ConvertFactorToVector3OrQuaternion(TT, oT, IT, kT, WT) {
        const XT = xi._GetBasePositionRotationOrScale(oT, kT, WT),
          BT = IT.targetProperty.split("."),
          FT = BT ? BT[1] : "",
          ST = WT ? iT.Quaternion.FromArray(XT).normalize() : iT.sc.FromArray(XT);
        switch (FT) {
          case "x":
          case "y":
          case "z":
            ST[FT] = TT;
            break;
          case "w":
            ST.w = TT;
            break;
          default:
            zT.Tools.Error(`glTFAnimation: Unsupported component name "${FT}"!`)
        }
        return ST
      }
      static _SetInterpolatedValue(TT, oT, IT, zT, kT, WT, XT, BT, FT) {
        let ST;
        XT.push(IT), "weights" !== kT ? (zT.dataType === Bi.b.ANIMATIONTYPE_FLOAT && (oT = this._ConvertFactorToVector3OrQuaternion(oT, TT, zT, kT, FT)), "rotation" === kT ? (FT ? WT = oT : (ST = oT, iT.Quaternion.RotationYawPitchRollToRef(ST.y, ST.x, ST.z, WT)), BT.push(WT.bIT())) : (ST = oT, BT.push(ST.bIT()))) : BT.push([oT])
      }
      static _CreateLinearOrStepAnimation(TT, oT, IT, iT, zT, kT) {
        for (const WT of oT.getKeys()) iT.push(WT.frame / oT.framePerSecond), xi._AddKeyframeValue(WT, oT, zT, IT, TT, kT)
      }
      static _CreateCubicSplineAnimation(TT, oT, IT, iT, zT, kT) {
        oT.getKeys().forEach((function(WT) {
          iT.push(WT.frame / oT.framePerSecond), xi._AddSplineTangent(Si.INTANGENT, zT, IT, "CUBICSPLINE", WT, kT), xi._AddKeyframeValue(WT, oT, zT, IT, TT, kT), xi._AddSplineTangent(Si.OUTTANGENT, zT, IT, "CUBICSPLINE", WT, kT)
        }))
      }
      static _GetBasePositionRotationOrScale(TT, oT, IT) {
        let zT;
        if ("rotation" === oT)
          if (IT) {
            zT = (TT.rotationQuaternion ?? iT.Quaternion.Identity()).bIT()
          } else {
            zT = (TT.rotation ?? iT.sc.Zero()).bIT()
          }
        else if ("translation" === oT) {
          zT = (TT.position ?? iT.sc.Zero()).bIT()
        } else {
          zT = (TT.ti ?? iT.sc.One()).bIT()
        }
        return zT
      }
      static _AddKeyframeValue(TT, oT, IT, kT, WT, XT) {
        let BT;
        const FT = oT.dataType;
        if (FT === Bi.b.ANIMATIONTYPE_VECTOR3) {
          let oT = TT.value.bIT();
          if ("rotation" === kT) {
            const TT = iT.sc.FromArray(oT);
            oT = iT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).bIT()
          }
          IT.push(oT)
        } else if (FT === Bi.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === kT) IT.push([TT.value]);
          else if (BT = this._ConvertFactorToVector3OrQuaternion(TT.value, WT, oT, kT, XT), BT) {
            if ("rotation" === kT) {
              const TT = XT ? BT : iT.Quaternion.RotationYawPitchRoll(BT.y, BT.x, BT.z).normalize();
              IT.push(TT.bIT())
            }
            IT.push(BT.bIT())
          }
        } else FT === Bi.b.ANIMATIONTYPE_QUATERNION ? IT.push(TT.value.normalize().bIT()) : zT.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(TT, oT, IT) {
        let iT, zT, kT = !1;
        if ("rotation" === oT && !IT) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let WT = 0, XT = TT.length; WT < XT; ++WT)
          if (zT = TT[WT], zT.inTangent || zT.outTangent)
            if (iT) {
              if ("CUBICSPLINE" !== iT) {
                iT = "LINEAR", kT = !0;
                break
              }
            } else iT = "CUBICSPLINE";
        else if (iT) {
          if ("CUBICSPLINE" === iT || zT.interpolation && 1 === zT.interpolation && "STEP" !== iT) {
            iT = "LINEAR", kT = !0;
            break
          }
        } else iT = zT.interpolation && 1 === zT.interpolation ? "STEP" : "LINEAR";
        return iT || (iT = "LINEAR"), {
          interpolationType: iT,
          shouldBakeAnimation: kT
        }
      }
      static _AddSplineTangent(TT, oT, IT, zT, kT, WT) {
        let XT;
        const BT = TT === Si.INTANGENT ? kT.inTangent : kT.outTangent;
        if ("CUBICSPLINE" === zT) {
          if ("rotation" === IT)
            if (BT)
              if (WT) XT = BT.bIT();
              else {
                const TT = BT;
                XT = iT.Quaternion.RotationYawPitchRoll(TT.y, TT.x, TT.z).bIT()
              }
          else XT = [0, 0, 0, 0];
          else XT = "weights" === IT ? BT ? [BT] : [0] : BT ? BT.bIT() : [0, 0, 0];
          oT.push(XT)
        }
      }
      static _CalculateMinMaxKeyFrames(TT) {
        let oT = 1 / 0,
          IT = -1 / 0;
        return TT.forEach((function(TT) {
          oT = Math.min(oT, TT.frame), IT = Math.max(IT, TT.frame)
        })), {
          min: oT,
          max: IT
        }
      }
    }

    function ci(TT, oT, IT, kT, WT, XT) {
      const BT = {
          attributes: {},
          influence: TT.influence,
          name: TT.name
        },
        FT = oT.geometry;
      if (!FT) return zT.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), BT;
      const DT = XT ? -1 : 1,
        LT = iT.sc.Zero();
      let xT, cT;
      if (TT.hasPositions) {
        const kT = TT.getPositions(),
          XT = FT.getVerticesData(ST.d.PositionKind);
        if (XT) {
          const TT = new Float32Array(XT.length),
            oT = [1 / 0, 1 / 0, 1 / 0],
            zT = [-1 / 0, -1 / 0, -1 / 0];
          cT = XT.length / 3, xT = 0;
          for (let IT = xT; IT < cT; ++IT) {
            const WT = iT.sc.FromArray(XT, 3 * IT);
            iT.sc.FromArray(kT, 3 * IT).subtractToRef(WT, LT), LT.x *= DT, oT[0] = Math.min(oT[0], LT.x), zT[0] = Math.max(zT[0], LT.x), oT[1] = Math.min(oT[1], LT.y), zT[1] = Math.max(zT[1], LT.y), oT[2] = Math.min(oT[2], LT.z), zT[2] = Math.max(zT[2], LT.z), TT[3 * IT] = LT.x, TT[3 * IT + 1] = LT.y, TT[3 * IT + 2] = LT.z
          }
          const FT = IT.createBufferView(TT, 12),
            ST = IT.createAccessor(FT, "VEC3", 5126, kT.length / 3, 0, {
              min: oT,
              max: zT
            });
          WT.push(ST), BT.attributes.POSITION = WT.length - 1
        } else zT.Tools.Warn(`Morph target positions for mesh ${oT.name} were not exported. Mesh does not have position vertex data`)
      }
      if (TT.hasNormals) {
        const kT = TT.getNormals(),
          XT = FT.getVerticesData(ST.d.NormalKind);
        if (XT) {
          const TT = new Float32Array(XT.length);
          cT = XT.length / 3, xT = 0;
          for (let IT = xT; IT < cT; ++IT) {
            const oT = iT.sc.FromArray(XT, 3 * IT).normalize();
            iT.sc.FromArray(kT, 3 * IT).normalize().subtractToRef(oT, LT), TT[3 * IT] = LT.x * DT, TT[3 * IT + 1] = LT.y, TT[3 * IT + 2] = LT.z
          }
          const oT = IT.createBufferView(TT, 12),
            zT = IT.createAccessor(oT, "VEC3", 5126, kT.length / 3, 0);
          WT.push(zT), BT.attributes.NORMAL = WT.length - 1
        } else zT.Tools.Warn(`Morph target normals for mesh ${oT.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (TT.hasTangents) {
        const kT = TT.getTangents(),
          XT = FT.getVerticesData(ST.d.TangentKind);
        if (XT) {
          cT = XT.length / 4;
          const TT = new Float32Array(3 * cT);
          xT = 0;
          for (let IT = xT; IT < cT; ++IT) {
            const oT = iT.sc.FromArray(XT, 4 * IT);
            GI(oT);
            const zT = iT.sc.FromArray(kT, 3 * IT);
            GI(zT), zT.subtractToRef(oT, LT), TT[3 * IT] = LT.x * DT, TT[3 * IT + 1] = LT.y, TT[3 * IT + 2] = LT.z
          }
          const oT = IT.createBufferView(TT, 12),
            zT = IT.createAccessor(oT, "VEC3", 5126, cT, 0);
          WT.push(zT), BT.attributes.TANGENT = WT.length - 1
        } else zT.Tools.Warn(`Morph target tangents for mesh ${oT.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (TT.hasColors) {
        const kT = TT.getColors(),
          XT = FT.getVerticesData(ST.d.ColorKind),
          DT = FT.getVertexBuffer(ST.d.ColorKind);
        if (XT && DT) {
          const TT = DT.getSize();
          cT = XT.length / TT;
          const oT = new Float32Array(cT * TT);
          xT = 0;
          for (let IT = xT; IT < cT; ++IT)
            if (3 === TT) {
              const zT = iT.sc.FromArray(XT, IT * TT);
              iT.sc.FromArray(kT, IT * TT).subtractToRef(zT, LT), oT[3 * IT] = LT.x, oT[3 * IT + 1] = LT.y, oT[3 * IT + 2] = LT.z
            } else if (4 === TT) {
            const zT = new iT.Vector4,
              WT = iT.Vector4.FromArray(XT, IT * TT);
            iT.Vector4.FromArray(kT, IT * TT).subtractToRef(WT, zT), oT[4 * IT] = zT.x, oT[4 * IT + 1] = zT.y, oT[4 * IT + 2] = zT.z, oT[4 * IT + 3] = zT.w
          } else zT.Tools.Warn(`Unsupported number of components for color attribute: ${TT}`);
          const FT = IT.createBufferView(oT, 4 * TT),
            ST = IT.createAccessor(FT, 3 === TT ? "VEC3" : "VEC4", 5126, cT, 0);
          WT.push(ST), BT.attributes.COLOR_0 = WT.length - 1
        } else zT.Tools.Warn(`Morph target colors for mesh ${oT.name} were not exported. Mesh does not have colors vertex data`)
      }
      return BT
    }
    var Ki = IT(40400);
    class Mi {}
    Mi.DEFAULT_COLOR = GT.e.White(), Mi.DEFAULT_WIDTH_ATTENUATED = 1, Mi.DEFAULT_WIDTH = .1;
    var ri = IT(40008);
    class Ai {
      constructor(TT) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = TT
      }
      moveTo(TT, oT) {
        this._currentPath = new ri.k(TT, oT), this._tempPaths.push(this._currentPath)
      }
      lineTo(TT, oT) {
        this._currentPath.addLineTo(TT, oT)
      }
      quadraticCurveTo(TT, oT, IT, iT) {
        this._currentPath.addQuadraticCurveTo(TT, oT, IT, iT, this._resolution)
      }
      bezierCurveTo(TT, oT, IT, iT, zT, kT) {
        this._currentPath.addBezierCurveTo(TT, oT, IT, iT, zT, kT, this._resolution)
      }
      extractHoles() {
        for (const TT of this._tempPaths) TT.area() > 0 ? this._holes.push(TT) : this._paths.push(TT);
        if (!this._paths.length && this._holes.length) {
          const TT = this._holes;
          this._holes = this._paths, this._paths = TT
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

    function gi(TT, oT, IT, iT, zT, kT) {
      const WT = kT.glyphs[TT] || kT.glyphs["?"];
      if (!WT) return null;
      const XT = new Ai(zT);
      if (WT.o) {
        const TT = WT.o.split(" ");
        for (let zT = 0, kT = TT.length; zT < kT;) {
          switch (TT[zT++]) {
            case "m": {
              const kT = parseInt(TT[zT++]) * oT + IT,
                WT = parseInt(TT[zT++]) * oT + iT;
              XT.moveTo(kT, WT);
              break
            }
            case "l": {
              const kT = parseInt(TT[zT++]) * oT + IT,
                WT = parseInt(TT[zT++]) * oT + iT;
              XT.lineTo(kT, WT);
              break
            }
            case "q": {
              const kT = parseInt(TT[zT++]) * oT + IT,
                WT = parseInt(TT[zT++]) * oT + iT,
                BT = parseInt(TT[zT++]) * oT + IT,
                FT = parseInt(TT[zT++]) * oT + iT;
              XT.quadraticCurveTo(BT, FT, kT, WT);
              break
            }
            case "b": {
              const kT = parseInt(TT[zT++]) * oT + IT,
                WT = parseInt(TT[zT++]) * oT + iT,
                BT = parseInt(TT[zT++]) * oT + IT,
                FT = parseInt(TT[zT++]) * oT + iT,
                ST = parseInt(TT[zT++]) * oT + IT,
                DT = parseInt(TT[zT++]) * oT + iT;
              XT.bezierCurveTo(BT, FT, ST, DT, kT, WT);
              break
            }
          }
        }
      }
      return XT.extractHoles(), {
        offsetX: WT.ha * oT,
        shapePath: XT
      }
    }

    function wi(TT, oT, IT, iT) {
      const zT = Array.from(TT),
        kT = oT / iT.resolution,
        WT = (iT.boundingBox.yMax - iT.boundingBox.yMin + iT.underlineThickness) * kT,
        XT = [];
      let BT = 0,
        FT = 0;
      for (let ST = 0; ST < zT.length; ST++) {
        const TT = zT[ST];
        if ("\n" === TT) BT = 0, FT -= WT;
        else {
          const oT = gi(TT, kT, BT, FT, IT, iT);
          oT && (BT += oT.offsetX, XT.push(oT.shapePath))
        }
      }
      return XT
    }
    class mi {
      static ConvertPoints(TT, oT) {
        if (TT.length && Array.isArray(TT) && "number" === typeof TT[0]) return [TT];
        if (TT.length && Array.isArray(TT[0]) && "number" === typeof TT[0][0]) return TT;
        if (TT.length && !Array.isArray(TT[0]) && TT[0] instanceof HT.m) {
          const oT = [];
          for (let IT = 0; IT < TT.length; IT++) {
            const iT = TT[IT];
            oT.push(iT.x, iT.y, iT.z)
          }
          return [oT]
        }
        if (TT.length > 0 && Array.isArray(TT[0]) && TT[0].length > 0 && TT[0][0] instanceof HT.m) {
          const oT = [],
            IT = TT;
          for (const TT of IT) oT.push(TT.flatMap((TT => [TT.x, TT.y, TT.z])));
          return oT
        }
        if (TT instanceof Float32Array) {
          if (oT?.floatArrayStride) {
            const IT = [],
              iT = 3 * oT.floatArrayStride;
            for (let oT = 0; oT < TT.length; oT += iT) {
              const zT = new Array(iT);
              for (let IT = 0; IT < iT; IT++) zT[IT] = TT[oT + IT];
              IT.push(zT)
            }
            return IT
          }
          return [Array.from(TT)]
        }
        if (TT.length && TT[0] instanceof Float32Array) {
          const oT = [];
          for (const IT of TT) oT.push(Array.from(IT));
          return oT
        }
        return []
      }
      static OmitZeroLengthPredicate(TT, oT, IT) {
        const iT = [];
        return oT.subtract(TT).lengthSquared() > 0 && iT.push([TT, oT]), IT.subtract(oT).lengthSquared() > 0 && iT.push([oT, IT]), TT.subtract(IT).lengthSquared() > 0 && iT.push([IT, TT]), 0 === iT.length ? null : iT
      }
      static OmitDuplicatesPredicate(TT, oT, IT, iT) {
        const zT = [];
        return mi._SearchInPoints(TT, oT, iT) || zT.push([TT, oT]), mi._SearchInPoints(oT, IT, iT) || zT.push([oT, IT]), mi._SearchInPoints(IT, TT, iT) || zT.push([IT, TT]), 0 === zT.length ? null : zT
      }
      static _SearchInPoints(TT, oT, IT) {
        for (const iT of IT)
          for (let IT = 0; IT < iT.length; IT++)
            if (iT[IT]?.equals(TT) && (iT[IT + 1]?.equals(oT) || iT[IT - 1]?.equals(oT))) return !0;
        return !1
      }
      static MeshesToLines(TT, oT) {
        const IT = [];
        for (let iT = 0; iT < TT.length; iT++) {
          const zT = TT[iT],
            kT = zT.getVerticesData(nT.i.PositionKind),
            WT = zT.hWT();
          if (kT && WT)
            for (let TT = 0, XT = 0; TT < WT.length; TT++) {
              const BT = 3 * WT[XT++],
                FT = 3 * WT[XT++],
                ST = 3 * WT[XT++],
                DT = new HT.m(kT[BT], kT[BT + 1], kT[BT + 2]),
                LT = new HT.m(kT[FT], kT[FT + 1], kT[FT + 2]),
                xT = new HT.m(kT[ST], kT[ST + 1], kT[ST + 2]);
              if (oT) {
                const XT = oT(DT, LT, xT, IT, TT, BT, zT, iT, kT, WT);
                if (XT)
                  for (const TT of XT) IT.push(TT)
              } else IT.push([DT, LT], [LT, xT], [xT, DT])
            }
        }
        return IT
      }
      static ToVector3Array(TT) {
        if (Array.isArray(TT[0])) {
          const oT = [],
            IT = TT;
          for (const TT of IT) {
            const IT = [];
            for (let oT = 0; oT < TT.length; oT += 3) IT.push(new HT.m(TT[oT], TT[oT + 1], TT[oT + 2]));
            oT.push(IT)
          }
          return oT
        }
        const oT = TT,
          IT = [];
        for (let iT = 0; iT < oT.length; iT += 3) IT.push(new HT.m(oT[iT], oT[iT + 1], oT[iT + 2]));
        return IT
      }
      static ToNumberArray(TT) {
        return TT.flatMap((TT => [TT.x, TT.y, TT.z]))
      }
      static GetPointsCountInfo(TT) {
        const oT = new Array(TT.length);
        let IT = 0;
        for (let iT = TT.length; iT--;) oT[iT] = TT[iT].length / 3, IT += oT[iT];
        return {
          total: IT,
          counts: oT
        }
      }
      static GetLineLength(TT) {
        if (0 === TT.length) return 0;
        let oT;
        oT = "number" === typeof TT[0] ? mi.ToVector3Array(TT) : TT;
        const IT = HT.i.sc[0];
        let iT = 0;
        for (let zT = 0; zT < oT.length - 1; zT++) {
          const TT = oT[zT];
          iT += oT[zT + 1].subtractToRef(TT, IT).length()
        }
        return iT
      }
      static GetLineLengthArray(TT, oT) {
        const IT = oT ? new Float32Array(oT, 0, TT.length / 3) : new Float32Array(TT.length / 3);
        let iT = 0;
        for (let zT = 0, kT = TT.length / 3 - 1; zT < kT; zT++) {
          let oT = TT[3 * zT + 0],
            kT = TT[3 * zT + 1],
            WT = TT[3 * zT + 2];
          oT -= TT[3 * zT + 3], kT -= TT[3 * zT + 4], WT -= TT[3 * zT + 5];
          iT += Math.sqrt(oT * oT + kT * kT + WT * WT), IT[zT + 1] = iT
        }
        return IT
      }
      static SegmentizeSegmentByCount(TT, oT, IT) {
        const iT = [],
          zT = oT.subtract(TT),
          kT = HT.i.sc[0];
        kT.W8(IT);
        const WT = HT.i.sc[1];
        zT.divideToRef(kT, WT);
        let XT = TT.clone();
        iT.push(XT);
        for (let BT = 0; BT < IT; BT++) XT = XT.clone(), iT.push(XT.addInPlace(WT));
        return iT
      }
      static SegmentizeLineBySegmentLength(TT, oT) {
        const IT = TT[0] instanceof HT.m ? mi.GetLineSegments(TT) : "number" === typeof TT[0] ? mi.GetLineSegments(mi.ToVector3Array(TT)) : TT,
          iT = [];
        for (const zT of IT)
          if (zT.length > oT) {
            const TT = mi.SegmentizeSegmentByCount(zT.point1, zT.point2, Math.ceil(zT.length / oT));
            for (const oT of TT) iT.push(oT)
          } else iT.push(zT.point1), iT.push(zT.point2);
        return iT
      }
      static SegmentizeLineBySegmentCount(TT, oT) {
        const IT = "number" === typeof TT[0] ? mi.ToVector3Array(TT) : TT,
          iT = mi.GetLineLength(IT) / oT;
        return mi.SegmentizeLineBySegmentLength(IT, iT)
      }
      static GetLineSegments(TT) {
        const oT = [];
        for (let IT = 0; IT < TT.length - 1; IT++) {
          const iT = TT[IT],
            zT = TT[IT + 1],
            kT = zT.subtract(iT).length();
          oT.push({
            point1: iT,
            point2: zT,
            length: kT
          })
        }
        return oT
      }
      static GetMinMaxSegmentLength(TT) {
        const oT = mi.GetLineSegments(TT).sort((TT => TT.length));
        return {
          min: oT[0].length,
          max: oT[oT.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zT = oT * IT;
        let kT = 0,
          WT = 0;
        const XT = TT.length;
        for (let FT = 0; FT < XT; FT++) {
          if (zT <= kT + TT[FT].length) {
            WT = FT;
            break
          }
          kT += TT[FT].length
        }
        const BT = (zT - kT) / TT[WT].length;
        return TT[WT].point2.subtractToRef(TT[WT].point1, HT.i.sc[0]), HT.i.sc[0].scaleToRef(BT, HT.i.sc[1]), iT || HT.i.sc[1].addInPlace(TT[WT].point1), HT.i.sc[1].clone()
      }
      static GetCircleLinePoints(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT,
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / oT;
        const kT = [];
        for (let WT = 0; WT <= oT; WT++) kT.push(new HT.m(Math.cos(WT * zT) * TT, Math.sin(WT * zT) * iT, IT));
        return kT
      }
      static GetBezierLinePoints(TT, oT, IT, iT) {
        return ri.g.CreateQuadraticBezier(TT, oT, IT, iT).getPoints().flatMap((TT => [TT.x, TT.y, TT.z]))
      }
      static GetArrowCap(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [TT.clone(), TT.add(oT.multiplyByFloats(IT, IT, IT))],
          widths: [iT, zT, kT, WT]
        }
      }
      static GetPointsFromText(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const WT = [],
          XT = wi(TT, oT, IT, iT);
        for (const BT of XT) {
          for (const TT of BT.paths) {
            const oT = [],
              IT = TT.getPoints();
            for (const TT of IT) oT.push(TT.x, TT.y, zT);
            WT.push(oT)
          }
          if (kT)
            for (const TT of BT.holes) {
              const oT = [],
                IT = TT.getPoints();
              for (const TT of IT) oT.push(TT.x, TT.y, zT);
              WT.push(oT)
            }
        }
        return WT
      }
      static Color3toRGBAUint8(TT) {
        const oT = new Uint8Array(4 * TT.length);
        for (let IT = 0, iT = 0; IT < TT.length; IT++) oT[iT++] = 255 * TT[IT].r, oT[iT++] = 255 * TT[IT].g, oT[iT++] = 255 * TT[IT].b, oT[iT++] = 255;
        return oT
      }
      static CreateColorsTexture(TT, oT, IT, iT) {
        const zT = iT.Zc().getCaps().maxTextureSize ?? 1,
          kT = oT.length > zT ? zT : oT.length,
          WT = Math.ceil(oT.length / zT);
        WT > 1 && (oT = [...oT, ...Array(kT * WT - oT.length).fill(oT[0])]);
        const XT = mi.Color3toRGBAUint8(oT),
          BT = new mT.e(XT, kT, WT, LI.c.TEXTUREFORMAT_RGBA, iT, !1, !0, IT);
        return BT.name = TT, BT
      }
      static PrepareEmptyColorsTexture(TT) {
        if (!Mi.EmptyColorsTexture) {
          const oT = new Uint8Array(4);
          Mi.EmptyColorsTexture = new mT.e(oT, 1, 1, LI.c.TEXTUREFORMAT_RGBA, TT, !1, !1, mT.e.NEAREST_NEAREST), Mi.EmptyColorsTexture.name = "grlEmptyColorsTexture", Mi.EmptyColorsTexture.bC.addOnce((() => {
            Mi.EmptyColorsTexture = null
          }))
        }
        return Mi.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Mi.EmptyColorsTexture?.dispose(), Mi.EmptyColorsTexture = null
      }
      static BooleanToNumber(TT) {
        return TT ? 1 : 0
      }
    }
    class ei extends qT.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Ri extends ZT.b {
      isCompatible(TT) {
        return !0
      }
      constructor(TT, oT, IT) {
        IT = IT || {
          color: Mi.DEFAULT_COLOR
        };
        const iT = new ei;
        iT.GREASED_LINE_HAS_COLOR = !!IT.color && !IT.useColors, iT.GREASED_LINE_SIZE_ATTENUATION = IT.sizeAttenuation ?? !1, iT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === IT.colorDistributionType, iT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (oT ?? TT.pC()).useRightHandedSystem, iT.GREASED_LINE_CAMERA_FACING = IT.cameraFacing ?? !0, super(TT, Ri.GREASED_LINE_MATERIAL_NAME, 200, iT, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = IT?.forceGLSL || Ri.ForceGLSL, this._scene = oT ?? TT.pC(), this._engine = this._scene.Zc(), this._cameraFacing = IT.cameraFacing ?? !0, this.visibility = IT.visibility ?? 1, this.useDash = IT.useDash ?? !1, this.dashRatio = IT.dashRatio ?? .5, this.dashOffset = IT.dashOffset ?? 0, this.width = IT.width ? IT.width : IT.sizeAttenuation ? Mi.DEFAULT_WIDTH_ATTENUATED : Mi.DEFAULT_WIDTH, this._sizeAttenuation = IT.sizeAttenuation ?? !1, this.colorMode = IT.colorMode ?? 0, this._color = IT.color ?? null, this.useColors = IT.useColors ?? !1, this._colorsDistributionType = IT.colorDistributionType ?? 0, this.colorsSampling = IT.colorsSampling ?? mT.e.NEAREST_NEAREST, this._colors = IT.colors ?? null, this.dashCount = IT.dashCount ?? 1, this.resolution = IT.resolution ?? new HT.j(this._engine.getRenderWidth(), this._engine.getRenderHeight()), IT.colorsTexture ? this.colorsTexture = IT.colorsTexture : this._colors ? this.colorsTexture = mi.CreateColorsTexture(`${TT.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Mi.DEFAULT_COLOR, mi.PrepareEmptyColorsTexture(this._scene)), this._engine.bC.add((() => {
          mi.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(TT) {
        TT.push("grl_offsets"), TT.push("grl_widths"), TT.push("grl_colorPointers"), TT.push("grl_counters"), this._cameraFacing ? (TT.push("grl_previousAndSide"), TT.push("grl_nextAndCounters")) : TT.push("grl_slopes")
      }
      getSamplers(TT) {
        TT.push("grl_colors")
      }
      getActiveTextures(TT) {
        this.colorsTexture && TT.push(this.colorsTexture)
      }
      getUniforms() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const oT = [{
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
        return this._cameraFacing && oT.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === TT && oT.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: oT,
          vertex: this._cameraFacing && this._isGLSL(TT) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(TT) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(TT) {
        if (this._cameraFacing) {
          TT.Y1("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || TT.Y1("viewProjection", this._scene.getTransformMatrix());
          const oT = HT.i.Vector4[0];
          oT.x = this._aspect, oT.y = this._resolution.x, oT.z = this._resolution.y, oT.w = this.width, TT.updateVector4("grl_aspect_resolution_lineWidth", oT)
        }
        const oT = HT.i.Vector4[0];
        oT.x = mi.BooleanToNumber(this.useDash), oT.y = this._dashArray, oT.z = this.dashOffset, oT.w = this.dashRatio, TT.updateVector4("grl_dashOptions", oT);
        const IT = HT.i.Vector4[1];
        IT.x = this.colorMode, IT.y = this.visibility, IT.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, IT.w = mi.BooleanToNumber(this.useColors), TT.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", IT), this._color && TT.updateColor3("grl_singleColor", this._color);
        const iT = this.colorsTexture ?? Mi.EmptyColorsTexture;
        TT.setTexture("grl_colors", iT), TT.updateFloat2("grl_textureSize", iT?.getSize().width ?? 1, iT?.getSize().height ?? 1)
      }
      prepareDefines(TT, oT, IT) {
        TT.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, TT.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, TT.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, TT.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = oT.useRightHandedSystem, TT.GREASED_LINE_CAMERA_FACING = this._cameraFacing, TT.GREASED_LINE_USE_OFFSETS = !!IT.offsets
      }
      getClassName() {
        return Ri.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(oT) ? function(TT, oT) {
          if ("vertex" === TT) {
            const TT = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return oT && (TT["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), TT
          }
          return "fragment" === TT ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(TT, this._cameraFacing) : function(TT, oT) {
          if ("vertex" === TT) {
            const TT = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return oT && (TT["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), TT
          }
          return "fragment" === TT ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(TT, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(TT) {
        this.setColors(TT)
      }
      setColors(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = this._colors?.length ?? 0;
        if (this._colors = TT, null !== TT && 0 !== TT.length) {
          if (!oT || IT)
            if (this.colorsTexture && iT === TT.length && !IT) {
              const oT = mi.Color3toRGBAUint8(TT);
              this.colorsTexture.update(oT)
            } else this.colorsTexture?.dispose(), this.colorsTexture = mi.CreateColorsTexture(`${this._material.name}-colors-texture`, TT, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(TT) {
        this._dashCount = TT, this._dashArray = 1 / TT
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(TT) {
        this._sizeAttenuation = TT, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(TT) {
        this.setColor(TT)
      }
      setColor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== TT || null !== this._color && null === TT ? (this._color = TT, oT || this.markAllDefinesAsDirty()) : this._color = TT
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(TT) {
        this._colorsDistributionType = TT, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(TT) {
        this._aspect = TT.x / TT.y, this._resolution = TT
      }
      serialize() {
        const TT = super.serialize(),
          oT = {
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
        return this._colors && (oT.colors = this._colors), this._color && (oT.color = this._color), TT.greasedLineMaterialOptions = oT, TT
      }
      parse(TT, oT, IT) {
        super.parse(TT, oT, IT);
        const iT = TT.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), iT.color && this.setColor(iT.color, !0), iT.colorDistributionType && (this.colorsDistributionType = iT.colorDistributionType), iT.colors && (this.colors = iT.colors), iT.colorsSampling && (this.colorsSampling = iT.colorsSampling), iT.colorMode && (this.colorMode = iT.colorMode), iT.useColors && (this.useColors = iT.useColors), iT.visibility && (this.visibility = iT.visibility), iT.useDash && (this.useDash = iT.useDash), iT.dashCount && (this.dashCount = iT.dashCount), iT.dashRatio && (this.dashRatio = iT.dashRatio), iT.dashOffset && (this.dashOffset = iT.dashOffset), iT.width && (this.width = iT.width), iT.sizeAttenuation && (this.sizeAttenuation = iT.sizeAttenuation), iT.resolution && (this.resolution = iT.resolution), this.colors ? this.colorsTexture = mi.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, oT) : mi.PrepareEmptyColorsTexture(oT), this.markAllDefinesAsDirty()
      }
      copyTo(TT) {
        const oT = TT;
        oT.colorsTexture?.dispose(), this._colors && (oT.colorsTexture = mi.CreateColorsTexture(`${oT._material.name}-colors-texture`, this._colors, oT.colorsSampling, this._scene)), oT.setColor(this.color, !0), oT.colorsDistributionType = this.colorsDistributionType, oT.colorsSampling = this.colorsSampling, oT.colorMode = this.colorMode, oT.useColors = this.useColors, oT.visibility = this.visibility, oT.useDash = this.useDash, oT.dashCount = this.dashCount, oT.dashRatio = this.dashRatio, oT.dashOffset = this.dashOffset, oT.width = this.width, oT.sizeAttenuation = this.sizeAttenuation, oT.resolution = this.resolution, oT.markAllDefinesAsDirty()
      }
      _isGLSL(TT) {
        return 0 === TT || this._forceGLSL
      }
    }
    Ri.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Ri.ForceGLSL = !1;
    var ui = IT(39192),
      vi = IT(39210),
      Ei = IT(37658),
      fi = IT(39262),
      Ci = IT(38599);
    class ji extends fi.r {
      constructor(TT, oT, iT) {
        const zT = oT.Zc(),
          kT = zT.isWebGPU && !(iT.forceGLSL || ji.ForceGLSL),
          WT = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        oT.useRightHandedSystem && WT.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const XT = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        iT.cameraFacing ? (WT.push("GREASED_LINE_CAMERA_FACING"), XT.push("grl_previousAndSide", "grl_nextAndCounters")) : (XT.push("grl_slopes"), XT.push("grl_counters"));
        const BT = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (kT || BT.push("world", "viewProjection", "view", "projection"), super(TT, oT, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: kT ? ["Scene", "Mesh"] : void 0,
            attributes: XT,
            uniforms: BT,
            samplers: kT ? [] : ["grlColors"],
            defines: WT,
            extraInitializationsAsync: async () => {
              kT ? await Promise.all([IT.e(324).then((() => IT(60747))), IT.e(383).then((() => IT(60755)))]) : await Promise.all([IT.e(317).then((() => IT(60758))), IT.e(384).then((() => IT(60763)))])
            },
            shaderLanguage: kT ? 1 : 0
          }), this._color = GT.e.White(), this._colorsDistributionType = 0, this._colorsTexture = null, iT = iT || {
            color: Mi.DEFAULT_COLOR
          }, this.visibility = iT.visibility ?? 1, this.useDash = iT.useDash ?? !1, this.dashRatio = iT.dashRatio ?? .5, this.dashOffset = iT.dashOffset ?? 0, this.dashCount = iT.dashCount ?? 1, this.width = iT.width ? iT.width : iT.sizeAttenuation && iT.cameraFacing ? Mi.DEFAULT_WIDTH_ATTENUATED : Mi.DEFAULT_WIDTH, this.sizeAttenuation = iT.sizeAttenuation ?? !1, this.color = iT.color ?? GT.e.White(), this.useColors = iT.useColors ?? !1, this.colorsDistributionType = iT.colorDistributionType ?? 0, this.colorsSampling = iT.colorsSampling ?? mT.e.NEAREST_NEAREST, this.colorMode = iT.colorMode ?? 0, this._colors = iT.colors ?? null, this._cameraFacing = iT.cameraFacing ?? !0, this.resolution = iT.resolution ?? new HT.j(zT.getRenderWidth(), zT.getRenderHeight()), iT.colorsTexture ? this.colorsTexture = iT.colorsTexture : this._colors ? this.colorsTexture = mi.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, oT) : (this._color = this._color ?? Mi.DEFAULT_COLOR, this.colorsTexture = mi.PrepareEmptyColorsTexture(oT)), kT) {
          const TT = new Ci.e;
          TT.setParameters(), TT.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", TT)
        }
        zT.bC.add((() => {
          mi.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Mi.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new HT.j(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(TT) {
        this.setColors(TT)
      }
      setColors(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const iT = this._colors?.length ?? 0;
        if (this._colors = TT, null !== TT && 0 !== TT.length) {
          if (!oT || IT)
            if (this._colorsTexture && iT === TT.length && !IT) {
              const oT = mi.Color3toRGBAUint8(TT);
              this._colorsTexture.update(oT)
            } else this._colorsTexture && this._colorsTexture !== Mi.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = mi.CreateColorsTexture(`${this.name}-colors-texture`, TT, this.colorsSampling, this.pC())
        } else {
          this._colorsTexture && this._colorsTexture !== Mi.EmptyColorsTexture && this._colorsTexture.dispose();
          const TT = this.pC();
          TT && (this.colorsTexture = mi.PrepareEmptyColorsTexture(TT))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(TT) {
        this._colorsTexture = TT, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(TT) {
        this._width = TT, this.setFloat("grlWidth", TT)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(TT) {
        this._useColors = TT, this.setFloat("grlUseColors", mi.BooleanToNumber(TT))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(TT) {
        this._colorsSampling = TT
      }
      get visibility() {
        return this._visibility
      }
      set visibility(TT) {
        this._visibility = TT, this.setFloat("grlVisibility", TT)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(TT) {
        this._useDash = TT, this.setFloat("grlUseDash", mi.BooleanToNumber(TT))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(TT) {
        this._dashOffset = TT, this.setFloat("grlDashOffset", TT)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(TT) {
        this._dashRatio = TT, this.setFloat("grlDashRatio", TT)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(TT) {
        this._dashCount = TT, this._dashArray = 1 / TT, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(TT) {
        this._sizeAttenuation = TT, this.setFloat("grlSizeAttenuation", mi.BooleanToNumber(TT))
      }
      get color() {
        return this._color
      }
      set color(TT) {
        this.setColor(TT)
      }
      setColor(TT) {
        TT = TT ?? Mi.DEFAULT_COLOR, this._color = TT, this.setColor3("grlColor", TT)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(TT) {
        this._colorsDistributionType = TT, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(TT) {
        this._colorMode = TT, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(TT) {
        this._resolution = TT, this.setVector2("grlResolution", TT), this.setFloat("grlAspect", TT.x / TT.y)
      }
      serialize() {
        const TT = super.serialize(),
          oT = {
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
        return this._colors && (oT.colors = this._colors), TT.greasedLineMaterialOptions = oT, TT
      }
      parse(TT, oT, IT) {
        const iT = TT.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), iT.color && (this.color = iT.color), iT.colorDistributionType && (this.colorsDistributionType = iT.colorDistributionType), iT.colorsSampling && (this.colorsSampling = iT.colorsSampling), iT.colorMode && (this.colorMode = iT.colorMode), iT.useColors && (this.useColors = iT.useColors), iT.visibility && (this.visibility = iT.visibility), iT.useDash && (this.useDash = iT.useDash), iT.dashCount && (this.dashCount = iT.dashCount), iT.dashRatio && (this.dashRatio = iT.dashRatio), iT.dashOffset && (this.dashOffset = iT.dashOffset), iT.width && (this.width = iT.width), iT.sizeAttenuation && (this.sizeAttenuation = iT.sizeAttenuation), iT.resolution && (this.resolution = iT.resolution), iT.colors ? this.colorsTexture = mi.CreateColorsTexture(`${this.name}-colors-texture`, iT.colors, this.colorsSampling, this.pC()) : this.colorsTexture = mi.PrepareEmptyColorsTexture(oT), this._cameraFacing = iT.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Ji, Ui, ai;
    ji.ForceGLSL = !1,
      function(TT) {
        TT[TT.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", TT[TT.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Ji || (Ji = {})),
      function(TT) {
        TT[TT.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", TT[TT.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", TT[TT.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Ui || (Ui = {})),
      function(TT) {
        TT[TT.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", TT[TT.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", TT[TT.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", TT[TT.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", TT[TT.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(ai || (ai = {}));
    class Yi extends ui.e {
      constructor(TT, oT, IT) {
        super(TT, oT, null, null, !1, !1), this.name = TT, this._options = IT, this._lazy = !1, this._updatable = !1, this._engine = oT.Zc(), this._lazy = IT.lazy ?? !1, this._updatable = IT.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = IT.colorPointers ?? [], this._widths = IT.widths ?? new Array(IT.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(TT) {
        let oT = 0;
        for (const iT of this._points) oT += iT.length;
        const IT = oT / 3 * 2 - this._widths.length;
        for (let iT = 0; iT < IT; iT++) this._widths.push(TT)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Gc && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(TT, oT) {
        for (const IT of TT) this._points.push(IT);
        this._lazy || this.setPoints(this._points, oT)
      }
      dispose(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(TT, oT)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(TT) {
        this._uvs = TT instanceof Float32Array ? TT : new Float32Array(TT), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(TT) {
        this.material instanceof ji && this.material.setDefine("GREASED_LINE_USE_OFFSETS", TT?.length > 0), this._offsets = TT, this._offsetsBuffer ? this._offsetsBuffer.update(TT) : this._createOffsetsBuffer(TT)
      }
      get widths() {
        return this._widths
      }
      set widths(TT) {
        this._widths = TT, this._lazy || this._widthsBuffer && this._widthsBuffer.update(TT)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(TT) {
        this._colorPointers = TT, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(TT)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof ji) return this.material;
        const TT = this.material?.pluginManager?.getPlugin(Ri.GREASED_LINE_MATERIAL_NAME);
        return TT || void 0
      }
      get points() {
        const TT = [];
        return Ei.d.DeepCopy(this._points, TT), TT
      }
      setPoints(TT, oT) {
        this._points = mi.ConvertPoints(TT, oT?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), oT?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, oT)
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
      serialize(TT) {
        super.serialize(TT), TT.type = this.getClassName(), TT.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = new vi.c;
        return oT.positions = this._vertexPositions, oT.indices = this._indices, oT.uvs = this._uvs, TT && (oT.normals = [], vi.c.ComputeNormals(this._vertexPositions, this._indices, oT.normals)), oT.applyToMesh(this, this._options.updatable), oT
      }
      _createOffsetsBuffer(TT) {
        const oT = this._scene.Zc(),
          IT = new nT.d(oT, TT, this._updatable, 3);
        this.setVerticesBuffer(IT.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = IT
      }
    }
    class Qi {
      constructor(TT, oT) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = TT, this.wasAddedByNoopNode = oT
      }
      getIndicesAccessor(TT, oT, IT, iT, zT) {
        return this._indicesAccessorMap.get(TT)?.get(oT)?.get(IT)?.get(iT)?.get(zT)
      }
      setIndicesAccessor(TT, oT, IT, iT, zT, kT) {
        let WT = this._indicesAccessorMap.get(TT);
        WT || (WT = new Map, this._indicesAccessorMap.set(TT, WT));
        let XT = WT.get(oT);
        XT || (XT = new Map, WT.set(oT, XT));
        let BT = XT.get(IT);
        BT || (BT = new Map, XT.set(IT, BT));
        let FT = BT.get(iT);
        FT || (FT = new Map, BT.set(iT, FT)), FT.set(zT, kT)
      }
      pushExportedNode(TT) {
        this._exportedNodes.has(TT) || this._exportedNodes.add(TT)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(TT) {
        return this._vertexBufferViewMap.get(TT)
      }
      setVertexBufferView(TT, oT) {
        this._vertexBufferViewMap.set(TT, oT)
      }
      setRemappedBufferView(TT, oT, IT) {
        this._remappedBufferView.set(TT, new Map), this._remappedBufferView.get(TT).set(oT, IT)
      }
      getRemappedBufferView(TT, oT) {
        return this._remappedBufferView.get(TT)?.get(oT)
      }
      getVertexAccessor(TT, oT, IT) {
        return this._vertexAccessorMap.get(TT)?.get(oT)?.get(IT)
      }
      setVertexAccessor(TT, oT, IT, iT) {
        let zT = this._vertexAccessorMap.get(TT);
        zT || (zT = new Map, this._vertexAccessorMap.set(TT, zT));
        let kT = zT.get(oT);
        kT || (kT = new Map, zT.set(oT, kT)), kT.set(IT, iT)
      }
      hasVertexColorAlpha(TT) {
        return this._vertexMapColorAlpha.get(TT) || !1
      }
      setHasVertexColorAlpha(TT, oT) {
        return this._vertexMapColorAlpha.set(TT, oT)
      }
      getMesh(TT) {
        return this._meshMap.get(TT)
      }
      setMesh(TT, oT) {
        this._meshMap.set(TT, oT)
      }
      bindMorphDataToMesh(TT, oT) {
        const IT = this._meshMorphTargetMap.get(TT) || [];
        this._meshMorphTargetMap.set(TT, IT), -1 === IT.indexOf(oT) && IT.push(oT)
      }
      getMorphTargetsFromMesh(TT) {
        return this._meshMorphTargetMap.get(TT)
      }
    }
    class Oi {
      _ApplyExtension(TT, oT, IT, iT) {
        if (IT >= oT.length) return Promise.resolve(TT);
        const zT = iT(oT[IT], TT);
        return zT ? zT.then((async TT => TT ? await this._ApplyExtension(TT, oT, IT + 1, iT) : null)) : this._ApplyExtension(TT, oT, IT + 1, iT)
      }
      _ApplyExtensions(TT, oT) {
        const IT = [];
        for (const iT of Oi._ExtensionNames) IT.push(this._extensions[iT]);
        return this._ApplyExtension(TT, IT, 0, oT)
      }
      _extensionsPostExportNodeAsync(TT, oT, IT, iT, zT) {
        return this._ApplyExtensions(oT, ((oT, kT) => oT.postExportNodeAsync && oT.postExportNodeAsync(TT, kT, IT, iT, zT, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(TT, oT, IT) {
        return this._ApplyExtensions(oT, ((oT, iT) => oT.postExportMaterialAsync && oT.postExportMaterialAsync(TT, iT, IT)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        return await Promise.all(Oi._ExtensionNames.map((async zT => {
          const kT = this._extensions[zT];
          if (kT.postExportMaterialAdditionalTexturesAsync) {
            const zT = await kT.postExportMaterialAdditionalTexturesAsync(TT, oT, IT);
            iT.push(...zT)
          }
        }))), iT
      }
      _extensionsPostExportTextures(TT, oT, IT) {
        for (const iT of Oi._ExtensionNames) {
          const zT = this._extensions[iT];
          zT.postExportTexture && zT.postExportTexture(TT, oT, IT)
        }
      }
      _extensionsPostExportMeshPrimitive(TT) {
        for (const oT of Oi._ExtensionNames) {
          const IT = this._extensions[oT];
          IT.postExportMeshPrimitive && IT.postExportMeshPrimitive(TT, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const TT of Oi._ExtensionNames) {
          const oT = this._extensions[TT];
          oT.preGenerateBinaryAsync && await oT.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(TT) {
        for (const oT of Oi._ExtensionNames) {
          const IT = this._extensions[oT];
          IT.enabled && TT(IT)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((TT => {
          var oT, IT, iT;
          TT.wasUsed && ((oT = this._glTF).extensionsUsed || (oT.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(TT.name) && this._glTF.extensionsUsed.push(TT.name), TT.required && ((IT = this._glTF).extensionsRequired || (IT.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(TT.name) && this._glTF.extensionsRequired.push(TT.name)), (iT = this._glTF).extensions || (iT.extensions = {}), TT.onExporting && TT.onExporting())
        }))
      }
      _loadExtensions() {
        for (const TT of Oi._ExtensionNames) {
          const oT = Oi._ExtensionFactories[TT](this);
          this._extensions[TT] = oT
        }
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KT.d.LastCreatedScene,
          oT = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${cT.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new JI(this), this._extensions = {}, this._bufferManager = new zi, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !TT) throw new Error("No scene available to export");
        this._babylonScene = TT, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: TT => TT?.nC?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...oT
        }, this._loadExtensions()
      }
      dispose() {
        for (const TT in this._extensions) {
          this._extensions[TT].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Oi.UnregisterExtension(TT) && zT.Tools.Warn(`Extension with the name ${TT} already exists`), Oi._ExtensionFactories[TT] = oT;
        const iT = IT ?? 0;
        Oi._ExtensionOrders[TT] = iT;
        let kT = Oi._ExtensionNames.length;
        for (let zT = 0; zT < Oi._ExtensionNames.length; zT++) {
          const TT = Oi._ExtensionNames[zT];
          if (iT < Oi._ExtensionOrders[TT]) {
            kT = zT;
            break
          }
        }
        Oi._ExtensionNames.splice(kT, 0, TT)
      }
      static UnregisterExtension(TT) {
        if (!Oi._ExtensionFactories[TT]) return !1;
        delete Oi._ExtensionFactories[TT], delete Oi._ExtensionOrders[TT];
        const oT = Oi._ExtensionNames.indexOf(TT);
        return -1 !== oT && Oi._ExtensionNames.splice(oT, 1), !0
      }
      _generateJSON(TT, oT, IT) {
        const iT = {
          byteLength: TT
        };
        return iT.byteLength && (this._glTF.buffers = [iT]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.NK = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (iT.uri = oT + ".bin"), IT ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(TT) {
        const oT = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const IT = this._generateJSON(oT.byteLength, TT, !0),
          iT = new Blob([oT], {
            type: "application/octet-stream"
          }),
          zT = TT + ".gltf",
          kT = TT + ".bin",
          WT = new FT;
        if (WT.files[zT] = IT, WT.files[kT] = iT, this._imageData)
          for (const XT in this._imageData) WT.files[XT] = this._imageData[XT];
        return WT
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(TT) {
        const oT = TT % 4;
        return 0 === oT ? oT : 4 - oT
      }
      async generateGLBAsync(TT) {
        this._shouldUseGlb = !0;
        const oT = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const IT = this._generateJSON(oT.byteLength),
          iT = TT + ".glb";
        let zT, kT = IT.length;
        if ("undefined" !== typeof TextEncoder) {
          zT = (new TextEncoder).encode(IT), kT = zT.length
        }
        const WT = this._getPadding(kT),
          XT = this._getPadding(oT.byteLength),
          BT = 28 + kT + WT + oT.byteLength + XT,
          ST = new Ii(BT);
        if (ST.writeUInt32(1179937895), ST.writeUInt32(2), ST.writeUInt32(BT), ST.writeUInt32(kT + WT), ST.writeUInt32(1313821514), zT) ST.writeTypedArray(zT);
        else {
          const TT = "_".charCodeAt(0);
          for (let oT = 0; oT < kT; ++oT) {
            const iT = IT.charCodeAt(oT);
            iT != IT.codePointAt(oT) ? ST.writeUInt8(TT) : ST.writeUInt8(iT)
          }
        }
        for (let FT = 0; FT < WT; ++FT) ST.writeUInt8(32);
        ST.writeUInt32(oT.byteLength + XT), ST.writeUInt32(5130562), ST.writeTypedArray(oT);
        for (let FT = 0; FT < XT; ++FT) ST.writeUInt8(0);
        const DT = new FT;
        return DT.files[iT] = new Blob([ST.getOutputData()], {
          type: "application/octet-stream"
        }), DT
      }
      _setNodeTransformation(TT, oT, IT) {
        if (oT.getPivotPoint().equalsWithEpsilon(HI, YI.d) || zT.Tools.Warn("Pivot points are not supported in the glTF serializer"), !oT.position.equalsWithEpsilon(HI, YI.d)) {
          const zT = iT.TmpVectors.sc[0].SIT(oT.position);
          IT && pI(zT), TT.translation = zT.bIT()
        }
        oT.ti.equalsWithEpsilon(qI, YI.d) || (TT.scale = oT.ti.bIT());
        const kT = oT.rotationQuaternion?.clone() || iT.Quaternion.FromEulerAngles(oT.rotation.x, oT.rotation.y, oT.rotation.z);
        kT.equalsWithEpsilon(nI, YI.d) || (IT && bI(kT), TT.rotation = kT.normalize().bIT())
      }
      _setCameraTransformation(TT, oT, IT) {
        const zT = iT.TmpVectors.sc[0],
          kT = iT.TmpVectors.Quaternion[0],
          WT = oT.getWorldMatrix();
        if (oT.parent) {
          const TT = oT.parent.getWorldMatrix().invertToRef(iT.TmpVectors.Matrix[0]);
          WT.multiplyToRef(TT, iT.TmpVectors.Matrix[1]).decompose(void 0, kT, zT)
        } else WT.decompose(void 0, kT, zT);
        zT.equalsWithEpsilon(HI, YI.d) || (IT && pI(zT), TT.translation = zT.bIT()), IT && bI(kT), this._babylonScene.useRightHandedSystem || yI(kT), kT.equalsWithEpsilon(nI, YI.d) || (TT.rotation = kT.bIT())
      }
      _listAvailableCameras() {
        for (const TT of this._babylonScene.cameras) {
          const oT = {
            type: TT.mode === ki.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (TT.name && (oT.name = TT.name), "perspective" === oT.type) oT.perspective = {
            aspectRatio: TT.Zc().getAspectRatio(TT),
            yfov: TT.fovMode === ki.c.FOVMODE_VERTICAL_FIXED ? TT.fov : TT.fov * TT.Zc().getAspectRatio(TT),
            znear: TT.minZ,
            zfar: TT.maxZ
          };
          else if ("orthographic" === oT.type) {
            const IT = TT.orthoLeft && TT.orthoRight ? .5 * (TT.orthoRight - TT.orthoLeft) : .5 * TT.Zc().getRenderWidth(),
              iT = TT.orthoBottom && TT.orthoTop ? .5 * (TT.orthoTop - TT.orthoBottom) : .5 * TT.Zc().getRenderHeight();
            oT.orthographic = {
              xmag: IT,
              ymag: iT,
              znear: TT.minZ,
              zfar: TT.maxZ
            }
          }
          this._camerasMap.set(TT, oT)
        }
      }
      _exportAndAssignCameras() {
        const TT = Array.from(this._camerasMap.values());
        for (const oT of TT) {
          const TT = this._nodesCameraMap.get(oT);
          if (void 0 !== TT) {
            this._cameras.push(oT);
            for (const oT of TT) oT.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const TT of this._babylonScene.skeletons) {
          if (TT.bones.length <= 0) continue;
          const oT = {
            joints: []
          };
          this._skinMap.set(TT, oT)
        }
      }
      _exportAndAssignSkeletons(TT) {
        for (const IT of this._babylonScene.skeletons) {
          if (IT.bones.length <= 0) continue;
          const kT = this._skinMap.get(IT);
          if (void 0 == kT) continue;
          const WT = {};
          let XT = -1;
          for (let TT = 0; TT < IT.bones.length; ++TT) {
            const oT = IT.bones[TT],
              iT = oT.getIndex() ?? TT; - 1 !== iT && (WT[iT] = oT, iT > XT && (XT = iT))
          }
          const BT = [];
          for (let IT = 0; IT <= XT; ++IT) {
            const XT = WT[IT],
              FT = XT.getTransformNode(),
              ST = FT ? this._nodeMap.get(FT) : void 0;
            if (void 0 === ST) {
              zT.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            kT.joints.push(ST);
            const DT = XT.getAbsoluteInverseBindMatrix().clone();
            TT.has(FT) && (oT = DT, QI.invertToRef(iT.TmpVectors.Matrix[0]).multiplyToRef(oT, oT).multiplyToRef(QI, oT)), BT.push(DT)
          }
          const FT = this._nodesSkinMap.get(kT);
          if (kT.joints.length > 0 && void 0 !== FT) {
            const TT = new Float32Array(16 * BT.length);
            BT.forEach(((oT, IT) => {
              TT.set(oT.m, 16 * IT)
            }));
            const oT = this._bufferManager.createBufferView(TT);
            this._accessors.push(this._bufferManager.createAccessor(oT, "MAT4", 5126, BT.length)), kT.inverseBindMatrices = this._accessors.length - 1, this._skins.push(kT);
            const IT = this._skins.length - 1;
            for (const iT of FT) iT.skin = IT
          }
        }
        var oT
      }
      async _exportSceneAsync() {
        const TT = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const oT = this._options.metadataSelector(this._babylonScene.metadata);
          oT && (TT.extras = oT)
        }
        const oT = new Array,
          IT = new Array,
          iT = new Array,
          zT = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let kT;
        if (zT && !this._options.includeCoordinateSystemConversionNodes)
          for (const FT of this._babylonScene.animationGroups)
            for (const TT of FT.targetedAnimations) {
              const oT = TT.target;
              oT instanceof DT.c && !oT.parent && (kT ?? (kT = new Set)).add(oT)
            }
        for (const FT of this._babylonScene.rootNodes) {
          const TT = FT.animations,
            WT = !!TT && TT.length > 0 || kT?.has(FT);
          zT && !this._options.includeCoordinateSystemConversionNodes && OI(FT, this._babylonScene.useRightHandedSystem) && !WT ? iT.push(...FT.getChildren()) : this._babylonScene.useRightHandedSystem ? oT.push(FT) : IT.push(FT)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const WT = new Qi(!0, !1);
        TT.nodes.push(...await this._exportNodesAsync(IT, WT));
        const XT = new Qi(!1, !1);
        TT.nodes.push(...await this._exportNodesAsync(oT, XT));
        const BT = new Qi(!1, !0);
        TT.nodes.push(...await this._exportNodesAsync(iT, BT)), TT.nodes.length && this._scenes.push(TT), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(WT.getNodesSet()), this._babylonScene.animationGroups.length && xi._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, WT.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(TT) {
        return this._nodeMap.get(TT)
      }
      _getAnimationIndex(TT) {
        return this._animationGroupMap.get(TT)
      }
      _getCameraIndex(TT) {
        const oT = this._camerasMap.get(TT);
        if (!oT) return;
        const IT = this._cameras.indexOf(oT);
        return IT >= 0 ? IT : void 0
      }
      _getMaterialIndex(TT) {
        return this._materialMap.get(TT)
      }
      _getRootIndex(TT, oT) {
        switch (TT) {
          case "nodes":
            return this._getNodeIndex(oT);
          case "animations":
            return this._getAnimationIndex(oT);
          case "cameras":
            return this._getCameraIndex(oT);
          case "materials":
            return this._getMaterialIndex(oT);
          case "meshes": {
            const TT = this._getNodeIndex(oT);
            return void 0 === TT ? void 0 : this._nodes[TT]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(oT)?.index;
          case "images": {
            const TT = this._materialExporter.getTextureInfo(oT)?.index;
            if (void 0 === TT) return;
            const IT = this._textures[TT];
            for (const oT of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const TT = IT?.extensions?.[oT]?.source;
              if ("number" === typeof TT) return TT
            }
            return IT?.source
          }
          case "samplers": {
            const TT = this._materialExporter.getTextureInfo(oT)?.index;
            return void 0 === TT ? void 0 : this._textures[TT]?.sampler
          }
          case "skins": {
            const TT = this._skinMap.get(oT),
              IT = TT ? this._skins.indexOf(TT) : -1;
            return IT >= 0 ? IT : void 0
          }
          case "scenes":
            return oT === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(TT, oT, IT) {
        const iT = this._nodes[TT];
        if (!iT) throw new Error(`Cannot write ${oT}: glTF node ${TT} does not exist.`);
        iT.extensions || (iT.extensions = {}), iT.extensions[oT] = IT
      }
      _shouldExportNode(TT) {
        let oT = this._shouldExportNodeMap.get(TT);
        return void 0 === oT && (oT = this._options.shouldExportNode(TT), this._shouldExportNodeMap.set(TT, oT)), oT
      }
      async _exportNodesAsync(TT, oT) {
        const IT = new Array;
        this._exportBuffers(TT, oT);
        for (const iT of TT) await this._exportNodeAsync(iT, IT, oT);
        return IT
      }
      _collectBuffers(TT, oT, IT, iT, zT) {
        if (this._shouldExportNode(TT) && TT instanceof LT.b && TT.geometry) {
          const kT = TT.geometry.getVertexBuffers();
          if (kT)
            for (const iT in kT) {
              if (!tI(iT)) continue;
              const WT = kT[iT];
              zT.setHasVertexColorAlpha(WT, TT.hasVertexAlpha);
              const XT = WT._buffer,
                BT = oT.get(XT) || [];
              oT.set(XT, BT), -1 === BT.indexOf(WT) && BT.push(WT);
              const FT = IT.get(WT) || [];
              IT.set(WT, FT), -1 === FT.indexOf(TT) && FT.push(TT)
            }
          const WT = TT.morphTargetManager;
          if (WT)
            for (let oT = 0; oT < WT.numTargets; oT++) {
              const IT = WT.getTarget(oT),
                zT = iT.get(IT) || [];
              iT.set(IT, zT), -1 === zT.indexOf(TT) && zT.push(TT)
            }
        }
        for (const kT of TT.getChildren()) this._collectBuffers(kT, oT, IT, iT, zT)
      }
      _exportBuffers(TT, oT) {
        const IT = new Map,
          iT = new Map,
          zT = new Map;
        for (const XT of TT) this._collectBuffers(XT, IT, iT, zT, oT);
        const kT = Array.from(IT.keys());
        for (const XT of kT) {
          const TT = XT.getData();
          if (!TT) throw new Error("Buffer data is not available");
          const zT = IT.get(XT);
          if (!zT) continue;
          const kT = zT[0].byteStride;
          if (zT.some((TT => TT.byteStride !== kT))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const WT = dI(TT).slice();
          for (const oT of zT) {
            const TT = iT.get(oT),
              {
                byteOffset: IT,
                byteStride: zT,
                componentCount: kT,
                type: XT,
                count: BT,
                normalized: FT,
                kind: DT
              } = lI(oT, TT);
            switch (DT) {
              case ST.d.NormalKind:
              case ST.d.TangentKind:
                (0, UI.g)(WT, IT, zT, kT, XT, BT, FT, (TT => {
                  const oT = Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2]);
                  if (oT > 0) {
                    const IT = 1 / oT;
                    TT[0] *= IT, TT[1] *= IT, TT[2] *= IT
                  }
                }));
                break;
              case ST.d.ColorKind: {
                const oT = TT.filter((TT => TT.material instanceof Xi.StandardMaterial || null == TT.material)).length;
                if (0 == oT) break;
                if (oT != TT.length) {
                  ET.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                XT == ST.d.UNSIGNED_BYTE && ET.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const iT = new MT.Color3,
                  DT = new MT.b,
                  LT = this._babylonScene.Zc().useExactSrgbConversions;
                (0, UI.g)(WT, IT, zT, kT, XT, BT, FT, (TT => {
                  3 === TT.length ? (iT.joT(TT, 0), iT.toLinearSpaceToRef(iT, LT), iT.toArray(TT, 0)) : (DT.joT(TT, 0), DT.toLinearSpaceToRef(DT, LT), DT.toArray(TT, 0))
                }))
              }
            }
          }
          if (oT.convertToRightHanded) {
            for (const TT of zT) {
              const oT = iT.get(TT),
                {
                  byteOffset: IT,
                  byteStride: zT,
                  componentCount: kT,
                  type: XT,
                  count: BT,
                  normalized: FT,
                  kind: DT
                } = lI(TT, oT);
              switch (DT) {
                case ST.d.PositionKind:
                case ST.d.NormalKind:
                case ST.d.TangentKind:
                  (0, UI.g)(WT, IT, zT, kT, XT, BT, FT, (TT => {
                    TT[0] = -TT[0]
                  }))
              }
            }
            oT.convertedToRightHandedBuffers.set(XT, WT)
          }
          const BT = this._bufferManager.createBufferView(WT, kT);
          oT.setVertexBufferView(XT, BT);
          const FT = new Map;
          for (const oT of zT) {
            const TT = iT.get(oT),
              {
                kind: IT,
                totalVertices: zT
              } = lI(oT, TT);
            switch (IT) {
              case ST.d.MatricesIndicesKind:
              case ST.d.MatricesIndicesExtraKind:
                if (oT.type == ST.d.FLOAT) {
                  const TT = oT.getFloatData(zT);
                  null !== TT && FT.set(oT, TT)
                }
            }
          }
          0 !== FT.size && ET.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const DT = Array.from(FT.keys());
          for (const IT of DT) {
            const TT = FT.get(IT);
            if (!TT) continue;
            const iT = TT.some((TT => TT >= 256)),
              zT = new(iT ? Uint16Array : Uint8Array)(TT.length);
            for (let oT = 0; oT < TT.length; oT++) zT[oT] = TT[oT];
            const kT = this._bufferManager.createBufferView(zT, 4 * (iT ? 2 : 1));
            oT.setRemappedBufferView(XT, IT, kT)
          }
        }
        const WT = Array.from(zT.keys());
        for (const XT of WT) {
          const TT = zT.get(XT);
          if (!TT) continue;
          const IT = ci(XT, TT[0], this._bufferManager, this._bufferViews, this._accessors, oT.convertToRightHanded);
          for (const iT of TT) oT.bindMorphDataToMesh(iT, IT)
        }
      }
      async _exportNodeAsync(TT, oT, IT) {
        let iT = this._nodeMap.get(TT);
        if (void 0 !== iT) return void(oT.includes(iT) || oT.push(iT));
        const zT = await this._createNodeAsync(TT, IT);
        if (zT) {
          iT = this._nodes.length, this._nodes.push(zT), this._nodeMap.set(TT, iT), IT.pushExportedNode(TT), oT.push(iT);
          const kT = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            WT = [];
          this._babylonScene.animationGroups.length || (xi._CreateMorphTargetAnimationFromMorphTargetAnimations(TT, kT, WT, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, IT.convertToRightHanded, this._options.shouldExportAnimation), TT.animations.length && xi._CreateNodeAnimationFromNodeAnimations(TT, kT, WT, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, IT.convertToRightHanded, this._options.shouldExportAnimation)), kT.channels.length && kT.samplers.length && this._animations.push(kT), WT.forEach((TT => {
            TT.channels.length && TT.samplers.length && this._animations.push(TT)
          }))
        }
        const kT = zT ? [] : oT;
        for (const WT of TT.getChildren()) await this._exportNodeAsync(WT, kT, IT);
        zT && kT.length && (zT.children = kT)
      }
      async _createNodeAsync(TT, oT) {
        if (!this._shouldExportNode(TT)) return null;
        const IT = {};
        if (TT.name && (IT.name = TT.name), TT.metadata) {
          const oT = this._options.metadataSelector(TT.metadata);
          oT && (IT.extras = oT)
        }
        if (TT instanceof DT.c && (this._setNodeTransformation(IT, TT, oT.convertToRightHanded), TT instanceof LT.b)) {
          const iT = TT instanceof xT.d ? TT.HiT : TT;
          if (iT.pR && iT.pR.length > 0 && (IT.mesh = await this._exportMeshAsync(iT, oT)), TT.skeleton) {
            const oT = this._skinMap.get(TT.skeleton);
            void 0 !== oT && (void 0 === this._nodesSkinMap.get(oT) && this._nodesSkinMap.set(oT, []), this._nodesSkinMap.get(oT)?.push(IT))
          }
        }
        if (TT instanceof aI.d) {
          const iT = this._camerasMap.get(TT);
          if (iT) {
            void 0 === this._nodesCameraMap.get(iT) && this._nodesCameraMap.set(iT, []), this._setCameraTransformation(IT, TT, oT.convertToRightHanded);
            const zT = TT.parent;
            if (null !== zT && PI(TT, zT)) {
              const TT = this._nodeMap.get(zT);
              if (void 0 !== TT) {
                const oT = this._nodes[TT];
                return NI(IT, oT), this._nodesCameraMap.get(iT)?.push(oT), null
              }
            }
            this._nodesCameraMap.get(iT)?.push(IT)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", IT, TT, this._nodeMap, oT.convertToRightHanded) ? IT : (ET.d.Warn(`Not exporting node ${TT.name}`), null)
      }
      _exportIndices(TT, oT, IT, iT, zT, WT, XT, BT, FT) {
        let ST = null;
        FT.mode = function(TT) {
          switch (TT) {
            case kT.c.TriangleFillMode:
              return 4;
            case kT.c.TriangleStripDrawMode:
              return 5;
            case kT.c.TriangleFanDrawMode:
              return 6;
            case kT.c.PointListDrawMode:
            case kT.c.PointFillMode:
              return 0;
            case kT.c.LineLoopDrawMode:
              return 2;
            case kT.c.LineListDrawMode:
              return 1;
            case kT.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${TT}`)
        }(WT);
        const DT = XT !== kT.c.CounterClockWiseSideOrientation && function(TT) {
          switch (TT) {
            case kT.c.TriangleFillMode:
            case kT.c.TriangleStripDrawMode:
            case kT.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(WT);
        if (DT) {
          if (WT === kT.c.TriangleStripDrawMode || WT === kT.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const XT = oT ? new Uint32Array(iT) : new Uint16Array(iT);
          if (TT)
            for (let oT = 0; oT + 2 < iT; oT += 3) XT[oT] = TT[IT + oT] + zT, XT[oT + 1] = TT[IT + oT + 2] + zT, XT[oT + 2] = TT[IT + oT + 1] + zT;
          else
            for (let TT = 0; TT + 2 < iT; TT += 3) XT[TT] = TT, XT[TT + 1] = TT + 2, XT[TT + 2] = TT + 1;
          ST = XT
        } else if (TT && 0 !== zT) {
          const kT = oT ? new Uint32Array(iT) : new Uint16Array(iT);
          for (let oT = 0; oT < iT; oT++) kT[oT] = TT[IT + oT] + zT;
          ST = kT
        } else TT && (ST = function(TT, oT, IT, iT) {
          let zT = TT;
          return 0 === oT && IT === TT.length || (zT = Array.isArray(TT) ? TT.slice(oT, oT + IT) : TT.subarray(oT, oT + IT)), zT instanceof Int32Array ? new Uint32Array(zT.buffer, zT.byteOffset, zT.length) : Array.isArray(zT) ? iT ? new Uint32Array(zT) : new Uint16Array(zT) : zT
        }(TT, IT, iT, oT));
        if (ST) {
          let kT = BT.getIndicesAccessor(TT, IT, iT, zT, DT);
          if (void 0 === kT) {
            const WT = this._bufferManager.createBufferView(ST),
              XT = oT ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(WT, "SCALAR", XT, iT, 0)), kT = this._accessors.length - 1, BT.setIndicesAccessor(TT, IT, iT, zT, DT, kT)
          }
          FT.indices = kT
        }
      }
      _exportVertexBuffer(TT, oT, IT, iT, zT, kT) {
        const WT = TT.getKind();
        if (!tI(WT)) return;
        if (WT.startsWith("uv") && !this._options.exportUnusedUVs && (!oT || !this._materialNeedsUVsSet.has(oT))) return;
        let XT = zT.getVertexAccessor(TT, IT, iT);
        if (void 0 === XT) {
          const oT = zT.convertedToRightHandedBuffers.get(TT._buffer) || TT._buffer.getData(),
            kT = WT === ST.d.PositionKind ? function(TT, oT, IT, iT) {
              const {
                byteOffset: zT,
                byteStride: kT,
                type: WT,
                normalized: XT
              } = oT, BT = oT.getSize(), FT = new Array(BT).fill(1 / 0), ST = new Array(BT).fill(-1 / 0);
              return (0, UI.g)(TT, zT + IT * kT, kT, BT, WT, iT * BT, XT, (TT => {
                for (let oT = 0; oT < BT; oT++) FT[oT] = Math.min(FT[oT], TT[oT]), ST[oT] = Math.max(ST[oT], TT[oT])
              })), {
                min: FT,
                max: ST
              }
            }(oT, TT, IT, iT) : void 0,
            BT = (WT === ST.d.MatricesIndicesKind || WT === ST.d.MatricesIndicesExtraKind) && TT.type === ST.d.FLOAT,
            FT = BT ? ST.d.UNSIGNED_BYTE : TT.type,
            DT = BT ? void 0 : TT.normalized,
            LT = BT ? zT.getRemappedBufferView(TT._buffer, TT) : zT.getVertexBufferView(TT._buffer),
            xT = TT.byteOffset + IT * TT.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(LT, function(TT, oT) {
            if (TT == ST.d.ColorKind) return oT ? "VEC4" : "VEC3";
            switch (TT) {
              case ST.d.PositionKind:
              case ST.d.NormalKind:
                return "VEC3";
              case ST.d.TangentKind:
              case ST.d.MatricesIndicesKind:
              case ST.d.MatricesIndicesExtraKind:
              case ST.d.MatricesWeightsKind:
              case ST.d.MatricesWeightsExtraKind:
                return "VEC4";
              case ST.d.UVKind:
              case ST.d.UV2Kind:
              case ST.d.UV3Kind:
              case ST.d.UV4Kind:
              case ST.d.UV5Kind:
              case ST.d.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${TT}`)
          }(WT, zT.hasVertexColorAlpha(TT)), FT, iT, xT, kT, DT)), XT = this._accessors.length - 1, zT.setVertexAccessor(TT, IT, iT, XT)
        }
        kT.attributes[function(TT) {
          switch (TT) {
            case ST.d.PositionKind:
              return "POSITION";
            case ST.d.NormalKind:
              return "NORMAL";
            case ST.d.TangentKind:
              return "TANGENT";
            case ST.d.ColorKind:
              return "COLOR_0";
            case ST.d.UVKind:
              return "TEXCOORD_0";
            case ST.d.UV2Kind:
              return "TEXCOORD_1";
            case ST.d.UV3Kind:
              return "TEXCOORD_2";
            case ST.d.UV4Kind:
              return "TEXCOORD_3";
            case ST.d.UV5Kind:
              return "TEXCOORD_4";
            case ST.d.UV6Kind:
              return "TEXCOORD_5";
            case ST.d.MatricesIndicesKind:
              return "JOINTS_0";
            case ST.d.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case ST.d.MatricesWeightsKind:
              return "WEIGHTS_0";
            case ST.d.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${TT}`)
        }(WT)] = XT
      }
      async _exportMaterialAsync(TT, oT, IT, iT) {
        let zT = this._materialMap.get(TT);
        if (void 0 === zT) {
          const iT = oT && Object.keys(oT).some((TT => TT.startsWith("uv")));
          if ((TT = TT instanceof Wi.b ? TT.i_[IT.materialIndex] : TT) instanceof mo) zT = await this._materialExporter.exportPBRMaterialAsync(TT, iT);
          else if (TT instanceof Xi.StandardMaterial) zT = await this._materialExporter.exportStandardMaterialAsync(TT, iT);
          else {
            if (!(TT instanceof TI)) return void ET.d.Warn(`Unsupported material '${TT.name}' with type ${TT.getClassName()}`);
            zT = await this._materialExporter.exportOpenPBRMaterialAsync(TT, iT)
          }
          this._materialMap.set(TT, zT)
        }
        iT.material = zT
      }
      async _exportMeshAsync(TT, oT) {
        let IT = oT.getMesh(TT);
        if (void 0 !== IT) return IT;
        const iT = {
          primitives: []
        };
        IT = this._meshes.length, this._meshes.push(iT), oT.setMesh(TT, IT);
        const zT = TT.isUnIndexed ? null : TT.hWT(),
          WT = TT.geometry?.getVertexBuffers(),
          XT = oT.getMorphTargetsFromMesh(TT),
          BT = TT instanceof Ki.e,
          FT = TT instanceof Yi,
          ST = TT.pR;
        if (WT && ST && ST.length > 0)
          for (const DT of ST) {
            const IT = {
                attributes: {}
              },
              ST = DT.bc() || this._babylonScene.defaultMaterial;
            if (FT) {
              const oT = {
                  name: ST.name
                },
                iT = TT,
                zT = MT.Color3.White(),
                kT = iT.material?.alpha ?? 1,
                WT = iT.greasedLineMaterial?.color ?? zT;
              (!WT.equalsWithEpsilon(zT, YI.d) || kT < 1) && (oT.pbrMetallicRoughness = {
                baseColorFactor: [...WT.bIT(), kT]
              }), this._materials.push(oT), IT.material = this._materials.length - 1
            } else if (BT) {
              const oT = {
                  name: ST.name
                },
                iT = TT;
              (!iT.color.equalsWithEpsilon(MT.Color3.White(), YI.d) || iT.alpha < 1) && (oT.pbrMetallicRoughness = {
                baseColorFactor: [...iT.color.bIT(), iT.alpha]
              }), this._materials.push(oT), IT.material = this._materials.length - 1
            } else await this._exportMaterialAsync(ST, WT, DT, IT);
            const LT = BT || FT ? kT.c.LineListDrawMode : TT.overrideRenderingFillMode ?? ST.fillMode;
            let xT = ST._getEffectiveOrientation(TT);
            oT.wasAddedByNoopNode && !TT.pC().useRightHandedSystem && (xT = xT === kT.c.ClockWiseSideOrientation ? kT.c.CounterClockWiseSideOrientation : kT.c.ClockWiseSideOrientation), this._exportIndices(zT, zT ? (0, UI.c)(zT, DT.indexCount, DT.indexStart, DT.verticesStart) : DT.verticesCount > 65535, zT ? DT.indexStart : DT.verticesStart, zT ? DT.indexCount : DT.verticesCount, -DT.verticesStart, LT, xT, oT, IT);
            for (const TT of Object.values(WT)) this._exportVertexBuffer(TT, ST, DT.verticesStart, DT.verticesCount, oT, IT);
            if (XT) {
              IT.targets = [];
              for (const TT of XT) IT.targets.push(TT.attributes)
            }
            iT.primitives.push(IT), this._extensionsPostExportMeshPrimitive(IT)
          }
        if (XT) {
          iT.weights = [], iT.extras || (iT.extras = {}), iT.extras.targetNames = [];
          for (const TT of XT) iT.weights.push(TT.influence), iT.extras.targetNames.push(TT.name)
        }
        return IT
      }
    }
    Oi._ExtensionNames = new Array, Oi._ExtensionFactories = {}, Oi._ExtensionOrders = {};
    class Hi {
      static async GLTFAsync(TT, oT, IT) {
        IT && IT.exportWithoutWaitingForScene || await TT.whenReadyAsync();
        const iT = new Oi(TT, IT),
          zT = await iT.generateGLTFAsync(oT.replace(/\.[^/.]+$/, ""));
        return iT.dispose(), zT
      }
      static async GLBAsync(TT, oT, IT) {
        IT && IT.exportWithoutWaitingForScene || await TT.whenReadyAsync();
        const iT = new Oi(TT, IT),
          zT = await iT.generateGLBAsync(oT.replace(/\.[^/.]+$/, ""));
        return iT.dispose(), zT
      }
    }
    const ni = "EXT_mesh_gpu_instancing";

    function qi(TT, oT) {
      const IT = new Float32Array(3 * oT);
      for (let iT = 0; iT < oT; iT++) IT[3 * iT + 0] = TT[4 * iT + 0], IT[3 * iT + 1] = TT[4 * iT + 1], IT[3 * iT + 2] = TT[4 * iT + 2];
      return IT
    }
    class Zi {
      constructor(TT) {
        this.name = ni, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(TT, oT, IT, iT, zT, kT) {
        return await new Promise((TT => {
          if (oT && IT instanceof ui.e && IT.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const TT = HT.m.Zero(),
              iT = HT.c.Identity(),
              WT = HT.m.One(),
              XT = IT.thinInstanceGetWorldMatrices(),
              BT = HT.i.sc[2],
              FT = HT.i.Quaternion[1],
              ST = HT.i.sc[3];
            let DT = !1,
              LT = !1,
              xT = !1;
            const cT = new Float32Array(3 * IT.W9),
              KT = new Float32Array(4 * IT.W9),
              MT = new Float32Array(3 * IT.W9);
            let rT = 0;
            for (const oT of XT) oT.decompose(ST, FT, BT), zT && (pI(BT), bI(FT)), cT.set(BT.bIT(), 3 * rT), KT.set(FT.normalize().bIT(), 4 * rT), MT.set(ST.bIT(), 3 * rT), DT = DT || !BT.equalsWithEpsilon(TT), LT = LT || !FT.equalsWithEpsilon(iT), xT = xT || !ST.equalsWithEpsilon(WT), rT++;
            const AT = {
              attributes: {}
            };
            DT && (AT.attributes.TRANSLATION = this._buildAccessor(cT, "VEC3", IT.W9, kT)), LT && (AT.attributes.ROTATION = this._buildAccessor(KT, "VEC4", IT.W9, kT)), xT && (AT.attributes.SCALE = this._buildAccessor(MT, "VEC3", IT.W9, kT));
            let gT = IT._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (gT) {
              const TT = IT.W9,
                oT = "VEC3";
              IT.hasVertexAlpha && gT.length === 4 * TT ? (this._instanceColorWarned || (ET.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), gT = qi(gT, TT)) : gT.length === 4 * TT && (gT = qi(gT, TT)), gT.length === 3 * TT && (AT.attributes._COLOR_0 = this._buildAccessor(gT, oT, TT, kT))
            }
            oT.extensions = oT.extensions || {}, oT.extensions[ni] = AT
          }
          TT(oT)
        }))
      }
      _buildAccessor(TT, oT, IT, iT) {
        const zT = iT.createBufferView(TT),
          kT = iT.createAccessor(zT, oT, 5126, IT);
        return this._exporter._accessors.push(kT), this._exporter._accessors.length - 1
      }
    }
    let li = !1;

    function si() {
      li || (li = !0, Oi.RegisterExtension(ni, (TT => new Zi(TT))))
    }
    IT(39273);
    si();
    var ti = IT(40663);

    function Gi(TT, oT, IT, iT) {
      const zT = TT;
      let kT = null,
        WT = null,
        XT = null,
        BT = null;
      const FT = {},
        ST = oT.find((TT => "POSITION" === TT.dracoName));
      if (!ST) throw new Error("Draco: Missing position attribute for encoding.");
      if (!IT) {
        const TT = ST.data.length / ST.size;
        IT = new(TT > 65535 ? Uint32Array : Uint16Array)(TT);
        for (let oT = 0; oT < TT; oT++) IT[oT] = oT
      }
      try {
        kT = new zT.Encoder, WT = new zT.MeshBuilder, XT = new zT.Mesh, WT.AddFacesToMesh(XT, IT.length / 3, IT);
        const TT = new Map([
          [Float32Array, (TT, oT, IT, iT, zT, kT) => TT.AddFloatAttribute(oT, IT, iT, zT, kT)],
          [Uint32Array, (TT, oT, IT, iT, zT, kT) => TT.AddUInt32Attribute(oT, IT, iT, zT, kT)],
          [Uint16Array, (TT, oT, IT, iT, zT, kT) => TT.AddUInt16Attribute(oT, IT, iT, zT, kT)],
          [Uint8Array, (TT, oT, IT, iT, zT, kT) => TT.AddUInt8Attribute(oT, IT, iT, zT, kT)],
          [Int32Array, (TT, oT, IT, iT, zT, kT) => TT.AddInt32Attribute(oT, IT, iT, zT, kT)],
          [Int16Array, (TT, oT, IT, iT, zT, kT) => TT.AddInt16Attribute(oT, IT, iT, zT, kT)],
          [Int8Array, (TT, oT, IT, iT, zT, kT) => TT.AddInt8Attribute(oT, IT, iT, zT, kT)]
        ]);
        for (const IT of oT) {
          IT.data instanceof Uint8ClampedArray && (IT.data = new Uint8Array(IT.data));
          const oT = TT.get(IT.data.constructor),
            BT = IT.data.length / IT.size;
          FT[IT.kind] = oT(WT, XT, zT[IT.dracoName], BT, IT.size, IT.data), iT.quantizationBits && iT.quantizationBits[IT.dracoName] && kT.SetAttributeQuantization(zT[IT.dracoName], iT.quantizationBits[IT.dracoName])
        }
        iT.method && kT.SetEncodingMethod(zT[iT.method]), void 0 !== iT.encodeSpeed && void 0 !== iT.decodeSpeed && kT.SetSpeedOptions(iT.encodeSpeed, iT.decodeSpeed), BT = new zT.DracoInt8Array;
        const ST = kT.EncodeMeshToDracoBuffer(XT, BT);
        if (ST <= 0) throw new Error("Draco: Failed to encode.");
        const DT = new Int8Array(ST);
        for (let oT = 0; oT < ST; oT++) DT[oT] = BT.GetValue(oT);
        return {
          data: DT,
          attributeIds: FT
        }
      } finally {
        XT && zT.destroy(XT), WT && zT.destroy(WT), kT && zT.destroy(kT), BT && zT.destroy(BT)
      }
    }

    function bi() {
      let TT;
      onmessage = oT => {
        const IT = oT.data;
        switch (IT.id) {
          case "init": {
            IT.url && importScripts(IT.url);
            const oT = IT.wasmBinary ? {
              wasmBinary: IT.wasmBinary
            } : {};
            TT = DracoEncoderModule(oT), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!TT) throw new Error("Draco: Encoder module is not available.");
            TT.then((TT => {
              const oT = Gi(TT, IT.attributes, IT.indices, IT.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: oT
              }, oT ? [oT.data.buffer] : void 0)
            })).catch((TT => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: TT.message
              })
            }))
        }
      }
    }
    class yi {
      constructor(TT) {
        if (TT.workerPool) return void(this._workerPoolPromise = Promise.resolve(TT.workerPool));
        const oT = TT.wasmBinary,
          IT = TT.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          iT = IT && "function" === typeof Worker && "function" === typeof URL,
          zT = iT || !TT.jsModule,
          kT = TT.wasmUrl && TT.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: zT ? Ro.i.GetBabylonScriptURL(TT.wasmUrl, !0) : "",
            wasmBinaryPromise: oT ? Promise.resolve(oT) : Ro.i.LoadFileAsync(Ro.i.GetBabylonScriptURL(TT.wasmBinaryUrl, !0))
          } : {
            url: zT ? Ro.i.GetBabylonScriptURL(TT.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        iT ? this._workerPoolPromise = kT.wasmBinaryPromise.then((TT => {
          const oT = this._getWorkerContent(),
            iT = URL.createObjectURL(new Blob([oT], {
              type: "application/javascript"
            }));
          return new ti.e(IT, (() => async function(TT, oT, IT) {
            return await new Promise(((iT, zT) => {
              const kT = oT => {
                  TT.removeEventListener("error", kT), TT.removeEventListener("message", WT), zT(oT)
                },
                WT = oT => {
                  "initDone" === oT.data.id && (TT.removeEventListener("error", kT), TT.removeEventListener("message", WT), iT(TT))
                };
              if (TT.addEventListener("error", kT), TT.addEventListener("message", WT), oT) {
                const iT = oT.slice(0);
                TT.postMessage({
                  id: "init",
                  url: IT,
                  wasmBinary: iT
                }, [iT])
              } else TT.postMessage({
                id: "init",
                url: IT
              })
            }))
          }(new Worker(iT), TT, kT.url)))
        })) : this._modulePromise = kT.wasmBinaryPromise.then((async oT => {
          if (!this._isModuleAvailable() && !TT.jsModule) {
            if (!kT.url) throw new Error("Draco codec module is not available");
            await Ro.i.LoadBabylonScriptAsync(kT.url)
          }
          return await this._createModuleAsync(oT, TT.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((TT => {
          TT.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Ni() {
      const TT = TT => !!TT && "object" === typeof TT;
      for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
      return IT.reduce(((oT, IT) => {
        const iT = Object.keys(IT);
        for (const zT of iT) {
          const iT = oT[zT],
            kT = IT[zT];
          Array.isArray(iT) && Array.isArray(kT) ? oT[zT] = iT.concat(kT) : TT(iT) && TT(kT) ? oT[zT] = Ni(iT, kT) : oT[zT] = kT
        }
        return oT
      }), {})
    }

    function Pi(TT) {
      return TT === nT.i.PositionKind ? "POSITION" : TT === nT.i.NormalKind ? "NORMAL" : TT === nT.i.ColorKind ? "COLOR" : TT.startsWith(nT.i.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const di = {
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
    class Vi extends yi {
      static get DefaultAvailable() {
        return !!((TT = Vi.DefaultConfiguration).wasmUrl && (TT.wasmBinary || TT.wasmBinaryUrl) && "object" === typeof WebAssembly || TT.fallbackUrl);
        var TT
      }
      static get Default() {
        return Vi._Default ?? (Vi._Default = new Vi), Vi._Default
      }
      static ResetDefault(TT) {
        Vi._Default && (TT || Vi._Default.dispose(), Vi._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(TT, oT) {
        return {
          module: await (oT || DracoEncoderModule)({
            wasmBinary: TT
          })
        }
      }
      _getWorkerContent() {
        return `${Gi}(${bi})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Vi.DefaultConfiguration)
      }
      async _encodeAsync(TT, oT, IT) {
        const iT = IT ? Ni(di, IT) : di;
        if (this._workerPoolPromise) {
          const IT = await this._workerPoolPromise;
          return await new Promise(((zT, kT) => {
            IT.push(((IT, WT) => {
              const XT = TT => {
                  IT.removeEventListener("error", XT), IT.removeEventListener("message", BT), kT(TT), WT()
                },
                BT = TT => {
                  "encodeMeshSuccess" === TT.data.id ? (IT.removeEventListener("error", XT), IT.removeEventListener("message", BT), zT(TT.data.encodedMeshData), WT()) : "encodeMeshError" === TT.data.id && (IT.removeEventListener("error", XT), IT.removeEventListener("message", BT), kT(new Error(TT.data.errorMessage)), WT())
                };
              IT.addEventListener("error", XT), IT.addEventListener("message", BT);
              const FT = [];
              for (const oT of TT) FT.push(oT.data.buffer);
              oT && FT.push(oT.buffer), IT.postMessage({
                id: "encodeMesh",
                attributes: TT,
                indices: oT,
                options: iT
              }, FT)
            }))
          }))
        }
        if (this._modulePromise) {
          return Gi((await this._modulePromise).module, TT, oT, iT)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(TT, oT) {
        if (0 == TT.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        TT instanceof ui.e && TT.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === oT?.method && (ET.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), oT.method = "MESH_SEQUENTIAL_ENCODING");
        const IT = function(TT) {
            let oT = TT.hWT(void 0, !0);
            return !oT || oT instanceof Uint32Array || oT instanceof Uint16Array || (oT = ((0, UI.c)(oT, oT.length) ? Uint32Array : Uint16Array).from(oT)), oT
          }(TT),
          iT = function(TT, oT) {
            const IT = [];
            for (const iT of TT.getVerticesDataKinds()) {
              if (oT?.includes(iT)) {
                if (iT === nT.i.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const zT = TT.getVertexBuffer(iT),
                kT = zT.getSize(),
                WT = (0, UI.o)(zT.getData(), kT, zT.type, zT.byteOffset, zT.byteStride, TT.getTotalVertices(), !0);
              IT.push({
                kind: iT,
                dracoName: Pi(iT),
                size: kT,
                data: WT
              })
            }
            return IT
          }(TT, oT?.excludedAttributes);
        return await this._encodeAsync(iT, IT, oT)
      }
    }
    Vi.DefaultConfiguration = {
      wasmUrl: `${Ro.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Ro.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Ro.i._DefaultCdnUrl}/draco_encoder.js`
    }, Vi._Default = null;
    const Tz = "KHR_draco_mesh_compression";
    class oz {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = Tz, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === TT.options.meshCompressionMethod && Vi.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(TT, oT, IT) {
        if (!this.enabled) return;
        if (4 !== TT.mode && 5 !== TT.mode) return void ET.d.Warn("Cannot compress primitive with mode " + TT.mode + ".");
        const iT = [],
          zT = [];
        let kT = null;
        if (void 0 !== TT.indices) {
          const WT = IT[TT.indices],
            XT = oT.getBufferView(WT);
          kT = oT.getData(XT).slice(), iT.push(XT), zT.push(WT)
        }
        const WT = [];
        for (const [ST, DT] of Object.entries(TT.attributes)) {
          const TT = IT[DT],
            kT = oT.getBufferView(TT),
            BT = sI(TT.type),
            FT = (0, UI.o)(oT.getData(kT), BT, TT.componentType, TT.byteOffset || 0, kT.byteStride || (0, UI.n)(TT.componentType) * BT, TT.count, !0);
          WT.push({
            kind: ST,
            dracoName: (XT = ST, "POSITION" === XT ? "POSITION" : "NORMAL" === XT ? "NORMAL" : XT.startsWith("COLOR") ? "COLOR" : XT.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: sI(TT.type),
            data: FT
          }), iT.push(kT), zT.push(TT)
        }
        var XT;
        const BT = {
            method: TT.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          FT = Vi.Default._encodeAsync(WT, kT, BT).then((IT => {
            const kT = {
                bufferView: -1,
                attributes: IT.attributeIds
              },
              WT = oT.createBufferView(IT.data);
            oT.setBufferView(kT, WT);
            for (const TT of iT) this._bufferViewsUsed.add(TT);
            for (const TT of zT) this._accessorsUsed.add(TT);
            TT.extensions || (TT.extensions = {}), TT.extensions[Tz] = kT
          })).catch((TT => {
            ET.d.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + TT.message)
          }));
        this._encodePromises.push(FT), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(TT) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((oT => {
          TT.getPropertiesWithBufferView(oT).every((TT => this._accessorsUsed.has(TT))) && TT.removeBufferView(oT)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Iz = !1;

    function iz() {
      Iz || (Iz = !0, Oi.RegisterExtension(Tz, (TT => new oz(TT))))
    }
    iz();
    var zz = IT(40395);
    const kz = "KHR_lights_punctual",
      Wz = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Xz = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      Bz = HT.m.Backward();
    class Fz {
      constructor(TT) {
        this.name = kz, this.enabled = !0, this.required = !1, this._exporter = TT
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[kz] = this._lights
      }
      async postExportNodeAsync(TT, oT, IT, iT, zT) {
        return await new Promise((kT => {
          if (!(IT instanceof Li.b)) return void kT(oT);
          const WT = IT.getTypeID() == Li.b.LIGHTTYPEID_POINTLIGHT ? "point" : IT.getTypeID() == Li.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : IT.getTypeID() == Li.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!WT || !(IT instanceof zz.b)) return ET.d.Warn(`${TT}: Light ${IT.name} is not supported in ${kz}`), void kT(oT);
          if (IT.falloffType !== Li.b.FALLOFF_GLTF && ET.d.Warn(`${TT}: Light falloff for ${IT.name} does not match the ${kz} specification!`), !IT.position.eWT(0, 0, 0)) {
            const TT = HT.i.sc[0].SIT(IT.position);
            zT && pI(TT), oT.translation = TT.bIT()
          }
          if ("point" !== WT) {
            const TT = IT.direction.normalizeToRef(HT.i.sc[0]);
            zT && pI(TT);
            const iT = HT.c.FromUnitVectorsToRef(Bz, TT, HT.i.Quaternion[0]);
            HT.c.IsIdentity(iT) || (oT.rotation = iT.bIT())
          }
          const XT = {
            type: WT,
            name: IT.name,
            color: IT.diffuse.bIT(),
            intensity: IT.intensity,
            range: IT.range
          };
          if (VI(XT, Wz), "spot" === WT) {
            const TT = IT;
            XT.spot = {
              innerConeAngle: TT.innerAngle / 2,
              outerConeAngle: TT.angle / 2
            }, VI(XT.spot, Xz)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(XT);
          const BT = {
              light: this._lights.lights.length - 1
            },
            FT = IT.parent;
          if (FT && PI(IT, FT)) {
            const TT = iT.get(FT);
            if (TT) {
              const IT = this._exporter._nodes[TT];
              return NI(oT, IT), IT.extensions || (IT.extensions = {}), IT.extensions[kz] = BT, void kT(null)
            }
          }
          oT.extensions || (oT.extensions = {}), oT.extensions[kz] = BT, kT(oT)
        }))
      }
    }
    let Sz = !1;

    function Dz() {
      Sz || (Sz = !0, Oi.RegisterExtension(kz, (TT => new Fz(TT))))
    }
    Dz();
    const Lz = "KHR_interactivity";
    class xz {
      constructor(TT) {
        this._exporter = TT, this.name = Lz, this.enabled = !!TT.options.khrInteractivity, this.required = TT.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var TT, oT, IT;
        const iT = this._exporter.options.khrInteractivity;
        if (!iT) return;
        const zT = iT.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: TT => this._exporter._getNodeIndex(TT),
          getAnimationIndex: TT => this._exporter._getAnimationIndex(TT),
          getCameraIndex: TT => this._exporter._getCameraIndex(TT),
          getMaterialIndex: TT => this._exporter._getMaterialIndex(TT),
          getRootIndex: (TT, oT) => this._exporter._getRootIndex(TT, oT),
          setNodeExtension: (TT, oT, IT) => this._exporter._setNodeExtension(TT, oT, IT)
        });
        this._exporter._glTF.extensions[Lz] = zT;
        for (const kT of iT.additionalExtensionsUsed)(TT = this._exporter._glTF).extensionsUsed || (TT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(kT) && this._exporter._glTF.extensionsUsed.push(kT);
        for (const kT of iT.additionalExtensionsRequired)(oT = this._exporter._glTF).extensionsUsed || (oT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(kT) && this._exporter._glTF.extensionsUsed.push(kT), (IT = this._exporter._glTF).extensionsRequired || (IT.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(kT) && this._exporter._glTF.extensionsRequired.push(kT)
      }
    }
    let cz = !1;

    function Kz() {
      cz || (cz = !0, Oi.RegisterExtension(Lz, (TT => new xz(TT)), 200))
    }
    Kz();
    const Mz = "EXT_lights_area",
      rz = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Az = {
        aspect: 1
      },
      gz = HT.m.Backward();
    class hz {
      constructor(TT) {
        this.name = Mz, this.enabled = !0, this.required = !1, this._exporter = TT
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Mz] = this._lights
      }
      async postExportNodeAsync(TT, oT, IT, iT, zT) {
        return await new Promise((kT => {
          if (!(IT instanceof Li.b)) return void kT(oT);
          const WT = IT.getTypeID() == Li.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!WT) return ET.d.Warn(`${TT}: Light ${IT.name} is not supported in ${Mz}`), void kT(oT);
          const XT = IT;
          if (XT.falloffType !== Li.b.FALLOFF_GLTF && ET.d.Warn(`${TT}: Light falloff for ${IT.name} does not match the ${Mz} specification!`), !XT.position.eWT(0, 0, 0)) {
            const TT = HT.i.sc[0].SIT(XT.position);
            zT && pI(TT), oT.translation = TT.bIT()
          }
          const BT = HT.m.Forward();
          zT && pI(BT);
          const FT = HT.c.FromUnitVectorsToRef(gz, BT, HT.i.Quaternion[0]);
          HT.c.IsIdentity(FT) || (oT.rotation = FT.bIT());
          const ST = {
            type: WT,
            name: XT.name,
            color: XT.diffuse.bIT(),
            intensity: XT.intensity,
            size: XT.height,
            rect: {
              aspect: XT.width / XT.height
            }
          };
          VI(ST, rz), ST.rect && VI(ST.rect, Az), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(ST);
          const DT = {
              light: this._lights.lights.length - 1
            },
            LT = IT.parent;
          if (LT && PI(XT, LT)) {
            const TT = iT.get(LT);
            if (TT) {
              const IT = this._exporter._nodes[TT];
              return NI(oT, IT), IT.extensions || (IT.extensions = {}), IT.extensions[Mz] = DT, void kT(null)
            }
          }
          oT.extensions || (oT.extensions = {}), oT.extensions[Mz] = DT, kT(oT)
        }))
      }
    }
    let wz = !1;

    function mz() {
      wz || (wz = !0, Oi.RegisterExtension(Mz, (TT => new hz(TT))))
    }
    mz();
    const ez = "KHR_materials_anisotropy";
    class Rz {
      constructor(TT) {
        this.name = ez, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof mo) {
          if (IT.anisotropy.isEnabled && !IT.anisotropy.legacy) return IT.anisotropy.texture && iT.push(IT.anisotropy.texture), iT
        } else if (IT instanceof TI && IT.specularRoughnessAnisotropy > 0) {
          const TT = function(TT) {
            const oT = TT.specularRoughnessAnisotropyTexture,
              IT = TT.geometryTangentTexture;
            return `${oT&&oT.getInternalTexture()?oT.getInternalTexture().uniqueId:"NoStrength"}_${IT&&IT.getInternalTexture()?IT.getInternalTexture().uniqueId:"NoTangent"}`
          }(IT);
          if (this._anisoTexturesMap[TT]) iT.push(this._anisoTexturesMap[TT]);
          else {
            const oT = await async function(TT) {
              const oT = TT.pC(),
                IT = TT.specularRoughnessAnisotropyTexture,
                iT = TT.geometryTangentTexture;
              return IT || iT ? await BI("AnisotropyTexture", DI(iT ? FI(iT, 0) : SI(1), iT ? FI(iT, 1) : SI(0), IT ? FI(IT, 0) : SI(1)), oT) : null
            }(IT);
            oT && (iT.push(oT), this._anisoTexturesMap[TT] = oT)
          }
          return iT
        }
        return []
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          var iT;
          if (IT instanceof mo) {
            if (!IT.anisotropy.isEnabled || IT.anisotropy.legacy) return void TT(oT);
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            const iT = this._exporter._materialExporter.getTextureInfo(IT.anisotropy.texture),
              zT = {
                anisotropyStrength: IT.anisotropy.intensity,
                anisotropyRotation: IT.anisotropy.angle,
                anisotropyTexture: iT ?? void 0
              };
            null !== zT.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[ez] = zT
          } else if (IT instanceof TI && IT.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            let zT = IT.specularRoughnessTexture;
            IT._useRoughnessFromMetallicTextureGreen && (zT = IT.baseMetalnessTexture);
            const kT = this._anisoTexturesMap[IT.id];
            if (!zT && !kT) {
              let iT = IT.specularRoughness,
                zT = IT.specularRoughnessAnisotropy;
              if (!IT._useGltfStyleAnisotropy) {
                const TT = function(TT, oT) {
                  const IT = TT * TT,
                    iT = IT * Math.sqrt(2 / (1 + (1 - oT) * (1 - oT))),
                    zT = (1 - oT) * iT;
                  return {
                    newBaseRoughness: Math.sqrt(zT),
                    newAnisotropyStrength: Math.min(Math.sqrt((iT - IT) / Math.max(1 - IT, 1e-4)), 1)
                  }
                }(IT.specularRoughness, IT.specularRoughnessAnisotropy);
                iT = TT.newBaseRoughness, zT = TT.newAnisotropyStrength
              }
              oT.pbrMetallicRoughness && (oT.pbrMetallicRoughness.roughnessFactor = iT);
              const kT = {
                anisotropyStrength: zT,
                anisotropyRotation: IT.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return oT.extensions[ez] = kT, TT(oT)
            }
            const WT = kT ? this._exporter._materialExporter.getTextureInfo(kT) : null,
              XT = {
                anisotropyStrength: IT.specularRoughnessAnisotropy,
                anisotropyRotation: IT.geometryTangentAngle,
                anisotropyTexture: WT || void 0,
                extensions: {}
              };
            IT._useGltfStyleAnisotropy || (oT.extensions.KHR_materials_openpbr = {}, (iT = this._exporter._glTF).extensionsUsed || (iT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[ez] = XT
          }
          TT(oT)
        }))
      }
    }
    let uz = !1;

    function vz() {
      uz || (uz = !0, Oi.RegisterExtension(ez, (TT => new Rz(TT))))
    }
    vz();
    const Ez = "KHR_materials_clearcoat";

    function fz(TT, oT) {
      const IT = new CT.g(oT.name, oT.pC());
      return IT._texture = TT, IT.coordinatesIndex = oT.coordinatesIndex, oT instanceof CT.g && (IT.uOffset = oT.uOffset, IT.vOffset = oT.vOffset, IT.uScale = oT.uScale, IT.vScale = oT.vScale, IT.wAng = oT.wAng), IT.wrapU = oT.wrapU, IT.wrapV = oT.wrapV, IT
    }
    class Cz {
      constructor(TT) {
        this.name = Ez, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
      }
      dispose() {
        for (const TT of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[TT].dispose()
        }
        this._mergedTexturesMap = {};
        for (const TT of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[TT].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof mo) {
          if (IT.clearCoat.isEnabled) return IT.clearCoat.texture && iT.push(IT.clearCoat.texture), !IT.clearCoat.useRoughnessFromMainTexture && IT.clearCoat.textureRoughness && iT.push(IT.clearCoat.textureRoughness), IT.clearCoat.bumpTexture && iT.push(IT.clearCoat.bumpTexture), iT
        } else if (IT instanceof TI && IT.coatWeight > 0) {
          let TT = !1;
          if (IT.coatWeightTexture ? IT.coatRoughnessTexture ? IT._useCoatRoughnessFromGreenChannel && IT.coatWeightTexture.getInternalTexture() === IT.coatRoughnessTexture.getInternalTexture() ? (iT.push(IT.coatWeightTexture), iT.push(IT.coatRoughnessTexture)) : TT = !0 : iT.push(IT.coatWeightTexture) : IT.coatRoughnessTexture && (IT._useCoatRoughnessFromGreenChannel ? iT.push(IT.coatRoughnessTexture) : TT = !0), TT) {
            const TT = function(TT) {
              const oT = TT.coatWeightTexture,
                IT = oT && oT.getInternalTexture() ? oT.getInternalTexture().uniqueId : "NoCoat",
                iT = TT.coatRoughnessTexture;
              return `${IT}_${iT&&iT.getInternalTexture()?iT.getInternalTexture().uniqueId:"NoRoughness"}`
            }(IT);
            if (!this._cachedInternalTexturesMap[TT]) {
              const oT = await async function(TT) {
                const oT = TT.pC(),
                  IT = TT.coatWeightTexture,
                  iT = TT.coatRoughnessTexture;
                return IT || iT ? (await BI("CoatTexture", DI(IT ? FI(IT, 0) : SI(1), iT ? FI(iT, TT._useCoatRoughnessFromGreenChannel ? 1 : 0) : SI(1)), oT)).getInternalTexture() : null
              }(IT);
              oT && (this._cachedInternalTexturesMap[TT] = oT)
            }
            this._cachedInternalTexturesMap[TT] && (IT.coatWeightTexture && (this._mergedTexturesMap[IT.coatWeightTexture.uniqueId] = fz(this._cachedInternalTexturesMap[TT], IT.coatWeightTexture), iT.push(this._mergedTexturesMap[IT.coatWeightTexture.uniqueId])), IT.coatRoughnessTexture && (this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId] = fz(this._cachedInternalTexturesMap[TT], IT.coatRoughnessTexture), iT.push(this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId])))
          }
          return IT.geometryCoatNormalTexture && iT.push(IT.geometryCoatNormalTexture), iT
        }
        return []
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          if (IT instanceof mo) {
            if (!IT.clearCoat.isEnabled) return void TT(oT);
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            const iT = this._exporter._materialExporter.getTextureInfo(IT.clearCoat.texture);
            let zT;
            zT = IT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(IT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(IT.clearCoat.textureRoughness), IT.clearCoat.isTintEnabled && Ro.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${IT.name}`), IT.clearCoat.remapF0OnInterfaceChange && Ro.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${IT.name}`);
            const kT = this._exporter._materialExporter.getTextureInfo(IT.clearCoat.bumpTexture),
              WT = {
                clearcoatFactor: IT.clearCoat.intensity,
                clearcoatTexture: iT ?? void 0,
                clearcoatRoughnessFactor: IT.clearCoat.roughness,
                clearcoatRoughnessTexture: zT ?? void 0,
                clearcoatNormalTexture: kT ?? void 0
              };
            null === WT.clearcoatTexture && null === WT.clearcoatRoughnessTexture && null === WT.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[Ez] = WT
          } else if (IT instanceof TI) {
            if (0 == IT.coatWeight) return void TT(oT);
            let iT, zT, kT, WT;
            this._wasUsed = !0, oT.extensions = oT.extensions || {}, IT.coatWeightTexture && (iT = this._mergedTexturesMap[IT.coatWeightTexture.uniqueId], zT = this._exporter._materialExporter.getTextureInfo(iT)), IT.coatRoughnessTexture && (kT = this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId], WT = this._exporter._materialExporter.getTextureInfo(kT)), IT.coatColorTexture && Ro.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${IT.name}`);
            const XT = this._exporter._materialExporter.getTextureInfo(IT.geometryCoatNormalTexture),
              BT = {
                clearcoatFactor: IT.coatWeight,
                clearcoatTexture: zT ?? void 0,
                clearcoatRoughnessFactor: IT.coatRoughness,
                clearcoatRoughnessTexture: WT ?? void 0,
                clearcoatNormalTexture: XT ?? void 0
              };
            null === BT.clearcoatTexture && null === BT.clearcoatRoughnessTexture && null === BT.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[Ez] = BT
          }
          TT(oT)
        }))
      }
    }
    let jz = !1;

    function Jz() {
      jz || (jz = !0, Oi.RegisterExtension(Ez, (TT => new Cz(TT))))
    }
    Jz();
    const Uz = "KHR_materials_coat";

    function az(TT) {
      const oT = TT.coatRoughnessAnisotropyTexture,
        IT = TT.geometryCoatTangentTexture;
      return `${oT&&oT.getInternalTexture()?oT.getInternalTexture().uniqueId:"NoStrength"}_${IT&&IT.getInternalTexture()?IT.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Yz(TT, oT) {
      const IT = new CT.g(oT.name, oT.pC());
      return IT._texture = TT, IT.coordinatesIndex = oT.coordinatesIndex, oT instanceof CT.g && (IT.uOffset = oT.uOffset, IT.vOffset = oT.vOffset, IT.uScale = oT.uScale, IT.vScale = oT.vScale, IT.wAng = oT.wAng), IT.wrapU = oT.wrapU, IT.wrapV = oT.wrapV, IT
    }
    class Qz {
      constructor(TT) {
        this.name = Uz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
      }
      dispose() {
        for (const TT of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[TT].dispose()
        }
        this._mergedTexturesMap = {};
        for (const TT of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[TT].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof mo) {
          if (IT.clearCoat.isEnabled) return IT.clearCoat.texture && iT.push(IT.clearCoat.texture), !IT.clearCoat.useRoughnessFromMainTexture && IT.clearCoat.textureRoughness && iT.push(IT.clearCoat.textureRoughness), IT.clearCoat.bumpTexture && iT.push(IT.clearCoat.bumpTexture), IT.clearCoat.tintTexture && iT.push(IT.clearCoat.tintTexture), iT
        } else if (IT instanceof TI && IT.coatWeight > 0) {
          let TT = !1;
          if (IT.coatWeightTexture ? IT.coatRoughnessTexture ? IT._useCoatRoughnessFromGreenChannel && IT.coatWeightTexture.getInternalTexture() === IT.coatRoughnessTexture.getInternalTexture() ? (iT.push(IT.coatWeightTexture), iT.push(IT.coatRoughnessTexture)) : TT = !0 : iT.push(IT.coatWeightTexture) : IT.coatRoughnessTexture && (IT._useCoatRoughnessFromGreenChannel ? iT.push(IT.coatRoughnessTexture) : TT = !0), TT) {
            const TT = function(TT) {
              const oT = TT.coatWeightTexture,
                IT = oT && oT.getInternalTexture() ? oT.getInternalTexture().uniqueId : "NoCoat",
                iT = TT.coatRoughnessTexture;
              return `${IT}_${iT&&iT.getInternalTexture()?iT.getInternalTexture().uniqueId:"NoRoughness"}`
            }(IT);
            if (!this._cachedInternalTexturesMap[TT]) {
              const oT = await async function(TT) {
                const oT = TT.pC(),
                  IT = TT.coatWeightTexture,
                  iT = TT.coatRoughnessTexture;
                return IT || iT ? (await BI("CoatTexture", DI(IT ? FI(IT, 0) : SI(1), iT ? FI(iT, TT._useCoatRoughnessFromGreenChannel ? 1 : 0) : SI(1)), oT)).getInternalTexture() : null
              }(IT);
              oT && (this._cachedInternalTexturesMap[TT] = oT)
            }
            this._cachedInternalTexturesMap[TT] && (IT.coatWeightTexture && (this._mergedTexturesMap[IT.coatWeightTexture.uniqueId] = Yz(this._cachedInternalTexturesMap[TT], IT.coatWeightTexture), iT.push(this._mergedTexturesMap[IT.coatWeightTexture.uniqueId])), IT.coatRoughnessTexture && (this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId] = Yz(this._cachedInternalTexturesMap[TT], IT.coatRoughnessTexture), iT.push(this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId])))
          }
          if (IT.geometryCoatNormalTexture && iT.push(IT.geometryCoatNormalTexture), IT.coatColorTexture && iT.push(IT.coatColorTexture), IT.coatRoughnessAnisotropy > 0) {
            const TT = az(IT);
            if (this._mergedTexturesMap[TT]) iT.push(this._mergedTexturesMap[TT]);
            else {
              const oT = await async function(TT) {
                const oT = TT.pC(),
                  IT = TT.coatRoughnessAnisotropyTexture,
                  iT = TT.geometryCoatTangentTexture;
                return IT || iT ? await BI("AnisotropyTexture", DI(iT ? FI(iT, 0) : SI(1), iT ? FI(iT, 1) : SI(0), IT ? FI(IT, 0) : SI(1)), oT) : null
              }(IT);
              oT && (iT.push(oT), this._mergedTexturesMap[TT] = oT)
            }
            return iT
          }
          return iT
        }
        return []
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          var iT;
          if (IT instanceof mo) {
            if (!IT.clearCoat.isEnabled) return void TT(oT);
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            const iT = this._exporter._materialExporter.getTextureInfo(IT.clearCoat.texture);
            let zT, kT;
            zT = IT.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(IT.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(IT.clearCoat.textureRoughness), IT.clearCoat.isTintEnabled && (kT = this._exporter._materialExporter.getTextureInfo(IT.clearCoat.tintTexture));
            const WT = this._exporter._materialExporter.getTextureInfo(IT.clearCoat.bumpTexture),
              XT = IT.clearCoat.indexOfRefraction,
              BT = {
                coatFactor: IT.clearCoat.intensity,
                coatTexture: iT ?? void 0,
                coatRoughnessFactor: IT.clearCoat.roughness,
                coatRoughnessTexture: zT ?? void 0,
                coatNormalTexture: WT ?? void 0,
                coatColorFactor: IT.clearCoat.tintColor.bIT(),
                coatColorTexture: kT ?? void 0,
                coatIor: 1.5 !== XT ? XT : void 0
              };
            null === BT.coatTexture && null === BT.coatRoughnessTexture && null === BT.coatRoughnessTexture && null === BT.coatColorTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[Uz] = BT
          } else if (IT instanceof TI) {
            if (0 == IT.coatWeight) return void TT(oT);
            let zT, kT, WT, XT;
            this._wasUsed = !0, oT.extensions = oT.extensions || {}, IT.coatWeightTexture && (zT = this._mergedTexturesMap[IT.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[IT.coatWeightTexture.uniqueId] : IT.coatWeightTexture, kT = this._exporter._materialExporter.getTextureInfo(zT)), IT.coatRoughnessTexture && (WT = this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[IT.coatRoughnessTexture.uniqueId] : IT.coatRoughnessTexture, XT = this._exporter._materialExporter.getTextureInfo(WT));
            const BT = this._exporter._materialExporter.getTextureInfo(IT.geometryCoatNormalTexture),
              FT = this._exporter._materialExporter.getTextureInfo(IT.coatColorTexture),
              ST = IT.coatIor,
              DT = IT.coatDarkening,
              LT = IT.coatRoughnessTexture,
              xT = az(IT),
              cT = this._mergedTexturesMap[xT];
            let KT, MT = 0,
              rT = 0;
            if (IT.coatRoughnessAnisotropy > 0) {
              if (LT || cT) {
                const TT = cT ? this._exporter._materialExporter.getTextureInfo(cT) : null;
                MT = IT.coatRoughnessAnisotropy, rT = IT.geometryCoatTangentAngle, KT = TT || void 0
              } else {
                let TT = IT.coatRoughness,
                  iT = IT.coatRoughnessAnisotropy;
                if (!IT._useGltfStyleAnisotropy) {
                  const oT = function(TT, oT) {
                    const IT = TT * TT,
                      iT = IT * Math.sqrt(2 / (1 + (1 - oT) * (1 - oT))),
                      zT = (1 - oT) * iT;
                    return {
                      newBaseRoughness: Math.sqrt(zT),
                      newAnisotropyStrength: Math.min(Math.sqrt((iT - IT) / Math.max(1 - IT, 1e-4)), 1)
                    }
                  }(IT.coatRoughness, IT.coatRoughnessAnisotropy);
                  TT = oT.newBaseRoughness, iT = oT.newAnisotropyStrength
                }
                oT.pbrMetallicRoughness && (oT.pbrMetallicRoughness.roughnessFactor = TT), MT = iT, rT = IT.geometryCoatTangentAngle + .5 * Math.PI, KT = void 0
              }
              IT._useGltfStyleAnisotropy || (oT.extensions.KHR_materials_openpbr = {}, (iT = this._exporter._glTF).extensionsUsed || (iT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const AT = {
              coatFactor: IT.coatWeight,
              coatTexture: kT ?? void 0,
              coatRoughnessFactor: IT.coatRoughness,
              coatRoughnessTexture: XT ?? void 0,
              coatNormalTexture: BT ?? void 0,
              coatColorFactor: IT.coatColor.bIT(),
              coatColorTexture: FT ?? void 0,
              coatIor: 1.5 !== ST ? ST : void 0,
              coatDarkeningFactor: 1 !== DT ? DT : void 0,
              coatAnisotropyRotation: rT,
              coatAnisotropyStrength: MT,
              coatAnisotropyTexture: KT
            };
            null === AT.coatTexture && null === AT.coatRoughnessTexture && null === AT.coatRoughnessTexture && null === AT.coatAnisotropyTexture && null === AT.coatColorTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[Uz] = AT
          }
          TT(oT)
        }))
      }
    }
    let Oz = !1;

    function Hz() {
      Oz || (Oz = !0, Oi.RegisterExtension(Uz, (TT => new Qz(TT))))
    }
    Hz();
    let nz = (() => {
      var TT, oT, IT, iT, zT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT, ET, fT, CT, jT, JT, UT, YT, QT, OT, HT, nT, qT, ZT, lT, sT, tT, pT, bT, yT, NT, PT, dT, VT, To, oo, Io, io, zo, ko, Wo, Xo, Bo, Fo, So, Do, Lo, xo, co, Ko, Mo, ro, Ao, go;
      let ho, wo, Ro, uo, vo, Eo, fo, Co, jo, Jo, Uo, ao, Yo, Qo, Oo, Ho, no, qo, Zo, so, to, Go, po, bo, yo, No, Po, Vo, TI, oI, II, iI, zI, kI, WI, XI, BI, FI, SI, DI, LI, xI, cI, KI, MI, rI, AI, gI, hI, wI, mI, eI, RI, uI, vI, EI, fI, CI, jI, JI, UI, aI, YI, QI, OI, HI, nI, qI, ZI = mo,
        lI = [],
        sI = [],
        tI = [],
        GI = [],
        pI = [],
        bI = [],
        yI = [],
        NI = [],
        PI = [],
        dI = [],
        VI = [],
        Ti = [],
        oi = [],
        Ii = [],
        ii = [],
        zi = [],
        ki = [],
        Wi = [],
        Xi = [],
        Bi = [],
        Fi = [],
        Si = [],
        Di = [],
        Li = [],
        xi = [],
        ci = [],
        Ki = [],
        Mi = [],
        ri = [],
        Ai = [],
        gi = [],
        wi = [],
        mi = [],
        ei = [],
        Ri = [],
        ui = [],
        vi = [],
        Ei = [],
        fi = [],
        Ci = [],
        ji = [],
        Ji = [],
        Ui = [],
        ai = [],
        Yi = [],
        Qi = [],
        Oi = [],
        Hi = [],
        ni = [],
        qi = [],
        Zi = [],
        li = [],
        si = [],
        ti = [],
        Gi = [],
        bi = [],
        yi = [],
        Ni = [],
        Pi = [],
        di = [],
        Vi = [],
        Tz = [],
        oz = [],
        Iz = [],
        iz = [],
        zz = [],
        kz = [],
        Wz = [],
        Xz = [],
        Bz = [],
        Fz = [],
        Sz = [],
        Dz = [],
        Lz = [],
        xz = [],
        cz = [],
        Kz = [],
        Mz = [],
        rz = [],
        Az = [],
        gz = [],
        hz = [],
        wz = [],
        mz = [],
        ez = [],
        Rz = [],
        uz = [],
        vz = [],
        Ez = [],
        fz = [],
        Cz = [],
        jz = [],
        Jz = [],
        Uz = [],
        az = [],
        Yz = [],
        Qz = [],
        Oz = [],
        Hz = [],
        nz = [],
        qz = [],
        Zz = [],
        lz = [],
        sz = [],
        tz = [],
        Gz = [],
        pz = [],
        bz = [],
        yz = [],
        Nz = [],
        Pz = [],
        dz = [],
        Vz = [],
        Tk = [],
        Ik = [],
        ik = [],
        zk = [],
        kk = [],
        Wk = [],
        Xk = [],
        Bk = [],
        Fk = [],
        Sk = [],
        Dk = [],
        Lk = [],
        xk = [],
        ck = [],
        Kk = [],
        Mk = [],
        rk = [],
        Ak = [],
        gk = [],
        hk = [];
      return TT = class extends ZI {
        get directIntensity() {
          return (0, uT.b)(this, oT, "f")
        }
        set directIntensity(TT) {
          (0, uT.e)(this, oT, TT, "f")
        }
        get emissiveIntensity() {
          return (0, uT.b)(this, IT, "f")
        }
        set emissiveIntensity(TT) {
          (0, uT.e)(this, IT, TT, "f")
        }
        get environmentIntensity() {
          return (0, uT.b)(this, iT, "f")
        }
        set environmentIntensity(TT) {
          (0, uT.e)(this, iT, TT, "f")
        }
        get specularIntensity() {
          return (0, uT.b)(this, zT, "f")
        }
        set specularIntensity(TT) {
          (0, uT.e)(this, zT, TT, "f")
        }
        get disableBumpMap() {
          return (0, uT.b)(this, WT, "f")
        }
        set disableBumpMap(TT) {
          (0, uT.e)(this, WT, TT, "f")
        }
        get albedoTexture() {
          return (0, uT.b)(this, XT, "f")
        }
        set albedoTexture(TT) {
          (0, uT.e)(this, XT, TT, "f")
        }
        get baseWeightTexture() {
          return (0, uT.b)(this, BT, "f")
        }
        set baseWeightTexture(TT) {
          (0, uT.e)(this, BT, TT, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, uT.b)(this, FT, "f")
        }
        set baseDiffuseRoughnessTexture(TT) {
          (0, uT.e)(this, FT, TT, "f")
        }
        get ambientTexture() {
          return (0, uT.b)(this, ST, "f")
        }
        set ambientTexture(TT) {
          (0, uT.e)(this, ST, TT, "f")
        }
        get ambientTextureStrength() {
          return (0, uT.b)(this, DT, "f")
        }
        set ambientTextureStrength(TT) {
          (0, uT.e)(this, DT, TT, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, uT.b)(this, LT, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(TT) {
          (0, uT.e)(this, LT, TT, "f")
        }
        get opacityTexture() {
          return (0, uT.b)(this, xT, "f")
        }
        set opacityTexture(TT) {
          (0, uT.e)(this, xT, TT, "f")
        }
        get reflectionTexture() {
          return (0, uT.b)(this, cT, "f")
        }
        set reflectionTexture(TT) {
          (0, uT.e)(this, cT, TT, "f")
        }
        get emissiveTexture() {
          return (0, uT.b)(this, KT, "f")
        }
        set emissiveTexture(TT) {
          (0, uT.e)(this, KT, TT, "f")
        }
        get reflectivityTexture() {
          return (0, uT.b)(this, MT, "f")
        }
        set reflectivityTexture(TT) {
          (0, uT.e)(this, MT, TT, "f")
        }
        get metallicTexture() {
          return (0, uT.b)(this, rT, "f")
        }
        set metallicTexture(TT) {
          (0, uT.e)(this, rT, TT, "f")
        }
        get metallic() {
          return (0, uT.b)(this, AT, "f")
        }
        set metallic(TT) {
          (0, uT.e)(this, AT, TT, "f")
        }
        get roughness() {
          return (0, uT.b)(this, gT, "f")
        }
        set roughness(TT) {
          (0, uT.e)(this, gT, TT, "f")
        }
        get metallicF0Factor() {
          return (0, uT.b)(this, hT, "f")
        }
        set metallicF0Factor(TT) {
          (0, uT.e)(this, hT, TT, "f")
        }
        get metallicReflectanceColor() {
          return (0, uT.b)(this, wT, "f")
        }
        set metallicReflectanceColor(TT) {
          (0, uT.e)(this, wT, TT, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, uT.b)(this, mT, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(TT) {
          (0, uT.e)(this, mT, TT, "f")
        }
        get metallicReflectanceTexture() {
          return (0, uT.b)(this, eT, "f")
        }
        set metallicReflectanceTexture(TT) {
          (0, uT.e)(this, eT, TT, "f")
        }
        get reflectanceTexture() {
          return (0, uT.b)(this, RT, "f")
        }
        set reflectanceTexture(TT) {
          (0, uT.e)(this, RT, TT, "f")
        }
        get microSurfaceTexture() {
          return (0, uT.b)(this, ET, "f")
        }
        set microSurfaceTexture(TT) {
          (0, uT.e)(this, ET, TT, "f")
        }
        get bumpTexture() {
          return (0, uT.b)(this, fT, "f")
        }
        set bumpTexture(TT) {
          (0, uT.e)(this, fT, TT, "f")
        }
        get lightmapTexture() {
          return (0, uT.b)(this, CT, "f")
        }
        set lightmapTexture(TT) {
          (0, uT.e)(this, CT, TT, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(TT) {
          this.subSurface.refractionTexture = TT, TT ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, uT.b)(this, jT, "f")
        }
        set ambientColor(TT) {
          (0, uT.e)(this, jT, TT, "f")
        }
        get albedoColor() {
          return (0, uT.b)(this, JT, "f")
        }
        set albedoColor(TT) {
          (0, uT.e)(this, JT, TT, "f")
        }
        get baseWeight() {
          return (0, uT.b)(this, UT, "f")
        }
        set baseWeight(TT) {
          (0, uT.e)(this, UT, TT, "f")
        }
        get baseDiffuseRoughness() {
          return (0, uT.b)(this, YT, "f")
        }
        set baseDiffuseRoughness(TT) {
          (0, uT.e)(this, YT, TT, "f")
        }
        get reflectivityColor() {
          return (0, uT.b)(this, QT, "f")
        }
        set reflectivityColor(TT) {
          (0, uT.e)(this, QT, TT, "f")
        }
        get reflectionColor() {
          return (0, uT.b)(this, OT, "f")
        }
        set reflectionColor(TT) {
          (0, uT.e)(this, OT, TT, "f")
        }
        get emissiveColor() {
          return (0, uT.b)(this, HT, "f")
        }
        set emissiveColor(TT) {
          (0, uT.e)(this, HT, TT, "f")
        }
        get microSurface() {
          return (0, uT.b)(this, nT, "f")
        }
        set microSurface(TT) {
          (0, uT.e)(this, nT, TT, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(TT) {
          this.subSurface.indexOfRefraction = TT
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(TT) {
          this.subSurface.invertRefractionY = TT
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(TT) {
          this.subSurface.linkRefractionWithTransparency = TT, TT && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, uT.b)(this, qT, "f")
        }
        set useLightmapAsShadowmap(TT) {
          (0, uT.e)(this, qT, TT, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, uT.b)(this, ZT, "f")
        }
        set useAlphaFromAlbedoTexture(TT) {
          (0, uT.e)(this, ZT, TT, "f")
        }
        get forceAlphaTest() {
          return (0, uT.b)(this, lT, "f")
        }
        set forceAlphaTest(TT) {
          (0, uT.e)(this, lT, TT, "f")
        }
        get alphaCutOff() {
          return (0, uT.b)(this, sT, "f")
        }
        set alphaCutOff(TT) {
          (0, uT.e)(this, sT, TT, "f")
        }
        get useSpecularOverAlpha() {
          return (0, uT.b)(this, tT, "f")
        }
        set useSpecularOverAlpha(TT) {
          (0, uT.e)(this, tT, TT, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, uT.b)(this, pT, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(TT) {
          (0, uT.e)(this, pT, TT, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, uT.b)(this, bT, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(TT) {
          (0, uT.e)(this, bT, TT, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, uT.b)(this, yT, "f")
        }
        set useRoughnessFromMetallicTextureGreen(TT) {
          (0, uT.e)(this, yT, TT, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, uT.b)(this, NT, "f")
        }
        set useMetallnessFromMetallicTextureBlue(TT) {
          (0, uT.e)(this, NT, TT, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, uT.b)(this, PT, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(TT) {
          (0, uT.e)(this, PT, TT, "f")
        }
        get useAmbientInGrayScale() {
          return (0, uT.b)(this, dT, "f")
        }
        set useAmbientInGrayScale(TT) {
          (0, uT.e)(this, dT, TT, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, uT.b)(this, VT, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(TT) {
          (0, uT.e)(this, VT, TT, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === mo.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(TT) {
          TT !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? mo.LIGHTFALLOFF_PHYSICAL : mo.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === mo.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(TT) {
          TT !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = TT ? mo.LIGHTFALLOFF_GLTF : mo.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, uT.b)(this, To, "f")
        }
        set useRadianceOverAlpha(TT) {
          (0, uT.e)(this, To, TT, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, uT.b)(this, oo, "f")
        }
        set useObjectSpaceNormalMap(TT) {
          (0, uT.e)(this, oo, TT, "f")
        }
        get useParallax() {
          return (0, uT.b)(this, Io, "f")
        }
        set useParallax(TT) {
          (0, uT.e)(this, Io, TT, "f")
        }
        get useParallaxOcclusion() {
          return (0, uT.b)(this, io, "f")
        }
        set useParallaxOcclusion(TT) {
          (0, uT.e)(this, io, TT, "f")
        }
        get parallaxScaleBias() {
          return (0, uT.b)(this, zo, "f")
        }
        set parallaxScaleBias(TT) {
          (0, uT.e)(this, zo, TT, "f")
        }
        get disableLighting() {
          return (0, uT.b)(this, ko, "f")
        }
        set disableLighting(TT) {
          (0, uT.e)(this, ko, TT, "f")
        }
        get forceIrradianceInFragment() {
          return (0, uT.b)(this, Wo, "f")
        }
        set forceIrradianceInFragment(TT) {
          (0, uT.e)(this, Wo, TT, "f")
        }
        get maxSimultaneousLights() {
          return (0, uT.b)(this, Xo, "f")
        }
        set maxSimultaneousLights(TT) {
          (0, uT.e)(this, Xo, TT, "f")
        }
        get invertNormalMapX() {
          return (0, uT.b)(this, Bo, "f")
        }
        set invertNormalMapX(TT) {
          (0, uT.e)(this, Bo, TT, "f")
        }
        get invertNormalMapY() {
          return (0, uT.b)(this, Fo, "f")
        }
        set invertNormalMapY(TT) {
          (0, uT.e)(this, Fo, TT, "f")
        }
        get twoSidedLighting() {
          return (0, uT.b)(this, So, "f")
        }
        set twoSidedLighting(TT) {
          (0, uT.e)(this, So, TT, "f")
        }
        get useAlphaFresnel() {
          return (0, uT.b)(this, Do, "f")
        }
        set useAlphaFresnel(TT) {
          (0, uT.e)(this, Do, TT, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, uT.b)(this, Lo, "f")
        }
        set useLinearAlphaFresnel(TT) {
          (0, uT.e)(this, Lo, TT, "f")
        }
        get environmentBRDFTexture() {
          return (0, uT.b)(this, xo, "f")
        }
        set environmentBRDFTexture(TT) {
          (0, uT.e)(this, xo, TT, "f")
        }
        get forceNormalForward() {
          return (0, uT.b)(this, co, "f")
        }
        set forceNormalForward(TT) {
          (0, uT.e)(this, co, TT, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, uT.b)(this, Ko, "f")
        }
        set enableSpecularAntiAliasing(TT) {
          (0, uT.e)(this, Ko, TT, "f")
        }
        get useHorizonOcclusion() {
          return (0, uT.b)(this, Mo, "f")
        }
        set useHorizonOcclusion(TT) {
          (0, uT.e)(this, Mo, TT, "f")
        }
        get useRadianceOcclusion() {
          return (0, uT.b)(this, ro, "f")
        }
        set useRadianceOcclusion(TT) {
          (0, uT.e)(this, ro, TT, "f")
        }
        get unlit() {
          return (0, uT.b)(this, Ao, "f")
        }
        set unlit(TT) {
          (0, uT.e)(this, Ao, TT, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, uT.b)(this, go, "f")
        }
        set applyDecalMapAfterDetailMap(TT) {
          (0, uT.e)(this, go, TT, "f")
        }
        constructor(kT, vT) {
          super(kT, vT, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), oT.set(this, ((0, uT.j)(this, lI), (0, uT.j)(this, sI, 1))), IT.set(this, ((0, uT.j)(this, tI), (0, uT.j)(this, GI, 1))), iT.set(this, ((0, uT.j)(this, pI), (0, uT.j)(this, bI, 1))), zT.set(this, ((0, uT.j)(this, yI), (0, uT.j)(this, NI, 1))), WT.set(this, ((0, uT.j)(this, PI), (0, uT.j)(this, dI, !1))), XT.set(this, ((0, uT.j)(this, VI), (0, uT.j)(this, Ti, void 0))), BT.set(this, ((0, uT.j)(this, oi), (0, uT.j)(this, Ii, void 0))), FT.set(this, ((0, uT.j)(this, ii), (0, uT.j)(this, zi, void 0))), ST.set(this, ((0, uT.j)(this, ki), (0, uT.j)(this, Wi, void 0))), DT.set(this, ((0, uT.j)(this, Xi), (0, uT.j)(this, Bi, 1))), LT.set(this, ((0, uT.j)(this, Fi), (0, uT.j)(this, Si, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), xT.set(this, ((0, uT.j)(this, Di), (0, uT.j)(this, Li, void 0))), cT.set(this, ((0, uT.j)(this, xi), (0, uT.j)(this, ci, void 0))), KT.set(this, ((0, uT.j)(this, Ki), (0, uT.j)(this, Mi, void 0))), MT.set(this, ((0, uT.j)(this, ri), (0, uT.j)(this, Ai, void 0))), rT.set(this, ((0, uT.j)(this, gi), (0, uT.j)(this, wi, void 0))), AT.set(this, ((0, uT.j)(this, mi), (0, uT.j)(this, ei, void 0))), gT.set(this, ((0, uT.j)(this, Ri), (0, uT.j)(this, ui, void 0))), hT.set(this, ((0, uT.j)(this, vi), (0, uT.j)(this, Ei, 1))), wT.set(this, ((0, uT.j)(this, fi), (0, uT.j)(this, Ci, GT.e.White()))), mT.set(this, ((0, uT.j)(this, ji), (0, uT.j)(this, Ji, !1))), eT.set(this, ((0, uT.j)(this, Ui), (0, uT.j)(this, ai, void 0))), RT.set(this, ((0, uT.j)(this, Yi), (0, uT.j)(this, Qi, void 0))), ET.set(this, ((0, uT.j)(this, Oi), (0, uT.j)(this, Hi, void 0))), fT.set(this, ((0, uT.j)(this, ni), (0, uT.j)(this, qi, void 0))), CT.set(this, ((0, uT.j)(this, Zi), (0, uT.j)(this, li, void 0))), jT.set(this, ((0, uT.j)(this, si), (0, uT.j)(this, ti, new GT.e(0, 0, 0)))), JT.set(this, ((0, uT.j)(this, Gi), (0, uT.j)(this, bi, new GT.e(1, 1, 1)))), UT.set(this, ((0, uT.j)(this, yi), (0, uT.j)(this, Ni, 1))), YT.set(this, ((0, uT.j)(this, Pi), (0, uT.j)(this, di, void 0))), QT.set(this, ((0, uT.j)(this, Vi), (0, uT.j)(this, Tz, new GT.e(1, 1, 1)))), OT.set(this, ((0, uT.j)(this, oz), (0, uT.j)(this, Iz, new GT.e(1, 1, 1)))), HT.set(this, ((0, uT.j)(this, iz), (0, uT.j)(this, zz, new GT.e(0, 0, 0)))), nT.set(this, ((0, uT.j)(this, kz), (0, uT.j)(this, Wz, 1))), qT.set(this, ((0, uT.j)(this, Xz), (0, uT.j)(this, Bz, !1))), ZT.set(this, ((0, uT.j)(this, Fz), (0, uT.j)(this, Sz, !1))), lT.set(this, ((0, uT.j)(this, Dz), (0, uT.j)(this, Lz, !1))), sT.set(this, ((0, uT.j)(this, xz), (0, uT.j)(this, cz, .4))), tT.set(this, ((0, uT.j)(this, Kz), (0, uT.j)(this, Mz, !0))), pT.set(this, ((0, uT.j)(this, rz), (0, uT.j)(this, Az, !1))), bT.set(this, ((0, uT.j)(this, gz), (0, uT.j)(this, hz, !0))), yT.set(this, ((0, uT.j)(this, wz), (0, uT.j)(this, mz, !1))), NT.set(this, ((0, uT.j)(this, ez), (0, uT.j)(this, Rz, !1))), PT.set(this, ((0, uT.j)(this, uz), (0, uT.j)(this, vz, !1))), dT.set(this, ((0, uT.j)(this, Ez), (0, uT.j)(this, fz, !1))), VT.set(this, ((0, uT.j)(this, Cz), (0, uT.j)(this, jz, !1))), To.set(this, ((0, uT.j)(this, Jz), (0, uT.j)(this, Uz, !0))), oo.set(this, ((0, uT.j)(this, az), (0, uT.j)(this, Yz, !1))), Io.set(this, ((0, uT.j)(this, Qz), (0, uT.j)(this, Oz, !1))), io.set(this, ((0, uT.j)(this, Hz), (0, uT.j)(this, nz, !1))), zo.set(this, ((0, uT.j)(this, qz), (0, uT.j)(this, Zz, .05))), ko.set(this, ((0, uT.j)(this, lz), (0, uT.j)(this, sz, !1))), Wo.set(this, ((0, uT.j)(this, tz), (0, uT.j)(this, Gz, !1))), Xo.set(this, ((0, uT.j)(this, pz), (0, uT.j)(this, bz, 4))), Bo.set(this, ((0, uT.j)(this, yz), (0, uT.j)(this, Nz, !1))), Fo.set(this, ((0, uT.j)(this, Pz), (0, uT.j)(this, dz, !1))), So.set(this, ((0, uT.j)(this, Vz), (0, uT.j)(this, Tk, !1))), Do.set(this, ((0, uT.j)(this, Ik), (0, uT.j)(this, ik, !1))), Lo.set(this, ((0, uT.j)(this, zk), (0, uT.j)(this, kk, !1))), xo.set(this, ((0, uT.j)(this, Wk), (0, uT.j)(this, Xk, null))), co.set(this, ((0, uT.j)(this, Bk), (0, uT.j)(this, Fk, !1))), Ko.set(this, ((0, uT.j)(this, Sk), (0, uT.j)(this, Dk, !1))), Mo.set(this, ((0, uT.j)(this, Lk), (0, uT.j)(this, xk, !0))), ro.set(this, ((0, uT.j)(this, ck), (0, uT.j)(this, Kk, !0))), Ao.set(this, ((0, uT.j)(this, Mk), (0, uT.j)(this, rk, !1))), go.set(this, ((0, uT.j)(this, Ak), (0, uT.j)(this, gk, !1))), (0, uT.j)(this, hk), this._environmentBRDFTexture = aT(this.pC())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(oT) {
          let IT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const zT = eo.c.Clone((() => new TT(oT, this.pC())), this, {
            cloneTexturesOnlyOnce: IT
          });
          return zT.id = oT, zT.name = oT, this.stencil.copyTo(zT.stencil), this._clonePlugins(zT, iT), zT
        }
        serialize() {
          const TT = super.serialize();
          return TT.customType = "BABYLON.PBRMaterial", TT
        }
        static Parse(oT, IT, iT) {
          const zT = eo.c.Parse((() => new TT(oT.name, IT)), oT, IT, iT);
          return oT.stencil && zT.stencil.parse(oT.stencil, IT, iT), kT.c._ParsePlugins(oT, zT, IT, iT), oT.clearCoat && zT.clearCoat.parse(oT.clearCoat, IT, iT), oT.anisotropy && zT.anisotropy.parse(oT.anisotropy, IT, iT), oT.brdf && zT.brdf.parse(oT.brdf, IT, iT), oT.sheen && zT.sheen.parse(oT.sheen, IT, iT), oT.subSurface && zT.subSurface.parse(oT.subSurface, IT, iT), oT.iridescence && zT.iridescence.parse(oT.iridescence, IT, iT), zT
        }
      }, oT = new WeakMap, IT = new WeakMap, iT = new WeakMap, zT = new WeakMap, WT = new WeakMap, XT = new WeakMap, BT = new WeakMap, FT = new WeakMap, ST = new WeakMap, DT = new WeakMap, LT = new WeakMap, xT = new WeakMap, cT = new WeakMap, KT = new WeakMap, MT = new WeakMap, rT = new WeakMap, AT = new WeakMap, gT = new WeakMap, hT = new WeakMap, wT = new WeakMap, mT = new WeakMap, eT = new WeakMap, RT = new WeakMap, ET = new WeakMap, fT = new WeakMap, CT = new WeakMap, jT = new WeakMap, JT = new WeakMap, UT = new WeakMap, YT = new WeakMap, QT = new WeakMap, OT = new WeakMap, HT = new WeakMap, nT = new WeakMap, qT = new WeakMap, ZT = new WeakMap, lT = new WeakMap, sT = new WeakMap, tT = new WeakMap, pT = new WeakMap, bT = new WeakMap, yT = new WeakMap, NT = new WeakMap, PT = new WeakMap, dT = new WeakMap, VT = new WeakMap, To = new WeakMap, oo = new WeakMap, Io = new WeakMap, io = new WeakMap, zo = new WeakMap, ko = new WeakMap, Wo = new WeakMap, Xo = new WeakMap, Bo = new WeakMap, Fo = new WeakMap, So = new WeakMap, Do = new WeakMap, Lo = new WeakMap, xo = new WeakMap, co = new WeakMap, Ko = new WeakMap, Mo = new WeakMap, ro = new WeakMap, Ao = new WeakMap, go = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(ZI[Symbol.metadata] ?? null) : void 0;
        ho = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], wo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Ro = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], uo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], vo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Eo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], fo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Co = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], jo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Jo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Uo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], ao = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Yo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Qo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Oo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Ho = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], no = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], qo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Zo = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], so = [(0, vT.q)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], to = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Go = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], po = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], bo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], yo = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], No = [(0, vT.H)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty", null)], Po = [(0, vT.q)("ambient"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], Vo = [(0, vT.q)("albedo"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], TI = [(0, vT.P)("baseWeight"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], oI = [(0, vT.P)("baseDiffuseRoughness"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], II = [(0, vT.q)("reflectivity"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, vT.q)("reflection"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, vT.q)("emissive"), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], WI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], XI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], BI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], FI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], SI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], DI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], LI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], xI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], cI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], AI = [(0, vT.P)()], gI = [(0, vT.P)()], hI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], wI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], mI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], eI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], RI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsLightsDirty")], vI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], EI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsLightsDirty")], fI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], CI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], jI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], JI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], aI = [(0, vT.h)("_markAllSubMeshesAsTexturesDirty")], YI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], QI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], OI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsTexturesDirty")], nI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], qI = [(0, vT.P)(), (0, vT.h)("_markAllSubMeshesAsMiscDirty")], (0, uT.h)(TT, null, ho, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "directIntensity" in TT,
            get: TT => TT.directIntensity,
            set: (TT, oT) => {
              TT.directIntensity = oT
            }
          },
          metadata: oT
        }, sI, tI), (0, uT.h)(TT, null, wo, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveIntensity" in TT,
            get: TT => TT.emissiveIntensity,
            set: (TT, oT) => {
              TT.emissiveIntensity = oT
            }
          },
          metadata: oT
        }, GI, pI), (0, uT.h)(TT, null, Ro, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "environmentIntensity" in TT,
            get: TT => TT.environmentIntensity,
            set: (TT, oT) => {
              TT.environmentIntensity = oT
            }
          },
          metadata: oT
        }, bI, yI), (0, uT.h)(TT, null, uo, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "specularIntensity" in TT,
            get: TT => TT.specularIntensity,
            set: (TT, oT) => {
              TT.specularIntensity = oT
            }
          },
          metadata: oT
        }, NI, PI), (0, uT.h)(TT, null, vo, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableBumpMap" in TT,
            get: TT => TT.disableBumpMap,
            set: (TT, oT) => {
              TT.disableBumpMap = oT
            }
          },
          metadata: oT
        }, dI, VI), (0, uT.h)(TT, null, Eo, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoTexture" in TT,
            get: TT => TT.albedoTexture,
            set: (TT, oT) => {
              TT.albedoTexture = oT
            }
          },
          metadata: oT
        }, Ti, oi), (0, uT.h)(TT, null, fo, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseWeightTexture" in TT,
            get: TT => TT.baseWeightTexture,
            set: (TT, oT) => {
              TT.baseWeightTexture = oT
            }
          },
          metadata: oT
        }, Ii, ii), (0, uT.h)(TT, null, Co, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseRoughnessTexture" in TT,
            get: TT => TT.baseDiffuseRoughnessTexture,
            set: (TT, oT) => {
              TT.baseDiffuseRoughnessTexture = oT
            }
          },
          metadata: oT
        }, zi, ki), (0, uT.h)(TT, null, jo, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTexture" in TT,
            get: TT => TT.ambientTexture,
            set: (TT, oT) => {
              TT.ambientTexture = oT
            }
          },
          metadata: oT
        }, Wi, Xi), (0, uT.h)(TT, null, Jo, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTextureStrength" in TT,
            get: TT => TT.ambientTextureStrength,
            set: (TT, oT) => {
              TT.ambientTextureStrength = oT
            }
          },
          metadata: oT
        }, Bi, Fi), (0, uT.h)(TT, null, Uo, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientTextureImpactOnAnalyticalLights" in TT,
            get: TT => TT.ambientTextureImpactOnAnalyticalLights,
            set: (TT, oT) => {
              TT.ambientTextureImpactOnAnalyticalLights = oT
            }
          },
          metadata: oT
        }, Si, Di), (0, uT.h)(TT, null, ao, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "opacityTexture" in TT,
            get: TT => TT.opacityTexture,
            set: (TT, oT) => {
              TT.opacityTexture = oT
            }
          },
          metadata: oT
        }, Li, xi), (0, uT.h)(TT, null, Yo, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectionTexture" in TT,
            get: TT => TT.reflectionTexture,
            set: (TT, oT) => {
              TT.reflectionTexture = oT
            }
          },
          metadata: oT
        }, ci, Ki), (0, uT.h)(TT, null, Qo, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveTexture" in TT,
            get: TT => TT.emissiveTexture,
            set: (TT, oT) => {
              TT.emissiveTexture = oT
            }
          },
          metadata: oT
        }, Mi, ri), (0, uT.h)(TT, null, Oo, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectivityTexture" in TT,
            get: TT => TT.reflectivityTexture,
            set: (TT, oT) => {
              TT.reflectivityTexture = oT
            }
          },
          metadata: oT
        }, Ai, gi), (0, uT.h)(TT, null, Ho, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicTexture" in TT,
            get: TT => TT.metallicTexture,
            set: (TT, oT) => {
              TT.metallicTexture = oT
            }
          },
          metadata: oT
        }, wi, mi), (0, uT.h)(TT, null, no, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallic" in TT,
            get: TT => TT.metallic,
            set: (TT, oT) => {
              TT.metallic = oT
            }
          },
          metadata: oT
        }, ei, Ri), (0, uT.h)(TT, null, qo, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughness" in TT,
            get: TT => TT.roughness,
            set: (TT, oT) => {
              TT.roughness = oT
            }
          },
          metadata: oT
        }, ui, vi), (0, uT.h)(TT, null, Zo, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicF0Factor" in TT,
            get: TT => TT.metallicF0Factor,
            set: (TT, oT) => {
              TT.metallicF0Factor = oT
            }
          },
          metadata: oT
        }, Ei, fi), (0, uT.h)(TT, null, so, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicReflectanceColor" in TT,
            get: TT => TT.metallicReflectanceColor,
            set: (TT, oT) => {
              TT.metallicReflectanceColor = oT
            }
          },
          metadata: oT
        }, Ci, ji), (0, uT.h)(TT, null, to, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useOnlyMetallicFromMetallicReflectanceTexture" in TT,
            get: TT => TT.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (TT, oT) => {
              TT.useOnlyMetallicFromMetallicReflectanceTexture = oT
            }
          },
          metadata: oT
        }, Ji, Ui), (0, uT.h)(TT, null, Go, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "metallicReflectanceTexture" in TT,
            get: TT => TT.metallicReflectanceTexture,
            set: (TT, oT) => {
              TT.metallicReflectanceTexture = oT
            }
          },
          metadata: oT
        }, ai, Yi), (0, uT.h)(TT, null, po, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectanceTexture" in TT,
            get: TT => TT.reflectanceTexture,
            set: (TT, oT) => {
              TT.reflectanceTexture = oT
            }
          },
          metadata: oT
        }, Qi, Oi), (0, uT.h)(TT, null, bo, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "microSurfaceTexture" in TT,
            get: TT => TT.microSurfaceTexture,
            set: (TT, oT) => {
              TT.microSurfaceTexture = oT
            }
          },
          metadata: oT
        }, Hi, ni), (0, uT.h)(TT, null, yo, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpTexture" in TT,
            get: TT => TT.bumpTexture,
            set: (TT, oT) => {
              TT.bumpTexture = oT
            }
          },
          metadata: oT
        }, qi, Zi), (0, uT.h)(TT, null, No, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "lightmapTexture" in TT,
            get: TT => TT.lightmapTexture,
            set: (TT, oT) => {
              TT.lightmapTexture = oT
            }
          },
          metadata: oT
        }, li, si), (0, uT.h)(TT, null, Po, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "ambientColor" in TT,
            get: TT => TT.ambientColor,
            set: (TT, oT) => {
              TT.ambientColor = oT
            }
          },
          metadata: oT
        }, ti, Gi), (0, uT.h)(TT, null, Vo, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "albedoColor" in TT,
            get: TT => TT.albedoColor,
            set: (TT, oT) => {
              TT.albedoColor = oT
            }
          },
          metadata: oT
        }, bi, yi), (0, uT.h)(TT, null, TI, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseWeight" in TT,
            get: TT => TT.baseWeight,
            set: (TT, oT) => {
              TT.baseWeight = oT
            }
          },
          metadata: oT
        }, Ni, Pi), (0, uT.h)(TT, null, oI, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: TT => "baseDiffuseRoughness" in TT,
            get: TT => TT.baseDiffuseRoughness,
            set: (TT, oT) => {
              TT.baseDiffuseRoughness = oT
            }
          },
          metadata: oT
        }, di, Vi), (0, uT.h)(TT, null, II, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectivityColor" in TT,
            get: TT => TT.reflectivityColor,
            set: (TT, oT) => {
              TT.reflectivityColor = oT
            }
          },
          metadata: oT
        }, Tz, oz), (0, uT.h)(TT, null, iI, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "reflectionColor" in TT,
            get: TT => TT.reflectionColor,
            set: (TT, oT) => {
              TT.reflectionColor = oT
            }
          },
          metadata: oT
        }, Iz, iz), (0, uT.h)(TT, null, zI, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: TT => "emissiveColor" in TT,
            get: TT => TT.emissiveColor,
            set: (TT, oT) => {
              TT.emissiveColor = oT
            }
          },
          metadata: oT
        }, zz, kz), (0, uT.h)(TT, null, kI, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: TT => "microSurface" in TT,
            get: TT => TT.microSurface,
            set: (TT, oT) => {
              TT.microSurface = oT
            }
          },
          metadata: oT
        }, Wz, Xz), (0, uT.h)(TT, null, WI, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLightmapAsShadowmap" in TT,
            get: TT => TT.useLightmapAsShadowmap,
            set: (TT, oT) => {
              TT.useLightmapAsShadowmap = oT
            }
          },
          metadata: oT
        }, Bz, Fz), (0, uT.h)(TT, null, XI, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlphaFromAlbedoTexture" in TT,
            get: TT => TT.useAlphaFromAlbedoTexture,
            set: (TT, oT) => {
              TT.useAlphaFromAlbedoTexture = oT
            }
          },
          metadata: oT
        }, Sz, Dz), (0, uT.h)(TT, null, BI, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceAlphaTest" in TT,
            get: TT => TT.forceAlphaTest,
            set: (TT, oT) => {
              TT.forceAlphaTest = oT
            }
          },
          metadata: oT
        }, Lz, xz), (0, uT.h)(TT, null, FI, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: TT => "alphaCutOff" in TT,
            get: TT => TT.alphaCutOff,
            set: (TT, oT) => {
              TT.alphaCutOff = oT
            }
          },
          metadata: oT
        }, cz, Kz), (0, uT.h)(TT, null, SI, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useSpecularOverAlpha" in TT,
            get: TT => TT.useSpecularOverAlpha,
            set: (TT, oT) => {
              TT.useSpecularOverAlpha = oT
            }
          },
          metadata: oT
        }, Mz, rz), (0, uT.h)(TT, null, DI, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMicroSurfaceFromReflectivityMapAlpha" in TT,
            get: TT => TT.useMicroSurfaceFromReflectivityMapAlpha,
            set: (TT, oT) => {
              TT.useMicroSurfaceFromReflectivityMapAlpha = oT
            }
          },
          metadata: oT
        }, Az, gz), (0, uT.h)(TT, null, LI, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMetallicTextureAlpha" in TT,
            get: TT => TT.useRoughnessFromMetallicTextureAlpha,
            set: (TT, oT) => {
              TT.useRoughnessFromMetallicTextureAlpha = oT
            }
          },
          metadata: oT
        }, hz, wz), (0, uT.h)(TT, null, xI, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRoughnessFromMetallicTextureGreen" in TT,
            get: TT => TT.useRoughnessFromMetallicTextureGreen,
            set: (TT, oT) => {
              TT.useRoughnessFromMetallicTextureGreen = oT
            }
          },
          metadata: oT
        }, mz, ez), (0, uT.h)(TT, null, cI, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: TT => "useMetallnessFromMetallicTextureBlue" in TT,
            get: TT => TT.useMetallnessFromMetallicTextureBlue,
            set: (TT, oT) => {
              TT.useMetallnessFromMetallicTextureBlue = oT
            }
          },
          metadata: oT
        }, Rz, uz), (0, uT.h)(TT, null, KI, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAmbientOcclusionFromMetallicTextureRed" in TT,
            get: TT => TT.useAmbientOcclusionFromMetallicTextureRed,
            set: (TT, oT) => {
              TT.useAmbientOcclusionFromMetallicTextureRed = oT
            }
          },
          metadata: oT
        }, vz, Ez), (0, uT.h)(TT, null, MI, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAmbientInGrayScale" in TT,
            get: TT => TT.useAmbientInGrayScale,
            set: (TT, oT) => {
              TT.useAmbientInGrayScale = oT
            }
          },
          metadata: oT
        }, fz, Cz), (0, uT.h)(TT, null, rI, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAutoMicroSurfaceFromReflectivityMap" in TT,
            get: TT => TT.useAutoMicroSurfaceFromReflectivityMap,
            set: (TT, oT) => {
              TT.useAutoMicroSurfaceFromReflectivityMap = oT
            }
          },
          metadata: oT
        }, jz, Jz), (0, uT.h)(TT, null, AI, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: TT => "usePhysicalLightFalloff" in TT,
            get: TT => TT.usePhysicalLightFalloff
          },
          metadata: oT
        }, null, lI), (0, uT.h)(TT, null, gI, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: TT => "useGLTFLightFalloff" in TT,
            get: TT => TT.useGLTFLightFalloff
          },
          metadata: oT
        }, null, lI), (0, uT.h)(TT, null, hI, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRadianceOverAlpha" in TT,
            get: TT => TT.useRadianceOverAlpha,
            set: (TT, oT) => {
              TT.useRadianceOverAlpha = oT
            }
          },
          metadata: oT
        }, Uz, az), (0, uT.h)(TT, null, wI, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "useObjectSpaceNormalMap" in TT,
            get: TT => TT.useObjectSpaceNormalMap,
            set: (TT, oT) => {
              TT.useObjectSpaceNormalMap = oT
            }
          },
          metadata: oT
        }, Yz, Qz), (0, uT.h)(TT, null, mI, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: TT => "useParallax" in TT,
            get: TT => TT.useParallax,
            set: (TT, oT) => {
              TT.useParallax = oT
            }
          },
          metadata: oT
        }, Oz, Hz), (0, uT.h)(TT, null, eI, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useParallaxOcclusion" in TT,
            get: TT => TT.useParallaxOcclusion,
            set: (TT, oT) => {
              TT.useParallaxOcclusion = oT
            }
          },
          metadata: oT
        }, nz, qz), (0, uT.h)(TT, null, RI, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: TT => "parallaxScaleBias" in TT,
            get: TT => TT.parallaxScaleBias,
            set: (TT, oT) => {
              TT.parallaxScaleBias = oT
            }
          },
          metadata: oT
        }, Zz, lz), (0, uT.h)(TT, null, uI, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: TT => "disableLighting" in TT,
            get: TT => TT.disableLighting,
            set: (TT, oT) => {
              TT.disableLighting = oT
            }
          },
          metadata: oT
        }, sz, tz), (0, uT.h)(TT, null, vI, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceIrradianceInFragment" in TT,
            get: TT => TT.forceIrradianceInFragment,
            set: (TT, oT) => {
              TT.forceIrradianceInFragment = oT
            }
          },
          metadata: oT
        }, Gz, pz), (0, uT.h)(TT, null, EI, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: TT => "maxSimultaneousLights" in TT,
            get: TT => TT.maxSimultaneousLights,
            set: (TT, oT) => {
              TT.maxSimultaneousLights = oT
            }
          },
          metadata: oT
        }, bz, yz), (0, uT.h)(TT, null, fI, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertNormalMapX" in TT,
            get: TT => TT.invertNormalMapX,
            set: (TT, oT) => {
              TT.invertNormalMapX = oT
            }
          },
          metadata: oT
        }, Nz, Pz), (0, uT.h)(TT, null, CI, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: TT => "invertNormalMapY" in TT,
            get: TT => TT.invertNormalMapY,
            set: (TT, oT) => {
              TT.invertNormalMapY = oT
            }
          },
          metadata: oT
        }, dz, Vz), (0, uT.h)(TT, null, jI, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: TT => "twoSidedLighting" in TT,
            get: TT => TT.twoSidedLighting,
            set: (TT, oT) => {
              TT.twoSidedLighting = oT
            }
          },
          metadata: oT
        }, Tk, Ik), (0, uT.h)(TT, null, JI, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: TT => "useAlphaFresnel" in TT,
            get: TT => TT.useAlphaFresnel,
            set: (TT, oT) => {
              TT.useAlphaFresnel = oT
            }
          },
          metadata: oT
        }, ik, zk), (0, uT.h)(TT, null, UI, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: TT => "useLinearAlphaFresnel" in TT,
            get: TT => TT.useLinearAlphaFresnel,
            set: (TT, oT) => {
              TT.useLinearAlphaFresnel = oT
            }
          },
          metadata: oT
        }, kk, Wk), (0, uT.h)(TT, null, aI, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: TT => "environmentBRDFTexture" in TT,
            get: TT => TT.environmentBRDFTexture,
            set: (TT, oT) => {
              TT.environmentBRDFTexture = oT
            }
          },
          metadata: oT
        }, Xk, Bk), (0, uT.h)(TT, null, YI, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: TT => "forceNormalForward" in TT,
            get: TT => TT.forceNormalForward,
            set: (TT, oT) => {
              TT.forceNormalForward = oT
            }
          },
          metadata: oT
        }, Fk, Sk), (0, uT.h)(TT, null, QI, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: TT => "enableSpecularAntiAliasing" in TT,
            get: TT => TT.enableSpecularAntiAliasing,
            set: (TT, oT) => {
              TT.enableSpecularAntiAliasing = oT
            }
          },
          metadata: oT
        }, Dk, Lk), (0, uT.h)(TT, null, OI, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useHorizonOcclusion" in TT,
            get: TT => TT.useHorizonOcclusion,
            set: (TT, oT) => {
              TT.useHorizonOcclusion = oT
            }
          },
          metadata: oT
        }, xk, ck), (0, uT.h)(TT, null, HI, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: TT => "useRadianceOcclusion" in TT,
            get: TT => TT.useRadianceOcclusion,
            set: (TT, oT) => {
              TT.useRadianceOcclusion = oT
            }
          },
          metadata: oT
        }, Kk, Mk), (0, uT.h)(TT, null, nI, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: TT => "unlit" in TT,
            get: TT => TT.unlit,
            set: (TT, oT) => {
              TT.unlit = oT
            }
          },
          metadata: oT
        }, rk, Ak), (0, uT.h)(TT, null, qI, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: TT => "applyDecalMapAfterDetailMap" in TT,
            get: TT => TT.applyDecalMapAfterDetailMap,
            set: (TT, oT) => {
              TT.applyDecalMapAfterDetailMap = oT
            }
          },
          metadata: oT
        }, gk, hk), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT.PBRMATERIAL_OPAQUE = mo.PBRMATERIAL_OPAQUE, TT.PBRMATERIAL_ALPHATEST = mo.PBRMATERIAL_ALPHATEST, TT.PBRMATERIAL_ALPHABLEND = mo.PBRMATERIAL_ALPHABLEND, TT.PBRMATERIAL_ALPHATESTANDBLEND = mo.PBRMATERIAL_ALPHATESTANDBLEND, TT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = mo.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, TT
    })();
    const qz = "KHR_materials_diffuse_transmission";

    function Zz(TT, oT) {
      const IT = oT.subSurface;
      let iT = null;
      return IT.translucencyIntensityTexture ? iT = IT.translucencyIntensityTexture : IT.thicknessTexture && IT.useMaskFromThicknessTexture && (iT = IT.thicknessTexture), iT && !IT.useGltfStyleTextures ? (ET.d.Warn(`${TT}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${oT.name}`, 1), null) : iT
    }
    class lz {
      constructor(TT) {
        this.name = qz, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof nz && this._isExtensionEnabled(IT)) {
          const oT = Zz(TT, IT);
          return oT && iT.push(oT), IT.subSurface.translucencyColorTexture && iT.push(IT.subSurface.translucencyColorTexture), iT
        }
        return iT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const oT = TT.subSurface;
        return !!oT.isTranslucencyEnabled && (!TT.unlit && !oT.useAlbedoToTintTranslucency && oT.useGltfStyleTextures && 1 === oT.volumeIndexOfRefraction && 0 === oT.minimumThickness && 0 === oT.maximumThickness)
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((iT => {
          if (IT instanceof nz && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0;
            const iT = IT.subSurface,
              zT = Zz(TT, IT),
              kT = 0 == iT.translucencyIntensity ? void 0 : iT.translucencyIntensity,
              WT = this._exporter._materialExporter.getTextureInfo(zT) ?? void 0,
              XT = !iT.translucencyColor || iT.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : iT.translucencyColor.bIT(),
              BT = this._exporter._materialExporter.getTextureInfo(iT.translucencyColorTexture) ?? void 0,
              FT = {
                diffuseTransmissionFactor: kT,
                diffuseTransmissionTexture: WT,
                diffuseTransmissionColorFactor: XT,
                diffuseTransmissionColorTexture: BT
              };
            (WT || BT) && this._exporter._materialNeedsUVsSet.add(IT), oT.extensions = oT.extensions || {}, oT.extensions[qz] = FT
          }
          iT(oT)
        }))
      }
    }
    let sz = !1;

    function tz() {
      sz || (sz = !0, Oi.RegisterExtension(qz, (TT => new lz(TT))))
    }
    tz();
    const Gz = "KHR_materials_dispersion";
    class pz {
      constructor() {
        this.name = Gz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const oT = TT.subSurface;
        return !(!oT.isRefractionEnabled && !oT.isDispersionEnabled)
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          if (IT instanceof nz && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0;
            const TT = {
              dispersion: IT.subSurface.dispersion
            };
            oT.extensions = oT.extensions || {}, oT.extensions[Gz] = TT
          }
          TT(oT)
        }))
      }
    }
    let bz = !1;

    function yz() {
      bz || (bz = !0, Oi.RegisterExtension(Gz, (() => new pz)))
    }
    yz();
    const Nz = "KHR_materials_emissive_strength";
    class Pz {
      constructor() {
        this.name = Nz, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(TT, oT, IT) {
        return await new Promise((TT => {
          if (!(IT instanceof nz)) return TT(oT);
          const iT = IT.emissiveColor.scale(IT.emissiveIntensity),
            zT = Math.max(...iT.bIT());
          if (zT > 1) {
            oT.emissiveFactor = iT.scale(1 / zT).bIT(), this._wasUsed = !0;
            const TT = {
              emissiveStrength: zT
            };
            oT.extensions || (oT.extensions = {}), oT.extensions[Nz] = TT
          } else oT.emissiveFactor = iT.bIT();
          return TT(oT)
        }))
      }
    }
    let dz = !1;

    function Vz() {
      dz || (dz = !0, Oi.RegisterExtension(Nz, (() => new Pz)))
    }
    Vz();
    const Tk = "KHR_materials_ior";
    class Ik {
      constructor() {
        this.name = Tk, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(TT) {
        return !TT.unlit && (TT instanceof TI ? 1.5 != TT.specularIor : TT instanceof nz && (void 0 != TT.indexOfRefraction && 1.5 != TT.indexOfRefraction))
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          if (IT instanceof nz && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0;
            const TT = {
              ior: IT.indexOfRefraction
            };
            oT.extensions = oT.extensions || {}, oT.extensions[Tk] = TT
          } else if (IT instanceof TI && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0;
            const TT = {
              ior: IT.specularIor
            };
            oT.extensions = oT.extensions || {}, oT.extensions[Tk] = TT
          }
          TT(oT)
        }))
      }
    }
    let ik = !1;

    function zk() {
      ik || (ik = !0, Oi.RegisterExtension(Tk, (() => new Ik)))
    }
    zk();
    const kk = "KHR_materials_iridescence";
    class Wk {
      constructor(TT) {
        this.name = kk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof mo) {
          if (IT.iridescence.isEnabled) return IT.iridescence.texture && iT.push(IT.iridescence.texture), IT.iridescence.thicknessTexture && IT.iridescence.thicknessTexture !== IT.iridescence.texture && iT.push(IT.iridescence.thicknessTexture), iT
        } else if (IT instanceof TI && IT.thinFilmWeight > 0) return IT.thinFilmWeightTexture && iT.push(IT.thinFilmWeightTexture), IT.thinFilmThicknessTexture && IT.thinFilmThicknessTexture !== IT.thinFilmWeightTexture && iT.push(IT.thinFilmThicknessTexture), iT;
        return []
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          if (IT instanceof mo) {
            if (!IT.iridescence.isEnabled) return void TT(oT);
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            const iT = this._exporter._materialExporter.getTextureInfo(IT.iridescence.texture),
              zT = this._exporter._materialExporter.getTextureInfo(IT.iridescence.thicknessTexture),
              kT = {
                iridescenceFactor: IT.iridescence.intensity,
                iridescenceIor: IT.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: IT.iridescence.minimumThickness,
                iridescenceThicknessMaximum: IT.iridescence.maximumThickness,
                iridescenceTexture: iT ?? void 0,
                iridescenceThicknessTexture: zT ?? void 0
              };
            null === kT.iridescenceTexture && null === kT.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[kk] = kT
          } else if (IT instanceof TI) {
            if (IT.thinFilmWeight <= 0) return void TT(oT);
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            const iT = this._exporter._materialExporter.getTextureInfo(IT.thinFilmWeightTexture),
              zT = this._exporter._materialExporter.getTextureInfo(IT.thinFilmThicknessTexture),
              kT = {
                iridescenceFactor: IT.thinFilmWeight,
                iridescenceIor: IT.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * IT.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * IT.thinFilmThickness,
                iridescenceTexture: iT ?? void 0,
                iridescenceThicknessTexture: zT ?? void 0
              };
            null === kT.iridescenceTexture && null === kT.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[kk] = kT
          }
          TT(oT)
        }))
      }
    }
    let Xk = !1;

    function Bk() {
      Xk || (Xk = !0, Oi.RegisterExtension(kk, (TT => new Wk(TT))))
    }
    Bk();
    const Fk = "KHR_materials_sheen";
    class Sk {
      constructor(TT) {
        this.name = Fk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        return IT instanceof nz && IT.sheen.isEnabled && IT.sheen.texture ? [IT.sheen.texture] : []
      }
      async postExportMaterialAsync(TT, oT, IT) {
        return await new Promise((TT => {
          if (IT instanceof nz) {
            if (!IT.sheen.isEnabled) return void TT(oT);
            this._wasUsed = !0, null == oT.extensions && (oT.extensions = {});
            const iT = {
              sheenColorFactor: IT.sheen.color.bIT(),
              sheenRoughnessFactor: IT.sheen.roughness ?? 0
            };
            null === iT.sheenColorTexture && null === iT.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(IT), IT.sheen.texture && (iT.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(IT.sheen.texture) ?? void 0), IT.sheen.textureRoughness && !IT.sheen.useRoughnessFromMainTexture ? iT.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(IT.sheen.textureRoughness) ?? void 0 : IT.sheen.texture && IT.sheen.useRoughnessFromMainTexture && (iT.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(IT.sheen.texture) ?? void 0), oT.extensions[Fk] = iT
          }
          TT(oT)
        }))
      }
    }
    let Dk = !1;

    function Lk() {
      Dk || (Dk = !0, Oi.RegisterExtension(Fk, (TT => new Sk(TT))))
    }
    Lk();
    const xk = "KHR_materials_fuzz";

    function ck(TT, oT) {
      const IT = new CT.g(oT.name, oT.pC());
      return IT._texture = TT, IT.coordinatesIndex = oT.coordinatesIndex, oT instanceof CT.g && (IT.uOffset = oT.uOffset, IT.vOffset = oT.vOffset, IT.uScale = oT.uScale, IT.vScale = oT.vScale, IT.wAng = oT.wAng), IT.wrapU = oT.wrapU, IT.wrapV = oT.wrapV, IT
    }
    class Kk {
      constructor(TT) {
        this.name = xk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = TT
      }
      dispose() {
        for (const TT of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[TT].dispose()
        }
        this._mergedTexturesMap = {};
        for (const TT of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[TT].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        if (IT instanceof TI) {
          const TT = [];
          if (IT.fuzzWeight > 0) {
            IT.fuzzWeightTexture && TT.push(IT.fuzzWeightTexture);
            let oT = !1;
            if (IT.fuzzRoughnessTexture && (IT._useFuzzRoughnessFromTextureAlpha ? TT.push(IT.fuzzRoughnessTexture) : oT = !0), IT.fuzzColorTexture && !oT && TT.push(IT.fuzzColorTexture), oT) {
              const oT = function(TT) {
                const oT = TT.fuzzColorTexture,
                  IT = oT && oT.getInternalTexture() ? oT.getInternalTexture().uniqueId : "NoFuzzColor",
                  iT = TT.fuzzRoughnessTexture;
                return `FuzzColor_${IT}_FuzzRoughness_${iT&&iT.getInternalTexture()?iT.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(IT);
              if (!this._cachedInternalTexturesMap[oT]) {
                const TT = await async function(TT) {
                  const oT = TT.pC(),
                    IT = TT.fuzzColorTexture,
                    iT = TT.fuzzRoughnessTexture;
                  return IT || iT ? (await BI("FuzzTexture", DI(IT ? FI(IT, 0) : SI(1), IT ? FI(IT, 1) : SI(1), IT ? FI(IT, 2) : SI(1), iT ? FI(iT, TT._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : SI(1)), oT)).getInternalTexture() : null
                }(IT);
                TT && (this._cachedInternalTexturesMap[oT] = TT)
              }
              this._cachedInternalTexturesMap[oT] && (IT.fuzzColorTexture && (this._mergedTexturesMap[IT.fuzzColorTexture.uniqueId] = ck(this._cachedInternalTexturesMap[oT], IT.fuzzColorTexture), TT.push(this._mergedTexturesMap[IT.fuzzColorTexture.uniqueId])), IT.fuzzRoughnessTexture && (this._mergedTexturesMap[IT.fuzzRoughnessTexture.uniqueId] = ck(this._cachedInternalTexturesMap[oT], IT.fuzzRoughnessTexture), TT.push(this._mergedTexturesMap[IT.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return TT
        }
        return []
      }
      async postExportMaterialAsync(TT, oT, IT) {
        return await new Promise((TT => {
          if (IT instanceof TI) {
            if (0 == IT.fuzzWeight) return void TT(oT);
            this._wasUsed = !0, null == oT.extensions && (oT.extensions = {});
            const iT = {
              fuzzFactor: IT.fuzzWeight,
              fuzzColorFactor: IT.fuzzColor.bIT(),
              fuzzRoughnessFactor: IT.fuzzRoughness
            };
            let zT, kT;
            IT.fuzzWeightTexture && (iT.fuzzTexture = this._exporter._materialExporter.getTextureInfo(IT.fuzzWeightTexture) ?? void 0), IT.fuzzColorTexture && (zT = this._mergedTexturesMap[IT.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[IT.fuzzColorTexture.uniqueId] : IT.fuzzColorTexture, iT.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(zT) ?? void 0), IT.fuzzRoughnessTexture && (kT = this._mergedTexturesMap[IT.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[IT.fuzzRoughnessTexture.uniqueId] : IT.fuzzRoughnessTexture, iT.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(kT) ?? void 0), null === iT.fuzzColorTexture && null === iT.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[xk] = iT
          }
          TT(oT)
        }))
      }
    }
    let Mk = !1;

    function rk() {
      Mk || (Mk = !0, Oi.RegisterExtension(xk, (TT => new Kk(TT))))
    }
    rk();
    const Ak = "KHR_materials_specular";
    class gk {
      constructor(TT) {
        this.name = Ak, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        return IT instanceof nz && this._isExtensionEnabled(IT) ? (IT.metallicReflectanceTexture && iT.push(IT.metallicReflectanceTexture), IT.reflectanceTexture && iT.push(IT.reflectanceTexture), iT) : iT
      }
      _isExtensionEnabled(TT) {
        return !TT.unlit && (void 0 != TT.metallicF0Factor && 1 != TT.metallicF0Factor || void 0 != TT.metallicReflectanceColor && !TT.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(TT))
      }
      _hasTexturesExtension(TT) {
        return null != TT.metallicReflectanceTexture || null != TT.reflectanceTexture
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          var iT;
          if (IT instanceof nz && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0, oT.extensions = oT.extensions || {};
            const TT = this._exporter._materialExporter.getTextureInfo(IT.metallicReflectanceTexture) ?? void 0,
              iT = this._exporter._materialExporter.getTextureInfo(IT.reflectanceTexture) ?? void 0,
              zT = {
                specularFactor: 1 == IT.metallicF0Factor ? void 0 : IT.metallicF0Factor,
                specularTexture: TT,
                specularColorFactor: IT.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : IT.metallicReflectanceColor.bIT(),
                specularColorTexture: iT
              };
            this._hasTexturesExtension(IT) && this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[Ak] = zT
          } else if (IT instanceof TI) {
            oT.extensions = oT.extensions || {};
            const zT = this._exporter._materialExporter.getTextureInfo(IT.specularWeightTexture) ?? void 0,
              kT = this._exporter._materialExporter.getTextureInfo(IT.specularColorTexture) ?? void 0,
              WT = 1 == IT.specularWeight ? void 0 : IT.specularWeight,
              XT = IT.specularColor.equalsFloats(1, 1, 1) ? void 0 : IT.specularColor.bIT();
            if (!kT && !zT && void 0 === WT && void 0 === XT) return TT(oT);
            this._wasUsed = !0;
            const BT = {
                specularEdgeColorEnabled: !0
              },
              FT = {
                specularFactor: WT,
                specularTexture: zT,
                specularColorFactor: XT,
                specularColorTexture: kT,
                extensions: {}
              };
            FT.extensions.EXT_materials_specular_edge_color = BT, (iT = this._exporter._glTF).extensionsUsed || (iT.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (zT || kT) && this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[Ak] = FT
          }
          TT(oT)
        }))
      }
    }
    let hk = !1;

    function wk() {
      hk || (hk = !0, Oi.RegisterExtension(Ak, (TT => new gk(TT))))
    }
    wk();
    const mk = "KHR_materials_transmission";
    class ek {
      constructor(TT) {
        this.name = mk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof nz) {
          if (this._isExtensionEnabled(IT)) return IT.subSurface.refractionIntensityTexture && IT.subSurface.useGltfStyleTextures && iT.push(IT.subSurface.refractionIntensityTexture), iT
        } else IT instanceof TI && (IT.transmissionWeight > 0 && IT.transmissionWeightTexture && (iT.push(IT.transmissionWeightTexture), IT.transmissionColorTexture && iT.push(IT.transmissionColorTexture)), IT.subsurfaceWeight > 0 && IT.subsurfaceWeightTexture && iT.push(IT.subsurfaceWeightTexture));
        return iT
      }
      _isExtensionEnabled(TT) {
        if (TT instanceof TI && !TT.unlit) return TT.transmissionWeight > 0 || TT.subsurfaceWeight > 0;
        if (TT instanceof nz && !TT.unlit) {
          const oT = TT.subSurface;
          return oT.isRefractionEnabled && void 0 != oT.refractionIntensity && 0 != oT.refractionIntensity || null != oT.refractionIntensityTexture && oT.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(TT, oT, IT) {
        if (!this._isExtensionEnabled(IT)) return oT;
        if (IT instanceof nz) {
          this._wasUsed = !0;
          const iT = IT.subSurface,
            zT = {
              transmissionFactor: 0 === iT.refractionIntensity ? void 0 : iT.refractionIntensity
            };
          if (iT.refractionIntensityTexture)
            if (iT.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(IT);
              const TT = this._exporter._materialExporter.getTextureInfo(iT.refractionIntensityTexture);
              TT && (zT.transmissionTexture = TT)
            } else ET.d.Warn(`${TT}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          oT.extensions || (oT.extensions = {}), oT.extensions[mk] = zT
        } else if (IT instanceof TI) {
          this._wasUsed = !0;
          const TT = {
            transmissionFactor: (1 - IT.transmissionWeight) * IT.subsurfaceWeight + IT.transmissionWeight
          };
          if (IT.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(IT);
            const oT = this._exporter._materialExporter.getTextureInfo(IT.transmissionWeightTexture);
            oT && (TT.transmissionTexture = oT)
          } else if (IT.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(IT);
            const oT = this._exporter._materialExporter.getTextureInfo(IT.subsurfaceWeightTexture);
            oT && (TT.transmissionTexture = oT)
          }
          if (0 == IT.transmissionDepth && (!IT.transmissionColor.equals(GT.e.White()) || IT.transmissionColorTexture) && oT.pbrMetallicRoughness && (oT.pbrMetallicRoughness.baseColorFactor || (oT.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), oT.pbrMetallicRoughness.baseColorFactor[0] *= IT.transmissionColor.r, oT.pbrMetallicRoughness.baseColorFactor[1] *= IT.transmissionColor.g, oT.pbrMetallicRoughness.baseColorFactor[2] *= IT.transmissionColor.b, IT.transmissionColorTexture && !oT.pbrMetallicRoughness.baseColorTexture)) {
            const TT = this._exporter._materialExporter.getTextureInfo(IT.transmissionColorTexture);
            TT && (oT.pbrMetallicRoughness.baseColorTexture = TT, this._exporter._materialNeedsUVsSet.add(IT))
          }
          oT.extensions || (oT.extensions = {}), oT.extensions[mk] = TT
        }
        return oT
      }
    }
    let Rk = !1;

    function uk() {
      Rk || (Rk = !0, Oi.RegisterExtension(mk, (TT => new ek(TT))))
    }
    uk();
    var vk = IT(39046);
    const Ek = "KHR_materials_unlit";
    class fk {
      constructor() {
        this.name = Ek, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          let iT = !1;
          IT instanceof nz ? iT = IT.unlit : IT instanceof vk.d && (iT = IT.disableLighting), iT && (this._wasUsed = !0, null == oT.extensions && (oT.extensions = {}), oT.extensions[Ek] = {}), TT(oT)
        }))
      }
    }
    let Ck = !1;

    function jk() {
      Ck || (Ck = !0, Oi.RegisterExtension(Ek, (() => new fk)))
    }
    jk();
    const Jk = "KHR_materials_volume";
    class Uk {
      constructor(TT) {
        this.name = Jk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof nz) {
          if (this._isExtensionEnabled(IT)) return IT.subSurface.thicknessTexture && iT.push(IT.subSurface.thicknessTexture), iT
        } else IT instanceof TI && (IT.transmissionWeight > 0 || IT.subsurfaceWeight > 0) && IT.geometryThicknessTexture && iT.push(IT.geometryThicknessTexture);
        return iT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const oT = TT.subSurface;
        return !(!oT.isRefractionEnabled && !oT.isTranslucencyEnabled) && (void 0 != oT.maximumThickness && 0 != oT.maximumThickness || void 0 != oT.tintColorAtDistance && oT.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != oT.tintColor && oT.tintColor != GT.e.White() || this._hasTexturesExtension(TT))
      }
      _hasTexturesExtension(TT) {
        return null != TT.subSurface.thicknessTexture
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          if (IT instanceof nz && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0;
            const TT = IT.subSurface,
              iT = {
                thicknessFactor: 0 == TT.maximumThickness ? void 0 : TT.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(TT.thicknessTexture) ?? void 0,
                attenuationDistance: TT.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : TT.tintColorAtDistance,
                attenuationColor: TT.tintColor.equalsFloats(1, 1, 1) ? void 0 : TT.tintColor.bIT()
              };
            this._hasTexturesExtension(IT) && this._exporter._materialNeedsUVsSet.add(IT), oT.extensions = oT.extensions || {}, oT.extensions[Jk] = iT
          } else if (IT instanceof TI) {
            const TT = IT.transmissionWeight > 0 && !IT.geometryThinWalled,
              iT = IT.subsurfaceWeight > 0 && !IT.geometryThinWalled;
            if (TT || iT) {
              this._wasUsed = !0;
              const zT = IT.geometryThickness,
                kT = this._exporter._materialExporter.getTextureInfo(IT.geometryThicknessTexture) ?? void 0;
              let WT;
              kT && this._exporter._materialNeedsUVsSet.add(IT);
              const XT = GT.e.White().bIT();
              if (TT && IT.transmissionDepth > 0) {
                const TT = 1 / IT.transmissionDepth;
                let oT = new HT.m(-Math.log(IT.transmissionColor.r) * TT, -Math.log(IT.transmissionColor.g) * TT, -Math.log(IT.transmissionColor.b) * TT);
                const iT = new HT.m(IT.transmissionScatter.r * TT, IT.transmissionScatter.g * TT, IT.transmissionScatter.b * TT),
                  zT = oT.subtract(iT),
                  kT = Math.min(zT.x, zT.y, zT.z);
                kT < 0 && (zT.x = zT.x - kT, zT.y = zT.y - kT, zT.z = zT.z - kT), oT = zT.add(iT);
                WT = 1 / Math.max(oT.x, oT.y, oT.z), XT[0] = Math.exp(-oT.x * WT), XT[1] = Math.exp(-oT.y * WT), XT[2] = Math.exp(-oT.z * WT)
              } else WT = Number.MAX_VALUE, XT[0] = 1, XT[1] = 1, XT[2] = 1;
              let BT = 1;
              const FT = GT.e.White().bIT();
              if (iT) {
                const TT = IT.subsurfaceRadius,
                  oT = IT.subsurfaceRadiusScale,
                  iT = new HT.m(oT.r, oT.g, oT.b).multiplyByFloats(TT, TT, TT),
                  zT = new HT.m(1 / Math.max(iT.x, 1e-6), 1 / Math.max(iT.y, 1e-6), 1 / Math.max(iT.z, 1e-6));
                BT = 1 / Math.max(zT.x, zT.y, zT.z), FT[0] = Math.exp(-zT.x * BT), FT[1] = Math.exp(-zT.y * BT), FT[2] = Math.exp(-zT.z * BT)
              }
              const ST = (1 - IT.transmissionWeight) * IT.subsurfaceWeight,
                DT = ST + IT.transmissionWeight,
                LT = 1 / Math.max(DT, 1e-6),
                xT = IT.transmissionWeight * LT,
                cT = ST * LT,
                KT = XT.map(((TT, oT) => TT * xT + FT[oT] * cT)),
                MT = {
                  thicknessFactor: zT,
                  thicknessTexture: kT,
                  attenuationDistance: WT * xT + BT * cT,
                  attenuationColor: KT
                };
              oT.extensions = oT.extensions || {}, oT.extensions[Jk] = MT
            }
          }
          TT(oT)
        }))
      }
    }
    let ak = !1;

    function Yk() {
      ak || (ak = !0, Oi.RegisterExtension(Jk, (TT => new Uk(TT))))
    }
    Yk();
    const Qk = "KHR_materials_volume_scatter";
    class Ok {
      constructor(TT) {
        this.name = Qk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        return IT instanceof TI && (IT.transmissionWeight > 0 && IT.transmissionScatterTexture && iT.push(IT.transmissionScatterTexture), IT.subsurfaceWeight > 0 && IT.subsurfaceColorTexture && iT.push(IT.subsurfaceColorTexture)), iT
      }
      _isExtensionEnabled(TT) {
        if (TT.unlit) return !1;
        const oT = TT.transmissionWeight > 0 && !TT.geometryThinWalled && TT.transmissionDepth > 0 && !TT.transmissionScatter.equals(GT.e.Black()),
          IT = TT.subsurfaceWeight > 0 && !TT.geometryThinWalled;
        return !(!oT && !IT)
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          if (IT instanceof TI && this._isExtensionEnabled(IT)) {
            this._wasUsed = !0;
            let TT = HT.m.Zero(),
              iT = 0;
            if (IT.transmissionWeight > 0) {
              TT = function(TT) {
                const oT = new HT.m(Math.sqrt(1 - TT.x), Math.sqrt(1 - TT.y), Math.sqrt(1 - TT.z)),
                  IT = new HT.m(1, 1, 1),
                  iT = IT.subtract(oT),
                  zT = IT.subtract(new HT.m(.139, .139, .139).multiplyInPlace(oT)),
                  kT = IT.add(new HT.m(1.17, 1.17, 1.17).multiplyInPlace(oT));
                return iT.multiplyInPlace(zT).divideInPlace(kT)
              }(new HT.m(IT.transmissionScatter.r, IT.transmissionScatter.g, IT.transmissionScatter.b)), iT = IT.transmissionScatterAnisotropy
            }
            const zT = HT.m.Zero();
            let kT = 0;
            IT.subsurfaceWeight > 0 && (zT.set(IT.subsurfaceColor.r, IT.subsurfaceColor.g, IT.subsurfaceColor.b), kT = IT.subsurfaceScatterAnisotropy);
            const WT = (1 - IT.transmissionWeight) * IT.subsurfaceWeight,
              XT = WT + IT.transmissionWeight,
              BT = 1 / Math.max(XT, 1e-6),
              FT = IT.transmissionWeight * BT,
              ST = WT * BT,
              DT = {
                multiscatterColorFactor: TT.multiplyByFloats(FT, FT, FT).addInPlace(zT.multiplyByFloats(ST, ST, ST)).bIT(),
                scatterAnisotropy: iT * FT + kT * ST
              };
            if (IT.subsurfaceWeight > 0 && IT.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(IT);
              const TT = this._exporter._materialExporter.getTextureInfo(IT.subsurfaceColorTexture);
              TT && (DT.multiscatterColorTexture = TT)
            } else if (IT.transmissionWeight > 0 && IT.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(IT);
              const TT = this._exporter._materialExporter.getTextureInfo(IT.transmissionScatterTexture);
              TT && (DT.multiscatterColorTexture = TT)
            }
            oT.extensions = oT.extensions || {}, oT.extensions[Qk] = DT
          }
          TT(oT)
        }))
      }
    }
    let Hk = !1;

    function nk() {
      Hk || (Hk = !0, Oi.RegisterExtension(Qk, (TT => new Ok(TT)), 101))
    }
    nk();
    const qk = "KHR_materials_diffuse_roughness";
    class Zk {
      constructor(TT) {
        this.name = qk, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(TT, oT, IT) {
        const iT = [];
        if (IT instanceof mo) {
          if (IT._baseDiffuseRoughness) return IT._baseDiffuseRoughnessTexture && iT.push(IT._baseDiffuseRoughnessTexture), iT
        } else if (IT instanceof TI && IT.baseDiffuseRoughness) return IT.baseDiffuseRoughnessTexture && iT.push(IT.baseDiffuseRoughnessTexture), iT;
        return []
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          let iT = null,
            zT = null;
          if (IT instanceof mo ? (iT = IT._baseDiffuseRoughness, zT = IT._baseDiffuseRoughnessTexture) : IT instanceof TI && (iT = IT.baseDiffuseRoughness, zT = IT.baseDiffuseRoughnessTexture), !iT) return void TT(oT);
          this._wasUsed = !0, oT.extensions = oT.extensions || {};
          const kT = {
            diffuseRoughnessFactor: iT,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(zT) ?? void 0
          };
          null !== kT.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(IT), oT.extensions[qk] = kT, TT(oT)
        }))
      }
    }
    let lk = !1;

    function sk() {
      lk || (lk = !0, Oi.RegisterExtension(qk, (TT => new Zk(TT))))
    }
    sk();
    const tk = "KHR_materials_openpbr";
    class Gk {
      constructor() {
        this.name = tk, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(TT, oT, IT) {
        return new Promise((TT => {
          IT instanceof TI && (this._wasUsed = !0, oT.extensions = oT.extensions || {}, oT.extensions[tk] = {}), TT(oT)
        }))
      }
    }
    let pk = !1;

    function bk() {
      pk || (pk = !0, Oi.RegisterExtension(tk, (() => new Gk)))
    }
    bk();
    const yk = "KHR_texture_transform";
    class Nk {
      constructor() {
        this.name = yk, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(TT, oT, IT) {
        if (IT.pC() || Ro.i.Warn(`${TT}: "scene" is not defined for Babylon texture ${IT.name}!`), (0 !== IT.uAng || 0 !== IT.vAng) && (Ro.i.Warn(`${TT}: Texture ${IT.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== IT.uRotationCenter || 0 !== IT.vRotationCenter)) return;
        const iT = {};
        let zT = !1;
        if (0 === IT.uOffset && 0 === IT.vOffset || (iT.offset = [IT.uOffset, IT.vOffset], zT = !0), 1 === IT.uScale && 1 === IT.vScale || (iT.scale = [IT.uScale, IT.vScale], zT = !0), 0 !== IT.wAng) {
          if (0 !== IT.uRotationCenter || 0 !== IT.vRotationCenter) {
            if (IT.homogeneousRotationInUVTransform && IT.uScale !== IT.vScale) return void Ro.i.Warn(`${TT}: Texture ${IT.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${yk}.`);
            Ro.i.Warn(`${TT}: Texture ${IT.name} with non-origin rotation center will be exported using an adjusted offset with ${yk}.`), iT.offset = function(TT) {
              const {
                uOffset: oT,
                vOffset: IT,
                uRotationCenter: iT,
                vRotationCenter: zT,
                uScale: kT,
                vScale: WT,
                wAng: XT
              } = TT, BT = Math.cos(XT), FT = Math.sin(XT), ST = iT * kT, DT = zT * WT;
              return [oT + (ST * (1 - BT) + DT * FT), IT + (DT * (1 - BT) - ST * FT)]
            }(IT)
          }
          iT.rotation = -IT.wAng, zT = !0
        }
        0 !== IT.coordinatesIndex && (iT.texCoord = IT.coordinatesIndex, zT = !0), zT && (this._wasUsed = !0, oT.extensions || (oT.extensions = {}), oT.extensions[yk] = iT)
      }
    }
    let Pk = !1;

    function dk() {
      Pk || (Pk = !0, Oi.RegisterExtension(yk, (() => new Nk)))
    }
    dk();
    var Vk = IT(38827);
    const TW = "KHR_texture_basisu";
    class oW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = TW, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, oT) {
        const IT = this._exporter._textures[oT.index],
          iT = IT.source;
        if (void 0 === iT) return;
        const zT = this._exporter._images[iT];
        "image/ktx2" === (zT.mimeType || (0, Vk.i)(zT.uri)) && (IT.source = void 0, IT.extensions || (IT.extensions = {}), IT.extensions[TW] = {
          source: iT
        }, this._wasUsed = !0)
      }
    }
    let IW = !1;

    function iW() {
      IW || (IW = !0, Oi.RegisterExtension(TW, (TT => new oW(TT))))
    }
    iW();
    const zW = "EXT_texture_webp";
    class kW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = zW, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, oT) {
        const IT = this._exporter._textures[oT.index],
          iT = IT.source;
        if (void 0 === iT) return;
        const zT = this._exporter._images[iT];
        "image/webp" === (zT.mimeType || (0, Vk.i)(zT.uri)) && (IT.source = void 0, IT.extensions || (IT.extensions = {}), IT.extensions[zW] = {
          source: iT
        }, this._wasUsed = !0)
      }
    }
    let WW = !1;

    function XW() {
      WW || (WW = !0, Oi.RegisterExtension(zW, (TT => new kW(TT))))
    }
    XW();
    const BW = "EXT_texture_avif";
    class FW {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(TT) {
        this.name = BW, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = TT
      }
      dispose() {}
      postExportTexture(TT, oT) {
        const IT = this._exporter._textures[oT.index],
          iT = IT.source;
        if (void 0 === iT) return;
        const zT = this._exporter._images[iT];
        "image/avif" === (zT.mimeType || (0, Vk.i)(zT.uri)) && (IT.source = void 0, IT.extensions || (IT.extensions = {}), IT.extensions[BW] = {
          source: iT
        }, this._wasUsed = !0)
      }
    }
    let SW = !1;

    function DW() {
      SW || (SW = !0, Oi.RegisterExtension(BW, (TT => new FW(TT))))
    }
    DW();
    class LW {
      static CreateSTL(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          kT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          XT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          BT = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const FT = function(TT, oT, IT) {
            const zT = [3 * TT[IT], 3 * TT[IT + 1], 3 * TT[IT + 2]],
              kT = [new iT.sc(oT[zT[0]], oT[zT[0] + 2], oT[zT[0] + 1]), new iT.sc(oT[zT[1]], oT[zT[1] + 2], oT[zT[1] + 1]), new iT.sc(oT[zT[2]], oT[zT[2] + 2], oT[zT[2] + 1])],
              WT = kT[0].subtract(kT[1]),
              XT = kT[2].subtract(kT[1]);
            return {
              v: kT,
              n: iT.sc.Cross(XT, WT).normalize()
            }
          },
          DT = function(TT, oT, IT, iT) {
            return oT = LT(TT, oT, IT.x, iT), oT = LT(TT, oT, IT.y, iT), LT(TT, oT, IT.z, iT)
          },
          LT = function(TT, oT, IT, iT) {
            return TT.setFloat32(oT, IT, iT), oT + 4
          },
          cT = function(TT) {
            if (XT) {
              let oT = TT;
              TT instanceof xT.d && (oT = TT.HiT);
              const IT = oT.getVerticesData(ST.d.PositionKind, !0, !0);
              if (!IT) return [];
              const zT = iT.sc.Zero();
              let kT;
              for (kT = 0; kT < IT.length; kT += 3) iT.sc.TransformCoordinatesFromFloatsToRef(IT[kT], IT[kT + 1], IT[kT + 2], TT.computeWorldMatrix(!0), zT).toArray(IT, kT);
              return IT
            }
            return TT.getVerticesData(ST.d.PositionKind) || []
          };
        XT && (WT = !0);
        let KT = "",
          MT = 0,
          rT = 0;
        if (zT) {
          for (let IT = 0; IT < TT.length; IT++) {
            const oT = TT[IT].hWT();
            MT += oT ? oT.length / 3 : 0
          }
          const oT = new ArrayBuffer(84 + 50 * MT);
          KT = new DataView(oT), rT += 80, KT.setUint32(rT, MT, kT), rT += 4
        } else BT || (KT = "solid stlmesh\r\n");
        for (let iT = 0; iT < TT.length; iT++) {
          const oT = TT[iT];
          !zT && BT && (KT += "solid " + oT.name + "\r\n"), !WT && oT instanceof Di.b && oT.bakeCurrentTransformIntoVertices();
          const IT = cT(oT),
            XT = oT.hWT() || [];
          for (let TT = 0; TT < XT.length; TT += 3) {
            const oT = FT(XT, IT, TT);
            zT ? (rT = DT(KT, rT, oT.n, kT), rT = DT(KT, rT, oT.v[0], kT), rT = DT(KT, rT, oT.v[1], kT), rT = DT(KT, rT, oT.v[2], kT), rT += 2) : (KT += "\tfacet normal " + oT.n.x + " " + oT.n.y + " " + oT.n.z + "\r\n", KT += "\t\touter loop\r\n", KT += "\t\t\tvertex " + oT.v[0].x + " " + oT.v[0].y + " " + oT.v[0].z + "\r\n", KT += "\t\t\tvertex " + oT.v[1].x + " " + oT.v[1].y + " " + oT.v[1].z + "\r\n", KT += "\t\t\tvertex " + oT.v[2].x + " " + oT.v[2].y + " " + oT.v[2].z + "\r\n", KT += "\t\tendloop\r\n", KT += "\tendfacet\r\n")
          }!zT && BT && (KT += "endsolid " + name + "\r\n")
        }
        if (zT || BT || (KT += "endsolid stlmesh"), oT) {
          const TT = document.createElement("a"),
            oT = new Blob([KT], {
              type: "application/octet-stream"
            });
          TT.href = window.URL.createObjectURL(oT), TT.download = IT + ".stl", TT.click()
        }
        return KT
      }
    }

    function xW(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const zT = [];
      for (let kT = 0; kT < TT.length / IT; kT++) {
        const WT = TT[kT * IT] * (iT ? -1 : 1),
          XT = TT[kT * IT + 1],
          BT = TT[kT * IT + 2];
        zT.push(`(${WT.toPrecision(oT.precision)}, ${XT.toPrecision(oT.precision)}, ${BT.toPrecision(oT.precision)})`)
      }
      return zT.join(", ")
    }

    function cW(TT, oT) {
      const IT = [];
      for (let iT = 0; iT < TT.length / 2; iT++) {
        const zT = TT[2 * iT],
          kT = TT[2 * iT + 1];
        IT.push(`(${zT.toPrecision(oT.precision)}, ${(1-kT).toPrecision(oT.precision)})`)
      }
      return IT.join(", ")
    }

    function KW(TT, oT, IT, iT) {
      const zT = TT.getVerticesData(ST.d.PositionKind),
        kT = TT.getVerticesData(ST.d.NormalKind);
      if (zT && kT) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${IT}"\n\t\tint[] faceVertexCounts = [${function(TT){const oT=TT.hWT()?.length?TT.getTotalIndices():TT.getTotalVertices();return Array(oT/3).fill(3).join(", ")}(TT)}]\n\t\tint[] faceVertexIndices = [${function(TT){const oT=TT.hWT(),IT=oT?.length??TT.getTotalVertices(),iT=[];if(null!==oT)for(let zT=0;zT<IT;zT++)iT.push(oT[zT]);else for(let zT=0;zT<IT;zT++)iT.push(zT);return iT.join(", ")}(TT)}]\n\t\tnormal3f[] normals = [${xW(kT,oT,void 0,iT)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${xW(zT,oT,void 0,iT)}]\n        ${function(TT,oT){let IT="";for(let zT=0;zT<4;zT++){const iT=zT>0?zT:"",kT=TT.getVerticesData(ST.d.UVKind+(iT?iT+1:""));kT&&(IT+=`\n\t\ttexCoord2f[] primvars:st${iT} = [${cW(kT,oT)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const iT=TT.getVerticesData(ST.d.ColorKind);return iT&&(IT+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        xW(iT, oT, iT.length / TT.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),IT}(TT,oT)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function MW(TT, oT, IT, iT) {
      return `\n        def "Geometry"\n        {\n        ${KW(TT,oT,IT,iT)}\n        }\n        `
    }

    function rW(TT) {
      let oT = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return oT += TT, fflate.strToU8(oT)
    }

    function AW(TT) {
      const oT = TT.m;
      return `( ${gW(oT,0)}, ${gW(oT,4)}, ${gW(oT,8)}, ${gW(oT,12)} )`
    }

    function gW(TT, oT) {
      return `(${TT[oT+0]}, ${TT[oT+1]}, ${TT[oT+2]}, ${TT[oT+3]})`
    }

    function hW(TT, oT) {
      const IT = "Object_" + TT.uniqueId,
        iT = AW(oT);
      return `def Xform "${IT}" (\n\tprepend references = @./geometries/Geometry_${TT.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${iT}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${TT.material.uniqueId}>\n}\n\n`
    }

    function wW(TT) {
      switch (TT) {
        case eT.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case eT.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case eT.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function mW(TT) {
      return `(${TT.x}, ${TT.y})`
    }

    function eW(TT) {
      return `(${TT.r}, ${TT.g}, ${TT.b})`
    }

    function RW(TT) {
      return "image/jpeg" === TT || "image/png" === TT
    }

    function uW(TT, oT, IT, zT, kT, WT) {
      const XT = TT.getInternalTexture().uniqueId + "_" + TT.invertY,
        FT = TT.mimeType || (0, BT.d)(TT.getInternalTexture()?.url ?? ""),
        ST = RW(FT) ? FT : "image/png",
        DT = "image/jpeg" === ST ? "jpg" : "png";
      kT[XT] = {
        texture: TT,
        mimeType: ST,
        ext: DT
      };
      const LT = TT.coordinatesIndex > 0 ? "st" + TT.coordinatesIndex : "st",
        xT = new iT.Vector2(TT.uScale, TT.vScale),
        cT = new iT.Vector2(TT.uOffset, TT.vOffset),
        KT = TT.wAng,
        MT = Math.sin(KT),
        rT = Math.cos(KT);
      return cT.y = 1 - cT.y - xT.y, cT.x += MT * xT.x, cT.y += (1 - rT) * xT.y, `\n    def Shader "PrimvarReader_${IT}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${LT}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${IT}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${oT.uniqueId}/PrimvarReader_${IT}.outputs:result>\n        float inputs:rotation = ${(KT*(180/Math.PI)).toFixed(WT.precision)}\n        float2 inputs:scale = ${mW(xT)}\n        float2 inputs:translation = ${mW(cT)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${TT.uniqueId}_${IT}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${XT}.${DT}@\n        float2 inputs:st.connect = </Root/Materials/Material_${oT.uniqueId}/Transform2d_${IT}.outputs:result>\n        ${zT?"float4 inputs:scale = "+function(TT){return`(${TT.r}, ${TT.g}, ${TT.b}, 1.0)`}(zT):""}\n        token inputs:sourceColorSpace = "${TT.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${wW(TT.wrapU)}"\n        token inputs:wrapT = "${wW(TT.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${oT.needAlphaBlending()||oT.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function vW(TT, oT, IT) {
      const iT = "\t\t\t",
        zT = [],
        kT = [],
        {
          diffuseMap: WT,
          diffuse: XT,
          alphaCutOff: BT,
          emissiveMap: FT,
          emissive: ST,
          normalMap: DT,
          roughnessMap: LT,
          roughnessChannel: xT,
          roughness: cT,
          metalnessMap: KT,
          metalnessChannel: rT,
          metalness: AT,
          aoMap: gT,
          aoMapChannel: hT,
          aoMapIntensity: wT,
          alphaMap: mT,
          ior: eT,
          clearCoatEnabled: RT,
          clearCoat: uT,
          clearCoatMap: vT,
          clearCoatRoughness: ET,
          clearCoatRoughnessMap: fT
        } = function(TT) {
          const oT = {
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
          return TT instanceof Xi.StandardMaterial ? {
            ...oT,
            diffuseMap: TT.diffuseTexture,
            diffuse: TT.diffuseColor,
            alphaCutOff: TT.alphaCutOff,
            emissiveMap: TT.emissiveTexture,
            emissive: TT.emissiveColor,
            roughness: 1,
            alphaMap: TT.opacityTexture
          } : TT instanceof mo ? {
            ...oT,
            diffuseMap: TT._albedoTexture,
            diffuse: TT._albedoColor,
            alphaCutOff: TT._alphaCutOff,
            emissiveMap: TT._emissiveTexture,
            emissive: TT._emissiveColor,
            normalMap: TT._bumpTexture,
            roughnessMap: TT._metallicTexture,
            roughnessChannel: TT._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: TT._roughness ?? 1,
            metalnessMap: TT._metallicTexture,
            metalnessChannel: TT._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: TT._metallic ?? 0,
            aoMap: TT._ambientTexture,
            aoMapChannel: TT._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: TT._ambientTextureStrength,
            alphaMap: TT._opacityTexture,
            ior: TT.subSurface.indexOfRefraction,
            clearCoatEnabled: TT.clearCoat.isEnabled,
            clearCoat: TT.clearCoat.intensity,
            clearCoatMap: TT.clearCoat.texture,
            clearCoatRoughness: TT.clearCoat.roughness,
            clearCoatRoughnessMap: TT.clearCoat.useRoughnessFromMainTexture ? TT.clearCoat.texture : TT.clearCoat.textureRoughness
          } : oT
        }(TT);
      return null !== WT ? (zT.push(`${iT}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${WT.uniqueId}_diffuse.outputs:rgb>`), TT.needAlphaBlending() ? zT.push(`${iT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${WT.uniqueId}_diffuse.outputs:a>`) : TT.needAlphaTesting() && (zT.push(`${iT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${WT.uniqueId}_diffuse.outputs:a>`), zT.push(`${iT}float inputs:opacityThreshold = ${BT}`)), kT.push(uW(WT, TT, "diffuse", XT, oT, IT))) : zT.push(`${iT}color3f inputs:diffuseColor = ${eW(XT||MT.Color3.White())}`), null !== FT ? (zT.push(`${iT}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${FT.uniqueId}_emissive.outputs:rgb>`), kT.push(uW(FT, TT, "emissive", ST, oT, IT))) : ST && ST.toLuminance() > 0 && zT.push(`${iT}color3f inputs:emissiveColor = ${eW(ST)}`), null !== DT && (zT.push(`${iT}normal3f inputs:normal.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${DT.uniqueId}_normal.outputs:rgb>`), kT.push(uW(DT, TT, "normal", null, oT, IT))), null !== gT && (zT.push(`${iT}float inputs:occlusion.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${gT.uniqueId}_occlusion.outputs:${hT}>`), kT.push(uW(gT, TT, "occlusion", new MT.Color3(wT, wT, wT), oT, IT))), null !== LT ? (zT.push(`${iT}float inputs:roughness.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${LT.uniqueId}_roughness.outputs:${xT}>`), kT.push(uW(LT, TT, "roughness", new MT.Color3(cT, cT, cT), oT, IT))) : zT.push(`${iT}float inputs:roughness = ${cT}`), null !== KT ? (zT.push(`${iT}float inputs:metallic.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${KT.uniqueId}_metallic.outputs:${rT}>`), kT.push(uW(KT, TT, "metallic", new MT.Color3(AT, AT, AT), oT, IT))) : zT.push(`${iT}float inputs:metallic = ${AT}`), null !== mT ? (zT.push(`${iT}float inputs:opacity.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${mT.uniqueId}_opacity.outputs:r>`), zT.push(`${iT}float inputs:opacityThreshold = 0.0001`), kT.push(uW(mT, TT, "opacity", null, oT, IT))) : zT.push(`${iT}float inputs:opacity = ${TT.alpha}`), RT && (null !== vT ? (zT.push(`${iT}float inputs:clearcoat.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${vT.uniqueId}_clearcoat.outputs:r>`), kT.push(uW(vT, TT, "clearcoat", new MT.Color3(uT, uT, uT), oT, IT))) : zT.push(`${iT}float inputs:clearcoat = ${uT}`), null !== fT ? (zT.push(`${iT}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${TT.uniqueId}/Texture_${fT.uniqueId}_clearcoatRoughness.outputs:g>`), kT.push(uW(fT, TT, "clearcoatRoughness", new MT.Color3(ET, ET, ET), oT, IT))) : zT.push(`${iT}float inputs:clearcoatRoughness = ${ET}`)), zT.push(`${iT}float inputs:ior = ${eT}`), `\n\tdef Material "Material_${TT.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${zT.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${TT.uniqueId}/PreviewSurface.outputs:surface>\n\n${kT.join("\n")}\n\n\t}\n`
    }

    function EW(TT) {
      TT.computeWorldMatrix(!0);
      const oT = TT.getWorldMatrix().clone(),
        IT = TT.pC().useRightHandedSystem;
      let iT = TT.material?._getEffectiveOrientation(TT) ?? TT.sideOrientation,
        WT = !IT,
        XT = TT.parent;
      for (; XT;) {
        if (OI(XT, IT) && null === XT.parent) {
          IT || (oT.multiplyToRef(XT.getWorldMatrix().invert(), oT), iT = iT === kT.c.ClockWiseSideOrientation ? kT.c.CounterClockWiseSideOrientation : kT.c.ClockWiseSideOrientation), WT = !1;
          break
        }
        XT = XT.parent
      }
      return oT.determinant() < 0 && zT.Tools.Warn(`Mesh ${TT.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: oT,
        windingOrder: iT === kT.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: WT
      }
    }
    async function fW(TT, oT, IT) {
      const kT = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...oT
      };
      "undefined" === typeof fflate && await zT.Tools.LoadScriptAsync(kT.fflateUrl);
      const WT = {};
      WT[kT.modelFileName] = null;
      let XT = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      XT += function(TT) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===TT.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${TT.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${TT.planeAnchoringAlignment}"`:""}\n            `
      }(kT);
      const BT = {};
      for (const iT of TT.meshes) {
        if (0 === iT.getTotalVertices()) continue;
        const TT = iT,
          oT = TT.geometry,
          FT = TT.material;
        if (!FT || !oT || IT && !IT(TT)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(FT.getClassName())) {
          const IT = "geometries/Geometry_" + oT.uniqueId + ".usda",
            {
              matrix: iT,
              windingOrder: zT,
              convertToRightHanded: ST
            } = EW(TT);
          if (!(IT in WT)) {
            const TT = MW(oT, kT, zT, ST);
            WT[IT] = rW(TT)
          }
          FT.uniqueId in BT || (BT[FT.uniqueId] = FT), XT += hW(TT, iT)
        } else zT.Tools.Warn("USDZExportAsync does not support this material type: " + FT.getClassName())
      }
      TT.activeCamera && kT.exportCamera && (XT += function(TT, oT) {
        const IT = "Camera_" + TT.uniqueId,
          zT = AW(iT.Matrix.RotationY(Math.PI).multiply(TT.getWorldMatrix()));
        if (TT.mode === eT.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${IT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${zT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(oT.precision)}, ${TT.maxZ.toPrecision(oT.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(TT.orthoLeft||1)+Math.abs(TT.orthoRight||1))).toPrecision(oT.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(TT.orthoTop||1)+Math.abs(TT.orthoBottom||1))).toPrecision(oT.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const iT = TT.Zc().getAspectRatio(TT),
            kT = oT.cameraSensorWidth || 35;
          return `def Camera "${IT}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${zT}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${TT.minZ.toPrecision(oT.precision)}, ${TT.maxZ.toPrecision(oT.precision)})\n\t\t\tfloat focalLength = ${(kT/(2*Math.tan(.5*TT.fov))).toPrecision(oT.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(kT*iT).toPrecision(oT.precision)}\n\t\t\tfloat verticalAperture = ${(kT/iT).toPrecision(oT.precision)}            \n\t\t}\n\t\n\t`
        }
      }(TT.activeCamera, kT)), XT += "\n            }\n        }";
      const FT = {};
      XT += function(TT, oT, IT) {
        const iT = [];
        for (const zT in TT) {
          const kT = TT[zT];
          iT.push(vW(kT, oT, IT))
        }
        return `\n    def "Materials"\n{\n${iT.join("")}\n}\n\n`
      }(BT, FT, kT), XT += "\n    }", WT[kT.modelFileName] = fflate.strToU8(XT);
      for (const iT in FT) {
        const {
          texture: TT,
          ext: oT,
          mimeType: IT
        } = FT[iT], zT = await gI(TT);
        if (zT && RW(zT.mimeType) && zT.mimeType === IT) WT[`textures/Texture_${iT}.${oT}`] = new Uint8Array(zT.data);
        else {
          const zT = TT.getSize(),
            kT = await (0, hT.d)(TT),
            XT = await RT.DumpTools.DumpDataAsync(zT.width, zT.height, kT, IT, void 0, !1, !0);
          WT[`textures/Texture_${iT}.${oT}`] = new Uint8Array(XT).slice()
        }
      }
      let ST = 0;
      for (const iT in WT) {
        const TT = WT[iT];
        if (!TT) continue;
        ST += 34 + iT.length;
        const oT = 63 & ST;
        if (4 !== oT) {
          const IT = new Uint8Array(64 - oT);
          WT[iT] = [TT, {
            extra: {
              12345: IT
            }
          }]
        }
        ST = TT.length
      }
      return fflate.zipSync(WT, {
        level: 0
      })
    }
    var CW = IT(40016);
    class jW {
      static Export(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (!TT || 0 === TT.bones.length) throw new Error("Invalid or empty skeleton provided");
        let iT = oT;
        oT && 0 !== oT.length || (iT = TT.animations.map((TT => TT.name)));
        let zT = null;
        for (const FT of iT) {
          const oT = TT.getAnimationRange(FT);
          oT && (zT = zT ? new CW.e("animation-range", Math.min(zT.from, oT.from), Math.max(zT.to, oT.to)) : oT)
        }
        if (!zT && (TT.animations.length > 0 && (zT = TT.getAnimationRange(TT.animations[0].name)), !zT)) throw new Error("No animation range found in skeleton");
        const kT = IT || 1 / (TT.animations[0]?.framePerSecond || 30),
          WT = this._BuildBoneHierarchy(TT, iT);
        let XT = 0;
        for (const FT of WT) FT.positionKeys.length > 0 && (XT = Math.max(XT, FT.positionKeys.length)), FT.rotationKeys.length > 0 && (XT = Math.max(XT, FT.rotationKeys.length));
        0 === XT && (XT = Math.floor((zT.to - zT.from) / kT) + 1);
        let BT = "";
        return BT += "HIERARCHY\n", BT += this._ExportHierarchy(WT, 0), BT += "MOTION\n", BT += `Frames: ${XT}\n`, BT += `Frame Time: ${kT.toFixed(6)}\n`, BT += this._ExportMotionData(WT, XT, 0, iT), BT
      }
      static _BuildBoneHierarchy(TT, oT) {
        const IT = new Map,
          iT = [];
        for (const zT of TT.bones) {
          const TT = {
            bone: zT,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          IT.set(zT, TT)
        }
        for (const zT of TT.bones) {
          const TT = IT.get(zT);
          if (zT.animations.length > 0)
            for (const IT of zT.animations) oT.includes(IT.name) && ("position" === IT.targetProperty ? (TT.hasPositionChannels = !0, TT.positionKeys.push(...IT.getKeys())) : "rotationQuaternion" === IT.targetProperty && (TT.hasRotationChannels = !0, TT.rotationKeys.push(...IT.getKeys())));
          if (zT.getParent()) {
            const oT = IT.get(zT.getParent());
            oT && oT.children.push(TT)
          } else iT.push(TT)
        }
        return iT
      }
      static _ExportHierarchy(TT, oT) {
        let IT = "";
        const iT = "    ".repeat(oT);
        for (const zT of TT) {
          const TT = zT.bone;
          if (this._IsEndSite(zT)) {
            IT += `${iT}End Site\n`, IT += `${iT}{\n`;
            const oT = this._GetBoneOffset(TT);
            IT += `${iT}    OFFSET ${oT.x.toFixed(6)} ${oT.y.toFixed(6)} ${oT.z.toFixed(6)}\n`, IT += `${iT}}\n`
          } else {
            IT += `${0===oT?"ROOT":`${iT}JOINT`} ${TT.name}\n`, IT += `${iT}{\n`;
            const kT = this._GetBoneOffset(TT);
            IT += `${iT}    OFFSET ${kT.x.toFixed(6)} ${kT.y.toFixed(6)} ${kT.z.toFixed(6)}\n`;
            const WT = [];
            zT.hasPositionChannels && WT.push("Xposition", "Yposition", "Zposition"), zT.hasRotationChannels && WT.push("Zrotation", "Xrotation", "Yrotation"), WT.length > 0 && (IT += `${iT}    CHANNELS ${WT.length} ${WT.join(" ")}\n`), zT.children.length > 0 && (IT += this._ExportHierarchy(zT.children, oT + 1)), IT += `${iT}}\n`
          }
        }
        return IT
      }
      static _IsEndSite(TT) {
        return 0 === TT.children.length
      }
      static _GetBoneOffset(TT) {
        try {
          if (!TT.getParent()) return TT.getRestMatrix().getTranslation();
          return TT.getLocalMatrix().getTranslation()
        } catch (oT) {
          return iT.sc.Zero()
        }
      }
      static _ExportMotionData(TT, oT, IT, iT) {
        let zT = "";
        for (let kT = 0; kT < oT; kT++) {
          const oT = [];
          this._CollectFrameValues(TT, kT + IT, oT, iT), zT += oT.map((TT => TT.toFixed(6))).join(" ") + "\n"
        }
        return zT
      }
      static _CollectFrameValues(TT, oT, IT, iT) {
        for (const zT of TT)
          if (!this._IsEndSite(zT)) {
            if (zT.hasPositionChannels) {
              const TT = this._GetPositionAtFrameIndex(zT.positionKeys, oT);
              IT.push(TT.x, TT.y, TT.z)
            }
            if (zT.hasRotationChannels) {
              const TT = this._GetRotationAtFrameIndex(zT.rotationKeys, oT),
                iT = this._QuaternionToEuler(TT);
              IT.push(iT.z, iT.x, iT.y)
            }
            zT.children.length > 0 && this._CollectFrameValues(zT.children, oT, IT, iT)
          }
      }
      static _GetPositionAtFrameIndex(TT, oT) {
        if (0 === TT.length) return iT.sc.Zero();
        return TT[Math.max(0, Math.min(oT, TT.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(TT, oT) {
        if (0 === TT.length) return iT.Quaternion.Identity();
        return TT[Math.max(0, Math.min(oT, TT.length - 1))].value.clone()
      }
      static _QuaternionToEuler(TT) {
        const oT = new iT.Matrix;
        TT.toRotationMatrix(oT);
        const IT = oT.m;
        let kT, WT, XT;
        const BT = Math.sqrt(IT[0] * IT[0] + IT[1] * IT[1]);
        return BT > YI.d ? (kT = Math.atan2(IT[6], IT[10]), WT = Math.atan2(-IT[2], BT), XT = Math.atan2(IT[1], IT[0])) : (kT = Math.atan2(-IT[9], IT[5]), WT = Math.atan2(-IT[2], BT), XT = 0), new iT.sc(zT.Tools.ToDegrees(kT), zT.Tools.ToDegrees(WT), zT.Tools.ToDegrees(XT))
      }
    }

    function JW(TT) {
      return "string" === typeof TT?.name
    }
    const UW = Symbol("__xml:meta$__"),
      aW = Symbol("__xml:name$__");

    function YW(TT, oT) {
      Object.prototype.hasOwnProperty.call(TT.metadata, UW) || (TT.metadata[UW] = []), TT.metadata[UW].push(oT)
    }

    function QW(TT) {
      return (oT, IT) => {
        oT[aW] = TT
      }
    }

    function OW() {
      return (TT, oT) => YW(oT, {
        kind: "none",
        prop: String(oT.name),
        ignore: !0
      })
    }

    function HW(TT) {
      return (oT, IT) => YW(IT, {
        kind: "attr",
        prop: String(IT.name),
        ...TT
      })
    }

    function nW(TT) {
      return (oT, IT) => YW(IT, {
        kind: "elem",
        prop: String(IT.name),
        ...TT
      })
    }

    function qW(TT) {
      const oT = "function" === typeof TT ? TT : TT?.constructor,
        IT = oT?.[Symbol.metadata];
      if (!IT) return [];
      const iT = [];
      let zT = IT;
      for (; zT;) Object.prototype.hasOwnProperty.call(zT, UW) && iT.push(...zT[UW]), zT = Object.getPrototypeOf(zT);
      return iT
    }

    function ZW(TT) {
      const oT = TT?.constructor?.[aW];
      return oT || void 0
    }

    function lW(TT) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(TT)
    }

    function sW(TT) {
      if (JW(TT)) return TT;
      const oT = (TT ?? "").trim();
      if (!oT) return {
        name: ""
      };
      const IT = oT.indexOf(":");
      if (-1 === IT) return {
        name: oT
      };
      if (-1 !== oT.indexOf(":", IT + 1)) return {
        name: oT
      };
      const iT = oT.slice(0, IT),
        zT = oT.slice(IT + 1);
      return lW(iT) && lW(zT) ? {
        ns: iT,
        name: zT
      } : {
        name: oT
      }
    }

    function tW(TT, oT) {
      return oT ? `${oT}:${TT}` : TT
    }
    const GW = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      pW = Object.freeze({
        number: GW
      });

    function bW(TT) {
      const oT = TT?.eps ?? GW.eps;
      return {
        eps: oT,
        maxDecimalsCap: TT?.maxDecimalsCap ?? GW.maxDecimalsCap,
        trimTrailingZeros: TT?.trimTrailingZeros ?? GW.trimTrailingZeros,
        fixedDecimals: TT?.fixedDecimals,
        allowScientific: TT?.allowScientific ?? GW.allowScientific,
        snapNearZero: TT?.snapNearZero ?? GW.snapNearZero,
        zeroThreshold: TT?.zeroThreshold ?? oT,
        perAttributeEps: TT?.perAttributeEps
      }
    }

    function yW(TT) {
      return {
        number: bW(TT?.number)
      }
    }
    class NW {
      constructor(TT) {
        if (this.o = TT, this._o = TT.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(TT) {
        if (!Number.isFinite(TT)) throw new Error(`Cannot format non-finite number: ${TT}`);
        const oT = this._o,
          IT = this._clampInt(oT.maxDecimalsCap ?? 15, 0, 20),
          iT = oT.trimTrailingZeros ?? !0,
          zT = oT.snapNearZero ?? !0,
          kT = oT.zeroThreshold ?? oT.eps,
          WT = 1 / oT.eps;
        let XT, BT = Math.round(TT * WT) / WT;
        if (Object.is(BT, -0) && (BT = 0), zT && Math.abs(BT) <= kT && (BT = 0), XT = void 0 !== oT.fixedDecimals ? this._clampInt(oT.fixedDecimals, 0, IT) : this._clampInt(Math.ceil(-Math.log10(oT.eps)), 0, IT), oT.allowScientific, 0 === XT) return String(Math.trunc(BT));
        let FT = BT.toFixed(XT);
        if (iT && void 0 === oT.fixedDecimals && (FT = FT.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(FT)) throw new Error(`Scientific notation not allowed in XML output: ${FT}`);
        return FT
      }
      _clampInt(TT, oT, IT) {
        return Number.isFinite(TT) ? (TT = Math.trunc(TT), Math.max(oT, Math.min(IT, TT))) : oT
      }
    }

    function PW(TT) {
      return TT instanceof Date
    }

    function dW(TT) {
      return "string" === typeof TT
    }

    function VW(TT) {
      return "string" === typeof TT || "number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT || PW(TT)
    }

    function TX(TT) {
      return "number" === typeof TT || "boolean" === typeof TT || "bigint" === typeof TT || PW(TT)
    }
    class oX {
      constructor(TT, oT) {
        this._ns = new Map, this._prefixCount = 0, this._builder = TT, this._format = yW(oT), this._nFmt = new NW(this._format)
      }
      withNamespace() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        for (const iT of oT) this._assignNamespace(iT);
        return this
      }
      serialize(TT, oT) {
        if (!(oT = oT ?? ZW(TT))) throw new Error("can not find name for given object");
        const IT = sW(oT);
        IT.ns && this._assignNamespace(IT.ns, "xmlns"), this._gatherNamespaces(TT, new WeakSet);
        const iT = this._builder.ele(null, IT.name);
        for (const [zT, kT] of Array.from(this._ns.entries())) iT.att("xmlns", kT, zT);
        this._writeObjectContent(iT, TT, (new WeakSet).add(TT)), this._builder.end()
      }
      _writeObject(TT, oT, IT) {
        if (IT.has(oT)) return;
        if (IT.add(oT), Array.isArray(oT)) {
          for (const iT of oT) TX(iT) || (dW(iT) ? this._builder.text(iT) : this._writeObject(TT, iT, IT));
          return
        }
        const iT = ZW(oT);
        if (!iT) return;
        const zT = sW(iT),
          kT = this._getPrefix(zT),
          WT = tW(zT.name, kT);
        TT.ele(null, WT), this._writeObjectContent(TT, oT, IT), this._builder.end()
      }
      _getPrefix(TT) {
        if (TT.ns) {
          const oT = this._ns.get(TT.ns.toLowerCase());
          if ("xmlns" !== oT) return oT
        }
      }
      _writeObjectContent(TT, oT, IT) {
        const iT = qW(oT) ?? [],
          zT = new Map;
        for (const WT of iT) {
          const TT = zT.get(WT.prop) ?? [];
          TT.push(WT), zT.set(WT.prop, TT)
        }
        const kT = Object.keys(oT).sort(((TT, oT) => {
          const IT = (zT.get(TT) ?? []).some((TT => "attr" === TT.kind));
          return IT === (zT.get(oT) ?? []).some((TT => "attr" === TT.kind)) ? 0 : IT ? -1 : 1
        }));
        for (const WT of kT) {
          const iT = oT[WT];
          if (null === iT || void 0 === iT) continue;
          const kT = zT.get(WT);
          if (kT) {
            if (kT.some((TT => !0 === TT.ignore || "none" === TT.kind))) continue;
            for (const oT of kT) {
              const IT = oT.name ?? oT.prop.toLowerCase();
              if (IT) switch (oT.kind) {
                case "attr": {
                  let zT = null;
                  if ("number" === typeof iT && this._nFmt && (zT = this._nFmt.toString(iT)), oT.formatter) {
                    zT = new oT.formatter(this._format).toString(iT)
                  }
                  if (zT = zT ?? iT.toString(), zT) {
                    const oT = sW(IT),
                      iT = this._getPrefix(oT),
                      kT = tW(oT.name, iT);
                    TT.att(null, kT, zT)
                  }
                  break
                }
              }
            }
          } else TX(iT) || (dW(iT) ? this._builder.text(iT) : this._writeObject(TT, iT, IT))
        }
      }
      _gatherNamespaces(TT, oT) {
        if (oT.has(TT)) return;
        if (oT.add(TT), Array.isArray(TT)) {
          for (const IT of TT) VW(IT) || this._gatherNamespaces(IT, oT);
          return
        }
        const IT = ZW(TT);
        IT && this._assignNamespace(IT);
        const iT = qW(TT) ?? [],
          zT = new Map;
        for (const WT of iT) {
          const TT = zT.get(WT.prop) ?? [];
          TT.push(WT), zT.set(WT.prop, TT)
        }
        const kT = [];
        for (const WT of Object.keys(TT)) {
          const oT = TT[WT];
          if (null === oT || void 0 === oT) continue;
          const IT = zT.get(WT);
          if (IT) {
            if (IT.some((TT => !0 === TT.ignore || "none" === TT.kind))) continue;
            for (const TT of IT) TT.name && this._assignNamespace(TT.name)
          }
          kT.push(oT)
        }
        for (const WT of kT) VW(WT) || this._gatherNamespaces(WT, oT)
      }
      _assignNamespace(TT, oT) {
        const IT = sW(TT);
        if (IT?.ns) {
          const TT = IT.ns.toLowerCase();
          this._ns.get(TT) || this._ns.set(TT, oT ?? this._buildNsPrefix(TT))
        } else if ("xmlns" === oT) {
          const TT = IT.name.toLowerCase();
          this._ns.get(TT) || this._ns.set(TT, oT ?? this._buildNsPrefix(TT))
        }
      }
      _buildNsPrefix(TT) {
        let oT, IT = !1;
        do {
          oT = "ns" + this._prefixCount++;
          for (const TT of Array.from(this._ns.values()))
            if (TT === oT) {
              IT = !0;
              break
            }
        } while (IT);
        return oT
      }
    }
    class IX {}
    var iX;
    IX.OpenTag = "<", IX.CloseTag = ">", IX.Slash = "/", IX.Question = "?", IX.Quote = '"', IX.Equal = "=", IX.Space = " ", IX.Semicolon = ":", IX.Dec = "<?xml", IX.Xml = "xml", IX.Xmlns = "xmlns", IX.Xsi = "xsi", IX.VersionKeyword = "version", IX.EncodingKeyword = "encoding", IX.StandaloneKeyword = "standalone",
      function(TT) {
        TT[TT.Declaration = 0] = "Declaration", TT[TT.Tag = 1] = "Tag", TT[TT.Attribute = 2] = "Attribute", TT[TT.Text = 3] = "Text"
      }(iX || (iX = {}));
    class zX {
      constructor(TT) {
        this._ctxStack = [], this._d = 0, this._w = TT
      }
      dec(TT, oT, IT) {
        return this._w.write(IX.Dec), this._writeAttStr(IX.VersionKeyword, TT), oT && this._writeAttStr(IX.EncodingKeyword, oT), void 0 !== IT && this._writeAttStr(IX.StandaloneKeyword, IT ? "yes" : "no"), this._w.write(IX.Question, IX.CloseTag), this
      }
      att(TT, oT, IT) {
        const iT = this._peekContext();
        if (!iT) throw new Error("att() without open element");
        if (iT.closed) throw new Error(`att() after start tag closed for <${iT.name}>`);
        if (this._isXmlnsDecl(TT, oT)) {
          if (oT === IX.Xmlns) iT.defaultNs = IT, this._registerNamespace(iT, "", IT), this._writeAttStr(IX.Xmlns, IT);
          else if (TT) this._registerNamespace(iT, oT, IT), this._writeAttStr(`${TT}:${oT}`, IT);
          else {
            const TT = oT.slice(6);
            this._registerNamespace(iT, TT, IT), this._writeAttStr(oT, IT)
          }
          return iT.lastToken = iX.Attribute, this
        }
        let zT = oT;
        if (TT) {
          zT = `${this._ensurePrefixDeclared(iT,TT)}:${oT}`
        }
        return iT.lastToken = iX.Attribute, this._writeAttStr(zT, IT), this
      }
      ele(TT, oT) {
        const IT = this._peekContext();
        IT && this._closeOpenTagIfNeeded(IT);
        let iT = oT;
        if (TT) {
          iT = `${this._lookupPrefix(TT)??TT}:${oT}`
        }
        return this._pushContext(iT, ++this._d), this._w.write(IX.OpenTag, iT), this
      }
      text(TT) {
        const oT = this._peekContext();
        if (!oT) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(oT), oT.lastToken = iX.Text, this._w.write(this._escText(TT)), this
      }
      end() {
        const TT = this._popContext();
        return TT && (this._d--, TT.closed ? this._w.write(IX.OpenTag, IX.Slash, TT.name, IX.CloseTag) : this._w.write(IX.Slash, IX.CloseTag)), this
      }
      _pushContext(TT, oT) {
        const IT = new zX.Context(TT, oT);
        return this._ctxStack.push(IT), IT
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
      _writeAttStr(TT, oT) {
        this._w.write(IX.Space, TT, IX.Equal, IX.Quote, this._escAttr(oT), IX.Quote)
      }
      _lookupPrefix(TT) {
        let oT = this._ctxStack.length - 1;
        if (oT >= 0)
          do {
            const IT = this._ctxStack[oT--],
              iT = IT.ns2prefix?.get(TT);
            if (iT) return iT
          } while (oT >= 0)
      }
      _escText(TT) {
        return TT.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(TT) {
        return this._escText(TT).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(TT, oT) {
        if (TT) return TT === IX.Xmlns;
        const IT = oT.length,
          iT = IX.Xmlns.length;
        return IT >= iT && (oT.startsWith(IX.Xmlns) && (oT.length == iT || oT[iT] == IX.Semicolon))
      }
      _registerNamespace(TT, oT, IT) {
        if (oT === IX.Xml || oT === IX.Xmlns) throw new Error(`reserved prefix '${oT}'`);
        const iT = TT.prefix2ns.get(oT);
        if (iT && iT !== IT) throw new Error(`prefix '${oT}' already bound to a different namespace`);
        TT.ns2prefix.get(IT) || TT.ns2prefix.set(IT, oT), TT.prefix2ns.set(oT, IT)
      }
      _allocPrefix(TT) {
        let oT = 1;
        for (;;) {
          const IT = "ns" + oT++;
          if (!TT.prefix2ns.has(IT)) return IT
        }
      }
      _ensurePrefixDeclared(TT, oT) {
        const IT = this._lookupPrefix(oT);
        if (IT) return IT;
        if (TT.closed) throw new Error(`can not declare namespace after start tag closed for <${TT.name}>`);
        const iT = this._allocPrefix(TT);
        return this._writeAttStr(`${IX.Xmlns}:${iT}`, oT), this._registerNamespace(TT, iT, oT), iT
      }
      _closeOpenTagIfNeeded(TT) {
        TT.closed || (this._w.write(IX.CloseTag), TT.closed = !0)
      }
    }
    zX.Context = class {
      constructor(TT, oT) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = TT, this.depth = oT
      }
    };
    class kX {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        if (0 === oT.length) return this;
        const iT = oT.join("");
        return this._chunks.push(iT), this.count += iT.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class WX {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = TT, this._opts = oT, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        if (0 === oT.length) return this;
        const iT = oT.join("");
        if (0 === iT.length) return this;
        this._pending += iT, this._pendingChars += iT.length;
        const zT = this._opts.flushChars ?? 65536;
        return this._pendingChars >= zT && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const TT = this._encoder.encode(this._pending);
        return this._sink.push(TT), this.count += TT.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const XX = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      BX = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var FX, SX;
    ! function(TT) {
      TT.micron = "micron", TT.millimeter = "millimeter", TT.centimeter = "centimeter", TT.inch = "inch", TT.foot = "foot", TT.meter = "meter"
    }(FX || (FX = {})),
    function(TT) {
      TT.model = "model", TT.solidsupport = "solidsupport", TT.support = "support", TT.surface = "surface", TT.other = "other"
    }(SX || (SX = {}));
    const DX = "http://schemas.openxmlformats.org/package/2006/content-types",
      LX = "http://schemas.openxmlformats.org/package/2006/relationships";
    var xX;
    ! function(TT) {
      TT.Relationships = "application/vnd.openxmlformats-package.relationships+xml", TT.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", TT.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", TT.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", TT.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", TT.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", TT.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", TT.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", TT.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", TT.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", TT.Png = "image/png", TT.Jpeg = "image/jpeg", TT.Tiff = "image/tiff", TT.Xml = "application/xml"
    }(xX || (xX = {}));
    const cX = "_rels/",
      KX = "3D/",
      MX = "3dmodel.model",
      rX = ".rels",
      AX = "[Content_Types].xml";
    class gX {
      static IsKnown(TT) {
        return gX.Known.has(TT)
      }
      static IsThreeDimModel(TT) {
        return TT === gX.ThreeDimModel
      }
    }
    gX.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", gX.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", gX.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", gX.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", gX.Known = new Set([gX.ThreeDimModel, gX.Thumbnail, gX.PrintTicket, gX.MustPreserve]);
    let hX = (() => {
        let TT, oT, IT = [QW({
            ns: DX,
            name: "Types"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.items = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfContentTypes"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      wX = (() => {
        let TT, oT, IT, iT, zT = [QW({
            ns: DX,
            name: "Default"
          })],
          kT = [],
          WT = [],
          XT = [],
          BT = [],
          FT = [];
        oT = class {
          constructor(TT, oT) {
            this.ext = (0, uT.j)(this, WT, void 0), this.ct = ((0, uT.j)(this, XT), (0, uT.j)(this, BT, void 0)), (0, uT.j)(this, FT), this.ext = TT, this.ct = oT
          }
        };
        return (0, uT.n)(oT, "ThreeMfContentType"), (() => {
          const ST = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: {
              ns: DX,
              name: "Extension"
            }
          })], iT = [HW({
            name: {
              ns: DX,
              name: "ContentType"
            }
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: TT => "ext" in TT,
              get: TT => TT.ext,
              set: (TT, oT) => {
                TT.ext = oT
              }
            },
            metadata: ST
          }, WT, XT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: TT => "ct" in TT,
              get: TT => TT.ct,
              set: (TT, oT) => {
                TT.ct = oT
              }
            },
            metadata: ST
          }, BT, FT), (0, uT.h)(null, TT = {
            value: oT
          }, zT, {
            kind: "class",
            name: oT.name,
            metadata: ST
          }, null, kT), oT = TT.value, ST && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ST
          }), (0, uT.j)(oT, kT)
        })(), oT
      })(),
      mX = (() => {
        let TT, oT, IT = [QW({
            ns: LX,
            name: "Relationships"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.items = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfRelationships"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      eX = (() => {
        let TT, oT, IT, iT, zT, kT = [QW({
            ns: LX,
            name: "Relationship"
          })],
          WT = [],
          XT = [],
          BT = [],
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        oT = class {
          constructor(TT, oT, IT) {
            this.id = (0, uT.j)(this, XT, void 0), this.type = ((0, uT.j)(this, BT), (0, uT.j)(this, FT, void 0)), this.target = ((0, uT.j)(this, ST), (0, uT.j)(this, DT, void 0)), (0, uT.j)(this, LT), this.id = TT, this.type = oT, this.target = IT
          }
        };
        return (0, uT.n)(oT, "ThreeMfRelationship"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "Id"
          })], iT = [HW({
            name: "Type"
          })], zT = [HW({
            name: "Target"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, oT) => {
                TT.id = oT
              }
            },
            metadata: xT
          }, XT, BT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, oT) => {
                TT.type = oT
              }
            },
            metadata: xT
          }, FT, ST), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: TT => "target" in TT,
              get: TT => TT.target,
              set: (TT, oT) => {
                TT.target = oT
              }
            },
            metadata: xT
          }, DT, LT), (0, uT.h)(null, TT = {
            value: oT
          }, kT, {
            kind: "class",
            name: oT.name,
            metadata: xT
          }, null, WT), oT = TT.value, xT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          }), (0, uT.j)(oT, WT)
        })(), oT
      })();
    class RX {
      constructor(TT, oT, IT) {
        this.contentTypes = TT, this.relationships = oT, this.model = IT
      }
    }
    class uX {
      static Zero() {
        return new uX([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(TT) {
        this.values = TT
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class vX {
      constructor(TT) {
        this.o = TT, this._f = new NW(TT)
      }
      toString(TT) {
        return TT.values.map((TT => this._f.toString(TT))).join(" ")
      }
    }
    let EX = (() => {
        let TT, oT, IT, iT, zT, kT = [QW({
            ns: XX,
            name: "model"
          })],
          WT = [],
          XT = [],
          BT = [],
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        oT = class {
          constructor() {
            this.unit = (0, uT.j)(this, XT, FX.millimeter), this.requiredextensions = ((0, uT.j)(this, BT), (0, uT.j)(this, FT, void 0)), this.recommendedextensions = ((0, uT.j)(this, ST), (0, uT.j)(this, DT, void 0)), this.metadata = (0, uT.j)(this, LT)
          }
        };
        return (0, uT.n)(oT, "ThreeMfModel"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "unit"
          })], iT = [HW({
            name: "requiredextensions"
          })], zT = [HW({
            name: "recommendedextensions"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: TT => "unit" in TT,
              get: TT => TT.unit,
              set: (TT, oT) => {
                TT.unit = oT
              }
            },
            metadata: xT
          }, XT, BT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "requiredextensions" in TT,
              get: TT => TT.requiredextensions,
              set: (TT, oT) => {
                TT.requiredextensions = oT
              }
            },
            metadata: xT
          }, FT, ST), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: TT => "recommendedextensions" in TT,
              get: TT => TT.recommendedextensions,
              set: (TT, oT) => {
                TT.recommendedextensions = oT
              }
            },
            metadata: xT
          }, DT, LT), (0, uT.h)(null, TT = {
            value: oT
          }, kT, {
            kind: "class",
            name: oT.name,
            metadata: xT
          }, null, WT), oT = TT.value, xT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          })
        })(), oT.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, uT.j)(oT, WT), oT
      })(),
      fX = (() => {
        let TT, oT, IT, iT, zT, kT = [QW({
            ns: XX,
            name: "meta"
          })],
          WT = [],
          XT = [],
          BT = [],
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        oT = class {
          constructor(TT, oT, IT, iT) {
            this.name = (0, uT.j)(this, XT, void 0), this.preserve = ((0, uT.j)(this, BT), (0, uT.j)(this, FT, void 0)), this.type = ((0, uT.j)(this, ST), (0, uT.j)(this, DT, void 0)), this.value = (0, uT.j)(this, LT), this.name = TT, this.value = oT, this.preserve = IT, this.type = iT
          }
        };
        return (0, uT.n)(oT, "ThreeMfMeta"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "name"
          })], iT = [HW({
            name: "preserve"
          })], zT = [HW({
            name: "type"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, oT) => {
                TT.name = oT
              }
            },
            metadata: xT
          }, XT, BT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: TT => "preserve" in TT,
              get: TT => TT.preserve,
              set: (TT, oT) => {
                TT.preserve = oT
              }
            },
            metadata: xT
          }, FT, ST), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, oT) => {
                TT.type = oT
              }
            },
            metadata: xT
          }, DT, LT), (0, uT.h)(null, TT = {
            value: oT
          }, kT, {
            kind: "class",
            name: oT.name,
            metadata: xT
          }, null, WT), oT = TT.value, xT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          }), (0, uT.j)(oT, WT)
        })(), oT
      })(),
      CX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "metadatagroup"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfMetadataGroup"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      jX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "resources"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.object = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfResources"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      JX = (() => {
        let TT, oT, IT, iT, zT, kT, WT, XT, BT, FT = [QW({
            ns: XX,
            name: "object"
          })],
          ST = [],
          DT = [],
          LT = [],
          xT = [],
          cT = [],
          KT = [],
          MT = [],
          rT = [],
          AT = [],
          gT = [],
          hT = [],
          wT = [],
          mT = [],
          eT = [],
          RT = [];
        oT = class {
          constructor(TT) {
            let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SX.model;
            this.id = (0, uT.j)(this, DT, void 0), this.type = ((0, uT.j)(this, LT), (0, uT.j)(this, xT, void 0)), this.thumbnail = ((0, uT.j)(this, cT), (0, uT.j)(this, KT, void 0)), this.partnumber = ((0, uT.j)(this, MT), (0, uT.j)(this, rT, void 0)), this.name = ((0, uT.j)(this, AT), (0, uT.j)(this, gT, void 0)), this.pid = ((0, uT.j)(this, hT), (0, uT.j)(this, wT, void 0)), this.pindex = ((0, uT.j)(this, mT), (0, uT.j)(this, eT, void 0)), this.metadatagroup = (0, uT.j)(this, RT), this.id = TT, this.type = oT
          }
        };
        return (0, uT.n)(oT, "ThreeMfObject"), (() => {
          const vT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "id"
          })], iT = [HW({
            name: "type"
          })], zT = [HW({
            name: "thumbnail"
          })], kT = [HW({
            name: "partnumber"
          })], WT = [HW({
            name: "name"
          })], XT = [HW({
            name: "pid"
          })], BT = [HW({
            name: "pindex"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, oT) => {
                TT.id = oT
              }
            },
            metadata: vT
          }, DT, LT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: TT => "type" in TT,
              get: TT => TT.type,
              set: (TT, oT) => {
                TT.type = oT
              }
            },
            metadata: vT
          }, xT, cT), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: TT => "thumbnail" in TT,
              get: TT => TT.thumbnail,
              set: (TT, oT) => {
                TT.thumbnail = oT
              }
            },
            metadata: vT
          }, KT, MT), (0, uT.h)(null, null, kT, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "partnumber" in TT,
              get: TT => TT.partnumber,
              set: (TT, oT) => {
                TT.partnumber = oT
              }
            },
            metadata: vT
          }, rT, AT), (0, uT.h)(null, null, WT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, oT) => {
                TT.name = oT
              }
            },
            metadata: vT
          }, gT, hT), (0, uT.h)(null, null, XT, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: TT => "pid" in TT,
              get: TT => TT.pid,
              set: (TT, oT) => {
                TT.pid = oT
              }
            },
            metadata: vT
          }, wT, mT), (0, uT.h)(null, null, BT, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: TT => "pindex" in TT,
              get: TT => TT.pindex,
              set: (TT, oT) => {
                TT.pindex = oT
              }
            },
            metadata: vT
          }, eT, RT), (0, uT.h)(null, TT = {
            value: oT
          }, FT, {
            kind: "class",
            name: oT.name,
            metadata: vT
          }, null, ST), oT = TT.value, vT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vT
          }), (0, uT.j)(oT, ST)
        })(), oT
      })(),
      UX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "mesh"
          })],
          iT = [];
        oT = class {
          constructor(TT, oT) {
            this.vertices = TT ?? new aX, this.triangles = oT ?? new QX
          }
        };
        return (0, uT.n)(oT, "ThreeMfMesh"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      aX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "vertices"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfVertices"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      YX = (() => {
        let TT, oT, IT, iT, zT, kT = [QW({
            ns: XX,
            name: "vertex"
          })],
          WT = [],
          XT = [],
          BT = [],
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        oT = class {
          constructor() {
            let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, uT.j)(this, XT, void 0), this.y = ((0, uT.j)(this, BT), (0, uT.j)(this, FT, void 0)), this.z = ((0, uT.j)(this, ST), (0, uT.j)(this, DT, void 0)), (0, uT.j)(this, LT), this.x = TT, this.y = oT, this.z = IT
          }
        };
        return (0, uT.n)(oT, "ThreeMfVertex"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "x"
          })], iT = [HW({
            name: "y"
          })], zT = [HW({
            name: "z"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: TT => "x" in TT,
              get: TT => TT.x,
              set: (TT, oT) => {
                TT.x = oT
              }
            },
            metadata: xT
          }, XT, BT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: TT => "y" in TT,
              get: TT => TT.y,
              set: (TT, oT) => {
                TT.y = oT
              }
            },
            metadata: xT
          }, FT, ST), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: TT => "z" in TT,
              get: TT => TT.z,
              set: (TT, oT) => {
                TT.z = oT
              }
            },
            metadata: xT
          }, DT, LT), (0, uT.h)(null, TT = {
            value: oT
          }, kT, {
            kind: "class",
            name: oT.name,
            metadata: xT
          }, null, WT), oT = TT.value, xT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          }), (0, uT.j)(oT, WT)
        })(), oT
      })(),
      QX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "triangles"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfTriangles"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      OX = (() => {
        let TT, oT, IT, iT, zT, kT, WT, XT, BT, FT = [QW({
            ns: XX,
            name: "triangle"
          })],
          ST = [],
          DT = [],
          LT = [],
          xT = [],
          cT = [],
          KT = [],
          MT = [],
          rT = [],
          AT = [],
          gT = [],
          hT = [],
          wT = [],
          mT = [],
          eT = [],
          RT = [];
        oT = class {
          constructor(TT, oT, IT) {
            this.v1 = (0, uT.j)(this, DT, void 0), this.v2 = ((0, uT.j)(this, LT), (0, uT.j)(this, xT, void 0)), this.v3 = ((0, uT.j)(this, cT), (0, uT.j)(this, KT, void 0)), this.p1 = ((0, uT.j)(this, MT), (0, uT.j)(this, rT, void 0)), this.p2 = ((0, uT.j)(this, AT), (0, uT.j)(this, gT, void 0)), this.p3 = ((0, uT.j)(this, hT), (0, uT.j)(this, wT, void 0)), this.pid = ((0, uT.j)(this, mT), (0, uT.j)(this, eT, void 0)), (0, uT.j)(this, RT), this.v1 = TT, this.v2 = oT, this.v3 = IT
          }
        };
        return (0, uT.n)(oT, "ThreeMfTriangle"), (() => {
          const vT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "v1"
          })], iT = [HW({
            name: "v2"
          })], zT = [HW({
            name: "v3"
          })], kT = [HW({
            name: "p1"
          })], WT = [HW({
            name: "p2"
          })], XT = [HW({
            name: "p3"
          })], BT = [HW({
            name: "pid"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: TT => "v1" in TT,
              get: TT => TT.v1,
              set: (TT, oT) => {
                TT.v1 = oT
              }
            },
            metadata: vT
          }, DT, LT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: TT => "v2" in TT,
              get: TT => TT.v2,
              set: (TT, oT) => {
                TT.v2 = oT
              }
            },
            metadata: vT
          }, xT, cT), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: TT => "v3" in TT,
              get: TT => TT.v3,
              set: (TT, oT) => {
                TT.v3 = oT
              }
            },
            metadata: vT
          }, KT, MT), (0, uT.h)(null, null, kT, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: TT => "p1" in TT,
              get: TT => TT.p1,
              set: (TT, oT) => {
                TT.p1 = oT
              }
            },
            metadata: vT
          }, rT, AT), (0, uT.h)(null, null, WT, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: TT => "p2" in TT,
              get: TT => TT.p2,
              set: (TT, oT) => {
                TT.p2 = oT
              }
            },
            metadata: vT
          }, gT, hT), (0, uT.h)(null, null, XT, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: TT => "p3" in TT,
              get: TT => TT.p3,
              set: (TT, oT) => {
                TT.p3 = oT
              }
            },
            metadata: vT
          }, wT, mT), (0, uT.h)(null, null, BT, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: TT => "pid" in TT,
              get: TT => TT.pid,
              set: (TT, oT) => {
                TT.pid = oT
              }
            },
            metadata: vT
          }, eT, RT), (0, uT.h)(null, TT = {
            value: oT
          }, FT, {
            kind: "class",
            name: oT.name,
            metadata: vT
          }, null, ST), oT = TT.value, vT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vT
          }), (0, uT.j)(oT, ST)
        })(), oT
      })(),
      HX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "components"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.component = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfComponents"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      nX = (() => {
        let TT, oT, IT, iT, zT = [QW({
            ns: XX,
            name: "component"
          })],
          kT = [],
          WT = [],
          XT = [],
          BT = [],
          FT = [];
        oT = class {
          constructor(TT, oT) {
            this.objectid = (0, uT.j)(this, WT, void 0), this.transform = ((0, uT.j)(this, XT), (0, uT.j)(this, BT, void 0)), (0, uT.j)(this, FT), this.objectid = TT, this.transform = oT
          }
        };
        return (0, uT.n)(oT, "ThreeMfComponent"), (() => {
          const ST = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "objectid"
          })], iT = [HW({
            name: "transform",
            formatter: vX
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: TT => "objectid" in TT,
              get: TT => TT.objectid,
              set: (TT, oT) => {
                TT.objectid = oT
              }
            },
            metadata: ST
          }, WT, XT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: TT => "transform" in TT,
              get: TT => TT.transform,
              set: (TT, oT) => {
                TT.transform = oT
              }
            },
            metadata: ST
          }, BT, FT), (0, uT.h)(null, TT = {
            value: oT
          }, zT, {
            kind: "class",
            name: oT.name,
            metadata: ST
          }, null, kT), oT = TT.value, ST && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ST
          }), (0, uT.j)(oT, kT)
        })(), oT
      })(),
      qX = (() => {
        let TT, oT, IT, iT = [QW({
            ns: XX,
            name: "basematerials"
          })],
          zT = [],
          kT = [],
          WT = [];
        oT = class {
          constructor(TT) {
            this.id = (0, uT.j)(this, kT, void 0), this.base = ((0, uT.j)(this, WT), []), this.id = TT
          }
        };
        return (0, uT.n)(oT, "ThreeMfBaseMaterials"), (() => {
          const XT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "id"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: TT => "id" in TT,
              get: TT => TT.id,
              set: (TT, oT) => {
                TT.id = oT
              }
            },
            metadata: XT
          }, kT, WT), (0, uT.h)(null, TT = {
            value: oT
          }, iT, {
            kind: "class",
            name: oT.name,
            metadata: XT
          }, null, zT), oT = TT.value, XT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XT
          }), (0, uT.j)(oT, zT)
        })(), oT
      })(),
      ZX = (() => {
        let TT, oT, IT, iT, zT = [QW({
            ns: XX,
            name: "base"
          })],
          kT = [],
          WT = [],
          XT = [],
          BT = [],
          FT = [];
        oT = class {
          constructor(TT, oT) {
            this.name = (0, uT.j)(this, WT, void 0), this.displaycolor = ((0, uT.j)(this, XT), (0, uT.j)(this, BT, void 0)), (0, uT.j)(this, FT), this.name = TT, this.displaycolor = oT
          }
        };
        return (0, uT.n)(oT, "ThreeMfBase"), (() => {
          const ST = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "name"
          })], iT = [HW({
            name: "displaycolor"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, oT) => {
                TT.name = oT
              }
            },
            metadata: ST
          }, WT, XT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: TT => "displaycolor" in TT,
              get: TT => TT.displaycolor,
              set: (TT, oT) => {
                TT.displaycolor = oT
              }
            },
            metadata: ST
          }, BT, FT), (0, uT.h)(null, TT = {
            value: oT
          }, zT, {
            kind: "class",
            name: oT.name,
            metadata: ST
          }, null, kT), oT = TT.value, ST && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ST
          }), (0, uT.j)(oT, kT)
        })(), oT
      })(),
      lX = (() => {
        let TT, oT, IT = [QW({
            ns: XX,
            name: "build"
          })],
          iT = [];
        oT = class {
          constructor() {
            this.item = []
          }
        };
        return (0, uT.n)(oT, "ThreeMfBuild"), (() => {
          const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, uT.h)(null, TT = {
            value: oT
          }, IT, {
            kind: "class",
            name: oT.name,
            metadata: zT
          }, null, iT), oT = TT.value, zT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zT
          }), (0, uT.j)(oT, iT)
        })(), oT
      })(),
      sX = (() => {
        let TT, oT, IT, iT, zT, kT = [QW({
            ns: XX,
            name: "item"
          })],
          WT = [],
          XT = [],
          BT = [],
          FT = [],
          ST = [],
          DT = [],
          LT = [];
        oT = class {
          constructor(TT, oT, IT) {
            this.objectid = (0, uT.j)(this, XT, void 0), this.transform = ((0, uT.j)(this, BT), (0, uT.j)(this, FT, void 0)), this.partnumber = ((0, uT.j)(this, ST), (0, uT.j)(this, DT, void 0)), this.metadatagroup = (0, uT.j)(this, LT), this.objectid = TT, this.transform = oT, this.partnumber = IT
          }
        };
        return (0, uT.n)(oT, "ThreeMfItem"), (() => {
          const xT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IT = [HW({
            name: "objectid"
          })], iT = [HW({
            name: "transform",
            formatter: vX
          })], zT = [HW({
            name: "partnumber"
          })], (0, uT.h)(null, null, IT, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: TT => "objectid" in TT,
              get: TT => TT.objectid,
              set: (TT, oT) => {
                TT.objectid = oT
              }
            },
            metadata: xT
          }, XT, BT), (0, uT.h)(null, null, iT, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: TT => "transform" in TT,
              get: TT => TT.transform,
              set: (TT, oT) => {
                TT.transform = oT
              }
            },
            metadata: xT
          }, FT, ST), (0, uT.h)(null, null, zT, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: TT => "partnumber" in TT,
              get: TT => TT.partnumber,
              set: (TT, oT) => {
                TT.partnumber = oT
              }
            },
            metadata: xT
          }, DT, LT), (0, uT.h)(null, TT = {
            value: oT
          }, kT, {
            kind: "class",
            name: oT.name,
            metadata: xT
          }, null, WT), oT = TT.value, xT && Object.defineProperty(oT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xT
          }), (0, uT.j)(oT, WT)
        })(), oT
      })();
    class tX {
      constructor(TT, oT) {
        this._object = new JX(TT, oT)
      }
      withName(TT) {
        return this._object.name = TT, this
      }
      withThumbnail(TT) {
        return this._object.thumbnail = TT, this
      }
      withProperty(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = TT, this._object.id = oT, this
      }
      build() {
        return this._object
      }
      reset(TT, oT) {
        this._object = new JX(TT, oT)
      }
    }
    class GX extends tX {
      constructor(TT) {
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SX.model), this._object.content = new HX
      }
      withComponent(TT, oT) {
        return this._object.content.component.push(new nX(TT, oT)), this
      }
    }
    class pX extends tX {
      constructor(TT) {
        super(TT, SX.model)
      }
      withPostProcessHandlers(TT, oT) {
        return this._vh = TT, this._th = oT, this
      }
      withData(TT) {
        return this._object.content = this._buildMesh(TT), this
      }
      withMaterial(TT, oT) {
        return this._object.pid = TT, this._object.pindex = oT, this
      }
      _buildMesh(TT) {
        const oT = this._buildVertices(TT.positions),
          IT = this._buildTriangle(TT.indices);
        return new UX(oT, IT)
      }
      _buildVertices(TT) {
        const oT = new aX;
        if (TT)
          for (let IT = 0; IT < TT.length;) {
            const iT = TT[IT++],
              zT = TT[IT++],
              kT = TT[IT++];
            let WT = new YX(iT, zT, kT);
            this._vh && (WT = this._vh(WT)), oT.vertex.push(WT)
          }
        return oT
      }
      _buildTriangle(TT) {
        const oT = new QX;
        if (TT)
          for (let IT = 0; IT < TT.length;) {
            const iT = TT[IT++],
              zT = TT[IT++],
              kT = TT[IT++];
            let WT = new OX(iT, zT, kT);
            this._th && (WT = this._th(WT)), oT.triangle.push(WT)
          }
        return oT
      }
    }
    class bX {
      constructor(TT) {
        this._m = new qX(TT)
      }
      withColor(TT, oT) {
        this._m.base = this._m.base ?? [];
        let IT = this._m.base.find((oT => oT.name.toLowerCase() === TT.toLowerCase()));
        return IT ? (IT.displaycolor = this._rgbaToHex(oT), this) : (IT = new ZX(TT, this._rgbaToHex(oT)), this._m.base.push(IT), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(TT) {
        const oT = TT => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(TT, 1 / 2.2)))),
          IT = oT(TT.r).toString(16).padStart(2, "0").toUpperCase(),
          iT = oT(TT.g).toString(16).padStart(2, "0").toUpperCase(),
          zT = oT(TT.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof TT.a) {
          return `#${IT}${iT}${zT}${Math.round(Math.min(255,Math.max(0,255*TT.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${IT}${iT}${zT}`
      }
    }
    class yX {
      constructor() {
        this._model = new EX, this._objects = new Map
      }
      withMetaData(TT, oT, IT, iT) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new fX(TT, oT, IT, iT)), this
      }
      withMaterial(TT) {
        return TT instanceof bX && (TT = TT.build()), TT && (this._model.resources = this._model.resources ?? new jX, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(TT)), this
      }
      withMesh(TT) {
        return TT instanceof pX && (TT = TT.build()), this._model.resources = this._model.resources ?? new jX, this._model.resources.object.push(TT), this
      }
      withComponents(TT) {
        return TT instanceof GX && (TT = TT.build()), this._model.resources = this._model.resources ?? new jX, this._model.resources.object.push(TT), this
      }
      withBuild(TT, oT, IT) {
        return this._model.build = this._model.build ?? new lX, this._model.build.item?.push(new sX(TT, oT, IT)), this
      }
      withUnit(TT) {
        return this._model.unit = TT, this
      }
      reset() {
        return this._model = new EX, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    yX.KnownMetaSet = new Set(EX.KnownMeta.map((TT => TT.toLowerCase())));
    class NX {
      withContentType(TT) {
        this._cts || (this._cts = new hX);
        const oT = this._cts.items;
        return oT.some((oT => oT.ext === TT.ext && oT.ct === TT.ct)) || oT.push(TT), this
      }
      withRelationship(TT) {
        this._rs || (this._rs = new mX);
        const oT = this._rs.items;
        return oT.some((oT => oT.id === TT.id)) || oT.push(TT), this.withContentType(new wX("rels", xX.Relationships)), this
      }
      withModel(TT) {
        return TT instanceof yX && (TT = TT.build()), this._m = TT, this.withContentType(new wX("model", xX.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const TT = `${KX}${MX}`;
        if (!this._rs) {
          const oT = `/${TT}`;
          this.withRelationship(new eX("rel0", gX.ThreeDimModel, oT))
        }
        return new RX(this._cts, this._rs, this._m)
      }
    }
    class PX {
      constructor(TT) {
        this._o = TT
      }
      get options() {
        return this._o
      }
      async serializeAsync(TT) {
        const oT = await this.ensureZipLibReadyAsync();
        if (!oT) return;
        const IT = oT.Zip,
          iT = oT.ZipDeflate;
        if (!IT || !iT) throw new Error("fflate Zip / ZipDeflate not available");
        const zT = function(TT, oT, IT) {
          const zT = new iT(oT, {
            level: 6
          });
          TT.add(zT);
          const kT = function(TT) {
              return {
                push: (oT, IT) => TT.push(oT, IT)
              }
            }(zT),
            WT = new WX(kT),
            XT = new zX(WT).dec("1.0", "UTF-8");
          new oX(XT).serialize(IT), WT.finish()
        };
        for (var kT = arguments.length, WT = new Array(kT > 1 ? kT - 1 : 0), XT = 1; XT < kT; XT++) WT[XT - 1] = arguments[XT];
        const BT = this.toDocument(...WT);
        if (!BT) return;
        const FT = new IT(TT);
        zT(FT, AX, BT.contentTypes), zT(FT, `${cX}${rX}`, BT.relationships), zT(FT, `${KX}${MX}`, BT.model), FT.end()
      }
      toDocument() {
        const TT = (new yX).withUnit(this._o?.unit ?? FX.millimeter);
        if (this.options.metadata)
          for (const zT in this.options.metadata) TT.withMetaData(zT, this.options.metadata[zT]);
        for (var oT = arguments.length, IT = new Array(oT), iT = 0; iT < oT; iT++) IT[iT] = arguments[iT];
        return (new NX).withModel(this.toModel(TT, ...IT)).build()
      }
    }
    class dX {
      static async SerializeToMemoryAsync(TT) {
        const oT = new Array;
        let IT = 0;
        for (var iT = arguments.length, zT = new Array(iT > 1 ? iT - 1 : 0), kT = 1; kT < iT; kT++) zT[kT - 1] = arguments[kT];
        if (await TT.serializeAsync((function(TT, iT, zT) {
            oT.push(iT), IT += iT.length
          }), ...zT), !IT) return;
        const WT = new Uint8Array(IT);
        let XT = 0;
        for (const BT of oT) WT.set(BT, XT), XT += BT.length;
        return WT
      }
    }
    class VX {}
    VX.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class TB {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = TT, this._to = oT, this._step = IT, this._i = TT
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const TT = this._i;
        return this._i += this._step, TT
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class oB extends PX {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...oB.DefaultOptions,
          ...TT
        })
      }
      toModel(TT) {
        for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
        IT = IT.filter((TT => TT instanceof Di.b || TT instanceof xT.d));
        const zT = new TB,
          kT = TT,
          WT = new Map,
          XT = this.options.exportInstances ? [] : null;
        for (let BT = 0; BT < IT.length; BT++) {
          const TT = IT[BT];
          if (TT instanceof xT.d) {
            XT?.push(TT);
            continue
          }
          const oT = TT.name || `mesh${BT}`,
            iT = TT.getWorldMatrix(),
            FT = this._handleBabylonTo3mfMatrixTransformToRef(iT, uX.Zero()),
            ST = TT.pR;
          if (void 0 === ST) continue;
          const DT = 1 == ST.length;
          for (let IT = 0; IT < ST.length; IT++) {
            const iT = ST[IT],
              XT = this._extractSubMesh(TT, iT);
            if (XT) {
              const TT = DT ? `${oT}` : `${oT}_${IT}`,
                BT = new pX(zT.next()).withData(XT).withName(TT).build();
              kT.withMesh(BT), kT.withBuild(BT.id, FT), WT.set(iT, BT)
            }
          }
        }
        if (XT && XT.length) {
          const TT = this._groupBy(XT, (TT => TT.HiT));
          for (const [oT, IT] of Array.from(TT.entries()))
            if (IT && IT.length)
              for (let TT = 0; TT < IT.length; TT++) {
                const iT = IT[TT].getWorldMatrix(),
                  zT = oT.pR;
                for (let TT = 0; TT < zT.length; TT++) {
                  const oT = zT[TT],
                    IT = WT.get(oT);
                  IT && kT.withBuild(IT.id, this._handleBabylonTo3mfMatrixTransformToRef(iT, uX.Zero()))
                }
              }
        }
        return kT.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const TT = globalThis;
          return TT.fflate || await zT.Tools.LoadScriptAsync(VX.FFLATEUrl), TT.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(TT, oT) {
        const IT = TT.hWT();
        if (!IT) return;
        const iT = TT.getVerticesData(oB._PositionKind);
        if (!iT) return;
        if (0 == oT.indexStart && oT.indexCount == IT.length) return {
          positions: iT,
          indices: IT
        };
        const zT = oT.indexStart,
          kT = new Map,
          WT = [],
          XT = new Uint32Array(oT.indexCount);
        for (let BT = 0; BT < oT.indexCount; BT++) {
          const TT = IT[zT + BT];
          let oT = kT.get(TT);
          if (void 0 === oT) {
            oT = kT.size, kT.set(TT, oT);
            const IT = 3 * TT;
            WT.push(iT[IT], iT[IT + 1], iT[IT + 2])
          }
          XT[BT] = oT
        }
        return {
          positions: new Float32Array(WT),
          indices: XT
        }
      }
      _groupBy(TT, oT) {
        const IT = new Map;
        for (const iT of TT) {
          const TT = oT(iT),
            zT = IT.get(TT);
          zT ? zT.push(iT) : IT.set(TT, [iT])
        }
        return IT
      }
      _handleBabylonTo3mfMatrixTransformToRef(TT, oT) {
        const IT = TT.multiplyToRef(oB._R_BJS_TO_3MF, HT.b.Zero()).m;
        return oT.values = [IT[0], IT[1], IT[2], IT[4], IT[5], IT[6], IT[8], IT[9], IT[10], IT[12], IT[13], IT[14]], oT
      }
    }
    oB.DefaultOptions = {
      unit: FX.meter,
      exportInstances: !1
    }, oB._PositionKind = "position", oB._R_BJS_TO_3MF = HT.b.RotationX(Math.PI / 2).multiply(HT.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);