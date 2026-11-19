export const id = 221;
export const ids = [221, 225];
export const modules = {
  40900: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(40825),
      AY = DY(39123);
    let IY = !1;

    function RY() {
      IY || (IY = !0, AY.e.prototype._sphericalPolynomialTargetSize = 0, AY.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(AY.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = FY.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((YY => {
              this._texture._sphericalPolynomial = YY, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(YY) {
          this._texture && (this._texture._sphericalPolynomial = YY)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36586: (YY, rY, DY) => {
    DY.d(rY, {
      Color3: () => FY.c,
      c: () => FY.d
    });
    var FY = DY(36588);
    (0, FY.f)()
  },
  37105: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(37107);
    class AY {
      static GetPlanes(YY) {
        const rY = [];
        for (let DY = 0; DY < 6; DY++) rY.push(new FY.c(0, 0, 0, 0));
        return AY.GetPlanesToRef(YY, rY), rY
      }
      static GetNearPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[2], rY.normal.y = DY[7] + DY[6], rY.normal.z = DY[11] + DY[10], rY.d = DY[15] + DY[14], rY.normalize()
      }
      static GetFarPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[2], rY.normal.y = DY[7] - DY[6], rY.normal.z = DY[11] - DY[10], rY.d = DY[15] - DY[14], rY.normalize()
      }
      static GetLeftPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[0], rY.normal.y = DY[7] + DY[4], rY.normal.z = DY[11] + DY[8], rY.d = DY[15] + DY[12], rY.normalize()
      }
      static GetRightPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[0], rY.normal.y = DY[7] - DY[4], rY.normal.z = DY[11] - DY[8], rY.d = DY[15] - DY[12], rY.normalize()
      }
      static GetTopPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[1], rY.normal.y = DY[7] - DY[5], rY.normal.z = DY[11] - DY[9], rY.d = DY[15] - DY[13], rY.normalize()
      }
      static GetBottomPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[1], rY.normal.y = DY[7] + DY[5], rY.normal.z = DY[11] + DY[9], rY.d = DY[15] + DY[13], rY.normalize()
      }
      static GetPlanesToRef(YY, rY) {
        AY.GetNearPlaneToRef(YY, rY[0]), AY.GetFarPlaneToRef(YY, rY[1]), AY.GetLeftPlaneToRef(YY, rY[2]), AY.GetRightPlaneToRef(YY, rY[3]), AY.GetTopPlaneToRef(YY, rY[4]), AY.GetBottomPlaneToRef(YY, rY[5])
      }
      static IsPointInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; DY++)
          if (rY[DY].dotCoordinate(YY) < 0) return !1;
        return !0
      }
    }
  },
  37107: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(36524);
    class AY {
      constructor(YY, rY, DY, AY) {
        this.normal = new FY.r(YY, rY, DY), this.d = AY
      }
      VDY() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AY(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let YY = this.normal.getHashCode();
        return YY = 397 * YY ^ this.d, YY
      }
      normalize() {
        const YY = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rY = 0;
        return 0 !== YY && (rY = 1 / YY), this.normal.x *= rY, this.normal.y *= rY, this.normal.z *= rY, this.d *= rY, this
      }
      transform(YY) {
        const rY = AY._TmpMatrix;
        YY.invertToRef(rY);
        const DY = rY.m,
          FY = this.normal.x,
          IY = this.normal.y,
          RY = this.normal.z,
          OY = this.d,
          gY = FY * DY[0] + IY * DY[1] + RY * DY[2] + OY * DY[3],
          aY = FY * DY[4] + IY * DY[5] + RY * DY[6] + OY * DY[7],
          vY = FY * DY[8] + IY * DY[9] + RY * DY[10] + OY * DY[11],
          uY = FY * DY[12] + IY * DY[13] + RY * DY[14] + OY * DY[15];
        return new AY(gY, aY, vY, uY)
      }
      dotCoordinate(YY) {
        return this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z + this.d
      }
      copyFromPoints(YY, rY, DY) {
        const FY = rY.x - YY.x,
          AY = rY.y - YY.y,
          IY = rY.z - YY.z,
          RY = DY.x - YY.x,
          OY = DY.y - YY.y,
          gY = DY.z - YY.z,
          aY = AY * gY - IY * OY,
          vY = IY * RY - FY * gY,
          uY = FY * OY - AY * RY,
          sY = Math.sqrt(aY * aY + vY * vY + uY * uY);
        let iY;
        return iY = 0 !== sY ? 1 / sY : 0, this.normal.x = aY * iY, this.normal.y = vY * iY, this.normal.z = uY * iY, this.d = -(this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z), this
      }
      isFrontFacingTo(YY, rY) {
        return FY.r.Dot(this.normal, YY) <= rY
      }
      signedDistanceTo(YY) {
        return FY.r.Dot(YY, this.normal) + this.d
      }
      static FromArray(YY) {
        return new AY(YY[0], YY[1], YY[2], YY[3])
      }
      static FromPoints(YY, rY, DY) {
        const FY = new AY(0, 0, 0, 0);
        return FY.copyFromPoints(YY, rY, DY), FY
      }
      static FromPositionAndNormal(YY, rY) {
        const DY = new AY(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(YY, rY, DY)
      }
      static FromPositionAndNormalToRef(YY, rY, DY) {
        return DY.normal.brY(rY), DY.normal.normalize(), DY.d = -YY.dot(DY.normal), DY
      }
      static SignedDistanceToPlaneFromPositionAndNormal(YY, rY, DY) {
        const AY = -(rY.x * YY.x + rY.y * YY.y + rY.z * YY.z);
        return FY.r.Dot(DY, rY) + AY
      }
    }
    AY._TmpMatrix = FY.e.Identity()
  },
  36518: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Matrix: () => FY.e,
      Quaternion: () => FY.g,
      RegisterMathVector: () => FY.j,
      TmpVectors: () => FY.n,
      Vector2: () => FY.q,
      xy: () => FY.r,
      Vector4: () => FY.v
    });
    var FY = DY(36524);
    (0, FY.j)()
  },
  37493: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY, rY, DY, FY) {
        this.x = YY, this.y = rY, this.width = DY, this.height = FY
      }
      toGlobal(YY, rY) {
        return new FY(this.x * YY, this.y * rY, this.width * YY, this.height * rY)
      }
      toGlobalToRef(YY, rY, DY) {
        return DY.x = this.x * YY, DY.y = this.y * rY, DY.width = this.width * YY, DY.height = this.height * rY, this
      }
      clone() {
        return new FY(this.x, this.y, this.width, this.height)
      }
    }
  },
  40825: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => aY
    });
    var FY = DY(36524),
      AY = DY(36559),
      IY = DY(39120),
      RY = DY(36533),
      OY = DY(36588);
    class gY {
      constructor(YY, rY, DY, FY) {
        this.name = YY, this.worldAxisForNormal = rY, this.worldAxisForFileX = DY, this.worldAxisForFileY = FY
      }
    }
    class aY {
      static _NearestPow2Floor(YY) {
        return YY <= 1 ? 1 : 1 << Math.floor(Math.log2(YY))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(YY) {
        if (!YY.isCube) return null;
        YY.hT()?.ky().flushFramebuffer();
        const rY = YY.getSize().width,
          DY = YY._sphericalPolynomialTargetSize,
          FY = DY > 0 ? this._NearestPow2Floor(DY) : 0,
          AY = !YY.noMipmap && !0 === YY._texture?.generateMipMaps,
          IY = FY > 0 && FY < rY && AY,
          RY = IY ? Math.max(0, Math.round(Math.log2(rY / FY))) : 0,
          OY = IY ? Math.max(1, Math.floor(rY / Math.pow(2, RY))) : rY,
          gY = YY.readPixels(0, RY, void 0, !1),
          aY = YY.readPixels(1, RY, void 0, !1);
        let vY, uY;
        YY.isRenderTarget ? (vY = YY.readPixels(3, RY, void 0, !1), uY = YY.readPixels(2, RY, void 0, !1)) : (vY = YY.readPixels(2, RY, void 0, !1), uY = YY.readPixels(3, RY, void 0, !1));
        const sY = YY.readPixels(4, RY, void 0, !1),
          iY = YY.readPixels(5, RY, void 0, !1),
          yY = YY.gammaSpace,
          QY = FY > 0 && FY < rY && !IY;
        return new Promise((YY => {
          Promise.all([aY, gY, vY, uY, sY, iY]).then((DY => {
            let [AY, IY, RY, gY, aY, vY] = DY, uY = OY;
            if (QY) {
              const YY = 4;
              AY = this._DownsampleFace(AY, rY, FY, YY), IY = this._DownsampleFace(IY, rY, FY, YY), RY = this._DownsampleFace(RY, rY, FY, YY), gY = this._DownsampleFace(gY, rY, FY, YY), aY = this._DownsampleFace(aY, rY, FY, YY), vY = this._DownsampleFace(vY, rY, FY, YY), uY = FY
            }
            const sY = {
              size: uY,
              right: IY,
              left: AY,
              up: RY,
              down: gY,
              front: aY,
              back: vY,
              format: 5,
              type: AY instanceof Float32Array ? 1 : 0,
              gammaSpace: yY
            };
            YY(this.ConvertCubeMapToSphericalPolynomial(sY))
          }))
        }))
      }
      static _AreaElement(YY, rY) {
        return Math.atan2(YY * rY, Math.sqrt(YY * YY + rY * rY + 1))
      }
      static _DownsampleFace(YY, rY, DY, FY) {
        const AY = YY instanceof Float32Array ? YY : Float32Array.from(YY),
          IY = DY * DY * FY,
          RY = new Float32Array(IY),
          OY = rY / DY,
          gY = 1 / (OY * OY);
        for (let vY = 0; vY < DY; vY++) {
          const YY = Math.floor(vY * OY),
            IY = Math.floor((vY + 1) * OY);
          for (let aY = 0; aY < DY; aY++) {
            const uY = Math.floor(aY * OY),
              sY = Math.floor((aY + 1) * OY),
              iY = (vY * DY + aY) * FY;
            for (let DY = 0; DY < FY; DY++) {
              let OY = 0;
              for (let RY = YY; RY < IY; RY++)
                for (let YY = uY; YY < sY; YY++) OY += AY[(RY * rY + YY) * FY + DY];
              RY[iY + DY] = OY * gY
            }
          }
        }
        if (YY instanceof Float32Array) return RY;
        const aY = new(0, YY.constructor)(IY);
        for (let vY = 0; vY < IY; vY++) aY[vY] = RY[vY] + .5 | 0;
        return aY
      }
      static ConvertCubeMapToSphericalPolynomial(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = rY > 0 ? this._NearestPow2Floor(rY) : 0;
        if (DY > 0 && YY.size > DY) {
          const rY = 5 === YY.format ? 4 : 3,
            FY = ["right", "left", "up", "down", "front", "back"],
            AY = {};
          for (const IY of FY) AY[IY] = this._DownsampleFace(YY[IY], YY.size, DY, rY);
          YY = {
            ...YY,
            ...AY,
            size: DY
          }
        }
        const FY = new IY.b;
        let gY = 0;
        const aY = 2 / YY.size,
          vY = aY,
          uY = .5 * aY,
          sY = uY - 1;
        for (let IY = 0; IY < 6; IY++) {
          const rY = this._FileFaces[IY],
            DY = YY[rY.name];
          let iY = sY;
          const yY = 5 === YY.format ? 4 : 3;
          for (let IY = 0; IY < YY.size; IY++) {
            let QY = sY;
            for (let vY = 0; vY < YY.size; vY++) {
              const sY = rY.worldAxisForFileX.scale(QY).add(rY.worldAxisForFileY.scale(iY)).add(rY.worldAxisForNormal);
              sY.normalize();
              const oY = this._AreaElement(QY - uY, iY - uY) - this._AreaElement(QY - uY, iY + uY) - this._AreaElement(QY + uY, iY - uY) + this._AreaElement(QY + uY, iY + uY);
              let WY = DY[IY * YY.size * yY + vY * yY + 0],
                EY = DY[IY * YY.size * yY + vY * yY + 1],
                mY = DY[IY * YY.size * yY + vY * yY + 2];
              isNaN(WY) && (WY = 0), isNaN(EY) && (EY = 0), isNaN(mY) && (mY = 0), 0 === YY.type && (WY /= 255, EY /= 255, mY /= 255), YY.gammaSpace && (WY = Math.pow((0, AY.Clamp)(WY), RY.g), EY = Math.pow((0, AY.Clamp)(EY), RY.g), mY = Math.pow((0, AY.Clamp)(mY), RY.g));
              const VY = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const YY = Math.max(WY, EY, mY);
                if (YY > VY) {
                  const rY = VY / YY;
                  WY *= rY, EY *= rY, mY *= rY
                }
              } else WY = (0, AY.Clamp)(WY, 0, VY), EY = (0, AY.Clamp)(EY, 0, VY), mY = (0, AY.Clamp)(mY, 0, VY);
              const SY = new OY.c(WY, EY, mY);
              FY.addLight(sY, SY, oY), gY += oY, QY += aY
            }
            iY += vY
          }
        }
        const iY = 6 * (4 * Math.PI) / 6 / gY;
        return FY.scaleInPlace(iY), FY.convertIncidentRadianceToIrradiance(), FY.convertIrradianceToLambertianRadiance(), IY.f.FromHarmonics(FY)
      }
    }
    aY._FileFaces = [new gY("right", new FY.r(1, 0, 0), new FY.r(0, 0, -1), new FY.r(0, -1, 0)), new gY("left", new FY.r(-1, 0, 0), new FY.r(0, 0, 1), new FY.r(0, -1, 0)), new gY("up", new FY.r(0, 1, 0), new FY.r(1, 0, 0), new FY.r(0, 0, 1)), new gY("down", new FY.r(0, -1, 0), new FY.r(1, 0, 0), new FY.r(0, 0, -1)), new gY("front", new FY.r(0, 0, 1), new FY.r(1, 0, 0), new FY.r(0, -1, 0)), new gY("back", new FY.r(0, 0, -1), new FY.r(-1, 0, 0), new FY.r(0, -1, 0))], aY.MAX_HDRI_VALUE = 4096, aY.PRESERVE_CLAMPED_COLORS = !1
  },
  40608: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.e,
      g: () => FY.m
    });
    var FY = DY(39160);
    (0, FY.t)()
  },
  37242: (YY, rY, DY) => {
    function FY() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (YY => {
        const rY = 16 * Math.random() | 0;
        return ("x" === YY ? rY : 3 & rY | 8).toString(16)
      }))
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  40863: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => IY
    });
    var FY = DY(40853),
      AY = DY(40871);
    class IY {
      static ExpandRGBDTexture(YY) {
        const rY = YY._texture;
        if (!rY || !YY.isRGBD) return;
        const AY = rY.ky(),
          IY = AY.getCaps(),
          RY = rY.isReady;
        let OY = !1;
        IY.textureHalfFloatRender && IY.textureHalfFloatLinearFiltering ? (OY = !0, rY.type = 2) : IY.textureFloatRender && IY.textureFloatLinearFiltering && (OY = !0, rY.type = 1), OY && (rY.isReady = !1, rY._isRGBD = !1, rY.invertY = !1);
        const gY = async () => {
          const IY = AY.isWebGPU,
            RY = IY ? 1 : 0;
          rY.isReady = !1, IY ? await DY.e(332).then((() => DY(60433))) : await DY.e(314).then((() => DY(60440)));
          const OY = new FY.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, AY, !1, void 0, rY.type, void 0, null, !1, void 0, RY);
          OY.externalTextureSamplerBinding = !0;
          const gY = AY.createRenderTargetTexture(rY.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: rY.samplingMode,
            type: rY.type,
            format: 5
          });
          OY.onEffectCreatedObservable.addOnce((DY => {
            DY.executeWhenCompiled((() => {
              OY.onApply = YY => {
                YY._bindTexture("textureSampler", rY), YY.setFloat2("scale", 1, 1)
              }, YY.hT()?.postProcessManager.directRender([OY], gY, !0), AY.restoreDefaultFramebuffer(), AY._releaseTexture(rY), OY && OY.dispose(), gY._swapAndDie(rY), rY.isReady = !0
            }))
          }))
        };
        OY && (RY ? gY() : YY.onLoadObservable.addOnce(gY))
      }
      static async EncodeTextureToRGBD(YY, rY) {
        let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return rY.ky().isWebGPU ? await DY.e(333).then((() => DY(60457))) : await DY.e(315).then((() => DY(60455))), await (0, AY.b)("rgbdEncode", YY, rY, FY, 1, 5)
      }
    }
  },
  60196: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AsyncLoop: () => FY.c,
      RegisterTools: () => FY.f,
      Tools: () => FY.i,
      className: () => FY.m
    });
    var FY = DY(39219);
    (0, FY.f)()
  },
  40912: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    class FY {
      constructor(YY) {
        this._pendingActions = new Array, this._workerInfos = YY.map((YY => ({
          workerPromise: Promise.resolve(YY),
          idle: !0
        })))
      }
      dispose() {
        for (const YY of this._workerInfos) YY.workerPromise.then((YY => {
          YY.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(YY) {
        this._executeOnIdleWorker(YY) || this._pendingActions.push(YY)
      }
      _executeOnIdleWorker(YY) {
        for (const rY of this._workerInfos)
          if (rY.idle) return this._execute(rY, YY), !0;
        return !1
      }
      _execute(YY, rY) {
        YY.idle = !1, YY.workerPromise.then((DY => {
          rY(DY, (() => {
            const rY = this._pendingActions.shift();
            rY ? this._execute(YY, rY) : YY.idle = !0
          }))
        }))
      }
    }
    class AY extends FY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : AY.DefaultOptions;
        super([]), this._maxWorkers = YY, this._createWorkerAsync = rY, this._options = DY
      }
      push(YY) {
        if (!this._executeOnIdleWorker(YY))
          if (this._workerInfos.length < this._maxWorkers) {
            const rY = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(rY), this._execute(rY, YY)
          } else this._pendingActions.push(YY)
      }
      _execute(YY, rY) {
        YY.timeoutId && (clearTimeout(YY.timeoutId), delete YY.timeoutId), super._execute(YY, ((DY, FY) => {
          rY(DY, (() => {
            FY(), YY.idle && (YY.timeoutId = setTimeout((() => {
              YY.workerPromise.then((YY => {
                YY.terminate()
              }));
              const rY = this._workerInfos.indexOf(YY); - 1 !== rY && this._workerInfos.splice(rY, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    AY.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  60234: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AbstractThreeMfSerializer: () => kO,
      BVHExporter: () => NR,
      ContentTypeFileName: () => iO,
      DefaultXmlSerializerFormatOptions: () => bR,
      DefaultXmlSerializerNumberOptions: () => wR,
      EXT_lights_area: () => oA,
      EXT_mesh_gpu_instancing: () => JF,
      EXT_texture_avif: () => AR,
      EXT_texture_webp: () => YR,
      GLTF2Export: () => jF,
      GLTFData: () => aY,
      GetXmlFieldMeta: () => jR,
      GetXmlName: () => hR,
      IsQualifiedName: () => BR,
      KHR_draco_mesh_compression: () => UF,
      KHR_interactivity: () => aA,
      KHR_lights_punctual: () => IA,
      KHR_materials_anisotropy: () => VA,
      KHR_materials_clearcoat: () => NA,
      KHR_materials_coat: () => ZA,
      KHR_materials_diffuse_roughness: () => hI,
      KHR_materials_diffuse_transmission: () => JA,
      KHR_materials_dispersion: () => XA,
      KHR_materials_emissive_strength: () => GA,
      KHR_materials_fuzz: () => vI,
      KHR_materials_ior: () => UA,
      KHR_materials_iridescence: () => rI,
      KHR_materials_openpbr: () => wI,
      KHR_materials_sheen: () => II,
      KHR_materials_specular: () => yI,
      KHR_materials_transmission: () => EI,
      KHR_materials_unlit: () => TI,
      KHR_materials_volume: () => cI,
      KHR_materials_volume_scatter: () => ZI,
      KHR_texture_basisu: () => PI,
      KHR_texture_transform: () => pI,
      Known3mfRelationshipTypes: () => yO,
      KnownI3mfContentType: () => gO,
      Matrix3d: () => VO,
      MatrixFormatter: () => SO,
      ModelFileName: () => uO,
      NumberFormatter: () => pR,
      OBJExport: () => RY,
      Object3dDirName: () => vO,
      OpenXmlContentTypesNamespace: () => RO,
      OpenXmlRelationshipsNamespace: () => OO,
      RegisterEXT_lights_area: () => EA,
      RegisterEXT_mesh_gpu_instancing: () => wF,
      RegisterEXT_texture_avif: () => RR,
      RegisterEXT_texture_webp: () => DR,
      RegisterKHR_draco_mesh_compression: () => tF,
      RegisterKHR_interactivity: () => uA,
      RegisterKHR_lights_punctual: () => OA,
      RegisterKHR_materials_anisotropy: () => lA,
      RegisterKHR_materials_clearcoat: () => cA,
      RegisterKHR_materials_coat: () => fA,
      RegisterKHR_materials_diffuse_roughness: () => JI,
      RegisterKHR_materials_diffuse_transmission: () => wA,
      RegisterKHR_materials_dispersion: () => pA,
      RegisterKHR_materials_emissive_strength: () => nA,
      RegisterKHR_materials_fuzz: () => sI,
      RegisterKHR_materials_ior: () => tA,
      RegisterKHR_materials_iridescence: () => FI,
      RegisterKHR_materials_openpbr: () => XI,
      RegisterKHR_materials_sheen: () => OI,
      RegisterKHR_materials_specular: () => oI,
      RegisterKHR_materials_transmission: () => VI,
      RegisterKHR_materials_unlit: () => NI,
      RegisterKHR_materials_volume: () => HI,
      RegisterKHR_materials_volume_scatter: () => fI,
      RegisterKHR_texture_basisu: () => LI,
      RegisterKHR_texture_transform: () => GI,
      RelationshipDirName: () => aO,
      RelationshipFileName: () => sO,
      ResolveFormatOptions: () => qR,
      ResolveNumberOptions: () => XR,
      STLExport: () => OR,
      ST_ObjectType: () => IO,
      ST_Unit: () => AO,
      StringXmlWriter: () => YO,
      ThreeDimModelNamespace: () => DO,
      ThreeMf: () => GO,
      ThreeMfBase: () => hO,
      ThreeMfBaseMaterials: () => jO,
      ThreeMfBuild: () => dO,
      ThreeMfComponent: () => fO,
      ThreeMfComponents: () => CO,
      ThreeMfComponentsBuilder: () => wO,
      ThreeMfContentType: () => oO,
      ThreeMfContentTypes: () => QO,
      ThreeMfDocument: () => mO,
      ThreeMfDocumentBuilder: () => pO,
      ThreeMfItem: () => JO,
      ThreeMfMaterialBuilder: () => XO,
      ThreeMfMesh: () => cO,
      ThreeMfMeshBuilder: () => bO,
      ThreeMfMeta: () => TO,
      ThreeMfMetadataGroup: () => eO,
      ThreeMfModel: () => lO,
      ThreeMfModelBuilder: () => qO,
      ThreeMfObject: () => BO,
      ThreeMfObjectBuilder: () => MO,
      ThreeMfRelationship: () => EO,
      ThreeMfRelationships: () => WO,
      ThreeMfResources: () => NO,
      ThreeMfSerializer: () => PO,
      ThreeMfSerializerGlobalConfiguration: () => xO,
      ThreeMfTriangle: () => ZO,
      ThreeMfTriangles: () => zO,
      ThreeMfVertex: () => HO,
      ThreeMfVertices: () => KO,
      ToQualifiedString: () => MR,
      TokenType: () => LR,
      TriangleSetsNamespace: () => FO,
      USDZExportAsync: () => TR,
      Utf8XmlWriterToBytes: () => rO,
      XmlAttr: () => CR,
      XmlBuilder: () => tR,
      XmlElem: () => fR,
      XmlIgnore: () => ZR,
      XmlName: () => zR,
      XmlNameToParts: () => JR,
      XmlSerializer: () => PR,
      _ConvertToGLTFPBRMetallicRoughness: () => ND,
      _SolveMetallic: () => eD,
      __IGLTFExporterExtension: () => OY
    });
    var FY = DY(36518),
      AY = DY(60196),
      IY = DY(39414);
    class RY {
      static OBJ(YY, rY, DY, RY) {
        const OY = [];
        let gY = 1,
          aY = 1;
        rY && (DY || (DY = "mat"), OY.push("mtllib " + DY + ".mtl"));
        for (let vY = 0; vY < YY.length; vY++) {
          const DY = YY[vY],
            uY = DY.name || `mesh${vY}}`;
          OY.push(`o ${uY}`);
          let sY = null;
          if (RY) {
            const YY = DY.computeWorldMatrix(!0);
            sY = new FY.Matrix, YY.invertToRef(sY), DY.bakeTransformIntoVertices(YY)
          }
          if (rY) {
            const YY = DY.material;
            YY && OY.push("usemtl " + YY.id)
          }
          const iY = DY.geometry;
          if (!iY) {
            AY.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const yY = iY.getVerticesData("position"),
            QY = iY.getVerticesData("normal"),
            oY = iY.getVerticesData("uv"),
            WY = iY.XIY();
          let EY = 0,
            mY = 0;
          if (!yY || !WY) {
            AY.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const VY = YY[0].hT().useRightHandedSystem ? 1 : -1;
          for (let YY = 0; YY < yY.length; YY += 3) OY.push("v " + yY[YY] * VY + " " + yY[YY + 1] + " " + yY[YY + 2]), EY++;
          if (null != QY)
            for (let YY = 0; YY < QY.length; YY += 3) OY.push("vn " + QY[YY] * VY + " " + QY[YY + 1] + " " + QY[YY + 2]);
          if (null != oY)
            for (let YY = 0; YY < oY.length; YY += 2) OY.push("vt " + oY[YY] + " " + oY[YY + 1]), mY++;
          const SY = ["", "", ""],
            lY = (DY.material || DY.hT().defaultMaterial)._getEffectiveOrientation(DY),
            [TY, eY] = lY === IY.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let YY = 0; YY < WY.length; YY += 3) {
            const rY = [String(WY[YY] + gY), String(WY[YY + TY] + gY), String(WY[YY + eY] + gY)],
              DY = [String(WY[YY] + aY), String(WY[YY + TY] + aY), String(WY[YY + eY] + aY)],
              FY = rY,
              AY = null != oY ? DY : SY,
              IY = null != QY ? rY : SY;
            OY.push("f " + FY[0] + "/" + AY[0] + "/" + IY[0] + " " + FY[1] + "/" + AY[1] + "/" + IY[1] + " " + FY[2] + "/" + AY[2] + "/" + IY[2])
          }
          RY && sY && DY.bakeTransformIntoVertices(sY), gY += EY, aY += mY
        }
        return OY.join("\n")
      }
      static MTL(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const DY = [],
          FY = YY.material;
        DY.push("newmtl " + rY), DY.push("  Ns " + FY.specularPower.toFixed(4)), DY.push("  Ni 1.5000"), DY.push("  d " + FY.alpha.toFixed(4)), DY.push("  Tr 0.0000"), DY.push("  Tf 1.0000 1.0000 1.0000"), DY.push("  illum 2"), DY.push("  Ka " + FY.ambientColor.r.toFixed(4) + " " + FY.ambientColor.g.toFixed(4) + " " + FY.ambientColor.b.toFixed(4)), DY.push("  Kd " + FY.diffuseColor.r.toFixed(4) + " " + FY.diffuseColor.g.toFixed(4) + " " + FY.diffuseColor.b.toFixed(4)), DY.push("  Ks " + FY.specularColor.r.toFixed(4) + " " + FY.specularColor.g.toFixed(4) + " " + FY.specularColor.b.toFixed(4)), DY.push("  Ke " + FY.emissiveColor.r.toFixed(4) + " " + FY.emissiveColor.g.toFixed(4) + " " + FY.emissiveColor.b.toFixed(4));
        FY.ambientTexture && DY.push("  map_Ka " + FY.ambientTexture.name), FY.diffuseTexture && DY.push("  map_Kd " + FY.diffuseTexture.name), FY.specularTexture && DY.push("  map_Ks " + FY.specularTexture.name), FY.bumpTexture && DY.push("  map_bump -imfchan z " + FY.bumpTexture.name), FY.opacityTexture && DY.push("  map_d " + FY.opacityTexture.name);
        return DY.join("\n")
      }
    }
    var OY = 0,
      gY = DY(40608);
    class aY {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const YY in this.files) {
          const rY = this.files[YY],
            DY = new Blob([rY], {
              type: (0, gY.c)(YY)
            });
          AY.Tools.Download(DY, YY)
        }
      }
    }
    var vY = DY(40356),
      uY = DY(40314),
      sY = DY(40700),
      iY = DY(40316),
      yY = DY(38965),
      QY = DY(36546),
      oY = DY(36586),
      WY = DY(36559);
    const EY = WY.HighestCommonFactor,
      mY = {
        ...WY,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: EY
      };
    var VY = DY(40871),
      SY = DY(40338),
      lY = DY(40654),
      TY = DY(40663),
      eY = DY(40891);
    (0, eY.RegisterDumpTools)();
    var NY = DY(39127),
      BY = DY(39131),
      cY = DY(38040),
      KY = DY(39231),
      HY = DY(39596),
      zY = DY(40863);
    let ZY = 0;
    const CY = (YY, rY, DY, FY) => {
        if (!YY[DY]) {
          const AY = YY.useDelayedTextureLoading;
          YY.useDelayedTextureLoading = !1;
          const IY = YY._blockEntityCollection;
          YY._blockEntityCollection = !1;
          const RY = HY.i.CreateFromBase64String(rY, FY + ZY++, YY, !0, !1, HY.i.BILINEAR_SAMPLINGMODE);
          YY._blockEntityCollection = IY;
          const OY = YY.ky().getLoadedTexturesCache(),
            gY = OY.indexOf(RY.getInternalTexture()); - 1 !== gY && OY.splice(gY, 1), RY.isRGBD = !0, RY.wrapU = HY.i.CLAMP_ADDRESSMODE, RY.wrapV = HY.i.CLAMP_ADDRESSMODE, YY[DY] = RY, YY.useDelayedTextureLoading = AY, zY.d.ExpandRGBDTexture(RY);
          const aY = YY.ky().onContextRestoredObservable.add((() => {
            RY.isRGBD = !0;
            const rY = YY.onBeforeRenderObservable.add((() => {
              RY.isReady() && (YY.onBeforeRenderObservable.remove(rY), zY.d.ExpandRGBDTexture(RY))
            }))
          }));
          YY.wT.add((() => {
            YY.ky().onContextRestoredObservable.remove(aY)
          }))
        }
        return YY[DY]
      },
      fY = YY => CY(YY, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      jY = YY => CY(YY, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      hY = YY => CY(YY, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var dY = DY(39217),
      JY = DY(36524),
      MY = DY(39270),
      wY = DY(39408),
      bY = DY(39479);
    class XY extends wY.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let qY = (() => {
      var YY, rY, DY, FY, AY, IY, RY, OY, gY, aY;
      let vY, uY, sY, iY, yY, QY, oY, WY, EY, mY = bY.c,
        VY = [],
        SY = [],
        lY = [],
        TY = [],
        eY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [];
      return YY = class extends mY {
        get useEnergyConservation() {
          return (0, NY.d)(this, rY, "f")
        }
        set useEnergyConservation(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, NY.d)(this, DY, "f")
        }
        set useSmithVisibilityHeightCorrelated(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get useSphericalHarmonics() {
          return (0, NY.d)(this, FY, "f")
        }
        set useSphericalHarmonics(YY) {
          (0, NY.g)(this, FY, YY, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, NY.d)(this, AY, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(YY) {
          (0, NY.g)(this, AY, YY, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, NY.d)(this, IY, "f")
        }
        set mixIblRadianceWithIrradiance(YY) {
          (0, NY.g)(this, IY, YY, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, NY.d)(this, RY, "f")
        }
        set useLegacySpecularEnergyConservation(YY) {
          (0, NY.g)(this, RY, YY, "f")
        }
        get baseDiffuseModel() {
          return (0, NY.d)(this, OY, "f")
        }
        set baseDiffuseModel(YY) {
          (0, NY.g)(this, OY, YY, "f")
        }
        get dielectricSpecularModel() {
          return (0, NY.d)(this, gY, "f")
        }
        set dielectricSpecularModel(YY) {
          (0, NY.g)(this, gY, YY, "f")
        }
        get conductorSpecularModel() {
          return (0, NY.d)(this, aY, "f")
        }
        set conductorSpecularModel(YY) {
          (0, NY.g)(this, aY, YY, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vY) {
          let uY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vY, "PBRBRDF", 90, new XY, uY), this._useEnergyConservation = YY.DEFAULT_USE_ENERGY_CONSERVATION, rY.set(this, (0, NY.j)(this, VY, YY.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, NY.j)(this, SY), YY.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), DY.set(this, (0, NY.j)(this, lY, YY.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, NY.j)(this, TY), YY.DEFAULT_USE_SPHERICAL_HARMONICS), FY.set(this, (0, NY.j)(this, eY, YY.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, NY.j)(this, cY), YY.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), AY.set(this, (0, NY.j)(this, KY, YY.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, NY.j)(this, HY), YY.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), IY.set(this, (0, NY.j)(this, zY, YY.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, NY.j)(this, ZY), YY.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), RY.set(this, (0, NY.j)(this, CY, YY.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, NY.j)(this, fY), YY.DEFAULT_DIFFUSE_MODEL), OY.set(this, (0, NY.j)(this, jY, YY.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, NY.j)(this, hY), YY.DEFAULT_DIELECTRIC_SPECULAR_MODEL), gY.set(this, (0, NY.j)(this, dY, YY.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, NY.j)(this, JY), YY.DEFAULT_CONDUCTOR_SPECULAR_MODEL), aY.set(this, (0, NY.j)(this, MY, YY.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, NY.j)(this, wY), this._internalMarkAllSubMeshesAsMiscDirty = vY._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(YY) {
          YY.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, YY.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, YY.SPHERICAL_HARMONICS = this._useSphericalHarmonics, YY.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, YY.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, YY.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, YY.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, YY.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, YY.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, AY = new WeakMap, IY = new WeakMap, RY = new WeakMap, OY = new WeakMap, gY = new WeakMap, aY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(mY[Symbol.metadata] ?? null) : void 0;
        vY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], uY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], sY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], iY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], yY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], QY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], oY = [(0, BY.M)("baseDiffuseModel"), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], WY = [(0, BY.M)("dielectricSpecularModel"), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], EY = [(0, BY.M)("conductorSpecularModel"), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], (0, NY.i)(YY, null, vY, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: YY => "useEnergyConservation" in YY,
            get: YY => YY.useEnergyConservation,
            set: (YY, rY) => {
              YY.useEnergyConservation = rY
            }
          },
          metadata: rY
        }, VY, SY), (0, NY.i)(YY, null, uY, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: YY => "useSmithVisibilityHeightCorrelated" in YY,
            get: YY => YY.useSmithVisibilityHeightCorrelated,
            set: (YY, rY) => {
              YY.useSmithVisibilityHeightCorrelated = rY
            }
          },
          metadata: rY
        }, lY, TY), (0, NY.i)(YY, null, sY, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: YY => "useSphericalHarmonics" in YY,
            get: YY => YY.useSphericalHarmonics,
            set: (YY, rY) => {
              YY.useSphericalHarmonics = rY
            }
          },
          metadata: rY
        }, eY, cY), (0, NY.i)(YY, null, iY, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: YY => "useSpecularGlossinessInputEnergyConservation" in YY,
            get: YY => YY.useSpecularGlossinessInputEnergyConservation,
            set: (YY, rY) => {
              YY.useSpecularGlossinessInputEnergyConservation = rY
            }
          },
          metadata: rY
        }, KY, HY), (0, NY.i)(YY, null, yY, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: YY => "mixIblRadianceWithIrradiance" in YY,
            get: YY => YY.mixIblRadianceWithIrradiance,
            set: (YY, rY) => {
              YY.mixIblRadianceWithIrradiance = rY
            }
          },
          metadata: rY
        }, zY, ZY), (0, NY.i)(YY, null, QY, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: YY => "useLegacySpecularEnergyConservation" in YY,
            get: YY => YY.useLegacySpecularEnergyConservation,
            set: (YY, rY) => {
              YY.useLegacySpecularEnergyConservation = rY
            }
          },
          metadata: rY
        }, CY, fY), (0, NY.i)(YY, null, oY, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: YY => "baseDiffuseModel" in YY,
            get: YY => YY.baseDiffuseModel,
            set: (YY, rY) => {
              YY.baseDiffuseModel = rY
            }
          },
          metadata: rY
        }, jY, hY), (0, NY.i)(YY, null, WY, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: YY => "dielectricSpecularModel" in YY,
            get: YY => YY.dielectricSpecularModel,
            set: (YY, rY) => {
              YY.dielectricSpecularModel = rY
            }
          },
          metadata: rY
        }, dY, JY), (0, NY.i)(YY, null, EY, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: YY => "conductorSpecularModel" in YY,
            get: YY => YY.conductorSpecularModel,
            set: (YY, rY) => {
              YY.conductorSpecularModel = rY
            }
          },
          metadata: rY
        }, MY, wY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY.DEFAULT_USE_ENERGY_CONSERVATION = !0, YY.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, YY.DEFAULT_USE_SPHERICAL_HARMONICS = !0, YY.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, YY.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, YY.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, YY.DEFAULT_DIFFUSE_MODEL = 0, YY.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, YY.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, YY
    })();
    var pY = DY(39399),
      kY = DY(36588),
      GY = DY(39403),
      xY = DY(39234),
      nY = DY(39465),
      PY = DY(39456),
      UY = DY(39472),
      LY = DY(39444);
    class tY extends wY.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Yr = (() => {
      var YY, rY, DY, FY, AY, IY, RY, OY, gY, aY;
      let vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY = bY.c,
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [],
        XY = [],
        qY = [],
        pY = [],
        GY = [],
        xY = [],
        nY = [],
        UY = [],
        Yr = [],
        rr = [],
        Dr = [],
        Fr = [],
        Ar = [],
        Ir = [],
        Rr = [],
        Or = [];
      return YY = class extends eY {
        get isEnabled() {
          return (0, NY.d)(this, rY, "f")
        }
        set isEnabled(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        get indexOfRefraction() {
          return (0, NY.d)(this, DY, "f")
        }
        set indexOfRefraction(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get texture() {
          return (0, NY.d)(this, FY, "f")
        }
        set texture(YY) {
          (0, NY.g)(this, FY, YY, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, NY.d)(this, AY, "f")
        }
        set useRoughnessFromMainTexture(YY) {
          (0, NY.g)(this, AY, YY, "f")
        }
        get textureRoughness() {
          return (0, NY.d)(this, IY, "f")
        }
        set textureRoughness(YY) {
          (0, NY.g)(this, IY, YY, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, NY.d)(this, RY, "f")
        }
        set remapF0OnInterfaceChange(YY) {
          (0, NY.g)(this, RY, YY, "f")
        }
        get bumpTexture() {
          return (0, NY.d)(this, OY, "f")
        }
        set bumpTexture(YY) {
          (0, NY.g)(this, OY, YY, "f")
        }
        get isTintEnabled() {
          return (0, NY.d)(this, gY, "f")
        }
        set isTintEnabled(YY) {
          (0, NY.g)(this, gY, YY, "f")
        }
        get tintTexture() {
          return (0, NY.d)(this, aY, "f")
        }
        set tintTexture(YY) {
          (0, NY.g)(this, aY, YY, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vY) {
          let uY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vY, "PBRClearCoat", 100, new tY, uY), this._isEnabled = !1, rY.set(this, (0, NY.j)(this, cY, !1)), this.intensity = ((0, NY.j)(this, KY), (0, NY.j)(this, HY, 1)), this.roughness = ((0, NY.j)(this, zY), (0, NY.j)(this, ZY, 0)), this._indexOfRefraction = ((0, NY.j)(this, CY), YY._DefaultIndexOfRefraction), DY.set(this, (0, NY.j)(this, fY, YY._DefaultIndexOfRefraction)), this._texture = ((0, NY.j)(this, jY), null), FY.set(this, (0, NY.j)(this, hY, null)), this._useRoughnessFromMainTexture = ((0, NY.j)(this, dY), !0), AY.set(this, (0, NY.j)(this, JY, !0)), this._textureRoughness = ((0, NY.j)(this, MY), null), IY.set(this, (0, NY.j)(this, wY, null)), this._remapF0OnInterfaceChange = ((0, NY.j)(this, XY), !0), RY.set(this, (0, NY.j)(this, qY, !0)), this._bumpTexture = ((0, NY.j)(this, pY), null), OY.set(this, (0, NY.j)(this, GY, null)), this._isTintEnabled = ((0, NY.j)(this, xY), !1), gY.set(this, (0, NY.j)(this, nY, !1)), this.tintColor = ((0, NY.j)(this, UY), (0, NY.j)(this, Yr, kY.c.White())), this.tintColorAtDistance = ((0, NY.j)(this, rr), (0, NY.j)(this, Dr, 1)), this.tintThickness = ((0, NY.j)(this, Fr), (0, NY.j)(this, Ar, 1)), this._tintTexture = ((0, NY.j)(this, Ir), null), aY.set(this, (0, NY.j)(this, Rr, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NY.j)(this, Or), this._internalMarkAllSubMeshesAsTexturesDirty = vY._dirtyCallbacks[1]
        }
        isReadyForSubMesh(YY, rY, DY) {
          if (!this._isEnabled) return !0;
          const FY = this._material._disableBumpMap;
          if (YY._areTexturesDirty && rY.texturesEnabled) {
            if (this._texture && PY.c.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && PY.c.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (DY.getCaps().standardDerivatives && this._bumpTexture && PY.c.ClearCoatBumpTextureEnabled && !FY && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && PY.c.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(rY, DY) {
          this._isEnabled ? (rY.CLEARCOAT = !0, rY.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, rY.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, rY._areTexturesDirty && DY.texturesEnabled && (this._texture && PY.c.ClearCoatTextureEnabled ? (0, LY.eb)(this._texture, rY, "CLEARCOAT_TEXTURE") : rY.CLEARCOAT_TEXTURE = !1, this._textureRoughness && PY.c.ClearCoatTextureEnabled ? (0, LY.eb)(this._textureRoughness, rY, "CLEARCOAT_TEXTURE_ROUGHNESS") : rY.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && PY.c.ClearCoatBumpTextureEnabled ? (0, LY.eb)(this._bumpTexture, rY, "CLEARCOAT_BUMP") : rY.CLEARCOAT_BUMP = !1, rY.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === YY._DefaultIndexOfRefraction, this._isTintEnabled ? (rY.CLEARCOAT_TINT = !0, this._tintTexture && PY.c.ClearCoatTintTextureEnabled ? ((0, LY.eb)(this._tintTexture, rY, "CLEARCOAT_TINT_TEXTURE"), rY.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : rY.CLEARCOAT_TINT_TEXTURE = !1) : (rY.CLEARCOAT_TINT = !1, rY.CLEARCOAT_TINT_TEXTURE = !1))) : (rY.CLEARCOAT = !1, rY.CLEARCOAT_TEXTURE = !1, rY.CLEARCOAT_TEXTURE_ROUGHNESS = !1, rY.CLEARCOAT_BUMP = !1, rY.CLEARCOAT_TINT = !1, rY.CLEARCOAT_TINT_TEXTURE = !1, rY.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, rY.CLEARCOAT_DEFAULTIOR = !1, rY.CLEARCOAT_TEXTUREDIRECTUV = 0, rY.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, rY.CLEARCOAT_BUMPDIRECTUV = 0, rY.CLEARCOAT_REMAP_F0 = !1, rY.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, rY.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(YY, rY, DY, FY) {
          if (!this._isEnabled) return;
          const AY = FY.materialDefines,
            IY = this._material.isFrozen,
            RY = this._material._disableBumpMap,
            OY = this._material._invertNormalMapX,
            gY = this._material._invertNormalMapY;
          if (!YY.useUbo || !IY || !YY.isSync) {
            (this._texture || this._textureRoughness) && PY.c.ClearCoatTextureEnabled && (YY.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, LY.y)(this._texture, YY, "clearCoat"), this._textureRoughness && !AY.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, LY.y)(this._textureRoughness, YY, "clearCoatRoughness")), this._bumpTexture && DY.getCaps().standardDerivatives && PY.c.ClearCoatTextureEnabled && !RY && (YY.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, LY.y)(this._bumpTexture, YY, "clearCoatBump"), rY._mirroredCameraPosition ? YY.updateFloat2("vClearCoatTangentSpaceParams", OY ? 1 : -1, gY ? 1 : -1) : YY.updateFloat2("vClearCoatTangentSpaceParams", OY ? -1 : 1, gY ? -1 : 1)), this._tintTexture && PY.c.ClearCoatTintTextureEnabled && (YY.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, LY.y)(this._tintTexture, YY, "clearCoatTint")), YY.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const FY = 1 - this._indexOfRefraction,
              IY = 1 + this._indexOfRefraction,
              aY = Math.pow(-FY / IY, 2),
              vY = 1 / this._indexOfRefraction;
            YY.updateFloat4("vClearCoatRefractionParams", aY, vY, FY, IY), this._isTintEnabled && (YY.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), YY.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          rY.texturesEnabled && (this._texture && PY.c.ClearCoatTextureEnabled && YY.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !AY.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && PY.c.ClearCoatTextureEnabled && YY.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && DY.getCaps().standardDerivatives && PY.c.ClearCoatBumpTextureEnabled && !RY && YY.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && PY.c.ClearCoatTintTextureEnabled && YY.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(YY) {
          return this._texture === YY || (this._textureRoughness === YY || (this._bumpTexture === YY || this._tintTexture === YY))
        }
        getActiveTextures(YY) {
          this._texture && YY.push(this._texture), this._textureRoughness && YY.push(this._textureRoughness), this._bumpTexture && YY.push(this._bumpTexture), this._tintTexture && YY.push(this._tintTexture)
        }
        getAnimatables(YY) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && YY.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && YY.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && YY.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && YY.push(this._tintTexture)
        }
        dispose(YY) {
          YY && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(YY, rY, DY) {
          return YY.CLEARCOAT_BUMP && rY.addFallback(DY++, "CLEARCOAT_BUMP"), YY.CLEARCOAT_TINT && rY.addFallback(DY++, "CLEARCOAT_TINT"), YY.CLEARCOAT && rY.addFallback(DY++, "CLEARCOAT"), DY
        }
        getSamplers(YY) {
          YY.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, AY = new WeakMap, IY = new WeakMap, RY = new WeakMap, OY = new WeakMap, gY = new WeakMap, aY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(eY[Symbol.metadata] ?? null) : void 0;
        vY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], uY = [(0, BY.M)()], sY = [(0, BY.M)()], iY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], yY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], QY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], oY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], WY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], EY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], mY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], VY = [(0, BY.o)()], SY = [(0, BY.M)()], lY = [(0, BY.M)()], TY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], (0, NY.i)(YY, null, vY, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isEnabled" in YY,
            get: YY => YY.isEnabled,
            set: (YY, rY) => {
              YY.isEnabled = rY
            }
          },
          metadata: rY
        }, cY, KY), (0, NY.i)(YY, null, iY, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: YY => "indexOfRefraction" in YY,
            get: YY => YY.indexOfRefraction,
            set: (YY, rY) => {
              YY.indexOfRefraction = rY
            }
          },
          metadata: rY
        }, fY, jY), (0, NY.i)(YY, null, yY, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: YY => "texture" in YY,
            get: YY => YY.texture,
            set: (YY, rY) => {
              YY.texture = rY
            }
          },
          metadata: rY
        }, hY, dY), (0, NY.i)(YY, null, QY, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "useRoughnessFromMainTexture" in YY,
            get: YY => YY.useRoughnessFromMainTexture,
            set: (YY, rY) => {
              YY.useRoughnessFromMainTexture = rY
            }
          },
          metadata: rY
        }, JY, MY), (0, NY.i)(YY, null, oY, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: YY => "textureRoughness" in YY,
            get: YY => YY.textureRoughness,
            set: (YY, rY) => {
              YY.textureRoughness = rY
            }
          },
          metadata: rY
        }, wY, XY), (0, NY.i)(YY, null, WY, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: YY => "remapF0OnInterfaceChange" in YY,
            get: YY => YY.remapF0OnInterfaceChange,
            set: (YY, rY) => {
              YY.remapF0OnInterfaceChange = rY
            }
          },
          metadata: rY
        }, qY, pY), (0, NY.i)(YY, null, EY, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "bumpTexture" in YY,
            get: YY => YY.bumpTexture,
            set: (YY, rY) => {
              YY.bumpTexture = rY
            }
          },
          metadata: rY
        }, GY, xY), (0, NY.i)(YY, null, mY, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isTintEnabled" in YY,
            get: YY => YY.isTintEnabled,
            set: (YY, rY) => {
              YY.isTintEnabled = rY
            }
          },
          metadata: rY
        }, nY, UY), (0, NY.i)(YY, null, TY, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "tintTexture" in YY,
            get: YY => YY.tintTexture,
            set: (YY, rY) => {
              YY.tintTexture = rY
            }
          },
          metadata: rY
        }, Rr, Or), (0, NY.i)(null, null, uY, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "intensity" in YY,
            get: YY => YY.intensity,
            set: (YY, rY) => {
              YY.intensity = rY
            }
          },
          metadata: rY
        }, HY, zY), (0, NY.i)(null, null, sY, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: YY => "roughness" in YY,
            get: YY => YY.roughness,
            set: (YY, rY) => {
              YY.roughness = rY
            }
          },
          metadata: rY
        }, ZY, CY), (0, NY.i)(null, null, VY, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "tintColor" in YY,
            get: YY => YY.tintColor,
            set: (YY, rY) => {
              YY.tintColor = rY
            }
          },
          metadata: rY
        }, Yr, rr), (0, NY.i)(null, null, SY, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: YY => "tintColorAtDistance" in YY,
            get: YY => YY.tintColorAtDistance,
            set: (YY, rY) => {
              YY.tintColorAtDistance = rY
            }
          },
          metadata: rY
        }, Dr, Fr), (0, NY.i)(null, null, lY, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: YY => "tintThickness" in YY,
            get: YY => YY.tintThickness,
            set: (YY, rY) => {
              YY.tintThickness = rY
            }
          },
          metadata: rY
        }, Ar, Ir), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY._DefaultIndexOfRefraction = 1.5, YY
    })();
    class rr extends wY.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let Dr = (() => {
      var YY, rY, DY, FY;
      let AY, IY, RY, OY, gY, aY, vY, uY = bY.c,
        sY = [],
        iY = [],
        yY = [],
        QY = [],
        oY = [],
        WY = [],
        EY = [],
        mY = [],
        VY = [],
        SY = [],
        lY = [],
        TY = [],
        eY = [],
        cY = [];
      return YY = class extends uY {
        get isEnabled() {
          return (0, NY.d)(this, rY, "f")
        }
        set isEnabled(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        get texture() {
          return (0, NY.d)(this, DY, "f")
        }
        set texture(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get thicknessTexture() {
          return (0, NY.d)(this, FY, "f")
        }
        set thicknessTexture(YY) {
          (0, NY.g)(this, FY, YY, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(AY) {
          let IY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(AY, "PBRIridescence", 110, new rr, IY), this._isEnabled = !1, rY.set(this, (0, NY.j)(this, sY, !1)), this.intensity = ((0, NY.j)(this, iY), (0, NY.j)(this, yY, 1)), this.minimumThickness = ((0, NY.j)(this, QY), (0, NY.j)(this, oY, YY._DefaultMinimumThickness)), this.maximumThickness = ((0, NY.j)(this, WY), (0, NY.j)(this, EY, YY._DefaultMaximumThickness)), this.indexOfRefraction = ((0, NY.j)(this, mY), (0, NY.j)(this, VY, YY._DefaultIndexOfRefraction)), this._texture = ((0, NY.j)(this, SY), null), DY.set(this, (0, NY.j)(this, lY, null)), this._thicknessTexture = ((0, NY.j)(this, TY), null), FY.set(this, (0, NY.j)(this, eY, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NY.j)(this, cY), this._internalMarkAllSubMeshesAsTexturesDirty = AY._dirtyCallbacks[1]
        }
        isReadyForSubMesh(YY, rY) {
          if (!this._isEnabled) return !0;
          if (YY._areTexturesDirty && rY.texturesEnabled) {
            if (this._texture && PY.c.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && PY.c.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(YY, rY) {
          this._isEnabled ? (YY.IRIDESCENCE = !0, YY._areTexturesDirty && rY.texturesEnabled && (this._texture && PY.c.IridescenceTextureEnabled ? (0, LY.eb)(this._texture, YY, "IRIDESCENCE_TEXTURE") : YY.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && PY.c.IridescenceTextureEnabled ? (0, LY.eb)(this._thicknessTexture, YY, "IRIDESCENCE_THICKNESS_TEXTURE") : YY.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (YY.IRIDESCENCE = !1, YY.IRIDESCENCE_TEXTURE = !1, YY.IRIDESCENCE_THICKNESS_TEXTURE = !1, YY.IRIDESCENCE_TEXTUREDIRECTUV = 0, YY.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(YY, rY) {
          if (!this._isEnabled) return;
          const DY = this._material.isFrozen;
          YY.useUbo && DY && YY.isSync || ((this._texture || this._thicknessTexture) && PY.c.IridescenceTextureEnabled && (YY.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, LY.y)(this._texture, YY, "iridescence"), this._thicknessTexture && (0, LY.y)(this._thicknessTexture, YY, "iridescenceThickness")), YY.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), rY.texturesEnabled && (this._texture && PY.c.IridescenceTextureEnabled && YY.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && PY.c.IridescenceTextureEnabled && YY.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(YY) {
          return this._texture === YY || this._thicknessTexture === YY
        }
        getActiveTextures(YY) {
          this._texture && YY.push(this._texture), this._thicknessTexture && YY.push(this._thicknessTexture)
        }
        getAnimatables(YY) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && YY.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && YY.push(this._thicknessTexture)
        }
        dispose(YY) {
          YY && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(YY, rY, DY) {
          return YY.IRIDESCENCE && rY.addFallback(DY++, "IRIDESCENCE"), DY
        }
        getSamplers(YY) {
          YY.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(uY[Symbol.metadata] ?? null) : void 0;
        AY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], IY = [(0, BY.M)()], RY = [(0, BY.M)()], OY = [(0, BY.M)()], gY = [(0, BY.M)()], aY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], vY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], (0, NY.i)(YY, null, AY, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isEnabled" in YY,
            get: YY => YY.isEnabled,
            set: (YY, rY) => {
              YY.isEnabled = rY
            }
          },
          metadata: rY
        }, sY, iY), (0, NY.i)(YY, null, aY, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: YY => "texture" in YY,
            get: YY => YY.texture,
            set: (YY, rY) => {
              YY.texture = rY
            }
          },
          metadata: rY
        }, lY, TY), (0, NY.i)(YY, null, vY, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "thicknessTexture" in YY,
            get: YY => YY.thicknessTexture,
            set: (YY, rY) => {
              YY.thicknessTexture = rY
            }
          },
          metadata: rY
        }, eY, cY), (0, NY.i)(null, null, IY, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "intensity" in YY,
            get: YY => YY.intensity,
            set: (YY, rY) => {
              YY.intensity = rY
            }
          },
          metadata: rY
        }, yY, QY), (0, NY.i)(null, null, RY, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: YY => "minimumThickness" in YY,
            get: YY => YY.minimumThickness,
            set: (YY, rY) => {
              YY.minimumThickness = rY
            }
          },
          metadata: rY
        }, oY, WY), (0, NY.i)(null, null, OY, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: YY => "maximumThickness" in YY,
            get: YY => YY.maximumThickness,
            set: (YY, rY) => {
              YY.maximumThickness = rY
            }
          },
          metadata: rY
        }, EY, mY), (0, NY.i)(null, null, gY, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: YY => "indexOfRefraction" in YY,
            get: YY => YY.indexOfRefraction,
            set: (YY, rY) => {
              YY.indexOfRefraction = rY
            }
          },
          metadata: rY
        }, VY, SY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY._DefaultMinimumThickness = 100, YY._DefaultMaximumThickness = 400, YY._DefaultIndexOfRefraction = 1.3, YY
    })();
    class Fr extends wY.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let Ar = (() => {
      var YY, rY, DY, FY;
      let AY, IY, RY, OY, gY, aY = bY.c,
        vY = [],
        uY = [],
        sY = [],
        iY = [],
        yY = [],
        QY = [],
        oY = [],
        WY = [],
        EY = [],
        mY = [];
      return YY = class extends aY {
        get isEnabled() {
          return (0, NY.d)(this, rY, "f")
        }
        set isEnabled(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        set angle(YY) {
          this.direction.x = Math.cos(YY), this.direction.y = Math.sin(YY)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, NY.d)(this, DY, "f")
        }
        set texture(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get legacy() {
          return (0, NY.d)(this, FY, "f")
        }
        set legacy(YY) {
          (0, NY.g)(this, FY, YY, "f")
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
        constructor(YY) {
          let AY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(YY, "PBRAnisotropic", 110, new Fr, AY), this._isEnabled = !1, rY.set(this, (0, NY.j)(this, vY, !1)), this.intensity = ((0, NY.j)(this, uY), (0, NY.j)(this, sY, 1)), this.direction = ((0, NY.j)(this, iY), (0, NY.j)(this, yY, new JY.q(1, 0))), this._texture = ((0, NY.j)(this, QY), null), DY.set(this, (0, NY.j)(this, oY, null)), this._legacy = ((0, NY.j)(this, WY), !1), FY.set(this, (0, NY.j)(this, EY, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NY.j)(this, mY), this._internalMarkAllSubMeshesAsTexturesDirty = YY._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = YY._dirtyCallbacks[16]
        }
        isReadyForSubMesh(YY, rY) {
          return !this._isEnabled || !(YY._areTexturesDirty && rY.texturesEnabled && this._texture && PY.c.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(YY, rY, DY) {
          this._isEnabled ? (YY.ANISOTROPIC = this._isEnabled, this._isEnabled && !DY.isVerticesDataPresent(MY.l.TangentKind) && (YY._needUVs = !0, YY.MAINUV1 = !0), YY._areTexturesDirty && rY.texturesEnabled && (this._texture && PY.c.AnisotropicTextureEnabled ? (0, LY.eb)(this._texture, YY, "ANISOTROPIC_TEXTURE") : YY.ANISOTROPIC_TEXTURE = !1), YY._areMiscDirty && (YY.ANISOTROPIC_LEGACY = this._legacy)) : (YY.ANISOTROPIC = !1, YY.ANISOTROPIC_TEXTURE = !1, YY.ANISOTROPIC_TEXTUREDIRECTUV = 0, YY.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(YY, rY) {
          if (!this._isEnabled) return;
          const DY = this._material.isFrozen;
          YY.useUbo && DY && YY.isSync || (this._texture && PY.c.AnisotropicTextureEnabled && (YY.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, LY.y)(this._texture, YY, "anisotropy")), YY.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), rY.texturesEnabled && this._texture && PY.c.AnisotropicTextureEnabled && YY.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(YY) {
          return this._texture === YY
        }
        getActiveTextures(YY) {
          this._texture && YY.push(this._texture)
        }
        getAnimatables(YY) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && YY.push(this._texture)
        }
        dispose(YY) {
          YY && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(YY, rY, DY) {
          return YY.ANISOTROPIC && rY.addFallback(DY++, "ANISOTROPIC"), DY
        }
        getSamplers(YY) {
          YY.push("anisotropySampler")
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
        parse(YY, rY, DY) {
          super.parse(YY, rY, DY), void 0 === YY.legacy && (this.legacy = !0)
        }
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(aY[Symbol.metadata] ?? null) : void 0;
        AY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], IY = [(0, BY.M)()], RY = [(0, BY.G)()], OY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], gY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], (0, NY.i)(YY, null, AY, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isEnabled" in YY,
            get: YY => YY.isEnabled,
            set: (YY, rY) => {
              YY.isEnabled = rY
            }
          },
          metadata: rY
        }, vY, uY), (0, NY.i)(YY, null, OY, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: YY => "texture" in YY,
            get: YY => YY.texture,
            set: (YY, rY) => {
              YY.texture = rY
            }
          },
          metadata: rY
        }, oY, WY), (0, NY.i)(YY, null, gY, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: YY => "legacy" in YY,
            get: YY => YY.legacy,
            set: (YY, rY) => {
              YY.legacy = rY
            }
          },
          metadata: rY
        }, EY, mY), (0, NY.i)(null, null, IY, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "intensity" in YY,
            get: YY => YY.intensity,
            set: (YY, rY) => {
              YY.intensity = rY
            }
          },
          metadata: rY
        }, sY, iY), (0, NY.i)(null, null, RY, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: YY => "direction" in YY,
            get: YY => YY.direction,
            set: (YY, rY) => {
              YY.direction = rY
            }
          },
          metadata: rY
        }, yY, QY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY
    })();
    class Ir extends wY.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Rr = (() => {
      var YY, rY, DY, FY, AY, IY, RY, OY;
      let gY, aY, vY, uY, sY, iY, yY, QY, oY, WY = bY.c,
        EY = [],
        mY = [],
        VY = [],
        SY = [],
        lY = [],
        TY = [],
        eY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [];
      return YY = class extends WY {
        get isEnabled() {
          return (0, NY.d)(this, rY, "f")
        }
        set isEnabled(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, NY.d)(this, DY, "f")
        }
        set linkSheenWithAlbedo(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get texture() {
          return (0, NY.d)(this, FY, "f")
        }
        set texture(YY) {
          (0, NY.g)(this, FY, YY, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, NY.d)(this, AY, "f")
        }
        set useRoughnessFromMainTexture(YY) {
          (0, NY.g)(this, AY, YY, "f")
        }
        get roughness() {
          return (0, NY.d)(this, IY, "f")
        }
        set roughness(YY) {
          (0, NY.g)(this, IY, YY, "f")
        }
        get textureRoughness() {
          return (0, NY.d)(this, RY, "f")
        }
        set textureRoughness(YY) {
          (0, NY.g)(this, RY, YY, "f")
        }
        get albedoScaling() {
          return (0, NY.d)(this, OY, "f")
        }
        set albedoScaling(YY) {
          (0, NY.g)(this, OY, YY, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(YY) {
          let gY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(YY, "Sheen", 120, new Ir, gY), this._isEnabled = !1, rY.set(this, (0, NY.j)(this, EY, !1)), this._linkSheenWithAlbedo = ((0, NY.j)(this, mY), !1), DY.set(this, (0, NY.j)(this, VY, !1)), this.intensity = ((0, NY.j)(this, SY), (0, NY.j)(this, lY, 1)), this.color = ((0, NY.j)(this, TY), (0, NY.j)(this, eY, kY.c.White())), this._texture = ((0, NY.j)(this, cY), null), FY.set(this, (0, NY.j)(this, KY, null)), this._useRoughnessFromMainTexture = ((0, NY.j)(this, HY), !0), AY.set(this, (0, NY.j)(this, zY, !0)), this._roughness = ((0, NY.j)(this, ZY), null), IY.set(this, (0, NY.j)(this, CY, null)), this._textureRoughness = ((0, NY.j)(this, fY), null), RY.set(this, (0, NY.j)(this, jY, null)), this._albedoScaling = ((0, NY.j)(this, hY), !1), OY.set(this, (0, NY.j)(this, dY, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, NY.j)(this, JY), this._internalMarkAllSubMeshesAsTexturesDirty = YY._dirtyCallbacks[1]
        }
        isReadyForSubMesh(YY, rY) {
          if (!this._isEnabled) return !0;
          if (YY._areTexturesDirty && rY.texturesEnabled) {
            if (this._texture && PY.c.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && PY.c.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(YY, rY) {
          this._isEnabled ? (YY.SHEEN = !0, YY.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, YY.SHEEN_ROUGHNESS = null !== this._roughness, YY.SHEEN_ALBEDOSCALING = this._albedoScaling, YY.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, YY._areTexturesDirty && rY.texturesEnabled && (this._texture && PY.c.SheenTextureEnabled ? ((0, LY.eb)(this._texture, YY, "SHEEN_TEXTURE"), YY.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : YY.SHEEN_TEXTURE = !1, this._textureRoughness && PY.c.SheenTextureEnabled ? (0, LY.eb)(this._textureRoughness, YY, "SHEEN_TEXTURE_ROUGHNESS") : YY.SHEEN_TEXTURE_ROUGHNESS = !1)) : (YY.SHEEN = !1, YY.SHEEN_TEXTURE = !1, YY.SHEEN_TEXTURE_ROUGHNESS = !1, YY.SHEEN_LINKWITHALBEDO = !1, YY.SHEEN_ROUGHNESS = !1, YY.SHEEN_ALBEDOSCALING = !1, YY.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, YY.SHEEN_GAMMATEXTURE = !1, YY.SHEEN_TEXTUREDIRECTUV = 0, YY.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(YY, rY, DY, FY) {
          if (!this._isEnabled) return;
          const AY = FY.materialDefines,
            IY = this._material.isFrozen;
          YY.useUbo && IY && YY.isSync || ((this._texture || this._textureRoughness) && PY.c.SheenTextureEnabled && (YY.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, LY.y)(this._texture, YY, "sheen"), this._textureRoughness && !AY.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, LY.y)(this._textureRoughness, YY, "sheenRoughness")), YY.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && YY.updateFloat("vSheenRoughness", this._roughness)), rY.texturesEnabled && (this._texture && PY.c.SheenTextureEnabled && YY.setTexture("sheenSampler", this._texture), this._textureRoughness && !AY.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && PY.c.SheenTextureEnabled && YY.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(YY) {
          return this._texture === YY || this._textureRoughness === YY
        }
        getActiveTextures(YY) {
          this._texture && YY.push(this._texture), this._textureRoughness && YY.push(this._textureRoughness)
        }
        getAnimatables(YY) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && YY.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && YY.push(this._textureRoughness)
        }
        dispose(YY) {
          YY && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(YY, rY, DY) {
          return YY.SHEEN && rY.addFallback(DY++, "SHEEN"), DY
        }
        getSamplers(YY) {
          YY.push("sheenSampler", "sheenRoughnessSampler")
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
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, AY = new WeakMap, IY = new WeakMap, RY = new WeakMap, OY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(WY[Symbol.metadata] ?? null) : void 0;
        gY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], aY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], vY = [(0, BY.M)()], uY = [(0, BY.o)()], sY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], iY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], yY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], QY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], oY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], (0, NY.i)(YY, null, gY, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isEnabled" in YY,
            get: YY => YY.isEnabled,
            set: (YY, rY) => {
              YY.isEnabled = rY
            }
          },
          metadata: rY
        }, EY, mY), (0, NY.i)(YY, null, aY, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: YY => "linkSheenWithAlbedo" in YY,
            get: YY => YY.linkSheenWithAlbedo,
            set: (YY, rY) => {
              YY.linkSheenWithAlbedo = rY
            }
          },
          metadata: rY
        }, VY, SY), (0, NY.i)(YY, null, sY, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: YY => "texture" in YY,
            get: YY => YY.texture,
            set: (YY, rY) => {
              YY.texture = rY
            }
          },
          metadata: rY
        }, KY, HY), (0, NY.i)(YY, null, iY, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "useRoughnessFromMainTexture" in YY,
            get: YY => YY.useRoughnessFromMainTexture,
            set: (YY, rY) => {
              YY.useRoughnessFromMainTexture = rY
            }
          },
          metadata: rY
        }, zY, ZY), (0, NY.i)(YY, null, yY, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: YY => "roughness" in YY,
            get: YY => YY.roughness,
            set: (YY, rY) => {
              YY.roughness = rY
            }
          },
          metadata: rY
        }, CY, fY), (0, NY.i)(YY, null, QY, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: YY => "textureRoughness" in YY,
            get: YY => YY.textureRoughness,
            set: (YY, rY) => {
              YY.textureRoughness = rY
            }
          },
          metadata: rY
        }, jY, hY), (0, NY.i)(YY, null, oY, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: YY => "albedoScaling" in YY,
            get: YY => YY.albedoScaling,
            set: (YY, rY) => {
              YY.albedoScaling = rY
            }
          },
          metadata: rY
        }, dY, JY), (0, NY.i)(null, null, vY, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "intensity" in YY,
            get: YY => YY.intensity,
            set: (YY, rY) => {
              YY.intensity = rY
            }
          },
          metadata: rY
        }, lY, TY), (0, NY.i)(null, null, uY, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: YY => "color" in YY,
            get: YY => YY.color,
            set: (YY, rY) => {
              YY.color = rY
            }
          },
          metadata: rY
        }, eY, cY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY
    })();
    class Or extends wY.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let gr = (() => {
      var YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY;
      let WY, EY, mY, VY, SY, lY, TY, eY, cY, KY, HY, zY, ZY, CY, fY, jY, hY, dY, MY, wY, XY, qY, pY, GY, xY, nY, UY, tY, Yr, rr, Dr = bY.c,
        Fr = [],
        Ar = [],
        Ir = [],
        Rr = [],
        gr = [],
        ar = [],
        vr = [],
        ur = [],
        sr = [],
        ir = [],
        yr = [],
        Qr = [],
        or = [],
        Wr = [],
        Er = [],
        mr = [],
        Vr = [],
        Sr = [],
        lr = [],
        Tr = [],
        er = [],
        Nr = [],
        Br = [],
        cr = [],
        Kr = [],
        Hr = [],
        zr = [],
        Zr = [],
        Cr = [],
        fr = [],
        jr = [],
        hr = [],
        dr = [],
        Jr = [],
        Mr = [],
        wr = [],
        br = [],
        Xr = [],
        qr = [],
        pr = [],
        kr = [],
        Gr = [],
        xr = [],
        nr = [],
        Pr = [],
        Ur = [],
        Lr = [],
        tr = [],
        YD = [],
        rD = [],
        DD = [],
        FD = [],
        AD = [],
        ID = [],
        RD = [],
        OD = [],
        gD = [],
        aD = [],
        vD = [],
        uD = [];
      return YY = class extends Dr {
        get isRefractionEnabled() {
          return (0, NY.d)(this, rY, "f")
        }
        set isRefractionEnabled(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        get isTranslucencyEnabled() {
          return (0, NY.d)(this, DY, "f")
        }
        set isTranslucencyEnabled(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get isDispersionEnabled() {
          return (0, NY.d)(this, FY, "f")
        }
        set isDispersionEnabled(YY) {
          (0, NY.g)(this, FY, YY, "f")
        }
        get isScatteringEnabled() {
          return (0, NY.d)(this, AY, "f")
        }
        set isScatteringEnabled(YY) {
          (0, NY.g)(this, AY, YY, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(YY) {
          this._scene.enableSubSurfaceForPrePass() && YY && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(YY))
        }
        get useAlbedoToTintRefraction() {
          return (0, NY.d)(this, IY, "f")
        }
        set useAlbedoToTintRefraction(YY) {
          (0, NY.g)(this, IY, YY, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, NY.d)(this, RY, "f")
        }
        set useAlbedoToTintTranslucency(YY) {
          (0, NY.g)(this, RY, YY, "f")
        }
        get thicknessTexture() {
          return (0, NY.d)(this, OY, "f")
        }
        set thicknessTexture(YY) {
          (0, NY.g)(this, OY, YY, "f")
        }
        get refractionTexture() {
          return (0, NY.d)(this, gY, "f")
        }
        set refractionTexture(YY) {
          (0, NY.g)(this, gY, YY, "f")
        }
        get indexOfRefraction() {
          return (0, NY.d)(this, aY, "f")
        }
        set indexOfRefraction(YY) {
          (0, NY.g)(this, aY, YY, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(YY) {
          const rY = YY >= 1 ? YY : -1;
          this._volumeIndexOfRefraction !== rY && (this._volumeIndexOfRefraction = rY, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, NY.d)(this, vY, "f")
        }
        set invertRefractionY(YY) {
          (0, NY.g)(this, vY, YY, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, NY.d)(this, uY, "f")
        }
        set linkRefractionWithTransparency(YY) {
          (0, NY.g)(this, uY, YY, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, NY.d)(this, sY, "f")
        }
        set useMaskFromThicknessTexture(YY) {
          (0, NY.g)(this, sY, YY, "f")
        }
        get refractionIntensityTexture() {
          return (0, NY.d)(this, iY, "f")
        }
        set refractionIntensityTexture(YY) {
          (0, NY.g)(this, iY, YY, "f")
        }
        get translucencyIntensityTexture() {
          return (0, NY.d)(this, yY, "f")
        }
        set translucencyIntensityTexture(YY) {
          (0, NY.g)(this, yY, YY, "f")
        }
        get translucencyColorTexture() {
          return (0, NY.d)(this, QY, "f")
        }
        set translucencyColorTexture(YY) {
          (0, NY.g)(this, QY, YY, "f")
        }
        get useGltfStyleTextures() {
          return (0, NY.d)(this, oY, "f")
        }
        set useGltfStyleTextures(YY) {
          (0, NY.g)(this, oY, YY, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(YY) {
          this.legacyTranslucency = YY
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
        constructor(WY) {
          let EY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WY, "PBRSubSurface", 130, new Or, EY), this._isRefractionEnabled = !1, rY.set(this, (0, NY.j)(this, Fr, !1)), this._isTranslucencyEnabled = ((0, NY.j)(this, Ar), !1), DY.set(this, (0, NY.j)(this, Ir, !1)), this._isDispersionEnabled = ((0, NY.j)(this, Rr), !1), FY.set(this, (0, NY.j)(this, gr, !1)), this._isScatteringEnabled = ((0, NY.j)(this, ar), !1), AY.set(this, (0, NY.j)(this, vr, !1)), this._scatteringDiffusionProfileIndex = ((0, NY.j)(this, ur), (0, NY.j)(this, sr, 0)), this.refractionIntensity = ((0, NY.j)(this, ir), (0, NY.j)(this, yr, 1)), this.translucencyIntensity = ((0, NY.j)(this, Qr), (0, NY.j)(this, or, 1)), this._useAlbedoToTintRefraction = ((0, NY.j)(this, Wr), !1), IY.set(this, (0, NY.j)(this, Er, !1)), this._useAlbedoToTintTranslucency = ((0, NY.j)(this, mr), !1), RY.set(this, (0, NY.j)(this, Vr, !1)), this._thicknessTexture = ((0, NY.j)(this, Sr), null), OY.set(this, (0, NY.j)(this, lr, null)), this._refractionTexture = ((0, NY.j)(this, Tr), null), gY.set(this, (0, NY.j)(this, er, null)), this._indexOfRefraction = ((0, NY.j)(this, Nr), 1.5), aY.set(this, (0, NY.j)(this, Br, 1.5)), this._volumeIndexOfRefraction = ((0, NY.j)(this, cr), (0, NY.j)(this, Kr, -1)), this._invertRefractionY = ((0, NY.j)(this, Hr), !1), vY.set(this, (0, NY.j)(this, zr, !1)), this._linkRefractionWithTransparency = ((0, NY.j)(this, Zr), !1), uY.set(this, (0, NY.j)(this, Cr, !1)), this.minimumThickness = ((0, NY.j)(this, fr), (0, NY.j)(this, jr, 0)), this.maximumThickness = ((0, NY.j)(this, hr), (0, NY.j)(this, dr, 1)), this.useThicknessAsDepth = ((0, NY.j)(this, Jr), (0, NY.j)(this, Mr, !1)), this.tintColor = ((0, NY.j)(this, wr), (0, NY.j)(this, br, kY.c.White())), this.tintColorAtDistance = ((0, NY.j)(this, Xr), (0, NY.j)(this, qr, 1)), this.dispersion = ((0, NY.j)(this, pr), (0, NY.j)(this, kr, 0)), this.diffusionDistance = ((0, NY.j)(this, Gr), (0, NY.j)(this, xr, kY.c.White())), this._useMaskFromThicknessTexture = ((0, NY.j)(this, nr), !1), sY.set(this, (0, NY.j)(this, Pr, !1)), this._refractionIntensityTexture = ((0, NY.j)(this, Ur), null), iY.set(this, (0, NY.j)(this, Lr, null)), this._translucencyIntensityTexture = ((0, NY.j)(this, tr), null), yY.set(this, (0, NY.j)(this, YD, null)), this.translucencyColor = ((0, NY.j)(this, rD), (0, NY.j)(this, DD, null)), this._translucencyColorTexture = ((0, NY.j)(this, FD), null), QY.set(this, (0, NY.j)(this, AD, null)), this._useGltfStyleTextures = ((0, NY.j)(this, ID), !0), oY.set(this, (0, NY.j)(this, RD, !0)), this.applyAlbedoAfterSubSurface = ((0, NY.j)(this, OD), (0, NY.j)(this, gD, YY.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, NY.j)(this, aD), (0, NY.j)(this, vD, YY.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, NY.j)(this, uD), this._scene = WY.hT(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = WY._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = WY._dirtyCallbacks[32]
        }
        isReadyForSubMesh(YY, rY) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (YY._areTexturesDirty && rY.texturesEnabled) {
            if (this._thicknessTexture && PY.c.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && PY.c.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && PY.c.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && PY.c.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const YY = this._getRefractionTexture(rY);
            if (YY && PY.c.RefractionTextureEnabled && !YY.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(YY, rY) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return YY.SUBSURFACE = !1, YY.SS_DISPERSION = !1, YY.SS_TRANSLUCENCY = !1, YY.SS_SCATTERING = !1, YY.SS_REFRACTION = !1, YY.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, YY.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, YY.SS_THICKNESSANDMASK_TEXTURE = !1, YY.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, YY.SS_HAS_THICKNESS = !1, YY.SS_REFRACTIONINTENSITY_TEXTURE = !1, YY.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, YY.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, YY.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, YY.SS_REFRACTIONMAP_3D = !1, YY.SS_REFRACTIONMAP_OPPOSITEZ = !1, YY.SS_LODINREFRACTIONALPHA = !1, YY.SS_GAMMAREFRACTION = !1, YY.SS_RGBDREFRACTION = !1, YY.SS_LINEARSPECULARREFRACTION = !1, YY.SS_LINKREFRACTIONTOTRANSPARENCY = !1, YY.SS_ALBEDOFORREFRACTIONTINT = !1, YY.SS_ALBEDOFORTRANSLUCENCYTINT = !1, YY.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, YY.SS_USE_THICKNESS_AS_DEPTH = !1, YY.SS_USE_GLTF_TEXTURES = !1, YY.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, YY.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, YY.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(YY.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (YY._areTexturesDirty) {
            if (YY.SUBSURFACE = !0, YY.SS_DISPERSION = this._isDispersionEnabled, YY.SS_TRANSLUCENCY = this._isTranslucencyEnabled, YY.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, YY.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, YY.SS_SCATTERING = this._isScatteringEnabled, YY.SS_THICKNESSANDMASK_TEXTURE = !1, YY.SS_REFRACTIONINTENSITY_TEXTURE = !1, YY.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, YY.SS_HAS_THICKNESS = !1, YY.SS_USE_GLTF_TEXTURES = !1, YY.SS_REFRACTION = !1, YY.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, YY.SS_REFRACTIONMAP_3D = !1, YY.SS_GAMMAREFRACTION = !1, YY.SS_RGBDREFRACTION = !1, YY.SS_LINEARSPECULARREFRACTION = !1, YY.SS_REFRACTIONMAP_OPPOSITEZ = !1, YY.SS_LODINREFRACTIONALPHA = !1, YY.SS_LINKREFRACTIONTOTRANSPARENCY = !1, YY.SS_ALBEDOFORREFRACTIONTINT = !1, YY.SS_ALBEDOFORTRANSLUCENCYTINT = !1, YY.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, YY.SS_USE_THICKNESS_AS_DEPTH = !1, YY.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, YY.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, YY._areTexturesDirty && rY.texturesEnabled && (this._thicknessTexture && PY.c.ThicknessTextureEnabled && (0, LY.eb)(this._thicknessTexture, YY, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && PY.c.RefractionIntensityTextureEnabled && (0, LY.eb)(this._refractionIntensityTexture, YY, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && PY.c.TranslucencyIntensityTextureEnabled && (0, LY.eb)(this._translucencyIntensityTexture, YY, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && PY.c.TranslucencyColorTextureEnabled && ((0, LY.eb)(this._translucencyColorTexture, YY, "SS_TRANSLUCENCYCOLOR_TEXTURE"), YY.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), YY.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, YY.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, YY.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, YY.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && rY.texturesEnabled) {
              const DY = this._getRefractionTexture(rY);
              DY && PY.c.RefractionTextureEnabled && (YY.SS_REFRACTION = !0, YY.SS_REFRACTIONMAP_3D = DY.isCube, YY.SS_GAMMAREFRACTION = DY.gammaSpace, YY.SS_RGBDREFRACTION = DY.isRGBD, YY.SS_LINEARSPECULARREFRACTION = DY.linearSpecularLOD, YY.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && DY.isCube ? !DY.invertZ : DY.invertZ, YY.SS_LODINREFRACTIONALPHA = DY.lodLevelInAlpha, YY.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, YY.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, YY.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = DY.isCube && DY.boundingBoxSize, YY.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (YY.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(YY, rY, DY, FY) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) YY.updateFloat2("vThicknessParam", 0, 0);
            else {
              FY.getRenderingMesh().getWorldMatrix().decompose(JY.n.xy[0]);
              const rY = Math.max(Math.abs(JY.n.xy[0].x), Math.abs(JY.n.xy[0].y), Math.abs(JY.n.xy[0].z));
              YY.updateFloat2("vThicknessParam", this.minimumThickness * rY, (this.maximumThickness - this.minimumThickness) * rY)
            }
        }
        bindForSubMesh(YY, rY, DY, FY) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const AY = FY.materialDefines,
            IY = this._material.isFrozen,
            RY = this._material.realTimeFiltering,
            OY = AY.LODBASEDMICROSFURACE,
            gY = this._getRefractionTexture(rY);
          if (!YY.useUbo || !IY || !YY.isSync) {
            if (this._thicknessTexture && PY.c.ThicknessTextureEnabled && (YY.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, LY.y)(this._thicknessTexture, YY, "thickness")), this._refractionIntensityTexture && PY.c.RefractionIntensityTextureEnabled && AY.SS_REFRACTIONINTENSITY_TEXTURE && (YY.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, LY.y)(this._refractionIntensityTexture, YY, "refractionIntensity")), this._translucencyColorTexture && PY.c.TranslucencyColorTextureEnabled && AY.SS_TRANSLUCENCYCOLOR_TEXTURE && (YY.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, LY.y)(this._translucencyColorTexture, YY, "translucencyColor")), this._translucencyIntensityTexture && PY.c.TranslucencyIntensityTextureEnabled && AY.SS_TRANSLUCENCYINTENSITY_TEXTURE && (YY.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, LY.y)(this._translucencyIntensityTexture, YY, "translucencyIntensity")), gY && PY.c.RefractionTextureEnabled) {
              YY.m_("refractionMatrix", gY.getRefractionTextureMatrix());
              let rY = 1;
              gY.isCube || gY.depth && (rY = gY.depth);
              const DY = gY.getSize().width,
                FY = this.volumeIndexOfRefraction;
              if (YY.updateFloat4("vRefractionInfos", gY.level, 1 / FY, rY, this._invertRefractionY ? -1 : 1), YY.updateFloat4("vRefractionMicrosurfaceInfos", DY, gY.lodGenerationScale, gY.lodGenerationOffset, 1 / this.indexOfRefraction), RY && YY.updateFloat2("vRefractionFilteringInfo", DY, Math.log2(DY)), gY.boundingBoxSize) {
                const rY = gY;
                YY.updateVector3("vRefractionPosition", rY.boundingBoxPosition), YY.updateVector3("vRefractionSize", rY.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && YY.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), YY.updateColor3("vDiffusionDistance", this.diffusionDistance), YY.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), YY.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), YY.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), YY.updateFloat("dispersion", this.dispersion)
          }
          rY.texturesEnabled && (this._thicknessTexture && PY.c.ThicknessTextureEnabled && YY.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && PY.c.RefractionIntensityTextureEnabled && AY.SS_REFRACTIONINTENSITY_TEXTURE && YY.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && PY.c.TranslucencyIntensityTextureEnabled && AY.SS_TRANSLUCENCYINTENSITY_TEXTURE && YY.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && PY.c.TranslucencyColorTextureEnabled && AY.SS_TRANSLUCENCYCOLOR_TEXTURE && YY.setTexture("translucencyColorSampler", this._translucencyColorTexture), gY && PY.c.RefractionTextureEnabled && (OY ? YY.setTexture("refractionSampler", gY) : (YY.setTexture("refractionSampler", gY._lodTextureMid || gY), YY.setTexture("refractionSamplerLow", gY._lodTextureLow || gY), YY.setTexture("refractionSamplerHigh", gY._lodTextureHigh || gY))))
        }
        _getRefractionTexture(YY) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? YY.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(YY) {
          PY.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && YY.push(this._refractionTexture)
        }
        hasTexture(YY) {
          return this._thicknessTexture === YY || (this._refractionTexture === YY || (this._refractionIntensityTexture === YY || (this._translucencyIntensityTexture === YY || this._translucencyColorTexture === YY)))
        }
        hasRenderTargetTextures() {
          return !!(PY.c.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(YY) {
          this._thicknessTexture && YY.push(this._thicknessTexture), this._refractionTexture && YY.push(this._refractionTexture), this._refractionIntensityTexture && YY.push(this._refractionIntensityTexture), this._translucencyColorTexture && YY.push(this._translucencyColorTexture), this._translucencyIntensityTexture && YY.push(this._translucencyIntensityTexture)
        }
        getAnimatables(YY) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && YY.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && YY.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && YY.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && YY.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && YY.push(this._translucencyIntensityTexture)
        }
        dispose(YY) {
          YY && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(YY, rY, DY) {
          return YY.SS_SCATTERING && rY.addFallback(DY++, "SS_SCATTERING"), YY.SS_TRANSLUCENCY && rY.addFallback(DY++, "SS_TRANSLUCENCY"), DY
        }
        getSamplers(YY) {
          YY.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, AY = new WeakMap, IY = new WeakMap, RY = new WeakMap, OY = new WeakMap, gY = new WeakMap, aY = new WeakMap, vY = new WeakMap, uY = new WeakMap, sY = new WeakMap, iY = new WeakMap, yY = new WeakMap, QY = new WeakMap, oY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dr[Symbol.metadata] ?? null) : void 0;
        WY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], EY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], mY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], VY = [(0, BY.M)(), (0, BY.f)("_markScenePrePassDirty")], SY = [(0, BY.M)()], lY = [(0, BY.M)()], TY = [(0, BY.M)()], eY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], cY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], KY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], HY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], zY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], ZY = [(0, BY.M)()], CY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], fY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], jY = [(0, BY.M)()], hY = [(0, BY.M)()], dY = [(0, BY.M)()], MY = [(0, BY.o)()], wY = [(0, BY.M)()], XY = [(0, BY.M)()], qY = [(0, BY.o)()], pY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], GY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], xY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], nY = [(0, BY.o)()], UY = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], tY = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Yr = [(0, BY.M)()], rr = [(0, BY.M)()], (0, NY.i)(YY, null, WY, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isRefractionEnabled" in YY,
            get: YY => YY.isRefractionEnabled,
            set: (YY, rY) => {
              YY.isRefractionEnabled = rY
            }
          },
          metadata: rY
        }, Fr, Ar), (0, NY.i)(YY, null, EY, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isTranslucencyEnabled" in YY,
            get: YY => YY.isTranslucencyEnabled,
            set: (YY, rY) => {
              YY.isTranslucencyEnabled = rY
            }
          },
          metadata: rY
        }, Ir, Rr), (0, NY.i)(YY, null, mY, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isDispersionEnabled" in YY,
            get: YY => YY.isDispersionEnabled,
            set: (YY, rY) => {
              YY.isDispersionEnabled = rY
            }
          },
          metadata: rY
        }, gr, ar), (0, NY.i)(YY, null, VY, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isScatteringEnabled" in YY,
            get: YY => YY.isScatteringEnabled,
            set: (YY, rY) => {
              YY.isScatteringEnabled = rY
            }
          },
          metadata: rY
        }, vr, ur), (0, NY.i)(YY, null, eY, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAlbedoToTintRefraction" in YY,
            get: YY => YY.useAlbedoToTintRefraction,
            set: (YY, rY) => {
              YY.useAlbedoToTintRefraction = rY
            }
          },
          metadata: rY
        }, Er, mr), (0, NY.i)(YY, null, cY, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAlbedoToTintTranslucency" in YY,
            get: YY => YY.useAlbedoToTintTranslucency,
            set: (YY, rY) => {
              YY.useAlbedoToTintTranslucency = rY
            }
          },
          metadata: rY
        }, Vr, Sr), (0, NY.i)(YY, null, KY, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "thicknessTexture" in YY,
            get: YY => YY.thicknessTexture,
            set: (YY, rY) => {
              YY.thicknessTexture = rY
            }
          },
          metadata: rY
        }, lr, Tr), (0, NY.i)(YY, null, HY, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "refractionTexture" in YY,
            get: YY => YY.refractionTexture,
            set: (YY, rY) => {
              YY.refractionTexture = rY
            }
          },
          metadata: rY
        }, er, Nr), (0, NY.i)(YY, null, zY, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: YY => "indexOfRefraction" in YY,
            get: YY => YY.indexOfRefraction,
            set: (YY, rY) => {
              YY.indexOfRefraction = rY
            }
          },
          metadata: rY
        }, Br, cr), (0, NY.i)(YY, null, CY, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: YY => "invertRefractionY" in YY,
            get: YY => YY.invertRefractionY,
            set: (YY, rY) => {
              YY.invertRefractionY = rY
            }
          },
          metadata: rY
        }, zr, Zr), (0, NY.i)(YY, null, fY, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: YY => "linkRefractionWithTransparency" in YY,
            get: YY => YY.linkRefractionWithTransparency,
            set: (YY, rY) => {
              YY.linkRefractionWithTransparency = rY
            }
          },
          metadata: rY
        }, Cr, fr), (0, NY.i)(YY, null, pY, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "useMaskFromThicknessTexture" in YY,
            get: YY => YY.useMaskFromThicknessTexture,
            set: (YY, rY) => {
              YY.useMaskFromThicknessTexture = rY
            }
          },
          metadata: rY
        }, Pr, Ur), (0, NY.i)(YY, null, GY, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "refractionIntensityTexture" in YY,
            get: YY => YY.refractionIntensityTexture,
            set: (YY, rY) => {
              YY.refractionIntensityTexture = rY
            }
          },
          metadata: rY
        }, Lr, tr), (0, NY.i)(YY, null, xY, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "translucencyIntensityTexture" in YY,
            get: YY => YY.translucencyIntensityTexture,
            set: (YY, rY) => {
              YY.translucencyIntensityTexture = rY
            }
          },
          metadata: rY
        }, YD, rD), (0, NY.i)(YY, null, UY, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "translucencyColorTexture" in YY,
            get: YY => YY.translucencyColorTexture,
            set: (YY, rY) => {
              YY.translucencyColorTexture = rY
            }
          },
          metadata: rY
        }, AD, ID), (0, NY.i)(YY, null, tY, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: YY => "useGltfStyleTextures" in YY,
            get: YY => YY.useGltfStyleTextures,
            set: (YY, rY) => {
              YY.useGltfStyleTextures = rY
            }
          },
          metadata: rY
        }, RD, OD), (0, NY.i)(null, null, SY, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: YY => "_scatteringDiffusionProfileIndex" in YY,
            get: YY => YY._scatteringDiffusionProfileIndex,
            set: (YY, rY) => {
              YY._scatteringDiffusionProfileIndex = rY
            }
          },
          metadata: rY
        }, sr, ir), (0, NY.i)(null, null, lY, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "refractionIntensity" in YY,
            get: YY => YY.refractionIntensity,
            set: (YY, rY) => {
              YY.refractionIntensity = rY
            }
          },
          metadata: rY
        }, yr, Qr), (0, NY.i)(null, null, TY, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "translucencyIntensity" in YY,
            get: YY => YY.translucencyIntensity,
            set: (YY, rY) => {
              YY.translucencyIntensity = rY
            }
          },
          metadata: rY
        }, or, Wr), (0, NY.i)(null, null, ZY, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: YY => "_volumeIndexOfRefraction" in YY,
            get: YY => YY._volumeIndexOfRefraction,
            set: (YY, rY) => {
              YY._volumeIndexOfRefraction = rY
            }
          },
          metadata: rY
        }, Kr, Hr), (0, NY.i)(null, null, jY, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: YY => "minimumThickness" in YY,
            get: YY => YY.minimumThickness,
            set: (YY, rY) => {
              YY.minimumThickness = rY
            }
          },
          metadata: rY
        }, jr, hr), (0, NY.i)(null, null, hY, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: YY => "maximumThickness" in YY,
            get: YY => YY.maximumThickness,
            set: (YY, rY) => {
              YY.maximumThickness = rY
            }
          },
          metadata: rY
        }, dr, Jr), (0, NY.i)(null, null, dY, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: YY => "useThicknessAsDepth" in YY,
            get: YY => YY.useThicknessAsDepth,
            set: (YY, rY) => {
              YY.useThicknessAsDepth = rY
            }
          },
          metadata: rY
        }, Mr, wr), (0, NY.i)(null, null, MY, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "tintColor" in YY,
            get: YY => YY.tintColor,
            set: (YY, rY) => {
              YY.tintColor = rY
            }
          },
          metadata: rY
        }, br, Xr), (0, NY.i)(null, null, wY, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: YY => "tintColorAtDistance" in YY,
            get: YY => YY.tintColorAtDistance,
            set: (YY, rY) => {
              YY.tintColorAtDistance = rY
            }
          },
          metadata: rY
        }, qr, pr), (0, NY.i)(null, null, XY, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: YY => "dispersion" in YY,
            get: YY => YY.dispersion,
            set: (YY, rY) => {
              YY.dispersion = rY
            }
          },
          metadata: rY
        }, kr, Gr), (0, NY.i)(null, null, qY, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: YY => "diffusionDistance" in YY,
            get: YY => YY.diffusionDistance,
            set: (YY, rY) => {
              YY.diffusionDistance = rY
            }
          },
          metadata: rY
        }, xr, nr), (0, NY.i)(null, null, nY, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "translucencyColor" in YY,
            get: YY => YY.translucencyColor,
            set: (YY, rY) => {
              YY.translucencyColor = rY
            }
          },
          metadata: rY
        }, DD, FD), (0, NY.i)(null, null, Yr, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: YY => "applyAlbedoAfterSubSurface" in YY,
            get: YY => YY.applyAlbedoAfterSubSurface,
            set: (YY, rY) => {
              YY.applyAlbedoAfterSubSurface = rY
            }
          },
          metadata: rY
        }, gD, aD), (0, NY.i)(null, null, rr, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: YY => "legacyTranslucency" in YY,
            get: YY => YY.legacyTranslucency,
            set: (YY, rY) => {
              YY.legacyTranslucency = rY
            }
          },
          metadata: rY
        }, vD, uD), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, YY.DEFAULT_LEGACY_TRANSLUCENCY = !1, YY
    })();
    var ar = DY(39475),
      vr = DY(39448),
      ur = DY(39486),
      sr = DY(39491),
      ir = DY(39499),
      yr = DY(39501),
      Qr = DY(39504),
      or = DY(39507),
      Wr = DY(39029);
    const Er = {
      effect: null,
      subMesh: null
    };
    class mr extends((0, Qr.c)((0, yr.e)(wY.e))) {}
    class Vr extends((0, GY.h)(mr)) {
      constructor(YY) {
        super(YY), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class Sr extends((0, or.d)(nY.e)) {}
    let lr = (() => {
      var YY, rY;
      let FY, AY = Sr,
        RY = [],
        OY = [];
      return YY = class extends AY {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(YY) {
          this._realTimeFiltering = YY, this.nYY(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(YY) {
          this._realTimeFilteringQuality = YY, this.nYY(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, NY.d)(this, rY, "f")
        }
        set debugMode(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        constructor(DY, FY) {
          super(DY, FY, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || YY.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new JY.v(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = YY.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = kY.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new kY.c(0, 0, 0), this._albedoColor = new kY.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new kY.c(1, 1, 1), this._reflectionColor = new kY.c(1, 1, 1), this._emissiveColor = new kY.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = YY.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new KY.f(16), this._globalAmbientColor = new kY.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, rY.set(this, (0, NY.j)(this, RY, 0)), this.debugLimit = ((0, NY.j)(this, OY), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new qY(this), this.clearCoat = new Yr(this), this.iridescence = new Dr(this), this.anisotropy = new Ar(this), this.sheen = new Rr(this), this.subSurface = new gr(this), this.detailMap = new ar.d(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), PY.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = fY(this.hT()), this.prePassConfiguration = new pY.d
        }
        get hasRenderTargetTextures() {
          return !!(PY.c.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === YY.PBRMATERIAL_OPAQUE || this._transparencyMode === YY.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === YY.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== YY.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(YY, rY, DY) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const FY = rY._drawWrapper;
          if (FY.effect && this.isFrozen && FY._wasPreviouslyReady && FY._wasPreviouslyUsingInstances === DY) return !0;
          rY.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), rY.materialDefines = new Vr(this._eventInfo.defineNames));
          const AY = rY.materialDefines;
          if (this._isReadyForSubMesh(rY)) return !0;
          const IY = this.hT(),
            RY = IY.ky();
          if (AY._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, IY.texturesEnabled)) {
            if (this._albedoTexture && PY.c.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && PY.c.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && PY.c.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && PY.c.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && PY.c.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const YY = this._getReflectionTexture();
            if (YY && PY.c.ReflectionTextureEnabled) {
              if (!YY.isReadyOrNotBlocking()) return !1;
              if (YY.irradianceTexture) {
                if (!YY.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!YY.sphericalPolynomial && YY.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && PY.c.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && PY.c.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (PY.c.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (RY.getCaps().standardDerivatives && this._bumpTexture && PY.c.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && PY.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = AY, this._eventInfo.subMesh = rY, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (AY._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (AY.AREALIGHTUSED || AY.CLUSTLIGHT_BATCH)
            for (let uY = 0; uY < YY.lightSources.length; uY++)
              if (!YY.lightSources[uY]._isReady()) return !1;
          if (RY.getCaps().standardDerivatives || YY.isVerticesDataPresent(MY.l.NormalKind) || (YY.createNormals(!0), cY.d.Warn("PBRMaterial: Normals have been created for the mesh: " + YY.name)), !(0, LY.b)(IY, YY, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const OY = rY.effect,
            gY = AY._areLightsDisposed,
            aY = this._prepareEffect(YY, rY.getRenderingMesh(), AY, this.onCompiled, this.onError, DY, null);
          let vY = !1;
          if (aY)
            if (this._onEffectCreatedObservable && (Er.effect = aY, Er.subMesh = rY, this._onEffectCreatedObservable.notifyObservers(Er)), this.allowShaderHotSwapping && OY && !aY.isReady()) {
              if (AY.markAsUnprocessed(), vY = this.isFrozen, gY) return AY._areLightsDisposed = !0, !1
            } else IY.resetCachedMaterial(), rY.setEffect(aY, AY, this._materialContext);
          return !(!rY.effect || !rY.effect.isReady()) && (AY._renderId = IY.getRenderId(), FY._wasPreviouslyReady = !vY, FY._wasPreviouslyUsingInstances = !!DY, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(rY, DY, FY) {
          let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(rY, DY, FY, RY, OY), !FY.isDirty) return null;
          FY.markAsProcessed();
          const gY = this.hT().ky(),
            aY = new UY.e;
          let vY = 0;
          FY.USESPHERICALINVERTEX && aY.addFallback(vY++, "USESPHERICALINVERTEX"), FY.FOG && aY.addFallback(vY, "FOG"), FY.SPECULARAA && aY.addFallback(vY, "SPECULARAA"), FY.POINTSIZE && aY.addFallback(vY, "POINTSIZE"), FY.LOGARITHMICDEPTH && aY.addFallback(vY, "LOGARITHMICDEPTH"), FY.PARALLAX && aY.addFallback(vY, "PARALLAX"), FY.PARALLAX_RHS && aY.addFallback(vY, "PARALLAX_RHS"), FY.PARALLAXOCCLUSION && aY.addFallback(vY++, "PARALLAXOCCLUSION"), FY.ENVIRONMENTBRDF && aY.addFallback(vY++, "ENVIRONMENTBRDF"), FY.TANGENT && aY.addFallback(vY++, "TANGENT"), FY.BUMP && aY.addFallback(vY++, "BUMP"), vY = (0, LY.C)(FY, aY, this._maxSimultaneousLights, vY), FY.SPECULARTERM && aY.addFallback(vY++, "SPECULARTERM"), FY.USESPHERICALFROMREFLECTIONMAP && aY.addFallback(vY++, "USESPHERICALFROMREFLECTIONMAP"), FY.USEIRRADIANCEMAP && aY.addFallback(vY++, "USEIRRADIANCEMAP"), FY.LIGHTMAP && aY.addFallback(vY++, "LIGHTMAP"), FY.NORMAL && aY.addFallback(vY++, "NORMAL"), FY.AMBIENT && aY.addFallback(vY++, "AMBIENT"), FY.EMISSIVE && aY.addFallback(vY++, "EMISSIVE"), FY.VERTEXCOLOR && aY.addFallback(vY++, "VERTEXCOLOR"), FY.MORPHTARGETS && aY.addFallback(vY++, "MORPHTARGETS"), FY.MULTIVIEW && aY.addFallback(0, "MULTIVIEW");
          const uY = [MY.l.PositionKind];
          FY.NORMAL && uY.push(MY.l.NormalKind), FY.TANGENT && uY.push(MY.l.TangentKind);
          for (let YY = 1; YY <= 6; ++YY) FY["UV" + YY] && uY.push(`uv${1===YY?"":YY}`);
          FY.VERTEXCOLOR && uY.push(MY.l.ColorKind), (0, LY.J)(uY, rY, FY, aY), (0, LY.N)(uY, FY), (0, LY.R)(uY, rY, FY), (0, LY.F)(uY, rY, FY);
          let sY = "pbr";
          const iY = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            yY = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, LY.ob)(iY, yY, !0);
          const QY = ["Material", "Scene", "Mesh"],
            oY = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: FY.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = aY, this._eventInfo.fallbackRank = vY, this._eventInfo.defines = FY, this._eventInfo.uniforms = iY, this._eventInfo.attributes = uY, this._eventInfo.samplers = yY, this._eventInfo.uniformBuffersNames = QY, this._eventInfo.customCode = void 0, this._eventInfo.mesh = rY, this._eventInfo.indexParameters = oY, this._callbackPluginEventGeneric(128, this._eventInfo), ir.d.AddUniformsAndSamplers(iY, yY), pY.d.AddUniforms(iY), pY.d.AddSamplers(yY), (0, vr.b)(iY), this._useVertexPulling) {
            const YY = DY?.geometry;
            YY && (this._vertexPullingMetadata = (0, ur.c)(YY), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((YY, rY) => {
              iY.push(`vp_${rY}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          xY.b && (xY.b.PrepareUniforms(iY, FY), xY.b.PrepareSamplers(yY, FY)), (0, LY.sb)({
            uniformsNames: iY,
            uniformBuffersNames: QY,
            samplers: yY,
            defines: FY,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const WY = {};
          this.customShaderNameResolve && (sY = this.customShaderNameResolve(sY, iY, QY, yY, FY, uY, WY));
          const EY = FY.toString(),
            mY = gY.createEffect(sY, {
              attributes: uY,
              uniformsNames: iY,
              uniformBuffersNames: QY,
              samplers: yY,
              defines: EY,
              fallbacks: aY,
              onCompiled: AY,
              onError: IY,
              indexParameters: oY,
              processFinalCode: WY.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: FY.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: YY._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, gY);
          return this._eventInfo.customCode = void 0, mY
        }
        _prepareDefines(rY, DY, FY) {
          let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const RY = DY.hasThinInstances,
            OY = this.hT(),
            gY = OY.ky();
          (0, LY.cb)(OY, rY, FY, !0, this._maxSimultaneousLights, this._disableLighting), FY._needNormals = !0, (0, LY.gb)(OY, FY);
          const aY = this.needAlphaBlendingForMesh(rY) && this.hT().useOrderIndependentTransparency;
          if ((0, LY.kb)(OY, FY, this.canRenderToMRT && !aY), (0, LY.ib)(OY, FY, aY), ir.d.PrepareDefines(gY.currentRenderPassId, rY, FY), FY.METALLICWORKFLOW = this.isMetallicWorkflow(), FY._areTexturesDirty) {
            FY._needUVs = !1;
            for (let YY = 1; YY <= 6; ++YY) FY["MAINUV" + YY] = !1;
            if (OY.texturesEnabled) {
              FY.ALBEDODIRECTUV = 0, FY.BASE_WEIGHTDIRECTUV = 0, FY.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, FY.AMBIENTDIRECTUV = 0, FY.OPACITYDIRECTUV = 0, FY.EMISSIVEDIRECTUV = 0, FY.REFLECTIVITYDIRECTUV = 0, FY.MICROSURFACEMAPDIRECTUV = 0, FY.METALLIC_REFLECTANCEDIRECTUV = 0, FY.REFLECTANCEDIRECTUV = 0, FY.BUMPDIRECTUV = 0, FY.LIGHTMAPDIRECTUV = 0, gY.getCaps().textureLOD && (FY.LODBASEDMICROSFURACE = !0), this._albedoTexture && PY.c.DiffuseTextureEnabled ? ((0, LY.eb)(this._albedoTexture, FY, "ALBEDO"), FY.GAMMAALBEDO = this._albedoTexture.gammaSpace) : FY.ALBEDO = !1, this._baseWeightTexture && PY.c.BaseWeightTextureEnabled ? (0, LY.eb)(this._baseWeightTexture, FY, "BASE_WEIGHT") : FY.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && PY.c.BaseDiffuseRoughnessTextureEnabled ? (0, LY.eb)(this._baseDiffuseRoughnessTexture, FY, "BASE_DIFFUSE_ROUGHNESS") : FY.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && PY.c.AmbientTextureEnabled ? ((0, LY.eb)(this._ambientTexture, FY, "AMBIENT"), FY.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : FY.AMBIENT = !1, this._opacityTexture && PY.c.OpacityTextureEnabled ? ((0, LY.eb)(this._opacityTexture, FY, "OPACITY"), FY.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : FY.OPACITY = !1;
              const YY = this._getReflectionTexture(),
                rY = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || gY.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, LY.$)(OY, YY, FY, this.realTimeFiltering, this.realTimeFilteringQuality, !rY), this._lightmapTexture && PY.c.LightmapTextureEnabled ? ((0, LY.eb)(this._lightmapTexture, FY, "LIGHTMAP"), FY.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, FY.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, FY.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : FY.LIGHTMAP = !1, this._emissiveTexture && PY.c.EmissiveTextureEnabled ? ((0, LY.eb)(this._emissiveTexture, FY, "EMISSIVE"), FY.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : FY.EMISSIVE = !1, PY.c.SpecularTextureEnabled ? (this._metallicTexture ? ((0, LY.eb)(this._metallicTexture, FY, "REFLECTIVITY"), FY.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, FY.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, FY.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, FY.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, FY.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, LY.eb)(this._reflectivityTexture, FY, "REFLECTIVITY"), FY.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, FY.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, FY.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : FY.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (FY.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, LY.eb)(this._metallicReflectanceTexture, FY, "METALLIC_REFLECTANCE"), FY.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : FY.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, LY.eb)(this._reflectanceTexture, FY, "REFLECTANCE"), FY.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : FY.REFLECTANCE = !1) : (FY.METALLIC_REFLECTANCE = !1, FY.REFLECTANCE = !1), this._microSurfaceTexture ? (0, LY.eb)(this._microSurfaceTexture, FY, "MICROSURFACEMAP") : FY.MICROSURFACEMAP = !1) : (FY.REFLECTIVITY = !1, FY.MICROSURFACEMAP = !1), gY.getCaps().standardDerivatives && this._bumpTexture && PY.c.BumpTextureEnabled && !this._disableBumpMap ? ((0, LY.eb)(this._bumpTexture, FY, "BUMP"), this._useParallax && this._albedoTexture && PY.c.DiffuseTextureEnabled ? (FY.PARALLAX = !0, FY.PARALLAX_RHS = OY.useRightHandedSystem, FY.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : FY.PARALLAX = !1, FY.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (FY.BUMP = !1, FY.PARALLAX = !1, FY.PARALLAX_RHS = !1, FY.PARALLAXOCCLUSION = !1, FY.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && PY.c.ReflectionTextureEnabled ? (FY.ENVIRONMENTBRDF = !0, FY.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (FY.ENVIRONMENTBRDF = !1, FY.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? FY.ALPHAFROMALBEDO = !0 : FY.ALPHAFROMALBEDO = !1
            }
            FY.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === YY.LIGHTFALLOFF_STANDARD ? (FY.USEPHYSICALLIGHTFALLOFF = !1, FY.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === YY.LIGHTFALLOFF_GLTF ? (FY.USEPHYSICALLIGHTFALLOFF = !1, FY.USEGLTFLIGHTFALLOFF = !0) : (FY.USEPHYSICALLIGHTFALLOFF = !0, FY.USEGLTFLIGHTFALLOFF = !1), FY.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? FY.TWOSIDEDLIGHTING = !0 : FY.TWOSIDEDLIGHTING = !1, FY.MIRRORED = !!OY._mirroredCameraPosition, FY.SPECULARAA = gY.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(FY._areTexturesDirty || FY._areMiscDirty) && (FY.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, FY.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, FY.ALPHABLEND = this.needAlphaBlendingForMesh(rY), FY.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, FY.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), FY._areTexturesDirty && (FY.TEXTURE_REPETITION_MODE = gY.version > 1 || gY.isWebGPU ? this.textureRepetitionMode : 0), FY._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(FY), FY.FORCENORMALFORWARD = this._forceNormalForward, FY.RADIANCEOCCLUSION = this._useRadianceOcclusion, FY.HORIZONOCCLUSION = this._useHorizonOcclusion, FY._areMiscDirty && ((0, LY.fb)(rY, OY, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(rY), FY, this._applyDecalMapAfterDetailMap, this._useVertexPulling, DY, this._isVertexOutputInvariant), FY.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !rY.isVerticesDataPresent(MY.l.NormalKind), FY.DEBUGMODE = this._debugMode), (0, LY._)(OY, gY, this, FY, !!AY, IY, RY), this._eventInfo.defines = FY, this._eventInfo.mesh = rY, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, LY.W)(rY, FY, !0, !0, !0, this._transparencyMode !== YY.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(YY, rY, DY) {
          const FY = {
            clipPlane: !1,
            useInstances: !1,
            ...DY
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const DY = new Vr(this._eventInfo.defineNames),
              AY = this._prepareEffect(YY, YY, DY, void 0, void 0, FY.useInstances, FY.clipPlane);
            this._onEffectCreatedObservable && (Er.effect = AY, Er.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Er)), AY.isReady() ? rY && rY(this) : AY.onCompileObservable.add((() => {
              rY && rY(this)
            }))
          })()
        }
        buildUniformLayout() {
          const YY = this._uniformBuffer;
          YY.addUniform("vAlbedoInfos", 2), YY.addUniform("vBaseWeightInfos", 2), YY.addUniform("vBaseDiffuseRoughnessInfos", 2), YY.addUniform("vAmbientInfos", 4), YY.addUniform("vOpacityInfos", 2), YY.addUniform("vEmissiveInfos", 2), YY.addUniform("vLightmapInfos", 2), YY.addUniform("vReflectivityInfos", 3), YY.addUniform("vMicroSurfaceSamplerInfos", 2), YY.addUniform("vBumpInfos", 3), YY.addUniform("albedoMatrix", 16), YY.addUniform("baseWeightMatrix", 16), YY.addUniform("baseDiffuseRoughnessMatrix", 16), YY.addUniform("ambientMatrix", 16), YY.addUniform("opacityMatrix", 16), YY.addUniform("emissiveMatrix", 16), YY.addUniform("lightmapMatrix", 16), YY.addUniform("reflectivityMatrix", 16), YY.addUniform("microSurfaceSamplerMatrix", 16), YY.addUniform("bumpMatrix", 16), YY.addUniform("vTangentSpaceParams", 2), YY.addUniform("vAlbedoColor", 4), YY.addUniform("baseWeight", 1), YY.addUniform("baseDiffuseRoughness", 1), YY.addUniform("vLightingIntensity", 4), YY.addUniform("pointSize", 1), YY.addUniform("vReflectivityColor", 4), YY.addUniform("vEmissiveColor", 3), YY.addUniform("vAmbientColor", 3), YY.addUniform("vDebugMode", 2), YY.addUniform("vMetallicReflectanceFactors", 4), YY.addUniform("vMetallicReflectanceInfos", 2), YY.addUniform("metallicReflectanceMatrix", 16), YY.addUniform("vReflectanceInfos", 2), YY.addUniform("reflectanceMatrix", 16), YY.addUniform("cameraInfo", 4), YY.addUniform("vTextureRepetitionHexTilingParams", 4), (0, LY.nb)(YY, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(YY, rY, DY) {
          const FY = this.hT(),
            AY = DY.materialDefines;
          if (!AY) return;
          const IY = DY.effect;
          if (!IY) return;
          this._activeEffect = IY, rY.getMeshUniformBuffer().bindToEffect(IY, "Mesh"), rY.transferToEffect(YY);
          const RY = FY.ky();
          this._uniformBuffer.bindToEffect(IY, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, FY, rY, YY, this.isFrozen), ir.d.Bind(RY.currentRenderPassId, this._activeEffect, rY, YY, this);
          const OY = FY.activeCamera;
          OY ? this._uniformBuffer.updateFloat4("cameraInfo", OY.minZ, OY.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const gY = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", gY[0], gY[1], gY[2], gY[3]), this._eventInfo.subMesh = DY, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), AY.OBJECTSPACE_NORMALMAP && (YY.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const aY = this._mustRebind(FY, IY, DY, rY.visibility),
            vY = RY._features.needToAlwaysBindUniformBuffers;
          (0, LY.c)(rY, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ur.b)(this._activeEffect, this._vertexPullingMetadata);
          let uY = null;
          const sY = this._uniformBuffer;
          if (aY) {
            if (this.bindViewProjection(IY), uY = this._getReflectionTexture(), !sY.useUbo || !this.isFrozen || !sY.isSync || DY._drawWrapper._forceRebindOnNextCall) {
              if (FY.texturesEnabled && (this._albedoTexture && PY.c.DiffuseTextureEnabled && (sY.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, LY.y)(this._albedoTexture, sY, "albedo")), this._baseWeightTexture && PY.c.BaseWeightTextureEnabled && (sY.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, LY.y)(this._baseWeightTexture, sY, "baseWeight")), this._baseDiffuseRoughnessTexture && PY.c.BaseDiffuseRoughnessTextureEnabled && (sY.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, LY.y)(this._baseDiffuseRoughnessTexture, sY, "baseDiffuseRoughness")), this._ambientTexture && PY.c.AmbientTextureEnabled && (sY.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, LY.y)(this._ambientTexture, sY, "ambient")), this._opacityTexture && PY.c.OpacityTextureEnabled && (sY.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, LY.y)(this._opacityTexture, sY, "opacity")), this._emissiveTexture && PY.c.EmissiveTextureEnabled && (sY.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, LY.y)(this._emissiveTexture, sY, "emissive")), this._lightmapTexture && PY.c.LightmapTextureEnabled && (sY.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, LY.y)(this._lightmapTexture, sY, "lightmap")), PY.c.SpecularTextureEnabled && (this._metallicTexture ? (sY.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, LY.y)(this._metallicTexture, sY, "reflectivity")) : this._reflectivityTexture && (sY.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, LY.y)(this._reflectivityTexture, sY, "reflectivity")), this._metallicReflectanceTexture && (sY.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, LY.y)(this._metallicReflectanceTexture, sY, "metallicReflectance")), this._reflectanceTexture && AY.REFLECTANCE && (sY.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, LY.y)(this._reflectanceTexture, sY, "reflectance")), this._microSurfaceTexture && (sY.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, LY.y)(this._microSurfaceTexture, sY, "microSurfaceSampler"))), this._bumpTexture && RY.getCaps().standardDerivatives && PY.c.BumpTextureEnabled && !this._disableBumpMap && (sY.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, LY.y)(this._bumpTexture, sY, "bump"), FY._mirroredCameraPosition ? sY.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : sY.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, LY.i)(FY, AY, sY, this._reflectionColor, uY, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && sY.updateFloat("pointSize", this.pointSize), AY.METALLICWORKFLOW) {
                kY.i.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, kY.i.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const YY = this.subSurface?._indexOfRefraction ?? 1.5,
                  rY = 1;
                kY.i.Color4[0].b = YY;
                const DY = Math.pow((YY - rY) / (YY + rY), 2);
                kY.i.Color4[0].a = DY, sY.updateDirectColor4("vReflectivityColor", kY.i.Color4[0]), sY.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else sY.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              sY.updateColor3("vEmissiveColor", PY.c.EmissiveTextureEnabled ? this._emissiveColor : kY.c.BlackReadOnly), !AY.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? sY.updateColor4("vAlbedoColor", this._albedoColor, 1) : sY.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), sY.updateFloat("baseWeight", this._baseWeight), sY.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * FY.environmentIntensity, this._lightingInfos.w = this._specularIntensity, sY.updateVector4("vLightingIntensity", this._lightingInfos), FY.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), sY.updateColor3("vAmbientColor", this._globalAmbientColor), sY.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            FY.texturesEnabled && (this._albedoTexture && PY.c.DiffuseTextureEnabled && sY.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && PY.c.BaseWeightTextureEnabled && sY.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && PY.c.BaseDiffuseRoughnessTextureEnabled && sY.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && PY.c.AmbientTextureEnabled && sY.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && PY.c.OpacityTextureEnabled && sY.setTexture("opacitySampler", this._opacityTexture), (0, LY.m)(FY, AY, sY, uY, this.realTimeFiltering), AY.ENVIRONMENTBRDF && sY.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && PY.c.EmissiveTextureEnabled && sY.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && PY.c.LightmapTextureEnabled && sY.setTexture("lightmapSampler", this._lightmapTexture), PY.c.SpecularTextureEnabled && (this._metallicTexture ? sY.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && sY.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && sY.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && AY.REFLECTANCE && sY.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && sY.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && RY.getCaps().standardDerivatives && PY.c.BumpTextureEnabled && !this._disableBumpMap && sY.setTexture("bumpSampler", this._bumpTexture)), this.hT().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(rY) && this.hT().depthPeelingRenderer.bind(IY), this._eventInfo.subMesh = DY, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, vr.c)(this._activeEffect, this, FY), this.bindEyePosition(IY)
          } else vY && (this._needToBindSceneUbo = !0);
          !aY && this.isFrozen && !vY || !FY.lightsEnabled || this._disableLighting || (0, LY.n)(FY, rY, this._activeEffect, AY, this._maxSimultaneousLights), !aY && this.isFrozen || ((FY.fogEnabled && rY.applyFog && FY.fogMode !== dY.g.FOGMODE_NONE || uY || this.subSurface.refractionTexture || rY.receiveShadows || AY.PREPASS || AY.CLUSTLIGHT_BATCH) && this.bindView(IY), (0, LY.f)(FY, rY, this._activeEffect, !0), AY.NUM_MORPH_INFLUENCERS && (0, LY.v)(rY, this._activeEffect), AY.BAKED_VERTEX_ANIMATION_TEXTURE && rY.bakedVertexAnimationManager?.bind(IY, AY.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, LY.r)(AY, this._activeEffect, FY)), this._afterBind(rY, this._activeEffect, DY), sY.update()
        }
        getAnimatables() {
          const YY = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && YY.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && YY.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && YY.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && YY.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && YY.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && YY.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && YY.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? YY.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && YY.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && YY.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && YY.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && YY.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && YY.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && YY.push(this._microSurfaceTexture), YY
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.hT().environmentTexture
        }
        getActiveTextures() {
          const YY = super.getActiveTextures();
          return this._albedoTexture && YY.push(this._albedoTexture), this._baseWeightTexture && YY.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && YY.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && YY.push(this._ambientTexture), this._opacityTexture && YY.push(this._opacityTexture), this._reflectionTexture && YY.push(this._reflectionTexture), this._emissiveTexture && YY.push(this._emissiveTexture), this._reflectivityTexture && YY.push(this._reflectivityTexture), this._metallicTexture && YY.push(this._metallicTexture), this._metallicReflectanceTexture && YY.push(this._metallicReflectanceTexture), this._reflectanceTexture && YY.push(this._reflectanceTexture), this._microSurfaceTexture && YY.push(this._microSurfaceTexture), this._bumpTexture && YY.push(this._bumpTexture), this._lightmapTexture && YY.push(this._lightmapTexture), YY
        }
        hasTexture(YY) {
          return !!super.hasTexture(YY) || (this._albedoTexture === YY || (this._baseWeightTexture === YY || (this._baseDiffuseRoughnessTexture === YY || (this._ambientTexture === YY || (this._opacityTexture === YY || (this._reflectionTexture === YY || (this._emissiveTexture === YY || (this._reflectivityTexture === YY || (this._metallicTexture === YY || (this._metallicReflectanceTexture === YY || (this._reflectanceTexture === YY || (this._microSurfaceTexture === YY || (this._bumpTexture === YY || this._lightmapTexture === YY)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const YY = this.hT().enableSubSurfaceForPrePass();
          return YY && (YY.enabled = !0), !0
        }
        dispose(YY, rY) {
          this._breakShaderLoadedCheck = !0, rY && (this._environmentBRDFTexture && this.hT().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(YY, rY)
        }
      }, rY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(AY[Symbol.metadata] ?? null) : void 0;
        FY = [(0, BY.f)("_markAllSubMeshesAsMiscDirty")], (0, NY.i)(YY, null, FY, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "debugMode" in YY,
            get: YY => YY.debugMode,
            set: (YY, rY) => {
              YY.debugMode = rY
            }
          },
          metadata: rY
        }, RY, OY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY.PBRMATERIAL_OPAQUE = IY.c.MATERIAL_OPAQUE, YY.PBRMATERIAL_ALPHATEST = IY.c.MATERIAL_ALPHATEST, YY.PBRMATERIAL_ALPHABLEND = IY.c.MATERIAL_ALPHABLEND, YY.PBRMATERIAL_ALPHATESTANDBLEND = IY.c.MATERIAL_ALPHATESTANDBLEND, YY.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, YY.LIGHTFALLOFF_PHYSICAL = 0, YY.LIGHTFALLOFF_GLTF = 1, YY.LIGHTFALLOFF_STANDARD = 2, YY.ForceGLSL = !1, YY._ShaderLoader = new sr.c((() => [Promise.all([DY.e(307), DY.e(318)]).then((() => DY(60575))), Promise.all([DY.e(312), DY.e(308), DY.e(372), DY.e(321), DY.e(371)]).then((() => DY(60593)))]), (() => [Promise.all([DY.e(326), DY.e(328), DY.e(335)]).then((() => DY(60674))), Promise.all([DY.e(326), DY.e(329), DY.e(375), DY.e(339), DY.e(374)]).then((() => DY(60697)))])), YY
    })();
    Object.getOwnPropertyDescriptor(lr.prototype, "decalMap") || Object.defineProperty(lr.prototype, "decalMap", (0, Wr.c)("PBRBaseMaterial", "decalMap")), (0, DY(40900).d)();
    var Tr = DY(39144);
    var er = DY(39219),
      Nr = DY(40879),
      Br = DY(38975),
      cr = DY(38982),
      Kr = DY(39078);
    let Hr = !1;
    const zr = new kY.d,
      Zr = new kY.d;
    class Cr extends Nr.c {
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
      set wrapU(YY) {
        if (this._textures)
          for (let rY = 0; rY < this._textures.length; rY++) this._textures[rY].wrapU = YY
      }
      set wrapV(YY) {
        if (this._textures)
          for (let rY = 0; rY < this._textures.length; rY++) this._textures[rY].wrapV = YY
      }
      constructor(YY, rY, DY, FY, AY, IY) {
        const RY = !(!AY || !AY.generateMipMaps) && AY.generateMipMaps,
          OY = !(!AY || !AY.generateDepthTexture) && AY.generateDepthTexture,
          gY = AY && AY.depthTextureFormat ? AY.depthTextureFormat : 15,
          aY = !AY || void 0 === AY.doNotChangeAspectRatio || AY.doNotChangeAspectRatio,
          vY = !(!AY || !AY.drawOnlyOnFirstAttachmentByDefault) && AY.drawOnlyOnFirstAttachmentByDefault;
        if (super(YY, rY, FY, RY, aY, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Hr || (Hr = !0, cr.ThinEngine.prototype.restoreSingleAttachment = function() {
            const YY = this._gl;
            this.bindAttachments([YY.BACK])
          }, cr.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const YY = this._gl;
            this.bindAttachments([YY.COLOR_ATTACHMENT0])
          }, cr.ThinEngine.prototype.buildTextureLayout = function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const DY = this._gl,
              FY = [];
            if (rY) FY.push(DY.BACK);
            else
              for (let AY = 0; AY < YY.length; AY++) YY[AY] ? FY.push(DY["COLOR_ATTACHMENT" + AY]) : FY.push(DY.NONE);
            return FY
          }, cr.ThinEngine.prototype.bindAttachments = function(YY) {
            const rY = this._gl,
              DY = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, DY)
              for (let FY = 0; FY < YY.length; FY++) YY[FY] !== rY.NONE && DY[FY] && (0, Kr.i)(DY[FY].format) && (this._integerMRTAttachmentsMask |= 1 << FY);
            rY.drawBuffers(YY)
          }, cr.ThinEngine.prototype.clearAttachments = function(YY, rY, DY, FY) {
            let AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const RY = this._currentRenderTarget?.textures;
            let OY = !1;
            if (DY && YY && RY)
              for (let gY = 0; gY < rY.length; gY++) {
                const YY = RY[gY];
                if (rY[gY] !== this._gl.NONE && YY && (0, Kr.i)(YY.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  OY = !0;
                  break
                }
              }
            if (!OY || !YY || !RY) return this.bindAttachments(rY), void this.clear(YY, DY, FY, AY, IY);
            this.bindAttachments(rY), this._applyColorWriteState();
            for (let gY = 0; gY < rY.length; gY++) {
              const DY = RY[gY];
              if (rY[gY] !== this._gl.NONE && DY) {
                let rY = YY;
                if ((0, Kr.i)(DY.format)) {
                  const FY = (0, Kr.m)(DY.type);
                  rY = FY ? zr : Zr;
                  const AY = FY ? 255 : 1;
                  rY.r = Math.round(YY.r * AY), rY.g = Math.round(YY.g * AY), rY.b = Math.round(YY.b * AY), rY.a = Math.round(YY.a * AY)
                }
                this._clearColorAttachment(gY, rY, DY.format, DY.type)
              }
            }
            if (FY || AY) {
              const YY = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, FY, AY, IY)
              } finally {
                this._integerMRTAttachmentsMask = YY
              }
            }
          }, cr.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              DY = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, YY.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(YY), rY || this.generateMipMapsMultiFramebuffer(YY), DY && (YY._MSAAFramebuffer && this._bindUnboundFramebuffer(YY._framebuffer), DY()), this._bindUnboundFramebuffer(null)
          }, cr.ThinEngine.prototype.createMultipleRenderTarget = function(YY, rY) {
            let DY, FY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              AY = !1,
              IY = !0,
              RY = !1,
              OY = !1,
              gY = 1,
              aY = 1,
              vY = [],
              uY = [],
              sY = [],
              iY = [],
              yY = [],
              QY = [],
              oY = [],
              WY = [],
              EY = [],
              mY = !1;
            const VY = this._createHardwareRenderTargetWrapper(!0, !1, YY);
            void 0 !== rY && (AY = void 0 !== rY.generateMipMaps && rY.generateMipMaps, IY = void 0 === rY.generateDepthBuffer || rY.generateDepthBuffer, RY = void 0 !== rY.generateStencilBuffer && rY.generateStencilBuffer, OY = void 0 !== rY.generateDepthTexture && rY.generateDepthTexture, gY = rY.qIY ?? 1, aY = rY.samples ?? aY, vY = rY.types || vY, uY = rY.samplingModes || uY, sY = rY.useSRGBBuffers || sY, iY = rY.formats || iY, yY = rY.targetTypes || yY, QY = rY.faceIndex || QY, oY = rY.layerIndex || oY, WY = rY.layerCounts || WY, EY = rY.labels || EY, mY = rY.dontCreateTextures ?? !1, this.VQ > 1 && (13 === rY.depthTextureFormat || 17 === rY.depthTextureFormat || 16 === rY.depthTextureFormat || 14 === rY.depthTextureFormat || 18 === rY.depthTextureFormat) && (DY = rY.depthTextureFormat)), void 0 === DY && (DY = RY ? 13 : 14);
            const SY = this._gl,
              lY = this._currentFramebuffer,
              TY = SY.createFramebuffer();
            this._bindUnboundFramebuffer(TY);
            const eY = YY.width ?? YY,
              NY = YY.height ?? YY,
              BY = [],
              KY = [],
              HY = this.VQ > 1 && (13 === DY || 17 === DY || 18 === DY);
            VY.label = rY?.label ?? "MultiRenderTargetWrapper", VY._framebuffer = TY, VY._generateDepthBuffer = OY || IY, VY._generateStencilBuffer = OY ? HY : RY, VY._depthStencilBuffer = this._setupFramebufferDepthAttachments(VY._generateStencilBuffer, VY._generateDepthBuffer, eY, NY, 1, DY), VY._attachments = KY;
            for (let zY = 0; zY < gY; zY++) {
              let YY = uY[zY] || 3,
                rY = vY[zY] || 0,
                DY = sY[zY] || !1;
              const FY = iY[zY] || 5,
                IY = yY[zY] || 3553,
                RY = WY[zY] ?? 1;
              (1 !== rY || this._caps.textureFloatLinearFiltering) && (2 !== rY || this._caps.textureHalfFloatLinearFiltering) || (YY = 1);
              const OY = this._getSamplingParameters(YY, AY);
              1 !== rY || this._caps.textureFloat || (rY = 0, cY.d.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), DY = DY && this._caps.supportSRGBBuffers && (this.VQ > 1 || this.isWebGPU);
              const gY = this.VQ > 1,
                aY = SY[gY ? "COLOR_ATTACHMENT" + zY : "COLOR_ATTACHMENT" + zY + "_WEBGL"];
              if (KY.push(aY), -1 === IY || mY) continue;
              const QY = new Br.c(this, 6);
              BY[zY] = QY, SY.activeTexture(SY["TEXTURE" + zY]), SY.bindTexture(IY, QY._hardwareTexture.underlyingResource), SY.texParameteri(IY, SY.TEXTURE_MAG_FILTER, OY.mag), SY.texParameteri(IY, SY.TEXTURE_MIN_FILTER, OY.min), SY.texParameteri(IY, SY.TEXTURE_WRAP_S, SY.CLAMP_TO_EDGE), SY.texParameteri(IY, SY.TEXTURE_WRAP_T, SY.CLAMP_TO_EDGE);
              const oY = this._getRGBABufferInternalSizedFormat(rY, FY, DY),
                lY = this._getInternalFormat(FY),
                TY = this._getWebGLTextureType(rY);
              if (!gY || 35866 !== IY && 32879 !== IY)
                if (34067 === IY) {
                  for (let YY = 0; YY < 6; YY++) SY.texImage2D(SY.TEXTURE_CUBE_MAP_POSITIVE_X + YY, 0, oY, eY, NY, 0, lY, TY, null);
                  QY.isCube = !0
                } else SY.texImage2D(SY.TEXTURE_2D, 0, oY, eY, NY, 0, lY, TY, null);
              else 35866 === IY ? QY.is2DArray = !0 : QY.is3D = !0, QY.baseDepth = QY.depth = RY, SY.texImage3D(IY, 0, oY, eY, NY, RY, 0, lY, TY, null);
              AY && SY.generateMipmap(IY), this._bindTextureDirectly(IY, null), QY.baseWidth = eY, QY.baseHeight = NY, QY.width = eY, QY.height = NY, QY.isReady = !0, QY.samples = 1, QY.generateMipMaps = AY, QY.samplingMode = YY, QY.type = rY, QY._useSRGBBuffer = DY, QY.format = FY, QY.label = EY[zY] ?? VY.label + "-Texture" + zY, this._internalTexturesCache.push(QY)
            }
            if (OY && this._caps.depthTextureExtension && !mY) {
              const YY = new Br.c(this, 14);
              let rY = 5,
                FY = SY.DEPTH_COMPONENT16,
                IY = SY.DEPTH_COMPONENT,
                RY = SY.UNSIGNED_SHORT,
                OY = SY.DEPTH_ATTACHMENT;
              this.VQ < 2 ? FY = SY.DEPTH_COMPONENT : 14 === DY ? (rY = 1, RY = SY.FLOAT, FY = SY.DEPTH_COMPONENT32F) : 18 === DY ? (rY = 0, RY = SY.FLOAT_32_UNSIGNED_INT_24_8_REV, FY = SY.DEPTH32F_STENCIL8, IY = SY.DEPTH_STENCIL, OY = SY.DEPTH_STENCIL_ATTACHMENT) : 16 === DY ? (rY = 0, RY = SY.UNSIGNED_INT, FY = SY.DEPTH_COMPONENT24, OY = SY.DEPTH_ATTACHMENT) : 13 !== DY && 17 !== DY || (rY = 12, RY = SY.UNSIGNED_INT_24_8, FY = SY.DEPTH24_STENCIL8, IY = SY.DEPTH_STENCIL, OY = SY.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(SY.TEXTURE_2D, YY, !0), SY.texParameteri(SY.TEXTURE_2D, SY.TEXTURE_MAG_FILTER, SY.NEAREST), SY.texParameteri(SY.TEXTURE_2D, SY.TEXTURE_MIN_FILTER, SY.NEAREST), SY.texParameteri(SY.TEXTURE_2D, SY.TEXTURE_WRAP_S, SY.CLAMP_TO_EDGE), SY.texParameteri(SY.TEXTURE_2D, SY.TEXTURE_WRAP_T, SY.CLAMP_TO_EDGE), SY.texImage2D(SY.TEXTURE_2D, 0, FY, eY, NY, 0, IY, RY, null), SY.framebufferTexture2D(SY.FRAMEBUFFER, OY, SY.TEXTURE_2D, YY._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(SY.TEXTURE_2D, null), VY._depthStencilTexture = YY, VY._depthStencilTextureWithStencil = HY, YY.baseWidth = eY, YY.baseHeight = NY, YY.width = eY, YY.height = NY, YY.isReady = !0, YY.samples = 1, YY.generateMipMaps = AY, YY.samplingMode = 1, YY.format = DY, YY.type = rY, YY.label = VY.label + "-DepthStencil", BY[gY] = YY, this._internalTexturesCache.push(YY)
            }
            if (VY.setTextures(BY), FY && SY.drawBuffers(KY), this._bindUnboundFramebuffer(lY), VY.setLayerAndFaceIndices(oY, QY), this.resetTextureCache(), mY) {
              if (aY > 1) {
                const YY = SY.createFramebuffer();
                if (!YY) throw new Error("Unable to create multi sampled framebuffer");
                VY._samples = aY, VY._MSAAFramebuffer = YY, gY > 0 && FY && (this._bindUnboundFramebuffer(YY), SY.drawBuffers(KY), this._bindUnboundFramebuffer(lY))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(VY, aY, FY);
            return VY
          }, cr.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(YY, rY) {
            let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.VQ < 2 || !YY) return 1;
            if (YY.samples === rY) return rY;
            const FY = this._gl;
            rY = Math.min(rY, this.getCaps().maxMSAASamples), YY._depthStencilBuffer && (FY.deleteRenderbuffer(YY._depthStencilBuffer), YY._depthStencilBuffer = null), YY._MSAAFramebuffer && (FY.deleteFramebuffer(YY._MSAAFramebuffer), YY._MSAAFramebuffer = null);
            const AY = YY._attachments.length;
            for (let RY = 0; RY < AY; RY++) {
              const rY = YY.textures[RY]._hardwareTexture;
              rY?.releaseMSAARenderBuffers()
            }
            if (rY > 1 && "function" === typeof FY.renderbufferStorageMultisample) {
              const IY = FY.createFramebuffer();
              if (!IY) throw new Error("Unable to create multi sampled framebuffer");
              YY._MSAAFramebuffer = IY, this._bindUnboundFramebuffer(IY);
              const RY = [];
              for (let DY = 0; DY < AY; DY++) {
                const AY = YY.textures[DY],
                  IY = AY._hardwareTexture,
                  OY = FY[this.VQ > 1 ? "COLOR_ATTACHMENT" + DY : "COLOR_ATTACHMENT" + DY + "_WEBGL"],
                  gY = this._createRenderBuffer(AY.width, AY.height, rY, -1, this._getRGBABufferInternalSizedFormat(AY.type, AY.format, AY._useSRGBBuffer), OY);
                if (!gY) throw new Error("Unable to create multi sampled framebuffer");
                IY.addMSAARenderBuffer(gY), AY.samples = rY, RY.push(OY)
              }
              DY && FY.drawBuffers(RY)
            } else this._bindUnboundFramebuffer(YY._framebuffer);
            const IY = YY._depthStencilTexture ? YY._depthStencilTexture.format : void 0;
            return YY._depthStencilBuffer = this._setupFramebufferDepthAttachments(YY._generateStencilBuffer, YY._generateDepthBuffer, YY.width, YY.height, rY, IY), this._bindUnboundFramebuffer(null), YY._samples = rY, rY
          }, cr.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(YY) {
            const rY = YY,
              DY = this._gl;
            if (rY.isMulti)
              for (let FY = 0; FY < rY._attachments.length; FY++) {
                const YY = rY.textures[FY];
                !YY?.generateMipMaps || YY?.isCube || YY?.is3D || (this._bindTextureDirectly(DY.TEXTURE_2D, YY, !0), DY.generateMipmap(DY.TEXTURE_2D), this._bindTextureDirectly(DY.TEXTURE_2D, null))
              }
          }, cr.ThinEngine.prototype.resolveMultiFramebuffer = function(YY) {
            const rY = YY,
              DY = this._gl;
            if (!rY._MSAAFramebuffer || !rY.isMulti) return;
            let FY = rY.resolveMSAAColors ? DY.COLOR_BUFFER_BIT : 0;
            FY |= rY._generateDepthBuffer && rY.resolveMSAADepth ? DY.DEPTH_BUFFER_BIT : 0, FY |= rY._generateStencilBuffer && rY.resolveMSAAStencil ? DY.STENCIL_BUFFER_BIT : 0;
            const AY = rY._attachments,
              IY = AY.length;
            DY.bindFramebuffer(DY.READ_FRAMEBUFFER, rY._MSAAFramebuffer), DY.bindFramebuffer(DY.DRAW_FRAMEBUFFER, rY._framebuffer);
            for (let RY = 0; RY < IY; RY++) {
              const YY = rY.textures[RY];
              for (let rY = 0; rY < IY; rY++) AY[rY] = DY.NONE;
              AY[RY] = DY[this.VQ > 1 ? "COLOR_ATTACHMENT" + RY : "COLOR_ATTACHMENT" + RY + "_WEBGL"], DY.readBuffer(AY[RY]), DY.drawBuffers(AY), DY.blitFramebuffer(0, 0, YY.width, YY.height, 0, 0, YY.width, YY.height, FY, DY.NEAREST)
            }
            for (let RY = 0; RY < IY; RY++) AY[RY] = DY[this.VQ > 1 ? "COLOR_ATTACHMENT" + RY : "COLOR_ATTACHMENT" + RY + "_WEBGL"];
            DY.drawBuffers(AY), DY.bindFramebuffer(this._gl.FRAMEBUFFER, rY._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = IY;
        const uY = [],
          sY = [],
          iY = [],
          yY = [],
          QY = [],
          oY = [],
          WY = [],
          EY = [];
        this._initTypes(DY, uY, sY, iY, yY, QY, oY, WY, EY, AY);
        const mY = !AY || void 0 === AY.generateDepthBuffer || AY.generateDepthBuffer,
          VY = !(!AY || void 0 === AY.generateStencilBuffer) && AY.generateStencilBuffer,
          SY = AY && AY.samples ? AY.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: sY,
          generateMipMaps: RY,
          generateDepthBuffer: mY,
          generateStencilBuffer: VY,
          generateDepthTexture: OY,
          depthTextureFormat: gY,
          types: uY,
          qIY: DY,
          useSRGBBuffers: iY,
          samples: SY,
          formats: yY,
          targetTypes: QY,
          faceIndex: oY,
          layerIndex: WY,
          layerCounts: EY,
          labels: IY,
          label: YY
        }, this._count = DY, this._drawOnlyOnFirstAttachmentByDefault = vY, DY > 0 && (this._createInternalTextures(), this._createTextures(IY))
      }
      _initTypes(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        for (let vY = 0; vY < YY; vY++) aY && aY.types && void 0 !== aY.types[vY] ? rY.push(aY.types[vY]) : rY.push(aY && aY.defaultType ? aY.defaultType : 0), aY && aY.samplingModes && void 0 !== aY.samplingModes[vY] ? DY.push(aY.samplingModes[vY]) : DY.push(HY.i.BILINEAR_SAMPLINGMODE), aY && aY.useSRGBBuffers && void 0 !== aY.useSRGBBuffers[vY] ? FY.push(aY.useSRGBBuffers[vY]) : FY.push(!1), aY && aY.formats && void 0 !== aY.formats[vY] ? AY.push(aY.formats[vY]) : AY.push(5), aY && aY.targetTypes && void 0 !== aY.targetTypes[vY] ? IY.push(aY.targetTypes[vY]) : IY.push(3553), aY && aY.faceIndex && void 0 !== aY.faceIndex[vY] ? RY.push(aY.faceIndex[vY]) : RY.push(0), aY && aY.layerIndex && void 0 !== aY.layerIndex[vY] ? OY.push(aY.layerIndex[vY]) : OY.push(0), aY && aY.layerCounts && void 0 !== aY.layerCounts[vY] ? gY.push(aY.layerCounts[vY]) : gY.push(1)
      }
      _createInternaTextureIndexMapping() {
        const YY = {},
          rY = [];
        if (!this._renderTarget) return rY;
        const DY = this._renderTarget.textures;
        for (let FY = 0; FY < DY.length; FY++) {
          const AY = DY[FY];
          if (!AY) continue;
          const IY = YY[AY.uniqueId];
          void 0 !== IY ? rY[FY] = IY : YY[AY.uniqueId] = FY
        }
        return rY
      }
      _rebuild() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || YY) return;
        const FY = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), rY && (this._releaseTextures(), this._createTextures(DY));
        const AY = this._renderTarget.textures;
        for (let IY = 0; IY < AY.length; IY++) {
          const YY = this._textures[IY];
          void 0 !== FY[IY] && this._renderTarget.setTexture(AY[FY[IY]], IY), YY._texture = AY[IY], YY._texture && (YY._noMipmap = !YY._texture.useMipMaps, YY._useSRGBBuffer = YY._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let YY = 0; YY < this._textures.length; YY++) this._textures[YY]._texture = null, this._textures[YY].dispose()
      }
      _createTextures(YY) {
        const rY = this._renderTarget.textures;
        this._textures = [];
        for (let DY = 0; DY < rY.length; DY++) {
          const FY = new HY.i(null, this.hT());
          YY?.[DY] && (FY.name = YY[DY]), FY._texture = rY[DY], FY._texture && (FY._noMipmap = !FY._texture.useMipMaps, FY._useSRGBBuffer = FY._texture._useSRGBBuffer), this._textures.push(FY)
        }
      }
      setInternalTexture(YY, rY) {
        let DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === rY && (this._texture = YY), this.renderTarget.setTexture(YY, rY, DY), this.textures[rY] || (this.textures[rY] = new HY.i(null, this.hT()), this.textures[rY].name = this._textureNames?.[rY] ?? this.textures[rY].name), this.textures[rY]._texture = YY, this.textures[rY]._noMipmap = !YY.useMipMaps, this.textures[rY]._useSRGBBuffer = YY._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[rY] = YY.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[rY] = YY.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[rY] = YY._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[rY])) {
          let DY;
          DY = YY.is2DArray ? 35866 : YY.isCube ? 34067 : YY.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[rY] = DY
        }
      }
      setLayerAndFaceIndex(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[YY] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[YY] = rY), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[YY] = DY), this.renderTarget.setLayerAndFaceIndex(YY, rY, DY))
      }
      setLayerAndFaceIndices(YY, rY) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = YY, this._multiRenderTargetOptions.faceIndex = rY, this.renderTarget.setLayerAndFaceIndices(YY, rY))
      }
      get samples() {
        return this._samples
      }
      set samples(YY) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(YY) : this._samples = YY
      }
      resize(YY) {
        this._processSizeParameter(YY), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(YY, rY, DY) {
        this._multiRenderTargetOptions.qIY = YY, this._count = YY;
        const FY = [],
          AY = [],
          IY = [],
          RY = [],
          OY = [],
          gY = [],
          aY = [],
          vY = [];
        this._textureNames = DY, this._initTypes(YY, FY, AY, IY, RY, OY, gY, aY, vY, rY), this._multiRenderTargetOptions.types = FY, this._multiRenderTargetOptions.samplingModes = AY, this._multiRenderTargetOptions.useSRGBBuffers = IY, this._multiRenderTargetOptions.formats = RY, this._multiRenderTargetOptions.targetTypes = OY, this._multiRenderTargetOptions.faceIndex = gY, this._multiRenderTargetOptions.layerIndex = aY, this._multiRenderTargetOptions.layerCounts = vY, this._multiRenderTargetOptions.labels = DY, this._rebuild(!1, !0, DY)
      }
      _unbindFrameBuffer(YY, rY) {
        this._renderTarget && YY.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(rY)
        }))
      }
      dispose() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), YY ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const YY = this._renderTarget?.textures;
        if (YY) {
          for (let rY = YY.length - 1; rY >= 0; rY--) this._textures[rY]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var fr = DY(39296);
    class jr {
      constructor(YY) {
        this.name = fr.c.NAME_GEOMETRYBUFFERRENDERER, this.LQ = YY
      }
      register() {
        this.LQ._gatherRenderTargetsStage.registerStep(fr.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(YY) {
        this.LQ._geometryBufferRenderer && YY.push(this.LQ._geometryBufferRenderer.getGBuffer())
      }
    }
    let hr = !1;
    var dr;
    ! function(YY) {
      YY[YY.Small = 0] = "Small", YY[YY.Medium = 1] = "Medium", YY[YY.Large = 2] = "Large", YY[YY.ExtraLarge = 3] = "ExtraLarge"
    }(dr || (dr = {}));
    const Jr = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Mr = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class wr {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(YY) {
        if (YY && this._enableMeshBlendTag && !this._scene.ky().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = YY
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(YY) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = YY, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(YY, rY) {
        YY === wr.POSITION_TEXTURE_TYPE ? (this._positionIndex = rY, this._enablePosition = !0) : YY === wr.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = rY, this._enableVelocity = !0) : YY === wr.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = rY, this._enableVelocityLinear = !0) : YY === wr.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = rY, this._enableReflectivity = !0) : YY === wr.DEPTH_TEXTURE_TYPE ? (this._depthIndex = rY, this._enableDepth = !0) : YY === wr.NORMAL_TEXTURE_TYPE ? (this._normalIndex = rY, this._enableNormal = !0) : YY === wr.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = rY, this._enableScreenspaceDepth = !0) : YY === wr.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = rY, this._enableIrradiance = !0) : YY === wr.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = rY, this._enableObjectId = !0) : YY === wr.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = rY, this._enableMeshBlendTag = !0)
      }
      _setAttachments(YY) {
        this._attachmentsFromPrePass = YY
      }
      _linkInternalTexture(YY) {
        this._multiRenderTarget.setInternalTexture(YY, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(YY) {
        this._multiRenderTarget.renderList = YY
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(YY) {
        switch (YY) {
          case wr.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case wr.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case wr.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case wr.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case wr.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case wr.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case wr.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case wr.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case wr.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case wr.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(YY) {
        this._enableDepth = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(YY) {
        this._enableNormal = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(YY) {
        this._enablePosition = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(YY) {
        this._enableVelocity = YY, YY || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = YY
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(YY) {
        this._enableVelocityLinear = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(YY) {
        this._enableReflectivity = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(YY) {
        this._enableScreenspaceDepth = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(YY) {
        this._enableIrradiance = YY, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(YY) {
        if (YY && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (YY && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (YY && !this._enableObjectId && !this._linkedWithPrePass) {
          const YY = this._scene.ky(),
            rY = Math.min(YY.getCaps().maxDrawBuffers ?? 1, 8),
            DY = this._assignRenderTargetIndices()[0] + 1;
          if (YY.getCaps().drawBuffersExtension && DY > rY) throw new Error(`GeometryBufferRenderer: ${DY} color attachments were requested, but this engine supports at most ${rY}`)
        }
        this._enableObjectId = YY, YY || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(YY) {
        if (this._enableMeshBlendTag !== YY) {
          if (YY) {
            const YY = this._scene.ky();
            if (! function(YY) {
                return "NATIVE" !== YY.shaderPlatformName && (YY.isWebGPU || 2 === YY.VQ)
              }(YY)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !YY.isWebGPU && !YY.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const rY = Math.min(YY.getCaps().maxDrawBuffers ?? 1, 8),
                DY = this._assignRenderTargetIndices()[0] + 1;
              if (YY.getCaps().drawBuffersExtension && DY > rY) throw new Error(`GeometryBufferRenderer: ${DY} color attachments were requested, but this engine supports at most ${rY}`)
            }
          }
          this._enableMeshBlendTag = YY, YY || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get LQ() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        var AY;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new kY.d(0, 0, 0, 0), this._clearDepthColor = new kY.d(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = YY, this._ratioOrDimensions = rY, this._useUbo = YY.ky().supportsUniformBuffers, this._depthFormat = DY, this._textureTypesAndFormats = FY || {}, this._initShaderSourceAsync(), AY = wr, hr || (hr = !0, Object.defineProperty(dY.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(YY) {
            YY && YY.isSupported && (this._geometryBufferRenderer = YY)
          },
          enumerable: !0,
          configurable: !0
        }), dY.g.prototype.enableGeometryBufferRenderer = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            DY = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new AY(this, YY, rY, DY), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, dY.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, AY._SceneComponentInitialization = YY => {
          let rY = YY._getComponent(fr.c.NAME_GEOMETRYBUFFERRENDERER);
          rY || (rY = new jr(YY), YY.ADY(rY))
        }), wr._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.ky().isWebGPU && !wr.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([DY.e(327).then((() => DY(60901))), Promise.all([DY.e(326), DY.e(338)]).then((() => DY(60910)))])) : await Promise.all([DY.e(310).then((() => DY(60915))), DY.e(309).then((() => DY(60921)))]), this._shadersLoaded = !0
      }
      isReady(YY, rY) {
        if (!this._shadersLoaded) return !1;
        const DY = YY.Uy();
        if (DY && DY.disableDepthWrite) return !1;
        if (function(YY) {
            return YY._isGaussianSplatting || "GaussianSplattingMesh" === (rY = YY.getClassName()) || "GaussianSplattingStream" === rY;
            var rY
          }(YY.getMesh())) return !1;
        const FY = [],
          AY = [MY.l.PositionKind],
          IY = YY.getMesh();
        IY.isVerticesDataPresent(MY.l.NormalKind) && (FY.push("#define HAS_NORMAL_ATTRIBUTE"), AY.push(MY.l.NormalKind));
        let RY = !1,
          OY = !1;
        if (DY) {
          let YY = !1;
          if (DY.needAlphaTestingForMesh(IY) && DY.getAlphaTestTexture() && (FY.push("#define ALPHATEST"), FY.push(`#define ALPHATEST_UV${DY.getAlphaTestTexture().coordinatesIndex+1}`), YY = !0), (DY.bumpTexture || DY.normalTexture || DY.geometryNormalTexture) && PY.c.BumpTextureEnabled) {
            const rY = DY.bumpTexture || DY.normalTexture || DY.geometryNormalTexture;
            FY.push("#define BUMP"), FY.push(`#define BUMP_UV${rY.coordinatesIndex+1}`), YY = !0
          }
          if (this._enableReflectivity) {
            let rY = !1;
            if ("PBRMetallicRoughnessMaterial" === DY.getClassName()) DY.metallicRoughnessTexture && (FY.push("#define ORMTEXTURE"), FY.push(`#define REFLECTIVITY_UV${DY.metallicRoughnessTexture.coordinatesIndex+1}`), FY.push("#define METALLICWORKFLOW"), YY = !0, rY = !0), null != DY.metallic && (FY.push("#define METALLIC"), FY.push("#define METALLICWORKFLOW"), rY = !0), null != DY.roughness && (FY.push("#define ROUGHNESS"), FY.push("#define METALLICWORKFLOW"), rY = !0), rY && (DY.baseTexture && (FY.push("#define ALBEDOTEXTURE"), FY.push(`#define ALBEDO_UV${DY.baseTexture.coordinatesIndex+1}`), DY.baseTexture.gammaSpace && FY.push("#define GAMMAALBEDO"), YY = !0), DY.baseColor && FY.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === DY.getClassName()) DY.specularGlossinessTexture ? (FY.push("#define SPECULARGLOSSINESSTEXTURE"), FY.push(`#define REFLECTIVITY_UV${DY.specularGlossinessTexture.coordinatesIndex+1}`), YY = !0, DY.specularGlossinessTexture.gammaSpace && FY.push("#define GAMMAREFLECTIVITYTEXTURE")) : DY.specularColor && FY.push("#define REFLECTIVITYCOLOR"), null != DY.glossiness && FY.push("#define GLOSSINESS");
            else if ("PBRMaterial" === DY.getClassName()) DY.metallicTexture && (FY.push("#define ORMTEXTURE"), FY.push(`#define REFLECTIVITY_UV${DY.metallicTexture.coordinatesIndex+1}`), FY.push("#define METALLICWORKFLOW"), YY = !0, rY = !0), null != DY.metallic && (FY.push("#define METALLIC"), FY.push("#define METALLICWORKFLOW"), rY = !0), null != DY.roughness && (FY.push("#define ROUGHNESS"), FY.push("#define METALLICWORKFLOW"), rY = !0), rY ? (DY.albedoTexture && (FY.push("#define ALBEDOTEXTURE"), FY.push(`#define ALBEDO_UV${DY.albedoTexture.coordinatesIndex+1}`), DY.albedoTexture.gammaSpace && FY.push("#define GAMMAALBEDO"), YY = !0), DY.albedoColor && FY.push("#define ALBEDOCOLOR")) : (DY.reflectivityTexture ? (FY.push("#define SPECULARGLOSSINESSTEXTURE"), FY.push(`#define REFLECTIVITY_UV${DY.reflectivityTexture.coordinatesIndex+1}`), DY.reflectivityTexture.gammaSpace && FY.push("#define GAMMAREFLECTIVITYTEXTURE"), YY = !0) : DY.reflectivityColor && FY.push("#define REFLECTIVITYCOLOR"), null != DY.microSurface && FY.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === DY.getClassName()) DY.specularTexture && (FY.push("#define REFLECTIVITYTEXTURE"), FY.push(`#define REFLECTIVITY_UV${DY.specularTexture.coordinatesIndex+1}`), DY.specularTexture.gammaSpace && FY.push("#define GAMMAREFLECTIVITYTEXTURE"), YY = !0), DY.specularColor && FY.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === DY.getClassName()) {
              const rY = DY;
              FY.push("#define METALLIC"), FY.push("#define ROUGHNESS"), rY._useRoughnessFromMetallicTextureGreen && rY.baseMetalnessTexture ? (FY.push("#define ORMTEXTURE"), FY.push(`#define REFLECTIVITY_UV${rY.baseMetalnessTexture.coordinatesIndex+1}`), YY = !0) : rY.baseMetalnessTexture ? (FY.push("#define METALLIC_TEXTURE"), FY.push(`#define METALLIC_UV${rY.baseMetalnessTexture.coordinatesIndex+1}`), YY = !0) : rY.specularRoughnessTexture && (FY.push("#define ROUGHNESS_TEXTURE"), FY.push(`#define ROUGHNESS_UV${rY.specularRoughnessTexture.coordinatesIndex+1}`), YY = !0), rY.baseColorTexture && (FY.push("#define ALBEDOTEXTURE"), FY.push(`#define ALBEDO_UV${rY.baseColorTexture.coordinatesIndex+1}`), rY.baseColorTexture.gammaSpace && FY.push("#define GAMMAALBEDO"), YY = !0), rY.baseColor && FY.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (FY.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === DY.getClassName())) {
            const rY = DY;
            rY.subsurfaceWeight > 0 && rY.subsurfaceWeightTexture && (FY.push("#define SUBSURFACE_WEIGHT"), FY.push(`#define SUBSURFACEWEIGHT_UV${rY.subsurfaceWeightTexture.coordinatesIndex+1}`), YY = !0), rY.transmissionWeight > 0 && rY.transmissionWeightTexture && (FY.push("#define TRANSMISSION_WEIGHT"), FY.push(`#define TRANSMISSIONWEIGHT_UV${rY.transmissionWeightTexture.coordinatesIndex+1}`), YY = !0)
          }
          YY && (FY.push("#define NEED_UV"), IY.isVerticesDataPresent(MY.l.UVKind) && (AY.push(MY.l.UVKind), FY.push("#define UV1"), RY = !0), IY.isVerticesDataPresent(MY.l.UV2Kind) && (AY.push(MY.l.UV2Kind), FY.push("#define UV2"), OY = !0))
        }
        if (this._enableDepth && (FY.push("#define DEPTH"), FY.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (FY.push("#define NORMAL"), FY.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (FY.push("#define POSITION"), FY.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (FY.push("#define VELOCITY"), FY.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(IY) && FY.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (FY.push("#define VELOCITY_LINEAR"), FY.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(IY) && FY.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (FY.push("#define REFLECTIVITY"), FY.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (FY.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), FY.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          FY.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), FY.push("#define IRRADIANCE");
          const YY = this._scene;
          if (YY.environmentTexture) {
            const rY = {};
            let AY = !1,
              IY = 0;
            "OpenPBRMaterial" !== DY.getClassName() && "StandardMaterial" !== DY.getClassName() && "PBRMetallicRoughnessMaterial" !== DY.getClassName() && "PBRSpecularGlossinessMaterial" !== DY.getClassName() && "PBRMaterial" !== DY.getClassName() || (AY = !!DY.realtimeFiltering, IY = DY.realtimeFilteringQuality || 0), (0, LY.$)(YY, YY.environmentTexture, rY, AY, IY, !0);
            for (const YY in rY) rY[YY] && FY.push("#define " + YY);
            rY.USEIRRADIANCEMAP || FY.push("#define SPHERICAL_HARMONICS");
            const RY = YY.postProcessRenderPipelineManager.supportedPipelines.find((YY => "IBLShadowsRenderPipeline" === YY.getClassName()));
            if (RY) {
              const YY = RY;
              YY._getAccumulatedTexture() && (FY.push("#define IBL_SHADOW_TEXTURE"), YY.coloredShadows && FY.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (FY.push("#define OBJECT_ID"), FY.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (FY.push("#define MESH_BLEND_TAG"), FY.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && FY.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && FY.push("#define ENCODE_NORMAL"), IY.useBones && IY.computeBonesUsingShaders && IY.skeleton ? (AY.push(MY.l.MatricesIndicesKind), AY.push(MY.l.MatricesWeightsKind), IY.numBoneInfluencers > 4 && (AY.push(MY.l.MatricesIndicesExtraKind), AY.push(MY.l.MatricesWeightsExtraKind)), FY.push("#define NUM_BONE_INFLUENCERS " + IY.numBoneInfluencers), FY.push("#define BONETEXTURE " + IY.skeleton.isUsingTextureForMatrices), FY.push("#define BonesPerMesh " + (IY.skeleton.bones.length + 1))) : (FY.push("#define NUM_BONE_INFLUENCERS 0"), FY.push("#define BONETEXTURE false"), FY.push("#define BonesPerMesh 0"));
        const gY = IY.morphTargetManager ? (0, LY.U)(IY.morphTargetManager, FY, AY, IY, !0, !0, !1, RY, OY, !1) : 0;
        rY && (FY.push("#define INSTANCES"), (0, LY.tb)(AY, this._enableVelocity || this._enableVelocityLinear), YY.getRenderingMesh().hasThinInstances && FY.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? FY.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : FY.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, vr.e)(DY, this._scene, FY);
        const aY = this._scene.ky(),
          vY = YY._getDrawWrapper(void 0, !0),
          uY = vY.defines,
          sY = FY.join("\n");
        return uY !== sY && vY.setEffect(aY.createEffect("geometry", {
          attributes: AY,
          uniformsNames: Mr,
          samplers: Jr,
          defines: sY,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: gY
          },
          shaderLanguage: this.shaderLanguage
        }, aY), sY), vY.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(YY) {
        if (this._enableObjectId && 1 !== YY) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== YY) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = YY
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.ky().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.LQ.ky()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.LQ.ky().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const YY = [],
          rY = [];
        let DY = 0;
        return this._enableDepth && (this._depthIndex = DY, DY++, YY.push("gBuffer_Depth"), rY.push(this._textureTypesAndFormats[wr.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = DY, DY++, YY.push("gBuffer_Normal"), rY.push(this._textureTypesAndFormats[wr.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = DY, DY++, YY.push("gBuffer_Position"), rY.push(this._textureTypesAndFormats[wr.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = DY, DY++, YY.push("gBuffer_Velocity"), rY.push(this._textureTypesAndFormats[wr.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = DY, DY++, YY.push("gBuffer_VelocityLinear"), rY.push(this._textureTypesAndFormats[wr.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = DY, DY++, YY.push("gBuffer_Reflectivity"), rY.push(this._textureTypesAndFormats[wr.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = DY, DY++, YY.push("gBuffer_ScreenspaceDepth"), rY.push(this._textureTypesAndFormats[wr.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = DY, DY++, YY.push("gBuffer_Irradiance"), rY.push(this._textureTypesAndFormats[wr.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = DY, DY++, YY.push("gBuffer_ObjectId"), rY.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = DY, DY++, YY.push("gBuffer_MeshBlendTag"), rY.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [DY, YY, rY]
      }
      _createRenderTargets() {
        const YY = this._scene.ky(),
          [rY, DY, FY] = this._assignRenderTargetIndices(),
          AY = Math.min(YY.getCaps().maxDrawBuffers ?? 1, 8);
        if (YY.getCaps().drawBuffersExtension && rY > AY) throw new Error(`GeometryBufferRenderer: ${rY} color attachments were requested, but this engine supports at most ${AY}`);
        let RY = 0;
        YY._caps.textureFloat && YY._caps.textureFloatLinearFiltering ? RY = 1 : YY._caps.textureHalfFloat && YY._caps.textureHalfFloatLinearFiltering && (RY = 2);
        const OY = this._getRenderTargetDimensions(),
          gY = [],
          aY = [],
          vY = [];
        for (const IY of FY) IY ? (gY.push(IY.textureType), aY.push(IY.textureFormat), vY.push(IY.samplingMode ?? 2)) : (gY.push(RY), aY.push(5), vY.push(2));
        if (this._normalsAreUnsigned = 11 === gY[wr.NORMAL_TEXTURE_TYPE] || 13 === gY[wr.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Cr("gBuffer", OY, rY, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: gY,
            formats: aY,
            samplingModes: vY,
            depthTextureFormat: this._depthFormat
          }, DY.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = HY.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = HY.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const uY = [!0],
          sY = [!1],
          iY = [!0];
        for (let IY = 1; IY < rY; ++IY) uY.push(!0), iY.push(!1), sY.push(!0);
        const yY = YY.buildTextureLayout(uY),
          QY = YY.buildTextureLayout(sY),
          oY = YY.buildTextureLayout(iY);
        this._multiRenderTarget.onClearObservable.add((YY => {
          const rY = this.useSpecificClearForDepthTexture ? QY : yY;
          YY.clearAttachments(this._clearColor, rY, !0, !0, !0), this.useSpecificClearForDepthTexture && YY.clearAttachments(this._clearDepthColor, oY, !0, !1, !1), YY.bindAttachments(yY)
        })), this._resizeObserver = YY.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const WY = YY => {
          const rY = YY.getRenderingMesh(),
            DY = YY.getEffectiveMesh(),
            FY = this._scene,
            AY = FY.ky(),
            RY = YY.Uy();
          if (!RY) return;
          if (DY._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[DY.uniqueId] && (this._previousTransformationMatrices[DY.uniqueId] = {
              Mu: JY.e.Identity(),
              viewProjection: FY.getTransformMatrix()
            }, rY.skeleton)) {
            const YY = rY.skeleton.getTransformMatrices(rY);
            this._previousBonesTransformationMatrices[rY.uniqueId] = this._copyBonesTransformationMatrices(YY, new Float32Array(YY.length))
          }
          const OY = rY._getInstancesRenderList(YY._id, !!YY.getReplacementMesh());
          if (OY.mustReturn) return;
          const gY = AY.getCaps().instancedArrays && (null !== OY.visibleInstances[YY._id] || rY.hasThinInstances),
            aY = DY.getWorldMatrix();
          if (this.isReady(YY, gY)) {
            const vY = YY._getDrawWrapper();
            if (!vY) return;
            const uY = vY.effect;
            let sY;
            AY.enableEffect(vY), gY || rY._bind(YY, uY, RY.fillMode), this._useUbo ? ((0, LY.x)(uY, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (uY.setMatrix("viewProjection", FY.getTransformMatrix()), uY.setMatrix("view", FY.getViewMatrix()), this._scene.bindEyePosition(uY, "vEyePosition"));
            if (rY._instanceDataStorage.isFrozen || !RY.backFaceCulling && null === RY.sideOrientation) sY = rY._effectiveSideOrientation;
            else {
              const YY = DY._getWorldMatrixDeterminant();
              sY = RY._getEffectiveOrientation(rY), YY < 0 && (sY = sY === IY.c.ClockWiseSideOrientation ? IY.c.CounterClockWiseSideOrientation : IY.c.ClockWiseSideOrientation)
            }
            if (RY._preBind(vY, sY), RY.needAlphaTestingForMesh(DY)) {
              const YY = RY.getAlphaTestTexture();
              YY && (uY.setTexture("diffuseSampler", YY), uY.setMatrix("diffuseMatrix", YY.getTextureMatrix()), uY.setFloat("alphaCutOff", RY.alphaCutOff ?? .4))
            }
            if ((RY.bumpTexture || RY.normalTexture || RY.geometryNormalTexture) && FY.ky().getCaps().standardDerivatives && PY.c.BumpTextureEnabled) {
              const YY = RY.bumpTexture || RY.normalTexture || RY.geometryNormalTexture;
              uY.setFloat3("vBumpInfos", YY.coordinatesIndex, 1 / YY.level, RY.parallaxScaleBias), uY.setMatrix("bumpMatrix", YY.getTextureMatrix()), uY.setTexture("bumpSampler", YY), uY.setFloat2("vTangentSpaceParams", RY.invertNormalMapX ? -1 : 1, RY.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === RY.getClassName()) null !== RY.metallicRoughnessTexture && (uY.setTexture("reflectivitySampler", RY.metallicRoughnessTexture), uY.setMatrix("reflectivityMatrix", RY.metallicRoughnessTexture.getTextureMatrix())), null !== RY.metallic && uY.setFloat("metallic", RY.metallic), null !== RY.roughness && uY.setFloat("glossiness", 1 - RY.roughness), null !== RY.baseTexture && (uY.setTexture("albedoSampler", RY.baseTexture), uY.setMatrix("albedoMatrix", RY.baseTexture.getTextureMatrix())), null !== RY.baseColor && uY.setColor3("albedoColor", RY.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === RY.getClassName()) null !== RY.specularGlossinessTexture ? (uY.setTexture("reflectivitySampler", RY.specularGlossinessTexture), uY.setMatrix("reflectivityMatrix", RY.specularGlossinessTexture.getTextureMatrix())) : null !== RY.specularColor && uY.setColor3("reflectivityColor", RY.specularColor), null !== RY.glossiness && uY.setFloat("glossiness", RY.glossiness);
            else if ("PBRMaterial" === RY.getClassName()) null !== RY.metallicTexture && (uY.setTexture("reflectivitySampler", RY.metallicTexture), uY.setMatrix("reflectivityMatrix", RY.metallicTexture.getTextureMatrix())), null !== RY.metallic && uY.setFloat("metallic", RY.metallic), null !== RY.roughness && uY.setFloat("glossiness", 1 - RY.roughness), null !== RY.roughness || null !== RY.metallic || null !== RY.metallicTexture ? (null !== RY.albedoTexture && (uY.setTexture("albedoSampler", RY.albedoTexture), uY.setMatrix("albedoMatrix", RY.albedoTexture.getTextureMatrix())), null !== RY.albedoColor && uY.setColor3("albedoColor", RY.albedoColor)) : (null !== RY.reflectivityTexture ? (uY.setTexture("reflectivitySampler", RY.reflectivityTexture), uY.setMatrix("reflectivityMatrix", RY.reflectivityTexture.getTextureMatrix())) : null !== RY.reflectivityColor && uY.setColor3("reflectivityColor", RY.reflectivityColor), null !== RY.microSurface && uY.setFloat("glossiness", RY.microSurface));
            else if ("StandardMaterial" === RY.getClassName()) null !== RY.specularTexture && (uY.setTexture("reflectivitySampler", RY.specularTexture), uY.setMatrix("reflectivityMatrix", RY.specularTexture.getTextureMatrix())), null !== RY.specularColor && uY.setColor3("reflectivityColor", RY.specularColor);
            else if ("OpenPBRMaterial" === RY.getClassName()) {
              const YY = RY;
              YY._useRoughnessFromMetallicTextureGreen && YY.baseMetalnessTexture ? (uY.setTexture("reflectivitySampler", YY.baseMetalnessTexture), uY.setMatrix("reflectivityMatrix", YY.baseMetalnessTexture.getTextureMatrix())) : YY.baseMetalnessTexture ? (uY.setTexture("metallicSampler", YY.baseMetalnessTexture), uY.setMatrix("metallicMatrix", YY.baseMetalnessTexture.getTextureMatrix())) : YY.specularRoughnessTexture && (uY.setTexture("roughnessSampler", YY.specularRoughnessTexture), uY.setMatrix("roughnessMatrix", YY.specularRoughnessTexture.getTextureMatrix())), uY.setFloat("metallic", YY.baseMetalness), uY.setFloat("glossiness", 1 - YY.specularRoughness), null !== YY.baseColorTexture && (uY.setTexture("albedoSampler", YY.baseColorTexture), uY.setMatrix("albedoMatrix", YY.baseColorTexture.getTextureMatrix())), null !== YY.baseColor && uY.setColor3("albedoColor", YY.baseColor)
            }
            if (this._enableIrradiance && FY.environmentTexture) {
              const YY = FY.environmentTexture,
                rY = FY.postProcessRenderPipelineManager.supportedPipelines.find((YY => "IBLShadowsRenderPipeline" === YY.getClassName()));
              if (rY) {
                const YY = rY._getAccumulatedTexture();
                YY && (uY.setTexture("iblShadowSampler", YY), uY.setFloat2("shadowTextureSize", YY.getSize().width, YY.getSize().height))
              }
              if (uY.setMatrix("reflectionMatrix", YY.getReflectionTextureMatrix()), uY.setFloat2("vReflectionInfos", YY.level * FY.iblIntensity, 0), uY.setTexture("reflectionSampler", YY), YY.irradianceTexture && (uY.setTexture("irradianceSampler", YY.irradianceTexture), YY.irradianceTexture._dominantDirection && uY.setVector3("vReflectionDominantDirection", YY.irradianceTexture._dominantDirection)), YY.sphericalPolynomial) {
                const rY = YY.sphericalPolynomial;
                if (rY.preScaledHarmonics) {
                  const YY = rY.preScaledHarmonics;
                  uY.setVector3("vSphericalL00", YY.l00), uY.setVector3("vSphericalL1_1", YY.l1_1), uY.setVector3("vSphericalL10", YY.l10), uY.setVector3("vSphericalL11", YY.l11), uY.setVector3("vSphericalL2_2", YY.l2_2), uY.setVector3("vSphericalL2_1", YY.l2_1), uY.setVector3("vSphericalL20", YY.l20), uY.setVector3("vSphericalL21", YY.l21), uY.setVector3("vSphericalL22", YY.l22)
                } else uY.setFloat3("vSphericalX", rY.x.x, rY.x.y, rY.x.z), uY.setFloat3("vSphericalY", rY.y.x, rY.y.y, rY.y.z), uY.setFloat3("vSphericalZ", rY.z.x, rY.z.y, rY.z.z), uY.setFloat3("vSphericalXX_ZZ", rY.xx.x - rY.zz.x, rY.xx.y - rY.zz.y, rY.xx.z - rY.zz.z), uY.setFloat3("vSphericalYY_ZZ", rY.yy.x - rY.zz.x, rY.yy.y - rY.zz.y, rY.yy.z - rY.zz.z), uY.setFloat3("vSphericalZZ", rY.zz.x, rY.zz.y, rY.zz.z), uY.setFloat3("vSphericalXY", rY.xy.x, rY.xy.y, rY.xy.z), uY.setFloat3("vSphericalYZ", rY.yz.x, rY.yz.y, rY.yz.z), uY.setFloat3("vSphericalZX", rY.zx.x, rY.zx.y, rY.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === RY.getClassName()) {
                const YY = RY;
                uY.setFloat("vSubsurfaceWeight", YY.subsurfaceWeight), YY.subsurfaceWeightTexture && (uY.setTexture("subsurfaceWeightSampler", YY.subsurfaceWeightTexture), uY.setMatrix("subsurfaceWeightMatrix", YY.subsurfaceWeightTexture.getTextureMatrix())), uY.setFloat("vTransmissionWeight", YY.transmissionWeight), YY.transmissionWeightTexture && (uY.setTexture("transmissionWeightSampler", YY.transmissionWeightTexture), uY.setMatrix("transmissionWeightMatrix", YY.transmissionWeightTexture.getTextureMatrix())), uY.setFloat("vTransmissionScatterAnisotropy", YY.transmissionScatterAnisotropy), uY.setFloat("vSubsurfaceScatterAnisotropy", YY.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, vr.c)(uY, RY, this._scene), rY.useBones && rY.computeBonesUsingShaders && rY.skeleton) {
              const YY = rY.skeleton;
              if (YY.isUsingTextureForMatrices && uY.getUniformIndex("boneTextureInfo") > -1) {
                const DY = YY.getTransformMatrixTexture(rY);
                uY.setTexture("boneSampler", DY), uY.setFloat2("boneTextureInfo", YY._textureWidth, YY._textureHeight)
              } else uY.setMatrices("mBones", rY.skeleton.getTransformMatrices(rY));
              (this._enableVelocity || this._enableVelocityLinear) && uY.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[rY.uniqueId])
            }
            if ((0, LY.v)(rY, uY), rY.morphTargetManager && rY.morphTargetManager.isUsingTextureForTargets && rY.morphTargetManager._bind(uY), (this._enableVelocity || this._enableVelocityLinear) && (uY.setMatrix("previousWorld", this._previousTransformationMatrices[DY.uniqueId].Mu), uY.setMatrix("previousViewProjection", this._previousTransformationMatrices[DY.uniqueId].viewProjection)), this._enableObjectId) {
              let YY = rY.uniqueId;
              if (this.objectIdProvider) YY = (0, ir.k)(rY, this.objectIdProvider);
              else if (YY > 16777215) throw new Error(`Invalid geometry object ID ${YY} for mesh "${rY.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              uY.setFloat("objectId", YY)
            }
            if (this._enableMeshBlendTag) {
              const YY = this.meshBlendTagProvider ? (0, ir.g)(rY, this.meshBlendTagProvider) : rY.meshBlendingTag;
              uY.setInt("meshBlendTag", YY)
            }
            gY && rY.hasThinInstances && uY.setMatrix("world", aY), rY._processRendering(DY, YY, uY, RY.fillMode, OY, gY, ((YY, rY) => {
              YY || uY.setMatrix("world", rY)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[DY.uniqueId].Mu = aY.clone(), this._previousTransformationMatrices[DY.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), rY.skeleton && this._copyBonesTransformationMatrices(rY.skeleton.getTransformMatrices(rY), this._previousBonesTransformationMatrices[DY.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (rY, DY, FY) => {
          if ((FY || 0 === DY) && rY.qm)
            for (let AY = 0; AY < rY.qm.length; ++AY) {
              const DY = rY.qm[AY],
                FY = DY.Uy(),
                IY = DY.getRenderingMesh();
              if (!FY) continue;
              const RY = IY._getInstancesRenderList(DY._id, !!DY.getReplacementMesh()),
                OY = YY.getCaps().instancedArrays && (null !== RY.visibleInstances[DY._id] || IY.hasThinInstances);
              if (!this.isReady(DY, OY)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (rY, DY, FY, AY) => {
          let IY;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.ky().bindAttachments(this._attachmentsFromPrePass)
          }
          if (AY.length) {
            for (YY.setColorWrite(!1), IY = 0; IY < AY.length; IY++) WY(AY.data[IY]);
            YY.setColorWrite(!0)
          }
          for (IY = 0; IY < rY.length; IY++) WY(rY.data[IY]);
          for (YY.setDepthWrite(!1), IY = 0; IY < DY.length; IY++) WY(DY.data[IY]);
          if (this.renderTransparentMeshes)
            for (IY = 0; IY < FY.length; IY++) WY(FY.data[IY]);
          YY.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const YY = this._scene.ky();
        return {
          width: Math.max(1, Math.floor(YY.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(YY.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(YY, rY) {
        for (let DY = 0; DY < YY.length; DY++) rY[DY] = YY[DY];
        return rY
      }
    }
    wr.ForceGLSL = !1, wr.DEPTH_TEXTURE_TYPE = 0, wr.NORMAL_TEXTURE_TYPE = 1, wr.POSITION_TEXTURE_TYPE = 2, wr.VELOCITY_TEXTURE_TYPE = 3, wr.REFLECTIVITY_TEXTURE_TYPE = 4, wr.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, wr.VELOCITY_LINEAR_TEXTURE_TYPE = 6, wr.IRRADIANCE_TEXTURE_TYPE = 7, wr.OBJECT_ID_TEXTURE_TYPE = 8, wr.MESH_BLEND_TAG_TEXTURE_TYPE = 9, wr._SceneComponentInitialization = YY => {
      throw (0, Wr.i)("GeometryBufferRendererSceneComponent")
    };
    var br = DY(36569);
    const Xr = {
      effect: null,
      subMesh: null
    };

    function qr(YY) {
      if ("number" === typeof YY) return 1;
      if (YY instanceof JY.q) return 2;
      if (YY instanceof JY.r || YY instanceof kY.c) return 3;
      if (YY instanceof JY.v || YY instanceof kY.d) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class pr {
      populateVectorFromLinkedProperties(YY) {
        const rY = qr(YY);
        for (const DY in this.linkedProperties) {
          const YY = this.linkedProperties[DY],
            FY = YY.numComponents;
          if (rY < FY || YY.targetUniformComponentOffset > rY - FY) return void(1 == FY ? cY.d.Error(`Float property ${YY.name} has an offset that is too large.`) : cY.d.Error(`Vector${FY} property ${YY.name} won't fit in Vector${rY} or has an offset that is too large.`));
          "number" === typeof YY.value ? pr._tmpArray[YY.targetUniformComponentOffset] = YY.value : YY.value.toArray(pr._tmpArray, YY.targetUniformComponentOffset)
        }
        YY.grY(pr._tmpArray)
      }
      constructor(YY, rY) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = YY, this.numComponents = rY
      }
    }
    pr._tmpArray = [0, 0, 0, 0];
    class kr {
      constructor(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          IY = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = YY, this.targetUniformName = DY, this.defaultValue = rY, this.value = rY, this.targetUniformComponentNum = FY, this.targetUniformComponentOffset = AY, this.requiredDefine = IY
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : qr(this.defaultValue)
      }
    }
    class Gr {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(YY, rY, DY) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = YY, this.samplerPrefix = rY, this.textureDefine = DY
      }
    }
    class xr extends((0, Qr.c)((0, yr.e)(wY.e))) {}
    class nr extends(function(YY) {
      return class extends YY {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(xr)) {}
    class Pr extends((0, GY.h)(nr)) {
      constructor(YY) {
        super(YY), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class Ur extends((0, or.d)(nY.e)) {}
    let Lr = (() => {
        var YY, rY, FY, AY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, zY, ZY, CY, fY, dY, wY, bY, XY, qY, GY, nY, tY, Yr, rr, Dr, Fr, Ar, Ir, Rr, Or, gr, ar, yr, Qr, or, Wr, Er, mr, Vr, Sr, lr, Nr, Br, cr, Kr, Hr, zr, Zr, Cr, fr, jr, hr, dr, Jr, Mr, br, qr, xr, nr, Lr, tr, YD, rD, DD, FD, AD, ID, RD, OD, gD, aD, vD, uD, sD, iD, yD, QD, oD, WD, ED, mD, VD, SD, lD, TD, eD, ND, BD, cD, KD;
        let HD, zD, ZD, CD, fD, jD, hD, dD, JD, MD, wD, bD, XD, qD, pD, kD, GD, xD, nD, PD, UD, LD, tD, YF, rF, DF, FF, AF, IF, RF, OF, gF, aF, vF, uF, sF, iF, yF, QF, oF, WF, EF, mF, VF, SF, lF, TF, eF, NF, BF, cF, KF, HF, zF, ZF, CF, fF, jF, hF, dF, JF, MF, wF, bF, XF, qF, pF, kF, GF, xF, nF, PF, UF, LF, tF, YA, rA, DA, FA, AA, IA, RA, OA, gA, aA, vA, uA, sA, iA, yA, QA, oA, WA, EA, mA, VA, SA, lA, TA, eA, NA, BA, cA, KA, HA, zA = Ur,
          ZA = [],
          CA = [],
          fA = [],
          jA = [],
          hA = [],
          dA = [],
          JA = [],
          MA = [],
          wA = [],
          bA = [],
          XA = [],
          qA = [],
          pA = [],
          kA = [],
          GA = [],
          xA = [],
          nA = [],
          PA = [],
          UA = [],
          LA = [],
          tA = [],
          YI = [],
          rI = [],
          DI = [],
          FI = [],
          AI = [],
          II = [],
          RI = [],
          OI = [],
          gI = [],
          aI = [],
          vI = [],
          uI = [],
          sI = [],
          iI = [],
          yI = [],
          QI = [],
          oI = [],
          WI = [],
          EI = [],
          mI = [],
          VI = [],
          SI = [],
          lI = [],
          TI = [],
          eI = [],
          NI = [],
          BI = [],
          cI = [],
          KI = [],
          HI = [],
          zI = [],
          ZI = [],
          CI = [],
          fI = [],
          jI = [],
          hI = [],
          dI = [],
          JI = [],
          MI = [],
          wI = [],
          bI = [],
          XI = [],
          qI = [],
          pI = [],
          kI = [],
          GI = [],
          xI = [],
          nI = [],
          PI = [],
          UI = [],
          LI = [],
          tI = [],
          YR = [],
          rR = [],
          DR = [],
          FR = [],
          AR = [],
          IR = [],
          RR = [],
          OR = [],
          gR = [],
          aR = [],
          vR = [],
          uR = [],
          sR = [],
          iR = [],
          yR = [],
          QR = [],
          oR = [],
          WR = [],
          ER = [],
          mR = [],
          VR = [],
          SR = [],
          lR = [],
          TR = [],
          eR = [],
          NR = [],
          BR = [],
          cR = [],
          KR = [],
          HR = [],
          zR = [],
          ZR = [],
          CR = [],
          fR = [],
          jR = [],
          hR = [],
          dR = [],
          JR = [],
          MR = [],
          wR = [],
          bR = [],
          XR = [],
          qR = [],
          pR = [],
          kR = [],
          GR = [],
          xR = [],
          nR = [],
          PR = [],
          UR = [],
          LR = [],
          tR = [],
          YO = [],
          rO = [],
          DO = [],
          FO = [],
          AO = [],
          IO = [],
          RO = [],
          OO = [],
          gO = [],
          aO = [],
          vO = [],
          uO = [],
          sO = [],
          iO = [],
          yO = [],
          QO = [],
          oO = [],
          WO = [],
          EO = [],
          mO = [],
          VO = [],
          SO = [],
          lO = [],
          TO = [],
          eO = [],
          NO = [],
          BO = [],
          cO = [],
          KO = [],
          HO = [],
          zO = [],
          ZO = [],
          CO = [],
          fO = [],
          jO = [],
          hO = [],
          dO = [],
          JO = [],
          MO = [],
          wO = [],
          bO = [],
          XO = [],
          qO = [],
          pO = [],
          kO = [],
          GO = [],
          xO = [],
          nO = [],
          PO = [],
          UO = [],
          LO = [],
          tO = [],
          Yg = [],
          rg = [],
          Dg = [],
          Fg = [],
          Ag = [],
          Ig = [],
          Rg = [],
          Og = [],
          gg = [],
          ag = [],
          vg = [],
          ug = [],
          sg = [],
          ig = [],
          yg = [],
          Qg = [],
          og = [],
          Wg = [],
          Eg = [],
          mg = [],
          Vg = [],
          Sg = [],
          lg = [],
          Tg = [],
          eg = [],
          Ng = [],
          Bg = [],
          cg = [];
        return YY = class extends zA {
          get baseWeight() {
            return (0, NY.d)(this, rY, "f")
          }
          set baseWeight(YY) {
            (0, NY.g)(this, rY, YY, "f")
          }
          get baseWeightTexture() {
            return (0, NY.d)(this, FY, "f")
          }
          set baseWeightTexture(YY) {
            (0, NY.g)(this, FY, YY, "f")
          }
          get baseColor() {
            return (0, NY.d)(this, AY, "f")
          }
          set baseColor(YY) {
            (0, NY.g)(this, AY, YY, "f")
          }
          get baseColorTexture() {
            return (0, NY.d)(this, RY, "f")
          }
          set baseColorTexture(YY) {
            (0, NY.g)(this, RY, YY, "f")
          }
          get baseDiffuseRoughness() {
            return (0, NY.d)(this, OY, "f")
          }
          set baseDiffuseRoughness(YY) {
            (0, NY.g)(this, OY, YY, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, NY.d)(this, gY, "f")
          }
          set baseDiffuseRoughnessTexture(YY) {
            (0, NY.g)(this, gY, YY, "f")
          }
          get baseMetalness() {
            return (0, NY.d)(this, aY, "f")
          }
          set baseMetalness(YY) {
            (0, NY.g)(this, aY, YY, "f")
          }
          get baseMetalnessTexture() {
            return (0, NY.d)(this, vY, "f")
          }
          set baseMetalnessTexture(YY) {
            (0, NY.g)(this, vY, YY, "f")
          }
          get specularWeight() {
            return (0, NY.d)(this, uY, "f")
          }
          set specularWeight(YY) {
            (0, NY.g)(this, uY, YY, "f")
          }
          get specularWeightTexture() {
            return (0, NY.d)(this, sY, "f")
          }
          set specularWeightTexture(YY) {
            (0, NY.g)(this, sY, YY, "f")
          }
          get specularColor() {
            return (0, NY.d)(this, iY, "f")
          }
          set specularColor(YY) {
            (0, NY.g)(this, iY, YY, "f")
          }
          get specularColorTexture() {
            return (0, NY.d)(this, yY, "f")
          }
          set specularColorTexture(YY) {
            (0, NY.g)(this, yY, YY, "f")
          }
          get specularRoughness() {
            return (0, NY.d)(this, QY, "f")
          }
          set specularRoughness(YY) {
            (0, NY.g)(this, QY, YY, "f")
          }
          get specularRoughnessTexture() {
            return (0, NY.d)(this, oY, "f")
          }
          set specularRoughnessTexture(YY) {
            (0, NY.g)(this, oY, YY, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, NY.d)(this, WY, "f")
          }
          set specularRoughnessAnisotropy(YY) {
            (0, NY.g)(this, WY, YY, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, NY.d)(this, EY, "f")
          }
          set specularRoughnessAnisotropyTexture(YY) {
            (0, NY.g)(this, EY, YY, "f")
          }
          get specularIor() {
            return (0, NY.d)(this, mY, "f")
          }
          set specularIor(YY) {
            (0, NY.g)(this, mY, YY, "f")
          }
          get transmissionWeight() {
            return (0, NY.d)(this, VY, "f")
          }
          set transmissionWeight(YY) {
            (0, NY.g)(this, VY, YY, "f")
          }
          get transmissionWeightTexture() {
            return (0, NY.d)(this, SY, "f")
          }
          set transmissionWeightTexture(YY) {
            (0, NY.g)(this, SY, YY, "f")
          }
          get transmissionColor() {
            return (0, NY.d)(this, lY, "f")
          }
          set transmissionColor(YY) {
            (0, NY.g)(this, lY, YY, "f")
          }
          get transmissionColorTexture() {
            return (0, NY.d)(this, TY, "f")
          }
          set transmissionColorTexture(YY) {
            (0, NY.g)(this, TY, YY, "f")
          }
          get transmissionDepth() {
            return (0, NY.d)(this, eY, "f")
          }
          set transmissionDepth(YY) {
            (0, NY.g)(this, eY, YY, "f")
          }
          get transmissionDepthTexture() {
            return (0, NY.d)(this, zY, "f")
          }
          set transmissionDepthTexture(YY) {
            (0, NY.g)(this, zY, YY, "f")
          }
          get transmissionScatter() {
            return (0, NY.d)(this, ZY, "f")
          }
          set transmissionScatter(YY) {
            (0, NY.g)(this, ZY, YY, "f")
          }
          get transmissionScatterTexture() {
            return (0, NY.d)(this, CY, "f")
          }
          set transmissionScatterTexture(YY) {
            (0, NY.g)(this, CY, YY, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, NY.d)(this, fY, "f")
          }
          set transmissionScatterAnisotropy(YY) {
            (0, NY.g)(this, fY, YY, "f")
          }
          get transmissionDispersionScale() {
            return (0, NY.d)(this, dY, "f")
          }
          set transmissionDispersionScale(YY) {
            (0, NY.g)(this, dY, YY, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, NY.d)(this, wY, "f")
          }
          set transmissionDispersionScaleTexture(YY) {
            (0, NY.g)(this, wY, YY, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, NY.d)(this, bY, "f")
          }
          set transmissionDispersionAbbeNumber(YY) {
            (0, NY.g)(this, bY, YY, "f")
          }
          get subsurfaceWeight() {
            return (0, NY.d)(this, XY, "f")
          }
          set subsurfaceWeight(YY) {
            (0, NY.g)(this, XY, YY, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, NY.d)(this, qY, "f")
          }
          set subsurfaceWeightTexture(YY) {
            (0, NY.g)(this, qY, YY, "f")
          }
          get subsurfaceColor() {
            return (0, NY.d)(this, GY, "f")
          }
          set subsurfaceColor(YY) {
            (0, NY.g)(this, GY, YY, "f")
          }
          get subsurfaceColorTexture() {
            return (0, NY.d)(this, nY, "f")
          }
          set subsurfaceColorTexture(YY) {
            (0, NY.g)(this, nY, YY, "f")
          }
          get subsurfaceRadius() {
            return (0, NY.d)(this, tY, "f")
          }
          set subsurfaceRadius(YY) {
            (0, NY.g)(this, tY, YY, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, NY.d)(this, Yr, "f")
          }
          set subsurfaceRadiusScale(YY) {
            (0, NY.g)(this, Yr, YY, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, NY.d)(this, rr, "f")
          }
          set subsurfaceRadiusScaleTexture(YY) {
            (0, NY.g)(this, rr, YY, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, NY.d)(this, Dr, "f")
          }
          set subsurfaceScatterAnisotropy(YY) {
            (0, NY.g)(this, Dr, YY, "f")
          }
          get coatWeight() {
            return (0, NY.d)(this, Fr, "f")
          }
          set coatWeight(YY) {
            (0, NY.g)(this, Fr, YY, "f")
          }
          get coatWeightTexture() {
            return (0, NY.d)(this, Ar, "f")
          }
          set coatWeightTexture(YY) {
            (0, NY.g)(this, Ar, YY, "f")
          }
          get coatColor() {
            return (0, NY.d)(this, Ir, "f")
          }
          set coatColor(YY) {
            (0, NY.g)(this, Ir, YY, "f")
          }
          get coatColorTexture() {
            return (0, NY.d)(this, Rr, "f")
          }
          set coatColorTexture(YY) {
            (0, NY.g)(this, Rr, YY, "f")
          }
          get coatRoughness() {
            return (0, NY.d)(this, Or, "f")
          }
          set coatRoughness(YY) {
            (0, NY.g)(this, Or, YY, "f")
          }
          get coatRoughnessTexture() {
            return (0, NY.d)(this, gr, "f")
          }
          set coatRoughnessTexture(YY) {
            (0, NY.g)(this, gr, YY, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, NY.d)(this, ar, "f")
          }
          set coatRoughnessAnisotropy(YY) {
            (0, NY.g)(this, ar, YY, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, NY.d)(this, yr, "f")
          }
          set coatRoughnessAnisotropyTexture(YY) {
            (0, NY.g)(this, yr, YY, "f")
          }
          get coatIor() {
            return (0, NY.d)(this, Qr, "f")
          }
          set coatIor(YY) {
            (0, NY.g)(this, Qr, YY, "f")
          }
          get coatDarkening() {
            return (0, NY.d)(this, or, "f")
          }
          set coatDarkening(YY) {
            (0, NY.g)(this, or, YY, "f")
          }
          get coatDarkeningTexture() {
            return (0, NY.d)(this, Wr, "f")
          }
          set coatDarkeningTexture(YY) {
            (0, NY.g)(this, Wr, YY, "f")
          }
          get fuzzWeight() {
            return (0, NY.d)(this, Er, "f")
          }
          set fuzzWeight(YY) {
            (0, NY.g)(this, Er, YY, "f")
          }
          get fuzzWeightTexture() {
            return (0, NY.d)(this, mr, "f")
          }
          set fuzzWeightTexture(YY) {
            (0, NY.g)(this, mr, YY, "f")
          }
          get fuzzColor() {
            return (0, NY.d)(this, Vr, "f")
          }
          set fuzzColor(YY) {
            (0, NY.g)(this, Vr, YY, "f")
          }
          get fuzzColorTexture() {
            return (0, NY.d)(this, Sr, "f")
          }
          set fuzzColorTexture(YY) {
            (0, NY.g)(this, Sr, YY, "f")
          }
          get fuzzRoughness() {
            return (0, NY.d)(this, lr, "f")
          }
          set fuzzRoughness(YY) {
            (0, NY.g)(this, lr, YY, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, NY.d)(this, Nr, "f")
          }
          set fuzzRoughnessTexture(YY) {
            (0, NY.g)(this, Nr, YY, "f")
          }
          get geometryThinWalled() {
            return (0, NY.d)(this, Br, "f")
          }
          set geometryThinWalled(YY) {
            (0, NY.g)(this, Br, YY, "f")
          }
          get geometryNormalTexture() {
            return (0, NY.d)(this, cr, "f")
          }
          set geometryNormalTexture(YY) {
            (0, NY.g)(this, cr, YY, "f")
          }
          get geometryTangent() {
            return (0, NY.d)(this, Kr, "f")
          }
          set geometryTangent(YY) {
            (0, NY.g)(this, Kr, YY, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(YY) {
            this.geometryTangent = new JY.q(Math.cos(YY), Math.sin(YY))
          }
          get geometryTangentTexture() {
            return (0, NY.d)(this, Hr, "f")
          }
          set geometryTangentTexture(YY) {
            (0, NY.g)(this, Hr, YY, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, NY.d)(this, zr, "f")
          }
          set geometryCoatNormalTexture(YY) {
            (0, NY.g)(this, zr, YY, "f")
          }
          get geometryCoatTangent() {
            return (0, NY.d)(this, Zr, "f")
          }
          set geometryCoatTangent(YY) {
            (0, NY.g)(this, Zr, YY, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(YY) {
            this.geometryCoatTangent = new JY.q(Math.cos(YY), Math.sin(YY))
          }
          get geometryCoatTangentTexture() {
            return (0, NY.d)(this, Cr, "f")
          }
          set geometryCoatTangentTexture(YY) {
            (0, NY.g)(this, Cr, YY, "f")
          }
          get geometryOpacity() {
            return (0, NY.d)(this, fr, "f")
          }
          set geometryOpacity(YY) {
            (0, NY.g)(this, fr, YY, "f")
          }
          get geometryOpacityTexture() {
            return (0, NY.d)(this, jr, "f")
          }
          set geometryOpacityTexture(YY) {
            (0, NY.g)(this, jr, YY, "f")
          }
          get geometryThickness() {
            return (0, NY.d)(this, hr, "f")
          }
          set geometryThickness(YY) {
            (0, NY.g)(this, hr, YY, "f")
          }
          get geometryThicknessTexture() {
            return (0, NY.d)(this, dr, "f")
          }
          set geometryThicknessTexture(YY) {
            (0, NY.g)(this, dr, YY, "f")
          }
          get emissionLuminance() {
            return (0, NY.d)(this, Jr, "f")
          }
          set emissionLuminance(YY) {
            (0, NY.g)(this, Jr, YY, "f")
          }
          get emissionColor() {
            return (0, NY.d)(this, Mr, "f")
          }
          set emissionColor(YY) {
            (0, NY.g)(this, Mr, YY, "f")
          }
          get emissionColorTexture() {
            return (0, NY.d)(this, br, "f")
          }
          set emissionColorTexture(YY) {
            (0, NY.g)(this, br, YY, "f")
          }
          get thinFilmWeight() {
            return (0, NY.d)(this, qr, "f")
          }
          set thinFilmWeight(YY) {
            (0, NY.g)(this, qr, YY, "f")
          }
          get thinFilmWeightTexture() {
            return (0, NY.d)(this, xr, "f")
          }
          set thinFilmWeightTexture(YY) {
            (0, NY.g)(this, xr, YY, "f")
          }
          get thinFilmThickness() {
            return (0, NY.d)(this, nr, "f")
          }
          set thinFilmThickness(YY) {
            (0, NY.g)(this, nr, YY, "f")
          }
          get thinFilmThicknessMin() {
            return (0, NY.d)(this, Lr, "f")
          }
          set thinFilmThicknessMin(YY) {
            (0, NY.g)(this, Lr, YY, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, NY.d)(this, tr, "f")
          }
          set thinFilmThicknessTexture(YY) {
            (0, NY.g)(this, tr, YY, "f")
          }
          get thinFilmIor() {
            return (0, NY.d)(this, YD, "f")
          }
          set thinFilmIor(YY) {
            (0, NY.g)(this, YD, YY, "f")
          }
          get ambientOcclusionTexture() {
            return (0, NY.d)(this, rD, "f")
          }
          set ambientOcclusionTexture(YY) {
            (0, NY.g)(this, rD, YY, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(YY) {
            this._sssQuality !== YY && (this._sssQuality = YY, this.nYY(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(YY) {
            this._sssIrradianceTexture !== YY && (this._sssIrradianceTexture = YY, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(YY) {
            this._sssDepthTexture !== YY && (this._sssDepthTexture = YY, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, NY.d)(this, DD, "f")
          }
          set directIntensity(YY) {
            (0, NY.g)(this, DD, YY, "f")
          }
          get environmentIntensity() {
            return (0, NY.d)(this, FD, "f")
          }
          set environmentIntensity(YY) {
            (0, NY.g)(this, FD, YY, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, NY.d)(this, AD, "f")
          }
          set useSpecularWeightFromTextureAlpha(YY) {
            (0, NY.g)(this, AD, YY, "f")
          }
          get forceAlphaTest() {
            return (0, NY.d)(this, ID, "f")
          }
          set forceAlphaTest(YY) {
            (0, NY.g)(this, ID, YY, "f")
          }
          get alphaCutOff() {
            return (0, NY.d)(this, RD, "f")
          }
          set alphaCutOff(YY) {
            (0, NY.g)(this, RD, YY, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, NY.d)(this, OD, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(YY) {
            (0, NY.g)(this, OD, YY, "f")
          }
          get useAmbientInGrayScale() {
            return (0, NY.d)(this, gD, "f")
          }
          set useAmbientInGrayScale(YY) {
            (0, NY.g)(this, gD, YY, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(kY.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === IY.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(YY) {
            YY !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = YY ? IY.c.LIGHTFALLOFF_PHYSICAL : IY.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === IY.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(YY) {
            YY !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = YY ? IY.c.LIGHTFALLOFF_GLTF : IY.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, NY.d)(this, aD, "f")
          }
          set useObjectSpaceNormalMap(YY) {
            (0, NY.g)(this, aD, YY, "f")
          }
          get useParallax() {
            return (0, NY.d)(this, vD, "f")
          }
          set useParallax(YY) {
            (0, NY.g)(this, vD, YY, "f")
          }
          get useParallaxOcclusion() {
            return (0, NY.d)(this, uD, "f")
          }
          set useParallaxOcclusion(YY) {
            (0, NY.g)(this, uD, YY, "f")
          }
          get parallaxScaleBias() {
            return (0, NY.d)(this, sD, "f")
          }
          set parallaxScaleBias(YY) {
            (0, NY.g)(this, sD, YY, "f")
          }
          get disableLighting() {
            return (0, NY.d)(this, iD, "f")
          }
          set disableLighting(YY) {
            (0, NY.g)(this, iD, YY, "f")
          }
          get forceIrradianceInFragment() {
            return (0, NY.d)(this, yD, "f")
          }
          set forceIrradianceInFragment(YY) {
            (0, NY.g)(this, yD, YY, "f")
          }
          get maxSimultaneousLights() {
            return (0, NY.d)(this, QD, "f")
          }
          set maxSimultaneousLights(YY) {
            (0, NY.g)(this, QD, YY, "f")
          }
          get invertNormalMapX() {
            return (0, NY.d)(this, oD, "f")
          }
          set invertNormalMapX(YY) {
            (0, NY.g)(this, oD, YY, "f")
          }
          get invertNormalMapY() {
            return (0, NY.d)(this, WD, "f")
          }
          set invertNormalMapY(YY) {
            (0, NY.g)(this, WD, YY, "f")
          }
          get twoSidedLighting() {
            return (0, NY.d)(this, ED, "f")
          }
          set twoSidedLighting(YY) {
            (0, NY.g)(this, ED, YY, "f")
          }
          get useAlphaFresnel() {
            return (0, NY.d)(this, mD, "f")
          }
          set useAlphaFresnel(YY) {
            (0, NY.g)(this, mD, YY, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, NY.d)(this, VD, "f")
          }
          set useLinearAlphaFresnel(YY) {
            (0, NY.g)(this, VD, YY, "f")
          }
          get environmentBRDFTexture() {
            return (0, NY.d)(this, SD, "f")
          }
          set environmentBRDFTexture(YY) {
            (0, NY.g)(this, SD, YY, "f")
          }
          get forceNormalForward() {
            return (0, NY.d)(this, lD, "f")
          }
          set forceNormalForward(YY) {
            (0, NY.g)(this, lD, YY, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, NY.d)(this, TD, "f")
          }
          set enableSpecularAntiAliasing(YY) {
            (0, NY.g)(this, TD, YY, "f")
          }
          get useHorizonOcclusion() {
            return (0, NY.d)(this, eD, "f")
          }
          set useHorizonOcclusion(YY) {
            (0, NY.g)(this, eD, YY, "f")
          }
          get useRadianceOcclusion() {
            return (0, NY.d)(this, ND, "f")
          }
          set useRadianceOcclusion(YY) {
            (0, NY.g)(this, ND, YY, "f")
          }
          get unlit() {
            return (0, NY.d)(this, BD, "f")
          }
          set unlit(YY) {
            (0, NY.g)(this, BD, YY, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, NY.d)(this, cD, "f")
          }
          set applyDecalMapAfterDetailMap(YY) {
            (0, NY.g)(this, cD, YY, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(YY) {
            this._backgroundRefractionTexture = YY, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(YY) {
            this._refractionHighQualityBlur !== YY && (this._refractionHighQualityBlur = YY, this.nYY(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(YY) {
            this._realTimeFiltering = YY, this.nYY(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(YY) {
            this._realTimeFilteringQuality = YY, this.nYY(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(YY) {
            this._fuzzSampleNumber = YY, this.nYY(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, NY.d)(this, KD, "f")
          }
          set debugMode(YY) {
            (0, NY.g)(this, KD, YY, "f")
          }
          constructor(DY, BY) {
            super(DY, BY, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || YY.ForceGLSL), rY.set(this, ((0, NY.j)(this, ZA), (0, NY.j)(this, CA, void 0))), this._baseWeight = ((0, NY.j)(this, fA), new kr("base_weight", 1, "vBaseWeight", 1)), FY.set(this, (0, NY.j)(this, jA, void 0)), this._baseWeightTexture = ((0, NY.j)(this, hA), new Gr("base_weight", "baseWeight", "BASE_WEIGHT")), AY.set(this, (0, NY.j)(this, dA, void 0)), this._baseColor = ((0, NY.j)(this, JA), new kr("base_color", kY.c.White(), "vBaseColor", 4)), RY.set(this, (0, NY.j)(this, MA, void 0)), this._baseColorTexture = ((0, NY.j)(this, wA), new Gr("base_color", "baseColor", "BASE_COLOR")), OY.set(this, (0, NY.j)(this, bA, void 0)), this._baseDiffuseRoughness = ((0, NY.j)(this, XA), new kr("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), gY.set(this, (0, NY.j)(this, qA, void 0)), this._baseDiffuseRoughnessTexture = ((0, NY.j)(this, pA), new Gr("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), aY.set(this, (0, NY.j)(this, kA, void 0)), this._baseMetalness = ((0, NY.j)(this, GA), new kr("base_metalness", 0, "vReflectanceInfo", 4, 0)), vY.set(this, (0, NY.j)(this, xA, void 0)), this._baseMetalnessTexture = ((0, NY.j)(this, nA), new Gr("base_metalness", "baseMetalness", "BASE_METALNESS")), uY.set(this, (0, NY.j)(this, PA, void 0)), this._specularWeight = ((0, NY.j)(this, UA), new kr("specular_weight", 1, "vReflectanceInfo", 4, 3)), sY.set(this, (0, NY.j)(this, LA, void 0)), this._specularWeightTexture = ((0, NY.j)(this, tA), new Gr("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), iY.set(this, (0, NY.j)(this, YI, void 0)), this._specularColor = ((0, NY.j)(this, rI), new kr("specular_color", kY.c.White(), "vSpecularColor", 4)), yY.set(this, (0, NY.j)(this, DI, void 0)), this._specularColorTexture = ((0, NY.j)(this, FI), new Gr("specular_color", "specularColor", "SPECULAR_COLOR")), QY.set(this, (0, NY.j)(this, AI, void 0)), this._specularRoughness = ((0, NY.j)(this, II), new kr("specular_roughness", .3, "vReflectanceInfo", 4, 1)), oY.set(this, (0, NY.j)(this, RI, void 0)), this._specularRoughnessTexture = ((0, NY.j)(this, OI), new Gr("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), WY.set(this, (0, NY.j)(this, gI, void 0)), this._specularRoughnessAnisotropy = ((0, NY.j)(this, aI), new kr("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), EY.set(this, (0, NY.j)(this, vI, void 0)), this._specularRoughnessAnisotropyTexture = ((0, NY.j)(this, uI), new Gr("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), mY.set(this, (0, NY.j)(this, sI, void 0)), this._specularIor = ((0, NY.j)(this, iI), new kr("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), VY.set(this, (0, NY.j)(this, yI, void 0)), this._transmissionWeight = ((0, NY.j)(this, QI), new kr("transmission_weight", 0, "vTransmissionWeight", 1)), SY.set(this, (0, NY.j)(this, oI, void 0)), this._transmissionWeightTexture = ((0, NY.j)(this, WI), new Gr("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), lY.set(this, (0, NY.j)(this, EI, void 0)), this._transmissionColor = ((0, NY.j)(this, mI), new kr("transmission_color", kY.c.White(), "vTransmissionColor", 3, 0)), TY.set(this, (0, NY.j)(this, VI, void 0)), this._transmissionColorTexture = ((0, NY.j)(this, SI), new Gr("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), eY.set(this, (0, NY.j)(this, lI, void 0)), this._transmissionDepth = ((0, NY.j)(this, TI), new kr("transmission_depth", 0, "vTransmissionDepth", 1, 0)), zY.set(this, (0, NY.j)(this, eI, void 0)), this._transmissionDepthTexture = ((0, NY.j)(this, NI), new Gr("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), ZY.set(this, (0, NY.j)(this, BI, void 0)), this._transmissionScatter = ((0, NY.j)(this, cI), new kr("transmission_scatter", kY.c.Black(), "vTransmissionScatter", 3, 0)), CY.set(this, (0, NY.j)(this, KI, void 0)), this._transmissionScatterTexture = ((0, NY.j)(this, HI), new Gr("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), fY.set(this, (0, NY.j)(this, zI, void 0)), this._transmissionScatterAnisotropy = ((0, NY.j)(this, ZI), new kr("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), dY.set(this, (0, NY.j)(this, CI, void 0)), this._transmissionDispersionScale = ((0, NY.j)(this, fI), new kr("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), wY.set(this, (0, NY.j)(this, jI, void 0)), this._transmissionDispersionScaleTexture = ((0, NY.j)(this, hI), new Gr("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), bY.set(this, (0, NY.j)(this, dI, void 0)), this._transmissionDispersionAbbeNumber = ((0, NY.j)(this, JI), new kr("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), XY.set(this, (0, NY.j)(this, MI, void 0)), this._subsurfaceWeight = ((0, NY.j)(this, wI), new kr("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), qY.set(this, (0, NY.j)(this, bI, void 0)), this._subsurfaceWeightTexture = ((0, NY.j)(this, XI), new Gr("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), GY.set(this, (0, NY.j)(this, qI, void 0)), this._subsurfaceColor = ((0, NY.j)(this, pI), new kr("subsurface_color", new kY.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), nY.set(this, (0, NY.j)(this, kI, void 0)), this._subsurfaceColorTexture = ((0, NY.j)(this, GI), new Gr("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), tY.set(this, (0, NY.j)(this, xI, void 0)), this._subsurfaceRadius = ((0, NY.j)(this, nI), new kr("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Yr.set(this, (0, NY.j)(this, PI, void 0)), this._subsurfaceRadiusScale = ((0, NY.j)(this, UI), new kr("subsurface_radius_scale", new kY.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), rr.set(this, (0, NY.j)(this, LI, void 0)), this._subsurfaceRadiusScaleTexture = ((0, NY.j)(this, tI), new Gr("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), Dr.set(this, (0, NY.j)(this, YR, void 0)), this._subsurfaceScatterAnisotropy = ((0, NY.j)(this, rR), new kr("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Fr.set(this, (0, NY.j)(this, DR, void 0)), this._coatWeight = ((0, NY.j)(this, FR), new kr("coat_weight", 0, "vCoatWeight", 1, 0)), Ar.set(this, (0, NY.j)(this, AR, void 0)), this._coatWeightTexture = ((0, NY.j)(this, IR), new Gr("coat_weight", "coatWeight", "COAT_WEIGHT")), Ir.set(this, (0, NY.j)(this, RR, void 0)), this._coatColor = ((0, NY.j)(this, OR), new kr("coat_color", kY.c.White(), "vCoatColor", 3, 0)), Rr.set(this, (0, NY.j)(this, gR, void 0)), this._coatColorTexture = ((0, NY.j)(this, aR), new Gr("coat_color", "coatColor", "COAT_COLOR")), Or.set(this, (0, NY.j)(this, vR, void 0)), this._coatRoughness = ((0, NY.j)(this, uR), new kr("coat_roughness", 0, "vCoatRoughness", 1, 0)), gr.set(this, (0, NY.j)(this, sR, void 0)), this._coatRoughnessTexture = ((0, NY.j)(this, iR), new Gr("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), ar.set(this, (0, NY.j)(this, yR, void 0)), this._coatRoughnessAnisotropy = ((0, NY.j)(this, QR), new kr("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), yr.set(this, (0, NY.j)(this, oR, void 0)), this._coatRoughnessAnisotropyTexture = ((0, NY.j)(this, WR), new Gr("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), Qr.set(this, (0, NY.j)(this, ER, void 0)), this._coatIor = ((0, NY.j)(this, mR), new kr("coat_ior", 1.5, "vCoatIor", 1, 0)), or.set(this, (0, NY.j)(this, VR, void 0)), this._coatDarkening = ((0, NY.j)(this, SR), new kr("coat_darkening", 1, "vCoatDarkening", 1, 0)), Wr.set(this, (0, NY.j)(this, lR, void 0)), this._coatDarkeningTexture = ((0, NY.j)(this, TR), new Gr("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Er.set(this, (0, NY.j)(this, eR, void 0)), this._fuzzWeight = ((0, NY.j)(this, NR), new kr("fuzz_weight", 0, "vFuzzWeight", 1, 0)), mr.set(this, (0, NY.j)(this, BR, void 0)), this._fuzzWeightTexture = ((0, NY.j)(this, cR), new Gr("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), Vr.set(this, (0, NY.j)(this, KR, void 0)), this._fuzzColor = ((0, NY.j)(this, HR), new kr("fuzz_color", kY.c.White(), "vFuzzColor", 3, 0)), Sr.set(this, (0, NY.j)(this, zR, void 0)), this._fuzzColorTexture = ((0, NY.j)(this, ZR), new Gr("fuzz_color", "fuzzColor", "FUZZ_COLOR")), lr.set(this, (0, NY.j)(this, CR, void 0)), this._fuzzRoughness = ((0, NY.j)(this, fR), new kr("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), Nr.set(this, (0, NY.j)(this, jR, void 0)), this._fuzzRoughnessTexture = ((0, NY.j)(this, hR), new Gr("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), Br.set(this, (0, NY.j)(this, dR, void 0)), this._geometryThinWalled = ((0, NY.j)(this, JR), new kr("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), cr.set(this, (0, NY.j)(this, MR, void 0)), this._geometryNormalTexture = ((0, NY.j)(this, wR), new Gr("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), Kr.set(this, (0, NY.j)(this, bR, void 0)), this._geometryTangent = ((0, NY.j)(this, XR), new kr("geometry_tangent", new JY.q(1, 0), "vSpecularAnisotropy", 3, 0)), Hr.set(this, (0, NY.j)(this, qR, void 0)), this._geometryTangentTexture = ((0, NY.j)(this, pR), new Gr("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), zr.set(this, (0, NY.j)(this, kR, void 0)), this._geometryCoatNormalTexture = ((0, NY.j)(this, GR), new Gr("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Zr.set(this, (0, NY.j)(this, xR, void 0)), this._geometryCoatTangent = ((0, NY.j)(this, nR), new kr("geometry_coat_tangent", new JY.q(1, 0), "vGeometryCoatTangent", 2, 0)), Cr.set(this, (0, NY.j)(this, PR, void 0)), this._geometryCoatTangentTexture = ((0, NY.j)(this, UR), new Gr("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), fr.set(this, (0, NY.j)(this, LR, void 0)), this._geometryOpacity = ((0, NY.j)(this, tR), new kr("geometry_opacity", 1, "vBaseColor", 4, 3)), jr.set(this, (0, NY.j)(this, YO, void 0)), this._geometryOpacityTexture = ((0, NY.j)(this, rO), new Gr("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), hr.set(this, (0, NY.j)(this, DO, void 0)), this._geometryThickness = ((0, NY.j)(this, FO), new kr("geometry_thickness", 0, "vGeometryThickness", 1, 0)), dr.set(this, (0, NY.j)(this, AO, void 0)), this._geometryThicknessTexture = ((0, NY.j)(this, IO), new Gr("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Jr.set(this, (0, NY.j)(this, RO, void 0)), this._emissionLuminance = ((0, NY.j)(this, OO), new kr("emission_luminance", 1, "vLightingIntensity", 4, 1)), Mr.set(this, (0, NY.j)(this, gO, void 0)), this._emissionColor = ((0, NY.j)(this, aO), new kr("emission_color", kY.c.Black(), "vEmissionColor", 3)), br.set(this, (0, NY.j)(this, vO, void 0)), this._emissionColorTexture = ((0, NY.j)(this, uO), new Gr("emission_color", "emissionColor", "EMISSION_COLOR")), qr.set(this, (0, NY.j)(this, sO, void 0)), this._thinFilmWeight = ((0, NY.j)(this, iO), new kr("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), xr.set(this, (0, NY.j)(this, yO, void 0)), this._thinFilmWeightTexture = ((0, NY.j)(this, QO), new Gr("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), nr.set(this, (0, NY.j)(this, oO, void 0)), this._thinFilmThickness = ((0, NY.j)(this, WO), new kr("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Lr.set(this, (0, NY.j)(this, EO, void 0)), this._thinFilmThicknessMin = ((0, NY.j)(this, mO), new kr("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), tr.set(this, (0, NY.j)(this, VO, void 0)), this._thinFilmThicknessTexture = ((0, NY.j)(this, SO), new Gr("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), YD.set(this, (0, NY.j)(this, lO, void 0)), this._thinFilmIor = ((0, NY.j)(this, TO), new kr("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), rD.set(this, (0, NY.j)(this, eO, void 0)), this._ambientOcclusionTexture = ((0, NY.j)(this, NO), new Gr("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = YY.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, DD.set(this, (0, NY.j)(this, BO, 1)), FD.set(this, ((0, NY.j)(this, cO), (0, NY.j)(this, KO, 1))), AD.set(this, ((0, NY.j)(this, HO), (0, NY.j)(this, zO, !1))), ID.set(this, ((0, NY.j)(this, ZO), (0, NY.j)(this, CO, !1))), RD.set(this, ((0, NY.j)(this, fO), (0, NY.j)(this, jO, .4))), OD.set(this, ((0, NY.j)(this, hO), (0, NY.j)(this, dO, !1))), gD.set(this, ((0, NY.j)(this, JO), (0, NY.j)(this, MO, !1))), aD.set(this, ((0, NY.j)(this, wO), (0, NY.j)(this, bO, !1))), vD.set(this, ((0, NY.j)(this, XO), (0, NY.j)(this, qO, !1))), uD.set(this, ((0, NY.j)(this, pO), (0, NY.j)(this, kO, !1))), sD.set(this, ((0, NY.j)(this, GO), (0, NY.j)(this, xO, .05))), iD.set(this, ((0, NY.j)(this, nO), (0, NY.j)(this, PO, !1))), yD.set(this, ((0, NY.j)(this, UO), (0, NY.j)(this, LO, !1))), QD.set(this, ((0, NY.j)(this, tO), (0, NY.j)(this, Yg, 4))), oD.set(this, ((0, NY.j)(this, rg), (0, NY.j)(this, Dg, !1))), WD.set(this, ((0, NY.j)(this, Fg), (0, NY.j)(this, Ag, !1))), ED.set(this, ((0, NY.j)(this, Ig), (0, NY.j)(this, Rg, !1))), mD.set(this, ((0, NY.j)(this, Og), (0, NY.j)(this, gg, !1))), VD.set(this, ((0, NY.j)(this, ag), (0, NY.j)(this, vg, !1))), SD.set(this, ((0, NY.j)(this, ug), (0, NY.j)(this, sg, null))), lD.set(this, ((0, NY.j)(this, ig), (0, NY.j)(this, yg, !1))), TD.set(this, ((0, NY.j)(this, Qg), (0, NY.j)(this, og, !1))), eD.set(this, ((0, NY.j)(this, Wg), (0, NY.j)(this, Eg, !0))), ND.set(this, ((0, NY.j)(this, mg), (0, NY.j)(this, Vg, !0))), BD.set(this, ((0, NY.j)(this, Sg), (0, NY.j)(this, lg, !1))), cD.set(this, ((0, NY.j)(this, Tg), (0, NY.j)(this, eg, !1))), this._lightingInfos = ((0, NY.j)(this, Ng), new JY.v(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = IY.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new KY.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, KD.set(this, (0, NY.j)(this, Bg, 0)), this.debugLimit = ((0, NY.j)(this, cg), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = IY.c.MATERIAL_OPAQUE, this.hT() && !this.hT()?.ky().isWebGPU && this.hT().ky().VQ < 2 && cY.d.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), YY._noiseTextures[this.hT().uniqueId] || (YY._noiseTextures[this.hT().uniqueId] = new HY.i(er.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.hT(), !1, !0, 1), this.hT().wT.addOnce((() => {
              YY._noiseTextures[this.hT().uniqueId]?.dispose(), delete YY._noiseTextures[this.hT().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), PY.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), PY.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = hY(this.hT()), this._environmentFuzzBRDFTexture = jY(this.hT()), this.prePassConfiguration = new pY.d, this._propertyList = {};
            for (const YY of Object.getOwnPropertyNames(this)) {
              const rY = this[YY];
              rY instanceof kr && (this._propertyList[YY] = rY)
            }
            Object.keys(this._propertyList).forEach((YY => {
              const rY = this._propertyList[YY];
              let DY = this._uniformsList[rY.targetUniformName];
              DY ? DY.numComponents !== rY.targetUniformComponentNum ? cY.d.Error(`Uniform ${rY.targetUniformName} already exists of size ${DY.numComponents}, but trying to set it to ${rY.targetUniformComponentNum}.`) : DY.requiredDefine !== rY.requiredDefine && (DY.requiredDefine = void 0) : (DY = new pr(rY.targetUniformName, rY.targetUniformComponentNum), DY.requiredDefine = rY.requiredDefine, this._uniformsList[rY.targetUniformName] = DY), "" === DY.firstLinkedKey && (DY.firstLinkedKey = rY.name), DY.linkedProperties[rY.name] = rY
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const YY of Object.getOwnPropertyNames(this)) {
              const rY = this[YY];
              rY instanceof Gr && (this._samplersList[YY] = rY)
            }
            for (const YY in this._samplersList) {
              const rY = this._samplersList[YY].textureDefine;
              this._samplerDefines[rY] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[rY + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[rY + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(PY.c.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(PY.c.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(YY) {
            this._transparencyMode !== YY && (this._transparencyMode = YY, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== IY.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(YY) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(YY)
          }
          clone(rY) {
            let DY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const AY = Tr.b.Clone((() => new YY(rY, this.hT())), this, {
              cloneTexturesOnlyOnce: DY
            });
            return AY.id = rY, AY.name = rY, this.stencil.copyTo(AY.stencil), this._clonePlugins(AY, FY), AY
          }
          serialize() {
            const YY = super.serialize();
            return YY.customType = "BABYLON.OpenPBRMaterial", YY
          }
          static Parse(rY, DY, FY) {
            const AY = Tr.b.Parse((() => new YY(rY.name, DY)), rY, DY, FY);
            return rY.stencil && AY.stencil.parse(rY.stencil, DY, FY), IY.c._ParsePlugins(rY, AY, DY, FY), AY
          }
          forceCompilation(YY, rY, DY) {
            const FY = {
              clipPlane: !1,
              useInstances: !1,
              ...DY
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const DY = new Pr({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                AY = this._prepareEffect(YY, YY, DY, void 0, void 0, FY.useInstances, FY.clipPlane);
              this._onEffectCreatedObservable && (Xr.effect = AY, Xr.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Xr)), AY.isReady() ? rY && rY(this) : AY.onCompileObservable.add((() => {
                rY && rY(this)
              }))
            })()
          }
          isReadyForSubMesh(rY, DY, FY) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const AY = DY._drawWrapper;
            if (AY.effect && this.isFrozen && AY._wasPreviouslyReady && AY._wasPreviouslyUsingInstances === FY) return !0;
            DY.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), DY.materialDefines = new Pr({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const IY = DY.materialDefines;
            if (this._isReadyForSubMesh(DY)) return !0;
            const RY = this.hT(),
              OY = RY.ky();
            if (IY._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, RY.texturesEnabled)) {
              for (const YY in this._samplersList) {
                const rY = this._samplersList[YY];
                if (rY.value && !rY.value.isReadyOrNotBlocking()) return !1
              }
              const rY = this._getRadianceTexture();
              if (rY && PY.c.ReflectionTextureEnabled) {
                if (!rY.isReadyOrNotBlocking()) return !1;
                if (rY.irradianceTexture) {
                  if (!rY.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!rY.sphericalPolynomial && rY.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && PY.c.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && PY.c.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && PY.c.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (YY._noiseTextures[RY.uniqueId] && !YY._noiseTextures[RY.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = IY, this._eventInfo.subMesh = DY, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (IY._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (IY.AREALIGHTUSED)
              for (let YY = 0; YY < rY.lightSources.length; YY++)
                if (!rY.lightSources[YY]._isReady()) return !1;
            if (OY.getCaps().standardDerivatives || rY.isVerticesDataPresent(MY.l.NormalKind) || (rY.createNormals(!0), cY.d.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + rY.name)), !(0, LY.b)(RY, rY, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const gY = DY.effect,
              aY = IY._areLightsDisposed,
              vY = this._prepareEffect(rY, DY.getRenderingMesh(), IY, this.onCompiled, this.onError, FY, null);
            let uY = !1;
            if (vY)
              if (this._onEffectCreatedObservable && (Xr.effect = vY, Xr.subMesh = DY, this._onEffectCreatedObservable.notifyObservers(Xr)), this.allowShaderHotSwapping && gY && !vY.isReady()) {
                if (IY.markAsUnprocessed(), uY = this.isFrozen, aY) return IY._areLightsDisposed = !0, !1
              } else RY.resetCachedMaterial(), DY.setEffect(vY, IY, this._materialContext);
            return !(!DY.effect || !DY.effect.isReady()) && (IY._renderId = RY.getRenderId(), AY._wasPreviouslyReady = !uY, AY._wasPreviouslyUsingInstances = !!FY, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const YY = this._uniformBuffer;
            YY.addUniform("vTangentSpaceParams", 2), YY.addUniform("vLightingIntensity", 4), YY.addUniform("pointSize", 1), YY.addUniform("vDebugMode", 2), YY.addUniform("renderTargetSize", 2), YY.addUniform("cameraInfo", 4), YY.addUniform("vTextureRepetitionHexTilingParams", 4), YY.addUniform("backgroundRefractionMatrix", 16), YY.addUniform("vBackgroundRefractionInfos", 3), (0, LY.nb)(YY, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((rY => {
              YY.addUniform(rY.name, rY.numComponents)
            })), Object.values(this._samplersList).forEach((rY => {
              YY.addUniform(rY.samplerInfoName, 2), YY.addUniform(rY.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(YY, rY, DY, FY) {
            if (0 === this.geometryThickness) YY.updateFloat("vGeometryThickness", 0);
            else {
              FY.getRenderingMesh().getWorldMatrix().decompose(JY.n.xy[0]);
              const rY = Math.max(Math.abs(JY.n.xy[0].x), Math.abs(JY.n.xy[0].y), Math.abs(JY.n.xy[0].z));
              YY.updateFloat("vGeometryThickness", this.geometryThickness * rY)
            }
          }
          bindForSubMesh(rY, DY, FY) {
            const AY = this.hT(),
              IY = FY.materialDefines;
            if (!IY) return;
            const RY = FY.effect;
            if (!RY) return;
            this._activeEffect = RY, DY.getMeshUniformBuffer().bindToEffect(RY, "Mesh"), DY.transferToEffect(rY);
            const OY = AY.ky();
            this._uniformBuffer.bindToEffect(RY, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, AY, DY, rY, this.isFrozen), ir.d.Bind(OY.currentRenderPassId, this._activeEffect, DY, rY, this);
            const gY = AY.activeCamera;
            gY ? this._uniformBuffer.updateFloat4("cameraInfo", gY.minZ, gY.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const aY = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", aY[0], aY[1], aY[2], aY[3]), this._eventInfo.subMesh = FY, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), IY.OBJECTSPACE_NORMALMAP && (rY.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const vY = this._mustRebind(AY, RY, FY, DY.visibility),
              uY = OY._features.needToAlwaysBindUniformBuffers;
            (0, LY.c)(DY, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, ur.b)(this._activeEffect, this._vertexPullingMetadata);
            const sY = this._uniformBuffer;
            if (vY) {
              this.bindViewProjection(RY);
              const rY = this._getRadianceTexture();
              if (!sY.useUbo || !this.isFrozen || !sY.isSync || FY._drawWrapper._forceRebindOnNextCall) {
                if (AY.texturesEnabled) {
                  for (const YY in this._samplersList) {
                    const rY = this._samplersList[YY];
                    rY.value && (sY.updateFloat2(rY.samplerInfoName, rY.value.coordinatesIndex, rY.value.level), (0, LY.y)(rY.value, sY, rY.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (AY._mirroredCameraPosition ? sY.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : sY.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, LY.i)(AY, IY, sY, kY.c.White(), rY, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && sY.updateFloat("pointSize", this.pointSize);
                const YY = this._uniformsArray;
                for (let rY = 0, DY = YY.length; rY < DY; rY++) {
                  const DY = YY[rY];
                  (void 0 === DY.requiredDefine || IY[DY.requiredDefine]) && (4 === DY.numComponents ? (DY.populateVectorFromLinkedProperties(JY.n.Vector4[0]), sY.updateVector4(DY.name, JY.n.Vector4[0])) : 3 === DY.numComponents ? (DY.populateVectorFromLinkedProperties(JY.n.xy[0]), sY.updateVector3(DY.name, JY.n.xy[0])) : 2 === DY.numComponents ? (DY.populateVectorFromLinkedProperties(JY.n.Vector2[0]), sY.updateFloat2(DY.name, JY.n.Vector2[0].x, JY.n.Vector2[0].y)) : 1 === DY.numComponents && sY.updateFloat(DY.name, DY.linkedProperties[DY.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * AY.environmentIntensity, this._lightingInfos.w = 1, sY.updateVector4("vLightingIntensity", this._lightingInfos), sY.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (AY.texturesEnabled) {
                for (const YY in this._samplersList) {
                  const rY = this._samplersList[YY];
                  rY.value && sY.setTexture(rY.samplerName, rY.value)
                }
                if ((0, LY.m)(AY, IY, sY, rY, this.realTimeFiltering), IY.ENVIRONMENTBRDF && sY.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), IY.FUZZENVIRONMENTBRDF && sY.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), IY.REFRACTED_BACKGROUND && (sY.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), sY.m_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), JY.n.xy[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), sY.updateVector3("vBackgroundRefractionInfos", JY.n.xy[1])), (IY.ANISOTROPIC || IY.FUZZ || IY.REFRACTED_BACKGROUND || IY.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && sY.setTexture("blueNoiseSampler", YY._noiseTextures[this.hT().uniqueId]), IY.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const YY = this.sssIrradianceTexture.getSize().width,
                    rY = this.sssIrradianceTexture.getSize().height;
                  sY.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), sY.setTexture("sceneDepthSampler", this.sssDepthTexture), sY.updateFloat2("renderTargetSize", YY, rY)
                }
              }
              this.hT().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(DY) && this.hT().depthPeelingRenderer.bind(RY), this._eventInfo.subMesh = FY, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, vr.c)(this._activeEffect, this, AY), this.bindEyePosition(RY)
            } else uY && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, AY, AY.ky(), FY), !vY && this.isFrozen && !uY || !AY.lightsEnabled || this._disableLighting || (0, LY.n)(AY, DY, this._activeEffect, IY, this._maxSimultaneousLights), !vY && this.isFrozen || (this.bindView(RY), (0, LY.f)(AY, DY, this._activeEffect, !0), IY.NUM_MORPH_INFLUENCERS && (0, LY.v)(DY, this._activeEffect), IY.BAKED_VERTEX_ANIMATION_TEXTURE && DY.bakedVertexAnimationManager?.bind(RY, IY.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, LY.r)(IY, this._activeEffect, AY)), this._afterBind(DY, this._activeEffect, FY), sY.update()
          }
          getAnimatables() {
            const YY = super.getAnimatables();
            for (const rY in this._samplersList) {
              const DY = this._samplersList[rY];
              DY.value && DY.value.animations && DY.value.animations.length > 0 && YY.push(DY.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && YY.push(this._radianceTexture), YY
          }
          getActiveTextures() {
            const YY = super.getActiveTextures();
            for (const rY in this._samplersList) {
              const DY = this._samplersList[rY];
              DY.value && YY.push(DY.value)
            }
            return this._radianceTexture && YY.push(this._radianceTexture), YY
          }
          hasTexture(YY) {
            if (super.hasTexture(YY)) return !0;
            for (const rY in this._samplersList) {
              if (this._samplersList[rY].value === YY) return !0
            }
            return this._radianceTexture === YY
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(YY, rY) {
            if (this._breakShaderLoadedCheck = !0, rY) {
              this._environmentBRDFTexture && this.hT().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.hT().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const YY in this._samplersList) {
                const rY = this._samplersList[YY];
                rY.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(YY, rY)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.hT().environmentTexture
          }
          _prepareEffect(rY, DY, FY) {
            let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              IY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              RY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              OY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(rY, DY, FY, RY, OY), !FY.isDirty) return null;
            FY.markAsProcessed();
            const gY = this.hT().ky(),
              aY = new UY.e;
            let vY = 0;
            FY.USESPHERICALINVERTEX && aY.addFallback(vY++, "USESPHERICALINVERTEX"), FY.FOG && aY.addFallback(vY, "FOG"), FY.SPECULARAA && aY.addFallback(vY, "SPECULARAA"), FY.POINTSIZE && aY.addFallback(vY, "POINTSIZE"), FY.LOGARITHMICDEPTH && aY.addFallback(vY, "LOGARITHMICDEPTH"), FY.PARALLAX && aY.addFallback(vY, "PARALLAX"), FY.PARALLAX_RHS && aY.addFallback(vY, "PARALLAX_RHS"), FY.PARALLAXOCCLUSION && aY.addFallback(vY++, "PARALLAXOCCLUSION"), FY.ENVIRONMENTBRDF && aY.addFallback(vY++, "ENVIRONMENTBRDF"), FY.TANGENT && aY.addFallback(vY++, "TANGENT"), vY = (0, LY.C)(FY, aY, this._maxSimultaneousLights, vY), FY.SPECULARTERM && aY.addFallback(vY++, "SPECULARTERM"), FY.USESPHERICALFROMREFLECTIONMAP && aY.addFallback(vY++, "USESPHERICALFROMREFLECTIONMAP"), FY.USEIRRADIANCEMAP && aY.addFallback(vY++, "USEIRRADIANCEMAP"), FY.NORMAL && aY.addFallback(vY++, "NORMAL"), FY.VERTEXCOLOR && aY.addFallback(vY++, "VERTEXCOLOR"), FY.MORPHTARGETS && aY.addFallback(vY++, "MORPHTARGETS"), FY.MULTIVIEW && aY.addFallback(0, "MULTIVIEW");
            const uY = [MY.l.PositionKind];
            FY.NORMAL && uY.push(MY.l.NormalKind), FY.TANGENT && uY.push(MY.l.TangentKind);
            for (let YY = 1; YY <= 6; ++YY) FY["UV" + YY] && uY.push(`uv${1===YY?"":YY}`);
            FY.VERTEXCOLOR && uY.push(MY.l.ColorKind), (0, LY.J)(uY, rY, FY, aY), (0, LY.N)(uY, FY), (0, LY.R)(uY, rY, FY), (0, LY.F)(uY, rY, FY);
            let sY = "openpbr";
            const iY = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const YY in this._uniformsList) iY.push(YY);
            const yY = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            FY.FUZZENVIRONMENTBRDF && yY.push("environmentFuzzBrdfSampler"), FY.REFRACTED_BACKGROUND && yY.push("backgroundRefractionSampler"), (FY.ANISOTROPIC || FY.FUZZ || FY.REFRACTED_BACKGROUND || FY.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && yY.push("blueNoiseSampler"), FY.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (yY.push("sceneIrradianceSampler"), yY.push("sceneDepthSampler"));
            for (const YY in this._samplersList) {
              const rY = this._samplersList[YY];
              yY.push(rY.samplerName), iY.push(rY.samplerInfoName), iY.push(rY.samplerMatrixName)
            }(0, LY.ob)(iY, yY, !0);
            const QY = ["Material", "Scene", "Mesh"],
              oY = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: FY.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = aY, this._eventInfo.fallbackRank = vY, this._eventInfo.defines = FY, this._eventInfo.uniforms = iY, this._eventInfo.attributes = uY, this._eventInfo.samplers = yY, this._eventInfo.uniformBuffersNames = QY, this._eventInfo.customCode = void 0, this._eventInfo.mesh = rY, this._eventInfo.indexParameters = oY, this._callbackPluginEventGeneric(128, this._eventInfo), ir.d.AddUniformsAndSamplers(iY, yY), pY.d.AddUniforms(iY), pY.d.AddSamplers(yY), (0, vr.b)(iY), this._useVertexPulling) {
              const YY = DY?.geometry;
              YY && (this._vertexPullingMetadata = (0, ur.c)(YY), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((YY, rY) => {
                iY.push(`vp_${rY}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            xY.b && (xY.b.PrepareUniforms(iY, FY), xY.b.PrepareSamplers(yY, FY)), (0, LY.sb)({
              uniformsNames: iY,
              uniformBuffersNames: QY,
              samplers: yY,
              defines: FY,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const WY = {};
            this.customShaderNameResolve && (sY = this.customShaderNameResolve(sY, iY, QY, yY, FY, uY, WY));
            const EY = FY.toString(),
              mY = gY.createEffect(sY, {
                attributes: uY,
                uniformsNames: iY,
                uniformBuffersNames: QY,
                samplers: yY,
                defines: EY,
                fallbacks: aY,
                onCompiled: AY,
                onError: IY,
                indexParameters: oY,
                processFinalCode: WY.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: FY.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: YY._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, gY);
            return this._eventInfo.customCode = void 0, mY
          }
          _prepareDefines(rY, DY, FY) {
            let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              RY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const OY = DY.hasThinInstances,
              gY = this.hT(),
              aY = gY.ky();
            (0, LY.cb)(gY, rY, FY, !0, this._maxSimultaneousLights, this._disableLighting), FY._needNormals = !0, (0, LY.gb)(gY, FY);
            const vY = this.needAlphaBlendingForMesh(rY) && this.hT().useOrderIndependentTransparency;
            if ((0, LY.kb)(gY, FY, this.canRenderToMRT && !vY), (0, LY.ib)(gY, FY, vY), ir.d.PrepareDefines(aY.currentRenderPassId, rY, FY), FY._areTexturesDirty) {
              FY._needUVs = !1;
              for (let YY = 1; YY <= 6; ++YY) FY["MAINUV" + YY] = !1;
              if (gY.texturesEnabled) {
                for (const DY in this._samplersList) {
                  const YY = this._samplersList[DY];
                  YY.value ? ((0, LY.eb)(YY.value, FY, YY.textureDefine), FY[YY.textureDefine + "_GAMMA"] = YY.value.gammaSpace) : FY[YY.textureDefine] = !1
                }
                const YY = this._getRadianceTexture(),
                  rY = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || aY.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, LY.$)(gY, YY, FY, this.realTimeFiltering, this.realTimeFilteringQuality, !rY), this._baseMetalnessTexture && (FY.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), FY.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, FY.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, FY.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, FY.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, FY.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, FY.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, FY.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, FY.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, FY.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, FY.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, FY.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && PY.c.DiffuseTextureEnabled ? (FY.PARALLAX = !0, FY.PARALLAX_RHS = gY.useRightHandedSystem, FY.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : FY.PARALLAX = !1, FY.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (FY.PARALLAX = !1, FY.PARALLAX_RHS = !1, FY.PARALLAXOCCLUSION = !1, FY.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && PY.c.ReflectionTextureEnabled ? (FY.ENVIRONMENTBRDF = !0, FY.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (FY.ENVIRONMENTBRDF = !1, FY.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? FY.FUZZENVIRONMENTBRDF = !0 : FY.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  FY.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && PY.c.RefractionTextureEnabled, FY.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, FY.REFRACTED_LIGHTS = !0;
                  const YY = this._getRadianceTexture();
                  YY ? (FY.REFRACTED_ENVIRONMENT = PY.c.RefractionTextureEnabled, FY.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.hT().useRightHandedSystem ? !YY.invertZ : YY.invertZ, FY.REFRACTED_ENVIRONMENT_LOCAL_CUBE = YY.isCube && YY.boundingBoxSize) : FY.REFRACTED_ENVIRONMENT = !1
                } else FY.REFRACTED_BACKGROUND = !1, FY.REFRACTED_LIGHTS = !1, FY.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? FY.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : FY.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === IY.c.LIGHTFALLOFF_STANDARD ? (FY.USEPHYSICALLIGHTFALLOFF = !1, FY.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === IY.c.LIGHTFALLOFF_GLTF ? (FY.USEPHYSICALLIGHTFALLOFF = !1, FY.USEGLTFLIGHTFALLOFF = !0) : (FY.USEPHYSICALLIGHTFALLOFF = !0, FY.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? FY.TWOSIDEDLIGHTING = !0 : FY.TWOSIDEDLIGHTING = !1, FY.MIRRORED = !!gY._mirroredCameraPosition, FY.SPECULARAA = aY.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(FY._areTexturesDirty || FY._areMiscDirty) && (FY.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, FY.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, FY.ALPHABLEND = this.needAlphaBlendingForMesh(rY)), FY._areTexturesDirty && (FY.TEXTURE_REPETITION_MODE = aY.version > 1 || aY.isWebGPU ? this.textureRepetitionMode : 0), FY._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(FY), FY.FORCENORMALFORWARD = this._forceNormalForward, FY.RADIANCEOCCLUSION = this._useRadianceOcclusion, FY.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && YY._noiseTextures[gY.uniqueId] && PY.c.ReflectionTextureEnabled ? (FY.ANISOTROPIC = !0, rY.isVerticesDataPresent(MY.l.TangentKind) || (FY._needUVs = !0, FY.MAINUV1 = !0), this._useGltfStyleAnisotropy && (FY.USE_GLTF_STYLE_ANISOTROPY = !0), FY.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, FY.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (FY.ANISOTROPIC = !1, FY.USE_GLTF_STYLE_ANISOTROPY = !1, FY.ANISOTROPIC_BASE = !1, FY.ANISOTROPIC_COAT = !1), FY.THIN_FILM = this.thinFilmWeight > 0, FY.IRIDESCENCE = this.thinFilmWeight > 0, FY.DISPERSION = this.transmissionDispersionScale > 0, FY.SCATTERING = this.hasScattering;
            if (FY.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, FY.TRANSMISSION_SLAB = this.transmissionWeight > 0, FY.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, FY.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !FY.PREPASS && (FY.SUBSURFACE_SLAB || FY.TRANSMISSION_SLAB_VOLUME)) {
              let YY = !1;
              if (!this.sssIrradianceTexture && gY.geometryBufferRenderer) {
                const rY = gY.geometryBufferRenderer.getTextureIndex(wr.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = gY.geometryBufferRenderer.getGBuffer().textures[rY], YY = !0
              }
              if (!this.sssDepthTexture && gY.geometryBufferRenderer) {
                const rY = gY.geometryBufferRenderer.getTextureIndex(wr.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = gY.geometryBufferRenderer.getGBuffer().textures[rY], YY = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (FY.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, YY && (FY.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            FY.FUZZ = this.fuzzWeight > 0 && PY.c.ReflectionTextureEnabled, FY.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, FY.FUZZ ? (rY.isVerticesDataPresent(MY.l.TangentKind) || (FY._needUVs = !0, FY.MAINUV1 = !0), this._environmentFuzzBRDFTexture = jY(this.hT()), FY.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, FY.FUZZENVIRONMENTBRDF = !1, FY.FUZZ_IBL_SAMPLES = 0), FY._areMiscDirty && ((0, LY.fb)(rY, gY, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(rY), FY, this._applyDecalMapAfterDetailMap, this._useVertexPulling, DY, this._isVertexOutputInvariant), FY.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !rY.isVerticesDataPresent(MY.l.NormalKind), FY.DEBUGMODE = this._debugMode), (0, LY._)(gY, aY, this, FY, !!AY, RY, OY), this._eventInfo.defines = FY, this._eventInfo.mesh = rY, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, LY.W)(rY, FY, !0, !0, !0, this._transparencyMode !== IY.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, rY = new WeakMap, FY = new WeakMap, AY = new WeakMap, RY = new WeakMap, OY = new WeakMap, gY = new WeakMap, aY = new WeakMap, vY = new WeakMap, uY = new WeakMap, sY = new WeakMap, iY = new WeakMap, yY = new WeakMap, QY = new WeakMap, oY = new WeakMap, WY = new WeakMap, EY = new WeakMap, mY = new WeakMap, VY = new WeakMap, SY = new WeakMap, lY = new WeakMap, TY = new WeakMap, eY = new WeakMap, zY = new WeakMap, ZY = new WeakMap, CY = new WeakMap, fY = new WeakMap, dY = new WeakMap, wY = new WeakMap, bY = new WeakMap, XY = new WeakMap, qY = new WeakMap, GY = new WeakMap, nY = new WeakMap, tY = new WeakMap, Yr = new WeakMap, rr = new WeakMap, Dr = new WeakMap, Fr = new WeakMap, Ar = new WeakMap, Ir = new WeakMap, Rr = new WeakMap, Or = new WeakMap, gr = new WeakMap, ar = new WeakMap, yr = new WeakMap, Qr = new WeakMap, or = new WeakMap, Wr = new WeakMap, Er = new WeakMap, mr = new WeakMap, Vr = new WeakMap, Sr = new WeakMap, lr = new WeakMap, Nr = new WeakMap, Br = new WeakMap, cr = new WeakMap, Kr = new WeakMap, Hr = new WeakMap, zr = new WeakMap, Zr = new WeakMap, Cr = new WeakMap, fr = new WeakMap, jr = new WeakMap, hr = new WeakMap, dr = new WeakMap, Jr = new WeakMap, Mr = new WeakMap, br = new WeakMap, qr = new WeakMap, xr = new WeakMap, nr = new WeakMap, Lr = new WeakMap, tr = new WeakMap, YD = new WeakMap, rD = new WeakMap, DD = new WeakMap, FD = new WeakMap, AD = new WeakMap, ID = new WeakMap, RD = new WeakMap, OD = new WeakMap, gD = new WeakMap, aD = new WeakMap, vD = new WeakMap, uD = new WeakMap, sD = new WeakMap, iD = new WeakMap, yD = new WeakMap, QD = new WeakMap, oD = new WeakMap, WD = new WeakMap, ED = new WeakMap, mD = new WeakMap, VD = new WeakMap, SD = new WeakMap, lD = new WeakMap, TD = new WeakMap, eD = new WeakMap, ND = new WeakMap, BD = new WeakMap, cD = new WeakMap, KD = new WeakMap, (() => {
          const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(zA[Symbol.metadata] ?? null) : void 0;
          HD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], zD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], ZD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], CD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], fD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], jD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], hD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], dD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], JD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], MD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], wD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], bD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], XD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], qD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], pD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], kD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], xD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], nD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], PD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], UD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], LD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], tD = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], DF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], FF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], AF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], IF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], RF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], OF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], aF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], uF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], sF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], iF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], yF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], oF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], WF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], EF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], mF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], VF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], SF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], lF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], eF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], cF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], KF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], HF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], ZF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], fF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], hF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], MF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], wF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], XF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], kF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], LF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], tF = [(0, BY.d)("_markAllSubMeshesAsTexturesDirty")], YA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], rA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], DA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], FA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], AA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], IA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], RA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], OA = [(0, BY.M)()], gA = [(0, BY.M)()], aA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], vA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], uA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], sA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], iA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsLightsDirty")], yA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], QA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsLightsDirty")], oA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], WA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], EA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], mA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], VA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], SA = [(0, BY.f)("_markAllSubMeshesAsTexturesDirty")], lA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], TA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], eA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], NA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], BA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], cA = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], KA = [(0, BY.f)("_markAllSubMeshesAsMiscDirty")], HA = [(0, BY.M)()], (0, NY.i)(YY, null, HD, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseWeight" in YY,
              get: YY => YY.baseWeight,
              set: (YY, rY) => {
                YY.baseWeight = rY
              }
            },
            metadata: rY
          }, CA, fA), (0, NY.i)(YY, null, zD, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseWeightTexture" in YY,
              get: YY => YY.baseWeightTexture,
              set: (YY, rY) => {
                YY.baseWeightTexture = rY
              }
            },
            metadata: rY
          }, jA, hA), (0, NY.i)(YY, null, ZD, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseColor" in YY,
              get: YY => YY.baseColor,
              set: (YY, rY) => {
                YY.baseColor = rY
              }
            },
            metadata: rY
          }, dA, JA), (0, NY.i)(YY, null, CD, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseColorTexture" in YY,
              get: YY => YY.baseColorTexture,
              set: (YY, rY) => {
                YY.baseColorTexture = rY
              }
            },
            metadata: rY
          }, MA, wA), (0, NY.i)(YY, null, fD, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseDiffuseRoughness" in YY,
              get: YY => YY.baseDiffuseRoughness,
              set: (YY, rY) => {
                YY.baseDiffuseRoughness = rY
              }
            },
            metadata: rY
          }, bA, XA), (0, NY.i)(YY, null, jD, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseDiffuseRoughnessTexture" in YY,
              get: YY => YY.baseDiffuseRoughnessTexture,
              set: (YY, rY) => {
                YY.baseDiffuseRoughnessTexture = rY
              }
            },
            metadata: rY
          }, qA, pA), (0, NY.i)(YY, null, hD, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseMetalness" in YY,
              get: YY => YY.baseMetalness,
              set: (YY, rY) => {
                YY.baseMetalness = rY
              }
            },
            metadata: rY
          }, kA, GA), (0, NY.i)(YY, null, dD, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "baseMetalnessTexture" in YY,
              get: YY => YY.baseMetalnessTexture,
              set: (YY, rY) => {
                YY.baseMetalnessTexture = rY
              }
            },
            metadata: rY
          }, xA, nA), (0, NY.i)(YY, null, JD, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularWeight" in YY,
              get: YY => YY.specularWeight,
              set: (YY, rY) => {
                YY.specularWeight = rY
              }
            },
            metadata: rY
          }, PA, UA), (0, NY.i)(YY, null, MD, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularWeightTexture" in YY,
              get: YY => YY.specularWeightTexture,
              set: (YY, rY) => {
                YY.specularWeightTexture = rY
              }
            },
            metadata: rY
          }, LA, tA), (0, NY.i)(YY, null, wD, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularColor" in YY,
              get: YY => YY.specularColor,
              set: (YY, rY) => {
                YY.specularColor = rY
              }
            },
            metadata: rY
          }, YI, rI), (0, NY.i)(YY, null, bD, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularColorTexture" in YY,
              get: YY => YY.specularColorTexture,
              set: (YY, rY) => {
                YY.specularColorTexture = rY
              }
            },
            metadata: rY
          }, DI, FI), (0, NY.i)(YY, null, XD, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularRoughness" in YY,
              get: YY => YY.specularRoughness,
              set: (YY, rY) => {
                YY.specularRoughness = rY
              }
            },
            metadata: rY
          }, AI, II), (0, NY.i)(YY, null, qD, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularRoughnessTexture" in YY,
              get: YY => YY.specularRoughnessTexture,
              set: (YY, rY) => {
                YY.specularRoughnessTexture = rY
              }
            },
            metadata: rY
          }, RI, OI), (0, NY.i)(YY, null, pD, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularRoughnessAnisotropy" in YY,
              get: YY => YY.specularRoughnessAnisotropy,
              set: (YY, rY) => {
                YY.specularRoughnessAnisotropy = rY
              }
            },
            metadata: rY
          }, gI, aI), (0, NY.i)(YY, null, kD, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularRoughnessAnisotropyTexture" in YY,
              get: YY => YY.specularRoughnessAnisotropyTexture,
              set: (YY, rY) => {
                YY.specularRoughnessAnisotropyTexture = rY
              }
            },
            metadata: rY
          }, vI, uI), (0, NY.i)(YY, null, GD, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularIor" in YY,
              get: YY => YY.specularIor,
              set: (YY, rY) => {
                YY.specularIor = rY
              }
            },
            metadata: rY
          }, sI, iI), (0, NY.i)(YY, null, xD, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionWeight" in YY,
              get: YY => YY.transmissionWeight,
              set: (YY, rY) => {
                YY.transmissionWeight = rY
              }
            },
            metadata: rY
          }, yI, QI), (0, NY.i)(YY, null, nD, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionWeightTexture" in YY,
              get: YY => YY.transmissionWeightTexture,
              set: (YY, rY) => {
                YY.transmissionWeightTexture = rY
              }
            },
            metadata: rY
          }, oI, WI), (0, NY.i)(YY, null, PD, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionColor" in YY,
              get: YY => YY.transmissionColor,
              set: (YY, rY) => {
                YY.transmissionColor = rY
              }
            },
            metadata: rY
          }, EI, mI), (0, NY.i)(YY, null, UD, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionColorTexture" in YY,
              get: YY => YY.transmissionColorTexture,
              set: (YY, rY) => {
                YY.transmissionColorTexture = rY
              }
            },
            metadata: rY
          }, VI, SI), (0, NY.i)(YY, null, LD, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionDepth" in YY,
              get: YY => YY.transmissionDepth,
              set: (YY, rY) => {
                YY.transmissionDepth = rY
              }
            },
            metadata: rY
          }, lI, TI), (0, NY.i)(YY, null, tD, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionDepthTexture" in YY,
              get: YY => YY.transmissionDepthTexture,
              set: (YY, rY) => {
                YY.transmissionDepthTexture = rY
              }
            },
            metadata: rY
          }, eI, NI), (0, NY.i)(YY, null, YF, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionScatter" in YY,
              get: YY => YY.transmissionScatter,
              set: (YY, rY) => {
                YY.transmissionScatter = rY
              }
            },
            metadata: rY
          }, BI, cI), (0, NY.i)(YY, null, rF, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionScatterTexture" in YY,
              get: YY => YY.transmissionScatterTexture,
              set: (YY, rY) => {
                YY.transmissionScatterTexture = rY
              }
            },
            metadata: rY
          }, KI, HI), (0, NY.i)(YY, null, DF, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionScatterAnisotropy" in YY,
              get: YY => YY.transmissionScatterAnisotropy,
              set: (YY, rY) => {
                YY.transmissionScatterAnisotropy = rY
              }
            },
            metadata: rY
          }, zI, ZI), (0, NY.i)(YY, null, FF, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionDispersionScale" in YY,
              get: YY => YY.transmissionDispersionScale,
              set: (YY, rY) => {
                YY.transmissionDispersionScale = rY
              }
            },
            metadata: rY
          }, CI, fI), (0, NY.i)(YY, null, AF, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionDispersionScaleTexture" in YY,
              get: YY => YY.transmissionDispersionScaleTexture,
              set: (YY, rY) => {
                YY.transmissionDispersionScaleTexture = rY
              }
            },
            metadata: rY
          }, jI, hI), (0, NY.i)(YY, null, IF, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: YY => "transmissionDispersionAbbeNumber" in YY,
              get: YY => YY.transmissionDispersionAbbeNumber,
              set: (YY, rY) => {
                YY.transmissionDispersionAbbeNumber = rY
              }
            },
            metadata: rY
          }, dI, JI), (0, NY.i)(YY, null, RF, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceWeight" in YY,
              get: YY => YY.subsurfaceWeight,
              set: (YY, rY) => {
                YY.subsurfaceWeight = rY
              }
            },
            metadata: rY
          }, MI, wI), (0, NY.i)(YY, null, OF, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceWeightTexture" in YY,
              get: YY => YY.subsurfaceWeightTexture,
              set: (YY, rY) => {
                YY.subsurfaceWeightTexture = rY
              }
            },
            metadata: rY
          }, bI, XI), (0, NY.i)(YY, null, gF, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceColor" in YY,
              get: YY => YY.subsurfaceColor,
              set: (YY, rY) => {
                YY.subsurfaceColor = rY
              }
            },
            metadata: rY
          }, qI, pI), (0, NY.i)(YY, null, aF, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceColorTexture" in YY,
              get: YY => YY.subsurfaceColorTexture,
              set: (YY, rY) => {
                YY.subsurfaceColorTexture = rY
              }
            },
            metadata: rY
          }, kI, GI), (0, NY.i)(YY, null, vF, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceRadius" in YY,
              get: YY => YY.subsurfaceRadius,
              set: (YY, rY) => {
                YY.subsurfaceRadius = rY
              }
            },
            metadata: rY
          }, xI, nI), (0, NY.i)(YY, null, uF, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceRadiusScale" in YY,
              get: YY => YY.subsurfaceRadiusScale,
              set: (YY, rY) => {
                YY.subsurfaceRadiusScale = rY
              }
            },
            metadata: rY
          }, PI, UI), (0, NY.i)(YY, null, sF, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceRadiusScaleTexture" in YY,
              get: YY => YY.subsurfaceRadiusScaleTexture,
              set: (YY, rY) => {
                YY.subsurfaceRadiusScaleTexture = rY
              }
            },
            metadata: rY
          }, LI, tI), (0, NY.i)(YY, null, iF, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: YY => "subsurfaceScatterAnisotropy" in YY,
              get: YY => YY.subsurfaceScatterAnisotropy,
              set: (YY, rY) => {
                YY.subsurfaceScatterAnisotropy = rY
              }
            },
            metadata: rY
          }, YR, rR), (0, NY.i)(YY, null, yF, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatWeight" in YY,
              get: YY => YY.coatWeight,
              set: (YY, rY) => {
                YY.coatWeight = rY
              }
            },
            metadata: rY
          }, DR, FR), (0, NY.i)(YY, null, QF, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatWeightTexture" in YY,
              get: YY => YY.coatWeightTexture,
              set: (YY, rY) => {
                YY.coatWeightTexture = rY
              }
            },
            metadata: rY
          }, AR, IR), (0, NY.i)(YY, null, oF, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatColor" in YY,
              get: YY => YY.coatColor,
              set: (YY, rY) => {
                YY.coatColor = rY
              }
            },
            metadata: rY
          }, RR, OR), (0, NY.i)(YY, null, WF, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatColorTexture" in YY,
              get: YY => YY.coatColorTexture,
              set: (YY, rY) => {
                YY.coatColorTexture = rY
              }
            },
            metadata: rY
          }, gR, aR), (0, NY.i)(YY, null, EF, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatRoughness" in YY,
              get: YY => YY.coatRoughness,
              set: (YY, rY) => {
                YY.coatRoughness = rY
              }
            },
            metadata: rY
          }, vR, uR), (0, NY.i)(YY, null, mF, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatRoughnessTexture" in YY,
              get: YY => YY.coatRoughnessTexture,
              set: (YY, rY) => {
                YY.coatRoughnessTexture = rY
              }
            },
            metadata: rY
          }, sR, iR), (0, NY.i)(YY, null, VF, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatRoughnessAnisotropy" in YY,
              get: YY => YY.coatRoughnessAnisotropy,
              set: (YY, rY) => {
                YY.coatRoughnessAnisotropy = rY
              }
            },
            metadata: rY
          }, yR, QR), (0, NY.i)(YY, null, SF, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatRoughnessAnisotropyTexture" in YY,
              get: YY => YY.coatRoughnessAnisotropyTexture,
              set: (YY, rY) => {
                YY.coatRoughnessAnisotropyTexture = rY
              }
            },
            metadata: rY
          }, oR, WR), (0, NY.i)(YY, null, lF, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatIor" in YY,
              get: YY => YY.coatIor,
              set: (YY, rY) => {
                YY.coatIor = rY
              }
            },
            metadata: rY
          }, ER, mR), (0, NY.i)(YY, null, TF, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatDarkening" in YY,
              get: YY => YY.coatDarkening,
              set: (YY, rY) => {
                YY.coatDarkening = rY
              }
            },
            metadata: rY
          }, VR, SR), (0, NY.i)(YY, null, eF, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "coatDarkeningTexture" in YY,
              get: YY => YY.coatDarkeningTexture,
              set: (YY, rY) => {
                YY.coatDarkeningTexture = rY
              }
            },
            metadata: rY
          }, lR, TR), (0, NY.i)(YY, null, NF, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "fuzzWeight" in YY,
              get: YY => YY.fuzzWeight,
              set: (YY, rY) => {
                YY.fuzzWeight = rY
              }
            },
            metadata: rY
          }, eR, NR), (0, NY.i)(YY, null, BF, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "fuzzWeightTexture" in YY,
              get: YY => YY.fuzzWeightTexture,
              set: (YY, rY) => {
                YY.fuzzWeightTexture = rY
              }
            },
            metadata: rY
          }, BR, cR), (0, NY.i)(YY, null, cF, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "fuzzColor" in YY,
              get: YY => YY.fuzzColor,
              set: (YY, rY) => {
                YY.fuzzColor = rY
              }
            },
            metadata: rY
          }, KR, HR), (0, NY.i)(YY, null, KF, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "fuzzColorTexture" in YY,
              get: YY => YY.fuzzColorTexture,
              set: (YY, rY) => {
                YY.fuzzColorTexture = rY
              }
            },
            metadata: rY
          }, zR, ZR), (0, NY.i)(YY, null, HF, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: YY => "fuzzRoughness" in YY,
              get: YY => YY.fuzzRoughness,
              set: (YY, rY) => {
                YY.fuzzRoughness = rY
              }
            },
            metadata: rY
          }, CR, fR), (0, NY.i)(YY, null, zF, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "fuzzRoughnessTexture" in YY,
              get: YY => YY.fuzzRoughnessTexture,
              set: (YY, rY) => {
                YY.fuzzRoughnessTexture = rY
              }
            },
            metadata: rY
          }, jR, hR), (0, NY.i)(YY, null, ZF, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryThinWalled" in YY,
              get: YY => YY.geometryThinWalled,
              set: (YY, rY) => {
                YY.geometryThinWalled = rY
              }
            },
            metadata: rY
          }, dR, JR), (0, NY.i)(YY, null, CF, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryNormalTexture" in YY,
              get: YY => YY.geometryNormalTexture,
              set: (YY, rY) => {
                YY.geometryNormalTexture = rY
              }
            },
            metadata: rY
          }, MR, wR), (0, NY.i)(YY, null, fF, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryTangent" in YY,
              get: YY => YY.geometryTangent,
              set: (YY, rY) => {
                YY.geometryTangent = rY
              }
            },
            metadata: rY
          }, bR, XR), (0, NY.i)(YY, null, jF, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryTangentTexture" in YY,
              get: YY => YY.geometryTangentTexture,
              set: (YY, rY) => {
                YY.geometryTangentTexture = rY
              }
            },
            metadata: rY
          }, qR, pR), (0, NY.i)(YY, null, hF, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryCoatNormalTexture" in YY,
              get: YY => YY.geometryCoatNormalTexture,
              set: (YY, rY) => {
                YY.geometryCoatNormalTexture = rY
              }
            },
            metadata: rY
          }, kR, GR), (0, NY.i)(YY, null, dF, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryCoatTangent" in YY,
              get: YY => YY.geometryCoatTangent,
              set: (YY, rY) => {
                YY.geometryCoatTangent = rY
              }
            },
            metadata: rY
          }, xR, nR), (0, NY.i)(YY, null, JF, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryCoatTangentTexture" in YY,
              get: YY => YY.geometryCoatTangentTexture,
              set: (YY, rY) => {
                YY.geometryCoatTangentTexture = rY
              }
            },
            metadata: rY
          }, PR, UR), (0, NY.i)(YY, null, MF, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryOpacity" in YY,
              get: YY => YY.geometryOpacity,
              set: (YY, rY) => {
                YY.geometryOpacity = rY
              }
            },
            metadata: rY
          }, LR, tR), (0, NY.i)(YY, null, wF, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryOpacityTexture" in YY,
              get: YY => YY.geometryOpacityTexture,
              set: (YY, rY) => {
                YY.geometryOpacityTexture = rY
              }
            },
            metadata: rY
          }, YO, rO), (0, NY.i)(YY, null, bF, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryThickness" in YY,
              get: YY => YY.geometryThickness,
              set: (YY, rY) => {
                YY.geometryThickness = rY
              }
            },
            metadata: rY
          }, DO, FO), (0, NY.i)(YY, null, XF, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "geometryThicknessTexture" in YY,
              get: YY => YY.geometryThicknessTexture,
              set: (YY, rY) => {
                YY.geometryThicknessTexture = rY
              }
            },
            metadata: rY
          }, AO, IO), (0, NY.i)(YY, null, qF, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: YY => "emissionLuminance" in YY,
              get: YY => YY.emissionLuminance,
              set: (YY, rY) => {
                YY.emissionLuminance = rY
              }
            },
            metadata: rY
          }, RO, OO), (0, NY.i)(YY, null, pF, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "emissionColor" in YY,
              get: YY => YY.emissionColor,
              set: (YY, rY) => {
                YY.emissionColor = rY
              }
            },
            metadata: rY
          }, gO, aO), (0, NY.i)(YY, null, kF, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "emissionColorTexture" in YY,
              get: YY => YY.emissionColorTexture,
              set: (YY, rY) => {
                YY.emissionColorTexture = rY
              }
            },
            metadata: rY
          }, vO, uO), (0, NY.i)(YY, null, GF, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: YY => "thinFilmWeight" in YY,
              get: YY => YY.thinFilmWeight,
              set: (YY, rY) => {
                YY.thinFilmWeight = rY
              }
            },
            metadata: rY
          }, sO, iO), (0, NY.i)(YY, null, xF, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "thinFilmWeightTexture" in YY,
              get: YY => YY.thinFilmWeightTexture,
              set: (YY, rY) => {
                YY.thinFilmWeightTexture = rY
              }
            },
            metadata: rY
          }, yO, QO), (0, NY.i)(YY, null, nF, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: YY => "thinFilmThickness" in YY,
              get: YY => YY.thinFilmThickness,
              set: (YY, rY) => {
                YY.thinFilmThickness = rY
              }
            },
            metadata: rY
          }, oO, WO), (0, NY.i)(YY, null, PF, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: YY => "thinFilmThicknessMin" in YY,
              get: YY => YY.thinFilmThicknessMin,
              set: (YY, rY) => {
                YY.thinFilmThicknessMin = rY
              }
            },
            metadata: rY
          }, EO, mO), (0, NY.i)(YY, null, UF, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "thinFilmThicknessTexture" in YY,
              get: YY => YY.thinFilmThicknessTexture,
              set: (YY, rY) => {
                YY.thinFilmThicknessTexture = rY
              }
            },
            metadata: rY
          }, VO, SO), (0, NY.i)(YY, null, LF, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: YY => "thinFilmIor" in YY,
              get: YY => YY.thinFilmIor,
              set: (YY, rY) => {
                YY.thinFilmIor = rY
              }
            },
            metadata: rY
          }, lO, TO), (0, NY.i)(YY, null, tF, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "ambientOcclusionTexture" in YY,
              get: YY => YY.ambientOcclusionTexture,
              set: (YY, rY) => {
                YY.ambientOcclusionTexture = rY
              }
            },
            metadata: rY
          }, eO, NO), (0, NY.i)(YY, null, YA, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: YY => "directIntensity" in YY,
              get: YY => YY.directIntensity,
              set: (YY, rY) => {
                YY.directIntensity = rY
              }
            },
            metadata: rY
          }, BO, cO), (0, NY.i)(YY, null, rA, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: YY => "environmentIntensity" in YY,
              get: YY => YY.environmentIntensity,
              set: (YY, rY) => {
                YY.environmentIntensity = rY
              }
            },
            metadata: rY
          }, KO, HO), (0, NY.i)(YY, null, DA, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "useSpecularWeightFromTextureAlpha" in YY,
              get: YY => YY.useSpecularWeightFromTextureAlpha,
              set: (YY, rY) => {
                YY.useSpecularWeightFromTextureAlpha = rY
              }
            },
            metadata: rY
          }, zO, ZO), (0, NY.i)(YY, null, FA, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: YY => "forceAlphaTest" in YY,
              get: YY => YY.forceAlphaTest,
              set: (YY, rY) => {
                YY.forceAlphaTest = rY
              }
            },
            metadata: rY
          }, CO, fO), (0, NY.i)(YY, null, AA, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: YY => "alphaCutOff" in YY,
              get: YY => YY.alphaCutOff,
              set: (YY, rY) => {
                YY.alphaCutOff = rY
              }
            },
            metadata: rY
          }, jO, hO), (0, NY.i)(YY, null, IA, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: YY => "useAmbientOcclusionFromMetallicTextureRed" in YY,
              get: YY => YY.useAmbientOcclusionFromMetallicTextureRed,
              set: (YY, rY) => {
                YY.useAmbientOcclusionFromMetallicTextureRed = rY
              }
            },
            metadata: rY
          }, dO, JO), (0, NY.i)(YY, null, RA, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: YY => "useAmbientInGrayScale" in YY,
              get: YY => YY.useAmbientInGrayScale,
              set: (YY, rY) => {
                YY.useAmbientInGrayScale = rY
              }
            },
            metadata: rY
          }, MO, wO), (0, NY.i)(YY, null, OA, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: YY => "usePhysicalLightFalloff" in YY,
              get: YY => YY.usePhysicalLightFalloff
            },
            metadata: rY
          }, null, ZA), (0, NY.i)(YY, null, gA, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: YY => "useGLTFLightFalloff" in YY,
              get: YY => YY.useGLTFLightFalloff
            },
            metadata: rY
          }, null, ZA), (0, NY.i)(YY, null, aA, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: YY => "useObjectSpaceNormalMap" in YY,
              get: YY => YY.useObjectSpaceNormalMap,
              set: (YY, rY) => {
                YY.useObjectSpaceNormalMap = rY
              }
            },
            metadata: rY
          }, bO, XO), (0, NY.i)(YY, null, vA, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: YY => "useParallax" in YY,
              get: YY => YY.useParallax,
              set: (YY, rY) => {
                YY.useParallax = rY
              }
            },
            metadata: rY
          }, qO, pO), (0, NY.i)(YY, null, uA, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: YY => "useParallaxOcclusion" in YY,
              get: YY => YY.useParallaxOcclusion,
              set: (YY, rY) => {
                YY.useParallaxOcclusion = rY
              }
            },
            metadata: rY
          }, kO, GO), (0, NY.i)(YY, null, sA, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: YY => "parallaxScaleBias" in YY,
              get: YY => YY.parallaxScaleBias,
              set: (YY, rY) => {
                YY.parallaxScaleBias = rY
              }
            },
            metadata: rY
          }, xO, nO), (0, NY.i)(YY, null, iA, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: YY => "disableLighting" in YY,
              get: YY => YY.disableLighting,
              set: (YY, rY) => {
                YY.disableLighting = rY
              }
            },
            metadata: rY
          }, PO, UO), (0, NY.i)(YY, null, yA, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: YY => "forceIrradianceInFragment" in YY,
              get: YY => YY.forceIrradianceInFragment,
              set: (YY, rY) => {
                YY.forceIrradianceInFragment = rY
              }
            },
            metadata: rY
          }, LO, tO), (0, NY.i)(YY, null, QA, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: YY => "maxSimultaneousLights" in YY,
              get: YY => YY.maxSimultaneousLights,
              set: (YY, rY) => {
                YY.maxSimultaneousLights = rY
              }
            },
            metadata: rY
          }, Yg, rg), (0, NY.i)(YY, null, oA, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: YY => "invertNormalMapX" in YY,
              get: YY => YY.invertNormalMapX,
              set: (YY, rY) => {
                YY.invertNormalMapX = rY
              }
            },
            metadata: rY
          }, Dg, Fg), (0, NY.i)(YY, null, WA, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: YY => "invertNormalMapY" in YY,
              get: YY => YY.invertNormalMapY,
              set: (YY, rY) => {
                YY.invertNormalMapY = rY
              }
            },
            metadata: rY
          }, Ag, Ig), (0, NY.i)(YY, null, EA, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: YY => "twoSidedLighting" in YY,
              get: YY => YY.twoSidedLighting,
              set: (YY, rY) => {
                YY.twoSidedLighting = rY
              }
            },
            metadata: rY
          }, Rg, Og), (0, NY.i)(YY, null, mA, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: YY => "useAlphaFresnel" in YY,
              get: YY => YY.useAlphaFresnel,
              set: (YY, rY) => {
                YY.useAlphaFresnel = rY
              }
            },
            metadata: rY
          }, gg, ag), (0, NY.i)(YY, null, VA, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: YY => "useLinearAlphaFresnel" in YY,
              get: YY => YY.useLinearAlphaFresnel,
              set: (YY, rY) => {
                YY.useLinearAlphaFresnel = rY
              }
            },
            metadata: rY
          }, vg, ug), (0, NY.i)(YY, null, SA, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "environmentBRDFTexture" in YY,
              get: YY => YY.environmentBRDFTexture,
              set: (YY, rY) => {
                YY.environmentBRDFTexture = rY
              }
            },
            metadata: rY
          }, sg, ig), (0, NY.i)(YY, null, lA, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: YY => "forceNormalForward" in YY,
              get: YY => YY.forceNormalForward,
              set: (YY, rY) => {
                YY.forceNormalForward = rY
              }
            },
            metadata: rY
          }, yg, Qg), (0, NY.i)(YY, null, TA, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: YY => "enableSpecularAntiAliasing" in YY,
              get: YY => YY.enableSpecularAntiAliasing,
              set: (YY, rY) => {
                YY.enableSpecularAntiAliasing = rY
              }
            },
            metadata: rY
          }, og, Wg), (0, NY.i)(YY, null, eA, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: YY => "useHorizonOcclusion" in YY,
              get: YY => YY.useHorizonOcclusion,
              set: (YY, rY) => {
                YY.useHorizonOcclusion = rY
              }
            },
            metadata: rY
          }, Eg, mg), (0, NY.i)(YY, null, NA, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: YY => "useRadianceOcclusion" in YY,
              get: YY => YY.useRadianceOcclusion,
              set: (YY, rY) => {
                YY.useRadianceOcclusion = rY
              }
            },
            metadata: rY
          }, Vg, Sg), (0, NY.i)(YY, null, BA, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: YY => "unlit" in YY,
              get: YY => YY.unlit,
              set: (YY, rY) => {
                YY.unlit = rY
              }
            },
            metadata: rY
          }, lg, Tg), (0, NY.i)(YY, null, cA, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: YY => "applyDecalMapAfterDetailMap" in YY,
              get: YY => YY.applyDecalMapAfterDetailMap,
              set: (YY, rY) => {
                YY.applyDecalMapAfterDetailMap = rY
              }
            },
            metadata: rY
          }, eg, Ng), (0, NY.i)(YY, null, KA, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "debugMode" in YY,
              get: YY => YY.debugMode,
              set: (YY, rY) => {
                YY.debugMode = rY
              }
            },
            metadata: rY
          }, Bg, cg), (0, NY.i)(YY, null, HA, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: YY => "transparencyMode" in YY,
              get: YY => YY.transparencyMode
            },
            metadata: rY
          }, null, ZA), rY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rY
          })
        })(), YY.SSS_QUALITY_LOW = 0, YY.SSS_QUALITY_MEDIUM = 1, YY.SSS_QUALITY_HIGH = 2, YY._noiseTextures = {}, YY.ForceGLSL = !1, YY._ShaderLoader = new sr.c((() => [Promise.all([DY.e(307), DY.e(373)]).then((() => DY(60797))), Promise.all([DY.e(312), DY.e(308), DY.e(372), DY.e(377)]).then((() => DY(60812)))]), (() => [Promise.all([DY.e(326), DY.e(328), DY.e(376)]).then((() => DY(60856))), Promise.all([DY.e(326), DY.e(329), DY.e(375), DY.e(378)]).then((() => DY(60867)))])), YY
      })(),
      tr = !1;
    tr || (tr = !0, (0, xY.d)(), (0, br.i)("BABYLON.OpenPBRMaterial", Lr));
    var YD = DY(36552);
    class rD {
      constructor(YY) {
        this.name = fr.c.NAME_PROCEDURALTEXTURE, this.LQ = YY
      }
      register() {
        this.LQ._beforeClearStage.registerStep(fr.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.LQ.proceduralTexturesEnabled) {
          er.i.StartPerformanceCounter("Procedural textures", this.LQ.proceduralTextures.length > 0);
          for (let YY = 0; YY < this.LQ.proceduralTextures.length; YY++) {
            const rY = this.LQ.proceduralTextures[YY];
            rY._shouldRender() && rY.render()
          }
          er.i.EndPerformanceCounter("Procedural textures", this.LQ.proceduralTextures.length > 0)
        }
      }
    }
    var DD = DY(39437);
    let FD = (() => {
      var YY;
      let rY, FY, AY, RY, OY, gY = HY.i,
        aY = [],
        vY = [],
        uY = [],
        sY = [],
        iY = [],
        yY = [],
        oY = [],
        WY = [],
        EY = [];
      return YY = class extends gY {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(YY, rY, DY, FY) {
          let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, FY, !IY), this.isEnabled = ((0, NY.j)(this, aY), (0, NY.j)(this, vY, !0)), this.autoClear = ((0, NY.j)(this, uY), (0, NY.j)(this, sY, !0)), this.onGenerated = (0, NY.j)(this, iY), this.onGeneratedObservable = new YD.e, this.onBeforeGenerationObservable = new YD.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, NY.j)(this, yY, void 0), this._drawWrapper = (0, NY.j)(this, oY), this._textures = {}, this._size = (0, NY.j)(this, WY, void 0), this._textureType = (0, NY.j)(this, EY), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === AY || AY instanceof HY.i ? (this._options = {}, this._fallbackTexture = AY) : (this._options = AY, this._fallbackTexture = AY.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let gY = (FY = this.hT() || QY.d.LastCreatedScene)._getComponent(fr.c.NAME_PROCEDURALTEXTURE);
          gY || (gY = new rD(FY), FY.ADY(gY)), this._options.skipSceneRegistration || FY.proceduralTextures.push(this), this._fullEngine = FY.ky(), this.name = YY, this.isRenderTarget = !0, this._size = rY, this._textureType = OY, this._generateMipMaps = IY, this._drawWrapper = new DD.b(this._fullEngine), this.setFragment(DY);
          const mY = this._createRtWrapper(RY, rY, IY, OY);
          this._texture = mY.texture;
          const VY = [];
          VY.push(1, 1), VY.push(-1, 1), VY.push(-1, -1), VY.push(1, -1), this._vertexBuffers[MY.l.PositionKind] = new MY.l(this._fullEngine, VY, MY.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(YY, rY, DY, FY) {
          return YY ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(rY, {
            generateMipMaps: DY,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: FY,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(rY, {
            generateMipMaps: DY,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: FY,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(YY) {
          this._drawWrapper.effect = YY
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((YY => {
            this._contentData = this.readPixels(0, 0, YY), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const YY = this._fullEngine,
            rY = [];
          rY.push(0), rY.push(1), rY.push(2), rY.push(0), rY.push(2), rY.push(3), this._indexBuffer = YY.createIndexBuffer(rY)
        }
        _rebuild() {
          const YY = this._vertexBuffers[MY.l.PositionKind];
          YY && YY._rebuild(), this._createIndexBuffer(), this.refreshRate === Nr.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = Nr.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(YY) {
          if (this.isReady()) return void YY(this);
          const rY = this.getEffect();
          rY && rY.executeWhenCompiled((() => {
            YY(this)
          }))
        }
        isReady() {
          const YY = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const rY = this._getDefines();
          if (this._drawWrapper.effect && rY === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const FY = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== rY && (this._cachedDefines = rY, this._drawWrapper.effect = YY.createEffect(FY, [MY.l.PositionKind], this._uniforms, this._samplers, rY, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([DY.e(381).then((() => DY(60945))), this._options.extraInitializationsAsync()]) : await Promise.all([DY.e(382).then((() => DY(60948))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await DY.e(381).then((() => DY(60945))) : await DY.e(382).then((() => DY(60948)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(YY) {
          this._fragment = YY
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(YY) {
          this._refreshRate = YY, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(YY, rY) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const DY = this._texture.isCube;
          this._rtWrapper.dispose();
          const FY = this._createRtWrapper(DY, YY, rY, this._textureType);
          this._texture = FY.texture, this._size = YY, this._generateMipMaps = rY
        }
        _checkUniform(YY) {
          -1 === this._uniforms.indexOf(YY) && this._uniforms.push(YY)
        }
        setTexture(YY, rY) {
          return -1 === this._samplers.indexOf(YY) && this._samplers.push(YY), this._textures[YY] = rY, this
        }
        setFloat(YY, rY) {
          return this._checkUniform(YY), this._floats[YY] = rY, this
        }
        setInt(YY, rY) {
          return this._checkUniform(YY), this._ints[YY] = rY, this
        }
        setFloats(YY, rY) {
          return this._checkUniform(YY), this._floatsArrays[YY] = rY, this
        }
        setColor3(YY, rY) {
          return this._checkUniform(YY), this._colors3[YY] = rY, this
        }
        setColor4(YY, rY) {
          return this._checkUniform(YY), this._colors4[YY] = rY, this
        }
        setVector2(YY, rY) {
          return this._checkUniform(YY), this._vectors2[YY] = rY, this
        }
        setVector3(YY, rY) {
          return this._checkUniform(YY), this._vectors3[YY] = rY, this
        }
        setVector4(YY, rY) {
          return this._checkUniform(YY), this._vectors4[YY] = rY, this
        }
        setMatrix(YY, rY) {
          return this._checkUniform(YY), this._matrices[YY] = rY, this
        }
        render(YY) {
          const rY = this.hT();
          if (!rY) return;
          const DY = this._fullEngine;
          if (DY.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), DY.setState(!1), !this.nodeMaterialSource) {
            for (const YY in this._textures) this._drawWrapper.effect.setTexture(YY, this._textures[YY]);
            for (const YY in this._ints) this._drawWrapper.effect.setInt(YY, this._ints[YY]);
            for (const YY in this._floats) this._drawWrapper.effect.setFloat(YY, this._floats[YY]);
            for (const YY in this._floatsArrays) this._drawWrapper.effect.setArray(YY, this._floatsArrays[YY]);
            for (const YY in this._colors3) this._drawWrapper.effect.setColor3(YY, this._colors3[YY]);
            for (const YY in this._colors4) {
              const rY = this._colors4[YY];
              this._drawWrapper.effect.setFloat4(YY, rY.r, rY.g, rY.b, rY.a)
            }
            for (const YY in this._vectors2) this._drawWrapper.effect.setVector2(YY, this._vectors2[YY]);
            for (const YY in this._vectors3) this._drawWrapper.effect.setVector3(YY, this._vectors3[YY]);
            for (const YY in this._vectors4) this._drawWrapper.effect.setVector4(YY, this._vectors4[YY]);
            for (const YY in this._matrices) this._drawWrapper.effect.setMatrix(YY, this._matrices[YY])
          }
          if (!this._texture || !this._rtWrapper) return;
          DY._enableGPUDebugMarkers && DY._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const FY = DY.currentViewport;
          if (this.isCube)
            for (let AY = 0; AY < 6; AY++) DY.bindFramebuffer(this._rtWrapper, AY, void 0, void 0, !0), DY.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", AY), this.autoClear && DY.clear(rY.clearColor, !0, !1, !1), DY.drawElementsType(IY.c.TriangleFillMode, 0, 6), DY.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let YY = 1;
            this._rtWrapper.is3D ? YY = this._rtWrapper.depth : this._rtWrapper.is2DArray && (YY = this._rtWrapper.layers);
            for (let FY = 0; FY < YY; FY++) {
              if (DY.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, FY), DY.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== YY ? FY / (YY - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", FY);
                for (const YY in this._textures) this._drawWrapper.effect.setTexture(YY, this._textures[YY])
              }
              this.autoClear && DY.clear(rY.clearColor, !0, !1, !1), DY.drawElementsType(IY.c.TriangleFillMode, 0, 6), DY.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          FY && DY.setViewport(FY), this.isCube && DY.generateMipMapsForCubemap(this._texture, !0), DY._enableGPUDebugMarkers && DY._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const rY = this.getSize(),
            DY = new YY(this.name, rY.width, this._fragment, this.hT(), this._fallbackTexture, this._generateMipMaps);
          return DY.hasAlpha = this.hasAlpha, DY.level = this.level, DY.coordinatesMode = this.coordinatesMode, DY
        }
        dispose() {
          const YY = this.hT();
          if (!YY) return;
          const rY = YY.proceduralTextures.indexOf(this);
          rY >= 0 && YY.proceduralTextures.splice(rY, 1);
          const DY = this._vertexBuffers[MY.l.PositionKind];
          DY && (DY.dispose(), this._vertexBuffers[MY.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const DY = "function" === typeof Symbol && Symbol.metadata ? Object.create(gY[Symbol.metadata] ?? null) : void 0;
        rY = [(0, BY.M)()], FY = [(0, BY.M)()], AY = [(0, BY.M)()], RY = [(0, BY.M)()], OY = [(0, BY.M)()], (0, NY.i)(YY, null, OY, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: YY => "refreshRate" in YY,
            get: YY => YY.refreshRate
          },
          metadata: DY
        }, null, aY), (0, NY.i)(null, null, rY, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isEnabled" in YY,
            get: YY => YY.isEnabled,
            set: (YY, rY) => {
              YY.isEnabled = rY
            }
          },
          metadata: DY
        }, vY, uY), (0, NY.i)(null, null, FY, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: YY => "autoClear" in YY,
            get: YY => YY.autoClear,
            set: (YY, rY) => {
              YY.autoClear = rY
            }
          },
          metadata: DY
        }, sY, iY), (0, NY.i)(null, null, AY, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: YY => "_generateMipMaps" in YY,
            get: YY => YY._generateMipMaps,
            set: (YY, rY) => {
              YY._generateMipMaps = rY
            }
          },
          metadata: DY
        }, yY, oY), (0, NY.i)(null, null, RY, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: YY => "_size" in YY,
            get: YY => YY._size,
            set: (YY, rY) => {
              YY._size = rY
            }
          },
          metadata: DY
        }, WY, EY), DY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DY
        })
      })(), YY
    })();

    function AD(YY) {
      return "texture" in YY
    }

    function ID(YY) {
      return "value" in YY
    }
    async function RD(YY, rY, FY) {
      const AY = [rY.red, rY.green, rY.blue, rY.alpha],
        IY = [],
        RY = [];
      for (let DY = 0; DY < 4; DY++) {
        const YY = AY[DY];
        if (YY)
          if (AD(YY)) {
            if (YY.sourceChannel < 0 || YY.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let rY = IY.indexOf(YY.texture); - 1 === rY && (rY = IY.length, IY.push(YY.texture)), RY[DY] = rY
          } else {
            if (!ID(YY)) throw new Error("Invalid channel input configuration");
            if (YY.value < 0 || YY.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            RY[DY] = -1
          }
        else RY[DY] = -1
      }
      let OY = rY.outputSize;
      if (!OY && IY.length > 0) {
        let YY = 0;
        for (const rY of IY) {
          const DY = rY.getSize(),
            FY = Math.max(DY.width, DY.height);
          FY > YY && (YY = FY, OY = DY.width === DY.height ? YY : DY)
        }
      }
      OY = OY || 512;
      const gY = [],
        aY = new Set;
      for (let DY = 0; DY < 4; DY++) {
        const YY = AY[DY],
          rY = ["RED", "GREEN", "BLUE", "ALPHA"][DY];
        if (YY && AD(YY)) {
          gY.push(`${rY}_FROM_TEXTURE`);
          const YY = RY[DY];
          aY.add(YY)
        }
      }
      aY.forEach((YY => {
        gY.push(`USE_TEXTURE${YY}`)
      }));
      const vY = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: FY.ky().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            FY.ky().isWebGPU ? await Promise.all([DY.e(379).then((() => DY(60930)))]) : await Promise.all([DY.e(380).then((() => DY(60936)))])
          },
          skipSceneRegistration: !0
        },
        uY = new FD(YY, OY, "textureMerger", FY, vY);
      uY.refreshRate = -1, uY.defines = gY.length > 0 ? "#define " + gY.join("\n#define ") + "\n" : "";
      for (let DY = 0; DY < IY.length; DY++) sY = IY[DY], (iY = uY).uOffset = sY.uOffset, iY.vOffset = sY.vOffset, iY.uScale = sY.uScale, iY.vScale = sY.vScale, iY.uAng = sY.uAng, iY.vAng = sY.vAng, iY.wAng = sY.wAng, iY.uRotationCenter = sY.uRotationCenter, iY.vRotationCenter = sY.vRotationCenter, uY.setTexture(`inputTexture${DY}`, IY[DY]);
      var sY, iY;
      for (let DY = 0; DY < 4; DY++) {
        const YY = AY[DY],
          rY = ["red", "green", "blue", "alpha"][DY];
        if (YY && AD(YY)) {
          const FY = RY[DY];
          uY.setInt(`${rY}TextureIndex`, FY), uY.setInt(`${rY}SourceChannel`, YY.sourceChannel)
        } else {
          let FY;
          FY = YY && ID(YY) ? YY.value : 3 === DY ? 1 : 0, uY.setFloat(`${rY}ConstantValue`, FY)
        }
      }
      return await new Promise(((YY, rY) => {
        uY.executeWhenReady((() => {
          try {
            uY.render(), YY(uY)
          } catch (DY) {
            rY(DY instanceof Error ? DY : new Error(String(DY)))
          }
        }))
      }))
    }

    function OD(YY, rY) {
      return {
        texture: YY,
        sourceChannel: rY
      }
    }

    function gD(YY) {
      return {
        value: YY
      }
    }

    function aD(YY, rY, DY, FY) {
      return {
        red: YY,
        green: rY,
        blue: DY,
        alpha: FY
      }
    }
    var vD = DY(38969),
      uD = DY(39056),
      sD = DY(36542),
      iD = DY(39116),
      yD = DY(39049);
    class QD {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class oD extends vD.e {
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
        return !!this._options?.enableMultiview || this.VQ > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new QD;
        super(null), void 0 === YY.deterministicLockstep && (YY.deterministicLockstep = !1), void 0 !== YY.timeStep && (this._timeStep = YY.timeStep), void 0 === YY.lockstepMaxSteps && (YY.lockstepMaxSteps = 4), this._options = YY, sD.c.SetMatrixPrecision(!!YY.useHighPrecisionMatrix), this._caps = {
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
        }, YY.enableMultiview && (this._caps.multiview = {
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
        }, YY.renderingCanvas && (this._renderingCanvas = YY.renderingCanvas), cY.d.Log(`Babylon.js v${vD.e.Version} - Null engine`);
        const rY = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (rY.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (rY.Blob = function() {})
      }
      createVertexBuffer(YY) {
        const rY = new uD.e;
        return rY.references = 1, rY
      }
      createIndexBuffer(YY) {
        const rY = new uD.e;
        return rY.references = 1, rY
      }
      clear(YY, rY, DY) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(YY, rY, DY) {
        this._cachedViewport = YY
      }
      createUniformBuffer(YY) {
        const rY = new uD.e;
        return rY.references = 1, rY.gu = YY instanceof Array ? YY.length * Float32Array.BYTES_PER_ELEMENT : YY.byteLength, rY
      }
      createDynamicUniformBuffer(YY) {
        return this.createUniformBuffer(YY)
      }
      updateUniformBuffer(YY, rY, DY, FY) {}
      bindUniformBufferBase(YY, rY, DY) {}
      bindUniformBlock(YY, rY, DY) {}
      createShaderProgram(YY, rY, DY, FY, AY) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(YY, rY) {
        return []
      }
      getAttributes(YY, rY) {
        return []
      }
      bindSamplers(YY) {
        this._currentEffect = null
      }
      enableEffect(YY) {
        YY = null !== YY && (0, yD.c)(YY) ? YY.effect : YY, this._currentEffect = YY, YY && (YY.onBind && YY.onBind(YY), YY._onBindObservable && YY._onBindObservable.notifyObservers(YY))
      }
      setStateCullFaceType(YY, rY) {}
      setState(YY) {}
      setIntArray(YY, rY) {
        return !0
      }
      setIntArray2(YY, rY) {
        return !0
      }
      setIntArray3(YY, rY) {
        return !0
      }
      setIntArray4(YY, rY) {
        return !0
      }
      setFloatArray(YY, rY) {
        return !0
      }
      setFloatArray2(YY, rY) {
        return !0
      }
      setFloatArray3(YY, rY) {
        return !0
      }
      setFloatArray4(YY, rY) {
        return !0
      }
      setArray(YY, rY) {
        return !0
      }
      setArray2(YY, rY) {
        return !0
      }
      setArray3(YY, rY) {
        return !0
      }
      setArray4(YY, rY) {
        return !0
      }
      setMatrices(YY, rY) {
        return !0
      }
      setMatrix3x3(YY, rY) {
        return !0
      }
      setMatrix2x2(YY, rY) {
        return !0
      }
      setFloat(YY, rY) {
        return !0
      }
      setFloat2(YY, rY, DY) {
        return !0
      }
      setFloat3(YY, rY, DY, FY) {
        return !0
      }
      setBool(YY, rY) {
        return !0
      }
      setFloat4(YY, rY, DY, FY, AY) {
        return !0
      }
      setAlphaMode(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[DY] !== YY && (this.alphaState.setAlphaBlend(0 !== YY, 0), rY || this.setDepthWrite(0 === YY), this._alphaMode[DY] = YY)
      }
      bindBuffers(YY, rY, DY) {}
      wipeCaches(YY) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, YY && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(YY, rY, DY, FY) {}
      drawElementsType(YY, rY, DY, FY) {}
      drawArraysType(YY, rY, DY, FY) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(YY) {}
      createTexture(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          RY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          OY = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const gY = new Br.c(this, 1),
          aY = String(YY);
        return gY.url = aY, gY.generateMipMaps = !rY, gY.samplingMode = AY, gY.invertY = DY, gY.baseWidth = this._options.textureSize, gY.baseHeight = this._options.textureSize, gY.width = this._options.textureSize, gY.height = this._options.textureSize, OY && (gY.format = OY), RY && (gY._buffer = RY), gY.isReady = !0, IY && setTimeout((() => {
          IY(gY)
        })), this._internalTexturesCache.push(gY), gY
      }
      _createHardwareRenderTargetWrapper(YY, rY, DY) {
        const FY = new iD.b(YY, rY, DY, this);
        return this._renderTargetWrapperCache.push(FY), FY
      }
      createRenderTargetTexture(YY, rY) {
        const DY = this._createHardwareRenderTargetWrapper(!1, !1, YY),
          FY = {};
        void 0 !== rY && "object" === typeof rY ? (FY.generateMipMaps = rY.generateMipMaps, FY.generateDepthBuffer = void 0 === rY.generateDepthBuffer || rY.generateDepthBuffer, FY.generateStencilBuffer = FY.generateDepthBuffer && rY.generateStencilBuffer, FY.type = void 0 === rY.type ? 0 : rY.type, FY.samplingMode = void 0 === rY.samplingMode ? 3 : rY.samplingMode) : (FY.generateMipMaps = rY, FY.generateDepthBuffer = !0, FY.generateStencilBuffer = !1, FY.type = 0, FY.samplingMode = 3);
        const AY = new Br.c(this, 5);
        DY.setTexture(AY);
        const IY = YY.width || YY,
          RY = YY.height || YY;
        return DY._generateDepthBuffer = FY.generateDepthBuffer, DY._generateStencilBuffer = !!FY.generateStencilBuffer, AY.baseWidth = IY, AY.baseHeight = RY, AY.width = IY, AY.height = RY, AY.isReady = !0, AY.samples = 1, AY.generateMipMaps = !!FY.generateMipMaps, AY.samplingMode = FY.samplingMode, AY.type = FY.type, this._internalTexturesCache.push(AY), DY
      }
      createMultiviewRenderTargetTexture(YY, rY) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const DY = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: YY,
            height: rY
          }),
          FY = new Br.c(this, 5, !0);
        return FY.baseWidth = YY, FY.baseHeight = rY, FY.width = YY, FY.height = rY, FY.isMultiview = !0, FY.isReady = !0, FY.format = 5, FY.samples = 1, DY.setTextures(FY), DY
      }
      bindMultiviewFramebuffer(YY) {
        this.bindFramebuffer(YY, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(YY, rY) {
        const DY = this._createHardwareRenderTargetWrapper(!1, !0, YY),
          FY = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...rY
          };
        FY.generateStencilBuffer = FY.generateDepthBuffer && FY.generateStencilBuffer, (1 !== FY.type || this._caps.textureFloatLinearFiltering) && (2 !== FY.type || this._caps.textureHalfFloatLinearFiltering) || (FY.samplingMode = 1), DY._generateDepthBuffer = FY.generateDepthBuffer, DY._generateStencilBuffer = !!FY.generateStencilBuffer;
        const AY = new Br.c(this, 5);
        return AY.baseWidth = YY, AY.baseHeight = YY, AY.width = YY, AY.height = YY, AY.isReady = !0, AY.isCube = !0, AY.samples = 1, AY.generateMipMaps = !!FY.generateMipMaps, AY.samplingMode = FY.samplingMode, AY.type = FY.type, this._internalTexturesCache.push(AY), DY
      }
      updateTextureSamplingMode(YY, rY) {
        rY.samplingMode = YY
      }
      createRawTexture(YY, rY, DY, FY, AY, IY, RY) {
        let OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          aY = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const vY = new Br.c(this, 3);
        return vY.baseWidth = rY, vY.baseHeight = DY, vY.width = rY, vY.height = DY, vY.format = FY, vY.generateMipMaps = AY, vY.samplingMode = RY, vY.invertY = IY, vY._compression = OY, vY.type = gY, vY._useSRGBBuffer = aY, this._doNotHandleContextLost || (vY._bufferView = YY), vY
      }
      updateRawTexture(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        YY && (YY._bufferView = rY, YY.format = DY, YY.invertY = FY, YY._compression = AY, YY.type = IY, YY._useSRGBBuffer = RY)
      }
      bindFramebuffer(YY, rY, DY, FY, AY) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = YY, this._currentFramebuffer = null, this._cachedViewport && !AY && this.setViewport(this._cachedViewport, DY, FY)
      }
      unBindFramebuffer(YY) {
        let rY = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, rY && rY(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(YY) {
        const rY = new uD.e;
        return rY.references = 1, rY.gu = 1, rY
      }
      updateDynamicTexture(YY, rY, DY) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(YY) {}
      updateDynamicIndexBuffer(YY, rY) {}
      updateDynamicVertexBuffer(YY, rY, DY, FY) {}
      _bindTextureDirectly(YY, rY) {
        return this._boundTexturesCache[this._activeChannel] !== rY && (this._boundTexturesCache[this._activeChannel] = rY, !0)
      }
      _bindTexture(YY, rY) {
        YY < 0 || this._bindTextureDirectly(0, rY)
      }
      _deleteBuffer(YY) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(YY) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(YY, rY, DY, FY, AY) {}
      _uploadDataToTextureDirectly(YY, rY) {}
      _uploadArrayBufferViewToTexture(YY, rY) {}
      _uploadImageToTexture(YY, rY) {}
    }
    DY(39154), DY(39192), DY(39151);
    async function WD(YY) {
      const rY = YY.getInternalTexture();
      if (!rY || 1 !== rY.source) return null;
      if (rY.invertY) {
        const rY = YY.hT()?.ky();
        if (!(rY instanceof oD)) return null
      }
      const DY = rY._buffer;
      let FY, IY = YY.mimeType;
      try {
        DY ? ArrayBuffer.isView(DY) ? FY = DY.buffer.slice(DY.byteOffset, DY.byteOffset + DY.byteLength) : DY instanceof ArrayBuffer ? FY = DY : DY instanceof Blob ? (FY = await DY.arrayBuffer(), IY = DY.type || IY) : "string" === typeof DY ? (FY = await AY.Tools.LoadFileAsync(DY), IY = (0, gY.c)(DY) || IY) : "undefined" !== typeof HTMLImageElement && DY instanceof HTMLImageElement && (FY = await AY.Tools.LoadFileAsync(DY.src), IY = (0, gY.c)(DY.src) || IY) : (FY = await AY.Tools.LoadFileAsync(rY.url), IY = (0, gY.c)(rY.url) || IY)
      } catch {
        return null
      }
      if (FY && !IY && rY.url) {
        const YY = rY.url.match(/^data:([^;,]+)/);
        IY = YY ? YY[1] : (0, gY.c)(rY.url)
      }
      return FY && IY ? {
        data: FY,
        mimeType: IY
      } : null
    }
    const ED = 1e-6,
      mD = new oY.Color3(.04, .04, .04),
      VD = 1024,
      SD = oY.Color3.White(),
      lD = oY.Color3.BlackReadOnly;

    function TD(YY) {
      switch (YY) {
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

    function eD(YY, rY, DY) {
      if (rY < mD.r) return 0;
      const FY = mD.r,
        AY = YY * DY / (1 - mD.r) + rY - 2 * mD.r,
        IY = AY * AY - 4 * FY * (mD.r - rY);
      return mY.Clamp((-AY + Math.sqrt(IY)) / (2 * FY), 0, 1)
    }

    function ND(YY) {
      const rY = YY.diffuseColor.toLinearSpace(YY.hT().ky().useExactSrgbConversions).scale(.5),
        DY = YY.alpha,
        FY = function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new JY.q(0, 1),
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new JY.q(0, .1),
            FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new JY.q(0, .1),
            AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new JY.q(1300, .1);
          return function(YY, rY, DY, FY, AY) {
            return (1 - YY) * (1 - YY) * (1 - YY) * rY + 3 * (1 - YY) * (1 - YY) * YY * DY + 3 * (1 - YY) * YY * YY * FY + YY * YY * YY * AY
          }(Math.pow(YY / AY.x, .333333), rY.y, DY.y, FY.y, AY.y)
        }(mY.Clamp(YY.specularPower, 0, VD));
      return {
        baseColorFactor: [rY.r, rY.g, rY.b, DY],
        metallicFactor: 0,
        roughnessFactor: FY
      }
    }

    function BD(YY, rY) {
      rY.needAlphaBlending() ? YY.alphaMode = "BLEND" : rY.needAlphaTesting() && (YY.alphaMode = "MASK", YY.alphaCutoff = rY.alphaCutOff)
    }

    function cD(YY, rY, DY) {
      const FY = new Uint8Array(YY * rY * 4);
      for (let AY = 0; AY < FY.length; AY += 4) FY[AY] = FY[AY + 1] = FY[AY + 2] = FY[AY + 3] = 255;
      return lY.c.CreateRGBATexture(FY, YY, rY, DY)
    }

    function KD(YY) {
      if (YY instanceof Uint8Array) {
        const rY = YY.length,
          DY = new Float32Array(YY.length);
        for (let FY = 0; FY < rY; ++FY) DY[FY] = YY[FY] / 255;
        return DY
      }
      if (YY instanceof Float32Array) return YY;
      throw new Error("Unsupported pixel format!")
    }
    class HD {
      constructor(YY) {
        this._exporter = YY, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(YY) {
        return YY ? this._textureMap.get(YY.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(YY, rY) {
        const DY = ND(YY),
          FY = {
            name: YY.name
          };
        if (null == YY.backFaceCulling || YY.backFaceCulling || (YY.twoSidedLighting || AY.Tools.Warn(YY.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), FY.doubleSided = !0), rY) {
          const rY = [],
            AY = YY.diffuseTexture;
          AY && rY.push(this.exportTextureAsync(AY).then((YY => {
            YY && (DY.baseColorTexture = YY)
          })));
          const IY = YY.bumpTexture;
          IY && rY.push(this.exportTextureAsync(IY).then((YY => {
            YY && (FY.normalTexture = YY, 1 !== IY.level && (FY.normalTexture.scale = IY.level))
          })));
          const RY = YY.emissiveTexture;
          RY && (FY.emissiveFactor = [1, 1, 1], rY.push(this.exportTextureAsync(RY).then((YY => {
            YY && (FY.emissiveTexture = YY)
          }))));
          const OY = YY.ambientTexture;
          OY && rY.push(this.exportTextureAsync(OY).then((YY => {
            if (YY) {
              const rY = {
                index: YY.index
              };
              FY.occlusionTexture = rY
            }
          }))), rY.length > 0 && (this._exporter._materialNeedsUVsSet.add(YY), await Promise.all(rY))
        }(YY.alpha < 1 || YY.opacityTexture) && (YY.alphaMode === TY.b.ALPHA_COMBINE ? FY.alphaMode = "BLEND" : AY.Tools.Warn(YY.name + ": glTF 2.0 does not support alpha mode: " + YY.alphaMode.toString())), YY.emissiveColor && !YY.emissiveColor.equalsWithEpsilon(lD, ED) && (FY.emissiveFactor = YY.emissiveColor.VDY()), FY.pbrMetallicRoughness = DY, BD(FY, YY), await this._finishMaterialAsync(FY, YY);
        const IY = this._exporter._materials;
        return IY.push(FY), IY.length - 1
      }
      async _finishMaterialAsync(YY, rY) {
        const DY = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", YY, rY),
          FY = [];
        for (const AY of DY) FY.push(this.exportTextureAsync(AY));
        await Promise.all(FY), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", YY, rY)
      }
      _resizeTexturesToSameDimensions(YY, rY, DY) {
        const FY = YY ? YY.getSize() : {
            width: 0,
            height: 0
          },
          AY = rY ? rY.getSize() : {
            width: 0,
            height: 0
          };
        let IY, RY;
        return FY.width < AY.width ? (IY = YY && YY instanceof SY.d ? VY.g.CreateResizedCopy(YY, AY.width, AY.height, !0) : cD(AY.width, AY.height, DY), RY = rY) : FY.width > AY.width ? (RY = rY && rY instanceof SY.d ? VY.g.CreateResizedCopy(rY, FY.width, FY.height, !0) : cD(FY.width, FY.height, DY), IY = YY) : (IY = YY, RY = rY), {
          texture1: IY,
          texture2: RY
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(YY, rY, DY) {
        const FY = new Array;
        if (!YY && !rY) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const AY = YY ? YY.hT() : rY ? rY.hT() : null;
        if (AY) {
          const IY = this._resizeTexturesToSameDimensions(YY, rY, AY),
            RY = IY.texture1?.getSize();
          let OY, gY;
          const aY = RY.width,
            vY = RY.height,
            uY = await IY.texture1.readPixels(),
            sY = await IY.texture2.readPixels();
          if (!uY) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (OY = KD(uY), !sY) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          gY = KD(sY);
          const iY = gY.byteLength,
            yY = new Uint8Array(iY),
            QY = new Uint8Array(iY),
            WY = 4,
            EY = new oY.Color3(0, 0, 0);
          let mY = 0,
            VY = 0;
          for (let YY = 0; YY < vY; ++YY)
            for (let rY = 0; rY < aY; ++rY) {
              const FY = (aY * YY + rY) * WY,
                RY = {
                  diffuseColor: new oY.Color3(OY[FY], OY[FY + 1], OY[FY + 2]).toLinearSpace(AY.ky().useExactSrgbConversions).multiply(DY.diffuseColor),
                  specularColor: new oY.Color3(gY[FY], gY[FY + 1], gY[FY + 2]).toLinearSpace(AY.ky().useExactSrgbConversions).multiply(DY.specularColor),
                  glossiness: gY[FY + 3] * DY.glossiness
                },
                vY = this._convertSpecularGlossinessToMetallicRoughness(RY);
              EY.r = Math.max(EY.r, vY.baseColor.r), EY.g = Math.max(EY.g, vY.baseColor.g), EY.b = Math.max(EY.b, vY.baseColor.b), mY = Math.max(mY, vY.metallic), VY = Math.max(VY, vY.roughness), QY[FY] = 255 * vY.baseColor.r, QY[FY + 1] = 255 * vY.baseColor.g, QY[FY + 2] = 255 * vY.baseColor.b, QY[FY + 3] = IY.texture1.hasAlpha ? 255 * OY[FY + 3] : 255, yY[FY] = 0, yY[FY + 1] = 255 * vY.roughness, yY[FY + 2] = 255 * vY.metallic, yY[FY + 3] = 255
            }
          const SY = {
            baseColor: EY,
            metallic: mY,
            roughness: VY
          };
          let lY = !1,
            TY = !1;
          for (let YY = 0; YY < vY; ++YY)
            for (let rY = 0; rY < aY; ++rY) {
              const DY = (aY * YY + rY) * WY;
              QY[DY] /= SY.baseColor.r > ED ? SY.baseColor.r : 1, QY[DY + 1] /= SY.baseColor.g > ED ? SY.baseColor.g : 1, QY[DY + 2] /= SY.baseColor.b > ED ? SY.baseColor.b : 1;
              const FY = oY.Color3.FromInts(QY[DY], QY[DY + 1], QY[DY + 2]).toGammaSpace(AY.ky().useExactSrgbConversions);
              QY[DY] = 255 * FY.r, QY[DY + 1] = 255 * FY.g, QY[DY + 2] = 255 * FY.b, FY.equalsWithEpsilon(SD, ED) || (TY = !0), yY[DY + 1] /= SY.roughness > ED ? SY.roughness : 1, yY[DY + 2] /= SY.metallic > ED ? SY.metallic : 1;
              oY.Color3.FromInts(255, yY[DY + 1], yY[DY + 2]).equalsWithEpsilon(SD, ED) || (lY = !0)
            }
          return lY && FY.push((0, eY.EncodeImageAsync)(yY, aY, vY).then((YY => {
            SY.metallicRoughnessTextureData = YY
          }))), TY && FY.push((0, eY.EncodeImageAsync)(QY, aY, vY).then((YY => {
            SY.baseColorTextureData = YY
          }))), await Promise.all(FY).then((() => SY))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(YY) {
        const rY = this._getPerceivedBrightness(YY.diffuseColor),
          DY = this._getPerceivedBrightness(YY.specularColor),
          FY = 1 - this._getMaxComponent(YY.specularColor),
          AY = eD(rY, DY, FY),
          IY = YY.diffuseColor.scale(FY / (1 - mD.r) / Math.max(1 - AY, ED)),
          RY = YY.specularColor.subtract(mD.scale(1 - AY)).scale(1 / Math.max(AY, ED));
        let OY = oY.Color3.Lerp(IY, RY, AY * AY);
        OY = OY.clampToRef(0, 1, OY);
        return {
          baseColor: OY,
          metallic: AY,
          roughness: 1 - YY.glossiness
        }
      }
      _getPerceivedBrightness(YY) {
        return Math.sqrt(.299 * YY.r * YY.r + .587 * YY.g * YY.g + .114 * YY.b * YY.b)
      }
      _getMaxComponent(YY) {
        return Math.max(YY.r, Math.max(YY.g, YY.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
        const aY = [],
          vY = {
            baseColor: YY,
            metallic: rY,
            roughness: DY
          };
        if (gY)
          if (RY instanceof Lr) {
            if (RY.geometryOpacityTexture) {
              const YY = FY && FY.getInternalTexture() ? FY.getInternalTexture().uniqueId : 0,
                rY = RY.geometryOpacityTexture && RY.geometryOpacityTexture.getInternalTexture() ? RY.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                DY = Number(`${YY}${rY}`),
                AY = this._textureMap.get(DY);
              AY ? OY.baseColorTexture = AY : aY.push(RD("baseColorOpacityTexture", aD(FY ? OD(FY, 0) : gD(1), FY ? OD(FY, 1) : gD(1), FY ? OD(FY, 2) : gD(1), OD(RY.geometryOpacityTexture, 0)), RY.hT()).then((async YY => {
                const rY = await this.exportTextureAsync(YY, DY);
                rY && (OY.baseColorTexture = rY)
              })))
            } else FY && aY.push(this.exportTextureAsync(FY).then((YY => {
              YY && (OY.baseColorTexture = YY)
            })));
            if (RY._useMetallicFromMetallicTextureBlue && AY) aY.push(this.exportTextureAsync(AY).then((YY => {
              YY && (OY.metallicRoughnessTexture = YY)
            })));
            else if (IY || AY) {
              const YY = AY && AY.getInternalTexture() ? AY.getInternalTexture().uniqueId : 0,
                rY = IY && IY.getInternalTexture() ? IY.getInternalTexture().uniqueId : 0,
                DY = Number(`${YY}${rY}`),
                FY = this._textureMap.get(DY);
              FY ? OY.metallicRoughnessTexture = FY : aY.push(RD("MetalRoughTexture", aD(RY.ambientOcclusionTexture ? OD(RY.ambientOcclusionTexture, 0) : gD(1), IY ? OD(IY, 0) : gD(1), AY ? OD(AY, 0) : gD(1)), RY.hT()).then((async YY => {
                const rY = await this.exportTextureAsync(YY, DY);
                rY && (OY.metallicRoughnessTexture = rY)
              })))
            }
          } else FY && aY.push(this.exportTextureAsync(FY).then((YY => {
            YY && (OY.baseColorTexture = YY)
          }))), AY && aY.push(this.exportTextureAsync(AY).then((YY => {
            YY && (OY.metallicRoughnessTexture = YY)
          })));
        return aY.length > 0 && (this._exporter._materialNeedsUVsSet.add(RY), await Promise.all(aY)), vY
      }
      _getTextureSampler(YY) {
        const rY = {};
        if (!YY || !(YY instanceof SY.d)) return rY;
        const DY = this._getGLTFTextureWrapMode(YY.wrapU);
        10497 !== DY && (rY.wrapS = DY);
        const FY = this._getGLTFTextureWrapMode(YY.wrapV);
        switch (10497 !== FY && (rY.wrapT = FY), YY.samplingMode) {
          case SY.d.LINEAR_LINEAR:
            rY.magFilter = 9729, rY.minFilter = 9729;
            break;
          case SY.d.LINEAR_NEAREST:
            rY.magFilter = 9729, rY.minFilter = 9728;
            break;
          case SY.d.NEAREST_LINEAR:
            rY.magFilter = 9728, rY.minFilter = 9729;
            break;
          case SY.d.NEAREST_LINEAR_MIPLINEAR:
            rY.magFilter = 9728, rY.minFilter = 9987;
            break;
          case SY.d.NEAREST_NEAREST:
            rY.magFilter = 9728, rY.minFilter = 9728;
            break;
          case SY.d.NEAREST_LINEAR_MIPNEAREST:
            rY.magFilter = 9728, rY.minFilter = 9985;
            break;
          case SY.d.LINEAR_NEAREST_MIPNEAREST:
            rY.magFilter = 9729, rY.minFilter = 9984;
            break;
          case SY.d.LINEAR_NEAREST_MIPLINEAR:
            rY.magFilter = 9729, rY.minFilter = 9986;
            break;
          case SY.d.NEAREST_NEAREST_MIPLINEAR:
            rY.magFilter = 9728, rY.minFilter = 9986;
            break;
          case SY.d.LINEAR_LINEAR_MIPLINEAR:
            rY.magFilter = 9729, rY.minFilter = 9987;
            break;
          case SY.d.LINEAR_LINEAR_MIPNEAREST:
            rY.magFilter = 9729, rY.minFilter = 9985;
            break;
          case SY.d.NEAREST_NEAREST_MIPNEAREST:
            rY.magFilter = 9728, rY.minFilter = 9984
        }
        return rY
      }
      _getGLTFTextureWrapMode(YY) {
        switch (YY) {
          case SY.d.WRAP_ADDRESSMODE:
            return 10497;
          case SY.d.CLAMP_ADDRESSMODE:
            return 33071;
          case SY.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return AY.Tools.Error(`Unsupported Texture Wrap Mode ${YY}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(YY, rY, DY) {
        const FY = {
            diffuseColor: YY._albedoColor,
            specularColor: YY._reflectivityColor,
            glossiness: YY._microSurface
          },
          AY = YY._albedoTexture,
          IY = YY._reflectivityTexture,
          RY = YY._useMicroSurfaceFromReflectivityMapAlpha;
        if (IY && !RY) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((AY || IY) && DY) {
          this._exporter._materialNeedsUVsSet.add(YY);
          const DY = this._exportTextureSampler(AY || IY),
            RY = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(AY, IY, FY),
            OY = this._exporter._textures;
          if (RY.baseColorTextureData) {
            const YY = await this._exportImageAsync(`baseColor${OY.length}`, RY.baseColorTextureData);
            rY.baseColorTexture = this._exportTextureInfo(YY, DY, AY?.coordinatesIndex)
          }
          if (RY.metallicRoughnessTextureData) {
            const YY = await this._exportImageAsync(`metallicRoughness${OY.length}`, RY.metallicRoughnessTextureData);
            rY.metallicRoughnessTexture = this._exportTextureInfo(YY, DY, IY?.coordinatesIndex)
          }
          return RY
        }
        return this._convertSpecularGlossinessToMetallicRoughness(FY)
      }
      async exportPBRMaterialAsync(YY, rY) {
        const DY = {},
          FY = {
            name: YY.name
          },
          AY = YY.isMetallicWorkflow();
        if (AY) {
          const rY = YY._albedoColor,
            FY = YY.alpha;
          rY && (DY.baseColorFactor = [rY.r, rY.g, rY.b, FY])
        }
        const IY = AY ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(YY._albedoColor, YY._metallic, YY._roughness, YY._albedoTexture, YY._metallicTexture, YY._metallicTexture, YY, DY, rY) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(YY, DY, rY);
        await this._setMetallicRoughnessPbrMaterialAsync(IY, YY, FY, DY, rY), await this._finishMaterialAsync(FY, YY);
        const RY = this._exporter._materials;
        return RY.push(FY), RY.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(YY, rY, DY, FY, IY) {
        if (BD(DY, rY), YY.baseColor.equalsWithEpsilon(SD, ED) && mY.WithinEpsilon(rY.alpha, 1, ED) || (FY.baseColorFactor = [YY.baseColor.r, YY.baseColor.g, YY.baseColor.b, rY.alpha]), null != YY.metallic && 1 !== YY.metallic && (FY.metallicFactor = YY.metallic), null != YY.roughness && 1 !== YY.roughness && (FY.roughnessFactor = YY.roughness), null == rY.backFaceCulling || rY.backFaceCulling || (rY._twoSidedLighting || AY.Tools.Warn(rY.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), DY.doubleSided = !0), IY) {
          const YY = [],
            AY = rY instanceof lr ? rY._bumpTexture : rY.geometryNormalTexture;
          AY && YY.push(this.exportTextureAsync(AY).then((YY => {
            YY && (DY.normalTexture = YY, 1 !== AY.level && (DY.normalTexture.scale = AY.level))
          })));
          const IY = rY instanceof lr ? rY._ambientTexture : rY.ambientOcclusionTexture;
          IY && YY.push(new Promise((async YY => {
            if (rY instanceof Lr && FY.metallicRoughnessTexture) {
              const rY = this._exportTextureSampler(IY),
                DY = this._exporter._textures[FY.metallicRoughnessTexture.index].source,
                AY = this._exportTextureInfo(DY, rY, IY.coordinatesIndex);
              return this._textureMap.set(IY.uniqueId, AY), this._exporter._extensionsPostExportTextures("exporter", AY, IY), YY(AY)
            }
            return YY(await this.exportTextureAsync(IY))
          })).then((async YY => {
            if (YY) {
              const FY = {
                index: YY.index,
                texCoord: YY.texCoord,
                extensions: YY.extensions
              };
              DY.occlusionTexture = FY, FY.strength = rY instanceof lr ? rY._ambientTextureStrength : rY.ambientOcclusionTexture.level
            }
          })));
          const RY = rY instanceof lr ? rY._emissiveTexture : rY.emissionColorTexture;
          RY && YY.push(this.exportTextureAsync(RY).then((YY => {
            YY && (DY.emissiveTexture = YY)
          }))), YY.length > 0 && (this._exporter._materialNeedsUVsSet.add(rY), await Promise.all(YY))
        }
        const RY = rY instanceof lr ? rY._emissiveColor : rY.emissionColor;
        RY.equalsWithEpsilon(lD, ED) || (DY.emissiveFactor = RY.VDY()), DY.pbrMetallicRoughness = FY
      }
      async exportOpenPBRMaterialAsync(YY, rY) {
        const DY = {},
          FY = {
            name: YY.name
          },
          AY = YY.baseColor,
          IY = YY.geometryOpacity;
        AY && (DY.baseColorFactor = [AY.r, AY.g, AY.b, IY]);
        const RY = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(YY.baseColor, YY.baseMetalness, YY.specularRoughness, YY.baseColorTexture, YY.baseMetalnessTexture, YY.specularRoughnessTexture, YY, DY, rY);
        await this._setMetallicRoughnessPbrMaterialAsync(RY, YY, FY, DY, rY), await this._finishMaterialAsync(FY, YY);
        const OY = this._exporter._materials;
        return OY.push(FY), OY.length - 1
      }
      async exportTextureAsync(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = this._textureMap.get(rY ?? YY.uniqueId);
        if (DY) return DY;
        const FY = this._exportTextureSampler(YY),
          AY = await this._exportTextureImageAsync(YY);
        return DY = this._exportTextureInfo(AY, FY, YY.coordinatesIndex), this._textureMap.set(rY ?? YY.uniqueId, DY), this._exporter._extensionsPostExportTextures("exporter", DY, YY), DY
      }
      async _exportTextureImageAsync(YY) {
        const rY = YY.mimeType ?? "none",
          DY = this._internalTextureToImage,
          FY = YY.getInternalTexture().uniqueId;
        DY[FY] = DY[FY] || {};
        let IY = DY[FY][rY];
        return void 0 === IY && (IY = (async () => {
          const DY = await WD(YY);
          if (DY && TD(DY.mimeType) && ("none" === rY || DY.mimeType === rY)) return await this._exportImageAsync(YY.name, new Blob([DY.data], {
            type: DY.mimeType
          }));
          let FY = "image/png";
          "none" !== rY && (TD(rY) ? FY = rY : (FY = "image/png", AY.Tools.Warn(`Unsupported media type: ${rY}. Exporting texture as PNG.`)));
          const IY = YY.getSize(),
            RY = await (0, VY.c)(YY),
            OY = await (0, eY.EncodeImageAsync)(RY, IY.width, IY.height, FY);
          return await this._exportImageAsync(YY.name, OY)
        })(), DY[FY][rY] = IY), await IY
      }
      async _exportImageAsync(YY, rY) {
        const DY = this._exporter._images;
        let FY;
        if (this._exporter._shouldUseGlb) {
          FY = {
            name: YY,
            mimeType: rY.type,
            bufferView: void 0
          };
          const DY = await rY.arrayBuffer(),
            AY = this._exporter._bufferManager.createBufferView(new Uint8Array(DY));
          this._exporter._bufferManager.setBufferView(FY, AY)
        } else {
          const IY = YY.replace(/\.\/|\/|\.\\|\\/g, "_"),
            RY = function(YY) {
              switch (YY) {
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
            }(rY.type);
          let OY = IY + RY;
          DY.some((YY => YY.uri === OY)) && (OY = `${IY}_${AY.Tools.RandomId()}${RY}`), FY = {
            name: YY,
            uri: OY
          }, this._exporter._imageData[OY] = rY
        }
        return DY.push(FY), DY.length - 1
      }
      _exportTextureInfo(YY, rY, DY) {
        const FY = this._exporter._textures;
        let AY = FY.findIndex((DY => DY.sampler == rY && DY.source === YY)); - 1 === AY && (AY = FY.length, FY.push({
          source: YY,
          sampler: rY
        }));
        const IY = {
          index: AY
        };
        return DY && (IY.texCoord = DY), IY
      }
      _exportTextureSampler(YY) {
        const rY = this._getTextureSampler(YY),
          DY = this._exporter._samplers,
          FY = DY.findIndex((YY => YY.minFilter === rY.minFilter && YY.magFilter === rY.magFilter && YY.wrapS === rY.wrapS && YY.wrapT === rY.wrapT));
        return -1 !== FY ? FY : (DY.push(rY), DY.length - 1)
      }
    }
    var zD = DY(39180),
      ZD = DY(39337);
    (0, ZD.e)();
    var CD = DY(36533);
    const fD = FY.Matrix.Compose(new FY.xy(-1, 1, 1), FY.Quaternion.Identity(), FY.xy.Zero());

    function jD(YY, rY) {
      if (!(YY instanceof uY.e)) return !1;
      if (rY) {
        if (!YY.getWorldMatrix().equalsWithEpsilon(FY.Matrix.IdentityReadOnly, CD.c)) return !1
      } else {
        if (!YY.getWorldMatrix().multiplyToRef(fD, FY.TmpVectors.Matrix[0]).equalsWithEpsilon(FY.Matrix.IdentityReadOnly, CD.c)) return !1
      }
      return !(YY instanceof sY.c && YY.geometry)
    }
    const hD = FY.xy.ZeroReadOnly,
      dD = FY.Quaternion.Identity(),
      JD = FY.xy.OneReadOnly,
      MD = new FY.xy(-1, 1, 1);

    function wD(YY, rY) {
      const {
        byteOffset: DY,
        byteStride: FY,
        type: AY,
        normalized: IY
      } = YY, RY = YY.getSize(), OY = rY.reduce(((YY, rY) => rY.getTotalVertices() > YY ? rY.getTotalVertices() : YY), -Number.MAX_VALUE);
      return {
        byteOffset: DY,
        byteStride: FY,
        componentCount: RY,
        type: AY,
        count: OY * RY,
        normalized: IY,
        totalVertices: OY,
        kind: YY.getKind()
      }
    }

    function bD(YY) {
      switch (YY) {
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

    function XD(YY) {
      switch (YY) {
        case vY.i.PositionKind:
        case vY.i.NormalKind:
        case vY.i.TangentKind:
        case vY.i.ColorKind:
        case vY.i.MatricesIndicesKind:
        case vY.i.MatricesIndicesExtraKind:
        case vY.i.MatricesWeightsKind:
        case vY.i.MatricesWeightsExtraKind:
        case vY.i.UVKind:
        case vY.i.UV2Kind:
        case vY.i.UV3Kind:
        case vY.i.UV4Kind:
        case vY.i.UV5Kind:
        case vY.i.UV6Kind:
          return !0
      }
      return !1
    }

    function qD(YY) {
      const rY = Math.sqrt(YY.x * YY.x + YY.y * YY.y + YY.z * YY.z);
      rY > 0 && (YY.x /= rY, YY.y /= rY, YY.z /= rY)
    }

    function pD(YY) {
      return YY.x *= -1, YY
    }

    function kD(YY) {
      if (YY.x * YY.x + YY.y * YY.y > .5) {
        const rY = Math.abs(YY.x),
          DY = Math.abs(YY.y);
        if (rY > DY) {
          const DY = Math.sign(YY.x);
          YY.x = rY, YY.y *= -DY, YY.z *= -DY, YY.w *= DY
        } else {
          const rY = Math.sign(YY.y);
          YY.x *= -rY, YY.y = DY, YY.z *= rY, YY.w *= -rY
        }
      } else {
        const rY = Math.abs(YY.z),
          DY = Math.abs(YY.w);
        if (rY > DY) {
          const DY = Math.sign(YY.z);
          YY.x *= -DY, YY.y *= DY, YY.z = rY, YY.w *= -DY
        } else {
          const rY = Math.sign(YY.w);
          YY.x *= rY, YY.y *= -rY, YY.z *= -rY, YY.w = DY
        }
      }
      return YY
    }

    function GD(YY) {
      YY.p_(-YY.z, YY.w, YY.x, -YY.y)
    }

    function xD(YY, rY) {
      const DY = FY.xy.FromArrayToRef(rY.translation || [0, 0, 0], 0, FY.TmpVectors.xy[0]),
        AY = FY.Quaternion.FromArrayToRef(rY.rotation || [0, 0, 0, 1], 0, FY.TmpVectors.Quaternion[0]),
        IY = FY.Matrix.ComposeToRef(JD, AY, DY, FY.TmpVectors.Matrix[0]),
        RY = FY.xy.FromArrayToRef(YY.translation || [0, 0, 0], 0, FY.TmpVectors.xy[2]),
        OY = FY.Quaternion.FromArrayToRef(YY.rotation || [0, 0, 0, 1], 0, FY.TmpVectors.Quaternion[1]),
        gY = FY.Matrix.ComposeToRef(JD, OY, RY, FY.TmpVectors.Matrix[1]);
      IY.multiplyToRef(gY, gY), gY.decompose(void 0, AY, DY), DY.equalsWithEpsilon(hD, CD.c) ? delete rY.translation : rY.translation = DY.VDY(), AY.equalsWithEpsilon(dD, CD.c) ? delete rY.rotation : rY.rotation = AY.VDY(), rY.scale && delete rY.scale
    }

    function nD(YY, rY) {
      if (!(rY instanceof uY.e)) return !1;
      if (!(1 === rY.getChildren().length && 0 === YY.getChildren().length && YY.parent === rY)) return !1;
      const DY = YY.hT(),
        FY = YY instanceof ZD.g && !DY.useRightHandedSystem ? MD : JD;
      return !!rY.pa.equalsWithEpsilon(FY, CD.c) || (cY.d.Warn(`Cannot collapse node ${YY.name} into parent node ${rY.name} with modified scaling.`), !1)
    }

    function PD(YY) {
      if (YY instanceof Array) {
        const rY = new Float32Array(YY);
        return new Uint8Array(rY.buffer, rY.byteOffset, rY.byteLength)
      }
      return ArrayBuffer.isView(YY) ? new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength) : new Uint8Array(YY)
    }

    function UD(YY, rY) {
      for (const [DY, FY] of Object.entries(YY)) {
        const AY = rY[DY];
        (Array.isArray(FY) && Array.isArray(AY) && LD(FY, AY) || FY === AY) && delete YY[DY]
      }
      return YY
    }

    function LD(YY, rY) {
      return YY.length === rY.length && YY.every(((YY, DY) => YY === rY[DY]))
    }
    const tD = new Map([
      [Int8Array, (YY, rY, DY) => YY.setInt8(rY, DY)],
      [Uint8Array, (YY, rY, DY) => YY.setUint8(rY, DY)],
      [Uint8ClampedArray, (YY, rY, DY) => YY.setUint8(rY, DY)],
      [Int16Array, (YY, rY, DY) => YY.setInt16(rY, DY, !0)],
      [Uint16Array, (YY, rY, DY) => YY.setUint16(rY, DY, !0)],
      [Int32Array, (YY, rY, DY) => YY.setInt32(rY, DY, !0)],
      [Uint32Array, (YY, rY, DY) => YY.setUint32(rY, DY, !0)],
      [Float32Array, (YY, rY, DY) => YY.setFloat32(rY, DY, !0)],
      [Float64Array, (YY, rY, DY) => YY.setFloat64(rY, DY, !0)]
    ]);
    class YF {
      writeTypedArray(YY) {
        this._checkGrowBuffer(YY.byteLength);
        const rY = tD.get(YY.constructor);
        for (let DY = 0; DY < YY.length; DY++) rY(this._dataView, this._byteOffset, YY[DY]), this._byteOffset += YY.BYTES_PER_ELEMENT
      }
      constructor(YY) {
        this._data = new Uint8Array(YY), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(YY) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, YY), this._byteOffset++
      }
      writeInt8(YY) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, YY), this._byteOffset++
      }
      writeInt16(YY) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, YY, !0), this._byteOffset += 2
      }
      writeUInt16(YY) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, YY, !0), this._byteOffset += 2
      }
      writeInt32(YY) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, YY, !0), this._byteOffset += 4
      }
      writeUInt32(YY) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, YY, !0), this._byteOffset += 4
      }
      writeFloat32(YY) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, YY, !0), this._byteOffset += 4
      }
      writeFloat64(YY) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, YY, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(YY) {
        const rY = this.byteOffset + YY;
        if (rY > this._data.byteLength) {
          const YY = new Uint8Array(2 * rY);
          YY.set(this._data), this._data = YY, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function rF(YY) {
      return YY % 4 === 0 ? 4 : YY % 2 === 0 ? 2 : 1
    }
    class DF {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(YY) {
        let rY = 0;
        this._bufferViewToData.forEach((YY => {
          rY += YY.byteLength
        }));
        const DY = new YF(rY),
          FY = Array.from(this._bufferViewToData.keys()).sort(((YY, rY) => rF(rY.byteLength) - rF(YY.byteLength)));
        for (const AY of FY) {
          AY.byteOffset = DY.byteOffset, YY.push(AY);
          const rY = YY.length - 1,
            FY = this.getPropertiesWithBufferView(AY);
          for (const YY of FY) YY.bufferView = rY;
          DY.writeTypedArray(this._bufferViewToData.get(AY)), this._bufferViewToData.delete(AY)
        }
        return DY.getOutputData()
      }
      createBufferView(YY, rY) {
        const DY = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: YY.byteLength,
          byteStride: rY
        };
        return this._bufferViewToData.set(DY, YY), DY
      }
      createAccessor(YY, rY, DY, FY, AY, IY, RY) {
        this._verifyBufferView(YY);
        const OY = {
          bufferView: void 0,
          componentType: DY,
          count: FY,
          type: rY,
          min: IY?.min,
          max: IY?.max,
          normalized: RY,
          byteOffset: AY
        };
        return this.setBufferView(OY, YY), this._accessorToBufferView.set(OY, YY), OY
      }
      setBufferView(YY, rY) {
        this._verifyBufferView(rY);
        this.getPropertiesWithBufferView(rY).push(YY)
      }
      removeBufferView(YY) {
        const rY = this.getPropertiesWithBufferView(YY);
        for (const DY of rY) void 0 !== DY.bufferView && delete DY.bufferView;
        this._bufferViewToData.delete(YY), this._bufferViewToProperties.delete(YY), this._accessorToBufferView.forEach(((rY, DY) => {
          rY === YY && (void 0 !== DY.byteOffset && delete DY.byteOffset, this._accessorToBufferView.delete(DY))
        }))
      }
      getBufferView(YY) {
        const rY = this._accessorToBufferView.get(YY);
        return this._verifyBufferView(rY), rY
      }
      getPropertiesWithBufferView(YY) {
        return this._verifyBufferView(YY), this._bufferViewToProperties.set(YY, this._bufferViewToProperties.get(YY) ?? []), this._bufferViewToProperties.get(YY)
      }
      getData(YY) {
        return this._verifyBufferView(YY), this._bufferViewToData.get(YY)
      }
      _verifyBufferView(YY) {
        if (void 0 === YY || !this._bufferViewToData.has(YY)) throw new Error(`BufferView ${YY} not found in BufferManager.`)
      }
    }
    var FF = DY(39342);
    (0, FF.f)();
    var AF = DY(39568);
    (0, AF.f)();
    var IF = DY(39391),
      RF = DY(40303);
    (0, RF.h)();
    let OF = (() => {
      var YY;
      let rY, DY, FY = [],
        AY = [],
        IY = [],
        RY = [];
      return YY = class {
        get influence() {
          return this._influence
        }
        set influence(YY) {
          if (this._influence === YY) return;
          const rY = this._influence;
          this._influence = YY, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === rY || 0 === YY)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(YY) {
          this._animationPropertiesOverride = YY
        }
        constructor(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            OY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = YY, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new YD.e, this._onDataLayoutChanged = new YD.e, this.id = (0, NY.j)(this, FY, void 0), this.morphTargetManager = ((0, NY.j)(this, AY), (0, NY.j)(this, IY, null)), this._animationPropertiesOverride = ((0, NY.j)(this, RY), null), this.id = YY, this.morphTargetManager = OY, this._scene = DY || QY.d.LastCreatedScene, this.influence = rY, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        pIY(YY) {
          const rY = this.hasPositions;
          this._positions = YY, rY !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(YY) {
          const rY = this.hasNormals;
          this._normals = YY, rY !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(YY) {
          const rY = this.hasTangents;
          this._tangents = YY, rY !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(YY) {
          const rY = this.hasUVs;
          this._uvs = YY, rY !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(YY) {
          const rY = this.hasUV2s;
          this._uv2s = YY, rY !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(YY) {
          const rY = this.hasColors;
          this._colors = YY, rY !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const rY = Tr.b.Clone((() => new YY(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return rY._positions = this._positions, rY._normals = this._normals, rY._tangents = this._tangents, rY._uvs = this._uvs, rY._uv2s = this._uv2s, rY._colors = this._colors, rY
        }
        serialize() {
          const YY = {};
          return YY.name = this.name, YY.influence = this.influence, null != this.id && (YY.id = this.id), YY.uniqueId = this.uniqueId, YY.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (YY.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (YY.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (YY.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (YY.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (YY.colors = Array.prototype.slice.call(this.getColors())), Tr.b.AppendSerializedAnimations(this, YY), YY
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(rY, DY) {
          let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const AY = new YY(rY.name, rY.influence, DY, FY);
          if (AY.pIY(rY.positions), null != rY.id && (AY.id = rY.id), rY.normals && AY.setNormals(rY.normals), rY.tangents && AY.setTangents(rY.tangents), rY.uvs && AY.setUVs(rY.uvs), rY.uv2s && AY.setUV2s(rY.uv2s), rY.colors && AY.setColors(rY.colors), rY.animations) {
            for (let YY = 0; YY < rY.animations.length; YY++) {
              const DY = rY.animations[YY],
                FY = (0, br.e)("BABYLON.Animation");
              FY && AY.animations.push(FY.Parse(DY))
            }
            rY.autoAnimate && DY && DY.beginAnimation(AY, rY.autoAnimateFrom, rY.autoAnimateTo, rY.autoAnimateLoop, rY.autoAnimateSpeed || 1)
          }
          return AY
        }
        static FromMesh(rY, DY, FY) {
          DY || (DY = rY.name);
          const AY = new YY(DY, FY, rY.hT(), rY.morphTargetManager);
          return AY.pIY(rY.getVerticesData(MY.l.PositionKind)), rY.isVerticesDataPresent(MY.l.NormalKind) && AY.setNormals(rY.getVerticesData(MY.l.NormalKind)), rY.isVerticesDataPresent(MY.l.TangentKind) && AY.setTangents(rY.getVerticesData(MY.l.TangentKind)), rY.isVerticesDataPresent(MY.l.UVKind) && AY.setUVs(rY.getVerticesData(MY.l.UVKind)), rY.isVerticesDataPresent(MY.l.UV2Kind) && AY.setUV2s(rY.getVerticesData(MY.l.UV2Kind)), rY.isVerticesDataPresent(MY.l.ColorKind) && AY.setColors(rY.getVerticesData(MY.l.ColorKind)), AY
        }
      }, (() => {
        const OY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, BY.M)()], DY = [(0, BY.M)()], (0, NY.i)(null, null, rY, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: YY => "id" in YY,
            get: YY => YY.id,
            set: (YY, rY) => {
              YY.id = rY
            }
          },
          metadata: OY
        }, FY, AY), (0, NY.i)(null, null, DY, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: YY => "morphTargetManager" in YY,
            get: YY => YY.morphTargetManager,
            set: (YY, rY) => {
              YY.morphTargetManager = rY
            }
          },
          metadata: OY
        }, IY, RY), OY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OY
        })
      })(), YY
    })();
    var gF, aF = DY(40362),
      vF = DY(39387);
    ! function(YY) {
      YY[YY.INTANGENT = 0] = "INTANGENT", YY[YY.OUTTANGENT = 1] = "OUTTANGENT"
    }(gF || (gF = {}));
    class uF {
      static _IsTransformable(YY) {
        return YY && (YY instanceof uY.e || YY instanceof FF.e || YY instanceof vF.c)
      }
      static _CreateNodeAnimation(YY, rY, DY, FY, IY) {
        if (this._IsTransformable(YY)) {
          const RY = [],
            OY = [],
            gY = rY.getKeys(),
            aY = uF._CalculateMinMaxKeyFrames(gY),
            vY = uF._DeduceInterpolation(gY, DY, FY),
            uY = vY.interpolationType,
            sY = vY.shouldBakeAnimation;
          if (sY ? uF._CreateBakedAnimation(YY, rY, DY, aY.min, aY.max, rY.framePerSecond, IY, RY, OY, aY, FY) : "LINEAR" === uY || "STEP" === uY ? uF._CreateLinearOrStepAnimation(YY, rY, DY, RY, OY, FY) : "CUBICSPLINE" === uY ? uF._CreateCubicSplineAnimation(YY, rY, DY, RY, OY, FY) : uF._CreateBakedAnimation(YY, rY, DY, aY.min, aY.max, rY.framePerSecond, IY, RY, OY, aY, FY), RY.length && OY.length) {
            return {
              inputs: RY,
              outputs: OY,
              samplerInterpolation: uY,
              inputsMin: sY ? aY.min : AY.Tools.FloatRound(aY.min / rY.framePerSecond),
              inputsMax: sY ? aY.max : AY.Tools.FloatRound(aY.max / rY.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(YY) {
        let rY = null,
          DY = "VEC3",
          FY = !1;
        const IY = YY.targetProperty.split(".");
        switch (IY[0]) {
          case "pa":
            rY = "scale";
            break;
          case "position":
            rY = "translation";
            break;
          case "rotation":
            DY = "VEC4", rY = "rotation";
            break;
          case "rotationQuaternion":
            DY = "VEC4", FY = !0, rY = "rotation";
            break;
          case "influence":
            DY = "SCALAR", rY = "weights";
            break;
          default:
            AY.Tools.Error(`Unsupported animatable property ${IY[0]}`)
        }
        return rY ? {
          animationChannelTargetPath: rY,
          dataAccessorType: DY,
          useQuaternion: FY
        } : (AY.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
        let uY;
        if (uF._IsTransformable(YY) && YY.animations)
          for (const sY of YY.animations) {
            if (vY && !vY(sY)) continue;
            const AY = uF._DeduceAnimationInfo(sY);
            AY && (uY = {
              name: sY.name,
              samplers: [],
              channels: []
            }, uF._AddAnimation(`${sY.name}`, sY.hasRunningRuntimeAnimations ? rY : uY, YY, sY, AY.dataAccessorType, AY.animationChannelTargetPath, FY, IY, RY, OY, AY.useQuaternion, gY, aY), uY.samplers.length && uY.channels.length && DY.push(uY))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
        let uY;
        if (YY instanceof aF.d) {
          const AY = YY.morphTargetManager;
          if (AY)
            for (let sY = 0; sY < AY.numTargets; ++sY) {
              const iY = AY.getTarget(sY);
              for (const yY of iY.animations) {
                if (vY && !vY(yY)) continue;
                const iY = new RF.d(`${yY.name}`, "influence", yY.framePerSecond, yY.dataType, yY.YA, yY.enableBlending),
                  QY = [],
                  oY = yY.getKeys();
                for (let YY = 0; YY < oY.length; ++YY) {
                  const rY = oY[YY];
                  for (let YY = 0; YY < AY.numTargets; ++YY) YY == sY ? QY.push(rY) : QY.push({
                    frame: rY.frame,
                    value: 0
                  })
                }
                iY.setKeys(QY, !0);
                const WY = uF._DeduceAnimationInfo(iY);
                WY && (uY = {
                  name: iY.name,
                  samplers: [],
                  channels: []
                }, uF._AddAnimation(yY.name, yY.hasRunningRuntimeAnimations ? rY : uY, YY, iY, WY.dataAccessorType, WY.animationChannelTargetPath, FY, IY, RY, OY, WY.useQuaternion, gY, aY, AY.numTargets), uY.samplers.length && uY.channels.length && DY.push(uY))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
        let vY;
        if (YY.animationGroups) {
          const uY = YY.animationGroups;
          for (const sY of uY) {
            const uY = new Map,
              iY = new Map,
              yY = new Set,
              QY = sY.to - sY.from;
            vY = {
              name: sY.name,
              channels: [],
              samplers: []
            };
            for (let rY = 0; rY < sY.targetedAnimations.length; ++rY) {
              const aY = sY.targetedAnimations[rY],
                QY = aY.target,
                oY = aY.animation;
              if (gY && !gY(oY)) continue;
              const WY = OY.has(QY);
              if (this._IsTransformable(QY) || 1 === QY.length && this._IsTransformable(QY[0])) {
                const YY = uF._DeduceAnimationInfo(aY.animation);
                if (YY) {
                  const rY = this._IsTransformable(QY) ? QY : this._IsTransformable(QY[0]) ? QY[0] : null;
                  rY && uF._AddAnimation(`${oY.name}`, vY, rY, oY, YY.dataAccessorType, YY.animationChannelTargetPath, DY, FY, AY, IY, YY.useQuaternion, RY, WY)
                }
              } else if (QY instanceof OF || 1 === QY.length && QY[0] instanceof OF) {
                if (uF._DeduceAnimationInfo(aY.animation)) {
                  const rY = QY instanceof OF ? QY : QY[0];
                  if (rY) {
                    const DY = YY.morphTargetManagers.find((YY => {
                      for (let DY = 0; DY < YY.numTargets; ++DY)
                        if (YY.getTarget(DY) === rY) return !0;
                      return !1
                    }));
                    if (DY) {
                      const FY = YY.meshes.find((YY => YY.morphTargetManager === DY));
                      FY && (uY.has(FY) || uY.set(FY, new Map), uY.get(FY)?.set(rY, oY), yY.add(FY), iY.set(FY, oY))
                    }
                  }
                }
              }
            }
            yY.forEach((YY => {
              const rY = YY.morphTargetManager;
              let OY = null;
              const gY = [],
                aY = iY.get(YY).getKeys(),
                yY = aY.length;
              for (let DY = 0; DY < yY; ++DY)
                for (let FY = 0; FY < rY.numTargets; ++FY) {
                  const AY = rY.getTarget(FY),
                    IY = uY.get(YY);
                  if (IY) {
                    const rY = IY.get(AY);
                    rY ? (OY || (OY = new RF.d(`${sY.name}_${YY.name}_MorphWeightAnimation`, "influence", rY.framePerSecond, RF.d.ANIMATIONTYPE_FLOAT, rY.YA, rY.enableBlending)), gY.push(rY.getKeys()[DY])) : gY.push({
                      frame: sY.from + QY / yY * DY,
                      value: AY.influence,
                      inTangent: aY[0].inTangent ? 0 : void 0,
                      outTangent: aY[0].outTangent ? 0 : void 0
                    })
                  }
                }
              OY.setKeys(gY, !0);
              const oY = uF._DeduceAnimationInfo(OY);
              oY && uF._AddAnimation(`${sY.name}_${YY.name}_MorphWeightAnimation`, vY, YY, OY, oY.dataAccessorType, oY.animationChannelTargetPath, DY, FY, AY, IY, oY.useQuaternion, RY, !1, rY?.numTargets)
            })), vY.channels.length && vY.samplers.length && (aY?.set(sY, rY.length), rY.push(vY))
          }
        }
      }
      static _AddAnimation(YY, rY, DY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY) {
        const QY = uF._CreateNodeAnimation(DY, AY, RY, uY, sY);
        let oY, WY, EY, mY, VY, SY;
        if (QY) {
          if (yY) {
            let YY, rY = 0;
            const DY = [];
            for (; QY.inputs.length > 0;) YY = QY.inputs.shift(), rY % yY == 0 && DY.push(YY), rY++;
            QY.inputs = DY
          }
          const YY = OY.get(DY),
            AY = new Float32Array(QY.inputs);
          oY = gY.createBufferView(AY), WY = gY.createAccessor(oY, "SCALAR", 5126, QY.inputs.length, void 0, {
            min: [QY.inputsMin],
            max: [QY.inputsMax]
          }), vY.push(WY), EY = vY.length - 1;
          const aY = new FY.Quaternion,
            uY = new FY.xy,
            sY = new FY.xy,
            lY = DY instanceof FF.e,
            TY = bD(IY),
            eY = new Float32Array(QY.outputs.length * TY);
          QY.outputs.forEach((function(YY, rY) {
            let DY = YY;
            switch (RY) {
              case "translation":
                iY && (FY.xy.FromArrayToRef(YY, 0, sY), pD(sY), sY.toArray(DY));
                break;
              case "rotation":
                4 === YY.length ? FY.Quaternion.FromArrayToRef(YY, 0, aY) : (DY = new Array(4), FY.xy.FromArrayToRef(YY, 0, uY), FY.Quaternion.FromEulerVectorToRef(uY, aY)), iY && (kD(aY), lY && GD(aY)), aY.toArray(DY)
            }
            eY.set(DY, rY * TY)
          })), oY = gY.createBufferView(eY), WY = gY.createAccessor(oY, IY, 5126, QY.outputs.length), vY.push(WY), mY = vY.length - 1, VY = {
            interpolation: QY.samplerInterpolation,
            input: EY,
            output: mY
          }, rY.samplers.push(VY), SY = {
            sampler: rY.samplers.length - 1,
            target: {
              node: YY,
              path: RY
            }
          }, rY.channels.push(SY)
        }
      }
      static _CreateBakedAnimation(YY, rY, DY, IY, RY, OY, gY, aY, vY, uY, sY) {
        let iY;
        const yY = FY.Quaternion.Identity();
        let QY, oY, WY, EY, mY, VY = null,
          SY = null;
        uY.min = AY.Tools.FloatRound(IY / OY);
        const lY = rY.getKeys();
        for (let FY = 0, TY = lY.length; FY < TY; ++FY) {
          if (oY = lY[FY], FY + 1 < TY)
            if (WY = lY[FY + 1], oY.value.equals && oY.value.equals(WY.value) || oY.value === WY.value) {
              if (0 !== FY) continue;
              mY = oY.frame
            } else mY = WY.frame;
          else {
            if (EY = lY[FY - 1], oY.value.equals && oY.value.equals(EY.value) || oY.value === EY.value) continue;
            mY = RY
          }
          if (mY)
            for (let FY = oY.frame; FY <= mY; FY += gY) {
              if (QY = AY.Tools.FloatRound(FY / OY), QY === VY) continue;
              VY = QY, SY = QY;
              const IY = {
                key: 0,
                repeatCount: 0,
                YA: rY.YA
              };
              iY = rY._interpolate(FY, IY), uF._SetInterpolatedValue(YY, iY, QY, rY, DY, yY, aY, vY, sY)
            }
        }
        SY && (uY.max = SY)
      }
      static _ConvertFactorToVector3OrQuaternion(YY, rY, DY, IY, RY) {
        const OY = uF._GetBasePositionRotationOrScale(rY, IY, RY),
          gY = DY.targetProperty.split("."),
          aY = gY ? gY[1] : "",
          vY = RY ? FY.Quaternion.FromArray(OY).normalize() : FY.xy.FromArray(OY);
        switch (aY) {
          case "x":
          case "y":
          case "z":
            vY[aY] = YY;
            break;
          case "w":
            vY.w = YY;
            break;
          default:
            AY.Tools.Error(`glTFAnimation: Unsupported component name "${aY}"!`)
        }
        return vY
      }
      static _SetInterpolatedValue(YY, rY, DY, AY, IY, RY, OY, gY, aY) {
        let vY;
        OY.push(DY), "weights" !== IY ? (AY.dataType === RF.d.ANIMATIONTYPE_FLOAT && (rY = this._ConvertFactorToVector3OrQuaternion(rY, YY, AY, IY, aY)), "rotation" === IY ? (aY ? RY = rY : (vY = rY, FY.Quaternion.RotationYawPitchRollToRef(vY.y, vY.x, vY.z, RY)), gY.push(RY.VDY())) : (vY = rY, gY.push(vY.VDY()))) : gY.push([rY])
      }
      static _CreateLinearOrStepAnimation(YY, rY, DY, FY, AY, IY) {
        for (const RY of rY.getKeys()) FY.push(RY.frame / rY.framePerSecond), uF._AddKeyframeValue(RY, rY, AY, DY, YY, IY)
      }
      static _CreateCubicSplineAnimation(YY, rY, DY, FY, AY, IY) {
        rY.getKeys().forEach((function(RY) {
          FY.push(RY.frame / rY.framePerSecond), uF._AddSplineTangent(gF.INTANGENT, AY, DY, "CUBICSPLINE", RY, IY), uF._AddKeyframeValue(RY, rY, AY, DY, YY, IY), uF._AddSplineTangent(gF.OUTTANGENT, AY, DY, "CUBICSPLINE", RY, IY)
        }))
      }
      static _GetBasePositionRotationOrScale(YY, rY, DY) {
        let AY;
        if ("rotation" === rY)
          if (DY) {
            AY = (YY.rotationQuaternion ?? FY.Quaternion.Identity()).VDY()
          } else {
            AY = (YY.rotation ?? FY.xy.Zero()).VDY()
          }
        else if ("translation" === rY) {
          AY = (YY.position ?? FY.xy.Zero()).VDY()
        } else {
          AY = (YY.pa ?? FY.xy.One()).VDY()
        }
        return AY
      }
      static _AddKeyframeValue(YY, rY, DY, IY, RY, OY) {
        let gY;
        const aY = rY.dataType;
        if (aY === RF.d.ANIMATIONTYPE_VECTOR3) {
          let rY = YY.value.VDY();
          if ("rotation" === IY) {
            const YY = FY.xy.FromArray(rY);
            rY = FY.Quaternion.RotationYawPitchRoll(YY.y, YY.x, YY.z).VDY()
          }
          DY.push(rY)
        } else if (aY === RF.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === IY) DY.push([YY.value]);
          else if (gY = this._ConvertFactorToVector3OrQuaternion(YY.value, RY, rY, IY, OY), gY) {
            if ("rotation" === IY) {
              const YY = OY ? gY : FY.Quaternion.RotationYawPitchRoll(gY.y, gY.x, gY.z).normalize();
              DY.push(YY.VDY())
            }
            DY.push(gY.VDY())
          }
        } else aY === RF.d.ANIMATIONTYPE_QUATERNION ? DY.push(YY.value.normalize().VDY()) : AY.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(YY, rY, DY) {
        let FY, AY, IY = !1;
        if ("rotation" === rY && !DY) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let RY = 0, OY = YY.length; RY < OY; ++RY)
          if (AY = YY[RY], AY.inTangent || AY.outTangent)
            if (FY) {
              if ("CUBICSPLINE" !== FY) {
                FY = "LINEAR", IY = !0;
                break
              }
            } else FY = "CUBICSPLINE";
        else if (FY) {
          if ("CUBICSPLINE" === FY || AY.interpolation && 1 === AY.interpolation && "STEP" !== FY) {
            FY = "LINEAR", IY = !0;
            break
          }
        } else FY = AY.interpolation && 1 === AY.interpolation ? "STEP" : "LINEAR";
        return FY || (FY = "LINEAR"), {
          interpolationType: FY,
          shouldBakeAnimation: IY
        }
      }
      static _AddSplineTangent(YY, rY, DY, AY, IY, RY) {
        let OY;
        const gY = YY === gF.INTANGENT ? IY.inTangent : IY.outTangent;
        if ("CUBICSPLINE" === AY) {
          if ("rotation" === DY)
            if (gY)
              if (RY) OY = gY.VDY();
              else {
                const YY = gY;
                OY = FY.Quaternion.RotationYawPitchRoll(YY.y, YY.x, YY.z).VDY()
              }
          else OY = [0, 0, 0, 0];
          else OY = "weights" === DY ? gY ? [gY] : [0] : gY ? gY.VDY() : [0, 0, 0];
          rY.push(OY)
        }
      }
      static _CalculateMinMaxKeyFrames(YY) {
        let rY = 1 / 0,
          DY = -1 / 0;
        return YY.forEach((function(YY) {
          rY = Math.min(rY, YY.frame), DY = Math.max(DY, YY.frame)
        })), {
          min: rY,
          max: DY
        }
      }
    }

    function sF(YY, rY, DY, IY, RY, OY) {
      const gY = {
          attributes: {},
          influence: YY.influence,
          name: YY.name
        },
        aY = rY.geometry;
      if (!aY) return AY.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), gY;
      const uY = OY ? -1 : 1,
        sY = FY.xy.Zero();
      let iY, yY;
      if (YY.hasPositions) {
        const IY = YY.getPositions(),
          OY = aY.getVerticesData(vY.i.PositionKind);
        if (OY) {
          const YY = new Float32Array(OY.length),
            rY = [1 / 0, 1 / 0, 1 / 0],
            AY = [-1 / 0, -1 / 0, -1 / 0];
          yY = OY.length / 3, iY = 0;
          for (let DY = iY; DY < yY; ++DY) {
            const RY = FY.xy.FromArray(OY, 3 * DY);
            FY.xy.FromArray(IY, 3 * DY).subtractToRef(RY, sY), sY.x *= uY, rY[0] = Math.min(rY[0], sY.x), AY[0] = Math.max(AY[0], sY.x), rY[1] = Math.min(rY[1], sY.y), AY[1] = Math.max(AY[1], sY.y), rY[2] = Math.min(rY[2], sY.z), AY[2] = Math.max(AY[2], sY.z), YY[3 * DY] = sY.x, YY[3 * DY + 1] = sY.y, YY[3 * DY + 2] = sY.z
          }
          const aY = DY.createBufferView(YY, 12),
            vY = DY.createAccessor(aY, "VEC3", 5126, IY.length / 3, 0, {
              min: rY,
              max: AY
            });
          RY.push(vY), gY.attributes.POSITION = RY.length - 1
        } else AY.Tools.Warn(`Morph target positions for mesh ${rY.name} were not exported. Mesh does not have position vertex data`)
      }
      if (YY.hasNormals) {
        const IY = YY.getNormals(),
          OY = aY.getVerticesData(vY.i.NormalKind);
        if (OY) {
          const YY = new Float32Array(OY.length);
          yY = OY.length / 3, iY = 0;
          for (let DY = iY; DY < yY; ++DY) {
            const rY = FY.xy.FromArray(OY, 3 * DY).normalize();
            FY.xy.FromArray(IY, 3 * DY).normalize().subtractToRef(rY, sY), YY[3 * DY] = sY.x * uY, YY[3 * DY + 1] = sY.y, YY[3 * DY + 2] = sY.z
          }
          const rY = DY.createBufferView(YY, 12),
            AY = DY.createAccessor(rY, "VEC3", 5126, IY.length / 3, 0);
          RY.push(AY), gY.attributes.NORMAL = RY.length - 1
        } else AY.Tools.Warn(`Morph target normals for mesh ${rY.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (YY.hasTangents) {
        const IY = YY.getTangents(),
          OY = aY.getVerticesData(vY.i.TangentKind);
        if (OY) {
          yY = OY.length / 4;
          const YY = new Float32Array(3 * yY);
          iY = 0;
          for (let DY = iY; DY < yY; ++DY) {
            const rY = FY.xy.FromArray(OY, 4 * DY);
            qD(rY);
            const AY = FY.xy.FromArray(IY, 3 * DY);
            qD(AY), AY.subtractToRef(rY, sY), YY[3 * DY] = sY.x * uY, YY[3 * DY + 1] = sY.y, YY[3 * DY + 2] = sY.z
          }
          const rY = DY.createBufferView(YY, 12),
            AY = DY.createAccessor(rY, "VEC3", 5126, yY, 0);
          RY.push(AY), gY.attributes.TANGENT = RY.length - 1
        } else AY.Tools.Warn(`Morph target tangents for mesh ${rY.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (YY.hasColors) {
        const IY = YY.getColors(),
          OY = aY.getVerticesData(vY.i.ColorKind),
          uY = aY.getVertexBuffer(vY.i.ColorKind);
        if (OY && uY) {
          const YY = uY.getSize();
          yY = OY.length / YY;
          const rY = new Float32Array(yY * YY);
          iY = 0;
          for (let DY = iY; DY < yY; ++DY)
            if (3 === YY) {
              const AY = FY.xy.FromArray(OY, DY * YY);
              FY.xy.FromArray(IY, DY * YY).subtractToRef(AY, sY), rY[3 * DY] = sY.x, rY[3 * DY + 1] = sY.y, rY[3 * DY + 2] = sY.z
            } else if (4 === YY) {
            const AY = new FY.Vector4,
              RY = FY.Vector4.FromArray(OY, DY * YY);
            FY.Vector4.FromArray(IY, DY * YY).subtractToRef(RY, AY), rY[4 * DY] = AY.x, rY[4 * DY + 1] = AY.y, rY[4 * DY + 2] = AY.z, rY[4 * DY + 3] = AY.w
          } else AY.Tools.Warn(`Unsupported number of components for color attribute: ${YY}`);
          const aY = DY.createBufferView(rY, 4 * YY),
            vY = DY.createAccessor(aY, 3 === YY ? "VEC3" : "VEC4", 5126, yY, 0);
          RY.push(vY), gY.attributes.COLOR_0 = RY.length - 1
        } else AY.Tools.Warn(`Morph target colors for mesh ${rY.name} were not exported. Mesh does not have colors vertex data`)
      }
      return gY
    }
    var iF = DY(40640);
    class yF {}
    yF.DEFAULT_COLOR = kY.c.White(), yF.DEFAULT_WIDTH_ATTENUATED = 1, yF.DEFAULT_WIDTH = .1;
    var QF = DY(40298);
    class oF {
      constructor(YY) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = YY
      }
      moveTo(YY, rY) {
        this._currentPath = new QF.h(YY, rY), this._tempPaths.push(this._currentPath)
      }
      lineTo(YY, rY) {
        this._currentPath.addLineTo(YY, rY)
      }
      quadraticCurveTo(YY, rY, DY, FY) {
        this._currentPath.addQuadraticCurveTo(YY, rY, DY, FY, this._resolution)
      }
      bezierCurveTo(YY, rY, DY, FY, AY, IY) {
        this._currentPath.addBezierCurveTo(YY, rY, DY, FY, AY, IY, this._resolution)
      }
      extractHoles() {
        for (const YY of this._tempPaths) YY.area() > 0 ? this._holes.push(YY) : this._paths.push(YY);
        if (!this._paths.length && this._holes.length) {
          const YY = this._holes;
          this._holes = this._paths, this._paths = YY
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

    function WF(YY, rY, DY, FY, AY, IY) {
      const RY = IY.glyphs[YY] || IY.glyphs["?"];
      if (!RY) return null;
      const OY = new oF(AY);
      if (RY.o) {
        const YY = RY.o.split(" ");
        for (let AY = 0, IY = YY.length; AY < IY;) {
          switch (YY[AY++]) {
            case "m": {
              const IY = parseInt(YY[AY++]) * rY + DY,
                RY = parseInt(YY[AY++]) * rY + FY;
              OY.moveTo(IY, RY);
              break
            }
            case "l": {
              const IY = parseInt(YY[AY++]) * rY + DY,
                RY = parseInt(YY[AY++]) * rY + FY;
              OY.lineTo(IY, RY);
              break
            }
            case "q": {
              const IY = parseInt(YY[AY++]) * rY + DY,
                RY = parseInt(YY[AY++]) * rY + FY,
                gY = parseInt(YY[AY++]) * rY + DY,
                aY = parseInt(YY[AY++]) * rY + FY;
              OY.quadraticCurveTo(gY, aY, IY, RY);
              break
            }
            case "b": {
              const IY = parseInt(YY[AY++]) * rY + DY,
                RY = parseInt(YY[AY++]) * rY + FY,
                gY = parseInt(YY[AY++]) * rY + DY,
                aY = parseInt(YY[AY++]) * rY + FY,
                vY = parseInt(YY[AY++]) * rY + DY,
                uY = parseInt(YY[AY++]) * rY + FY;
              OY.bezierCurveTo(gY, aY, vY, uY, IY, RY);
              break
            }
          }
        }
      }
      return OY.extractHoles(), {
        offsetX: RY.ha * rY,
        shapePath: OY
      }
    }

    function EF(YY, rY, DY, FY) {
      const AY = Array.from(YY),
        IY = rY / FY.resolution,
        RY = (FY.boundingBox.yMax - FY.boundingBox.yMin + FY.underlineThickness) * IY,
        OY = [];
      let gY = 0,
        aY = 0;
      for (let vY = 0; vY < AY.length; vY++) {
        const YY = AY[vY];
        if ("\n" === YY) gY = 0, aY -= RY;
        else {
          const rY = WF(YY, IY, gY, aY, DY, FY);
          rY && (gY += rY.offsetX, OY.push(rY.shapePath))
        }
      }
      return OY
    }
    class mF {
      static ConvertPoints(YY, rY) {
        if (YY.length && Array.isArray(YY) && "number" === typeof YY[0]) return [YY];
        if (YY.length && Array.isArray(YY[0]) && "number" === typeof YY[0][0]) return YY;
        if (YY.length && !Array.isArray(YY[0]) && YY[0] instanceof JY.r) {
          const rY = [];
          for (let DY = 0; DY < YY.length; DY++) {
            const FY = YY[DY];
            rY.push(FY.x, FY.y, FY.z)
          }
          return [rY]
        }
        if (YY.length > 0 && Array.isArray(YY[0]) && YY[0].length > 0 && YY[0][0] instanceof JY.r) {
          const rY = [],
            DY = YY;
          for (const YY of DY) rY.push(YY.flatMap((YY => [YY.x, YY.y, YY.z])));
          return rY
        }
        if (YY instanceof Float32Array) {
          if (rY?.floatArrayStride) {
            const DY = [],
              FY = 3 * rY.floatArrayStride;
            for (let rY = 0; rY < YY.length; rY += FY) {
              const AY = new Array(FY);
              for (let DY = 0; DY < FY; DY++) AY[DY] = YY[rY + DY];
              DY.push(AY)
            }
            return DY
          }
          return [Array.from(YY)]
        }
        if (YY.length && YY[0] instanceof Float32Array) {
          const rY = [];
          for (const DY of YY) rY.push(Array.from(DY));
          return rY
        }
        return []
      }
      static OmitZeroLengthPredicate(YY, rY, DY) {
        const FY = [];
        return rY.subtract(YY).lengthSquared() > 0 && FY.push([YY, rY]), DY.subtract(rY).lengthSquared() > 0 && FY.push([rY, DY]), YY.subtract(DY).lengthSquared() > 0 && FY.push([DY, YY]), 0 === FY.length ? null : FY
      }
      static OmitDuplicatesPredicate(YY, rY, DY, FY) {
        const AY = [];
        return mF._SearchInPoints(YY, rY, FY) || AY.push([YY, rY]), mF._SearchInPoints(rY, DY, FY) || AY.push([rY, DY]), mF._SearchInPoints(DY, YY, FY) || AY.push([DY, YY]), 0 === AY.length ? null : AY
      }
      static _SearchInPoints(YY, rY, DY) {
        for (const FY of DY)
          for (let DY = 0; DY < FY.length; DY++)
            if (FY[DY]?.equals(YY) && (FY[DY + 1]?.equals(rY) || FY[DY - 1]?.equals(rY))) return !0;
        return !1
      }
      static MeshesToLines(YY, rY) {
        const DY = [];
        for (let FY = 0; FY < YY.length; FY++) {
          const AY = YY[FY],
            IY = AY.getVerticesData(MY.l.PositionKind),
            RY = AY.XIY();
          if (IY && RY)
            for (let YY = 0, OY = 0; YY < RY.length; YY++) {
              const gY = 3 * RY[OY++],
                aY = 3 * RY[OY++],
                vY = 3 * RY[OY++],
                uY = new JY.r(IY[gY], IY[gY + 1], IY[gY + 2]),
                sY = new JY.r(IY[aY], IY[aY + 1], IY[aY + 2]),
                iY = new JY.r(IY[vY], IY[vY + 1], IY[vY + 2]);
              if (rY) {
                const OY = rY(uY, sY, iY, DY, YY, gY, AY, FY, IY, RY);
                if (OY)
                  for (const YY of OY) DY.push(YY)
              } else DY.push([uY, sY], [sY, iY], [iY, uY])
            }
        }
        return DY
      }
      static ToVector3Array(YY) {
        if (Array.isArray(YY[0])) {
          const rY = [],
            DY = YY;
          for (const YY of DY) {
            const DY = [];
            for (let rY = 0; rY < YY.length; rY += 3) DY.push(new JY.r(YY[rY], YY[rY + 1], YY[rY + 2]));
            rY.push(DY)
          }
          return rY
        }
        const rY = YY,
          DY = [];
        for (let FY = 0; FY < rY.length; FY += 3) DY.push(new JY.r(rY[FY], rY[FY + 1], rY[FY + 2]));
        return DY
      }
      static ToNumberArray(YY) {
        return YY.flatMap((YY => [YY.x, YY.y, YY.z]))
      }
      static GetPointsCountInfo(YY) {
        const rY = new Array(YY.length);
        let DY = 0;
        for (let FY = YY.length; FY--;) rY[FY] = YY[FY].length / 3, DY += rY[FY];
        return {
          total: DY,
          counts: rY
        }
      }
      static GetLineLength(YY) {
        if (0 === YY.length) return 0;
        let rY;
        rY = "number" === typeof YY[0] ? mF.ToVector3Array(YY) : YY;
        const DY = JY.n.xy[0];
        let FY = 0;
        for (let AY = 0; AY < rY.length - 1; AY++) {
          const YY = rY[AY];
          FY += rY[AY + 1].subtractToRef(YY, DY).length()
        }
        return FY
      }
      static GetLineLengthArray(YY, rY) {
        const DY = rY ? new Float32Array(rY, 0, YY.length / 3) : new Float32Array(YY.length / 3);
        let FY = 0;
        for (let AY = 0, IY = YY.length / 3 - 1; AY < IY; AY++) {
          let rY = YY[3 * AY + 0],
            IY = YY[3 * AY + 1],
            RY = YY[3 * AY + 2];
          rY -= YY[3 * AY + 3], IY -= YY[3 * AY + 4], RY -= YY[3 * AY + 5];
          FY += Math.sqrt(rY * rY + IY * IY + RY * RY), DY[AY + 1] = FY
        }
        return DY
      }
      static SegmentizeSegmentByCount(YY, rY, DY) {
        const FY = [],
          AY = rY.subtract(YY),
          IY = JY.n.xy[0];
        IY.o3(DY);
        const RY = JY.n.xy[1];
        AY.divideToRef(IY, RY);
        let OY = YY.clone();
        FY.push(OY);
        for (let gY = 0; gY < DY; gY++) OY = OY.clone(), FY.push(OY.addInPlace(RY));
        return FY
      }
      static SegmentizeLineBySegmentLength(YY, rY) {
        const DY = YY[0] instanceof JY.r ? mF.GetLineSegments(YY) : "number" === typeof YY[0] ? mF.GetLineSegments(mF.ToVector3Array(YY)) : YY,
          FY = [];
        for (const AY of DY)
          if (AY.length > rY) {
            const YY = mF.SegmentizeSegmentByCount(AY.point1, AY.point2, Math.ceil(AY.length / rY));
            for (const rY of YY) FY.push(rY)
          } else FY.push(AY.point1), FY.push(AY.point2);
        return FY
      }
      static SegmentizeLineBySegmentCount(YY, rY) {
        const DY = "number" === typeof YY[0] ? mF.ToVector3Array(YY) : YY,
          FY = mF.GetLineLength(DY) / rY;
        return mF.SegmentizeLineBySegmentLength(DY, FY)
      }
      static GetLineSegments(YY) {
        const rY = [];
        for (let DY = 0; DY < YY.length - 1; DY++) {
          const FY = YY[DY],
            AY = YY[DY + 1],
            IY = AY.subtract(FY).length();
          rY.push({
            point1: FY,
            point2: AY,
            length: IY
          })
        }
        return rY
      }
      static GetMinMaxSegmentLength(YY) {
        const rY = mF.GetLineSegments(YY).sort((YY => YY.length));
        return {
          min: rY[0].length,
          max: rY[rY.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const AY = rY * DY;
        let IY = 0,
          RY = 0;
        const OY = YY.length;
        for (let aY = 0; aY < OY; aY++) {
          if (AY <= IY + YY[aY].length) {
            RY = aY;
            break
          }
          IY += YY[aY].length
        }
        const gY = (AY - IY) / YY[RY].length;
        return YY[RY].point2.subtractToRef(YY[RY].point1, JY.n.xy[0]), JY.n.xy[0].scaleToRef(gY, JY.n.xy[1]), FY || JY.n.xy[1].addInPlace(YY[RY].point1), JY.n.xy[1].clone()
      }
      static GetCircleLinePoints(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY,
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / rY;
        const IY = [];
        for (let RY = 0; RY <= rY; RY++) IY.push(new JY.r(Math.cos(RY * AY) * YY, Math.sin(RY * AY) * FY, DY));
        return IY
      }
      static GetBezierLinePoints(YY, rY, DY, FY) {
        return QF.d.CreateQuadraticBezier(YY, rY, DY, FY).getPoints().flatMap((YY => [YY.x, YY.y, YY.z]))
      }
      static GetArrowCap(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [YY.clone(), YY.add(rY.multiplyByFloats(DY, DY, DY))],
          widths: [FY, AY, IY, RY]
        }
      }
      static GetPointsFromText(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const RY = [],
          OY = EF(YY, rY, DY, FY);
        for (const gY of OY) {
          for (const YY of gY.paths) {
            const rY = [],
              DY = YY.getPoints();
            for (const YY of DY) rY.push(YY.x, YY.y, AY);
            RY.push(rY)
          }
          if (IY)
            for (const YY of gY.holes) {
              const rY = [],
                DY = YY.getPoints();
              for (const YY of DY) rY.push(YY.x, YY.y, AY);
              RY.push(rY)
            }
        }
        return RY
      }
      static Color3toRGBAUint8(YY) {
        const rY = new Uint8Array(4 * YY.length);
        for (let DY = 0, FY = 0; DY < YY.length; DY++) rY[FY++] = 255 * YY[DY].r, rY[FY++] = 255 * YY[DY].g, rY[FY++] = 255 * YY[DY].b, rY[FY++] = 255;
        return rY
      }
      static CreateColorsTexture(YY, rY, DY, FY) {
        const AY = FY.ky().getCaps().maxTextureSize ?? 1,
          IY = rY.length > AY ? AY : rY.length,
          RY = Math.ceil(rY.length / AY);
        RY > 1 && (rY = [...rY, ...Array(IY * RY - rY.length).fill(rY[0])]);
        const OY = mF.Color3toRGBAUint8(rY),
          gY = new lY.c(OY, IY, RY, vD.e.TEXTUREFORMAT_RGBA, FY, !1, !0, DY);
        return gY.name = YY, gY
      }
      static PrepareEmptyColorsTexture(YY) {
        if (!yF.EmptyColorsTexture) {
          const rY = new Uint8Array(4);
          yF.EmptyColorsTexture = new lY.c(rY, 1, 1, vD.e.TEXTUREFORMAT_RGBA, YY, !1, !1, lY.c.NEAREST_NEAREST), yF.EmptyColorsTexture.name = "grlEmptyColorsTexture", yF.EmptyColorsTexture.wT.addOnce((() => {
            yF.EmptyColorsTexture = null
          }))
        }
        return yF.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        yF.EmptyColorsTexture?.dispose(), yF.EmptyColorsTexture = null
      }
      static BooleanToNumber(YY) {
        return YY ? 1 : 0
      }
    }
    class VF extends wY.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class SF extends bY.c {
      isCompatible(YY) {
        return !0
      }
      constructor(YY, rY, DY) {
        DY = DY || {
          color: yF.DEFAULT_COLOR
        };
        const FY = new VF;
        FY.GREASED_LINE_HAS_COLOR = !!DY.color && !DY.useColors, FY.GREASED_LINE_SIZE_ATTENUATION = DY.sizeAttenuation ?? !1, FY.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === DY.colorDistributionType, FY.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (rY ?? YY.hT()).useRightHandedSystem, FY.GREASED_LINE_CAMERA_FACING = DY.cameraFacing ?? !0, super(YY, SF.GREASED_LINE_MATERIAL_NAME, 200, FY, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = DY?.forceGLSL || SF.ForceGLSL, this._scene = rY ?? YY.hT(), this._engine = this._scene.ky(), this._cameraFacing = DY.cameraFacing ?? !0, this.visibility = DY.visibility ?? 1, this.useDash = DY.useDash ?? !1, this.dashRatio = DY.dashRatio ?? .5, this.dashOffset = DY.dashOffset ?? 0, this.width = DY.width ? DY.width : DY.sizeAttenuation ? yF.DEFAULT_WIDTH_ATTENUATED : yF.DEFAULT_WIDTH, this._sizeAttenuation = DY.sizeAttenuation ?? !1, this.colorMode = DY.colorMode ?? 0, this._color = DY.color ?? null, this.useColors = DY.useColors ?? !1, this._colorsDistributionType = DY.colorDistributionType ?? 0, this.colorsSampling = DY.colorsSampling ?? lY.c.NEAREST_NEAREST, this._colors = DY.colors ?? null, this.dashCount = DY.dashCount ?? 1, this.resolution = DY.resolution ?? new JY.q(this._engine.getRenderWidth(), this._engine.getRenderHeight()), DY.colorsTexture ? this.colorsTexture = DY.colorsTexture : this._colors ? this.colorsTexture = mF.CreateColorsTexture(`${YY.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? yF.DEFAULT_COLOR, mF.PrepareEmptyColorsTexture(this._scene)), this._engine.wT.add((() => {
          mF.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(YY) {
        YY.push("grl_offsets"), YY.push("grl_widths"), YY.push("grl_colorPointers"), YY.push("grl_counters"), this._cameraFacing ? (YY.push("grl_previousAndSide"), YY.push("grl_nextAndCounters")) : YY.push("grl_slopes")
      }
      getSamplers(YY) {
        YY.push("grl_colors")
      }
      getActiveTextures(YY) {
        this.colorsTexture && YY.push(this.colorsTexture)
      }
      getUniforms() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const rY = [{
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
        return this._cameraFacing && rY.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === YY && rY.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: rY,
          vertex: this._cameraFacing && this._isGLSL(YY) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(YY) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(YY) {
        if (this._cameraFacing) {
          YY.m_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || YY.m_("viewProjection", this._scene.getTransformMatrix());
          const rY = JY.n.Vector4[0];
          rY.x = this._aspect, rY.y = this._resolution.x, rY.z = this._resolution.y, rY.w = this.width, YY.updateVector4("grl_aspect_resolution_lineWidth", rY)
        }
        const rY = JY.n.Vector4[0];
        rY.x = mF.BooleanToNumber(this.useDash), rY.y = this._dashArray, rY.z = this.dashOffset, rY.w = this.dashRatio, YY.updateVector4("grl_dashOptions", rY);
        const DY = JY.n.Vector4[1];
        DY.x = this.colorMode, DY.y = this.visibility, DY.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, DY.w = mF.BooleanToNumber(this.useColors), YY.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", DY), this._color && YY.updateColor3("grl_singleColor", this._color);
        const FY = this.colorsTexture ?? yF.EmptyColorsTexture;
        YY.setTexture("grl_colors", FY), YY.updateFloat2("grl_textureSize", FY?.getSize().width ?? 1, FY?.getSize().height ?? 1)
      }
      prepareDefines(YY, rY, DY) {
        YY.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, YY.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, YY.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, YY.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = rY.useRightHandedSystem, YY.GREASED_LINE_CAMERA_FACING = this._cameraFacing, YY.GREASED_LINE_USE_OFFSETS = !!DY.offsets
      }
      getClassName() {
        return SF.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(rY) ? function(YY, rY) {
          if ("vertex" === YY) {
            const YY = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return rY && (YY["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), YY
          }
          return "fragment" === YY ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(YY, this._cameraFacing) : function(YY, rY) {
          if ("vertex" === YY) {
            const YY = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return rY && (YY["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), YY
          }
          return "fragment" === YY ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(YY, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(YY) {
        this.setColors(YY)
      }
      setColors(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = this._colors?.length ?? 0;
        if (this._colors = YY, null !== YY && 0 !== YY.length) {
          if (!rY || DY)
            if (this.colorsTexture && FY === YY.length && !DY) {
              const rY = mF.Color3toRGBAUint8(YY);
              this.colorsTexture.update(rY)
            } else this.colorsTexture?.dispose(), this.colorsTexture = mF.CreateColorsTexture(`${this._material.name}-colors-texture`, YY, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(YY) {
        this._dashCount = YY, this._dashArray = 1 / YY
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(YY) {
        this._sizeAttenuation = YY, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(YY) {
        this.setColor(YY)
      }
      setColor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== YY || null !== this._color && null === YY ? (this._color = YY, rY || this.markAllDefinesAsDirty()) : this._color = YY
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(YY) {
        this._colorsDistributionType = YY, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(YY) {
        this._aspect = YY.x / YY.y, this._resolution = YY
      }
      serialize() {
        const YY = super.serialize(),
          rY = {
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
        return this._colors && (rY.colors = this._colors), this._color && (rY.color = this._color), YY.greasedLineMaterialOptions = rY, YY
      }
      parse(YY, rY, DY) {
        super.parse(YY, rY, DY);
        const FY = YY.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), FY.color && this.setColor(FY.color, !0), FY.colorDistributionType && (this.colorsDistributionType = FY.colorDistributionType), FY.colors && (this.colors = FY.colors), FY.colorsSampling && (this.colorsSampling = FY.colorsSampling), FY.colorMode && (this.colorMode = FY.colorMode), FY.useColors && (this.useColors = FY.useColors), FY.visibility && (this.visibility = FY.visibility), FY.useDash && (this.useDash = FY.useDash), FY.dashCount && (this.dashCount = FY.dashCount), FY.dashRatio && (this.dashRatio = FY.dashRatio), FY.dashOffset && (this.dashOffset = FY.dashOffset), FY.width && (this.width = FY.width), FY.sizeAttenuation && (this.sizeAttenuation = FY.sizeAttenuation), FY.resolution && (this.resolution = FY.resolution), this.colors ? this.colorsTexture = mF.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, rY) : mF.PrepareEmptyColorsTexture(rY), this.markAllDefinesAsDirty()
      }
      copyTo(YY) {
        const rY = YY;
        rY.colorsTexture?.dispose(), this._colors && (rY.colorsTexture = mF.CreateColorsTexture(`${rY._material.name}-colors-texture`, this._colors, rY.colorsSampling, this._scene)), rY.setColor(this.color, !0), rY.colorsDistributionType = this.colorsDistributionType, rY.colorsSampling = this.colorsSampling, rY.colorMode = this.colorMode, rY.useColors = this.useColors, rY.visibility = this.visibility, rY.useDash = this.useDash, rY.dashCount = this.dashCount, rY.dashRatio = this.dashRatio, rY.dashOffset = this.dashOffset, rY.width = this.width, rY.sizeAttenuation = this.sizeAttenuation, rY.resolution = this.resolution, rY.markAllDefinesAsDirty()
      }
      _isGLSL(YY) {
        return 0 === YY || this._forceGLSL
      }
    }
    SF.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", SF.ForceGLSL = !1;
    var lF = DY(39514),
      TF = DY(39530),
      eF = DY(38037),
      NF = DY(39587),
      BF = DY(38979);
    class cF extends NF.t {
      constructor(YY, rY, FY) {
        const AY = rY.ky(),
          IY = AY.isWebGPU && !(FY.forceGLSL || cF.ForceGLSL),
          RY = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        rY.useRightHandedSystem && RY.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const OY = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        FY.cameraFacing ? (RY.push("GREASED_LINE_CAMERA_FACING"), OY.push("grl_previousAndSide", "grl_nextAndCounters")) : (OY.push("grl_slopes"), OY.push("grl_counters"));
        const gY = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (IY || gY.push("world", "viewProjection", "view", "projection"), super(YY, rY, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: IY ? ["Scene", "Mesh"] : void 0,
            attributes: OY,
            uniforms: gY,
            samplers: IY ? [] : ["grlColors"],
            defines: RY,
            extraInitializationsAsync: async () => {
              IY ? await Promise.all([DY.e(324).then((() => DY(60957))), DY.e(383).then((() => DY(60964)))]) : await Promise.all([DY.e(317).then((() => DY(60968))), DY.e(384).then((() => DY(60971)))])
            },
            shaderLanguage: IY ? 1 : 0
          }), this._color = kY.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, FY = FY || {
            color: yF.DEFAULT_COLOR
          }, this.visibility = FY.visibility ?? 1, this.useDash = FY.useDash ?? !1, this.dashRatio = FY.dashRatio ?? .5, this.dashOffset = FY.dashOffset ?? 0, this.dashCount = FY.dashCount ?? 1, this.width = FY.width ? FY.width : FY.sizeAttenuation && FY.cameraFacing ? yF.DEFAULT_WIDTH_ATTENUATED : yF.DEFAULT_WIDTH, this.sizeAttenuation = FY.sizeAttenuation ?? !1, this.color = FY.color ?? kY.c.White(), this.useColors = FY.useColors ?? !1, this.colorsDistributionType = FY.colorDistributionType ?? 0, this.colorsSampling = FY.colorsSampling ?? lY.c.NEAREST_NEAREST, this.colorMode = FY.colorMode ?? 0, this._colors = FY.colors ?? null, this._cameraFacing = FY.cameraFacing ?? !0, this.resolution = FY.resolution ?? new JY.q(AY.getRenderWidth(), AY.getRenderHeight()), FY.colorsTexture ? this.colorsTexture = FY.colorsTexture : this._colors ? this.colorsTexture = mF.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, rY) : (this._color = this._color ?? yF.DEFAULT_COLOR, this.colorsTexture = mF.PrepareEmptyColorsTexture(rY)), IY) {
          const YY = new BF.e;
          YY.setParameters(), YY.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", YY)
        }
        AY.wT.add((() => {
          mF.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== yF.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new JY.q(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(YY) {
        this.setColors(YY)
      }
      setColors(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const FY = this._colors?.length ?? 0;
        if (this._colors = YY, null !== YY && 0 !== YY.length) {
          if (!rY || DY)
            if (this._colorsTexture && FY === YY.length && !DY) {
              const rY = mF.Color3toRGBAUint8(YY);
              this._colorsTexture.update(rY)
            } else this._colorsTexture && this._colorsTexture !== yF.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = mF.CreateColorsTexture(`${this.name}-colors-texture`, YY, this.colorsSampling, this.hT())
        } else {
          this._colorsTexture && this._colorsTexture !== yF.EmptyColorsTexture && this._colorsTexture.dispose();
          const YY = this.hT();
          YY && (this.colorsTexture = mF.PrepareEmptyColorsTexture(YY))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(YY) {
        this._colorsTexture = YY, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(YY) {
        this._width = YY, this.setFloat("grlWidth", YY)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(YY) {
        this._useColors = YY, this.setFloat("grlUseColors", mF.BooleanToNumber(YY))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(YY) {
        this._colorsSampling = YY
      }
      get visibility() {
        return this._visibility
      }
      set visibility(YY) {
        this._visibility = YY, this.setFloat("grlVisibility", YY)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(YY) {
        this._useDash = YY, this.setFloat("grlUseDash", mF.BooleanToNumber(YY))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(YY) {
        this._dashOffset = YY, this.setFloat("grlDashOffset", YY)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(YY) {
        this._dashRatio = YY, this.setFloat("grlDashRatio", YY)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(YY) {
        this._dashCount = YY, this._dashArray = 1 / YY, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(YY) {
        this._sizeAttenuation = YY, this.setFloat("grlSizeAttenuation", mF.BooleanToNumber(YY))
      }
      get color() {
        return this._color
      }
      set color(YY) {
        this.setColor(YY)
      }
      setColor(YY) {
        YY = YY ?? yF.DEFAULT_COLOR, this._color = YY, this.setColor3("grlColor", YY)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(YY) {
        this._colorsDistributionType = YY, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(YY) {
        this._colorMode = YY, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(YY) {
        this._resolution = YY, this.setVector2("grlResolution", YY), this.setFloat("grlAspect", YY.x / YY.y)
      }
      serialize() {
        const YY = super.serialize(),
          rY = {
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
        return this._colors && (rY.colors = this._colors), YY.greasedLineMaterialOptions = rY, YY
      }
      parse(YY, rY, DY) {
        const FY = YY.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), FY.color && (this.color = FY.color), FY.colorDistributionType && (this.colorsDistributionType = FY.colorDistributionType), FY.colorsSampling && (this.colorsSampling = FY.colorsSampling), FY.colorMode && (this.colorMode = FY.colorMode), FY.useColors && (this.useColors = FY.useColors), FY.visibility && (this.visibility = FY.visibility), FY.useDash && (this.useDash = FY.useDash), FY.dashCount && (this.dashCount = FY.dashCount), FY.dashRatio && (this.dashRatio = FY.dashRatio), FY.dashOffset && (this.dashOffset = FY.dashOffset), FY.width && (this.width = FY.width), FY.sizeAttenuation && (this.sizeAttenuation = FY.sizeAttenuation), FY.resolution && (this.resolution = FY.resolution), FY.colors ? this.colorsTexture = mF.CreateColorsTexture(`${this.name}-colors-texture`, FY.colors, this.colorsSampling, this.hT()) : this.colorsTexture = mF.PrepareEmptyColorsTexture(rY), this._cameraFacing = FY.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var KF, HF, zF;
    cF.ForceGLSL = !1,
      function(YY) {
        YY[YY.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", YY[YY.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(KF || (KF = {})),
      function(YY) {
        YY[YY.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", YY[YY.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", YY[YY.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(HF || (HF = {})),
      function(YY) {
        YY[YY.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", YY[YY.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", YY[YY.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", YY[YY.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", YY[YY.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(zF || (zF = {}));
    class ZF extends lF.c {
      constructor(YY, rY, DY) {
        super(YY, rY, null, null, !1, !1), this.name = YY, this._options = DY, this._lazy = !1, this._updatable = !1, this._engine = rY.ky(), this._lazy = DY.lazy ?? !1, this._updatable = DY.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = DY.colorPointers ?? [], this._widths = DY.widths ?? new Array(DY.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(YY) {
        let rY = 0;
        for (const FY of this._points) rY += FY.length;
        const DY = rY / 3 * 2 - this._widths.length;
        for (let FY = 0; FY < DY; FY++) this._widths.push(YY)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.Py && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(YY, rY) {
        for (const DY of YY) this._points.push(DY);
        this._lazy || this.setPoints(this._points, rY)
      }
      dispose(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(YY, rY)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(YY) {
        this._uvs = YY instanceof Float32Array ? YY : new Float32Array(YY), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(YY) {
        this.material instanceof cF && this.material.setDefine("GREASED_LINE_USE_OFFSETS", YY?.length > 0), this._offsets = YY, this._offsetsBuffer ? this._offsetsBuffer.update(YY) : this._createOffsetsBuffer(YY)
      }
      get widths() {
        return this._widths
      }
      set widths(YY) {
        this._widths = YY, this._lazy || this._widthsBuffer && this._widthsBuffer.update(YY)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(YY) {
        this._colorPointers = YY, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(YY)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof cF) return this.material;
        const YY = this.material?.pluginManager?.getPlugin(SF.GREASED_LINE_MATERIAL_NAME);
        return YY || void 0
      }
      get points() {
        const YY = [];
        return eF.c.DeepCopy(this._points, YY), YY
      }
      setPoints(YY, rY) {
        this._points = mF.ConvertPoints(YY, rY?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), rY?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, rY)
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
      serialize(YY) {
        super.serialize(YY), YY.type = this.getClassName(), YY.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = new TF.c;
        return rY.positions = this._vertexPositions, rY.indices = this._indices, rY.uvs = this._uvs, YY && (rY.normals = [], TF.c.ComputeNormals(this._vertexPositions, this._indices, rY.normals)), rY.applyToMesh(this, this._options.updatable), rY
      }
      _createOffsetsBuffer(YY) {
        const rY = this._scene.ky(),
          DY = new MY.c(rY, YY, this._updatable, 3);
        this.setVerticesBuffer(DY.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = DY
      }
    }
    class CF {
      constructor(YY, rY) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = YY, this.wasAddedByNoopNode = rY
      }
      getIndicesAccessor(YY, rY, DY, FY, AY) {
        return this._indicesAccessorMap.get(YY)?.get(rY)?.get(DY)?.get(FY)?.get(AY)
      }
      setIndicesAccessor(YY, rY, DY, FY, AY, IY) {
        let RY = this._indicesAccessorMap.get(YY);
        RY || (RY = new Map, this._indicesAccessorMap.set(YY, RY));
        let OY = RY.get(rY);
        OY || (OY = new Map, RY.set(rY, OY));
        let gY = OY.get(DY);
        gY || (gY = new Map, OY.set(DY, gY));
        let aY = gY.get(FY);
        aY || (aY = new Map, gY.set(FY, aY)), aY.set(AY, IY)
      }
      pushExportedNode(YY) {
        this._exportedNodes.has(YY) || this._exportedNodes.add(YY)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(YY) {
        return this._vertexBufferViewMap.get(YY)
      }
      setVertexBufferView(YY, rY) {
        this._vertexBufferViewMap.set(YY, rY)
      }
      setRemappedBufferView(YY, rY, DY) {
        this._remappedBufferView.set(YY, new Map), this._remappedBufferView.get(YY).set(rY, DY)
      }
      getRemappedBufferView(YY, rY) {
        return this._remappedBufferView.get(YY)?.get(rY)
      }
      getVertexAccessor(YY, rY, DY) {
        return this._vertexAccessorMap.get(YY)?.get(rY)?.get(DY)
      }
      setVertexAccessor(YY, rY, DY, FY) {
        let AY = this._vertexAccessorMap.get(YY);
        AY || (AY = new Map, this._vertexAccessorMap.set(YY, AY));
        let IY = AY.get(rY);
        IY || (IY = new Map, AY.set(rY, IY)), IY.set(DY, FY)
      }
      hasVertexColorAlpha(YY) {
        return this._vertexMapColorAlpha.get(YY) || !1
      }
      setHasVertexColorAlpha(YY, rY) {
        return this._vertexMapColorAlpha.set(YY, rY)
      }
      getMesh(YY) {
        return this._meshMap.get(YY)
      }
      setMesh(YY, rY) {
        this._meshMap.set(YY, rY)
      }
      bindMorphDataToMesh(YY, rY) {
        const DY = this._meshMorphTargetMap.get(YY) || [];
        this._meshMorphTargetMap.set(YY, DY), -1 === DY.indexOf(rY) && DY.push(rY)
      }
      getMorphTargetsFromMesh(YY) {
        return this._meshMorphTargetMap.get(YY)
      }
    }
    class fF {
      _ApplyExtension(YY, rY, DY, FY) {
        if (DY >= rY.length) return Promise.resolve(YY);
        const AY = FY(rY[DY], YY);
        return AY ? AY.then((async YY => YY ? await this._ApplyExtension(YY, rY, DY + 1, FY) : null)) : this._ApplyExtension(YY, rY, DY + 1, FY)
      }
      _ApplyExtensions(YY, rY) {
        const DY = [];
        for (const FY of fF._ExtensionNames) DY.push(this._extensions[FY]);
        return this._ApplyExtension(YY, DY, 0, rY)
      }
      _extensionsPostExportNodeAsync(YY, rY, DY, FY, AY) {
        return this._ApplyExtensions(rY, ((rY, IY) => rY.postExportNodeAsync && rY.postExportNodeAsync(YY, IY, DY, FY, AY, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(YY, rY, DY) {
        return this._ApplyExtensions(rY, ((rY, FY) => rY.postExportMaterialAsync && rY.postExportMaterialAsync(YY, FY, DY)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        return await Promise.all(fF._ExtensionNames.map((async AY => {
          const IY = this._extensions[AY];
          if (IY.postExportMaterialAdditionalTexturesAsync) {
            const AY = await IY.postExportMaterialAdditionalTexturesAsync(YY, rY, DY);
            FY.push(...AY)
          }
        }))), FY
      }
      _extensionsPostExportTextures(YY, rY, DY) {
        for (const FY of fF._ExtensionNames) {
          const AY = this._extensions[FY];
          AY.postExportTexture && AY.postExportTexture(YY, rY, DY)
        }
      }
      _extensionsPostExportMeshPrimitive(YY) {
        for (const rY of fF._ExtensionNames) {
          const DY = this._extensions[rY];
          DY.postExportMeshPrimitive && DY.postExportMeshPrimitive(YY, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const YY of fF._ExtensionNames) {
          const rY = this._extensions[YY];
          rY.preGenerateBinaryAsync && await rY.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(YY) {
        for (const rY of fF._ExtensionNames) {
          const DY = this._extensions[rY];
          DY.enabled && YY(DY)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((YY => {
          var rY, DY, FY;
          YY.wasUsed && ((rY = this._glTF).extensionsUsed || (rY.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(YY.name) && this._glTF.extensionsUsed.push(YY.name), YY.required && ((DY = this._glTF).extensionsRequired || (DY.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(YY.name) && this._glTF.extensionsRequired.push(YY.name)), (FY = this._glTF).extensions || (FY.extensions = {}), YY.onExporting && YY.onExporting())
        }))
      }
      _loadExtensions() {
        for (const YY of fF._ExtensionNames) {
          const rY = fF._ExtensionFactories[YY](this);
          this._extensions[YY] = rY
        }
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : QY.d.LastCreatedScene,
          rY = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${yY.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new HD(this), this._extensions = {}, this._bufferManager = new DF, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !YY) throw new Error("No scene available to export");
        this._babylonScene = YY, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: YY => YY?.Ul?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...rY
        }, this._loadExtensions()
      }
      dispose() {
        for (const YY in this._extensions) {
          this._extensions[YY].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        fF.UnregisterExtension(YY) && AY.Tools.Warn(`Extension with the name ${YY} already exists`), fF._ExtensionFactories[YY] = rY;
        const FY = DY ?? 0;
        fF._ExtensionOrders[YY] = FY;
        let IY = fF._ExtensionNames.length;
        for (let AY = 0; AY < fF._ExtensionNames.length; AY++) {
          const YY = fF._ExtensionNames[AY];
          if (FY < fF._ExtensionOrders[YY]) {
            IY = AY;
            break
          }
        }
        fF._ExtensionNames.splice(IY, 0, YY)
      }
      static UnregisterExtension(YY) {
        if (!fF._ExtensionFactories[YY]) return !1;
        delete fF._ExtensionFactories[YY], delete fF._ExtensionOrders[YY];
        const rY = fF._ExtensionNames.indexOf(YY);
        return -1 !== rY && fF._ExtensionNames.splice(rY, 1), !0
      }
      _generateJSON(YY, rY, DY) {
        const FY = {
          byteLength: YY
        };
        return FY.byteLength && (this._glTF.buffers = [FY]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.LQ = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (FY.uri = rY + ".bin"), DY ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(YY) {
        const rY = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const DY = this._generateJSON(rY.byteLength, YY, !0),
          FY = new Blob([rY], {
            type: "application/octet-stream"
          }),
          AY = YY + ".gltf",
          IY = YY + ".bin",
          RY = new aY;
        if (RY.files[AY] = DY, RY.files[IY] = FY, this._imageData)
          for (const OY in this._imageData) RY.files[OY] = this._imageData[OY];
        return RY
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(YY) {
        const rY = YY % 4;
        return 0 === rY ? rY : 4 - rY
      }
      async generateGLBAsync(YY) {
        this._shouldUseGlb = !0;
        const rY = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const DY = this._generateJSON(rY.byteLength),
          FY = YY + ".glb";
        let AY, IY = DY.length;
        if ("undefined" !== typeof TextEncoder) {
          AY = (new TextEncoder).encode(DY), IY = AY.length
        }
        const RY = this._getPadding(IY),
          OY = this._getPadding(rY.byteLength),
          gY = 28 + IY + RY + rY.byteLength + OY,
          vY = new YF(gY);
        if (vY.writeUInt32(1179937895), vY.writeUInt32(2), vY.writeUInt32(gY), vY.writeUInt32(IY + RY), vY.writeUInt32(1313821514), AY) vY.writeTypedArray(AY);
        else {
          const YY = "_".charCodeAt(0);
          for (let rY = 0; rY < IY; ++rY) {
            const FY = DY.charCodeAt(rY);
            FY != DY.codePointAt(rY) ? vY.writeUInt8(YY) : vY.writeUInt8(FY)
          }
        }
        for (let aY = 0; aY < RY; ++aY) vY.writeUInt8(32);
        vY.writeUInt32(rY.byteLength + OY), vY.writeUInt32(5130562), vY.writeTypedArray(rY);
        for (let aY = 0; aY < OY; ++aY) vY.writeUInt8(0);
        const uY = new aY;
        return uY.files[FY] = new Blob([vY.getOutputData()], {
          type: "application/octet-stream"
        }), uY
      }
      _setNodeTransformation(YY, rY, DY) {
        if (rY.getPivotPoint().equalsWithEpsilon(hD, CD.c) || AY.Tools.Warn("Pivot points are not supported in the glTF serializer"), !rY.position.equalsWithEpsilon(hD, CD.c)) {
          const AY = FY.TmpVectors.xy[0].brY(rY.position);
          DY && pD(AY), YY.translation = AY.VDY()
        }
        rY.pa.equalsWithEpsilon(JD, CD.c) || (YY.scale = rY.pa.VDY());
        const IY = rY.rotationQuaternion?.clone() || FY.Quaternion.FromEulerAngles(rY.rotation.x, rY.rotation.y, rY.rotation.z);
        IY.equalsWithEpsilon(dD, CD.c) || (DY && kD(IY), YY.rotation = IY.normalize().VDY())
      }
      _setCameraTransformation(YY, rY, DY) {
        const AY = FY.TmpVectors.xy[0],
          IY = FY.TmpVectors.Quaternion[0],
          RY = rY.getWorldMatrix();
        if (rY.parent) {
          const YY = rY.parent.getWorldMatrix().invertToRef(FY.TmpVectors.Matrix[0]);
          RY.multiplyToRef(YY, FY.TmpVectors.Matrix[1]).decompose(void 0, IY, AY)
        } else RY.decompose(void 0, IY, AY);
        AY.equalsWithEpsilon(hD, CD.c) || (DY && pD(AY), YY.translation = AY.VDY()), DY && kD(IY), this._babylonScene.useRightHandedSystem || GD(IY), IY.equalsWithEpsilon(dD, CD.c) || (YY.rotation = IY.VDY())
      }
      _listAvailableCameras() {
        for (const YY of this._babylonScene.cameras) {
          const rY = {
            type: YY.mode === FF.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (YY.name && (rY.name = YY.name), "perspective" === rY.type) rY.perspective = {
            aspectRatio: YY.ky().getAspectRatio(YY),
            yfov: YY.fovMode === FF.e.FOVMODE_VERTICAL_FIXED ? YY.fov : YY.fov * YY.ky().getAspectRatio(YY),
            znear: YY.minZ,
            zfar: YY.maxZ
          };
          else if ("orthographic" === rY.type) {
            const DY = YY.orthoLeft && YY.orthoRight ? .5 * (YY.orthoRight - YY.orthoLeft) : .5 * YY.ky().getRenderWidth(),
              FY = YY.orthoBottom && YY.orthoTop ? .5 * (YY.orthoTop - YY.orthoBottom) : .5 * YY.ky().getRenderHeight();
            rY.orthographic = {
              xmag: DY,
              ymag: FY,
              znear: YY.minZ,
              zfar: YY.maxZ
            }
          }
          this._camerasMap.set(YY, rY)
        }
      }
      _exportAndAssignCameras() {
        const YY = Array.from(this._camerasMap.values());
        for (const rY of YY) {
          const YY = this._nodesCameraMap.get(rY);
          if (void 0 !== YY) {
            this._cameras.push(rY);
            for (const rY of YY) rY.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const YY of this._babylonScene.skeletons) {
          if (YY.bones.length <= 0) continue;
          const rY = {
            joints: []
          };
          this._skinMap.set(YY, rY)
        }
      }
      _exportAndAssignSkeletons(YY) {
        for (const DY of this._babylonScene.skeletons) {
          if (DY.bones.length <= 0) continue;
          const IY = this._skinMap.get(DY);
          if (void 0 == IY) continue;
          const RY = {};
          let OY = -1;
          for (let YY = 0; YY < DY.bones.length; ++YY) {
            const rY = DY.bones[YY],
              FY = rY.getIndex() ?? YY; - 1 !== FY && (RY[FY] = rY, FY > OY && (OY = FY))
          }
          const gY = [];
          for (let DY = 0; DY <= OY; ++DY) {
            const OY = RY[DY],
              aY = OY.getTransformNode(),
              vY = aY ? this._nodeMap.get(aY) : void 0;
            if (void 0 === vY) {
              AY.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            IY.joints.push(vY);
            const uY = OY.getAbsoluteInverseBindMatrix().clone();
            YY.has(aY) && (rY = uY, fD.invertToRef(FY.TmpVectors.Matrix[0]).multiplyToRef(rY, rY).multiplyToRef(fD, rY)), gY.push(uY)
          }
          const aY = this._nodesSkinMap.get(IY);
          if (IY.joints.length > 0 && void 0 !== aY) {
            const YY = new Float32Array(16 * gY.length);
            gY.forEach(((rY, DY) => {
              YY.set(rY.m, 16 * DY)
            }));
            const rY = this._bufferManager.createBufferView(YY);
            this._accessors.push(this._bufferManager.createAccessor(rY, "MAT4", 5126, gY.length)), IY.inverseBindMatrices = this._accessors.length - 1, this._skins.push(IY);
            const DY = this._skins.length - 1;
            for (const FY of aY) FY.skin = DY
          }
        }
        var rY
      }
      async _exportSceneAsync() {
        const YY = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const rY = this._options.metadataSelector(this._babylonScene.metadata);
          rY && (YY.extras = rY)
        }
        const rY = new Array,
          DY = new Array,
          FY = new Array,
          AY = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let IY;
        if (AY && !this._options.includeCoordinateSystemConversionNodes)
          for (const aY of this._babylonScene.animationGroups)
            for (const YY of aY.targetedAnimations) {
              const rY = YY.target;
              rY instanceof uY.e && !rY.parent && (IY ?? (IY = new Set)).add(rY)
            }
        for (const aY of this._babylonScene.rootNodes) {
          const YY = aY.animations,
            RY = !!YY && YY.length > 0 || IY?.has(aY);
          AY && !this._options.includeCoordinateSystemConversionNodes && jD(aY, this._babylonScene.useRightHandedSystem) && !RY ? FY.push(...aY.getChildren()) : this._babylonScene.useRightHandedSystem ? rY.push(aY) : DY.push(aY)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const RY = new CF(!0, !1);
        YY.nodes.push(...await this._exportNodesAsync(DY, RY));
        const OY = new CF(!1, !1);
        YY.nodes.push(...await this._exportNodesAsync(rY, OY));
        const gY = new CF(!1, !0);
        YY.nodes.push(...await this._exportNodesAsync(FY, gY)), YY.nodes.length && this._scenes.push(YY), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(RY.getNodesSet()), this._babylonScene.animationGroups.length && uF._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, RY.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(YY) {
        return this._nodeMap.get(YY)
      }
      _getAnimationIndex(YY) {
        return this._animationGroupMap.get(YY)
      }
      _getCameraIndex(YY) {
        const rY = this._camerasMap.get(YY);
        if (!rY) return;
        const DY = this._cameras.indexOf(rY);
        return DY >= 0 ? DY : void 0
      }
      _getMaterialIndex(YY) {
        return this._materialMap.get(YY)
      }
      _getRootIndex(YY, rY) {
        switch (YY) {
          case "nodes":
            return this._getNodeIndex(rY);
          case "animations":
            return this._getAnimationIndex(rY);
          case "cameras":
            return this._getCameraIndex(rY);
          case "materials":
            return this._getMaterialIndex(rY);
          case "meshes": {
            const YY = this._getNodeIndex(rY);
            return void 0 === YY ? void 0 : this._nodes[YY]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(rY)?.index;
          case "images": {
            const YY = this._materialExporter.getTextureInfo(rY)?.index;
            if (void 0 === YY) return;
            const DY = this._textures[YY];
            for (const rY of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const YY = DY?.extensions?.[rY]?.source;
              if ("number" === typeof YY) return YY
            }
            return DY?.source
          }
          case "samplers": {
            const YY = this._materialExporter.getTextureInfo(rY)?.index;
            return void 0 === YY ? void 0 : this._textures[YY]?.sampler
          }
          case "skins": {
            const YY = this._skinMap.get(rY),
              DY = YY ? this._skins.indexOf(YY) : -1;
            return DY >= 0 ? DY : void 0
          }
          case "scenes":
            return rY === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(YY, rY, DY) {
        const FY = this._nodes[YY];
        if (!FY) throw new Error(`Cannot write ${rY}: glTF node ${YY} does not exist.`);
        FY.extensions || (FY.extensions = {}), FY.extensions[rY] = DY
      }
      _shouldExportNode(YY) {
        let rY = this._shouldExportNodeMap.get(YY);
        return void 0 === rY && (rY = this._options.shouldExportNode(YY), this._shouldExportNodeMap.set(YY, rY)), rY
      }
      async _exportNodesAsync(YY, rY) {
        const DY = new Array;
        this._exportBuffers(YY, rY);
        for (const FY of YY) await this._exportNodeAsync(FY, DY, rY);
        return DY
      }
      _collectBuffers(YY, rY, DY, FY, AY) {
        if (this._shouldExportNode(YY) && YY instanceof sY.c && YY.geometry) {
          const IY = YY.geometry.getVertexBuffers();
          if (IY)
            for (const FY in IY) {
              if (!XD(FY)) continue;
              const RY = IY[FY];
              AY.setHasVertexColorAlpha(RY, YY.hasVertexAlpha);
              const OY = RY._buffer,
                gY = rY.get(OY) || [];
              rY.set(OY, gY), -1 === gY.indexOf(RY) && gY.push(RY);
              const aY = DY.get(RY) || [];
              DY.set(RY, aY), -1 === aY.indexOf(YY) && aY.push(YY)
            }
          const RY = YY.morphTargetManager;
          if (RY)
            for (let rY = 0; rY < RY.numTargets; rY++) {
              const DY = RY.getTarget(rY),
                AY = FY.get(DY) || [];
              FY.set(DY, AY), -1 === AY.indexOf(YY) && AY.push(YY)
            }
        }
        for (const IY of YY.getChildren()) this._collectBuffers(IY, rY, DY, FY, AY)
      }
      _exportBuffers(YY, rY) {
        const DY = new Map,
          FY = new Map,
          AY = new Map;
        for (const OY of YY) this._collectBuffers(OY, DY, FY, AY, rY);
        const IY = Array.from(DY.keys());
        for (const OY of IY) {
          const YY = OY.getData();
          if (!YY) throw new Error("Buffer data is not available");
          const AY = DY.get(OY);
          if (!AY) continue;
          const IY = AY[0].byteStride;
          if (AY.some((YY => YY.byteStride !== IY))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const RY = PD(YY).slice();
          for (const rY of AY) {
            const YY = FY.get(rY),
              {
                byteOffset: DY,
                byteStride: AY,
                componentCount: IY,
                type: OY,
                count: gY,
                normalized: aY,
                kind: uY
              } = wD(rY, YY);
            switch (uY) {
              case vY.i.NormalKind:
              case vY.i.TangentKind:
                (0, zD.h)(RY, DY, AY, IY, OY, gY, aY, (YY => {
                  const rY = Math.sqrt(YY[0] * YY[0] + YY[1] * YY[1] + YY[2] * YY[2]);
                  if (rY > 0) {
                    const DY = 1 / rY;
                    YY[0] *= DY, YY[1] *= DY, YY[2] *= DY
                  }
                }));
                break;
              case vY.i.ColorKind: {
                const rY = YY.filter((YY => YY.material instanceof IF.StandardMaterial || null == YY.material)).length;
                if (0 == rY) break;
                if (rY != YY.length) {
                  cY.d.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                OY == vY.i.UNSIGNED_BYTE && cY.d.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const FY = new oY.Color3,
                  uY = new oY.c,
                  sY = this._babylonScene.ky().useExactSrgbConversions;
                (0, zD.h)(RY, DY, AY, IY, OY, gY, aY, (YY => {
                  3 === YY.length ? (FY.grY(YY, 0), FY.toLinearSpaceToRef(FY, sY), FY.toArray(YY, 0)) : (uY.grY(YY, 0), uY.toLinearSpaceToRef(uY, sY), uY.toArray(YY, 0))
                }))
              }
            }
          }
          if (rY.convertToRightHanded) {
            for (const YY of AY) {
              const rY = FY.get(YY),
                {
                  byteOffset: DY,
                  byteStride: AY,
                  componentCount: IY,
                  type: OY,
                  count: gY,
                  normalized: aY,
                  kind: uY
                } = wD(YY, rY);
              switch (uY) {
                case vY.i.PositionKind:
                case vY.i.NormalKind:
                case vY.i.TangentKind:
                  (0, zD.h)(RY, DY, AY, IY, OY, gY, aY, (YY => {
                    YY[0] = -YY[0]
                  }))
              }
            }
            rY.convertedToRightHandedBuffers.set(OY, RY)
          }
          const gY = this._bufferManager.createBufferView(RY, IY);
          rY.setVertexBufferView(OY, gY);
          const aY = new Map;
          for (const rY of AY) {
            const YY = FY.get(rY),
              {
                kind: DY,
                totalVertices: AY
              } = wD(rY, YY);
            switch (DY) {
              case vY.i.MatricesIndicesKind:
              case vY.i.MatricesIndicesExtraKind:
                if (rY.type == vY.i.FLOAT) {
                  const YY = rY.getFloatData(AY);
                  null !== YY && aY.set(rY, YY)
                }
            }
          }
          0 !== aY.size && cY.d.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const uY = Array.from(aY.keys());
          for (const DY of uY) {
            const YY = aY.get(DY);
            if (!YY) continue;
            const FY = YY.some((YY => YY >= 256)),
              AY = new(FY ? Uint16Array : Uint8Array)(YY.length);
            for (let rY = 0; rY < YY.length; rY++) AY[rY] = YY[rY];
            const IY = this._bufferManager.createBufferView(AY, 4 * (FY ? 2 : 1));
            rY.setRemappedBufferView(OY, DY, IY)
          }
        }
        const RY = Array.from(AY.keys());
        for (const OY of RY) {
          const YY = AY.get(OY);
          if (!YY) continue;
          const DY = sF(OY, YY[0], this._bufferManager, this._bufferViews, this._accessors, rY.convertToRightHanded);
          for (const FY of YY) rY.bindMorphDataToMesh(FY, DY)
        }
      }
      async _exportNodeAsync(YY, rY, DY) {
        let FY = this._nodeMap.get(YY);
        if (void 0 !== FY) return void(rY.includes(FY) || rY.push(FY));
        const AY = await this._createNodeAsync(YY, DY);
        if (AY) {
          FY = this._nodes.length, this._nodes.push(AY), this._nodeMap.set(YY, FY), DY.pushExportedNode(YY), rY.push(FY);
          const IY = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            RY = [];
          this._babylonScene.animationGroups.length || (uF._CreateMorphTargetAnimationFromMorphTargetAnimations(YY, IY, RY, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, DY.convertToRightHanded, this._options.shouldExportAnimation), YY.animations.length && uF._CreateNodeAnimationFromNodeAnimations(YY, IY, RY, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, DY.convertToRightHanded, this._options.shouldExportAnimation)), IY.channels.length && IY.samplers.length && this._animations.push(IY), RY.forEach((YY => {
            YY.channels.length && YY.samplers.length && this._animations.push(YY)
          }))
        }
        const IY = AY ? [] : rY;
        for (const RY of YY.getChildren()) await this._exportNodeAsync(RY, IY, DY);
        AY && IY.length && (AY.children = IY)
      }
      async _createNodeAsync(YY, rY) {
        if (!this._shouldExportNode(YY)) return null;
        const DY = {};
        if (YY.name && (DY.name = YY.name), YY.metadata) {
          const rY = this._options.metadataSelector(YY.metadata);
          rY && (DY.extras = rY)
        }
        if (YY instanceof uY.e && (this._setNodeTransformation(DY, YY, rY.convertToRightHanded), YY instanceof sY.c)) {
          const FY = YY instanceof iY.c ? YY.vFY : YY;
          if (FY.qm && FY.qm.length > 0 && (DY.mesh = await this._exportMeshAsync(FY, rY)), YY.skeleton) {
            const rY = this._skinMap.get(YY.skeleton);
            void 0 !== rY && (void 0 === this._nodesSkinMap.get(rY) && this._nodesSkinMap.set(rY, []), this._nodesSkinMap.get(rY)?.push(DY))
          }
        }
        if (YY instanceof ZD.g) {
          const FY = this._camerasMap.get(YY);
          if (FY) {
            void 0 === this._nodesCameraMap.get(FY) && this._nodesCameraMap.set(FY, []), this._setCameraTransformation(DY, YY, rY.convertToRightHanded);
            const AY = YY.parent;
            if (null !== AY && nD(YY, AY)) {
              const YY = this._nodeMap.get(AY);
              if (void 0 !== YY) {
                const rY = this._nodes[YY];
                return xD(DY, rY), this._nodesCameraMap.get(FY)?.push(rY), null
              }
            }
            this._nodesCameraMap.get(FY)?.push(DY)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", DY, YY, this._nodeMap, rY.convertToRightHanded) ? DY : (cY.d.Warn(`Not exporting node ${YY.name}`), null)
      }
      _exportIndices(YY, rY, DY, FY, AY, RY, OY, gY, aY) {
        let vY = null;
        aY.mode = function(YY) {
          switch (YY) {
            case IY.c.TriangleFillMode:
              return 4;
            case IY.c.TriangleStripDrawMode:
              return 5;
            case IY.c.TriangleFanDrawMode:
              return 6;
            case IY.c.PointListDrawMode:
            case IY.c.PointFillMode:
              return 0;
            case IY.c.LineLoopDrawMode:
              return 2;
            case IY.c.LineListDrawMode:
              return 1;
            case IY.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${YY}`)
        }(RY);
        const uY = OY !== IY.c.CounterClockWiseSideOrientation && function(YY) {
          switch (YY) {
            case IY.c.TriangleFillMode:
            case IY.c.TriangleStripDrawMode:
            case IY.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(RY);
        if (uY) {
          if (RY === IY.c.TriangleStripDrawMode || RY === IY.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const OY = rY ? new Uint32Array(FY) : new Uint16Array(FY);
          if (YY)
            for (let rY = 0; rY + 2 < FY; rY += 3) OY[rY] = YY[DY + rY] + AY, OY[rY + 1] = YY[DY + rY + 2] + AY, OY[rY + 2] = YY[DY + rY + 1] + AY;
          else
            for (let YY = 0; YY + 2 < FY; YY += 3) OY[YY] = YY, OY[YY + 1] = YY + 2, OY[YY + 2] = YY + 1;
          vY = OY
        } else if (YY && 0 !== AY) {
          const IY = rY ? new Uint32Array(FY) : new Uint16Array(FY);
          for (let rY = 0; rY < FY; rY++) IY[rY] = YY[DY + rY] + AY;
          vY = IY
        } else YY && (vY = function(YY, rY, DY, FY) {
          let AY = YY;
          return 0 === rY && DY === YY.length || (AY = Array.isArray(YY) ? YY.slice(rY, rY + DY) : YY.subarray(rY, rY + DY)), AY instanceof Int32Array ? new Uint32Array(AY.buffer, AY.byteOffset, AY.length) : Array.isArray(AY) ? FY ? new Uint32Array(AY) : new Uint16Array(AY) : AY
        }(YY, DY, FY, rY));
        if (vY) {
          let IY = gY.getIndicesAccessor(YY, DY, FY, AY, uY);
          if (void 0 === IY) {
            const RY = this._bufferManager.createBufferView(vY),
              OY = rY ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(RY, "SCALAR", OY, FY, 0)), IY = this._accessors.length - 1, gY.setIndicesAccessor(YY, DY, FY, AY, uY, IY)
          }
          aY.indices = IY
        }
      }
      _exportVertexBuffer(YY, rY, DY, FY, AY, IY) {
        const RY = YY.getKind();
        if (!XD(RY)) return;
        if (RY.startsWith("uv") && !this._options.exportUnusedUVs && (!rY || !this._materialNeedsUVsSet.has(rY))) return;
        let OY = AY.getVertexAccessor(YY, DY, FY);
        if (void 0 === OY) {
          const rY = AY.convertedToRightHandedBuffers.get(YY._buffer) || YY._buffer.getData(),
            IY = RY === vY.i.PositionKind ? function(YY, rY, DY, FY) {
              const {
                byteOffset: AY,
                byteStride: IY,
                type: RY,
                normalized: OY
              } = rY, gY = rY.getSize(), aY = new Array(gY).fill(1 / 0), vY = new Array(gY).fill(-1 / 0);
              return (0, zD.h)(YY, AY + DY * IY, IY, gY, RY, FY * gY, OY, (YY => {
                for (let rY = 0; rY < gY; rY++) aY[rY] = Math.min(aY[rY], YY[rY]), vY[rY] = Math.max(vY[rY], YY[rY])
              })), {
                min: aY,
                max: vY
              }
            }(rY, YY, DY, FY) : void 0,
            gY = (RY === vY.i.MatricesIndicesKind || RY === vY.i.MatricesIndicesExtraKind) && YY.type === vY.i.FLOAT,
            aY = gY ? vY.i.UNSIGNED_BYTE : YY.type,
            uY = gY ? void 0 : YY.normalized,
            sY = gY ? AY.getRemappedBufferView(YY._buffer, YY) : AY.getVertexBufferView(YY._buffer),
            iY = YY.byteOffset + DY * YY.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(sY, function(YY, rY) {
            if (YY == vY.i.ColorKind) return rY ? "VEC4" : "VEC3";
            switch (YY) {
              case vY.i.PositionKind:
              case vY.i.NormalKind:
                return "VEC3";
              case vY.i.TangentKind:
              case vY.i.MatricesIndicesKind:
              case vY.i.MatricesIndicesExtraKind:
              case vY.i.MatricesWeightsKind:
              case vY.i.MatricesWeightsExtraKind:
                return "VEC4";
              case vY.i.UVKind:
              case vY.i.UV2Kind:
              case vY.i.UV3Kind:
              case vY.i.UV4Kind:
              case vY.i.UV5Kind:
              case vY.i.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${YY}`)
          }(RY, AY.hasVertexColorAlpha(YY)), aY, FY, iY, IY, uY)), OY = this._accessors.length - 1, AY.setVertexAccessor(YY, DY, FY, OY)
        }
        IY.attributes[function(YY) {
          switch (YY) {
            case vY.i.PositionKind:
              return "POSITION";
            case vY.i.NormalKind:
              return "NORMAL";
            case vY.i.TangentKind:
              return "TANGENT";
            case vY.i.ColorKind:
              return "COLOR_0";
            case vY.i.UVKind:
              return "TEXCOORD_0";
            case vY.i.UV2Kind:
              return "TEXCOORD_1";
            case vY.i.UV3Kind:
              return "TEXCOORD_2";
            case vY.i.UV4Kind:
              return "TEXCOORD_3";
            case vY.i.UV5Kind:
              return "TEXCOORD_4";
            case vY.i.UV6Kind:
              return "TEXCOORD_5";
            case vY.i.MatricesIndicesKind:
              return "JOINTS_0";
            case vY.i.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case vY.i.MatricesWeightsKind:
              return "WEIGHTS_0";
            case vY.i.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${YY}`)
        }(RY)] = OY
      }
      async _exportMaterialAsync(YY, rY, DY, FY) {
        let AY = this._materialMap.get(YY);
        if (void 0 === AY) {
          const FY = rY && Object.keys(rY).some((YY => YY.startsWith("uv")));
          if ((YY = YY instanceof AF.b ? YY.J_[DY.materialIndex] : YY) instanceof lr) AY = await this._materialExporter.exportPBRMaterialAsync(YY, FY);
          else if (YY instanceof IF.StandardMaterial) AY = await this._materialExporter.exportStandardMaterialAsync(YY, FY);
          else {
            if (!(YY instanceof Lr)) return void cY.d.Warn(`Unsupported material '${YY.name}' with type ${YY.getClassName()}`);
            AY = await this._materialExporter.exportOpenPBRMaterialAsync(YY, FY)
          }
          this._materialMap.set(YY, AY)
        }
        FY.material = AY
      }
      async _exportMeshAsync(YY, rY) {
        let DY = rY.getMesh(YY);
        if (void 0 !== DY) return DY;
        const FY = {
          primitives: []
        };
        DY = this._meshes.length, this._meshes.push(FY), rY.setMesh(YY, DY);
        const AY = YY.isUnIndexed ? null : YY.XIY(),
          RY = YY.geometry?.getVertexBuffers(),
          OY = rY.getMorphTargetsFromMesh(YY),
          gY = YY instanceof iF.c,
          aY = YY instanceof ZF,
          vY = YY.qm;
        if (RY && vY && vY.length > 0)
          for (const uY of vY) {
            const DY = {
                attributes: {}
              },
              vY = uY.Uy() || this._babylonScene.defaultMaterial;
            if (aY) {
              const rY = {
                  name: vY.name
                },
                FY = YY,
                AY = oY.Color3.White(),
                IY = FY.material?.alpha ?? 1,
                RY = FY.greasedLineMaterial?.color ?? AY;
              (!RY.equalsWithEpsilon(AY, CD.c) || IY < 1) && (rY.pbrMetallicRoughness = {
                baseColorFactor: [...RY.VDY(), IY]
              }), this._materials.push(rY), DY.material = this._materials.length - 1
            } else if (gY) {
              const rY = {
                  name: vY.name
                },
                FY = YY;
              (!FY.color.equalsWithEpsilon(oY.Color3.White(), CD.c) || FY.alpha < 1) && (rY.pbrMetallicRoughness = {
                baseColorFactor: [...FY.color.VDY(), FY.alpha]
              }), this._materials.push(rY), DY.material = this._materials.length - 1
            } else await this._exportMaterialAsync(vY, RY, uY, DY);
            const sY = gY || aY ? IY.c.LineListDrawMode : YY.overrideRenderingFillMode ?? vY.fillMode;
            let iY = vY._getEffectiveOrientation(YY);
            rY.wasAddedByNoopNode && !YY.hT().useRightHandedSystem && (iY = iY === IY.c.ClockWiseSideOrientation ? IY.c.CounterClockWiseSideOrientation : IY.c.ClockWiseSideOrientation), this._exportIndices(AY, AY ? (0, zD.e)(AY, uY.indexCount, uY.indexStart, uY.verticesStart) : uY.verticesCount > 65535, AY ? uY.indexStart : uY.verticesStart, AY ? uY.indexCount : uY.verticesCount, -uY.verticesStart, sY, iY, rY, DY);
            for (const YY of Object.values(RY)) this._exportVertexBuffer(YY, vY, uY.verticesStart, uY.verticesCount, rY, DY);
            if (OY) {
              DY.targets = [];
              for (const YY of OY) DY.targets.push(YY.attributes)
            }
            FY.primitives.push(DY), this._extensionsPostExportMeshPrimitive(DY)
          }
        if (OY) {
          FY.weights = [], FY.extras || (FY.extras = {}), FY.extras.targetNames = [];
          for (const YY of OY) FY.weights.push(YY.influence), FY.extras.targetNames.push(YY.name)
        }
        return DY
      }
    }
    fF._ExtensionNames = new Array, fF._ExtensionFactories = {}, fF._ExtensionOrders = {};
    class jF {
      static async GLTFAsync(YY, rY, DY) {
        DY && DY.exportWithoutWaitingForScene || await YY.whenReadyAsync();
        const FY = new fF(YY, DY),
          AY = await FY.generateGLTFAsync(rY.replace(/\.[^/.]+$/, ""));
        return FY.dispose(), AY
      }
      static async GLBAsync(YY, rY, DY) {
        DY && DY.exportWithoutWaitingForScene || await YY.whenReadyAsync();
        const FY = new fF(YY, DY),
          AY = await FY.generateGLBAsync(rY.replace(/\.[^/.]+$/, ""));
        return FY.dispose(), AY
      }
    }
    const hF = "EXT_mesh_gpu_instancing";

    function dF(YY, rY) {
      const DY = new Float32Array(3 * rY);
      for (let FY = 0; FY < rY; FY++) DY[3 * FY + 0] = YY[4 * FY + 0], DY[3 * FY + 1] = YY[4 * FY + 1], DY[3 * FY + 2] = YY[4 * FY + 2];
      return DY
    }
    class JF {
      constructor(YY) {
        this.name = hF, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(YY, rY, DY, FY, AY, IY) {
        return await new Promise((YY => {
          if (rY && DY instanceof lF.c && DY.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const YY = JY.r.Zero(),
              FY = JY.g.Identity(),
              RY = JY.r.One(),
              OY = DY.thinInstanceGetWorldMatrices(),
              gY = JY.n.xy[2],
              aY = JY.n.Quaternion[1],
              vY = JY.n.xy[3];
            let uY = !1,
              sY = !1,
              iY = !1;
            const yY = new Float32Array(3 * DY.R_),
              QY = new Float32Array(4 * DY.R_),
              oY = new Float32Array(3 * DY.R_);
            let WY = 0;
            for (const rY of OY) rY.decompose(vY, aY, gY), AY && (pD(gY), kD(aY)), yY.set(gY.VDY(), 3 * WY), QY.set(aY.normalize().VDY(), 4 * WY), oY.set(vY.VDY(), 3 * WY), uY = uY || !gY.equalsWithEpsilon(YY), sY = sY || !aY.equalsWithEpsilon(FY), iY = iY || !vY.equalsWithEpsilon(RY), WY++;
            const EY = {
              attributes: {}
            };
            uY && (EY.attributes.TRANSLATION = this._buildAccessor(yY, "VEC3", DY.R_, IY)), sY && (EY.attributes.ROTATION = this._buildAccessor(QY, "VEC4", DY.R_, IY)), iY && (EY.attributes.SCALE = this._buildAccessor(oY, "VEC3", DY.R_, IY));
            let mY = DY._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (mY) {
              const YY = DY.R_,
                rY = "VEC3";
              DY.hasVertexAlpha && mY.length === 4 * YY ? (this._instanceColorWarned || (cY.d.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), mY = dF(mY, YY)) : mY.length === 4 * YY && (mY = dF(mY, YY)), mY.length === 3 * YY && (EY.attributes._COLOR_0 = this._buildAccessor(mY, rY, YY, IY))
            }
            rY.extensions = rY.extensions || {}, rY.extensions[hF] = EY
          }
          YY(rY)
        }))
      }
      _buildAccessor(YY, rY, DY, FY) {
        const AY = FY.createBufferView(YY),
          IY = FY.createAccessor(AY, rY, 5126, DY);
        return this._exporter._accessors.push(IY), this._exporter._accessors.length - 1
      }
    }
    let MF = !1;

    function wF() {
      MF || (MF = !0, fF.RegisterExtension(hF, (YY => new JF(YY))))
    }
    DY(39602);
    wF();
    var bF = DY(40912);

    function XF(YY, rY, DY, FY) {
      const AY = YY;
      let IY = null,
        RY = null,
        OY = null,
        gY = null;
      const aY = {},
        vY = rY.find((YY => "POSITION" === YY.dracoName));
      if (!vY) throw new Error("Draco: Missing position attribute for encoding.");
      if (!DY) {
        const YY = vY.data.length / vY.size;
        DY = new(YY > 65535 ? Uint32Array : Uint16Array)(YY);
        for (let rY = 0; rY < YY; rY++) DY[rY] = rY
      }
      try {
        IY = new AY.Encoder, RY = new AY.MeshBuilder, OY = new AY.Mesh, RY.AddFacesToMesh(OY, DY.length / 3, DY);
        const YY = new Map([
          [Float32Array, (YY, rY, DY, FY, AY, IY) => YY.AddFloatAttribute(rY, DY, FY, AY, IY)],
          [Uint32Array, (YY, rY, DY, FY, AY, IY) => YY.AddUInt32Attribute(rY, DY, FY, AY, IY)],
          [Uint16Array, (YY, rY, DY, FY, AY, IY) => YY.AddUInt16Attribute(rY, DY, FY, AY, IY)],
          [Uint8Array, (YY, rY, DY, FY, AY, IY) => YY.AddUInt8Attribute(rY, DY, FY, AY, IY)],
          [Int32Array, (YY, rY, DY, FY, AY, IY) => YY.AddInt32Attribute(rY, DY, FY, AY, IY)],
          [Int16Array, (YY, rY, DY, FY, AY, IY) => YY.AddInt16Attribute(rY, DY, FY, AY, IY)],
          [Int8Array, (YY, rY, DY, FY, AY, IY) => YY.AddInt8Attribute(rY, DY, FY, AY, IY)]
        ]);
        for (const DY of rY) {
          DY.data instanceof Uint8ClampedArray && (DY.data = new Uint8Array(DY.data));
          const rY = YY.get(DY.data.constructor),
            gY = DY.data.length / DY.size;
          aY[DY.kind] = rY(RY, OY, AY[DY.dracoName], gY, DY.size, DY.data), FY.quantizationBits && FY.quantizationBits[DY.dracoName] && IY.SetAttributeQuantization(AY[DY.dracoName], FY.quantizationBits[DY.dracoName])
        }
        FY.method && IY.SetEncodingMethod(AY[FY.method]), void 0 !== FY.encodeSpeed && void 0 !== FY.decodeSpeed && IY.SetSpeedOptions(FY.encodeSpeed, FY.decodeSpeed), gY = new AY.DracoInt8Array;
        const vY = IY.EncodeMeshToDracoBuffer(OY, gY);
        if (vY <= 0) throw new Error("Draco: Failed to encode.");
        const uY = new Int8Array(vY);
        for (let rY = 0; rY < vY; rY++) uY[rY] = gY.GetValue(rY);
        return {
          data: uY,
          attributeIds: aY
        }
      } finally {
        OY && AY.destroy(OY), RY && AY.destroy(RY), IY && AY.destroy(IY), gY && AY.destroy(gY)
      }
    }

    function qF() {
      let YY;
      onmessage = rY => {
        const DY = rY.data;
        switch (DY.id) {
          case "init": {
            DY.url && importScripts(DY.url);
            const rY = DY.wasmBinary ? {
              wasmBinary: DY.wasmBinary
            } : {};
            YY = DracoEncoderModule(rY), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!YY) throw new Error("Draco: Encoder module is not available.");
            YY.then((YY => {
              const rY = XF(YY, DY.attributes, DY.indices, DY.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: rY
              }, rY ? [rY.data.buffer] : void 0)
            })).catch((YY => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: YY.message
              })
            }))
        }
      }
    }
    class pF {
      constructor(YY) {
        if (YY.workerPool) return void(this._workerPoolPromise = Promise.resolve(YY.workerPool));
        const rY = YY.wasmBinary,
          DY = YY.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          FY = DY && "function" === typeof Worker && "function" === typeof URL,
          AY = FY || !YY.jsModule,
          IY = YY.wasmUrl && YY.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: AY ? er.i.GetBabylonScriptURL(YY.wasmUrl, !0) : "",
            wasmBinaryPromise: rY ? Promise.resolve(rY) : er.i.LoadFileAsync(er.i.GetBabylonScriptURL(YY.wasmBinaryUrl, !0))
          } : {
            url: AY ? er.i.GetBabylonScriptURL(YY.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        FY ? this._workerPoolPromise = IY.wasmBinaryPromise.then((YY => {
          const rY = this._getWorkerContent(),
            FY = URL.createObjectURL(new Blob([rY], {
              type: "application/javascript"
            }));
          return new bF.d(DY, (() => async function(YY, rY, DY) {
            return await new Promise(((FY, AY) => {
              const IY = rY => {
                  YY.removeEventListener("error", IY), YY.removeEventListener("message", RY), AY(rY)
                },
                RY = rY => {
                  "initDone" === rY.data.id && (YY.removeEventListener("error", IY), YY.removeEventListener("message", RY), FY(YY))
                };
              if (YY.addEventListener("error", IY), YY.addEventListener("message", RY), rY) {
                const FY = rY.slice(0);
                YY.postMessage({
                  id: "init",
                  url: DY,
                  wasmBinary: FY
                }, [FY])
              } else YY.postMessage({
                id: "init",
                url: DY
              })
            }))
          }(new Worker(FY), YY, IY.url)))
        })) : this._modulePromise = IY.wasmBinaryPromise.then((async rY => {
          if (!this._isModuleAvailable() && !YY.jsModule) {
            if (!IY.url) throw new Error("Draco codec module is not available");
            await er.i.LoadBabylonScriptAsync(IY.url)
          }
          return await this._createModuleAsync(rY, YY.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((YY => {
          YY.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function kF() {
      const YY = YY => !!YY && "object" === typeof YY;
      for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
      return DY.reduce(((rY, DY) => {
        const FY = Object.keys(DY);
        for (const AY of FY) {
          const FY = rY[AY],
            IY = DY[AY];
          Array.isArray(FY) && Array.isArray(IY) ? rY[AY] = FY.concat(IY) : YY(FY) && YY(IY) ? rY[AY] = kF(FY, IY) : rY[AY] = IY
        }
        return rY
      }), {})
    }

    function GF(YY) {
      return YY === MY.l.PositionKind ? "POSITION" : YY === MY.l.NormalKind ? "NORMAL" : YY === MY.l.ColorKind ? "COLOR" : YY.startsWith(MY.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const xF = {
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
    class nF extends pF {
      static get DefaultAvailable() {
        return !!((YY = nF.DefaultConfiguration).wasmUrl && (YY.wasmBinary || YY.wasmBinaryUrl) && "object" === typeof WebAssembly || YY.fallbackUrl);
        var YY
      }
      static get Default() {
        return nF._Default ?? (nF._Default = new nF), nF._Default
      }
      static ResetDefault(YY) {
        nF._Default && (YY || nF._Default.dispose(), nF._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(YY, rY) {
        return {
          module: await (rY || DracoEncoderModule)({
            wasmBinary: YY
          })
        }
      }
      _getWorkerContent() {
        return `${XF}(${qF})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nF.DefaultConfiguration)
      }
      async _encodeAsync(YY, rY, DY) {
        const FY = DY ? kF(xF, DY) : xF;
        if (this._workerPoolPromise) {
          const DY = await this._workerPoolPromise;
          return await new Promise(((AY, IY) => {
            DY.push(((DY, RY) => {
              const OY = YY => {
                  DY.removeEventListener("error", OY), DY.removeEventListener("message", gY), IY(YY), RY()
                },
                gY = YY => {
                  "encodeMeshSuccess" === YY.data.id ? (DY.removeEventListener("error", OY), DY.removeEventListener("message", gY), AY(YY.data.encodedMeshData), RY()) : "encodeMeshError" === YY.data.id && (DY.removeEventListener("error", OY), DY.removeEventListener("message", gY), IY(new Error(YY.data.errorMessage)), RY())
                };
              DY.addEventListener("error", OY), DY.addEventListener("message", gY);
              const aY = [];
              for (const rY of YY) aY.push(rY.data.buffer);
              rY && aY.push(rY.buffer), DY.postMessage({
                id: "encodeMesh",
                attributes: YY,
                indices: rY,
                options: FY
              }, aY)
            }))
          }))
        }
        if (this._modulePromise) {
          return XF((await this._modulePromise).module, YY, rY, FY)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(YY, rY) {
        if (0 == YY.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        YY instanceof lF.c && YY.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === rY?.method && (cY.d.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), rY.method = "MESH_SEQUENTIAL_ENCODING");
        const DY = function(YY) {
            let rY = YY.XIY(void 0, !0);
            return !rY || rY instanceof Uint32Array || rY instanceof Uint16Array || (rY = ((0, zD.e)(rY, rY.length) ? Uint32Array : Uint16Array).from(rY)), rY
          }(YY),
          FY = function(YY, rY) {
            const DY = [];
            for (const FY of YY.getVerticesDataKinds()) {
              if (rY?.includes(FY)) {
                if (FY === MY.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const AY = YY.getVertexBuffer(FY),
                IY = AY.getSize(),
                RY = (0, zD.q)(AY.getData(), IY, AY.type, AY.byteOffset, AY.byteStride, YY.getTotalVertices(), !0);
              DY.push({
                kind: FY,
                dracoName: GF(FY),
                size: IY,
                data: RY
              })
            }
            return DY
          }(YY, rY?.excludedAttributes);
        return await this._encodeAsync(FY, DY, rY)
      }
    }
    nF.DefaultConfiguration = {
      wasmUrl: `${er.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${er.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${er.i._DefaultCdnUrl}/draco_encoder.js`
    }, nF._Default = null;
    const PF = "KHR_draco_mesh_compression";
    class UF {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(YY) {
        this.name = PF, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === YY.options.meshCompressionMethod && nF.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(YY, rY, DY) {
        if (!this.enabled) return;
        if (4 !== YY.mode && 5 !== YY.mode) return void cY.d.Warn("Cannot compress primitive with mode " + YY.mode + ".");
        const FY = [],
          AY = [];
        let IY = null;
        if (void 0 !== YY.indices) {
          const RY = DY[YY.indices],
            OY = rY.getBufferView(RY);
          IY = rY.getData(OY).slice(), FY.push(OY), AY.push(RY)
        }
        const RY = [];
        for (const [vY, uY] of Object.entries(YY.attributes)) {
          const YY = DY[uY],
            IY = rY.getBufferView(YY),
            gY = bD(YY.type),
            aY = (0, zD.q)(rY.getData(IY), gY, YY.componentType, YY.byteOffset || 0, IY.byteStride || (0, zD.n)(YY.componentType) * gY, YY.count, !0);
          RY.push({
            kind: vY,
            dracoName: (OY = vY, "POSITION" === OY ? "POSITION" : "NORMAL" === OY ? "NORMAL" : OY.startsWith("COLOR") ? "COLOR" : OY.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: bD(YY.type),
            data: aY
          }), FY.push(IY), AY.push(YY)
        }
        var OY;
        const gY = {
            method: YY.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          aY = nF.Default._encodeAsync(RY, IY, gY).then((DY => {
            const IY = {
                bufferView: -1,
                attributes: DY.attributeIds
              },
              RY = rY.createBufferView(DY.data);
            rY.setBufferView(IY, RY);
            for (const YY of FY) this._bufferViewsUsed.add(YY);
            for (const YY of AY) this._accessorsUsed.add(YY);
            YY.extensions || (YY.extensions = {}), YY.extensions[PF] = IY
          })).catch((YY => {
            cY.d.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + YY.message)
          }));
        this._encodePromises.push(aY), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(YY) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((rY => {
          YY.getPropertiesWithBufferView(rY).every((YY => this._accessorsUsed.has(YY))) && YY.removeBufferView(rY)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let LF = !1;

    function tF() {
      LF || (LF = !0, fF.RegisterExtension(PF, (YY => new UF(YY))))
    }
    tF();
    var YA = DY(40636);
    const rA = "KHR_lights_punctual",
      DA = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      FA = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      AA = JY.r.Backward();
    class IA {
      constructor(YY) {
        this.name = rA, this.enabled = !0, this.required = !1, this._exporter = YY
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[rA] = this._lights
      }
      async postExportNodeAsync(YY, rY, DY, FY, AY) {
        return await new Promise((IY => {
          if (!(DY instanceof vF.c)) return void IY(rY);
          const RY = DY.getTypeID() == vF.c.LIGHTTYPEID_POINTLIGHT ? "point" : DY.getTypeID() == vF.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : DY.getTypeID() == vF.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!RY || !(DY instanceof YA.d)) return cY.d.Warn(`${YY}: Light ${DY.name} is not supported in ${rA}`), void IY(rY);
          if (DY.falloffType !== vF.c.FALLOFF_GLTF && cY.d.Warn(`${YY}: Light falloff for ${DY.name} does not match the ${rA} specification!`), !DY.position.kIY(0, 0, 0)) {
            const YY = JY.n.xy[0].brY(DY.position);
            AY && pD(YY), rY.translation = YY.VDY()
          }
          if ("point" !== RY) {
            const YY = DY.direction.normalizeToRef(JY.n.xy[0]);
            AY && pD(YY);
            const FY = JY.g.FromUnitVectorsToRef(AA, YY, JY.n.Quaternion[0]);
            JY.g.IsIdentity(FY) || (rY.rotation = FY.VDY())
          }
          const OY = {
            type: RY,
            name: DY.name,
            color: DY.diffuse.VDY(),
            intensity: DY.intensity,
            range: DY.range
          };
          if (UD(OY, DA), "spot" === RY) {
            const YY = DY;
            OY.spot = {
              innerConeAngle: YY.innerAngle / 2,
              outerConeAngle: YY.angle / 2
            }, UD(OY.spot, FA)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(OY);
          const gY = {
              light: this._lights.lights.length - 1
            },
            aY = DY.parent;
          if (aY && nD(DY, aY)) {
            const YY = FY.get(aY);
            if (YY) {
              const DY = this._exporter._nodes[YY];
              return xD(rY, DY), DY.extensions || (DY.extensions = {}), DY.extensions[rA] = gY, void IY(null)
            }
          }
          rY.extensions || (rY.extensions = {}), rY.extensions[rA] = gY, IY(rY)
        }))
      }
    }
    let RA = !1;

    function OA() {
      RA || (RA = !0, fF.RegisterExtension(rA, (YY => new IA(YY))))
    }
    OA();
    const gA = "KHR_interactivity";
    class aA {
      constructor(YY) {
        this._exporter = YY, this.name = gA, this.enabled = !!YY.options.khrInteractivity, this.required = YY.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var YY, rY, DY;
        const FY = this._exporter.options.khrInteractivity;
        if (!FY) return;
        const AY = FY.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: YY => this._exporter._getNodeIndex(YY),
          getAnimationIndex: YY => this._exporter._getAnimationIndex(YY),
          getCameraIndex: YY => this._exporter._getCameraIndex(YY),
          getMaterialIndex: YY => this._exporter._getMaterialIndex(YY),
          getRootIndex: (YY, rY) => this._exporter._getRootIndex(YY, rY),
          setNodeExtension: (YY, rY, DY) => this._exporter._setNodeExtension(YY, rY, DY)
        });
        this._exporter._glTF.extensions[gA] = AY;
        for (const IY of FY.additionalExtensionsUsed)(YY = this._exporter._glTF).extensionsUsed || (YY.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(IY) && this._exporter._glTF.extensionsUsed.push(IY);
        for (const IY of FY.additionalExtensionsRequired)(rY = this._exporter._glTF).extensionsUsed || (rY.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(IY) && this._exporter._glTF.extensionsUsed.push(IY), (DY = this._exporter._glTF).extensionsRequired || (DY.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(IY) && this._exporter._glTF.extensionsRequired.push(IY)
      }
    }
    let vA = !1;

    function uA() {
      vA || (vA = !0, fF.RegisterExtension(gA, (YY => new aA(YY)), 200))
    }
    uA();
    const sA = "EXT_lights_area",
      iA = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      yA = {
        aspect: 1
      },
      QA = JY.r.Backward();
    class oA {
      constructor(YY) {
        this.name = sA, this.enabled = !0, this.required = !1, this._exporter = YY
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[sA] = this._lights
      }
      async postExportNodeAsync(YY, rY, DY, FY, AY) {
        return await new Promise((IY => {
          if (!(DY instanceof vF.c)) return void IY(rY);
          const RY = DY.getTypeID() == vF.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!RY) return cY.d.Warn(`${YY}: Light ${DY.name} is not supported in ${sA}`), void IY(rY);
          const OY = DY;
          if (OY.falloffType !== vF.c.FALLOFF_GLTF && cY.d.Warn(`${YY}: Light falloff for ${DY.name} does not match the ${sA} specification!`), !OY.position.kIY(0, 0, 0)) {
            const YY = JY.n.xy[0].brY(OY.position);
            AY && pD(YY), rY.translation = YY.VDY()
          }
          const gY = JY.r.Forward();
          AY && pD(gY);
          const aY = JY.g.FromUnitVectorsToRef(QA, gY, JY.n.Quaternion[0]);
          JY.g.IsIdentity(aY) || (rY.rotation = aY.VDY());
          const vY = {
            type: RY,
            name: OY.name,
            color: OY.diffuse.VDY(),
            intensity: OY.intensity,
            size: OY.height,
            rect: {
              aspect: OY.width / OY.height
            }
          };
          UD(vY, iA), vY.rect && UD(vY.rect, yA), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(vY);
          const uY = {
              light: this._lights.lights.length - 1
            },
            sY = DY.parent;
          if (sY && nD(OY, sY)) {
            const YY = FY.get(sY);
            if (YY) {
              const DY = this._exporter._nodes[YY];
              return xD(rY, DY), DY.extensions || (DY.extensions = {}), DY.extensions[sA] = uY, void IY(null)
            }
          }
          rY.extensions || (rY.extensions = {}), rY.extensions[sA] = uY, IY(rY)
        }))
      }
    }
    let WA = !1;

    function EA() {
      WA || (WA = !0, fF.RegisterExtension(sA, (YY => new oA(YY))))
    }
    EA();
    const mA = "KHR_materials_anisotropy";
    class VA {
      constructor(YY) {
        this.name = mA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof lr) {
          if (DY.anisotropy.isEnabled && !DY.anisotropy.legacy) return DY.anisotropy.texture && FY.push(DY.anisotropy.texture), FY
        } else if (DY instanceof Lr && DY.specularRoughnessAnisotropy > 0) {
          const YY = function(YY) {
            const rY = YY.specularRoughnessAnisotropyTexture,
              DY = YY.geometryTangentTexture;
            return `${rY&&rY.getInternalTexture()?rY.getInternalTexture().uniqueId:"NoStrength"}_${DY&&DY.getInternalTexture()?DY.getInternalTexture().uniqueId:"NoTangent"}`
          }(DY);
          if (this._anisoTexturesMap[YY]) FY.push(this._anisoTexturesMap[YY]);
          else {
            const rY = await async function(YY) {
              const rY = YY.hT(),
                DY = YY.specularRoughnessAnisotropyTexture,
                FY = YY.geometryTangentTexture;
              return DY || FY ? await RD("AnisotropyTexture", aD(FY ? OD(FY, 0) : gD(1), FY ? OD(FY, 1) : gD(0), DY ? OD(DY, 0) : gD(1)), rY) : null
            }(DY);
            rY && (FY.push(rY), this._anisoTexturesMap[YY] = rY)
          }
          return FY
        }
        return []
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          var FY;
          if (DY instanceof lr) {
            if (!DY.anisotropy.isEnabled || DY.anisotropy.legacy) return void YY(rY);
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            const FY = this._exporter._materialExporter.getTextureInfo(DY.anisotropy.texture),
              AY = {
                anisotropyStrength: DY.anisotropy.intensity,
                anisotropyRotation: DY.anisotropy.angle,
                anisotropyTexture: FY ?? void 0
              };
            null !== AY.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[mA] = AY
          } else if (DY instanceof Lr && DY.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            let AY = DY.specularRoughnessTexture;
            DY._useRoughnessFromMetallicTextureGreen && (AY = DY.baseMetalnessTexture);
            const IY = this._anisoTexturesMap[DY.id];
            if (!AY && !IY) {
              let FY = DY.specularRoughness,
                AY = DY.specularRoughnessAnisotropy;
              if (!DY._useGltfStyleAnisotropy) {
                const YY = function(YY, rY) {
                  const DY = YY * YY,
                    FY = DY * Math.sqrt(2 / (1 + (1 - rY) * (1 - rY))),
                    AY = (1 - rY) * FY;
                  return {
                    newBaseRoughness: Math.sqrt(AY),
                    newAnisotropyStrength: Math.min(Math.sqrt((FY - DY) / Math.max(1 - DY, 1e-4)), 1)
                  }
                }(DY.specularRoughness, DY.specularRoughnessAnisotropy);
                FY = YY.newBaseRoughness, AY = YY.newAnisotropyStrength
              }
              rY.pbrMetallicRoughness && (rY.pbrMetallicRoughness.roughnessFactor = FY);
              const IY = {
                anisotropyStrength: AY,
                anisotropyRotation: DY.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return rY.extensions[mA] = IY, YY(rY)
            }
            const RY = IY ? this._exporter._materialExporter.getTextureInfo(IY) : null,
              OY = {
                anisotropyStrength: DY.specularRoughnessAnisotropy,
                anisotropyRotation: DY.geometryTangentAngle,
                anisotropyTexture: RY || void 0,
                extensions: {}
              };
            DY._useGltfStyleAnisotropy || (rY.extensions.KHR_materials_openpbr = {}, (FY = this._exporter._glTF).extensionsUsed || (FY.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[mA] = OY
          }
          YY(rY)
        }))
      }
    }
    let SA = !1;

    function lA() {
      SA || (SA = !0, fF.RegisterExtension(mA, (YY => new VA(YY))))
    }
    lA();
    const TA = "KHR_materials_clearcoat";

    function eA(YY, rY) {
      const DY = new HY.i(rY.name, rY.hT());
      return DY._texture = YY, DY.coordinatesIndex = rY.coordinatesIndex, rY instanceof HY.i && (DY.uOffset = rY.uOffset, DY.vOffset = rY.vOffset, DY.uScale = rY.uScale, DY.vScale = rY.vScale, DY.wAng = rY.wAng), DY.wrapU = rY.wrapU, DY.wrapV = rY.wrapV, DY
    }
    class NA {
      constructor(YY) {
        this.name = TA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = YY
      }
      dispose() {
        for (const YY of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[YY].dispose()
        }
        this._mergedTexturesMap = {};
        for (const YY of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[YY].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof lr) {
          if (DY.clearCoat.isEnabled) return DY.clearCoat.texture && FY.push(DY.clearCoat.texture), !DY.clearCoat.useRoughnessFromMainTexture && DY.clearCoat.textureRoughness && FY.push(DY.clearCoat.textureRoughness), DY.clearCoat.bumpTexture && FY.push(DY.clearCoat.bumpTexture), FY
        } else if (DY instanceof Lr && DY.coatWeight > 0) {
          let YY = !1;
          if (DY.coatWeightTexture ? DY.coatRoughnessTexture ? DY._useCoatRoughnessFromGreenChannel && DY.coatWeightTexture.getInternalTexture() === DY.coatRoughnessTexture.getInternalTexture() ? (FY.push(DY.coatWeightTexture), FY.push(DY.coatRoughnessTexture)) : YY = !0 : FY.push(DY.coatWeightTexture) : DY.coatRoughnessTexture && (DY._useCoatRoughnessFromGreenChannel ? FY.push(DY.coatRoughnessTexture) : YY = !0), YY) {
            const YY = function(YY) {
              const rY = YY.coatWeightTexture,
                DY = rY && rY.getInternalTexture() ? rY.getInternalTexture().uniqueId : "NoCoat",
                FY = YY.coatRoughnessTexture;
              return `${DY}_${FY&&FY.getInternalTexture()?FY.getInternalTexture().uniqueId:"NoRoughness"}`
            }(DY);
            if (!this._cachedInternalTexturesMap[YY]) {
              const rY = await async function(YY) {
                const rY = YY.hT(),
                  DY = YY.coatWeightTexture,
                  FY = YY.coatRoughnessTexture;
                return DY || FY ? (await RD("CoatTexture", aD(DY ? OD(DY, 0) : gD(1), FY ? OD(FY, YY._useCoatRoughnessFromGreenChannel ? 1 : 0) : gD(1)), rY)).getInternalTexture() : null
              }(DY);
              rY && (this._cachedInternalTexturesMap[YY] = rY)
            }
            this._cachedInternalTexturesMap[YY] && (DY.coatWeightTexture && (this._mergedTexturesMap[DY.coatWeightTexture.uniqueId] = eA(this._cachedInternalTexturesMap[YY], DY.coatWeightTexture), FY.push(this._mergedTexturesMap[DY.coatWeightTexture.uniqueId])), DY.coatRoughnessTexture && (this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId] = eA(this._cachedInternalTexturesMap[YY], DY.coatRoughnessTexture), FY.push(this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId])))
          }
          return DY.geometryCoatNormalTexture && FY.push(DY.geometryCoatNormalTexture), FY
        }
        return []
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          if (DY instanceof lr) {
            if (!DY.clearCoat.isEnabled) return void YY(rY);
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            const FY = this._exporter._materialExporter.getTextureInfo(DY.clearCoat.texture);
            let AY;
            AY = DY.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(DY.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(DY.clearCoat.textureRoughness), DY.clearCoat.isTintEnabled && er.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${DY.name}`), DY.clearCoat.remapF0OnInterfaceChange && er.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${DY.name}`);
            const IY = this._exporter._materialExporter.getTextureInfo(DY.clearCoat.bumpTexture),
              RY = {
                clearcoatFactor: DY.clearCoat.intensity,
                clearcoatTexture: FY ?? void 0,
                clearcoatRoughnessFactor: DY.clearCoat.roughness,
                clearcoatRoughnessTexture: AY ?? void 0,
                clearcoatNormalTexture: IY ?? void 0
              };
            null === RY.clearcoatTexture && null === RY.clearcoatRoughnessTexture && null === RY.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[TA] = RY
          } else if (DY instanceof Lr) {
            if (0 == DY.coatWeight) return void YY(rY);
            let FY, AY, IY, RY;
            this._wasUsed = !0, rY.extensions = rY.extensions || {}, DY.coatWeightTexture && (FY = this._mergedTexturesMap[DY.coatWeightTexture.uniqueId], AY = this._exporter._materialExporter.getTextureInfo(FY)), DY.coatRoughnessTexture && (IY = this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId], RY = this._exporter._materialExporter.getTextureInfo(IY)), DY.coatColorTexture && er.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${DY.name}`);
            const OY = this._exporter._materialExporter.getTextureInfo(DY.geometryCoatNormalTexture),
              gY = {
                clearcoatFactor: DY.coatWeight,
                clearcoatTexture: AY ?? void 0,
                clearcoatRoughnessFactor: DY.coatRoughness,
                clearcoatRoughnessTexture: RY ?? void 0,
                clearcoatNormalTexture: OY ?? void 0
              };
            null === gY.clearcoatTexture && null === gY.clearcoatRoughnessTexture && null === gY.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[TA] = gY
          }
          YY(rY)
        }))
      }
    }
    let BA = !1;

    function cA() {
      BA || (BA = !0, fF.RegisterExtension(TA, (YY => new NA(YY))))
    }
    cA();
    const KA = "KHR_materials_coat";

    function HA(YY) {
      const rY = YY.coatRoughnessAnisotropyTexture,
        DY = YY.geometryCoatTangentTexture;
      return `${rY&&rY.getInternalTexture()?rY.getInternalTexture().uniqueId:"NoStrength"}_${DY&&DY.getInternalTexture()?DY.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function zA(YY, rY) {
      const DY = new HY.i(rY.name, rY.hT());
      return DY._texture = YY, DY.coordinatesIndex = rY.coordinatesIndex, rY instanceof HY.i && (DY.uOffset = rY.uOffset, DY.vOffset = rY.vOffset, DY.uScale = rY.uScale, DY.vScale = rY.vScale, DY.wAng = rY.wAng), DY.wrapU = rY.wrapU, DY.wrapV = rY.wrapV, DY
    }
    class ZA {
      constructor(YY) {
        this.name = KA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = YY
      }
      dispose() {
        for (const YY of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[YY].dispose()
        }
        this._mergedTexturesMap = {};
        for (const YY of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[YY].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof lr) {
          if (DY.clearCoat.isEnabled) return DY.clearCoat.texture && FY.push(DY.clearCoat.texture), !DY.clearCoat.useRoughnessFromMainTexture && DY.clearCoat.textureRoughness && FY.push(DY.clearCoat.textureRoughness), DY.clearCoat.bumpTexture && FY.push(DY.clearCoat.bumpTexture), DY.clearCoat.tintTexture && FY.push(DY.clearCoat.tintTexture), FY
        } else if (DY instanceof Lr && DY.coatWeight > 0) {
          let YY = !1;
          if (DY.coatWeightTexture ? DY.coatRoughnessTexture ? DY._useCoatRoughnessFromGreenChannel && DY.coatWeightTexture.getInternalTexture() === DY.coatRoughnessTexture.getInternalTexture() ? (FY.push(DY.coatWeightTexture), FY.push(DY.coatRoughnessTexture)) : YY = !0 : FY.push(DY.coatWeightTexture) : DY.coatRoughnessTexture && (DY._useCoatRoughnessFromGreenChannel ? FY.push(DY.coatRoughnessTexture) : YY = !0), YY) {
            const YY = function(YY) {
              const rY = YY.coatWeightTexture,
                DY = rY && rY.getInternalTexture() ? rY.getInternalTexture().uniqueId : "NoCoat",
                FY = YY.coatRoughnessTexture;
              return `${DY}_${FY&&FY.getInternalTexture()?FY.getInternalTexture().uniqueId:"NoRoughness"}`
            }(DY);
            if (!this._cachedInternalTexturesMap[YY]) {
              const rY = await async function(YY) {
                const rY = YY.hT(),
                  DY = YY.coatWeightTexture,
                  FY = YY.coatRoughnessTexture;
                return DY || FY ? (await RD("CoatTexture", aD(DY ? OD(DY, 0) : gD(1), FY ? OD(FY, YY._useCoatRoughnessFromGreenChannel ? 1 : 0) : gD(1)), rY)).getInternalTexture() : null
              }(DY);
              rY && (this._cachedInternalTexturesMap[YY] = rY)
            }
            this._cachedInternalTexturesMap[YY] && (DY.coatWeightTexture && (this._mergedTexturesMap[DY.coatWeightTexture.uniqueId] = zA(this._cachedInternalTexturesMap[YY], DY.coatWeightTexture), FY.push(this._mergedTexturesMap[DY.coatWeightTexture.uniqueId])), DY.coatRoughnessTexture && (this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId] = zA(this._cachedInternalTexturesMap[YY], DY.coatRoughnessTexture), FY.push(this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId])))
          }
          if (DY.geometryCoatNormalTexture && FY.push(DY.geometryCoatNormalTexture), DY.coatColorTexture && FY.push(DY.coatColorTexture), DY.coatRoughnessAnisotropy > 0) {
            const YY = HA(DY);
            if (this._mergedTexturesMap[YY]) FY.push(this._mergedTexturesMap[YY]);
            else {
              const rY = await async function(YY) {
                const rY = YY.hT(),
                  DY = YY.coatRoughnessAnisotropyTexture,
                  FY = YY.geometryCoatTangentTexture;
                return DY || FY ? await RD("AnisotropyTexture", aD(FY ? OD(FY, 0) : gD(1), FY ? OD(FY, 1) : gD(0), DY ? OD(DY, 0) : gD(1)), rY) : null
              }(DY);
              rY && (FY.push(rY), this._mergedTexturesMap[YY] = rY)
            }
            return FY
          }
          return FY
        }
        return []
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          var FY;
          if (DY instanceof lr) {
            if (!DY.clearCoat.isEnabled) return void YY(rY);
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            const FY = this._exporter._materialExporter.getTextureInfo(DY.clearCoat.texture);
            let AY, IY;
            AY = DY.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(DY.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(DY.clearCoat.textureRoughness), DY.clearCoat.isTintEnabled && (IY = this._exporter._materialExporter.getTextureInfo(DY.clearCoat.tintTexture));
            const RY = this._exporter._materialExporter.getTextureInfo(DY.clearCoat.bumpTexture),
              OY = DY.clearCoat.indexOfRefraction,
              gY = {
                coatFactor: DY.clearCoat.intensity,
                coatTexture: FY ?? void 0,
                coatRoughnessFactor: DY.clearCoat.roughness,
                coatRoughnessTexture: AY ?? void 0,
                coatNormalTexture: RY ?? void 0,
                coatColorFactor: DY.clearCoat.tintColor.VDY(),
                coatColorTexture: IY ?? void 0,
                coatIor: 1.5 !== OY ? OY : void 0
              };
            null === gY.coatTexture && null === gY.coatRoughnessTexture && null === gY.coatRoughnessTexture && null === gY.coatColorTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[KA] = gY
          } else if (DY instanceof Lr) {
            if (0 == DY.coatWeight) return void YY(rY);
            let AY, IY, RY, OY;
            this._wasUsed = !0, rY.extensions = rY.extensions || {}, DY.coatWeightTexture && (AY = this._mergedTexturesMap[DY.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[DY.coatWeightTexture.uniqueId] : DY.coatWeightTexture, IY = this._exporter._materialExporter.getTextureInfo(AY)), DY.coatRoughnessTexture && (RY = this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[DY.coatRoughnessTexture.uniqueId] : DY.coatRoughnessTexture, OY = this._exporter._materialExporter.getTextureInfo(RY));
            const gY = this._exporter._materialExporter.getTextureInfo(DY.geometryCoatNormalTexture),
              aY = this._exporter._materialExporter.getTextureInfo(DY.coatColorTexture),
              vY = DY.coatIor,
              uY = DY.coatDarkening,
              sY = DY.coatRoughnessTexture,
              iY = HA(DY),
              yY = this._mergedTexturesMap[iY];
            let QY, oY = 0,
              WY = 0;
            if (DY.coatRoughnessAnisotropy > 0) {
              if (sY || yY) {
                const YY = yY ? this._exporter._materialExporter.getTextureInfo(yY) : null;
                oY = DY.coatRoughnessAnisotropy, WY = DY.geometryCoatTangentAngle, QY = YY || void 0
              } else {
                let YY = DY.coatRoughness,
                  FY = DY.coatRoughnessAnisotropy;
                if (!DY._useGltfStyleAnisotropy) {
                  const rY = function(YY, rY) {
                    const DY = YY * YY,
                      FY = DY * Math.sqrt(2 / (1 + (1 - rY) * (1 - rY))),
                      AY = (1 - rY) * FY;
                    return {
                      newBaseRoughness: Math.sqrt(AY),
                      newAnisotropyStrength: Math.min(Math.sqrt((FY - DY) / Math.max(1 - DY, 1e-4)), 1)
                    }
                  }(DY.coatRoughness, DY.coatRoughnessAnisotropy);
                  YY = rY.newBaseRoughness, FY = rY.newAnisotropyStrength
                }
                rY.pbrMetallicRoughness && (rY.pbrMetallicRoughness.roughnessFactor = YY), oY = FY, WY = DY.geometryCoatTangentAngle + .5 * Math.PI, QY = void 0
              }
              DY._useGltfStyleAnisotropy || (rY.extensions.KHR_materials_openpbr = {}, (FY = this._exporter._glTF).extensionsUsed || (FY.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const EY = {
              coatFactor: DY.coatWeight,
              coatTexture: IY ?? void 0,
              coatRoughnessFactor: DY.coatRoughness,
              coatRoughnessTexture: OY ?? void 0,
              coatNormalTexture: gY ?? void 0,
              coatColorFactor: DY.coatColor.VDY(),
              coatColorTexture: aY ?? void 0,
              coatIor: 1.5 !== vY ? vY : void 0,
              coatDarkeningFactor: 1 !== uY ? uY : void 0,
              coatAnisotropyRotation: WY,
              coatAnisotropyStrength: oY,
              coatAnisotropyTexture: QY
            };
            null === EY.coatTexture && null === EY.coatRoughnessTexture && null === EY.coatRoughnessTexture && null === EY.coatAnisotropyTexture && null === EY.coatColorTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[KA] = EY
          }
          YY(rY)
        }))
      }
    }
    let CA = !1;

    function fA() {
      CA || (CA = !0, fF.RegisterExtension(KA, (YY => new ZA(YY))))
    }
    fA();
    let jA = (() => {
      var YY, rY, DY, FY, AY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, cY, KY, HY, zY, ZY, CY, jY, hY, dY, JY, MY, wY, bY, XY, qY, pY, GY, xY, nY, PY, UY, LY, tY, Yr, rr, Dr, Fr, Ar, Ir, Rr, Or, gr, ar, vr, ur, sr, ir, yr, Qr, or, Wr, Er, mr;
      let Vr, Sr, er, Nr, Br, cr, Kr, Hr, zr, Zr, Cr, fr, jr, hr, dr, Jr, Mr, wr, br, Xr, qr, pr, kr, Gr, xr, nr, Pr, Ur, Lr, tr, YD, rD, DD, FD, AD, ID, RD, OD, gD, aD, vD, uD, sD, iD, yD, QD, oD, WD, ED, mD, VD, SD, lD, TD, eD, ND, BD, cD, KD, HD, zD, ZD, CD, fD, jD, hD, dD, JD, MD = lr,
        wD = [],
        bD = [],
        XD = [],
        qD = [],
        pD = [],
        kD = [],
        GD = [],
        xD = [],
        nD = [],
        PD = [],
        UD = [],
        LD = [],
        tD = [],
        YF = [],
        rF = [],
        DF = [],
        FF = [],
        AF = [],
        IF = [],
        RF = [],
        OF = [],
        gF = [],
        aF = [],
        vF = [],
        uF = [],
        sF = [],
        iF = [],
        yF = [],
        QF = [],
        oF = [],
        WF = [],
        EF = [],
        mF = [],
        VF = [],
        SF = [],
        lF = [],
        TF = [],
        eF = [],
        NF = [],
        BF = [],
        cF = [],
        KF = [],
        HF = [],
        zF = [],
        ZF = [],
        CF = [],
        fF = [],
        jF = [],
        hF = [],
        dF = [],
        JF = [],
        MF = [],
        wF = [],
        bF = [],
        XF = [],
        qF = [],
        pF = [],
        kF = [],
        GF = [],
        xF = [],
        nF = [],
        PF = [],
        UF = [],
        LF = [],
        tF = [],
        YA = [],
        rA = [],
        DA = [],
        FA = [],
        AA = [],
        IA = [],
        RA = [],
        OA = [],
        gA = [],
        aA = [],
        vA = [],
        uA = [],
        sA = [],
        iA = [],
        yA = [],
        QA = [],
        oA = [],
        WA = [],
        EA = [],
        mA = [],
        VA = [],
        SA = [],
        lA = [],
        TA = [],
        eA = [],
        NA = [],
        BA = [],
        cA = [],
        KA = [],
        HA = [],
        zA = [],
        ZA = [],
        CA = [],
        fA = [],
        jA = [],
        hA = [],
        dA = [],
        JA = [],
        MA = [],
        wA = [],
        bA = [],
        XA = [],
        qA = [],
        pA = [],
        kA = [],
        GA = [],
        xA = [],
        nA = [],
        PA = [],
        UA = [],
        LA = [],
        tA = [],
        YI = [],
        rI = [],
        DI = [],
        FI = [],
        AI = [],
        II = [],
        RI = [],
        OI = [],
        gI = [],
        aI = [],
        vI = [],
        uI = [],
        sI = [],
        iI = [],
        yI = [],
        QI = [];
      return YY = class extends MD {
        get directIntensity() {
          return (0, NY.d)(this, rY, "f")
        }
        set directIntensity(YY) {
          (0, NY.g)(this, rY, YY, "f")
        }
        get emissiveIntensity() {
          return (0, NY.d)(this, DY, "f")
        }
        set emissiveIntensity(YY) {
          (0, NY.g)(this, DY, YY, "f")
        }
        get environmentIntensity() {
          return (0, NY.d)(this, FY, "f")
        }
        set environmentIntensity(YY) {
          (0, NY.g)(this, FY, YY, "f")
        }
        get specularIntensity() {
          return (0, NY.d)(this, AY, "f")
        }
        set specularIntensity(YY) {
          (0, NY.g)(this, AY, YY, "f")
        }
        get disableBumpMap() {
          return (0, NY.d)(this, RY, "f")
        }
        set disableBumpMap(YY) {
          (0, NY.g)(this, RY, YY, "f")
        }
        get albedoTexture() {
          return (0, NY.d)(this, OY, "f")
        }
        set albedoTexture(YY) {
          (0, NY.g)(this, OY, YY, "f")
        }
        get baseWeightTexture() {
          return (0, NY.d)(this, gY, "f")
        }
        set baseWeightTexture(YY) {
          (0, NY.g)(this, gY, YY, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, NY.d)(this, aY, "f")
        }
        set baseDiffuseRoughnessTexture(YY) {
          (0, NY.g)(this, aY, YY, "f")
        }
        get ambientTexture() {
          return (0, NY.d)(this, vY, "f")
        }
        set ambientTexture(YY) {
          (0, NY.g)(this, vY, YY, "f")
        }
        get ambientTextureStrength() {
          return (0, NY.d)(this, uY, "f")
        }
        set ambientTextureStrength(YY) {
          (0, NY.g)(this, uY, YY, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, NY.d)(this, sY, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(YY) {
          (0, NY.g)(this, sY, YY, "f")
        }
        get opacityTexture() {
          return (0, NY.d)(this, iY, "f")
        }
        set opacityTexture(YY) {
          (0, NY.g)(this, iY, YY, "f")
        }
        get reflectionTexture() {
          return (0, NY.d)(this, yY, "f")
        }
        set reflectionTexture(YY) {
          (0, NY.g)(this, yY, YY, "f")
        }
        get emissiveTexture() {
          return (0, NY.d)(this, QY, "f")
        }
        set emissiveTexture(YY) {
          (0, NY.g)(this, QY, YY, "f")
        }
        get reflectivityTexture() {
          return (0, NY.d)(this, oY, "f")
        }
        set reflectivityTexture(YY) {
          (0, NY.g)(this, oY, YY, "f")
        }
        get metallicTexture() {
          return (0, NY.d)(this, WY, "f")
        }
        set metallicTexture(YY) {
          (0, NY.g)(this, WY, YY, "f")
        }
        get metallic() {
          return (0, NY.d)(this, EY, "f")
        }
        set metallic(YY) {
          (0, NY.g)(this, EY, YY, "f")
        }
        get roughness() {
          return (0, NY.d)(this, mY, "f")
        }
        set roughness(YY) {
          (0, NY.g)(this, mY, YY, "f")
        }
        get metallicF0Factor() {
          return (0, NY.d)(this, VY, "f")
        }
        set metallicF0Factor(YY) {
          (0, NY.g)(this, VY, YY, "f")
        }
        get metallicReflectanceColor() {
          return (0, NY.d)(this, SY, "f")
        }
        set metallicReflectanceColor(YY) {
          (0, NY.g)(this, SY, YY, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, NY.d)(this, lY, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(YY) {
          (0, NY.g)(this, lY, YY, "f")
        }
        get metallicReflectanceTexture() {
          return (0, NY.d)(this, TY, "f")
        }
        set metallicReflectanceTexture(YY) {
          (0, NY.g)(this, TY, YY, "f")
        }
        get reflectanceTexture() {
          return (0, NY.d)(this, eY, "f")
        }
        set reflectanceTexture(YY) {
          (0, NY.g)(this, eY, YY, "f")
        }
        get microSurfaceTexture() {
          return (0, NY.d)(this, cY, "f")
        }
        set microSurfaceTexture(YY) {
          (0, NY.g)(this, cY, YY, "f")
        }
        get bumpTexture() {
          return (0, NY.d)(this, KY, "f")
        }
        set bumpTexture(YY) {
          (0, NY.g)(this, KY, YY, "f")
        }
        get lightmapTexture() {
          return (0, NY.d)(this, HY, "f")
        }
        set lightmapTexture(YY) {
          (0, NY.g)(this, HY, YY, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(YY) {
          this.subSurface.refractionTexture = YY, YY ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, NY.d)(this, zY, "f")
        }
        set ambientColor(YY) {
          (0, NY.g)(this, zY, YY, "f")
        }
        get albedoColor() {
          return (0, NY.d)(this, ZY, "f")
        }
        set albedoColor(YY) {
          (0, NY.g)(this, ZY, YY, "f")
        }
        get baseWeight() {
          return (0, NY.d)(this, CY, "f")
        }
        set baseWeight(YY) {
          (0, NY.g)(this, CY, YY, "f")
        }
        get baseDiffuseRoughness() {
          return (0, NY.d)(this, jY, "f")
        }
        set baseDiffuseRoughness(YY) {
          (0, NY.g)(this, jY, YY, "f")
        }
        get reflectivityColor() {
          return (0, NY.d)(this, hY, "f")
        }
        set reflectivityColor(YY) {
          (0, NY.g)(this, hY, YY, "f")
        }
        get reflectionColor() {
          return (0, NY.d)(this, dY, "f")
        }
        set reflectionColor(YY) {
          (0, NY.g)(this, dY, YY, "f")
        }
        get emissiveColor() {
          return (0, NY.d)(this, JY, "f")
        }
        set emissiveColor(YY) {
          (0, NY.g)(this, JY, YY, "f")
        }
        get microSurface() {
          return (0, NY.d)(this, MY, "f")
        }
        set microSurface(YY) {
          (0, NY.g)(this, MY, YY, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(YY) {
          this.subSurface.indexOfRefraction = YY
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(YY) {
          this.subSurface.invertRefractionY = YY
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(YY) {
          this.subSurface.linkRefractionWithTransparency = YY, YY && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, NY.d)(this, wY, "f")
        }
        set useLightmapAsShadowmap(YY) {
          (0, NY.g)(this, wY, YY, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, NY.d)(this, bY, "f")
        }
        set useAlphaFromAlbedoTexture(YY) {
          (0, NY.g)(this, bY, YY, "f")
        }
        get forceAlphaTest() {
          return (0, NY.d)(this, XY, "f")
        }
        set forceAlphaTest(YY) {
          (0, NY.g)(this, XY, YY, "f")
        }
        get alphaCutOff() {
          return (0, NY.d)(this, qY, "f")
        }
        set alphaCutOff(YY) {
          (0, NY.g)(this, qY, YY, "f")
        }
        get useSpecularOverAlpha() {
          return (0, NY.d)(this, pY, "f")
        }
        set useSpecularOverAlpha(YY) {
          (0, NY.g)(this, pY, YY, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, NY.d)(this, GY, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(YY) {
          (0, NY.g)(this, GY, YY, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, NY.d)(this, xY, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(YY) {
          (0, NY.g)(this, xY, YY, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, NY.d)(this, nY, "f")
        }
        set useRoughnessFromMetallicTextureGreen(YY) {
          (0, NY.g)(this, nY, YY, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, NY.d)(this, PY, "f")
        }
        set useMetallnessFromMetallicTextureBlue(YY) {
          (0, NY.g)(this, PY, YY, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, NY.d)(this, UY, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(YY) {
          (0, NY.g)(this, UY, YY, "f")
        }
        get useAmbientInGrayScale() {
          return (0, NY.d)(this, LY, "f")
        }
        set useAmbientInGrayScale(YY) {
          (0, NY.g)(this, LY, YY, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, NY.d)(this, tY, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(YY) {
          (0, NY.g)(this, tY, YY, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === lr.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(YY) {
          YY !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = YY ? lr.LIGHTFALLOFF_PHYSICAL : lr.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === lr.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(YY) {
          YY !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = YY ? lr.LIGHTFALLOFF_GLTF : lr.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, NY.d)(this, Yr, "f")
        }
        set useRadianceOverAlpha(YY) {
          (0, NY.g)(this, Yr, YY, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, NY.d)(this, rr, "f")
        }
        set useObjectSpaceNormalMap(YY) {
          (0, NY.g)(this, rr, YY, "f")
        }
        get useParallax() {
          return (0, NY.d)(this, Dr, "f")
        }
        set useParallax(YY) {
          (0, NY.g)(this, Dr, YY, "f")
        }
        get useParallaxOcclusion() {
          return (0, NY.d)(this, Fr, "f")
        }
        set useParallaxOcclusion(YY) {
          (0, NY.g)(this, Fr, YY, "f")
        }
        get parallaxScaleBias() {
          return (0, NY.d)(this, Ar, "f")
        }
        set parallaxScaleBias(YY) {
          (0, NY.g)(this, Ar, YY, "f")
        }
        get disableLighting() {
          return (0, NY.d)(this, Ir, "f")
        }
        set disableLighting(YY) {
          (0, NY.g)(this, Ir, YY, "f")
        }
        get forceIrradianceInFragment() {
          return (0, NY.d)(this, Rr, "f")
        }
        set forceIrradianceInFragment(YY) {
          (0, NY.g)(this, Rr, YY, "f")
        }
        get maxSimultaneousLights() {
          return (0, NY.d)(this, Or, "f")
        }
        set maxSimultaneousLights(YY) {
          (0, NY.g)(this, Or, YY, "f")
        }
        get invertNormalMapX() {
          return (0, NY.d)(this, gr, "f")
        }
        set invertNormalMapX(YY) {
          (0, NY.g)(this, gr, YY, "f")
        }
        get invertNormalMapY() {
          return (0, NY.d)(this, ar, "f")
        }
        set invertNormalMapY(YY) {
          (0, NY.g)(this, ar, YY, "f")
        }
        get twoSidedLighting() {
          return (0, NY.d)(this, vr, "f")
        }
        set twoSidedLighting(YY) {
          (0, NY.g)(this, vr, YY, "f")
        }
        get useAlphaFresnel() {
          return (0, NY.d)(this, ur, "f")
        }
        set useAlphaFresnel(YY) {
          (0, NY.g)(this, ur, YY, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, NY.d)(this, sr, "f")
        }
        set useLinearAlphaFresnel(YY) {
          (0, NY.g)(this, sr, YY, "f")
        }
        get environmentBRDFTexture() {
          return (0, NY.d)(this, ir, "f")
        }
        set environmentBRDFTexture(YY) {
          (0, NY.g)(this, ir, YY, "f")
        }
        get forceNormalForward() {
          return (0, NY.d)(this, yr, "f")
        }
        set forceNormalForward(YY) {
          (0, NY.g)(this, yr, YY, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, NY.d)(this, Qr, "f")
        }
        set enableSpecularAntiAliasing(YY) {
          (0, NY.g)(this, Qr, YY, "f")
        }
        get useHorizonOcclusion() {
          return (0, NY.d)(this, or, "f")
        }
        set useHorizonOcclusion(YY) {
          (0, NY.g)(this, or, YY, "f")
        }
        get useRadianceOcclusion() {
          return (0, NY.d)(this, Wr, "f")
        }
        set useRadianceOcclusion(YY) {
          (0, NY.g)(this, Wr, YY, "f")
        }
        get unlit() {
          return (0, NY.d)(this, Er, "f")
        }
        set unlit(YY) {
          (0, NY.g)(this, Er, YY, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, NY.d)(this, mr, "f")
        }
        set applyDecalMapAfterDetailMap(YY) {
          (0, NY.g)(this, mr, YY, "f")
        }
        constructor(IY, BY) {
          super(IY, BY, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), rY.set(this, ((0, NY.j)(this, wD), (0, NY.j)(this, bD, 1))), DY.set(this, ((0, NY.j)(this, XD), (0, NY.j)(this, qD, 1))), FY.set(this, ((0, NY.j)(this, pD), (0, NY.j)(this, kD, 1))), AY.set(this, ((0, NY.j)(this, GD), (0, NY.j)(this, xD, 1))), RY.set(this, ((0, NY.j)(this, nD), (0, NY.j)(this, PD, !1))), OY.set(this, ((0, NY.j)(this, UD), (0, NY.j)(this, LD, void 0))), gY.set(this, ((0, NY.j)(this, tD), (0, NY.j)(this, YF, void 0))), aY.set(this, ((0, NY.j)(this, rF), (0, NY.j)(this, DF, void 0))), vY.set(this, ((0, NY.j)(this, FF), (0, NY.j)(this, AF, void 0))), uY.set(this, ((0, NY.j)(this, IF), (0, NY.j)(this, RF, 1))), sY.set(this, ((0, NY.j)(this, OF), (0, NY.j)(this, gF, YY.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), iY.set(this, ((0, NY.j)(this, aF), (0, NY.j)(this, vF, void 0))), yY.set(this, ((0, NY.j)(this, uF), (0, NY.j)(this, sF, void 0))), QY.set(this, ((0, NY.j)(this, iF), (0, NY.j)(this, yF, void 0))), oY.set(this, ((0, NY.j)(this, QF), (0, NY.j)(this, oF, void 0))), WY.set(this, ((0, NY.j)(this, WF), (0, NY.j)(this, EF, void 0))), EY.set(this, ((0, NY.j)(this, mF), (0, NY.j)(this, VF, void 0))), mY.set(this, ((0, NY.j)(this, SF), (0, NY.j)(this, lF, void 0))), VY.set(this, ((0, NY.j)(this, TF), (0, NY.j)(this, eF, 1))), SY.set(this, ((0, NY.j)(this, NF), (0, NY.j)(this, BF, kY.c.White()))), lY.set(this, ((0, NY.j)(this, cF), (0, NY.j)(this, KF, !1))), TY.set(this, ((0, NY.j)(this, HF), (0, NY.j)(this, zF, void 0))), eY.set(this, ((0, NY.j)(this, ZF), (0, NY.j)(this, CF, void 0))), cY.set(this, ((0, NY.j)(this, fF), (0, NY.j)(this, jF, void 0))), KY.set(this, ((0, NY.j)(this, hF), (0, NY.j)(this, dF, void 0))), HY.set(this, ((0, NY.j)(this, JF), (0, NY.j)(this, MF, void 0))), zY.set(this, ((0, NY.j)(this, wF), (0, NY.j)(this, bF, new kY.c(0, 0, 0)))), ZY.set(this, ((0, NY.j)(this, XF), (0, NY.j)(this, qF, new kY.c(1, 1, 1)))), CY.set(this, ((0, NY.j)(this, pF), (0, NY.j)(this, kF, 1))), jY.set(this, ((0, NY.j)(this, GF), (0, NY.j)(this, xF, void 0))), hY.set(this, ((0, NY.j)(this, nF), (0, NY.j)(this, PF, new kY.c(1, 1, 1)))), dY.set(this, ((0, NY.j)(this, UF), (0, NY.j)(this, LF, new kY.c(1, 1, 1)))), JY.set(this, ((0, NY.j)(this, tF), (0, NY.j)(this, YA, new kY.c(0, 0, 0)))), MY.set(this, ((0, NY.j)(this, rA), (0, NY.j)(this, DA, 1))), wY.set(this, ((0, NY.j)(this, FA), (0, NY.j)(this, AA, !1))), bY.set(this, ((0, NY.j)(this, IA), (0, NY.j)(this, RA, !1))), XY.set(this, ((0, NY.j)(this, OA), (0, NY.j)(this, gA, !1))), qY.set(this, ((0, NY.j)(this, aA), (0, NY.j)(this, vA, .4))), pY.set(this, ((0, NY.j)(this, uA), (0, NY.j)(this, sA, !0))), GY.set(this, ((0, NY.j)(this, iA), (0, NY.j)(this, yA, !1))), xY.set(this, ((0, NY.j)(this, QA), (0, NY.j)(this, oA, !0))), nY.set(this, ((0, NY.j)(this, WA), (0, NY.j)(this, EA, !1))), PY.set(this, ((0, NY.j)(this, mA), (0, NY.j)(this, VA, !1))), UY.set(this, ((0, NY.j)(this, SA), (0, NY.j)(this, lA, !1))), LY.set(this, ((0, NY.j)(this, TA), (0, NY.j)(this, eA, !1))), tY.set(this, ((0, NY.j)(this, NA), (0, NY.j)(this, BA, !1))), Yr.set(this, ((0, NY.j)(this, cA), (0, NY.j)(this, KA, !0))), rr.set(this, ((0, NY.j)(this, HA), (0, NY.j)(this, zA, !1))), Dr.set(this, ((0, NY.j)(this, ZA), (0, NY.j)(this, CA, !1))), Fr.set(this, ((0, NY.j)(this, fA), (0, NY.j)(this, jA, !1))), Ar.set(this, ((0, NY.j)(this, hA), (0, NY.j)(this, dA, .05))), Ir.set(this, ((0, NY.j)(this, JA), (0, NY.j)(this, MA, !1))), Rr.set(this, ((0, NY.j)(this, wA), (0, NY.j)(this, bA, !1))), Or.set(this, ((0, NY.j)(this, XA), (0, NY.j)(this, qA, 4))), gr.set(this, ((0, NY.j)(this, pA), (0, NY.j)(this, kA, !1))), ar.set(this, ((0, NY.j)(this, GA), (0, NY.j)(this, xA, !1))), vr.set(this, ((0, NY.j)(this, nA), (0, NY.j)(this, PA, !1))), ur.set(this, ((0, NY.j)(this, UA), (0, NY.j)(this, LA, !1))), sr.set(this, ((0, NY.j)(this, tA), (0, NY.j)(this, YI, !1))), ir.set(this, ((0, NY.j)(this, rI), (0, NY.j)(this, DI, null))), yr.set(this, ((0, NY.j)(this, FI), (0, NY.j)(this, AI, !1))), Qr.set(this, ((0, NY.j)(this, II), (0, NY.j)(this, RI, !1))), or.set(this, ((0, NY.j)(this, OI), (0, NY.j)(this, gI, !0))), Wr.set(this, ((0, NY.j)(this, aI), (0, NY.j)(this, vI, !0))), Er.set(this, ((0, NY.j)(this, uI), (0, NY.j)(this, sI, !1))), mr.set(this, ((0, NY.j)(this, iI), (0, NY.j)(this, yI, !1))), (0, NY.j)(this, QI), this._environmentBRDFTexture = fY(this.hT())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(rY) {
          let DY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const AY = Tr.b.Clone((() => new YY(rY, this.hT())), this, {
            cloneTexturesOnlyOnce: DY
          });
          return AY.id = rY, AY.name = rY, this.stencil.copyTo(AY.stencil), this._clonePlugins(AY, FY), AY
        }
        serialize() {
          const YY = super.serialize();
          return YY.customType = "BABYLON.PBRMaterial", YY
        }
        static Parse(rY, DY, FY) {
          const AY = Tr.b.Parse((() => new YY(rY.name, DY)), rY, DY, FY);
          return rY.stencil && AY.stencil.parse(rY.stencil, DY, FY), IY.c._ParsePlugins(rY, AY, DY, FY), rY.clearCoat && AY.clearCoat.parse(rY.clearCoat, DY, FY), rY.anisotropy && AY.anisotropy.parse(rY.anisotropy, DY, FY), rY.brdf && AY.brdf.parse(rY.brdf, DY, FY), rY.sheen && AY.sheen.parse(rY.sheen, DY, FY), rY.subSurface && AY.subSurface.parse(rY.subSurface, DY, FY), rY.iridescence && AY.iridescence.parse(rY.iridescence, DY, FY), AY
        }
      }, rY = new WeakMap, DY = new WeakMap, FY = new WeakMap, AY = new WeakMap, RY = new WeakMap, OY = new WeakMap, gY = new WeakMap, aY = new WeakMap, vY = new WeakMap, uY = new WeakMap, sY = new WeakMap, iY = new WeakMap, yY = new WeakMap, QY = new WeakMap, oY = new WeakMap, WY = new WeakMap, EY = new WeakMap, mY = new WeakMap, VY = new WeakMap, SY = new WeakMap, lY = new WeakMap, TY = new WeakMap, eY = new WeakMap, cY = new WeakMap, KY = new WeakMap, HY = new WeakMap, zY = new WeakMap, ZY = new WeakMap, CY = new WeakMap, jY = new WeakMap, hY = new WeakMap, dY = new WeakMap, JY = new WeakMap, MY = new WeakMap, wY = new WeakMap, bY = new WeakMap, XY = new WeakMap, qY = new WeakMap, pY = new WeakMap, GY = new WeakMap, xY = new WeakMap, nY = new WeakMap, PY = new WeakMap, UY = new WeakMap, LY = new WeakMap, tY = new WeakMap, Yr = new WeakMap, rr = new WeakMap, Dr = new WeakMap, Fr = new WeakMap, Ar = new WeakMap, Ir = new WeakMap, Rr = new WeakMap, Or = new WeakMap, gr = new WeakMap, ar = new WeakMap, vr = new WeakMap, ur = new WeakMap, sr = new WeakMap, ir = new WeakMap, yr = new WeakMap, Qr = new WeakMap, or = new WeakMap, Wr = new WeakMap, Er = new WeakMap, mr = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(MD[Symbol.metadata] ?? null) : void 0;
        Vr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Sr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], er = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Nr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Br = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], cr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Kr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Hr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], zr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Zr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Cr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], fr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], jr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], dr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Jr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Mr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], wr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], br = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Xr = [(0, BY.o)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], qr = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], pr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], kr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Gr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], xr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], nr = [(0, BY.D)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty", null)], Pr = [(0, BY.o)("ambient"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Ur = [(0, BY.o)("albedo"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], Lr = [(0, BY.M)("baseWeight"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], tr = [(0, BY.M)("baseDiffuseRoughness"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], YD = [(0, BY.o)("reflectivity"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], rD = [(0, BY.o)("reflection"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], DD = [(0, BY.o)("emissive"), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], FD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], AD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], ID = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], RD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], OD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], gD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], aD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], vD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], uD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], sD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], iD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], yD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], QD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], oD = [(0, BY.M)()], WD = [(0, BY.M)()], ED = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], mD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], VD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], lD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], TD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsLightsDirty")], eD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], ND = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsLightsDirty")], BD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], cD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], KD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], HD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], zD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], ZD = [(0, BY.f)("_markAllSubMeshesAsTexturesDirty")], CD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], fD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], jD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], hD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsTexturesDirty")], dD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], JD = [(0, BY.M)(), (0, BY.f)("_markAllSubMeshesAsMiscDirty")], (0, NY.i)(YY, null, Vr, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "directIntensity" in YY,
            get: YY => YY.directIntensity,
            set: (YY, rY) => {
              YY.directIntensity = rY
            }
          },
          metadata: rY
        }, bD, XD), (0, NY.i)(YY, null, Sr, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "emissiveIntensity" in YY,
            get: YY => YY.emissiveIntensity,
            set: (YY, rY) => {
              YY.emissiveIntensity = rY
            }
          },
          metadata: rY
        }, qD, pD), (0, NY.i)(YY, null, er, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "environmentIntensity" in YY,
            get: YY => YY.environmentIntensity,
            set: (YY, rY) => {
              YY.environmentIntensity = rY
            }
          },
          metadata: rY
        }, kD, GD), (0, NY.i)(YY, null, Nr, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "specularIntensity" in YY,
            get: YY => YY.specularIntensity,
            set: (YY, rY) => {
              YY.specularIntensity = rY
            }
          },
          metadata: rY
        }, xD, nD), (0, NY.i)(YY, null, Br, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: YY => "disableBumpMap" in YY,
            get: YY => YY.disableBumpMap,
            set: (YY, rY) => {
              YY.disableBumpMap = rY
            }
          },
          metadata: rY
        }, PD, UD), (0, NY.i)(YY, null, cr, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "albedoTexture" in YY,
            get: YY => YY.albedoTexture,
            set: (YY, rY) => {
              YY.albedoTexture = rY
            }
          },
          metadata: rY
        }, LD, tD), (0, NY.i)(YY, null, Kr, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "baseWeightTexture" in YY,
            get: YY => YY.baseWeightTexture,
            set: (YY, rY) => {
              YY.baseWeightTexture = rY
            }
          },
          metadata: rY
        }, YF, rF), (0, NY.i)(YY, null, Hr, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "baseDiffuseRoughnessTexture" in YY,
            get: YY => YY.baseDiffuseRoughnessTexture,
            set: (YY, rY) => {
              YY.baseDiffuseRoughnessTexture = rY
            }
          },
          metadata: rY
        }, DF, FF), (0, NY.i)(YY, null, zr, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "ambientTexture" in YY,
            get: YY => YY.ambientTexture,
            set: (YY, rY) => {
              YY.ambientTexture = rY
            }
          },
          metadata: rY
        }, AF, IF), (0, NY.i)(YY, null, Zr, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: YY => "ambientTextureStrength" in YY,
            get: YY => YY.ambientTextureStrength,
            set: (YY, rY) => {
              YY.ambientTextureStrength = rY
            }
          },
          metadata: rY
        }, RF, OF), (0, NY.i)(YY, null, Cr, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: YY => "ambientTextureImpactOnAnalyticalLights" in YY,
            get: YY => YY.ambientTextureImpactOnAnalyticalLights,
            set: (YY, rY) => {
              YY.ambientTextureImpactOnAnalyticalLights = rY
            }
          },
          metadata: rY
        }, gF, aF), (0, NY.i)(YY, null, fr, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "opacityTexture" in YY,
            get: YY => YY.opacityTexture,
            set: (YY, rY) => {
              YY.opacityTexture = rY
            }
          },
          metadata: rY
        }, vF, uF), (0, NY.i)(YY, null, jr, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "reflectionTexture" in YY,
            get: YY => YY.reflectionTexture,
            set: (YY, rY) => {
              YY.reflectionTexture = rY
            }
          },
          metadata: rY
        }, sF, iF), (0, NY.i)(YY, null, hr, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "emissiveTexture" in YY,
            get: YY => YY.emissiveTexture,
            set: (YY, rY) => {
              YY.emissiveTexture = rY
            }
          },
          metadata: rY
        }, yF, QF), (0, NY.i)(YY, null, dr, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "reflectivityTexture" in YY,
            get: YY => YY.reflectivityTexture,
            set: (YY, rY) => {
              YY.reflectivityTexture = rY
            }
          },
          metadata: rY
        }, oF, WF), (0, NY.i)(YY, null, Jr, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "metallicTexture" in YY,
            get: YY => YY.metallicTexture,
            set: (YY, rY) => {
              YY.metallicTexture = rY
            }
          },
          metadata: rY
        }, EF, mF), (0, NY.i)(YY, null, Mr, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: YY => "metallic" in YY,
            get: YY => YY.metallic,
            set: (YY, rY) => {
              YY.metallic = rY
            }
          },
          metadata: rY
        }, VF, SF), (0, NY.i)(YY, null, wr, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: YY => "roughness" in YY,
            get: YY => YY.roughness,
            set: (YY, rY) => {
              YY.roughness = rY
            }
          },
          metadata: rY
        }, lF, TF), (0, NY.i)(YY, null, br, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: YY => "metallicF0Factor" in YY,
            get: YY => YY.metallicF0Factor,
            set: (YY, rY) => {
              YY.metallicF0Factor = rY
            }
          },
          metadata: rY
        }, eF, NF), (0, NY.i)(YY, null, Xr, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "metallicReflectanceColor" in YY,
            get: YY => YY.metallicReflectanceColor,
            set: (YY, rY) => {
              YY.metallicReflectanceColor = rY
            }
          },
          metadata: rY
        }, BF, cF), (0, NY.i)(YY, null, qr, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "useOnlyMetallicFromMetallicReflectanceTexture" in YY,
            get: YY => YY.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (YY, rY) => {
              YY.useOnlyMetallicFromMetallicReflectanceTexture = rY
            }
          },
          metadata: rY
        }, KF, HF), (0, NY.i)(YY, null, pr, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "metallicReflectanceTexture" in YY,
            get: YY => YY.metallicReflectanceTexture,
            set: (YY, rY) => {
              YY.metallicReflectanceTexture = rY
            }
          },
          metadata: rY
        }, zF, ZF), (0, NY.i)(YY, null, kr, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "reflectanceTexture" in YY,
            get: YY => YY.reflectanceTexture,
            set: (YY, rY) => {
              YY.reflectanceTexture = rY
            }
          },
          metadata: rY
        }, CF, fF), (0, NY.i)(YY, null, Gr, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "microSurfaceTexture" in YY,
            get: YY => YY.microSurfaceTexture,
            set: (YY, rY) => {
              YY.microSurfaceTexture = rY
            }
          },
          metadata: rY
        }, jF, hF), (0, NY.i)(YY, null, xr, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "bumpTexture" in YY,
            get: YY => YY.bumpTexture,
            set: (YY, rY) => {
              YY.bumpTexture = rY
            }
          },
          metadata: rY
        }, dF, JF), (0, NY.i)(YY, null, nr, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "lightmapTexture" in YY,
            get: YY => YY.lightmapTexture,
            set: (YY, rY) => {
              YY.lightmapTexture = rY
            }
          },
          metadata: rY
        }, MF, wF), (0, NY.i)(YY, null, Pr, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "ambientColor" in YY,
            get: YY => YY.ambientColor,
            set: (YY, rY) => {
              YY.ambientColor = rY
            }
          },
          metadata: rY
        }, bF, XF), (0, NY.i)(YY, null, Ur, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "albedoColor" in YY,
            get: YY => YY.albedoColor,
            set: (YY, rY) => {
              YY.albedoColor = rY
            }
          },
          metadata: rY
        }, qF, pF), (0, NY.i)(YY, null, Lr, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: YY => "baseWeight" in YY,
            get: YY => YY.baseWeight,
            set: (YY, rY) => {
              YY.baseWeight = rY
            }
          },
          metadata: rY
        }, kF, GF), (0, NY.i)(YY, null, tr, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: YY => "baseDiffuseRoughness" in YY,
            get: YY => YY.baseDiffuseRoughness,
            set: (YY, rY) => {
              YY.baseDiffuseRoughness = rY
            }
          },
          metadata: rY
        }, xF, nF), (0, NY.i)(YY, null, YD, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "reflectivityColor" in YY,
            get: YY => YY.reflectivityColor,
            set: (YY, rY) => {
              YY.reflectivityColor = rY
            }
          },
          metadata: rY
        }, PF, UF), (0, NY.i)(YY, null, rD, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "reflectionColor" in YY,
            get: YY => YY.reflectionColor,
            set: (YY, rY) => {
              YY.reflectionColor = rY
            }
          },
          metadata: rY
        }, LF, tF), (0, NY.i)(YY, null, DD, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: YY => "emissiveColor" in YY,
            get: YY => YY.emissiveColor,
            set: (YY, rY) => {
              YY.emissiveColor = rY
            }
          },
          metadata: rY
        }, YA, rA), (0, NY.i)(YY, null, FD, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: YY => "microSurface" in YY,
            get: YY => YY.microSurface,
            set: (YY, rY) => {
              YY.microSurface = rY
            }
          },
          metadata: rY
        }, DA, FA), (0, NY.i)(YY, null, AD, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: YY => "useLightmapAsShadowmap" in YY,
            get: YY => YY.useLightmapAsShadowmap,
            set: (YY, rY) => {
              YY.useLightmapAsShadowmap = rY
            }
          },
          metadata: rY
        }, AA, IA), (0, NY.i)(YY, null, ID, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAlphaFromAlbedoTexture" in YY,
            get: YY => YY.useAlphaFromAlbedoTexture,
            set: (YY, rY) => {
              YY.useAlphaFromAlbedoTexture = rY
            }
          },
          metadata: rY
        }, RA, OA), (0, NY.i)(YY, null, RD, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: YY => "forceAlphaTest" in YY,
            get: YY => YY.forceAlphaTest,
            set: (YY, rY) => {
              YY.forceAlphaTest = rY
            }
          },
          metadata: rY
        }, gA, aA), (0, NY.i)(YY, null, OD, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: YY => "alphaCutOff" in YY,
            get: YY => YY.alphaCutOff,
            set: (YY, rY) => {
              YY.alphaCutOff = rY
            }
          },
          metadata: rY
        }, vA, uA), (0, NY.i)(YY, null, gD, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "useSpecularOverAlpha" in YY,
            get: YY => YY.useSpecularOverAlpha,
            set: (YY, rY) => {
              YY.useSpecularOverAlpha = rY
            }
          },
          metadata: rY
        }, sA, iA), (0, NY.i)(YY, null, aD, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "useMicroSurfaceFromReflectivityMapAlpha" in YY,
            get: YY => YY.useMicroSurfaceFromReflectivityMapAlpha,
            set: (YY, rY) => {
              YY.useMicroSurfaceFromReflectivityMapAlpha = rY
            }
          },
          metadata: rY
        }, yA, QA), (0, NY.i)(YY, null, vD, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "useRoughnessFromMetallicTextureAlpha" in YY,
            get: YY => YY.useRoughnessFromMetallicTextureAlpha,
            set: (YY, rY) => {
              YY.useRoughnessFromMetallicTextureAlpha = rY
            }
          },
          metadata: rY
        }, oA, WA), (0, NY.i)(YY, null, uD, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: YY => "useRoughnessFromMetallicTextureGreen" in YY,
            get: YY => YY.useRoughnessFromMetallicTextureGreen,
            set: (YY, rY) => {
              YY.useRoughnessFromMetallicTextureGreen = rY
            }
          },
          metadata: rY
        }, EA, mA), (0, NY.i)(YY, null, sD, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: YY => "useMetallnessFromMetallicTextureBlue" in YY,
            get: YY => YY.useMetallnessFromMetallicTextureBlue,
            set: (YY, rY) => {
              YY.useMetallnessFromMetallicTextureBlue = rY
            }
          },
          metadata: rY
        }, VA, SA), (0, NY.i)(YY, null, iD, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAmbientOcclusionFromMetallicTextureRed" in YY,
            get: YY => YY.useAmbientOcclusionFromMetallicTextureRed,
            set: (YY, rY) => {
              YY.useAmbientOcclusionFromMetallicTextureRed = rY
            }
          },
          metadata: rY
        }, lA, TA), (0, NY.i)(YY, null, yD, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAmbientInGrayScale" in YY,
            get: YY => YY.useAmbientInGrayScale,
            set: (YY, rY) => {
              YY.useAmbientInGrayScale = rY
            }
          },
          metadata: rY
        }, eA, NA), (0, NY.i)(YY, null, QD, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAutoMicroSurfaceFromReflectivityMap" in YY,
            get: YY => YY.useAutoMicroSurfaceFromReflectivityMap,
            set: (YY, rY) => {
              YY.useAutoMicroSurfaceFromReflectivityMap = rY
            }
          },
          metadata: rY
        }, BA, cA), (0, NY.i)(YY, null, oD, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: YY => "usePhysicalLightFalloff" in YY,
            get: YY => YY.usePhysicalLightFalloff
          },
          metadata: rY
        }, null, wD), (0, NY.i)(YY, null, WD, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: YY => "useGLTFLightFalloff" in YY,
            get: YY => YY.useGLTFLightFalloff
          },
          metadata: rY
        }, null, wD), (0, NY.i)(YY, null, ED, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: YY => "useRadianceOverAlpha" in YY,
            get: YY => YY.useRadianceOverAlpha,
            set: (YY, rY) => {
              YY.useRadianceOverAlpha = rY
            }
          },
          metadata: rY
        }, KA, HA), (0, NY.i)(YY, null, mD, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: YY => "useObjectSpaceNormalMap" in YY,
            get: YY => YY.useObjectSpaceNormalMap,
            set: (YY, rY) => {
              YY.useObjectSpaceNormalMap = rY
            }
          },
          metadata: rY
        }, zA, ZA), (0, NY.i)(YY, null, VD, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: YY => "useParallax" in YY,
            get: YY => YY.useParallax,
            set: (YY, rY) => {
              YY.useParallax = rY
            }
          },
          metadata: rY
        }, CA, fA), (0, NY.i)(YY, null, SD, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: YY => "useParallaxOcclusion" in YY,
            get: YY => YY.useParallaxOcclusion,
            set: (YY, rY) => {
              YY.useParallaxOcclusion = rY
            }
          },
          metadata: rY
        }, jA, hA), (0, NY.i)(YY, null, lD, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: YY => "parallaxScaleBias" in YY,
            get: YY => YY.parallaxScaleBias,
            set: (YY, rY) => {
              YY.parallaxScaleBias = rY
            }
          },
          metadata: rY
        }, dA, JA), (0, NY.i)(YY, null, TD, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: YY => "disableLighting" in YY,
            get: YY => YY.disableLighting,
            set: (YY, rY) => {
              YY.disableLighting = rY
            }
          },
          metadata: rY
        }, MA, wA), (0, NY.i)(YY, null, eD, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: YY => "forceIrradianceInFragment" in YY,
            get: YY => YY.forceIrradianceInFragment,
            set: (YY, rY) => {
              YY.forceIrradianceInFragment = rY
            }
          },
          metadata: rY
        }, bA, XA), (0, NY.i)(YY, null, ND, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: YY => "maxSimultaneousLights" in YY,
            get: YY => YY.maxSimultaneousLights,
            set: (YY, rY) => {
              YY.maxSimultaneousLights = rY
            }
          },
          metadata: rY
        }, qA, pA), (0, NY.i)(YY, null, BD, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: YY => "invertNormalMapX" in YY,
            get: YY => YY.invertNormalMapX,
            set: (YY, rY) => {
              YY.invertNormalMapX = rY
            }
          },
          metadata: rY
        }, kA, GA), (0, NY.i)(YY, null, cD, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: YY => "invertNormalMapY" in YY,
            get: YY => YY.invertNormalMapY,
            set: (YY, rY) => {
              YY.invertNormalMapY = rY
            }
          },
          metadata: rY
        }, xA, nA), (0, NY.i)(YY, null, KD, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: YY => "twoSidedLighting" in YY,
            get: YY => YY.twoSidedLighting,
            set: (YY, rY) => {
              YY.twoSidedLighting = rY
            }
          },
          metadata: rY
        }, PA, UA), (0, NY.i)(YY, null, HD, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: YY => "useAlphaFresnel" in YY,
            get: YY => YY.useAlphaFresnel,
            set: (YY, rY) => {
              YY.useAlphaFresnel = rY
            }
          },
          metadata: rY
        }, LA, tA), (0, NY.i)(YY, null, zD, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: YY => "useLinearAlphaFresnel" in YY,
            get: YY => YY.useLinearAlphaFresnel,
            set: (YY, rY) => {
              YY.useLinearAlphaFresnel = rY
            }
          },
          metadata: rY
        }, YI, rI), (0, NY.i)(YY, null, ZD, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: YY => "environmentBRDFTexture" in YY,
            get: YY => YY.environmentBRDFTexture,
            set: (YY, rY) => {
              YY.environmentBRDFTexture = rY
            }
          },
          metadata: rY
        }, DI, FI), (0, NY.i)(YY, null, CD, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: YY => "forceNormalForward" in YY,
            get: YY => YY.forceNormalForward,
            set: (YY, rY) => {
              YY.forceNormalForward = rY
            }
          },
          metadata: rY
        }, AI, II), (0, NY.i)(YY, null, fD, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: YY => "enableSpecularAntiAliasing" in YY,
            get: YY => YY.enableSpecularAntiAliasing,
            set: (YY, rY) => {
              YY.enableSpecularAntiAliasing = rY
            }
          },
          metadata: rY
        }, RI, OI), (0, NY.i)(YY, null, jD, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: YY => "useHorizonOcclusion" in YY,
            get: YY => YY.useHorizonOcclusion,
            set: (YY, rY) => {
              YY.useHorizonOcclusion = rY
            }
          },
          metadata: rY
        }, gI, aI), (0, NY.i)(YY, null, hD, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: YY => "useRadianceOcclusion" in YY,
            get: YY => YY.useRadianceOcclusion,
            set: (YY, rY) => {
              YY.useRadianceOcclusion = rY
            }
          },
          metadata: rY
        }, vI, uI), (0, NY.i)(YY, null, dD, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: YY => "unlit" in YY,
            get: YY => YY.unlit,
            set: (YY, rY) => {
              YY.unlit = rY
            }
          },
          metadata: rY
        }, sI, iI), (0, NY.i)(YY, null, JD, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: YY => "applyDecalMapAfterDetailMap" in YY,
            get: YY => YY.applyDecalMapAfterDetailMap,
            set: (YY, rY) => {
              YY.applyDecalMapAfterDetailMap = rY
            }
          },
          metadata: rY
        }, yI, QI), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY.PBRMATERIAL_OPAQUE = lr.PBRMATERIAL_OPAQUE, YY.PBRMATERIAL_ALPHATEST = lr.PBRMATERIAL_ALPHATEST, YY.PBRMATERIAL_ALPHABLEND = lr.PBRMATERIAL_ALPHABLEND, YY.PBRMATERIAL_ALPHATESTANDBLEND = lr.PBRMATERIAL_ALPHATESTANDBLEND, YY.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = lr.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, YY
    })();
    const hA = "KHR_materials_diffuse_transmission";

    function dA(YY, rY) {
      const DY = rY.subSurface;
      let FY = null;
      return DY.translucencyIntensityTexture ? FY = DY.translucencyIntensityTexture : DY.thicknessTexture && DY.useMaskFromThicknessTexture && (FY = DY.thicknessTexture), FY && !DY.useGltfStyleTextures ? (cY.d.Warn(`${YY}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${rY.name}`, 1), null) : FY
    }
    class JA {
      constructor(YY) {
        this.name = hA, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof jA && this._isExtensionEnabled(DY)) {
          const rY = dA(YY, DY);
          return rY && FY.push(rY), DY.subSurface.translucencyColorTexture && FY.push(DY.subSurface.translucencyColorTexture), FY
        }
        return FY
      }
      _isExtensionEnabled(YY) {
        if (YY.unlit) return !1;
        const rY = YY.subSurface;
        return !!rY.isTranslucencyEnabled && (!YY.unlit && !rY.useAlbedoToTintTranslucency && rY.useGltfStyleTextures && 1 === rY.volumeIndexOfRefraction && 0 === rY.minimumThickness && 0 === rY.maximumThickness)
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((FY => {
          if (DY instanceof jA && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0;
            const FY = DY.subSurface,
              AY = dA(YY, DY),
              IY = 0 == FY.translucencyIntensity ? void 0 : FY.translucencyIntensity,
              RY = this._exporter._materialExporter.getTextureInfo(AY) ?? void 0,
              OY = !FY.translucencyColor || FY.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : FY.translucencyColor.VDY(),
              gY = this._exporter._materialExporter.getTextureInfo(FY.translucencyColorTexture) ?? void 0,
              aY = {
                diffuseTransmissionFactor: IY,
                diffuseTransmissionTexture: RY,
                diffuseTransmissionColorFactor: OY,
                diffuseTransmissionColorTexture: gY
              };
            (RY || gY) && this._exporter._materialNeedsUVsSet.add(DY), rY.extensions = rY.extensions || {}, rY.extensions[hA] = aY
          }
          FY(rY)
        }))
      }
    }
    let MA = !1;

    function wA() {
      MA || (MA = !0, fF.RegisterExtension(hA, (YY => new JA(YY))))
    }
    wA();
    const bA = "KHR_materials_dispersion";
    class XA {
      constructor() {
        this.name = bA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(YY) {
        if (YY.unlit) return !1;
        const rY = YY.subSurface;
        return !(!rY.isRefractionEnabled && !rY.isDispersionEnabled)
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          if (DY instanceof jA && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0;
            const YY = {
              dispersion: DY.subSurface.dispersion
            };
            rY.extensions = rY.extensions || {}, rY.extensions[bA] = YY
          }
          YY(rY)
        }))
      }
    }
    let qA = !1;

    function pA() {
      qA || (qA = !0, fF.RegisterExtension(bA, (() => new XA)))
    }
    pA();
    const kA = "KHR_materials_emissive_strength";
    class GA {
      constructor() {
        this.name = kA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(YY, rY, DY) {
        return await new Promise((YY => {
          if (!(DY instanceof jA)) return YY(rY);
          const FY = DY.emissiveColor.scale(DY.emissiveIntensity),
            AY = Math.max(...FY.VDY());
          if (AY > 1) {
            rY.emissiveFactor = FY.scale(1 / AY).VDY(), this._wasUsed = !0;
            const YY = {
              emissiveStrength: AY
            };
            rY.extensions || (rY.extensions = {}), rY.extensions[kA] = YY
          } else rY.emissiveFactor = FY.VDY();
          return YY(rY)
        }))
      }
    }
    let xA = !1;

    function nA() {
      xA || (xA = !0, fF.RegisterExtension(kA, (() => new GA)))
    }
    nA();
    const PA = "KHR_materials_ior";
    class UA {
      constructor() {
        this.name = PA, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(YY) {
        return !YY.unlit && (YY instanceof Lr ? 1.5 != YY.specularIor : YY instanceof jA && (void 0 != YY.indexOfRefraction && 1.5 != YY.indexOfRefraction))
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          if (DY instanceof jA && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0;
            const YY = {
              ior: DY.indexOfRefraction
            };
            rY.extensions = rY.extensions || {}, rY.extensions[PA] = YY
          } else if (DY instanceof Lr && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0;
            const YY = {
              ior: DY.specularIor
            };
            rY.extensions = rY.extensions || {}, rY.extensions[PA] = YY
          }
          YY(rY)
        }))
      }
    }
    let LA = !1;

    function tA() {
      LA || (LA = !0, fF.RegisterExtension(PA, (() => new UA)))
    }
    tA();
    const YI = "KHR_materials_iridescence";
    class rI {
      constructor(YY) {
        this.name = YI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof lr) {
          if (DY.iridescence.isEnabled) return DY.iridescence.texture && FY.push(DY.iridescence.texture), DY.iridescence.thicknessTexture && DY.iridescence.thicknessTexture !== DY.iridescence.texture && FY.push(DY.iridescence.thicknessTexture), FY
        } else if (DY instanceof Lr && DY.thinFilmWeight > 0) return DY.thinFilmWeightTexture && FY.push(DY.thinFilmWeightTexture), DY.thinFilmThicknessTexture && DY.thinFilmThicknessTexture !== DY.thinFilmWeightTexture && FY.push(DY.thinFilmThicknessTexture), FY;
        return []
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          if (DY instanceof lr) {
            if (!DY.iridescence.isEnabled) return void YY(rY);
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            const FY = this._exporter._materialExporter.getTextureInfo(DY.iridescence.texture),
              AY = this._exporter._materialExporter.getTextureInfo(DY.iridescence.thicknessTexture),
              IY = {
                iridescenceFactor: DY.iridescence.intensity,
                iridescenceIor: DY.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: DY.iridescence.minimumThickness,
                iridescenceThicknessMaximum: DY.iridescence.maximumThickness,
                iridescenceTexture: FY ?? void 0,
                iridescenceThicknessTexture: AY ?? void 0
              };
            null === IY.iridescenceTexture && null === IY.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[YI] = IY
          } else if (DY instanceof Lr) {
            if (DY.thinFilmWeight <= 0) return void YY(rY);
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            const FY = this._exporter._materialExporter.getTextureInfo(DY.thinFilmWeightTexture),
              AY = this._exporter._materialExporter.getTextureInfo(DY.thinFilmThicknessTexture),
              IY = {
                iridescenceFactor: DY.thinFilmWeight,
                iridescenceIor: DY.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * DY.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * DY.thinFilmThickness,
                iridescenceTexture: FY ?? void 0,
                iridescenceThicknessTexture: AY ?? void 0
              };
            null === IY.iridescenceTexture && null === IY.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[YI] = IY
          }
          YY(rY)
        }))
      }
    }
    let DI = !1;

    function FI() {
      DI || (DI = !0, fF.RegisterExtension(YI, (YY => new rI(YY))))
    }
    FI();
    const AI = "KHR_materials_sheen";
    class II {
      constructor(YY) {
        this.name = AI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        return DY instanceof jA && DY.sheen.isEnabled && DY.sheen.texture ? [DY.sheen.texture] : []
      }
      async postExportMaterialAsync(YY, rY, DY) {
        return await new Promise((YY => {
          if (DY instanceof jA) {
            if (!DY.sheen.isEnabled) return void YY(rY);
            this._wasUsed = !0, null == rY.extensions && (rY.extensions = {});
            const FY = {
              sheenColorFactor: DY.sheen.color.VDY(),
              sheenRoughnessFactor: DY.sheen.roughness ?? 0
            };
            null === FY.sheenColorTexture && null === FY.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(DY), DY.sheen.texture && (FY.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(DY.sheen.texture) ?? void 0), DY.sheen.textureRoughness && !DY.sheen.useRoughnessFromMainTexture ? FY.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(DY.sheen.textureRoughness) ?? void 0 : DY.sheen.texture && DY.sheen.useRoughnessFromMainTexture && (FY.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(DY.sheen.texture) ?? void 0), rY.extensions[AI] = FY
          }
          YY(rY)
        }))
      }
    }
    let RI = !1;

    function OI() {
      RI || (RI = !0, fF.RegisterExtension(AI, (YY => new II(YY))))
    }
    OI();
    const gI = "KHR_materials_fuzz";

    function aI(YY, rY) {
      const DY = new HY.i(rY.name, rY.hT());
      return DY._texture = YY, DY.coordinatesIndex = rY.coordinatesIndex, rY instanceof HY.i && (DY.uOffset = rY.uOffset, DY.vOffset = rY.vOffset, DY.uScale = rY.uScale, DY.vScale = rY.vScale, DY.wAng = rY.wAng), DY.wrapU = rY.wrapU, DY.wrapV = rY.wrapV, DY
    }
    class vI {
      constructor(YY) {
        this.name = gI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = YY
      }
      dispose() {
        for (const YY of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[YY].dispose()
        }
        this._mergedTexturesMap = {};
        for (const YY of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[YY].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        if (DY instanceof Lr) {
          const YY = [];
          if (DY.fuzzWeight > 0) {
            DY.fuzzWeightTexture && YY.push(DY.fuzzWeightTexture);
            let rY = !1;
            if (DY.fuzzRoughnessTexture && (DY._useFuzzRoughnessFromTextureAlpha ? YY.push(DY.fuzzRoughnessTexture) : rY = !0), DY.fuzzColorTexture && !rY && YY.push(DY.fuzzColorTexture), rY) {
              const rY = function(YY) {
                const rY = YY.fuzzColorTexture,
                  DY = rY && rY.getInternalTexture() ? rY.getInternalTexture().uniqueId : "NoFuzzColor",
                  FY = YY.fuzzRoughnessTexture;
                return `FuzzColor_${DY}_FuzzRoughness_${FY&&FY.getInternalTexture()?FY.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(DY);
              if (!this._cachedInternalTexturesMap[rY]) {
                const YY = await async function(YY) {
                  const rY = YY.hT(),
                    DY = YY.fuzzColorTexture,
                    FY = YY.fuzzRoughnessTexture;
                  return DY || FY ? (await RD("FuzzTexture", aD(DY ? OD(DY, 0) : gD(1), DY ? OD(DY, 1) : gD(1), DY ? OD(DY, 2) : gD(1), FY ? OD(FY, YY._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : gD(1)), rY)).getInternalTexture() : null
                }(DY);
                YY && (this._cachedInternalTexturesMap[rY] = YY)
              }
              this._cachedInternalTexturesMap[rY] && (DY.fuzzColorTexture && (this._mergedTexturesMap[DY.fuzzColorTexture.uniqueId] = aI(this._cachedInternalTexturesMap[rY], DY.fuzzColorTexture), YY.push(this._mergedTexturesMap[DY.fuzzColorTexture.uniqueId])), DY.fuzzRoughnessTexture && (this._mergedTexturesMap[DY.fuzzRoughnessTexture.uniqueId] = aI(this._cachedInternalTexturesMap[rY], DY.fuzzRoughnessTexture), YY.push(this._mergedTexturesMap[DY.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return YY
        }
        return []
      }
      async postExportMaterialAsync(YY, rY, DY) {
        return await new Promise((YY => {
          if (DY instanceof Lr) {
            if (0 == DY.fuzzWeight) return void YY(rY);
            this._wasUsed = !0, null == rY.extensions && (rY.extensions = {});
            const FY = {
              fuzzFactor: DY.fuzzWeight,
              fuzzColorFactor: DY.fuzzColor.VDY(),
              fuzzRoughnessFactor: DY.fuzzRoughness
            };
            let AY, IY;
            DY.fuzzWeightTexture && (FY.fuzzTexture = this._exporter._materialExporter.getTextureInfo(DY.fuzzWeightTexture) ?? void 0), DY.fuzzColorTexture && (AY = this._mergedTexturesMap[DY.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[DY.fuzzColorTexture.uniqueId] : DY.fuzzColorTexture, FY.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(AY) ?? void 0), DY.fuzzRoughnessTexture && (IY = this._mergedTexturesMap[DY.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[DY.fuzzRoughnessTexture.uniqueId] : DY.fuzzRoughnessTexture, FY.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(IY) ?? void 0), null === FY.fuzzColorTexture && null === FY.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[gI] = FY
          }
          YY(rY)
        }))
      }
    }
    let uI = !1;

    function sI() {
      uI || (uI = !0, fF.RegisterExtension(gI, (YY => new vI(YY))))
    }
    sI();
    const iI = "KHR_materials_specular";
    class yI {
      constructor(YY) {
        this.name = iI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        return DY instanceof jA && this._isExtensionEnabled(DY) ? (DY.metallicReflectanceTexture && FY.push(DY.metallicReflectanceTexture), DY.reflectanceTexture && FY.push(DY.reflectanceTexture), FY) : FY
      }
      _isExtensionEnabled(YY) {
        return !YY.unlit && (void 0 != YY.metallicF0Factor && 1 != YY.metallicF0Factor || void 0 != YY.metallicReflectanceColor && !YY.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(YY))
      }
      _hasTexturesExtension(YY) {
        return null != YY.metallicReflectanceTexture || null != YY.reflectanceTexture
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          var FY;
          if (DY instanceof jA && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0, rY.extensions = rY.extensions || {};
            const YY = this._exporter._materialExporter.getTextureInfo(DY.metallicReflectanceTexture) ?? void 0,
              FY = this._exporter._materialExporter.getTextureInfo(DY.reflectanceTexture) ?? void 0,
              AY = {
                specularFactor: 1 == DY.metallicF0Factor ? void 0 : DY.metallicF0Factor,
                specularTexture: YY,
                specularColorFactor: DY.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : DY.metallicReflectanceColor.VDY(),
                specularColorTexture: FY
              };
            this._hasTexturesExtension(DY) && this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[iI] = AY
          } else if (DY instanceof Lr) {
            rY.extensions = rY.extensions || {};
            const AY = this._exporter._materialExporter.getTextureInfo(DY.specularWeightTexture) ?? void 0,
              IY = this._exporter._materialExporter.getTextureInfo(DY.specularColorTexture) ?? void 0,
              RY = 1 == DY.specularWeight ? void 0 : DY.specularWeight,
              OY = DY.specularColor.equalsFloats(1, 1, 1) ? void 0 : DY.specularColor.VDY();
            if (!IY && !AY && void 0 === RY && void 0 === OY) return YY(rY);
            this._wasUsed = !0;
            const gY = {
                specularEdgeColorEnabled: !0
              },
              aY = {
                specularFactor: RY,
                specularTexture: AY,
                specularColorFactor: OY,
                specularColorTexture: IY,
                extensions: {}
              };
            aY.extensions.EXT_materials_specular_edge_color = gY, (FY = this._exporter._glTF).extensionsUsed || (FY.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (AY || IY) && this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[iI] = aY
          }
          YY(rY)
        }))
      }
    }
    let QI = !1;

    function oI() {
      QI || (QI = !0, fF.RegisterExtension(iI, (YY => new yI(YY))))
    }
    oI();
    const WI = "KHR_materials_transmission";
    class EI {
      constructor(YY) {
        this.name = WI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof jA) {
          if (this._isExtensionEnabled(DY)) return DY.subSurface.refractionIntensityTexture && DY.subSurface.useGltfStyleTextures && FY.push(DY.subSurface.refractionIntensityTexture), FY
        } else DY instanceof Lr && (DY.transmissionWeight > 0 && DY.transmissionWeightTexture && (FY.push(DY.transmissionWeightTexture), DY.transmissionColorTexture && FY.push(DY.transmissionColorTexture)), DY.subsurfaceWeight > 0 && DY.subsurfaceWeightTexture && FY.push(DY.subsurfaceWeightTexture));
        return FY
      }
      _isExtensionEnabled(YY) {
        if (YY instanceof Lr && !YY.unlit) return YY.transmissionWeight > 0 || YY.subsurfaceWeight > 0;
        if (YY instanceof jA && !YY.unlit) {
          const rY = YY.subSurface;
          return rY.isRefractionEnabled && void 0 != rY.refractionIntensity && 0 != rY.refractionIntensity || null != rY.refractionIntensityTexture && rY.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(YY, rY, DY) {
        if (!this._isExtensionEnabled(DY)) return rY;
        if (DY instanceof jA) {
          this._wasUsed = !0;
          const FY = DY.subSurface,
            AY = {
              transmissionFactor: 0 === FY.refractionIntensity ? void 0 : FY.refractionIntensity
            };
          if (FY.refractionIntensityTexture)
            if (FY.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(DY);
              const YY = this._exporter._materialExporter.getTextureInfo(FY.refractionIntensityTexture);
              YY && (AY.transmissionTexture = YY)
            } else cY.d.Warn(`${YY}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          rY.extensions || (rY.extensions = {}), rY.extensions[WI] = AY
        } else if (DY instanceof Lr) {
          this._wasUsed = !0;
          const YY = {
            transmissionFactor: (1 - DY.transmissionWeight) * DY.subsurfaceWeight + DY.transmissionWeight
          };
          if (DY.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(DY);
            const rY = this._exporter._materialExporter.getTextureInfo(DY.transmissionWeightTexture);
            rY && (YY.transmissionTexture = rY)
          } else if (DY.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(DY);
            const rY = this._exporter._materialExporter.getTextureInfo(DY.subsurfaceWeightTexture);
            rY && (YY.transmissionTexture = rY)
          }
          if (0 == DY.transmissionDepth && (!DY.transmissionColor.equals(kY.c.White()) || DY.transmissionColorTexture) && rY.pbrMetallicRoughness && (rY.pbrMetallicRoughness.baseColorFactor || (rY.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), rY.pbrMetallicRoughness.baseColorFactor[0] *= DY.transmissionColor.r, rY.pbrMetallicRoughness.baseColorFactor[1] *= DY.transmissionColor.g, rY.pbrMetallicRoughness.baseColorFactor[2] *= DY.transmissionColor.b, DY.transmissionColorTexture && !rY.pbrMetallicRoughness.baseColorTexture)) {
            const YY = this._exporter._materialExporter.getTextureInfo(DY.transmissionColorTexture);
            YY && (rY.pbrMetallicRoughness.baseColorTexture = YY, this._exporter._materialNeedsUVsSet.add(DY))
          }
          rY.extensions || (rY.extensions = {}), rY.extensions[WI] = YY
        }
        return rY
      }
    }
    let mI = !1;

    function VI() {
      mI || (mI = !0, fF.RegisterExtension(WI, (YY => new EI(YY))))
    }
    VI();
    var SI = DY(39393);
    const lI = "KHR_materials_unlit";
    class TI {
      constructor() {
        this.name = lI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          let FY = !1;
          DY instanceof jA ? FY = DY.unlit : DY instanceof SI.g && (FY = DY.disableLighting), FY && (this._wasUsed = !0, null == rY.extensions && (rY.extensions = {}), rY.extensions[lI] = {}), YY(rY)
        }))
      }
    }
    let eI = !1;

    function NI() {
      eI || (eI = !0, fF.RegisterExtension(lI, (() => new TI)))
    }
    NI();
    const BI = "KHR_materials_volume";
    class cI {
      constructor(YY) {
        this.name = BI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof jA) {
          if (this._isExtensionEnabled(DY)) return DY.subSurface.thicknessTexture && FY.push(DY.subSurface.thicknessTexture), FY
        } else DY instanceof Lr && (DY.transmissionWeight > 0 || DY.subsurfaceWeight > 0) && DY.geometryThicknessTexture && FY.push(DY.geometryThicknessTexture);
        return FY
      }
      _isExtensionEnabled(YY) {
        if (YY.unlit) return !1;
        const rY = YY.subSurface;
        return !(!rY.isRefractionEnabled && !rY.isTranslucencyEnabled) && (void 0 != rY.maximumThickness && 0 != rY.maximumThickness || void 0 != rY.tintColorAtDistance && rY.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != rY.tintColor && rY.tintColor != kY.c.White() || this._hasTexturesExtension(YY))
      }
      _hasTexturesExtension(YY) {
        return null != YY.subSurface.thicknessTexture
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          if (DY instanceof jA && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0;
            const YY = DY.subSurface,
              FY = {
                thicknessFactor: 0 == YY.maximumThickness ? void 0 : YY.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(YY.thicknessTexture) ?? void 0,
                attenuationDistance: YY.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : YY.tintColorAtDistance,
                attenuationColor: YY.tintColor.equalsFloats(1, 1, 1) ? void 0 : YY.tintColor.VDY()
              };
            this._hasTexturesExtension(DY) && this._exporter._materialNeedsUVsSet.add(DY), rY.extensions = rY.extensions || {}, rY.extensions[BI] = FY
          } else if (DY instanceof Lr) {
            const YY = DY.transmissionWeight > 0 && !DY.geometryThinWalled,
              FY = DY.subsurfaceWeight > 0 && !DY.geometryThinWalled;
            if (YY || FY) {
              this._wasUsed = !0;
              const AY = DY.geometryThickness,
                IY = this._exporter._materialExporter.getTextureInfo(DY.geometryThicknessTexture) ?? void 0;
              let RY;
              IY && this._exporter._materialNeedsUVsSet.add(DY);
              const OY = kY.c.White().VDY();
              if (YY && DY.transmissionDepth > 0) {
                const YY = 1 / DY.transmissionDepth;
                let rY = new JY.r(-Math.log(DY.transmissionColor.r) * YY, -Math.log(DY.transmissionColor.g) * YY, -Math.log(DY.transmissionColor.b) * YY);
                const FY = new JY.r(DY.transmissionScatter.r * YY, DY.transmissionScatter.g * YY, DY.transmissionScatter.b * YY),
                  AY = rY.subtract(FY),
                  IY = Math.min(AY.x, AY.y, AY.z);
                IY < 0 && (AY.x = AY.x - IY, AY.y = AY.y - IY, AY.z = AY.z - IY), rY = AY.add(FY);
                RY = 1 / Math.max(rY.x, rY.y, rY.z), OY[0] = Math.exp(-rY.x * RY), OY[1] = Math.exp(-rY.y * RY), OY[2] = Math.exp(-rY.z * RY)
              } else RY = Number.MAX_VALUE, OY[0] = 1, OY[1] = 1, OY[2] = 1;
              let gY = 1;
              const aY = kY.c.White().VDY();
              if (FY) {
                const YY = DY.subsurfaceRadius,
                  rY = DY.subsurfaceRadiusScale,
                  FY = new JY.r(rY.r, rY.g, rY.b).multiplyByFloats(YY, YY, YY),
                  AY = new JY.r(1 / Math.max(FY.x, 1e-6), 1 / Math.max(FY.y, 1e-6), 1 / Math.max(FY.z, 1e-6));
                gY = 1 / Math.max(AY.x, AY.y, AY.z), aY[0] = Math.exp(-AY.x * gY), aY[1] = Math.exp(-AY.y * gY), aY[2] = Math.exp(-AY.z * gY)
              }
              const vY = (1 - DY.transmissionWeight) * DY.subsurfaceWeight,
                uY = vY + DY.transmissionWeight,
                sY = 1 / Math.max(uY, 1e-6),
                iY = DY.transmissionWeight * sY,
                yY = vY * sY,
                QY = OY.map(((YY, rY) => YY * iY + aY[rY] * yY)),
                oY = {
                  thicknessFactor: AY,
                  thicknessTexture: IY,
                  attenuationDistance: RY * iY + gY * yY,
                  attenuationColor: QY
                };
              rY.extensions = rY.extensions || {}, rY.extensions[BI] = oY
            }
          }
          YY(rY)
        }))
      }
    }
    let KI = !1;

    function HI() {
      KI || (KI = !0, fF.RegisterExtension(BI, (YY => new cI(YY))))
    }
    HI();
    const zI = "KHR_materials_volume_scatter";
    class ZI {
      constructor(YY) {
        this.name = zI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        return DY instanceof Lr && (DY.transmissionWeight > 0 && DY.transmissionScatterTexture && FY.push(DY.transmissionScatterTexture), DY.subsurfaceWeight > 0 && DY.subsurfaceColorTexture && FY.push(DY.subsurfaceColorTexture)), FY
      }
      _isExtensionEnabled(YY) {
        if (YY.unlit) return !1;
        const rY = YY.transmissionWeight > 0 && !YY.geometryThinWalled && YY.transmissionDepth > 0 && !YY.transmissionScatter.equals(kY.c.Black()),
          DY = YY.subsurfaceWeight > 0 && !YY.geometryThinWalled;
        return !(!rY && !DY)
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          if (DY instanceof Lr && this._isExtensionEnabled(DY)) {
            this._wasUsed = !0;
            let YY = JY.r.Zero(),
              FY = 0;
            if (DY.transmissionWeight > 0) {
              YY = function(YY) {
                const rY = new JY.r(Math.sqrt(1 - YY.x), Math.sqrt(1 - YY.y), Math.sqrt(1 - YY.z)),
                  DY = new JY.r(1, 1, 1),
                  FY = DY.subtract(rY),
                  AY = DY.subtract(new JY.r(.139, .139, .139).multiplyInPlace(rY)),
                  IY = DY.add(new JY.r(1.17, 1.17, 1.17).multiplyInPlace(rY));
                return FY.multiplyInPlace(AY).divideInPlace(IY)
              }(new JY.r(DY.transmissionScatter.r, DY.transmissionScatter.g, DY.transmissionScatter.b)), FY = DY.transmissionScatterAnisotropy
            }
            const AY = JY.r.Zero();
            let IY = 0;
            DY.subsurfaceWeight > 0 && (AY.set(DY.subsurfaceColor.r, DY.subsurfaceColor.g, DY.subsurfaceColor.b), IY = DY.subsurfaceScatterAnisotropy);
            const RY = (1 - DY.transmissionWeight) * DY.subsurfaceWeight,
              OY = RY + DY.transmissionWeight,
              gY = 1 / Math.max(OY, 1e-6),
              aY = DY.transmissionWeight * gY,
              vY = RY * gY,
              uY = {
                multiscatterColorFactor: YY.multiplyByFloats(aY, aY, aY).addInPlace(AY.multiplyByFloats(vY, vY, vY)).VDY(),
                scatterAnisotropy: FY * aY + IY * vY
              };
            if (DY.subsurfaceWeight > 0 && DY.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(DY);
              const YY = this._exporter._materialExporter.getTextureInfo(DY.subsurfaceColorTexture);
              YY && (uY.multiscatterColorTexture = YY)
            } else if (DY.transmissionWeight > 0 && DY.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(DY);
              const YY = this._exporter._materialExporter.getTextureInfo(DY.transmissionScatterTexture);
              YY && (uY.multiscatterColorTexture = YY)
            }
            rY.extensions = rY.extensions || {}, rY.extensions[zI] = uY
          }
          YY(rY)
        }))
      }
    }
    let CI = !1;

    function fI() {
      CI || (CI = !0, fF.RegisterExtension(zI, (YY => new ZI(YY)), 101))
    }
    fI();
    const jI = "KHR_materials_diffuse_roughness";
    class hI {
      constructor(YY) {
        this.name = jI, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(YY, rY, DY) {
        const FY = [];
        if (DY instanceof lr) {
          if (DY._baseDiffuseRoughness) return DY._baseDiffuseRoughnessTexture && FY.push(DY._baseDiffuseRoughnessTexture), FY
        } else if (DY instanceof Lr && DY.baseDiffuseRoughness) return DY.baseDiffuseRoughnessTexture && FY.push(DY.baseDiffuseRoughnessTexture), FY;
        return []
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          let FY = null,
            AY = null;
          if (DY instanceof lr ? (FY = DY._baseDiffuseRoughness, AY = DY._baseDiffuseRoughnessTexture) : DY instanceof Lr && (FY = DY.baseDiffuseRoughness, AY = DY.baseDiffuseRoughnessTexture), !FY) return void YY(rY);
          this._wasUsed = !0, rY.extensions = rY.extensions || {};
          const IY = {
            diffuseRoughnessFactor: FY,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(AY) ?? void 0
          };
          null !== IY.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(DY), rY.extensions[jI] = IY, YY(rY)
        }))
      }
    }
    let dI = !1;

    function JI() {
      dI || (dI = !0, fF.RegisterExtension(jI, (YY => new hI(YY))))
    }
    JI();
    const MI = "KHR_materials_openpbr";
    class wI {
      constructor() {
        this.name = MI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(YY, rY, DY) {
        return new Promise((YY => {
          DY instanceof Lr && (this._wasUsed = !0, rY.extensions = rY.extensions || {}, rY.extensions[MI] = {}), YY(rY)
        }))
      }
    }
    let bI = !1;

    function XI() {
      bI || (bI = !0, fF.RegisterExtension(MI, (() => new wI)))
    }
    XI();
    const qI = "KHR_texture_transform";
    class pI {
      constructor() {
        this.name = qI, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(YY, rY, DY) {
        if (DY.hT() || er.i.Warn(`${YY}: "scene" is not defined for Babylon texture ${DY.name}!`), (0 !== DY.uAng || 0 !== DY.vAng) && (er.i.Warn(`${YY}: Texture ${DY.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== DY.uRotationCenter || 0 !== DY.vRotationCenter)) return;
        const FY = {};
        let AY = !1;
        if (0 === DY.uOffset && 0 === DY.vOffset || (FY.offset = [DY.uOffset, DY.vOffset], AY = !0), 1 === DY.uScale && 1 === DY.vScale || (FY.scale = [DY.uScale, DY.vScale], AY = !0), 0 !== DY.wAng) {
          if (0 !== DY.uRotationCenter || 0 !== DY.vRotationCenter) {
            if (DY.homogeneousRotationInUVTransform && DY.uScale !== DY.vScale) return void er.i.Warn(`${YY}: Texture ${DY.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${qI}.`);
            er.i.Warn(`${YY}: Texture ${DY.name} with non-origin rotation center will be exported using an adjusted offset with ${qI}.`), FY.offset = function(YY) {
              const {
                uOffset: rY,
                vOffset: DY,
                uRotationCenter: FY,
                vRotationCenter: AY,
                uScale: IY,
                vScale: RY,
                wAng: OY
              } = YY, gY = Math.cos(OY), aY = Math.sin(OY), vY = FY * IY, uY = AY * RY;
              return [rY + (vY * (1 - gY) + uY * aY), DY + (uY * (1 - gY) - vY * aY)]
            }(DY)
          }
          FY.rotation = -DY.wAng, AY = !0
        }
        0 !== DY.coordinatesIndex && (FY.texCoord = DY.coordinatesIndex, AY = !0), AY && (this._wasUsed = !0, rY.extensions || (rY.extensions = {}), rY.extensions[qI] = FY)
      }
    }
    let kI = !1;

    function GI() {
      kI || (kI = !0, fF.RegisterExtension(qI, (() => new pI)))
    }
    GI();
    var xI = DY(39160);
    const nI = "KHR_texture_basisu";
    class PI {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(YY) {
        this.name = nI, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      postExportTexture(YY, rY) {
        const DY = this._exporter._textures[rY.index],
          FY = DY.source;
        if (void 0 === FY) return;
        const AY = this._exporter._images[FY];
        "image/ktx2" === (AY.mimeType || (0, xI.e)(AY.uri)) && (DY.source = void 0, DY.extensions || (DY.extensions = {}), DY.extensions[nI] = {
          source: FY
        }, this._wasUsed = !0)
      }
    }
    let UI = !1;

    function LI() {
      UI || (UI = !0, fF.RegisterExtension(nI, (YY => new PI(YY))))
    }
    LI();
    const tI = "EXT_texture_webp";
    class YR {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(YY) {
        this.name = tI, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      postExportTexture(YY, rY) {
        const DY = this._exporter._textures[rY.index],
          FY = DY.source;
        if (void 0 === FY) return;
        const AY = this._exporter._images[FY];
        "image/webp" === (AY.mimeType || (0, xI.e)(AY.uri)) && (DY.source = void 0, DY.extensions || (DY.extensions = {}), DY.extensions[tI] = {
          source: FY
        }, this._wasUsed = !0)
      }
    }
    let rR = !1;

    function DR() {
      rR || (rR = !0, fF.RegisterExtension(tI, (YY => new YR(YY))))
    }
    DR();
    const FR = "EXT_texture_avif";
    class AR {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(YY) {
        this.name = FR, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = YY
      }
      dispose() {}
      postExportTexture(YY, rY) {
        const DY = this._exporter._textures[rY.index],
          FY = DY.source;
        if (void 0 === FY) return;
        const AY = this._exporter._images[FY];
        "image/avif" === (AY.mimeType || (0, xI.e)(AY.uri)) && (DY.source = void 0, DY.extensions || (DY.extensions = {}), DY.extensions[FR] = {
          source: FY
        }, this._wasUsed = !0)
      }
    }
    let IR = !1;

    function RR() {
      IR || (IR = !0, fF.RegisterExtension(FR, (YY => new AR(YY))))
    }
    RR();
    class OR {
      static CreateSTL(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          IY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          OY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gY = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const aY = function(YY, rY, DY) {
            const AY = [3 * YY[DY], 3 * YY[DY + 1], 3 * YY[DY + 2]],
              IY = [new FY.xy(rY[AY[0]], rY[AY[0] + 2], rY[AY[0] + 1]), new FY.xy(rY[AY[1]], rY[AY[1] + 2], rY[AY[1] + 1]), new FY.xy(rY[AY[2]], rY[AY[2] + 2], rY[AY[2] + 1])],
              RY = IY[0].subtract(IY[1]),
              OY = IY[2].subtract(IY[1]);
            return {
              v: IY,
              n: FY.xy.Cross(OY, RY).normalize()
            }
          },
          uY = function(YY, rY, DY, FY) {
            return rY = sY(YY, rY, DY.x, FY), rY = sY(YY, rY, DY.y, FY), sY(YY, rY, DY.z, FY)
          },
          sY = function(YY, rY, DY, FY) {
            return YY.setFloat32(rY, DY, FY), rY + 4
          },
          yY = function(YY) {
            if (OY) {
              let rY = YY;
              YY instanceof iY.c && (rY = YY.vFY);
              const DY = rY.getVerticesData(vY.i.PositionKind, !0, !0);
              if (!DY) return [];
              const AY = FY.xy.Zero();
              let IY;
              for (IY = 0; IY < DY.length; IY += 3) FY.xy.TransformCoordinatesFromFloatsToRef(DY[IY], DY[IY + 1], DY[IY + 2], YY.computeWorldMatrix(!0), AY).toArray(DY, IY);
              return DY
            }
            return YY.getVerticesData(vY.i.PositionKind) || []
          };
        OY && (RY = !0);
        let QY = "",
          oY = 0,
          WY = 0;
        if (AY) {
          for (let DY = 0; DY < YY.length; DY++) {
            const rY = YY[DY].XIY();
            oY += rY ? rY.length / 3 : 0
          }
          const rY = new ArrayBuffer(84 + 50 * oY);
          QY = new DataView(rY), WY += 80, QY.setUint32(WY, oY, IY), WY += 4
        } else gY || (QY = "solid stlmesh\r\n");
        for (let FY = 0; FY < YY.length; FY++) {
          const rY = YY[FY];
          !AY && gY && (QY += "solid " + rY.name + "\r\n"), !RY && rY instanceof aF.d && rY.bakeCurrentTransformIntoVertices();
          const DY = yY(rY),
            OY = rY.XIY() || [];
          for (let YY = 0; YY < OY.length; YY += 3) {
            const rY = aY(OY, DY, YY);
            AY ? (WY = uY(QY, WY, rY.n, IY), WY = uY(QY, WY, rY.v[0], IY), WY = uY(QY, WY, rY.v[1], IY), WY = uY(QY, WY, rY.v[2], IY), WY += 2) : (QY += "\tfacet normal " + rY.n.x + " " + rY.n.y + " " + rY.n.z + "\r\n", QY += "\t\touter loop\r\n", QY += "\t\t\tvertex " + rY.v[0].x + " " + rY.v[0].y + " " + rY.v[0].z + "\r\n", QY += "\t\t\tvertex " + rY.v[1].x + " " + rY.v[1].y + " " + rY.v[1].z + "\r\n", QY += "\t\t\tvertex " + rY.v[2].x + " " + rY.v[2].y + " " + rY.v[2].z + "\r\n", QY += "\t\tendloop\r\n", QY += "\tendfacet\r\n")
          }!AY && gY && (QY += "endsolid " + name + "\r\n")
        }
        if (AY || gY || (QY += "endsolid stlmesh"), rY) {
          const YY = document.createElement("a"),
            rY = new Blob([QY], {
              type: "application/octet-stream"
            });
          YY.href = window.URL.createObjectURL(rY), YY.download = DY + ".stl", YY.click()
        }
        return QY
      }
    }

    function gR(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const AY = [];
      for (let IY = 0; IY < YY.length / DY; IY++) {
        const RY = YY[IY * DY] * (FY ? -1 : 1),
          OY = YY[IY * DY + 1],
          gY = YY[IY * DY + 2];
        AY.push(`(${RY.toPrecision(rY.precision)}, ${OY.toPrecision(rY.precision)}, ${gY.toPrecision(rY.precision)})`)
      }
      return AY.join(", ")
    }

    function aR(YY, rY) {
      const DY = [];
      for (let FY = 0; FY < YY.length / 2; FY++) {
        const AY = YY[2 * FY],
          IY = YY[2 * FY + 1];
        DY.push(`(${AY.toPrecision(rY.precision)}, ${(1-IY).toPrecision(rY.precision)})`)
      }
      return DY.join(", ")
    }

    function vR(YY, rY, DY, FY) {
      const AY = YY.getVerticesData(vY.i.PositionKind),
        IY = YY.getVerticesData(vY.i.NormalKind);
      if (AY && IY) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${DY}"\n\t\tint[] faceVertexCounts = [${function(YY){const rY=YY.XIY()?.length?YY.getTotalIndices():YY.getTotalVertices();return Array(rY/3).fill(3).join(", ")}(YY)}]\n\t\tint[] faceVertexIndices = [${function(YY){const rY=YY.XIY(),DY=rY?.length??YY.getTotalVertices(),FY=[];if(null!==rY)for(let AY=0;AY<DY;AY++)FY.push(rY[AY]);else for(let AY=0;AY<DY;AY++)FY.push(AY);return FY.join(", ")}(YY)}]\n\t\tnormal3f[] normals = [${gR(IY,rY,void 0,FY)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${gR(AY,rY,void 0,FY)}]\n        ${function(YY,rY){let DY="";for(let AY=0;AY<4;AY++){const FY=AY>0?AY:"",IY=YY.getVerticesData(vY.i.UVKind+(FY?FY+1:""));IY&&(DY+=`\n\t\ttexCoord2f[] primvars:st${FY} = [${aR(IY,rY)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const FY=YY.getVerticesData(vY.i.ColorKind);return FY&&(DY+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        gR(FY, rY, FY.length / YY.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),DY}(YY,rY)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function uR(YY, rY, DY, FY) {
      return `\n        def "Geometry"\n        {\n        ${vR(YY,rY,DY,FY)}\n        }\n        `
    }

    function sR(YY) {
      let rY = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return rY += YY, fflate.strToU8(rY)
    }

    function iR(YY) {
      const rY = YY.m;
      return `( ${yR(rY,0)}, ${yR(rY,4)}, ${yR(rY,8)}, ${yR(rY,12)} )`
    }

    function yR(YY, rY) {
      return `(${YY[rY+0]}, ${YY[rY+1]}, ${YY[rY+2]}, ${YY[rY+3]})`
    }

    function QR(YY, rY) {
      const DY = "Object_" + YY.uniqueId,
        FY = iR(rY);
      return `def Xform "${DY}" (\n\tprepend references = @./geometries/Geometry_${YY.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${FY}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${YY.material.uniqueId}>\n}\n\n`
    }

    function oR(YY) {
      switch (YY) {
        case TY.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case TY.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case TY.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function WR(YY) {
      return `(${YY.x}, ${YY.y})`
    }

    function ER(YY) {
      return `(${YY.r}, ${YY.g}, ${YY.b})`
    }

    function mR(YY) {
      return "image/jpeg" === YY || "image/png" === YY
    }

    function VR(YY, rY, DY, AY, IY, RY) {
      const OY = YY.getInternalTexture().uniqueId + "_" + YY.invertY,
        aY = YY.mimeType || (0, gY.c)(YY.getInternalTexture()?.url ?? ""),
        vY = mR(aY) ? aY : "image/png",
        uY = "image/jpeg" === vY ? "jpg" : "png";
      IY[OY] = {
        texture: YY,
        mimeType: vY,
        ext: uY
      };
      const sY = YY.coordinatesIndex > 0 ? "st" + YY.coordinatesIndex : "st",
        iY = new FY.Vector2(YY.uScale, YY.vScale),
        yY = new FY.Vector2(YY.uOffset, YY.vOffset),
        QY = YY.wAng,
        oY = Math.sin(QY),
        WY = Math.cos(QY);
      return yY.y = 1 - yY.y - iY.y, yY.x += oY * iY.x, yY.y += (1 - WY) * iY.y, `\n    def Shader "PrimvarReader_${DY}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${sY}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${DY}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${rY.uniqueId}/PrimvarReader_${DY}.outputs:result>\n        float inputs:rotation = ${(QY*(180/Math.PI)).toFixed(RY.precision)}\n        float2 inputs:scale = ${WR(iY)}\n        float2 inputs:translation = ${WR(yY)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${YY.uniqueId}_${DY}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${OY}.${uY}@\n        float2 inputs:st.connect = </Root/Materials/Material_${rY.uniqueId}/Transform2d_${DY}.outputs:result>\n        ${AY?"float4 inputs:scale = "+function(YY){return`(${YY.r}, ${YY.g}, ${YY.b}, 1.0)`}(AY):""}\n        token inputs:sourceColorSpace = "${YY.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${oR(YY.wrapU)}"\n        token inputs:wrapT = "${oR(YY.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${rY.needAlphaBlending()||rY.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function SR(YY, rY, DY) {
      const FY = "\t\t\t",
        AY = [],
        IY = [],
        {
          diffuseMap: RY,
          diffuse: OY,
          alphaCutOff: gY,
          emissiveMap: aY,
          emissive: vY,
          normalMap: uY,
          roughnessMap: sY,
          roughnessChannel: iY,
          roughness: yY,
          metalnessMap: QY,
          metalnessChannel: WY,
          metalness: EY,
          aoMap: mY,
          aoMapChannel: VY,
          aoMapIntensity: SY,
          alphaMap: lY,
          ior: TY,
          clearCoatEnabled: eY,
          clearCoat: NY,
          clearCoatMap: BY,
          clearCoatRoughness: cY,
          clearCoatRoughnessMap: KY
        } = function(YY) {
          const rY = {
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
          return YY instanceof IF.StandardMaterial ? {
            ...rY,
            diffuseMap: YY.diffuseTexture,
            diffuse: YY.diffuseColor,
            alphaCutOff: YY.alphaCutOff,
            emissiveMap: YY.emissiveTexture,
            emissive: YY.emissiveColor,
            roughness: 1,
            alphaMap: YY.opacityTexture
          } : YY instanceof lr ? {
            ...rY,
            diffuseMap: YY._albedoTexture,
            diffuse: YY._albedoColor,
            alphaCutOff: YY._alphaCutOff,
            emissiveMap: YY._emissiveTexture,
            emissive: YY._emissiveColor,
            normalMap: YY._bumpTexture,
            roughnessMap: YY._metallicTexture,
            roughnessChannel: YY._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: YY._roughness ?? 1,
            metalnessMap: YY._metallicTexture,
            metalnessChannel: YY._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: YY._metallic ?? 0,
            aoMap: YY._ambientTexture,
            aoMapChannel: YY._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: YY._ambientTextureStrength,
            alphaMap: YY._opacityTexture,
            ior: YY.subSurface.indexOfRefraction,
            clearCoatEnabled: YY.clearCoat.isEnabled,
            clearCoat: YY.clearCoat.intensity,
            clearCoatMap: YY.clearCoat.texture,
            clearCoatRoughness: YY.clearCoat.roughness,
            clearCoatRoughnessMap: YY.clearCoat.useRoughnessFromMainTexture ? YY.clearCoat.texture : YY.clearCoat.textureRoughness
          } : rY
        }(YY);
      return null !== RY ? (AY.push(`${FY}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${RY.uniqueId}_diffuse.outputs:rgb>`), YY.needAlphaBlending() ? AY.push(`${FY}float inputs:opacity.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${RY.uniqueId}_diffuse.outputs:a>`) : YY.needAlphaTesting() && (AY.push(`${FY}float inputs:opacity.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${RY.uniqueId}_diffuse.outputs:a>`), AY.push(`${FY}float inputs:opacityThreshold = ${gY}`)), IY.push(VR(RY, YY, "diffuse", OY, rY, DY))) : AY.push(`${FY}color3f inputs:diffuseColor = ${ER(OY||oY.Color3.White())}`), null !== aY ? (AY.push(`${FY}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${aY.uniqueId}_emissive.outputs:rgb>`), IY.push(VR(aY, YY, "emissive", vY, rY, DY))) : vY && vY.toLuminance() > 0 && AY.push(`${FY}color3f inputs:emissiveColor = ${ER(vY)}`), null !== uY && (AY.push(`${FY}normal3f inputs:normal.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${uY.uniqueId}_normal.outputs:rgb>`), IY.push(VR(uY, YY, "normal", null, rY, DY))), null !== mY && (AY.push(`${FY}float inputs:occlusion.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${mY.uniqueId}_occlusion.outputs:${VY}>`), IY.push(VR(mY, YY, "occlusion", new oY.Color3(SY, SY, SY), rY, DY))), null !== sY ? (AY.push(`${FY}float inputs:roughness.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${sY.uniqueId}_roughness.outputs:${iY}>`), IY.push(VR(sY, YY, "roughness", new oY.Color3(yY, yY, yY), rY, DY))) : AY.push(`${FY}float inputs:roughness = ${yY}`), null !== QY ? (AY.push(`${FY}float inputs:metallic.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${QY.uniqueId}_metallic.outputs:${WY}>`), IY.push(VR(QY, YY, "metallic", new oY.Color3(EY, EY, EY), rY, DY))) : AY.push(`${FY}float inputs:metallic = ${EY}`), null !== lY ? (AY.push(`${FY}float inputs:opacity.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${lY.uniqueId}_opacity.outputs:r>`), AY.push(`${FY}float inputs:opacityThreshold = 0.0001`), IY.push(VR(lY, YY, "opacity", null, rY, DY))) : AY.push(`${FY}float inputs:opacity = ${YY.alpha}`), eY && (null !== BY ? (AY.push(`${FY}float inputs:clearcoat.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${BY.uniqueId}_clearcoat.outputs:r>`), IY.push(VR(BY, YY, "clearcoat", new oY.Color3(NY, NY, NY), rY, DY))) : AY.push(`${FY}float inputs:clearcoat = ${NY}`), null !== KY ? (AY.push(`${FY}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${YY.uniqueId}/Texture_${KY.uniqueId}_clearcoatRoughness.outputs:g>`), IY.push(VR(KY, YY, "clearcoatRoughness", new oY.Color3(cY, cY, cY), rY, DY))) : AY.push(`${FY}float inputs:clearcoatRoughness = ${cY}`)), AY.push(`${FY}float inputs:ior = ${TY}`), `\n\tdef Material "Material_${YY.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${AY.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${YY.uniqueId}/PreviewSurface.outputs:surface>\n\n${IY.join("\n")}\n\n\t}\n`
    }

    function lR(YY) {
      YY.computeWorldMatrix(!0);
      const rY = YY.getWorldMatrix().clone(),
        DY = YY.hT().useRightHandedSystem;
      let FY = YY.material?._getEffectiveOrientation(YY) ?? YY.sideOrientation,
        RY = !DY,
        OY = YY.parent;
      for (; OY;) {
        if (jD(OY, DY) && null === OY.parent) {
          DY || (rY.multiplyToRef(OY.getWorldMatrix().invert(), rY), FY = FY === IY.c.ClockWiseSideOrientation ? IY.c.CounterClockWiseSideOrientation : IY.c.ClockWiseSideOrientation), RY = !1;
          break
        }
        OY = OY.parent
      }
      return rY.determinant() < 0 && AY.Tools.Warn(`Mesh ${YY.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: rY,
        windingOrder: FY === IY.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: RY
      }
    }
    async function TR(YY, rY, DY) {
      const IY = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...rY
      };
      "undefined" === typeof fflate && await AY.Tools.LoadScriptAsync(IY.fflateUrl);
      const RY = {};
      RY[IY.modelFileName] = null;
      let OY = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      OY += function(YY) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===YY.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${YY.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${YY.planeAnchoringAlignment}"`:""}\n            `
      }(IY);
      const gY = {};
      for (const FY of YY.meshes) {
        if (0 === FY.getTotalVertices()) continue;
        const YY = FY,
          rY = YY.geometry,
          aY = YY.material;
        if (!aY || !rY || DY && !DY(YY)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(aY.getClassName())) {
          const DY = "geometries/Geometry_" + rY.uniqueId + ".usda",
            {
              matrix: FY,
              windingOrder: AY,
              convertToRightHanded: vY
            } = lR(YY);
          if (!(DY in RY)) {
            const YY = uR(rY, IY, AY, vY);
            RY[DY] = sR(YY)
          }
          aY.uniqueId in gY || (gY[aY.uniqueId] = aY), OY += QR(YY, FY)
        } else AY.Tools.Warn("USDZExportAsync does not support this material type: " + aY.getClassName())
      }
      YY.activeCamera && IY.exportCamera && (OY += function(YY, rY) {
        const DY = "Camera_" + YY.uniqueId,
          AY = iR(FY.Matrix.RotationY(Math.PI).multiply(YY.getWorldMatrix()));
        if (YY.mode === TY.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${DY}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${AY}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${YY.minZ.toPrecision(rY.precision)}, ${YY.maxZ.toPrecision(rY.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(YY.orthoLeft||1)+Math.abs(YY.orthoRight||1))).toPrecision(rY.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(YY.orthoTop||1)+Math.abs(YY.orthoBottom||1))).toPrecision(rY.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const FY = YY.ky().getAspectRatio(YY),
            IY = rY.cameraSensorWidth || 35;
          return `def Camera "${DY}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${AY}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${YY.minZ.toPrecision(rY.precision)}, ${YY.maxZ.toPrecision(rY.precision)})\n\t\t\tfloat focalLength = ${(IY/(2*Math.tan(.5*YY.fov))).toPrecision(rY.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(IY*FY).toPrecision(rY.precision)}\n\t\t\tfloat verticalAperture = ${(IY/FY).toPrecision(rY.precision)}            \n\t\t}\n\t\n\t`
        }
      }(YY.activeCamera, IY)), OY += "\n            }\n        }";
      const aY = {};
      OY += function(YY, rY, DY) {
        const FY = [];
        for (const AY in YY) {
          const IY = YY[AY];
          FY.push(SR(IY, rY, DY))
        }
        return `\n    def "Materials"\n{\n${FY.join("")}\n}\n\n`
      }(gY, aY, IY), OY += "\n    }", RY[IY.modelFileName] = fflate.strToU8(OY);
      for (const FY in aY) {
        const {
          texture: YY,
          ext: rY,
          mimeType: DY
        } = aY[FY], AY = await WD(YY);
        if (AY && mR(AY.mimeType) && AY.mimeType === DY) RY[`textures/Texture_${FY}.${rY}`] = new Uint8Array(AY.data);
        else {
          const AY = YY.getSize(),
            IY = await (0, VY.c)(YY),
            OY = await eY.DumpTools.DumpDataAsync(AY.width, AY.height, IY, DY, void 0, !1, !0);
          RY[`textures/Texture_${FY}.${rY}`] = new Uint8Array(OY).slice()
        }
      }
      let vY = 0;
      for (const FY in RY) {
        const YY = RY[FY];
        if (!YY) continue;
        vY += 34 + FY.length;
        const rY = 63 & vY;
        if (4 !== rY) {
          const DY = new Uint8Array(64 - rY);
          RY[FY] = [YY, {
            extra: {
              12345: DY
            }
          }]
        }
        vY = YY.length
      }
      return fflate.zipSync(RY, {
        level: 0
      })
    }
    var eR = DY(40305);
    class NR {
      static Export(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (!YY || 0 === YY.bones.length) throw new Error("Invalid or empty skeleton provided");
        let FY = rY;
        rY && 0 !== rY.length || (FY = YY.animations.map((YY => YY.name)));
        let AY = null;
        for (const aY of FY) {
          const rY = YY.getAnimationRange(aY);
          rY && (AY = AY ? new eR.c("animation-range", Math.min(AY.from, rY.from), Math.max(AY.to, rY.to)) : rY)
        }
        if (!AY && (YY.animations.length > 0 && (AY = YY.getAnimationRange(YY.animations[0].name)), !AY)) throw new Error("No animation range found in skeleton");
        const IY = DY || 1 / (YY.animations[0]?.framePerSecond || 30),
          RY = this._BuildBoneHierarchy(YY, FY);
        let OY = 0;
        for (const aY of RY) aY.positionKeys.length > 0 && (OY = Math.max(OY, aY.positionKeys.length)), aY.rotationKeys.length > 0 && (OY = Math.max(OY, aY.rotationKeys.length));
        0 === OY && (OY = Math.floor((AY.to - AY.from) / IY) + 1);
        let gY = "";
        return gY += "HIERARCHY\n", gY += this._ExportHierarchy(RY, 0), gY += "MOTION\n", gY += `Frames: ${OY}\n`, gY += `Frame Time: ${IY.toFixed(6)}\n`, gY += this._ExportMotionData(RY, OY, 0, FY), gY
      }
      static _BuildBoneHierarchy(YY, rY) {
        const DY = new Map,
          FY = [];
        for (const AY of YY.bones) {
          const YY = {
            bone: AY,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          DY.set(AY, YY)
        }
        for (const AY of YY.bones) {
          const YY = DY.get(AY);
          if (AY.animations.length > 0)
            for (const DY of AY.animations) rY.includes(DY.name) && ("position" === DY.targetProperty ? (YY.hasPositionChannels = !0, YY.positionKeys.push(...DY.getKeys())) : "rotationQuaternion" === DY.targetProperty && (YY.hasRotationChannels = !0, YY.rotationKeys.push(...DY.getKeys())));
          if (AY.getParent()) {
            const rY = DY.get(AY.getParent());
            rY && rY.children.push(YY)
          } else FY.push(YY)
        }
        return FY
      }
      static _ExportHierarchy(YY, rY) {
        let DY = "";
        const FY = "    ".repeat(rY);
        for (const AY of YY) {
          const YY = AY.bone;
          if (this._IsEndSite(AY)) {
            DY += `${FY}End Site\n`, DY += `${FY}{\n`;
            const rY = this._GetBoneOffset(YY);
            DY += `${FY}    OFFSET ${rY.x.toFixed(6)} ${rY.y.toFixed(6)} ${rY.z.toFixed(6)}\n`, DY += `${FY}}\n`
          } else {
            DY += `${0===rY?"ROOT":`${FY}JOINT`} ${YY.name}\n`, DY += `${FY}{\n`;
            const IY = this._GetBoneOffset(YY);
            DY += `${FY}    OFFSET ${IY.x.toFixed(6)} ${IY.y.toFixed(6)} ${IY.z.toFixed(6)}\n`;
            const RY = [];
            AY.hasPositionChannels && RY.push("Xposition", "Yposition", "Zposition"), AY.hasRotationChannels && RY.push("Zrotation", "Xrotation", "Yrotation"), RY.length > 0 && (DY += `${FY}    CHANNELS ${RY.length} ${RY.join(" ")}\n`), AY.children.length > 0 && (DY += this._ExportHierarchy(AY.children, rY + 1)), DY += `${FY}}\n`
          }
        }
        return DY
      }
      static _IsEndSite(YY) {
        return 0 === YY.children.length
      }
      static _GetBoneOffset(YY) {
        try {
          if (!YY.getParent()) return YY.getRestMatrix().getTranslation();
          return YY.getLocalMatrix().getTranslation()
        } catch (rY) {
          return FY.xy.Zero()
        }
      }
      static _ExportMotionData(YY, rY, DY, FY) {
        let AY = "";
        for (let IY = 0; IY < rY; IY++) {
          const rY = [];
          this._CollectFrameValues(YY, IY + DY, rY, FY), AY += rY.map((YY => YY.toFixed(6))).join(" ") + "\n"
        }
        return AY
      }
      static _CollectFrameValues(YY, rY, DY, FY) {
        for (const AY of YY)
          if (!this._IsEndSite(AY)) {
            if (AY.hasPositionChannels) {
              const YY = this._GetPositionAtFrameIndex(AY.positionKeys, rY);
              DY.push(YY.x, YY.y, YY.z)
            }
            if (AY.hasRotationChannels) {
              const YY = this._GetRotationAtFrameIndex(AY.rotationKeys, rY),
                FY = this._QuaternionToEuler(YY);
              DY.push(FY.z, FY.x, FY.y)
            }
            AY.children.length > 0 && this._CollectFrameValues(AY.children, rY, DY, FY)
          }
      }
      static _GetPositionAtFrameIndex(YY, rY) {
        if (0 === YY.length) return FY.xy.Zero();
        return YY[Math.max(0, Math.min(rY, YY.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(YY, rY) {
        if (0 === YY.length) return FY.Quaternion.Identity();
        return YY[Math.max(0, Math.min(rY, YY.length - 1))].value.clone()
      }
      static _QuaternionToEuler(YY) {
        const rY = new FY.Matrix;
        YY.toRotationMatrix(rY);
        const DY = rY.m;
        let IY, RY, OY;
        const gY = Math.sqrt(DY[0] * DY[0] + DY[1] * DY[1]);
        return gY > CD.c ? (IY = Math.atan2(DY[6], DY[10]), RY = Math.atan2(-DY[2], gY), OY = Math.atan2(DY[1], DY[0])) : (IY = Math.atan2(-DY[9], DY[5]), RY = Math.atan2(-DY[2], gY), OY = 0), new FY.xy(AY.Tools.ToDegrees(IY), AY.Tools.ToDegrees(RY), AY.Tools.ToDegrees(OY))
      }
    }

    function BR(YY) {
      return "string" === typeof YY?.name
    }
    const cR = Symbol("__xml:meta$__"),
      KR = Symbol("__xml:name$__");

    function HR(YY, rY) {
      Object.prototype.hasOwnProperty.call(YY.metadata, cR) || (YY.metadata[cR] = []), YY.metadata[cR].push(rY)
    }

    function zR(YY) {
      return (rY, DY) => {
        rY[KR] = YY
      }
    }

    function ZR() {
      return (YY, rY) => HR(rY, {
        kind: "none",
        prop: String(rY.name),
        ignore: !0
      })
    }

    function CR(YY) {
      return (rY, DY) => HR(DY, {
        kind: "attr",
        prop: String(DY.name),
        ...YY
      })
    }

    function fR(YY) {
      return (rY, DY) => HR(DY, {
        kind: "elem",
        prop: String(DY.name),
        ...YY
      })
    }

    function jR(YY) {
      const rY = "function" === typeof YY ? YY : YY?.constructor,
        DY = rY?.[Symbol.metadata];
      if (!DY) return [];
      const FY = [];
      let AY = DY;
      for (; AY;) Object.prototype.hasOwnProperty.call(AY, cR) && FY.push(...AY[cR]), AY = Object.getPrototypeOf(AY);
      return FY
    }

    function hR(YY) {
      const rY = YY?.constructor?.[KR];
      return rY || void 0
    }

    function dR(YY) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(YY)
    }

    function JR(YY) {
      if (BR(YY)) return YY;
      const rY = (YY ?? "").trim();
      if (!rY) return {
        name: ""
      };
      const DY = rY.indexOf(":");
      if (-1 === DY) return {
        name: rY
      };
      if (-1 !== rY.indexOf(":", DY + 1)) return {
        name: rY
      };
      const FY = rY.slice(0, DY),
        AY = rY.slice(DY + 1);
      return dR(FY) && dR(AY) ? {
        ns: FY,
        name: AY
      } : {
        name: rY
      }
    }

    function MR(YY, rY) {
      return rY ? `${rY}:${YY}` : YY
    }
    const wR = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      bR = Object.freeze({
        number: wR
      });

    function XR(YY) {
      const rY = YY?.eps ?? wR.eps;
      return {
        eps: rY,
        maxDecimalsCap: YY?.maxDecimalsCap ?? wR.maxDecimalsCap,
        trimTrailingZeros: YY?.trimTrailingZeros ?? wR.trimTrailingZeros,
        fixedDecimals: YY?.fixedDecimals,
        allowScientific: YY?.allowScientific ?? wR.allowScientific,
        snapNearZero: YY?.snapNearZero ?? wR.snapNearZero,
        zeroThreshold: YY?.zeroThreshold ?? rY,
        perAttributeEps: YY?.perAttributeEps
      }
    }

    function qR(YY) {
      return {
        number: XR(YY?.number)
      }
    }
    class pR {
      constructor(YY) {
        if (this.o = YY, this._o = YY.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(YY) {
        if (!Number.isFinite(YY)) throw new Error(`Cannot format non-finite number: ${YY}`);
        const rY = this._o,
          DY = this._clampInt(rY.maxDecimalsCap ?? 15, 0, 20),
          FY = rY.trimTrailingZeros ?? !0,
          AY = rY.snapNearZero ?? !0,
          IY = rY.zeroThreshold ?? rY.eps,
          RY = 1 / rY.eps;
        let OY, gY = Math.round(YY * RY) / RY;
        if (Object.is(gY, -0) && (gY = 0), AY && Math.abs(gY) <= IY && (gY = 0), OY = void 0 !== rY.fixedDecimals ? this._clampInt(rY.fixedDecimals, 0, DY) : this._clampInt(Math.ceil(-Math.log10(rY.eps)), 0, DY), rY.allowScientific, 0 === OY) return String(Math.trunc(gY));
        let aY = gY.toFixed(OY);
        if (FY && void 0 === rY.fixedDecimals && (aY = aY.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(aY)) throw new Error(`Scientific notation not allowed in XML output: ${aY}`);
        return aY
      }
      _clampInt(YY, rY, DY) {
        return Number.isFinite(YY) ? (YY = Math.trunc(YY), Math.max(rY, Math.min(DY, YY))) : rY
      }
    }

    function kR(YY) {
      return YY instanceof Date
    }

    function GR(YY) {
      return "string" === typeof YY
    }

    function xR(YY) {
      return "string" === typeof YY || "number" === typeof YY || "boolean" === typeof YY || "bigint" === typeof YY || kR(YY)
    }

    function nR(YY) {
      return "number" === typeof YY || "boolean" === typeof YY || "bigint" === typeof YY || kR(YY)
    }
    class PR {
      constructor(YY, rY) {
        this._ns = new Map, this._prefixCount = 0, this._builder = YY, this._format = qR(rY), this._nFmt = new pR(this._format)
      }
      withNamespace() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        for (const FY of rY) this._assignNamespace(FY);
        return this
      }
      serialize(YY, rY) {
        if (!(rY = rY ?? hR(YY))) throw new Error("can not find name for given object");
        const DY = JR(rY);
        DY.ns && this._assignNamespace(DY.ns, "xmlns"), this._gatherNamespaces(YY, new WeakSet);
        const FY = this._builder.ele(null, DY.name);
        for (const [AY, IY] of Array.from(this._ns.entries())) FY.att("xmlns", IY, AY);
        this._writeObjectContent(FY, YY, (new WeakSet).add(YY)), this._builder.end()
      }
      _writeObject(YY, rY, DY) {
        if (DY.has(rY)) return;
        if (DY.add(rY), Array.isArray(rY)) {
          for (const FY of rY) nR(FY) || (GR(FY) ? this._builder.text(FY) : this._writeObject(YY, FY, DY));
          return
        }
        const FY = hR(rY);
        if (!FY) return;
        const AY = JR(FY),
          IY = this._getPrefix(AY),
          RY = MR(AY.name, IY);
        YY.ele(null, RY), this._writeObjectContent(YY, rY, DY), this._builder.end()
      }
      _getPrefix(YY) {
        if (YY.ns) {
          const rY = this._ns.get(YY.ns.toLowerCase());
          if ("xmlns" !== rY) return rY
        }
      }
      _writeObjectContent(YY, rY, DY) {
        const FY = jR(rY) ?? [],
          AY = new Map;
        for (const RY of FY) {
          const YY = AY.get(RY.prop) ?? [];
          YY.push(RY), AY.set(RY.prop, YY)
        }
        const IY = Object.keys(rY).sort(((YY, rY) => {
          const DY = (AY.get(YY) ?? []).some((YY => "attr" === YY.kind));
          return DY === (AY.get(rY) ?? []).some((YY => "attr" === YY.kind)) ? 0 : DY ? -1 : 1
        }));
        for (const RY of IY) {
          const FY = rY[RY];
          if (null === FY || void 0 === FY) continue;
          const IY = AY.get(RY);
          if (IY) {
            if (IY.some((YY => !0 === YY.ignore || "none" === YY.kind))) continue;
            for (const rY of IY) {
              const DY = rY.name ?? rY.prop.toLowerCase();
              if (DY) switch (rY.kind) {
                case "attr": {
                  let AY = null;
                  if ("number" === typeof FY && this._nFmt && (AY = this._nFmt.toString(FY)), rY.formatter) {
                    AY = new rY.formatter(this._format).toString(FY)
                  }
                  if (AY = AY ?? FY.toString(), AY) {
                    const rY = JR(DY),
                      FY = this._getPrefix(rY),
                      IY = MR(rY.name, FY);
                    YY.att(null, IY, AY)
                  }
                  break
                }
              }
            }
          } else nR(FY) || (GR(FY) ? this._builder.text(FY) : this._writeObject(YY, FY, DY))
        }
      }
      _gatherNamespaces(YY, rY) {
        if (rY.has(YY)) return;
        if (rY.add(YY), Array.isArray(YY)) {
          for (const DY of YY) xR(DY) || this._gatherNamespaces(DY, rY);
          return
        }
        const DY = hR(YY);
        DY && this._assignNamespace(DY);
        const FY = jR(YY) ?? [],
          AY = new Map;
        for (const RY of FY) {
          const YY = AY.get(RY.prop) ?? [];
          YY.push(RY), AY.set(RY.prop, YY)
        }
        const IY = [];
        for (const RY of Object.keys(YY)) {
          const rY = YY[RY];
          if (null === rY || void 0 === rY) continue;
          const DY = AY.get(RY);
          if (DY) {
            if (DY.some((YY => !0 === YY.ignore || "none" === YY.kind))) continue;
            for (const YY of DY) YY.name && this._assignNamespace(YY.name)
          }
          IY.push(rY)
        }
        for (const RY of IY) xR(RY) || this._gatherNamespaces(RY, rY)
      }
      _assignNamespace(YY, rY) {
        const DY = JR(YY);
        if (DY?.ns) {
          const YY = DY.ns.toLowerCase();
          this._ns.get(YY) || this._ns.set(YY, rY ?? this._buildNsPrefix(YY))
        } else if ("xmlns" === rY) {
          const YY = DY.name.toLowerCase();
          this._ns.get(YY) || this._ns.set(YY, rY ?? this._buildNsPrefix(YY))
        }
      }
      _buildNsPrefix(YY) {
        let rY, DY = !1;
        do {
          rY = "ns" + this._prefixCount++;
          for (const YY of Array.from(this._ns.values()))
            if (YY === rY) {
              DY = !0;
              break
            }
        } while (DY);
        return rY
      }
    }
    class UR {}
    var LR;
    UR.OpenTag = "<", UR.CloseTag = ">", UR.Slash = "/", UR.Question = "?", UR.Quote = '"', UR.Equal = "=", UR.Space = " ", UR.Semicolon = ":", UR.Dec = "<?xml", UR.Xml = "xml", UR.Xmlns = "xmlns", UR.Xsi = "xsi", UR.VersionKeyword = "version", UR.EncodingKeyword = "encoding", UR.StandaloneKeyword = "standalone",
      function(YY) {
        YY[YY.Declaration = 0] = "Declaration", YY[YY.Tag = 1] = "Tag", YY[YY.Attribute = 2] = "Attribute", YY[YY.Text = 3] = "Text"
      }(LR || (LR = {}));
    class tR {
      constructor(YY) {
        this._ctxStack = [], this._d = 0, this._w = YY
      }
      dec(YY, rY, DY) {
        return this._w.write(UR.Dec), this._writeAttStr(UR.VersionKeyword, YY), rY && this._writeAttStr(UR.EncodingKeyword, rY), void 0 !== DY && this._writeAttStr(UR.StandaloneKeyword, DY ? "yes" : "no"), this._w.write(UR.Question, UR.CloseTag), this
      }
      att(YY, rY, DY) {
        const FY = this._peekContext();
        if (!FY) throw new Error("att() without open element");
        if (FY.closed) throw new Error(`att() after start tag closed for <${FY.name}>`);
        if (this._isXmlnsDecl(YY, rY)) {
          if (rY === UR.Xmlns) FY.defaultNs = DY, this._registerNamespace(FY, "", DY), this._writeAttStr(UR.Xmlns, DY);
          else if (YY) this._registerNamespace(FY, rY, DY), this._writeAttStr(`${YY}:${rY}`, DY);
          else {
            const YY = rY.slice(6);
            this._registerNamespace(FY, YY, DY), this._writeAttStr(rY, DY)
          }
          return FY.lastToken = LR.Attribute, this
        }
        let AY = rY;
        if (YY) {
          AY = `${this._ensurePrefixDeclared(FY,YY)}:${rY}`
        }
        return FY.lastToken = LR.Attribute, this._writeAttStr(AY, DY), this
      }
      ele(YY, rY) {
        const DY = this._peekContext();
        DY && this._closeOpenTagIfNeeded(DY);
        let FY = rY;
        if (YY) {
          FY = `${this._lookupPrefix(YY)??YY}:${rY}`
        }
        return this._pushContext(FY, ++this._d), this._w.write(UR.OpenTag, FY), this
      }
      text(YY) {
        const rY = this._peekContext();
        if (!rY) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(rY), rY.lastToken = LR.Text, this._w.write(this._escText(YY)), this
      }
      end() {
        const YY = this._popContext();
        return YY && (this._d--, YY.closed ? this._w.write(UR.OpenTag, UR.Slash, YY.name, UR.CloseTag) : this._w.write(UR.Slash, UR.CloseTag)), this
      }
      _pushContext(YY, rY) {
        const DY = new tR.Context(YY, rY);
        return this._ctxStack.push(DY), DY
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
      _writeAttStr(YY, rY) {
        this._w.write(UR.Space, YY, UR.Equal, UR.Quote, this._escAttr(rY), UR.Quote)
      }
      _lookupPrefix(YY) {
        let rY = this._ctxStack.length - 1;
        if (rY >= 0)
          do {
            const DY = this._ctxStack[rY--],
              FY = DY.ns2prefix?.get(YY);
            if (FY) return FY
          } while (rY >= 0)
      }
      _escText(YY) {
        return YY.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(YY) {
        return this._escText(YY).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(YY, rY) {
        if (YY) return YY === UR.Xmlns;
        const DY = rY.length,
          FY = UR.Xmlns.length;
        return DY >= FY && (rY.startsWith(UR.Xmlns) && (rY.length == FY || rY[FY] == UR.Semicolon))
      }
      _registerNamespace(YY, rY, DY) {
        if (rY === UR.Xml || rY === UR.Xmlns) throw new Error(`reserved prefix '${rY}'`);
        const FY = YY.prefix2ns.get(rY);
        if (FY && FY !== DY) throw new Error(`prefix '${rY}' already bound to a different namespace`);
        YY.ns2prefix.get(DY) || YY.ns2prefix.set(DY, rY), YY.prefix2ns.set(rY, DY)
      }
      _allocPrefix(YY) {
        let rY = 1;
        for (;;) {
          const DY = "ns" + rY++;
          if (!YY.prefix2ns.has(DY)) return DY
        }
      }
      _ensurePrefixDeclared(YY, rY) {
        const DY = this._lookupPrefix(rY);
        if (DY) return DY;
        if (YY.closed) throw new Error(`can not declare namespace after start tag closed for <${YY.name}>`);
        const FY = this._allocPrefix(YY);
        return this._writeAttStr(`${UR.Xmlns}:${FY}`, rY), this._registerNamespace(YY, FY, rY), FY
      }
      _closeOpenTagIfNeeded(YY) {
        YY.closed || (this._w.write(UR.CloseTag), YY.closed = !0)
      }
    }
    tR.Context = class {
      constructor(YY, rY) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = YY, this.depth = rY
      }
    };
    class YO {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        if (0 === rY.length) return this;
        const FY = rY.join("");
        return this._chunks.push(FY), this.count += FY.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class rO {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = YY, this._opts = rY, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        if (0 === rY.length) return this;
        const FY = rY.join("");
        if (0 === FY.length) return this;
        this._pending += FY, this._pendingChars += FY.length;
        const AY = this._opts.flushChars ?? 65536;
        return this._pendingChars >= AY && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const YY = this._encoder.encode(this._pending);
        return this._sink.push(YY), this.count += YY.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const DO = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      FO = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var AO, IO;
    ! function(YY) {
      YY.micron = "micron", YY.millimeter = "millimeter", YY.centimeter = "centimeter", YY.inch = "inch", YY.foot = "foot", YY.meter = "meter"
    }(AO || (AO = {})),
    function(YY) {
      YY.model = "model", YY.solidsupport = "solidsupport", YY.support = "support", YY.surface = "surface", YY.other = "other"
    }(IO || (IO = {}));
    const RO = "http://schemas.openxmlformats.org/package/2006/content-types",
      OO = "http://schemas.openxmlformats.org/package/2006/relationships";
    var gO;
    ! function(YY) {
      YY.Relationships = "application/vnd.openxmlformats-package.relationships+xml", YY.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", YY.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", YY.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", YY.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", YY.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", YY.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", YY.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", YY.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", YY.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", YY.Png = "image/png", YY.Jpeg = "image/jpeg", YY.Tiff = "image/tiff", YY.Xml = "application/xml"
    }(gO || (gO = {}));
    const aO = "_rels/",
      vO = "3D/",
      uO = "3dmodel.model",
      sO = ".rels",
      iO = "[Content_Types].xml";
    class yO {
      static IsKnown(YY) {
        return yO.Known.has(YY)
      }
      static IsThreeDimModel(YY) {
        return YY === yO.ThreeDimModel
      }
    }
    yO.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", yO.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", yO.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", yO.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", yO.Known = new Set([yO.ThreeDimModel, yO.Thumbnail, yO.PrintTicket, yO.MustPreserve]);
    let QO = (() => {
        let YY, rY, DY = [zR({
            ns: RO,
            name: "Types"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.items = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfContentTypes"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      oO = (() => {
        let YY, rY, DY, FY, AY = [zR({
            ns: RO,
            name: "Default"
          })],
          IY = [],
          RY = [],
          OY = [],
          gY = [],
          aY = [];
        rY = class {
          constructor(YY, rY) {
            this.ext = (0, NY.j)(this, RY, void 0), this.ct = ((0, NY.j)(this, OY), (0, NY.j)(this, gY, void 0)), (0, NY.j)(this, aY), this.ext = YY, this.ct = rY
          }
        };
        return (0, NY.m)(rY, "ThreeMfContentType"), (() => {
          const vY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: {
              ns: RO,
              name: "Extension"
            }
          })], FY = [CR({
            name: {
              ns: RO,
              name: "ContentType"
            }
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: YY => "ext" in YY,
              get: YY => YY.ext,
              set: (YY, rY) => {
                YY.ext = rY
              }
            },
            metadata: vY
          }, RY, OY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: YY => "ct" in YY,
              get: YY => YY.ct,
              set: (YY, rY) => {
                YY.ct = rY
              }
            },
            metadata: vY
          }, gY, aY), (0, NY.i)(null, YY = {
            value: rY
          }, AY, {
            kind: "class",
            name: rY.name,
            metadata: vY
          }, null, IY), rY = YY.value, vY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vY
          }), (0, NY.j)(rY, IY)
        })(), rY
      })(),
      WO = (() => {
        let YY, rY, DY = [zR({
            ns: OO,
            name: "Relationships"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.items = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfRelationships"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      EO = (() => {
        let YY, rY, DY, FY, AY, IY = [zR({
            ns: OO,
            name: "Relationship"
          })],
          RY = [],
          OY = [],
          gY = [],
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        rY = class {
          constructor(YY, rY, DY) {
            this.id = (0, NY.j)(this, OY, void 0), this.type = ((0, NY.j)(this, gY), (0, NY.j)(this, aY, void 0)), this.target = ((0, NY.j)(this, vY), (0, NY.j)(this, uY, void 0)), (0, NY.j)(this, sY), this.id = YY, this.type = rY, this.target = DY
          }
        };
        return (0, NY.m)(rY, "ThreeMfRelationship"), (() => {
          const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "Id"
          })], FY = [CR({
            name: "Type"
          })], AY = [CR({
            name: "Target"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: YY => "id" in YY,
              get: YY => YY.id,
              set: (YY, rY) => {
                YY.id = rY
              }
            },
            metadata: iY
          }, OY, gY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: YY => "type" in YY,
              get: YY => YY.type,
              set: (YY, rY) => {
                YY.type = rY
              }
            },
            metadata: iY
          }, aY, vY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: YY => "target" in YY,
              get: YY => YY.target,
              set: (YY, rY) => {
                YY.target = rY
              }
            },
            metadata: iY
          }, uY, sY), (0, NY.i)(null, YY = {
            value: rY
          }, IY, {
            kind: "class",
            name: rY.name,
            metadata: iY
          }, null, RY), rY = YY.value, iY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iY
          }), (0, NY.j)(rY, RY)
        })(), rY
      })();
    class mO {
      constructor(YY, rY, DY) {
        this.contentTypes = YY, this.relationships = rY, this.model = DY
      }
    }
    class VO {
      static Zero() {
        return new VO([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(YY) {
        this.values = YY
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class SO {
      constructor(YY) {
        this.o = YY, this._f = new pR(YY)
      }
      toString(YY) {
        return YY.values.map((YY => this._f.toString(YY))).join(" ")
      }
    }
    let lO = (() => {
        let YY, rY, DY, FY, AY, IY = [zR({
            ns: DO,
            name: "model"
          })],
          RY = [],
          OY = [],
          gY = [],
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        rY = class {
          constructor() {
            this.unit = (0, NY.j)(this, OY, AO.millimeter), this.requiredextensions = ((0, NY.j)(this, gY), (0, NY.j)(this, aY, void 0)), this.recommendedextensions = ((0, NY.j)(this, vY), (0, NY.j)(this, uY, void 0)), this.metadata = (0, NY.j)(this, sY)
          }
        };
        return (0, NY.m)(rY, "ThreeMfModel"), (() => {
          const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "unit"
          })], FY = [CR({
            name: "requiredextensions"
          })], AY = [CR({
            name: "recommendedextensions"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: YY => "unit" in YY,
              get: YY => YY.unit,
              set: (YY, rY) => {
                YY.unit = rY
              }
            },
            metadata: iY
          }, OY, gY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: YY => "requiredextensions" in YY,
              get: YY => YY.requiredextensions,
              set: (YY, rY) => {
                YY.requiredextensions = rY
              }
            },
            metadata: iY
          }, aY, vY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: YY => "recommendedextensions" in YY,
              get: YY => YY.recommendedextensions,
              set: (YY, rY) => {
                YY.recommendedextensions = rY
              }
            },
            metadata: iY
          }, uY, sY), (0, NY.i)(null, YY = {
            value: rY
          }, IY, {
            kind: "class",
            name: rY.name,
            metadata: iY
          }, null, RY), rY = YY.value, iY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iY
          })
        })(), rY.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, NY.j)(rY, RY), rY
      })(),
      TO = (() => {
        let YY, rY, DY, FY, AY, IY = [zR({
            ns: DO,
            name: "meta"
          })],
          RY = [],
          OY = [],
          gY = [],
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        rY = class {
          constructor(YY, rY, DY, FY) {
            this.name = (0, NY.j)(this, OY, void 0), this.preserve = ((0, NY.j)(this, gY), (0, NY.j)(this, aY, void 0)), this.type = ((0, NY.j)(this, vY), (0, NY.j)(this, uY, void 0)), this.value = (0, NY.j)(this, sY), this.name = YY, this.value = rY, this.preserve = DY, this.type = FY
          }
        };
        return (0, NY.m)(rY, "ThreeMfMeta"), (() => {
          const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "name"
          })], FY = [CR({
            name: "preserve"
          })], AY = [CR({
            name: "type"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: YY => "name" in YY,
              get: YY => YY.name,
              set: (YY, rY) => {
                YY.name = rY
              }
            },
            metadata: iY
          }, OY, gY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: YY => "preserve" in YY,
              get: YY => YY.preserve,
              set: (YY, rY) => {
                YY.preserve = rY
              }
            },
            metadata: iY
          }, aY, vY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: YY => "type" in YY,
              get: YY => YY.type,
              set: (YY, rY) => {
                YY.type = rY
              }
            },
            metadata: iY
          }, uY, sY), (0, NY.i)(null, YY = {
            value: rY
          }, IY, {
            kind: "class",
            name: rY.name,
            metadata: iY
          }, null, RY), rY = YY.value, iY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iY
          }), (0, NY.j)(rY, RY)
        })(), rY
      })(),
      eO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "metadatagroup"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfMetadataGroup"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      NO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "resources"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.object = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfResources"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      BO = (() => {
        let YY, rY, DY, FY, AY, IY, RY, OY, gY, aY = [zR({
            ns: DO,
            name: "object"
          })],
          vY = [],
          uY = [],
          sY = [],
          iY = [],
          yY = [],
          QY = [],
          oY = [],
          WY = [],
          EY = [],
          mY = [],
          VY = [],
          SY = [],
          lY = [],
          TY = [],
          eY = [];
        rY = class {
          constructor(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IO.model;
            this.id = (0, NY.j)(this, uY, void 0), this.type = ((0, NY.j)(this, sY), (0, NY.j)(this, iY, void 0)), this.thumbnail = ((0, NY.j)(this, yY), (0, NY.j)(this, QY, void 0)), this.partnumber = ((0, NY.j)(this, oY), (0, NY.j)(this, WY, void 0)), this.name = ((0, NY.j)(this, EY), (0, NY.j)(this, mY, void 0)), this.pid = ((0, NY.j)(this, VY), (0, NY.j)(this, SY, void 0)), this.pindex = ((0, NY.j)(this, lY), (0, NY.j)(this, TY, void 0)), this.metadatagroup = (0, NY.j)(this, eY), this.id = YY, this.type = rY
          }
        };
        return (0, NY.m)(rY, "ThreeMfObject"), (() => {
          const BY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "id"
          })], FY = [CR({
            name: "type"
          })], AY = [CR({
            name: "thumbnail"
          })], IY = [CR({
            name: "partnumber"
          })], RY = [CR({
            name: "name"
          })], OY = [CR({
            name: "pid"
          })], gY = [CR({
            name: "pindex"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: YY => "id" in YY,
              get: YY => YY.id,
              set: (YY, rY) => {
                YY.id = rY
              }
            },
            metadata: BY
          }, uY, sY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: YY => "type" in YY,
              get: YY => YY.type,
              set: (YY, rY) => {
                YY.type = rY
              }
            },
            metadata: BY
          }, iY, yY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: YY => "thumbnail" in YY,
              get: YY => YY.thumbnail,
              set: (YY, rY) => {
                YY.thumbnail = rY
              }
            },
            metadata: BY
          }, QY, oY), (0, NY.i)(null, null, IY, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: YY => "partnumber" in YY,
              get: YY => YY.partnumber,
              set: (YY, rY) => {
                YY.partnumber = rY
              }
            },
            metadata: BY
          }, WY, EY), (0, NY.i)(null, null, RY, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: YY => "name" in YY,
              get: YY => YY.name,
              set: (YY, rY) => {
                YY.name = rY
              }
            },
            metadata: BY
          }, mY, VY), (0, NY.i)(null, null, OY, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: YY => "pid" in YY,
              get: YY => YY.pid,
              set: (YY, rY) => {
                YY.pid = rY
              }
            },
            metadata: BY
          }, SY, lY), (0, NY.i)(null, null, gY, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: YY => "pindex" in YY,
              get: YY => YY.pindex,
              set: (YY, rY) => {
                YY.pindex = rY
              }
            },
            metadata: BY
          }, TY, eY), (0, NY.i)(null, YY = {
            value: rY
          }, aY, {
            kind: "class",
            name: rY.name,
            metadata: BY
          }, null, vY), rY = YY.value, BY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: BY
          }), (0, NY.j)(rY, vY)
        })(), rY
      })(),
      cO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "mesh"
          })],
          FY = [];
        rY = class {
          constructor(YY, rY) {
            this.vertices = YY ?? new KO, this.triangles = rY ?? new zO
          }
        };
        return (0, NY.m)(rY, "ThreeMfMesh"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      KO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "vertices"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfVertices"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      HO = (() => {
        let YY, rY, DY, FY, AY, IY = [zR({
            ns: DO,
            name: "vertex"
          })],
          RY = [],
          OY = [],
          gY = [],
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        rY = class {
          constructor() {
            let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, NY.j)(this, OY, void 0), this.y = ((0, NY.j)(this, gY), (0, NY.j)(this, aY, void 0)), this.z = ((0, NY.j)(this, vY), (0, NY.j)(this, uY, void 0)), (0, NY.j)(this, sY), this.x = YY, this.y = rY, this.z = DY
          }
        };
        return (0, NY.m)(rY, "ThreeMfVertex"), (() => {
          const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "x"
          })], FY = [CR({
            name: "y"
          })], AY = [CR({
            name: "z"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: YY => "x" in YY,
              get: YY => YY.x,
              set: (YY, rY) => {
                YY.x = rY
              }
            },
            metadata: iY
          }, OY, gY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: YY => "y" in YY,
              get: YY => YY.y,
              set: (YY, rY) => {
                YY.y = rY
              }
            },
            metadata: iY
          }, aY, vY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: YY => "z" in YY,
              get: YY => YY.z,
              set: (YY, rY) => {
                YY.z = rY
              }
            },
            metadata: iY
          }, uY, sY), (0, NY.i)(null, YY = {
            value: rY
          }, IY, {
            kind: "class",
            name: rY.name,
            metadata: iY
          }, null, RY), rY = YY.value, iY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iY
          }), (0, NY.j)(rY, RY)
        })(), rY
      })(),
      zO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "triangles"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfTriangles"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      ZO = (() => {
        let YY, rY, DY, FY, AY, IY, RY, OY, gY, aY = [zR({
            ns: DO,
            name: "triangle"
          })],
          vY = [],
          uY = [],
          sY = [],
          iY = [],
          yY = [],
          QY = [],
          oY = [],
          WY = [],
          EY = [],
          mY = [],
          VY = [],
          SY = [],
          lY = [],
          TY = [],
          eY = [];
        rY = class {
          constructor(YY, rY, DY) {
            this.v1 = (0, NY.j)(this, uY, void 0), this.v2 = ((0, NY.j)(this, sY), (0, NY.j)(this, iY, void 0)), this.v3 = ((0, NY.j)(this, yY), (0, NY.j)(this, QY, void 0)), this.p1 = ((0, NY.j)(this, oY), (0, NY.j)(this, WY, void 0)), this.p2 = ((0, NY.j)(this, EY), (0, NY.j)(this, mY, void 0)), this.p3 = ((0, NY.j)(this, VY), (0, NY.j)(this, SY, void 0)), this.pid = ((0, NY.j)(this, lY), (0, NY.j)(this, TY, void 0)), (0, NY.j)(this, eY), this.v1 = YY, this.v2 = rY, this.v3 = DY
          }
        };
        return (0, NY.m)(rY, "ThreeMfTriangle"), (() => {
          const BY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "v1"
          })], FY = [CR({
            name: "v2"
          })], AY = [CR({
            name: "v3"
          })], IY = [CR({
            name: "p1"
          })], RY = [CR({
            name: "p2"
          })], OY = [CR({
            name: "p3"
          })], gY = [CR({
            name: "pid"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: YY => "v1" in YY,
              get: YY => YY.v1,
              set: (YY, rY) => {
                YY.v1 = rY
              }
            },
            metadata: BY
          }, uY, sY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: YY => "v2" in YY,
              get: YY => YY.v2,
              set: (YY, rY) => {
                YY.v2 = rY
              }
            },
            metadata: BY
          }, iY, yY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: YY => "v3" in YY,
              get: YY => YY.v3,
              set: (YY, rY) => {
                YY.v3 = rY
              }
            },
            metadata: BY
          }, QY, oY), (0, NY.i)(null, null, IY, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: YY => "p1" in YY,
              get: YY => YY.p1,
              set: (YY, rY) => {
                YY.p1 = rY
              }
            },
            metadata: BY
          }, WY, EY), (0, NY.i)(null, null, RY, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: YY => "p2" in YY,
              get: YY => YY.p2,
              set: (YY, rY) => {
                YY.p2 = rY
              }
            },
            metadata: BY
          }, mY, VY), (0, NY.i)(null, null, OY, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: YY => "p3" in YY,
              get: YY => YY.p3,
              set: (YY, rY) => {
                YY.p3 = rY
              }
            },
            metadata: BY
          }, SY, lY), (0, NY.i)(null, null, gY, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: YY => "pid" in YY,
              get: YY => YY.pid,
              set: (YY, rY) => {
                YY.pid = rY
              }
            },
            metadata: BY
          }, TY, eY), (0, NY.i)(null, YY = {
            value: rY
          }, aY, {
            kind: "class",
            name: rY.name,
            metadata: BY
          }, null, vY), rY = YY.value, BY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: BY
          }), (0, NY.j)(rY, vY)
        })(), rY
      })(),
      CO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "components"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.component = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfComponents"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      fO = (() => {
        let YY, rY, DY, FY, AY = [zR({
            ns: DO,
            name: "component"
          })],
          IY = [],
          RY = [],
          OY = [],
          gY = [],
          aY = [];
        rY = class {
          constructor(YY, rY) {
            this.objectid = (0, NY.j)(this, RY, void 0), this.transform = ((0, NY.j)(this, OY), (0, NY.j)(this, gY, void 0)), (0, NY.j)(this, aY), this.objectid = YY, this.transform = rY
          }
        };
        return (0, NY.m)(rY, "ThreeMfComponent"), (() => {
          const vY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "objectid"
          })], FY = [CR({
            name: "transform",
            formatter: SO
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: YY => "objectid" in YY,
              get: YY => YY.objectid,
              set: (YY, rY) => {
                YY.objectid = rY
              }
            },
            metadata: vY
          }, RY, OY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: YY => "transform" in YY,
              get: YY => YY.transform,
              set: (YY, rY) => {
                YY.transform = rY
              }
            },
            metadata: vY
          }, gY, aY), (0, NY.i)(null, YY = {
            value: rY
          }, AY, {
            kind: "class",
            name: rY.name,
            metadata: vY
          }, null, IY), rY = YY.value, vY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vY
          }), (0, NY.j)(rY, IY)
        })(), rY
      })(),
      jO = (() => {
        let YY, rY, DY, FY = [zR({
            ns: DO,
            name: "basematerials"
          })],
          AY = [],
          IY = [],
          RY = [];
        rY = class {
          constructor(YY) {
            this.id = (0, NY.j)(this, IY, void 0), this.base = ((0, NY.j)(this, RY), []), this.id = YY
          }
        };
        return (0, NY.m)(rY, "ThreeMfBaseMaterials"), (() => {
          const OY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "id"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: YY => "id" in YY,
              get: YY => YY.id,
              set: (YY, rY) => {
                YY.id = rY
              }
            },
            metadata: OY
          }, IY, RY), (0, NY.i)(null, YY = {
            value: rY
          }, FY, {
            kind: "class",
            name: rY.name,
            metadata: OY
          }, null, AY), rY = YY.value, OY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OY
          }), (0, NY.j)(rY, AY)
        })(), rY
      })(),
      hO = (() => {
        let YY, rY, DY, FY, AY = [zR({
            ns: DO,
            name: "base"
          })],
          IY = [],
          RY = [],
          OY = [],
          gY = [],
          aY = [];
        rY = class {
          constructor(YY, rY) {
            this.name = (0, NY.j)(this, RY, void 0), this.displaycolor = ((0, NY.j)(this, OY), (0, NY.j)(this, gY, void 0)), (0, NY.j)(this, aY), this.name = YY, this.displaycolor = rY
          }
        };
        return (0, NY.m)(rY, "ThreeMfBase"), (() => {
          const vY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "name"
          })], FY = [CR({
            name: "displaycolor"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: YY => "name" in YY,
              get: YY => YY.name,
              set: (YY, rY) => {
                YY.name = rY
              }
            },
            metadata: vY
          }, RY, OY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: YY => "displaycolor" in YY,
              get: YY => YY.displaycolor,
              set: (YY, rY) => {
                YY.displaycolor = rY
              }
            },
            metadata: vY
          }, gY, aY), (0, NY.i)(null, YY = {
            value: rY
          }, AY, {
            kind: "class",
            name: rY.name,
            metadata: vY
          }, null, IY), rY = YY.value, vY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vY
          }), (0, NY.j)(rY, IY)
        })(), rY
      })(),
      dO = (() => {
        let YY, rY, DY = [zR({
            ns: DO,
            name: "build"
          })],
          FY = [];
        rY = class {
          constructor() {
            this.item = []
          }
        };
        return (0, NY.m)(rY, "ThreeMfBuild"), (() => {
          const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, NY.i)(null, YY = {
            value: rY
          }, DY, {
            kind: "class",
            name: rY.name,
            metadata: AY
          }, null, FY), rY = YY.value, AY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: AY
          }), (0, NY.j)(rY, FY)
        })(), rY
      })(),
      JO = (() => {
        let YY, rY, DY, FY, AY, IY = [zR({
            ns: DO,
            name: "item"
          })],
          RY = [],
          OY = [],
          gY = [],
          aY = [],
          vY = [],
          uY = [],
          sY = [];
        rY = class {
          constructor(YY, rY, DY) {
            this.objectid = (0, NY.j)(this, OY, void 0), this.transform = ((0, NY.j)(this, gY), (0, NY.j)(this, aY, void 0)), this.partnumber = ((0, NY.j)(this, vY), (0, NY.j)(this, uY, void 0)), this.metadatagroup = (0, NY.j)(this, sY), this.objectid = YY, this.transform = rY, this.partnumber = DY
          }
        };
        return (0, NY.m)(rY, "ThreeMfItem"), (() => {
          const iY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          DY = [CR({
            name: "objectid"
          })], FY = [CR({
            name: "transform",
            formatter: SO
          })], AY = [CR({
            name: "partnumber"
          })], (0, NY.i)(null, null, DY, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: YY => "objectid" in YY,
              get: YY => YY.objectid,
              set: (YY, rY) => {
                YY.objectid = rY
              }
            },
            metadata: iY
          }, OY, gY), (0, NY.i)(null, null, FY, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: YY => "transform" in YY,
              get: YY => YY.transform,
              set: (YY, rY) => {
                YY.transform = rY
              }
            },
            metadata: iY
          }, aY, vY), (0, NY.i)(null, null, AY, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: YY => "partnumber" in YY,
              get: YY => YY.partnumber,
              set: (YY, rY) => {
                YY.partnumber = rY
              }
            },
            metadata: iY
          }, uY, sY), (0, NY.i)(null, YY = {
            value: rY
          }, IY, {
            kind: "class",
            name: rY.name,
            metadata: iY
          }, null, RY), rY = YY.value, iY && Object.defineProperty(rY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iY
          }), (0, NY.j)(rY, RY)
        })(), rY
      })();
    class MO {
      constructor(YY, rY) {
        this._object = new BO(YY, rY)
      }
      withName(YY) {
        return this._object.name = YY, this
      }
      withThumbnail(YY) {
        return this._object.thumbnail = YY, this
      }
      withProperty(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = YY, this._object.id = rY, this
      }
      build() {
        return this._object
      }
      reset(YY, rY) {
        this._object = new BO(YY, rY)
      }
    }
    class wO extends MO {
      constructor(YY) {
        super(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IO.model), this._object.content = new CO
      }
      withComponent(YY, rY) {
        return this._object.content.component.push(new fO(YY, rY)), this
      }
    }
    class bO extends MO {
      constructor(YY) {
        super(YY, IO.model)
      }
      withPostProcessHandlers(YY, rY) {
        return this._vh = YY, this._th = rY, this
      }
      withData(YY) {
        return this._object.content = this._buildMesh(YY), this
      }
      withMaterial(YY, rY) {
        return this._object.pid = YY, this._object.pindex = rY, this
      }
      _buildMesh(YY) {
        const rY = this._buildVertices(YY.positions),
          DY = this._buildTriangle(YY.indices);
        return new cO(rY, DY)
      }
      _buildVertices(YY) {
        const rY = new KO;
        if (YY)
          for (let DY = 0; DY < YY.length;) {
            const FY = YY[DY++],
              AY = YY[DY++],
              IY = YY[DY++];
            let RY = new HO(FY, AY, IY);
            this._vh && (RY = this._vh(RY)), rY.vertex.push(RY)
          }
        return rY
      }
      _buildTriangle(YY) {
        const rY = new zO;
        if (YY)
          for (let DY = 0; DY < YY.length;) {
            const FY = YY[DY++],
              AY = YY[DY++],
              IY = YY[DY++];
            let RY = new ZO(FY, AY, IY);
            this._th && (RY = this._th(RY)), rY.triangle.push(RY)
          }
        return rY
      }
    }
    class XO {
      constructor(YY) {
        this._m = new jO(YY)
      }
      withColor(YY, rY) {
        this._m.base = this._m.base ?? [];
        let DY = this._m.base.find((rY => rY.name.toLowerCase() === YY.toLowerCase()));
        return DY ? (DY.displaycolor = this._rgbaToHex(rY), this) : (DY = new hO(YY, this._rgbaToHex(rY)), this._m.base.push(DY), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(YY) {
        const rY = YY => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(YY, 1 / 2.2)))),
          DY = rY(YY.r).toString(16).padStart(2, "0").toUpperCase(),
          FY = rY(YY.g).toString(16).padStart(2, "0").toUpperCase(),
          AY = rY(YY.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof YY.a) {
          return `#${DY}${FY}${AY}${Math.round(Math.min(255,Math.max(0,255*YY.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${DY}${FY}${AY}`
      }
    }
    class qO {
      constructor() {
        this._model = new lO, this._objects = new Map
      }
      withMetaData(YY, rY, DY, FY) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new TO(YY, rY, DY, FY)), this
      }
      withMaterial(YY) {
        return YY instanceof XO && (YY = YY.build()), YY && (this._model.resources = this._model.resources ?? new NO, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(YY)), this
      }
      withMesh(YY) {
        return YY instanceof bO && (YY = YY.build()), this._model.resources = this._model.resources ?? new NO, this._model.resources.object.push(YY), this
      }
      withComponents(YY) {
        return YY instanceof wO && (YY = YY.build()), this._model.resources = this._model.resources ?? new NO, this._model.resources.object.push(YY), this
      }
      withBuild(YY, rY, DY) {
        return this._model.build = this._model.build ?? new dO, this._model.build.item?.push(new JO(YY, rY, DY)), this
      }
      withUnit(YY) {
        return this._model.unit = YY, this
      }
      reset() {
        return this._model = new lO, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    qO.KnownMetaSet = new Set(lO.KnownMeta.map((YY => YY.toLowerCase())));
    class pO {
      withContentType(YY) {
        this._cts || (this._cts = new QO);
        const rY = this._cts.items;
        return rY.some((rY => rY.ext === YY.ext && rY.ct === YY.ct)) || rY.push(YY), this
      }
      withRelationship(YY) {
        this._rs || (this._rs = new WO);
        const rY = this._rs.items;
        return rY.some((rY => rY.id === YY.id)) || rY.push(YY), this.withContentType(new oO("rels", gO.Relationships)), this
      }
      withModel(YY) {
        return YY instanceof qO && (YY = YY.build()), this._m = YY, this.withContentType(new oO("model", gO.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const YY = `${vO}${uO}`;
        if (!this._rs) {
          const rY = `/${YY}`;
          this.withRelationship(new EO("rel0", yO.ThreeDimModel, rY))
        }
        return new mO(this._cts, this._rs, this._m)
      }
    }
    class kO {
      constructor(YY) {
        this._o = YY
      }
      get options() {
        return this._o
      }
      async serializeAsync(YY) {
        const rY = await this.ensureZipLibReadyAsync();
        if (!rY) return;
        const DY = rY.Zip,
          FY = rY.ZipDeflate;
        if (!DY || !FY) throw new Error("fflate Zip / ZipDeflate not available");
        const AY = function(YY, rY, DY) {
          const AY = new FY(rY, {
            level: 6
          });
          YY.add(AY);
          const IY = function(YY) {
              return {
                push: (rY, DY) => YY.push(rY, DY)
              }
            }(AY),
            RY = new rO(IY),
            OY = new tR(RY).dec("1.0", "UTF-8");
          new PR(OY).serialize(DY), RY.finish()
        };
        for (var IY = arguments.length, RY = new Array(IY > 1 ? IY - 1 : 0), OY = 1; OY < IY; OY++) RY[OY - 1] = arguments[OY];
        const gY = this.toDocument(...RY);
        if (!gY) return;
        const aY = new DY(YY);
        AY(aY, iO, gY.contentTypes), AY(aY, `${aO}${sO}`, gY.relationships), AY(aY, `${vO}${uO}`, gY.model), aY.end()
      }
      toDocument() {
        const YY = (new qO).withUnit(this._o?.unit ?? AO.millimeter);
        if (this.options.metadata)
          for (const AY in this.options.metadata) YY.withMetaData(AY, this.options.metadata[AY]);
        for (var rY = arguments.length, DY = new Array(rY), FY = 0; FY < rY; FY++) DY[FY] = arguments[FY];
        return (new pO).withModel(this.toModel(YY, ...DY)).build()
      }
    }
    class GO {
      static async SerializeToMemoryAsync(YY) {
        const rY = new Array;
        let DY = 0;
        for (var FY = arguments.length, AY = new Array(FY > 1 ? FY - 1 : 0), IY = 1; IY < FY; IY++) AY[IY - 1] = arguments[IY];
        if (await YY.serializeAsync((function(YY, FY, AY) {
            rY.push(FY), DY += FY.length
          }), ...AY), !DY) return;
        const RY = new Uint8Array(DY);
        let OY = 0;
        for (const gY of rY) RY.set(gY, OY), OY += gY.length;
        return RY
      }
    }
    class xO {}
    xO.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class nO {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = YY, this._to = rY, this._step = DY, this._i = YY
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const YY = this._i;
        return this._i += this._step, YY
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class PO extends kO {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...PO.DefaultOptions,
          ...YY
        })
      }
      toModel(YY) {
        for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
        DY = DY.filter((YY => YY instanceof aF.d || YY instanceof iY.c));
        const AY = new nO,
          IY = YY,
          RY = new Map,
          OY = this.options.exportInstances ? [] : null;
        for (let gY = 0; gY < DY.length; gY++) {
          const YY = DY[gY];
          if (YY instanceof iY.c) {
            OY?.push(YY);
            continue
          }
          const rY = YY.name || `mesh${gY}`,
            FY = YY.getWorldMatrix(),
            aY = this._handleBabylonTo3mfMatrixTransformToRef(FY, VO.Zero()),
            vY = YY.qm;
          if (void 0 === vY) continue;
          const uY = 1 == vY.length;
          for (let DY = 0; DY < vY.length; DY++) {
            const FY = vY[DY],
              OY = this._extractSubMesh(YY, FY);
            if (OY) {
              const YY = uY ? `${rY}` : `${rY}_${DY}`,
                gY = new bO(AY.next()).withData(OY).withName(YY).build();
              IY.withMesh(gY), IY.withBuild(gY.id, aY), RY.set(FY, gY)
            }
          }
        }
        if (OY && OY.length) {
          const YY = this._groupBy(OY, (YY => YY.vFY));
          for (const [rY, DY] of Array.from(YY.entries()))
            if (DY && DY.length)
              for (let YY = 0; YY < DY.length; YY++) {
                const FY = DY[YY].getWorldMatrix(),
                  AY = rY.qm;
                for (let YY = 0; YY < AY.length; YY++) {
                  const rY = AY[YY],
                    DY = RY.get(rY);
                  DY && IY.withBuild(DY.id, this._handleBabylonTo3mfMatrixTransformToRef(FY, VO.Zero()))
                }
              }
        }
        return IY.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const YY = globalThis;
          return YY.fflate || await AY.Tools.LoadScriptAsync(xO.FFLATEUrl), YY.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(YY, rY) {
        const DY = YY.XIY();
        if (!DY) return;
        const FY = YY.getVerticesData(PO._PositionKind);
        if (!FY) return;
        if (0 == rY.indexStart && rY.indexCount == DY.length) return {
          positions: FY,
          indices: DY
        };
        const AY = rY.indexStart,
          IY = new Map,
          RY = [],
          OY = new Uint32Array(rY.indexCount);
        for (let gY = 0; gY < rY.indexCount; gY++) {
          const YY = DY[AY + gY];
          let rY = IY.get(YY);
          if (void 0 === rY) {
            rY = IY.size, IY.set(YY, rY);
            const DY = 3 * YY;
            RY.push(FY[DY], FY[DY + 1], FY[DY + 2])
          }
          OY[gY] = rY
        }
        return {
          positions: new Float32Array(RY),
          indices: OY
        }
      }
      _groupBy(YY, rY) {
        const DY = new Map;
        for (const FY of YY) {
          const YY = rY(FY),
            AY = DY.get(YY);
          AY ? AY.push(FY) : DY.set(YY, [FY])
        }
        return DY
      }
      _handleBabylonTo3mfMatrixTransformToRef(YY, rY) {
        const DY = YY.multiplyToRef(PO._R_BJS_TO_3MF, JY.e.Zero()).m;
        return rY.values = [DY[0], DY[1], DY[2], DY[4], DY[5], DY[6], DY[8], DY[9], DY[10], DY[12], DY[13], DY[14]], rY
      }
    }
    PO.DefaultOptions = {
      unit: AO.meter,
      exportInstances: !1
    }, PO._PositionKind = "position", PO._R_BJS_TO_3MF = JY.e.RotationX(Math.PI / 2).multiply(JY.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);