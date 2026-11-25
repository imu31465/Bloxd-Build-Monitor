export const id = 235;
export const ids = [235, 241];
export const modules = {
  42292: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(42219),
      SG = ZG(40387);
    let LG = !1;

    function yG() {
      LG || (LG = !0, SG.b.prototype._sphericalPolynomialTargetSize = 0, SG.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(SG.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = wG.d.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((GG => {
              this._texture._sphericalPolynomial = GG, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(GG) {
          this._texture && (this._texture._sphericalPolynomial = GG)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37618: (GG, bG, ZG) => {
    ZG.d(bG, {
      Color3: () => wG.c,
      e: () => wG.d
    });
    var wG = ZG(37621);
    (0, wG.h)()
  },
  38167: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(38175);
    class SG {
      static GetPlanes(GG) {
        const bG = [];
        for (let ZG = 0; ZG < 6; ZG++) bG.push(new wG.b(0, 0, 0, 0));
        return SG.GetPlanesToRef(GG, bG), bG
      }
      static GetNearPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[2], bG.normal.y = ZG[7] + ZG[6], bG.normal.z = ZG[11] + ZG[10], bG.d = ZG[15] + ZG[14], bG.normalize()
      }
      static GetFarPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[2], bG.normal.y = ZG[7] - ZG[6], bG.normal.z = ZG[11] - ZG[10], bG.d = ZG[15] - ZG[14], bG.normalize()
      }
      static GetLeftPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[0], bG.normal.y = ZG[7] + ZG[4], bG.normal.z = ZG[11] + ZG[8], bG.d = ZG[15] + ZG[12], bG.normalize()
      }
      static GetRightPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[0], bG.normal.y = ZG[7] - ZG[4], bG.normal.z = ZG[11] - ZG[8], bG.d = ZG[15] - ZG[12], bG.normalize()
      }
      static GetTopPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[1], bG.normal.y = ZG[7] - ZG[5], bG.normal.z = ZG[11] - ZG[9], bG.d = ZG[15] - ZG[13], bG.normalize()
      }
      static GetBottomPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[1], bG.normal.y = ZG[7] + ZG[5], bG.normal.z = ZG[11] + ZG[9], bG.d = ZG[15] + ZG[13], bG.normalize()
      }
      static GetPlanesToRef(GG, bG) {
        SG.GetNearPlaneToRef(GG, bG[0]), SG.GetFarPlaneToRef(GG, bG[1]), SG.GetLeftPlaneToRef(GG, bG[2]), SG.GetRightPlaneToRef(GG, bG[3]), SG.GetTopPlaneToRef(GG, bG[4]), SG.GetBottomPlaneToRef(GG, bG[5])
      }
      static IsPointInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ZG++)
          if (bG[ZG].dotCoordinate(GG) < 0) return !1;
        return !0
      }
    }
  },
  38175: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(37439);
    class SG {
      constructor(GG, bG, ZG, SG) {
        this.normal = new wG.p(GG, bG, ZG), this.d = SG
      }
      mwG() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SG(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let GG = this.normal.getHashCode();
        return GG = 397 * GG ^ this.d, GG
      }
      normalize() {
        const GG = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bG = 0;
        return 0 !== GG && (bG = 1 / GG), this.normal.x *= bG, this.normal.y *= bG, this.normal.z *= bG, this.d *= bG, this
      }
      transform(GG) {
        const bG = SG._TmpMatrix;
        GG.invertToRef(bG);
        const ZG = bG.m,
          wG = this.normal.x,
          LG = this.normal.y,
          yG = this.normal.z,
          kG = this.d,
          UG = wG * ZG[0] + LG * ZG[1] + yG * ZG[2] + kG * ZG[3],
          YG = wG * ZG[4] + LG * ZG[5] + yG * ZG[6] + kG * ZG[7],
          VG = wG * ZG[8] + LG * ZG[9] + yG * ZG[10] + kG * ZG[11],
          pG = wG * ZG[12] + LG * ZG[13] + yG * ZG[14] + kG * ZG[15];
        return new SG(UG, YG, VG, pG)
      }
      dotCoordinate(GG) {
        return this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z + this.d
      }
      copyFromPoints(GG, bG, ZG) {
        const wG = bG.x - GG.x,
          SG = bG.y - GG.y,
          LG = bG.z - GG.z,
          yG = ZG.x - GG.x,
          kG = ZG.y - GG.y,
          UG = ZG.z - GG.z,
          YG = SG * UG - LG * kG,
          VG = LG * yG - wG * UG,
          pG = wG * kG - SG * yG,
          fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
        let QG;
        return QG = 0 !== fG ? 1 / fG : 0, this.normal.x = YG * QG, this.normal.y = VG * QG, this.normal.z = pG * QG, this.d = -(this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z), this
      }
      isFrontFacingTo(GG, bG) {
        return wG.p.Dot(this.normal, GG) <= bG
      }
      signedDistanceTo(GG) {
        return wG.p.Dot(GG, this.normal) + this.d
      }
      static FromArray(GG) {
        return new SG(GG[0], GG[1], GG[2], GG[3])
      }
      static FromPoints(GG, bG, ZG) {
        const wG = new SG(0, 0, 0, 0);
        return wG.copyFromPoints(GG, bG, ZG), wG
      }
      static FromPositionAndNormal(GG, bG) {
        const ZG = new SG(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(GG, bG, ZG)
      }
      static FromPositionAndNormalToRef(GG, bG, ZG) {
        return ZG.normal.oW(bG), ZG.normal.normalize(), ZG.d = -GG.dot(ZG.normal), ZG
      }
      static SignedDistanceToPlaneFromPositionAndNormal(GG, bG, ZG) {
        const SG = -(bG.x * GG.x + bG.y * GG.y + bG.z * GG.z);
        return wG.p.Dot(ZG, bG) + SG
      }
    }
    SG._TmpMatrix = wG.e.Identity()
  },
  37432: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Matrix: () => wG.e,
      Quaternion: () => wG.g,
      RegisterMathVector: () => wG.h,
      TmpVectors: () => wG.j,
      Vector2: () => wG.m,
      mK: () => wG.p,
      Vector4: () => wG.t
    });
    var wG = ZG(37439);
    (0, wG.h)()
  },
  38499: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor(GG, bG, ZG, wG) {
        this.x = GG, this.y = bG, this.width = ZG, this.height = wG
      }
      toGlobal(GG, bG) {
        return new wG(this.x * GG, this.y * bG, this.width * GG, this.height * bG)
      }
      toGlobalToRef(GG, bG, ZG) {
        return ZG.x = this.x * GG, ZG.y = this.y * bG, ZG.width = this.width * GG, ZG.height = this.height * bG, this
      }
      clone() {
        return new wG(this.x, this.y, this.width, this.height)
      }
    }
  },
  42219: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => YG
    });
    var wG = ZG(37439),
      SG = ZG(37471),
      LG = ZG(40379),
      yG = ZG(37443),
      kG = ZG(37621);
    class UG {
      constructor(GG, bG, ZG, wG) {
        this.name = GG, this.worldAxisForNormal = bG, this.worldAxisForFileX = ZG, this.worldAxisForFileY = wG
      }
    }
    class YG {
      static _NearestPow2Floor(GG) {
        return GG <= 1 ? 1 : 1 << Math.floor(Math.log2(GG))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(GG) {
        if (!GG.isCube) return null;
        GG.Dv()?.CK().flushFramebuffer();
        const bG = GG.getSize().width,
          ZG = GG._sphericalPolynomialTargetSize,
          wG = ZG > 0 ? this._NearestPow2Floor(ZG) : 0,
          SG = !GG.noMipmap && !0 === GG._texture?.generateMipMaps,
          LG = wG > 0 && wG < bG && SG,
          yG = LG ? Math.max(0, Math.round(Math.log2(bG / wG))) : 0,
          kG = LG ? Math.max(1, Math.floor(bG / Math.pow(2, yG))) : bG,
          UG = GG.readPixels(0, yG, void 0, !1),
          YG = GG.readPixels(1, yG, void 0, !1);
        let VG, pG;
        GG.isRenderTarget ? (VG = GG.readPixels(3, yG, void 0, !1), pG = GG.readPixels(2, yG, void 0, !1)) : (VG = GG.readPixels(2, yG, void 0, !1), pG = GG.readPixels(3, yG, void 0, !1));
        const fG = GG.readPixels(4, yG, void 0, !1),
          QG = GG.readPixels(5, yG, void 0, !1),
          KG = GG.gammaSpace,
          hG = wG > 0 && wG < bG && !LG;
        return new Promise((GG => {
          Promise.all([YG, UG, VG, pG, fG, QG]).then((ZG => {
            let [SG, LG, yG, UG, YG, VG] = ZG, pG = kG;
            if (hG) {
              const GG = 4;
              SG = this._DownsampleFace(SG, bG, wG, GG), LG = this._DownsampleFace(LG, bG, wG, GG), yG = this._DownsampleFace(yG, bG, wG, GG), UG = this._DownsampleFace(UG, bG, wG, GG), YG = this._DownsampleFace(YG, bG, wG, GG), VG = this._DownsampleFace(VG, bG, wG, GG), pG = wG
            }
            const fG = {
              size: pG,
              right: LG,
              left: SG,
              up: yG,
              down: UG,
              front: YG,
              back: VG,
              format: 5,
              type: SG instanceof Float32Array ? 1 : 0,
              gammaSpace: KG
            };
            GG(this.ConvertCubeMapToSphericalPolynomial(fG))
          }))
        }))
      }
      static _AreaElement(GG, bG) {
        return Math.atan2(GG * bG, Math.sqrt(GG * GG + bG * bG + 1))
      }
      static _DownsampleFace(GG, bG, ZG, wG) {
        const SG = GG instanceof Float32Array ? GG : Float32Array.from(GG),
          LG = ZG * ZG * wG,
          yG = new Float32Array(LG),
          kG = bG / ZG,
          UG = 1 / (kG * kG);
        for (let VG = 0; VG < ZG; VG++) {
          const GG = Math.floor(VG * kG),
            LG = Math.floor((VG + 1) * kG);
          for (let YG = 0; YG < ZG; YG++) {
            const pG = Math.floor(YG * kG),
              fG = Math.floor((YG + 1) * kG),
              QG = (VG * ZG + YG) * wG;
            for (let ZG = 0; ZG < wG; ZG++) {
              let kG = 0;
              for (let yG = GG; yG < LG; yG++)
                for (let GG = pG; GG < fG; GG++) kG += SG[(yG * bG + GG) * wG + ZG];
              yG[QG + ZG] = kG * UG
            }
          }
        }
        if (GG instanceof Float32Array) return yG;
        const YG = new(0, GG.constructor)(LG);
        for (let VG = 0; VG < LG; VG++) YG[VG] = yG[VG] + .5 | 0;
        return YG
      }
      static ConvertCubeMapToSphericalPolynomial(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = bG > 0 ? this._NearestPow2Floor(bG) : 0;
        if (ZG > 0 && GG.size > ZG) {
          const bG = 5 === GG.format ? 4 : 3,
            wG = ["right", "left", "up", "down", "front", "back"],
            SG = {};
          for (const LG of wG) SG[LG] = this._DownsampleFace(GG[LG], GG.size, ZG, bG);
          GG = {
            ...GG,
            ...SG,
            size: ZG
          }
        }
        const wG = new LG.b;
        let UG = 0;
        const YG = 2 / GG.size,
          VG = YG,
          pG = .5 * YG,
          fG = pG - 1;
        for (let LG = 0; LG < 6; LG++) {
          const bG = this._FileFaces[LG],
            ZG = GG[bG.name];
          let QG = fG;
          const KG = 5 === GG.format ? 4 : 3;
          for (let LG = 0; LG < GG.size; LG++) {
            let hG = fG;
            for (let VG = 0; VG < GG.size; VG++) {
              const fG = bG.worldAxisForFileX.scale(hG).add(bG.worldAxisForFileY.scale(QG)).add(bG.worldAxisForNormal);
              fG.normalize();
              const dG = this._AreaElement(hG - pG, QG - pG) - this._AreaElement(hG - pG, QG + pG) - this._AreaElement(hG + pG, QG - pG) + this._AreaElement(hG + pG, QG + pG);
              let JG = ZG[LG * GG.size * KG + VG * KG + 0],
                rG = ZG[LG * GG.size * KG + VG * KG + 1],
                zG = ZG[LG * GG.size * KG + VG * KG + 2];
              isNaN(JG) && (JG = 0), isNaN(rG) && (rG = 0), isNaN(zG) && (zG = 0), 0 === GG.type && (JG /= 255, rG /= 255, zG /= 255), GG.gammaSpace && (JG = Math.pow((0, SG.Clamp)(JG), yG.k), rG = Math.pow((0, SG.Clamp)(rG), yG.k), zG = Math.pow((0, SG.Clamp)(zG), yG.k));
              const EG = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const GG = Math.max(JG, rG, zG);
                if (GG > EG) {
                  const bG = EG / GG;
                  JG *= bG, rG *= bG, zG *= bG
                }
              } else JG = (0, SG.Clamp)(JG, 0, EG), rG = (0, SG.Clamp)(rG, 0, EG), zG = (0, SG.Clamp)(zG, 0, EG);
              const oG = new kG.c(JG, rG, zG);
              wG.addLight(fG, oG, dG), UG += dG, hG += YG
            }
            QG += VG
          }
        }
        const QG = 6 * (4 * Math.PI) / 6 / UG;
        return wG.scaleInPlace(QG), wG.convertIncidentRadianceToIrradiance(), wG.convertIrradianceToLambertianRadiance(), LG.e.FromHarmonics(wG)
      }
    }
    YG._FileFaces = [new UG("right", new wG.p(1, 0, 0), new wG.p(0, 0, -1), new wG.p(0, -1, 0)), new UG("left", new wG.p(-1, 0, 0), new wG.p(0, 0, 1), new wG.p(0, -1, 0)), new UG("up", new wG.p(0, 1, 0), new wG.p(1, 0, 0), new wG.p(0, 0, 1)), new UG("down", new wG.p(0, -1, 0), new wG.p(1, 0, 0), new wG.p(0, 0, -1)), new UG("front", new wG.p(0, 0, 1), new wG.p(1, 0, 0), new wG.p(0, -1, 0)), new UG("back", new wG.p(0, 0, -1), new wG.p(-1, 0, 0), new wG.p(0, -1, 0))], YG.MAX_HDRI_VALUE = 4096, YG.PRESERVE_CLAMPED_COLORS = !1
  },
  41979: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG.g,
      g: () => wG.q
    });
    var wG = ZG(40430);
    (0, wG.v)()
  },
  38311: (GG, bG, ZG) => {
    function wG() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
        const bG = 16 * Math.random() | 0;
        return ("x" === GG ? bG : 3 & bG | 8).toString(16)
      }))
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  42262: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG
    });
    var wG = ZG(42248),
      SG = ZG(42268);
    class LG {
      static ExpandRGBDTexture(GG) {
        const bG = GG._texture;
        if (!bG || !GG.isRGBD) return;
        const SG = bG.CK(),
          LG = SG.getCaps(),
          yG = bG.isReady;
        let kG = !1;
        LG.textureHalfFloatRender && LG.textureHalfFloatLinearFiltering ? (kG = !0, bG.type = 2) : LG.textureFloatRender && LG.textureFloatLinearFiltering && (kG = !0, bG.type = 1), kG && (bG.isReady = !1, bG._isRGBD = !1, bG.invertY = !1);
        const UG = async () => {
          const LG = SG.isWebGPU,
            yG = LG ? 1 : 0;
          bG.isReady = !1, LG ? await ZG.e(347).then((() => ZG(61933))) : await ZG.e(329).then((() => ZG(61942)));
          const kG = new wG.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, SG, !1, void 0, bG.type, void 0, null, !1, void 0, yG);
          kG.externalTextureSamplerBinding = !0;
          const UG = SG.createRenderTargetTexture(bG.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: bG.samplingMode,
            type: bG.type,
            format: 5
          });
          kG.onEffectCreatedObservable.addOnce((ZG => {
            ZG.executeWhenCompiled((() => {
              kG.onApply = GG => {
                GG._bindTexture("textureSampler", bG), GG.setFloat2("scale", 1, 1)
              }, GG.Dv()?.postProcessManager.directRender([kG], UG, !0), SG.restoreDefaultFramebuffer(), SG._releaseTexture(bG), kG && kG.dispose(), UG._swapAndDie(bG), bG.isReady = !0
            }))
          }))
        };
        kG && (yG ? UG() : GG.onLoadObservable.addOnce(UG))
      }
      static async EncodeTextureToRGBD(GG, bG) {
        let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return bG.CK().isWebGPU ? await ZG.e(348).then((() => ZG(61960))) : await ZG.e(330).then((() => ZG(61956))), await (0, SG.e)("rgbdEncode", GG, bG, wG, 1, 5)
      }
    }
  },
  61800: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AsyncLoop: () => wG.b,
      RegisterTools: () => wG.d,
      Tools: () => wG.f,
      className: () => wG.h
    });
    var wG = ZG(40477);
    (0, wG.d)()
  },
  42309: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    class wG {
      constructor(GG) {
        this._pendingActions = new Array, this._workerInfos = GG.map((GG => ({
          workerPromise: Promise.resolve(GG),
          idle: !0
        })))
      }
      dispose() {
        for (const GG of this._workerInfos) GG.workerPromise.then((GG => {
          GG.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(GG) {
        this._executeOnIdleWorker(GG) || this._pendingActions.push(GG)
      }
      _executeOnIdleWorker(GG) {
        for (const bG of this._workerInfos)
          if (bG.idle) return this._execute(bG, GG), !0;
        return !1
      }
      _execute(GG, bG) {
        GG.idle = !1, GG.workerPromise.then((ZG => {
          bG(ZG, (() => {
            const bG = this._pendingActions.shift();
            bG ? this._execute(GG, bG) : GG.idle = !0
          }))
        }))
      }
    }
    class SG extends wG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SG.DefaultOptions;
        super([]), this._maxWorkers = GG, this._createWorkerAsync = bG, this._options = ZG
      }
      push(GG) {
        if (!this._executeOnIdleWorker(GG))
          if (this._workerInfos.length < this._maxWorkers) {
            const bG = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(bG), this._execute(bG, GG)
          } else this._pendingActions.push(GG)
      }
      _execute(GG, bG) {
        GG.timeoutId && (clearTimeout(GG.timeoutId), delete GG.timeoutId), super._execute(GG, ((ZG, wG) => {
          bG(ZG, (() => {
            wG(), GG.idle && (GG.timeoutId = setTimeout((() => {
              GG.workerPromise.then((GG => {
                GG.terminate()
              }));
              const bG = this._workerInfos.indexOf(GG); - 1 !== bG && this._workerInfos.splice(bG, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    SG.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61835: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AbstractThreeMfSerializer: () => tk,
      BVHExporter: () => Wy,
      ContentTypeFileName: () => Kk,
      DefaultXmlSerializerFormatOptions: () => gy,
      DefaultXmlSerializerNumberOptions: () => ny,
      EXT_lights_area: () => JS,
      EXT_mesh_gpu_instancing: () => sw,
      EXT_texture_avif: () => Ly,
      EXT_texture_webp: () => by,
      GLTF2Export: () => Pw,
      GLTFData: () => YG,
      GetXmlFieldMeta: () => Py,
      GetXmlName: () => My,
      IsQualifiedName: () => my,
      KHR_draco_mesh_compression: () => xw,
      KHR_interactivity: () => VS,
      KHR_lights_punctual: () => yS,
      KHR_materials_anisotropy: () => oS,
      KHR_materials_clearcoat: () => WS,
      KHR_materials_coat: () => cS,
      KHR_materials_diffuse_roughness: () => ML,
      KHR_materials_diffuse_transmission: () => sS,
      KHR_materials_dispersion: () => eS,
      KHR_materials_emissive_strength: () => tS,
      KHR_materials_fuzz: () => pL,
      KHR_materials_ior: () => xS,
      KHR_materials_iridescence: () => ZL,
      KHR_materials_openpbr: () => nL,
      KHR_materials_sheen: () => yL,
      KHR_materials_specular: () => hL,
      KHR_materials_transmission: () => zL,
      KHR_materials_unlit: () => iL,
      KHR_materials_volume: () => IL,
      KHR_materials_volume_scatter: () => cL,
      KHR_texture_basisu: () => OL,
      KHR_texture_transform: () => TL,
      Known3mfRelationshipTypes: () => hk,
      KnownI3mfContentType: () => Yk,
      Matrix3d: () => Xk,
      MatrixFormatter: () => uk,
      ModelFileName: () => fk,
      NumberFormatter: () => Ty,
      OBJExport: () => yG,
      Object3dDirName: () => pk,
      OpenXmlContentTypesNamespace: () => kk,
      OpenXmlRelationshipsNamespace: () => Uk,
      RegisterEXT_lights_area: () => zS,
      RegisterEXT_mesh_gpu_instancing: () => nw,
      RegisterEXT_texture_avif: () => ky,
      RegisterEXT_texture_webp: () => wy,
      RegisterKHR_draco_mesh_compression: () => GS,
      RegisterKHR_interactivity: () => fS,
      RegisterKHR_lights_punctual: () => US,
      RegisterKHR_materials_anisotropy: () => uS,
      RegisterKHR_materials_clearcoat: () => IS,
      RegisterKHR_materials_coat: () => jS,
      RegisterKHR_materials_diffuse_roughness: () => sL,
      RegisterKHR_materials_diffuse_transmission: () => nS,
      RegisterKHR_materials_dispersion: () => TS,
      RegisterKHR_materials_emissive_strength: () => NS,
      RegisterKHR_materials_fuzz: () => QL,
      RegisterKHR_materials_ior: () => GL,
      RegisterKHR_materials_iridescence: () => SL,
      RegisterKHR_materials_openpbr: () => eL,
      RegisterKHR_materials_sheen: () => UL,
      RegisterKHR_materials_specular: () => JL,
      RegisterKHR_materials_transmission: () => oL,
      RegisterKHR_materials_unlit: () => WL,
      RegisterKHR_materials_volume: () => vL,
      RegisterKHR_materials_volume_scatter: () => jL,
      RegisterKHR_texture_basisu: () => BL,
      RegisterKHR_texture_transform: () => tL,
      RelationshipDirName: () => Vk,
      RelationshipFileName: () => Qk,
      ResolveFormatOptions: () => Ry,
      ResolveNumberOptions: () => ey,
      STLExport: () => Uy,
      ST_ObjectType: () => yk,
      ST_Unit: () => Lk,
      StringXmlWriter: () => bk,
      ThreeDimModelNamespace: () => wk,
      ThreeMf: () => Dk,
      ThreeMfBase: () => Ak,
      ThreeMfBaseMaterials: () => Mk,
      ThreeMfBuild: () => sk,
      ThreeMfComponent: () => Pk,
      ThreeMfComponents: () => jk,
      ThreeMfComponentsBuilder: () => gk,
      ThreeMfContentType: () => Jk,
      ThreeMfContentTypes: () => dk,
      ThreeMfDocument: () => Ek,
      ThreeMfDocumentBuilder: () => Hk,
      ThreeMfItem: () => qk,
      ThreeMfMaterialBuilder: () => Rk,
      ThreeMfMesh: () => Fk,
      ThreeMfMeshBuilder: () => ek,
      ThreeMfMeta: () => Ck,
      ThreeMfMetadataGroup: () => Wk,
      ThreeMfModel: () => ik,
      ThreeMfModelBuilder: () => Tk,
      ThreeMfObject: () => Ik,
      ThreeMfObjectBuilder: () => nk,
      ThreeMfRelationship: () => zk,
      ThreeMfRelationships: () => rk,
      ThreeMfResources: () => mk,
      ThreeMfSerializer: () => xk,
      ThreeMfSerializerGlobalConfiguration: () => Nk,
      ThreeMfTriangle: () => lk,
      ThreeMfTriangles: () => ck,
      ThreeMfVertex: () => ak,
      ThreeMfVertices: () => vk,
      ToQualifiedString: () => qy,
      TokenType: () => By,
      TriangleSetsNamespace: () => Sk,
      USDZExportAsync: () => iy,
      Utf8XmlWriterToBytes: () => Zk,
      XmlAttr: () => ly,
      XmlBuilder: () => Gk,
      XmlElem: () => jy,
      XmlIgnore: () => cy,
      XmlName: () => ay,
      XmlNameToParts: () => sy,
      XmlSerializer: () => Oy,
      _ConvertToGLTFPBRMetallicRoughness: () => CZ,
      _SolveMetallic: () => iZ,
      __IGLTFExporterExtension: () => kG
    });
    var wG = ZG(37432),
      SG = ZG(61800),
      LG = ZG(40664);
    class yG {
      static OBJ(GG, bG, ZG, yG) {
        const kG = [];
        let UG = 1,
          YG = 1;
        bG && (ZG || (ZG = "mat"), kG.push("mtllib " + ZG + ".mtl"));
        for (let VG = 0; VG < GG.length; VG++) {
          const ZG = GG[VG],
            pG = ZG.name || `mesh${VG}}`;
          kG.push(`o ${pG}`);
          let fG = null;
          if (yG) {
            const GG = ZG.computeWorldMatrix(!0);
            fG = new wG.Matrix, GG.invertToRef(fG), ZG.bakeTransformIntoVertices(GG)
          }
          if (bG) {
            const GG = ZG.material;
            GG && kG.push("usemtl " + GG.id)
          }
          const QG = ZG.geometry;
          if (!QG) {
            SG.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const KG = QG.getVerticesData("position"),
            hG = QG.getVerticesData("normal"),
            dG = QG.getVerticesData("uv"),
            JG = QG.IwG();
          let rG = 0,
            zG = 0;
          if (!KG || !JG) {
            SG.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const EG = GG[0].Dv().useRightHandedSystem ? 1 : -1;
          for (let GG = 0; GG < KG.length; GG += 3) kG.push("v " + KG[GG] * EG + " " + KG[GG + 1] + " " + KG[GG + 2]), rG++;
          if (null != hG)
            for (let GG = 0; GG < hG.length; GG += 3) kG.push("vn " + hG[GG] * EG + " " + hG[GG + 1] + " " + hG[GG + 2]);
          if (null != dG)
            for (let GG = 0; GG < dG.length; GG += 2) kG.push("vt " + dG[GG] + " " + dG[GG + 1]), zG++;
          const oG = ["", "", ""],
            XG = (ZG.material || ZG.Dv().defaultMaterial)._getEffectiveOrientation(ZG),
            [uG, iG] = XG === LG.e.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let GG = 0; GG < JG.length; GG += 3) {
            const bG = [String(JG[GG] + UG), String(JG[GG + uG] + UG), String(JG[GG + iG] + UG)],
              ZG = [String(JG[GG] + YG), String(JG[GG + uG] + YG), String(JG[GG + iG] + YG)],
              wG = bG,
              SG = null != dG ? ZG : oG,
              LG = null != hG ? bG : oG;
            kG.push("f " + wG[0] + "/" + SG[0] + "/" + LG[0] + " " + wG[1] + "/" + SG[1] + "/" + LG[1] + " " + wG[2] + "/" + SG[2] + "/" + LG[2])
          }
          yG && fG && ZG.bakeTransformIntoVertices(fG), UG += rG, YG += zG
        }
        return kG.join("\n")
      }
      static MTL(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const ZG = [],
          wG = GG.material;
        ZG.push("newmtl " + bG), ZG.push("  Ns " + wG.specularPower.toFixed(4)), ZG.push("  Ni 1.5000"), ZG.push("  d " + wG.alpha.toFixed(4)), ZG.push("  Tr 0.0000"), ZG.push("  Tf 1.0000 1.0000 1.0000"), ZG.push("  illum 2"), ZG.push("  Ka " + wG.ambientColor.r.toFixed(4) + " " + wG.ambientColor.g.toFixed(4) + " " + wG.ambientColor.b.toFixed(4)), ZG.push("  Kd " + wG.diffuseColor.r.toFixed(4) + " " + wG.diffuseColor.g.toFixed(4) + " " + wG.diffuseColor.b.toFixed(4)), ZG.push("  Ks " + wG.specularColor.r.toFixed(4) + " " + wG.specularColor.g.toFixed(4) + " " + wG.specularColor.b.toFixed(4)), ZG.push("  Ke " + wG.emissiveColor.r.toFixed(4) + " " + wG.emissiveColor.g.toFixed(4) + " " + wG.emissiveColor.b.toFixed(4));
        wG.ambientTexture && ZG.push("  map_Ka " + wG.ambientTexture.name), wG.diffuseTexture && ZG.push("  map_Kd " + wG.diffuseTexture.name), wG.specularTexture && ZG.push("  map_Ks " + wG.specularTexture.name), wG.bumpTexture && ZG.push("  map_bump -imfchan z " + wG.bumpTexture.name), wG.opacityTexture && ZG.push("  map_d " + wG.opacityTexture.name);
        return ZG.join("\n")
      }
    }
    var kG = 0,
      UG = ZG(41979);
    class YG {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const GG in this.files) {
          const bG = this.files[GG],
            ZG = new Blob([bG], {
              type: (0, UG.c)(GG)
            });
          SG.Tools.Download(ZG, GG)
        }
      }
    }
    var VG = ZG(41552),
      pG = ZG(41498),
      fG = ZG(42065),
      QG = ZG(41502),
      KG = ZG(40197),
      hG = ZG(37463),
      dG = ZG(37618),
      JG = ZG(37471);
    const rG = JG.HighestCommonFactor,
      zG = {
        ...JG,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: rG
      };
    var EG = ZG(42268),
      oG = ZG(41527),
      XG = ZG(42025),
      uG = ZG(42032),
      iG = ZG(42289);
    (0, iG.RegisterDumpTools)();
    var CG = ZG(40393),
      WG = ZG(40398),
      mG = ZG(39093),
      IG = ZG(40484),
      FG = ZG(40857),
      vG = ZG(42262);
    let aG = 0;
    const cG = (GG, bG, ZG, wG) => {
        if (!GG[ZG]) {
          const SG = GG.useDelayedTextureLoading;
          GG.useDelayedTextureLoading = !1;
          const LG = GG._blockEntityCollection;
          GG._blockEntityCollection = !1;
          const yG = FG.d.CreateFromBase64String(bG, wG + aG++, GG, !0, !1, FG.d.BILINEAR_SAMPLINGMODE);
          GG._blockEntityCollection = LG;
          const kG = GG.CK().getLoadedTexturesCache(),
            UG = kG.indexOf(yG.getInternalTexture()); - 1 !== UG && kG.splice(UG, 1), yG.isRGBD = !0, yG.wrapU = FG.d.CLAMP_ADDRESSMODE, yG.wrapV = FG.d.CLAMP_ADDRESSMODE, GG[ZG] = yG, GG.useDelayedTextureLoading = SG, vG.c.ExpandRGBDTexture(yG);
          const YG = GG.CK().iK.add((() => {
            yG.isRGBD = !0;
            const bG = GG.onBeforeRenderObservable.add((() => {
              yG.isReady() && (GG.onBeforeRenderObservable.remove(bG), vG.c.ExpandRGBDTexture(yG))
            }))
          }));
          GG.Gl.add((() => {
            GG.CK().iK.remove(YG)
          }))
        }
        return GG[ZG]
      },
      lG = GG => cG(GG, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      jG = GG => cG(GG, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      PG = GG => cG(GG, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var MG = ZG(40475),
      AG = ZG(37439),
      sG = ZG(40524),
      qG = ZG(40660),
      nG = ZG(40735);
    class gG extends qG.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let eG = (() => {
      var GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG;
      let VG, pG, fG, QG, KG, hG, dG, JG, rG, zG = nG.e,
        EG = [],
        oG = [],
        XG = [],
        uG = [],
        iG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [];
      return GG = class extends zG {
        get useEnergyConservation() {
          return (0, CG.e)(this, bG, "f")
        }
        set useEnergyConservation(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, CG.e)(this, ZG, "f")
        }
        set useSmithVisibilityHeightCorrelated(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get useSphericalHarmonics() {
          return (0, CG.e)(this, wG, "f")
        }
        set useSphericalHarmonics(GG) {
          (0, CG.h)(this, wG, GG, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, CG.e)(this, SG, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(GG) {
          (0, CG.h)(this, SG, GG, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, CG.e)(this, LG, "f")
        }
        set mixIblRadianceWithIrradiance(GG) {
          (0, CG.h)(this, LG, GG, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, CG.e)(this, yG, "f")
        }
        set useLegacySpecularEnergyConservation(GG) {
          (0, CG.h)(this, yG, GG, "f")
        }
        get baseDiffuseModel() {
          return (0, CG.e)(this, kG, "f")
        }
        set baseDiffuseModel(GG) {
          (0, CG.h)(this, kG, GG, "f")
        }
        get dielectricSpecularModel() {
          return (0, CG.e)(this, UG, "f")
        }
        set dielectricSpecularModel(GG) {
          (0, CG.h)(this, UG, GG, "f")
        }
        get conductorSpecularModel() {
          return (0, CG.e)(this, YG, "f")
        }
        set conductorSpecularModel(GG) {
          (0, CG.h)(this, YG, GG, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(VG) {
          let pG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VG, "PBRBRDF", 90, new gG, pG), this._useEnergyConservation = GG.DEFAULT_USE_ENERGY_CONSERVATION, bG.set(this, (0, CG.n)(this, EG, GG.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, CG.n)(this, oG), GG.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), ZG.set(this, (0, CG.n)(this, XG, GG.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, CG.n)(this, uG), GG.DEFAULT_USE_SPHERICAL_HARMONICS), wG.set(this, (0, CG.n)(this, iG, GG.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, CG.n)(this, mG), GG.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), SG.set(this, (0, CG.n)(this, IG, GG.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, CG.n)(this, FG), GG.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), LG.set(this, (0, CG.n)(this, vG, GG.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, CG.n)(this, aG), GG.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), yG.set(this, (0, CG.n)(this, cG, GG.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, CG.n)(this, lG), GG.DEFAULT_DIFFUSE_MODEL), kG.set(this, (0, CG.n)(this, jG, GG.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, CG.n)(this, PG), GG.DEFAULT_DIELECTRIC_SPECULAR_MODEL), UG.set(this, (0, CG.n)(this, MG, GG.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, CG.n)(this, AG), GG.DEFAULT_CONDUCTOR_SPECULAR_MODEL), YG.set(this, (0, CG.n)(this, sG, GG.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, CG.n)(this, qG), this._internalMarkAllSubMeshesAsMiscDirty = VG._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(GG) {
          GG.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, GG.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, GG.SPHERICAL_HARMONICS = this._useSphericalHarmonics, GG.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, GG.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, GG.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, GG.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, GG.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, GG.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, SG = new WeakMap, LG = new WeakMap, yG = new WeakMap, kG = new WeakMap, UG = new WeakMap, YG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(zG[Symbol.metadata] ?? null) : void 0;
        VG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], pG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], fG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], QG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], KG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], hG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], dG = [(0, WG.Q)("baseDiffuseModel"), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], JG = [(0, WG.Q)("dielectricSpecularModel"), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], rG = [(0, WG.Q)("conductorSpecularModel"), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], (0, CG.k)(GG, null, VG, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: GG => "useEnergyConservation" in GG,
            get: GG => GG.useEnergyConservation,
            set: (GG, bG) => {
              GG.useEnergyConservation = bG
            }
          },
          metadata: bG
        }, EG, oG), (0, CG.k)(GG, null, pG, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: GG => "useSmithVisibilityHeightCorrelated" in GG,
            get: GG => GG.useSmithVisibilityHeightCorrelated,
            set: (GG, bG) => {
              GG.useSmithVisibilityHeightCorrelated = bG
            }
          },
          metadata: bG
        }, XG, uG), (0, CG.k)(GG, null, fG, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: GG => "useSphericalHarmonics" in GG,
            get: GG => GG.useSphericalHarmonics,
            set: (GG, bG) => {
              GG.useSphericalHarmonics = bG
            }
          },
          metadata: bG
        }, iG, mG), (0, CG.k)(GG, null, QG, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: GG => "useSpecularGlossinessInputEnergyConservation" in GG,
            get: GG => GG.useSpecularGlossinessInputEnergyConservation,
            set: (GG, bG) => {
              GG.useSpecularGlossinessInputEnergyConservation = bG
            }
          },
          metadata: bG
        }, IG, FG), (0, CG.k)(GG, null, KG, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: GG => "mixIblRadianceWithIrradiance" in GG,
            get: GG => GG.mixIblRadianceWithIrradiance,
            set: (GG, bG) => {
              GG.mixIblRadianceWithIrradiance = bG
            }
          },
          metadata: bG
        }, vG, aG), (0, CG.k)(GG, null, hG, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: GG => "useLegacySpecularEnergyConservation" in GG,
            get: GG => GG.useLegacySpecularEnergyConservation,
            set: (GG, bG) => {
              GG.useLegacySpecularEnergyConservation = bG
            }
          },
          metadata: bG
        }, cG, lG), (0, CG.k)(GG, null, dG, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: GG => "baseDiffuseModel" in GG,
            get: GG => GG.baseDiffuseModel,
            set: (GG, bG) => {
              GG.baseDiffuseModel = bG
            }
          },
          metadata: bG
        }, jG, PG), (0, CG.k)(GG, null, JG, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: GG => "dielectricSpecularModel" in GG,
            get: GG => GG.dielectricSpecularModel,
            set: (GG, bG) => {
              GG.dielectricSpecularModel = bG
            }
          },
          metadata: bG
        }, MG, AG), (0, CG.k)(GG, null, rG, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: GG => "conductorSpecularModel" in GG,
            get: GG => GG.conductorSpecularModel,
            set: (GG, bG) => {
              GG.conductorSpecularModel = bG
            }
          },
          metadata: bG
        }, sG, qG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG.DEFAULT_USE_ENERGY_CONSERVATION = !0, GG.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, GG.DEFAULT_USE_SPHERICAL_HARMONICS = !0, GG.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, GG.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, GG.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, GG.DEFAULT_DIFFUSE_MODEL = 0, GG.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, GG.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, GG
    })();
    var RG = ZG(40655),
      TG = ZG(37621),
      HG = ZG(40658),
      tG = ZG(40491),
      DG = ZG(40720),
      NG = ZG(40717),
      OG = ZG(40725),
      xG = ZG(40705);
    class BG extends qG.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Gb = (() => {
      var GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG;
      let VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG = nG.e,
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [],
        sG = [],
        qG = [],
        gG = [],
        eG = [],
        RG = [],
        HG = [],
        tG = [],
        DG = [],
        OG = [],
        Gb = [],
        bb = [],
        Zb = [],
        wb = [],
        Sb = [],
        Lb = [],
        yb = [],
        kb = [];
      return GG = class extends iG {
        get isEnabled() {
          return (0, CG.e)(this, bG, "f")
        }
        set isEnabled(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        get indexOfRefraction() {
          return (0, CG.e)(this, ZG, "f")
        }
        set indexOfRefraction(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get texture() {
          return (0, CG.e)(this, wG, "f")
        }
        set texture(GG) {
          (0, CG.h)(this, wG, GG, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, CG.e)(this, SG, "f")
        }
        set useRoughnessFromMainTexture(GG) {
          (0, CG.h)(this, SG, GG, "f")
        }
        get textureRoughness() {
          return (0, CG.e)(this, LG, "f")
        }
        set textureRoughness(GG) {
          (0, CG.h)(this, LG, GG, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, CG.e)(this, yG, "f")
        }
        set remapF0OnInterfaceChange(GG) {
          (0, CG.h)(this, yG, GG, "f")
        }
        get bumpTexture() {
          return (0, CG.e)(this, kG, "f")
        }
        set bumpTexture(GG) {
          (0, CG.h)(this, kG, GG, "f")
        }
        get isTintEnabled() {
          return (0, CG.e)(this, UG, "f")
        }
        set isTintEnabled(GG) {
          (0, CG.h)(this, UG, GG, "f")
        }
        get tintTexture() {
          return (0, CG.e)(this, YG, "f")
        }
        set tintTexture(GG) {
          (0, CG.h)(this, YG, GG, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(VG) {
          let pG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VG, "PBRClearCoat", 100, new BG, pG), this._isEnabled = !1, bG.set(this, (0, CG.n)(this, mG, !1)), this.intensity = ((0, CG.n)(this, IG), (0, CG.n)(this, FG, 1)), this.roughness = ((0, CG.n)(this, vG), (0, CG.n)(this, aG, 0)), this._indexOfRefraction = ((0, CG.n)(this, cG), GG._DefaultIndexOfRefraction), ZG.set(this, (0, CG.n)(this, lG, GG._DefaultIndexOfRefraction)), this._texture = ((0, CG.n)(this, jG), null), wG.set(this, (0, CG.n)(this, PG, null)), this._useRoughnessFromMainTexture = ((0, CG.n)(this, MG), !0), SG.set(this, (0, CG.n)(this, AG, !0)), this._textureRoughness = ((0, CG.n)(this, sG), null), LG.set(this, (0, CG.n)(this, qG, null)), this._remapF0OnInterfaceChange = ((0, CG.n)(this, gG), !0), yG.set(this, (0, CG.n)(this, eG, !0)), this._bumpTexture = ((0, CG.n)(this, RG), null), kG.set(this, (0, CG.n)(this, HG, null)), this._isTintEnabled = ((0, CG.n)(this, tG), !1), UG.set(this, (0, CG.n)(this, DG, !1)), this.tintColor = ((0, CG.n)(this, OG), (0, CG.n)(this, Gb, TG.c.White())), this.tintColorAtDistance = ((0, CG.n)(this, bb), (0, CG.n)(this, Zb, 1)), this.tintThickness = ((0, CG.n)(this, wb), (0, CG.n)(this, Sb, 1)), this._tintTexture = ((0, CG.n)(this, Lb), null), YG.set(this, (0, CG.n)(this, yb, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, CG.n)(this, kb), this._internalMarkAllSubMeshesAsTexturesDirty = VG._dirtyCallbacks[1]
        }
        isReadyForSubMesh(GG, bG, ZG) {
          if (!this._isEnabled) return !0;
          const wG = this._material._disableBumpMap;
          if (GG._areTexturesDirty && bG.texturesEnabled) {
            if (this._texture && NG.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && NG.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (ZG.getCaps().standardDerivatives && this._bumpTexture && NG.d.ClearCoatBumpTextureEnabled && !wG && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && NG.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(bG, ZG) {
          this._isEnabled ? (bG.CLEARCOAT = !0, bG.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, bG.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, bG._areTexturesDirty && ZG.texturesEnabled && (this._texture && NG.d.ClearCoatTextureEnabled ? (0, xG.bb)(this._texture, bG, "CLEARCOAT_TEXTURE") : bG.CLEARCOAT_TEXTURE = !1, this._textureRoughness && NG.d.ClearCoatTextureEnabled ? (0, xG.bb)(this._textureRoughness, bG, "CLEARCOAT_TEXTURE_ROUGHNESS") : bG.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && NG.d.ClearCoatBumpTextureEnabled ? (0, xG.bb)(this._bumpTexture, bG, "CLEARCOAT_BUMP") : bG.CLEARCOAT_BUMP = !1, bG.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === GG._DefaultIndexOfRefraction, this._isTintEnabled ? (bG.CLEARCOAT_TINT = !0, this._tintTexture && NG.d.ClearCoatTintTextureEnabled ? ((0, xG.bb)(this._tintTexture, bG, "CLEARCOAT_TINT_TEXTURE"), bG.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : bG.CLEARCOAT_TINT_TEXTURE = !1) : (bG.CLEARCOAT_TINT = !1, bG.CLEARCOAT_TINT_TEXTURE = !1))) : (bG.CLEARCOAT = !1, bG.CLEARCOAT_TEXTURE = !1, bG.CLEARCOAT_TEXTURE_ROUGHNESS = !1, bG.CLEARCOAT_BUMP = !1, bG.CLEARCOAT_TINT = !1, bG.CLEARCOAT_TINT_TEXTURE = !1, bG.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, bG.CLEARCOAT_DEFAULTIOR = !1, bG.CLEARCOAT_TEXTUREDIRECTUV = 0, bG.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, bG.CLEARCOAT_BUMPDIRECTUV = 0, bG.CLEARCOAT_REMAP_F0 = !1, bG.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, bG.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(GG, bG, ZG, wG) {
          if (!this._isEnabled) return;
          const SG = wG.materialDefines,
            LG = this._material.isFrozen,
            yG = this._material._disableBumpMap,
            kG = this._material._invertNormalMapX,
            UG = this._material._invertNormalMapY;
          if (!GG.useUbo || !LG || !GG.isSync) {
            (this._texture || this._textureRoughness) && NG.d.ClearCoatTextureEnabled && (GG.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, xG.C)(this._texture, GG, "clearCoat"), this._textureRoughness && !SG.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, xG.C)(this._textureRoughness, GG, "clearCoatRoughness")), this._bumpTexture && ZG.getCaps().standardDerivatives && NG.d.ClearCoatTextureEnabled && !yG && (GG.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, xG.C)(this._bumpTexture, GG, "clearCoatBump"), bG._mirroredCameraPosition ? GG.updateFloat2("vClearCoatTangentSpaceParams", kG ? 1 : -1, UG ? 1 : -1) : GG.updateFloat2("vClearCoatTangentSpaceParams", kG ? -1 : 1, UG ? -1 : 1)), this._tintTexture && NG.d.ClearCoatTintTextureEnabled && (GG.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, xG.C)(this._tintTexture, GG, "clearCoatTint")), GG.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const wG = 1 - this._indexOfRefraction,
              LG = 1 + this._indexOfRefraction,
              YG = Math.pow(-wG / LG, 2),
              VG = 1 / this._indexOfRefraction;
            GG.updateFloat4("vClearCoatRefractionParams", YG, VG, wG, LG), this._isTintEnabled && (GG.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), GG.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          bG.texturesEnabled && (this._texture && NG.d.ClearCoatTextureEnabled && GG.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !SG.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && NG.d.ClearCoatTextureEnabled && GG.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && ZG.getCaps().standardDerivatives && NG.d.ClearCoatBumpTextureEnabled && !yG && GG.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && NG.d.ClearCoatTintTextureEnabled && GG.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(GG) {
          return this._texture === GG || (this._textureRoughness === GG || (this._bumpTexture === GG || this._tintTexture === GG))
        }
        getActiveTextures(GG) {
          this._texture && GG.push(this._texture), this._textureRoughness && GG.push(this._textureRoughness), this._bumpTexture && GG.push(this._bumpTexture), this._tintTexture && GG.push(this._tintTexture)
        }
        getAnimatables(GG) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && GG.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && GG.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && GG.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && GG.push(this._tintTexture)
        }
        dispose(GG) {
          GG && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(GG, bG, ZG) {
          return GG.CLEARCOAT_BUMP && bG.addFallback(ZG++, "CLEARCOAT_BUMP"), GG.CLEARCOAT_TINT && bG.addFallback(ZG++, "CLEARCOAT_TINT"), GG.CLEARCOAT && bG.addFallback(ZG++, "CLEARCOAT"), ZG
        }
        getSamplers(GG) {
          GG.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, SG = new WeakMap, LG = new WeakMap, yG = new WeakMap, kG = new WeakMap, UG = new WeakMap, YG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(iG[Symbol.metadata] ?? null) : void 0;
        VG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], pG = [(0, WG.Q)()], fG = [(0, WG.Q)()], QG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], KG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], hG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], dG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], JG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], rG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], zG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], EG = [(0, WG.m)()], oG = [(0, WG.Q)()], XG = [(0, WG.Q)()], uG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], (0, CG.k)(GG, null, VG, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isEnabled" in GG,
            get: GG => GG.isEnabled,
            set: (GG, bG) => {
              GG.isEnabled = bG
            }
          },
          metadata: bG
        }, mG, IG), (0, CG.k)(GG, null, QG, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: GG => "indexOfRefraction" in GG,
            get: GG => GG.indexOfRefraction,
            set: (GG, bG) => {
              GG.indexOfRefraction = bG
            }
          },
          metadata: bG
        }, lG, jG), (0, CG.k)(GG, null, KG, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: GG => "texture" in GG,
            get: GG => GG.texture,
            set: (GG, bG) => {
              GG.texture = bG
            }
          },
          metadata: bG
        }, PG, MG), (0, CG.k)(GG, null, hG, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "useRoughnessFromMainTexture" in GG,
            get: GG => GG.useRoughnessFromMainTexture,
            set: (GG, bG) => {
              GG.useRoughnessFromMainTexture = bG
            }
          },
          metadata: bG
        }, AG, sG), (0, CG.k)(GG, null, dG, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: GG => "textureRoughness" in GG,
            get: GG => GG.textureRoughness,
            set: (GG, bG) => {
              GG.textureRoughness = bG
            }
          },
          metadata: bG
        }, qG, gG), (0, CG.k)(GG, null, JG, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: GG => "remapF0OnInterfaceChange" in GG,
            get: GG => GG.remapF0OnInterfaceChange,
            set: (GG, bG) => {
              GG.remapF0OnInterfaceChange = bG
            }
          },
          metadata: bG
        }, eG, RG), (0, CG.k)(GG, null, rG, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "bumpTexture" in GG,
            get: GG => GG.bumpTexture,
            set: (GG, bG) => {
              GG.bumpTexture = bG
            }
          },
          metadata: bG
        }, HG, tG), (0, CG.k)(GG, null, zG, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isTintEnabled" in GG,
            get: GG => GG.isTintEnabled,
            set: (GG, bG) => {
              GG.isTintEnabled = bG
            }
          },
          metadata: bG
        }, DG, OG), (0, CG.k)(GG, null, uG, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "tintTexture" in GG,
            get: GG => GG.tintTexture,
            set: (GG, bG) => {
              GG.tintTexture = bG
            }
          },
          metadata: bG
        }, yb, kb), (0, CG.k)(null, null, pG, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "intensity" in GG,
            get: GG => GG.intensity,
            set: (GG, bG) => {
              GG.intensity = bG
            }
          },
          metadata: bG
        }, FG, vG), (0, CG.k)(null, null, fG, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: GG => "roughness" in GG,
            get: GG => GG.roughness,
            set: (GG, bG) => {
              GG.roughness = bG
            }
          },
          metadata: bG
        }, aG, cG), (0, CG.k)(null, null, EG, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "tintColor" in GG,
            get: GG => GG.tintColor,
            set: (GG, bG) => {
              GG.tintColor = bG
            }
          },
          metadata: bG
        }, Gb, bb), (0, CG.k)(null, null, oG, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: GG => "tintColorAtDistance" in GG,
            get: GG => GG.tintColorAtDistance,
            set: (GG, bG) => {
              GG.tintColorAtDistance = bG
            }
          },
          metadata: bG
        }, Zb, wb), (0, CG.k)(null, null, XG, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: GG => "tintThickness" in GG,
            get: GG => GG.tintThickness,
            set: (GG, bG) => {
              GG.tintThickness = bG
            }
          },
          metadata: bG
        }, Sb, Lb), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG._DefaultIndexOfRefraction = 1.5, GG
    })();
    class bb extends qG.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Zb = (() => {
      var GG, bG, ZG, wG;
      let SG, LG, yG, kG, UG, YG, VG, pG = nG.e,
        fG = [],
        QG = [],
        KG = [],
        hG = [],
        dG = [],
        JG = [],
        rG = [],
        zG = [],
        EG = [],
        oG = [],
        XG = [],
        uG = [],
        iG = [],
        mG = [];
      return GG = class extends pG {
        get isEnabled() {
          return (0, CG.e)(this, bG, "f")
        }
        set isEnabled(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        get texture() {
          return (0, CG.e)(this, ZG, "f")
        }
        set texture(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get thicknessTexture() {
          return (0, CG.e)(this, wG, "f")
        }
        set thicknessTexture(GG) {
          (0, CG.h)(this, wG, GG, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(SG) {
          let LG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SG, "PBRIridescence", 110, new bb, LG), this._isEnabled = !1, bG.set(this, (0, CG.n)(this, fG, !1)), this.intensity = ((0, CG.n)(this, QG), (0, CG.n)(this, KG, 1)), this.minimumThickness = ((0, CG.n)(this, hG), (0, CG.n)(this, dG, GG._DefaultMinimumThickness)), this.maximumThickness = ((0, CG.n)(this, JG), (0, CG.n)(this, rG, GG._DefaultMaximumThickness)), this.indexOfRefraction = ((0, CG.n)(this, zG), (0, CG.n)(this, EG, GG._DefaultIndexOfRefraction)), this._texture = ((0, CG.n)(this, oG), null), ZG.set(this, (0, CG.n)(this, XG, null)), this._thicknessTexture = ((0, CG.n)(this, uG), null), wG.set(this, (0, CG.n)(this, iG, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, CG.n)(this, mG), this._internalMarkAllSubMeshesAsTexturesDirty = SG._dirtyCallbacks[1]
        }
        isReadyForSubMesh(GG, bG) {
          if (!this._isEnabled) return !0;
          if (GG._areTexturesDirty && bG.texturesEnabled) {
            if (this._texture && NG.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && NG.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(GG, bG) {
          this._isEnabled ? (GG.IRIDESCENCE = !0, GG._areTexturesDirty && bG.texturesEnabled && (this._texture && NG.d.IridescenceTextureEnabled ? (0, xG.bb)(this._texture, GG, "IRIDESCENCE_TEXTURE") : GG.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && NG.d.IridescenceTextureEnabled ? (0, xG.bb)(this._thicknessTexture, GG, "IRIDESCENCE_THICKNESS_TEXTURE") : GG.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (GG.IRIDESCENCE = !1, GG.IRIDESCENCE_TEXTURE = !1, GG.IRIDESCENCE_THICKNESS_TEXTURE = !1, GG.IRIDESCENCE_TEXTUREDIRECTUV = 0, GG.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(GG, bG) {
          if (!this._isEnabled) return;
          const ZG = this._material.isFrozen;
          GG.useUbo && ZG && GG.isSync || ((this._texture || this._thicknessTexture) && NG.d.IridescenceTextureEnabled && (GG.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, xG.C)(this._texture, GG, "iridescence"), this._thicknessTexture && (0, xG.C)(this._thicknessTexture, GG, "iridescenceThickness")), GG.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), bG.texturesEnabled && (this._texture && NG.d.IridescenceTextureEnabled && GG.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && NG.d.IridescenceTextureEnabled && GG.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(GG) {
          return this._texture === GG || this._thicknessTexture === GG
        }
        getActiveTextures(GG) {
          this._texture && GG.push(this._texture), this._thicknessTexture && GG.push(this._thicknessTexture)
        }
        getAnimatables(GG) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && GG.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && GG.push(this._thicknessTexture)
        }
        dispose(GG) {
          GG && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(GG, bG, ZG) {
          return GG.IRIDESCENCE && bG.addFallback(ZG++, "IRIDESCENCE"), ZG
        }
        getSamplers(GG) {
          GG.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(pG[Symbol.metadata] ?? null) : void 0;
        SG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], LG = [(0, WG.Q)()], yG = [(0, WG.Q)()], kG = [(0, WG.Q)()], UG = [(0, WG.Q)()], YG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], VG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], (0, CG.k)(GG, null, SG, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isEnabled" in GG,
            get: GG => GG.isEnabled,
            set: (GG, bG) => {
              GG.isEnabled = bG
            }
          },
          metadata: bG
        }, fG, QG), (0, CG.k)(GG, null, YG, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: GG => "texture" in GG,
            get: GG => GG.texture,
            set: (GG, bG) => {
              GG.texture = bG
            }
          },
          metadata: bG
        }, XG, uG), (0, CG.k)(GG, null, VG, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "thicknessTexture" in GG,
            get: GG => GG.thicknessTexture,
            set: (GG, bG) => {
              GG.thicknessTexture = bG
            }
          },
          metadata: bG
        }, iG, mG), (0, CG.k)(null, null, LG, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "intensity" in GG,
            get: GG => GG.intensity,
            set: (GG, bG) => {
              GG.intensity = bG
            }
          },
          metadata: bG
        }, KG, hG), (0, CG.k)(null, null, yG, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: GG => "minimumThickness" in GG,
            get: GG => GG.minimumThickness,
            set: (GG, bG) => {
              GG.minimumThickness = bG
            }
          },
          metadata: bG
        }, dG, JG), (0, CG.k)(null, null, kG, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: GG => "maximumThickness" in GG,
            get: GG => GG.maximumThickness,
            set: (GG, bG) => {
              GG.maximumThickness = bG
            }
          },
          metadata: bG
        }, rG, zG), (0, CG.k)(null, null, UG, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: GG => "indexOfRefraction" in GG,
            get: GG => GG.indexOfRefraction,
            set: (GG, bG) => {
              GG.indexOfRefraction = bG
            }
          },
          metadata: bG
        }, EG, oG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG._DefaultMinimumThickness = 100, GG._DefaultMaximumThickness = 400, GG._DefaultIndexOfRefraction = 1.3, GG
    })();
    class wb extends qG.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Sb = (() => {
      var GG, bG, ZG, wG;
      let SG, LG, yG, kG, UG, YG = nG.e,
        VG = [],
        pG = [],
        fG = [],
        QG = [],
        KG = [],
        hG = [],
        dG = [],
        JG = [],
        rG = [],
        zG = [];
      return GG = class extends YG {
        get isEnabled() {
          return (0, CG.e)(this, bG, "f")
        }
        set isEnabled(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        set angle(GG) {
          this.direction.x = Math.cos(GG), this.direction.y = Math.sin(GG)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, CG.e)(this, ZG, "f")
        }
        set texture(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get legacy() {
          return (0, CG.e)(this, wG, "f")
        }
        set legacy(GG) {
          (0, CG.h)(this, wG, GG, "f")
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
        constructor(GG) {
          let SG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(GG, "PBRAnisotropic", 110, new wb, SG), this._isEnabled = !1, bG.set(this, (0, CG.n)(this, VG, !1)), this.intensity = ((0, CG.n)(this, pG), (0, CG.n)(this, fG, 1)), this.direction = ((0, CG.n)(this, QG), (0, CG.n)(this, KG, new AG.m(1, 0))), this._texture = ((0, CG.n)(this, hG), null), ZG.set(this, (0, CG.n)(this, dG, null)), this._legacy = ((0, CG.n)(this, JG), !1), wG.set(this, (0, CG.n)(this, rG, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, CG.n)(this, zG), this._internalMarkAllSubMeshesAsTexturesDirty = GG._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = GG._dirtyCallbacks[16]
        }
        isReadyForSubMesh(GG, bG) {
          return !this._isEnabled || !(GG._areTexturesDirty && bG.texturesEnabled && this._texture && NG.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(GG, bG, ZG) {
          this._isEnabled ? (GG.ANISOTROPIC = this._isEnabled, this._isEnabled && !ZG.isVerticesDataPresent(sG.l.TangentKind) && (GG._needUVs = !0, GG.MAINUV1 = !0), GG._areTexturesDirty && bG.texturesEnabled && (this._texture && NG.d.AnisotropicTextureEnabled ? (0, xG.bb)(this._texture, GG, "ANISOTROPIC_TEXTURE") : GG.ANISOTROPIC_TEXTURE = !1), GG._areMiscDirty && (GG.ANISOTROPIC_LEGACY = this._legacy)) : (GG.ANISOTROPIC = !1, GG.ANISOTROPIC_TEXTURE = !1, GG.ANISOTROPIC_TEXTUREDIRECTUV = 0, GG.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(GG, bG) {
          if (!this._isEnabled) return;
          const ZG = this._material.isFrozen;
          GG.useUbo && ZG && GG.isSync || (this._texture && NG.d.AnisotropicTextureEnabled && (GG.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, xG.C)(this._texture, GG, "anisotropy")), GG.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), bG.texturesEnabled && this._texture && NG.d.AnisotropicTextureEnabled && GG.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(GG) {
          return this._texture === GG
        }
        getActiveTextures(GG) {
          this._texture && GG.push(this._texture)
        }
        getAnimatables(GG) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && GG.push(this._texture)
        }
        dispose(GG) {
          GG && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(GG, bG, ZG) {
          return GG.ANISOTROPIC && bG.addFallback(ZG++, "ANISOTROPIC"), ZG
        }
        getSamplers(GG) {
          GG.push("anisotropySampler")
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
        parse(GG, bG, ZG) {
          super.parse(GG, bG, ZG), void 0 === GG.legacy && (this.legacy = !0)
        }
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(YG[Symbol.metadata] ?? null) : void 0;
        SG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], LG = [(0, WG.Q)()], yG = [(0, WG.I)()], kG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], UG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], (0, CG.k)(GG, null, SG, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isEnabled" in GG,
            get: GG => GG.isEnabled,
            set: (GG, bG) => {
              GG.isEnabled = bG
            }
          },
          metadata: bG
        }, VG, pG), (0, CG.k)(GG, null, kG, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: GG => "texture" in GG,
            get: GG => GG.texture,
            set: (GG, bG) => {
              GG.texture = bG
            }
          },
          metadata: bG
        }, dG, JG), (0, CG.k)(GG, null, UG, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: GG => "legacy" in GG,
            get: GG => GG.legacy,
            set: (GG, bG) => {
              GG.legacy = bG
            }
          },
          metadata: bG
        }, rG, zG), (0, CG.k)(null, null, LG, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "intensity" in GG,
            get: GG => GG.intensity,
            set: (GG, bG) => {
              GG.intensity = bG
            }
          },
          metadata: bG
        }, fG, QG), (0, CG.k)(null, null, yG, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: GG => "direction" in GG,
            get: GG => GG.direction,
            set: (GG, bG) => {
              GG.direction = bG
            }
          },
          metadata: bG
        }, KG, hG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG
    })();
    class Lb extends qG.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let yb = (() => {
      var GG, bG, ZG, wG, SG, LG, yG, kG;
      let UG, YG, VG, pG, fG, QG, KG, hG, dG, JG = nG.e,
        rG = [],
        zG = [],
        EG = [],
        oG = [],
        XG = [],
        uG = [],
        iG = [],
        mG = [],
        IG = [],
        FG = [],
        vG = [],
        aG = [],
        cG = [],
        lG = [],
        jG = [],
        PG = [],
        MG = [],
        AG = [];
      return GG = class extends JG {
        get isEnabled() {
          return (0, CG.e)(this, bG, "f")
        }
        set isEnabled(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, CG.e)(this, ZG, "f")
        }
        set linkSheenWithAlbedo(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get texture() {
          return (0, CG.e)(this, wG, "f")
        }
        set texture(GG) {
          (0, CG.h)(this, wG, GG, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, CG.e)(this, SG, "f")
        }
        set useRoughnessFromMainTexture(GG) {
          (0, CG.h)(this, SG, GG, "f")
        }
        get roughness() {
          return (0, CG.e)(this, LG, "f")
        }
        set roughness(GG) {
          (0, CG.h)(this, LG, GG, "f")
        }
        get textureRoughness() {
          return (0, CG.e)(this, yG, "f")
        }
        set textureRoughness(GG) {
          (0, CG.h)(this, yG, GG, "f")
        }
        get albedoScaling() {
          return (0, CG.e)(this, kG, "f")
        }
        set albedoScaling(GG) {
          (0, CG.h)(this, kG, GG, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(GG) {
          let UG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(GG, "Sheen", 120, new Lb, UG), this._isEnabled = !1, bG.set(this, (0, CG.n)(this, rG, !1)), this._linkSheenWithAlbedo = ((0, CG.n)(this, zG), !1), ZG.set(this, (0, CG.n)(this, EG, !1)), this.intensity = ((0, CG.n)(this, oG), (0, CG.n)(this, XG, 1)), this.color = ((0, CG.n)(this, uG), (0, CG.n)(this, iG, TG.c.White())), this._texture = ((0, CG.n)(this, mG), null), wG.set(this, (0, CG.n)(this, IG, null)), this._useRoughnessFromMainTexture = ((0, CG.n)(this, FG), !0), SG.set(this, (0, CG.n)(this, vG, !0)), this._roughness = ((0, CG.n)(this, aG), null), LG.set(this, (0, CG.n)(this, cG, null)), this._textureRoughness = ((0, CG.n)(this, lG), null), yG.set(this, (0, CG.n)(this, jG, null)), this._albedoScaling = ((0, CG.n)(this, PG), !1), kG.set(this, (0, CG.n)(this, MG, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, CG.n)(this, AG), this._internalMarkAllSubMeshesAsTexturesDirty = GG._dirtyCallbacks[1]
        }
        isReadyForSubMesh(GG, bG) {
          if (!this._isEnabled) return !0;
          if (GG._areTexturesDirty && bG.texturesEnabled) {
            if (this._texture && NG.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && NG.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(GG, bG) {
          this._isEnabled ? (GG.SHEEN = !0, GG.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, GG.SHEEN_ROUGHNESS = null !== this._roughness, GG.SHEEN_ALBEDOSCALING = this._albedoScaling, GG.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, GG._areTexturesDirty && bG.texturesEnabled && (this._texture && NG.d.SheenTextureEnabled ? ((0, xG.bb)(this._texture, GG, "SHEEN_TEXTURE"), GG.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : GG.SHEEN_TEXTURE = !1, this._textureRoughness && NG.d.SheenTextureEnabled ? (0, xG.bb)(this._textureRoughness, GG, "SHEEN_TEXTURE_ROUGHNESS") : GG.SHEEN_TEXTURE_ROUGHNESS = !1)) : (GG.SHEEN = !1, GG.SHEEN_TEXTURE = !1, GG.SHEEN_TEXTURE_ROUGHNESS = !1, GG.SHEEN_LINKWITHALBEDO = !1, GG.SHEEN_ROUGHNESS = !1, GG.SHEEN_ALBEDOSCALING = !1, GG.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, GG.SHEEN_GAMMATEXTURE = !1, GG.SHEEN_TEXTUREDIRECTUV = 0, GG.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(GG, bG, ZG, wG) {
          if (!this._isEnabled) return;
          const SG = wG.materialDefines,
            LG = this._material.isFrozen;
          GG.useUbo && LG && GG.isSync || ((this._texture || this._textureRoughness) && NG.d.SheenTextureEnabled && (GG.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, xG.C)(this._texture, GG, "sheen"), this._textureRoughness && !SG.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, xG.C)(this._textureRoughness, GG, "sheenRoughness")), GG.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && GG.updateFloat("vSheenRoughness", this._roughness)), bG.texturesEnabled && (this._texture && NG.d.SheenTextureEnabled && GG.setTexture("sheenSampler", this._texture), this._textureRoughness && !SG.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && NG.d.SheenTextureEnabled && GG.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(GG) {
          return this._texture === GG || this._textureRoughness === GG
        }
        getActiveTextures(GG) {
          this._texture && GG.push(this._texture), this._textureRoughness && GG.push(this._textureRoughness)
        }
        getAnimatables(GG) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && GG.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && GG.push(this._textureRoughness)
        }
        dispose(GG) {
          GG && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(GG, bG, ZG) {
          return GG.SHEEN && bG.addFallback(ZG++, "SHEEN"), ZG
        }
        getSamplers(GG) {
          GG.push("sheenSampler", "sheenRoughnessSampler")
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
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, SG = new WeakMap, LG = new WeakMap, yG = new WeakMap, kG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(JG[Symbol.metadata] ?? null) : void 0;
        UG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], YG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], VG = [(0, WG.Q)()], pG = [(0, WG.m)()], fG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], QG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], KG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], hG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], dG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], (0, CG.k)(GG, null, UG, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isEnabled" in GG,
            get: GG => GG.isEnabled,
            set: (GG, bG) => {
              GG.isEnabled = bG
            }
          },
          metadata: bG
        }, rG, zG), (0, CG.k)(GG, null, YG, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: GG => "linkSheenWithAlbedo" in GG,
            get: GG => GG.linkSheenWithAlbedo,
            set: (GG, bG) => {
              GG.linkSheenWithAlbedo = bG
            }
          },
          metadata: bG
        }, EG, oG), (0, CG.k)(GG, null, fG, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: GG => "texture" in GG,
            get: GG => GG.texture,
            set: (GG, bG) => {
              GG.texture = bG
            }
          },
          metadata: bG
        }, IG, FG), (0, CG.k)(GG, null, QG, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "useRoughnessFromMainTexture" in GG,
            get: GG => GG.useRoughnessFromMainTexture,
            set: (GG, bG) => {
              GG.useRoughnessFromMainTexture = bG
            }
          },
          metadata: bG
        }, vG, aG), (0, CG.k)(GG, null, KG, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: GG => "roughness" in GG,
            get: GG => GG.roughness,
            set: (GG, bG) => {
              GG.roughness = bG
            }
          },
          metadata: bG
        }, cG, lG), (0, CG.k)(GG, null, hG, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: GG => "textureRoughness" in GG,
            get: GG => GG.textureRoughness,
            set: (GG, bG) => {
              GG.textureRoughness = bG
            }
          },
          metadata: bG
        }, jG, PG), (0, CG.k)(GG, null, dG, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: GG => "albedoScaling" in GG,
            get: GG => GG.albedoScaling,
            set: (GG, bG) => {
              GG.albedoScaling = bG
            }
          },
          metadata: bG
        }, MG, AG), (0, CG.k)(null, null, VG, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "intensity" in GG,
            get: GG => GG.intensity,
            set: (GG, bG) => {
              GG.intensity = bG
            }
          },
          metadata: bG
        }, XG, uG), (0, CG.k)(null, null, pG, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: GG => "color" in GG,
            get: GG => GG.color,
            set: (GG, bG) => {
              GG.color = bG
            }
          },
          metadata: bG
        }, iG, mG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG
    })();
    class kb extends qG.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let Ub = (() => {
      var GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG;
      let JG, rG, zG, EG, oG, XG, uG, iG, mG, IG, FG, vG, aG, cG, lG, jG, PG, MG, sG, qG, gG, eG, RG, HG, tG, DG, OG, BG, Gb, bb, Zb = nG.e,
        wb = [],
        Sb = [],
        Lb = [],
        yb = [],
        Ub = [],
        Yb = [],
        Vb = [],
        pb = [],
        fb = [],
        Qb = [],
        Kb = [],
        hb = [],
        db = [],
        Jb = [],
        rb = [],
        zb = [],
        Eb = [],
        ob = [],
        Xb = [],
        ub = [],
        ib = [],
        Cb = [],
        Wb = [],
        mb = [],
        Ib = [],
        Fb = [],
        vb = [],
        ab = [],
        cb = [],
        lb = [],
        jb = [],
        Pb = [],
        Mb = [],
        Ab = [],
        sb = [],
        qb = [],
        nb = [],
        gb = [],
        eb = [],
        Rb = [],
        Tb = [],
        Hb = [],
        tb = [],
        Db = [],
        Nb = [],
        Ob = [],
        xb = [],
        Bb = [],
        GZ = [],
        bZ = [],
        ZZ = [],
        wZ = [],
        SZ = [],
        LZ = [],
        yZ = [],
        kZ = [],
        UZ = [],
        YZ = [],
        VZ = [],
        pZ = [];
      return GG = class extends Zb {
        get isRefractionEnabled() {
          return (0, CG.e)(this, bG, "f")
        }
        set isRefractionEnabled(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        get isTranslucencyEnabled() {
          return (0, CG.e)(this, ZG, "f")
        }
        set isTranslucencyEnabled(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get isDispersionEnabled() {
          return (0, CG.e)(this, wG, "f")
        }
        set isDispersionEnabled(GG) {
          (0, CG.h)(this, wG, GG, "f")
        }
        get isScatteringEnabled() {
          return (0, CG.e)(this, SG, "f")
        }
        set isScatteringEnabled(GG) {
          (0, CG.h)(this, SG, GG, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(GG) {
          this._scene.enableSubSurfaceForPrePass() && GG && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(GG))
        }
        get useAlbedoToTintRefraction() {
          return (0, CG.e)(this, LG, "f")
        }
        set useAlbedoToTintRefraction(GG) {
          (0, CG.h)(this, LG, GG, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, CG.e)(this, yG, "f")
        }
        set useAlbedoToTintTranslucency(GG) {
          (0, CG.h)(this, yG, GG, "f")
        }
        get thicknessTexture() {
          return (0, CG.e)(this, kG, "f")
        }
        set thicknessTexture(GG) {
          (0, CG.h)(this, kG, GG, "f")
        }
        get refractionTexture() {
          return (0, CG.e)(this, UG, "f")
        }
        set refractionTexture(GG) {
          (0, CG.h)(this, UG, GG, "f")
        }
        get indexOfRefraction() {
          return (0, CG.e)(this, YG, "f")
        }
        set indexOfRefraction(GG) {
          (0, CG.h)(this, YG, GG, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(GG) {
          const bG = GG >= 1 ? GG : -1;
          this._volumeIndexOfRefraction !== bG && (this._volumeIndexOfRefraction = bG, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, CG.e)(this, VG, "f")
        }
        set invertRefractionY(GG) {
          (0, CG.h)(this, VG, GG, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, CG.e)(this, pG, "f")
        }
        set linkRefractionWithTransparency(GG) {
          (0, CG.h)(this, pG, GG, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, CG.e)(this, fG, "f")
        }
        set useMaskFromThicknessTexture(GG) {
          (0, CG.h)(this, fG, GG, "f")
        }
        get refractionIntensityTexture() {
          return (0, CG.e)(this, QG, "f")
        }
        set refractionIntensityTexture(GG) {
          (0, CG.h)(this, QG, GG, "f")
        }
        get translucencyIntensityTexture() {
          return (0, CG.e)(this, KG, "f")
        }
        set translucencyIntensityTexture(GG) {
          (0, CG.h)(this, KG, GG, "f")
        }
        get translucencyColorTexture() {
          return (0, CG.e)(this, hG, "f")
        }
        set translucencyColorTexture(GG) {
          (0, CG.h)(this, hG, GG, "f")
        }
        get useGltfStyleTextures() {
          return (0, CG.e)(this, dG, "f")
        }
        set useGltfStyleTextures(GG) {
          (0, CG.h)(this, dG, GG, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(GG) {
          this.legacyTranslucency = GG
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
        constructor(JG) {
          let rG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(JG, "PBRSubSurface", 130, new kb, rG), this._isRefractionEnabled = !1, bG.set(this, (0, CG.n)(this, wb, !1)), this._isTranslucencyEnabled = ((0, CG.n)(this, Sb), !1), ZG.set(this, (0, CG.n)(this, Lb, !1)), this._isDispersionEnabled = ((0, CG.n)(this, yb), !1), wG.set(this, (0, CG.n)(this, Ub, !1)), this._isScatteringEnabled = ((0, CG.n)(this, Yb), !1), SG.set(this, (0, CG.n)(this, Vb, !1)), this._scatteringDiffusionProfileIndex = ((0, CG.n)(this, pb), (0, CG.n)(this, fb, 0)), this.refractionIntensity = ((0, CG.n)(this, Qb), (0, CG.n)(this, Kb, 1)), this.translucencyIntensity = ((0, CG.n)(this, hb), (0, CG.n)(this, db, 1)), this._useAlbedoToTintRefraction = ((0, CG.n)(this, Jb), !1), LG.set(this, (0, CG.n)(this, rb, !1)), this._useAlbedoToTintTranslucency = ((0, CG.n)(this, zb), !1), yG.set(this, (0, CG.n)(this, Eb, !1)), this._thicknessTexture = ((0, CG.n)(this, ob), null), kG.set(this, (0, CG.n)(this, Xb, null)), this._refractionTexture = ((0, CG.n)(this, ub), null), UG.set(this, (0, CG.n)(this, ib, null)), this._indexOfRefraction = ((0, CG.n)(this, Cb), 1.5), YG.set(this, (0, CG.n)(this, Wb, 1.5)), this._volumeIndexOfRefraction = ((0, CG.n)(this, mb), (0, CG.n)(this, Ib, -1)), this._invertRefractionY = ((0, CG.n)(this, Fb), !1), VG.set(this, (0, CG.n)(this, vb, !1)), this._linkRefractionWithTransparency = ((0, CG.n)(this, ab), !1), pG.set(this, (0, CG.n)(this, cb, !1)), this.minimumThickness = ((0, CG.n)(this, lb), (0, CG.n)(this, jb, 0)), this.maximumThickness = ((0, CG.n)(this, Pb), (0, CG.n)(this, Mb, 1)), this.useThicknessAsDepth = ((0, CG.n)(this, Ab), (0, CG.n)(this, sb, !1)), this.tintColor = ((0, CG.n)(this, qb), (0, CG.n)(this, nb, TG.c.White())), this.tintColorAtDistance = ((0, CG.n)(this, gb), (0, CG.n)(this, eb, 1)), this.dispersion = ((0, CG.n)(this, Rb), (0, CG.n)(this, Tb, 0)), this.diffusionDistance = ((0, CG.n)(this, Hb), (0, CG.n)(this, tb, TG.c.White())), this._useMaskFromThicknessTexture = ((0, CG.n)(this, Db), !1), fG.set(this, (0, CG.n)(this, Nb, !1)), this._refractionIntensityTexture = ((0, CG.n)(this, Ob), null), QG.set(this, (0, CG.n)(this, xb, null)), this._translucencyIntensityTexture = ((0, CG.n)(this, Bb), null), KG.set(this, (0, CG.n)(this, GZ, null)), this.translucencyColor = ((0, CG.n)(this, bZ), (0, CG.n)(this, ZZ, null)), this._translucencyColorTexture = ((0, CG.n)(this, wZ), null), hG.set(this, (0, CG.n)(this, SZ, null)), this._useGltfStyleTextures = ((0, CG.n)(this, LZ), !0), dG.set(this, (0, CG.n)(this, yZ, !0)), this.applyAlbedoAfterSubSurface = ((0, CG.n)(this, kZ), (0, CG.n)(this, UZ, GG.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, CG.n)(this, YZ), (0, CG.n)(this, VZ, GG.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, CG.n)(this, pZ), this._scene = JG.Dv(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = JG._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = JG._dirtyCallbacks[32]
        }
        isReadyForSubMesh(GG, bG) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (GG._areTexturesDirty && bG.texturesEnabled) {
            if (this._thicknessTexture && NG.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && NG.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && NG.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && NG.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const GG = this._getRefractionTexture(bG);
            if (GG && NG.d.RefractionTextureEnabled && !GG.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(GG, bG) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return GG.SUBSURFACE = !1, GG.SS_DISPERSION = !1, GG.SS_TRANSLUCENCY = !1, GG.SS_SCATTERING = !1, GG.SS_REFRACTION = !1, GG.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, GG.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, GG.SS_THICKNESSANDMASK_TEXTURE = !1, GG.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, GG.SS_HAS_THICKNESS = !1, GG.SS_REFRACTIONINTENSITY_TEXTURE = !1, GG.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, GG.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, GG.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, GG.SS_REFRACTIONMAP_3D = !1, GG.SS_REFRACTIONMAP_OPPOSITEZ = !1, GG.SS_LODINREFRACTIONALPHA = !1, GG.SS_GAMMAREFRACTION = !1, GG.SS_RGBDREFRACTION = !1, GG.SS_LINEARSPECULARREFRACTION = !1, GG.SS_LINKREFRACTIONTOTRANSPARENCY = !1, GG.SS_ALBEDOFORREFRACTIONTINT = !1, GG.SS_ALBEDOFORTRANSLUCENCYTINT = !1, GG.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, GG.SS_USE_THICKNESS_AS_DEPTH = !1, GG.SS_USE_GLTF_TEXTURES = !1, GG.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, GG.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, GG.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(GG.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (GG._areTexturesDirty) {
            if (GG.SUBSURFACE = !0, GG.SS_DISPERSION = this._isDispersionEnabled, GG.SS_TRANSLUCENCY = this._isTranslucencyEnabled, GG.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, GG.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, GG.SS_SCATTERING = this._isScatteringEnabled, GG.SS_THICKNESSANDMASK_TEXTURE = !1, GG.SS_REFRACTIONINTENSITY_TEXTURE = !1, GG.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, GG.SS_HAS_THICKNESS = !1, GG.SS_USE_GLTF_TEXTURES = !1, GG.SS_REFRACTION = !1, GG.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, GG.SS_REFRACTIONMAP_3D = !1, GG.SS_GAMMAREFRACTION = !1, GG.SS_RGBDREFRACTION = !1, GG.SS_LINEARSPECULARREFRACTION = !1, GG.SS_REFRACTIONMAP_OPPOSITEZ = !1, GG.SS_LODINREFRACTIONALPHA = !1, GG.SS_LINKREFRACTIONTOTRANSPARENCY = !1, GG.SS_ALBEDOFORREFRACTIONTINT = !1, GG.SS_ALBEDOFORTRANSLUCENCYTINT = !1, GG.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, GG.SS_USE_THICKNESS_AS_DEPTH = !1, GG.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, GG.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, GG._areTexturesDirty && bG.texturesEnabled && (this._thicknessTexture && NG.d.ThicknessTextureEnabled && (0, xG.bb)(this._thicknessTexture, GG, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && NG.d.RefractionIntensityTextureEnabled && (0, xG.bb)(this._refractionIntensityTexture, GG, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && NG.d.TranslucencyIntensityTextureEnabled && (0, xG.bb)(this._translucencyIntensityTexture, GG, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && NG.d.TranslucencyColorTextureEnabled && ((0, xG.bb)(this._translucencyColorTexture, GG, "SS_TRANSLUCENCYCOLOR_TEXTURE"), GG.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), GG.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, GG.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, GG.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, GG.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && bG.texturesEnabled) {
              const ZG = this._getRefractionTexture(bG);
              ZG && NG.d.RefractionTextureEnabled && (GG.SS_REFRACTION = !0, GG.SS_REFRACTIONMAP_3D = ZG.isCube, GG.SS_GAMMAREFRACTION = ZG.gammaSpace, GG.SS_RGBDREFRACTION = ZG.isRGBD, GG.SS_LINEARSPECULARREFRACTION = ZG.linearSpecularLOD, GG.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && ZG.isCube ? !ZG.invertZ : ZG.invertZ, GG.SS_LODINREFRACTIONALPHA = ZG.lodLevelInAlpha, GG.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, GG.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, GG.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = ZG.isCube && ZG.boundingBoxSize, GG.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (GG.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(GG, bG, ZG, wG) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) GG.updateFloat2("vThicknessParam", 0, 0);
            else {
              wG.getRenderingMesh().getWorldMatrix().decompose(AG.j.mK[0]);
              const bG = Math.max(Math.abs(AG.j.mK[0].x), Math.abs(AG.j.mK[0].y), Math.abs(AG.j.mK[0].z));
              GG.updateFloat2("vThicknessParam", this.minimumThickness * bG, (this.maximumThickness - this.minimumThickness) * bG)
            }
        }
        bindForSubMesh(GG, bG, ZG, wG) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const SG = wG.materialDefines,
            LG = this._material.isFrozen,
            yG = this._material.realTimeFiltering,
            kG = SG.LODBASEDMICROSFURACE,
            UG = this._getRefractionTexture(bG);
          if (!GG.useUbo || !LG || !GG.isSync) {
            if (this._thicknessTexture && NG.d.ThicknessTextureEnabled && (GG.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, xG.C)(this._thicknessTexture, GG, "thickness")), this._refractionIntensityTexture && NG.d.RefractionIntensityTextureEnabled && SG.SS_REFRACTIONINTENSITY_TEXTURE && (GG.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, xG.C)(this._refractionIntensityTexture, GG, "refractionIntensity")), this._translucencyColorTexture && NG.d.TranslucencyColorTextureEnabled && SG.SS_TRANSLUCENCYCOLOR_TEXTURE && (GG.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, xG.C)(this._translucencyColorTexture, GG, "translucencyColor")), this._translucencyIntensityTexture && NG.d.TranslucencyIntensityTextureEnabled && SG.SS_TRANSLUCENCYINTENSITY_TEXTURE && (GG.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, xG.C)(this._translucencyIntensityTexture, GG, "translucencyIntensity")), UG && NG.d.RefractionTextureEnabled) {
              GG.R6("refractionMatrix", UG.getRefractionTextureMatrix());
              let bG = 1;
              UG.isCube || UG.depth && (bG = UG.depth);
              const ZG = UG.getSize().width,
                wG = this.volumeIndexOfRefraction;
              if (GG.updateFloat4("vRefractionInfos", UG.level, 1 / wG, bG, this._invertRefractionY ? -1 : 1), GG.updateFloat4("vRefractionMicrosurfaceInfos", ZG, UG.lodGenerationScale, UG.lodGenerationOffset, 1 / this.indexOfRefraction), yG && GG.updateFloat2("vRefractionFilteringInfo", ZG, Math.log2(ZG)), UG.boundingBoxSize) {
                const bG = UG;
                GG.updateVector3("vRefractionPosition", bG.boundingBoxPosition), GG.updateVector3("vRefractionSize", bG.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && GG.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), GG.updateColor3("vDiffusionDistance", this.diffusionDistance), GG.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), GG.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), GG.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), GG.updateFloat("dispersion", this.dispersion)
          }
          bG.texturesEnabled && (this._thicknessTexture && NG.d.ThicknessTextureEnabled && GG.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && NG.d.RefractionIntensityTextureEnabled && SG.SS_REFRACTIONINTENSITY_TEXTURE && GG.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && NG.d.TranslucencyIntensityTextureEnabled && SG.SS_TRANSLUCENCYINTENSITY_TEXTURE && GG.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && NG.d.TranslucencyColorTextureEnabled && SG.SS_TRANSLUCENCYCOLOR_TEXTURE && GG.setTexture("translucencyColorSampler", this._translucencyColorTexture), UG && NG.d.RefractionTextureEnabled && (kG ? GG.setTexture("refractionSampler", UG) : (GG.setTexture("refractionSampler", UG._lodTextureMid || UG), GG.setTexture("refractionSamplerLow", UG._lodTextureLow || UG), GG.setTexture("refractionSamplerHigh", UG._lodTextureHigh || UG))))
        }
        _getRefractionTexture(GG) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? GG.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(GG) {
          NG.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && GG.push(this._refractionTexture)
        }
        hasTexture(GG) {
          return this._thicknessTexture === GG || (this._refractionTexture === GG || (this._refractionIntensityTexture === GG || (this._translucencyIntensityTexture === GG || this._translucencyColorTexture === GG)))
        }
        hasRenderTargetTextures() {
          return !!(NG.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(GG) {
          this._thicknessTexture && GG.push(this._thicknessTexture), this._refractionTexture && GG.push(this._refractionTexture), this._refractionIntensityTexture && GG.push(this._refractionIntensityTexture), this._translucencyColorTexture && GG.push(this._translucencyColorTexture), this._translucencyIntensityTexture && GG.push(this._translucencyIntensityTexture)
        }
        getAnimatables(GG) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && GG.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && GG.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && GG.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && GG.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && GG.push(this._translucencyIntensityTexture)
        }
        dispose(GG) {
          GG && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(GG, bG, ZG) {
          return GG.SS_SCATTERING && bG.addFallback(ZG++, "SS_SCATTERING"), GG.SS_TRANSLUCENCY && bG.addFallback(ZG++, "SS_TRANSLUCENCY"), ZG
        }
        getSamplers(GG) {
          GG.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, SG = new WeakMap, LG = new WeakMap, yG = new WeakMap, kG = new WeakMap, UG = new WeakMap, YG = new WeakMap, VG = new WeakMap, pG = new WeakMap, fG = new WeakMap, QG = new WeakMap, KG = new WeakMap, hG = new WeakMap, dG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zb[Symbol.metadata] ?? null) : void 0;
        JG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], rG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], zG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], EG = [(0, WG.Q)(), (0, WG.d)("_markScenePrePassDirty")], oG = [(0, WG.Q)()], XG = [(0, WG.Q)()], uG = [(0, WG.Q)()], iG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], mG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], IG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], FG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], vG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], aG = [(0, WG.Q)()], cG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], lG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], jG = [(0, WG.Q)()], PG = [(0, WG.Q)()], MG = [(0, WG.Q)()], sG = [(0, WG.m)()], qG = [(0, WG.Q)()], gG = [(0, WG.Q)()], eG = [(0, WG.m)()], RG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], HG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], tG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], DG = [(0, WG.m)()], OG = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], BG = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Gb = [(0, WG.Q)()], bb = [(0, WG.Q)()], (0, CG.k)(GG, null, JG, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isRefractionEnabled" in GG,
            get: GG => GG.isRefractionEnabled,
            set: (GG, bG) => {
              GG.isRefractionEnabled = bG
            }
          },
          metadata: bG
        }, wb, Sb), (0, CG.k)(GG, null, rG, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isTranslucencyEnabled" in GG,
            get: GG => GG.isTranslucencyEnabled,
            set: (GG, bG) => {
              GG.isTranslucencyEnabled = bG
            }
          },
          metadata: bG
        }, Lb, yb), (0, CG.k)(GG, null, zG, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isDispersionEnabled" in GG,
            get: GG => GG.isDispersionEnabled,
            set: (GG, bG) => {
              GG.isDispersionEnabled = bG
            }
          },
          metadata: bG
        }, Ub, Yb), (0, CG.k)(GG, null, EG, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isScatteringEnabled" in GG,
            get: GG => GG.isScatteringEnabled,
            set: (GG, bG) => {
              GG.isScatteringEnabled = bG
            }
          },
          metadata: bG
        }, Vb, pb), (0, CG.k)(GG, null, iG, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAlbedoToTintRefraction" in GG,
            get: GG => GG.useAlbedoToTintRefraction,
            set: (GG, bG) => {
              GG.useAlbedoToTintRefraction = bG
            }
          },
          metadata: bG
        }, rb, zb), (0, CG.k)(GG, null, mG, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAlbedoToTintTranslucency" in GG,
            get: GG => GG.useAlbedoToTintTranslucency,
            set: (GG, bG) => {
              GG.useAlbedoToTintTranslucency = bG
            }
          },
          metadata: bG
        }, Eb, ob), (0, CG.k)(GG, null, IG, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "thicknessTexture" in GG,
            get: GG => GG.thicknessTexture,
            set: (GG, bG) => {
              GG.thicknessTexture = bG
            }
          },
          metadata: bG
        }, Xb, ub), (0, CG.k)(GG, null, FG, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "refractionTexture" in GG,
            get: GG => GG.refractionTexture,
            set: (GG, bG) => {
              GG.refractionTexture = bG
            }
          },
          metadata: bG
        }, ib, Cb), (0, CG.k)(GG, null, vG, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: GG => "indexOfRefraction" in GG,
            get: GG => GG.indexOfRefraction,
            set: (GG, bG) => {
              GG.indexOfRefraction = bG
            }
          },
          metadata: bG
        }, Wb, mb), (0, CG.k)(GG, null, cG, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: GG => "invertRefractionY" in GG,
            get: GG => GG.invertRefractionY,
            set: (GG, bG) => {
              GG.invertRefractionY = bG
            }
          },
          metadata: bG
        }, vb, ab), (0, CG.k)(GG, null, lG, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: GG => "linkRefractionWithTransparency" in GG,
            get: GG => GG.linkRefractionWithTransparency,
            set: (GG, bG) => {
              GG.linkRefractionWithTransparency = bG
            }
          },
          metadata: bG
        }, cb, lb), (0, CG.k)(GG, null, RG, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "useMaskFromThicknessTexture" in GG,
            get: GG => GG.useMaskFromThicknessTexture,
            set: (GG, bG) => {
              GG.useMaskFromThicknessTexture = bG
            }
          },
          metadata: bG
        }, Nb, Ob), (0, CG.k)(GG, null, HG, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "refractionIntensityTexture" in GG,
            get: GG => GG.refractionIntensityTexture,
            set: (GG, bG) => {
              GG.refractionIntensityTexture = bG
            }
          },
          metadata: bG
        }, xb, Bb), (0, CG.k)(GG, null, tG, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "translucencyIntensityTexture" in GG,
            get: GG => GG.translucencyIntensityTexture,
            set: (GG, bG) => {
              GG.translucencyIntensityTexture = bG
            }
          },
          metadata: bG
        }, GZ, bZ), (0, CG.k)(GG, null, OG, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "translucencyColorTexture" in GG,
            get: GG => GG.translucencyColorTexture,
            set: (GG, bG) => {
              GG.translucencyColorTexture = bG
            }
          },
          metadata: bG
        }, SZ, LZ), (0, CG.k)(GG, null, BG, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: GG => "useGltfStyleTextures" in GG,
            get: GG => GG.useGltfStyleTextures,
            set: (GG, bG) => {
              GG.useGltfStyleTextures = bG
            }
          },
          metadata: bG
        }, yZ, kZ), (0, CG.k)(null, null, oG, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: GG => "_scatteringDiffusionProfileIndex" in GG,
            get: GG => GG._scatteringDiffusionProfileIndex,
            set: (GG, bG) => {
              GG._scatteringDiffusionProfileIndex = bG
            }
          },
          metadata: bG
        }, fb, Qb), (0, CG.k)(null, null, XG, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "refractionIntensity" in GG,
            get: GG => GG.refractionIntensity,
            set: (GG, bG) => {
              GG.refractionIntensity = bG
            }
          },
          metadata: bG
        }, Kb, hb), (0, CG.k)(null, null, uG, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "translucencyIntensity" in GG,
            get: GG => GG.translucencyIntensity,
            set: (GG, bG) => {
              GG.translucencyIntensity = bG
            }
          },
          metadata: bG
        }, db, Jb), (0, CG.k)(null, null, aG, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: GG => "_volumeIndexOfRefraction" in GG,
            get: GG => GG._volumeIndexOfRefraction,
            set: (GG, bG) => {
              GG._volumeIndexOfRefraction = bG
            }
          },
          metadata: bG
        }, Ib, Fb), (0, CG.k)(null, null, jG, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: GG => "minimumThickness" in GG,
            get: GG => GG.minimumThickness,
            set: (GG, bG) => {
              GG.minimumThickness = bG
            }
          },
          metadata: bG
        }, jb, Pb), (0, CG.k)(null, null, PG, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: GG => "maximumThickness" in GG,
            get: GG => GG.maximumThickness,
            set: (GG, bG) => {
              GG.maximumThickness = bG
            }
          },
          metadata: bG
        }, Mb, Ab), (0, CG.k)(null, null, MG, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: GG => "useThicknessAsDepth" in GG,
            get: GG => GG.useThicknessAsDepth,
            set: (GG, bG) => {
              GG.useThicknessAsDepth = bG
            }
          },
          metadata: bG
        }, sb, qb), (0, CG.k)(null, null, sG, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "tintColor" in GG,
            get: GG => GG.tintColor,
            set: (GG, bG) => {
              GG.tintColor = bG
            }
          },
          metadata: bG
        }, nb, gb), (0, CG.k)(null, null, qG, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: GG => "tintColorAtDistance" in GG,
            get: GG => GG.tintColorAtDistance,
            set: (GG, bG) => {
              GG.tintColorAtDistance = bG
            }
          },
          metadata: bG
        }, eb, Rb), (0, CG.k)(null, null, gG, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: GG => "dispersion" in GG,
            get: GG => GG.dispersion,
            set: (GG, bG) => {
              GG.dispersion = bG
            }
          },
          metadata: bG
        }, Tb, Hb), (0, CG.k)(null, null, eG, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: GG => "diffusionDistance" in GG,
            get: GG => GG.diffusionDistance,
            set: (GG, bG) => {
              GG.diffusionDistance = bG
            }
          },
          metadata: bG
        }, tb, Db), (0, CG.k)(null, null, DG, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "translucencyColor" in GG,
            get: GG => GG.translucencyColor,
            set: (GG, bG) => {
              GG.translucencyColor = bG
            }
          },
          metadata: bG
        }, ZZ, wZ), (0, CG.k)(null, null, Gb, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: GG => "applyAlbedoAfterSubSurface" in GG,
            get: GG => GG.applyAlbedoAfterSubSurface,
            set: (GG, bG) => {
              GG.applyAlbedoAfterSubSurface = bG
            }
          },
          metadata: bG
        }, UZ, YZ), (0, CG.k)(null, null, bb, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: GG => "legacyTranslucency" in GG,
            get: GG => GG.legacyTranslucency,
            set: (GG, bG) => {
              GG.legacyTranslucency = bG
            }
          },
          metadata: bG
        }, VZ, pZ), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, GG.DEFAULT_LEGACY_TRANSLUCENCY = !1, GG
    })();
    var Yb = ZG(40727),
      Vb = ZG(40709),
      pb = ZG(40742),
      fb = ZG(40747),
      Qb = ZG(40750),
      Kb = ZG(40757),
      hb = ZG(40761),
      db = ZG(40767),
      Jb = ZG(40258);
    const rb = {
      effect: null,
      subMesh: null
    };
    class zb extends((0, hb.d)((0, Kb.d)(qG.d))) {}
    class Eb extends((0, HG.d)(zb)) {
      constructor(GG) {
        super(GG), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class ob extends((0, db.b)(DG.c)) {}
    let Xb = (() => {
      var GG, bG;
      let wG, SG = ob,
        yG = [],
        kG = [];
      return GG = class extends SG {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(GG) {
          this._realTimeFiltering = GG, this.wZG(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(GG) {
          this._realTimeFilteringQuality = GG, this.wZG(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, CG.e)(this, bG, "f")
        }
        set debugMode(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        constructor(ZG, wG) {
          super(ZG, wG, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || GG.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new AG.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = GG.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = TG.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new TG.c(0, 0, 0), this._albedoColor = new TG.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new TG.c(1, 1, 1), this._reflectionColor = new TG.c(1, 1, 1), this._emissiveColor = new TG.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = GG.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new IG.g(16), this._globalAmbientColor = new TG.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, bG.set(this, (0, CG.n)(this, yG, 0)), this.debugLimit = ((0, CG.n)(this, kG), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new eG(this), this.clearCoat = new Gb(this), this.iridescence = new Zb(this), this.anisotropy = new Sb(this), this.sheen = new yb(this), this.subSurface = new Ub(this), this.detailMap = new Yb.c(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), NG.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = lG(this.Dv()), this.prePassConfiguration = new RG.d
        }
        get hasRenderTargetTextures() {
          return !!(NG.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === GG.PBRMATERIAL_OPAQUE || this._transparencyMode === GG.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === GG.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== GG.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(GG, bG, ZG) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const wG = bG._drawWrapper;
          if (wG.effect && this.isFrozen && wG._wasPreviouslyReady && wG._wasPreviouslyUsingInstances === ZG) return !0;
          bG.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), bG.materialDefines = new Eb(this._eventInfo.defineNames));
          const SG = bG.materialDefines;
          if (this._isReadyForSubMesh(bG)) return !0;
          const LG = this.Dv(),
            yG = LG.CK();
          if (SG._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, LG.texturesEnabled)) {
            if (this._albedoTexture && NG.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && NG.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && NG.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && NG.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && NG.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const GG = this._getReflectionTexture();
            if (GG && NG.d.ReflectionTextureEnabled) {
              if (!GG.isReadyOrNotBlocking()) return !1;
              if (GG.irradianceTexture) {
                if (!GG.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!GG.sphericalPolynomial && GG.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && NG.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && NG.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (NG.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (yG.getCaps().standardDerivatives && this._bumpTexture && NG.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && NG.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = SG, this._eventInfo.subMesh = bG, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (SG._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (SG.AREALIGHTUSED || SG.CLUSTLIGHT_BATCH)
            for (let pG = 0; pG < GG.lightSources.length; pG++)
              if (!GG.lightSources[pG]._isReady()) return !1;
          if (yG.getCaps().standardDerivatives || GG.isVerticesDataPresent(sG.l.NormalKind) || (GG.createNormals(!0), mG.c.Warn("PBRMaterial: Normals have been created for the mesh: " + GG.name)), !(0, xG.e)(LG, GG, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const kG = bG.effect,
            UG = SG._areLightsDisposed,
            YG = this._prepareEffect(GG, bG.getRenderingMesh(), SG, this.onCompiled, this.onError, ZG, null);
          let VG = !1;
          if (YG)
            if (this._onEffectCreatedObservable && (rb.effect = YG, rb.subMesh = bG, this._onEffectCreatedObservable.notifyObservers(rb)), this.allowShaderHotSwapping && kG && !YG.isReady()) {
              if (SG.markAsUnprocessed(), VG = this.isFrozen, UG) return SG._areLightsDisposed = !0, !1
            } else LG.resetCachedMaterial(), bG.setEffect(YG, SG, this._materialContext);
          return !(!bG.effect || !bG.effect.isReady()) && (SG._renderId = LG.getRenderId(), wG._wasPreviouslyReady = !VG, wG._wasPreviouslyUsingInstances = !!ZG, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(bG, ZG, wG) {
          let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(bG, ZG, wG, yG, kG), !wG.isDirty) return null;
          wG.markAsProcessed();
          const UG = this.Dv().CK(),
            YG = new OG.e;
          let VG = 0;
          wG.USESPHERICALINVERTEX && YG.addFallback(VG++, "USESPHERICALINVERTEX"), wG.FOG && YG.addFallback(VG, "FOG"), wG.SPECULARAA && YG.addFallback(VG, "SPECULARAA"), wG.POINTSIZE && YG.addFallback(VG, "POINTSIZE"), wG.LOGARITHMICDEPTH && YG.addFallback(VG, "LOGARITHMICDEPTH"), wG.PARALLAX && YG.addFallback(VG, "PARALLAX"), wG.PARALLAX_RHS && YG.addFallback(VG, "PARALLAX_RHS"), wG.PARALLAXOCCLUSION && YG.addFallback(VG++, "PARALLAXOCCLUSION"), wG.ENVIRONMENTBRDF && YG.addFallback(VG++, "ENVIRONMENTBRDF"), wG.TANGENT && YG.addFallback(VG++, "TANGENT"), wG.BUMP && YG.addFallback(VG++, "BUMP"), VG = (0, xG.G)(wG, YG, this._maxSimultaneousLights, VG), wG.SPECULARTERM && YG.addFallback(VG++, "SPECULARTERM"), wG.USESPHERICALFROMREFLECTIONMAP && YG.addFallback(VG++, "USESPHERICALFROMREFLECTIONMAP"), wG.USEIRRADIANCEMAP && YG.addFallback(VG++, "USEIRRADIANCEMAP"), wG.LIGHTMAP && YG.addFallback(VG++, "LIGHTMAP"), wG.NORMAL && YG.addFallback(VG++, "NORMAL"), wG.AMBIENT && YG.addFallback(VG++, "AMBIENT"), wG.EMISSIVE && YG.addFallback(VG++, "EMISSIVE"), wG.VERTEXCOLOR && YG.addFallback(VG++, "VERTEXCOLOR"), wG.MORPHTARGETS && YG.addFallback(VG++, "MORPHTARGETS"), wG.MULTIVIEW && YG.addFallback(0, "MULTIVIEW");
          const pG = [sG.l.PositionKind];
          wG.NORMAL && pG.push(sG.l.NormalKind), wG.TANGENT && pG.push(sG.l.TangentKind);
          for (let GG = 1; GG <= 6; ++GG) wG["UV" + GG] && pG.push(`uv${1===GG?"":GG}`);
          wG.VERTEXCOLOR && pG.push(sG.l.ColorKind), (0, xG.M)(pG, bG, wG, YG), (0, xG.P)(pG, wG), (0, xG.R)(pG, bG, wG), (0, xG.K)(pG, bG, wG);
          let fG = "pbr";
          const QG = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            KG = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, xG.pb)(QG, KG, !0);
          const hG = ["Material", "Scene", "Mesh"],
            dG = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: wG.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = YG, this._eventInfo.fallbackRank = VG, this._eventInfo.defines = wG, this._eventInfo.uniforms = QG, this._eventInfo.attributes = pG, this._eventInfo.samplers = KG, this._eventInfo.uniformBuffersNames = hG, this._eventInfo.customCode = void 0, this._eventInfo.mesh = bG, this._eventInfo.indexParameters = dG, this._callbackPluginEventGeneric(128, this._eventInfo), Qb.e.AddUniformsAndSamplers(QG, KG), RG.d.AddUniforms(QG), RG.d.AddSamplers(KG), (0, Vb.b)(QG), this._useVertexPulling) {
            const GG = ZG?.geometry;
            GG && (this._vertexPullingMetadata = (0, pb.g)(GG), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((GG, bG) => {
              QG.push(`vp_${bG}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          tG.b && (tG.b.PrepareUniforms(QG, wG), tG.b.PrepareSamplers(KG, wG)), (0, xG.tb)({
            uniformsNames: QG,
            uniformBuffersNames: hG,
            samplers: KG,
            defines: wG,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const JG = {};
          this.customShaderNameResolve && (fG = this.customShaderNameResolve(fG, QG, hG, KG, wG, pG, JG));
          const rG = wG.toString(),
            zG = UG.createEffect(fG, {
              attributes: pG,
              uniformsNames: QG,
              uniformBuffersNames: hG,
              samplers: KG,
              defines: rG,
              fallbacks: YG,
              onCompiled: SG,
              onError: LG,
              indexParameters: dG,
              processFinalCode: JG.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: wG.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: GG._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, UG);
          return this._eventInfo.customCode = void 0, zG
        }
        _prepareDefines(bG, ZG, wG) {
          let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const yG = ZG.hasThinInstances,
            kG = this.Dv(),
            UG = kG.CK();
          (0, xG.Z)(kG, bG, wG, !0, this._maxSimultaneousLights, this._disableLighting), wG._needNormals = !0, (0, xG.eb)(kG, wG);
          const YG = this.needAlphaBlendingForMesh(bG) && this.Dv().useOrderIndependentTransparency;
          if ((0, xG.lb)(kG, wG, this.canRenderToMRT && !YG), (0, xG.ib)(kG, wG, YG), Qb.e.PrepareDefines(UG.currentRenderPassId, bG, wG), wG.METALLICWORKFLOW = this.isMetallicWorkflow(), wG._areTexturesDirty) {
            wG._needUVs = !1;
            for (let GG = 1; GG <= 6; ++GG) wG["MAINUV" + GG] = !1;
            if (kG.texturesEnabled) {
              wG.ALBEDODIRECTUV = 0, wG.BASE_WEIGHTDIRECTUV = 0, wG.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, wG.AMBIENTDIRECTUV = 0, wG.OPACITYDIRECTUV = 0, wG.EMISSIVEDIRECTUV = 0, wG.REFLECTIVITYDIRECTUV = 0, wG.MICROSURFACEMAPDIRECTUV = 0, wG.METALLIC_REFLECTANCEDIRECTUV = 0, wG.REFLECTANCEDIRECTUV = 0, wG.BUMPDIRECTUV = 0, wG.LIGHTMAPDIRECTUV = 0, UG.getCaps().textureLOD && (wG.LODBASEDMICROSFURACE = !0), this._albedoTexture && NG.d.DiffuseTextureEnabled ? ((0, xG.bb)(this._albedoTexture, wG, "ALBEDO"), wG.GAMMAALBEDO = this._albedoTexture.gammaSpace) : wG.ALBEDO = !1, this._baseWeightTexture && NG.d.BaseWeightTextureEnabled ? (0, xG.bb)(this._baseWeightTexture, wG, "BASE_WEIGHT") : wG.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && NG.d.BaseDiffuseRoughnessTextureEnabled ? (0, xG.bb)(this._baseDiffuseRoughnessTexture, wG, "BASE_DIFFUSE_ROUGHNESS") : wG.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && NG.d.AmbientTextureEnabled ? ((0, xG.bb)(this._ambientTexture, wG, "AMBIENT"), wG.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : wG.AMBIENT = !1, this._opacityTexture && NG.d.OpacityTextureEnabled ? ((0, xG.bb)(this._opacityTexture, wG, "OPACITY"), wG.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : wG.OPACITY = !1;
              const GG = this._getReflectionTexture(),
                bG = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || UG.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, xG.W)(kG, GG, wG, this.realTimeFiltering, this.realTimeFilteringQuality, !bG), this._lightmapTexture && NG.d.LightmapTextureEnabled ? ((0, xG.bb)(this._lightmapTexture, wG, "LIGHTMAP"), wG.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, wG.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, wG.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : wG.LIGHTMAP = !1, this._emissiveTexture && NG.d.EmissiveTextureEnabled ? ((0, xG.bb)(this._emissiveTexture, wG, "EMISSIVE"), wG.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : wG.EMISSIVE = !1, NG.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, xG.bb)(this._metallicTexture, wG, "REFLECTIVITY"), wG.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, wG.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, wG.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, wG.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, wG.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, xG.bb)(this._reflectivityTexture, wG, "REFLECTIVITY"), wG.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, wG.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, wG.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : wG.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (wG.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, xG.bb)(this._metallicReflectanceTexture, wG, "METALLIC_REFLECTANCE"), wG.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : wG.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, xG.bb)(this._reflectanceTexture, wG, "REFLECTANCE"), wG.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : wG.REFLECTANCE = !1) : (wG.METALLIC_REFLECTANCE = !1, wG.REFLECTANCE = !1), this._microSurfaceTexture ? (0, xG.bb)(this._microSurfaceTexture, wG, "MICROSURFACEMAP") : wG.MICROSURFACEMAP = !1) : (wG.REFLECTIVITY = !1, wG.MICROSURFACEMAP = !1), UG.getCaps().standardDerivatives && this._bumpTexture && NG.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, xG.bb)(this._bumpTexture, wG, "BUMP"), this._useParallax && this._albedoTexture && NG.d.DiffuseTextureEnabled ? (wG.PARALLAX = !0, wG.PARALLAX_RHS = kG.useRightHandedSystem, wG.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : wG.PARALLAX = !1, wG.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (wG.BUMP = !1, wG.PARALLAX = !1, wG.PARALLAX_RHS = !1, wG.PARALLAXOCCLUSION = !1, wG.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && NG.d.ReflectionTextureEnabled ? (wG.ENVIRONMENTBRDF = !0, wG.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (wG.ENVIRONMENTBRDF = !1, wG.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? wG.ALPHAFROMALBEDO = !0 : wG.ALPHAFROMALBEDO = !1
            }
            wG.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === GG.LIGHTFALLOFF_STANDARD ? (wG.USEPHYSICALLIGHTFALLOFF = !1, wG.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === GG.LIGHTFALLOFF_GLTF ? (wG.USEPHYSICALLIGHTFALLOFF = !1, wG.USEGLTFLIGHTFALLOFF = !0) : (wG.USEPHYSICALLIGHTFALLOFF = !0, wG.USEGLTFLIGHTFALLOFF = !1), wG.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? wG.TWOSIDEDLIGHTING = !0 : wG.TWOSIDEDLIGHTING = !1, wG.MIRRORED = !!kG._mirroredCameraPosition, wG.SPECULARAA = UG.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(wG._areTexturesDirty || wG._areMiscDirty) && (wG.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, wG.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, wG.ALPHABLEND = this.needAlphaBlendingForMesh(bG), wG.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, wG.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), wG._areTexturesDirty && (wG.TEXTURE_REPETITION_MODE = UG.version > 1 || UG.isWebGPU ? this.textureRepetitionMode : 0), wG._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(wG), wG.FORCENORMALFORWARD = this._forceNormalForward, wG.RADIANCEOCCLUSION = this._useRadianceOcclusion, wG.HORIZONOCCLUSION = this._useHorizonOcclusion, wG._areMiscDirty && ((0, xG.cb)(bG, kG, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(bG), wG, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZG, this._isVertexOutputInvariant), wG.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !bG.isVerticesDataPresent(sG.l.NormalKind), wG.DEBUGMODE = this._debugMode), (0, xG.V)(kG, UG, this, wG, !!SG, LG, yG), this._eventInfo.defines = wG, this._eventInfo.mesh = bG, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, xG.U)(bG, wG, !0, !0, !0, this._transparencyMode !== GG.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(GG, bG, ZG) {
          const wG = {
            clipPlane: !1,
            useInstances: !1,
            ...ZG
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const ZG = new Eb(this._eventInfo.defineNames),
              SG = this._prepareEffect(GG, GG, ZG, void 0, void 0, wG.useInstances, wG.clipPlane);
            this._onEffectCreatedObservable && (rb.effect = SG, rb.subMesh = null, this._onEffectCreatedObservable.notifyObservers(rb)), SG.isReady() ? bG && bG(this) : SG.onCompileObservable.add((() => {
              bG && bG(this)
            }))
          })()
        }
        buildUniformLayout() {
          const GG = this._uniformBuffer;
          GG.addUniform("vAlbedoInfos", 2), GG.addUniform("vBaseWeightInfos", 2), GG.addUniform("vBaseDiffuseRoughnessInfos", 2), GG.addUniform("vAmbientInfos", 4), GG.addUniform("vOpacityInfos", 2), GG.addUniform("vEmissiveInfos", 2), GG.addUniform("vLightmapInfos", 2), GG.addUniform("vReflectivityInfos", 3), GG.addUniform("vMicroSurfaceSamplerInfos", 2), GG.addUniform("vBumpInfos", 3), GG.addUniform("albedoMatrix", 16), GG.addUniform("baseWeightMatrix", 16), GG.addUniform("baseDiffuseRoughnessMatrix", 16), GG.addUniform("ambientMatrix", 16), GG.addUniform("opacityMatrix", 16), GG.addUniform("emissiveMatrix", 16), GG.addUniform("lightmapMatrix", 16), GG.addUniform("reflectivityMatrix", 16), GG.addUniform("microSurfaceSamplerMatrix", 16), GG.addUniform("bumpMatrix", 16), GG.addUniform("vTangentSpaceParams", 2), GG.addUniform("vAlbedoColor", 4), GG.addUniform("baseWeight", 1), GG.addUniform("baseDiffuseRoughness", 1), GG.addUniform("vLightingIntensity", 4), GG.addUniform("pointSize", 1), GG.addUniform("vReflectivityColor", 4), GG.addUniform("vEmissiveColor", 3), GG.addUniform("vAmbientColor", 3), GG.addUniform("vDebugMode", 2), GG.addUniform("vMetallicReflectanceFactors", 4), GG.addUniform("vMetallicReflectanceInfos", 2), GG.addUniform("metallicReflectanceMatrix", 16), GG.addUniform("vReflectanceInfos", 2), GG.addUniform("reflectanceMatrix", 16), GG.addUniform("cameraInfo", 4), GG.addUniform("vTextureRepetitionHexTilingParams", 4), (0, xG.mb)(GG, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(GG, bG, ZG) {
          const wG = this.Dv(),
            SG = ZG.materialDefines;
          if (!SG) return;
          const LG = ZG.effect;
          if (!LG) return;
          this._activeEffect = LG, bG.getMeshUniformBuffer().bindToEffect(LG, "Mesh"), bG.transferToEffect(GG);
          const yG = wG.CK();
          this._uniformBuffer.bindToEffect(LG, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, wG, bG, GG, this.isFrozen), Qb.e.Bind(yG.currentRenderPassId, this._activeEffect, bG, GG, this);
          const kG = wG.activeCamera;
          kG ? this._uniformBuffer.updateFloat4("cameraInfo", kG.minZ, kG.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const UG = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", UG[0], UG[1], UG[2], UG[3]), this._eventInfo.subMesh = ZG, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), SG.OBJECTSPACE_NORMALMAP && (GG.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const YG = this._mustRebind(wG, LG, ZG, bG.visibility),
            VG = yG._features.needToAlwaysBindUniformBuffers;
          (0, xG.i)(bG, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, pb.d)(this._activeEffect, this._vertexPullingMetadata);
          let pG = null;
          const fG = this._uniformBuffer;
          if (YG) {
            if (this.bindViewProjection(LG), pG = this._getReflectionTexture(), !fG.useUbo || !this.isFrozen || !fG.isSync || ZG._drawWrapper._forceRebindOnNextCall) {
              if (wG.texturesEnabled && (this._albedoTexture && NG.d.DiffuseTextureEnabled && (fG.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, xG.C)(this._albedoTexture, fG, "albedo")), this._baseWeightTexture && NG.d.BaseWeightTextureEnabled && (fG.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, xG.C)(this._baseWeightTexture, fG, "baseWeight")), this._baseDiffuseRoughnessTexture && NG.d.BaseDiffuseRoughnessTextureEnabled && (fG.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, xG.C)(this._baseDiffuseRoughnessTexture, fG, "baseDiffuseRoughness")), this._ambientTexture && NG.d.AmbientTextureEnabled && (fG.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, xG.C)(this._ambientTexture, fG, "ambient")), this._opacityTexture && NG.d.OpacityTextureEnabled && (fG.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, xG.C)(this._opacityTexture, fG, "opacity")), this._emissiveTexture && NG.d.EmissiveTextureEnabled && (fG.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, xG.C)(this._emissiveTexture, fG, "emissive")), this._lightmapTexture && NG.d.LightmapTextureEnabled && (fG.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, xG.C)(this._lightmapTexture, fG, "lightmap")), NG.d.SpecularTextureEnabled && (this._metallicTexture ? (fG.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, xG.C)(this._metallicTexture, fG, "reflectivity")) : this._reflectivityTexture && (fG.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, xG.C)(this._reflectivityTexture, fG, "reflectivity")), this._metallicReflectanceTexture && (fG.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, xG.C)(this._metallicReflectanceTexture, fG, "metallicReflectance")), this._reflectanceTexture && SG.REFLECTANCE && (fG.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, xG.C)(this._reflectanceTexture, fG, "reflectance")), this._microSurfaceTexture && (fG.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, xG.C)(this._microSurfaceTexture, fG, "microSurfaceSampler"))), this._bumpTexture && yG.getCaps().standardDerivatives && NG.d.BumpTextureEnabled && !this._disableBumpMap && (fG.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, xG.C)(this._bumpTexture, fG, "bump"), wG._mirroredCameraPosition ? fG.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : fG.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, xG.o)(wG, SG, fG, this._reflectionColor, pG, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && fG.updateFloat("pointSize", this.pointSize), SG.METALLICWORKFLOW) {
                TG.l.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, TG.l.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const GG = this.subSurface?._indexOfRefraction ?? 1.5,
                  bG = 1;
                TG.l.Color4[0].b = GG;
                const ZG = Math.pow((GG - bG) / (GG + bG), 2);
                TG.l.Color4[0].a = ZG, fG.updateDirectColor4("vReflectivityColor", TG.l.Color4[0]), fG.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else fG.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              fG.updateColor3("vEmissiveColor", NG.d.EmissiveTextureEnabled ? this._emissiveColor : TG.c.BlackReadOnly), !SG.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? fG.updateColor4("vAlbedoColor", this._albedoColor, 1) : fG.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), fG.updateFloat("baseWeight", this._baseWeight), fG.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * wG.environmentIntensity, this._lightingInfos.w = this._specularIntensity, fG.updateVector4("vLightingIntensity", this._lightingInfos), wG.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), fG.updateColor3("vAmbientColor", this._globalAmbientColor), fG.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            wG.texturesEnabled && (this._albedoTexture && NG.d.DiffuseTextureEnabled && fG.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && NG.d.BaseWeightTextureEnabled && fG.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && NG.d.BaseDiffuseRoughnessTextureEnabled && fG.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && NG.d.AmbientTextureEnabled && fG.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && NG.d.OpacityTextureEnabled && fG.setTexture("opacitySampler", this._opacityTexture), (0, xG.r)(wG, SG, fG, pG, this.realTimeFiltering), SG.ENVIRONMENTBRDF && fG.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && NG.d.EmissiveTextureEnabled && fG.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && NG.d.LightmapTextureEnabled && fG.setTexture("lightmapSampler", this._lightmapTexture), NG.d.SpecularTextureEnabled && (this._metallicTexture ? fG.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && fG.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && fG.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && SG.REFLECTANCE && fG.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && fG.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && yG.getCaps().standardDerivatives && NG.d.BumpTextureEnabled && !this._disableBumpMap && fG.setTexture("bumpSampler", this._bumpTexture)), this.Dv().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(bG) && this.Dv().depthPeelingRenderer.bind(LG), this._eventInfo.subMesh = ZG, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Vb.e)(this._activeEffect, this, wG), this.bindEyePosition(LG)
          } else VG && (this._needToBindSceneUbo = !0);
          !YG && this.isFrozen && !VG || !wG.lightsEnabled || this._disableLighting || (0, xG.u)(wG, bG, this._activeEffect, SG, this._maxSimultaneousLights), !YG && this.isFrozen || ((wG.fogEnabled && bG.applyFog && wG.fogMode !== MG.f.FOGMODE_NONE || pG || this.subSurface.refractionTexture || bG.receiveShadows || SG.PREPASS || SG.CLUSTLIGHT_BATCH) && this.bindView(LG), (0, xG.l)(wG, bG, this._activeEffect, !0), SG.NUM_MORPH_INFLUENCERS && (0, xG.y)(bG, this._activeEffect), SG.BAKED_VERTEX_ANIMATION_TEXTURE && bG.bakedVertexAnimationManager?.bind(LG, SG.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, xG.w)(SG, this._activeEffect, wG)), this._afterBind(bG, this._activeEffect, ZG), fG.update()
        }
        getAnimatables() {
          const GG = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && GG.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && GG.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && GG.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && GG.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && GG.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && GG.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && GG.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? GG.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && GG.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && GG.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && GG.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && GG.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && GG.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && GG.push(this._microSurfaceTexture), GG
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.Dv().environmentTexture
        }
        getActiveTextures() {
          const GG = super.getActiveTextures();
          return this._albedoTexture && GG.push(this._albedoTexture), this._baseWeightTexture && GG.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && GG.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && GG.push(this._ambientTexture), this._opacityTexture && GG.push(this._opacityTexture), this._reflectionTexture && GG.push(this._reflectionTexture), this._emissiveTexture && GG.push(this._emissiveTexture), this._reflectivityTexture && GG.push(this._reflectivityTexture), this._metallicTexture && GG.push(this._metallicTexture), this._metallicReflectanceTexture && GG.push(this._metallicReflectanceTexture), this._reflectanceTexture && GG.push(this._reflectanceTexture), this._microSurfaceTexture && GG.push(this._microSurfaceTexture), this._bumpTexture && GG.push(this._bumpTexture), this._lightmapTexture && GG.push(this._lightmapTexture), GG
        }
        hasTexture(GG) {
          return !!super.hasTexture(GG) || (this._albedoTexture === GG || (this._baseWeightTexture === GG || (this._baseDiffuseRoughnessTexture === GG || (this._ambientTexture === GG || (this._opacityTexture === GG || (this._reflectionTexture === GG || (this._emissiveTexture === GG || (this._reflectivityTexture === GG || (this._metallicTexture === GG || (this._metallicReflectanceTexture === GG || (this._reflectanceTexture === GG || (this._microSurfaceTexture === GG || (this._bumpTexture === GG || this._lightmapTexture === GG)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const GG = this.Dv().enableSubSurfaceForPrePass();
          return GG && (GG.enabled = !0), !0
        }
        dispose(GG, bG) {
          this._breakShaderLoadedCheck = !0, bG && (this._environmentBRDFTexture && this.Dv().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(GG, bG)
        }
      }, bG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(SG[Symbol.metadata] ?? null) : void 0;
        wG = [(0, WG.d)("_markAllSubMeshesAsMiscDirty")], (0, CG.k)(GG, null, wG, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: GG => "debugMode" in GG,
            get: GG => GG.debugMode,
            set: (GG, bG) => {
              GG.debugMode = bG
            }
          },
          metadata: bG
        }, yG, kG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG.PBRMATERIAL_OPAQUE = LG.e.MATERIAL_OPAQUE, GG.PBRMATERIAL_ALPHATEST = LG.e.MATERIAL_ALPHATEST, GG.PBRMATERIAL_ALPHABLEND = LG.e.MATERIAL_ALPHABLEND, GG.PBRMATERIAL_ALPHATESTANDBLEND = LG.e.MATERIAL_ALPHATESTANDBLEND, GG.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, GG.LIGHTFALLOFF_PHYSICAL = 0, GG.LIGHTFALLOFF_GLTF = 1, GG.LIGHTFALLOFF_STANDARD = 2, GG.ForceGLSL = !1, GG._ShaderLoader = new fb.c((() => [Promise.all([ZG.e(322), ZG.e(333)]).then((() => ZG(62089))), Promise.all([ZG.e(327), ZG.e(323), ZG.e(384), ZG.e(336), ZG.e(383)]).then((() => ZG(62109)))]), (() => [Promise.all([ZG.e(341), ZG.e(343), ZG.e(350)]).then((() => ZG(62195))), Promise.all([ZG.e(341), ZG.e(344), ZG.e(387), ZG.e(354), ZG.e(386)]).then((() => ZG(62212)))])), GG
    })();
    Object.getOwnPropertyDescriptor(Xb.prototype, "decalMap") || Object.defineProperty(Xb.prototype, "decalMap", (0, Jb.d)("PBRBaseMaterial", "decalMap")), (0, ZG(42292).e)();
    var ub = ZG(40416);
    var ib = ZG(40477),
      Cb = ZG(42277),
      Wb = ZG(40210),
      mb = ZG(40225),
      Ib = ZG(40330);
    let Fb = !1;
    const vb = new TG.d,
      ab = new TG.d;
    class cb extends Cb.b {
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
      set wrapU(GG) {
        if (this._textures)
          for (let bG = 0; bG < this._textures.length; bG++) this._textures[bG].wrapU = GG
      }
      set wrapV(GG) {
        if (this._textures)
          for (let bG = 0; bG < this._textures.length; bG++) this._textures[bG].wrapV = GG
      }
      constructor(GG, bG, ZG, wG, SG, LG) {
        const yG = !(!SG || !SG.generateMipMaps) && SG.generateMipMaps,
          kG = !(!SG || !SG.generateDepthTexture) && SG.generateDepthTexture,
          UG = SG && SG.depthTextureFormat ? SG.depthTextureFormat : 15,
          YG = !SG || void 0 === SG.doNotChangeAspectRatio || SG.doNotChangeAspectRatio,
          VG = !(!SG || !SG.drawOnlyOnFirstAttachmentByDefault) && SG.drawOnlyOnFirstAttachmentByDefault;
        if (super(GG, bG, wG, yG, YG, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Fb || (Fb = !0, mb.ThinEngine.prototype.restoreSingleAttachment = function() {
            const GG = this._gl;
            this.bindAttachments([GG.BACK])
          }, mb.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const GG = this._gl;
            this.bindAttachments([GG.COLOR_ATTACHMENT0])
          }, mb.ThinEngine.prototype.buildTextureLayout = function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ZG = this._gl,
              wG = [];
            if (bG) wG.push(ZG.BACK);
            else
              for (let SG = 0; SG < GG.length; SG++) GG[SG] ? wG.push(ZG["COLOR_ATTACHMENT" + SG]) : wG.push(ZG.NONE);
            return wG
          }, mb.ThinEngine.prototype.bindAttachments = function(GG) {
            const bG = this._gl,
              ZG = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, ZG)
              for (let wG = 0; wG < GG.length; wG++) GG[wG] !== bG.NONE && ZG[wG] && (0, Ib.l)(ZG[wG].format) && (this._integerMRTAttachmentsMask |= 1 << wG);
            bG.drawBuffers(GG)
          }, mb.ThinEngine.prototype.clearAttachments = function(GG, bG, ZG, wG) {
            let SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const yG = this._currentRenderTarget?.textures;
            let kG = !1;
            if (ZG && GG && yG)
              for (let UG = 0; UG < bG.length; UG++) {
                const GG = yG[UG];
                if (bG[UG] !== this._gl.NONE && GG && (0, Ib.l)(GG.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  kG = !0;
                  break
                }
              }
            if (!kG || !GG || !yG) return this.bindAttachments(bG), void this.clear(GG, ZG, wG, SG, LG);
            this.bindAttachments(bG), this._applyColorWriteState();
            for (let UG = 0; UG < bG.length; UG++) {
              const ZG = yG[UG];
              if (bG[UG] !== this._gl.NONE && ZG) {
                let bG = GG;
                if ((0, Ib.l)(ZG.format)) {
                  const wG = (0, Ib.n)(ZG.type);
                  bG = wG ? vb : ab;
                  const SG = wG ? 255 : 1;
                  bG.r = Math.round(GG.r * SG), bG.g = Math.round(GG.g * SG), bG.b = Math.round(GG.b * SG), bG.a = Math.round(GG.a * SG)
                }
                this._clearColorAttachment(UG, bG, ZG.format, ZG.type)
              }
            }
            if (wG || SG) {
              const GG = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, wG, SG, LG)
              } finally {
                this._integerMRTAttachmentsMask = GG
              }
            }
          }, mb.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZG = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, GG.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(GG), bG || this.generateMipMapsMultiFramebuffer(GG), ZG && (GG._MSAAFramebuffer && this._bindUnboundFramebuffer(GG._framebuffer), ZG()), this._bindUnboundFramebuffer(null)
          }, mb.ThinEngine.prototype.createMultipleRenderTarget = function(GG, bG) {
            let ZG, wG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              SG = !1,
              LG = !0,
              yG = !1,
              kG = !1,
              UG = 1,
              YG = 1,
              VG = [],
              pG = [],
              fG = [],
              QG = [],
              KG = [],
              hG = [],
              dG = [],
              JG = [],
              rG = [],
              zG = !1;
            const EG = this._createHardwareRenderTargetWrapper(!0, !1, GG);
            void 0 !== bG && (SG = void 0 !== bG.generateMipMaps && bG.generateMipMaps, LG = void 0 === bG.generateDepthBuffer || bG.generateDepthBuffer, yG = void 0 !== bG.generateStencilBuffer && bG.generateStencilBuffer, kG = void 0 !== bG.generateDepthTexture && bG.generateDepthTexture, UG = bG.ByG ?? 1, YG = bG.samples ?? YG, VG = bG.types || VG, pG = bG.samplingModes || pG, fG = bG.useSRGBBuffers || fG, QG = bG.formats || QG, KG = bG.targetTypes || KG, hG = bG.faceIndex || hG, dG = bG.layerIndex || dG, JG = bG.layerCounts || JG, rG = bG.labels || rG, zG = bG.dontCreateTextures ?? !1, this.Zh > 1 && (13 === bG.depthTextureFormat || 17 === bG.depthTextureFormat || 16 === bG.depthTextureFormat || 14 === bG.depthTextureFormat || 18 === bG.depthTextureFormat) && (ZG = bG.depthTextureFormat)), void 0 === ZG && (ZG = yG ? 13 : 14);
            const oG = this._gl,
              XG = this._currentFramebuffer,
              uG = oG.createFramebuffer();
            this._bindUnboundFramebuffer(uG);
            const iG = GG.width ?? GG,
              CG = GG.height ?? GG,
              WG = [],
              IG = [],
              FG = this.Zh > 1 && (13 === ZG || 17 === ZG || 18 === ZG);
            EG.label = bG?.label ?? "MultiRenderTargetWrapper", EG._framebuffer = uG, EG._generateDepthBuffer = kG || LG, EG._generateStencilBuffer = kG ? FG : yG, EG._depthStencilBuffer = this._setupFramebufferDepthAttachments(EG._generateStencilBuffer, EG._generateDepthBuffer, iG, CG, 1, ZG), EG._attachments = IG;
            for (let vG = 0; vG < UG; vG++) {
              let GG = pG[vG] || 3,
                bG = VG[vG] || 0,
                ZG = fG[vG] || !1;
              const wG = QG[vG] || 5,
                LG = KG[vG] || 3553,
                yG = JG[vG] ?? 1;
              (1 !== bG || this._caps.textureFloatLinearFiltering) && (2 !== bG || this._caps.textureHalfFloatLinearFiltering) || (GG = 1);
              const kG = this._getSamplingParameters(GG, SG);
              1 !== bG || this._caps.textureFloat || (bG = 0, mG.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), ZG = ZG && this._caps.supportSRGBBuffers && (this.Zh > 1 || this.isWebGPU);
              const UG = this.Zh > 1,
                YG = oG[UG ? "COLOR_ATTACHMENT" + vG : "COLOR_ATTACHMENT" + vG + "_WEBGL"];
              if (IG.push(YG), -1 === LG || zG) continue;
              const hG = new Wb.b(this, 6);
              WG[vG] = hG, oG.activeTexture(oG["TEXTURE" + vG]), oG.bindTexture(LG, hG._hardwareTexture.underlyingResource), oG.texParameteri(LG, oG.TEXTURE_MAG_FILTER, kG.mag), oG.texParameteri(LG, oG.TEXTURE_MIN_FILTER, kG.min), oG.texParameteri(LG, oG.TEXTURE_WRAP_S, oG.CLAMP_TO_EDGE), oG.texParameteri(LG, oG.TEXTURE_WRAP_T, oG.CLAMP_TO_EDGE);
              const dG = this._getRGBABufferInternalSizedFormat(bG, wG, ZG),
                XG = this._getInternalFormat(wG),
                uG = this._getWebGLTextureType(bG);
              if (!UG || 35866 !== LG && 32879 !== LG)
                if (34067 === LG) {
                  for (let GG = 0; GG < 6; GG++) oG.texImage2D(oG.TEXTURE_CUBE_MAP_POSITIVE_X + GG, 0, dG, iG, CG, 0, XG, uG, null);
                  hG.isCube = !0
                } else oG.texImage2D(oG.TEXTURE_2D, 0, dG, iG, CG, 0, XG, uG, null);
              else 35866 === LG ? hG.is2DArray = !0 : hG.is3D = !0, hG.baseDepth = hG.depth = yG, oG.texImage3D(LG, 0, dG, iG, CG, yG, 0, XG, uG, null);
              SG && oG.generateMipmap(LG), this._bindTextureDirectly(LG, null), hG.baseWidth = iG, hG.baseHeight = CG, hG.width = iG, hG.height = CG, hG.isReady = !0, hG.samples = 1, hG.generateMipMaps = SG, hG.samplingMode = GG, hG.type = bG, hG._useSRGBBuffer = ZG, hG.format = wG, hG.label = rG[vG] ?? EG.label + "-Texture" + vG, this._internalTexturesCache.push(hG)
            }
            if (kG && this._caps.depthTextureExtension && !zG) {
              const GG = new Wb.b(this, 14);
              let bG = 5,
                wG = oG.DEPTH_COMPONENT16,
                LG = oG.DEPTH_COMPONENT,
                yG = oG.UNSIGNED_SHORT,
                kG = oG.DEPTH_ATTACHMENT;
              this.Zh < 2 ? wG = oG.DEPTH_COMPONENT : 14 === ZG ? (bG = 1, yG = oG.FLOAT, wG = oG.DEPTH_COMPONENT32F) : 18 === ZG ? (bG = 0, yG = oG.FLOAT_32_UNSIGNED_INT_24_8_REV, wG = oG.DEPTH32F_STENCIL8, LG = oG.DEPTH_STENCIL, kG = oG.DEPTH_STENCIL_ATTACHMENT) : 16 === ZG ? (bG = 0, yG = oG.UNSIGNED_INT, wG = oG.DEPTH_COMPONENT24, kG = oG.DEPTH_ATTACHMENT) : 13 !== ZG && 17 !== ZG || (bG = 12, yG = oG.UNSIGNED_INT_24_8, wG = oG.DEPTH24_STENCIL8, LG = oG.DEPTH_STENCIL, kG = oG.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(oG.TEXTURE_2D, GG, !0), oG.texParameteri(oG.TEXTURE_2D, oG.TEXTURE_MAG_FILTER, oG.NEAREST), oG.texParameteri(oG.TEXTURE_2D, oG.TEXTURE_MIN_FILTER, oG.NEAREST), oG.texParameteri(oG.TEXTURE_2D, oG.TEXTURE_WRAP_S, oG.CLAMP_TO_EDGE), oG.texParameteri(oG.TEXTURE_2D, oG.TEXTURE_WRAP_T, oG.CLAMP_TO_EDGE), oG.texImage2D(oG.TEXTURE_2D, 0, wG, iG, CG, 0, LG, yG, null), oG.framebufferTexture2D(oG.FRAMEBUFFER, kG, oG.TEXTURE_2D, GG._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(oG.TEXTURE_2D, null), EG._depthStencilTexture = GG, EG._depthStencilTextureWithStencil = FG, GG.baseWidth = iG, GG.baseHeight = CG, GG.width = iG, GG.height = CG, GG.isReady = !0, GG.samples = 1, GG.generateMipMaps = SG, GG.samplingMode = 1, GG.format = ZG, GG.type = bG, GG.label = EG.label + "-DepthStencil", WG[UG] = GG, this._internalTexturesCache.push(GG)
            }
            if (EG.setTextures(WG), wG && oG.drawBuffers(IG), this._bindUnboundFramebuffer(XG), EG.setLayerAndFaceIndices(dG, hG), this.resetTextureCache(), zG) {
              if (YG > 1) {
                const GG = oG.createFramebuffer();
                if (!GG) throw new Error("Unable to create multi sampled framebuffer");
                EG._samples = YG, EG._MSAAFramebuffer = GG, UG > 0 && wG && (this._bindUnboundFramebuffer(GG), oG.drawBuffers(IG), this._bindUnboundFramebuffer(XG))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(EG, YG, wG);
            return EG
          }, mb.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(GG, bG) {
            let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Zh < 2 || !GG) return 1;
            if (GG.samples === bG) return bG;
            const wG = this._gl;
            bG = Math.min(bG, this.getCaps().maxMSAASamples), GG._depthStencilBuffer && (wG.deleteRenderbuffer(GG._depthStencilBuffer), GG._depthStencilBuffer = null), GG._MSAAFramebuffer && (wG.deleteFramebuffer(GG._MSAAFramebuffer), GG._MSAAFramebuffer = null);
            const SG = GG._attachments.length;
            for (let yG = 0; yG < SG; yG++) {
              const bG = GG.textures[yG]._hardwareTexture;
              bG?.releaseMSAARenderBuffers()
            }
            if (bG > 1 && "function" === typeof wG.renderbufferStorageMultisample) {
              const LG = wG.createFramebuffer();
              if (!LG) throw new Error("Unable to create multi sampled framebuffer");
              GG._MSAAFramebuffer = LG, this._bindUnboundFramebuffer(LG);
              const yG = [];
              for (let ZG = 0; ZG < SG; ZG++) {
                const SG = GG.textures[ZG],
                  LG = SG._hardwareTexture,
                  kG = wG[this.Zh > 1 ? "COLOR_ATTACHMENT" + ZG : "COLOR_ATTACHMENT" + ZG + "_WEBGL"],
                  UG = this._createRenderBuffer(SG.width, SG.height, bG, -1, this._getRGBABufferInternalSizedFormat(SG.type, SG.format, SG._useSRGBBuffer), kG);
                if (!UG) throw new Error("Unable to create multi sampled framebuffer");
                LG.addMSAARenderBuffer(UG), SG.samples = bG, yG.push(kG)
              }
              ZG && wG.drawBuffers(yG)
            } else this._bindUnboundFramebuffer(GG._framebuffer);
            const LG = GG._depthStencilTexture ? GG._depthStencilTexture.format : void 0;
            return GG._depthStencilBuffer = this._setupFramebufferDepthAttachments(GG._generateStencilBuffer, GG._generateDepthBuffer, GG.width, GG.height, bG, LG), this._bindUnboundFramebuffer(null), GG._samples = bG, bG
          }, mb.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(GG) {
            const bG = GG,
              ZG = this._gl;
            if (bG.isMulti)
              for (let wG = 0; wG < bG._attachments.length; wG++) {
                const GG = bG.textures[wG];
                !GG?.generateMipMaps || GG?.isCube || GG?.is3D || (this._bindTextureDirectly(ZG.TEXTURE_2D, GG, !0), ZG.generateMipmap(ZG.TEXTURE_2D), this._bindTextureDirectly(ZG.TEXTURE_2D, null))
              }
          }, mb.ThinEngine.prototype.resolveMultiFramebuffer = function(GG) {
            const bG = GG,
              ZG = this._gl;
            if (!bG._MSAAFramebuffer || !bG.isMulti) return;
            let wG = bG.resolveMSAAColors ? ZG.COLOR_BUFFER_BIT : 0;
            wG |= bG._generateDepthBuffer && bG.resolveMSAADepth ? ZG.DEPTH_BUFFER_BIT : 0, wG |= bG._generateStencilBuffer && bG.resolveMSAAStencil ? ZG.STENCIL_BUFFER_BIT : 0;
            const SG = bG._attachments,
              LG = SG.length;
            ZG.bindFramebuffer(ZG.READ_FRAMEBUFFER, bG._MSAAFramebuffer), ZG.bindFramebuffer(ZG.DRAW_FRAMEBUFFER, bG._framebuffer);
            for (let yG = 0; yG < LG; yG++) {
              const GG = bG.textures[yG];
              for (let bG = 0; bG < LG; bG++) SG[bG] = ZG.NONE;
              SG[yG] = ZG[this.Zh > 1 ? "COLOR_ATTACHMENT" + yG : "COLOR_ATTACHMENT" + yG + "_WEBGL"], ZG.readBuffer(SG[yG]), ZG.drawBuffers(SG), ZG.blitFramebuffer(0, 0, GG.width, GG.height, 0, 0, GG.width, GG.height, wG, ZG.NEAREST)
            }
            for (let yG = 0; yG < LG; yG++) SG[yG] = ZG[this.Zh > 1 ? "COLOR_ATTACHMENT" + yG : "COLOR_ATTACHMENT" + yG + "_WEBGL"];
            ZG.drawBuffers(SG), ZG.bindFramebuffer(this._gl.FRAMEBUFFER, bG._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = LG;
        const pG = [],
          fG = [],
          QG = [],
          KG = [],
          hG = [],
          dG = [],
          JG = [],
          rG = [];
        this._initTypes(ZG, pG, fG, QG, KG, hG, dG, JG, rG, SG);
        const zG = !SG || void 0 === SG.generateDepthBuffer || SG.generateDepthBuffer,
          EG = !(!SG || void 0 === SG.generateStencilBuffer) && SG.generateStencilBuffer,
          oG = SG && SG.samples ? SG.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: fG,
          generateMipMaps: yG,
          generateDepthBuffer: zG,
          generateStencilBuffer: EG,
          generateDepthTexture: kG,
          depthTextureFormat: UG,
          types: pG,
          ByG: ZG,
          useSRGBBuffers: QG,
          samples: oG,
          formats: KG,
          targetTypes: hG,
          faceIndex: dG,
          layerIndex: JG,
          layerCounts: rG,
          labels: LG,
          label: GG
        }, this._count = ZG, this._drawOnlyOnFirstAttachmentByDefault = VG, ZG > 0 && (this._createInternalTextures(), this._createTextures(LG))
      }
      _initTypes(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        for (let VG = 0; VG < GG; VG++) YG && YG.types && void 0 !== YG.types[VG] ? bG.push(YG.types[VG]) : bG.push(YG && YG.defaultType ? YG.defaultType : 0), YG && YG.samplingModes && void 0 !== YG.samplingModes[VG] ? ZG.push(YG.samplingModes[VG]) : ZG.push(FG.d.BILINEAR_SAMPLINGMODE), YG && YG.useSRGBBuffers && void 0 !== YG.useSRGBBuffers[VG] ? wG.push(YG.useSRGBBuffers[VG]) : wG.push(!1), YG && YG.formats && void 0 !== YG.formats[VG] ? SG.push(YG.formats[VG]) : SG.push(5), YG && YG.targetTypes && void 0 !== YG.targetTypes[VG] ? LG.push(YG.targetTypes[VG]) : LG.push(3553), YG && YG.faceIndex && void 0 !== YG.faceIndex[VG] ? yG.push(YG.faceIndex[VG]) : yG.push(0), YG && YG.layerIndex && void 0 !== YG.layerIndex[VG] ? kG.push(YG.layerIndex[VG]) : kG.push(0), YG && YG.layerCounts && void 0 !== YG.layerCounts[VG] ? UG.push(YG.layerCounts[VG]) : UG.push(1)
      }
      _createInternaTextureIndexMapping() {
        const GG = {},
          bG = [];
        if (!this._renderTarget) return bG;
        const ZG = this._renderTarget.textures;
        for (let wG = 0; wG < ZG.length; wG++) {
          const SG = ZG[wG];
          if (!SG) continue;
          const LG = GG[SG.uniqueId];
          void 0 !== LG ? bG[wG] = LG : GG[SG.uniqueId] = wG
        }
        return bG
      }
      _rebuild() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || GG) return;
        const wG = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), bG && (this._releaseTextures(), this._createTextures(ZG));
        const SG = this._renderTarget.textures;
        for (let LG = 0; LG < SG.length; LG++) {
          const GG = this._textures[LG];
          void 0 !== wG[LG] && this._renderTarget.setTexture(SG[wG[LG]], LG), GG._texture = SG[LG], GG._texture && (GG._noMipmap = !GG._texture.useMipMaps, GG._useSRGBBuffer = GG._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let GG = 0; GG < this._textures.length; GG++) this._textures[GG]._texture = null, this._textures[GG].dispose()
      }
      _createTextures(GG) {
        const bG = this._renderTarget.textures;
        this._textures = [];
        for (let ZG = 0; ZG < bG.length; ZG++) {
          const wG = new FG.d(null, this.Dv());
          GG?.[ZG] && (wG.name = GG[ZG]), wG._texture = bG[ZG], wG._texture && (wG._noMipmap = !wG._texture.useMipMaps, wG._useSRGBBuffer = wG._texture._useSRGBBuffer), this._textures.push(wG)
        }
      }
      setInternalTexture(GG, bG) {
        let ZG = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === bG && (this._texture = GG), this.renderTarget.setTexture(GG, bG, ZG), this.textures[bG] || (this.textures[bG] = new FG.d(null, this.Dv()), this.textures[bG].name = this._textureNames?.[bG] ?? this.textures[bG].name), this.textures[bG]._texture = GG, this.textures[bG]._noMipmap = !GG.useMipMaps, this.textures[bG]._useSRGBBuffer = GG._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[bG] = GG.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[bG] = GG.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[bG] = GG._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[bG])) {
          let ZG;
          ZG = GG.is2DArray ? 35866 : GG.isCube ? 34067 : GG.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[bG] = ZG
        }
      }
      setLayerAndFaceIndex(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[GG] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[GG] = bG), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[GG] = ZG), this.renderTarget.setLayerAndFaceIndex(GG, bG, ZG))
      }
      setLayerAndFaceIndices(GG, bG) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = GG, this._multiRenderTargetOptions.faceIndex = bG, this.renderTarget.setLayerAndFaceIndices(GG, bG))
      }
      get samples() {
        return this._samples
      }
      set samples(GG) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(GG) : this._samples = GG
      }
      resize(GG) {
        this._processSizeParameter(GG), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(GG, bG, ZG) {
        this._multiRenderTargetOptions.ByG = GG, this._count = GG;
        const wG = [],
          SG = [],
          LG = [],
          yG = [],
          kG = [],
          UG = [],
          YG = [],
          VG = [];
        this._textureNames = ZG, this._initTypes(GG, wG, SG, LG, yG, kG, UG, YG, VG, bG), this._multiRenderTargetOptions.types = wG, this._multiRenderTargetOptions.samplingModes = SG, this._multiRenderTargetOptions.useSRGBBuffers = LG, this._multiRenderTargetOptions.formats = yG, this._multiRenderTargetOptions.targetTypes = kG, this._multiRenderTargetOptions.faceIndex = UG, this._multiRenderTargetOptions.layerIndex = YG, this._multiRenderTargetOptions.layerCounts = VG, this._multiRenderTargetOptions.labels = ZG, this._rebuild(!1, !0, ZG)
      }
      _unbindFrameBuffer(GG, bG) {
        this._renderTarget && GG.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(bG)
        }))
      }
      dispose() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), GG ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const GG = this._renderTarget?.textures;
        if (GG) {
          for (let bG = GG.length - 1; bG >= 0; bG--) this._textures[bG]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var lb = ZG(40548);
    class jb {
      constructor(GG) {
        this.name = lb.b.NAME_GEOMETRYBUFFERRENDERER, this.Ah = GG
      }
      register() {
        this.Ah._gatherRenderTargetsStage.registerStep(lb.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(GG) {
        this.Ah._geometryBufferRenderer && GG.push(this.Ah._geometryBufferRenderer.getGBuffer())
      }
    }
    let Pb = !1;
    var Mb;
    ! function(GG) {
      GG[GG.Small = 0] = "Small", GG[GG.Medium = 1] = "Medium", GG[GG.Large = 2] = "Large", GG[GG.ExtraLarge = 3] = "ExtraLarge"
    }(Mb || (Mb = {}));
    const Ab = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      sb = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class qb {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(GG) {
        if (GG && this._enableMeshBlendTag && !this._scene.CK().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = GG
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(GG) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = GG, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(GG, bG) {
        GG === qb.POSITION_TEXTURE_TYPE ? (this._positionIndex = bG, this._enablePosition = !0) : GG === qb.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = bG, this._enableVelocity = !0) : GG === qb.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = bG, this._enableVelocityLinear = !0) : GG === qb.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = bG, this._enableReflectivity = !0) : GG === qb.DEPTH_TEXTURE_TYPE ? (this._depthIndex = bG, this._enableDepth = !0) : GG === qb.NORMAL_TEXTURE_TYPE ? (this._normalIndex = bG, this._enableNormal = !0) : GG === qb.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = bG, this._enableScreenspaceDepth = !0) : GG === qb.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = bG, this._enableIrradiance = !0) : GG === qb.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = bG, this._enableObjectId = !0) : GG === qb.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = bG, this._enableMeshBlendTag = !0)
      }
      _setAttachments(GG) {
        this._attachmentsFromPrePass = GG
      }
      _linkInternalTexture(GG) {
        this._multiRenderTarget.setInternalTexture(GG, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(GG) {
        this._multiRenderTarget.renderList = GG
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(GG) {
        switch (GG) {
          case qb.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case qb.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case qb.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case qb.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case qb.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case qb.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case qb.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case qb.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case qb.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case qb.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(GG) {
        this._enableDepth = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(GG) {
        this._enableNormal = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(GG) {
        this._enablePosition = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(GG) {
        this._enableVelocity = GG, GG || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = GG
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(GG) {
        this._enableVelocityLinear = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(GG) {
        this._enableReflectivity = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(GG) {
        this._enableScreenspaceDepth = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(GG) {
        this._enableIrradiance = GG, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(GG) {
        if (GG && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (GG && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (GG && !this._enableObjectId && !this._linkedWithPrePass) {
          const GG = this._scene.CK(),
            bG = Math.min(GG.getCaps().maxDrawBuffers ?? 1, 8),
            ZG = this._assignRenderTargetIndices()[0] + 1;
          if (GG.getCaps().drawBuffersExtension && ZG > bG) throw new Error(`GeometryBufferRenderer: ${ZG} color attachments were requested, but this engine supports at most ${bG}`)
        }
        this._enableObjectId = GG, GG || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(GG) {
        if (this._enableMeshBlendTag !== GG) {
          if (GG) {
            const GG = this._scene.CK();
            if (! function(GG) {
                return "NATIVE" !== GG.shaderPlatformName && (GG.isWebGPU || 2 === GG.Zh)
              }(GG)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !GG.isWebGPU && !GG.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const bG = Math.min(GG.getCaps().maxDrawBuffers ?? 1, 8),
                ZG = this._assignRenderTargetIndices()[0] + 1;
              if (GG.getCaps().drawBuffersExtension && ZG > bG) throw new Error(`GeometryBufferRenderer: ${ZG} color attachments were requested, but this engine supports at most ${bG}`)
            }
          }
          this._enableMeshBlendTag = GG, GG || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Ah() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        var SG;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new TG.d(0, 0, 0, 0), this._clearDepthColor = new TG.d(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = GG, this._ratioOrDimensions = bG, this._useUbo = GG.CK().supportsUniformBuffers, this._depthFormat = ZG, this._textureTypesAndFormats = wG || {}, this._initShaderSourceAsync(), SG = qb, Pb || (Pb = !0, Object.defineProperty(MG.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(GG) {
            GG && GG.isSupported && (this._geometryBufferRenderer = GG)
          },
          enumerable: !0,
          configurable: !0
        }), MG.f.prototype.enableGeometryBufferRenderer = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            ZG = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new SG(this, GG, bG, ZG), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, MG.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, SG._SceneComponentInitialization = GG => {
          let bG = GG._getComponent(lb.b.NAME_GEOMETRYBUFFERRENDERER);
          bG || (bG = new jb(GG), GG.KwG(bG))
        }), qb._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.CK().isWebGPU && !qb.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ZG.e(342).then((() => ZG(62398))), Promise.all([ZG.e(341), ZG.e(353)]).then((() => ZG(62405)))])) : await Promise.all([ZG.e(325).then((() => ZG(62412))), ZG.e(324).then((() => ZG(62415)))]), this._shadersLoaded = !0
      }
      isReady(GG, bG) {
        if (!this._shadersLoaded) return !1;
        const ZG = GG.vK();
        if (ZG && ZG.disableDepthWrite) return !1;
        if (function(GG) {
            return GG._isGaussianSplatting || "GaussianSplattingMesh" === (bG = GG.getClassName()) || "GaussianSplattingStream" === bG;
            var bG
          }(GG.getMesh())) return !1;
        const wG = [],
          SG = [sG.l.PositionKind],
          LG = GG.getMesh();
        LG.isVerticesDataPresent(sG.l.NormalKind) && (wG.push("#define HAS_NORMAL_ATTRIBUTE"), SG.push(sG.l.NormalKind));
        let yG = !1,
          kG = !1;
        if (ZG) {
          let GG = !1;
          if (ZG.needAlphaTestingForMesh(LG) && ZG.getAlphaTestTexture() && (wG.push("#define ALPHATEST"), wG.push(`#define ALPHATEST_UV${ZG.getAlphaTestTexture().coordinatesIndex+1}`), GG = !0), (ZG.bumpTexture || ZG.normalTexture || ZG.geometryNormalTexture) && NG.d.BumpTextureEnabled) {
            const bG = ZG.bumpTexture || ZG.normalTexture || ZG.geometryNormalTexture;
            wG.push("#define BUMP"), wG.push(`#define BUMP_UV${bG.coordinatesIndex+1}`), GG = !0
          }
          if (this._enableReflectivity) {
            let bG = !1;
            if ("PBRMetallicRoughnessMaterial" === ZG.getClassName()) ZG.metallicRoughnessTexture && (wG.push("#define ORMTEXTURE"), wG.push(`#define REFLECTIVITY_UV${ZG.metallicRoughnessTexture.coordinatesIndex+1}`), wG.push("#define METALLICWORKFLOW"), GG = !0, bG = !0), null != ZG.metallic && (wG.push("#define METALLIC"), wG.push("#define METALLICWORKFLOW"), bG = !0), null != ZG.roughness && (wG.push("#define ROUGHNESS"), wG.push("#define METALLICWORKFLOW"), bG = !0), bG && (ZG.baseTexture && (wG.push("#define ALBEDOTEXTURE"), wG.push(`#define ALBEDO_UV${ZG.baseTexture.coordinatesIndex+1}`), ZG.baseTexture.gammaSpace && wG.push("#define GAMMAALBEDO"), GG = !0), ZG.baseColor && wG.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === ZG.getClassName()) ZG.specularGlossinessTexture ? (wG.push("#define SPECULARGLOSSINESSTEXTURE"), wG.push(`#define REFLECTIVITY_UV${ZG.specularGlossinessTexture.coordinatesIndex+1}`), GG = !0, ZG.specularGlossinessTexture.gammaSpace && wG.push("#define GAMMAREFLECTIVITYTEXTURE")) : ZG.specularColor && wG.push("#define REFLECTIVITYCOLOR"), null != ZG.glossiness && wG.push("#define GLOSSINESS");
            else if ("PBRMaterial" === ZG.getClassName()) ZG.metallicTexture && (wG.push("#define ORMTEXTURE"), wG.push(`#define REFLECTIVITY_UV${ZG.metallicTexture.coordinatesIndex+1}`), wG.push("#define METALLICWORKFLOW"), GG = !0, bG = !0), null != ZG.metallic && (wG.push("#define METALLIC"), wG.push("#define METALLICWORKFLOW"), bG = !0), null != ZG.roughness && (wG.push("#define ROUGHNESS"), wG.push("#define METALLICWORKFLOW"), bG = !0), bG ? (ZG.albedoTexture && (wG.push("#define ALBEDOTEXTURE"), wG.push(`#define ALBEDO_UV${ZG.albedoTexture.coordinatesIndex+1}`), ZG.albedoTexture.gammaSpace && wG.push("#define GAMMAALBEDO"), GG = !0), ZG.albedoColor && wG.push("#define ALBEDOCOLOR")) : (ZG.reflectivityTexture ? (wG.push("#define SPECULARGLOSSINESSTEXTURE"), wG.push(`#define REFLECTIVITY_UV${ZG.reflectivityTexture.coordinatesIndex+1}`), ZG.reflectivityTexture.gammaSpace && wG.push("#define GAMMAREFLECTIVITYTEXTURE"), GG = !0) : ZG.reflectivityColor && wG.push("#define REFLECTIVITYCOLOR"), null != ZG.microSurface && wG.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === ZG.getClassName()) ZG.specularTexture && (wG.push("#define REFLECTIVITYTEXTURE"), wG.push(`#define REFLECTIVITY_UV${ZG.specularTexture.coordinatesIndex+1}`), ZG.specularTexture.gammaSpace && wG.push("#define GAMMAREFLECTIVITYTEXTURE"), GG = !0), ZG.specularColor && wG.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === ZG.getClassName()) {
              const bG = ZG;
              wG.push("#define METALLIC"), wG.push("#define ROUGHNESS"), bG._useRoughnessFromMetallicTextureGreen && bG.baseMetalnessTexture ? (wG.push("#define ORMTEXTURE"), wG.push(`#define REFLECTIVITY_UV${bG.baseMetalnessTexture.coordinatesIndex+1}`), GG = !0) : bG.baseMetalnessTexture ? (wG.push("#define METALLIC_TEXTURE"), wG.push(`#define METALLIC_UV${bG.baseMetalnessTexture.coordinatesIndex+1}`), GG = !0) : bG.specularRoughnessTexture && (wG.push("#define ROUGHNESS_TEXTURE"), wG.push(`#define ROUGHNESS_UV${bG.specularRoughnessTexture.coordinatesIndex+1}`), GG = !0), bG.baseColorTexture && (wG.push("#define ALBEDOTEXTURE"), wG.push(`#define ALBEDO_UV${bG.baseColorTexture.coordinatesIndex+1}`), bG.baseColorTexture.gammaSpace && wG.push("#define GAMMAALBEDO"), GG = !0), bG.baseColor && wG.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (wG.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === ZG.getClassName())) {
            const bG = ZG;
            bG.subsurfaceWeight > 0 && bG.subsurfaceWeightTexture && (wG.push("#define SUBSURFACE_WEIGHT"), wG.push(`#define SUBSURFACEWEIGHT_UV${bG.subsurfaceWeightTexture.coordinatesIndex+1}`), GG = !0), bG.transmissionWeight > 0 && bG.transmissionWeightTexture && (wG.push("#define TRANSMISSION_WEIGHT"), wG.push(`#define TRANSMISSIONWEIGHT_UV${bG.transmissionWeightTexture.coordinatesIndex+1}`), GG = !0)
          }
          GG && (wG.push("#define NEED_UV"), LG.isVerticesDataPresent(sG.l.UVKind) && (SG.push(sG.l.UVKind), wG.push("#define UV1"), yG = !0), LG.isVerticesDataPresent(sG.l.UV2Kind) && (SG.push(sG.l.UV2Kind), wG.push("#define UV2"), kG = !0))
        }
        if (this._enableDepth && (wG.push("#define DEPTH"), wG.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (wG.push("#define NORMAL"), wG.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (wG.push("#define POSITION"), wG.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (wG.push("#define VELOCITY"), wG.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(LG) && wG.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (wG.push("#define VELOCITY_LINEAR"), wG.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(LG) && wG.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (wG.push("#define REFLECTIVITY"), wG.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (wG.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), wG.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          wG.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), wG.push("#define IRRADIANCE");
          const GG = this._scene;
          if (GG.environmentTexture) {
            const bG = {};
            let SG = !1,
              LG = 0;
            "OpenPBRMaterial" !== ZG.getClassName() && "StandardMaterial" !== ZG.getClassName() && "PBRMetallicRoughnessMaterial" !== ZG.getClassName() && "PBRSpecularGlossinessMaterial" !== ZG.getClassName() && "PBRMaterial" !== ZG.getClassName() || (SG = !!ZG.realtimeFiltering, LG = ZG.realtimeFilteringQuality || 0), (0, xG.W)(GG, GG.environmentTexture, bG, SG, LG, !0);
            for (const GG in bG) bG[GG] && wG.push("#define " + GG);
            bG.USEIRRADIANCEMAP || wG.push("#define SPHERICAL_HARMONICS");
            const yG = GG.postProcessRenderPipelineManager.supportedPipelines.find((GG => "IBLShadowsRenderPipeline" === GG.getClassName()));
            if (yG) {
              const GG = yG;
              GG._getAccumulatedTexture() && (wG.push("#define IBL_SHADOW_TEXTURE"), GG.coloredShadows && wG.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (wG.push("#define OBJECT_ID"), wG.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (wG.push("#define MESH_BLEND_TAG"), wG.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && wG.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && wG.push("#define ENCODE_NORMAL"), LG.useBones && LG.computeBonesUsingShaders && LG.skeleton ? (SG.push(sG.l.MatricesIndicesKind), SG.push(sG.l.MatricesWeightsKind), LG.numBoneInfluencers > 4 && (SG.push(sG.l.MatricesIndicesExtraKind), SG.push(sG.l.MatricesWeightsExtraKind)), wG.push("#define NUM_BONE_INFLUENCERS " + LG.numBoneInfluencers), wG.push("#define BONETEXTURE " + LG.skeleton.isUsingTextureForMatrices), wG.push("#define BonesPerMesh " + (LG.skeleton.bones.length + 1))) : (wG.push("#define NUM_BONE_INFLUENCERS 0"), wG.push("#define BONETEXTURE false"), wG.push("#define BonesPerMesh 0"));
        const UG = LG.morphTargetManager ? (0, xG.T)(LG.morphTargetManager, wG, SG, LG, !0, !0, !1, yG, kG, !1) : 0;
        bG && (wG.push("#define INSTANCES"), (0, xG.vb)(SG, this._enableVelocity || this._enableVelocityLinear), GG.getRenderingMesh().hasThinInstances && wG.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? wG.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : wG.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, Vb.k)(ZG, this._scene, wG);
        const YG = this._scene.CK(),
          VG = GG._getDrawWrapper(void 0, !0),
          pG = VG.defines,
          fG = wG.join("\n");
        return pG !== fG && VG.setEffect(YG.createEffect("geometry", {
          attributes: SG,
          uniformsNames: sb,
          samplers: Ab,
          defines: fG,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: UG
          },
          shaderLanguage: this.shaderLanguage
        }, YG), fG), VG.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(GG) {
        if (this._enableObjectId && 1 !== GG) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== GG) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = GG
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.CK().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Ah.CK()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Ah.CK().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const GG = [],
          bG = [];
        let ZG = 0;
        return this._enableDepth && (this._depthIndex = ZG, ZG++, GG.push("gBuffer_Depth"), bG.push(this._textureTypesAndFormats[qb.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = ZG, ZG++, GG.push("gBuffer_Normal"), bG.push(this._textureTypesAndFormats[qb.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = ZG, ZG++, GG.push("gBuffer_Position"), bG.push(this._textureTypesAndFormats[qb.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = ZG, ZG++, GG.push("gBuffer_Velocity"), bG.push(this._textureTypesAndFormats[qb.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = ZG, ZG++, GG.push("gBuffer_VelocityLinear"), bG.push(this._textureTypesAndFormats[qb.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = ZG, ZG++, GG.push("gBuffer_Reflectivity"), bG.push(this._textureTypesAndFormats[qb.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = ZG, ZG++, GG.push("gBuffer_ScreenspaceDepth"), bG.push(this._textureTypesAndFormats[qb.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = ZG, ZG++, GG.push("gBuffer_Irradiance"), bG.push(this._textureTypesAndFormats[qb.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = ZG, ZG++, GG.push("gBuffer_ObjectId"), bG.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = ZG, ZG++, GG.push("gBuffer_MeshBlendTag"), bG.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [ZG, GG, bG]
      }
      _createRenderTargets() {
        const GG = this._scene.CK(),
          [bG, ZG, wG] = this._assignRenderTargetIndices(),
          SG = Math.min(GG.getCaps().maxDrawBuffers ?? 1, 8);
        if (GG.getCaps().drawBuffersExtension && bG > SG) throw new Error(`GeometryBufferRenderer: ${bG} color attachments were requested, but this engine supports at most ${SG}`);
        let yG = 0;
        GG._caps.textureFloat && GG._caps.textureFloatLinearFiltering ? yG = 1 : GG._caps.textureHalfFloat && GG._caps.textureHalfFloatLinearFiltering && (yG = 2);
        const kG = this._getRenderTargetDimensions(),
          UG = [],
          YG = [],
          VG = [];
        for (const LG of wG) LG ? (UG.push(LG.textureType), YG.push(LG.textureFormat), VG.push(LG.samplingMode ?? 2)) : (UG.push(yG), YG.push(5), VG.push(2));
        if (this._normalsAreUnsigned = 11 === UG[qb.NORMAL_TEXTURE_TYPE] || 13 === UG[qb.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new cb("gBuffer", kG, bG, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: UG,
            formats: YG,
            samplingModes: VG,
            depthTextureFormat: this._depthFormat
          }, ZG.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = FG.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = FG.d.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const pG = [!0],
          fG = [!1],
          QG = [!0];
        for (let LG = 1; LG < bG; ++LG) pG.push(!0), QG.push(!1), fG.push(!0);
        const KG = GG.buildTextureLayout(pG),
          hG = GG.buildTextureLayout(fG),
          dG = GG.buildTextureLayout(QG);
        this._multiRenderTarget.onClearObservable.add((GG => {
          const bG = this.useSpecificClearForDepthTexture ? hG : KG;
          GG.clearAttachments(this._clearColor, bG, !0, !0, !0), this.useSpecificClearForDepthTexture && GG.clearAttachments(this._clearDepthColor, dG, !0, !1, !1), GG.bindAttachments(KG)
        })), this._resizeObserver = GG.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const JG = GG => {
          const bG = GG.getRenderingMesh(),
            ZG = GG.getEffectiveMesh(),
            wG = this._scene,
            SG = wG.CK(),
            yG = GG.vK();
          if (!yG) return;
          if (ZG._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[ZG.uniqueId] && (this._previousTransformationMatrices[ZG.uniqueId] = {
              Op: AG.e.Identity(),
              viewProjection: wG.getTransformMatrix()
            }, bG.skeleton)) {
            const GG = bG.skeleton.getTransformMatrices(bG);
            this._previousBonesTransformationMatrices[bG.uniqueId] = this._copyBonesTransformationMatrices(GG, new Float32Array(GG.length))
          }
          const kG = bG._getInstancesRenderList(GG._id, !!GG.getReplacementMesh());
          if (kG.mustReturn) return;
          const UG = SG.getCaps().instancedArrays && (null !== kG.visibleInstances[GG._id] || bG.hasThinInstances),
            YG = ZG.getWorldMatrix();
          if (this.isReady(GG, UG)) {
            const VG = GG._getDrawWrapper();
            if (!VG) return;
            const pG = VG.effect;
            let fG;
            SG.enableEffect(VG), UG || bG._bind(GG, pG, yG.fillMode), this._useUbo ? ((0, xG.z)(pG, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (pG.setMatrix("viewProjection", wG.getTransformMatrix()), pG.setMatrix("view", wG.getViewMatrix()), this._scene.bindEyePosition(pG, "vEyePosition"));
            if (bG._instanceDataStorage.isFrozen || !yG.backFaceCulling && null === yG.sideOrientation) fG = bG._effectiveSideOrientation;
            else {
              const GG = ZG._getWorldMatrixDeterminant();
              fG = yG._getEffectiveOrientation(bG), GG < 0 && (fG = fG === LG.e.ClockWiseSideOrientation ? LG.e.CounterClockWiseSideOrientation : LG.e.ClockWiseSideOrientation)
            }
            if (yG._preBind(VG, fG), yG.needAlphaTestingForMesh(ZG)) {
              const GG = yG.getAlphaTestTexture();
              GG && (pG.setTexture("diffuseSampler", GG), pG.setMatrix("diffuseMatrix", GG.getTextureMatrix()), pG.setFloat("alphaCutOff", yG.alphaCutOff ?? .4))
            }
            if ((yG.bumpTexture || yG.normalTexture || yG.geometryNormalTexture) && wG.CK().getCaps().standardDerivatives && NG.d.BumpTextureEnabled) {
              const GG = yG.bumpTexture || yG.normalTexture || yG.geometryNormalTexture;
              pG.setFloat3("vBumpInfos", GG.coordinatesIndex, 1 / GG.level, yG.parallaxScaleBias), pG.setMatrix("bumpMatrix", GG.getTextureMatrix()), pG.setTexture("bumpSampler", GG), pG.setFloat2("vTangentSpaceParams", yG.invertNormalMapX ? -1 : 1, yG.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === yG.getClassName()) null !== yG.metallicRoughnessTexture && (pG.setTexture("reflectivitySampler", yG.metallicRoughnessTexture), pG.setMatrix("reflectivityMatrix", yG.metallicRoughnessTexture.getTextureMatrix())), null !== yG.metallic && pG.setFloat("metallic", yG.metallic), null !== yG.roughness && pG.setFloat("glossiness", 1 - yG.roughness), null !== yG.baseTexture && (pG.setTexture("albedoSampler", yG.baseTexture), pG.setMatrix("albedoMatrix", yG.baseTexture.getTextureMatrix())), null !== yG.baseColor && pG.setColor3("albedoColor", yG.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === yG.getClassName()) null !== yG.specularGlossinessTexture ? (pG.setTexture("reflectivitySampler", yG.specularGlossinessTexture), pG.setMatrix("reflectivityMatrix", yG.specularGlossinessTexture.getTextureMatrix())) : null !== yG.specularColor && pG.setColor3("reflectivityColor", yG.specularColor), null !== yG.glossiness && pG.setFloat("glossiness", yG.glossiness);
            else if ("PBRMaterial" === yG.getClassName()) null !== yG.metallicTexture && (pG.setTexture("reflectivitySampler", yG.metallicTexture), pG.setMatrix("reflectivityMatrix", yG.metallicTexture.getTextureMatrix())), null !== yG.metallic && pG.setFloat("metallic", yG.metallic), null !== yG.roughness && pG.setFloat("glossiness", 1 - yG.roughness), null !== yG.roughness || null !== yG.metallic || null !== yG.metallicTexture ? (null !== yG.albedoTexture && (pG.setTexture("albedoSampler", yG.albedoTexture), pG.setMatrix("albedoMatrix", yG.albedoTexture.getTextureMatrix())), null !== yG.albedoColor && pG.setColor3("albedoColor", yG.albedoColor)) : (null !== yG.reflectivityTexture ? (pG.setTexture("reflectivitySampler", yG.reflectivityTexture), pG.setMatrix("reflectivityMatrix", yG.reflectivityTexture.getTextureMatrix())) : null !== yG.reflectivityColor && pG.setColor3("reflectivityColor", yG.reflectivityColor), null !== yG.microSurface && pG.setFloat("glossiness", yG.microSurface));
            else if ("StandardMaterial" === yG.getClassName()) null !== yG.specularTexture && (pG.setTexture("reflectivitySampler", yG.specularTexture), pG.setMatrix("reflectivityMatrix", yG.specularTexture.getTextureMatrix())), null !== yG.specularColor && pG.setColor3("reflectivityColor", yG.specularColor);
            else if ("OpenPBRMaterial" === yG.getClassName()) {
              const GG = yG;
              GG._useRoughnessFromMetallicTextureGreen && GG.baseMetalnessTexture ? (pG.setTexture("reflectivitySampler", GG.baseMetalnessTexture), pG.setMatrix("reflectivityMatrix", GG.baseMetalnessTexture.getTextureMatrix())) : GG.baseMetalnessTexture ? (pG.setTexture("metallicSampler", GG.baseMetalnessTexture), pG.setMatrix("metallicMatrix", GG.baseMetalnessTexture.getTextureMatrix())) : GG.specularRoughnessTexture && (pG.setTexture("roughnessSampler", GG.specularRoughnessTexture), pG.setMatrix("roughnessMatrix", GG.specularRoughnessTexture.getTextureMatrix())), pG.setFloat("metallic", GG.baseMetalness), pG.setFloat("glossiness", 1 - GG.specularRoughness), null !== GG.baseColorTexture && (pG.setTexture("albedoSampler", GG.baseColorTexture), pG.setMatrix("albedoMatrix", GG.baseColorTexture.getTextureMatrix())), null !== GG.baseColor && pG.setColor3("albedoColor", GG.baseColor)
            }
            if (this._enableIrradiance && wG.environmentTexture) {
              const GG = wG.environmentTexture,
                bG = wG.postProcessRenderPipelineManager.supportedPipelines.find((GG => "IBLShadowsRenderPipeline" === GG.getClassName()));
              if (bG) {
                const GG = bG._getAccumulatedTexture();
                GG && (pG.setTexture("iblShadowSampler", GG), pG.setFloat2("shadowTextureSize", GG.getSize().width, GG.getSize().height))
              }
              if (pG.setMatrix("reflectionMatrix", GG.getReflectionTextureMatrix()), pG.setFloat2("vReflectionInfos", GG.level * wG.iblIntensity, 0), pG.setTexture("reflectionSampler", GG), GG.irradianceTexture && (pG.setTexture("irradianceSampler", GG.irradianceTexture), GG.irradianceTexture._dominantDirection && pG.setVector3("vReflectionDominantDirection", GG.irradianceTexture._dominantDirection)), GG.sphericalPolynomial) {
                const bG = GG.sphericalPolynomial;
                if (bG.preScaledHarmonics) {
                  const GG = bG.preScaledHarmonics;
                  pG.setVector3("vSphericalL00", GG.l00), pG.setVector3("vSphericalL1_1", GG.l1_1), pG.setVector3("vSphericalL10", GG.l10), pG.setVector3("vSphericalL11", GG.l11), pG.setVector3("vSphericalL2_2", GG.l2_2), pG.setVector3("vSphericalL2_1", GG.l2_1), pG.setVector3("vSphericalL20", GG.l20), pG.setVector3("vSphericalL21", GG.l21), pG.setVector3("vSphericalL22", GG.l22)
                } else pG.setFloat3("vSphericalX", bG.x.x, bG.x.y, bG.x.z), pG.setFloat3("vSphericalY", bG.y.x, bG.y.y, bG.y.z), pG.setFloat3("vSphericalZ", bG.z.x, bG.z.y, bG.z.z), pG.setFloat3("vSphericalXX_ZZ", bG.xx.x - bG.zz.x, bG.xx.y - bG.zz.y, bG.xx.z - bG.zz.z), pG.setFloat3("vSphericalYY_ZZ", bG.yy.x - bG.zz.x, bG.yy.y - bG.zz.y, bG.yy.z - bG.zz.z), pG.setFloat3("vSphericalZZ", bG.zz.x, bG.zz.y, bG.zz.z), pG.setFloat3("vSphericalXY", bG.xy.x, bG.xy.y, bG.xy.z), pG.setFloat3("vSphericalYZ", bG.yz.x, bG.yz.y, bG.yz.z), pG.setFloat3("vSphericalZX", bG.zx.x, bG.zx.y, bG.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === yG.getClassName()) {
                const GG = yG;
                pG.setFloat("vSubsurfaceWeight", GG.subsurfaceWeight), GG.subsurfaceWeightTexture && (pG.setTexture("subsurfaceWeightSampler", GG.subsurfaceWeightTexture), pG.setMatrix("subsurfaceWeightMatrix", GG.subsurfaceWeightTexture.getTextureMatrix())), pG.setFloat("vTransmissionWeight", GG.transmissionWeight), GG.transmissionWeightTexture && (pG.setTexture("transmissionWeightSampler", GG.transmissionWeightTexture), pG.setMatrix("transmissionWeightMatrix", GG.transmissionWeightTexture.getTextureMatrix())), pG.setFloat("vTransmissionScatterAnisotropy", GG.transmissionScatterAnisotropy), pG.setFloat("vSubsurfaceScatterAnisotropy", GG.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, Vb.e)(pG, yG, this._scene), bG.useBones && bG.computeBonesUsingShaders && bG.skeleton) {
              const GG = bG.skeleton;
              if (GG.isUsingTextureForMatrices && pG.getUniformIndex("boneTextureInfo") > -1) {
                const ZG = GG.getTransformMatrixTexture(bG);
                pG.setTexture("boneSampler", ZG), pG.setFloat2("boneTextureInfo", GG._textureWidth, GG._textureHeight)
              } else pG.setMatrices("mBones", bG.skeleton.getTransformMatrices(bG));
              (this._enableVelocity || this._enableVelocityLinear) && pG.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[bG.uniqueId])
            }
            if ((0, xG.y)(bG, pG), bG.morphTargetManager && bG.morphTargetManager.isUsingTextureForTargets && bG.morphTargetManager._bind(pG), (this._enableVelocity || this._enableVelocityLinear) && (pG.setMatrix("previousWorld", this._previousTransformationMatrices[ZG.uniqueId].Op), pG.setMatrix("previousViewProjection", this._previousTransformationMatrices[ZG.uniqueId].viewProjection)), this._enableObjectId) {
              let GG = bG.uniqueId;
              if (this.objectIdProvider) GG = (0, Qb.g)(bG, this.objectIdProvider);
              else if (GG > 16777215) throw new Error(`Invalid geometry object ID ${GG} for mesh "${bG.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              pG.setFloat("objectId", GG)
            }
            if (this._enableMeshBlendTag) {
              const GG = this.meshBlendTagProvider ? (0, Qb.f)(bG, this.meshBlendTagProvider) : bG.meshBlendingTag;
              pG.setInt("meshBlendTag", GG)
            }
            UG && bG.hasThinInstances && pG.setMatrix("world", YG), bG._processRendering(ZG, GG, pG, yG.fillMode, kG, UG, ((GG, bG) => {
              GG || pG.setMatrix("world", bG)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[ZG.uniqueId].Op = YG.clone(), this._previousTransformationMatrices[ZG.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), bG.skeleton && this._copyBonesTransformationMatrices(bG.skeleton.getTransformMatrices(bG), this._previousBonesTransformationMatrices[ZG.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (bG, ZG, wG) => {
          if ((wG || 0 === ZG) && bG.aE)
            for (let SG = 0; SG < bG.aE.length; ++SG) {
              const ZG = bG.aE[SG],
                wG = ZG.vK(),
                LG = ZG.getRenderingMesh();
              if (!wG) continue;
              const yG = LG._getInstancesRenderList(ZG._id, !!ZG.getReplacementMesh()),
                kG = GG.getCaps().instancedArrays && (null !== yG.visibleInstances[ZG._id] || LG.hasThinInstances);
              if (!this.isReady(ZG, kG)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (bG, ZG, wG, SG) => {
          let LG;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.CK().bindAttachments(this._attachmentsFromPrePass)
          }
          if (SG.length) {
            for (GG.setColorWrite(!1), LG = 0; LG < SG.length; LG++) JG(SG.data[LG]);
            GG.setColorWrite(!0)
          }
          for (LG = 0; LG < bG.length; LG++) JG(bG.data[LG]);
          for (GG.setDepthWrite(!1), LG = 0; LG < ZG.length; LG++) JG(ZG.data[LG]);
          if (this.renderTransparentMeshes)
            for (LG = 0; LG < wG.length; LG++) JG(wG.data[LG]);
          GG.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const GG = this._scene.CK();
        return {
          width: Math.max(1, Math.floor(GG.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(GG.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(GG, bG) {
        for (let ZG = 0; ZG < GG.length; ZG++) bG[ZG] = GG[ZG];
        return bG
      }
    }
    qb.ForceGLSL = !1, qb.DEPTH_TEXTURE_TYPE = 0, qb.NORMAL_TEXTURE_TYPE = 1, qb.POSITION_TEXTURE_TYPE = 2, qb.VELOCITY_TEXTURE_TYPE = 3, qb.REFLECTIVITY_TEXTURE_TYPE = 4, qb.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, qb.VELOCITY_LINEAR_TEXTURE_TYPE = 6, qb.IRRADIANCE_TEXTURE_TYPE = 7, qb.OBJECT_ID_TEXTURE_TYPE = 8, qb.MESH_BLEND_TAG_TEXTURE_TYPE = 9, qb._SceneComponentInitialization = GG => {
      throw (0, Jb.i)("GeometryBufferRendererSceneComponent")
    };
    var nb = ZG(37484);
    const gb = {
      effect: null,
      subMesh: null
    };

    function eb(GG) {
      if ("number" === typeof GG) return 1;
      if (GG instanceof AG.m) return 2;
      if (GG instanceof AG.p || GG instanceof TG.c) return 3;
      if (GG instanceof AG.t || GG instanceof TG.d) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class Rb {
      populateVectorFromLinkedProperties(GG) {
        const bG = eb(GG);
        for (const ZG in this.linkedProperties) {
          const GG = this.linkedProperties[ZG],
            wG = GG.numComponents;
          if (bG < wG || GG.targetUniformComponentOffset > bG - wG) return void(1 == wG ? mG.c.Error(`Float property ${GG.name} has an offset that is too large.`) : mG.c.Error(`Vector${wG} property ${GG.name} won't fit in Vector${bG} or has an offset that is too large.`));
          "number" === typeof GG.value ? Rb._tmpArray[GG.targetUniformComponentOffset] = GG.value : GG.value.toArray(Rb._tmpArray, GG.targetUniformComponentOffset)
        }
        GG.hZG(Rb._tmpArray)
      }
      constructor(GG, bG) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = GG, this.numComponents = bG
      }
    }
    Rb._tmpArray = [0, 0, 0, 0];
    class Tb {
      constructor(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          LG = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = GG, this.targetUniformName = ZG, this.defaultValue = bG, this.value = bG, this.targetUniformComponentNum = wG, this.targetUniformComponentOffset = SG, this.requiredDefine = LG
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : eb(this.defaultValue)
      }
    }
    class Hb {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(GG, bG, ZG) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = GG, this.samplerPrefix = bG, this.textureDefine = ZG
      }
    }
    class tb extends((0, hb.d)((0, Kb.d)(qG.d))) {}
    class Db extends(function(GG) {
      return class extends GG {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(tb)) {}
    class Nb extends((0, HG.d)(Db)) {
      constructor(GG) {
        super(GG), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Ob extends((0, db.b)(DG.c)) {}
    let xb = (() => {
        var GG, bG, wG, SG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, vG, aG, cG, lG, MG, qG, nG, gG, eG, HG, DG, BG, Gb, bb, Zb, wb, Sb, Lb, yb, kb, Ub, Yb, Kb, hb, db, Jb, rb, zb, Eb, ob, Xb, Cb, Wb, mb, Ib, Fb, vb, ab, cb, lb, jb, Pb, Mb, Ab, sb, nb, eb, tb, Db, xb, Bb, GZ, bZ, ZZ, wZ, SZ, LZ, yZ, kZ, UZ, YZ, VZ, pZ, fZ, QZ, KZ, hZ, dZ, JZ, rZ, zZ, EZ, oZ, XZ, uZ, iZ, CZ, WZ, mZ, IZ;
        let FZ, vZ, aZ, cZ, lZ, jZ, PZ, MZ, AZ, sZ, qZ, nZ, gZ, eZ, RZ, TZ, HZ, tZ, DZ, NZ, OZ, xZ, BZ, Gw, bw, Zw, ww, Sw, Lw, yw, kw, Uw, Yw, Vw, pw, fw, Qw, Kw, hw, dw, Jw, rw, zw, Ew, ow, Xw, uw, iw, Cw, Ww, mw, Iw, Fw, vw, aw, lw, jw, Pw, Mw, Aw, sw, qw, nw, gw, ew, Rw, Tw, Hw, tw, Dw, Nw, Ow, xw, Bw, GS, bS, ZS, wS, SS, LS, yS, kS, US, YS, VS, pS, fS, QS, KS, hS, dS, JS, rS, zS, ES, oS, XS, uS, iS, CS, WS, mS, IS, FS, vS, aS = Ob,
          cS = [],
          lS = [],
          jS = [],
          PS = [],
          MS = [],
          AS = [],
          sS = [],
          qS = [],
          nS = [],
          gS = [],
          eS = [],
          RS = [],
          TS = [],
          HS = [],
          tS = [],
          DS = [],
          NS = [],
          OS = [],
          xS = [],
          BS = [],
          GL = [],
          bL = [],
          ZL = [],
          wL = [],
          SL = [],
          LL = [],
          yL = [],
          kL = [],
          UL = [],
          YL = [],
          VL = [],
          pL = [],
          fL = [],
          QL = [],
          KL = [],
          hL = [],
          dL = [],
          JL = [],
          rL = [],
          zL = [],
          EL = [],
          oL = [],
          XL = [],
          uL = [],
          iL = [],
          CL = [],
          WL = [],
          mL = [],
          IL = [],
          FL = [],
          vL = [],
          aL = [],
          cL = [],
          lL = [],
          jL = [],
          PL = [],
          ML = [],
          AL = [],
          sL = [],
          qL = [],
          nL = [],
          gL = [],
          eL = [],
          RL = [],
          TL = [],
          HL = [],
          tL = [],
          DL = [],
          NL = [],
          OL = [],
          xL = [],
          BL = [],
          Gy = [],
          by = [],
          Zy = [],
          wy = [],
          Sy = [],
          Ly = [],
          yy = [],
          ky = [],
          Uy = [],
          Yy = [],
          Vy = [],
          py = [],
          fy = [],
          Qy = [],
          Ky = [],
          hy = [],
          dy = [],
          Jy = [],
          ry = [],
          zy = [],
          Ey = [],
          oy = [],
          Xy = [],
          uy = [],
          iy = [],
          Cy = [],
          Wy = [],
          my = [],
          Iy = [],
          Fy = [],
          vy = [],
          ay = [],
          cy = [],
          ly = [],
          jy = [],
          Py = [],
          My = [],
          Ay = [],
          sy = [],
          qy = [],
          ny = [],
          gy = [],
          ey = [],
          Ry = [],
          Ty = [],
          Hy = [],
          ty = [],
          Dy = [],
          Ny = [],
          Oy = [],
          xy = [],
          By = [],
          Gk = [],
          bk = [],
          Zk = [],
          wk = [],
          Sk = [],
          Lk = [],
          yk = [],
          kk = [],
          Uk = [],
          Yk = [],
          Vk = [],
          pk = [],
          fk = [],
          Qk = [],
          Kk = [],
          hk = [],
          dk = [],
          Jk = [],
          rk = [],
          zk = [],
          Ek = [],
          Xk = [],
          uk = [],
          ik = [],
          Ck = [],
          Wk = [],
          mk = [],
          Ik = [],
          Fk = [],
          vk = [],
          ak = [],
          ck = [],
          lk = [],
          jk = [],
          Pk = [],
          Mk = [],
          Ak = [],
          sk = [],
          qk = [],
          nk = [],
          gk = [],
          ek = [],
          Rk = [],
          Tk = [],
          Hk = [],
          tk = [],
          Dk = [],
          Nk = [],
          Ok = [],
          xk = [],
          Bk = [],
          GU = [],
          bU = [],
          ZU = [],
          wU = [],
          SU = [],
          LU = [],
          yU = [],
          kU = [],
          UU = [],
          YU = [],
          VU = [],
          pU = [],
          fU = [],
          QU = [],
          KU = [],
          hU = [],
          dU = [],
          JU = [],
          rU = [],
          zU = [],
          EU = [],
          oU = [],
          XU = [],
          uU = [],
          iU = [],
          CU = [],
          WU = [],
          mU = [],
          IU = [],
          FU = [];
        return GG = class extends aS {
          get baseWeight() {
            return (0, CG.e)(this, bG, "f")
          }
          set baseWeight(GG) {
            (0, CG.h)(this, bG, GG, "f")
          }
          get baseWeightTexture() {
            return (0, CG.e)(this, wG, "f")
          }
          set baseWeightTexture(GG) {
            (0, CG.h)(this, wG, GG, "f")
          }
          get baseColor() {
            return (0, CG.e)(this, SG, "f")
          }
          set baseColor(GG) {
            (0, CG.h)(this, SG, GG, "f")
          }
          get baseColorTexture() {
            return (0, CG.e)(this, yG, "f")
          }
          set baseColorTexture(GG) {
            (0, CG.h)(this, yG, GG, "f")
          }
          get baseDiffuseRoughness() {
            return (0, CG.e)(this, kG, "f")
          }
          set baseDiffuseRoughness(GG) {
            (0, CG.h)(this, kG, GG, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, CG.e)(this, UG, "f")
          }
          set baseDiffuseRoughnessTexture(GG) {
            (0, CG.h)(this, UG, GG, "f")
          }
          get baseMetalness() {
            return (0, CG.e)(this, YG, "f")
          }
          set baseMetalness(GG) {
            (0, CG.h)(this, YG, GG, "f")
          }
          get baseMetalnessTexture() {
            return (0, CG.e)(this, VG, "f")
          }
          set baseMetalnessTexture(GG) {
            (0, CG.h)(this, VG, GG, "f")
          }
          get specularWeight() {
            return (0, CG.e)(this, pG, "f")
          }
          set specularWeight(GG) {
            (0, CG.h)(this, pG, GG, "f")
          }
          get specularWeightTexture() {
            return (0, CG.e)(this, fG, "f")
          }
          set specularWeightTexture(GG) {
            (0, CG.h)(this, fG, GG, "f")
          }
          get specularColor() {
            return (0, CG.e)(this, QG, "f")
          }
          set specularColor(GG) {
            (0, CG.h)(this, QG, GG, "f")
          }
          get specularColorTexture() {
            return (0, CG.e)(this, KG, "f")
          }
          set specularColorTexture(GG) {
            (0, CG.h)(this, KG, GG, "f")
          }
          get specularRoughness() {
            return (0, CG.e)(this, hG, "f")
          }
          set specularRoughness(GG) {
            (0, CG.h)(this, hG, GG, "f")
          }
          get specularRoughnessTexture() {
            return (0, CG.e)(this, dG, "f")
          }
          set specularRoughnessTexture(GG) {
            (0, CG.h)(this, dG, GG, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, CG.e)(this, JG, "f")
          }
          set specularRoughnessAnisotropy(GG) {
            (0, CG.h)(this, JG, GG, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, CG.e)(this, rG, "f")
          }
          set specularRoughnessAnisotropyTexture(GG) {
            (0, CG.h)(this, rG, GG, "f")
          }
          get specularIor() {
            return (0, CG.e)(this, zG, "f")
          }
          set specularIor(GG) {
            (0, CG.h)(this, zG, GG, "f")
          }
          get transmissionWeight() {
            return (0, CG.e)(this, EG, "f")
          }
          set transmissionWeight(GG) {
            (0, CG.h)(this, EG, GG, "f")
          }
          get transmissionWeightTexture() {
            return (0, CG.e)(this, oG, "f")
          }
          set transmissionWeightTexture(GG) {
            (0, CG.h)(this, oG, GG, "f")
          }
          get transmissionColor() {
            return (0, CG.e)(this, XG, "f")
          }
          set transmissionColor(GG) {
            (0, CG.h)(this, XG, GG, "f")
          }
          get transmissionColorTexture() {
            return (0, CG.e)(this, uG, "f")
          }
          set transmissionColorTexture(GG) {
            (0, CG.h)(this, uG, GG, "f")
          }
          get transmissionDepth() {
            return (0, CG.e)(this, iG, "f")
          }
          set transmissionDepth(GG) {
            (0, CG.h)(this, iG, GG, "f")
          }
          get transmissionDepthTexture() {
            return (0, CG.e)(this, vG, "f")
          }
          set transmissionDepthTexture(GG) {
            (0, CG.h)(this, vG, GG, "f")
          }
          get transmissionScatter() {
            return (0, CG.e)(this, aG, "f")
          }
          set transmissionScatter(GG) {
            (0, CG.h)(this, aG, GG, "f")
          }
          get transmissionScatterTexture() {
            return (0, CG.e)(this, cG, "f")
          }
          set transmissionScatterTexture(GG) {
            (0, CG.h)(this, cG, GG, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, CG.e)(this, lG, "f")
          }
          set transmissionScatterAnisotropy(GG) {
            (0, CG.h)(this, lG, GG, "f")
          }
          get transmissionDispersionScale() {
            return (0, CG.e)(this, MG, "f")
          }
          set transmissionDispersionScale(GG) {
            (0, CG.h)(this, MG, GG, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, CG.e)(this, qG, "f")
          }
          set transmissionDispersionScaleTexture(GG) {
            (0, CG.h)(this, qG, GG, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, CG.e)(this, nG, "f")
          }
          set transmissionDispersionAbbeNumber(GG) {
            (0, CG.h)(this, nG, GG, "f")
          }
          get subsurfaceWeight() {
            return (0, CG.e)(this, gG, "f")
          }
          set subsurfaceWeight(GG) {
            (0, CG.h)(this, gG, GG, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, CG.e)(this, eG, "f")
          }
          set subsurfaceWeightTexture(GG) {
            (0, CG.h)(this, eG, GG, "f")
          }
          get subsurfaceColor() {
            return (0, CG.e)(this, HG, "f")
          }
          set subsurfaceColor(GG) {
            (0, CG.h)(this, HG, GG, "f")
          }
          get subsurfaceColorTexture() {
            return (0, CG.e)(this, DG, "f")
          }
          set subsurfaceColorTexture(GG) {
            (0, CG.h)(this, DG, GG, "f")
          }
          get subsurfaceRadius() {
            return (0, CG.e)(this, BG, "f")
          }
          set subsurfaceRadius(GG) {
            (0, CG.h)(this, BG, GG, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, CG.e)(this, Gb, "f")
          }
          set subsurfaceRadiusScale(GG) {
            (0, CG.h)(this, Gb, GG, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, CG.e)(this, bb, "f")
          }
          set subsurfaceRadiusScaleTexture(GG) {
            (0, CG.h)(this, bb, GG, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, CG.e)(this, Zb, "f")
          }
          set subsurfaceScatterAnisotropy(GG) {
            (0, CG.h)(this, Zb, GG, "f")
          }
          get coatWeight() {
            return (0, CG.e)(this, wb, "f")
          }
          set coatWeight(GG) {
            (0, CG.h)(this, wb, GG, "f")
          }
          get coatWeightTexture() {
            return (0, CG.e)(this, Sb, "f")
          }
          set coatWeightTexture(GG) {
            (0, CG.h)(this, Sb, GG, "f")
          }
          get coatColor() {
            return (0, CG.e)(this, Lb, "f")
          }
          set coatColor(GG) {
            (0, CG.h)(this, Lb, GG, "f")
          }
          get coatColorTexture() {
            return (0, CG.e)(this, yb, "f")
          }
          set coatColorTexture(GG) {
            (0, CG.h)(this, yb, GG, "f")
          }
          get coatRoughness() {
            return (0, CG.e)(this, kb, "f")
          }
          set coatRoughness(GG) {
            (0, CG.h)(this, kb, GG, "f")
          }
          get coatRoughnessTexture() {
            return (0, CG.e)(this, Ub, "f")
          }
          set coatRoughnessTexture(GG) {
            (0, CG.h)(this, Ub, GG, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, CG.e)(this, Yb, "f")
          }
          set coatRoughnessAnisotropy(GG) {
            (0, CG.h)(this, Yb, GG, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, CG.e)(this, Kb, "f")
          }
          set coatRoughnessAnisotropyTexture(GG) {
            (0, CG.h)(this, Kb, GG, "f")
          }
          get coatIor() {
            return (0, CG.e)(this, hb, "f")
          }
          set coatIor(GG) {
            (0, CG.h)(this, hb, GG, "f")
          }
          get coatDarkening() {
            return (0, CG.e)(this, db, "f")
          }
          set coatDarkening(GG) {
            (0, CG.h)(this, db, GG, "f")
          }
          get coatDarkeningTexture() {
            return (0, CG.e)(this, Jb, "f")
          }
          set coatDarkeningTexture(GG) {
            (0, CG.h)(this, Jb, GG, "f")
          }
          get fuzzWeight() {
            return (0, CG.e)(this, rb, "f")
          }
          set fuzzWeight(GG) {
            (0, CG.h)(this, rb, GG, "f")
          }
          get fuzzWeightTexture() {
            return (0, CG.e)(this, zb, "f")
          }
          set fuzzWeightTexture(GG) {
            (0, CG.h)(this, zb, GG, "f")
          }
          get fuzzColor() {
            return (0, CG.e)(this, Eb, "f")
          }
          set fuzzColor(GG) {
            (0, CG.h)(this, Eb, GG, "f")
          }
          get fuzzColorTexture() {
            return (0, CG.e)(this, ob, "f")
          }
          set fuzzColorTexture(GG) {
            (0, CG.h)(this, ob, GG, "f")
          }
          get fuzzRoughness() {
            return (0, CG.e)(this, Xb, "f")
          }
          set fuzzRoughness(GG) {
            (0, CG.h)(this, Xb, GG, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, CG.e)(this, Cb, "f")
          }
          set fuzzRoughnessTexture(GG) {
            (0, CG.h)(this, Cb, GG, "f")
          }
          get geometryThinWalled() {
            return (0, CG.e)(this, Wb, "f")
          }
          set geometryThinWalled(GG) {
            (0, CG.h)(this, Wb, GG, "f")
          }
          get geometryNormalTexture() {
            return (0, CG.e)(this, mb, "f")
          }
          set geometryNormalTexture(GG) {
            (0, CG.h)(this, mb, GG, "f")
          }
          get geometryTangent() {
            return (0, CG.e)(this, Ib, "f")
          }
          set geometryTangent(GG) {
            (0, CG.h)(this, Ib, GG, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(GG) {
            this.geometryTangent = new AG.m(Math.cos(GG), Math.sin(GG))
          }
          get geometryTangentTexture() {
            return (0, CG.e)(this, Fb, "f")
          }
          set geometryTangentTexture(GG) {
            (0, CG.h)(this, Fb, GG, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, CG.e)(this, vb, "f")
          }
          set geometryCoatNormalTexture(GG) {
            (0, CG.h)(this, vb, GG, "f")
          }
          get geometryCoatTangent() {
            return (0, CG.e)(this, ab, "f")
          }
          set geometryCoatTangent(GG) {
            (0, CG.h)(this, ab, GG, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(GG) {
            this.geometryCoatTangent = new AG.m(Math.cos(GG), Math.sin(GG))
          }
          get geometryCoatTangentTexture() {
            return (0, CG.e)(this, cb, "f")
          }
          set geometryCoatTangentTexture(GG) {
            (0, CG.h)(this, cb, GG, "f")
          }
          get geometryOpacity() {
            return (0, CG.e)(this, lb, "f")
          }
          set geometryOpacity(GG) {
            (0, CG.h)(this, lb, GG, "f")
          }
          get geometryOpacityTexture() {
            return (0, CG.e)(this, jb, "f")
          }
          set geometryOpacityTexture(GG) {
            (0, CG.h)(this, jb, GG, "f")
          }
          get geometryThickness() {
            return (0, CG.e)(this, Pb, "f")
          }
          set geometryThickness(GG) {
            (0, CG.h)(this, Pb, GG, "f")
          }
          get geometryThicknessTexture() {
            return (0, CG.e)(this, Mb, "f")
          }
          set geometryThicknessTexture(GG) {
            (0, CG.h)(this, Mb, GG, "f")
          }
          get emissionLuminance() {
            return (0, CG.e)(this, Ab, "f")
          }
          set emissionLuminance(GG) {
            (0, CG.h)(this, Ab, GG, "f")
          }
          get emissionColor() {
            return (0, CG.e)(this, sb, "f")
          }
          set emissionColor(GG) {
            (0, CG.h)(this, sb, GG, "f")
          }
          get emissionColorTexture() {
            return (0, CG.e)(this, nb, "f")
          }
          set emissionColorTexture(GG) {
            (0, CG.h)(this, nb, GG, "f")
          }
          get thinFilmWeight() {
            return (0, CG.e)(this, eb, "f")
          }
          set thinFilmWeight(GG) {
            (0, CG.h)(this, eb, GG, "f")
          }
          get thinFilmWeightTexture() {
            return (0, CG.e)(this, tb, "f")
          }
          set thinFilmWeightTexture(GG) {
            (0, CG.h)(this, tb, GG, "f")
          }
          get thinFilmThickness() {
            return (0, CG.e)(this, Db, "f")
          }
          set thinFilmThickness(GG) {
            (0, CG.h)(this, Db, GG, "f")
          }
          get thinFilmThicknessMin() {
            return (0, CG.e)(this, xb, "f")
          }
          set thinFilmThicknessMin(GG) {
            (0, CG.h)(this, xb, GG, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, CG.e)(this, Bb, "f")
          }
          set thinFilmThicknessTexture(GG) {
            (0, CG.h)(this, Bb, GG, "f")
          }
          get thinFilmIor() {
            return (0, CG.e)(this, GZ, "f")
          }
          set thinFilmIor(GG) {
            (0, CG.h)(this, GZ, GG, "f")
          }
          get ambientOcclusionTexture() {
            return (0, CG.e)(this, bZ, "f")
          }
          set ambientOcclusionTexture(GG) {
            (0, CG.h)(this, bZ, GG, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(GG) {
            this._sssQuality !== GG && (this._sssQuality = GG, this.wZG(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(GG) {
            this._sssIrradianceTexture !== GG && (this._sssIrradianceTexture = GG, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(GG) {
            this._sssDepthTexture !== GG && (this._sssDepthTexture = GG, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, CG.e)(this, ZZ, "f")
          }
          set directIntensity(GG) {
            (0, CG.h)(this, ZZ, GG, "f")
          }
          get environmentIntensity() {
            return (0, CG.e)(this, wZ, "f")
          }
          set environmentIntensity(GG) {
            (0, CG.h)(this, wZ, GG, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, CG.e)(this, SZ, "f")
          }
          set useSpecularWeightFromTextureAlpha(GG) {
            (0, CG.h)(this, SZ, GG, "f")
          }
          get forceAlphaTest() {
            return (0, CG.e)(this, LZ, "f")
          }
          set forceAlphaTest(GG) {
            (0, CG.h)(this, LZ, GG, "f")
          }
          get alphaCutOff() {
            return (0, CG.e)(this, yZ, "f")
          }
          set alphaCutOff(GG) {
            (0, CG.h)(this, yZ, GG, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, CG.e)(this, kZ, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(GG) {
            (0, CG.h)(this, kZ, GG, "f")
          }
          get useAmbientInGrayScale() {
            return (0, CG.e)(this, UZ, "f")
          }
          set useAmbientInGrayScale(GG) {
            (0, CG.h)(this, UZ, GG, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(TG.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === LG.e.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(GG) {
            GG !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = GG ? LG.e.LIGHTFALLOFF_PHYSICAL : LG.e.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === LG.e.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(GG) {
            GG !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = GG ? LG.e.LIGHTFALLOFF_GLTF : LG.e.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, CG.e)(this, YZ, "f")
          }
          set useObjectSpaceNormalMap(GG) {
            (0, CG.h)(this, YZ, GG, "f")
          }
          get useParallax() {
            return (0, CG.e)(this, VZ, "f")
          }
          set useParallax(GG) {
            (0, CG.h)(this, VZ, GG, "f")
          }
          get useParallaxOcclusion() {
            return (0, CG.e)(this, pZ, "f")
          }
          set useParallaxOcclusion(GG) {
            (0, CG.h)(this, pZ, GG, "f")
          }
          get parallaxScaleBias() {
            return (0, CG.e)(this, fZ, "f")
          }
          set parallaxScaleBias(GG) {
            (0, CG.h)(this, fZ, GG, "f")
          }
          get disableLighting() {
            return (0, CG.e)(this, QZ, "f")
          }
          set disableLighting(GG) {
            (0, CG.h)(this, QZ, GG, "f")
          }
          get forceIrradianceInFragment() {
            return (0, CG.e)(this, KZ, "f")
          }
          set forceIrradianceInFragment(GG) {
            (0, CG.h)(this, KZ, GG, "f")
          }
          get maxSimultaneousLights() {
            return (0, CG.e)(this, hZ, "f")
          }
          set maxSimultaneousLights(GG) {
            (0, CG.h)(this, hZ, GG, "f")
          }
          get invertNormalMapX() {
            return (0, CG.e)(this, dZ, "f")
          }
          set invertNormalMapX(GG) {
            (0, CG.h)(this, dZ, GG, "f")
          }
          get invertNormalMapY() {
            return (0, CG.e)(this, JZ, "f")
          }
          set invertNormalMapY(GG) {
            (0, CG.h)(this, JZ, GG, "f")
          }
          get twoSidedLighting() {
            return (0, CG.e)(this, rZ, "f")
          }
          set twoSidedLighting(GG) {
            (0, CG.h)(this, rZ, GG, "f")
          }
          get useAlphaFresnel() {
            return (0, CG.e)(this, zZ, "f")
          }
          set useAlphaFresnel(GG) {
            (0, CG.h)(this, zZ, GG, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, CG.e)(this, EZ, "f")
          }
          set useLinearAlphaFresnel(GG) {
            (0, CG.h)(this, EZ, GG, "f")
          }
          get environmentBRDFTexture() {
            return (0, CG.e)(this, oZ, "f")
          }
          set environmentBRDFTexture(GG) {
            (0, CG.h)(this, oZ, GG, "f")
          }
          get forceNormalForward() {
            return (0, CG.e)(this, XZ, "f")
          }
          set forceNormalForward(GG) {
            (0, CG.h)(this, XZ, GG, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, CG.e)(this, uZ, "f")
          }
          set enableSpecularAntiAliasing(GG) {
            (0, CG.h)(this, uZ, GG, "f")
          }
          get useHorizonOcclusion() {
            return (0, CG.e)(this, iZ, "f")
          }
          set useHorizonOcclusion(GG) {
            (0, CG.h)(this, iZ, GG, "f")
          }
          get useRadianceOcclusion() {
            return (0, CG.e)(this, CZ, "f")
          }
          set useRadianceOcclusion(GG) {
            (0, CG.h)(this, CZ, GG, "f")
          }
          get unlit() {
            return (0, CG.e)(this, WZ, "f")
          }
          set unlit(GG) {
            (0, CG.h)(this, WZ, GG, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, CG.e)(this, mZ, "f")
          }
          set applyDecalMapAfterDetailMap(GG) {
            (0, CG.h)(this, mZ, GG, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(GG) {
            this._backgroundRefractionTexture = GG, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(GG) {
            this._refractionHighQualityBlur !== GG && (this._refractionHighQualityBlur = GG, this.wZG(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(GG) {
            this._realTimeFiltering = GG, this.wZG(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(GG) {
            this._realTimeFilteringQuality = GG, this.wZG(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(GG) {
            this._fuzzSampleNumber = GG, this.wZG(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, CG.e)(this, IZ, "f")
          }
          set debugMode(GG) {
            (0, CG.h)(this, IZ, GG, "f")
          }
          constructor(ZG, WG) {
            super(ZG, WG, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || GG.ForceGLSL), bG.set(this, ((0, CG.n)(this, cS), (0, CG.n)(this, lS, void 0))), this._baseWeight = ((0, CG.n)(this, jS), new Tb("base_weight", 1, "vBaseWeight", 1)), wG.set(this, (0, CG.n)(this, PS, void 0)), this._baseWeightTexture = ((0, CG.n)(this, MS), new Hb("base_weight", "baseWeight", "BASE_WEIGHT")), SG.set(this, (0, CG.n)(this, AS, void 0)), this._baseColor = ((0, CG.n)(this, sS), new Tb("base_color", TG.c.White(), "vBaseColor", 4)), yG.set(this, (0, CG.n)(this, qS, void 0)), this._baseColorTexture = ((0, CG.n)(this, nS), new Hb("base_color", "baseColor", "BASE_COLOR")), kG.set(this, (0, CG.n)(this, gS, void 0)), this._baseDiffuseRoughness = ((0, CG.n)(this, eS), new Tb("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), UG.set(this, (0, CG.n)(this, RS, void 0)), this._baseDiffuseRoughnessTexture = ((0, CG.n)(this, TS), new Hb("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), YG.set(this, (0, CG.n)(this, HS, void 0)), this._baseMetalness = ((0, CG.n)(this, tS), new Tb("base_metalness", 0, "vReflectanceInfo", 4, 0)), VG.set(this, (0, CG.n)(this, DS, void 0)), this._baseMetalnessTexture = ((0, CG.n)(this, NS), new Hb("base_metalness", "baseMetalness", "BASE_METALNESS")), pG.set(this, (0, CG.n)(this, OS, void 0)), this._specularWeight = ((0, CG.n)(this, xS), new Tb("specular_weight", 1, "vReflectanceInfo", 4, 3)), fG.set(this, (0, CG.n)(this, BS, void 0)), this._specularWeightTexture = ((0, CG.n)(this, GL), new Hb("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), QG.set(this, (0, CG.n)(this, bL, void 0)), this._specularColor = ((0, CG.n)(this, ZL), new Tb("specular_color", TG.c.White(), "vSpecularColor", 4)), KG.set(this, (0, CG.n)(this, wL, void 0)), this._specularColorTexture = ((0, CG.n)(this, SL), new Hb("specular_color", "specularColor", "SPECULAR_COLOR")), hG.set(this, (0, CG.n)(this, LL, void 0)), this._specularRoughness = ((0, CG.n)(this, yL), new Tb("specular_roughness", .3, "vReflectanceInfo", 4, 1)), dG.set(this, (0, CG.n)(this, kL, void 0)), this._specularRoughnessTexture = ((0, CG.n)(this, UL), new Hb("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), JG.set(this, (0, CG.n)(this, YL, void 0)), this._specularRoughnessAnisotropy = ((0, CG.n)(this, VL), new Tb("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), rG.set(this, (0, CG.n)(this, pL, void 0)), this._specularRoughnessAnisotropyTexture = ((0, CG.n)(this, fL), new Hb("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), zG.set(this, (0, CG.n)(this, QL, void 0)), this._specularIor = ((0, CG.n)(this, KL), new Tb("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), EG.set(this, (0, CG.n)(this, hL, void 0)), this._transmissionWeight = ((0, CG.n)(this, dL), new Tb("transmission_weight", 0, "vTransmissionWeight", 1)), oG.set(this, (0, CG.n)(this, JL, void 0)), this._transmissionWeightTexture = ((0, CG.n)(this, rL), new Hb("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), XG.set(this, (0, CG.n)(this, zL, void 0)), this._transmissionColor = ((0, CG.n)(this, EL), new Tb("transmission_color", TG.c.White(), "vTransmissionColor", 3, 0)), uG.set(this, (0, CG.n)(this, oL, void 0)), this._transmissionColorTexture = ((0, CG.n)(this, XL), new Hb("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), iG.set(this, (0, CG.n)(this, uL, void 0)), this._transmissionDepth = ((0, CG.n)(this, iL), new Tb("transmission_depth", 0, "vTransmissionDepth", 1, 0)), vG.set(this, (0, CG.n)(this, CL, void 0)), this._transmissionDepthTexture = ((0, CG.n)(this, WL), new Hb("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), aG.set(this, (0, CG.n)(this, mL, void 0)), this._transmissionScatter = ((0, CG.n)(this, IL), new Tb("transmission_scatter", TG.c.Black(), "vTransmissionScatter", 3, 0)), cG.set(this, (0, CG.n)(this, FL, void 0)), this._transmissionScatterTexture = ((0, CG.n)(this, vL), new Hb("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), lG.set(this, (0, CG.n)(this, aL, void 0)), this._transmissionScatterAnisotropy = ((0, CG.n)(this, cL), new Tb("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), MG.set(this, (0, CG.n)(this, lL, void 0)), this._transmissionDispersionScale = ((0, CG.n)(this, jL), new Tb("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), qG.set(this, (0, CG.n)(this, PL, void 0)), this._transmissionDispersionScaleTexture = ((0, CG.n)(this, ML), new Hb("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), nG.set(this, (0, CG.n)(this, AL, void 0)), this._transmissionDispersionAbbeNumber = ((0, CG.n)(this, sL), new Tb("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), gG.set(this, (0, CG.n)(this, qL, void 0)), this._subsurfaceWeight = ((0, CG.n)(this, nL), new Tb("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), eG.set(this, (0, CG.n)(this, gL, void 0)), this._subsurfaceWeightTexture = ((0, CG.n)(this, eL), new Hb("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), HG.set(this, (0, CG.n)(this, RL, void 0)), this._subsurfaceColor = ((0, CG.n)(this, TL), new Tb("subsurface_color", new TG.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), DG.set(this, (0, CG.n)(this, HL, void 0)), this._subsurfaceColorTexture = ((0, CG.n)(this, tL), new Hb("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), BG.set(this, (0, CG.n)(this, DL, void 0)), this._subsurfaceRadius = ((0, CG.n)(this, NL), new Tb("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Gb.set(this, (0, CG.n)(this, OL, void 0)), this._subsurfaceRadiusScale = ((0, CG.n)(this, xL), new Tb("subsurface_radius_scale", new TG.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), bb.set(this, (0, CG.n)(this, BL, void 0)), this._subsurfaceRadiusScaleTexture = ((0, CG.n)(this, Gy), new Hb("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Zb.set(this, (0, CG.n)(this, by, void 0)), this._subsurfaceScatterAnisotropy = ((0, CG.n)(this, Zy), new Tb("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), wb.set(this, (0, CG.n)(this, wy, void 0)), this._coatWeight = ((0, CG.n)(this, Sy), new Tb("coat_weight", 0, "vCoatWeight", 1, 0)), Sb.set(this, (0, CG.n)(this, Ly, void 0)), this._coatWeightTexture = ((0, CG.n)(this, yy), new Hb("coat_weight", "coatWeight", "COAT_WEIGHT")), Lb.set(this, (0, CG.n)(this, ky, void 0)), this._coatColor = ((0, CG.n)(this, Uy), new Tb("coat_color", TG.c.White(), "vCoatColor", 3, 0)), yb.set(this, (0, CG.n)(this, Yy, void 0)), this._coatColorTexture = ((0, CG.n)(this, Vy), new Hb("coat_color", "coatColor", "COAT_COLOR")), kb.set(this, (0, CG.n)(this, py, void 0)), this._coatRoughness = ((0, CG.n)(this, fy), new Tb("coat_roughness", 0, "vCoatRoughness", 1, 0)), Ub.set(this, (0, CG.n)(this, Qy, void 0)), this._coatRoughnessTexture = ((0, CG.n)(this, Ky), new Hb("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Yb.set(this, (0, CG.n)(this, hy, void 0)), this._coatRoughnessAnisotropy = ((0, CG.n)(this, dy), new Tb("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Kb.set(this, (0, CG.n)(this, Jy, void 0)), this._coatRoughnessAnisotropyTexture = ((0, CG.n)(this, ry), new Hb("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), hb.set(this, (0, CG.n)(this, zy, void 0)), this._coatIor = ((0, CG.n)(this, Ey), new Tb("coat_ior", 1.5, "vCoatIor", 1, 0)), db.set(this, (0, CG.n)(this, oy, void 0)), this._coatDarkening = ((0, CG.n)(this, Xy), new Tb("coat_darkening", 1, "vCoatDarkening", 1, 0)), Jb.set(this, (0, CG.n)(this, uy, void 0)), this._coatDarkeningTexture = ((0, CG.n)(this, iy), new Hb("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, rb.set(this, (0, CG.n)(this, Cy, void 0)), this._fuzzWeight = ((0, CG.n)(this, Wy), new Tb("fuzz_weight", 0, "vFuzzWeight", 1, 0)), zb.set(this, (0, CG.n)(this, my, void 0)), this._fuzzWeightTexture = ((0, CG.n)(this, Iy), new Hb("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Eb.set(this, (0, CG.n)(this, Fy, void 0)), this._fuzzColor = ((0, CG.n)(this, vy), new Tb("fuzz_color", TG.c.White(), "vFuzzColor", 3, 0)), ob.set(this, (0, CG.n)(this, ay, void 0)), this._fuzzColorTexture = ((0, CG.n)(this, cy), new Hb("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Xb.set(this, (0, CG.n)(this, ly, void 0)), this._fuzzRoughness = ((0, CG.n)(this, jy), new Tb("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Cb.set(this, (0, CG.n)(this, Py, void 0)), this._fuzzRoughnessTexture = ((0, CG.n)(this, My), new Hb("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Wb.set(this, (0, CG.n)(this, Ay, void 0)), this._geometryThinWalled = ((0, CG.n)(this, sy), new Tb("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), mb.set(this, (0, CG.n)(this, qy, void 0)), this._geometryNormalTexture = ((0, CG.n)(this, ny), new Hb("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Ib.set(this, (0, CG.n)(this, gy, void 0)), this._geometryTangent = ((0, CG.n)(this, ey), new Tb("geometry_tangent", new AG.m(1, 0), "vSpecularAnisotropy", 3, 0)), Fb.set(this, (0, CG.n)(this, Ry, void 0)), this._geometryTangentTexture = ((0, CG.n)(this, Ty), new Hb("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), vb.set(this, (0, CG.n)(this, Hy, void 0)), this._geometryCoatNormalTexture = ((0, CG.n)(this, ty), new Hb("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), ab.set(this, (0, CG.n)(this, Dy, void 0)), this._geometryCoatTangent = ((0, CG.n)(this, Ny), new Tb("geometry_coat_tangent", new AG.m(1, 0), "vGeometryCoatTangent", 2, 0)), cb.set(this, (0, CG.n)(this, Oy, void 0)), this._geometryCoatTangentTexture = ((0, CG.n)(this, xy), new Hb("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), lb.set(this, (0, CG.n)(this, By, void 0)), this._geometryOpacity = ((0, CG.n)(this, Gk), new Tb("geometry_opacity", 1, "vBaseColor", 4, 3)), jb.set(this, (0, CG.n)(this, bk, void 0)), this._geometryOpacityTexture = ((0, CG.n)(this, Zk), new Hb("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Pb.set(this, (0, CG.n)(this, wk, void 0)), this._geometryThickness = ((0, CG.n)(this, Sk), new Tb("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Mb.set(this, (0, CG.n)(this, Lk, void 0)), this._geometryThicknessTexture = ((0, CG.n)(this, yk), new Hb("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Ab.set(this, (0, CG.n)(this, kk, void 0)), this._emissionLuminance = ((0, CG.n)(this, Uk), new Tb("emission_luminance", 1, "vLightingIntensity", 4, 1)), sb.set(this, (0, CG.n)(this, Yk, void 0)), this._emissionColor = ((0, CG.n)(this, Vk), new Tb("emission_color", TG.c.Black(), "vEmissionColor", 3)), nb.set(this, (0, CG.n)(this, pk, void 0)), this._emissionColorTexture = ((0, CG.n)(this, fk), new Hb("emission_color", "emissionColor", "EMISSION_COLOR")), eb.set(this, (0, CG.n)(this, Qk, void 0)), this._thinFilmWeight = ((0, CG.n)(this, Kk), new Tb("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), tb.set(this, (0, CG.n)(this, hk, void 0)), this._thinFilmWeightTexture = ((0, CG.n)(this, dk), new Hb("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), Db.set(this, (0, CG.n)(this, Jk, void 0)), this._thinFilmThickness = ((0, CG.n)(this, rk), new Tb("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), xb.set(this, (0, CG.n)(this, zk, void 0)), this._thinFilmThicknessMin = ((0, CG.n)(this, Ek), new Tb("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Bb.set(this, (0, CG.n)(this, Xk, void 0)), this._thinFilmThicknessTexture = ((0, CG.n)(this, uk), new Hb("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), GZ.set(this, (0, CG.n)(this, ik, void 0)), this._thinFilmIor = ((0, CG.n)(this, Ck), new Tb("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), bZ.set(this, (0, CG.n)(this, Wk, void 0)), this._ambientOcclusionTexture = ((0, CG.n)(this, mk), new Hb("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = GG.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, ZZ.set(this, (0, CG.n)(this, Ik, 1)), wZ.set(this, ((0, CG.n)(this, Fk), (0, CG.n)(this, vk, 1))), SZ.set(this, ((0, CG.n)(this, ak), (0, CG.n)(this, ck, !1))), LZ.set(this, ((0, CG.n)(this, lk), (0, CG.n)(this, jk, !1))), yZ.set(this, ((0, CG.n)(this, Pk), (0, CG.n)(this, Mk, .4))), kZ.set(this, ((0, CG.n)(this, Ak), (0, CG.n)(this, sk, !1))), UZ.set(this, ((0, CG.n)(this, qk), (0, CG.n)(this, nk, !1))), YZ.set(this, ((0, CG.n)(this, gk), (0, CG.n)(this, ek, !1))), VZ.set(this, ((0, CG.n)(this, Rk), (0, CG.n)(this, Tk, !1))), pZ.set(this, ((0, CG.n)(this, Hk), (0, CG.n)(this, tk, !1))), fZ.set(this, ((0, CG.n)(this, Dk), (0, CG.n)(this, Nk, .05))), QZ.set(this, ((0, CG.n)(this, Ok), (0, CG.n)(this, xk, !1))), KZ.set(this, ((0, CG.n)(this, Bk), (0, CG.n)(this, GU, !1))), hZ.set(this, ((0, CG.n)(this, bU), (0, CG.n)(this, ZU, 4))), dZ.set(this, ((0, CG.n)(this, wU), (0, CG.n)(this, SU, !1))), JZ.set(this, ((0, CG.n)(this, LU), (0, CG.n)(this, yU, !1))), rZ.set(this, ((0, CG.n)(this, kU), (0, CG.n)(this, UU, !1))), zZ.set(this, ((0, CG.n)(this, YU), (0, CG.n)(this, VU, !1))), EZ.set(this, ((0, CG.n)(this, pU), (0, CG.n)(this, fU, !1))), oZ.set(this, ((0, CG.n)(this, QU), (0, CG.n)(this, KU, null))), XZ.set(this, ((0, CG.n)(this, hU), (0, CG.n)(this, dU, !1))), uZ.set(this, ((0, CG.n)(this, JU), (0, CG.n)(this, rU, !1))), iZ.set(this, ((0, CG.n)(this, zU), (0, CG.n)(this, EU, !0))), CZ.set(this, ((0, CG.n)(this, oU), (0, CG.n)(this, XU, !0))), WZ.set(this, ((0, CG.n)(this, uU), (0, CG.n)(this, iU, !1))), mZ.set(this, ((0, CG.n)(this, CU), (0, CG.n)(this, WU, !1))), this._lightingInfos = ((0, CG.n)(this, mU), new AG.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = LG.e.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new IG.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, IZ.set(this, (0, CG.n)(this, IU, 0)), this.debugLimit = ((0, CG.n)(this, FU), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = LG.e.MATERIAL_OPAQUE, this.Dv() && !this.Dv()?.CK().isWebGPU && this.Dv().CK().Zh < 2 && mG.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), GG._noiseTextures[this.Dv().uniqueId] || (GG._noiseTextures[this.Dv().uniqueId] = new FG.d(ib.f.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.Dv(), !1, !0, 1), this.Dv().Gl.addOnce((() => {
              GG._noiseTextures[this.Dv().uniqueId]?.dispose(), delete GG._noiseTextures[this.Dv().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), NG.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), NG.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = PG(this.Dv()), this._environmentFuzzBRDFTexture = jG(this.Dv()), this.prePassConfiguration = new RG.d, this._propertyList = {};
            for (const GG of Object.getOwnPropertyNames(this)) {
              const bG = this[GG];
              bG instanceof Tb && (this._propertyList[GG] = bG)
            }
            Object.keys(this._propertyList).forEach((GG => {
              const bG = this._propertyList[GG];
              let ZG = this._uniformsList[bG.targetUniformName];
              ZG ? ZG.numComponents !== bG.targetUniformComponentNum ? mG.c.Error(`Uniform ${bG.targetUniformName} already exists of size ${ZG.numComponents}, but trying to set it to ${bG.targetUniformComponentNum}.`) : ZG.requiredDefine !== bG.requiredDefine && (ZG.requiredDefine = void 0) : (ZG = new Rb(bG.targetUniformName, bG.targetUniformComponentNum), ZG.requiredDefine = bG.requiredDefine, this._uniformsList[bG.targetUniformName] = ZG), "" === ZG.firstLinkedKey && (ZG.firstLinkedKey = bG.name), ZG.linkedProperties[bG.name] = bG
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const GG of Object.getOwnPropertyNames(this)) {
              const bG = this[GG];
              bG instanceof Hb && (this._samplersList[GG] = bG)
            }
            for (const GG in this._samplersList) {
              const bG = this._samplersList[GG].textureDefine;
              this._samplerDefines[bG] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[bG + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[bG + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(NG.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(NG.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(GG) {
            this._transparencyMode !== GG && (this._transparencyMode = GG, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== LG.e.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(GG) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(GG)
          }
          clone(bG) {
            let ZG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const SG = ub.b.Clone((() => new GG(bG, this.Dv())), this, {
              cloneTexturesOnlyOnce: ZG
            });
            return SG.id = bG, SG.name = bG, this.stencil.copyTo(SG.stencil), this._clonePlugins(SG, wG), SG
          }
          serialize() {
            const GG = super.serialize();
            return GG.customType = "BABYLON.OpenPBRMaterial", GG
          }
          static Parse(bG, ZG, wG) {
            const SG = ub.b.Parse((() => new GG(bG.name, ZG)), bG, ZG, wG);
            return bG.stencil && SG.stencil.parse(bG.stencil, ZG, wG), LG.e._ParsePlugins(bG, SG, ZG, wG), SG
          }
          forceCompilation(GG, bG, ZG) {
            const wG = {
              clipPlane: !1,
              useInstances: !1,
              ...ZG
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const ZG = new Nb({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                SG = this._prepareEffect(GG, GG, ZG, void 0, void 0, wG.useInstances, wG.clipPlane);
              this._onEffectCreatedObservable && (gb.effect = SG, gb.subMesh = null, this._onEffectCreatedObservable.notifyObservers(gb)), SG.isReady() ? bG && bG(this) : SG.onCompileObservable.add((() => {
                bG && bG(this)
              }))
            })()
          }
          isReadyForSubMesh(bG, ZG, wG) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const SG = ZG._drawWrapper;
            if (SG.effect && this.isFrozen && SG._wasPreviouslyReady && SG._wasPreviouslyUsingInstances === wG) return !0;
            ZG.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZG.materialDefines = new Nb({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const LG = ZG.materialDefines;
            if (this._isReadyForSubMesh(ZG)) return !0;
            const yG = this.Dv(),
              kG = yG.CK();
            if (LG._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, yG.texturesEnabled)) {
              for (const GG in this._samplersList) {
                const bG = this._samplersList[GG];
                if (bG.value && !bG.value.isReadyOrNotBlocking()) return !1
              }
              const bG = this._getRadianceTexture();
              if (bG && NG.d.ReflectionTextureEnabled) {
                if (!bG.isReadyOrNotBlocking()) return !1;
                if (bG.irradianceTexture) {
                  if (!bG.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!bG.sphericalPolynomial && bG.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && NG.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && NG.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && NG.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (GG._noiseTextures[yG.uniqueId] && !GG._noiseTextures[yG.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = LG, this._eventInfo.subMesh = ZG, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (LG._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (LG.AREALIGHTUSED)
              for (let GG = 0; GG < bG.lightSources.length; GG++)
                if (!bG.lightSources[GG]._isReady()) return !1;
            if (kG.getCaps().standardDerivatives || bG.isVerticesDataPresent(sG.l.NormalKind) || (bG.createNormals(!0), mG.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + bG.name)), !(0, xG.e)(yG, bG, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const UG = ZG.effect,
              YG = LG._areLightsDisposed,
              VG = this._prepareEffect(bG, ZG.getRenderingMesh(), LG, this.onCompiled, this.onError, wG, null);
            let pG = !1;
            if (VG)
              if (this._onEffectCreatedObservable && (gb.effect = VG, gb.subMesh = ZG, this._onEffectCreatedObservable.notifyObservers(gb)), this.allowShaderHotSwapping && UG && !VG.isReady()) {
                if (LG.markAsUnprocessed(), pG = this.isFrozen, YG) return LG._areLightsDisposed = !0, !1
              } else yG.resetCachedMaterial(), ZG.setEffect(VG, LG, this._materialContext);
            return !(!ZG.effect || !ZG.effect.isReady()) && (LG._renderId = yG.getRenderId(), SG._wasPreviouslyReady = !pG, SG._wasPreviouslyUsingInstances = !!wG, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const GG = this._uniformBuffer;
            GG.addUniform("vTangentSpaceParams", 2), GG.addUniform("vLightingIntensity", 4), GG.addUniform("pointSize", 1), GG.addUniform("vDebugMode", 2), GG.addUniform("renderTargetSize", 2), GG.addUniform("cameraInfo", 4), GG.addUniform("vTextureRepetitionHexTilingParams", 4), GG.addUniform("backgroundRefractionMatrix", 16), GG.addUniform("vBackgroundRefractionInfos", 3), (0, xG.mb)(GG, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((bG => {
              GG.addUniform(bG.name, bG.numComponents)
            })), Object.values(this._samplersList).forEach((bG => {
              GG.addUniform(bG.samplerInfoName, 2), GG.addUniform(bG.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(GG, bG, ZG, wG) {
            if (0 === this.geometryThickness) GG.updateFloat("vGeometryThickness", 0);
            else {
              wG.getRenderingMesh().getWorldMatrix().decompose(AG.j.mK[0]);
              const bG = Math.max(Math.abs(AG.j.mK[0].x), Math.abs(AG.j.mK[0].y), Math.abs(AG.j.mK[0].z));
              GG.updateFloat("vGeometryThickness", this.geometryThickness * bG)
            }
          }
          bindForSubMesh(bG, ZG, wG) {
            const SG = this.Dv(),
              LG = wG.materialDefines;
            if (!LG) return;
            const yG = wG.effect;
            if (!yG) return;
            this._activeEffect = yG, ZG.getMeshUniformBuffer().bindToEffect(yG, "Mesh"), ZG.transferToEffect(bG);
            const kG = SG.CK();
            this._uniformBuffer.bindToEffect(yG, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, SG, ZG, bG, this.isFrozen), Qb.e.Bind(kG.currentRenderPassId, this._activeEffect, ZG, bG, this);
            const UG = SG.activeCamera;
            UG ? this._uniformBuffer.updateFloat4("cameraInfo", UG.minZ, UG.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const YG = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", YG[0], YG[1], YG[2], YG[3]), this._eventInfo.subMesh = wG, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), LG.OBJECTSPACE_NORMALMAP && (bG.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const VG = this._mustRebind(SG, yG, wG, ZG.visibility),
              pG = kG._features.needToAlwaysBindUniformBuffers;
            (0, xG.i)(ZG, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, pb.d)(this._activeEffect, this._vertexPullingMetadata);
            const fG = this._uniformBuffer;
            if (VG) {
              this.bindViewProjection(yG);
              const bG = this._getRadianceTexture();
              if (!fG.useUbo || !this.isFrozen || !fG.isSync || wG._drawWrapper._forceRebindOnNextCall) {
                if (SG.texturesEnabled) {
                  for (const GG in this._samplersList) {
                    const bG = this._samplersList[GG];
                    bG.value && (fG.updateFloat2(bG.samplerInfoName, bG.value.coordinatesIndex, bG.value.level), (0, xG.C)(bG.value, fG, bG.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (SG._mirroredCameraPosition ? fG.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : fG.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, xG.o)(SG, LG, fG, TG.c.White(), bG, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && fG.updateFloat("pointSize", this.pointSize);
                const GG = this._uniformsArray;
                for (let bG = 0, ZG = GG.length; bG < ZG; bG++) {
                  const ZG = GG[bG];
                  (void 0 === ZG.requiredDefine || LG[ZG.requiredDefine]) && (4 === ZG.numComponents ? (ZG.populateVectorFromLinkedProperties(AG.j.Vector4[0]), fG.updateVector4(ZG.name, AG.j.Vector4[0])) : 3 === ZG.numComponents ? (ZG.populateVectorFromLinkedProperties(AG.j.mK[0]), fG.updateVector3(ZG.name, AG.j.mK[0])) : 2 === ZG.numComponents ? (ZG.populateVectorFromLinkedProperties(AG.j.Vector2[0]), fG.updateFloat2(ZG.name, AG.j.Vector2[0].x, AG.j.Vector2[0].y)) : 1 === ZG.numComponents && fG.updateFloat(ZG.name, ZG.linkedProperties[ZG.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * SG.environmentIntensity, this._lightingInfos.w = 1, fG.updateVector4("vLightingIntensity", this._lightingInfos), fG.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (SG.texturesEnabled) {
                for (const GG in this._samplersList) {
                  const bG = this._samplersList[GG];
                  bG.value && fG.setTexture(bG.samplerName, bG.value)
                }
                if ((0, xG.r)(SG, LG, fG, bG, this.realTimeFiltering), LG.ENVIRONMENTBRDF && fG.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), LG.FUZZENVIRONMENTBRDF && fG.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), LG.REFRACTED_BACKGROUND && (fG.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), fG.R6("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), AG.j.mK[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), fG.updateVector3("vBackgroundRefractionInfos", AG.j.mK[1])), (LG.ANISOTROPIC || LG.FUZZ || LG.REFRACTED_BACKGROUND || LG.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && fG.setTexture("blueNoiseSampler", GG._noiseTextures[this.Dv().uniqueId]), LG.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const GG = this.sssIrradianceTexture.getSize().width,
                    bG = this.sssIrradianceTexture.getSize().height;
                  fG.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), fG.setTexture("sceneDepthSampler", this.sssDepthTexture), fG.updateFloat2("renderTargetSize", GG, bG)
                }
              }
              this.Dv().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZG) && this.Dv().depthPeelingRenderer.bind(yG), this._eventInfo.subMesh = wG, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Vb.e)(this._activeEffect, this, SG), this.bindEyePosition(yG)
            } else pG && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, SG, SG.CK(), wG), !VG && this.isFrozen && !pG || !SG.lightsEnabled || this._disableLighting || (0, xG.u)(SG, ZG, this._activeEffect, LG, this._maxSimultaneousLights), !VG && this.isFrozen || (this.bindView(yG), (0, xG.l)(SG, ZG, this._activeEffect, !0), LG.NUM_MORPH_INFLUENCERS && (0, xG.y)(ZG, this._activeEffect), LG.BAKED_VERTEX_ANIMATION_TEXTURE && ZG.bakedVertexAnimationManager?.bind(yG, LG.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, xG.w)(LG, this._activeEffect, SG)), this._afterBind(ZG, this._activeEffect, wG), fG.update()
          }
          getAnimatables() {
            const GG = super.getAnimatables();
            for (const bG in this._samplersList) {
              const ZG = this._samplersList[bG];
              ZG.value && ZG.value.animations && ZG.value.animations.length > 0 && GG.push(ZG.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && GG.push(this._radianceTexture), GG
          }
          getActiveTextures() {
            const GG = super.getActiveTextures();
            for (const bG in this._samplersList) {
              const ZG = this._samplersList[bG];
              ZG.value && GG.push(ZG.value)
            }
            return this._radianceTexture && GG.push(this._radianceTexture), GG
          }
          hasTexture(GG) {
            if (super.hasTexture(GG)) return !0;
            for (const bG in this._samplersList) {
              if (this._samplersList[bG].value === GG) return !0
            }
            return this._radianceTexture === GG
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(GG, bG) {
            if (this._breakShaderLoadedCheck = !0, bG) {
              this._environmentBRDFTexture && this.Dv().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.Dv().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const GG in this._samplersList) {
                const bG = this._samplersList[GG];
                bG.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(GG, bG)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.Dv().environmentTexture
          }
          _prepareEffect(bG, ZG, wG) {
            let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              LG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              yG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              kG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(bG, ZG, wG, yG, kG), !wG.isDirty) return null;
            wG.markAsProcessed();
            const UG = this.Dv().CK(),
              YG = new OG.e;
            let VG = 0;
            wG.USESPHERICALINVERTEX && YG.addFallback(VG++, "USESPHERICALINVERTEX"), wG.FOG && YG.addFallback(VG, "FOG"), wG.SPECULARAA && YG.addFallback(VG, "SPECULARAA"), wG.POINTSIZE && YG.addFallback(VG, "POINTSIZE"), wG.LOGARITHMICDEPTH && YG.addFallback(VG, "LOGARITHMICDEPTH"), wG.PARALLAX && YG.addFallback(VG, "PARALLAX"), wG.PARALLAX_RHS && YG.addFallback(VG, "PARALLAX_RHS"), wG.PARALLAXOCCLUSION && YG.addFallback(VG++, "PARALLAXOCCLUSION"), wG.ENVIRONMENTBRDF && YG.addFallback(VG++, "ENVIRONMENTBRDF"), wG.TANGENT && YG.addFallback(VG++, "TANGENT"), VG = (0, xG.G)(wG, YG, this._maxSimultaneousLights, VG), wG.SPECULARTERM && YG.addFallback(VG++, "SPECULARTERM"), wG.USESPHERICALFROMREFLECTIONMAP && YG.addFallback(VG++, "USESPHERICALFROMREFLECTIONMAP"), wG.USEIRRADIANCEMAP && YG.addFallback(VG++, "USEIRRADIANCEMAP"), wG.NORMAL && YG.addFallback(VG++, "NORMAL"), wG.VERTEXCOLOR && YG.addFallback(VG++, "VERTEXCOLOR"), wG.MORPHTARGETS && YG.addFallback(VG++, "MORPHTARGETS"), wG.MULTIVIEW && YG.addFallback(0, "MULTIVIEW");
            const pG = [sG.l.PositionKind];
            wG.NORMAL && pG.push(sG.l.NormalKind), wG.TANGENT && pG.push(sG.l.TangentKind);
            for (let GG = 1; GG <= 6; ++GG) wG["UV" + GG] && pG.push(`uv${1===GG?"":GG}`);
            wG.VERTEXCOLOR && pG.push(sG.l.ColorKind), (0, xG.M)(pG, bG, wG, YG), (0, xG.P)(pG, wG), (0, xG.R)(pG, bG, wG), (0, xG.K)(pG, bG, wG);
            let fG = "openpbr";
            const QG = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const GG in this._uniformsList) QG.push(GG);
            const KG = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            wG.FUZZENVIRONMENTBRDF && KG.push("environmentFuzzBrdfSampler"), wG.REFRACTED_BACKGROUND && KG.push("backgroundRefractionSampler"), (wG.ANISOTROPIC || wG.FUZZ || wG.REFRACTED_BACKGROUND || wG.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && KG.push("blueNoiseSampler"), wG.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (KG.push("sceneIrradianceSampler"), KG.push("sceneDepthSampler"));
            for (const GG in this._samplersList) {
              const bG = this._samplersList[GG];
              KG.push(bG.samplerName), QG.push(bG.samplerInfoName), QG.push(bG.samplerMatrixName)
            }(0, xG.pb)(QG, KG, !0);
            const hG = ["Material", "Scene", "Mesh"],
              dG = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: wG.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = YG, this._eventInfo.fallbackRank = VG, this._eventInfo.defines = wG, this._eventInfo.uniforms = QG, this._eventInfo.attributes = pG, this._eventInfo.samplers = KG, this._eventInfo.uniformBuffersNames = hG, this._eventInfo.customCode = void 0, this._eventInfo.mesh = bG, this._eventInfo.indexParameters = dG, this._callbackPluginEventGeneric(128, this._eventInfo), Qb.e.AddUniformsAndSamplers(QG, KG), RG.d.AddUniforms(QG), RG.d.AddSamplers(KG), (0, Vb.b)(QG), this._useVertexPulling) {
              const GG = ZG?.geometry;
              GG && (this._vertexPullingMetadata = (0, pb.g)(GG), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((GG, bG) => {
                QG.push(`vp_${bG}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            tG.b && (tG.b.PrepareUniforms(QG, wG), tG.b.PrepareSamplers(KG, wG)), (0, xG.tb)({
              uniformsNames: QG,
              uniformBuffersNames: hG,
              samplers: KG,
              defines: wG,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const JG = {};
            this.customShaderNameResolve && (fG = this.customShaderNameResolve(fG, QG, hG, KG, wG, pG, JG));
            const rG = wG.toString(),
              zG = UG.createEffect(fG, {
                attributes: pG,
                uniformsNames: QG,
                uniformBuffersNames: hG,
                samplers: KG,
                defines: rG,
                fallbacks: YG,
                onCompiled: SG,
                onError: LG,
                indexParameters: dG,
                processFinalCode: JG.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: wG.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: GG._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, UG);
            return this._eventInfo.customCode = void 0, zG
          }
          _prepareDefines(bG, ZG, wG) {
            let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              yG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const kG = ZG.hasThinInstances,
              UG = this.Dv(),
              YG = UG.CK();
            (0, xG.Z)(UG, bG, wG, !0, this._maxSimultaneousLights, this._disableLighting), wG._needNormals = !0, (0, xG.eb)(UG, wG);
            const VG = this.needAlphaBlendingForMesh(bG) && this.Dv().useOrderIndependentTransparency;
            if ((0, xG.lb)(UG, wG, this.canRenderToMRT && !VG), (0, xG.ib)(UG, wG, VG), Qb.e.PrepareDefines(YG.currentRenderPassId, bG, wG), wG._areTexturesDirty) {
              wG._needUVs = !1;
              for (let GG = 1; GG <= 6; ++GG) wG["MAINUV" + GG] = !1;
              if (UG.texturesEnabled) {
                for (const ZG in this._samplersList) {
                  const GG = this._samplersList[ZG];
                  GG.value ? ((0, xG.bb)(GG.value, wG, GG.textureDefine), wG[GG.textureDefine + "_GAMMA"] = GG.value.gammaSpace) : wG[GG.textureDefine] = !1
                }
                const GG = this._getRadianceTexture(),
                  bG = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || YG.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, xG.W)(UG, GG, wG, this.realTimeFiltering, this.realTimeFilteringQuality, !bG), this._baseMetalnessTexture && (wG.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), wG.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, wG.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, wG.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, wG.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, wG.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, wG.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, wG.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, wG.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, wG.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, wG.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, wG.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && NG.d.DiffuseTextureEnabled ? (wG.PARALLAX = !0, wG.PARALLAX_RHS = UG.useRightHandedSystem, wG.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : wG.PARALLAX = !1, wG.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (wG.PARALLAX = !1, wG.PARALLAX_RHS = !1, wG.PARALLAXOCCLUSION = !1, wG.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && NG.d.ReflectionTextureEnabled ? (wG.ENVIRONMENTBRDF = !0, wG.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (wG.ENVIRONMENTBRDF = !1, wG.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? wG.FUZZENVIRONMENTBRDF = !0 : wG.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  wG.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && NG.d.RefractionTextureEnabled, wG.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, wG.REFRACTED_LIGHTS = !0;
                  const GG = this._getRadianceTexture();
                  GG ? (wG.REFRACTED_ENVIRONMENT = NG.d.RefractionTextureEnabled, wG.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.Dv().useRightHandedSystem ? !GG.invertZ : GG.invertZ, wG.REFRACTED_ENVIRONMENT_LOCAL_CUBE = GG.isCube && GG.boundingBoxSize) : wG.REFRACTED_ENVIRONMENT = !1
                } else wG.REFRACTED_BACKGROUND = !1, wG.REFRACTED_LIGHTS = !1, wG.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? wG.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : wG.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === LG.e.LIGHTFALLOFF_STANDARD ? (wG.USEPHYSICALLIGHTFALLOFF = !1, wG.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === LG.e.LIGHTFALLOFF_GLTF ? (wG.USEPHYSICALLIGHTFALLOFF = !1, wG.USEGLTFLIGHTFALLOFF = !0) : (wG.USEPHYSICALLIGHTFALLOFF = !0, wG.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? wG.TWOSIDEDLIGHTING = !0 : wG.TWOSIDEDLIGHTING = !1, wG.MIRRORED = !!UG._mirroredCameraPosition, wG.SPECULARAA = YG.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(wG._areTexturesDirty || wG._areMiscDirty) && (wG.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, wG.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, wG.ALPHABLEND = this.needAlphaBlendingForMesh(bG)), wG._areTexturesDirty && (wG.TEXTURE_REPETITION_MODE = YG.version > 1 || YG.isWebGPU ? this.textureRepetitionMode : 0), wG._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(wG), wG.FORCENORMALFORWARD = this._forceNormalForward, wG.RADIANCEOCCLUSION = this._useRadianceOcclusion, wG.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && GG._noiseTextures[UG.uniqueId] && NG.d.ReflectionTextureEnabled ? (wG.ANISOTROPIC = !0, bG.isVerticesDataPresent(sG.l.TangentKind) || (wG._needUVs = !0, wG.MAINUV1 = !0), this._useGltfStyleAnisotropy && (wG.USE_GLTF_STYLE_ANISOTROPY = !0), wG.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, wG.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (wG.ANISOTROPIC = !1, wG.USE_GLTF_STYLE_ANISOTROPY = !1, wG.ANISOTROPIC_BASE = !1, wG.ANISOTROPIC_COAT = !1), wG.THIN_FILM = this.thinFilmWeight > 0, wG.IRIDESCENCE = this.thinFilmWeight > 0, wG.DISPERSION = this.transmissionDispersionScale > 0, wG.SCATTERING = this.hasScattering;
            if (wG.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, wG.TRANSMISSION_SLAB = this.transmissionWeight > 0, wG.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, wG.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !wG.PREPASS && (wG.SUBSURFACE_SLAB || wG.TRANSMISSION_SLAB_VOLUME)) {
              let GG = !1;
              if (!this.sssIrradianceTexture && UG.geometryBufferRenderer) {
                const bG = UG.geometryBufferRenderer.getTextureIndex(qb.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = UG.geometryBufferRenderer.getGBuffer().textures[bG], GG = !0
              }
              if (!this.sssDepthTexture && UG.geometryBufferRenderer) {
                const bG = UG.geometryBufferRenderer.getTextureIndex(qb.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = UG.geometryBufferRenderer.getGBuffer().textures[bG], GG = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (wG.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, GG && (wG.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            wG.FUZZ = this.fuzzWeight > 0 && NG.d.ReflectionTextureEnabled, wG.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, wG.FUZZ ? (bG.isVerticesDataPresent(sG.l.TangentKind) || (wG._needUVs = !0, wG.MAINUV1 = !0), this._environmentFuzzBRDFTexture = jG(this.Dv()), wG.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, wG.FUZZENVIRONMENTBRDF = !1, wG.FUZZ_IBL_SAMPLES = 0), wG._areMiscDirty && ((0, xG.cb)(bG, UG, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(bG), wG, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZG, this._isVertexOutputInvariant), wG.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !bG.isVerticesDataPresent(sG.l.NormalKind), wG.DEBUGMODE = this._debugMode), (0, xG.V)(UG, YG, this, wG, !!SG, yG, kG), this._eventInfo.defines = wG, this._eventInfo.mesh = bG, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, xG.U)(bG, wG, !0, !0, !0, this._transparencyMode !== LG.e.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, bG = new WeakMap, wG = new WeakMap, SG = new WeakMap, yG = new WeakMap, kG = new WeakMap, UG = new WeakMap, YG = new WeakMap, VG = new WeakMap, pG = new WeakMap, fG = new WeakMap, QG = new WeakMap, KG = new WeakMap, hG = new WeakMap, dG = new WeakMap, JG = new WeakMap, rG = new WeakMap, zG = new WeakMap, EG = new WeakMap, oG = new WeakMap, XG = new WeakMap, uG = new WeakMap, iG = new WeakMap, vG = new WeakMap, aG = new WeakMap, cG = new WeakMap, lG = new WeakMap, MG = new WeakMap, qG = new WeakMap, nG = new WeakMap, gG = new WeakMap, eG = new WeakMap, HG = new WeakMap, DG = new WeakMap, BG = new WeakMap, Gb = new WeakMap, bb = new WeakMap, Zb = new WeakMap, wb = new WeakMap, Sb = new WeakMap, Lb = new WeakMap, yb = new WeakMap, kb = new WeakMap, Ub = new WeakMap, Yb = new WeakMap, Kb = new WeakMap, hb = new WeakMap, db = new WeakMap, Jb = new WeakMap, rb = new WeakMap, zb = new WeakMap, Eb = new WeakMap, ob = new WeakMap, Xb = new WeakMap, Cb = new WeakMap, Wb = new WeakMap, mb = new WeakMap, Ib = new WeakMap, Fb = new WeakMap, vb = new WeakMap, ab = new WeakMap, cb = new WeakMap, lb = new WeakMap, jb = new WeakMap, Pb = new WeakMap, Mb = new WeakMap, Ab = new WeakMap, sb = new WeakMap, nb = new WeakMap, eb = new WeakMap, tb = new WeakMap, Db = new WeakMap, xb = new WeakMap, Bb = new WeakMap, GZ = new WeakMap, bZ = new WeakMap, ZZ = new WeakMap, wZ = new WeakMap, SZ = new WeakMap, LZ = new WeakMap, yZ = new WeakMap, kZ = new WeakMap, UZ = new WeakMap, YZ = new WeakMap, VZ = new WeakMap, pZ = new WeakMap, fZ = new WeakMap, QZ = new WeakMap, KZ = new WeakMap, hZ = new WeakMap, dZ = new WeakMap, JZ = new WeakMap, rZ = new WeakMap, zZ = new WeakMap, EZ = new WeakMap, oZ = new WeakMap, XZ = new WeakMap, uZ = new WeakMap, iZ = new WeakMap, CZ = new WeakMap, WZ = new WeakMap, mZ = new WeakMap, IZ = new WeakMap, (() => {
          const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(aS[Symbol.metadata] ?? null) : void 0;
          FZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], vZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], aZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], AZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], sZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], qZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], nZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], eZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], TZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], HZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], tZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], DZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], NZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], OZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], xZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], BZ = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], bw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Zw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], ww = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Lw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], yw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], kw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Yw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Vw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], pw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Qw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Kw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], hw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], dw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Jw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], rw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Ew = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], ow = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], mw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Iw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], jw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Mw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], sw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], qw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], nw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], gw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], ew = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Rw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Tw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Hw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], tw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Dw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Nw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Ow = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], xw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], Bw = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, WG.c)("_markAllSubMeshesAsTexturesDirty")], bS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], ZS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], wS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], SS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], LS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], yS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], kS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], US = [(0, WG.Q)()], YS = [(0, WG.Q)()], VS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], pS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], fS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], QS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], KS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsLightsDirty")], hS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], dS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsLightsDirty")], JS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], rS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], zS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], ES = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], oS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], XS = [(0, WG.d)("_markAllSubMeshesAsTexturesDirty")], uS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], iS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], CS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], WS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], mS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], IS = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], FS = [(0, WG.d)("_markAllSubMeshesAsMiscDirty")], vS = [(0, WG.Q)()], (0, CG.k)(GG, null, FZ, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseWeight" in GG,
              get: GG => GG.baseWeight,
              set: (GG, bG) => {
                GG.baseWeight = bG
              }
            },
            metadata: bG
          }, lS, jS), (0, CG.k)(GG, null, vZ, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseWeightTexture" in GG,
              get: GG => GG.baseWeightTexture,
              set: (GG, bG) => {
                GG.baseWeightTexture = bG
              }
            },
            metadata: bG
          }, PS, MS), (0, CG.k)(GG, null, aZ, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseColor" in GG,
              get: GG => GG.baseColor,
              set: (GG, bG) => {
                GG.baseColor = bG
              }
            },
            metadata: bG
          }, AS, sS), (0, CG.k)(GG, null, cZ, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseColorTexture" in GG,
              get: GG => GG.baseColorTexture,
              set: (GG, bG) => {
                GG.baseColorTexture = bG
              }
            },
            metadata: bG
          }, qS, nS), (0, CG.k)(GG, null, lZ, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseDiffuseRoughness" in GG,
              get: GG => GG.baseDiffuseRoughness,
              set: (GG, bG) => {
                GG.baseDiffuseRoughness = bG
              }
            },
            metadata: bG
          }, gS, eS), (0, CG.k)(GG, null, jZ, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseDiffuseRoughnessTexture" in GG,
              get: GG => GG.baseDiffuseRoughnessTexture,
              set: (GG, bG) => {
                GG.baseDiffuseRoughnessTexture = bG
              }
            },
            metadata: bG
          }, RS, TS), (0, CG.k)(GG, null, PZ, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseMetalness" in GG,
              get: GG => GG.baseMetalness,
              set: (GG, bG) => {
                GG.baseMetalness = bG
              }
            },
            metadata: bG
          }, HS, tS), (0, CG.k)(GG, null, MZ, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "baseMetalnessTexture" in GG,
              get: GG => GG.baseMetalnessTexture,
              set: (GG, bG) => {
                GG.baseMetalnessTexture = bG
              }
            },
            metadata: bG
          }, DS, NS), (0, CG.k)(GG, null, AZ, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularWeight" in GG,
              get: GG => GG.specularWeight,
              set: (GG, bG) => {
                GG.specularWeight = bG
              }
            },
            metadata: bG
          }, OS, xS), (0, CG.k)(GG, null, sZ, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularWeightTexture" in GG,
              get: GG => GG.specularWeightTexture,
              set: (GG, bG) => {
                GG.specularWeightTexture = bG
              }
            },
            metadata: bG
          }, BS, GL), (0, CG.k)(GG, null, qZ, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularColor" in GG,
              get: GG => GG.specularColor,
              set: (GG, bG) => {
                GG.specularColor = bG
              }
            },
            metadata: bG
          }, bL, ZL), (0, CG.k)(GG, null, nZ, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularColorTexture" in GG,
              get: GG => GG.specularColorTexture,
              set: (GG, bG) => {
                GG.specularColorTexture = bG
              }
            },
            metadata: bG
          }, wL, SL), (0, CG.k)(GG, null, gZ, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularRoughness" in GG,
              get: GG => GG.specularRoughness,
              set: (GG, bG) => {
                GG.specularRoughness = bG
              }
            },
            metadata: bG
          }, LL, yL), (0, CG.k)(GG, null, eZ, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularRoughnessTexture" in GG,
              get: GG => GG.specularRoughnessTexture,
              set: (GG, bG) => {
                GG.specularRoughnessTexture = bG
              }
            },
            metadata: bG
          }, kL, UL), (0, CG.k)(GG, null, RZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularRoughnessAnisotropy" in GG,
              get: GG => GG.specularRoughnessAnisotropy,
              set: (GG, bG) => {
                GG.specularRoughnessAnisotropy = bG
              }
            },
            metadata: bG
          }, YL, VL), (0, CG.k)(GG, null, TZ, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularRoughnessAnisotropyTexture" in GG,
              get: GG => GG.specularRoughnessAnisotropyTexture,
              set: (GG, bG) => {
                GG.specularRoughnessAnisotropyTexture = bG
              }
            },
            metadata: bG
          }, pL, fL), (0, CG.k)(GG, null, HZ, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularIor" in GG,
              get: GG => GG.specularIor,
              set: (GG, bG) => {
                GG.specularIor = bG
              }
            },
            metadata: bG
          }, QL, KL), (0, CG.k)(GG, null, tZ, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionWeight" in GG,
              get: GG => GG.transmissionWeight,
              set: (GG, bG) => {
                GG.transmissionWeight = bG
              }
            },
            metadata: bG
          }, hL, dL), (0, CG.k)(GG, null, DZ, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionWeightTexture" in GG,
              get: GG => GG.transmissionWeightTexture,
              set: (GG, bG) => {
                GG.transmissionWeightTexture = bG
              }
            },
            metadata: bG
          }, JL, rL), (0, CG.k)(GG, null, NZ, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionColor" in GG,
              get: GG => GG.transmissionColor,
              set: (GG, bG) => {
                GG.transmissionColor = bG
              }
            },
            metadata: bG
          }, zL, EL), (0, CG.k)(GG, null, OZ, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionColorTexture" in GG,
              get: GG => GG.transmissionColorTexture,
              set: (GG, bG) => {
                GG.transmissionColorTexture = bG
              }
            },
            metadata: bG
          }, oL, XL), (0, CG.k)(GG, null, xZ, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionDepth" in GG,
              get: GG => GG.transmissionDepth,
              set: (GG, bG) => {
                GG.transmissionDepth = bG
              }
            },
            metadata: bG
          }, uL, iL), (0, CG.k)(GG, null, BZ, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionDepthTexture" in GG,
              get: GG => GG.transmissionDepthTexture,
              set: (GG, bG) => {
                GG.transmissionDepthTexture = bG
              }
            },
            metadata: bG
          }, CL, WL), (0, CG.k)(GG, null, Gw, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionScatter" in GG,
              get: GG => GG.transmissionScatter,
              set: (GG, bG) => {
                GG.transmissionScatter = bG
              }
            },
            metadata: bG
          }, mL, IL), (0, CG.k)(GG, null, bw, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionScatterTexture" in GG,
              get: GG => GG.transmissionScatterTexture,
              set: (GG, bG) => {
                GG.transmissionScatterTexture = bG
              }
            },
            metadata: bG
          }, FL, vL), (0, CG.k)(GG, null, Zw, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionScatterAnisotropy" in GG,
              get: GG => GG.transmissionScatterAnisotropy,
              set: (GG, bG) => {
                GG.transmissionScatterAnisotropy = bG
              }
            },
            metadata: bG
          }, aL, cL), (0, CG.k)(GG, null, ww, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionDispersionScale" in GG,
              get: GG => GG.transmissionDispersionScale,
              set: (GG, bG) => {
                GG.transmissionDispersionScale = bG
              }
            },
            metadata: bG
          }, lL, jL), (0, CG.k)(GG, null, Sw, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionDispersionScaleTexture" in GG,
              get: GG => GG.transmissionDispersionScaleTexture,
              set: (GG, bG) => {
                GG.transmissionDispersionScaleTexture = bG
              }
            },
            metadata: bG
          }, PL, ML), (0, CG.k)(GG, null, Lw, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: GG => "transmissionDispersionAbbeNumber" in GG,
              get: GG => GG.transmissionDispersionAbbeNumber,
              set: (GG, bG) => {
                GG.transmissionDispersionAbbeNumber = bG
              }
            },
            metadata: bG
          }, AL, sL), (0, CG.k)(GG, null, yw, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceWeight" in GG,
              get: GG => GG.subsurfaceWeight,
              set: (GG, bG) => {
                GG.subsurfaceWeight = bG
              }
            },
            metadata: bG
          }, qL, nL), (0, CG.k)(GG, null, kw, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceWeightTexture" in GG,
              get: GG => GG.subsurfaceWeightTexture,
              set: (GG, bG) => {
                GG.subsurfaceWeightTexture = bG
              }
            },
            metadata: bG
          }, gL, eL), (0, CG.k)(GG, null, Uw, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceColor" in GG,
              get: GG => GG.subsurfaceColor,
              set: (GG, bG) => {
                GG.subsurfaceColor = bG
              }
            },
            metadata: bG
          }, RL, TL), (0, CG.k)(GG, null, Yw, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceColorTexture" in GG,
              get: GG => GG.subsurfaceColorTexture,
              set: (GG, bG) => {
                GG.subsurfaceColorTexture = bG
              }
            },
            metadata: bG
          }, HL, tL), (0, CG.k)(GG, null, Vw, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceRadius" in GG,
              get: GG => GG.subsurfaceRadius,
              set: (GG, bG) => {
                GG.subsurfaceRadius = bG
              }
            },
            metadata: bG
          }, DL, NL), (0, CG.k)(GG, null, pw, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceRadiusScale" in GG,
              get: GG => GG.subsurfaceRadiusScale,
              set: (GG, bG) => {
                GG.subsurfaceRadiusScale = bG
              }
            },
            metadata: bG
          }, OL, xL), (0, CG.k)(GG, null, fw, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceRadiusScaleTexture" in GG,
              get: GG => GG.subsurfaceRadiusScaleTexture,
              set: (GG, bG) => {
                GG.subsurfaceRadiusScaleTexture = bG
              }
            },
            metadata: bG
          }, BL, Gy), (0, CG.k)(GG, null, Qw, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: GG => "subsurfaceScatterAnisotropy" in GG,
              get: GG => GG.subsurfaceScatterAnisotropy,
              set: (GG, bG) => {
                GG.subsurfaceScatterAnisotropy = bG
              }
            },
            metadata: bG
          }, by, Zy), (0, CG.k)(GG, null, Kw, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatWeight" in GG,
              get: GG => GG.coatWeight,
              set: (GG, bG) => {
                GG.coatWeight = bG
              }
            },
            metadata: bG
          }, wy, Sy), (0, CG.k)(GG, null, hw, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatWeightTexture" in GG,
              get: GG => GG.coatWeightTexture,
              set: (GG, bG) => {
                GG.coatWeightTexture = bG
              }
            },
            metadata: bG
          }, Ly, yy), (0, CG.k)(GG, null, dw, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatColor" in GG,
              get: GG => GG.coatColor,
              set: (GG, bG) => {
                GG.coatColor = bG
              }
            },
            metadata: bG
          }, ky, Uy), (0, CG.k)(GG, null, Jw, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatColorTexture" in GG,
              get: GG => GG.coatColorTexture,
              set: (GG, bG) => {
                GG.coatColorTexture = bG
              }
            },
            metadata: bG
          }, Yy, Vy), (0, CG.k)(GG, null, rw, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatRoughness" in GG,
              get: GG => GG.coatRoughness,
              set: (GG, bG) => {
                GG.coatRoughness = bG
              }
            },
            metadata: bG
          }, py, fy), (0, CG.k)(GG, null, zw, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatRoughnessTexture" in GG,
              get: GG => GG.coatRoughnessTexture,
              set: (GG, bG) => {
                GG.coatRoughnessTexture = bG
              }
            },
            metadata: bG
          }, Qy, Ky), (0, CG.k)(GG, null, Ew, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatRoughnessAnisotropy" in GG,
              get: GG => GG.coatRoughnessAnisotropy,
              set: (GG, bG) => {
                GG.coatRoughnessAnisotropy = bG
              }
            },
            metadata: bG
          }, hy, dy), (0, CG.k)(GG, null, ow, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatRoughnessAnisotropyTexture" in GG,
              get: GG => GG.coatRoughnessAnisotropyTexture,
              set: (GG, bG) => {
                GG.coatRoughnessAnisotropyTexture = bG
              }
            },
            metadata: bG
          }, Jy, ry), (0, CG.k)(GG, null, Xw, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatIor" in GG,
              get: GG => GG.coatIor,
              set: (GG, bG) => {
                GG.coatIor = bG
              }
            },
            metadata: bG
          }, zy, Ey), (0, CG.k)(GG, null, uw, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatDarkening" in GG,
              get: GG => GG.coatDarkening,
              set: (GG, bG) => {
                GG.coatDarkening = bG
              }
            },
            metadata: bG
          }, oy, Xy), (0, CG.k)(GG, null, iw, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "coatDarkeningTexture" in GG,
              get: GG => GG.coatDarkeningTexture,
              set: (GG, bG) => {
                GG.coatDarkeningTexture = bG
              }
            },
            metadata: bG
          }, uy, iy), (0, CG.k)(GG, null, Cw, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "fuzzWeight" in GG,
              get: GG => GG.fuzzWeight,
              set: (GG, bG) => {
                GG.fuzzWeight = bG
              }
            },
            metadata: bG
          }, Cy, Wy), (0, CG.k)(GG, null, Ww, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "fuzzWeightTexture" in GG,
              get: GG => GG.fuzzWeightTexture,
              set: (GG, bG) => {
                GG.fuzzWeightTexture = bG
              }
            },
            metadata: bG
          }, my, Iy), (0, CG.k)(GG, null, mw, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "fuzzColor" in GG,
              get: GG => GG.fuzzColor,
              set: (GG, bG) => {
                GG.fuzzColor = bG
              }
            },
            metadata: bG
          }, Fy, vy), (0, CG.k)(GG, null, Iw, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "fuzzColorTexture" in GG,
              get: GG => GG.fuzzColorTexture,
              set: (GG, bG) => {
                GG.fuzzColorTexture = bG
              }
            },
            metadata: bG
          }, ay, cy), (0, CG.k)(GG, null, Fw, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: GG => "fuzzRoughness" in GG,
              get: GG => GG.fuzzRoughness,
              set: (GG, bG) => {
                GG.fuzzRoughness = bG
              }
            },
            metadata: bG
          }, ly, jy), (0, CG.k)(GG, null, vw, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "fuzzRoughnessTexture" in GG,
              get: GG => GG.fuzzRoughnessTexture,
              set: (GG, bG) => {
                GG.fuzzRoughnessTexture = bG
              }
            },
            metadata: bG
          }, Py, My), (0, CG.k)(GG, null, aw, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryThinWalled" in GG,
              get: GG => GG.geometryThinWalled,
              set: (GG, bG) => {
                GG.geometryThinWalled = bG
              }
            },
            metadata: bG
          }, Ay, sy), (0, CG.k)(GG, null, lw, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryNormalTexture" in GG,
              get: GG => GG.geometryNormalTexture,
              set: (GG, bG) => {
                GG.geometryNormalTexture = bG
              }
            },
            metadata: bG
          }, qy, ny), (0, CG.k)(GG, null, jw, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryTangent" in GG,
              get: GG => GG.geometryTangent,
              set: (GG, bG) => {
                GG.geometryTangent = bG
              }
            },
            metadata: bG
          }, gy, ey), (0, CG.k)(GG, null, Pw, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryTangentTexture" in GG,
              get: GG => GG.geometryTangentTexture,
              set: (GG, bG) => {
                GG.geometryTangentTexture = bG
              }
            },
            metadata: bG
          }, Ry, Ty), (0, CG.k)(GG, null, Mw, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryCoatNormalTexture" in GG,
              get: GG => GG.geometryCoatNormalTexture,
              set: (GG, bG) => {
                GG.geometryCoatNormalTexture = bG
              }
            },
            metadata: bG
          }, Hy, ty), (0, CG.k)(GG, null, Aw, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryCoatTangent" in GG,
              get: GG => GG.geometryCoatTangent,
              set: (GG, bG) => {
                GG.geometryCoatTangent = bG
              }
            },
            metadata: bG
          }, Dy, Ny), (0, CG.k)(GG, null, sw, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryCoatTangentTexture" in GG,
              get: GG => GG.geometryCoatTangentTexture,
              set: (GG, bG) => {
                GG.geometryCoatTangentTexture = bG
              }
            },
            metadata: bG
          }, Oy, xy), (0, CG.k)(GG, null, qw, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryOpacity" in GG,
              get: GG => GG.geometryOpacity,
              set: (GG, bG) => {
                GG.geometryOpacity = bG
              }
            },
            metadata: bG
          }, By, Gk), (0, CG.k)(GG, null, nw, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryOpacityTexture" in GG,
              get: GG => GG.geometryOpacityTexture,
              set: (GG, bG) => {
                GG.geometryOpacityTexture = bG
              }
            },
            metadata: bG
          }, bk, Zk), (0, CG.k)(GG, null, gw, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryThickness" in GG,
              get: GG => GG.geometryThickness,
              set: (GG, bG) => {
                GG.geometryThickness = bG
              }
            },
            metadata: bG
          }, wk, Sk), (0, CG.k)(GG, null, ew, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "geometryThicknessTexture" in GG,
              get: GG => GG.geometryThicknessTexture,
              set: (GG, bG) => {
                GG.geometryThicknessTexture = bG
              }
            },
            metadata: bG
          }, Lk, yk), (0, CG.k)(GG, null, Rw, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: GG => "emissionLuminance" in GG,
              get: GG => GG.emissionLuminance,
              set: (GG, bG) => {
                GG.emissionLuminance = bG
              }
            },
            metadata: bG
          }, kk, Uk), (0, CG.k)(GG, null, Tw, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "emissionColor" in GG,
              get: GG => GG.emissionColor,
              set: (GG, bG) => {
                GG.emissionColor = bG
              }
            },
            metadata: bG
          }, Yk, Vk), (0, CG.k)(GG, null, Hw, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "emissionColorTexture" in GG,
              get: GG => GG.emissionColorTexture,
              set: (GG, bG) => {
                GG.emissionColorTexture = bG
              }
            },
            metadata: bG
          }, pk, fk), (0, CG.k)(GG, null, tw, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: GG => "thinFilmWeight" in GG,
              get: GG => GG.thinFilmWeight,
              set: (GG, bG) => {
                GG.thinFilmWeight = bG
              }
            },
            metadata: bG
          }, Qk, Kk), (0, CG.k)(GG, null, Dw, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "thinFilmWeightTexture" in GG,
              get: GG => GG.thinFilmWeightTexture,
              set: (GG, bG) => {
                GG.thinFilmWeightTexture = bG
              }
            },
            metadata: bG
          }, hk, dk), (0, CG.k)(GG, null, Nw, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: GG => "thinFilmThickness" in GG,
              get: GG => GG.thinFilmThickness,
              set: (GG, bG) => {
                GG.thinFilmThickness = bG
              }
            },
            metadata: bG
          }, Jk, rk), (0, CG.k)(GG, null, Ow, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: GG => "thinFilmThicknessMin" in GG,
              get: GG => GG.thinFilmThicknessMin,
              set: (GG, bG) => {
                GG.thinFilmThicknessMin = bG
              }
            },
            metadata: bG
          }, zk, Ek), (0, CG.k)(GG, null, xw, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "thinFilmThicknessTexture" in GG,
              get: GG => GG.thinFilmThicknessTexture,
              set: (GG, bG) => {
                GG.thinFilmThicknessTexture = bG
              }
            },
            metadata: bG
          }, Xk, uk), (0, CG.k)(GG, null, Bw, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: GG => "thinFilmIor" in GG,
              get: GG => GG.thinFilmIor,
              set: (GG, bG) => {
                GG.thinFilmIor = bG
              }
            },
            metadata: bG
          }, ik, Ck), (0, CG.k)(GG, null, GS, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "ambientOcclusionTexture" in GG,
              get: GG => GG.ambientOcclusionTexture,
              set: (GG, bG) => {
                GG.ambientOcclusionTexture = bG
              }
            },
            metadata: bG
          }, Wk, mk), (0, CG.k)(GG, null, bS, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: GG => "directIntensity" in GG,
              get: GG => GG.directIntensity,
              set: (GG, bG) => {
                GG.directIntensity = bG
              }
            },
            metadata: bG
          }, Ik, Fk), (0, CG.k)(GG, null, ZS, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: GG => "environmentIntensity" in GG,
              get: GG => GG.environmentIntensity,
              set: (GG, bG) => {
                GG.environmentIntensity = bG
              }
            },
            metadata: bG
          }, vk, ak), (0, CG.k)(GG, null, wS, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "useSpecularWeightFromTextureAlpha" in GG,
              get: GG => GG.useSpecularWeightFromTextureAlpha,
              set: (GG, bG) => {
                GG.useSpecularWeightFromTextureAlpha = bG
              }
            },
            metadata: bG
          }, ck, lk), (0, CG.k)(GG, null, SS, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: GG => "forceAlphaTest" in GG,
              get: GG => GG.forceAlphaTest,
              set: (GG, bG) => {
                GG.forceAlphaTest = bG
              }
            },
            metadata: bG
          }, jk, Pk), (0, CG.k)(GG, null, LS, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: GG => "alphaCutOff" in GG,
              get: GG => GG.alphaCutOff,
              set: (GG, bG) => {
                GG.alphaCutOff = bG
              }
            },
            metadata: bG
          }, Mk, Ak), (0, CG.k)(GG, null, yS, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: GG => "useAmbientOcclusionFromMetallicTextureRed" in GG,
              get: GG => GG.useAmbientOcclusionFromMetallicTextureRed,
              set: (GG, bG) => {
                GG.useAmbientOcclusionFromMetallicTextureRed = bG
              }
            },
            metadata: bG
          }, sk, qk), (0, CG.k)(GG, null, kS, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: GG => "useAmbientInGrayScale" in GG,
              get: GG => GG.useAmbientInGrayScale,
              set: (GG, bG) => {
                GG.useAmbientInGrayScale = bG
              }
            },
            metadata: bG
          }, nk, gk), (0, CG.k)(GG, null, US, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: GG => "usePhysicalLightFalloff" in GG,
              get: GG => GG.usePhysicalLightFalloff
            },
            metadata: bG
          }, null, cS), (0, CG.k)(GG, null, YS, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: GG => "useGLTFLightFalloff" in GG,
              get: GG => GG.useGLTFLightFalloff
            },
            metadata: bG
          }, null, cS), (0, CG.k)(GG, null, VS, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: GG => "useObjectSpaceNormalMap" in GG,
              get: GG => GG.useObjectSpaceNormalMap,
              set: (GG, bG) => {
                GG.useObjectSpaceNormalMap = bG
              }
            },
            metadata: bG
          }, ek, Rk), (0, CG.k)(GG, null, pS, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: GG => "useParallax" in GG,
              get: GG => GG.useParallax,
              set: (GG, bG) => {
                GG.useParallax = bG
              }
            },
            metadata: bG
          }, Tk, Hk), (0, CG.k)(GG, null, fS, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: GG => "useParallaxOcclusion" in GG,
              get: GG => GG.useParallaxOcclusion,
              set: (GG, bG) => {
                GG.useParallaxOcclusion = bG
              }
            },
            metadata: bG
          }, tk, Dk), (0, CG.k)(GG, null, QS, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: GG => "parallaxScaleBias" in GG,
              get: GG => GG.parallaxScaleBias,
              set: (GG, bG) => {
                GG.parallaxScaleBias = bG
              }
            },
            metadata: bG
          }, Nk, Ok), (0, CG.k)(GG, null, KS, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: GG => "disableLighting" in GG,
              get: GG => GG.disableLighting,
              set: (GG, bG) => {
                GG.disableLighting = bG
              }
            },
            metadata: bG
          }, xk, Bk), (0, CG.k)(GG, null, hS, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: GG => "forceIrradianceInFragment" in GG,
              get: GG => GG.forceIrradianceInFragment,
              set: (GG, bG) => {
                GG.forceIrradianceInFragment = bG
              }
            },
            metadata: bG
          }, GU, bU), (0, CG.k)(GG, null, dS, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: GG => "maxSimultaneousLights" in GG,
              get: GG => GG.maxSimultaneousLights,
              set: (GG, bG) => {
                GG.maxSimultaneousLights = bG
              }
            },
            metadata: bG
          }, ZU, wU), (0, CG.k)(GG, null, JS, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: GG => "invertNormalMapX" in GG,
              get: GG => GG.invertNormalMapX,
              set: (GG, bG) => {
                GG.invertNormalMapX = bG
              }
            },
            metadata: bG
          }, SU, LU), (0, CG.k)(GG, null, rS, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: GG => "invertNormalMapY" in GG,
              get: GG => GG.invertNormalMapY,
              set: (GG, bG) => {
                GG.invertNormalMapY = bG
              }
            },
            metadata: bG
          }, yU, kU), (0, CG.k)(GG, null, zS, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: GG => "twoSidedLighting" in GG,
              get: GG => GG.twoSidedLighting,
              set: (GG, bG) => {
                GG.twoSidedLighting = bG
              }
            },
            metadata: bG
          }, UU, YU), (0, CG.k)(GG, null, ES, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: GG => "useAlphaFresnel" in GG,
              get: GG => GG.useAlphaFresnel,
              set: (GG, bG) => {
                GG.useAlphaFresnel = bG
              }
            },
            metadata: bG
          }, VU, pU), (0, CG.k)(GG, null, oS, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: GG => "useLinearAlphaFresnel" in GG,
              get: GG => GG.useLinearAlphaFresnel,
              set: (GG, bG) => {
                GG.useLinearAlphaFresnel = bG
              }
            },
            metadata: bG
          }, fU, QU), (0, CG.k)(GG, null, XS, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "environmentBRDFTexture" in GG,
              get: GG => GG.environmentBRDFTexture,
              set: (GG, bG) => {
                GG.environmentBRDFTexture = bG
              }
            },
            metadata: bG
          }, KU, hU), (0, CG.k)(GG, null, uS, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: GG => "forceNormalForward" in GG,
              get: GG => GG.forceNormalForward,
              set: (GG, bG) => {
                GG.forceNormalForward = bG
              }
            },
            metadata: bG
          }, dU, JU), (0, CG.k)(GG, null, iS, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: GG => "enableSpecularAntiAliasing" in GG,
              get: GG => GG.enableSpecularAntiAliasing,
              set: (GG, bG) => {
                GG.enableSpecularAntiAliasing = bG
              }
            },
            metadata: bG
          }, rU, zU), (0, CG.k)(GG, null, CS, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: GG => "useHorizonOcclusion" in GG,
              get: GG => GG.useHorizonOcclusion,
              set: (GG, bG) => {
                GG.useHorizonOcclusion = bG
              }
            },
            metadata: bG
          }, EU, oU), (0, CG.k)(GG, null, WS, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: GG => "useRadianceOcclusion" in GG,
              get: GG => GG.useRadianceOcclusion,
              set: (GG, bG) => {
                GG.useRadianceOcclusion = bG
              }
            },
            metadata: bG
          }, XU, uU), (0, CG.k)(GG, null, mS, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: GG => "unlit" in GG,
              get: GG => GG.unlit,
              set: (GG, bG) => {
                GG.unlit = bG
              }
            },
            metadata: bG
          }, iU, CU), (0, CG.k)(GG, null, IS, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: GG => "applyDecalMapAfterDetailMap" in GG,
              get: GG => GG.applyDecalMapAfterDetailMap,
              set: (GG, bG) => {
                GG.applyDecalMapAfterDetailMap = bG
              }
            },
            metadata: bG
          }, WU, mU), (0, CG.k)(GG, null, FS, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "debugMode" in GG,
              get: GG => GG.debugMode,
              set: (GG, bG) => {
                GG.debugMode = bG
              }
            },
            metadata: bG
          }, IU, FU), (0, CG.k)(GG, null, vS, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: GG => "transparencyMode" in GG,
              get: GG => GG.transparencyMode
            },
            metadata: bG
          }, null, cS), bG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bG
          })
        })(), GG.SSS_QUALITY_LOW = 0, GG.SSS_QUALITY_MEDIUM = 1, GG.SSS_QUALITY_HIGH = 2, GG._noiseTextures = {}, GG.ForceGLSL = !1, GG._ShaderLoader = new fb.c((() => [Promise.all([ZG.e(322), ZG.e(385)]).then((() => ZG(62300))), Promise.all([ZG.e(327), ZG.e(323), ZG.e(384), ZG.e(389)]).then((() => ZG(62314)))]), (() => [Promise.all([ZG.e(341), ZG.e(343), ZG.e(388)]).then((() => ZG(62351))), Promise.all([ZG.e(341), ZG.e(344), ZG.e(387), ZG.e(390)]).then((() => ZG(62362)))])), GG
      })(),
      Bb = !1;
    Bb || (Bb = !0, (0, tG.e)(), (0, nb.i)("BABYLON.OpenPBRMaterial", xb));
    var GZ = ZG(37465);
    class bZ {
      constructor(GG) {
        this.name = lb.b.NAME_PROCEDURALTEXTURE, this.Ah = GG
      }
      register() {
        this.Ah._beforeClearStage.registerStep(lb.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Ah.proceduralTexturesEnabled) {
          ib.f.StartPerformanceCounter("Procedural textures", this.Ah.proceduralTextures.length > 0);
          for (let GG = 0; GG < this.Ah.proceduralTextures.length; GG++) {
            const bG = this.Ah.proceduralTextures[GG];
            bG._shouldRender() && bG.render()
          }
          ib.f.EndPerformanceCounter("Procedural textures", this.Ah.proceduralTextures.length > 0)
        }
      }
    }
    var ZZ = ZG(40697);
    let wZ = (() => {
      var GG;
      let bG, wG, SG, yG, kG, UG = FG.d,
        YG = [],
        VG = [],
        pG = [],
        fG = [],
        QG = [],
        KG = [],
        dG = [],
        JG = [],
        rG = [];
      return GG = class extends UG {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(GG, bG, ZG, wG) {
          let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, wG, !LG), this.isEnabled = ((0, CG.n)(this, YG), (0, CG.n)(this, VG, !0)), this.autoClear = ((0, CG.n)(this, pG), (0, CG.n)(this, fG, !0)), this.onGenerated = (0, CG.n)(this, QG), this.onGeneratedObservable = new GZ.c, this.onBeforeGenerationObservable = new GZ.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, CG.n)(this, KG, void 0), this._drawWrapper = (0, CG.n)(this, dG), this._textures = {}, this._size = (0, CG.n)(this, JG, void 0), this._textureType = (0, CG.n)(this, rG), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === SG || SG instanceof FG.d ? (this._options = {}, this._fallbackTexture = SG) : (this._options = SG, this._fallbackTexture = SG.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let UG = (wG = this.Dv() || hG.c.LastCreatedScene)._getComponent(lb.b.NAME_PROCEDURALTEXTURE);
          UG || (UG = new bZ(wG), wG.KwG(UG)), this._options.skipSceneRegistration || wG.proceduralTextures.push(this), this._fullEngine = wG.CK(), this.name = GG, this.isRenderTarget = !0, this._size = bG, this._textureType = kG, this._generateMipMaps = LG, this._drawWrapper = new ZZ.c(this._fullEngine), this.setFragment(ZG);
          const zG = this._createRtWrapper(yG, bG, LG, kG);
          this._texture = zG.texture;
          const EG = [];
          EG.push(1, 1), EG.push(-1, 1), EG.push(-1, -1), EG.push(1, -1), this._vertexBuffers[sG.l.PositionKind] = new sG.l(this._fullEngine, EG, sG.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(GG, bG, ZG, wG) {
          return GG ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(bG, {
            generateMipMaps: ZG,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: wG,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(bG, {
            generateMipMaps: ZG,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: wG,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(GG) {
          this._drawWrapper.effect = GG
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((GG => {
            this._contentData = this.readPixels(0, 0, GG), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const GG = this._fullEngine,
            bG = [];
          bG.push(0), bG.push(1), bG.push(2), bG.push(0), bG.push(2), bG.push(3), this._indexBuffer = GG.createIndexBuffer(bG)
        }
        _rebuild() {
          const GG = this._vertexBuffers[sG.l.PositionKind];
          GG && GG._rebuild(), this._createIndexBuffer(), this.refreshRate === Cb.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Cb.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(GG) {
          if (this.isReady()) return void GG(this);
          const bG = this.getEffect();
          bG && bG.executeWhenCompiled((() => {
            GG(this)
          }))
        }
        isReady() {
          const GG = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const bG = this._getDefines();
          if (this._drawWrapper.effect && bG === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const wG = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== bG && (this._cachedDefines = bG, this._drawWrapper.effect = GG.createEffect(wG, [sG.l.PositionKind], this._uniforms, this._samplers, bG, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([ZG.e(393).then((() => ZG(62429))), this._options.extraInitializationsAsync()]) : await Promise.all([ZG.e(394).then((() => ZG(62433))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await ZG.e(393).then((() => ZG(62429))) : await ZG.e(394).then((() => ZG(62433)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(GG) {
          this._fragment = GG
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(GG) {
          this._refreshRate = GG, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(GG, bG) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const ZG = this._texture.isCube;
          this._rtWrapper.dispose();
          const wG = this._createRtWrapper(ZG, GG, bG, this._textureType);
          this._texture = wG.texture, this._size = GG, this._generateMipMaps = bG
        }
        _checkUniform(GG) {
          -1 === this._uniforms.indexOf(GG) && this._uniforms.push(GG)
        }
        setTexture(GG, bG) {
          return -1 === this._samplers.indexOf(GG) && this._samplers.push(GG), this._textures[GG] = bG, this
        }
        setFloat(GG, bG) {
          return this._checkUniform(GG), this._floats[GG] = bG, this
        }
        setInt(GG, bG) {
          return this._checkUniform(GG), this._ints[GG] = bG, this
        }
        setFloats(GG, bG) {
          return this._checkUniform(GG), this._floatsArrays[GG] = bG, this
        }
        setColor3(GG, bG) {
          return this._checkUniform(GG), this._colors3[GG] = bG, this
        }
        setColor4(GG, bG) {
          return this._checkUniform(GG), this._colors4[GG] = bG, this
        }
        setVector2(GG, bG) {
          return this._checkUniform(GG), this._vectors2[GG] = bG, this
        }
        setVector3(GG, bG) {
          return this._checkUniform(GG), this._vectors3[GG] = bG, this
        }
        setVector4(GG, bG) {
          return this._checkUniform(GG), this._vectors4[GG] = bG, this
        }
        setMatrix(GG, bG) {
          return this._checkUniform(GG), this._matrices[GG] = bG, this
        }
        render(GG) {
          const bG = this.Dv();
          if (!bG) return;
          const ZG = this._fullEngine;
          if (ZG.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), ZG.setState(!1), !this.nodeMaterialSource) {
            for (const GG in this._textures) this._drawWrapper.effect.setTexture(GG, this._textures[GG]);
            for (const GG in this._ints) this._drawWrapper.effect.setInt(GG, this._ints[GG]);
            for (const GG in this._floats) this._drawWrapper.effect.setFloat(GG, this._floats[GG]);
            for (const GG in this._floatsArrays) this._drawWrapper.effect.setArray(GG, this._floatsArrays[GG]);
            for (const GG in this._colors3) this._drawWrapper.effect.setColor3(GG, this._colors3[GG]);
            for (const GG in this._colors4) {
              const bG = this._colors4[GG];
              this._drawWrapper.effect.setFloat4(GG, bG.r, bG.g, bG.b, bG.a)
            }
            for (const GG in this._vectors2) this._drawWrapper.effect.setVector2(GG, this._vectors2[GG]);
            for (const GG in this._vectors3) this._drawWrapper.effect.setVector3(GG, this._vectors3[GG]);
            for (const GG in this._vectors4) this._drawWrapper.effect.setVector4(GG, this._vectors4[GG]);
            for (const GG in this._matrices) this._drawWrapper.effect.setMatrix(GG, this._matrices[GG])
          }
          if (!this._texture || !this._rtWrapper) return;
          ZG._enableGPUDebugMarkers && ZG._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const wG = ZG.currentViewport;
          if (this.isCube)
            for (let SG = 0; SG < 6; SG++) ZG.bindFramebuffer(this._rtWrapper, SG, void 0, void 0, !0), ZG.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", SG), this.autoClear && ZG.clear(bG.clearColor, !0, !1, !1), ZG.drawElementsType(LG.e.TriangleFillMode, 0, 6), ZG.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let GG = 1;
            this._rtWrapper.is3D ? GG = this._rtWrapper.depth : this._rtWrapper.is2DArray && (GG = this._rtWrapper.layers);
            for (let wG = 0; wG < GG; wG++) {
              if (ZG.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, wG), ZG.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== GG ? wG / (GG - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", wG);
                for (const GG in this._textures) this._drawWrapper.effect.setTexture(GG, this._textures[GG])
              }
              this.autoClear && ZG.clear(bG.clearColor, !0, !1, !1), ZG.drawElementsType(LG.e.TriangleFillMode, 0, 6), ZG.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          wG && ZG.setViewport(wG), this.isCube && ZG.generateMipMapsForCubemap(this._texture, !0), ZG._enableGPUDebugMarkers && ZG._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const bG = this.getSize(),
            ZG = new GG(this.name, bG.width, this._fragment, this.Dv(), this._fallbackTexture, this._generateMipMaps);
          return ZG.hasAlpha = this.hasAlpha, ZG.level = this.level, ZG.coordinatesMode = this.coordinatesMode, ZG
        }
        dispose() {
          const GG = this.Dv();
          if (!GG) return;
          const bG = GG.proceduralTextures.indexOf(this);
          bG >= 0 && GG.proceduralTextures.splice(bG, 1);
          const ZG = this._vertexBuffers[sG.l.PositionKind];
          ZG && (ZG.dispose(), this._vertexBuffers[sG.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const ZG = "function" === typeof Symbol && Symbol.metadata ? Object.create(UG[Symbol.metadata] ?? null) : void 0;
        bG = [(0, WG.Q)()], wG = [(0, WG.Q)()], SG = [(0, WG.Q)()], yG = [(0, WG.Q)()], kG = [(0, WG.Q)()], (0, CG.k)(GG, null, kG, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: GG => "refreshRate" in GG,
            get: GG => GG.refreshRate
          },
          metadata: ZG
        }, null, YG), (0, CG.k)(null, null, bG, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isEnabled" in GG,
            get: GG => GG.isEnabled,
            set: (GG, bG) => {
              GG.isEnabled = bG
            }
          },
          metadata: ZG
        }, VG, pG), (0, CG.k)(null, null, wG, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: GG => "autoClear" in GG,
            get: GG => GG.autoClear,
            set: (GG, bG) => {
              GG.autoClear = bG
            }
          },
          metadata: ZG
        }, fG, QG), (0, CG.k)(null, null, SG, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: GG => "_generateMipMaps" in GG,
            get: GG => GG._generateMipMaps,
            set: (GG, bG) => {
              GG._generateMipMaps = bG
            }
          },
          metadata: ZG
        }, KG, dG), (0, CG.k)(null, null, yG, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: GG => "_size" in GG,
            get: GG => GG._size,
            set: (GG, bG) => {
              GG._size = bG
            }
          },
          metadata: ZG
        }, JG, rG), ZG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZG
        })
      })(), GG
    })();

    function SZ(GG) {
      return "texture" in GG
    }

    function LZ(GG) {
      return "value" in GG
    }
    async function yZ(GG, bG, wG) {
      const SG = [bG.red, bG.green, bG.blue, bG.alpha],
        LG = [],
        yG = [];
      for (let ZG = 0; ZG < 4; ZG++) {
        const GG = SG[ZG];
        if (GG)
          if (SZ(GG)) {
            if (GG.sourceChannel < 0 || GG.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let bG = LG.indexOf(GG.texture); - 1 === bG && (bG = LG.length, LG.push(GG.texture)), yG[ZG] = bG
          } else {
            if (!LZ(GG)) throw new Error("Invalid channel input configuration");
            if (GG.value < 0 || GG.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            yG[ZG] = -1
          }
        else yG[ZG] = -1
      }
      let kG = bG.outputSize;
      if (!kG && LG.length > 0) {
        let GG = 0;
        for (const bG of LG) {
          const ZG = bG.getSize(),
            wG = Math.max(ZG.width, ZG.height);
          wG > GG && (GG = wG, kG = ZG.width === ZG.height ? GG : ZG)
        }
      }
      kG = kG || 512;
      const UG = [],
        YG = new Set;
      for (let ZG = 0; ZG < 4; ZG++) {
        const GG = SG[ZG],
          bG = ["RED", "GREEN", "BLUE", "ALPHA"][ZG];
        if (GG && SZ(GG)) {
          UG.push(`${bG}_FROM_TEXTURE`);
          const GG = yG[ZG];
          YG.add(GG)
        }
      }
      YG.forEach((GG => {
        UG.push(`USE_TEXTURE${GG}`)
      }));
      const VG = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: wG.CK().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            wG.CK().isWebGPU ? await Promise.all([ZG.e(391).then((() => ZG(62421)))]) : await Promise.all([ZG.e(392).then((() => ZG(62426)))])
          },
          skipSceneRegistration: !0
        },
        pG = new wZ(GG, kG, "textureMerger", wG, VG);
      pG.refreshRate = -1, pG.defines = UG.length > 0 ? "#define " + UG.join("\n#define ") + "\n" : "";
      for (let ZG = 0; ZG < LG.length; ZG++) fG = LG[ZG], (QG = pG).uOffset = fG.uOffset, QG.vOffset = fG.vOffset, QG.uScale = fG.uScale, QG.vScale = fG.vScale, QG.uAng = fG.uAng, QG.vAng = fG.vAng, QG.wAng = fG.wAng, QG.uRotationCenter = fG.uRotationCenter, QG.vRotationCenter = fG.vRotationCenter, pG.setTexture(`inputTexture${ZG}`, LG[ZG]);
      var fG, QG;
      for (let ZG = 0; ZG < 4; ZG++) {
        const GG = SG[ZG],
          bG = ["red", "green", "blue", "alpha"][ZG];
        if (GG && SZ(GG)) {
          const wG = yG[ZG];
          pG.setInt(`${bG}TextureIndex`, wG), pG.setInt(`${bG}SourceChannel`, GG.sourceChannel)
        } else {
          let wG;
          wG = GG && LZ(GG) ? GG.value : 3 === ZG ? 1 : 0, pG.setFloat(`${bG}ConstantValue`, wG)
        }
      }
      return await new Promise(((GG, bG) => {
        pG.executeWhenReady((() => {
          try {
            pG.render(), GG(pG)
          } catch (ZG) {
            bG(ZG instanceof Error ? ZG : new Error(String(ZG)))
          }
        }))
      }))
    }

    function kZ(GG, bG) {
      return {
        texture: GG,
        sourceChannel: bG
      }
    }

    function UZ(GG) {
      return {
        value: GG
      }
    }

    function YZ(GG, bG, ZG, wG) {
      return {
        red: GG,
        green: bG,
        blue: ZG,
        alpha: wG
      }
    }
    var VZ = ZG(40206),
      pZ = ZG(40313),
      fZ = ZG(37456),
      QZ = ZG(40371),
      KZ = ZG(40296);
    class hZ {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class dZ extends VZ.c {
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
        return !!this._options?.enableMultiview || this.Zh > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new hZ;
        super(null), void 0 === GG.deterministicLockstep && (GG.deterministicLockstep = !1), void 0 !== GG.timeStep && (this._timeStep = GG.timeStep), void 0 === GG.lockstepMaxSteps && (GG.lockstepMaxSteps = 4), this._options = GG, fZ.c.SetMatrixPrecision(!!GG.useHighPrecisionMatrix), this._caps = {
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
        }, GG.enableMultiview && (this._caps.multiview = {
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
        }, GG.renderingCanvas && (this._renderingCanvas = GG.renderingCanvas), mG.c.Log(`Babylon.js v${VZ.c.Version} - Null engine`);
        const bG = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (bG.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (bG.Blob = function() {})
      }
      createVertexBuffer(GG) {
        const bG = new pZ.c;
        return bG.references = 1, bG
      }
      createIndexBuffer(GG) {
        const bG = new pZ.c;
        return bG.references = 1, bG
      }
      clear(GG, bG, ZG) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(GG, bG, ZG) {
        this._cachedViewport = GG
      }
      createUniformBuffer(GG) {
        const bG = new pZ.c;
        return bG.references = 1, bG.rp = GG instanceof Array ? GG.length * Float32Array.BYTES_PER_ELEMENT : GG.byteLength, bG
      }
      createDynamicUniformBuffer(GG) {
        return this.createUniformBuffer(GG)
      }
      updateUniformBuffer(GG, bG, ZG, wG) {}
      bindUniformBufferBase(GG, bG, ZG) {}
      bindUniformBlock(GG, bG, ZG) {}
      createShaderProgram(GG, bG, ZG, wG, SG) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(GG, bG) {
        return []
      }
      getAttributes(GG, bG) {
        return []
      }
      bindSamplers(GG) {
        this._currentEffect = null
      }
      enableEffect(GG) {
        GG = null !== GG && (0, KZ.e)(GG) ? GG.effect : GG, this._currentEffect = GG, GG && (GG.onBind && GG.onBind(GG), GG._onBindObservable && GG._onBindObservable.notifyObservers(GG))
      }
      setStateCullFaceType(GG, bG) {}
      setState(GG) {}
      setIntArray(GG, bG) {
        return !0
      }
      setIntArray2(GG, bG) {
        return !0
      }
      setIntArray3(GG, bG) {
        return !0
      }
      setIntArray4(GG, bG) {
        return !0
      }
      setFloatArray(GG, bG) {
        return !0
      }
      setFloatArray2(GG, bG) {
        return !0
      }
      setFloatArray3(GG, bG) {
        return !0
      }
      setFloatArray4(GG, bG) {
        return !0
      }
      setArray(GG, bG) {
        return !0
      }
      setArray2(GG, bG) {
        return !0
      }
      setArray3(GG, bG) {
        return !0
      }
      setArray4(GG, bG) {
        return !0
      }
      setMatrices(GG, bG) {
        return !0
      }
      setMatrix3x3(GG, bG) {
        return !0
      }
      setMatrix2x2(GG, bG) {
        return !0
      }
      setFloat(GG, bG) {
        return !0
      }
      setFloat2(GG, bG, ZG) {
        return !0
      }
      setFloat3(GG, bG, ZG, wG) {
        return !0
      }
      setBool(GG, bG) {
        return !0
      }
      setFloat4(GG, bG, ZG, wG, SG) {
        return !0
      }
      setAlphaMode(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[ZG] !== GG && (this.alphaState.setAlphaBlend(0 !== GG, 0), bG || this.setDepthWrite(0 === GG), this._alphaMode[ZG] = GG)
      }
      bindBuffers(GG, bG, ZG) {}
      wipeCaches(GG) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, GG && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(GG, bG, ZG, wG) {}
      drawElementsType(GG, bG, ZG, wG) {}
      drawArraysType(GG, bG, ZG, wG) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(GG) {}
      createTexture(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          kG = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const UG = new Wb.b(this, 1),
          YG = String(GG);
        return UG.url = YG, UG.generateMipMaps = !bG, UG.samplingMode = SG, UG.invertY = ZG, UG.baseWidth = this._options.textureSize, UG.baseHeight = this._options.textureSize, UG.width = this._options.textureSize, UG.height = this._options.textureSize, kG && (UG.format = kG), yG && (UG._buffer = yG), UG.isReady = !0, LG && setTimeout((() => {
          LG(UG)
        })), this._internalTexturesCache.push(UG), UG
      }
      _createHardwareRenderTargetWrapper(GG, bG, ZG) {
        const wG = new QZ.c(GG, bG, ZG, this);
        return this._renderTargetWrapperCache.push(wG), wG
      }
      createRenderTargetTexture(GG, bG) {
        const ZG = this._createHardwareRenderTargetWrapper(!1, !1, GG),
          wG = {};
        void 0 !== bG && "object" === typeof bG ? (wG.generateMipMaps = bG.generateMipMaps, wG.generateDepthBuffer = void 0 === bG.generateDepthBuffer || bG.generateDepthBuffer, wG.generateStencilBuffer = wG.generateDepthBuffer && bG.generateStencilBuffer, wG.type = void 0 === bG.type ? 0 : bG.type, wG.samplingMode = void 0 === bG.samplingMode ? 3 : bG.samplingMode) : (wG.generateMipMaps = bG, wG.generateDepthBuffer = !0, wG.generateStencilBuffer = !1, wG.type = 0, wG.samplingMode = 3);
        const SG = new Wb.b(this, 5);
        ZG.setTexture(SG);
        const LG = GG.width || GG,
          yG = GG.height || GG;
        return ZG._generateDepthBuffer = wG.generateDepthBuffer, ZG._generateStencilBuffer = !!wG.generateStencilBuffer, SG.baseWidth = LG, SG.baseHeight = yG, SG.width = LG, SG.height = yG, SG.isReady = !0, SG.samples = 1, SG.generateMipMaps = !!wG.generateMipMaps, SG.samplingMode = wG.samplingMode, SG.type = wG.type, this._internalTexturesCache.push(SG), ZG
      }
      createMultiviewRenderTargetTexture(GG, bG) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const ZG = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: GG,
            height: bG
          }),
          wG = new Wb.b(this, 5, !0);
        return wG.baseWidth = GG, wG.baseHeight = bG, wG.width = GG, wG.height = bG, wG.isMultiview = !0, wG.isReady = !0, wG.format = 5, wG.samples = 1, ZG.setTextures(wG), ZG
      }
      bindMultiviewFramebuffer(GG) {
        this.bindFramebuffer(GG, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(GG, bG) {
        const ZG = this._createHardwareRenderTargetWrapper(!1, !0, GG),
          wG = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...bG
          };
        wG.generateStencilBuffer = wG.generateDepthBuffer && wG.generateStencilBuffer, (1 !== wG.type || this._caps.textureFloatLinearFiltering) && (2 !== wG.type || this._caps.textureHalfFloatLinearFiltering) || (wG.samplingMode = 1), ZG._generateDepthBuffer = wG.generateDepthBuffer, ZG._generateStencilBuffer = !!wG.generateStencilBuffer;
        const SG = new Wb.b(this, 5);
        return SG.baseWidth = GG, SG.baseHeight = GG, SG.width = GG, SG.height = GG, SG.isReady = !0, SG.isCube = !0, SG.samples = 1, SG.generateMipMaps = !!wG.generateMipMaps, SG.samplingMode = wG.samplingMode, SG.type = wG.type, this._internalTexturesCache.push(SG), ZG
      }
      updateTextureSamplingMode(GG, bG) {
        bG.samplingMode = GG
      }
      createRawTexture(GG, bG, ZG, wG, SG, LG, yG) {
        let kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          YG = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const VG = new Wb.b(this, 3);
        return VG.baseWidth = bG, VG.baseHeight = ZG, VG.width = bG, VG.height = ZG, VG.format = wG, VG.generateMipMaps = SG, VG.samplingMode = yG, VG.invertY = LG, VG._compression = kG, VG.type = UG, VG._useSRGBBuffer = YG, this._doNotHandleContextLost || (VG._bufferView = GG), VG
      }
      updateRawTexture(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        GG && (GG._bufferView = bG, GG.format = ZG, GG.invertY = wG, GG._compression = SG, GG.type = LG, GG._useSRGBBuffer = yG)
      }
      bindFramebuffer(GG, bG, ZG, wG, SG) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = GG, this._currentFramebuffer = null, this._cachedViewport && !SG && this.setViewport(this._cachedViewport, ZG, wG)
      }
      unBindFramebuffer(GG) {
        let bG = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, bG && bG(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(GG) {
        const bG = new pZ.c;
        return bG.references = 1, bG.rp = 1, bG
      }
      updateDynamicTexture(GG, bG, ZG) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(GG) {}
      updateDynamicIndexBuffer(GG, bG) {}
      updateDynamicVertexBuffer(GG, bG, ZG, wG) {}
      _bindTextureDirectly(GG, bG) {
        return this._boundTexturesCache[this._activeChannel] !== bG && (this._boundTexturesCache[this._activeChannel] = bG, !0)
      }
      _bindTexture(GG, bG) {
        GG < 0 || this._bindTextureDirectly(0, bG)
      }
      _deleteBuffer(GG) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(GG) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(GG, bG, ZG, wG, SG) {}
      _uploadDataToTextureDirectly(GG, bG) {}
      _uploadArrayBufferViewToTexture(GG, bG) {}
      _uploadImageToTexture(GG, bG) {}
    }
    ZG(40426), ZG(40456), ZG(40421);
    async function JZ(GG) {
      const bG = GG.getInternalTexture();
      if (!bG || 1 !== bG.source) return null;
      if (bG.invertY) {
        const bG = GG.Dv()?.CK();
        if (!(bG instanceof dZ)) return null
      }
      const ZG = bG._buffer;
      let wG, LG = GG.mimeType;
      try {
        ZG ? ArrayBuffer.isView(ZG) ? wG = ZG.buffer.slice(ZG.byteOffset, ZG.byteOffset + ZG.byteLength) : ZG instanceof ArrayBuffer ? wG = ZG : ZG instanceof Blob ? (wG = await ZG.arrayBuffer(), LG = ZG.type || LG) : "string" === typeof ZG ? (wG = await SG.Tools.LoadFileAsync(ZG), LG = (0, UG.c)(ZG) || LG) : "undefined" !== typeof HTMLImageElement && ZG instanceof HTMLImageElement && (wG = await SG.Tools.LoadFileAsync(ZG.src), LG = (0, UG.c)(ZG.src) || LG) : (wG = await SG.Tools.LoadFileAsync(bG.url), LG = (0, UG.c)(bG.url) || LG)
      } catch {
        return null
      }
      if (wG && !LG && bG.url) {
        const GG = bG.url.match(/^data:([^;,]+)/);
        LG = GG ? GG[1] : (0, UG.c)(bG.url)
      }
      return wG && LG ? {
        data: wG,
        mimeType: LG
      } : null
    }
    const rZ = 1e-6,
      zZ = new dG.Color3(.04, .04, .04),
      EZ = 1024,
      oZ = dG.Color3.White(),
      XZ = dG.Color3.BlackReadOnly;

    function uZ(GG) {
      switch (GG) {
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

    function iZ(GG, bG, ZG) {
      if (bG < zZ.r) return 0;
      const wG = zZ.r,
        SG = GG * ZG / (1 - zZ.r) + bG - 2 * zZ.r,
        LG = SG * SG - 4 * wG * (zZ.r - bG);
      return zG.Clamp((-SG + Math.sqrt(LG)) / (2 * wG), 0, 1)
    }

    function CZ(GG) {
      const bG = GG.diffuseColor.toLinearSpace(GG.Dv().CK().useExactSrgbConversions).scale(.5),
        ZG = GG.alpha,
        wG = function(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new AG.m(0, 1),
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new AG.m(0, .1),
            wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AG.m(0, .1),
            SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new AG.m(1300, .1);
          return function(GG, bG, ZG, wG, SG) {
            return (1 - GG) * (1 - GG) * (1 - GG) * bG + 3 * (1 - GG) * (1 - GG) * GG * ZG + 3 * (1 - GG) * GG * GG * wG + GG * GG * GG * SG
          }(Math.pow(GG / SG.x, .333333), bG.y, ZG.y, wG.y, SG.y)
        }(zG.Clamp(GG.specularPower, 0, EZ));
      return {
        baseColorFactor: [bG.r, bG.g, bG.b, ZG],
        metallicFactor: 0,
        roughnessFactor: wG
      }
    }

    function WZ(GG, bG) {
      bG.needAlphaBlending() ? GG.alphaMode = "BLEND" : bG.needAlphaTesting() && (GG.alphaMode = "MASK", GG.alphaCutoff = bG.alphaCutOff)
    }

    function mZ(GG, bG, ZG) {
      const wG = new Uint8Array(GG * bG * 4);
      for (let SG = 0; SG < wG.length; SG += 4) wG[SG] = wG[SG + 1] = wG[SG + 2] = wG[SG + 3] = 255;
      return XG.e.CreateRGBATexture(wG, GG, bG, ZG)
    }

    function IZ(GG) {
      if (GG instanceof Uint8Array) {
        const bG = GG.length,
          ZG = new Float32Array(GG.length);
        for (let wG = 0; wG < bG; ++wG) ZG[wG] = GG[wG] / 255;
        return ZG
      }
      if (GG instanceof Float32Array) return GG;
      throw new Error("Unsupported pixel format!")
    }
    class FZ {
      constructor(GG) {
        this._exporter = GG, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(GG) {
        return GG ? this._textureMap.get(GG.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(GG, bG) {
        const ZG = CZ(GG),
          wG = {
            name: GG.name
          };
        if (null == GG.backFaceCulling || GG.backFaceCulling || (GG.twoSidedLighting || SG.Tools.Warn(GG.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), wG.doubleSided = !0), bG) {
          const bG = [],
            SG = GG.diffuseTexture;
          SG && bG.push(this.exportTextureAsync(SG).then((GG => {
            GG && (ZG.baseColorTexture = GG)
          })));
          const LG = GG.bumpTexture;
          LG && bG.push(this.exportTextureAsync(LG).then((GG => {
            GG && (wG.normalTexture = GG, 1 !== LG.level && (wG.normalTexture.scale = LG.level))
          })));
          const yG = GG.emissiveTexture;
          yG && (wG.emissiveFactor = [1, 1, 1], bG.push(this.exportTextureAsync(yG).then((GG => {
            GG && (wG.emissiveTexture = GG)
          }))));
          const kG = GG.ambientTexture;
          kG && bG.push(this.exportTextureAsync(kG).then((GG => {
            if (GG) {
              const bG = {
                index: GG.index
              };
              wG.occlusionTexture = bG
            }
          }))), bG.length > 0 && (this._exporter._materialNeedsUVsSet.add(GG), await Promise.all(bG))
        }(GG.alpha < 1 || GG.opacityTexture) && (GG.alphaMode === uG.d.ALPHA_COMBINE ? wG.alphaMode = "BLEND" : SG.Tools.Warn(GG.name + ": glTF 2.0 does not support alpha mode: " + GG.alphaMode.toString())), GG.emissiveColor && !GG.emissiveColor.equalsWithEpsilon(XZ, rZ) && (wG.emissiveFactor = GG.emissiveColor.mwG()), wG.pbrMetallicRoughness = ZG, WZ(wG, GG), await this._finishMaterialAsync(wG, GG);
        const LG = this._exporter._materials;
        return LG.push(wG), LG.length - 1
      }
      async _finishMaterialAsync(GG, bG) {
        const ZG = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", GG, bG),
          wG = [];
        for (const SG of ZG) wG.push(this.exportTextureAsync(SG));
        await Promise.all(wG), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", GG, bG)
      }
      _resizeTexturesToSameDimensions(GG, bG, ZG) {
        const wG = GG ? GG.getSize() : {
            width: 0,
            height: 0
          },
          SG = bG ? bG.getSize() : {
            width: 0,
            height: 0
          };
        let LG, yG;
        return wG.width < SG.width ? (LG = GG && GG instanceof oG.d ? EG.h.CreateResizedCopy(GG, SG.width, SG.height, !0) : mZ(SG.width, SG.height, ZG), yG = bG) : wG.width > SG.width ? (yG = bG && bG instanceof oG.d ? EG.h.CreateResizedCopy(bG, wG.width, wG.height, !0) : mZ(wG.width, wG.height, ZG), LG = GG) : (LG = GG, yG = bG), {
          texture1: LG,
          texture2: yG
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(GG, bG, ZG) {
        const wG = new Array;
        if (!GG && !bG) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const SG = GG ? GG.Dv() : bG ? bG.Dv() : null;
        if (SG) {
          const LG = this._resizeTexturesToSameDimensions(GG, bG, SG),
            yG = LG.texture1?.getSize();
          let kG, UG;
          const YG = yG.width,
            VG = yG.height,
            pG = await LG.texture1.readPixels(),
            fG = await LG.texture2.readPixels();
          if (!pG) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (kG = IZ(pG), !fG) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          UG = IZ(fG);
          const QG = UG.byteLength,
            KG = new Uint8Array(QG),
            hG = new Uint8Array(QG),
            JG = 4,
            rG = new dG.Color3(0, 0, 0);
          let zG = 0,
            EG = 0;
          for (let GG = 0; GG < VG; ++GG)
            for (let bG = 0; bG < YG; ++bG) {
              const wG = (YG * GG + bG) * JG,
                yG = {
                  diffuseColor: new dG.Color3(kG[wG], kG[wG + 1], kG[wG + 2]).toLinearSpace(SG.CK().useExactSrgbConversions).multiply(ZG.diffuseColor),
                  specularColor: new dG.Color3(UG[wG], UG[wG + 1], UG[wG + 2]).toLinearSpace(SG.CK().useExactSrgbConversions).multiply(ZG.specularColor),
                  glossiness: UG[wG + 3] * ZG.glossiness
                },
                VG = this._convertSpecularGlossinessToMetallicRoughness(yG);
              rG.r = Math.max(rG.r, VG.baseColor.r), rG.g = Math.max(rG.g, VG.baseColor.g), rG.b = Math.max(rG.b, VG.baseColor.b), zG = Math.max(zG, VG.metallic), EG = Math.max(EG, VG.roughness), hG[wG] = 255 * VG.baseColor.r, hG[wG + 1] = 255 * VG.baseColor.g, hG[wG + 2] = 255 * VG.baseColor.b, hG[wG + 3] = LG.texture1.hasAlpha ? 255 * kG[wG + 3] : 255, KG[wG] = 0, KG[wG + 1] = 255 * VG.roughness, KG[wG + 2] = 255 * VG.metallic, KG[wG + 3] = 255
            }
          const oG = {
            baseColor: rG,
            metallic: zG,
            roughness: EG
          };
          let XG = !1,
            uG = !1;
          for (let GG = 0; GG < VG; ++GG)
            for (let bG = 0; bG < YG; ++bG) {
              const ZG = (YG * GG + bG) * JG;
              hG[ZG] /= oG.baseColor.r > rZ ? oG.baseColor.r : 1, hG[ZG + 1] /= oG.baseColor.g > rZ ? oG.baseColor.g : 1, hG[ZG + 2] /= oG.baseColor.b > rZ ? oG.baseColor.b : 1;
              const wG = dG.Color3.FromInts(hG[ZG], hG[ZG + 1], hG[ZG + 2]).toGammaSpace(SG.CK().useExactSrgbConversions);
              hG[ZG] = 255 * wG.r, hG[ZG + 1] = 255 * wG.g, hG[ZG + 2] = 255 * wG.b, wG.equalsWithEpsilon(oZ, rZ) || (uG = !0), KG[ZG + 1] /= oG.roughness > rZ ? oG.roughness : 1, KG[ZG + 2] /= oG.metallic > rZ ? oG.metallic : 1;
              dG.Color3.FromInts(255, KG[ZG + 1], KG[ZG + 2]).equalsWithEpsilon(oZ, rZ) || (XG = !0)
            }
          return XG && wG.push((0, iG.EncodeImageAsync)(KG, YG, VG).then((GG => {
            oG.metallicRoughnessTextureData = GG
          }))), uG && wG.push((0, iG.EncodeImageAsync)(hG, YG, VG).then((GG => {
            oG.baseColorTextureData = GG
          }))), await Promise.all(wG).then((() => oG))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(GG) {
        const bG = this._getPerceivedBrightness(GG.diffuseColor),
          ZG = this._getPerceivedBrightness(GG.specularColor),
          wG = 1 - this._getMaxComponent(GG.specularColor),
          SG = iZ(bG, ZG, wG),
          LG = GG.diffuseColor.scale(wG / (1 - zZ.r) / Math.max(1 - SG, rZ)),
          yG = GG.specularColor.subtract(zZ.scale(1 - SG)).scale(1 / Math.max(SG, rZ));
        let kG = dG.Color3.Lerp(LG, yG, SG * SG);
        kG = kG.clampToRef(0, 1, kG);
        return {
          baseColor: kG,
          metallic: SG,
          roughness: 1 - GG.glossiness
        }
      }
      _getPerceivedBrightness(GG) {
        return Math.sqrt(.299 * GG.r * GG.r + .587 * GG.g * GG.g + .114 * GG.b * GG.b)
      }
      _getMaxComponent(GG) {
        return Math.max(GG.r, Math.max(GG.g, GG.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
        const YG = [],
          VG = {
            baseColor: GG,
            metallic: bG,
            roughness: ZG
          };
        if (UG)
          if (yG instanceof xb) {
            if (yG.geometryOpacityTexture) {
              const GG = wG && wG.getInternalTexture() ? wG.getInternalTexture().uniqueId : 0,
                bG = yG.geometryOpacityTexture && yG.geometryOpacityTexture.getInternalTexture() ? yG.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                ZG = Number(`${GG}${bG}`),
                SG = this._textureMap.get(ZG);
              SG ? kG.baseColorTexture = SG : YG.push(yZ("baseColorOpacityTexture", YZ(wG ? kZ(wG, 0) : UZ(1), wG ? kZ(wG, 1) : UZ(1), wG ? kZ(wG, 2) : UZ(1), kZ(yG.geometryOpacityTexture, 0)), yG.Dv()).then((async GG => {
                const bG = await this.exportTextureAsync(GG, ZG);
                bG && (kG.baseColorTexture = bG)
              })))
            } else wG && YG.push(this.exportTextureAsync(wG).then((GG => {
              GG && (kG.baseColorTexture = GG)
            })));
            if (yG._useMetallicFromMetallicTextureBlue && SG) YG.push(this.exportTextureAsync(SG).then((GG => {
              GG && (kG.metallicRoughnessTexture = GG)
            })));
            else if (LG || SG) {
              const GG = SG && SG.getInternalTexture() ? SG.getInternalTexture().uniqueId : 0,
                bG = LG && LG.getInternalTexture() ? LG.getInternalTexture().uniqueId : 0,
                ZG = Number(`${GG}${bG}`),
                wG = this._textureMap.get(ZG);
              wG ? kG.metallicRoughnessTexture = wG : YG.push(yZ("MetalRoughTexture", YZ(yG.ambientOcclusionTexture ? kZ(yG.ambientOcclusionTexture, 0) : UZ(1), LG ? kZ(LG, 0) : UZ(1), SG ? kZ(SG, 0) : UZ(1)), yG.Dv()).then((async GG => {
                const bG = await this.exportTextureAsync(GG, ZG);
                bG && (kG.metallicRoughnessTexture = bG)
              })))
            }
          } else wG && YG.push(this.exportTextureAsync(wG).then((GG => {
            GG && (kG.baseColorTexture = GG)
          }))), SG && YG.push(this.exportTextureAsync(SG).then((GG => {
            GG && (kG.metallicRoughnessTexture = GG)
          })));
        return YG.length > 0 && (this._exporter._materialNeedsUVsSet.add(yG), await Promise.all(YG)), VG
      }
      _getTextureSampler(GG) {
        const bG = {};
        if (!GG || !(GG instanceof oG.d)) return bG;
        const ZG = this._getGLTFTextureWrapMode(GG.wrapU);
        10497 !== ZG && (bG.wrapS = ZG);
        const wG = this._getGLTFTextureWrapMode(GG.wrapV);
        switch (10497 !== wG && (bG.wrapT = wG), GG.samplingMode) {
          case oG.d.LINEAR_LINEAR:
            bG.magFilter = 9729, bG.minFilter = 9729;
            break;
          case oG.d.LINEAR_NEAREST:
            bG.magFilter = 9729, bG.minFilter = 9728;
            break;
          case oG.d.NEAREST_LINEAR:
            bG.magFilter = 9728, bG.minFilter = 9729;
            break;
          case oG.d.NEAREST_LINEAR_MIPLINEAR:
            bG.magFilter = 9728, bG.minFilter = 9987;
            break;
          case oG.d.NEAREST_NEAREST:
            bG.magFilter = 9728, bG.minFilter = 9728;
            break;
          case oG.d.NEAREST_LINEAR_MIPNEAREST:
            bG.magFilter = 9728, bG.minFilter = 9985;
            break;
          case oG.d.LINEAR_NEAREST_MIPNEAREST:
            bG.magFilter = 9729, bG.minFilter = 9984;
            break;
          case oG.d.LINEAR_NEAREST_MIPLINEAR:
            bG.magFilter = 9729, bG.minFilter = 9986;
            break;
          case oG.d.NEAREST_NEAREST_MIPLINEAR:
            bG.magFilter = 9728, bG.minFilter = 9986;
            break;
          case oG.d.LINEAR_LINEAR_MIPLINEAR:
            bG.magFilter = 9729, bG.minFilter = 9987;
            break;
          case oG.d.LINEAR_LINEAR_MIPNEAREST:
            bG.magFilter = 9729, bG.minFilter = 9985;
            break;
          case oG.d.NEAREST_NEAREST_MIPNEAREST:
            bG.magFilter = 9728, bG.minFilter = 9984
        }
        return bG
      }
      _getGLTFTextureWrapMode(GG) {
        switch (GG) {
          case oG.d.WRAP_ADDRESSMODE:
            return 10497;
          case oG.d.CLAMP_ADDRESSMODE:
            return 33071;
          case oG.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return SG.Tools.Error(`Unsupported Texture Wrap Mode ${GG}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(GG, bG, ZG) {
        const wG = {
            diffuseColor: GG._albedoColor,
            specularColor: GG._reflectivityColor,
            glossiness: GG._microSurface
          },
          SG = GG._albedoTexture,
          LG = GG._reflectivityTexture,
          yG = GG._useMicroSurfaceFromReflectivityMapAlpha;
        if (LG && !yG) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((SG || LG) && ZG) {
          this._exporter._materialNeedsUVsSet.add(GG);
          const ZG = this._exportTextureSampler(SG || LG),
            yG = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(SG, LG, wG),
            kG = this._exporter._textures;
          if (yG.baseColorTextureData) {
            const GG = await this._exportImageAsync(`baseColor${kG.length}`, yG.baseColorTextureData);
            bG.baseColorTexture = this._exportTextureInfo(GG, ZG, SG?.coordinatesIndex)
          }
          if (yG.metallicRoughnessTextureData) {
            const GG = await this._exportImageAsync(`metallicRoughness${kG.length}`, yG.metallicRoughnessTextureData);
            bG.metallicRoughnessTexture = this._exportTextureInfo(GG, ZG, LG?.coordinatesIndex)
          }
          return yG
        }
        return this._convertSpecularGlossinessToMetallicRoughness(wG)
      }
      async exportPBRMaterialAsync(GG, bG) {
        const ZG = {},
          wG = {
            name: GG.name
          },
          SG = GG.isMetallicWorkflow();
        if (SG) {
          const bG = GG._albedoColor,
            wG = GG.alpha;
          bG && (ZG.baseColorFactor = [bG.r, bG.g, bG.b, wG])
        }
        const LG = SG ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(GG._albedoColor, GG._metallic, GG._roughness, GG._albedoTexture, GG._metallicTexture, GG._metallicTexture, GG, ZG, bG) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(GG, ZG, bG);
        await this._setMetallicRoughnessPbrMaterialAsync(LG, GG, wG, ZG, bG), await this._finishMaterialAsync(wG, GG);
        const yG = this._exporter._materials;
        return yG.push(wG), yG.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(GG, bG, ZG, wG, LG) {
        if (WZ(ZG, bG), GG.baseColor.equalsWithEpsilon(oZ, rZ) && zG.WithinEpsilon(bG.alpha, 1, rZ) || (wG.baseColorFactor = [GG.baseColor.r, GG.baseColor.g, GG.baseColor.b, bG.alpha]), null != GG.metallic && 1 !== GG.metallic && (wG.metallicFactor = GG.metallic), null != GG.roughness && 1 !== GG.roughness && (wG.roughnessFactor = GG.roughness), null == bG.backFaceCulling || bG.backFaceCulling || (bG._twoSidedLighting || SG.Tools.Warn(bG.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ZG.doubleSided = !0), LG) {
          const GG = [],
            SG = bG instanceof Xb ? bG._bumpTexture : bG.geometryNormalTexture;
          SG && GG.push(this.exportTextureAsync(SG).then((GG => {
            GG && (ZG.normalTexture = GG, 1 !== SG.level && (ZG.normalTexture.scale = SG.level))
          })));
          const LG = bG instanceof Xb ? bG._ambientTexture : bG.ambientOcclusionTexture;
          LG && GG.push(new Promise((async GG => {
            if (bG instanceof xb && wG.metallicRoughnessTexture) {
              const bG = this._exportTextureSampler(LG),
                ZG = this._exporter._textures[wG.metallicRoughnessTexture.index].source,
                SG = this._exportTextureInfo(ZG, bG, LG.coordinatesIndex);
              return this._textureMap.set(LG.uniqueId, SG), this._exporter._extensionsPostExportTextures("exporter", SG, LG), GG(SG)
            }
            return GG(await this.exportTextureAsync(LG))
          })).then((async GG => {
            if (GG) {
              const wG = {
                index: GG.index,
                texCoord: GG.texCoord,
                extensions: GG.extensions
              };
              ZG.occlusionTexture = wG, wG.strength = bG instanceof Xb ? bG._ambientTextureStrength : bG.ambientOcclusionTexture.level
            }
          })));
          const yG = bG instanceof Xb ? bG._emissiveTexture : bG.emissionColorTexture;
          yG && GG.push(this.exportTextureAsync(yG).then((GG => {
            GG && (ZG.emissiveTexture = GG)
          }))), GG.length > 0 && (this._exporter._materialNeedsUVsSet.add(bG), await Promise.all(GG))
        }
        const yG = bG instanceof Xb ? bG._emissiveColor : bG.emissionColor;
        yG.equalsWithEpsilon(XZ, rZ) || (ZG.emissiveFactor = yG.mwG()), ZG.pbrMetallicRoughness = wG
      }
      async exportOpenPBRMaterialAsync(GG, bG) {
        const ZG = {},
          wG = {
            name: GG.name
          },
          SG = GG.baseColor,
          LG = GG.geometryOpacity;
        SG && (ZG.baseColorFactor = [SG.r, SG.g, SG.b, LG]);
        const yG = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(GG.baseColor, GG.baseMetalness, GG.specularRoughness, GG.baseColorTexture, GG.baseMetalnessTexture, GG.specularRoughnessTexture, GG, ZG, bG);
        await this._setMetallicRoughnessPbrMaterialAsync(yG, GG, wG, ZG, bG), await this._finishMaterialAsync(wG, GG);
        const kG = this._exporter._materials;
        return kG.push(wG), kG.length - 1
      }
      async exportTextureAsync(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = this._textureMap.get(bG ?? GG.uniqueId);
        if (ZG) return ZG;
        const wG = this._exportTextureSampler(GG),
          SG = await this._exportTextureImageAsync(GG);
        return ZG = this._exportTextureInfo(SG, wG, GG.coordinatesIndex), this._textureMap.set(bG ?? GG.uniqueId, ZG), this._exporter._extensionsPostExportTextures("exporter", ZG, GG), ZG
      }
      async _exportTextureImageAsync(GG) {
        const bG = GG.mimeType ?? "none",
          ZG = this._internalTextureToImage,
          wG = GG.getInternalTexture().uniqueId;
        ZG[wG] = ZG[wG] || {};
        let LG = ZG[wG][bG];
        return void 0 === LG && (LG = (async () => {
          const ZG = await JZ(GG);
          if (ZG && uZ(ZG.mimeType) && ("none" === bG || ZG.mimeType === bG)) return await this._exportImageAsync(GG.name, new Blob([ZG.data], {
            type: ZG.mimeType
          }));
          let wG = "image/png";
          "none" !== bG && (uZ(bG) ? wG = bG : (wG = "image/png", SG.Tools.Warn(`Unsupported media type: ${bG}. Exporting texture as PNG.`)));
          const LG = GG.getSize(),
            yG = await (0, EG.f)(GG),
            kG = await (0, iG.EncodeImageAsync)(yG, LG.width, LG.height, wG);
          return await this._exportImageAsync(GG.name, kG)
        })(), ZG[wG][bG] = LG), await LG
      }
      async _exportImageAsync(GG, bG) {
        const ZG = this._exporter._images;
        let wG;
        if (this._exporter._shouldUseGlb) {
          wG = {
            name: GG,
            mimeType: bG.type,
            bufferView: void 0
          };
          const ZG = await bG.arrayBuffer(),
            SG = this._exporter._bufferManager.createBufferView(new Uint8Array(ZG));
          this._exporter._bufferManager.setBufferView(wG, SG)
        } else {
          const LG = GG.replace(/\.\/|\/|\.\\|\\/g, "_"),
            yG = function(GG) {
              switch (GG) {
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
            }(bG.type);
          let kG = LG + yG;
          ZG.some((GG => GG.uri === kG)) && (kG = `${LG}_${SG.Tools.RandomId()}${yG}`), wG = {
            name: GG,
            uri: kG
          }, this._exporter._imageData[kG] = bG
        }
        return ZG.push(wG), ZG.length - 1
      }
      _exportTextureInfo(GG, bG, ZG) {
        const wG = this._exporter._textures;
        let SG = wG.findIndex((ZG => ZG.sampler == bG && ZG.source === GG)); - 1 === SG && (SG = wG.length, wG.push({
          source: GG,
          sampler: bG
        }));
        const LG = {
          index: SG
        };
        return ZG && (LG.texCoord = ZG), LG
      }
      _exportTextureSampler(GG) {
        const bG = this._getTextureSampler(GG),
          ZG = this._exporter._samplers,
          wG = ZG.findIndex((GG => GG.minFilter === bG.minFilter && GG.magFilter === bG.magFilter && GG.wrapS === bG.wrapS && GG.wrapT === bG.wrapT));
        return -1 !== wG ? wG : (ZG.push(bG), ZG.length - 1)
      }
    }
    var vZ = ZG(40447),
      aZ = ZG(40585);
    (0, aZ.b)();
    var cZ = ZG(37443);
    const lZ = wG.Matrix.Compose(new wG.mK(-1, 1, 1), wG.Quaternion.Identity(), wG.mK.Zero());

    function jZ(GG, bG) {
      if (!(GG instanceof pG.d)) return !1;
      if (bG) {
        if (!GG.getWorldMatrix().equalsWithEpsilon(wG.Matrix.IdentityReadOnly, cZ.d)) return !1
      } else {
        if (!GG.getWorldMatrix().multiplyToRef(lZ, wG.TmpVectors.Matrix[0]).equalsWithEpsilon(wG.Matrix.IdentityReadOnly, cZ.d)) return !1
      }
      return !(GG instanceof fG.d && GG.geometry)
    }
    const PZ = wG.mK.ZeroReadOnly,
      MZ = wG.Quaternion.Identity(),
      AZ = wG.mK.OneReadOnly,
      sZ = new wG.mK(-1, 1, 1);

    function qZ(GG, bG) {
      const {
        byteOffset: ZG,
        byteStride: wG,
        type: SG,
        normalized: LG
      } = GG, yG = GG.getSize(), kG = bG.reduce(((GG, bG) => bG.getTotalVertices() > GG ? bG.getTotalVertices() : GG), -Number.MAX_VALUE);
      return {
        byteOffset: ZG,
        byteStride: wG,
        componentCount: yG,
        type: SG,
        count: kG * yG,
        normalized: LG,
        totalVertices: kG,
        kind: GG.getKind()
      }
    }

    function nZ(GG) {
      switch (GG) {
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

    function gZ(GG) {
      switch (GG) {
        case VG.c.PositionKind:
        case VG.c.NormalKind:
        case VG.c.TangentKind:
        case VG.c.ColorKind:
        case VG.c.MatricesIndicesKind:
        case VG.c.MatricesIndicesExtraKind:
        case VG.c.MatricesWeightsKind:
        case VG.c.MatricesWeightsExtraKind:
        case VG.c.UVKind:
        case VG.c.UV2Kind:
        case VG.c.UV3Kind:
        case VG.c.UV4Kind:
        case VG.c.UV5Kind:
        case VG.c.UV6Kind:
          return !0
      }
      return !1
    }

    function eZ(GG) {
      const bG = Math.sqrt(GG.x * GG.x + GG.y * GG.y + GG.z * GG.z);
      bG > 0 && (GG.x /= bG, GG.y /= bG, GG.z /= bG)
    }

    function RZ(GG) {
      return GG.x *= -1, GG
    }

    function TZ(GG) {
      if (GG.x * GG.x + GG.y * GG.y > .5) {
        const bG = Math.abs(GG.x),
          ZG = Math.abs(GG.y);
        if (bG > ZG) {
          const ZG = Math.sign(GG.x);
          GG.x = bG, GG.y *= -ZG, GG.z *= -ZG, GG.w *= ZG
        } else {
          const bG = Math.sign(GG.y);
          GG.x *= -bG, GG.y = ZG, GG.z *= bG, GG.w *= -bG
        }
      } else {
        const bG = Math.abs(GG.z),
          ZG = Math.abs(GG.w);
        if (bG > ZG) {
          const ZG = Math.sign(GG.z);
          GG.x *= -ZG, GG.y *= ZG, GG.z = bG, GG.w *= -ZG
        } else {
          const bG = Math.sign(GG.w);
          GG.x *= bG, GG.y *= -bG, GG.z *= -bG, GG.w = ZG
        }
      }
      return GG
    }

    function HZ(GG) {
      GG.fGG(-GG.z, GG.w, GG.x, -GG.y)
    }

    function tZ(GG, bG) {
      const ZG = wG.mK.FromArrayToRef(bG.translation || [0, 0, 0], 0, wG.TmpVectors.mK[0]),
        SG = wG.Quaternion.FromArrayToRef(bG.rotation || [0, 0, 0, 1], 0, wG.TmpVectors.Quaternion[0]),
        LG = wG.Matrix.ComposeToRef(AZ, SG, ZG, wG.TmpVectors.Matrix[0]),
        yG = wG.mK.FromArrayToRef(GG.translation || [0, 0, 0], 0, wG.TmpVectors.mK[2]),
        kG = wG.Quaternion.FromArrayToRef(GG.rotation || [0, 0, 0, 1], 0, wG.TmpVectors.Quaternion[1]),
        UG = wG.Matrix.ComposeToRef(AZ, kG, yG, wG.TmpVectors.Matrix[1]);
      LG.multiplyToRef(UG, UG), UG.decompose(void 0, SG, ZG), ZG.equalsWithEpsilon(PZ, cZ.d) ? delete bG.translation : bG.translation = ZG.mwG(), SG.equalsWithEpsilon(MZ, cZ.d) ? delete bG.rotation : bG.rotation = SG.mwG(), bG.scale && delete bG.scale
    }

    function DZ(GG, bG) {
      if (!(bG instanceof pG.d)) return !1;
      if (!(1 === bG.getChildren().length && 0 === GG.getChildren().length && GG.parent === bG)) return !1;
      const ZG = GG.Dv(),
        wG = GG instanceof aZ.e && !ZG.useRightHandedSystem ? sZ : AZ;
      return !!bG.nY.equalsWithEpsilon(wG, cZ.d) || (mG.c.Warn(`Cannot collapse node ${GG.name} into parent node ${bG.name} with modified scaling.`), !1)
    }

    function NZ(GG) {
      if (GG instanceof Array) {
        const bG = new Float32Array(GG);
        return new Uint8Array(bG.buffer, bG.byteOffset, bG.byteLength)
      }
      return ArrayBuffer.isView(GG) ? new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength) : new Uint8Array(GG)
    }

    function OZ(GG, bG) {
      for (const [ZG, wG] of Object.entries(GG)) {
        const SG = bG[ZG];
        (Array.isArray(wG) && Array.isArray(SG) && xZ(wG, SG) || wG === SG) && delete GG[ZG]
      }
      return GG
    }

    function xZ(GG, bG) {
      return GG.length === bG.length && GG.every(((GG, ZG) => GG === bG[ZG]))
    }
    const BZ = new Map([
      [Int8Array, (GG, bG, ZG) => GG.setInt8(bG, ZG)],
      [Uint8Array, (GG, bG, ZG) => GG.setUint8(bG, ZG)],
      [Uint8ClampedArray, (GG, bG, ZG) => GG.setUint8(bG, ZG)],
      [Int16Array, (GG, bG, ZG) => GG.setInt16(bG, ZG, !0)],
      [Uint16Array, (GG, bG, ZG) => GG.setUint16(bG, ZG, !0)],
      [Int32Array, (GG, bG, ZG) => GG.setInt32(bG, ZG, !0)],
      [Uint32Array, (GG, bG, ZG) => GG.setUint32(bG, ZG, !0)],
      [Float32Array, (GG, bG, ZG) => GG.setFloat32(bG, ZG, !0)],
      [Float64Array, (GG, bG, ZG) => GG.setFloat64(bG, ZG, !0)]
    ]);
    class Gw {
      writeTypedArray(GG) {
        this._checkGrowBuffer(GG.byteLength);
        const bG = BZ.get(GG.constructor);
        for (let ZG = 0; ZG < GG.length; ZG++) bG(this._dataView, this._byteOffset, GG[ZG]), this._byteOffset += GG.BYTES_PER_ELEMENT
      }
      constructor(GG) {
        this._data = new Uint8Array(GG), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(GG) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, GG), this._byteOffset++
      }
      writeInt8(GG) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, GG), this._byteOffset++
      }
      writeInt16(GG) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, GG, !0), this._byteOffset += 2
      }
      writeUInt16(GG) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, GG, !0), this._byteOffset += 2
      }
      writeInt32(GG) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, GG, !0), this._byteOffset += 4
      }
      writeUInt32(GG) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, GG, !0), this._byteOffset += 4
      }
      writeFloat32(GG) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, GG, !0), this._byteOffset += 4
      }
      writeFloat64(GG) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, GG, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(GG) {
        const bG = this.byteOffset + GG;
        if (bG > this._data.byteLength) {
          const GG = new Uint8Array(2 * bG);
          GG.set(this._data), this._data = GG, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function bw(GG) {
      return GG % 4 === 0 ? 4 : GG % 2 === 0 ? 2 : 1
    }
    class Zw {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(GG) {
        let bG = 0;
        this._bufferViewToData.forEach((GG => {
          bG += GG.byteLength
        }));
        const ZG = new Gw(bG),
          wG = Array.from(this._bufferViewToData.keys()).sort(((GG, bG) => bw(bG.byteLength) - bw(GG.byteLength)));
        for (const SG of wG) {
          SG.byteOffset = ZG.byteOffset, GG.push(SG);
          const bG = GG.length - 1,
            wG = this.getPropertiesWithBufferView(SG);
          for (const GG of wG) GG.bufferView = bG;
          ZG.writeTypedArray(this._bufferViewToData.get(SG)), this._bufferViewToData.delete(SG)
        }
        return ZG.getOutputData()
      }
      createBufferView(GG, bG) {
        const ZG = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: GG.byteLength,
          byteStride: bG
        };
        return this._bufferViewToData.set(ZG, GG), ZG
      }
      createAccessor(GG, bG, ZG, wG, SG, LG, yG) {
        this._verifyBufferView(GG);
        const kG = {
          bufferView: void 0,
          componentType: ZG,
          count: wG,
          type: bG,
          min: LG?.min,
          max: LG?.max,
          normalized: yG,
          byteOffset: SG
        };
        return this.setBufferView(kG, GG), this._accessorToBufferView.set(kG, GG), kG
      }
      setBufferView(GG, bG) {
        this._verifyBufferView(bG);
        this.getPropertiesWithBufferView(bG).push(GG)
      }
      removeBufferView(GG) {
        const bG = this.getPropertiesWithBufferView(GG);
        for (const ZG of bG) void 0 !== ZG.bufferView && delete ZG.bufferView;
        this._bufferViewToData.delete(GG), this._bufferViewToProperties.delete(GG), this._accessorToBufferView.forEach(((bG, ZG) => {
          bG === GG && (void 0 !== ZG.byteOffset && delete ZG.byteOffset, this._accessorToBufferView.delete(ZG))
        }))
      }
      getBufferView(GG) {
        const bG = this._accessorToBufferView.get(GG);
        return this._verifyBufferView(bG), bG
      }
      getPropertiesWithBufferView(GG) {
        return this._verifyBufferView(GG), this._bufferViewToProperties.set(GG, this._bufferViewToProperties.get(GG) ?? []), this._bufferViewToProperties.get(GG)
      }
      getData(GG) {
        return this._verifyBufferView(GG), this._bufferViewToData.get(GG)
      }
      _verifyBufferView(GG) {
        if (void 0 === GG || !this._bufferViewToData.has(GG)) throw new Error(`BufferView ${GG} not found in BufferManager.`)
      }
    }
    var ww = ZG(40592);
    (0, ww.h)();
    var Sw = ZG(40828);
    (0, Sw.e)();
    var Lw = ZG(40644),
      yw = ZG(41487);
    (0, yw.f)();
    let kw = (() => {
      var GG;
      let bG, ZG, wG = [],
        SG = [],
        LG = [],
        yG = [];
      return GG = class {
        get influence() {
          return this._influence
        }
        set influence(GG) {
          if (this._influence === GG) return;
          const bG = this._influence;
          this._influence = GG, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === bG || 0 === GG)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(GG) {
          this._animationPropertiesOverride = GG
        }
        constructor(GG) {
          let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            kG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = GG, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new GZ.c, this._onDataLayoutChanged = new GZ.c, this.id = (0, CG.n)(this, wG, void 0), this.morphTargetManager = ((0, CG.n)(this, SG), (0, CG.n)(this, LG, null)), this._animationPropertiesOverride = ((0, CG.n)(this, yG), null), this.id = GG, this.morphTargetManager = kG, this._scene = ZG || hG.c.LastCreatedScene, this.influence = bG, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        GkG(GG) {
          const bG = this.hasPositions;
          this._positions = GG, bG !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(GG) {
          const bG = this.hasNormals;
          this._normals = GG, bG !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(GG) {
          const bG = this.hasTangents;
          this._tangents = GG, bG !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(GG) {
          const bG = this.hasUVs;
          this._uvs = GG, bG !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(GG) {
          const bG = this.hasUV2s;
          this._uv2s = GG, bG !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(GG) {
          const bG = this.hasColors;
          this._colors = GG, bG !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const bG = ub.b.Clone((() => new GG(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return bG._positions = this._positions, bG._normals = this._normals, bG._tangents = this._tangents, bG._uvs = this._uvs, bG._uv2s = this._uv2s, bG._colors = this._colors, bG
        }
        serialize() {
          const GG = {};
          return GG.name = this.name, GG.influence = this.influence, null != this.id && (GG.id = this.id), GG.uniqueId = this.uniqueId, GG.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (GG.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (GG.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (GG.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (GG.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (GG.colors = Array.prototype.slice.call(this.getColors())), ub.b.AppendSerializedAnimations(this, GG), GG
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(bG, ZG) {
          let wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const SG = new GG(bG.name, bG.influence, ZG, wG);
          if (SG.GkG(bG.positions), null != bG.id && (SG.id = bG.id), bG.normals && SG.setNormals(bG.normals), bG.tangents && SG.setTangents(bG.tangents), bG.uvs && SG.setUVs(bG.uvs), bG.uv2s && SG.setUV2s(bG.uv2s), bG.colors && SG.setColors(bG.colors), bG.animations) {
            for (let GG = 0; GG < bG.animations.length; GG++) {
              const ZG = bG.animations[GG],
                wG = (0, nb.e)("BABYLON.Animation");
              wG && SG.animations.push(wG.Parse(ZG))
            }
            bG.autoAnimate && ZG && ZG.beginAnimation(SG, bG.autoAnimateFrom, bG.autoAnimateTo, bG.autoAnimateLoop, bG.autoAnimateSpeed || 1)
          }
          return SG
        }
        static FromMesh(bG, ZG, wG) {
          ZG || (ZG = bG.name);
          const SG = new GG(ZG, wG, bG.Dv(), bG.morphTargetManager);
          return SG.GkG(bG.getVerticesData(sG.l.PositionKind)), bG.isVerticesDataPresent(sG.l.NormalKind) && SG.setNormals(bG.getVerticesData(sG.l.NormalKind)), bG.isVerticesDataPresent(sG.l.TangentKind) && SG.setTangents(bG.getVerticesData(sG.l.TangentKind)), bG.isVerticesDataPresent(sG.l.UVKind) && SG.setUVs(bG.getVerticesData(sG.l.UVKind)), bG.isVerticesDataPresent(sG.l.UV2Kind) && SG.setUV2s(bG.getVerticesData(sG.l.UV2Kind)), bG.isVerticesDataPresent(sG.l.ColorKind) && SG.setColors(bG.getVerticesData(sG.l.ColorKind)), SG
        }
      }, (() => {
        const kG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        bG = [(0, WG.Q)()], ZG = [(0, WG.Q)()], (0, CG.k)(null, null, bG, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: GG => "id" in GG,
            get: GG => GG.id,
            set: (GG, bG) => {
              GG.id = bG
            }
          },
          metadata: kG
        }, wG, SG), (0, CG.k)(null, null, ZG, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: GG => "morphTargetManager" in GG,
            get: GG => GG.morphTargetManager,
            set: (GG, bG) => {
              GG.morphTargetManager = bG
            }
          },
          metadata: kG
        }, LG, yG), kG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kG
        })
      })(), GG
    })();
    var Uw, Yw = ZG(41560),
      Vw = ZG(40635);
    ! function(GG) {
      GG[GG.INTANGENT = 0] = "INTANGENT", GG[GG.OUTTANGENT = 1] = "OUTTANGENT"
    }(Uw || (Uw = {}));
    class pw {
      static _IsTransformable(GG) {
        return GG && (GG instanceof pG.d || GG instanceof ww.d || GG instanceof Vw.c)
      }
      static _CreateNodeAnimation(GG, bG, ZG, wG, LG) {
        if (this._IsTransformable(GG)) {
          const yG = [],
            kG = [],
            UG = bG.getKeys(),
            YG = pw._CalculateMinMaxKeyFrames(UG),
            VG = pw._DeduceInterpolation(UG, ZG, wG),
            pG = VG.interpolationType,
            fG = VG.shouldBakeAnimation;
          if (fG ? pw._CreateBakedAnimation(GG, bG, ZG, YG.min, YG.max, bG.framePerSecond, LG, yG, kG, YG, wG) : "LINEAR" === pG || "STEP" === pG ? pw._CreateLinearOrStepAnimation(GG, bG, ZG, yG, kG, wG) : "CUBICSPLINE" === pG ? pw._CreateCubicSplineAnimation(GG, bG, ZG, yG, kG, wG) : pw._CreateBakedAnimation(GG, bG, ZG, YG.min, YG.max, bG.framePerSecond, LG, yG, kG, YG, wG), yG.length && kG.length) {
            return {
              inputs: yG,
              outputs: kG,
              samplerInterpolation: pG,
              inputsMin: fG ? YG.min : SG.Tools.FloatRound(YG.min / bG.framePerSecond),
              inputsMax: fG ? YG.max : SG.Tools.FloatRound(YG.max / bG.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(GG) {
        let bG = null,
          ZG = "VEC3",
          wG = !1;
        const LG = GG.targetProperty.split(".");
        switch (LG[0]) {
          case "nY":
            bG = "scale";
            break;
          case "position":
            bG = "translation";
            break;
          case "rotation":
            ZG = "VEC4", bG = "rotation";
            break;
          case "rotationQuaternion":
            ZG = "VEC4", wG = !0, bG = "rotation";
            break;
          case "influence":
            ZG = "SCALAR", bG = "weights";
            break;
          default:
            SG.Tools.Error(`Unsupported animatable property ${LG[0]}`)
        }
        return bG ? {
          animationChannelTargetPath: bG,
          dataAccessorType: ZG,
          useQuaternion: wG
        } : (SG.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
        let pG;
        if (pw._IsTransformable(GG) && GG.animations)
          for (const fG of GG.animations) {
            if (VG && !VG(fG)) continue;
            const SG = pw._DeduceAnimationInfo(fG);
            SG && (pG = {
              name: fG.name,
              samplers: [],
              channels: []
            }, pw._AddAnimation(`${fG.name}`, fG.hasRunningRuntimeAnimations ? bG : pG, GG, fG, SG.dataAccessorType, SG.animationChannelTargetPath, wG, LG, yG, kG, SG.useQuaternion, UG, YG), pG.samplers.length && pG.channels.length && ZG.push(pG))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
        let pG;
        if (GG instanceof Yw.d) {
          const SG = GG.morphTargetManager;
          if (SG)
            for (let fG = 0; fG < SG.numTargets; ++fG) {
              const QG = SG.getTarget(fG);
              for (const KG of QG.animations) {
                if (VG && !VG(KG)) continue;
                const QG = new yw.d(`${KG.name}`, "influence", KG.framePerSecond, KG.dataType, KG.Dw, KG.enableBlending),
                  hG = [],
                  dG = KG.getKeys();
                for (let GG = 0; GG < dG.length; ++GG) {
                  const bG = dG[GG];
                  for (let GG = 0; GG < SG.numTargets; ++GG) GG == fG ? hG.push(bG) : hG.push({
                    frame: bG.frame,
                    value: 0
                  })
                }
                QG.setKeys(hG, !0);
                const JG = pw._DeduceAnimationInfo(QG);
                JG && (pG = {
                  name: QG.name,
                  samplers: [],
                  channels: []
                }, pw._AddAnimation(KG.name, KG.hasRunningRuntimeAnimations ? bG : pG, GG, QG, JG.dataAccessorType, JG.animationChannelTargetPath, wG, LG, yG, kG, JG.useQuaternion, UG, YG, SG.numTargets), pG.samplers.length && pG.channels.length && ZG.push(pG))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
        let VG;
        if (GG.animationGroups) {
          const pG = GG.animationGroups;
          for (const fG of pG) {
            const pG = new Map,
              QG = new Map,
              KG = new Set,
              hG = fG.to - fG.from;
            VG = {
              name: fG.name,
              channels: [],
              samplers: []
            };
            for (let bG = 0; bG < fG.targetedAnimations.length; ++bG) {
              const YG = fG.targetedAnimations[bG],
                hG = YG.target,
                dG = YG.animation;
              if (UG && !UG(dG)) continue;
              const JG = kG.has(hG);
              if (this._IsTransformable(hG) || 1 === hG.length && this._IsTransformable(hG[0])) {
                const GG = pw._DeduceAnimationInfo(YG.animation);
                if (GG) {
                  const bG = this._IsTransformable(hG) ? hG : this._IsTransformable(hG[0]) ? hG[0] : null;
                  bG && pw._AddAnimation(`${dG.name}`, VG, bG, dG, GG.dataAccessorType, GG.animationChannelTargetPath, ZG, wG, SG, LG, GG.useQuaternion, yG, JG)
                }
              } else if (hG instanceof kw || 1 === hG.length && hG[0] instanceof kw) {
                if (pw._DeduceAnimationInfo(YG.animation)) {
                  const bG = hG instanceof kw ? hG : hG[0];
                  if (bG) {
                    const ZG = GG.morphTargetManagers.find((GG => {
                      for (let ZG = 0; ZG < GG.numTargets; ++ZG)
                        if (GG.getTarget(ZG) === bG) return !0;
                      return !1
                    }));
                    if (ZG) {
                      const wG = GG.meshes.find((GG => GG.morphTargetManager === ZG));
                      wG && (pG.has(wG) || pG.set(wG, new Map), pG.get(wG)?.set(bG, dG), KG.add(wG), QG.set(wG, dG))
                    }
                  }
                }
              }
            }
            KG.forEach((GG => {
              const bG = GG.morphTargetManager;
              let kG = null;
              const UG = [],
                YG = QG.get(GG).getKeys(),
                KG = YG.length;
              for (let ZG = 0; ZG < KG; ++ZG)
                for (let wG = 0; wG < bG.numTargets; ++wG) {
                  const SG = bG.getTarget(wG),
                    LG = pG.get(GG);
                  if (LG) {
                    const bG = LG.get(SG);
                    bG ? (kG || (kG = new yw.d(`${fG.name}_${GG.name}_MorphWeightAnimation`, "influence", bG.framePerSecond, yw.d.ANIMATIONTYPE_FLOAT, bG.Dw, bG.enableBlending)), UG.push(bG.getKeys()[ZG])) : UG.push({
                      frame: fG.from + hG / KG * ZG,
                      value: SG.influence,
                      inTangent: YG[0].inTangent ? 0 : void 0,
                      outTangent: YG[0].outTangent ? 0 : void 0
                    })
                  }
                }
              kG.setKeys(UG, !0);
              const dG = pw._DeduceAnimationInfo(kG);
              dG && pw._AddAnimation(`${fG.name}_${GG.name}_MorphWeightAnimation`, VG, GG, kG, dG.dataAccessorType, dG.animationChannelTargetPath, ZG, wG, SG, LG, dG.useQuaternion, yG, !1, bG?.numTargets)
            })), VG.channels.length && VG.samplers.length && (YG?.set(fG, bG.length), bG.push(VG))
          }
        }
      }
      static _AddAnimation(GG, bG, ZG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG) {
        const hG = pw._CreateNodeAnimation(ZG, SG, yG, pG, fG);
        let dG, JG, rG, zG, EG, oG;
        if (hG) {
          if (KG) {
            let GG, bG = 0;
            const ZG = [];
            for (; hG.inputs.length > 0;) GG = hG.inputs.shift(), bG % KG == 0 && ZG.push(GG), bG++;
            hG.inputs = ZG
          }
          const GG = kG.get(ZG),
            SG = new Float32Array(hG.inputs);
          dG = UG.createBufferView(SG), JG = UG.createAccessor(dG, "SCALAR", 5126, hG.inputs.length, void 0, {
            min: [hG.inputsMin],
            max: [hG.inputsMax]
          }), VG.push(JG), rG = VG.length - 1;
          const YG = new wG.Quaternion,
            pG = new wG.mK,
            fG = new wG.mK,
            XG = ZG instanceof ww.d,
            uG = nZ(LG),
            iG = new Float32Array(hG.outputs.length * uG);
          hG.outputs.forEach((function(GG, bG) {
            let ZG = GG;
            switch (yG) {
              case "translation":
                QG && (wG.mK.FromArrayToRef(GG, 0, fG), RZ(fG), fG.toArray(ZG));
                break;
              case "rotation":
                4 === GG.length ? wG.Quaternion.FromArrayToRef(GG, 0, YG) : (ZG = new Array(4), wG.mK.FromArrayToRef(GG, 0, pG), wG.Quaternion.FromEulerVectorToRef(pG, YG)), QG && (TZ(YG), XG && HZ(YG)), YG.toArray(ZG)
            }
            iG.set(ZG, bG * uG)
          })), dG = UG.createBufferView(iG), JG = UG.createAccessor(dG, LG, 5126, hG.outputs.length), VG.push(JG), zG = VG.length - 1, EG = {
            interpolation: hG.samplerInterpolation,
            input: rG,
            output: zG
          }, bG.samplers.push(EG), oG = {
            sampler: bG.samplers.length - 1,
            target: {
              node: GG,
              path: yG
            }
          }, bG.channels.push(oG)
        }
      }
      static _CreateBakedAnimation(GG, bG, ZG, LG, yG, kG, UG, YG, VG, pG, fG) {
        let QG;
        const KG = wG.Quaternion.Identity();
        let hG, dG, JG, rG, zG, EG = null,
          oG = null;
        pG.min = SG.Tools.FloatRound(LG / kG);
        const XG = bG.getKeys();
        for (let wG = 0, uG = XG.length; wG < uG; ++wG) {
          if (dG = XG[wG], wG + 1 < uG)
            if (JG = XG[wG + 1], dG.value.equals && dG.value.equals(JG.value) || dG.value === JG.value) {
              if (0 !== wG) continue;
              zG = dG.frame
            } else zG = JG.frame;
          else {
            if (rG = XG[wG - 1], dG.value.equals && dG.value.equals(rG.value) || dG.value === rG.value) continue;
            zG = yG
          }
          if (zG)
            for (let wG = dG.frame; wG <= zG; wG += UG) {
              if (hG = SG.Tools.FloatRound(wG / kG), hG === EG) continue;
              EG = hG, oG = hG;
              const LG = {
                key: 0,
                repeatCount: 0,
                Dw: bG.Dw
              };
              QG = bG._interpolate(wG, LG), pw._SetInterpolatedValue(GG, QG, hG, bG, ZG, KG, YG, VG, fG)
            }
        }
        oG && (pG.max = oG)
      }
      static _ConvertFactorToVector3OrQuaternion(GG, bG, ZG, LG, yG) {
        const kG = pw._GetBasePositionRotationOrScale(bG, LG, yG),
          UG = ZG.targetProperty.split("."),
          YG = UG ? UG[1] : "",
          VG = yG ? wG.Quaternion.FromArray(kG).normalize() : wG.mK.FromArray(kG);
        switch (YG) {
          case "x":
          case "y":
          case "z":
            VG[YG] = GG;
            break;
          case "w":
            VG.w = GG;
            break;
          default:
            SG.Tools.Error(`glTFAnimation: Unsupported component name "${YG}"!`)
        }
        return VG
      }
      static _SetInterpolatedValue(GG, bG, ZG, SG, LG, yG, kG, UG, YG) {
        let VG;
        kG.push(ZG), "weights" !== LG ? (SG.dataType === yw.d.ANIMATIONTYPE_FLOAT && (bG = this._ConvertFactorToVector3OrQuaternion(bG, GG, SG, LG, YG)), "rotation" === LG ? (YG ? yG = bG : (VG = bG, wG.Quaternion.RotationYawPitchRollToRef(VG.y, VG.x, VG.z, yG)), UG.push(yG.mwG())) : (VG = bG, UG.push(VG.mwG()))) : UG.push([bG])
      }
      static _CreateLinearOrStepAnimation(GG, bG, ZG, wG, SG, LG) {
        for (const yG of bG.getKeys()) wG.push(yG.frame / bG.framePerSecond), pw._AddKeyframeValue(yG, bG, SG, ZG, GG, LG)
      }
      static _CreateCubicSplineAnimation(GG, bG, ZG, wG, SG, LG) {
        bG.getKeys().forEach((function(yG) {
          wG.push(yG.frame / bG.framePerSecond), pw._AddSplineTangent(Uw.INTANGENT, SG, ZG, "CUBICSPLINE", yG, LG), pw._AddKeyframeValue(yG, bG, SG, ZG, GG, LG), pw._AddSplineTangent(Uw.OUTTANGENT, SG, ZG, "CUBICSPLINE", yG, LG)
        }))
      }
      static _GetBasePositionRotationOrScale(GG, bG, ZG) {
        let SG;
        if ("rotation" === bG)
          if (ZG) {
            SG = (GG.rotationQuaternion ?? wG.Quaternion.Identity()).mwG()
          } else {
            SG = (GG.rotation ?? wG.mK.Zero()).mwG()
          }
        else if ("translation" === bG) {
          SG = (GG.position ?? wG.mK.Zero()).mwG()
        } else {
          SG = (GG.nY ?? wG.mK.One()).mwG()
        }
        return SG
      }
      static _AddKeyframeValue(GG, bG, ZG, LG, yG, kG) {
        let UG;
        const YG = bG.dataType;
        if (YG === yw.d.ANIMATIONTYPE_VECTOR3) {
          let bG = GG.value.mwG();
          if ("rotation" === LG) {
            const GG = wG.mK.FromArray(bG);
            bG = wG.Quaternion.RotationYawPitchRoll(GG.y, GG.x, GG.z).mwG()
          }
          ZG.push(bG)
        } else if (YG === yw.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === LG) ZG.push([GG.value]);
          else if (UG = this._ConvertFactorToVector3OrQuaternion(GG.value, yG, bG, LG, kG), UG) {
            if ("rotation" === LG) {
              const GG = kG ? UG : wG.Quaternion.RotationYawPitchRoll(UG.y, UG.x, UG.z).normalize();
              ZG.push(GG.mwG())
            }
            ZG.push(UG.mwG())
          }
        } else YG === yw.d.ANIMATIONTYPE_QUATERNION ? ZG.push(GG.value.normalize().mwG()) : SG.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(GG, bG, ZG) {
        let wG, SG, LG = !1;
        if ("rotation" === bG && !ZG) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let yG = 0, kG = GG.length; yG < kG; ++yG)
          if (SG = GG[yG], SG.inTangent || SG.outTangent)
            if (wG) {
              if ("CUBICSPLINE" !== wG) {
                wG = "LINEAR", LG = !0;
                break
              }
            } else wG = "CUBICSPLINE";
        else if (wG) {
          if ("CUBICSPLINE" === wG || SG.interpolation && 1 === SG.interpolation && "STEP" !== wG) {
            wG = "LINEAR", LG = !0;
            break
          }
        } else wG = SG.interpolation && 1 === SG.interpolation ? "STEP" : "LINEAR";
        return wG || (wG = "LINEAR"), {
          interpolationType: wG,
          shouldBakeAnimation: LG
        }
      }
      static _AddSplineTangent(GG, bG, ZG, SG, LG, yG) {
        let kG;
        const UG = GG === Uw.INTANGENT ? LG.inTangent : LG.outTangent;
        if ("CUBICSPLINE" === SG) {
          if ("rotation" === ZG)
            if (UG)
              if (yG) kG = UG.mwG();
              else {
                const GG = UG;
                kG = wG.Quaternion.RotationYawPitchRoll(GG.y, GG.x, GG.z).mwG()
              }
          else kG = [0, 0, 0, 0];
          else kG = "weights" === ZG ? UG ? [UG] : [0] : UG ? UG.mwG() : [0, 0, 0];
          bG.push(kG)
        }
      }
      static _CalculateMinMaxKeyFrames(GG) {
        let bG = 1 / 0,
          ZG = -1 / 0;
        return GG.forEach((function(GG) {
          bG = Math.min(bG, GG.frame), ZG = Math.max(ZG, GG.frame)
        })), {
          min: bG,
          max: ZG
        }
      }
    }

    function fw(GG, bG, ZG, LG, yG, kG) {
      const UG = {
          attributes: {},
          influence: GG.influence,
          name: GG.name
        },
        YG = bG.geometry;
      if (!YG) return SG.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), UG;
      const pG = kG ? -1 : 1,
        fG = wG.mK.Zero();
      let QG, KG;
      if (GG.hasPositions) {
        const LG = GG.getPositions(),
          kG = YG.getVerticesData(VG.c.PositionKind);
        if (kG) {
          const GG = new Float32Array(kG.length),
            bG = [1 / 0, 1 / 0, 1 / 0],
            SG = [-1 / 0, -1 / 0, -1 / 0];
          KG = kG.length / 3, QG = 0;
          for (let ZG = QG; ZG < KG; ++ZG) {
            const yG = wG.mK.FromArray(kG, 3 * ZG);
            wG.mK.FromArray(LG, 3 * ZG).subtractToRef(yG, fG), fG.x *= pG, bG[0] = Math.min(bG[0], fG.x), SG[0] = Math.max(SG[0], fG.x), bG[1] = Math.min(bG[1], fG.y), SG[1] = Math.max(SG[1], fG.y), bG[2] = Math.min(bG[2], fG.z), SG[2] = Math.max(SG[2], fG.z), GG[3 * ZG] = fG.x, GG[3 * ZG + 1] = fG.y, GG[3 * ZG + 2] = fG.z
          }
          const YG = ZG.createBufferView(GG, 12),
            VG = ZG.createAccessor(YG, "VEC3", 5126, LG.length / 3, 0, {
              min: bG,
              max: SG
            });
          yG.push(VG), UG.attributes.POSITION = yG.length - 1
        } else SG.Tools.Warn(`Morph target positions for mesh ${bG.name} were not exported. Mesh does not have position vertex data`)
      }
      if (GG.hasNormals) {
        const LG = GG.getNormals(),
          kG = YG.getVerticesData(VG.c.NormalKind);
        if (kG) {
          const GG = new Float32Array(kG.length);
          KG = kG.length / 3, QG = 0;
          for (let ZG = QG; ZG < KG; ++ZG) {
            const bG = wG.mK.FromArray(kG, 3 * ZG).normalize();
            wG.mK.FromArray(LG, 3 * ZG).normalize().subtractToRef(bG, fG), GG[3 * ZG] = fG.x * pG, GG[3 * ZG + 1] = fG.y, GG[3 * ZG + 2] = fG.z
          }
          const bG = ZG.createBufferView(GG, 12),
            SG = ZG.createAccessor(bG, "VEC3", 5126, LG.length / 3, 0);
          yG.push(SG), UG.attributes.NORMAL = yG.length - 1
        } else SG.Tools.Warn(`Morph target normals for mesh ${bG.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (GG.hasTangents) {
        const LG = GG.getTangents(),
          kG = YG.getVerticesData(VG.c.TangentKind);
        if (kG) {
          KG = kG.length / 4;
          const GG = new Float32Array(3 * KG);
          QG = 0;
          for (let ZG = QG; ZG < KG; ++ZG) {
            const bG = wG.mK.FromArray(kG, 4 * ZG);
            eZ(bG);
            const SG = wG.mK.FromArray(LG, 3 * ZG);
            eZ(SG), SG.subtractToRef(bG, fG), GG[3 * ZG] = fG.x * pG, GG[3 * ZG + 1] = fG.y, GG[3 * ZG + 2] = fG.z
          }
          const bG = ZG.createBufferView(GG, 12),
            SG = ZG.createAccessor(bG, "VEC3", 5126, KG, 0);
          yG.push(SG), UG.attributes.TANGENT = yG.length - 1
        } else SG.Tools.Warn(`Morph target tangents for mesh ${bG.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (GG.hasColors) {
        const LG = GG.getColors(),
          kG = YG.getVerticesData(VG.c.ColorKind),
          pG = YG.getVertexBuffer(VG.c.ColorKind);
        if (kG && pG) {
          const GG = pG.getSize();
          KG = kG.length / GG;
          const bG = new Float32Array(KG * GG);
          QG = 0;
          for (let ZG = QG; ZG < KG; ++ZG)
            if (3 === GG) {
              const SG = wG.mK.FromArray(kG, ZG * GG);
              wG.mK.FromArray(LG, ZG * GG).subtractToRef(SG, fG), bG[3 * ZG] = fG.x, bG[3 * ZG + 1] = fG.y, bG[3 * ZG + 2] = fG.z
            } else if (4 === GG) {
            const SG = new wG.Vector4,
              yG = wG.Vector4.FromArray(kG, ZG * GG);
            wG.Vector4.FromArray(LG, ZG * GG).subtractToRef(yG, SG), bG[4 * ZG] = SG.x, bG[4 * ZG + 1] = SG.y, bG[4 * ZG + 2] = SG.z, bG[4 * ZG + 3] = SG.w
          } else SG.Tools.Warn(`Unsupported number of components for color attribute: ${GG}`);
          const YG = ZG.createBufferView(bG, 4 * GG),
            VG = ZG.createAccessor(YG, 3 === GG ? "VEC3" : "VEC4", 5126, KG, 0);
          yG.push(VG), UG.attributes.COLOR_0 = yG.length - 1
        } else SG.Tools.Warn(`Morph target colors for mesh ${bG.name} were not exported. Mesh does not have colors vertex data`)
      }
      return UG
    }
    var Qw = ZG(42014);
    class Kw {}
    Kw.DEFAULT_COLOR = TG.c.White(), Kw.DEFAULT_WIDTH_ATTENUATED = 1, Kw.DEFAULT_WIDTH = .1;
    var hw = ZG(41481);
    class dw {
      constructor(GG) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = GG
      }
      moveTo(GG, bG) {
        this._currentPath = new hw.h(GG, bG), this._tempPaths.push(this._currentPath)
      }
      lineTo(GG, bG) {
        this._currentPath.addLineTo(GG, bG)
      }
      quadraticCurveTo(GG, bG, ZG, wG) {
        this._currentPath.addQuadraticCurveTo(GG, bG, ZG, wG, this._resolution)
      }
      bezierCurveTo(GG, bG, ZG, wG, SG, LG) {
        this._currentPath.addBezierCurveTo(GG, bG, ZG, wG, SG, LG, this._resolution)
      }
      extractHoles() {
        for (const GG of this._tempPaths) GG.area() > 0 ? this._holes.push(GG) : this._paths.push(GG);
        if (!this._paths.length && this._holes.length) {
          const GG = this._holes;
          this._holes = this._paths, this._paths = GG
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

    function Jw(GG, bG, ZG, wG, SG, LG) {
      const yG = LG.glyphs[GG] || LG.glyphs["?"];
      if (!yG) return null;
      const kG = new dw(SG);
      if (yG.o) {
        const GG = yG.o.split(" ");
        for (let SG = 0, LG = GG.length; SG < LG;) {
          switch (GG[SG++]) {
            case "m": {
              const LG = parseInt(GG[SG++]) * bG + ZG,
                yG = parseInt(GG[SG++]) * bG + wG;
              kG.moveTo(LG, yG);
              break
            }
            case "l": {
              const LG = parseInt(GG[SG++]) * bG + ZG,
                yG = parseInt(GG[SG++]) * bG + wG;
              kG.lineTo(LG, yG);
              break
            }
            case "q": {
              const LG = parseInt(GG[SG++]) * bG + ZG,
                yG = parseInt(GG[SG++]) * bG + wG,
                UG = parseInt(GG[SG++]) * bG + ZG,
                YG = parseInt(GG[SG++]) * bG + wG;
              kG.quadraticCurveTo(UG, YG, LG, yG);
              break
            }
            case "b": {
              const LG = parseInt(GG[SG++]) * bG + ZG,
                yG = parseInt(GG[SG++]) * bG + wG,
                UG = parseInt(GG[SG++]) * bG + ZG,
                YG = parseInt(GG[SG++]) * bG + wG,
                VG = parseInt(GG[SG++]) * bG + ZG,
                pG = parseInt(GG[SG++]) * bG + wG;
              kG.bezierCurveTo(UG, YG, VG, pG, LG, yG);
              break
            }
          }
        }
      }
      return kG.extractHoles(), {
        offsetX: yG.ha * bG,
        shapePath: kG
      }
    }

    function rw(GG, bG, ZG, wG) {
      const SG = Array.from(GG),
        LG = bG / wG.resolution,
        yG = (wG.boundingBox.yMax - wG.boundingBox.yMin + wG.underlineThickness) * LG,
        kG = [];
      let UG = 0,
        YG = 0;
      for (let VG = 0; VG < SG.length; VG++) {
        const GG = SG[VG];
        if ("\n" === GG) UG = 0, YG -= yG;
        else {
          const bG = Jw(GG, LG, UG, YG, ZG, wG);
          bG && (UG += bG.offsetX, kG.push(bG.shapePath))
        }
      }
      return kG
    }
    class zw {
      static ConvertPoints(GG, bG) {
        if (GG.length && Array.isArray(GG) && "number" === typeof GG[0]) return [GG];
        if (GG.length && Array.isArray(GG[0]) && "number" === typeof GG[0][0]) return GG;
        if (GG.length && !Array.isArray(GG[0]) && GG[0] instanceof AG.p) {
          const bG = [];
          for (let ZG = 0; ZG < GG.length; ZG++) {
            const wG = GG[ZG];
            bG.push(wG.x, wG.y, wG.z)
          }
          return [bG]
        }
        if (GG.length > 0 && Array.isArray(GG[0]) && GG[0].length > 0 && GG[0][0] instanceof AG.p) {
          const bG = [],
            ZG = GG;
          for (const GG of ZG) bG.push(GG.flatMap((GG => [GG.x, GG.y, GG.z])));
          return bG
        }
        if (GG instanceof Float32Array) {
          if (bG?.floatArrayStride) {
            const ZG = [],
              wG = 3 * bG.floatArrayStride;
            for (let bG = 0; bG < GG.length; bG += wG) {
              const SG = new Array(wG);
              for (let ZG = 0; ZG < wG; ZG++) SG[ZG] = GG[bG + ZG];
              ZG.push(SG)
            }
            return ZG
          }
          return [Array.from(GG)]
        }
        if (GG.length && GG[0] instanceof Float32Array) {
          const bG = [];
          for (const ZG of GG) bG.push(Array.from(ZG));
          return bG
        }
        return []
      }
      static OmitZeroLengthPredicate(GG, bG, ZG) {
        const wG = [];
        return bG.subtract(GG).lengthSquared() > 0 && wG.push([GG, bG]), ZG.subtract(bG).lengthSquared() > 0 && wG.push([bG, ZG]), GG.subtract(ZG).lengthSquared() > 0 && wG.push([ZG, GG]), 0 === wG.length ? null : wG
      }
      static OmitDuplicatesPredicate(GG, bG, ZG, wG) {
        const SG = [];
        return zw._SearchInPoints(GG, bG, wG) || SG.push([GG, bG]), zw._SearchInPoints(bG, ZG, wG) || SG.push([bG, ZG]), zw._SearchInPoints(ZG, GG, wG) || SG.push([ZG, GG]), 0 === SG.length ? null : SG
      }
      static _SearchInPoints(GG, bG, ZG) {
        for (const wG of ZG)
          for (let ZG = 0; ZG < wG.length; ZG++)
            if (wG[ZG]?.equals(GG) && (wG[ZG + 1]?.equals(bG) || wG[ZG - 1]?.equals(bG))) return !0;
        return !1
      }
      static MeshesToLines(GG, bG) {
        const ZG = [];
        for (let wG = 0; wG < GG.length; wG++) {
          const SG = GG[wG],
            LG = SG.getVerticesData(sG.l.PositionKind),
            yG = SG.IwG();
          if (LG && yG)
            for (let GG = 0, kG = 0; GG < yG.length; GG++) {
              const UG = 3 * yG[kG++],
                YG = 3 * yG[kG++],
                VG = 3 * yG[kG++],
                pG = new AG.p(LG[UG], LG[UG + 1], LG[UG + 2]),
                fG = new AG.p(LG[YG], LG[YG + 1], LG[YG + 2]),
                QG = new AG.p(LG[VG], LG[VG + 1], LG[VG + 2]);
              if (bG) {
                const kG = bG(pG, fG, QG, ZG, GG, UG, SG, wG, LG, yG);
                if (kG)
                  for (const GG of kG) ZG.push(GG)
              } else ZG.push([pG, fG], [fG, QG], [QG, pG])
            }
        }
        return ZG
      }
      static ToVector3Array(GG) {
        if (Array.isArray(GG[0])) {
          const bG = [],
            ZG = GG;
          for (const GG of ZG) {
            const ZG = [];
            for (let bG = 0; bG < GG.length; bG += 3) ZG.push(new AG.p(GG[bG], GG[bG + 1], GG[bG + 2]));
            bG.push(ZG)
          }
          return bG
        }
        const bG = GG,
          ZG = [];
        for (let wG = 0; wG < bG.length; wG += 3) ZG.push(new AG.p(bG[wG], bG[wG + 1], bG[wG + 2]));
        return ZG
      }
      static ToNumberArray(GG) {
        return GG.flatMap((GG => [GG.x, GG.y, GG.z]))
      }
      static GetPointsCountInfo(GG) {
        const bG = new Array(GG.length);
        let ZG = 0;
        for (let wG = GG.length; wG--;) bG[wG] = GG[wG].length / 3, ZG += bG[wG];
        return {
          total: ZG,
          counts: bG
        }
      }
      static GetLineLength(GG) {
        if (0 === GG.length) return 0;
        let bG;
        bG = "number" === typeof GG[0] ? zw.ToVector3Array(GG) : GG;
        const ZG = AG.j.mK[0];
        let wG = 0;
        for (let SG = 0; SG < bG.length - 1; SG++) {
          const GG = bG[SG];
          wG += bG[SG + 1].subtractToRef(GG, ZG).length()
        }
        return wG
      }
      static GetLineLengthArray(GG, bG) {
        const ZG = bG ? new Float32Array(bG, 0, GG.length / 3) : new Float32Array(GG.length / 3);
        let wG = 0;
        for (let SG = 0, LG = GG.length / 3 - 1; SG < LG; SG++) {
          let bG = GG[3 * SG + 0],
            LG = GG[3 * SG + 1],
            yG = GG[3 * SG + 2];
          bG -= GG[3 * SG + 3], LG -= GG[3 * SG + 4], yG -= GG[3 * SG + 5];
          wG += Math.sqrt(bG * bG + LG * LG + yG * yG), ZG[SG + 1] = wG
        }
        return ZG
      }
      static SegmentizeSegmentByCount(GG, bG, ZG) {
        const wG = [],
          SG = bG.subtract(GG),
          LG = AG.j.mK[0];
        LG.N7(ZG);
        const yG = AG.j.mK[1];
        SG.divideToRef(LG, yG);
        let kG = GG.clone();
        wG.push(kG);
        for (let UG = 0; UG < ZG; UG++) kG = kG.clone(), wG.push(kG.addInPlace(yG));
        return wG
      }
      static SegmentizeLineBySegmentLength(GG, bG) {
        const ZG = GG[0] instanceof AG.p ? zw.GetLineSegments(GG) : "number" === typeof GG[0] ? zw.GetLineSegments(zw.ToVector3Array(GG)) : GG,
          wG = [];
        for (const SG of ZG)
          if (SG.length > bG) {
            const GG = zw.SegmentizeSegmentByCount(SG.point1, SG.point2, Math.ceil(SG.length / bG));
            for (const bG of GG) wG.push(bG)
          } else wG.push(SG.point1), wG.push(SG.point2);
        return wG
      }
      static SegmentizeLineBySegmentCount(GG, bG) {
        const ZG = "number" === typeof GG[0] ? zw.ToVector3Array(GG) : GG,
          wG = zw.GetLineLength(ZG) / bG;
        return zw.SegmentizeLineBySegmentLength(ZG, wG)
      }
      static GetLineSegments(GG) {
        const bG = [];
        for (let ZG = 0; ZG < GG.length - 1; ZG++) {
          const wG = GG[ZG],
            SG = GG[ZG + 1],
            LG = SG.subtract(wG).length();
          bG.push({
            point1: wG,
            point2: SG,
            length: LG
          })
        }
        return bG
      }
      static GetMinMaxSegmentLength(GG) {
        const bG = zw.GetLineSegments(GG).sort((GG => GG.length));
        return {
          min: bG[0].length,
          max: bG[bG.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SG = bG * ZG;
        let LG = 0,
          yG = 0;
        const kG = GG.length;
        for (let YG = 0; YG < kG; YG++) {
          if (SG <= LG + GG[YG].length) {
            yG = YG;
            break
          }
          LG += GG[YG].length
        }
        const UG = (SG - LG) / GG[yG].length;
        return GG[yG].point2.subtractToRef(GG[yG].point1, AG.j.mK[0]), AG.j.mK[0].scaleToRef(UG, AG.j.mK[1]), wG || AG.j.mK[1].addInPlace(GG[yG].point1), AG.j.mK[1].clone()
      }
      static GetCircleLinePoints(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG,
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / bG;
        const LG = [];
        for (let yG = 0; yG <= bG; yG++) LG.push(new AG.p(Math.cos(yG * SG) * GG, Math.sin(yG * SG) * wG, ZG));
        return LG
      }
      static GetBezierLinePoints(GG, bG, ZG, wG) {
        return hw.e.CreateQuadraticBezier(GG, bG, ZG, wG).getPoints().flatMap((GG => [GG.x, GG.y, GG.z]))
      }
      static GetArrowCap(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [GG.clone(), GG.add(bG.multiplyByFloats(ZG, ZG, ZG))],
          widths: [wG, SG, LG, yG]
        }
      }
      static GetPointsFromText(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const yG = [],
          kG = rw(GG, bG, ZG, wG);
        for (const UG of kG) {
          for (const GG of UG.paths) {
            const bG = [],
              ZG = GG.getPoints();
            for (const GG of ZG) bG.push(GG.x, GG.y, SG);
            yG.push(bG)
          }
          if (LG)
            for (const GG of UG.holes) {
              const bG = [],
                ZG = GG.getPoints();
              for (const GG of ZG) bG.push(GG.x, GG.y, SG);
              yG.push(bG)
            }
        }
        return yG
      }
      static Color3toRGBAUint8(GG) {
        const bG = new Uint8Array(4 * GG.length);
        for (let ZG = 0, wG = 0; ZG < GG.length; ZG++) bG[wG++] = 255 * GG[ZG].r, bG[wG++] = 255 * GG[ZG].g, bG[wG++] = 255 * GG[ZG].b, bG[wG++] = 255;
        return bG
      }
      static CreateColorsTexture(GG, bG, ZG, wG) {
        const SG = wG.CK().getCaps().maxTextureSize ?? 1,
          LG = bG.length > SG ? SG : bG.length,
          yG = Math.ceil(bG.length / SG);
        yG > 1 && (bG = [...bG, ...Array(LG * yG - bG.length).fill(bG[0])]);
        const kG = zw.Color3toRGBAUint8(bG),
          UG = new XG.e(kG, LG, yG, VZ.c.TEXTUREFORMAT_RGBA, wG, !1, !0, ZG);
        return UG.name = GG, UG
      }
      static PrepareEmptyColorsTexture(GG) {
        if (!Kw.EmptyColorsTexture) {
          const bG = new Uint8Array(4);
          Kw.EmptyColorsTexture = new XG.e(bG, 1, 1, VZ.c.TEXTUREFORMAT_RGBA, GG, !1, !1, XG.e.NEAREST_NEAREST), Kw.EmptyColorsTexture.name = "grlEmptyColorsTexture", Kw.EmptyColorsTexture.Gl.addOnce((() => {
            Kw.EmptyColorsTexture = null
          }))
        }
        return Kw.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Kw.EmptyColorsTexture?.dispose(), Kw.EmptyColorsTexture = null
      }
      static BooleanToNumber(GG) {
        return GG ? 1 : 0
      }
    }
    class Ew extends qG.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class ow extends nG.e {
      isCompatible(GG) {
        return !0
      }
      constructor(GG, bG, ZG) {
        ZG = ZG || {
          color: Kw.DEFAULT_COLOR
        };
        const wG = new Ew;
        wG.GREASED_LINE_HAS_COLOR = !!ZG.color && !ZG.useColors, wG.GREASED_LINE_SIZE_ATTENUATION = ZG.sizeAttenuation ?? !1, wG.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === ZG.colorDistributionType, wG.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (bG ?? GG.Dv()).useRightHandedSystem, wG.GREASED_LINE_CAMERA_FACING = ZG.cameraFacing ?? !0, super(GG, ow.GREASED_LINE_MATERIAL_NAME, 200, wG, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = ZG?.forceGLSL || ow.ForceGLSL, this._scene = bG ?? GG.Dv(), this._engine = this._scene.CK(), this._cameraFacing = ZG.cameraFacing ?? !0, this.visibility = ZG.visibility ?? 1, this.useDash = ZG.useDash ?? !1, this.dashRatio = ZG.dashRatio ?? .5, this.dashOffset = ZG.dashOffset ?? 0, this.width = ZG.width ? ZG.width : ZG.sizeAttenuation ? Kw.DEFAULT_WIDTH_ATTENUATED : Kw.DEFAULT_WIDTH, this._sizeAttenuation = ZG.sizeAttenuation ?? !1, this.colorMode = ZG.colorMode ?? 0, this._color = ZG.color ?? null, this.useColors = ZG.useColors ?? !1, this._colorsDistributionType = ZG.colorDistributionType ?? 0, this.colorsSampling = ZG.colorsSampling ?? XG.e.NEAREST_NEAREST, this._colors = ZG.colors ?? null, this.dashCount = ZG.dashCount ?? 1, this.resolution = ZG.resolution ?? new AG.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), ZG.colorsTexture ? this.colorsTexture = ZG.colorsTexture : this._colors ? this.colorsTexture = zw.CreateColorsTexture(`${GG.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Kw.DEFAULT_COLOR, zw.PrepareEmptyColorsTexture(this._scene)), this._engine.Gl.add((() => {
          zw.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(GG) {
        GG.push("grl_offsets"), GG.push("grl_widths"), GG.push("grl_colorPointers"), GG.push("grl_counters"), this._cameraFacing ? (GG.push("grl_previousAndSide"), GG.push("grl_nextAndCounters")) : GG.push("grl_slopes")
      }
      getSamplers(GG) {
        GG.push("grl_colors")
      }
      getActiveTextures(GG) {
        this.colorsTexture && GG.push(this.colorsTexture)
      }
      getUniforms() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const bG = [{
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
        return this._cameraFacing && bG.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === GG && bG.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: bG,
          vertex: this._cameraFacing && this._isGLSL(GG) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(GG) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(GG) {
        if (this._cameraFacing) {
          GG.R6("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || GG.R6("viewProjection", this._scene.getTransformMatrix());
          const bG = AG.j.Vector4[0];
          bG.x = this._aspect, bG.y = this._resolution.x, bG.z = this._resolution.y, bG.w = this.width, GG.updateVector4("grl_aspect_resolution_lineWidth", bG)
        }
        const bG = AG.j.Vector4[0];
        bG.x = zw.BooleanToNumber(this.useDash), bG.y = this._dashArray, bG.z = this.dashOffset, bG.w = this.dashRatio, GG.updateVector4("grl_dashOptions", bG);
        const ZG = AG.j.Vector4[1];
        ZG.x = this.colorMode, ZG.y = this.visibility, ZG.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, ZG.w = zw.BooleanToNumber(this.useColors), GG.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", ZG), this._color && GG.updateColor3("grl_singleColor", this._color);
        const wG = this.colorsTexture ?? Kw.EmptyColorsTexture;
        GG.setTexture("grl_colors", wG), GG.updateFloat2("grl_textureSize", wG?.getSize().width ?? 1, wG?.getSize().height ?? 1)
      }
      prepareDefines(GG, bG, ZG) {
        GG.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, GG.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, GG.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, GG.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = bG.useRightHandedSystem, GG.GREASED_LINE_CAMERA_FACING = this._cameraFacing, GG.GREASED_LINE_USE_OFFSETS = !!ZG.offsets
      }
      getClassName() {
        return ow.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(bG) ? function(GG, bG) {
          if ("vertex" === GG) {
            const GG = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return bG && (GG["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), GG
          }
          return "fragment" === GG ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(GG, this._cameraFacing) : function(GG, bG) {
          if ("vertex" === GG) {
            const GG = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return bG && (GG["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), GG
          }
          return "fragment" === GG ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(GG, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(GG) {
        this.setColors(GG)
      }
      setColors(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = this._colors?.length ?? 0;
        if (this._colors = GG, null !== GG && 0 !== GG.length) {
          if (!bG || ZG)
            if (this.colorsTexture && wG === GG.length && !ZG) {
              const bG = zw.Color3toRGBAUint8(GG);
              this.colorsTexture.update(bG)
            } else this.colorsTexture?.dispose(), this.colorsTexture = zw.CreateColorsTexture(`${this._material.name}-colors-texture`, GG, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(GG) {
        this._dashCount = GG, this._dashArray = 1 / GG
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(GG) {
        this._sizeAttenuation = GG, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(GG) {
        this.setColor(GG)
      }
      setColor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== GG || null !== this._color && null === GG ? (this._color = GG, bG || this.markAllDefinesAsDirty()) : this._color = GG
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(GG) {
        this._colorsDistributionType = GG, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(GG) {
        this._aspect = GG.x / GG.y, this._resolution = GG
      }
      serialize() {
        const GG = super.serialize(),
          bG = {
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
        return this._colors && (bG.colors = this._colors), this._color && (bG.color = this._color), GG.greasedLineMaterialOptions = bG, GG
      }
      parse(GG, bG, ZG) {
        super.parse(GG, bG, ZG);
        const wG = GG.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), wG.color && this.setColor(wG.color, !0), wG.colorDistributionType && (this.colorsDistributionType = wG.colorDistributionType), wG.colors && (this.colors = wG.colors), wG.colorsSampling && (this.colorsSampling = wG.colorsSampling), wG.colorMode && (this.colorMode = wG.colorMode), wG.useColors && (this.useColors = wG.useColors), wG.visibility && (this.visibility = wG.visibility), wG.useDash && (this.useDash = wG.useDash), wG.dashCount && (this.dashCount = wG.dashCount), wG.dashRatio && (this.dashRatio = wG.dashRatio), wG.dashOffset && (this.dashOffset = wG.dashOffset), wG.width && (this.width = wG.width), wG.sizeAttenuation && (this.sizeAttenuation = wG.sizeAttenuation), wG.resolution && (this.resolution = wG.resolution), this.colors ? this.colorsTexture = zw.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, bG) : zw.PrepareEmptyColorsTexture(bG), this.markAllDefinesAsDirty()
      }
      copyTo(GG) {
        const bG = GG;
        bG.colorsTexture?.dispose(), this._colors && (bG.colorsTexture = zw.CreateColorsTexture(`${bG._material.name}-colors-texture`, this._colors, bG.colorsSampling, this._scene)), bG.setColor(this.color, !0), bG.colorsDistributionType = this.colorsDistributionType, bG.colorsSampling = this.colorsSampling, bG.colorMode = this.colorMode, bG.useColors = this.useColors, bG.visibility = this.visibility, bG.useDash = this.useDash, bG.dashCount = this.dashCount, bG.dashRatio = this.dashRatio, bG.dashOffset = this.dashOffset, bG.width = this.width, bG.sizeAttenuation = this.sizeAttenuation, bG.resolution = this.resolution, bG.markAllDefinesAsDirty()
      }
      _isGLSL(GG) {
        return 0 === GG || this._forceGLSL
      }
    }
    ow.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", ow.ForceGLSL = !1;
    var Xw = ZG(40784),
      uw = ZG(40795),
      iw = ZG(39086),
      Cw = ZG(40851),
      Ww = ZG(40217);
    class mw extends Cw.o {
      constructor(GG, bG, wG) {
        const SG = bG.CK(),
          LG = SG.isWebGPU && !(wG.forceGLSL || mw.ForceGLSL),
          yG = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        bG.useRightHandedSystem && yG.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const kG = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        wG.cameraFacing ? (yG.push("GREASED_LINE_CAMERA_FACING"), kG.push("grl_previousAndSide", "grl_nextAndCounters")) : (kG.push("grl_slopes"), kG.push("grl_counters"));
        const UG = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (LG || UG.push("world", "viewProjection", "view", "projection"), super(GG, bG, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: LG ? ["Scene", "Mesh"] : void 0,
            attributes: kG,
            uniforms: UG,
            samplers: LG ? [] : ["grlColors"],
            defines: yG,
            extraInitializationsAsync: async () => {
              LG ? await Promise.all([ZG.e(339).then((() => ZG(62439))), ZG.e(395).then((() => ZG(62443)))]) : await Promise.all([ZG.e(332).then((() => ZG(62447))), ZG.e(396).then((() => ZG(62454)))])
            },
            shaderLanguage: LG ? 1 : 0
          }), this._color = TG.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, wG = wG || {
            color: Kw.DEFAULT_COLOR
          }, this.visibility = wG.visibility ?? 1, this.useDash = wG.useDash ?? !1, this.dashRatio = wG.dashRatio ?? .5, this.dashOffset = wG.dashOffset ?? 0, this.dashCount = wG.dashCount ?? 1, this.width = wG.width ? wG.width : wG.sizeAttenuation && wG.cameraFacing ? Kw.DEFAULT_WIDTH_ATTENUATED : Kw.DEFAULT_WIDTH, this.sizeAttenuation = wG.sizeAttenuation ?? !1, this.color = wG.color ?? TG.c.White(), this.useColors = wG.useColors ?? !1, this.colorsDistributionType = wG.colorDistributionType ?? 0, this.colorsSampling = wG.colorsSampling ?? XG.e.NEAREST_NEAREST, this.colorMode = wG.colorMode ?? 0, this._colors = wG.colors ?? null, this._cameraFacing = wG.cameraFacing ?? !0, this.resolution = wG.resolution ?? new AG.m(SG.getRenderWidth(), SG.getRenderHeight()), wG.colorsTexture ? this.colorsTexture = wG.colorsTexture : this._colors ? this.colorsTexture = zw.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, bG) : (this._color = this._color ?? Kw.DEFAULT_COLOR, this.colorsTexture = zw.PrepareEmptyColorsTexture(bG)), LG) {
          const GG = new Ww.b;
          GG.setParameters(), GG.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", GG)
        }
        SG.Gl.add((() => {
          zw.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Kw.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new AG.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(GG) {
        this.setColors(GG)
      }
      setColors(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wG = this._colors?.length ?? 0;
        if (this._colors = GG, null !== GG && 0 !== GG.length) {
          if (!bG || ZG)
            if (this._colorsTexture && wG === GG.length && !ZG) {
              const bG = zw.Color3toRGBAUint8(GG);
              this._colorsTexture.update(bG)
            } else this._colorsTexture && this._colorsTexture !== Kw.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = zw.CreateColorsTexture(`${this.name}-colors-texture`, GG, this.colorsSampling, this.Dv())
        } else {
          this._colorsTexture && this._colorsTexture !== Kw.EmptyColorsTexture && this._colorsTexture.dispose();
          const GG = this.Dv();
          GG && (this.colorsTexture = zw.PrepareEmptyColorsTexture(GG))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(GG) {
        this._colorsTexture = GG, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(GG) {
        this._width = GG, this.setFloat("grlWidth", GG)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(GG) {
        this._useColors = GG, this.setFloat("grlUseColors", zw.BooleanToNumber(GG))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(GG) {
        this._colorsSampling = GG
      }
      get visibility() {
        return this._visibility
      }
      set visibility(GG) {
        this._visibility = GG, this.setFloat("grlVisibility", GG)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(GG) {
        this._useDash = GG, this.setFloat("grlUseDash", zw.BooleanToNumber(GG))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(GG) {
        this._dashOffset = GG, this.setFloat("grlDashOffset", GG)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(GG) {
        this._dashRatio = GG, this.setFloat("grlDashRatio", GG)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(GG) {
        this._dashCount = GG, this._dashArray = 1 / GG, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(GG) {
        this._sizeAttenuation = GG, this.setFloat("grlSizeAttenuation", zw.BooleanToNumber(GG))
      }
      get color() {
        return this._color
      }
      set color(GG) {
        this.setColor(GG)
      }
      setColor(GG) {
        GG = GG ?? Kw.DEFAULT_COLOR, this._color = GG, this.setColor3("grlColor", GG)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(GG) {
        this._colorsDistributionType = GG, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(GG) {
        this._colorMode = GG, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(GG) {
        this._resolution = GG, this.setVector2("grlResolution", GG), this.setFloat("grlAspect", GG.x / GG.y)
      }
      serialize() {
        const GG = super.serialize(),
          bG = {
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
        return this._colors && (bG.colors = this._colors), GG.greasedLineMaterialOptions = bG, GG
      }
      parse(GG, bG, ZG) {
        const wG = GG.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), wG.color && (this.color = wG.color), wG.colorDistributionType && (this.colorsDistributionType = wG.colorDistributionType), wG.colorsSampling && (this.colorsSampling = wG.colorsSampling), wG.colorMode && (this.colorMode = wG.colorMode), wG.useColors && (this.useColors = wG.useColors), wG.visibility && (this.visibility = wG.visibility), wG.useDash && (this.useDash = wG.useDash), wG.dashCount && (this.dashCount = wG.dashCount), wG.dashRatio && (this.dashRatio = wG.dashRatio), wG.dashOffset && (this.dashOffset = wG.dashOffset), wG.width && (this.width = wG.width), wG.sizeAttenuation && (this.sizeAttenuation = wG.sizeAttenuation), wG.resolution && (this.resolution = wG.resolution), wG.colors ? this.colorsTexture = zw.CreateColorsTexture(`${this.name}-colors-texture`, wG.colors, this.colorsSampling, this.Dv()) : this.colorsTexture = zw.PrepareEmptyColorsTexture(bG), this._cameraFacing = wG.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Iw, Fw, vw;
    mw.ForceGLSL = !1,
      function(GG) {
        GG[GG.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", GG[GG.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Iw || (Iw = {})),
      function(GG) {
        GG[GG.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", GG[GG.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", GG[GG.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(Fw || (Fw = {})),
      function(GG) {
        GG[GG.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", GG[GG.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", GG[GG.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", GG[GG.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", GG[GG.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(vw || (vw = {}));
    class aw extends Xw.c {
      constructor(GG, bG, ZG) {
        super(GG, bG, null, null, !1, !1), this.name = GG, this._options = ZG, this._lazy = !1, this._updatable = !1, this._engine = bG.CK(), this._lazy = ZG.lazy ?? !1, this._updatable = ZG.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = ZG.colorPointers ?? [], this._widths = ZG.widths ?? new Array(ZG.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(GG) {
        let bG = 0;
        for (const wG of this._points) bG += wG.length;
        const ZG = bG / 3 * 2 - this._widths.length;
        for (let wG = 0; wG < ZG; wG++) this._widths.push(GG)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.FK && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(GG, bG) {
        for (const ZG of GG) this._points.push(ZG);
        this._lazy || this.setPoints(this._points, bG)
      }
      dispose(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(GG, bG)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(GG) {
        this._uvs = GG instanceof Float32Array ? GG : new Float32Array(GG), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(GG) {
        this.material instanceof mw && this.material.setDefine("GREASED_LINE_USE_OFFSETS", GG?.length > 0), this._offsets = GG, this._offsetsBuffer ? this._offsetsBuffer.update(GG) : this._createOffsetsBuffer(GG)
      }
      get widths() {
        return this._widths
      }
      set widths(GG) {
        this._widths = GG, this._lazy || this._widthsBuffer && this._widthsBuffer.update(GG)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(GG) {
        this._colorPointers = GG, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(GG)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof mw) return this.material;
        const GG = this.material?.pluginManager?.getPlugin(ow.GREASED_LINE_MATERIAL_NAME);
        return GG || void 0
      }
      get points() {
        const GG = [];
        return iw.e.DeepCopy(this._points, GG), GG
      }
      setPoints(GG, bG) {
        this._points = zw.ConvertPoints(GG, bG?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), bG?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, bG)
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
      serialize(GG) {
        super.serialize(GG), GG.type = this.getClassName(), GG.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = new uw.e;
        return bG.positions = this._vertexPositions, bG.indices = this._indices, bG.uvs = this._uvs, GG && (bG.normals = [], uw.e.ComputeNormals(this._vertexPositions, this._indices, bG.normals)), bG.applyToMesh(this, this._options.updatable), bG
      }
      _createOffsetsBuffer(GG) {
        const bG = this._scene.CK(),
          ZG = new sG.c(bG, GG, this._updatable, 3);
        this.setVerticesBuffer(ZG.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = ZG
      }
    }
    class lw {
      constructor(GG, bG) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = GG, this.wasAddedByNoopNode = bG
      }
      getIndicesAccessor(GG, bG, ZG, wG, SG) {
        return this._indicesAccessorMap.get(GG)?.get(bG)?.get(ZG)?.get(wG)?.get(SG)
      }
      setIndicesAccessor(GG, bG, ZG, wG, SG, LG) {
        let yG = this._indicesAccessorMap.get(GG);
        yG || (yG = new Map, this._indicesAccessorMap.set(GG, yG));
        let kG = yG.get(bG);
        kG || (kG = new Map, yG.set(bG, kG));
        let UG = kG.get(ZG);
        UG || (UG = new Map, kG.set(ZG, UG));
        let YG = UG.get(wG);
        YG || (YG = new Map, UG.set(wG, YG)), YG.set(SG, LG)
      }
      pushExportedNode(GG) {
        this._exportedNodes.has(GG) || this._exportedNodes.add(GG)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(GG) {
        return this._vertexBufferViewMap.get(GG)
      }
      setVertexBufferView(GG, bG) {
        this._vertexBufferViewMap.set(GG, bG)
      }
      setRemappedBufferView(GG, bG, ZG) {
        this._remappedBufferView.set(GG, new Map), this._remappedBufferView.get(GG).set(bG, ZG)
      }
      getRemappedBufferView(GG, bG) {
        return this._remappedBufferView.get(GG)?.get(bG)
      }
      getVertexAccessor(GG, bG, ZG) {
        return this._vertexAccessorMap.get(GG)?.get(bG)?.get(ZG)
      }
      setVertexAccessor(GG, bG, ZG, wG) {
        let SG = this._vertexAccessorMap.get(GG);
        SG || (SG = new Map, this._vertexAccessorMap.set(GG, SG));
        let LG = SG.get(bG);
        LG || (LG = new Map, SG.set(bG, LG)), LG.set(ZG, wG)
      }
      hasVertexColorAlpha(GG) {
        return this._vertexMapColorAlpha.get(GG) || !1
      }
      setHasVertexColorAlpha(GG, bG) {
        return this._vertexMapColorAlpha.set(GG, bG)
      }
      getMesh(GG) {
        return this._meshMap.get(GG)
      }
      setMesh(GG, bG) {
        this._meshMap.set(GG, bG)
      }
      bindMorphDataToMesh(GG, bG) {
        const ZG = this._meshMorphTargetMap.get(GG) || [];
        this._meshMorphTargetMap.set(GG, ZG), -1 === ZG.indexOf(bG) && ZG.push(bG)
      }
      getMorphTargetsFromMesh(GG) {
        return this._meshMorphTargetMap.get(GG)
      }
    }
    class jw {
      _ApplyExtension(GG, bG, ZG, wG) {
        if (ZG >= bG.length) return Promise.resolve(GG);
        const SG = wG(bG[ZG], GG);
        return SG ? SG.then((async GG => GG ? await this._ApplyExtension(GG, bG, ZG + 1, wG) : null)) : this._ApplyExtension(GG, bG, ZG + 1, wG)
      }
      _ApplyExtensions(GG, bG) {
        const ZG = [];
        for (const wG of jw._ExtensionNames) ZG.push(this._extensions[wG]);
        return this._ApplyExtension(GG, ZG, 0, bG)
      }
      _extensionsPostExportNodeAsync(GG, bG, ZG, wG, SG) {
        return this._ApplyExtensions(bG, ((bG, LG) => bG.postExportNodeAsync && bG.postExportNodeAsync(GG, LG, ZG, wG, SG, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(GG, bG, ZG) {
        return this._ApplyExtensions(bG, ((bG, wG) => bG.postExportMaterialAsync && bG.postExportMaterialAsync(GG, wG, ZG)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        return await Promise.all(jw._ExtensionNames.map((async SG => {
          const LG = this._extensions[SG];
          if (LG.postExportMaterialAdditionalTexturesAsync) {
            const SG = await LG.postExportMaterialAdditionalTexturesAsync(GG, bG, ZG);
            wG.push(...SG)
          }
        }))), wG
      }
      _extensionsPostExportTextures(GG, bG, ZG) {
        for (const wG of jw._ExtensionNames) {
          const SG = this._extensions[wG];
          SG.postExportTexture && SG.postExportTexture(GG, bG, ZG)
        }
      }
      _extensionsPostExportMeshPrimitive(GG) {
        for (const bG of jw._ExtensionNames) {
          const ZG = this._extensions[bG];
          ZG.postExportMeshPrimitive && ZG.postExportMeshPrimitive(GG, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const GG of jw._ExtensionNames) {
          const bG = this._extensions[GG];
          bG.preGenerateBinaryAsync && await bG.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(GG) {
        for (const bG of jw._ExtensionNames) {
          const ZG = this._extensions[bG];
          ZG.enabled && GG(ZG)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((GG => {
          var bG, ZG, wG;
          GG.wasUsed && ((bG = this._glTF).extensionsUsed || (bG.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(GG.name) && this._glTF.extensionsUsed.push(GG.name), GG.required && ((ZG = this._glTF).extensionsRequired || (ZG.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(GG.name) && this._glTF.extensionsRequired.push(GG.name)), (wG = this._glTF).extensions || (wG.extensions = {}), GG.onExporting && GG.onExporting())
        }))
      }
      _loadExtensions() {
        for (const GG of jw._ExtensionNames) {
          const bG = jw._ExtensionFactories[GG](this);
          this._extensions[GG] = bG
        }
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hG.c.LastCreatedScene,
          bG = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${KG.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new FZ(this), this._extensions = {}, this._bufferManager = new Zw, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !GG) throw new Error("No scene available to export");
        this._babylonScene = GG, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: GG => GG?.JF?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...bG
        }, this._loadExtensions()
      }
      dispose() {
        for (const GG in this._extensions) {
          this._extensions[GG].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        jw.UnregisterExtension(GG) && SG.Tools.Warn(`Extension with the name ${GG} already exists`), jw._ExtensionFactories[GG] = bG;
        const wG = ZG ?? 0;
        jw._ExtensionOrders[GG] = wG;
        let LG = jw._ExtensionNames.length;
        for (let SG = 0; SG < jw._ExtensionNames.length; SG++) {
          const GG = jw._ExtensionNames[SG];
          if (wG < jw._ExtensionOrders[GG]) {
            LG = SG;
            break
          }
        }
        jw._ExtensionNames.splice(LG, 0, GG)
      }
      static UnregisterExtension(GG) {
        if (!jw._ExtensionFactories[GG]) return !1;
        delete jw._ExtensionFactories[GG], delete jw._ExtensionOrders[GG];
        const bG = jw._ExtensionNames.indexOf(GG);
        return -1 !== bG && jw._ExtensionNames.splice(bG, 1), !0
      }
      _generateJSON(GG, bG, ZG) {
        const wG = {
          byteLength: GG
        };
        return wG.byteLength && (this._glTF.buffers = [wG]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Ah = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (wG.uri = bG + ".bin"), ZG ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(GG) {
        const bG = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZG = this._generateJSON(bG.byteLength, GG, !0),
          wG = new Blob([bG], {
            type: "application/octet-stream"
          }),
          SG = GG + ".gltf",
          LG = GG + ".bin",
          yG = new YG;
        if (yG.files[SG] = ZG, yG.files[LG] = wG, this._imageData)
          for (const kG in this._imageData) yG.files[kG] = this._imageData[kG];
        return yG
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(GG) {
        const bG = GG % 4;
        return 0 === bG ? bG : 4 - bG
      }
      async generateGLBAsync(GG) {
        this._shouldUseGlb = !0;
        const bG = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ZG = this._generateJSON(bG.byteLength),
          wG = GG + ".glb";
        let SG, LG = ZG.length;
        if ("undefined" !== typeof TextEncoder) {
          SG = (new TextEncoder).encode(ZG), LG = SG.length
        }
        const yG = this._getPadding(LG),
          kG = this._getPadding(bG.byteLength),
          UG = 28 + LG + yG + bG.byteLength + kG,
          VG = new Gw(UG);
        if (VG.writeUInt32(1179937895), VG.writeUInt32(2), VG.writeUInt32(UG), VG.writeUInt32(LG + yG), VG.writeUInt32(1313821514), SG) VG.writeTypedArray(SG);
        else {
          const GG = "_".charCodeAt(0);
          for (let bG = 0; bG < LG; ++bG) {
            const wG = ZG.charCodeAt(bG);
            wG != ZG.codePointAt(bG) ? VG.writeUInt8(GG) : VG.writeUInt8(wG)
          }
        }
        for (let YG = 0; YG < yG; ++YG) VG.writeUInt8(32);
        VG.writeUInt32(bG.byteLength + kG), VG.writeUInt32(5130562), VG.writeTypedArray(bG);
        for (let YG = 0; YG < kG; ++YG) VG.writeUInt8(0);
        const pG = new YG;
        return pG.files[wG] = new Blob([VG.getOutputData()], {
          type: "application/octet-stream"
        }), pG
      }
      _setNodeTransformation(GG, bG, ZG) {
        if (bG.getPivotPoint().equalsWithEpsilon(PZ, cZ.d) || SG.Tools.Warn("Pivot points are not supported in the glTF serializer"), !bG.position.equalsWithEpsilon(PZ, cZ.d)) {
          const SG = wG.TmpVectors.mK[0].oW(bG.position);
          ZG && RZ(SG), GG.translation = SG.mwG()
        }
        bG.nY.equalsWithEpsilon(AZ, cZ.d) || (GG.scale = bG.nY.mwG());
        const LG = bG.rotationQuaternion?.clone() || wG.Quaternion.FromEulerAngles(bG.rotation.x, bG.rotation.y, bG.rotation.z);
        LG.equalsWithEpsilon(MZ, cZ.d) || (ZG && TZ(LG), GG.rotation = LG.normalize().mwG())
      }
      _setCameraTransformation(GG, bG, ZG) {
        const SG = wG.TmpVectors.mK[0],
          LG = wG.TmpVectors.Quaternion[0],
          yG = bG.getWorldMatrix();
        if (bG.parent) {
          const GG = bG.parent.getWorldMatrix().invertToRef(wG.TmpVectors.Matrix[0]);
          yG.multiplyToRef(GG, wG.TmpVectors.Matrix[1]).decompose(void 0, LG, SG)
        } else yG.decompose(void 0, LG, SG);
        SG.equalsWithEpsilon(PZ, cZ.d) || (ZG && RZ(SG), GG.translation = SG.mwG()), ZG && TZ(LG), this._babylonScene.useRightHandedSystem || HZ(LG), LG.equalsWithEpsilon(MZ, cZ.d) || (GG.rotation = LG.mwG())
      }
      _listAvailableCameras() {
        for (const GG of this._babylonScene.cameras) {
          const bG = {
            type: GG.mode === ww.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (GG.name && (bG.name = GG.name), "perspective" === bG.type) bG.perspective = {
            aspectRatio: GG.CK().getAspectRatio(GG),
            yfov: GG.fovMode === ww.d.FOVMODE_VERTICAL_FIXED ? GG.fov : GG.fov * GG.CK().getAspectRatio(GG),
            znear: GG.minZ,
            zfar: GG.maxZ
          };
          else if ("orthographic" === bG.type) {
            const ZG = GG.orthoLeft && GG.orthoRight ? .5 * (GG.orthoRight - GG.orthoLeft) : .5 * GG.CK().getRenderWidth(),
              wG = GG.orthoBottom && GG.orthoTop ? .5 * (GG.orthoTop - GG.orthoBottom) : .5 * GG.CK().getRenderHeight();
            bG.orthographic = {
              xmag: ZG,
              ymag: wG,
              znear: GG.minZ,
              zfar: GG.maxZ
            }
          }
          this._camerasMap.set(GG, bG)
        }
      }
      _exportAndAssignCameras() {
        const GG = Array.from(this._camerasMap.values());
        for (const bG of GG) {
          const GG = this._nodesCameraMap.get(bG);
          if (void 0 !== GG) {
            this._cameras.push(bG);
            for (const bG of GG) bG.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const GG of this._babylonScene.skeletons) {
          if (GG.bones.length <= 0) continue;
          const bG = {
            joints: []
          };
          this._skinMap.set(GG, bG)
        }
      }
      _exportAndAssignSkeletons(GG) {
        for (const ZG of this._babylonScene.skeletons) {
          if (ZG.bones.length <= 0) continue;
          const LG = this._skinMap.get(ZG);
          if (void 0 == LG) continue;
          const yG = {};
          let kG = -1;
          for (let GG = 0; GG < ZG.bones.length; ++GG) {
            const bG = ZG.bones[GG],
              wG = bG.getIndex() ?? GG; - 1 !== wG && (yG[wG] = bG, wG > kG && (kG = wG))
          }
          const UG = [];
          for (let ZG = 0; ZG <= kG; ++ZG) {
            const kG = yG[ZG],
              YG = kG.getTransformNode(),
              VG = YG ? this._nodeMap.get(YG) : void 0;
            if (void 0 === VG) {
              SG.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            LG.joints.push(VG);
            const pG = kG.getAbsoluteInverseBindMatrix().clone();
            GG.has(YG) && (bG = pG, lZ.invertToRef(wG.TmpVectors.Matrix[0]).multiplyToRef(bG, bG).multiplyToRef(lZ, bG)), UG.push(pG)
          }
          const YG = this._nodesSkinMap.get(LG);
          if (LG.joints.length > 0 && void 0 !== YG) {
            const GG = new Float32Array(16 * UG.length);
            UG.forEach(((bG, ZG) => {
              GG.set(bG.m, 16 * ZG)
            }));
            const bG = this._bufferManager.createBufferView(GG);
            this._accessors.push(this._bufferManager.createAccessor(bG, "MAT4", 5126, UG.length)), LG.inverseBindMatrices = this._accessors.length - 1, this._skins.push(LG);
            const ZG = this._skins.length - 1;
            for (const wG of YG) wG.skin = ZG
          }
        }
        var bG
      }
      async _exportSceneAsync() {
        const GG = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const bG = this._options.metadataSelector(this._babylonScene.metadata);
          bG && (GG.extras = bG)
        }
        const bG = new Array,
          ZG = new Array,
          wG = new Array,
          SG = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let LG;
        if (SG && !this._options.includeCoordinateSystemConversionNodes)
          for (const YG of this._babylonScene.animationGroups)
            for (const GG of YG.targetedAnimations) {
              const bG = GG.target;
              bG instanceof pG.d && !bG.parent && (LG ?? (LG = new Set)).add(bG)
            }
        for (const YG of this._babylonScene.rootNodes) {
          const GG = YG.animations,
            yG = !!GG && GG.length > 0 || LG?.has(YG);
          SG && !this._options.includeCoordinateSystemConversionNodes && jZ(YG, this._babylonScene.useRightHandedSystem) && !yG ? wG.push(...YG.getChildren()) : this._babylonScene.useRightHandedSystem ? bG.push(YG) : ZG.push(YG)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const yG = new lw(!0, !1);
        GG.nodes.push(...await this._exportNodesAsync(ZG, yG));
        const kG = new lw(!1, !1);
        GG.nodes.push(...await this._exportNodesAsync(bG, kG));
        const UG = new lw(!1, !0);
        GG.nodes.push(...await this._exportNodesAsync(wG, UG)), GG.nodes.length && this._scenes.push(GG), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(yG.getNodesSet()), this._babylonScene.animationGroups.length && pw._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, yG.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(GG) {
        return this._nodeMap.get(GG)
      }
      _getAnimationIndex(GG) {
        return this._animationGroupMap.get(GG)
      }
      _getCameraIndex(GG) {
        const bG = this._camerasMap.get(GG);
        if (!bG) return;
        const ZG = this._cameras.indexOf(bG);
        return ZG >= 0 ? ZG : void 0
      }
      _getMaterialIndex(GG) {
        return this._materialMap.get(GG)
      }
      _getRootIndex(GG, bG) {
        switch (GG) {
          case "nodes":
            return this._getNodeIndex(bG);
          case "animations":
            return this._getAnimationIndex(bG);
          case "cameras":
            return this._getCameraIndex(bG);
          case "materials":
            return this._getMaterialIndex(bG);
          case "meshes": {
            const GG = this._getNodeIndex(bG);
            return void 0 === GG ? void 0 : this._nodes[GG]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(bG)?.index;
          case "images": {
            const GG = this._materialExporter.getTextureInfo(bG)?.index;
            if (void 0 === GG) return;
            const ZG = this._textures[GG];
            for (const bG of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const GG = ZG?.extensions?.[bG]?.source;
              if ("number" === typeof GG) return GG
            }
            return ZG?.source
          }
          case "samplers": {
            const GG = this._materialExporter.getTextureInfo(bG)?.index;
            return void 0 === GG ? void 0 : this._textures[GG]?.sampler
          }
          case "skins": {
            const GG = this._skinMap.get(bG),
              ZG = GG ? this._skins.indexOf(GG) : -1;
            return ZG >= 0 ? ZG : void 0
          }
          case "scenes":
            return bG === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(GG, bG, ZG) {
        const wG = this._nodes[GG];
        if (!wG) throw new Error(`Cannot write ${bG}: glTF node ${GG} does not exist.`);
        wG.extensions || (wG.extensions = {}), wG.extensions[bG] = ZG
      }
      _shouldExportNode(GG) {
        let bG = this._shouldExportNodeMap.get(GG);
        return void 0 === bG && (bG = this._options.shouldExportNode(GG), this._shouldExportNodeMap.set(GG, bG)), bG
      }
      async _exportNodesAsync(GG, bG) {
        const ZG = new Array;
        this._exportBuffers(GG, bG);
        for (const wG of GG) await this._exportNodeAsync(wG, ZG, bG);
        return ZG
      }
      _collectBuffers(GG, bG, ZG, wG, SG) {
        if (this._shouldExportNode(GG) && GG instanceof fG.d && GG.geometry) {
          const LG = GG.geometry.getVertexBuffers();
          if (LG)
            for (const wG in LG) {
              if (!gZ(wG)) continue;
              const yG = LG[wG];
              SG.setHasVertexColorAlpha(yG, GG.hasVertexAlpha);
              const kG = yG._buffer,
                UG = bG.get(kG) || [];
              bG.set(kG, UG), -1 === UG.indexOf(yG) && UG.push(yG);
              const YG = ZG.get(yG) || [];
              ZG.set(yG, YG), -1 === YG.indexOf(GG) && YG.push(GG)
            }
          const yG = GG.morphTargetManager;
          if (yG)
            for (let bG = 0; bG < yG.numTargets; bG++) {
              const ZG = yG.getTarget(bG),
                SG = wG.get(ZG) || [];
              wG.set(ZG, SG), -1 === SG.indexOf(GG) && SG.push(GG)
            }
        }
        for (const LG of GG.getChildren()) this._collectBuffers(LG, bG, ZG, wG, SG)
      }
      _exportBuffers(GG, bG) {
        const ZG = new Map,
          wG = new Map,
          SG = new Map;
        for (const kG of GG) this._collectBuffers(kG, ZG, wG, SG, bG);
        const LG = Array.from(ZG.keys());
        for (const kG of LG) {
          const GG = kG.getData();
          if (!GG) throw new Error("Buffer data is not available");
          const SG = ZG.get(kG);
          if (!SG) continue;
          const LG = SG[0].byteStride;
          if (SG.some((GG => GG.byteStride !== LG))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const yG = NZ(GG).slice();
          for (const bG of SG) {
            const GG = wG.get(bG),
              {
                byteOffset: ZG,
                byteStride: SG,
                componentCount: LG,
                type: kG,
                count: UG,
                normalized: YG,
                kind: pG
              } = qZ(bG, GG);
            switch (pG) {
              case VG.c.NormalKind:
              case VG.c.TangentKind:
                (0, vZ.g)(yG, ZG, SG, LG, kG, UG, YG, (GG => {
                  const bG = Math.sqrt(GG[0] * GG[0] + GG[1] * GG[1] + GG[2] * GG[2]);
                  if (bG > 0) {
                    const ZG = 1 / bG;
                    GG[0] *= ZG, GG[1] *= ZG, GG[2] *= ZG
                  }
                }));
                break;
              case VG.c.ColorKind: {
                const bG = GG.filter((GG => GG.material instanceof Lw.StandardMaterial || null == GG.material)).length;
                if (0 == bG) break;
                if (bG != GG.length) {
                  mG.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                kG == VG.c.UNSIGNED_BYTE && mG.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const wG = new dG.Color3,
                  pG = new dG.e,
                  fG = this._babylonScene.CK().useExactSrgbConversions;
                (0, vZ.g)(yG, ZG, SG, LG, kG, UG, YG, (GG => {
                  3 === GG.length ? (wG.hZG(GG, 0), wG.toLinearSpaceToRef(wG, fG), wG.toArray(GG, 0)) : (pG.hZG(GG, 0), pG.toLinearSpaceToRef(pG, fG), pG.toArray(GG, 0))
                }))
              }
            }
          }
          if (bG.convertToRightHanded) {
            for (const GG of SG) {
              const bG = wG.get(GG),
                {
                  byteOffset: ZG,
                  byteStride: SG,
                  componentCount: LG,
                  type: kG,
                  count: UG,
                  normalized: YG,
                  kind: pG
                } = qZ(GG, bG);
              switch (pG) {
                case VG.c.PositionKind:
                case VG.c.NormalKind:
                case VG.c.TangentKind:
                  (0, vZ.g)(yG, ZG, SG, LG, kG, UG, YG, (GG => {
                    GG[0] = -GG[0]
                  }))
              }
            }
            bG.convertedToRightHandedBuffers.set(kG, yG)
          }
          const UG = this._bufferManager.createBufferView(yG, LG);
          bG.setVertexBufferView(kG, UG);
          const YG = new Map;
          for (const bG of SG) {
            const GG = wG.get(bG),
              {
                kind: ZG,
                totalVertices: SG
              } = qZ(bG, GG);
            switch (ZG) {
              case VG.c.MatricesIndicesKind:
              case VG.c.MatricesIndicesExtraKind:
                if (bG.type == VG.c.FLOAT) {
                  const GG = bG.getFloatData(SG);
                  null !== GG && YG.set(bG, GG)
                }
            }
          }
          0 !== YG.size && mG.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const pG = Array.from(YG.keys());
          for (const ZG of pG) {
            const GG = YG.get(ZG);
            if (!GG) continue;
            const wG = GG.some((GG => GG >= 256)),
              SG = new(wG ? Uint16Array : Uint8Array)(GG.length);
            for (let bG = 0; bG < GG.length; bG++) SG[bG] = GG[bG];
            const LG = this._bufferManager.createBufferView(SG, 4 * (wG ? 2 : 1));
            bG.setRemappedBufferView(kG, ZG, LG)
          }
        }
        const yG = Array.from(SG.keys());
        for (const kG of yG) {
          const GG = SG.get(kG);
          if (!GG) continue;
          const ZG = fw(kG, GG[0], this._bufferManager, this._bufferViews, this._accessors, bG.convertToRightHanded);
          for (const wG of GG) bG.bindMorphDataToMesh(wG, ZG)
        }
      }
      async _exportNodeAsync(GG, bG, ZG) {
        let wG = this._nodeMap.get(GG);
        if (void 0 !== wG) return void(bG.includes(wG) || bG.push(wG));
        const SG = await this._createNodeAsync(GG, ZG);
        if (SG) {
          wG = this._nodes.length, this._nodes.push(SG), this._nodeMap.set(GG, wG), ZG.pushExportedNode(GG), bG.push(wG);
          const LG = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            yG = [];
          this._babylonScene.animationGroups.length || (pw._CreateMorphTargetAnimationFromMorphTargetAnimations(GG, LG, yG, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZG.convertToRightHanded, this._options.shouldExportAnimation), GG.animations.length && pw._CreateNodeAnimationFromNodeAnimations(GG, LG, yG, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ZG.convertToRightHanded, this._options.shouldExportAnimation)), LG.channels.length && LG.samplers.length && this._animations.push(LG), yG.forEach((GG => {
            GG.channels.length && GG.samplers.length && this._animations.push(GG)
          }))
        }
        const LG = SG ? [] : bG;
        for (const yG of GG.getChildren()) await this._exportNodeAsync(yG, LG, ZG);
        SG && LG.length && (SG.children = LG)
      }
      async _createNodeAsync(GG, bG) {
        if (!this._shouldExportNode(GG)) return null;
        const ZG = {};
        if (GG.name && (ZG.name = GG.name), GG.metadata) {
          const bG = this._options.metadataSelector(GG.metadata);
          bG && (ZG.extras = bG)
        }
        if (GG instanceof pG.d && (this._setNodeTransformation(ZG, GG, bG.convertToRightHanded), GG instanceof fG.d)) {
          const wG = GG instanceof QG.e ? GG.ESG : GG;
          if (wG.aE && wG.aE.length > 0 && (ZG.mesh = await this._exportMeshAsync(wG, bG)), GG.skeleton) {
            const bG = this._skinMap.get(GG.skeleton);
            void 0 !== bG && (void 0 === this._nodesSkinMap.get(bG) && this._nodesSkinMap.set(bG, []), this._nodesSkinMap.get(bG)?.push(ZG))
          }
        }
        if (GG instanceof aZ.e) {
          const wG = this._camerasMap.get(GG);
          if (wG) {
            void 0 === this._nodesCameraMap.get(wG) && this._nodesCameraMap.set(wG, []), this._setCameraTransformation(ZG, GG, bG.convertToRightHanded);
            const SG = GG.parent;
            if (null !== SG && DZ(GG, SG)) {
              const GG = this._nodeMap.get(SG);
              if (void 0 !== GG) {
                const bG = this._nodes[GG];
                return tZ(ZG, bG), this._nodesCameraMap.get(wG)?.push(bG), null
              }
            }
            this._nodesCameraMap.get(wG)?.push(ZG)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", ZG, GG, this._nodeMap, bG.convertToRightHanded) ? ZG : (mG.c.Warn(`Not exporting node ${GG.name}`), null)
      }
      _exportIndices(GG, bG, ZG, wG, SG, yG, kG, UG, YG) {
        let VG = null;
        YG.mode = function(GG) {
          switch (GG) {
            case LG.e.TriangleFillMode:
              return 4;
            case LG.e.TriangleStripDrawMode:
              return 5;
            case LG.e.TriangleFanDrawMode:
              return 6;
            case LG.e.PointListDrawMode:
            case LG.e.PointFillMode:
              return 0;
            case LG.e.LineLoopDrawMode:
              return 2;
            case LG.e.LineListDrawMode:
              return 1;
            case LG.e.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${GG}`)
        }(yG);
        const pG = kG !== LG.e.CounterClockWiseSideOrientation && function(GG) {
          switch (GG) {
            case LG.e.TriangleFillMode:
            case LG.e.TriangleStripDrawMode:
            case LG.e.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(yG);
        if (pG) {
          if (yG === LG.e.TriangleStripDrawMode || yG === LG.e.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const kG = bG ? new Uint32Array(wG) : new Uint16Array(wG);
          if (GG)
            for (let bG = 0; bG + 2 < wG; bG += 3) kG[bG] = GG[ZG + bG] + SG, kG[bG + 1] = GG[ZG + bG + 2] + SG, kG[bG + 2] = GG[ZG + bG + 1] + SG;
          else
            for (let GG = 0; GG + 2 < wG; GG += 3) kG[GG] = GG, kG[GG + 1] = GG + 2, kG[GG + 2] = GG + 1;
          VG = kG
        } else if (GG && 0 !== SG) {
          const LG = bG ? new Uint32Array(wG) : new Uint16Array(wG);
          for (let bG = 0; bG < wG; bG++) LG[bG] = GG[ZG + bG] + SG;
          VG = LG
        } else GG && (VG = function(GG, bG, ZG, wG) {
          let SG = GG;
          return 0 === bG && ZG === GG.length || (SG = Array.isArray(GG) ? GG.slice(bG, bG + ZG) : GG.subarray(bG, bG + ZG)), SG instanceof Int32Array ? new Uint32Array(SG.buffer, SG.byteOffset, SG.length) : Array.isArray(SG) ? wG ? new Uint32Array(SG) : new Uint16Array(SG) : SG
        }(GG, ZG, wG, bG));
        if (VG) {
          let LG = UG.getIndicesAccessor(GG, ZG, wG, SG, pG);
          if (void 0 === LG) {
            const yG = this._bufferManager.createBufferView(VG),
              kG = bG ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(yG, "SCALAR", kG, wG, 0)), LG = this._accessors.length - 1, UG.setIndicesAccessor(GG, ZG, wG, SG, pG, LG)
          }
          YG.indices = LG
        }
      }
      _exportVertexBuffer(GG, bG, ZG, wG, SG, LG) {
        const yG = GG.getKind();
        if (!gZ(yG)) return;
        if (yG.startsWith("uv") && !this._options.exportUnusedUVs && (!bG || !this._materialNeedsUVsSet.has(bG))) return;
        let kG = SG.getVertexAccessor(GG, ZG, wG);
        if (void 0 === kG) {
          const bG = SG.convertedToRightHandedBuffers.get(GG._buffer) || GG._buffer.getData(),
            LG = yG === VG.c.PositionKind ? function(GG, bG, ZG, wG) {
              const {
                byteOffset: SG,
                byteStride: LG,
                type: yG,
                normalized: kG
              } = bG, UG = bG.getSize(), YG = new Array(UG).fill(1 / 0), VG = new Array(UG).fill(-1 / 0);
              return (0, vZ.g)(GG, SG + ZG * LG, LG, UG, yG, wG * UG, kG, (GG => {
                for (let bG = 0; bG < UG; bG++) YG[bG] = Math.min(YG[bG], GG[bG]), VG[bG] = Math.max(VG[bG], GG[bG])
              })), {
                min: YG,
                max: VG
              }
            }(bG, GG, ZG, wG) : void 0,
            UG = (yG === VG.c.MatricesIndicesKind || yG === VG.c.MatricesIndicesExtraKind) && GG.type === VG.c.FLOAT,
            YG = UG ? VG.c.UNSIGNED_BYTE : GG.type,
            pG = UG ? void 0 : GG.normalized,
            fG = UG ? SG.getRemappedBufferView(GG._buffer, GG) : SG.getVertexBufferView(GG._buffer),
            QG = GG.byteOffset + ZG * GG.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(fG, function(GG, bG) {
            if (GG == VG.c.ColorKind) return bG ? "VEC4" : "VEC3";
            switch (GG) {
              case VG.c.PositionKind:
              case VG.c.NormalKind:
                return "VEC3";
              case VG.c.TangentKind:
              case VG.c.MatricesIndicesKind:
              case VG.c.MatricesIndicesExtraKind:
              case VG.c.MatricesWeightsKind:
              case VG.c.MatricesWeightsExtraKind:
                return "VEC4";
              case VG.c.UVKind:
              case VG.c.UV2Kind:
              case VG.c.UV3Kind:
              case VG.c.UV4Kind:
              case VG.c.UV5Kind:
              case VG.c.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${GG}`)
          }(yG, SG.hasVertexColorAlpha(GG)), YG, wG, QG, LG, pG)), kG = this._accessors.length - 1, SG.setVertexAccessor(GG, ZG, wG, kG)
        }
        LG.attributes[function(GG) {
          switch (GG) {
            case VG.c.PositionKind:
              return "POSITION";
            case VG.c.NormalKind:
              return "NORMAL";
            case VG.c.TangentKind:
              return "TANGENT";
            case VG.c.ColorKind:
              return "COLOR_0";
            case VG.c.UVKind:
              return "TEXCOORD_0";
            case VG.c.UV2Kind:
              return "TEXCOORD_1";
            case VG.c.UV3Kind:
              return "TEXCOORD_2";
            case VG.c.UV4Kind:
              return "TEXCOORD_3";
            case VG.c.UV5Kind:
              return "TEXCOORD_4";
            case VG.c.UV6Kind:
              return "TEXCOORD_5";
            case VG.c.MatricesIndicesKind:
              return "JOINTS_0";
            case VG.c.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case VG.c.MatricesWeightsKind:
              return "WEIGHTS_0";
            case VG.c.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${GG}`)
        }(yG)] = kG
      }
      async _exportMaterialAsync(GG, bG, ZG, wG) {
        let SG = this._materialMap.get(GG);
        if (void 0 === SG) {
          const wG = bG && Object.keys(bG).some((GG => GG.startsWith("uv")));
          if ((GG = GG instanceof Sw.d ? GG.UGG[ZG.materialIndex] : GG) instanceof Xb) SG = await this._materialExporter.exportPBRMaterialAsync(GG, wG);
          else if (GG instanceof Lw.StandardMaterial) SG = await this._materialExporter.exportStandardMaterialAsync(GG, wG);
          else {
            if (!(GG instanceof xb)) return void mG.c.Warn(`Unsupported material '${GG.name}' with type ${GG.getClassName()}`);
            SG = await this._materialExporter.exportOpenPBRMaterialAsync(GG, wG)
          }
          this._materialMap.set(GG, SG)
        }
        wG.material = SG
      }
      async _exportMeshAsync(GG, bG) {
        let ZG = bG.getMesh(GG);
        if (void 0 !== ZG) return ZG;
        const wG = {
          primitives: []
        };
        ZG = this._meshes.length, this._meshes.push(wG), bG.setMesh(GG, ZG);
        const SG = GG.isUnIndexed ? null : GG.IwG(),
          yG = GG.geometry?.getVertexBuffers(),
          kG = bG.getMorphTargetsFromMesh(GG),
          UG = GG instanceof Qw.e,
          YG = GG instanceof aw,
          VG = GG.aE;
        if (yG && VG && VG.length > 0)
          for (const pG of VG) {
            const ZG = {
                attributes: {}
              },
              VG = pG.vK() || this._babylonScene.defaultMaterial;
            if (YG) {
              const bG = {
                  name: VG.name
                },
                wG = GG,
                SG = dG.Color3.White(),
                LG = wG.material?.alpha ?? 1,
                yG = wG.greasedLineMaterial?.color ?? SG;
              (!yG.equalsWithEpsilon(SG, cZ.d) || LG < 1) && (bG.pbrMetallicRoughness = {
                baseColorFactor: [...yG.mwG(), LG]
              }), this._materials.push(bG), ZG.material = this._materials.length - 1
            } else if (UG) {
              const bG = {
                  name: VG.name
                },
                wG = GG;
              (!wG.color.equalsWithEpsilon(dG.Color3.White(), cZ.d) || wG.alpha < 1) && (bG.pbrMetallicRoughness = {
                baseColorFactor: [...wG.color.mwG(), wG.alpha]
              }), this._materials.push(bG), ZG.material = this._materials.length - 1
            } else await this._exportMaterialAsync(VG, yG, pG, ZG);
            const fG = UG || YG ? LG.e.LineListDrawMode : GG.overrideRenderingFillMode ?? VG.fillMode;
            let QG = VG._getEffectiveOrientation(GG);
            bG.wasAddedByNoopNode && !GG.Dv().useRightHandedSystem && (QG = QG === LG.e.ClockWiseSideOrientation ? LG.e.CounterClockWiseSideOrientation : LG.e.ClockWiseSideOrientation), this._exportIndices(SG, SG ? (0, vZ.e)(SG, pG.indexCount, pG.indexStart, pG.verticesStart) : pG.verticesCount > 65535, SG ? pG.indexStart : pG.verticesStart, SG ? pG.indexCount : pG.verticesCount, -pG.verticesStart, fG, QG, bG, ZG);
            for (const GG of Object.values(yG)) this._exportVertexBuffer(GG, VG, pG.verticesStart, pG.verticesCount, bG, ZG);
            if (kG) {
              ZG.targets = [];
              for (const GG of kG) ZG.targets.push(GG.attributes)
            }
            wG.primitives.push(ZG), this._extensionsPostExportMeshPrimitive(ZG)
          }
        if (kG) {
          wG.weights = [], wG.extras || (wG.extras = {}), wG.extras.targetNames = [];
          for (const GG of kG) wG.weights.push(GG.influence), wG.extras.targetNames.push(GG.name)
        }
        return ZG
      }
    }
    jw._ExtensionNames = new Array, jw._ExtensionFactories = {}, jw._ExtensionOrders = {};
    class Pw {
      static async GLTFAsync(GG, bG, ZG) {
        ZG && ZG.exportWithoutWaitingForScene || await GG.whenReadyAsync();
        const wG = new jw(GG, ZG),
          SG = await wG.generateGLTFAsync(bG.replace(/\.[^/.]+$/, ""));
        return wG.dispose(), SG
      }
      static async GLBAsync(GG, bG, ZG) {
        ZG && ZG.exportWithoutWaitingForScene || await GG.whenReadyAsync();
        const wG = new jw(GG, ZG),
          SG = await wG.generateGLBAsync(bG.replace(/\.[^/.]+$/, ""));
        return wG.dispose(), SG
      }
    }
    const Mw = "EXT_mesh_gpu_instancing";

    function Aw(GG, bG) {
      const ZG = new Float32Array(3 * bG);
      for (let wG = 0; wG < bG; wG++) ZG[3 * wG + 0] = GG[4 * wG + 0], ZG[3 * wG + 1] = GG[4 * wG + 1], ZG[3 * wG + 2] = GG[4 * wG + 2];
      return ZG
    }
    class sw {
      constructor(GG) {
        this.name = Mw, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(GG, bG, ZG, wG, SG, LG) {
        return await new Promise((GG => {
          if (bG && ZG instanceof Xw.c && ZG.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const GG = AG.p.Zero(),
              wG = AG.g.Identity(),
              yG = AG.p.One(),
              kG = ZG.thinInstanceGetWorldMatrices(),
              UG = AG.j.mK[2],
              YG = AG.j.Quaternion[1],
              VG = AG.j.mK[3];
            let pG = !1,
              fG = !1,
              QG = !1;
            const KG = new Float32Array(3 * ZG.B5),
              hG = new Float32Array(4 * ZG.B5),
              dG = new Float32Array(3 * ZG.B5);
            let JG = 0;
            for (const bG of kG) bG.decompose(VG, YG, UG), SG && (RZ(UG), TZ(YG)), KG.set(UG.mwG(), 3 * JG), hG.set(YG.normalize().mwG(), 4 * JG), dG.set(VG.mwG(), 3 * JG), pG = pG || !UG.equalsWithEpsilon(GG), fG = fG || !YG.equalsWithEpsilon(wG), QG = QG || !VG.equalsWithEpsilon(yG), JG++;
            const rG = {
              attributes: {}
            };
            pG && (rG.attributes.TRANSLATION = this._buildAccessor(KG, "VEC3", ZG.B5, LG)), fG && (rG.attributes.ROTATION = this._buildAccessor(hG, "VEC4", ZG.B5, LG)), QG && (rG.attributes.SCALE = this._buildAccessor(dG, "VEC3", ZG.B5, LG));
            let zG = ZG._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (zG) {
              const GG = ZG.B5,
                bG = "VEC3";
              ZG.hasVertexAlpha && zG.length === 4 * GG ? (this._instanceColorWarned || (mG.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), zG = Aw(zG, GG)) : zG.length === 4 * GG && (zG = Aw(zG, GG)), zG.length === 3 * GG && (rG.attributes._COLOR_0 = this._buildAccessor(zG, bG, GG, LG))
            }
            bG.extensions = bG.extensions || {}, bG.extensions[Mw] = rG
          }
          GG(bG)
        }))
      }
      _buildAccessor(GG, bG, ZG, wG) {
        const SG = wG.createBufferView(GG),
          LG = wG.createAccessor(SG, bG, 5126, ZG);
        return this._exporter._accessors.push(LG), this._exporter._accessors.length - 1
      }
    }
    let qw = !1;

    function nw() {
      qw || (qw = !0, jw.RegisterExtension(Mw, (GG => new sw(GG))))
    }
    ZG(40865);
    nw();
    var gw = ZG(42309);

    function ew(GG, bG, ZG, wG) {
      const SG = GG;
      let LG = null,
        yG = null,
        kG = null,
        UG = null;
      const YG = {},
        VG = bG.find((GG => "POSITION" === GG.dracoName));
      if (!VG) throw new Error("Draco: Missing position attribute for encoding.");
      if (!ZG) {
        const GG = VG.data.length / VG.size;
        ZG = new(GG > 65535 ? Uint32Array : Uint16Array)(GG);
        for (let bG = 0; bG < GG; bG++) ZG[bG] = bG
      }
      try {
        LG = new SG.Encoder, yG = new SG.MeshBuilder, kG = new SG.Mesh, yG.AddFacesToMesh(kG, ZG.length / 3, ZG);
        const GG = new Map([
          [Float32Array, (GG, bG, ZG, wG, SG, LG) => GG.AddFloatAttribute(bG, ZG, wG, SG, LG)],
          [Uint32Array, (GG, bG, ZG, wG, SG, LG) => GG.AddUInt32Attribute(bG, ZG, wG, SG, LG)],
          [Uint16Array, (GG, bG, ZG, wG, SG, LG) => GG.AddUInt16Attribute(bG, ZG, wG, SG, LG)],
          [Uint8Array, (GG, bG, ZG, wG, SG, LG) => GG.AddUInt8Attribute(bG, ZG, wG, SG, LG)],
          [Int32Array, (GG, bG, ZG, wG, SG, LG) => GG.AddInt32Attribute(bG, ZG, wG, SG, LG)],
          [Int16Array, (GG, bG, ZG, wG, SG, LG) => GG.AddInt16Attribute(bG, ZG, wG, SG, LG)],
          [Int8Array, (GG, bG, ZG, wG, SG, LG) => GG.AddInt8Attribute(bG, ZG, wG, SG, LG)]
        ]);
        for (const ZG of bG) {
          ZG.data instanceof Uint8ClampedArray && (ZG.data = new Uint8Array(ZG.data));
          const bG = GG.get(ZG.data.constructor),
            UG = ZG.data.length / ZG.size;
          YG[ZG.kind] = bG(yG, kG, SG[ZG.dracoName], UG, ZG.size, ZG.data), wG.quantizationBits && wG.quantizationBits[ZG.dracoName] && LG.SetAttributeQuantization(SG[ZG.dracoName], wG.quantizationBits[ZG.dracoName])
        }
        wG.method && LG.SetEncodingMethod(SG[wG.method]), void 0 !== wG.encodeSpeed && void 0 !== wG.decodeSpeed && LG.SetSpeedOptions(wG.encodeSpeed, wG.decodeSpeed), UG = new SG.DracoInt8Array;
        const VG = LG.EncodeMeshToDracoBuffer(kG, UG);
        if (VG <= 0) throw new Error("Draco: Failed to encode.");
        const pG = new Int8Array(VG);
        for (let bG = 0; bG < VG; bG++) pG[bG] = UG.GetValue(bG);
        return {
          data: pG,
          attributeIds: YG
        }
      } finally {
        kG && SG.destroy(kG), yG && SG.destroy(yG), LG && SG.destroy(LG), UG && SG.destroy(UG)
      }
    }

    function Rw() {
      let GG;
      onmessage = bG => {
        const ZG = bG.data;
        switch (ZG.id) {
          case "init": {
            ZG.url && importScripts(ZG.url);
            const bG = ZG.wasmBinary ? {
              wasmBinary: ZG.wasmBinary
            } : {};
            GG = DracoEncoderModule(bG), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!GG) throw new Error("Draco: Encoder module is not available.");
            GG.then((GG => {
              const bG = ew(GG, ZG.attributes, ZG.indices, ZG.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: bG
              }, bG ? [bG.data.buffer] : void 0)
            })).catch((GG => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: GG.message
              })
            }))
        }
      }
    }
    class Tw {
      constructor(GG) {
        if (GG.workerPool) return void(this._workerPoolPromise = Promise.resolve(GG.workerPool));
        const bG = GG.wasmBinary,
          ZG = GG.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          wG = ZG && "function" === typeof Worker && "function" === typeof URL,
          SG = wG || !GG.jsModule,
          LG = GG.wasmUrl && GG.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: SG ? ib.f.GetBabylonScriptURL(GG.wasmUrl, !0) : "",
            wasmBinaryPromise: bG ? Promise.resolve(bG) : ib.f.LoadFileAsync(ib.f.GetBabylonScriptURL(GG.wasmBinaryUrl, !0))
          } : {
            url: SG ? ib.f.GetBabylonScriptURL(GG.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        wG ? this._workerPoolPromise = LG.wasmBinaryPromise.then((GG => {
          const bG = this._getWorkerContent(),
            wG = URL.createObjectURL(new Blob([bG], {
              type: "application/javascript"
            }));
          return new gw.c(ZG, (() => async function(GG, bG, ZG) {
            return await new Promise(((wG, SG) => {
              const LG = bG => {
                  GG.removeEventListener("error", LG), GG.removeEventListener("message", yG), SG(bG)
                },
                yG = bG => {
                  "initDone" === bG.data.id && (GG.removeEventListener("error", LG), GG.removeEventListener("message", yG), wG(GG))
                };
              if (GG.addEventListener("error", LG), GG.addEventListener("message", yG), bG) {
                const wG = bG.slice(0);
                GG.postMessage({
                  id: "init",
                  url: ZG,
                  wasmBinary: wG
                }, [wG])
              } else GG.postMessage({
                id: "init",
                url: ZG
              })
            }))
          }(new Worker(wG), GG, LG.url)))
        })) : this._modulePromise = LG.wasmBinaryPromise.then((async bG => {
          if (!this._isModuleAvailable() && !GG.jsModule) {
            if (!LG.url) throw new Error("Draco codec module is not available");
            await ib.f.LoadBabylonScriptAsync(LG.url)
          }
          return await this._createModuleAsync(bG, GG.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((GG => {
          GG.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function Hw() {
      const GG = GG => !!GG && "object" === typeof GG;
      for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
      return ZG.reduce(((bG, ZG) => {
        const wG = Object.keys(ZG);
        for (const SG of wG) {
          const wG = bG[SG],
            LG = ZG[SG];
          Array.isArray(wG) && Array.isArray(LG) ? bG[SG] = wG.concat(LG) : GG(wG) && GG(LG) ? bG[SG] = Hw(wG, LG) : bG[SG] = LG
        }
        return bG
      }), {})
    }

    function tw(GG) {
      return GG === sG.l.PositionKind ? "POSITION" : GG === sG.l.NormalKind ? "NORMAL" : GG === sG.l.ColorKind ? "COLOR" : GG.startsWith(sG.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Dw = {
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
    class Nw extends Tw {
      static get DefaultAvailable() {
        return !!((GG = Nw.DefaultConfiguration).wasmUrl && (GG.wasmBinary || GG.wasmBinaryUrl) && "object" === typeof WebAssembly || GG.fallbackUrl);
        var GG
      }
      static get Default() {
        return Nw._Default ?? (Nw._Default = new Nw), Nw._Default
      }
      static ResetDefault(GG) {
        Nw._Default && (GG || Nw._Default.dispose(), Nw._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(GG, bG) {
        return {
          module: await (bG || DracoEncoderModule)({
            wasmBinary: GG
          })
        }
      }
      _getWorkerContent() {
        return `${ew}(${Rw})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nw.DefaultConfiguration)
      }
      async _encodeAsync(GG, bG, ZG) {
        const wG = ZG ? Hw(Dw, ZG) : Dw;
        if (this._workerPoolPromise) {
          const ZG = await this._workerPoolPromise;
          return await new Promise(((SG, LG) => {
            ZG.push(((ZG, yG) => {
              const kG = GG => {
                  ZG.removeEventListener("error", kG), ZG.removeEventListener("message", UG), LG(GG), yG()
                },
                UG = GG => {
                  "encodeMeshSuccess" === GG.data.id ? (ZG.removeEventListener("error", kG), ZG.removeEventListener("message", UG), SG(GG.data.encodedMeshData), yG()) : "encodeMeshError" === GG.data.id && (ZG.removeEventListener("error", kG), ZG.removeEventListener("message", UG), LG(new Error(GG.data.errorMessage)), yG())
                };
              ZG.addEventListener("error", kG), ZG.addEventListener("message", UG);
              const YG = [];
              for (const bG of GG) YG.push(bG.data.buffer);
              bG && YG.push(bG.buffer), ZG.postMessage({
                id: "encodeMesh",
                attributes: GG,
                indices: bG,
                options: wG
              }, YG)
            }))
          }))
        }
        if (this._modulePromise) {
          return ew((await this._modulePromise).module, GG, bG, wG)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(GG, bG) {
        if (0 == GG.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        GG instanceof Xw.c && GG.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === bG?.method && (mG.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), bG.method = "MESH_SEQUENTIAL_ENCODING");
        const ZG = function(GG) {
            let bG = GG.IwG(void 0, !0);
            return !bG || bG instanceof Uint32Array || bG instanceof Uint16Array || (bG = ((0, vZ.e)(bG, bG.length) ? Uint32Array : Uint16Array).from(bG)), bG
          }(GG),
          wG = function(GG, bG) {
            const ZG = [];
            for (const wG of GG.getVerticesDataKinds()) {
              if (bG?.includes(wG)) {
                if (wG === sG.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const SG = GG.getVertexBuffer(wG),
                LG = SG.getSize(),
                yG = (0, vZ.m)(SG.getData(), LG, SG.type, SG.byteOffset, SG.byteStride, GG.getTotalVertices(), !0);
              ZG.push({
                kind: wG,
                dracoName: tw(wG),
                size: LG,
                data: yG
              })
            }
            return ZG
          }(GG, bG?.excludedAttributes);
        return await this._encodeAsync(wG, ZG, bG)
      }
    }
    Nw.DefaultConfiguration = {
      wasmUrl: `${ib.f._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${ib.f._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${ib.f._DefaultCdnUrl}/draco_encoder.js`
    }, Nw._Default = null;
    const Ow = "KHR_draco_mesh_compression";
    class xw {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(GG) {
        this.name = Ow, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === GG.options.meshCompressionMethod && Nw.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(GG, bG, ZG) {
        if (!this.enabled) return;
        if (4 !== GG.mode && 5 !== GG.mode) return void mG.c.Warn("Cannot compress primitive with mode " + GG.mode + ".");
        const wG = [],
          SG = [];
        let LG = null;
        if (void 0 !== GG.indices) {
          const yG = ZG[GG.indices],
            kG = bG.getBufferView(yG);
          LG = bG.getData(kG).slice(), wG.push(kG), SG.push(yG)
        }
        const yG = [];
        for (const [VG, pG] of Object.entries(GG.attributes)) {
          const GG = ZG[pG],
            LG = bG.getBufferView(GG),
            UG = nZ(GG.type),
            YG = (0, vZ.m)(bG.getData(LG), UG, GG.componentType, GG.byteOffset || 0, LG.byteStride || (0, vZ.l)(GG.componentType) * UG, GG.count, !0);
          yG.push({
            kind: VG,
            dracoName: (kG = VG, "POSITION" === kG ? "POSITION" : "NORMAL" === kG ? "NORMAL" : kG.startsWith("COLOR") ? "COLOR" : kG.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: nZ(GG.type),
            data: YG
          }), wG.push(LG), SG.push(GG)
        }
        var kG;
        const UG = {
            method: GG.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          YG = Nw.Default._encodeAsync(yG, LG, UG).then((ZG => {
            const LG = {
                bufferView: -1,
                attributes: ZG.attributeIds
              },
              yG = bG.createBufferView(ZG.data);
            bG.setBufferView(LG, yG);
            for (const GG of wG) this._bufferViewsUsed.add(GG);
            for (const GG of SG) this._accessorsUsed.add(GG);
            GG.extensions || (GG.extensions = {}), GG.extensions[Ow] = LG
          })).catch((GG => {
            mG.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + GG.message)
          }));
        this._encodePromises.push(YG), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(GG) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((bG => {
          GG.getPropertiesWithBufferView(bG).every((GG => this._accessorsUsed.has(GG))) && GG.removeBufferView(bG)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Bw = !1;

    function GS() {
      Bw || (Bw = !0, jw.RegisterExtension(Ow, (GG => new xw(GG))))
    }
    GS();
    var bS = ZG(42009);
    const ZS = "KHR_lights_punctual",
      wS = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      SS = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      LS = AG.p.Backward();
    class yS {
      constructor(GG) {
        this.name = ZS, this.enabled = !0, this.required = !1, this._exporter = GG
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[ZS] = this._lights
      }
      async postExportNodeAsync(GG, bG, ZG, wG, SG) {
        return await new Promise((LG => {
          if (!(ZG instanceof Vw.c)) return void LG(bG);
          const yG = ZG.getTypeID() == Vw.c.LIGHTTYPEID_POINTLIGHT ? "point" : ZG.getTypeID() == Vw.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : ZG.getTypeID() == Vw.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!yG || !(ZG instanceof bS.b)) return mG.c.Warn(`${GG}: Light ${ZG.name} is not supported in ${ZS}`), void LG(bG);
          if (ZG.falloffType !== Vw.c.FALLOFF_GLTF && mG.c.Warn(`${GG}: Light falloff for ${ZG.name} does not match the ${ZS} specification!`), !ZG.position.ZkG(0, 0, 0)) {
            const GG = AG.j.mK[0].oW(ZG.position);
            SG && RZ(GG), bG.translation = GG.mwG()
          }
          if ("point" !== yG) {
            const GG = ZG.direction.normalizeToRef(AG.j.mK[0]);
            SG && RZ(GG);
            const wG = AG.g.FromUnitVectorsToRef(LS, GG, AG.j.Quaternion[0]);
            AG.g.IsIdentity(wG) || (bG.rotation = wG.mwG())
          }
          const kG = {
            type: yG,
            name: ZG.name,
            color: ZG.diffuse.mwG(),
            intensity: ZG.intensity,
            range: ZG.range
          };
          if (OZ(kG, wS), "spot" === yG) {
            const GG = ZG;
            kG.spot = {
              innerConeAngle: GG.innerAngle / 2,
              outerConeAngle: GG.angle / 2
            }, OZ(kG.spot, SS)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(kG);
          const UG = {
              light: this._lights.lights.length - 1
            },
            YG = ZG.parent;
          if (YG && DZ(ZG, YG)) {
            const GG = wG.get(YG);
            if (GG) {
              const ZG = this._exporter._nodes[GG];
              return tZ(bG, ZG), ZG.extensions || (ZG.extensions = {}), ZG.extensions[ZS] = UG, void LG(null)
            }
          }
          bG.extensions || (bG.extensions = {}), bG.extensions[ZS] = UG, LG(bG)
        }))
      }
    }
    let kS = !1;

    function US() {
      kS || (kS = !0, jw.RegisterExtension(ZS, (GG => new yS(GG))))
    }
    US();
    const YS = "KHR_interactivity";
    class VS {
      constructor(GG) {
        this._exporter = GG, this.name = YS, this.enabled = !!GG.options.khrInteractivity, this.required = GG.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var GG, bG, ZG;
        const wG = this._exporter.options.khrInteractivity;
        if (!wG) return;
        const SG = wG.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: GG => this._exporter._getNodeIndex(GG),
          getAnimationIndex: GG => this._exporter._getAnimationIndex(GG),
          getCameraIndex: GG => this._exporter._getCameraIndex(GG),
          getMaterialIndex: GG => this._exporter._getMaterialIndex(GG),
          getRootIndex: (GG, bG) => this._exporter._getRootIndex(GG, bG),
          setNodeExtension: (GG, bG, ZG) => this._exporter._setNodeExtension(GG, bG, ZG)
        });
        this._exporter._glTF.extensions[YS] = SG;
        for (const LG of wG.additionalExtensionsUsed)(GG = this._exporter._glTF).extensionsUsed || (GG.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(LG) && this._exporter._glTF.extensionsUsed.push(LG);
        for (const LG of wG.additionalExtensionsRequired)(bG = this._exporter._glTF).extensionsUsed || (bG.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(LG) && this._exporter._glTF.extensionsUsed.push(LG), (ZG = this._exporter._glTF).extensionsRequired || (ZG.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(LG) && this._exporter._glTF.extensionsRequired.push(LG)
      }
    }
    let pS = !1;

    function fS() {
      pS || (pS = !0, jw.RegisterExtension(YS, (GG => new VS(GG)), 200))
    }
    fS();
    const QS = "EXT_lights_area",
      KS = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      hS = {
        aspect: 1
      },
      dS = AG.p.Backward();
    class JS {
      constructor(GG) {
        this.name = QS, this.enabled = !0, this.required = !1, this._exporter = GG
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[QS] = this._lights
      }
      async postExportNodeAsync(GG, bG, ZG, wG, SG) {
        return await new Promise((LG => {
          if (!(ZG instanceof Vw.c)) return void LG(bG);
          const yG = ZG.getTypeID() == Vw.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!yG) return mG.c.Warn(`${GG}: Light ${ZG.name} is not supported in ${QS}`), void LG(bG);
          const kG = ZG;
          if (kG.falloffType !== Vw.c.FALLOFF_GLTF && mG.c.Warn(`${GG}: Light falloff for ${ZG.name} does not match the ${QS} specification!`), !kG.position.ZkG(0, 0, 0)) {
            const GG = AG.j.mK[0].oW(kG.position);
            SG && RZ(GG), bG.translation = GG.mwG()
          }
          const UG = AG.p.Forward();
          SG && RZ(UG);
          const YG = AG.g.FromUnitVectorsToRef(dS, UG, AG.j.Quaternion[0]);
          AG.g.IsIdentity(YG) || (bG.rotation = YG.mwG());
          const VG = {
            type: yG,
            name: kG.name,
            color: kG.diffuse.mwG(),
            intensity: kG.intensity,
            size: kG.height,
            rect: {
              aspect: kG.width / kG.height
            }
          };
          OZ(VG, KS), VG.rect && OZ(VG.rect, hS), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(VG);
          const pG = {
              light: this._lights.lights.length - 1
            },
            fG = ZG.parent;
          if (fG && DZ(kG, fG)) {
            const GG = wG.get(fG);
            if (GG) {
              const ZG = this._exporter._nodes[GG];
              return tZ(bG, ZG), ZG.extensions || (ZG.extensions = {}), ZG.extensions[QS] = pG, void LG(null)
            }
          }
          bG.extensions || (bG.extensions = {}), bG.extensions[QS] = pG, LG(bG)
        }))
      }
    }
    let rS = !1;

    function zS() {
      rS || (rS = !0, jw.RegisterExtension(QS, (GG => new JS(GG))))
    }
    zS();
    const ES = "KHR_materials_anisotropy";
    class oS {
      constructor(GG) {
        this.name = ES, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof Xb) {
          if (ZG.anisotropy.isEnabled && !ZG.anisotropy.legacy) return ZG.anisotropy.texture && wG.push(ZG.anisotropy.texture), wG
        } else if (ZG instanceof xb && ZG.specularRoughnessAnisotropy > 0) {
          const GG = function(GG) {
            const bG = GG.specularRoughnessAnisotropyTexture,
              ZG = GG.geometryTangentTexture;
            return `${bG&&bG.getInternalTexture()?bG.getInternalTexture().uniqueId:"NoStrength"}_${ZG&&ZG.getInternalTexture()?ZG.getInternalTexture().uniqueId:"NoTangent"}`
          }(ZG);
          if (this._anisoTexturesMap[GG]) wG.push(this._anisoTexturesMap[GG]);
          else {
            const bG = await async function(GG) {
              const bG = GG.Dv(),
                ZG = GG.specularRoughnessAnisotropyTexture,
                wG = GG.geometryTangentTexture;
              return ZG || wG ? await yZ("AnisotropyTexture", YZ(wG ? kZ(wG, 0) : UZ(1), wG ? kZ(wG, 1) : UZ(0), ZG ? kZ(ZG, 0) : UZ(1)), bG) : null
            }(ZG);
            bG && (wG.push(bG), this._anisoTexturesMap[GG] = bG)
          }
          return wG
        }
        return []
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          var wG;
          if (ZG instanceof Xb) {
            if (!ZG.anisotropy.isEnabled || ZG.anisotropy.legacy) return void GG(bG);
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            const wG = this._exporter._materialExporter.getTextureInfo(ZG.anisotropy.texture),
              SG = {
                anisotropyStrength: ZG.anisotropy.intensity,
                anisotropyRotation: ZG.anisotropy.angle,
                anisotropyTexture: wG ?? void 0
              };
            null !== SG.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[ES] = SG
          } else if (ZG instanceof xb && ZG.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            let SG = ZG.specularRoughnessTexture;
            ZG._useRoughnessFromMetallicTextureGreen && (SG = ZG.baseMetalnessTexture);
            const LG = this._anisoTexturesMap[ZG.id];
            if (!SG && !LG) {
              let wG = ZG.specularRoughness,
                SG = ZG.specularRoughnessAnisotropy;
              if (!ZG._useGltfStyleAnisotropy) {
                const GG = function(GG, bG) {
                  const ZG = GG * GG,
                    wG = ZG * Math.sqrt(2 / (1 + (1 - bG) * (1 - bG))),
                    SG = (1 - bG) * wG;
                  return {
                    newBaseRoughness: Math.sqrt(SG),
                    newAnisotropyStrength: Math.min(Math.sqrt((wG - ZG) / Math.max(1 - ZG, 1e-4)), 1)
                  }
                }(ZG.specularRoughness, ZG.specularRoughnessAnisotropy);
                wG = GG.newBaseRoughness, SG = GG.newAnisotropyStrength
              }
              bG.pbrMetallicRoughness && (bG.pbrMetallicRoughness.roughnessFactor = wG);
              const LG = {
                anisotropyStrength: SG,
                anisotropyRotation: ZG.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return bG.extensions[ES] = LG, GG(bG)
            }
            const yG = LG ? this._exporter._materialExporter.getTextureInfo(LG) : null,
              kG = {
                anisotropyStrength: ZG.specularRoughnessAnisotropy,
                anisotropyRotation: ZG.geometryTangentAngle,
                anisotropyTexture: yG || void 0,
                extensions: {}
              };
            ZG._useGltfStyleAnisotropy || (bG.extensions.KHR_materials_openpbr = {}, (wG = this._exporter._glTF).extensionsUsed || (wG.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[ES] = kG
          }
          GG(bG)
        }))
      }
    }
    let XS = !1;

    function uS() {
      XS || (XS = !0, jw.RegisterExtension(ES, (GG => new oS(GG))))
    }
    uS();
    const iS = "KHR_materials_clearcoat";

    function CS(GG, bG) {
      const ZG = new FG.d(bG.name, bG.Dv());
      return ZG._texture = GG, ZG.coordinatesIndex = bG.coordinatesIndex, bG instanceof FG.d && (ZG.uOffset = bG.uOffset, ZG.vOffset = bG.vOffset, ZG.uScale = bG.uScale, ZG.vScale = bG.vScale, ZG.wAng = bG.wAng), ZG.wrapU = bG.wrapU, ZG.wrapV = bG.wrapV, ZG
    }
    class WS {
      constructor(GG) {
        this.name = iS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = GG
      }
      dispose() {
        for (const GG of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[GG].dispose()
        }
        this._mergedTexturesMap = {};
        for (const GG of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[GG].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof Xb) {
          if (ZG.clearCoat.isEnabled) return ZG.clearCoat.texture && wG.push(ZG.clearCoat.texture), !ZG.clearCoat.useRoughnessFromMainTexture && ZG.clearCoat.textureRoughness && wG.push(ZG.clearCoat.textureRoughness), ZG.clearCoat.bumpTexture && wG.push(ZG.clearCoat.bumpTexture), wG
        } else if (ZG instanceof xb && ZG.coatWeight > 0) {
          let GG = !1;
          if (ZG.coatWeightTexture ? ZG.coatRoughnessTexture ? ZG._useCoatRoughnessFromGreenChannel && ZG.coatWeightTexture.getInternalTexture() === ZG.coatRoughnessTexture.getInternalTexture() ? (wG.push(ZG.coatWeightTexture), wG.push(ZG.coatRoughnessTexture)) : GG = !0 : wG.push(ZG.coatWeightTexture) : ZG.coatRoughnessTexture && (ZG._useCoatRoughnessFromGreenChannel ? wG.push(ZG.coatRoughnessTexture) : GG = !0), GG) {
            const GG = function(GG) {
              const bG = GG.coatWeightTexture,
                ZG = bG && bG.getInternalTexture() ? bG.getInternalTexture().uniqueId : "NoCoat",
                wG = GG.coatRoughnessTexture;
              return `${ZG}_${wG&&wG.getInternalTexture()?wG.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZG);
            if (!this._cachedInternalTexturesMap[GG]) {
              const bG = await async function(GG) {
                const bG = GG.Dv(),
                  ZG = GG.coatWeightTexture,
                  wG = GG.coatRoughnessTexture;
                return ZG || wG ? (await yZ("CoatTexture", YZ(ZG ? kZ(ZG, 0) : UZ(1), wG ? kZ(wG, GG._useCoatRoughnessFromGreenChannel ? 1 : 0) : UZ(1)), bG)).getInternalTexture() : null
              }(ZG);
              bG && (this._cachedInternalTexturesMap[GG] = bG)
            }
            this._cachedInternalTexturesMap[GG] && (ZG.coatWeightTexture && (this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId] = CS(this._cachedInternalTexturesMap[GG], ZG.coatWeightTexture), wG.push(this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId])), ZG.coatRoughnessTexture && (this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId] = CS(this._cachedInternalTexturesMap[GG], ZG.coatRoughnessTexture), wG.push(this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId])))
          }
          return ZG.geometryCoatNormalTexture && wG.push(ZG.geometryCoatNormalTexture), wG
        }
        return []
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          if (ZG instanceof Xb) {
            if (!ZG.clearCoat.isEnabled) return void GG(bG);
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            const wG = this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.texture);
            let SG;
            SG = ZG.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.textureRoughness), ZG.clearCoat.isTintEnabled && ib.f.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZG.name}`), ZG.clearCoat.remapF0OnInterfaceChange && ib.f.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${ZG.name}`);
            const LG = this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.bumpTexture),
              yG = {
                clearcoatFactor: ZG.clearCoat.intensity,
                clearcoatTexture: wG ?? void 0,
                clearcoatRoughnessFactor: ZG.clearCoat.roughness,
                clearcoatRoughnessTexture: SG ?? void 0,
                clearcoatNormalTexture: LG ?? void 0
              };
            null === yG.clearcoatTexture && null === yG.clearcoatRoughnessTexture && null === yG.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[iS] = yG
          } else if (ZG instanceof xb) {
            if (0 == ZG.coatWeight) return void GG(bG);
            let wG, SG, LG, yG;
            this._wasUsed = !0, bG.extensions = bG.extensions || {}, ZG.coatWeightTexture && (wG = this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId], SG = this._exporter._materialExporter.getTextureInfo(wG)), ZG.coatRoughnessTexture && (LG = this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId], yG = this._exporter._materialExporter.getTextureInfo(LG)), ZG.coatColorTexture && ib.f.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ZG.name}`);
            const kG = this._exporter._materialExporter.getTextureInfo(ZG.geometryCoatNormalTexture),
              UG = {
                clearcoatFactor: ZG.coatWeight,
                clearcoatTexture: SG ?? void 0,
                clearcoatRoughnessFactor: ZG.coatRoughness,
                clearcoatRoughnessTexture: yG ?? void 0,
                clearcoatNormalTexture: kG ?? void 0
              };
            null === UG.clearcoatTexture && null === UG.clearcoatRoughnessTexture && null === UG.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[iS] = UG
          }
          GG(bG)
        }))
      }
    }
    let mS = !1;

    function IS() {
      mS || (mS = !0, jw.RegisterExtension(iS, (GG => new WS(GG))))
    }
    IS();
    const FS = "KHR_materials_coat";

    function vS(GG) {
      const bG = GG.coatRoughnessAnisotropyTexture,
        ZG = GG.geometryCoatTangentTexture;
      return `${bG&&bG.getInternalTexture()?bG.getInternalTexture().uniqueId:"NoStrength"}_${ZG&&ZG.getInternalTexture()?ZG.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function aS(GG, bG) {
      const ZG = new FG.d(bG.name, bG.Dv());
      return ZG._texture = GG, ZG.coordinatesIndex = bG.coordinatesIndex, bG instanceof FG.d && (ZG.uOffset = bG.uOffset, ZG.vOffset = bG.vOffset, ZG.uScale = bG.uScale, ZG.vScale = bG.vScale, ZG.wAng = bG.wAng), ZG.wrapU = bG.wrapU, ZG.wrapV = bG.wrapV, ZG
    }
    class cS {
      constructor(GG) {
        this.name = FS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = GG
      }
      dispose() {
        for (const GG of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[GG].dispose()
        }
        this._mergedTexturesMap = {};
        for (const GG of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[GG].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof Xb) {
          if (ZG.clearCoat.isEnabled) return ZG.clearCoat.texture && wG.push(ZG.clearCoat.texture), !ZG.clearCoat.useRoughnessFromMainTexture && ZG.clearCoat.textureRoughness && wG.push(ZG.clearCoat.textureRoughness), ZG.clearCoat.bumpTexture && wG.push(ZG.clearCoat.bumpTexture), ZG.clearCoat.tintTexture && wG.push(ZG.clearCoat.tintTexture), wG
        } else if (ZG instanceof xb && ZG.coatWeight > 0) {
          let GG = !1;
          if (ZG.coatWeightTexture ? ZG.coatRoughnessTexture ? ZG._useCoatRoughnessFromGreenChannel && ZG.coatWeightTexture.getInternalTexture() === ZG.coatRoughnessTexture.getInternalTexture() ? (wG.push(ZG.coatWeightTexture), wG.push(ZG.coatRoughnessTexture)) : GG = !0 : wG.push(ZG.coatWeightTexture) : ZG.coatRoughnessTexture && (ZG._useCoatRoughnessFromGreenChannel ? wG.push(ZG.coatRoughnessTexture) : GG = !0), GG) {
            const GG = function(GG) {
              const bG = GG.coatWeightTexture,
                ZG = bG && bG.getInternalTexture() ? bG.getInternalTexture().uniqueId : "NoCoat",
                wG = GG.coatRoughnessTexture;
              return `${ZG}_${wG&&wG.getInternalTexture()?wG.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ZG);
            if (!this._cachedInternalTexturesMap[GG]) {
              const bG = await async function(GG) {
                const bG = GG.Dv(),
                  ZG = GG.coatWeightTexture,
                  wG = GG.coatRoughnessTexture;
                return ZG || wG ? (await yZ("CoatTexture", YZ(ZG ? kZ(ZG, 0) : UZ(1), wG ? kZ(wG, GG._useCoatRoughnessFromGreenChannel ? 1 : 0) : UZ(1)), bG)).getInternalTexture() : null
              }(ZG);
              bG && (this._cachedInternalTexturesMap[GG] = bG)
            }
            this._cachedInternalTexturesMap[GG] && (ZG.coatWeightTexture && (this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId] = aS(this._cachedInternalTexturesMap[GG], ZG.coatWeightTexture), wG.push(this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId])), ZG.coatRoughnessTexture && (this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId] = aS(this._cachedInternalTexturesMap[GG], ZG.coatRoughnessTexture), wG.push(this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId])))
          }
          if (ZG.geometryCoatNormalTexture && wG.push(ZG.geometryCoatNormalTexture), ZG.coatColorTexture && wG.push(ZG.coatColorTexture), ZG.coatRoughnessAnisotropy > 0) {
            const GG = vS(ZG);
            if (this._mergedTexturesMap[GG]) wG.push(this._mergedTexturesMap[GG]);
            else {
              const bG = await async function(GG) {
                const bG = GG.Dv(),
                  ZG = GG.coatRoughnessAnisotropyTexture,
                  wG = GG.geometryCoatTangentTexture;
                return ZG || wG ? await yZ("AnisotropyTexture", YZ(wG ? kZ(wG, 0) : UZ(1), wG ? kZ(wG, 1) : UZ(0), ZG ? kZ(ZG, 0) : UZ(1)), bG) : null
              }(ZG);
              bG && (wG.push(bG), this._mergedTexturesMap[GG] = bG)
            }
            return wG
          }
          return wG
        }
        return []
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          var wG;
          if (ZG instanceof Xb) {
            if (!ZG.clearCoat.isEnabled) return void GG(bG);
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            const wG = this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.texture);
            let SG, LG;
            SG = ZG.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.textureRoughness), ZG.clearCoat.isTintEnabled && (LG = this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.tintTexture));
            const yG = this._exporter._materialExporter.getTextureInfo(ZG.clearCoat.bumpTexture),
              kG = ZG.clearCoat.indexOfRefraction,
              UG = {
                coatFactor: ZG.clearCoat.intensity,
                coatTexture: wG ?? void 0,
                coatRoughnessFactor: ZG.clearCoat.roughness,
                coatRoughnessTexture: SG ?? void 0,
                coatNormalTexture: yG ?? void 0,
                coatColorFactor: ZG.clearCoat.tintColor.mwG(),
                coatColorTexture: LG ?? void 0,
                coatIor: 1.5 !== kG ? kG : void 0
              };
            null === UG.coatTexture && null === UG.coatRoughnessTexture && null === UG.coatRoughnessTexture && null === UG.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[FS] = UG
          } else if (ZG instanceof xb) {
            if (0 == ZG.coatWeight) return void GG(bG);
            let SG, LG, yG, kG;
            this._wasUsed = !0, bG.extensions = bG.extensions || {}, ZG.coatWeightTexture && (SG = this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[ZG.coatWeightTexture.uniqueId] : ZG.coatWeightTexture, LG = this._exporter._materialExporter.getTextureInfo(SG)), ZG.coatRoughnessTexture && (yG = this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZG.coatRoughnessTexture.uniqueId] : ZG.coatRoughnessTexture, kG = this._exporter._materialExporter.getTextureInfo(yG));
            const UG = this._exporter._materialExporter.getTextureInfo(ZG.geometryCoatNormalTexture),
              YG = this._exporter._materialExporter.getTextureInfo(ZG.coatColorTexture),
              VG = ZG.coatIor,
              pG = ZG.coatDarkening,
              fG = ZG.coatRoughnessTexture,
              QG = vS(ZG),
              KG = this._mergedTexturesMap[QG];
            let hG, dG = 0,
              JG = 0;
            if (ZG.coatRoughnessAnisotropy > 0) {
              if (fG || KG) {
                const GG = KG ? this._exporter._materialExporter.getTextureInfo(KG) : null;
                dG = ZG.coatRoughnessAnisotropy, JG = ZG.geometryCoatTangentAngle, hG = GG || void 0
              } else {
                let GG = ZG.coatRoughness,
                  wG = ZG.coatRoughnessAnisotropy;
                if (!ZG._useGltfStyleAnisotropy) {
                  const bG = function(GG, bG) {
                    const ZG = GG * GG,
                      wG = ZG * Math.sqrt(2 / (1 + (1 - bG) * (1 - bG))),
                      SG = (1 - bG) * wG;
                    return {
                      newBaseRoughness: Math.sqrt(SG),
                      newAnisotropyStrength: Math.min(Math.sqrt((wG - ZG) / Math.max(1 - ZG, 1e-4)), 1)
                    }
                  }(ZG.coatRoughness, ZG.coatRoughnessAnisotropy);
                  GG = bG.newBaseRoughness, wG = bG.newAnisotropyStrength
                }
                bG.pbrMetallicRoughness && (bG.pbrMetallicRoughness.roughnessFactor = GG), dG = wG, JG = ZG.geometryCoatTangentAngle + .5 * Math.PI, hG = void 0
              }
              ZG._useGltfStyleAnisotropy || (bG.extensions.KHR_materials_openpbr = {}, (wG = this._exporter._glTF).extensionsUsed || (wG.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const rG = {
              coatFactor: ZG.coatWeight,
              coatTexture: LG ?? void 0,
              coatRoughnessFactor: ZG.coatRoughness,
              coatRoughnessTexture: kG ?? void 0,
              coatNormalTexture: UG ?? void 0,
              coatColorFactor: ZG.coatColor.mwG(),
              coatColorTexture: YG ?? void 0,
              coatIor: 1.5 !== VG ? VG : void 0,
              coatDarkeningFactor: 1 !== pG ? pG : void 0,
              coatAnisotropyRotation: JG,
              coatAnisotropyStrength: dG,
              coatAnisotropyTexture: hG
            };
            null === rG.coatTexture && null === rG.coatRoughnessTexture && null === rG.coatRoughnessTexture && null === rG.coatAnisotropyTexture && null === rG.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[FS] = rG
          }
          GG(bG)
        }))
      }
    }
    let lS = !1;

    function jS() {
      lS || (lS = !0, jw.RegisterExtension(FS, (GG => new cS(GG))))
    }
    jS();
    let PS = (() => {
      var GG, bG, ZG, wG, SG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG, JG, rG, zG, EG, oG, XG, uG, iG, mG, IG, FG, vG, aG, cG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, HG, tG, DG, NG, OG, xG, BG, Gb, bb, Zb, wb, Sb, Lb, yb, kb, Ub, Yb, Vb, pb, fb, Qb, Kb, hb, db, Jb, rb, zb;
      let Eb, ob, ib, Cb, Wb, mb, Ib, Fb, vb, ab, cb, lb, jb, Pb, Mb, Ab, sb, qb, nb, gb, eb, Rb, Tb, Hb, tb, Db, Nb, Ob, xb, Bb, GZ, bZ, ZZ, wZ, SZ, LZ, yZ, kZ, UZ, YZ, VZ, pZ, fZ, QZ, KZ, hZ, dZ, JZ, rZ, zZ, EZ, oZ, XZ, uZ, iZ, CZ, WZ, mZ, IZ, FZ, vZ, aZ, cZ, lZ, jZ, PZ, MZ, AZ, sZ = Xb,
        qZ = [],
        nZ = [],
        gZ = [],
        eZ = [],
        RZ = [],
        TZ = [],
        HZ = [],
        tZ = [],
        DZ = [],
        NZ = [],
        OZ = [],
        xZ = [],
        BZ = [],
        Gw = [],
        bw = [],
        Zw = [],
        ww = [],
        Sw = [],
        Lw = [],
        yw = [],
        kw = [],
        Uw = [],
        Yw = [],
        Vw = [],
        pw = [],
        fw = [],
        Qw = [],
        Kw = [],
        hw = [],
        dw = [],
        Jw = [],
        rw = [],
        zw = [],
        Ew = [],
        ow = [],
        Xw = [],
        uw = [],
        iw = [],
        Cw = [],
        Ww = [],
        mw = [],
        Iw = [],
        Fw = [],
        vw = [],
        aw = [],
        lw = [],
        jw = [],
        Pw = [],
        Mw = [],
        Aw = [],
        sw = [],
        qw = [],
        nw = [],
        gw = [],
        ew = [],
        Rw = [],
        Tw = [],
        Hw = [],
        tw = [],
        Dw = [],
        Nw = [],
        Ow = [],
        xw = [],
        Bw = [],
        GS = [],
        bS = [],
        ZS = [],
        wS = [],
        SS = [],
        LS = [],
        yS = [],
        kS = [],
        US = [],
        YS = [],
        VS = [],
        pS = [],
        fS = [],
        QS = [],
        KS = [],
        hS = [],
        dS = [],
        JS = [],
        rS = [],
        zS = [],
        ES = [],
        oS = [],
        XS = [],
        uS = [],
        iS = [],
        CS = [],
        WS = [],
        mS = [],
        IS = [],
        FS = [],
        vS = [],
        aS = [],
        cS = [],
        lS = [],
        jS = [],
        PS = [],
        MS = [],
        AS = [],
        sS = [],
        qS = [],
        nS = [],
        gS = [],
        eS = [],
        RS = [],
        TS = [],
        HS = [],
        tS = [],
        DS = [],
        NS = [],
        OS = [],
        xS = [],
        BS = [],
        GL = [],
        bL = [],
        ZL = [],
        wL = [],
        SL = [],
        LL = [],
        yL = [],
        kL = [],
        UL = [],
        YL = [],
        VL = [],
        pL = [],
        fL = [],
        QL = [],
        KL = [],
        hL = [],
        dL = [];
      return GG = class extends sZ {
        get directIntensity() {
          return (0, CG.e)(this, bG, "f")
        }
        set directIntensity(GG) {
          (0, CG.h)(this, bG, GG, "f")
        }
        get emissiveIntensity() {
          return (0, CG.e)(this, ZG, "f")
        }
        set emissiveIntensity(GG) {
          (0, CG.h)(this, ZG, GG, "f")
        }
        get environmentIntensity() {
          return (0, CG.e)(this, wG, "f")
        }
        set environmentIntensity(GG) {
          (0, CG.h)(this, wG, GG, "f")
        }
        get specularIntensity() {
          return (0, CG.e)(this, SG, "f")
        }
        set specularIntensity(GG) {
          (0, CG.h)(this, SG, GG, "f")
        }
        get disableBumpMap() {
          return (0, CG.e)(this, yG, "f")
        }
        set disableBumpMap(GG) {
          (0, CG.h)(this, yG, GG, "f")
        }
        get albedoTexture() {
          return (0, CG.e)(this, kG, "f")
        }
        set albedoTexture(GG) {
          (0, CG.h)(this, kG, GG, "f")
        }
        get baseWeightTexture() {
          return (0, CG.e)(this, UG, "f")
        }
        set baseWeightTexture(GG) {
          (0, CG.h)(this, UG, GG, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, CG.e)(this, YG, "f")
        }
        set baseDiffuseRoughnessTexture(GG) {
          (0, CG.h)(this, YG, GG, "f")
        }
        get ambientTexture() {
          return (0, CG.e)(this, VG, "f")
        }
        set ambientTexture(GG) {
          (0, CG.h)(this, VG, GG, "f")
        }
        get ambientTextureStrength() {
          return (0, CG.e)(this, pG, "f")
        }
        set ambientTextureStrength(GG) {
          (0, CG.h)(this, pG, GG, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, CG.e)(this, fG, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(GG) {
          (0, CG.h)(this, fG, GG, "f")
        }
        get opacityTexture() {
          return (0, CG.e)(this, QG, "f")
        }
        set opacityTexture(GG) {
          (0, CG.h)(this, QG, GG, "f")
        }
        get reflectionTexture() {
          return (0, CG.e)(this, KG, "f")
        }
        set reflectionTexture(GG) {
          (0, CG.h)(this, KG, GG, "f")
        }
        get emissiveTexture() {
          return (0, CG.e)(this, hG, "f")
        }
        set emissiveTexture(GG) {
          (0, CG.h)(this, hG, GG, "f")
        }
        get reflectivityTexture() {
          return (0, CG.e)(this, dG, "f")
        }
        set reflectivityTexture(GG) {
          (0, CG.h)(this, dG, GG, "f")
        }
        get metallicTexture() {
          return (0, CG.e)(this, JG, "f")
        }
        set metallicTexture(GG) {
          (0, CG.h)(this, JG, GG, "f")
        }
        get metallic() {
          return (0, CG.e)(this, rG, "f")
        }
        set metallic(GG) {
          (0, CG.h)(this, rG, GG, "f")
        }
        get roughness() {
          return (0, CG.e)(this, zG, "f")
        }
        set roughness(GG) {
          (0, CG.h)(this, zG, GG, "f")
        }
        get metallicF0Factor() {
          return (0, CG.e)(this, EG, "f")
        }
        set metallicF0Factor(GG) {
          (0, CG.h)(this, EG, GG, "f")
        }
        get metallicReflectanceColor() {
          return (0, CG.e)(this, oG, "f")
        }
        set metallicReflectanceColor(GG) {
          (0, CG.h)(this, oG, GG, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, CG.e)(this, XG, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(GG) {
          (0, CG.h)(this, XG, GG, "f")
        }
        get metallicReflectanceTexture() {
          return (0, CG.e)(this, uG, "f")
        }
        set metallicReflectanceTexture(GG) {
          (0, CG.h)(this, uG, GG, "f")
        }
        get reflectanceTexture() {
          return (0, CG.e)(this, iG, "f")
        }
        set reflectanceTexture(GG) {
          (0, CG.h)(this, iG, GG, "f")
        }
        get microSurfaceTexture() {
          return (0, CG.e)(this, mG, "f")
        }
        set microSurfaceTexture(GG) {
          (0, CG.h)(this, mG, GG, "f")
        }
        get bumpTexture() {
          return (0, CG.e)(this, IG, "f")
        }
        set bumpTexture(GG) {
          (0, CG.h)(this, IG, GG, "f")
        }
        get lightmapTexture() {
          return (0, CG.e)(this, FG, "f")
        }
        set lightmapTexture(GG) {
          (0, CG.h)(this, FG, GG, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(GG) {
          this.subSurface.refractionTexture = GG, GG ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, CG.e)(this, vG, "f")
        }
        set ambientColor(GG) {
          (0, CG.h)(this, vG, GG, "f")
        }
        get albedoColor() {
          return (0, CG.e)(this, aG, "f")
        }
        set albedoColor(GG) {
          (0, CG.h)(this, aG, GG, "f")
        }
        get baseWeight() {
          return (0, CG.e)(this, cG, "f")
        }
        set baseWeight(GG) {
          (0, CG.h)(this, cG, GG, "f")
        }
        get baseDiffuseRoughness() {
          return (0, CG.e)(this, jG, "f")
        }
        set baseDiffuseRoughness(GG) {
          (0, CG.h)(this, jG, GG, "f")
        }
        get reflectivityColor() {
          return (0, CG.e)(this, PG, "f")
        }
        set reflectivityColor(GG) {
          (0, CG.h)(this, PG, GG, "f")
        }
        get reflectionColor() {
          return (0, CG.e)(this, MG, "f")
        }
        set reflectionColor(GG) {
          (0, CG.h)(this, MG, GG, "f")
        }
        get emissiveColor() {
          return (0, CG.e)(this, AG, "f")
        }
        set emissiveColor(GG) {
          (0, CG.h)(this, AG, GG, "f")
        }
        get microSurface() {
          return (0, CG.e)(this, sG, "f")
        }
        set microSurface(GG) {
          (0, CG.h)(this, sG, GG, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(GG) {
          this.subSurface.indexOfRefraction = GG
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(GG) {
          this.subSurface.invertRefractionY = GG
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(GG) {
          this.subSurface.linkRefractionWithTransparency = GG, GG && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, CG.e)(this, qG, "f")
        }
        set useLightmapAsShadowmap(GG) {
          (0, CG.h)(this, qG, GG, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, CG.e)(this, nG, "f")
        }
        set useAlphaFromAlbedoTexture(GG) {
          (0, CG.h)(this, nG, GG, "f")
        }
        get forceAlphaTest() {
          return (0, CG.e)(this, gG, "f")
        }
        set forceAlphaTest(GG) {
          (0, CG.h)(this, gG, GG, "f")
        }
        get alphaCutOff() {
          return (0, CG.e)(this, eG, "f")
        }
        set alphaCutOff(GG) {
          (0, CG.h)(this, eG, GG, "f")
        }
        get useSpecularOverAlpha() {
          return (0, CG.e)(this, RG, "f")
        }
        set useSpecularOverAlpha(GG) {
          (0, CG.h)(this, RG, GG, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, CG.e)(this, HG, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(GG) {
          (0, CG.h)(this, HG, GG, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, CG.e)(this, tG, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(GG) {
          (0, CG.h)(this, tG, GG, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, CG.e)(this, DG, "f")
        }
        set useRoughnessFromMetallicTextureGreen(GG) {
          (0, CG.h)(this, DG, GG, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, CG.e)(this, NG, "f")
        }
        set useMetallnessFromMetallicTextureBlue(GG) {
          (0, CG.h)(this, NG, GG, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, CG.e)(this, OG, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(GG) {
          (0, CG.h)(this, OG, GG, "f")
        }
        get useAmbientInGrayScale() {
          return (0, CG.e)(this, xG, "f")
        }
        set useAmbientInGrayScale(GG) {
          (0, CG.h)(this, xG, GG, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, CG.e)(this, BG, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(GG) {
          (0, CG.h)(this, BG, GG, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Xb.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(GG) {
          GG !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = GG ? Xb.LIGHTFALLOFF_PHYSICAL : Xb.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Xb.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(GG) {
          GG !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = GG ? Xb.LIGHTFALLOFF_GLTF : Xb.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, CG.e)(this, Gb, "f")
        }
        set useRadianceOverAlpha(GG) {
          (0, CG.h)(this, Gb, GG, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, CG.e)(this, bb, "f")
        }
        set useObjectSpaceNormalMap(GG) {
          (0, CG.h)(this, bb, GG, "f")
        }
        get useParallax() {
          return (0, CG.e)(this, Zb, "f")
        }
        set useParallax(GG) {
          (0, CG.h)(this, Zb, GG, "f")
        }
        get useParallaxOcclusion() {
          return (0, CG.e)(this, wb, "f")
        }
        set useParallaxOcclusion(GG) {
          (0, CG.h)(this, wb, GG, "f")
        }
        get parallaxScaleBias() {
          return (0, CG.e)(this, Sb, "f")
        }
        set parallaxScaleBias(GG) {
          (0, CG.h)(this, Sb, GG, "f")
        }
        get disableLighting() {
          return (0, CG.e)(this, Lb, "f")
        }
        set disableLighting(GG) {
          (0, CG.h)(this, Lb, GG, "f")
        }
        get forceIrradianceInFragment() {
          return (0, CG.e)(this, yb, "f")
        }
        set forceIrradianceInFragment(GG) {
          (0, CG.h)(this, yb, GG, "f")
        }
        get maxSimultaneousLights() {
          return (0, CG.e)(this, kb, "f")
        }
        set maxSimultaneousLights(GG) {
          (0, CG.h)(this, kb, GG, "f")
        }
        get invertNormalMapX() {
          return (0, CG.e)(this, Ub, "f")
        }
        set invertNormalMapX(GG) {
          (0, CG.h)(this, Ub, GG, "f")
        }
        get invertNormalMapY() {
          return (0, CG.e)(this, Yb, "f")
        }
        set invertNormalMapY(GG) {
          (0, CG.h)(this, Yb, GG, "f")
        }
        get twoSidedLighting() {
          return (0, CG.e)(this, Vb, "f")
        }
        set twoSidedLighting(GG) {
          (0, CG.h)(this, Vb, GG, "f")
        }
        get useAlphaFresnel() {
          return (0, CG.e)(this, pb, "f")
        }
        set useAlphaFresnel(GG) {
          (0, CG.h)(this, pb, GG, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, CG.e)(this, fb, "f")
        }
        set useLinearAlphaFresnel(GG) {
          (0, CG.h)(this, fb, GG, "f")
        }
        get environmentBRDFTexture() {
          return (0, CG.e)(this, Qb, "f")
        }
        set environmentBRDFTexture(GG) {
          (0, CG.h)(this, Qb, GG, "f")
        }
        get forceNormalForward() {
          return (0, CG.e)(this, Kb, "f")
        }
        set forceNormalForward(GG) {
          (0, CG.h)(this, Kb, GG, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, CG.e)(this, hb, "f")
        }
        set enableSpecularAntiAliasing(GG) {
          (0, CG.h)(this, hb, GG, "f")
        }
        get useHorizonOcclusion() {
          return (0, CG.e)(this, db, "f")
        }
        set useHorizonOcclusion(GG) {
          (0, CG.h)(this, db, GG, "f")
        }
        get useRadianceOcclusion() {
          return (0, CG.e)(this, Jb, "f")
        }
        set useRadianceOcclusion(GG) {
          (0, CG.h)(this, Jb, GG, "f")
        }
        get unlit() {
          return (0, CG.e)(this, rb, "f")
        }
        set unlit(GG) {
          (0, CG.h)(this, rb, GG, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, CG.e)(this, zb, "f")
        }
        set applyDecalMapAfterDetailMap(GG) {
          (0, CG.h)(this, zb, GG, "f")
        }
        constructor(LG, WG) {
          super(LG, WG, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), bG.set(this, ((0, CG.n)(this, qZ), (0, CG.n)(this, nZ, 1))), ZG.set(this, ((0, CG.n)(this, gZ), (0, CG.n)(this, eZ, 1))), wG.set(this, ((0, CG.n)(this, RZ), (0, CG.n)(this, TZ, 1))), SG.set(this, ((0, CG.n)(this, HZ), (0, CG.n)(this, tZ, 1))), yG.set(this, ((0, CG.n)(this, DZ), (0, CG.n)(this, NZ, !1))), kG.set(this, ((0, CG.n)(this, OZ), (0, CG.n)(this, xZ, void 0))), UG.set(this, ((0, CG.n)(this, BZ), (0, CG.n)(this, Gw, void 0))), YG.set(this, ((0, CG.n)(this, bw), (0, CG.n)(this, Zw, void 0))), VG.set(this, ((0, CG.n)(this, ww), (0, CG.n)(this, Sw, void 0))), pG.set(this, ((0, CG.n)(this, Lw), (0, CG.n)(this, yw, 1))), fG.set(this, ((0, CG.n)(this, kw), (0, CG.n)(this, Uw, GG.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), QG.set(this, ((0, CG.n)(this, Yw), (0, CG.n)(this, Vw, void 0))), KG.set(this, ((0, CG.n)(this, pw), (0, CG.n)(this, fw, void 0))), hG.set(this, ((0, CG.n)(this, Qw), (0, CG.n)(this, Kw, void 0))), dG.set(this, ((0, CG.n)(this, hw), (0, CG.n)(this, dw, void 0))), JG.set(this, ((0, CG.n)(this, Jw), (0, CG.n)(this, rw, void 0))), rG.set(this, ((0, CG.n)(this, zw), (0, CG.n)(this, Ew, void 0))), zG.set(this, ((0, CG.n)(this, ow), (0, CG.n)(this, Xw, void 0))), EG.set(this, ((0, CG.n)(this, uw), (0, CG.n)(this, iw, 1))), oG.set(this, ((0, CG.n)(this, Cw), (0, CG.n)(this, Ww, TG.c.White()))), XG.set(this, ((0, CG.n)(this, mw), (0, CG.n)(this, Iw, !1))), uG.set(this, ((0, CG.n)(this, Fw), (0, CG.n)(this, vw, void 0))), iG.set(this, ((0, CG.n)(this, aw), (0, CG.n)(this, lw, void 0))), mG.set(this, ((0, CG.n)(this, jw), (0, CG.n)(this, Pw, void 0))), IG.set(this, ((0, CG.n)(this, Mw), (0, CG.n)(this, Aw, void 0))), FG.set(this, ((0, CG.n)(this, sw), (0, CG.n)(this, qw, void 0))), vG.set(this, ((0, CG.n)(this, nw), (0, CG.n)(this, gw, new TG.c(0, 0, 0)))), aG.set(this, ((0, CG.n)(this, ew), (0, CG.n)(this, Rw, new TG.c(1, 1, 1)))), cG.set(this, ((0, CG.n)(this, Tw), (0, CG.n)(this, Hw, 1))), jG.set(this, ((0, CG.n)(this, tw), (0, CG.n)(this, Dw, void 0))), PG.set(this, ((0, CG.n)(this, Nw), (0, CG.n)(this, Ow, new TG.c(1, 1, 1)))), MG.set(this, ((0, CG.n)(this, xw), (0, CG.n)(this, Bw, new TG.c(1, 1, 1)))), AG.set(this, ((0, CG.n)(this, GS), (0, CG.n)(this, bS, new TG.c(0, 0, 0)))), sG.set(this, ((0, CG.n)(this, ZS), (0, CG.n)(this, wS, 1))), qG.set(this, ((0, CG.n)(this, SS), (0, CG.n)(this, LS, !1))), nG.set(this, ((0, CG.n)(this, yS), (0, CG.n)(this, kS, !1))), gG.set(this, ((0, CG.n)(this, US), (0, CG.n)(this, YS, !1))), eG.set(this, ((0, CG.n)(this, VS), (0, CG.n)(this, pS, .4))), RG.set(this, ((0, CG.n)(this, fS), (0, CG.n)(this, QS, !0))), HG.set(this, ((0, CG.n)(this, KS), (0, CG.n)(this, hS, !1))), tG.set(this, ((0, CG.n)(this, dS), (0, CG.n)(this, JS, !0))), DG.set(this, ((0, CG.n)(this, rS), (0, CG.n)(this, zS, !1))), NG.set(this, ((0, CG.n)(this, ES), (0, CG.n)(this, oS, !1))), OG.set(this, ((0, CG.n)(this, XS), (0, CG.n)(this, uS, !1))), xG.set(this, ((0, CG.n)(this, iS), (0, CG.n)(this, CS, !1))), BG.set(this, ((0, CG.n)(this, WS), (0, CG.n)(this, mS, !1))), Gb.set(this, ((0, CG.n)(this, IS), (0, CG.n)(this, FS, !0))), bb.set(this, ((0, CG.n)(this, vS), (0, CG.n)(this, aS, !1))), Zb.set(this, ((0, CG.n)(this, cS), (0, CG.n)(this, lS, !1))), wb.set(this, ((0, CG.n)(this, jS), (0, CG.n)(this, PS, !1))), Sb.set(this, ((0, CG.n)(this, MS), (0, CG.n)(this, AS, .05))), Lb.set(this, ((0, CG.n)(this, sS), (0, CG.n)(this, qS, !1))), yb.set(this, ((0, CG.n)(this, nS), (0, CG.n)(this, gS, !1))), kb.set(this, ((0, CG.n)(this, eS), (0, CG.n)(this, RS, 4))), Ub.set(this, ((0, CG.n)(this, TS), (0, CG.n)(this, HS, !1))), Yb.set(this, ((0, CG.n)(this, tS), (0, CG.n)(this, DS, !1))), Vb.set(this, ((0, CG.n)(this, NS), (0, CG.n)(this, OS, !1))), pb.set(this, ((0, CG.n)(this, xS), (0, CG.n)(this, BS, !1))), fb.set(this, ((0, CG.n)(this, GL), (0, CG.n)(this, bL, !1))), Qb.set(this, ((0, CG.n)(this, ZL), (0, CG.n)(this, wL, null))), Kb.set(this, ((0, CG.n)(this, SL), (0, CG.n)(this, LL, !1))), hb.set(this, ((0, CG.n)(this, yL), (0, CG.n)(this, kL, !1))), db.set(this, ((0, CG.n)(this, UL), (0, CG.n)(this, YL, !0))), Jb.set(this, ((0, CG.n)(this, VL), (0, CG.n)(this, pL, !0))), rb.set(this, ((0, CG.n)(this, fL), (0, CG.n)(this, QL, !1))), zb.set(this, ((0, CG.n)(this, KL), (0, CG.n)(this, hL, !1))), (0, CG.n)(this, dL), this._environmentBRDFTexture = lG(this.Dv())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(bG) {
          let ZG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const SG = ub.b.Clone((() => new GG(bG, this.Dv())), this, {
            cloneTexturesOnlyOnce: ZG
          });
          return SG.id = bG, SG.name = bG, this.stencil.copyTo(SG.stencil), this._clonePlugins(SG, wG), SG
        }
        serialize() {
          const GG = super.serialize();
          return GG.customType = "BABYLON.PBRMaterial", GG
        }
        static Parse(bG, ZG, wG) {
          const SG = ub.b.Parse((() => new GG(bG.name, ZG)), bG, ZG, wG);
          return bG.stencil && SG.stencil.parse(bG.stencil, ZG, wG), LG.e._ParsePlugins(bG, SG, ZG, wG), bG.clearCoat && SG.clearCoat.parse(bG.clearCoat, ZG, wG), bG.anisotropy && SG.anisotropy.parse(bG.anisotropy, ZG, wG), bG.brdf && SG.brdf.parse(bG.brdf, ZG, wG), bG.sheen && SG.sheen.parse(bG.sheen, ZG, wG), bG.subSurface && SG.subSurface.parse(bG.subSurface, ZG, wG), bG.iridescence && SG.iridescence.parse(bG.iridescence, ZG, wG), SG
        }
      }, bG = new WeakMap, ZG = new WeakMap, wG = new WeakMap, SG = new WeakMap, yG = new WeakMap, kG = new WeakMap, UG = new WeakMap, YG = new WeakMap, VG = new WeakMap, pG = new WeakMap, fG = new WeakMap, QG = new WeakMap, KG = new WeakMap, hG = new WeakMap, dG = new WeakMap, JG = new WeakMap, rG = new WeakMap, zG = new WeakMap, EG = new WeakMap, oG = new WeakMap, XG = new WeakMap, uG = new WeakMap, iG = new WeakMap, mG = new WeakMap, IG = new WeakMap, FG = new WeakMap, vG = new WeakMap, aG = new WeakMap, cG = new WeakMap, jG = new WeakMap, PG = new WeakMap, MG = new WeakMap, AG = new WeakMap, sG = new WeakMap, qG = new WeakMap, nG = new WeakMap, gG = new WeakMap, eG = new WeakMap, RG = new WeakMap, HG = new WeakMap, tG = new WeakMap, DG = new WeakMap, NG = new WeakMap, OG = new WeakMap, xG = new WeakMap, BG = new WeakMap, Gb = new WeakMap, bb = new WeakMap, Zb = new WeakMap, wb = new WeakMap, Sb = new WeakMap, Lb = new WeakMap, yb = new WeakMap, kb = new WeakMap, Ub = new WeakMap, Yb = new WeakMap, Vb = new WeakMap, pb = new WeakMap, fb = new WeakMap, Qb = new WeakMap, Kb = new WeakMap, hb = new WeakMap, db = new WeakMap, Jb = new WeakMap, rb = new WeakMap, zb = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(sZ[Symbol.metadata] ?? null) : void 0;
        Eb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], ob = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], ib = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Cb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Wb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], mb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], vb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], cb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], jb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Mb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Ab = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], sb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], qb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], nb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], gb = [(0, WG.m)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Tb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], tb = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Db = [(0, WG.E)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty", null)], Nb = [(0, WG.m)("ambient"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Ob = [(0, WG.m)("albedo"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], xb = [(0, WG.Q)("baseWeight"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], Bb = [(0, WG.Q)("baseDiffuseRoughness"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], GZ = [(0, WG.m)("reflectivity"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], bZ = [(0, WG.m)("reflection"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], ZZ = [(0, WG.m)("emissive"), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], wZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], SZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], LZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], yZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], kZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], UZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], YZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], VZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], pZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], fZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], QZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], KZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], hZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], dZ = [(0, WG.Q)()], JZ = [(0, WG.Q)()], rZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], EZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], oZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], XZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], uZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsLightsDirty")], iZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], CZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsLightsDirty")], WZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], mZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], FZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], vZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], aZ = [(0, WG.d)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], lZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], jZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], PZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsTexturesDirty")], MZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], AZ = [(0, WG.Q)(), (0, WG.d)("_markAllSubMeshesAsMiscDirty")], (0, CG.k)(GG, null, Eb, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "directIntensity" in GG,
            get: GG => GG.directIntensity,
            set: (GG, bG) => {
              GG.directIntensity = bG
            }
          },
          metadata: bG
        }, nZ, gZ), (0, CG.k)(GG, null, ob, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "emissiveIntensity" in GG,
            get: GG => GG.emissiveIntensity,
            set: (GG, bG) => {
              GG.emissiveIntensity = bG
            }
          },
          metadata: bG
        }, eZ, RZ), (0, CG.k)(GG, null, ib, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "environmentIntensity" in GG,
            get: GG => GG.environmentIntensity,
            set: (GG, bG) => {
              GG.environmentIntensity = bG
            }
          },
          metadata: bG
        }, TZ, HZ), (0, CG.k)(GG, null, Cb, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: GG => "specularIntensity" in GG,
            get: GG => GG.specularIntensity,
            set: (GG, bG) => {
              GG.specularIntensity = bG
            }
          },
          metadata: bG
        }, tZ, DZ), (0, CG.k)(GG, null, Wb, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: GG => "disableBumpMap" in GG,
            get: GG => GG.disableBumpMap,
            set: (GG, bG) => {
              GG.disableBumpMap = bG
            }
          },
          metadata: bG
        }, NZ, OZ), (0, CG.k)(GG, null, mb, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "albedoTexture" in GG,
            get: GG => GG.albedoTexture,
            set: (GG, bG) => {
              GG.albedoTexture = bG
            }
          },
          metadata: bG
        }, xZ, BZ), (0, CG.k)(GG, null, Ib, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "baseWeightTexture" in GG,
            get: GG => GG.baseWeightTexture,
            set: (GG, bG) => {
              GG.baseWeightTexture = bG
            }
          },
          metadata: bG
        }, Gw, bw), (0, CG.k)(GG, null, Fb, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "baseDiffuseRoughnessTexture" in GG,
            get: GG => GG.baseDiffuseRoughnessTexture,
            set: (GG, bG) => {
              GG.baseDiffuseRoughnessTexture = bG
            }
          },
          metadata: bG
        }, Zw, ww), (0, CG.k)(GG, null, vb, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "ambientTexture" in GG,
            get: GG => GG.ambientTexture,
            set: (GG, bG) => {
              GG.ambientTexture = bG
            }
          },
          metadata: bG
        }, Sw, Lw), (0, CG.k)(GG, null, ab, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: GG => "ambientTextureStrength" in GG,
            get: GG => GG.ambientTextureStrength,
            set: (GG, bG) => {
              GG.ambientTextureStrength = bG
            }
          },
          metadata: bG
        }, yw, kw), (0, CG.k)(GG, null, cb, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: GG => "ambientTextureImpactOnAnalyticalLights" in GG,
            get: GG => GG.ambientTextureImpactOnAnalyticalLights,
            set: (GG, bG) => {
              GG.ambientTextureImpactOnAnalyticalLights = bG
            }
          },
          metadata: bG
        }, Uw, Yw), (0, CG.k)(GG, null, lb, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "opacityTexture" in GG,
            get: GG => GG.opacityTexture,
            set: (GG, bG) => {
              GG.opacityTexture = bG
            }
          },
          metadata: bG
        }, Vw, pw), (0, CG.k)(GG, null, jb, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "reflectionTexture" in GG,
            get: GG => GG.reflectionTexture,
            set: (GG, bG) => {
              GG.reflectionTexture = bG
            }
          },
          metadata: bG
        }, fw, Qw), (0, CG.k)(GG, null, Pb, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "emissiveTexture" in GG,
            get: GG => GG.emissiveTexture,
            set: (GG, bG) => {
              GG.emissiveTexture = bG
            }
          },
          metadata: bG
        }, Kw, hw), (0, CG.k)(GG, null, Mb, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "reflectivityTexture" in GG,
            get: GG => GG.reflectivityTexture,
            set: (GG, bG) => {
              GG.reflectivityTexture = bG
            }
          },
          metadata: bG
        }, dw, Jw), (0, CG.k)(GG, null, Ab, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "metallicTexture" in GG,
            get: GG => GG.metallicTexture,
            set: (GG, bG) => {
              GG.metallicTexture = bG
            }
          },
          metadata: bG
        }, rw, zw), (0, CG.k)(GG, null, sb, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: GG => "metallic" in GG,
            get: GG => GG.metallic,
            set: (GG, bG) => {
              GG.metallic = bG
            }
          },
          metadata: bG
        }, Ew, ow), (0, CG.k)(GG, null, qb, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: GG => "roughness" in GG,
            get: GG => GG.roughness,
            set: (GG, bG) => {
              GG.roughness = bG
            }
          },
          metadata: bG
        }, Xw, uw), (0, CG.k)(GG, null, nb, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: GG => "metallicF0Factor" in GG,
            get: GG => GG.metallicF0Factor,
            set: (GG, bG) => {
              GG.metallicF0Factor = bG
            }
          },
          metadata: bG
        }, iw, Cw), (0, CG.k)(GG, null, gb, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "metallicReflectanceColor" in GG,
            get: GG => GG.metallicReflectanceColor,
            set: (GG, bG) => {
              GG.metallicReflectanceColor = bG
            }
          },
          metadata: bG
        }, Ww, mw), (0, CG.k)(GG, null, eb, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "useOnlyMetallicFromMetallicReflectanceTexture" in GG,
            get: GG => GG.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (GG, bG) => {
              GG.useOnlyMetallicFromMetallicReflectanceTexture = bG
            }
          },
          metadata: bG
        }, Iw, Fw), (0, CG.k)(GG, null, Rb, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "metallicReflectanceTexture" in GG,
            get: GG => GG.metallicReflectanceTexture,
            set: (GG, bG) => {
              GG.metallicReflectanceTexture = bG
            }
          },
          metadata: bG
        }, vw, aw), (0, CG.k)(GG, null, Tb, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "reflectanceTexture" in GG,
            get: GG => GG.reflectanceTexture,
            set: (GG, bG) => {
              GG.reflectanceTexture = bG
            }
          },
          metadata: bG
        }, lw, jw), (0, CG.k)(GG, null, Hb, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "microSurfaceTexture" in GG,
            get: GG => GG.microSurfaceTexture,
            set: (GG, bG) => {
              GG.microSurfaceTexture = bG
            }
          },
          metadata: bG
        }, Pw, Mw), (0, CG.k)(GG, null, tb, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "bumpTexture" in GG,
            get: GG => GG.bumpTexture,
            set: (GG, bG) => {
              GG.bumpTexture = bG
            }
          },
          metadata: bG
        }, Aw, sw), (0, CG.k)(GG, null, Db, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "lightmapTexture" in GG,
            get: GG => GG.lightmapTexture,
            set: (GG, bG) => {
              GG.lightmapTexture = bG
            }
          },
          metadata: bG
        }, qw, nw), (0, CG.k)(GG, null, Nb, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "ambientColor" in GG,
            get: GG => GG.ambientColor,
            set: (GG, bG) => {
              GG.ambientColor = bG
            }
          },
          metadata: bG
        }, gw, ew), (0, CG.k)(GG, null, Ob, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "albedoColor" in GG,
            get: GG => GG.albedoColor,
            set: (GG, bG) => {
              GG.albedoColor = bG
            }
          },
          metadata: bG
        }, Rw, Tw), (0, CG.k)(GG, null, xb, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: GG => "baseWeight" in GG,
            get: GG => GG.baseWeight,
            set: (GG, bG) => {
              GG.baseWeight = bG
            }
          },
          metadata: bG
        }, Hw, tw), (0, CG.k)(GG, null, Bb, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: GG => "baseDiffuseRoughness" in GG,
            get: GG => GG.baseDiffuseRoughness,
            set: (GG, bG) => {
              GG.baseDiffuseRoughness = bG
            }
          },
          metadata: bG
        }, Dw, Nw), (0, CG.k)(GG, null, GZ, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "reflectivityColor" in GG,
            get: GG => GG.reflectivityColor,
            set: (GG, bG) => {
              GG.reflectivityColor = bG
            }
          },
          metadata: bG
        }, Ow, xw), (0, CG.k)(GG, null, bZ, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "reflectionColor" in GG,
            get: GG => GG.reflectionColor,
            set: (GG, bG) => {
              GG.reflectionColor = bG
            }
          },
          metadata: bG
        }, Bw, GS), (0, CG.k)(GG, null, ZZ, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: GG => "emissiveColor" in GG,
            get: GG => GG.emissiveColor,
            set: (GG, bG) => {
              GG.emissiveColor = bG
            }
          },
          metadata: bG
        }, bS, ZS), (0, CG.k)(GG, null, wZ, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: GG => "microSurface" in GG,
            get: GG => GG.microSurface,
            set: (GG, bG) => {
              GG.microSurface = bG
            }
          },
          metadata: bG
        }, wS, SS), (0, CG.k)(GG, null, SZ, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: GG => "useLightmapAsShadowmap" in GG,
            get: GG => GG.useLightmapAsShadowmap,
            set: (GG, bG) => {
              GG.useLightmapAsShadowmap = bG
            }
          },
          metadata: bG
        }, LS, yS), (0, CG.k)(GG, null, LZ, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAlphaFromAlbedoTexture" in GG,
            get: GG => GG.useAlphaFromAlbedoTexture,
            set: (GG, bG) => {
              GG.useAlphaFromAlbedoTexture = bG
            }
          },
          metadata: bG
        }, kS, US), (0, CG.k)(GG, null, yZ, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: GG => "forceAlphaTest" in GG,
            get: GG => GG.forceAlphaTest,
            set: (GG, bG) => {
              GG.forceAlphaTest = bG
            }
          },
          metadata: bG
        }, YS, VS), (0, CG.k)(GG, null, kZ, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: GG => "alphaCutOff" in GG,
            get: GG => GG.alphaCutOff,
            set: (GG, bG) => {
              GG.alphaCutOff = bG
            }
          },
          metadata: bG
        }, pS, fS), (0, CG.k)(GG, null, UZ, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "useSpecularOverAlpha" in GG,
            get: GG => GG.useSpecularOverAlpha,
            set: (GG, bG) => {
              GG.useSpecularOverAlpha = bG
            }
          },
          metadata: bG
        }, QS, KS), (0, CG.k)(GG, null, YZ, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "useMicroSurfaceFromReflectivityMapAlpha" in GG,
            get: GG => GG.useMicroSurfaceFromReflectivityMapAlpha,
            set: (GG, bG) => {
              GG.useMicroSurfaceFromReflectivityMapAlpha = bG
            }
          },
          metadata: bG
        }, hS, dS), (0, CG.k)(GG, null, VZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "useRoughnessFromMetallicTextureAlpha" in GG,
            get: GG => GG.useRoughnessFromMetallicTextureAlpha,
            set: (GG, bG) => {
              GG.useRoughnessFromMetallicTextureAlpha = bG
            }
          },
          metadata: bG
        }, JS, rS), (0, CG.k)(GG, null, pZ, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: GG => "useRoughnessFromMetallicTextureGreen" in GG,
            get: GG => GG.useRoughnessFromMetallicTextureGreen,
            set: (GG, bG) => {
              GG.useRoughnessFromMetallicTextureGreen = bG
            }
          },
          metadata: bG
        }, zS, ES), (0, CG.k)(GG, null, fZ, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: GG => "useMetallnessFromMetallicTextureBlue" in GG,
            get: GG => GG.useMetallnessFromMetallicTextureBlue,
            set: (GG, bG) => {
              GG.useMetallnessFromMetallicTextureBlue = bG
            }
          },
          metadata: bG
        }, oS, XS), (0, CG.k)(GG, null, QZ, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAmbientOcclusionFromMetallicTextureRed" in GG,
            get: GG => GG.useAmbientOcclusionFromMetallicTextureRed,
            set: (GG, bG) => {
              GG.useAmbientOcclusionFromMetallicTextureRed = bG
            }
          },
          metadata: bG
        }, uS, iS), (0, CG.k)(GG, null, KZ, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAmbientInGrayScale" in GG,
            get: GG => GG.useAmbientInGrayScale,
            set: (GG, bG) => {
              GG.useAmbientInGrayScale = bG
            }
          },
          metadata: bG
        }, CS, WS), (0, CG.k)(GG, null, hZ, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAutoMicroSurfaceFromReflectivityMap" in GG,
            get: GG => GG.useAutoMicroSurfaceFromReflectivityMap,
            set: (GG, bG) => {
              GG.useAutoMicroSurfaceFromReflectivityMap = bG
            }
          },
          metadata: bG
        }, mS, IS), (0, CG.k)(GG, null, dZ, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: GG => "usePhysicalLightFalloff" in GG,
            get: GG => GG.usePhysicalLightFalloff
          },
          metadata: bG
        }, null, qZ), (0, CG.k)(GG, null, JZ, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: GG => "useGLTFLightFalloff" in GG,
            get: GG => GG.useGLTFLightFalloff
          },
          metadata: bG
        }, null, qZ), (0, CG.k)(GG, null, rZ, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: GG => "useRadianceOverAlpha" in GG,
            get: GG => GG.useRadianceOverAlpha,
            set: (GG, bG) => {
              GG.useRadianceOverAlpha = bG
            }
          },
          metadata: bG
        }, FS, vS), (0, CG.k)(GG, null, zZ, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: GG => "useObjectSpaceNormalMap" in GG,
            get: GG => GG.useObjectSpaceNormalMap,
            set: (GG, bG) => {
              GG.useObjectSpaceNormalMap = bG
            }
          },
          metadata: bG
        }, aS, cS), (0, CG.k)(GG, null, EZ, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: GG => "useParallax" in GG,
            get: GG => GG.useParallax,
            set: (GG, bG) => {
              GG.useParallax = bG
            }
          },
          metadata: bG
        }, lS, jS), (0, CG.k)(GG, null, oZ, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: GG => "useParallaxOcclusion" in GG,
            get: GG => GG.useParallaxOcclusion,
            set: (GG, bG) => {
              GG.useParallaxOcclusion = bG
            }
          },
          metadata: bG
        }, PS, MS), (0, CG.k)(GG, null, XZ, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: GG => "parallaxScaleBias" in GG,
            get: GG => GG.parallaxScaleBias,
            set: (GG, bG) => {
              GG.parallaxScaleBias = bG
            }
          },
          metadata: bG
        }, AS, sS), (0, CG.k)(GG, null, uZ, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: GG => "disableLighting" in GG,
            get: GG => GG.disableLighting,
            set: (GG, bG) => {
              GG.disableLighting = bG
            }
          },
          metadata: bG
        }, qS, nS), (0, CG.k)(GG, null, iZ, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: GG => "forceIrradianceInFragment" in GG,
            get: GG => GG.forceIrradianceInFragment,
            set: (GG, bG) => {
              GG.forceIrradianceInFragment = bG
            }
          },
          metadata: bG
        }, gS, eS), (0, CG.k)(GG, null, CZ, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: GG => "maxSimultaneousLights" in GG,
            get: GG => GG.maxSimultaneousLights,
            set: (GG, bG) => {
              GG.maxSimultaneousLights = bG
            }
          },
          metadata: bG
        }, RS, TS), (0, CG.k)(GG, null, WZ, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: GG => "invertNormalMapX" in GG,
            get: GG => GG.invertNormalMapX,
            set: (GG, bG) => {
              GG.invertNormalMapX = bG
            }
          },
          metadata: bG
        }, HS, tS), (0, CG.k)(GG, null, mZ, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: GG => "invertNormalMapY" in GG,
            get: GG => GG.invertNormalMapY,
            set: (GG, bG) => {
              GG.invertNormalMapY = bG
            }
          },
          metadata: bG
        }, DS, NS), (0, CG.k)(GG, null, IZ, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: GG => "twoSidedLighting" in GG,
            get: GG => GG.twoSidedLighting,
            set: (GG, bG) => {
              GG.twoSidedLighting = bG
            }
          },
          metadata: bG
        }, OS, xS), (0, CG.k)(GG, null, FZ, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: GG => "useAlphaFresnel" in GG,
            get: GG => GG.useAlphaFresnel,
            set: (GG, bG) => {
              GG.useAlphaFresnel = bG
            }
          },
          metadata: bG
        }, BS, GL), (0, CG.k)(GG, null, vZ, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: GG => "useLinearAlphaFresnel" in GG,
            get: GG => GG.useLinearAlphaFresnel,
            set: (GG, bG) => {
              GG.useLinearAlphaFresnel = bG
            }
          },
          metadata: bG
        }, bL, ZL), (0, CG.k)(GG, null, aZ, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: GG => "environmentBRDFTexture" in GG,
            get: GG => GG.environmentBRDFTexture,
            set: (GG, bG) => {
              GG.environmentBRDFTexture = bG
            }
          },
          metadata: bG
        }, wL, SL), (0, CG.k)(GG, null, cZ, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: GG => "forceNormalForward" in GG,
            get: GG => GG.forceNormalForward,
            set: (GG, bG) => {
              GG.forceNormalForward = bG
            }
          },
          metadata: bG
        }, LL, yL), (0, CG.k)(GG, null, lZ, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: GG => "enableSpecularAntiAliasing" in GG,
            get: GG => GG.enableSpecularAntiAliasing,
            set: (GG, bG) => {
              GG.enableSpecularAntiAliasing = bG
            }
          },
          metadata: bG
        }, kL, UL), (0, CG.k)(GG, null, jZ, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: GG => "useHorizonOcclusion" in GG,
            get: GG => GG.useHorizonOcclusion,
            set: (GG, bG) => {
              GG.useHorizonOcclusion = bG
            }
          },
          metadata: bG
        }, YL, VL), (0, CG.k)(GG, null, PZ, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: GG => "useRadianceOcclusion" in GG,
            get: GG => GG.useRadianceOcclusion,
            set: (GG, bG) => {
              GG.useRadianceOcclusion = bG
            }
          },
          metadata: bG
        }, pL, fL), (0, CG.k)(GG, null, MZ, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: GG => "unlit" in GG,
            get: GG => GG.unlit,
            set: (GG, bG) => {
              GG.unlit = bG
            }
          },
          metadata: bG
        }, QL, KL), (0, CG.k)(GG, null, AZ, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: GG => "applyDecalMapAfterDetailMap" in GG,
            get: GG => GG.applyDecalMapAfterDetailMap,
            set: (GG, bG) => {
              GG.applyDecalMapAfterDetailMap = bG
            }
          },
          metadata: bG
        }, hL, dL), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG.PBRMATERIAL_OPAQUE = Xb.PBRMATERIAL_OPAQUE, GG.PBRMATERIAL_ALPHATEST = Xb.PBRMATERIAL_ALPHATEST, GG.PBRMATERIAL_ALPHABLEND = Xb.PBRMATERIAL_ALPHABLEND, GG.PBRMATERIAL_ALPHATESTANDBLEND = Xb.PBRMATERIAL_ALPHATESTANDBLEND, GG.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Xb.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, GG
    })();
    const MS = "KHR_materials_diffuse_transmission";

    function AS(GG, bG) {
      const ZG = bG.subSurface;
      let wG = null;
      return ZG.translucencyIntensityTexture ? wG = ZG.translucencyIntensityTexture : ZG.thicknessTexture && ZG.useMaskFromThicknessTexture && (wG = ZG.thicknessTexture), wG && !ZG.useGltfStyleTextures ? (mG.c.Warn(`${GG}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${bG.name}`, 1), null) : wG
    }
    class sS {
      constructor(GG) {
        this.name = MS, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof PS && this._isExtensionEnabled(ZG)) {
          const bG = AS(GG, ZG);
          return bG && wG.push(bG), ZG.subSurface.translucencyColorTexture && wG.push(ZG.subSurface.translucencyColorTexture), wG
        }
        return wG
      }
      _isExtensionEnabled(GG) {
        if (GG.unlit) return !1;
        const bG = GG.subSurface;
        return !!bG.isTranslucencyEnabled && (!GG.unlit && !bG.useAlbedoToTintTranslucency && bG.useGltfStyleTextures && 1 === bG.volumeIndexOfRefraction && 0 === bG.minimumThickness && 0 === bG.maximumThickness)
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((wG => {
          if (ZG instanceof PS && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0;
            const wG = ZG.subSurface,
              SG = AS(GG, ZG),
              LG = 0 == wG.translucencyIntensity ? void 0 : wG.translucencyIntensity,
              yG = this._exporter._materialExporter.getTextureInfo(SG) ?? void 0,
              kG = !wG.translucencyColor || wG.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : wG.translucencyColor.mwG(),
              UG = this._exporter._materialExporter.getTextureInfo(wG.translucencyColorTexture) ?? void 0,
              YG = {
                diffuseTransmissionFactor: LG,
                diffuseTransmissionTexture: yG,
                diffuseTransmissionColorFactor: kG,
                diffuseTransmissionColorTexture: UG
              };
            (yG || UG) && this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions = bG.extensions || {}, bG.extensions[MS] = YG
          }
          wG(bG)
        }))
      }
    }
    let qS = !1;

    function nS() {
      qS || (qS = !0, jw.RegisterExtension(MS, (GG => new sS(GG))))
    }
    nS();
    const gS = "KHR_materials_dispersion";
    class eS {
      constructor() {
        this.name = gS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(GG) {
        if (GG.unlit) return !1;
        const bG = GG.subSurface;
        return !(!bG.isRefractionEnabled && !bG.isDispersionEnabled)
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          if (ZG instanceof PS && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0;
            const GG = {
              dispersion: ZG.subSurface.dispersion
            };
            bG.extensions = bG.extensions || {}, bG.extensions[gS] = GG
          }
          GG(bG)
        }))
      }
    }
    let RS = !1;

    function TS() {
      RS || (RS = !0, jw.RegisterExtension(gS, (() => new eS)))
    }
    TS();
    const HS = "KHR_materials_emissive_strength";
    class tS {
      constructor() {
        this.name = HS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(GG, bG, ZG) {
        return await new Promise((GG => {
          if (!(ZG instanceof PS)) return GG(bG);
          const wG = ZG.emissiveColor.scale(ZG.emissiveIntensity),
            SG = Math.max(...wG.mwG());
          if (SG > 1) {
            bG.emissiveFactor = wG.scale(1 / SG).mwG(), this._wasUsed = !0;
            const GG = {
              emissiveStrength: SG
            };
            bG.extensions || (bG.extensions = {}), bG.extensions[HS] = GG
          } else bG.emissiveFactor = wG.mwG();
          return GG(bG)
        }))
      }
    }
    let DS = !1;

    function NS() {
      DS || (DS = !0, jw.RegisterExtension(HS, (() => new tS)))
    }
    NS();
    const OS = "KHR_materials_ior";
    class xS {
      constructor() {
        this.name = OS, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(GG) {
        return !GG.unlit && (GG instanceof xb ? 1.5 != GG.specularIor : GG instanceof PS && (void 0 != GG.indexOfRefraction && 1.5 != GG.indexOfRefraction))
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          if (ZG instanceof PS && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0;
            const GG = {
              ior: ZG.indexOfRefraction
            };
            bG.extensions = bG.extensions || {}, bG.extensions[OS] = GG
          } else if (ZG instanceof xb && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0;
            const GG = {
              ior: ZG.specularIor
            };
            bG.extensions = bG.extensions || {}, bG.extensions[OS] = GG
          }
          GG(bG)
        }))
      }
    }
    let BS = !1;

    function GL() {
      BS || (BS = !0, jw.RegisterExtension(OS, (() => new xS)))
    }
    GL();
    const bL = "KHR_materials_iridescence";
    class ZL {
      constructor(GG) {
        this.name = bL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof Xb) {
          if (ZG.iridescence.isEnabled) return ZG.iridescence.texture && wG.push(ZG.iridescence.texture), ZG.iridescence.thicknessTexture && ZG.iridescence.thicknessTexture !== ZG.iridescence.texture && wG.push(ZG.iridescence.thicknessTexture), wG
        } else if (ZG instanceof xb && ZG.thinFilmWeight > 0) return ZG.thinFilmWeightTexture && wG.push(ZG.thinFilmWeightTexture), ZG.thinFilmThicknessTexture && ZG.thinFilmThicknessTexture !== ZG.thinFilmWeightTexture && wG.push(ZG.thinFilmThicknessTexture), wG;
        return []
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          if (ZG instanceof Xb) {
            if (!ZG.iridescence.isEnabled) return void GG(bG);
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            const wG = this._exporter._materialExporter.getTextureInfo(ZG.iridescence.texture),
              SG = this._exporter._materialExporter.getTextureInfo(ZG.iridescence.thicknessTexture),
              LG = {
                iridescenceFactor: ZG.iridescence.intensity,
                iridescenceIor: ZG.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: ZG.iridescence.minimumThickness,
                iridescenceThicknessMaximum: ZG.iridescence.maximumThickness,
                iridescenceTexture: wG ?? void 0,
                iridescenceThicknessTexture: SG ?? void 0
              };
            null === LG.iridescenceTexture && null === LG.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[bL] = LG
          } else if (ZG instanceof xb) {
            if (ZG.thinFilmWeight <= 0) return void GG(bG);
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            const wG = this._exporter._materialExporter.getTextureInfo(ZG.thinFilmWeightTexture),
              SG = this._exporter._materialExporter.getTextureInfo(ZG.thinFilmThicknessTexture),
              LG = {
                iridescenceFactor: ZG.thinFilmWeight,
                iridescenceIor: ZG.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * ZG.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * ZG.thinFilmThickness,
                iridescenceTexture: wG ?? void 0,
                iridescenceThicknessTexture: SG ?? void 0
              };
            null === LG.iridescenceTexture && null === LG.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[bL] = LG
          }
          GG(bG)
        }))
      }
    }
    let wL = !1;

    function SL() {
      wL || (wL = !0, jw.RegisterExtension(bL, (GG => new ZL(GG))))
    }
    SL();
    const LL = "KHR_materials_sheen";
    class yL {
      constructor(GG) {
        this.name = LL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        return ZG instanceof PS && ZG.sheen.isEnabled && ZG.sheen.texture ? [ZG.sheen.texture] : []
      }
      async postExportMaterialAsync(GG, bG, ZG) {
        return await new Promise((GG => {
          if (ZG instanceof PS) {
            if (!ZG.sheen.isEnabled) return void GG(bG);
            this._wasUsed = !0, null == bG.extensions && (bG.extensions = {});
            const wG = {
              sheenColorFactor: ZG.sheen.color.mwG(),
              sheenRoughnessFactor: ZG.sheen.roughness ?? 0
            };
            null === wG.sheenColorTexture && null === wG.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZG), ZG.sheen.texture && (wG.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(ZG.sheen.texture) ?? void 0), ZG.sheen.textureRoughness && !ZG.sheen.useRoughnessFromMainTexture ? wG.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZG.sheen.textureRoughness) ?? void 0 : ZG.sheen.texture && ZG.sheen.useRoughnessFromMainTexture && (wG.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ZG.sheen.texture) ?? void 0), bG.extensions[LL] = wG
          }
          GG(bG)
        }))
      }
    }
    let kL = !1;

    function UL() {
      kL || (kL = !0, jw.RegisterExtension(LL, (GG => new yL(GG))))
    }
    UL();
    const YL = "KHR_materials_fuzz";

    function VL(GG, bG) {
      const ZG = new FG.d(bG.name, bG.Dv());
      return ZG._texture = GG, ZG.coordinatesIndex = bG.coordinatesIndex, bG instanceof FG.d && (ZG.uOffset = bG.uOffset, ZG.vOffset = bG.vOffset, ZG.uScale = bG.uScale, ZG.vScale = bG.vScale, ZG.wAng = bG.wAng), ZG.wrapU = bG.wrapU, ZG.wrapV = bG.wrapV, ZG
    }
    class pL {
      constructor(GG) {
        this.name = YL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = GG
      }
      dispose() {
        for (const GG of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[GG].dispose()
        }
        this._mergedTexturesMap = {};
        for (const GG of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[GG].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        if (ZG instanceof xb) {
          const GG = [];
          if (ZG.fuzzWeight > 0) {
            ZG.fuzzWeightTexture && GG.push(ZG.fuzzWeightTexture);
            let bG = !1;
            if (ZG.fuzzRoughnessTexture && (ZG._useFuzzRoughnessFromTextureAlpha ? GG.push(ZG.fuzzRoughnessTexture) : bG = !0), ZG.fuzzColorTexture && !bG && GG.push(ZG.fuzzColorTexture), bG) {
              const bG = function(GG) {
                const bG = GG.fuzzColorTexture,
                  ZG = bG && bG.getInternalTexture() ? bG.getInternalTexture().uniqueId : "NoFuzzColor",
                  wG = GG.fuzzRoughnessTexture;
                return `FuzzColor_${ZG}_FuzzRoughness_${wG&&wG.getInternalTexture()?wG.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(ZG);
              if (!this._cachedInternalTexturesMap[bG]) {
                const GG = await async function(GG) {
                  const bG = GG.Dv(),
                    ZG = GG.fuzzColorTexture,
                    wG = GG.fuzzRoughnessTexture;
                  return ZG || wG ? (await yZ("FuzzTexture", YZ(ZG ? kZ(ZG, 0) : UZ(1), ZG ? kZ(ZG, 1) : UZ(1), ZG ? kZ(ZG, 2) : UZ(1), wG ? kZ(wG, GG._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : UZ(1)), bG)).getInternalTexture() : null
                }(ZG);
                GG && (this._cachedInternalTexturesMap[bG] = GG)
              }
              this._cachedInternalTexturesMap[bG] && (ZG.fuzzColorTexture && (this._mergedTexturesMap[ZG.fuzzColorTexture.uniqueId] = VL(this._cachedInternalTexturesMap[bG], ZG.fuzzColorTexture), GG.push(this._mergedTexturesMap[ZG.fuzzColorTexture.uniqueId])), ZG.fuzzRoughnessTexture && (this._mergedTexturesMap[ZG.fuzzRoughnessTexture.uniqueId] = VL(this._cachedInternalTexturesMap[bG], ZG.fuzzRoughnessTexture), GG.push(this._mergedTexturesMap[ZG.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return GG
        }
        return []
      }
      async postExportMaterialAsync(GG, bG, ZG) {
        return await new Promise((GG => {
          if (ZG instanceof xb) {
            if (0 == ZG.fuzzWeight) return void GG(bG);
            this._wasUsed = !0, null == bG.extensions && (bG.extensions = {});
            const wG = {
              fuzzFactor: ZG.fuzzWeight,
              fuzzColorFactor: ZG.fuzzColor.mwG(),
              fuzzRoughnessFactor: ZG.fuzzRoughness
            };
            let SG, LG;
            ZG.fuzzWeightTexture && (wG.fuzzTexture = this._exporter._materialExporter.getTextureInfo(ZG.fuzzWeightTexture) ?? void 0), ZG.fuzzColorTexture && (SG = this._mergedTexturesMap[ZG.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[ZG.fuzzColorTexture.uniqueId] : ZG.fuzzColorTexture, wG.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(SG) ?? void 0), ZG.fuzzRoughnessTexture && (LG = this._mergedTexturesMap[ZG.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ZG.fuzzRoughnessTexture.uniqueId] : ZG.fuzzRoughnessTexture, wG.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(LG) ?? void 0), null === wG.fuzzColorTexture && null === wG.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[YL] = wG
          }
          GG(bG)
        }))
      }
    }
    let fL = !1;

    function QL() {
      fL || (fL = !0, jw.RegisterExtension(YL, (GG => new pL(GG))))
    }
    QL();
    const KL = "KHR_materials_specular";
    class hL {
      constructor(GG) {
        this.name = KL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        return ZG instanceof PS && this._isExtensionEnabled(ZG) ? (ZG.metallicReflectanceTexture && wG.push(ZG.metallicReflectanceTexture), ZG.reflectanceTexture && wG.push(ZG.reflectanceTexture), wG) : wG
      }
      _isExtensionEnabled(GG) {
        return !GG.unlit && (void 0 != GG.metallicF0Factor && 1 != GG.metallicF0Factor || void 0 != GG.metallicReflectanceColor && !GG.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(GG))
      }
      _hasTexturesExtension(GG) {
        return null != GG.metallicReflectanceTexture || null != GG.reflectanceTexture
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          var wG;
          if (ZG instanceof PS && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0, bG.extensions = bG.extensions || {};
            const GG = this._exporter._materialExporter.getTextureInfo(ZG.metallicReflectanceTexture) ?? void 0,
              wG = this._exporter._materialExporter.getTextureInfo(ZG.reflectanceTexture) ?? void 0,
              SG = {
                specularFactor: 1 == ZG.metallicF0Factor ? void 0 : ZG.metallicF0Factor,
                specularTexture: GG,
                specularColorFactor: ZG.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : ZG.metallicReflectanceColor.mwG(),
                specularColorTexture: wG
              };
            this._hasTexturesExtension(ZG) && this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[KL] = SG
          } else if (ZG instanceof xb) {
            bG.extensions = bG.extensions || {};
            const SG = this._exporter._materialExporter.getTextureInfo(ZG.specularWeightTexture) ?? void 0,
              LG = this._exporter._materialExporter.getTextureInfo(ZG.specularColorTexture) ?? void 0,
              yG = 1 == ZG.specularWeight ? void 0 : ZG.specularWeight,
              kG = ZG.specularColor.equalsFloats(1, 1, 1) ? void 0 : ZG.specularColor.mwG();
            if (!LG && !SG && void 0 === yG && void 0 === kG) return GG(bG);
            this._wasUsed = !0;
            const UG = {
                specularEdgeColorEnabled: !0
              },
              YG = {
                specularFactor: yG,
                specularTexture: SG,
                specularColorFactor: kG,
                specularColorTexture: LG,
                extensions: {}
              };
            YG.extensions.EXT_materials_specular_edge_color = UG, (wG = this._exporter._glTF).extensionsUsed || (wG.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (SG || LG) && this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[KL] = YG
          }
          GG(bG)
        }))
      }
    }
    let dL = !1;

    function JL() {
      dL || (dL = !0, jw.RegisterExtension(KL, (GG => new hL(GG))))
    }
    JL();
    const rL = "KHR_materials_transmission";
    class zL {
      constructor(GG) {
        this.name = rL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof PS) {
          if (this._isExtensionEnabled(ZG)) return ZG.subSurface.refractionIntensityTexture && ZG.subSurface.useGltfStyleTextures && wG.push(ZG.subSurface.refractionIntensityTexture), wG
        } else ZG instanceof xb && (ZG.transmissionWeight > 0 && ZG.transmissionWeightTexture && (wG.push(ZG.transmissionWeightTexture), ZG.transmissionColorTexture && wG.push(ZG.transmissionColorTexture)), ZG.subsurfaceWeight > 0 && ZG.subsurfaceWeightTexture && wG.push(ZG.subsurfaceWeightTexture));
        return wG
      }
      _isExtensionEnabled(GG) {
        if (GG instanceof xb && !GG.unlit) return GG.transmissionWeight > 0 || GG.subsurfaceWeight > 0;
        if (GG instanceof PS && !GG.unlit) {
          const bG = GG.subSurface;
          return bG.isRefractionEnabled && void 0 != bG.refractionIntensity && 0 != bG.refractionIntensity || null != bG.refractionIntensityTexture && bG.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(GG, bG, ZG) {
        if (!this._isExtensionEnabled(ZG)) return bG;
        if (ZG instanceof PS) {
          this._wasUsed = !0;
          const wG = ZG.subSurface,
            SG = {
              transmissionFactor: 0 === wG.refractionIntensity ? void 0 : wG.refractionIntensity
            };
          if (wG.refractionIntensityTexture)
            if (wG.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(ZG);
              const GG = this._exporter._materialExporter.getTextureInfo(wG.refractionIntensityTexture);
              GG && (SG.transmissionTexture = GG)
            } else mG.c.Warn(`${GG}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          bG.extensions || (bG.extensions = {}), bG.extensions[rL] = SG
        } else if (ZG instanceof xb) {
          this._wasUsed = !0;
          const GG = {
            transmissionFactor: (1 - ZG.transmissionWeight) * ZG.subsurfaceWeight + ZG.transmissionWeight
          };
          if (ZG.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZG);
            const bG = this._exporter._materialExporter.getTextureInfo(ZG.transmissionWeightTexture);
            bG && (GG.transmissionTexture = bG)
          } else if (ZG.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ZG);
            const bG = this._exporter._materialExporter.getTextureInfo(ZG.subsurfaceWeightTexture);
            bG && (GG.transmissionTexture = bG)
          }
          if (0 == ZG.transmissionDepth && (!ZG.transmissionColor.equals(TG.c.White()) || ZG.transmissionColorTexture) && bG.pbrMetallicRoughness && (bG.pbrMetallicRoughness.baseColorFactor || (bG.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), bG.pbrMetallicRoughness.baseColorFactor[0] *= ZG.transmissionColor.r, bG.pbrMetallicRoughness.baseColorFactor[1] *= ZG.transmissionColor.g, bG.pbrMetallicRoughness.baseColorFactor[2] *= ZG.transmissionColor.b, ZG.transmissionColorTexture && !bG.pbrMetallicRoughness.baseColorTexture)) {
            const GG = this._exporter._materialExporter.getTextureInfo(ZG.transmissionColorTexture);
            GG && (bG.pbrMetallicRoughness.baseColorTexture = GG, this._exporter._materialNeedsUVsSet.add(ZG))
          }
          bG.extensions || (bG.extensions = {}), bG.extensions[rL] = GG
        }
        return bG
      }
    }
    let EL = !1;

    function oL() {
      EL || (EL = !0, jw.RegisterExtension(rL, (GG => new zL(GG))))
    }
    oL();
    var XL = ZG(40648);
    const uL = "KHR_materials_unlit";
    class iL {
      constructor() {
        this.name = uL, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          let wG = !1;
          ZG instanceof PS ? wG = ZG.unlit : ZG instanceof XL.e && (wG = ZG.disableLighting), wG && (this._wasUsed = !0, null == bG.extensions && (bG.extensions = {}), bG.extensions[uL] = {}), GG(bG)
        }))
      }
    }
    let CL = !1;

    function WL() {
      CL || (CL = !0, jw.RegisterExtension(uL, (() => new iL)))
    }
    WL();
    const mL = "KHR_materials_volume";
    class IL {
      constructor(GG) {
        this.name = mL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof PS) {
          if (this._isExtensionEnabled(ZG)) return ZG.subSurface.thicknessTexture && wG.push(ZG.subSurface.thicknessTexture), wG
        } else ZG instanceof xb && (ZG.transmissionWeight > 0 || ZG.subsurfaceWeight > 0) && ZG.geometryThicknessTexture && wG.push(ZG.geometryThicknessTexture);
        return wG
      }
      _isExtensionEnabled(GG) {
        if (GG.unlit) return !1;
        const bG = GG.subSurface;
        return !(!bG.isRefractionEnabled && !bG.isTranslucencyEnabled) && (void 0 != bG.maximumThickness && 0 != bG.maximumThickness || void 0 != bG.tintColorAtDistance && bG.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != bG.tintColor && bG.tintColor != TG.c.White() || this._hasTexturesExtension(GG))
      }
      _hasTexturesExtension(GG) {
        return null != GG.subSurface.thicknessTexture
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          if (ZG instanceof PS && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0;
            const GG = ZG.subSurface,
              wG = {
                thicknessFactor: 0 == GG.maximumThickness ? void 0 : GG.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(GG.thicknessTexture) ?? void 0,
                attenuationDistance: GG.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : GG.tintColorAtDistance,
                attenuationColor: GG.tintColor.equalsFloats(1, 1, 1) ? void 0 : GG.tintColor.mwG()
              };
            this._hasTexturesExtension(ZG) && this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions = bG.extensions || {}, bG.extensions[mL] = wG
          } else if (ZG instanceof xb) {
            const GG = ZG.transmissionWeight > 0 && !ZG.geometryThinWalled,
              wG = ZG.subsurfaceWeight > 0 && !ZG.geometryThinWalled;
            if (GG || wG) {
              this._wasUsed = !0;
              const SG = ZG.geometryThickness,
                LG = this._exporter._materialExporter.getTextureInfo(ZG.geometryThicknessTexture) ?? void 0;
              let yG;
              LG && this._exporter._materialNeedsUVsSet.add(ZG);
              const kG = TG.c.White().mwG();
              if (GG && ZG.transmissionDepth > 0) {
                const GG = 1 / ZG.transmissionDepth;
                let bG = new AG.p(-Math.log(ZG.transmissionColor.r) * GG, -Math.log(ZG.transmissionColor.g) * GG, -Math.log(ZG.transmissionColor.b) * GG);
                const wG = new AG.p(ZG.transmissionScatter.r * GG, ZG.transmissionScatter.g * GG, ZG.transmissionScatter.b * GG),
                  SG = bG.subtract(wG),
                  LG = Math.min(SG.x, SG.y, SG.z);
                LG < 0 && (SG.x = SG.x - LG, SG.y = SG.y - LG, SG.z = SG.z - LG), bG = SG.add(wG);
                yG = 1 / Math.max(bG.x, bG.y, bG.z), kG[0] = Math.exp(-bG.x * yG), kG[1] = Math.exp(-bG.y * yG), kG[2] = Math.exp(-bG.z * yG)
              } else yG = Number.MAX_VALUE, kG[0] = 1, kG[1] = 1, kG[2] = 1;
              let UG = 1;
              const YG = TG.c.White().mwG();
              if (wG) {
                const GG = ZG.subsurfaceRadius,
                  bG = ZG.subsurfaceRadiusScale,
                  wG = new AG.p(bG.r, bG.g, bG.b).multiplyByFloats(GG, GG, GG),
                  SG = new AG.p(1 / Math.max(wG.x, 1e-6), 1 / Math.max(wG.y, 1e-6), 1 / Math.max(wG.z, 1e-6));
                UG = 1 / Math.max(SG.x, SG.y, SG.z), YG[0] = Math.exp(-SG.x * UG), YG[1] = Math.exp(-SG.y * UG), YG[2] = Math.exp(-SG.z * UG)
              }
              const VG = (1 - ZG.transmissionWeight) * ZG.subsurfaceWeight,
                pG = VG + ZG.transmissionWeight,
                fG = 1 / Math.max(pG, 1e-6),
                QG = ZG.transmissionWeight * fG,
                KG = VG * fG,
                hG = kG.map(((GG, bG) => GG * QG + YG[bG] * KG)),
                dG = {
                  thicknessFactor: SG,
                  thicknessTexture: LG,
                  attenuationDistance: yG * QG + UG * KG,
                  attenuationColor: hG
                };
              bG.extensions = bG.extensions || {}, bG.extensions[mL] = dG
            }
          }
          GG(bG)
        }))
      }
    }
    let FL = !1;

    function vL() {
      FL || (FL = !0, jw.RegisterExtension(mL, (GG => new IL(GG))))
    }
    vL();
    const aL = "KHR_materials_volume_scatter";
    class cL {
      constructor(GG) {
        this.name = aL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        return ZG instanceof xb && (ZG.transmissionWeight > 0 && ZG.transmissionScatterTexture && wG.push(ZG.transmissionScatterTexture), ZG.subsurfaceWeight > 0 && ZG.subsurfaceColorTexture && wG.push(ZG.subsurfaceColorTexture)), wG
      }
      _isExtensionEnabled(GG) {
        if (GG.unlit) return !1;
        const bG = GG.transmissionWeight > 0 && !GG.geometryThinWalled && GG.transmissionDepth > 0 && !GG.transmissionScatter.equals(TG.c.Black()),
          ZG = GG.subsurfaceWeight > 0 && !GG.geometryThinWalled;
        return !(!bG && !ZG)
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          if (ZG instanceof xb && this._isExtensionEnabled(ZG)) {
            this._wasUsed = !0;
            let GG = AG.p.Zero(),
              wG = 0;
            if (ZG.transmissionWeight > 0) {
              GG = function(GG) {
                const bG = new AG.p(Math.sqrt(1 - GG.x), Math.sqrt(1 - GG.y), Math.sqrt(1 - GG.z)),
                  ZG = new AG.p(1, 1, 1),
                  wG = ZG.subtract(bG),
                  SG = ZG.subtract(new AG.p(.139, .139, .139).multiplyInPlace(bG)),
                  LG = ZG.add(new AG.p(1.17, 1.17, 1.17).multiplyInPlace(bG));
                return wG.multiplyInPlace(SG).divideInPlace(LG)
              }(new AG.p(ZG.transmissionScatter.r, ZG.transmissionScatter.g, ZG.transmissionScatter.b)), wG = ZG.transmissionScatterAnisotropy
            }
            const SG = AG.p.Zero();
            let LG = 0;
            ZG.subsurfaceWeight > 0 && (SG.set(ZG.subsurfaceColor.r, ZG.subsurfaceColor.g, ZG.subsurfaceColor.b), LG = ZG.subsurfaceScatterAnisotropy);
            const yG = (1 - ZG.transmissionWeight) * ZG.subsurfaceWeight,
              kG = yG + ZG.transmissionWeight,
              UG = 1 / Math.max(kG, 1e-6),
              YG = ZG.transmissionWeight * UG,
              VG = yG * UG,
              pG = {
                multiscatterColorFactor: GG.multiplyByFloats(YG, YG, YG).addInPlace(SG.multiplyByFloats(VG, VG, VG)).mwG(),
                scatterAnisotropy: wG * YG + LG * VG
              };
            if (ZG.subsurfaceWeight > 0 && ZG.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(ZG);
              const GG = this._exporter._materialExporter.getTextureInfo(ZG.subsurfaceColorTexture);
              GG && (pG.multiscatterColorTexture = GG)
            } else if (ZG.transmissionWeight > 0 && ZG.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(ZG);
              const GG = this._exporter._materialExporter.getTextureInfo(ZG.transmissionScatterTexture);
              GG && (pG.multiscatterColorTexture = GG)
            }
            bG.extensions = bG.extensions || {}, bG.extensions[aL] = pG
          }
          GG(bG)
        }))
      }
    }
    let lL = !1;

    function jL() {
      lL || (lL = !0, jw.RegisterExtension(aL, (GG => new cL(GG)), 101))
    }
    jL();
    const PL = "KHR_materials_diffuse_roughness";
    class ML {
      constructor(GG) {
        this.name = PL, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(GG, bG, ZG) {
        const wG = [];
        if (ZG instanceof Xb) {
          if (ZG._baseDiffuseRoughness) return ZG._baseDiffuseRoughnessTexture && wG.push(ZG._baseDiffuseRoughnessTexture), wG
        } else if (ZG instanceof xb && ZG.baseDiffuseRoughness) return ZG.baseDiffuseRoughnessTexture && wG.push(ZG.baseDiffuseRoughnessTexture), wG;
        return []
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          let wG = null,
            SG = null;
          if (ZG instanceof Xb ? (wG = ZG._baseDiffuseRoughness, SG = ZG._baseDiffuseRoughnessTexture) : ZG instanceof xb && (wG = ZG.baseDiffuseRoughness, SG = ZG.baseDiffuseRoughnessTexture), !wG) return void GG(bG);
          this._wasUsed = !0, bG.extensions = bG.extensions || {};
          const LG = {
            diffuseRoughnessFactor: wG,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(SG) ?? void 0
          };
          null !== LG.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(ZG), bG.extensions[PL] = LG, GG(bG)
        }))
      }
    }
    let AL = !1;

    function sL() {
      AL || (AL = !0, jw.RegisterExtension(PL, (GG => new ML(GG))))
    }
    sL();
    const qL = "KHR_materials_openpbr";
    class nL {
      constructor() {
        this.name = qL, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(GG, bG, ZG) {
        return new Promise((GG => {
          ZG instanceof xb && (this._wasUsed = !0, bG.extensions = bG.extensions || {}, bG.extensions[qL] = {}), GG(bG)
        }))
      }
    }
    let gL = !1;

    function eL() {
      gL || (gL = !0, jw.RegisterExtension(qL, (() => new nL)))
    }
    eL();
    const RL = "KHR_texture_transform";
    class TL {
      constructor() {
        this.name = RL, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(GG, bG, ZG) {
        if (ZG.Dv() || ib.f.Warn(`${GG}: "scene" is not defined for Babylon texture ${ZG.name}!`), (0 !== ZG.uAng || 0 !== ZG.vAng) && (ib.f.Warn(`${GG}: Texture ${ZG.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ZG.uRotationCenter || 0 !== ZG.vRotationCenter)) return;
        const wG = {};
        let SG = !1;
        if (0 === ZG.uOffset && 0 === ZG.vOffset || (wG.offset = [ZG.uOffset, ZG.vOffset], SG = !0), 1 === ZG.uScale && 1 === ZG.vScale || (wG.scale = [ZG.uScale, ZG.vScale], SG = !0), 0 !== ZG.wAng) {
          if (0 !== ZG.uRotationCenter || 0 !== ZG.vRotationCenter) {
            if (ZG.homogeneousRotationInUVTransform && ZG.uScale !== ZG.vScale) return void ib.f.Warn(`${GG}: Texture ${ZG.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${RL}.`);
            ib.f.Warn(`${GG}: Texture ${ZG.name} with non-origin rotation center will be exported using an adjusted offset with ${RL}.`), wG.offset = function(GG) {
              const {
                uOffset: bG,
                vOffset: ZG,
                uRotationCenter: wG,
                vRotationCenter: SG,
                uScale: LG,
                vScale: yG,
                wAng: kG
              } = GG, UG = Math.cos(kG), YG = Math.sin(kG), VG = wG * LG, pG = SG * yG;
              return [bG + (VG * (1 - UG) + pG * YG), ZG + (pG * (1 - UG) - VG * YG)]
            }(ZG)
          }
          wG.rotation = -ZG.wAng, SG = !0
        }
        0 !== ZG.coordinatesIndex && (wG.texCoord = ZG.coordinatesIndex, SG = !0), SG && (this._wasUsed = !0, bG.extensions || (bG.extensions = {}), bG.extensions[RL] = wG)
      }
    }
    let HL = !1;

    function tL() {
      HL || (HL = !0, jw.RegisterExtension(RL, (() => new TL)))
    }
    tL();
    var DL = ZG(40430);
    const NL = "KHR_texture_basisu";
    class OL {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(GG) {
        this.name = NL, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      postExportTexture(GG, bG) {
        const ZG = this._exporter._textures[bG.index],
          wG = ZG.source;
        if (void 0 === wG) return;
        const SG = this._exporter._images[wG];
        "image/ktx2" === (SG.mimeType || (0, DL.g)(SG.uri)) && (ZG.source = void 0, ZG.extensions || (ZG.extensions = {}), ZG.extensions[NL] = {
          source: wG
        }, this._wasUsed = !0)
      }
    }
    let xL = !1;

    function BL() {
      xL || (xL = !0, jw.RegisterExtension(NL, (GG => new OL(GG))))
    }
    BL();
    const Gy = "EXT_texture_webp";
    class by {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(GG) {
        this.name = Gy, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      postExportTexture(GG, bG) {
        const ZG = this._exporter._textures[bG.index],
          wG = ZG.source;
        if (void 0 === wG) return;
        const SG = this._exporter._images[wG];
        "image/webp" === (SG.mimeType || (0, DL.g)(SG.uri)) && (ZG.source = void 0, ZG.extensions || (ZG.extensions = {}), ZG.extensions[Gy] = {
          source: wG
        }, this._wasUsed = !0)
      }
    }
    let Zy = !1;

    function wy() {
      Zy || (Zy = !0, jw.RegisterExtension(Gy, (GG => new by(GG))))
    }
    wy();
    const Sy = "EXT_texture_avif";
    class Ly {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(GG) {
        this.name = Sy, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = GG
      }
      dispose() {}
      postExportTexture(GG, bG) {
        const ZG = this._exporter._textures[bG.index],
          wG = ZG.source;
        if (void 0 === wG) return;
        const SG = this._exporter._images[wG];
        "image/avif" === (SG.mimeType || (0, DL.g)(SG.uri)) && (ZG.source = void 0, ZG.extensions || (ZG.extensions = {}), ZG.extensions[Sy] = {
          source: wG
        }, this._wasUsed = !0)
      }
    }
    let yy = !1;

    function ky() {
      yy || (yy = !0, jw.RegisterExtension(Sy, (GG => new Ly(GG))))
    }
    ky();
    class Uy {
      static CreateSTL(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          LG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          kG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          UG = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const YG = function(GG, bG, ZG) {
            const SG = [3 * GG[ZG], 3 * GG[ZG + 1], 3 * GG[ZG + 2]],
              LG = [new wG.mK(bG[SG[0]], bG[SG[0] + 2], bG[SG[0] + 1]), new wG.mK(bG[SG[1]], bG[SG[1] + 2], bG[SG[1] + 1]), new wG.mK(bG[SG[2]], bG[SG[2] + 2], bG[SG[2] + 1])],
              yG = LG[0].subtract(LG[1]),
              kG = LG[2].subtract(LG[1]);
            return {
              v: LG,
              n: wG.mK.Cross(kG, yG).normalize()
            }
          },
          pG = function(GG, bG, ZG, wG) {
            return bG = fG(GG, bG, ZG.x, wG), bG = fG(GG, bG, ZG.y, wG), fG(GG, bG, ZG.z, wG)
          },
          fG = function(GG, bG, ZG, wG) {
            return GG.setFloat32(bG, ZG, wG), bG + 4
          },
          KG = function(GG) {
            if (kG) {
              let bG = GG;
              GG instanceof QG.e && (bG = GG.ESG);
              const ZG = bG.getVerticesData(VG.c.PositionKind, !0, !0);
              if (!ZG) return [];
              const SG = wG.mK.Zero();
              let LG;
              for (LG = 0; LG < ZG.length; LG += 3) wG.mK.TransformCoordinatesFromFloatsToRef(ZG[LG], ZG[LG + 1], ZG[LG + 2], GG.computeWorldMatrix(!0), SG).toArray(ZG, LG);
              return ZG
            }
            return GG.getVerticesData(VG.c.PositionKind) || []
          };
        kG && (yG = !0);
        let hG = "",
          dG = 0,
          JG = 0;
        if (SG) {
          for (let ZG = 0; ZG < GG.length; ZG++) {
            const bG = GG[ZG].IwG();
            dG += bG ? bG.length / 3 : 0
          }
          const bG = new ArrayBuffer(84 + 50 * dG);
          hG = new DataView(bG), JG += 80, hG.setUint32(JG, dG, LG), JG += 4
        } else UG || (hG = "solid stlmesh\r\n");
        for (let wG = 0; wG < GG.length; wG++) {
          const bG = GG[wG];
          !SG && UG && (hG += "solid " + bG.name + "\r\n"), !yG && bG instanceof Yw.d && bG.bakeCurrentTransformIntoVertices();
          const ZG = KG(bG),
            kG = bG.IwG() || [];
          for (let GG = 0; GG < kG.length; GG += 3) {
            const bG = YG(kG, ZG, GG);
            SG ? (JG = pG(hG, JG, bG.n, LG), JG = pG(hG, JG, bG.v[0], LG), JG = pG(hG, JG, bG.v[1], LG), JG = pG(hG, JG, bG.v[2], LG), JG += 2) : (hG += "\tfacet normal " + bG.n.x + " " + bG.n.y + " " + bG.n.z + "\r\n", hG += "\t\touter loop\r\n", hG += "\t\t\tvertex " + bG.v[0].x + " " + bG.v[0].y + " " + bG.v[0].z + "\r\n", hG += "\t\t\tvertex " + bG.v[1].x + " " + bG.v[1].y + " " + bG.v[1].z + "\r\n", hG += "\t\t\tvertex " + bG.v[2].x + " " + bG.v[2].y + " " + bG.v[2].z + "\r\n", hG += "\t\tendloop\r\n", hG += "\tendfacet\r\n")
          }!SG && UG && (hG += "endsolid " + name + "\r\n")
        }
        if (SG || UG || (hG += "endsolid stlmesh"), bG) {
          const GG = document.createElement("a"),
            bG = new Blob([hG], {
              type: "application/octet-stream"
            });
          GG.href = window.URL.createObjectURL(bG), GG.download = ZG + ".stl", GG.click()
        }
        return hG
      }
    }

    function Yy(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const SG = [];
      for (let LG = 0; LG < GG.length / ZG; LG++) {
        const yG = GG[LG * ZG] * (wG ? -1 : 1),
          kG = GG[LG * ZG + 1],
          UG = GG[LG * ZG + 2];
        SG.push(`(${yG.toPrecision(bG.precision)}, ${kG.toPrecision(bG.precision)}, ${UG.toPrecision(bG.precision)})`)
      }
      return SG.join(", ")
    }

    function Vy(GG, bG) {
      const ZG = [];
      for (let wG = 0; wG < GG.length / 2; wG++) {
        const SG = GG[2 * wG],
          LG = GG[2 * wG + 1];
        ZG.push(`(${SG.toPrecision(bG.precision)}, ${(1-LG).toPrecision(bG.precision)})`)
      }
      return ZG.join(", ")
    }

    function py(GG, bG, ZG, wG) {
      const SG = GG.getVerticesData(VG.c.PositionKind),
        LG = GG.getVerticesData(VG.c.NormalKind);
      if (SG && LG) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ZG}"\n\t\tint[] faceVertexCounts = [${function(GG){const bG=GG.IwG()?.length?GG.getTotalIndices():GG.getTotalVertices();return Array(bG/3).fill(3).join(", ")}(GG)}]\n\t\tint[] faceVertexIndices = [${function(GG){const bG=GG.IwG(),ZG=bG?.length??GG.getTotalVertices(),wG=[];if(null!==bG)for(let SG=0;SG<ZG;SG++)wG.push(bG[SG]);else for(let SG=0;SG<ZG;SG++)wG.push(SG);return wG.join(", ")}(GG)}]\n\t\tnormal3f[] normals = [${Yy(LG,bG,void 0,wG)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Yy(SG,bG,void 0,wG)}]\n        ${function(GG,bG){let ZG="";for(let SG=0;SG<4;SG++){const wG=SG>0?SG:"",LG=GG.getVerticesData(VG.c.UVKind+(wG?wG+1:""));LG&&(ZG+=`\n\t\ttexCoord2f[] primvars:st${wG} = [${Vy(LG,bG)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const wG=GG.getVerticesData(VG.c.ColorKind);return wG&&(ZG+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Yy(wG, bG, wG.length / GG.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),ZG}(GG,bG)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function fy(GG, bG, ZG, wG) {
      return `\n        def "Geometry"\n        {\n        ${py(GG,bG,ZG,wG)}\n        }\n        `
    }

    function Qy(GG) {
      let bG = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return bG += GG, fflate.strToU8(bG)
    }

    function Ky(GG) {
      const bG = GG.m;
      return `( ${hy(bG,0)}, ${hy(bG,4)}, ${hy(bG,8)}, ${hy(bG,12)} )`
    }

    function hy(GG, bG) {
      return `(${GG[bG+0]}, ${GG[bG+1]}, ${GG[bG+2]}, ${GG[bG+3]})`
    }

    function dy(GG, bG) {
      const ZG = "Object_" + GG.uniqueId,
        wG = Ky(bG);
      return `def Xform "${ZG}" (\n\tprepend references = @./geometries/Geometry_${GG.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${wG}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${GG.material.uniqueId}>\n}\n\n`
    }

    function Jy(GG) {
      switch (GG) {
        case uG.d.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case uG.d.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case uG.d.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function ry(GG) {
      return `(${GG.x}, ${GG.y})`
    }

    function zy(GG) {
      return `(${GG.r}, ${GG.g}, ${GG.b})`
    }

    function Ey(GG) {
      return "image/jpeg" === GG || "image/png" === GG
    }

    function oy(GG, bG, ZG, SG, LG, yG) {
      const kG = GG.getInternalTexture().uniqueId + "_" + GG.invertY,
        YG = GG.mimeType || (0, UG.c)(GG.getInternalTexture()?.url ?? ""),
        VG = Ey(YG) ? YG : "image/png",
        pG = "image/jpeg" === VG ? "jpg" : "png";
      LG[kG] = {
        texture: GG,
        mimeType: VG,
        ext: pG
      };
      const fG = GG.coordinatesIndex > 0 ? "st" + GG.coordinatesIndex : "st",
        QG = new wG.Vector2(GG.uScale, GG.vScale),
        KG = new wG.Vector2(GG.uOffset, GG.vOffset),
        hG = GG.wAng,
        dG = Math.sin(hG),
        JG = Math.cos(hG);
      return KG.y = 1 - KG.y - QG.y, KG.x += dG * QG.x, KG.y += (1 - JG) * QG.y, `\n    def Shader "PrimvarReader_${ZG}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${fG}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${ZG}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${bG.uniqueId}/PrimvarReader_${ZG}.outputs:result>\n        float inputs:rotation = ${(hG*(180/Math.PI)).toFixed(yG.precision)}\n        float2 inputs:scale = ${ry(QG)}\n        float2 inputs:translation = ${ry(KG)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${GG.uniqueId}_${ZG}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${kG}.${pG}@\n        float2 inputs:st.connect = </Root/Materials/Material_${bG.uniqueId}/Transform2d_${ZG}.outputs:result>\n        ${SG?"float4 inputs:scale = "+function(GG){return`(${GG.r}, ${GG.g}, ${GG.b}, 1.0)`}(SG):""}\n        token inputs:sourceColorSpace = "${GG.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Jy(GG.wrapU)}"\n        token inputs:wrapT = "${Jy(GG.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${bG.needAlphaBlending()||bG.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function Xy(GG, bG, ZG) {
      const wG = "\t\t\t",
        SG = [],
        LG = [],
        {
          diffuseMap: yG,
          diffuse: kG,
          alphaCutOff: UG,
          emissiveMap: YG,
          emissive: VG,
          normalMap: pG,
          roughnessMap: fG,
          roughnessChannel: QG,
          roughness: KG,
          metalnessMap: hG,
          metalnessChannel: JG,
          metalness: rG,
          aoMap: zG,
          aoMapChannel: EG,
          aoMapIntensity: oG,
          alphaMap: XG,
          ior: uG,
          clearCoatEnabled: iG,
          clearCoat: CG,
          clearCoatMap: WG,
          clearCoatRoughness: mG,
          clearCoatRoughnessMap: IG
        } = function(GG) {
          const bG = {
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
          return GG instanceof Lw.StandardMaterial ? {
            ...bG,
            diffuseMap: GG.diffuseTexture,
            diffuse: GG.diffuseColor,
            alphaCutOff: GG.alphaCutOff,
            emissiveMap: GG.emissiveTexture,
            emissive: GG.emissiveColor,
            roughness: 1,
            alphaMap: GG.opacityTexture
          } : GG instanceof Xb ? {
            ...bG,
            diffuseMap: GG._albedoTexture,
            diffuse: GG._albedoColor,
            alphaCutOff: GG._alphaCutOff,
            emissiveMap: GG._emissiveTexture,
            emissive: GG._emissiveColor,
            normalMap: GG._bumpTexture,
            roughnessMap: GG._metallicTexture,
            roughnessChannel: GG._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: GG._roughness ?? 1,
            metalnessMap: GG._metallicTexture,
            metalnessChannel: GG._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: GG._metallic ?? 0,
            aoMap: GG._ambientTexture,
            aoMapChannel: GG._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: GG._ambientTextureStrength,
            alphaMap: GG._opacityTexture,
            ior: GG.subSurface.indexOfRefraction,
            clearCoatEnabled: GG.clearCoat.isEnabled,
            clearCoat: GG.clearCoat.intensity,
            clearCoatMap: GG.clearCoat.texture,
            clearCoatRoughness: GG.clearCoat.roughness,
            clearCoatRoughnessMap: GG.clearCoat.useRoughnessFromMainTexture ? GG.clearCoat.texture : GG.clearCoat.textureRoughness
          } : bG
        }(GG);
      return null !== yG ? (SG.push(`${wG}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${yG.uniqueId}_diffuse.outputs:rgb>`), GG.needAlphaBlending() ? SG.push(`${wG}float inputs:opacity.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${yG.uniqueId}_diffuse.outputs:a>`) : GG.needAlphaTesting() && (SG.push(`${wG}float inputs:opacity.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${yG.uniqueId}_diffuse.outputs:a>`), SG.push(`${wG}float inputs:opacityThreshold = ${UG}`)), LG.push(oy(yG, GG, "diffuse", kG, bG, ZG))) : SG.push(`${wG}color3f inputs:diffuseColor = ${zy(kG||dG.Color3.White())}`), null !== YG ? (SG.push(`${wG}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${YG.uniqueId}_emissive.outputs:rgb>`), LG.push(oy(YG, GG, "emissive", VG, bG, ZG))) : VG && VG.toLuminance() > 0 && SG.push(`${wG}color3f inputs:emissiveColor = ${zy(VG)}`), null !== pG && (SG.push(`${wG}normal3f inputs:normal.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${pG.uniqueId}_normal.outputs:rgb>`), LG.push(oy(pG, GG, "normal", null, bG, ZG))), null !== zG && (SG.push(`${wG}float inputs:occlusion.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${zG.uniqueId}_occlusion.outputs:${EG}>`), LG.push(oy(zG, GG, "occlusion", new dG.Color3(oG, oG, oG), bG, ZG))), null !== fG ? (SG.push(`${wG}float inputs:roughness.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${fG.uniqueId}_roughness.outputs:${QG}>`), LG.push(oy(fG, GG, "roughness", new dG.Color3(KG, KG, KG), bG, ZG))) : SG.push(`${wG}float inputs:roughness = ${KG}`), null !== hG ? (SG.push(`${wG}float inputs:metallic.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${hG.uniqueId}_metallic.outputs:${JG}>`), LG.push(oy(hG, GG, "metallic", new dG.Color3(rG, rG, rG), bG, ZG))) : SG.push(`${wG}float inputs:metallic = ${rG}`), null !== XG ? (SG.push(`${wG}float inputs:opacity.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${XG.uniqueId}_opacity.outputs:r>`), SG.push(`${wG}float inputs:opacityThreshold = 0.0001`), LG.push(oy(XG, GG, "opacity", null, bG, ZG))) : SG.push(`${wG}float inputs:opacity = ${GG.alpha}`), iG && (null !== WG ? (SG.push(`${wG}float inputs:clearcoat.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${WG.uniqueId}_clearcoat.outputs:r>`), LG.push(oy(WG, GG, "clearcoat", new dG.Color3(CG, CG, CG), bG, ZG))) : SG.push(`${wG}float inputs:clearcoat = ${CG}`), null !== IG ? (SG.push(`${wG}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${GG.uniqueId}/Texture_${IG.uniqueId}_clearcoatRoughness.outputs:g>`), LG.push(oy(IG, GG, "clearcoatRoughness", new dG.Color3(mG, mG, mG), bG, ZG))) : SG.push(`${wG}float inputs:clearcoatRoughness = ${mG}`)), SG.push(`${wG}float inputs:ior = ${uG}`), `\n\tdef Material "Material_${GG.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${SG.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${GG.uniqueId}/PreviewSurface.outputs:surface>\n\n${LG.join("\n")}\n\n\t}\n`
    }

    function uy(GG) {
      GG.computeWorldMatrix(!0);
      const bG = GG.getWorldMatrix().clone(),
        ZG = GG.Dv().useRightHandedSystem;
      let wG = GG.material?._getEffectiveOrientation(GG) ?? GG.sideOrientation,
        yG = !ZG,
        kG = GG.parent;
      for (; kG;) {
        if (jZ(kG, ZG) && null === kG.parent) {
          ZG || (bG.multiplyToRef(kG.getWorldMatrix().invert(), bG), wG = wG === LG.e.ClockWiseSideOrientation ? LG.e.CounterClockWiseSideOrientation : LG.e.ClockWiseSideOrientation), yG = !1;
          break
        }
        kG = kG.parent
      }
      return bG.determinant() < 0 && SG.Tools.Warn(`Mesh ${GG.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: bG,
        windingOrder: wG === LG.e.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: yG
      }
    }
    async function iy(GG, bG, ZG) {
      const LG = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...bG
      };
      "undefined" === typeof fflate && await SG.Tools.LoadScriptAsync(LG.fflateUrl);
      const yG = {};
      yG[LG.modelFileName] = null;
      let kG = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      kG += function(GG) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===GG.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${GG.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${GG.planeAnchoringAlignment}"`:""}\n            `
      }(LG);
      const UG = {};
      for (const wG of GG.meshes) {
        if (0 === wG.getTotalVertices()) continue;
        const GG = wG,
          bG = GG.geometry,
          YG = GG.material;
        if (!YG || !bG || ZG && !ZG(GG)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(YG.getClassName())) {
          const ZG = "geometries/Geometry_" + bG.uniqueId + ".usda",
            {
              matrix: wG,
              windingOrder: SG,
              convertToRightHanded: VG
            } = uy(GG);
          if (!(ZG in yG)) {
            const GG = fy(bG, LG, SG, VG);
            yG[ZG] = Qy(GG)
          }
          YG.uniqueId in UG || (UG[YG.uniqueId] = YG), kG += dy(GG, wG)
        } else SG.Tools.Warn("USDZExportAsync does not support this material type: " + YG.getClassName())
      }
      GG.activeCamera && LG.exportCamera && (kG += function(GG, bG) {
        const ZG = "Camera_" + GG.uniqueId,
          SG = Ky(wG.Matrix.RotationY(Math.PI).multiply(GG.getWorldMatrix()));
        if (GG.mode === uG.d.ORTHOGRAPHIC_CAMERA) return `def Camera "${ZG}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${SG}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${GG.minZ.toPrecision(bG.precision)}, ${GG.maxZ.toPrecision(bG.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(GG.orthoLeft||1)+Math.abs(GG.orthoRight||1))).toPrecision(bG.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(GG.orthoTop||1)+Math.abs(GG.orthoBottom||1))).toPrecision(bG.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const wG = GG.CK().getAspectRatio(GG),
            LG = bG.cameraSensorWidth || 35;
          return `def Camera "${ZG}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${SG}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${GG.minZ.toPrecision(bG.precision)}, ${GG.maxZ.toPrecision(bG.precision)})\n\t\t\tfloat focalLength = ${(LG/(2*Math.tan(.5*GG.fov))).toPrecision(bG.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(LG*wG).toPrecision(bG.precision)}\n\t\t\tfloat verticalAperture = ${(LG/wG).toPrecision(bG.precision)}            \n\t\t}\n\t\n\t`
        }
      }(GG.activeCamera, LG)), kG += "\n            }\n        }";
      const YG = {};
      kG += function(GG, bG, ZG) {
        const wG = [];
        for (const SG in GG) {
          const LG = GG[SG];
          wG.push(Xy(LG, bG, ZG))
        }
        return `\n    def "Materials"\n{\n${wG.join("")}\n}\n\n`
      }(UG, YG, LG), kG += "\n    }", yG[LG.modelFileName] = fflate.strToU8(kG);
      for (const wG in YG) {
        const {
          texture: GG,
          ext: bG,
          mimeType: ZG
        } = YG[wG], SG = await JZ(GG);
        if (SG && Ey(SG.mimeType) && SG.mimeType === ZG) yG[`textures/Texture_${wG}.${bG}`] = new Uint8Array(SG.data);
        else {
          const SG = GG.getSize(),
            LG = await (0, EG.f)(GG),
            kG = await iG.DumpTools.DumpDataAsync(SG.width, SG.height, LG, ZG, void 0, !1, !0);
          yG[`textures/Texture_${wG}.${bG}`] = new Uint8Array(kG).slice()
        }
      }
      let VG = 0;
      for (const wG in yG) {
        const GG = yG[wG];
        if (!GG) continue;
        VG += 34 + wG.length;
        const bG = 63 & VG;
        if (4 !== bG) {
          const ZG = new Uint8Array(64 - bG);
          yG[wG] = [GG, {
            extra: {
              12345: ZG
            }
          }]
        }
        VG = GG.length
      }
      return fflate.zipSync(yG, {
        level: 0
      })
    }
    var Cy = ZG(41493);
    class Wy {
      static Export(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (!GG || 0 === GG.bones.length) throw new Error("Invalid or empty skeleton provided");
        let wG = bG;
        bG && 0 !== bG.length || (wG = GG.animations.map((GG => GG.name)));
        let SG = null;
        for (const YG of wG) {
          const bG = GG.getAnimationRange(YG);
          bG && (SG = SG ? new Cy.c("animation-range", Math.min(SG.from, bG.from), Math.max(SG.to, bG.to)) : bG)
        }
        if (!SG && (GG.animations.length > 0 && (SG = GG.getAnimationRange(GG.animations[0].name)), !SG)) throw new Error("No animation range found in skeleton");
        const LG = ZG || 1 / (GG.animations[0]?.framePerSecond || 30),
          yG = this._BuildBoneHierarchy(GG, wG);
        let kG = 0;
        for (const YG of yG) YG.positionKeys.length > 0 && (kG = Math.max(kG, YG.positionKeys.length)), YG.rotationKeys.length > 0 && (kG = Math.max(kG, YG.rotationKeys.length));
        0 === kG && (kG = Math.floor((SG.to - SG.from) / LG) + 1);
        let UG = "";
        return UG += "HIERARCHY\n", UG += this._ExportHierarchy(yG, 0), UG += "MOTION\n", UG += `Frames: ${kG}\n`, UG += `Frame Time: ${LG.toFixed(6)}\n`, UG += this._ExportMotionData(yG, kG, 0, wG), UG
      }
      static _BuildBoneHierarchy(GG, bG) {
        const ZG = new Map,
          wG = [];
        for (const SG of GG.bones) {
          const GG = {
            bone: SG,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          ZG.set(SG, GG)
        }
        for (const SG of GG.bones) {
          const GG = ZG.get(SG);
          if (SG.animations.length > 0)
            for (const ZG of SG.animations) bG.includes(ZG.name) && ("position" === ZG.targetProperty ? (GG.hasPositionChannels = !0, GG.positionKeys.push(...ZG.getKeys())) : "rotationQuaternion" === ZG.targetProperty && (GG.hasRotationChannels = !0, GG.rotationKeys.push(...ZG.getKeys())));
          if (SG.getParent()) {
            const bG = ZG.get(SG.getParent());
            bG && bG.children.push(GG)
          } else wG.push(GG)
        }
        return wG
      }
      static _ExportHierarchy(GG, bG) {
        let ZG = "";
        const wG = "    ".repeat(bG);
        for (const SG of GG) {
          const GG = SG.bone;
          if (this._IsEndSite(SG)) {
            ZG += `${wG}End Site\n`, ZG += `${wG}{\n`;
            const bG = this._GetBoneOffset(GG);
            ZG += `${wG}    OFFSET ${bG.x.toFixed(6)} ${bG.y.toFixed(6)} ${bG.z.toFixed(6)}\n`, ZG += `${wG}}\n`
          } else {
            ZG += `${0===bG?"ROOT":`${wG}JOINT`} ${GG.name}\n`, ZG += `${wG}{\n`;
            const LG = this._GetBoneOffset(GG);
            ZG += `${wG}    OFFSET ${LG.x.toFixed(6)} ${LG.y.toFixed(6)} ${LG.z.toFixed(6)}\n`;
            const yG = [];
            SG.hasPositionChannels && yG.push("Xposition", "Yposition", "Zposition"), SG.hasRotationChannels && yG.push("Zrotation", "Xrotation", "Yrotation"), yG.length > 0 && (ZG += `${wG}    CHANNELS ${yG.length} ${yG.join(" ")}\n`), SG.children.length > 0 && (ZG += this._ExportHierarchy(SG.children, bG + 1)), ZG += `${wG}}\n`
          }
        }
        return ZG
      }
      static _IsEndSite(GG) {
        return 0 === GG.children.length
      }
      static _GetBoneOffset(GG) {
        try {
          if (!GG.getParent()) return GG.getRestMatrix().getTranslation();
          return GG.getLocalMatrix().getTranslation()
        } catch (bG) {
          return wG.mK.Zero()
        }
      }
      static _ExportMotionData(GG, bG, ZG, wG) {
        let SG = "";
        for (let LG = 0; LG < bG; LG++) {
          const bG = [];
          this._CollectFrameValues(GG, LG + ZG, bG, wG), SG += bG.map((GG => GG.toFixed(6))).join(" ") + "\n"
        }
        return SG
      }
      static _CollectFrameValues(GG, bG, ZG, wG) {
        for (const SG of GG)
          if (!this._IsEndSite(SG)) {
            if (SG.hasPositionChannels) {
              const GG = this._GetPositionAtFrameIndex(SG.positionKeys, bG);
              ZG.push(GG.x, GG.y, GG.z)
            }
            if (SG.hasRotationChannels) {
              const GG = this._GetRotationAtFrameIndex(SG.rotationKeys, bG),
                wG = this._QuaternionToEuler(GG);
              ZG.push(wG.z, wG.x, wG.y)
            }
            SG.children.length > 0 && this._CollectFrameValues(SG.children, bG, ZG, wG)
          }
      }
      static _GetPositionAtFrameIndex(GG, bG) {
        if (0 === GG.length) return wG.mK.Zero();
        return GG[Math.max(0, Math.min(bG, GG.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(GG, bG) {
        if (0 === GG.length) return wG.Quaternion.Identity();
        return GG[Math.max(0, Math.min(bG, GG.length - 1))].value.clone()
      }
      static _QuaternionToEuler(GG) {
        const bG = new wG.Matrix;
        GG.toRotationMatrix(bG);
        const ZG = bG.m;
        let LG, yG, kG;
        const UG = Math.sqrt(ZG[0] * ZG[0] + ZG[1] * ZG[1]);
        return UG > cZ.d ? (LG = Math.atan2(ZG[6], ZG[10]), yG = Math.atan2(-ZG[2], UG), kG = Math.atan2(ZG[1], ZG[0])) : (LG = Math.atan2(-ZG[9], ZG[5]), yG = Math.atan2(-ZG[2], UG), kG = 0), new wG.mK(SG.Tools.ToDegrees(LG), SG.Tools.ToDegrees(yG), SG.Tools.ToDegrees(kG))
      }
    }

    function my(GG) {
      return "string" === typeof GG?.name
    }
    const Iy = Symbol("__xml:meta$__"),
      Fy = Symbol("__xml:name$__");

    function vy(GG, bG) {
      Object.prototype.hasOwnProperty.call(GG.metadata, Iy) || (GG.metadata[Iy] = []), GG.metadata[Iy].push(bG)
    }

    function ay(GG) {
      return (bG, ZG) => {
        bG[Fy] = GG
      }
    }

    function cy() {
      return (GG, bG) => vy(bG, {
        kind: "none",
        prop: String(bG.name),
        ignore: !0
      })
    }

    function ly(GG) {
      return (bG, ZG) => vy(ZG, {
        kind: "attr",
        prop: String(ZG.name),
        ...GG
      })
    }

    function jy(GG) {
      return (bG, ZG) => vy(ZG, {
        kind: "elem",
        prop: String(ZG.name),
        ...GG
      })
    }

    function Py(GG) {
      const bG = "function" === typeof GG ? GG : GG?.constructor,
        ZG = bG?.[Symbol.metadata];
      if (!ZG) return [];
      const wG = [];
      let SG = ZG;
      for (; SG;) Object.prototype.hasOwnProperty.call(SG, Iy) && wG.push(...SG[Iy]), SG = Object.getPrototypeOf(SG);
      return wG
    }

    function My(GG) {
      const bG = GG?.constructor?.[Fy];
      return bG || void 0
    }

    function Ay(GG) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(GG)
    }

    function sy(GG) {
      if (my(GG)) return GG;
      const bG = (GG ?? "").trim();
      if (!bG) return {
        name: ""
      };
      const ZG = bG.indexOf(":");
      if (-1 === ZG) return {
        name: bG
      };
      if (-1 !== bG.indexOf(":", ZG + 1)) return {
        name: bG
      };
      const wG = bG.slice(0, ZG),
        SG = bG.slice(ZG + 1);
      return Ay(wG) && Ay(SG) ? {
        ns: wG,
        name: SG
      } : {
        name: bG
      }
    }

    function qy(GG, bG) {
      return bG ? `${bG}:${GG}` : GG
    }
    const ny = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      gy = Object.freeze({
        number: ny
      });

    function ey(GG) {
      const bG = GG?.eps ?? ny.eps;
      return {
        eps: bG,
        maxDecimalsCap: GG?.maxDecimalsCap ?? ny.maxDecimalsCap,
        trimTrailingZeros: GG?.trimTrailingZeros ?? ny.trimTrailingZeros,
        fixedDecimals: GG?.fixedDecimals,
        allowScientific: GG?.allowScientific ?? ny.allowScientific,
        snapNearZero: GG?.snapNearZero ?? ny.snapNearZero,
        zeroThreshold: GG?.zeroThreshold ?? bG,
        perAttributeEps: GG?.perAttributeEps
      }
    }

    function Ry(GG) {
      return {
        number: ey(GG?.number)
      }
    }
    class Ty {
      constructor(GG) {
        if (this.o = GG, this._o = GG.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(GG) {
        if (!Number.isFinite(GG)) throw new Error(`Cannot format non-finite number: ${GG}`);
        const bG = this._o,
          ZG = this._clampInt(bG.maxDecimalsCap ?? 15, 0, 20),
          wG = bG.trimTrailingZeros ?? !0,
          SG = bG.snapNearZero ?? !0,
          LG = bG.zeroThreshold ?? bG.eps,
          yG = 1 / bG.eps;
        let kG, UG = Math.round(GG * yG) / yG;
        if (Object.is(UG, -0) && (UG = 0), SG && Math.abs(UG) <= LG && (UG = 0), kG = void 0 !== bG.fixedDecimals ? this._clampInt(bG.fixedDecimals, 0, ZG) : this._clampInt(Math.ceil(-Math.log10(bG.eps)), 0, ZG), bG.allowScientific, 0 === kG) return String(Math.trunc(UG));
        let YG = UG.toFixed(kG);
        if (wG && void 0 === bG.fixedDecimals && (YG = YG.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(YG)) throw new Error(`Scientific notation not allowed in XML output: ${YG}`);
        return YG
      }
      _clampInt(GG, bG, ZG) {
        return Number.isFinite(GG) ? (GG = Math.trunc(GG), Math.max(bG, Math.min(ZG, GG))) : bG
      }
    }

    function Hy(GG) {
      return GG instanceof Date
    }

    function ty(GG) {
      return "string" === typeof GG
    }

    function Dy(GG) {
      return "string" === typeof GG || "number" === typeof GG || "boolean" === typeof GG || "bigint" === typeof GG || Hy(GG)
    }

    function Ny(GG) {
      return "number" === typeof GG || "boolean" === typeof GG || "bigint" === typeof GG || Hy(GG)
    }
    class Oy {
      constructor(GG, bG) {
        this._ns = new Map, this._prefixCount = 0, this._builder = GG, this._format = Ry(bG), this._nFmt = new Ty(this._format)
      }
      withNamespace() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        for (const wG of bG) this._assignNamespace(wG);
        return this
      }
      serialize(GG, bG) {
        if (!(bG = bG ?? My(GG))) throw new Error("can not find name for given object");
        const ZG = sy(bG);
        ZG.ns && this._assignNamespace(ZG.ns, "xmlns"), this._gatherNamespaces(GG, new WeakSet);
        const wG = this._builder.ele(null, ZG.name);
        for (const [SG, LG] of Array.from(this._ns.entries())) wG.att("xmlns", LG, SG);
        this._writeObjectContent(wG, GG, (new WeakSet).add(GG)), this._builder.end()
      }
      _writeObject(GG, bG, ZG) {
        if (ZG.has(bG)) return;
        if (ZG.add(bG), Array.isArray(bG)) {
          for (const wG of bG) Ny(wG) || (ty(wG) ? this._builder.text(wG) : this._writeObject(GG, wG, ZG));
          return
        }
        const wG = My(bG);
        if (!wG) return;
        const SG = sy(wG),
          LG = this._getPrefix(SG),
          yG = qy(SG.name, LG);
        GG.ele(null, yG), this._writeObjectContent(GG, bG, ZG), this._builder.end()
      }
      _getPrefix(GG) {
        if (GG.ns) {
          const bG = this._ns.get(GG.ns.toLowerCase());
          if ("xmlns" !== bG) return bG
        }
      }
      _writeObjectContent(GG, bG, ZG) {
        const wG = Py(bG) ?? [],
          SG = new Map;
        for (const yG of wG) {
          const GG = SG.get(yG.prop) ?? [];
          GG.push(yG), SG.set(yG.prop, GG)
        }
        const LG = Object.keys(bG).sort(((GG, bG) => {
          const ZG = (SG.get(GG) ?? []).some((GG => "attr" === GG.kind));
          return ZG === (SG.get(bG) ?? []).some((GG => "attr" === GG.kind)) ? 0 : ZG ? -1 : 1
        }));
        for (const yG of LG) {
          const wG = bG[yG];
          if (null === wG || void 0 === wG) continue;
          const LG = SG.get(yG);
          if (LG) {
            if (LG.some((GG => !0 === GG.ignore || "none" === GG.kind))) continue;
            for (const bG of LG) {
              const ZG = bG.name ?? bG.prop.toLowerCase();
              if (ZG) switch (bG.kind) {
                case "attr": {
                  let SG = null;
                  if ("number" === typeof wG && this._nFmt && (SG = this._nFmt.toString(wG)), bG.formatter) {
                    SG = new bG.formatter(this._format).toString(wG)
                  }
                  if (SG = SG ?? wG.toString(), SG) {
                    const bG = sy(ZG),
                      wG = this._getPrefix(bG),
                      LG = qy(bG.name, wG);
                    GG.att(null, LG, SG)
                  }
                  break
                }
              }
            }
          } else Ny(wG) || (ty(wG) ? this._builder.text(wG) : this._writeObject(GG, wG, ZG))
        }
      }
      _gatherNamespaces(GG, bG) {
        if (bG.has(GG)) return;
        if (bG.add(GG), Array.isArray(GG)) {
          for (const ZG of GG) Dy(ZG) || this._gatherNamespaces(ZG, bG);
          return
        }
        const ZG = My(GG);
        ZG && this._assignNamespace(ZG);
        const wG = Py(GG) ?? [],
          SG = new Map;
        for (const yG of wG) {
          const GG = SG.get(yG.prop) ?? [];
          GG.push(yG), SG.set(yG.prop, GG)
        }
        const LG = [];
        for (const yG of Object.keys(GG)) {
          const bG = GG[yG];
          if (null === bG || void 0 === bG) continue;
          const ZG = SG.get(yG);
          if (ZG) {
            if (ZG.some((GG => !0 === GG.ignore || "none" === GG.kind))) continue;
            for (const GG of ZG) GG.name && this._assignNamespace(GG.name)
          }
          LG.push(bG)
        }
        for (const yG of LG) Dy(yG) || this._gatherNamespaces(yG, bG)
      }
      _assignNamespace(GG, bG) {
        const ZG = sy(GG);
        if (ZG?.ns) {
          const GG = ZG.ns.toLowerCase();
          this._ns.get(GG) || this._ns.set(GG, bG ?? this._buildNsPrefix(GG))
        } else if ("xmlns" === bG) {
          const GG = ZG.name.toLowerCase();
          this._ns.get(GG) || this._ns.set(GG, bG ?? this._buildNsPrefix(GG))
        }
      }
      _buildNsPrefix(GG) {
        let bG, ZG = !1;
        do {
          bG = "ns" + this._prefixCount++;
          for (const GG of Array.from(this._ns.values()))
            if (GG === bG) {
              ZG = !0;
              break
            }
        } while (ZG);
        return bG
      }
    }
    class xy {}
    var By;
    xy.OpenTag = "<", xy.CloseTag = ">", xy.Slash = "/", xy.Question = "?", xy.Quote = '"', xy.Equal = "=", xy.Space = " ", xy.Semicolon = ":", xy.Dec = "<?xml", xy.Xml = "xml", xy.Xmlns = "xmlns", xy.Xsi = "xsi", xy.VersionKeyword = "version", xy.EncodingKeyword = "encoding", xy.StandaloneKeyword = "standalone",
      function(GG) {
        GG[GG.Declaration = 0] = "Declaration", GG[GG.Tag = 1] = "Tag", GG[GG.Attribute = 2] = "Attribute", GG[GG.Text = 3] = "Text"
      }(By || (By = {}));
    class Gk {
      constructor(GG) {
        this._ctxStack = [], this._d = 0, this._w = GG
      }
      dec(GG, bG, ZG) {
        return this._w.write(xy.Dec), this._writeAttStr(xy.VersionKeyword, GG), bG && this._writeAttStr(xy.EncodingKeyword, bG), void 0 !== ZG && this._writeAttStr(xy.StandaloneKeyword, ZG ? "yes" : "no"), this._w.write(xy.Question, xy.CloseTag), this
      }
      att(GG, bG, ZG) {
        const wG = this._peekContext();
        if (!wG) throw new Error("att() without open element");
        if (wG.closed) throw new Error(`att() after start tag closed for <${wG.name}>`);
        if (this._isXmlnsDecl(GG, bG)) {
          if (bG === xy.Xmlns) wG.defaultNs = ZG, this._registerNamespace(wG, "", ZG), this._writeAttStr(xy.Xmlns, ZG);
          else if (GG) this._registerNamespace(wG, bG, ZG), this._writeAttStr(`${GG}:${bG}`, ZG);
          else {
            const GG = bG.slice(6);
            this._registerNamespace(wG, GG, ZG), this._writeAttStr(bG, ZG)
          }
          return wG.lastToken = By.Attribute, this
        }
        let SG = bG;
        if (GG) {
          SG = `${this._ensurePrefixDeclared(wG,GG)}:${bG}`
        }
        return wG.lastToken = By.Attribute, this._writeAttStr(SG, ZG), this
      }
      ele(GG, bG) {
        const ZG = this._peekContext();
        ZG && this._closeOpenTagIfNeeded(ZG);
        let wG = bG;
        if (GG) {
          wG = `${this._lookupPrefix(GG)??GG}:${bG}`
        }
        return this._pushContext(wG, ++this._d), this._w.write(xy.OpenTag, wG), this
      }
      text(GG) {
        const bG = this._peekContext();
        if (!bG) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(bG), bG.lastToken = By.Text, this._w.write(this._escText(GG)), this
      }
      end() {
        const GG = this._popContext();
        return GG && (this._d--, GG.closed ? this._w.write(xy.OpenTag, xy.Slash, GG.name, xy.CloseTag) : this._w.write(xy.Slash, xy.CloseTag)), this
      }
      _pushContext(GG, bG) {
        const ZG = new Gk.Context(GG, bG);
        return this._ctxStack.push(ZG), ZG
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
      _writeAttStr(GG, bG) {
        this._w.write(xy.Space, GG, xy.Equal, xy.Quote, this._escAttr(bG), xy.Quote)
      }
      _lookupPrefix(GG) {
        let bG = this._ctxStack.length - 1;
        if (bG >= 0)
          do {
            const ZG = this._ctxStack[bG--],
              wG = ZG.ns2prefix?.get(GG);
            if (wG) return wG
          } while (bG >= 0)
      }
      _escText(GG) {
        return GG.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(GG) {
        return this._escText(GG).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(GG, bG) {
        if (GG) return GG === xy.Xmlns;
        const ZG = bG.length,
          wG = xy.Xmlns.length;
        return ZG >= wG && (bG.startsWith(xy.Xmlns) && (bG.length == wG || bG[wG] == xy.Semicolon))
      }
      _registerNamespace(GG, bG, ZG) {
        if (bG === xy.Xml || bG === xy.Xmlns) throw new Error(`reserved prefix '${bG}'`);
        const wG = GG.prefix2ns.get(bG);
        if (wG && wG !== ZG) throw new Error(`prefix '${bG}' already bound to a different namespace`);
        GG.ns2prefix.get(ZG) || GG.ns2prefix.set(ZG, bG), GG.prefix2ns.set(bG, ZG)
      }
      _allocPrefix(GG) {
        let bG = 1;
        for (;;) {
          const ZG = "ns" + bG++;
          if (!GG.prefix2ns.has(ZG)) return ZG
        }
      }
      _ensurePrefixDeclared(GG, bG) {
        const ZG = this._lookupPrefix(bG);
        if (ZG) return ZG;
        if (GG.closed) throw new Error(`can not declare namespace after start tag closed for <${GG.name}>`);
        const wG = this._allocPrefix(GG);
        return this._writeAttStr(`${xy.Xmlns}:${wG}`, bG), this._registerNamespace(GG, wG, bG), wG
      }
      _closeOpenTagIfNeeded(GG) {
        GG.closed || (this._w.write(xy.CloseTag), GG.closed = !0)
      }
    }
    Gk.Context = class {
      constructor(GG, bG) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = GG, this.depth = bG
      }
    };
    class bk {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        if (0 === bG.length) return this;
        const wG = bG.join("");
        return this._chunks.push(wG), this.count += wG.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class Zk {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = GG, this._opts = bG, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        if (0 === bG.length) return this;
        const wG = bG.join("");
        if (0 === wG.length) return this;
        this._pending += wG, this._pendingChars += wG.length;
        const SG = this._opts.flushChars ?? 65536;
        return this._pendingChars >= SG && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const GG = this._encoder.encode(this._pending);
        return this._sink.push(GG), this.count += GG.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const wk = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Sk = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Lk, yk;
    ! function(GG) {
      GG.micron = "micron", GG.millimeter = "millimeter", GG.centimeter = "centimeter", GG.inch = "inch", GG.foot = "foot", GG.meter = "meter"
    }(Lk || (Lk = {})),
    function(GG) {
      GG.model = "model", GG.solidsupport = "solidsupport", GG.support = "support", GG.surface = "surface", GG.other = "other"
    }(yk || (yk = {}));
    const kk = "http://schemas.openxmlformats.org/package/2006/content-types",
      Uk = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Yk;
    ! function(GG) {
      GG.Relationships = "application/vnd.openxmlformats-package.relationships+xml", GG.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", GG.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", GG.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", GG.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", GG.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", GG.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", GG.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", GG.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", GG.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", GG.Png = "image/png", GG.Jpeg = "image/jpeg", GG.Tiff = "image/tiff", GG.Xml = "application/xml"
    }(Yk || (Yk = {}));
    const Vk = "_rels/",
      pk = "3D/",
      fk = "3dmodel.model",
      Qk = ".rels",
      Kk = "[Content_Types].xml";
    class hk {
      static IsKnown(GG) {
        return hk.Known.has(GG)
      }
      static IsThreeDimModel(GG) {
        return GG === hk.ThreeDimModel
      }
    }
    hk.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", hk.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", hk.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", hk.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", hk.Known = new Set([hk.ThreeDimModel, hk.Thumbnail, hk.PrintTicket, hk.MustPreserve]);
    let dk = (() => {
        let GG, bG, ZG = [ay({
            ns: kk,
            name: "Types"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.items = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfContentTypes"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      Jk = (() => {
        let GG, bG, ZG, wG, SG = [ay({
            ns: kk,
            name: "Default"
          })],
          LG = [],
          yG = [],
          kG = [],
          UG = [],
          YG = [];
        bG = class {
          constructor(GG, bG) {
            this.ext = (0, CG.n)(this, yG, void 0), this.ct = ((0, CG.n)(this, kG), (0, CG.n)(this, UG, void 0)), (0, CG.n)(this, YG), this.ext = GG, this.ct = bG
          }
        };
        return (0, CG.q)(bG, "ThreeMfContentType"), (() => {
          const VG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: {
              ns: kk,
              name: "Extension"
            }
          })], wG = [ly({
            name: {
              ns: kk,
              name: "ContentType"
            }
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: GG => "ext" in GG,
              get: GG => GG.ext,
              set: (GG, bG) => {
                GG.ext = bG
              }
            },
            metadata: VG
          }, yG, kG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: GG => "ct" in GG,
              get: GG => GG.ct,
              set: (GG, bG) => {
                GG.ct = bG
              }
            },
            metadata: VG
          }, UG, YG), (0, CG.k)(null, GG = {
            value: bG
          }, SG, {
            kind: "class",
            name: bG.name,
            metadata: VG
          }, null, LG), bG = GG.value, VG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VG
          }), (0, CG.n)(bG, LG)
        })(), bG
      })(),
      rk = (() => {
        let GG, bG, ZG = [ay({
            ns: Uk,
            name: "Relationships"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.items = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfRelationships"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      zk = (() => {
        let GG, bG, ZG, wG, SG, LG = [ay({
            ns: Uk,
            name: "Relationship"
          })],
          yG = [],
          kG = [],
          UG = [],
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        bG = class {
          constructor(GG, bG, ZG) {
            this.id = (0, CG.n)(this, kG, void 0), this.type = ((0, CG.n)(this, UG), (0, CG.n)(this, YG, void 0)), this.target = ((0, CG.n)(this, VG), (0, CG.n)(this, pG, void 0)), (0, CG.n)(this, fG), this.id = GG, this.type = bG, this.target = ZG
          }
        };
        return (0, CG.q)(bG, "ThreeMfRelationship"), (() => {
          const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "Id"
          })], wG = [ly({
            name: "Type"
          })], SG = [ly({
            name: "Target"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: GG => "id" in GG,
              get: GG => GG.id,
              set: (GG, bG) => {
                GG.id = bG
              }
            },
            metadata: QG
          }, kG, UG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: GG => "type" in GG,
              get: GG => GG.type,
              set: (GG, bG) => {
                GG.type = bG
              }
            },
            metadata: QG
          }, YG, VG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: GG => "target" in GG,
              get: GG => GG.target,
              set: (GG, bG) => {
                GG.target = bG
              }
            },
            metadata: QG
          }, pG, fG), (0, CG.k)(null, GG = {
            value: bG
          }, LG, {
            kind: "class",
            name: bG.name,
            metadata: QG
          }, null, yG), bG = GG.value, QG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QG
          }), (0, CG.n)(bG, yG)
        })(), bG
      })();
    class Ek {
      constructor(GG, bG, ZG) {
        this.contentTypes = GG, this.relationships = bG, this.model = ZG
      }
    }
    class Xk {
      static Zero() {
        return new Xk([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(GG) {
        this.values = GG
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class uk {
      constructor(GG) {
        this.o = GG, this._f = new Ty(GG)
      }
      toString(GG) {
        return GG.values.map((GG => this._f.toString(GG))).join(" ")
      }
    }
    let ik = (() => {
        let GG, bG, ZG, wG, SG, LG = [ay({
            ns: wk,
            name: "model"
          })],
          yG = [],
          kG = [],
          UG = [],
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        bG = class {
          constructor() {
            this.unit = (0, CG.n)(this, kG, Lk.millimeter), this.requiredextensions = ((0, CG.n)(this, UG), (0, CG.n)(this, YG, void 0)), this.recommendedextensions = ((0, CG.n)(this, VG), (0, CG.n)(this, pG, void 0)), this.metadata = (0, CG.n)(this, fG)
          }
        };
        return (0, CG.q)(bG, "ThreeMfModel"), (() => {
          const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "unit"
          })], wG = [ly({
            name: "requiredextensions"
          })], SG = [ly({
            name: "recommendedextensions"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: GG => "unit" in GG,
              get: GG => GG.unit,
              set: (GG, bG) => {
                GG.unit = bG
              }
            },
            metadata: QG
          }, kG, UG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: GG => "requiredextensions" in GG,
              get: GG => GG.requiredextensions,
              set: (GG, bG) => {
                GG.requiredextensions = bG
              }
            },
            metadata: QG
          }, YG, VG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: GG => "recommendedextensions" in GG,
              get: GG => GG.recommendedextensions,
              set: (GG, bG) => {
                GG.recommendedextensions = bG
              }
            },
            metadata: QG
          }, pG, fG), (0, CG.k)(null, GG = {
            value: bG
          }, LG, {
            kind: "class",
            name: bG.name,
            metadata: QG
          }, null, yG), bG = GG.value, QG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QG
          })
        })(), bG.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, CG.n)(bG, yG), bG
      })(),
      Ck = (() => {
        let GG, bG, ZG, wG, SG, LG = [ay({
            ns: wk,
            name: "meta"
          })],
          yG = [],
          kG = [],
          UG = [],
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        bG = class {
          constructor(GG, bG, ZG, wG) {
            this.name = (0, CG.n)(this, kG, void 0), this.preserve = ((0, CG.n)(this, UG), (0, CG.n)(this, YG, void 0)), this.type = ((0, CG.n)(this, VG), (0, CG.n)(this, pG, void 0)), this.value = (0, CG.n)(this, fG), this.name = GG, this.value = bG, this.preserve = ZG, this.type = wG
          }
        };
        return (0, CG.q)(bG, "ThreeMfMeta"), (() => {
          const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "name"
          })], wG = [ly({
            name: "preserve"
          })], SG = [ly({
            name: "type"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: GG => "name" in GG,
              get: GG => GG.name,
              set: (GG, bG) => {
                GG.name = bG
              }
            },
            metadata: QG
          }, kG, UG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: GG => "preserve" in GG,
              get: GG => GG.preserve,
              set: (GG, bG) => {
                GG.preserve = bG
              }
            },
            metadata: QG
          }, YG, VG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: GG => "type" in GG,
              get: GG => GG.type,
              set: (GG, bG) => {
                GG.type = bG
              }
            },
            metadata: QG
          }, pG, fG), (0, CG.k)(null, GG = {
            value: bG
          }, LG, {
            kind: "class",
            name: bG.name,
            metadata: QG
          }, null, yG), bG = GG.value, QG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QG
          }), (0, CG.n)(bG, yG)
        })(), bG
      })(),
      Wk = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "metadatagroup"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfMetadataGroup"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      mk = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "resources"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.object = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfResources"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      Ik = (() => {
        let GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG = [ay({
            ns: wk,
            name: "object"
          })],
          VG = [],
          pG = [],
          fG = [],
          QG = [],
          KG = [],
          hG = [],
          dG = [],
          JG = [],
          rG = [],
          zG = [],
          EG = [],
          oG = [],
          XG = [],
          uG = [],
          iG = [];
        bG = class {
          constructor(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.model;
            this.id = (0, CG.n)(this, pG, void 0), this.type = ((0, CG.n)(this, fG), (0, CG.n)(this, QG, void 0)), this.thumbnail = ((0, CG.n)(this, KG), (0, CG.n)(this, hG, void 0)), this.partnumber = ((0, CG.n)(this, dG), (0, CG.n)(this, JG, void 0)), this.name = ((0, CG.n)(this, rG), (0, CG.n)(this, zG, void 0)), this.pid = ((0, CG.n)(this, EG), (0, CG.n)(this, oG, void 0)), this.pindex = ((0, CG.n)(this, XG), (0, CG.n)(this, uG, void 0)), this.metadatagroup = (0, CG.n)(this, iG), this.id = GG, this.type = bG
          }
        };
        return (0, CG.q)(bG, "ThreeMfObject"), (() => {
          const WG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "id"
          })], wG = [ly({
            name: "type"
          })], SG = [ly({
            name: "thumbnail"
          })], LG = [ly({
            name: "partnumber"
          })], yG = [ly({
            name: "name"
          })], kG = [ly({
            name: "pid"
          })], UG = [ly({
            name: "pindex"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: GG => "id" in GG,
              get: GG => GG.id,
              set: (GG, bG) => {
                GG.id = bG
              }
            },
            metadata: WG
          }, pG, fG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: GG => "type" in GG,
              get: GG => GG.type,
              set: (GG, bG) => {
                GG.type = bG
              }
            },
            metadata: WG
          }, QG, KG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: GG => "thumbnail" in GG,
              get: GG => GG.thumbnail,
              set: (GG, bG) => {
                GG.thumbnail = bG
              }
            },
            metadata: WG
          }, hG, dG), (0, CG.k)(null, null, LG, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: GG => "partnumber" in GG,
              get: GG => GG.partnumber,
              set: (GG, bG) => {
                GG.partnumber = bG
              }
            },
            metadata: WG
          }, JG, rG), (0, CG.k)(null, null, yG, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: GG => "name" in GG,
              get: GG => GG.name,
              set: (GG, bG) => {
                GG.name = bG
              }
            },
            metadata: WG
          }, zG, EG), (0, CG.k)(null, null, kG, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: GG => "pid" in GG,
              get: GG => GG.pid,
              set: (GG, bG) => {
                GG.pid = bG
              }
            },
            metadata: WG
          }, oG, XG), (0, CG.k)(null, null, UG, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: GG => "pindex" in GG,
              get: GG => GG.pindex,
              set: (GG, bG) => {
                GG.pindex = bG
              }
            },
            metadata: WG
          }, uG, iG), (0, CG.k)(null, GG = {
            value: bG
          }, YG, {
            kind: "class",
            name: bG.name,
            metadata: WG
          }, null, VG), bG = GG.value, WG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WG
          }), (0, CG.n)(bG, VG)
        })(), bG
      })(),
      Fk = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "mesh"
          })],
          wG = [];
        bG = class {
          constructor(GG, bG) {
            this.vertices = GG ?? new vk, this.triangles = bG ?? new ck
          }
        };
        return (0, CG.q)(bG, "ThreeMfMesh"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      vk = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "vertices"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfVertices"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      ak = (() => {
        let GG, bG, ZG, wG, SG, LG = [ay({
            ns: wk,
            name: "vertex"
          })],
          yG = [],
          kG = [],
          UG = [],
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        bG = class {
          constructor() {
            let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, CG.n)(this, kG, void 0), this.y = ((0, CG.n)(this, UG), (0, CG.n)(this, YG, void 0)), this.z = ((0, CG.n)(this, VG), (0, CG.n)(this, pG, void 0)), (0, CG.n)(this, fG), this.x = GG, this.y = bG, this.z = ZG
          }
        };
        return (0, CG.q)(bG, "ThreeMfVertex"), (() => {
          const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "x"
          })], wG = [ly({
            name: "y"
          })], SG = [ly({
            name: "z"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: GG => "x" in GG,
              get: GG => GG.x,
              set: (GG, bG) => {
                GG.x = bG
              }
            },
            metadata: QG
          }, kG, UG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: GG => "y" in GG,
              get: GG => GG.y,
              set: (GG, bG) => {
                GG.y = bG
              }
            },
            metadata: QG
          }, YG, VG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: GG => "z" in GG,
              get: GG => GG.z,
              set: (GG, bG) => {
                GG.z = bG
              }
            },
            metadata: QG
          }, pG, fG), (0, CG.k)(null, GG = {
            value: bG
          }, LG, {
            kind: "class",
            name: bG.name,
            metadata: QG
          }, null, yG), bG = GG.value, QG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QG
          }), (0, CG.n)(bG, yG)
        })(), bG
      })(),
      ck = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "triangles"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfTriangles"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      lk = (() => {
        let GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG = [ay({
            ns: wk,
            name: "triangle"
          })],
          VG = [],
          pG = [],
          fG = [],
          QG = [],
          KG = [],
          hG = [],
          dG = [],
          JG = [],
          rG = [],
          zG = [],
          EG = [],
          oG = [],
          XG = [],
          uG = [],
          iG = [];
        bG = class {
          constructor(GG, bG, ZG) {
            this.v1 = (0, CG.n)(this, pG, void 0), this.v2 = ((0, CG.n)(this, fG), (0, CG.n)(this, QG, void 0)), this.v3 = ((0, CG.n)(this, KG), (0, CG.n)(this, hG, void 0)), this.p1 = ((0, CG.n)(this, dG), (0, CG.n)(this, JG, void 0)), this.p2 = ((0, CG.n)(this, rG), (0, CG.n)(this, zG, void 0)), this.p3 = ((0, CG.n)(this, EG), (0, CG.n)(this, oG, void 0)), this.pid = ((0, CG.n)(this, XG), (0, CG.n)(this, uG, void 0)), (0, CG.n)(this, iG), this.v1 = GG, this.v2 = bG, this.v3 = ZG
          }
        };
        return (0, CG.q)(bG, "ThreeMfTriangle"), (() => {
          const WG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "v1"
          })], wG = [ly({
            name: "v2"
          })], SG = [ly({
            name: "v3"
          })], LG = [ly({
            name: "p1"
          })], yG = [ly({
            name: "p2"
          })], kG = [ly({
            name: "p3"
          })], UG = [ly({
            name: "pid"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: GG => "v1" in GG,
              get: GG => GG.v1,
              set: (GG, bG) => {
                GG.v1 = bG
              }
            },
            metadata: WG
          }, pG, fG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: GG => "v2" in GG,
              get: GG => GG.v2,
              set: (GG, bG) => {
                GG.v2 = bG
              }
            },
            metadata: WG
          }, QG, KG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: GG => "v3" in GG,
              get: GG => GG.v3,
              set: (GG, bG) => {
                GG.v3 = bG
              }
            },
            metadata: WG
          }, hG, dG), (0, CG.k)(null, null, LG, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: GG => "p1" in GG,
              get: GG => GG.p1,
              set: (GG, bG) => {
                GG.p1 = bG
              }
            },
            metadata: WG
          }, JG, rG), (0, CG.k)(null, null, yG, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: GG => "p2" in GG,
              get: GG => GG.p2,
              set: (GG, bG) => {
                GG.p2 = bG
              }
            },
            metadata: WG
          }, zG, EG), (0, CG.k)(null, null, kG, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: GG => "p3" in GG,
              get: GG => GG.p3,
              set: (GG, bG) => {
                GG.p3 = bG
              }
            },
            metadata: WG
          }, oG, XG), (0, CG.k)(null, null, UG, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: GG => "pid" in GG,
              get: GG => GG.pid,
              set: (GG, bG) => {
                GG.pid = bG
              }
            },
            metadata: WG
          }, uG, iG), (0, CG.k)(null, GG = {
            value: bG
          }, YG, {
            kind: "class",
            name: bG.name,
            metadata: WG
          }, null, VG), bG = GG.value, WG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WG
          }), (0, CG.n)(bG, VG)
        })(), bG
      })(),
      jk = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "components"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.component = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfComponents"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      Pk = (() => {
        let GG, bG, ZG, wG, SG = [ay({
            ns: wk,
            name: "component"
          })],
          LG = [],
          yG = [],
          kG = [],
          UG = [],
          YG = [];
        bG = class {
          constructor(GG, bG) {
            this.objectid = (0, CG.n)(this, yG, void 0), this.transform = ((0, CG.n)(this, kG), (0, CG.n)(this, UG, void 0)), (0, CG.n)(this, YG), this.objectid = GG, this.transform = bG
          }
        };
        return (0, CG.q)(bG, "ThreeMfComponent"), (() => {
          const VG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "objectid"
          })], wG = [ly({
            name: "transform",
            formatter: uk
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: GG => "objectid" in GG,
              get: GG => GG.objectid,
              set: (GG, bG) => {
                GG.objectid = bG
              }
            },
            metadata: VG
          }, yG, kG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: GG => "transform" in GG,
              get: GG => GG.transform,
              set: (GG, bG) => {
                GG.transform = bG
              }
            },
            metadata: VG
          }, UG, YG), (0, CG.k)(null, GG = {
            value: bG
          }, SG, {
            kind: "class",
            name: bG.name,
            metadata: VG
          }, null, LG), bG = GG.value, VG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VG
          }), (0, CG.n)(bG, LG)
        })(), bG
      })(),
      Mk = (() => {
        let GG, bG, ZG, wG = [ay({
            ns: wk,
            name: "basematerials"
          })],
          SG = [],
          LG = [],
          yG = [];
        bG = class {
          constructor(GG) {
            this.id = (0, CG.n)(this, LG, void 0), this.base = ((0, CG.n)(this, yG), []), this.id = GG
          }
        };
        return (0, CG.q)(bG, "ThreeMfBaseMaterials"), (() => {
          const kG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "id"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: GG => "id" in GG,
              get: GG => GG.id,
              set: (GG, bG) => {
                GG.id = bG
              }
            },
            metadata: kG
          }, LG, yG), (0, CG.k)(null, GG = {
            value: bG
          }, wG, {
            kind: "class",
            name: bG.name,
            metadata: kG
          }, null, SG), bG = GG.value, kG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kG
          }), (0, CG.n)(bG, SG)
        })(), bG
      })(),
      Ak = (() => {
        let GG, bG, ZG, wG, SG = [ay({
            ns: wk,
            name: "base"
          })],
          LG = [],
          yG = [],
          kG = [],
          UG = [],
          YG = [];
        bG = class {
          constructor(GG, bG) {
            this.name = (0, CG.n)(this, yG, void 0), this.displaycolor = ((0, CG.n)(this, kG), (0, CG.n)(this, UG, void 0)), (0, CG.n)(this, YG), this.name = GG, this.displaycolor = bG
          }
        };
        return (0, CG.q)(bG, "ThreeMfBase"), (() => {
          const VG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "name"
          })], wG = [ly({
            name: "displaycolor"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: GG => "name" in GG,
              get: GG => GG.name,
              set: (GG, bG) => {
                GG.name = bG
              }
            },
            metadata: VG
          }, yG, kG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: GG => "displaycolor" in GG,
              get: GG => GG.displaycolor,
              set: (GG, bG) => {
                GG.displaycolor = bG
              }
            },
            metadata: VG
          }, UG, YG), (0, CG.k)(null, GG = {
            value: bG
          }, SG, {
            kind: "class",
            name: bG.name,
            metadata: VG
          }, null, LG), bG = GG.value, VG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: VG
          }), (0, CG.n)(bG, LG)
        })(), bG
      })(),
      sk = (() => {
        let GG, bG, ZG = [ay({
            ns: wk,
            name: "build"
          })],
          wG = [];
        bG = class {
          constructor() {
            this.item = []
          }
        };
        return (0, CG.q)(bG, "ThreeMfBuild"), (() => {
          const SG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, CG.k)(null, GG = {
            value: bG
          }, ZG, {
            kind: "class",
            name: bG.name,
            metadata: SG
          }, null, wG), bG = GG.value, SG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: SG
          }), (0, CG.n)(bG, wG)
        })(), bG
      })(),
      qk = (() => {
        let GG, bG, ZG, wG, SG, LG = [ay({
            ns: wk,
            name: "item"
          })],
          yG = [],
          kG = [],
          UG = [],
          YG = [],
          VG = [],
          pG = [],
          fG = [];
        bG = class {
          constructor(GG, bG, ZG) {
            this.objectid = (0, CG.n)(this, kG, void 0), this.transform = ((0, CG.n)(this, UG), (0, CG.n)(this, YG, void 0)), this.partnumber = ((0, CG.n)(this, VG), (0, CG.n)(this, pG, void 0)), this.metadatagroup = (0, CG.n)(this, fG), this.objectid = GG, this.transform = bG, this.partnumber = ZG
          }
        };
        return (0, CG.q)(bG, "ThreeMfItem"), (() => {
          const QG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ZG = [ly({
            name: "objectid"
          })], wG = [ly({
            name: "transform",
            formatter: uk
          })], SG = [ly({
            name: "partnumber"
          })], (0, CG.k)(null, null, ZG, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: GG => "objectid" in GG,
              get: GG => GG.objectid,
              set: (GG, bG) => {
                GG.objectid = bG
              }
            },
            metadata: QG
          }, kG, UG), (0, CG.k)(null, null, wG, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: GG => "transform" in GG,
              get: GG => GG.transform,
              set: (GG, bG) => {
                GG.transform = bG
              }
            },
            metadata: QG
          }, YG, VG), (0, CG.k)(null, null, SG, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: GG => "partnumber" in GG,
              get: GG => GG.partnumber,
              set: (GG, bG) => {
                GG.partnumber = bG
              }
            },
            metadata: QG
          }, pG, fG), (0, CG.k)(null, GG = {
            value: bG
          }, LG, {
            kind: "class",
            name: bG.name,
            metadata: QG
          }, null, yG), bG = GG.value, QG && Object.defineProperty(bG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QG
          }), (0, CG.n)(bG, yG)
        })(), bG
      })();
    class nk {
      constructor(GG, bG) {
        this._object = new Ik(GG, bG)
      }
      withName(GG) {
        return this._object.name = GG, this
      }
      withThumbnail(GG) {
        return this._object.thumbnail = GG, this
      }
      withProperty(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = GG, this._object.id = bG, this
      }
      build() {
        return this._object
      }
      reset(GG, bG) {
        this._object = new Ik(GG, bG)
      }
    }
    class gk extends nk {
      constructor(GG) {
        super(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yk.model), this._object.content = new jk
      }
      withComponent(GG, bG) {
        return this._object.content.component.push(new Pk(GG, bG)), this
      }
    }
    class ek extends nk {
      constructor(GG) {
        super(GG, yk.model)
      }
      withPostProcessHandlers(GG, bG) {
        return this._vh = GG, this._th = bG, this
      }
      withData(GG) {
        return this._object.content = this._buildMesh(GG), this
      }
      withMaterial(GG, bG) {
        return this._object.pid = GG, this._object.pindex = bG, this
      }
      _buildMesh(GG) {
        const bG = this._buildVertices(GG.positions),
          ZG = this._buildTriangle(GG.indices);
        return new Fk(bG, ZG)
      }
      _buildVertices(GG) {
        const bG = new vk;
        if (GG)
          for (let ZG = 0; ZG < GG.length;) {
            const wG = GG[ZG++],
              SG = GG[ZG++],
              LG = GG[ZG++];
            let yG = new ak(wG, SG, LG);
            this._vh && (yG = this._vh(yG)), bG.vertex.push(yG)
          }
        return bG
      }
      _buildTriangle(GG) {
        const bG = new ck;
        if (GG)
          for (let ZG = 0; ZG < GG.length;) {
            const wG = GG[ZG++],
              SG = GG[ZG++],
              LG = GG[ZG++];
            let yG = new lk(wG, SG, LG);
            this._th && (yG = this._th(yG)), bG.triangle.push(yG)
          }
        return bG
      }
    }
    class Rk {
      constructor(GG) {
        this._m = new Mk(GG)
      }
      withColor(GG, bG) {
        this._m.base = this._m.base ?? [];
        let ZG = this._m.base.find((bG => bG.name.toLowerCase() === GG.toLowerCase()));
        return ZG ? (ZG.displaycolor = this._rgbaToHex(bG), this) : (ZG = new Ak(GG, this._rgbaToHex(bG)), this._m.base.push(ZG), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(GG) {
        const bG = GG => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(GG, 1 / 2.2)))),
          ZG = bG(GG.r).toString(16).padStart(2, "0").toUpperCase(),
          wG = bG(GG.g).toString(16).padStart(2, "0").toUpperCase(),
          SG = bG(GG.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof GG.a) {
          return `#${ZG}${wG}${SG}${Math.round(Math.min(255,Math.max(0,255*GG.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${ZG}${wG}${SG}`
      }
    }
    class Tk {
      constructor() {
        this._model = new ik, this._objects = new Map
      }
      withMetaData(GG, bG, ZG, wG) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new Ck(GG, bG, ZG, wG)), this
      }
      withMaterial(GG) {
        return GG instanceof Rk && (GG = GG.build()), GG && (this._model.resources = this._model.resources ?? new mk, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(GG)), this
      }
      withMesh(GG) {
        return GG instanceof ek && (GG = GG.build()), this._model.resources = this._model.resources ?? new mk, this._model.resources.object.push(GG), this
      }
      withComponents(GG) {
        return GG instanceof gk && (GG = GG.build()), this._model.resources = this._model.resources ?? new mk, this._model.resources.object.push(GG), this
      }
      withBuild(GG, bG, ZG) {
        return this._model.build = this._model.build ?? new sk, this._model.build.item?.push(new qk(GG, bG, ZG)), this
      }
      withUnit(GG) {
        return this._model.unit = GG, this
      }
      reset() {
        return this._model = new ik, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    Tk.KnownMetaSet = new Set(ik.KnownMeta.map((GG => GG.toLowerCase())));
    class Hk {
      withContentType(GG) {
        this._cts || (this._cts = new dk);
        const bG = this._cts.items;
        return bG.some((bG => bG.ext === GG.ext && bG.ct === GG.ct)) || bG.push(GG), this
      }
      withRelationship(GG) {
        this._rs || (this._rs = new rk);
        const bG = this._rs.items;
        return bG.some((bG => bG.id === GG.id)) || bG.push(GG), this.withContentType(new Jk("rels", Yk.Relationships)), this
      }
      withModel(GG) {
        return GG instanceof Tk && (GG = GG.build()), this._m = GG, this.withContentType(new Jk("model", Yk.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const GG = `${pk}${fk}`;
        if (!this._rs) {
          const bG = `/${GG}`;
          this.withRelationship(new zk("rel0", hk.ThreeDimModel, bG))
        }
        return new Ek(this._cts, this._rs, this._m)
      }
    }
    class tk {
      constructor(GG) {
        this._o = GG
      }
      get options() {
        return this._o
      }
      async serializeAsync(GG) {
        const bG = await this.ensureZipLibReadyAsync();
        if (!bG) return;
        const ZG = bG.Zip,
          wG = bG.ZipDeflate;
        if (!ZG || !wG) throw new Error("fflate Zip / ZipDeflate not available");
        const SG = function(GG, bG, ZG) {
          const SG = new wG(bG, {
            level: 6
          });
          GG.add(SG);
          const LG = function(GG) {
              return {
                push: (bG, ZG) => GG.push(bG, ZG)
              }
            }(SG),
            yG = new Zk(LG),
            kG = new Gk(yG).dec("1.0", "UTF-8");
          new Oy(kG).serialize(ZG), yG.finish()
        };
        for (var LG = arguments.length, yG = new Array(LG > 1 ? LG - 1 : 0), kG = 1; kG < LG; kG++) yG[kG - 1] = arguments[kG];
        const UG = this.toDocument(...yG);
        if (!UG) return;
        const YG = new ZG(GG);
        SG(YG, Kk, UG.contentTypes), SG(YG, `${Vk}${Qk}`, UG.relationships), SG(YG, `${pk}${fk}`, UG.model), YG.end()
      }
      toDocument() {
        const GG = (new Tk).withUnit(this._o?.unit ?? Lk.millimeter);
        if (this.options.metadata)
          for (const SG in this.options.metadata) GG.withMetaData(SG, this.options.metadata[SG]);
        for (var bG = arguments.length, ZG = new Array(bG), wG = 0; wG < bG; wG++) ZG[wG] = arguments[wG];
        return (new Hk).withModel(this.toModel(GG, ...ZG)).build()
      }
    }
    class Dk {
      static async SerializeToMemoryAsync(GG) {
        const bG = new Array;
        let ZG = 0;
        for (var wG = arguments.length, SG = new Array(wG > 1 ? wG - 1 : 0), LG = 1; LG < wG; LG++) SG[LG - 1] = arguments[LG];
        if (await GG.serializeAsync((function(GG, wG, SG) {
            bG.push(wG), ZG += wG.length
          }), ...SG), !ZG) return;
        const yG = new Uint8Array(ZG);
        let kG = 0;
        for (const UG of bG) yG.set(UG, kG), kG += UG.length;
        return yG
      }
    }
    class Nk {}
    Nk.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Ok {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = GG, this._to = bG, this._step = ZG, this._i = GG
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const GG = this._i;
        return this._i += this._step, GG
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class xk extends tk {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...xk.DefaultOptions,
          ...GG
        })
      }
      toModel(GG) {
        for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
        ZG = ZG.filter((GG => GG instanceof Yw.d || GG instanceof QG.e));
        const SG = new Ok,
          LG = GG,
          yG = new Map,
          kG = this.options.exportInstances ? [] : null;
        for (let UG = 0; UG < ZG.length; UG++) {
          const GG = ZG[UG];
          if (GG instanceof QG.e) {
            kG?.push(GG);
            continue
          }
          const bG = GG.name || `mesh${UG}`,
            wG = GG.getWorldMatrix(),
            YG = this._handleBabylonTo3mfMatrixTransformToRef(wG, Xk.Zero()),
            VG = GG.aE;
          if (void 0 === VG) continue;
          const pG = 1 == VG.length;
          for (let ZG = 0; ZG < VG.length; ZG++) {
            const wG = VG[ZG],
              kG = this._extractSubMesh(GG, wG);
            if (kG) {
              const GG = pG ? `${bG}` : `${bG}_${ZG}`,
                UG = new ek(SG.next()).withData(kG).withName(GG).build();
              LG.withMesh(UG), LG.withBuild(UG.id, YG), yG.set(wG, UG)
            }
          }
        }
        if (kG && kG.length) {
          const GG = this._groupBy(kG, (GG => GG.ESG));
          for (const [bG, ZG] of Array.from(GG.entries()))
            if (ZG && ZG.length)
              for (let GG = 0; GG < ZG.length; GG++) {
                const wG = ZG[GG].getWorldMatrix(),
                  SG = bG.aE;
                for (let GG = 0; GG < SG.length; GG++) {
                  const bG = SG[GG],
                    ZG = yG.get(bG);
                  ZG && LG.withBuild(ZG.id, this._handleBabylonTo3mfMatrixTransformToRef(wG, Xk.Zero()))
                }
              }
        }
        return LG.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const GG = globalThis;
          return GG.fflate || await SG.Tools.LoadScriptAsync(Nk.FFLATEUrl), GG.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(GG, bG) {
        const ZG = GG.IwG();
        if (!ZG) return;
        const wG = GG.getVerticesData(xk._PositionKind);
        if (!wG) return;
        if (0 == bG.indexStart && bG.indexCount == ZG.length) return {
          positions: wG,
          indices: ZG
        };
        const SG = bG.indexStart,
          LG = new Map,
          yG = [],
          kG = new Uint32Array(bG.indexCount);
        for (let UG = 0; UG < bG.indexCount; UG++) {
          const GG = ZG[SG + UG];
          let bG = LG.get(GG);
          if (void 0 === bG) {
            bG = LG.size, LG.set(GG, bG);
            const ZG = 3 * GG;
            yG.push(wG[ZG], wG[ZG + 1], wG[ZG + 2])
          }
          kG[UG] = bG
        }
        return {
          positions: new Float32Array(yG),
          indices: kG
        }
      }
      _groupBy(GG, bG) {
        const ZG = new Map;
        for (const wG of GG) {
          const GG = bG(wG),
            SG = ZG.get(GG);
          SG ? SG.push(wG) : ZG.set(GG, [wG])
        }
        return ZG
      }
      _handleBabylonTo3mfMatrixTransformToRef(GG, bG) {
        const ZG = GG.multiplyToRef(xk._R_BJS_TO_3MF, AG.e.Zero()).m;
        return bG.values = [ZG[0], ZG[1], ZG[2], ZG[4], ZG[5], ZG[6], ZG[8], ZG[9], ZG[10], ZG[12], ZG[13], ZG[14]], bG
      }
    }
    xk.DefaultOptions = {
      unit: Lk.meter,
      exportInstances: !1
    }, xk._PositionKind = "position", xk._R_BJS_TO_3MF = AG.e.RotationX(Math.PI / 2).multiply(AG.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);