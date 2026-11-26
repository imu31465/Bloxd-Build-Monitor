export const id = 249;
export const ids = [249, 254];
export const modules = {
  44532: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU
    });
    var cU = zU(44458),
      yU = zU(41108);
    let QU = !1;

    function AU() {
      QU || (QU = !0, yU.e.prototype._sphericalPolynomialTargetSize = 0, yU.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(yU.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = cU.c.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((UU => {
              this._texture._sphericalPolynomial = UU, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(UU) {
          this._texture && (this._texture._sphericalPolynomial = UU)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  37919: (UU, XU, zU) => {
    zU.d(XU, {
      Color3: () => cU.b,
      e: () => cU.e
    });
    var cU = zU(37923);
    (0, cU.f)()
  },
  38502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(38505);
    class yU {
      static GetPlanes(UU) {
        const XU = [];
        for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
        return yU.GetPlanesToRef(UU, XU), XU
      }
      static GetNearPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
      }
      static GetFarPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
      }
      static GetLeftPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
      }
      static GetRightPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
      }
      static GetTopPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[1], XU.normal.y = zU[7] - zU[5], XU.normal.z = zU[11] - zU[9], XU.d = zU[15] - zU[13], XU.normalize()
      }
      static GetBottomPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[1], XU.normal.y = zU[7] + zU[5], XU.normal.z = zU[11] + zU[9], XU.d = zU[15] + zU[13], XU.normalize()
      }
      static GetPlanesToRef(UU, XU) {
        yU.GetNearPlaneToRef(UU, XU[0]), yU.GetFarPlaneToRef(UU, XU[1]), yU.GetLeftPlaneToRef(UU, XU[2]), yU.GetRightPlaneToRef(UU, XU[3]), yU.GetTopPlaneToRef(UU, XU[4]), yU.GetBottomPlaneToRef(UU, XU[5])
      }
      static IsPointInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; zU++)
          if (XU[zU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  38505: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(37819);
    class yU {
      constructor(UU, XU, zU, yU) {
        this.normal = new cU.q(UU, XU, zU), this.d = yU
      }
      cyU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let UU = this.normal.getHashCode();
        return UU = 397 * UU ^ this.d, UU
      }
      normalize() {
        const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let XU = 0;
        return 0 !== UU && (XU = 1 / UU), this.normal.x *= XU, this.normal.y *= XU, this.normal.z *= XU, this.d *= XU, this
      }
      transform(UU) {
        const XU = yU._TmpMatrix;
        UU.invertToRef(XU);
        const zU = XU.m,
          cU = this.normal.x,
          QU = this.normal.y,
          AU = this.normal.z,
          FU = this.d,
          oU = cU * zU[0] + QU * zU[1] + AU * zU[2] + FU * zU[3],
          DU = cU * zU[4] + QU * zU[5] + AU * zU[6] + FU * zU[7],
          EU = cU * zU[8] + QU * zU[9] + AU * zU[10] + FU * zU[11],
          YU = cU * zU[12] + QU * zU[13] + AU * zU[14] + FU * zU[15];
        return new yU(oU, DU, EU, YU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, XU, zU) {
        const cU = XU.x - UU.x,
          yU = XU.y - UU.y,
          QU = XU.z - UU.z,
          AU = zU.x - UU.x,
          FU = zU.y - UU.y,
          oU = zU.z - UU.z,
          DU = yU * oU - QU * FU,
          EU = QU * AU - cU * oU,
          YU = cU * FU - yU * AU,
          NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
        let IU;
        return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, XU) {
        return cU.q.Dot(this.normal, UU) <= XU
      }
      signedDistanceTo(UU) {
        return cU.q.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new yU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, XU, zU) {
        const cU = new yU(0, 0, 0, 0);
        return cU.copyFromPoints(UU, XU, zU), cU
      }
      static FromPositionAndNormal(UU, XU) {
        const zU = new yU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, XU, zU)
      }
      static FromPositionAndNormalToRef(UU, XU, zU) {
        return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, XU, zU) {
        const yU = -(XU.x * UU.x + XU.y * UU.y + XU.z * UU.z);
        return cU.q.Dot(zU, XU) + yU
      }
    }
    yU._TmpMatrix = cU.e.Identity()
  },
  37814: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Matrix: () => cU.e,
      Quaternion: () => cU.f,
      RegisterMathVector: () => cU.h,
      TmpVectors: () => cU.l,
      Vector2: () => cU.m,
      Sp: () => cU.q,
      Vector4: () => cU.t
    });
    var cU = zU(37819);
    (0, cU.h)()
  },
  38845: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU, zU, cU) {
        this.x = UU, this.y = XU, this.width = zU, this.height = cU
      }
      toGlobal(UU, XU) {
        return new cU(this.x * UU, this.y * XU, this.width * UU, this.height * XU)
      }
      toGlobalToRef(UU, XU, zU) {
        return zU.x = this.x * UU, zU.y = this.y * XU, zU.width = this.width * UU, zU.height = this.height * XU, this
      }
      clone() {
        return new cU(this.x, this.y, this.width, this.height)
      }
    }
  },
  44458: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => DU
    });
    var cU = zU(37819),
      yU = zU(37855),
      QU = zU(41103),
      AU = zU(37825),
      FU = zU(37923);
    class oU {
      constructor(UU, XU, zU, cU) {
        this.name = UU, this.worldAxisForNormal = XU, this.worldAxisForFileX = zU, this.worldAxisForFileY = cU
      }
    }
    class DU {
      static _NearestPow2Floor(UU) {
        return UU <= 1 ? 1 : 1 << Math.floor(Math.log2(UU))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(UU) {
        if (!UU.isCube) return null;
        UU.nS()?.qp().flushFramebuffer();
        const XU = UU.getSize().width,
          zU = UU._sphericalPolynomialTargetSize,
          cU = zU > 0 ? this._NearestPow2Floor(zU) : 0,
          yU = !UU.noMipmap && !0 === UU._texture?.generateMipMaps,
          QU = cU > 0 && cU < XU && yU,
          AU = QU ? Math.max(0, Math.round(Math.log2(XU / cU))) : 0,
          FU = QU ? Math.max(1, Math.floor(XU / Math.pow(2, AU))) : XU,
          oU = UU.readPixels(0, AU, void 0, !1),
          DU = UU.readPixels(1, AU, void 0, !1);
        let EU, YU;
        UU.isRenderTarget ? (EU = UU.readPixels(3, AU, void 0, !1), YU = UU.readPixels(2, AU, void 0, !1)) : (EU = UU.readPixels(2, AU, void 0, !1), YU = UU.readPixels(3, AU, void 0, !1));
        const NU = UU.readPixels(4, AU, void 0, !1),
          IU = UU.readPixels(5, AU, void 0, !1),
          pU = UU.gammaSpace,
          aU = cU > 0 && cU < XU && !QU;
        return new Promise((UU => {
          Promise.all([DU, oU, EU, YU, NU, IU]).then((zU => {
            let [yU, QU, AU, oU, DU, EU] = zU, YU = FU;
            if (aU) {
              const UU = 4;
              yU = this._DownsampleFace(yU, XU, cU, UU), QU = this._DownsampleFace(QU, XU, cU, UU), AU = this._DownsampleFace(AU, XU, cU, UU), oU = this._DownsampleFace(oU, XU, cU, UU), DU = this._DownsampleFace(DU, XU, cU, UU), EU = this._DownsampleFace(EU, XU, cU, UU), YU = cU
            }
            const NU = {
              size: YU,
              right: QU,
              left: yU,
              up: AU,
              down: oU,
              front: DU,
              back: EU,
              format: 5,
              type: yU instanceof Float32Array ? 1 : 0,
              gammaSpace: pU
            };
            UU(this.ConvertCubeMapToSphericalPolynomial(NU))
          }))
        }))
      }
      static _AreaElement(UU, XU) {
        return Math.atan2(UU * XU, Math.sqrt(UU * UU + XU * XU + 1))
      }
      static _DownsampleFace(UU, XU, zU, cU) {
        const yU = UU instanceof Float32Array ? UU : Float32Array.from(UU),
          QU = zU * zU * cU,
          AU = new Float32Array(QU),
          FU = XU / zU,
          oU = 1 / (FU * FU);
        for (let EU = 0; EU < zU; EU++) {
          const UU = Math.floor(EU * FU),
            QU = Math.floor((EU + 1) * FU);
          for (let DU = 0; DU < zU; DU++) {
            const YU = Math.floor(DU * FU),
              NU = Math.floor((DU + 1) * FU),
              IU = (EU * zU + DU) * cU;
            for (let zU = 0; zU < cU; zU++) {
              let FU = 0;
              for (let AU = UU; AU < QU; AU++)
                for (let UU = YU; UU < NU; UU++) FU += yU[(AU * XU + UU) * cU + zU];
              AU[IU + zU] = FU * oU
            }
          }
        }
        if (UU instanceof Float32Array) return AU;
        const DU = new(0, UU.constructor)(QU);
        for (let EU = 0; EU < QU; EU++) DU[EU] = AU[EU] + .5 | 0;
        return DU
      }
      static ConvertCubeMapToSphericalPolynomial(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = XU > 0 ? this._NearestPow2Floor(XU) : 0;
        if (zU > 0 && UU.size > zU) {
          const XU = 5 === UU.format ? 4 : 3,
            cU = ["right", "left", "up", "down", "front", "back"],
            yU = {};
          for (const QU of cU) yU[QU] = this._DownsampleFace(UU[QU], UU.size, zU, XU);
          UU = {
            ...UU,
            ...yU,
            size: zU
          }
        }
        const cU = new QU.b;
        let oU = 0;
        const DU = 2 / UU.size,
          EU = DU,
          YU = .5 * DU,
          NU = YU - 1;
        for (let QU = 0; QU < 6; QU++) {
          const XU = this._FileFaces[QU],
            zU = UU[XU.name];
          let IU = NU;
          const pU = 5 === UU.format ? 4 : 3;
          for (let QU = 0; QU < UU.size; QU++) {
            let aU = NU;
            for (let EU = 0; EU < UU.size; EU++) {
              const NU = XU.worldAxisForFileX.scale(aU).add(XU.worldAxisForFileY.scale(IU)).add(XU.worldAxisForNormal);
              NU.normalize();
              const tU = this._AreaElement(aU - YU, IU - YU) - this._AreaElement(aU - YU, IU + YU) - this._AreaElement(aU + YU, IU - YU) + this._AreaElement(aU + YU, IU + YU);
              let gU = zU[QU * UU.size * pU + EU * pU + 0],
                kU = zU[QU * UU.size * pU + EU * pU + 1],
                GU = zU[QU * UU.size * pU + EU * pU + 2];
              isNaN(gU) && (gU = 0), isNaN(kU) && (kU = 0), isNaN(GU) && (GU = 0), 0 === UU.type && (gU /= 255, kU /= 255, GU /= 255), UU.gammaSpace && (gU = Math.pow((0, yU.Clamp)(gU), AU.h), kU = Math.pow((0, yU.Clamp)(kU), AU.h), GU = Math.pow((0, yU.Clamp)(GU), AU.h));
              const BU = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const UU = Math.max(gU, kU, GU);
                if (UU > BU) {
                  const XU = BU / UU;
                  gU *= XU, kU *= XU, GU *= XU
                }
              } else gU = (0, yU.Clamp)(gU, 0, BU), kU = (0, yU.Clamp)(kU, 0, BU), GU = (0, yU.Clamp)(GU, 0, BU);
              const ZU = new FU.b(gU, kU, GU);
              cU.addLight(NU, ZU, tU), oU += tU, aU += DU
            }
            IU += EU
          }
        }
        const IU = 6 * (4 * Math.PI) / 6 / oU;
        return cU.scaleInPlace(IU), cU.convertIncidentRadianceToIrradiance(), cU.convertIrradianceToLambertianRadiance(), QU.c.FromHarmonics(cU)
      }
    }
    DU._FileFaces = [new oU("right", new cU.q(1, 0, 0), new cU.q(0, 0, -1), new cU.q(0, -1, 0)), new oU("left", new cU.q(-1, 0, 0), new cU.q(0, 0, 1), new cU.q(0, -1, 0)), new oU("up", new cU.q(0, 1, 0), new cU.q(1, 0, 0), new cU.q(0, 0, 1)), new oU("down", new cU.q(0, -1, 0), new cU.q(1, 0, 0), new cU.q(0, 0, -1)), new oU("front", new cU.q(0, 0, 1), new cU.q(1, 0, 0), new cU.q(0, -1, 0)), new oU("back", new cU.q(0, 0, -1), new cU.q(-1, 0, 0), new cU.q(0, -1, 0))], DU.MAX_HDRI_VALUE = 4096, DU.PRESERVE_CLAMPED_COLORS = !1
  },
  44311: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.k,
      e: () => cU.s
    });
    var cU = zU(41152);
    (0, cU.A)()
  },
  38649: (UU, XU, zU) => {
    function cU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const XU = 16 * Math.random() | 0;
        return ("x" === UU ? XU : 3 & XU | 8).toString(16)
      }))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  44507: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU
    });
    var cU = zU(44492),
      yU = zU(44509);
    class QU {
      static ExpandRGBDTexture(UU) {
        const XU = UU._texture;
        if (!XU || !UU.isRGBD) return;
        const yU = XU.qp(),
          QU = yU.getCaps(),
          AU = XU.isReady;
        let FU = !1;
        QU.textureHalfFloatRender && QU.textureHalfFloatLinearFiltering ? (FU = !0, XU.type = 2) : QU.textureFloatRender && QU.textureFloatLinearFiltering && (FU = !0, XU.type = 1), FU && (XU.isReady = !1, XU._isRGBD = !1, XU.invertY = !1);
        const oU = async () => {
          const QU = yU.isWebGPU,
            AU = QU ? 1 : 0;
          XU.isReady = !1, QU ? await zU.e(648).then((() => zU(64051))) : await zU.e(630).then((() => zU(64057)));
          const FU = new cU.c("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, yU, !1, void 0, XU.type, void 0, null, !1, void 0, AU);
          FU.externalTextureSamplerBinding = !0;
          const oU = yU.createRenderTargetTexture(XU.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: XU.samplingMode,
            type: XU.type,
            format: 5
          });
          FU.onEffectCreatedObservable.addOnce((zU => {
            zU.executeWhenCompiled((() => {
              FU.onApply = UU => {
                UU._bindTexture("textureSampler", XU), UU.setFloat2("scale", 1, 1)
              }, UU.nS()?.postProcessManager.directRender([FU], oU, !0), yU.restoreDefaultFramebuffer(), yU._releaseTexture(XU), FU && FU.dispose(), oU._swapAndDie(XU), XU.isReady = !0
            }))
          }))
        };
        FU && (AU ? oU() : UU.onLoadObservable.addOnce(oU))
      }
      static async EncodeTextureToRGBD(UU, XU) {
        let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return XU.qp().isWebGPU ? await zU.e(649).then((() => zU(64078))) : await zU.e(631).then((() => zU(64069))), await (0, yU.c)("rgbdEncode", UU, XU, cU, 1, 5)
      }
    }
  },
  63941: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AsyncLoop: () => cU.c,
      RegisterTools: () => cU.g,
      Tools: () => cU.j,
      className: () => cU.k
    });
    var cU = zU(41205);
    (0, cU.g)()
  },
  44544: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    class cU {
      constructor(UU) {
        this._pendingActions = new Array, this._workerInfos = UU.map((UU => ({
          workerPromise: Promise.resolve(UU),
          idle: !0
        })))
      }
      dispose() {
        for (const UU of this._workerInfos) UU.workerPromise.then((UU => {
          UU.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(UU) {
        this._executeOnIdleWorker(UU) || this._pendingActions.push(UU)
      }
      _executeOnIdleWorker(UU) {
        for (const XU of this._workerInfos)
          if (XU.idle) return this._execute(XU, UU), !0;
        return !1
      }
      _execute(UU, XU) {
        UU.idle = !1, UU.workerPromise.then((zU => {
          XU(zU, (() => {
            const XU = this._pendingActions.shift();
            XU ? this._execute(UU, XU) : UU.idle = !0
          }))
        }))
      }
    }
    class yU extends cU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.DefaultOptions;
        super([]), this._maxWorkers = UU, this._createWorkerAsync = XU, this._options = zU
      }
      push(UU) {
        if (!this._executeOnIdleWorker(UU))
          if (this._workerInfos.length < this._maxWorkers) {
            const XU = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(XU), this._execute(XU, UU)
          } else this._pendingActions.push(UU)
      }
      _execute(UU, XU) {
        UU.timeoutId && (clearTimeout(UU.timeoutId), delete UU.timeoutId), super._execute(UU, ((zU, cU) => {
          XU(zU, (() => {
            cU(), UU.idle && (UU.timeoutId = setTimeout((() => {
              UU.workerPromise.then((UU => {
                UU.terminate()
              }));
              const XU = this._workerInfos.indexOf(UU); - 1 !== XU && this._workerInfos.splice(XU, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    yU.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  63969: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AbstractThreeMfSerializer: () => lF,
      BVHExporter: () => dA,
      ContentTypeFileName: () => IF,
      DefaultXmlSerializerFormatOptions: () => VA,
      DefaultXmlSerializerNumberOptions: () => vA,
      EXT_lights_area: () => ty,
      EXT_mesh_gpu_instancing: () => Hc,
      EXT_texture_avif: () => yA,
      EXT_texture_webp: () => UA,
      GLTF2Export: () => uc,
      GLTFData: () => DU,
      GetXmlFieldMeta: () => uA,
      GetXmlName: () => fA,
      IsQualifiedName: () => LA,
      KHR_draco_mesh_compression: () => bc,
      KHR_interactivity: () => Dy,
      KHR_lights_punctual: () => Qy,
      KHR_materials_anisotropy: () => By,
      KHR_materials_clearcoat: () => dy,
      KHR_materials_coat: () => Oy,
      KHR_materials_diffuse_roughness: () => fQ,
      KHR_materials_diffuse_transmission: () => Hy,
      KHR_materials_dispersion: () => sy,
      KHR_materials_emissive_strength: () => xy,
      KHR_materials_fuzz: () => EQ,
      KHR_materials_ior: () => by,
      KHR_materials_iridescence: () => XQ,
      KHR_materials_openpbr: () => vQ,
      KHR_materials_sheen: () => QQ,
      KHR_materials_specular: () => pQ,
      KHR_materials_transmission: () => kQ,
      KHR_materials_unlit: () => PQ,
      KHR_materials_volume: () => eQ,
      KHR_materials_volume_scatter: () => OQ,
      KHR_texture_basisu: () => KQ,
      KHR_texture_transform: () => mQ,
      Known3mfRelationshipTypes: () => pF,
      KnownI3mfContentType: () => oF,
      Matrix3d: () => BF,
      MatrixFormatter: () => ZF,
      ModelFileName: () => YF,
      NumberFormatter: () => mA,
      OBJExport: () => AU,
      Object3dDirName: () => EF,
      OpenXmlContentTypesNamespace: () => AF,
      OpenXmlRelationshipsNamespace: () => FF,
      RegisterEXT_lights_area: () => ky,
      RegisterEXT_mesh_gpu_instancing: () => vc,
      RegisterEXT_texture_avif: () => AA,
      RegisterEXT_texture_webp: () => zA,
      RegisterKHR_draco_mesh_compression: () => hc,
      RegisterKHR_interactivity: () => Yy,
      RegisterKHR_lights_punctual: () => Fy,
      RegisterKHR_materials_anisotropy: () => Ry,
      RegisterKHR_materials_clearcoat: () => ey,
      RegisterKHR_materials_coat: () => ry,
      RegisterKHR_materials_diffuse_roughness: () => HQ,
      RegisterKHR_materials_diffuse_transmission: () => vy,
      RegisterKHR_materials_dispersion: () => my,
      RegisterKHR_materials_emissive_strength: () => jy,
      RegisterKHR_materials_fuzz: () => NQ,
      RegisterKHR_materials_ior: () => hy,
      RegisterKHR_materials_iridescence: () => cQ,
      RegisterKHR_materials_openpbr: () => sQ,
      RegisterKHR_materials_sheen: () => FQ,
      RegisterKHR_materials_specular: () => tQ,
      RegisterKHR_materials_transmission: () => BQ,
      RegisterKHR_materials_unlit: () => dQ,
      RegisterKHR_materials_volume: () => wQ,
      RegisterKHR_materials_volume_scatter: () => rQ,
      RegisterKHR_texture_basisu: () => TQ,
      RegisterKHR_texture_transform: () => xQ,
      RelationshipDirName: () => DF,
      RelationshipFileName: () => NF,
      ResolveFormatOptions: () => nA,
      ResolveNumberOptions: () => sA,
      STLExport: () => FA,
      ST_ObjectType: () => QF,
      ST_Unit: () => yF,
      StringXmlWriter: () => UF,
      ThreeDimModelNamespace: () => zF,
      ThreeMf: () => xF,
      ThreeMfBase: () => fF,
      ThreeMfBaseMaterials: () => uF,
      ThreeMfBuild: () => iF,
      ThreeMfComponent: () => rF,
      ThreeMfComponents: () => SF,
      ThreeMfComponentsBuilder: () => vF,
      ThreeMfContentType: () => tF,
      ThreeMfContentTypes: () => aF,
      ThreeMfDocument: () => GF,
      ThreeMfDocumentBuilder: () => mF,
      ThreeMfItem: () => HF,
      ThreeMfMaterialBuilder: () => sF,
      ThreeMfMesh: () => eF,
      ThreeMfMeshBuilder: () => VF,
      ThreeMfMeta: () => PF,
      ThreeMfMetadataGroup: () => WF,
      ThreeMfModel: () => RF,
      ThreeMfModelBuilder: () => nF,
      ThreeMfObject: () => LF,
      ThreeMfObjectBuilder: () => MF,
      ThreeMfRelationship: () => kF,
      ThreeMfRelationships: () => gF,
      ThreeMfResources: () => dF,
      ThreeMfSerializer: () => KF,
      ThreeMfSerializerGlobalConfiguration: () => JF,
      ThreeMfTriangle: () => OF,
      ThreeMfTriangles: () => qF,
      ThreeMfVertex: () => wF,
      ThreeMfVertices: () => CF,
      ToQualifiedString: () => MA,
      TokenType: () => TA,
      TriangleSetsNamespace: () => cF,
      USDZExportAsync: () => PA,
      Utf8XmlWriterToBytes: () => XF,
      XmlAttr: () => SA,
      XmlBuilder: () => hA,
      XmlElem: () => rA,
      XmlIgnore: () => OA,
      XmlName: () => qA,
      XmlNameToParts: () => HA,
      XmlSerializer: () => KA,
      _ConvertToGLTFPBRMetallicRoughness: () => dz,
      _SolveMetallic: () => Wz,
      __IGLTFExporterExtension: () => FU
    });
    var cU = zU(37814),
      yU = zU(63941),
      QU = zU(41374);
    class AU {
      static OBJ(UU, XU, zU, AU) {
        const FU = [];
        let oU = 1,
          DU = 1;
        XU && (zU || (zU = "mat"), FU.push("mtllib " + zU + ".mtl"));
        for (let EU = 0; EU < UU.length; EU++) {
          const zU = UU[EU],
            YU = zU.name || `mesh${EU}}`;
          FU.push(`o ${YU}`);
          let NU = null;
          if (AU) {
            const UU = zU.computeWorldMatrix(!0);
            NU = new cU.Matrix, UU.invertToRef(NU), zU.bakeTransformIntoVertices(UU)
          }
          if (XU) {
            const UU = zU.material;
            UU && FU.push("usemtl " + UU.id)
          }
          const IU = zU.geometry;
          if (!IU) {
            yU.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const pU = IU.getVerticesData("position"),
            aU = IU.getVerticesData("normal"),
            tU = IU.getVerticesData("uv"),
            gU = IU.yyU();
          let kU = 0,
            GU = 0;
          if (!pU || !gU) {
            yU.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const BU = UU[0].nS().useRightHandedSystem ? 1 : -1;
          for (let UU = 0; UU < pU.length; UU += 3) FU.push("v " + pU[UU] * BU + " " + pU[UU + 1] + " " + pU[UU + 2]), kU++;
          if (null != aU)
            for (let UU = 0; UU < aU.length; UU += 3) FU.push("vn " + aU[UU] * BU + " " + aU[UU + 1] + " " + aU[UU + 2]);
          if (null != tU)
            for (let UU = 0; UU < tU.length; UU += 2) FU.push("vt " + tU[UU] + " " + tU[UU + 1]), GU++;
          const ZU = ["", "", ""],
            RU = (zU.material || zU.nS().defaultMaterial)._getEffectiveOrientation(zU),
            [PU, WU] = RU === QU.c.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let UU = 0; UU < gU.length; UU += 3) {
            const XU = [String(gU[UU] + oU), String(gU[UU + PU] + oU), String(gU[UU + WU] + oU)],
              zU = [String(gU[UU] + DU), String(gU[UU + PU] + DU), String(gU[UU + WU] + DU)],
              cU = XU,
              yU = null != tU ? zU : ZU,
              QU = null != aU ? XU : ZU;
            FU.push("f " + cU[0] + "/" + yU[0] + "/" + QU[0] + " " + cU[1] + "/" + yU[1] + "/" + QU[1] + " " + cU[2] + "/" + yU[2] + "/" + QU[2])
          }
          AU && NU && zU.bakeTransformIntoVertices(NU), oU += kU, DU += GU
        }
        return FU.join("\n")
      }
      static MTL(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const zU = [],
          cU = UU.material;
        zU.push("newmtl " + XU), zU.push("  Ns " + cU.specularPower.toFixed(4)), zU.push("  Ni 1.5000"), zU.push("  d " + cU.alpha.toFixed(4)), zU.push("  Tr 0.0000"), zU.push("  Tf 1.0000 1.0000 1.0000"), zU.push("  illum 2"), zU.push("  Ka " + cU.ambientColor.r.toFixed(4) + " " + cU.ambientColor.g.toFixed(4) + " " + cU.ambientColor.b.toFixed(4)), zU.push("  Kd " + cU.diffuseColor.r.toFixed(4) + " " + cU.diffuseColor.g.toFixed(4) + " " + cU.diffuseColor.b.toFixed(4)), zU.push("  Ks " + cU.specularColor.r.toFixed(4) + " " + cU.specularColor.g.toFixed(4) + " " + cU.specularColor.b.toFixed(4)), zU.push("  Ke " + cU.emissiveColor.r.toFixed(4) + " " + cU.emissiveColor.g.toFixed(4) + " " + cU.emissiveColor.b.toFixed(4));
        cU.ambientTexture && zU.push("  map_Ka " + cU.ambientTexture.name), cU.diffuseTexture && zU.push("  map_Kd " + cU.diffuseTexture.name), cU.specularTexture && zU.push("  map_Ks " + cU.specularTexture.name), cU.bumpTexture && zU.push("  map_bump -imfchan z " + cU.bumpTexture.name), cU.opacityTexture && zU.push("  map_d " + cU.opacityTexture.name);
        return zU.join("\n")
      }
    }
    var FU = 0,
      oU = zU(44311);
    class DU {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const UU in this.files) {
          const XU = this.files[UU],
            zU = new Blob([XU], {
              type: (0, oU.d)(UU)
            });
          yU.Tools.Download(zU, UU)
        }
      }
    }
    var EU = zU(42261),
      YU = zU(42205),
      NU = zU(44307),
      IU = zU(42215),
      pU = zU(40929),
      aU = zU(37841),
      tU = zU(37919),
      gU = zU(37855);
    const kU = gU.HighestCommonFactor,
      GU = {
        ...gU,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: kU
      };
    var BU = zU(44509),
      ZU = zU(42242),
      RU = zU(44262),
      PU = zU(44270),
      WU = zU(44529);
    (0, WU.RegisterDumpTools)();
    var dU = zU(41113),
      LU = zU(41121),
      eU = zU(39493),
      CU = zU(41210),
      wU = zU(41557),
      qU = zU(44507);
    let OU = 0;
    const SU = (UU, XU, zU, cU) => {
        if (!UU[zU]) {
          const yU = UU.useDelayedTextureLoading;
          UU.useDelayedTextureLoading = !1;
          const QU = UU._blockEntityCollection;
          UU._blockEntityCollection = !1;
          const AU = wU.e.CreateFromBase64String(XU, cU + OU++, UU, !0, !1, wU.e.BILINEAR_SAMPLINGMODE);
          UU._blockEntityCollection = QU;
          const FU = UU.qp().getLoadedTexturesCache(),
            oU = FU.indexOf(AU.getInternalTexture()); - 1 !== oU && FU.splice(oU, 1), AU.isRGBD = !0, AU.wrapU = wU.e.CLAMP_ADDRESSMODE, AU.wrapV = wU.e.CLAMP_ADDRESSMODE, UU[zU] = AU, UU.useDelayedTextureLoading = yU, qU.e.ExpandRGBDTexture(AU);
          const DU = UU.qp().wp.add((() => {
            AU.isRGBD = !0;
            const XU = UU.onBeforeRenderObservable.add((() => {
              AU.isReady() && (UU.onBeforeRenderObservable.remove(XU), qU.e.ExpandRGBDTexture(AU))
            }))
          }));
          UU.bS.add((() => {
            UU.qp().wp.remove(DU)
          }))
        }
        return UU[zU]
      },
      rU = UU => SU(UU, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      uU = UU => SU(UU, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      fU = UU => SU(UU, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var iU = zU(41202),
      HU = zU(37819),
      MU = zU(41237),
      vU = zU(41366),
      VU = zU(41436);
    class sU extends vU.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let nU = (() => {
      var UU, XU, zU, cU, yU, QU, AU, FU, oU, DU;
      let EU, YU, NU, IU, pU, aU, tU, gU, kU, GU = VU.e,
        BU = [],
        ZU = [],
        RU = [],
        PU = [],
        WU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [];
      return UU = class extends GU {
        get useEnergyConservation() {
          return (0, dU.e)(this, XU, "f")
        }
        set useEnergyConservation(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, dU.e)(this, zU, "f")
        }
        set useSmithVisibilityHeightCorrelated(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get useSphericalHarmonics() {
          return (0, dU.e)(this, cU, "f")
        }
        set useSphericalHarmonics(UU) {
          (0, dU.f)(this, cU, UU, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, dU.e)(this, yU, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(UU) {
          (0, dU.f)(this, yU, UU, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, dU.e)(this, QU, "f")
        }
        set mixIblRadianceWithIrradiance(UU) {
          (0, dU.f)(this, QU, UU, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, dU.e)(this, AU, "f")
        }
        set useLegacySpecularEnergyConservation(UU) {
          (0, dU.f)(this, AU, UU, "f")
        }
        get baseDiffuseModel() {
          return (0, dU.e)(this, FU, "f")
        }
        set baseDiffuseModel(UU) {
          (0, dU.f)(this, FU, UU, "f")
        }
        get dielectricSpecularModel() {
          return (0, dU.e)(this, oU, "f")
        }
        set dielectricSpecularModel(UU) {
          (0, dU.f)(this, oU, UU, "f")
        }
        get conductorSpecularModel() {
          return (0, dU.e)(this, DU, "f")
        }
        set conductorSpecularModel(UU) {
          (0, dU.f)(this, DU, UU, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(EU) {
          let YU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(EU, "PBRBRDF", 90, new sU, YU), this._useEnergyConservation = UU.DEFAULT_USE_ENERGY_CONSERVATION, XU.set(this, (0, dU.n)(this, BU, UU.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, dU.n)(this, ZU), UU.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), zU.set(this, (0, dU.n)(this, RU, UU.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, dU.n)(this, PU), UU.DEFAULT_USE_SPHERICAL_HARMONICS), cU.set(this, (0, dU.n)(this, WU, UU.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, dU.n)(this, eU), UU.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), yU.set(this, (0, dU.n)(this, CU, UU.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, dU.n)(this, wU), UU.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), QU.set(this, (0, dU.n)(this, qU, UU.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, dU.n)(this, OU), UU.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), AU.set(this, (0, dU.n)(this, SU, UU.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, dU.n)(this, rU), UU.DEFAULT_DIFFUSE_MODEL), FU.set(this, (0, dU.n)(this, uU, UU.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, dU.n)(this, fU), UU.DEFAULT_DIELECTRIC_SPECULAR_MODEL), oU.set(this, (0, dU.n)(this, iU, UU.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, dU.n)(this, HU), UU.DEFAULT_CONDUCTOR_SPECULAR_MODEL), DU.set(this, (0, dU.n)(this, MU, UU.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, dU.n)(this, vU), this._internalMarkAllSubMeshesAsMiscDirty = EU._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(UU) {
          UU.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, UU.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, UU.SPHERICAL_HARMONICS = this._useSphericalHarmonics, UU.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, UU.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, UU.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, UU.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, UU.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, UU.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, yU = new WeakMap, QU = new WeakMap, AU = new WeakMap, FU = new WeakMap, oU = new WeakMap, DU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(GU[Symbol.metadata] ?? null) : void 0;
        EU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], YU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], NU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], IU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], pU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], aU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], tU = [(0, LU.I)("baseDiffuseModel"), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], gU = [(0, LU.I)("dielectricSpecularModel"), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], kU = [(0, LU.I)("conductorSpecularModel"), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], (0, dU.j)(UU, null, EU, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: UU => "useEnergyConservation" in UU,
            get: UU => UU.useEnergyConservation,
            set: (UU, XU) => {
              UU.useEnergyConservation = XU
            }
          },
          metadata: XU
        }, BU, ZU), (0, dU.j)(UU, null, YU, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSmithVisibilityHeightCorrelated" in UU,
            get: UU => UU.useSmithVisibilityHeightCorrelated,
            set: (UU, XU) => {
              UU.useSmithVisibilityHeightCorrelated = XU
            }
          },
          metadata: XU
        }, RU, PU), (0, dU.j)(UU, null, NU, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSphericalHarmonics" in UU,
            get: UU => UU.useSphericalHarmonics,
            set: (UU, XU) => {
              UU.useSphericalHarmonics = XU
            }
          },
          metadata: XU
        }, WU, eU), (0, dU.j)(UU, null, IU, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSpecularGlossinessInputEnergyConservation" in UU,
            get: UU => UU.useSpecularGlossinessInputEnergyConservation,
            set: (UU, XU) => {
              UU.useSpecularGlossinessInputEnergyConservation = XU
            }
          },
          metadata: XU
        }, CU, wU), (0, dU.j)(UU, null, pU, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: UU => "mixIblRadianceWithIrradiance" in UU,
            get: UU => UU.mixIblRadianceWithIrradiance,
            set: (UU, XU) => {
              UU.mixIblRadianceWithIrradiance = XU
            }
          },
          metadata: XU
        }, qU, OU), (0, dU.j)(UU, null, aU, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLegacySpecularEnergyConservation" in UU,
            get: UU => UU.useLegacySpecularEnergyConservation,
            set: (UU, XU) => {
              UU.useLegacySpecularEnergyConservation = XU
            }
          },
          metadata: XU
        }, SU, rU), (0, dU.j)(UU, null, tU, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseDiffuseModel" in UU,
            get: UU => UU.baseDiffuseModel,
            set: (UU, XU) => {
              UU.baseDiffuseModel = XU
            }
          },
          metadata: XU
        }, uU, fU), (0, dU.j)(UU, null, gU, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: UU => "dielectricSpecularModel" in UU,
            get: UU => UU.dielectricSpecularModel,
            set: (UU, XU) => {
              UU.dielectricSpecularModel = XU
            }
          },
          metadata: XU
        }, iU, HU), (0, dU.j)(UU, null, kU, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: UU => "conductorSpecularModel" in UU,
            get: UU => UU.conductorSpecularModel,
            set: (UU, XU) => {
              UU.conductorSpecularModel = XU
            }
          },
          metadata: XU
        }, MU, vU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU.DEFAULT_USE_ENERGY_CONSERVATION = !0, UU.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, UU.DEFAULT_USE_SPHERICAL_HARMONICS = !0, UU.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, UU.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, UU.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, UU.DEFAULT_DIFFUSE_MODEL = 0, UU.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, UU.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, UU
    })();
    var mU = zU(41355),
      lU = zU(37923),
      xU = zU(41358),
      JU = zU(41214),
      jU = zU(41415),
      KU = zU(41413),
      bU = zU(41422),
      TU = zU(41400);
    class hU extends vU.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let UX = (() => {
      var UU, XU, zU, cU, yU, QU, AU, FU, oU, DU;
      let EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU = VU.e,
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [],
        sU = [],
        nU = [],
        mU = [],
        xU = [],
        JU = [],
        jU = [],
        bU = [],
        UX = [],
        XX = [],
        zX = [],
        cX = [],
        yX = [],
        QX = [],
        AX = [],
        FX = [];
      return UU = class extends WU {
        get isEnabled() {
          return (0, dU.e)(this, XU, "f")
        }
        set isEnabled(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        get indexOfRefraction() {
          return (0, dU.e)(this, zU, "f")
        }
        set indexOfRefraction(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get texture() {
          return (0, dU.e)(this, cU, "f")
        }
        set texture(UU) {
          (0, dU.f)(this, cU, UU, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, dU.e)(this, yU, "f")
        }
        set useRoughnessFromMainTexture(UU) {
          (0, dU.f)(this, yU, UU, "f")
        }
        get textureRoughness() {
          return (0, dU.e)(this, QU, "f")
        }
        set textureRoughness(UU) {
          (0, dU.f)(this, QU, UU, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, dU.e)(this, AU, "f")
        }
        set remapF0OnInterfaceChange(UU) {
          (0, dU.f)(this, AU, UU, "f")
        }
        get bumpTexture() {
          return (0, dU.e)(this, FU, "f")
        }
        set bumpTexture(UU) {
          (0, dU.f)(this, FU, UU, "f")
        }
        get isTintEnabled() {
          return (0, dU.e)(this, oU, "f")
        }
        set isTintEnabled(UU) {
          (0, dU.f)(this, oU, UU, "f")
        }
        get tintTexture() {
          return (0, dU.e)(this, DU, "f")
        }
        set tintTexture(UU) {
          (0, dU.f)(this, DU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(EU) {
          let YU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(EU, "PBRClearCoat", 100, new hU, YU), this._isEnabled = !1, XU.set(this, (0, dU.n)(this, eU, !1)), this.intensity = ((0, dU.n)(this, CU), (0, dU.n)(this, wU, 1)), this.roughness = ((0, dU.n)(this, qU), (0, dU.n)(this, OU, 0)), this._indexOfRefraction = ((0, dU.n)(this, SU), UU._DefaultIndexOfRefraction), zU.set(this, (0, dU.n)(this, rU, UU._DefaultIndexOfRefraction)), this._texture = ((0, dU.n)(this, uU), null), cU.set(this, (0, dU.n)(this, fU, null)), this._useRoughnessFromMainTexture = ((0, dU.n)(this, iU), !0), yU.set(this, (0, dU.n)(this, HU, !0)), this._textureRoughness = ((0, dU.n)(this, MU), null), QU.set(this, (0, dU.n)(this, vU, null)), this._remapF0OnInterfaceChange = ((0, dU.n)(this, sU), !0), AU.set(this, (0, dU.n)(this, nU, !0)), this._bumpTexture = ((0, dU.n)(this, mU), null), FU.set(this, (0, dU.n)(this, xU, null)), this._isTintEnabled = ((0, dU.n)(this, JU), !1), oU.set(this, (0, dU.n)(this, jU, !1)), this.tintColor = ((0, dU.n)(this, bU), (0, dU.n)(this, UX, lU.b.White())), this.tintColorAtDistance = ((0, dU.n)(this, XX), (0, dU.n)(this, zX, 1)), this.tintThickness = ((0, dU.n)(this, cX), (0, dU.n)(this, yX, 1)), this._tintTexture = ((0, dU.n)(this, QX), null), DU.set(this, (0, dU.n)(this, AX, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, dU.n)(this, FX), this._internalMarkAllSubMeshesAsTexturesDirty = EU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, XU, zU) {
          if (!this._isEnabled) return !0;
          const cU = this._material._disableBumpMap;
          if (UU._areTexturesDirty && XU.texturesEnabled) {
            if (this._texture && KU.b.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && KU.b.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (zU.getCaps().standardDerivatives && this._bumpTexture && KU.b.ClearCoatBumpTextureEnabled && !cU && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && KU.b.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(XU, zU) {
          this._isEnabled ? (XU.CLEARCOAT = !0, XU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, XU.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, XU._areTexturesDirty && zU.texturesEnabled && (this._texture && KU.b.ClearCoatTextureEnabled ? (0, TU.Z)(this._texture, XU, "CLEARCOAT_TEXTURE") : XU.CLEARCOAT_TEXTURE = !1, this._textureRoughness && KU.b.ClearCoatTextureEnabled ? (0, TU.Z)(this._textureRoughness, XU, "CLEARCOAT_TEXTURE_ROUGHNESS") : XU.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && KU.b.ClearCoatBumpTextureEnabled ? (0, TU.Z)(this._bumpTexture, XU, "CLEARCOAT_BUMP") : XU.CLEARCOAT_BUMP = !1, XU.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === UU._DefaultIndexOfRefraction, this._isTintEnabled ? (XU.CLEARCOAT_TINT = !0, this._tintTexture && KU.b.ClearCoatTintTextureEnabled ? ((0, TU.Z)(this._tintTexture, XU, "CLEARCOAT_TINT_TEXTURE"), XU.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : XU.CLEARCOAT_TINT_TEXTURE = !1) : (XU.CLEARCOAT_TINT = !1, XU.CLEARCOAT_TINT_TEXTURE = !1))) : (XU.CLEARCOAT = !1, XU.CLEARCOAT_TEXTURE = !1, XU.CLEARCOAT_TEXTURE_ROUGHNESS = !1, XU.CLEARCOAT_BUMP = !1, XU.CLEARCOAT_TINT = !1, XU.CLEARCOAT_TINT_TEXTURE = !1, XU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, XU.CLEARCOAT_DEFAULTIOR = !1, XU.CLEARCOAT_TEXTUREDIRECTUV = 0, XU.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, XU.CLEARCOAT_BUMPDIRECTUV = 0, XU.CLEARCOAT_REMAP_F0 = !1, XU.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, XU.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(UU, XU, zU, cU) {
          if (!this._isEnabled) return;
          const yU = cU.materialDefines,
            QU = this._material.isFrozen,
            AU = this._material._disableBumpMap,
            FU = this._material._invertNormalMapX,
            oU = this._material._invertNormalMapY;
          if (!UU.useUbo || !QU || !UU.isSync) {
            (this._texture || this._textureRoughness) && KU.b.ClearCoatTextureEnabled && (UU.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, TU.B)(this._texture, UU, "clearCoat"), this._textureRoughness && !yU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, TU.B)(this._textureRoughness, UU, "clearCoatRoughness")), this._bumpTexture && zU.getCaps().standardDerivatives && KU.b.ClearCoatTextureEnabled && !AU && (UU.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, TU.B)(this._bumpTexture, UU, "clearCoatBump"), XU._mirroredCameraPosition ? UU.updateFloat2("vClearCoatTangentSpaceParams", FU ? 1 : -1, oU ? 1 : -1) : UU.updateFloat2("vClearCoatTangentSpaceParams", FU ? -1 : 1, oU ? -1 : 1)), this._tintTexture && KU.b.ClearCoatTintTextureEnabled && (UU.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, TU.B)(this._tintTexture, UU, "clearCoatTint")), UU.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const cU = 1 - this._indexOfRefraction,
              QU = 1 + this._indexOfRefraction,
              DU = Math.pow(-cU / QU, 2),
              EU = 1 / this._indexOfRefraction;
            UU.updateFloat4("vClearCoatRefractionParams", DU, EU, cU, QU), this._isTintEnabled && (UU.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), UU.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          XU.texturesEnabled && (this._texture && KU.b.ClearCoatTextureEnabled && UU.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !yU.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && KU.b.ClearCoatTextureEnabled && UU.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && zU.getCaps().standardDerivatives && KU.b.ClearCoatBumpTextureEnabled && !AU && UU.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && KU.b.ClearCoatTintTextureEnabled && UU.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(UU) {
          return this._texture === UU || (this._textureRoughness === UU || (this._bumpTexture === UU || this._tintTexture === UU))
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture), this._textureRoughness && UU.push(this._textureRoughness), this._bumpTexture && UU.push(this._bumpTexture), this._tintTexture && UU.push(this._tintTexture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && UU.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && UU.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && UU.push(this._tintTexture)
        }
        dispose(UU) {
          UU && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(UU, XU, zU) {
          return UU.CLEARCOAT_BUMP && XU.addFallback(zU++, "CLEARCOAT_BUMP"), UU.CLEARCOAT_TINT && XU.addFallback(zU++, "CLEARCOAT_TINT"), UU.CLEARCOAT && XU.addFallback(zU++, "CLEARCOAT"), zU
        }
        getSamplers(UU) {
          UU.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, yU = new WeakMap, QU = new WeakMap, AU = new WeakMap, FU = new WeakMap, oU = new WeakMap, DU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(WU[Symbol.metadata] ?? null) : void 0;
        EU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], YU = [(0, LU.I)()], NU = [(0, LU.I)()], IU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], pU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], tU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], gU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], kU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], BU = [(0, LU.m)()], ZU = [(0, LU.I)()], RU = [(0, LU.I)()], PU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], (0, dU.j)(UU, null, EU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, XU) => {
              UU.isEnabled = XU
            }
          },
          metadata: XU
        }, eU, CU), (0, dU.j)(UU, null, IU, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "indexOfRefraction" in UU,
            get: UU => UU.indexOfRefraction,
            set: (UU, XU) => {
              UU.indexOfRefraction = XU
            }
          },
          metadata: XU
        }, rU, uU), (0, dU.j)(UU, null, pU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, XU) => {
              UU.texture = XU
            }
          },
          metadata: XU
        }, fU, iU), (0, dU.j)(UU, null, aU, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMainTexture" in UU,
            get: UU => UU.useRoughnessFromMainTexture,
            set: (UU, XU) => {
              UU.useRoughnessFromMainTexture = XU
            }
          },
          metadata: XU
        }, HU, MU), (0, dU.j)(UU, null, tU, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "textureRoughness" in UU,
            get: UU => UU.textureRoughness,
            set: (UU, XU) => {
              UU.textureRoughness = XU
            }
          },
          metadata: XU
        }, vU, sU), (0, dU.j)(UU, null, gU, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: UU => "remapF0OnInterfaceChange" in UU,
            get: UU => UU.remapF0OnInterfaceChange,
            set: (UU, XU) => {
              UU.remapF0OnInterfaceChange = XU
            }
          },
          metadata: XU
        }, nU, mU), (0, dU.j)(UU, null, kU, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "bumpTexture" in UU,
            get: UU => UU.bumpTexture,
            set: (UU, XU) => {
              UU.bumpTexture = XU
            }
          },
          metadata: XU
        }, xU, JU), (0, dU.j)(UU, null, GU, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isTintEnabled" in UU,
            get: UU => UU.isTintEnabled,
            set: (UU, XU) => {
              UU.isTintEnabled = XU
            }
          },
          metadata: XU
        }, jU, bU), (0, dU.j)(UU, null, PU, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintTexture" in UU,
            get: UU => UU.tintTexture,
            set: (UU, XU) => {
              UU.tintTexture = XU
            }
          },
          metadata: XU
        }, AX, FX), (0, dU.j)(null, null, YU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, XU) => {
              UU.intensity = XU
            }
          },
          metadata: XU
        }, wU, qU), (0, dU.j)(null, null, NU, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughness" in UU,
            get: UU => UU.roughness,
            set: (UU, XU) => {
              UU.roughness = XU
            }
          },
          metadata: XU
        }, OU, SU), (0, dU.j)(null, null, BU, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColor" in UU,
            get: UU => UU.tintColor,
            set: (UU, XU) => {
              UU.tintColor = XU
            }
          },
          metadata: XU
        }, UX, XX), (0, dU.j)(null, null, ZU, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColorAtDistance" in UU,
            get: UU => UU.tintColorAtDistance,
            set: (UU, XU) => {
              UU.tintColorAtDistance = XU
            }
          },
          metadata: XU
        }, zX, cX), (0, dU.j)(null, null, RU, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintThickness" in UU,
            get: UU => UU.tintThickness,
            set: (UU, XU) => {
              UU.tintThickness = XU
            }
          },
          metadata: XU
        }, yX, QX), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU._DefaultIndexOfRefraction = 1.5, UU
    })();
    class XX extends vU.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let zX = (() => {
      var UU, XU, zU, cU;
      let yU, QU, AU, FU, oU, DU, EU, YU = VU.e,
        NU = [],
        IU = [],
        pU = [],
        aU = [],
        tU = [],
        gU = [],
        kU = [],
        GU = [],
        BU = [],
        ZU = [],
        RU = [],
        PU = [],
        WU = [],
        eU = [];
      return UU = class extends YU {
        get isEnabled() {
          return (0, dU.e)(this, XU, "f")
        }
        set isEnabled(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        get texture() {
          return (0, dU.e)(this, zU, "f")
        }
        set texture(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get thicknessTexture() {
          return (0, dU.e)(this, cU, "f")
        }
        set thicknessTexture(UU) {
          (0, dU.f)(this, cU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(yU) {
          let QU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yU, "PBRIridescence", 110, new XX, QU), this._isEnabled = !1, XU.set(this, (0, dU.n)(this, NU, !1)), this.intensity = ((0, dU.n)(this, IU), (0, dU.n)(this, pU, 1)), this.minimumThickness = ((0, dU.n)(this, aU), (0, dU.n)(this, tU, UU._DefaultMinimumThickness)), this.maximumThickness = ((0, dU.n)(this, gU), (0, dU.n)(this, kU, UU._DefaultMaximumThickness)), this.indexOfRefraction = ((0, dU.n)(this, GU), (0, dU.n)(this, BU, UU._DefaultIndexOfRefraction)), this._texture = ((0, dU.n)(this, ZU), null), zU.set(this, (0, dU.n)(this, RU, null)), this._thicknessTexture = ((0, dU.n)(this, PU), null), cU.set(this, (0, dU.n)(this, WU, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, dU.n)(this, eU), this._internalMarkAllSubMeshesAsTexturesDirty = yU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, XU) {
          if (!this._isEnabled) return !0;
          if (UU._areTexturesDirty && XU.texturesEnabled) {
            if (this._texture && KU.b.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && KU.b.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UU, XU) {
          this._isEnabled ? (UU.IRIDESCENCE = !0, UU._areTexturesDirty && XU.texturesEnabled && (this._texture && KU.b.IridescenceTextureEnabled ? (0, TU.Z)(this._texture, UU, "IRIDESCENCE_TEXTURE") : UU.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && KU.b.IridescenceTextureEnabled ? (0, TU.Z)(this._thicknessTexture, UU, "IRIDESCENCE_THICKNESS_TEXTURE") : UU.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (UU.IRIDESCENCE = !1, UU.IRIDESCENCE_TEXTURE = !1, UU.IRIDESCENCE_THICKNESS_TEXTURE = !1, UU.IRIDESCENCE_TEXTUREDIRECTUV = 0, UU.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(UU, XU) {
          if (!this._isEnabled) return;
          const zU = this._material.isFrozen;
          UU.useUbo && zU && UU.isSync || ((this._texture || this._thicknessTexture) && KU.b.IridescenceTextureEnabled && (UU.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, TU.B)(this._texture, UU, "iridescence"), this._thicknessTexture && (0, TU.B)(this._thicknessTexture, UU, "iridescenceThickness")), UU.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), XU.texturesEnabled && (this._texture && KU.b.IridescenceTextureEnabled && UU.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && KU.b.IridescenceTextureEnabled && UU.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(UU) {
          return this._texture === UU || this._thicknessTexture === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture), this._thicknessTexture && UU.push(this._thicknessTexture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && UU.push(this._thicknessTexture)
        }
        dispose(UU) {
          UU && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(UU, XU, zU) {
          return UU.IRIDESCENCE && XU.addFallback(zU++, "IRIDESCENCE"), zU
        }
        getSamplers(UU) {
          UU.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(YU[Symbol.metadata] ?? null) : void 0;
        yU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, LU.I)()], AU = [(0, LU.I)()], FU = [(0, LU.I)()], oU = [(0, LU.I)()], DU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], (0, dU.j)(UU, null, yU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, XU) => {
              UU.isEnabled = XU
            }
          },
          metadata: XU
        }, NU, IU), (0, dU.j)(UU, null, DU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, XU) => {
              UU.texture = XU
            }
          },
          metadata: XU
        }, RU, PU), (0, dU.j)(UU, null, EU, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "thicknessTexture" in UU,
            get: UU => UU.thicknessTexture,
            set: (UU, XU) => {
              UU.thicknessTexture = XU
            }
          },
          metadata: XU
        }, WU, eU), (0, dU.j)(null, null, QU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, XU) => {
              UU.intensity = XU
            }
          },
          metadata: XU
        }, pU, aU), (0, dU.j)(null, null, AU, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "minimumThickness" in UU,
            get: UU => UU.minimumThickness,
            set: (UU, XU) => {
              UU.minimumThickness = XU
            }
          },
          metadata: XU
        }, tU, gU), (0, dU.j)(null, null, FU, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "maximumThickness" in UU,
            get: UU => UU.maximumThickness,
            set: (UU, XU) => {
              UU.maximumThickness = XU
            }
          },
          metadata: XU
        }, kU, GU), (0, dU.j)(null, null, oU, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "indexOfRefraction" in UU,
            get: UU => UU.indexOfRefraction,
            set: (UU, XU) => {
              UU.indexOfRefraction = XU
            }
          },
          metadata: XU
        }, BU, ZU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU._DefaultMinimumThickness = 100, UU._DefaultMaximumThickness = 400, UU._DefaultIndexOfRefraction = 1.3, UU
    })();
    class cX extends vU.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let yX = (() => {
      var UU, XU, zU, cU;
      let yU, QU, AU, FU, oU, DU = VU.e,
        EU = [],
        YU = [],
        NU = [],
        IU = [],
        pU = [],
        aU = [],
        tU = [],
        gU = [],
        kU = [],
        GU = [];
      return UU = class extends DU {
        get isEnabled() {
          return (0, dU.e)(this, XU, "f")
        }
        set isEnabled(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        set angle(UU) {
          this.direction.x = Math.cos(UU), this.direction.y = Math.sin(UU)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, dU.e)(this, zU, "f")
        }
        set texture(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get legacy() {
          return (0, dU.e)(this, cU, "f")
        }
        set legacy(UU) {
          (0, dU.f)(this, cU, UU, "f")
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
        constructor(UU) {
          let yU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UU, "PBRAnisotropic", 110, new cX, yU), this._isEnabled = !1, XU.set(this, (0, dU.n)(this, EU, !1)), this.intensity = ((0, dU.n)(this, YU), (0, dU.n)(this, NU, 1)), this.direction = ((0, dU.n)(this, IU), (0, dU.n)(this, pU, new HU.m(1, 0))), this._texture = ((0, dU.n)(this, aU), null), zU.set(this, (0, dU.n)(this, tU, null)), this._legacy = ((0, dU.n)(this, gU), !1), cU.set(this, (0, dU.n)(this, kU, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, dU.n)(this, GU), this._internalMarkAllSubMeshesAsTexturesDirty = UU._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = UU._dirtyCallbacks[16]
        }
        isReadyForSubMesh(UU, XU) {
          return !this._isEnabled || !(UU._areTexturesDirty && XU.texturesEnabled && this._texture && KU.b.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(UU, XU, zU) {
          this._isEnabled ? (UU.ANISOTROPIC = this._isEnabled, this._isEnabled && !zU.isVerticesDataPresent(MU.h.TangentKind) && (UU._needUVs = !0, UU.MAINUV1 = !0), UU._areTexturesDirty && XU.texturesEnabled && (this._texture && KU.b.AnisotropicTextureEnabled ? (0, TU.Z)(this._texture, UU, "ANISOTROPIC_TEXTURE") : UU.ANISOTROPIC_TEXTURE = !1), UU._areMiscDirty && (UU.ANISOTROPIC_LEGACY = this._legacy)) : (UU.ANISOTROPIC = !1, UU.ANISOTROPIC_TEXTURE = !1, UU.ANISOTROPIC_TEXTUREDIRECTUV = 0, UU.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(UU, XU) {
          if (!this._isEnabled) return;
          const zU = this._material.isFrozen;
          UU.useUbo && zU && UU.isSync || (this._texture && KU.b.AnisotropicTextureEnabled && (UU.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, TU.B)(this._texture, UU, "anisotropy")), UU.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), XU.texturesEnabled && this._texture && KU.b.AnisotropicTextureEnabled && UU.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(UU) {
          return this._texture === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture)
        }
        dispose(UU) {
          UU && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(UU, XU, zU) {
          return UU.ANISOTROPIC && XU.addFallback(zU++, "ANISOTROPIC"), zU
        }
        getSamplers(UU) {
          UU.push("anisotropySampler")
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
        parse(UU, XU, zU) {
          super.parse(UU, XU, zU), void 0 === UU.legacy && (this.legacy = !0)
        }
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(DU[Symbol.metadata] ?? null) : void 0;
        yU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, LU.I)()], AU = [(0, LU.B)()], FU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], oU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], (0, dU.j)(UU, null, yU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, XU) => {
              UU.isEnabled = XU
            }
          },
          metadata: XU
        }, EU, YU), (0, dU.j)(UU, null, FU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, XU) => {
              UU.texture = XU
            }
          },
          metadata: XU
        }, tU, gU), (0, dU.j)(UU, null, oU, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: UU => "legacy" in UU,
            get: UU => UU.legacy,
            set: (UU, XU) => {
              UU.legacy = XU
            }
          },
          metadata: XU
        }, kU, GU), (0, dU.j)(null, null, QU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, XU) => {
              UU.intensity = XU
            }
          },
          metadata: XU
        }, NU, IU), (0, dU.j)(null, null, AU, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: UU => "direction" in UU,
            get: UU => UU.direction,
            set: (UU, XU) => {
              UU.direction = XU
            }
          },
          metadata: XU
        }, pU, aU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU
    })();
    class QX extends vU.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let AX = (() => {
      var UU, XU, zU, cU, yU, QU, AU, FU;
      let oU, DU, EU, YU, NU, IU, pU, aU, tU, gU = VU.e,
        kU = [],
        GU = [],
        BU = [],
        ZU = [],
        RU = [],
        PU = [],
        WU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [];
      return UU = class extends gU {
        get isEnabled() {
          return (0, dU.e)(this, XU, "f")
        }
        set isEnabled(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, dU.e)(this, zU, "f")
        }
        set linkSheenWithAlbedo(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get texture() {
          return (0, dU.e)(this, cU, "f")
        }
        set texture(UU) {
          (0, dU.f)(this, cU, UU, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, dU.e)(this, yU, "f")
        }
        set useRoughnessFromMainTexture(UU) {
          (0, dU.f)(this, yU, UU, "f")
        }
        get roughness() {
          return (0, dU.e)(this, QU, "f")
        }
        set roughness(UU) {
          (0, dU.f)(this, QU, UU, "f")
        }
        get textureRoughness() {
          return (0, dU.e)(this, AU, "f")
        }
        set textureRoughness(UU) {
          (0, dU.f)(this, AU, UU, "f")
        }
        get albedoScaling() {
          return (0, dU.e)(this, FU, "f")
        }
        set albedoScaling(UU) {
          (0, dU.f)(this, FU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(UU) {
          let oU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UU, "Sheen", 120, new QX, oU), this._isEnabled = !1, XU.set(this, (0, dU.n)(this, kU, !1)), this._linkSheenWithAlbedo = ((0, dU.n)(this, GU), !1), zU.set(this, (0, dU.n)(this, BU, !1)), this.intensity = ((0, dU.n)(this, ZU), (0, dU.n)(this, RU, 1)), this.color = ((0, dU.n)(this, PU), (0, dU.n)(this, WU, lU.b.White())), this._texture = ((0, dU.n)(this, eU), null), cU.set(this, (0, dU.n)(this, CU, null)), this._useRoughnessFromMainTexture = ((0, dU.n)(this, wU), !0), yU.set(this, (0, dU.n)(this, qU, !0)), this._roughness = ((0, dU.n)(this, OU), null), QU.set(this, (0, dU.n)(this, SU, null)), this._textureRoughness = ((0, dU.n)(this, rU), null), AU.set(this, (0, dU.n)(this, uU, null)), this._albedoScaling = ((0, dU.n)(this, fU), !1), FU.set(this, (0, dU.n)(this, iU, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, dU.n)(this, HU), this._internalMarkAllSubMeshesAsTexturesDirty = UU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, XU) {
          if (!this._isEnabled) return !0;
          if (UU._areTexturesDirty && XU.texturesEnabled) {
            if (this._texture && KU.b.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && KU.b.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UU, XU) {
          this._isEnabled ? (UU.SHEEN = !0, UU.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, UU.SHEEN_ROUGHNESS = null !== this._roughness, UU.SHEEN_ALBEDOSCALING = this._albedoScaling, UU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, UU._areTexturesDirty && XU.texturesEnabled && (this._texture && KU.b.SheenTextureEnabled ? ((0, TU.Z)(this._texture, UU, "SHEEN_TEXTURE"), UU.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : UU.SHEEN_TEXTURE = !1, this._textureRoughness && KU.b.SheenTextureEnabled ? (0, TU.Z)(this._textureRoughness, UU, "SHEEN_TEXTURE_ROUGHNESS") : UU.SHEEN_TEXTURE_ROUGHNESS = !1)) : (UU.SHEEN = !1, UU.SHEEN_TEXTURE = !1, UU.SHEEN_TEXTURE_ROUGHNESS = !1, UU.SHEEN_LINKWITHALBEDO = !1, UU.SHEEN_ROUGHNESS = !1, UU.SHEEN_ALBEDOSCALING = !1, UU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, UU.SHEEN_GAMMATEXTURE = !1, UU.SHEEN_TEXTUREDIRECTUV = 0, UU.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(UU, XU, zU, cU) {
          if (!this._isEnabled) return;
          const yU = cU.materialDefines,
            QU = this._material.isFrozen;
          UU.useUbo && QU && UU.isSync || ((this._texture || this._textureRoughness) && KU.b.SheenTextureEnabled && (UU.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, TU.B)(this._texture, UU, "sheen"), this._textureRoughness && !yU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, TU.B)(this._textureRoughness, UU, "sheenRoughness")), UU.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && UU.updateFloat("vSheenRoughness", this._roughness)), XU.texturesEnabled && (this._texture && KU.b.SheenTextureEnabled && UU.setTexture("sheenSampler", this._texture), this._textureRoughness && !yU.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && KU.b.SheenTextureEnabled && UU.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(UU) {
          return this._texture === UU || this._textureRoughness === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture), this._textureRoughness && UU.push(this._textureRoughness)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && UU.push(this._textureRoughness)
        }
        dispose(UU) {
          UU && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(UU, XU, zU) {
          return UU.SHEEN && XU.addFallback(zU++, "SHEEN"), zU
        }
        getSamplers(UU) {
          UU.push("sheenSampler", "sheenRoughnessSampler")
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
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, yU = new WeakMap, QU = new WeakMap, AU = new WeakMap, FU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(gU[Symbol.metadata] ?? null) : void 0;
        oU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, LU.I)()], YU = [(0, LU.m)()], NU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], IU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], pU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], tU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], (0, dU.j)(UU, null, oU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, XU) => {
              UU.isEnabled = XU
            }
          },
          metadata: XU
        }, kU, GU), (0, dU.j)(UU, null, DU, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: UU => "linkSheenWithAlbedo" in UU,
            get: UU => UU.linkSheenWithAlbedo,
            set: (UU, XU) => {
              UU.linkSheenWithAlbedo = XU
            }
          },
          metadata: XU
        }, BU, ZU), (0, dU.j)(UU, null, NU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, XU) => {
              UU.texture = XU
            }
          },
          metadata: XU
        }, CU, wU), (0, dU.j)(UU, null, IU, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMainTexture" in UU,
            get: UU => UU.useRoughnessFromMainTexture,
            set: (UU, XU) => {
              UU.useRoughnessFromMainTexture = XU
            }
          },
          metadata: XU
        }, qU, OU), (0, dU.j)(UU, null, pU, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughness" in UU,
            get: UU => UU.roughness,
            set: (UU, XU) => {
              UU.roughness = XU
            }
          },
          metadata: XU
        }, SU, rU), (0, dU.j)(UU, null, aU, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "textureRoughness" in UU,
            get: UU => UU.textureRoughness,
            set: (UU, XU) => {
              UU.textureRoughness = XU
            }
          },
          metadata: XU
        }, uU, fU), (0, dU.j)(UU, null, tU, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: UU => "albedoScaling" in UU,
            get: UU => UU.albedoScaling,
            set: (UU, XU) => {
              UU.albedoScaling = XU
            }
          },
          metadata: XU
        }, iU, HU), (0, dU.j)(null, null, EU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, XU) => {
              UU.intensity = XU
            }
          },
          metadata: XU
        }, RU, PU), (0, dU.j)(null, null, YU, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: UU => "color" in UU,
            get: UU => UU.color,
            set: (UU, XU) => {
              UU.color = XU
            }
          },
          metadata: XU
        }, WU, eU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU
    })();
    class FX extends vU.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let oX = (() => {
      var UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU;
      let gU, kU, GU, BU, ZU, RU, PU, WU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, MU, vU, sU, nU, mU, xU, JU, jU, bU, hU, UX, XX, zX = VU.e,
        cX = [],
        yX = [],
        QX = [],
        AX = [],
        oX = [],
        DX = [],
        EX = [],
        YX = [],
        NX = [],
        IX = [],
        pX = [],
        aX = [],
        tX = [],
        gX = [],
        kX = [],
        GX = [],
        BX = [],
        ZX = [],
        RX = [],
        PX = [],
        WX = [],
        dX = [],
        LX = [],
        eX = [],
        CX = [],
        wX = [],
        qX = [],
        OX = [],
        SX = [],
        rX = [],
        uX = [],
        fX = [],
        iX = [],
        HX = [],
        MX = [],
        vX = [],
        VX = [],
        sX = [],
        nX = [],
        mX = [],
        lX = [],
        xX = [],
        JX = [],
        jX = [],
        KX = [],
        bX = [],
        TX = [],
        hX = [],
        Uz = [],
        Xz = [],
        zz = [],
        cz = [],
        yz = [],
        Qz = [],
        Az = [],
        Fz = [],
        oz = [],
        Dz = [],
        Ez = [],
        Yz = [];
      return UU = class extends zX {
        get isRefractionEnabled() {
          return (0, dU.e)(this, XU, "f")
        }
        set isRefractionEnabled(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        get isTranslucencyEnabled() {
          return (0, dU.e)(this, zU, "f")
        }
        set isTranslucencyEnabled(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get isDispersionEnabled() {
          return (0, dU.e)(this, cU, "f")
        }
        set isDispersionEnabled(UU) {
          (0, dU.f)(this, cU, UU, "f")
        }
        get isScatteringEnabled() {
          return (0, dU.e)(this, yU, "f")
        }
        set isScatteringEnabled(UU) {
          (0, dU.f)(this, yU, UU, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(UU) {
          this._scene.enableSubSurfaceForPrePass() && UU && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(UU))
        }
        get useAlbedoToTintRefraction() {
          return (0, dU.e)(this, QU, "f")
        }
        set useAlbedoToTintRefraction(UU) {
          (0, dU.f)(this, QU, UU, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, dU.e)(this, AU, "f")
        }
        set useAlbedoToTintTranslucency(UU) {
          (0, dU.f)(this, AU, UU, "f")
        }
        get thicknessTexture() {
          return (0, dU.e)(this, FU, "f")
        }
        set thicknessTexture(UU) {
          (0, dU.f)(this, FU, UU, "f")
        }
        get refractionTexture() {
          return (0, dU.e)(this, oU, "f")
        }
        set refractionTexture(UU) {
          (0, dU.f)(this, oU, UU, "f")
        }
        get indexOfRefraction() {
          return (0, dU.e)(this, DU, "f")
        }
        set indexOfRefraction(UU) {
          (0, dU.f)(this, DU, UU, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(UU) {
          const XU = UU >= 1 ? UU : -1;
          this._volumeIndexOfRefraction !== XU && (this._volumeIndexOfRefraction = XU, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, dU.e)(this, EU, "f")
        }
        set invertRefractionY(UU) {
          (0, dU.f)(this, EU, UU, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, dU.e)(this, YU, "f")
        }
        set linkRefractionWithTransparency(UU) {
          (0, dU.f)(this, YU, UU, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, dU.e)(this, NU, "f")
        }
        set useMaskFromThicknessTexture(UU) {
          (0, dU.f)(this, NU, UU, "f")
        }
        get refractionIntensityTexture() {
          return (0, dU.e)(this, IU, "f")
        }
        set refractionIntensityTexture(UU) {
          (0, dU.f)(this, IU, UU, "f")
        }
        get translucencyIntensityTexture() {
          return (0, dU.e)(this, pU, "f")
        }
        set translucencyIntensityTexture(UU) {
          (0, dU.f)(this, pU, UU, "f")
        }
        get translucencyColorTexture() {
          return (0, dU.e)(this, aU, "f")
        }
        set translucencyColorTexture(UU) {
          (0, dU.f)(this, aU, UU, "f")
        }
        get useGltfStyleTextures() {
          return (0, dU.e)(this, tU, "f")
        }
        set useGltfStyleTextures(UU) {
          (0, dU.f)(this, tU, UU, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(UU) {
          this.legacyTranslucency = UU
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
        constructor(gU) {
          let kU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(gU, "PBRSubSurface", 130, new FX, kU), this._isRefractionEnabled = !1, XU.set(this, (0, dU.n)(this, cX, !1)), this._isTranslucencyEnabled = ((0, dU.n)(this, yX), !1), zU.set(this, (0, dU.n)(this, QX, !1)), this._isDispersionEnabled = ((0, dU.n)(this, AX), !1), cU.set(this, (0, dU.n)(this, oX, !1)), this._isScatteringEnabled = ((0, dU.n)(this, DX), !1), yU.set(this, (0, dU.n)(this, EX, !1)), this._scatteringDiffusionProfileIndex = ((0, dU.n)(this, YX), (0, dU.n)(this, NX, 0)), this.refractionIntensity = ((0, dU.n)(this, IX), (0, dU.n)(this, pX, 1)), this.translucencyIntensity = ((0, dU.n)(this, aX), (0, dU.n)(this, tX, 1)), this._useAlbedoToTintRefraction = ((0, dU.n)(this, gX), !1), QU.set(this, (0, dU.n)(this, kX, !1)), this._useAlbedoToTintTranslucency = ((0, dU.n)(this, GX), !1), AU.set(this, (0, dU.n)(this, BX, !1)), this._thicknessTexture = ((0, dU.n)(this, ZX), null), FU.set(this, (0, dU.n)(this, RX, null)), this._refractionTexture = ((0, dU.n)(this, PX), null), oU.set(this, (0, dU.n)(this, WX, null)), this._indexOfRefraction = ((0, dU.n)(this, dX), 1.5), DU.set(this, (0, dU.n)(this, LX, 1.5)), this._volumeIndexOfRefraction = ((0, dU.n)(this, eX), (0, dU.n)(this, CX, -1)), this._invertRefractionY = ((0, dU.n)(this, wX), !1), EU.set(this, (0, dU.n)(this, qX, !1)), this._linkRefractionWithTransparency = ((0, dU.n)(this, OX), !1), YU.set(this, (0, dU.n)(this, SX, !1)), this.minimumThickness = ((0, dU.n)(this, rX), (0, dU.n)(this, uX, 0)), this.maximumThickness = ((0, dU.n)(this, fX), (0, dU.n)(this, iX, 1)), this.useThicknessAsDepth = ((0, dU.n)(this, HX), (0, dU.n)(this, MX, !1)), this.tintColor = ((0, dU.n)(this, vX), (0, dU.n)(this, VX, lU.b.White())), this.tintColorAtDistance = ((0, dU.n)(this, sX), (0, dU.n)(this, nX, 1)), this.dispersion = ((0, dU.n)(this, mX), (0, dU.n)(this, lX, 0)), this.diffusionDistance = ((0, dU.n)(this, xX), (0, dU.n)(this, JX, lU.b.White())), this._useMaskFromThicknessTexture = ((0, dU.n)(this, jX), !1), NU.set(this, (0, dU.n)(this, KX, !1)), this._refractionIntensityTexture = ((0, dU.n)(this, bX), null), IU.set(this, (0, dU.n)(this, TX, null)), this._translucencyIntensityTexture = ((0, dU.n)(this, hX), null), pU.set(this, (0, dU.n)(this, Uz, null)), this.translucencyColor = ((0, dU.n)(this, Xz), (0, dU.n)(this, zz, null)), this._translucencyColorTexture = ((0, dU.n)(this, cz), null), aU.set(this, (0, dU.n)(this, yz, null)), this._useGltfStyleTextures = ((0, dU.n)(this, Qz), !0), tU.set(this, (0, dU.n)(this, Az, !0)), this.applyAlbedoAfterSubSurface = ((0, dU.n)(this, Fz), (0, dU.n)(this, oz, UU.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, dU.n)(this, Dz), (0, dU.n)(this, Ez, UU.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, dU.n)(this, Yz), this._scene = gU.nS(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = gU._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = gU._dirtyCallbacks[32]
        }
        isReadyForSubMesh(UU, XU) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (UU._areTexturesDirty && XU.texturesEnabled) {
            if (this._thicknessTexture && KU.b.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && KU.b.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && KU.b.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && KU.b.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const UU = this._getRefractionTexture(XU);
            if (UU && KU.b.RefractionTextureEnabled && !UU.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(UU, XU) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return UU.SUBSURFACE = !1, UU.SS_DISPERSION = !1, UU.SS_TRANSLUCENCY = !1, UU.SS_SCATTERING = !1, UU.SS_REFRACTION = !1, UU.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_THICKNESSANDMASK_TEXTURE = !1, UU.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, UU.SS_HAS_THICKNESS = !1, UU.SS_REFRACTIONINTENSITY_TEXTURE = !1, UU.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, UU.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, UU.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, UU.SS_REFRACTIONMAP_3D = !1, UU.SS_REFRACTIONMAP_OPPOSITEZ = !1, UU.SS_LODINREFRACTIONALPHA = !1, UU.SS_GAMMAREFRACTION = !1, UU.SS_RGBDREFRACTION = !1, UU.SS_LINEARSPECULARREFRACTION = !1, UU.SS_LINKREFRACTIONTOTRANSPARENCY = !1, UU.SS_ALBEDOFORREFRACTIONTINT = !1, UU.SS_ALBEDOFORTRANSLUCENCYTINT = !1, UU.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, UU.SS_USE_THICKNESS_AS_DEPTH = !1, UU.SS_USE_GLTF_TEXTURES = !1, UU.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, UU.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, UU.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(UU.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (UU._areTexturesDirty) {
            if (UU.SUBSURFACE = !0, UU.SS_DISPERSION = this._isDispersionEnabled, UU.SS_TRANSLUCENCY = this._isTranslucencyEnabled, UU.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, UU.SS_SCATTERING = this._isScatteringEnabled, UU.SS_THICKNESSANDMASK_TEXTURE = !1, UU.SS_REFRACTIONINTENSITY_TEXTURE = !1, UU.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, UU.SS_HAS_THICKNESS = !1, UU.SS_USE_GLTF_TEXTURES = !1, UU.SS_REFRACTION = !1, UU.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, UU.SS_REFRACTIONMAP_3D = !1, UU.SS_GAMMAREFRACTION = !1, UU.SS_RGBDREFRACTION = !1, UU.SS_LINEARSPECULARREFRACTION = !1, UU.SS_REFRACTIONMAP_OPPOSITEZ = !1, UU.SS_LODINREFRACTIONALPHA = !1, UU.SS_LINKREFRACTIONTOTRANSPARENCY = !1, UU.SS_ALBEDOFORREFRACTIONTINT = !1, UU.SS_ALBEDOFORTRANSLUCENCYTINT = !1, UU.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, UU.SS_USE_THICKNESS_AS_DEPTH = !1, UU.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, UU.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, UU._areTexturesDirty && XU.texturesEnabled && (this._thicknessTexture && KU.b.ThicknessTextureEnabled && (0, TU.Z)(this._thicknessTexture, UU, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && KU.b.RefractionIntensityTextureEnabled && (0, TU.Z)(this._refractionIntensityTexture, UU, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && KU.b.TranslucencyIntensityTextureEnabled && (0, TU.Z)(this._translucencyIntensityTexture, UU, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && KU.b.TranslucencyColorTextureEnabled && ((0, TU.Z)(this._translucencyColorTexture, UU, "SS_TRANSLUCENCYCOLOR_TEXTURE"), UU.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), UU.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, UU.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, UU.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, UU.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && XU.texturesEnabled) {
              const zU = this._getRefractionTexture(XU);
              zU && KU.b.RefractionTextureEnabled && (UU.SS_REFRACTION = !0, UU.SS_REFRACTIONMAP_3D = zU.isCube, UU.SS_GAMMAREFRACTION = zU.gammaSpace, UU.SS_RGBDREFRACTION = zU.isRGBD, UU.SS_LINEARSPECULARREFRACTION = zU.linearSpecularLOD, UU.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && zU.isCube ? !zU.invertZ : zU.invertZ, UU.SS_LODINREFRACTIONALPHA = zU.lodLevelInAlpha, UU.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, UU.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, UU.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = zU.isCube && zU.boundingBoxSize, UU.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (UU.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(UU, XU, zU, cU) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) UU.updateFloat2("vThicknessParam", 0, 0);
            else {
              cU.getRenderingMesh().getWorldMatrix().decompose(HU.l.Sp[0]);
              const XU = Math.max(Math.abs(HU.l.Sp[0].x), Math.abs(HU.l.Sp[0].y), Math.abs(HU.l.Sp[0].z));
              UU.updateFloat2("vThicknessParam", this.minimumThickness * XU, (this.maximumThickness - this.minimumThickness) * XU)
            }
        }
        bindForSubMesh(UU, XU, zU, cU) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const yU = cU.materialDefines,
            QU = this._material.isFrozen,
            AU = this._material.realTimeFiltering,
            FU = yU.LODBASEDMICROSFURACE,
            oU = this._getRefractionTexture(XU);
          if (!UU.useUbo || !QU || !UU.isSync) {
            if (this._thicknessTexture && KU.b.ThicknessTextureEnabled && (UU.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, TU.B)(this._thicknessTexture, UU, "thickness")), this._refractionIntensityTexture && KU.b.RefractionIntensityTextureEnabled && yU.SS_REFRACTIONINTENSITY_TEXTURE && (UU.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, TU.B)(this._refractionIntensityTexture, UU, "refractionIntensity")), this._translucencyColorTexture && KU.b.TranslucencyColorTextureEnabled && yU.SS_TRANSLUCENCYCOLOR_TEXTURE && (UU.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, TU.B)(this._translucencyColorTexture, UU, "translucencyColor")), this._translucencyIntensityTexture && KU.b.TranslucencyIntensityTextureEnabled && yU.SS_TRANSLUCENCYINTENSITY_TEXTURE && (UU.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, TU.B)(this._translucencyIntensityTexture, UU, "translucencyIntensity")), oU && KU.b.RefractionTextureEnabled) {
              UU.eUU("refractionMatrix", oU.getRefractionTextureMatrix());
              let XU = 1;
              oU.isCube || oU.depth && (XU = oU.depth);
              const zU = oU.getSize().width,
                cU = this.volumeIndexOfRefraction;
              if (UU.updateFloat4("vRefractionInfos", oU.level, 1 / cU, XU, this._invertRefractionY ? -1 : 1), UU.updateFloat4("vRefractionMicrosurfaceInfos", zU, oU.lodGenerationScale, oU.lodGenerationOffset, 1 / this.indexOfRefraction), AU && UU.updateFloat2("vRefractionFilteringInfo", zU, Math.log2(zU)), oU.boundingBoxSize) {
                const XU = oU;
                UU.updateVector3("vRefractionPosition", XU.boundingBoxPosition), UU.updateVector3("vRefractionSize", XU.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && UU.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), UU.updateColor3("vDiffusionDistance", this.diffusionDistance), UU.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), UU.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), UU.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), UU.updateFloat("dispersion", this.dispersion)
          }
          XU.texturesEnabled && (this._thicknessTexture && KU.b.ThicknessTextureEnabled && UU.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && KU.b.RefractionIntensityTextureEnabled && yU.SS_REFRACTIONINTENSITY_TEXTURE && UU.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && KU.b.TranslucencyIntensityTextureEnabled && yU.SS_TRANSLUCENCYINTENSITY_TEXTURE && UU.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && KU.b.TranslucencyColorTextureEnabled && yU.SS_TRANSLUCENCYCOLOR_TEXTURE && UU.setTexture("translucencyColorSampler", this._translucencyColorTexture), oU && KU.b.RefractionTextureEnabled && (FU ? UU.setTexture("refractionSampler", oU) : (UU.setTexture("refractionSampler", oU._lodTextureMid || oU), UU.setTexture("refractionSamplerLow", oU._lodTextureLow || oU), UU.setTexture("refractionSamplerHigh", oU._lodTextureHigh || oU))))
        }
        _getRefractionTexture(UU) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? UU.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(UU) {
          KU.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && UU.push(this._refractionTexture)
        }
        hasTexture(UU) {
          return this._thicknessTexture === UU || (this._refractionTexture === UU || (this._refractionIntensityTexture === UU || (this._translucencyIntensityTexture === UU || this._translucencyColorTexture === UU)))
        }
        hasRenderTargetTextures() {
          return !!(KU.b.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(UU) {
          this._thicknessTexture && UU.push(this._thicknessTexture), this._refractionTexture && UU.push(this._refractionTexture), this._refractionIntensityTexture && UU.push(this._refractionIntensityTexture), this._translucencyColorTexture && UU.push(this._translucencyColorTexture), this._translucencyIntensityTexture && UU.push(this._translucencyIntensityTexture)
        }
        getAnimatables(UU) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && UU.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && UU.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && UU.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && UU.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && UU.push(this._translucencyIntensityTexture)
        }
        dispose(UU) {
          UU && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(UU, XU, zU) {
          return UU.SS_SCATTERING && XU.addFallback(zU++, "SS_SCATTERING"), UU.SS_TRANSLUCENCY && XU.addFallback(zU++, "SS_TRANSLUCENCY"), zU
        }
        getSamplers(UU) {
          UU.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, yU = new WeakMap, QU = new WeakMap, AU = new WeakMap, FU = new WeakMap, oU = new WeakMap, DU = new WeakMap, EU = new WeakMap, YU = new WeakMap, NU = new WeakMap, IU = new WeakMap, pU = new WeakMap, aU = new WeakMap, tU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(zX[Symbol.metadata] ?? null) : void 0;
        gU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], kU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], BU = [(0, LU.I)(), (0, LU.c)("_markScenePrePassDirty")], ZU = [(0, LU.I)()], RU = [(0, LU.I)()], PU = [(0, LU.I)()], WU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], eU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], CU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], wU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], qU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], OU = [(0, LU.I)()], SU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, LU.I)()], fU = [(0, LU.I)()], iU = [(0, LU.I)()], MU = [(0, LU.m)()], vU = [(0, LU.I)()], sU = [(0, LU.I)()], nU = [(0, LU.m)()], mU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], JU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], jU = [(0, LU.m)()], bU = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], hU = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], UX = [(0, LU.I)()], XX = [(0, LU.I)()], (0, dU.j)(UU, null, gU, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isRefractionEnabled" in UU,
            get: UU => UU.isRefractionEnabled,
            set: (UU, XU) => {
              UU.isRefractionEnabled = XU
            }
          },
          metadata: XU
        }, cX, yX), (0, dU.j)(UU, null, kU, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isTranslucencyEnabled" in UU,
            get: UU => UU.isTranslucencyEnabled,
            set: (UU, XU) => {
              UU.isTranslucencyEnabled = XU
            }
          },
          metadata: XU
        }, QX, AX), (0, dU.j)(UU, null, GU, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isDispersionEnabled" in UU,
            get: UU => UU.isDispersionEnabled,
            set: (UU, XU) => {
              UU.isDispersionEnabled = XU
            }
          },
          metadata: XU
        }, oX, DX), (0, dU.j)(UU, null, BU, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isScatteringEnabled" in UU,
            get: UU => UU.isScatteringEnabled,
            set: (UU, XU) => {
              UU.isScatteringEnabled = XU
            }
          },
          metadata: XU
        }, EX, YX), (0, dU.j)(UU, null, WU, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlbedoToTintRefraction" in UU,
            get: UU => UU.useAlbedoToTintRefraction,
            set: (UU, XU) => {
              UU.useAlbedoToTintRefraction = XU
            }
          },
          metadata: XU
        }, kX, GX), (0, dU.j)(UU, null, eU, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlbedoToTintTranslucency" in UU,
            get: UU => UU.useAlbedoToTintTranslucency,
            set: (UU, XU) => {
              UU.useAlbedoToTintTranslucency = XU
            }
          },
          metadata: XU
        }, BX, ZX), (0, dU.j)(UU, null, CU, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "thicknessTexture" in UU,
            get: UU => UU.thicknessTexture,
            set: (UU, XU) => {
              UU.thicknessTexture = XU
            }
          },
          metadata: XU
        }, RX, PX), (0, dU.j)(UU, null, wU, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "refractionTexture" in UU,
            get: UU => UU.refractionTexture,
            set: (UU, XU) => {
              UU.refractionTexture = XU
            }
          },
          metadata: XU
        }, WX, dX), (0, dU.j)(UU, null, qU, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "indexOfRefraction" in UU,
            get: UU => UU.indexOfRefraction,
            set: (UU, XU) => {
              UU.indexOfRefraction = XU
            }
          },
          metadata: XU
        }, LX, eX), (0, dU.j)(UU, null, SU, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertRefractionY" in UU,
            get: UU => UU.invertRefractionY,
            set: (UU, XU) => {
              UU.invertRefractionY = XU
            }
          },
          metadata: XU
        }, qX, OX), (0, dU.j)(UU, null, rU, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: UU => "linkRefractionWithTransparency" in UU,
            get: UU => UU.linkRefractionWithTransparency,
            set: (UU, XU) => {
              UU.linkRefractionWithTransparency = XU
            }
          },
          metadata: XU
        }, SX, rX), (0, dU.j)(UU, null, mU, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useMaskFromThicknessTexture" in UU,
            get: UU => UU.useMaskFromThicknessTexture,
            set: (UU, XU) => {
              UU.useMaskFromThicknessTexture = XU
            }
          },
          metadata: XU
        }, KX, bX), (0, dU.j)(UU, null, xU, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "refractionIntensityTexture" in UU,
            get: UU => UU.refractionIntensityTexture,
            set: (UU, XU) => {
              UU.refractionIntensityTexture = XU
            }
          },
          metadata: XU
        }, TX, hX), (0, dU.j)(UU, null, JU, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyIntensityTexture" in UU,
            get: UU => UU.translucencyIntensityTexture,
            set: (UU, XU) => {
              UU.translucencyIntensityTexture = XU
            }
          },
          metadata: XU
        }, Uz, Xz), (0, dU.j)(UU, null, bU, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyColorTexture" in UU,
            get: UU => UU.translucencyColorTexture,
            set: (UU, XU) => {
              UU.translucencyColorTexture = XU
            }
          },
          metadata: XU
        }, yz, Qz), (0, dU.j)(UU, null, hU, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: UU => "useGltfStyleTextures" in UU,
            get: UU => UU.useGltfStyleTextures,
            set: (UU, XU) => {
              UU.useGltfStyleTextures = XU
            }
          },
          metadata: XU
        }, Az, Fz), (0, dU.j)(null, null, ZU, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: UU => "_scatteringDiffusionProfileIndex" in UU,
            get: UU => UU._scatteringDiffusionProfileIndex,
            set: (UU, XU) => {
              UU._scatteringDiffusionProfileIndex = XU
            }
          },
          metadata: XU
        }, NX, IX), (0, dU.j)(null, null, RU, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "refractionIntensity" in UU,
            get: UU => UU.refractionIntensity,
            set: (UU, XU) => {
              UU.refractionIntensity = XU
            }
          },
          metadata: XU
        }, pX, aX), (0, dU.j)(null, null, PU, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyIntensity" in UU,
            get: UU => UU.translucencyIntensity,
            set: (UU, XU) => {
              UU.translucencyIntensity = XU
            }
          },
          metadata: XU
        }, tX, gX), (0, dU.j)(null, null, OU, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: UU => "_volumeIndexOfRefraction" in UU,
            get: UU => UU._volumeIndexOfRefraction,
            set: (UU, XU) => {
              UU._volumeIndexOfRefraction = XU
            }
          },
          metadata: XU
        }, CX, wX), (0, dU.j)(null, null, uU, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "minimumThickness" in UU,
            get: UU => UU.minimumThickness,
            set: (UU, XU) => {
              UU.minimumThickness = XU
            }
          },
          metadata: XU
        }, uX, fX), (0, dU.j)(null, null, fU, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: UU => "maximumThickness" in UU,
            get: UU => UU.maximumThickness,
            set: (UU, XU) => {
              UU.maximumThickness = XU
            }
          },
          metadata: XU
        }, iX, HX), (0, dU.j)(null, null, iU, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: UU => "useThicknessAsDepth" in UU,
            get: UU => UU.useThicknessAsDepth,
            set: (UU, XU) => {
              UU.useThicknessAsDepth = XU
            }
          },
          metadata: XU
        }, MX, vX), (0, dU.j)(null, null, MU, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColor" in UU,
            get: UU => UU.tintColor,
            set: (UU, XU) => {
              UU.tintColor = XU
            }
          },
          metadata: XU
        }, VX, sX), (0, dU.j)(null, null, vU, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "tintColorAtDistance" in UU,
            get: UU => UU.tintColorAtDistance,
            set: (UU, XU) => {
              UU.tintColorAtDistance = XU
            }
          },
          metadata: XU
        }, nX, mX), (0, dU.j)(null, null, sU, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: UU => "dispersion" in UU,
            get: UU => UU.dispersion,
            set: (UU, XU) => {
              UU.dispersion = XU
            }
          },
          metadata: XU
        }, lX, xX), (0, dU.j)(null, null, nU, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: UU => "diffusionDistance" in UU,
            get: UU => UU.diffusionDistance,
            set: (UU, XU) => {
              UU.diffusionDistance = XU
            }
          },
          metadata: XU
        }, JX, jX), (0, dU.j)(null, null, jU, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "translucencyColor" in UU,
            get: UU => UU.translucencyColor,
            set: (UU, XU) => {
              UU.translucencyColor = XU
            }
          },
          metadata: XU
        }, zz, cz), (0, dU.j)(null, null, UX, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: UU => "applyAlbedoAfterSubSurface" in UU,
            get: UU => UU.applyAlbedoAfterSubSurface,
            set: (UU, XU) => {
              UU.applyAlbedoAfterSubSurface = XU
            }
          },
          metadata: XU
        }, oz, Dz), (0, dU.j)(null, null, XX, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: UU => "legacyTranslucency" in UU,
            get: UU => UU.legacyTranslucency,
            set: (UU, XU) => {
              UU.legacyTranslucency = XU
            }
          },
          metadata: XU
        }, Ez, Yz), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, UU.DEFAULT_LEGACY_TRANSLUCENCY = !1, UU
    })();
    var DX = zU(41429),
      EX = zU(41406),
      YX = zU(41438),
      NX = zU(41444),
      IX = zU(41446),
      pX = zU(41453),
      aX = zU(41458),
      tX = zU(41464),
      gX = zU(40989);
    const kX = {
      effect: null,
      subMesh: null
    };
    class GX extends((0, aX.e)((0, pX.b)(vU.d))) {}
    class BX extends((0, xU.g)(GX)) {
      constructor(UU) {
        super(UU), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class ZX extends((0, tX.d)(jU.d)) {}
    let RX = (() => {
      var UU, XU;
      let cU, yU = ZX,
        AU = [],
        FU = [];
      return UU = class extends yU {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(UU) {
          this._realTimeFiltering = UU, this.OzU(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(UU) {
          this._realTimeFilteringQuality = UU, this.OzU(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, dU.e)(this, XU, "f")
        }
        set debugMode(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        constructor(zU, cU) {
          super(zU, cU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || UU.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new HU.t(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = lU.b.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new lU.b(0, 0, 0), this._albedoColor = new lU.b(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new lU.b(1, 1, 1), this._reflectionColor = new lU.b(1, 1, 1), this._emissiveColor = new lU.b(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = UU.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new CU.d(16), this._globalAmbientColor = new lU.b(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, XU.set(this, (0, dU.n)(this, AU, 0)), this.debugLimit = ((0, dU.n)(this, FU), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new nU(this), this.clearCoat = new UX(this), this.iridescence = new zX(this), this.anisotropy = new yX(this), this.sheen = new AX(this), this.subSurface = new oX(this), this.detailMap = new DX.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), KU.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = rU(this.nS()), this.prePassConfiguration = new mU.c
        }
        get hasRenderTargetTextures() {
          return !!(KU.b.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === UU.PBRMATERIAL_OPAQUE || this._transparencyMode === UU.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === UU.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== UU.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(UU, XU, zU) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const cU = XU._drawWrapper;
          if (cU.effect && this.isFrozen && cU._wasPreviouslyReady && cU._wasPreviouslyUsingInstances === zU) return !0;
          XU.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), XU.materialDefines = new BX(this._eventInfo.defineNames));
          const yU = XU.materialDefines;
          if (this._isReadyForSubMesh(XU)) return !0;
          const QU = this.nS(),
            AU = QU.qp();
          if (yU._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, QU.texturesEnabled)) {
            if (this._albedoTexture && KU.b.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && KU.b.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && KU.b.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && KU.b.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && KU.b.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const UU = this._getReflectionTexture();
            if (UU && KU.b.ReflectionTextureEnabled) {
              if (!UU.isReadyOrNotBlocking()) return !1;
              if (UU.irradianceTexture) {
                if (!UU.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!UU.sphericalPolynomial && UU.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && KU.b.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && KU.b.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (KU.b.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (AU.getCaps().standardDerivatives && this._bumpTexture && KU.b.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && KU.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = yU, this._eventInfo.subMesh = XU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (yU._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (yU.AREALIGHTUSED || yU.CLUSTLIGHT_BATCH)
            for (let YU = 0; YU < UU.lightSources.length; YU++)
              if (!UU.lightSources[YU]._isReady()) return !1;
          if (AU.getCaps().standardDerivatives || UU.isVerticesDataPresent(MU.h.NormalKind) || (UU.createNormals(!0), eU.b.Warn("PBRMaterial: Normals have been created for the mesh: " + UU.name)), !(0, TU.e)(QU, UU, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const FU = XU.effect,
            oU = yU._areLightsDisposed,
            DU = this._prepareEffect(UU, XU.getRenderingMesh(), yU, this.onCompiled, this.onError, zU, null);
          let EU = !1;
          if (DU)
            if (this._onEffectCreatedObservable && (kX.effect = DU, kX.subMesh = XU, this._onEffectCreatedObservable.notifyObservers(kX)), this.allowShaderHotSwapping && FU && !DU.isReady()) {
              if (yU.markAsUnprocessed(), EU = this.isFrozen, oU) return yU._areLightsDisposed = !0, !1
            } else QU.resetCachedMaterial(), XU.setEffect(DU, yU, this._materialContext);
          return !(!XU.effect || !XU.effect.isReady()) && (yU._renderId = QU.getRenderId(), cU._wasPreviouslyReady = !EU, cU._wasPreviouslyUsingInstances = !!zU, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(XU, zU, cU) {
          let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(XU, zU, cU, AU, FU), !cU.isDirty) return null;
          cU.markAsProcessed();
          const oU = this.nS().qp(),
            DU = new bU.d;
          let EU = 0;
          cU.USESPHERICALINVERTEX && DU.addFallback(EU++, "USESPHERICALINVERTEX"), cU.FOG && DU.addFallback(EU, "FOG"), cU.SPECULARAA && DU.addFallback(EU, "SPECULARAA"), cU.POINTSIZE && DU.addFallback(EU, "POINTSIZE"), cU.LOGARITHMICDEPTH && DU.addFallback(EU, "LOGARITHMICDEPTH"), cU.PARALLAX && DU.addFallback(EU, "PARALLAX"), cU.PARALLAX_RHS && DU.addFallback(EU, "PARALLAX_RHS"), cU.PARALLAXOCCLUSION && DU.addFallback(EU++, "PARALLAXOCCLUSION"), cU.ENVIRONMENTBRDF && DU.addFallback(EU++, "ENVIRONMENTBRDF"), cU.TANGENT && DU.addFallback(EU++, "TANGENT"), cU.BUMP && DU.addFallback(EU++, "BUMP"), EU = (0, TU.D)(cU, DU, this._maxSimultaneousLights, EU), cU.SPECULARTERM && DU.addFallback(EU++, "SPECULARTERM"), cU.USESPHERICALFROMREFLECTIONMAP && DU.addFallback(EU++, "USESPHERICALFROMREFLECTIONMAP"), cU.USEIRRADIANCEMAP && DU.addFallback(EU++, "USEIRRADIANCEMAP"), cU.LIGHTMAP && DU.addFallback(EU++, "LIGHTMAP"), cU.NORMAL && DU.addFallback(EU++, "NORMAL"), cU.AMBIENT && DU.addFallback(EU++, "AMBIENT"), cU.EMISSIVE && DU.addFallback(EU++, "EMISSIVE"), cU.VERTEXCOLOR && DU.addFallback(EU++, "VERTEXCOLOR"), cU.MORPHTARGETS && DU.addFallback(EU++, "MORPHTARGETS"), cU.MULTIVIEW && DU.addFallback(0, "MULTIVIEW");
          const YU = [MU.h.PositionKind];
          cU.NORMAL && YU.push(MU.h.NormalKind), cU.TANGENT && YU.push(MU.h.TangentKind);
          for (let UU = 1; UU <= 6; ++UU) cU["UV" + UU] && YU.push(`uv${1===UU?"":UU}`);
          cU.VERTEXCOLOR && YU.push(MU.h.ColorKind), (0, TU.H)(YU, XU, cU, DU), (0, TU.K)(YU, cU), (0, TU.L)(YU, XU, cU), (0, TU.F)(YU, XU, cU);
          let NU = "pbr";
          const IU = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            pU = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, TU.kb)(IU, pU, !0);
          const aU = ["Material", "Scene", "Mesh"],
            tU = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: cU.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = DU, this._eventInfo.fallbackRank = EU, this._eventInfo.defines = cU, this._eventInfo.uniforms = IU, this._eventInfo.attributes = YU, this._eventInfo.samplers = pU, this._eventInfo.uniformBuffersNames = aU, this._eventInfo.customCode = void 0, this._eventInfo.mesh = XU, this._eventInfo.indexParameters = tU, this._callbackPluginEventGeneric(128, this._eventInfo), IX.c.AddUniformsAndSamplers(IU, pU), mU.c.AddUniforms(IU), mU.c.AddSamplers(pU), (0, EX.c)(IU), this._useVertexPulling) {
            const UU = zU?.geometry;
            UU && (this._vertexPullingMetadata = (0, YX.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, XU) => {
              IU.push(`vp_${XU}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          JU.b && (JU.b.PrepareUniforms(IU, cU), JU.b.PrepareSamplers(pU, cU)), (0, TU.mb)({
            uniformsNames: IU,
            uniformBuffersNames: aU,
            samplers: pU,
            defines: cU,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const gU = {};
          this.customShaderNameResolve && (NU = this.customShaderNameResolve(NU, IU, aU, pU, cU, YU, gU));
          const kU = cU.toString(),
            GU = oU.createEffect(NU, {
              attributes: YU,
              uniformsNames: IU,
              uniformBuffersNames: aU,
              samplers: pU,
              defines: kU,
              fallbacks: DU,
              onCompiled: yU,
              onError: QU,
              indexParameters: tU,
              processFinalCode: gU.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: cU.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, oU);
          return this._eventInfo.customCode = void 0, GU
        }
        _prepareDefines(XU, zU, cU) {
          let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const AU = zU.hasThinInstances,
            FU = this.nS(),
            oU = FU.qp();
          (0, TU.V)(FU, XU, cU, !0, this._maxSimultaneousLights, this._disableLighting), cU._needNormals = !0, (0, TU.$)(FU, cU);
          const DU = this.needAlphaBlendingForMesh(XU) && this.nS().useOrderIndependentTransparency;
          if ((0, TU.fb)(FU, cU, this.canRenderToMRT && !DU), (0, TU.bb)(FU, cU, DU), IX.c.PrepareDefines(oU.currentRenderPassId, XU, cU), cU.METALLICWORKFLOW = this.isMetallicWorkflow(), cU._areTexturesDirty) {
            cU._needUVs = !1;
            for (let UU = 1; UU <= 6; ++UU) cU["MAINUV" + UU] = !1;
            if (FU.texturesEnabled) {
              cU.ALBEDODIRECTUV = 0, cU.BASE_WEIGHTDIRECTUV = 0, cU.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, cU.AMBIENTDIRECTUV = 0, cU.OPACITYDIRECTUV = 0, cU.EMISSIVEDIRECTUV = 0, cU.REFLECTIVITYDIRECTUV = 0, cU.MICROSURFACEMAPDIRECTUV = 0, cU.METALLIC_REFLECTANCEDIRECTUV = 0, cU.REFLECTANCEDIRECTUV = 0, cU.BUMPDIRECTUV = 0, cU.LIGHTMAPDIRECTUV = 0, oU.getCaps().textureLOD && (cU.LODBASEDMICROSFURACE = !0), this._albedoTexture && KU.b.DiffuseTextureEnabled ? ((0, TU.Z)(this._albedoTexture, cU, "ALBEDO"), cU.GAMMAALBEDO = this._albedoTexture.gammaSpace) : cU.ALBEDO = !1, this._baseWeightTexture && KU.b.BaseWeightTextureEnabled ? (0, TU.Z)(this._baseWeightTexture, cU, "BASE_WEIGHT") : cU.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && KU.b.BaseDiffuseRoughnessTextureEnabled ? (0, TU.Z)(this._baseDiffuseRoughnessTexture, cU, "BASE_DIFFUSE_ROUGHNESS") : cU.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && KU.b.AmbientTextureEnabled ? ((0, TU.Z)(this._ambientTexture, cU, "AMBIENT"), cU.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : cU.AMBIENT = !1, this._opacityTexture && KU.b.OpacityTextureEnabled ? ((0, TU.Z)(this._opacityTexture, cU, "OPACITY"), cU.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : cU.OPACITY = !1;
              const UU = this._getReflectionTexture(),
                XU = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || oU.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, TU.T)(FU, UU, cU, this.realTimeFiltering, this.realTimeFilteringQuality, !XU), this._lightmapTexture && KU.b.LightmapTextureEnabled ? ((0, TU.Z)(this._lightmapTexture, cU, "LIGHTMAP"), cU.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, cU.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, cU.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : cU.LIGHTMAP = !1, this._emissiveTexture && KU.b.EmissiveTextureEnabled ? ((0, TU.Z)(this._emissiveTexture, cU, "EMISSIVE"), cU.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : cU.EMISSIVE = !1, KU.b.SpecularTextureEnabled ? (this._metallicTexture ? ((0, TU.Z)(this._metallicTexture, cU, "REFLECTIVITY"), cU.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, cU.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, cU.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, cU.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, cU.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, TU.Z)(this._reflectivityTexture, cU, "REFLECTIVITY"), cU.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, cU.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, cU.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : cU.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (cU.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, TU.Z)(this._metallicReflectanceTexture, cU, "METALLIC_REFLECTANCE"), cU.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : cU.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, TU.Z)(this._reflectanceTexture, cU, "REFLECTANCE"), cU.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : cU.REFLECTANCE = !1) : (cU.METALLIC_REFLECTANCE = !1, cU.REFLECTANCE = !1), this._microSurfaceTexture ? (0, TU.Z)(this._microSurfaceTexture, cU, "MICROSURFACEMAP") : cU.MICROSURFACEMAP = !1) : (cU.REFLECTIVITY = !1, cU.MICROSURFACEMAP = !1), oU.getCaps().standardDerivatives && this._bumpTexture && KU.b.BumpTextureEnabled && !this._disableBumpMap ? ((0, TU.Z)(this._bumpTexture, cU, "BUMP"), this._useParallax && this._albedoTexture && KU.b.DiffuseTextureEnabled ? (cU.PARALLAX = !0, cU.PARALLAX_RHS = FU.useRightHandedSystem, cU.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : cU.PARALLAX = !1, cU.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (cU.BUMP = !1, cU.PARALLAX = !1, cU.PARALLAX_RHS = !1, cU.PARALLAXOCCLUSION = !1, cU.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && KU.b.ReflectionTextureEnabled ? (cU.ENVIRONMENTBRDF = !0, cU.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (cU.ENVIRONMENTBRDF = !1, cU.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? cU.ALPHAFROMALBEDO = !0 : cU.ALPHAFROMALBEDO = !1
            }
            cU.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === UU.LIGHTFALLOFF_STANDARD ? (cU.USEPHYSICALLIGHTFALLOFF = !1, cU.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === UU.LIGHTFALLOFF_GLTF ? (cU.USEPHYSICALLIGHTFALLOFF = !1, cU.USEGLTFLIGHTFALLOFF = !0) : (cU.USEPHYSICALLIGHTFALLOFF = !0, cU.USEGLTFLIGHTFALLOFF = !1), cU.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? cU.TWOSIDEDLIGHTING = !0 : cU.TWOSIDEDLIGHTING = !1, cU.MIRRORED = !!FU._mirroredCameraPosition, cU.SPECULARAA = oU.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(cU._areTexturesDirty || cU._areMiscDirty) && (cU.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, cU.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, cU.ALPHABLEND = this.needAlphaBlendingForMesh(XU), cU.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, cU.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), cU._areTexturesDirty && (cU.TEXTURE_REPETITION_MODE = oU.version > 1 || oU.isWebGPU ? this.textureRepetitionMode : 0), cU._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(cU), cU.FORCENORMALFORWARD = this._forceNormalForward, cU.RADIANCEOCCLUSION = this._useRadianceOcclusion, cU.HORIZONOCCLUSION = this._useHorizonOcclusion, cU._areMiscDirty && ((0, TU._)(XU, FU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(XU), cU, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zU, this._isVertexOutputInvariant), cU.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !XU.isVerticesDataPresent(MU.h.NormalKind), cU.DEBUGMODE = this._debugMode), (0, TU.S)(FU, oU, this, cU, !!yU, QU, AU), this._eventInfo.defines = cU, this._eventInfo.mesh = XU, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, TU.Q)(XU, cU, !0, !0, !0, this._transparencyMode !== UU.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(UU, XU, zU) {
          const cU = {
            clipPlane: !1,
            useInstances: !1,
            ...zU
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const zU = new BX(this._eventInfo.defineNames),
              yU = this._prepareEffect(UU, UU, zU, void 0, void 0, cU.useInstances, cU.clipPlane);
            this._onEffectCreatedObservable && (kX.effect = yU, kX.subMesh = null, this._onEffectCreatedObservable.notifyObservers(kX)), yU.isReady() ? XU && XU(this) : yU.onCompileObservable.add((() => {
              XU && XU(this)
            }))
          })()
        }
        buildUniformLayout() {
          const UU = this._uniformBuffer;
          UU.addUniform("vAlbedoInfos", 2), UU.addUniform("vBaseWeightInfos", 2), UU.addUniform("vBaseDiffuseRoughnessInfos", 2), UU.addUniform("vAmbientInfos", 4), UU.addUniform("vOpacityInfos", 2), UU.addUniform("vEmissiveInfos", 2), UU.addUniform("vLightmapInfos", 2), UU.addUniform("vReflectivityInfos", 3), UU.addUniform("vMicroSurfaceSamplerInfos", 2), UU.addUniform("vBumpInfos", 3), UU.addUniform("albedoMatrix", 16), UU.addUniform("baseWeightMatrix", 16), UU.addUniform("baseDiffuseRoughnessMatrix", 16), UU.addUniform("ambientMatrix", 16), UU.addUniform("opacityMatrix", 16), UU.addUniform("emissiveMatrix", 16), UU.addUniform("lightmapMatrix", 16), UU.addUniform("reflectivityMatrix", 16), UU.addUniform("microSurfaceSamplerMatrix", 16), UU.addUniform("bumpMatrix", 16), UU.addUniform("vTangentSpaceParams", 2), UU.addUniform("vAlbedoColor", 4), UU.addUniform("baseWeight", 1), UU.addUniform("baseDiffuseRoughness", 1), UU.addUniform("vLightingIntensity", 4), UU.addUniform("pointSize", 1), UU.addUniform("vReflectivityColor", 4), UU.addUniform("vEmissiveColor", 3), UU.addUniform("vAmbientColor", 3), UU.addUniform("vDebugMode", 2), UU.addUniform("vMetallicReflectanceFactors", 4), UU.addUniform("vMetallicReflectanceInfos", 2), UU.addUniform("metallicReflectanceMatrix", 16), UU.addUniform("vReflectanceInfos", 2), UU.addUniform("reflectanceMatrix", 16), UU.addUniform("cameraInfo", 4), UU.addUniform("vTextureRepetitionHexTilingParams", 4), (0, TU.ib)(UU, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(UU, XU, zU) {
          const cU = this.nS(),
            yU = zU.materialDefines;
          if (!yU) return;
          const QU = zU.effect;
          if (!QU) return;
          this._activeEffect = QU, XU.getMeshUniformBuffer().bindToEffect(QU, "Mesh"), XU.transferToEffect(UU);
          const AU = cU.qp();
          this._uniformBuffer.bindToEffect(QU, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, cU, XU, UU, this.isFrozen), IX.c.Bind(AU.currentRenderPassId, this._activeEffect, XU, UU, this);
          const FU = cU.activeCamera;
          FU ? this._uniformBuffer.updateFloat4("cameraInfo", FU.minZ, FU.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const oU = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", oU[0], oU[1], oU[2], oU[3]), this._eventInfo.subMesh = zU, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), yU.OBJECTSPACE_NORMALMAP && (UU.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const DU = this._mustRebind(cU, QU, zU, XU.visibility),
            EU = AU._features.needToAlwaysBindUniformBuffers;
          (0, TU.h)(XU, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, YX.c)(this._activeEffect, this._vertexPullingMetadata);
          let YU = null;
          const NU = this._uniformBuffer;
          if (DU) {
            if (this.bindViewProjection(QU), YU = this._getReflectionTexture(), !NU.useUbo || !this.isFrozen || !NU.isSync || zU._drawWrapper._forceRebindOnNextCall) {
              if (cU.texturesEnabled && (this._albedoTexture && KU.b.DiffuseTextureEnabled && (NU.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, TU.B)(this._albedoTexture, NU, "albedo")), this._baseWeightTexture && KU.b.BaseWeightTextureEnabled && (NU.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, TU.B)(this._baseWeightTexture, NU, "baseWeight")), this._baseDiffuseRoughnessTexture && KU.b.BaseDiffuseRoughnessTextureEnabled && (NU.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, TU.B)(this._baseDiffuseRoughnessTexture, NU, "baseDiffuseRoughness")), this._ambientTexture && KU.b.AmbientTextureEnabled && (NU.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, TU.B)(this._ambientTexture, NU, "ambient")), this._opacityTexture && KU.b.OpacityTextureEnabled && (NU.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, TU.B)(this._opacityTexture, NU, "opacity")), this._emissiveTexture && KU.b.EmissiveTextureEnabled && (NU.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, TU.B)(this._emissiveTexture, NU, "emissive")), this._lightmapTexture && KU.b.LightmapTextureEnabled && (NU.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, TU.B)(this._lightmapTexture, NU, "lightmap")), KU.b.SpecularTextureEnabled && (this._metallicTexture ? (NU.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, TU.B)(this._metallicTexture, NU, "reflectivity")) : this._reflectivityTexture && (NU.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, TU.B)(this._reflectivityTexture, NU, "reflectivity")), this._metallicReflectanceTexture && (NU.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, TU.B)(this._metallicReflectanceTexture, NU, "metallicReflectance")), this._reflectanceTexture && yU.REFLECTANCE && (NU.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, TU.B)(this._reflectanceTexture, NU, "reflectance")), this._microSurfaceTexture && (NU.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, TU.B)(this._microSurfaceTexture, NU, "microSurfaceSampler"))), this._bumpTexture && AU.getCaps().standardDerivatives && KU.b.BumpTextureEnabled && !this._disableBumpMap && (NU.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, TU.B)(this._bumpTexture, NU, "bump"), cU._mirroredCameraPosition ? NU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : NU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, TU.m)(cU, yU, NU, this._reflectionColor, YU, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && NU.updateFloat("pointSize", this.pointSize), yU.METALLICWORKFLOW) {
                lU.i.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, lU.i.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const UU = this.subSurface?._indexOfRefraction ?? 1.5,
                  XU = 1;
                lU.i.Color4[0].b = UU;
                const zU = Math.pow((UU - XU) / (UU + XU), 2);
                lU.i.Color4[0].a = zU, NU.updateDirectColor4("vReflectivityColor", lU.i.Color4[0]), NU.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else NU.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              NU.updateColor3("vEmissiveColor", KU.b.EmissiveTextureEnabled ? this._emissiveColor : lU.b.BlackReadOnly), !yU.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? NU.updateColor4("vAlbedoColor", this._albedoColor, 1) : NU.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), NU.updateFloat("baseWeight", this._baseWeight), NU.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * cU.environmentIntensity, this._lightingInfos.w = this._specularIntensity, NU.updateVector4("vLightingIntensity", this._lightingInfos), cU.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), NU.updateColor3("vAmbientColor", this._globalAmbientColor), NU.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            cU.texturesEnabled && (this._albedoTexture && KU.b.DiffuseTextureEnabled && NU.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && KU.b.BaseWeightTextureEnabled && NU.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && KU.b.BaseDiffuseRoughnessTextureEnabled && NU.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && KU.b.AmbientTextureEnabled && NU.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && KU.b.OpacityTextureEnabled && NU.setTexture("opacitySampler", this._opacityTexture), (0, TU.p)(cU, yU, NU, YU, this.realTimeFiltering), yU.ENVIRONMENTBRDF && NU.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && KU.b.EmissiveTextureEnabled && NU.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && KU.b.LightmapTextureEnabled && NU.setTexture("lightmapSampler", this._lightmapTexture), KU.b.SpecularTextureEnabled && (this._metallicTexture ? NU.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && NU.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && NU.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && yU.REFLECTANCE && NU.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && NU.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && AU.getCaps().standardDerivatives && KU.b.BumpTextureEnabled && !this._disableBumpMap && NU.setTexture("bumpSampler", this._bumpTexture)), this.nS().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(XU) && this.nS().depthPeelingRenderer.bind(QU), this._eventInfo.subMesh = zU, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, EX.e)(this._activeEffect, this, cU), this.bindEyePosition(QU)
          } else EU && (this._needToBindSceneUbo = !0);
          !DU && this.isFrozen && !EU || !cU.lightsEnabled || this._disableLighting || (0, TU.q)(cU, XU, this._activeEffect, yU, this._maxSimultaneousLights), !DU && this.isFrozen || ((cU.fogEnabled && XU.applyFog && cU.fogMode !== iU.d.FOGMODE_NONE || YU || this.subSurface.refractionTexture || XU.receiveShadows || yU.PREPASS || yU.CLUSTLIGHT_BATCH) && this.bindView(QU), (0, TU.i)(cU, XU, this._activeEffect, !0), yU.NUM_MORPH_INFLUENCERS && (0, TU.w)(XU, this._activeEffect), yU.BAKED_VERTEX_ANIMATION_TEXTURE && XU.bakedVertexAnimationManager?.bind(QU, yU.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, TU.t)(yU, this._activeEffect, cU)), this._afterBind(XU, this._activeEffect, zU), NU.update()
        }
        getAnimatables() {
          const UU = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && UU.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && UU.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && UU.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && UU.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && UU.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && UU.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && UU.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? UU.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && UU.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && UU.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && UU.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && UU.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && UU.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && UU.push(this._microSurfaceTexture), UU
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.nS().environmentTexture
        }
        getActiveTextures() {
          const UU = super.getActiveTextures();
          return this._albedoTexture && UU.push(this._albedoTexture), this._baseWeightTexture && UU.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && UU.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && UU.push(this._ambientTexture), this._opacityTexture && UU.push(this._opacityTexture), this._reflectionTexture && UU.push(this._reflectionTexture), this._emissiveTexture && UU.push(this._emissiveTexture), this._reflectivityTexture && UU.push(this._reflectivityTexture), this._metallicTexture && UU.push(this._metallicTexture), this._metallicReflectanceTexture && UU.push(this._metallicReflectanceTexture), this._reflectanceTexture && UU.push(this._reflectanceTexture), this._microSurfaceTexture && UU.push(this._microSurfaceTexture), this._bumpTexture && UU.push(this._bumpTexture), this._lightmapTexture && UU.push(this._lightmapTexture), UU
        }
        hasTexture(UU) {
          return !!super.hasTexture(UU) || (this._albedoTexture === UU || (this._baseWeightTexture === UU || (this._baseDiffuseRoughnessTexture === UU || (this._ambientTexture === UU || (this._opacityTexture === UU || (this._reflectionTexture === UU || (this._emissiveTexture === UU || (this._reflectivityTexture === UU || (this._metallicTexture === UU || (this._metallicReflectanceTexture === UU || (this._reflectanceTexture === UU || (this._microSurfaceTexture === UU || (this._bumpTexture === UU || this._lightmapTexture === UU)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const UU = this.nS().enableSubSurfaceForPrePass();
          return UU && (UU.enabled = !0), !0
        }
        dispose(UU, XU) {
          this._breakShaderLoadedCheck = !0, XU && (this._environmentBRDFTexture && this.nS().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(UU, XU)
        }
      }, XU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(yU[Symbol.metadata] ?? null) : void 0;
        cU = [(0, LU.c)("_markAllSubMeshesAsMiscDirty")], (0, dU.j)(UU, null, cU, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "debugMode" in UU,
            get: UU => UU.debugMode,
            set: (UU, XU) => {
              UU.debugMode = XU
            }
          },
          metadata: XU
        }, AU, FU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU.PBRMATERIAL_OPAQUE = QU.c.MATERIAL_OPAQUE, UU.PBRMATERIAL_ALPHATEST = QU.c.MATERIAL_ALPHATEST, UU.PBRMATERIAL_ALPHABLEND = QU.c.MATERIAL_ALPHABLEND, UU.PBRMATERIAL_ALPHATESTANDBLEND = QU.c.MATERIAL_ALPHATESTANDBLEND, UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, UU.LIGHTFALLOFF_PHYSICAL = 0, UU.LIGHTFALLOFF_GLTF = 1, UU.LIGHTFALLOFF_STANDARD = 2, UU.ForceGLSL = !1, UU._ShaderLoader = new NX.e((() => [Promise.all([zU.e(623), zU.e(634)]).then((() => zU(64182))), Promise.all([zU.e(628), zU.e(624), zU.e(685), zU.e(637), zU.e(684)]).then((() => zU(64205)))]), (() => [Promise.all([zU.e(642), zU.e(644), zU.e(651)]).then((() => zU(64288))), Promise.all([zU.e(642), zU.e(645), zU.e(688), zU.e(655), zU.e(687)]).then((() => zU(64313)))])), UU
    })();
    Object.getOwnPropertyDescriptor(RX.prototype, "decalMap") || Object.defineProperty(RX.prototype, "decalMap", (0, gX.i)("PBRBaseMaterial", "decalMap")), (0, zU(44532).b)();
    var PX = zU(41134);
    var WX = zU(41205),
      dX = zU(44516),
      LX = zU(40940),
      eX = zU(40948),
      CX = zU(41048);
    let wX = !1;
    const qX = new lU.e,
      OX = new lU.e;
    class SX extends dX.e {
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
      set wrapU(UU) {
        if (this._textures)
          for (let XU = 0; XU < this._textures.length; XU++) this._textures[XU].wrapU = UU
      }
      set wrapV(UU) {
        if (this._textures)
          for (let XU = 0; XU < this._textures.length; XU++) this._textures[XU].wrapV = UU
      }
      constructor(UU, XU, zU, cU, yU, QU) {
        const AU = !(!yU || !yU.generateMipMaps) && yU.generateMipMaps,
          FU = !(!yU || !yU.generateDepthTexture) && yU.generateDepthTexture,
          oU = yU && yU.depthTextureFormat ? yU.depthTextureFormat : 15,
          DU = !yU || void 0 === yU.doNotChangeAspectRatio || yU.doNotChangeAspectRatio,
          EU = !(!yU || !yU.drawOnlyOnFirstAttachmentByDefault) && yU.drawOnlyOnFirstAttachmentByDefault;
        if (super(UU, XU, cU, AU, DU, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), wX || (wX = !0, eX.ThinEngine.prototype.restoreSingleAttachment = function() {
            const UU = this._gl;
            this.bindAttachments([UU.BACK])
          }, eX.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const UU = this._gl;
            this.bindAttachments([UU.COLOR_ATTACHMENT0])
          }, eX.ThinEngine.prototype.buildTextureLayout = function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const zU = this._gl,
              cU = [];
            if (XU) cU.push(zU.BACK);
            else
              for (let yU = 0; yU < UU.length; yU++) UU[yU] ? cU.push(zU["COLOR_ATTACHMENT" + yU]) : cU.push(zU.NONE);
            return cU
          }, eX.ThinEngine.prototype.bindAttachments = function(UU) {
            const XU = this._gl,
              zU = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, zU)
              for (let cU = 0; cU < UU.length; cU++) UU[cU] !== XU.NONE && zU[cU] && (0, CX.i)(zU[cU].format) && (this._integerMRTAttachmentsMask |= 1 << cU);
            XU.drawBuffers(UU)
          }, eX.ThinEngine.prototype.clearAttachments = function(UU, XU, zU, cU) {
            let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const AU = this._currentRenderTarget?.textures;
            let FU = !1;
            if (zU && UU && AU)
              for (let oU = 0; oU < XU.length; oU++) {
                const UU = AU[oU];
                if (XU[oU] !== this._gl.NONE && UU && (0, CX.i)(UU.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  FU = !0;
                  break
                }
              }
            if (!FU || !UU || !AU) return this.bindAttachments(XU), void this.clear(UU, zU, cU, yU, QU);
            this.bindAttachments(XU), this._applyColorWriteState();
            for (let oU = 0; oU < XU.length; oU++) {
              const zU = AU[oU];
              if (XU[oU] !== this._gl.NONE && zU) {
                let XU = UU;
                if ((0, CX.i)(zU.format)) {
                  const cU = (0, CX.j)(zU.type);
                  XU = cU ? qX : OX;
                  const yU = cU ? 255 : 1;
                  XU.r = Math.round(UU.r * yU), XU.g = Math.round(UU.g * yU), XU.b = Math.round(UU.b * yU), XU.a = Math.round(UU.a * yU)
                }
                this._clearColorAttachment(oU, XU, zU.format, zU.type)
              }
            }
            if (cU || yU) {
              const UU = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, cU, yU, QU)
              } finally {
                this._integerMRTAttachmentsMask = UU
              }
            }
          }, eX.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zU = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, UU.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(UU), XU || this.generateMipMapsMultiFramebuffer(UU), zU && (UU._MSAAFramebuffer && this._bindUnboundFramebuffer(UU._framebuffer), zU()), this._bindUnboundFramebuffer(null)
          }, eX.ThinEngine.prototype.createMultipleRenderTarget = function(UU, XU) {
            let zU, cU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              yU = !1,
              QU = !0,
              AU = !1,
              FU = !1,
              oU = 1,
              DU = 1,
              EU = [],
              YU = [],
              NU = [],
              IU = [],
              pU = [],
              aU = [],
              tU = [],
              gU = [],
              kU = [],
              GU = !1;
            const BU = this._createHardwareRenderTargetWrapper(!0, !1, UU);
            void 0 !== XU && (yU = void 0 !== XU.generateMipMaps && XU.generateMipMaps, QU = void 0 === XU.generateDepthBuffer || XU.generateDepthBuffer, AU = void 0 !== XU.generateStencilBuffer && XU.generateStencilBuffer, FU = void 0 !== XU.generateDepthTexture && XU.generateDepthTexture, oU = XU.qFU ?? 1, DU = XU.samples ?? DU, EU = XU.types || EU, YU = XU.samplingModes || YU, NU = XU.useSRGBBuffers || NU, IU = XU.formats || IU, pU = XU.targetTypes || pU, aU = XU.faceIndex || aU, tU = XU.layerIndex || tU, gU = XU.layerCounts || gU, kU = XU.labels || kU, GU = XU.dontCreateTextures ?? !1, this.Fa > 1 && (13 === XU.depthTextureFormat || 17 === XU.depthTextureFormat || 16 === XU.depthTextureFormat || 14 === XU.depthTextureFormat || 18 === XU.depthTextureFormat) && (zU = XU.depthTextureFormat)), void 0 === zU && (zU = AU ? 13 : 14);
            const ZU = this._gl,
              RU = this._currentFramebuffer,
              PU = ZU.createFramebuffer();
            this._bindUnboundFramebuffer(PU);
            const WU = UU.width ?? UU,
              dU = UU.height ?? UU,
              LU = [],
              CU = [],
              wU = this.Fa > 1 && (13 === zU || 17 === zU || 18 === zU);
            BU.label = XU?.label ?? "MultiRenderTargetWrapper", BU._framebuffer = PU, BU._generateDepthBuffer = FU || QU, BU._generateStencilBuffer = FU ? wU : AU, BU._depthStencilBuffer = this._setupFramebufferDepthAttachments(BU._generateStencilBuffer, BU._generateDepthBuffer, WU, dU, 1, zU), BU._attachments = CU;
            for (let qU = 0; qU < oU; qU++) {
              let UU = YU[qU] || 3,
                XU = EU[qU] || 0,
                zU = NU[qU] || !1;
              const cU = IU[qU] || 5,
                QU = pU[qU] || 3553,
                AU = gU[qU] ?? 1;
              (1 !== XU || this._caps.textureFloatLinearFiltering) && (2 !== XU || this._caps.textureHalfFloatLinearFiltering) || (UU = 1);
              const FU = this._getSamplingParameters(UU, yU);
              1 !== XU || this._caps.textureFloat || (XU = 0, eU.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), zU = zU && this._caps.supportSRGBBuffers && (this.Fa > 1 || this.isWebGPU);
              const oU = this.Fa > 1,
                DU = ZU[oU ? "COLOR_ATTACHMENT" + qU : "COLOR_ATTACHMENT" + qU + "_WEBGL"];
              if (CU.push(DU), -1 === QU || GU) continue;
              const aU = new LX.e(this, 6);
              LU[qU] = aU, ZU.activeTexture(ZU["TEXTURE" + qU]), ZU.bindTexture(QU, aU._hardwareTexture.underlyingResource), ZU.texParameteri(QU, ZU.TEXTURE_MAG_FILTER, FU.mag), ZU.texParameteri(QU, ZU.TEXTURE_MIN_FILTER, FU.min), ZU.texParameteri(QU, ZU.TEXTURE_WRAP_S, ZU.CLAMP_TO_EDGE), ZU.texParameteri(QU, ZU.TEXTURE_WRAP_T, ZU.CLAMP_TO_EDGE);
              const tU = this._getRGBABufferInternalSizedFormat(XU, cU, zU),
                RU = this._getInternalFormat(cU),
                PU = this._getWebGLTextureType(XU);
              if (!oU || 35866 !== QU && 32879 !== QU)
                if (34067 === QU) {
                  for (let UU = 0; UU < 6; UU++) ZU.texImage2D(ZU.TEXTURE_CUBE_MAP_POSITIVE_X + UU, 0, tU, WU, dU, 0, RU, PU, null);
                  aU.isCube = !0
                } else ZU.texImage2D(ZU.TEXTURE_2D, 0, tU, WU, dU, 0, RU, PU, null);
              else 35866 === QU ? aU.is2DArray = !0 : aU.is3D = !0, aU.baseDepth = aU.depth = AU, ZU.texImage3D(QU, 0, tU, WU, dU, AU, 0, RU, PU, null);
              yU && ZU.generateMipmap(QU), this._bindTextureDirectly(QU, null), aU.baseWidth = WU, aU.baseHeight = dU, aU.width = WU, aU.height = dU, aU.isReady = !0, aU.samples = 1, aU.generateMipMaps = yU, aU.samplingMode = UU, aU.type = XU, aU._useSRGBBuffer = zU, aU.format = cU, aU.label = kU[qU] ?? BU.label + "-Texture" + qU, this._internalTexturesCache.push(aU)
            }
            if (FU && this._caps.depthTextureExtension && !GU) {
              const UU = new LX.e(this, 14);
              let XU = 5,
                cU = ZU.DEPTH_COMPONENT16,
                QU = ZU.DEPTH_COMPONENT,
                AU = ZU.UNSIGNED_SHORT,
                FU = ZU.DEPTH_ATTACHMENT;
              this.Fa < 2 ? cU = ZU.DEPTH_COMPONENT : 14 === zU ? (XU = 1, AU = ZU.FLOAT, cU = ZU.DEPTH_COMPONENT32F) : 18 === zU ? (XU = 0, AU = ZU.FLOAT_32_UNSIGNED_INT_24_8_REV, cU = ZU.DEPTH32F_STENCIL8, QU = ZU.DEPTH_STENCIL, FU = ZU.DEPTH_STENCIL_ATTACHMENT) : 16 === zU ? (XU = 0, AU = ZU.UNSIGNED_INT, cU = ZU.DEPTH_COMPONENT24, FU = ZU.DEPTH_ATTACHMENT) : 13 !== zU && 17 !== zU || (XU = 12, AU = ZU.UNSIGNED_INT_24_8, cU = ZU.DEPTH24_STENCIL8, QU = ZU.DEPTH_STENCIL, FU = ZU.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(ZU.TEXTURE_2D, UU, !0), ZU.texParameteri(ZU.TEXTURE_2D, ZU.TEXTURE_MAG_FILTER, ZU.NEAREST), ZU.texParameteri(ZU.TEXTURE_2D, ZU.TEXTURE_MIN_FILTER, ZU.NEAREST), ZU.texParameteri(ZU.TEXTURE_2D, ZU.TEXTURE_WRAP_S, ZU.CLAMP_TO_EDGE), ZU.texParameteri(ZU.TEXTURE_2D, ZU.TEXTURE_WRAP_T, ZU.CLAMP_TO_EDGE), ZU.texImage2D(ZU.TEXTURE_2D, 0, cU, WU, dU, 0, QU, AU, null), ZU.framebufferTexture2D(ZU.FRAMEBUFFER, FU, ZU.TEXTURE_2D, UU._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(ZU.TEXTURE_2D, null), BU._depthStencilTexture = UU, BU._depthStencilTextureWithStencil = wU, UU.baseWidth = WU, UU.baseHeight = dU, UU.width = WU, UU.height = dU, UU.isReady = !0, UU.samples = 1, UU.generateMipMaps = yU, UU.samplingMode = 1, UU.format = zU, UU.type = XU, UU.label = BU.label + "-DepthStencil", LU[oU] = UU, this._internalTexturesCache.push(UU)
            }
            if (BU.setTextures(LU), cU && ZU.drawBuffers(CU), this._bindUnboundFramebuffer(RU), BU.setLayerAndFaceIndices(tU, aU), this.resetTextureCache(), GU) {
              if (DU > 1) {
                const UU = ZU.createFramebuffer();
                if (!UU) throw new Error("Unable to create multi sampled framebuffer");
                BU._samples = DU, BU._MSAAFramebuffer = UU, oU > 0 && cU && (this._bindUnboundFramebuffer(UU), ZU.drawBuffers(CU), this._bindUnboundFramebuffer(RU))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(BU, DU, cU);
            return BU
          }, eX.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(UU, XU) {
            let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Fa < 2 || !UU) return 1;
            if (UU.samples === XU) return XU;
            const cU = this._gl;
            XU = Math.min(XU, this.getCaps().maxMSAASamples), UU._depthStencilBuffer && (cU.deleteRenderbuffer(UU._depthStencilBuffer), UU._depthStencilBuffer = null), UU._MSAAFramebuffer && (cU.deleteFramebuffer(UU._MSAAFramebuffer), UU._MSAAFramebuffer = null);
            const yU = UU._attachments.length;
            for (let AU = 0; AU < yU; AU++) {
              const XU = UU.textures[AU]._hardwareTexture;
              XU?.releaseMSAARenderBuffers()
            }
            if (XU > 1 && "function" === typeof cU.renderbufferStorageMultisample) {
              const QU = cU.createFramebuffer();
              if (!QU) throw new Error("Unable to create multi sampled framebuffer");
              UU._MSAAFramebuffer = QU, this._bindUnboundFramebuffer(QU);
              const AU = [];
              for (let zU = 0; zU < yU; zU++) {
                const yU = UU.textures[zU],
                  QU = yU._hardwareTexture,
                  FU = cU[this.Fa > 1 ? "COLOR_ATTACHMENT" + zU : "COLOR_ATTACHMENT" + zU + "_WEBGL"],
                  oU = this._createRenderBuffer(yU.width, yU.height, XU, -1, this._getRGBABufferInternalSizedFormat(yU.type, yU.format, yU._useSRGBBuffer), FU);
                if (!oU) throw new Error("Unable to create multi sampled framebuffer");
                QU.addMSAARenderBuffer(oU), yU.samples = XU, AU.push(FU)
              }
              zU && cU.drawBuffers(AU)
            } else this._bindUnboundFramebuffer(UU._framebuffer);
            const QU = UU._depthStencilTexture ? UU._depthStencilTexture.format : void 0;
            return UU._depthStencilBuffer = this._setupFramebufferDepthAttachments(UU._generateStencilBuffer, UU._generateDepthBuffer, UU.width, UU.height, XU, QU), this._bindUnboundFramebuffer(null), UU._samples = XU, XU
          }, eX.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(UU) {
            const XU = UU,
              zU = this._gl;
            if (XU.isMulti)
              for (let cU = 0; cU < XU._attachments.length; cU++) {
                const UU = XU.textures[cU];
                !UU?.generateMipMaps || UU?.isCube || UU?.is3D || (this._bindTextureDirectly(zU.TEXTURE_2D, UU, !0), zU.generateMipmap(zU.TEXTURE_2D), this._bindTextureDirectly(zU.TEXTURE_2D, null))
              }
          }, eX.ThinEngine.prototype.resolveMultiFramebuffer = function(UU) {
            const XU = UU,
              zU = this._gl;
            if (!XU._MSAAFramebuffer || !XU.isMulti) return;
            let cU = XU.resolveMSAAColors ? zU.COLOR_BUFFER_BIT : 0;
            cU |= XU._generateDepthBuffer && XU.resolveMSAADepth ? zU.DEPTH_BUFFER_BIT : 0, cU |= XU._generateStencilBuffer && XU.resolveMSAAStencil ? zU.STENCIL_BUFFER_BIT : 0;
            const yU = XU._attachments,
              QU = yU.length;
            zU.bindFramebuffer(zU.READ_FRAMEBUFFER, XU._MSAAFramebuffer), zU.bindFramebuffer(zU.DRAW_FRAMEBUFFER, XU._framebuffer);
            for (let AU = 0; AU < QU; AU++) {
              const UU = XU.textures[AU];
              for (let XU = 0; XU < QU; XU++) yU[XU] = zU.NONE;
              yU[AU] = zU[this.Fa > 1 ? "COLOR_ATTACHMENT" + AU : "COLOR_ATTACHMENT" + AU + "_WEBGL"], zU.readBuffer(yU[AU]), zU.drawBuffers(yU), zU.blitFramebuffer(0, 0, UU.width, UU.height, 0, 0, UU.width, UU.height, cU, zU.NEAREST)
            }
            for (let AU = 0; AU < QU; AU++) yU[AU] = zU[this.Fa > 1 ? "COLOR_ATTACHMENT" + AU : "COLOR_ATTACHMENT" + AU + "_WEBGL"];
            zU.drawBuffers(yU), zU.bindFramebuffer(this._gl.FRAMEBUFFER, XU._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = QU;
        const YU = [],
          NU = [],
          IU = [],
          pU = [],
          aU = [],
          tU = [],
          gU = [],
          kU = [];
        this._initTypes(zU, YU, NU, IU, pU, aU, tU, gU, kU, yU);
        const GU = !yU || void 0 === yU.generateDepthBuffer || yU.generateDepthBuffer,
          BU = !(!yU || void 0 === yU.generateStencilBuffer) && yU.generateStencilBuffer,
          ZU = yU && yU.samples ? yU.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: NU,
          generateMipMaps: AU,
          generateDepthBuffer: GU,
          generateStencilBuffer: BU,
          generateDepthTexture: FU,
          depthTextureFormat: oU,
          types: YU,
          qFU: zU,
          useSRGBBuffers: IU,
          samples: ZU,
          formats: pU,
          targetTypes: aU,
          faceIndex: tU,
          layerIndex: gU,
          layerCounts: kU,
          labels: QU,
          label: UU
        }, this._count = zU, this._drawOnlyOnFirstAttachmentByDefault = EU, zU > 0 && (this._createInternalTextures(), this._createTextures(QU))
      }
      _initTypes(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        for (let EU = 0; EU < UU; EU++) DU && DU.types && void 0 !== DU.types[EU] ? XU.push(DU.types[EU]) : XU.push(DU && DU.defaultType ? DU.defaultType : 0), DU && DU.samplingModes && void 0 !== DU.samplingModes[EU] ? zU.push(DU.samplingModes[EU]) : zU.push(wU.e.BILINEAR_SAMPLINGMODE), DU && DU.useSRGBBuffers && void 0 !== DU.useSRGBBuffers[EU] ? cU.push(DU.useSRGBBuffers[EU]) : cU.push(!1), DU && DU.formats && void 0 !== DU.formats[EU] ? yU.push(DU.formats[EU]) : yU.push(5), DU && DU.targetTypes && void 0 !== DU.targetTypes[EU] ? QU.push(DU.targetTypes[EU]) : QU.push(3553), DU && DU.faceIndex && void 0 !== DU.faceIndex[EU] ? AU.push(DU.faceIndex[EU]) : AU.push(0), DU && DU.layerIndex && void 0 !== DU.layerIndex[EU] ? FU.push(DU.layerIndex[EU]) : FU.push(0), DU && DU.layerCounts && void 0 !== DU.layerCounts[EU] ? oU.push(DU.layerCounts[EU]) : oU.push(1)
      }
      _createInternaTextureIndexMapping() {
        const UU = {},
          XU = [];
        if (!this._renderTarget) return XU;
        const zU = this._renderTarget.textures;
        for (let cU = 0; cU < zU.length; cU++) {
          const yU = zU[cU];
          if (!yU) continue;
          const QU = UU[yU.uniqueId];
          void 0 !== QU ? XU[cU] = QU : UU[yU.uniqueId] = cU
        }
        return XU
      }
      _rebuild() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || UU) return;
        const cU = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), XU && (this._releaseTextures(), this._createTextures(zU));
        const yU = this._renderTarget.textures;
        for (let QU = 0; QU < yU.length; QU++) {
          const UU = this._textures[QU];
          void 0 !== cU[QU] && this._renderTarget.setTexture(yU[cU[QU]], QU), UU._texture = yU[QU], UU._texture && (UU._noMipmap = !UU._texture.useMipMaps, UU._useSRGBBuffer = UU._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let UU = 0; UU < this._textures.length; UU++) this._textures[UU]._texture = null, this._textures[UU].dispose()
      }
      _createTextures(UU) {
        const XU = this._renderTarget.textures;
        this._textures = [];
        for (let zU = 0; zU < XU.length; zU++) {
          const cU = new wU.e(null, this.nS());
          UU?.[zU] && (cU.name = UU[zU]), cU._texture = XU[zU], cU._texture && (cU._noMipmap = !cU._texture.useMipMaps, cU._useSRGBBuffer = cU._texture._useSRGBBuffer), this._textures.push(cU)
        }
      }
      setInternalTexture(UU, XU) {
        let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === XU && (this._texture = UU), this.renderTarget.setTexture(UU, XU, zU), this.textures[XU] || (this.textures[XU] = new wU.e(null, this.nS()), this.textures[XU].name = this._textureNames?.[XU] ?? this.textures[XU].name), this.textures[XU]._texture = UU, this.textures[XU]._noMipmap = !UU.useMipMaps, this.textures[XU]._useSRGBBuffer = UU._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[XU] = UU.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[XU] = UU.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[XU] = UU._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[XU])) {
          let zU;
          zU = UU.is2DArray ? 35866 : UU.isCube ? 34067 : UU.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[XU] = zU
        }
      }
      setLayerAndFaceIndex(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[UU] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[UU] = XU), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[UU] = zU), this.renderTarget.setLayerAndFaceIndex(UU, XU, zU))
      }
      setLayerAndFaceIndices(UU, XU) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = UU, this._multiRenderTargetOptions.faceIndex = XU, this.renderTarget.setLayerAndFaceIndices(UU, XU))
      }
      get samples() {
        return this._samples
      }
      set samples(UU) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(UU) : this._samples = UU
      }
      resize(UU) {
        this._processSizeParameter(UU), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(UU, XU, zU) {
        this._multiRenderTargetOptions.qFU = UU, this._count = UU;
        const cU = [],
          yU = [],
          QU = [],
          AU = [],
          FU = [],
          oU = [],
          DU = [],
          EU = [];
        this._textureNames = zU, this._initTypes(UU, cU, yU, QU, AU, FU, oU, DU, EU, XU), this._multiRenderTargetOptions.types = cU, this._multiRenderTargetOptions.samplingModes = yU, this._multiRenderTargetOptions.useSRGBBuffers = QU, this._multiRenderTargetOptions.formats = AU, this._multiRenderTargetOptions.targetTypes = FU, this._multiRenderTargetOptions.faceIndex = oU, this._multiRenderTargetOptions.layerIndex = DU, this._multiRenderTargetOptions.layerCounts = EU, this._multiRenderTargetOptions.labels = zU, this._rebuild(!1, !0, zU)
      }
      _unbindFrameBuffer(UU, XU) {
        this._renderTarget && UU.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(XU)
        }))
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), UU ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const UU = this._renderTarget?.textures;
        if (UU) {
          for (let XU = UU.length - 1; XU >= 0; XU--) this._textures[XU]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var rX = zU(41265);
    class uX {
      constructor(UU) {
        this.name = rX.d.NAME_GEOMETRYBUFFERRENDERER, this.sa = UU
      }
      register() {
        this.sa._gatherRenderTargetsStage.registerStep(rX.d.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(UU) {
        this.sa._geometryBufferRenderer && UU.push(this.sa._geometryBufferRenderer.getGBuffer())
      }
    }
    let fX = !1;
    var iX;
    ! function(UU) {
      UU[UU.Small = 0] = "Small", UU[UU.Medium = 1] = "Medium", UU[UU.Large = 2] = "Large", UU[UU.ExtraLarge = 3] = "ExtraLarge"
    }(iX || (iX = {}));
    const HX = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      MX = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class vX {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(UU) {
        if (UU && this._enableMeshBlendTag && !this._scene.qp().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = UU
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(UU) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = UU, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(UU, XU) {
        UU === vX.POSITION_TEXTURE_TYPE ? (this._positionIndex = XU, this._enablePosition = !0) : UU === vX.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = XU, this._enableVelocity = !0) : UU === vX.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = XU, this._enableVelocityLinear = !0) : UU === vX.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = XU, this._enableReflectivity = !0) : UU === vX.DEPTH_TEXTURE_TYPE ? (this._depthIndex = XU, this._enableDepth = !0) : UU === vX.NORMAL_TEXTURE_TYPE ? (this._normalIndex = XU, this._enableNormal = !0) : UU === vX.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = XU, this._enableScreenspaceDepth = !0) : UU === vX.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = XU, this._enableIrradiance = !0) : UU === vX.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = XU, this._enableObjectId = !0) : UU === vX.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = XU, this._enableMeshBlendTag = !0)
      }
      _setAttachments(UU) {
        this._attachmentsFromPrePass = UU
      }
      _linkInternalTexture(UU) {
        this._multiRenderTarget.setInternalTexture(UU, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(UU) {
        this._multiRenderTarget.renderList = UU
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(UU) {
        switch (UU) {
          case vX.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case vX.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case vX.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case vX.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case vX.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case vX.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case vX.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case vX.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case vX.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case vX.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(UU) {
        this._enableDepth = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(UU) {
        this._enableNormal = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(UU) {
        this._enablePosition = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(UU) {
        this._enableVelocity = UU, UU || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = UU
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(UU) {
        this._enableVelocityLinear = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(UU) {
        this._enableReflectivity = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(UU) {
        this._enableScreenspaceDepth = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(UU) {
        this._enableIrradiance = UU, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(UU) {
        if (UU && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (UU && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (UU && !this._enableObjectId && !this._linkedWithPrePass) {
          const UU = this._scene.qp(),
            XU = Math.min(UU.getCaps().maxDrawBuffers ?? 1, 8),
            zU = this._assignRenderTargetIndices()[0] + 1;
          if (UU.getCaps().drawBuffersExtension && zU > XU) throw new Error(`GeometryBufferRenderer: ${zU} color attachments were requested, but this engine supports at most ${XU}`)
        }
        this._enableObjectId = UU, UU || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(UU) {
        if (this._enableMeshBlendTag !== UU) {
          if (UU) {
            const UU = this._scene.qp();
            if (! function(UU) {
                return "NATIVE" !== UU.shaderPlatformName && (UU.isWebGPU || 2 === UU.Fa)
              }(UU)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !UU.isWebGPU && !UU.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const XU = Math.min(UU.getCaps().maxDrawBuffers ?? 1, 8),
                zU = this._assignRenderTargetIndices()[0] + 1;
              if (UU.getCaps().drawBuffersExtension && zU > XU) throw new Error(`GeometryBufferRenderer: ${zU} color attachments were requested, but this engine supports at most ${XU}`)
            }
          }
          this._enableMeshBlendTag = UU, UU || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get sa() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        var yU;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new lU.e(0, 0, 0, 0), this._clearDepthColor = new lU.e(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = UU, this._ratioOrDimensions = XU, this._useUbo = UU.qp().supportsUniformBuffers, this._depthFormat = zU, this._textureTypesAndFormats = cU || {}, this._initShaderSourceAsync(), yU = vX, fX || (fX = !0, Object.defineProperty(iU.d.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(UU) {
            UU && UU.isSupported && (this._geometryBufferRenderer = UU)
          },
          enumerable: !0,
          configurable: !0
        }), iU.d.prototype.enableGeometryBufferRenderer = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            zU = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new yU(this, UU, XU, zU), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, iU.d.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, yU._SceneComponentInitialization = UU => {
          let XU = UU._getComponent(rX.d.NAME_GEOMETRYBUFFERRENDERER);
          XU || (XU = new uX(UU), UU.ncU(XU))
        }), vX._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.qp().isWebGPU && !vX.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([zU.e(643).then((() => zU(64508))), Promise.all([zU.e(642), zU.e(654)]).then((() => zU(64516)))])) : await Promise.all([zU.e(626).then((() => zU(64525))), zU.e(625).then((() => zU(64529)))]), this._shadersLoaded = !0
      }
      isReady(UU, XU) {
        if (!this._shadersLoaded) return !1;
        const zU = UU.Hp();
        if (zU && zU.disableDepthWrite) return !1;
        if (function(UU) {
            return UU._isGaussianSplatting || "GaussianSplattingMesh" === (XU = UU.getClassName()) || "GaussianSplattingStream" === XU;
            var XU
          }(UU.getMesh())) return !1;
        const cU = [],
          yU = [MU.h.PositionKind],
          QU = UU.getMesh();
        QU.isVerticesDataPresent(MU.h.NormalKind) && (cU.push("#define HAS_NORMAL_ATTRIBUTE"), yU.push(MU.h.NormalKind));
        let AU = !1,
          FU = !1;
        if (zU) {
          let UU = !1;
          if (zU.needAlphaTestingForMesh(QU) && zU.getAlphaTestTexture() && (cU.push("#define ALPHATEST"), cU.push(`#define ALPHATEST_UV${zU.getAlphaTestTexture().coordinatesIndex+1}`), UU = !0), (zU.bumpTexture || zU.normalTexture || zU.geometryNormalTexture) && KU.b.BumpTextureEnabled) {
            const XU = zU.bumpTexture || zU.normalTexture || zU.geometryNormalTexture;
            cU.push("#define BUMP"), cU.push(`#define BUMP_UV${XU.coordinatesIndex+1}`), UU = !0
          }
          if (this._enableReflectivity) {
            let XU = !1;
            if ("PBRMetallicRoughnessMaterial" === zU.getClassName()) zU.metallicRoughnessTexture && (cU.push("#define ORMTEXTURE"), cU.push(`#define REFLECTIVITY_UV${zU.metallicRoughnessTexture.coordinatesIndex+1}`), cU.push("#define METALLICWORKFLOW"), UU = !0, XU = !0), null != zU.metallic && (cU.push("#define METALLIC"), cU.push("#define METALLICWORKFLOW"), XU = !0), null != zU.roughness && (cU.push("#define ROUGHNESS"), cU.push("#define METALLICWORKFLOW"), XU = !0), XU && (zU.baseTexture && (cU.push("#define ALBEDOTEXTURE"), cU.push(`#define ALBEDO_UV${zU.baseTexture.coordinatesIndex+1}`), zU.baseTexture.gammaSpace && cU.push("#define GAMMAALBEDO"), UU = !0), zU.baseColor && cU.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === zU.getClassName()) zU.specularGlossinessTexture ? (cU.push("#define SPECULARGLOSSINESSTEXTURE"), cU.push(`#define REFLECTIVITY_UV${zU.specularGlossinessTexture.coordinatesIndex+1}`), UU = !0, zU.specularGlossinessTexture.gammaSpace && cU.push("#define GAMMAREFLECTIVITYTEXTURE")) : zU.specularColor && cU.push("#define REFLECTIVITYCOLOR"), null != zU.glossiness && cU.push("#define GLOSSINESS");
            else if ("PBRMaterial" === zU.getClassName()) zU.metallicTexture && (cU.push("#define ORMTEXTURE"), cU.push(`#define REFLECTIVITY_UV${zU.metallicTexture.coordinatesIndex+1}`), cU.push("#define METALLICWORKFLOW"), UU = !0, XU = !0), null != zU.metallic && (cU.push("#define METALLIC"), cU.push("#define METALLICWORKFLOW"), XU = !0), null != zU.roughness && (cU.push("#define ROUGHNESS"), cU.push("#define METALLICWORKFLOW"), XU = !0), XU ? (zU.albedoTexture && (cU.push("#define ALBEDOTEXTURE"), cU.push(`#define ALBEDO_UV${zU.albedoTexture.coordinatesIndex+1}`), zU.albedoTexture.gammaSpace && cU.push("#define GAMMAALBEDO"), UU = !0), zU.albedoColor && cU.push("#define ALBEDOCOLOR")) : (zU.reflectivityTexture ? (cU.push("#define SPECULARGLOSSINESSTEXTURE"), cU.push(`#define REFLECTIVITY_UV${zU.reflectivityTexture.coordinatesIndex+1}`), zU.reflectivityTexture.gammaSpace && cU.push("#define GAMMAREFLECTIVITYTEXTURE"), UU = !0) : zU.reflectivityColor && cU.push("#define REFLECTIVITYCOLOR"), null != zU.microSurface && cU.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === zU.getClassName()) zU.specularTexture && (cU.push("#define REFLECTIVITYTEXTURE"), cU.push(`#define REFLECTIVITY_UV${zU.specularTexture.coordinatesIndex+1}`), zU.specularTexture.gammaSpace && cU.push("#define GAMMAREFLECTIVITYTEXTURE"), UU = !0), zU.specularColor && cU.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === zU.getClassName()) {
              const XU = zU;
              cU.push("#define METALLIC"), cU.push("#define ROUGHNESS"), XU._useRoughnessFromMetallicTextureGreen && XU.baseMetalnessTexture ? (cU.push("#define ORMTEXTURE"), cU.push(`#define REFLECTIVITY_UV${XU.baseMetalnessTexture.coordinatesIndex+1}`), UU = !0) : XU.baseMetalnessTexture ? (cU.push("#define METALLIC_TEXTURE"), cU.push(`#define METALLIC_UV${XU.baseMetalnessTexture.coordinatesIndex+1}`), UU = !0) : XU.specularRoughnessTexture && (cU.push("#define ROUGHNESS_TEXTURE"), cU.push(`#define ROUGHNESS_UV${XU.specularRoughnessTexture.coordinatesIndex+1}`), UU = !0), XU.baseColorTexture && (cU.push("#define ALBEDOTEXTURE"), cU.push(`#define ALBEDO_UV${XU.baseColorTexture.coordinatesIndex+1}`), XU.baseColorTexture.gammaSpace && cU.push("#define GAMMAALBEDO"), UU = !0), XU.baseColor && cU.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (cU.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === zU.getClassName())) {
            const XU = zU;
            XU.subsurfaceWeight > 0 && XU.subsurfaceWeightTexture && (cU.push("#define SUBSURFACE_WEIGHT"), cU.push(`#define SUBSURFACEWEIGHT_UV${XU.subsurfaceWeightTexture.coordinatesIndex+1}`), UU = !0), XU.transmissionWeight > 0 && XU.transmissionWeightTexture && (cU.push("#define TRANSMISSION_WEIGHT"), cU.push(`#define TRANSMISSIONWEIGHT_UV${XU.transmissionWeightTexture.coordinatesIndex+1}`), UU = !0)
          }
          UU && (cU.push("#define NEED_UV"), QU.isVerticesDataPresent(MU.h.UVKind) && (yU.push(MU.h.UVKind), cU.push("#define UV1"), AU = !0), QU.isVerticesDataPresent(MU.h.UV2Kind) && (yU.push(MU.h.UV2Kind), cU.push("#define UV2"), FU = !0))
        }
        if (this._enableDepth && (cU.push("#define DEPTH"), cU.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (cU.push("#define NORMAL"), cU.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (cU.push("#define POSITION"), cU.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (cU.push("#define VELOCITY"), cU.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(QU) && cU.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (cU.push("#define VELOCITY_LINEAR"), cU.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(QU) && cU.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (cU.push("#define REFLECTIVITY"), cU.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (cU.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), cU.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          cU.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), cU.push("#define IRRADIANCE");
          const UU = this._scene;
          if (UU.environmentTexture) {
            const XU = {};
            let yU = !1,
              QU = 0;
            "OpenPBRMaterial" !== zU.getClassName() && "StandardMaterial" !== zU.getClassName() && "PBRMetallicRoughnessMaterial" !== zU.getClassName() && "PBRSpecularGlossinessMaterial" !== zU.getClassName() && "PBRMaterial" !== zU.getClassName() || (yU = !!zU.realtimeFiltering, QU = zU.realtimeFilteringQuality || 0), (0, TU.T)(UU, UU.environmentTexture, XU, yU, QU, !0);
            for (const UU in XU) XU[UU] && cU.push("#define " + UU);
            XU.USEIRRADIANCEMAP || cU.push("#define SPHERICAL_HARMONICS");
            const AU = UU.postProcessRenderPipelineManager.supportedPipelines.find((UU => "IBLShadowsRenderPipeline" === UU.getClassName()));
            if (AU) {
              const UU = AU;
              UU._getAccumulatedTexture() && (cU.push("#define IBL_SHADOW_TEXTURE"), UU.coloredShadows && cU.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (cU.push("#define OBJECT_ID"), cU.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (cU.push("#define MESH_BLEND_TAG"), cU.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && cU.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && cU.push("#define ENCODE_NORMAL"), QU.useBones && QU.computeBonesUsingShaders && QU.skeleton ? (yU.push(MU.h.MatricesIndicesKind), yU.push(MU.h.MatricesWeightsKind), QU.numBoneInfluencers > 4 && (yU.push(MU.h.MatricesIndicesExtraKind), yU.push(MU.h.MatricesWeightsExtraKind)), cU.push("#define NUM_BONE_INFLUENCERS " + QU.numBoneInfluencers), cU.push("#define BONETEXTURE " + QU.skeleton.isUsingTextureForMatrices), cU.push("#define BonesPerMesh " + (QU.skeleton.bones.length + 1))) : (cU.push("#define NUM_BONE_INFLUENCERS 0"), cU.push("#define BONETEXTURE false"), cU.push("#define BonesPerMesh 0"));
        const oU = QU.morphTargetManager ? (0, TU.O)(QU.morphTargetManager, cU, yU, QU, !0, !0, !1, AU, FU, !1) : 0;
        XU && (cU.push("#define INSTANCES"), (0, TU.nb)(yU, this._enableVelocity || this._enableVelocityLinear), UU.getRenderingMesh().hasThinInstances && cU.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? cU.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : cU.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, EX.m)(zU, this._scene, cU);
        const DU = this._scene.qp(),
          EU = UU._getDrawWrapper(void 0, !0),
          YU = EU.defines,
          NU = cU.join("\n");
        return YU !== NU && EU.setEffect(DU.createEffect("geometry", {
          attributes: yU,
          uniformsNames: MX,
          samplers: HX,
          defines: NU,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: oU
          },
          shaderLanguage: this.shaderLanguage
        }, DU), NU), EU.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(UU) {
        if (this._enableObjectId && 1 !== UU) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== UU) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = UU
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.qp().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.sa.qp()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.sa.qp().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const UU = [],
          XU = [];
        let zU = 0;
        return this._enableDepth && (this._depthIndex = zU, zU++, UU.push("gBuffer_Depth"), XU.push(this._textureTypesAndFormats[vX.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = zU, zU++, UU.push("gBuffer_Normal"), XU.push(this._textureTypesAndFormats[vX.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = zU, zU++, UU.push("gBuffer_Position"), XU.push(this._textureTypesAndFormats[vX.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = zU, zU++, UU.push("gBuffer_Velocity"), XU.push(this._textureTypesAndFormats[vX.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = zU, zU++, UU.push("gBuffer_VelocityLinear"), XU.push(this._textureTypesAndFormats[vX.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = zU, zU++, UU.push("gBuffer_Reflectivity"), XU.push(this._textureTypesAndFormats[vX.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = zU, zU++, UU.push("gBuffer_ScreenspaceDepth"), XU.push(this._textureTypesAndFormats[vX.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = zU, zU++, UU.push("gBuffer_Irradiance"), XU.push(this._textureTypesAndFormats[vX.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = zU, zU++, UU.push("gBuffer_ObjectId"), XU.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = zU, zU++, UU.push("gBuffer_MeshBlendTag"), XU.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [zU, UU, XU]
      }
      _createRenderTargets() {
        const UU = this._scene.qp(),
          [XU, zU, cU] = this._assignRenderTargetIndices(),
          yU = Math.min(UU.getCaps().maxDrawBuffers ?? 1, 8);
        if (UU.getCaps().drawBuffersExtension && XU > yU) throw new Error(`GeometryBufferRenderer: ${XU} color attachments were requested, but this engine supports at most ${yU}`);
        let AU = 0;
        UU._caps.textureFloat && UU._caps.textureFloatLinearFiltering ? AU = 1 : UU._caps.textureHalfFloat && UU._caps.textureHalfFloatLinearFiltering && (AU = 2);
        const FU = this._getRenderTargetDimensions(),
          oU = [],
          DU = [],
          EU = [];
        for (const QU of cU) QU ? (oU.push(QU.textureType), DU.push(QU.textureFormat), EU.push(QU.samplingMode ?? 2)) : (oU.push(AU), DU.push(5), EU.push(2));
        if (this._normalsAreUnsigned = 11 === oU[vX.NORMAL_TEXTURE_TYPE] || 13 === oU[vX.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new SX("gBuffer", FU, XU, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: oU,
            formats: DU,
            samplingModes: EU,
            depthTextureFormat: this._depthFormat
          }, zU.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = wU.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = wU.e.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const YU = [!0],
          NU = [!1],
          IU = [!0];
        for (let QU = 1; QU < XU; ++QU) YU.push(!0), IU.push(!1), NU.push(!0);
        const pU = UU.buildTextureLayout(YU),
          aU = UU.buildTextureLayout(NU),
          tU = UU.buildTextureLayout(IU);
        this._multiRenderTarget.onClearObservable.add((UU => {
          const XU = this.useSpecificClearForDepthTexture ? aU : pU;
          UU.clearAttachments(this._clearColor, XU, !0, !0, !0), this.useSpecificClearForDepthTexture && UU.clearAttachments(this._clearDepthColor, tU, !0, !1, !1), UU.bindAttachments(pU)
        })), this._resizeObserver = UU.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const gU = UU => {
          const XU = UU.getRenderingMesh(),
            zU = UU.getEffectiveMesh(),
            cU = this._scene,
            yU = cU.qp(),
            AU = UU.Hp();
          if (!AU) return;
          if (zU._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[zU.uniqueId] && (this._previousTransformationMatrices[zU.uniqueId] = {
              qY: HU.e.Identity(),
              viewProjection: cU.getTransformMatrix()
            }, XU.skeleton)) {
            const UU = XU.skeleton.getTransformMatrices(XU);
            this._previousBonesTransformationMatrices[XU.uniqueId] = this._copyBonesTransformationMatrices(UU, new Float32Array(UU.length))
          }
          const FU = XU._getInstancesRenderList(UU._id, !!UU.getReplacementMesh());
          if (FU.mustReturn) return;
          const oU = yU.getCaps().instancedArrays && (null !== FU.visibleInstances[UU._id] || XU.hasThinInstances),
            DU = zU.getWorldMatrix();
          if (this.isReady(UU, oU)) {
            const EU = UU._getDrawWrapper();
            if (!EU) return;
            const YU = EU.effect;
            let NU;
            yU.enableEffect(EU), oU || XU._bind(UU, YU, AU.fillMode), this._useUbo ? ((0, TU.x)(YU, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (YU.setMatrix("viewProjection", cU.getTransformMatrix()), YU.setMatrix("view", cU.getViewMatrix()), this._scene.bindEyePosition(YU, "vEyePosition"));
            if (XU._instanceDataStorage.isFrozen || !AU.backFaceCulling && null === AU.sideOrientation) NU = XU._effectiveSideOrientation;
            else {
              const UU = zU._getWorldMatrixDeterminant();
              NU = AU._getEffectiveOrientation(XU), UU < 0 && (NU = NU === QU.c.ClockWiseSideOrientation ? QU.c.CounterClockWiseSideOrientation : QU.c.ClockWiseSideOrientation)
            }
            if (AU._preBind(EU, NU), AU.needAlphaTestingForMesh(zU)) {
              const UU = AU.getAlphaTestTexture();
              UU && (YU.setTexture("diffuseSampler", UU), YU.setMatrix("diffuseMatrix", UU.getTextureMatrix()), YU.setFloat("alphaCutOff", AU.alphaCutOff ?? .4))
            }
            if ((AU.bumpTexture || AU.normalTexture || AU.geometryNormalTexture) && cU.qp().getCaps().standardDerivatives && KU.b.BumpTextureEnabled) {
              const UU = AU.bumpTexture || AU.normalTexture || AU.geometryNormalTexture;
              YU.setFloat3("vBumpInfos", UU.coordinatesIndex, 1 / UU.level, AU.parallaxScaleBias), YU.setMatrix("bumpMatrix", UU.getTextureMatrix()), YU.setTexture("bumpSampler", UU), YU.setFloat2("vTangentSpaceParams", AU.invertNormalMapX ? -1 : 1, AU.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === AU.getClassName()) null !== AU.metallicRoughnessTexture && (YU.setTexture("reflectivitySampler", AU.metallicRoughnessTexture), YU.setMatrix("reflectivityMatrix", AU.metallicRoughnessTexture.getTextureMatrix())), null !== AU.metallic && YU.setFloat("metallic", AU.metallic), null !== AU.roughness && YU.setFloat("glossiness", 1 - AU.roughness), null !== AU.baseTexture && (YU.setTexture("albedoSampler", AU.baseTexture), YU.setMatrix("albedoMatrix", AU.baseTexture.getTextureMatrix())), null !== AU.baseColor && YU.setColor3("albedoColor", AU.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === AU.getClassName()) null !== AU.specularGlossinessTexture ? (YU.setTexture("reflectivitySampler", AU.specularGlossinessTexture), YU.setMatrix("reflectivityMatrix", AU.specularGlossinessTexture.getTextureMatrix())) : null !== AU.specularColor && YU.setColor3("reflectivityColor", AU.specularColor), null !== AU.glossiness && YU.setFloat("glossiness", AU.glossiness);
            else if ("PBRMaterial" === AU.getClassName()) null !== AU.metallicTexture && (YU.setTexture("reflectivitySampler", AU.metallicTexture), YU.setMatrix("reflectivityMatrix", AU.metallicTexture.getTextureMatrix())), null !== AU.metallic && YU.setFloat("metallic", AU.metallic), null !== AU.roughness && YU.setFloat("glossiness", 1 - AU.roughness), null !== AU.roughness || null !== AU.metallic || null !== AU.metallicTexture ? (null !== AU.albedoTexture && (YU.setTexture("albedoSampler", AU.albedoTexture), YU.setMatrix("albedoMatrix", AU.albedoTexture.getTextureMatrix())), null !== AU.albedoColor && YU.setColor3("albedoColor", AU.albedoColor)) : (null !== AU.reflectivityTexture ? (YU.setTexture("reflectivitySampler", AU.reflectivityTexture), YU.setMatrix("reflectivityMatrix", AU.reflectivityTexture.getTextureMatrix())) : null !== AU.reflectivityColor && YU.setColor3("reflectivityColor", AU.reflectivityColor), null !== AU.microSurface && YU.setFloat("glossiness", AU.microSurface));
            else if ("StandardMaterial" === AU.getClassName()) null !== AU.specularTexture && (YU.setTexture("reflectivitySampler", AU.specularTexture), YU.setMatrix("reflectivityMatrix", AU.specularTexture.getTextureMatrix())), null !== AU.specularColor && YU.setColor3("reflectivityColor", AU.specularColor);
            else if ("OpenPBRMaterial" === AU.getClassName()) {
              const UU = AU;
              UU._useRoughnessFromMetallicTextureGreen && UU.baseMetalnessTexture ? (YU.setTexture("reflectivitySampler", UU.baseMetalnessTexture), YU.setMatrix("reflectivityMatrix", UU.baseMetalnessTexture.getTextureMatrix())) : UU.baseMetalnessTexture ? (YU.setTexture("metallicSampler", UU.baseMetalnessTexture), YU.setMatrix("metallicMatrix", UU.baseMetalnessTexture.getTextureMatrix())) : UU.specularRoughnessTexture && (YU.setTexture("roughnessSampler", UU.specularRoughnessTexture), YU.setMatrix("roughnessMatrix", UU.specularRoughnessTexture.getTextureMatrix())), YU.setFloat("metallic", UU.baseMetalness), YU.setFloat("glossiness", 1 - UU.specularRoughness), null !== UU.baseColorTexture && (YU.setTexture("albedoSampler", UU.baseColorTexture), YU.setMatrix("albedoMatrix", UU.baseColorTexture.getTextureMatrix())), null !== UU.baseColor && YU.setColor3("albedoColor", UU.baseColor)
            }
            if (this._enableIrradiance && cU.environmentTexture) {
              const UU = cU.environmentTexture,
                XU = cU.postProcessRenderPipelineManager.supportedPipelines.find((UU => "IBLShadowsRenderPipeline" === UU.getClassName()));
              if (XU) {
                const UU = XU._getAccumulatedTexture();
                UU && (YU.setTexture("iblShadowSampler", UU), YU.setFloat2("shadowTextureSize", UU.getSize().width, UU.getSize().height))
              }
              if (YU.setMatrix("reflectionMatrix", UU.getReflectionTextureMatrix()), YU.setFloat2("vReflectionInfos", UU.level * cU.iblIntensity, 0), YU.setTexture("reflectionSampler", UU), UU.irradianceTexture && (YU.setTexture("irradianceSampler", UU.irradianceTexture), UU.irradianceTexture._dominantDirection && YU.setVector3("vReflectionDominantDirection", UU.irradianceTexture._dominantDirection)), UU.sphericalPolynomial) {
                const XU = UU.sphericalPolynomial;
                if (XU.preScaledHarmonics) {
                  const UU = XU.preScaledHarmonics;
                  YU.setVector3("vSphericalL00", UU.l00), YU.setVector3("vSphericalL1_1", UU.l1_1), YU.setVector3("vSphericalL10", UU.l10), YU.setVector3("vSphericalL11", UU.l11), YU.setVector3("vSphericalL2_2", UU.l2_2), YU.setVector3("vSphericalL2_1", UU.l2_1), YU.setVector3("vSphericalL20", UU.l20), YU.setVector3("vSphericalL21", UU.l21), YU.setVector3("vSphericalL22", UU.l22)
                } else YU.setFloat3("vSphericalX", XU.x.x, XU.x.y, XU.x.z), YU.setFloat3("vSphericalY", XU.y.x, XU.y.y, XU.y.z), YU.setFloat3("vSphericalZ", XU.z.x, XU.z.y, XU.z.z), YU.setFloat3("vSphericalXX_ZZ", XU.xx.x - XU.zz.x, XU.xx.y - XU.zz.y, XU.xx.z - XU.zz.z), YU.setFloat3("vSphericalYY_ZZ", XU.yy.x - XU.zz.x, XU.yy.y - XU.zz.y, XU.yy.z - XU.zz.z), YU.setFloat3("vSphericalZZ", XU.zz.x, XU.zz.y, XU.zz.z), YU.setFloat3("vSphericalXY", XU.xy.x, XU.xy.y, XU.xy.z), YU.setFloat3("vSphericalYZ", XU.yz.x, XU.yz.y, XU.yz.z), YU.setFloat3("vSphericalZX", XU.zx.x, XU.zx.y, XU.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === AU.getClassName()) {
                const UU = AU;
                YU.setFloat("vSubsurfaceWeight", UU.subsurfaceWeight), UU.subsurfaceWeightTexture && (YU.setTexture("subsurfaceWeightSampler", UU.subsurfaceWeightTexture), YU.setMatrix("subsurfaceWeightMatrix", UU.subsurfaceWeightTexture.getTextureMatrix())), YU.setFloat("vTransmissionWeight", UU.transmissionWeight), UU.transmissionWeightTexture && (YU.setTexture("transmissionWeightSampler", UU.transmissionWeightTexture), YU.setMatrix("transmissionWeightMatrix", UU.transmissionWeightTexture.getTextureMatrix())), YU.setFloat("vTransmissionScatterAnisotropy", UU.transmissionScatterAnisotropy), YU.setFloat("vSubsurfaceScatterAnisotropy", UU.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, EX.e)(YU, AU, this._scene), XU.useBones && XU.computeBonesUsingShaders && XU.skeleton) {
              const UU = XU.skeleton;
              if (UU.isUsingTextureForMatrices && YU.getUniformIndex("boneTextureInfo") > -1) {
                const zU = UU.getTransformMatrixTexture(XU);
                YU.setTexture("boneSampler", zU), YU.setFloat2("boneTextureInfo", UU._textureWidth, UU._textureHeight)
              } else YU.setMatrices("mBones", XU.skeleton.getTransformMatrices(XU));
              (this._enableVelocity || this._enableVelocityLinear) && YU.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[XU.uniqueId])
            }
            if ((0, TU.w)(XU, YU), XU.morphTargetManager && XU.morphTargetManager.isUsingTextureForTargets && XU.morphTargetManager._bind(YU), (this._enableVelocity || this._enableVelocityLinear) && (YU.setMatrix("previousWorld", this._previousTransformationMatrices[zU.uniqueId].qY), YU.setMatrix("previousViewProjection", this._previousTransformationMatrices[zU.uniqueId].viewProjection)), this._enableObjectId) {
              let UU = XU.uniqueId;
              if (this.objectIdProvider) UU = (0, IX.h)(XU, this.objectIdProvider);
              else if (UU > 16777215) throw new Error(`Invalid geometry object ID ${UU} for mesh "${XU.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              YU.setFloat("objectId", UU)
            }
            if (this._enableMeshBlendTag) {
              const UU = this.meshBlendTagProvider ? (0, IX.f)(XU, this.meshBlendTagProvider) : XU.meshBlendingTag;
              YU.setInt("meshBlendTag", UU)
            }
            oU && XU.hasThinInstances && YU.setMatrix("world", DU), XU._processRendering(zU, UU, YU, AU.fillMode, FU, oU, ((UU, XU) => {
              UU || YU.setMatrix("world", XU)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[zU.uniqueId].qY = DU.clone(), this._previousTransformationMatrices[zU.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), XU.skeleton && this._copyBonesTransformationMatrices(XU.skeleton.getTransformMatrices(XU), this._previousBonesTransformationMatrices[zU.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (XU, zU, cU) => {
          if ((cU || 0 === zU) && XU.uB)
            for (let yU = 0; yU < XU.uB.length; ++yU) {
              const zU = XU.uB[yU],
                cU = zU.Hp(),
                QU = zU.getRenderingMesh();
              if (!cU) continue;
              const AU = QU._getInstancesRenderList(zU._id, !!zU.getReplacementMesh()),
                FU = UU.getCaps().instancedArrays && (null !== AU.visibleInstances[zU._id] || QU.hasThinInstances);
              if (!this.isReady(zU, FU)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (XU, zU, cU, yU) => {
          let QU;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.qp().bindAttachments(this._attachmentsFromPrePass)
          }
          if (yU.length) {
            for (UU.setColorWrite(!1), QU = 0; QU < yU.length; QU++) gU(yU.data[QU]);
            UU.setColorWrite(!0)
          }
          for (QU = 0; QU < XU.length; QU++) gU(XU.data[QU]);
          for (UU.setDepthWrite(!1), QU = 0; QU < zU.length; QU++) gU(zU.data[QU]);
          if (this.renderTransparentMeshes)
            for (QU = 0; QU < cU.length; QU++) gU(cU.data[QU]);
          UU.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const UU = this._scene.qp();
        return {
          width: Math.max(1, Math.floor(UU.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(UU.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(UU, XU) {
        for (let zU = 0; zU < UU.length; zU++) XU[zU] = UU[zU];
        return XU
      }
    }
    vX.ForceGLSL = !1, vX.DEPTH_TEXTURE_TYPE = 0, vX.NORMAL_TEXTURE_TYPE = 1, vX.POSITION_TEXTURE_TYPE = 2, vX.VELOCITY_TEXTURE_TYPE = 3, vX.REFLECTIVITY_TEXTURE_TYPE = 4, vX.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, vX.VELOCITY_LINEAR_TEXTURE_TYPE = 6, vX.IRRADIANCE_TEXTURE_TYPE = 7, vX.OBJECT_ID_TEXTURE_TYPE = 8, vX.MESH_BLEND_TAG_TEXTURE_TYPE = 9, vX._SceneComponentInitialization = UU => {
      throw (0, gX.m)("GeometryBufferRendererSceneComponent")
    };
    var VX = zU(37863);
    const sX = {
      effect: null,
      subMesh: null
    };

    function nX(UU) {
      if ("number" === typeof UU) return 1;
      if (UU instanceof HU.m) return 2;
      if (UU instanceof HU.q || UU instanceof lU.b) return 3;
      if (UU instanceof HU.t || UU instanceof lU.e) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class mX {
      populateVectorFromLinkedProperties(UU) {
        const XU = nX(UU);
        for (const zU in this.linkedProperties) {
          const UU = this.linkedProperties[zU],
            cU = UU.numComponents;
          if (XU < cU || UU.targetUniformComponentOffset > XU - cU) return void(1 == cU ? eU.b.Error(`Float property ${UU.name} has an offset that is too large.`) : eU.b.Error(`Vector${cU} property ${UU.name} won't fit in Vector${XU} or has an offset that is too large.`));
          "number" === typeof UU.value ? mX._tmpArray[UU.targetUniformComponentOffset] = UU.value : UU.value.toArray(mX._tmpArray, UU.targetUniformComponentOffset)
        }
        UU.zY(mX._tmpArray)
      }
      constructor(UU, XU) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = UU, this.numComponents = XU
      }
    }
    mX._tmpArray = [0, 0, 0, 0];
    class lX {
      constructor(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          QU = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = UU, this.targetUniformName = zU, this.defaultValue = XU, this.value = XU, this.targetUniformComponentNum = cU, this.targetUniformComponentOffset = yU, this.requiredDefine = QU
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : nX(this.defaultValue)
      }
    }
    class xX {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(UU, XU, zU) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = UU, this.samplerPrefix = XU, this.textureDefine = zU
      }
    }
    class JX extends((0, aX.e)((0, pX.b)(vU.d))) {}
    class jX extends(function(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(JX)) {}
    class KX extends((0, xU.g)(jX)) {
      constructor(UU) {
        super(UU), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class bX extends((0, tX.d)(jU.d)) {}
    let TX = (() => {
        var UU, XU, cU, yU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, qU, OU, SU, rU, iU, vU, VU, sU, nU, xU, jU, hU, UX, XX, zX, cX, yX, QX, AX, FX, oX, DX, pX, aX, tX, gX, kX, GX, BX, ZX, RX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, VX, nX, JX, jX, TX, hX, Uz, Xz, zz, cz, yz, Qz, Az, Fz, oz, Dz, Ez, Yz, Nz, Iz, pz, az, tz, gz, kz, Gz, Bz, Zz, Rz, Pz, Wz, dz, Lz, ez, Cz;
        let wz, qz, Oz, Sz, rz, uz, fz, iz, Hz, Mz, vz, Vz, sz, nz, mz, lz, xz, Jz, jz, Kz, bz, Tz, hz, Uc, Xc, zc, cc, yc, Qc, Ac, Fc, oc, Dc, Ec, Yc, Nc, Ic, pc, ac, tc, gc, kc, Gc, Bc, Zc, Rc, Pc, Wc, dc, Lc, ec, Cc, wc, qc, Oc, Sc, rc, uc, fc, ic, Hc, Mc, vc, Vc, sc, nc, mc, lc, xc, Jc, jc, Kc, bc, Tc, hc, Uy, Xy, zy, cy, yy, Qy, Ay, Fy, oy, Dy, Ey, Yy, Ny, Iy, py, ay, ty, gy, ky, Gy, By, Zy, Ry, Py, Wy, dy, Ly, ey, Cy, wy, qy = bX,
          Oy = [],
          Sy = [],
          ry = [],
          uy = [],
          fy = [],
          iy = [],
          Hy = [],
          My = [],
          vy = [],
          Vy = [],
          sy = [],
          ny = [],
          my = [],
          ly = [],
          xy = [],
          Jy = [],
          jy = [],
          Ky = [],
          by = [],
          Ty = [],
          hy = [],
          UQ = [],
          XQ = [],
          zQ = [],
          cQ = [],
          yQ = [],
          QQ = [],
          AQ = [],
          FQ = [],
          oQ = [],
          DQ = [],
          EQ = [],
          YQ = [],
          NQ = [],
          IQ = [],
          pQ = [],
          aQ = [],
          tQ = [],
          gQ = [],
          kQ = [],
          GQ = [],
          BQ = [],
          ZQ = [],
          RQ = [],
          PQ = [],
          WQ = [],
          dQ = [],
          LQ = [],
          eQ = [],
          CQ = [],
          wQ = [],
          qQ = [],
          OQ = [],
          SQ = [],
          rQ = [],
          uQ = [],
          fQ = [],
          iQ = [],
          HQ = [],
          MQ = [],
          vQ = [],
          VQ = [],
          sQ = [],
          nQ = [],
          mQ = [],
          lQ = [],
          xQ = [],
          JQ = [],
          jQ = [],
          KQ = [],
          bQ = [],
          TQ = [],
          hQ = [],
          UA = [],
          XA = [],
          zA = [],
          cA = [],
          yA = [],
          QA = [],
          AA = [],
          FA = [],
          oA = [],
          DA = [],
          EA = [],
          YA = [],
          NA = [],
          IA = [],
          pA = [],
          aA = [],
          tA = [],
          gA = [],
          kA = [],
          GA = [],
          BA = [],
          ZA = [],
          RA = [],
          PA = [],
          WA = [],
          dA = [],
          LA = [],
          eA = [],
          CA = [],
          wA = [],
          qA = [],
          OA = [],
          SA = [],
          rA = [],
          uA = [],
          fA = [],
          iA = [],
          HA = [],
          MA = [],
          vA = [],
          VA = [],
          sA = [],
          nA = [],
          mA = [],
          lA = [],
          xA = [],
          JA = [],
          jA = [],
          KA = [],
          bA = [],
          TA = [],
          hA = [],
          UF = [],
          XF = [],
          zF = [],
          cF = [],
          yF = [],
          QF = [],
          AF = [],
          FF = [],
          oF = [],
          DF = [],
          EF = [],
          YF = [],
          NF = [],
          IF = [],
          pF = [],
          aF = [],
          tF = [],
          gF = [],
          kF = [],
          GF = [],
          BF = [],
          ZF = [],
          RF = [],
          PF = [],
          WF = [],
          dF = [],
          LF = [],
          eF = [],
          CF = [],
          wF = [],
          qF = [],
          OF = [],
          SF = [],
          rF = [],
          uF = [],
          fF = [],
          iF = [],
          HF = [],
          MF = [],
          vF = [],
          VF = [],
          sF = [],
          nF = [],
          mF = [],
          lF = [],
          xF = [],
          JF = [],
          jF = [],
          KF = [],
          bF = [],
          TF = [],
          hF = [],
          Uo = [],
          Xo = [],
          zo = [],
          co = [],
          yo = [],
          Qo = [],
          Ao = [],
          Fo = [],
          oo = [],
          Do = [],
          Eo = [],
          Yo = [],
          No = [],
          Io = [],
          po = [],
          ao = [],
          to = [],
          go = [],
          ko = [],
          Go = [],
          Bo = [],
          Zo = [],
          Ro = [],
          Po = [],
          Wo = [],
          Lo = [],
          eo = [],
          Co = [];
        return UU = class extends qy {
          get baseWeight() {
            return (0, dU.e)(this, XU, "f")
          }
          set baseWeight(UU) {
            (0, dU.f)(this, XU, UU, "f")
          }
          get baseWeightTexture() {
            return (0, dU.e)(this, cU, "f")
          }
          set baseWeightTexture(UU) {
            (0, dU.f)(this, cU, UU, "f")
          }
          get baseColor() {
            return (0, dU.e)(this, yU, "f")
          }
          set baseColor(UU) {
            (0, dU.f)(this, yU, UU, "f")
          }
          get baseColorTexture() {
            return (0, dU.e)(this, AU, "f")
          }
          set baseColorTexture(UU) {
            (0, dU.f)(this, AU, UU, "f")
          }
          get baseDiffuseRoughness() {
            return (0, dU.e)(this, FU, "f")
          }
          set baseDiffuseRoughness(UU) {
            (0, dU.f)(this, FU, UU, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, dU.e)(this, oU, "f")
          }
          set baseDiffuseRoughnessTexture(UU) {
            (0, dU.f)(this, oU, UU, "f")
          }
          get baseMetalness() {
            return (0, dU.e)(this, DU, "f")
          }
          set baseMetalness(UU) {
            (0, dU.f)(this, DU, UU, "f")
          }
          get baseMetalnessTexture() {
            return (0, dU.e)(this, EU, "f")
          }
          set baseMetalnessTexture(UU) {
            (0, dU.f)(this, EU, UU, "f")
          }
          get specularWeight() {
            return (0, dU.e)(this, YU, "f")
          }
          set specularWeight(UU) {
            (0, dU.f)(this, YU, UU, "f")
          }
          get specularWeightTexture() {
            return (0, dU.e)(this, NU, "f")
          }
          set specularWeightTexture(UU) {
            (0, dU.f)(this, NU, UU, "f")
          }
          get specularColor() {
            return (0, dU.e)(this, IU, "f")
          }
          set specularColor(UU) {
            (0, dU.f)(this, IU, UU, "f")
          }
          get specularColorTexture() {
            return (0, dU.e)(this, pU, "f")
          }
          set specularColorTexture(UU) {
            (0, dU.f)(this, pU, UU, "f")
          }
          get specularRoughness() {
            return (0, dU.e)(this, aU, "f")
          }
          set specularRoughness(UU) {
            (0, dU.f)(this, aU, UU, "f")
          }
          get specularRoughnessTexture() {
            return (0, dU.e)(this, tU, "f")
          }
          set specularRoughnessTexture(UU) {
            (0, dU.f)(this, tU, UU, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, dU.e)(this, gU, "f")
          }
          set specularRoughnessAnisotropy(UU) {
            (0, dU.f)(this, gU, UU, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, dU.e)(this, kU, "f")
          }
          set specularRoughnessAnisotropyTexture(UU) {
            (0, dU.f)(this, kU, UU, "f")
          }
          get specularIor() {
            return (0, dU.e)(this, GU, "f")
          }
          set specularIor(UU) {
            (0, dU.f)(this, GU, UU, "f")
          }
          get transmissionWeight() {
            return (0, dU.e)(this, BU, "f")
          }
          set transmissionWeight(UU) {
            (0, dU.f)(this, BU, UU, "f")
          }
          get transmissionWeightTexture() {
            return (0, dU.e)(this, ZU, "f")
          }
          set transmissionWeightTexture(UU) {
            (0, dU.f)(this, ZU, UU, "f")
          }
          get transmissionColor() {
            return (0, dU.e)(this, RU, "f")
          }
          set transmissionColor(UU) {
            (0, dU.f)(this, RU, UU, "f")
          }
          get transmissionColorTexture() {
            return (0, dU.e)(this, PU, "f")
          }
          set transmissionColorTexture(UU) {
            (0, dU.f)(this, PU, UU, "f")
          }
          get transmissionDepth() {
            return (0, dU.e)(this, WU, "f")
          }
          set transmissionDepth(UU) {
            (0, dU.f)(this, WU, UU, "f")
          }
          get transmissionDepthTexture() {
            return (0, dU.e)(this, qU, "f")
          }
          set transmissionDepthTexture(UU) {
            (0, dU.f)(this, qU, UU, "f")
          }
          get transmissionScatter() {
            return (0, dU.e)(this, OU, "f")
          }
          set transmissionScatter(UU) {
            (0, dU.f)(this, OU, UU, "f")
          }
          get transmissionScatterTexture() {
            return (0, dU.e)(this, SU, "f")
          }
          set transmissionScatterTexture(UU) {
            (0, dU.f)(this, SU, UU, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, dU.e)(this, rU, "f")
          }
          set transmissionScatterAnisotropy(UU) {
            (0, dU.f)(this, rU, UU, "f")
          }
          get transmissionDispersionScale() {
            return (0, dU.e)(this, iU, "f")
          }
          set transmissionDispersionScale(UU) {
            (0, dU.f)(this, iU, UU, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, dU.e)(this, vU, "f")
          }
          set transmissionDispersionScaleTexture(UU) {
            (0, dU.f)(this, vU, UU, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, dU.e)(this, VU, "f")
          }
          set transmissionDispersionAbbeNumber(UU) {
            (0, dU.f)(this, VU, UU, "f")
          }
          get subsurfaceWeight() {
            return (0, dU.e)(this, sU, "f")
          }
          set subsurfaceWeight(UU) {
            (0, dU.f)(this, sU, UU, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, dU.e)(this, nU, "f")
          }
          set subsurfaceWeightTexture(UU) {
            (0, dU.f)(this, nU, UU, "f")
          }
          get subsurfaceColor() {
            return (0, dU.e)(this, xU, "f")
          }
          set subsurfaceColor(UU) {
            (0, dU.f)(this, xU, UU, "f")
          }
          get subsurfaceColorTexture() {
            return (0, dU.e)(this, jU, "f")
          }
          set subsurfaceColorTexture(UU) {
            (0, dU.f)(this, jU, UU, "f")
          }
          get subsurfaceRadius() {
            return (0, dU.e)(this, hU, "f")
          }
          set subsurfaceRadius(UU) {
            (0, dU.f)(this, hU, UU, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, dU.e)(this, UX, "f")
          }
          set subsurfaceRadiusScale(UU) {
            (0, dU.f)(this, UX, UU, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, dU.e)(this, XX, "f")
          }
          set subsurfaceRadiusScaleTexture(UU) {
            (0, dU.f)(this, XX, UU, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, dU.e)(this, zX, "f")
          }
          set subsurfaceScatterAnisotropy(UU) {
            (0, dU.f)(this, zX, UU, "f")
          }
          get coatWeight() {
            return (0, dU.e)(this, cX, "f")
          }
          set coatWeight(UU) {
            (0, dU.f)(this, cX, UU, "f")
          }
          get coatWeightTexture() {
            return (0, dU.e)(this, yX, "f")
          }
          set coatWeightTexture(UU) {
            (0, dU.f)(this, yX, UU, "f")
          }
          get coatColor() {
            return (0, dU.e)(this, QX, "f")
          }
          set coatColor(UU) {
            (0, dU.f)(this, QX, UU, "f")
          }
          get coatColorTexture() {
            return (0, dU.e)(this, AX, "f")
          }
          set coatColorTexture(UU) {
            (0, dU.f)(this, AX, UU, "f")
          }
          get coatRoughness() {
            return (0, dU.e)(this, FX, "f")
          }
          set coatRoughness(UU) {
            (0, dU.f)(this, FX, UU, "f")
          }
          get coatRoughnessTexture() {
            return (0, dU.e)(this, oX, "f")
          }
          set coatRoughnessTexture(UU) {
            (0, dU.f)(this, oX, UU, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, dU.e)(this, DX, "f")
          }
          set coatRoughnessAnisotropy(UU) {
            (0, dU.f)(this, DX, UU, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, dU.e)(this, pX, "f")
          }
          set coatRoughnessAnisotropyTexture(UU) {
            (0, dU.f)(this, pX, UU, "f")
          }
          get coatIor() {
            return (0, dU.e)(this, aX, "f")
          }
          set coatIor(UU) {
            (0, dU.f)(this, aX, UU, "f")
          }
          get coatDarkening() {
            return (0, dU.e)(this, tX, "f")
          }
          set coatDarkening(UU) {
            (0, dU.f)(this, tX, UU, "f")
          }
          get coatDarkeningTexture() {
            return (0, dU.e)(this, gX, "f")
          }
          set coatDarkeningTexture(UU) {
            (0, dU.f)(this, gX, UU, "f")
          }
          get fuzzWeight() {
            return (0, dU.e)(this, kX, "f")
          }
          set fuzzWeight(UU) {
            (0, dU.f)(this, kX, UU, "f")
          }
          get fuzzWeightTexture() {
            return (0, dU.e)(this, GX, "f")
          }
          set fuzzWeightTexture(UU) {
            (0, dU.f)(this, GX, UU, "f")
          }
          get fuzzColor() {
            return (0, dU.e)(this, BX, "f")
          }
          set fuzzColor(UU) {
            (0, dU.f)(this, BX, UU, "f")
          }
          get fuzzColorTexture() {
            return (0, dU.e)(this, ZX, "f")
          }
          set fuzzColorTexture(UU) {
            (0, dU.f)(this, ZX, UU, "f")
          }
          get fuzzRoughness() {
            return (0, dU.e)(this, RX, "f")
          }
          set fuzzRoughness(UU) {
            (0, dU.f)(this, RX, UU, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, dU.e)(this, dX, "f")
          }
          set fuzzRoughnessTexture(UU) {
            (0, dU.f)(this, dX, UU, "f")
          }
          get geometryThinWalled() {
            return (0, dU.e)(this, LX, "f")
          }
          set geometryThinWalled(UU) {
            (0, dU.f)(this, LX, UU, "f")
          }
          get geometryNormalTexture() {
            return (0, dU.e)(this, eX, "f")
          }
          set geometryNormalTexture(UU) {
            (0, dU.f)(this, eX, UU, "f")
          }
          get geometryTangent() {
            return (0, dU.e)(this, CX, "f")
          }
          set geometryTangent(UU) {
            (0, dU.f)(this, CX, UU, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(UU) {
            this.geometryTangent = new HU.m(Math.cos(UU), Math.sin(UU))
          }
          get geometryTangentTexture() {
            return (0, dU.e)(this, wX, "f")
          }
          set geometryTangentTexture(UU) {
            (0, dU.f)(this, wX, UU, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, dU.e)(this, qX, "f")
          }
          set geometryCoatNormalTexture(UU) {
            (0, dU.f)(this, qX, UU, "f")
          }
          get geometryCoatTangent() {
            return (0, dU.e)(this, OX, "f")
          }
          set geometryCoatTangent(UU) {
            (0, dU.f)(this, OX, UU, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(UU) {
            this.geometryCoatTangent = new HU.m(Math.cos(UU), Math.sin(UU))
          }
          get geometryCoatTangentTexture() {
            return (0, dU.e)(this, SX, "f")
          }
          set geometryCoatTangentTexture(UU) {
            (0, dU.f)(this, SX, UU, "f")
          }
          get geometryOpacity() {
            return (0, dU.e)(this, rX, "f")
          }
          set geometryOpacity(UU) {
            (0, dU.f)(this, rX, UU, "f")
          }
          get geometryOpacityTexture() {
            return (0, dU.e)(this, uX, "f")
          }
          set geometryOpacityTexture(UU) {
            (0, dU.f)(this, uX, UU, "f")
          }
          get geometryThickness() {
            return (0, dU.e)(this, fX, "f")
          }
          set geometryThickness(UU) {
            (0, dU.f)(this, fX, UU, "f")
          }
          get geometryThicknessTexture() {
            return (0, dU.e)(this, iX, "f")
          }
          set geometryThicknessTexture(UU) {
            (0, dU.f)(this, iX, UU, "f")
          }
          get emissionLuminance() {
            return (0, dU.e)(this, HX, "f")
          }
          set emissionLuminance(UU) {
            (0, dU.f)(this, HX, UU, "f")
          }
          get emissionColor() {
            return (0, dU.e)(this, MX, "f")
          }
          set emissionColor(UU) {
            (0, dU.f)(this, MX, UU, "f")
          }
          get emissionColorTexture() {
            return (0, dU.e)(this, VX, "f")
          }
          set emissionColorTexture(UU) {
            (0, dU.f)(this, VX, UU, "f")
          }
          get thinFilmWeight() {
            return (0, dU.e)(this, nX, "f")
          }
          set thinFilmWeight(UU) {
            (0, dU.f)(this, nX, UU, "f")
          }
          get thinFilmWeightTexture() {
            return (0, dU.e)(this, JX, "f")
          }
          set thinFilmWeightTexture(UU) {
            (0, dU.f)(this, JX, UU, "f")
          }
          get thinFilmThickness() {
            return (0, dU.e)(this, jX, "f")
          }
          set thinFilmThickness(UU) {
            (0, dU.f)(this, jX, UU, "f")
          }
          get thinFilmThicknessMin() {
            return (0, dU.e)(this, TX, "f")
          }
          set thinFilmThicknessMin(UU) {
            (0, dU.f)(this, TX, UU, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, dU.e)(this, hX, "f")
          }
          set thinFilmThicknessTexture(UU) {
            (0, dU.f)(this, hX, UU, "f")
          }
          get thinFilmIor() {
            return (0, dU.e)(this, Uz, "f")
          }
          set thinFilmIor(UU) {
            (0, dU.f)(this, Uz, UU, "f")
          }
          get ambientOcclusionTexture() {
            return (0, dU.e)(this, Xz, "f")
          }
          set ambientOcclusionTexture(UU) {
            (0, dU.f)(this, Xz, UU, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(UU) {
            this._sssQuality !== UU && (this._sssQuality = UU, this.OzU(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(UU) {
            this._sssIrradianceTexture !== UU && (this._sssIrradianceTexture = UU, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(UU) {
            this._sssDepthTexture !== UU && (this._sssDepthTexture = UU, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, dU.e)(this, zz, "f")
          }
          set directIntensity(UU) {
            (0, dU.f)(this, zz, UU, "f")
          }
          get environmentIntensity() {
            return (0, dU.e)(this, cz, "f")
          }
          set environmentIntensity(UU) {
            (0, dU.f)(this, cz, UU, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, dU.e)(this, yz, "f")
          }
          set useSpecularWeightFromTextureAlpha(UU) {
            (0, dU.f)(this, yz, UU, "f")
          }
          get forceAlphaTest() {
            return (0, dU.e)(this, Qz, "f")
          }
          set forceAlphaTest(UU) {
            (0, dU.f)(this, Qz, UU, "f")
          }
          get alphaCutOff() {
            return (0, dU.e)(this, Az, "f")
          }
          set alphaCutOff(UU) {
            (0, dU.f)(this, Az, UU, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, dU.e)(this, Fz, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(UU) {
            (0, dU.f)(this, Fz, UU, "f")
          }
          get useAmbientInGrayScale() {
            return (0, dU.e)(this, oz, "f")
          }
          set useAmbientInGrayScale(UU) {
            (0, dU.f)(this, oz, UU, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(lU.b.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === QU.c.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(UU) {
            UU !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? QU.c.LIGHTFALLOFF_PHYSICAL : QU.c.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === QU.c.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(UU) {
            UU !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? QU.c.LIGHTFALLOFF_GLTF : QU.c.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, dU.e)(this, Dz, "f")
          }
          set useObjectSpaceNormalMap(UU) {
            (0, dU.f)(this, Dz, UU, "f")
          }
          get useParallax() {
            return (0, dU.e)(this, Ez, "f")
          }
          set useParallax(UU) {
            (0, dU.f)(this, Ez, UU, "f")
          }
          get useParallaxOcclusion() {
            return (0, dU.e)(this, Yz, "f")
          }
          set useParallaxOcclusion(UU) {
            (0, dU.f)(this, Yz, UU, "f")
          }
          get parallaxScaleBias() {
            return (0, dU.e)(this, Nz, "f")
          }
          set parallaxScaleBias(UU) {
            (0, dU.f)(this, Nz, UU, "f")
          }
          get disableLighting() {
            return (0, dU.e)(this, Iz, "f")
          }
          set disableLighting(UU) {
            (0, dU.f)(this, Iz, UU, "f")
          }
          get forceIrradianceInFragment() {
            return (0, dU.e)(this, pz, "f")
          }
          set forceIrradianceInFragment(UU) {
            (0, dU.f)(this, pz, UU, "f")
          }
          get maxSimultaneousLights() {
            return (0, dU.e)(this, az, "f")
          }
          set maxSimultaneousLights(UU) {
            (0, dU.f)(this, az, UU, "f")
          }
          get invertNormalMapX() {
            return (0, dU.e)(this, tz, "f")
          }
          set invertNormalMapX(UU) {
            (0, dU.f)(this, tz, UU, "f")
          }
          get invertNormalMapY() {
            return (0, dU.e)(this, gz, "f")
          }
          set invertNormalMapY(UU) {
            (0, dU.f)(this, gz, UU, "f")
          }
          get twoSidedLighting() {
            return (0, dU.e)(this, kz, "f")
          }
          set twoSidedLighting(UU) {
            (0, dU.f)(this, kz, UU, "f")
          }
          get useAlphaFresnel() {
            return (0, dU.e)(this, Gz, "f")
          }
          set useAlphaFresnel(UU) {
            (0, dU.f)(this, Gz, UU, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, dU.e)(this, Bz, "f")
          }
          set useLinearAlphaFresnel(UU) {
            (0, dU.f)(this, Bz, UU, "f")
          }
          get environmentBRDFTexture() {
            return (0, dU.e)(this, Zz, "f")
          }
          set environmentBRDFTexture(UU) {
            (0, dU.f)(this, Zz, UU, "f")
          }
          get forceNormalForward() {
            return (0, dU.e)(this, Rz, "f")
          }
          set forceNormalForward(UU) {
            (0, dU.f)(this, Rz, UU, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, dU.e)(this, Pz, "f")
          }
          set enableSpecularAntiAliasing(UU) {
            (0, dU.f)(this, Pz, UU, "f")
          }
          get useHorizonOcclusion() {
            return (0, dU.e)(this, Wz, "f")
          }
          set useHorizonOcclusion(UU) {
            (0, dU.f)(this, Wz, UU, "f")
          }
          get useRadianceOcclusion() {
            return (0, dU.e)(this, dz, "f")
          }
          set useRadianceOcclusion(UU) {
            (0, dU.f)(this, dz, UU, "f")
          }
          get unlit() {
            return (0, dU.e)(this, Lz, "f")
          }
          set unlit(UU) {
            (0, dU.f)(this, Lz, UU, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, dU.e)(this, ez, "f")
          }
          set applyDecalMapAfterDetailMap(UU) {
            (0, dU.f)(this, ez, UU, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(UU) {
            this._backgroundRefractionTexture = UU, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(UU) {
            this._refractionHighQualityBlur !== UU && (this._refractionHighQualityBlur = UU, this.OzU(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(UU) {
            this._realTimeFiltering = UU, this.OzU(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(UU) {
            this._realTimeFilteringQuality = UU, this.OzU(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(UU) {
            this._fuzzSampleNumber = UU, this.OzU(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, dU.e)(this, Cz, "f")
          }
          set debugMode(UU) {
            (0, dU.f)(this, Cz, UU, "f")
          }
          constructor(zU, LU) {
            super(zU, LU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || UU.ForceGLSL), XU.set(this, ((0, dU.n)(this, Oy), (0, dU.n)(this, Sy, void 0))), this._baseWeight = ((0, dU.n)(this, ry), new lX("base_weight", 1, "vBaseWeight", 1)), cU.set(this, (0, dU.n)(this, uy, void 0)), this._baseWeightTexture = ((0, dU.n)(this, fy), new xX("base_weight", "baseWeight", "BASE_WEIGHT")), yU.set(this, (0, dU.n)(this, iy, void 0)), this._baseColor = ((0, dU.n)(this, Hy), new lX("base_color", lU.b.White(), "vBaseColor", 4)), AU.set(this, (0, dU.n)(this, My, void 0)), this._baseColorTexture = ((0, dU.n)(this, vy), new xX("base_color", "baseColor", "BASE_COLOR")), FU.set(this, (0, dU.n)(this, Vy, void 0)), this._baseDiffuseRoughness = ((0, dU.n)(this, sy), new lX("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), oU.set(this, (0, dU.n)(this, ny, void 0)), this._baseDiffuseRoughnessTexture = ((0, dU.n)(this, my), new xX("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), DU.set(this, (0, dU.n)(this, ly, void 0)), this._baseMetalness = ((0, dU.n)(this, xy), new lX("base_metalness", 0, "vReflectanceInfo", 4, 0)), EU.set(this, (0, dU.n)(this, Jy, void 0)), this._baseMetalnessTexture = ((0, dU.n)(this, jy), new xX("base_metalness", "baseMetalness", "BASE_METALNESS")), YU.set(this, (0, dU.n)(this, Ky, void 0)), this._specularWeight = ((0, dU.n)(this, by), new lX("specular_weight", 1, "vReflectanceInfo", 4, 3)), NU.set(this, (0, dU.n)(this, Ty, void 0)), this._specularWeightTexture = ((0, dU.n)(this, hy), new xX("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), IU.set(this, (0, dU.n)(this, UQ, void 0)), this._specularColor = ((0, dU.n)(this, XQ), new lX("specular_color", lU.b.White(), "vSpecularColor", 4)), pU.set(this, (0, dU.n)(this, zQ, void 0)), this._specularColorTexture = ((0, dU.n)(this, cQ), new xX("specular_color", "specularColor", "SPECULAR_COLOR")), aU.set(this, (0, dU.n)(this, yQ, void 0)), this._specularRoughness = ((0, dU.n)(this, QQ), new lX("specular_roughness", .3, "vReflectanceInfo", 4, 1)), tU.set(this, (0, dU.n)(this, AQ, void 0)), this._specularRoughnessTexture = ((0, dU.n)(this, FQ), new xX("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), gU.set(this, (0, dU.n)(this, oQ, void 0)), this._specularRoughnessAnisotropy = ((0, dU.n)(this, DQ), new lX("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), kU.set(this, (0, dU.n)(this, EQ, void 0)), this._specularRoughnessAnisotropyTexture = ((0, dU.n)(this, YQ), new xX("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), GU.set(this, (0, dU.n)(this, NQ, void 0)), this._specularIor = ((0, dU.n)(this, IQ), new lX("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), BU.set(this, (0, dU.n)(this, pQ, void 0)), this._transmissionWeight = ((0, dU.n)(this, aQ), new lX("transmission_weight", 0, "vTransmissionWeight", 1)), ZU.set(this, (0, dU.n)(this, tQ, void 0)), this._transmissionWeightTexture = ((0, dU.n)(this, gQ), new xX("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), RU.set(this, (0, dU.n)(this, kQ, void 0)), this._transmissionColor = ((0, dU.n)(this, GQ), new lX("transmission_color", lU.b.White(), "vTransmissionColor", 3, 0)), PU.set(this, (0, dU.n)(this, BQ, void 0)), this._transmissionColorTexture = ((0, dU.n)(this, ZQ), new xX("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), WU.set(this, (0, dU.n)(this, RQ, void 0)), this._transmissionDepth = ((0, dU.n)(this, PQ), new lX("transmission_depth", 0, "vTransmissionDepth", 1, 0)), qU.set(this, (0, dU.n)(this, WQ, void 0)), this._transmissionDepthTexture = ((0, dU.n)(this, dQ), new xX("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), OU.set(this, (0, dU.n)(this, LQ, void 0)), this._transmissionScatter = ((0, dU.n)(this, eQ), new lX("transmission_scatter", lU.b.Black(), "vTransmissionScatter", 3, 0)), SU.set(this, (0, dU.n)(this, CQ, void 0)), this._transmissionScatterTexture = ((0, dU.n)(this, wQ), new xX("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), rU.set(this, (0, dU.n)(this, qQ, void 0)), this._transmissionScatterAnisotropy = ((0, dU.n)(this, OQ), new lX("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), iU.set(this, (0, dU.n)(this, SQ, void 0)), this._transmissionDispersionScale = ((0, dU.n)(this, rQ), new lX("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), vU.set(this, (0, dU.n)(this, uQ, void 0)), this._transmissionDispersionScaleTexture = ((0, dU.n)(this, fQ), new xX("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), VU.set(this, (0, dU.n)(this, iQ, void 0)), this._transmissionDispersionAbbeNumber = ((0, dU.n)(this, HQ), new lX("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), sU.set(this, (0, dU.n)(this, MQ, void 0)), this._subsurfaceWeight = ((0, dU.n)(this, vQ), new lX("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), nU.set(this, (0, dU.n)(this, VQ, void 0)), this._subsurfaceWeightTexture = ((0, dU.n)(this, sQ), new xX("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), xU.set(this, (0, dU.n)(this, nQ, void 0)), this._subsurfaceColor = ((0, dU.n)(this, mQ), new lX("subsurface_color", new lU.b(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), jU.set(this, (0, dU.n)(this, lQ, void 0)), this._subsurfaceColorTexture = ((0, dU.n)(this, xQ), new xX("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), hU.set(this, (0, dU.n)(this, JQ, void 0)), this._subsurfaceRadius = ((0, dU.n)(this, jQ), new lX("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), UX.set(this, (0, dU.n)(this, KQ, void 0)), this._subsurfaceRadiusScale = ((0, dU.n)(this, bQ), new lX("subsurface_radius_scale", new lU.b(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), XX.set(this, (0, dU.n)(this, TQ, void 0)), this._subsurfaceRadiusScaleTexture = ((0, dU.n)(this, hQ), new xX("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), zX.set(this, (0, dU.n)(this, UA, void 0)), this._subsurfaceScatterAnisotropy = ((0, dU.n)(this, XA), new lX("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), cX.set(this, (0, dU.n)(this, zA, void 0)), this._coatWeight = ((0, dU.n)(this, cA), new lX("coat_weight", 0, "vCoatWeight", 1, 0)), yX.set(this, (0, dU.n)(this, yA, void 0)), this._coatWeightTexture = ((0, dU.n)(this, QA), new xX("coat_weight", "coatWeight", "COAT_WEIGHT")), QX.set(this, (0, dU.n)(this, AA, void 0)), this._coatColor = ((0, dU.n)(this, FA), new lX("coat_color", lU.b.White(), "vCoatColor", 3, 0)), AX.set(this, (0, dU.n)(this, oA, void 0)), this._coatColorTexture = ((0, dU.n)(this, DA), new xX("coat_color", "coatColor", "COAT_COLOR")), FX.set(this, (0, dU.n)(this, EA, void 0)), this._coatRoughness = ((0, dU.n)(this, YA), new lX("coat_roughness", 0, "vCoatRoughness", 1, 0)), oX.set(this, (0, dU.n)(this, NA, void 0)), this._coatRoughnessTexture = ((0, dU.n)(this, IA), new xX("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), DX.set(this, (0, dU.n)(this, pA, void 0)), this._coatRoughnessAnisotropy = ((0, dU.n)(this, aA), new lX("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), pX.set(this, (0, dU.n)(this, tA, void 0)), this._coatRoughnessAnisotropyTexture = ((0, dU.n)(this, gA), new xX("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), aX.set(this, (0, dU.n)(this, kA, void 0)), this._coatIor = ((0, dU.n)(this, GA), new lX("coat_ior", 1.5, "vCoatIor", 1, 0)), tX.set(this, (0, dU.n)(this, BA, void 0)), this._coatDarkening = ((0, dU.n)(this, ZA), new lX("coat_darkening", 1, "vCoatDarkening", 1, 0)), gX.set(this, (0, dU.n)(this, RA, void 0)), this._coatDarkeningTexture = ((0, dU.n)(this, PA), new xX("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, kX.set(this, (0, dU.n)(this, WA, void 0)), this._fuzzWeight = ((0, dU.n)(this, dA), new lX("fuzz_weight", 0, "vFuzzWeight", 1, 0)), GX.set(this, (0, dU.n)(this, LA, void 0)), this._fuzzWeightTexture = ((0, dU.n)(this, eA), new xX("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), BX.set(this, (0, dU.n)(this, CA, void 0)), this._fuzzColor = ((0, dU.n)(this, wA), new lX("fuzz_color", lU.b.White(), "vFuzzColor", 3, 0)), ZX.set(this, (0, dU.n)(this, qA, void 0)), this._fuzzColorTexture = ((0, dU.n)(this, OA), new xX("fuzz_color", "fuzzColor", "FUZZ_COLOR")), RX.set(this, (0, dU.n)(this, SA, void 0)), this._fuzzRoughness = ((0, dU.n)(this, rA), new lX("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), dX.set(this, (0, dU.n)(this, uA, void 0)), this._fuzzRoughnessTexture = ((0, dU.n)(this, fA), new xX("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), LX.set(this, (0, dU.n)(this, iA, void 0)), this._geometryThinWalled = ((0, dU.n)(this, HA), new lX("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), eX.set(this, (0, dU.n)(this, MA, void 0)), this._geometryNormalTexture = ((0, dU.n)(this, vA), new xX("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), CX.set(this, (0, dU.n)(this, VA, void 0)), this._geometryTangent = ((0, dU.n)(this, sA), new lX("geometry_tangent", new HU.m(1, 0), "vSpecularAnisotropy", 3, 0)), wX.set(this, (0, dU.n)(this, nA, void 0)), this._geometryTangentTexture = ((0, dU.n)(this, mA), new xX("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), qX.set(this, (0, dU.n)(this, lA, void 0)), this._geometryCoatNormalTexture = ((0, dU.n)(this, xA), new xX("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), OX.set(this, (0, dU.n)(this, JA, void 0)), this._geometryCoatTangent = ((0, dU.n)(this, jA), new lX("geometry_coat_tangent", new HU.m(1, 0), "vGeometryCoatTangent", 2, 0)), SX.set(this, (0, dU.n)(this, KA, void 0)), this._geometryCoatTangentTexture = ((0, dU.n)(this, bA), new xX("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), rX.set(this, (0, dU.n)(this, TA, void 0)), this._geometryOpacity = ((0, dU.n)(this, hA), new lX("geometry_opacity", 1, "vBaseColor", 4, 3)), uX.set(this, (0, dU.n)(this, UF, void 0)), this._geometryOpacityTexture = ((0, dU.n)(this, XF), new xX("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), fX.set(this, (0, dU.n)(this, zF, void 0)), this._geometryThickness = ((0, dU.n)(this, cF), new lX("geometry_thickness", 0, "vGeometryThickness", 1, 0)), iX.set(this, (0, dU.n)(this, yF, void 0)), this._geometryThicknessTexture = ((0, dU.n)(this, QF), new xX("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), HX.set(this, (0, dU.n)(this, AF, void 0)), this._emissionLuminance = ((0, dU.n)(this, FF), new lX("emission_luminance", 1, "vLightingIntensity", 4, 1)), MX.set(this, (0, dU.n)(this, oF, void 0)), this._emissionColor = ((0, dU.n)(this, DF), new lX("emission_color", lU.b.Black(), "vEmissionColor", 3)), VX.set(this, (0, dU.n)(this, EF, void 0)), this._emissionColorTexture = ((0, dU.n)(this, YF), new xX("emission_color", "emissionColor", "EMISSION_COLOR")), nX.set(this, (0, dU.n)(this, NF, void 0)), this._thinFilmWeight = ((0, dU.n)(this, IF), new lX("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), JX.set(this, (0, dU.n)(this, pF, void 0)), this._thinFilmWeightTexture = ((0, dU.n)(this, aF), new xX("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), jX.set(this, (0, dU.n)(this, tF, void 0)), this._thinFilmThickness = ((0, dU.n)(this, gF), new lX("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), TX.set(this, (0, dU.n)(this, kF, void 0)), this._thinFilmThicknessMin = ((0, dU.n)(this, GF), new lX("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), hX.set(this, (0, dU.n)(this, BF, void 0)), this._thinFilmThicknessTexture = ((0, dU.n)(this, ZF), new xX("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Uz.set(this, (0, dU.n)(this, RF, void 0)), this._thinFilmIor = ((0, dU.n)(this, PF), new lX("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Xz.set(this, (0, dU.n)(this, WF, void 0)), this._ambientOcclusionTexture = ((0, dU.n)(this, dF), new xX("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = UU.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, zz.set(this, (0, dU.n)(this, LF, 1)), cz.set(this, ((0, dU.n)(this, eF), (0, dU.n)(this, CF, 1))), yz.set(this, ((0, dU.n)(this, wF), (0, dU.n)(this, qF, !1))), Qz.set(this, ((0, dU.n)(this, OF), (0, dU.n)(this, SF, !1))), Az.set(this, ((0, dU.n)(this, rF), (0, dU.n)(this, uF, .4))), Fz.set(this, ((0, dU.n)(this, fF), (0, dU.n)(this, iF, !1))), oz.set(this, ((0, dU.n)(this, HF), (0, dU.n)(this, MF, !1))), Dz.set(this, ((0, dU.n)(this, vF), (0, dU.n)(this, VF, !1))), Ez.set(this, ((0, dU.n)(this, sF), (0, dU.n)(this, nF, !1))), Yz.set(this, ((0, dU.n)(this, mF), (0, dU.n)(this, lF, !1))), Nz.set(this, ((0, dU.n)(this, xF), (0, dU.n)(this, JF, .05))), Iz.set(this, ((0, dU.n)(this, jF), (0, dU.n)(this, KF, !1))), pz.set(this, ((0, dU.n)(this, bF), (0, dU.n)(this, TF, !1))), az.set(this, ((0, dU.n)(this, hF), (0, dU.n)(this, Uo, 4))), tz.set(this, ((0, dU.n)(this, Xo), (0, dU.n)(this, zo, !1))), gz.set(this, ((0, dU.n)(this, co), (0, dU.n)(this, yo, !1))), kz.set(this, ((0, dU.n)(this, Qo), (0, dU.n)(this, Ao, !1))), Gz.set(this, ((0, dU.n)(this, Fo), (0, dU.n)(this, oo, !1))), Bz.set(this, ((0, dU.n)(this, Do), (0, dU.n)(this, Eo, !1))), Zz.set(this, ((0, dU.n)(this, Yo), (0, dU.n)(this, No, null))), Rz.set(this, ((0, dU.n)(this, Io), (0, dU.n)(this, po, !1))), Pz.set(this, ((0, dU.n)(this, ao), (0, dU.n)(this, to, !1))), Wz.set(this, ((0, dU.n)(this, go), (0, dU.n)(this, ko, !0))), dz.set(this, ((0, dU.n)(this, Go), (0, dU.n)(this, Bo, !0))), Lz.set(this, ((0, dU.n)(this, Zo), (0, dU.n)(this, Ro, !1))), ez.set(this, ((0, dU.n)(this, Po), (0, dU.n)(this, Wo, !1))), this._lightingInfos = ((0, dU.n)(this, Lo), new HU.t(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = QU.c.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new CU.d(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Cz.set(this, (0, dU.n)(this, eo, 0)), this.debugLimit = ((0, dU.n)(this, Co), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = QU.c.MATERIAL_OPAQUE, this.nS() && !this.nS()?.qp().isWebGPU && this.nS().qp().Fa < 2 && eU.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), UU._noiseTextures[this.nS().uniqueId] || (UU._noiseTextures[this.nS().uniqueId] = new wU.e(WX.j.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.nS(), !1, !0, 1), this.nS().bS.addOnce((() => {
              UU._noiseTextures[this.nS().uniqueId]?.dispose(), delete UU._noiseTextures[this.nS().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), KU.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), KU.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = fU(this.nS()), this._environmentFuzzBRDFTexture = uU(this.nS()), this.prePassConfiguration = new mU.c, this._propertyList = {};
            for (const UU of Object.getOwnPropertyNames(this)) {
              const XU = this[UU];
              XU instanceof lX && (this._propertyList[UU] = XU)
            }
            Object.keys(this._propertyList).forEach((UU => {
              const XU = this._propertyList[UU];
              let zU = this._uniformsList[XU.targetUniformName];
              zU ? zU.numComponents !== XU.targetUniformComponentNum ? eU.b.Error(`Uniform ${XU.targetUniformName} already exists of size ${zU.numComponents}, but trying to set it to ${XU.targetUniformComponentNum}.`) : zU.requiredDefine !== XU.requiredDefine && (zU.requiredDefine = void 0) : (zU = new mX(XU.targetUniformName, XU.targetUniformComponentNum), zU.requiredDefine = XU.requiredDefine, this._uniformsList[XU.targetUniformName] = zU), "" === zU.firstLinkedKey && (zU.firstLinkedKey = XU.name), zU.linkedProperties[XU.name] = XU
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const UU of Object.getOwnPropertyNames(this)) {
              const XU = this[UU];
              XU instanceof xX && (this._samplersList[UU] = XU)
            }
            for (const UU in this._samplersList) {
              const XU = this._samplersList[UU].textureDefine;
              this._samplerDefines[XU] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[XU + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[XU + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(KU.b.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(KU.b.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(UU) {
            this._transparencyMode !== UU && (this._transparencyMode = UU, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== QU.c.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(UU) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(UU)
          }
          clone(XU) {
            let zU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const yU = PX.b.Clone((() => new UU(XU, this.nS())), this, {
              cloneTexturesOnlyOnce: zU
            });
            return yU.id = XU, yU.name = XU, this.stencil.copyTo(yU.stencil), this._clonePlugins(yU, cU), yU
          }
          serialize() {
            const UU = super.serialize();
            return UU.customType = "BABYLON.OpenPBRMaterial", UU
          }
          static Parse(XU, zU, cU) {
            const yU = PX.b.Parse((() => new UU(XU.name, zU)), XU, zU, cU);
            return XU.stencil && yU.stencil.parse(XU.stencil, zU, cU), QU.c._ParsePlugins(XU, yU, zU, cU), yU
          }
          forceCompilation(UU, XU, zU) {
            const cU = {
              clipPlane: !1,
              useInstances: !1,
              ...zU
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const zU = new KX({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                yU = this._prepareEffect(UU, UU, zU, void 0, void 0, cU.useInstances, cU.clipPlane);
              this._onEffectCreatedObservable && (sX.effect = yU, sX.subMesh = null, this._onEffectCreatedObservable.notifyObservers(sX)), yU.isReady() ? XU && XU(this) : yU.onCompileObservable.add((() => {
                XU && XU(this)
              }))
            })()
          }
          isReadyForSubMesh(XU, zU, cU) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const yU = zU._drawWrapper;
            if (yU.effect && this.isFrozen && yU._wasPreviouslyReady && yU._wasPreviouslyUsingInstances === cU) return !0;
            zU.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zU.materialDefines = new KX({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const QU = zU.materialDefines;
            if (this._isReadyForSubMesh(zU)) return !0;
            const AU = this.nS(),
              FU = AU.qp();
            if (QU._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, AU.texturesEnabled)) {
              for (const UU in this._samplersList) {
                const XU = this._samplersList[UU];
                if (XU.value && !XU.value.isReadyOrNotBlocking()) return !1
              }
              const XU = this._getRadianceTexture();
              if (XU && KU.b.ReflectionTextureEnabled) {
                if (!XU.isReadyOrNotBlocking()) return !1;
                if (XU.irradianceTexture) {
                  if (!XU.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!XU.sphericalPolynomial && XU.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && KU.b.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && KU.b.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && KU.b.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (UU._noiseTextures[AU.uniqueId] && !UU._noiseTextures[AU.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = QU, this._eventInfo.subMesh = zU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (QU._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (QU.AREALIGHTUSED)
              for (let UU = 0; UU < XU.lightSources.length; UU++)
                if (!XU.lightSources[UU]._isReady()) return !1;
            if (FU.getCaps().standardDerivatives || XU.isVerticesDataPresent(MU.h.NormalKind) || (XU.createNormals(!0), eU.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + XU.name)), !(0, TU.e)(AU, XU, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const oU = zU.effect,
              DU = QU._areLightsDisposed,
              EU = this._prepareEffect(XU, zU.getRenderingMesh(), QU, this.onCompiled, this.onError, cU, null);
            let YU = !1;
            if (EU)
              if (this._onEffectCreatedObservable && (sX.effect = EU, sX.subMesh = zU, this._onEffectCreatedObservable.notifyObservers(sX)), this.allowShaderHotSwapping && oU && !EU.isReady()) {
                if (QU.markAsUnprocessed(), YU = this.isFrozen, DU) return QU._areLightsDisposed = !0, !1
              } else AU.resetCachedMaterial(), zU.setEffect(EU, QU, this._materialContext);
            return !(!zU.effect || !zU.effect.isReady()) && (QU._renderId = AU.getRenderId(), yU._wasPreviouslyReady = !YU, yU._wasPreviouslyUsingInstances = !!cU, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const UU = this._uniformBuffer;
            UU.addUniform("vTangentSpaceParams", 2), UU.addUniform("vLightingIntensity", 4), UU.addUniform("pointSize", 1), UU.addUniform("vDebugMode", 2), UU.addUniform("renderTargetSize", 2), UU.addUniform("cameraInfo", 4), UU.addUniform("vTextureRepetitionHexTilingParams", 4), UU.addUniform("backgroundRefractionMatrix", 16), UU.addUniform("vBackgroundRefractionInfos", 3), (0, TU.ib)(UU, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((XU => {
              UU.addUniform(XU.name, XU.numComponents)
            })), Object.values(this._samplersList).forEach((XU => {
              UU.addUniform(XU.samplerInfoName, 2), UU.addUniform(XU.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(UU, XU, zU, cU) {
            if (0 === this.geometryThickness) UU.updateFloat("vGeometryThickness", 0);
            else {
              cU.getRenderingMesh().getWorldMatrix().decompose(HU.l.Sp[0]);
              const XU = Math.max(Math.abs(HU.l.Sp[0].x), Math.abs(HU.l.Sp[0].y), Math.abs(HU.l.Sp[0].z));
              UU.updateFloat("vGeometryThickness", this.geometryThickness * XU)
            }
          }
          bindForSubMesh(XU, zU, cU) {
            const yU = this.nS(),
              QU = cU.materialDefines;
            if (!QU) return;
            const AU = cU.effect;
            if (!AU) return;
            this._activeEffect = AU, zU.getMeshUniformBuffer().bindToEffect(AU, "Mesh"), zU.transferToEffect(XU);
            const FU = yU.qp();
            this._uniformBuffer.bindToEffect(AU, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, yU, zU, XU, this.isFrozen), IX.c.Bind(FU.currentRenderPassId, this._activeEffect, zU, XU, this);
            const oU = yU.activeCamera;
            oU ? this._uniformBuffer.updateFloat4("cameraInfo", oU.minZ, oU.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const DU = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", DU[0], DU[1], DU[2], DU[3]), this._eventInfo.subMesh = cU, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), QU.OBJECTSPACE_NORMALMAP && (XU.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const EU = this._mustRebind(yU, AU, cU, zU.visibility),
              YU = FU._features.needToAlwaysBindUniformBuffers;
            (0, TU.h)(zU, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, YX.c)(this._activeEffect, this._vertexPullingMetadata);
            const NU = this._uniformBuffer;
            if (EU) {
              this.bindViewProjection(AU);
              const XU = this._getRadianceTexture();
              if (!NU.useUbo || !this.isFrozen || !NU.isSync || cU._drawWrapper._forceRebindOnNextCall) {
                if (yU.texturesEnabled) {
                  for (const UU in this._samplersList) {
                    const XU = this._samplersList[UU];
                    XU.value && (NU.updateFloat2(XU.samplerInfoName, XU.value.coordinatesIndex, XU.value.level), (0, TU.B)(XU.value, NU, XU.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (yU._mirroredCameraPosition ? NU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : NU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, TU.m)(yU, QU, NU, lU.b.White(), XU, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && NU.updateFloat("pointSize", this.pointSize);
                const UU = this._uniformsArray;
                for (let XU = 0, zU = UU.length; XU < zU; XU++) {
                  const zU = UU[XU];
                  (void 0 === zU.requiredDefine || QU[zU.requiredDefine]) && (4 === zU.numComponents ? (zU.populateVectorFromLinkedProperties(HU.l.Vector4[0]), NU.updateVector4(zU.name, HU.l.Vector4[0])) : 3 === zU.numComponents ? (zU.populateVectorFromLinkedProperties(HU.l.Sp[0]), NU.updateVector3(zU.name, HU.l.Sp[0])) : 2 === zU.numComponents ? (zU.populateVectorFromLinkedProperties(HU.l.Vector2[0]), NU.updateFloat2(zU.name, HU.l.Vector2[0].x, HU.l.Vector2[0].y)) : 1 === zU.numComponents && NU.updateFloat(zU.name, zU.linkedProperties[zU.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * yU.environmentIntensity, this._lightingInfos.w = 1, NU.updateVector4("vLightingIntensity", this._lightingInfos), NU.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (yU.texturesEnabled) {
                for (const UU in this._samplersList) {
                  const XU = this._samplersList[UU];
                  XU.value && NU.setTexture(XU.samplerName, XU.value)
                }
                if ((0, TU.p)(yU, QU, NU, XU, this.realTimeFiltering), QU.ENVIRONMENTBRDF && NU.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), QU.FUZZENVIRONMENTBRDF && NU.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), QU.REFRACTED_BACKGROUND && (NU.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), NU.eUU("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), HU.l.Sp[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), NU.updateVector3("vBackgroundRefractionInfos", HU.l.Sp[1])), (QU.ANISOTROPIC || QU.FUZZ || QU.REFRACTED_BACKGROUND || QU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && NU.setTexture("blueNoiseSampler", UU._noiseTextures[this.nS().uniqueId]), QU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const UU = this.sssIrradianceTexture.getSize().width,
                    XU = this.sssIrradianceTexture.getSize().height;
                  NU.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), NU.setTexture("sceneDepthSampler", this.sssDepthTexture), NU.updateFloat2("renderTargetSize", UU, XU)
                }
              }
              this.nS().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zU) && this.nS().depthPeelingRenderer.bind(AU), this._eventInfo.subMesh = cU, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, EX.e)(this._activeEffect, this, yU), this.bindEyePosition(AU)
            } else YU && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, yU, yU.qp(), cU), !EU && this.isFrozen && !YU || !yU.lightsEnabled || this._disableLighting || (0, TU.q)(yU, zU, this._activeEffect, QU, this._maxSimultaneousLights), !EU && this.isFrozen || (this.bindView(AU), (0, TU.i)(yU, zU, this._activeEffect, !0), QU.NUM_MORPH_INFLUENCERS && (0, TU.w)(zU, this._activeEffect), QU.BAKED_VERTEX_ANIMATION_TEXTURE && zU.bakedVertexAnimationManager?.bind(AU, QU.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, TU.t)(QU, this._activeEffect, yU)), this._afterBind(zU, this._activeEffect, cU), NU.update()
          }
          getAnimatables() {
            const UU = super.getAnimatables();
            for (const XU in this._samplersList) {
              const zU = this._samplersList[XU];
              zU.value && zU.value.animations && zU.value.animations.length > 0 && UU.push(zU.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && UU.push(this._radianceTexture), UU
          }
          getActiveTextures() {
            const UU = super.getActiveTextures();
            for (const XU in this._samplersList) {
              const zU = this._samplersList[XU];
              zU.value && UU.push(zU.value)
            }
            return this._radianceTexture && UU.push(this._radianceTexture), UU
          }
          hasTexture(UU) {
            if (super.hasTexture(UU)) return !0;
            for (const XU in this._samplersList) {
              if (this._samplersList[XU].value === UU) return !0
            }
            return this._radianceTexture === UU
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(UU, XU) {
            if (this._breakShaderLoadedCheck = !0, XU) {
              this._environmentBRDFTexture && this.nS().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.nS().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const UU in this._samplersList) {
                const XU = this._samplersList[UU];
                XU.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(UU, XU)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.nS().environmentTexture
          }
          _prepareEffect(XU, zU, cU) {
            let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(XU, zU, cU, AU, FU), !cU.isDirty) return null;
            cU.markAsProcessed();
            const oU = this.nS().qp(),
              DU = new bU.d;
            let EU = 0;
            cU.USESPHERICALINVERTEX && DU.addFallback(EU++, "USESPHERICALINVERTEX"), cU.FOG && DU.addFallback(EU, "FOG"), cU.SPECULARAA && DU.addFallback(EU, "SPECULARAA"), cU.POINTSIZE && DU.addFallback(EU, "POINTSIZE"), cU.LOGARITHMICDEPTH && DU.addFallback(EU, "LOGARITHMICDEPTH"), cU.PARALLAX && DU.addFallback(EU, "PARALLAX"), cU.PARALLAX_RHS && DU.addFallback(EU, "PARALLAX_RHS"), cU.PARALLAXOCCLUSION && DU.addFallback(EU++, "PARALLAXOCCLUSION"), cU.ENVIRONMENTBRDF && DU.addFallback(EU++, "ENVIRONMENTBRDF"), cU.TANGENT && DU.addFallback(EU++, "TANGENT"), EU = (0, TU.D)(cU, DU, this._maxSimultaneousLights, EU), cU.SPECULARTERM && DU.addFallback(EU++, "SPECULARTERM"), cU.USESPHERICALFROMREFLECTIONMAP && DU.addFallback(EU++, "USESPHERICALFROMREFLECTIONMAP"), cU.USEIRRADIANCEMAP && DU.addFallback(EU++, "USEIRRADIANCEMAP"), cU.NORMAL && DU.addFallback(EU++, "NORMAL"), cU.VERTEXCOLOR && DU.addFallback(EU++, "VERTEXCOLOR"), cU.MORPHTARGETS && DU.addFallback(EU++, "MORPHTARGETS"), cU.MULTIVIEW && DU.addFallback(0, "MULTIVIEW");
            const YU = [MU.h.PositionKind];
            cU.NORMAL && YU.push(MU.h.NormalKind), cU.TANGENT && YU.push(MU.h.TangentKind);
            for (let UU = 1; UU <= 6; ++UU) cU["UV" + UU] && YU.push(`uv${1===UU?"":UU}`);
            cU.VERTEXCOLOR && YU.push(MU.h.ColorKind), (0, TU.H)(YU, XU, cU, DU), (0, TU.K)(YU, cU), (0, TU.L)(YU, XU, cU), (0, TU.F)(YU, XU, cU);
            let NU = "openpbr";
            const IU = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const UU in this._uniformsList) IU.push(UU);
            const pU = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            cU.FUZZENVIRONMENTBRDF && pU.push("environmentFuzzBrdfSampler"), cU.REFRACTED_BACKGROUND && pU.push("backgroundRefractionSampler"), (cU.ANISOTROPIC || cU.FUZZ || cU.REFRACTED_BACKGROUND || cU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && pU.push("blueNoiseSampler"), cU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (pU.push("sceneIrradianceSampler"), pU.push("sceneDepthSampler"));
            for (const UU in this._samplersList) {
              const XU = this._samplersList[UU];
              pU.push(XU.samplerName), IU.push(XU.samplerInfoName), IU.push(XU.samplerMatrixName)
            }(0, TU.kb)(IU, pU, !0);
            const aU = ["Material", "Scene", "Mesh"],
              tU = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: cU.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = DU, this._eventInfo.fallbackRank = EU, this._eventInfo.defines = cU, this._eventInfo.uniforms = IU, this._eventInfo.attributes = YU, this._eventInfo.samplers = pU, this._eventInfo.uniformBuffersNames = aU, this._eventInfo.customCode = void 0, this._eventInfo.mesh = XU, this._eventInfo.indexParameters = tU, this._callbackPluginEventGeneric(128, this._eventInfo), IX.c.AddUniformsAndSamplers(IU, pU), mU.c.AddUniforms(IU), mU.c.AddSamplers(pU), (0, EX.c)(IU), this._useVertexPulling) {
              const UU = zU?.geometry;
              UU && (this._vertexPullingMetadata = (0, YX.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, XU) => {
                IU.push(`vp_${XU}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            JU.b && (JU.b.PrepareUniforms(IU, cU), JU.b.PrepareSamplers(pU, cU)), (0, TU.mb)({
              uniformsNames: IU,
              uniformBuffersNames: aU,
              samplers: pU,
              defines: cU,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const gU = {};
            this.customShaderNameResolve && (NU = this.customShaderNameResolve(NU, IU, aU, pU, cU, YU, gU));
            const kU = cU.toString(),
              GU = oU.createEffect(NU, {
                attributes: YU,
                uniformsNames: IU,
                uniformBuffersNames: aU,
                samplers: pU,
                defines: kU,
                fallbacks: DU,
                onCompiled: yU,
                onError: QU,
                indexParameters: tU,
                processFinalCode: gU.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: cU.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, oU);
            return this._eventInfo.customCode = void 0, GU
          }
          _prepareDefines(XU, zU, cU) {
            let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              AU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const FU = zU.hasThinInstances,
              oU = this.nS(),
              DU = oU.qp();
            (0, TU.V)(oU, XU, cU, !0, this._maxSimultaneousLights, this._disableLighting), cU._needNormals = !0, (0, TU.$)(oU, cU);
            const EU = this.needAlphaBlendingForMesh(XU) && this.nS().useOrderIndependentTransparency;
            if ((0, TU.fb)(oU, cU, this.canRenderToMRT && !EU), (0, TU.bb)(oU, cU, EU), IX.c.PrepareDefines(DU.currentRenderPassId, XU, cU), cU._areTexturesDirty) {
              cU._needUVs = !1;
              for (let UU = 1; UU <= 6; ++UU) cU["MAINUV" + UU] = !1;
              if (oU.texturesEnabled) {
                for (const zU in this._samplersList) {
                  const UU = this._samplersList[zU];
                  UU.value ? ((0, TU.Z)(UU.value, cU, UU.textureDefine), cU[UU.textureDefine + "_GAMMA"] = UU.value.gammaSpace) : cU[UU.textureDefine] = !1
                }
                const UU = this._getRadianceTexture(),
                  XU = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || DU.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, TU.T)(oU, UU, cU, this.realTimeFiltering, this.realTimeFilteringQuality, !XU), this._baseMetalnessTexture && (cU.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), cU.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, cU.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, cU.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, cU.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, cU.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, cU.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, cU.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, cU.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, cU.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, cU.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, cU.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && KU.b.DiffuseTextureEnabled ? (cU.PARALLAX = !0, cU.PARALLAX_RHS = oU.useRightHandedSystem, cU.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : cU.PARALLAX = !1, cU.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (cU.PARALLAX = !1, cU.PARALLAX_RHS = !1, cU.PARALLAXOCCLUSION = !1, cU.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && KU.b.ReflectionTextureEnabled ? (cU.ENVIRONMENTBRDF = !0, cU.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (cU.ENVIRONMENTBRDF = !1, cU.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? cU.FUZZENVIRONMENTBRDF = !0 : cU.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  cU.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && KU.b.RefractionTextureEnabled, cU.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, cU.REFRACTED_LIGHTS = !0;
                  const UU = this._getRadianceTexture();
                  UU ? (cU.REFRACTED_ENVIRONMENT = KU.b.RefractionTextureEnabled, cU.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.nS().useRightHandedSystem ? !UU.invertZ : UU.invertZ, cU.REFRACTED_ENVIRONMENT_LOCAL_CUBE = UU.isCube && UU.boundingBoxSize) : cU.REFRACTED_ENVIRONMENT = !1
                } else cU.REFRACTED_BACKGROUND = !1, cU.REFRACTED_LIGHTS = !1, cU.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? cU.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : cU.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === QU.c.LIGHTFALLOFF_STANDARD ? (cU.USEPHYSICALLIGHTFALLOFF = !1, cU.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === QU.c.LIGHTFALLOFF_GLTF ? (cU.USEPHYSICALLIGHTFALLOFF = !1, cU.USEGLTFLIGHTFALLOFF = !0) : (cU.USEPHYSICALLIGHTFALLOFF = !0, cU.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? cU.TWOSIDEDLIGHTING = !0 : cU.TWOSIDEDLIGHTING = !1, cU.MIRRORED = !!oU._mirroredCameraPosition, cU.SPECULARAA = DU.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(cU._areTexturesDirty || cU._areMiscDirty) && (cU.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, cU.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, cU.ALPHABLEND = this.needAlphaBlendingForMesh(XU)), cU._areTexturesDirty && (cU.TEXTURE_REPETITION_MODE = DU.version > 1 || DU.isWebGPU ? this.textureRepetitionMode : 0), cU._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(cU), cU.FORCENORMALFORWARD = this._forceNormalForward, cU.RADIANCEOCCLUSION = this._useRadianceOcclusion, cU.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && UU._noiseTextures[oU.uniqueId] && KU.b.ReflectionTextureEnabled ? (cU.ANISOTROPIC = !0, XU.isVerticesDataPresent(MU.h.TangentKind) || (cU._needUVs = !0, cU.MAINUV1 = !0), this._useGltfStyleAnisotropy && (cU.USE_GLTF_STYLE_ANISOTROPY = !0), cU.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, cU.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (cU.ANISOTROPIC = !1, cU.USE_GLTF_STYLE_ANISOTROPY = !1, cU.ANISOTROPIC_BASE = !1, cU.ANISOTROPIC_COAT = !1), cU.THIN_FILM = this.thinFilmWeight > 0, cU.IRIDESCENCE = this.thinFilmWeight > 0, cU.DISPERSION = this.transmissionDispersionScale > 0, cU.SCATTERING = this.hasScattering;
            if (cU.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, cU.TRANSMISSION_SLAB = this.transmissionWeight > 0, cU.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, cU.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !cU.PREPASS && (cU.SUBSURFACE_SLAB || cU.TRANSMISSION_SLAB_VOLUME)) {
              let UU = !1;
              if (!this.sssIrradianceTexture && oU.geometryBufferRenderer) {
                const XU = oU.geometryBufferRenderer.getTextureIndex(vX.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = oU.geometryBufferRenderer.getGBuffer().textures[XU], UU = !0
              }
              if (!this.sssDepthTexture && oU.geometryBufferRenderer) {
                const XU = oU.geometryBufferRenderer.getTextureIndex(vX.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = oU.geometryBufferRenderer.getGBuffer().textures[XU], UU = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (cU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, UU && (cU.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            cU.FUZZ = this.fuzzWeight > 0 && KU.b.ReflectionTextureEnabled, cU.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, cU.FUZZ ? (XU.isVerticesDataPresent(MU.h.TangentKind) || (cU._needUVs = !0, cU.MAINUV1 = !0), this._environmentFuzzBRDFTexture = uU(this.nS()), cU.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, cU.FUZZENVIRONMENTBRDF = !1, cU.FUZZ_IBL_SAMPLES = 0), cU._areMiscDirty && ((0, TU._)(XU, oU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(XU), cU, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zU, this._isVertexOutputInvariant), cU.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !XU.isVerticesDataPresent(MU.h.NormalKind), cU.DEBUGMODE = this._debugMode), (0, TU.S)(oU, DU, this, cU, !!yU, AU, FU), this._eventInfo.defines = cU, this._eventInfo.mesh = XU, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, TU.Q)(XU, cU, !0, !0, !0, this._transparencyMode !== QU.c.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, XU = new WeakMap, cU = new WeakMap, yU = new WeakMap, AU = new WeakMap, FU = new WeakMap, oU = new WeakMap, DU = new WeakMap, EU = new WeakMap, YU = new WeakMap, NU = new WeakMap, IU = new WeakMap, pU = new WeakMap, aU = new WeakMap, tU = new WeakMap, gU = new WeakMap, kU = new WeakMap, GU = new WeakMap, BU = new WeakMap, ZU = new WeakMap, RU = new WeakMap, PU = new WeakMap, WU = new WeakMap, qU = new WeakMap, OU = new WeakMap, SU = new WeakMap, rU = new WeakMap, iU = new WeakMap, vU = new WeakMap, VU = new WeakMap, sU = new WeakMap, nU = new WeakMap, xU = new WeakMap, jU = new WeakMap, hU = new WeakMap, UX = new WeakMap, XX = new WeakMap, zX = new WeakMap, cX = new WeakMap, yX = new WeakMap, QX = new WeakMap, AX = new WeakMap, FX = new WeakMap, oX = new WeakMap, DX = new WeakMap, pX = new WeakMap, aX = new WeakMap, tX = new WeakMap, gX = new WeakMap, kX = new WeakMap, GX = new WeakMap, BX = new WeakMap, ZX = new WeakMap, RX = new WeakMap, dX = new WeakMap, LX = new WeakMap, eX = new WeakMap, CX = new WeakMap, wX = new WeakMap, qX = new WeakMap, OX = new WeakMap, SX = new WeakMap, rX = new WeakMap, uX = new WeakMap, fX = new WeakMap, iX = new WeakMap, HX = new WeakMap, MX = new WeakMap, VX = new WeakMap, nX = new WeakMap, JX = new WeakMap, jX = new WeakMap, TX = new WeakMap, hX = new WeakMap, Uz = new WeakMap, Xz = new WeakMap, zz = new WeakMap, cz = new WeakMap, yz = new WeakMap, Qz = new WeakMap, Az = new WeakMap, Fz = new WeakMap, oz = new WeakMap, Dz = new WeakMap, Ez = new WeakMap, Yz = new WeakMap, Nz = new WeakMap, Iz = new WeakMap, pz = new WeakMap, az = new WeakMap, tz = new WeakMap, gz = new WeakMap, kz = new WeakMap, Gz = new WeakMap, Bz = new WeakMap, Zz = new WeakMap, Rz = new WeakMap, Pz = new WeakMap, Wz = new WeakMap, dz = new WeakMap, Lz = new WeakMap, ez = new WeakMap, Cz = new WeakMap, (() => {
          const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(qy[Symbol.metadata] ?? null) : void 0;
          wz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], qz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Mz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], sz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], nz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], lz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], xz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Jz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], hz = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Uc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Xc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], zc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], cc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], yc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Qc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Ac = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Fc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Yc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Nc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Ic = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], pc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], ac = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Pc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Wc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], dc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Lc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], ec = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], wc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], qc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], fc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Mc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], vc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], sc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], nc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], lc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], xc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Jc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], jc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Kc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], bc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], hc = [(0, LU.b)("_markAllSubMeshesAsTexturesDirty")], Uy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Xy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], zy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], cy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], yy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Qy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Ay = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Fy = [(0, LU.I)()], oy = [(0, LU.I)()], Dy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Yy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Ny = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Iy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsLightsDirty")], py = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], ay = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsLightsDirty")], ty = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], gy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], ky = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Gy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], By = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Zy = [(0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Ry = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Py = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Wy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], dy = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Ly = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], ey = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], Cy = [(0, LU.c)("_markAllSubMeshesAsMiscDirty")], wy = [(0, LU.I)()], (0, dU.j)(UU, null, wz, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseWeight" in UU,
              get: UU => UU.baseWeight,
              set: (UU, XU) => {
                UU.baseWeight = XU
              }
            },
            metadata: XU
          }, Sy, ry), (0, dU.j)(UU, null, qz, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseWeightTexture" in UU,
              get: UU => UU.baseWeightTexture,
              set: (UU, XU) => {
                UU.baseWeightTexture = XU
              }
            },
            metadata: XU
          }, uy, fy), (0, dU.j)(UU, null, Oz, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseColor" in UU,
              get: UU => UU.baseColor,
              set: (UU, XU) => {
                UU.baseColor = XU
              }
            },
            metadata: XU
          }, iy, Hy), (0, dU.j)(UU, null, Sz, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseColorTexture" in UU,
              get: UU => UU.baseColorTexture,
              set: (UU, XU) => {
                UU.baseColorTexture = XU
              }
            },
            metadata: XU
          }, My, vy), (0, dU.j)(UU, null, rz, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseDiffuseRoughness" in UU,
              get: UU => UU.baseDiffuseRoughness,
              set: (UU, XU) => {
                UU.baseDiffuseRoughness = XU
              }
            },
            metadata: XU
          }, Vy, sy), (0, dU.j)(UU, null, uz, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseDiffuseRoughnessTexture" in UU,
              get: UU => UU.baseDiffuseRoughnessTexture,
              set: (UU, XU) => {
                UU.baseDiffuseRoughnessTexture = XU
              }
            },
            metadata: XU
          }, ny, my), (0, dU.j)(UU, null, fz, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseMetalness" in UU,
              get: UU => UU.baseMetalness,
              set: (UU, XU) => {
                UU.baseMetalness = XU
              }
            },
            metadata: XU
          }, ly, xy), (0, dU.j)(UU, null, iz, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "baseMetalnessTexture" in UU,
              get: UU => UU.baseMetalnessTexture,
              set: (UU, XU) => {
                UU.baseMetalnessTexture = XU
              }
            },
            metadata: XU
          }, Jy, jy), (0, dU.j)(UU, null, Hz, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularWeight" in UU,
              get: UU => UU.specularWeight,
              set: (UU, XU) => {
                UU.specularWeight = XU
              }
            },
            metadata: XU
          }, Ky, by), (0, dU.j)(UU, null, Mz, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularWeightTexture" in UU,
              get: UU => UU.specularWeightTexture,
              set: (UU, XU) => {
                UU.specularWeightTexture = XU
              }
            },
            metadata: XU
          }, Ty, hy), (0, dU.j)(UU, null, vz, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularColor" in UU,
              get: UU => UU.specularColor,
              set: (UU, XU) => {
                UU.specularColor = XU
              }
            },
            metadata: XU
          }, UQ, XQ), (0, dU.j)(UU, null, Vz, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularColorTexture" in UU,
              get: UU => UU.specularColorTexture,
              set: (UU, XU) => {
                UU.specularColorTexture = XU
              }
            },
            metadata: XU
          }, zQ, cQ), (0, dU.j)(UU, null, sz, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughness" in UU,
              get: UU => UU.specularRoughness,
              set: (UU, XU) => {
                UU.specularRoughness = XU
              }
            },
            metadata: XU
          }, yQ, QQ), (0, dU.j)(UU, null, nz, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughnessTexture" in UU,
              get: UU => UU.specularRoughnessTexture,
              set: (UU, XU) => {
                UU.specularRoughnessTexture = XU
              }
            },
            metadata: XU
          }, AQ, FQ), (0, dU.j)(UU, null, mz, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughnessAnisotropy" in UU,
              get: UU => UU.specularRoughnessAnisotropy,
              set: (UU, XU) => {
                UU.specularRoughnessAnisotropy = XU
              }
            },
            metadata: XU
          }, oQ, DQ), (0, dU.j)(UU, null, lz, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularRoughnessAnisotropyTexture" in UU,
              get: UU => UU.specularRoughnessAnisotropyTexture,
              set: (UU, XU) => {
                UU.specularRoughnessAnisotropyTexture = XU
              }
            },
            metadata: XU
          }, EQ, YQ), (0, dU.j)(UU, null, xz, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularIor" in UU,
              get: UU => UU.specularIor,
              set: (UU, XU) => {
                UU.specularIor = XU
              }
            },
            metadata: XU
          }, NQ, IQ), (0, dU.j)(UU, null, Jz, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionWeight" in UU,
              get: UU => UU.transmissionWeight,
              set: (UU, XU) => {
                UU.transmissionWeight = XU
              }
            },
            metadata: XU
          }, pQ, aQ), (0, dU.j)(UU, null, jz, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionWeightTexture" in UU,
              get: UU => UU.transmissionWeightTexture,
              set: (UU, XU) => {
                UU.transmissionWeightTexture = XU
              }
            },
            metadata: XU
          }, tQ, gQ), (0, dU.j)(UU, null, Kz, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionColor" in UU,
              get: UU => UU.transmissionColor,
              set: (UU, XU) => {
                UU.transmissionColor = XU
              }
            },
            metadata: XU
          }, kQ, GQ), (0, dU.j)(UU, null, bz, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionColorTexture" in UU,
              get: UU => UU.transmissionColorTexture,
              set: (UU, XU) => {
                UU.transmissionColorTexture = XU
              }
            },
            metadata: XU
          }, BQ, ZQ), (0, dU.j)(UU, null, Tz, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDepth" in UU,
              get: UU => UU.transmissionDepth,
              set: (UU, XU) => {
                UU.transmissionDepth = XU
              }
            },
            metadata: XU
          }, RQ, PQ), (0, dU.j)(UU, null, hz, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDepthTexture" in UU,
              get: UU => UU.transmissionDepthTexture,
              set: (UU, XU) => {
                UU.transmissionDepthTexture = XU
              }
            },
            metadata: XU
          }, WQ, dQ), (0, dU.j)(UU, null, Uc, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionScatter" in UU,
              get: UU => UU.transmissionScatter,
              set: (UU, XU) => {
                UU.transmissionScatter = XU
              }
            },
            metadata: XU
          }, LQ, eQ), (0, dU.j)(UU, null, Xc, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionScatterTexture" in UU,
              get: UU => UU.transmissionScatterTexture,
              set: (UU, XU) => {
                UU.transmissionScatterTexture = XU
              }
            },
            metadata: XU
          }, CQ, wQ), (0, dU.j)(UU, null, zc, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionScatterAnisotropy" in UU,
              get: UU => UU.transmissionScatterAnisotropy,
              set: (UU, XU) => {
                UU.transmissionScatterAnisotropy = XU
              }
            },
            metadata: XU
          }, qQ, OQ), (0, dU.j)(UU, null, cc, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDispersionScale" in UU,
              get: UU => UU.transmissionDispersionScale,
              set: (UU, XU) => {
                UU.transmissionDispersionScale = XU
              }
            },
            metadata: XU
          }, SQ, rQ), (0, dU.j)(UU, null, yc, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDispersionScaleTexture" in UU,
              get: UU => UU.transmissionDispersionScaleTexture,
              set: (UU, XU) => {
                UU.transmissionDispersionScaleTexture = XU
              }
            },
            metadata: XU
          }, uQ, fQ), (0, dU.j)(UU, null, Qc, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: UU => "transmissionDispersionAbbeNumber" in UU,
              get: UU => UU.transmissionDispersionAbbeNumber,
              set: (UU, XU) => {
                UU.transmissionDispersionAbbeNumber = XU
              }
            },
            metadata: XU
          }, iQ, HQ), (0, dU.j)(UU, null, Ac, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceWeight" in UU,
              get: UU => UU.subsurfaceWeight,
              set: (UU, XU) => {
                UU.subsurfaceWeight = XU
              }
            },
            metadata: XU
          }, MQ, vQ), (0, dU.j)(UU, null, Fc, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceWeightTexture" in UU,
              get: UU => UU.subsurfaceWeightTexture,
              set: (UU, XU) => {
                UU.subsurfaceWeightTexture = XU
              }
            },
            metadata: XU
          }, VQ, sQ), (0, dU.j)(UU, null, oc, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceColor" in UU,
              get: UU => UU.subsurfaceColor,
              set: (UU, XU) => {
                UU.subsurfaceColor = XU
              }
            },
            metadata: XU
          }, nQ, mQ), (0, dU.j)(UU, null, Dc, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceColorTexture" in UU,
              get: UU => UU.subsurfaceColorTexture,
              set: (UU, XU) => {
                UU.subsurfaceColorTexture = XU
              }
            },
            metadata: XU
          }, lQ, xQ), (0, dU.j)(UU, null, Ec, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceRadius" in UU,
              get: UU => UU.subsurfaceRadius,
              set: (UU, XU) => {
                UU.subsurfaceRadius = XU
              }
            },
            metadata: XU
          }, JQ, jQ), (0, dU.j)(UU, null, Yc, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceRadiusScale" in UU,
              get: UU => UU.subsurfaceRadiusScale,
              set: (UU, XU) => {
                UU.subsurfaceRadiusScale = XU
              }
            },
            metadata: XU
          }, KQ, bQ), (0, dU.j)(UU, null, Nc, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceRadiusScaleTexture" in UU,
              get: UU => UU.subsurfaceRadiusScaleTexture,
              set: (UU, XU) => {
                UU.subsurfaceRadiusScaleTexture = XU
              }
            },
            metadata: XU
          }, TQ, hQ), (0, dU.j)(UU, null, Ic, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "subsurfaceScatterAnisotropy" in UU,
              get: UU => UU.subsurfaceScatterAnisotropy,
              set: (UU, XU) => {
                UU.subsurfaceScatterAnisotropy = XU
              }
            },
            metadata: XU
          }, UA, XA), (0, dU.j)(UU, null, pc, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatWeight" in UU,
              get: UU => UU.coatWeight,
              set: (UU, XU) => {
                UU.coatWeight = XU
              }
            },
            metadata: XU
          }, zA, cA), (0, dU.j)(UU, null, ac, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatWeightTexture" in UU,
              get: UU => UU.coatWeightTexture,
              set: (UU, XU) => {
                UU.coatWeightTexture = XU
              }
            },
            metadata: XU
          }, yA, QA), (0, dU.j)(UU, null, tc, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatColor" in UU,
              get: UU => UU.coatColor,
              set: (UU, XU) => {
                UU.coatColor = XU
              }
            },
            metadata: XU
          }, AA, FA), (0, dU.j)(UU, null, gc, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatColorTexture" in UU,
              get: UU => UU.coatColorTexture,
              set: (UU, XU) => {
                UU.coatColorTexture = XU
              }
            },
            metadata: XU
          }, oA, DA), (0, dU.j)(UU, null, kc, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughness" in UU,
              get: UU => UU.coatRoughness,
              set: (UU, XU) => {
                UU.coatRoughness = XU
              }
            },
            metadata: XU
          }, EA, YA), (0, dU.j)(UU, null, Gc, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughnessTexture" in UU,
              get: UU => UU.coatRoughnessTexture,
              set: (UU, XU) => {
                UU.coatRoughnessTexture = XU
              }
            },
            metadata: XU
          }, NA, IA), (0, dU.j)(UU, null, Bc, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughnessAnisotropy" in UU,
              get: UU => UU.coatRoughnessAnisotropy,
              set: (UU, XU) => {
                UU.coatRoughnessAnisotropy = XU
              }
            },
            metadata: XU
          }, pA, aA), (0, dU.j)(UU, null, Zc, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatRoughnessAnisotropyTexture" in UU,
              get: UU => UU.coatRoughnessAnisotropyTexture,
              set: (UU, XU) => {
                UU.coatRoughnessAnisotropyTexture = XU
              }
            },
            metadata: XU
          }, tA, gA), (0, dU.j)(UU, null, Rc, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatIor" in UU,
              get: UU => UU.coatIor,
              set: (UU, XU) => {
                UU.coatIor = XU
              }
            },
            metadata: XU
          }, kA, GA), (0, dU.j)(UU, null, Pc, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatDarkening" in UU,
              get: UU => UU.coatDarkening,
              set: (UU, XU) => {
                UU.coatDarkening = XU
              }
            },
            metadata: XU
          }, BA, ZA), (0, dU.j)(UU, null, Wc, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "coatDarkeningTexture" in UU,
              get: UU => UU.coatDarkeningTexture,
              set: (UU, XU) => {
                UU.coatDarkeningTexture = XU
              }
            },
            metadata: XU
          }, RA, PA), (0, dU.j)(UU, null, dc, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzWeight" in UU,
              get: UU => UU.fuzzWeight,
              set: (UU, XU) => {
                UU.fuzzWeight = XU
              }
            },
            metadata: XU
          }, WA, dA), (0, dU.j)(UU, null, Lc, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzWeightTexture" in UU,
              get: UU => UU.fuzzWeightTexture,
              set: (UU, XU) => {
                UU.fuzzWeightTexture = XU
              }
            },
            metadata: XU
          }, LA, eA), (0, dU.j)(UU, null, ec, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzColor" in UU,
              get: UU => UU.fuzzColor,
              set: (UU, XU) => {
                UU.fuzzColor = XU
              }
            },
            metadata: XU
          }, CA, wA), (0, dU.j)(UU, null, Cc, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzColorTexture" in UU,
              get: UU => UU.fuzzColorTexture,
              set: (UU, XU) => {
                UU.fuzzColorTexture = XU
              }
            },
            metadata: XU
          }, qA, OA), (0, dU.j)(UU, null, wc, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzRoughness" in UU,
              get: UU => UU.fuzzRoughness,
              set: (UU, XU) => {
                UU.fuzzRoughness = XU
              }
            },
            metadata: XU
          }, SA, rA), (0, dU.j)(UU, null, qc, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "fuzzRoughnessTexture" in UU,
              get: UU => UU.fuzzRoughnessTexture,
              set: (UU, XU) => {
                UU.fuzzRoughnessTexture = XU
              }
            },
            metadata: XU
          }, uA, fA), (0, dU.j)(UU, null, Oc, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryThinWalled" in UU,
              get: UU => UU.geometryThinWalled,
              set: (UU, XU) => {
                UU.geometryThinWalled = XU
              }
            },
            metadata: XU
          }, iA, HA), (0, dU.j)(UU, null, Sc, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryNormalTexture" in UU,
              get: UU => UU.geometryNormalTexture,
              set: (UU, XU) => {
                UU.geometryNormalTexture = XU
              }
            },
            metadata: XU
          }, MA, vA), (0, dU.j)(UU, null, rc, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryTangent" in UU,
              get: UU => UU.geometryTangent,
              set: (UU, XU) => {
                UU.geometryTangent = XU
              }
            },
            metadata: XU
          }, VA, sA), (0, dU.j)(UU, null, uc, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryTangentTexture" in UU,
              get: UU => UU.geometryTangentTexture,
              set: (UU, XU) => {
                UU.geometryTangentTexture = XU
              }
            },
            metadata: XU
          }, nA, mA), (0, dU.j)(UU, null, fc, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryCoatNormalTexture" in UU,
              get: UU => UU.geometryCoatNormalTexture,
              set: (UU, XU) => {
                UU.geometryCoatNormalTexture = XU
              }
            },
            metadata: XU
          }, lA, xA), (0, dU.j)(UU, null, ic, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryCoatTangent" in UU,
              get: UU => UU.geometryCoatTangent,
              set: (UU, XU) => {
                UU.geometryCoatTangent = XU
              }
            },
            metadata: XU
          }, JA, jA), (0, dU.j)(UU, null, Hc, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryCoatTangentTexture" in UU,
              get: UU => UU.geometryCoatTangentTexture,
              set: (UU, XU) => {
                UU.geometryCoatTangentTexture = XU
              }
            },
            metadata: XU
          }, KA, bA), (0, dU.j)(UU, null, Mc, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryOpacity" in UU,
              get: UU => UU.geometryOpacity,
              set: (UU, XU) => {
                UU.geometryOpacity = XU
              }
            },
            metadata: XU
          }, TA, hA), (0, dU.j)(UU, null, vc, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryOpacityTexture" in UU,
              get: UU => UU.geometryOpacityTexture,
              set: (UU, XU) => {
                UU.geometryOpacityTexture = XU
              }
            },
            metadata: XU
          }, UF, XF), (0, dU.j)(UU, null, Vc, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryThickness" in UU,
              get: UU => UU.geometryThickness,
              set: (UU, XU) => {
                UU.geometryThickness = XU
              }
            },
            metadata: XU
          }, zF, cF), (0, dU.j)(UU, null, sc, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "geometryThicknessTexture" in UU,
              get: UU => UU.geometryThicknessTexture,
              set: (UU, XU) => {
                UU.geometryThicknessTexture = XU
              }
            },
            metadata: XU
          }, yF, QF), (0, dU.j)(UU, null, nc, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissionLuminance" in UU,
              get: UU => UU.emissionLuminance,
              set: (UU, XU) => {
                UU.emissionLuminance = XU
              }
            },
            metadata: XU
          }, AF, FF), (0, dU.j)(UU, null, mc, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissionColor" in UU,
              get: UU => UU.emissionColor,
              set: (UU, XU) => {
                UU.emissionColor = XU
              }
            },
            metadata: XU
          }, oF, DF), (0, dU.j)(UU, null, lc, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissionColorTexture" in UU,
              get: UU => UU.emissionColorTexture,
              set: (UU, XU) => {
                UU.emissionColorTexture = XU
              }
            },
            metadata: XU
          }, EF, YF), (0, dU.j)(UU, null, xc, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmWeight" in UU,
              get: UU => UU.thinFilmWeight,
              set: (UU, XU) => {
                UU.thinFilmWeight = XU
              }
            },
            metadata: XU
          }, NF, IF), (0, dU.j)(UU, null, Jc, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmWeightTexture" in UU,
              get: UU => UU.thinFilmWeightTexture,
              set: (UU, XU) => {
                UU.thinFilmWeightTexture = XU
              }
            },
            metadata: XU
          }, pF, aF), (0, dU.j)(UU, null, jc, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmThickness" in UU,
              get: UU => UU.thinFilmThickness,
              set: (UU, XU) => {
                UU.thinFilmThickness = XU
              }
            },
            metadata: XU
          }, tF, gF), (0, dU.j)(UU, null, Kc, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmThicknessMin" in UU,
              get: UU => UU.thinFilmThicknessMin,
              set: (UU, XU) => {
                UU.thinFilmThicknessMin = XU
              }
            },
            metadata: XU
          }, kF, GF), (0, dU.j)(UU, null, bc, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmThicknessTexture" in UU,
              get: UU => UU.thinFilmThicknessTexture,
              set: (UU, XU) => {
                UU.thinFilmThicknessTexture = XU
              }
            },
            metadata: XU
          }, BF, ZF), (0, dU.j)(UU, null, Tc, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: UU => "thinFilmIor" in UU,
              get: UU => UU.thinFilmIor,
              set: (UU, XU) => {
                UU.thinFilmIor = XU
              }
            },
            metadata: XU
          }, RF, PF), (0, dU.j)(UU, null, hc, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "ambientOcclusionTexture" in UU,
              get: UU => UU.ambientOcclusionTexture,
              set: (UU, XU) => {
                UU.ambientOcclusionTexture = XU
              }
            },
            metadata: XU
          }, WF, dF), (0, dU.j)(UU, null, Uy, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: UU => "directIntensity" in UU,
              get: UU => UU.directIntensity,
              set: (UU, XU) => {
                UU.directIntensity = XU
              }
            },
            metadata: XU
          }, LF, eF), (0, dU.j)(UU, null, Xy, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: UU => "environmentIntensity" in UU,
              get: UU => UU.environmentIntensity,
              set: (UU, XU) => {
                UU.environmentIntensity = XU
              }
            },
            metadata: XU
          }, CF, wF), (0, dU.j)(UU, null, zy, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useSpecularWeightFromTextureAlpha" in UU,
              get: UU => UU.useSpecularWeightFromTextureAlpha,
              set: (UU, XU) => {
                UU.useSpecularWeightFromTextureAlpha = XU
              }
            },
            metadata: XU
          }, qF, OF), (0, dU.j)(UU, null, cy, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceAlphaTest" in UU,
              get: UU => UU.forceAlphaTest,
              set: (UU, XU) => {
                UU.forceAlphaTest = XU
              }
            },
            metadata: XU
          }, SF, rF), (0, dU.j)(UU, null, yy, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaCutOff" in UU,
              get: UU => UU.alphaCutOff,
              set: (UU, XU) => {
                UU.alphaCutOff = XU
              }
            },
            metadata: XU
          }, uF, fF), (0, dU.j)(UU, null, Qy, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAmbientOcclusionFromMetallicTextureRed" in UU,
              get: UU => UU.useAmbientOcclusionFromMetallicTextureRed,
              set: (UU, XU) => {
                UU.useAmbientOcclusionFromMetallicTextureRed = XU
              }
            },
            metadata: XU
          }, iF, HF), (0, dU.j)(UU, null, Ay, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAmbientInGrayScale" in UU,
              get: UU => UU.useAmbientInGrayScale,
              set: (UU, XU) => {
                UU.useAmbientInGrayScale = XU
              }
            },
            metadata: XU
          }, MF, vF), (0, dU.j)(UU, null, Fy, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: UU => "usePhysicalLightFalloff" in UU,
              get: UU => UU.usePhysicalLightFalloff
            },
            metadata: XU
          }, null, Oy), (0, dU.j)(UU, null, oy, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: UU => "useGLTFLightFalloff" in UU,
              get: UU => UU.useGLTFLightFalloff
            },
            metadata: XU
          }, null, Oy), (0, dU.j)(UU, null, Dy, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "useObjectSpaceNormalMap" in UU,
              get: UU => UU.useObjectSpaceNormalMap,
              set: (UU, XU) => {
                UU.useObjectSpaceNormalMap = XU
              }
            },
            metadata: XU
          }, VF, sF), (0, dU.j)(UU, null, Ey, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallax" in UU,
              get: UU => UU.useParallax,
              set: (UU, XU) => {
                UU.useParallax = XU
              }
            },
            metadata: XU
          }, nF, mF), (0, dU.j)(UU, null, Yy, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallaxOcclusion" in UU,
              get: UU => UU.useParallaxOcclusion,
              set: (UU, XU) => {
                UU.useParallaxOcclusion = XU
              }
            },
            metadata: XU
          }, lF, xF), (0, dU.j)(UU, null, Ny, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: UU => "parallaxScaleBias" in UU,
              get: UU => UU.parallaxScaleBias,
              set: (UU, XU) => {
                UU.parallaxScaleBias = XU
              }
            },
            metadata: XU
          }, JF, jF), (0, dU.j)(UU, null, Iy, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "disableLighting" in UU,
              get: UU => UU.disableLighting,
              set: (UU, XU) => {
                UU.disableLighting = XU
              }
            },
            metadata: XU
          }, KF, bF), (0, dU.j)(UU, null, py, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceIrradianceInFragment" in UU,
              get: UU => UU.forceIrradianceInFragment,
              set: (UU, XU) => {
                UU.forceIrradianceInFragment = XU
              }
            },
            metadata: XU
          }, TF, hF), (0, dU.j)(UU, null, ay, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: UU => "maxSimultaneousLights" in UU,
              get: UU => UU.maxSimultaneousLights,
              set: (UU, XU) => {
                UU.maxSimultaneousLights = XU
              }
            },
            metadata: XU
          }, Uo, Xo), (0, dU.j)(UU, null, ty, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapX" in UU,
              get: UU => UU.invertNormalMapX,
              set: (UU, XU) => {
                UU.invertNormalMapX = XU
              }
            },
            metadata: XU
          }, zo, co), (0, dU.j)(UU, null, gy, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapY" in UU,
              get: UU => UU.invertNormalMapY,
              set: (UU, XU) => {
                UU.invertNormalMapY = XU
              }
            },
            metadata: XU
          }, yo, Qo), (0, dU.j)(UU, null, ky, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "twoSidedLighting" in UU,
              get: UU => UU.twoSidedLighting,
              set: (UU, XU) => {
                UU.twoSidedLighting = XU
              }
            },
            metadata: XU
          }, Ao, Fo), (0, dU.j)(UU, null, Gy, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAlphaFresnel" in UU,
              get: UU => UU.useAlphaFresnel,
              set: (UU, XU) => {
                UU.useAlphaFresnel = XU
              }
            },
            metadata: XU
          }, oo, Do), (0, dU.j)(UU, null, By, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: UU => "useLinearAlphaFresnel" in UU,
              get: UU => UU.useLinearAlphaFresnel,
              set: (UU, XU) => {
                UU.useLinearAlphaFresnel = XU
              }
            },
            metadata: XU
          }, Eo, Yo), (0, dU.j)(UU, null, Zy, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "environmentBRDFTexture" in UU,
              get: UU => UU.environmentBRDFTexture,
              set: (UU, XU) => {
                UU.environmentBRDFTexture = XU
              }
            },
            metadata: XU
          }, No, Io), (0, dU.j)(UU, null, Ry, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: UU => "forceNormalForward" in UU,
              get: UU => UU.forceNormalForward,
              set: (UU, XU) => {
                UU.forceNormalForward = XU
              }
            },
            metadata: XU
          }, po, ao), (0, dU.j)(UU, null, Py, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: UU => "enableSpecularAntiAliasing" in UU,
              get: UU => UU.enableSpecularAntiAliasing,
              set: (UU, XU) => {
                UU.enableSpecularAntiAliasing = XU
              }
            },
            metadata: XU
          }, to, go), (0, dU.j)(UU, null, Wy, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useHorizonOcclusion" in UU,
              get: UU => UU.useHorizonOcclusion,
              set: (UU, XU) => {
                UU.useHorizonOcclusion = XU
              }
            },
            metadata: XU
          }, ko, Go), (0, dU.j)(UU, null, dy, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useRadianceOcclusion" in UU,
              get: UU => UU.useRadianceOcclusion,
              set: (UU, XU) => {
                UU.useRadianceOcclusion = XU
              }
            },
            metadata: XU
          }, Bo, Zo), (0, dU.j)(UU, null, Ly, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: UU => "unlit" in UU,
              get: UU => UU.unlit,
              set: (UU, XU) => {
                UU.unlit = XU
              }
            },
            metadata: XU
          }, Ro, Po), (0, dU.j)(UU, null, ey, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "applyDecalMapAfterDetailMap" in UU,
              get: UU => UU.applyDecalMapAfterDetailMap,
              set: (UU, XU) => {
                UU.applyDecalMapAfterDetailMap = XU
              }
            },
            metadata: XU
          }, Wo, Lo), (0, dU.j)(UU, null, Cy, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "debugMode" in UU,
              get: UU => UU.debugMode,
              set: (UU, XU) => {
                UU.debugMode = XU
              }
            },
            metadata: XU
          }, eo, Co), (0, dU.j)(UU, null, wy, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "transparencyMode" in UU,
              get: UU => UU.transparencyMode
            },
            metadata: XU
          }, null, Oy), XU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XU
          })
        })(), UU.SSS_QUALITY_LOW = 0, UU.SSS_QUALITY_MEDIUM = 1, UU.SSS_QUALITY_HIGH = 2, UU._noiseTextures = {}, UU.ForceGLSL = !1, UU._ShaderLoader = new NX.e((() => [Promise.all([zU.e(623), zU.e(686)]).then((() => zU(64405))), Promise.all([zU.e(628), zU.e(624), zU.e(685), zU.e(690)]).then((() => zU(64422)))]), (() => [Promise.all([zU.e(642), zU.e(644), zU.e(689)]).then((() => zU(64464))), Promise.all([zU.e(642), zU.e(645), zU.e(688), zU.e(691)]).then((() => zU(64474)))])), UU
      })(),
      hX = !1;
    hX || (hX = !0, (0, JU.d)(), (0, VX.h)("BABYLON.OpenPBRMaterial", TX));
    var Uz = zU(37846);
    class Xz {
      constructor(UU) {
        this.name = rX.d.NAME_PROCEDURALTEXTURE, this.sa = UU
      }
      register() {
        this.sa._beforeClearStage.registerStep(rX.d.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.sa.proceduralTexturesEnabled) {
          WX.j.StartPerformanceCounter("Procedural textures", this.sa.proceduralTextures.length > 0);
          for (let UU = 0; UU < this.sa.proceduralTextures.length; UU++) {
            const XU = this.sa.proceduralTextures[UU];
            XU._shouldRender() && XU.render()
          }
          WX.j.EndPerformanceCounter("Procedural textures", this.sa.proceduralTextures.length > 0)
        }
      }
    }
    var zz = zU(41395);
    let cz = (() => {
      var UU;
      let XU, cU, yU, AU, FU, oU = wU.e,
        DU = [],
        EU = [],
        YU = [],
        NU = [],
        IU = [],
        pU = [],
        tU = [],
        gU = [],
        kU = [];
      return UU = class extends oU {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(UU, XU, zU, cU) {
          let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, cU, !QU), this.isEnabled = ((0, dU.n)(this, DU), (0, dU.n)(this, EU, !0)), this.autoClear = ((0, dU.n)(this, YU), (0, dU.n)(this, NU, !0)), this.onGenerated = (0, dU.n)(this, IU), this.onGeneratedObservable = new Uz.e, this.onBeforeGenerationObservable = new Uz.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, dU.n)(this, pU, void 0), this._drawWrapper = (0, dU.n)(this, tU), this._textures = {}, this._size = (0, dU.n)(this, gU, void 0), this._textureType = (0, dU.n)(this, kU), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === yU || yU instanceof wU.e ? (this._options = {}, this._fallbackTexture = yU) : (this._options = yU, this._fallbackTexture = yU.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let oU = (cU = this.nS() || aU.b.LastCreatedScene)._getComponent(rX.d.NAME_PROCEDURALTEXTURE);
          oU || (oU = new Xz(cU), cU.ncU(oU)), this._options.skipSceneRegistration || cU.proceduralTextures.push(this), this._fullEngine = cU.qp(), this.name = UU, this.isRenderTarget = !0, this._size = XU, this._textureType = FU, this._generateMipMaps = QU, this._drawWrapper = new zz.c(this._fullEngine), this.setFragment(zU);
          const GU = this._createRtWrapper(AU, XU, QU, FU);
          this._texture = GU.texture;
          const BU = [];
          BU.push(1, 1), BU.push(-1, 1), BU.push(-1, -1), BU.push(1, -1), this._vertexBuffers[MU.h.PositionKind] = new MU.h(this._fullEngine, BU, MU.h.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(UU, XU, zU, cU) {
          return UU ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(XU, {
            generateMipMaps: zU,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: cU,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(XU, {
            generateMipMaps: zU,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: cU,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(UU) {
          this._drawWrapper.effect = UU
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((UU => {
            this._contentData = this.readPixels(0, 0, UU), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const UU = this._fullEngine,
            XU = [];
          XU.push(0), XU.push(1), XU.push(2), XU.push(0), XU.push(2), XU.push(3), this._indexBuffer = UU.createIndexBuffer(XU)
        }
        _rebuild() {
          const UU = this._vertexBuffers[MU.h.PositionKind];
          UU && UU._rebuild(), this._createIndexBuffer(), this.refreshRate === dX.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = dX.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(UU) {
          if (this.isReady()) return void UU(this);
          const XU = this.getEffect();
          XU && XU.executeWhenCompiled((() => {
            UU(this)
          }))
        }
        isReady() {
          const UU = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const XU = this._getDefines();
          if (this._drawWrapper.effect && XU === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const cU = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== XU && (this._cachedDefines = XU, this._drawWrapper.effect = UU.createEffect(cU, [MU.h.PositionKind], this._uniforms, this._samplers, XU, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([zU.e(694).then((() => zU(64551))), this._options.extraInitializationsAsync()]) : await Promise.all([zU.e(695).then((() => zU(64554))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await zU.e(694).then((() => zU(64551))) : await zU.e(695).then((() => zU(64554)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(UU) {
          this._fragment = UU
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(UU) {
          this._refreshRate = UU, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(UU, XU) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const zU = this._texture.isCube;
          this._rtWrapper.dispose();
          const cU = this._createRtWrapper(zU, UU, XU, this._textureType);
          this._texture = cU.texture, this._size = UU, this._generateMipMaps = XU
        }
        _checkUniform(UU) {
          -1 === this._uniforms.indexOf(UU) && this._uniforms.push(UU)
        }
        setTexture(UU, XU) {
          return -1 === this._samplers.indexOf(UU) && this._samplers.push(UU), this._textures[UU] = XU, this
        }
        setFloat(UU, XU) {
          return this._checkUniform(UU), this._floats[UU] = XU, this
        }
        setInt(UU, XU) {
          return this._checkUniform(UU), this._ints[UU] = XU, this
        }
        setFloats(UU, XU) {
          return this._checkUniform(UU), this._floatsArrays[UU] = XU, this
        }
        setColor3(UU, XU) {
          return this._checkUniform(UU), this._colors3[UU] = XU, this
        }
        setColor4(UU, XU) {
          return this._checkUniform(UU), this._colors4[UU] = XU, this
        }
        setVector2(UU, XU) {
          return this._checkUniform(UU), this._vectors2[UU] = XU, this
        }
        setVector3(UU, XU) {
          return this._checkUniform(UU), this._vectors3[UU] = XU, this
        }
        setVector4(UU, XU) {
          return this._checkUniform(UU), this._vectors4[UU] = XU, this
        }
        setMatrix(UU, XU) {
          return this._checkUniform(UU), this._matrices[UU] = XU, this
        }
        render(UU) {
          const XU = this.nS();
          if (!XU) return;
          const zU = this._fullEngine;
          if (zU.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), zU.setState(!1), !this.nodeMaterialSource) {
            for (const UU in this._textures) this._drawWrapper.effect.setTexture(UU, this._textures[UU]);
            for (const UU in this._ints) this._drawWrapper.effect.setInt(UU, this._ints[UU]);
            for (const UU in this._floats) this._drawWrapper.effect.setFloat(UU, this._floats[UU]);
            for (const UU in this._floatsArrays) this._drawWrapper.effect.setArray(UU, this._floatsArrays[UU]);
            for (const UU in this._colors3) this._drawWrapper.effect.setColor3(UU, this._colors3[UU]);
            for (const UU in this._colors4) {
              const XU = this._colors4[UU];
              this._drawWrapper.effect.setFloat4(UU, XU.r, XU.g, XU.b, XU.a)
            }
            for (const UU in this._vectors2) this._drawWrapper.effect.setVector2(UU, this._vectors2[UU]);
            for (const UU in this._vectors3) this._drawWrapper.effect.setVector3(UU, this._vectors3[UU]);
            for (const UU in this._vectors4) this._drawWrapper.effect.setVector4(UU, this._vectors4[UU]);
            for (const UU in this._matrices) this._drawWrapper.effect.setMatrix(UU, this._matrices[UU])
          }
          if (!this._texture || !this._rtWrapper) return;
          zU._enableGPUDebugMarkers && zU._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const cU = zU.currentViewport;
          if (this.isCube)
            for (let yU = 0; yU < 6; yU++) zU.bindFramebuffer(this._rtWrapper, yU, void 0, void 0, !0), zU.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", yU), this.autoClear && zU.clear(XU.clearColor, !0, !1, !1), zU.drawElementsType(QU.c.TriangleFillMode, 0, 6), zU.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let UU = 1;
            this._rtWrapper.is3D ? UU = this._rtWrapper.depth : this._rtWrapper.is2DArray && (UU = this._rtWrapper.layers);
            for (let cU = 0; cU < UU; cU++) {
              if (zU.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, cU), zU.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== UU ? cU / (UU - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", cU);
                for (const UU in this._textures) this._drawWrapper.effect.setTexture(UU, this._textures[UU])
              }
              this.autoClear && zU.clear(XU.clearColor, !0, !1, !1), zU.drawElementsType(QU.c.TriangleFillMode, 0, 6), zU.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          cU && zU.setViewport(cU), this.isCube && zU.generateMipMapsForCubemap(this._texture, !0), zU._enableGPUDebugMarkers && zU._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const XU = this.getSize(),
            zU = new UU(this.name, XU.width, this._fragment, this.nS(), this._fallbackTexture, this._generateMipMaps);
          return zU.hasAlpha = this.hasAlpha, zU.level = this.level, zU.coordinatesMode = this.coordinatesMode, zU
        }
        dispose() {
          const UU = this.nS();
          if (!UU) return;
          const XU = UU.proceduralTextures.indexOf(this);
          XU >= 0 && UU.proceduralTextures.splice(XU, 1);
          const zU = this._vertexBuffers[MU.h.PositionKind];
          zU && (zU.dispose(), this._vertexBuffers[MU.h.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const zU = "function" === typeof Symbol && Symbol.metadata ? Object.create(oU[Symbol.metadata] ?? null) : void 0;
        XU = [(0, LU.I)()], cU = [(0, LU.I)()], yU = [(0, LU.I)()], AU = [(0, LU.I)()], FU = [(0, LU.I)()], (0, dU.j)(UU, null, FU, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: UU => "refreshRate" in UU,
            get: UU => UU.refreshRate
          },
          metadata: zU
        }, null, DU), (0, dU.j)(null, null, XU, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, XU) => {
              UU.isEnabled = XU
            }
          },
          metadata: zU
        }, EU, YU), (0, dU.j)(null, null, cU, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: UU => "autoClear" in UU,
            get: UU => UU.autoClear,
            set: (UU, XU) => {
              UU.autoClear = XU
            }
          },
          metadata: zU
        }, NU, IU), (0, dU.j)(null, null, yU, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: UU => "_generateMipMaps" in UU,
            get: UU => UU._generateMipMaps,
            set: (UU, XU) => {
              UU._generateMipMaps = XU
            }
          },
          metadata: zU
        }, pU, tU), (0, dU.j)(null, null, AU, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: UU => "_size" in UU,
            get: UU => UU._size,
            set: (UU, XU) => {
              UU._size = XU
            }
          },
          metadata: zU
        }, gU, kU), zU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zU
        })
      })(), UU
    })();

    function yz(UU) {
      return "texture" in UU
    }

    function Qz(UU) {
      return "value" in UU
    }
    async function Az(UU, XU, cU) {
      const yU = [XU.red, XU.green, XU.blue, XU.alpha],
        QU = [],
        AU = [];
      for (let zU = 0; zU < 4; zU++) {
        const UU = yU[zU];
        if (UU)
          if (yz(UU)) {
            if (UU.sourceChannel < 0 || UU.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let XU = QU.indexOf(UU.texture); - 1 === XU && (XU = QU.length, QU.push(UU.texture)), AU[zU] = XU
          } else {
            if (!Qz(UU)) throw new Error("Invalid channel input configuration");
            if (UU.value < 0 || UU.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            AU[zU] = -1
          }
        else AU[zU] = -1
      }
      let FU = XU.outputSize;
      if (!FU && QU.length > 0) {
        let UU = 0;
        for (const XU of QU) {
          const zU = XU.getSize(),
            cU = Math.max(zU.width, zU.height);
          cU > UU && (UU = cU, FU = zU.width === zU.height ? UU : zU)
        }
      }
      FU = FU || 512;
      const oU = [],
        DU = new Set;
      for (let zU = 0; zU < 4; zU++) {
        const UU = yU[zU],
          XU = ["RED", "GREEN", "BLUE", "ALPHA"][zU];
        if (UU && yz(UU)) {
          oU.push(`${XU}_FROM_TEXTURE`);
          const UU = AU[zU];
          DU.add(UU)
        }
      }
      DU.forEach((UU => {
        oU.push(`USE_TEXTURE${UU}`)
      }));
      const EU = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: cU.qp().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            cU.qp().isWebGPU ? await Promise.all([zU.e(692).then((() => zU(64534)))]) : await Promise.all([zU.e(693).then((() => zU(64543)))])
          },
          skipSceneRegistration: !0
        },
        YU = new cz(UU, FU, "textureMerger", cU, EU);
      YU.refreshRate = -1, YU.defines = oU.length > 0 ? "#define " + oU.join("\n#define ") + "\n" : "";
      for (let zU = 0; zU < QU.length; zU++) NU = QU[zU], (IU = YU).uOffset = NU.uOffset, IU.vOffset = NU.vOffset, IU.uScale = NU.uScale, IU.vScale = NU.vScale, IU.uAng = NU.uAng, IU.vAng = NU.vAng, IU.wAng = NU.wAng, IU.uRotationCenter = NU.uRotationCenter, IU.vRotationCenter = NU.vRotationCenter, YU.setTexture(`inputTexture${zU}`, QU[zU]);
      var NU, IU;
      for (let zU = 0; zU < 4; zU++) {
        const UU = yU[zU],
          XU = ["red", "green", "blue", "alpha"][zU];
        if (UU && yz(UU)) {
          const cU = AU[zU];
          YU.setInt(`${XU}TextureIndex`, cU), YU.setInt(`${XU}SourceChannel`, UU.sourceChannel)
        } else {
          let cU;
          cU = UU && Qz(UU) ? UU.value : 3 === zU ? 1 : 0, YU.setFloat(`${XU}ConstantValue`, cU)
        }
      }
      return await new Promise(((UU, XU) => {
        YU.executeWhenReady((() => {
          try {
            YU.render(), UU(YU)
          } catch (zU) {
            XU(zU instanceof Error ? zU : new Error(String(zU)))
          }
        }))
      }))
    }

    function Fz(UU, XU) {
      return {
        texture: UU,
        sourceChannel: XU
      }
    }

    function oz(UU) {
      return {
        value: UU
      }
    }

    function Dz(UU, XU, zU, cU) {
      return {
        red: UU,
        green: XU,
        blue: zU,
        alpha: cU
      }
    }
    var Ez = zU(40934),
      Yz = zU(41032),
      Nz = zU(37834),
      Iz = zU(41096),
      pz = zU(41017);
    class az {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class tz extends Ez.b {
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
        return !!this._options?.enableMultiview || this.Fa > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new az;
        super(null), void 0 === UU.deterministicLockstep && (UU.deterministicLockstep = !1), void 0 !== UU.timeStep && (this._timeStep = UU.timeStep), void 0 === UU.lockstepMaxSteps && (UU.lockstepMaxSteps = 4), this._options = UU, Nz.b.SetMatrixPrecision(!!UU.useHighPrecisionMatrix), this._caps = {
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
        }, UU.enableMultiview && (this._caps.multiview = {
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
        }, UU.renderingCanvas && (this._renderingCanvas = UU.renderingCanvas), eU.b.Log(`Babylon.js v${Ez.b.Version} - Null engine`);
        const XU = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (XU.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (XU.Blob = function() {})
      }
      createVertexBuffer(UU) {
        const XU = new Yz.c;
        return XU.references = 1, XU
      }
      createIndexBuffer(UU) {
        const XU = new Yz.c;
        return XU.references = 1, XU
      }
      clear(UU, XU, zU) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(UU, XU, zU) {
        this._cachedViewport = UU
      }
      createUniformBuffer(UU) {
        const XU = new Yz.c;
        return XU.references = 1, XU.xY = UU instanceof Array ? UU.length * Float32Array.BYTES_PER_ELEMENT : UU.byteLength, XU
      }
      createDynamicUniformBuffer(UU) {
        return this.createUniformBuffer(UU)
      }
      updateUniformBuffer(UU, XU, zU, cU) {}
      bindUniformBufferBase(UU, XU, zU) {}
      bindUniformBlock(UU, XU, zU) {}
      createShaderProgram(UU, XU, zU, cU, yU) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(UU, XU) {
        return []
      }
      getAttributes(UU, XU) {
        return []
      }
      bindSamplers(UU) {
        this._currentEffect = null
      }
      enableEffect(UU) {
        UU = null !== UU && (0, pz.c)(UU) ? UU.effect : UU, this._currentEffect = UU, UU && (UU.onBind && UU.onBind(UU), UU._onBindObservable && UU._onBindObservable.notifyObservers(UU))
      }
      setStateCullFaceType(UU, XU) {}
      setState(UU) {}
      setIntArray(UU, XU) {
        return !0
      }
      setIntArray2(UU, XU) {
        return !0
      }
      setIntArray3(UU, XU) {
        return !0
      }
      setIntArray4(UU, XU) {
        return !0
      }
      setFloatArray(UU, XU) {
        return !0
      }
      setFloatArray2(UU, XU) {
        return !0
      }
      setFloatArray3(UU, XU) {
        return !0
      }
      setFloatArray4(UU, XU) {
        return !0
      }
      setArray(UU, XU) {
        return !0
      }
      setArray2(UU, XU) {
        return !0
      }
      setArray3(UU, XU) {
        return !0
      }
      setArray4(UU, XU) {
        return !0
      }
      setMatrices(UU, XU) {
        return !0
      }
      setMatrix3x3(UU, XU) {
        return !0
      }
      setMatrix2x2(UU, XU) {
        return !0
      }
      setFloat(UU, XU) {
        return !0
      }
      setFloat2(UU, XU, zU) {
        return !0
      }
      setFloat3(UU, XU, zU, cU) {
        return !0
      }
      setBool(UU, XU) {
        return !0
      }
      setFloat4(UU, XU, zU, cU, yU) {
        return !0
      }
      setAlphaMode(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[zU] !== UU && (this.alphaState.setAlphaBlend(0 !== UU, 0), XU || this.setDepthWrite(0 === UU), this._alphaMode[zU] = UU)
      }
      bindBuffers(UU, XU, zU) {}
      wipeCaches(UU) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, UU && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(UU, XU, zU, cU) {}
      drawElementsType(UU, XU, zU, cU) {}
      drawArraysType(UU, XU, zU, cU) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(UU) {}
      createTexture(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          AU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          FU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const oU = new LX.e(this, 1),
          DU = String(UU);
        return oU.url = DU, oU.generateMipMaps = !XU, oU.samplingMode = yU, oU.invertY = zU, oU.baseWidth = this._options.textureSize, oU.baseHeight = this._options.textureSize, oU.width = this._options.textureSize, oU.height = this._options.textureSize, FU && (oU.format = FU), AU && (oU._buffer = AU), oU.isReady = !0, QU && setTimeout((() => {
          QU(oU)
        })), this._internalTexturesCache.push(oU), oU
      }
      _createHardwareRenderTargetWrapper(UU, XU, zU) {
        const cU = new Iz.c(UU, XU, zU, this);
        return this._renderTargetWrapperCache.push(cU), cU
      }
      createRenderTargetTexture(UU, XU) {
        const zU = this._createHardwareRenderTargetWrapper(!1, !1, UU),
          cU = {};
        void 0 !== XU && "object" === typeof XU ? (cU.generateMipMaps = XU.generateMipMaps, cU.generateDepthBuffer = void 0 === XU.generateDepthBuffer || XU.generateDepthBuffer, cU.generateStencilBuffer = cU.generateDepthBuffer && XU.generateStencilBuffer, cU.type = void 0 === XU.type ? 0 : XU.type, cU.samplingMode = void 0 === XU.samplingMode ? 3 : XU.samplingMode) : (cU.generateMipMaps = XU, cU.generateDepthBuffer = !0, cU.generateStencilBuffer = !1, cU.type = 0, cU.samplingMode = 3);
        const yU = new LX.e(this, 5);
        zU.setTexture(yU);
        const QU = UU.width || UU,
          AU = UU.height || UU;
        return zU._generateDepthBuffer = cU.generateDepthBuffer, zU._generateStencilBuffer = !!cU.generateStencilBuffer, yU.baseWidth = QU, yU.baseHeight = AU, yU.width = QU, yU.height = AU, yU.isReady = !0, yU.samples = 1, yU.generateMipMaps = !!cU.generateMipMaps, yU.samplingMode = cU.samplingMode, yU.type = cU.type, this._internalTexturesCache.push(yU), zU
      }
      createMultiviewRenderTargetTexture(UU, XU) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const zU = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: UU,
            height: XU
          }),
          cU = new LX.e(this, 5, !0);
        return cU.baseWidth = UU, cU.baseHeight = XU, cU.width = UU, cU.height = XU, cU.isMultiview = !0, cU.isReady = !0, cU.format = 5, cU.samples = 1, zU.setTextures(cU), zU
      }
      bindMultiviewFramebuffer(UU) {
        this.bindFramebuffer(UU, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(UU, XU) {
        const zU = this._createHardwareRenderTargetWrapper(!1, !0, UU),
          cU = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...XU
          };
        cU.generateStencilBuffer = cU.generateDepthBuffer && cU.generateStencilBuffer, (1 !== cU.type || this._caps.textureFloatLinearFiltering) && (2 !== cU.type || this._caps.textureHalfFloatLinearFiltering) || (cU.samplingMode = 1), zU._generateDepthBuffer = cU.generateDepthBuffer, zU._generateStencilBuffer = !!cU.generateStencilBuffer;
        const yU = new LX.e(this, 5);
        return yU.baseWidth = UU, yU.baseHeight = UU, yU.width = UU, yU.height = UU, yU.isReady = !0, yU.isCube = !0, yU.samples = 1, yU.generateMipMaps = !!cU.generateMipMaps, yU.samplingMode = cU.samplingMode, yU.type = cU.type, this._internalTexturesCache.push(yU), zU
      }
      updateTextureSamplingMode(UU, XU) {
        XU.samplingMode = UU
      }
      createRawTexture(UU, XU, zU, cU, yU, QU, AU) {
        let FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          DU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const EU = new LX.e(this, 3);
        return EU.baseWidth = XU, EU.baseHeight = zU, EU.width = XU, EU.height = zU, EU.format = cU, EU.generateMipMaps = yU, EU.samplingMode = AU, EU.invertY = QU, EU._compression = FU, EU.type = oU, EU._useSRGBBuffer = DU, this._doNotHandleContextLost || (EU._bufferView = UU), EU
      }
      updateRawTexture(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        UU && (UU._bufferView = XU, UU.format = zU, UU.invertY = cU, UU._compression = yU, UU.type = QU, UU._useSRGBBuffer = AU)
      }
      bindFramebuffer(UU, XU, zU, cU, yU) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = UU, this._currentFramebuffer = null, this._cachedViewport && !yU && this.setViewport(this._cachedViewport, zU, cU)
      }
      unBindFramebuffer(UU) {
        let XU = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, XU && XU(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(UU) {
        const XU = new Yz.c;
        return XU.references = 1, XU.xY = 1, XU
      }
      updateDynamicTexture(UU, XU, zU) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(UU) {}
      updateDynamicIndexBuffer(UU, XU) {}
      updateDynamicVertexBuffer(UU, XU, zU, cU) {}
      _bindTextureDirectly(UU, XU) {
        return this._boundTexturesCache[this._activeChannel] !== XU && (this._boundTexturesCache[this._activeChannel] = XU, !0)
      }
      _bindTexture(UU, XU) {
        UU < 0 || this._bindTextureDirectly(0, XU)
      }
      _deleteBuffer(UU) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(UU) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(UU, XU, zU, cU, yU) {}
      _uploadDataToTextureDirectly(UU, XU) {}
      _uploadArrayBufferViewToTexture(UU, XU) {}
      _uploadImageToTexture(UU, XU) {}
    }
    zU(41148), zU(41188), zU(41146);
    async function gz(UU) {
      const XU = UU.getInternalTexture();
      if (!XU || 1 !== XU.source) return null;
      if (XU.invertY) {
        const XU = UU.nS()?.qp();
        if (!(XU instanceof tz)) return null
      }
      const zU = XU._buffer;
      let cU, QU = UU.mimeType;
      try {
        zU ? ArrayBuffer.isView(zU) ? cU = zU.buffer.slice(zU.byteOffset, zU.byteOffset + zU.byteLength) : zU instanceof ArrayBuffer ? cU = zU : zU instanceof Blob ? (cU = await zU.arrayBuffer(), QU = zU.type || QU) : "string" === typeof zU ? (cU = await yU.Tools.LoadFileAsync(zU), QU = (0, oU.d)(zU) || QU) : "undefined" !== typeof HTMLImageElement && zU instanceof HTMLImageElement && (cU = await yU.Tools.LoadFileAsync(zU.src), QU = (0, oU.d)(zU.src) || QU) : (cU = await yU.Tools.LoadFileAsync(XU.url), QU = (0, oU.d)(XU.url) || QU)
      } catch {
        return null
      }
      if (cU && !QU && XU.url) {
        const UU = XU.url.match(/^data:([^;,]+)/);
        QU = UU ? UU[1] : (0, oU.d)(XU.url)
      }
      return cU && QU ? {
        data: cU,
        mimeType: QU
      } : null
    }
    const kz = 1e-6,
      Gz = new tU.Color3(.04, .04, .04),
      Bz = 1024,
      Zz = tU.Color3.White(),
      Rz = tU.Color3.BlackReadOnly;

    function Pz(UU) {
      switch (UU) {
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

    function Wz(UU, XU, zU) {
      if (XU < Gz.r) return 0;
      const cU = Gz.r,
        yU = UU * zU / (1 - Gz.r) + XU - 2 * Gz.r,
        QU = yU * yU - 4 * cU * (Gz.r - XU);
      return GU.Clamp((-yU + Math.sqrt(QU)) / (2 * cU), 0, 1)
    }

    function dz(UU) {
      const XU = UU.diffuseColor.toLinearSpace(UU.nS().qp().useExactSrgbConversions).scale(.5),
        zU = UU.alpha,
        cU = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new HU.m(0, 1),
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new HU.m(0, .1),
            cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new HU.m(0, .1),
            yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new HU.m(1300, .1);
          return function(UU, XU, zU, cU, yU) {
            return (1 - UU) * (1 - UU) * (1 - UU) * XU + 3 * (1 - UU) * (1 - UU) * UU * zU + 3 * (1 - UU) * UU * UU * cU + UU * UU * UU * yU
          }(Math.pow(UU / yU.x, .333333), XU.y, zU.y, cU.y, yU.y)
        }(GU.Clamp(UU.specularPower, 0, Bz));
      return {
        baseColorFactor: [XU.r, XU.g, XU.b, zU],
        metallicFactor: 0,
        roughnessFactor: cU
      }
    }

    function Lz(UU, XU) {
      XU.needAlphaBlending() ? UU.alphaMode = "BLEND" : XU.needAlphaTesting() && (UU.alphaMode = "MASK", UU.alphaCutoff = XU.alphaCutOff)
    }

    function ez(UU, XU, zU) {
      const cU = new Uint8Array(UU * XU * 4);
      for (let yU = 0; yU < cU.length; yU += 4) cU[yU] = cU[yU + 1] = cU[yU + 2] = cU[yU + 3] = 255;
      return RU.b.CreateRGBATexture(cU, UU, XU, zU)
    }

    function Cz(UU) {
      if (UU instanceof Uint8Array) {
        const XU = UU.length,
          zU = new Float32Array(UU.length);
        for (let cU = 0; cU < XU; ++cU) zU[cU] = UU[cU] / 255;
        return zU
      }
      if (UU instanceof Float32Array) return UU;
      throw new Error("Unsupported pixel format!")
    }
    class wz {
      constructor(UU) {
        this._exporter = UU, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(UU) {
        return UU ? this._textureMap.get(UU.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(UU, XU) {
        const zU = dz(UU),
          cU = {
            name: UU.name
          };
        if (null == UU.backFaceCulling || UU.backFaceCulling || (UU.twoSidedLighting || yU.Tools.Warn(UU.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), cU.doubleSided = !0), XU) {
          const XU = [],
            yU = UU.diffuseTexture;
          yU && XU.push(this.exportTextureAsync(yU).then((UU => {
            UU && (zU.baseColorTexture = UU)
          })));
          const QU = UU.bumpTexture;
          QU && XU.push(this.exportTextureAsync(QU).then((UU => {
            UU && (cU.normalTexture = UU, 1 !== QU.level && (cU.normalTexture.scale = QU.level))
          })));
          const AU = UU.emissiveTexture;
          AU && (cU.emissiveFactor = [1, 1, 1], XU.push(this.exportTextureAsync(AU).then((UU => {
            UU && (cU.emissiveTexture = UU)
          }))));
          const FU = UU.ambientTexture;
          FU && XU.push(this.exportTextureAsync(FU).then((UU => {
            if (UU) {
              const XU = {
                index: UU.index
              };
              cU.occlusionTexture = XU
            }
          }))), XU.length > 0 && (this._exporter._materialNeedsUVsSet.add(UU), await Promise.all(XU))
        }(UU.alpha < 1 || UU.opacityTexture) && (UU.alphaMode === PU.b.ALPHA_COMBINE ? cU.alphaMode = "BLEND" : yU.Tools.Warn(UU.name + ": glTF 2.0 does not support alpha mode: " + UU.alphaMode.toString())), UU.emissiveColor && !UU.emissiveColor.equalsWithEpsilon(Rz, kz) && (cU.emissiveFactor = UU.emissiveColor.cyU()), cU.pbrMetallicRoughness = zU, Lz(cU, UU), await this._finishMaterialAsync(cU, UU);
        const QU = this._exporter._materials;
        return QU.push(cU), QU.length - 1
      }
      async _finishMaterialAsync(UU, XU) {
        const zU = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", UU, XU),
          cU = [];
        for (const yU of zU) cU.push(this.exportTextureAsync(yU));
        await Promise.all(cU), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", UU, XU)
      }
      _resizeTexturesToSameDimensions(UU, XU, zU) {
        const cU = UU ? UU.getSize() : {
            width: 0,
            height: 0
          },
          yU = XU ? XU.getSize() : {
            width: 0,
            height: 0
          };
        let QU, AU;
        return cU.width < yU.width ? (QU = UU && UU instanceof ZU.b ? BU.h.CreateResizedCopy(UU, yU.width, yU.height, !0) : ez(yU.width, yU.height, zU), AU = XU) : cU.width > yU.width ? (AU = XU && XU instanceof ZU.b ? BU.h.CreateResizedCopy(XU, cU.width, cU.height, !0) : ez(cU.width, cU.height, zU), QU = UU) : (QU = UU, AU = XU), {
          texture1: QU,
          texture2: AU
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(UU, XU, zU) {
        const cU = new Array;
        if (!UU && !XU) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const yU = UU ? UU.nS() : XU ? XU.nS() : null;
        if (yU) {
          const QU = this._resizeTexturesToSameDimensions(UU, XU, yU),
            AU = QU.texture1?.getSize();
          let FU, oU;
          const DU = AU.width,
            EU = AU.height,
            YU = await QU.texture1.readPixels(),
            NU = await QU.texture2.readPixels();
          if (!YU) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (FU = Cz(YU), !NU) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          oU = Cz(NU);
          const IU = oU.byteLength,
            pU = new Uint8Array(IU),
            aU = new Uint8Array(IU),
            gU = 4,
            kU = new tU.Color3(0, 0, 0);
          let GU = 0,
            BU = 0;
          for (let UU = 0; UU < EU; ++UU)
            for (let XU = 0; XU < DU; ++XU) {
              const cU = (DU * UU + XU) * gU,
                AU = {
                  diffuseColor: new tU.Color3(FU[cU], FU[cU + 1], FU[cU + 2]).toLinearSpace(yU.qp().useExactSrgbConversions).multiply(zU.diffuseColor),
                  specularColor: new tU.Color3(oU[cU], oU[cU + 1], oU[cU + 2]).toLinearSpace(yU.qp().useExactSrgbConversions).multiply(zU.specularColor),
                  glossiness: oU[cU + 3] * zU.glossiness
                },
                EU = this._convertSpecularGlossinessToMetallicRoughness(AU);
              kU.r = Math.max(kU.r, EU.baseColor.r), kU.g = Math.max(kU.g, EU.baseColor.g), kU.b = Math.max(kU.b, EU.baseColor.b), GU = Math.max(GU, EU.metallic), BU = Math.max(BU, EU.roughness), aU[cU] = 255 * EU.baseColor.r, aU[cU + 1] = 255 * EU.baseColor.g, aU[cU + 2] = 255 * EU.baseColor.b, aU[cU + 3] = QU.texture1.hasAlpha ? 255 * FU[cU + 3] : 255, pU[cU] = 0, pU[cU + 1] = 255 * EU.roughness, pU[cU + 2] = 255 * EU.metallic, pU[cU + 3] = 255
            }
          const ZU = {
            baseColor: kU,
            metallic: GU,
            roughness: BU
          };
          let RU = !1,
            PU = !1;
          for (let UU = 0; UU < EU; ++UU)
            for (let XU = 0; XU < DU; ++XU) {
              const zU = (DU * UU + XU) * gU;
              aU[zU] /= ZU.baseColor.r > kz ? ZU.baseColor.r : 1, aU[zU + 1] /= ZU.baseColor.g > kz ? ZU.baseColor.g : 1, aU[zU + 2] /= ZU.baseColor.b > kz ? ZU.baseColor.b : 1;
              const cU = tU.Color3.FromInts(aU[zU], aU[zU + 1], aU[zU + 2]).toGammaSpace(yU.qp().useExactSrgbConversions);
              aU[zU] = 255 * cU.r, aU[zU + 1] = 255 * cU.g, aU[zU + 2] = 255 * cU.b, cU.equalsWithEpsilon(Zz, kz) || (PU = !0), pU[zU + 1] /= ZU.roughness > kz ? ZU.roughness : 1, pU[zU + 2] /= ZU.metallic > kz ? ZU.metallic : 1;
              tU.Color3.FromInts(255, pU[zU + 1], pU[zU + 2]).equalsWithEpsilon(Zz, kz) || (RU = !0)
            }
          return RU && cU.push((0, WU.EncodeImageAsync)(pU, DU, EU).then((UU => {
            ZU.metallicRoughnessTextureData = UU
          }))), PU && cU.push((0, WU.EncodeImageAsync)(aU, DU, EU).then((UU => {
            ZU.baseColorTextureData = UU
          }))), await Promise.all(cU).then((() => ZU))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(UU) {
        const XU = this._getPerceivedBrightness(UU.diffuseColor),
          zU = this._getPerceivedBrightness(UU.specularColor),
          cU = 1 - this._getMaxComponent(UU.specularColor),
          yU = Wz(XU, zU, cU),
          QU = UU.diffuseColor.scale(cU / (1 - Gz.r) / Math.max(1 - yU, kz)),
          AU = UU.specularColor.subtract(Gz.scale(1 - yU)).scale(1 / Math.max(yU, kz));
        let FU = tU.Color3.Lerp(QU, AU, yU * yU);
        FU = FU.clampToRef(0, 1, FU);
        return {
          baseColor: FU,
          metallic: yU,
          roughness: 1 - UU.glossiness
        }
      }
      _getPerceivedBrightness(UU) {
        return Math.sqrt(.299 * UU.r * UU.r + .587 * UU.g * UU.g + .114 * UU.b * UU.b)
      }
      _getMaxComponent(UU) {
        return Math.max(UU.r, Math.max(UU.g, UU.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
        const DU = [],
          EU = {
            baseColor: UU,
            metallic: XU,
            roughness: zU
          };
        if (oU)
          if (AU instanceof TX) {
            if (AU.geometryOpacityTexture) {
              const UU = cU && cU.getInternalTexture() ? cU.getInternalTexture().uniqueId : 0,
                XU = AU.geometryOpacityTexture && AU.geometryOpacityTexture.getInternalTexture() ? AU.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                zU = Number(`${UU}${XU}`),
                yU = this._textureMap.get(zU);
              yU ? FU.baseColorTexture = yU : DU.push(Az("baseColorOpacityTexture", Dz(cU ? Fz(cU, 0) : oz(1), cU ? Fz(cU, 1) : oz(1), cU ? Fz(cU, 2) : oz(1), Fz(AU.geometryOpacityTexture, 0)), AU.nS()).then((async UU => {
                const XU = await this.exportTextureAsync(UU, zU);
                XU && (FU.baseColorTexture = XU)
              })))
            } else cU && DU.push(this.exportTextureAsync(cU).then((UU => {
              UU && (FU.baseColorTexture = UU)
            })));
            if (AU._useMetallicFromMetallicTextureBlue && yU) DU.push(this.exportTextureAsync(yU).then((UU => {
              UU && (FU.metallicRoughnessTexture = UU)
            })));
            else if (QU || yU) {
              const UU = yU && yU.getInternalTexture() ? yU.getInternalTexture().uniqueId : 0,
                XU = QU && QU.getInternalTexture() ? QU.getInternalTexture().uniqueId : 0,
                zU = Number(`${UU}${XU}`),
                cU = this._textureMap.get(zU);
              cU ? FU.metallicRoughnessTexture = cU : DU.push(Az("MetalRoughTexture", Dz(AU.ambientOcclusionTexture ? Fz(AU.ambientOcclusionTexture, 0) : oz(1), QU ? Fz(QU, 0) : oz(1), yU ? Fz(yU, 0) : oz(1)), AU.nS()).then((async UU => {
                const XU = await this.exportTextureAsync(UU, zU);
                XU && (FU.metallicRoughnessTexture = XU)
              })))
            }
          } else cU && DU.push(this.exportTextureAsync(cU).then((UU => {
            UU && (FU.baseColorTexture = UU)
          }))), yU && DU.push(this.exportTextureAsync(yU).then((UU => {
            UU && (FU.metallicRoughnessTexture = UU)
          })));
        return DU.length > 0 && (this._exporter._materialNeedsUVsSet.add(AU), await Promise.all(DU)), EU
      }
      _getTextureSampler(UU) {
        const XU = {};
        if (!UU || !(UU instanceof ZU.b)) return XU;
        const zU = this._getGLTFTextureWrapMode(UU.wrapU);
        10497 !== zU && (XU.wrapS = zU);
        const cU = this._getGLTFTextureWrapMode(UU.wrapV);
        switch (10497 !== cU && (XU.wrapT = cU), UU.samplingMode) {
          case ZU.b.LINEAR_LINEAR:
            XU.magFilter = 9729, XU.minFilter = 9729;
            break;
          case ZU.b.LINEAR_NEAREST:
            XU.magFilter = 9729, XU.minFilter = 9728;
            break;
          case ZU.b.NEAREST_LINEAR:
            XU.magFilter = 9728, XU.minFilter = 9729;
            break;
          case ZU.b.NEAREST_LINEAR_MIPLINEAR:
            XU.magFilter = 9728, XU.minFilter = 9987;
            break;
          case ZU.b.NEAREST_NEAREST:
            XU.magFilter = 9728, XU.minFilter = 9728;
            break;
          case ZU.b.NEAREST_LINEAR_MIPNEAREST:
            XU.magFilter = 9728, XU.minFilter = 9985;
            break;
          case ZU.b.LINEAR_NEAREST_MIPNEAREST:
            XU.magFilter = 9729, XU.minFilter = 9984;
            break;
          case ZU.b.LINEAR_NEAREST_MIPLINEAR:
            XU.magFilter = 9729, XU.minFilter = 9986;
            break;
          case ZU.b.NEAREST_NEAREST_MIPLINEAR:
            XU.magFilter = 9728, XU.minFilter = 9986;
            break;
          case ZU.b.LINEAR_LINEAR_MIPLINEAR:
            XU.magFilter = 9729, XU.minFilter = 9987;
            break;
          case ZU.b.LINEAR_LINEAR_MIPNEAREST:
            XU.magFilter = 9729, XU.minFilter = 9985;
            break;
          case ZU.b.NEAREST_NEAREST_MIPNEAREST:
            XU.magFilter = 9728, XU.minFilter = 9984
        }
        return XU
      }
      _getGLTFTextureWrapMode(UU) {
        switch (UU) {
          case ZU.b.WRAP_ADDRESSMODE:
            return 10497;
          case ZU.b.CLAMP_ADDRESSMODE:
            return 33071;
          case ZU.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return yU.Tools.Error(`Unsupported Texture Wrap Mode ${UU}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(UU, XU, zU) {
        const cU = {
            diffuseColor: UU._albedoColor,
            specularColor: UU._reflectivityColor,
            glossiness: UU._microSurface
          },
          yU = UU._albedoTexture,
          QU = UU._reflectivityTexture,
          AU = UU._useMicroSurfaceFromReflectivityMapAlpha;
        if (QU && !AU) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((yU || QU) && zU) {
          this._exporter._materialNeedsUVsSet.add(UU);
          const zU = this._exportTextureSampler(yU || QU),
            AU = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(yU, QU, cU),
            FU = this._exporter._textures;
          if (AU.baseColorTextureData) {
            const UU = await this._exportImageAsync(`baseColor${FU.length}`, AU.baseColorTextureData);
            XU.baseColorTexture = this._exportTextureInfo(UU, zU, yU?.coordinatesIndex)
          }
          if (AU.metallicRoughnessTextureData) {
            const UU = await this._exportImageAsync(`metallicRoughness${FU.length}`, AU.metallicRoughnessTextureData);
            XU.metallicRoughnessTexture = this._exportTextureInfo(UU, zU, QU?.coordinatesIndex)
          }
          return AU
        }
        return this._convertSpecularGlossinessToMetallicRoughness(cU)
      }
      async exportPBRMaterialAsync(UU, XU) {
        const zU = {},
          cU = {
            name: UU.name
          },
          yU = UU.isMetallicWorkflow();
        if (yU) {
          const XU = UU._albedoColor,
            cU = UU.alpha;
          XU && (zU.baseColorFactor = [XU.r, XU.g, XU.b, cU])
        }
        const QU = yU ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(UU._albedoColor, UU._metallic, UU._roughness, UU._albedoTexture, UU._metallicTexture, UU._metallicTexture, UU, zU, XU) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(UU, zU, XU);
        await this._setMetallicRoughnessPbrMaterialAsync(QU, UU, cU, zU, XU), await this._finishMaterialAsync(cU, UU);
        const AU = this._exporter._materials;
        return AU.push(cU), AU.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(UU, XU, zU, cU, QU) {
        if (Lz(zU, XU), UU.baseColor.equalsWithEpsilon(Zz, kz) && GU.WithinEpsilon(XU.alpha, 1, kz) || (cU.baseColorFactor = [UU.baseColor.r, UU.baseColor.g, UU.baseColor.b, XU.alpha]), null != UU.metallic && 1 !== UU.metallic && (cU.metallicFactor = UU.metallic), null != UU.roughness && 1 !== UU.roughness && (cU.roughnessFactor = UU.roughness), null == XU.backFaceCulling || XU.backFaceCulling || (XU._twoSidedLighting || yU.Tools.Warn(XU.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), zU.doubleSided = !0), QU) {
          const UU = [],
            yU = XU instanceof RX ? XU._bumpTexture : XU.geometryNormalTexture;
          yU && UU.push(this.exportTextureAsync(yU).then((UU => {
            UU && (zU.normalTexture = UU, 1 !== yU.level && (zU.normalTexture.scale = yU.level))
          })));
          const QU = XU instanceof RX ? XU._ambientTexture : XU.ambientOcclusionTexture;
          QU && UU.push(new Promise((async UU => {
            if (XU instanceof TX && cU.metallicRoughnessTexture) {
              const XU = this._exportTextureSampler(QU),
                zU = this._exporter._textures[cU.metallicRoughnessTexture.index].source,
                yU = this._exportTextureInfo(zU, XU, QU.coordinatesIndex);
              return this._textureMap.set(QU.uniqueId, yU), this._exporter._extensionsPostExportTextures("exporter", yU, QU), UU(yU)
            }
            return UU(await this.exportTextureAsync(QU))
          })).then((async UU => {
            if (UU) {
              const cU = {
                index: UU.index,
                texCoord: UU.texCoord,
                extensions: UU.extensions
              };
              zU.occlusionTexture = cU, cU.strength = XU instanceof RX ? XU._ambientTextureStrength : XU.ambientOcclusionTexture.level
            }
          })));
          const AU = XU instanceof RX ? XU._emissiveTexture : XU.emissionColorTexture;
          AU && UU.push(this.exportTextureAsync(AU).then((UU => {
            UU && (zU.emissiveTexture = UU)
          }))), UU.length > 0 && (this._exporter._materialNeedsUVsSet.add(XU), await Promise.all(UU))
        }
        const AU = XU instanceof RX ? XU._emissiveColor : XU.emissionColor;
        AU.equalsWithEpsilon(Rz, kz) || (zU.emissiveFactor = AU.cyU()), zU.pbrMetallicRoughness = cU
      }
      async exportOpenPBRMaterialAsync(UU, XU) {
        const zU = {},
          cU = {
            name: UU.name
          },
          yU = UU.baseColor,
          QU = UU.geometryOpacity;
        yU && (zU.baseColorFactor = [yU.r, yU.g, yU.b, QU]);
        const AU = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(UU.baseColor, UU.baseMetalness, UU.specularRoughness, UU.baseColorTexture, UU.baseMetalnessTexture, UU.specularRoughnessTexture, UU, zU, XU);
        await this._setMetallicRoughnessPbrMaterialAsync(AU, UU, cU, zU, XU), await this._finishMaterialAsync(cU, UU);
        const FU = this._exporter._materials;
        return FU.push(cU), FU.length - 1
      }
      async exportTextureAsync(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = this._textureMap.get(XU ?? UU.uniqueId);
        if (zU) return zU;
        const cU = this._exportTextureSampler(UU),
          yU = await this._exportTextureImageAsync(UU);
        return zU = this._exportTextureInfo(yU, cU, UU.coordinatesIndex), this._textureMap.set(XU ?? UU.uniqueId, zU), this._exporter._extensionsPostExportTextures("exporter", zU, UU), zU
      }
      async _exportTextureImageAsync(UU) {
        const XU = UU.mimeType ?? "none",
          zU = this._internalTextureToImage,
          cU = UU.getInternalTexture().uniqueId;
        zU[cU] = zU[cU] || {};
        let QU = zU[cU][XU];
        return void 0 === QU && (QU = (async () => {
          const zU = await gz(UU);
          if (zU && Pz(zU.mimeType) && ("none" === XU || zU.mimeType === XU)) return await this._exportImageAsync(UU.name, new Blob([zU.data], {
            type: zU.mimeType
          }));
          let cU = "image/png";
          "none" !== XU && (Pz(XU) ? cU = XU : (cU = "image/png", yU.Tools.Warn(`Unsupported media type: ${XU}. Exporting texture as PNG.`)));
          const QU = UU.getSize(),
            AU = await (0, BU.f)(UU),
            FU = await (0, WU.EncodeImageAsync)(AU, QU.width, QU.height, cU);
          return await this._exportImageAsync(UU.name, FU)
        })(), zU[cU][XU] = QU), await QU
      }
      async _exportImageAsync(UU, XU) {
        const zU = this._exporter._images;
        let cU;
        if (this._exporter._shouldUseGlb) {
          cU = {
            name: UU,
            mimeType: XU.type,
            bufferView: void 0
          };
          const zU = await XU.arrayBuffer(),
            yU = this._exporter._bufferManager.createBufferView(new Uint8Array(zU));
          this._exporter._bufferManager.setBufferView(cU, yU)
        } else {
          const QU = UU.replace(/\.\/|\/|\.\\|\\/g, "_"),
            AU = function(UU) {
              switch (UU) {
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
            }(XU.type);
          let FU = QU + AU;
          zU.some((UU => UU.uri === FU)) && (FU = `${QU}_${yU.Tools.RandomId()}${AU}`), cU = {
            name: UU,
            uri: FU
          }, this._exporter._imageData[FU] = XU
        }
        return zU.push(cU), zU.length - 1
      }
      _exportTextureInfo(UU, XU, zU) {
        const cU = this._exporter._textures;
        let yU = cU.findIndex((zU => zU.sampler == XU && zU.source === UU)); - 1 === yU && (yU = cU.length, cU.push({
          source: UU,
          sampler: XU
        }));
        const QU = {
          index: yU
        };
        return zU && (QU.texCoord = zU), QU
      }
      _exportTextureSampler(UU) {
        const XU = this._getTextureSampler(UU),
          zU = this._exporter._samplers,
          cU = zU.findIndex((UU => UU.minFilter === XU.minFilter && UU.magFilter === XU.magFilter && UU.wrapS === XU.wrapS && UU.wrapT === XU.wrapT));
        return -1 !== cU ? cU : (zU.push(XU), zU.length - 1)
      }
    }
    var qz = zU(41177),
      Oz = zU(41301);
    (0, Oz.e)();
    var Sz = zU(37825);
    const rz = cU.Matrix.Compose(new cU.Sp(-1, 1, 1), cU.Quaternion.Identity(), cU.Sp.Zero());

    function uz(UU, XU) {
      if (!(UU instanceof YU.c)) return !1;
      if (XU) {
        if (!UU.getWorldMatrix().equalsWithEpsilon(cU.Matrix.IdentityReadOnly, Sz.c)) return !1
      } else {
        if (!UU.getWorldMatrix().multiplyToRef(rz, cU.TmpVectors.Matrix[0]).equalsWithEpsilon(cU.Matrix.IdentityReadOnly, Sz.c)) return !1
      }
      return !(UU instanceof NU.b && UU.geometry)
    }
    const fz = cU.Sp.ZeroReadOnly,
      iz = cU.Quaternion.Identity(),
      Hz = cU.Sp.OneReadOnly,
      Mz = new cU.Sp(-1, 1, 1);

    function vz(UU, XU) {
      const {
        byteOffset: zU,
        byteStride: cU,
        type: yU,
        normalized: QU
      } = UU, AU = UU.getSize(), FU = XU.reduce(((UU, XU) => XU.getTotalVertices() > UU ? XU.getTotalVertices() : UU), -Number.MAX_VALUE);
      return {
        byteOffset: zU,
        byteStride: cU,
        componentCount: AU,
        type: yU,
        count: FU * AU,
        normalized: QU,
        totalVertices: FU,
        kind: UU.getKind()
      }
    }

    function Vz(UU) {
      switch (UU) {
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

    function sz(UU) {
      switch (UU) {
        case EU.e.PositionKind:
        case EU.e.NormalKind:
        case EU.e.TangentKind:
        case EU.e.ColorKind:
        case EU.e.MatricesIndicesKind:
        case EU.e.MatricesIndicesExtraKind:
        case EU.e.MatricesWeightsKind:
        case EU.e.MatricesWeightsExtraKind:
        case EU.e.UVKind:
        case EU.e.UV2Kind:
        case EU.e.UV3Kind:
        case EU.e.UV4Kind:
        case EU.e.UV5Kind:
        case EU.e.UV6Kind:
          return !0
      }
      return !1
    }

    function nz(UU) {
      const XU = Math.sqrt(UU.x * UU.x + UU.y * UU.y + UU.z * UU.z);
      XU > 0 && (UU.x /= XU, UU.y /= XU, UU.z /= XU)
    }

    function mz(UU) {
      return UU.x *= -1, UU
    }

    function lz(UU) {
      if (UU.x * UU.x + UU.y * UU.y > .5) {
        const XU = Math.abs(UU.x),
          zU = Math.abs(UU.y);
        if (XU > zU) {
          const zU = Math.sign(UU.x);
          UU.x = XU, UU.y *= -zU, UU.z *= -zU, UU.w *= zU
        } else {
          const XU = Math.sign(UU.y);
          UU.x *= -XU, UU.y = zU, UU.z *= XU, UU.w *= -XU
        }
      } else {
        const XU = Math.abs(UU.z),
          zU = Math.abs(UU.w);
        if (XU > zU) {
          const zU = Math.sign(UU.z);
          UU.x *= -zU, UU.y *= zU, UU.z = XU, UU.w *= -zU
        } else {
          const XU = Math.sign(UU.w);
          UU.x *= XU, UU.y *= -XU, UU.z *= -XU, UU.w = zU
        }
      }
      return UU
    }

    function xz(UU) {
      UU.sUU(-UU.z, UU.w, UU.x, -UU.y)
    }

    function Jz(UU, XU) {
      const zU = cU.Sp.FromArrayToRef(XU.translation || [0, 0, 0], 0, cU.TmpVectors.Sp[0]),
        yU = cU.Quaternion.FromArrayToRef(XU.rotation || [0, 0, 0, 1], 0, cU.TmpVectors.Quaternion[0]),
        QU = cU.Matrix.ComposeToRef(Hz, yU, zU, cU.TmpVectors.Matrix[0]),
        AU = cU.Sp.FromArrayToRef(UU.translation || [0, 0, 0], 0, cU.TmpVectors.Sp[2]),
        FU = cU.Quaternion.FromArrayToRef(UU.rotation || [0, 0, 0, 1], 0, cU.TmpVectors.Quaternion[1]),
        oU = cU.Matrix.ComposeToRef(Hz, FU, AU, cU.TmpVectors.Matrix[1]);
      QU.multiplyToRef(oU, oU), oU.decompose(void 0, yU, zU), zU.equalsWithEpsilon(fz, Sz.c) ? delete XU.translation : XU.translation = zU.cyU(), yU.equalsWithEpsilon(iz, Sz.c) ? delete XU.rotation : XU.rotation = yU.cyU(), XU.scale && delete XU.scale
    }

    function jz(UU, XU) {
      if (!(XU instanceof YU.c)) return !1;
      if (!(1 === XU.getChildren().length && 0 === UU.getChildren().length && UU.parent === XU)) return !1;
      const zU = UU.nS(),
        cU = UU instanceof Oz.i && !zU.useRightHandedSystem ? Mz : Hz;
      return !!XU.RY.equalsWithEpsilon(cU, Sz.c) || (eU.b.Warn(`Cannot collapse node ${UU.name} into parent node ${XU.name} with modified scaling.`), !1)
    }

    function Kz(UU) {
      if (UU instanceof Array) {
        const XU = new Float32Array(UU);
        return new Uint8Array(XU.buffer, XU.byteOffset, XU.byteLength)
      }
      return ArrayBuffer.isView(UU) ? new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength) : new Uint8Array(UU)
    }

    function bz(UU, XU) {
      for (const [zU, cU] of Object.entries(UU)) {
        const yU = XU[zU];
        (Array.isArray(cU) && Array.isArray(yU) && Tz(cU, yU) || cU === yU) && delete UU[zU]
      }
      return UU
    }

    function Tz(UU, XU) {
      return UU.length === XU.length && UU.every(((UU, zU) => UU === XU[zU]))
    }
    const hz = new Map([
      [Int8Array, (UU, XU, zU) => UU.setInt8(XU, zU)],
      [Uint8Array, (UU, XU, zU) => UU.setUint8(XU, zU)],
      [Uint8ClampedArray, (UU, XU, zU) => UU.setUint8(XU, zU)],
      [Int16Array, (UU, XU, zU) => UU.setInt16(XU, zU, !0)],
      [Uint16Array, (UU, XU, zU) => UU.setUint16(XU, zU, !0)],
      [Int32Array, (UU, XU, zU) => UU.setInt32(XU, zU, !0)],
      [Uint32Array, (UU, XU, zU) => UU.setUint32(XU, zU, !0)],
      [Float32Array, (UU, XU, zU) => UU.setFloat32(XU, zU, !0)],
      [Float64Array, (UU, XU, zU) => UU.setFloat64(XU, zU, !0)]
    ]);
    class Uc {
      writeTypedArray(UU) {
        this._checkGrowBuffer(UU.byteLength);
        const XU = hz.get(UU.constructor);
        for (let zU = 0; zU < UU.length; zU++) XU(this._dataView, this._byteOffset, UU[zU]), this._byteOffset += UU.BYTES_PER_ELEMENT
      }
      constructor(UU) {
        this._data = new Uint8Array(UU), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(UU) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, UU), this._byteOffset++
      }
      writeInt8(UU) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, UU), this._byteOffset++
      }
      writeInt16(UU) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, UU, !0), this._byteOffset += 2
      }
      writeUInt16(UU) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, UU, !0), this._byteOffset += 2
      }
      writeInt32(UU) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, UU, !0), this._byteOffset += 4
      }
      writeUInt32(UU) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, UU, !0), this._byteOffset += 4
      }
      writeFloat32(UU) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, UU, !0), this._byteOffset += 4
      }
      writeFloat64(UU) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, UU, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(UU) {
        const XU = this.byteOffset + UU;
        if (XU > this._data.byteLength) {
          const UU = new Uint8Array(2 * XU);
          UU.set(this._data), this._data = UU, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Xc(UU) {
      return UU % 4 === 0 ? 4 : UU % 2 === 0 ? 2 : 1
    }
    class zc {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(UU) {
        let XU = 0;
        this._bufferViewToData.forEach((UU => {
          XU += UU.byteLength
        }));
        const zU = new Uc(XU),
          cU = Array.from(this._bufferViewToData.keys()).sort(((UU, XU) => Xc(XU.byteLength) - Xc(UU.byteLength)));
        for (const yU of cU) {
          yU.byteOffset = zU.byteOffset, UU.push(yU);
          const XU = UU.length - 1,
            cU = this.getPropertiesWithBufferView(yU);
          for (const UU of cU) UU.bufferView = XU;
          zU.writeTypedArray(this._bufferViewToData.get(yU)), this._bufferViewToData.delete(yU)
        }
        return zU.getOutputData()
      }
      createBufferView(UU, XU) {
        const zU = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: UU.byteLength,
          byteStride: XU
        };
        return this._bufferViewToData.set(zU, UU), zU
      }
      createAccessor(UU, XU, zU, cU, yU, QU, AU) {
        this._verifyBufferView(UU);
        const FU = {
          bufferView: void 0,
          componentType: zU,
          count: cU,
          type: XU,
          min: QU?.min,
          max: QU?.max,
          normalized: AU,
          byteOffset: yU
        };
        return this.setBufferView(FU, UU), this._accessorToBufferView.set(FU, UU), FU
      }
      setBufferView(UU, XU) {
        this._verifyBufferView(XU);
        this.getPropertiesWithBufferView(XU).push(UU)
      }
      removeBufferView(UU) {
        const XU = this.getPropertiesWithBufferView(UU);
        for (const zU of XU) void 0 !== zU.bufferView && delete zU.bufferView;
        this._bufferViewToData.delete(UU), this._bufferViewToProperties.delete(UU), this._accessorToBufferView.forEach(((XU, zU) => {
          XU === UU && (void 0 !== zU.byteOffset && delete zU.byteOffset, this._accessorToBufferView.delete(zU))
        }))
      }
      getBufferView(UU) {
        const XU = this._accessorToBufferView.get(UU);
        return this._verifyBufferView(XU), XU
      }
      getPropertiesWithBufferView(UU) {
        return this._verifyBufferView(UU), this._bufferViewToProperties.set(UU, this._bufferViewToProperties.get(UU) ?? []), this._bufferViewToProperties.get(UU)
      }
      getData(UU) {
        return this._verifyBufferView(UU), this._bufferViewToData.get(UU)
      }
      _verifyBufferView(UU) {
        if (void 0 === UU || !this._bufferViewToData.has(UU)) throw new Error(`BufferView ${UU} not found in BufferManager.`)
      }
    }
    var cc = zU(41309);
    (0, cc.e)();
    var yc = zU(41523);
    (0, yc.c)();
    var Qc = zU(41348),
      Ac = zU(42195);
    (0, Ac.f)();
    let Fc = (() => {
      var UU;
      let XU, zU, cU = [],
        yU = [],
        QU = [],
        AU = [];
      return UU = class {
        get influence() {
          return this._influence
        }
        set influence(UU) {
          if (this._influence === UU) return;
          const XU = this._influence;
          this._influence = UU, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === XU || 0 === UU)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(UU) {
          this._animationPropertiesOverride = UU
        }
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            FU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = UU, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Uz.e, this._onDataLayoutChanged = new Uz.e, this.id = (0, dU.n)(this, cU, void 0), this.morphTargetManager = ((0, dU.n)(this, yU), (0, dU.n)(this, QU, null)), this._animationPropertiesOverride = ((0, dU.n)(this, AU), null), this.id = UU, this.morphTargetManager = FU, this._scene = zU || aU.b.LastCreatedScene, this.influence = XU, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        OFU(UU) {
          const XU = this.hasPositions;
          this._positions = UU, XU !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(UU) {
          const XU = this.hasNormals;
          this._normals = UU, XU !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(UU) {
          const XU = this.hasTangents;
          this._tangents = UU, XU !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(UU) {
          const XU = this.hasUVs;
          this._uvs = UU, XU !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(UU) {
          const XU = this.hasUV2s;
          this._uv2s = UU, XU !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(UU) {
          const XU = this.hasColors;
          this._colors = UU, XU !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const XU = PX.b.Clone((() => new UU(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return XU._positions = this._positions, XU._normals = this._normals, XU._tangents = this._tangents, XU._uvs = this._uvs, XU._uv2s = this._uv2s, XU._colors = this._colors, XU
        }
        serialize() {
          const UU = {};
          return UU.name = this.name, UU.influence = this.influence, null != this.id && (UU.id = this.id), UU.uniqueId = this.uniqueId, UU.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (UU.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (UU.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (UU.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (UU.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (UU.colors = Array.prototype.slice.call(this.getColors())), PX.b.AppendSerializedAnimations(this, UU), UU
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(XU, zU) {
          let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const yU = new UU(XU.name, XU.influence, zU, cU);
          if (yU.OFU(XU.positions), null != XU.id && (yU.id = XU.id), XU.normals && yU.setNormals(XU.normals), XU.tangents && yU.setTangents(XU.tangents), XU.uvs && yU.setUVs(XU.uvs), XU.uv2s && yU.setUV2s(XU.uv2s), XU.colors && yU.setColors(XU.colors), XU.animations) {
            for (let UU = 0; UU < XU.animations.length; UU++) {
              const zU = XU.animations[UU],
                cU = (0, VX.e)("BABYLON.Animation");
              cU && yU.animations.push(cU.Parse(zU))
            }
            XU.autoAnimate && zU && zU.beginAnimation(yU, XU.autoAnimateFrom, XU.autoAnimateTo, XU.autoAnimateLoop, XU.autoAnimateSpeed || 1)
          }
          return yU
        }
        static FromMesh(XU, zU, cU) {
          zU || (zU = XU.name);
          const yU = new UU(zU, cU, XU.nS(), XU.morphTargetManager);
          return yU.OFU(XU.getVerticesData(MU.h.PositionKind)), XU.isVerticesDataPresent(MU.h.NormalKind) && yU.setNormals(XU.getVerticesData(MU.h.NormalKind)), XU.isVerticesDataPresent(MU.h.TangentKind) && yU.setTangents(XU.getVerticesData(MU.h.TangentKind)), XU.isVerticesDataPresent(MU.h.UVKind) && yU.setUVs(XU.getVerticesData(MU.h.UVKind)), XU.isVerticesDataPresent(MU.h.UV2Kind) && yU.setUV2s(XU.getVerticesData(MU.h.UV2Kind)), XU.isVerticesDataPresent(MU.h.ColorKind) && yU.setColors(XU.getVerticesData(MU.h.ColorKind)), yU
        }
      }, (() => {
        const FU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, LU.I)()], zU = [(0, LU.I)()], (0, dU.j)(null, null, XU, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: UU => "id" in UU,
            get: UU => UU.id,
            set: (UU, XU) => {
              UU.id = XU
            }
          },
          metadata: FU
        }, cU, yU), (0, dU.j)(null, null, zU, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: UU => "morphTargetManager" in UU,
            get: UU => UU.morphTargetManager,
            set: (UU, XU) => {
              UU.morphTargetManager = XU
            }
          },
          metadata: FU
        }, QU, AU), FU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FU
        })
      })(), UU
    })();
    var oc, Dc = zU(42269),
      Ec = zU(41346);
    ! function(UU) {
      UU[UU.INTANGENT = 0] = "INTANGENT", UU[UU.OUTTANGENT = 1] = "OUTTANGENT"
    }(oc || (oc = {}));
    class Yc {
      static _IsTransformable(UU) {
        return UU && (UU instanceof YU.c || UU instanceof cc.d || UU instanceof Ec.b)
      }
      static _CreateNodeAnimation(UU, XU, zU, cU, QU) {
        if (this._IsTransformable(UU)) {
          const AU = [],
            FU = [],
            oU = XU.getKeys(),
            DU = Yc._CalculateMinMaxKeyFrames(oU),
            EU = Yc._DeduceInterpolation(oU, zU, cU),
            YU = EU.interpolationType,
            NU = EU.shouldBakeAnimation;
          if (NU ? Yc._CreateBakedAnimation(UU, XU, zU, DU.min, DU.max, XU.framePerSecond, QU, AU, FU, DU, cU) : "LINEAR" === YU || "STEP" === YU ? Yc._CreateLinearOrStepAnimation(UU, XU, zU, AU, FU, cU) : "CUBICSPLINE" === YU ? Yc._CreateCubicSplineAnimation(UU, XU, zU, AU, FU, cU) : Yc._CreateBakedAnimation(UU, XU, zU, DU.min, DU.max, XU.framePerSecond, QU, AU, FU, DU, cU), AU.length && FU.length) {
            return {
              inputs: AU,
              outputs: FU,
              samplerInterpolation: YU,
              inputsMin: NU ? DU.min : yU.Tools.FloatRound(DU.min / XU.framePerSecond),
              inputsMax: NU ? DU.max : yU.Tools.FloatRound(DU.max / XU.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(UU) {
        let XU = null,
          zU = "VEC3",
          cU = !1;
        const QU = UU.targetProperty.split(".");
        switch (QU[0]) {
          case "RY":
            XU = "scale";
            break;
          case "position":
            XU = "translation";
            break;
          case "rotation":
            zU = "VEC4", XU = "rotation";
            break;
          case "rotationQuaternion":
            zU = "VEC4", cU = !0, XU = "rotation";
            break;
          case "influence":
            zU = "SCALAR", XU = "weights";
            break;
          default:
            yU.Tools.Error(`Unsupported animatable property ${QU[0]}`)
        }
        return XU ? {
          animationChannelTargetPath: XU,
          dataAccessorType: zU,
          useQuaternion: cU
        } : (yU.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        let YU;
        if (Yc._IsTransformable(UU) && UU.animations)
          for (const NU of UU.animations) {
            if (EU && !EU(NU)) continue;
            const yU = Yc._DeduceAnimationInfo(NU);
            yU && (YU = {
              name: NU.name,
              samplers: [],
              channels: []
            }, Yc._AddAnimation(`${NU.name}`, NU.hasRunningRuntimeAnimations ? XU : YU, UU, NU, yU.dataAccessorType, yU.animationChannelTargetPath, cU, QU, AU, FU, yU.useQuaternion, oU, DU), YU.samplers.length && YU.channels.length && zU.push(YU))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        let YU;
        if (UU instanceof Dc.d) {
          const yU = UU.morphTargetManager;
          if (yU)
            for (let NU = 0; NU < yU.numTargets; ++NU) {
              const IU = yU.getTarget(NU);
              for (const pU of IU.animations) {
                if (EU && !EU(pU)) continue;
                const IU = new Ac.b(`${pU.name}`, "influence", pU.framePerSecond, pU.dataType, pU.aX, pU.enableBlending),
                  aU = [],
                  tU = pU.getKeys();
                for (let UU = 0; UU < tU.length; ++UU) {
                  const XU = tU[UU];
                  for (let UU = 0; UU < yU.numTargets; ++UU) UU == NU ? aU.push(XU) : aU.push({
                    frame: XU.frame,
                    value: 0
                  })
                }
                IU.setKeys(aU, !0);
                const gU = Yc._DeduceAnimationInfo(IU);
                gU && (YU = {
                  name: IU.name,
                  samplers: [],
                  channels: []
                }, Yc._AddAnimation(pU.name, pU.hasRunningRuntimeAnimations ? XU : YU, UU, IU, gU.dataAccessorType, gU.animationChannelTargetPath, cU, QU, AU, FU, gU.useQuaternion, oU, DU, yU.numTargets), YU.samplers.length && YU.channels.length && zU.push(YU))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
        let EU;
        if (UU.animationGroups) {
          const YU = UU.animationGroups;
          for (const NU of YU) {
            const YU = new Map,
              IU = new Map,
              pU = new Set,
              aU = NU.to - NU.from;
            EU = {
              name: NU.name,
              channels: [],
              samplers: []
            };
            for (let XU = 0; XU < NU.targetedAnimations.length; ++XU) {
              const DU = NU.targetedAnimations[XU],
                aU = DU.target,
                tU = DU.animation;
              if (oU && !oU(tU)) continue;
              const gU = FU.has(aU);
              if (this._IsTransformable(aU) || 1 === aU.length && this._IsTransformable(aU[0])) {
                const UU = Yc._DeduceAnimationInfo(DU.animation);
                if (UU) {
                  const XU = this._IsTransformable(aU) ? aU : this._IsTransformable(aU[0]) ? aU[0] : null;
                  XU && Yc._AddAnimation(`${tU.name}`, EU, XU, tU, UU.dataAccessorType, UU.animationChannelTargetPath, zU, cU, yU, QU, UU.useQuaternion, AU, gU)
                }
              } else if (aU instanceof Fc || 1 === aU.length && aU[0] instanceof Fc) {
                if (Yc._DeduceAnimationInfo(DU.animation)) {
                  const XU = aU instanceof Fc ? aU : aU[0];
                  if (XU) {
                    const zU = UU.morphTargetManagers.find((UU => {
                      for (let zU = 0; zU < UU.numTargets; ++zU)
                        if (UU.getTarget(zU) === XU) return !0;
                      return !1
                    }));
                    if (zU) {
                      const cU = UU.meshes.find((UU => UU.morphTargetManager === zU));
                      cU && (YU.has(cU) || YU.set(cU, new Map), YU.get(cU)?.set(XU, tU), pU.add(cU), IU.set(cU, tU))
                    }
                  }
                }
              }
            }
            pU.forEach((UU => {
              const XU = UU.morphTargetManager;
              let FU = null;
              const oU = [],
                DU = IU.get(UU).getKeys(),
                pU = DU.length;
              for (let zU = 0; zU < pU; ++zU)
                for (let cU = 0; cU < XU.numTargets; ++cU) {
                  const yU = XU.getTarget(cU),
                    QU = YU.get(UU);
                  if (QU) {
                    const XU = QU.get(yU);
                    XU ? (FU || (FU = new Ac.b(`${NU.name}_${UU.name}_MorphWeightAnimation`, "influence", XU.framePerSecond, Ac.b.ANIMATIONTYPE_FLOAT, XU.aX, XU.enableBlending)), oU.push(XU.getKeys()[zU])) : oU.push({
                      frame: NU.from + aU / pU * zU,
                      value: yU.influence,
                      inTangent: DU[0].inTangent ? 0 : void 0,
                      outTangent: DU[0].outTangent ? 0 : void 0
                    })
                  }
                }
              FU.setKeys(oU, !0);
              const tU = Yc._DeduceAnimationInfo(FU);
              tU && Yc._AddAnimation(`${NU.name}_${UU.name}_MorphWeightAnimation`, EU, UU, FU, tU.dataAccessorType, tU.animationChannelTargetPath, zU, cU, yU, QU, tU.useQuaternion, AU, !1, XU?.numTargets)
            })), EU.channels.length && EU.samplers.length && (DU?.set(NU, XU.length), XU.push(EU))
          }
        }
      }
      static _AddAnimation(UU, XU, zU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU) {
        const aU = Yc._CreateNodeAnimation(zU, yU, AU, YU, NU);
        let tU, gU, kU, GU, BU, ZU;
        if (aU) {
          if (pU) {
            let UU, XU = 0;
            const zU = [];
            for (; aU.inputs.length > 0;) UU = aU.inputs.shift(), XU % pU == 0 && zU.push(UU), XU++;
            aU.inputs = zU
          }
          const UU = FU.get(zU),
            yU = new Float32Array(aU.inputs);
          tU = oU.createBufferView(yU), gU = oU.createAccessor(tU, "SCALAR", 5126, aU.inputs.length, void 0, {
            min: [aU.inputsMin],
            max: [aU.inputsMax]
          }), EU.push(gU), kU = EU.length - 1;
          const DU = new cU.Quaternion,
            YU = new cU.Sp,
            NU = new cU.Sp,
            RU = zU instanceof cc.d,
            PU = Vz(QU),
            WU = new Float32Array(aU.outputs.length * PU);
          aU.outputs.forEach((function(UU, XU) {
            let zU = UU;
            switch (AU) {
              case "translation":
                IU && (cU.Sp.FromArrayToRef(UU, 0, NU), mz(NU), NU.toArray(zU));
                break;
              case "rotation":
                4 === UU.length ? cU.Quaternion.FromArrayToRef(UU, 0, DU) : (zU = new Array(4), cU.Sp.FromArrayToRef(UU, 0, YU), cU.Quaternion.FromEulerVectorToRef(YU, DU)), IU && (lz(DU), RU && xz(DU)), DU.toArray(zU)
            }
            WU.set(zU, XU * PU)
          })), tU = oU.createBufferView(WU), gU = oU.createAccessor(tU, QU, 5126, aU.outputs.length), EU.push(gU), GU = EU.length - 1, BU = {
            interpolation: aU.samplerInterpolation,
            input: kU,
            output: GU
          }, XU.samplers.push(BU), ZU = {
            sampler: XU.samplers.length - 1,
            target: {
              node: UU,
              path: AU
            }
          }, XU.channels.push(ZU)
        }
      }
      static _CreateBakedAnimation(UU, XU, zU, QU, AU, FU, oU, DU, EU, YU, NU) {
        let IU;
        const pU = cU.Quaternion.Identity();
        let aU, tU, gU, kU, GU, BU = null,
          ZU = null;
        YU.min = yU.Tools.FloatRound(QU / FU);
        const RU = XU.getKeys();
        for (let cU = 0, PU = RU.length; cU < PU; ++cU) {
          if (tU = RU[cU], cU + 1 < PU)
            if (gU = RU[cU + 1], tU.value.equals && tU.value.equals(gU.value) || tU.value === gU.value) {
              if (0 !== cU) continue;
              GU = tU.frame
            } else GU = gU.frame;
          else {
            if (kU = RU[cU - 1], tU.value.equals && tU.value.equals(kU.value) || tU.value === kU.value) continue;
            GU = AU
          }
          if (GU)
            for (let cU = tU.frame; cU <= GU; cU += oU) {
              if (aU = yU.Tools.FloatRound(cU / FU), aU === BU) continue;
              BU = aU, ZU = aU;
              const QU = {
                key: 0,
                repeatCount: 0,
                aX: XU.aX
              };
              IU = XU._interpolate(cU, QU), Yc._SetInterpolatedValue(UU, IU, aU, XU, zU, pU, DU, EU, NU)
            }
        }
        ZU && (YU.max = ZU)
      }
      static _ConvertFactorToVector3OrQuaternion(UU, XU, zU, QU, AU) {
        const FU = Yc._GetBasePositionRotationOrScale(XU, QU, AU),
          oU = zU.targetProperty.split("."),
          DU = oU ? oU[1] : "",
          EU = AU ? cU.Quaternion.FromArray(FU).normalize() : cU.Sp.FromArray(FU);
        switch (DU) {
          case "x":
          case "y":
          case "z":
            EU[DU] = UU;
            break;
          case "w":
            EU.w = UU;
            break;
          default:
            yU.Tools.Error(`glTFAnimation: Unsupported component name "${DU}"!`)
        }
        return EU
      }
      static _SetInterpolatedValue(UU, XU, zU, yU, QU, AU, FU, oU, DU) {
        let EU;
        FU.push(zU), "weights" !== QU ? (yU.dataType === Ac.b.ANIMATIONTYPE_FLOAT && (XU = this._ConvertFactorToVector3OrQuaternion(XU, UU, yU, QU, DU)), "rotation" === QU ? (DU ? AU = XU : (EU = XU, cU.Quaternion.RotationYawPitchRollToRef(EU.y, EU.x, EU.z, AU)), oU.push(AU.cyU())) : (EU = XU, oU.push(EU.cyU()))) : oU.push([XU])
      }
      static _CreateLinearOrStepAnimation(UU, XU, zU, cU, yU, QU) {
        for (const AU of XU.getKeys()) cU.push(AU.frame / XU.framePerSecond), Yc._AddKeyframeValue(AU, XU, yU, zU, UU, QU)
      }
      static _CreateCubicSplineAnimation(UU, XU, zU, cU, yU, QU) {
        XU.getKeys().forEach((function(AU) {
          cU.push(AU.frame / XU.framePerSecond), Yc._AddSplineTangent(oc.INTANGENT, yU, zU, "CUBICSPLINE", AU, QU), Yc._AddKeyframeValue(AU, XU, yU, zU, UU, QU), Yc._AddSplineTangent(oc.OUTTANGENT, yU, zU, "CUBICSPLINE", AU, QU)
        }))
      }
      static _GetBasePositionRotationOrScale(UU, XU, zU) {
        let yU;
        if ("rotation" === XU)
          if (zU) {
            yU = (UU.rotationQuaternion ?? cU.Quaternion.Identity()).cyU()
          } else {
            yU = (UU.rotation ?? cU.Sp.Zero()).cyU()
          }
        else if ("translation" === XU) {
          yU = (UU.position ?? cU.Sp.Zero()).cyU()
        } else {
          yU = (UU.RY ?? cU.Sp.One()).cyU()
        }
        return yU
      }
      static _AddKeyframeValue(UU, XU, zU, QU, AU, FU) {
        let oU;
        const DU = XU.dataType;
        if (DU === Ac.b.ANIMATIONTYPE_VECTOR3) {
          let XU = UU.value.cyU();
          if ("rotation" === QU) {
            const UU = cU.Sp.FromArray(XU);
            XU = cU.Quaternion.RotationYawPitchRoll(UU.y, UU.x, UU.z).cyU()
          }
          zU.push(XU)
        } else if (DU === Ac.b.ANIMATIONTYPE_FLOAT) {
          if ("weights" === QU) zU.push([UU.value]);
          else if (oU = this._ConvertFactorToVector3OrQuaternion(UU.value, AU, XU, QU, FU), oU) {
            if ("rotation" === QU) {
              const UU = FU ? oU : cU.Quaternion.RotationYawPitchRoll(oU.y, oU.x, oU.z).normalize();
              zU.push(UU.cyU())
            }
            zU.push(oU.cyU())
          }
        } else DU === Ac.b.ANIMATIONTYPE_QUATERNION ? zU.push(UU.value.normalize().cyU()) : yU.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(UU, XU, zU) {
        let cU, yU, QU = !1;
        if ("rotation" === XU && !zU) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let AU = 0, FU = UU.length; AU < FU; ++AU)
          if (yU = UU[AU], yU.inTangent || yU.outTangent)
            if (cU) {
              if ("CUBICSPLINE" !== cU) {
                cU = "LINEAR", QU = !0;
                break
              }
            } else cU = "CUBICSPLINE";
        else if (cU) {
          if ("CUBICSPLINE" === cU || yU.interpolation && 1 === yU.interpolation && "STEP" !== cU) {
            cU = "LINEAR", QU = !0;
            break
          }
        } else cU = yU.interpolation && 1 === yU.interpolation ? "STEP" : "LINEAR";
        return cU || (cU = "LINEAR"), {
          interpolationType: cU,
          shouldBakeAnimation: QU
        }
      }
      static _AddSplineTangent(UU, XU, zU, yU, QU, AU) {
        let FU;
        const oU = UU === oc.INTANGENT ? QU.inTangent : QU.outTangent;
        if ("CUBICSPLINE" === yU) {
          if ("rotation" === zU)
            if (oU)
              if (AU) FU = oU.cyU();
              else {
                const UU = oU;
                FU = cU.Quaternion.RotationYawPitchRoll(UU.y, UU.x, UU.z).cyU()
              }
          else FU = [0, 0, 0, 0];
          else FU = "weights" === zU ? oU ? [oU] : [0] : oU ? oU.cyU() : [0, 0, 0];
          XU.push(FU)
        }
      }
      static _CalculateMinMaxKeyFrames(UU) {
        let XU = 1 / 0,
          zU = -1 / 0;
        return UU.forEach((function(UU) {
          XU = Math.min(XU, UU.frame), zU = Math.max(zU, UU.frame)
        })), {
          min: XU,
          max: zU
        }
      }
    }

    function Nc(UU, XU, zU, QU, AU, FU) {
      const oU = {
          attributes: {},
          influence: UU.influence,
          name: UU.name
        },
        DU = XU.geometry;
      if (!DU) return yU.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), oU;
      const YU = FU ? -1 : 1,
        NU = cU.Sp.Zero();
      let IU, pU;
      if (UU.hasPositions) {
        const QU = UU.getPositions(),
          FU = DU.getVerticesData(EU.e.PositionKind);
        if (FU) {
          const UU = new Float32Array(FU.length),
            XU = [1 / 0, 1 / 0, 1 / 0],
            yU = [-1 / 0, -1 / 0, -1 / 0];
          pU = FU.length / 3, IU = 0;
          for (let zU = IU; zU < pU; ++zU) {
            const AU = cU.Sp.FromArray(FU, 3 * zU);
            cU.Sp.FromArray(QU, 3 * zU).subtractToRef(AU, NU), NU.x *= YU, XU[0] = Math.min(XU[0], NU.x), yU[0] = Math.max(yU[0], NU.x), XU[1] = Math.min(XU[1], NU.y), yU[1] = Math.max(yU[1], NU.y), XU[2] = Math.min(XU[2], NU.z), yU[2] = Math.max(yU[2], NU.z), UU[3 * zU] = NU.x, UU[3 * zU + 1] = NU.y, UU[3 * zU + 2] = NU.z
          }
          const DU = zU.createBufferView(UU, 12),
            EU = zU.createAccessor(DU, "VEC3", 5126, QU.length / 3, 0, {
              min: XU,
              max: yU
            });
          AU.push(EU), oU.attributes.POSITION = AU.length - 1
        } else yU.Tools.Warn(`Morph target positions for mesh ${XU.name} were not exported. Mesh does not have position vertex data`)
      }
      if (UU.hasNormals) {
        const QU = UU.getNormals(),
          FU = DU.getVerticesData(EU.e.NormalKind);
        if (FU) {
          const UU = new Float32Array(FU.length);
          pU = FU.length / 3, IU = 0;
          for (let zU = IU; zU < pU; ++zU) {
            const XU = cU.Sp.FromArray(FU, 3 * zU).normalize();
            cU.Sp.FromArray(QU, 3 * zU).normalize().subtractToRef(XU, NU), UU[3 * zU] = NU.x * YU, UU[3 * zU + 1] = NU.y, UU[3 * zU + 2] = NU.z
          }
          const XU = zU.createBufferView(UU, 12),
            yU = zU.createAccessor(XU, "VEC3", 5126, QU.length / 3, 0);
          AU.push(yU), oU.attributes.NORMAL = AU.length - 1
        } else yU.Tools.Warn(`Morph target normals for mesh ${XU.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (UU.hasTangents) {
        const QU = UU.getTangents(),
          FU = DU.getVerticesData(EU.e.TangentKind);
        if (FU) {
          pU = FU.length / 4;
          const UU = new Float32Array(3 * pU);
          IU = 0;
          for (let zU = IU; zU < pU; ++zU) {
            const XU = cU.Sp.FromArray(FU, 4 * zU);
            nz(XU);
            const yU = cU.Sp.FromArray(QU, 3 * zU);
            nz(yU), yU.subtractToRef(XU, NU), UU[3 * zU] = NU.x * YU, UU[3 * zU + 1] = NU.y, UU[3 * zU + 2] = NU.z
          }
          const XU = zU.createBufferView(UU, 12),
            yU = zU.createAccessor(XU, "VEC3", 5126, pU, 0);
          AU.push(yU), oU.attributes.TANGENT = AU.length - 1
        } else yU.Tools.Warn(`Morph target tangents for mesh ${XU.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (UU.hasColors) {
        const QU = UU.getColors(),
          FU = DU.getVerticesData(EU.e.ColorKind),
          YU = DU.getVertexBuffer(EU.e.ColorKind);
        if (FU && YU) {
          const UU = YU.getSize();
          pU = FU.length / UU;
          const XU = new Float32Array(pU * UU);
          IU = 0;
          for (let zU = IU; zU < pU; ++zU)
            if (3 === UU) {
              const yU = cU.Sp.FromArray(FU, zU * UU);
              cU.Sp.FromArray(QU, zU * UU).subtractToRef(yU, NU), XU[3 * zU] = NU.x, XU[3 * zU + 1] = NU.y, XU[3 * zU + 2] = NU.z
            } else if (4 === UU) {
            const yU = new cU.Vector4,
              AU = cU.Vector4.FromArray(FU, zU * UU);
            cU.Vector4.FromArray(QU, zU * UU).subtractToRef(AU, yU), XU[4 * zU] = yU.x, XU[4 * zU + 1] = yU.y, XU[4 * zU + 2] = yU.z, XU[4 * zU + 3] = yU.w
          } else yU.Tools.Warn(`Unsupported number of components for color attribute: ${UU}`);
          const DU = zU.createBufferView(XU, 4 * UU),
            EU = zU.createAccessor(DU, 3 === UU ? "VEC3" : "VEC4", 5126, pU, 0);
          AU.push(EU), oU.attributes.COLOR_0 = AU.length - 1
        } else yU.Tools.Warn(`Morph target colors for mesh ${XU.name} were not exported. Mesh does not have colors vertex data`)
      }
      return oU
    }
    var Ic = zU(44254);
    class pc {}
    pc.DEFAULT_COLOR = lU.b.White(), pc.DEFAULT_WIDTH_ATTENUATED = 1, pc.DEFAULT_WIDTH = .1;
    var ac = zU(42190);
    class tc {
      constructor(UU) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = UU
      }
      moveTo(UU, XU) {
        this._currentPath = new ac.g(UU, XU), this._tempPaths.push(this._currentPath)
      }
      lineTo(UU, XU) {
        this._currentPath.addLineTo(UU, XU)
      }
      quadraticCurveTo(UU, XU, zU, cU) {
        this._currentPath.addQuadraticCurveTo(UU, XU, zU, cU, this._resolution)
      }
      bezierCurveTo(UU, XU, zU, cU, yU, QU) {
        this._currentPath.addBezierCurveTo(UU, XU, zU, cU, yU, QU, this._resolution)
      }
      extractHoles() {
        for (const UU of this._tempPaths) UU.area() > 0 ? this._holes.push(UU) : this._paths.push(UU);
        if (!this._paths.length && this._holes.length) {
          const UU = this._holes;
          this._holes = this._paths, this._paths = UU
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

    function gc(UU, XU, zU, cU, yU, QU) {
      const AU = QU.glyphs[UU] || QU.glyphs["?"];
      if (!AU) return null;
      const FU = new tc(yU);
      if (AU.o) {
        const UU = AU.o.split(" ");
        for (let yU = 0, QU = UU.length; yU < QU;) {
          switch (UU[yU++]) {
            case "m": {
              const QU = parseInt(UU[yU++]) * XU + zU,
                AU = parseInt(UU[yU++]) * XU + cU;
              FU.moveTo(QU, AU);
              break
            }
            case "l": {
              const QU = parseInt(UU[yU++]) * XU + zU,
                AU = parseInt(UU[yU++]) * XU + cU;
              FU.lineTo(QU, AU);
              break
            }
            case "q": {
              const QU = parseInt(UU[yU++]) * XU + zU,
                AU = parseInt(UU[yU++]) * XU + cU,
                oU = parseInt(UU[yU++]) * XU + zU,
                DU = parseInt(UU[yU++]) * XU + cU;
              FU.quadraticCurveTo(oU, DU, QU, AU);
              break
            }
            case "b": {
              const QU = parseInt(UU[yU++]) * XU + zU,
                AU = parseInt(UU[yU++]) * XU + cU,
                oU = parseInt(UU[yU++]) * XU + zU,
                DU = parseInt(UU[yU++]) * XU + cU,
                EU = parseInt(UU[yU++]) * XU + zU,
                YU = parseInt(UU[yU++]) * XU + cU;
              FU.bezierCurveTo(oU, DU, EU, YU, QU, AU);
              break
            }
          }
        }
      }
      return FU.extractHoles(), {
        offsetX: AU.ha * XU,
        shapePath: FU
      }
    }

    function kc(UU, XU, zU, cU) {
      const yU = Array.from(UU),
        QU = XU / cU.resolution,
        AU = (cU.boundingBox.yMax - cU.boundingBox.yMin + cU.underlineThickness) * QU,
        FU = [];
      let oU = 0,
        DU = 0;
      for (let EU = 0; EU < yU.length; EU++) {
        const UU = yU[EU];
        if ("\n" === UU) oU = 0, DU -= AU;
        else {
          const XU = gc(UU, QU, oU, DU, zU, cU);
          XU && (oU += XU.offsetX, FU.push(XU.shapePath))
        }
      }
      return FU
    }
    class Gc {
      static ConvertPoints(UU, XU) {
        if (UU.length && Array.isArray(UU) && "number" === typeof UU[0]) return [UU];
        if (UU.length && Array.isArray(UU[0]) && "number" === typeof UU[0][0]) return UU;
        if (UU.length && !Array.isArray(UU[0]) && UU[0] instanceof HU.q) {
          const XU = [];
          for (let zU = 0; zU < UU.length; zU++) {
            const cU = UU[zU];
            XU.push(cU.x, cU.y, cU.z)
          }
          return [XU]
        }
        if (UU.length > 0 && Array.isArray(UU[0]) && UU[0].length > 0 && UU[0][0] instanceof HU.q) {
          const XU = [],
            zU = UU;
          for (const UU of zU) XU.push(UU.flatMap((UU => [UU.x, UU.y, UU.z])));
          return XU
        }
        if (UU instanceof Float32Array) {
          if (XU?.floatArrayStride) {
            const zU = [],
              cU = 3 * XU.floatArrayStride;
            for (let XU = 0; XU < UU.length; XU += cU) {
              const yU = new Array(cU);
              for (let zU = 0; zU < cU; zU++) yU[zU] = UU[XU + zU];
              zU.push(yU)
            }
            return zU
          }
          return [Array.from(UU)]
        }
        if (UU.length && UU[0] instanceof Float32Array) {
          const XU = [];
          for (const zU of UU) XU.push(Array.from(zU));
          return XU
        }
        return []
      }
      static OmitZeroLengthPredicate(UU, XU, zU) {
        const cU = [];
        return XU.subtract(UU).lengthSquared() > 0 && cU.push([UU, XU]), zU.subtract(XU).lengthSquared() > 0 && cU.push([XU, zU]), UU.subtract(zU).lengthSquared() > 0 && cU.push([zU, UU]), 0 === cU.length ? null : cU
      }
      static OmitDuplicatesPredicate(UU, XU, zU, cU) {
        const yU = [];
        return Gc._SearchInPoints(UU, XU, cU) || yU.push([UU, XU]), Gc._SearchInPoints(XU, zU, cU) || yU.push([XU, zU]), Gc._SearchInPoints(zU, UU, cU) || yU.push([zU, UU]), 0 === yU.length ? null : yU
      }
      static _SearchInPoints(UU, XU, zU) {
        for (const cU of zU)
          for (let zU = 0; zU < cU.length; zU++)
            if (cU[zU]?.equals(UU) && (cU[zU + 1]?.equals(XU) || cU[zU - 1]?.equals(XU))) return !0;
        return !1
      }
      static MeshesToLines(UU, XU) {
        const zU = [];
        for (let cU = 0; cU < UU.length; cU++) {
          const yU = UU[cU],
            QU = yU.getVerticesData(MU.h.PositionKind),
            AU = yU.yyU();
          if (QU && AU)
            for (let UU = 0, FU = 0; UU < AU.length; UU++) {
              const oU = 3 * AU[FU++],
                DU = 3 * AU[FU++],
                EU = 3 * AU[FU++],
                YU = new HU.q(QU[oU], QU[oU + 1], QU[oU + 2]),
                NU = new HU.q(QU[DU], QU[DU + 1], QU[DU + 2]),
                IU = new HU.q(QU[EU], QU[EU + 1], QU[EU + 2]);
              if (XU) {
                const FU = XU(YU, NU, IU, zU, UU, oU, yU, cU, QU, AU);
                if (FU)
                  for (const UU of FU) zU.push(UU)
              } else zU.push([YU, NU], [NU, IU], [IU, YU])
            }
        }
        return zU
      }
      static ToVector3Array(UU) {
        if (Array.isArray(UU[0])) {
          const XU = [],
            zU = UU;
          for (const UU of zU) {
            const zU = [];
            for (let XU = 0; XU < UU.length; XU += 3) zU.push(new HU.q(UU[XU], UU[XU + 1], UU[XU + 2]));
            XU.push(zU)
          }
          return XU
        }
        const XU = UU,
          zU = [];
        for (let cU = 0; cU < XU.length; cU += 3) zU.push(new HU.q(XU[cU], XU[cU + 1], XU[cU + 2]));
        return zU
      }
      static ToNumberArray(UU) {
        return UU.flatMap((UU => [UU.x, UU.y, UU.z]))
      }
      static GetPointsCountInfo(UU) {
        const XU = new Array(UU.length);
        let zU = 0;
        for (let cU = UU.length; cU--;) XU[cU] = UU[cU].length / 3, zU += XU[cU];
        return {
          total: zU,
          counts: XU
        }
      }
      static GetLineLength(UU) {
        if (0 === UU.length) return 0;
        let XU;
        XU = "number" === typeof UU[0] ? Gc.ToVector3Array(UU) : UU;
        const zU = HU.l.Sp[0];
        let cU = 0;
        for (let yU = 0; yU < XU.length - 1; yU++) {
          const UU = XU[yU];
          cU += XU[yU + 1].subtractToRef(UU, zU).length()
        }
        return cU
      }
      static GetLineLengthArray(UU, XU) {
        const zU = XU ? new Float32Array(XU, 0, UU.length / 3) : new Float32Array(UU.length / 3);
        let cU = 0;
        for (let yU = 0, QU = UU.length / 3 - 1; yU < QU; yU++) {
          let XU = UU[3 * yU + 0],
            QU = UU[3 * yU + 1],
            AU = UU[3 * yU + 2];
          XU -= UU[3 * yU + 3], QU -= UU[3 * yU + 4], AU -= UU[3 * yU + 5];
          cU += Math.sqrt(XU * XU + QU * QU + AU * AU), zU[yU + 1] = cU
        }
        return zU
      }
      static SegmentizeSegmentByCount(UU, XU, zU) {
        const cU = [],
          yU = XU.subtract(UU),
          QU = HU.l.Sp[0];
        QU.IUU(zU);
        const AU = HU.l.Sp[1];
        yU.divideToRef(QU, AU);
        let FU = UU.clone();
        cU.push(FU);
        for (let oU = 0; oU < zU; oU++) FU = FU.clone(), cU.push(FU.addInPlace(AU));
        return cU
      }
      static SegmentizeLineBySegmentLength(UU, XU) {
        const zU = UU[0] instanceof HU.q ? Gc.GetLineSegments(UU) : "number" === typeof UU[0] ? Gc.GetLineSegments(Gc.ToVector3Array(UU)) : UU,
          cU = [];
        for (const yU of zU)
          if (yU.length > XU) {
            const UU = Gc.SegmentizeSegmentByCount(yU.point1, yU.point2, Math.ceil(yU.length / XU));
            for (const XU of UU) cU.push(XU)
          } else cU.push(yU.point1), cU.push(yU.point2);
        return cU
      }
      static SegmentizeLineBySegmentCount(UU, XU) {
        const zU = "number" === typeof UU[0] ? Gc.ToVector3Array(UU) : UU,
          cU = Gc.GetLineLength(zU) / XU;
        return Gc.SegmentizeLineBySegmentLength(zU, cU)
      }
      static GetLineSegments(UU) {
        const XU = [];
        for (let zU = 0; zU < UU.length - 1; zU++) {
          const cU = UU[zU],
            yU = UU[zU + 1],
            QU = yU.subtract(cU).length();
          XU.push({
            point1: cU,
            point2: yU,
            length: QU
          })
        }
        return XU
      }
      static GetMinMaxSegmentLength(UU) {
        const XU = Gc.GetLineSegments(UU).sort((UU => UU.length));
        return {
          min: XU[0].length,
          max: XU[XU.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yU = XU * zU;
        let QU = 0,
          AU = 0;
        const FU = UU.length;
        for (let DU = 0; DU < FU; DU++) {
          if (yU <= QU + UU[DU].length) {
            AU = DU;
            break
          }
          QU += UU[DU].length
        }
        const oU = (yU - QU) / UU[AU].length;
        return UU[AU].point2.subtractToRef(UU[AU].point1, HU.l.Sp[0]), HU.l.Sp[0].scaleToRef(oU, HU.l.Sp[1]), cU || HU.l.Sp[1].addInPlace(UU[AU].point1), HU.l.Sp[1].clone()
      }
      static GetCircleLinePoints(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU,
          yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / XU;
        const QU = [];
        for (let AU = 0; AU <= XU; AU++) QU.push(new HU.q(Math.cos(AU * yU) * UU, Math.sin(AU * yU) * cU, zU));
        return QU
      }
      static GetBezierLinePoints(UU, XU, zU, cU) {
        return ac.f.CreateQuadraticBezier(UU, XU, zU, cU).getPoints().flatMap((UU => [UU.x, UU.y, UU.z]))
      }
      static GetArrowCap(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [UU.clone(), UU.add(XU.multiplyByFloats(zU, zU, zU))],
          widths: [cU, yU, QU, AU]
        }
      }
      static GetPointsFromText(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const AU = [],
          FU = kc(UU, XU, zU, cU);
        for (const oU of FU) {
          for (const UU of oU.paths) {
            const XU = [],
              zU = UU.getPoints();
            for (const UU of zU) XU.push(UU.x, UU.y, yU);
            AU.push(XU)
          }
          if (QU)
            for (const UU of oU.holes) {
              const XU = [],
                zU = UU.getPoints();
              for (const UU of zU) XU.push(UU.x, UU.y, yU);
              AU.push(XU)
            }
        }
        return AU
      }
      static Color3toRGBAUint8(UU) {
        const XU = new Uint8Array(4 * UU.length);
        for (let zU = 0, cU = 0; zU < UU.length; zU++) XU[cU++] = 255 * UU[zU].r, XU[cU++] = 255 * UU[zU].g, XU[cU++] = 255 * UU[zU].b, XU[cU++] = 255;
        return XU
      }
      static CreateColorsTexture(UU, XU, zU, cU) {
        const yU = cU.qp().getCaps().maxTextureSize ?? 1,
          QU = XU.length > yU ? yU : XU.length,
          AU = Math.ceil(XU.length / yU);
        AU > 1 && (XU = [...XU, ...Array(QU * AU - XU.length).fill(XU[0])]);
        const FU = Gc.Color3toRGBAUint8(XU),
          oU = new RU.b(FU, QU, AU, Ez.b.TEXTUREFORMAT_RGBA, cU, !1, !0, zU);
        return oU.name = UU, oU
      }
      static PrepareEmptyColorsTexture(UU) {
        if (!pc.EmptyColorsTexture) {
          const XU = new Uint8Array(4);
          pc.EmptyColorsTexture = new RU.b(XU, 1, 1, Ez.b.TEXTUREFORMAT_RGBA, UU, !1, !1, RU.b.NEAREST_NEAREST), pc.EmptyColorsTexture.name = "grlEmptyColorsTexture", pc.EmptyColorsTexture.bS.addOnce((() => {
            pc.EmptyColorsTexture = null
          }))
        }
        return pc.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        pc.EmptyColorsTexture?.dispose(), pc.EmptyColorsTexture = null
      }
      static BooleanToNumber(UU) {
        return UU ? 1 : 0
      }
    }
    class Bc extends vU.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class Zc extends VU.e {
      isCompatible(UU) {
        return !0
      }
      constructor(UU, XU, zU) {
        zU = zU || {
          color: pc.DEFAULT_COLOR
        };
        const cU = new Bc;
        cU.GREASED_LINE_HAS_COLOR = !!zU.color && !zU.useColors, cU.GREASED_LINE_SIZE_ATTENUATION = zU.sizeAttenuation ?? !1, cU.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === zU.colorDistributionType, cU.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (XU ?? UU.nS()).useRightHandedSystem, cU.GREASED_LINE_CAMERA_FACING = zU.cameraFacing ?? !0, super(UU, Zc.GREASED_LINE_MATERIAL_NAME, 200, cU, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = zU?.forceGLSL || Zc.ForceGLSL, this._scene = XU ?? UU.nS(), this._engine = this._scene.qp(), this._cameraFacing = zU.cameraFacing ?? !0, this.visibility = zU.visibility ?? 1, this.useDash = zU.useDash ?? !1, this.dashRatio = zU.dashRatio ?? .5, this.dashOffset = zU.dashOffset ?? 0, this.width = zU.width ? zU.width : zU.sizeAttenuation ? pc.DEFAULT_WIDTH_ATTENUATED : pc.DEFAULT_WIDTH, this._sizeAttenuation = zU.sizeAttenuation ?? !1, this.colorMode = zU.colorMode ?? 0, this._color = zU.color ?? null, this.useColors = zU.useColors ?? !1, this._colorsDistributionType = zU.colorDistributionType ?? 0, this.colorsSampling = zU.colorsSampling ?? RU.b.NEAREST_NEAREST, this._colors = zU.colors ?? null, this.dashCount = zU.dashCount ?? 1, this.resolution = zU.resolution ?? new HU.m(this._engine.getRenderWidth(), this._engine.getRenderHeight()), zU.colorsTexture ? this.colorsTexture = zU.colorsTexture : this._colors ? this.colorsTexture = Gc.CreateColorsTexture(`${UU.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? pc.DEFAULT_COLOR, Gc.PrepareEmptyColorsTexture(this._scene)), this._engine.bS.add((() => {
          Gc.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(UU) {
        UU.push("grl_offsets"), UU.push("grl_widths"), UU.push("grl_colorPointers"), UU.push("grl_counters"), this._cameraFacing ? (UU.push("grl_previousAndSide"), UU.push("grl_nextAndCounters")) : UU.push("grl_slopes")
      }
      getSamplers(UU) {
        UU.push("grl_colors")
      }
      getActiveTextures(UU) {
        this.colorsTexture && UU.push(this.colorsTexture)
      }
      getUniforms() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const XU = [{
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
        return this._cameraFacing && XU.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === UU && XU.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: XU,
          vertex: this._cameraFacing && this._isGLSL(UU) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(UU) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(UU) {
        if (this._cameraFacing) {
          UU.eUU("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || UU.eUU("viewProjection", this._scene.getTransformMatrix());
          const XU = HU.l.Vector4[0];
          XU.x = this._aspect, XU.y = this._resolution.x, XU.z = this._resolution.y, XU.w = this.width, UU.updateVector4("grl_aspect_resolution_lineWidth", XU)
        }
        const XU = HU.l.Vector4[0];
        XU.x = Gc.BooleanToNumber(this.useDash), XU.y = this._dashArray, XU.z = this.dashOffset, XU.w = this.dashRatio, UU.updateVector4("grl_dashOptions", XU);
        const zU = HU.l.Vector4[1];
        zU.x = this.colorMode, zU.y = this.visibility, zU.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, zU.w = Gc.BooleanToNumber(this.useColors), UU.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", zU), this._color && UU.updateColor3("grl_singleColor", this._color);
        const cU = this.colorsTexture ?? pc.EmptyColorsTexture;
        UU.setTexture("grl_colors", cU), UU.updateFloat2("grl_textureSize", cU?.getSize().width ?? 1, cU?.getSize().height ?? 1)
      }
      prepareDefines(UU, XU, zU) {
        UU.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, UU.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, UU.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, UU.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = XU.useRightHandedSystem, UU.GREASED_LINE_CAMERA_FACING = this._cameraFacing, UU.GREASED_LINE_USE_OFFSETS = !!zU.offsets
      }
      getClassName() {
        return Zc.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(XU) ? function(UU, XU) {
          if ("vertex" === UU) {
            const UU = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return XU && (UU["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), UU
          }
          return "fragment" === UU ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(UU, this._cameraFacing) : function(UU, XU) {
          if ("vertex" === UU) {
            const UU = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return XU && (UU["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), UU
          }
          return "fragment" === UU ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(UU, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(UU) {
        this.setColors(UU)
      }
      setColors(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = this._colors?.length ?? 0;
        if (this._colors = UU, null !== UU && 0 !== UU.length) {
          if (!XU || zU)
            if (this.colorsTexture && cU === UU.length && !zU) {
              const XU = Gc.Color3toRGBAUint8(UU);
              this.colorsTexture.update(XU)
            } else this.colorsTexture?.dispose(), this.colorsTexture = Gc.CreateColorsTexture(`${this._material.name}-colors-texture`, UU, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(UU) {
        this._dashCount = UU, this._dashArray = 1 / UU
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(UU) {
        this._sizeAttenuation = UU, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(UU) {
        this.setColor(UU)
      }
      setColor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== UU || null !== this._color && null === UU ? (this._color = UU, XU || this.markAllDefinesAsDirty()) : this._color = UU
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(UU) {
        this._colorsDistributionType = UU, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(UU) {
        this._aspect = UU.x / UU.y, this._resolution = UU
      }
      serialize() {
        const UU = super.serialize(),
          XU = {
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
        return this._colors && (XU.colors = this._colors), this._color && (XU.color = this._color), UU.greasedLineMaterialOptions = XU, UU
      }
      parse(UU, XU, zU) {
        super.parse(UU, XU, zU);
        const cU = UU.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), cU.color && this.setColor(cU.color, !0), cU.colorDistributionType && (this.colorsDistributionType = cU.colorDistributionType), cU.colors && (this.colors = cU.colors), cU.colorsSampling && (this.colorsSampling = cU.colorsSampling), cU.colorMode && (this.colorMode = cU.colorMode), cU.useColors && (this.useColors = cU.useColors), cU.visibility && (this.visibility = cU.visibility), cU.useDash && (this.useDash = cU.useDash), cU.dashCount && (this.dashCount = cU.dashCount), cU.dashRatio && (this.dashRatio = cU.dashRatio), cU.dashOffset && (this.dashOffset = cU.dashOffset), cU.width && (this.width = cU.width), cU.sizeAttenuation && (this.sizeAttenuation = cU.sizeAttenuation), cU.resolution && (this.resolution = cU.resolution), this.colors ? this.colorsTexture = Gc.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, XU) : Gc.PrepareEmptyColorsTexture(XU), this.markAllDefinesAsDirty()
      }
      copyTo(UU) {
        const XU = UU;
        XU.colorsTexture?.dispose(), this._colors && (XU.colorsTexture = Gc.CreateColorsTexture(`${XU._material.name}-colors-texture`, this._colors, XU.colorsSampling, this._scene)), XU.setColor(this.color, !0), XU.colorsDistributionType = this.colorsDistributionType, XU.colorsSampling = this.colorsSampling, XU.colorMode = this.colorMode, XU.useColors = this.useColors, XU.visibility = this.visibility, XU.useDash = this.useDash, XU.dashCount = this.dashCount, XU.dashRatio = this.dashRatio, XU.dashOffset = this.dashOffset, XU.width = this.width, XU.sizeAttenuation = this.sizeAttenuation, XU.resolution = this.resolution, XU.markAllDefinesAsDirty()
      }
      _isGLSL(UU) {
        return 0 === UU || this._forceGLSL
      }
    }
    Zc.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", Zc.ForceGLSL = !1;
    var Rc = zU(41481),
      Pc = zU(41493),
      Wc = zU(39486),
      dc = zU(41549),
      Lc = zU(40945);
    class ec extends dc.o {
      constructor(UU, XU, cU) {
        const yU = XU.qp(),
          QU = yU.isWebGPU && !(cU.forceGLSL || ec.ForceGLSL),
          AU = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        XU.useRightHandedSystem && AU.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const FU = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        cU.cameraFacing ? (AU.push("GREASED_LINE_CAMERA_FACING"), FU.push("grl_previousAndSide", "grl_nextAndCounters")) : (FU.push("grl_slopes"), FU.push("grl_counters"));
        const oU = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (QU || oU.push("world", "viewProjection", "view", "projection"), super(UU, XU, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: QU ? ["Scene", "Mesh"] : void 0,
            attributes: FU,
            uniforms: oU,
            samplers: QU ? [] : ["grlColors"],
            defines: AU,
            extraInitializationsAsync: async () => {
              QU ? await Promise.all([zU.e(640).then((() => zU(64557))), zU.e(696).then((() => zU(64561)))]) : await Promise.all([zU.e(633).then((() => zU(64563))), zU.e(697).then((() => zU(64568)))])
            },
            shaderLanguage: QU ? 1 : 0
          }), this._color = lU.b.White(), this._colorsDistributionType = 0, this._colorsTexture = null, cU = cU || {
            color: pc.DEFAULT_COLOR
          }, this.visibility = cU.visibility ?? 1, this.useDash = cU.useDash ?? !1, this.dashRatio = cU.dashRatio ?? .5, this.dashOffset = cU.dashOffset ?? 0, this.dashCount = cU.dashCount ?? 1, this.width = cU.width ? cU.width : cU.sizeAttenuation && cU.cameraFacing ? pc.DEFAULT_WIDTH_ATTENUATED : pc.DEFAULT_WIDTH, this.sizeAttenuation = cU.sizeAttenuation ?? !1, this.color = cU.color ?? lU.b.White(), this.useColors = cU.useColors ?? !1, this.colorsDistributionType = cU.colorDistributionType ?? 0, this.colorsSampling = cU.colorsSampling ?? RU.b.NEAREST_NEAREST, this.colorMode = cU.colorMode ?? 0, this._colors = cU.colors ?? null, this._cameraFacing = cU.cameraFacing ?? !0, this.resolution = cU.resolution ?? new HU.m(yU.getRenderWidth(), yU.getRenderHeight()), cU.colorsTexture ? this.colorsTexture = cU.colorsTexture : this._colors ? this.colorsTexture = Gc.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, XU) : (this._color = this._color ?? pc.DEFAULT_COLOR, this.colorsTexture = Gc.PrepareEmptyColorsTexture(XU)), QU) {
          const UU = new Lc.e;
          UU.setParameters(), UU.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", UU)
        }
        yU.bS.add((() => {
          Gc.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== pc.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new HU.m(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(UU) {
        this.setColors(UU)
      }
      setColors(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const cU = this._colors?.length ?? 0;
        if (this._colors = UU, null !== UU && 0 !== UU.length) {
          if (!XU || zU)
            if (this._colorsTexture && cU === UU.length && !zU) {
              const XU = Gc.Color3toRGBAUint8(UU);
              this._colorsTexture.update(XU)
            } else this._colorsTexture && this._colorsTexture !== pc.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = Gc.CreateColorsTexture(`${this.name}-colors-texture`, UU, this.colorsSampling, this.nS())
        } else {
          this._colorsTexture && this._colorsTexture !== pc.EmptyColorsTexture && this._colorsTexture.dispose();
          const UU = this.nS();
          UU && (this.colorsTexture = Gc.PrepareEmptyColorsTexture(UU))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(UU) {
        this._colorsTexture = UU, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(UU) {
        this._width = UU, this.setFloat("grlWidth", UU)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(UU) {
        this._useColors = UU, this.setFloat("grlUseColors", Gc.BooleanToNumber(UU))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(UU) {
        this._colorsSampling = UU
      }
      get visibility() {
        return this._visibility
      }
      set visibility(UU) {
        this._visibility = UU, this.setFloat("grlVisibility", UU)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(UU) {
        this._useDash = UU, this.setFloat("grlUseDash", Gc.BooleanToNumber(UU))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(UU) {
        this._dashOffset = UU, this.setFloat("grlDashOffset", UU)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(UU) {
        this._dashRatio = UU, this.setFloat("grlDashRatio", UU)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(UU) {
        this._dashCount = UU, this._dashArray = 1 / UU, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(UU) {
        this._sizeAttenuation = UU, this.setFloat("grlSizeAttenuation", Gc.BooleanToNumber(UU))
      }
      get color() {
        return this._color
      }
      set color(UU) {
        this.setColor(UU)
      }
      setColor(UU) {
        UU = UU ?? pc.DEFAULT_COLOR, this._color = UU, this.setColor3("grlColor", UU)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(UU) {
        this._colorsDistributionType = UU, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(UU) {
        this._colorMode = UU, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(UU) {
        this._resolution = UU, this.setVector2("grlResolution", UU), this.setFloat("grlAspect", UU.x / UU.y)
      }
      serialize() {
        const UU = super.serialize(),
          XU = {
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
        return this._colors && (XU.colors = this._colors), UU.greasedLineMaterialOptions = XU, UU
      }
      parse(UU, XU, zU) {
        const cU = UU.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), cU.color && (this.color = cU.color), cU.colorDistributionType && (this.colorsDistributionType = cU.colorDistributionType), cU.colorsSampling && (this.colorsSampling = cU.colorsSampling), cU.colorMode && (this.colorMode = cU.colorMode), cU.useColors && (this.useColors = cU.useColors), cU.visibility && (this.visibility = cU.visibility), cU.useDash && (this.useDash = cU.useDash), cU.dashCount && (this.dashCount = cU.dashCount), cU.dashRatio && (this.dashRatio = cU.dashRatio), cU.dashOffset && (this.dashOffset = cU.dashOffset), cU.width && (this.width = cU.width), cU.sizeAttenuation && (this.sizeAttenuation = cU.sizeAttenuation), cU.resolution && (this.resolution = cU.resolution), cU.colors ? this.colorsTexture = Gc.CreateColorsTexture(`${this.name}-colors-texture`, cU.colors, this.colorsSampling, this.nS()) : this.colorsTexture = Gc.PrepareEmptyColorsTexture(XU), this._cameraFacing = cU.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var Cc, wc, qc;
    ec.ForceGLSL = !1,
      function(UU) {
        UU[UU.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", UU[UU.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(Cc || (Cc = {})),
      function(UU) {
        UU[UU.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", UU[UU.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", UU[UU.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(wc || (wc = {})),
      function(UU) {
        UU[UU.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", UU[UU.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", UU[UU.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", UU[UU.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", UU[UU.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(qc || (qc = {}));
    class Oc extends Rc.b {
      constructor(UU, XU, zU) {
        super(UU, XU, null, null, !1, !1), this.name = UU, this._options = zU, this._lazy = !1, this._updatable = !1, this._engine = XU.qp(), this._lazy = zU.lazy ?? !1, this._updatable = zU.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = zU.colorPointers ?? [], this._widths = zU.widths ?? new Array(zU.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(UU) {
        let XU = 0;
        for (const cU of this._points) XU += cU.length;
        const zU = XU / 3 * 2 - this._widths.length;
        for (let cU = 0; cU < zU; cU++) this._widths.push(UU)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.ip && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(UU, XU) {
        for (const zU of UU) this._points.push(zU);
        this._lazy || this.setPoints(this._points, XU)
      }
      dispose(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(UU, XU)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(UU) {
        this._uvs = UU instanceof Float32Array ? UU : new Float32Array(UU), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(UU) {
        this.material instanceof ec && this.material.setDefine("GREASED_LINE_USE_OFFSETS", UU?.length > 0), this._offsets = UU, this._offsetsBuffer ? this._offsetsBuffer.update(UU) : this._createOffsetsBuffer(UU)
      }
      get widths() {
        return this._widths
      }
      set widths(UU) {
        this._widths = UU, this._lazy || this._widthsBuffer && this._widthsBuffer.update(UU)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(UU) {
        this._colorPointers = UU, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(UU)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof ec) return this.material;
        const UU = this.material?.pluginManager?.getPlugin(Zc.GREASED_LINE_MATERIAL_NAME);
        return UU || void 0
      }
      get points() {
        const UU = [];
        return Wc.c.DeepCopy(this._points, UU), UU
      }
      setPoints(UU, XU) {
        this._points = Gc.ConvertPoints(UU, XU?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), XU?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, XU)
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
      serialize(UU) {
        super.serialize(UU), UU.type = this.getClassName(), UU.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = new Pc.c;
        return XU.positions = this._vertexPositions, XU.indices = this._indices, XU.uvs = this._uvs, UU && (XU.normals = [], Pc.c.ComputeNormals(this._vertexPositions, this._indices, XU.normals)), XU.applyToMesh(this, this._options.updatable), XU
      }
      _createOffsetsBuffer(UU) {
        const XU = this._scene.qp(),
          zU = new MU.d(XU, UU, this._updatable, 3);
        this.setVerticesBuffer(zU.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = zU
      }
    }
    class Sc {
      constructor(UU, XU) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = UU, this.wasAddedByNoopNode = XU
      }
      getIndicesAccessor(UU, XU, zU, cU, yU) {
        return this._indicesAccessorMap.get(UU)?.get(XU)?.get(zU)?.get(cU)?.get(yU)
      }
      setIndicesAccessor(UU, XU, zU, cU, yU, QU) {
        let AU = this._indicesAccessorMap.get(UU);
        AU || (AU = new Map, this._indicesAccessorMap.set(UU, AU));
        let FU = AU.get(XU);
        FU || (FU = new Map, AU.set(XU, FU));
        let oU = FU.get(zU);
        oU || (oU = new Map, FU.set(zU, oU));
        let DU = oU.get(cU);
        DU || (DU = new Map, oU.set(cU, DU)), DU.set(yU, QU)
      }
      pushExportedNode(UU) {
        this._exportedNodes.has(UU) || this._exportedNodes.add(UU)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(UU) {
        return this._vertexBufferViewMap.get(UU)
      }
      setVertexBufferView(UU, XU) {
        this._vertexBufferViewMap.set(UU, XU)
      }
      setRemappedBufferView(UU, XU, zU) {
        this._remappedBufferView.set(UU, new Map), this._remappedBufferView.get(UU).set(XU, zU)
      }
      getRemappedBufferView(UU, XU) {
        return this._remappedBufferView.get(UU)?.get(XU)
      }
      getVertexAccessor(UU, XU, zU) {
        return this._vertexAccessorMap.get(UU)?.get(XU)?.get(zU)
      }
      setVertexAccessor(UU, XU, zU, cU) {
        let yU = this._vertexAccessorMap.get(UU);
        yU || (yU = new Map, this._vertexAccessorMap.set(UU, yU));
        let QU = yU.get(XU);
        QU || (QU = new Map, yU.set(XU, QU)), QU.set(zU, cU)
      }
      hasVertexColorAlpha(UU) {
        return this._vertexMapColorAlpha.get(UU) || !1
      }
      setHasVertexColorAlpha(UU, XU) {
        return this._vertexMapColorAlpha.set(UU, XU)
      }
      getMesh(UU) {
        return this._meshMap.get(UU)
      }
      setMesh(UU, XU) {
        this._meshMap.set(UU, XU)
      }
      bindMorphDataToMesh(UU, XU) {
        const zU = this._meshMorphTargetMap.get(UU) || [];
        this._meshMorphTargetMap.set(UU, zU), -1 === zU.indexOf(XU) && zU.push(XU)
      }
      getMorphTargetsFromMesh(UU) {
        return this._meshMorphTargetMap.get(UU)
      }
    }
    class rc {
      _ApplyExtension(UU, XU, zU, cU) {
        if (zU >= XU.length) return Promise.resolve(UU);
        const yU = cU(XU[zU], UU);
        return yU ? yU.then((async UU => UU ? await this._ApplyExtension(UU, XU, zU + 1, cU) : null)) : this._ApplyExtension(UU, XU, zU + 1, cU)
      }
      _ApplyExtensions(UU, XU) {
        const zU = [];
        for (const cU of rc._ExtensionNames) zU.push(this._extensions[cU]);
        return this._ApplyExtension(UU, zU, 0, XU)
      }
      _extensionsPostExportNodeAsync(UU, XU, zU, cU, yU) {
        return this._ApplyExtensions(XU, ((XU, QU) => XU.postExportNodeAsync && XU.postExportNodeAsync(UU, QU, zU, cU, yU, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(UU, XU, zU) {
        return this._ApplyExtensions(XU, ((XU, cU) => XU.postExportMaterialAsync && XU.postExportMaterialAsync(UU, cU, zU)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        return await Promise.all(rc._ExtensionNames.map((async yU => {
          const QU = this._extensions[yU];
          if (QU.postExportMaterialAdditionalTexturesAsync) {
            const yU = await QU.postExportMaterialAdditionalTexturesAsync(UU, XU, zU);
            cU.push(...yU)
          }
        }))), cU
      }
      _extensionsPostExportTextures(UU, XU, zU) {
        for (const cU of rc._ExtensionNames) {
          const yU = this._extensions[cU];
          yU.postExportTexture && yU.postExportTexture(UU, XU, zU)
        }
      }
      _extensionsPostExportMeshPrimitive(UU) {
        for (const XU of rc._ExtensionNames) {
          const zU = this._extensions[XU];
          zU.postExportMeshPrimitive && zU.postExportMeshPrimitive(UU, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const UU of rc._ExtensionNames) {
          const XU = this._extensions[UU];
          XU.preGenerateBinaryAsync && await XU.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(UU) {
        for (const XU of rc._ExtensionNames) {
          const zU = this._extensions[XU];
          zU.enabled && UU(zU)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((UU => {
          var XU, zU, cU;
          UU.wasUsed && ((XU = this._glTF).extensionsUsed || (XU.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(UU.name) && this._glTF.extensionsUsed.push(UU.name), UU.required && ((zU = this._glTF).extensionsRequired || (zU.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(UU.name) && this._glTF.extensionsRequired.push(UU.name)), (cU = this._glTF).extensions || (cU.extensions = {}), UU.onExporting && UU.onExporting())
        }))
      }
      _loadExtensions() {
        for (const UU of rc._ExtensionNames) {
          const XU = rc._ExtensionFactories[UU](this);
          this._extensions[UU] = XU
        }
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : aU.b.LastCreatedScene,
          XU = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${pU.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new wz(this), this._extensions = {}, this._bufferManager = new zc, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !UU) throw new Error("No scene available to export");
        this._babylonScene = UU, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: UU => UU?.oq?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...XU
        }, this._loadExtensions()
      }
      dispose() {
        for (const UU in this._extensions) {
          this._extensions[UU].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        rc.UnregisterExtension(UU) && yU.Tools.Warn(`Extension with the name ${UU} already exists`), rc._ExtensionFactories[UU] = XU;
        const cU = zU ?? 0;
        rc._ExtensionOrders[UU] = cU;
        let QU = rc._ExtensionNames.length;
        for (let yU = 0; yU < rc._ExtensionNames.length; yU++) {
          const UU = rc._ExtensionNames[yU];
          if (cU < rc._ExtensionOrders[UU]) {
            QU = yU;
            break
          }
        }
        rc._ExtensionNames.splice(QU, 0, UU)
      }
      static UnregisterExtension(UU) {
        if (!rc._ExtensionFactories[UU]) return !1;
        delete rc._ExtensionFactories[UU], delete rc._ExtensionOrders[UU];
        const XU = rc._ExtensionNames.indexOf(UU);
        return -1 !== XU && rc._ExtensionNames.splice(XU, 1), !0
      }
      _generateJSON(UU, XU, zU) {
        const cU = {
          byteLength: UU
        };
        return cU.byteLength && (this._glTF.buffers = [cU]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.sa = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (cU.uri = XU + ".bin"), zU ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(UU) {
        const XU = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const zU = this._generateJSON(XU.byteLength, UU, !0),
          cU = new Blob([XU], {
            type: "application/octet-stream"
          }),
          yU = UU + ".gltf",
          QU = UU + ".bin",
          AU = new DU;
        if (AU.files[yU] = zU, AU.files[QU] = cU, this._imageData)
          for (const FU in this._imageData) AU.files[FU] = this._imageData[FU];
        return AU
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(UU) {
        const XU = UU % 4;
        return 0 === XU ? XU : 4 - XU
      }
      async generateGLBAsync(UU) {
        this._shouldUseGlb = !0;
        const XU = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const zU = this._generateJSON(XU.byteLength),
          cU = UU + ".glb";
        let yU, QU = zU.length;
        if ("undefined" !== typeof TextEncoder) {
          yU = (new TextEncoder).encode(zU), QU = yU.length
        }
        const AU = this._getPadding(QU),
          FU = this._getPadding(XU.byteLength),
          oU = 28 + QU + AU + XU.byteLength + FU,
          EU = new Uc(oU);
        if (EU.writeUInt32(1179937895), EU.writeUInt32(2), EU.writeUInt32(oU), EU.writeUInt32(QU + AU), EU.writeUInt32(1313821514), yU) EU.writeTypedArray(yU);
        else {
          const UU = "_".charCodeAt(0);
          for (let XU = 0; XU < QU; ++XU) {
            const cU = zU.charCodeAt(XU);
            cU != zU.codePointAt(XU) ? EU.writeUInt8(UU) : EU.writeUInt8(cU)
          }
        }
        for (let DU = 0; DU < AU; ++DU) EU.writeUInt8(32);
        EU.writeUInt32(XU.byteLength + FU), EU.writeUInt32(5130562), EU.writeTypedArray(XU);
        for (let DU = 0; DU < FU; ++DU) EU.writeUInt8(0);
        const YU = new DU;
        return YU.files[cU] = new Blob([EU.getOutputData()], {
          type: "application/octet-stream"
        }), YU
      }
      _setNodeTransformation(UU, XU, zU) {
        if (XU.getPivotPoint().equalsWithEpsilon(fz, Sz.c) || yU.Tools.Warn("Pivot points are not supported in the glTF serializer"), !XU.position.equalsWithEpsilon(fz, Sz.c)) {
          const yU = cU.TmpVectors.Sp[0].YL(XU.position);
          zU && mz(yU), UU.translation = yU.cyU()
        }
        XU.RY.equalsWithEpsilon(Hz, Sz.c) || (UU.scale = XU.RY.cyU());
        const QU = XU.rotationQuaternion?.clone() || cU.Quaternion.FromEulerAngles(XU.rotation.x, XU.rotation.y, XU.rotation.z);
        QU.equalsWithEpsilon(iz, Sz.c) || (zU && lz(QU), UU.rotation = QU.normalize().cyU())
      }
      _setCameraTransformation(UU, XU, zU) {
        const yU = cU.TmpVectors.Sp[0],
          QU = cU.TmpVectors.Quaternion[0],
          AU = XU.getWorldMatrix();
        if (XU.parent) {
          const UU = XU.parent.getWorldMatrix().invertToRef(cU.TmpVectors.Matrix[0]);
          AU.multiplyToRef(UU, cU.TmpVectors.Matrix[1]).decompose(void 0, QU, yU)
        } else AU.decompose(void 0, QU, yU);
        yU.equalsWithEpsilon(fz, Sz.c) || (zU && mz(yU), UU.translation = yU.cyU()), zU && lz(QU), this._babylonScene.useRightHandedSystem || xz(QU), QU.equalsWithEpsilon(iz, Sz.c) || (UU.rotation = QU.cyU())
      }
      _listAvailableCameras() {
        for (const UU of this._babylonScene.cameras) {
          const XU = {
            type: UU.mode === cc.d.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (UU.name && (XU.name = UU.name), "perspective" === XU.type) XU.perspective = {
            aspectRatio: UU.qp().getAspectRatio(UU),
            yfov: UU.fovMode === cc.d.FOVMODE_VERTICAL_FIXED ? UU.fov : UU.fov * UU.qp().getAspectRatio(UU),
            znear: UU.minZ,
            zfar: UU.maxZ
          };
          else if ("orthographic" === XU.type) {
            const zU = UU.orthoLeft && UU.orthoRight ? .5 * (UU.orthoRight - UU.orthoLeft) : .5 * UU.qp().getRenderWidth(),
              cU = UU.orthoBottom && UU.orthoTop ? .5 * (UU.orthoTop - UU.orthoBottom) : .5 * UU.qp().getRenderHeight();
            XU.orthographic = {
              xmag: zU,
              ymag: cU,
              znear: UU.minZ,
              zfar: UU.maxZ
            }
          }
          this._camerasMap.set(UU, XU)
        }
      }
      _exportAndAssignCameras() {
        const UU = Array.from(this._camerasMap.values());
        for (const XU of UU) {
          const UU = this._nodesCameraMap.get(XU);
          if (void 0 !== UU) {
            this._cameras.push(XU);
            for (const XU of UU) XU.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const UU of this._babylonScene.skeletons) {
          if (UU.bones.length <= 0) continue;
          const XU = {
            joints: []
          };
          this._skinMap.set(UU, XU)
        }
      }
      _exportAndAssignSkeletons(UU) {
        for (const zU of this._babylonScene.skeletons) {
          if (zU.bones.length <= 0) continue;
          const QU = this._skinMap.get(zU);
          if (void 0 == QU) continue;
          const AU = {};
          let FU = -1;
          for (let UU = 0; UU < zU.bones.length; ++UU) {
            const XU = zU.bones[UU],
              cU = XU.getIndex() ?? UU; - 1 !== cU && (AU[cU] = XU, cU > FU && (FU = cU))
          }
          const oU = [];
          for (let zU = 0; zU <= FU; ++zU) {
            const FU = AU[zU],
              DU = FU.getTransformNode(),
              EU = DU ? this._nodeMap.get(DU) : void 0;
            if (void 0 === EU) {
              yU.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            QU.joints.push(EU);
            const YU = FU.getAbsoluteInverseBindMatrix().clone();
            UU.has(DU) && (XU = YU, rz.invertToRef(cU.TmpVectors.Matrix[0]).multiplyToRef(XU, XU).multiplyToRef(rz, XU)), oU.push(YU)
          }
          const DU = this._nodesSkinMap.get(QU);
          if (QU.joints.length > 0 && void 0 !== DU) {
            const UU = new Float32Array(16 * oU.length);
            oU.forEach(((XU, zU) => {
              UU.set(XU.m, 16 * zU)
            }));
            const XU = this._bufferManager.createBufferView(UU);
            this._accessors.push(this._bufferManager.createAccessor(XU, "MAT4", 5126, oU.length)), QU.inverseBindMatrices = this._accessors.length - 1, this._skins.push(QU);
            const zU = this._skins.length - 1;
            for (const cU of DU) cU.skin = zU
          }
        }
        var XU
      }
      async _exportSceneAsync() {
        const UU = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const XU = this._options.metadataSelector(this._babylonScene.metadata);
          XU && (UU.extras = XU)
        }
        const XU = new Array,
          zU = new Array,
          cU = new Array,
          yU = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let QU;
        if (yU && !this._options.includeCoordinateSystemConversionNodes)
          for (const DU of this._babylonScene.animationGroups)
            for (const UU of DU.targetedAnimations) {
              const XU = UU.target;
              XU instanceof YU.c && !XU.parent && (QU ?? (QU = new Set)).add(XU)
            }
        for (const DU of this._babylonScene.rootNodes) {
          const UU = DU.animations,
            AU = !!UU && UU.length > 0 || QU?.has(DU);
          yU && !this._options.includeCoordinateSystemConversionNodes && uz(DU, this._babylonScene.useRightHandedSystem) && !AU ? cU.push(...DU.getChildren()) : this._babylonScene.useRightHandedSystem ? XU.push(DU) : zU.push(DU)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const AU = new Sc(!0, !1);
        UU.nodes.push(...await this._exportNodesAsync(zU, AU));
        const FU = new Sc(!1, !1);
        UU.nodes.push(...await this._exportNodesAsync(XU, FU));
        const oU = new Sc(!1, !0);
        UU.nodes.push(...await this._exportNodesAsync(cU, oU)), UU.nodes.length && this._scenes.push(UU), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(AU.getNodesSet()), this._babylonScene.animationGroups.length && Yc._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, AU.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(UU) {
        return this._nodeMap.get(UU)
      }
      _getAnimationIndex(UU) {
        return this._animationGroupMap.get(UU)
      }
      _getCameraIndex(UU) {
        const XU = this._camerasMap.get(UU);
        if (!XU) return;
        const zU = this._cameras.indexOf(XU);
        return zU >= 0 ? zU : void 0
      }
      _getMaterialIndex(UU) {
        return this._materialMap.get(UU)
      }
      _getRootIndex(UU, XU) {
        switch (UU) {
          case "nodes":
            return this._getNodeIndex(XU);
          case "animations":
            return this._getAnimationIndex(XU);
          case "cameras":
            return this._getCameraIndex(XU);
          case "materials":
            return this._getMaterialIndex(XU);
          case "meshes": {
            const UU = this._getNodeIndex(XU);
            return void 0 === UU ? void 0 : this._nodes[UU]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(XU)?.index;
          case "images": {
            const UU = this._materialExporter.getTextureInfo(XU)?.index;
            if (void 0 === UU) return;
            const zU = this._textures[UU];
            for (const XU of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const UU = zU?.extensions?.[XU]?.source;
              if ("number" === typeof UU) return UU
            }
            return zU?.source
          }
          case "samplers": {
            const UU = this._materialExporter.getTextureInfo(XU)?.index;
            return void 0 === UU ? void 0 : this._textures[UU]?.sampler
          }
          case "skins": {
            const UU = this._skinMap.get(XU),
              zU = UU ? this._skins.indexOf(UU) : -1;
            return zU >= 0 ? zU : void 0
          }
          case "scenes":
            return XU === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(UU, XU, zU) {
        const cU = this._nodes[UU];
        if (!cU) throw new Error(`Cannot write ${XU}: glTF node ${UU} does not exist.`);
        cU.extensions || (cU.extensions = {}), cU.extensions[XU] = zU
      }
      _shouldExportNode(UU) {
        let XU = this._shouldExportNodeMap.get(UU);
        return void 0 === XU && (XU = this._options.shouldExportNode(UU), this._shouldExportNodeMap.set(UU, XU)), XU
      }
      async _exportNodesAsync(UU, XU) {
        const zU = new Array;
        this._exportBuffers(UU, XU);
        for (const cU of UU) await this._exportNodeAsync(cU, zU, XU);
        return zU
      }
      _collectBuffers(UU, XU, zU, cU, yU) {
        if (this._shouldExportNode(UU) && UU instanceof NU.b && UU.geometry) {
          const QU = UU.geometry.getVertexBuffers();
          if (QU)
            for (const cU in QU) {
              if (!sz(cU)) continue;
              const AU = QU[cU];
              yU.setHasVertexColorAlpha(AU, UU.hasVertexAlpha);
              const FU = AU._buffer,
                oU = XU.get(FU) || [];
              XU.set(FU, oU), -1 === oU.indexOf(AU) && oU.push(AU);
              const DU = zU.get(AU) || [];
              zU.set(AU, DU), -1 === DU.indexOf(UU) && DU.push(UU)
            }
          const AU = UU.morphTargetManager;
          if (AU)
            for (let XU = 0; XU < AU.numTargets; XU++) {
              const zU = AU.getTarget(XU),
                yU = cU.get(zU) || [];
              cU.set(zU, yU), -1 === yU.indexOf(UU) && yU.push(UU)
            }
        }
        for (const QU of UU.getChildren()) this._collectBuffers(QU, XU, zU, cU, yU)
      }
      _exportBuffers(UU, XU) {
        const zU = new Map,
          cU = new Map,
          yU = new Map;
        for (const FU of UU) this._collectBuffers(FU, zU, cU, yU, XU);
        const QU = Array.from(zU.keys());
        for (const FU of QU) {
          const UU = FU.getData();
          if (!UU) throw new Error("Buffer data is not available");
          const yU = zU.get(FU);
          if (!yU) continue;
          const QU = yU[0].byteStride;
          if (yU.some((UU => UU.byteStride !== QU))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const AU = Kz(UU).slice();
          for (const XU of yU) {
            const UU = cU.get(XU),
              {
                byteOffset: zU,
                byteStride: yU,
                componentCount: QU,
                type: FU,
                count: oU,
                normalized: DU,
                kind: YU
              } = vz(XU, UU);
            switch (YU) {
              case EU.e.NormalKind:
              case EU.e.TangentKind:
                (0, qz.j)(AU, zU, yU, QU, FU, oU, DU, (UU => {
                  const XU = Math.sqrt(UU[0] * UU[0] + UU[1] * UU[1] + UU[2] * UU[2]);
                  if (XU > 0) {
                    const zU = 1 / XU;
                    UU[0] *= zU, UU[1] *= zU, UU[2] *= zU
                  }
                }));
                break;
              case EU.e.ColorKind: {
                const XU = UU.filter((UU => UU.material instanceof Qc.StandardMaterial || null == UU.material)).length;
                if (0 == XU) break;
                if (XU != UU.length) {
                  eU.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                FU == EU.e.UNSIGNED_BYTE && eU.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const cU = new tU.Color3,
                  YU = new tU.e,
                  NU = this._babylonScene.qp().useExactSrgbConversions;
                (0, qz.j)(AU, zU, yU, QU, FU, oU, DU, (UU => {
                  3 === UU.length ? (cU.zY(UU, 0), cU.toLinearSpaceToRef(cU, NU), cU.toArray(UU, 0)) : (YU.zY(UU, 0), YU.toLinearSpaceToRef(YU, NU), YU.toArray(UU, 0))
                }))
              }
            }
          }
          if (XU.convertToRightHanded) {
            for (const UU of yU) {
              const XU = cU.get(UU),
                {
                  byteOffset: zU,
                  byteStride: yU,
                  componentCount: QU,
                  type: FU,
                  count: oU,
                  normalized: DU,
                  kind: YU
                } = vz(UU, XU);
              switch (YU) {
                case EU.e.PositionKind:
                case EU.e.NormalKind:
                case EU.e.TangentKind:
                  (0, qz.j)(AU, zU, yU, QU, FU, oU, DU, (UU => {
                    UU[0] = -UU[0]
                  }))
              }
            }
            XU.convertedToRightHandedBuffers.set(FU, AU)
          }
          const oU = this._bufferManager.createBufferView(AU, QU);
          XU.setVertexBufferView(FU, oU);
          const DU = new Map;
          for (const XU of yU) {
            const UU = cU.get(XU),
              {
                kind: zU,
                totalVertices: yU
              } = vz(XU, UU);
            switch (zU) {
              case EU.e.MatricesIndicesKind:
              case EU.e.MatricesIndicesExtraKind:
                if (XU.type == EU.e.FLOAT) {
                  const UU = XU.getFloatData(yU);
                  null !== UU && DU.set(XU, UU)
                }
            }
          }
          0 !== DU.size && eU.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const YU = Array.from(DU.keys());
          for (const zU of YU) {
            const UU = DU.get(zU);
            if (!UU) continue;
            const cU = UU.some((UU => UU >= 256)),
              yU = new(cU ? Uint16Array : Uint8Array)(UU.length);
            for (let XU = 0; XU < UU.length; XU++) yU[XU] = UU[XU];
            const QU = this._bufferManager.createBufferView(yU, 4 * (cU ? 2 : 1));
            XU.setRemappedBufferView(FU, zU, QU)
          }
        }
        const AU = Array.from(yU.keys());
        for (const FU of AU) {
          const UU = yU.get(FU);
          if (!UU) continue;
          const zU = Nc(FU, UU[0], this._bufferManager, this._bufferViews, this._accessors, XU.convertToRightHanded);
          for (const cU of UU) XU.bindMorphDataToMesh(cU, zU)
        }
      }
      async _exportNodeAsync(UU, XU, zU) {
        let cU = this._nodeMap.get(UU);
        if (void 0 !== cU) return void(XU.includes(cU) || XU.push(cU));
        const yU = await this._createNodeAsync(UU, zU);
        if (yU) {
          cU = this._nodes.length, this._nodes.push(yU), this._nodeMap.set(UU, cU), zU.pushExportedNode(UU), XU.push(cU);
          const QU = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            AU = [];
          this._babylonScene.animationGroups.length || (Yc._CreateMorphTargetAnimationFromMorphTargetAnimations(UU, QU, AU, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, zU.convertToRightHanded, this._options.shouldExportAnimation), UU.animations.length && Yc._CreateNodeAnimationFromNodeAnimations(UU, QU, AU, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, zU.convertToRightHanded, this._options.shouldExportAnimation)), QU.channels.length && QU.samplers.length && this._animations.push(QU), AU.forEach((UU => {
            UU.channels.length && UU.samplers.length && this._animations.push(UU)
          }))
        }
        const QU = yU ? [] : XU;
        for (const AU of UU.getChildren()) await this._exportNodeAsync(AU, QU, zU);
        yU && QU.length && (yU.children = QU)
      }
      async _createNodeAsync(UU, XU) {
        if (!this._shouldExportNode(UU)) return null;
        const zU = {};
        if (UU.name && (zU.name = UU.name), UU.metadata) {
          const XU = this._options.metadataSelector(UU.metadata);
          XU && (zU.extras = XU)
        }
        if (UU instanceof YU.c && (this._setNodeTransformation(zU, UU, XU.convertToRightHanded), UU instanceof NU.b)) {
          const cU = UU instanceof IU.e ? UU.KyU : UU;
          if (cU.uB && cU.uB.length > 0 && (zU.mesh = await this._exportMeshAsync(cU, XU)), UU.skeleton) {
            const XU = this._skinMap.get(UU.skeleton);
            void 0 !== XU && (void 0 === this._nodesSkinMap.get(XU) && this._nodesSkinMap.set(XU, []), this._nodesSkinMap.get(XU)?.push(zU))
          }
        }
        if (UU instanceof Oz.i) {
          const cU = this._camerasMap.get(UU);
          if (cU) {
            void 0 === this._nodesCameraMap.get(cU) && this._nodesCameraMap.set(cU, []), this._setCameraTransformation(zU, UU, XU.convertToRightHanded);
            const yU = UU.parent;
            if (null !== yU && jz(UU, yU)) {
              const UU = this._nodeMap.get(yU);
              if (void 0 !== UU) {
                const XU = this._nodes[UU];
                return Jz(zU, XU), this._nodesCameraMap.get(cU)?.push(XU), null
              }
            }
            this._nodesCameraMap.get(cU)?.push(zU)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", zU, UU, this._nodeMap, XU.convertToRightHanded) ? zU : (eU.b.Warn(`Not exporting node ${UU.name}`), null)
      }
      _exportIndices(UU, XU, zU, cU, yU, AU, FU, oU, DU) {
        let EU = null;
        DU.mode = function(UU) {
          switch (UU) {
            case QU.c.TriangleFillMode:
              return 4;
            case QU.c.TriangleStripDrawMode:
              return 5;
            case QU.c.TriangleFanDrawMode:
              return 6;
            case QU.c.PointListDrawMode:
            case QU.c.PointFillMode:
              return 0;
            case QU.c.LineLoopDrawMode:
              return 2;
            case QU.c.LineListDrawMode:
              return 1;
            case QU.c.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${UU}`)
        }(AU);
        const YU = FU !== QU.c.CounterClockWiseSideOrientation && function(UU) {
          switch (UU) {
            case QU.c.TriangleFillMode:
            case QU.c.TriangleStripDrawMode:
            case QU.c.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(AU);
        if (YU) {
          if (AU === QU.c.TriangleStripDrawMode || AU === QU.c.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const FU = XU ? new Uint32Array(cU) : new Uint16Array(cU);
          if (UU)
            for (let XU = 0; XU + 2 < cU; XU += 3) FU[XU] = UU[zU + XU] + yU, FU[XU + 1] = UU[zU + XU + 2] + yU, FU[XU + 2] = UU[zU + XU + 1] + yU;
          else
            for (let UU = 0; UU + 2 < cU; UU += 3) FU[UU] = UU, FU[UU + 1] = UU + 2, FU[UU + 2] = UU + 1;
          EU = FU
        } else if (UU && 0 !== yU) {
          const QU = XU ? new Uint32Array(cU) : new Uint16Array(cU);
          for (let XU = 0; XU < cU; XU++) QU[XU] = UU[zU + XU] + yU;
          EU = QU
        } else UU && (EU = function(UU, XU, zU, cU) {
          let yU = UU;
          return 0 === XU && zU === UU.length || (yU = Array.isArray(UU) ? UU.slice(XU, XU + zU) : UU.subarray(XU, XU + zU)), yU instanceof Int32Array ? new Uint32Array(yU.buffer, yU.byteOffset, yU.length) : Array.isArray(yU) ? cU ? new Uint32Array(yU) : new Uint16Array(yU) : yU
        }(UU, zU, cU, XU));
        if (EU) {
          let QU = oU.getIndicesAccessor(UU, zU, cU, yU, YU);
          if (void 0 === QU) {
            const AU = this._bufferManager.createBufferView(EU),
              FU = XU ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(AU, "SCALAR", FU, cU, 0)), QU = this._accessors.length - 1, oU.setIndicesAccessor(UU, zU, cU, yU, YU, QU)
          }
          DU.indices = QU
        }
      }
      _exportVertexBuffer(UU, XU, zU, cU, yU, QU) {
        const AU = UU.getKind();
        if (!sz(AU)) return;
        if (AU.startsWith("uv") && !this._options.exportUnusedUVs && (!XU || !this._materialNeedsUVsSet.has(XU))) return;
        let FU = yU.getVertexAccessor(UU, zU, cU);
        if (void 0 === FU) {
          const XU = yU.convertedToRightHandedBuffers.get(UU._buffer) || UU._buffer.getData(),
            QU = AU === EU.e.PositionKind ? function(UU, XU, zU, cU) {
              const {
                byteOffset: yU,
                byteStride: QU,
                type: AU,
                normalized: FU
              } = XU, oU = XU.getSize(), DU = new Array(oU).fill(1 / 0), EU = new Array(oU).fill(-1 / 0);
              return (0, qz.j)(UU, yU + zU * QU, QU, oU, AU, cU * oU, FU, (UU => {
                for (let XU = 0; XU < oU; XU++) DU[XU] = Math.min(DU[XU], UU[XU]), EU[XU] = Math.max(EU[XU], UU[XU])
              })), {
                min: DU,
                max: EU
              }
            }(XU, UU, zU, cU) : void 0,
            oU = (AU === EU.e.MatricesIndicesKind || AU === EU.e.MatricesIndicesExtraKind) && UU.type === EU.e.FLOAT,
            DU = oU ? EU.e.UNSIGNED_BYTE : UU.type,
            YU = oU ? void 0 : UU.normalized,
            NU = oU ? yU.getRemappedBufferView(UU._buffer, UU) : yU.getVertexBufferView(UU._buffer),
            IU = UU.byteOffset + zU * UU.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(NU, function(UU, XU) {
            if (UU == EU.e.ColorKind) return XU ? "VEC4" : "VEC3";
            switch (UU) {
              case EU.e.PositionKind:
              case EU.e.NormalKind:
                return "VEC3";
              case EU.e.TangentKind:
              case EU.e.MatricesIndicesKind:
              case EU.e.MatricesIndicesExtraKind:
              case EU.e.MatricesWeightsKind:
              case EU.e.MatricesWeightsExtraKind:
                return "VEC4";
              case EU.e.UVKind:
              case EU.e.UV2Kind:
              case EU.e.UV3Kind:
              case EU.e.UV4Kind:
              case EU.e.UV5Kind:
              case EU.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${UU}`)
          }(AU, yU.hasVertexColorAlpha(UU)), DU, cU, IU, QU, YU)), FU = this._accessors.length - 1, yU.setVertexAccessor(UU, zU, cU, FU)
        }
        QU.attributes[function(UU) {
          switch (UU) {
            case EU.e.PositionKind:
              return "POSITION";
            case EU.e.NormalKind:
              return "NORMAL";
            case EU.e.TangentKind:
              return "TANGENT";
            case EU.e.ColorKind:
              return "COLOR_0";
            case EU.e.UVKind:
              return "TEXCOORD_0";
            case EU.e.UV2Kind:
              return "TEXCOORD_1";
            case EU.e.UV3Kind:
              return "TEXCOORD_2";
            case EU.e.UV4Kind:
              return "TEXCOORD_3";
            case EU.e.UV5Kind:
              return "TEXCOORD_4";
            case EU.e.UV6Kind:
              return "TEXCOORD_5";
            case EU.e.MatricesIndicesKind:
              return "JOINTS_0";
            case EU.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case EU.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case EU.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${UU}`)
        }(AU)] = FU
      }
      async _exportMaterialAsync(UU, XU, zU, cU) {
        let yU = this._materialMap.get(UU);
        if (void 0 === yU) {
          const cU = XU && Object.keys(XU).some((UU => UU.startsWith("uv")));
          if ((UU = UU instanceof yc.b ? UU.HUU[zU.materialIndex] : UU) instanceof RX) yU = await this._materialExporter.exportPBRMaterialAsync(UU, cU);
          else if (UU instanceof Qc.StandardMaterial) yU = await this._materialExporter.exportStandardMaterialAsync(UU, cU);
          else {
            if (!(UU instanceof TX)) return void eU.b.Warn(`Unsupported material '${UU.name}' with type ${UU.getClassName()}`);
            yU = await this._materialExporter.exportOpenPBRMaterialAsync(UU, cU)
          }
          this._materialMap.set(UU, yU)
        }
        cU.material = yU
      }
      async _exportMeshAsync(UU, XU) {
        let zU = XU.getMesh(UU);
        if (void 0 !== zU) return zU;
        const cU = {
          primitives: []
        };
        zU = this._meshes.length, this._meshes.push(cU), XU.setMesh(UU, zU);
        const yU = UU.isUnIndexed ? null : UU.yyU(),
          AU = UU.geometry?.getVertexBuffers(),
          FU = XU.getMorphTargetsFromMesh(UU),
          oU = UU instanceof Ic.d,
          DU = UU instanceof Oc,
          EU = UU.uB;
        if (AU && EU && EU.length > 0)
          for (const YU of EU) {
            const zU = {
                attributes: {}
              },
              EU = YU.Hp() || this._babylonScene.defaultMaterial;
            if (DU) {
              const XU = {
                  name: EU.name
                },
                cU = UU,
                yU = tU.Color3.White(),
                QU = cU.material?.alpha ?? 1,
                AU = cU.greasedLineMaterial?.color ?? yU;
              (!AU.equalsWithEpsilon(yU, Sz.c) || QU < 1) && (XU.pbrMetallicRoughness = {
                baseColorFactor: [...AU.cyU(), QU]
              }), this._materials.push(XU), zU.material = this._materials.length - 1
            } else if (oU) {
              const XU = {
                  name: EU.name
                },
                cU = UU;
              (!cU.color.equalsWithEpsilon(tU.Color3.White(), Sz.c) || cU.alpha < 1) && (XU.pbrMetallicRoughness = {
                baseColorFactor: [...cU.color.cyU(), cU.alpha]
              }), this._materials.push(XU), zU.material = this._materials.length - 1
            } else await this._exportMaterialAsync(EU, AU, YU, zU);
            const NU = oU || DU ? QU.c.LineListDrawMode : UU.overrideRenderingFillMode ?? EU.fillMode;
            let IU = EU._getEffectiveOrientation(UU);
            XU.wasAddedByNoopNode && !UU.nS().useRightHandedSystem && (IU = IU === QU.c.ClockWiseSideOrientation ? QU.c.CounterClockWiseSideOrientation : QU.c.ClockWiseSideOrientation), this._exportIndices(yU, yU ? (0, qz.b)(yU, YU.indexCount, YU.indexStart, YU.verticesStart) : YU.verticesCount > 65535, yU ? YU.indexStart : YU.verticesStart, yU ? YU.indexCount : YU.verticesCount, -YU.verticesStart, NU, IU, XU, zU);
            for (const UU of Object.values(AU)) this._exportVertexBuffer(UU, EU, YU.verticesStart, YU.verticesCount, XU, zU);
            if (FU) {
              zU.targets = [];
              for (const UU of FU) zU.targets.push(UU.attributes)
            }
            cU.primitives.push(zU), this._extensionsPostExportMeshPrimitive(zU)
          }
        if (FU) {
          cU.weights = [], cU.extras || (cU.extras = {}), cU.extras.targetNames = [];
          for (const UU of FU) cU.weights.push(UU.influence), cU.extras.targetNames.push(UU.name)
        }
        return zU
      }
    }
    rc._ExtensionNames = new Array, rc._ExtensionFactories = {}, rc._ExtensionOrders = {};
    class uc {
      static async GLTFAsync(UU, XU, zU) {
        zU && zU.exportWithoutWaitingForScene || await UU.whenReadyAsync();
        const cU = new rc(UU, zU),
          yU = await cU.generateGLTFAsync(XU.replace(/\.[^/.]+$/, ""));
        return cU.dispose(), yU
      }
      static async GLBAsync(UU, XU, zU) {
        zU && zU.exportWithoutWaitingForScene || await UU.whenReadyAsync();
        const cU = new rc(UU, zU),
          yU = await cU.generateGLBAsync(XU.replace(/\.[^/.]+$/, ""));
        return cU.dispose(), yU
      }
    }
    const fc = "EXT_mesh_gpu_instancing";

    function ic(UU, XU) {
      const zU = new Float32Array(3 * XU);
      for (let cU = 0; cU < XU; cU++) zU[3 * cU + 0] = UU[4 * cU + 0], zU[3 * cU + 1] = UU[4 * cU + 1], zU[3 * cU + 2] = UU[4 * cU + 2];
      return zU
    }
    class Hc {
      constructor(UU) {
        this.name = fc, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(UU, XU, zU, cU, yU, QU) {
        return await new Promise((UU => {
          if (XU && zU instanceof Rc.b && zU.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const UU = HU.q.Zero(),
              cU = HU.f.Identity(),
              AU = HU.q.One(),
              FU = zU.thinInstanceGetWorldMatrices(),
              oU = HU.l.Sp[2],
              DU = HU.l.Quaternion[1],
              EU = HU.l.Sp[3];
            let YU = !1,
              NU = !1,
              IU = !1;
            const pU = new Float32Array(3 * zU.BUU),
              aU = new Float32Array(4 * zU.BUU),
              tU = new Float32Array(3 * zU.BUU);
            let gU = 0;
            for (const XU of FU) XU.decompose(EU, DU, oU), yU && (mz(oU), lz(DU)), pU.set(oU.cyU(), 3 * gU), aU.set(DU.normalize().cyU(), 4 * gU), tU.set(EU.cyU(), 3 * gU), YU = YU || !oU.equalsWithEpsilon(UU), NU = NU || !DU.equalsWithEpsilon(cU), IU = IU || !EU.equalsWithEpsilon(AU), gU++;
            const kU = {
              attributes: {}
            };
            YU && (kU.attributes.TRANSLATION = this._buildAccessor(pU, "VEC3", zU.BUU, QU)), NU && (kU.attributes.ROTATION = this._buildAccessor(aU, "VEC4", zU.BUU, QU)), IU && (kU.attributes.SCALE = this._buildAccessor(tU, "VEC3", zU.BUU, QU));
            let GU = zU._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (GU) {
              const UU = zU.BUU,
                XU = "VEC3";
              zU.hasVertexAlpha && GU.length === 4 * UU ? (this._instanceColorWarned || (eU.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), GU = ic(GU, UU)) : GU.length === 4 * UU && (GU = ic(GU, UU)), GU.length === 3 * UU && (kU.attributes._COLOR_0 = this._buildAccessor(GU, XU, UU, QU))
            }
            XU.extensions = XU.extensions || {}, XU.extensions[fc] = kU
          }
          UU(XU)
        }))
      }
      _buildAccessor(UU, XU, zU, cU) {
        const yU = cU.createBufferView(UU),
          QU = cU.createAccessor(yU, XU, 5126, zU);
        return this._exporter._accessors.push(QU), this._exporter._accessors.length - 1
      }
    }
    let Mc = !1;

    function vc() {
      Mc || (Mc = !0, rc.RegisterExtension(fc, (UU => new Hc(UU))))
    }
    zU(41563);
    vc();
    var Vc = zU(44544);

    function sc(UU, XU, zU, cU) {
      const yU = UU;
      let QU = null,
        AU = null,
        FU = null,
        oU = null;
      const DU = {},
        EU = XU.find((UU => "POSITION" === UU.dracoName));
      if (!EU) throw new Error("Draco: Missing position attribute for encoding.");
      if (!zU) {
        const UU = EU.data.length / EU.size;
        zU = new(UU > 65535 ? Uint32Array : Uint16Array)(UU);
        for (let XU = 0; XU < UU; XU++) zU[XU] = XU
      }
      try {
        QU = new yU.Encoder, AU = new yU.MeshBuilder, FU = new yU.Mesh, AU.AddFacesToMesh(FU, zU.length / 3, zU);
        const UU = new Map([
          [Float32Array, (UU, XU, zU, cU, yU, QU) => UU.AddFloatAttribute(XU, zU, cU, yU, QU)],
          [Uint32Array, (UU, XU, zU, cU, yU, QU) => UU.AddUInt32Attribute(XU, zU, cU, yU, QU)],
          [Uint16Array, (UU, XU, zU, cU, yU, QU) => UU.AddUInt16Attribute(XU, zU, cU, yU, QU)],
          [Uint8Array, (UU, XU, zU, cU, yU, QU) => UU.AddUInt8Attribute(XU, zU, cU, yU, QU)],
          [Int32Array, (UU, XU, zU, cU, yU, QU) => UU.AddInt32Attribute(XU, zU, cU, yU, QU)],
          [Int16Array, (UU, XU, zU, cU, yU, QU) => UU.AddInt16Attribute(XU, zU, cU, yU, QU)],
          [Int8Array, (UU, XU, zU, cU, yU, QU) => UU.AddInt8Attribute(XU, zU, cU, yU, QU)]
        ]);
        for (const zU of XU) {
          zU.data instanceof Uint8ClampedArray && (zU.data = new Uint8Array(zU.data));
          const XU = UU.get(zU.data.constructor),
            oU = zU.data.length / zU.size;
          DU[zU.kind] = XU(AU, FU, yU[zU.dracoName], oU, zU.size, zU.data), cU.quantizationBits && cU.quantizationBits[zU.dracoName] && QU.SetAttributeQuantization(yU[zU.dracoName], cU.quantizationBits[zU.dracoName])
        }
        cU.method && QU.SetEncodingMethod(yU[cU.method]), void 0 !== cU.encodeSpeed && void 0 !== cU.decodeSpeed && QU.SetSpeedOptions(cU.encodeSpeed, cU.decodeSpeed), oU = new yU.DracoInt8Array;
        const EU = QU.EncodeMeshToDracoBuffer(FU, oU);
        if (EU <= 0) throw new Error("Draco: Failed to encode.");
        const YU = new Int8Array(EU);
        for (let XU = 0; XU < EU; XU++) YU[XU] = oU.GetValue(XU);
        return {
          data: YU,
          attributeIds: DU
        }
      } finally {
        FU && yU.destroy(FU), AU && yU.destroy(AU), QU && yU.destroy(QU), oU && yU.destroy(oU)
      }
    }

    function nc() {
      let UU;
      onmessage = XU => {
        const zU = XU.data;
        switch (zU.id) {
          case "init": {
            zU.url && importScripts(zU.url);
            const XU = zU.wasmBinary ? {
              wasmBinary: zU.wasmBinary
            } : {};
            UU = DracoEncoderModule(XU), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!UU) throw new Error("Draco: Encoder module is not available.");
            UU.then((UU => {
              const XU = sc(UU, zU.attributes, zU.indices, zU.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: XU
              }, XU ? [XU.data.buffer] : void 0)
            })).catch((UU => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: UU.message
              })
            }))
        }
      }
    }
    class mc {
      constructor(UU) {
        if (UU.workerPool) return void(this._workerPoolPromise = Promise.resolve(UU.workerPool));
        const XU = UU.wasmBinary,
          zU = UU.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          cU = zU && "function" === typeof Worker && "function" === typeof URL,
          yU = cU || !UU.jsModule,
          QU = UU.wasmUrl && UU.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: yU ? WX.j.GetBabylonScriptURL(UU.wasmUrl, !0) : "",
            wasmBinaryPromise: XU ? Promise.resolve(XU) : WX.j.LoadFileAsync(WX.j.GetBabylonScriptURL(UU.wasmBinaryUrl, !0))
          } : {
            url: yU ? WX.j.GetBabylonScriptURL(UU.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        cU ? this._workerPoolPromise = QU.wasmBinaryPromise.then((UU => {
          const XU = this._getWorkerContent(),
            cU = URL.createObjectURL(new Blob([XU], {
              type: "application/javascript"
            }));
          return new Vc.b(zU, (() => async function(UU, XU, zU) {
            return await new Promise(((cU, yU) => {
              const QU = XU => {
                  UU.removeEventListener("error", QU), UU.removeEventListener("message", AU), yU(XU)
                },
                AU = XU => {
                  "initDone" === XU.data.id && (UU.removeEventListener("error", QU), UU.removeEventListener("message", AU), cU(UU))
                };
              if (UU.addEventListener("error", QU), UU.addEventListener("message", AU), XU) {
                const cU = XU.slice(0);
                UU.postMessage({
                  id: "init",
                  url: zU,
                  wasmBinary: cU
                }, [cU])
              } else UU.postMessage({
                id: "init",
                url: zU
              })
            }))
          }(new Worker(cU), UU, QU.url)))
        })) : this._modulePromise = QU.wasmBinaryPromise.then((async XU => {
          if (!this._isModuleAvailable() && !UU.jsModule) {
            if (!QU.url) throw new Error("Draco codec module is not available");
            await WX.j.LoadBabylonScriptAsync(QU.url)
          }
          return await this._createModuleAsync(XU, UU.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((UU => {
          UU.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function lc() {
      const UU = UU => !!UU && "object" === typeof UU;
      for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
      return zU.reduce(((XU, zU) => {
        const cU = Object.keys(zU);
        for (const yU of cU) {
          const cU = XU[yU],
            QU = zU[yU];
          Array.isArray(cU) && Array.isArray(QU) ? XU[yU] = cU.concat(QU) : UU(cU) && UU(QU) ? XU[yU] = lc(cU, QU) : XU[yU] = QU
        }
        return XU
      }), {})
    }

    function xc(UU) {
      return UU === MU.h.PositionKind ? "POSITION" : UU === MU.h.NormalKind ? "NORMAL" : UU === MU.h.ColorKind ? "COLOR" : UU.startsWith(MU.h.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const Jc = {
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
    class jc extends mc {
      static get DefaultAvailable() {
        return !!((UU = jc.DefaultConfiguration).wasmUrl && (UU.wasmBinary || UU.wasmBinaryUrl) && "object" === typeof WebAssembly || UU.fallbackUrl);
        var UU
      }
      static get Default() {
        return jc._Default ?? (jc._Default = new jc), jc._Default
      }
      static ResetDefault(UU) {
        jc._Default && (UU || jc._Default.dispose(), jc._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(UU, XU) {
        return {
          module: await (XU || DracoEncoderModule)({
            wasmBinary: UU
          })
        }
      }
      _getWorkerContent() {
        return `${sc}(${nc})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : jc.DefaultConfiguration)
      }
      async _encodeAsync(UU, XU, zU) {
        const cU = zU ? lc(Jc, zU) : Jc;
        if (this._workerPoolPromise) {
          const zU = await this._workerPoolPromise;
          return await new Promise(((yU, QU) => {
            zU.push(((zU, AU) => {
              const FU = UU => {
                  zU.removeEventListener("error", FU), zU.removeEventListener("message", oU), QU(UU), AU()
                },
                oU = UU => {
                  "encodeMeshSuccess" === UU.data.id ? (zU.removeEventListener("error", FU), zU.removeEventListener("message", oU), yU(UU.data.encodedMeshData), AU()) : "encodeMeshError" === UU.data.id && (zU.removeEventListener("error", FU), zU.removeEventListener("message", oU), QU(new Error(UU.data.errorMessage)), AU())
                };
              zU.addEventListener("error", FU), zU.addEventListener("message", oU);
              const DU = [];
              for (const XU of UU) DU.push(XU.data.buffer);
              XU && DU.push(XU.buffer), zU.postMessage({
                id: "encodeMesh",
                attributes: UU,
                indices: XU,
                options: cU
              }, DU)
            }))
          }))
        }
        if (this._modulePromise) {
          return sc((await this._modulePromise).module, UU, XU, cU)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(UU, XU) {
        if (0 == UU.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        UU instanceof Rc.b && UU.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === XU?.method && (eU.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), XU.method = "MESH_SEQUENTIAL_ENCODING");
        const zU = function(UU) {
            let XU = UU.yyU(void 0, !0);
            return !XU || XU instanceof Uint32Array || XU instanceof Uint16Array || (XU = ((0, qz.b)(XU, XU.length) ? Uint32Array : Uint16Array).from(XU)), XU
          }(UU),
          cU = function(UU, XU) {
            const zU = [];
            for (const cU of UU.getVerticesDataKinds()) {
              if (XU?.includes(cU)) {
                if (cU === MU.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const yU = UU.getVertexBuffer(cU),
                QU = yU.getSize(),
                AU = (0, qz.s)(yU.getData(), QU, yU.type, yU.byteOffset, yU.byteStride, UU.getTotalVertices(), !0);
              zU.push({
                kind: cU,
                dracoName: xc(cU),
                size: QU,
                data: AU
              })
            }
            return zU
          }(UU, XU?.excludedAttributes);
        return await this._encodeAsync(cU, zU, XU)
      }
    }
    jc.DefaultConfiguration = {
      wasmUrl: `${WX.j._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${WX.j._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${WX.j._DefaultCdnUrl}/draco_encoder.js`
    }, jc._Default = null;
    const Kc = "KHR_draco_mesh_compression";
    class bc {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = Kc, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === UU.options.meshCompressionMethod && jc.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(UU, XU, zU) {
        if (!this.enabled) return;
        if (4 !== UU.mode && 5 !== UU.mode) return void eU.b.Warn("Cannot compress primitive with mode " + UU.mode + ".");
        const cU = [],
          yU = [];
        let QU = null;
        if (void 0 !== UU.indices) {
          const AU = zU[UU.indices],
            FU = XU.getBufferView(AU);
          QU = XU.getData(FU).slice(), cU.push(FU), yU.push(AU)
        }
        const AU = [];
        for (const [EU, YU] of Object.entries(UU.attributes)) {
          const UU = zU[YU],
            QU = XU.getBufferView(UU),
            oU = Vz(UU.type),
            DU = (0, qz.s)(XU.getData(QU), oU, UU.componentType, UU.byteOffset || 0, QU.byteStride || (0, qz.r)(UU.componentType) * oU, UU.count, !0);
          AU.push({
            kind: EU,
            dracoName: (FU = EU, "POSITION" === FU ? "POSITION" : "NORMAL" === FU ? "NORMAL" : FU.startsWith("COLOR") ? "COLOR" : FU.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Vz(UU.type),
            data: DU
          }), cU.push(QU), yU.push(UU)
        }
        var FU;
        const oU = {
            method: UU.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          DU = jc.Default._encodeAsync(AU, QU, oU).then((zU => {
            const QU = {
                bufferView: -1,
                attributes: zU.attributeIds
              },
              AU = XU.createBufferView(zU.data);
            XU.setBufferView(QU, AU);
            for (const UU of cU) this._bufferViewsUsed.add(UU);
            for (const UU of yU) this._accessorsUsed.add(UU);
            UU.extensions || (UU.extensions = {}), UU.extensions[Kc] = QU
          })).catch((UU => {
            eU.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + UU.message)
          }));
        this._encodePromises.push(DU), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(UU) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((XU => {
          UU.getPropertiesWithBufferView(XU).every((UU => this._accessorsUsed.has(UU))) && UU.removeBufferView(XU)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let Tc = !1;

    function hc() {
      Tc || (Tc = !0, rc.RegisterExtension(Kc, (UU => new bc(UU))))
    }
    hc();
    var Uy = zU(44249);
    const Xy = "KHR_lights_punctual",
      zy = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      cy = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      yy = HU.q.Backward();
    class Qy {
      constructor(UU) {
        this.name = Xy, this.enabled = !0, this.required = !1, this._exporter = UU
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Xy] = this._lights
      }
      async postExportNodeAsync(UU, XU, zU, cU, yU) {
        return await new Promise((QU => {
          if (!(zU instanceof Ec.b)) return void QU(XU);
          const AU = zU.getTypeID() == Ec.b.LIGHTTYPEID_POINTLIGHT ? "point" : zU.getTypeID() == Ec.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : zU.getTypeID() == Ec.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!AU || !(zU instanceof Uy.e)) return eU.b.Warn(`${UU}: Light ${zU.name} is not supported in ${Xy}`), void QU(XU);
          if (zU.falloffType !== Ec.b.FALLOFF_GLTF && eU.b.Warn(`${UU}: Light falloff for ${zU.name} does not match the ${Xy} specification!`), !zU.position.SFU(0, 0, 0)) {
            const UU = HU.l.Sp[0].YL(zU.position);
            yU && mz(UU), XU.translation = UU.cyU()
          }
          if ("point" !== AU) {
            const UU = zU.direction.normalizeToRef(HU.l.Sp[0]);
            yU && mz(UU);
            const cU = HU.f.FromUnitVectorsToRef(yy, UU, HU.l.Quaternion[0]);
            HU.f.IsIdentity(cU) || (XU.rotation = cU.cyU())
          }
          const FU = {
            type: AU,
            name: zU.name,
            color: zU.diffuse.cyU(),
            intensity: zU.intensity,
            range: zU.range
          };
          if (bz(FU, zy), "spot" === AU) {
            const UU = zU;
            FU.spot = {
              innerConeAngle: UU.innerAngle / 2,
              outerConeAngle: UU.angle / 2
            }, bz(FU.spot, cy)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(FU);
          const oU = {
              light: this._lights.lights.length - 1
            },
            DU = zU.parent;
          if (DU && jz(zU, DU)) {
            const UU = cU.get(DU);
            if (UU) {
              const zU = this._exporter._nodes[UU];
              return Jz(XU, zU), zU.extensions || (zU.extensions = {}), zU.extensions[Xy] = oU, void QU(null)
            }
          }
          XU.extensions || (XU.extensions = {}), XU.extensions[Xy] = oU, QU(XU)
        }))
      }
    }
    let Ay = !1;

    function Fy() {
      Ay || (Ay = !0, rc.RegisterExtension(Xy, (UU => new Qy(UU))))
    }
    Fy();
    const oy = "KHR_interactivity";
    class Dy {
      constructor(UU) {
        this._exporter = UU, this.name = oy, this.enabled = !!UU.options.khrInteractivity, this.required = UU.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var UU, XU, zU;
        const cU = this._exporter.options.khrInteractivity;
        if (!cU) return;
        const yU = cU.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: UU => this._exporter._getNodeIndex(UU),
          getAnimationIndex: UU => this._exporter._getAnimationIndex(UU),
          getCameraIndex: UU => this._exporter._getCameraIndex(UU),
          getMaterialIndex: UU => this._exporter._getMaterialIndex(UU),
          getRootIndex: (UU, XU) => this._exporter._getRootIndex(UU, XU),
          setNodeExtension: (UU, XU, zU) => this._exporter._setNodeExtension(UU, XU, zU)
        });
        this._exporter._glTF.extensions[oy] = yU;
        for (const QU of cU.additionalExtensionsUsed)(UU = this._exporter._glTF).extensionsUsed || (UU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(QU) && this._exporter._glTF.extensionsUsed.push(QU);
        for (const QU of cU.additionalExtensionsRequired)(XU = this._exporter._glTF).extensionsUsed || (XU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(QU) && this._exporter._glTF.extensionsUsed.push(QU), (zU = this._exporter._glTF).extensionsRequired || (zU.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(QU) && this._exporter._glTF.extensionsRequired.push(QU)
      }
    }
    let Ey = !1;

    function Yy() {
      Ey || (Ey = !0, rc.RegisterExtension(oy, (UU => new Dy(UU)), 200))
    }
    Yy();
    const Ny = "EXT_lights_area",
      Iy = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      py = {
        aspect: 1
      },
      ay = HU.q.Backward();
    class ty {
      constructor(UU) {
        this.name = Ny, this.enabled = !0, this.required = !1, this._exporter = UU
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Ny] = this._lights
      }
      async postExportNodeAsync(UU, XU, zU, cU, yU) {
        return await new Promise((QU => {
          if (!(zU instanceof Ec.b)) return void QU(XU);
          const AU = zU.getTypeID() == Ec.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!AU) return eU.b.Warn(`${UU}: Light ${zU.name} is not supported in ${Ny}`), void QU(XU);
          const FU = zU;
          if (FU.falloffType !== Ec.b.FALLOFF_GLTF && eU.b.Warn(`${UU}: Light falloff for ${zU.name} does not match the ${Ny} specification!`), !FU.position.SFU(0, 0, 0)) {
            const UU = HU.l.Sp[0].YL(FU.position);
            yU && mz(UU), XU.translation = UU.cyU()
          }
          const oU = HU.q.Forward();
          yU && mz(oU);
          const DU = HU.f.FromUnitVectorsToRef(ay, oU, HU.l.Quaternion[0]);
          HU.f.IsIdentity(DU) || (XU.rotation = DU.cyU());
          const EU = {
            type: AU,
            name: FU.name,
            color: FU.diffuse.cyU(),
            intensity: FU.intensity,
            size: FU.height,
            rect: {
              aspect: FU.width / FU.height
            }
          };
          bz(EU, Iy), EU.rect && bz(EU.rect, py), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(EU);
          const YU = {
              light: this._lights.lights.length - 1
            },
            NU = zU.parent;
          if (NU && jz(FU, NU)) {
            const UU = cU.get(NU);
            if (UU) {
              const zU = this._exporter._nodes[UU];
              return Jz(XU, zU), zU.extensions || (zU.extensions = {}), zU.extensions[Ny] = YU, void QU(null)
            }
          }
          XU.extensions || (XU.extensions = {}), XU.extensions[Ny] = YU, QU(XU)
        }))
      }
    }
    let gy = !1;

    function ky() {
      gy || (gy = !0, rc.RegisterExtension(Ny, (UU => new ty(UU))))
    }
    ky();
    const Gy = "KHR_materials_anisotropy";
    class By {
      constructor(UU) {
        this.name = Gy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof RX) {
          if (zU.anisotropy.isEnabled && !zU.anisotropy.legacy) return zU.anisotropy.texture && cU.push(zU.anisotropy.texture), cU
        } else if (zU instanceof TX && zU.specularRoughnessAnisotropy > 0) {
          const UU = function(UU) {
            const XU = UU.specularRoughnessAnisotropyTexture,
              zU = UU.geometryTangentTexture;
            return `${XU&&XU.getInternalTexture()?XU.getInternalTexture().uniqueId:"NoStrength"}_${zU&&zU.getInternalTexture()?zU.getInternalTexture().uniqueId:"NoTangent"}`
          }(zU);
          if (this._anisoTexturesMap[UU]) cU.push(this._anisoTexturesMap[UU]);
          else {
            const XU = await async function(UU) {
              const XU = UU.nS(),
                zU = UU.specularRoughnessAnisotropyTexture,
                cU = UU.geometryTangentTexture;
              return zU || cU ? await Az("AnisotropyTexture", Dz(cU ? Fz(cU, 0) : oz(1), cU ? Fz(cU, 1) : oz(0), zU ? Fz(zU, 0) : oz(1)), XU) : null
            }(zU);
            XU && (cU.push(XU), this._anisoTexturesMap[UU] = XU)
          }
          return cU
        }
        return []
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          var cU;
          if (zU instanceof RX) {
            if (!zU.anisotropy.isEnabled || zU.anisotropy.legacy) return void UU(XU);
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            const cU = this._exporter._materialExporter.getTextureInfo(zU.anisotropy.texture),
              yU = {
                anisotropyStrength: zU.anisotropy.intensity,
                anisotropyRotation: zU.anisotropy.angle,
                anisotropyTexture: cU ?? void 0
              };
            null !== yU.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[Gy] = yU
          } else if (zU instanceof TX && zU.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            let yU = zU.specularRoughnessTexture;
            zU._useRoughnessFromMetallicTextureGreen && (yU = zU.baseMetalnessTexture);
            const QU = this._anisoTexturesMap[zU.id];
            if (!yU && !QU) {
              let cU = zU.specularRoughness,
                yU = zU.specularRoughnessAnisotropy;
              if (!zU._useGltfStyleAnisotropy) {
                const UU = function(UU, XU) {
                  const zU = UU * UU,
                    cU = zU * Math.sqrt(2 / (1 + (1 - XU) * (1 - XU))),
                    yU = (1 - XU) * cU;
                  return {
                    newBaseRoughness: Math.sqrt(yU),
                    newAnisotropyStrength: Math.min(Math.sqrt((cU - zU) / Math.max(1 - zU, 1e-4)), 1)
                  }
                }(zU.specularRoughness, zU.specularRoughnessAnisotropy);
                cU = UU.newBaseRoughness, yU = UU.newAnisotropyStrength
              }
              XU.pbrMetallicRoughness && (XU.pbrMetallicRoughness.roughnessFactor = cU);
              const QU = {
                anisotropyStrength: yU,
                anisotropyRotation: zU.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return XU.extensions[Gy] = QU, UU(XU)
            }
            const AU = QU ? this._exporter._materialExporter.getTextureInfo(QU) : null,
              FU = {
                anisotropyStrength: zU.specularRoughnessAnisotropy,
                anisotropyRotation: zU.geometryTangentAngle,
                anisotropyTexture: AU || void 0,
                extensions: {}
              };
            zU._useGltfStyleAnisotropy || (XU.extensions.KHR_materials_openpbr = {}, (cU = this._exporter._glTF).extensionsUsed || (cU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[Gy] = FU
          }
          UU(XU)
        }))
      }
    }
    let Zy = !1;

    function Ry() {
      Zy || (Zy = !0, rc.RegisterExtension(Gy, (UU => new By(UU))))
    }
    Ry();
    const Py = "KHR_materials_clearcoat";

    function Wy(UU, XU) {
      const zU = new wU.e(XU.name, XU.nS());
      return zU._texture = UU, zU.coordinatesIndex = XU.coordinatesIndex, XU instanceof wU.e && (zU.uOffset = XU.uOffset, zU.vOffset = XU.vOffset, zU.uScale = XU.uScale, zU.vScale = XU.vScale, zU.wAng = XU.wAng), zU.wrapU = XU.wrapU, zU.wrapV = XU.wrapV, zU
    }
    class dy {
      constructor(UU) {
        this.name = Py, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = UU
      }
      dispose() {
        for (const UU of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[UU].dispose()
        }
        this._mergedTexturesMap = {};
        for (const UU of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[UU].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof RX) {
          if (zU.clearCoat.isEnabled) return zU.clearCoat.texture && cU.push(zU.clearCoat.texture), !zU.clearCoat.useRoughnessFromMainTexture && zU.clearCoat.textureRoughness && cU.push(zU.clearCoat.textureRoughness), zU.clearCoat.bumpTexture && cU.push(zU.clearCoat.bumpTexture), cU
        } else if (zU instanceof TX && zU.coatWeight > 0) {
          let UU = !1;
          if (zU.coatWeightTexture ? zU.coatRoughnessTexture ? zU._useCoatRoughnessFromGreenChannel && zU.coatWeightTexture.getInternalTexture() === zU.coatRoughnessTexture.getInternalTexture() ? (cU.push(zU.coatWeightTexture), cU.push(zU.coatRoughnessTexture)) : UU = !0 : cU.push(zU.coatWeightTexture) : zU.coatRoughnessTexture && (zU._useCoatRoughnessFromGreenChannel ? cU.push(zU.coatRoughnessTexture) : UU = !0), UU) {
            const UU = function(UU) {
              const XU = UU.coatWeightTexture,
                zU = XU && XU.getInternalTexture() ? XU.getInternalTexture().uniqueId : "NoCoat",
                cU = UU.coatRoughnessTexture;
              return `${zU}_${cU&&cU.getInternalTexture()?cU.getInternalTexture().uniqueId:"NoRoughness"}`
            }(zU);
            if (!this._cachedInternalTexturesMap[UU]) {
              const XU = await async function(UU) {
                const XU = UU.nS(),
                  zU = UU.coatWeightTexture,
                  cU = UU.coatRoughnessTexture;
                return zU || cU ? (await Az("CoatTexture", Dz(zU ? Fz(zU, 0) : oz(1), cU ? Fz(cU, UU._useCoatRoughnessFromGreenChannel ? 1 : 0) : oz(1)), XU)).getInternalTexture() : null
              }(zU);
              XU && (this._cachedInternalTexturesMap[UU] = XU)
            }
            this._cachedInternalTexturesMap[UU] && (zU.coatWeightTexture && (this._mergedTexturesMap[zU.coatWeightTexture.uniqueId] = Wy(this._cachedInternalTexturesMap[UU], zU.coatWeightTexture), cU.push(this._mergedTexturesMap[zU.coatWeightTexture.uniqueId])), zU.coatRoughnessTexture && (this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId] = Wy(this._cachedInternalTexturesMap[UU], zU.coatRoughnessTexture), cU.push(this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId])))
          }
          return zU.geometryCoatNormalTexture && cU.push(zU.geometryCoatNormalTexture), cU
        }
        return []
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          if (zU instanceof RX) {
            if (!zU.clearCoat.isEnabled) return void UU(XU);
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            const cU = this._exporter._materialExporter.getTextureInfo(zU.clearCoat.texture);
            let yU;
            yU = zU.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(zU.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(zU.clearCoat.textureRoughness), zU.clearCoat.isTintEnabled && WX.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${zU.name}`), zU.clearCoat.remapF0OnInterfaceChange && WX.j.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${zU.name}`);
            const QU = this._exporter._materialExporter.getTextureInfo(zU.clearCoat.bumpTexture),
              AU = {
                clearcoatFactor: zU.clearCoat.intensity,
                clearcoatTexture: cU ?? void 0,
                clearcoatRoughnessFactor: zU.clearCoat.roughness,
                clearcoatRoughnessTexture: yU ?? void 0,
                clearcoatNormalTexture: QU ?? void 0
              };
            null === AU.clearcoatTexture && null === AU.clearcoatRoughnessTexture && null === AU.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[Py] = AU
          } else if (zU instanceof TX) {
            if (0 == zU.coatWeight) return void UU(XU);
            let cU, yU, QU, AU;
            this._wasUsed = !0, XU.extensions = XU.extensions || {}, zU.coatWeightTexture && (cU = this._mergedTexturesMap[zU.coatWeightTexture.uniqueId], yU = this._exporter._materialExporter.getTextureInfo(cU)), zU.coatRoughnessTexture && (QU = this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId], AU = this._exporter._materialExporter.getTextureInfo(QU)), zU.coatColorTexture && WX.j.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${zU.name}`);
            const FU = this._exporter._materialExporter.getTextureInfo(zU.geometryCoatNormalTexture),
              oU = {
                clearcoatFactor: zU.coatWeight,
                clearcoatTexture: yU ?? void 0,
                clearcoatRoughnessFactor: zU.coatRoughness,
                clearcoatRoughnessTexture: AU ?? void 0,
                clearcoatNormalTexture: FU ?? void 0
              };
            null === oU.clearcoatTexture && null === oU.clearcoatRoughnessTexture && null === oU.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[Py] = oU
          }
          UU(XU)
        }))
      }
    }
    let Ly = !1;

    function ey() {
      Ly || (Ly = !0, rc.RegisterExtension(Py, (UU => new dy(UU))))
    }
    ey();
    const Cy = "KHR_materials_coat";

    function wy(UU) {
      const XU = UU.coatRoughnessAnisotropyTexture,
        zU = UU.geometryCoatTangentTexture;
      return `${XU&&XU.getInternalTexture()?XU.getInternalTexture().uniqueId:"NoStrength"}_${zU&&zU.getInternalTexture()?zU.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function qy(UU, XU) {
      const zU = new wU.e(XU.name, XU.nS());
      return zU._texture = UU, zU.coordinatesIndex = XU.coordinatesIndex, XU instanceof wU.e && (zU.uOffset = XU.uOffset, zU.vOffset = XU.vOffset, zU.uScale = XU.uScale, zU.vScale = XU.vScale, zU.wAng = XU.wAng), zU.wrapU = XU.wrapU, zU.wrapV = XU.wrapV, zU
    }
    class Oy {
      constructor(UU) {
        this.name = Cy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = UU
      }
      dispose() {
        for (const UU of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[UU].dispose()
        }
        this._mergedTexturesMap = {};
        for (const UU of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[UU].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof RX) {
          if (zU.clearCoat.isEnabled) return zU.clearCoat.texture && cU.push(zU.clearCoat.texture), !zU.clearCoat.useRoughnessFromMainTexture && zU.clearCoat.textureRoughness && cU.push(zU.clearCoat.textureRoughness), zU.clearCoat.bumpTexture && cU.push(zU.clearCoat.bumpTexture), zU.clearCoat.tintTexture && cU.push(zU.clearCoat.tintTexture), cU
        } else if (zU instanceof TX && zU.coatWeight > 0) {
          let UU = !1;
          if (zU.coatWeightTexture ? zU.coatRoughnessTexture ? zU._useCoatRoughnessFromGreenChannel && zU.coatWeightTexture.getInternalTexture() === zU.coatRoughnessTexture.getInternalTexture() ? (cU.push(zU.coatWeightTexture), cU.push(zU.coatRoughnessTexture)) : UU = !0 : cU.push(zU.coatWeightTexture) : zU.coatRoughnessTexture && (zU._useCoatRoughnessFromGreenChannel ? cU.push(zU.coatRoughnessTexture) : UU = !0), UU) {
            const UU = function(UU) {
              const XU = UU.coatWeightTexture,
                zU = XU && XU.getInternalTexture() ? XU.getInternalTexture().uniqueId : "NoCoat",
                cU = UU.coatRoughnessTexture;
              return `${zU}_${cU&&cU.getInternalTexture()?cU.getInternalTexture().uniqueId:"NoRoughness"}`
            }(zU);
            if (!this._cachedInternalTexturesMap[UU]) {
              const XU = await async function(UU) {
                const XU = UU.nS(),
                  zU = UU.coatWeightTexture,
                  cU = UU.coatRoughnessTexture;
                return zU || cU ? (await Az("CoatTexture", Dz(zU ? Fz(zU, 0) : oz(1), cU ? Fz(cU, UU._useCoatRoughnessFromGreenChannel ? 1 : 0) : oz(1)), XU)).getInternalTexture() : null
              }(zU);
              XU && (this._cachedInternalTexturesMap[UU] = XU)
            }
            this._cachedInternalTexturesMap[UU] && (zU.coatWeightTexture && (this._mergedTexturesMap[zU.coatWeightTexture.uniqueId] = qy(this._cachedInternalTexturesMap[UU], zU.coatWeightTexture), cU.push(this._mergedTexturesMap[zU.coatWeightTexture.uniqueId])), zU.coatRoughnessTexture && (this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId] = qy(this._cachedInternalTexturesMap[UU], zU.coatRoughnessTexture), cU.push(this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId])))
          }
          if (zU.geometryCoatNormalTexture && cU.push(zU.geometryCoatNormalTexture), zU.coatColorTexture && cU.push(zU.coatColorTexture), zU.coatRoughnessAnisotropy > 0) {
            const UU = wy(zU);
            if (this._mergedTexturesMap[UU]) cU.push(this._mergedTexturesMap[UU]);
            else {
              const XU = await async function(UU) {
                const XU = UU.nS(),
                  zU = UU.coatRoughnessAnisotropyTexture,
                  cU = UU.geometryCoatTangentTexture;
                return zU || cU ? await Az("AnisotropyTexture", Dz(cU ? Fz(cU, 0) : oz(1), cU ? Fz(cU, 1) : oz(0), zU ? Fz(zU, 0) : oz(1)), XU) : null
              }(zU);
              XU && (cU.push(XU), this._mergedTexturesMap[UU] = XU)
            }
            return cU
          }
          return cU
        }
        return []
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          var cU;
          if (zU instanceof RX) {
            if (!zU.clearCoat.isEnabled) return void UU(XU);
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            const cU = this._exporter._materialExporter.getTextureInfo(zU.clearCoat.texture);
            let yU, QU;
            yU = zU.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(zU.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(zU.clearCoat.textureRoughness), zU.clearCoat.isTintEnabled && (QU = this._exporter._materialExporter.getTextureInfo(zU.clearCoat.tintTexture));
            const AU = this._exporter._materialExporter.getTextureInfo(zU.clearCoat.bumpTexture),
              FU = zU.clearCoat.indexOfRefraction,
              oU = {
                coatFactor: zU.clearCoat.intensity,
                coatTexture: cU ?? void 0,
                coatRoughnessFactor: zU.clearCoat.roughness,
                coatRoughnessTexture: yU ?? void 0,
                coatNormalTexture: AU ?? void 0,
                coatColorFactor: zU.clearCoat.tintColor.cyU(),
                coatColorTexture: QU ?? void 0,
                coatIor: 1.5 !== FU ? FU : void 0
              };
            null === oU.coatTexture && null === oU.coatRoughnessTexture && null === oU.coatRoughnessTexture && null === oU.coatColorTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[Cy] = oU
          } else if (zU instanceof TX) {
            if (0 == zU.coatWeight) return void UU(XU);
            let yU, QU, AU, FU;
            this._wasUsed = !0, XU.extensions = XU.extensions || {}, zU.coatWeightTexture && (yU = this._mergedTexturesMap[zU.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[zU.coatWeightTexture.uniqueId] : zU.coatWeightTexture, QU = this._exporter._materialExporter.getTextureInfo(yU)), zU.coatRoughnessTexture && (AU = this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[zU.coatRoughnessTexture.uniqueId] : zU.coatRoughnessTexture, FU = this._exporter._materialExporter.getTextureInfo(AU));
            const oU = this._exporter._materialExporter.getTextureInfo(zU.geometryCoatNormalTexture),
              DU = this._exporter._materialExporter.getTextureInfo(zU.coatColorTexture),
              EU = zU.coatIor,
              YU = zU.coatDarkening,
              NU = zU.coatRoughnessTexture,
              IU = wy(zU),
              pU = this._mergedTexturesMap[IU];
            let aU, tU = 0,
              gU = 0;
            if (zU.coatRoughnessAnisotropy > 0) {
              if (NU || pU) {
                const UU = pU ? this._exporter._materialExporter.getTextureInfo(pU) : null;
                tU = zU.coatRoughnessAnisotropy, gU = zU.geometryCoatTangentAngle, aU = UU || void 0
              } else {
                let UU = zU.coatRoughness,
                  cU = zU.coatRoughnessAnisotropy;
                if (!zU._useGltfStyleAnisotropy) {
                  const XU = function(UU, XU) {
                    const zU = UU * UU,
                      cU = zU * Math.sqrt(2 / (1 + (1 - XU) * (1 - XU))),
                      yU = (1 - XU) * cU;
                    return {
                      newBaseRoughness: Math.sqrt(yU),
                      newAnisotropyStrength: Math.min(Math.sqrt((cU - zU) / Math.max(1 - zU, 1e-4)), 1)
                    }
                  }(zU.coatRoughness, zU.coatRoughnessAnisotropy);
                  UU = XU.newBaseRoughness, cU = XU.newAnisotropyStrength
                }
                XU.pbrMetallicRoughness && (XU.pbrMetallicRoughness.roughnessFactor = UU), tU = cU, gU = zU.geometryCoatTangentAngle + .5 * Math.PI, aU = void 0
              }
              zU._useGltfStyleAnisotropy || (XU.extensions.KHR_materials_openpbr = {}, (cU = this._exporter._glTF).extensionsUsed || (cU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const kU = {
              coatFactor: zU.coatWeight,
              coatTexture: QU ?? void 0,
              coatRoughnessFactor: zU.coatRoughness,
              coatRoughnessTexture: FU ?? void 0,
              coatNormalTexture: oU ?? void 0,
              coatColorFactor: zU.coatColor.cyU(),
              coatColorTexture: DU ?? void 0,
              coatIor: 1.5 !== EU ? EU : void 0,
              coatDarkeningFactor: 1 !== YU ? YU : void 0,
              coatAnisotropyRotation: gU,
              coatAnisotropyStrength: tU,
              coatAnisotropyTexture: aU
            };
            null === kU.coatTexture && null === kU.coatRoughnessTexture && null === kU.coatRoughnessTexture && null === kU.coatAnisotropyTexture && null === kU.coatColorTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[Cy] = kU
          }
          UU(XU)
        }))
      }
    }
    let Sy = !1;

    function ry() {
      Sy || (Sy = !0, rc.RegisterExtension(Cy, (UU => new Oy(UU))))
    }
    ry();
    let uy = (() => {
      var UU, XU, zU, cU, yU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, eU, CU, wU, qU, OU, SU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, xU, JU, jU, KU, bU, TU, hU, UX, XX, zX, cX, yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX, GX;
      let BX, ZX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX, hX, Uz, Xz, zz, cz, yz, Qz, Az, Fz, oz, Dz, Ez, Yz, Nz, Iz, pz, az, tz, gz, kz, Gz, Bz, Zz, Rz, Pz, Wz, dz, Lz, ez, Cz, wz, qz, Oz, Sz, rz, uz, fz, iz, Hz, Mz = RX,
        vz = [],
        Vz = [],
        sz = [],
        nz = [],
        mz = [],
        lz = [],
        xz = [],
        Jz = [],
        jz = [],
        Kz = [],
        bz = [],
        Tz = [],
        hz = [],
        Uc = [],
        Xc = [],
        zc = [],
        cc = [],
        yc = [],
        Qc = [],
        Ac = [],
        Fc = [],
        oc = [],
        Dc = [],
        Ec = [],
        Yc = [],
        Nc = [],
        Ic = [],
        pc = [],
        ac = [],
        tc = [],
        gc = [],
        kc = [],
        Gc = [],
        Bc = [],
        Zc = [],
        Rc = [],
        Pc = [],
        Wc = [],
        dc = [],
        Lc = [],
        ec = [],
        Cc = [],
        wc = [],
        qc = [],
        Oc = [],
        Sc = [],
        rc = [],
        uc = [],
        fc = [],
        ic = [],
        Hc = [],
        Mc = [],
        vc = [],
        Vc = [],
        sc = [],
        nc = [],
        mc = [],
        lc = [],
        xc = [],
        Jc = [],
        jc = [],
        Kc = [],
        bc = [],
        Tc = [],
        hc = [],
        Uy = [],
        Xy = [],
        zy = [],
        cy = [],
        yy = [],
        Qy = [],
        Ay = [],
        Fy = [],
        oy = [],
        Dy = [],
        Ey = [],
        Yy = [],
        Ny = [],
        Iy = [],
        py = [],
        ay = [],
        ty = [],
        gy = [],
        ky = [],
        Gy = [],
        By = [],
        Zy = [],
        Ry = [],
        Py = [],
        Wy = [],
        dy = [],
        Ly = [],
        ey = [],
        Cy = [],
        wy = [],
        qy = [],
        Oy = [],
        Sy = [],
        ry = [],
        uy = [],
        fy = [],
        iy = [],
        Hy = [],
        My = [],
        vy = [],
        Vy = [],
        sy = [],
        ny = [],
        my = [],
        ly = [],
        xy = [],
        Jy = [],
        jy = [],
        Ky = [],
        by = [],
        Ty = [],
        hy = [],
        UQ = [],
        XQ = [],
        zQ = [],
        cQ = [],
        yQ = [],
        QQ = [],
        AQ = [],
        FQ = [],
        oQ = [],
        DQ = [],
        EQ = [],
        YQ = [],
        NQ = [],
        IQ = [],
        pQ = [],
        aQ = [];
      return UU = class extends Mz {
        get directIntensity() {
          return (0, dU.e)(this, XU, "f")
        }
        set directIntensity(UU) {
          (0, dU.f)(this, XU, UU, "f")
        }
        get emissiveIntensity() {
          return (0, dU.e)(this, zU, "f")
        }
        set emissiveIntensity(UU) {
          (0, dU.f)(this, zU, UU, "f")
        }
        get environmentIntensity() {
          return (0, dU.e)(this, cU, "f")
        }
        set environmentIntensity(UU) {
          (0, dU.f)(this, cU, UU, "f")
        }
        get specularIntensity() {
          return (0, dU.e)(this, yU, "f")
        }
        set specularIntensity(UU) {
          (0, dU.f)(this, yU, UU, "f")
        }
        get disableBumpMap() {
          return (0, dU.e)(this, AU, "f")
        }
        set disableBumpMap(UU) {
          (0, dU.f)(this, AU, UU, "f")
        }
        get albedoTexture() {
          return (0, dU.e)(this, FU, "f")
        }
        set albedoTexture(UU) {
          (0, dU.f)(this, FU, UU, "f")
        }
        get baseWeightTexture() {
          return (0, dU.e)(this, oU, "f")
        }
        set baseWeightTexture(UU) {
          (0, dU.f)(this, oU, UU, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, dU.e)(this, DU, "f")
        }
        set baseDiffuseRoughnessTexture(UU) {
          (0, dU.f)(this, DU, UU, "f")
        }
        get ambientTexture() {
          return (0, dU.e)(this, EU, "f")
        }
        set ambientTexture(UU) {
          (0, dU.f)(this, EU, UU, "f")
        }
        get ambientTextureStrength() {
          return (0, dU.e)(this, YU, "f")
        }
        set ambientTextureStrength(UU) {
          (0, dU.f)(this, YU, UU, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, dU.e)(this, NU, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(UU) {
          (0, dU.f)(this, NU, UU, "f")
        }
        get opacityTexture() {
          return (0, dU.e)(this, IU, "f")
        }
        set opacityTexture(UU) {
          (0, dU.f)(this, IU, UU, "f")
        }
        get reflectionTexture() {
          return (0, dU.e)(this, pU, "f")
        }
        set reflectionTexture(UU) {
          (0, dU.f)(this, pU, UU, "f")
        }
        get emissiveTexture() {
          return (0, dU.e)(this, aU, "f")
        }
        set emissiveTexture(UU) {
          (0, dU.f)(this, aU, UU, "f")
        }
        get reflectivityTexture() {
          return (0, dU.e)(this, tU, "f")
        }
        set reflectivityTexture(UU) {
          (0, dU.f)(this, tU, UU, "f")
        }
        get metallicTexture() {
          return (0, dU.e)(this, gU, "f")
        }
        set metallicTexture(UU) {
          (0, dU.f)(this, gU, UU, "f")
        }
        get metallic() {
          return (0, dU.e)(this, kU, "f")
        }
        set metallic(UU) {
          (0, dU.f)(this, kU, UU, "f")
        }
        get roughness() {
          return (0, dU.e)(this, GU, "f")
        }
        set roughness(UU) {
          (0, dU.f)(this, GU, UU, "f")
        }
        get metallicF0Factor() {
          return (0, dU.e)(this, BU, "f")
        }
        set metallicF0Factor(UU) {
          (0, dU.f)(this, BU, UU, "f")
        }
        get metallicReflectanceColor() {
          return (0, dU.e)(this, ZU, "f")
        }
        set metallicReflectanceColor(UU) {
          (0, dU.f)(this, ZU, UU, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, dU.e)(this, RU, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(UU) {
          (0, dU.f)(this, RU, UU, "f")
        }
        get metallicReflectanceTexture() {
          return (0, dU.e)(this, PU, "f")
        }
        set metallicReflectanceTexture(UU) {
          (0, dU.f)(this, PU, UU, "f")
        }
        get reflectanceTexture() {
          return (0, dU.e)(this, WU, "f")
        }
        set reflectanceTexture(UU) {
          (0, dU.f)(this, WU, UU, "f")
        }
        get microSurfaceTexture() {
          return (0, dU.e)(this, eU, "f")
        }
        set microSurfaceTexture(UU) {
          (0, dU.f)(this, eU, UU, "f")
        }
        get bumpTexture() {
          return (0, dU.e)(this, CU, "f")
        }
        set bumpTexture(UU) {
          (0, dU.f)(this, CU, UU, "f")
        }
        get lightmapTexture() {
          return (0, dU.e)(this, wU, "f")
        }
        set lightmapTexture(UU) {
          (0, dU.f)(this, wU, UU, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(UU) {
          this.subSurface.refractionTexture = UU, UU ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, dU.e)(this, qU, "f")
        }
        set ambientColor(UU) {
          (0, dU.f)(this, qU, UU, "f")
        }
        get albedoColor() {
          return (0, dU.e)(this, OU, "f")
        }
        set albedoColor(UU) {
          (0, dU.f)(this, OU, UU, "f")
        }
        get baseWeight() {
          return (0, dU.e)(this, SU, "f")
        }
        set baseWeight(UU) {
          (0, dU.f)(this, SU, UU, "f")
        }
        get baseDiffuseRoughness() {
          return (0, dU.e)(this, uU, "f")
        }
        set baseDiffuseRoughness(UU) {
          (0, dU.f)(this, uU, UU, "f")
        }
        get reflectivityColor() {
          return (0, dU.e)(this, fU, "f")
        }
        set reflectivityColor(UU) {
          (0, dU.f)(this, fU, UU, "f")
        }
        get reflectionColor() {
          return (0, dU.e)(this, iU, "f")
        }
        set reflectionColor(UU) {
          (0, dU.f)(this, iU, UU, "f")
        }
        get emissiveColor() {
          return (0, dU.e)(this, HU, "f")
        }
        set emissiveColor(UU) {
          (0, dU.f)(this, HU, UU, "f")
        }
        get microSurface() {
          return (0, dU.e)(this, MU, "f")
        }
        set microSurface(UU) {
          (0, dU.f)(this, MU, UU, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(UU) {
          this.subSurface.indexOfRefraction = UU
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(UU) {
          this.subSurface.invertRefractionY = UU
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(UU) {
          this.subSurface.linkRefractionWithTransparency = UU, UU && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, dU.e)(this, vU, "f")
        }
        set useLightmapAsShadowmap(UU) {
          (0, dU.f)(this, vU, UU, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, dU.e)(this, VU, "f")
        }
        set useAlphaFromAlbedoTexture(UU) {
          (0, dU.f)(this, VU, UU, "f")
        }
        get forceAlphaTest() {
          return (0, dU.e)(this, sU, "f")
        }
        set forceAlphaTest(UU) {
          (0, dU.f)(this, sU, UU, "f")
        }
        get alphaCutOff() {
          return (0, dU.e)(this, nU, "f")
        }
        set alphaCutOff(UU) {
          (0, dU.f)(this, nU, UU, "f")
        }
        get useSpecularOverAlpha() {
          return (0, dU.e)(this, mU, "f")
        }
        set useSpecularOverAlpha(UU) {
          (0, dU.f)(this, mU, UU, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, dU.e)(this, xU, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(UU) {
          (0, dU.f)(this, xU, UU, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, dU.e)(this, JU, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(UU) {
          (0, dU.f)(this, JU, UU, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, dU.e)(this, jU, "f")
        }
        set useRoughnessFromMetallicTextureGreen(UU) {
          (0, dU.f)(this, jU, UU, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, dU.e)(this, KU, "f")
        }
        set useMetallnessFromMetallicTextureBlue(UU) {
          (0, dU.f)(this, KU, UU, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, dU.e)(this, bU, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(UU) {
          (0, dU.f)(this, bU, UU, "f")
        }
        get useAmbientInGrayScale() {
          return (0, dU.e)(this, TU, "f")
        }
        set useAmbientInGrayScale(UU) {
          (0, dU.f)(this, TU, UU, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, dU.e)(this, hU, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(UU) {
          (0, dU.f)(this, hU, UU, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === RX.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(UU) {
          UU !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? RX.LIGHTFALLOFF_PHYSICAL : RX.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === RX.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(UU) {
          UU !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = UU ? RX.LIGHTFALLOFF_GLTF : RX.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, dU.e)(this, UX, "f")
        }
        set useRadianceOverAlpha(UU) {
          (0, dU.f)(this, UX, UU, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, dU.e)(this, XX, "f")
        }
        set useObjectSpaceNormalMap(UU) {
          (0, dU.f)(this, XX, UU, "f")
        }
        get useParallax() {
          return (0, dU.e)(this, zX, "f")
        }
        set useParallax(UU) {
          (0, dU.f)(this, zX, UU, "f")
        }
        get useParallaxOcclusion() {
          return (0, dU.e)(this, cX, "f")
        }
        set useParallaxOcclusion(UU) {
          (0, dU.f)(this, cX, UU, "f")
        }
        get parallaxScaleBias() {
          return (0, dU.e)(this, yX, "f")
        }
        set parallaxScaleBias(UU) {
          (0, dU.f)(this, yX, UU, "f")
        }
        get disableLighting() {
          return (0, dU.e)(this, QX, "f")
        }
        set disableLighting(UU) {
          (0, dU.f)(this, QX, UU, "f")
        }
        get forceIrradianceInFragment() {
          return (0, dU.e)(this, AX, "f")
        }
        set forceIrradianceInFragment(UU) {
          (0, dU.f)(this, AX, UU, "f")
        }
        get maxSimultaneousLights() {
          return (0, dU.e)(this, FX, "f")
        }
        set maxSimultaneousLights(UU) {
          (0, dU.f)(this, FX, UU, "f")
        }
        get invertNormalMapX() {
          return (0, dU.e)(this, oX, "f")
        }
        set invertNormalMapX(UU) {
          (0, dU.f)(this, oX, UU, "f")
        }
        get invertNormalMapY() {
          return (0, dU.e)(this, DX, "f")
        }
        set invertNormalMapY(UU) {
          (0, dU.f)(this, DX, UU, "f")
        }
        get twoSidedLighting() {
          return (0, dU.e)(this, EX, "f")
        }
        set twoSidedLighting(UU) {
          (0, dU.f)(this, EX, UU, "f")
        }
        get useAlphaFresnel() {
          return (0, dU.e)(this, YX, "f")
        }
        set useAlphaFresnel(UU) {
          (0, dU.f)(this, YX, UU, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, dU.e)(this, NX, "f")
        }
        set useLinearAlphaFresnel(UU) {
          (0, dU.f)(this, NX, UU, "f")
        }
        get environmentBRDFTexture() {
          return (0, dU.e)(this, IX, "f")
        }
        set environmentBRDFTexture(UU) {
          (0, dU.f)(this, IX, UU, "f")
        }
        get forceNormalForward() {
          return (0, dU.e)(this, pX, "f")
        }
        set forceNormalForward(UU) {
          (0, dU.f)(this, pX, UU, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, dU.e)(this, aX, "f")
        }
        set enableSpecularAntiAliasing(UU) {
          (0, dU.f)(this, aX, UU, "f")
        }
        get useHorizonOcclusion() {
          return (0, dU.e)(this, tX, "f")
        }
        set useHorizonOcclusion(UU) {
          (0, dU.f)(this, tX, UU, "f")
        }
        get useRadianceOcclusion() {
          return (0, dU.e)(this, gX, "f")
        }
        set useRadianceOcclusion(UU) {
          (0, dU.f)(this, gX, UU, "f")
        }
        get unlit() {
          return (0, dU.e)(this, kX, "f")
        }
        set unlit(UU) {
          (0, dU.f)(this, kX, UU, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, dU.e)(this, GX, "f")
        }
        set applyDecalMapAfterDetailMap(UU) {
          (0, dU.f)(this, GX, UU, "f")
        }
        constructor(QU, LU) {
          super(QU, LU, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), XU.set(this, ((0, dU.n)(this, vz), (0, dU.n)(this, Vz, 1))), zU.set(this, ((0, dU.n)(this, sz), (0, dU.n)(this, nz, 1))), cU.set(this, ((0, dU.n)(this, mz), (0, dU.n)(this, lz, 1))), yU.set(this, ((0, dU.n)(this, xz), (0, dU.n)(this, Jz, 1))), AU.set(this, ((0, dU.n)(this, jz), (0, dU.n)(this, Kz, !1))), FU.set(this, ((0, dU.n)(this, bz), (0, dU.n)(this, Tz, void 0))), oU.set(this, ((0, dU.n)(this, hz), (0, dU.n)(this, Uc, void 0))), DU.set(this, ((0, dU.n)(this, Xc), (0, dU.n)(this, zc, void 0))), EU.set(this, ((0, dU.n)(this, cc), (0, dU.n)(this, yc, void 0))), YU.set(this, ((0, dU.n)(this, Qc), (0, dU.n)(this, Ac, 1))), NU.set(this, ((0, dU.n)(this, Fc), (0, dU.n)(this, oc, UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), IU.set(this, ((0, dU.n)(this, Dc), (0, dU.n)(this, Ec, void 0))), pU.set(this, ((0, dU.n)(this, Yc), (0, dU.n)(this, Nc, void 0))), aU.set(this, ((0, dU.n)(this, Ic), (0, dU.n)(this, pc, void 0))), tU.set(this, ((0, dU.n)(this, ac), (0, dU.n)(this, tc, void 0))), gU.set(this, ((0, dU.n)(this, gc), (0, dU.n)(this, kc, void 0))), kU.set(this, ((0, dU.n)(this, Gc), (0, dU.n)(this, Bc, void 0))), GU.set(this, ((0, dU.n)(this, Zc), (0, dU.n)(this, Rc, void 0))), BU.set(this, ((0, dU.n)(this, Pc), (0, dU.n)(this, Wc, 1))), ZU.set(this, ((0, dU.n)(this, dc), (0, dU.n)(this, Lc, lU.b.White()))), RU.set(this, ((0, dU.n)(this, ec), (0, dU.n)(this, Cc, !1))), PU.set(this, ((0, dU.n)(this, wc), (0, dU.n)(this, qc, void 0))), WU.set(this, ((0, dU.n)(this, Oc), (0, dU.n)(this, Sc, void 0))), eU.set(this, ((0, dU.n)(this, rc), (0, dU.n)(this, uc, void 0))), CU.set(this, ((0, dU.n)(this, fc), (0, dU.n)(this, ic, void 0))), wU.set(this, ((0, dU.n)(this, Hc), (0, dU.n)(this, Mc, void 0))), qU.set(this, ((0, dU.n)(this, vc), (0, dU.n)(this, Vc, new lU.b(0, 0, 0)))), OU.set(this, ((0, dU.n)(this, sc), (0, dU.n)(this, nc, new lU.b(1, 1, 1)))), SU.set(this, ((0, dU.n)(this, mc), (0, dU.n)(this, lc, 1))), uU.set(this, ((0, dU.n)(this, xc), (0, dU.n)(this, Jc, void 0))), fU.set(this, ((0, dU.n)(this, jc), (0, dU.n)(this, Kc, new lU.b(1, 1, 1)))), iU.set(this, ((0, dU.n)(this, bc), (0, dU.n)(this, Tc, new lU.b(1, 1, 1)))), HU.set(this, ((0, dU.n)(this, hc), (0, dU.n)(this, Uy, new lU.b(0, 0, 0)))), MU.set(this, ((0, dU.n)(this, Xy), (0, dU.n)(this, zy, 1))), vU.set(this, ((0, dU.n)(this, cy), (0, dU.n)(this, yy, !1))), VU.set(this, ((0, dU.n)(this, Qy), (0, dU.n)(this, Ay, !1))), sU.set(this, ((0, dU.n)(this, Fy), (0, dU.n)(this, oy, !1))), nU.set(this, ((0, dU.n)(this, Dy), (0, dU.n)(this, Ey, .4))), mU.set(this, ((0, dU.n)(this, Yy), (0, dU.n)(this, Ny, !0))), xU.set(this, ((0, dU.n)(this, Iy), (0, dU.n)(this, py, !1))), JU.set(this, ((0, dU.n)(this, ay), (0, dU.n)(this, ty, !0))), jU.set(this, ((0, dU.n)(this, gy), (0, dU.n)(this, ky, !1))), KU.set(this, ((0, dU.n)(this, Gy), (0, dU.n)(this, By, !1))), bU.set(this, ((0, dU.n)(this, Zy), (0, dU.n)(this, Ry, !1))), TU.set(this, ((0, dU.n)(this, Py), (0, dU.n)(this, Wy, !1))), hU.set(this, ((0, dU.n)(this, dy), (0, dU.n)(this, Ly, !1))), UX.set(this, ((0, dU.n)(this, ey), (0, dU.n)(this, Cy, !0))), XX.set(this, ((0, dU.n)(this, wy), (0, dU.n)(this, qy, !1))), zX.set(this, ((0, dU.n)(this, Oy), (0, dU.n)(this, Sy, !1))), cX.set(this, ((0, dU.n)(this, ry), (0, dU.n)(this, uy, !1))), yX.set(this, ((0, dU.n)(this, fy), (0, dU.n)(this, iy, .05))), QX.set(this, ((0, dU.n)(this, Hy), (0, dU.n)(this, My, !1))), AX.set(this, ((0, dU.n)(this, vy), (0, dU.n)(this, Vy, !1))), FX.set(this, ((0, dU.n)(this, sy), (0, dU.n)(this, ny, 4))), oX.set(this, ((0, dU.n)(this, my), (0, dU.n)(this, ly, !1))), DX.set(this, ((0, dU.n)(this, xy), (0, dU.n)(this, Jy, !1))), EX.set(this, ((0, dU.n)(this, jy), (0, dU.n)(this, Ky, !1))), YX.set(this, ((0, dU.n)(this, by), (0, dU.n)(this, Ty, !1))), NX.set(this, ((0, dU.n)(this, hy), (0, dU.n)(this, UQ, !1))), IX.set(this, ((0, dU.n)(this, XQ), (0, dU.n)(this, zQ, null))), pX.set(this, ((0, dU.n)(this, cQ), (0, dU.n)(this, yQ, !1))), aX.set(this, ((0, dU.n)(this, QQ), (0, dU.n)(this, AQ, !1))), tX.set(this, ((0, dU.n)(this, FQ), (0, dU.n)(this, oQ, !0))), gX.set(this, ((0, dU.n)(this, DQ), (0, dU.n)(this, EQ, !0))), kX.set(this, ((0, dU.n)(this, YQ), (0, dU.n)(this, NQ, !1))), GX.set(this, ((0, dU.n)(this, IQ), (0, dU.n)(this, pQ, !1))), (0, dU.n)(this, aQ), this._environmentBRDFTexture = rU(this.nS())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(XU) {
          let zU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const yU = PX.b.Clone((() => new UU(XU, this.nS())), this, {
            cloneTexturesOnlyOnce: zU
          });
          return yU.id = XU, yU.name = XU, this.stencil.copyTo(yU.stencil), this._clonePlugins(yU, cU), yU
        }
        serialize() {
          const UU = super.serialize();
          return UU.customType = "BABYLON.PBRMaterial", UU
        }
        static Parse(XU, zU, cU) {
          const yU = PX.b.Parse((() => new UU(XU.name, zU)), XU, zU, cU);
          return XU.stencil && yU.stencil.parse(XU.stencil, zU, cU), QU.c._ParsePlugins(XU, yU, zU, cU), XU.clearCoat && yU.clearCoat.parse(XU.clearCoat, zU, cU), XU.anisotropy && yU.anisotropy.parse(XU.anisotropy, zU, cU), XU.brdf && yU.brdf.parse(XU.brdf, zU, cU), XU.sheen && yU.sheen.parse(XU.sheen, zU, cU), XU.subSurface && yU.subSurface.parse(XU.subSurface, zU, cU), XU.iridescence && yU.iridescence.parse(XU.iridescence, zU, cU), yU
        }
      }, XU = new WeakMap, zU = new WeakMap, cU = new WeakMap, yU = new WeakMap, AU = new WeakMap, FU = new WeakMap, oU = new WeakMap, DU = new WeakMap, EU = new WeakMap, YU = new WeakMap, NU = new WeakMap, IU = new WeakMap, pU = new WeakMap, aU = new WeakMap, tU = new WeakMap, gU = new WeakMap, kU = new WeakMap, GU = new WeakMap, BU = new WeakMap, ZU = new WeakMap, RU = new WeakMap, PU = new WeakMap, WU = new WeakMap, eU = new WeakMap, CU = new WeakMap, wU = new WeakMap, qU = new WeakMap, OU = new WeakMap, SU = new WeakMap, uU = new WeakMap, fU = new WeakMap, iU = new WeakMap, HU = new WeakMap, MU = new WeakMap, vU = new WeakMap, VU = new WeakMap, sU = new WeakMap, nU = new WeakMap, mU = new WeakMap, xU = new WeakMap, JU = new WeakMap, jU = new WeakMap, KU = new WeakMap, bU = new WeakMap, TU = new WeakMap, hU = new WeakMap, UX = new WeakMap, XX = new WeakMap, zX = new WeakMap, cX = new WeakMap, yX = new WeakMap, QX = new WeakMap, AX = new WeakMap, FX = new WeakMap, oX = new WeakMap, DX = new WeakMap, EX = new WeakMap, YX = new WeakMap, NX = new WeakMap, IX = new WeakMap, pX = new WeakMap, aX = new WeakMap, tX = new WeakMap, gX = new WeakMap, kX = new WeakMap, GX = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mz[Symbol.metadata] ?? null) : void 0;
        BX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], ZX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], WX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], dX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], LX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], eX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], CX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], wX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], qX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], OX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], SX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], rX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], uX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], fX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], iX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], HX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], MX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], vX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], VX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], sX = [(0, LU.m)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], nX = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], mX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], lX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], xX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], JX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], jX = [(0, LU.x)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty", null)], KX = [(0, LU.m)("ambient"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], bX = [(0, LU.m)("albedo"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], TX = [(0, LU.I)("baseWeight"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], hX = [(0, LU.I)("baseDiffuseRoughness"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, LU.m)("reflectivity"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, LU.m)("reflection"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], zz = [(0, LU.m)("emissive"), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Qz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Az = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Fz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], oz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Nz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Iz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], pz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], az = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, LU.I)()], gz = [(0, LU.I)()], kz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Gz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsLightsDirty")], Wz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsLightsDirty")], Lz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Cz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], wz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], qz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, LU.c)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], Hz = [(0, LU.I)(), (0, LU.c)("_markAllSubMeshesAsMiscDirty")], (0, dU.j)(UU, null, BX, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "directIntensity" in UU,
            get: UU => UU.directIntensity,
            set: (UU, XU) => {
              UU.directIntensity = XU
            }
          },
          metadata: XU
        }, Vz, sz), (0, dU.j)(UU, null, ZX, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "emissiveIntensity" in UU,
            get: UU => UU.emissiveIntensity,
            set: (UU, XU) => {
              UU.emissiveIntensity = XU
            }
          },
          metadata: XU
        }, nz, mz), (0, dU.j)(UU, null, WX, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "environmentIntensity" in UU,
            get: UU => UU.environmentIntensity,
            set: (UU, XU) => {
              UU.environmentIntensity = XU
            }
          },
          metadata: XU
        }, lz, xz), (0, dU.j)(UU, null, dX, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "specularIntensity" in UU,
            get: UU => UU.specularIntensity,
            set: (UU, XU) => {
              UU.specularIntensity = XU
            }
          },
          metadata: XU
        }, Jz, jz), (0, dU.j)(UU, null, LX, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableBumpMap" in UU,
            get: UU => UU.disableBumpMap,
            set: (UU, XU) => {
              UU.disableBumpMap = XU
            }
          },
          metadata: XU
        }, Kz, bz), (0, dU.j)(UU, null, eX, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "albedoTexture" in UU,
            get: UU => UU.albedoTexture,
            set: (UU, XU) => {
              UU.albedoTexture = XU
            }
          },
          metadata: XU
        }, Tz, hz), (0, dU.j)(UU, null, CX, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseWeightTexture" in UU,
            get: UU => UU.baseWeightTexture,
            set: (UU, XU) => {
              UU.baseWeightTexture = XU
            }
          },
          metadata: XU
        }, Uc, Xc), (0, dU.j)(UU, null, wX, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseDiffuseRoughnessTexture" in UU,
            get: UU => UU.baseDiffuseRoughnessTexture,
            set: (UU, XU) => {
              UU.baseDiffuseRoughnessTexture = XU
            }
          },
          metadata: XU
        }, zc, cc), (0, dU.j)(UU, null, qX, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientTexture" in UU,
            get: UU => UU.ambientTexture,
            set: (UU, XU) => {
              UU.ambientTexture = XU
            }
          },
          metadata: XU
        }, yc, Qc), (0, dU.j)(UU, null, OX, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientTextureStrength" in UU,
            get: UU => UU.ambientTextureStrength,
            set: (UU, XU) => {
              UU.ambientTextureStrength = XU
            }
          },
          metadata: XU
        }, Ac, Fc), (0, dU.j)(UU, null, SX, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientTextureImpactOnAnalyticalLights" in UU,
            get: UU => UU.ambientTextureImpactOnAnalyticalLights,
            set: (UU, XU) => {
              UU.ambientTextureImpactOnAnalyticalLights = XU
            }
          },
          metadata: XU
        }, oc, Dc), (0, dU.j)(UU, null, rX, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "opacityTexture" in UU,
            get: UU => UU.opacityTexture,
            set: (UU, XU) => {
              UU.opacityTexture = XU
            }
          },
          metadata: XU
        }, Ec, Yc), (0, dU.j)(UU, null, uX, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectionTexture" in UU,
            get: UU => UU.reflectionTexture,
            set: (UU, XU) => {
              UU.reflectionTexture = XU
            }
          },
          metadata: XU
        }, Nc, Ic), (0, dU.j)(UU, null, fX, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "emissiveTexture" in UU,
            get: UU => UU.emissiveTexture,
            set: (UU, XU) => {
              UU.emissiveTexture = XU
            }
          },
          metadata: XU
        }, pc, ac), (0, dU.j)(UU, null, iX, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectivityTexture" in UU,
            get: UU => UU.reflectivityTexture,
            set: (UU, XU) => {
              UU.reflectivityTexture = XU
            }
          },
          metadata: XU
        }, tc, gc), (0, dU.j)(UU, null, HX, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicTexture" in UU,
            get: UU => UU.metallicTexture,
            set: (UU, XU) => {
              UU.metallicTexture = XU
            }
          },
          metadata: XU
        }, kc, Gc), (0, dU.j)(UU, null, MX, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallic" in UU,
            get: UU => UU.metallic,
            set: (UU, XU) => {
              UU.metallic = XU
            }
          },
          metadata: XU
        }, Bc, Zc), (0, dU.j)(UU, null, vX, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughness" in UU,
            get: UU => UU.roughness,
            set: (UU, XU) => {
              UU.roughness = XU
            }
          },
          metadata: XU
        }, Rc, Pc), (0, dU.j)(UU, null, VX, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicF0Factor" in UU,
            get: UU => UU.metallicF0Factor,
            set: (UU, XU) => {
              UU.metallicF0Factor = XU
            }
          },
          metadata: XU
        }, Wc, dc), (0, dU.j)(UU, null, sX, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicReflectanceColor" in UU,
            get: UU => UU.metallicReflectanceColor,
            set: (UU, XU) => {
              UU.metallicReflectanceColor = XU
            }
          },
          metadata: XU
        }, Lc, ec), (0, dU.j)(UU, null, nX, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useOnlyMetallicFromMetallicReflectanceTexture" in UU,
            get: UU => UU.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (UU, XU) => {
              UU.useOnlyMetallicFromMetallicReflectanceTexture = XU
            }
          },
          metadata: XU
        }, Cc, wc), (0, dU.j)(UU, null, mX, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "metallicReflectanceTexture" in UU,
            get: UU => UU.metallicReflectanceTexture,
            set: (UU, XU) => {
              UU.metallicReflectanceTexture = XU
            }
          },
          metadata: XU
        }, qc, Oc), (0, dU.j)(UU, null, lX, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectanceTexture" in UU,
            get: UU => UU.reflectanceTexture,
            set: (UU, XU) => {
              UU.reflectanceTexture = XU
            }
          },
          metadata: XU
        }, Sc, rc), (0, dU.j)(UU, null, xX, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "microSurfaceTexture" in UU,
            get: UU => UU.microSurfaceTexture,
            set: (UU, XU) => {
              UU.microSurfaceTexture = XU
            }
          },
          metadata: XU
        }, uc, fc), (0, dU.j)(UU, null, JX, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "bumpTexture" in UU,
            get: UU => UU.bumpTexture,
            set: (UU, XU) => {
              UU.bumpTexture = XU
            }
          },
          metadata: XU
        }, ic, Hc), (0, dU.j)(UU, null, jX, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "lightmapTexture" in UU,
            get: UU => UU.lightmapTexture,
            set: (UU, XU) => {
              UU.lightmapTexture = XU
            }
          },
          metadata: XU
        }, Mc, vc), (0, dU.j)(UU, null, KX, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "ambientColor" in UU,
            get: UU => UU.ambientColor,
            set: (UU, XU) => {
              UU.ambientColor = XU
            }
          },
          metadata: XU
        }, Vc, sc), (0, dU.j)(UU, null, bX, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "albedoColor" in UU,
            get: UU => UU.albedoColor,
            set: (UU, XU) => {
              UU.albedoColor = XU
            }
          },
          metadata: XU
        }, nc, mc), (0, dU.j)(UU, null, TX, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseWeight" in UU,
            get: UU => UU.baseWeight,
            set: (UU, XU) => {
              UU.baseWeight = XU
            }
          },
          metadata: XU
        }, lc, xc), (0, dU.j)(UU, null, hX, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: UU => "baseDiffuseRoughness" in UU,
            get: UU => UU.baseDiffuseRoughness,
            set: (UU, XU) => {
              UU.baseDiffuseRoughness = XU
            }
          },
          metadata: XU
        }, Jc, jc), (0, dU.j)(UU, null, Uz, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectivityColor" in UU,
            get: UU => UU.reflectivityColor,
            set: (UU, XU) => {
              UU.reflectivityColor = XU
            }
          },
          metadata: XU
        }, Kc, bc), (0, dU.j)(UU, null, Xz, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "reflectionColor" in UU,
            get: UU => UU.reflectionColor,
            set: (UU, XU) => {
              UU.reflectionColor = XU
            }
          },
          metadata: XU
        }, Tc, hc), (0, dU.j)(UU, null, zz, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: UU => "emissiveColor" in UU,
            get: UU => UU.emissiveColor,
            set: (UU, XU) => {
              UU.emissiveColor = XU
            }
          },
          metadata: XU
        }, Uy, Xy), (0, dU.j)(UU, null, cz, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: UU => "microSurface" in UU,
            get: UU => UU.microSurface,
            set: (UU, XU) => {
              UU.microSurface = XU
            }
          },
          metadata: XU
        }, zy, cy), (0, dU.j)(UU, null, yz, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLightmapAsShadowmap" in UU,
            get: UU => UU.useLightmapAsShadowmap,
            set: (UU, XU) => {
              UU.useLightmapAsShadowmap = XU
            }
          },
          metadata: XU
        }, yy, Qy), (0, dU.j)(UU, null, Qz, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlphaFromAlbedoTexture" in UU,
            get: UU => UU.useAlphaFromAlbedoTexture,
            set: (UU, XU) => {
              UU.useAlphaFromAlbedoTexture = XU
            }
          },
          metadata: XU
        }, Ay, Fy), (0, dU.j)(UU, null, Az, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceAlphaTest" in UU,
            get: UU => UU.forceAlphaTest,
            set: (UU, XU) => {
              UU.forceAlphaTest = XU
            }
          },
          metadata: XU
        }, oy, Dy), (0, dU.j)(UU, null, Fz, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: UU => "alphaCutOff" in UU,
            get: UU => UU.alphaCutOff,
            set: (UU, XU) => {
              UU.alphaCutOff = XU
            }
          },
          metadata: XU
        }, Ey, Yy), (0, dU.j)(UU, null, oz, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useSpecularOverAlpha" in UU,
            get: UU => UU.useSpecularOverAlpha,
            set: (UU, XU) => {
              UU.useSpecularOverAlpha = XU
            }
          },
          metadata: XU
        }, Ny, Iy), (0, dU.j)(UU, null, Dz, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useMicroSurfaceFromReflectivityMapAlpha" in UU,
            get: UU => UU.useMicroSurfaceFromReflectivityMapAlpha,
            set: (UU, XU) => {
              UU.useMicroSurfaceFromReflectivityMapAlpha = XU
            }
          },
          metadata: XU
        }, py, ay), (0, dU.j)(UU, null, Ez, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMetallicTextureAlpha" in UU,
            get: UU => UU.useRoughnessFromMetallicTextureAlpha,
            set: (UU, XU) => {
              UU.useRoughnessFromMetallicTextureAlpha = XU
            }
          },
          metadata: XU
        }, ty, gy), (0, dU.j)(UU, null, Yz, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRoughnessFromMetallicTextureGreen" in UU,
            get: UU => UU.useRoughnessFromMetallicTextureGreen,
            set: (UU, XU) => {
              UU.useRoughnessFromMetallicTextureGreen = XU
            }
          },
          metadata: XU
        }, ky, Gy), (0, dU.j)(UU, null, Nz, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: UU => "useMetallnessFromMetallicTextureBlue" in UU,
            get: UU => UU.useMetallnessFromMetallicTextureBlue,
            set: (UU, XU) => {
              UU.useMetallnessFromMetallicTextureBlue = XU
            }
          },
          metadata: XU
        }, By, Zy), (0, dU.j)(UU, null, Iz, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAmbientOcclusionFromMetallicTextureRed" in UU,
            get: UU => UU.useAmbientOcclusionFromMetallicTextureRed,
            set: (UU, XU) => {
              UU.useAmbientOcclusionFromMetallicTextureRed = XU
            }
          },
          metadata: XU
        }, Ry, Py), (0, dU.j)(UU, null, pz, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAmbientInGrayScale" in UU,
            get: UU => UU.useAmbientInGrayScale,
            set: (UU, XU) => {
              UU.useAmbientInGrayScale = XU
            }
          },
          metadata: XU
        }, Wy, dy), (0, dU.j)(UU, null, az, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAutoMicroSurfaceFromReflectivityMap" in UU,
            get: UU => UU.useAutoMicroSurfaceFromReflectivityMap,
            set: (UU, XU) => {
              UU.useAutoMicroSurfaceFromReflectivityMap = XU
            }
          },
          metadata: XU
        }, Ly, ey), (0, dU.j)(UU, null, tz, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: UU => "usePhysicalLightFalloff" in UU,
            get: UU => UU.usePhysicalLightFalloff
          },
          metadata: XU
        }, null, vz), (0, dU.j)(UU, null, gz, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: UU => "useGLTFLightFalloff" in UU,
            get: UU => UU.useGLTFLightFalloff
          },
          metadata: XU
        }, null, vz), (0, dU.j)(UU, null, kz, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRadianceOverAlpha" in UU,
            get: UU => UU.useRadianceOverAlpha,
            set: (UU, XU) => {
              UU.useRadianceOverAlpha = XU
            }
          },
          metadata: XU
        }, Cy, wy), (0, dU.j)(UU, null, Gz, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "useObjectSpaceNormalMap" in UU,
            get: UU => UU.useObjectSpaceNormalMap,
            set: (UU, XU) => {
              UU.useObjectSpaceNormalMap = XU
            }
          },
          metadata: XU
        }, qy, Oy), (0, dU.j)(UU, null, Bz, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: UU => "useParallax" in UU,
            get: UU => UU.useParallax,
            set: (UU, XU) => {
              UU.useParallax = XU
            }
          },
          metadata: XU
        }, Sy, ry), (0, dU.j)(UU, null, Zz, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: UU => "useParallaxOcclusion" in UU,
            get: UU => UU.useParallaxOcclusion,
            set: (UU, XU) => {
              UU.useParallaxOcclusion = XU
            }
          },
          metadata: XU
        }, uy, fy), (0, dU.j)(UU, null, Rz, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: UU => "parallaxScaleBias" in UU,
            get: UU => UU.parallaxScaleBias,
            set: (UU, XU) => {
              UU.parallaxScaleBias = XU
            }
          },
          metadata: XU
        }, iy, Hy), (0, dU.j)(UU, null, Pz, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: UU => "disableLighting" in UU,
            get: UU => UU.disableLighting,
            set: (UU, XU) => {
              UU.disableLighting = XU
            }
          },
          metadata: XU
        }, My, vy), (0, dU.j)(UU, null, Wz, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceIrradianceInFragment" in UU,
            get: UU => UU.forceIrradianceInFragment,
            set: (UU, XU) => {
              UU.forceIrradianceInFragment = XU
            }
          },
          metadata: XU
        }, Vy, sy), (0, dU.j)(UU, null, dz, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: UU => "maxSimultaneousLights" in UU,
            get: UU => UU.maxSimultaneousLights,
            set: (UU, XU) => {
              UU.maxSimultaneousLights = XU
            }
          },
          metadata: XU
        }, ny, my), (0, dU.j)(UU, null, Lz, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertNormalMapX" in UU,
            get: UU => UU.invertNormalMapX,
            set: (UU, XU) => {
              UU.invertNormalMapX = XU
            }
          },
          metadata: XU
        }, ly, xy), (0, dU.j)(UU, null, ez, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: UU => "invertNormalMapY" in UU,
            get: UU => UU.invertNormalMapY,
            set: (UU, XU) => {
              UU.invertNormalMapY = XU
            }
          },
          metadata: XU
        }, Jy, jy), (0, dU.j)(UU, null, Cz, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: UU => "twoSidedLighting" in UU,
            get: UU => UU.twoSidedLighting,
            set: (UU, XU) => {
              UU.twoSidedLighting = XU
            }
          },
          metadata: XU
        }, Ky, by), (0, dU.j)(UU, null, wz, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: UU => "useAlphaFresnel" in UU,
            get: UU => UU.useAlphaFresnel,
            set: (UU, XU) => {
              UU.useAlphaFresnel = XU
            }
          },
          metadata: XU
        }, Ty, hy), (0, dU.j)(UU, null, qz, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: UU => "useLinearAlphaFresnel" in UU,
            get: UU => UU.useLinearAlphaFresnel,
            set: (UU, XU) => {
              UU.useLinearAlphaFresnel = XU
            }
          },
          metadata: XU
        }, UQ, XQ), (0, dU.j)(UU, null, Oz, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: UU => "environmentBRDFTexture" in UU,
            get: UU => UU.environmentBRDFTexture,
            set: (UU, XU) => {
              UU.environmentBRDFTexture = XU
            }
          },
          metadata: XU
        }, zQ, cQ), (0, dU.j)(UU, null, Sz, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: UU => "forceNormalForward" in UU,
            get: UU => UU.forceNormalForward,
            set: (UU, XU) => {
              UU.forceNormalForward = XU
            }
          },
          metadata: XU
        }, yQ, QQ), (0, dU.j)(UU, null, rz, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: UU => "enableSpecularAntiAliasing" in UU,
            get: UU => UU.enableSpecularAntiAliasing,
            set: (UU, XU) => {
              UU.enableSpecularAntiAliasing = XU
            }
          },
          metadata: XU
        }, AQ, FQ), (0, dU.j)(UU, null, uz, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: UU => "useHorizonOcclusion" in UU,
            get: UU => UU.useHorizonOcclusion,
            set: (UU, XU) => {
              UU.useHorizonOcclusion = XU
            }
          },
          metadata: XU
        }, oQ, DQ), (0, dU.j)(UU, null, fz, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: UU => "useRadianceOcclusion" in UU,
            get: UU => UU.useRadianceOcclusion,
            set: (UU, XU) => {
              UU.useRadianceOcclusion = XU
            }
          },
          metadata: XU
        }, EQ, YQ), (0, dU.j)(UU, null, iz, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: UU => "unlit" in UU,
            get: UU => UU.unlit,
            set: (UU, XU) => {
              UU.unlit = XU
            }
          },
          metadata: XU
        }, NQ, IQ), (0, dU.j)(UU, null, Hz, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: UU => "applyDecalMapAfterDetailMap" in UU,
            get: UU => UU.applyDecalMapAfterDetailMap,
            set: (UU, XU) => {
              UU.applyDecalMapAfterDetailMap = XU
            }
          },
          metadata: XU
        }, pQ, aQ), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU.PBRMATERIAL_OPAQUE = RX.PBRMATERIAL_OPAQUE, UU.PBRMATERIAL_ALPHATEST = RX.PBRMATERIAL_ALPHATEST, UU.PBRMATERIAL_ALPHABLEND = RX.PBRMATERIAL_ALPHABLEND, UU.PBRMATERIAL_ALPHATESTANDBLEND = RX.PBRMATERIAL_ALPHATESTANDBLEND, UU.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = RX.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, UU
    })();
    const fy = "KHR_materials_diffuse_transmission";

    function iy(UU, XU) {
      const zU = XU.subSurface;
      let cU = null;
      return zU.translucencyIntensityTexture ? cU = zU.translucencyIntensityTexture : zU.thicknessTexture && zU.useMaskFromThicknessTexture && (cU = zU.thicknessTexture), cU && !zU.useGltfStyleTextures ? (eU.b.Warn(`${UU}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${XU.name}`, 1), null) : cU
    }
    class Hy {
      constructor(UU) {
        this.name = fy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof uy && this._isExtensionEnabled(zU)) {
          const XU = iy(UU, zU);
          return XU && cU.push(XU), zU.subSurface.translucencyColorTexture && cU.push(zU.subSurface.translucencyColorTexture), cU
        }
        return cU
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const XU = UU.subSurface;
        return !!XU.isTranslucencyEnabled && (!UU.unlit && !XU.useAlbedoToTintTranslucency && XU.useGltfStyleTextures && 1 === XU.volumeIndexOfRefraction && 0 === XU.minimumThickness && 0 === XU.maximumThickness)
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((cU => {
          if (zU instanceof uy && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0;
            const cU = zU.subSurface,
              yU = iy(UU, zU),
              QU = 0 == cU.translucencyIntensity ? void 0 : cU.translucencyIntensity,
              AU = this._exporter._materialExporter.getTextureInfo(yU) ?? void 0,
              FU = !cU.translucencyColor || cU.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : cU.translucencyColor.cyU(),
              oU = this._exporter._materialExporter.getTextureInfo(cU.translucencyColorTexture) ?? void 0,
              DU = {
                diffuseTransmissionFactor: QU,
                diffuseTransmissionTexture: AU,
                diffuseTransmissionColorFactor: FU,
                diffuseTransmissionColorTexture: oU
              };
            (AU || oU) && this._exporter._materialNeedsUVsSet.add(zU), XU.extensions = XU.extensions || {}, XU.extensions[fy] = DU
          }
          cU(XU)
        }))
      }
    }
    let My = !1;

    function vy() {
      My || (My = !0, rc.RegisterExtension(fy, (UU => new Hy(UU))))
    }
    vy();
    const Vy = "KHR_materials_dispersion";
    class sy {
      constructor() {
        this.name = Vy, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const XU = UU.subSurface;
        return !(!XU.isRefractionEnabled && !XU.isDispersionEnabled)
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          if (zU instanceof uy && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0;
            const UU = {
              dispersion: zU.subSurface.dispersion
            };
            XU.extensions = XU.extensions || {}, XU.extensions[Vy] = UU
          }
          UU(XU)
        }))
      }
    }
    let ny = !1;

    function my() {
      ny || (ny = !0, rc.RegisterExtension(Vy, (() => new sy)))
    }
    my();
    const ly = "KHR_materials_emissive_strength";
    class xy {
      constructor() {
        this.name = ly, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(UU, XU, zU) {
        return await new Promise((UU => {
          if (!(zU instanceof uy)) return UU(XU);
          const cU = zU.emissiveColor.scale(zU.emissiveIntensity),
            yU = Math.max(...cU.cyU());
          if (yU > 1) {
            XU.emissiveFactor = cU.scale(1 / yU).cyU(), this._wasUsed = !0;
            const UU = {
              emissiveStrength: yU
            };
            XU.extensions || (XU.extensions = {}), XU.extensions[ly] = UU
          } else XU.emissiveFactor = cU.cyU();
          return UU(XU)
        }))
      }
    }
    let Jy = !1;

    function jy() {
      Jy || (Jy = !0, rc.RegisterExtension(ly, (() => new xy)))
    }
    jy();
    const Ky = "KHR_materials_ior";
    class by {
      constructor() {
        this.name = Ky, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(UU) {
        return !UU.unlit && (UU instanceof TX ? 1.5 != UU.specularIor : UU instanceof uy && (void 0 != UU.indexOfRefraction && 1.5 != UU.indexOfRefraction))
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          if (zU instanceof uy && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0;
            const UU = {
              ior: zU.indexOfRefraction
            };
            XU.extensions = XU.extensions || {}, XU.extensions[Ky] = UU
          } else if (zU instanceof TX && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0;
            const UU = {
              ior: zU.specularIor
            };
            XU.extensions = XU.extensions || {}, XU.extensions[Ky] = UU
          }
          UU(XU)
        }))
      }
    }
    let Ty = !1;

    function hy() {
      Ty || (Ty = !0, rc.RegisterExtension(Ky, (() => new by)))
    }
    hy();
    const UQ = "KHR_materials_iridescence";
    class XQ {
      constructor(UU) {
        this.name = UQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof RX) {
          if (zU.iridescence.isEnabled) return zU.iridescence.texture && cU.push(zU.iridescence.texture), zU.iridescence.thicknessTexture && zU.iridescence.thicknessTexture !== zU.iridescence.texture && cU.push(zU.iridescence.thicknessTexture), cU
        } else if (zU instanceof TX && zU.thinFilmWeight > 0) return zU.thinFilmWeightTexture && cU.push(zU.thinFilmWeightTexture), zU.thinFilmThicknessTexture && zU.thinFilmThicknessTexture !== zU.thinFilmWeightTexture && cU.push(zU.thinFilmThicknessTexture), cU;
        return []
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          if (zU instanceof RX) {
            if (!zU.iridescence.isEnabled) return void UU(XU);
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            const cU = this._exporter._materialExporter.getTextureInfo(zU.iridescence.texture),
              yU = this._exporter._materialExporter.getTextureInfo(zU.iridescence.thicknessTexture),
              QU = {
                iridescenceFactor: zU.iridescence.intensity,
                iridescenceIor: zU.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: zU.iridescence.minimumThickness,
                iridescenceThicknessMaximum: zU.iridescence.maximumThickness,
                iridescenceTexture: cU ?? void 0,
                iridescenceThicknessTexture: yU ?? void 0
              };
            null === QU.iridescenceTexture && null === QU.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[UQ] = QU
          } else if (zU instanceof TX) {
            if (zU.thinFilmWeight <= 0) return void UU(XU);
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            const cU = this._exporter._materialExporter.getTextureInfo(zU.thinFilmWeightTexture),
              yU = this._exporter._materialExporter.getTextureInfo(zU.thinFilmThicknessTexture),
              QU = {
                iridescenceFactor: zU.thinFilmWeight,
                iridescenceIor: zU.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * zU.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * zU.thinFilmThickness,
                iridescenceTexture: cU ?? void 0,
                iridescenceThicknessTexture: yU ?? void 0
              };
            null === QU.iridescenceTexture && null === QU.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[UQ] = QU
          }
          UU(XU)
        }))
      }
    }
    let zQ = !1;

    function cQ() {
      zQ || (zQ = !0, rc.RegisterExtension(UQ, (UU => new XQ(UU))))
    }
    cQ();
    const yQ = "KHR_materials_sheen";
    class QQ {
      constructor(UU) {
        this.name = yQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        return zU instanceof uy && zU.sheen.isEnabled && zU.sheen.texture ? [zU.sheen.texture] : []
      }
      async postExportMaterialAsync(UU, XU, zU) {
        return await new Promise((UU => {
          if (zU instanceof uy) {
            if (!zU.sheen.isEnabled) return void UU(XU);
            this._wasUsed = !0, null == XU.extensions && (XU.extensions = {});
            const cU = {
              sheenColorFactor: zU.sheen.color.cyU(),
              sheenRoughnessFactor: zU.sheen.roughness ?? 0
            };
            null === cU.sheenColorTexture && null === cU.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zU), zU.sheen.texture && (cU.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(zU.sheen.texture) ?? void 0), zU.sheen.textureRoughness && !zU.sheen.useRoughnessFromMainTexture ? cU.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(zU.sheen.textureRoughness) ?? void 0 : zU.sheen.texture && zU.sheen.useRoughnessFromMainTexture && (cU.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(zU.sheen.texture) ?? void 0), XU.extensions[yQ] = cU
          }
          UU(XU)
        }))
      }
    }
    let AQ = !1;

    function FQ() {
      AQ || (AQ = !0, rc.RegisterExtension(yQ, (UU => new QQ(UU))))
    }
    FQ();
    const oQ = "KHR_materials_fuzz";

    function DQ(UU, XU) {
      const zU = new wU.e(XU.name, XU.nS());
      return zU._texture = UU, zU.coordinatesIndex = XU.coordinatesIndex, XU instanceof wU.e && (zU.uOffset = XU.uOffset, zU.vOffset = XU.vOffset, zU.uScale = XU.uScale, zU.vScale = XU.vScale, zU.wAng = XU.wAng), zU.wrapU = XU.wrapU, zU.wrapV = XU.wrapV, zU
    }
    class EQ {
      constructor(UU) {
        this.name = oQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = UU
      }
      dispose() {
        for (const UU of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[UU].dispose()
        }
        this._mergedTexturesMap = {};
        for (const UU of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[UU].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        if (zU instanceof TX) {
          const UU = [];
          if (zU.fuzzWeight > 0) {
            zU.fuzzWeightTexture && UU.push(zU.fuzzWeightTexture);
            let XU = !1;
            if (zU.fuzzRoughnessTexture && (zU._useFuzzRoughnessFromTextureAlpha ? UU.push(zU.fuzzRoughnessTexture) : XU = !0), zU.fuzzColorTexture && !XU && UU.push(zU.fuzzColorTexture), XU) {
              const XU = function(UU) {
                const XU = UU.fuzzColorTexture,
                  zU = XU && XU.getInternalTexture() ? XU.getInternalTexture().uniqueId : "NoFuzzColor",
                  cU = UU.fuzzRoughnessTexture;
                return `FuzzColor_${zU}_FuzzRoughness_${cU&&cU.getInternalTexture()?cU.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(zU);
              if (!this._cachedInternalTexturesMap[XU]) {
                const UU = await async function(UU) {
                  const XU = UU.nS(),
                    zU = UU.fuzzColorTexture,
                    cU = UU.fuzzRoughnessTexture;
                  return zU || cU ? (await Az("FuzzTexture", Dz(zU ? Fz(zU, 0) : oz(1), zU ? Fz(zU, 1) : oz(1), zU ? Fz(zU, 2) : oz(1), cU ? Fz(cU, UU._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : oz(1)), XU)).getInternalTexture() : null
                }(zU);
                UU && (this._cachedInternalTexturesMap[XU] = UU)
              }
              this._cachedInternalTexturesMap[XU] && (zU.fuzzColorTexture && (this._mergedTexturesMap[zU.fuzzColorTexture.uniqueId] = DQ(this._cachedInternalTexturesMap[XU], zU.fuzzColorTexture), UU.push(this._mergedTexturesMap[zU.fuzzColorTexture.uniqueId])), zU.fuzzRoughnessTexture && (this._mergedTexturesMap[zU.fuzzRoughnessTexture.uniqueId] = DQ(this._cachedInternalTexturesMap[XU], zU.fuzzRoughnessTexture), UU.push(this._mergedTexturesMap[zU.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return UU
        }
        return []
      }
      async postExportMaterialAsync(UU, XU, zU) {
        return await new Promise((UU => {
          if (zU instanceof TX) {
            if (0 == zU.fuzzWeight) return void UU(XU);
            this._wasUsed = !0, null == XU.extensions && (XU.extensions = {});
            const cU = {
              fuzzFactor: zU.fuzzWeight,
              fuzzColorFactor: zU.fuzzColor.cyU(),
              fuzzRoughnessFactor: zU.fuzzRoughness
            };
            let yU, QU;
            zU.fuzzWeightTexture && (cU.fuzzTexture = this._exporter._materialExporter.getTextureInfo(zU.fuzzWeightTexture) ?? void 0), zU.fuzzColorTexture && (yU = this._mergedTexturesMap[zU.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[zU.fuzzColorTexture.uniqueId] : zU.fuzzColorTexture, cU.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(yU) ?? void 0), zU.fuzzRoughnessTexture && (QU = this._mergedTexturesMap[zU.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[zU.fuzzRoughnessTexture.uniqueId] : zU.fuzzRoughnessTexture, cU.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(QU) ?? void 0), null === cU.fuzzColorTexture && null === cU.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[oQ] = cU
          }
          UU(XU)
        }))
      }
    }
    let YQ = !1;

    function NQ() {
      YQ || (YQ = !0, rc.RegisterExtension(oQ, (UU => new EQ(UU))))
    }
    NQ();
    const IQ = "KHR_materials_specular";
    class pQ {
      constructor(UU) {
        this.name = IQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        return zU instanceof uy && this._isExtensionEnabled(zU) ? (zU.metallicReflectanceTexture && cU.push(zU.metallicReflectanceTexture), zU.reflectanceTexture && cU.push(zU.reflectanceTexture), cU) : cU
      }
      _isExtensionEnabled(UU) {
        return !UU.unlit && (void 0 != UU.metallicF0Factor && 1 != UU.metallicF0Factor || void 0 != UU.metallicReflectanceColor && !UU.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(UU))
      }
      _hasTexturesExtension(UU) {
        return null != UU.metallicReflectanceTexture || null != UU.reflectanceTexture
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          var cU;
          if (zU instanceof uy && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0, XU.extensions = XU.extensions || {};
            const UU = this._exporter._materialExporter.getTextureInfo(zU.metallicReflectanceTexture) ?? void 0,
              cU = this._exporter._materialExporter.getTextureInfo(zU.reflectanceTexture) ?? void 0,
              yU = {
                specularFactor: 1 == zU.metallicF0Factor ? void 0 : zU.metallicF0Factor,
                specularTexture: UU,
                specularColorFactor: zU.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : zU.metallicReflectanceColor.cyU(),
                specularColorTexture: cU
              };
            this._hasTexturesExtension(zU) && this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[IQ] = yU
          } else if (zU instanceof TX) {
            XU.extensions = XU.extensions || {};
            const yU = this._exporter._materialExporter.getTextureInfo(zU.specularWeightTexture) ?? void 0,
              QU = this._exporter._materialExporter.getTextureInfo(zU.specularColorTexture) ?? void 0,
              AU = 1 == zU.specularWeight ? void 0 : zU.specularWeight,
              FU = zU.specularColor.equalsFloats(1, 1, 1) ? void 0 : zU.specularColor.cyU();
            if (!QU && !yU && void 0 === AU && void 0 === FU) return UU(XU);
            this._wasUsed = !0;
            const oU = {
                specularEdgeColorEnabled: !0
              },
              DU = {
                specularFactor: AU,
                specularTexture: yU,
                specularColorFactor: FU,
                specularColorTexture: QU,
                extensions: {}
              };
            DU.extensions.EXT_materials_specular_edge_color = oU, (cU = this._exporter._glTF).extensionsUsed || (cU.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (yU || QU) && this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[IQ] = DU
          }
          UU(XU)
        }))
      }
    }
    let aQ = !1;

    function tQ() {
      aQ || (aQ = !0, rc.RegisterExtension(IQ, (UU => new pQ(UU))))
    }
    tQ();
    const gQ = "KHR_materials_transmission";
    class kQ {
      constructor(UU) {
        this.name = gQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof uy) {
          if (this._isExtensionEnabled(zU)) return zU.subSurface.refractionIntensityTexture && zU.subSurface.useGltfStyleTextures && cU.push(zU.subSurface.refractionIntensityTexture), cU
        } else zU instanceof TX && (zU.transmissionWeight > 0 && zU.transmissionWeightTexture && (cU.push(zU.transmissionWeightTexture), zU.transmissionColorTexture && cU.push(zU.transmissionColorTexture)), zU.subsurfaceWeight > 0 && zU.subsurfaceWeightTexture && cU.push(zU.subsurfaceWeightTexture));
        return cU
      }
      _isExtensionEnabled(UU) {
        if (UU instanceof TX && !UU.unlit) return UU.transmissionWeight > 0 || UU.subsurfaceWeight > 0;
        if (UU instanceof uy && !UU.unlit) {
          const XU = UU.subSurface;
          return XU.isRefractionEnabled && void 0 != XU.refractionIntensity && 0 != XU.refractionIntensity || null != XU.refractionIntensityTexture && XU.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(UU, XU, zU) {
        if (!this._isExtensionEnabled(zU)) return XU;
        if (zU instanceof uy) {
          this._wasUsed = !0;
          const cU = zU.subSurface,
            yU = {
              transmissionFactor: 0 === cU.refractionIntensity ? void 0 : cU.refractionIntensity
            };
          if (cU.refractionIntensityTexture)
            if (cU.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(zU);
              const UU = this._exporter._materialExporter.getTextureInfo(cU.refractionIntensityTexture);
              UU && (yU.transmissionTexture = UU)
            } else eU.b.Warn(`${UU}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          XU.extensions || (XU.extensions = {}), XU.extensions[gQ] = yU
        } else if (zU instanceof TX) {
          this._wasUsed = !0;
          const UU = {
            transmissionFactor: (1 - zU.transmissionWeight) * zU.subsurfaceWeight + zU.transmissionWeight
          };
          if (zU.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(zU);
            const XU = this._exporter._materialExporter.getTextureInfo(zU.transmissionWeightTexture);
            XU && (UU.transmissionTexture = XU)
          } else if (zU.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(zU);
            const XU = this._exporter._materialExporter.getTextureInfo(zU.subsurfaceWeightTexture);
            XU && (UU.transmissionTexture = XU)
          }
          if (0 == zU.transmissionDepth && (!zU.transmissionColor.equals(lU.b.White()) || zU.transmissionColorTexture) && XU.pbrMetallicRoughness && (XU.pbrMetallicRoughness.baseColorFactor || (XU.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), XU.pbrMetallicRoughness.baseColorFactor[0] *= zU.transmissionColor.r, XU.pbrMetallicRoughness.baseColorFactor[1] *= zU.transmissionColor.g, XU.pbrMetallicRoughness.baseColorFactor[2] *= zU.transmissionColor.b, zU.transmissionColorTexture && !XU.pbrMetallicRoughness.baseColorTexture)) {
            const UU = this._exporter._materialExporter.getTextureInfo(zU.transmissionColorTexture);
            UU && (XU.pbrMetallicRoughness.baseColorTexture = UU, this._exporter._materialNeedsUVsSet.add(zU))
          }
          XU.extensions || (XU.extensions = {}), XU.extensions[gQ] = UU
        }
        return XU
      }
    }
    let GQ = !1;

    function BQ() {
      GQ || (GQ = !0, rc.RegisterExtension(gQ, (UU => new kQ(UU))))
    }
    BQ();
    var ZQ = zU(41351);
    const RQ = "KHR_materials_unlit";
    class PQ {
      constructor() {
        this.name = RQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          let cU = !1;
          zU instanceof uy ? cU = zU.unlit : zU instanceof ZQ.h && (cU = zU.disableLighting), cU && (this._wasUsed = !0, null == XU.extensions && (XU.extensions = {}), XU.extensions[RQ] = {}), UU(XU)
        }))
      }
    }
    let WQ = !1;

    function dQ() {
      WQ || (WQ = !0, rc.RegisterExtension(RQ, (() => new PQ)))
    }
    dQ();
    const LQ = "KHR_materials_volume";
    class eQ {
      constructor(UU) {
        this.name = LQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof uy) {
          if (this._isExtensionEnabled(zU)) return zU.subSurface.thicknessTexture && cU.push(zU.subSurface.thicknessTexture), cU
        } else zU instanceof TX && (zU.transmissionWeight > 0 || zU.subsurfaceWeight > 0) && zU.geometryThicknessTexture && cU.push(zU.geometryThicknessTexture);
        return cU
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const XU = UU.subSurface;
        return !(!XU.isRefractionEnabled && !XU.isTranslucencyEnabled) && (void 0 != XU.maximumThickness && 0 != XU.maximumThickness || void 0 != XU.tintColorAtDistance && XU.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != XU.tintColor && XU.tintColor != lU.b.White() || this._hasTexturesExtension(UU))
      }
      _hasTexturesExtension(UU) {
        return null != UU.subSurface.thicknessTexture
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          if (zU instanceof uy && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0;
            const UU = zU.subSurface,
              cU = {
                thicknessFactor: 0 == UU.maximumThickness ? void 0 : UU.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(UU.thicknessTexture) ?? void 0,
                attenuationDistance: UU.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : UU.tintColorAtDistance,
                attenuationColor: UU.tintColor.equalsFloats(1, 1, 1) ? void 0 : UU.tintColor.cyU()
              };
            this._hasTexturesExtension(zU) && this._exporter._materialNeedsUVsSet.add(zU), XU.extensions = XU.extensions || {}, XU.extensions[LQ] = cU
          } else if (zU instanceof TX) {
            const UU = zU.transmissionWeight > 0 && !zU.geometryThinWalled,
              cU = zU.subsurfaceWeight > 0 && !zU.geometryThinWalled;
            if (UU || cU) {
              this._wasUsed = !0;
              const yU = zU.geometryThickness,
                QU = this._exporter._materialExporter.getTextureInfo(zU.geometryThicknessTexture) ?? void 0;
              let AU;
              QU && this._exporter._materialNeedsUVsSet.add(zU);
              const FU = lU.b.White().cyU();
              if (UU && zU.transmissionDepth > 0) {
                const UU = 1 / zU.transmissionDepth;
                let XU = new HU.q(-Math.log(zU.transmissionColor.r) * UU, -Math.log(zU.transmissionColor.g) * UU, -Math.log(zU.transmissionColor.b) * UU);
                const cU = new HU.q(zU.transmissionScatter.r * UU, zU.transmissionScatter.g * UU, zU.transmissionScatter.b * UU),
                  yU = XU.subtract(cU),
                  QU = Math.min(yU.x, yU.y, yU.z);
                QU < 0 && (yU.x = yU.x - QU, yU.y = yU.y - QU, yU.z = yU.z - QU), XU = yU.add(cU);
                AU = 1 / Math.max(XU.x, XU.y, XU.z), FU[0] = Math.exp(-XU.x * AU), FU[1] = Math.exp(-XU.y * AU), FU[2] = Math.exp(-XU.z * AU)
              } else AU = Number.MAX_VALUE, FU[0] = 1, FU[1] = 1, FU[2] = 1;
              let oU = 1;
              const DU = lU.b.White().cyU();
              if (cU) {
                const UU = zU.subsurfaceRadius,
                  XU = zU.subsurfaceRadiusScale,
                  cU = new HU.q(XU.r, XU.g, XU.b).multiplyByFloats(UU, UU, UU),
                  yU = new HU.q(1 / Math.max(cU.x, 1e-6), 1 / Math.max(cU.y, 1e-6), 1 / Math.max(cU.z, 1e-6));
                oU = 1 / Math.max(yU.x, yU.y, yU.z), DU[0] = Math.exp(-yU.x * oU), DU[1] = Math.exp(-yU.y * oU), DU[2] = Math.exp(-yU.z * oU)
              }
              const EU = (1 - zU.transmissionWeight) * zU.subsurfaceWeight,
                YU = EU + zU.transmissionWeight,
                NU = 1 / Math.max(YU, 1e-6),
                IU = zU.transmissionWeight * NU,
                pU = EU * NU,
                aU = FU.map(((UU, XU) => UU * IU + DU[XU] * pU)),
                tU = {
                  thicknessFactor: yU,
                  thicknessTexture: QU,
                  attenuationDistance: AU * IU + oU * pU,
                  attenuationColor: aU
                };
              XU.extensions = XU.extensions || {}, XU.extensions[LQ] = tU
            }
          }
          UU(XU)
        }))
      }
    }
    let CQ = !1;

    function wQ() {
      CQ || (CQ = !0, rc.RegisterExtension(LQ, (UU => new eQ(UU))))
    }
    wQ();
    const qQ = "KHR_materials_volume_scatter";
    class OQ {
      constructor(UU) {
        this.name = qQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        return zU instanceof TX && (zU.transmissionWeight > 0 && zU.transmissionScatterTexture && cU.push(zU.transmissionScatterTexture), zU.subsurfaceWeight > 0 && zU.subsurfaceColorTexture && cU.push(zU.subsurfaceColorTexture)), cU
      }
      _isExtensionEnabled(UU) {
        if (UU.unlit) return !1;
        const XU = UU.transmissionWeight > 0 && !UU.geometryThinWalled && UU.transmissionDepth > 0 && !UU.transmissionScatter.equals(lU.b.Black()),
          zU = UU.subsurfaceWeight > 0 && !UU.geometryThinWalled;
        return !(!XU && !zU)
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          if (zU instanceof TX && this._isExtensionEnabled(zU)) {
            this._wasUsed = !0;
            let UU = HU.q.Zero(),
              cU = 0;
            if (zU.transmissionWeight > 0) {
              UU = function(UU) {
                const XU = new HU.q(Math.sqrt(1 - UU.x), Math.sqrt(1 - UU.y), Math.sqrt(1 - UU.z)),
                  zU = new HU.q(1, 1, 1),
                  cU = zU.subtract(XU),
                  yU = zU.subtract(new HU.q(.139, .139, .139).multiplyInPlace(XU)),
                  QU = zU.add(new HU.q(1.17, 1.17, 1.17).multiplyInPlace(XU));
                return cU.multiplyInPlace(yU).divideInPlace(QU)
              }(new HU.q(zU.transmissionScatter.r, zU.transmissionScatter.g, zU.transmissionScatter.b)), cU = zU.transmissionScatterAnisotropy
            }
            const yU = HU.q.Zero();
            let QU = 0;
            zU.subsurfaceWeight > 0 && (yU.set(zU.subsurfaceColor.r, zU.subsurfaceColor.g, zU.subsurfaceColor.b), QU = zU.subsurfaceScatterAnisotropy);
            const AU = (1 - zU.transmissionWeight) * zU.subsurfaceWeight,
              FU = AU + zU.transmissionWeight,
              oU = 1 / Math.max(FU, 1e-6),
              DU = zU.transmissionWeight * oU,
              EU = AU * oU,
              YU = {
                multiscatterColorFactor: UU.multiplyByFloats(DU, DU, DU).addInPlace(yU.multiplyByFloats(EU, EU, EU)).cyU(),
                scatterAnisotropy: cU * DU + QU * EU
              };
            if (zU.subsurfaceWeight > 0 && zU.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(zU);
              const UU = this._exporter._materialExporter.getTextureInfo(zU.subsurfaceColorTexture);
              UU && (YU.multiscatterColorTexture = UU)
            } else if (zU.transmissionWeight > 0 && zU.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(zU);
              const UU = this._exporter._materialExporter.getTextureInfo(zU.transmissionScatterTexture);
              UU && (YU.multiscatterColorTexture = UU)
            }
            XU.extensions = XU.extensions || {}, XU.extensions[qQ] = YU
          }
          UU(XU)
        }))
      }
    }
    let SQ = !1;

    function rQ() {
      SQ || (SQ = !0, rc.RegisterExtension(qQ, (UU => new OQ(UU)), 101))
    }
    rQ();
    const uQ = "KHR_materials_diffuse_roughness";
    class fQ {
      constructor(UU) {
        this.name = uQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(UU, XU, zU) {
        const cU = [];
        if (zU instanceof RX) {
          if (zU._baseDiffuseRoughness) return zU._baseDiffuseRoughnessTexture && cU.push(zU._baseDiffuseRoughnessTexture), cU
        } else if (zU instanceof TX && zU.baseDiffuseRoughness) return zU.baseDiffuseRoughnessTexture && cU.push(zU.baseDiffuseRoughnessTexture), cU;
        return []
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          let cU = null,
            yU = null;
          if (zU instanceof RX ? (cU = zU._baseDiffuseRoughness, yU = zU._baseDiffuseRoughnessTexture) : zU instanceof TX && (cU = zU.baseDiffuseRoughness, yU = zU.baseDiffuseRoughnessTexture), !cU) return void UU(XU);
          this._wasUsed = !0, XU.extensions = XU.extensions || {};
          const QU = {
            diffuseRoughnessFactor: cU,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(yU) ?? void 0
          };
          null !== QU.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(zU), XU.extensions[uQ] = QU, UU(XU)
        }))
      }
    }
    let iQ = !1;

    function HQ() {
      iQ || (iQ = !0, rc.RegisterExtension(uQ, (UU => new fQ(UU))))
    }
    HQ();
    const MQ = "KHR_materials_openpbr";
    class vQ {
      constructor() {
        this.name = MQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(UU, XU, zU) {
        return new Promise((UU => {
          zU instanceof TX && (this._wasUsed = !0, XU.extensions = XU.extensions || {}, XU.extensions[MQ] = {}), UU(XU)
        }))
      }
    }
    let VQ = !1;

    function sQ() {
      VQ || (VQ = !0, rc.RegisterExtension(MQ, (() => new vQ)))
    }
    sQ();
    const nQ = "KHR_texture_transform";
    class mQ {
      constructor() {
        this.name = nQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(UU, XU, zU) {
        if (zU.nS() || WX.j.Warn(`${UU}: "scene" is not defined for Babylon texture ${zU.name}!`), (0 !== zU.uAng || 0 !== zU.vAng) && (WX.j.Warn(`${UU}: Texture ${zU.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== zU.uRotationCenter || 0 !== zU.vRotationCenter)) return;
        const cU = {};
        let yU = !1;
        if (0 === zU.uOffset && 0 === zU.vOffset || (cU.offset = [zU.uOffset, zU.vOffset], yU = !0), 1 === zU.uScale && 1 === zU.vScale || (cU.scale = [zU.uScale, zU.vScale], yU = !0), 0 !== zU.wAng) {
          if (0 !== zU.uRotationCenter || 0 !== zU.vRotationCenter) {
            if (zU.homogeneousRotationInUVTransform && zU.uScale !== zU.vScale) return void WX.j.Warn(`${UU}: Texture ${zU.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${nQ}.`);
            WX.j.Warn(`${UU}: Texture ${zU.name} with non-origin rotation center will be exported using an adjusted offset with ${nQ}.`), cU.offset = function(UU) {
              const {
                uOffset: XU,
                vOffset: zU,
                uRotationCenter: cU,
                vRotationCenter: yU,
                uScale: QU,
                vScale: AU,
                wAng: FU
              } = UU, oU = Math.cos(FU), DU = Math.sin(FU), EU = cU * QU, YU = yU * AU;
              return [XU + (EU * (1 - oU) + YU * DU), zU + (YU * (1 - oU) - EU * DU)]
            }(zU)
          }
          cU.rotation = -zU.wAng, yU = !0
        }
        0 !== zU.coordinatesIndex && (cU.texCoord = zU.coordinatesIndex, yU = !0), yU && (this._wasUsed = !0, XU.extensions || (XU.extensions = {}), XU.extensions[nQ] = cU)
      }
    }
    let lQ = !1;

    function xQ() {
      lQ || (lQ = !0, rc.RegisterExtension(nQ, (() => new mQ)))
    }
    xQ();
    var JQ = zU(41152);
    const jQ = "KHR_texture_basisu";
    class KQ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = jQ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      postExportTexture(UU, XU) {
        const zU = this._exporter._textures[XU.index],
          cU = zU.source;
        if (void 0 === cU) return;
        const yU = this._exporter._images[cU];
        "image/ktx2" === (yU.mimeType || (0, JQ.k)(yU.uri)) && (zU.source = void 0, zU.extensions || (zU.extensions = {}), zU.extensions[jQ] = {
          source: cU
        }, this._wasUsed = !0)
      }
    }
    let bQ = !1;

    function TQ() {
      bQ || (bQ = !0, rc.RegisterExtension(jQ, (UU => new KQ(UU))))
    }
    TQ();
    const hQ = "EXT_texture_webp";
    class UA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = hQ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      postExportTexture(UU, XU) {
        const zU = this._exporter._textures[XU.index],
          cU = zU.source;
        if (void 0 === cU) return;
        const yU = this._exporter._images[cU];
        "image/webp" === (yU.mimeType || (0, JQ.k)(yU.uri)) && (zU.source = void 0, zU.extensions || (zU.extensions = {}), zU.extensions[hQ] = {
          source: cU
        }, this._wasUsed = !0)
      }
    }
    let XA = !1;

    function zA() {
      XA || (XA = !0, rc.RegisterExtension(hQ, (UU => new UA(UU))))
    }
    zA();
    const cA = "EXT_texture_avif";
    class yA {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(UU) {
        this.name = cA, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = UU
      }
      dispose() {}
      postExportTexture(UU, XU) {
        const zU = this._exporter._textures[XU.index],
          cU = zU.source;
        if (void 0 === cU) return;
        const yU = this._exporter._images[cU];
        "image/avif" === (yU.mimeType || (0, JQ.k)(yU.uri)) && (zU.source = void 0, zU.extensions || (zU.extensions = {}), zU.extensions[cA] = {
          source: cU
        }, this._wasUsed = !0)
      }
    }
    let QA = !1;

    function AA() {
      QA || (QA = !0, rc.RegisterExtension(cA, (UU => new yA(UU))))
    }
    AA();
    class FA {
      static CreateSTL(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          QU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          FU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          oU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const DU = function(UU, XU, zU) {
            const yU = [3 * UU[zU], 3 * UU[zU + 1], 3 * UU[zU + 2]],
              QU = [new cU.Sp(XU[yU[0]], XU[yU[0] + 2], XU[yU[0] + 1]), new cU.Sp(XU[yU[1]], XU[yU[1] + 2], XU[yU[1] + 1]), new cU.Sp(XU[yU[2]], XU[yU[2] + 2], XU[yU[2] + 1])],
              AU = QU[0].subtract(QU[1]),
              FU = QU[2].subtract(QU[1]);
            return {
              v: QU,
              n: cU.Sp.Cross(FU, AU).normalize()
            }
          },
          YU = function(UU, XU, zU, cU) {
            return XU = NU(UU, XU, zU.x, cU), XU = NU(UU, XU, zU.y, cU), NU(UU, XU, zU.z, cU)
          },
          NU = function(UU, XU, zU, cU) {
            return UU.setFloat32(XU, zU, cU), XU + 4
          },
          pU = function(UU) {
            if (FU) {
              let XU = UU;
              UU instanceof IU.e && (XU = UU.KyU);
              const zU = XU.getVerticesData(EU.e.PositionKind, !0, !0);
              if (!zU) return [];
              const yU = cU.Sp.Zero();
              let QU;
              for (QU = 0; QU < zU.length; QU += 3) cU.Sp.TransformCoordinatesFromFloatsToRef(zU[QU], zU[QU + 1], zU[QU + 2], UU.computeWorldMatrix(!0), yU).toArray(zU, QU);
              return zU
            }
            return UU.getVerticesData(EU.e.PositionKind) || []
          };
        FU && (AU = !0);
        let aU = "",
          tU = 0,
          gU = 0;
        if (yU) {
          for (let zU = 0; zU < UU.length; zU++) {
            const XU = UU[zU].yyU();
            tU += XU ? XU.length / 3 : 0
          }
          const XU = new ArrayBuffer(84 + 50 * tU);
          aU = new DataView(XU), gU += 80, aU.setUint32(gU, tU, QU), gU += 4
        } else oU || (aU = "solid stlmesh\r\n");
        for (let cU = 0; cU < UU.length; cU++) {
          const XU = UU[cU];
          !yU && oU && (aU += "solid " + XU.name + "\r\n"), !AU && XU instanceof Dc.d && XU.bakeCurrentTransformIntoVertices();
          const zU = pU(XU),
            FU = XU.yyU() || [];
          for (let UU = 0; UU < FU.length; UU += 3) {
            const XU = DU(FU, zU, UU);
            yU ? (gU = YU(aU, gU, XU.n, QU), gU = YU(aU, gU, XU.v[0], QU), gU = YU(aU, gU, XU.v[1], QU), gU = YU(aU, gU, XU.v[2], QU), gU += 2) : (aU += "\tfacet normal " + XU.n.x + " " + XU.n.y + " " + XU.n.z + "\r\n", aU += "\t\touter loop\r\n", aU += "\t\t\tvertex " + XU.v[0].x + " " + XU.v[0].y + " " + XU.v[0].z + "\r\n", aU += "\t\t\tvertex " + XU.v[1].x + " " + XU.v[1].y + " " + XU.v[1].z + "\r\n", aU += "\t\t\tvertex " + XU.v[2].x + " " + XU.v[2].y + " " + XU.v[2].z + "\r\n", aU += "\t\tendloop\r\n", aU += "\tendfacet\r\n")
          }!yU && oU && (aU += "endsolid " + name + "\r\n")
        }
        if (yU || oU || (aU += "endsolid stlmesh"), XU) {
          const UU = document.createElement("a"),
            XU = new Blob([aU], {
              type: "application/octet-stream"
            });
          UU.href = window.URL.createObjectURL(XU), UU.download = zU + ".stl", UU.click()
        }
        return aU
      }
    }

    function oA(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const yU = [];
      for (let QU = 0; QU < UU.length / zU; QU++) {
        const AU = UU[QU * zU] * (cU ? -1 : 1),
          FU = UU[QU * zU + 1],
          oU = UU[QU * zU + 2];
        yU.push(`(${AU.toPrecision(XU.precision)}, ${FU.toPrecision(XU.precision)}, ${oU.toPrecision(XU.precision)})`)
      }
      return yU.join(", ")
    }

    function DA(UU, XU) {
      const zU = [];
      for (let cU = 0; cU < UU.length / 2; cU++) {
        const yU = UU[2 * cU],
          QU = UU[2 * cU + 1];
        zU.push(`(${yU.toPrecision(XU.precision)}, ${(1-QU).toPrecision(XU.precision)})`)
      }
      return zU.join(", ")
    }

    function EA(UU, XU, zU, cU) {
      const yU = UU.getVerticesData(EU.e.PositionKind),
        QU = UU.getVerticesData(EU.e.NormalKind);
      if (yU && QU) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${zU}"\n\t\tint[] faceVertexCounts = [${function(UU){const XU=UU.yyU()?.length?UU.getTotalIndices():UU.getTotalVertices();return Array(XU/3).fill(3).join(", ")}(UU)}]\n\t\tint[] faceVertexIndices = [${function(UU){const XU=UU.yyU(),zU=XU?.length??UU.getTotalVertices(),cU=[];if(null!==XU)for(let yU=0;yU<zU;yU++)cU.push(XU[yU]);else for(let yU=0;yU<zU;yU++)cU.push(yU);return cU.join(", ")}(UU)}]\n\t\tnormal3f[] normals = [${oA(QU,XU,void 0,cU)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${oA(yU,XU,void 0,cU)}]\n        ${function(UU,XU){let zU="";for(let yU=0;yU<4;yU++){const cU=yU>0?yU:"",QU=UU.getVerticesData(EU.e.UVKind+(cU?cU+1:""));QU&&(zU+=`\n\t\ttexCoord2f[] primvars:st${cU} = [${DA(QU,XU)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const cU=UU.getVerticesData(EU.e.ColorKind);return cU&&(zU+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        oA(cU, XU, cU.length / UU.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),zU}(UU,XU)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function YA(UU, XU, zU, cU) {
      return `\n        def "Geometry"\n        {\n        ${EA(UU,XU,zU,cU)}\n        }\n        `
    }

    function NA(UU) {
      let XU = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return XU += UU, fflate.strToU8(XU)
    }

    function IA(UU) {
      const XU = UU.m;
      return `( ${pA(XU,0)}, ${pA(XU,4)}, ${pA(XU,8)}, ${pA(XU,12)} )`
    }

    function pA(UU, XU) {
      return `(${UU[XU+0]}, ${UU[XU+1]}, ${UU[XU+2]}, ${UU[XU+3]})`
    }

    function aA(UU, XU) {
      const zU = "Object_" + UU.uniqueId,
        cU = IA(XU);
      return `def Xform "${zU}" (\n\tprepend references = @./geometries/Geometry_${UU.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${cU}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${UU.material.uniqueId}>\n}\n\n`
    }

    function tA(UU) {
      switch (UU) {
        case PU.b.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case PU.b.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case PU.b.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function gA(UU) {
      return `(${UU.x}, ${UU.y})`
    }

    function kA(UU) {
      return `(${UU.r}, ${UU.g}, ${UU.b})`
    }

    function GA(UU) {
      return "image/jpeg" === UU || "image/png" === UU
    }

    function BA(UU, XU, zU, yU, QU, AU) {
      const FU = UU.getInternalTexture().uniqueId + "_" + UU.invertY,
        DU = UU.mimeType || (0, oU.d)(UU.getInternalTexture()?.url ?? ""),
        EU = GA(DU) ? DU : "image/png",
        YU = "image/jpeg" === EU ? "jpg" : "png";
      QU[FU] = {
        texture: UU,
        mimeType: EU,
        ext: YU
      };
      const NU = UU.coordinatesIndex > 0 ? "st" + UU.coordinatesIndex : "st",
        IU = new cU.Vector2(UU.uScale, UU.vScale),
        pU = new cU.Vector2(UU.uOffset, UU.vOffset),
        aU = UU.wAng,
        tU = Math.sin(aU),
        gU = Math.cos(aU);
      return pU.y = 1 - pU.y - IU.y, pU.x += tU * IU.x, pU.y += (1 - gU) * IU.y, `\n    def Shader "PrimvarReader_${zU}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${NU}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${zU}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${XU.uniqueId}/PrimvarReader_${zU}.outputs:result>\n        float inputs:rotation = ${(aU*(180/Math.PI)).toFixed(AU.precision)}\n        float2 inputs:scale = ${gA(IU)}\n        float2 inputs:translation = ${gA(pU)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${UU.uniqueId}_${zU}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${FU}.${YU}@\n        float2 inputs:st.connect = </Root/Materials/Material_${XU.uniqueId}/Transform2d_${zU}.outputs:result>\n        ${yU?"float4 inputs:scale = "+function(UU){return`(${UU.r}, ${UU.g}, ${UU.b}, 1.0)`}(yU):""}\n        token inputs:sourceColorSpace = "${UU.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${tA(UU.wrapU)}"\n        token inputs:wrapT = "${tA(UU.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${XU.needAlphaBlending()||XU.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function ZA(UU, XU, zU) {
      const cU = "\t\t\t",
        yU = [],
        QU = [],
        {
          diffuseMap: AU,
          diffuse: FU,
          alphaCutOff: oU,
          emissiveMap: DU,
          emissive: EU,
          normalMap: YU,
          roughnessMap: NU,
          roughnessChannel: IU,
          roughness: pU,
          metalnessMap: aU,
          metalnessChannel: gU,
          metalness: kU,
          aoMap: GU,
          aoMapChannel: BU,
          aoMapIntensity: ZU,
          alphaMap: RU,
          ior: PU,
          clearCoatEnabled: WU,
          clearCoat: dU,
          clearCoatMap: LU,
          clearCoatRoughness: eU,
          clearCoatRoughnessMap: CU
        } = function(UU) {
          const XU = {
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
          return UU instanceof Qc.StandardMaterial ? {
            ...XU,
            diffuseMap: UU.diffuseTexture,
            diffuse: UU.diffuseColor,
            alphaCutOff: UU.alphaCutOff,
            emissiveMap: UU.emissiveTexture,
            emissive: UU.emissiveColor,
            roughness: 1,
            alphaMap: UU.opacityTexture
          } : UU instanceof RX ? {
            ...XU,
            diffuseMap: UU._albedoTexture,
            diffuse: UU._albedoColor,
            alphaCutOff: UU._alphaCutOff,
            emissiveMap: UU._emissiveTexture,
            emissive: UU._emissiveColor,
            normalMap: UU._bumpTexture,
            roughnessMap: UU._metallicTexture,
            roughnessChannel: UU._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: UU._roughness ?? 1,
            metalnessMap: UU._metallicTexture,
            metalnessChannel: UU._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: UU._metallic ?? 0,
            aoMap: UU._ambientTexture,
            aoMapChannel: UU._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: UU._ambientTextureStrength,
            alphaMap: UU._opacityTexture,
            ior: UU.subSurface.indexOfRefraction,
            clearCoatEnabled: UU.clearCoat.isEnabled,
            clearCoat: UU.clearCoat.intensity,
            clearCoatMap: UU.clearCoat.texture,
            clearCoatRoughness: UU.clearCoat.roughness,
            clearCoatRoughnessMap: UU.clearCoat.useRoughnessFromMainTexture ? UU.clearCoat.texture : UU.clearCoat.textureRoughness
          } : XU
        }(UU);
      return null !== AU ? (yU.push(`${cU}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${AU.uniqueId}_diffuse.outputs:rgb>`), UU.needAlphaBlending() ? yU.push(`${cU}float inputs:opacity.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${AU.uniqueId}_diffuse.outputs:a>`) : UU.needAlphaTesting() && (yU.push(`${cU}float inputs:opacity.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${AU.uniqueId}_diffuse.outputs:a>`), yU.push(`${cU}float inputs:opacityThreshold = ${oU}`)), QU.push(BA(AU, UU, "diffuse", FU, XU, zU))) : yU.push(`${cU}color3f inputs:diffuseColor = ${kA(FU||tU.Color3.White())}`), null !== DU ? (yU.push(`${cU}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${DU.uniqueId}_emissive.outputs:rgb>`), QU.push(BA(DU, UU, "emissive", EU, XU, zU))) : EU && EU.toLuminance() > 0 && yU.push(`${cU}color3f inputs:emissiveColor = ${kA(EU)}`), null !== YU && (yU.push(`${cU}normal3f inputs:normal.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${YU.uniqueId}_normal.outputs:rgb>`), QU.push(BA(YU, UU, "normal", null, XU, zU))), null !== GU && (yU.push(`${cU}float inputs:occlusion.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${GU.uniqueId}_occlusion.outputs:${BU}>`), QU.push(BA(GU, UU, "occlusion", new tU.Color3(ZU, ZU, ZU), XU, zU))), null !== NU ? (yU.push(`${cU}float inputs:roughness.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${NU.uniqueId}_roughness.outputs:${IU}>`), QU.push(BA(NU, UU, "roughness", new tU.Color3(pU, pU, pU), XU, zU))) : yU.push(`${cU}float inputs:roughness = ${pU}`), null !== aU ? (yU.push(`${cU}float inputs:metallic.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${aU.uniqueId}_metallic.outputs:${gU}>`), QU.push(BA(aU, UU, "metallic", new tU.Color3(kU, kU, kU), XU, zU))) : yU.push(`${cU}float inputs:metallic = ${kU}`), null !== RU ? (yU.push(`${cU}float inputs:opacity.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${RU.uniqueId}_opacity.outputs:r>`), yU.push(`${cU}float inputs:opacityThreshold = 0.0001`), QU.push(BA(RU, UU, "opacity", null, XU, zU))) : yU.push(`${cU}float inputs:opacity = ${UU.alpha}`), WU && (null !== LU ? (yU.push(`${cU}float inputs:clearcoat.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${LU.uniqueId}_clearcoat.outputs:r>`), QU.push(BA(LU, UU, "clearcoat", new tU.Color3(dU, dU, dU), XU, zU))) : yU.push(`${cU}float inputs:clearcoat = ${dU}`), null !== CU ? (yU.push(`${cU}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${UU.uniqueId}/Texture_${CU.uniqueId}_clearcoatRoughness.outputs:g>`), QU.push(BA(CU, UU, "clearcoatRoughness", new tU.Color3(eU, eU, eU), XU, zU))) : yU.push(`${cU}float inputs:clearcoatRoughness = ${eU}`)), yU.push(`${cU}float inputs:ior = ${PU}`), `\n\tdef Material "Material_${UU.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${yU.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${UU.uniqueId}/PreviewSurface.outputs:surface>\n\n${QU.join("\n")}\n\n\t}\n`
    }

    function RA(UU) {
      UU.computeWorldMatrix(!0);
      const XU = UU.getWorldMatrix().clone(),
        zU = UU.nS().useRightHandedSystem;
      let cU = UU.material?._getEffectiveOrientation(UU) ?? UU.sideOrientation,
        AU = !zU,
        FU = UU.parent;
      for (; FU;) {
        if (uz(FU, zU) && null === FU.parent) {
          zU || (XU.multiplyToRef(FU.getWorldMatrix().invert(), XU), cU = cU === QU.c.ClockWiseSideOrientation ? QU.c.CounterClockWiseSideOrientation : QU.c.ClockWiseSideOrientation), AU = !1;
          break
        }
        FU = FU.parent
      }
      return XU.determinant() < 0 && yU.Tools.Warn(`Mesh ${UU.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: XU,
        windingOrder: cU === QU.c.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: AU
      }
    }
    async function PA(UU, XU, zU) {
      const QU = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...XU
      };
      "undefined" === typeof fflate && await yU.Tools.LoadScriptAsync(QU.fflateUrl);
      const AU = {};
      AU[QU.modelFileName] = null;
      let FU = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      FU += function(UU) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===UU.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${UU.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${UU.planeAnchoringAlignment}"`:""}\n            `
      }(QU);
      const oU = {};
      for (const cU of UU.meshes) {
        if (0 === cU.getTotalVertices()) continue;
        const UU = cU,
          XU = UU.geometry,
          DU = UU.material;
        if (!DU || !XU || zU && !zU(UU)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(DU.getClassName())) {
          const zU = "geometries/Geometry_" + XU.uniqueId + ".usda",
            {
              matrix: cU,
              windingOrder: yU,
              convertToRightHanded: EU
            } = RA(UU);
          if (!(zU in AU)) {
            const UU = YA(XU, QU, yU, EU);
            AU[zU] = NA(UU)
          }
          DU.uniqueId in oU || (oU[DU.uniqueId] = DU), FU += aA(UU, cU)
        } else yU.Tools.Warn("USDZExportAsync does not support this material type: " + DU.getClassName())
      }
      UU.activeCamera && QU.exportCamera && (FU += function(UU, XU) {
        const zU = "Camera_" + UU.uniqueId,
          yU = IA(cU.Matrix.RotationY(Math.PI).multiply(UU.getWorldMatrix()));
        if (UU.mode === PU.b.ORTHOGRAPHIC_CAMERA) return `def Camera "${zU}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${yU}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${UU.minZ.toPrecision(XU.precision)}, ${UU.maxZ.toPrecision(XU.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(UU.orthoLeft||1)+Math.abs(UU.orthoRight||1))).toPrecision(XU.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(UU.orthoTop||1)+Math.abs(UU.orthoBottom||1))).toPrecision(XU.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const cU = UU.qp().getAspectRatio(UU),
            QU = XU.cameraSensorWidth || 35;
          return `def Camera "${zU}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${yU}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${UU.minZ.toPrecision(XU.precision)}, ${UU.maxZ.toPrecision(XU.precision)})\n\t\t\tfloat focalLength = ${(QU/(2*Math.tan(.5*UU.fov))).toPrecision(XU.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(QU*cU).toPrecision(XU.precision)}\n\t\t\tfloat verticalAperture = ${(QU/cU).toPrecision(XU.precision)}            \n\t\t}\n\t\n\t`
        }
      }(UU.activeCamera, QU)), FU += "\n            }\n        }";
      const DU = {};
      FU += function(UU, XU, zU) {
        const cU = [];
        for (const yU in UU) {
          const QU = UU[yU];
          cU.push(ZA(QU, XU, zU))
        }
        return `\n    def "Materials"\n{\n${cU.join("")}\n}\n\n`
      }(oU, DU, QU), FU += "\n    }", AU[QU.modelFileName] = fflate.strToU8(FU);
      for (const cU in DU) {
        const {
          texture: UU,
          ext: XU,
          mimeType: zU
        } = DU[cU], yU = await gz(UU);
        if (yU && GA(yU.mimeType) && yU.mimeType === zU) AU[`textures/Texture_${cU}.${XU}`] = new Uint8Array(yU.data);
        else {
          const yU = UU.getSize(),
            QU = await (0, BU.f)(UU),
            FU = await WU.DumpTools.DumpDataAsync(yU.width, yU.height, QU, zU, void 0, !1, !0);
          AU[`textures/Texture_${cU}.${XU}`] = new Uint8Array(FU).slice()
        }
      }
      let EU = 0;
      for (const cU in AU) {
        const UU = AU[cU];
        if (!UU) continue;
        EU += 34 + cU.length;
        const XU = 63 & EU;
        if (4 !== XU) {
          const zU = new Uint8Array(64 - XU);
          AU[cU] = [UU, {
            extra: {
              12345: zU
            }
          }]
        }
        EU = UU.length
      }
      return fflate.zipSync(AU, {
        level: 0
      })
    }
    var WA = zU(42199);
    class dA {
      static Export(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (!UU || 0 === UU.bones.length) throw new Error("Invalid or empty skeleton provided");
        let cU = XU;
        XU && 0 !== XU.length || (cU = UU.animations.map((UU => UU.name)));
        let yU = null;
        for (const DU of cU) {
          const XU = UU.getAnimationRange(DU);
          XU && (yU = yU ? new WA.b("animation-range", Math.min(yU.from, XU.from), Math.max(yU.to, XU.to)) : XU)
        }
        if (!yU && (UU.animations.length > 0 && (yU = UU.getAnimationRange(UU.animations[0].name)), !yU)) throw new Error("No animation range found in skeleton");
        const QU = zU || 1 / (UU.animations[0]?.framePerSecond || 30),
          AU = this._BuildBoneHierarchy(UU, cU);
        let FU = 0;
        for (const DU of AU) DU.positionKeys.length > 0 && (FU = Math.max(FU, DU.positionKeys.length)), DU.rotationKeys.length > 0 && (FU = Math.max(FU, DU.rotationKeys.length));
        0 === FU && (FU = Math.floor((yU.to - yU.from) / QU) + 1);
        let oU = "";
        return oU += "HIERARCHY\n", oU += this._ExportHierarchy(AU, 0), oU += "MOTION\n", oU += `Frames: ${FU}\n`, oU += `Frame Time: ${QU.toFixed(6)}\n`, oU += this._ExportMotionData(AU, FU, 0, cU), oU
      }
      static _BuildBoneHierarchy(UU, XU) {
        const zU = new Map,
          cU = [];
        for (const yU of UU.bones) {
          const UU = {
            bone: yU,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          zU.set(yU, UU)
        }
        for (const yU of UU.bones) {
          const UU = zU.get(yU);
          if (yU.animations.length > 0)
            for (const zU of yU.animations) XU.includes(zU.name) && ("position" === zU.targetProperty ? (UU.hasPositionChannels = !0, UU.positionKeys.push(...zU.getKeys())) : "rotationQuaternion" === zU.targetProperty && (UU.hasRotationChannels = !0, UU.rotationKeys.push(...zU.getKeys())));
          if (yU.getParent()) {
            const XU = zU.get(yU.getParent());
            XU && XU.children.push(UU)
          } else cU.push(UU)
        }
        return cU
      }
      static _ExportHierarchy(UU, XU) {
        let zU = "";
        const cU = "    ".repeat(XU);
        for (const yU of UU) {
          const UU = yU.bone;
          if (this._IsEndSite(yU)) {
            zU += `${cU}End Site\n`, zU += `${cU}{\n`;
            const XU = this._GetBoneOffset(UU);
            zU += `${cU}    OFFSET ${XU.x.toFixed(6)} ${XU.y.toFixed(6)} ${XU.z.toFixed(6)}\n`, zU += `${cU}}\n`
          } else {
            zU += `${0===XU?"ROOT":`${cU}JOINT`} ${UU.name}\n`, zU += `${cU}{\n`;
            const QU = this._GetBoneOffset(UU);
            zU += `${cU}    OFFSET ${QU.x.toFixed(6)} ${QU.y.toFixed(6)} ${QU.z.toFixed(6)}\n`;
            const AU = [];
            yU.hasPositionChannels && AU.push("Xposition", "Yposition", "Zposition"), yU.hasRotationChannels && AU.push("Zrotation", "Xrotation", "Yrotation"), AU.length > 0 && (zU += `${cU}    CHANNELS ${AU.length} ${AU.join(" ")}\n`), yU.children.length > 0 && (zU += this._ExportHierarchy(yU.children, XU + 1)), zU += `${cU}}\n`
          }
        }
        return zU
      }
      static _IsEndSite(UU) {
        return 0 === UU.children.length
      }
      static _GetBoneOffset(UU) {
        try {
          if (!UU.getParent()) return UU.getRestMatrix().getTranslation();
          return UU.getLocalMatrix().getTranslation()
        } catch (XU) {
          return cU.Sp.Zero()
        }
      }
      static _ExportMotionData(UU, XU, zU, cU) {
        let yU = "";
        for (let QU = 0; QU < XU; QU++) {
          const XU = [];
          this._CollectFrameValues(UU, QU + zU, XU, cU), yU += XU.map((UU => UU.toFixed(6))).join(" ") + "\n"
        }
        return yU
      }
      static _CollectFrameValues(UU, XU, zU, cU) {
        for (const yU of UU)
          if (!this._IsEndSite(yU)) {
            if (yU.hasPositionChannels) {
              const UU = this._GetPositionAtFrameIndex(yU.positionKeys, XU);
              zU.push(UU.x, UU.y, UU.z)
            }
            if (yU.hasRotationChannels) {
              const UU = this._GetRotationAtFrameIndex(yU.rotationKeys, XU),
                cU = this._QuaternionToEuler(UU);
              zU.push(cU.z, cU.x, cU.y)
            }
            yU.children.length > 0 && this._CollectFrameValues(yU.children, XU, zU, cU)
          }
      }
      static _GetPositionAtFrameIndex(UU, XU) {
        if (0 === UU.length) return cU.Sp.Zero();
        return UU[Math.max(0, Math.min(XU, UU.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(UU, XU) {
        if (0 === UU.length) return cU.Quaternion.Identity();
        return UU[Math.max(0, Math.min(XU, UU.length - 1))].value.clone()
      }
      static _QuaternionToEuler(UU) {
        const XU = new cU.Matrix;
        UU.toRotationMatrix(XU);
        const zU = XU.m;
        let QU, AU, FU;
        const oU = Math.sqrt(zU[0] * zU[0] + zU[1] * zU[1]);
        return oU > Sz.c ? (QU = Math.atan2(zU[6], zU[10]), AU = Math.atan2(-zU[2], oU), FU = Math.atan2(zU[1], zU[0])) : (QU = Math.atan2(-zU[9], zU[5]), AU = Math.atan2(-zU[2], oU), FU = 0), new cU.Sp(yU.Tools.ToDegrees(QU), yU.Tools.ToDegrees(AU), yU.Tools.ToDegrees(FU))
      }
    }

    function LA(UU) {
      return "string" === typeof UU?.name
    }
    const eA = Symbol("__xml:meta$__"),
      CA = Symbol("__xml:name$__");

    function wA(UU, XU) {
      Object.prototype.hasOwnProperty.call(UU.metadata, eA) || (UU.metadata[eA] = []), UU.metadata[eA].push(XU)
    }

    function qA(UU) {
      return (XU, zU) => {
        XU[CA] = UU
      }
    }

    function OA() {
      return (UU, XU) => wA(XU, {
        kind: "none",
        prop: String(XU.name),
        ignore: !0
      })
    }

    function SA(UU) {
      return (XU, zU) => wA(zU, {
        kind: "attr",
        prop: String(zU.name),
        ...UU
      })
    }

    function rA(UU) {
      return (XU, zU) => wA(zU, {
        kind: "elem",
        prop: String(zU.name),
        ...UU
      })
    }

    function uA(UU) {
      const XU = "function" === typeof UU ? UU : UU?.constructor,
        zU = XU?.[Symbol.metadata];
      if (!zU) return [];
      const cU = [];
      let yU = zU;
      for (; yU;) Object.prototype.hasOwnProperty.call(yU, eA) && cU.push(...yU[eA]), yU = Object.getPrototypeOf(yU);
      return cU
    }

    function fA(UU) {
      const XU = UU?.constructor?.[CA];
      return XU || void 0
    }

    function iA(UU) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(UU)
    }

    function HA(UU) {
      if (LA(UU)) return UU;
      const XU = (UU ?? "").trim();
      if (!XU) return {
        name: ""
      };
      const zU = XU.indexOf(":");
      if (-1 === zU) return {
        name: XU
      };
      if (-1 !== XU.indexOf(":", zU + 1)) return {
        name: XU
      };
      const cU = XU.slice(0, zU),
        yU = XU.slice(zU + 1);
      return iA(cU) && iA(yU) ? {
        ns: cU,
        name: yU
      } : {
        name: XU
      }
    }

    function MA(UU, XU) {
      return XU ? `${XU}:${UU}` : UU
    }
    const vA = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      VA = Object.freeze({
        number: vA
      });

    function sA(UU) {
      const XU = UU?.eps ?? vA.eps;
      return {
        eps: XU,
        maxDecimalsCap: UU?.maxDecimalsCap ?? vA.maxDecimalsCap,
        trimTrailingZeros: UU?.trimTrailingZeros ?? vA.trimTrailingZeros,
        fixedDecimals: UU?.fixedDecimals,
        allowScientific: UU?.allowScientific ?? vA.allowScientific,
        snapNearZero: UU?.snapNearZero ?? vA.snapNearZero,
        zeroThreshold: UU?.zeroThreshold ?? XU,
        perAttributeEps: UU?.perAttributeEps
      }
    }

    function nA(UU) {
      return {
        number: sA(UU?.number)
      }
    }
    class mA {
      constructor(UU) {
        if (this.o = UU, this._o = UU.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(UU) {
        if (!Number.isFinite(UU)) throw new Error(`Cannot format non-finite number: ${UU}`);
        const XU = this._o,
          zU = this._clampInt(XU.maxDecimalsCap ?? 15, 0, 20),
          cU = XU.trimTrailingZeros ?? !0,
          yU = XU.snapNearZero ?? !0,
          QU = XU.zeroThreshold ?? XU.eps,
          AU = 1 / XU.eps;
        let FU, oU = Math.round(UU * AU) / AU;
        if (Object.is(oU, -0) && (oU = 0), yU && Math.abs(oU) <= QU && (oU = 0), FU = void 0 !== XU.fixedDecimals ? this._clampInt(XU.fixedDecimals, 0, zU) : this._clampInt(Math.ceil(-Math.log10(XU.eps)), 0, zU), XU.allowScientific, 0 === FU) return String(Math.trunc(oU));
        let DU = oU.toFixed(FU);
        if (cU && void 0 === XU.fixedDecimals && (DU = DU.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(DU)) throw new Error(`Scientific notation not allowed in XML output: ${DU}`);
        return DU
      }
      _clampInt(UU, XU, zU) {
        return Number.isFinite(UU) ? (UU = Math.trunc(UU), Math.max(XU, Math.min(zU, UU))) : XU
      }
    }

    function lA(UU) {
      return UU instanceof Date
    }

    function xA(UU) {
      return "string" === typeof UU
    }

    function JA(UU) {
      return "string" === typeof UU || "number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU || lA(UU)
    }

    function jA(UU) {
      return "number" === typeof UU || "boolean" === typeof UU || "bigint" === typeof UU || lA(UU)
    }
    class KA {
      constructor(UU, XU) {
        this._ns = new Map, this._prefixCount = 0, this._builder = UU, this._format = nA(XU), this._nFmt = new mA(this._format)
      }
      withNamespace() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        for (const cU of XU) this._assignNamespace(cU);
        return this
      }
      serialize(UU, XU) {
        if (!(XU = XU ?? fA(UU))) throw new Error("can not find name for given object");
        const zU = HA(XU);
        zU.ns && this._assignNamespace(zU.ns, "xmlns"), this._gatherNamespaces(UU, new WeakSet);
        const cU = this._builder.ele(null, zU.name);
        for (const [yU, QU] of Array.from(this._ns.entries())) cU.att("xmlns", QU, yU);
        this._writeObjectContent(cU, UU, (new WeakSet).add(UU)), this._builder.end()
      }
      _writeObject(UU, XU, zU) {
        if (zU.has(XU)) return;
        if (zU.add(XU), Array.isArray(XU)) {
          for (const cU of XU) jA(cU) || (xA(cU) ? this._builder.text(cU) : this._writeObject(UU, cU, zU));
          return
        }
        const cU = fA(XU);
        if (!cU) return;
        const yU = HA(cU),
          QU = this._getPrefix(yU),
          AU = MA(yU.name, QU);
        UU.ele(null, AU), this._writeObjectContent(UU, XU, zU), this._builder.end()
      }
      _getPrefix(UU) {
        if (UU.ns) {
          const XU = this._ns.get(UU.ns.toLowerCase());
          if ("xmlns" !== XU) return XU
        }
      }
      _writeObjectContent(UU, XU, zU) {
        const cU = uA(XU) ?? [],
          yU = new Map;
        for (const AU of cU) {
          const UU = yU.get(AU.prop) ?? [];
          UU.push(AU), yU.set(AU.prop, UU)
        }
        const QU = Object.keys(XU).sort(((UU, XU) => {
          const zU = (yU.get(UU) ?? []).some((UU => "attr" === UU.kind));
          return zU === (yU.get(XU) ?? []).some((UU => "attr" === UU.kind)) ? 0 : zU ? -1 : 1
        }));
        for (const AU of QU) {
          const cU = XU[AU];
          if (null === cU || void 0 === cU) continue;
          const QU = yU.get(AU);
          if (QU) {
            if (QU.some((UU => !0 === UU.ignore || "none" === UU.kind))) continue;
            for (const XU of QU) {
              const zU = XU.name ?? XU.prop.toLowerCase();
              if (zU) switch (XU.kind) {
                case "attr": {
                  let yU = null;
                  if ("number" === typeof cU && this._nFmt && (yU = this._nFmt.toString(cU)), XU.formatter) {
                    yU = new XU.formatter(this._format).toString(cU)
                  }
                  if (yU = yU ?? cU.toString(), yU) {
                    const XU = HA(zU),
                      cU = this._getPrefix(XU),
                      QU = MA(XU.name, cU);
                    UU.att(null, QU, yU)
                  }
                  break
                }
              }
            }
          } else jA(cU) || (xA(cU) ? this._builder.text(cU) : this._writeObject(UU, cU, zU))
        }
      }
      _gatherNamespaces(UU, XU) {
        if (XU.has(UU)) return;
        if (XU.add(UU), Array.isArray(UU)) {
          for (const zU of UU) JA(zU) || this._gatherNamespaces(zU, XU);
          return
        }
        const zU = fA(UU);
        zU && this._assignNamespace(zU);
        const cU = uA(UU) ?? [],
          yU = new Map;
        for (const AU of cU) {
          const UU = yU.get(AU.prop) ?? [];
          UU.push(AU), yU.set(AU.prop, UU)
        }
        const QU = [];
        for (const AU of Object.keys(UU)) {
          const XU = UU[AU];
          if (null === XU || void 0 === XU) continue;
          const zU = yU.get(AU);
          if (zU) {
            if (zU.some((UU => !0 === UU.ignore || "none" === UU.kind))) continue;
            for (const UU of zU) UU.name && this._assignNamespace(UU.name)
          }
          QU.push(XU)
        }
        for (const AU of QU) JA(AU) || this._gatherNamespaces(AU, XU)
      }
      _assignNamespace(UU, XU) {
        const zU = HA(UU);
        if (zU?.ns) {
          const UU = zU.ns.toLowerCase();
          this._ns.get(UU) || this._ns.set(UU, XU ?? this._buildNsPrefix(UU))
        } else if ("xmlns" === XU) {
          const UU = zU.name.toLowerCase();
          this._ns.get(UU) || this._ns.set(UU, XU ?? this._buildNsPrefix(UU))
        }
      }
      _buildNsPrefix(UU) {
        let XU, zU = !1;
        do {
          XU = "ns" + this._prefixCount++;
          for (const UU of Array.from(this._ns.values()))
            if (UU === XU) {
              zU = !0;
              break
            }
        } while (zU);
        return XU
      }
    }
    class bA {}
    var TA;
    bA.OpenTag = "<", bA.CloseTag = ">", bA.Slash = "/", bA.Question = "?", bA.Quote = '"', bA.Equal = "=", bA.Space = " ", bA.Semicolon = ":", bA.Dec = "<?xml", bA.Xml = "xml", bA.Xmlns = "xmlns", bA.Xsi = "xsi", bA.VersionKeyword = "version", bA.EncodingKeyword = "encoding", bA.StandaloneKeyword = "standalone",
      function(UU) {
        UU[UU.Declaration = 0] = "Declaration", UU[UU.Tag = 1] = "Tag", UU[UU.Attribute = 2] = "Attribute", UU[UU.Text = 3] = "Text"
      }(TA || (TA = {}));
    class hA {
      constructor(UU) {
        this._ctxStack = [], this._d = 0, this._w = UU
      }
      dec(UU, XU, zU) {
        return this._w.write(bA.Dec), this._writeAttStr(bA.VersionKeyword, UU), XU && this._writeAttStr(bA.EncodingKeyword, XU), void 0 !== zU && this._writeAttStr(bA.StandaloneKeyword, zU ? "yes" : "no"), this._w.write(bA.Question, bA.CloseTag), this
      }
      att(UU, XU, zU) {
        const cU = this._peekContext();
        if (!cU) throw new Error("att() without open element");
        if (cU.closed) throw new Error(`att() after start tag closed for <${cU.name}>`);
        if (this._isXmlnsDecl(UU, XU)) {
          if (XU === bA.Xmlns) cU.defaultNs = zU, this._registerNamespace(cU, "", zU), this._writeAttStr(bA.Xmlns, zU);
          else if (UU) this._registerNamespace(cU, XU, zU), this._writeAttStr(`${UU}:${XU}`, zU);
          else {
            const UU = XU.slice(6);
            this._registerNamespace(cU, UU, zU), this._writeAttStr(XU, zU)
          }
          return cU.lastToken = TA.Attribute, this
        }
        let yU = XU;
        if (UU) {
          yU = `${this._ensurePrefixDeclared(cU,UU)}:${XU}`
        }
        return cU.lastToken = TA.Attribute, this._writeAttStr(yU, zU), this
      }
      ele(UU, XU) {
        const zU = this._peekContext();
        zU && this._closeOpenTagIfNeeded(zU);
        let cU = XU;
        if (UU) {
          cU = `${this._lookupPrefix(UU)??UU}:${XU}`
        }
        return this._pushContext(cU, ++this._d), this._w.write(bA.OpenTag, cU), this
      }
      text(UU) {
        const XU = this._peekContext();
        if (!XU) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(XU), XU.lastToken = TA.Text, this._w.write(this._escText(UU)), this
      }
      end() {
        const UU = this._popContext();
        return UU && (this._d--, UU.closed ? this._w.write(bA.OpenTag, bA.Slash, UU.name, bA.CloseTag) : this._w.write(bA.Slash, bA.CloseTag)), this
      }
      _pushContext(UU, XU) {
        const zU = new hA.Context(UU, XU);
        return this._ctxStack.push(zU), zU
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
      _writeAttStr(UU, XU) {
        this._w.write(bA.Space, UU, bA.Equal, bA.Quote, this._escAttr(XU), bA.Quote)
      }
      _lookupPrefix(UU) {
        let XU = this._ctxStack.length - 1;
        if (XU >= 0)
          do {
            const zU = this._ctxStack[XU--],
              cU = zU.ns2prefix?.get(UU);
            if (cU) return cU
          } while (XU >= 0)
      }
      _escText(UU) {
        return UU.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(UU) {
        return this._escText(UU).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(UU, XU) {
        if (UU) return UU === bA.Xmlns;
        const zU = XU.length,
          cU = bA.Xmlns.length;
        return zU >= cU && (XU.startsWith(bA.Xmlns) && (XU.length == cU || XU[cU] == bA.Semicolon))
      }
      _registerNamespace(UU, XU, zU) {
        if (XU === bA.Xml || XU === bA.Xmlns) throw new Error(`reserved prefix '${XU}'`);
        const cU = UU.prefix2ns.get(XU);
        if (cU && cU !== zU) throw new Error(`prefix '${XU}' already bound to a different namespace`);
        UU.ns2prefix.get(zU) || UU.ns2prefix.set(zU, XU), UU.prefix2ns.set(XU, zU)
      }
      _allocPrefix(UU) {
        let XU = 1;
        for (;;) {
          const zU = "ns" + XU++;
          if (!UU.prefix2ns.has(zU)) return zU
        }
      }
      _ensurePrefixDeclared(UU, XU) {
        const zU = this._lookupPrefix(XU);
        if (zU) return zU;
        if (UU.closed) throw new Error(`can not declare namespace after start tag closed for <${UU.name}>`);
        const cU = this._allocPrefix(UU);
        return this._writeAttStr(`${bA.Xmlns}:${cU}`, XU), this._registerNamespace(UU, cU, XU), cU
      }
      _closeOpenTagIfNeeded(UU) {
        UU.closed || (this._w.write(bA.CloseTag), UU.closed = !0)
      }
    }
    hA.Context = class {
      constructor(UU, XU) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = UU, this.depth = XU
      }
    };
    class UF {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        if (0 === XU.length) return this;
        const cU = XU.join("");
        return this._chunks.push(cU), this.count += cU.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class XF {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = UU, this._opts = XU, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        if (0 === XU.length) return this;
        const cU = XU.join("");
        if (0 === cU.length) return this;
        this._pending += cU, this._pendingChars += cU.length;
        const yU = this._opts.flushChars ?? 65536;
        return this._pendingChars >= yU && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const UU = this._encoder.encode(this._pending);
        return this._sink.push(UU), this.count += UU.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const zF = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      cF = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var yF, QF;
    ! function(UU) {
      UU.micron = "micron", UU.millimeter = "millimeter", UU.centimeter = "centimeter", UU.inch = "inch", UU.foot = "foot", UU.meter = "meter"
    }(yF || (yF = {})),
    function(UU) {
      UU.model = "model", UU.solidsupport = "solidsupport", UU.support = "support", UU.surface = "surface", UU.other = "other"
    }(QF || (QF = {}));
    const AF = "http://schemas.openxmlformats.org/package/2006/content-types",
      FF = "http://schemas.openxmlformats.org/package/2006/relationships";
    var oF;
    ! function(UU) {
      UU.Relationships = "application/vnd.openxmlformats-package.relationships+xml", UU.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", UU.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", UU.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", UU.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", UU.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", UU.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", UU.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", UU.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", UU.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", UU.Png = "image/png", UU.Jpeg = "image/jpeg", UU.Tiff = "image/tiff", UU.Xml = "application/xml"
    }(oF || (oF = {}));
    const DF = "_rels/",
      EF = "3D/",
      YF = "3dmodel.model",
      NF = ".rels",
      IF = "[Content_Types].xml";
    class pF {
      static IsKnown(UU) {
        return pF.Known.has(UU)
      }
      static IsThreeDimModel(UU) {
        return UU === pF.ThreeDimModel
      }
    }
    pF.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", pF.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", pF.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", pF.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", pF.Known = new Set([pF.ThreeDimModel, pF.Thumbnail, pF.PrintTicket, pF.MustPreserve]);
    let aF = (() => {
        let UU, XU, zU = [qA({
            ns: AF,
            name: "Types"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.items = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfContentTypes"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      tF = (() => {
        let UU, XU, zU, cU, yU = [qA({
            ns: AF,
            name: "Default"
          })],
          QU = [],
          AU = [],
          FU = [],
          oU = [],
          DU = [];
        XU = class {
          constructor(UU, XU) {
            this.ext = (0, dU.n)(this, AU, void 0), this.ct = ((0, dU.n)(this, FU), (0, dU.n)(this, oU, void 0)), (0, dU.n)(this, DU), this.ext = UU, this.ct = XU
          }
        };
        return (0, dU.r)(XU, "ThreeMfContentType"), (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: {
              ns: AF,
              name: "Extension"
            }
          })], cU = [SA({
            name: {
              ns: AF,
              name: "ContentType"
            }
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: UU => "ext" in UU,
              get: UU => UU.ext,
              set: (UU, XU) => {
                UU.ext = XU
              }
            },
            metadata: EU
          }, AU, FU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: UU => "ct" in UU,
              get: UU => UU.ct,
              set: (UU, XU) => {
                UU.ct = XU
              }
            },
            metadata: EU
          }, oU, DU), (0, dU.j)(null, UU = {
            value: XU
          }, yU, {
            kind: "class",
            name: XU.name,
            metadata: EU
          }, null, QU), XU = UU.value, EU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          }), (0, dU.n)(XU, QU)
        })(), XU
      })(),
      gF = (() => {
        let UU, XU, zU = [qA({
            ns: FF,
            name: "Relationships"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.items = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfRelationships"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      kF = (() => {
        let UU, XU, zU, cU, yU, QU = [qA({
            ns: FF,
            name: "Relationship"
          })],
          AU = [],
          FU = [],
          oU = [],
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        XU = class {
          constructor(UU, XU, zU) {
            this.id = (0, dU.n)(this, FU, void 0), this.type = ((0, dU.n)(this, oU), (0, dU.n)(this, DU, void 0)), this.target = ((0, dU.n)(this, EU), (0, dU.n)(this, YU, void 0)), (0, dU.n)(this, NU), this.id = UU, this.type = XU, this.target = zU
          }
        };
        return (0, dU.r)(XU, "ThreeMfRelationship"), (() => {
          const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "Id"
          })], cU = [SA({
            name: "Type"
          })], yU = [SA({
            name: "Target"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: UU => "id" in UU,
              get: UU => UU.id,
              set: (UU, XU) => {
                UU.id = XU
              }
            },
            metadata: IU
          }, FU, oU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: UU => "type" in UU,
              get: UU => UU.type,
              set: (UU, XU) => {
                UU.type = XU
              }
            },
            metadata: IU
          }, DU, EU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: UU => "target" in UU,
              get: UU => UU.target,
              set: (UU, XU) => {
                UU.target = XU
              }
            },
            metadata: IU
          }, YU, NU), (0, dU.j)(null, UU = {
            value: XU
          }, QU, {
            kind: "class",
            name: XU.name,
            metadata: IU
          }, null, AU), XU = UU.value, IU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IU
          }), (0, dU.n)(XU, AU)
        })(), XU
      })();
    class GF {
      constructor(UU, XU, zU) {
        this.contentTypes = UU, this.relationships = XU, this.model = zU
      }
    }
    class BF {
      static Zero() {
        return new BF([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(UU) {
        this.values = UU
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class ZF {
      constructor(UU) {
        this.o = UU, this._f = new mA(UU)
      }
      toString(UU) {
        return UU.values.map((UU => this._f.toString(UU))).join(" ")
      }
    }
    let RF = (() => {
        let UU, XU, zU, cU, yU, QU = [qA({
            ns: zF,
            name: "model"
          })],
          AU = [],
          FU = [],
          oU = [],
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        XU = class {
          constructor() {
            this.unit = (0, dU.n)(this, FU, yF.millimeter), this.requiredextensions = ((0, dU.n)(this, oU), (0, dU.n)(this, DU, void 0)), this.recommendedextensions = ((0, dU.n)(this, EU), (0, dU.n)(this, YU, void 0)), this.metadata = (0, dU.n)(this, NU)
          }
        };
        return (0, dU.r)(XU, "ThreeMfModel"), (() => {
          const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "unit"
          })], cU = [SA({
            name: "requiredextensions"
          })], yU = [SA({
            name: "recommendedextensions"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: UU => "unit" in UU,
              get: UU => UU.unit,
              set: (UU, XU) => {
                UU.unit = XU
              }
            },
            metadata: IU
          }, FU, oU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: UU => "requiredextensions" in UU,
              get: UU => UU.requiredextensions,
              set: (UU, XU) => {
                UU.requiredextensions = XU
              }
            },
            metadata: IU
          }, DU, EU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: UU => "recommendedextensions" in UU,
              get: UU => UU.recommendedextensions,
              set: (UU, XU) => {
                UU.recommendedextensions = XU
              }
            },
            metadata: IU
          }, YU, NU), (0, dU.j)(null, UU = {
            value: XU
          }, QU, {
            kind: "class",
            name: XU.name,
            metadata: IU
          }, null, AU), XU = UU.value, IU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IU
          })
        })(), XU.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, dU.n)(XU, AU), XU
      })(),
      PF = (() => {
        let UU, XU, zU, cU, yU, QU = [qA({
            ns: zF,
            name: "meta"
          })],
          AU = [],
          FU = [],
          oU = [],
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        XU = class {
          constructor(UU, XU, zU, cU) {
            this.name = (0, dU.n)(this, FU, void 0), this.preserve = ((0, dU.n)(this, oU), (0, dU.n)(this, DU, void 0)), this.type = ((0, dU.n)(this, EU), (0, dU.n)(this, YU, void 0)), this.value = (0, dU.n)(this, NU), this.name = UU, this.value = XU, this.preserve = zU, this.type = cU
          }
        };
        return (0, dU.r)(XU, "ThreeMfMeta"), (() => {
          const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "name"
          })], cU = [SA({
            name: "preserve"
          })], yU = [SA({
            name: "type"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, XU) => {
                UU.name = XU
              }
            },
            metadata: IU
          }, FU, oU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: UU => "preserve" in UU,
              get: UU => UU.preserve,
              set: (UU, XU) => {
                UU.preserve = XU
              }
            },
            metadata: IU
          }, DU, EU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: UU => "type" in UU,
              get: UU => UU.type,
              set: (UU, XU) => {
                UU.type = XU
              }
            },
            metadata: IU
          }, YU, NU), (0, dU.j)(null, UU = {
            value: XU
          }, QU, {
            kind: "class",
            name: XU.name,
            metadata: IU
          }, null, AU), XU = UU.value, IU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IU
          }), (0, dU.n)(XU, AU)
        })(), XU
      })(),
      WF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "metadatagroup"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfMetadataGroup"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      dF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "resources"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.object = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfResources"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      LF = (() => {
        let UU, XU, zU, cU, yU, QU, AU, FU, oU, DU = [qA({
            ns: zF,
            name: "object"
          })],
          EU = [],
          YU = [],
          NU = [],
          IU = [],
          pU = [],
          aU = [],
          tU = [],
          gU = [],
          kU = [],
          GU = [],
          BU = [],
          ZU = [],
          RU = [],
          PU = [],
          WU = [];
        XU = class {
          constructor(UU) {
            let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QF.model;
            this.id = (0, dU.n)(this, YU, void 0), this.type = ((0, dU.n)(this, NU), (0, dU.n)(this, IU, void 0)), this.thumbnail = ((0, dU.n)(this, pU), (0, dU.n)(this, aU, void 0)), this.partnumber = ((0, dU.n)(this, tU), (0, dU.n)(this, gU, void 0)), this.name = ((0, dU.n)(this, kU), (0, dU.n)(this, GU, void 0)), this.pid = ((0, dU.n)(this, BU), (0, dU.n)(this, ZU, void 0)), this.pindex = ((0, dU.n)(this, RU), (0, dU.n)(this, PU, void 0)), this.metadatagroup = (0, dU.n)(this, WU), this.id = UU, this.type = XU
          }
        };
        return (0, dU.r)(XU, "ThreeMfObject"), (() => {
          const LU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "id"
          })], cU = [SA({
            name: "type"
          })], yU = [SA({
            name: "thumbnail"
          })], QU = [SA({
            name: "partnumber"
          })], AU = [SA({
            name: "name"
          })], FU = [SA({
            name: "pid"
          })], oU = [SA({
            name: "pindex"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: UU => "id" in UU,
              get: UU => UU.id,
              set: (UU, XU) => {
                UU.id = XU
              }
            },
            metadata: LU
          }, YU, NU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: UU => "type" in UU,
              get: UU => UU.type,
              set: (UU, XU) => {
                UU.type = XU
              }
            },
            metadata: LU
          }, IU, pU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: UU => "thumbnail" in UU,
              get: UU => UU.thumbnail,
              set: (UU, XU) => {
                UU.thumbnail = XU
              }
            },
            metadata: LU
          }, aU, tU), (0, dU.j)(null, null, QU, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: UU => "partnumber" in UU,
              get: UU => UU.partnumber,
              set: (UU, XU) => {
                UU.partnumber = XU
              }
            },
            metadata: LU
          }, gU, kU), (0, dU.j)(null, null, AU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, XU) => {
                UU.name = XU
              }
            },
            metadata: LU
          }, GU, BU), (0, dU.j)(null, null, FU, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: UU => "pid" in UU,
              get: UU => UU.pid,
              set: (UU, XU) => {
                UU.pid = XU
              }
            },
            metadata: LU
          }, ZU, RU), (0, dU.j)(null, null, oU, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: UU => "pindex" in UU,
              get: UU => UU.pindex,
              set: (UU, XU) => {
                UU.pindex = XU
              }
            },
            metadata: LU
          }, PU, WU), (0, dU.j)(null, UU = {
            value: XU
          }, DU, {
            kind: "class",
            name: XU.name,
            metadata: LU
          }, null, EU), XU = UU.value, LU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LU
          }), (0, dU.n)(XU, EU)
        })(), XU
      })(),
      eF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "mesh"
          })],
          cU = [];
        XU = class {
          constructor(UU, XU) {
            this.vertices = UU ?? new CF, this.triangles = XU ?? new qF
          }
        };
        return (0, dU.r)(XU, "ThreeMfMesh"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      CF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "vertices"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfVertices"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      wF = (() => {
        let UU, XU, zU, cU, yU, QU = [qA({
            ns: zF,
            name: "vertex"
          })],
          AU = [],
          FU = [],
          oU = [],
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        XU = class {
          constructor() {
            let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, dU.n)(this, FU, void 0), this.y = ((0, dU.n)(this, oU), (0, dU.n)(this, DU, void 0)), this.z = ((0, dU.n)(this, EU), (0, dU.n)(this, YU, void 0)), (0, dU.n)(this, NU), this.x = UU, this.y = XU, this.z = zU
          }
        };
        return (0, dU.r)(XU, "ThreeMfVertex"), (() => {
          const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "x"
          })], cU = [SA({
            name: "y"
          })], yU = [SA({
            name: "z"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: UU => "x" in UU,
              get: UU => UU.x,
              set: (UU, XU) => {
                UU.x = XU
              }
            },
            metadata: IU
          }, FU, oU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: UU => "y" in UU,
              get: UU => UU.y,
              set: (UU, XU) => {
                UU.y = XU
              }
            },
            metadata: IU
          }, DU, EU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: UU => "z" in UU,
              get: UU => UU.z,
              set: (UU, XU) => {
                UU.z = XU
              }
            },
            metadata: IU
          }, YU, NU), (0, dU.j)(null, UU = {
            value: XU
          }, QU, {
            kind: "class",
            name: XU.name,
            metadata: IU
          }, null, AU), XU = UU.value, IU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IU
          }), (0, dU.n)(XU, AU)
        })(), XU
      })(),
      qF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "triangles"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfTriangles"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      OF = (() => {
        let UU, XU, zU, cU, yU, QU, AU, FU, oU, DU = [qA({
            ns: zF,
            name: "triangle"
          })],
          EU = [],
          YU = [],
          NU = [],
          IU = [],
          pU = [],
          aU = [],
          tU = [],
          gU = [],
          kU = [],
          GU = [],
          BU = [],
          ZU = [],
          RU = [],
          PU = [],
          WU = [];
        XU = class {
          constructor(UU, XU, zU) {
            this.v1 = (0, dU.n)(this, YU, void 0), this.v2 = ((0, dU.n)(this, NU), (0, dU.n)(this, IU, void 0)), this.v3 = ((0, dU.n)(this, pU), (0, dU.n)(this, aU, void 0)), this.p1 = ((0, dU.n)(this, tU), (0, dU.n)(this, gU, void 0)), this.p2 = ((0, dU.n)(this, kU), (0, dU.n)(this, GU, void 0)), this.p3 = ((0, dU.n)(this, BU), (0, dU.n)(this, ZU, void 0)), this.pid = ((0, dU.n)(this, RU), (0, dU.n)(this, PU, void 0)), (0, dU.n)(this, WU), this.v1 = UU, this.v2 = XU, this.v3 = zU
          }
        };
        return (0, dU.r)(XU, "ThreeMfTriangle"), (() => {
          const LU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "v1"
          })], cU = [SA({
            name: "v2"
          })], yU = [SA({
            name: "v3"
          })], QU = [SA({
            name: "p1"
          })], AU = [SA({
            name: "p2"
          })], FU = [SA({
            name: "p3"
          })], oU = [SA({
            name: "pid"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: UU => "v1" in UU,
              get: UU => UU.v1,
              set: (UU, XU) => {
                UU.v1 = XU
              }
            },
            metadata: LU
          }, YU, NU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: UU => "v2" in UU,
              get: UU => UU.v2,
              set: (UU, XU) => {
                UU.v2 = XU
              }
            },
            metadata: LU
          }, IU, pU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: UU => "v3" in UU,
              get: UU => UU.v3,
              set: (UU, XU) => {
                UU.v3 = XU
              }
            },
            metadata: LU
          }, aU, tU), (0, dU.j)(null, null, QU, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: UU => "p1" in UU,
              get: UU => UU.p1,
              set: (UU, XU) => {
                UU.p1 = XU
              }
            },
            metadata: LU
          }, gU, kU), (0, dU.j)(null, null, AU, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: UU => "p2" in UU,
              get: UU => UU.p2,
              set: (UU, XU) => {
                UU.p2 = XU
              }
            },
            metadata: LU
          }, GU, BU), (0, dU.j)(null, null, FU, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: UU => "p3" in UU,
              get: UU => UU.p3,
              set: (UU, XU) => {
                UU.p3 = XU
              }
            },
            metadata: LU
          }, ZU, RU), (0, dU.j)(null, null, oU, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: UU => "pid" in UU,
              get: UU => UU.pid,
              set: (UU, XU) => {
                UU.pid = XU
              }
            },
            metadata: LU
          }, PU, WU), (0, dU.j)(null, UU = {
            value: XU
          }, DU, {
            kind: "class",
            name: XU.name,
            metadata: LU
          }, null, EU), XU = UU.value, LU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: LU
          }), (0, dU.n)(XU, EU)
        })(), XU
      })(),
      SF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "components"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.component = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfComponents"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      rF = (() => {
        let UU, XU, zU, cU, yU = [qA({
            ns: zF,
            name: "component"
          })],
          QU = [],
          AU = [],
          FU = [],
          oU = [],
          DU = [];
        XU = class {
          constructor(UU, XU) {
            this.objectid = (0, dU.n)(this, AU, void 0), this.transform = ((0, dU.n)(this, FU), (0, dU.n)(this, oU, void 0)), (0, dU.n)(this, DU), this.objectid = UU, this.transform = XU
          }
        };
        return (0, dU.r)(XU, "ThreeMfComponent"), (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "objectid"
          })], cU = [SA({
            name: "transform",
            formatter: ZF
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: UU => "objectid" in UU,
              get: UU => UU.objectid,
              set: (UU, XU) => {
                UU.objectid = XU
              }
            },
            metadata: EU
          }, AU, FU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: UU => "transform" in UU,
              get: UU => UU.transform,
              set: (UU, XU) => {
                UU.transform = XU
              }
            },
            metadata: EU
          }, oU, DU), (0, dU.j)(null, UU = {
            value: XU
          }, yU, {
            kind: "class",
            name: XU.name,
            metadata: EU
          }, null, QU), XU = UU.value, EU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          }), (0, dU.n)(XU, QU)
        })(), XU
      })(),
      uF = (() => {
        let UU, XU, zU, cU = [qA({
            ns: zF,
            name: "basematerials"
          })],
          yU = [],
          QU = [],
          AU = [];
        XU = class {
          constructor(UU) {
            this.id = (0, dU.n)(this, QU, void 0), this.base = ((0, dU.n)(this, AU), []), this.id = UU
          }
        };
        return (0, dU.r)(XU, "ThreeMfBaseMaterials"), (() => {
          const FU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "id"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: UU => "id" in UU,
              get: UU => UU.id,
              set: (UU, XU) => {
                UU.id = XU
              }
            },
            metadata: FU
          }, QU, AU), (0, dU.j)(null, UU = {
            value: XU
          }, cU, {
            kind: "class",
            name: XU.name,
            metadata: FU
          }, null, yU), XU = UU.value, FU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FU
          }), (0, dU.n)(XU, yU)
        })(), XU
      })(),
      fF = (() => {
        let UU, XU, zU, cU, yU = [qA({
            ns: zF,
            name: "base"
          })],
          QU = [],
          AU = [],
          FU = [],
          oU = [],
          DU = [];
        XU = class {
          constructor(UU, XU) {
            this.name = (0, dU.n)(this, AU, void 0), this.displaycolor = ((0, dU.n)(this, FU), (0, dU.n)(this, oU, void 0)), (0, dU.n)(this, DU), this.name = UU, this.displaycolor = XU
          }
        };
        return (0, dU.r)(XU, "ThreeMfBase"), (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "name"
          })], cU = [SA({
            name: "displaycolor"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, XU) => {
                UU.name = XU
              }
            },
            metadata: EU
          }, AU, FU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: UU => "displaycolor" in UU,
              get: UU => UU.displaycolor,
              set: (UU, XU) => {
                UU.displaycolor = XU
              }
            },
            metadata: EU
          }, oU, DU), (0, dU.j)(null, UU = {
            value: XU
          }, yU, {
            kind: "class",
            name: XU.name,
            metadata: EU
          }, null, QU), XU = UU.value, EU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          }), (0, dU.n)(XU, QU)
        })(), XU
      })(),
      iF = (() => {
        let UU, XU, zU = [qA({
            ns: zF,
            name: "build"
          })],
          cU = [];
        XU = class {
          constructor() {
            this.item = []
          }
        };
        return (0, dU.r)(XU, "ThreeMfBuild"), (() => {
          const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, dU.j)(null, UU = {
            value: XU
          }, zU, {
            kind: "class",
            name: XU.name,
            metadata: yU
          }, null, cU), XU = UU.value, yU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yU
          }), (0, dU.n)(XU, cU)
        })(), XU
      })(),
      HF = (() => {
        let UU, XU, zU, cU, yU, QU = [qA({
            ns: zF,
            name: "item"
          })],
          AU = [],
          FU = [],
          oU = [],
          DU = [],
          EU = [],
          YU = [],
          NU = [];
        XU = class {
          constructor(UU, XU, zU) {
            this.objectid = (0, dU.n)(this, FU, void 0), this.transform = ((0, dU.n)(this, oU), (0, dU.n)(this, DU, void 0)), this.partnumber = ((0, dU.n)(this, EU), (0, dU.n)(this, YU, void 0)), this.metadatagroup = (0, dU.n)(this, NU), this.objectid = UU, this.transform = XU, this.partnumber = zU
          }
        };
        return (0, dU.r)(XU, "ThreeMfItem"), (() => {
          const IU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zU = [SA({
            name: "objectid"
          })], cU = [SA({
            name: "transform",
            formatter: ZF
          })], yU = [SA({
            name: "partnumber"
          })], (0, dU.j)(null, null, zU, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: UU => "objectid" in UU,
              get: UU => UU.objectid,
              set: (UU, XU) => {
                UU.objectid = XU
              }
            },
            metadata: IU
          }, FU, oU), (0, dU.j)(null, null, cU, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: UU => "transform" in UU,
              get: UU => UU.transform,
              set: (UU, XU) => {
                UU.transform = XU
              }
            },
            metadata: IU
          }, DU, EU), (0, dU.j)(null, null, yU, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: UU => "partnumber" in UU,
              get: UU => UU.partnumber,
              set: (UU, XU) => {
                UU.partnumber = XU
              }
            },
            metadata: IU
          }, YU, NU), (0, dU.j)(null, UU = {
            value: XU
          }, QU, {
            kind: "class",
            name: XU.name,
            metadata: IU
          }, null, AU), XU = UU.value, IU && Object.defineProperty(XU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IU
          }), (0, dU.n)(XU, AU)
        })(), XU
      })();
    class MF {
      constructor(UU, XU) {
        this._object = new LF(UU, XU)
      }
      withName(UU) {
        return this._object.name = UU, this
      }
      withThumbnail(UU) {
        return this._object.thumbnail = UU, this
      }
      withProperty(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = UU, this._object.id = XU, this
      }
      build() {
        return this._object
      }
      reset(UU, XU) {
        this._object = new LF(UU, XU)
      }
    }
    class vF extends MF {
      constructor(UU) {
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QF.model), this._object.content = new SF
      }
      withComponent(UU, XU) {
        return this._object.content.component.push(new rF(UU, XU)), this
      }
    }
    class VF extends MF {
      constructor(UU) {
        super(UU, QF.model)
      }
      withPostProcessHandlers(UU, XU) {
        return this._vh = UU, this._th = XU, this
      }
      withData(UU) {
        return this._object.content = this._buildMesh(UU), this
      }
      withMaterial(UU, XU) {
        return this._object.pid = UU, this._object.pindex = XU, this
      }
      _buildMesh(UU) {
        const XU = this._buildVertices(UU.positions),
          zU = this._buildTriangle(UU.indices);
        return new eF(XU, zU)
      }
      _buildVertices(UU) {
        const XU = new CF;
        if (UU)
          for (let zU = 0; zU < UU.length;) {
            const cU = UU[zU++],
              yU = UU[zU++],
              QU = UU[zU++];
            let AU = new wF(cU, yU, QU);
            this._vh && (AU = this._vh(AU)), XU.vertex.push(AU)
          }
        return XU
      }
      _buildTriangle(UU) {
        const XU = new qF;
        if (UU)
          for (let zU = 0; zU < UU.length;) {
            const cU = UU[zU++],
              yU = UU[zU++],
              QU = UU[zU++];
            let AU = new OF(cU, yU, QU);
            this._th && (AU = this._th(AU)), XU.triangle.push(AU)
          }
        return XU
      }
    }
    class sF {
      constructor(UU) {
        this._m = new uF(UU)
      }
      withColor(UU, XU) {
        this._m.base = this._m.base ?? [];
        let zU = this._m.base.find((XU => XU.name.toLowerCase() === UU.toLowerCase()));
        return zU ? (zU.displaycolor = this._rgbaToHex(XU), this) : (zU = new fF(UU, this._rgbaToHex(XU)), this._m.base.push(zU), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(UU) {
        const XU = UU => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(UU, 1 / 2.2)))),
          zU = XU(UU.r).toString(16).padStart(2, "0").toUpperCase(),
          cU = XU(UU.g).toString(16).padStart(2, "0").toUpperCase(),
          yU = XU(UU.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof UU.a) {
          return `#${zU}${cU}${yU}${Math.round(Math.min(255,Math.max(0,255*UU.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${zU}${cU}${yU}`
      }
    }
    class nF {
      constructor() {
        this._model = new RF, this._objects = new Map
      }
      withMetaData(UU, XU, zU, cU) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new PF(UU, XU, zU, cU)), this
      }
      withMaterial(UU) {
        return UU instanceof sF && (UU = UU.build()), UU && (this._model.resources = this._model.resources ?? new dF, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(UU)), this
      }
      withMesh(UU) {
        return UU instanceof VF && (UU = UU.build()), this._model.resources = this._model.resources ?? new dF, this._model.resources.object.push(UU), this
      }
      withComponents(UU) {
        return UU instanceof vF && (UU = UU.build()), this._model.resources = this._model.resources ?? new dF, this._model.resources.object.push(UU), this
      }
      withBuild(UU, XU, zU) {
        return this._model.build = this._model.build ?? new iF, this._model.build.item?.push(new HF(UU, XU, zU)), this
      }
      withUnit(UU) {
        return this._model.unit = UU, this
      }
      reset() {
        return this._model = new RF, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    nF.KnownMetaSet = new Set(RF.KnownMeta.map((UU => UU.toLowerCase())));
    class mF {
      withContentType(UU) {
        this._cts || (this._cts = new aF);
        const XU = this._cts.items;
        return XU.some((XU => XU.ext === UU.ext && XU.ct === UU.ct)) || XU.push(UU), this
      }
      withRelationship(UU) {
        this._rs || (this._rs = new gF);
        const XU = this._rs.items;
        return XU.some((XU => XU.id === UU.id)) || XU.push(UU), this.withContentType(new tF("rels", oF.Relationships)), this
      }
      withModel(UU) {
        return UU instanceof nF && (UU = UU.build()), this._m = UU, this.withContentType(new tF("model", oF.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const UU = `${EF}${YF}`;
        if (!this._rs) {
          const XU = `/${UU}`;
          this.withRelationship(new kF("rel0", pF.ThreeDimModel, XU))
        }
        return new GF(this._cts, this._rs, this._m)
      }
    }
    class lF {
      constructor(UU) {
        this._o = UU
      }
      get options() {
        return this._o
      }
      async serializeAsync(UU) {
        const XU = await this.ensureZipLibReadyAsync();
        if (!XU) return;
        const zU = XU.Zip,
          cU = XU.ZipDeflate;
        if (!zU || !cU) throw new Error("fflate Zip / ZipDeflate not available");
        const yU = function(UU, XU, zU) {
          const yU = new cU(XU, {
            level: 6
          });
          UU.add(yU);
          const QU = function(UU) {
              return {
                push: (XU, zU) => UU.push(XU, zU)
              }
            }(yU),
            AU = new XF(QU),
            FU = new hA(AU).dec("1.0", "UTF-8");
          new KA(FU).serialize(zU), AU.finish()
        };
        for (var QU = arguments.length, AU = new Array(QU > 1 ? QU - 1 : 0), FU = 1; FU < QU; FU++) AU[FU - 1] = arguments[FU];
        const oU = this.toDocument(...AU);
        if (!oU) return;
        const DU = new zU(UU);
        yU(DU, IF, oU.contentTypes), yU(DU, `${DF}${NF}`, oU.relationships), yU(DU, `${EF}${YF}`, oU.model), DU.end()
      }
      toDocument() {
        const UU = (new nF).withUnit(this._o?.unit ?? yF.millimeter);
        if (this.options.metadata)
          for (const yU in this.options.metadata) UU.withMetaData(yU, this.options.metadata[yU]);
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return (new mF).withModel(this.toModel(UU, ...zU)).build()
      }
    }
    class xF {
      static async SerializeToMemoryAsync(UU) {
        const XU = new Array;
        let zU = 0;
        for (var cU = arguments.length, yU = new Array(cU > 1 ? cU - 1 : 0), QU = 1; QU < cU; QU++) yU[QU - 1] = arguments[QU];
        if (await UU.serializeAsync((function(UU, cU, yU) {
            XU.push(cU), zU += cU.length
          }), ...yU), !zU) return;
        const AU = new Uint8Array(zU);
        let FU = 0;
        for (const oU of XU) AU.set(oU, FU), FU += oU.length;
        return AU
      }
    }
    class JF {}
    JF.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class jF {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = UU, this._to = XU, this._step = zU, this._i = UU
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const UU = this._i;
        return this._i += this._step, UU
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class KF extends lF {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...KF.DefaultOptions,
          ...UU
        })
      }
      toModel(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        zU = zU.filter((UU => UU instanceof Dc.d || UU instanceof IU.e));
        const yU = new jF,
          QU = UU,
          AU = new Map,
          FU = this.options.exportInstances ? [] : null;
        for (let oU = 0; oU < zU.length; oU++) {
          const UU = zU[oU];
          if (UU instanceof IU.e) {
            FU?.push(UU);
            continue
          }
          const XU = UU.name || `mesh${oU}`,
            cU = UU.getWorldMatrix(),
            DU = this._handleBabylonTo3mfMatrixTransformToRef(cU, BF.Zero()),
            EU = UU.uB;
          if (void 0 === EU) continue;
          const YU = 1 == EU.length;
          for (let zU = 0; zU < EU.length; zU++) {
            const cU = EU[zU],
              FU = this._extractSubMesh(UU, cU);
            if (FU) {
              const UU = YU ? `${XU}` : `${XU}_${zU}`,
                oU = new VF(yU.next()).withData(FU).withName(UU).build();
              QU.withMesh(oU), QU.withBuild(oU.id, DU), AU.set(cU, oU)
            }
          }
        }
        if (FU && FU.length) {
          const UU = this._groupBy(FU, (UU => UU.KyU));
          for (const [XU, zU] of Array.from(UU.entries()))
            if (zU && zU.length)
              for (let UU = 0; UU < zU.length; UU++) {
                const cU = zU[UU].getWorldMatrix(),
                  yU = XU.uB;
                for (let UU = 0; UU < yU.length; UU++) {
                  const XU = yU[UU],
                    zU = AU.get(XU);
                  zU && QU.withBuild(zU.id, this._handleBabylonTo3mfMatrixTransformToRef(cU, BF.Zero()))
                }
              }
        }
        return QU.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const UU = globalThis;
          return UU.fflate || await yU.Tools.LoadScriptAsync(JF.FFLATEUrl), UU.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(UU, XU) {
        const zU = UU.yyU();
        if (!zU) return;
        const cU = UU.getVerticesData(KF._PositionKind);
        if (!cU) return;
        if (0 == XU.indexStart && XU.indexCount == zU.length) return {
          positions: cU,
          indices: zU
        };
        const yU = XU.indexStart,
          QU = new Map,
          AU = [],
          FU = new Uint32Array(XU.indexCount);
        for (let oU = 0; oU < XU.indexCount; oU++) {
          const UU = zU[yU + oU];
          let XU = QU.get(UU);
          if (void 0 === XU) {
            XU = QU.size, QU.set(UU, XU);
            const zU = 3 * UU;
            AU.push(cU[zU], cU[zU + 1], cU[zU + 2])
          }
          FU[oU] = XU
        }
        return {
          positions: new Float32Array(AU),
          indices: FU
        }
      }
      _groupBy(UU, XU) {
        const zU = new Map;
        for (const cU of UU) {
          const UU = XU(cU),
            yU = zU.get(UU);
          yU ? yU.push(cU) : zU.set(UU, [cU])
        }
        return zU
      }
      _handleBabylonTo3mfMatrixTransformToRef(UU, XU) {
        const zU = UU.multiplyToRef(KF._R_BJS_TO_3MF, HU.e.Zero()).m;
        return XU.values = [zU[0], zU[1], zU[2], zU[4], zU[5], zU[6], zU[8], zU[9], zU[10], zU[12], zU[13], zU[14]], XU
      }
    }
    KF.DefaultOptions = {
      unit: yF.meter,
      exportInstances: !1
    }, KF._PositionKind = "position", KF._R_BJS_TO_3MF = HU.e.RotationX(Math.PI / 2).multiply(HU.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);