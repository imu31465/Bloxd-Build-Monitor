export const id = 224;
export const ids = [224, 229];
export const modules = {
  41407: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(41347),
      Ku = yu(39555);
    let Qu = !1;

    function mu() {
      Qu || (Qu = !0, Ku.e.prototype._sphericalPolynomialTargetSize = 0, Ku.e.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Ku.e.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = Eu.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((uu => {
              this._texture._sphericalPolynomial = uu, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(uu) {
          this._texture && (this._texture._sphericalPolynomial = uu)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36986: (uu, Ru, yu) => {
    yu.d(Ru, {
      Color3: () => Eu.d,
      c: () => Eu.h
    });
    var Eu = yu(36991);
    (0, Eu.j)()
  },
  37525: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(37528);
    class Ku {
      static GetPlanes(uu) {
        const Ru = [];
        for (let yu = 0; yu < 6; yu++) Ru.push(new Eu.d(0, 0, 0, 0));
        return Ku.GetPlanesToRef(uu, Ru), Ru
      }
      static GetNearPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[2], Ru.normal.y = yu[7] + yu[6], Ru.normal.z = yu[11] + yu[10], Ru.d = yu[15] + yu[14], Ru.normalize()
      }
      static GetFarPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[2], Ru.normal.y = yu[7] - yu[6], Ru.normal.z = yu[11] - yu[10], Ru.d = yu[15] - yu[14], Ru.normalize()
      }
      static GetLeftPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[0], Ru.normal.y = yu[7] + yu[4], Ru.normal.z = yu[11] + yu[8], Ru.d = yu[15] + yu[12], Ru.normalize()
      }
      static GetRightPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[0], Ru.normal.y = yu[7] - yu[4], Ru.normal.z = yu[11] - yu[8], Ru.d = yu[15] - yu[12], Ru.normalize()
      }
      static GetTopPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[1], Ru.normal.y = yu[7] - yu[5], Ru.normal.z = yu[11] - yu[9], Ru.d = yu[15] - yu[13], Ru.normalize()
      }
      static GetBottomPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[1], Ru.normal.y = yu[7] + yu[5], Ru.normal.z = yu[11] + yu[9], Ru.d = yu[15] + yu[13], Ru.normalize()
      }
      static GetPlanesToRef(uu, Ru) {
        Ku.GetNearPlaneToRef(uu, Ru[0]), Ku.GetFarPlaneToRef(uu, Ru[1]), Ku.GetLeftPlaneToRef(uu, Ru[2]), Ku.GetRightPlaneToRef(uu, Ru[3]), Ku.GetTopPlaneToRef(uu, Ru[4]), Ku.GetBottomPlaneToRef(uu, Ru[5])
      }
      static IsPointInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; yu++)
          if (Ru[yu].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  37528: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(36830);
    class Ku {
      constructor(uu, Ru, yu, Ku) {
        this.normal = new Eu.p(uu, Ru, yu), this.d = Ku
      }
      AEu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ku(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let uu = this.normal.getHashCode();
        return uu = 397 * uu ^ this.d, uu
      }
      normalize() {
        const uu = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Ru = 0;
        return 0 !== uu && (Ru = 1 / uu), this.normal.x *= Ru, this.normal.y *= Ru, this.normal.z *= Ru, this.d *= Ru, this
      }
      transform(uu) {
        const Ru = Ku._TmpMatrix;
        uu.invertToRef(Ru);
        const yu = Ru.m,
          Eu = this.normal.x,
          Qu = this.normal.y,
          mu = this.normal.z,
          Ju = this.d,
          Nu = Eu * yu[0] + Qu * yu[1] + mu * yu[2] + Ju * yu[3],
          Xu = Eu * yu[4] + Qu * yu[5] + mu * yu[6] + Ju * yu[7],
          Vu = Eu * yu[8] + Qu * yu[9] + mu * yu[10] + Ju * yu[11],
          ru = Eu * yu[12] + Qu * yu[13] + mu * yu[14] + Ju * yu[15];
        return new Ku(Nu, Xu, Vu, ru)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Ru, yu) {
        const Eu = Ru.x - uu.x,
          Ku = Ru.y - uu.y,
          Qu = Ru.z - uu.z,
          mu = yu.x - uu.x,
          Ju = yu.y - uu.y,
          Nu = yu.z - uu.z,
          Xu = Ku * Nu - Qu * Ju,
          Vu = Qu * mu - Eu * Nu,
          ru = Eu * Ju - Ku * mu,
          Bu = Math.sqrt(Xu * Xu + Vu * Vu + ru * ru);
        let xu;
        return xu = 0 !== Bu ? 1 / Bu : 0, this.normal.x = Xu * xu, this.normal.y = Vu * xu, this.normal.z = ru * xu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Ru) {
        return Eu.p.Dot(this.normal, uu) <= Ru
      }
      signedDistanceTo(uu) {
        return Eu.p.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Ku(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Ru, yu) {
        const Eu = new Ku(0, 0, 0, 0);
        return Eu.copyFromPoints(uu, Ru, yu), Eu
      }
      static FromPositionAndNormal(uu, Ru) {
        const yu = new Ku(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Ru, yu)
      }
      static FromPositionAndNormalToRef(uu, Ru, yu) {
        return yu.normal.Oyu(Ru), yu.normal.normalize(), yu.d = -uu.dot(yu.normal), yu
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Ru, yu) {
        const Ku = -(Ru.x * uu.x + Ru.y * uu.y + Ru.z * uu.z);
        return Eu.p.Dot(yu, Ru) + Ku
      }
    }
    Ku._TmpMatrix = Eu.d.Identity()
  },
  36828: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Matrix: () => Eu.d,
      Quaternion: () => Eu.f,
      RegisterMathVector: () => Eu.j,
      TmpVectors: () => Eu.m,
      Vector2: () => Eu.n,
      MS: () => Eu.p,
      Vector4: () => Eu.r
    });
    var Eu = yu(36830);
    (0, Eu.j)()
  },
  37842: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu, Eu) {
        this.x = uu, this.y = Ru, this.width = yu, this.height = Eu
      }
      toGlobal(uu, Ru) {
        return new Eu(this.x * uu, this.y * Ru, this.width * uu, this.height * Ru)
      }
      toGlobalToRef(uu, Ru, yu) {
        return yu.x = this.x * uu, yu.y = this.y * Ru, yu.width = this.width * uu, yu.height = this.height * Ru, this
      }
      clone() {
        return new Eu(this.x, this.y, this.width, this.height)
      }
    }
  },
  41347: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Xu
    });
    var Eu = yu(36830),
      Ku = yu(36865),
      Qu = yu(39547),
      mu = yu(36833),
      Ju = yu(36991);
    class Nu {
      constructor(uu, Ru, yu, Eu) {
        this.name = uu, this.worldAxisForNormal = Ru, this.worldAxisForFileX = yu, this.worldAxisForFileY = Eu
      }
    }
    class Xu {
      static _NearestPow2Floor(uu) {
        return uu <= 1 ? 1 : 1 << Math.floor(Math.log2(uu))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(uu) {
        if (!uu.isCube) return null;
        uu.lD()?.eS().flushFramebuffer();
        const Ru = uu.getSize().width,
          yu = uu._sphericalPolynomialTargetSize,
          Eu = yu > 0 ? this._NearestPow2Floor(yu) : 0,
          Ku = !uu.noMipmap && !0 === uu._texture?.generateMipMaps,
          Qu = Eu > 0 && Eu < Ru && Ku,
          mu = Qu ? Math.max(0, Math.round(Math.log2(Ru / Eu))) : 0,
          Ju = Qu ? Math.max(1, Math.floor(Ru / Math.pow(2, mu))) : Ru,
          Nu = uu.readPixels(0, mu, void 0, !1),
          Xu = uu.readPixels(1, mu, void 0, !1);
        let Vu, ru;
        uu.isRenderTarget ? (Vu = uu.readPixels(3, mu, void 0, !1), ru = uu.readPixels(2, mu, void 0, !1)) : (Vu = uu.readPixels(2, mu, void 0, !1), ru = uu.readPixels(3, mu, void 0, !1));
        const Bu = uu.readPixels(4, mu, void 0, !1),
          xu = uu.readPixels(5, mu, void 0, !1),
          Su = uu.gammaSpace,
          pu = Eu > 0 && Eu < Ru && !Qu;
        return new Promise((uu => {
          Promise.all([Xu, Nu, Vu, ru, Bu, xu]).then((yu => {
            let [Ku, Qu, mu, Nu, Xu, Vu] = yu, ru = Ju;
            if (pu) {
              const uu = 4;
              Ku = this._DownsampleFace(Ku, Ru, Eu, uu), Qu = this._DownsampleFace(Qu, Ru, Eu, uu), mu = this._DownsampleFace(mu, Ru, Eu, uu), Nu = this._DownsampleFace(Nu, Ru, Eu, uu), Xu = this._DownsampleFace(Xu, Ru, Eu, uu), Vu = this._DownsampleFace(Vu, Ru, Eu, uu), ru = Eu
            }
            const Bu = {
              size: ru,
              right: Qu,
              left: Ku,
              up: mu,
              down: Nu,
              front: Xu,
              back: Vu,
              format: 5,
              type: Ku instanceof Float32Array ? 1 : 0,
              gammaSpace: Su
            };
            uu(this.ConvertCubeMapToSphericalPolynomial(Bu))
          }))
        }))
      }
      static _AreaElement(uu, Ru) {
        return Math.atan2(uu * Ru, Math.sqrt(uu * uu + Ru * Ru + 1))
      }
      static _DownsampleFace(uu, Ru, yu, Eu) {
        const Ku = uu instanceof Float32Array ? uu : Float32Array.from(uu),
          Qu = yu * yu * Eu,
          mu = new Float32Array(Qu),
          Ju = Ru / yu,
          Nu = 1 / (Ju * Ju);
        for (let Vu = 0; Vu < yu; Vu++) {
          const uu = Math.floor(Vu * Ju),
            Qu = Math.floor((Vu + 1) * Ju);
          for (let Xu = 0; Xu < yu; Xu++) {
            const ru = Math.floor(Xu * Ju),
              Bu = Math.floor((Xu + 1) * Ju),
              xu = (Vu * yu + Xu) * Eu;
            for (let yu = 0; yu < Eu; yu++) {
              let Ju = 0;
              for (let mu = uu; mu < Qu; mu++)
                for (let uu = ru; uu < Bu; uu++) Ju += Ku[(mu * Ru + uu) * Eu + yu];
              mu[xu + yu] = Ju * Nu
            }
          }
        }
        if (uu instanceof Float32Array) return mu;
        const Xu = new(0, uu.constructor)(Qu);
        for (let Vu = 0; Vu < Qu; Vu++) Xu[Vu] = mu[Vu] + .5 | 0;
        return Xu
      }
      static ConvertCubeMapToSphericalPolynomial(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const yu = Ru > 0 ? this._NearestPow2Floor(Ru) : 0;
        if (yu > 0 && uu.size > yu) {
          const Ru = 5 === uu.format ? 4 : 3,
            Eu = ["right", "left", "up", "down", "front", "back"],
            Ku = {};
          for (const Qu of Eu) Ku[Qu] = this._DownsampleFace(uu[Qu], uu.size, yu, Ru);
          uu = {
            ...uu,
            ...Ku,
            size: yu
          }
        }
        const Eu = new Qu.b;
        let Nu = 0;
        const Xu = 2 / uu.size,
          Vu = Xu,
          ru = .5 * Xu,
          Bu = ru - 1;
        for (let Qu = 0; Qu < 6; Qu++) {
          const Ru = this._FileFaces[Qu],
            yu = uu[Ru.name];
          let xu = Bu;
          const Su = 5 === uu.format ? 4 : 3;
          for (let Qu = 0; Qu < uu.size; Qu++) {
            let pu = Bu;
            for (let Vu = 0; Vu < uu.size; Vu++) {
              const Bu = Ru.worldAxisForFileX.scale(pu).add(Ru.worldAxisForFileY.scale(xu)).add(Ru.worldAxisForNormal);
              Bu.normalize();
              const Tu = this._AreaElement(pu - ru, xu - ru) - this._AreaElement(pu - ru, xu + ru) - this._AreaElement(pu + ru, xu - ru) + this._AreaElement(pu + ru, xu + ru);
              let Wu = yu[Qu * uu.size * Su + Vu * Su + 0],
                ju = yu[Qu * uu.size * Su + Vu * Su + 1],
                Hu = yu[Qu * uu.size * Su + Vu * Su + 2];
              isNaN(Wu) && (Wu = 0), isNaN(ju) && (ju = 0), isNaN(Hu) && (Hu = 0), 0 === uu.type && (Wu /= 255, ju /= 255, Hu /= 255), uu.gammaSpace && (Wu = Math.pow((0, Ku.Clamp)(Wu), mu.g), ju = Math.pow((0, Ku.Clamp)(ju), mu.g), Hu = Math.pow((0, Ku.Clamp)(Hu), mu.g));
              const du = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const uu = Math.max(Wu, ju, Hu);
                if (uu > du) {
                  const Ru = du / uu;
                  Wu *= Ru, ju *= Ru, Hu *= Ru
                }
              } else Wu = (0, Ku.Clamp)(Wu, 0, du), ju = (0, Ku.Clamp)(ju, 0, du), Hu = (0, Ku.Clamp)(Hu, 0, du);
              const bu = new Ju.d(Wu, ju, Hu);
              Eu.addLight(Bu, bu, Tu), Nu += Tu, pu += Xu
            }
            xu += Vu
          }
        }
        const xu = 6 * (4 * Math.PI) / 6 / Nu;
        return Eu.scaleInPlace(xu), Eu.convertIncidentRadianceToIrradiance(), Eu.convertIrradianceToLambertianRadiance(), Qu.e.FromHarmonics(Eu)
      }
    }
    Xu._FileFaces = [new Nu("right", new Eu.p(1, 0, 0), new Eu.p(0, 0, -1), new Eu.p(0, -1, 0)), new Nu("left", new Eu.p(-1, 0, 0), new Eu.p(0, 0, 1), new Eu.p(0, -1, 0)), new Nu("up", new Eu.p(0, 1, 0), new Eu.p(1, 0, 0), new Eu.p(0, 0, 1)), new Nu("down", new Eu.p(0, -1, 0), new Eu.p(1, 0, 0), new Eu.p(0, 0, -1)), new Nu("front", new Eu.p(0, 0, 1), new Eu.p(1, 0, 0), new Eu.p(0, -1, 0)), new Nu("back", new Eu.p(0, 0, -1), new Eu.p(-1, 0, 0), new Eu.p(0, -1, 0))], Xu.MAX_HDRI_VALUE = 4096, Xu.PRESERVE_CLAMPED_COLORS = !1
  },
  41124: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.j,
      d: () => Eu.r
    });
    var Eu = yu(39606);
    (0, Eu.v)()
  },
  37665: (uu, Ru, yu) => {
    function Eu() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Ru = 16 * Math.random() | 0;
        return ("x" === uu ? Ru : 3 & Ru | 8).toString(16)
      }))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  41378: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Qu
    });
    var Eu = yu(41369),
      Ku = yu(41384);
    class Qu {
      static ExpandRGBDTexture(uu) {
        const Ru = uu._texture;
        if (!Ru || !uu.isRGBD) return;
        const Ku = Ru.eS(),
          Qu = Ku.getCaps(),
          mu = Ru.isReady;
        let Ju = !1;
        Qu.textureHalfFloatRender && Qu.textureHalfFloatLinearFiltering ? (Ju = !0, Ru.type = 2) : Qu.textureFloatRender && Qu.textureFloatLinearFiltering && (Ju = !0, Ru.type = 1), Ju && (Ru.isReady = !1, Ru._isRGBD = !1, Ru.invertY = !1);
        const Nu = async () => {
          const Qu = Ku.isWebGPU,
            mu = Qu ? 1 : 0;
          Ru.isReady = !1, Qu ? await yu.e(332).then((() => yu(61242))) : await yu.e(314).then((() => yu(61244)));
          const Ju = new Eu.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Ku, !1, void 0, Ru.type, void 0, null, !1, void 0, mu);
          Ju.externalTextureSamplerBinding = !0;
          const Nu = Ku.createRenderTargetTexture(Ru.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Ru.samplingMode,
            type: Ru.type,
            format: 5
          });
          Ju.onEffectCreatedObservable.addOnce((yu => {
            yu.executeWhenCompiled((() => {
              Ju.onApply = uu => {
                uu._bindTexture("textureSampler", Ru), uu.setFloat2("scale", 1, 1)
              }, uu.lD()?.postProcessManager.directRender([Ju], Nu, !0), Ku.restoreDefaultFramebuffer(), Ku._releaseTexture(Ru), Ju && Ju.dispose(), Nu._swapAndDie(Ru), Ru.isReady = !0
            }))
          }))
        };
        Ju && (mu ? Nu() : uu.onLoadObservable.addOnce(Nu))
      }
      static async EncodeTextureToRGBD(uu, Ru) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Ru.eS().isWebGPU ? await yu.e(333).then((() => yu(61261))) : await yu.e(315).then((() => yu(61255))), await (0, Ku.c)("rgbdEncode", uu, Ru, Eu, 1, 5)
      }
    }
  },
  60982: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AsyncLoop: () => Eu.d,
      RegisterTools: () => Eu.g,
      Tools: () => Eu.i,
      className: () => Eu.j
    });
    var Eu = yu(39655);
    (0, Eu.g)()
  },
  41432: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    class Eu {
      constructor(uu) {
        this._pendingActions = new Array, this._workerInfos = uu.map((uu => ({
          workerPromise: Promise.resolve(uu),
          idle: !0
        })))
      }
      dispose() {
        for (const uu of this._workerInfos) uu.workerPromise.then((uu => {
          uu.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(uu) {
        this._executeOnIdleWorker(uu) || this._pendingActions.push(uu)
      }
      _executeOnIdleWorker(uu) {
        for (const Ru of this._workerInfos)
          if (Ru.idle) return this._execute(Ru, uu), !0;
        return !1
      }
      _execute(uu, Ru) {
        uu.idle = !1, uu.workerPromise.then((yu => {
          Ru(yu, (() => {
            const Ru = this._pendingActions.shift();
            Ru ? this._execute(uu, Ru) : uu.idle = !0
          }))
        }))
      }
    }
    class Ku extends Eu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ku.DefaultOptions;
        super([]), this._maxWorkers = uu, this._createWorkerAsync = Ru, this._options = yu
      }
      push(uu) {
        if (!this._executeOnIdleWorker(uu))
          if (this._workerInfos.length < this._maxWorkers) {
            const Ru = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Ru), this._execute(Ru, uu)
          } else this._pendingActions.push(uu)
      }
      _execute(uu, Ru) {
        uu.timeoutId && (clearTimeout(uu.timeoutId), delete uu.timeoutId), super._execute(uu, ((yu, Eu) => {
          Ru(yu, (() => {
            Eu(), uu.idle && (uu.timeoutId = setTimeout((() => {
              uu.workerPromise.then((uu => {
                uu.terminate()
              }));
              const Ru = this._workerInfos.indexOf(uu); - 1 !== Ru && this._workerInfos.splice(Ru, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Ku.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61020: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AbstractThreeMfSerializer: () => YJ,
      BVHExporter: () => Am,
      ContentTypeFileName: () => SJ,
      DefaultXmlSerializerFormatOptions: () => wm,
      DefaultXmlSerializerNumberOptions: () => Fm,
      EXT_lights_area: () => TK,
      EXT_mesh_gpu_instancing: () => LE,
      EXT_texture_avif: () => Km,
      EXT_texture_webp: () => um,
      GLTF2Export: () => lE,
      GLTFData: () => Xu,
      GetXmlFieldMeta: () => lm,
      GetXmlName: () => gm,
      IsQualifiedName: () => Dm,
      KHR_draco_mesh_compression: () => vE,
      KHR_interactivity: () => XK,
      KHR_lights_punctual: () => QK,
      KHR_materials_anisotropy: () => dK,
      KHR_materials_clearcoat: () => AK,
      KHR_materials_coat: () => nK,
      KHR_materials_diffuse_roughness: () => gQ,
      KHR_materials_diffuse_transmission: () => LK,
      KHR_materials_dispersion: () => ZK,
      KHR_materials_emissive_strength: () => YK,
      KHR_materials_fuzz: () => VQ,
      KHR_materials_ior: () => vK,
      KHR_materials_iridescence: () => RQ,
      KHR_materials_openpbr: () => FQ,
      KHR_materials_sheen: () => QQ,
      KHR_materials_specular: () => SQ,
      KHR_materials_transmission: () => jQ,
      KHR_materials_unlit: () => kQ,
      KHR_materials_volume: () => MQ,
      KHR_materials_volume_scatter: () => nQ,
      KHR_texture_basisu: () => OQ,
      KHR_texture_transform: () => PQ,
      Known3mfRelationshipTypes: () => pJ,
      KnownI3mfContentType: () => XJ,
      Matrix3d: () => bJ,
      MatrixFormatter: () => CJ,
      ModelFileName: () => BJ,
      NumberFormatter: () => Pm,
      OBJExport: () => mu,
      Object3dDirName: () => rJ,
      OpenXmlContentTypesNamespace: () => JJ,
      OpenXmlRelationshipsNamespace: () => NJ,
      RegisterEXT_lights_area: () => jK,
      RegisterEXT_mesh_gpu_instancing: () => FE,
      RegisterEXT_texture_avif: () => mm,
      RegisterEXT_texture_webp: () => ym,
      RegisterKHR_draco_mesh_compression: () => fE,
      RegisterKHR_interactivity: () => rK,
      RegisterKHR_lights_punctual: () => JK,
      RegisterKHR_materials_anisotropy: () => CK,
      RegisterKHR_materials_clearcoat: () => MK,
      RegisterKHR_materials_coat: () => tK,
      RegisterKHR_materials_diffuse_roughness: () => LQ,
      RegisterKHR_materials_diffuse_transmission: () => FK,
      RegisterKHR_materials_dispersion: () => PK,
      RegisterKHR_materials_emissive_strength: () => qK,
      RegisterKHR_materials_fuzz: () => BQ,
      RegisterKHR_materials_ior: () => fK,
      RegisterKHR_materials_iridescence: () => EQ,
      RegisterKHR_materials_openpbr: () => ZQ,
      RegisterKHR_materials_sheen: () => JQ,
      RegisterKHR_materials_specular: () => TQ,
      RegisterKHR_materials_transmission: () => dQ,
      RegisterKHR_materials_unlit: () => AQ,
      RegisterKHR_materials_volume: () => GQ,
      RegisterKHR_materials_volume_scatter: () => tQ,
      RegisterKHR_texture_basisu: () => aQ,
      RegisterKHR_texture_transform: () => YQ,
      RelationshipDirName: () => VJ,
      RelationshipFileName: () => xJ,
      ResolveFormatOptions: () => hm,
      ResolveNumberOptions: () => Zm,
      STLExport: () => Jm,
      ST_ObjectType: () => mJ,
      ST_Unit: () => QJ,
      StringXmlWriter: () => RJ,
      ThreeDimModelNamespace: () => EJ,
      ThreeMf: () => oJ,
      ThreeMfBase: () => cJ,
      ThreeMfBaseMaterials: () => gJ,
      ThreeMfBuild: () => LJ,
      ThreeMfComponent: () => lJ,
      ThreeMfComponents: () => tJ,
      ThreeMfComponentsBuilder: () => wJ,
      ThreeMfContentType: () => WJ,
      ThreeMfContentTypes: () => TJ,
      ThreeMfDocument: () => dJ,
      ThreeMfDocumentBuilder: () => iJ,
      ThreeMfItem: () => zJ,
      ThreeMfMaterialBuilder: () => hJ,
      ThreeMfMesh: () => IJ,
      ThreeMfMeshBuilder: () => ZJ,
      ThreeMfMeta: () => eJ,
      ThreeMfMetadataGroup: () => AJ,
      ThreeMfModel: () => kJ,
      ThreeMfModelBuilder: () => PJ,
      ThreeMfObject: () => MJ,
      ThreeMfObjectBuilder: () => FJ,
      ThreeMfRelationship: () => HJ,
      ThreeMfRelationships: () => jJ,
      ThreeMfResources: () => DJ,
      ThreeMfSerializer: () => vJ,
      ThreeMfSerializerGlobalConfiguration: () => qJ,
      ThreeMfTriangle: () => sJ,
      ThreeMfTriangles: () => nJ,
      ThreeMfVertex: () => UJ,
      ThreeMfVertices: () => GJ,
      ToQualifiedString: () => zm,
      TokenType: () => fm,
      TriangleSetsNamespace: () => KJ,
      USDZExportAsync: () => km,
      Utf8XmlWriterToBytes: () => yJ,
      XmlAttr: () => sm,
      XmlBuilder: () => uJ,
      XmlElem: () => tm,
      XmlIgnore: () => nm,
      XmlName: () => Um,
      XmlNameToParts: () => Lm,
      XmlSerializer: () => Om,
      _ConvertToGLTFPBRMetallicRoughness: () => Ay,
      _SolveMetallic: () => ey,
      __IGLTFExporterExtension: () => Ju
    });
    var Eu = yu(36828),
      Ku = yu(60982),
      Qu = yu(39863);
    class mu {
      static OBJ(uu, Ru, yu, mu) {
        const Ju = [];
        let Nu = 1,
          Xu = 1;
        Ru && (yu || (yu = "mat"), Ju.push("mtllib " + yu + ".mtl"));
        for (let Vu = 0; Vu < uu.length; Vu++) {
          const yu = uu[Vu],
            ru = yu.name || `mesh${Vu}}`;
          Ju.push(`o ${ru}`);
          let Bu = null;
          if (mu) {
            const uu = yu.computeWorldMatrix(!0);
            Bu = new Eu.Matrix, uu.invertToRef(Bu), yu.bakeTransformIntoVertices(uu)
          }
          if (Ru) {
            const uu = yu.material;
            uu && Ju.push("usemtl " + uu.id)
          }
          const xu = yu.geometry;
          if (!xu) {
            Ku.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Su = xu.getVerticesData("position"),
            pu = xu.getVerticesData("normal"),
            Tu = xu.getVerticesData("uv"),
            Wu = xu.DEu();
          let ju = 0,
            Hu = 0;
          if (!Su || !Wu) {
            Ku.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const du = uu[0].lD().useRightHandedSystem ? 1 : -1;
          for (let uu = 0; uu < Su.length; uu += 3) Ju.push("v " + Su[uu] * du + " " + Su[uu + 1] + " " + Su[uu + 2]), ju++;
          if (null != pu)
            for (let uu = 0; uu < pu.length; uu += 3) Ju.push("vn " + pu[uu] * du + " " + pu[uu + 1] + " " + pu[uu + 2]);
          if (null != Tu)
            for (let uu = 0; uu < Tu.length; uu += 2) Ju.push("vt " + Tu[uu] + " " + Tu[uu + 1]), Hu++;
          const bu = ["", "", ""],
            Cu = (yu.material || yu.lD().defaultMaterial)._getEffectiveOrientation(yu),
            [ku, eu] = Cu === Qu.d.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let uu = 0; uu < Wu.length; uu += 3) {
            const Ru = [String(Wu[uu] + Nu), String(Wu[uu + ku] + Nu), String(Wu[uu + eu] + Nu)],
              yu = [String(Wu[uu] + Xu), String(Wu[uu + ku] + Xu), String(Wu[uu + eu] + Xu)],
              Eu = Ru,
              Ku = null != Tu ? yu : bu,
              Qu = null != pu ? Ru : bu;
            Ju.push("f " + Eu[0] + "/" + Ku[0] + "/" + Qu[0] + " " + Eu[1] + "/" + Ku[1] + "/" + Qu[1] + " " + Eu[2] + "/" + Ku[2] + "/" + Qu[2])
          }
          mu && Bu && yu.bakeTransformIntoVertices(Bu), Nu += ju, Xu += Hu
        }
        return Ju.join("\n")
      }
      static MTL(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const yu = [],
          Eu = uu.material;
        yu.push("newmtl " + Ru), yu.push("  Ns " + Eu.specularPower.toFixed(4)), yu.push("  Ni 1.5000"), yu.push("  d " + Eu.alpha.toFixed(4)), yu.push("  Tr 0.0000"), yu.push("  Tf 1.0000 1.0000 1.0000"), yu.push("  illum 2"), yu.push("  Ka " + Eu.ambientColor.r.toFixed(4) + " " + Eu.ambientColor.g.toFixed(4) + " " + Eu.ambientColor.b.toFixed(4)), yu.push("  Kd " + Eu.diffuseColor.r.toFixed(4) + " " + Eu.diffuseColor.g.toFixed(4) + " " + Eu.diffuseColor.b.toFixed(4)), yu.push("  Ks " + Eu.specularColor.r.toFixed(4) + " " + Eu.specularColor.g.toFixed(4) + " " + Eu.specularColor.b.toFixed(4)), yu.push("  Ke " + Eu.emissiveColor.r.toFixed(4) + " " + Eu.emissiveColor.g.toFixed(4) + " " + Eu.emissiveColor.b.toFixed(4));
        Eu.ambientTexture && yu.push("  map_Ka " + Eu.ambientTexture.name), Eu.diffuseTexture && yu.push("  map_Kd " + Eu.diffuseTexture.name), Eu.specularTexture && yu.push("  map_Ks " + Eu.specularTexture.name), Eu.bumpTexture && yu.push("  map_bump -imfchan z " + Eu.bumpTexture.name), Eu.opacityTexture && yu.push("  map_d " + Eu.opacityTexture.name);
        return yu.join("\n")
      }
    }
    var Ju = 0,
      Nu = yu(41124);
    class Xu {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const uu in this.files) {
          const Ru = this.files[uu],
            yu = new Blob([Ru], {
              type: (0, Nu.b)(uu)
            });
          Ku.Tools.Download(yu, uu)
        }
      }
    }
    var Vu = yu(40732),
      ru = yu(40683),
      Bu = yu(41197),
      xu = yu(40692),
      Su = yu(39380),
      pu = yu(36851),
      Tu = yu(36986),
      Wu = yu(36865);
    const ju = Wu.HighestCommonFactor,
      Hu = {
        ...Wu,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: ju
      };
    var du = yu(41384),
      bu = yu(40709),
      Cu = yu(41165),
      ku = yu(41171),
      eu = yu(41401);
    (0, eu.RegisterDumpTools)();
    var Au = yu(39560),
      Du = yu(39566),
      Mu = yu(38448),
      Iu = yu(39667),
      Gu = yu(40054),
      Uu = yu(41378);
    let nu = 0;
    const su = (uu, Ru, yu, Eu) => {
        if (!uu[yu]) {
          const Ku = uu.useDelayedTextureLoading;
          uu.useDelayedTextureLoading = !1;
          const Qu = uu._blockEntityCollection;
          uu._blockEntityCollection = !1;
          const mu = Gu.h.CreateFromBase64String(Ru, Eu + nu++, uu, !0, !1, Gu.h.BILINEAR_SAMPLINGMODE);
          uu._blockEntityCollection = Qu;
          const Ju = uu.eS().getLoadedTexturesCache(),
            Nu = Ju.indexOf(mu.getInternalTexture()); - 1 !== Nu && Ju.splice(Nu, 1), mu.isRGBD = !0, mu.wrapU = Gu.h.CLAMP_ADDRESSMODE, mu.wrapV = Gu.h.CLAMP_ADDRESSMODE, uu[yu] = mu, uu.useDelayedTextureLoading = Ku, Uu.c.ExpandRGBDTexture(mu);
          const Xu = uu.eS().onContextRestoredObservable.add((() => {
            mu.isRGBD = !0;
            const Ru = uu.onBeforeRenderObservable.add((() => {
              mu.isReady() && (uu.onBeforeRenderObservable.remove(Ru), Uu.c.ExpandRGBDTexture(mu))
            }))
          }));
          uu.zD.add((() => {
            uu.eS().onContextRestoredObservable.remove(Xu)
          }))
        }
        return uu[yu]
      },
      tu = uu => su(uu, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      lu = uu => su(uu, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      gu = uu => su(uu, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var cu = yu(39647),
      Lu = yu(36830),
      zu = yu(39706),
      Fu = yu(39854),
      wu = yu(39939);
    class Zu extends Fu.e {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let hu = (() => {
      var uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
      let Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu = wu.d,
        du = [],
        bu = [],
        Cu = [],
        ku = [],
        eu = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [];
      return uu = class extends Hu {
        get useEnergyConservation() {
          return (0, Au.e)(this, Ru, "f")
        }
        set useEnergyConservation(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, Au.e)(this, yu, "f")
        }
        set useSmithVisibilityHeightCorrelated(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get useSphericalHarmonics() {
          return (0, Au.e)(this, Eu, "f")
        }
        set useSphericalHarmonics(uu) {
          (0, Au.f)(this, Eu, uu, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, Au.e)(this, Ku, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(uu) {
          (0, Au.f)(this, Ku, uu, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, Au.e)(this, Qu, "f")
        }
        set mixIblRadianceWithIrradiance(uu) {
          (0, Au.f)(this, Qu, uu, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, Au.e)(this, mu, "f")
        }
        set useLegacySpecularEnergyConservation(uu) {
          (0, Au.f)(this, mu, uu, "f")
        }
        get baseDiffuseModel() {
          return (0, Au.e)(this, Ju, "f")
        }
        set baseDiffuseModel(uu) {
          (0, Au.f)(this, Ju, uu, "f")
        }
        get dielectricSpecularModel() {
          return (0, Au.e)(this, Nu, "f")
        }
        set dielectricSpecularModel(uu) {
          (0, Au.f)(this, Nu, uu, "f")
        }
        get conductorSpecularModel() {
          return (0, Au.e)(this, Xu, "f")
        }
        set conductorSpecularModel(uu) {
          (0, Au.f)(this, Xu, uu, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Vu) {
          let ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Vu, "PBRBRDF", 90, new Zu, ru), this._useEnergyConservation = uu.DEFAULT_USE_ENERGY_CONSERVATION, Ru.set(this, (0, Au.l)(this, du, uu.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, Au.l)(this, bu), uu.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), yu.set(this, (0, Au.l)(this, Cu, uu.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, Au.l)(this, ku), uu.DEFAULT_USE_SPHERICAL_HARMONICS), Eu.set(this, (0, Au.l)(this, eu, uu.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, Au.l)(this, Mu), uu.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Ku.set(this, (0, Au.l)(this, Iu, uu.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, Au.l)(this, Gu), uu.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Qu.set(this, (0, Au.l)(this, Uu, uu.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, Au.l)(this, nu), uu.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), mu.set(this, (0, Au.l)(this, su, uu.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, Au.l)(this, tu), uu.DEFAULT_DIFFUSE_MODEL), Ju.set(this, (0, Au.l)(this, lu, uu.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, Au.l)(this, gu), uu.DEFAULT_DIELECTRIC_SPECULAR_MODEL), Nu.set(this, (0, Au.l)(this, cu, uu.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, Au.l)(this, Lu), uu.DEFAULT_CONDUCTOR_SPECULAR_MODEL), Xu.set(this, (0, Au.l)(this, zu, uu.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, Au.l)(this, Fu), this._internalMarkAllSubMeshesAsMiscDirty = Vu._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(uu) {
          uu.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, uu.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, uu.SPHERICAL_HARMONICS = this._useSphericalHarmonics, uu.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, uu.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, uu.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, uu.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, uu.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, uu.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, Ku = new WeakMap, Qu = new WeakMap, mu = new WeakMap, Ju = new WeakMap, Nu = new WeakMap, Xu = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hu[Symbol.metadata] ?? null) : void 0;
        Vu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], ru = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], Bu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], xu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], Su = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], pu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], Tu = [(0, Du.K)("baseDiffuseModel"), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], Wu = [(0, Du.K)("dielectricSpecularModel"), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], ju = [(0, Du.K)("conductorSpecularModel"), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], (0, Au.h)(uu, null, Vu, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: uu => "useEnergyConservation" in uu,
            get: uu => uu.useEnergyConservation,
            set: (uu, Ru) => {
              uu.useEnergyConservation = Ru
            }
          },
          metadata: Ru
        }, du, bu), (0, Au.h)(uu, null, ru, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSmithVisibilityHeightCorrelated" in uu,
            get: uu => uu.useSmithVisibilityHeightCorrelated,
            set: (uu, Ru) => {
              uu.useSmithVisibilityHeightCorrelated = Ru
            }
          },
          metadata: Ru
        }, Cu, ku), (0, Au.h)(uu, null, Bu, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSphericalHarmonics" in uu,
            get: uu => uu.useSphericalHarmonics,
            set: (uu, Ru) => {
              uu.useSphericalHarmonics = Ru
            }
          },
          metadata: Ru
        }, eu, Mu), (0, Au.h)(uu, null, xu, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSpecularGlossinessInputEnergyConservation" in uu,
            get: uu => uu.useSpecularGlossinessInputEnergyConservation,
            set: (uu, Ru) => {
              uu.useSpecularGlossinessInputEnergyConservation = Ru
            }
          },
          metadata: Ru
        }, Iu, Gu), (0, Au.h)(uu, null, Su, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: uu => "mixIblRadianceWithIrradiance" in uu,
            get: uu => uu.mixIblRadianceWithIrradiance,
            set: (uu, Ru) => {
              uu.mixIblRadianceWithIrradiance = Ru
            }
          },
          metadata: Ru
        }, Uu, nu), (0, Au.h)(uu, null, pu, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLegacySpecularEnergyConservation" in uu,
            get: uu => uu.useLegacySpecularEnergyConservation,
            set: (uu, Ru) => {
              uu.useLegacySpecularEnergyConservation = Ru
            }
          },
          metadata: Ru
        }, su, tu), (0, Au.h)(uu, null, Tu, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseDiffuseModel" in uu,
            get: uu => uu.baseDiffuseModel,
            set: (uu, Ru) => {
              uu.baseDiffuseModel = Ru
            }
          },
          metadata: Ru
        }, lu, gu), (0, Au.h)(uu, null, Wu, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: uu => "dielectricSpecularModel" in uu,
            get: uu => uu.dielectricSpecularModel,
            set: (uu, Ru) => {
              uu.dielectricSpecularModel = Ru
            }
          },
          metadata: Ru
        }, cu, Lu), (0, Au.h)(uu, null, ju, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: uu => "conductorSpecularModel" in uu,
            get: uu => uu.conductorSpecularModel,
            set: (uu, Ru) => {
              uu.conductorSpecularModel = Ru
            }
          },
          metadata: Ru
        }, zu, Fu), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu.DEFAULT_USE_ENERGY_CONSERVATION = !0, uu.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, uu.DEFAULT_USE_SPHERICAL_HARMONICS = !0, uu.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, uu.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, uu.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, uu.DEFAULT_DIFFUSE_MODEL = 0, uu.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, uu.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, uu
    })();
    var Pu = yu(39840),
      iu = yu(36991),
      Yu = yu(39845),
      ou = yu(39676),
      qu = yu(39923),
      Ou = yu(39921),
      vu = yu(39931),
      au = yu(39905);
    class fu extends Fu.e {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let uR = (() => {
      var uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu;
      let Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu = wu.d,
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [],
        zu = [],
        Fu = [],
        Zu = [],
        hu = [],
        Pu = [],
        Yu = [],
        ou = [],
        qu = [],
        vu = [],
        uR = [],
        RR = [],
        yR = [],
        ER = [],
        KR = [],
        QR = [],
        mR = [],
        JR = [];
      return uu = class extends eu {
        get isEnabled() {
          return (0, Au.e)(this, Ru, "f")
        }
        set isEnabled(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        get indexOfRefraction() {
          return (0, Au.e)(this, yu, "f")
        }
        set indexOfRefraction(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get texture() {
          return (0, Au.e)(this, Eu, "f")
        }
        set texture(uu) {
          (0, Au.f)(this, Eu, uu, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Au.e)(this, Ku, "f")
        }
        set useRoughnessFromMainTexture(uu) {
          (0, Au.f)(this, Ku, uu, "f")
        }
        get textureRoughness() {
          return (0, Au.e)(this, Qu, "f")
        }
        set textureRoughness(uu) {
          (0, Au.f)(this, Qu, uu, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, Au.e)(this, mu, "f")
        }
        set remapF0OnInterfaceChange(uu) {
          (0, Au.f)(this, mu, uu, "f")
        }
        get bumpTexture() {
          return (0, Au.e)(this, Ju, "f")
        }
        set bumpTexture(uu) {
          (0, Au.f)(this, Ju, uu, "f")
        }
        get isTintEnabled() {
          return (0, Au.e)(this, Nu, "f")
        }
        set isTintEnabled(uu) {
          (0, Au.f)(this, Nu, uu, "f")
        }
        get tintTexture() {
          return (0, Au.e)(this, Xu, "f")
        }
        set tintTexture(uu) {
          (0, Au.f)(this, Xu, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Vu) {
          let ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Vu, "PBRClearCoat", 100, new fu, ru), this._isEnabled = !1, Ru.set(this, (0, Au.l)(this, Mu, !1)), this.intensity = ((0, Au.l)(this, Iu), (0, Au.l)(this, Gu, 1)), this.roughness = ((0, Au.l)(this, Uu), (0, Au.l)(this, nu, 0)), this._indexOfRefraction = ((0, Au.l)(this, su), uu._DefaultIndexOfRefraction), yu.set(this, (0, Au.l)(this, tu, uu._DefaultIndexOfRefraction)), this._texture = ((0, Au.l)(this, lu), null), Eu.set(this, (0, Au.l)(this, gu, null)), this._useRoughnessFromMainTexture = ((0, Au.l)(this, cu), !0), Ku.set(this, (0, Au.l)(this, Lu, !0)), this._textureRoughness = ((0, Au.l)(this, zu), null), Qu.set(this, (0, Au.l)(this, Fu, null)), this._remapF0OnInterfaceChange = ((0, Au.l)(this, Zu), !0), mu.set(this, (0, Au.l)(this, hu, !0)), this._bumpTexture = ((0, Au.l)(this, Pu), null), Ju.set(this, (0, Au.l)(this, Yu, null)), this._isTintEnabled = ((0, Au.l)(this, ou), !1), Nu.set(this, (0, Au.l)(this, qu, !1)), this.tintColor = ((0, Au.l)(this, vu), (0, Au.l)(this, uR, iu.d.White())), this.tintColorAtDistance = ((0, Au.l)(this, RR), (0, Au.l)(this, yR, 1)), this.tintThickness = ((0, Au.l)(this, ER), (0, Au.l)(this, KR, 1)), this._tintTexture = ((0, Au.l)(this, QR), null), Xu.set(this, (0, Au.l)(this, mR, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Au.l)(this, JR), this._internalMarkAllSubMeshesAsTexturesDirty = Vu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Ru, yu) {
          if (!this._isEnabled) return !0;
          const Eu = this._material._disableBumpMap;
          if (uu._areTexturesDirty && Ru.texturesEnabled) {
            if (this._texture && Ou.e.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Ou.e.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (yu.getCaps().standardDerivatives && this._bumpTexture && Ou.e.ClearCoatBumpTextureEnabled && !Eu && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && Ou.e.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Ru, yu) {
          this._isEnabled ? (Ru.CLEARCOAT = !0, Ru.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Ru.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Ru._areTexturesDirty && yu.texturesEnabled && (this._texture && Ou.e.ClearCoatTextureEnabled ? (0, au.fb)(this._texture, Ru, "CLEARCOAT_TEXTURE") : Ru.CLEARCOAT_TEXTURE = !1, this._textureRoughness && Ou.e.ClearCoatTextureEnabled ? (0, au.fb)(this._textureRoughness, Ru, "CLEARCOAT_TEXTURE_ROUGHNESS") : Ru.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && Ou.e.ClearCoatBumpTextureEnabled ? (0, au.fb)(this._bumpTexture, Ru, "CLEARCOAT_BUMP") : Ru.CLEARCOAT_BUMP = !1, Ru.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === uu._DefaultIndexOfRefraction, this._isTintEnabled ? (Ru.CLEARCOAT_TINT = !0, this._tintTexture && Ou.e.ClearCoatTintTextureEnabled ? ((0, au.fb)(this._tintTexture, Ru, "CLEARCOAT_TINT_TEXTURE"), Ru.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Ru.CLEARCOAT_TINT_TEXTURE = !1) : (Ru.CLEARCOAT_TINT = !1, Ru.CLEARCOAT_TINT_TEXTURE = !1))) : (Ru.CLEARCOAT = !1, Ru.CLEARCOAT_TEXTURE = !1, Ru.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Ru.CLEARCOAT_BUMP = !1, Ru.CLEARCOAT_TINT = !1, Ru.CLEARCOAT_TINT_TEXTURE = !1, Ru.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Ru.CLEARCOAT_DEFAULTIOR = !1, Ru.CLEARCOAT_TEXTUREDIRECTUV = 0, Ru.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Ru.CLEARCOAT_BUMPDIRECTUV = 0, Ru.CLEARCOAT_REMAP_F0 = !1, Ru.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Ru.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(uu, Ru, yu, Eu) {
          if (!this._isEnabled) return;
          const Ku = Eu.materialDefines,
            Qu = this._material.isFrozen,
            mu = this._material._disableBumpMap,
            Ju = this._material._invertNormalMapX,
            Nu = this._material._invertNormalMapY;
          if (!uu.useUbo || !Qu || !uu.isSync) {
            (this._texture || this._textureRoughness) && Ou.e.ClearCoatTextureEnabled && (uu.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, au.E)(this._texture, uu, "clearCoat"), this._textureRoughness && !Ku.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, au.E)(this._textureRoughness, uu, "clearCoatRoughness")), this._bumpTexture && yu.getCaps().standardDerivatives && Ou.e.ClearCoatTextureEnabled && !mu && (uu.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, au.E)(this._bumpTexture, uu, "clearCoatBump"), Ru._mirroredCameraPosition ? uu.updateFloat2("vClearCoatTangentSpaceParams", Ju ? 1 : -1, Nu ? 1 : -1) : uu.updateFloat2("vClearCoatTangentSpaceParams", Ju ? -1 : 1, Nu ? -1 : 1)), this._tintTexture && Ou.e.ClearCoatTintTextureEnabled && (uu.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, au.E)(this._tintTexture, uu, "clearCoatTint")), uu.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const Eu = 1 - this._indexOfRefraction,
              Qu = 1 + this._indexOfRefraction,
              Xu = Math.pow(-Eu / Qu, 2),
              Vu = 1 / this._indexOfRefraction;
            uu.updateFloat4("vClearCoatRefractionParams", Xu, Vu, Eu, Qu), this._isTintEnabled && (uu.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), uu.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Ru.texturesEnabled && (this._texture && Ou.e.ClearCoatTextureEnabled && uu.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Ku.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && Ou.e.ClearCoatTextureEnabled && uu.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && yu.getCaps().standardDerivatives && Ou.e.ClearCoatBumpTextureEnabled && !mu && uu.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && Ou.e.ClearCoatTintTextureEnabled && uu.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(uu) {
          return this._texture === uu || (this._textureRoughness === uu || (this._bumpTexture === uu || this._tintTexture === uu))
        }
        getActiveTextures(uu) {
          this._texture && uu.push(this._texture), this._textureRoughness && uu.push(this._textureRoughness), this._bumpTexture && uu.push(this._bumpTexture), this._tintTexture && uu.push(this._tintTexture)
        }
        getAnimatables(uu) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && uu.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && uu.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && uu.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && uu.push(this._tintTexture)
        }
        dispose(uu) {
          uu && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(uu, Ru, yu) {
          return uu.CLEARCOAT_BUMP && Ru.addFallback(yu++, "CLEARCOAT_BUMP"), uu.CLEARCOAT_TINT && Ru.addFallback(yu++, "CLEARCOAT_TINT"), uu.CLEARCOAT && Ru.addFallback(yu++, "CLEARCOAT"), yu
        }
        getSamplers(uu) {
          uu.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, Ku = new WeakMap, Qu = new WeakMap, mu = new WeakMap, Ju = new WeakMap, Nu = new WeakMap, Xu = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(eu[Symbol.metadata] ?? null) : void 0;
        Vu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ru = [(0, Du.K)()], Bu = [(0, Du.K)()], xu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Su = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], pu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Tu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Wu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ju = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Hu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], du = [(0, Du.n)()], bu = [(0, Du.K)()], Cu = [(0, Du.K)()], ku = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], (0, Au.h)(uu, null, Vu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Ru) => {
              uu.isEnabled = Ru
            }
          },
          metadata: Ru
        }, Mu, Iu), (0, Au.h)(uu, null, xu, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "indexOfRefraction" in uu,
            get: uu => uu.indexOfRefraction,
            set: (uu, Ru) => {
              uu.indexOfRefraction = Ru
            }
          },
          metadata: Ru
        }, tu, lu), (0, Au.h)(uu, null, Su, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Ru) => {
              uu.texture = Ru
            }
          },
          metadata: Ru
        }, gu, cu), (0, Au.h)(uu, null, pu, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMainTexture" in uu,
            get: uu => uu.useRoughnessFromMainTexture,
            set: (uu, Ru) => {
              uu.useRoughnessFromMainTexture = Ru
            }
          },
          metadata: Ru
        }, Lu, zu), (0, Au.h)(uu, null, Tu, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "textureRoughness" in uu,
            get: uu => uu.textureRoughness,
            set: (uu, Ru) => {
              uu.textureRoughness = Ru
            }
          },
          metadata: Ru
        }, Fu, Zu), (0, Au.h)(uu, null, Wu, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: uu => "remapF0OnInterfaceChange" in uu,
            get: uu => uu.remapF0OnInterfaceChange,
            set: (uu, Ru) => {
              uu.remapF0OnInterfaceChange = Ru
            }
          },
          metadata: Ru
        }, hu, Pu), (0, Au.h)(uu, null, ju, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "bumpTexture" in uu,
            get: uu => uu.bumpTexture,
            set: (uu, Ru) => {
              uu.bumpTexture = Ru
            }
          },
          metadata: Ru
        }, Yu, ou), (0, Au.h)(uu, null, Hu, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isTintEnabled" in uu,
            get: uu => uu.isTintEnabled,
            set: (uu, Ru) => {
              uu.isTintEnabled = Ru
            }
          },
          metadata: Ru
        }, qu, vu), (0, Au.h)(uu, null, ku, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintTexture" in uu,
            get: uu => uu.tintTexture,
            set: (uu, Ru) => {
              uu.tintTexture = Ru
            }
          },
          metadata: Ru
        }, mR, JR), (0, Au.h)(null, null, ru, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Ru) => {
              uu.intensity = Ru
            }
          },
          metadata: Ru
        }, Gu, Uu), (0, Au.h)(null, null, Bu, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughness" in uu,
            get: uu => uu.roughness,
            set: (uu, Ru) => {
              uu.roughness = Ru
            }
          },
          metadata: Ru
        }, nu, su), (0, Au.h)(null, null, du, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColor" in uu,
            get: uu => uu.tintColor,
            set: (uu, Ru) => {
              uu.tintColor = Ru
            }
          },
          metadata: Ru
        }, uR, RR), (0, Au.h)(null, null, bu, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColorAtDistance" in uu,
            get: uu => uu.tintColorAtDistance,
            set: (uu, Ru) => {
              uu.tintColorAtDistance = Ru
            }
          },
          metadata: Ru
        }, yR, ER), (0, Au.h)(null, null, Cu, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintThickness" in uu,
            get: uu => uu.tintThickness,
            set: (uu, Ru) => {
              uu.tintThickness = Ru
            }
          },
          metadata: Ru
        }, KR, QR), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu._DefaultIndexOfRefraction = 1.5, uu
    })();
    class RR extends Fu.e {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let yR = (() => {
      var uu, Ru, yu, Eu;
      let Ku, Qu, mu, Ju, Nu, Xu, Vu, ru = wu.d,
        Bu = [],
        xu = [],
        Su = [],
        pu = [],
        Tu = [],
        Wu = [],
        ju = [],
        Hu = [],
        du = [],
        bu = [],
        Cu = [],
        ku = [],
        eu = [],
        Mu = [];
      return uu = class extends ru {
        get isEnabled() {
          return (0, Au.e)(this, Ru, "f")
        }
        set isEnabled(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        get texture() {
          return (0, Au.e)(this, yu, "f")
        }
        set texture(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get thicknessTexture() {
          return (0, Au.e)(this, Eu, "f")
        }
        set thicknessTexture(uu) {
          (0, Au.f)(this, Eu, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Ku) {
          let Qu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Ku, "PBRIridescence", 110, new RR, Qu), this._isEnabled = !1, Ru.set(this, (0, Au.l)(this, Bu, !1)), this.intensity = ((0, Au.l)(this, xu), (0, Au.l)(this, Su, 1)), this.minimumThickness = ((0, Au.l)(this, pu), (0, Au.l)(this, Tu, uu._DefaultMinimumThickness)), this.maximumThickness = ((0, Au.l)(this, Wu), (0, Au.l)(this, ju, uu._DefaultMaximumThickness)), this.indexOfRefraction = ((0, Au.l)(this, Hu), (0, Au.l)(this, du, uu._DefaultIndexOfRefraction)), this._texture = ((0, Au.l)(this, bu), null), yu.set(this, (0, Au.l)(this, Cu, null)), this._thicknessTexture = ((0, Au.l)(this, ku), null), Eu.set(this, (0, Au.l)(this, eu, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Au.l)(this, Mu), this._internalMarkAllSubMeshesAsTexturesDirty = Ku._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Ru) {
          if (!this._isEnabled) return !0;
          if (uu._areTexturesDirty && Ru.texturesEnabled) {
            if (this._texture && Ou.e.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && Ou.e.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uu, Ru) {
          this._isEnabled ? (uu.IRIDESCENCE = !0, uu._areTexturesDirty && Ru.texturesEnabled && (this._texture && Ou.e.IridescenceTextureEnabled ? (0, au.fb)(this._texture, uu, "IRIDESCENCE_TEXTURE") : uu.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && Ou.e.IridescenceTextureEnabled ? (0, au.fb)(this._thicknessTexture, uu, "IRIDESCENCE_THICKNESS_TEXTURE") : uu.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (uu.IRIDESCENCE = !1, uu.IRIDESCENCE_TEXTURE = !1, uu.IRIDESCENCE_THICKNESS_TEXTURE = !1, uu.IRIDESCENCE_TEXTUREDIRECTUV = 0, uu.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(uu, Ru) {
          if (!this._isEnabled) return;
          const yu = this._material.isFrozen;
          uu.useUbo && yu && uu.isSync || ((this._texture || this._thicknessTexture) && Ou.e.IridescenceTextureEnabled && (uu.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, au.E)(this._texture, uu, "iridescence"), this._thicknessTexture && (0, au.E)(this._thicknessTexture, uu, "iridescenceThickness")), uu.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Ru.texturesEnabled && (this._texture && Ou.e.IridescenceTextureEnabled && uu.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && Ou.e.IridescenceTextureEnabled && uu.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(uu) {
          return this._texture === uu || this._thicknessTexture === uu
        }
        getActiveTextures(uu) {
          this._texture && uu.push(this._texture), this._thicknessTexture && uu.push(this._thicknessTexture)
        }
        getAnimatables(uu) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && uu.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && uu.push(this._thicknessTexture)
        }
        dispose(uu) {
          uu && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(uu, Ru, yu) {
          return uu.IRIDESCENCE && Ru.addFallback(yu++, "IRIDESCENCE"), yu
        }
        getSamplers(uu) {
          uu.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(ru[Symbol.metadata] ?? null) : void 0;
        Ku = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Qu = [(0, Du.K)()], mu = [(0, Du.K)()], Ju = [(0, Du.K)()], Nu = [(0, Du.K)()], Xu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], (0, Au.h)(uu, null, Ku, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Ru) => {
              uu.isEnabled = Ru
            }
          },
          metadata: Ru
        }, Bu, xu), (0, Au.h)(uu, null, Xu, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Ru) => {
              uu.texture = Ru
            }
          },
          metadata: Ru
        }, Cu, ku), (0, Au.h)(uu, null, Vu, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "thicknessTexture" in uu,
            get: uu => uu.thicknessTexture,
            set: (uu, Ru) => {
              uu.thicknessTexture = Ru
            }
          },
          metadata: Ru
        }, eu, Mu), (0, Au.h)(null, null, Qu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Ru) => {
              uu.intensity = Ru
            }
          },
          metadata: Ru
        }, Su, pu), (0, Au.h)(null, null, mu, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "minimumThickness" in uu,
            get: uu => uu.minimumThickness,
            set: (uu, Ru) => {
              uu.minimumThickness = Ru
            }
          },
          metadata: Ru
        }, Tu, Wu), (0, Au.h)(null, null, Ju, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "maximumThickness" in uu,
            get: uu => uu.maximumThickness,
            set: (uu, Ru) => {
              uu.maximumThickness = Ru
            }
          },
          metadata: Ru
        }, ju, Hu), (0, Au.h)(null, null, Nu, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "indexOfRefraction" in uu,
            get: uu => uu.indexOfRefraction,
            set: (uu, Ru) => {
              uu.indexOfRefraction = Ru
            }
          },
          metadata: Ru
        }, du, bu), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu._DefaultMinimumThickness = 100, uu._DefaultMaximumThickness = 400, uu._DefaultIndexOfRefraction = 1.3, uu
    })();
    class ER extends Fu.e {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let KR = (() => {
      var uu, Ru, yu, Eu;
      let Ku, Qu, mu, Ju, Nu, Xu = wu.d,
        Vu = [],
        ru = [],
        Bu = [],
        xu = [],
        Su = [],
        pu = [],
        Tu = [],
        Wu = [],
        ju = [],
        Hu = [];
      return uu = class extends Xu {
        get isEnabled() {
          return (0, Au.e)(this, Ru, "f")
        }
        set isEnabled(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        set angle(uu) {
          this.direction.x = Math.cos(uu), this.direction.y = Math.sin(uu)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, Au.e)(this, yu, "f")
        }
        set texture(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get legacy() {
          return (0, Au.e)(this, Eu, "f")
        }
        set legacy(uu) {
          (0, Au.f)(this, Eu, uu, "f")
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
        constructor(uu) {
          let Ku = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uu, "PBRAnisotropic", 110, new ER, Ku), this._isEnabled = !1, Ru.set(this, (0, Au.l)(this, Vu, !1)), this.intensity = ((0, Au.l)(this, ru), (0, Au.l)(this, Bu, 1)), this.direction = ((0, Au.l)(this, xu), (0, Au.l)(this, Su, new Lu.n(1, 0))), this._texture = ((0, Au.l)(this, pu), null), yu.set(this, (0, Au.l)(this, Tu, null)), this._legacy = ((0, Au.l)(this, Wu), !1), Eu.set(this, (0, Au.l)(this, ju, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Au.l)(this, Hu), this._internalMarkAllSubMeshesAsTexturesDirty = uu._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = uu._dirtyCallbacks[16]
        }
        isReadyForSubMesh(uu, Ru) {
          return !this._isEnabled || !(uu._areTexturesDirty && Ru.texturesEnabled && this._texture && Ou.e.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(uu, Ru, yu) {
          this._isEnabled ? (uu.ANISOTROPIC = this._isEnabled, this._isEnabled && !yu.isVerticesDataPresent(zu.h.TangentKind) && (uu._needUVs = !0, uu.MAINUV1 = !0), uu._areTexturesDirty && Ru.texturesEnabled && (this._texture && Ou.e.AnisotropicTextureEnabled ? (0, au.fb)(this._texture, uu, "ANISOTROPIC_TEXTURE") : uu.ANISOTROPIC_TEXTURE = !1), uu._areMiscDirty && (uu.ANISOTROPIC_LEGACY = this._legacy)) : (uu.ANISOTROPIC = !1, uu.ANISOTROPIC_TEXTURE = !1, uu.ANISOTROPIC_TEXTUREDIRECTUV = 0, uu.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(uu, Ru) {
          if (!this._isEnabled) return;
          const yu = this._material.isFrozen;
          uu.useUbo && yu && uu.isSync || (this._texture && Ou.e.AnisotropicTextureEnabled && (uu.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, au.E)(this._texture, uu, "anisotropy")), uu.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Ru.texturesEnabled && this._texture && Ou.e.AnisotropicTextureEnabled && uu.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(uu) {
          return this._texture === uu
        }
        getActiveTextures(uu) {
          this._texture && uu.push(this._texture)
        }
        getAnimatables(uu) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && uu.push(this._texture)
        }
        dispose(uu) {
          uu && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(uu, Ru, yu) {
          return uu.ANISOTROPIC && Ru.addFallback(yu++, "ANISOTROPIC"), yu
        }
        getSamplers(uu) {
          uu.push("anisotropySampler")
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
        parse(uu, Ru, yu) {
          super.parse(uu, Ru, yu), void 0 === uu.legacy && (this.legacy = !0)
        }
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xu[Symbol.metadata] ?? null) : void 0;
        Ku = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Qu = [(0, Du.K)()], mu = [(0, Du.C)()], Ju = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Nu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], (0, Au.h)(uu, null, Ku, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Ru) => {
              uu.isEnabled = Ru
            }
          },
          metadata: Ru
        }, Vu, ru), (0, Au.h)(uu, null, Ju, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Ru) => {
              uu.texture = Ru
            }
          },
          metadata: Ru
        }, Tu, Wu), (0, Au.h)(uu, null, Nu, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: uu => "legacy" in uu,
            get: uu => uu.legacy,
            set: (uu, Ru) => {
              uu.legacy = Ru
            }
          },
          metadata: Ru
        }, ju, Hu), (0, Au.h)(null, null, Qu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Ru) => {
              uu.intensity = Ru
            }
          },
          metadata: Ru
        }, Bu, xu), (0, Au.h)(null, null, mu, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: uu => "direction" in uu,
            get: uu => uu.direction,
            set: (uu, Ru) => {
              uu.direction = Ru
            }
          },
          metadata: Ru
        }, Su, pu), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu
    })();
    class QR extends Fu.e {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let mR = (() => {
      var uu, Ru, yu, Eu, Ku, Qu, mu, Ju;
      let Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu = wu.d,
        ju = [],
        Hu = [],
        du = [],
        bu = [],
        Cu = [],
        ku = [],
        eu = [],
        Mu = [],
        Iu = [],
        Gu = [],
        Uu = [],
        nu = [],
        su = [],
        tu = [],
        lu = [],
        gu = [],
        cu = [],
        Lu = [];
      return uu = class extends Wu {
        get isEnabled() {
          return (0, Au.e)(this, Ru, "f")
        }
        set isEnabled(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, Au.e)(this, yu, "f")
        }
        set linkSheenWithAlbedo(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get texture() {
          return (0, Au.e)(this, Eu, "f")
        }
        set texture(uu) {
          (0, Au.f)(this, Eu, uu, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, Au.e)(this, Ku, "f")
        }
        set useRoughnessFromMainTexture(uu) {
          (0, Au.f)(this, Ku, uu, "f")
        }
        get roughness() {
          return (0, Au.e)(this, Qu, "f")
        }
        set roughness(uu) {
          (0, Au.f)(this, Qu, uu, "f")
        }
        get textureRoughness() {
          return (0, Au.e)(this, mu, "f")
        }
        set textureRoughness(uu) {
          (0, Au.f)(this, mu, uu, "f")
        }
        get albedoScaling() {
          return (0, Au.e)(this, Ju, "f")
        }
        set albedoScaling(uu) {
          (0, Au.f)(this, Ju, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uu) {
          let Nu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uu, "Sheen", 120, new QR, Nu), this._isEnabled = !1, Ru.set(this, (0, Au.l)(this, ju, !1)), this._linkSheenWithAlbedo = ((0, Au.l)(this, Hu), !1), yu.set(this, (0, Au.l)(this, du, !1)), this.intensity = ((0, Au.l)(this, bu), (0, Au.l)(this, Cu, 1)), this.color = ((0, Au.l)(this, ku), (0, Au.l)(this, eu, iu.d.White())), this._texture = ((0, Au.l)(this, Mu), null), Eu.set(this, (0, Au.l)(this, Iu, null)), this._useRoughnessFromMainTexture = ((0, Au.l)(this, Gu), !0), Ku.set(this, (0, Au.l)(this, Uu, !0)), this._roughness = ((0, Au.l)(this, nu), null), Qu.set(this, (0, Au.l)(this, su, null)), this._textureRoughness = ((0, Au.l)(this, tu), null), mu.set(this, (0, Au.l)(this, lu, null)), this._albedoScaling = ((0, Au.l)(this, gu), !1), Ju.set(this, (0, Au.l)(this, cu, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Au.l)(this, Lu), this._internalMarkAllSubMeshesAsTexturesDirty = uu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Ru) {
          if (!this._isEnabled) return !0;
          if (uu._areTexturesDirty && Ru.texturesEnabled) {
            if (this._texture && Ou.e.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && Ou.e.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uu, Ru) {
          this._isEnabled ? (uu.SHEEN = !0, uu.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, uu.SHEEN_ROUGHNESS = null !== this._roughness, uu.SHEEN_ALBEDOSCALING = this._albedoScaling, uu.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, uu._areTexturesDirty && Ru.texturesEnabled && (this._texture && Ou.e.SheenTextureEnabled ? ((0, au.fb)(this._texture, uu, "SHEEN_TEXTURE"), uu.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : uu.SHEEN_TEXTURE = !1, this._textureRoughness && Ou.e.SheenTextureEnabled ? (0, au.fb)(this._textureRoughness, uu, "SHEEN_TEXTURE_ROUGHNESS") : uu.SHEEN_TEXTURE_ROUGHNESS = !1)) : (uu.SHEEN = !1, uu.SHEEN_TEXTURE = !1, uu.SHEEN_TEXTURE_ROUGHNESS = !1, uu.SHEEN_LINKWITHALBEDO = !1, uu.SHEEN_ROUGHNESS = !1, uu.SHEEN_ALBEDOSCALING = !1, uu.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, uu.SHEEN_GAMMATEXTURE = !1, uu.SHEEN_TEXTUREDIRECTUV = 0, uu.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(uu, Ru, yu, Eu) {
          if (!this._isEnabled) return;
          const Ku = Eu.materialDefines,
            Qu = this._material.isFrozen;
          uu.useUbo && Qu && uu.isSync || ((this._texture || this._textureRoughness) && Ou.e.SheenTextureEnabled && (uu.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, au.E)(this._texture, uu, "sheen"), this._textureRoughness && !Ku.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, au.E)(this._textureRoughness, uu, "sheenRoughness")), uu.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && uu.updateFloat("vSheenRoughness", this._roughness)), Ru.texturesEnabled && (this._texture && Ou.e.SheenTextureEnabled && uu.setTexture("sheenSampler", this._texture), this._textureRoughness && !Ku.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && Ou.e.SheenTextureEnabled && uu.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(uu) {
          return this._texture === uu || this._textureRoughness === uu
        }
        getActiveTextures(uu) {
          this._texture && uu.push(this._texture), this._textureRoughness && uu.push(this._textureRoughness)
        }
        getAnimatables(uu) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && uu.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && uu.push(this._textureRoughness)
        }
        dispose(uu) {
          uu && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(uu, Ru, yu) {
          return uu.SHEEN && Ru.addFallback(yu++, "SHEEN"), yu
        }
        getSamplers(uu) {
          uu.push("sheenSampler", "sheenRoughnessSampler")
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
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, Ku = new WeakMap, Qu = new WeakMap, mu = new WeakMap, Ju = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wu[Symbol.metadata] ?? null) : void 0;
        Nu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Xu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, Du.K)()], ru = [(0, Du.n)()], Bu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], xu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Su = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], pu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Tu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], (0, Au.h)(uu, null, Nu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Ru) => {
              uu.isEnabled = Ru
            }
          },
          metadata: Ru
        }, ju, Hu), (0, Au.h)(uu, null, Xu, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: uu => "linkSheenWithAlbedo" in uu,
            get: uu => uu.linkSheenWithAlbedo,
            set: (uu, Ru) => {
              uu.linkSheenWithAlbedo = Ru
            }
          },
          metadata: Ru
        }, du, bu), (0, Au.h)(uu, null, Bu, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Ru) => {
              uu.texture = Ru
            }
          },
          metadata: Ru
        }, Iu, Gu), (0, Au.h)(uu, null, xu, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMainTexture" in uu,
            get: uu => uu.useRoughnessFromMainTexture,
            set: (uu, Ru) => {
              uu.useRoughnessFromMainTexture = Ru
            }
          },
          metadata: Ru
        }, Uu, nu), (0, Au.h)(uu, null, Su, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughness" in uu,
            get: uu => uu.roughness,
            set: (uu, Ru) => {
              uu.roughness = Ru
            }
          },
          metadata: Ru
        }, su, tu), (0, Au.h)(uu, null, pu, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "textureRoughness" in uu,
            get: uu => uu.textureRoughness,
            set: (uu, Ru) => {
              uu.textureRoughness = Ru
            }
          },
          metadata: Ru
        }, lu, gu), (0, Au.h)(uu, null, Tu, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: uu => "albedoScaling" in uu,
            get: uu => uu.albedoScaling,
            set: (uu, Ru) => {
              uu.albedoScaling = Ru
            }
          },
          metadata: Ru
        }, cu, Lu), (0, Au.h)(null, null, Vu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Ru) => {
              uu.intensity = Ru
            }
          },
          metadata: Ru
        }, Cu, ku), (0, Au.h)(null, null, ru, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: uu => "color" in uu,
            get: uu => uu.color,
            set: (uu, Ru) => {
              uu.color = Ru
            }
          },
          metadata: Ru
        }, eu, Mu), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu
    })();
    class JR extends Fu.e {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let NR = (() => {
      var uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu;
      let Wu, ju, Hu, du, bu, Cu, ku, eu, Mu, Iu, Gu, Uu, nu, su, tu, lu, gu, cu, zu, Fu, Zu, hu, Pu, Yu, ou, qu, vu, fu, uR, RR, yR = wu.d,
        ER = [],
        KR = [],
        QR = [],
        mR = [],
        NR = [],
        XR = [],
        VR = [],
        rR = [],
        BR = [],
        xR = [],
        SR = [],
        pR = [],
        TR = [],
        WR = [],
        jR = [],
        HR = [],
        dR = [],
        bR = [],
        CR = [],
        kR = [],
        eR = [],
        AR = [],
        DR = [],
        MR = [],
        IR = [],
        GR = [],
        UR = [],
        nR = [],
        sR = [],
        tR = [],
        lR = [],
        gR = [],
        cR = [],
        LR = [],
        zR = [],
        FR = [],
        wR = [],
        ZR = [],
        hR = [],
        PR = [],
        iR = [],
        YR = [],
        oR = [],
        qR = [],
        OR = [],
        vR = [],
        aR = [],
        fR = [],
        uy = [],
        Ry = [],
        yy = [],
        Ey = [],
        Ky = [],
        Qy = [],
        my = [],
        Jy = [],
        Ny = [],
        Xy = [],
        Vy = [],
        ry = [];
      return uu = class extends yR {
        get isRefractionEnabled() {
          return (0, Au.e)(this, Ru, "f")
        }
        set isRefractionEnabled(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        get isTranslucencyEnabled() {
          return (0, Au.e)(this, yu, "f")
        }
        set isTranslucencyEnabled(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get isDispersionEnabled() {
          return (0, Au.e)(this, Eu, "f")
        }
        set isDispersionEnabled(uu) {
          (0, Au.f)(this, Eu, uu, "f")
        }
        get isScatteringEnabled() {
          return (0, Au.e)(this, Ku, "f")
        }
        set isScatteringEnabled(uu) {
          (0, Au.f)(this, Ku, uu, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(uu) {
          this._scene.enableSubSurfaceForPrePass() && uu && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(uu))
        }
        get useAlbedoToTintRefraction() {
          return (0, Au.e)(this, Qu, "f")
        }
        set useAlbedoToTintRefraction(uu) {
          (0, Au.f)(this, Qu, uu, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, Au.e)(this, mu, "f")
        }
        set useAlbedoToTintTranslucency(uu) {
          (0, Au.f)(this, mu, uu, "f")
        }
        get thicknessTexture() {
          return (0, Au.e)(this, Ju, "f")
        }
        set thicknessTexture(uu) {
          (0, Au.f)(this, Ju, uu, "f")
        }
        get refractionTexture() {
          return (0, Au.e)(this, Nu, "f")
        }
        set refractionTexture(uu) {
          (0, Au.f)(this, Nu, uu, "f")
        }
        get indexOfRefraction() {
          return (0, Au.e)(this, Xu, "f")
        }
        set indexOfRefraction(uu) {
          (0, Au.f)(this, Xu, uu, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(uu) {
          const Ru = uu >= 1 ? uu : -1;
          this._volumeIndexOfRefraction !== Ru && (this._volumeIndexOfRefraction = Ru, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, Au.e)(this, Vu, "f")
        }
        set invertRefractionY(uu) {
          (0, Au.f)(this, Vu, uu, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, Au.e)(this, ru, "f")
        }
        set linkRefractionWithTransparency(uu) {
          (0, Au.f)(this, ru, uu, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, Au.e)(this, Bu, "f")
        }
        set useMaskFromThicknessTexture(uu) {
          (0, Au.f)(this, Bu, uu, "f")
        }
        get refractionIntensityTexture() {
          return (0, Au.e)(this, xu, "f")
        }
        set refractionIntensityTexture(uu) {
          (0, Au.f)(this, xu, uu, "f")
        }
        get translucencyIntensityTexture() {
          return (0, Au.e)(this, Su, "f")
        }
        set translucencyIntensityTexture(uu) {
          (0, Au.f)(this, Su, uu, "f")
        }
        get translucencyColorTexture() {
          return (0, Au.e)(this, pu, "f")
        }
        set translucencyColorTexture(uu) {
          (0, Au.f)(this, pu, uu, "f")
        }
        get useGltfStyleTextures() {
          return (0, Au.e)(this, Tu, "f")
        }
        set useGltfStyleTextures(uu) {
          (0, Au.f)(this, Tu, uu, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(uu) {
          this.legacyTranslucency = uu
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
        constructor(Wu) {
          let ju = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Wu, "PBRSubSurface", 130, new JR, ju), this._isRefractionEnabled = !1, Ru.set(this, (0, Au.l)(this, ER, !1)), this._isTranslucencyEnabled = ((0, Au.l)(this, KR), !1), yu.set(this, (0, Au.l)(this, QR, !1)), this._isDispersionEnabled = ((0, Au.l)(this, mR), !1), Eu.set(this, (0, Au.l)(this, NR, !1)), this._isScatteringEnabled = ((0, Au.l)(this, XR), !1), Ku.set(this, (0, Au.l)(this, VR, !1)), this._scatteringDiffusionProfileIndex = ((0, Au.l)(this, rR), (0, Au.l)(this, BR, 0)), this.refractionIntensity = ((0, Au.l)(this, xR), (0, Au.l)(this, SR, 1)), this.translucencyIntensity = ((0, Au.l)(this, pR), (0, Au.l)(this, TR, 1)), this._useAlbedoToTintRefraction = ((0, Au.l)(this, WR), !1), Qu.set(this, (0, Au.l)(this, jR, !1)), this._useAlbedoToTintTranslucency = ((0, Au.l)(this, HR), !1), mu.set(this, (0, Au.l)(this, dR, !1)), this._thicknessTexture = ((0, Au.l)(this, bR), null), Ju.set(this, (0, Au.l)(this, CR, null)), this._refractionTexture = ((0, Au.l)(this, kR), null), Nu.set(this, (0, Au.l)(this, eR, null)), this._indexOfRefraction = ((0, Au.l)(this, AR), 1.5), Xu.set(this, (0, Au.l)(this, DR, 1.5)), this._volumeIndexOfRefraction = ((0, Au.l)(this, MR), (0, Au.l)(this, IR, -1)), this._invertRefractionY = ((0, Au.l)(this, GR), !1), Vu.set(this, (0, Au.l)(this, UR, !1)), this._linkRefractionWithTransparency = ((0, Au.l)(this, nR), !1), ru.set(this, (0, Au.l)(this, sR, !1)), this.minimumThickness = ((0, Au.l)(this, tR), (0, Au.l)(this, lR, 0)), this.maximumThickness = ((0, Au.l)(this, gR), (0, Au.l)(this, cR, 1)), this.useThicknessAsDepth = ((0, Au.l)(this, LR), (0, Au.l)(this, zR, !1)), this.tintColor = ((0, Au.l)(this, FR), (0, Au.l)(this, wR, iu.d.White())), this.tintColorAtDistance = ((0, Au.l)(this, ZR), (0, Au.l)(this, hR, 1)), this.dispersion = ((0, Au.l)(this, PR), (0, Au.l)(this, iR, 0)), this.diffusionDistance = ((0, Au.l)(this, YR), (0, Au.l)(this, oR, iu.d.White())), this._useMaskFromThicknessTexture = ((0, Au.l)(this, qR), !1), Bu.set(this, (0, Au.l)(this, OR, !1)), this._refractionIntensityTexture = ((0, Au.l)(this, vR), null), xu.set(this, (0, Au.l)(this, aR, null)), this._translucencyIntensityTexture = ((0, Au.l)(this, fR), null), Su.set(this, (0, Au.l)(this, uy, null)), this.translucencyColor = ((0, Au.l)(this, Ry), (0, Au.l)(this, yy, null)), this._translucencyColorTexture = ((0, Au.l)(this, Ey), null), pu.set(this, (0, Au.l)(this, Ky, null)), this._useGltfStyleTextures = ((0, Au.l)(this, Qy), !0), Tu.set(this, (0, Au.l)(this, my, !0)), this.applyAlbedoAfterSubSurface = ((0, Au.l)(this, Jy), (0, Au.l)(this, Ny, uu.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, Au.l)(this, Xy), (0, Au.l)(this, Vy, uu.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, Au.l)(this, ry), this._scene = Wu.lD(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Wu._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Wu._dirtyCallbacks[32]
        }
        isReadyForSubMesh(uu, Ru) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (uu._areTexturesDirty && Ru.texturesEnabled) {
            if (this._thicknessTexture && Ou.e.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && Ou.e.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && Ou.e.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && Ou.e.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const uu = this._getRefractionTexture(Ru);
            if (uu && Ou.e.RefractionTextureEnabled && !uu.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uu, Ru) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return uu.SUBSURFACE = !1, uu.SS_DISPERSION = !1, uu.SS_TRANSLUCENCY = !1, uu.SS_SCATTERING = !1, uu.SS_REFRACTION = !1, uu.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_THICKNESSANDMASK_TEXTURE = !1, uu.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, uu.SS_HAS_THICKNESS = !1, uu.SS_REFRACTIONINTENSITY_TEXTURE = !1, uu.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, uu.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, uu.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, uu.SS_REFRACTIONMAP_3D = !1, uu.SS_REFRACTIONMAP_OPPOSITEZ = !1, uu.SS_LODINREFRACTIONALPHA = !1, uu.SS_GAMMAREFRACTION = !1, uu.SS_RGBDREFRACTION = !1, uu.SS_LINEARSPECULARREFRACTION = !1, uu.SS_LINKREFRACTIONTOTRANSPARENCY = !1, uu.SS_ALBEDOFORREFRACTIONTINT = !1, uu.SS_ALBEDOFORTRANSLUCENCYTINT = !1, uu.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, uu.SS_USE_THICKNESS_AS_DEPTH = !1, uu.SS_USE_GLTF_TEXTURES = !1, uu.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, uu.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, uu.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(uu.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (uu._areTexturesDirty) {
            if (uu.SUBSURFACE = !0, uu.SS_DISPERSION = this._isDispersionEnabled, uu.SS_TRANSLUCENCY = this._isTranslucencyEnabled, uu.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, uu.SS_SCATTERING = this._isScatteringEnabled, uu.SS_THICKNESSANDMASK_TEXTURE = !1, uu.SS_REFRACTIONINTENSITY_TEXTURE = !1, uu.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, uu.SS_HAS_THICKNESS = !1, uu.SS_USE_GLTF_TEXTURES = !1, uu.SS_REFRACTION = !1, uu.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_REFRACTIONMAP_3D = !1, uu.SS_GAMMAREFRACTION = !1, uu.SS_RGBDREFRACTION = !1, uu.SS_LINEARSPECULARREFRACTION = !1, uu.SS_REFRACTIONMAP_OPPOSITEZ = !1, uu.SS_LODINREFRACTIONALPHA = !1, uu.SS_LINKREFRACTIONTOTRANSPARENCY = !1, uu.SS_ALBEDOFORREFRACTIONTINT = !1, uu.SS_ALBEDOFORTRANSLUCENCYTINT = !1, uu.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, uu.SS_USE_THICKNESS_AS_DEPTH = !1, uu.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, uu.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, uu._areTexturesDirty && Ru.texturesEnabled && (this._thicknessTexture && Ou.e.ThicknessTextureEnabled && (0, au.fb)(this._thicknessTexture, uu, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && Ou.e.RefractionIntensityTextureEnabled && (0, au.fb)(this._refractionIntensityTexture, uu, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && Ou.e.TranslucencyIntensityTextureEnabled && (0, au.fb)(this._translucencyIntensityTexture, uu, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && Ou.e.TranslucencyColorTextureEnabled && ((0, au.fb)(this._translucencyColorTexture, uu, "SS_TRANSLUCENCYCOLOR_TEXTURE"), uu.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), uu.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, uu.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, uu.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, uu.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Ru.texturesEnabled) {
              const yu = this._getRefractionTexture(Ru);
              yu && Ou.e.RefractionTextureEnabled && (uu.SS_REFRACTION = !0, uu.SS_REFRACTIONMAP_3D = yu.isCube, uu.SS_GAMMAREFRACTION = yu.gammaSpace, uu.SS_RGBDREFRACTION = yu.isRGBD, uu.SS_LINEARSPECULARREFRACTION = yu.linearSpecularLOD, uu.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && yu.isCube ? !yu.invertZ : yu.invertZ, uu.SS_LODINREFRACTIONALPHA = yu.lodLevelInAlpha, uu.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, uu.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, uu.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = yu.isCube && yu.boundingBoxSize, uu.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (uu.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(uu, Ru, yu, Eu) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) uu.updateFloat2("vThicknessParam", 0, 0);
            else {
              Eu.getRenderingMesh().getWorldMatrix().decompose(Lu.m.MS[0]);
              const Ru = Math.max(Math.abs(Lu.m.MS[0].x), Math.abs(Lu.m.MS[0].y), Math.abs(Lu.m.MS[0].z));
              uu.updateFloat2("vThicknessParam", this.minimumThickness * Ru, (this.maximumThickness - this.minimumThickness) * Ru)
            }
        }
        bindForSubMesh(uu, Ru, yu, Eu) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Ku = Eu.materialDefines,
            Qu = this._material.isFrozen,
            mu = this._material.realTimeFiltering,
            Ju = Ku.LODBASEDMICROSFURACE,
            Nu = this._getRefractionTexture(Ru);
          if (!uu.useUbo || !Qu || !uu.isSync) {
            if (this._thicknessTexture && Ou.e.ThicknessTextureEnabled && (uu.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, au.E)(this._thicknessTexture, uu, "thickness")), this._refractionIntensityTexture && Ou.e.RefractionIntensityTextureEnabled && Ku.SS_REFRACTIONINTENSITY_TEXTURE && (uu.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, au.E)(this._refractionIntensityTexture, uu, "refractionIntensity")), this._translucencyColorTexture && Ou.e.TranslucencyColorTextureEnabled && Ku.SS_TRANSLUCENCYCOLOR_TEXTURE && (uu.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, au.E)(this._translucencyColorTexture, uu, "translucencyColor")), this._translucencyIntensityTexture && Ou.e.TranslucencyIntensityTextureEnabled && Ku.SS_TRANSLUCENCYINTENSITY_TEXTURE && (uu.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, au.E)(this._translucencyIntensityTexture, uu, "translucencyIntensity")), Nu && Ou.e.RefractionTextureEnabled) {
              uu.v_("refractionMatrix", Nu.getRefractionTextureMatrix());
              let Ru = 1;
              Nu.isCube || Nu.depth && (Ru = Nu.depth);
              const yu = Nu.getSize().width,
                Eu = this.volumeIndexOfRefraction;
              if (uu.updateFloat4("vRefractionInfos", Nu.level, 1 / Eu, Ru, this._invertRefractionY ? -1 : 1), uu.updateFloat4("vRefractionMicrosurfaceInfos", yu, Nu.lodGenerationScale, Nu.lodGenerationOffset, 1 / this.indexOfRefraction), mu && uu.updateFloat2("vRefractionFilteringInfo", yu, Math.log2(yu)), Nu.boundingBoxSize) {
                const Ru = Nu;
                uu.updateVector3("vRefractionPosition", Ru.boundingBoxPosition), uu.updateVector3("vRefractionSize", Ru.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && uu.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), uu.updateColor3("vDiffusionDistance", this.diffusionDistance), uu.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), uu.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), uu.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), uu.updateFloat("dispersion", this.dispersion)
          }
          Ru.texturesEnabled && (this._thicknessTexture && Ou.e.ThicknessTextureEnabled && uu.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && Ou.e.RefractionIntensityTextureEnabled && Ku.SS_REFRACTIONINTENSITY_TEXTURE && uu.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && Ou.e.TranslucencyIntensityTextureEnabled && Ku.SS_TRANSLUCENCYINTENSITY_TEXTURE && uu.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && Ou.e.TranslucencyColorTextureEnabled && Ku.SS_TRANSLUCENCYCOLOR_TEXTURE && uu.setTexture("translucencyColorSampler", this._translucencyColorTexture), Nu && Ou.e.RefractionTextureEnabled && (Ju ? uu.setTexture("refractionSampler", Nu) : (uu.setTexture("refractionSampler", Nu._lodTextureMid || Nu), uu.setTexture("refractionSamplerLow", Nu._lodTextureLow || Nu), uu.setTexture("refractionSamplerHigh", Nu._lodTextureHigh || Nu))))
        }
        _getRefractionTexture(uu) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? uu.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(uu) {
          Ou.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && uu.push(this._refractionTexture)
        }
        hasTexture(uu) {
          return this._thicknessTexture === uu || (this._refractionTexture === uu || (this._refractionIntensityTexture === uu || (this._translucencyIntensityTexture === uu || this._translucencyColorTexture === uu)))
        }
        hasRenderTargetTextures() {
          return !!(Ou.e.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(uu) {
          this._thicknessTexture && uu.push(this._thicknessTexture), this._refractionTexture && uu.push(this._refractionTexture), this._refractionIntensityTexture && uu.push(this._refractionIntensityTexture), this._translucencyColorTexture && uu.push(this._translucencyColorTexture), this._translucencyIntensityTexture && uu.push(this._translucencyIntensityTexture)
        }
        getAnimatables(uu) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && uu.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && uu.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && uu.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && uu.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && uu.push(this._translucencyIntensityTexture)
        }
        dispose(uu) {
          uu && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(uu, Ru, yu) {
          return uu.SS_SCATTERING && Ru.addFallback(yu++, "SS_SCATTERING"), uu.SS_TRANSLUCENCY && Ru.addFallback(yu++, "SS_TRANSLUCENCY"), yu
        }
        getSamplers(uu) {
          uu.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, Ku = new WeakMap, Qu = new WeakMap, mu = new WeakMap, Ju = new WeakMap, Nu = new WeakMap, Xu = new WeakMap, Vu = new WeakMap, ru = new WeakMap, Bu = new WeakMap, xu = new WeakMap, Su = new WeakMap, pu = new WeakMap, Tu = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(yR[Symbol.metadata] ?? null) : void 0;
        Wu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ju = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Hu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], du = [(0, Du.K)(), (0, Du.f)("_markScenePrePassDirty")], bu = [(0, Du.K)()], Cu = [(0, Du.K)()], ku = [(0, Du.K)()], eu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Mu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Iu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Gu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Uu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], nu = [(0, Du.K)()], su = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], tu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], lu = [(0, Du.K)()], gu = [(0, Du.K)()], cu = [(0, Du.K)()], zu = [(0, Du.n)()], Fu = [(0, Du.K)()], Zu = [(0, Du.K)()], hu = [(0, Du.n)()], Pu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Yu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ou = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, Du.n)()], vu = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], fu = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], uR = [(0, Du.K)()], RR = [(0, Du.K)()], (0, Au.h)(uu, null, Wu, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isRefractionEnabled" in uu,
            get: uu => uu.isRefractionEnabled,
            set: (uu, Ru) => {
              uu.isRefractionEnabled = Ru
            }
          },
          metadata: Ru
        }, ER, KR), (0, Au.h)(uu, null, ju, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isTranslucencyEnabled" in uu,
            get: uu => uu.isTranslucencyEnabled,
            set: (uu, Ru) => {
              uu.isTranslucencyEnabled = Ru
            }
          },
          metadata: Ru
        }, QR, mR), (0, Au.h)(uu, null, Hu, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isDispersionEnabled" in uu,
            get: uu => uu.isDispersionEnabled,
            set: (uu, Ru) => {
              uu.isDispersionEnabled = Ru
            }
          },
          metadata: Ru
        }, NR, XR), (0, Au.h)(uu, null, du, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isScatteringEnabled" in uu,
            get: uu => uu.isScatteringEnabled,
            set: (uu, Ru) => {
              uu.isScatteringEnabled = Ru
            }
          },
          metadata: Ru
        }, VR, rR), (0, Au.h)(uu, null, eu, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlbedoToTintRefraction" in uu,
            get: uu => uu.useAlbedoToTintRefraction,
            set: (uu, Ru) => {
              uu.useAlbedoToTintRefraction = Ru
            }
          },
          metadata: Ru
        }, jR, HR), (0, Au.h)(uu, null, Mu, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlbedoToTintTranslucency" in uu,
            get: uu => uu.useAlbedoToTintTranslucency,
            set: (uu, Ru) => {
              uu.useAlbedoToTintTranslucency = Ru
            }
          },
          metadata: Ru
        }, dR, bR), (0, Au.h)(uu, null, Iu, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "thicknessTexture" in uu,
            get: uu => uu.thicknessTexture,
            set: (uu, Ru) => {
              uu.thicknessTexture = Ru
            }
          },
          metadata: Ru
        }, CR, kR), (0, Au.h)(uu, null, Gu, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "refractionTexture" in uu,
            get: uu => uu.refractionTexture,
            set: (uu, Ru) => {
              uu.refractionTexture = Ru
            }
          },
          metadata: Ru
        }, eR, AR), (0, Au.h)(uu, null, Uu, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "indexOfRefraction" in uu,
            get: uu => uu.indexOfRefraction,
            set: (uu, Ru) => {
              uu.indexOfRefraction = Ru
            }
          },
          metadata: Ru
        }, DR, MR), (0, Au.h)(uu, null, su, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertRefractionY" in uu,
            get: uu => uu.invertRefractionY,
            set: (uu, Ru) => {
              uu.invertRefractionY = Ru
            }
          },
          metadata: Ru
        }, UR, nR), (0, Au.h)(uu, null, tu, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: uu => "linkRefractionWithTransparency" in uu,
            get: uu => uu.linkRefractionWithTransparency,
            set: (uu, Ru) => {
              uu.linkRefractionWithTransparency = Ru
            }
          },
          metadata: Ru
        }, sR, tR), (0, Au.h)(uu, null, Pu, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useMaskFromThicknessTexture" in uu,
            get: uu => uu.useMaskFromThicknessTexture,
            set: (uu, Ru) => {
              uu.useMaskFromThicknessTexture = Ru
            }
          },
          metadata: Ru
        }, OR, vR), (0, Au.h)(uu, null, Yu, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "refractionIntensityTexture" in uu,
            get: uu => uu.refractionIntensityTexture,
            set: (uu, Ru) => {
              uu.refractionIntensityTexture = Ru
            }
          },
          metadata: Ru
        }, aR, fR), (0, Au.h)(uu, null, ou, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyIntensityTexture" in uu,
            get: uu => uu.translucencyIntensityTexture,
            set: (uu, Ru) => {
              uu.translucencyIntensityTexture = Ru
            }
          },
          metadata: Ru
        }, uy, Ry), (0, Au.h)(uu, null, vu, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyColorTexture" in uu,
            get: uu => uu.translucencyColorTexture,
            set: (uu, Ru) => {
              uu.translucencyColorTexture = Ru
            }
          },
          metadata: Ru
        }, Ky, Qy), (0, Au.h)(uu, null, fu, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: uu => "useGltfStyleTextures" in uu,
            get: uu => uu.useGltfStyleTextures,
            set: (uu, Ru) => {
              uu.useGltfStyleTextures = Ru
            }
          },
          metadata: Ru
        }, my, Jy), (0, Au.h)(null, null, bu, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: uu => "_scatteringDiffusionProfileIndex" in uu,
            get: uu => uu._scatteringDiffusionProfileIndex,
            set: (uu, Ru) => {
              uu._scatteringDiffusionProfileIndex = Ru
            }
          },
          metadata: Ru
        }, BR, xR), (0, Au.h)(null, null, Cu, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "refractionIntensity" in uu,
            get: uu => uu.refractionIntensity,
            set: (uu, Ru) => {
              uu.refractionIntensity = Ru
            }
          },
          metadata: Ru
        }, SR, pR), (0, Au.h)(null, null, ku, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyIntensity" in uu,
            get: uu => uu.translucencyIntensity,
            set: (uu, Ru) => {
              uu.translucencyIntensity = Ru
            }
          },
          metadata: Ru
        }, TR, WR), (0, Au.h)(null, null, nu, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "_volumeIndexOfRefraction" in uu,
            get: uu => uu._volumeIndexOfRefraction,
            set: (uu, Ru) => {
              uu._volumeIndexOfRefraction = Ru
            }
          },
          metadata: Ru
        }, IR, GR), (0, Au.h)(null, null, lu, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "minimumThickness" in uu,
            get: uu => uu.minimumThickness,
            set: (uu, Ru) => {
              uu.minimumThickness = Ru
            }
          },
          metadata: Ru
        }, lR, gR), (0, Au.h)(null, null, gu, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "maximumThickness" in uu,
            get: uu => uu.maximumThickness,
            set: (uu, Ru) => {
              uu.maximumThickness = Ru
            }
          },
          metadata: Ru
        }, cR, LR), (0, Au.h)(null, null, cu, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: uu => "useThicknessAsDepth" in uu,
            get: uu => uu.useThicknessAsDepth,
            set: (uu, Ru) => {
              uu.useThicknessAsDepth = Ru
            }
          },
          metadata: Ru
        }, zR, FR), (0, Au.h)(null, null, zu, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColor" in uu,
            get: uu => uu.tintColor,
            set: (uu, Ru) => {
              uu.tintColor = Ru
            }
          },
          metadata: Ru
        }, wR, ZR), (0, Au.h)(null, null, Fu, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColorAtDistance" in uu,
            get: uu => uu.tintColorAtDistance,
            set: (uu, Ru) => {
              uu.tintColorAtDistance = Ru
            }
          },
          metadata: Ru
        }, hR, PR), (0, Au.h)(null, null, Zu, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: uu => "dispersion" in uu,
            get: uu => uu.dispersion,
            set: (uu, Ru) => {
              uu.dispersion = Ru
            }
          },
          metadata: Ru
        }, iR, YR), (0, Au.h)(null, null, hu, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "diffusionDistance" in uu,
            get: uu => uu.diffusionDistance,
            set: (uu, Ru) => {
              uu.diffusionDistance = Ru
            }
          },
          metadata: Ru
        }, oR, qR), (0, Au.h)(null, null, qu, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyColor" in uu,
            get: uu => uu.translucencyColor,
            set: (uu, Ru) => {
              uu.translucencyColor = Ru
            }
          },
          metadata: Ru
        }, yy, Ey), (0, Au.h)(null, null, uR, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: uu => "applyAlbedoAfterSubSurface" in uu,
            get: uu => uu.applyAlbedoAfterSubSurface,
            set: (uu, Ru) => {
              uu.applyAlbedoAfterSubSurface = Ru
            }
          },
          metadata: Ru
        }, Ny, Xy), (0, Au.h)(null, null, RR, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: uu => "legacyTranslucency" in uu,
            get: uu => uu.legacyTranslucency,
            set: (uu, Ru) => {
              uu.legacyTranslucency = Ru
            }
          },
          metadata: Ru
        }, Vy, ry), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, uu.DEFAULT_LEGACY_TRANSLUCENCY = !1, uu
    })();
    var XR = yu(39934),
      VR = yu(39913),
      rR = yu(39941),
      BR = yu(39948),
      xR = yu(39951),
      SR = yu(39958),
      pR = yu(39966),
      TR = yu(39972),
      WR = yu(39430);
    const jR = {
      effect: null,
      subMesh: null
    };
    class HR extends((0, pR.d)((0, SR.c)(Fu.e))) {}
    class dR extends((0, Yu.f)(HR)) {
      constructor(uu) {
        super(uu), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class bR extends((0, TR.c)(qu.e)) {}
    let CR = (() => {
      var uu, Ru;
      let Eu, Ku = bR,
        mu = [],
        Ju = [];
      return uu = class extends Ku {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(uu) {
          this._realTimeFiltering = uu, this.Eyu(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(uu) {
          this._realTimeFilteringQuality = uu, this.Eyu(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, Au.e)(this, Ru, "f")
        }
        set debugMode(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        constructor(yu, Eu) {
          super(yu, Eu, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Lu.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = iu.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new iu.d(0, 0, 0), this._albedoColor = new iu.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new iu.d(1, 1, 1), this._reflectionColor = new iu.d(1, 1, 1), this._emissiveColor = new iu.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = uu.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Iu.i(16), this._globalAmbientColor = new iu.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Ru.set(this, (0, Au.l)(this, mu, 0)), this.debugLimit = ((0, Au.l)(this, Ju), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new hu(this), this.clearCoat = new uR(this), this.iridescence = new yR(this), this.anisotropy = new KR(this), this.sheen = new mR(this), this.subSurface = new NR(this), this.detailMap = new XR.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Ou.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = tu(this.lD()), this.prePassConfiguration = new Pu.e
        }
        get hasRenderTargetTextures() {
          return !!(Ou.e.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === uu.PBRMATERIAL_OPAQUE || this._transparencyMode === uu.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === uu.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== uu.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(uu, Ru, yu) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const Eu = Ru._drawWrapper;
          if (Eu.effect && this.isFrozen && Eu._wasPreviouslyReady && Eu._wasPreviouslyUsingInstances === yu) return !0;
          Ru.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Ru.materialDefines = new dR(this._eventInfo.defineNames));
          const Ku = Ru.materialDefines;
          if (this._isReadyForSubMesh(Ru)) return !0;
          const Qu = this.lD(),
            mu = Qu.eS();
          if (Ku._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Qu.texturesEnabled)) {
            if (this._albedoTexture && Ou.e.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && Ou.e.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && Ou.e.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && Ou.e.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && Ou.e.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const uu = this._getReflectionTexture();
            if (uu && Ou.e.ReflectionTextureEnabled) {
              if (!uu.isReadyOrNotBlocking()) return !1;
              if (uu.irradianceTexture) {
                if (!uu.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!uu.sphericalPolynomial && uu.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && Ou.e.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && Ou.e.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (Ou.e.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (mu.getCaps().standardDerivatives && this._bumpTexture && Ou.e.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && Ou.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ku, this._eventInfo.subMesh = Ru, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Ku._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Ku.AREALIGHTUSED || Ku.CLUSTLIGHT_BATCH)
            for (let ru = 0; ru < uu.lightSources.length; ru++)
              if (!uu.lightSources[ru]._isReady()) return !1;
          if (mu.getCaps().standardDerivatives || uu.isVerticesDataPresent(zu.h.NormalKind) || (uu.createNormals(!0), Mu.e.Warn("PBRMaterial: Normals have been created for the mesh: " + uu.name)), !(0, au.b)(Qu, uu, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const Ju = Ru.effect,
            Nu = Ku._areLightsDisposed,
            Xu = this._prepareEffect(uu, Ru.getRenderingMesh(), Ku, this.onCompiled, this.onError, yu, null);
          let Vu = !1;
          if (Xu)
            if (this._onEffectCreatedObservable && (jR.effect = Xu, jR.subMesh = Ru, this._onEffectCreatedObservable.notifyObservers(jR)), this.allowShaderHotSwapping && Ju && !Xu.isReady()) {
              if (Ku.markAsUnprocessed(), Vu = this.isFrozen, Nu) return Ku._areLightsDisposed = !0, !1
            } else Qu.resetCachedMaterial(), Ru.setEffect(Xu, Ku, this._materialContext);
          return !(!Ru.effect || !Ru.effect.isReady()) && (Ku._renderId = Qu.getRenderId(), Eu._wasPreviouslyReady = !Vu, Eu._wasPreviouslyUsingInstances = !!yu, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Ru, yu, Eu) {
          let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Ru, yu, Eu, mu, Ju), !Eu.isDirty) return null;
          Eu.markAsProcessed();
          const Nu = this.lD().eS(),
            Xu = new vu.d;
          let Vu = 0;
          Eu.USESPHERICALINVERTEX && Xu.addFallback(Vu++, "USESPHERICALINVERTEX"), Eu.FOG && Xu.addFallback(Vu, "FOG"), Eu.SPECULARAA && Xu.addFallback(Vu, "SPECULARAA"), Eu.POINTSIZE && Xu.addFallback(Vu, "POINTSIZE"), Eu.LOGARITHMICDEPTH && Xu.addFallback(Vu, "LOGARITHMICDEPTH"), Eu.PARALLAX && Xu.addFallback(Vu, "PARALLAX"), Eu.PARALLAX_RHS && Xu.addFallback(Vu, "PARALLAX_RHS"), Eu.PARALLAXOCCLUSION && Xu.addFallback(Vu++, "PARALLAXOCCLUSION"), Eu.ENVIRONMENTBRDF && Xu.addFallback(Vu++, "ENVIRONMENTBRDF"), Eu.TANGENT && Xu.addFallback(Vu++, "TANGENT"), Eu.BUMP && Xu.addFallback(Vu++, "BUMP"), Vu = (0, au.F)(Eu, Xu, this._maxSimultaneousLights, Vu), Eu.SPECULARTERM && Xu.addFallback(Vu++, "SPECULARTERM"), Eu.USESPHERICALFROMREFLECTIONMAP && Xu.addFallback(Vu++, "USESPHERICALFROMREFLECTIONMAP"), Eu.USEIRRADIANCEMAP && Xu.addFallback(Vu++, "USEIRRADIANCEMAP"), Eu.LIGHTMAP && Xu.addFallback(Vu++, "LIGHTMAP"), Eu.NORMAL && Xu.addFallback(Vu++, "NORMAL"), Eu.AMBIENT && Xu.addFallback(Vu++, "AMBIENT"), Eu.EMISSIVE && Xu.addFallback(Vu++, "EMISSIVE"), Eu.VERTEXCOLOR && Xu.addFallback(Vu++, "VERTEXCOLOR"), Eu.MORPHTARGETS && Xu.addFallback(Vu++, "MORPHTARGETS"), Eu.MULTIVIEW && Xu.addFallback(0, "MULTIVIEW");
          const ru = [zu.h.PositionKind];
          Eu.NORMAL && ru.push(zu.h.NormalKind), Eu.TANGENT && ru.push(zu.h.TangentKind);
          for (let uu = 1; uu <= 6; ++uu) Eu["UV" + uu] && ru.push(`uv${1===uu?"":uu}`);
          Eu.VERTEXCOLOR && ru.push(zu.h.ColorKind), (0, au.K)(ru, Ru, Eu, Xu), (0, au.L)(ru, Eu), (0, au.P)(ru, Ru, Eu), (0, au.J)(ru, Ru, Eu);
          let Bu = "pbr";
          const xu = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Su = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, au.xb)(xu, Su, !0);
          const pu = ["Material", "Scene", "Mesh"],
            Tu = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: Eu.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = Xu, this._eventInfo.fallbackRank = Vu, this._eventInfo.defines = Eu, this._eventInfo.uniforms = xu, this._eventInfo.attributes = ru, this._eventInfo.samplers = Su, this._eventInfo.uniformBuffersNames = pu, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Ru, this._eventInfo.indexParameters = Tu, this._callbackPluginEventGeneric(128, this._eventInfo), xR.b.AddUniformsAndSamplers(xu, Su), Pu.e.AddUniforms(xu), Pu.e.AddSamplers(Su), (0, VR.c)(xu), this._useVertexPulling) {
            const uu = yu?.geometry;
            uu && (this._vertexPullingMetadata = (0, rR.e)(uu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Ru) => {
              xu.push(`vp_${Ru}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          ou.b && (ou.b.PrepareUniforms(xu, Eu), ou.b.PrepareSamplers(Su, Eu)), (0, au.zb)({
            uniformsNames: xu,
            uniformBuffersNames: pu,
            samplers: Su,
            defines: Eu,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Wu = {};
          this.customShaderNameResolve && (Bu = this.customShaderNameResolve(Bu, xu, pu, Su, Eu, ru, Wu));
          const ju = Eu.toString(),
            Hu = Nu.createEffect(Bu, {
              attributes: ru,
              uniformsNames: xu,
              uniformBuffersNames: pu,
              samplers: Su,
              defines: ju,
              fallbacks: Xu,
              onCompiled: Ku,
              onError: Qu,
              indexParameters: Tu,
              processFinalCode: Wu.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: Eu.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, Nu);
          return this._eventInfo.customCode = void 0, Hu
        }
        _prepareDefines(Ru, yu, Eu) {
          let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const mu = yu.hasThinInstances,
            Ju = this.lD(),
            Nu = Ju.eS();
          (0, au.eb)(Ju, Ru, Eu, !0, this._maxSimultaneousLights, this._disableLighting), Eu._needNormals = !0, (0, au.mb)(Ju, Eu);
          const Xu = this.needAlphaBlendingForMesh(Ru) && this.lD().useOrderIndependentTransparency;
          if ((0, au.rb)(Ju, Eu, this.canRenderToMRT && !Xu), (0, au.qb)(Ju, Eu, Xu), xR.b.PrepareDefines(Nu.currentRenderPassId, Ru, Eu), Eu.METALLICWORKFLOW = this.isMetallicWorkflow(), Eu._areTexturesDirty) {
            Eu._needUVs = !1;
            for (let uu = 1; uu <= 6; ++uu) Eu["MAINUV" + uu] = !1;
            if (Ju.texturesEnabled) {
              Eu.ALBEDODIRECTUV = 0, Eu.BASE_WEIGHTDIRECTUV = 0, Eu.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, Eu.AMBIENTDIRECTUV = 0, Eu.OPACITYDIRECTUV = 0, Eu.EMISSIVEDIRECTUV = 0, Eu.REFLECTIVITYDIRECTUV = 0, Eu.MICROSURFACEMAPDIRECTUV = 0, Eu.METALLIC_REFLECTANCEDIRECTUV = 0, Eu.REFLECTANCEDIRECTUV = 0, Eu.BUMPDIRECTUV = 0, Eu.LIGHTMAPDIRECTUV = 0, Nu.getCaps().textureLOD && (Eu.LODBASEDMICROSFURACE = !0), this._albedoTexture && Ou.e.DiffuseTextureEnabled ? ((0, au.fb)(this._albedoTexture, Eu, "ALBEDO"), Eu.GAMMAALBEDO = this._albedoTexture.gammaSpace) : Eu.ALBEDO = !1, this._baseWeightTexture && Ou.e.BaseWeightTextureEnabled ? (0, au.fb)(this._baseWeightTexture, Eu, "BASE_WEIGHT") : Eu.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && Ou.e.BaseDiffuseRoughnessTextureEnabled ? (0, au.fb)(this._baseDiffuseRoughnessTexture, Eu, "BASE_DIFFUSE_ROUGHNESS") : Eu.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && Ou.e.AmbientTextureEnabled ? ((0, au.fb)(this._ambientTexture, Eu, "AMBIENT"), Eu.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : Eu.AMBIENT = !1, this._opacityTexture && Ou.e.OpacityTextureEnabled ? ((0, au.fb)(this._opacityTexture, Eu, "OPACITY"), Eu.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : Eu.OPACITY = !1;
              const uu = this._getReflectionTexture(),
                Ru = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Nu.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, au.ab)(Ju, uu, Eu, this.realTimeFiltering, this.realTimeFilteringQuality, !Ru), this._lightmapTexture && Ou.e.LightmapTextureEnabled ? ((0, au.fb)(this._lightmapTexture, Eu, "LIGHTMAP"), Eu.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Eu.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, Eu.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : Eu.LIGHTMAP = !1, this._emissiveTexture && Ou.e.EmissiveTextureEnabled ? ((0, au.fb)(this._emissiveTexture, Eu, "EMISSIVE"), Eu.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : Eu.EMISSIVE = !1, Ou.e.SpecularTextureEnabled ? (this._metallicTexture ? ((0, au.fb)(this._metallicTexture, Eu, "REFLECTIVITY"), Eu.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, Eu.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, Eu.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, Eu.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, Eu.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, au.fb)(this._reflectivityTexture, Eu, "REFLECTIVITY"), Eu.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, Eu.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, Eu.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : Eu.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (Eu.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, au.fb)(this._metallicReflectanceTexture, Eu, "METALLIC_REFLECTANCE"), Eu.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : Eu.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, au.fb)(this._reflectanceTexture, Eu, "REFLECTANCE"), Eu.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : Eu.REFLECTANCE = !1) : (Eu.METALLIC_REFLECTANCE = !1, Eu.REFLECTANCE = !1), this._microSurfaceTexture ? (0, au.fb)(this._microSurfaceTexture, Eu, "MICROSURFACEMAP") : Eu.MICROSURFACEMAP = !1) : (Eu.REFLECTIVITY = !1, Eu.MICROSURFACEMAP = !1), Nu.getCaps().standardDerivatives && this._bumpTexture && Ou.e.BumpTextureEnabled && !this._disableBumpMap ? ((0, au.fb)(this._bumpTexture, Eu, "BUMP"), this._useParallax && this._albedoTexture && Ou.e.DiffuseTextureEnabled ? (Eu.PARALLAX = !0, Eu.PARALLAX_RHS = Ju.useRightHandedSystem, Eu.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Eu.PARALLAX = !1, Eu.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Eu.BUMP = !1, Eu.PARALLAX = !1, Eu.PARALLAX_RHS = !1, Eu.PARALLAXOCCLUSION = !1, Eu.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Ou.e.ReflectionTextureEnabled ? (Eu.ENVIRONMENTBRDF = !0, Eu.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Eu.ENVIRONMENTBRDF = !1, Eu.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? Eu.ALPHAFROMALBEDO = !0 : Eu.ALPHAFROMALBEDO = !1
            }
            Eu.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === uu.LIGHTFALLOFF_STANDARD ? (Eu.USEPHYSICALLIGHTFALLOFF = !1, Eu.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === uu.LIGHTFALLOFF_GLTF ? (Eu.USEPHYSICALLIGHTFALLOFF = !1, Eu.USEGLTFLIGHTFALLOFF = !0) : (Eu.USEPHYSICALLIGHTFALLOFF = !0, Eu.USEGLTFLIGHTFALLOFF = !1), Eu.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? Eu.TWOSIDEDLIGHTING = !0 : Eu.TWOSIDEDLIGHTING = !1, Eu.MIRRORED = !!Ju._mirroredCameraPosition, Eu.SPECULARAA = Nu.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(Eu._areTexturesDirty || Eu._areMiscDirty) && (Eu.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Eu.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Eu.ALPHABLEND = this.needAlphaBlendingForMesh(Ru), Eu.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, Eu.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), Eu._areTexturesDirty && (Eu.TEXTURE_REPETITION_MODE = Nu.version > 1 || Nu.isWebGPU ? this.textureRepetitionMode : 0), Eu._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Eu), Eu.FORCENORMALFORWARD = this._forceNormalForward, Eu.RADIANCEOCCLUSION = this._useRadianceOcclusion, Eu.HORIZONOCCLUSION = this._useHorizonOcclusion, Eu._areMiscDirty && ((0, au.jb)(Ru, Ju, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Ru), Eu, this._applyDecalMapAfterDetailMap, this._useVertexPulling, yu, this._isVertexOutputInvariant), Eu.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Ru.isVerticesDataPresent(zu.h.NormalKind), Eu.DEBUGMODE = this._debugMode), (0, au._)(Ju, Nu, this, Eu, !!Ku, Qu, mu), this._eventInfo.defines = Eu, this._eventInfo.mesh = Ru, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, au.X)(Ru, Eu, !0, !0, !0, this._transparencyMode !== uu.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(uu, Ru, yu) {
          const Eu = {
            clipPlane: !1,
            useInstances: !1,
            ...yu
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const yu = new dR(this._eventInfo.defineNames),
              Ku = this._prepareEffect(uu, uu, yu, void 0, void 0, Eu.useInstances, Eu.clipPlane);
            this._onEffectCreatedObservable && (jR.effect = Ku, jR.subMesh = null, this._onEffectCreatedObservable.notifyObservers(jR)), Ku.isReady() ? Ru && Ru(this) : Ku.onCompileObservable.add((() => {
              Ru && Ru(this)
            }))
          })()
        }
        buildUniformLayout() {
          const uu = this._uniformBuffer;
          uu.addUniform("vAlbedoInfos", 2), uu.addUniform("vBaseWeightInfos", 2), uu.addUniform("vBaseDiffuseRoughnessInfos", 2), uu.addUniform("vAmbientInfos", 4), uu.addUniform("vOpacityInfos", 2), uu.addUniform("vEmissiveInfos", 2), uu.addUniform("vLightmapInfos", 2), uu.addUniform("vReflectivityInfos", 3), uu.addUniform("vMicroSurfaceSamplerInfos", 2), uu.addUniform("vBumpInfos", 3), uu.addUniform("albedoMatrix", 16), uu.addUniform("baseWeightMatrix", 16), uu.addUniform("baseDiffuseRoughnessMatrix", 16), uu.addUniform("ambientMatrix", 16), uu.addUniform("opacityMatrix", 16), uu.addUniform("emissiveMatrix", 16), uu.addUniform("lightmapMatrix", 16), uu.addUniform("reflectivityMatrix", 16), uu.addUniform("microSurfaceSamplerMatrix", 16), uu.addUniform("bumpMatrix", 16), uu.addUniform("vTangentSpaceParams", 2), uu.addUniform("vAlbedoColor", 4), uu.addUniform("baseWeight", 1), uu.addUniform("baseDiffuseRoughness", 1), uu.addUniform("vLightingIntensity", 4), uu.addUniform("pointSize", 1), uu.addUniform("vReflectivityColor", 4), uu.addUniform("vEmissiveColor", 3), uu.addUniform("vAmbientColor", 3), uu.addUniform("vDebugMode", 2), uu.addUniform("vMetallicReflectanceFactors", 4), uu.addUniform("vMetallicReflectanceInfos", 2), uu.addUniform("metallicReflectanceMatrix", 16), uu.addUniform("vReflectanceInfos", 2), uu.addUniform("reflectanceMatrix", 16), uu.addUniform("cameraInfo", 4), uu.addUniform("vTextureRepetitionHexTilingParams", 4), (0, au.ub)(uu, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(uu, Ru, yu) {
          const Eu = this.lD(),
            Ku = yu.materialDefines;
          if (!Ku) return;
          const Qu = yu.effect;
          if (!Qu) return;
          this._activeEffect = Qu, Ru.getMeshUniformBuffer().bindToEffect(Qu, "Mesh"), Ru.transferToEffect(uu);
          const mu = Eu.eS();
          this._uniformBuffer.bindToEffect(Qu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Eu, Ru, uu, this.isFrozen), xR.b.Bind(mu.currentRenderPassId, this._activeEffect, Ru, uu, this);
          const Ju = Eu.activeCamera;
          Ju ? this._uniformBuffer.updateFloat4("cameraInfo", Ju.minZ, Ju.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const Nu = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Nu[0], Nu[1], Nu[2], Nu[3]), this._eventInfo.subMesh = yu, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Ku.OBJECTSPACE_NORMALMAP && (uu.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const Xu = this._mustRebind(Eu, Qu, yu, Ru.visibility),
            Vu = mu._features.needToAlwaysBindUniformBuffers;
          (0, au.f)(Ru, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, rR.c)(this._activeEffect, this._vertexPullingMetadata);
          let ru = null;
          const Bu = this._uniformBuffer;
          if (Xu) {
            if (this.bindViewProjection(Qu), ru = this._getReflectionTexture(), !Bu.useUbo || !this.isFrozen || !Bu.isSync || yu._drawWrapper._forceRebindOnNextCall) {
              if (Eu.texturesEnabled && (this._albedoTexture && Ou.e.DiffuseTextureEnabled && (Bu.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, au.E)(this._albedoTexture, Bu, "albedo")), this._baseWeightTexture && Ou.e.BaseWeightTextureEnabled && (Bu.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, au.E)(this._baseWeightTexture, Bu, "baseWeight")), this._baseDiffuseRoughnessTexture && Ou.e.BaseDiffuseRoughnessTextureEnabled && (Bu.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, au.E)(this._baseDiffuseRoughnessTexture, Bu, "baseDiffuseRoughness")), this._ambientTexture && Ou.e.AmbientTextureEnabled && (Bu.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, au.E)(this._ambientTexture, Bu, "ambient")), this._opacityTexture && Ou.e.OpacityTextureEnabled && (Bu.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, au.E)(this._opacityTexture, Bu, "opacity")), this._emissiveTexture && Ou.e.EmissiveTextureEnabled && (Bu.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, au.E)(this._emissiveTexture, Bu, "emissive")), this._lightmapTexture && Ou.e.LightmapTextureEnabled && (Bu.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, au.E)(this._lightmapTexture, Bu, "lightmap")), Ou.e.SpecularTextureEnabled && (this._metallicTexture ? (Bu.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, au.E)(this._metallicTexture, Bu, "reflectivity")) : this._reflectivityTexture && (Bu.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, au.E)(this._reflectivityTexture, Bu, "reflectivity")), this._metallicReflectanceTexture && (Bu.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, au.E)(this._metallicReflectanceTexture, Bu, "metallicReflectance")), this._reflectanceTexture && Ku.REFLECTANCE && (Bu.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, au.E)(this._reflectanceTexture, Bu, "reflectance")), this._microSurfaceTexture && (Bu.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, au.E)(this._microSurfaceTexture, Bu, "microSurfaceSampler"))), this._bumpTexture && mu.getCaps().standardDerivatives && Ou.e.BumpTextureEnabled && !this._disableBumpMap && (Bu.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, au.E)(this._bumpTexture, Bu, "bump"), Eu._mirroredCameraPosition ? Bu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Bu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, au.k)(Eu, Ku, Bu, this._reflectionColor, ru, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && Bu.updateFloat("pointSize", this.pointSize), Ku.METALLICWORKFLOW) {
                iu.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, iu.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const uu = this.subSurface?._indexOfRefraction ?? 1.5,
                  Ru = 1;
                iu.m.Color4[0].b = uu;
                const yu = Math.pow((uu - Ru) / (uu + Ru), 2);
                iu.m.Color4[0].a = yu, Bu.updateDirectColor4("vReflectivityColor", iu.m.Color4[0]), Bu.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else Bu.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              Bu.updateColor3("vEmissiveColor", Ou.e.EmissiveTextureEnabled ? this._emissiveColor : iu.d.BlackReadOnly), !Ku.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? Bu.updateColor4("vAlbedoColor", this._albedoColor, 1) : Bu.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), Bu.updateFloat("baseWeight", this._baseWeight), Bu.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * Eu.environmentIntensity, this._lightingInfos.w = this._specularIntensity, Bu.updateVector4("vLightingIntensity", this._lightingInfos), Eu.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), Bu.updateColor3("vAmbientColor", this._globalAmbientColor), Bu.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            Eu.texturesEnabled && (this._albedoTexture && Ou.e.DiffuseTextureEnabled && Bu.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && Ou.e.BaseWeightTextureEnabled && Bu.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && Ou.e.BaseDiffuseRoughnessTextureEnabled && Bu.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && Ou.e.AmbientTextureEnabled && Bu.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && Ou.e.OpacityTextureEnabled && Bu.setTexture("opacitySampler", this._opacityTexture), (0, au.o)(Eu, Ku, Bu, ru, this.realTimeFiltering), Ku.ENVIRONMENTBRDF && Bu.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && Ou.e.EmissiveTextureEnabled && Bu.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && Ou.e.LightmapTextureEnabled && Bu.setTexture("lightmapSampler", this._lightmapTexture), Ou.e.SpecularTextureEnabled && (this._metallicTexture ? Bu.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && Bu.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && Bu.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Ku.REFLECTANCE && Bu.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && Bu.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && mu.getCaps().standardDerivatives && Ou.e.BumpTextureEnabled && !this._disableBumpMap && Bu.setTexture("bumpSampler", this._bumpTexture)), this.lD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Ru) && this.lD().depthPeelingRenderer.bind(Qu), this._eventInfo.subMesh = yu, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, VR.f)(this._activeEffect, this, Eu), this.bindEyePosition(Qu)
          } else Vu && (this._needToBindSceneUbo = !0);
          !Xu && this.isFrozen && !Vu || !Eu.lightsEnabled || this._disableLighting || (0, au.r)(Eu, Ru, this._activeEffect, Ku, this._maxSimultaneousLights), !Xu && this.isFrozen || ((Eu.fogEnabled && Ru.applyFog && Eu.fogMode !== cu.i.FOGMODE_NONE || ru || this.subSurface.refractionTexture || Ru.receiveShadows || Ku.PREPASS || Ku.CLUSTLIGHT_BATCH) && this.bindView(Qu), (0, au.g)(Eu, Ru, this._activeEffect, !0), Ku.NUM_MORPH_INFLUENCERS && (0, au.y)(Ru, this._activeEffect), Ku.BAKED_VERTEX_ANIMATION_TEXTURE && Ru.bakedVertexAnimationManager?.bind(Qu, Ku.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, au.u)(Ku, this._activeEffect, Eu)), this._afterBind(Ru, this._activeEffect, yu), Bu.update()
        }
        getAnimatables() {
          const uu = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && uu.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && uu.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && uu.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && uu.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && uu.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && uu.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && uu.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? uu.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && uu.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && uu.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && uu.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && uu.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && uu.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && uu.push(this._microSurfaceTexture), uu
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.lD().environmentTexture
        }
        getActiveTextures() {
          const uu = super.getActiveTextures();
          return this._albedoTexture && uu.push(this._albedoTexture), this._baseWeightTexture && uu.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && uu.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && uu.push(this._ambientTexture), this._opacityTexture && uu.push(this._opacityTexture), this._reflectionTexture && uu.push(this._reflectionTexture), this._emissiveTexture && uu.push(this._emissiveTexture), this._reflectivityTexture && uu.push(this._reflectivityTexture), this._metallicTexture && uu.push(this._metallicTexture), this._metallicReflectanceTexture && uu.push(this._metallicReflectanceTexture), this._reflectanceTexture && uu.push(this._reflectanceTexture), this._microSurfaceTexture && uu.push(this._microSurfaceTexture), this._bumpTexture && uu.push(this._bumpTexture), this._lightmapTexture && uu.push(this._lightmapTexture), uu
        }
        hasTexture(uu) {
          return !!super.hasTexture(uu) || (this._albedoTexture === uu || (this._baseWeightTexture === uu || (this._baseDiffuseRoughnessTexture === uu || (this._ambientTexture === uu || (this._opacityTexture === uu || (this._reflectionTexture === uu || (this._emissiveTexture === uu || (this._reflectivityTexture === uu || (this._metallicTexture === uu || (this._metallicReflectanceTexture === uu || (this._reflectanceTexture === uu || (this._microSurfaceTexture === uu || (this._bumpTexture === uu || this._lightmapTexture === uu)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const uu = this.lD().enableSubSurfaceForPrePass();
          return uu && (uu.enabled = !0), !0
        }
        dispose(uu, Ru) {
          this._breakShaderLoadedCheck = !0, Ru && (this._environmentBRDFTexture && this.lD().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(uu, Ru)
        }
      }, Ru = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ku[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, Du.f)("_markAllSubMeshesAsMiscDirty")], (0, Au.h)(uu, null, Eu, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "debugMode" in uu,
            get: uu => uu.debugMode,
            set: (uu, Ru) => {
              uu.debugMode = Ru
            }
          },
          metadata: Ru
        }, mu, Ju), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu.PBRMATERIAL_OPAQUE = Qu.d.MATERIAL_OPAQUE, uu.PBRMATERIAL_ALPHATEST = Qu.d.MATERIAL_ALPHATEST, uu.PBRMATERIAL_ALPHABLEND = Qu.d.MATERIAL_ALPHABLEND, uu.PBRMATERIAL_ALPHATESTANDBLEND = Qu.d.MATERIAL_ALPHATESTANDBLEND, uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, uu.LIGHTFALLOFF_PHYSICAL = 0, uu.LIGHTFALLOFF_GLTF = 1, uu.LIGHTFALLOFF_STANDARD = 2, uu.ForceGLSL = !1, uu._ShaderLoader = new BR.d((() => [Promise.all([yu.e(307), yu.e(318)]).then((() => yu(61409))), Promise.all([yu.e(312), yu.e(308), yu.e(372), yu.e(321), yu.e(371)]).then((() => yu(61427)))]), (() => [Promise.all([yu.e(326), yu.e(328), yu.e(335)]).then((() => yu(61498))), Promise.all([yu.e(326), yu.e(329), yu.e(375), yu.e(339), yu.e(374)]).then((() => yu(61511)))])), uu
    })();
    Object.getOwnPropertyDescriptor(CR.prototype, "decalMap") || Object.defineProperty(CR.prototype, "decalMap", (0, WR.e)("PBRBaseMaterial", "decalMap")), (0, yu(41407).e)();
    var kR = yu(39582);
    var eR = yu(39655),
      AR = yu(41392),
      DR = yu(39385),
      MR = yu(39396),
      IR = yu(39506);
    let GR = !1;
    const UR = new iu.h,
      nR = new iu.h;
    class sR extends AR.e {
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
      set wrapU(uu) {
        if (this._textures)
          for (let Ru = 0; Ru < this._textures.length; Ru++) this._textures[Ru].wrapU = uu
      }
      set wrapV(uu) {
        if (this._textures)
          for (let Ru = 0; Ru < this._textures.length; Ru++) this._textures[Ru].wrapV = uu
      }
      constructor(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = !(!Ku || !Ku.generateMipMaps) && Ku.generateMipMaps,
          Ju = !(!Ku || !Ku.generateDepthTexture) && Ku.generateDepthTexture,
          Nu = Ku && Ku.depthTextureFormat ? Ku.depthTextureFormat : 15,
          Xu = !Ku || void 0 === Ku.doNotChangeAspectRatio || Ku.doNotChangeAspectRatio,
          Vu = !(!Ku || !Ku.drawOnlyOnFirstAttachmentByDefault) && Ku.drawOnlyOnFirstAttachmentByDefault;
        if (super(uu, Ru, Eu, mu, Xu, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), GR || (GR = !0, MR.ThinEngine.prototype.restoreSingleAttachment = function() {
            const uu = this._gl;
            this.bindAttachments([uu.BACK])
          }, MR.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const uu = this._gl;
            this.bindAttachments([uu.COLOR_ATTACHMENT0])
          }, MR.ThinEngine.prototype.buildTextureLayout = function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const yu = this._gl,
              Eu = [];
            if (Ru) Eu.push(yu.BACK);
            else
              for (let Ku = 0; Ku < uu.length; Ku++) uu[Ku] ? Eu.push(yu["COLOR_ATTACHMENT" + Ku]) : Eu.push(yu.NONE);
            return Eu
          }, MR.ThinEngine.prototype.bindAttachments = function(uu) {
            const Ru = this._gl,
              yu = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, yu)
              for (let Eu = 0; Eu < uu.length; Eu++) uu[Eu] !== Ru.NONE && yu[Eu] && (0, IR.g)(yu[Eu].format) && (this._integerMRTAttachmentsMask |= 1 << Eu);
            Ru.drawBuffers(uu)
          }, MR.ThinEngine.prototype.clearAttachments = function(uu, Ru, yu, Eu) {
            let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const mu = this._currentRenderTarget?.textures;
            let Ju = !1;
            if (yu && uu && mu)
              for (let Nu = 0; Nu < Ru.length; Nu++) {
                const uu = mu[Nu];
                if (Ru[Nu] !== this._gl.NONE && uu && (0, IR.g)(uu.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  Ju = !0;
                  break
                }
              }
            if (!Ju || !uu || !mu) return this.bindAttachments(Ru), void this.clear(uu, yu, Eu, Ku, Qu);
            this.bindAttachments(Ru), this._applyColorWriteState();
            for (let Nu = 0; Nu < Ru.length; Nu++) {
              const yu = mu[Nu];
              if (Ru[Nu] !== this._gl.NONE && yu) {
                let Ru = uu;
                if ((0, IR.g)(yu.format)) {
                  const Eu = (0, IR.h)(yu.type);
                  Ru = Eu ? UR : nR;
                  const Ku = Eu ? 255 : 1;
                  Ru.r = Math.round(uu.r * Ku), Ru.g = Math.round(uu.g * Ku), Ru.b = Math.round(uu.b * Ku), Ru.a = Math.round(uu.a * Ku)
                }
                this._clearColorAttachment(Nu, Ru, yu.format, yu.type)
              }
            }
            if (Eu || Ku) {
              const uu = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, Eu, Ku, Qu)
              } finally {
                this._integerMRTAttachmentsMask = uu
              }
            }
          }, MR.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              yu = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, uu.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(uu), Ru || this.generateMipMapsMultiFramebuffer(uu), yu && (uu._MSAAFramebuffer && this._bindUnboundFramebuffer(uu._framebuffer), yu()), this._bindUnboundFramebuffer(null)
          }, MR.ThinEngine.prototype.createMultipleRenderTarget = function(uu, Ru) {
            let yu, Eu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Ku = !1,
              Qu = !0,
              mu = !1,
              Ju = !1,
              Nu = 1,
              Xu = 1,
              Vu = [],
              ru = [],
              Bu = [],
              xu = [],
              Su = [],
              pu = [],
              Tu = [],
              Wu = [],
              ju = [],
              Hu = !1;
            const du = this._createHardwareRenderTargetWrapper(!0, !1, uu);
            void 0 !== Ru && (Ku = void 0 !== Ru.generateMipMaps && Ru.generateMipMaps, Qu = void 0 === Ru.generateDepthBuffer || Ru.generateDepthBuffer, mu = void 0 !== Ru.generateStencilBuffer && Ru.generateStencilBuffer, Ju = void 0 !== Ru.generateDepthTexture && Ru.generateDepthTexture, Nu = Ru.Omu ?? 1, Xu = Ru.samples ?? Xu, Vu = Ru.types || Vu, ru = Ru.samplingModes || ru, Bu = Ru.useSRGBBuffers || Bu, xu = Ru.formats || xu, Su = Ru.targetTypes || Su, pu = Ru.faceIndex || pu, Tu = Ru.layerIndex || Tu, Wu = Ru.layerCounts || Wu, ju = Ru.labels || ju, Hu = Ru.dontCreateTextures ?? !1, this.Ep > 1 && (13 === Ru.depthTextureFormat || 17 === Ru.depthTextureFormat || 16 === Ru.depthTextureFormat || 14 === Ru.depthTextureFormat || 18 === Ru.depthTextureFormat) && (yu = Ru.depthTextureFormat)), void 0 === yu && (yu = mu ? 13 : 14);
            const bu = this._gl,
              Cu = this._currentFramebuffer,
              ku = bu.createFramebuffer();
            this._bindUnboundFramebuffer(ku);
            const eu = uu.width ?? uu,
              Au = uu.height ?? uu,
              Du = [],
              Iu = [],
              Gu = this.Ep > 1 && (13 === yu || 17 === yu || 18 === yu);
            du.label = Ru?.label ?? "MultiRenderTargetWrapper", du._framebuffer = ku, du._generateDepthBuffer = Ju || Qu, du._generateStencilBuffer = Ju ? Gu : mu, du._depthStencilBuffer = this._setupFramebufferDepthAttachments(du._generateStencilBuffer, du._generateDepthBuffer, eu, Au, 1, yu), du._attachments = Iu;
            for (let Uu = 0; Uu < Nu; Uu++) {
              let uu = ru[Uu] || 3,
                Ru = Vu[Uu] || 0,
                yu = Bu[Uu] || !1;
              const Eu = xu[Uu] || 5,
                Qu = Su[Uu] || 3553,
                mu = Wu[Uu] ?? 1;
              (1 !== Ru || this._caps.textureFloatLinearFiltering) && (2 !== Ru || this._caps.textureHalfFloatLinearFiltering) || (uu = 1);
              const Ju = this._getSamplingParameters(uu, Ku);
              1 !== Ru || this._caps.textureFloat || (Ru = 0, Mu.e.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), yu = yu && this._caps.supportSRGBBuffers && (this.Ep > 1 || this.isWebGPU);
              const Nu = this.Ep > 1,
                Xu = bu[Nu ? "COLOR_ATTACHMENT" + Uu : "COLOR_ATTACHMENT" + Uu + "_WEBGL"];
              if (Iu.push(Xu), -1 === Qu || Hu) continue;
              const pu = new DR.c(this, 6);
              Du[Uu] = pu, bu.activeTexture(bu["TEXTURE" + Uu]), bu.bindTexture(Qu, pu._hardwareTexture.underlyingResource), bu.texParameteri(Qu, bu.TEXTURE_MAG_FILTER, Ju.mag), bu.texParameteri(Qu, bu.TEXTURE_MIN_FILTER, Ju.min), bu.texParameteri(Qu, bu.TEXTURE_WRAP_S, bu.CLAMP_TO_EDGE), bu.texParameteri(Qu, bu.TEXTURE_WRAP_T, bu.CLAMP_TO_EDGE);
              const Tu = this._getRGBABufferInternalSizedFormat(Ru, Eu, yu),
                Cu = this._getInternalFormat(Eu),
                ku = this._getWebGLTextureType(Ru);
              if (!Nu || 35866 !== Qu && 32879 !== Qu)
                if (34067 === Qu) {
                  for (let uu = 0; uu < 6; uu++) bu.texImage2D(bu.TEXTURE_CUBE_MAP_POSITIVE_X + uu, 0, Tu, eu, Au, 0, Cu, ku, null);
                  pu.isCube = !0
                } else bu.texImage2D(bu.TEXTURE_2D, 0, Tu, eu, Au, 0, Cu, ku, null);
              else 35866 === Qu ? pu.is2DArray = !0 : pu.is3D = !0, pu.baseDepth = pu.depth = mu, bu.texImage3D(Qu, 0, Tu, eu, Au, mu, 0, Cu, ku, null);
              Ku && bu.generateMipmap(Qu), this._bindTextureDirectly(Qu, null), pu.baseWidth = eu, pu.baseHeight = Au, pu.width = eu, pu.height = Au, pu.isReady = !0, pu.samples = 1, pu.generateMipMaps = Ku, pu.samplingMode = uu, pu.type = Ru, pu._useSRGBBuffer = yu, pu.format = Eu, pu.label = ju[Uu] ?? du.label + "-Texture" + Uu, this._internalTexturesCache.push(pu)
            }
            if (Ju && this._caps.depthTextureExtension && !Hu) {
              const uu = new DR.c(this, 14);
              let Ru = 5,
                Eu = bu.DEPTH_COMPONENT16,
                Qu = bu.DEPTH_COMPONENT,
                mu = bu.UNSIGNED_SHORT,
                Ju = bu.DEPTH_ATTACHMENT;
              this.Ep < 2 ? Eu = bu.DEPTH_COMPONENT : 14 === yu ? (Ru = 1, mu = bu.FLOAT, Eu = bu.DEPTH_COMPONENT32F) : 18 === yu ? (Ru = 0, mu = bu.FLOAT_32_UNSIGNED_INT_24_8_REV, Eu = bu.DEPTH32F_STENCIL8, Qu = bu.DEPTH_STENCIL, Ju = bu.DEPTH_STENCIL_ATTACHMENT) : 16 === yu ? (Ru = 0, mu = bu.UNSIGNED_INT, Eu = bu.DEPTH_COMPONENT24, Ju = bu.DEPTH_ATTACHMENT) : 13 !== yu && 17 !== yu || (Ru = 12, mu = bu.UNSIGNED_INT_24_8, Eu = bu.DEPTH24_STENCIL8, Qu = bu.DEPTH_STENCIL, Ju = bu.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(bu.TEXTURE_2D, uu, !0), bu.texParameteri(bu.TEXTURE_2D, bu.TEXTURE_MAG_FILTER, bu.NEAREST), bu.texParameteri(bu.TEXTURE_2D, bu.TEXTURE_MIN_FILTER, bu.NEAREST), bu.texParameteri(bu.TEXTURE_2D, bu.TEXTURE_WRAP_S, bu.CLAMP_TO_EDGE), bu.texParameteri(bu.TEXTURE_2D, bu.TEXTURE_WRAP_T, bu.CLAMP_TO_EDGE), bu.texImage2D(bu.TEXTURE_2D, 0, Eu, eu, Au, 0, Qu, mu, null), bu.framebufferTexture2D(bu.FRAMEBUFFER, Ju, bu.TEXTURE_2D, uu._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(bu.TEXTURE_2D, null), du._depthStencilTexture = uu, du._depthStencilTextureWithStencil = Gu, uu.baseWidth = eu, uu.baseHeight = Au, uu.width = eu, uu.height = Au, uu.isReady = !0, uu.samples = 1, uu.generateMipMaps = Ku, uu.samplingMode = 1, uu.format = yu, uu.type = Ru, uu.label = du.label + "-DepthStencil", Du[Nu] = uu, this._internalTexturesCache.push(uu)
            }
            if (du.setTextures(Du), Eu && bu.drawBuffers(Iu), this._bindUnboundFramebuffer(Cu), du.setLayerAndFaceIndices(Tu, pu), this.resetTextureCache(), Hu) {
              if (Xu > 1) {
                const uu = bu.createFramebuffer();
                if (!uu) throw new Error("Unable to create multi sampled framebuffer");
                du._samples = Xu, du._MSAAFramebuffer = uu, Nu > 0 && Eu && (this._bindUnboundFramebuffer(uu), bu.drawBuffers(Iu), this._bindUnboundFramebuffer(Cu))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(du, Xu, Eu);
            return du
          }, MR.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(uu, Ru) {
            let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Ep < 2 || !uu) return 1;
            if (uu.samples === Ru) return Ru;
            const Eu = this._gl;
            Ru = Math.min(Ru, this.getCaps().maxMSAASamples), uu._depthStencilBuffer && (Eu.deleteRenderbuffer(uu._depthStencilBuffer), uu._depthStencilBuffer = null), uu._MSAAFramebuffer && (Eu.deleteFramebuffer(uu._MSAAFramebuffer), uu._MSAAFramebuffer = null);
            const Ku = uu._attachments.length;
            for (let mu = 0; mu < Ku; mu++) {
              const Ru = uu.textures[mu]._hardwareTexture;
              Ru?.releaseMSAARenderBuffers()
            }
            if (Ru > 1 && "function" === typeof Eu.renderbufferStorageMultisample) {
              const Qu = Eu.createFramebuffer();
              if (!Qu) throw new Error("Unable to create multi sampled framebuffer");
              uu._MSAAFramebuffer = Qu, this._bindUnboundFramebuffer(Qu);
              const mu = [];
              for (let yu = 0; yu < Ku; yu++) {
                const Ku = uu.textures[yu],
                  Qu = Ku._hardwareTexture,
                  Ju = Eu[this.Ep > 1 ? "COLOR_ATTACHMENT" + yu : "COLOR_ATTACHMENT" + yu + "_WEBGL"],
                  Nu = this._createRenderBuffer(Ku.width, Ku.height, Ru, -1, this._getRGBABufferInternalSizedFormat(Ku.type, Ku.format, Ku._useSRGBBuffer), Ju);
                if (!Nu) throw new Error("Unable to create multi sampled framebuffer");
                Qu.addMSAARenderBuffer(Nu), Ku.samples = Ru, mu.push(Ju)
              }
              yu && Eu.drawBuffers(mu)
            } else this._bindUnboundFramebuffer(uu._framebuffer);
            const Qu = uu._depthStencilTexture ? uu._depthStencilTexture.format : void 0;
            return uu._depthStencilBuffer = this._setupFramebufferDepthAttachments(uu._generateStencilBuffer, uu._generateDepthBuffer, uu.width, uu.height, Ru, Qu), this._bindUnboundFramebuffer(null), uu._samples = Ru, Ru
          }, MR.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(uu) {
            const Ru = uu,
              yu = this._gl;
            if (Ru.isMulti)
              for (let Eu = 0; Eu < Ru._attachments.length; Eu++) {
                const uu = Ru.textures[Eu];
                !uu?.generateMipMaps || uu?.isCube || uu?.is3D || (this._bindTextureDirectly(yu.TEXTURE_2D, uu, !0), yu.generateMipmap(yu.TEXTURE_2D), this._bindTextureDirectly(yu.TEXTURE_2D, null))
              }
          }, MR.ThinEngine.prototype.resolveMultiFramebuffer = function(uu) {
            const Ru = uu,
              yu = this._gl;
            if (!Ru._MSAAFramebuffer || !Ru.isMulti) return;
            let Eu = Ru.resolveMSAAColors ? yu.COLOR_BUFFER_BIT : 0;
            Eu |= Ru._generateDepthBuffer && Ru.resolveMSAADepth ? yu.DEPTH_BUFFER_BIT : 0, Eu |= Ru._generateStencilBuffer && Ru.resolveMSAAStencil ? yu.STENCIL_BUFFER_BIT : 0;
            const Ku = Ru._attachments,
              Qu = Ku.length;
            yu.bindFramebuffer(yu.READ_FRAMEBUFFER, Ru._MSAAFramebuffer), yu.bindFramebuffer(yu.DRAW_FRAMEBUFFER, Ru._framebuffer);
            for (let mu = 0; mu < Qu; mu++) {
              const uu = Ru.textures[mu];
              for (let Ru = 0; Ru < Qu; Ru++) Ku[Ru] = yu.NONE;
              Ku[mu] = yu[this.Ep > 1 ? "COLOR_ATTACHMENT" + mu : "COLOR_ATTACHMENT" + mu + "_WEBGL"], yu.readBuffer(Ku[mu]), yu.drawBuffers(Ku), yu.blitFramebuffer(0, 0, uu.width, uu.height, 0, 0, uu.width, uu.height, Eu, yu.NEAREST)
            }
            for (let mu = 0; mu < Qu; mu++) Ku[mu] = yu[this.Ep > 1 ? "COLOR_ATTACHMENT" + mu : "COLOR_ATTACHMENT" + mu + "_WEBGL"];
            yu.drawBuffers(Ku), yu.bindFramebuffer(this._gl.FRAMEBUFFER, Ru._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Qu;
        const ru = [],
          Bu = [],
          xu = [],
          Su = [],
          pu = [],
          Tu = [],
          Wu = [],
          ju = [];
        this._initTypes(yu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Ku);
        const Hu = !Ku || void 0 === Ku.generateDepthBuffer || Ku.generateDepthBuffer,
          du = !(!Ku || void 0 === Ku.generateStencilBuffer) && Ku.generateStencilBuffer,
          bu = Ku && Ku.samples ? Ku.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: Bu,
          generateMipMaps: mu,
          generateDepthBuffer: Hu,
          generateStencilBuffer: du,
          generateDepthTexture: Ju,
          depthTextureFormat: Nu,
          types: ru,
          Omu: yu,
          useSRGBBuffers: xu,
          samples: bu,
          formats: Su,
          targetTypes: pu,
          faceIndex: Tu,
          layerIndex: Wu,
          layerCounts: ju,
          labels: Qu,
          label: uu
        }, this._count = yu, this._drawOnlyOnFirstAttachmentByDefault = Vu, yu > 0 && (this._createInternalTextures(), this._createTextures(Qu))
      }
      _initTypes(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        for (let Vu = 0; Vu < uu; Vu++) Xu && Xu.types && void 0 !== Xu.types[Vu] ? Ru.push(Xu.types[Vu]) : Ru.push(Xu && Xu.defaultType ? Xu.defaultType : 0), Xu && Xu.samplingModes && void 0 !== Xu.samplingModes[Vu] ? yu.push(Xu.samplingModes[Vu]) : yu.push(Gu.h.BILINEAR_SAMPLINGMODE), Xu && Xu.useSRGBBuffers && void 0 !== Xu.useSRGBBuffers[Vu] ? Eu.push(Xu.useSRGBBuffers[Vu]) : Eu.push(!1), Xu && Xu.formats && void 0 !== Xu.formats[Vu] ? Ku.push(Xu.formats[Vu]) : Ku.push(5), Xu && Xu.targetTypes && void 0 !== Xu.targetTypes[Vu] ? Qu.push(Xu.targetTypes[Vu]) : Qu.push(3553), Xu && Xu.faceIndex && void 0 !== Xu.faceIndex[Vu] ? mu.push(Xu.faceIndex[Vu]) : mu.push(0), Xu && Xu.layerIndex && void 0 !== Xu.layerIndex[Vu] ? Ju.push(Xu.layerIndex[Vu]) : Ju.push(0), Xu && Xu.layerCounts && void 0 !== Xu.layerCounts[Vu] ? Nu.push(Xu.layerCounts[Vu]) : Nu.push(1)
      }
      _createInternaTextureIndexMapping() {
        const uu = {},
          Ru = [];
        if (!this._renderTarget) return Ru;
        const yu = this._renderTarget.textures;
        for (let Eu = 0; Eu < yu.length; Eu++) {
          const Ku = yu[Eu];
          if (!Ku) continue;
          const Qu = uu[Ku.uniqueId];
          void 0 !== Qu ? Ru[Eu] = Qu : uu[Ku.uniqueId] = Eu
        }
        return Ru
      }
      _rebuild() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || uu) return;
        const Eu = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Ru && (this._releaseTextures(), this._createTextures(yu));
        const Ku = this._renderTarget.textures;
        for (let Qu = 0; Qu < Ku.length; Qu++) {
          const uu = this._textures[Qu];
          void 0 !== Eu[Qu] && this._renderTarget.setTexture(Ku[Eu[Qu]], Qu), uu._texture = Ku[Qu], uu._texture && (uu._noMipmap = !uu._texture.useMipMaps, uu._useSRGBBuffer = uu._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let uu = 0; uu < this._textures.length; uu++) this._textures[uu]._texture = null, this._textures[uu].dispose()
      }
      _createTextures(uu) {
        const Ru = this._renderTarget.textures;
        this._textures = [];
        for (let yu = 0; yu < Ru.length; yu++) {
          const Eu = new Gu.h(null, this.lD());
          uu?.[yu] && (Eu.name = uu[yu]), Eu._texture = Ru[yu], Eu._texture && (Eu._noMipmap = !Eu._texture.useMipMaps, Eu._useSRGBBuffer = Eu._texture._useSRGBBuffer), this._textures.push(Eu)
        }
      }
      setInternalTexture(uu, Ru) {
        let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Ru && (this._texture = uu), this.renderTarget.setTexture(uu, Ru, yu), this.textures[Ru] || (this.textures[Ru] = new Gu.h(null, this.lD()), this.textures[Ru].name = this._textureNames?.[Ru] ?? this.textures[Ru].name), this.textures[Ru]._texture = uu, this.textures[Ru]._noMipmap = !uu.useMipMaps, this.textures[Ru]._useSRGBBuffer = uu._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Ru] = uu.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Ru] = uu.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Ru] = uu._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Ru])) {
          let yu;
          yu = uu.is2DArray ? 35866 : uu.isCube ? 34067 : uu.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Ru] = yu
        }
      }
      setLayerAndFaceIndex(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[uu] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[uu] = Ru), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[uu] = yu), this.renderTarget.setLayerAndFaceIndex(uu, Ru, yu))
      }
      setLayerAndFaceIndices(uu, Ru) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = uu, this._multiRenderTargetOptions.faceIndex = Ru, this.renderTarget.setLayerAndFaceIndices(uu, Ru))
      }
      get samples() {
        return this._samples
      }
      set samples(uu) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(uu) : this._samples = uu
      }
      resize(uu) {
        this._processSizeParameter(uu), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(uu, Ru, yu) {
        this._multiRenderTargetOptions.Omu = uu, this._count = uu;
        const Eu = [],
          Ku = [],
          Qu = [],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [];
        this._textureNames = yu, this._initTypes(uu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu, Ru), this._multiRenderTargetOptions.types = Eu, this._multiRenderTargetOptions.samplingModes = Ku, this._multiRenderTargetOptions.useSRGBBuffers = Qu, this._multiRenderTargetOptions.formats = mu, this._multiRenderTargetOptions.targetTypes = Ju, this._multiRenderTargetOptions.faceIndex = Nu, this._multiRenderTargetOptions.layerIndex = Xu, this._multiRenderTargetOptions.layerCounts = Vu, this._multiRenderTargetOptions.labels = yu, this._rebuild(!1, !0, yu)
      }
      _unbindFrameBuffer(uu, Ru) {
        this._renderTarget && uu.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Ru)
        }))
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), uu ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const uu = this._renderTarget?.textures;
        if (uu) {
          for (let Ru = uu.length - 1; Ru >= 0; Ru--) this._textures[Ru]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var tR = yu(39736);
    class lR {
      constructor(uu) {
        this.name = tR.c.NAME_GEOMETRYBUFFERRENDERER, this.cp = uu
      }
      register() {
        this.cp._gatherRenderTargetsStage.registerStep(tR.c.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(uu) {
        this.cp._geometryBufferRenderer && uu.push(this.cp._geometryBufferRenderer.getGBuffer())
      }
    }
    let gR = !1;
    var cR;
    ! function(uu) {
      uu[uu.Small = 0] = "Small", uu[uu.Medium = 1] = "Medium", uu[uu.Large = 2] = "Large", uu[uu.ExtraLarge = 3] = "ExtraLarge"
    }(cR || (cR = {}));
    const LR = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      zR = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class FR {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(uu) {
        if (uu && this._enableMeshBlendTag && !this._scene.eS().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = uu
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(uu) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = uu, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(uu, Ru) {
        uu === FR.POSITION_TEXTURE_TYPE ? (this._positionIndex = Ru, this._enablePosition = !0) : uu === FR.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Ru, this._enableVelocity = !0) : uu === FR.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Ru, this._enableVelocityLinear = !0) : uu === FR.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Ru, this._enableReflectivity = !0) : uu === FR.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Ru, this._enableDepth = !0) : uu === FR.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Ru, this._enableNormal = !0) : uu === FR.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Ru, this._enableScreenspaceDepth = !0) : uu === FR.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Ru, this._enableIrradiance = !0) : uu === FR.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Ru, this._enableObjectId = !0) : uu === FR.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Ru, this._enableMeshBlendTag = !0)
      }
      _setAttachments(uu) {
        this._attachmentsFromPrePass = uu
      }
      _linkInternalTexture(uu) {
        this._multiRenderTarget.setInternalTexture(uu, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(uu) {
        this._multiRenderTarget.renderList = uu
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(uu) {
        switch (uu) {
          case FR.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case FR.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case FR.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case FR.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case FR.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case FR.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case FR.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case FR.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case FR.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case FR.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(uu) {
        this._enableDepth = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(uu) {
        this._enableNormal = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(uu) {
        this._enablePosition = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(uu) {
        this._enableVelocity = uu, uu || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = uu
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(uu) {
        this._enableVelocityLinear = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(uu) {
        this._enableReflectivity = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(uu) {
        this._enableScreenspaceDepth = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(uu) {
        this._enableIrradiance = uu, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(uu) {
        if (uu && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (uu && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (uu && !this._enableObjectId && !this._linkedWithPrePass) {
          const uu = this._scene.eS(),
            Ru = Math.min(uu.getCaps().maxDrawBuffers ?? 1, 8),
            yu = this._assignRenderTargetIndices()[0] + 1;
          if (uu.getCaps().drawBuffersExtension && yu > Ru) throw new Error(`GeometryBufferRenderer: ${yu} color attachments were requested, but this engine supports at most ${Ru}`)
        }
        this._enableObjectId = uu, uu || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(uu) {
        if (this._enableMeshBlendTag !== uu) {
          if (uu) {
            const uu = this._scene.eS();
            if (! function(uu) {
                return "NATIVE" !== uu.shaderPlatformName && (uu.isWebGPU || 2 === uu.Ep)
              }(uu)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !uu.isWebGPU && !uu.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Ru = Math.min(uu.getCaps().maxDrawBuffers ?? 1, 8),
                yu = this._assignRenderTargetIndices()[0] + 1;
              if (uu.getCaps().drawBuffersExtension && yu > Ru) throw new Error(`GeometryBufferRenderer: ${yu} color attachments were requested, but this engine supports at most ${Ru}`)
            }
          }
          this._enableMeshBlendTag = uu, uu || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get cp() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        var Ku;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new iu.h(0, 0, 0, 0), this._clearDepthColor = new iu.h(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = uu, this._ratioOrDimensions = Ru, this._useUbo = uu.eS().supportsUniformBuffers, this._depthFormat = yu, this._textureTypesAndFormats = Eu || {}, this._initShaderSourceAsync(), Ku = FR, gR || (gR = !0, Object.defineProperty(cu.i.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(uu) {
            uu && uu.isSupported && (this._geometryBufferRenderer = uu)
          },
          enumerable: !0,
          configurable: !0
        }), cu.i.prototype.enableGeometryBufferRenderer = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            yu = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Ku(this, uu, Ru, yu), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, cu.i.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Ku._SceneComponentInitialization = uu => {
          let Ru = uu._getComponent(tR.c.NAME_GEOMETRYBUFFERRENDERER);
          Ru || (Ru = new lR(uu), uu.BEu(Ru))
        }), FR._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.eS().isWebGPU && !FR.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([yu.e(327).then((() => yu(61689))), Promise.all([yu.e(326), yu.e(338)]).then((() => yu(61698)))])) : await Promise.all([yu.e(310).then((() => yu(61707))), yu.e(309).then((() => yu(61709)))]), this._shadersLoaded = !0
      }
      isReady(uu, Ru) {
        if (!this._shadersLoaded) return !1;
        const yu = uu.nS();
        if (yu && yu.disableDepthWrite) return !1;
        if (function(uu) {
            return uu._isGaussianSplatting || "GaussianSplattingMesh" === (Ru = uu.getClassName()) || "GaussianSplattingStream" === Ru;
            var Ru
          }(uu.getMesh())) return !1;
        const Eu = [],
          Ku = [zu.h.PositionKind],
          Qu = uu.getMesh();
        Qu.isVerticesDataPresent(zu.h.NormalKind) && (Eu.push("#define HAS_NORMAL_ATTRIBUTE"), Ku.push(zu.h.NormalKind));
        let mu = !1,
          Ju = !1;
        if (yu) {
          let uu = !1;
          if (yu.needAlphaTestingForMesh(Qu) && yu.getAlphaTestTexture() && (Eu.push("#define ALPHATEST"), Eu.push(`#define ALPHATEST_UV${yu.getAlphaTestTexture().coordinatesIndex+1}`), uu = !0), (yu.bumpTexture || yu.normalTexture || yu.geometryNormalTexture) && Ou.e.BumpTextureEnabled) {
            const Ru = yu.bumpTexture || yu.normalTexture || yu.geometryNormalTexture;
            Eu.push("#define BUMP"), Eu.push(`#define BUMP_UV${Ru.coordinatesIndex+1}`), uu = !0
          }
          if (this._enableReflectivity) {
            let Ru = !1;
            if ("PBRMetallicRoughnessMaterial" === yu.getClassName()) yu.metallicRoughnessTexture && (Eu.push("#define ORMTEXTURE"), Eu.push(`#define REFLECTIVITY_UV${yu.metallicRoughnessTexture.coordinatesIndex+1}`), Eu.push("#define METALLICWORKFLOW"), uu = !0, Ru = !0), null != yu.metallic && (Eu.push("#define METALLIC"), Eu.push("#define METALLICWORKFLOW"), Ru = !0), null != yu.roughness && (Eu.push("#define ROUGHNESS"), Eu.push("#define METALLICWORKFLOW"), Ru = !0), Ru && (yu.baseTexture && (Eu.push("#define ALBEDOTEXTURE"), Eu.push(`#define ALBEDO_UV${yu.baseTexture.coordinatesIndex+1}`), yu.baseTexture.gammaSpace && Eu.push("#define GAMMAALBEDO"), uu = !0), yu.baseColor && Eu.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === yu.getClassName()) yu.specularGlossinessTexture ? (Eu.push("#define SPECULARGLOSSINESSTEXTURE"), Eu.push(`#define REFLECTIVITY_UV${yu.specularGlossinessTexture.coordinatesIndex+1}`), uu = !0, yu.specularGlossinessTexture.gammaSpace && Eu.push("#define GAMMAREFLECTIVITYTEXTURE")) : yu.specularColor && Eu.push("#define REFLECTIVITYCOLOR"), null != yu.glossiness && Eu.push("#define GLOSSINESS");
            else if ("PBRMaterial" === yu.getClassName()) yu.metallicTexture && (Eu.push("#define ORMTEXTURE"), Eu.push(`#define REFLECTIVITY_UV${yu.metallicTexture.coordinatesIndex+1}`), Eu.push("#define METALLICWORKFLOW"), uu = !0, Ru = !0), null != yu.metallic && (Eu.push("#define METALLIC"), Eu.push("#define METALLICWORKFLOW"), Ru = !0), null != yu.roughness && (Eu.push("#define ROUGHNESS"), Eu.push("#define METALLICWORKFLOW"), Ru = !0), Ru ? (yu.albedoTexture && (Eu.push("#define ALBEDOTEXTURE"), Eu.push(`#define ALBEDO_UV${yu.albedoTexture.coordinatesIndex+1}`), yu.albedoTexture.gammaSpace && Eu.push("#define GAMMAALBEDO"), uu = !0), yu.albedoColor && Eu.push("#define ALBEDOCOLOR")) : (yu.reflectivityTexture ? (Eu.push("#define SPECULARGLOSSINESSTEXTURE"), Eu.push(`#define REFLECTIVITY_UV${yu.reflectivityTexture.coordinatesIndex+1}`), yu.reflectivityTexture.gammaSpace && Eu.push("#define GAMMAREFLECTIVITYTEXTURE"), uu = !0) : yu.reflectivityColor && Eu.push("#define REFLECTIVITYCOLOR"), null != yu.microSurface && Eu.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === yu.getClassName()) yu.specularTexture && (Eu.push("#define REFLECTIVITYTEXTURE"), Eu.push(`#define REFLECTIVITY_UV${yu.specularTexture.coordinatesIndex+1}`), yu.specularTexture.gammaSpace && Eu.push("#define GAMMAREFLECTIVITYTEXTURE"), uu = !0), yu.specularColor && Eu.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === yu.getClassName()) {
              const Ru = yu;
              Eu.push("#define METALLIC"), Eu.push("#define ROUGHNESS"), Ru._useRoughnessFromMetallicTextureGreen && Ru.baseMetalnessTexture ? (Eu.push("#define ORMTEXTURE"), Eu.push(`#define REFLECTIVITY_UV${Ru.baseMetalnessTexture.coordinatesIndex+1}`), uu = !0) : Ru.baseMetalnessTexture ? (Eu.push("#define METALLIC_TEXTURE"), Eu.push(`#define METALLIC_UV${Ru.baseMetalnessTexture.coordinatesIndex+1}`), uu = !0) : Ru.specularRoughnessTexture && (Eu.push("#define ROUGHNESS_TEXTURE"), Eu.push(`#define ROUGHNESS_UV${Ru.specularRoughnessTexture.coordinatesIndex+1}`), uu = !0), Ru.baseColorTexture && (Eu.push("#define ALBEDOTEXTURE"), Eu.push(`#define ALBEDO_UV${Ru.baseColorTexture.coordinatesIndex+1}`), Ru.baseColorTexture.gammaSpace && Eu.push("#define GAMMAALBEDO"), uu = !0), Ru.baseColor && Eu.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (Eu.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === yu.getClassName())) {
            const Ru = yu;
            Ru.subsurfaceWeight > 0 && Ru.subsurfaceWeightTexture && (Eu.push("#define SUBSURFACE_WEIGHT"), Eu.push(`#define SUBSURFACEWEIGHT_UV${Ru.subsurfaceWeightTexture.coordinatesIndex+1}`), uu = !0), Ru.transmissionWeight > 0 && Ru.transmissionWeightTexture && (Eu.push("#define TRANSMISSION_WEIGHT"), Eu.push(`#define TRANSMISSIONWEIGHT_UV${Ru.transmissionWeightTexture.coordinatesIndex+1}`), uu = !0)
          }
          uu && (Eu.push("#define NEED_UV"), Qu.isVerticesDataPresent(zu.h.UVKind) && (Ku.push(zu.h.UVKind), Eu.push("#define UV1"), mu = !0), Qu.isVerticesDataPresent(zu.h.UV2Kind) && (Ku.push(zu.h.UV2Kind), Eu.push("#define UV2"), Ju = !0))
        }
        if (this._enableDepth && (Eu.push("#define DEPTH"), Eu.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (Eu.push("#define NORMAL"), Eu.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (Eu.push("#define POSITION"), Eu.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (Eu.push("#define VELOCITY"), Eu.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Qu) && Eu.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (Eu.push("#define VELOCITY_LINEAR"), Eu.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Qu) && Eu.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (Eu.push("#define REFLECTIVITY"), Eu.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (Eu.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), Eu.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          Eu.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), Eu.push("#define IRRADIANCE");
          const uu = this._scene;
          if (uu.environmentTexture) {
            const Ru = {};
            let Ku = !1,
              Qu = 0;
            "OpenPBRMaterial" !== yu.getClassName() && "StandardMaterial" !== yu.getClassName() && "PBRMetallicRoughnessMaterial" !== yu.getClassName() && "PBRSpecularGlossinessMaterial" !== yu.getClassName() && "PBRMaterial" !== yu.getClassName() || (Ku = !!yu.realtimeFiltering, Qu = yu.realtimeFilteringQuality || 0), (0, au.ab)(uu, uu.environmentTexture, Ru, Ku, Qu, !0);
            for (const uu in Ru) Ru[uu] && Eu.push("#define " + uu);
            Ru.USEIRRADIANCEMAP || Eu.push("#define SPHERICAL_HARMONICS");
            const mu = uu.postProcessRenderPipelineManager.supportedPipelines.find((uu => "IBLShadowsRenderPipeline" === uu.getClassName()));
            if (mu) {
              const uu = mu;
              uu._getAccumulatedTexture() && (Eu.push("#define IBL_SHADOW_TEXTURE"), uu.coloredShadows && Eu.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (Eu.push("#define OBJECT_ID"), Eu.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (Eu.push("#define MESH_BLEND_TAG"), Eu.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && Eu.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && Eu.push("#define ENCODE_NORMAL"), Qu.useBones && Qu.computeBonesUsingShaders && Qu.skeleton ? (Ku.push(zu.h.MatricesIndicesKind), Ku.push(zu.h.MatricesWeightsKind), Qu.numBoneInfluencers > 4 && (Ku.push(zu.h.MatricesIndicesExtraKind), Ku.push(zu.h.MatricesWeightsExtraKind)), Eu.push("#define NUM_BONE_INFLUENCERS " + Qu.numBoneInfluencers), Eu.push("#define BONETEXTURE " + Qu.skeleton.isUsingTextureForMatrices), Eu.push("#define BonesPerMesh " + (Qu.skeleton.bones.length + 1))) : (Eu.push("#define NUM_BONE_INFLUENCERS 0"), Eu.push("#define BONETEXTURE false"), Eu.push("#define BonesPerMesh 0"));
        const Nu = Qu.morphTargetManager ? (0, au.T)(Qu.morphTargetManager, Eu, Ku, Qu, !0, !0, !1, mu, Ju, !1) : 0;
        Ru && (Eu.push("#define INSTANCES"), (0, au.Cb)(Ku, this._enableVelocity || this._enableVelocityLinear), uu.getRenderingMesh().hasThinInstances && Eu.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? Eu.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : Eu.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, VR.k)(yu, this._scene, Eu);
        const Xu = this._scene.eS(),
          Vu = uu._getDrawWrapper(void 0, !0),
          ru = Vu.defines,
          Bu = Eu.join("\n");
        return ru !== Bu && Vu.setEffect(Xu.createEffect("geometry", {
          attributes: Ku,
          uniformsNames: zR,
          samplers: LR,
          defines: Bu,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: Nu
          },
          shaderLanguage: this.shaderLanguage
        }, Xu), Bu), Vu.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(uu) {
        if (this._enableObjectId && 1 !== uu) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== uu) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = uu
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.eS().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.cp.eS()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.cp.eS().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const uu = [],
          Ru = [];
        let yu = 0;
        return this._enableDepth && (this._depthIndex = yu, yu++, uu.push("gBuffer_Depth"), Ru.push(this._textureTypesAndFormats[FR.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = yu, yu++, uu.push("gBuffer_Normal"), Ru.push(this._textureTypesAndFormats[FR.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = yu, yu++, uu.push("gBuffer_Position"), Ru.push(this._textureTypesAndFormats[FR.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = yu, yu++, uu.push("gBuffer_Velocity"), Ru.push(this._textureTypesAndFormats[FR.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = yu, yu++, uu.push("gBuffer_VelocityLinear"), Ru.push(this._textureTypesAndFormats[FR.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = yu, yu++, uu.push("gBuffer_Reflectivity"), Ru.push(this._textureTypesAndFormats[FR.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = yu, yu++, uu.push("gBuffer_ScreenspaceDepth"), Ru.push(this._textureTypesAndFormats[FR.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = yu, yu++, uu.push("gBuffer_Irradiance"), Ru.push(this._textureTypesAndFormats[FR.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = yu, yu++, uu.push("gBuffer_ObjectId"), Ru.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = yu, yu++, uu.push("gBuffer_MeshBlendTag"), Ru.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [yu, uu, Ru]
      }
      _createRenderTargets() {
        const uu = this._scene.eS(),
          [Ru, yu, Eu] = this._assignRenderTargetIndices(),
          Ku = Math.min(uu.getCaps().maxDrawBuffers ?? 1, 8);
        if (uu.getCaps().drawBuffersExtension && Ru > Ku) throw new Error(`GeometryBufferRenderer: ${Ru} color attachments were requested, but this engine supports at most ${Ku}`);
        let mu = 0;
        uu._caps.textureFloat && uu._caps.textureFloatLinearFiltering ? mu = 1 : uu._caps.textureHalfFloat && uu._caps.textureHalfFloatLinearFiltering && (mu = 2);
        const Ju = this._getRenderTargetDimensions(),
          Nu = [],
          Xu = [],
          Vu = [];
        for (const Qu of Eu) Qu ? (Nu.push(Qu.textureType), Xu.push(Qu.textureFormat), Vu.push(Qu.samplingMode ?? 2)) : (Nu.push(mu), Xu.push(5), Vu.push(2));
        if (this._normalsAreUnsigned = 11 === Nu[FR.NORMAL_TEXTURE_TYPE] || 13 === Nu[FR.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new sR("gBuffer", Ju, Ru, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: Nu,
            formats: Xu,
            samplingModes: Vu,
            depthTextureFormat: this._depthFormat
          }, yu.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = Gu.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = Gu.h.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const ru = [!0],
          Bu = [!1],
          xu = [!0];
        for (let Qu = 1; Qu < Ru; ++Qu) ru.push(!0), xu.push(!1), Bu.push(!0);
        const Su = uu.buildTextureLayout(ru),
          pu = uu.buildTextureLayout(Bu),
          Tu = uu.buildTextureLayout(xu);
        this._multiRenderTarget.onClearObservable.add((uu => {
          const Ru = this.useSpecificClearForDepthTexture ? pu : Su;
          uu.clearAttachments(this._clearColor, Ru, !0, !0, !0), this.useSpecificClearForDepthTexture && uu.clearAttachments(this._clearDepthColor, Tu, !0, !1, !1), uu.bindAttachments(Su)
        })), this._resizeObserver = uu.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Wu = uu => {
          const Ru = uu.getRenderingMesh(),
            yu = uu.getEffectiveMesh(),
            Eu = this._scene,
            Ku = Eu.eS(),
            mu = uu.nS();
          if (!mu) return;
          if (yu._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[yu.uniqueId] && (this._previousTransformationMatrices[yu.uniqueId] = {
              Fr: Lu.d.Identity(),
              viewProjection: Eu.getTransformMatrix()
            }, Ru.skeleton)) {
            const uu = Ru.skeleton.getTransformMatrices(Ru);
            this._previousBonesTransformationMatrices[Ru.uniqueId] = this._copyBonesTransformationMatrices(uu, new Float32Array(uu.length))
          }
          const Ju = Ru._getInstancesRenderList(uu._id, !!uu.getReplacementMesh());
          if (Ju.mustReturn) return;
          const Nu = Ku.getCaps().instancedArrays && (null !== Ju.visibleInstances[uu._id] || Ru.hasThinInstances),
            Xu = yu.getWorldMatrix();
          if (this.isReady(uu, Nu)) {
            const Vu = uu._getDrawWrapper();
            if (!Vu) return;
            const ru = Vu.effect;
            let Bu;
            Ku.enableEffect(Vu), Nu || Ru._bind(uu, ru, mu.fillMode), this._useUbo ? ((0, au.C)(ru, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (ru.setMatrix("viewProjection", Eu.getTransformMatrix()), ru.setMatrix("view", Eu.getViewMatrix()), this._scene.bindEyePosition(ru, "vEyePosition"));
            if (Ru._instanceDataStorage.isFrozen || !mu.backFaceCulling && null === mu.sideOrientation) Bu = Ru._effectiveSideOrientation;
            else {
              const uu = yu._getWorldMatrixDeterminant();
              Bu = mu._getEffectiveOrientation(Ru), uu < 0 && (Bu = Bu === Qu.d.ClockWiseSideOrientation ? Qu.d.CounterClockWiseSideOrientation : Qu.d.ClockWiseSideOrientation)
            }
            if (mu._preBind(Vu, Bu), mu.needAlphaTestingForMesh(yu)) {
              const uu = mu.getAlphaTestTexture();
              uu && (ru.setTexture("diffuseSampler", uu), ru.setMatrix("diffuseMatrix", uu.getTextureMatrix()), ru.setFloat("alphaCutOff", mu.alphaCutOff ?? .4))
            }
            if ((mu.bumpTexture || mu.normalTexture || mu.geometryNormalTexture) && Eu.eS().getCaps().standardDerivatives && Ou.e.BumpTextureEnabled) {
              const uu = mu.bumpTexture || mu.normalTexture || mu.geometryNormalTexture;
              ru.setFloat3("vBumpInfos", uu.coordinatesIndex, 1 / uu.level, mu.parallaxScaleBias), ru.setMatrix("bumpMatrix", uu.getTextureMatrix()), ru.setTexture("bumpSampler", uu), ru.setFloat2("vTangentSpaceParams", mu.invertNormalMapX ? -1 : 1, mu.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === mu.getClassName()) null !== mu.metallicRoughnessTexture && (ru.setTexture("reflectivitySampler", mu.metallicRoughnessTexture), ru.setMatrix("reflectivityMatrix", mu.metallicRoughnessTexture.getTextureMatrix())), null !== mu.metallic && ru.setFloat("metallic", mu.metallic), null !== mu.roughness && ru.setFloat("glossiness", 1 - mu.roughness), null !== mu.baseTexture && (ru.setTexture("albedoSampler", mu.baseTexture), ru.setMatrix("albedoMatrix", mu.baseTexture.getTextureMatrix())), null !== mu.baseColor && ru.setColor3("albedoColor", mu.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === mu.getClassName()) null !== mu.specularGlossinessTexture ? (ru.setTexture("reflectivitySampler", mu.specularGlossinessTexture), ru.setMatrix("reflectivityMatrix", mu.specularGlossinessTexture.getTextureMatrix())) : null !== mu.specularColor && ru.setColor3("reflectivityColor", mu.specularColor), null !== mu.glossiness && ru.setFloat("glossiness", mu.glossiness);
            else if ("PBRMaterial" === mu.getClassName()) null !== mu.metallicTexture && (ru.setTexture("reflectivitySampler", mu.metallicTexture), ru.setMatrix("reflectivityMatrix", mu.metallicTexture.getTextureMatrix())), null !== mu.metallic && ru.setFloat("metallic", mu.metallic), null !== mu.roughness && ru.setFloat("glossiness", 1 - mu.roughness), null !== mu.roughness || null !== mu.metallic || null !== mu.metallicTexture ? (null !== mu.albedoTexture && (ru.setTexture("albedoSampler", mu.albedoTexture), ru.setMatrix("albedoMatrix", mu.albedoTexture.getTextureMatrix())), null !== mu.albedoColor && ru.setColor3("albedoColor", mu.albedoColor)) : (null !== mu.reflectivityTexture ? (ru.setTexture("reflectivitySampler", mu.reflectivityTexture), ru.setMatrix("reflectivityMatrix", mu.reflectivityTexture.getTextureMatrix())) : null !== mu.reflectivityColor && ru.setColor3("reflectivityColor", mu.reflectivityColor), null !== mu.microSurface && ru.setFloat("glossiness", mu.microSurface));
            else if ("StandardMaterial" === mu.getClassName()) null !== mu.specularTexture && (ru.setTexture("reflectivitySampler", mu.specularTexture), ru.setMatrix("reflectivityMatrix", mu.specularTexture.getTextureMatrix())), null !== mu.specularColor && ru.setColor3("reflectivityColor", mu.specularColor);
            else if ("OpenPBRMaterial" === mu.getClassName()) {
              const uu = mu;
              uu._useRoughnessFromMetallicTextureGreen && uu.baseMetalnessTexture ? (ru.setTexture("reflectivitySampler", uu.baseMetalnessTexture), ru.setMatrix("reflectivityMatrix", uu.baseMetalnessTexture.getTextureMatrix())) : uu.baseMetalnessTexture ? (ru.setTexture("metallicSampler", uu.baseMetalnessTexture), ru.setMatrix("metallicMatrix", uu.baseMetalnessTexture.getTextureMatrix())) : uu.specularRoughnessTexture && (ru.setTexture("roughnessSampler", uu.specularRoughnessTexture), ru.setMatrix("roughnessMatrix", uu.specularRoughnessTexture.getTextureMatrix())), ru.setFloat("metallic", uu.baseMetalness), ru.setFloat("glossiness", 1 - uu.specularRoughness), null !== uu.baseColorTexture && (ru.setTexture("albedoSampler", uu.baseColorTexture), ru.setMatrix("albedoMatrix", uu.baseColorTexture.getTextureMatrix())), null !== uu.baseColor && ru.setColor3("albedoColor", uu.baseColor)
            }
            if (this._enableIrradiance && Eu.environmentTexture) {
              const uu = Eu.environmentTexture,
                Ru = Eu.postProcessRenderPipelineManager.supportedPipelines.find((uu => "IBLShadowsRenderPipeline" === uu.getClassName()));
              if (Ru) {
                const uu = Ru._getAccumulatedTexture();
                uu && (ru.setTexture("iblShadowSampler", uu), ru.setFloat2("shadowTextureSize", uu.getSize().width, uu.getSize().height))
              }
              if (ru.setMatrix("reflectionMatrix", uu.getReflectionTextureMatrix()), ru.setFloat2("vReflectionInfos", uu.level * Eu.iblIntensity, 0), ru.setTexture("reflectionSampler", uu), uu.irradianceTexture && (ru.setTexture("irradianceSampler", uu.irradianceTexture), uu.irradianceTexture._dominantDirection && ru.setVector3("vReflectionDominantDirection", uu.irradianceTexture._dominantDirection)), uu.sphericalPolynomial) {
                const Ru = uu.sphericalPolynomial;
                if (Ru.preScaledHarmonics) {
                  const uu = Ru.preScaledHarmonics;
                  ru.setVector3("vSphericalL00", uu.l00), ru.setVector3("vSphericalL1_1", uu.l1_1), ru.setVector3("vSphericalL10", uu.l10), ru.setVector3("vSphericalL11", uu.l11), ru.setVector3("vSphericalL2_2", uu.l2_2), ru.setVector3("vSphericalL2_1", uu.l2_1), ru.setVector3("vSphericalL20", uu.l20), ru.setVector3("vSphericalL21", uu.l21), ru.setVector3("vSphericalL22", uu.l22)
                } else ru.setFloat3("vSphericalX", Ru.x.x, Ru.x.y, Ru.x.z), ru.setFloat3("vSphericalY", Ru.y.x, Ru.y.y, Ru.y.z), ru.setFloat3("vSphericalZ", Ru.z.x, Ru.z.y, Ru.z.z), ru.setFloat3("vSphericalXX_ZZ", Ru.xx.x - Ru.zz.x, Ru.xx.y - Ru.zz.y, Ru.xx.z - Ru.zz.z), ru.setFloat3("vSphericalYY_ZZ", Ru.yy.x - Ru.zz.x, Ru.yy.y - Ru.zz.y, Ru.yy.z - Ru.zz.z), ru.setFloat3("vSphericalZZ", Ru.zz.x, Ru.zz.y, Ru.zz.z), ru.setFloat3("vSphericalXY", Ru.xy.x, Ru.xy.y, Ru.xy.z), ru.setFloat3("vSphericalYZ", Ru.yz.x, Ru.yz.y, Ru.yz.z), ru.setFloat3("vSphericalZX", Ru.zx.x, Ru.zx.y, Ru.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === mu.getClassName()) {
                const uu = mu;
                ru.setFloat("vSubsurfaceWeight", uu.subsurfaceWeight), uu.subsurfaceWeightTexture && (ru.setTexture("subsurfaceWeightSampler", uu.subsurfaceWeightTexture), ru.setMatrix("subsurfaceWeightMatrix", uu.subsurfaceWeightTexture.getTextureMatrix())), ru.setFloat("vTransmissionWeight", uu.transmissionWeight), uu.transmissionWeightTexture && (ru.setTexture("transmissionWeightSampler", uu.transmissionWeightTexture), ru.setMatrix("transmissionWeightMatrix", uu.transmissionWeightTexture.getTextureMatrix())), ru.setFloat("vTransmissionScatterAnisotropy", uu.transmissionScatterAnisotropy), ru.setFloat("vSubsurfaceScatterAnisotropy", uu.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, VR.f)(ru, mu, this._scene), Ru.useBones && Ru.computeBonesUsingShaders && Ru.skeleton) {
              const uu = Ru.skeleton;
              if (uu.isUsingTextureForMatrices && ru.getUniformIndex("boneTextureInfo") > -1) {
                const yu = uu.getTransformMatrixTexture(Ru);
                ru.setTexture("boneSampler", yu), ru.setFloat2("boneTextureInfo", uu._textureWidth, uu._textureHeight)
              } else ru.setMatrices("mBones", Ru.skeleton.getTransformMatrices(Ru));
              (this._enableVelocity || this._enableVelocityLinear) && ru.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Ru.uniqueId])
            }
            if ((0, au.y)(Ru, ru), Ru.morphTargetManager && Ru.morphTargetManager.isUsingTextureForTargets && Ru.morphTargetManager._bind(ru), (this._enableVelocity || this._enableVelocityLinear) && (ru.setMatrix("previousWorld", this._previousTransformationMatrices[yu.uniqueId].Fr), ru.setMatrix("previousViewProjection", this._previousTransformationMatrices[yu.uniqueId].viewProjection)), this._enableObjectId) {
              let uu = Ru.uniqueId;
              if (this.objectIdProvider) uu = (0, xR.j)(Ru, this.objectIdProvider);
              else if (uu > 16777215) throw new Error(`Invalid geometry object ID ${uu} for mesh "${Ru.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              ru.setFloat("objectId", uu)
            }
            if (this._enableMeshBlendTag) {
              const uu = this.meshBlendTagProvider ? (0, xR.f)(Ru, this.meshBlendTagProvider) : Ru.meshBlendingTag;
              ru.setInt("meshBlendTag", uu)
            }
            Nu && Ru.hasThinInstances && ru.setMatrix("world", Xu), Ru._processRendering(yu, uu, ru, mu.fillMode, Ju, Nu, ((uu, Ru) => {
              uu || ru.setMatrix("world", Ru)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[yu.uniqueId].Fr = Xu.clone(), this._previousTransformationMatrices[yu.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Ru.skeleton && this._copyBonesTransformationMatrices(Ru.skeleton.getTransformMatrices(Ru), this._previousBonesTransformationMatrices[yu.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Ru, yu, Eu) => {
          if ((Eu || 0 === yu) && Ru.mC)
            for (let Ku = 0; Ku < Ru.mC.length; ++Ku) {
              const yu = Ru.mC[Ku],
                Eu = yu.nS(),
                Qu = yu.getRenderingMesh();
              if (!Eu) continue;
              const mu = Qu._getInstancesRenderList(yu._id, !!yu.getReplacementMesh()),
                Ju = uu.getCaps().instancedArrays && (null !== mu.visibleInstances[yu._id] || Qu.hasThinInstances);
              if (!this.isReady(yu, Ju)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Ru, yu, Eu, Ku) => {
          let Qu;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.eS().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Ku.length) {
            for (uu.setColorWrite(!1), Qu = 0; Qu < Ku.length; Qu++) Wu(Ku.data[Qu]);
            uu.setColorWrite(!0)
          }
          for (Qu = 0; Qu < Ru.length; Qu++) Wu(Ru.data[Qu]);
          for (uu.setDepthWrite(!1), Qu = 0; Qu < yu.length; Qu++) Wu(yu.data[Qu]);
          if (this.renderTransparentMeshes)
            for (Qu = 0; Qu < Eu.length; Qu++) Wu(Eu.data[Qu]);
          uu.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const uu = this._scene.eS();
        return {
          width: Math.max(1, Math.floor(uu.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(uu.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(uu, Ru) {
        for (let yu = 0; yu < uu.length; yu++) Ru[yu] = uu[yu];
        return Ru
      }
    }
    FR.ForceGLSL = !1, FR.DEPTH_TEXTURE_TYPE = 0, FR.NORMAL_TEXTURE_TYPE = 1, FR.POSITION_TEXTURE_TYPE = 2, FR.VELOCITY_TEXTURE_TYPE = 3, FR.REFLECTIVITY_TEXTURE_TYPE = 4, FR.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, FR.VELOCITY_LINEAR_TEXTURE_TYPE = 6, FR.IRRADIANCE_TEXTURE_TYPE = 7, FR.OBJECT_ID_TEXTURE_TYPE = 8, FR.MESH_BLEND_TAG_TEXTURE_TYPE = 9, FR._SceneComponentInitialization = uu => {
      throw (0, WR.k)("GeometryBufferRendererSceneComponent")
    };
    var wR = yu(36871);
    const ZR = {
      effect: null,
      subMesh: null
    };

    function hR(uu) {
      if ("number" === typeof uu) return 1;
      if (uu instanceof Lu.n) return 2;
      if (uu instanceof Lu.p || uu instanceof iu.d) return 3;
      if (uu instanceof Lu.r || uu instanceof iu.h) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class PR {
      populateVectorFromLinkedProperties(uu) {
        const Ru = hR(uu);
        for (const yu in this.linkedProperties) {
          const uu = this.linkedProperties[yu],
            Eu = uu.numComponents;
          if (Ru < Eu || uu.targetUniformComponentOffset > Ru - Eu) return void(1 == Eu ? Mu.e.Error(`Float property ${uu.name} has an offset that is too large.`) : Mu.e.Error(`Vector${Eu} property ${uu.name} won't fit in Vector${Ru} or has an offset that is too large.`));
          "number" === typeof uu.value ? PR._tmpArray[uu.targetUniformComponentOffset] = uu.value : uu.value.toArray(PR._tmpArray, uu.targetUniformComponentOffset)
        }
        uu.Tyu(PR._tmpArray)
      }
      constructor(uu, Ru) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = uu, this.numComponents = Ru
      }
    }
    PR._tmpArray = [0, 0, 0, 0];
    class iR {
      constructor(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Qu = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = uu, this.targetUniformName = yu, this.defaultValue = Ru, this.value = Ru, this.targetUniformComponentNum = Eu, this.targetUniformComponentOffset = Ku, this.requiredDefine = Qu
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : hR(this.defaultValue)
      }
    }
    class YR {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(uu, Ru, yu) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = uu, this.samplerPrefix = Ru, this.textureDefine = yu
      }
    }
    class oR extends((0, pR.d)((0, SR.c)(Fu.e))) {}
    class qR extends(function(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(oR)) {}
    class OR extends((0, Yu.f)(qR)) {
      constructor(uu) {
        super(uu), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class vR extends((0, TR.c)(qu.e)) {}
    let aR = (() => {
        var uu, Ru, Eu, Ku, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Uu, nu, su, tu, cu, Fu, wu, Zu, hu, Yu, qu, fu, uR, RR, yR, ER, KR, QR, mR, JR, NR, XR, SR, pR, TR, WR, jR, HR, dR, bR, CR, AR, DR, MR, IR, GR, UR, nR, sR, tR, lR, gR, cR, LR, zR, wR, hR, oR, qR, aR, fR, uy, Ry, yy, Ey, Ky, Qy, my, Jy, Ny, Xy, Vy, ry, By, xy, Sy, py, Ty, Wy, jy, Hy, dy, by, Cy, ky, ey, Ay, Dy, My, Iy;
        let Gy, Uy, ny, sy, ty, ly, gy, cy, Ly, zy, Fy, wy, Zy, hy, Py, iy, Yy, oy, qy, Oy, vy, ay, fy, uE, RE, yE, EE, KE, QE, mE, JE, NE, XE, VE, rE, BE, xE, SE, pE, TE, WE, jE, HE, dE, bE, CE, kE, eE, AE, DE, ME, IE, GE, UE, nE, sE, tE, lE, gE, cE, LE, zE, FE, wE, ZE, hE, PE, iE, YE, oE, qE, OE, vE, aE, fE, uK, RK, yK, EK, KK, QK, mK, JK, NK, XK, VK, rK, BK, xK, SK, pK, TK, WK, jK, HK, dK, bK, CK, kK, eK, AK, DK, MK, IK, GK, UK = vR,
          nK = [],
          sK = [],
          tK = [],
          lK = [],
          gK = [],
          cK = [],
          LK = [],
          zK = [],
          FK = [],
          wK = [],
          ZK = [],
          hK = [],
          PK = [],
          iK = [],
          YK = [],
          oK = [],
          qK = [],
          OK = [],
          vK = [],
          aK = [],
          fK = [],
          uQ = [],
          RQ = [],
          yQ = [],
          EQ = [],
          KQ = [],
          QQ = [],
          mQ = [],
          JQ = [],
          NQ = [],
          XQ = [],
          VQ = [],
          rQ = [],
          BQ = [],
          xQ = [],
          SQ = [],
          pQ = [],
          TQ = [],
          WQ = [],
          jQ = [],
          HQ = [],
          dQ = [],
          bQ = [],
          CQ = [],
          kQ = [],
          eQ = [],
          AQ = [],
          DQ = [],
          MQ = [],
          IQ = [],
          GQ = [],
          UQ = [],
          nQ = [],
          sQ = [],
          tQ = [],
          lQ = [],
          gQ = [],
          cQ = [],
          LQ = [],
          zQ = [],
          FQ = [],
          wQ = [],
          ZQ = [],
          hQ = [],
          PQ = [],
          iQ = [],
          YQ = [],
          oQ = [],
          qQ = [],
          OQ = [],
          vQ = [],
          aQ = [],
          fQ = [],
          um = [],
          Rm = [],
          ym = [],
          Em = [],
          Km = [],
          Qm = [],
          mm = [],
          Jm = [],
          Nm = [],
          Xm = [],
          Vm = [],
          rm = [],
          Bm = [],
          xm = [],
          Sm = [],
          pm = [],
          Tm = [],
          Wm = [],
          jm = [],
          Hm = [],
          dm = [],
          bm = [],
          Cm = [],
          km = [],
          em = [],
          Am = [],
          Dm = [],
          Mm = [],
          Im = [],
          Gm = [],
          Um = [],
          nm = [],
          sm = [],
          tm = [],
          lm = [],
          gm = [],
          cm = [],
          Lm = [],
          zm = [],
          Fm = [],
          wm = [],
          Zm = [],
          hm = [],
          Pm = [],
          im = [],
          Ym = [],
          om = [],
          qm = [],
          Om = [],
          am = [],
          fm = [],
          uJ = [],
          RJ = [],
          yJ = [],
          EJ = [],
          KJ = [],
          QJ = [],
          mJ = [],
          JJ = [],
          NJ = [],
          XJ = [],
          VJ = [],
          rJ = [],
          BJ = [],
          xJ = [],
          SJ = [],
          pJ = [],
          TJ = [],
          WJ = [],
          jJ = [],
          HJ = [],
          dJ = [],
          bJ = [],
          CJ = [],
          kJ = [],
          eJ = [],
          AJ = [],
          DJ = [],
          MJ = [],
          IJ = [],
          GJ = [],
          UJ = [],
          nJ = [],
          sJ = [],
          tJ = [],
          lJ = [],
          gJ = [],
          cJ = [],
          LJ = [],
          zJ = [],
          FJ = [],
          wJ = [],
          ZJ = [],
          hJ = [],
          PJ = [],
          iJ = [],
          YJ = [],
          oJ = [],
          qJ = [],
          OJ = [],
          vJ = [],
          aJ = [],
          fJ = [],
          uN = [],
          RN = [],
          yN = [],
          EN = [],
          KN = [],
          QN = [],
          mN = [],
          JN = [],
          NN = [],
          XN = [],
          VN = [],
          rN = [],
          BN = [],
          xN = [],
          SN = [],
          pN = [],
          TN = [],
          WN = [],
          jN = [],
          HN = [],
          dN = [],
          bN = [],
          CN = [],
          kN = [],
          eN = [],
          AN = [],
          DN = [],
          MN = [],
          IN = [];
        return uu = class extends UK {
          get baseWeight() {
            return (0, Au.e)(this, Ru, "f")
          }
          set baseWeight(uu) {
            (0, Au.f)(this, Ru, uu, "f")
          }
          get baseWeightTexture() {
            return (0, Au.e)(this, Eu, "f")
          }
          set baseWeightTexture(uu) {
            (0, Au.f)(this, Eu, uu, "f")
          }
          get baseColor() {
            return (0, Au.e)(this, Ku, "f")
          }
          set baseColor(uu) {
            (0, Au.f)(this, Ku, uu, "f")
          }
          get baseColorTexture() {
            return (0, Au.e)(this, mu, "f")
          }
          set baseColorTexture(uu) {
            (0, Au.f)(this, mu, uu, "f")
          }
          get baseDiffuseRoughness() {
            return (0, Au.e)(this, Ju, "f")
          }
          set baseDiffuseRoughness(uu) {
            (0, Au.f)(this, Ju, uu, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, Au.e)(this, Nu, "f")
          }
          set baseDiffuseRoughnessTexture(uu) {
            (0, Au.f)(this, Nu, uu, "f")
          }
          get baseMetalness() {
            return (0, Au.e)(this, Xu, "f")
          }
          set baseMetalness(uu) {
            (0, Au.f)(this, Xu, uu, "f")
          }
          get baseMetalnessTexture() {
            return (0, Au.e)(this, Vu, "f")
          }
          set baseMetalnessTexture(uu) {
            (0, Au.f)(this, Vu, uu, "f")
          }
          get specularWeight() {
            return (0, Au.e)(this, ru, "f")
          }
          set specularWeight(uu) {
            (0, Au.f)(this, ru, uu, "f")
          }
          get specularWeightTexture() {
            return (0, Au.e)(this, Bu, "f")
          }
          set specularWeightTexture(uu) {
            (0, Au.f)(this, Bu, uu, "f")
          }
          get specularColor() {
            return (0, Au.e)(this, xu, "f")
          }
          set specularColor(uu) {
            (0, Au.f)(this, xu, uu, "f")
          }
          get specularColorTexture() {
            return (0, Au.e)(this, Su, "f")
          }
          set specularColorTexture(uu) {
            (0, Au.f)(this, Su, uu, "f")
          }
          get specularRoughness() {
            return (0, Au.e)(this, pu, "f")
          }
          set specularRoughness(uu) {
            (0, Au.f)(this, pu, uu, "f")
          }
          get specularRoughnessTexture() {
            return (0, Au.e)(this, Tu, "f")
          }
          set specularRoughnessTexture(uu) {
            (0, Au.f)(this, Tu, uu, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, Au.e)(this, Wu, "f")
          }
          set specularRoughnessAnisotropy(uu) {
            (0, Au.f)(this, Wu, uu, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, Au.e)(this, ju, "f")
          }
          set specularRoughnessAnisotropyTexture(uu) {
            (0, Au.f)(this, ju, uu, "f")
          }
          get specularIor() {
            return (0, Au.e)(this, Hu, "f")
          }
          set specularIor(uu) {
            (0, Au.f)(this, Hu, uu, "f")
          }
          get transmissionWeight() {
            return (0, Au.e)(this, du, "f")
          }
          set transmissionWeight(uu) {
            (0, Au.f)(this, du, uu, "f")
          }
          get transmissionWeightTexture() {
            return (0, Au.e)(this, bu, "f")
          }
          set transmissionWeightTexture(uu) {
            (0, Au.f)(this, bu, uu, "f")
          }
          get transmissionColor() {
            return (0, Au.e)(this, Cu, "f")
          }
          set transmissionColor(uu) {
            (0, Au.f)(this, Cu, uu, "f")
          }
          get transmissionColorTexture() {
            return (0, Au.e)(this, ku, "f")
          }
          set transmissionColorTexture(uu) {
            (0, Au.f)(this, ku, uu, "f")
          }
          get transmissionDepth() {
            return (0, Au.e)(this, eu, "f")
          }
          set transmissionDepth(uu) {
            (0, Au.f)(this, eu, uu, "f")
          }
          get transmissionDepthTexture() {
            return (0, Au.e)(this, Uu, "f")
          }
          set transmissionDepthTexture(uu) {
            (0, Au.f)(this, Uu, uu, "f")
          }
          get transmissionScatter() {
            return (0, Au.e)(this, nu, "f")
          }
          set transmissionScatter(uu) {
            (0, Au.f)(this, nu, uu, "f")
          }
          get transmissionScatterTexture() {
            return (0, Au.e)(this, su, "f")
          }
          set transmissionScatterTexture(uu) {
            (0, Au.f)(this, su, uu, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, Au.e)(this, tu, "f")
          }
          set transmissionScatterAnisotropy(uu) {
            (0, Au.f)(this, tu, uu, "f")
          }
          get transmissionDispersionScale() {
            return (0, Au.e)(this, cu, "f")
          }
          set transmissionDispersionScale(uu) {
            (0, Au.f)(this, cu, uu, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, Au.e)(this, Fu, "f")
          }
          set transmissionDispersionScaleTexture(uu) {
            (0, Au.f)(this, Fu, uu, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, Au.e)(this, wu, "f")
          }
          set transmissionDispersionAbbeNumber(uu) {
            (0, Au.f)(this, wu, uu, "f")
          }
          get subsurfaceWeight() {
            return (0, Au.e)(this, Zu, "f")
          }
          set subsurfaceWeight(uu) {
            (0, Au.f)(this, Zu, uu, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, Au.e)(this, hu, "f")
          }
          set subsurfaceWeightTexture(uu) {
            (0, Au.f)(this, hu, uu, "f")
          }
          get subsurfaceColor() {
            return (0, Au.e)(this, Yu, "f")
          }
          set subsurfaceColor(uu) {
            (0, Au.f)(this, Yu, uu, "f")
          }
          get subsurfaceColorTexture() {
            return (0, Au.e)(this, qu, "f")
          }
          set subsurfaceColorTexture(uu) {
            (0, Au.f)(this, qu, uu, "f")
          }
          get subsurfaceRadius() {
            return (0, Au.e)(this, fu, "f")
          }
          set subsurfaceRadius(uu) {
            (0, Au.f)(this, fu, uu, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, Au.e)(this, uR, "f")
          }
          set subsurfaceRadiusScale(uu) {
            (0, Au.f)(this, uR, uu, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, Au.e)(this, RR, "f")
          }
          set subsurfaceRadiusScaleTexture(uu) {
            (0, Au.f)(this, RR, uu, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, Au.e)(this, yR, "f")
          }
          set subsurfaceScatterAnisotropy(uu) {
            (0, Au.f)(this, yR, uu, "f")
          }
          get coatWeight() {
            return (0, Au.e)(this, ER, "f")
          }
          set coatWeight(uu) {
            (0, Au.f)(this, ER, uu, "f")
          }
          get coatWeightTexture() {
            return (0, Au.e)(this, KR, "f")
          }
          set coatWeightTexture(uu) {
            (0, Au.f)(this, KR, uu, "f")
          }
          get coatColor() {
            return (0, Au.e)(this, QR, "f")
          }
          set coatColor(uu) {
            (0, Au.f)(this, QR, uu, "f")
          }
          get coatColorTexture() {
            return (0, Au.e)(this, mR, "f")
          }
          set coatColorTexture(uu) {
            (0, Au.f)(this, mR, uu, "f")
          }
          get coatRoughness() {
            return (0, Au.e)(this, JR, "f")
          }
          set coatRoughness(uu) {
            (0, Au.f)(this, JR, uu, "f")
          }
          get coatRoughnessTexture() {
            return (0, Au.e)(this, NR, "f")
          }
          set coatRoughnessTexture(uu) {
            (0, Au.f)(this, NR, uu, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, Au.e)(this, XR, "f")
          }
          set coatRoughnessAnisotropy(uu) {
            (0, Au.f)(this, XR, uu, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, Au.e)(this, SR, "f")
          }
          set coatRoughnessAnisotropyTexture(uu) {
            (0, Au.f)(this, SR, uu, "f")
          }
          get coatIor() {
            return (0, Au.e)(this, pR, "f")
          }
          set coatIor(uu) {
            (0, Au.f)(this, pR, uu, "f")
          }
          get coatDarkening() {
            return (0, Au.e)(this, TR, "f")
          }
          set coatDarkening(uu) {
            (0, Au.f)(this, TR, uu, "f")
          }
          get coatDarkeningTexture() {
            return (0, Au.e)(this, WR, "f")
          }
          set coatDarkeningTexture(uu) {
            (0, Au.f)(this, WR, uu, "f")
          }
          get fuzzWeight() {
            return (0, Au.e)(this, jR, "f")
          }
          set fuzzWeight(uu) {
            (0, Au.f)(this, jR, uu, "f")
          }
          get fuzzWeightTexture() {
            return (0, Au.e)(this, HR, "f")
          }
          set fuzzWeightTexture(uu) {
            (0, Au.f)(this, HR, uu, "f")
          }
          get fuzzColor() {
            return (0, Au.e)(this, dR, "f")
          }
          set fuzzColor(uu) {
            (0, Au.f)(this, dR, uu, "f")
          }
          get fuzzColorTexture() {
            return (0, Au.e)(this, bR, "f")
          }
          set fuzzColorTexture(uu) {
            (0, Au.f)(this, bR, uu, "f")
          }
          get fuzzRoughness() {
            return (0, Au.e)(this, CR, "f")
          }
          set fuzzRoughness(uu) {
            (0, Au.f)(this, CR, uu, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, Au.e)(this, AR, "f")
          }
          set fuzzRoughnessTexture(uu) {
            (0, Au.f)(this, AR, uu, "f")
          }
          get geometryThinWalled() {
            return (0, Au.e)(this, DR, "f")
          }
          set geometryThinWalled(uu) {
            (0, Au.f)(this, DR, uu, "f")
          }
          get geometryNormalTexture() {
            return (0, Au.e)(this, MR, "f")
          }
          set geometryNormalTexture(uu) {
            (0, Au.f)(this, MR, uu, "f")
          }
          get geometryTangent() {
            return (0, Au.e)(this, IR, "f")
          }
          set geometryTangent(uu) {
            (0, Au.f)(this, IR, uu, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(uu) {
            this.geometryTangent = new Lu.n(Math.cos(uu), Math.sin(uu))
          }
          get geometryTangentTexture() {
            return (0, Au.e)(this, GR, "f")
          }
          set geometryTangentTexture(uu) {
            (0, Au.f)(this, GR, uu, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, Au.e)(this, UR, "f")
          }
          set geometryCoatNormalTexture(uu) {
            (0, Au.f)(this, UR, uu, "f")
          }
          get geometryCoatTangent() {
            return (0, Au.e)(this, nR, "f")
          }
          set geometryCoatTangent(uu) {
            (0, Au.f)(this, nR, uu, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(uu) {
            this.geometryCoatTangent = new Lu.n(Math.cos(uu), Math.sin(uu))
          }
          get geometryCoatTangentTexture() {
            return (0, Au.e)(this, sR, "f")
          }
          set geometryCoatTangentTexture(uu) {
            (0, Au.f)(this, sR, uu, "f")
          }
          get geometryOpacity() {
            return (0, Au.e)(this, tR, "f")
          }
          set geometryOpacity(uu) {
            (0, Au.f)(this, tR, uu, "f")
          }
          get geometryOpacityTexture() {
            return (0, Au.e)(this, lR, "f")
          }
          set geometryOpacityTexture(uu) {
            (0, Au.f)(this, lR, uu, "f")
          }
          get geometryThickness() {
            return (0, Au.e)(this, gR, "f")
          }
          set geometryThickness(uu) {
            (0, Au.f)(this, gR, uu, "f")
          }
          get geometryThicknessTexture() {
            return (0, Au.e)(this, cR, "f")
          }
          set geometryThicknessTexture(uu) {
            (0, Au.f)(this, cR, uu, "f")
          }
          get emissionLuminance() {
            return (0, Au.e)(this, LR, "f")
          }
          set emissionLuminance(uu) {
            (0, Au.f)(this, LR, uu, "f")
          }
          get emissionColor() {
            return (0, Au.e)(this, zR, "f")
          }
          set emissionColor(uu) {
            (0, Au.f)(this, zR, uu, "f")
          }
          get emissionColorTexture() {
            return (0, Au.e)(this, wR, "f")
          }
          set emissionColorTexture(uu) {
            (0, Au.f)(this, wR, uu, "f")
          }
          get thinFilmWeight() {
            return (0, Au.e)(this, hR, "f")
          }
          set thinFilmWeight(uu) {
            (0, Au.f)(this, hR, uu, "f")
          }
          get thinFilmWeightTexture() {
            return (0, Au.e)(this, oR, "f")
          }
          set thinFilmWeightTexture(uu) {
            (0, Au.f)(this, oR, uu, "f")
          }
          get thinFilmThickness() {
            return (0, Au.e)(this, qR, "f")
          }
          set thinFilmThickness(uu) {
            (0, Au.f)(this, qR, uu, "f")
          }
          get thinFilmThicknessMin() {
            return (0, Au.e)(this, aR, "f")
          }
          set thinFilmThicknessMin(uu) {
            (0, Au.f)(this, aR, uu, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, Au.e)(this, fR, "f")
          }
          set thinFilmThicknessTexture(uu) {
            (0, Au.f)(this, fR, uu, "f")
          }
          get thinFilmIor() {
            return (0, Au.e)(this, uy, "f")
          }
          set thinFilmIor(uu) {
            (0, Au.f)(this, uy, uu, "f")
          }
          get ambientOcclusionTexture() {
            return (0, Au.e)(this, Ry, "f")
          }
          set ambientOcclusionTexture(uu) {
            (0, Au.f)(this, Ry, uu, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(uu) {
            this._sssQuality !== uu && (this._sssQuality = uu, this.Eyu(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(uu) {
            this._sssIrradianceTexture !== uu && (this._sssIrradianceTexture = uu, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(uu) {
            this._sssDepthTexture !== uu && (this._sssDepthTexture = uu, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, Au.e)(this, yy, "f")
          }
          set directIntensity(uu) {
            (0, Au.f)(this, yy, uu, "f")
          }
          get environmentIntensity() {
            return (0, Au.e)(this, Ey, "f")
          }
          set environmentIntensity(uu) {
            (0, Au.f)(this, Ey, uu, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, Au.e)(this, Ky, "f")
          }
          set useSpecularWeightFromTextureAlpha(uu) {
            (0, Au.f)(this, Ky, uu, "f")
          }
          get forceAlphaTest() {
            return (0, Au.e)(this, Qy, "f")
          }
          set forceAlphaTest(uu) {
            (0, Au.f)(this, Qy, uu, "f")
          }
          get alphaCutOff() {
            return (0, Au.e)(this, my, "f")
          }
          set alphaCutOff(uu) {
            (0, Au.f)(this, my, uu, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, Au.e)(this, Jy, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(uu) {
            (0, Au.f)(this, Jy, uu, "f")
          }
          get useAmbientInGrayScale() {
            return (0, Au.e)(this, Ny, "f")
          }
          set useAmbientInGrayScale(uu) {
            (0, Au.f)(this, Ny, uu, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(iu.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Qu.d.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(uu) {
            uu !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? Qu.d.LIGHTFALLOFF_PHYSICAL : Qu.d.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Qu.d.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(uu) {
            uu !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? Qu.d.LIGHTFALLOFF_GLTF : Qu.d.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, Au.e)(this, Xy, "f")
          }
          set useObjectSpaceNormalMap(uu) {
            (0, Au.f)(this, Xy, uu, "f")
          }
          get useParallax() {
            return (0, Au.e)(this, Vy, "f")
          }
          set useParallax(uu) {
            (0, Au.f)(this, Vy, uu, "f")
          }
          get useParallaxOcclusion() {
            return (0, Au.e)(this, ry, "f")
          }
          set useParallaxOcclusion(uu) {
            (0, Au.f)(this, ry, uu, "f")
          }
          get parallaxScaleBias() {
            return (0, Au.e)(this, By, "f")
          }
          set parallaxScaleBias(uu) {
            (0, Au.f)(this, By, uu, "f")
          }
          get disableLighting() {
            return (0, Au.e)(this, xy, "f")
          }
          set disableLighting(uu) {
            (0, Au.f)(this, xy, uu, "f")
          }
          get forceIrradianceInFragment() {
            return (0, Au.e)(this, Sy, "f")
          }
          set forceIrradianceInFragment(uu) {
            (0, Au.f)(this, Sy, uu, "f")
          }
          get maxSimultaneousLights() {
            return (0, Au.e)(this, py, "f")
          }
          set maxSimultaneousLights(uu) {
            (0, Au.f)(this, py, uu, "f")
          }
          get invertNormalMapX() {
            return (0, Au.e)(this, Ty, "f")
          }
          set invertNormalMapX(uu) {
            (0, Au.f)(this, Ty, uu, "f")
          }
          get invertNormalMapY() {
            return (0, Au.e)(this, Wy, "f")
          }
          set invertNormalMapY(uu) {
            (0, Au.f)(this, Wy, uu, "f")
          }
          get twoSidedLighting() {
            return (0, Au.e)(this, jy, "f")
          }
          set twoSidedLighting(uu) {
            (0, Au.f)(this, jy, uu, "f")
          }
          get useAlphaFresnel() {
            return (0, Au.e)(this, Hy, "f")
          }
          set useAlphaFresnel(uu) {
            (0, Au.f)(this, Hy, uu, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, Au.e)(this, dy, "f")
          }
          set useLinearAlphaFresnel(uu) {
            (0, Au.f)(this, dy, uu, "f")
          }
          get environmentBRDFTexture() {
            return (0, Au.e)(this, by, "f")
          }
          set environmentBRDFTexture(uu) {
            (0, Au.f)(this, by, uu, "f")
          }
          get forceNormalForward() {
            return (0, Au.e)(this, Cy, "f")
          }
          set forceNormalForward(uu) {
            (0, Au.f)(this, Cy, uu, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, Au.e)(this, ky, "f")
          }
          set enableSpecularAntiAliasing(uu) {
            (0, Au.f)(this, ky, uu, "f")
          }
          get useHorizonOcclusion() {
            return (0, Au.e)(this, ey, "f")
          }
          set useHorizonOcclusion(uu) {
            (0, Au.f)(this, ey, uu, "f")
          }
          get useRadianceOcclusion() {
            return (0, Au.e)(this, Ay, "f")
          }
          set useRadianceOcclusion(uu) {
            (0, Au.f)(this, Ay, uu, "f")
          }
          get unlit() {
            return (0, Au.e)(this, Dy, "f")
          }
          set unlit(uu) {
            (0, Au.f)(this, Dy, uu, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Au.e)(this, My, "f")
          }
          set applyDecalMapAfterDetailMap(uu) {
            (0, Au.f)(this, My, uu, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(uu) {
            this._backgroundRefractionTexture = uu, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(uu) {
            this._refractionHighQualityBlur !== uu && (this._refractionHighQualityBlur = uu, this.Eyu(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(uu) {
            this._realTimeFiltering = uu, this.Eyu(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(uu) {
            this._realTimeFilteringQuality = uu, this.Eyu(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(uu) {
            this._fuzzSampleNumber = uu, this.Eyu(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, Au.e)(this, Iy, "f")
          }
          set debugMode(uu) {
            (0, Au.f)(this, Iy, uu, "f")
          }
          constructor(yu, Du) {
            super(yu, Du, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), Ru.set(this, ((0, Au.l)(this, nK), (0, Au.l)(this, sK, void 0))), this._baseWeight = ((0, Au.l)(this, tK), new iR("base_weight", 1, "vBaseWeight", 1)), Eu.set(this, (0, Au.l)(this, lK, void 0)), this._baseWeightTexture = ((0, Au.l)(this, gK), new YR("base_weight", "baseWeight", "BASE_WEIGHT")), Ku.set(this, (0, Au.l)(this, cK, void 0)), this._baseColor = ((0, Au.l)(this, LK), new iR("base_color", iu.d.White(), "vBaseColor", 4)), mu.set(this, (0, Au.l)(this, zK, void 0)), this._baseColorTexture = ((0, Au.l)(this, FK), new YR("base_color", "baseColor", "BASE_COLOR")), Ju.set(this, (0, Au.l)(this, wK, void 0)), this._baseDiffuseRoughness = ((0, Au.l)(this, ZK), new iR("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), Nu.set(this, (0, Au.l)(this, hK, void 0)), this._baseDiffuseRoughnessTexture = ((0, Au.l)(this, PK), new YR("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), Xu.set(this, (0, Au.l)(this, iK, void 0)), this._baseMetalness = ((0, Au.l)(this, YK), new iR("base_metalness", 0, "vReflectanceInfo", 4, 0)), Vu.set(this, (0, Au.l)(this, oK, void 0)), this._baseMetalnessTexture = ((0, Au.l)(this, qK), new YR("base_metalness", "baseMetalness", "BASE_METALNESS")), ru.set(this, (0, Au.l)(this, OK, void 0)), this._specularWeight = ((0, Au.l)(this, vK), new iR("specular_weight", 1, "vReflectanceInfo", 4, 3)), Bu.set(this, (0, Au.l)(this, aK, void 0)), this._specularWeightTexture = ((0, Au.l)(this, fK), new YR("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), xu.set(this, (0, Au.l)(this, uQ, void 0)), this._specularColor = ((0, Au.l)(this, RQ), new iR("specular_color", iu.d.White(), "vSpecularColor", 4)), Su.set(this, (0, Au.l)(this, yQ, void 0)), this._specularColorTexture = ((0, Au.l)(this, EQ), new YR("specular_color", "specularColor", "SPECULAR_COLOR")), pu.set(this, (0, Au.l)(this, KQ, void 0)), this._specularRoughness = ((0, Au.l)(this, QQ), new iR("specular_roughness", .3, "vReflectanceInfo", 4, 1)), Tu.set(this, (0, Au.l)(this, mQ, void 0)), this._specularRoughnessTexture = ((0, Au.l)(this, JQ), new YR("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Wu.set(this, (0, Au.l)(this, NQ, void 0)), this._specularRoughnessAnisotropy = ((0, Au.l)(this, XQ), new iR("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), ju.set(this, (0, Au.l)(this, VQ, void 0)), this._specularRoughnessAnisotropyTexture = ((0, Au.l)(this, rQ), new YR("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Hu.set(this, (0, Au.l)(this, BQ, void 0)), this._specularIor = ((0, Au.l)(this, xQ), new iR("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), du.set(this, (0, Au.l)(this, SQ, void 0)), this._transmissionWeight = ((0, Au.l)(this, pQ), new iR("transmission_weight", 0, "vTransmissionWeight", 1)), bu.set(this, (0, Au.l)(this, TQ, void 0)), this._transmissionWeightTexture = ((0, Au.l)(this, WQ), new YR("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), Cu.set(this, (0, Au.l)(this, jQ, void 0)), this._transmissionColor = ((0, Au.l)(this, HQ), new iR("transmission_color", iu.d.White(), "vTransmissionColor", 3, 0)), ku.set(this, (0, Au.l)(this, dQ, void 0)), this._transmissionColorTexture = ((0, Au.l)(this, bQ), new YR("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), eu.set(this, (0, Au.l)(this, CQ, void 0)), this._transmissionDepth = ((0, Au.l)(this, kQ), new iR("transmission_depth", 0, "vTransmissionDepth", 1, 0)), Uu.set(this, (0, Au.l)(this, eQ, void 0)), this._transmissionDepthTexture = ((0, Au.l)(this, AQ), new YR("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), nu.set(this, (0, Au.l)(this, DQ, void 0)), this._transmissionScatter = ((0, Au.l)(this, MQ), new iR("transmission_scatter", iu.d.Black(), "vTransmissionScatter", 3, 0)), su.set(this, (0, Au.l)(this, IQ, void 0)), this._transmissionScatterTexture = ((0, Au.l)(this, GQ), new YR("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), tu.set(this, (0, Au.l)(this, UQ, void 0)), this._transmissionScatterAnisotropy = ((0, Au.l)(this, nQ), new iR("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), cu.set(this, (0, Au.l)(this, sQ, void 0)), this._transmissionDispersionScale = ((0, Au.l)(this, tQ), new iR("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Fu.set(this, (0, Au.l)(this, lQ, void 0)), this._transmissionDispersionScaleTexture = ((0, Au.l)(this, gQ), new YR("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), wu.set(this, (0, Au.l)(this, cQ, void 0)), this._transmissionDispersionAbbeNumber = ((0, Au.l)(this, LQ), new iR("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Zu.set(this, (0, Au.l)(this, zQ, void 0)), this._subsurfaceWeight = ((0, Au.l)(this, FQ), new iR("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), hu.set(this, (0, Au.l)(this, wQ, void 0)), this._subsurfaceWeightTexture = ((0, Au.l)(this, ZQ), new YR("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Yu.set(this, (0, Au.l)(this, hQ, void 0)), this._subsurfaceColor = ((0, Au.l)(this, PQ), new iR("subsurface_color", new iu.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), qu.set(this, (0, Au.l)(this, iQ, void 0)), this._subsurfaceColorTexture = ((0, Au.l)(this, YQ), new YR("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), fu.set(this, (0, Au.l)(this, oQ, void 0)), this._subsurfaceRadius = ((0, Au.l)(this, qQ), new iR("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), uR.set(this, (0, Au.l)(this, OQ, void 0)), this._subsurfaceRadiusScale = ((0, Au.l)(this, vQ), new iR("subsurface_radius_scale", new iu.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), RR.set(this, (0, Au.l)(this, aQ, void 0)), this._subsurfaceRadiusScaleTexture = ((0, Au.l)(this, fQ), new YR("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), yR.set(this, (0, Au.l)(this, um, void 0)), this._subsurfaceScatterAnisotropy = ((0, Au.l)(this, Rm), new iR("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), ER.set(this, (0, Au.l)(this, ym, void 0)), this._coatWeight = ((0, Au.l)(this, Em), new iR("coat_weight", 0, "vCoatWeight", 1, 0)), KR.set(this, (0, Au.l)(this, Km, void 0)), this._coatWeightTexture = ((0, Au.l)(this, Qm), new YR("coat_weight", "coatWeight", "COAT_WEIGHT")), QR.set(this, (0, Au.l)(this, mm, void 0)), this._coatColor = ((0, Au.l)(this, Jm), new iR("coat_color", iu.d.White(), "vCoatColor", 3, 0)), mR.set(this, (0, Au.l)(this, Nm, void 0)), this._coatColorTexture = ((0, Au.l)(this, Xm), new YR("coat_color", "coatColor", "COAT_COLOR")), JR.set(this, (0, Au.l)(this, Vm, void 0)), this._coatRoughness = ((0, Au.l)(this, rm), new iR("coat_roughness", 0, "vCoatRoughness", 1, 0)), NR.set(this, (0, Au.l)(this, Bm, void 0)), this._coatRoughnessTexture = ((0, Au.l)(this, xm), new YR("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), XR.set(this, (0, Au.l)(this, Sm, void 0)), this._coatRoughnessAnisotropy = ((0, Au.l)(this, pm), new iR("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), SR.set(this, (0, Au.l)(this, Tm, void 0)), this._coatRoughnessAnisotropyTexture = ((0, Au.l)(this, Wm), new YR("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), pR.set(this, (0, Au.l)(this, jm, void 0)), this._coatIor = ((0, Au.l)(this, Hm), new iR("coat_ior", 1.5, "vCoatIor", 1, 0)), TR.set(this, (0, Au.l)(this, dm, void 0)), this._coatDarkening = ((0, Au.l)(this, bm), new iR("coat_darkening", 1, "vCoatDarkening", 1, 0)), WR.set(this, (0, Au.l)(this, Cm, void 0)), this._coatDarkeningTexture = ((0, Au.l)(this, km), new YR("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, jR.set(this, (0, Au.l)(this, em, void 0)), this._fuzzWeight = ((0, Au.l)(this, Am), new iR("fuzz_weight", 0, "vFuzzWeight", 1, 0)), HR.set(this, (0, Au.l)(this, Dm, void 0)), this._fuzzWeightTexture = ((0, Au.l)(this, Mm), new YR("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), dR.set(this, (0, Au.l)(this, Im, void 0)), this._fuzzColor = ((0, Au.l)(this, Gm), new iR("fuzz_color", iu.d.White(), "vFuzzColor", 3, 0)), bR.set(this, (0, Au.l)(this, Um, void 0)), this._fuzzColorTexture = ((0, Au.l)(this, nm), new YR("fuzz_color", "fuzzColor", "FUZZ_COLOR")), CR.set(this, (0, Au.l)(this, sm, void 0)), this._fuzzRoughness = ((0, Au.l)(this, tm), new iR("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), AR.set(this, (0, Au.l)(this, lm, void 0)), this._fuzzRoughnessTexture = ((0, Au.l)(this, gm), new YR("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), DR.set(this, (0, Au.l)(this, cm, void 0)), this._geometryThinWalled = ((0, Au.l)(this, Lm), new iR("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), MR.set(this, (0, Au.l)(this, zm, void 0)), this._geometryNormalTexture = ((0, Au.l)(this, Fm), new YR("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), IR.set(this, (0, Au.l)(this, wm, void 0)), this._geometryTangent = ((0, Au.l)(this, Zm), new iR("geometry_tangent", new Lu.n(1, 0), "vSpecularAnisotropy", 3, 0)), GR.set(this, (0, Au.l)(this, hm, void 0)), this._geometryTangentTexture = ((0, Au.l)(this, Pm), new YR("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), UR.set(this, (0, Au.l)(this, im, void 0)), this._geometryCoatNormalTexture = ((0, Au.l)(this, Ym), new YR("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), nR.set(this, (0, Au.l)(this, om, void 0)), this._geometryCoatTangent = ((0, Au.l)(this, qm), new iR("geometry_coat_tangent", new Lu.n(1, 0), "vGeometryCoatTangent", 2, 0)), sR.set(this, (0, Au.l)(this, Om, void 0)), this._geometryCoatTangentTexture = ((0, Au.l)(this, am), new YR("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), tR.set(this, (0, Au.l)(this, fm, void 0)), this._geometryOpacity = ((0, Au.l)(this, uJ), new iR("geometry_opacity", 1, "vBaseColor", 4, 3)), lR.set(this, (0, Au.l)(this, RJ, void 0)), this._geometryOpacityTexture = ((0, Au.l)(this, yJ), new YR("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), gR.set(this, (0, Au.l)(this, EJ, void 0)), this._geometryThickness = ((0, Au.l)(this, KJ), new iR("geometry_thickness", 0, "vGeometryThickness", 1, 0)), cR.set(this, (0, Au.l)(this, QJ, void 0)), this._geometryThicknessTexture = ((0, Au.l)(this, mJ), new YR("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), LR.set(this, (0, Au.l)(this, JJ, void 0)), this._emissionLuminance = ((0, Au.l)(this, NJ), new iR("emission_luminance", 1, "vLightingIntensity", 4, 1)), zR.set(this, (0, Au.l)(this, XJ, void 0)), this._emissionColor = ((0, Au.l)(this, VJ), new iR("emission_color", iu.d.Black(), "vEmissionColor", 3)), wR.set(this, (0, Au.l)(this, rJ, void 0)), this._emissionColorTexture = ((0, Au.l)(this, BJ), new YR("emission_color", "emissionColor", "EMISSION_COLOR")), hR.set(this, (0, Au.l)(this, xJ, void 0)), this._thinFilmWeight = ((0, Au.l)(this, SJ), new iR("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), oR.set(this, (0, Au.l)(this, pJ, void 0)), this._thinFilmWeightTexture = ((0, Au.l)(this, TJ), new YR("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), qR.set(this, (0, Au.l)(this, WJ, void 0)), this._thinFilmThickness = ((0, Au.l)(this, jJ), new iR("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), aR.set(this, (0, Au.l)(this, HJ, void 0)), this._thinFilmThicknessMin = ((0, Au.l)(this, dJ), new iR("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), fR.set(this, (0, Au.l)(this, bJ, void 0)), this._thinFilmThicknessTexture = ((0, Au.l)(this, CJ), new YR("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), uy.set(this, (0, Au.l)(this, kJ, void 0)), this._thinFilmIor = ((0, Au.l)(this, eJ), new iR("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Ry.set(this, (0, Au.l)(this, AJ, void 0)), this._ambientOcclusionTexture = ((0, Au.l)(this, DJ), new YR("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = uu.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, yy.set(this, (0, Au.l)(this, MJ, 1)), Ey.set(this, ((0, Au.l)(this, IJ), (0, Au.l)(this, GJ, 1))), Ky.set(this, ((0, Au.l)(this, UJ), (0, Au.l)(this, nJ, !1))), Qy.set(this, ((0, Au.l)(this, sJ), (0, Au.l)(this, tJ, !1))), my.set(this, ((0, Au.l)(this, lJ), (0, Au.l)(this, gJ, .4))), Jy.set(this, ((0, Au.l)(this, cJ), (0, Au.l)(this, LJ, !1))), Ny.set(this, ((0, Au.l)(this, zJ), (0, Au.l)(this, FJ, !1))), Xy.set(this, ((0, Au.l)(this, wJ), (0, Au.l)(this, ZJ, !1))), Vy.set(this, ((0, Au.l)(this, hJ), (0, Au.l)(this, PJ, !1))), ry.set(this, ((0, Au.l)(this, iJ), (0, Au.l)(this, YJ, !1))), By.set(this, ((0, Au.l)(this, oJ), (0, Au.l)(this, qJ, .05))), xy.set(this, ((0, Au.l)(this, OJ), (0, Au.l)(this, vJ, !1))), Sy.set(this, ((0, Au.l)(this, aJ), (0, Au.l)(this, fJ, !1))), py.set(this, ((0, Au.l)(this, uN), (0, Au.l)(this, RN, 4))), Ty.set(this, ((0, Au.l)(this, yN), (0, Au.l)(this, EN, !1))), Wy.set(this, ((0, Au.l)(this, KN), (0, Au.l)(this, QN, !1))), jy.set(this, ((0, Au.l)(this, mN), (0, Au.l)(this, JN, !1))), Hy.set(this, ((0, Au.l)(this, NN), (0, Au.l)(this, XN, !1))), dy.set(this, ((0, Au.l)(this, VN), (0, Au.l)(this, rN, !1))), by.set(this, ((0, Au.l)(this, BN), (0, Au.l)(this, xN, null))), Cy.set(this, ((0, Au.l)(this, SN), (0, Au.l)(this, pN, !1))), ky.set(this, ((0, Au.l)(this, TN), (0, Au.l)(this, WN, !1))), ey.set(this, ((0, Au.l)(this, jN), (0, Au.l)(this, HN, !0))), Ay.set(this, ((0, Au.l)(this, dN), (0, Au.l)(this, bN, !0))), Dy.set(this, ((0, Au.l)(this, CN), (0, Au.l)(this, kN, !1))), My.set(this, ((0, Au.l)(this, eN), (0, Au.l)(this, AN, !1))), this._lightingInfos = ((0, Au.l)(this, DN), new Lu.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Qu.d.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new Iu.i(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Iy.set(this, (0, Au.l)(this, MN, 0)), this.debugLimit = ((0, Au.l)(this, IN), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Qu.d.MATERIAL_OPAQUE, this.lD() && !this.lD()?.eS().isWebGPU && this.lD().eS().Ep < 2 && Mu.e.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), uu._noiseTextures[this.lD().uniqueId] || (uu._noiseTextures[this.lD().uniqueId] = new Gu.h(eR.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.lD(), !1, !0, 1), this.lD().zD.addOnce((() => {
              uu._noiseTextures[this.lD().uniqueId]?.dispose(), delete uu._noiseTextures[this.lD().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), Ou.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), Ou.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = gu(this.lD()), this._environmentFuzzBRDFTexture = lu(this.lD()), this.prePassConfiguration = new Pu.e, this._propertyList = {};
            for (const uu of Object.getOwnPropertyNames(this)) {
              const Ru = this[uu];
              Ru instanceof iR && (this._propertyList[uu] = Ru)
            }
            Object.keys(this._propertyList).forEach((uu => {
              const Ru = this._propertyList[uu];
              let yu = this._uniformsList[Ru.targetUniformName];
              yu ? yu.numComponents !== Ru.targetUniformComponentNum ? Mu.e.Error(`Uniform ${Ru.targetUniformName} already exists of size ${yu.numComponents}, but trying to set it to ${Ru.targetUniformComponentNum}.`) : yu.requiredDefine !== Ru.requiredDefine && (yu.requiredDefine = void 0) : (yu = new PR(Ru.targetUniformName, Ru.targetUniformComponentNum), yu.requiredDefine = Ru.requiredDefine, this._uniformsList[Ru.targetUniformName] = yu), "" === yu.firstLinkedKey && (yu.firstLinkedKey = Ru.name), yu.linkedProperties[Ru.name] = Ru
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const uu of Object.getOwnPropertyNames(this)) {
              const Ru = this[uu];
              Ru instanceof YR && (this._samplersList[uu] = Ru)
            }
            for (const uu in this._samplersList) {
              const Ru = this._samplersList[uu].textureDefine;
              this._samplerDefines[Ru] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Ru + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Ru + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(Ou.e.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(Ou.e.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(uu) {
            this._transparencyMode !== uu && (this._transparencyMode = uu, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== Qu.d.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(uu) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(uu)
          }
          clone(Ru) {
            let yu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Ku = kR.c.Clone((() => new uu(Ru, this.lD())), this, {
              cloneTexturesOnlyOnce: yu
            });
            return Ku.id = Ru, Ku.name = Ru, this.stencil.copyTo(Ku.stencil), this._clonePlugins(Ku, Eu), Ku
          }
          serialize() {
            const uu = super.serialize();
            return uu.customType = "BABYLON.OpenPBRMaterial", uu
          }
          static Parse(Ru, yu, Eu) {
            const Ku = kR.c.Parse((() => new uu(Ru.name, yu)), Ru, yu, Eu);
            return Ru.stencil && Ku.stencil.parse(Ru.stencil, yu, Eu), Qu.d._ParsePlugins(Ru, Ku, yu, Eu), Ku
          }
          forceCompilation(uu, Ru, yu) {
            const Eu = {
              clipPlane: !1,
              useInstances: !1,
              ...yu
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const yu = new OR({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Ku = this._prepareEffect(uu, uu, yu, void 0, void 0, Eu.useInstances, Eu.clipPlane);
              this._onEffectCreatedObservable && (ZR.effect = Ku, ZR.subMesh = null, this._onEffectCreatedObservable.notifyObservers(ZR)), Ku.isReady() ? Ru && Ru(this) : Ku.onCompileObservable.add((() => {
                Ru && Ru(this)
              }))
            })()
          }
          isReadyForSubMesh(Ru, yu, Eu) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Ku = yu._drawWrapper;
            if (Ku.effect && this.isFrozen && Ku._wasPreviouslyReady && Ku._wasPreviouslyUsingInstances === Eu) return !0;
            yu.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), yu.materialDefines = new OR({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Qu = yu.materialDefines;
            if (this._isReadyForSubMesh(yu)) return !0;
            const mu = this.lD(),
              Ju = mu.eS();
            if (Qu._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, mu.texturesEnabled)) {
              for (const uu in this._samplersList) {
                const Ru = this._samplersList[uu];
                if (Ru.value && !Ru.value.isReadyOrNotBlocking()) return !1
              }
              const Ru = this._getRadianceTexture();
              if (Ru && Ou.e.ReflectionTextureEnabled) {
                if (!Ru.isReadyOrNotBlocking()) return !1;
                if (Ru.irradianceTexture) {
                  if (!Ru.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Ru.sphericalPolynomial && Ru.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && Ou.e.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && Ou.e.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && Ou.e.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (uu._noiseTextures[mu.uniqueId] && !uu._noiseTextures[mu.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Qu, this._eventInfo.subMesh = yu, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Qu._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Qu.AREALIGHTUSED)
              for (let uu = 0; uu < Ru.lightSources.length; uu++)
                if (!Ru.lightSources[uu]._isReady()) return !1;
            if (Ju.getCaps().standardDerivatives || Ru.isVerticesDataPresent(zu.h.NormalKind) || (Ru.createNormals(!0), Mu.e.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Ru.name)), !(0, au.b)(mu, Ru, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const Nu = yu.effect,
              Xu = Qu._areLightsDisposed,
              Vu = this._prepareEffect(Ru, yu.getRenderingMesh(), Qu, this.onCompiled, this.onError, Eu, null);
            let ru = !1;
            if (Vu)
              if (this._onEffectCreatedObservable && (ZR.effect = Vu, ZR.subMesh = yu, this._onEffectCreatedObservable.notifyObservers(ZR)), this.allowShaderHotSwapping && Nu && !Vu.isReady()) {
                if (Qu.markAsUnprocessed(), ru = this.isFrozen, Xu) return Qu._areLightsDisposed = !0, !1
              } else mu.resetCachedMaterial(), yu.setEffect(Vu, Qu, this._materialContext);
            return !(!yu.effect || !yu.effect.isReady()) && (Qu._renderId = mu.getRenderId(), Ku._wasPreviouslyReady = !ru, Ku._wasPreviouslyUsingInstances = !!Eu, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const uu = this._uniformBuffer;
            uu.addUniform("vTangentSpaceParams", 2), uu.addUniform("vLightingIntensity", 4), uu.addUniform("pointSize", 1), uu.addUniform("vDebugMode", 2), uu.addUniform("renderTargetSize", 2), uu.addUniform("cameraInfo", 4), uu.addUniform("vTextureRepetitionHexTilingParams", 4), uu.addUniform("backgroundRefractionMatrix", 16), uu.addUniform("vBackgroundRefractionInfos", 3), (0, au.ub)(uu, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Ru => {
              uu.addUniform(Ru.name, Ru.numComponents)
            })), Object.values(this._samplersList).forEach((Ru => {
              uu.addUniform(Ru.samplerInfoName, 2), uu.addUniform(Ru.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(uu, Ru, yu, Eu) {
            if (0 === this.geometryThickness) uu.updateFloat("vGeometryThickness", 0);
            else {
              Eu.getRenderingMesh().getWorldMatrix().decompose(Lu.m.MS[0]);
              const Ru = Math.max(Math.abs(Lu.m.MS[0].x), Math.abs(Lu.m.MS[0].y), Math.abs(Lu.m.MS[0].z));
              uu.updateFloat("vGeometryThickness", this.geometryThickness * Ru)
            }
          }
          bindForSubMesh(Ru, yu, Eu) {
            const Ku = this.lD(),
              Qu = Eu.materialDefines;
            if (!Qu) return;
            const mu = Eu.effect;
            if (!mu) return;
            this._activeEffect = mu, yu.getMeshUniformBuffer().bindToEffect(mu, "Mesh"), yu.transferToEffect(Ru);
            const Ju = Ku.eS();
            this._uniformBuffer.bindToEffect(mu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ku, yu, Ru, this.isFrozen), xR.b.Bind(Ju.currentRenderPassId, this._activeEffect, yu, Ru, this);
            const Nu = Ku.activeCamera;
            Nu ? this._uniformBuffer.updateFloat4("cameraInfo", Nu.minZ, Nu.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Xu = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Xu[0], Xu[1], Xu[2], Xu[3]), this._eventInfo.subMesh = Eu, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Qu.OBJECTSPACE_NORMALMAP && (Ru.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Vu = this._mustRebind(Ku, mu, Eu, yu.visibility),
              ru = Ju._features.needToAlwaysBindUniformBuffers;
            (0, au.f)(yu, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, rR.c)(this._activeEffect, this._vertexPullingMetadata);
            const Bu = this._uniformBuffer;
            if (Vu) {
              this.bindViewProjection(mu);
              const Ru = this._getRadianceTexture();
              if (!Bu.useUbo || !this.isFrozen || !Bu.isSync || Eu._drawWrapper._forceRebindOnNextCall) {
                if (Ku.texturesEnabled) {
                  for (const uu in this._samplersList) {
                    const Ru = this._samplersList[uu];
                    Ru.value && (Bu.updateFloat2(Ru.samplerInfoName, Ru.value.coordinatesIndex, Ru.value.level), (0, au.E)(Ru.value, Bu, Ru.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Ku._mirroredCameraPosition ? Bu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Bu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, au.k)(Ku, Qu, Bu, iu.d.White(), Ru, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && Bu.updateFloat("pointSize", this.pointSize);
                const uu = this._uniformsArray;
                for (let Ru = 0, yu = uu.length; Ru < yu; Ru++) {
                  const yu = uu[Ru];
                  (void 0 === yu.requiredDefine || Qu[yu.requiredDefine]) && (4 === yu.numComponents ? (yu.populateVectorFromLinkedProperties(Lu.m.Vector4[0]), Bu.updateVector4(yu.name, Lu.m.Vector4[0])) : 3 === yu.numComponents ? (yu.populateVectorFromLinkedProperties(Lu.m.MS[0]), Bu.updateVector3(yu.name, Lu.m.MS[0])) : 2 === yu.numComponents ? (yu.populateVectorFromLinkedProperties(Lu.m.Vector2[0]), Bu.updateFloat2(yu.name, Lu.m.Vector2[0].x, Lu.m.Vector2[0].y)) : 1 === yu.numComponents && Bu.updateFloat(yu.name, yu.linkedProperties[yu.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Ku.environmentIntensity, this._lightingInfos.w = 1, Bu.updateVector4("vLightingIntensity", this._lightingInfos), Bu.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Ku.texturesEnabled) {
                for (const uu in this._samplersList) {
                  const Ru = this._samplersList[uu];
                  Ru.value && Bu.setTexture(Ru.samplerName, Ru.value)
                }
                if ((0, au.o)(Ku, Qu, Bu, Ru, this.realTimeFiltering), Qu.ENVIRONMENTBRDF && Bu.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Qu.FUZZENVIRONMENTBRDF && Bu.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Qu.REFRACTED_BACKGROUND && (Bu.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), Bu.v_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Lu.m.MS[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), Bu.updateVector3("vBackgroundRefractionInfos", Lu.m.MS[1])), (Qu.ANISOTROPIC || Qu.FUZZ || Qu.REFRACTED_BACKGROUND || Qu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Bu.setTexture("blueNoiseSampler", uu._noiseTextures[this.lD().uniqueId]), Qu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const uu = this.sssIrradianceTexture.getSize().width,
                    Ru = this.sssIrradianceTexture.getSize().height;
                  Bu.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), Bu.setTexture("sceneDepthSampler", this.sssDepthTexture), Bu.updateFloat2("renderTargetSize", uu, Ru)
                }
              }
              this.lD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(yu) && this.lD().depthPeelingRenderer.bind(mu), this._eventInfo.subMesh = Eu, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, VR.f)(this._activeEffect, this, Ku), this.bindEyePosition(mu)
            } else ru && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Ku, Ku.eS(), Eu), !Vu && this.isFrozen && !ru || !Ku.lightsEnabled || this._disableLighting || (0, au.r)(Ku, yu, this._activeEffect, Qu, this._maxSimultaneousLights), !Vu && this.isFrozen || (this.bindView(mu), (0, au.g)(Ku, yu, this._activeEffect, !0), Qu.NUM_MORPH_INFLUENCERS && (0, au.y)(yu, this._activeEffect), Qu.BAKED_VERTEX_ANIMATION_TEXTURE && yu.bakedVertexAnimationManager?.bind(mu, Qu.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, au.u)(Qu, this._activeEffect, Ku)), this._afterBind(yu, this._activeEffect, Eu), Bu.update()
          }
          getAnimatables() {
            const uu = super.getAnimatables();
            for (const Ru in this._samplersList) {
              const yu = this._samplersList[Ru];
              yu.value && yu.value.animations && yu.value.animations.length > 0 && uu.push(yu.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && uu.push(this._radianceTexture), uu
          }
          getActiveTextures() {
            const uu = super.getActiveTextures();
            for (const Ru in this._samplersList) {
              const yu = this._samplersList[Ru];
              yu.value && uu.push(yu.value)
            }
            return this._radianceTexture && uu.push(this._radianceTexture), uu
          }
          hasTexture(uu) {
            if (super.hasTexture(uu)) return !0;
            for (const Ru in this._samplersList) {
              if (this._samplersList[Ru].value === uu) return !0
            }
            return this._radianceTexture === uu
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(uu, Ru) {
            if (this._breakShaderLoadedCheck = !0, Ru) {
              this._environmentBRDFTexture && this.lD().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.lD().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const uu in this._samplersList) {
                const Ru = this._samplersList[uu];
                Ru.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(uu, Ru)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.lD().environmentTexture
          }
          _prepareEffect(Ru, yu, Eu) {
            let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              mu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              Ju = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Ru, yu, Eu, mu, Ju), !Eu.isDirty) return null;
            Eu.markAsProcessed();
            const Nu = this.lD().eS(),
              Xu = new vu.d;
            let Vu = 0;
            Eu.USESPHERICALINVERTEX && Xu.addFallback(Vu++, "USESPHERICALINVERTEX"), Eu.FOG && Xu.addFallback(Vu, "FOG"), Eu.SPECULARAA && Xu.addFallback(Vu, "SPECULARAA"), Eu.POINTSIZE && Xu.addFallback(Vu, "POINTSIZE"), Eu.LOGARITHMICDEPTH && Xu.addFallback(Vu, "LOGARITHMICDEPTH"), Eu.PARALLAX && Xu.addFallback(Vu, "PARALLAX"), Eu.PARALLAX_RHS && Xu.addFallback(Vu, "PARALLAX_RHS"), Eu.PARALLAXOCCLUSION && Xu.addFallback(Vu++, "PARALLAXOCCLUSION"), Eu.ENVIRONMENTBRDF && Xu.addFallback(Vu++, "ENVIRONMENTBRDF"), Eu.TANGENT && Xu.addFallback(Vu++, "TANGENT"), Vu = (0, au.F)(Eu, Xu, this._maxSimultaneousLights, Vu), Eu.SPECULARTERM && Xu.addFallback(Vu++, "SPECULARTERM"), Eu.USESPHERICALFROMREFLECTIONMAP && Xu.addFallback(Vu++, "USESPHERICALFROMREFLECTIONMAP"), Eu.USEIRRADIANCEMAP && Xu.addFallback(Vu++, "USEIRRADIANCEMAP"), Eu.NORMAL && Xu.addFallback(Vu++, "NORMAL"), Eu.VERTEXCOLOR && Xu.addFallback(Vu++, "VERTEXCOLOR"), Eu.MORPHTARGETS && Xu.addFallback(Vu++, "MORPHTARGETS"), Eu.MULTIVIEW && Xu.addFallback(0, "MULTIVIEW");
            const ru = [zu.h.PositionKind];
            Eu.NORMAL && ru.push(zu.h.NormalKind), Eu.TANGENT && ru.push(zu.h.TangentKind);
            for (let uu = 1; uu <= 6; ++uu) Eu["UV" + uu] && ru.push(`uv${1===uu?"":uu}`);
            Eu.VERTEXCOLOR && ru.push(zu.h.ColorKind), (0, au.K)(ru, Ru, Eu, Xu), (0, au.L)(ru, Eu), (0, au.P)(ru, Ru, Eu), (0, au.J)(ru, Ru, Eu);
            let Bu = "openpbr";
            const xu = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const uu in this._uniformsList) xu.push(uu);
            const Su = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            Eu.FUZZENVIRONMENTBRDF && Su.push("environmentFuzzBrdfSampler"), Eu.REFRACTED_BACKGROUND && Su.push("backgroundRefractionSampler"), (Eu.ANISOTROPIC || Eu.FUZZ || Eu.REFRACTED_BACKGROUND || Eu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Su.push("blueNoiseSampler"), Eu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Su.push("sceneIrradianceSampler"), Su.push("sceneDepthSampler"));
            for (const uu in this._samplersList) {
              const Ru = this._samplersList[uu];
              Su.push(Ru.samplerName), xu.push(Ru.samplerInfoName), xu.push(Ru.samplerMatrixName)
            }(0, au.xb)(xu, Su, !0);
            const pu = ["Material", "Scene", "Mesh"],
              Tu = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: Eu.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = Xu, this._eventInfo.fallbackRank = Vu, this._eventInfo.defines = Eu, this._eventInfo.uniforms = xu, this._eventInfo.attributes = ru, this._eventInfo.samplers = Su, this._eventInfo.uniformBuffersNames = pu, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Ru, this._eventInfo.indexParameters = Tu, this._callbackPluginEventGeneric(128, this._eventInfo), xR.b.AddUniformsAndSamplers(xu, Su), Pu.e.AddUniforms(xu), Pu.e.AddSamplers(Su), (0, VR.c)(xu), this._useVertexPulling) {
              const uu = yu?.geometry;
              uu && (this._vertexPullingMetadata = (0, rR.e)(uu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Ru) => {
                xu.push(`vp_${Ru}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            ou.b && (ou.b.PrepareUniforms(xu, Eu), ou.b.PrepareSamplers(Su, Eu)), (0, au.zb)({
              uniformsNames: xu,
              uniformBuffersNames: pu,
              samplers: Su,
              defines: Eu,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Wu = {};
            this.customShaderNameResolve && (Bu = this.customShaderNameResolve(Bu, xu, pu, Su, Eu, ru, Wu));
            const ju = Eu.toString(),
              Hu = Nu.createEffect(Bu, {
                attributes: ru,
                uniformsNames: xu,
                uniformBuffersNames: pu,
                samplers: Su,
                defines: ju,
                fallbacks: Xu,
                onCompiled: Ku,
                onError: Qu,
                indexParameters: Tu,
                processFinalCode: Wu.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: Eu.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, Nu);
            return this._eventInfo.customCode = void 0, Hu
          }
          _prepareDefines(Ru, yu, Eu) {
            let Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              mu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const Ju = yu.hasThinInstances,
              Nu = this.lD(),
              Xu = Nu.eS();
            (0, au.eb)(Nu, Ru, Eu, !0, this._maxSimultaneousLights, this._disableLighting), Eu._needNormals = !0, (0, au.mb)(Nu, Eu);
            const Vu = this.needAlphaBlendingForMesh(Ru) && this.lD().useOrderIndependentTransparency;
            if ((0, au.rb)(Nu, Eu, this.canRenderToMRT && !Vu), (0, au.qb)(Nu, Eu, Vu), xR.b.PrepareDefines(Xu.currentRenderPassId, Ru, Eu), Eu._areTexturesDirty) {
              Eu._needUVs = !1;
              for (let uu = 1; uu <= 6; ++uu) Eu["MAINUV" + uu] = !1;
              if (Nu.texturesEnabled) {
                for (const yu in this._samplersList) {
                  const uu = this._samplersList[yu];
                  uu.value ? ((0, au.fb)(uu.value, Eu, uu.textureDefine), Eu[uu.textureDefine + "_GAMMA"] = uu.value.gammaSpace) : Eu[uu.textureDefine] = !1
                }
                const uu = this._getRadianceTexture(),
                  Ru = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || Xu.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, au.ab)(Nu, uu, Eu, this.realTimeFiltering, this.realTimeFilteringQuality, !Ru), this._baseMetalnessTexture && (Eu.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), Eu.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, Eu.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, Eu.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, Eu.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, Eu.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, Eu.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, Eu.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, Eu.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, Eu.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, Eu.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, Eu.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && Ou.e.DiffuseTextureEnabled ? (Eu.PARALLAX = !0, Eu.PARALLAX_RHS = Nu.useRightHandedSystem, Eu.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : Eu.PARALLAX = !1, Eu.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (Eu.PARALLAX = !1, Eu.PARALLAX_RHS = !1, Eu.PARALLAXOCCLUSION = !1, Eu.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && Ou.e.ReflectionTextureEnabled ? (Eu.ENVIRONMENTBRDF = !0, Eu.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (Eu.ENVIRONMENTBRDF = !1, Eu.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? Eu.FUZZENVIRONMENTBRDF = !0 : Eu.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  Eu.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && Ou.e.RefractionTextureEnabled, Eu.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, Eu.REFRACTED_LIGHTS = !0;
                  const uu = this._getRadianceTexture();
                  uu ? (Eu.REFRACTED_ENVIRONMENT = Ou.e.RefractionTextureEnabled, Eu.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.lD().useRightHandedSystem ? !uu.invertZ : uu.invertZ, Eu.REFRACTED_ENVIRONMENT_LOCAL_CUBE = uu.isCube && uu.boundingBoxSize) : Eu.REFRACTED_ENVIRONMENT = !1
                } else Eu.REFRACTED_BACKGROUND = !1, Eu.REFRACTED_LIGHTS = !1, Eu.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? Eu.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : Eu.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Qu.d.LIGHTFALLOFF_STANDARD ? (Eu.USEPHYSICALLIGHTFALLOFF = !1, Eu.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Qu.d.LIGHTFALLOFF_GLTF ? (Eu.USEPHYSICALLIGHTFALLOFF = !1, Eu.USEGLTFLIGHTFALLOFF = !0) : (Eu.USEPHYSICALLIGHTFALLOFF = !0, Eu.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? Eu.TWOSIDEDLIGHTING = !0 : Eu.TWOSIDEDLIGHTING = !1, Eu.MIRRORED = !!Nu._mirroredCameraPosition, Eu.SPECULARAA = Xu.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(Eu._areTexturesDirty || Eu._areMiscDirty) && (Eu.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, Eu.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Eu.ALPHABLEND = this.needAlphaBlendingForMesh(Ru)), Eu._areTexturesDirty && (Eu.TEXTURE_REPETITION_MODE = Xu.version > 1 || Xu.isWebGPU ? this.textureRepetitionMode : 0), Eu._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(Eu), Eu.FORCENORMALFORWARD = this._forceNormalForward, Eu.RADIANCEOCCLUSION = this._useRadianceOcclusion, Eu.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && uu._noiseTextures[Nu.uniqueId] && Ou.e.ReflectionTextureEnabled ? (Eu.ANISOTROPIC = !0, Ru.isVerticesDataPresent(zu.h.TangentKind) || (Eu._needUVs = !0, Eu.MAINUV1 = !0), this._useGltfStyleAnisotropy && (Eu.USE_GLTF_STYLE_ANISOTROPY = !0), Eu.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, Eu.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (Eu.ANISOTROPIC = !1, Eu.USE_GLTF_STYLE_ANISOTROPY = !1, Eu.ANISOTROPIC_BASE = !1, Eu.ANISOTROPIC_COAT = !1), Eu.THIN_FILM = this.thinFilmWeight > 0, Eu.IRIDESCENCE = this.thinFilmWeight > 0, Eu.DISPERSION = this.transmissionDispersionScale > 0, Eu.SCATTERING = this.hasScattering;
            if (Eu.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, Eu.TRANSMISSION_SLAB = this.transmissionWeight > 0, Eu.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, Eu.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !Eu.PREPASS && (Eu.SUBSURFACE_SLAB || Eu.TRANSMISSION_SLAB_VOLUME)) {
              let uu = !1;
              if (!this.sssIrradianceTexture && Nu.geometryBufferRenderer) {
                const Ru = Nu.geometryBufferRenderer.getTextureIndex(FR.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = Nu.geometryBufferRenderer.getGBuffer().textures[Ru], uu = !0
              }
              if (!this.sssDepthTexture && Nu.geometryBufferRenderer) {
                const Ru = Nu.geometryBufferRenderer.getTextureIndex(FR.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = Nu.geometryBufferRenderer.getGBuffer().textures[Ru], uu = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (Eu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, uu && (Eu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            Eu.FUZZ = this.fuzzWeight > 0 && Ou.e.ReflectionTextureEnabled, Eu.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, Eu.FUZZ ? (Ru.isVerticesDataPresent(zu.h.TangentKind) || (Eu._needUVs = !0, Eu.MAINUV1 = !0), this._environmentFuzzBRDFTexture = lu(this.lD()), Eu.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, Eu.FUZZENVIRONMENTBRDF = !1, Eu.FUZZ_IBL_SAMPLES = 0), Eu._areMiscDirty && ((0, au.jb)(Ru, Nu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Ru), Eu, this._applyDecalMapAfterDetailMap, this._useVertexPulling, yu, this._isVertexOutputInvariant), Eu.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Ru.isVerticesDataPresent(zu.h.NormalKind), Eu.DEBUGMODE = this._debugMode), (0, au._)(Nu, Xu, this, Eu, !!Ku, mu, Ju), this._eventInfo.defines = Eu, this._eventInfo.mesh = Ru, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, au.X)(Ru, Eu, !0, !0, !0, this._transparencyMode !== Qu.d.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Ru = new WeakMap, Eu = new WeakMap, Ku = new WeakMap, mu = new WeakMap, Ju = new WeakMap, Nu = new WeakMap, Xu = new WeakMap, Vu = new WeakMap, ru = new WeakMap, Bu = new WeakMap, xu = new WeakMap, Su = new WeakMap, pu = new WeakMap, Tu = new WeakMap, Wu = new WeakMap, ju = new WeakMap, Hu = new WeakMap, du = new WeakMap, bu = new WeakMap, Cu = new WeakMap, ku = new WeakMap, eu = new WeakMap, Uu = new WeakMap, nu = new WeakMap, su = new WeakMap, tu = new WeakMap, cu = new WeakMap, Fu = new WeakMap, wu = new WeakMap, Zu = new WeakMap, hu = new WeakMap, Yu = new WeakMap, qu = new WeakMap, fu = new WeakMap, uR = new WeakMap, RR = new WeakMap, yR = new WeakMap, ER = new WeakMap, KR = new WeakMap, QR = new WeakMap, mR = new WeakMap, JR = new WeakMap, NR = new WeakMap, XR = new WeakMap, SR = new WeakMap, pR = new WeakMap, TR = new WeakMap, WR = new WeakMap, jR = new WeakMap, HR = new WeakMap, dR = new WeakMap, bR = new WeakMap, CR = new WeakMap, AR = new WeakMap, DR = new WeakMap, MR = new WeakMap, IR = new WeakMap, GR = new WeakMap, UR = new WeakMap, nR = new WeakMap, sR = new WeakMap, tR = new WeakMap, lR = new WeakMap, gR = new WeakMap, cR = new WeakMap, LR = new WeakMap, zR = new WeakMap, wR = new WeakMap, hR = new WeakMap, oR = new WeakMap, qR = new WeakMap, aR = new WeakMap, fR = new WeakMap, uy = new WeakMap, Ry = new WeakMap, yy = new WeakMap, Ey = new WeakMap, Ky = new WeakMap, Qy = new WeakMap, my = new WeakMap, Jy = new WeakMap, Ny = new WeakMap, Xy = new WeakMap, Vy = new WeakMap, ry = new WeakMap, By = new WeakMap, xy = new WeakMap, Sy = new WeakMap, py = new WeakMap, Ty = new WeakMap, Wy = new WeakMap, jy = new WeakMap, Hy = new WeakMap, dy = new WeakMap, by = new WeakMap, Cy = new WeakMap, ky = new WeakMap, ey = new WeakMap, Ay = new WeakMap, Dy = new WeakMap, My = new WeakMap, Iy = new WeakMap, (() => {
          const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(UK[Symbol.metadata] ?? null) : void 0;
          Gy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Uy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], ny = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], ty = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], ly = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], gy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], cy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Ly = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], zy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Fy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], wy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Zy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], hy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Py = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], iy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Yy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], oy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], qy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], Oy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], vy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], ay = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], fy = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], uE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], RE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], yE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], EE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], KE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], mE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], NE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], XE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], VE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], rE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], BE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], xE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], SE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], pE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], jE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], HE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], dE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], bE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], CE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], kE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], eE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], AE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], DE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], ME = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], IE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], GE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], UE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], nE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], sE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], tE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], lE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], gE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], cE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], LE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], zE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], FE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], wE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], ZE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], hE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], iE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], YE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], oE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], qE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], OE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], aE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], fE = [(0, Du.c)("_markAllSubMeshesAsTexturesDirty")], uK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], RK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], yK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], EK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], KK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], QK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], mK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], JK = [(0, Du.K)()], NK = [(0, Du.K)()], XK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], VK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], rK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], BK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], xK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsLightsDirty")], SK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], pK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsLightsDirty")], TK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], WK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], jK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], HK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], dK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], bK = [(0, Du.f)("_markAllSubMeshesAsTexturesDirty")], CK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], kK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], eK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], AK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], DK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], MK = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], IK = [(0, Du.f)("_markAllSubMeshesAsMiscDirty")], GK = [(0, Du.K)()], (0, Au.h)(uu, null, Gy, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseWeight" in uu,
              get: uu => uu.baseWeight,
              set: (uu, Ru) => {
                uu.baseWeight = Ru
              }
            },
            metadata: Ru
          }, sK, tK), (0, Au.h)(uu, null, Uy, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseWeightTexture" in uu,
              get: uu => uu.baseWeightTexture,
              set: (uu, Ru) => {
                uu.baseWeightTexture = Ru
              }
            },
            metadata: Ru
          }, lK, gK), (0, Au.h)(uu, null, ny, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseColor" in uu,
              get: uu => uu.baseColor,
              set: (uu, Ru) => {
                uu.baseColor = Ru
              }
            },
            metadata: Ru
          }, cK, LK), (0, Au.h)(uu, null, sy, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseColorTexture" in uu,
              get: uu => uu.baseColorTexture,
              set: (uu, Ru) => {
                uu.baseColorTexture = Ru
              }
            },
            metadata: Ru
          }, zK, FK), (0, Au.h)(uu, null, ty, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseDiffuseRoughness" in uu,
              get: uu => uu.baseDiffuseRoughness,
              set: (uu, Ru) => {
                uu.baseDiffuseRoughness = Ru
              }
            },
            metadata: Ru
          }, wK, ZK), (0, Au.h)(uu, null, ly, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseDiffuseRoughnessTexture" in uu,
              get: uu => uu.baseDiffuseRoughnessTexture,
              set: (uu, Ru) => {
                uu.baseDiffuseRoughnessTexture = Ru
              }
            },
            metadata: Ru
          }, hK, PK), (0, Au.h)(uu, null, gy, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseMetalness" in uu,
              get: uu => uu.baseMetalness,
              set: (uu, Ru) => {
                uu.baseMetalness = Ru
              }
            },
            metadata: Ru
          }, iK, YK), (0, Au.h)(uu, null, cy, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseMetalnessTexture" in uu,
              get: uu => uu.baseMetalnessTexture,
              set: (uu, Ru) => {
                uu.baseMetalnessTexture = Ru
              }
            },
            metadata: Ru
          }, oK, qK), (0, Au.h)(uu, null, Ly, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularWeight" in uu,
              get: uu => uu.specularWeight,
              set: (uu, Ru) => {
                uu.specularWeight = Ru
              }
            },
            metadata: Ru
          }, OK, vK), (0, Au.h)(uu, null, zy, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularWeightTexture" in uu,
              get: uu => uu.specularWeightTexture,
              set: (uu, Ru) => {
                uu.specularWeightTexture = Ru
              }
            },
            metadata: Ru
          }, aK, fK), (0, Au.h)(uu, null, Fy, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularColor" in uu,
              get: uu => uu.specularColor,
              set: (uu, Ru) => {
                uu.specularColor = Ru
              }
            },
            metadata: Ru
          }, uQ, RQ), (0, Au.h)(uu, null, wy, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularColorTexture" in uu,
              get: uu => uu.specularColorTexture,
              set: (uu, Ru) => {
                uu.specularColorTexture = Ru
              }
            },
            metadata: Ru
          }, yQ, EQ), (0, Au.h)(uu, null, Zy, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughness" in uu,
              get: uu => uu.specularRoughness,
              set: (uu, Ru) => {
                uu.specularRoughness = Ru
              }
            },
            metadata: Ru
          }, KQ, QQ), (0, Au.h)(uu, null, hy, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughnessTexture" in uu,
              get: uu => uu.specularRoughnessTexture,
              set: (uu, Ru) => {
                uu.specularRoughnessTexture = Ru
              }
            },
            metadata: Ru
          }, mQ, JQ), (0, Au.h)(uu, null, Py, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughnessAnisotropy" in uu,
              get: uu => uu.specularRoughnessAnisotropy,
              set: (uu, Ru) => {
                uu.specularRoughnessAnisotropy = Ru
              }
            },
            metadata: Ru
          }, NQ, XQ), (0, Au.h)(uu, null, iy, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughnessAnisotropyTexture" in uu,
              get: uu => uu.specularRoughnessAnisotropyTexture,
              set: (uu, Ru) => {
                uu.specularRoughnessAnisotropyTexture = Ru
              }
            },
            metadata: Ru
          }, VQ, rQ), (0, Au.h)(uu, null, Yy, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularIor" in uu,
              get: uu => uu.specularIor,
              set: (uu, Ru) => {
                uu.specularIor = Ru
              }
            },
            metadata: Ru
          }, BQ, xQ), (0, Au.h)(uu, null, oy, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionWeight" in uu,
              get: uu => uu.transmissionWeight,
              set: (uu, Ru) => {
                uu.transmissionWeight = Ru
              }
            },
            metadata: Ru
          }, SQ, pQ), (0, Au.h)(uu, null, qy, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionWeightTexture" in uu,
              get: uu => uu.transmissionWeightTexture,
              set: (uu, Ru) => {
                uu.transmissionWeightTexture = Ru
              }
            },
            metadata: Ru
          }, TQ, WQ), (0, Au.h)(uu, null, Oy, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionColor" in uu,
              get: uu => uu.transmissionColor,
              set: (uu, Ru) => {
                uu.transmissionColor = Ru
              }
            },
            metadata: Ru
          }, jQ, HQ), (0, Au.h)(uu, null, vy, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionColorTexture" in uu,
              get: uu => uu.transmissionColorTexture,
              set: (uu, Ru) => {
                uu.transmissionColorTexture = Ru
              }
            },
            metadata: Ru
          }, dQ, bQ), (0, Au.h)(uu, null, ay, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDepth" in uu,
              get: uu => uu.transmissionDepth,
              set: (uu, Ru) => {
                uu.transmissionDepth = Ru
              }
            },
            metadata: Ru
          }, CQ, kQ), (0, Au.h)(uu, null, fy, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDepthTexture" in uu,
              get: uu => uu.transmissionDepthTexture,
              set: (uu, Ru) => {
                uu.transmissionDepthTexture = Ru
              }
            },
            metadata: Ru
          }, eQ, AQ), (0, Au.h)(uu, null, uE, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionScatter" in uu,
              get: uu => uu.transmissionScatter,
              set: (uu, Ru) => {
                uu.transmissionScatter = Ru
              }
            },
            metadata: Ru
          }, DQ, MQ), (0, Au.h)(uu, null, RE, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionScatterTexture" in uu,
              get: uu => uu.transmissionScatterTexture,
              set: (uu, Ru) => {
                uu.transmissionScatterTexture = Ru
              }
            },
            metadata: Ru
          }, IQ, GQ), (0, Au.h)(uu, null, yE, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionScatterAnisotropy" in uu,
              get: uu => uu.transmissionScatterAnisotropy,
              set: (uu, Ru) => {
                uu.transmissionScatterAnisotropy = Ru
              }
            },
            metadata: Ru
          }, UQ, nQ), (0, Au.h)(uu, null, EE, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDispersionScale" in uu,
              get: uu => uu.transmissionDispersionScale,
              set: (uu, Ru) => {
                uu.transmissionDispersionScale = Ru
              }
            },
            metadata: Ru
          }, sQ, tQ), (0, Au.h)(uu, null, KE, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDispersionScaleTexture" in uu,
              get: uu => uu.transmissionDispersionScaleTexture,
              set: (uu, Ru) => {
                uu.transmissionDispersionScaleTexture = Ru
              }
            },
            metadata: Ru
          }, lQ, gQ), (0, Au.h)(uu, null, QE, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDispersionAbbeNumber" in uu,
              get: uu => uu.transmissionDispersionAbbeNumber,
              set: (uu, Ru) => {
                uu.transmissionDispersionAbbeNumber = Ru
              }
            },
            metadata: Ru
          }, cQ, LQ), (0, Au.h)(uu, null, mE, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceWeight" in uu,
              get: uu => uu.subsurfaceWeight,
              set: (uu, Ru) => {
                uu.subsurfaceWeight = Ru
              }
            },
            metadata: Ru
          }, zQ, FQ), (0, Au.h)(uu, null, JE, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceWeightTexture" in uu,
              get: uu => uu.subsurfaceWeightTexture,
              set: (uu, Ru) => {
                uu.subsurfaceWeightTexture = Ru
              }
            },
            metadata: Ru
          }, wQ, ZQ), (0, Au.h)(uu, null, NE, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceColor" in uu,
              get: uu => uu.subsurfaceColor,
              set: (uu, Ru) => {
                uu.subsurfaceColor = Ru
              }
            },
            metadata: Ru
          }, hQ, PQ), (0, Au.h)(uu, null, XE, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceColorTexture" in uu,
              get: uu => uu.subsurfaceColorTexture,
              set: (uu, Ru) => {
                uu.subsurfaceColorTexture = Ru
              }
            },
            metadata: Ru
          }, iQ, YQ), (0, Au.h)(uu, null, VE, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceRadius" in uu,
              get: uu => uu.subsurfaceRadius,
              set: (uu, Ru) => {
                uu.subsurfaceRadius = Ru
              }
            },
            metadata: Ru
          }, oQ, qQ), (0, Au.h)(uu, null, rE, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceRadiusScale" in uu,
              get: uu => uu.subsurfaceRadiusScale,
              set: (uu, Ru) => {
                uu.subsurfaceRadiusScale = Ru
              }
            },
            metadata: Ru
          }, OQ, vQ), (0, Au.h)(uu, null, BE, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceRadiusScaleTexture" in uu,
              get: uu => uu.subsurfaceRadiusScaleTexture,
              set: (uu, Ru) => {
                uu.subsurfaceRadiusScaleTexture = Ru
              }
            },
            metadata: Ru
          }, aQ, fQ), (0, Au.h)(uu, null, xE, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceScatterAnisotropy" in uu,
              get: uu => uu.subsurfaceScatterAnisotropy,
              set: (uu, Ru) => {
                uu.subsurfaceScatterAnisotropy = Ru
              }
            },
            metadata: Ru
          }, um, Rm), (0, Au.h)(uu, null, SE, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatWeight" in uu,
              get: uu => uu.coatWeight,
              set: (uu, Ru) => {
                uu.coatWeight = Ru
              }
            },
            metadata: Ru
          }, ym, Em), (0, Au.h)(uu, null, pE, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatWeightTexture" in uu,
              get: uu => uu.coatWeightTexture,
              set: (uu, Ru) => {
                uu.coatWeightTexture = Ru
              }
            },
            metadata: Ru
          }, Km, Qm), (0, Au.h)(uu, null, TE, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatColor" in uu,
              get: uu => uu.coatColor,
              set: (uu, Ru) => {
                uu.coatColor = Ru
              }
            },
            metadata: Ru
          }, mm, Jm), (0, Au.h)(uu, null, WE, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatColorTexture" in uu,
              get: uu => uu.coatColorTexture,
              set: (uu, Ru) => {
                uu.coatColorTexture = Ru
              }
            },
            metadata: Ru
          }, Nm, Xm), (0, Au.h)(uu, null, jE, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughness" in uu,
              get: uu => uu.coatRoughness,
              set: (uu, Ru) => {
                uu.coatRoughness = Ru
              }
            },
            metadata: Ru
          }, Vm, rm), (0, Au.h)(uu, null, HE, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughnessTexture" in uu,
              get: uu => uu.coatRoughnessTexture,
              set: (uu, Ru) => {
                uu.coatRoughnessTexture = Ru
              }
            },
            metadata: Ru
          }, Bm, xm), (0, Au.h)(uu, null, dE, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughnessAnisotropy" in uu,
              get: uu => uu.coatRoughnessAnisotropy,
              set: (uu, Ru) => {
                uu.coatRoughnessAnisotropy = Ru
              }
            },
            metadata: Ru
          }, Sm, pm), (0, Au.h)(uu, null, bE, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughnessAnisotropyTexture" in uu,
              get: uu => uu.coatRoughnessAnisotropyTexture,
              set: (uu, Ru) => {
                uu.coatRoughnessAnisotropyTexture = Ru
              }
            },
            metadata: Ru
          }, Tm, Wm), (0, Au.h)(uu, null, CE, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatIor" in uu,
              get: uu => uu.coatIor,
              set: (uu, Ru) => {
                uu.coatIor = Ru
              }
            },
            metadata: Ru
          }, jm, Hm), (0, Au.h)(uu, null, kE, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatDarkening" in uu,
              get: uu => uu.coatDarkening,
              set: (uu, Ru) => {
                uu.coatDarkening = Ru
              }
            },
            metadata: Ru
          }, dm, bm), (0, Au.h)(uu, null, eE, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatDarkeningTexture" in uu,
              get: uu => uu.coatDarkeningTexture,
              set: (uu, Ru) => {
                uu.coatDarkeningTexture = Ru
              }
            },
            metadata: Ru
          }, Cm, km), (0, Au.h)(uu, null, AE, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzWeight" in uu,
              get: uu => uu.fuzzWeight,
              set: (uu, Ru) => {
                uu.fuzzWeight = Ru
              }
            },
            metadata: Ru
          }, em, Am), (0, Au.h)(uu, null, DE, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzWeightTexture" in uu,
              get: uu => uu.fuzzWeightTexture,
              set: (uu, Ru) => {
                uu.fuzzWeightTexture = Ru
              }
            },
            metadata: Ru
          }, Dm, Mm), (0, Au.h)(uu, null, ME, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzColor" in uu,
              get: uu => uu.fuzzColor,
              set: (uu, Ru) => {
                uu.fuzzColor = Ru
              }
            },
            metadata: Ru
          }, Im, Gm), (0, Au.h)(uu, null, IE, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzColorTexture" in uu,
              get: uu => uu.fuzzColorTexture,
              set: (uu, Ru) => {
                uu.fuzzColorTexture = Ru
              }
            },
            metadata: Ru
          }, Um, nm), (0, Au.h)(uu, null, GE, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzRoughness" in uu,
              get: uu => uu.fuzzRoughness,
              set: (uu, Ru) => {
                uu.fuzzRoughness = Ru
              }
            },
            metadata: Ru
          }, sm, tm), (0, Au.h)(uu, null, UE, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzRoughnessTexture" in uu,
              get: uu => uu.fuzzRoughnessTexture,
              set: (uu, Ru) => {
                uu.fuzzRoughnessTexture = Ru
              }
            },
            metadata: Ru
          }, lm, gm), (0, Au.h)(uu, null, nE, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryThinWalled" in uu,
              get: uu => uu.geometryThinWalled,
              set: (uu, Ru) => {
                uu.geometryThinWalled = Ru
              }
            },
            metadata: Ru
          }, cm, Lm), (0, Au.h)(uu, null, sE, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryNormalTexture" in uu,
              get: uu => uu.geometryNormalTexture,
              set: (uu, Ru) => {
                uu.geometryNormalTexture = Ru
              }
            },
            metadata: Ru
          }, zm, Fm), (0, Au.h)(uu, null, tE, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryTangent" in uu,
              get: uu => uu.geometryTangent,
              set: (uu, Ru) => {
                uu.geometryTangent = Ru
              }
            },
            metadata: Ru
          }, wm, Zm), (0, Au.h)(uu, null, lE, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryTangentTexture" in uu,
              get: uu => uu.geometryTangentTexture,
              set: (uu, Ru) => {
                uu.geometryTangentTexture = Ru
              }
            },
            metadata: Ru
          }, hm, Pm), (0, Au.h)(uu, null, gE, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryCoatNormalTexture" in uu,
              get: uu => uu.geometryCoatNormalTexture,
              set: (uu, Ru) => {
                uu.geometryCoatNormalTexture = Ru
              }
            },
            metadata: Ru
          }, im, Ym), (0, Au.h)(uu, null, cE, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryCoatTangent" in uu,
              get: uu => uu.geometryCoatTangent,
              set: (uu, Ru) => {
                uu.geometryCoatTangent = Ru
              }
            },
            metadata: Ru
          }, om, qm), (0, Au.h)(uu, null, LE, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryCoatTangentTexture" in uu,
              get: uu => uu.geometryCoatTangentTexture,
              set: (uu, Ru) => {
                uu.geometryCoatTangentTexture = Ru
              }
            },
            metadata: Ru
          }, Om, am), (0, Au.h)(uu, null, zE, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryOpacity" in uu,
              get: uu => uu.geometryOpacity,
              set: (uu, Ru) => {
                uu.geometryOpacity = Ru
              }
            },
            metadata: Ru
          }, fm, uJ), (0, Au.h)(uu, null, FE, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryOpacityTexture" in uu,
              get: uu => uu.geometryOpacityTexture,
              set: (uu, Ru) => {
                uu.geometryOpacityTexture = Ru
              }
            },
            metadata: Ru
          }, RJ, yJ), (0, Au.h)(uu, null, wE, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryThickness" in uu,
              get: uu => uu.geometryThickness,
              set: (uu, Ru) => {
                uu.geometryThickness = Ru
              }
            },
            metadata: Ru
          }, EJ, KJ), (0, Au.h)(uu, null, ZE, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryThicknessTexture" in uu,
              get: uu => uu.geometryThicknessTexture,
              set: (uu, Ru) => {
                uu.geometryThicknessTexture = Ru
              }
            },
            metadata: Ru
          }, QJ, mJ), (0, Au.h)(uu, null, hE, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissionLuminance" in uu,
              get: uu => uu.emissionLuminance,
              set: (uu, Ru) => {
                uu.emissionLuminance = Ru
              }
            },
            metadata: Ru
          }, JJ, NJ), (0, Au.h)(uu, null, PE, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissionColor" in uu,
              get: uu => uu.emissionColor,
              set: (uu, Ru) => {
                uu.emissionColor = Ru
              }
            },
            metadata: Ru
          }, XJ, VJ), (0, Au.h)(uu, null, iE, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissionColorTexture" in uu,
              get: uu => uu.emissionColorTexture,
              set: (uu, Ru) => {
                uu.emissionColorTexture = Ru
              }
            },
            metadata: Ru
          }, rJ, BJ), (0, Au.h)(uu, null, YE, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmWeight" in uu,
              get: uu => uu.thinFilmWeight,
              set: (uu, Ru) => {
                uu.thinFilmWeight = Ru
              }
            },
            metadata: Ru
          }, xJ, SJ), (0, Au.h)(uu, null, oE, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmWeightTexture" in uu,
              get: uu => uu.thinFilmWeightTexture,
              set: (uu, Ru) => {
                uu.thinFilmWeightTexture = Ru
              }
            },
            metadata: Ru
          }, pJ, TJ), (0, Au.h)(uu, null, qE, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmThickness" in uu,
              get: uu => uu.thinFilmThickness,
              set: (uu, Ru) => {
                uu.thinFilmThickness = Ru
              }
            },
            metadata: Ru
          }, WJ, jJ), (0, Au.h)(uu, null, OE, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmThicknessMin" in uu,
              get: uu => uu.thinFilmThicknessMin,
              set: (uu, Ru) => {
                uu.thinFilmThicknessMin = Ru
              }
            },
            metadata: Ru
          }, HJ, dJ), (0, Au.h)(uu, null, vE, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmThicknessTexture" in uu,
              get: uu => uu.thinFilmThicknessTexture,
              set: (uu, Ru) => {
                uu.thinFilmThicknessTexture = Ru
              }
            },
            metadata: Ru
          }, bJ, CJ), (0, Au.h)(uu, null, aE, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmIor" in uu,
              get: uu => uu.thinFilmIor,
              set: (uu, Ru) => {
                uu.thinFilmIor = Ru
              }
            },
            metadata: Ru
          }, kJ, eJ), (0, Au.h)(uu, null, fE, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "ambientOcclusionTexture" in uu,
              get: uu => uu.ambientOcclusionTexture,
              set: (uu, Ru) => {
                uu.ambientOcclusionTexture = Ru
              }
            },
            metadata: Ru
          }, AJ, DJ), (0, Au.h)(uu, null, uK, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: uu => "directIntensity" in uu,
              get: uu => uu.directIntensity,
              set: (uu, Ru) => {
                uu.directIntensity = Ru
              }
            },
            metadata: Ru
          }, MJ, IJ), (0, Au.h)(uu, null, RK, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: uu => "environmentIntensity" in uu,
              get: uu => uu.environmentIntensity,
              set: (uu, Ru) => {
                uu.environmentIntensity = Ru
              }
            },
            metadata: Ru
          }, GJ, UJ), (0, Au.h)(uu, null, yK, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useSpecularWeightFromTextureAlpha" in uu,
              get: uu => uu.useSpecularWeightFromTextureAlpha,
              set: (uu, Ru) => {
                uu.useSpecularWeightFromTextureAlpha = Ru
              }
            },
            metadata: Ru
          }, nJ, sJ), (0, Au.h)(uu, null, EK, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceAlphaTest" in uu,
              get: uu => uu.forceAlphaTest,
              set: (uu, Ru) => {
                uu.forceAlphaTest = Ru
              }
            },
            metadata: Ru
          }, tJ, lJ), (0, Au.h)(uu, null, KK, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaCutOff" in uu,
              get: uu => uu.alphaCutOff,
              set: (uu, Ru) => {
                uu.alphaCutOff = Ru
              }
            },
            metadata: Ru
          }, gJ, cJ), (0, Au.h)(uu, null, QK, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAmbientOcclusionFromMetallicTextureRed" in uu,
              get: uu => uu.useAmbientOcclusionFromMetallicTextureRed,
              set: (uu, Ru) => {
                uu.useAmbientOcclusionFromMetallicTextureRed = Ru
              }
            },
            metadata: Ru
          }, LJ, zJ), (0, Au.h)(uu, null, mK, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAmbientInGrayScale" in uu,
              get: uu => uu.useAmbientInGrayScale,
              set: (uu, Ru) => {
                uu.useAmbientInGrayScale = Ru
              }
            },
            metadata: Ru
          }, FJ, wJ), (0, Au.h)(uu, null, JK, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: uu => "usePhysicalLightFalloff" in uu,
              get: uu => uu.usePhysicalLightFalloff
            },
            metadata: Ru
          }, null, nK), (0, Au.h)(uu, null, NK, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: uu => "useGLTFLightFalloff" in uu,
              get: uu => uu.useGLTFLightFalloff
            },
            metadata: Ru
          }, null, nK), (0, Au.h)(uu, null, XK, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "useObjectSpaceNormalMap" in uu,
              get: uu => uu.useObjectSpaceNormalMap,
              set: (uu, Ru) => {
                uu.useObjectSpaceNormalMap = Ru
              }
            },
            metadata: Ru
          }, ZJ, hJ), (0, Au.h)(uu, null, VK, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallax" in uu,
              get: uu => uu.useParallax,
              set: (uu, Ru) => {
                uu.useParallax = Ru
              }
            },
            metadata: Ru
          }, PJ, iJ), (0, Au.h)(uu, null, rK, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallaxOcclusion" in uu,
              get: uu => uu.useParallaxOcclusion,
              set: (uu, Ru) => {
                uu.useParallaxOcclusion = Ru
              }
            },
            metadata: Ru
          }, YJ, oJ), (0, Au.h)(uu, null, BK, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: uu => "parallaxScaleBias" in uu,
              get: uu => uu.parallaxScaleBias,
              set: (uu, Ru) => {
                uu.parallaxScaleBias = Ru
              }
            },
            metadata: Ru
          }, qJ, OJ), (0, Au.h)(uu, null, xK, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "disableLighting" in uu,
              get: uu => uu.disableLighting,
              set: (uu, Ru) => {
                uu.disableLighting = Ru
              }
            },
            metadata: Ru
          }, vJ, aJ), (0, Au.h)(uu, null, SK, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceIrradianceInFragment" in uu,
              get: uu => uu.forceIrradianceInFragment,
              set: (uu, Ru) => {
                uu.forceIrradianceInFragment = Ru
              }
            },
            metadata: Ru
          }, fJ, uN), (0, Au.h)(uu, null, pK, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: uu => "maxSimultaneousLights" in uu,
              get: uu => uu.maxSimultaneousLights,
              set: (uu, Ru) => {
                uu.maxSimultaneousLights = Ru
              }
            },
            metadata: Ru
          }, RN, yN), (0, Au.h)(uu, null, TK, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapX" in uu,
              get: uu => uu.invertNormalMapX,
              set: (uu, Ru) => {
                uu.invertNormalMapX = Ru
              }
            },
            metadata: Ru
          }, EN, KN), (0, Au.h)(uu, null, WK, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapY" in uu,
              get: uu => uu.invertNormalMapY,
              set: (uu, Ru) => {
                uu.invertNormalMapY = Ru
              }
            },
            metadata: Ru
          }, QN, mN), (0, Au.h)(uu, null, jK, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "twoSidedLighting" in uu,
              get: uu => uu.twoSidedLighting,
              set: (uu, Ru) => {
                uu.twoSidedLighting = Ru
              }
            },
            metadata: Ru
          }, JN, NN), (0, Au.h)(uu, null, HK, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAlphaFresnel" in uu,
              get: uu => uu.useAlphaFresnel,
              set: (uu, Ru) => {
                uu.useAlphaFresnel = Ru
              }
            },
            metadata: Ru
          }, XN, VN), (0, Au.h)(uu, null, dK, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: uu => "useLinearAlphaFresnel" in uu,
              get: uu => uu.useLinearAlphaFresnel,
              set: (uu, Ru) => {
                uu.useLinearAlphaFresnel = Ru
              }
            },
            metadata: Ru
          }, rN, BN), (0, Au.h)(uu, null, bK, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "environmentBRDFTexture" in uu,
              get: uu => uu.environmentBRDFTexture,
              set: (uu, Ru) => {
                uu.environmentBRDFTexture = Ru
              }
            },
            metadata: Ru
          }, xN, SN), (0, Au.h)(uu, null, CK, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceNormalForward" in uu,
              get: uu => uu.forceNormalForward,
              set: (uu, Ru) => {
                uu.forceNormalForward = Ru
              }
            },
            metadata: Ru
          }, pN, TN), (0, Au.h)(uu, null, kK, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: uu => "enableSpecularAntiAliasing" in uu,
              get: uu => uu.enableSpecularAntiAliasing,
              set: (uu, Ru) => {
                uu.enableSpecularAntiAliasing = Ru
              }
            },
            metadata: Ru
          }, WN, jN), (0, Au.h)(uu, null, eK, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useHorizonOcclusion" in uu,
              get: uu => uu.useHorizonOcclusion,
              set: (uu, Ru) => {
                uu.useHorizonOcclusion = Ru
              }
            },
            metadata: Ru
          }, HN, dN), (0, Au.h)(uu, null, AK, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useRadianceOcclusion" in uu,
              get: uu => uu.useRadianceOcclusion,
              set: (uu, Ru) => {
                uu.useRadianceOcclusion = Ru
              }
            },
            metadata: Ru
          }, bN, CN), (0, Au.h)(uu, null, DK, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: uu => "unlit" in uu,
              get: uu => uu.unlit,
              set: (uu, Ru) => {
                uu.unlit = Ru
              }
            },
            metadata: Ru
          }, kN, eN), (0, Au.h)(uu, null, MK, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "applyDecalMapAfterDetailMap" in uu,
              get: uu => uu.applyDecalMapAfterDetailMap,
              set: (uu, Ru) => {
                uu.applyDecalMapAfterDetailMap = Ru
              }
            },
            metadata: Ru
          }, AN, DN), (0, Au.h)(uu, null, IK, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "debugMode" in uu,
              get: uu => uu.debugMode,
              set: (uu, Ru) => {
                uu.debugMode = Ru
              }
            },
            metadata: Ru
          }, MN, IN), (0, Au.h)(uu, null, GK, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "transparencyMode" in uu,
              get: uu => uu.transparencyMode
            },
            metadata: Ru
          }, null, nK), Ru && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ru
          })
        })(), uu.SSS_QUALITY_LOW = 0, uu.SSS_QUALITY_MEDIUM = 1, uu.SSS_QUALITY_HIGH = 2, uu._noiseTextures = {}, uu.ForceGLSL = !1, uu._ShaderLoader = new BR.d((() => [Promise.all([yu.e(307), yu.e(373)]).then((() => yu(61599))), Promise.all([yu.e(312), yu.e(308), yu.e(372), yu.e(377)]).then((() => yu(61611)))]), (() => [Promise.all([yu.e(326), yu.e(328), yu.e(376)]).then((() => yu(61644))), Promise.all([yu.e(326), yu.e(329), yu.e(375), yu.e(378)]).then((() => yu(61656)))])), uu
      })(),
      fR = !1;
    fR || (fR = !0, (0, ou.f)(), (0, wR.c)("BABYLON.OpenPBRMaterial", aR));
    var uy = yu(36858);
    class Ry {
      constructor(uu) {
        this.name = tR.c.NAME_PROCEDURALTEXTURE, this.cp = uu
      }
      register() {
        this.cp._beforeClearStage.registerStep(tR.c.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.cp.proceduralTexturesEnabled) {
          eR.i.StartPerformanceCounter("Procedural textures", this.cp.proceduralTextures.length > 0);
          for (let uu = 0; uu < this.cp.proceduralTextures.length; uu++) {
            const Ru = this.cp.proceduralTextures[uu];
            Ru._shouldRender() && Ru.render()
          }
          eR.i.EndPerformanceCounter("Procedural textures", this.cp.proceduralTextures.length > 0)
        }
      }
    }
    var yy = yu(39899);
    let Ey = (() => {
      var uu;
      let Ru, Eu, Ku, mu, Ju, Nu = Gu.h,
        Xu = [],
        Vu = [],
        ru = [],
        Bu = [],
        xu = [],
        Su = [],
        Tu = [],
        Wu = [],
        ju = [];
      return uu = class extends Nu {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(uu, Ru, yu, Eu) {
          let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, Eu, !Qu), this.isEnabled = ((0, Au.l)(this, Xu), (0, Au.l)(this, Vu, !0)), this.autoClear = ((0, Au.l)(this, ru), (0, Au.l)(this, Bu, !0)), this.onGenerated = (0, Au.l)(this, xu), this.onGeneratedObservable = new uy.b, this.onBeforeGenerationObservable = new uy.b, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, Au.l)(this, Su, void 0), this._drawWrapper = (0, Au.l)(this, Tu), this._textures = {}, this._size = (0, Au.l)(this, Wu, void 0), this._textureType = (0, Au.l)(this, ju), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Ku || Ku instanceof Gu.h ? (this._options = {}, this._fallbackTexture = Ku) : (this._options = Ku, this._fallbackTexture = Ku.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let Nu = (Eu = this.lD() || pu.b.LastCreatedScene)._getComponent(tR.c.NAME_PROCEDURALTEXTURE);
          Nu || (Nu = new Ry(Eu), Eu.BEu(Nu)), this._options.skipSceneRegistration || Eu.proceduralTextures.push(this), this._fullEngine = Eu.eS(), this.name = uu, this.isRenderTarget = !0, this._size = Ru, this._textureType = Ju, this._generateMipMaps = Qu, this._drawWrapper = new yy.b(this._fullEngine), this.setFragment(yu);
          const Hu = this._createRtWrapper(mu, Ru, Qu, Ju);
          this._texture = Hu.texture;
          const du = [];
          du.push(1, 1), du.push(-1, 1), du.push(-1, -1), du.push(1, -1), this._vertexBuffers[zu.h.PositionKind] = new zu.h(this._fullEngine, du, zu.h.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(uu, Ru, yu, Eu) {
          return uu ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Ru, {
            generateMipMaps: yu,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Eu,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Ru, {
            generateMipMaps: yu,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: Eu,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(uu) {
          this._drawWrapper.effect = uu
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((uu => {
            this._contentData = this.readPixels(0, 0, uu), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const uu = this._fullEngine,
            Ru = [];
          Ru.push(0), Ru.push(1), Ru.push(2), Ru.push(0), Ru.push(2), Ru.push(3), this._indexBuffer = uu.createIndexBuffer(Ru)
        }
        _rebuild() {
          const uu = this._vertexBuffers[zu.h.PositionKind];
          uu && uu._rebuild(), this._createIndexBuffer(), this.refreshRate === AR.e.REFRESHRATE_RENDER_ONCE && (this.refreshRate = AR.e.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(uu) {
          if (this.isReady()) return void uu(this);
          const Ru = this.getEffect();
          Ru && Ru.executeWhenCompiled((() => {
            uu(this)
          }))
        }
        isReady() {
          const uu = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Ru = this._getDefines();
          if (this._drawWrapper.effect && Ru === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const Eu = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Ru && (this._cachedDefines = Ru, this._drawWrapper.effect = uu.createEffect(Eu, [zu.h.PositionKind], this._uniforms, this._samplers, Ru, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([yu.e(381).then((() => yu(61721))), this._options.extraInitializationsAsync()]) : await Promise.all([yu.e(382).then((() => yu(61726))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await yu.e(381).then((() => yu(61721))) : await yu.e(382).then((() => yu(61726)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(uu) {
          this._fragment = uu
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(uu) {
          this._refreshRate = uu, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(uu, Ru) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const yu = this._texture.isCube;
          this._rtWrapper.dispose();
          const Eu = this._createRtWrapper(yu, uu, Ru, this._textureType);
          this._texture = Eu.texture, this._size = uu, this._generateMipMaps = Ru
        }
        _checkUniform(uu) {
          -1 === this._uniforms.indexOf(uu) && this._uniforms.push(uu)
        }
        setTexture(uu, Ru) {
          return -1 === this._samplers.indexOf(uu) && this._samplers.push(uu), this._textures[uu] = Ru, this
        }
        setFloat(uu, Ru) {
          return this._checkUniform(uu), this._floats[uu] = Ru, this
        }
        setInt(uu, Ru) {
          return this._checkUniform(uu), this._ints[uu] = Ru, this
        }
        setFloats(uu, Ru) {
          return this._checkUniform(uu), this._floatsArrays[uu] = Ru, this
        }
        setColor3(uu, Ru) {
          return this._checkUniform(uu), this._colors3[uu] = Ru, this
        }
        setColor4(uu, Ru) {
          return this._checkUniform(uu), this._colors4[uu] = Ru, this
        }
        setVector2(uu, Ru) {
          return this._checkUniform(uu), this._vectors2[uu] = Ru, this
        }
        setVector3(uu, Ru) {
          return this._checkUniform(uu), this._vectors3[uu] = Ru, this
        }
        setVector4(uu, Ru) {
          return this._checkUniform(uu), this._vectors4[uu] = Ru, this
        }
        setMatrix(uu, Ru) {
          return this._checkUniform(uu), this._matrices[uu] = Ru, this
        }
        render(uu) {
          const Ru = this.lD();
          if (!Ru) return;
          const yu = this._fullEngine;
          if (yu.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), yu.setState(!1), !this.nodeMaterialSource) {
            for (const uu in this._textures) this._drawWrapper.effect.setTexture(uu, this._textures[uu]);
            for (const uu in this._ints) this._drawWrapper.effect.setInt(uu, this._ints[uu]);
            for (const uu in this._floats) this._drawWrapper.effect.setFloat(uu, this._floats[uu]);
            for (const uu in this._floatsArrays) this._drawWrapper.effect.setArray(uu, this._floatsArrays[uu]);
            for (const uu in this._colors3) this._drawWrapper.effect.setColor3(uu, this._colors3[uu]);
            for (const uu in this._colors4) {
              const Ru = this._colors4[uu];
              this._drawWrapper.effect.setFloat4(uu, Ru.r, Ru.g, Ru.b, Ru.a)
            }
            for (const uu in this._vectors2) this._drawWrapper.effect.setVector2(uu, this._vectors2[uu]);
            for (const uu in this._vectors3) this._drawWrapper.effect.setVector3(uu, this._vectors3[uu]);
            for (const uu in this._vectors4) this._drawWrapper.effect.setVector4(uu, this._vectors4[uu]);
            for (const uu in this._matrices) this._drawWrapper.effect.setMatrix(uu, this._matrices[uu])
          }
          if (!this._texture || !this._rtWrapper) return;
          yu._enableGPUDebugMarkers && yu._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const Eu = yu.currentViewport;
          if (this.isCube)
            for (let Ku = 0; Ku < 6; Ku++) yu.bindFramebuffer(this._rtWrapper, Ku, void 0, void 0, !0), yu.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Ku), this.autoClear && yu.clear(Ru.clearColor, !0, !1, !1), yu.drawElementsType(Qu.d.TriangleFillMode, 0, 6), yu.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let uu = 1;
            this._rtWrapper.is3D ? uu = this._rtWrapper.depth : this._rtWrapper.is2DArray && (uu = this._rtWrapper.layers);
            for (let Eu = 0; Eu < uu; Eu++) {
              if (yu.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, Eu), yu.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== uu ? Eu / (uu - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", Eu);
                for (const uu in this._textures) this._drawWrapper.effect.setTexture(uu, this._textures[uu])
              }
              this.autoClear && yu.clear(Ru.clearColor, !0, !1, !1), yu.drawElementsType(Qu.d.TriangleFillMode, 0, 6), yu.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          Eu && yu.setViewport(Eu), this.isCube && yu.generateMipMapsForCubemap(this._texture, !0), yu._enableGPUDebugMarkers && yu._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Ru = this.getSize(),
            yu = new uu(this.name, Ru.width, this._fragment, this.lD(), this._fallbackTexture, this._generateMipMaps);
          return yu.hasAlpha = this.hasAlpha, yu.level = this.level, yu.coordinatesMode = this.coordinatesMode, yu
        }
        dispose() {
          const uu = this.lD();
          if (!uu) return;
          const Ru = uu.proceduralTextures.indexOf(this);
          Ru >= 0 && uu.proceduralTextures.splice(Ru, 1);
          const yu = this._vertexBuffers[zu.h.PositionKind];
          yu && (yu.dispose(), this._vertexBuffers[zu.h.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const yu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nu[Symbol.metadata] ?? null) : void 0;
        Ru = [(0, Du.K)()], Eu = [(0, Du.K)()], Ku = [(0, Du.K)()], mu = [(0, Du.K)()], Ju = [(0, Du.K)()], (0, Au.h)(uu, null, Ju, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: uu => "refreshRate" in uu,
            get: uu => uu.refreshRate
          },
          metadata: yu
        }, null, Xu), (0, Au.h)(null, null, Ru, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Ru) => {
              uu.isEnabled = Ru
            }
          },
          metadata: yu
        }, Vu, ru), (0, Au.h)(null, null, Eu, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: uu => "autoClear" in uu,
            get: uu => uu.autoClear,
            set: (uu, Ru) => {
              uu.autoClear = Ru
            }
          },
          metadata: yu
        }, Bu, xu), (0, Au.h)(null, null, Ku, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: uu => "_generateMipMaps" in uu,
            get: uu => uu._generateMipMaps,
            set: (uu, Ru) => {
              uu._generateMipMaps = Ru
            }
          },
          metadata: yu
        }, Su, Tu), (0, Au.h)(null, null, mu, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: uu => "_size" in uu,
            get: uu => uu._size,
            set: (uu, Ru) => {
              uu._size = Ru
            }
          },
          metadata: yu
        }, Wu, ju), yu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yu
        })
      })(), uu
    })();

    function Ky(uu) {
      return "texture" in uu
    }

    function Qy(uu) {
      return "value" in uu
    }
    async function my(uu, Ru, Eu) {
      const Ku = [Ru.red, Ru.green, Ru.blue, Ru.alpha],
        Qu = [],
        mu = [];
      for (let yu = 0; yu < 4; yu++) {
        const uu = Ku[yu];
        if (uu)
          if (Ky(uu)) {
            if (uu.sourceChannel < 0 || uu.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Ru = Qu.indexOf(uu.texture); - 1 === Ru && (Ru = Qu.length, Qu.push(uu.texture)), mu[yu] = Ru
          } else {
            if (!Qy(uu)) throw new Error("Invalid channel input configuration");
            if (uu.value < 0 || uu.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            mu[yu] = -1
          }
        else mu[yu] = -1
      }
      let Ju = Ru.outputSize;
      if (!Ju && Qu.length > 0) {
        let uu = 0;
        for (const Ru of Qu) {
          const yu = Ru.getSize(),
            Eu = Math.max(yu.width, yu.height);
          Eu > uu && (uu = Eu, Ju = yu.width === yu.height ? uu : yu)
        }
      }
      Ju = Ju || 512;
      const Nu = [],
        Xu = new Set;
      for (let yu = 0; yu < 4; yu++) {
        const uu = Ku[yu],
          Ru = ["RED", "GREEN", "BLUE", "ALPHA"][yu];
        if (uu && Ky(uu)) {
          Nu.push(`${Ru}_FROM_TEXTURE`);
          const uu = mu[yu];
          Xu.add(uu)
        }
      }
      Xu.forEach((uu => {
        Nu.push(`USE_TEXTURE${uu}`)
      }));
      const Vu = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: Eu.eS().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            Eu.eS().isWebGPU ? await Promise.all([yu.e(379).then((() => yu(61711)))]) : await Promise.all([yu.e(380).then((() => yu(61716)))])
          },
          skipSceneRegistration: !0
        },
        ru = new Ey(uu, Ju, "textureMerger", Eu, Vu);
      ru.refreshRate = -1, ru.defines = Nu.length > 0 ? "#define " + Nu.join("\n#define ") + "\n" : "";
      for (let yu = 0; yu < Qu.length; yu++) Bu = Qu[yu], (xu = ru).uOffset = Bu.uOffset, xu.vOffset = Bu.vOffset, xu.uScale = Bu.uScale, xu.vScale = Bu.vScale, xu.uAng = Bu.uAng, xu.vAng = Bu.vAng, xu.wAng = Bu.wAng, xu.uRotationCenter = Bu.uRotationCenter, xu.vRotationCenter = Bu.vRotationCenter, ru.setTexture(`inputTexture${yu}`, Qu[yu]);
      var Bu, xu;
      for (let yu = 0; yu < 4; yu++) {
        const uu = Ku[yu],
          Ru = ["red", "green", "blue", "alpha"][yu];
        if (uu && Ky(uu)) {
          const Eu = mu[yu];
          ru.setInt(`${Ru}TextureIndex`, Eu), ru.setInt(`${Ru}SourceChannel`, uu.sourceChannel)
        } else {
          let Eu;
          Eu = uu && Qy(uu) ? uu.value : 3 === yu ? 1 : 0, ru.setFloat(`${Ru}ConstantValue`, Eu)
        }
      }
      return await new Promise(((uu, Ru) => {
        ru.executeWhenReady((() => {
          try {
            ru.render(), uu(ru)
          } catch (yu) {
            Ru(yu instanceof Error ? yu : new Error(String(yu)))
          }
        }))
      }))
    }

    function Jy(uu, Ru) {
      return {
        texture: uu,
        sourceChannel: Ru
      }
    }

    function Ny(uu) {
      return {
        value: uu
      }
    }

    function Xy(uu, Ru, yu, Eu) {
      return {
        red: uu,
        green: Ru,
        blue: yu,
        alpha: Eu
      }
    }
    var Vy = yu(39383),
      ry = yu(39487),
      By = yu(36849),
      xy = yu(39541),
      Sy = yu(39471);
    class py {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Ty extends Vy.b {
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
        return !!this._options?.enableMultiview || this.Ep > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new py;
        super(null), void 0 === uu.deterministicLockstep && (uu.deterministicLockstep = !1), void 0 !== uu.timeStep && (this._timeStep = uu.timeStep), void 0 === uu.lockstepMaxSteps && (uu.lockstepMaxSteps = 4), this._options = uu, By.c.SetMatrixPrecision(!!uu.useHighPrecisionMatrix), this._caps = {
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
        }, uu.enableMultiview && (this._caps.multiview = {
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
        }, uu.renderingCanvas && (this._renderingCanvas = uu.renderingCanvas), Mu.e.Log(`Babylon.js v${Vy.b.Version} - Null engine`);
        const Ru = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Ru.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Ru.Blob = function() {})
      }
      createVertexBuffer(uu) {
        const Ru = new ry.c;
        return Ru.references = 1, Ru
      }
      createIndexBuffer(uu) {
        const Ru = new ry.c;
        return Ru.references = 1, Ru
      }
      clear(uu, Ru, yu) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(uu, Ru, yu) {
        this._cachedViewport = uu
      }
      createUniformBuffer(uu) {
        const Ru = new ry.c;
        return Ru.references = 1, Ru.Nr = uu instanceof Array ? uu.length * Float32Array.BYTES_PER_ELEMENT : uu.byteLength, Ru
      }
      createDynamicUniformBuffer(uu) {
        return this.createUniformBuffer(uu)
      }
      updateUniformBuffer(uu, Ru, yu, Eu) {}
      bindUniformBufferBase(uu, Ru, yu) {}
      bindUniformBlock(uu, Ru, yu) {}
      createShaderProgram(uu, Ru, yu, Eu, Ku) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(uu, Ru) {
        return []
      }
      getAttributes(uu, Ru) {
        return []
      }
      bindSamplers(uu) {
        this._currentEffect = null
      }
      enableEffect(uu) {
        uu = null !== uu && (0, Sy.c)(uu) ? uu.effect : uu, this._currentEffect = uu, uu && (uu.onBind && uu.onBind(uu), uu._onBindObservable && uu._onBindObservable.notifyObservers(uu))
      }
      setStateCullFaceType(uu, Ru) {}
      setState(uu) {}
      setIntArray(uu, Ru) {
        return !0
      }
      setIntArray2(uu, Ru) {
        return !0
      }
      setIntArray3(uu, Ru) {
        return !0
      }
      setIntArray4(uu, Ru) {
        return !0
      }
      setFloatArray(uu, Ru) {
        return !0
      }
      setFloatArray2(uu, Ru) {
        return !0
      }
      setFloatArray3(uu, Ru) {
        return !0
      }
      setFloatArray4(uu, Ru) {
        return !0
      }
      setArray(uu, Ru) {
        return !0
      }
      setArray2(uu, Ru) {
        return !0
      }
      setArray3(uu, Ru) {
        return !0
      }
      setArray4(uu, Ru) {
        return !0
      }
      setMatrices(uu, Ru) {
        return !0
      }
      setMatrix3x3(uu, Ru) {
        return !0
      }
      setMatrix2x2(uu, Ru) {
        return !0
      }
      setFloat(uu, Ru) {
        return !0
      }
      setFloat2(uu, Ru, yu) {
        return !0
      }
      setFloat3(uu, Ru, yu, Eu) {
        return !0
      }
      setBool(uu, Ru) {
        return !0
      }
      setFloat4(uu, Ru, yu, Eu, Ku) {
        return !0
      }
      setAlphaMode(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[yu] !== uu && (this.alphaState.setAlphaBlend(0 !== uu, 0), Ru || this.setDepthWrite(0 === uu), this._alphaMode[yu] = uu)
      }
      bindBuffers(uu, Ru, yu) {}
      wipeCaches(uu) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, uu && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(uu, Ru, yu, Eu) {}
      drawElementsType(uu, Ru, yu, Eu) {}
      drawArraysType(uu, Ru, yu, Eu) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(uu) {}
      createTexture(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          mu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Ju = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const Nu = new DR.c(this, 1),
          Xu = String(uu);
        return Nu.url = Xu, Nu.generateMipMaps = !Ru, Nu.samplingMode = Ku, Nu.invertY = yu, Nu.baseWidth = this._options.textureSize, Nu.baseHeight = this._options.textureSize, Nu.width = this._options.textureSize, Nu.height = this._options.textureSize, Ju && (Nu.format = Ju), mu && (Nu._buffer = mu), Nu.isReady = !0, Qu && setTimeout((() => {
          Qu(Nu)
        })), this._internalTexturesCache.push(Nu), Nu
      }
      _createHardwareRenderTargetWrapper(uu, Ru, yu) {
        const Eu = new xy.b(uu, Ru, yu, this);
        return this._renderTargetWrapperCache.push(Eu), Eu
      }
      createRenderTargetTexture(uu, Ru) {
        const yu = this._createHardwareRenderTargetWrapper(!1, !1, uu),
          Eu = {};
        void 0 !== Ru && "object" === typeof Ru ? (Eu.generateMipMaps = Ru.generateMipMaps, Eu.generateDepthBuffer = void 0 === Ru.generateDepthBuffer || Ru.generateDepthBuffer, Eu.generateStencilBuffer = Eu.generateDepthBuffer && Ru.generateStencilBuffer, Eu.type = void 0 === Ru.type ? 0 : Ru.type, Eu.samplingMode = void 0 === Ru.samplingMode ? 3 : Ru.samplingMode) : (Eu.generateMipMaps = Ru, Eu.generateDepthBuffer = !0, Eu.generateStencilBuffer = !1, Eu.type = 0, Eu.samplingMode = 3);
        const Ku = new DR.c(this, 5);
        yu.setTexture(Ku);
        const Qu = uu.width || uu,
          mu = uu.height || uu;
        return yu._generateDepthBuffer = Eu.generateDepthBuffer, yu._generateStencilBuffer = !!Eu.generateStencilBuffer, Ku.baseWidth = Qu, Ku.baseHeight = mu, Ku.width = Qu, Ku.height = mu, Ku.isReady = !0, Ku.samples = 1, Ku.generateMipMaps = !!Eu.generateMipMaps, Ku.samplingMode = Eu.samplingMode, Ku.type = Eu.type, this._internalTexturesCache.push(Ku), yu
      }
      createMultiviewRenderTargetTexture(uu, Ru) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const yu = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: uu,
            height: Ru
          }),
          Eu = new DR.c(this, 5, !0);
        return Eu.baseWidth = uu, Eu.baseHeight = Ru, Eu.width = uu, Eu.height = Ru, Eu.isMultiview = !0, Eu.isReady = !0, Eu.format = 5, Eu.samples = 1, yu.setTextures(Eu), yu
      }
      bindMultiviewFramebuffer(uu) {
        this.bindFramebuffer(uu, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(uu, Ru) {
        const yu = this._createHardwareRenderTargetWrapper(!1, !0, uu),
          Eu = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Ru
          };
        Eu.generateStencilBuffer = Eu.generateDepthBuffer && Eu.generateStencilBuffer, (1 !== Eu.type || this._caps.textureFloatLinearFiltering) && (2 !== Eu.type || this._caps.textureHalfFloatLinearFiltering) || (Eu.samplingMode = 1), yu._generateDepthBuffer = Eu.generateDepthBuffer, yu._generateStencilBuffer = !!Eu.generateStencilBuffer;
        const Ku = new DR.c(this, 5);
        return Ku.baseWidth = uu, Ku.baseHeight = uu, Ku.width = uu, Ku.height = uu, Ku.isReady = !0, Ku.isCube = !0, Ku.samples = 1, Ku.generateMipMaps = !!Eu.generateMipMaps, Ku.samplingMode = Eu.samplingMode, Ku.type = Eu.type, this._internalTexturesCache.push(Ku), yu
      }
      updateTextureSamplingMode(uu, Ru) {
        Ru.samplingMode = uu
      }
      createRawTexture(uu, Ru, yu, Eu, Ku, Qu, mu) {
        let Ju = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          Nu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Xu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Vu = new DR.c(this, 3);
        return Vu.baseWidth = Ru, Vu.baseHeight = yu, Vu.width = Ru, Vu.height = yu, Vu.format = Eu, Vu.generateMipMaps = Ku, Vu.samplingMode = mu, Vu.invertY = Qu, Vu._compression = Ju, Vu.type = Nu, Vu._useSRGBBuffer = Xu, this._doNotHandleContextLost || (Vu._bufferView = uu), Vu
      }
      updateRawTexture(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        uu && (uu._bufferView = Ru, uu.format = yu, uu.invertY = Eu, uu._compression = Ku, uu.type = Qu, uu._useSRGBBuffer = mu)
      }
      bindFramebuffer(uu, Ru, yu, Eu, Ku) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = uu, this._currentFramebuffer = null, this._cachedViewport && !Ku && this.setViewport(this._cachedViewport, yu, Eu)
      }
      unBindFramebuffer(uu) {
        let Ru = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Ru && Ru(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(uu) {
        const Ru = new ry.c;
        return Ru.references = 1, Ru.Nr = 1, Ru
      }
      updateDynamicTexture(uu, Ru, yu) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(uu) {}
      updateDynamicIndexBuffer(uu, Ru) {}
      updateDynamicVertexBuffer(uu, Ru, yu, Eu) {}
      _bindTextureDirectly(uu, Ru) {
        return this._boundTexturesCache[this._activeChannel] !== Ru && (this._boundTexturesCache[this._activeChannel] = Ru, !0)
      }
      _bindTexture(uu, Ru) {
        uu < 0 || this._bindTextureDirectly(0, Ru)
      }
      _deleteBuffer(uu) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(uu) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(uu, Ru, yu, Eu, Ku) {}
      _uploadDataToTextureDirectly(uu, Ru) {}
      _uploadArrayBufferViewToTexture(uu, Ru) {}
      _uploadImageToTexture(uu, Ru) {}
    }
    yu(39599), yu(39637), yu(39591);
    async function Wy(uu) {
      const Ru = uu.getInternalTexture();
      if (!Ru || 1 !== Ru.source) return null;
      if (Ru.invertY) {
        const Ru = uu.lD()?.eS();
        if (!(Ru instanceof Ty)) return null
      }
      const yu = Ru._buffer;
      let Eu, Qu = uu.mimeType;
      try {
        yu ? ArrayBuffer.isView(yu) ? Eu = yu.buffer.slice(yu.byteOffset, yu.byteOffset + yu.byteLength) : yu instanceof ArrayBuffer ? Eu = yu : yu instanceof Blob ? (Eu = await yu.arrayBuffer(), Qu = yu.type || Qu) : "string" === typeof yu ? (Eu = await Ku.Tools.LoadFileAsync(yu), Qu = (0, Nu.b)(yu) || Qu) : "undefined" !== typeof HTMLImageElement && yu instanceof HTMLImageElement && (Eu = await Ku.Tools.LoadFileAsync(yu.src), Qu = (0, Nu.b)(yu.src) || Qu) : (Eu = await Ku.Tools.LoadFileAsync(Ru.url), Qu = (0, Nu.b)(Ru.url) || Qu)
      } catch {
        return null
      }
      if (Eu && !Qu && Ru.url) {
        const uu = Ru.url.match(/^data:([^;,]+)/);
        Qu = uu ? uu[1] : (0, Nu.b)(Ru.url)
      }
      return Eu && Qu ? {
        data: Eu,
        mimeType: Qu
      } : null
    }
    const jy = 1e-6,
      Hy = new Tu.Color3(.04, .04, .04),
      dy = 1024,
      by = Tu.Color3.White(),
      Cy = Tu.Color3.BlackReadOnly;

    function ky(uu) {
      switch (uu) {
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

    function ey(uu, Ru, yu) {
      if (Ru < Hy.r) return 0;
      const Eu = Hy.r,
        Ku = uu * yu / (1 - Hy.r) + Ru - 2 * Hy.r,
        Qu = Ku * Ku - 4 * Eu * (Hy.r - Ru);
      return Hu.Clamp((-Ku + Math.sqrt(Qu)) / (2 * Eu), 0, 1)
    }

    function Ay(uu) {
      const Ru = uu.diffuseColor.toLinearSpace(uu.lD().eS().useExactSrgbConversions).scale(.5),
        yu = uu.alpha,
        Eu = function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Lu.n(0, 1),
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Lu.n(0, .1),
            Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Lu.n(0, .1),
            Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Lu.n(1300, .1);
          return function(uu, Ru, yu, Eu, Ku) {
            return (1 - uu) * (1 - uu) * (1 - uu) * Ru + 3 * (1 - uu) * (1 - uu) * uu * yu + 3 * (1 - uu) * uu * uu * Eu + uu * uu * uu * Ku
          }(Math.pow(uu / Ku.x, .333333), Ru.y, yu.y, Eu.y, Ku.y)
        }(Hu.Clamp(uu.specularPower, 0, dy));
      return {
        baseColorFactor: [Ru.r, Ru.g, Ru.b, yu],
        metallicFactor: 0,
        roughnessFactor: Eu
      }
    }

    function Dy(uu, Ru) {
      Ru.needAlphaBlending() ? uu.alphaMode = "BLEND" : Ru.needAlphaTesting() && (uu.alphaMode = "MASK", uu.alphaCutoff = Ru.alphaCutOff)
    }

    function My(uu, Ru, yu) {
      const Eu = new Uint8Array(uu * Ru * 4);
      for (let Ku = 0; Ku < Eu.length; Ku += 4) Eu[Ku] = Eu[Ku + 1] = Eu[Ku + 2] = Eu[Ku + 3] = 255;
      return Cu.d.CreateRGBATexture(Eu, uu, Ru, yu)
    }

    function Iy(uu) {
      if (uu instanceof Uint8Array) {
        const Ru = uu.length,
          yu = new Float32Array(uu.length);
        for (let Eu = 0; Eu < Ru; ++Eu) yu[Eu] = uu[Eu] / 255;
        return yu
      }
      if (uu instanceof Float32Array) return uu;
      throw new Error("Unsupported pixel format!")
    }
    class Gy {
      constructor(uu) {
        this._exporter = uu, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(uu) {
        return uu ? this._textureMap.get(uu.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(uu, Ru) {
        const yu = Ay(uu),
          Eu = {
            name: uu.name
          };
        if (null == uu.backFaceCulling || uu.backFaceCulling || (uu.twoSidedLighting || Ku.Tools.Warn(uu.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), Eu.doubleSided = !0), Ru) {
          const Ru = [],
            Ku = uu.diffuseTexture;
          Ku && Ru.push(this.exportTextureAsync(Ku).then((uu => {
            uu && (yu.baseColorTexture = uu)
          })));
          const Qu = uu.bumpTexture;
          Qu && Ru.push(this.exportTextureAsync(Qu).then((uu => {
            uu && (Eu.normalTexture = uu, 1 !== Qu.level && (Eu.normalTexture.scale = Qu.level))
          })));
          const mu = uu.emissiveTexture;
          mu && (Eu.emissiveFactor = [1, 1, 1], Ru.push(this.exportTextureAsync(mu).then((uu => {
            uu && (Eu.emissiveTexture = uu)
          }))));
          const Ju = uu.ambientTexture;
          Ju && Ru.push(this.exportTextureAsync(Ju).then((uu => {
            if (uu) {
              const Ru = {
                index: uu.index
              };
              Eu.occlusionTexture = Ru
            }
          }))), Ru.length > 0 && (this._exporter._materialNeedsUVsSet.add(uu), await Promise.all(Ru))
        }(uu.alpha < 1 || uu.opacityTexture) && (uu.alphaMode === ku.c.ALPHA_COMBINE ? Eu.alphaMode = "BLEND" : Ku.Tools.Warn(uu.name + ": glTF 2.0 does not support alpha mode: " + uu.alphaMode.toString())), uu.emissiveColor && !uu.emissiveColor.equalsWithEpsilon(Cy, jy) && (Eu.emissiveFactor = uu.emissiveColor.AEu()), Eu.pbrMetallicRoughness = yu, Dy(Eu, uu), await this._finishMaterialAsync(Eu, uu);
        const Qu = this._exporter._materials;
        return Qu.push(Eu), Qu.length - 1
      }
      async _finishMaterialAsync(uu, Ru) {
        const yu = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", uu, Ru),
          Eu = [];
        for (const Ku of yu) Eu.push(this.exportTextureAsync(Ku));
        await Promise.all(Eu), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", uu, Ru)
      }
      _resizeTexturesToSameDimensions(uu, Ru, yu) {
        const Eu = uu ? uu.getSize() : {
            width: 0,
            height: 0
          },
          Ku = Ru ? Ru.getSize() : {
            width: 0,
            height: 0
          };
        let Qu, mu;
        return Eu.width < Ku.width ? (Qu = uu && uu instanceof bu.e ? du.h.CreateResizedCopy(uu, Ku.width, Ku.height, !0) : My(Ku.width, Ku.height, yu), mu = Ru) : Eu.width > Ku.width ? (mu = Ru && Ru instanceof bu.e ? du.h.CreateResizedCopy(Ru, Eu.width, Eu.height, !0) : My(Eu.width, Eu.height, yu), Qu = uu) : (Qu = uu, mu = Ru), {
          texture1: Qu,
          texture2: mu
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(uu, Ru, yu) {
        const Eu = new Array;
        if (!uu && !Ru) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Ku = uu ? uu.lD() : Ru ? Ru.lD() : null;
        if (Ku) {
          const Qu = this._resizeTexturesToSameDimensions(uu, Ru, Ku),
            mu = Qu.texture1?.getSize();
          let Ju, Nu;
          const Xu = mu.width,
            Vu = mu.height,
            ru = await Qu.texture1.readPixels(),
            Bu = await Qu.texture2.readPixels();
          if (!ru) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (Ju = Iy(ru), !Bu) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          Nu = Iy(Bu);
          const xu = Nu.byteLength,
            Su = new Uint8Array(xu),
            pu = new Uint8Array(xu),
            Wu = 4,
            ju = new Tu.Color3(0, 0, 0);
          let Hu = 0,
            du = 0;
          for (let uu = 0; uu < Vu; ++uu)
            for (let Ru = 0; Ru < Xu; ++Ru) {
              const Eu = (Xu * uu + Ru) * Wu,
                mu = {
                  diffuseColor: new Tu.Color3(Ju[Eu], Ju[Eu + 1], Ju[Eu + 2]).toLinearSpace(Ku.eS().useExactSrgbConversions).multiply(yu.diffuseColor),
                  specularColor: new Tu.Color3(Nu[Eu], Nu[Eu + 1], Nu[Eu + 2]).toLinearSpace(Ku.eS().useExactSrgbConversions).multiply(yu.specularColor),
                  glossiness: Nu[Eu + 3] * yu.glossiness
                },
                Vu = this._convertSpecularGlossinessToMetallicRoughness(mu);
              ju.r = Math.max(ju.r, Vu.baseColor.r), ju.g = Math.max(ju.g, Vu.baseColor.g), ju.b = Math.max(ju.b, Vu.baseColor.b), Hu = Math.max(Hu, Vu.metallic), du = Math.max(du, Vu.roughness), pu[Eu] = 255 * Vu.baseColor.r, pu[Eu + 1] = 255 * Vu.baseColor.g, pu[Eu + 2] = 255 * Vu.baseColor.b, pu[Eu + 3] = Qu.texture1.hasAlpha ? 255 * Ju[Eu + 3] : 255, Su[Eu] = 0, Su[Eu + 1] = 255 * Vu.roughness, Su[Eu + 2] = 255 * Vu.metallic, Su[Eu + 3] = 255
            }
          const bu = {
            baseColor: ju,
            metallic: Hu,
            roughness: du
          };
          let Cu = !1,
            ku = !1;
          for (let uu = 0; uu < Vu; ++uu)
            for (let Ru = 0; Ru < Xu; ++Ru) {
              const yu = (Xu * uu + Ru) * Wu;
              pu[yu] /= bu.baseColor.r > jy ? bu.baseColor.r : 1, pu[yu + 1] /= bu.baseColor.g > jy ? bu.baseColor.g : 1, pu[yu + 2] /= bu.baseColor.b > jy ? bu.baseColor.b : 1;
              const Eu = Tu.Color3.FromInts(pu[yu], pu[yu + 1], pu[yu + 2]).toGammaSpace(Ku.eS().useExactSrgbConversions);
              pu[yu] = 255 * Eu.r, pu[yu + 1] = 255 * Eu.g, pu[yu + 2] = 255 * Eu.b, Eu.equalsWithEpsilon(by, jy) || (ku = !0), Su[yu + 1] /= bu.roughness > jy ? bu.roughness : 1, Su[yu + 2] /= bu.metallic > jy ? bu.metallic : 1;
              Tu.Color3.FromInts(255, Su[yu + 1], Su[yu + 2]).equalsWithEpsilon(by, jy) || (Cu = !0)
            }
          return Cu && Eu.push((0, eu.EncodeImageAsync)(Su, Xu, Vu).then((uu => {
            bu.metallicRoughnessTextureData = uu
          }))), ku && Eu.push((0, eu.EncodeImageAsync)(pu, Xu, Vu).then((uu => {
            bu.baseColorTextureData = uu
          }))), await Promise.all(Eu).then((() => bu))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(uu) {
        const Ru = this._getPerceivedBrightness(uu.diffuseColor),
          yu = this._getPerceivedBrightness(uu.specularColor),
          Eu = 1 - this._getMaxComponent(uu.specularColor),
          Ku = ey(Ru, yu, Eu),
          Qu = uu.diffuseColor.scale(Eu / (1 - Hy.r) / Math.max(1 - Ku, jy)),
          mu = uu.specularColor.subtract(Hy.scale(1 - Ku)).scale(1 / Math.max(Ku, jy));
        let Ju = Tu.Color3.Lerp(Qu, mu, Ku * Ku);
        Ju = Ju.clampToRef(0, 1, Ju);
        return {
          baseColor: Ju,
          metallic: Ku,
          roughness: 1 - uu.glossiness
        }
      }
      _getPerceivedBrightness(uu) {
        return Math.sqrt(.299 * uu.r * uu.r + .587 * uu.g * uu.g + .114 * uu.b * uu.b)
      }
      _getMaxComponent(uu) {
        return Math.max(uu.r, Math.max(uu.g, uu.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        const Xu = [],
          Vu = {
            baseColor: uu,
            metallic: Ru,
            roughness: yu
          };
        if (Nu)
          if (mu instanceof aR) {
            if (mu.geometryOpacityTexture) {
              const uu = Eu && Eu.getInternalTexture() ? Eu.getInternalTexture().uniqueId : 0,
                Ru = mu.geometryOpacityTexture && mu.geometryOpacityTexture.getInternalTexture() ? mu.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                yu = Number(`${uu}${Ru}`),
                Ku = this._textureMap.get(yu);
              Ku ? Ju.baseColorTexture = Ku : Xu.push(my("baseColorOpacityTexture", Xy(Eu ? Jy(Eu, 0) : Ny(1), Eu ? Jy(Eu, 1) : Ny(1), Eu ? Jy(Eu, 2) : Ny(1), Jy(mu.geometryOpacityTexture, 0)), mu.lD()).then((async uu => {
                const Ru = await this.exportTextureAsync(uu, yu);
                Ru && (Ju.baseColorTexture = Ru)
              })))
            } else Eu && Xu.push(this.exportTextureAsync(Eu).then((uu => {
              uu && (Ju.baseColorTexture = uu)
            })));
            if (mu._useMetallicFromMetallicTextureBlue && Ku) Xu.push(this.exportTextureAsync(Ku).then((uu => {
              uu && (Ju.metallicRoughnessTexture = uu)
            })));
            else if (Qu || Ku) {
              const uu = Ku && Ku.getInternalTexture() ? Ku.getInternalTexture().uniqueId : 0,
                Ru = Qu && Qu.getInternalTexture() ? Qu.getInternalTexture().uniqueId : 0,
                yu = Number(`${uu}${Ru}`),
                Eu = this._textureMap.get(yu);
              Eu ? Ju.metallicRoughnessTexture = Eu : Xu.push(my("MetalRoughTexture", Xy(mu.ambientOcclusionTexture ? Jy(mu.ambientOcclusionTexture, 0) : Ny(1), Qu ? Jy(Qu, 0) : Ny(1), Ku ? Jy(Ku, 0) : Ny(1)), mu.lD()).then((async uu => {
                const Ru = await this.exportTextureAsync(uu, yu);
                Ru && (Ju.metallicRoughnessTexture = Ru)
              })))
            }
          } else Eu && Xu.push(this.exportTextureAsync(Eu).then((uu => {
            uu && (Ju.baseColorTexture = uu)
          }))), Ku && Xu.push(this.exportTextureAsync(Ku).then((uu => {
            uu && (Ju.metallicRoughnessTexture = uu)
          })));
        return Xu.length > 0 && (this._exporter._materialNeedsUVsSet.add(mu), await Promise.all(Xu)), Vu
      }
      _getTextureSampler(uu) {
        const Ru = {};
        if (!uu || !(uu instanceof bu.e)) return Ru;
        const yu = this._getGLTFTextureWrapMode(uu.wrapU);
        10497 !== yu && (Ru.wrapS = yu);
        const Eu = this._getGLTFTextureWrapMode(uu.wrapV);
        switch (10497 !== Eu && (Ru.wrapT = Eu), uu.samplingMode) {
          case bu.e.LINEAR_LINEAR:
            Ru.magFilter = 9729, Ru.minFilter = 9729;
            break;
          case bu.e.LINEAR_NEAREST:
            Ru.magFilter = 9729, Ru.minFilter = 9728;
            break;
          case bu.e.NEAREST_LINEAR:
            Ru.magFilter = 9728, Ru.minFilter = 9729;
            break;
          case bu.e.NEAREST_LINEAR_MIPLINEAR:
            Ru.magFilter = 9728, Ru.minFilter = 9987;
            break;
          case bu.e.NEAREST_NEAREST:
            Ru.magFilter = 9728, Ru.minFilter = 9728;
            break;
          case bu.e.NEAREST_LINEAR_MIPNEAREST:
            Ru.magFilter = 9728, Ru.minFilter = 9985;
            break;
          case bu.e.LINEAR_NEAREST_MIPNEAREST:
            Ru.magFilter = 9729, Ru.minFilter = 9984;
            break;
          case bu.e.LINEAR_NEAREST_MIPLINEAR:
            Ru.magFilter = 9729, Ru.minFilter = 9986;
            break;
          case bu.e.NEAREST_NEAREST_MIPLINEAR:
            Ru.magFilter = 9728, Ru.minFilter = 9986;
            break;
          case bu.e.LINEAR_LINEAR_MIPLINEAR:
            Ru.magFilter = 9729, Ru.minFilter = 9987;
            break;
          case bu.e.LINEAR_LINEAR_MIPNEAREST:
            Ru.magFilter = 9729, Ru.minFilter = 9985;
            break;
          case bu.e.NEAREST_NEAREST_MIPNEAREST:
            Ru.magFilter = 9728, Ru.minFilter = 9984
        }
        return Ru
      }
      _getGLTFTextureWrapMode(uu) {
        switch (uu) {
          case bu.e.WRAP_ADDRESSMODE:
            return 10497;
          case bu.e.CLAMP_ADDRESSMODE:
            return 33071;
          case bu.e.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Ku.Tools.Error(`Unsupported Texture Wrap Mode ${uu}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(uu, Ru, yu) {
        const Eu = {
            diffuseColor: uu._albedoColor,
            specularColor: uu._reflectivityColor,
            glossiness: uu._microSurface
          },
          Ku = uu._albedoTexture,
          Qu = uu._reflectivityTexture,
          mu = uu._useMicroSurfaceFromReflectivityMapAlpha;
        if (Qu && !mu) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Ku || Qu) && yu) {
          this._exporter._materialNeedsUVsSet.add(uu);
          const yu = this._exportTextureSampler(Ku || Qu),
            mu = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Ku, Qu, Eu),
            Ju = this._exporter._textures;
          if (mu.baseColorTextureData) {
            const uu = await this._exportImageAsync(`baseColor${Ju.length}`, mu.baseColorTextureData);
            Ru.baseColorTexture = this._exportTextureInfo(uu, yu, Ku?.coordinatesIndex)
          }
          if (mu.metallicRoughnessTextureData) {
            const uu = await this._exportImageAsync(`metallicRoughness${Ju.length}`, mu.metallicRoughnessTextureData);
            Ru.metallicRoughnessTexture = this._exportTextureInfo(uu, yu, Qu?.coordinatesIndex)
          }
          return mu
        }
        return this._convertSpecularGlossinessToMetallicRoughness(Eu)
      }
      async exportPBRMaterialAsync(uu, Ru) {
        const yu = {},
          Eu = {
            name: uu.name
          },
          Ku = uu.isMetallicWorkflow();
        if (Ku) {
          const Ru = uu._albedoColor,
            Eu = uu.alpha;
          Ru && (yu.baseColorFactor = [Ru.r, Ru.g, Ru.b, Eu])
        }
        const Qu = Ku ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(uu._albedoColor, uu._metallic, uu._roughness, uu._albedoTexture, uu._metallicTexture, uu._metallicTexture, uu, yu, Ru) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(uu, yu, Ru);
        await this._setMetallicRoughnessPbrMaterialAsync(Qu, uu, Eu, yu, Ru), await this._finishMaterialAsync(Eu, uu);
        const mu = this._exporter._materials;
        return mu.push(Eu), mu.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(uu, Ru, yu, Eu, Qu) {
        if (Dy(yu, Ru), uu.baseColor.equalsWithEpsilon(by, jy) && Hu.WithinEpsilon(Ru.alpha, 1, jy) || (Eu.baseColorFactor = [uu.baseColor.r, uu.baseColor.g, uu.baseColor.b, Ru.alpha]), null != uu.metallic && 1 !== uu.metallic && (Eu.metallicFactor = uu.metallic), null != uu.roughness && 1 !== uu.roughness && (Eu.roughnessFactor = uu.roughness), null == Ru.backFaceCulling || Ru.backFaceCulling || (Ru._twoSidedLighting || Ku.Tools.Warn(Ru.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), yu.doubleSided = !0), Qu) {
          const uu = [],
            Ku = Ru instanceof CR ? Ru._bumpTexture : Ru.geometryNormalTexture;
          Ku && uu.push(this.exportTextureAsync(Ku).then((uu => {
            uu && (yu.normalTexture = uu, 1 !== Ku.level && (yu.normalTexture.scale = Ku.level))
          })));
          const Qu = Ru instanceof CR ? Ru._ambientTexture : Ru.ambientOcclusionTexture;
          Qu && uu.push(new Promise((async uu => {
            if (Ru instanceof aR && Eu.metallicRoughnessTexture) {
              const Ru = this._exportTextureSampler(Qu),
                yu = this._exporter._textures[Eu.metallicRoughnessTexture.index].source,
                Ku = this._exportTextureInfo(yu, Ru, Qu.coordinatesIndex);
              return this._textureMap.set(Qu.uniqueId, Ku), this._exporter._extensionsPostExportTextures("exporter", Ku, Qu), uu(Ku)
            }
            return uu(await this.exportTextureAsync(Qu))
          })).then((async uu => {
            if (uu) {
              const Eu = {
                index: uu.index,
                texCoord: uu.texCoord,
                extensions: uu.extensions
              };
              yu.occlusionTexture = Eu, Eu.strength = Ru instanceof CR ? Ru._ambientTextureStrength : Ru.ambientOcclusionTexture.level
            }
          })));
          const mu = Ru instanceof CR ? Ru._emissiveTexture : Ru.emissionColorTexture;
          mu && uu.push(this.exportTextureAsync(mu).then((uu => {
            uu && (yu.emissiveTexture = uu)
          }))), uu.length > 0 && (this._exporter._materialNeedsUVsSet.add(Ru), await Promise.all(uu))
        }
        const mu = Ru instanceof CR ? Ru._emissiveColor : Ru.emissionColor;
        mu.equalsWithEpsilon(Cy, jy) || (yu.emissiveFactor = mu.AEu()), yu.pbrMetallicRoughness = Eu
      }
      async exportOpenPBRMaterialAsync(uu, Ru) {
        const yu = {},
          Eu = {
            name: uu.name
          },
          Ku = uu.baseColor,
          Qu = uu.geometryOpacity;
        Ku && (yu.baseColorFactor = [Ku.r, Ku.g, Ku.b, Qu]);
        const mu = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(uu.baseColor, uu.baseMetalness, uu.specularRoughness, uu.baseColorTexture, uu.baseMetalnessTexture, uu.specularRoughnessTexture, uu, yu, Ru);
        await this._setMetallicRoughnessPbrMaterialAsync(mu, uu, Eu, yu, Ru), await this._finishMaterialAsync(Eu, uu);
        const Ju = this._exporter._materials;
        return Ju.push(Eu), Ju.length - 1
      }
      async exportTextureAsync(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          yu = this._textureMap.get(Ru ?? uu.uniqueId);
        if (yu) return yu;
        const Eu = this._exportTextureSampler(uu),
          Ku = await this._exportTextureImageAsync(uu);
        return yu = this._exportTextureInfo(Ku, Eu, uu.coordinatesIndex), this._textureMap.set(Ru ?? uu.uniqueId, yu), this._exporter._extensionsPostExportTextures("exporter", yu, uu), yu
      }
      async _exportTextureImageAsync(uu) {
        const Ru = uu.mimeType ?? "none",
          yu = this._internalTextureToImage,
          Eu = uu.getInternalTexture().uniqueId;
        yu[Eu] = yu[Eu] || {};
        let Qu = yu[Eu][Ru];
        return void 0 === Qu && (Qu = (async () => {
          const yu = await Wy(uu);
          if (yu && ky(yu.mimeType) && ("none" === Ru || yu.mimeType === Ru)) return await this._exportImageAsync(uu.name, new Blob([yu.data], {
            type: yu.mimeType
          }));
          let Eu = "image/png";
          "none" !== Ru && (ky(Ru) ? Eu = Ru : (Eu = "image/png", Ku.Tools.Warn(`Unsupported media type: ${Ru}. Exporting texture as PNG.`)));
          const Qu = uu.getSize(),
            mu = await (0, du.g)(uu),
            Ju = await (0, eu.EncodeImageAsync)(mu, Qu.width, Qu.height, Eu);
          return await this._exportImageAsync(uu.name, Ju)
        })(), yu[Eu][Ru] = Qu), await Qu
      }
      async _exportImageAsync(uu, Ru) {
        const yu = this._exporter._images;
        let Eu;
        if (this._exporter._shouldUseGlb) {
          Eu = {
            name: uu,
            mimeType: Ru.type,
            bufferView: void 0
          };
          const yu = await Ru.arrayBuffer(),
            Ku = this._exporter._bufferManager.createBufferView(new Uint8Array(yu));
          this._exporter._bufferManager.setBufferView(Eu, Ku)
        } else {
          const Qu = uu.replace(/\.\/|\/|\.\\|\\/g, "_"),
            mu = function(uu) {
              switch (uu) {
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
            }(Ru.type);
          let Ju = Qu + mu;
          yu.some((uu => uu.uri === Ju)) && (Ju = `${Qu}_${Ku.Tools.RandomId()}${mu}`), Eu = {
            name: uu,
            uri: Ju
          }, this._exporter._imageData[Ju] = Ru
        }
        return yu.push(Eu), yu.length - 1
      }
      _exportTextureInfo(uu, Ru, yu) {
        const Eu = this._exporter._textures;
        let Ku = Eu.findIndex((yu => yu.sampler == Ru && yu.source === uu)); - 1 === Ku && (Ku = Eu.length, Eu.push({
          source: uu,
          sampler: Ru
        }));
        const Qu = {
          index: Ku
        };
        return yu && (Qu.texCoord = yu), Qu
      }
      _exportTextureSampler(uu) {
        const Ru = this._getTextureSampler(uu),
          yu = this._exporter._samplers,
          Eu = yu.findIndex((uu => uu.minFilter === Ru.minFilter && uu.magFilter === Ru.magFilter && uu.wrapS === Ru.wrapS && uu.wrapT === Ru.wrapT));
        return -1 !== Eu ? Eu : (yu.push(Ru), yu.length - 1)
      }
    }
    var Uy = yu(39625),
      ny = yu(39770);
    (0, ny.d)();
    var sy = yu(36833);
    const ty = Eu.Matrix.Compose(new Eu.MS(-1, 1, 1), Eu.Quaternion.Identity(), Eu.MS.Zero());

    function ly(uu, Ru) {
      if (!(uu instanceof ru.c)) return !1;
      if (Ru) {
        if (!uu.getWorldMatrix().equalsWithEpsilon(Eu.Matrix.IdentityReadOnly, sy.d)) return !1
      } else {
        if (!uu.getWorldMatrix().multiplyToRef(ty, Eu.TmpVectors.Matrix[0]).equalsWithEpsilon(Eu.Matrix.IdentityReadOnly, sy.d)) return !1
      }
      return !(uu instanceof Bu.e && uu.geometry)
    }
    const gy = Eu.MS.ZeroReadOnly,
      cy = Eu.Quaternion.Identity(),
      Ly = Eu.MS.OneReadOnly,
      zy = new Eu.MS(-1, 1, 1);

    function Fy(uu, Ru) {
      const {
        byteOffset: yu,
        byteStride: Eu,
        type: Ku,
        normalized: Qu
      } = uu, mu = uu.getSize(), Ju = Ru.reduce(((uu, Ru) => Ru.getTotalVertices() > uu ? Ru.getTotalVertices() : uu), -Number.MAX_VALUE);
      return {
        byteOffset: yu,
        byteStride: Eu,
        componentCount: mu,
        type: Ku,
        count: Ju * mu,
        normalized: Qu,
        totalVertices: Ju,
        kind: uu.getKind()
      }
    }

    function wy(uu) {
      switch (uu) {
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

    function Zy(uu) {
      switch (uu) {
        case Vu.d.PositionKind:
        case Vu.d.NormalKind:
        case Vu.d.TangentKind:
        case Vu.d.ColorKind:
        case Vu.d.MatricesIndicesKind:
        case Vu.d.MatricesIndicesExtraKind:
        case Vu.d.MatricesWeightsKind:
        case Vu.d.MatricesWeightsExtraKind:
        case Vu.d.UVKind:
        case Vu.d.UV2Kind:
        case Vu.d.UV3Kind:
        case Vu.d.UV4Kind:
        case Vu.d.UV5Kind:
        case Vu.d.UV6Kind:
          return !0
      }
      return !1
    }

    function hy(uu) {
      const Ru = Math.sqrt(uu.x * uu.x + uu.y * uu.y + uu.z * uu.z);
      Ru > 0 && (uu.x /= Ru, uu.y /= Ru, uu.z /= Ru)
    }

    function Py(uu) {
      return uu.x *= -1, uu
    }

    function iy(uu) {
      if (uu.x * uu.x + uu.y * uu.y > .5) {
        const Ru = Math.abs(uu.x),
          yu = Math.abs(uu.y);
        if (Ru > yu) {
          const yu = Math.sign(uu.x);
          uu.x = Ru, uu.y *= -yu, uu.z *= -yu, uu.w *= yu
        } else {
          const Ru = Math.sign(uu.y);
          uu.x *= -Ru, uu.y = yu, uu.z *= Ru, uu.w *= -Ru
        }
      } else {
        const Ru = Math.abs(uu.z),
          yu = Math.abs(uu.w);
        if (Ru > yu) {
          const yu = Math.sign(uu.z);
          uu.x *= -yu, uu.y *= yu, uu.z = Ru, uu.w *= -yu
        } else {
          const Ru = Math.sign(uu.w);
          uu.x *= Ru, uu.y *= -Ru, uu.z *= -Ru, uu.w = yu
        }
      }
      return uu
    }

    function Yy(uu) {
      uu.muu(-uu.z, uu.w, uu.x, -uu.y)
    }

    function oy(uu, Ru) {
      const yu = Eu.MS.FromArrayToRef(Ru.translation || [0, 0, 0], 0, Eu.TmpVectors.MS[0]),
        Ku = Eu.Quaternion.FromArrayToRef(Ru.rotation || [0, 0, 0, 1], 0, Eu.TmpVectors.Quaternion[0]),
        Qu = Eu.Matrix.ComposeToRef(Ly, Ku, yu, Eu.TmpVectors.Matrix[0]),
        mu = Eu.MS.FromArrayToRef(uu.translation || [0, 0, 0], 0, Eu.TmpVectors.MS[2]),
        Ju = Eu.Quaternion.FromArrayToRef(uu.rotation || [0, 0, 0, 1], 0, Eu.TmpVectors.Quaternion[1]),
        Nu = Eu.Matrix.ComposeToRef(Ly, Ju, mu, Eu.TmpVectors.Matrix[1]);
      Qu.multiplyToRef(Nu, Nu), Nu.decompose(void 0, Ku, yu), yu.equalsWithEpsilon(gy, sy.d) ? delete Ru.translation : Ru.translation = yu.AEu(), Ku.equalsWithEpsilon(cy, sy.d) ? delete Ru.rotation : Ru.rotation = Ku.AEu(), Ru.scale && delete Ru.scale
    }

    function qy(uu, Ru) {
      if (!(Ru instanceof ru.c)) return !1;
      if (!(1 === Ru.getChildren().length && 0 === uu.getChildren().length && uu.parent === Ru)) return !1;
      const yu = uu.lD(),
        Eu = uu instanceof ny.f && !yu.useRightHandedSystem ? zy : Ly;
      return !!Ru.pp.equalsWithEpsilon(Eu, sy.d) || (Mu.e.Warn(`Cannot collapse node ${uu.name} into parent node ${Ru.name} with modified scaling.`), !1)
    }

    function Oy(uu) {
      if (uu instanceof Array) {
        const Ru = new Float32Array(uu);
        return new Uint8Array(Ru.buffer, Ru.byteOffset, Ru.byteLength)
      }
      return ArrayBuffer.isView(uu) ? new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength) : new Uint8Array(uu)
    }

    function vy(uu, Ru) {
      for (const [yu, Eu] of Object.entries(uu)) {
        const Ku = Ru[yu];
        (Array.isArray(Eu) && Array.isArray(Ku) && ay(Eu, Ku) || Eu === Ku) && delete uu[yu]
      }
      return uu
    }

    function ay(uu, Ru) {
      return uu.length === Ru.length && uu.every(((uu, yu) => uu === Ru[yu]))
    }
    const fy = new Map([
      [Int8Array, (uu, Ru, yu) => uu.setInt8(Ru, yu)],
      [Uint8Array, (uu, Ru, yu) => uu.setUint8(Ru, yu)],
      [Uint8ClampedArray, (uu, Ru, yu) => uu.setUint8(Ru, yu)],
      [Int16Array, (uu, Ru, yu) => uu.setInt16(Ru, yu, !0)],
      [Uint16Array, (uu, Ru, yu) => uu.setUint16(Ru, yu, !0)],
      [Int32Array, (uu, Ru, yu) => uu.setInt32(Ru, yu, !0)],
      [Uint32Array, (uu, Ru, yu) => uu.setUint32(Ru, yu, !0)],
      [Float32Array, (uu, Ru, yu) => uu.setFloat32(Ru, yu, !0)],
      [Float64Array, (uu, Ru, yu) => uu.setFloat64(Ru, yu, !0)]
    ]);
    class uE {
      writeTypedArray(uu) {
        this._checkGrowBuffer(uu.byteLength);
        const Ru = fy.get(uu.constructor);
        for (let yu = 0; yu < uu.length; yu++) Ru(this._dataView, this._byteOffset, uu[yu]), this._byteOffset += uu.BYTES_PER_ELEMENT
      }
      constructor(uu) {
        this._data = new Uint8Array(uu), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(uu) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, uu), this._byteOffset++
      }
      writeInt8(uu) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, uu), this._byteOffset++
      }
      writeInt16(uu) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, uu, !0), this._byteOffset += 2
      }
      writeUInt16(uu) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, uu, !0), this._byteOffset += 2
      }
      writeInt32(uu) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, uu, !0), this._byteOffset += 4
      }
      writeUInt32(uu) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, uu, !0), this._byteOffset += 4
      }
      writeFloat32(uu) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, uu, !0), this._byteOffset += 4
      }
      writeFloat64(uu) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, uu, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(uu) {
        const Ru = this.byteOffset + uu;
        if (Ru > this._data.byteLength) {
          const uu = new Uint8Array(2 * Ru);
          uu.set(this._data), this._data = uu, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function RE(uu) {
      return uu % 4 === 0 ? 4 : uu % 2 === 0 ? 2 : 1
    }
    class yE {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(uu) {
        let Ru = 0;
        this._bufferViewToData.forEach((uu => {
          Ru += uu.byteLength
        }));
        const yu = new uE(Ru),
          Eu = Array.from(this._bufferViewToData.keys()).sort(((uu, Ru) => RE(Ru.byteLength) - RE(uu.byteLength)));
        for (const Ku of Eu) {
          Ku.byteOffset = yu.byteOffset, uu.push(Ku);
          const Ru = uu.length - 1,
            Eu = this.getPropertiesWithBufferView(Ku);
          for (const uu of Eu) uu.bufferView = Ru;
          yu.writeTypedArray(this._bufferViewToData.get(Ku)), this._bufferViewToData.delete(Ku)
        }
        return yu.getOutputData()
      }
      createBufferView(uu, Ru) {
        const yu = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: uu.byteLength,
          byteStride: Ru
        };
        return this._bufferViewToData.set(yu, uu), yu
      }
      createAccessor(uu, Ru, yu, Eu, Ku, Qu, mu) {
        this._verifyBufferView(uu);
        const Ju = {
          bufferView: void 0,
          componentType: yu,
          count: Eu,
          type: Ru,
          min: Qu?.min,
          max: Qu?.max,
          normalized: mu,
          byteOffset: Ku
        };
        return this.setBufferView(Ju, uu), this._accessorToBufferView.set(Ju, uu), Ju
      }
      setBufferView(uu, Ru) {
        this._verifyBufferView(Ru);
        this.getPropertiesWithBufferView(Ru).push(uu)
      }
      removeBufferView(uu) {
        const Ru = this.getPropertiesWithBufferView(uu);
        for (const yu of Ru) void 0 !== yu.bufferView && delete yu.bufferView;
        this._bufferViewToData.delete(uu), this._bufferViewToProperties.delete(uu), this._accessorToBufferView.forEach(((Ru, yu) => {
          Ru === uu && (void 0 !== yu.byteOffset && delete yu.byteOffset, this._accessorToBufferView.delete(yu))
        }))
      }
      getBufferView(uu) {
        const Ru = this._accessorToBufferView.get(uu);
        return this._verifyBufferView(Ru), Ru
      }
      getPropertiesWithBufferView(uu) {
        return this._verifyBufferView(uu), this._bufferViewToProperties.set(uu, this._bufferViewToProperties.get(uu) ?? []), this._bufferViewToProperties.get(uu)
      }
      getData(uu) {
        return this._verifyBufferView(uu), this._bufferViewToData.get(uu)
      }
      _verifyBufferView(uu) {
        if (void 0 === uu || !this._bufferViewToData.has(uu)) throw new Error(`BufferView ${uu} not found in BufferManager.`)
      }
    }
    var EE = yu(39774);
    (0, EE.g)();
    var KE = yu(40026);
    (0, KE.f)();
    var QE = yu(39827),
      mE = yu(40668);
    (0, mE.f)();
    let JE = (() => {
      var uu;
      let Ru, yu, Eu = [],
        Ku = [],
        Qu = [],
        mu = [];
      return uu = class {
        get influence() {
          return this._influence
        }
        set influence(uu) {
          if (this._influence === uu) return;
          const Ru = this._influence;
          this._influence = uu, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Ru || 0 === uu)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(uu) {
          this._animationPropertiesOverride = uu
        }
        constructor(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            Ju = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = uu, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new uy.b, this._onDataLayoutChanged = new uy.b, this.id = (0, Au.l)(this, Eu, void 0), this.morphTargetManager = ((0, Au.l)(this, Ku), (0, Au.l)(this, Qu, null)), this._animationPropertiesOverride = ((0, Au.l)(this, mu), null), this.id = uu, this.morphTargetManager = Ju, this._scene = yu || pu.b.LastCreatedScene, this.influence = Ru, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        vmu(uu) {
          const Ru = this.hasPositions;
          this._positions = uu, Ru !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(uu) {
          const Ru = this.hasNormals;
          this._normals = uu, Ru !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(uu) {
          const Ru = this.hasTangents;
          this._tangents = uu, Ru !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(uu) {
          const Ru = this.hasUVs;
          this._uvs = uu, Ru !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(uu) {
          const Ru = this.hasUV2s;
          this._uv2s = uu, Ru !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(uu) {
          const Ru = this.hasColors;
          this._colors = uu, Ru !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Ru = kR.c.Clone((() => new uu(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Ru._positions = this._positions, Ru._normals = this._normals, Ru._tangents = this._tangents, Ru._uvs = this._uvs, Ru._uv2s = this._uv2s, Ru._colors = this._colors, Ru
        }
        serialize() {
          const uu = {};
          return uu.name = this.name, uu.influence = this.influence, null != this.id && (uu.id = this.id), uu.uniqueId = this.uniqueId, uu.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (uu.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (uu.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (uu.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (uu.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (uu.colors = Array.prototype.slice.call(this.getColors())), kR.c.AppendSerializedAnimations(this, uu), uu
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Ru, yu) {
          let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Ku = new uu(Ru.name, Ru.influence, yu, Eu);
          if (Ku.vmu(Ru.positions), null != Ru.id && (Ku.id = Ru.id), Ru.normals && Ku.setNormals(Ru.normals), Ru.tangents && Ku.setTangents(Ru.tangents), Ru.uvs && Ku.setUVs(Ru.uvs), Ru.uv2s && Ku.setUV2s(Ru.uv2s), Ru.colors && Ku.setColors(Ru.colors), Ru.animations) {
            for (let uu = 0; uu < Ru.animations.length; uu++) {
              const yu = Ru.animations[uu],
                Eu = (0, wR.b)("BABYLON.Animation");
              Eu && Ku.animations.push(Eu.Parse(yu))
            }
            Ru.autoAnimate && yu && yu.beginAnimation(Ku, Ru.autoAnimateFrom, Ru.autoAnimateTo, Ru.autoAnimateLoop, Ru.autoAnimateSpeed || 1)
          }
          return Ku
        }
        static FromMesh(Ru, yu, Eu) {
          yu || (yu = Ru.name);
          const Ku = new uu(yu, Eu, Ru.lD(), Ru.morphTargetManager);
          return Ku.vmu(Ru.getVerticesData(zu.h.PositionKind)), Ru.isVerticesDataPresent(zu.h.NormalKind) && Ku.setNormals(Ru.getVerticesData(zu.h.NormalKind)), Ru.isVerticesDataPresent(zu.h.TangentKind) && Ku.setTangents(Ru.getVerticesData(zu.h.TangentKind)), Ru.isVerticesDataPresent(zu.h.UVKind) && Ku.setUVs(Ru.getVerticesData(zu.h.UVKind)), Ru.isVerticesDataPresent(zu.h.UV2Kind) && Ku.setUV2s(Ru.getVerticesData(zu.h.UV2Kind)), Ru.isVerticesDataPresent(zu.h.ColorKind) && Ku.setColors(Ru.getVerticesData(zu.h.ColorKind)), Ku
        }
      }, (() => {
        const Ju = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Ru = [(0, Du.K)()], yu = [(0, Du.K)()], (0, Au.h)(null, null, Ru, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: uu => "id" in uu,
            get: uu => uu.id,
            set: (uu, Ru) => {
              uu.id = Ru
            }
          },
          metadata: Ju
        }, Eu, Ku), (0, Au.h)(null, null, yu, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: uu => "morphTargetManager" in uu,
            get: uu => uu.morphTargetManager,
            set: (uu, Ru) => {
              uu.morphTargetManager = Ru
            }
          },
          metadata: Ju
        }, Qu, mu), Ju && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ju
        })
      })(), uu
    })();
    var NE, XE = yu(40741),
      VE = yu(39823);
    ! function(uu) {
      uu[uu.INTANGENT = 0] = "INTANGENT", uu[uu.OUTTANGENT = 1] = "OUTTANGENT"
    }(NE || (NE = {}));
    class rE {
      static _IsTransformable(uu) {
        return uu && (uu instanceof ru.c || uu instanceof EE.c || uu instanceof VE.e)
      }
      static _CreateNodeAnimation(uu, Ru, yu, Eu, Qu) {
        if (this._IsTransformable(uu)) {
          const mu = [],
            Ju = [],
            Nu = Ru.getKeys(),
            Xu = rE._CalculateMinMaxKeyFrames(Nu),
            Vu = rE._DeduceInterpolation(Nu, yu, Eu),
            ru = Vu.interpolationType,
            Bu = Vu.shouldBakeAnimation;
          if (Bu ? rE._CreateBakedAnimation(uu, Ru, yu, Xu.min, Xu.max, Ru.framePerSecond, Qu, mu, Ju, Xu, Eu) : "LINEAR" === ru || "STEP" === ru ? rE._CreateLinearOrStepAnimation(uu, Ru, yu, mu, Ju, Eu) : "CUBICSPLINE" === ru ? rE._CreateCubicSplineAnimation(uu, Ru, yu, mu, Ju, Eu) : rE._CreateBakedAnimation(uu, Ru, yu, Xu.min, Xu.max, Ru.framePerSecond, Qu, mu, Ju, Xu, Eu), mu.length && Ju.length) {
            return {
              inputs: mu,
              outputs: Ju,
              samplerInterpolation: ru,
              inputsMin: Bu ? Xu.min : Ku.Tools.FloatRound(Xu.min / Ru.framePerSecond),
              inputsMax: Bu ? Xu.max : Ku.Tools.FloatRound(Xu.max / Ru.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(uu) {
        let Ru = null,
          yu = "VEC3",
          Eu = !1;
        const Qu = uu.targetProperty.split(".");
        switch (Qu[0]) {
          case "pp":
            Ru = "scale";
            break;
          case "position":
            Ru = "translation";
            break;
          case "rotation":
            yu = "VEC4", Ru = "rotation";
            break;
          case "rotationQuaternion":
            yu = "VEC4", Eu = !0, Ru = "rotation";
            break;
          case "influence":
            yu = "SCALAR", Ru = "weights";
            break;
          default:
            Ku.Tools.Error(`Unsupported animatable property ${Qu[0]}`)
        }
        return Ru ? {
          animationChannelTargetPath: Ru,
          dataAccessorType: yu,
          useQuaternion: Eu
        } : (Ku.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
        let ru;
        if (rE._IsTransformable(uu) && uu.animations)
          for (const Bu of uu.animations) {
            if (Vu && !Vu(Bu)) continue;
            const Ku = rE._DeduceAnimationInfo(Bu);
            Ku && (ru = {
              name: Bu.name,
              samplers: [],
              channels: []
            }, rE._AddAnimation(`${Bu.name}`, Bu.hasRunningRuntimeAnimations ? Ru : ru, uu, Bu, Ku.dataAccessorType, Ku.animationChannelTargetPath, Eu, Qu, mu, Ju, Ku.useQuaternion, Nu, Xu), ru.samplers.length && ru.channels.length && yu.push(ru))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
        let ru;
        if (uu instanceof XE.b) {
          const Ku = uu.morphTargetManager;
          if (Ku)
            for (let Bu = 0; Bu < Ku.numTargets; ++Bu) {
              const xu = Ku.getTarget(Bu);
              for (const Su of xu.animations) {
                if (Vu && !Vu(Su)) continue;
                const xu = new mE.d(`${Su.name}`, "influence", Su.framePerSecond, Su.dataType, Su.WQ, Su.enableBlending),
                  pu = [],
                  Tu = Su.getKeys();
                for (let uu = 0; uu < Tu.length; ++uu) {
                  const Ru = Tu[uu];
                  for (let uu = 0; uu < Ku.numTargets; ++uu) uu == Bu ? pu.push(Ru) : pu.push({
                    frame: Ru.frame,
                    value: 0
                  })
                }
                xu.setKeys(pu, !0);
                const Wu = rE._DeduceAnimationInfo(xu);
                Wu && (ru = {
                  name: xu.name,
                  samplers: [],
                  channels: []
                }, rE._AddAnimation(Su.name, Su.hasRunningRuntimeAnimations ? Ru : ru, uu, xu, Wu.dataAccessorType, Wu.animationChannelTargetPath, Eu, Qu, mu, Ju, Wu.useQuaternion, Nu, Xu, Ku.numTargets), ru.samplers.length && ru.channels.length && yu.push(ru))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        let Vu;
        if (uu.animationGroups) {
          const ru = uu.animationGroups;
          for (const Bu of ru) {
            const ru = new Map,
              xu = new Map,
              Su = new Set,
              pu = Bu.to - Bu.from;
            Vu = {
              name: Bu.name,
              channels: [],
              samplers: []
            };
            for (let Ru = 0; Ru < Bu.targetedAnimations.length; ++Ru) {
              const Xu = Bu.targetedAnimations[Ru],
                pu = Xu.target,
                Tu = Xu.animation;
              if (Nu && !Nu(Tu)) continue;
              const Wu = Ju.has(pu);
              if (this._IsTransformable(pu) || 1 === pu.length && this._IsTransformable(pu[0])) {
                const uu = rE._DeduceAnimationInfo(Xu.animation);
                if (uu) {
                  const Ru = this._IsTransformable(pu) ? pu : this._IsTransformable(pu[0]) ? pu[0] : null;
                  Ru && rE._AddAnimation(`${Tu.name}`, Vu, Ru, Tu, uu.dataAccessorType, uu.animationChannelTargetPath, yu, Eu, Ku, Qu, uu.useQuaternion, mu, Wu)
                }
              } else if (pu instanceof JE || 1 === pu.length && pu[0] instanceof JE) {
                if (rE._DeduceAnimationInfo(Xu.animation)) {
                  const Ru = pu instanceof JE ? pu : pu[0];
                  if (Ru) {
                    const yu = uu.morphTargetManagers.find((uu => {
                      for (let yu = 0; yu < uu.numTargets; ++yu)
                        if (uu.getTarget(yu) === Ru) return !0;
                      return !1
                    }));
                    if (yu) {
                      const Eu = uu.meshes.find((uu => uu.morphTargetManager === yu));
                      Eu && (ru.has(Eu) || ru.set(Eu, new Map), ru.get(Eu)?.set(Ru, Tu), Su.add(Eu), xu.set(Eu, Tu))
                    }
                  }
                }
              }
            }
            Su.forEach((uu => {
              const Ru = uu.morphTargetManager;
              let Ju = null;
              const Nu = [],
                Xu = xu.get(uu).getKeys(),
                Su = Xu.length;
              for (let yu = 0; yu < Su; ++yu)
                for (let Eu = 0; Eu < Ru.numTargets; ++Eu) {
                  const Ku = Ru.getTarget(Eu),
                    Qu = ru.get(uu);
                  if (Qu) {
                    const Ru = Qu.get(Ku);
                    Ru ? (Ju || (Ju = new mE.d(`${Bu.name}_${uu.name}_MorphWeightAnimation`, "influence", Ru.framePerSecond, mE.d.ANIMATIONTYPE_FLOAT, Ru.WQ, Ru.enableBlending)), Nu.push(Ru.getKeys()[yu])) : Nu.push({
                      frame: Bu.from + pu / Su * yu,
                      value: Ku.influence,
                      inTangent: Xu[0].inTangent ? 0 : void 0,
                      outTangent: Xu[0].outTangent ? 0 : void 0
                    })
                  }
                }
              Ju.setKeys(Nu, !0);
              const Tu = rE._DeduceAnimationInfo(Ju);
              Tu && rE._AddAnimation(`${Bu.name}_${uu.name}_MorphWeightAnimation`, Vu, uu, Ju, Tu.dataAccessorType, Tu.animationChannelTargetPath, yu, Eu, Ku, Qu, Tu.useQuaternion, mu, !1, Ru?.numTargets)
            })), Vu.channels.length && Vu.samplers.length && (Xu?.set(Bu, Ru.length), Ru.push(Vu))
          }
        }
      }
      static _AddAnimation(uu, Ru, yu, Ku, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su) {
        const pu = rE._CreateNodeAnimation(yu, Ku, mu, ru, Bu);
        let Tu, Wu, ju, Hu, du, bu;
        if (pu) {
          if (Su) {
            let uu, Ru = 0;
            const yu = [];
            for (; pu.inputs.length > 0;) uu = pu.inputs.shift(), Ru % Su == 0 && yu.push(uu), Ru++;
            pu.inputs = yu
          }
          const uu = Ju.get(yu),
            Ku = new Float32Array(pu.inputs);
          Tu = Nu.createBufferView(Ku), Wu = Nu.createAccessor(Tu, "SCALAR", 5126, pu.inputs.length, void 0, {
            min: [pu.inputsMin],
            max: [pu.inputsMax]
          }), Vu.push(Wu), ju = Vu.length - 1;
          const Xu = new Eu.Quaternion,
            ru = new Eu.MS,
            Bu = new Eu.MS,
            Cu = yu instanceof EE.c,
            ku = wy(Qu),
            eu = new Float32Array(pu.outputs.length * ku);
          pu.outputs.forEach((function(uu, Ru) {
            let yu = uu;
            switch (mu) {
              case "translation":
                xu && (Eu.MS.FromArrayToRef(uu, 0, Bu), Py(Bu), Bu.toArray(yu));
                break;
              case "rotation":
                4 === uu.length ? Eu.Quaternion.FromArrayToRef(uu, 0, Xu) : (yu = new Array(4), Eu.MS.FromArrayToRef(uu, 0, ru), Eu.Quaternion.FromEulerVectorToRef(ru, Xu)), xu && (iy(Xu), Cu && Yy(Xu)), Xu.toArray(yu)
            }
            eu.set(yu, Ru * ku)
          })), Tu = Nu.createBufferView(eu), Wu = Nu.createAccessor(Tu, Qu, 5126, pu.outputs.length), Vu.push(Wu), Hu = Vu.length - 1, du = {
            interpolation: pu.samplerInterpolation,
            input: ju,
            output: Hu
          }, Ru.samplers.push(du), bu = {
            sampler: Ru.samplers.length - 1,
            target: {
              node: uu,
              path: mu
            }
          }, Ru.channels.push(bu)
        }
      }
      static _CreateBakedAnimation(uu, Ru, yu, Qu, mu, Ju, Nu, Xu, Vu, ru, Bu) {
        let xu;
        const Su = Eu.Quaternion.Identity();
        let pu, Tu, Wu, ju, Hu, du = null,
          bu = null;
        ru.min = Ku.Tools.FloatRound(Qu / Ju);
        const Cu = Ru.getKeys();
        for (let Eu = 0, ku = Cu.length; Eu < ku; ++Eu) {
          if (Tu = Cu[Eu], Eu + 1 < ku)
            if (Wu = Cu[Eu + 1], Tu.value.equals && Tu.value.equals(Wu.value) || Tu.value === Wu.value) {
              if (0 !== Eu) continue;
              Hu = Tu.frame
            } else Hu = Wu.frame;
          else {
            if (ju = Cu[Eu - 1], Tu.value.equals && Tu.value.equals(ju.value) || Tu.value === ju.value) continue;
            Hu = mu
          }
          if (Hu)
            for (let Eu = Tu.frame; Eu <= Hu; Eu += Nu) {
              if (pu = Ku.Tools.FloatRound(Eu / Ju), pu === du) continue;
              du = pu, bu = pu;
              const Qu = {
                key: 0,
                repeatCount: 0,
                WQ: Ru.WQ
              };
              xu = Ru._interpolate(Eu, Qu), rE._SetInterpolatedValue(uu, xu, pu, Ru, yu, Su, Xu, Vu, Bu)
            }
        }
        bu && (ru.max = bu)
      }
      static _ConvertFactorToVector3OrQuaternion(uu, Ru, yu, Qu, mu) {
        const Ju = rE._GetBasePositionRotationOrScale(Ru, Qu, mu),
          Nu = yu.targetProperty.split("."),
          Xu = Nu ? Nu[1] : "",
          Vu = mu ? Eu.Quaternion.FromArray(Ju).normalize() : Eu.MS.FromArray(Ju);
        switch (Xu) {
          case "x":
          case "y":
          case "z":
            Vu[Xu] = uu;
            break;
          case "w":
            Vu.w = uu;
            break;
          default:
            Ku.Tools.Error(`glTFAnimation: Unsupported component name "${Xu}"!`)
        }
        return Vu
      }
      static _SetInterpolatedValue(uu, Ru, yu, Ku, Qu, mu, Ju, Nu, Xu) {
        let Vu;
        Ju.push(yu), "weights" !== Qu ? (Ku.dataType === mE.d.ANIMATIONTYPE_FLOAT && (Ru = this._ConvertFactorToVector3OrQuaternion(Ru, uu, Ku, Qu, Xu)), "rotation" === Qu ? (Xu ? mu = Ru : (Vu = Ru, Eu.Quaternion.RotationYawPitchRollToRef(Vu.y, Vu.x, Vu.z, mu)), Nu.push(mu.AEu())) : (Vu = Ru, Nu.push(Vu.AEu()))) : Nu.push([Ru])
      }
      static _CreateLinearOrStepAnimation(uu, Ru, yu, Eu, Ku, Qu) {
        for (const mu of Ru.getKeys()) Eu.push(mu.frame / Ru.framePerSecond), rE._AddKeyframeValue(mu, Ru, Ku, yu, uu, Qu)
      }
      static _CreateCubicSplineAnimation(uu, Ru, yu, Eu, Ku, Qu) {
        Ru.getKeys().forEach((function(mu) {
          Eu.push(mu.frame / Ru.framePerSecond), rE._AddSplineTangent(NE.INTANGENT, Ku, yu, "CUBICSPLINE", mu, Qu), rE._AddKeyframeValue(mu, Ru, Ku, yu, uu, Qu), rE._AddSplineTangent(NE.OUTTANGENT, Ku, yu, "CUBICSPLINE", mu, Qu)
        }))
      }
      static _GetBasePositionRotationOrScale(uu, Ru, yu) {
        let Ku;
        if ("rotation" === Ru)
          if (yu) {
            Ku = (uu.rotationQuaternion ?? Eu.Quaternion.Identity()).AEu()
          } else {
            Ku = (uu.rotation ?? Eu.MS.Zero()).AEu()
          }
        else if ("translation" === Ru) {
          Ku = (uu.position ?? Eu.MS.Zero()).AEu()
        } else {
          Ku = (uu.pp ?? Eu.MS.One()).AEu()
        }
        return Ku
      }
      static _AddKeyframeValue(uu, Ru, yu, Qu, mu, Ju) {
        let Nu;
        const Xu = Ru.dataType;
        if (Xu === mE.d.ANIMATIONTYPE_VECTOR3) {
          let Ru = uu.value.AEu();
          if ("rotation" === Qu) {
            const uu = Eu.MS.FromArray(Ru);
            Ru = Eu.Quaternion.RotationYawPitchRoll(uu.y, uu.x, uu.z).AEu()
          }
          yu.push(Ru)
        } else if (Xu === mE.d.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Qu) yu.push([uu.value]);
          else if (Nu = this._ConvertFactorToVector3OrQuaternion(uu.value, mu, Ru, Qu, Ju), Nu) {
            if ("rotation" === Qu) {
              const uu = Ju ? Nu : Eu.Quaternion.RotationYawPitchRoll(Nu.y, Nu.x, Nu.z).normalize();
              yu.push(uu.AEu())
            }
            yu.push(Nu.AEu())
          }
        } else Xu === mE.d.ANIMATIONTYPE_QUATERNION ? yu.push(uu.value.normalize().AEu()) : Ku.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(uu, Ru, yu) {
        let Eu, Ku, Qu = !1;
        if ("rotation" === Ru && !yu) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let mu = 0, Ju = uu.length; mu < Ju; ++mu)
          if (Ku = uu[mu], Ku.inTangent || Ku.outTangent)
            if (Eu) {
              if ("CUBICSPLINE" !== Eu) {
                Eu = "LINEAR", Qu = !0;
                break
              }
            } else Eu = "CUBICSPLINE";
        else if (Eu) {
          if ("CUBICSPLINE" === Eu || Ku.interpolation && 1 === Ku.interpolation && "STEP" !== Eu) {
            Eu = "LINEAR", Qu = !0;
            break
          }
        } else Eu = Ku.interpolation && 1 === Ku.interpolation ? "STEP" : "LINEAR";
        return Eu || (Eu = "LINEAR"), {
          interpolationType: Eu,
          shouldBakeAnimation: Qu
        }
      }
      static _AddSplineTangent(uu, Ru, yu, Ku, Qu, mu) {
        let Ju;
        const Nu = uu === NE.INTANGENT ? Qu.inTangent : Qu.outTangent;
        if ("CUBICSPLINE" === Ku) {
          if ("rotation" === yu)
            if (Nu)
              if (mu) Ju = Nu.AEu();
              else {
                const uu = Nu;
                Ju = Eu.Quaternion.RotationYawPitchRoll(uu.y, uu.x, uu.z).AEu()
              }
          else Ju = [0, 0, 0, 0];
          else Ju = "weights" === yu ? Nu ? [Nu] : [0] : Nu ? Nu.AEu() : [0, 0, 0];
          Ru.push(Ju)
        }
      }
      static _CalculateMinMaxKeyFrames(uu) {
        let Ru = 1 / 0,
          yu = -1 / 0;
        return uu.forEach((function(uu) {
          Ru = Math.min(Ru, uu.frame), yu = Math.max(yu, uu.frame)
        })), {
          min: Ru,
          max: yu
        }
      }
    }

    function BE(uu, Ru, yu, Qu, mu, Ju) {
      const Nu = {
          attributes: {},
          influence: uu.influence,
          name: uu.name
        },
        Xu = Ru.geometry;
      if (!Xu) return Ku.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), Nu;
      const ru = Ju ? -1 : 1,
        Bu = Eu.MS.Zero();
      let xu, Su;
      if (uu.hasPositions) {
        const Qu = uu.getPositions(),
          Ju = Xu.getVerticesData(Vu.d.PositionKind);
        if (Ju) {
          const uu = new Float32Array(Ju.length),
            Ru = [1 / 0, 1 / 0, 1 / 0],
            Ku = [-1 / 0, -1 / 0, -1 / 0];
          Su = Ju.length / 3, xu = 0;
          for (let yu = xu; yu < Su; ++yu) {
            const mu = Eu.MS.FromArray(Ju, 3 * yu);
            Eu.MS.FromArray(Qu, 3 * yu).subtractToRef(mu, Bu), Bu.x *= ru, Ru[0] = Math.min(Ru[0], Bu.x), Ku[0] = Math.max(Ku[0], Bu.x), Ru[1] = Math.min(Ru[1], Bu.y), Ku[1] = Math.max(Ku[1], Bu.y), Ru[2] = Math.min(Ru[2], Bu.z), Ku[2] = Math.max(Ku[2], Bu.z), uu[3 * yu] = Bu.x, uu[3 * yu + 1] = Bu.y, uu[3 * yu + 2] = Bu.z
          }
          const Xu = yu.createBufferView(uu, 12),
            Vu = yu.createAccessor(Xu, "VEC3", 5126, Qu.length / 3, 0, {
              min: Ru,
              max: Ku
            });
          mu.push(Vu), Nu.attributes.POSITION = mu.length - 1
        } else Ku.Tools.Warn(`Morph target positions for mesh ${Ru.name} were not exported. Mesh does not have position vertex data`)
      }
      if (uu.hasNormals) {
        const Qu = uu.getNormals(),
          Ju = Xu.getVerticesData(Vu.d.NormalKind);
        if (Ju) {
          const uu = new Float32Array(Ju.length);
          Su = Ju.length / 3, xu = 0;
          for (let yu = xu; yu < Su; ++yu) {
            const Ru = Eu.MS.FromArray(Ju, 3 * yu).normalize();
            Eu.MS.FromArray(Qu, 3 * yu).normalize().subtractToRef(Ru, Bu), uu[3 * yu] = Bu.x * ru, uu[3 * yu + 1] = Bu.y, uu[3 * yu + 2] = Bu.z
          }
          const Ru = yu.createBufferView(uu, 12),
            Ku = yu.createAccessor(Ru, "VEC3", 5126, Qu.length / 3, 0);
          mu.push(Ku), Nu.attributes.NORMAL = mu.length - 1
        } else Ku.Tools.Warn(`Morph target normals for mesh ${Ru.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (uu.hasTangents) {
        const Qu = uu.getTangents(),
          Ju = Xu.getVerticesData(Vu.d.TangentKind);
        if (Ju) {
          Su = Ju.length / 4;
          const uu = new Float32Array(3 * Su);
          xu = 0;
          for (let yu = xu; yu < Su; ++yu) {
            const Ru = Eu.MS.FromArray(Ju, 4 * yu);
            hy(Ru);
            const Ku = Eu.MS.FromArray(Qu, 3 * yu);
            hy(Ku), Ku.subtractToRef(Ru, Bu), uu[3 * yu] = Bu.x * ru, uu[3 * yu + 1] = Bu.y, uu[3 * yu + 2] = Bu.z
          }
          const Ru = yu.createBufferView(uu, 12),
            Ku = yu.createAccessor(Ru, "VEC3", 5126, Su, 0);
          mu.push(Ku), Nu.attributes.TANGENT = mu.length - 1
        } else Ku.Tools.Warn(`Morph target tangents for mesh ${Ru.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (uu.hasColors) {
        const Qu = uu.getColors(),
          Ju = Xu.getVerticesData(Vu.d.ColorKind),
          ru = Xu.getVertexBuffer(Vu.d.ColorKind);
        if (Ju && ru) {
          const uu = ru.getSize();
          Su = Ju.length / uu;
          const Ru = new Float32Array(Su * uu);
          xu = 0;
          for (let yu = xu; yu < Su; ++yu)
            if (3 === uu) {
              const Ku = Eu.MS.FromArray(Ju, yu * uu);
              Eu.MS.FromArray(Qu, yu * uu).subtractToRef(Ku, Bu), Ru[3 * yu] = Bu.x, Ru[3 * yu + 1] = Bu.y, Ru[3 * yu + 2] = Bu.z
            } else if (4 === uu) {
            const Ku = new Eu.Vector4,
              mu = Eu.Vector4.FromArray(Ju, yu * uu);
            Eu.Vector4.FromArray(Qu, yu * uu).subtractToRef(mu, Ku), Ru[4 * yu] = Ku.x, Ru[4 * yu + 1] = Ku.y, Ru[4 * yu + 2] = Ku.z, Ru[4 * yu + 3] = Ku.w
          } else Ku.Tools.Warn(`Unsupported number of components for color attribute: ${uu}`);
          const Xu = yu.createBufferView(Ru, 4 * uu),
            Vu = yu.createAccessor(Xu, 3 === uu ? "VEC3" : "VEC4", 5126, Su, 0);
          mu.push(Vu), Nu.attributes.COLOR_0 = mu.length - 1
        } else Ku.Tools.Warn(`Morph target colors for mesh ${Ru.name} were not exported. Mesh does not have colors vertex data`)
      }
      return Nu
    }
    var xE = yu(41154);
    class SE {}
    SE.DEFAULT_COLOR = iu.d.White(), SE.DEFAULT_WIDTH_ATTENUATED = 1, SE.DEFAULT_WIDTH = .1;
    var pE = yu(40663);
    class TE {
      constructor(uu) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = uu
      }
      moveTo(uu, Ru) {
        this._currentPath = new pE.k(uu, Ru), this._tempPaths.push(this._currentPath)
      }
      lineTo(uu, Ru) {
        this._currentPath.addLineTo(uu, Ru)
      }
      quadraticCurveTo(uu, Ru, yu, Eu) {
        this._currentPath.addQuadraticCurveTo(uu, Ru, yu, Eu, this._resolution)
      }
      bezierCurveTo(uu, Ru, yu, Eu, Ku, Qu) {
        this._currentPath.addBezierCurveTo(uu, Ru, yu, Eu, Ku, Qu, this._resolution)
      }
      extractHoles() {
        for (const uu of this._tempPaths) uu.area() > 0 ? this._holes.push(uu) : this._paths.push(uu);
        if (!this._paths.length && this._holes.length) {
          const uu = this._holes;
          this._holes = this._paths, this._paths = uu
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

    function WE(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = Qu.glyphs[uu] || Qu.glyphs["?"];
      if (!mu) return null;
      const Ju = new TE(Ku);
      if (mu.o) {
        const uu = mu.o.split(" ");
        for (let Ku = 0, Qu = uu.length; Ku < Qu;) {
          switch (uu[Ku++]) {
            case "m": {
              const Qu = parseInt(uu[Ku++]) * Ru + yu,
                mu = parseInt(uu[Ku++]) * Ru + Eu;
              Ju.moveTo(Qu, mu);
              break
            }
            case "l": {
              const Qu = parseInt(uu[Ku++]) * Ru + yu,
                mu = parseInt(uu[Ku++]) * Ru + Eu;
              Ju.lineTo(Qu, mu);
              break
            }
            case "q": {
              const Qu = parseInt(uu[Ku++]) * Ru + yu,
                mu = parseInt(uu[Ku++]) * Ru + Eu,
                Nu = parseInt(uu[Ku++]) * Ru + yu,
                Xu = parseInt(uu[Ku++]) * Ru + Eu;
              Ju.quadraticCurveTo(Nu, Xu, Qu, mu);
              break
            }
            case "b": {
              const Qu = parseInt(uu[Ku++]) * Ru + yu,
                mu = parseInt(uu[Ku++]) * Ru + Eu,
                Nu = parseInt(uu[Ku++]) * Ru + yu,
                Xu = parseInt(uu[Ku++]) * Ru + Eu,
                Vu = parseInt(uu[Ku++]) * Ru + yu,
                ru = parseInt(uu[Ku++]) * Ru + Eu;
              Ju.bezierCurveTo(Nu, Xu, Vu, ru, Qu, mu);
              break
            }
          }
        }
      }
      return Ju.extractHoles(), {
        offsetX: mu.ha * Ru,
        shapePath: Ju
      }
    }

    function jE(uu, Ru, yu, Eu) {
      const Ku = Array.from(uu),
        Qu = Ru / Eu.resolution,
        mu = (Eu.boundingBox.yMax - Eu.boundingBox.yMin + Eu.underlineThickness) * Qu,
        Ju = [];
      let Nu = 0,
        Xu = 0;
      for (let Vu = 0; Vu < Ku.length; Vu++) {
        const uu = Ku[Vu];
        if ("\n" === uu) Nu = 0, Xu -= mu;
        else {
          const Ru = WE(uu, Qu, Nu, Xu, yu, Eu);
          Ru && (Nu += Ru.offsetX, Ju.push(Ru.shapePath))
        }
      }
      return Ju
    }
    class HE {
      static ConvertPoints(uu, Ru) {
        if (uu.length && Array.isArray(uu) && "number" === typeof uu[0]) return [uu];
        if (uu.length && Array.isArray(uu[0]) && "number" === typeof uu[0][0]) return uu;
        if (uu.length && !Array.isArray(uu[0]) && uu[0] instanceof Lu.p) {
          const Ru = [];
          for (let yu = 0; yu < uu.length; yu++) {
            const Eu = uu[yu];
            Ru.push(Eu.x, Eu.y, Eu.z)
          }
          return [Ru]
        }
        if (uu.length > 0 && Array.isArray(uu[0]) && uu[0].length > 0 && uu[0][0] instanceof Lu.p) {
          const Ru = [],
            yu = uu;
          for (const uu of yu) Ru.push(uu.flatMap((uu => [uu.x, uu.y, uu.z])));
          return Ru
        }
        if (uu instanceof Float32Array) {
          if (Ru?.floatArrayStride) {
            const yu = [],
              Eu = 3 * Ru.floatArrayStride;
            for (let Ru = 0; Ru < uu.length; Ru += Eu) {
              const Ku = new Array(Eu);
              for (let yu = 0; yu < Eu; yu++) Ku[yu] = uu[Ru + yu];
              yu.push(Ku)
            }
            return yu
          }
          return [Array.from(uu)]
        }
        if (uu.length && uu[0] instanceof Float32Array) {
          const Ru = [];
          for (const yu of uu) Ru.push(Array.from(yu));
          return Ru
        }
        return []
      }
      static OmitZeroLengthPredicate(uu, Ru, yu) {
        const Eu = [];
        return Ru.subtract(uu).lengthSquared() > 0 && Eu.push([uu, Ru]), yu.subtract(Ru).lengthSquared() > 0 && Eu.push([Ru, yu]), uu.subtract(yu).lengthSquared() > 0 && Eu.push([yu, uu]), 0 === Eu.length ? null : Eu
      }
      static OmitDuplicatesPredicate(uu, Ru, yu, Eu) {
        const Ku = [];
        return HE._SearchInPoints(uu, Ru, Eu) || Ku.push([uu, Ru]), HE._SearchInPoints(Ru, yu, Eu) || Ku.push([Ru, yu]), HE._SearchInPoints(yu, uu, Eu) || Ku.push([yu, uu]), 0 === Ku.length ? null : Ku
      }
      static _SearchInPoints(uu, Ru, yu) {
        for (const Eu of yu)
          for (let yu = 0; yu < Eu.length; yu++)
            if (Eu[yu]?.equals(uu) && (Eu[yu + 1]?.equals(Ru) || Eu[yu - 1]?.equals(Ru))) return !0;
        return !1
      }
      static MeshesToLines(uu, Ru) {
        const yu = [];
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const Ku = uu[Eu],
            Qu = Ku.getVerticesData(zu.h.PositionKind),
            mu = Ku.DEu();
          if (Qu && mu)
            for (let uu = 0, Ju = 0; uu < mu.length; uu++) {
              const Nu = 3 * mu[Ju++],
                Xu = 3 * mu[Ju++],
                Vu = 3 * mu[Ju++],
                ru = new Lu.p(Qu[Nu], Qu[Nu + 1], Qu[Nu + 2]),
                Bu = new Lu.p(Qu[Xu], Qu[Xu + 1], Qu[Xu + 2]),
                xu = new Lu.p(Qu[Vu], Qu[Vu + 1], Qu[Vu + 2]);
              if (Ru) {
                const Ju = Ru(ru, Bu, xu, yu, uu, Nu, Ku, Eu, Qu, mu);
                if (Ju)
                  for (const uu of Ju) yu.push(uu)
              } else yu.push([ru, Bu], [Bu, xu], [xu, ru])
            }
        }
        return yu
      }
      static ToVector3Array(uu) {
        if (Array.isArray(uu[0])) {
          const Ru = [],
            yu = uu;
          for (const uu of yu) {
            const yu = [];
            for (let Ru = 0; Ru < uu.length; Ru += 3) yu.push(new Lu.p(uu[Ru], uu[Ru + 1], uu[Ru + 2]));
            Ru.push(yu)
          }
          return Ru
        }
        const Ru = uu,
          yu = [];
        for (let Eu = 0; Eu < Ru.length; Eu += 3) yu.push(new Lu.p(Ru[Eu], Ru[Eu + 1], Ru[Eu + 2]));
        return yu
      }
      static ToNumberArray(uu) {
        return uu.flatMap((uu => [uu.x, uu.y, uu.z]))
      }
      static GetPointsCountInfo(uu) {
        const Ru = new Array(uu.length);
        let yu = 0;
        for (let Eu = uu.length; Eu--;) Ru[Eu] = uu[Eu].length / 3, yu += Ru[Eu];
        return {
          total: yu,
          counts: Ru
        }
      }
      static GetLineLength(uu) {
        if (0 === uu.length) return 0;
        let Ru;
        Ru = "number" === typeof uu[0] ? HE.ToVector3Array(uu) : uu;
        const yu = Lu.m.MS[0];
        let Eu = 0;
        for (let Ku = 0; Ku < Ru.length - 1; Ku++) {
          const uu = Ru[Ku];
          Eu += Ru[Ku + 1].subtractToRef(uu, yu).length()
        }
        return Eu
      }
      static GetLineLengthArray(uu, Ru) {
        const yu = Ru ? new Float32Array(Ru, 0, uu.length / 3) : new Float32Array(uu.length / 3);
        let Eu = 0;
        for (let Ku = 0, Qu = uu.length / 3 - 1; Ku < Qu; Ku++) {
          let Ru = uu[3 * Ku + 0],
            Qu = uu[3 * Ku + 1],
            mu = uu[3 * Ku + 2];
          Ru -= uu[3 * Ku + 3], Qu -= uu[3 * Ku + 4], mu -= uu[3 * Ku + 5];
          Eu += Math.sqrt(Ru * Ru + Qu * Qu + mu * mu), yu[Ku + 1] = Eu
        }
        return yu
      }
      static SegmentizeSegmentByCount(uu, Ru, yu) {
        const Eu = [],
          Ku = Ru.subtract(uu),
          Qu = Lu.m.MS[0];
        Qu.e_(yu);
        const mu = Lu.m.MS[1];
        Ku.divideToRef(Qu, mu);
        let Ju = uu.clone();
        Eu.push(Ju);
        for (let Nu = 0; Nu < yu; Nu++) Ju = Ju.clone(), Eu.push(Ju.addInPlace(mu));
        return Eu
      }
      static SegmentizeLineBySegmentLength(uu, Ru) {
        const yu = uu[0] instanceof Lu.p ? HE.GetLineSegments(uu) : "number" === typeof uu[0] ? HE.GetLineSegments(HE.ToVector3Array(uu)) : uu,
          Eu = [];
        for (const Ku of yu)
          if (Ku.length > Ru) {
            const uu = HE.SegmentizeSegmentByCount(Ku.point1, Ku.point2, Math.ceil(Ku.length / Ru));
            for (const Ru of uu) Eu.push(Ru)
          } else Eu.push(Ku.point1), Eu.push(Ku.point2);
        return Eu
      }
      static SegmentizeLineBySegmentCount(uu, Ru) {
        const yu = "number" === typeof uu[0] ? HE.ToVector3Array(uu) : uu,
          Eu = HE.GetLineLength(yu) / Ru;
        return HE.SegmentizeLineBySegmentLength(yu, Eu)
      }
      static GetLineSegments(uu) {
        const Ru = [];
        for (let yu = 0; yu < uu.length - 1; yu++) {
          const Eu = uu[yu],
            Ku = uu[yu + 1],
            Qu = Ku.subtract(Eu).length();
          Ru.push({
            point1: Eu,
            point2: Ku,
            length: Qu
          })
        }
        return Ru
      }
      static GetMinMaxSegmentLength(uu) {
        const Ru = HE.GetLineSegments(uu).sort((uu => uu.length));
        return {
          min: Ru[0].length,
          max: Ru[Ru.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ku = Ru * yu;
        let Qu = 0,
          mu = 0;
        const Ju = uu.length;
        for (let Xu = 0; Xu < Ju; Xu++) {
          if (Ku <= Qu + uu[Xu].length) {
            mu = Xu;
            break
          }
          Qu += uu[Xu].length
        }
        const Nu = (Ku - Qu) / uu[mu].length;
        return uu[mu].point2.subtractToRef(uu[mu].point1, Lu.m.MS[0]), Lu.m.MS[0].scaleToRef(Nu, Lu.m.MS[1]), Eu || Lu.m.MS[1].addInPlace(uu[mu].point1), Lu.m.MS[1].clone()
      }
      static GetCircleLinePoints(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu,
          Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Ru;
        const Qu = [];
        for (let mu = 0; mu <= Ru; mu++) Qu.push(new Lu.p(Math.cos(mu * Ku) * uu, Math.sin(mu * Ku) * Eu, yu));
        return Qu
      }
      static GetBezierLinePoints(uu, Ru, yu, Eu) {
        return pE.g.CreateQuadraticBezier(uu, Ru, yu, Eu).getPoints().flatMap((uu => [uu.x, uu.y, uu.z]))
      }
      static GetArrowCap(uu, Ru, yu, Eu, Ku) {
        let Qu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [uu.clone(), uu.add(Ru.multiplyByFloats(yu, yu, yu))],
          widths: [Eu, Ku, Qu, mu]
        }
      }
      static GetPointsFromText(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Qu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const mu = [],
          Ju = jE(uu, Ru, yu, Eu);
        for (const Nu of Ju) {
          for (const uu of Nu.paths) {
            const Ru = [],
              yu = uu.getPoints();
            for (const uu of yu) Ru.push(uu.x, uu.y, Ku);
            mu.push(Ru)
          }
          if (Qu)
            for (const uu of Nu.holes) {
              const Ru = [],
                yu = uu.getPoints();
              for (const uu of yu) Ru.push(uu.x, uu.y, Ku);
              mu.push(Ru)
            }
        }
        return mu
      }
      static Color3toRGBAUint8(uu) {
        const Ru = new Uint8Array(4 * uu.length);
        for (let yu = 0, Eu = 0; yu < uu.length; yu++) Ru[Eu++] = 255 * uu[yu].r, Ru[Eu++] = 255 * uu[yu].g, Ru[Eu++] = 255 * uu[yu].b, Ru[Eu++] = 255;
        return Ru
      }
      static CreateColorsTexture(uu, Ru, yu, Eu) {
        const Ku = Eu.eS().getCaps().maxTextureSize ?? 1,
          Qu = Ru.length > Ku ? Ku : Ru.length,
          mu = Math.ceil(Ru.length / Ku);
        mu > 1 && (Ru = [...Ru, ...Array(Qu * mu - Ru.length).fill(Ru[0])]);
        const Ju = HE.Color3toRGBAUint8(Ru),
          Nu = new Cu.d(Ju, Qu, mu, Vy.b.TEXTUREFORMAT_RGBA, Eu, !1, !0, yu);
        return Nu.name = uu, Nu
      }
      static PrepareEmptyColorsTexture(uu) {
        if (!SE.EmptyColorsTexture) {
          const Ru = new Uint8Array(4);
          SE.EmptyColorsTexture = new Cu.d(Ru, 1, 1, Vy.b.TEXTUREFORMAT_RGBA, uu, !1, !1, Cu.d.NEAREST_NEAREST), SE.EmptyColorsTexture.name = "grlEmptyColorsTexture", SE.EmptyColorsTexture.zD.addOnce((() => {
            SE.EmptyColorsTexture = null
          }))
        }
        return SE.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        SE.EmptyColorsTexture?.dispose(), SE.EmptyColorsTexture = null
      }
      static BooleanToNumber(uu) {
        return uu ? 1 : 0
      }
    }
    class dE extends Fu.e {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class bE extends wu.d {
      isCompatible(uu) {
        return !0
      }
      constructor(uu, Ru, yu) {
        yu = yu || {
          color: SE.DEFAULT_COLOR
        };
        const Eu = new dE;
        Eu.GREASED_LINE_HAS_COLOR = !!yu.color && !yu.useColors, Eu.GREASED_LINE_SIZE_ATTENUATION = yu.sizeAttenuation ?? !1, Eu.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === yu.colorDistributionType, Eu.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Ru ?? uu.lD()).useRightHandedSystem, Eu.GREASED_LINE_CAMERA_FACING = yu.cameraFacing ?? !0, super(uu, bE.GREASED_LINE_MATERIAL_NAME, 200, Eu, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = yu?.forceGLSL || bE.ForceGLSL, this._scene = Ru ?? uu.lD(), this._engine = this._scene.eS(), this._cameraFacing = yu.cameraFacing ?? !0, this.visibility = yu.visibility ?? 1, this.useDash = yu.useDash ?? !1, this.dashRatio = yu.dashRatio ?? .5, this.dashOffset = yu.dashOffset ?? 0, this.width = yu.width ? yu.width : yu.sizeAttenuation ? SE.DEFAULT_WIDTH_ATTENUATED : SE.DEFAULT_WIDTH, this._sizeAttenuation = yu.sizeAttenuation ?? !1, this.colorMode = yu.colorMode ?? 0, this._color = yu.color ?? null, this.useColors = yu.useColors ?? !1, this._colorsDistributionType = yu.colorDistributionType ?? 0, this.colorsSampling = yu.colorsSampling ?? Cu.d.NEAREST_NEAREST, this._colors = yu.colors ?? null, this.dashCount = yu.dashCount ?? 1, this.resolution = yu.resolution ?? new Lu.n(this._engine.getRenderWidth(), this._engine.getRenderHeight()), yu.colorsTexture ? this.colorsTexture = yu.colorsTexture : this._colors ? this.colorsTexture = HE.CreateColorsTexture(`${uu.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? SE.DEFAULT_COLOR, HE.PrepareEmptyColorsTexture(this._scene)), this._engine.zD.add((() => {
          HE.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(uu) {
        uu.push("grl_offsets"), uu.push("grl_widths"), uu.push("grl_colorPointers"), uu.push("grl_counters"), this._cameraFacing ? (uu.push("grl_previousAndSide"), uu.push("grl_nextAndCounters")) : uu.push("grl_slopes")
      }
      getSamplers(uu) {
        uu.push("grl_colors")
      }
      getActiveTextures(uu) {
        this.colorsTexture && uu.push(this.colorsTexture)
      }
      getUniforms() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const Ru = [{
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
        return this._cameraFacing && Ru.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === uu && Ru.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Ru,
          vertex: this._cameraFacing && this._isGLSL(uu) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(uu) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(uu) {
        if (this._cameraFacing) {
          uu.v_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || uu.v_("viewProjection", this._scene.getTransformMatrix());
          const Ru = Lu.m.Vector4[0];
          Ru.x = this._aspect, Ru.y = this._resolution.x, Ru.z = this._resolution.y, Ru.w = this.width, uu.updateVector4("grl_aspect_resolution_lineWidth", Ru)
        }
        const Ru = Lu.m.Vector4[0];
        Ru.x = HE.BooleanToNumber(this.useDash), Ru.y = this._dashArray, Ru.z = this.dashOffset, Ru.w = this.dashRatio, uu.updateVector4("grl_dashOptions", Ru);
        const yu = Lu.m.Vector4[1];
        yu.x = this.colorMode, yu.y = this.visibility, yu.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, yu.w = HE.BooleanToNumber(this.useColors), uu.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", yu), this._color && uu.updateColor3("grl_singleColor", this._color);
        const Eu = this.colorsTexture ?? SE.EmptyColorsTexture;
        uu.setTexture("grl_colors", Eu), uu.updateFloat2("grl_textureSize", Eu?.getSize().width ?? 1, Eu?.getSize().height ?? 1)
      }
      prepareDefines(uu, Ru, yu) {
        uu.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, uu.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, uu.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, uu.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Ru.useRightHandedSystem, uu.GREASED_LINE_CAMERA_FACING = this._cameraFacing, uu.GREASED_LINE_USE_OFFSETS = !!yu.offsets
      }
      getClassName() {
        return bE.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Ru) ? function(uu, Ru) {
          if ("vertex" === uu) {
            const uu = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Ru && (uu["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), uu
          }
          return "fragment" === uu ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(uu, this._cameraFacing) : function(uu, Ru) {
          if ("vertex" === uu) {
            const uu = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Ru && (uu["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), uu
          }
          return "fragment" === uu ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(uu, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(uu) {
        this.setColors(uu)
      }
      setColors(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = this._colors?.length ?? 0;
        if (this._colors = uu, null !== uu && 0 !== uu.length) {
          if (!Ru || yu)
            if (this.colorsTexture && Eu === uu.length && !yu) {
              const Ru = HE.Color3toRGBAUint8(uu);
              this.colorsTexture.update(Ru)
            } else this.colorsTexture?.dispose(), this.colorsTexture = HE.CreateColorsTexture(`${this._material.name}-colors-texture`, uu, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(uu) {
        this._dashCount = uu, this._dashArray = 1 / uu
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(uu) {
        this._sizeAttenuation = uu, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(uu) {
        this.setColor(uu)
      }
      setColor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== uu || null !== this._color && null === uu ? (this._color = uu, Ru || this.markAllDefinesAsDirty()) : this._color = uu
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(uu) {
        this._colorsDistributionType = uu, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(uu) {
        this._aspect = uu.x / uu.y, this._resolution = uu
      }
      serialize() {
        const uu = super.serialize(),
          Ru = {
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
        return this._colors && (Ru.colors = this._colors), this._color && (Ru.color = this._color), uu.greasedLineMaterialOptions = Ru, uu
      }
      parse(uu, Ru, yu) {
        super.parse(uu, Ru, yu);
        const Eu = uu.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), Eu.color && this.setColor(Eu.color, !0), Eu.colorDistributionType && (this.colorsDistributionType = Eu.colorDistributionType), Eu.colors && (this.colors = Eu.colors), Eu.colorsSampling && (this.colorsSampling = Eu.colorsSampling), Eu.colorMode && (this.colorMode = Eu.colorMode), Eu.useColors && (this.useColors = Eu.useColors), Eu.visibility && (this.visibility = Eu.visibility), Eu.useDash && (this.useDash = Eu.useDash), Eu.dashCount && (this.dashCount = Eu.dashCount), Eu.dashRatio && (this.dashRatio = Eu.dashRatio), Eu.dashOffset && (this.dashOffset = Eu.dashOffset), Eu.width && (this.width = Eu.width), Eu.sizeAttenuation && (this.sizeAttenuation = Eu.sizeAttenuation), Eu.resolution && (this.resolution = Eu.resolution), this.colors ? this.colorsTexture = HE.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Ru) : HE.PrepareEmptyColorsTexture(Ru), this.markAllDefinesAsDirty()
      }
      copyTo(uu) {
        const Ru = uu;
        Ru.colorsTexture?.dispose(), this._colors && (Ru.colorsTexture = HE.CreateColorsTexture(`${Ru._material.name}-colors-texture`, this._colors, Ru.colorsSampling, this._scene)), Ru.setColor(this.color, !0), Ru.colorsDistributionType = this.colorsDistributionType, Ru.colorsSampling = this.colorsSampling, Ru.colorMode = this.colorMode, Ru.useColors = this.useColors, Ru.visibility = this.visibility, Ru.useDash = this.useDash, Ru.dashCount = this.dashCount, Ru.dashRatio = this.dashRatio, Ru.dashOffset = this.dashOffset, Ru.width = this.width, Ru.sizeAttenuation = this.sizeAttenuation, Ru.resolution = this.resolution, Ru.markAllDefinesAsDirty()
      }
      _isGLSL(uu) {
        return 0 === uu || this._forceGLSL
      }
    }
    bE.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", bE.ForceGLSL = !1;
    var CE = yu(39984),
      kE = yu(39990),
      eE = yu(38444),
      AE = yu(40047),
      DE = yu(39390);
    class ME extends AE.s {
      constructor(uu, Ru, Eu) {
        const Ku = Ru.eS(),
          Qu = Ku.isWebGPU && !(Eu.forceGLSL || ME.ForceGLSL),
          mu = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Ru.useRightHandedSystem && mu.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const Ju = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        Eu.cameraFacing ? (mu.push("GREASED_LINE_CAMERA_FACING"), Ju.push("grl_previousAndSide", "grl_nextAndCounters")) : (Ju.push("grl_slopes"), Ju.push("grl_counters"));
        const Nu = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Qu || Nu.push("world", "viewProjection", "view", "projection"), super(uu, Ru, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Qu ? ["Scene", "Mesh"] : void 0,
            attributes: Ju,
            uniforms: Nu,
            samplers: Qu ? [] : ["grlColors"],
            defines: mu,
            extraInitializationsAsync: async () => {
              Qu ? await Promise.all([yu.e(324).then((() => yu(61729))), yu.e(383).then((() => yu(61734)))]) : await Promise.all([yu.e(317).then((() => yu(61742))), yu.e(384).then((() => yu(61748)))])
            },
            shaderLanguage: Qu ? 1 : 0
          }), this._color = iu.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, Eu = Eu || {
            color: SE.DEFAULT_COLOR
          }, this.visibility = Eu.visibility ?? 1, this.useDash = Eu.useDash ?? !1, this.dashRatio = Eu.dashRatio ?? .5, this.dashOffset = Eu.dashOffset ?? 0, this.dashCount = Eu.dashCount ?? 1, this.width = Eu.width ? Eu.width : Eu.sizeAttenuation && Eu.cameraFacing ? SE.DEFAULT_WIDTH_ATTENUATED : SE.DEFAULT_WIDTH, this.sizeAttenuation = Eu.sizeAttenuation ?? !1, this.color = Eu.color ?? iu.d.White(), this.useColors = Eu.useColors ?? !1, this.colorsDistributionType = Eu.colorDistributionType ?? 0, this.colorsSampling = Eu.colorsSampling ?? Cu.d.NEAREST_NEAREST, this.colorMode = Eu.colorMode ?? 0, this._colors = Eu.colors ?? null, this._cameraFacing = Eu.cameraFacing ?? !0, this.resolution = Eu.resolution ?? new Lu.n(Ku.getRenderWidth(), Ku.getRenderHeight()), Eu.colorsTexture ? this.colorsTexture = Eu.colorsTexture : this._colors ? this.colorsTexture = HE.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Ru) : (this._color = this._color ?? SE.DEFAULT_COLOR, this.colorsTexture = HE.PrepareEmptyColorsTexture(Ru)), Qu) {
          const uu = new DE.d;
          uu.setParameters(), uu.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", uu)
        }
        Ku.zD.add((() => {
          HE.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== SE.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Lu.n(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(uu) {
        this.setColors(uu)
      }
      setColors(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Eu = this._colors?.length ?? 0;
        if (this._colors = uu, null !== uu && 0 !== uu.length) {
          if (!Ru || yu)
            if (this._colorsTexture && Eu === uu.length && !yu) {
              const Ru = HE.Color3toRGBAUint8(uu);
              this._colorsTexture.update(Ru)
            } else this._colorsTexture && this._colorsTexture !== SE.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = HE.CreateColorsTexture(`${this.name}-colors-texture`, uu, this.colorsSampling, this.lD())
        } else {
          this._colorsTexture && this._colorsTexture !== SE.EmptyColorsTexture && this._colorsTexture.dispose();
          const uu = this.lD();
          uu && (this.colorsTexture = HE.PrepareEmptyColorsTexture(uu))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(uu) {
        this._colorsTexture = uu, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(uu) {
        this._width = uu, this.setFloat("grlWidth", uu)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(uu) {
        this._useColors = uu, this.setFloat("grlUseColors", HE.BooleanToNumber(uu))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(uu) {
        this._colorsSampling = uu
      }
      get visibility() {
        return this._visibility
      }
      set visibility(uu) {
        this._visibility = uu, this.setFloat("grlVisibility", uu)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(uu) {
        this._useDash = uu, this.setFloat("grlUseDash", HE.BooleanToNumber(uu))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(uu) {
        this._dashOffset = uu, this.setFloat("grlDashOffset", uu)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(uu) {
        this._dashRatio = uu, this.setFloat("grlDashRatio", uu)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(uu) {
        this._dashCount = uu, this._dashArray = 1 / uu, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(uu) {
        this._sizeAttenuation = uu, this.setFloat("grlSizeAttenuation", HE.BooleanToNumber(uu))
      }
      get color() {
        return this._color
      }
      set color(uu) {
        this.setColor(uu)
      }
      setColor(uu) {
        uu = uu ?? SE.DEFAULT_COLOR, this._color = uu, this.setColor3("grlColor", uu)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(uu) {
        this._colorsDistributionType = uu, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(uu) {
        this._colorMode = uu, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(uu) {
        this._resolution = uu, this.setVector2("grlResolution", uu), this.setFloat("grlAspect", uu.x / uu.y)
      }
      serialize() {
        const uu = super.serialize(),
          Ru = {
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
        return this._colors && (Ru.colors = this._colors), uu.greasedLineMaterialOptions = Ru, uu
      }
      parse(uu, Ru, yu) {
        const Eu = uu.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), Eu.color && (this.color = Eu.color), Eu.colorDistributionType && (this.colorsDistributionType = Eu.colorDistributionType), Eu.colorsSampling && (this.colorsSampling = Eu.colorsSampling), Eu.colorMode && (this.colorMode = Eu.colorMode), Eu.useColors && (this.useColors = Eu.useColors), Eu.visibility && (this.visibility = Eu.visibility), Eu.useDash && (this.useDash = Eu.useDash), Eu.dashCount && (this.dashCount = Eu.dashCount), Eu.dashRatio && (this.dashRatio = Eu.dashRatio), Eu.dashOffset && (this.dashOffset = Eu.dashOffset), Eu.width && (this.width = Eu.width), Eu.sizeAttenuation && (this.sizeAttenuation = Eu.sizeAttenuation), Eu.resolution && (this.resolution = Eu.resolution), Eu.colors ? this.colorsTexture = HE.CreateColorsTexture(`${this.name}-colors-texture`, Eu.colors, this.colorsSampling, this.lD()) : this.colorsTexture = HE.PrepareEmptyColorsTexture(Ru), this._cameraFacing = Eu.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var IE, GE, UE;
    ME.ForceGLSL = !1,
      function(uu) {
        uu[uu.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", uu[uu.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(IE || (IE = {})),
      function(uu) {
        uu[uu.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", uu[uu.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", uu[uu.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(GE || (GE = {})),
      function(uu) {
        uu[uu.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", uu[uu.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", uu[uu.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", uu[uu.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", uu[uu.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(UE || (UE = {}));
    class nE extends CE.e {
      constructor(uu, Ru, yu) {
        super(uu, Ru, null, null, !1, !1), this.name = uu, this._options = yu, this._lazy = !1, this._updatable = !1, this._engine = Ru.eS(), this._lazy = yu.lazy ?? !1, this._updatable = yu.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = yu.colorPointers ?? [], this._widths = yu.widths ?? new Array(yu.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(uu) {
        let Ru = 0;
        for (const Eu of this._points) Ru += Eu.length;
        const yu = Ru / 3 * 2 - this._widths.length;
        for (let Eu = 0; Eu < yu; Eu++) this._widths.push(uu)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.US && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(uu, Ru) {
        for (const yu of uu) this._points.push(yu);
        this._lazy || this.setPoints(this._points, Ru)
      }
      dispose(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(uu, Ru)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(uu) {
        this._uvs = uu instanceof Float32Array ? uu : new Float32Array(uu), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(uu) {
        this.material instanceof ME && this.material.setDefine("GREASED_LINE_USE_OFFSETS", uu?.length > 0), this._offsets = uu, this._offsetsBuffer ? this._offsetsBuffer.update(uu) : this._createOffsetsBuffer(uu)
      }
      get widths() {
        return this._widths
      }
      set widths(uu) {
        this._widths = uu, this._lazy || this._widthsBuffer && this._widthsBuffer.update(uu)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(uu) {
        this._colorPointers = uu, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(uu)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof ME) return this.material;
        const uu = this.material?.pluginManager?.getPlugin(bE.GREASED_LINE_MATERIAL_NAME);
        return uu || void 0
      }
      get points() {
        const uu = [];
        return eE.e.DeepCopy(this._points, uu), uu
      }
      setPoints(uu, Ru) {
        this._points = HE.ConvertPoints(uu, Ru?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Ru?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Ru)
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
      serialize(uu) {
        super.serialize(uu), uu.type = this.getClassName(), uu.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = new kE.e;
        return Ru.positions = this._vertexPositions, Ru.indices = this._indices, Ru.uvs = this._uvs, uu && (Ru.normals = [], kE.e.ComputeNormals(this._vertexPositions, this._indices, Ru.normals)), Ru.applyToMesh(this, this._options.updatable), Ru
      }
      _createOffsetsBuffer(uu) {
        const Ru = this._scene.eS(),
          yu = new zu.c(Ru, uu, this._updatable, 3);
        this.setVerticesBuffer(yu.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = yu
      }
    }
    class sE {
      constructor(uu, Ru) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = uu, this.wasAddedByNoopNode = Ru
      }
      getIndicesAccessor(uu, Ru, yu, Eu, Ku) {
        return this._indicesAccessorMap.get(uu)?.get(Ru)?.get(yu)?.get(Eu)?.get(Ku)
      }
      setIndicesAccessor(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = this._indicesAccessorMap.get(uu);
        mu || (mu = new Map, this._indicesAccessorMap.set(uu, mu));
        let Ju = mu.get(Ru);
        Ju || (Ju = new Map, mu.set(Ru, Ju));
        let Nu = Ju.get(yu);
        Nu || (Nu = new Map, Ju.set(yu, Nu));
        let Xu = Nu.get(Eu);
        Xu || (Xu = new Map, Nu.set(Eu, Xu)), Xu.set(Ku, Qu)
      }
      pushExportedNode(uu) {
        this._exportedNodes.has(uu) || this._exportedNodes.add(uu)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(uu) {
        return this._vertexBufferViewMap.get(uu)
      }
      setVertexBufferView(uu, Ru) {
        this._vertexBufferViewMap.set(uu, Ru)
      }
      setRemappedBufferView(uu, Ru, yu) {
        this._remappedBufferView.set(uu, new Map), this._remappedBufferView.get(uu).set(Ru, yu)
      }
      getRemappedBufferView(uu, Ru) {
        return this._remappedBufferView.get(uu)?.get(Ru)
      }
      getVertexAccessor(uu, Ru, yu) {
        return this._vertexAccessorMap.get(uu)?.get(Ru)?.get(yu)
      }
      setVertexAccessor(uu, Ru, yu, Eu) {
        let Ku = this._vertexAccessorMap.get(uu);
        Ku || (Ku = new Map, this._vertexAccessorMap.set(uu, Ku));
        let Qu = Ku.get(Ru);
        Qu || (Qu = new Map, Ku.set(Ru, Qu)), Qu.set(yu, Eu)
      }
      hasVertexColorAlpha(uu) {
        return this._vertexMapColorAlpha.get(uu) || !1
      }
      setHasVertexColorAlpha(uu, Ru) {
        return this._vertexMapColorAlpha.set(uu, Ru)
      }
      getMesh(uu) {
        return this._meshMap.get(uu)
      }
      setMesh(uu, Ru) {
        this._meshMap.set(uu, Ru)
      }
      bindMorphDataToMesh(uu, Ru) {
        const yu = this._meshMorphTargetMap.get(uu) || [];
        this._meshMorphTargetMap.set(uu, yu), -1 === yu.indexOf(Ru) && yu.push(Ru)
      }
      getMorphTargetsFromMesh(uu) {
        return this._meshMorphTargetMap.get(uu)
      }
    }
    class tE {
      _ApplyExtension(uu, Ru, yu, Eu) {
        if (yu >= Ru.length) return Promise.resolve(uu);
        const Ku = Eu(Ru[yu], uu);
        return Ku ? Ku.then((async uu => uu ? await this._ApplyExtension(uu, Ru, yu + 1, Eu) : null)) : this._ApplyExtension(uu, Ru, yu + 1, Eu)
      }
      _ApplyExtensions(uu, Ru) {
        const yu = [];
        for (const Eu of tE._ExtensionNames) yu.push(this._extensions[Eu]);
        return this._ApplyExtension(uu, yu, 0, Ru)
      }
      _extensionsPostExportNodeAsync(uu, Ru, yu, Eu, Ku) {
        return this._ApplyExtensions(Ru, ((Ru, Qu) => Ru.postExportNodeAsync && Ru.postExportNodeAsync(uu, Qu, yu, Eu, Ku, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(uu, Ru, yu) {
        return this._ApplyExtensions(Ru, ((Ru, Eu) => Ru.postExportMaterialAsync && Ru.postExportMaterialAsync(uu, Eu, yu)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        return await Promise.all(tE._ExtensionNames.map((async Ku => {
          const Qu = this._extensions[Ku];
          if (Qu.postExportMaterialAdditionalTexturesAsync) {
            const Ku = await Qu.postExportMaterialAdditionalTexturesAsync(uu, Ru, yu);
            Eu.push(...Ku)
          }
        }))), Eu
      }
      _extensionsPostExportTextures(uu, Ru, yu) {
        for (const Eu of tE._ExtensionNames) {
          const Ku = this._extensions[Eu];
          Ku.postExportTexture && Ku.postExportTexture(uu, Ru, yu)
        }
      }
      _extensionsPostExportMeshPrimitive(uu) {
        for (const Ru of tE._ExtensionNames) {
          const yu = this._extensions[Ru];
          yu.postExportMeshPrimitive && yu.postExportMeshPrimitive(uu, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const uu of tE._ExtensionNames) {
          const Ru = this._extensions[uu];
          Ru.preGenerateBinaryAsync && await Ru.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(uu) {
        for (const Ru of tE._ExtensionNames) {
          const yu = this._extensions[Ru];
          yu.enabled && uu(yu)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((uu => {
          var Ru, yu, Eu;
          uu.wasUsed && ((Ru = this._glTF).extensionsUsed || (Ru.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(uu.name) && this._glTF.extensionsUsed.push(uu.name), uu.required && ((yu = this._glTF).extensionsRequired || (yu.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(uu.name) && this._glTF.extensionsRequired.push(uu.name)), (Eu = this._glTF).extensions || (Eu.extensions = {}), uu.onExporting && uu.onExporting())
        }))
      }
      _loadExtensions() {
        for (const uu of tE._ExtensionNames) {
          const Ru = tE._ExtensionFactories[uu](this);
          this._extensions[uu] = Ru
        }
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pu.b.LastCreatedScene,
          Ru = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Su.e.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Gy(this), this._extensions = {}, this._bufferManager = new yE, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !uu) throw new Error("No scene available to export");
        this._babylonScene = uu, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: uu => uu?.jD?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Ru
        }, this._loadExtensions()
      }
      dispose() {
        for (const uu in this._extensions) {
          this._extensions[uu].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        tE.UnregisterExtension(uu) && Ku.Tools.Warn(`Extension with the name ${uu} already exists`), tE._ExtensionFactories[uu] = Ru;
        const Eu = yu ?? 0;
        tE._ExtensionOrders[uu] = Eu;
        let Qu = tE._ExtensionNames.length;
        for (let Ku = 0; Ku < tE._ExtensionNames.length; Ku++) {
          const uu = tE._ExtensionNames[Ku];
          if (Eu < tE._ExtensionOrders[uu]) {
            Qu = Ku;
            break
          }
        }
        tE._ExtensionNames.splice(Qu, 0, uu)
      }
      static UnregisterExtension(uu) {
        if (!tE._ExtensionFactories[uu]) return !1;
        delete tE._ExtensionFactories[uu], delete tE._ExtensionOrders[uu];
        const Ru = tE._ExtensionNames.indexOf(uu);
        return -1 !== Ru && tE._ExtensionNames.splice(Ru, 1), !0
      }
      _generateJSON(uu, Ru, yu) {
        const Eu = {
          byteLength: uu
        };
        return Eu.byteLength && (this._glTF.buffers = [Eu]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.cp = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (Eu.uri = Ru + ".bin"), yu ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(uu) {
        const Ru = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const yu = this._generateJSON(Ru.byteLength, uu, !0),
          Eu = new Blob([Ru], {
            type: "application/octet-stream"
          }),
          Ku = uu + ".gltf",
          Qu = uu + ".bin",
          mu = new Xu;
        if (mu.files[Ku] = yu, mu.files[Qu] = Eu, this._imageData)
          for (const Ju in this._imageData) mu.files[Ju] = this._imageData[Ju];
        return mu
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(uu) {
        const Ru = uu % 4;
        return 0 === Ru ? Ru : 4 - Ru
      }
      async generateGLBAsync(uu) {
        this._shouldUseGlb = !0;
        const Ru = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const yu = this._generateJSON(Ru.byteLength),
          Eu = uu + ".glb";
        let Ku, Qu = yu.length;
        if ("undefined" !== typeof TextEncoder) {
          Ku = (new TextEncoder).encode(yu), Qu = Ku.length
        }
        const mu = this._getPadding(Qu),
          Ju = this._getPadding(Ru.byteLength),
          Nu = 28 + Qu + mu + Ru.byteLength + Ju,
          Vu = new uE(Nu);
        if (Vu.writeUInt32(1179937895), Vu.writeUInt32(2), Vu.writeUInt32(Nu), Vu.writeUInt32(Qu + mu), Vu.writeUInt32(1313821514), Ku) Vu.writeTypedArray(Ku);
        else {
          const uu = "_".charCodeAt(0);
          for (let Ru = 0; Ru < Qu; ++Ru) {
            const Eu = yu.charCodeAt(Ru);
            Eu != yu.codePointAt(Ru) ? Vu.writeUInt8(uu) : Vu.writeUInt8(Eu)
          }
        }
        for (let Xu = 0; Xu < mu; ++Xu) Vu.writeUInt8(32);
        Vu.writeUInt32(Ru.byteLength + Ju), Vu.writeUInt32(5130562), Vu.writeTypedArray(Ru);
        for (let Xu = 0; Xu < Ju; ++Xu) Vu.writeUInt8(0);
        const ru = new Xu;
        return ru.files[Eu] = new Blob([Vu.getOutputData()], {
          type: "application/octet-stream"
        }), ru
      }
      _setNodeTransformation(uu, Ru, yu) {
        if (Ru.getPivotPoint().equalsWithEpsilon(gy, sy.d) || Ku.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Ru.position.equalsWithEpsilon(gy, sy.d)) {
          const Ku = Eu.TmpVectors.MS[0].Oyu(Ru.position);
          yu && Py(Ku), uu.translation = Ku.AEu()
        }
        Ru.pp.equalsWithEpsilon(Ly, sy.d) || (uu.scale = Ru.pp.AEu());
        const Qu = Ru.rotationQuaternion?.clone() || Eu.Quaternion.FromEulerAngles(Ru.rotation.x, Ru.rotation.y, Ru.rotation.z);
        Qu.equalsWithEpsilon(cy, sy.d) || (yu && iy(Qu), uu.rotation = Qu.normalize().AEu())
      }
      _setCameraTransformation(uu, Ru, yu) {
        const Ku = Eu.TmpVectors.MS[0],
          Qu = Eu.TmpVectors.Quaternion[0],
          mu = Ru.getWorldMatrix();
        if (Ru.parent) {
          const uu = Ru.parent.getWorldMatrix().invertToRef(Eu.TmpVectors.Matrix[0]);
          mu.multiplyToRef(uu, Eu.TmpVectors.Matrix[1]).decompose(void 0, Qu, Ku)
        } else mu.decompose(void 0, Qu, Ku);
        Ku.equalsWithEpsilon(gy, sy.d) || (yu && Py(Ku), uu.translation = Ku.AEu()), yu && iy(Qu), this._babylonScene.useRightHandedSystem || Yy(Qu), Qu.equalsWithEpsilon(cy, sy.d) || (uu.rotation = Qu.AEu())
      }
      _listAvailableCameras() {
        for (const uu of this._babylonScene.cameras) {
          const Ru = {
            type: uu.mode === EE.c.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (uu.name && (Ru.name = uu.name), "perspective" === Ru.type) Ru.perspective = {
            aspectRatio: uu.eS().getAspectRatio(uu),
            yfov: uu.fovMode === EE.c.FOVMODE_VERTICAL_FIXED ? uu.fov : uu.fov * uu.eS().getAspectRatio(uu),
            znear: uu.minZ,
            zfar: uu.maxZ
          };
          else if ("orthographic" === Ru.type) {
            const yu = uu.orthoLeft && uu.orthoRight ? .5 * (uu.orthoRight - uu.orthoLeft) : .5 * uu.eS().getRenderWidth(),
              Eu = uu.orthoBottom && uu.orthoTop ? .5 * (uu.orthoTop - uu.orthoBottom) : .5 * uu.eS().getRenderHeight();
            Ru.orthographic = {
              xmag: yu,
              ymag: Eu,
              znear: uu.minZ,
              zfar: uu.maxZ
            }
          }
          this._camerasMap.set(uu, Ru)
        }
      }
      _exportAndAssignCameras() {
        const uu = Array.from(this._camerasMap.values());
        for (const Ru of uu) {
          const uu = this._nodesCameraMap.get(Ru);
          if (void 0 !== uu) {
            this._cameras.push(Ru);
            for (const Ru of uu) Ru.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const uu of this._babylonScene.skeletons) {
          if (uu.bones.length <= 0) continue;
          const Ru = {
            joints: []
          };
          this._skinMap.set(uu, Ru)
        }
      }
      _exportAndAssignSkeletons(uu) {
        for (const yu of this._babylonScene.skeletons) {
          if (yu.bones.length <= 0) continue;
          const Qu = this._skinMap.get(yu);
          if (void 0 == Qu) continue;
          const mu = {};
          let Ju = -1;
          for (let uu = 0; uu < yu.bones.length; ++uu) {
            const Ru = yu.bones[uu],
              Eu = Ru.getIndex() ?? uu; - 1 !== Eu && (mu[Eu] = Ru, Eu > Ju && (Ju = Eu))
          }
          const Nu = [];
          for (let yu = 0; yu <= Ju; ++yu) {
            const Ju = mu[yu],
              Xu = Ju.getTransformNode(),
              Vu = Xu ? this._nodeMap.get(Xu) : void 0;
            if (void 0 === Vu) {
              Ku.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Qu.joints.push(Vu);
            const ru = Ju.getAbsoluteInverseBindMatrix().clone();
            uu.has(Xu) && (Ru = ru, ty.invertToRef(Eu.TmpVectors.Matrix[0]).multiplyToRef(Ru, Ru).multiplyToRef(ty, Ru)), Nu.push(ru)
          }
          const Xu = this._nodesSkinMap.get(Qu);
          if (Qu.joints.length > 0 && void 0 !== Xu) {
            const uu = new Float32Array(16 * Nu.length);
            Nu.forEach(((Ru, yu) => {
              uu.set(Ru.m, 16 * yu)
            }));
            const Ru = this._bufferManager.createBufferView(uu);
            this._accessors.push(this._bufferManager.createAccessor(Ru, "MAT4", 5126, Nu.length)), Qu.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Qu);
            const yu = this._skins.length - 1;
            for (const Eu of Xu) Eu.skin = yu
          }
        }
        var Ru
      }
      async _exportSceneAsync() {
        const uu = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Ru = this._options.metadataSelector(this._babylonScene.metadata);
          Ru && (uu.extras = Ru)
        }
        const Ru = new Array,
          yu = new Array,
          Eu = new Array,
          Ku = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Qu;
        if (Ku && !this._options.includeCoordinateSystemConversionNodes)
          for (const Xu of this._babylonScene.animationGroups)
            for (const uu of Xu.targetedAnimations) {
              const Ru = uu.target;
              Ru instanceof ru.c && !Ru.parent && (Qu ?? (Qu = new Set)).add(Ru)
            }
        for (const Xu of this._babylonScene.rootNodes) {
          const uu = Xu.animations,
            mu = !!uu && uu.length > 0 || Qu?.has(Xu);
          Ku && !this._options.includeCoordinateSystemConversionNodes && ly(Xu, this._babylonScene.useRightHandedSystem) && !mu ? Eu.push(...Xu.getChildren()) : this._babylonScene.useRightHandedSystem ? Ru.push(Xu) : yu.push(Xu)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const mu = new sE(!0, !1);
        uu.nodes.push(...await this._exportNodesAsync(yu, mu));
        const Ju = new sE(!1, !1);
        uu.nodes.push(...await this._exportNodesAsync(Ru, Ju));
        const Nu = new sE(!1, !0);
        uu.nodes.push(...await this._exportNodesAsync(Eu, Nu)), uu.nodes.length && this._scenes.push(uu), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(mu.getNodesSet()), this._babylonScene.animationGroups.length && rE._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, mu.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(uu) {
        return this._nodeMap.get(uu)
      }
      _getAnimationIndex(uu) {
        return this._animationGroupMap.get(uu)
      }
      _getCameraIndex(uu) {
        const Ru = this._camerasMap.get(uu);
        if (!Ru) return;
        const yu = this._cameras.indexOf(Ru);
        return yu >= 0 ? yu : void 0
      }
      _getMaterialIndex(uu) {
        return this._materialMap.get(uu)
      }
      _getRootIndex(uu, Ru) {
        switch (uu) {
          case "nodes":
            return this._getNodeIndex(Ru);
          case "animations":
            return this._getAnimationIndex(Ru);
          case "cameras":
            return this._getCameraIndex(Ru);
          case "materials":
            return this._getMaterialIndex(Ru);
          case "meshes": {
            const uu = this._getNodeIndex(Ru);
            return void 0 === uu ? void 0 : this._nodes[uu]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Ru)?.index;
          case "images": {
            const uu = this._materialExporter.getTextureInfo(Ru)?.index;
            if (void 0 === uu) return;
            const yu = this._textures[uu];
            for (const Ru of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const uu = yu?.extensions?.[Ru]?.source;
              if ("number" === typeof uu) return uu
            }
            return yu?.source
          }
          case "samplers": {
            const uu = this._materialExporter.getTextureInfo(Ru)?.index;
            return void 0 === uu ? void 0 : this._textures[uu]?.sampler
          }
          case "skins": {
            const uu = this._skinMap.get(Ru),
              yu = uu ? this._skins.indexOf(uu) : -1;
            return yu >= 0 ? yu : void 0
          }
          case "scenes":
            return Ru === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(uu, Ru, yu) {
        const Eu = this._nodes[uu];
        if (!Eu) throw new Error(`Cannot write ${Ru}: glTF node ${uu} does not exist.`);
        Eu.extensions || (Eu.extensions = {}), Eu.extensions[Ru] = yu
      }
      _shouldExportNode(uu) {
        let Ru = this._shouldExportNodeMap.get(uu);
        return void 0 === Ru && (Ru = this._options.shouldExportNode(uu), this._shouldExportNodeMap.set(uu, Ru)), Ru
      }
      async _exportNodesAsync(uu, Ru) {
        const yu = new Array;
        this._exportBuffers(uu, Ru);
        for (const Eu of uu) await this._exportNodeAsync(Eu, yu, Ru);
        return yu
      }
      _collectBuffers(uu, Ru, yu, Eu, Ku) {
        if (this._shouldExportNode(uu) && uu instanceof Bu.e && uu.geometry) {
          const Qu = uu.geometry.getVertexBuffers();
          if (Qu)
            for (const Eu in Qu) {
              if (!Zy(Eu)) continue;
              const mu = Qu[Eu];
              Ku.setHasVertexColorAlpha(mu, uu.hasVertexAlpha);
              const Ju = mu._buffer,
                Nu = Ru.get(Ju) || [];
              Ru.set(Ju, Nu), -1 === Nu.indexOf(mu) && Nu.push(mu);
              const Xu = yu.get(mu) || [];
              yu.set(mu, Xu), -1 === Xu.indexOf(uu) && Xu.push(uu)
            }
          const mu = uu.morphTargetManager;
          if (mu)
            for (let Ru = 0; Ru < mu.numTargets; Ru++) {
              const yu = mu.getTarget(Ru),
                Ku = Eu.get(yu) || [];
              Eu.set(yu, Ku), -1 === Ku.indexOf(uu) && Ku.push(uu)
            }
        }
        for (const Qu of uu.getChildren()) this._collectBuffers(Qu, Ru, yu, Eu, Ku)
      }
      _exportBuffers(uu, Ru) {
        const yu = new Map,
          Eu = new Map,
          Ku = new Map;
        for (const Ju of uu) this._collectBuffers(Ju, yu, Eu, Ku, Ru);
        const Qu = Array.from(yu.keys());
        for (const Ju of Qu) {
          const uu = Ju.getData();
          if (!uu) throw new Error("Buffer data is not available");
          const Ku = yu.get(Ju);
          if (!Ku) continue;
          const Qu = Ku[0].byteStride;
          if (Ku.some((uu => uu.byteStride !== Qu))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const mu = Oy(uu).slice();
          for (const Ru of Ku) {
            const uu = Eu.get(Ru),
              {
                byteOffset: yu,
                byteStride: Ku,
                componentCount: Qu,
                type: Ju,
                count: Nu,
                normalized: Xu,
                kind: ru
              } = Fy(Ru, uu);
            switch (ru) {
              case Vu.d.NormalKind:
              case Vu.d.TangentKind:
                (0, Uy.h)(mu, yu, Ku, Qu, Ju, Nu, Xu, (uu => {
                  const Ru = Math.sqrt(uu[0] * uu[0] + uu[1] * uu[1] + uu[2] * uu[2]);
                  if (Ru > 0) {
                    const yu = 1 / Ru;
                    uu[0] *= yu, uu[1] *= yu, uu[2] *= yu
                  }
                }));
                break;
              case Vu.d.ColorKind: {
                const Ru = uu.filter((uu => uu.material instanceof QE.StandardMaterial || null == uu.material)).length;
                if (0 == Ru) break;
                if (Ru != uu.length) {
                  Mu.e.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                Ju == Vu.d.UNSIGNED_BYTE && Mu.e.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const Eu = new Tu.Color3,
                  ru = new Tu.c,
                  Bu = this._babylonScene.eS().useExactSrgbConversions;
                (0, Uy.h)(mu, yu, Ku, Qu, Ju, Nu, Xu, (uu => {
                  3 === uu.length ? (Eu.Tyu(uu, 0), Eu.toLinearSpaceToRef(Eu, Bu), Eu.toArray(uu, 0)) : (ru.Tyu(uu, 0), ru.toLinearSpaceToRef(ru, Bu), ru.toArray(uu, 0))
                }))
              }
            }
          }
          if (Ru.convertToRightHanded) {
            for (const uu of Ku) {
              const Ru = Eu.get(uu),
                {
                  byteOffset: yu,
                  byteStride: Ku,
                  componentCount: Qu,
                  type: Ju,
                  count: Nu,
                  normalized: Xu,
                  kind: ru
                } = Fy(uu, Ru);
              switch (ru) {
                case Vu.d.PositionKind:
                case Vu.d.NormalKind:
                case Vu.d.TangentKind:
                  (0, Uy.h)(mu, yu, Ku, Qu, Ju, Nu, Xu, (uu => {
                    uu[0] = -uu[0]
                  }))
              }
            }
            Ru.convertedToRightHandedBuffers.set(Ju, mu)
          }
          const Nu = this._bufferManager.createBufferView(mu, Qu);
          Ru.setVertexBufferView(Ju, Nu);
          const Xu = new Map;
          for (const Ru of Ku) {
            const uu = Eu.get(Ru),
              {
                kind: yu,
                totalVertices: Ku
              } = Fy(Ru, uu);
            switch (yu) {
              case Vu.d.MatricesIndicesKind:
              case Vu.d.MatricesIndicesExtraKind:
                if (Ru.type == Vu.d.FLOAT) {
                  const uu = Ru.getFloatData(Ku);
                  null !== uu && Xu.set(Ru, uu)
                }
            }
          }
          0 !== Xu.size && Mu.e.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const ru = Array.from(Xu.keys());
          for (const yu of ru) {
            const uu = Xu.get(yu);
            if (!uu) continue;
            const Eu = uu.some((uu => uu >= 256)),
              Ku = new(Eu ? Uint16Array : Uint8Array)(uu.length);
            for (let Ru = 0; Ru < uu.length; Ru++) Ku[Ru] = uu[Ru];
            const Qu = this._bufferManager.createBufferView(Ku, 4 * (Eu ? 2 : 1));
            Ru.setRemappedBufferView(Ju, yu, Qu)
          }
        }
        const mu = Array.from(Ku.keys());
        for (const Ju of mu) {
          const uu = Ku.get(Ju);
          if (!uu) continue;
          const yu = BE(Ju, uu[0], this._bufferManager, this._bufferViews, this._accessors, Ru.convertToRightHanded);
          for (const Eu of uu) Ru.bindMorphDataToMesh(Eu, yu)
        }
      }
      async _exportNodeAsync(uu, Ru, yu) {
        let Eu = this._nodeMap.get(uu);
        if (void 0 !== Eu) return void(Ru.includes(Eu) || Ru.push(Eu));
        const Ku = await this._createNodeAsync(uu, yu);
        if (Ku) {
          Eu = this._nodes.length, this._nodes.push(Ku), this._nodeMap.set(uu, Eu), yu.pushExportedNode(uu), Ru.push(Eu);
          const Qu = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            mu = [];
          this._babylonScene.animationGroups.length || (rE._CreateMorphTargetAnimationFromMorphTargetAnimations(uu, Qu, mu, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, yu.convertToRightHanded, this._options.shouldExportAnimation), uu.animations.length && rE._CreateNodeAnimationFromNodeAnimations(uu, Qu, mu, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, yu.convertToRightHanded, this._options.shouldExportAnimation)), Qu.channels.length && Qu.samplers.length && this._animations.push(Qu), mu.forEach((uu => {
            uu.channels.length && uu.samplers.length && this._animations.push(uu)
          }))
        }
        const Qu = Ku ? [] : Ru;
        for (const mu of uu.getChildren()) await this._exportNodeAsync(mu, Qu, yu);
        Ku && Qu.length && (Ku.children = Qu)
      }
      async _createNodeAsync(uu, Ru) {
        if (!this._shouldExportNode(uu)) return null;
        const yu = {};
        if (uu.name && (yu.name = uu.name), uu.metadata) {
          const Ru = this._options.metadataSelector(uu.metadata);
          Ru && (yu.extras = Ru)
        }
        if (uu instanceof ru.c && (this._setNodeTransformation(yu, uu, Ru.convertToRightHanded), uu instanceof Bu.e)) {
          const Eu = uu instanceof xu.b ? uu.dKu : uu;
          if (Eu.mC && Eu.mC.length > 0 && (yu.mesh = await this._exportMeshAsync(Eu, Ru)), uu.skeleton) {
            const Ru = this._skinMap.get(uu.skeleton);
            void 0 !== Ru && (void 0 === this._nodesSkinMap.get(Ru) && this._nodesSkinMap.set(Ru, []), this._nodesSkinMap.get(Ru)?.push(yu))
          }
        }
        if (uu instanceof ny.f) {
          const Eu = this._camerasMap.get(uu);
          if (Eu) {
            void 0 === this._nodesCameraMap.get(Eu) && this._nodesCameraMap.set(Eu, []), this._setCameraTransformation(yu, uu, Ru.convertToRightHanded);
            const Ku = uu.parent;
            if (null !== Ku && qy(uu, Ku)) {
              const uu = this._nodeMap.get(Ku);
              if (void 0 !== uu) {
                const Ru = this._nodes[uu];
                return oy(yu, Ru), this._nodesCameraMap.get(Eu)?.push(Ru), null
              }
            }
            this._nodesCameraMap.get(Eu)?.push(yu)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", yu, uu, this._nodeMap, Ru.convertToRightHanded) ? yu : (Mu.e.Warn(`Not exporting node ${uu.name}`), null)
      }
      _exportIndices(uu, Ru, yu, Eu, Ku, mu, Ju, Nu, Xu) {
        let Vu = null;
        Xu.mode = function(uu) {
          switch (uu) {
            case Qu.d.TriangleFillMode:
              return 4;
            case Qu.d.TriangleStripDrawMode:
              return 5;
            case Qu.d.TriangleFanDrawMode:
              return 6;
            case Qu.d.PointListDrawMode:
            case Qu.d.PointFillMode:
              return 0;
            case Qu.d.LineLoopDrawMode:
              return 2;
            case Qu.d.LineListDrawMode:
              return 1;
            case Qu.d.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${uu}`)
        }(mu);
        const ru = Ju !== Qu.d.CounterClockWiseSideOrientation && function(uu) {
          switch (uu) {
            case Qu.d.TriangleFillMode:
            case Qu.d.TriangleStripDrawMode:
            case Qu.d.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(mu);
        if (ru) {
          if (mu === Qu.d.TriangleStripDrawMode || mu === Qu.d.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const Ju = Ru ? new Uint32Array(Eu) : new Uint16Array(Eu);
          if (uu)
            for (let Ru = 0; Ru + 2 < Eu; Ru += 3) Ju[Ru] = uu[yu + Ru] + Ku, Ju[Ru + 1] = uu[yu + Ru + 2] + Ku, Ju[Ru + 2] = uu[yu + Ru + 1] + Ku;
          else
            for (let uu = 0; uu + 2 < Eu; uu += 3) Ju[uu] = uu, Ju[uu + 1] = uu + 2, Ju[uu + 2] = uu + 1;
          Vu = Ju
        } else if (uu && 0 !== Ku) {
          const Qu = Ru ? new Uint32Array(Eu) : new Uint16Array(Eu);
          for (let Ru = 0; Ru < Eu; Ru++) Qu[Ru] = uu[yu + Ru] + Ku;
          Vu = Qu
        } else uu && (Vu = function(uu, Ru, yu, Eu) {
          let Ku = uu;
          return 0 === Ru && yu === uu.length || (Ku = Array.isArray(uu) ? uu.slice(Ru, Ru + yu) : uu.subarray(Ru, Ru + yu)), Ku instanceof Int32Array ? new Uint32Array(Ku.buffer, Ku.byteOffset, Ku.length) : Array.isArray(Ku) ? Eu ? new Uint32Array(Ku) : new Uint16Array(Ku) : Ku
        }(uu, yu, Eu, Ru));
        if (Vu) {
          let Qu = Nu.getIndicesAccessor(uu, yu, Eu, Ku, ru);
          if (void 0 === Qu) {
            const mu = this._bufferManager.createBufferView(Vu),
              Ju = Ru ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(mu, "SCALAR", Ju, Eu, 0)), Qu = this._accessors.length - 1, Nu.setIndicesAccessor(uu, yu, Eu, Ku, ru, Qu)
          }
          Xu.indices = Qu
        }
      }
      _exportVertexBuffer(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = uu.getKind();
        if (!Zy(mu)) return;
        if (mu.startsWith("uv") && !this._options.exportUnusedUVs && (!Ru || !this._materialNeedsUVsSet.has(Ru))) return;
        let Ju = Ku.getVertexAccessor(uu, yu, Eu);
        if (void 0 === Ju) {
          const Ru = Ku.convertedToRightHandedBuffers.get(uu._buffer) || uu._buffer.getData(),
            Qu = mu === Vu.d.PositionKind ? function(uu, Ru, yu, Eu) {
              const {
                byteOffset: Ku,
                byteStride: Qu,
                type: mu,
                normalized: Ju
              } = Ru, Nu = Ru.getSize(), Xu = new Array(Nu).fill(1 / 0), Vu = new Array(Nu).fill(-1 / 0);
              return (0, Uy.h)(uu, Ku + yu * Qu, Qu, Nu, mu, Eu * Nu, Ju, (uu => {
                for (let Ru = 0; Ru < Nu; Ru++) Xu[Ru] = Math.min(Xu[Ru], uu[Ru]), Vu[Ru] = Math.max(Vu[Ru], uu[Ru])
              })), {
                min: Xu,
                max: Vu
              }
            }(Ru, uu, yu, Eu) : void 0,
            Nu = (mu === Vu.d.MatricesIndicesKind || mu === Vu.d.MatricesIndicesExtraKind) && uu.type === Vu.d.FLOAT,
            Xu = Nu ? Vu.d.UNSIGNED_BYTE : uu.type,
            ru = Nu ? void 0 : uu.normalized,
            Bu = Nu ? Ku.getRemappedBufferView(uu._buffer, uu) : Ku.getVertexBufferView(uu._buffer),
            xu = uu.byteOffset + yu * uu.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(Bu, function(uu, Ru) {
            if (uu == Vu.d.ColorKind) return Ru ? "VEC4" : "VEC3";
            switch (uu) {
              case Vu.d.PositionKind:
              case Vu.d.NormalKind:
                return "VEC3";
              case Vu.d.TangentKind:
              case Vu.d.MatricesIndicesKind:
              case Vu.d.MatricesIndicesExtraKind:
              case Vu.d.MatricesWeightsKind:
              case Vu.d.MatricesWeightsExtraKind:
                return "VEC4";
              case Vu.d.UVKind:
              case Vu.d.UV2Kind:
              case Vu.d.UV3Kind:
              case Vu.d.UV4Kind:
              case Vu.d.UV5Kind:
              case Vu.d.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${uu}`)
          }(mu, Ku.hasVertexColorAlpha(uu)), Xu, Eu, xu, Qu, ru)), Ju = this._accessors.length - 1, Ku.setVertexAccessor(uu, yu, Eu, Ju)
        }
        Qu.attributes[function(uu) {
          switch (uu) {
            case Vu.d.PositionKind:
              return "POSITION";
            case Vu.d.NormalKind:
              return "NORMAL";
            case Vu.d.TangentKind:
              return "TANGENT";
            case Vu.d.ColorKind:
              return "COLOR_0";
            case Vu.d.UVKind:
              return "TEXCOORD_0";
            case Vu.d.UV2Kind:
              return "TEXCOORD_1";
            case Vu.d.UV3Kind:
              return "TEXCOORD_2";
            case Vu.d.UV4Kind:
              return "TEXCOORD_3";
            case Vu.d.UV5Kind:
              return "TEXCOORD_4";
            case Vu.d.UV6Kind:
              return "TEXCOORD_5";
            case Vu.d.MatricesIndicesKind:
              return "JOINTS_0";
            case Vu.d.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Vu.d.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Vu.d.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${uu}`)
        }(mu)] = Ju
      }
      async _exportMaterialAsync(uu, Ru, yu, Eu) {
        let Ku = this._materialMap.get(uu);
        if (void 0 === Ku) {
          const Eu = Ru && Object.keys(Ru).some((uu => uu.startsWith("uv")));
          if ((uu = uu instanceof KE.c ? uu.yuu[yu.materialIndex] : uu) instanceof CR) Ku = await this._materialExporter.exportPBRMaterialAsync(uu, Eu);
          else if (uu instanceof QE.StandardMaterial) Ku = await this._materialExporter.exportStandardMaterialAsync(uu, Eu);
          else {
            if (!(uu instanceof aR)) return void Mu.e.Warn(`Unsupported material '${uu.name}' with type ${uu.getClassName()}`);
            Ku = await this._materialExporter.exportOpenPBRMaterialAsync(uu, Eu)
          }
          this._materialMap.set(uu, Ku)
        }
        Eu.material = Ku
      }
      async _exportMeshAsync(uu, Ru) {
        let yu = Ru.getMesh(uu);
        if (void 0 !== yu) return yu;
        const Eu = {
          primitives: []
        };
        yu = this._meshes.length, this._meshes.push(Eu), Ru.setMesh(uu, yu);
        const Ku = uu.isUnIndexed ? null : uu.DEu(),
          mu = uu.geometry?.getVertexBuffers(),
          Ju = Ru.getMorphTargetsFromMesh(uu),
          Nu = uu instanceof xE.b,
          Xu = uu instanceof nE,
          Vu = uu.mC;
        if (mu && Vu && Vu.length > 0)
          for (const ru of Vu) {
            const yu = {
                attributes: {}
              },
              Vu = ru.nS() || this._babylonScene.defaultMaterial;
            if (Xu) {
              const Ru = {
                  name: Vu.name
                },
                Eu = uu,
                Ku = Tu.Color3.White(),
                Qu = Eu.material?.alpha ?? 1,
                mu = Eu.greasedLineMaterial?.color ?? Ku;
              (!mu.equalsWithEpsilon(Ku, sy.d) || Qu < 1) && (Ru.pbrMetallicRoughness = {
                baseColorFactor: [...mu.AEu(), Qu]
              }), this._materials.push(Ru), yu.material = this._materials.length - 1
            } else if (Nu) {
              const Ru = {
                  name: Vu.name
                },
                Eu = uu;
              (!Eu.color.equalsWithEpsilon(Tu.Color3.White(), sy.d) || Eu.alpha < 1) && (Ru.pbrMetallicRoughness = {
                baseColorFactor: [...Eu.color.AEu(), Eu.alpha]
              }), this._materials.push(Ru), yu.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Vu, mu, ru, yu);
            const Bu = Nu || Xu ? Qu.d.LineListDrawMode : uu.overrideRenderingFillMode ?? Vu.fillMode;
            let xu = Vu._getEffectiveOrientation(uu);
            Ru.wasAddedByNoopNode && !uu.lD().useRightHandedSystem && (xu = xu === Qu.d.ClockWiseSideOrientation ? Qu.d.CounterClockWiseSideOrientation : Qu.d.ClockWiseSideOrientation), this._exportIndices(Ku, Ku ? (0, Uy.d)(Ku, ru.indexCount, ru.indexStart, ru.verticesStart) : ru.verticesCount > 65535, Ku ? ru.indexStart : ru.verticesStart, Ku ? ru.indexCount : ru.verticesCount, -ru.verticesStart, Bu, xu, Ru, yu);
            for (const uu of Object.values(mu)) this._exportVertexBuffer(uu, Vu, ru.verticesStart, ru.verticesCount, Ru, yu);
            if (Ju) {
              yu.targets = [];
              for (const uu of Ju) yu.targets.push(uu.attributes)
            }
            Eu.primitives.push(yu), this._extensionsPostExportMeshPrimitive(yu)
          }
        if (Ju) {
          Eu.weights = [], Eu.extras || (Eu.extras = {}), Eu.extras.targetNames = [];
          for (const uu of Ju) Eu.weights.push(uu.influence), Eu.extras.targetNames.push(uu.name)
        }
        return yu
      }
    }
    tE._ExtensionNames = new Array, tE._ExtensionFactories = {}, tE._ExtensionOrders = {};
    class lE {
      static async GLTFAsync(uu, Ru, yu) {
        yu && yu.exportWithoutWaitingForScene || await uu.whenReadyAsync();
        const Eu = new tE(uu, yu),
          Ku = await Eu.generateGLTFAsync(Ru.replace(/\.[^/.]+$/, ""));
        return Eu.dispose(), Ku
      }
      static async GLBAsync(uu, Ru, yu) {
        yu && yu.exportWithoutWaitingForScene || await uu.whenReadyAsync();
        const Eu = new tE(uu, yu),
          Ku = await Eu.generateGLBAsync(Ru.replace(/\.[^/.]+$/, ""));
        return Eu.dispose(), Ku
      }
    }
    const gE = "EXT_mesh_gpu_instancing";

    function cE(uu, Ru) {
      const yu = new Float32Array(3 * Ru);
      for (let Eu = 0; Eu < Ru; Eu++) yu[3 * Eu + 0] = uu[4 * Eu + 0], yu[3 * Eu + 1] = uu[4 * Eu + 1], yu[3 * Eu + 2] = uu[4 * Eu + 2];
      return yu
    }
    class LE {
      constructor(uu) {
        this.name = gE, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(uu, Ru, yu, Eu, Ku, Qu) {
        return await new Promise((uu => {
          if (Ru && yu instanceof CE.e && yu.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const uu = Lu.p.Zero(),
              Eu = Lu.f.Identity(),
              mu = Lu.p.One(),
              Ju = yu.thinInstanceGetWorldMatrices(),
              Nu = Lu.m.MS[2],
              Xu = Lu.m.Quaternion[1],
              Vu = Lu.m.MS[3];
            let ru = !1,
              Bu = !1,
              xu = !1;
            const Su = new Float32Array(3 * yu.F_),
              pu = new Float32Array(4 * yu.F_),
              Tu = new Float32Array(3 * yu.F_);
            let Wu = 0;
            for (const Ru of Ju) Ru.decompose(Vu, Xu, Nu), Ku && (Py(Nu), iy(Xu)), Su.set(Nu.AEu(), 3 * Wu), pu.set(Xu.normalize().AEu(), 4 * Wu), Tu.set(Vu.AEu(), 3 * Wu), ru = ru || !Nu.equalsWithEpsilon(uu), Bu = Bu || !Xu.equalsWithEpsilon(Eu), xu = xu || !Vu.equalsWithEpsilon(mu), Wu++;
            const ju = {
              attributes: {}
            };
            ru && (ju.attributes.TRANSLATION = this._buildAccessor(Su, "VEC3", yu.F_, Qu)), Bu && (ju.attributes.ROTATION = this._buildAccessor(pu, "VEC4", yu.F_, Qu)), xu && (ju.attributes.SCALE = this._buildAccessor(Tu, "VEC3", yu.F_, Qu));
            let Hu = yu._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Hu) {
              const uu = yu.F_,
                Ru = "VEC3";
              yu.hasVertexAlpha && Hu.length === 4 * uu ? (this._instanceColorWarned || (Mu.e.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Hu = cE(Hu, uu)) : Hu.length === 4 * uu && (Hu = cE(Hu, uu)), Hu.length === 3 * uu && (ju.attributes._COLOR_0 = this._buildAccessor(Hu, Ru, uu, Qu))
            }
            Ru.extensions = Ru.extensions || {}, Ru.extensions[gE] = ju
          }
          uu(Ru)
        }))
      }
      _buildAccessor(uu, Ru, yu, Eu) {
        const Ku = Eu.createBufferView(uu),
          Qu = Eu.createAccessor(Ku, Ru, 5126, yu);
        return this._exporter._accessors.push(Qu), this._exporter._accessors.length - 1
      }
    }
    let zE = !1;

    function FE() {
      zE || (zE = !0, tE.RegisterExtension(gE, (uu => new LE(uu))))
    }
    yu(40057);
    FE();
    var wE = yu(41432);

    function ZE(uu, Ru, yu, Eu) {
      const Ku = uu;
      let Qu = null,
        mu = null,
        Ju = null,
        Nu = null;
      const Xu = {},
        Vu = Ru.find((uu => "POSITION" === uu.dracoName));
      if (!Vu) throw new Error("Draco: Missing position attribute for encoding.");
      if (!yu) {
        const uu = Vu.data.length / Vu.size;
        yu = new(uu > 65535 ? Uint32Array : Uint16Array)(uu);
        for (let Ru = 0; Ru < uu; Ru++) yu[Ru] = Ru
      }
      try {
        Qu = new Ku.Encoder, mu = new Ku.MeshBuilder, Ju = new Ku.Mesh, mu.AddFacesToMesh(Ju, yu.length / 3, yu);
        const uu = new Map([
          [Float32Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddFloatAttribute(Ru, yu, Eu, Ku, Qu)],
          [Uint32Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddUInt32Attribute(Ru, yu, Eu, Ku, Qu)],
          [Uint16Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddUInt16Attribute(Ru, yu, Eu, Ku, Qu)],
          [Uint8Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddUInt8Attribute(Ru, yu, Eu, Ku, Qu)],
          [Int32Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddInt32Attribute(Ru, yu, Eu, Ku, Qu)],
          [Int16Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddInt16Attribute(Ru, yu, Eu, Ku, Qu)],
          [Int8Array, (uu, Ru, yu, Eu, Ku, Qu) => uu.AddInt8Attribute(Ru, yu, Eu, Ku, Qu)]
        ]);
        for (const yu of Ru) {
          yu.data instanceof Uint8ClampedArray && (yu.data = new Uint8Array(yu.data));
          const Ru = uu.get(yu.data.constructor),
            Nu = yu.data.length / yu.size;
          Xu[yu.kind] = Ru(mu, Ju, Ku[yu.dracoName], Nu, yu.size, yu.data), Eu.quantizationBits && Eu.quantizationBits[yu.dracoName] && Qu.SetAttributeQuantization(Ku[yu.dracoName], Eu.quantizationBits[yu.dracoName])
        }
        Eu.method && Qu.SetEncodingMethod(Ku[Eu.method]), void 0 !== Eu.encodeSpeed && void 0 !== Eu.decodeSpeed && Qu.SetSpeedOptions(Eu.encodeSpeed, Eu.decodeSpeed), Nu = new Ku.DracoInt8Array;
        const Vu = Qu.EncodeMeshToDracoBuffer(Ju, Nu);
        if (Vu <= 0) throw new Error("Draco: Failed to encode.");
        const ru = new Int8Array(Vu);
        for (let Ru = 0; Ru < Vu; Ru++) ru[Ru] = Nu.GetValue(Ru);
        return {
          data: ru,
          attributeIds: Xu
        }
      } finally {
        Ju && Ku.destroy(Ju), mu && Ku.destroy(mu), Qu && Ku.destroy(Qu), Nu && Ku.destroy(Nu)
      }
    }

    function hE() {
      let uu;
      onmessage = Ru => {
        const yu = Ru.data;
        switch (yu.id) {
          case "init": {
            yu.url && importScripts(yu.url);
            const Ru = yu.wasmBinary ? {
              wasmBinary: yu.wasmBinary
            } : {};
            uu = DracoEncoderModule(Ru), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!uu) throw new Error("Draco: Encoder module is not available.");
            uu.then((uu => {
              const Ru = ZE(uu, yu.attributes, yu.indices, yu.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Ru
              }, Ru ? [Ru.data.buffer] : void 0)
            })).catch((uu => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: uu.message
              })
            }))
        }
      }
    }
    class PE {
      constructor(uu) {
        if (uu.workerPool) return void(this._workerPoolPromise = Promise.resolve(uu.workerPool));
        const Ru = uu.wasmBinary,
          yu = uu.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          Eu = yu && "function" === typeof Worker && "function" === typeof URL,
          Ku = Eu || !uu.jsModule,
          Qu = uu.wasmUrl && uu.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Ku ? eR.i.GetBabylonScriptURL(uu.wasmUrl, !0) : "",
            wasmBinaryPromise: Ru ? Promise.resolve(Ru) : eR.i.LoadFileAsync(eR.i.GetBabylonScriptURL(uu.wasmBinaryUrl, !0))
          } : {
            url: Ku ? eR.i.GetBabylonScriptURL(uu.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        Eu ? this._workerPoolPromise = Qu.wasmBinaryPromise.then((uu => {
          const Ru = this._getWorkerContent(),
            Eu = URL.createObjectURL(new Blob([Ru], {
              type: "application/javascript"
            }));
          return new wE.d(yu, (() => async function(uu, Ru, yu) {
            return await new Promise(((Eu, Ku) => {
              const Qu = Ru => {
                  uu.removeEventListener("error", Qu), uu.removeEventListener("message", mu), Ku(Ru)
                },
                mu = Ru => {
                  "initDone" === Ru.data.id && (uu.removeEventListener("error", Qu), uu.removeEventListener("message", mu), Eu(uu))
                };
              if (uu.addEventListener("error", Qu), uu.addEventListener("message", mu), Ru) {
                const Eu = Ru.slice(0);
                uu.postMessage({
                  id: "init",
                  url: yu,
                  wasmBinary: Eu
                }, [Eu])
              } else uu.postMessage({
                id: "init",
                url: yu
              })
            }))
          }(new Worker(Eu), uu, Qu.url)))
        })) : this._modulePromise = Qu.wasmBinaryPromise.then((async Ru => {
          if (!this._isModuleAvailable() && !uu.jsModule) {
            if (!Qu.url) throw new Error("Draco codec module is not available");
            await eR.i.LoadBabylonScriptAsync(Qu.url)
          }
          return await this._createModuleAsync(Ru, uu.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((uu => {
          uu.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function iE() {
      const uu = uu => !!uu && "object" === typeof uu;
      for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
      return yu.reduce(((Ru, yu) => {
        const Eu = Object.keys(yu);
        for (const Ku of Eu) {
          const Eu = Ru[Ku],
            Qu = yu[Ku];
          Array.isArray(Eu) && Array.isArray(Qu) ? Ru[Ku] = Eu.concat(Qu) : uu(Eu) && uu(Qu) ? Ru[Ku] = iE(Eu, Qu) : Ru[Ku] = Qu
        }
        return Ru
      }), {})
    }

    function YE(uu) {
      return uu === zu.h.PositionKind ? "POSITION" : uu === zu.h.NormalKind ? "NORMAL" : uu === zu.h.ColorKind ? "COLOR" : uu.startsWith(zu.h.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const oE = {
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
    class qE extends PE {
      static get DefaultAvailable() {
        return !!((uu = qE.DefaultConfiguration).wasmUrl && (uu.wasmBinary || uu.wasmBinaryUrl) && "object" === typeof WebAssembly || uu.fallbackUrl);
        var uu
      }
      static get Default() {
        return qE._Default ?? (qE._Default = new qE), qE._Default
      }
      static ResetDefault(uu) {
        qE._Default && (uu || qE._Default.dispose(), qE._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(uu, Ru) {
        return {
          module: await (Ru || DracoEncoderModule)({
            wasmBinary: uu
          })
        }
      }
      _getWorkerContent() {
        return `${ZE}(${hE})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qE.DefaultConfiguration)
      }
      async _encodeAsync(uu, Ru, yu) {
        const Eu = yu ? iE(oE, yu) : oE;
        if (this._workerPoolPromise) {
          const yu = await this._workerPoolPromise;
          return await new Promise(((Ku, Qu) => {
            yu.push(((yu, mu) => {
              const Ju = uu => {
                  yu.removeEventListener("error", Ju), yu.removeEventListener("message", Nu), Qu(uu), mu()
                },
                Nu = uu => {
                  "encodeMeshSuccess" === uu.data.id ? (yu.removeEventListener("error", Ju), yu.removeEventListener("message", Nu), Ku(uu.data.encodedMeshData), mu()) : "encodeMeshError" === uu.data.id && (yu.removeEventListener("error", Ju), yu.removeEventListener("message", Nu), Qu(new Error(uu.data.errorMessage)), mu())
                };
              yu.addEventListener("error", Ju), yu.addEventListener("message", Nu);
              const Xu = [];
              for (const Ru of uu) Xu.push(Ru.data.buffer);
              Ru && Xu.push(Ru.buffer), yu.postMessage({
                id: "encodeMesh",
                attributes: uu,
                indices: Ru,
                options: Eu
              }, Xu)
            }))
          }))
        }
        if (this._modulePromise) {
          return ZE((await this._modulePromise).module, uu, Ru, Eu)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(uu, Ru) {
        if (0 == uu.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        uu instanceof CE.e && uu.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Ru?.method && (Mu.e.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Ru.method = "MESH_SEQUENTIAL_ENCODING");
        const yu = function(uu) {
            let Ru = uu.DEu(void 0, !0);
            return !Ru || Ru instanceof Uint32Array || Ru instanceof Uint16Array || (Ru = ((0, Uy.d)(Ru, Ru.length) ? Uint32Array : Uint16Array).from(Ru)), Ru
          }(uu),
          Eu = function(uu, Ru) {
            const yu = [];
            for (const Eu of uu.getVerticesDataKinds()) {
              if (Ru?.includes(Eu)) {
                if (Eu === zu.h.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Ku = uu.getVertexBuffer(Eu),
                Qu = Ku.getSize(),
                mu = (0, Uy.u)(Ku.getData(), Qu, Ku.type, Ku.byteOffset, Ku.byteStride, uu.getTotalVertices(), !0);
              yu.push({
                kind: Eu,
                dracoName: YE(Eu),
                size: Qu,
                data: mu
              })
            }
            return yu
          }(uu, Ru?.excludedAttributes);
        return await this._encodeAsync(Eu, yu, Ru)
      }
    }
    qE.DefaultConfiguration = {
      wasmUrl: `${eR.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${eR.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${eR.i._DefaultCdnUrl}/draco_encoder.js`
    }, qE._Default = null;
    const OE = "KHR_draco_mesh_compression";
    class vE {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = OE, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === uu.options.meshCompressionMethod && qE.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(uu, Ru, yu) {
        if (!this.enabled) return;
        if (4 !== uu.mode && 5 !== uu.mode) return void Mu.e.Warn("Cannot compress primitive with mode " + uu.mode + ".");
        const Eu = [],
          Ku = [];
        let Qu = null;
        if (void 0 !== uu.indices) {
          const mu = yu[uu.indices],
            Ju = Ru.getBufferView(mu);
          Qu = Ru.getData(Ju).slice(), Eu.push(Ju), Ku.push(mu)
        }
        const mu = [];
        for (const [Vu, ru] of Object.entries(uu.attributes)) {
          const uu = yu[ru],
            Qu = Ru.getBufferView(uu),
            Nu = wy(uu.type),
            Xu = (0, Uy.u)(Ru.getData(Qu), Nu, uu.componentType, uu.byteOffset || 0, Qu.byteStride || (0, Uy.q)(uu.componentType) * Nu, uu.count, !0);
          mu.push({
            kind: Vu,
            dracoName: (Ju = Vu, "POSITION" === Ju ? "POSITION" : "NORMAL" === Ju ? "NORMAL" : Ju.startsWith("COLOR") ? "COLOR" : Ju.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: wy(uu.type),
            data: Xu
          }), Eu.push(Qu), Ku.push(uu)
        }
        var Ju;
        const Nu = {
            method: uu.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          Xu = qE.Default._encodeAsync(mu, Qu, Nu).then((yu => {
            const Qu = {
                bufferView: -1,
                attributes: yu.attributeIds
              },
              mu = Ru.createBufferView(yu.data);
            Ru.setBufferView(Qu, mu);
            for (const uu of Eu) this._bufferViewsUsed.add(uu);
            for (const uu of Ku) this._accessorsUsed.add(uu);
            uu.extensions || (uu.extensions = {}), uu.extensions[OE] = Qu
          })).catch((uu => {
            Mu.e.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + uu.message)
          }));
        this._encodePromises.push(Xu), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(uu) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Ru => {
          uu.getPropertiesWithBufferView(Ru).every((uu => this._accessorsUsed.has(uu))) && uu.removeBufferView(Ru)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let aE = !1;

    function fE() {
      aE || (aE = !0, tE.RegisterExtension(OE, (uu => new vE(uu))))
    }
    fE();
    var uK = yu(41151);
    const RK = "KHR_lights_punctual",
      yK = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      EK = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      KK = Lu.p.Backward();
    class QK {
      constructor(uu) {
        this.name = RK, this.enabled = !0, this.required = !1, this._exporter = uu
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[RK] = this._lights
      }
      async postExportNodeAsync(uu, Ru, yu, Eu, Ku) {
        return await new Promise((Qu => {
          if (!(yu instanceof VE.e)) return void Qu(Ru);
          const mu = yu.getTypeID() == VE.e.LIGHTTYPEID_POINTLIGHT ? "point" : yu.getTypeID() == VE.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : yu.getTypeID() == VE.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!mu || !(yu instanceof uK.e)) return Mu.e.Warn(`${uu}: Light ${yu.name} is not supported in ${RK}`), void Qu(Ru);
          if (yu.falloffType !== VE.e.FALLOFF_GLTF && Mu.e.Warn(`${uu}: Light falloff for ${yu.name} does not match the ${RK} specification!`), !yu.position.amu(0, 0, 0)) {
            const uu = Lu.m.MS[0].Oyu(yu.position);
            Ku && Py(uu), Ru.translation = uu.AEu()
          }
          if ("point" !== mu) {
            const uu = yu.direction.normalizeToRef(Lu.m.MS[0]);
            Ku && Py(uu);
            const Eu = Lu.f.FromUnitVectorsToRef(KK, uu, Lu.m.Quaternion[0]);
            Lu.f.IsIdentity(Eu) || (Ru.rotation = Eu.AEu())
          }
          const Ju = {
            type: mu,
            name: yu.name,
            color: yu.diffuse.AEu(),
            intensity: yu.intensity,
            range: yu.range
          };
          if (vy(Ju, yK), "spot" === mu) {
            const uu = yu;
            Ju.spot = {
              innerConeAngle: uu.innerAngle / 2,
              outerConeAngle: uu.angle / 2
            }, vy(Ju.spot, EK)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Ju);
          const Nu = {
              light: this._lights.lights.length - 1
            },
            Xu = yu.parent;
          if (Xu && qy(yu, Xu)) {
            const uu = Eu.get(Xu);
            if (uu) {
              const yu = this._exporter._nodes[uu];
              return oy(Ru, yu), yu.extensions || (yu.extensions = {}), yu.extensions[RK] = Nu, void Qu(null)
            }
          }
          Ru.extensions || (Ru.extensions = {}), Ru.extensions[RK] = Nu, Qu(Ru)
        }))
      }
    }
    let mK = !1;

    function JK() {
      mK || (mK = !0, tE.RegisterExtension(RK, (uu => new QK(uu))))
    }
    JK();
    const NK = "KHR_interactivity";
    class XK {
      constructor(uu) {
        this._exporter = uu, this.name = NK, this.enabled = !!uu.options.khrInteractivity, this.required = uu.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var uu, Ru, yu;
        const Eu = this._exporter.options.khrInteractivity;
        if (!Eu) return;
        const Ku = Eu.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: uu => this._exporter._getNodeIndex(uu),
          getAnimationIndex: uu => this._exporter._getAnimationIndex(uu),
          getCameraIndex: uu => this._exporter._getCameraIndex(uu),
          getMaterialIndex: uu => this._exporter._getMaterialIndex(uu),
          getRootIndex: (uu, Ru) => this._exporter._getRootIndex(uu, Ru),
          setNodeExtension: (uu, Ru, yu) => this._exporter._setNodeExtension(uu, Ru, yu)
        });
        this._exporter._glTF.extensions[NK] = Ku;
        for (const Qu of Eu.additionalExtensionsUsed)(uu = this._exporter._glTF).extensionsUsed || (uu.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Qu) && this._exporter._glTF.extensionsUsed.push(Qu);
        for (const Qu of Eu.additionalExtensionsRequired)(Ru = this._exporter._glTF).extensionsUsed || (Ru.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Qu) && this._exporter._glTF.extensionsUsed.push(Qu), (yu = this._exporter._glTF).extensionsRequired || (yu.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Qu) && this._exporter._glTF.extensionsRequired.push(Qu)
      }
    }
    let VK = !1;

    function rK() {
      VK || (VK = !0, tE.RegisterExtension(NK, (uu => new XK(uu)), 200))
    }
    rK();
    const BK = "EXT_lights_area",
      xK = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      SK = {
        aspect: 1
      },
      pK = Lu.p.Backward();
    class TK {
      constructor(uu) {
        this.name = BK, this.enabled = !0, this.required = !1, this._exporter = uu
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[BK] = this._lights
      }
      async postExportNodeAsync(uu, Ru, yu, Eu, Ku) {
        return await new Promise((Qu => {
          if (!(yu instanceof VE.e)) return void Qu(Ru);
          const mu = yu.getTypeID() == VE.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!mu) return Mu.e.Warn(`${uu}: Light ${yu.name} is not supported in ${BK}`), void Qu(Ru);
          const Ju = yu;
          if (Ju.falloffType !== VE.e.FALLOFF_GLTF && Mu.e.Warn(`${uu}: Light falloff for ${yu.name} does not match the ${BK} specification!`), !Ju.position.amu(0, 0, 0)) {
            const uu = Lu.m.MS[0].Oyu(Ju.position);
            Ku && Py(uu), Ru.translation = uu.AEu()
          }
          const Nu = Lu.p.Forward();
          Ku && Py(Nu);
          const Xu = Lu.f.FromUnitVectorsToRef(pK, Nu, Lu.m.Quaternion[0]);
          Lu.f.IsIdentity(Xu) || (Ru.rotation = Xu.AEu());
          const Vu = {
            type: mu,
            name: Ju.name,
            color: Ju.diffuse.AEu(),
            intensity: Ju.intensity,
            size: Ju.height,
            rect: {
              aspect: Ju.width / Ju.height
            }
          };
          vy(Vu, xK), Vu.rect && vy(Vu.rect, SK), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Vu);
          const ru = {
              light: this._lights.lights.length - 1
            },
            Bu = yu.parent;
          if (Bu && qy(Ju, Bu)) {
            const uu = Eu.get(Bu);
            if (uu) {
              const yu = this._exporter._nodes[uu];
              return oy(Ru, yu), yu.extensions || (yu.extensions = {}), yu.extensions[BK] = ru, void Qu(null)
            }
          }
          Ru.extensions || (Ru.extensions = {}), Ru.extensions[BK] = ru, Qu(Ru)
        }))
      }
    }
    let WK = !1;

    function jK() {
      WK || (WK = !0, tE.RegisterExtension(BK, (uu => new TK(uu))))
    }
    jK();
    const HK = "KHR_materials_anisotropy";
    class dK {
      constructor(uu) {
        this.name = HK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof CR) {
          if (yu.anisotropy.isEnabled && !yu.anisotropy.legacy) return yu.anisotropy.texture && Eu.push(yu.anisotropy.texture), Eu
        } else if (yu instanceof aR && yu.specularRoughnessAnisotropy > 0) {
          const uu = function(uu) {
            const Ru = uu.specularRoughnessAnisotropyTexture,
              yu = uu.geometryTangentTexture;
            return `${Ru&&Ru.getInternalTexture()?Ru.getInternalTexture().uniqueId:"NoStrength"}_${yu&&yu.getInternalTexture()?yu.getInternalTexture().uniqueId:"NoTangent"}`
          }(yu);
          if (this._anisoTexturesMap[uu]) Eu.push(this._anisoTexturesMap[uu]);
          else {
            const Ru = await async function(uu) {
              const Ru = uu.lD(),
                yu = uu.specularRoughnessAnisotropyTexture,
                Eu = uu.geometryTangentTexture;
              return yu || Eu ? await my("AnisotropyTexture", Xy(Eu ? Jy(Eu, 0) : Ny(1), Eu ? Jy(Eu, 1) : Ny(0), yu ? Jy(yu, 0) : Ny(1)), Ru) : null
            }(yu);
            Ru && (Eu.push(Ru), this._anisoTexturesMap[uu] = Ru)
          }
          return Eu
        }
        return []
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          var Eu;
          if (yu instanceof CR) {
            if (!yu.anisotropy.isEnabled || yu.anisotropy.legacy) return void uu(Ru);
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            const Eu = this._exporter._materialExporter.getTextureInfo(yu.anisotropy.texture),
              Ku = {
                anisotropyStrength: yu.anisotropy.intensity,
                anisotropyRotation: yu.anisotropy.angle,
                anisotropyTexture: Eu ?? void 0
              };
            null !== Ku.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[HK] = Ku
          } else if (yu instanceof aR && yu.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            let Ku = yu.specularRoughnessTexture;
            yu._useRoughnessFromMetallicTextureGreen && (Ku = yu.baseMetalnessTexture);
            const Qu = this._anisoTexturesMap[yu.id];
            if (!Ku && !Qu) {
              let Eu = yu.specularRoughness,
                Ku = yu.specularRoughnessAnisotropy;
              if (!yu._useGltfStyleAnisotropy) {
                const uu = function(uu, Ru) {
                  const yu = uu * uu,
                    Eu = yu * Math.sqrt(2 / (1 + (1 - Ru) * (1 - Ru))),
                    Ku = (1 - Ru) * Eu;
                  return {
                    newBaseRoughness: Math.sqrt(Ku),
                    newAnisotropyStrength: Math.min(Math.sqrt((Eu - yu) / Math.max(1 - yu, 1e-4)), 1)
                  }
                }(yu.specularRoughness, yu.specularRoughnessAnisotropy);
                Eu = uu.newBaseRoughness, Ku = uu.newAnisotropyStrength
              }
              Ru.pbrMetallicRoughness && (Ru.pbrMetallicRoughness.roughnessFactor = Eu);
              const Qu = {
                anisotropyStrength: Ku,
                anisotropyRotation: yu.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Ru.extensions[HK] = Qu, uu(Ru)
            }
            const mu = Qu ? this._exporter._materialExporter.getTextureInfo(Qu) : null,
              Ju = {
                anisotropyStrength: yu.specularRoughnessAnisotropy,
                anisotropyRotation: yu.geometryTangentAngle,
                anisotropyTexture: mu || void 0,
                extensions: {}
              };
            yu._useGltfStyleAnisotropy || (Ru.extensions.KHR_materials_openpbr = {}, (Eu = this._exporter._glTF).extensionsUsed || (Eu.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[HK] = Ju
          }
          uu(Ru)
        }))
      }
    }
    let bK = !1;

    function CK() {
      bK || (bK = !0, tE.RegisterExtension(HK, (uu => new dK(uu))))
    }
    CK();
    const kK = "KHR_materials_clearcoat";

    function eK(uu, Ru) {
      const yu = new Gu.h(Ru.name, Ru.lD());
      return yu._texture = uu, yu.coordinatesIndex = Ru.coordinatesIndex, Ru instanceof Gu.h && (yu.uOffset = Ru.uOffset, yu.vOffset = Ru.vOffset, yu.uScale = Ru.uScale, yu.vScale = Ru.vScale, yu.wAng = Ru.wAng), yu.wrapU = Ru.wrapU, yu.wrapV = Ru.wrapV, yu
    }
    class AK {
      constructor(uu) {
        this.name = kK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = uu
      }
      dispose() {
        for (const uu of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[uu].dispose()
        }
        this._mergedTexturesMap = {};
        for (const uu of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[uu].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof CR) {
          if (yu.clearCoat.isEnabled) return yu.clearCoat.texture && Eu.push(yu.clearCoat.texture), !yu.clearCoat.useRoughnessFromMainTexture && yu.clearCoat.textureRoughness && Eu.push(yu.clearCoat.textureRoughness), yu.clearCoat.bumpTexture && Eu.push(yu.clearCoat.bumpTexture), Eu
        } else if (yu instanceof aR && yu.coatWeight > 0) {
          let uu = !1;
          if (yu.coatWeightTexture ? yu.coatRoughnessTexture ? yu._useCoatRoughnessFromGreenChannel && yu.coatWeightTexture.getInternalTexture() === yu.coatRoughnessTexture.getInternalTexture() ? (Eu.push(yu.coatWeightTexture), Eu.push(yu.coatRoughnessTexture)) : uu = !0 : Eu.push(yu.coatWeightTexture) : yu.coatRoughnessTexture && (yu._useCoatRoughnessFromGreenChannel ? Eu.push(yu.coatRoughnessTexture) : uu = !0), uu) {
            const uu = function(uu) {
              const Ru = uu.coatWeightTexture,
                yu = Ru && Ru.getInternalTexture() ? Ru.getInternalTexture().uniqueId : "NoCoat",
                Eu = uu.coatRoughnessTexture;
              return `${yu}_${Eu&&Eu.getInternalTexture()?Eu.getInternalTexture().uniqueId:"NoRoughness"}`
            }(yu);
            if (!this._cachedInternalTexturesMap[uu]) {
              const Ru = await async function(uu) {
                const Ru = uu.lD(),
                  yu = uu.coatWeightTexture,
                  Eu = uu.coatRoughnessTexture;
                return yu || Eu ? (await my("CoatTexture", Xy(yu ? Jy(yu, 0) : Ny(1), Eu ? Jy(Eu, uu._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ny(1)), Ru)).getInternalTexture() : null
              }(yu);
              Ru && (this._cachedInternalTexturesMap[uu] = Ru)
            }
            this._cachedInternalTexturesMap[uu] && (yu.coatWeightTexture && (this._mergedTexturesMap[yu.coatWeightTexture.uniqueId] = eK(this._cachedInternalTexturesMap[uu], yu.coatWeightTexture), Eu.push(this._mergedTexturesMap[yu.coatWeightTexture.uniqueId])), yu.coatRoughnessTexture && (this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId] = eK(this._cachedInternalTexturesMap[uu], yu.coatRoughnessTexture), Eu.push(this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId])))
          }
          return yu.geometryCoatNormalTexture && Eu.push(yu.geometryCoatNormalTexture), Eu
        }
        return []
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          if (yu instanceof CR) {
            if (!yu.clearCoat.isEnabled) return void uu(Ru);
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            const Eu = this._exporter._materialExporter.getTextureInfo(yu.clearCoat.texture);
            let Ku;
            Ku = yu.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(yu.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(yu.clearCoat.textureRoughness), yu.clearCoat.isTintEnabled && eR.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${yu.name}`), yu.clearCoat.remapF0OnInterfaceChange && eR.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${yu.name}`);
            const Qu = this._exporter._materialExporter.getTextureInfo(yu.clearCoat.bumpTexture),
              mu = {
                clearcoatFactor: yu.clearCoat.intensity,
                clearcoatTexture: Eu ?? void 0,
                clearcoatRoughnessFactor: yu.clearCoat.roughness,
                clearcoatRoughnessTexture: Ku ?? void 0,
                clearcoatNormalTexture: Qu ?? void 0
              };
            null === mu.clearcoatTexture && null === mu.clearcoatRoughnessTexture && null === mu.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[kK] = mu
          } else if (yu instanceof aR) {
            if (0 == yu.coatWeight) return void uu(Ru);
            let Eu, Ku, Qu, mu;
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {}, yu.coatWeightTexture && (Eu = this._mergedTexturesMap[yu.coatWeightTexture.uniqueId], Ku = this._exporter._materialExporter.getTextureInfo(Eu)), yu.coatRoughnessTexture && (Qu = this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId], mu = this._exporter._materialExporter.getTextureInfo(Qu)), yu.coatColorTexture && eR.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${yu.name}`);
            const Ju = this._exporter._materialExporter.getTextureInfo(yu.geometryCoatNormalTexture),
              Nu = {
                clearcoatFactor: yu.coatWeight,
                clearcoatTexture: Ku ?? void 0,
                clearcoatRoughnessFactor: yu.coatRoughness,
                clearcoatRoughnessTexture: mu ?? void 0,
                clearcoatNormalTexture: Ju ?? void 0
              };
            null === Nu.clearcoatTexture && null === Nu.clearcoatRoughnessTexture && null === Nu.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[kK] = Nu
          }
          uu(Ru)
        }))
      }
    }
    let DK = !1;

    function MK() {
      DK || (DK = !0, tE.RegisterExtension(kK, (uu => new AK(uu))))
    }
    MK();
    const IK = "KHR_materials_coat";

    function GK(uu) {
      const Ru = uu.coatRoughnessAnisotropyTexture,
        yu = uu.geometryCoatTangentTexture;
      return `${Ru&&Ru.getInternalTexture()?Ru.getInternalTexture().uniqueId:"NoStrength"}_${yu&&yu.getInternalTexture()?yu.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function UK(uu, Ru) {
      const yu = new Gu.h(Ru.name, Ru.lD());
      return yu._texture = uu, yu.coordinatesIndex = Ru.coordinatesIndex, Ru instanceof Gu.h && (yu.uOffset = Ru.uOffset, yu.vOffset = Ru.vOffset, yu.uScale = Ru.uScale, yu.vScale = Ru.vScale, yu.wAng = Ru.wAng), yu.wrapU = Ru.wrapU, yu.wrapV = Ru.wrapV, yu
    }
    class nK {
      constructor(uu) {
        this.name = IK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = uu
      }
      dispose() {
        for (const uu of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[uu].dispose()
        }
        this._mergedTexturesMap = {};
        for (const uu of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[uu].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof CR) {
          if (yu.clearCoat.isEnabled) return yu.clearCoat.texture && Eu.push(yu.clearCoat.texture), !yu.clearCoat.useRoughnessFromMainTexture && yu.clearCoat.textureRoughness && Eu.push(yu.clearCoat.textureRoughness), yu.clearCoat.bumpTexture && Eu.push(yu.clearCoat.bumpTexture), yu.clearCoat.tintTexture && Eu.push(yu.clearCoat.tintTexture), Eu
        } else if (yu instanceof aR && yu.coatWeight > 0) {
          let uu = !1;
          if (yu.coatWeightTexture ? yu.coatRoughnessTexture ? yu._useCoatRoughnessFromGreenChannel && yu.coatWeightTexture.getInternalTexture() === yu.coatRoughnessTexture.getInternalTexture() ? (Eu.push(yu.coatWeightTexture), Eu.push(yu.coatRoughnessTexture)) : uu = !0 : Eu.push(yu.coatWeightTexture) : yu.coatRoughnessTexture && (yu._useCoatRoughnessFromGreenChannel ? Eu.push(yu.coatRoughnessTexture) : uu = !0), uu) {
            const uu = function(uu) {
              const Ru = uu.coatWeightTexture,
                yu = Ru && Ru.getInternalTexture() ? Ru.getInternalTexture().uniqueId : "NoCoat",
                Eu = uu.coatRoughnessTexture;
              return `${yu}_${Eu&&Eu.getInternalTexture()?Eu.getInternalTexture().uniqueId:"NoRoughness"}`
            }(yu);
            if (!this._cachedInternalTexturesMap[uu]) {
              const Ru = await async function(uu) {
                const Ru = uu.lD(),
                  yu = uu.coatWeightTexture,
                  Eu = uu.coatRoughnessTexture;
                return yu || Eu ? (await my("CoatTexture", Xy(yu ? Jy(yu, 0) : Ny(1), Eu ? Jy(Eu, uu._useCoatRoughnessFromGreenChannel ? 1 : 0) : Ny(1)), Ru)).getInternalTexture() : null
              }(yu);
              Ru && (this._cachedInternalTexturesMap[uu] = Ru)
            }
            this._cachedInternalTexturesMap[uu] && (yu.coatWeightTexture && (this._mergedTexturesMap[yu.coatWeightTexture.uniqueId] = UK(this._cachedInternalTexturesMap[uu], yu.coatWeightTexture), Eu.push(this._mergedTexturesMap[yu.coatWeightTexture.uniqueId])), yu.coatRoughnessTexture && (this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId] = UK(this._cachedInternalTexturesMap[uu], yu.coatRoughnessTexture), Eu.push(this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId])))
          }
          if (yu.geometryCoatNormalTexture && Eu.push(yu.geometryCoatNormalTexture), yu.coatColorTexture && Eu.push(yu.coatColorTexture), yu.coatRoughnessAnisotropy > 0) {
            const uu = GK(yu);
            if (this._mergedTexturesMap[uu]) Eu.push(this._mergedTexturesMap[uu]);
            else {
              const Ru = await async function(uu) {
                const Ru = uu.lD(),
                  yu = uu.coatRoughnessAnisotropyTexture,
                  Eu = uu.geometryCoatTangentTexture;
                return yu || Eu ? await my("AnisotropyTexture", Xy(Eu ? Jy(Eu, 0) : Ny(1), Eu ? Jy(Eu, 1) : Ny(0), yu ? Jy(yu, 0) : Ny(1)), Ru) : null
              }(yu);
              Ru && (Eu.push(Ru), this._mergedTexturesMap[uu] = Ru)
            }
            return Eu
          }
          return Eu
        }
        return []
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          var Eu;
          if (yu instanceof CR) {
            if (!yu.clearCoat.isEnabled) return void uu(Ru);
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            const Eu = this._exporter._materialExporter.getTextureInfo(yu.clearCoat.texture);
            let Ku, Qu;
            Ku = yu.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(yu.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(yu.clearCoat.textureRoughness), yu.clearCoat.isTintEnabled && (Qu = this._exporter._materialExporter.getTextureInfo(yu.clearCoat.tintTexture));
            const mu = this._exporter._materialExporter.getTextureInfo(yu.clearCoat.bumpTexture),
              Ju = yu.clearCoat.indexOfRefraction,
              Nu = {
                coatFactor: yu.clearCoat.intensity,
                coatTexture: Eu ?? void 0,
                coatRoughnessFactor: yu.clearCoat.roughness,
                coatRoughnessTexture: Ku ?? void 0,
                coatNormalTexture: mu ?? void 0,
                coatColorFactor: yu.clearCoat.tintColor.AEu(),
                coatColorTexture: Qu ?? void 0,
                coatIor: 1.5 !== Ju ? Ju : void 0
              };
            null === Nu.coatTexture && null === Nu.coatRoughnessTexture && null === Nu.coatRoughnessTexture && null === Nu.coatColorTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[IK] = Nu
          } else if (yu instanceof aR) {
            if (0 == yu.coatWeight) return void uu(Ru);
            let Ku, Qu, mu, Ju;
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {}, yu.coatWeightTexture && (Ku = this._mergedTexturesMap[yu.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[yu.coatWeightTexture.uniqueId] : yu.coatWeightTexture, Qu = this._exporter._materialExporter.getTextureInfo(Ku)), yu.coatRoughnessTexture && (mu = this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[yu.coatRoughnessTexture.uniqueId] : yu.coatRoughnessTexture, Ju = this._exporter._materialExporter.getTextureInfo(mu));
            const Nu = this._exporter._materialExporter.getTextureInfo(yu.geometryCoatNormalTexture),
              Xu = this._exporter._materialExporter.getTextureInfo(yu.coatColorTexture),
              Vu = yu.coatIor,
              ru = yu.coatDarkening,
              Bu = yu.coatRoughnessTexture,
              xu = GK(yu),
              Su = this._mergedTexturesMap[xu];
            let pu, Tu = 0,
              Wu = 0;
            if (yu.coatRoughnessAnisotropy > 0) {
              if (Bu || Su) {
                const uu = Su ? this._exporter._materialExporter.getTextureInfo(Su) : null;
                Tu = yu.coatRoughnessAnisotropy, Wu = yu.geometryCoatTangentAngle, pu = uu || void 0
              } else {
                let uu = yu.coatRoughness,
                  Eu = yu.coatRoughnessAnisotropy;
                if (!yu._useGltfStyleAnisotropy) {
                  const Ru = function(uu, Ru) {
                    const yu = uu * uu,
                      Eu = yu * Math.sqrt(2 / (1 + (1 - Ru) * (1 - Ru))),
                      Ku = (1 - Ru) * Eu;
                    return {
                      newBaseRoughness: Math.sqrt(Ku),
                      newAnisotropyStrength: Math.min(Math.sqrt((Eu - yu) / Math.max(1 - yu, 1e-4)), 1)
                    }
                  }(yu.coatRoughness, yu.coatRoughnessAnisotropy);
                  uu = Ru.newBaseRoughness, Eu = Ru.newAnisotropyStrength
                }
                Ru.pbrMetallicRoughness && (Ru.pbrMetallicRoughness.roughnessFactor = uu), Tu = Eu, Wu = yu.geometryCoatTangentAngle + .5 * Math.PI, pu = void 0
              }
              yu._useGltfStyleAnisotropy || (Ru.extensions.KHR_materials_openpbr = {}, (Eu = this._exporter._glTF).extensionsUsed || (Eu.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const ju = {
              coatFactor: yu.coatWeight,
              coatTexture: Qu ?? void 0,
              coatRoughnessFactor: yu.coatRoughness,
              coatRoughnessTexture: Ju ?? void 0,
              coatNormalTexture: Nu ?? void 0,
              coatColorFactor: yu.coatColor.AEu(),
              coatColorTexture: Xu ?? void 0,
              coatIor: 1.5 !== Vu ? Vu : void 0,
              coatDarkeningFactor: 1 !== ru ? ru : void 0,
              coatAnisotropyRotation: Wu,
              coatAnisotropyStrength: Tu,
              coatAnisotropyTexture: pu
            };
            null === ju.coatTexture && null === ju.coatRoughnessTexture && null === ju.coatRoughnessTexture && null === ju.coatAnisotropyTexture && null === ju.coatColorTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[IK] = ju
          }
          uu(Ru)
        }))
      }
    }
    let sK = !1;

    function tK() {
      sK || (sK = !0, tE.RegisterExtension(IK, (uu => new nK(uu))))
    }
    tK();
    let lK = (() => {
      var uu, Ru, yu, Eu, Ku, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu, Tu, Wu, ju, Hu, du, bu, Cu, ku, eu, Mu, Iu, Gu, Uu, nu, su, lu, gu, cu, Lu, zu, Fu, wu, Zu, hu, Pu, Yu, ou, qu, Ou, vu, au, fu, uR, RR, yR, ER, KR, QR, mR, JR, NR, XR, VR, rR, BR, xR, SR, pR, TR, WR, jR, HR;
      let dR, bR, eR, AR, DR, MR, IR, GR, UR, nR, sR, tR, lR, gR, cR, LR, zR, FR, wR, ZR, hR, PR, iR, YR, oR, qR, OR, vR, aR, fR, uy, Ry, yy, Ey, Ky, Qy, my, Jy, Ny, Xy, Vy, ry, By, xy, Sy, py, Ty, Wy, jy, Hy, dy, by, Cy, ky, ey, Ay, Dy, My, Iy, Gy, Uy, ny, sy, ty, ly, gy, cy, Ly, zy = CR,
        Fy = [],
        wy = [],
        Zy = [],
        hy = [],
        Py = [],
        iy = [],
        Yy = [],
        oy = [],
        qy = [],
        Oy = [],
        vy = [],
        ay = [],
        fy = [],
        uE = [],
        RE = [],
        yE = [],
        EE = [],
        KE = [],
        QE = [],
        mE = [],
        JE = [],
        NE = [],
        XE = [],
        VE = [],
        rE = [],
        BE = [],
        xE = [],
        SE = [],
        pE = [],
        TE = [],
        WE = [],
        jE = [],
        HE = [],
        dE = [],
        bE = [],
        CE = [],
        kE = [],
        eE = [],
        AE = [],
        DE = [],
        ME = [],
        IE = [],
        GE = [],
        UE = [],
        nE = [],
        sE = [],
        tE = [],
        lE = [],
        gE = [],
        cE = [],
        LE = [],
        zE = [],
        FE = [],
        wE = [],
        ZE = [],
        hE = [],
        PE = [],
        iE = [],
        YE = [],
        oE = [],
        qE = [],
        OE = [],
        vE = [],
        aE = [],
        fE = [],
        uK = [],
        RK = [],
        yK = [],
        EK = [],
        KK = [],
        QK = [],
        mK = [],
        JK = [],
        NK = [],
        XK = [],
        VK = [],
        rK = [],
        BK = [],
        xK = [],
        SK = [],
        pK = [],
        TK = [],
        WK = [],
        jK = [],
        HK = [],
        dK = [],
        bK = [],
        CK = [],
        kK = [],
        eK = [],
        AK = [],
        DK = [],
        MK = [],
        IK = [],
        GK = [],
        UK = [],
        nK = [],
        sK = [],
        tK = [],
        lK = [],
        gK = [],
        cK = [],
        LK = [],
        zK = [],
        FK = [],
        wK = [],
        ZK = [],
        hK = [],
        PK = [],
        iK = [],
        YK = [],
        oK = [],
        qK = [],
        OK = [],
        vK = [],
        aK = [],
        fK = [],
        uQ = [],
        RQ = [],
        yQ = [],
        EQ = [],
        KQ = [],
        QQ = [],
        mQ = [],
        JQ = [],
        NQ = [],
        XQ = [],
        VQ = [],
        rQ = [],
        BQ = [],
        xQ = [],
        SQ = [],
        pQ = [];
      return uu = class extends zy {
        get directIntensity() {
          return (0, Au.e)(this, Ru, "f")
        }
        set directIntensity(uu) {
          (0, Au.f)(this, Ru, uu, "f")
        }
        get emissiveIntensity() {
          return (0, Au.e)(this, yu, "f")
        }
        set emissiveIntensity(uu) {
          (0, Au.f)(this, yu, uu, "f")
        }
        get environmentIntensity() {
          return (0, Au.e)(this, Eu, "f")
        }
        set environmentIntensity(uu) {
          (0, Au.f)(this, Eu, uu, "f")
        }
        get specularIntensity() {
          return (0, Au.e)(this, Ku, "f")
        }
        set specularIntensity(uu) {
          (0, Au.f)(this, Ku, uu, "f")
        }
        get disableBumpMap() {
          return (0, Au.e)(this, mu, "f")
        }
        set disableBumpMap(uu) {
          (0, Au.f)(this, mu, uu, "f")
        }
        get albedoTexture() {
          return (0, Au.e)(this, Ju, "f")
        }
        set albedoTexture(uu) {
          (0, Au.f)(this, Ju, uu, "f")
        }
        get baseWeightTexture() {
          return (0, Au.e)(this, Nu, "f")
        }
        set baseWeightTexture(uu) {
          (0, Au.f)(this, Nu, uu, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, Au.e)(this, Xu, "f")
        }
        set baseDiffuseRoughnessTexture(uu) {
          (0, Au.f)(this, Xu, uu, "f")
        }
        get ambientTexture() {
          return (0, Au.e)(this, Vu, "f")
        }
        set ambientTexture(uu) {
          (0, Au.f)(this, Vu, uu, "f")
        }
        get ambientTextureStrength() {
          return (0, Au.e)(this, ru, "f")
        }
        set ambientTextureStrength(uu) {
          (0, Au.f)(this, ru, uu, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, Au.e)(this, Bu, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(uu) {
          (0, Au.f)(this, Bu, uu, "f")
        }
        get opacityTexture() {
          return (0, Au.e)(this, xu, "f")
        }
        set opacityTexture(uu) {
          (0, Au.f)(this, xu, uu, "f")
        }
        get reflectionTexture() {
          return (0, Au.e)(this, Su, "f")
        }
        set reflectionTexture(uu) {
          (0, Au.f)(this, Su, uu, "f")
        }
        get emissiveTexture() {
          return (0, Au.e)(this, pu, "f")
        }
        set emissiveTexture(uu) {
          (0, Au.f)(this, pu, uu, "f")
        }
        get reflectivityTexture() {
          return (0, Au.e)(this, Tu, "f")
        }
        set reflectivityTexture(uu) {
          (0, Au.f)(this, Tu, uu, "f")
        }
        get metallicTexture() {
          return (0, Au.e)(this, Wu, "f")
        }
        set metallicTexture(uu) {
          (0, Au.f)(this, Wu, uu, "f")
        }
        get metallic() {
          return (0, Au.e)(this, ju, "f")
        }
        set metallic(uu) {
          (0, Au.f)(this, ju, uu, "f")
        }
        get roughness() {
          return (0, Au.e)(this, Hu, "f")
        }
        set roughness(uu) {
          (0, Au.f)(this, Hu, uu, "f")
        }
        get metallicF0Factor() {
          return (0, Au.e)(this, du, "f")
        }
        set metallicF0Factor(uu) {
          (0, Au.f)(this, du, uu, "f")
        }
        get metallicReflectanceColor() {
          return (0, Au.e)(this, bu, "f")
        }
        set metallicReflectanceColor(uu) {
          (0, Au.f)(this, bu, uu, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, Au.e)(this, Cu, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(uu) {
          (0, Au.f)(this, Cu, uu, "f")
        }
        get metallicReflectanceTexture() {
          return (0, Au.e)(this, ku, "f")
        }
        set metallicReflectanceTexture(uu) {
          (0, Au.f)(this, ku, uu, "f")
        }
        get reflectanceTexture() {
          return (0, Au.e)(this, eu, "f")
        }
        set reflectanceTexture(uu) {
          (0, Au.f)(this, eu, uu, "f")
        }
        get microSurfaceTexture() {
          return (0, Au.e)(this, Mu, "f")
        }
        set microSurfaceTexture(uu) {
          (0, Au.f)(this, Mu, uu, "f")
        }
        get bumpTexture() {
          return (0, Au.e)(this, Iu, "f")
        }
        set bumpTexture(uu) {
          (0, Au.f)(this, Iu, uu, "f")
        }
        get lightmapTexture() {
          return (0, Au.e)(this, Gu, "f")
        }
        set lightmapTexture(uu) {
          (0, Au.f)(this, Gu, uu, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(uu) {
          this.subSurface.refractionTexture = uu, uu ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, Au.e)(this, Uu, "f")
        }
        set ambientColor(uu) {
          (0, Au.f)(this, Uu, uu, "f")
        }
        get albedoColor() {
          return (0, Au.e)(this, nu, "f")
        }
        set albedoColor(uu) {
          (0, Au.f)(this, nu, uu, "f")
        }
        get baseWeight() {
          return (0, Au.e)(this, su, "f")
        }
        set baseWeight(uu) {
          (0, Au.f)(this, su, uu, "f")
        }
        get baseDiffuseRoughness() {
          return (0, Au.e)(this, lu, "f")
        }
        set baseDiffuseRoughness(uu) {
          (0, Au.f)(this, lu, uu, "f")
        }
        get reflectivityColor() {
          return (0, Au.e)(this, gu, "f")
        }
        set reflectivityColor(uu) {
          (0, Au.f)(this, gu, uu, "f")
        }
        get reflectionColor() {
          return (0, Au.e)(this, cu, "f")
        }
        set reflectionColor(uu) {
          (0, Au.f)(this, cu, uu, "f")
        }
        get emissiveColor() {
          return (0, Au.e)(this, Lu, "f")
        }
        set emissiveColor(uu) {
          (0, Au.f)(this, Lu, uu, "f")
        }
        get microSurface() {
          return (0, Au.e)(this, zu, "f")
        }
        set microSurface(uu) {
          (0, Au.f)(this, zu, uu, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(uu) {
          this.subSurface.indexOfRefraction = uu
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(uu) {
          this.subSurface.invertRefractionY = uu
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(uu) {
          this.subSurface.linkRefractionWithTransparency = uu, uu && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, Au.e)(this, Fu, "f")
        }
        set useLightmapAsShadowmap(uu) {
          (0, Au.f)(this, Fu, uu, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, Au.e)(this, wu, "f")
        }
        set useAlphaFromAlbedoTexture(uu) {
          (0, Au.f)(this, wu, uu, "f")
        }
        get forceAlphaTest() {
          return (0, Au.e)(this, Zu, "f")
        }
        set forceAlphaTest(uu) {
          (0, Au.f)(this, Zu, uu, "f")
        }
        get alphaCutOff() {
          return (0, Au.e)(this, hu, "f")
        }
        set alphaCutOff(uu) {
          (0, Au.f)(this, hu, uu, "f")
        }
        get useSpecularOverAlpha() {
          return (0, Au.e)(this, Pu, "f")
        }
        set useSpecularOverAlpha(uu) {
          (0, Au.f)(this, Pu, uu, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, Au.e)(this, Yu, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(uu) {
          (0, Au.f)(this, Yu, uu, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, Au.e)(this, ou, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(uu) {
          (0, Au.f)(this, ou, uu, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, Au.e)(this, qu, "f")
        }
        set useRoughnessFromMetallicTextureGreen(uu) {
          (0, Au.f)(this, qu, uu, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, Au.e)(this, Ou, "f")
        }
        set useMetallnessFromMetallicTextureBlue(uu) {
          (0, Au.f)(this, Ou, uu, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, Au.e)(this, vu, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(uu) {
          (0, Au.f)(this, vu, uu, "f")
        }
        get useAmbientInGrayScale() {
          return (0, Au.e)(this, au, "f")
        }
        set useAmbientInGrayScale(uu) {
          (0, Au.f)(this, au, uu, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, Au.e)(this, fu, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(uu) {
          (0, Au.f)(this, fu, uu, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === CR.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(uu) {
          uu !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? CR.LIGHTFALLOFF_PHYSICAL : CR.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === CR.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(uu) {
          uu !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? CR.LIGHTFALLOFF_GLTF : CR.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, Au.e)(this, uR, "f")
        }
        set useRadianceOverAlpha(uu) {
          (0, Au.f)(this, uR, uu, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, Au.e)(this, RR, "f")
        }
        set useObjectSpaceNormalMap(uu) {
          (0, Au.f)(this, RR, uu, "f")
        }
        get useParallax() {
          return (0, Au.e)(this, yR, "f")
        }
        set useParallax(uu) {
          (0, Au.f)(this, yR, uu, "f")
        }
        get useParallaxOcclusion() {
          return (0, Au.e)(this, ER, "f")
        }
        set useParallaxOcclusion(uu) {
          (0, Au.f)(this, ER, uu, "f")
        }
        get parallaxScaleBias() {
          return (0, Au.e)(this, KR, "f")
        }
        set parallaxScaleBias(uu) {
          (0, Au.f)(this, KR, uu, "f")
        }
        get disableLighting() {
          return (0, Au.e)(this, QR, "f")
        }
        set disableLighting(uu) {
          (0, Au.f)(this, QR, uu, "f")
        }
        get forceIrradianceInFragment() {
          return (0, Au.e)(this, mR, "f")
        }
        set forceIrradianceInFragment(uu) {
          (0, Au.f)(this, mR, uu, "f")
        }
        get maxSimultaneousLights() {
          return (0, Au.e)(this, JR, "f")
        }
        set maxSimultaneousLights(uu) {
          (0, Au.f)(this, JR, uu, "f")
        }
        get invertNormalMapX() {
          return (0, Au.e)(this, NR, "f")
        }
        set invertNormalMapX(uu) {
          (0, Au.f)(this, NR, uu, "f")
        }
        get invertNormalMapY() {
          return (0, Au.e)(this, XR, "f")
        }
        set invertNormalMapY(uu) {
          (0, Au.f)(this, XR, uu, "f")
        }
        get twoSidedLighting() {
          return (0, Au.e)(this, VR, "f")
        }
        set twoSidedLighting(uu) {
          (0, Au.f)(this, VR, uu, "f")
        }
        get useAlphaFresnel() {
          return (0, Au.e)(this, rR, "f")
        }
        set useAlphaFresnel(uu) {
          (0, Au.f)(this, rR, uu, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, Au.e)(this, BR, "f")
        }
        set useLinearAlphaFresnel(uu) {
          (0, Au.f)(this, BR, uu, "f")
        }
        get environmentBRDFTexture() {
          return (0, Au.e)(this, xR, "f")
        }
        set environmentBRDFTexture(uu) {
          (0, Au.f)(this, xR, uu, "f")
        }
        get forceNormalForward() {
          return (0, Au.e)(this, SR, "f")
        }
        set forceNormalForward(uu) {
          (0, Au.f)(this, SR, uu, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, Au.e)(this, pR, "f")
        }
        set enableSpecularAntiAliasing(uu) {
          (0, Au.f)(this, pR, uu, "f")
        }
        get useHorizonOcclusion() {
          return (0, Au.e)(this, TR, "f")
        }
        set useHorizonOcclusion(uu) {
          (0, Au.f)(this, TR, uu, "f")
        }
        get useRadianceOcclusion() {
          return (0, Au.e)(this, WR, "f")
        }
        set useRadianceOcclusion(uu) {
          (0, Au.f)(this, WR, uu, "f")
        }
        get unlit() {
          return (0, Au.e)(this, jR, "f")
        }
        set unlit(uu) {
          (0, Au.f)(this, jR, uu, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, Au.e)(this, HR, "f")
        }
        set applyDecalMapAfterDetailMap(uu) {
          (0, Au.f)(this, HR, uu, "f")
        }
        constructor(Qu, Du) {
          super(Qu, Du, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Ru.set(this, ((0, Au.l)(this, Fy), (0, Au.l)(this, wy, 1))), yu.set(this, ((0, Au.l)(this, Zy), (0, Au.l)(this, hy, 1))), Eu.set(this, ((0, Au.l)(this, Py), (0, Au.l)(this, iy, 1))), Ku.set(this, ((0, Au.l)(this, Yy), (0, Au.l)(this, oy, 1))), mu.set(this, ((0, Au.l)(this, qy), (0, Au.l)(this, Oy, !1))), Ju.set(this, ((0, Au.l)(this, vy), (0, Au.l)(this, ay, void 0))), Nu.set(this, ((0, Au.l)(this, fy), (0, Au.l)(this, uE, void 0))), Xu.set(this, ((0, Au.l)(this, RE), (0, Au.l)(this, yE, void 0))), Vu.set(this, ((0, Au.l)(this, EE), (0, Au.l)(this, KE, void 0))), ru.set(this, ((0, Au.l)(this, QE), (0, Au.l)(this, mE, 1))), Bu.set(this, ((0, Au.l)(this, JE), (0, Au.l)(this, NE, uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), xu.set(this, ((0, Au.l)(this, XE), (0, Au.l)(this, VE, void 0))), Su.set(this, ((0, Au.l)(this, rE), (0, Au.l)(this, BE, void 0))), pu.set(this, ((0, Au.l)(this, xE), (0, Au.l)(this, SE, void 0))), Tu.set(this, ((0, Au.l)(this, pE), (0, Au.l)(this, TE, void 0))), Wu.set(this, ((0, Au.l)(this, WE), (0, Au.l)(this, jE, void 0))), ju.set(this, ((0, Au.l)(this, HE), (0, Au.l)(this, dE, void 0))), Hu.set(this, ((0, Au.l)(this, bE), (0, Au.l)(this, CE, void 0))), du.set(this, ((0, Au.l)(this, kE), (0, Au.l)(this, eE, 1))), bu.set(this, ((0, Au.l)(this, AE), (0, Au.l)(this, DE, iu.d.White()))), Cu.set(this, ((0, Au.l)(this, ME), (0, Au.l)(this, IE, !1))), ku.set(this, ((0, Au.l)(this, GE), (0, Au.l)(this, UE, void 0))), eu.set(this, ((0, Au.l)(this, nE), (0, Au.l)(this, sE, void 0))), Mu.set(this, ((0, Au.l)(this, tE), (0, Au.l)(this, lE, void 0))), Iu.set(this, ((0, Au.l)(this, gE), (0, Au.l)(this, cE, void 0))), Gu.set(this, ((0, Au.l)(this, LE), (0, Au.l)(this, zE, void 0))), Uu.set(this, ((0, Au.l)(this, FE), (0, Au.l)(this, wE, new iu.d(0, 0, 0)))), nu.set(this, ((0, Au.l)(this, ZE), (0, Au.l)(this, hE, new iu.d(1, 1, 1)))), su.set(this, ((0, Au.l)(this, PE), (0, Au.l)(this, iE, 1))), lu.set(this, ((0, Au.l)(this, YE), (0, Au.l)(this, oE, void 0))), gu.set(this, ((0, Au.l)(this, qE), (0, Au.l)(this, OE, new iu.d(1, 1, 1)))), cu.set(this, ((0, Au.l)(this, vE), (0, Au.l)(this, aE, new iu.d(1, 1, 1)))), Lu.set(this, ((0, Au.l)(this, fE), (0, Au.l)(this, uK, new iu.d(0, 0, 0)))), zu.set(this, ((0, Au.l)(this, RK), (0, Au.l)(this, yK, 1))), Fu.set(this, ((0, Au.l)(this, EK), (0, Au.l)(this, KK, !1))), wu.set(this, ((0, Au.l)(this, QK), (0, Au.l)(this, mK, !1))), Zu.set(this, ((0, Au.l)(this, JK), (0, Au.l)(this, NK, !1))), hu.set(this, ((0, Au.l)(this, XK), (0, Au.l)(this, VK, .4))), Pu.set(this, ((0, Au.l)(this, rK), (0, Au.l)(this, BK, !0))), Yu.set(this, ((0, Au.l)(this, xK), (0, Au.l)(this, SK, !1))), ou.set(this, ((0, Au.l)(this, pK), (0, Au.l)(this, TK, !0))), qu.set(this, ((0, Au.l)(this, WK), (0, Au.l)(this, jK, !1))), Ou.set(this, ((0, Au.l)(this, HK), (0, Au.l)(this, dK, !1))), vu.set(this, ((0, Au.l)(this, bK), (0, Au.l)(this, CK, !1))), au.set(this, ((0, Au.l)(this, kK), (0, Au.l)(this, eK, !1))), fu.set(this, ((0, Au.l)(this, AK), (0, Au.l)(this, DK, !1))), uR.set(this, ((0, Au.l)(this, MK), (0, Au.l)(this, IK, !0))), RR.set(this, ((0, Au.l)(this, GK), (0, Au.l)(this, UK, !1))), yR.set(this, ((0, Au.l)(this, nK), (0, Au.l)(this, sK, !1))), ER.set(this, ((0, Au.l)(this, tK), (0, Au.l)(this, lK, !1))), KR.set(this, ((0, Au.l)(this, gK), (0, Au.l)(this, cK, .05))), QR.set(this, ((0, Au.l)(this, LK), (0, Au.l)(this, zK, !1))), mR.set(this, ((0, Au.l)(this, FK), (0, Au.l)(this, wK, !1))), JR.set(this, ((0, Au.l)(this, ZK), (0, Au.l)(this, hK, 4))), NR.set(this, ((0, Au.l)(this, PK), (0, Au.l)(this, iK, !1))), XR.set(this, ((0, Au.l)(this, YK), (0, Au.l)(this, oK, !1))), VR.set(this, ((0, Au.l)(this, qK), (0, Au.l)(this, OK, !1))), rR.set(this, ((0, Au.l)(this, vK), (0, Au.l)(this, aK, !1))), BR.set(this, ((0, Au.l)(this, fK), (0, Au.l)(this, uQ, !1))), xR.set(this, ((0, Au.l)(this, RQ), (0, Au.l)(this, yQ, null))), SR.set(this, ((0, Au.l)(this, EQ), (0, Au.l)(this, KQ, !1))), pR.set(this, ((0, Au.l)(this, QQ), (0, Au.l)(this, mQ, !1))), TR.set(this, ((0, Au.l)(this, JQ), (0, Au.l)(this, NQ, !0))), WR.set(this, ((0, Au.l)(this, XQ), (0, Au.l)(this, VQ, !0))), jR.set(this, ((0, Au.l)(this, rQ), (0, Au.l)(this, BQ, !1))), HR.set(this, ((0, Au.l)(this, xQ), (0, Au.l)(this, SQ, !1))), (0, Au.l)(this, pQ), this._environmentBRDFTexture = tu(this.lD())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Ru) {
          let yu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ku = kR.c.Clone((() => new uu(Ru, this.lD())), this, {
            cloneTexturesOnlyOnce: yu
          });
          return Ku.id = Ru, Ku.name = Ru, this.stencil.copyTo(Ku.stencil), this._clonePlugins(Ku, Eu), Ku
        }
        serialize() {
          const uu = super.serialize();
          return uu.customType = "BABYLON.PBRMaterial", uu
        }
        static Parse(Ru, yu, Eu) {
          const Ku = kR.c.Parse((() => new uu(Ru.name, yu)), Ru, yu, Eu);
          return Ru.stencil && Ku.stencil.parse(Ru.stencil, yu, Eu), Qu.d._ParsePlugins(Ru, Ku, yu, Eu), Ru.clearCoat && Ku.clearCoat.parse(Ru.clearCoat, yu, Eu), Ru.anisotropy && Ku.anisotropy.parse(Ru.anisotropy, yu, Eu), Ru.brdf && Ku.brdf.parse(Ru.brdf, yu, Eu), Ru.sheen && Ku.sheen.parse(Ru.sheen, yu, Eu), Ru.subSurface && Ku.subSurface.parse(Ru.subSurface, yu, Eu), Ru.iridescence && Ku.iridescence.parse(Ru.iridescence, yu, Eu), Ku
        }
      }, Ru = new WeakMap, yu = new WeakMap, Eu = new WeakMap, Ku = new WeakMap, mu = new WeakMap, Ju = new WeakMap, Nu = new WeakMap, Xu = new WeakMap, Vu = new WeakMap, ru = new WeakMap, Bu = new WeakMap, xu = new WeakMap, Su = new WeakMap, pu = new WeakMap, Tu = new WeakMap, Wu = new WeakMap, ju = new WeakMap, Hu = new WeakMap, du = new WeakMap, bu = new WeakMap, Cu = new WeakMap, ku = new WeakMap, eu = new WeakMap, Mu = new WeakMap, Iu = new WeakMap, Gu = new WeakMap, Uu = new WeakMap, nu = new WeakMap, su = new WeakMap, lu = new WeakMap, gu = new WeakMap, cu = new WeakMap, Lu = new WeakMap, zu = new WeakMap, Fu = new WeakMap, wu = new WeakMap, Zu = new WeakMap, hu = new WeakMap, Pu = new WeakMap, Yu = new WeakMap, ou = new WeakMap, qu = new WeakMap, Ou = new WeakMap, vu = new WeakMap, au = new WeakMap, fu = new WeakMap, uR = new WeakMap, RR = new WeakMap, yR = new WeakMap, ER = new WeakMap, KR = new WeakMap, QR = new WeakMap, mR = new WeakMap, JR = new WeakMap, NR = new WeakMap, XR = new WeakMap, VR = new WeakMap, rR = new WeakMap, BR = new WeakMap, xR = new WeakMap, SR = new WeakMap, pR = new WeakMap, TR = new WeakMap, WR = new WeakMap, jR = new WeakMap, HR = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(zy[Symbol.metadata] ?? null) : void 0;
        dR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], bR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], eR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], AR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], DR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], MR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], IR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], GR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], nR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], sR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], tR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], lR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], gR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], cR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], zR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], FR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], wR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ZR = [(0, Du.n)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], hR = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], PR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], YR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], oR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], qR = [(0, Du.A)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty", null)], OR = [(0, Du.n)("ambient"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], vR = [(0, Du.n)("albedo"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], aR = [(0, Du.K)("baseWeight"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], fR = [(0, Du.K)("baseDiffuseRoughness"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], uy = [(0, Du.n)("reflectivity"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Ry = [(0, Du.n)("reflection"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], yy = [(0, Du.n)("emissive"), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Ky = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Qy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], my = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Jy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ny = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Xy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Vy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ry = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], By = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], xy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Sy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], py = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Ty = [(0, Du.K)()], Wy = [(0, Du.K)()], jy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Hy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], dy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], by = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Cy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ky = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsLightsDirty")], ey = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Ay = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsLightsDirty")], Dy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], My = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Iy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Gy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], Uy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ny = [(0, Du.f)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ty = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], ly = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], gy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsTexturesDirty")], cy = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], Ly = [(0, Du.K)(), (0, Du.f)("_markAllSubMeshesAsMiscDirty")], (0, Au.h)(uu, null, dR, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "directIntensity" in uu,
            get: uu => uu.directIntensity,
            set: (uu, Ru) => {
              uu.directIntensity = Ru
            }
          },
          metadata: Ru
        }, wy, Zy), (0, Au.h)(uu, null, bR, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "emissiveIntensity" in uu,
            get: uu => uu.emissiveIntensity,
            set: (uu, Ru) => {
              uu.emissiveIntensity = Ru
            }
          },
          metadata: Ru
        }, hy, Py), (0, Au.h)(uu, null, eR, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "environmentIntensity" in uu,
            get: uu => uu.environmentIntensity,
            set: (uu, Ru) => {
              uu.environmentIntensity = Ru
            }
          },
          metadata: Ru
        }, iy, Yy), (0, Au.h)(uu, null, AR, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "specularIntensity" in uu,
            get: uu => uu.specularIntensity,
            set: (uu, Ru) => {
              uu.specularIntensity = Ru
            }
          },
          metadata: Ru
        }, oy, qy), (0, Au.h)(uu, null, DR, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableBumpMap" in uu,
            get: uu => uu.disableBumpMap,
            set: (uu, Ru) => {
              uu.disableBumpMap = Ru
            }
          },
          metadata: Ru
        }, Oy, vy), (0, Au.h)(uu, null, MR, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "albedoTexture" in uu,
            get: uu => uu.albedoTexture,
            set: (uu, Ru) => {
              uu.albedoTexture = Ru
            }
          },
          metadata: Ru
        }, ay, fy), (0, Au.h)(uu, null, IR, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseWeightTexture" in uu,
            get: uu => uu.baseWeightTexture,
            set: (uu, Ru) => {
              uu.baseWeightTexture = Ru
            }
          },
          metadata: Ru
        }, uE, RE), (0, Au.h)(uu, null, GR, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseDiffuseRoughnessTexture" in uu,
            get: uu => uu.baseDiffuseRoughnessTexture,
            set: (uu, Ru) => {
              uu.baseDiffuseRoughnessTexture = Ru
            }
          },
          metadata: Ru
        }, yE, EE), (0, Au.h)(uu, null, UR, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientTexture" in uu,
            get: uu => uu.ambientTexture,
            set: (uu, Ru) => {
              uu.ambientTexture = Ru
            }
          },
          metadata: Ru
        }, KE, QE), (0, Au.h)(uu, null, nR, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientTextureStrength" in uu,
            get: uu => uu.ambientTextureStrength,
            set: (uu, Ru) => {
              uu.ambientTextureStrength = Ru
            }
          },
          metadata: Ru
        }, mE, JE), (0, Au.h)(uu, null, sR, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientTextureImpactOnAnalyticalLights" in uu,
            get: uu => uu.ambientTextureImpactOnAnalyticalLights,
            set: (uu, Ru) => {
              uu.ambientTextureImpactOnAnalyticalLights = Ru
            }
          },
          metadata: Ru
        }, NE, XE), (0, Au.h)(uu, null, tR, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "opacityTexture" in uu,
            get: uu => uu.opacityTexture,
            set: (uu, Ru) => {
              uu.opacityTexture = Ru
            }
          },
          metadata: Ru
        }, VE, rE), (0, Au.h)(uu, null, lR, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectionTexture" in uu,
            get: uu => uu.reflectionTexture,
            set: (uu, Ru) => {
              uu.reflectionTexture = Ru
            }
          },
          metadata: Ru
        }, BE, xE), (0, Au.h)(uu, null, gR, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "emissiveTexture" in uu,
            get: uu => uu.emissiveTexture,
            set: (uu, Ru) => {
              uu.emissiveTexture = Ru
            }
          },
          metadata: Ru
        }, SE, pE), (0, Au.h)(uu, null, cR, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectivityTexture" in uu,
            get: uu => uu.reflectivityTexture,
            set: (uu, Ru) => {
              uu.reflectivityTexture = Ru
            }
          },
          metadata: Ru
        }, TE, WE), (0, Au.h)(uu, null, LR, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicTexture" in uu,
            get: uu => uu.metallicTexture,
            set: (uu, Ru) => {
              uu.metallicTexture = Ru
            }
          },
          metadata: Ru
        }, jE, HE), (0, Au.h)(uu, null, zR, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallic" in uu,
            get: uu => uu.metallic,
            set: (uu, Ru) => {
              uu.metallic = Ru
            }
          },
          metadata: Ru
        }, dE, bE), (0, Au.h)(uu, null, FR, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughness" in uu,
            get: uu => uu.roughness,
            set: (uu, Ru) => {
              uu.roughness = Ru
            }
          },
          metadata: Ru
        }, CE, kE), (0, Au.h)(uu, null, wR, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicF0Factor" in uu,
            get: uu => uu.metallicF0Factor,
            set: (uu, Ru) => {
              uu.metallicF0Factor = Ru
            }
          },
          metadata: Ru
        }, eE, AE), (0, Au.h)(uu, null, ZR, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicReflectanceColor" in uu,
            get: uu => uu.metallicReflectanceColor,
            set: (uu, Ru) => {
              uu.metallicReflectanceColor = Ru
            }
          },
          metadata: Ru
        }, DE, ME), (0, Au.h)(uu, null, hR, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useOnlyMetallicFromMetallicReflectanceTexture" in uu,
            get: uu => uu.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (uu, Ru) => {
              uu.useOnlyMetallicFromMetallicReflectanceTexture = Ru
            }
          },
          metadata: Ru
        }, IE, GE), (0, Au.h)(uu, null, PR, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicReflectanceTexture" in uu,
            get: uu => uu.metallicReflectanceTexture,
            set: (uu, Ru) => {
              uu.metallicReflectanceTexture = Ru
            }
          },
          metadata: Ru
        }, UE, nE), (0, Au.h)(uu, null, iR, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectanceTexture" in uu,
            get: uu => uu.reflectanceTexture,
            set: (uu, Ru) => {
              uu.reflectanceTexture = Ru
            }
          },
          metadata: Ru
        }, sE, tE), (0, Au.h)(uu, null, YR, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "microSurfaceTexture" in uu,
            get: uu => uu.microSurfaceTexture,
            set: (uu, Ru) => {
              uu.microSurfaceTexture = Ru
            }
          },
          metadata: Ru
        }, lE, gE), (0, Au.h)(uu, null, oR, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "bumpTexture" in uu,
            get: uu => uu.bumpTexture,
            set: (uu, Ru) => {
              uu.bumpTexture = Ru
            }
          },
          metadata: Ru
        }, cE, LE), (0, Au.h)(uu, null, qR, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "lightmapTexture" in uu,
            get: uu => uu.lightmapTexture,
            set: (uu, Ru) => {
              uu.lightmapTexture = Ru
            }
          },
          metadata: Ru
        }, zE, FE), (0, Au.h)(uu, null, OR, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientColor" in uu,
            get: uu => uu.ambientColor,
            set: (uu, Ru) => {
              uu.ambientColor = Ru
            }
          },
          metadata: Ru
        }, wE, ZE), (0, Au.h)(uu, null, vR, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "albedoColor" in uu,
            get: uu => uu.albedoColor,
            set: (uu, Ru) => {
              uu.albedoColor = Ru
            }
          },
          metadata: Ru
        }, hE, PE), (0, Au.h)(uu, null, aR, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseWeight" in uu,
            get: uu => uu.baseWeight,
            set: (uu, Ru) => {
              uu.baseWeight = Ru
            }
          },
          metadata: Ru
        }, iE, YE), (0, Au.h)(uu, null, fR, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseDiffuseRoughness" in uu,
            get: uu => uu.baseDiffuseRoughness,
            set: (uu, Ru) => {
              uu.baseDiffuseRoughness = Ru
            }
          },
          metadata: Ru
        }, oE, qE), (0, Au.h)(uu, null, uy, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectivityColor" in uu,
            get: uu => uu.reflectivityColor,
            set: (uu, Ru) => {
              uu.reflectivityColor = Ru
            }
          },
          metadata: Ru
        }, OE, vE), (0, Au.h)(uu, null, Ry, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectionColor" in uu,
            get: uu => uu.reflectionColor,
            set: (uu, Ru) => {
              uu.reflectionColor = Ru
            }
          },
          metadata: Ru
        }, aE, fE), (0, Au.h)(uu, null, yy, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "emissiveColor" in uu,
            get: uu => uu.emissiveColor,
            set: (uu, Ru) => {
              uu.emissiveColor = Ru
            }
          },
          metadata: Ru
        }, uK, RK), (0, Au.h)(uu, null, Ey, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: uu => "microSurface" in uu,
            get: uu => uu.microSurface,
            set: (uu, Ru) => {
              uu.microSurface = Ru
            }
          },
          metadata: Ru
        }, yK, EK), (0, Au.h)(uu, null, Ky, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLightmapAsShadowmap" in uu,
            get: uu => uu.useLightmapAsShadowmap,
            set: (uu, Ru) => {
              uu.useLightmapAsShadowmap = Ru
            }
          },
          metadata: Ru
        }, KK, QK), (0, Au.h)(uu, null, Qy, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlphaFromAlbedoTexture" in uu,
            get: uu => uu.useAlphaFromAlbedoTexture,
            set: (uu, Ru) => {
              uu.useAlphaFromAlbedoTexture = Ru
            }
          },
          metadata: Ru
        }, mK, JK), (0, Au.h)(uu, null, my, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceAlphaTest" in uu,
            get: uu => uu.forceAlphaTest,
            set: (uu, Ru) => {
              uu.forceAlphaTest = Ru
            }
          },
          metadata: Ru
        }, NK, XK), (0, Au.h)(uu, null, Jy, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: uu => "alphaCutOff" in uu,
            get: uu => uu.alphaCutOff,
            set: (uu, Ru) => {
              uu.alphaCutOff = Ru
            }
          },
          metadata: Ru
        }, VK, rK), (0, Au.h)(uu, null, Ny, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSpecularOverAlpha" in uu,
            get: uu => uu.useSpecularOverAlpha,
            set: (uu, Ru) => {
              uu.useSpecularOverAlpha = Ru
            }
          },
          metadata: Ru
        }, BK, xK), (0, Au.h)(uu, null, Xy, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useMicroSurfaceFromReflectivityMapAlpha" in uu,
            get: uu => uu.useMicroSurfaceFromReflectivityMapAlpha,
            set: (uu, Ru) => {
              uu.useMicroSurfaceFromReflectivityMapAlpha = Ru
            }
          },
          metadata: Ru
        }, SK, pK), (0, Au.h)(uu, null, Vy, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMetallicTextureAlpha" in uu,
            get: uu => uu.useRoughnessFromMetallicTextureAlpha,
            set: (uu, Ru) => {
              uu.useRoughnessFromMetallicTextureAlpha = Ru
            }
          },
          metadata: Ru
        }, TK, WK), (0, Au.h)(uu, null, ry, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMetallicTextureGreen" in uu,
            get: uu => uu.useRoughnessFromMetallicTextureGreen,
            set: (uu, Ru) => {
              uu.useRoughnessFromMetallicTextureGreen = Ru
            }
          },
          metadata: Ru
        }, jK, HK), (0, Au.h)(uu, null, By, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: uu => "useMetallnessFromMetallicTextureBlue" in uu,
            get: uu => uu.useMetallnessFromMetallicTextureBlue,
            set: (uu, Ru) => {
              uu.useMetallnessFromMetallicTextureBlue = Ru
            }
          },
          metadata: Ru
        }, dK, bK), (0, Au.h)(uu, null, xy, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAmbientOcclusionFromMetallicTextureRed" in uu,
            get: uu => uu.useAmbientOcclusionFromMetallicTextureRed,
            set: (uu, Ru) => {
              uu.useAmbientOcclusionFromMetallicTextureRed = Ru
            }
          },
          metadata: Ru
        }, CK, kK), (0, Au.h)(uu, null, Sy, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAmbientInGrayScale" in uu,
            get: uu => uu.useAmbientInGrayScale,
            set: (uu, Ru) => {
              uu.useAmbientInGrayScale = Ru
            }
          },
          metadata: Ru
        }, eK, AK), (0, Au.h)(uu, null, py, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAutoMicroSurfaceFromReflectivityMap" in uu,
            get: uu => uu.useAutoMicroSurfaceFromReflectivityMap,
            set: (uu, Ru) => {
              uu.useAutoMicroSurfaceFromReflectivityMap = Ru
            }
          },
          metadata: Ru
        }, DK, MK), (0, Au.h)(uu, null, Ty, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: uu => "usePhysicalLightFalloff" in uu,
            get: uu => uu.usePhysicalLightFalloff
          },
          metadata: Ru
        }, null, Fy), (0, Au.h)(uu, null, Wy, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: uu => "useGLTFLightFalloff" in uu,
            get: uu => uu.useGLTFLightFalloff
          },
          metadata: Ru
        }, null, Fy), (0, Au.h)(uu, null, jy, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRadianceOverAlpha" in uu,
            get: uu => uu.useRadianceOverAlpha,
            set: (uu, Ru) => {
              uu.useRadianceOverAlpha = Ru
            }
          },
          metadata: Ru
        }, IK, GK), (0, Au.h)(uu, null, Hy, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "useObjectSpaceNormalMap" in uu,
            get: uu => uu.useObjectSpaceNormalMap,
            set: (uu, Ru) => {
              uu.useObjectSpaceNormalMap = Ru
            }
          },
          metadata: Ru
        }, UK, nK), (0, Au.h)(uu, null, dy, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: uu => "useParallax" in uu,
            get: uu => uu.useParallax,
            set: (uu, Ru) => {
              uu.useParallax = Ru
            }
          },
          metadata: Ru
        }, sK, tK), (0, Au.h)(uu, null, by, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: uu => "useParallaxOcclusion" in uu,
            get: uu => uu.useParallaxOcclusion,
            set: (uu, Ru) => {
              uu.useParallaxOcclusion = Ru
            }
          },
          metadata: Ru
        }, lK, gK), (0, Au.h)(uu, null, Cy, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: uu => "parallaxScaleBias" in uu,
            get: uu => uu.parallaxScaleBias,
            set: (uu, Ru) => {
              uu.parallaxScaleBias = Ru
            }
          },
          metadata: Ru
        }, cK, LK), (0, Au.h)(uu, null, ky, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableLighting" in uu,
            get: uu => uu.disableLighting,
            set: (uu, Ru) => {
              uu.disableLighting = Ru
            }
          },
          metadata: Ru
        }, zK, FK), (0, Au.h)(uu, null, ey, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceIrradianceInFragment" in uu,
            get: uu => uu.forceIrradianceInFragment,
            set: (uu, Ru) => {
              uu.forceIrradianceInFragment = Ru
            }
          },
          metadata: Ru
        }, wK, ZK), (0, Au.h)(uu, null, Ay, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: uu => "maxSimultaneousLights" in uu,
            get: uu => uu.maxSimultaneousLights,
            set: (uu, Ru) => {
              uu.maxSimultaneousLights = Ru
            }
          },
          metadata: Ru
        }, hK, PK), (0, Au.h)(uu, null, Dy, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertNormalMapX" in uu,
            get: uu => uu.invertNormalMapX,
            set: (uu, Ru) => {
              uu.invertNormalMapX = Ru
            }
          },
          metadata: Ru
        }, iK, YK), (0, Au.h)(uu, null, My, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertNormalMapY" in uu,
            get: uu => uu.invertNormalMapY,
            set: (uu, Ru) => {
              uu.invertNormalMapY = Ru
            }
          },
          metadata: Ru
        }, oK, qK), (0, Au.h)(uu, null, Iy, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: uu => "twoSidedLighting" in uu,
            get: uu => uu.twoSidedLighting,
            set: (uu, Ru) => {
              uu.twoSidedLighting = Ru
            }
          },
          metadata: Ru
        }, OK, vK), (0, Au.h)(uu, null, Gy, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlphaFresnel" in uu,
            get: uu => uu.useAlphaFresnel,
            set: (uu, Ru) => {
              uu.useAlphaFresnel = Ru
            }
          },
          metadata: Ru
        }, aK, fK), (0, Au.h)(uu, null, Uy, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLinearAlphaFresnel" in uu,
            get: uu => uu.useLinearAlphaFresnel,
            set: (uu, Ru) => {
              uu.useLinearAlphaFresnel = Ru
            }
          },
          metadata: Ru
        }, uQ, RQ), (0, Au.h)(uu, null, ny, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "environmentBRDFTexture" in uu,
            get: uu => uu.environmentBRDFTexture,
            set: (uu, Ru) => {
              uu.environmentBRDFTexture = Ru
            }
          },
          metadata: Ru
        }, yQ, EQ), (0, Au.h)(uu, null, sy, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceNormalForward" in uu,
            get: uu => uu.forceNormalForward,
            set: (uu, Ru) => {
              uu.forceNormalForward = Ru
            }
          },
          metadata: Ru
        }, KQ, QQ), (0, Au.h)(uu, null, ty, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: uu => "enableSpecularAntiAliasing" in uu,
            get: uu => uu.enableSpecularAntiAliasing,
            set: (uu, Ru) => {
              uu.enableSpecularAntiAliasing = Ru
            }
          },
          metadata: Ru
        }, mQ, JQ), (0, Au.h)(uu, null, ly, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: uu => "useHorizonOcclusion" in uu,
            get: uu => uu.useHorizonOcclusion,
            set: (uu, Ru) => {
              uu.useHorizonOcclusion = Ru
            }
          },
          metadata: Ru
        }, NQ, XQ), (0, Au.h)(uu, null, gy, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRadianceOcclusion" in uu,
            get: uu => uu.useRadianceOcclusion,
            set: (uu, Ru) => {
              uu.useRadianceOcclusion = Ru
            }
          },
          metadata: Ru
        }, VQ, rQ), (0, Au.h)(uu, null, cy, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: uu => "unlit" in uu,
            get: uu => uu.unlit,
            set: (uu, Ru) => {
              uu.unlit = Ru
            }
          },
          metadata: Ru
        }, BQ, xQ), (0, Au.h)(uu, null, Ly, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "applyDecalMapAfterDetailMap" in uu,
            get: uu => uu.applyDecalMapAfterDetailMap,
            set: (uu, Ru) => {
              uu.applyDecalMapAfterDetailMap = Ru
            }
          },
          metadata: Ru
        }, SQ, pQ), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu.PBRMATERIAL_OPAQUE = CR.PBRMATERIAL_OPAQUE, uu.PBRMATERIAL_ALPHATEST = CR.PBRMATERIAL_ALPHATEST, uu.PBRMATERIAL_ALPHABLEND = CR.PBRMATERIAL_ALPHABLEND, uu.PBRMATERIAL_ALPHATESTANDBLEND = CR.PBRMATERIAL_ALPHATESTANDBLEND, uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = CR.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, uu
    })();
    const gK = "KHR_materials_diffuse_transmission";

    function cK(uu, Ru) {
      const yu = Ru.subSurface;
      let Eu = null;
      return yu.translucencyIntensityTexture ? Eu = yu.translucencyIntensityTexture : yu.thicknessTexture && yu.useMaskFromThicknessTexture && (Eu = yu.thicknessTexture), Eu && !yu.useGltfStyleTextures ? (Mu.e.Warn(`${uu}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Ru.name}`, 1), null) : Eu
    }
    class LK {
      constructor(uu) {
        this.name = gK, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof lK && this._isExtensionEnabled(yu)) {
          const Ru = cK(uu, yu);
          return Ru && Eu.push(Ru), yu.subSurface.translucencyColorTexture && Eu.push(yu.subSurface.translucencyColorTexture), Eu
        }
        return Eu
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Ru = uu.subSurface;
        return !!Ru.isTranslucencyEnabled && (!uu.unlit && !Ru.useAlbedoToTintTranslucency && Ru.useGltfStyleTextures && 1 === Ru.volumeIndexOfRefraction && 0 === Ru.minimumThickness && 0 === Ru.maximumThickness)
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((Eu => {
          if (yu instanceof lK && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0;
            const Eu = yu.subSurface,
              Ku = cK(uu, yu),
              Qu = 0 == Eu.translucencyIntensity ? void 0 : Eu.translucencyIntensity,
              mu = this._exporter._materialExporter.getTextureInfo(Ku) ?? void 0,
              Ju = !Eu.translucencyColor || Eu.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : Eu.translucencyColor.AEu(),
              Nu = this._exporter._materialExporter.getTextureInfo(Eu.translucencyColorTexture) ?? void 0,
              Xu = {
                diffuseTransmissionFactor: Qu,
                diffuseTransmissionTexture: mu,
                diffuseTransmissionColorFactor: Ju,
                diffuseTransmissionColorTexture: Nu
              };
            (mu || Nu) && this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions = Ru.extensions || {}, Ru.extensions[gK] = Xu
          }
          Eu(Ru)
        }))
      }
    }
    let zK = !1;

    function FK() {
      zK || (zK = !0, tE.RegisterExtension(gK, (uu => new LK(uu))))
    }
    FK();
    const wK = "KHR_materials_dispersion";
    class ZK {
      constructor() {
        this.name = wK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Ru = uu.subSurface;
        return !(!Ru.isRefractionEnabled && !Ru.isDispersionEnabled)
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          if (yu instanceof lK && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0;
            const uu = {
              dispersion: yu.subSurface.dispersion
            };
            Ru.extensions = Ru.extensions || {}, Ru.extensions[wK] = uu
          }
          uu(Ru)
        }))
      }
    }
    let hK = !1;

    function PK() {
      hK || (hK = !0, tE.RegisterExtension(wK, (() => new ZK)))
    }
    PK();
    const iK = "KHR_materials_emissive_strength";
    class YK {
      constructor() {
        this.name = iK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(uu, Ru, yu) {
        return await new Promise((uu => {
          if (!(yu instanceof lK)) return uu(Ru);
          const Eu = yu.emissiveColor.scale(yu.emissiveIntensity),
            Ku = Math.max(...Eu.AEu());
          if (Ku > 1) {
            Ru.emissiveFactor = Eu.scale(1 / Ku).AEu(), this._wasUsed = !0;
            const uu = {
              emissiveStrength: Ku
            };
            Ru.extensions || (Ru.extensions = {}), Ru.extensions[iK] = uu
          } else Ru.emissiveFactor = Eu.AEu();
          return uu(Ru)
        }))
      }
    }
    let oK = !1;

    function qK() {
      oK || (oK = !0, tE.RegisterExtension(iK, (() => new YK)))
    }
    qK();
    const OK = "KHR_materials_ior";
    class vK {
      constructor() {
        this.name = OK, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(uu) {
        return !uu.unlit && (uu instanceof aR ? 1.5 != uu.specularIor : uu instanceof lK && (void 0 != uu.indexOfRefraction && 1.5 != uu.indexOfRefraction))
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          if (yu instanceof lK && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0;
            const uu = {
              ior: yu.indexOfRefraction
            };
            Ru.extensions = Ru.extensions || {}, Ru.extensions[OK] = uu
          } else if (yu instanceof aR && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0;
            const uu = {
              ior: yu.specularIor
            };
            Ru.extensions = Ru.extensions || {}, Ru.extensions[OK] = uu
          }
          uu(Ru)
        }))
      }
    }
    let aK = !1;

    function fK() {
      aK || (aK = !0, tE.RegisterExtension(OK, (() => new vK)))
    }
    fK();
    const uQ = "KHR_materials_iridescence";
    class RQ {
      constructor(uu) {
        this.name = uQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof CR) {
          if (yu.iridescence.isEnabled) return yu.iridescence.texture && Eu.push(yu.iridescence.texture), yu.iridescence.thicknessTexture && yu.iridescence.thicknessTexture !== yu.iridescence.texture && Eu.push(yu.iridescence.thicknessTexture), Eu
        } else if (yu instanceof aR && yu.thinFilmWeight > 0) return yu.thinFilmWeightTexture && Eu.push(yu.thinFilmWeightTexture), yu.thinFilmThicknessTexture && yu.thinFilmThicknessTexture !== yu.thinFilmWeightTexture && Eu.push(yu.thinFilmThicknessTexture), Eu;
        return []
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          if (yu instanceof CR) {
            if (!yu.iridescence.isEnabled) return void uu(Ru);
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            const Eu = this._exporter._materialExporter.getTextureInfo(yu.iridescence.texture),
              Ku = this._exporter._materialExporter.getTextureInfo(yu.iridescence.thicknessTexture),
              Qu = {
                iridescenceFactor: yu.iridescence.intensity,
                iridescenceIor: yu.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: yu.iridescence.minimumThickness,
                iridescenceThicknessMaximum: yu.iridescence.maximumThickness,
                iridescenceTexture: Eu ?? void 0,
                iridescenceThicknessTexture: Ku ?? void 0
              };
            null === Qu.iridescenceTexture && null === Qu.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[uQ] = Qu
          } else if (yu instanceof aR) {
            if (yu.thinFilmWeight <= 0) return void uu(Ru);
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            const Eu = this._exporter._materialExporter.getTextureInfo(yu.thinFilmWeightTexture),
              Ku = this._exporter._materialExporter.getTextureInfo(yu.thinFilmThicknessTexture),
              Qu = {
                iridescenceFactor: yu.thinFilmWeight,
                iridescenceIor: yu.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * yu.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * yu.thinFilmThickness,
                iridescenceTexture: Eu ?? void 0,
                iridescenceThicknessTexture: Ku ?? void 0
              };
            null === Qu.iridescenceTexture && null === Qu.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[uQ] = Qu
          }
          uu(Ru)
        }))
      }
    }
    let yQ = !1;

    function EQ() {
      yQ || (yQ = !0, tE.RegisterExtension(uQ, (uu => new RQ(uu))))
    }
    EQ();
    const KQ = "KHR_materials_sheen";
    class QQ {
      constructor(uu) {
        this.name = KQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        return yu instanceof lK && yu.sheen.isEnabled && yu.sheen.texture ? [yu.sheen.texture] : []
      }
      async postExportMaterialAsync(uu, Ru, yu) {
        return await new Promise((uu => {
          if (yu instanceof lK) {
            if (!yu.sheen.isEnabled) return void uu(Ru);
            this._wasUsed = !0, null == Ru.extensions && (Ru.extensions = {});
            const Eu = {
              sheenColorFactor: yu.sheen.color.AEu(),
              sheenRoughnessFactor: yu.sheen.roughness ?? 0
            };
            null === Eu.sheenColorTexture && null === Eu.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(yu), yu.sheen.texture && (Eu.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(yu.sheen.texture) ?? void 0), yu.sheen.textureRoughness && !yu.sheen.useRoughnessFromMainTexture ? Eu.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(yu.sheen.textureRoughness) ?? void 0 : yu.sheen.texture && yu.sheen.useRoughnessFromMainTexture && (Eu.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(yu.sheen.texture) ?? void 0), Ru.extensions[KQ] = Eu
          }
          uu(Ru)
        }))
      }
    }
    let mQ = !1;

    function JQ() {
      mQ || (mQ = !0, tE.RegisterExtension(KQ, (uu => new QQ(uu))))
    }
    JQ();
    const NQ = "KHR_materials_fuzz";

    function XQ(uu, Ru) {
      const yu = new Gu.h(Ru.name, Ru.lD());
      return yu._texture = uu, yu.coordinatesIndex = Ru.coordinatesIndex, Ru instanceof Gu.h && (yu.uOffset = Ru.uOffset, yu.vOffset = Ru.vOffset, yu.uScale = Ru.uScale, yu.vScale = Ru.vScale, yu.wAng = Ru.wAng), yu.wrapU = Ru.wrapU, yu.wrapV = Ru.wrapV, yu
    }
    class VQ {
      constructor(uu) {
        this.name = NQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = uu
      }
      dispose() {
        for (const uu of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[uu].dispose()
        }
        this._mergedTexturesMap = {};
        for (const uu of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[uu].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        if (yu instanceof aR) {
          const uu = [];
          if (yu.fuzzWeight > 0) {
            yu.fuzzWeightTexture && uu.push(yu.fuzzWeightTexture);
            let Ru = !1;
            if (yu.fuzzRoughnessTexture && (yu._useFuzzRoughnessFromTextureAlpha ? uu.push(yu.fuzzRoughnessTexture) : Ru = !0), yu.fuzzColorTexture && !Ru && uu.push(yu.fuzzColorTexture), Ru) {
              const Ru = function(uu) {
                const Ru = uu.fuzzColorTexture,
                  yu = Ru && Ru.getInternalTexture() ? Ru.getInternalTexture().uniqueId : "NoFuzzColor",
                  Eu = uu.fuzzRoughnessTexture;
                return `FuzzColor_${yu}_FuzzRoughness_${Eu&&Eu.getInternalTexture()?Eu.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(yu);
              if (!this._cachedInternalTexturesMap[Ru]) {
                const uu = await async function(uu) {
                  const Ru = uu.lD(),
                    yu = uu.fuzzColorTexture,
                    Eu = uu.fuzzRoughnessTexture;
                  return yu || Eu ? (await my("FuzzTexture", Xy(yu ? Jy(yu, 0) : Ny(1), yu ? Jy(yu, 1) : Ny(1), yu ? Jy(yu, 2) : Ny(1), Eu ? Jy(Eu, uu._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Ny(1)), Ru)).getInternalTexture() : null
                }(yu);
                uu && (this._cachedInternalTexturesMap[Ru] = uu)
              }
              this._cachedInternalTexturesMap[Ru] && (yu.fuzzColorTexture && (this._mergedTexturesMap[yu.fuzzColorTexture.uniqueId] = XQ(this._cachedInternalTexturesMap[Ru], yu.fuzzColorTexture), uu.push(this._mergedTexturesMap[yu.fuzzColorTexture.uniqueId])), yu.fuzzRoughnessTexture && (this._mergedTexturesMap[yu.fuzzRoughnessTexture.uniqueId] = XQ(this._cachedInternalTexturesMap[Ru], yu.fuzzRoughnessTexture), uu.push(this._mergedTexturesMap[yu.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return uu
        }
        return []
      }
      async postExportMaterialAsync(uu, Ru, yu) {
        return await new Promise((uu => {
          if (yu instanceof aR) {
            if (0 == yu.fuzzWeight) return void uu(Ru);
            this._wasUsed = !0, null == Ru.extensions && (Ru.extensions = {});
            const Eu = {
              fuzzFactor: yu.fuzzWeight,
              fuzzColorFactor: yu.fuzzColor.AEu(),
              fuzzRoughnessFactor: yu.fuzzRoughness
            };
            let Ku, Qu;
            yu.fuzzWeightTexture && (Eu.fuzzTexture = this._exporter._materialExporter.getTextureInfo(yu.fuzzWeightTexture) ?? void 0), yu.fuzzColorTexture && (Ku = this._mergedTexturesMap[yu.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[yu.fuzzColorTexture.uniqueId] : yu.fuzzColorTexture, Eu.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Ku) ?? void 0), yu.fuzzRoughnessTexture && (Qu = this._mergedTexturesMap[yu.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[yu.fuzzRoughnessTexture.uniqueId] : yu.fuzzRoughnessTexture, Eu.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Qu) ?? void 0), null === Eu.fuzzColorTexture && null === Eu.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[NQ] = Eu
          }
          uu(Ru)
        }))
      }
    }
    let rQ = !1;

    function BQ() {
      rQ || (rQ = !0, tE.RegisterExtension(NQ, (uu => new VQ(uu))))
    }
    BQ();
    const xQ = "KHR_materials_specular";
    class SQ {
      constructor(uu) {
        this.name = xQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        return yu instanceof lK && this._isExtensionEnabled(yu) ? (yu.metallicReflectanceTexture && Eu.push(yu.metallicReflectanceTexture), yu.reflectanceTexture && Eu.push(yu.reflectanceTexture), Eu) : Eu
      }
      _isExtensionEnabled(uu) {
        return !uu.unlit && (void 0 != uu.metallicF0Factor && 1 != uu.metallicF0Factor || void 0 != uu.metallicReflectanceColor && !uu.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(uu))
      }
      _hasTexturesExtension(uu) {
        return null != uu.metallicReflectanceTexture || null != uu.reflectanceTexture
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          var Eu;
          if (yu instanceof lK && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
            const uu = this._exporter._materialExporter.getTextureInfo(yu.metallicReflectanceTexture) ?? void 0,
              Eu = this._exporter._materialExporter.getTextureInfo(yu.reflectanceTexture) ?? void 0,
              Ku = {
                specularFactor: 1 == yu.metallicF0Factor ? void 0 : yu.metallicF0Factor,
                specularTexture: uu,
                specularColorFactor: yu.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : yu.metallicReflectanceColor.AEu(),
                specularColorTexture: Eu
              };
            this._hasTexturesExtension(yu) && this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[xQ] = Ku
          } else if (yu instanceof aR) {
            Ru.extensions = Ru.extensions || {};
            const Ku = this._exporter._materialExporter.getTextureInfo(yu.specularWeightTexture) ?? void 0,
              Qu = this._exporter._materialExporter.getTextureInfo(yu.specularColorTexture) ?? void 0,
              mu = 1 == yu.specularWeight ? void 0 : yu.specularWeight,
              Ju = yu.specularColor.equalsFloats(1, 1, 1) ? void 0 : yu.specularColor.AEu();
            if (!Qu && !Ku && void 0 === mu && void 0 === Ju) return uu(Ru);
            this._wasUsed = !0;
            const Nu = {
                specularEdgeColorEnabled: !0
              },
              Xu = {
                specularFactor: mu,
                specularTexture: Ku,
                specularColorFactor: Ju,
                specularColorTexture: Qu,
                extensions: {}
              };
            Xu.extensions.EXT_materials_specular_edge_color = Nu, (Eu = this._exporter._glTF).extensionsUsed || (Eu.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Ku || Qu) && this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[xQ] = Xu
          }
          uu(Ru)
        }))
      }
    }
    let pQ = !1;

    function TQ() {
      pQ || (pQ = !0, tE.RegisterExtension(xQ, (uu => new SQ(uu))))
    }
    TQ();
    const WQ = "KHR_materials_transmission";
    class jQ {
      constructor(uu) {
        this.name = WQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof lK) {
          if (this._isExtensionEnabled(yu)) return yu.subSurface.refractionIntensityTexture && yu.subSurface.useGltfStyleTextures && Eu.push(yu.subSurface.refractionIntensityTexture), Eu
        } else yu instanceof aR && (yu.transmissionWeight > 0 && yu.transmissionWeightTexture && (Eu.push(yu.transmissionWeightTexture), yu.transmissionColorTexture && Eu.push(yu.transmissionColorTexture)), yu.subsurfaceWeight > 0 && yu.subsurfaceWeightTexture && Eu.push(yu.subsurfaceWeightTexture));
        return Eu
      }
      _isExtensionEnabled(uu) {
        if (uu instanceof aR && !uu.unlit) return uu.transmissionWeight > 0 || uu.subsurfaceWeight > 0;
        if (uu instanceof lK && !uu.unlit) {
          const Ru = uu.subSurface;
          return Ru.isRefractionEnabled && void 0 != Ru.refractionIntensity && 0 != Ru.refractionIntensity || null != Ru.refractionIntensityTexture && Ru.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(uu, Ru, yu) {
        if (!this._isExtensionEnabled(yu)) return Ru;
        if (yu instanceof lK) {
          this._wasUsed = !0;
          const Eu = yu.subSurface,
            Ku = {
              transmissionFactor: 0 === Eu.refractionIntensity ? void 0 : Eu.refractionIntensity
            };
          if (Eu.refractionIntensityTexture)
            if (Eu.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(yu);
              const uu = this._exporter._materialExporter.getTextureInfo(Eu.refractionIntensityTexture);
              uu && (Ku.transmissionTexture = uu)
            } else Mu.e.Warn(`${uu}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Ru.extensions || (Ru.extensions = {}), Ru.extensions[WQ] = Ku
        } else if (yu instanceof aR) {
          this._wasUsed = !0;
          const uu = {
            transmissionFactor: (1 - yu.transmissionWeight) * yu.subsurfaceWeight + yu.transmissionWeight
          };
          if (yu.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(yu);
            const Ru = this._exporter._materialExporter.getTextureInfo(yu.transmissionWeightTexture);
            Ru && (uu.transmissionTexture = Ru)
          } else if (yu.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(yu);
            const Ru = this._exporter._materialExporter.getTextureInfo(yu.subsurfaceWeightTexture);
            Ru && (uu.transmissionTexture = Ru)
          }
          if (0 == yu.transmissionDepth && (!yu.transmissionColor.equals(iu.d.White()) || yu.transmissionColorTexture) && Ru.pbrMetallicRoughness && (Ru.pbrMetallicRoughness.baseColorFactor || (Ru.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Ru.pbrMetallicRoughness.baseColorFactor[0] *= yu.transmissionColor.r, Ru.pbrMetallicRoughness.baseColorFactor[1] *= yu.transmissionColor.g, Ru.pbrMetallicRoughness.baseColorFactor[2] *= yu.transmissionColor.b, yu.transmissionColorTexture && !Ru.pbrMetallicRoughness.baseColorTexture)) {
            const uu = this._exporter._materialExporter.getTextureInfo(yu.transmissionColorTexture);
            uu && (Ru.pbrMetallicRoughness.baseColorTexture = uu, this._exporter._materialNeedsUVsSet.add(yu))
          }
          Ru.extensions || (Ru.extensions = {}), Ru.extensions[WQ] = uu
        }
        return Ru
      }
    }
    let HQ = !1;

    function dQ() {
      HQ || (HQ = !0, tE.RegisterExtension(WQ, (uu => new jQ(uu))))
    }
    dQ();
    var bQ = yu(39831);
    const CQ = "KHR_materials_unlit";
    class kQ {
      constructor() {
        this.name = CQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          let Eu = !1;
          yu instanceof lK ? Eu = yu.unlit : yu instanceof bQ.d && (Eu = yu.disableLighting), Eu && (this._wasUsed = !0, null == Ru.extensions && (Ru.extensions = {}), Ru.extensions[CQ] = {}), uu(Ru)
        }))
      }
    }
    let eQ = !1;

    function AQ() {
      eQ || (eQ = !0, tE.RegisterExtension(CQ, (() => new kQ)))
    }
    AQ();
    const DQ = "KHR_materials_volume";
    class MQ {
      constructor(uu) {
        this.name = DQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof lK) {
          if (this._isExtensionEnabled(yu)) return yu.subSurface.thicknessTexture && Eu.push(yu.subSurface.thicknessTexture), Eu
        } else yu instanceof aR && (yu.transmissionWeight > 0 || yu.subsurfaceWeight > 0) && yu.geometryThicknessTexture && Eu.push(yu.geometryThicknessTexture);
        return Eu
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Ru = uu.subSurface;
        return !(!Ru.isRefractionEnabled && !Ru.isTranslucencyEnabled) && (void 0 != Ru.maximumThickness && 0 != Ru.maximumThickness || void 0 != Ru.tintColorAtDistance && Ru.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Ru.tintColor && Ru.tintColor != iu.d.White() || this._hasTexturesExtension(uu))
      }
      _hasTexturesExtension(uu) {
        return null != uu.subSurface.thicknessTexture
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          if (yu instanceof lK && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0;
            const uu = yu.subSurface,
              Eu = {
                thicknessFactor: 0 == uu.maximumThickness ? void 0 : uu.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(uu.thicknessTexture) ?? void 0,
                attenuationDistance: uu.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : uu.tintColorAtDistance,
                attenuationColor: uu.tintColor.equalsFloats(1, 1, 1) ? void 0 : uu.tintColor.AEu()
              };
            this._hasTexturesExtension(yu) && this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions = Ru.extensions || {}, Ru.extensions[DQ] = Eu
          } else if (yu instanceof aR) {
            const uu = yu.transmissionWeight > 0 && !yu.geometryThinWalled,
              Eu = yu.subsurfaceWeight > 0 && !yu.geometryThinWalled;
            if (uu || Eu) {
              this._wasUsed = !0;
              const Ku = yu.geometryThickness,
                Qu = this._exporter._materialExporter.getTextureInfo(yu.geometryThicknessTexture) ?? void 0;
              let mu;
              Qu && this._exporter._materialNeedsUVsSet.add(yu);
              const Ju = iu.d.White().AEu();
              if (uu && yu.transmissionDepth > 0) {
                const uu = 1 / yu.transmissionDepth;
                let Ru = new Lu.p(-Math.log(yu.transmissionColor.r) * uu, -Math.log(yu.transmissionColor.g) * uu, -Math.log(yu.transmissionColor.b) * uu);
                const Eu = new Lu.p(yu.transmissionScatter.r * uu, yu.transmissionScatter.g * uu, yu.transmissionScatter.b * uu),
                  Ku = Ru.subtract(Eu),
                  Qu = Math.min(Ku.x, Ku.y, Ku.z);
                Qu < 0 && (Ku.x = Ku.x - Qu, Ku.y = Ku.y - Qu, Ku.z = Ku.z - Qu), Ru = Ku.add(Eu);
                mu = 1 / Math.max(Ru.x, Ru.y, Ru.z), Ju[0] = Math.exp(-Ru.x * mu), Ju[1] = Math.exp(-Ru.y * mu), Ju[2] = Math.exp(-Ru.z * mu)
              } else mu = Number.MAX_VALUE, Ju[0] = 1, Ju[1] = 1, Ju[2] = 1;
              let Nu = 1;
              const Xu = iu.d.White().AEu();
              if (Eu) {
                const uu = yu.subsurfaceRadius,
                  Ru = yu.subsurfaceRadiusScale,
                  Eu = new Lu.p(Ru.r, Ru.g, Ru.b).multiplyByFloats(uu, uu, uu),
                  Ku = new Lu.p(1 / Math.max(Eu.x, 1e-6), 1 / Math.max(Eu.y, 1e-6), 1 / Math.max(Eu.z, 1e-6));
                Nu = 1 / Math.max(Ku.x, Ku.y, Ku.z), Xu[0] = Math.exp(-Ku.x * Nu), Xu[1] = Math.exp(-Ku.y * Nu), Xu[2] = Math.exp(-Ku.z * Nu)
              }
              const Vu = (1 - yu.transmissionWeight) * yu.subsurfaceWeight,
                ru = Vu + yu.transmissionWeight,
                Bu = 1 / Math.max(ru, 1e-6),
                xu = yu.transmissionWeight * Bu,
                Su = Vu * Bu,
                pu = Ju.map(((uu, Ru) => uu * xu + Xu[Ru] * Su)),
                Tu = {
                  thicknessFactor: Ku,
                  thicknessTexture: Qu,
                  attenuationDistance: mu * xu + Nu * Su,
                  attenuationColor: pu
                };
              Ru.extensions = Ru.extensions || {}, Ru.extensions[DQ] = Tu
            }
          }
          uu(Ru)
        }))
      }
    }
    let IQ = !1;

    function GQ() {
      IQ || (IQ = !0, tE.RegisterExtension(DQ, (uu => new MQ(uu))))
    }
    GQ();
    const UQ = "KHR_materials_volume_scatter";
    class nQ {
      constructor(uu) {
        this.name = UQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        return yu instanceof aR && (yu.transmissionWeight > 0 && yu.transmissionScatterTexture && Eu.push(yu.transmissionScatterTexture), yu.subsurfaceWeight > 0 && yu.subsurfaceColorTexture && Eu.push(yu.subsurfaceColorTexture)), Eu
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Ru = uu.transmissionWeight > 0 && !uu.geometryThinWalled && uu.transmissionDepth > 0 && !uu.transmissionScatter.equals(iu.d.Black()),
          yu = uu.subsurfaceWeight > 0 && !uu.geometryThinWalled;
        return !(!Ru && !yu)
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          if (yu instanceof aR && this._isExtensionEnabled(yu)) {
            this._wasUsed = !0;
            let uu = Lu.p.Zero(),
              Eu = 0;
            if (yu.transmissionWeight > 0) {
              uu = function(uu) {
                const Ru = new Lu.p(Math.sqrt(1 - uu.x), Math.sqrt(1 - uu.y), Math.sqrt(1 - uu.z)),
                  yu = new Lu.p(1, 1, 1),
                  Eu = yu.subtract(Ru),
                  Ku = yu.subtract(new Lu.p(.139, .139, .139).multiplyInPlace(Ru)),
                  Qu = yu.add(new Lu.p(1.17, 1.17, 1.17).multiplyInPlace(Ru));
                return Eu.multiplyInPlace(Ku).divideInPlace(Qu)
              }(new Lu.p(yu.transmissionScatter.r, yu.transmissionScatter.g, yu.transmissionScatter.b)), Eu = yu.transmissionScatterAnisotropy
            }
            const Ku = Lu.p.Zero();
            let Qu = 0;
            yu.subsurfaceWeight > 0 && (Ku.set(yu.subsurfaceColor.r, yu.subsurfaceColor.g, yu.subsurfaceColor.b), Qu = yu.subsurfaceScatterAnisotropy);
            const mu = (1 - yu.transmissionWeight) * yu.subsurfaceWeight,
              Ju = mu + yu.transmissionWeight,
              Nu = 1 / Math.max(Ju, 1e-6),
              Xu = yu.transmissionWeight * Nu,
              Vu = mu * Nu,
              ru = {
                multiscatterColorFactor: uu.multiplyByFloats(Xu, Xu, Xu).addInPlace(Ku.multiplyByFloats(Vu, Vu, Vu)).AEu(),
                scatterAnisotropy: Eu * Xu + Qu * Vu
              };
            if (yu.subsurfaceWeight > 0 && yu.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(yu);
              const uu = this._exporter._materialExporter.getTextureInfo(yu.subsurfaceColorTexture);
              uu && (ru.multiscatterColorTexture = uu)
            } else if (yu.transmissionWeight > 0 && yu.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(yu);
              const uu = this._exporter._materialExporter.getTextureInfo(yu.transmissionScatterTexture);
              uu && (ru.multiscatterColorTexture = uu)
            }
            Ru.extensions = Ru.extensions || {}, Ru.extensions[UQ] = ru
          }
          uu(Ru)
        }))
      }
    }
    let sQ = !1;

    function tQ() {
      sQ || (sQ = !0, tE.RegisterExtension(UQ, (uu => new nQ(uu)), 101))
    }
    tQ();
    const lQ = "KHR_materials_diffuse_roughness";
    class gQ {
      constructor(uu) {
        this.name = lQ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Ru, yu) {
        const Eu = [];
        if (yu instanceof CR) {
          if (yu._baseDiffuseRoughness) return yu._baseDiffuseRoughnessTexture && Eu.push(yu._baseDiffuseRoughnessTexture), Eu
        } else if (yu instanceof aR && yu.baseDiffuseRoughness) return yu.baseDiffuseRoughnessTexture && Eu.push(yu.baseDiffuseRoughnessTexture), Eu;
        return []
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          let Eu = null,
            Ku = null;
          if (yu instanceof CR ? (Eu = yu._baseDiffuseRoughness, Ku = yu._baseDiffuseRoughnessTexture) : yu instanceof aR && (Eu = yu.baseDiffuseRoughness, Ku = yu.baseDiffuseRoughnessTexture), !Eu) return void uu(Ru);
          this._wasUsed = !0, Ru.extensions = Ru.extensions || {};
          const Qu = {
            diffuseRoughnessFactor: Eu,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Ku) ?? void 0
          };
          null !== Qu.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(yu), Ru.extensions[lQ] = Qu, uu(Ru)
        }))
      }
    }
    let cQ = !1;

    function LQ() {
      cQ || (cQ = !0, tE.RegisterExtension(lQ, (uu => new gQ(uu))))
    }
    LQ();
    const zQ = "KHR_materials_openpbr";
    class FQ {
      constructor() {
        this.name = zQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(uu, Ru, yu) {
        return new Promise((uu => {
          yu instanceof aR && (this._wasUsed = !0, Ru.extensions = Ru.extensions || {}, Ru.extensions[zQ] = {}), uu(Ru)
        }))
      }
    }
    let wQ = !1;

    function ZQ() {
      wQ || (wQ = !0, tE.RegisterExtension(zQ, (() => new FQ)))
    }
    ZQ();
    const hQ = "KHR_texture_transform";
    class PQ {
      constructor() {
        this.name = hQ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(uu, Ru, yu) {
        if (yu.lD() || eR.i.Warn(`${uu}: "scene" is not defined for Babylon texture ${yu.name}!`), (0 !== yu.uAng || 0 !== yu.vAng) && (eR.i.Warn(`${uu}: Texture ${yu.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== yu.uRotationCenter || 0 !== yu.vRotationCenter)) return;
        const Eu = {};
        let Ku = !1;
        if (0 === yu.uOffset && 0 === yu.vOffset || (Eu.offset = [yu.uOffset, yu.vOffset], Ku = !0), 1 === yu.uScale && 1 === yu.vScale || (Eu.scale = [yu.uScale, yu.vScale], Ku = !0), 0 !== yu.wAng) {
          if (0 !== yu.uRotationCenter || 0 !== yu.vRotationCenter) {
            if (yu.homogeneousRotationInUVTransform && yu.uScale !== yu.vScale) return void eR.i.Warn(`${uu}: Texture ${yu.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${hQ}.`);
            eR.i.Warn(`${uu}: Texture ${yu.name} with non-origin rotation center will be exported using an adjusted offset with ${hQ}.`), Eu.offset = function(uu) {
              const {
                uOffset: Ru,
                vOffset: yu,
                uRotationCenter: Eu,
                vRotationCenter: Ku,
                uScale: Qu,
                vScale: mu,
                wAng: Ju
              } = uu, Nu = Math.cos(Ju), Xu = Math.sin(Ju), Vu = Eu * Qu, ru = Ku * mu;
              return [Ru + (Vu * (1 - Nu) + ru * Xu), yu + (ru * (1 - Nu) - Vu * Xu)]
            }(yu)
          }
          Eu.rotation = -yu.wAng, Ku = !0
        }
        0 !== yu.coordinatesIndex && (Eu.texCoord = yu.coordinatesIndex, Ku = !0), Ku && (this._wasUsed = !0, Ru.extensions || (Ru.extensions = {}), Ru.extensions[hQ] = Eu)
      }
    }
    let iQ = !1;

    function YQ() {
      iQ || (iQ = !0, tE.RegisterExtension(hQ, (() => new PQ)))
    }
    YQ();
    var oQ = yu(39606);
    const qQ = "KHR_texture_basisu";
    class OQ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = qQ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      postExportTexture(uu, Ru) {
        const yu = this._exporter._textures[Ru.index],
          Eu = yu.source;
        if (void 0 === Eu) return;
        const Ku = this._exporter._images[Eu];
        "image/ktx2" === (Ku.mimeType || (0, oQ.j)(Ku.uri)) && (yu.source = void 0, yu.extensions || (yu.extensions = {}), yu.extensions[qQ] = {
          source: Eu
        }, this._wasUsed = !0)
      }
    }
    let vQ = !1;

    function aQ() {
      vQ || (vQ = !0, tE.RegisterExtension(qQ, (uu => new OQ(uu))))
    }
    aQ();
    const fQ = "EXT_texture_webp";
    class um {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = fQ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      postExportTexture(uu, Ru) {
        const yu = this._exporter._textures[Ru.index],
          Eu = yu.source;
        if (void 0 === Eu) return;
        const Ku = this._exporter._images[Eu];
        "image/webp" === (Ku.mimeType || (0, oQ.j)(Ku.uri)) && (yu.source = void 0, yu.extensions || (yu.extensions = {}), yu.extensions[fQ] = {
          source: Eu
        }, this._wasUsed = !0)
      }
    }
    let Rm = !1;

    function ym() {
      Rm || (Rm = !0, tE.RegisterExtension(fQ, (uu => new um(uu))))
    }
    ym();
    const Em = "EXT_texture_avif";
    class Km {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = Em, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      postExportTexture(uu, Ru) {
        const yu = this._exporter._textures[Ru.index],
          Eu = yu.source;
        if (void 0 === Eu) return;
        const Ku = this._exporter._images[Eu];
        "image/avif" === (Ku.mimeType || (0, oQ.j)(Ku.uri)) && (yu.source = void 0, yu.extensions || (yu.extensions = {}), yu.extensions[Em] = {
          source: Eu
        }, this._wasUsed = !0)
      }
    }
    let Qm = !1;

    function mm() {
      Qm || (Qm = !0, tE.RegisterExtension(Em, (uu => new Km(uu))))
    }
    mm();
    class Jm {
      static CreateSTL(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Ku = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Qu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ju = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Nu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const Xu = function(uu, Ru, yu) {
            const Ku = [3 * uu[yu], 3 * uu[yu + 1], 3 * uu[yu + 2]],
              Qu = [new Eu.MS(Ru[Ku[0]], Ru[Ku[0] + 2], Ru[Ku[0] + 1]), new Eu.MS(Ru[Ku[1]], Ru[Ku[1] + 2], Ru[Ku[1] + 1]), new Eu.MS(Ru[Ku[2]], Ru[Ku[2] + 2], Ru[Ku[2] + 1])],
              mu = Qu[0].subtract(Qu[1]),
              Ju = Qu[2].subtract(Qu[1]);
            return {
              v: Qu,
              n: Eu.MS.Cross(Ju, mu).normalize()
            }
          },
          ru = function(uu, Ru, yu, Eu) {
            return Ru = Bu(uu, Ru, yu.x, Eu), Ru = Bu(uu, Ru, yu.y, Eu), Bu(uu, Ru, yu.z, Eu)
          },
          Bu = function(uu, Ru, yu, Eu) {
            return uu.setFloat32(Ru, yu, Eu), Ru + 4
          },
          Su = function(uu) {
            if (Ju) {
              let Ru = uu;
              uu instanceof xu.b && (Ru = uu.dKu);
              const yu = Ru.getVerticesData(Vu.d.PositionKind, !0, !0);
              if (!yu) return [];
              const Ku = Eu.MS.Zero();
              let Qu;
              for (Qu = 0; Qu < yu.length; Qu += 3) Eu.MS.TransformCoordinatesFromFloatsToRef(yu[Qu], yu[Qu + 1], yu[Qu + 2], uu.computeWorldMatrix(!0), Ku).toArray(yu, Qu);
              return yu
            }
            return uu.getVerticesData(Vu.d.PositionKind) || []
          };
        Ju && (mu = !0);
        let pu = "",
          Tu = 0,
          Wu = 0;
        if (Ku) {
          for (let yu = 0; yu < uu.length; yu++) {
            const Ru = uu[yu].DEu();
            Tu += Ru ? Ru.length / 3 : 0
          }
          const Ru = new ArrayBuffer(84 + 50 * Tu);
          pu = new DataView(Ru), Wu += 80, pu.setUint32(Wu, Tu, Qu), Wu += 4
        } else Nu || (pu = "solid stlmesh\r\n");
        for (let Eu = 0; Eu < uu.length; Eu++) {
          const Ru = uu[Eu];
          !Ku && Nu && (pu += "solid " + Ru.name + "\r\n"), !mu && Ru instanceof XE.b && Ru.bakeCurrentTransformIntoVertices();
          const yu = Su(Ru),
            Ju = Ru.DEu() || [];
          for (let uu = 0; uu < Ju.length; uu += 3) {
            const Ru = Xu(Ju, yu, uu);
            Ku ? (Wu = ru(pu, Wu, Ru.n, Qu), Wu = ru(pu, Wu, Ru.v[0], Qu), Wu = ru(pu, Wu, Ru.v[1], Qu), Wu = ru(pu, Wu, Ru.v[2], Qu), Wu += 2) : (pu += "\tfacet normal " + Ru.n.x + " " + Ru.n.y + " " + Ru.n.z + "\r\n", pu += "\t\touter loop\r\n", pu += "\t\t\tvertex " + Ru.v[0].x + " " + Ru.v[0].y + " " + Ru.v[0].z + "\r\n", pu += "\t\t\tvertex " + Ru.v[1].x + " " + Ru.v[1].y + " " + Ru.v[1].z + "\r\n", pu += "\t\t\tvertex " + Ru.v[2].x + " " + Ru.v[2].y + " " + Ru.v[2].z + "\r\n", pu += "\t\tendloop\r\n", pu += "\tendfacet\r\n")
          }!Ku && Nu && (pu += "endsolid " + name + "\r\n")
        }
        if (Ku || Nu || (pu += "endsolid stlmesh"), Ru) {
          const uu = document.createElement("a"),
            Ru = new Blob([pu], {
              type: "application/octet-stream"
            });
          uu.href = window.URL.createObjectURL(Ru), uu.download = yu + ".stl", uu.click()
        }
        return pu
      }
    }

    function Nm(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        Eu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Ku = [];
      for (let Qu = 0; Qu < uu.length / yu; Qu++) {
        const mu = uu[Qu * yu] * (Eu ? -1 : 1),
          Ju = uu[Qu * yu + 1],
          Nu = uu[Qu * yu + 2];
        Ku.push(`(${mu.toPrecision(Ru.precision)}, ${Ju.toPrecision(Ru.precision)}, ${Nu.toPrecision(Ru.precision)})`)
      }
      return Ku.join(", ")
    }

    function Xm(uu, Ru) {
      const yu = [];
      for (let Eu = 0; Eu < uu.length / 2; Eu++) {
        const Ku = uu[2 * Eu],
          Qu = uu[2 * Eu + 1];
        yu.push(`(${Ku.toPrecision(Ru.precision)}, ${(1-Qu).toPrecision(Ru.precision)})`)
      }
      return yu.join(", ")
    }

    function Vm(uu, Ru, yu, Eu) {
      const Ku = uu.getVerticesData(Vu.d.PositionKind),
        Qu = uu.getVerticesData(Vu.d.NormalKind);
      if (Ku && Qu) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${yu}"\n\t\tint[] faceVertexCounts = [${function(uu){const Ru=uu.DEu()?.length?uu.getTotalIndices():uu.getTotalVertices();return Array(Ru/3).fill(3).join(", ")}(uu)}]\n\t\tint[] faceVertexIndices = [${function(uu){const Ru=uu.DEu(),yu=Ru?.length??uu.getTotalVertices(),Eu=[];if(null!==Ru)for(let Ku=0;Ku<yu;Ku++)Eu.push(Ru[Ku]);else for(let Ku=0;Ku<yu;Ku++)Eu.push(Ku);return Eu.join(", ")}(uu)}]\n\t\tnormal3f[] normals = [${Nm(Qu,Ru,void 0,Eu)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${Nm(Ku,Ru,void 0,Eu)}]\n        ${function(uu,Ru){let yu="";for(let Ku=0;Ku<4;Ku++){const Eu=Ku>0?Ku:"",Qu=uu.getVerticesData(Vu.d.UVKind+(Eu?Eu+1:""));Qu&&(yu+=`\n\t\ttexCoord2f[] primvars:st${Eu} = [${Xm(Qu,Ru)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const Eu=uu.getVerticesData(Vu.d.ColorKind);return Eu&&(yu+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        Nm(Eu, Ru, Eu.length / uu.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),yu}(uu,Ru)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function rm(uu, Ru, yu, Eu) {
      return `\n        def "Geometry"\n        {\n        ${Vm(uu,Ru,yu,Eu)}\n        }\n        `
    }

    function Bm(uu) {
      let Ru = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Ru += uu, fflate.strToU8(Ru)
    }

    function xm(uu) {
      const Ru = uu.m;
      return `( ${Sm(Ru,0)}, ${Sm(Ru,4)}, ${Sm(Ru,8)}, ${Sm(Ru,12)} )`
    }

    function Sm(uu, Ru) {
      return `(${uu[Ru+0]}, ${uu[Ru+1]}, ${uu[Ru+2]}, ${uu[Ru+3]})`
    }

    function pm(uu, Ru) {
      const yu = "Object_" + uu.uniqueId,
        Eu = xm(Ru);
      return `def Xform "${yu}" (\n\tprepend references = @./geometries/Geometry_${uu.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${Eu}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${uu.material.uniqueId}>\n}\n\n`
    }

    function Tm(uu) {
      switch (uu) {
        case ku.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case ku.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case ku.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function Wm(uu) {
      return `(${uu.x}, ${uu.y})`
    }

    function jm(uu) {
      return `(${uu.r}, ${uu.g}, ${uu.b})`
    }

    function Hm(uu) {
      return "image/jpeg" === uu || "image/png" === uu
    }

    function dm(uu, Ru, yu, Ku, Qu, mu) {
      const Ju = uu.getInternalTexture().uniqueId + "_" + uu.invertY,
        Xu = uu.mimeType || (0, Nu.b)(uu.getInternalTexture()?.url ?? ""),
        Vu = Hm(Xu) ? Xu : "image/png",
        ru = "image/jpeg" === Vu ? "jpg" : "png";
      Qu[Ju] = {
        texture: uu,
        mimeType: Vu,
        ext: ru
      };
      const Bu = uu.coordinatesIndex > 0 ? "st" + uu.coordinatesIndex : "st",
        xu = new Eu.Vector2(uu.uScale, uu.vScale),
        Su = new Eu.Vector2(uu.uOffset, uu.vOffset),
        pu = uu.wAng,
        Tu = Math.sin(pu),
        Wu = Math.cos(pu);
      return Su.y = 1 - Su.y - xu.y, Su.x += Tu * xu.x, Su.y += (1 - Wu) * xu.y, `\n    def Shader "PrimvarReader_${yu}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${Bu}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${yu}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Ru.uniqueId}/PrimvarReader_${yu}.outputs:result>\n        float inputs:rotation = ${(pu*(180/Math.PI)).toFixed(mu.precision)}\n        float2 inputs:scale = ${Wm(xu)}\n        float2 inputs:translation = ${Wm(Su)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${uu.uniqueId}_${yu}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${Ju}.${ru}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Ru.uniqueId}/Transform2d_${yu}.outputs:result>\n        ${Ku?"float4 inputs:scale = "+function(uu){return`(${uu.r}, ${uu.g}, ${uu.b}, 1.0)`}(Ku):""}\n        token inputs:sourceColorSpace = "${uu.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${Tm(uu.wrapU)}"\n        token inputs:wrapT = "${Tm(uu.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Ru.needAlphaBlending()||Ru.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function bm(uu, Ru, yu) {
      const Eu = "\t\t\t",
        Ku = [],
        Qu = [],
        {
          diffuseMap: mu,
          diffuse: Ju,
          alphaCutOff: Nu,
          emissiveMap: Xu,
          emissive: Vu,
          normalMap: ru,
          roughnessMap: Bu,
          roughnessChannel: xu,
          roughness: Su,
          metalnessMap: pu,
          metalnessChannel: Wu,
          metalness: ju,
          aoMap: Hu,
          aoMapChannel: du,
          aoMapIntensity: bu,
          alphaMap: Cu,
          ior: ku,
          clearCoatEnabled: eu,
          clearCoat: Au,
          clearCoatMap: Du,
          clearCoatRoughness: Mu,
          clearCoatRoughnessMap: Iu
        } = function(uu) {
          const Ru = {
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
          return uu instanceof QE.StandardMaterial ? {
            ...Ru,
            diffuseMap: uu.diffuseTexture,
            diffuse: uu.diffuseColor,
            alphaCutOff: uu.alphaCutOff,
            emissiveMap: uu.emissiveTexture,
            emissive: uu.emissiveColor,
            roughness: 1,
            alphaMap: uu.opacityTexture
          } : uu instanceof CR ? {
            ...Ru,
            diffuseMap: uu._albedoTexture,
            diffuse: uu._albedoColor,
            alphaCutOff: uu._alphaCutOff,
            emissiveMap: uu._emissiveTexture,
            emissive: uu._emissiveColor,
            normalMap: uu._bumpTexture,
            roughnessMap: uu._metallicTexture,
            roughnessChannel: uu._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: uu._roughness ?? 1,
            metalnessMap: uu._metallicTexture,
            metalnessChannel: uu._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: uu._metallic ?? 0,
            aoMap: uu._ambientTexture,
            aoMapChannel: uu._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: uu._ambientTextureStrength,
            alphaMap: uu._opacityTexture,
            ior: uu.subSurface.indexOfRefraction,
            clearCoatEnabled: uu.clearCoat.isEnabled,
            clearCoat: uu.clearCoat.intensity,
            clearCoatMap: uu.clearCoat.texture,
            clearCoatRoughness: uu.clearCoat.roughness,
            clearCoatRoughnessMap: uu.clearCoat.useRoughnessFromMainTexture ? uu.clearCoat.texture : uu.clearCoat.textureRoughness
          } : Ru
        }(uu);
      return null !== mu ? (Ku.push(`${Eu}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${mu.uniqueId}_diffuse.outputs:rgb>`), uu.needAlphaBlending() ? Ku.push(`${Eu}float inputs:opacity.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${mu.uniqueId}_diffuse.outputs:a>`) : uu.needAlphaTesting() && (Ku.push(`${Eu}float inputs:opacity.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${mu.uniqueId}_diffuse.outputs:a>`), Ku.push(`${Eu}float inputs:opacityThreshold = ${Nu}`)), Qu.push(dm(mu, uu, "diffuse", Ju, Ru, yu))) : Ku.push(`${Eu}color3f inputs:diffuseColor = ${jm(Ju||Tu.Color3.White())}`), null !== Xu ? (Ku.push(`${Eu}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Xu.uniqueId}_emissive.outputs:rgb>`), Qu.push(dm(Xu, uu, "emissive", Vu, Ru, yu))) : Vu && Vu.toLuminance() > 0 && Ku.push(`${Eu}color3f inputs:emissiveColor = ${jm(Vu)}`), null !== ru && (Ku.push(`${Eu}normal3f inputs:normal.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${ru.uniqueId}_normal.outputs:rgb>`), Qu.push(dm(ru, uu, "normal", null, Ru, yu))), null !== Hu && (Ku.push(`${Eu}float inputs:occlusion.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Hu.uniqueId}_occlusion.outputs:${du}>`), Qu.push(dm(Hu, uu, "occlusion", new Tu.Color3(bu, bu, bu), Ru, yu))), null !== Bu ? (Ku.push(`${Eu}float inputs:roughness.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Bu.uniqueId}_roughness.outputs:${xu}>`), Qu.push(dm(Bu, uu, "roughness", new Tu.Color3(Su, Su, Su), Ru, yu))) : Ku.push(`${Eu}float inputs:roughness = ${Su}`), null !== pu ? (Ku.push(`${Eu}float inputs:metallic.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${pu.uniqueId}_metallic.outputs:${Wu}>`), Qu.push(dm(pu, uu, "metallic", new Tu.Color3(ju, ju, ju), Ru, yu))) : Ku.push(`${Eu}float inputs:metallic = ${ju}`), null !== Cu ? (Ku.push(`${Eu}float inputs:opacity.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Cu.uniqueId}_opacity.outputs:r>`), Ku.push(`${Eu}float inputs:opacityThreshold = 0.0001`), Qu.push(dm(Cu, uu, "opacity", null, Ru, yu))) : Ku.push(`${Eu}float inputs:opacity = ${uu.alpha}`), eu && (null !== Du ? (Ku.push(`${Eu}float inputs:clearcoat.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Du.uniqueId}_clearcoat.outputs:r>`), Qu.push(dm(Du, uu, "clearcoat", new Tu.Color3(Au, Au, Au), Ru, yu))) : Ku.push(`${Eu}float inputs:clearcoat = ${Au}`), null !== Iu ? (Ku.push(`${Eu}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Iu.uniqueId}_clearcoatRoughness.outputs:g>`), Qu.push(dm(Iu, uu, "clearcoatRoughness", new Tu.Color3(Mu, Mu, Mu), Ru, yu))) : Ku.push(`${Eu}float inputs:clearcoatRoughness = ${Mu}`)), Ku.push(`${Eu}float inputs:ior = ${ku}`), `\n\tdef Material "Material_${uu.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Ku.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${uu.uniqueId}/PreviewSurface.outputs:surface>\n\n${Qu.join("\n")}\n\n\t}\n`
    }

    function Cm(uu) {
      uu.computeWorldMatrix(!0);
      const Ru = uu.getWorldMatrix().clone(),
        yu = uu.lD().useRightHandedSystem;
      let Eu = uu.material?._getEffectiveOrientation(uu) ?? uu.sideOrientation,
        mu = !yu,
        Ju = uu.parent;
      for (; Ju;) {
        if (ly(Ju, yu) && null === Ju.parent) {
          yu || (Ru.multiplyToRef(Ju.getWorldMatrix().invert(), Ru), Eu = Eu === Qu.d.ClockWiseSideOrientation ? Qu.d.CounterClockWiseSideOrientation : Qu.d.ClockWiseSideOrientation), mu = !1;
          break
        }
        Ju = Ju.parent
      }
      return Ru.determinant() < 0 && Ku.Tools.Warn(`Mesh ${uu.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Ru,
        windingOrder: Eu === Qu.d.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: mu
      }
    }
    async function km(uu, Ru, yu) {
      const Qu = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Ru
      };
      "undefined" === typeof fflate && await Ku.Tools.LoadScriptAsync(Qu.fflateUrl);
      const mu = {};
      mu[Qu.modelFileName] = null;
      let Ju = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      Ju += function(uu) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===uu.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${uu.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${uu.planeAnchoringAlignment}"`:""}\n            `
      }(Qu);
      const Nu = {};
      for (const Eu of uu.meshes) {
        if (0 === Eu.getTotalVertices()) continue;
        const uu = Eu,
          Ru = uu.geometry,
          Xu = uu.material;
        if (!Xu || !Ru || yu && !yu(uu)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(Xu.getClassName())) {
          const yu = "geometries/Geometry_" + Ru.uniqueId + ".usda",
            {
              matrix: Eu,
              windingOrder: Ku,
              convertToRightHanded: Vu
            } = Cm(uu);
          if (!(yu in mu)) {
            const uu = rm(Ru, Qu, Ku, Vu);
            mu[yu] = Bm(uu)
          }
          Xu.uniqueId in Nu || (Nu[Xu.uniqueId] = Xu), Ju += pm(uu, Eu)
        } else Ku.Tools.Warn("USDZExportAsync does not support this material type: " + Xu.getClassName())
      }
      uu.activeCamera && Qu.exportCamera && (Ju += function(uu, Ru) {
        const yu = "Camera_" + uu.uniqueId,
          Ku = xm(Eu.Matrix.RotationY(Math.PI).multiply(uu.getWorldMatrix()));
        if (uu.mode === ku.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${yu}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ku}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${uu.minZ.toPrecision(Ru.precision)}, ${uu.maxZ.toPrecision(Ru.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(uu.orthoLeft||1)+Math.abs(uu.orthoRight||1))).toPrecision(Ru.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(uu.orthoTop||1)+Math.abs(uu.orthoBottom||1))).toPrecision(Ru.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const Eu = uu.eS().getAspectRatio(uu),
            Qu = Ru.cameraSensorWidth || 35;
          return `def Camera "${yu}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Ku}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${uu.minZ.toPrecision(Ru.precision)}, ${uu.maxZ.toPrecision(Ru.precision)})\n\t\t\tfloat focalLength = ${(Qu/(2*Math.tan(.5*uu.fov))).toPrecision(Ru.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Qu*Eu).toPrecision(Ru.precision)}\n\t\t\tfloat verticalAperture = ${(Qu/Eu).toPrecision(Ru.precision)}            \n\t\t}\n\t\n\t`
        }
      }(uu.activeCamera, Qu)), Ju += "\n            }\n        }";
      const Xu = {};
      Ju += function(uu, Ru, yu) {
        const Eu = [];
        for (const Ku in uu) {
          const Qu = uu[Ku];
          Eu.push(bm(Qu, Ru, yu))
        }
        return `\n    def "Materials"\n{\n${Eu.join("")}\n}\n\n`
      }(Nu, Xu, Qu), Ju += "\n    }", mu[Qu.modelFileName] = fflate.strToU8(Ju);
      for (const Eu in Xu) {
        const {
          texture: uu,
          ext: Ru,
          mimeType: yu
        } = Xu[Eu], Ku = await Wy(uu);
        if (Ku && Hm(Ku.mimeType) && Ku.mimeType === yu) mu[`textures/Texture_${Eu}.${Ru}`] = new Uint8Array(Ku.data);
        else {
          const Ku = uu.getSize(),
            Qu = await (0, du.g)(uu),
            Ju = await eu.DumpTools.DumpDataAsync(Ku.width, Ku.height, Qu, yu, void 0, !1, !0);
          mu[`textures/Texture_${Eu}.${Ru}`] = new Uint8Array(Ju).slice()
        }
      }
      let Vu = 0;
      for (const Eu in mu) {
        const uu = mu[Eu];
        if (!uu) continue;
        Vu += 34 + Eu.length;
        const Ru = 63 & Vu;
        if (4 !== Ru) {
          const yu = new Uint8Array(64 - Ru);
          mu[Eu] = [uu, {
            extra: {
              12345: yu
            }
          }]
        }
        Vu = uu.length
      }
      return fflate.zipSync(mu, {
        level: 0
      })
    }
    var em = yu(40676);
    class Am {
      static Export(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          yu = arguments.length > 2 ? arguments[2] : void 0;
        if (!uu || 0 === uu.bones.length) throw new Error("Invalid or empty skeleton provided");
        let Eu = Ru;
        Ru && 0 !== Ru.length || (Eu = uu.animations.map((uu => uu.name)));
        let Ku = null;
        for (const Xu of Eu) {
          const Ru = uu.getAnimationRange(Xu);
          Ru && (Ku = Ku ? new em.e("animation-range", Math.min(Ku.from, Ru.from), Math.max(Ku.to, Ru.to)) : Ru)
        }
        if (!Ku && (uu.animations.length > 0 && (Ku = uu.getAnimationRange(uu.animations[0].name)), !Ku)) throw new Error("No animation range found in skeleton");
        const Qu = yu || 1 / (uu.animations[0]?.framePerSecond || 30),
          mu = this._BuildBoneHierarchy(uu, Eu);
        let Ju = 0;
        for (const Xu of mu) Xu.positionKeys.length > 0 && (Ju = Math.max(Ju, Xu.positionKeys.length)), Xu.rotationKeys.length > 0 && (Ju = Math.max(Ju, Xu.rotationKeys.length));
        0 === Ju && (Ju = Math.floor((Ku.to - Ku.from) / Qu) + 1);
        let Nu = "";
        return Nu += "HIERARCHY\n", Nu += this._ExportHierarchy(mu, 0), Nu += "MOTION\n", Nu += `Frames: ${Ju}\n`, Nu += `Frame Time: ${Qu.toFixed(6)}\n`, Nu += this._ExportMotionData(mu, Ju, 0, Eu), Nu
      }
      static _BuildBoneHierarchy(uu, Ru) {
        const yu = new Map,
          Eu = [];
        for (const Ku of uu.bones) {
          const uu = {
            bone: Ku,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          yu.set(Ku, uu)
        }
        for (const Ku of uu.bones) {
          const uu = yu.get(Ku);
          if (Ku.animations.length > 0)
            for (const yu of Ku.animations) Ru.includes(yu.name) && ("position" === yu.targetProperty ? (uu.hasPositionChannels = !0, uu.positionKeys.push(...yu.getKeys())) : "rotationQuaternion" === yu.targetProperty && (uu.hasRotationChannels = !0, uu.rotationKeys.push(...yu.getKeys())));
          if (Ku.getParent()) {
            const Ru = yu.get(Ku.getParent());
            Ru && Ru.children.push(uu)
          } else Eu.push(uu)
        }
        return Eu
      }
      static _ExportHierarchy(uu, Ru) {
        let yu = "";
        const Eu = "    ".repeat(Ru);
        for (const Ku of uu) {
          const uu = Ku.bone;
          if (this._IsEndSite(Ku)) {
            yu += `${Eu}End Site\n`, yu += `${Eu}{\n`;
            const Ru = this._GetBoneOffset(uu);
            yu += `${Eu}    OFFSET ${Ru.x.toFixed(6)} ${Ru.y.toFixed(6)} ${Ru.z.toFixed(6)}\n`, yu += `${Eu}}\n`
          } else {
            yu += `${0===Ru?"ROOT":`${Eu}JOINT`} ${uu.name}\n`, yu += `${Eu}{\n`;
            const Qu = this._GetBoneOffset(uu);
            yu += `${Eu}    OFFSET ${Qu.x.toFixed(6)} ${Qu.y.toFixed(6)} ${Qu.z.toFixed(6)}\n`;
            const mu = [];
            Ku.hasPositionChannels && mu.push("Xposition", "Yposition", "Zposition"), Ku.hasRotationChannels && mu.push("Zrotation", "Xrotation", "Yrotation"), mu.length > 0 && (yu += `${Eu}    CHANNELS ${mu.length} ${mu.join(" ")}\n`), Ku.children.length > 0 && (yu += this._ExportHierarchy(Ku.children, Ru + 1)), yu += `${Eu}}\n`
          }
        }
        return yu
      }
      static _IsEndSite(uu) {
        return 0 === uu.children.length
      }
      static _GetBoneOffset(uu) {
        try {
          if (!uu.getParent()) return uu.getRestMatrix().getTranslation();
          return uu.getLocalMatrix().getTranslation()
        } catch (Ru) {
          return Eu.MS.Zero()
        }
      }
      static _ExportMotionData(uu, Ru, yu, Eu) {
        let Ku = "";
        for (let Qu = 0; Qu < Ru; Qu++) {
          const Ru = [];
          this._CollectFrameValues(uu, Qu + yu, Ru, Eu), Ku += Ru.map((uu => uu.toFixed(6))).join(" ") + "\n"
        }
        return Ku
      }
      static _CollectFrameValues(uu, Ru, yu, Eu) {
        for (const Ku of uu)
          if (!this._IsEndSite(Ku)) {
            if (Ku.hasPositionChannels) {
              const uu = this._GetPositionAtFrameIndex(Ku.positionKeys, Ru);
              yu.push(uu.x, uu.y, uu.z)
            }
            if (Ku.hasRotationChannels) {
              const uu = this._GetRotationAtFrameIndex(Ku.rotationKeys, Ru),
                Eu = this._QuaternionToEuler(uu);
              yu.push(Eu.z, Eu.x, Eu.y)
            }
            Ku.children.length > 0 && this._CollectFrameValues(Ku.children, Ru, yu, Eu)
          }
      }
      static _GetPositionAtFrameIndex(uu, Ru) {
        if (0 === uu.length) return Eu.MS.Zero();
        return uu[Math.max(0, Math.min(Ru, uu.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(uu, Ru) {
        if (0 === uu.length) return Eu.Quaternion.Identity();
        return uu[Math.max(0, Math.min(Ru, uu.length - 1))].value.clone()
      }
      static _QuaternionToEuler(uu) {
        const Ru = new Eu.Matrix;
        uu.toRotationMatrix(Ru);
        const yu = Ru.m;
        let Qu, mu, Ju;
        const Nu = Math.sqrt(yu[0] * yu[0] + yu[1] * yu[1]);
        return Nu > sy.d ? (Qu = Math.atan2(yu[6], yu[10]), mu = Math.atan2(-yu[2], Nu), Ju = Math.atan2(yu[1], yu[0])) : (Qu = Math.atan2(-yu[9], yu[5]), mu = Math.atan2(-yu[2], Nu), Ju = 0), new Eu.MS(Ku.Tools.ToDegrees(Qu), Ku.Tools.ToDegrees(mu), Ku.Tools.ToDegrees(Ju))
      }
    }

    function Dm(uu) {
      return "string" === typeof uu?.name
    }
    const Mm = Symbol("__xml:meta$__"),
      Im = Symbol("__xml:name$__");

    function Gm(uu, Ru) {
      Object.prototype.hasOwnProperty.call(uu.metadata, Mm) || (uu.metadata[Mm] = []), uu.metadata[Mm].push(Ru)
    }

    function Um(uu) {
      return (Ru, yu) => {
        Ru[Im] = uu
      }
    }

    function nm() {
      return (uu, Ru) => Gm(Ru, {
        kind: "none",
        prop: String(Ru.name),
        ignore: !0
      })
    }

    function sm(uu) {
      return (Ru, yu) => Gm(yu, {
        kind: "attr",
        prop: String(yu.name),
        ...uu
      })
    }

    function tm(uu) {
      return (Ru, yu) => Gm(yu, {
        kind: "elem",
        prop: String(yu.name),
        ...uu
      })
    }

    function lm(uu) {
      const Ru = "function" === typeof uu ? uu : uu?.constructor,
        yu = Ru?.[Symbol.metadata];
      if (!yu) return [];
      const Eu = [];
      let Ku = yu;
      for (; Ku;) Object.prototype.hasOwnProperty.call(Ku, Mm) && Eu.push(...Ku[Mm]), Ku = Object.getPrototypeOf(Ku);
      return Eu
    }

    function gm(uu) {
      const Ru = uu?.constructor?.[Im];
      return Ru || void 0
    }

    function cm(uu) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(uu)
    }

    function Lm(uu) {
      if (Dm(uu)) return uu;
      const Ru = (uu ?? "").trim();
      if (!Ru) return {
        name: ""
      };
      const yu = Ru.indexOf(":");
      if (-1 === yu) return {
        name: Ru
      };
      if (-1 !== Ru.indexOf(":", yu + 1)) return {
        name: Ru
      };
      const Eu = Ru.slice(0, yu),
        Ku = Ru.slice(yu + 1);
      return cm(Eu) && cm(Ku) ? {
        ns: Eu,
        name: Ku
      } : {
        name: Ru
      }
    }

    function zm(uu, Ru) {
      return Ru ? `${Ru}:${uu}` : uu
    }
    const Fm = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      wm = Object.freeze({
        number: Fm
      });

    function Zm(uu) {
      const Ru = uu?.eps ?? Fm.eps;
      return {
        eps: Ru,
        maxDecimalsCap: uu?.maxDecimalsCap ?? Fm.maxDecimalsCap,
        trimTrailingZeros: uu?.trimTrailingZeros ?? Fm.trimTrailingZeros,
        fixedDecimals: uu?.fixedDecimals,
        allowScientific: uu?.allowScientific ?? Fm.allowScientific,
        snapNearZero: uu?.snapNearZero ?? Fm.snapNearZero,
        zeroThreshold: uu?.zeroThreshold ?? Ru,
        perAttributeEps: uu?.perAttributeEps
      }
    }

    function hm(uu) {
      return {
        number: Zm(uu?.number)
      }
    }
    class Pm {
      constructor(uu) {
        if (this.o = uu, this._o = uu.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(uu) {
        if (!Number.isFinite(uu)) throw new Error(`Cannot format non-finite number: ${uu}`);
        const Ru = this._o,
          yu = this._clampInt(Ru.maxDecimalsCap ?? 15, 0, 20),
          Eu = Ru.trimTrailingZeros ?? !0,
          Ku = Ru.snapNearZero ?? !0,
          Qu = Ru.zeroThreshold ?? Ru.eps,
          mu = 1 / Ru.eps;
        let Ju, Nu = Math.round(uu * mu) / mu;
        if (Object.is(Nu, -0) && (Nu = 0), Ku && Math.abs(Nu) <= Qu && (Nu = 0), Ju = void 0 !== Ru.fixedDecimals ? this._clampInt(Ru.fixedDecimals, 0, yu) : this._clampInt(Math.ceil(-Math.log10(Ru.eps)), 0, yu), Ru.allowScientific, 0 === Ju) return String(Math.trunc(Nu));
        let Xu = Nu.toFixed(Ju);
        if (Eu && void 0 === Ru.fixedDecimals && (Xu = Xu.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Xu)) throw new Error(`Scientific notation not allowed in XML output: ${Xu}`);
        return Xu
      }
      _clampInt(uu, Ru, yu) {
        return Number.isFinite(uu) ? (uu = Math.trunc(uu), Math.max(Ru, Math.min(yu, uu))) : Ru
      }
    }

    function im(uu) {
      return uu instanceof Date
    }

    function Ym(uu) {
      return "string" === typeof uu
    }

    function om(uu) {
      return "string" === typeof uu || "number" === typeof uu || "boolean" === typeof uu || "bigint" === typeof uu || im(uu)
    }

    function qm(uu) {
      return "number" === typeof uu || "boolean" === typeof uu || "bigint" === typeof uu || im(uu)
    }
    class Om {
      constructor(uu, Ru) {
        this._ns = new Map, this._prefixCount = 0, this._builder = uu, this._format = hm(Ru), this._nFmt = new Pm(this._format)
      }
      withNamespace() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        for (const Eu of Ru) this._assignNamespace(Eu);
        return this
      }
      serialize(uu, Ru) {
        if (!(Ru = Ru ?? gm(uu))) throw new Error("can not find name for given object");
        const yu = Lm(Ru);
        yu.ns && this._assignNamespace(yu.ns, "xmlns"), this._gatherNamespaces(uu, new WeakSet);
        const Eu = this._builder.ele(null, yu.name);
        for (const [Ku, Qu] of Array.from(this._ns.entries())) Eu.att("xmlns", Qu, Ku);
        this._writeObjectContent(Eu, uu, (new WeakSet).add(uu)), this._builder.end()
      }
      _writeObject(uu, Ru, yu) {
        if (yu.has(Ru)) return;
        if (yu.add(Ru), Array.isArray(Ru)) {
          for (const Eu of Ru) qm(Eu) || (Ym(Eu) ? this._builder.text(Eu) : this._writeObject(uu, Eu, yu));
          return
        }
        const Eu = gm(Ru);
        if (!Eu) return;
        const Ku = Lm(Eu),
          Qu = this._getPrefix(Ku),
          mu = zm(Ku.name, Qu);
        uu.ele(null, mu), this._writeObjectContent(uu, Ru, yu), this._builder.end()
      }
      _getPrefix(uu) {
        if (uu.ns) {
          const Ru = this._ns.get(uu.ns.toLowerCase());
          if ("xmlns" !== Ru) return Ru
        }
      }
      _writeObjectContent(uu, Ru, yu) {
        const Eu = lm(Ru) ?? [],
          Ku = new Map;
        for (const mu of Eu) {
          const uu = Ku.get(mu.prop) ?? [];
          uu.push(mu), Ku.set(mu.prop, uu)
        }
        const Qu = Object.keys(Ru).sort(((uu, Ru) => {
          const yu = (Ku.get(uu) ?? []).some((uu => "attr" === uu.kind));
          return yu === (Ku.get(Ru) ?? []).some((uu => "attr" === uu.kind)) ? 0 : yu ? -1 : 1
        }));
        for (const mu of Qu) {
          const Eu = Ru[mu];
          if (null === Eu || void 0 === Eu) continue;
          const Qu = Ku.get(mu);
          if (Qu) {
            if (Qu.some((uu => !0 === uu.ignore || "none" === uu.kind))) continue;
            for (const Ru of Qu) {
              const yu = Ru.name ?? Ru.prop.toLowerCase();
              if (yu) switch (Ru.kind) {
                case "attr": {
                  let Ku = null;
                  if ("number" === typeof Eu && this._nFmt && (Ku = this._nFmt.toString(Eu)), Ru.formatter) {
                    Ku = new Ru.formatter(this._format).toString(Eu)
                  }
                  if (Ku = Ku ?? Eu.toString(), Ku) {
                    const Ru = Lm(yu),
                      Eu = this._getPrefix(Ru),
                      Qu = zm(Ru.name, Eu);
                    uu.att(null, Qu, Ku)
                  }
                  break
                }
              }
            }
          } else qm(Eu) || (Ym(Eu) ? this._builder.text(Eu) : this._writeObject(uu, Eu, yu))
        }
      }
      _gatherNamespaces(uu, Ru) {
        if (Ru.has(uu)) return;
        if (Ru.add(uu), Array.isArray(uu)) {
          for (const yu of uu) om(yu) || this._gatherNamespaces(yu, Ru);
          return
        }
        const yu = gm(uu);
        yu && this._assignNamespace(yu);
        const Eu = lm(uu) ?? [],
          Ku = new Map;
        for (const mu of Eu) {
          const uu = Ku.get(mu.prop) ?? [];
          uu.push(mu), Ku.set(mu.prop, uu)
        }
        const Qu = [];
        for (const mu of Object.keys(uu)) {
          const Ru = uu[mu];
          if (null === Ru || void 0 === Ru) continue;
          const yu = Ku.get(mu);
          if (yu) {
            if (yu.some((uu => !0 === uu.ignore || "none" === uu.kind))) continue;
            for (const uu of yu) uu.name && this._assignNamespace(uu.name)
          }
          Qu.push(Ru)
        }
        for (const mu of Qu) om(mu) || this._gatherNamespaces(mu, Ru)
      }
      _assignNamespace(uu, Ru) {
        const yu = Lm(uu);
        if (yu?.ns) {
          const uu = yu.ns.toLowerCase();
          this._ns.get(uu) || this._ns.set(uu, Ru ?? this._buildNsPrefix(uu))
        } else if ("xmlns" === Ru) {
          const uu = yu.name.toLowerCase();
          this._ns.get(uu) || this._ns.set(uu, Ru ?? this._buildNsPrefix(uu))
        }
      }
      _buildNsPrefix(uu) {
        let Ru, yu = !1;
        do {
          Ru = "ns" + this._prefixCount++;
          for (const uu of Array.from(this._ns.values()))
            if (uu === Ru) {
              yu = !0;
              break
            }
        } while (yu);
        return Ru
      }
    }
    class am {}
    var fm;
    am.OpenTag = "<", am.CloseTag = ">", am.Slash = "/", am.Question = "?", am.Quote = '"', am.Equal = "=", am.Space = " ", am.Semicolon = ":", am.Dec = "<?xml", am.Xml = "xml", am.Xmlns = "xmlns", am.Xsi = "xsi", am.VersionKeyword = "version", am.EncodingKeyword = "encoding", am.StandaloneKeyword = "standalone",
      function(uu) {
        uu[uu.Declaration = 0] = "Declaration", uu[uu.Tag = 1] = "Tag", uu[uu.Attribute = 2] = "Attribute", uu[uu.Text = 3] = "Text"
      }(fm || (fm = {}));
    class uJ {
      constructor(uu) {
        this._ctxStack = [], this._d = 0, this._w = uu
      }
      dec(uu, Ru, yu) {
        return this._w.write(am.Dec), this._writeAttStr(am.VersionKeyword, uu), Ru && this._writeAttStr(am.EncodingKeyword, Ru), void 0 !== yu && this._writeAttStr(am.StandaloneKeyword, yu ? "yes" : "no"), this._w.write(am.Question, am.CloseTag), this
      }
      att(uu, Ru, yu) {
        const Eu = this._peekContext();
        if (!Eu) throw new Error("att() without open element");
        if (Eu.closed) throw new Error(`att() after start tag closed for <${Eu.name}>`);
        if (this._isXmlnsDecl(uu, Ru)) {
          if (Ru === am.Xmlns) Eu.defaultNs = yu, this._registerNamespace(Eu, "", yu), this._writeAttStr(am.Xmlns, yu);
          else if (uu) this._registerNamespace(Eu, Ru, yu), this._writeAttStr(`${uu}:${Ru}`, yu);
          else {
            const uu = Ru.slice(6);
            this._registerNamespace(Eu, uu, yu), this._writeAttStr(Ru, yu)
          }
          return Eu.lastToken = fm.Attribute, this
        }
        let Ku = Ru;
        if (uu) {
          Ku = `${this._ensurePrefixDeclared(Eu,uu)}:${Ru}`
        }
        return Eu.lastToken = fm.Attribute, this._writeAttStr(Ku, yu), this
      }
      ele(uu, Ru) {
        const yu = this._peekContext();
        yu && this._closeOpenTagIfNeeded(yu);
        let Eu = Ru;
        if (uu) {
          Eu = `${this._lookupPrefix(uu)??uu}:${Ru}`
        }
        return this._pushContext(Eu, ++this._d), this._w.write(am.OpenTag, Eu), this
      }
      text(uu) {
        const Ru = this._peekContext();
        if (!Ru) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Ru), Ru.lastToken = fm.Text, this._w.write(this._escText(uu)), this
      }
      end() {
        const uu = this._popContext();
        return uu && (this._d--, uu.closed ? this._w.write(am.OpenTag, am.Slash, uu.name, am.CloseTag) : this._w.write(am.Slash, am.CloseTag)), this
      }
      _pushContext(uu, Ru) {
        const yu = new uJ.Context(uu, Ru);
        return this._ctxStack.push(yu), yu
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
      _writeAttStr(uu, Ru) {
        this._w.write(am.Space, uu, am.Equal, am.Quote, this._escAttr(Ru), am.Quote)
      }
      _lookupPrefix(uu) {
        let Ru = this._ctxStack.length - 1;
        if (Ru >= 0)
          do {
            const yu = this._ctxStack[Ru--],
              Eu = yu.ns2prefix?.get(uu);
            if (Eu) return Eu
          } while (Ru >= 0)
      }
      _escText(uu) {
        return uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(uu) {
        return this._escText(uu).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(uu, Ru) {
        if (uu) return uu === am.Xmlns;
        const yu = Ru.length,
          Eu = am.Xmlns.length;
        return yu >= Eu && (Ru.startsWith(am.Xmlns) && (Ru.length == Eu || Ru[Eu] == am.Semicolon))
      }
      _registerNamespace(uu, Ru, yu) {
        if (Ru === am.Xml || Ru === am.Xmlns) throw new Error(`reserved prefix '${Ru}'`);
        const Eu = uu.prefix2ns.get(Ru);
        if (Eu && Eu !== yu) throw new Error(`prefix '${Ru}' already bound to a different namespace`);
        uu.ns2prefix.get(yu) || uu.ns2prefix.set(yu, Ru), uu.prefix2ns.set(Ru, yu)
      }
      _allocPrefix(uu) {
        let Ru = 1;
        for (;;) {
          const yu = "ns" + Ru++;
          if (!uu.prefix2ns.has(yu)) return yu
        }
      }
      _ensurePrefixDeclared(uu, Ru) {
        const yu = this._lookupPrefix(Ru);
        if (yu) return yu;
        if (uu.closed) throw new Error(`can not declare namespace after start tag closed for <${uu.name}>`);
        const Eu = this._allocPrefix(uu);
        return this._writeAttStr(`${am.Xmlns}:${Eu}`, Ru), this._registerNamespace(uu, Eu, Ru), Eu
      }
      _closeOpenTagIfNeeded(uu) {
        uu.closed || (this._w.write(am.CloseTag), uu.closed = !0)
      }
    }
    uJ.Context = class {
      constructor(uu, Ru) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = uu, this.depth = Ru
      }
    };
    class RJ {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        if (0 === Ru.length) return this;
        const Eu = Ru.join("");
        return this._chunks.push(Eu), this.count += Eu.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class yJ {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = uu, this._opts = Ru, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var uu = arguments.length, Ru = new Array(uu), yu = 0; yu < uu; yu++) Ru[yu] = arguments[yu];
        if (0 === Ru.length) return this;
        const Eu = Ru.join("");
        if (0 === Eu.length) return this;
        this._pending += Eu, this._pendingChars += Eu.length;
        const Ku = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Ku && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const uu = this._encoder.encode(this._pending);
        return this._sink.push(uu), this.count += uu.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const EJ = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      KJ = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var QJ, mJ;
    ! function(uu) {
      uu.micron = "micron", uu.millimeter = "millimeter", uu.centimeter = "centimeter", uu.inch = "inch", uu.foot = "foot", uu.meter = "meter"
    }(QJ || (QJ = {})),
    function(uu) {
      uu.model = "model", uu.solidsupport = "solidsupport", uu.support = "support", uu.surface = "surface", uu.other = "other"
    }(mJ || (mJ = {}));
    const JJ = "http://schemas.openxmlformats.org/package/2006/content-types",
      NJ = "http://schemas.openxmlformats.org/package/2006/relationships";
    var XJ;
    ! function(uu) {
      uu.Relationships = "application/vnd.openxmlformats-package.relationships+xml", uu.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", uu.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", uu.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", uu.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", uu.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", uu.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", uu.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", uu.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", uu.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", uu.Png = "image/png", uu.Jpeg = "image/jpeg", uu.Tiff = "image/tiff", uu.Xml = "application/xml"
    }(XJ || (XJ = {}));
    const VJ = "_rels/",
      rJ = "3D/",
      BJ = "3dmodel.model",
      xJ = ".rels",
      SJ = "[Content_Types].xml";
    class pJ {
      static IsKnown(uu) {
        return pJ.Known.has(uu)
      }
      static IsThreeDimModel(uu) {
        return uu === pJ.ThreeDimModel
      }
    }
    pJ.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", pJ.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", pJ.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", pJ.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", pJ.Known = new Set([pJ.ThreeDimModel, pJ.Thumbnail, pJ.PrintTicket, pJ.MustPreserve]);
    let TJ = (() => {
        let uu, Ru, yu = [Um({
            ns: JJ,
            name: "Types"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfContentTypes"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      WJ = (() => {
        let uu, Ru, yu, Eu, Ku = [Um({
            ns: JJ,
            name: "Default"
          })],
          Qu = [],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [];
        Ru = class {
          constructor(uu, Ru) {
            this.ext = (0, Au.l)(this, mu, void 0), this.ct = ((0, Au.l)(this, Ju), (0, Au.l)(this, Nu, void 0)), (0, Au.l)(this, Xu), this.ext = uu, this.ct = Ru
          }
        };
        return (0, Au.o)(Ru, "ThreeMfContentType"), (() => {
          const Vu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: {
              ns: JJ,
              name: "Extension"
            }
          })], Eu = [sm({
            name: {
              ns: JJ,
              name: "ContentType"
            }
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: uu => "ext" in uu,
              get: uu => uu.ext,
              set: (uu, Ru) => {
                uu.ext = Ru
              }
            },
            metadata: Vu
          }, mu, Ju), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: uu => "ct" in uu,
              get: uu => uu.ct,
              set: (uu, Ru) => {
                uu.ct = Ru
              }
            },
            metadata: Vu
          }, Nu, Xu), (0, Au.h)(null, uu = {
            value: Ru
          }, Ku, {
            kind: "class",
            name: Ru.name,
            metadata: Vu
          }, null, Qu), Ru = uu.value, Vu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vu
          }), (0, Au.l)(Ru, Qu)
        })(), Ru
      })(),
      jJ = (() => {
        let uu, Ru, yu = [Um({
            ns: NJ,
            name: "Relationships"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.items = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfRelationships"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      HJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu = [Um({
            ns: NJ,
            name: "Relationship"
          })],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        Ru = class {
          constructor(uu, Ru, yu) {
            this.id = (0, Au.l)(this, Ju, void 0), this.type = ((0, Au.l)(this, Nu), (0, Au.l)(this, Xu, void 0)), this.target = ((0, Au.l)(this, Vu), (0, Au.l)(this, ru, void 0)), (0, Au.l)(this, Bu), this.id = uu, this.type = Ru, this.target = yu
          }
        };
        return (0, Au.o)(Ru, "ThreeMfRelationship"), (() => {
          const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "Id"
          })], Eu = [sm({
            name: "Type"
          })], Ku = [sm({
            name: "Target"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: uu => "id" in uu,
              get: uu => uu.id,
              set: (uu, Ru) => {
                uu.id = Ru
              }
            },
            metadata: xu
          }, Ju, Nu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: uu => "type" in uu,
              get: uu => uu.type,
              set: (uu, Ru) => {
                uu.type = Ru
              }
            },
            metadata: xu
          }, Xu, Vu), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: uu => "target" in uu,
              get: uu => uu.target,
              set: (uu, Ru) => {
                uu.target = Ru
              }
            },
            metadata: xu
          }, ru, Bu), (0, Au.h)(null, uu = {
            value: Ru
          }, Qu, {
            kind: "class",
            name: Ru.name,
            metadata: xu
          }, null, mu), Ru = uu.value, xu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xu
          }), (0, Au.l)(Ru, mu)
        })(), Ru
      })();
    class dJ {
      constructor(uu, Ru, yu) {
        this.contentTypes = uu, this.relationships = Ru, this.model = yu
      }
    }
    class bJ {
      static Zero() {
        return new bJ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(uu) {
        this.values = uu
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class CJ {
      constructor(uu) {
        this.o = uu, this._f = new Pm(uu)
      }
      toString(uu) {
        return uu.values.map((uu => this._f.toString(uu))).join(" ")
      }
    }
    let kJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu = [Um({
            ns: EJ,
            name: "model"
          })],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        Ru = class {
          constructor() {
            this.unit = (0, Au.l)(this, Ju, QJ.millimeter), this.requiredextensions = ((0, Au.l)(this, Nu), (0, Au.l)(this, Xu, void 0)), this.recommendedextensions = ((0, Au.l)(this, Vu), (0, Au.l)(this, ru, void 0)), this.metadata = (0, Au.l)(this, Bu)
          }
        };
        return (0, Au.o)(Ru, "ThreeMfModel"), (() => {
          const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "unit"
          })], Eu = [sm({
            name: "requiredextensions"
          })], Ku = [sm({
            name: "recommendedextensions"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: uu => "unit" in uu,
              get: uu => uu.unit,
              set: (uu, Ru) => {
                uu.unit = Ru
              }
            },
            metadata: xu
          }, Ju, Nu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: uu => "requiredextensions" in uu,
              get: uu => uu.requiredextensions,
              set: (uu, Ru) => {
                uu.requiredextensions = Ru
              }
            },
            metadata: xu
          }, Xu, Vu), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: uu => "recommendedextensions" in uu,
              get: uu => uu.recommendedextensions,
              set: (uu, Ru) => {
                uu.recommendedextensions = Ru
              }
            },
            metadata: xu
          }, ru, Bu), (0, Au.h)(null, uu = {
            value: Ru
          }, Qu, {
            kind: "class",
            name: Ru.name,
            metadata: xu
          }, null, mu), Ru = uu.value, xu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xu
          })
        })(), Ru.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Au.l)(Ru, mu), Ru
      })(),
      eJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu = [Um({
            ns: EJ,
            name: "meta"
          })],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        Ru = class {
          constructor(uu, Ru, yu, Eu) {
            this.name = (0, Au.l)(this, Ju, void 0), this.preserve = ((0, Au.l)(this, Nu), (0, Au.l)(this, Xu, void 0)), this.type = ((0, Au.l)(this, Vu), (0, Au.l)(this, ru, void 0)), this.value = (0, Au.l)(this, Bu), this.name = uu, this.value = Ru, this.preserve = yu, this.type = Eu
          }
        };
        return (0, Au.o)(Ru, "ThreeMfMeta"), (() => {
          const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "name"
          })], Eu = [sm({
            name: "preserve"
          })], Ku = [sm({
            name: "type"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Ru) => {
                uu.name = Ru
              }
            },
            metadata: xu
          }, Ju, Nu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: uu => "preserve" in uu,
              get: uu => uu.preserve,
              set: (uu, Ru) => {
                uu.preserve = Ru
              }
            },
            metadata: xu
          }, Xu, Vu), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: uu => "type" in uu,
              get: uu => uu.type,
              set: (uu, Ru) => {
                uu.type = Ru
              }
            },
            metadata: xu
          }, ru, Bu), (0, Au.h)(null, uu = {
            value: Ru
          }, Qu, {
            kind: "class",
            name: Ru.name,
            metadata: xu
          }, null, mu), Ru = uu.value, xu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xu
          }), (0, Au.l)(Ru, mu)
        })(), Ru
      })(),
      AJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "metadatagroup"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfMetadataGroup"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      DJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "resources"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.object = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfResources"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      MJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu = [Um({
            ns: EJ,
            name: "object"
          })],
          Vu = [],
          ru = [],
          Bu = [],
          xu = [],
          Su = [],
          pu = [],
          Tu = [],
          Wu = [],
          ju = [],
          Hu = [],
          du = [],
          bu = [],
          Cu = [],
          ku = [],
          eu = [];
        Ru = class {
          constructor(uu) {
            let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mJ.model;
            this.id = (0, Au.l)(this, ru, void 0), this.type = ((0, Au.l)(this, Bu), (0, Au.l)(this, xu, void 0)), this.thumbnail = ((0, Au.l)(this, Su), (0, Au.l)(this, pu, void 0)), this.partnumber = ((0, Au.l)(this, Tu), (0, Au.l)(this, Wu, void 0)), this.name = ((0, Au.l)(this, ju), (0, Au.l)(this, Hu, void 0)), this.pid = ((0, Au.l)(this, du), (0, Au.l)(this, bu, void 0)), this.pindex = ((0, Au.l)(this, Cu), (0, Au.l)(this, ku, void 0)), this.metadatagroup = (0, Au.l)(this, eu), this.id = uu, this.type = Ru
          }
        };
        return (0, Au.o)(Ru, "ThreeMfObject"), (() => {
          const Du = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "id"
          })], Eu = [sm({
            name: "type"
          })], Ku = [sm({
            name: "thumbnail"
          })], Qu = [sm({
            name: "partnumber"
          })], mu = [sm({
            name: "name"
          })], Ju = [sm({
            name: "pid"
          })], Nu = [sm({
            name: "pindex"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: uu => "id" in uu,
              get: uu => uu.id,
              set: (uu, Ru) => {
                uu.id = Ru
              }
            },
            metadata: Du
          }, ru, Bu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: uu => "type" in uu,
              get: uu => uu.type,
              set: (uu, Ru) => {
                uu.type = Ru
              }
            },
            metadata: Du
          }, xu, Su), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: uu => "thumbnail" in uu,
              get: uu => uu.thumbnail,
              set: (uu, Ru) => {
                uu.thumbnail = Ru
              }
            },
            metadata: Du
          }, pu, Tu), (0, Au.h)(null, null, Qu, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: uu => "partnumber" in uu,
              get: uu => uu.partnumber,
              set: (uu, Ru) => {
                uu.partnumber = Ru
              }
            },
            metadata: Du
          }, Wu, ju), (0, Au.h)(null, null, mu, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Ru) => {
                uu.name = Ru
              }
            },
            metadata: Du
          }, Hu, du), (0, Au.h)(null, null, Ju, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: uu => "pid" in uu,
              get: uu => uu.pid,
              set: (uu, Ru) => {
                uu.pid = Ru
              }
            },
            metadata: Du
          }, bu, Cu), (0, Au.h)(null, null, Nu, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: uu => "pindex" in uu,
              get: uu => uu.pindex,
              set: (uu, Ru) => {
                uu.pindex = Ru
              }
            },
            metadata: Du
          }, ku, eu), (0, Au.h)(null, uu = {
            value: Ru
          }, Xu, {
            kind: "class",
            name: Ru.name,
            metadata: Du
          }, null, Vu), Ru = uu.value, Du && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Du
          }), (0, Au.l)(Ru, Vu)
        })(), Ru
      })(),
      IJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "mesh"
          })],
          Eu = [];
        Ru = class {
          constructor(uu, Ru) {
            this.vertices = uu ?? new GJ, this.triangles = Ru ?? new nJ
          }
        };
        return (0, Au.o)(Ru, "ThreeMfMesh"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      GJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "vertices"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfVertices"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      UJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu = [Um({
            ns: EJ,
            name: "vertex"
          })],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        Ru = class {
          constructor() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, Au.l)(this, Ju, void 0), this.y = ((0, Au.l)(this, Nu), (0, Au.l)(this, Xu, void 0)), this.z = ((0, Au.l)(this, Vu), (0, Au.l)(this, ru, void 0)), (0, Au.l)(this, Bu), this.x = uu, this.y = Ru, this.z = yu
          }
        };
        return (0, Au.o)(Ru, "ThreeMfVertex"), (() => {
          const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "x"
          })], Eu = [sm({
            name: "y"
          })], Ku = [sm({
            name: "z"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: uu => "x" in uu,
              get: uu => uu.x,
              set: (uu, Ru) => {
                uu.x = Ru
              }
            },
            metadata: xu
          }, Ju, Nu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: uu => "y" in uu,
              get: uu => uu.y,
              set: (uu, Ru) => {
                uu.y = Ru
              }
            },
            metadata: xu
          }, Xu, Vu), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: uu => "z" in uu,
              get: uu => uu.z,
              set: (uu, Ru) => {
                uu.z = Ru
              }
            },
            metadata: xu
          }, ru, Bu), (0, Au.h)(null, uu = {
            value: Ru
          }, Qu, {
            kind: "class",
            name: Ru.name,
            metadata: xu
          }, null, mu), Ru = uu.value, xu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xu
          }), (0, Au.l)(Ru, mu)
        })(), Ru
      })(),
      nJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "triangles"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfTriangles"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      sJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu = [Um({
            ns: EJ,
            name: "triangle"
          })],
          Vu = [],
          ru = [],
          Bu = [],
          xu = [],
          Su = [],
          pu = [],
          Tu = [],
          Wu = [],
          ju = [],
          Hu = [],
          du = [],
          bu = [],
          Cu = [],
          ku = [],
          eu = [];
        Ru = class {
          constructor(uu, Ru, yu) {
            this.v1 = (0, Au.l)(this, ru, void 0), this.v2 = ((0, Au.l)(this, Bu), (0, Au.l)(this, xu, void 0)), this.v3 = ((0, Au.l)(this, Su), (0, Au.l)(this, pu, void 0)), this.p1 = ((0, Au.l)(this, Tu), (0, Au.l)(this, Wu, void 0)), this.p2 = ((0, Au.l)(this, ju), (0, Au.l)(this, Hu, void 0)), this.p3 = ((0, Au.l)(this, du), (0, Au.l)(this, bu, void 0)), this.pid = ((0, Au.l)(this, Cu), (0, Au.l)(this, ku, void 0)), (0, Au.l)(this, eu), this.v1 = uu, this.v2 = Ru, this.v3 = yu
          }
        };
        return (0, Au.o)(Ru, "ThreeMfTriangle"), (() => {
          const Du = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "v1"
          })], Eu = [sm({
            name: "v2"
          })], Ku = [sm({
            name: "v3"
          })], Qu = [sm({
            name: "p1"
          })], mu = [sm({
            name: "p2"
          })], Ju = [sm({
            name: "p3"
          })], Nu = [sm({
            name: "pid"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: uu => "v1" in uu,
              get: uu => uu.v1,
              set: (uu, Ru) => {
                uu.v1 = Ru
              }
            },
            metadata: Du
          }, ru, Bu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: uu => "v2" in uu,
              get: uu => uu.v2,
              set: (uu, Ru) => {
                uu.v2 = Ru
              }
            },
            metadata: Du
          }, xu, Su), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: uu => "v3" in uu,
              get: uu => uu.v3,
              set: (uu, Ru) => {
                uu.v3 = Ru
              }
            },
            metadata: Du
          }, pu, Tu), (0, Au.h)(null, null, Qu, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: uu => "p1" in uu,
              get: uu => uu.p1,
              set: (uu, Ru) => {
                uu.p1 = Ru
              }
            },
            metadata: Du
          }, Wu, ju), (0, Au.h)(null, null, mu, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: uu => "p2" in uu,
              get: uu => uu.p2,
              set: (uu, Ru) => {
                uu.p2 = Ru
              }
            },
            metadata: Du
          }, Hu, du), (0, Au.h)(null, null, Ju, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: uu => "p3" in uu,
              get: uu => uu.p3,
              set: (uu, Ru) => {
                uu.p3 = Ru
              }
            },
            metadata: Du
          }, bu, Cu), (0, Au.h)(null, null, Nu, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: uu => "pid" in uu,
              get: uu => uu.pid,
              set: (uu, Ru) => {
                uu.pid = Ru
              }
            },
            metadata: Du
          }, ku, eu), (0, Au.h)(null, uu = {
            value: Ru
          }, Xu, {
            kind: "class",
            name: Ru.name,
            metadata: Du
          }, null, Vu), Ru = uu.value, Du && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Du
          }), (0, Au.l)(Ru, Vu)
        })(), Ru
      })(),
      tJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "components"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.component = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfComponents"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      lJ = (() => {
        let uu, Ru, yu, Eu, Ku = [Um({
            ns: EJ,
            name: "component"
          })],
          Qu = [],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [];
        Ru = class {
          constructor(uu, Ru) {
            this.objectid = (0, Au.l)(this, mu, void 0), this.transform = ((0, Au.l)(this, Ju), (0, Au.l)(this, Nu, void 0)), (0, Au.l)(this, Xu), this.objectid = uu, this.transform = Ru
          }
        };
        return (0, Au.o)(Ru, "ThreeMfComponent"), (() => {
          const Vu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "objectid"
          })], Eu = [sm({
            name: "transform",
            formatter: CJ
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: uu => "objectid" in uu,
              get: uu => uu.objectid,
              set: (uu, Ru) => {
                uu.objectid = Ru
              }
            },
            metadata: Vu
          }, mu, Ju), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: uu => "transform" in uu,
              get: uu => uu.transform,
              set: (uu, Ru) => {
                uu.transform = Ru
              }
            },
            metadata: Vu
          }, Nu, Xu), (0, Au.h)(null, uu = {
            value: Ru
          }, Ku, {
            kind: "class",
            name: Ru.name,
            metadata: Vu
          }, null, Qu), Ru = uu.value, Vu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vu
          }), (0, Au.l)(Ru, Qu)
        })(), Ru
      })(),
      gJ = (() => {
        let uu, Ru, yu, Eu = [Um({
            ns: EJ,
            name: "basematerials"
          })],
          Ku = [],
          Qu = [],
          mu = [];
        Ru = class {
          constructor(uu) {
            this.id = (0, Au.l)(this, Qu, void 0), this.base = ((0, Au.l)(this, mu), []), this.id = uu
          }
        };
        return (0, Au.o)(Ru, "ThreeMfBaseMaterials"), (() => {
          const Ju = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "id"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: uu => "id" in uu,
              get: uu => uu.id,
              set: (uu, Ru) => {
                uu.id = Ru
              }
            },
            metadata: Ju
          }, Qu, mu), (0, Au.h)(null, uu = {
            value: Ru
          }, Eu, {
            kind: "class",
            name: Ru.name,
            metadata: Ju
          }, null, Ku), Ru = uu.value, Ju && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ju
          }), (0, Au.l)(Ru, Ku)
        })(), Ru
      })(),
      cJ = (() => {
        let uu, Ru, yu, Eu, Ku = [Um({
            ns: EJ,
            name: "base"
          })],
          Qu = [],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [];
        Ru = class {
          constructor(uu, Ru) {
            this.name = (0, Au.l)(this, mu, void 0), this.displaycolor = ((0, Au.l)(this, Ju), (0, Au.l)(this, Nu, void 0)), (0, Au.l)(this, Xu), this.name = uu, this.displaycolor = Ru
          }
        };
        return (0, Au.o)(Ru, "ThreeMfBase"), (() => {
          const Vu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "name"
          })], Eu = [sm({
            name: "displaycolor"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Ru) => {
                uu.name = Ru
              }
            },
            metadata: Vu
          }, mu, Ju), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: uu => "displaycolor" in uu,
              get: uu => uu.displaycolor,
              set: (uu, Ru) => {
                uu.displaycolor = Ru
              }
            },
            metadata: Vu
          }, Nu, Xu), (0, Au.h)(null, uu = {
            value: Ru
          }, Ku, {
            kind: "class",
            name: Ru.name,
            metadata: Vu
          }, null, Qu), Ru = uu.value, Vu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Vu
          }), (0, Au.l)(Ru, Qu)
        })(), Ru
      })(),
      LJ = (() => {
        let uu, Ru, yu = [Um({
            ns: EJ,
            name: "build"
          })],
          Eu = [];
        Ru = class {
          constructor() {
            this.item = []
          }
        };
        return (0, Au.o)(Ru, "ThreeMfBuild"), (() => {
          const Ku = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, Au.h)(null, uu = {
            value: Ru
          }, yu, {
            kind: "class",
            name: Ru.name,
            metadata: Ku
          }, null, Eu), Ru = uu.value, Ku && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ku
          }), (0, Au.l)(Ru, Eu)
        })(), Ru
      })(),
      zJ = (() => {
        let uu, Ru, yu, Eu, Ku, Qu = [Um({
            ns: EJ,
            name: "item"
          })],
          mu = [],
          Ju = [],
          Nu = [],
          Xu = [],
          Vu = [],
          ru = [],
          Bu = [];
        Ru = class {
          constructor(uu, Ru, yu) {
            this.objectid = (0, Au.l)(this, Ju, void 0), this.transform = ((0, Au.l)(this, Nu), (0, Au.l)(this, Xu, void 0)), this.partnumber = ((0, Au.l)(this, Vu), (0, Au.l)(this, ru, void 0)), this.metadatagroup = (0, Au.l)(this, Bu), this.objectid = uu, this.transform = Ru, this.partnumber = yu
          }
        };
        return (0, Au.o)(Ru, "ThreeMfItem"), (() => {
          const xu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          yu = [sm({
            name: "objectid"
          })], Eu = [sm({
            name: "transform",
            formatter: CJ
          })], Ku = [sm({
            name: "partnumber"
          })], (0, Au.h)(null, null, yu, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: uu => "objectid" in uu,
              get: uu => uu.objectid,
              set: (uu, Ru) => {
                uu.objectid = Ru
              }
            },
            metadata: xu
          }, Ju, Nu), (0, Au.h)(null, null, Eu, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: uu => "transform" in uu,
              get: uu => uu.transform,
              set: (uu, Ru) => {
                uu.transform = Ru
              }
            },
            metadata: xu
          }, Xu, Vu), (0, Au.h)(null, null, Ku, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: uu => "partnumber" in uu,
              get: uu => uu.partnumber,
              set: (uu, Ru) => {
                uu.partnumber = Ru
              }
            },
            metadata: xu
          }, ru, Bu), (0, Au.h)(null, uu = {
            value: Ru
          }, Qu, {
            kind: "class",
            name: Ru.name,
            metadata: xu
          }, null, mu), Ru = uu.value, xu && Object.defineProperty(Ru, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: xu
          }), (0, Au.l)(Ru, mu)
        })(), Ru
      })();
    class FJ {
      constructor(uu, Ru) {
        this._object = new MJ(uu, Ru)
      }
      withName(uu) {
        return this._object.name = uu, this
      }
      withThumbnail(uu) {
        return this._object.thumbnail = uu, this
      }
      withProperty(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = uu, this._object.id = Ru, this
      }
      build() {
        return this._object
      }
      reset(uu, Ru) {
        this._object = new MJ(uu, Ru)
      }
    }
    class wJ extends FJ {
      constructor(uu) {
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mJ.model), this._object.content = new tJ
      }
      withComponent(uu, Ru) {
        return this._object.content.component.push(new lJ(uu, Ru)), this
      }
    }
    class ZJ extends FJ {
      constructor(uu) {
        super(uu, mJ.model)
      }
      withPostProcessHandlers(uu, Ru) {
        return this._vh = uu, this._th = Ru, this
      }
      withData(uu) {
        return this._object.content = this._buildMesh(uu), this
      }
      withMaterial(uu, Ru) {
        return this._object.pid = uu, this._object.pindex = Ru, this
      }
      _buildMesh(uu) {
        const Ru = this._buildVertices(uu.positions),
          yu = this._buildTriangle(uu.indices);
        return new IJ(Ru, yu)
      }
      _buildVertices(uu) {
        const Ru = new GJ;
        if (uu)
          for (let yu = 0; yu < uu.length;) {
            const Eu = uu[yu++],
              Ku = uu[yu++],
              Qu = uu[yu++];
            let mu = new UJ(Eu, Ku, Qu);
            this._vh && (mu = this._vh(mu)), Ru.vertex.push(mu)
          }
        return Ru
      }
      _buildTriangle(uu) {
        const Ru = new nJ;
        if (uu)
          for (let yu = 0; yu < uu.length;) {
            const Eu = uu[yu++],
              Ku = uu[yu++],
              Qu = uu[yu++];
            let mu = new sJ(Eu, Ku, Qu);
            this._th && (mu = this._th(mu)), Ru.triangle.push(mu)
          }
        return Ru
      }
    }
    class hJ {
      constructor(uu) {
        this._m = new gJ(uu)
      }
      withColor(uu, Ru) {
        this._m.base = this._m.base ?? [];
        let yu = this._m.base.find((Ru => Ru.name.toLowerCase() === uu.toLowerCase()));
        return yu ? (yu.displaycolor = this._rgbaToHex(Ru), this) : (yu = new cJ(uu, this._rgbaToHex(Ru)), this._m.base.push(yu), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(uu) {
        const Ru = uu => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(uu, 1 / 2.2)))),
          yu = Ru(uu.r).toString(16).padStart(2, "0").toUpperCase(),
          Eu = Ru(uu.g).toString(16).padStart(2, "0").toUpperCase(),
          Ku = Ru(uu.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof uu.a) {
          return `#${yu}${Eu}${Ku}${Math.round(Math.min(255,Math.max(0,255*uu.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${yu}${Eu}${Ku}`
      }
    }
    class PJ {
      constructor() {
        this._model = new kJ, this._objects = new Map
      }
      withMetaData(uu, Ru, yu, Eu) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new eJ(uu, Ru, yu, Eu)), this
      }
      withMaterial(uu) {
        return uu instanceof hJ && (uu = uu.build()), uu && (this._model.resources = this._model.resources ?? new DJ, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(uu)), this
      }
      withMesh(uu) {
        return uu instanceof ZJ && (uu = uu.build()), this._model.resources = this._model.resources ?? new DJ, this._model.resources.object.push(uu), this
      }
      withComponents(uu) {
        return uu instanceof wJ && (uu = uu.build()), this._model.resources = this._model.resources ?? new DJ, this._model.resources.object.push(uu), this
      }
      withBuild(uu, Ru, yu) {
        return this._model.build = this._model.build ?? new LJ, this._model.build.item?.push(new zJ(uu, Ru, yu)), this
      }
      withUnit(uu) {
        return this._model.unit = uu, this
      }
      reset() {
        return this._model = new kJ, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    PJ.KnownMetaSet = new Set(kJ.KnownMeta.map((uu => uu.toLowerCase())));
    class iJ {
      withContentType(uu) {
        this._cts || (this._cts = new TJ);
        const Ru = this._cts.items;
        return Ru.some((Ru => Ru.ext === uu.ext && Ru.ct === uu.ct)) || Ru.push(uu), this
      }
      withRelationship(uu) {
        this._rs || (this._rs = new jJ);
        const Ru = this._rs.items;
        return Ru.some((Ru => Ru.id === uu.id)) || Ru.push(uu), this.withContentType(new WJ("rels", XJ.Relationships)), this
      }
      withModel(uu) {
        return uu instanceof PJ && (uu = uu.build()), this._m = uu, this.withContentType(new WJ("model", XJ.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const uu = `${rJ}${BJ}`;
        if (!this._rs) {
          const Ru = `/${uu}`;
          this.withRelationship(new HJ("rel0", pJ.ThreeDimModel, Ru))
        }
        return new dJ(this._cts, this._rs, this._m)
      }
    }
    class YJ {
      constructor(uu) {
        this._o = uu
      }
      get options() {
        return this._o
      }
      async serializeAsync(uu) {
        const Ru = await this.ensureZipLibReadyAsync();
        if (!Ru) return;
        const yu = Ru.Zip,
          Eu = Ru.ZipDeflate;
        if (!yu || !Eu) throw new Error("fflate Zip / ZipDeflate not available");
        const Ku = function(uu, Ru, yu) {
          const Ku = new Eu(Ru, {
            level: 6
          });
          uu.add(Ku);
          const Qu = function(uu) {
              return {
                push: (Ru, yu) => uu.push(Ru, yu)
              }
            }(Ku),
            mu = new yJ(Qu),
            Ju = new uJ(mu).dec("1.0", "UTF-8");
          new Om(Ju).serialize(yu), mu.finish()
        };
        for (var Qu = arguments.length, mu = new Array(Qu > 1 ? Qu - 1 : 0), Ju = 1; Ju < Qu; Ju++) mu[Ju - 1] = arguments[Ju];
        const Nu = this.toDocument(...mu);
        if (!Nu) return;
        const Xu = new yu(uu);
        Ku(Xu, SJ, Nu.contentTypes), Ku(Xu, `${VJ}${xJ}`, Nu.relationships), Ku(Xu, `${rJ}${BJ}`, Nu.model), Xu.end()
      }
      toDocument() {
        const uu = (new PJ).withUnit(this._o?.unit ?? QJ.millimeter);
        if (this.options.metadata)
          for (const Ku in this.options.metadata) uu.withMetaData(Ku, this.options.metadata[Ku]);
        for (var Ru = arguments.length, yu = new Array(Ru), Eu = 0; Eu < Ru; Eu++) yu[Eu] = arguments[Eu];
        return (new iJ).withModel(this.toModel(uu, ...yu)).build()
      }
    }
    class oJ {
      static async SerializeToMemoryAsync(uu) {
        const Ru = new Array;
        let yu = 0;
        for (var Eu = arguments.length, Ku = new Array(Eu > 1 ? Eu - 1 : 0), Qu = 1; Qu < Eu; Qu++) Ku[Qu - 1] = arguments[Qu];
        if (await uu.serializeAsync((function(uu, Eu, Ku) {
            Ru.push(Eu), yu += Eu.length
          }), ...Ku), !yu) return;
        const mu = new Uint8Array(yu);
        let Ju = 0;
        for (const Nu of Ru) mu.set(Nu, Ju), Ju += Nu.length;
        return mu
      }
    }
    class qJ {}
    qJ.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class OJ {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = uu, this._to = Ru, this._step = yu, this._i = uu
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const uu = this._i;
        return this._i += this._step, uu
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class vJ extends YJ {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...vJ.DefaultOptions,
          ...uu
        })
      }
      toModel(uu) {
        for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
        yu = yu.filter((uu => uu instanceof XE.b || uu instanceof xu.b));
        const Ku = new OJ,
          Qu = uu,
          mu = new Map,
          Ju = this.options.exportInstances ? [] : null;
        for (let Nu = 0; Nu < yu.length; Nu++) {
          const uu = yu[Nu];
          if (uu instanceof xu.b) {
            Ju?.push(uu);
            continue
          }
          const Ru = uu.name || `mesh${Nu}`,
            Eu = uu.getWorldMatrix(),
            Xu = this._handleBabylonTo3mfMatrixTransformToRef(Eu, bJ.Zero()),
            Vu = uu.mC;
          if (void 0 === Vu) continue;
          const ru = 1 == Vu.length;
          for (let yu = 0; yu < Vu.length; yu++) {
            const Eu = Vu[yu],
              Ju = this._extractSubMesh(uu, Eu);
            if (Ju) {
              const uu = ru ? `${Ru}` : `${Ru}_${yu}`,
                Nu = new ZJ(Ku.next()).withData(Ju).withName(uu).build();
              Qu.withMesh(Nu), Qu.withBuild(Nu.id, Xu), mu.set(Eu, Nu)
            }
          }
        }
        if (Ju && Ju.length) {
          const uu = this._groupBy(Ju, (uu => uu.dKu));
          for (const [Ru, yu] of Array.from(uu.entries()))
            if (yu && yu.length)
              for (let uu = 0; uu < yu.length; uu++) {
                const Eu = yu[uu].getWorldMatrix(),
                  Ku = Ru.mC;
                for (let uu = 0; uu < Ku.length; uu++) {
                  const Ru = Ku[uu],
                    yu = mu.get(Ru);
                  yu && Qu.withBuild(yu.id, this._handleBabylonTo3mfMatrixTransformToRef(Eu, bJ.Zero()))
                }
              }
        }
        return Qu.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const uu = globalThis;
          return uu.fflate || await Ku.Tools.LoadScriptAsync(qJ.FFLATEUrl), uu.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(uu, Ru) {
        const yu = uu.DEu();
        if (!yu) return;
        const Eu = uu.getVerticesData(vJ._PositionKind);
        if (!Eu) return;
        if (0 == Ru.indexStart && Ru.indexCount == yu.length) return {
          positions: Eu,
          indices: yu
        };
        const Ku = Ru.indexStart,
          Qu = new Map,
          mu = [],
          Ju = new Uint32Array(Ru.indexCount);
        for (let Nu = 0; Nu < Ru.indexCount; Nu++) {
          const uu = yu[Ku + Nu];
          let Ru = Qu.get(uu);
          if (void 0 === Ru) {
            Ru = Qu.size, Qu.set(uu, Ru);
            const yu = 3 * uu;
            mu.push(Eu[yu], Eu[yu + 1], Eu[yu + 2])
          }
          Ju[Nu] = Ru
        }
        return {
          positions: new Float32Array(mu),
          indices: Ju
        }
      }
      _groupBy(uu, Ru) {
        const yu = new Map;
        for (const Eu of uu) {
          const uu = Ru(Eu),
            Ku = yu.get(uu);
          Ku ? Ku.push(Eu) : yu.set(uu, [Eu])
        }
        return yu
      }
      _handleBabylonTo3mfMatrixTransformToRef(uu, Ru) {
        const yu = uu.multiplyToRef(vJ._R_BJS_TO_3MF, Lu.d.Zero()).m;
        return Ru.values = [yu[0], yu[1], yu[2], yu[4], yu[5], yu[6], yu[8], yu[9], yu[10], yu[12], yu[13], yu[14]], Ru
      }
    }
    vJ.DefaultOptions = {
      unit: QJ.meter,
      exportInstances: !1
    }, vJ._PositionKind = "position", vJ._R_BJS_TO_3MF = Lu.d.RotationX(Math.PI / 2).multiply(Lu.d.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);