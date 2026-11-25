export const id = 235;
export const ids = [235, 241];
export const modules = {
  42109: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Xu
    });
    var su = ju(42037),
      Uu = ju(40253);
    let Zu = !1;

    function Xu() {
      Zu || (Zu = !0, Uu.c.prototype._sphericalPolynomialTargetSize = 0, Uu.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(Uu.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = su.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((uu => {
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
  37671: (uu, Eu, ju) => {
    ju.d(Eu, {
      Color3: () => su.c,
      b: () => su.g
    });
    var su = ju(37680);
    (0, su.i)()
  },
  38152: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(38154);
    class Uu {
      static GetPlanes(uu) {
        const Eu = [];
        for (let ju = 0; ju < 6; ju++) Eu.push(new su.d(0, 0, 0, 0));
        return Uu.GetPlanesToRef(uu, Eu), Eu
      }
      static GetNearPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[2], Eu.normal.y = ju[7] + ju[6], Eu.normal.z = ju[11] + ju[10], Eu.d = ju[15] + ju[14], Eu.normalize()
      }
      static GetFarPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[2], Eu.normal.y = ju[7] - ju[6], Eu.normal.z = ju[11] - ju[10], Eu.d = ju[15] - ju[14], Eu.normalize()
      }
      static GetLeftPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[0], Eu.normal.y = ju[7] + ju[4], Eu.normal.z = ju[11] + ju[8], Eu.d = ju[15] + ju[12], Eu.normalize()
      }
      static GetRightPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[0], Eu.normal.y = ju[7] - ju[4], Eu.normal.z = ju[11] - ju[8], Eu.d = ju[15] - ju[12], Eu.normalize()
      }
      static GetTopPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[1], Eu.normal.y = ju[7] - ju[5], Eu.normal.z = ju[11] - ju[9], Eu.d = ju[15] - ju[13], Eu.normalize()
      }
      static GetBottomPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[1], Eu.normal.y = ju[7] + ju[5], Eu.normal.z = ju[11] + ju[9], Eu.d = ju[15] + ju[13], Eu.normalize()
      }
      static GetPlanesToRef(uu, Eu) {
        Uu.GetNearPlaneToRef(uu, Eu[0]), Uu.GetFarPlaneToRef(uu, Eu[1]), Uu.GetLeftPlaneToRef(uu, Eu[2]), Uu.GetRightPlaneToRef(uu, Eu[3]), Uu.GetTopPlaneToRef(uu, Eu[4]), Uu.GetBottomPlaneToRef(uu, Eu[5])
      }
      static IsPointInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ju++)
          if (Eu[ju].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  38154: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(37494);
    class Uu {
      constructor(uu, Eu, ju, Uu) {
        this.normal = new su.t(uu, Eu, ju), this.d = Uu
      }
      Osu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Uu(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Eu = 0;
        return 0 !== uu && (Eu = 1 / uu), this.normal.x *= Eu, this.normal.y *= Eu, this.normal.z *= Eu, this.d *= Eu, this
      }
      transform(uu) {
        const Eu = Uu._TmpMatrix;
        uu.invertToRef(Eu);
        const ju = Eu.m,
          su = this.normal.x,
          Zu = this.normal.y,
          Xu = this.normal.z,
          lu = this.d,
          qu = su * ju[0] + Zu * ju[1] + Xu * ju[2] + lu * ju[3],
          fu = su * ju[4] + Zu * ju[5] + Xu * ju[6] + lu * ju[7],
          Cu = su * ju[8] + Zu * ju[9] + Xu * ju[10] + lu * ju[11],
          bu = su * ju[12] + Zu * ju[13] + Xu * ju[14] + lu * ju[15];
        return new Uu(qu, fu, Cu, bu)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Eu, ju) {
        const su = Eu.x - uu.x,
          Uu = Eu.y - uu.y,
          Zu = Eu.z - uu.z,
          Xu = ju.x - uu.x,
          lu = ju.y - uu.y,
          qu = ju.z - uu.z,
          fu = Uu * qu - Zu * lu,
          Cu = Zu * Xu - su * qu,
          bu = su * lu - Uu * Xu,
          cu = Math.sqrt(fu * fu + Cu * Cu + bu * bu);
        let Nu;
        return Nu = 0 !== cu ? 1 / cu : 0, this.normal.x = fu * Nu, this.normal.y = Cu * Nu, this.normal.z = bu * Nu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Eu) {
        return su.t.Dot(this.normal, uu) <= Eu
      }
      signedDistanceTo(uu) {
        return su.t.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Uu(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Eu, ju) {
        const su = new Uu(0, 0, 0, 0);
        return su.copyFromPoints(uu, Eu, ju), su
      }
      static FromPositionAndNormal(uu, Eu) {
        const ju = new Uu(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Eu, ju)
      }
      static FromPositionAndNormalToRef(uu, Eu, ju) {
        return ju.normal.yJ(Eu), ju.normal.normalize(), ju.d = -uu.dot(ju.normal), ju
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Eu, ju) {
        const Uu = -(Eu.x * uu.x + Eu.y * uu.y + Eu.z * uu.z);
        return su.t.Dot(ju, Eu) + Uu
      }
    }
    Uu._TmpMatrix = su.e.Identity()
  },
  37488: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Matrix: () => su.e,
      Quaternion: () => su.i,
      RegisterMathVector: () => su.l,
      TmpVectors: () => su.m,
      Vector2: () => su.p,
      dO: () => su.t,
      Vector4: () => su.u
    });
    var su = ju(37494);
    (0, su.l)()
  },
  38458: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor(uu, Eu, ju, su) {
        this.x = uu, this.y = Eu, this.width = ju, this.height = su
      }
      toGlobal(uu, Eu) {
        return new su(this.x * uu, this.y * Eu, this.width * uu, this.height * Eu)
      }
      toGlobalToRef(uu, Eu, ju) {
        return ju.x = this.x * uu, ju.y = this.y * Eu, ju.width = this.width * uu, ju.height = this.height * Eu, this
      }
      clone() {
        return new su(this.x, this.y, this.width, this.height)
      }
    }
  },
  42037: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => fu
    });
    var su = ju(37494),
      Uu = ju(37519),
      Zu = ju(40245),
      Xu = ju(37496),
      lu = ju(37680);
    class qu {
      constructor(uu, Eu, ju, su) {
        this.name = uu, this.worldAxisForNormal = Eu, this.worldAxisForFileX = ju, this.worldAxisForFileY = su
      }
    }
    class fu {
      static _NearestPow2Floor(uu) {
        return uu <= 1 ? 1 : 1 << Math.floor(Math.log2(uu))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(uu) {
        if (!uu.isCube) return null;
        uu.hV()?.wO().flushFramebuffer();
        const Eu = uu.getSize().width,
          ju = uu._sphericalPolynomialTargetSize,
          su = ju > 0 ? this._NearestPow2Floor(ju) : 0,
          Uu = !uu.noMipmap && !0 === uu._texture?.generateMipMaps,
          Zu = su > 0 && su < Eu && Uu,
          Xu = Zu ? Math.max(0, Math.round(Math.log2(Eu / su))) : 0,
          lu = Zu ? Math.max(1, Math.floor(Eu / Math.pow(2, Xu))) : Eu,
          qu = uu.readPixels(0, Xu, void 0, !1),
          fu = uu.readPixels(1, Xu, void 0, !1);
        let Cu, bu;
        uu.isRenderTarget ? (Cu = uu.readPixels(3, Xu, void 0, !1), bu = uu.readPixels(2, Xu, void 0, !1)) : (Cu = uu.readPixels(2, Xu, void 0, !1), bu = uu.readPixels(3, Xu, void 0, !1));
        const cu = uu.readPixels(4, Xu, void 0, !1),
          Nu = uu.readPixels(5, Xu, void 0, !1),
          Ou = uu.gammaSpace,
          Yu = su > 0 && su < Eu && !Zu;
        return new Promise((uu => {
          Promise.all([fu, qu, Cu, bu, cu, Nu]).then((ju => {
            let [Uu, Zu, Xu, qu, fu, Cu] = ju, bu = lu;
            if (Yu) {
              const uu = 4;
              Uu = this._DownsampleFace(Uu, Eu, su, uu), Zu = this._DownsampleFace(Zu, Eu, su, uu), Xu = this._DownsampleFace(Xu, Eu, su, uu), qu = this._DownsampleFace(qu, Eu, su, uu), fu = this._DownsampleFace(fu, Eu, su, uu), Cu = this._DownsampleFace(Cu, Eu, su, uu), bu = su
            }
            const cu = {
              size: bu,
              right: Zu,
              left: Uu,
              up: Xu,
              down: qu,
              front: fu,
              back: Cu,
              format: 5,
              type: Uu instanceof Float32Array ? 1 : 0,
              gammaSpace: Ou
            };
            uu(this.ConvertCubeMapToSphericalPolynomial(cu))
          }))
        }))
      }
      static _AreaElement(uu, Eu) {
        return Math.atan2(uu * Eu, Math.sqrt(uu * uu + Eu * Eu + 1))
      }
      static _DownsampleFace(uu, Eu, ju, su) {
        const Uu = uu instanceof Float32Array ? uu : Float32Array.from(uu),
          Zu = ju * ju * su,
          Xu = new Float32Array(Zu),
          lu = Eu / ju,
          qu = 1 / (lu * lu);
        for (let Cu = 0; Cu < ju; Cu++) {
          const uu = Math.floor(Cu * lu),
            Zu = Math.floor((Cu + 1) * lu);
          for (let fu = 0; fu < ju; fu++) {
            const bu = Math.floor(fu * lu),
              cu = Math.floor((fu + 1) * lu),
              Nu = (Cu * ju + fu) * su;
            for (let ju = 0; ju < su; ju++) {
              let lu = 0;
              for (let Xu = uu; Xu < Zu; Xu++)
                for (let uu = bu; uu < cu; uu++) lu += Uu[(Xu * Eu + uu) * su + ju];
              Xu[Nu + ju] = lu * qu
            }
          }
        }
        if (uu instanceof Float32Array) return Xu;
        const fu = new(0, uu.constructor)(Zu);
        for (let Cu = 0; Cu < Zu; Cu++) fu[Cu] = Xu[Cu] + .5 | 0;
        return fu
      }
      static ConvertCubeMapToSphericalPolynomial(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ju = Eu > 0 ? this._NearestPow2Floor(Eu) : 0;
        if (ju > 0 && uu.size > ju) {
          const Eu = 5 === uu.format ? 4 : 3,
            su = ["right", "left", "up", "down", "front", "back"],
            Uu = {};
          for (const Zu of su) Uu[Zu] = this._DownsampleFace(uu[Zu], uu.size, ju, Eu);
          uu = {
            ...uu,
            ...Uu,
            size: ju
          }
        }
        const su = new Zu.b;
        let qu = 0;
        const fu = 2 / uu.size,
          Cu = fu,
          bu = .5 * fu,
          cu = bu - 1;
        for (let Zu = 0; Zu < 6; Zu++) {
          const Eu = this._FileFaces[Zu],
            ju = uu[Eu.name];
          let Nu = cu;
          const Ou = 5 === uu.format ? 4 : 3;
          for (let Zu = 0; Zu < uu.size; Zu++) {
            let Yu = cu;
            for (let Cu = 0; Cu < uu.size; Cu++) {
              const cu = Eu.worldAxisForFileX.scale(Yu).add(Eu.worldAxisForFileY.scale(Nu)).add(Eu.worldAxisForNormal);
              cu.normalize();
              const hu = this._AreaElement(Yu - bu, Nu - bu) - this._AreaElement(Yu - bu, Nu + bu) - this._AreaElement(Yu + bu, Nu - bu) + this._AreaElement(Yu + bu, Nu + bu);
              let Du = ju[Zu * uu.size * Ou + Cu * Ou + 0],
                gu = ju[Zu * uu.size * Ou + Cu * Ou + 1],
                Mu = ju[Zu * uu.size * Ou + Cu * Ou + 2];
              isNaN(Du) && (Du = 0), isNaN(gu) && (gu = 0), isNaN(Mu) && (Mu = 0), 0 === uu.type && (Du /= 255, gu /= 255, Mu /= 255), uu.gammaSpace && (Du = Math.pow((0, Uu.Clamp)(Du), Xu.i), gu = Math.pow((0, Uu.Clamp)(gu), Xu.i), Mu = Math.pow((0, Uu.Clamp)(Mu), Xu.i));
              const eu = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const uu = Math.max(Du, gu, Mu);
                if (uu > eu) {
                  const Eu = eu / uu;
                  Du *= Eu, gu *= Eu, Mu *= Eu
                }
              } else Du = (0, Uu.Clamp)(Du, 0, eu), gu = (0, Uu.Clamp)(gu, 0, eu), Mu = (0, Uu.Clamp)(Mu, 0, eu);
              const Gu = new lu.c(Du, gu, Mu);
              su.addLight(cu, Gu, hu), qu += hu, Yu += fu
            }
            Nu += Cu
          }
        }
        const Nu = 6 * (4 * Math.PI) / 6 / qu;
        return su.scaleInPlace(Nu), su.convertIncidentRadianceToIrradiance(), su.convertIrradianceToLambertianRadiance(), Zu.e.FromHarmonics(su)
      }
    }
    fu._FileFaces = [new qu("right", new su.t(1, 0, 0), new su.t(0, 0, -1), new su.t(0, -1, 0)), new qu("left", new su.t(-1, 0, 0), new su.t(0, 0, 1), new su.t(0, -1, 0)), new qu("up", new su.t(0, 1, 0), new su.t(1, 0, 0), new su.t(0, 0, 1)), new qu("down", new su.t(0, -1, 0), new su.t(1, 0, 0), new su.t(0, 0, -1)), new qu("front", new su.t(0, 0, 1), new su.t(1, 0, 0), new su.t(0, -1, 0)), new qu("back", new su.t(0, 0, -1), new su.t(-1, 0, 0), new su.t(0, -1, 0))], fu.MAX_HDRI_VALUE = 4096, fu.PRESERVE_CLAMPED_COLORS = !1
  },
  41805: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su.h,
      f: () => su.q
    });
    var su = ju(40294);
    (0, su.v)()
  },
  38303: (uu, Eu, ju) => {
    function su() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Eu = 16 * Math.random() | 0;
        return ("x" === uu ? Eu : 3 & Eu | 8).toString(16)
      }))
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  42077: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Zu
    });
    var su = ju(42068),
      Uu = ju(42082);
    class Zu {
      static ExpandRGBDTexture(uu) {
        const Eu = uu._texture;
        if (!Eu || !uu.isRGBD) return;
        const Uu = Eu.wO(),
          Zu = Uu.getCaps(),
          Xu = Eu.isReady;
        let lu = !1;
        Zu.textureHalfFloatRender && Zu.textureHalfFloatLinearFiltering ? (lu = !0, Eu.type = 2) : Zu.textureFloatRender && Zu.textureFloatLinearFiltering && (lu = !0, Eu.type = 1), lu && (Eu.isReady = !1, Eu._isRGBD = !1, Eu.invertY = !1);
        const qu = async () => {
          const Zu = Uu.isWebGPU,
            Xu = Zu ? 1 : 0;
          Eu.isReady = !1, Zu ? await ju.e(347).then((() => ju(61615))) : await ju.e(329).then((() => ju(61624)));
          const lu = new su.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, Uu, !1, void 0, Eu.type, void 0, null, !1, void 0, Xu);
          lu.externalTextureSamplerBinding = !0;
          const qu = Uu.createRenderTargetTexture(Eu.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: Eu.samplingMode,
            type: Eu.type,
            format: 5
          });
          lu.onEffectCreatedObservable.addOnce((ju => {
            ju.executeWhenCompiled((() => {
              lu.onApply = uu => {
                uu._bindTexture("textureSampler", Eu), uu.setFloat2("scale", 1, 1)
              }, uu.hV()?.postProcessManager.directRender([lu], qu, !0), Uu.restoreDefaultFramebuffer(), Uu._releaseTexture(Eu), lu && lu.dispose(), qu._swapAndDie(Eu), Eu.isReady = !0
            }))
          }))
        };
        lu && (Xu ? qu() : uu.onLoadObservable.addOnce(qu))
      }
      static async EncodeTextureToRGBD(uu, Eu) {
        let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return Eu.wO().isWebGPU ? await ju.e(348).then((() => ju(61641))) : await ju.e(330).then((() => ju(61634))), await (0, Uu.c)("rgbdEncode", uu, Eu, su, 1, 5)
      }
    }
  },
  61478: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AsyncLoop: () => su.d,
      RegisterTools: () => su.f,
      Tools: () => su.h,
      className: () => su.k
    });
    var su = ju(40356);
    (0, su.f)()
  },
  42129: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    class su {
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
        for (const Eu of this._workerInfos)
          if (Eu.idle) return this._execute(Eu, uu), !0;
        return !1
      }
      _execute(uu, Eu) {
        uu.idle = !1, uu.workerPromise.then((ju => {
          Eu(ju, (() => {
            const Eu = this._pendingActions.shift();
            Eu ? this._execute(uu, Eu) : uu.idle = !0
          }))
        }))
      }
    }
    class Uu extends su {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Uu.DefaultOptions;
        super([]), this._maxWorkers = uu, this._createWorkerAsync = Eu, this._options = ju
      }
      push(uu) {
        if (!this._executeOnIdleWorker(uu))
          if (this._workerInfos.length < this._maxWorkers) {
            const Eu = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(Eu), this._execute(Eu, uu)
          } else this._pendingActions.push(uu)
      }
      _execute(uu, Eu) {
        uu.timeoutId && (clearTimeout(uu.timeoutId), delete uu.timeoutId), super._execute(uu, ((ju, su) => {
          Eu(ju, (() => {
            su(), uu.idle && (uu.timeoutId = setTimeout((() => {
              uu.workerPromise.then((uu => {
                uu.terminate()
              }));
              const Eu = this._workerInfos.indexOf(uu); - 1 !== Eu && this._workerInfos.splice(Eu, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    Uu.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61518: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AbstractThreeMfSerializer: () => Hl,
      BVHExporter: () => PX,
      ContentTypeFileName: () => Yl,
      DefaultXmlSerializerFormatOptions: () => LX,
      DefaultXmlSerializerNumberOptions: () => BX,
      EXT_lights_area: () => gU,
      EXT_mesh_gpu_instancing: () => Is,
      EXT_texture_avif: () => XX,
      EXT_texture_webp: () => jX,
      GLTF2Export: () => is,
      GLTFData: () => fu,
      GetXmlFieldMeta: () => iX,
      GetXmlName: () => WX,
      IsQualifiedName: () => oX,
      KHR_draco_mesh_compression: () => Rs,
      KHR_interactivity: () => bU,
      KHR_lights_punctual: () => lU,
      KHR_materials_anisotropy: () => pU,
      KHR_materials_clearcoat: () => PU,
      KHR_materials_coat: () => VU,
      KHR_materials_diffuse_roughness: () => WZ,
      KHR_materials_diffuse_transmission: () => IU,
      KHR_materials_dispersion: () => tU,
      KHR_materials_emissive_strength: () => AU,
      KHR_materials_fuzz: () => cZ,
      KHR_materials_ior: () => RU,
      KHR_materials_iridescence: () => sZ,
      KHR_materials_openpbr: () => BZ,
      KHR_materials_sheen: () => lZ,
      KHR_materials_specular: () => hZ,
      KHR_materials_transmission: () => eZ,
      KHR_materials_unlit: () => dZ,
      KHR_materials_volume: () => kZ,
      KHR_materials_volume_scatter: () => VZ,
      KHR_texture_basisu: () => zZ,
      KHR_texture_transform: () => TZ,
      Known3mfRelationshipTypes: () => hl,
      KnownI3mfContentType: () => Cl,
      Matrix3d: () => pl,
      MatrixFormatter: () => wl,
      ModelFileName: () => Nl,
      NumberFormatter: () => TX,
      OBJExport: () => Xu,
      Object3dDirName: () => cl,
      OpenXmlContentTypesNamespace: () => ql,
      OpenXmlRelationshipsNamespace: () => fl,
      RegisterEXT_lights_area: () => eU,
      RegisterEXT_mesh_gpu_instancing: () => Bs,
      RegisterEXT_texture_avif: () => qX,
      RegisterEXT_texture_webp: () => UX,
      RegisterKHR_draco_mesh_compression: () => EU,
      RegisterKHR_interactivity: () => NU,
      RegisterKHR_lights_punctual: () => fU,
      RegisterKHR_materials_anisotropy: () => JU,
      RegisterKHR_materials_clearcoat: () => kU,
      RegisterKHR_materials_coat: () => QU,
      RegisterKHR_materials_diffuse_roughness: () => IZ,
      RegisterKHR_materials_diffuse_transmission: () => BU,
      RegisterKHR_materials_dispersion: () => TU,
      RegisterKHR_materials_emissive_strength: () => yU,
      RegisterKHR_materials_fuzz: () => OZ,
      RegisterKHR_materials_ior: () => EZ,
      RegisterKHR_materials_iridescence: () => ZZ,
      RegisterKHR_materials_openpbr: () => tZ,
      RegisterKHR_materials_sheen: () => fZ,
      RegisterKHR_materials_specular: () => gZ,
      RegisterKHR_materials_transmission: () => pZ,
      RegisterKHR_materials_unlit: () => PZ,
      RegisterKHR_materials_volume: () => vZ,
      RegisterKHR_materials_volume_scatter: () => QZ,
      RegisterKHR_texture_basisu: () => uX,
      RegisterKHR_texture_transform: () => AZ,
      RelationshipDirName: () => bl,
      RelationshipFileName: () => Ol,
      ResolveFormatOptions: () => xX,
      ResolveNumberOptions: () => tX,
      STLExport: () => fX,
      ST_ObjectType: () => ll,
      ST_Unit: () => Xl,
      StringXmlWriter: () => jl,
      ThreeDimModelNamespace: () => Ul,
      ThreeMf: () => Al,
      ThreeMfBase: () => Wl,
      ThreeMfBaseMaterials: () => il,
      ThreeMfBuild: () => Sl,
      ThreeMfComponent: () => Ql,
      ThreeMfComponents: () => rl,
      ThreeMfComponentsBuilder: () => Bl,
      ThreeMfContentType: () => gl,
      ThreeMfContentTypes: () => Dl,
      ThreeMfDocument: () => Gl,
      ThreeMfDocumentBuilder: () => Tl,
      ThreeMfItem: () => Il,
      ThreeMfMaterialBuilder: () => tl,
      ThreeMfMesh: () => kl,
      ThreeMfMeshBuilder: () => Ll,
      ThreeMfMeta: () => dl,
      ThreeMfMetadataGroup: () => al,
      ThreeMfModel: () => Jl,
      ThreeMfModelBuilder: () => xl,
      ThreeMfObject: () => ol,
      ThreeMfObjectBuilder: () => Fl,
      ThreeMfRelationship: () => el,
      ThreeMfRelationships: () => Ml,
      ThreeMfResources: () => Pl,
      ThreeMfSerializer: () => zl,
      ThreeMfSerializerGlobalConfiguration: () => nl,
      ThreeMfTriangle: () => Vl,
      ThreeMfTriangles: () => Kl,
      ThreeMfVertex: () => vl,
      ThreeMfVertices: () => ml,
      ToQualifiedString: () => FX,
      TokenType: () => ul,
      TriangleSetsNamespace: () => Zl,
      USDZExportAsync: () => dX,
      Utf8XmlWriterToBytes: () => sl,
      XmlAttr: () => rX,
      XmlBuilder: () => El,
      XmlElem: () => QX,
      XmlIgnore: () => VX,
      XmlName: () => KX,
      XmlNameToParts: () => IX,
      XmlSerializer: () => zX,
      _ConvertToGLTFPBRMetallicRoughness: () => dj,
      _SolveMetallic: () => Jj,
      __IGLTFExporterExtension: () => lu
    });
    var su = ju(37488),
      Uu = ju(61478),
      Zu = ju(40552);
    class Xu {
      static OBJ(uu, Eu, ju, Xu) {
        const lu = [];
        let qu = 1,
          fu = 1;
        Eu && (ju || (ju = "mat"), lu.push("mtllib " + ju + ".mtl"));
        for (let Cu = 0; Cu < uu.length; Cu++) {
          const ju = uu[Cu],
            bu = ju.name || `mesh${Cu}}`;
          lu.push(`o ${bu}`);
          let cu = null;
          if (Xu) {
            const uu = ju.computeWorldMatrix(!0);
            cu = new su.Matrix, uu.invertToRef(cu), ju.bakeTransformIntoVertices(uu)
          }
          if (Eu) {
            const uu = ju.material;
            uu && lu.push("usemtl " + uu.id)
          }
          const Nu = ju.geometry;
          if (!Nu) {
            Uu.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const Ou = Nu.getVerticesData("position"),
            Yu = Nu.getVerticesData("normal"),
            hu = Nu.getVerticesData("uv"),
            Du = Nu.Ysu();
          let gu = 0,
            Mu = 0;
          if (!Ou || !Du) {
            Uu.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const eu = uu[0].hV().useRightHandedSystem ? 1 : -1;
          for (let uu = 0; uu < Ou.length; uu += 3) lu.push("v " + Ou[uu] * eu + " " + Ou[uu + 1] + " " + Ou[uu + 2]), gu++;
          if (null != Yu)
            for (let uu = 0; uu < Yu.length; uu += 3) lu.push("vn " + Yu[uu] * eu + " " + Yu[uu + 1] + " " + Yu[uu + 2]);
          if (null != hu)
            for (let uu = 0; uu < hu.length; uu += 2) lu.push("vt " + hu[uu] + " " + hu[uu + 1]), Mu++;
          const Gu = ["", "", ""],
            pu = (ju.material || ju.hV().defaultMaterial)._getEffectiveOrientation(ju),
            [wu, Ju] = pu === Zu.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let uu = 0; uu < Du.length; uu += 3) {
            const Eu = [String(Du[uu] + qu), String(Du[uu + wu] + qu), String(Du[uu + Ju] + qu)],
              ju = [String(Du[uu] + fu), String(Du[uu + wu] + fu), String(Du[uu + Ju] + fu)],
              su = Eu,
              Uu = null != hu ? ju : Gu,
              Zu = null != Yu ? Eu : Gu;
            lu.push("f " + su[0] + "/" + Uu[0] + "/" + Zu[0] + " " + su[1] + "/" + Uu[1] + "/" + Zu[1] + " " + su[2] + "/" + Uu[2] + "/" + Zu[2])
          }
          Xu && cu && ju.bakeTransformIntoVertices(cu), qu += gu, fu += Mu
        }
        return lu.join("\n")
      }
      static MTL(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const ju = [],
          su = uu.material;
        ju.push("newmtl " + Eu), ju.push("  Ns " + su.specularPower.toFixed(4)), ju.push("  Ni 1.5000"), ju.push("  d " + su.alpha.toFixed(4)), ju.push("  Tr 0.0000"), ju.push("  Tf 1.0000 1.0000 1.0000"), ju.push("  illum 2"), ju.push("  Ka " + su.ambientColor.r.toFixed(4) + " " + su.ambientColor.g.toFixed(4) + " " + su.ambientColor.b.toFixed(4)), ju.push("  Kd " + su.diffuseColor.r.toFixed(4) + " " + su.diffuseColor.g.toFixed(4) + " " + su.diffuseColor.b.toFixed(4)), ju.push("  Ks " + su.specularColor.r.toFixed(4) + " " + su.specularColor.g.toFixed(4) + " " + su.specularColor.b.toFixed(4)), ju.push("  Ke " + su.emissiveColor.r.toFixed(4) + " " + su.emissiveColor.g.toFixed(4) + " " + su.emissiveColor.b.toFixed(4));
        su.ambientTexture && ju.push("  map_Ka " + su.ambientTexture.name), su.diffuseTexture && ju.push("  map_Kd " + su.diffuseTexture.name), su.specularTexture && ju.push("  map_Ks " + su.specularTexture.name), su.bumpTexture && ju.push("  map_bump -imfchan z " + su.bumpTexture.name), su.opacityTexture && ju.push("  map_d " + su.opacityTexture.name);
        return ju.join("\n")
      }
    }
    var lu = 0,
      qu = ju(41805);
    class fu {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const uu in this.files) {
          const Eu = this.files[uu],
            ju = new Blob([Eu], {
              type: (0, qu.e)(uu)
            });
          Uu.Tools.Download(ju, uu)
        }
      }
    }
    var Cu = ju(41378),
      bu = ju(41329),
      cu = ju(41890),
      Nu = ju(41335),
      Ou = ju(40092),
      Yu = ju(37506),
      hu = ju(37671),
      Du = ju(37519);
    const gu = Du.HighestCommonFactor,
      Mu = {
        ...Du,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: gu
      };
    var eu = ju(42082),
      Gu = ju(41360),
      pu = ju(41855),
      wu = ju(41857),
      Ju = ju(42102);
    (0, Ju.RegisterDumpTools)();
    var du = ju(40255),
      au = ju(40258),
      Pu = ju(39032),
      ou = ju(40366),
      ku = ju(40739),
      mu = ju(42077);
    let vu = 0;
    const Ku = (uu, Eu, ju, su) => {
        if (!uu[ju]) {
          const Uu = uu.useDelayedTextureLoading;
          uu.useDelayedTextureLoading = !1;
          const Zu = uu._blockEntityCollection;
          uu._blockEntityCollection = !1;
          const Xu = ku.g.CreateFromBase64String(Eu, su + vu++, uu, !0, !1, ku.g.BILINEAR_SAMPLINGMODE);
          uu._blockEntityCollection = Zu;
          const lu = uu.wO().getLoadedTexturesCache(),
            qu = lu.indexOf(Xu.getInternalTexture()); - 1 !== qu && lu.splice(qu, 1), Xu.isRGBD = !0, Xu.wrapU = ku.g.CLAMP_ADDRESSMODE, Xu.wrapV = ku.g.CLAMP_ADDRESSMODE, uu[ju] = Xu, uu.useDelayedTextureLoading = Uu, mu.e.ExpandRGBDTexture(Xu);
          const fu = uu.wO().pO.add((() => {
            Xu.isRGBD = !0;
            const Eu = uu.onBeforeRenderObservable.add((() => {
              Xu.isReady() && (uu.onBeforeRenderObservable.remove(Eu), mu.e.ExpandRGBDTexture(Xu))
            }))
          }));
          uu.wV.add((() => {
            uu.wO().pO.remove(fu)
          }))
        }
        return uu[ju]
      },
      Vu = uu => Ku(uu, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      ru = uu => Ku(uu, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      Qu = uu => Ku(uu, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var iu = ju(40350),
      Wu = ju(37494),
      Su = ju(40399),
      Iu = ju(40543),
      Fu = ju(40622);
    class Bu extends Iu.c {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let Lu = (() => {
      var uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu;
      let Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu = Fu.b,
        eu = [],
        Gu = [],
        pu = [],
        wu = [],
        Ju = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [];
      return uu = class extends Mu {
        get useEnergyConservation() {
          return (0, du.b)(this, Eu, "f")
        }
        set useEnergyConservation(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, du.b)(this, ju, "f")
        }
        set useSmithVisibilityHeightCorrelated(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get useSphericalHarmonics() {
          return (0, du.b)(this, su, "f")
        }
        set useSphericalHarmonics(uu) {
          (0, du.d)(this, su, uu, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, du.b)(this, Uu, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(uu) {
          (0, du.d)(this, Uu, uu, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, du.b)(this, Zu, "f")
        }
        set mixIblRadianceWithIrradiance(uu) {
          (0, du.d)(this, Zu, uu, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, du.b)(this, Xu, "f")
        }
        set useLegacySpecularEnergyConservation(uu) {
          (0, du.d)(this, Xu, uu, "f")
        }
        get baseDiffuseModel() {
          return (0, du.b)(this, lu, "f")
        }
        set baseDiffuseModel(uu) {
          (0, du.d)(this, lu, uu, "f")
        }
        get dielectricSpecularModel() {
          return (0, du.b)(this, qu, "f")
        }
        set dielectricSpecularModel(uu) {
          (0, du.d)(this, qu, uu, "f")
        }
        get conductorSpecularModel() {
          return (0, du.b)(this, fu, "f")
        }
        set conductorSpecularModel(uu) {
          (0, du.d)(this, fu, uu, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Cu) {
          let bu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Cu, "PBRBRDF", 90, new Bu, bu), this._useEnergyConservation = uu.DEFAULT_USE_ENERGY_CONSERVATION, Eu.set(this, (0, du.g)(this, eu, uu.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, du.g)(this, Gu), uu.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), ju.set(this, (0, du.g)(this, pu, uu.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, du.g)(this, wu), uu.DEFAULT_USE_SPHERICAL_HARMONICS), su.set(this, (0, du.g)(this, Ju, uu.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, du.g)(this, Pu), uu.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), Uu.set(this, (0, du.g)(this, ou, uu.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, du.g)(this, ku), uu.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), Zu.set(this, (0, du.g)(this, mu, uu.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, du.g)(this, vu), uu.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), Xu.set(this, (0, du.g)(this, Ku, uu.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, du.g)(this, Vu), uu.DEFAULT_DIFFUSE_MODEL), lu.set(this, (0, du.g)(this, ru, uu.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, du.g)(this, Qu), uu.DEFAULT_DIELECTRIC_SPECULAR_MODEL), qu.set(this, (0, du.g)(this, iu, uu.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, du.g)(this, Wu), uu.DEFAULT_CONDUCTOR_SPECULAR_MODEL), fu.set(this, (0, du.g)(this, Su, uu.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, du.g)(this, Iu), this._internalMarkAllSubMeshesAsMiscDirty = Cu._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(uu) {
          uu.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, uu.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, uu.SPHERICAL_HARMONICS = this._useSphericalHarmonics, uu.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, uu.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, uu.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, uu.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, uu.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, uu.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, Uu = new WeakMap, Zu = new WeakMap, Xu = new WeakMap, lu = new WeakMap, qu = new WeakMap, fu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mu[Symbol.metadata] ?? null) : void 0;
        Cu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], bu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], cu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], Nu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], Ou = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], Yu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], hu = [(0, au.E)("baseDiffuseModel"), (0, au.e)("_markAllSubMeshesAsMiscDirty")], Du = [(0, au.E)("dielectricSpecularModel"), (0, au.e)("_markAllSubMeshesAsMiscDirty")], gu = [(0, au.E)("conductorSpecularModel"), (0, au.e)("_markAllSubMeshesAsMiscDirty")], (0, du.e)(uu, null, Cu, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: uu => "useEnergyConservation" in uu,
            get: uu => uu.useEnergyConservation,
            set: (uu, Eu) => {
              uu.useEnergyConservation = Eu
            }
          },
          metadata: Eu
        }, eu, Gu), (0, du.e)(uu, null, bu, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSmithVisibilityHeightCorrelated" in uu,
            get: uu => uu.useSmithVisibilityHeightCorrelated,
            set: (uu, Eu) => {
              uu.useSmithVisibilityHeightCorrelated = Eu
            }
          },
          metadata: Eu
        }, pu, wu), (0, du.e)(uu, null, cu, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSphericalHarmonics" in uu,
            get: uu => uu.useSphericalHarmonics,
            set: (uu, Eu) => {
              uu.useSphericalHarmonics = Eu
            }
          },
          metadata: Eu
        }, Ju, Pu), (0, du.e)(uu, null, Nu, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSpecularGlossinessInputEnergyConservation" in uu,
            get: uu => uu.useSpecularGlossinessInputEnergyConservation,
            set: (uu, Eu) => {
              uu.useSpecularGlossinessInputEnergyConservation = Eu
            }
          },
          metadata: Eu
        }, ou, ku), (0, du.e)(uu, null, Ou, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: uu => "mixIblRadianceWithIrradiance" in uu,
            get: uu => uu.mixIblRadianceWithIrradiance,
            set: (uu, Eu) => {
              uu.mixIblRadianceWithIrradiance = Eu
            }
          },
          metadata: Eu
        }, mu, vu), (0, du.e)(uu, null, Yu, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLegacySpecularEnergyConservation" in uu,
            get: uu => uu.useLegacySpecularEnergyConservation,
            set: (uu, Eu) => {
              uu.useLegacySpecularEnergyConservation = Eu
            }
          },
          metadata: Eu
        }, Ku, Vu), (0, du.e)(uu, null, hu, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseDiffuseModel" in uu,
            get: uu => uu.baseDiffuseModel,
            set: (uu, Eu) => {
              uu.baseDiffuseModel = Eu
            }
          },
          metadata: Eu
        }, ru, Qu), (0, du.e)(uu, null, Du, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: uu => "dielectricSpecularModel" in uu,
            get: uu => uu.dielectricSpecularModel,
            set: (uu, Eu) => {
              uu.dielectricSpecularModel = Eu
            }
          },
          metadata: Eu
        }, iu, Wu), (0, du.e)(uu, null, gu, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: uu => "conductorSpecularModel" in uu,
            get: uu => uu.conductorSpecularModel,
            set: (uu, Eu) => {
              uu.conductorSpecularModel = Eu
            }
          },
          metadata: Eu
        }, Su, Iu), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu.DEFAULT_USE_ENERGY_CONSERVATION = !0, uu.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, uu.DEFAULT_USE_SPHERICAL_HARMONICS = !0, uu.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, uu.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, uu.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, uu.DEFAULT_DIFFUSE_MODEL = 0, uu.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, uu.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, uu
    })();
    var tu = ju(40529),
      xu = ju(37680),
      Tu = ju(40535),
      Hu = ju(40373),
      Au = ju(40604),
      nu = ju(40598),
      yu = ju(40610),
      zu = ju(40592);
    class Ru extends Iu.c {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let uE = (() => {
      var uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu;
      let Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju = Fu.b,
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [],
        Su = [],
        Iu = [],
        Bu = [],
        Lu = [],
        tu = [],
        Tu = [],
        Hu = [],
        Au = [],
        yu = [],
        uE = [],
        EE = [],
        jE = [],
        sE = [],
        UE = [],
        ZE = [],
        XE = [],
        lE = [];
      return uu = class extends Ju {
        get isEnabled() {
          return (0, du.b)(this, Eu, "f")
        }
        set isEnabled(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        get indexOfRefraction() {
          return (0, du.b)(this, ju, "f")
        }
        set indexOfRefraction(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get texture() {
          return (0, du.b)(this, su, "f")
        }
        set texture(uu) {
          (0, du.d)(this, su, uu, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, du.b)(this, Uu, "f")
        }
        set useRoughnessFromMainTexture(uu) {
          (0, du.d)(this, Uu, uu, "f")
        }
        get textureRoughness() {
          return (0, du.b)(this, Zu, "f")
        }
        set textureRoughness(uu) {
          (0, du.d)(this, Zu, uu, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, du.b)(this, Xu, "f")
        }
        set remapF0OnInterfaceChange(uu) {
          (0, du.d)(this, Xu, uu, "f")
        }
        get bumpTexture() {
          return (0, du.b)(this, lu, "f")
        }
        set bumpTexture(uu) {
          (0, du.d)(this, lu, uu, "f")
        }
        get isTintEnabled() {
          return (0, du.b)(this, qu, "f")
        }
        set isTintEnabled(uu) {
          (0, du.d)(this, qu, uu, "f")
        }
        get tintTexture() {
          return (0, du.b)(this, fu, "f")
        }
        set tintTexture(uu) {
          (0, du.d)(this, fu, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Cu) {
          let bu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Cu, "PBRClearCoat", 100, new Ru, bu), this._isEnabled = !1, Eu.set(this, (0, du.g)(this, Pu, !1)), this.intensity = ((0, du.g)(this, ou), (0, du.g)(this, ku, 1)), this.roughness = ((0, du.g)(this, mu), (0, du.g)(this, vu, 0)), this._indexOfRefraction = ((0, du.g)(this, Ku), uu._DefaultIndexOfRefraction), ju.set(this, (0, du.g)(this, Vu, uu._DefaultIndexOfRefraction)), this._texture = ((0, du.g)(this, ru), null), su.set(this, (0, du.g)(this, Qu, null)), this._useRoughnessFromMainTexture = ((0, du.g)(this, iu), !0), Uu.set(this, (0, du.g)(this, Wu, !0)), this._textureRoughness = ((0, du.g)(this, Su), null), Zu.set(this, (0, du.g)(this, Iu, null)), this._remapF0OnInterfaceChange = ((0, du.g)(this, Bu), !0), Xu.set(this, (0, du.g)(this, Lu, !0)), this._bumpTexture = ((0, du.g)(this, tu), null), lu.set(this, (0, du.g)(this, Tu, null)), this._isTintEnabled = ((0, du.g)(this, Hu), !1), qu.set(this, (0, du.g)(this, Au, !1)), this.tintColor = ((0, du.g)(this, yu), (0, du.g)(this, uE, xu.c.White())), this.tintColorAtDistance = ((0, du.g)(this, EE), (0, du.g)(this, jE, 1)), this.tintThickness = ((0, du.g)(this, sE), (0, du.g)(this, UE, 1)), this._tintTexture = ((0, du.g)(this, ZE), null), fu.set(this, (0, du.g)(this, XE, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, du.g)(this, lE), this._internalMarkAllSubMeshesAsTexturesDirty = Cu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Eu, ju) {
          if (!this._isEnabled) return !0;
          const su = this._material._disableBumpMap;
          if (uu._areTexturesDirty && Eu.texturesEnabled) {
            if (this._texture && nu.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && nu.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (ju.getCaps().standardDerivatives && this._bumpTexture && nu.d.ClearCoatBumpTextureEnabled && !su && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && nu.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(Eu, ju) {
          this._isEnabled ? (Eu.CLEARCOAT = !0, Eu.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, Eu.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, Eu._areTexturesDirty && ju.texturesEnabled && (this._texture && nu.d.ClearCoatTextureEnabled ? (0, zu.jb)(this._texture, Eu, "CLEARCOAT_TEXTURE") : Eu.CLEARCOAT_TEXTURE = !1, this._textureRoughness && nu.d.ClearCoatTextureEnabled ? (0, zu.jb)(this._textureRoughness, Eu, "CLEARCOAT_TEXTURE_ROUGHNESS") : Eu.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && nu.d.ClearCoatBumpTextureEnabled ? (0, zu.jb)(this._bumpTexture, Eu, "CLEARCOAT_BUMP") : Eu.CLEARCOAT_BUMP = !1, Eu.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === uu._DefaultIndexOfRefraction, this._isTintEnabled ? (Eu.CLEARCOAT_TINT = !0, this._tintTexture && nu.d.ClearCoatTintTextureEnabled ? ((0, zu.jb)(this._tintTexture, Eu, "CLEARCOAT_TINT_TEXTURE"), Eu.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : Eu.CLEARCOAT_TINT_TEXTURE = !1) : (Eu.CLEARCOAT_TINT = !1, Eu.CLEARCOAT_TINT_TEXTURE = !1))) : (Eu.CLEARCOAT = !1, Eu.CLEARCOAT_TEXTURE = !1, Eu.CLEARCOAT_TEXTURE_ROUGHNESS = !1, Eu.CLEARCOAT_BUMP = !1, Eu.CLEARCOAT_TINT = !1, Eu.CLEARCOAT_TINT_TEXTURE = !1, Eu.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, Eu.CLEARCOAT_DEFAULTIOR = !1, Eu.CLEARCOAT_TEXTUREDIRECTUV = 0, Eu.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, Eu.CLEARCOAT_BUMPDIRECTUV = 0, Eu.CLEARCOAT_REMAP_F0 = !1, Eu.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, Eu.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(uu, Eu, ju, su) {
          if (!this._isEnabled) return;
          const Uu = su.materialDefines,
            Zu = this._material.isFrozen,
            Xu = this._material._disableBumpMap,
            lu = this._material._invertNormalMapX,
            qu = this._material._invertNormalMapY;
          if (!uu.useUbo || !Zu || !uu.isSync) {
            (this._texture || this._textureRoughness) && nu.d.ClearCoatTextureEnabled && (uu.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, zu.E)(this._texture, uu, "clearCoat"), this._textureRoughness && !Uu.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, zu.E)(this._textureRoughness, uu, "clearCoatRoughness")), this._bumpTexture && ju.getCaps().standardDerivatives && nu.d.ClearCoatTextureEnabled && !Xu && (uu.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, zu.E)(this._bumpTexture, uu, "clearCoatBump"), Eu._mirroredCameraPosition ? uu.updateFloat2("vClearCoatTangentSpaceParams", lu ? 1 : -1, qu ? 1 : -1) : uu.updateFloat2("vClearCoatTangentSpaceParams", lu ? -1 : 1, qu ? -1 : 1)), this._tintTexture && nu.d.ClearCoatTintTextureEnabled && (uu.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, zu.E)(this._tintTexture, uu, "clearCoatTint")), uu.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const su = 1 - this._indexOfRefraction,
              Zu = 1 + this._indexOfRefraction,
              fu = Math.pow(-su / Zu, 2),
              Cu = 1 / this._indexOfRefraction;
            uu.updateFloat4("vClearCoatRefractionParams", fu, Cu, su, Zu), this._isTintEnabled && (uu.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), uu.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          Eu.texturesEnabled && (this._texture && nu.d.ClearCoatTextureEnabled && uu.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !Uu.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && nu.d.ClearCoatTextureEnabled && uu.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && ju.getCaps().standardDerivatives && nu.d.ClearCoatBumpTextureEnabled && !Xu && uu.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && nu.d.ClearCoatTintTextureEnabled && uu.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(uu, Eu, ju) {
          return uu.CLEARCOAT_BUMP && Eu.addFallback(ju++, "CLEARCOAT_BUMP"), uu.CLEARCOAT_TINT && Eu.addFallback(ju++, "CLEARCOAT_TINT"), uu.CLEARCOAT && Eu.addFallback(ju++, "CLEARCOAT"), ju
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
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, Uu = new WeakMap, Zu = new WeakMap, Xu = new WeakMap, lu = new WeakMap, qu = new WeakMap, fu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ju[Symbol.metadata] ?? null) : void 0;
        Cu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], bu = [(0, au.E)()], cu = [(0, au.E)()], Nu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Ou = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Yu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], hu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Du = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], gu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Mu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], eu = [(0, au.j)()], Gu = [(0, au.E)()], pu = [(0, au.E)()], wu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], (0, du.e)(uu, null, Cu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Eu) => {
              uu.isEnabled = Eu
            }
          },
          metadata: Eu
        }, Pu, ou), (0, du.e)(uu, null, Nu, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "indexOfRefraction" in uu,
            get: uu => uu.indexOfRefraction,
            set: (uu, Eu) => {
              uu.indexOfRefraction = Eu
            }
          },
          metadata: Eu
        }, Vu, ru), (0, du.e)(uu, null, Ou, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Eu) => {
              uu.texture = Eu
            }
          },
          metadata: Eu
        }, Qu, iu), (0, du.e)(uu, null, Yu, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMainTexture" in uu,
            get: uu => uu.useRoughnessFromMainTexture,
            set: (uu, Eu) => {
              uu.useRoughnessFromMainTexture = Eu
            }
          },
          metadata: Eu
        }, Wu, Su), (0, du.e)(uu, null, hu, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "textureRoughness" in uu,
            get: uu => uu.textureRoughness,
            set: (uu, Eu) => {
              uu.textureRoughness = Eu
            }
          },
          metadata: Eu
        }, Iu, Bu), (0, du.e)(uu, null, Du, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: uu => "remapF0OnInterfaceChange" in uu,
            get: uu => uu.remapF0OnInterfaceChange,
            set: (uu, Eu) => {
              uu.remapF0OnInterfaceChange = Eu
            }
          },
          metadata: Eu
        }, Lu, tu), (0, du.e)(uu, null, gu, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "bumpTexture" in uu,
            get: uu => uu.bumpTexture,
            set: (uu, Eu) => {
              uu.bumpTexture = Eu
            }
          },
          metadata: Eu
        }, Tu, Hu), (0, du.e)(uu, null, Mu, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isTintEnabled" in uu,
            get: uu => uu.isTintEnabled,
            set: (uu, Eu) => {
              uu.isTintEnabled = Eu
            }
          },
          metadata: Eu
        }, Au, yu), (0, du.e)(uu, null, wu, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintTexture" in uu,
            get: uu => uu.tintTexture,
            set: (uu, Eu) => {
              uu.tintTexture = Eu
            }
          },
          metadata: Eu
        }, XE, lE), (0, du.e)(null, null, bu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Eu) => {
              uu.intensity = Eu
            }
          },
          metadata: Eu
        }, ku, mu), (0, du.e)(null, null, cu, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughness" in uu,
            get: uu => uu.roughness,
            set: (uu, Eu) => {
              uu.roughness = Eu
            }
          },
          metadata: Eu
        }, vu, Ku), (0, du.e)(null, null, eu, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColor" in uu,
            get: uu => uu.tintColor,
            set: (uu, Eu) => {
              uu.tintColor = Eu
            }
          },
          metadata: Eu
        }, uE, EE), (0, du.e)(null, null, Gu, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColorAtDistance" in uu,
            get: uu => uu.tintColorAtDistance,
            set: (uu, Eu) => {
              uu.tintColorAtDistance = Eu
            }
          },
          metadata: Eu
        }, jE, sE), (0, du.e)(null, null, pu, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintThickness" in uu,
            get: uu => uu.tintThickness,
            set: (uu, Eu) => {
              uu.tintThickness = Eu
            }
          },
          metadata: Eu
        }, UE, ZE), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu._DefaultIndexOfRefraction = 1.5, uu
    })();
    class EE extends Iu.c {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let jE = (() => {
      var uu, Eu, ju, su;
      let Uu, Zu, Xu, lu, qu, fu, Cu, bu = Fu.b,
        cu = [],
        Nu = [],
        Ou = [],
        Yu = [],
        hu = [],
        Du = [],
        gu = [],
        Mu = [],
        eu = [],
        Gu = [],
        pu = [],
        wu = [],
        Ju = [],
        Pu = [];
      return uu = class extends bu {
        get isEnabled() {
          return (0, du.b)(this, Eu, "f")
        }
        set isEnabled(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        get texture() {
          return (0, du.b)(this, ju, "f")
        }
        set texture(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get thicknessTexture() {
          return (0, du.b)(this, su, "f")
        }
        set thicknessTexture(uu) {
          (0, du.d)(this, su, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(Uu) {
          let Zu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Uu, "PBRIridescence", 110, new EE, Zu), this._isEnabled = !1, Eu.set(this, (0, du.g)(this, cu, !1)), this.intensity = ((0, du.g)(this, Nu), (0, du.g)(this, Ou, 1)), this.minimumThickness = ((0, du.g)(this, Yu), (0, du.g)(this, hu, uu._DefaultMinimumThickness)), this.maximumThickness = ((0, du.g)(this, Du), (0, du.g)(this, gu, uu._DefaultMaximumThickness)), this.indexOfRefraction = ((0, du.g)(this, Mu), (0, du.g)(this, eu, uu._DefaultIndexOfRefraction)), this._texture = ((0, du.g)(this, Gu), null), ju.set(this, (0, du.g)(this, pu, null)), this._thicknessTexture = ((0, du.g)(this, wu), null), su.set(this, (0, du.g)(this, Ju, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, du.g)(this, Pu), this._internalMarkAllSubMeshesAsTexturesDirty = Uu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Eu) {
          if (!this._isEnabled) return !0;
          if (uu._areTexturesDirty && Eu.texturesEnabled) {
            if (this._texture && nu.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && nu.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uu, Eu) {
          this._isEnabled ? (uu.IRIDESCENCE = !0, uu._areTexturesDirty && Eu.texturesEnabled && (this._texture && nu.d.IridescenceTextureEnabled ? (0, zu.jb)(this._texture, uu, "IRIDESCENCE_TEXTURE") : uu.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && nu.d.IridescenceTextureEnabled ? (0, zu.jb)(this._thicknessTexture, uu, "IRIDESCENCE_THICKNESS_TEXTURE") : uu.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (uu.IRIDESCENCE = !1, uu.IRIDESCENCE_TEXTURE = !1, uu.IRIDESCENCE_THICKNESS_TEXTURE = !1, uu.IRIDESCENCE_TEXTUREDIRECTUV = 0, uu.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(uu, Eu) {
          if (!this._isEnabled) return;
          const ju = this._material.isFrozen;
          uu.useUbo && ju && uu.isSync || ((this._texture || this._thicknessTexture) && nu.d.IridescenceTextureEnabled && (uu.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, zu.E)(this._texture, uu, "iridescence"), this._thicknessTexture && (0, zu.E)(this._thicknessTexture, uu, "iridescenceThickness")), uu.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), Eu.texturesEnabled && (this._texture && nu.d.IridescenceTextureEnabled && uu.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && nu.d.IridescenceTextureEnabled && uu.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(uu, Eu, ju) {
          return uu.IRIDESCENCE && Eu.addFallback(ju++, "IRIDESCENCE"), ju
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
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(bu[Symbol.metadata] ?? null) : void 0;
        Uu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Zu = [(0, au.E)()], Xu = [(0, au.E)()], lu = [(0, au.E)()], qu = [(0, au.E)()], fu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Cu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], (0, du.e)(uu, null, Uu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Eu) => {
              uu.isEnabled = Eu
            }
          },
          metadata: Eu
        }, cu, Nu), (0, du.e)(uu, null, fu, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Eu) => {
              uu.texture = Eu
            }
          },
          metadata: Eu
        }, pu, wu), (0, du.e)(uu, null, Cu, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "thicknessTexture" in uu,
            get: uu => uu.thicknessTexture,
            set: (uu, Eu) => {
              uu.thicknessTexture = Eu
            }
          },
          metadata: Eu
        }, Ju, Pu), (0, du.e)(null, null, Zu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Eu) => {
              uu.intensity = Eu
            }
          },
          metadata: Eu
        }, Ou, Yu), (0, du.e)(null, null, Xu, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "minimumThickness" in uu,
            get: uu => uu.minimumThickness,
            set: (uu, Eu) => {
              uu.minimumThickness = Eu
            }
          },
          metadata: Eu
        }, hu, Du), (0, du.e)(null, null, lu, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "maximumThickness" in uu,
            get: uu => uu.maximumThickness,
            set: (uu, Eu) => {
              uu.maximumThickness = Eu
            }
          },
          metadata: Eu
        }, gu, Mu), (0, du.e)(null, null, qu, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "indexOfRefraction" in uu,
            get: uu => uu.indexOfRefraction,
            set: (uu, Eu) => {
              uu.indexOfRefraction = Eu
            }
          },
          metadata: Eu
        }, eu, Gu), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu._DefaultMinimumThickness = 100, uu._DefaultMaximumThickness = 400, uu._DefaultIndexOfRefraction = 1.3, uu
    })();
    class sE extends Iu.c {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let UE = (() => {
      var uu, Eu, ju, su;
      let Uu, Zu, Xu, lu, qu, fu = Fu.b,
        Cu = [],
        bu = [],
        cu = [],
        Nu = [],
        Ou = [],
        Yu = [],
        hu = [],
        Du = [],
        gu = [],
        Mu = [];
      return uu = class extends fu {
        get isEnabled() {
          return (0, du.b)(this, Eu, "f")
        }
        set isEnabled(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        set angle(uu) {
          this.direction.x = Math.cos(uu), this.direction.y = Math.sin(uu)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, du.b)(this, ju, "f")
        }
        set texture(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get legacy() {
          return (0, du.b)(this, su, "f")
        }
        set legacy(uu) {
          (0, du.d)(this, su, uu, "f")
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
          let Uu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uu, "PBRAnisotropic", 110, new sE, Uu), this._isEnabled = !1, Eu.set(this, (0, du.g)(this, Cu, !1)), this.intensity = ((0, du.g)(this, bu), (0, du.g)(this, cu, 1)), this.direction = ((0, du.g)(this, Nu), (0, du.g)(this, Ou, new Wu.p(1, 0))), this._texture = ((0, du.g)(this, Yu), null), ju.set(this, (0, du.g)(this, hu, null)), this._legacy = ((0, du.g)(this, Du), !1), su.set(this, (0, du.g)(this, gu, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, du.g)(this, Mu), this._internalMarkAllSubMeshesAsTexturesDirty = uu._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = uu._dirtyCallbacks[16]
        }
        isReadyForSubMesh(uu, Eu) {
          return !this._isEnabled || !(uu._areTexturesDirty && Eu.texturesEnabled && this._texture && nu.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(uu, Eu, ju) {
          this._isEnabled ? (uu.ANISOTROPIC = this._isEnabled, this._isEnabled && !ju.isVerticesDataPresent(Su.j.TangentKind) && (uu._needUVs = !0, uu.MAINUV1 = !0), uu._areTexturesDirty && Eu.texturesEnabled && (this._texture && nu.d.AnisotropicTextureEnabled ? (0, zu.jb)(this._texture, uu, "ANISOTROPIC_TEXTURE") : uu.ANISOTROPIC_TEXTURE = !1), uu._areMiscDirty && (uu.ANISOTROPIC_LEGACY = this._legacy)) : (uu.ANISOTROPIC = !1, uu.ANISOTROPIC_TEXTURE = !1, uu.ANISOTROPIC_TEXTUREDIRECTUV = 0, uu.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(uu, Eu) {
          if (!this._isEnabled) return;
          const ju = this._material.isFrozen;
          uu.useUbo && ju && uu.isSync || (this._texture && nu.d.AnisotropicTextureEnabled && (uu.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, zu.E)(this._texture, uu, "anisotropy")), uu.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), Eu.texturesEnabled && this._texture && nu.d.AnisotropicTextureEnabled && uu.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(uu, Eu, ju) {
          return uu.ANISOTROPIC && Eu.addFallback(ju++, "ANISOTROPIC"), ju
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
        parse(uu, Eu, ju) {
          super.parse(uu, Eu, ju), void 0 === uu.legacy && (this.legacy = !0)
        }
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(fu[Symbol.metadata] ?? null) : void 0;
        Uu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Zu = [(0, au.E)()], Xu = [(0, au.z)()], lu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], (0, du.e)(uu, null, Uu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Eu) => {
              uu.isEnabled = Eu
            }
          },
          metadata: Eu
        }, Cu, bu), (0, du.e)(uu, null, lu, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Eu) => {
              uu.texture = Eu
            }
          },
          metadata: Eu
        }, hu, Du), (0, du.e)(uu, null, qu, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: uu => "legacy" in uu,
            get: uu => uu.legacy,
            set: (uu, Eu) => {
              uu.legacy = Eu
            }
          },
          metadata: Eu
        }, gu, Mu), (0, du.e)(null, null, Zu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Eu) => {
              uu.intensity = Eu
            }
          },
          metadata: Eu
        }, cu, Nu), (0, du.e)(null, null, Xu, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: uu => "direction" in uu,
            get: uu => uu.direction,
            set: (uu, Eu) => {
              uu.direction = Eu
            }
          },
          metadata: Eu
        }, Ou, Yu), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu
    })();
    class ZE extends Iu.c {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let XE = (() => {
      var uu, Eu, ju, su, Uu, Zu, Xu, lu;
      let qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du = Fu.b,
        gu = [],
        Mu = [],
        eu = [],
        Gu = [],
        pu = [],
        wu = [],
        Ju = [],
        Pu = [],
        ou = [],
        ku = [],
        mu = [],
        vu = [],
        Ku = [],
        Vu = [],
        ru = [],
        Qu = [],
        iu = [],
        Wu = [];
      return uu = class extends Du {
        get isEnabled() {
          return (0, du.b)(this, Eu, "f")
        }
        set isEnabled(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, du.b)(this, ju, "f")
        }
        set linkSheenWithAlbedo(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get texture() {
          return (0, du.b)(this, su, "f")
        }
        set texture(uu) {
          (0, du.d)(this, su, uu, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, du.b)(this, Uu, "f")
        }
        set useRoughnessFromMainTexture(uu) {
          (0, du.d)(this, Uu, uu, "f")
        }
        get roughness() {
          return (0, du.b)(this, Zu, "f")
        }
        set roughness(uu) {
          (0, du.d)(this, Zu, uu, "f")
        }
        get textureRoughness() {
          return (0, du.b)(this, Xu, "f")
        }
        set textureRoughness(uu) {
          (0, du.d)(this, Xu, uu, "f")
        }
        get albedoScaling() {
          return (0, du.b)(this, lu, "f")
        }
        set albedoScaling(uu) {
          (0, du.d)(this, lu, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uu) {
          let qu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uu, "Sheen", 120, new ZE, qu), this._isEnabled = !1, Eu.set(this, (0, du.g)(this, gu, !1)), this._linkSheenWithAlbedo = ((0, du.g)(this, Mu), !1), ju.set(this, (0, du.g)(this, eu, !1)), this.intensity = ((0, du.g)(this, Gu), (0, du.g)(this, pu, 1)), this.color = ((0, du.g)(this, wu), (0, du.g)(this, Ju, xu.c.White())), this._texture = ((0, du.g)(this, Pu), null), su.set(this, (0, du.g)(this, ou, null)), this._useRoughnessFromMainTexture = ((0, du.g)(this, ku), !0), Uu.set(this, (0, du.g)(this, mu, !0)), this._roughness = ((0, du.g)(this, vu), null), Zu.set(this, (0, du.g)(this, Ku, null)), this._textureRoughness = ((0, du.g)(this, Vu), null), Xu.set(this, (0, du.g)(this, ru, null)), this._albedoScaling = ((0, du.g)(this, Qu), !1), lu.set(this, (0, du.g)(this, iu, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, du.g)(this, Wu), this._internalMarkAllSubMeshesAsTexturesDirty = uu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Eu) {
          if (!this._isEnabled) return !0;
          if (uu._areTexturesDirty && Eu.texturesEnabled) {
            if (this._texture && nu.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && nu.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uu, Eu) {
          this._isEnabled ? (uu.SHEEN = !0, uu.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, uu.SHEEN_ROUGHNESS = null !== this._roughness, uu.SHEEN_ALBEDOSCALING = this._albedoScaling, uu.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, uu._areTexturesDirty && Eu.texturesEnabled && (this._texture && nu.d.SheenTextureEnabled ? ((0, zu.jb)(this._texture, uu, "SHEEN_TEXTURE"), uu.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : uu.SHEEN_TEXTURE = !1, this._textureRoughness && nu.d.SheenTextureEnabled ? (0, zu.jb)(this._textureRoughness, uu, "SHEEN_TEXTURE_ROUGHNESS") : uu.SHEEN_TEXTURE_ROUGHNESS = !1)) : (uu.SHEEN = !1, uu.SHEEN_TEXTURE = !1, uu.SHEEN_TEXTURE_ROUGHNESS = !1, uu.SHEEN_LINKWITHALBEDO = !1, uu.SHEEN_ROUGHNESS = !1, uu.SHEEN_ALBEDOSCALING = !1, uu.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, uu.SHEEN_GAMMATEXTURE = !1, uu.SHEEN_TEXTUREDIRECTUV = 0, uu.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(uu, Eu, ju, su) {
          if (!this._isEnabled) return;
          const Uu = su.materialDefines,
            Zu = this._material.isFrozen;
          uu.useUbo && Zu && uu.isSync || ((this._texture || this._textureRoughness) && nu.d.SheenTextureEnabled && (uu.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, zu.E)(this._texture, uu, "sheen"), this._textureRoughness && !Uu.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, zu.E)(this._textureRoughness, uu, "sheenRoughness")), uu.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && uu.updateFloat("vSheenRoughness", this._roughness)), Eu.texturesEnabled && (this._texture && nu.d.SheenTextureEnabled && uu.setTexture("sheenSampler", this._texture), this._textureRoughness && !Uu.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && nu.d.SheenTextureEnabled && uu.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(uu, Eu, ju) {
          return uu.SHEEN && Eu.addFallback(ju++, "SHEEN"), ju
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
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, Uu = new WeakMap, Zu = new WeakMap, Xu = new WeakMap, lu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Du[Symbol.metadata] ?? null) : void 0;
        qu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], fu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Cu = [(0, au.E)()], bu = [(0, au.j)()], cu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Nu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Ou = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Yu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], hu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], (0, du.e)(uu, null, qu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Eu) => {
              uu.isEnabled = Eu
            }
          },
          metadata: Eu
        }, gu, Mu), (0, du.e)(uu, null, fu, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: uu => "linkSheenWithAlbedo" in uu,
            get: uu => uu.linkSheenWithAlbedo,
            set: (uu, Eu) => {
              uu.linkSheenWithAlbedo = Eu
            }
          },
          metadata: Eu
        }, eu, Gu), (0, du.e)(uu, null, cu, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Eu) => {
              uu.texture = Eu
            }
          },
          metadata: Eu
        }, ou, ku), (0, du.e)(uu, null, Nu, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMainTexture" in uu,
            get: uu => uu.useRoughnessFromMainTexture,
            set: (uu, Eu) => {
              uu.useRoughnessFromMainTexture = Eu
            }
          },
          metadata: Eu
        }, mu, vu), (0, du.e)(uu, null, Ou, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughness" in uu,
            get: uu => uu.roughness,
            set: (uu, Eu) => {
              uu.roughness = Eu
            }
          },
          metadata: Eu
        }, Ku, Vu), (0, du.e)(uu, null, Yu, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "textureRoughness" in uu,
            get: uu => uu.textureRoughness,
            set: (uu, Eu) => {
              uu.textureRoughness = Eu
            }
          },
          metadata: Eu
        }, ru, Qu), (0, du.e)(uu, null, hu, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: uu => "albedoScaling" in uu,
            get: uu => uu.albedoScaling,
            set: (uu, Eu) => {
              uu.albedoScaling = Eu
            }
          },
          metadata: Eu
        }, iu, Wu), (0, du.e)(null, null, Cu, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "intensity" in uu,
            get: uu => uu.intensity,
            set: (uu, Eu) => {
              uu.intensity = Eu
            }
          },
          metadata: Eu
        }, pu, wu), (0, du.e)(null, null, bu, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: uu => "color" in uu,
            get: uu => uu.color,
            set: (uu, Eu) => {
              uu.color = Eu
            }
          },
          metadata: Eu
        }, Ju, Pu), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu
    })();
    class lE extends Iu.c {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let qE = (() => {
      var uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu;
      let Du, gu, Mu, eu, Gu, pu, wu, Ju, Pu, ou, ku, mu, vu, Ku, Vu, ru, Qu, iu, Su, Iu, Bu, Lu, tu, Tu, Hu, Au, yu, Ru, uE, EE, jE = Fu.b,
        sE = [],
        UE = [],
        ZE = [],
        XE = [],
        qE = [],
        fE = [],
        CE = [],
        bE = [],
        cE = [],
        NE = [],
        OE = [],
        YE = [],
        hE = [],
        DE = [],
        gE = [],
        ME = [],
        eE = [],
        GE = [],
        pE = [],
        wE = [],
        JE = [],
        dE = [],
        aE = [],
        PE = [],
        oE = [],
        kE = [],
        mE = [],
        vE = [],
        KE = [],
        VE = [],
        rE = [],
        QE = [],
        iE = [],
        WE = [],
        SE = [],
        IE = [],
        FE = [],
        BE = [],
        LE = [],
        tE = [],
        xE = [],
        TE = [],
        HE = [],
        AE = [],
        nE = [],
        yE = [],
        zE = [],
        RE = [],
        uj = [],
        Ej = [],
        jj = [],
        sj = [],
        Uj = [],
        Zj = [],
        Xj = [],
        lj = [],
        qj = [],
        fj = [],
        Cj = [],
        bj = [];
      return uu = class extends jE {
        get isRefractionEnabled() {
          return (0, du.b)(this, Eu, "f")
        }
        set isRefractionEnabled(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        get isTranslucencyEnabled() {
          return (0, du.b)(this, ju, "f")
        }
        set isTranslucencyEnabled(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get isDispersionEnabled() {
          return (0, du.b)(this, su, "f")
        }
        set isDispersionEnabled(uu) {
          (0, du.d)(this, su, uu, "f")
        }
        get isScatteringEnabled() {
          return (0, du.b)(this, Uu, "f")
        }
        set isScatteringEnabled(uu) {
          (0, du.d)(this, Uu, uu, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(uu) {
          this._scene.enableSubSurfaceForPrePass() && uu && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(uu))
        }
        get useAlbedoToTintRefraction() {
          return (0, du.b)(this, Zu, "f")
        }
        set useAlbedoToTintRefraction(uu) {
          (0, du.d)(this, Zu, uu, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, du.b)(this, Xu, "f")
        }
        set useAlbedoToTintTranslucency(uu) {
          (0, du.d)(this, Xu, uu, "f")
        }
        get thicknessTexture() {
          return (0, du.b)(this, lu, "f")
        }
        set thicknessTexture(uu) {
          (0, du.d)(this, lu, uu, "f")
        }
        get refractionTexture() {
          return (0, du.b)(this, qu, "f")
        }
        set refractionTexture(uu) {
          (0, du.d)(this, qu, uu, "f")
        }
        get indexOfRefraction() {
          return (0, du.b)(this, fu, "f")
        }
        set indexOfRefraction(uu) {
          (0, du.d)(this, fu, uu, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(uu) {
          const Eu = uu >= 1 ? uu : -1;
          this._volumeIndexOfRefraction !== Eu && (this._volumeIndexOfRefraction = Eu, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, du.b)(this, Cu, "f")
        }
        set invertRefractionY(uu) {
          (0, du.d)(this, Cu, uu, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, du.b)(this, bu, "f")
        }
        set linkRefractionWithTransparency(uu) {
          (0, du.d)(this, bu, uu, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, du.b)(this, cu, "f")
        }
        set useMaskFromThicknessTexture(uu) {
          (0, du.d)(this, cu, uu, "f")
        }
        get refractionIntensityTexture() {
          return (0, du.b)(this, Nu, "f")
        }
        set refractionIntensityTexture(uu) {
          (0, du.d)(this, Nu, uu, "f")
        }
        get translucencyIntensityTexture() {
          return (0, du.b)(this, Ou, "f")
        }
        set translucencyIntensityTexture(uu) {
          (0, du.d)(this, Ou, uu, "f")
        }
        get translucencyColorTexture() {
          return (0, du.b)(this, Yu, "f")
        }
        set translucencyColorTexture(uu) {
          (0, du.d)(this, Yu, uu, "f")
        }
        get useGltfStyleTextures() {
          return (0, du.b)(this, hu, "f")
        }
        set useGltfStyleTextures(uu) {
          (0, du.d)(this, hu, uu, "f")
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
        constructor(Du) {
          let gu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(Du, "PBRSubSurface", 130, new lE, gu), this._isRefractionEnabled = !1, Eu.set(this, (0, du.g)(this, sE, !1)), this._isTranslucencyEnabled = ((0, du.g)(this, UE), !1), ju.set(this, (0, du.g)(this, ZE, !1)), this._isDispersionEnabled = ((0, du.g)(this, XE), !1), su.set(this, (0, du.g)(this, qE, !1)), this._isScatteringEnabled = ((0, du.g)(this, fE), !1), Uu.set(this, (0, du.g)(this, CE, !1)), this._scatteringDiffusionProfileIndex = ((0, du.g)(this, bE), (0, du.g)(this, cE, 0)), this.refractionIntensity = ((0, du.g)(this, NE), (0, du.g)(this, OE, 1)), this.translucencyIntensity = ((0, du.g)(this, YE), (0, du.g)(this, hE, 1)), this._useAlbedoToTintRefraction = ((0, du.g)(this, DE), !1), Zu.set(this, (0, du.g)(this, gE, !1)), this._useAlbedoToTintTranslucency = ((0, du.g)(this, ME), !1), Xu.set(this, (0, du.g)(this, eE, !1)), this._thicknessTexture = ((0, du.g)(this, GE), null), lu.set(this, (0, du.g)(this, pE, null)), this._refractionTexture = ((0, du.g)(this, wE), null), qu.set(this, (0, du.g)(this, JE, null)), this._indexOfRefraction = ((0, du.g)(this, dE), 1.5), fu.set(this, (0, du.g)(this, aE, 1.5)), this._volumeIndexOfRefraction = ((0, du.g)(this, PE), (0, du.g)(this, oE, -1)), this._invertRefractionY = ((0, du.g)(this, kE), !1), Cu.set(this, (0, du.g)(this, mE, !1)), this._linkRefractionWithTransparency = ((0, du.g)(this, vE), !1), bu.set(this, (0, du.g)(this, KE, !1)), this.minimumThickness = ((0, du.g)(this, VE), (0, du.g)(this, rE, 0)), this.maximumThickness = ((0, du.g)(this, QE), (0, du.g)(this, iE, 1)), this.useThicknessAsDepth = ((0, du.g)(this, WE), (0, du.g)(this, SE, !1)), this.tintColor = ((0, du.g)(this, IE), (0, du.g)(this, FE, xu.c.White())), this.tintColorAtDistance = ((0, du.g)(this, BE), (0, du.g)(this, LE, 1)), this.dispersion = ((0, du.g)(this, tE), (0, du.g)(this, xE, 0)), this.diffusionDistance = ((0, du.g)(this, TE), (0, du.g)(this, HE, xu.c.White())), this._useMaskFromThicknessTexture = ((0, du.g)(this, AE), !1), cu.set(this, (0, du.g)(this, nE, !1)), this._refractionIntensityTexture = ((0, du.g)(this, yE), null), Nu.set(this, (0, du.g)(this, zE, null)), this._translucencyIntensityTexture = ((0, du.g)(this, RE), null), Ou.set(this, (0, du.g)(this, uj, null)), this.translucencyColor = ((0, du.g)(this, Ej), (0, du.g)(this, jj, null)), this._translucencyColorTexture = ((0, du.g)(this, sj), null), Yu.set(this, (0, du.g)(this, Uj, null)), this._useGltfStyleTextures = ((0, du.g)(this, Zj), !0), hu.set(this, (0, du.g)(this, Xj, !0)), this.applyAlbedoAfterSubSurface = ((0, du.g)(this, lj), (0, du.g)(this, qj, uu.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, du.g)(this, fj), (0, du.g)(this, Cj, uu.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, du.g)(this, bj), this._scene = Du.hV(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = Du._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = Du._dirtyCallbacks[32]
        }
        isReadyForSubMesh(uu, Eu) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (uu._areTexturesDirty && Eu.texturesEnabled) {
            if (this._thicknessTexture && nu.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && nu.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && nu.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && nu.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const uu = this._getRefractionTexture(Eu);
            if (uu && nu.d.RefractionTextureEnabled && !uu.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(uu, Eu) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return uu.SUBSURFACE = !1, uu.SS_DISPERSION = !1, uu.SS_TRANSLUCENCY = !1, uu.SS_SCATTERING = !1, uu.SS_REFRACTION = !1, uu.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_THICKNESSANDMASK_TEXTURE = !1, uu.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, uu.SS_HAS_THICKNESS = !1, uu.SS_REFRACTIONINTENSITY_TEXTURE = !1, uu.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, uu.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, uu.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, uu.SS_REFRACTIONMAP_3D = !1, uu.SS_REFRACTIONMAP_OPPOSITEZ = !1, uu.SS_LODINREFRACTIONALPHA = !1, uu.SS_GAMMAREFRACTION = !1, uu.SS_RGBDREFRACTION = !1, uu.SS_LINEARSPECULARREFRACTION = !1, uu.SS_LINKREFRACTIONTOTRANSPARENCY = !1, uu.SS_ALBEDOFORREFRACTIONTINT = !1, uu.SS_ALBEDOFORTRANSLUCENCYTINT = !1, uu.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, uu.SS_USE_THICKNESS_AS_DEPTH = !1, uu.SS_USE_GLTF_TEXTURES = !1, uu.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, uu.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, uu.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(uu.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (uu._areTexturesDirty) {
            if (uu.SUBSURFACE = !0, uu.SS_DISPERSION = this._isDispersionEnabled, uu.SS_TRANSLUCENCY = this._isTranslucencyEnabled, uu.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, uu.SS_SCATTERING = this._isScatteringEnabled, uu.SS_THICKNESSANDMASK_TEXTURE = !1, uu.SS_REFRACTIONINTENSITY_TEXTURE = !1, uu.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, uu.SS_HAS_THICKNESS = !1, uu.SS_USE_GLTF_TEXTURES = !1, uu.SS_REFRACTION = !1, uu.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, uu.SS_REFRACTIONMAP_3D = !1, uu.SS_GAMMAREFRACTION = !1, uu.SS_RGBDREFRACTION = !1, uu.SS_LINEARSPECULARREFRACTION = !1, uu.SS_REFRACTIONMAP_OPPOSITEZ = !1, uu.SS_LODINREFRACTIONALPHA = !1, uu.SS_LINKREFRACTIONTOTRANSPARENCY = !1, uu.SS_ALBEDOFORREFRACTIONTINT = !1, uu.SS_ALBEDOFORTRANSLUCENCYTINT = !1, uu.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, uu.SS_USE_THICKNESS_AS_DEPTH = !1, uu.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, uu.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, uu._areTexturesDirty && Eu.texturesEnabled && (this._thicknessTexture && nu.d.ThicknessTextureEnabled && (0, zu.jb)(this._thicknessTexture, uu, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && nu.d.RefractionIntensityTextureEnabled && (0, zu.jb)(this._refractionIntensityTexture, uu, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && nu.d.TranslucencyIntensityTextureEnabled && (0, zu.jb)(this._translucencyIntensityTexture, uu, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && nu.d.TranslucencyColorTextureEnabled && ((0, zu.jb)(this._translucencyColorTexture, uu, "SS_TRANSLUCENCYCOLOR_TEXTURE"), uu.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), uu.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, uu.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, uu.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, uu.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && Eu.texturesEnabled) {
              const ju = this._getRefractionTexture(Eu);
              ju && nu.d.RefractionTextureEnabled && (uu.SS_REFRACTION = !0, uu.SS_REFRACTIONMAP_3D = ju.isCube, uu.SS_GAMMAREFRACTION = ju.gammaSpace, uu.SS_RGBDREFRACTION = ju.isRGBD, uu.SS_LINEARSPECULARREFRACTION = ju.linearSpecularLOD, uu.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && ju.isCube ? !ju.invertZ : ju.invertZ, uu.SS_LODINREFRACTIONALPHA = ju.lodLevelInAlpha, uu.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, uu.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, uu.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = ju.isCube && ju.boundingBoxSize, uu.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (uu.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(uu, Eu, ju, su) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) uu.updateFloat2("vThicknessParam", 0, 0);
            else {
              su.getRenderingMesh().getWorldMatrix().decompose(Wu.m.dO[0]);
              const Eu = Math.max(Math.abs(Wu.m.dO[0].x), Math.abs(Wu.m.dO[0].y), Math.abs(Wu.m.dO[0].z));
              uu.updateFloat2("vThicknessParam", this.minimumThickness * Eu, (this.maximumThickness - this.minimumThickness) * Eu)
            }
        }
        bindForSubMesh(uu, Eu, ju, su) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const Uu = su.materialDefines,
            Zu = this._material.isFrozen,
            Xu = this._material.realTimeFiltering,
            lu = Uu.LODBASEDMICROSFURACE,
            qu = this._getRefractionTexture(Eu);
          if (!uu.useUbo || !Zu || !uu.isSync) {
            if (this._thicknessTexture && nu.d.ThicknessTextureEnabled && (uu.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, zu.E)(this._thicknessTexture, uu, "thickness")), this._refractionIntensityTexture && nu.d.RefractionIntensityTextureEnabled && Uu.SS_REFRACTIONINTENSITY_TEXTURE && (uu.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, zu.E)(this._refractionIntensityTexture, uu, "refractionIntensity")), this._translucencyColorTexture && nu.d.TranslucencyColorTextureEnabled && Uu.SS_TRANSLUCENCYCOLOR_TEXTURE && (uu.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, zu.E)(this._translucencyColorTexture, uu, "translucencyColor")), this._translucencyIntensityTexture && nu.d.TranslucencyIntensityTextureEnabled && Uu.SS_TRANSLUCENCYINTENSITY_TEXTURE && (uu.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, zu.E)(this._translucencyIntensityTexture, uu, "translucencyIntensity")), qu && nu.d.RefractionTextureEnabled) {
              uu.y_("refractionMatrix", qu.getRefractionTextureMatrix());
              let Eu = 1;
              qu.isCube || qu.depth && (Eu = qu.depth);
              const ju = qu.getSize().width,
                su = this.volumeIndexOfRefraction;
              if (uu.updateFloat4("vRefractionInfos", qu.level, 1 / su, Eu, this._invertRefractionY ? -1 : 1), uu.updateFloat4("vRefractionMicrosurfaceInfos", ju, qu.lodGenerationScale, qu.lodGenerationOffset, 1 / this.indexOfRefraction), Xu && uu.updateFloat2("vRefractionFilteringInfo", ju, Math.log2(ju)), qu.boundingBoxSize) {
                const Eu = qu;
                uu.updateVector3("vRefractionPosition", Eu.boundingBoxPosition), uu.updateVector3("vRefractionSize", Eu.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && uu.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), uu.updateColor3("vDiffusionDistance", this.diffusionDistance), uu.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), uu.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), uu.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), uu.updateFloat("dispersion", this.dispersion)
          }
          Eu.texturesEnabled && (this._thicknessTexture && nu.d.ThicknessTextureEnabled && uu.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && nu.d.RefractionIntensityTextureEnabled && Uu.SS_REFRACTIONINTENSITY_TEXTURE && uu.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && nu.d.TranslucencyIntensityTextureEnabled && Uu.SS_TRANSLUCENCYINTENSITY_TEXTURE && uu.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && nu.d.TranslucencyColorTextureEnabled && Uu.SS_TRANSLUCENCYCOLOR_TEXTURE && uu.setTexture("translucencyColorSampler", this._translucencyColorTexture), qu && nu.d.RefractionTextureEnabled && (lu ? uu.setTexture("refractionSampler", qu) : (uu.setTexture("refractionSampler", qu._lodTextureMid || qu), uu.setTexture("refractionSamplerLow", qu._lodTextureLow || qu), uu.setTexture("refractionSamplerHigh", qu._lodTextureHigh || qu))))
        }
        _getRefractionTexture(uu) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? uu.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(uu) {
          nu.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && uu.push(this._refractionTexture)
        }
        hasTexture(uu) {
          return this._thicknessTexture === uu || (this._refractionTexture === uu || (this._refractionIntensityTexture === uu || (this._translucencyIntensityTexture === uu || this._translucencyColorTexture === uu)))
        }
        hasRenderTargetTextures() {
          return !!(nu.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(uu, Eu, ju) {
          return uu.SS_SCATTERING && Eu.addFallback(ju++, "SS_SCATTERING"), uu.SS_TRANSLUCENCY && Eu.addFallback(ju++, "SS_TRANSLUCENCY"), ju
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
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, Uu = new WeakMap, Zu = new WeakMap, Xu = new WeakMap, lu = new WeakMap, qu = new WeakMap, fu = new WeakMap, Cu = new WeakMap, bu = new WeakMap, cu = new WeakMap, Nu = new WeakMap, Ou = new WeakMap, Yu = new WeakMap, hu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(jE[Symbol.metadata] ?? null) : void 0;
        Du = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], gu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Mu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], eu = [(0, au.E)(), (0, au.e)("_markScenePrePassDirty")], Gu = [(0, au.E)()], pu = [(0, au.E)()], wu = [(0, au.E)()], Ju = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Pu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], ou = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], ku = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], mu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], vu = [(0, au.E)()], Ku = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], ru = [(0, au.E)()], Qu = [(0, au.E)()], iu = [(0, au.E)()], Su = [(0, au.j)()], Iu = [(0, au.E)()], Bu = [(0, au.E)()], Lu = [(0, au.j)()], tu = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Tu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Hu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Au = [(0, au.j)()], yu = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Ru = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], uE = [(0, au.E)()], EE = [(0, au.E)()], (0, du.e)(uu, null, Du, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isRefractionEnabled" in uu,
            get: uu => uu.isRefractionEnabled,
            set: (uu, Eu) => {
              uu.isRefractionEnabled = Eu
            }
          },
          metadata: Eu
        }, sE, UE), (0, du.e)(uu, null, gu, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isTranslucencyEnabled" in uu,
            get: uu => uu.isTranslucencyEnabled,
            set: (uu, Eu) => {
              uu.isTranslucencyEnabled = Eu
            }
          },
          metadata: Eu
        }, ZE, XE), (0, du.e)(uu, null, Mu, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isDispersionEnabled" in uu,
            get: uu => uu.isDispersionEnabled,
            set: (uu, Eu) => {
              uu.isDispersionEnabled = Eu
            }
          },
          metadata: Eu
        }, qE, fE), (0, du.e)(uu, null, eu, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isScatteringEnabled" in uu,
            get: uu => uu.isScatteringEnabled,
            set: (uu, Eu) => {
              uu.isScatteringEnabled = Eu
            }
          },
          metadata: Eu
        }, CE, bE), (0, du.e)(uu, null, Ju, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlbedoToTintRefraction" in uu,
            get: uu => uu.useAlbedoToTintRefraction,
            set: (uu, Eu) => {
              uu.useAlbedoToTintRefraction = Eu
            }
          },
          metadata: Eu
        }, gE, ME), (0, du.e)(uu, null, Pu, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlbedoToTintTranslucency" in uu,
            get: uu => uu.useAlbedoToTintTranslucency,
            set: (uu, Eu) => {
              uu.useAlbedoToTintTranslucency = Eu
            }
          },
          metadata: Eu
        }, eE, GE), (0, du.e)(uu, null, ou, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "thicknessTexture" in uu,
            get: uu => uu.thicknessTexture,
            set: (uu, Eu) => {
              uu.thicknessTexture = Eu
            }
          },
          metadata: Eu
        }, pE, wE), (0, du.e)(uu, null, ku, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "refractionTexture" in uu,
            get: uu => uu.refractionTexture,
            set: (uu, Eu) => {
              uu.refractionTexture = Eu
            }
          },
          metadata: Eu
        }, JE, dE), (0, du.e)(uu, null, mu, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "indexOfRefraction" in uu,
            get: uu => uu.indexOfRefraction,
            set: (uu, Eu) => {
              uu.indexOfRefraction = Eu
            }
          },
          metadata: Eu
        }, aE, PE), (0, du.e)(uu, null, Ku, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertRefractionY" in uu,
            get: uu => uu.invertRefractionY,
            set: (uu, Eu) => {
              uu.invertRefractionY = Eu
            }
          },
          metadata: Eu
        }, mE, vE), (0, du.e)(uu, null, Vu, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: uu => "linkRefractionWithTransparency" in uu,
            get: uu => uu.linkRefractionWithTransparency,
            set: (uu, Eu) => {
              uu.linkRefractionWithTransparency = Eu
            }
          },
          metadata: Eu
        }, KE, VE), (0, du.e)(uu, null, tu, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useMaskFromThicknessTexture" in uu,
            get: uu => uu.useMaskFromThicknessTexture,
            set: (uu, Eu) => {
              uu.useMaskFromThicknessTexture = Eu
            }
          },
          metadata: Eu
        }, nE, yE), (0, du.e)(uu, null, Tu, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "refractionIntensityTexture" in uu,
            get: uu => uu.refractionIntensityTexture,
            set: (uu, Eu) => {
              uu.refractionIntensityTexture = Eu
            }
          },
          metadata: Eu
        }, zE, RE), (0, du.e)(uu, null, Hu, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyIntensityTexture" in uu,
            get: uu => uu.translucencyIntensityTexture,
            set: (uu, Eu) => {
              uu.translucencyIntensityTexture = Eu
            }
          },
          metadata: Eu
        }, uj, Ej), (0, du.e)(uu, null, yu, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyColorTexture" in uu,
            get: uu => uu.translucencyColorTexture,
            set: (uu, Eu) => {
              uu.translucencyColorTexture = Eu
            }
          },
          metadata: Eu
        }, Uj, Zj), (0, du.e)(uu, null, Ru, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: uu => "useGltfStyleTextures" in uu,
            get: uu => uu.useGltfStyleTextures,
            set: (uu, Eu) => {
              uu.useGltfStyleTextures = Eu
            }
          },
          metadata: Eu
        }, Xj, lj), (0, du.e)(null, null, Gu, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: uu => "_scatteringDiffusionProfileIndex" in uu,
            get: uu => uu._scatteringDiffusionProfileIndex,
            set: (uu, Eu) => {
              uu._scatteringDiffusionProfileIndex = Eu
            }
          },
          metadata: Eu
        }, cE, NE), (0, du.e)(null, null, pu, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "refractionIntensity" in uu,
            get: uu => uu.refractionIntensity,
            set: (uu, Eu) => {
              uu.refractionIntensity = Eu
            }
          },
          metadata: Eu
        }, OE, YE), (0, du.e)(null, null, wu, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyIntensity" in uu,
            get: uu => uu.translucencyIntensity,
            set: (uu, Eu) => {
              uu.translucencyIntensity = Eu
            }
          },
          metadata: Eu
        }, hE, DE), (0, du.e)(null, null, vu, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: uu => "_volumeIndexOfRefraction" in uu,
            get: uu => uu._volumeIndexOfRefraction,
            set: (uu, Eu) => {
              uu._volumeIndexOfRefraction = Eu
            }
          },
          metadata: Eu
        }, oE, kE), (0, du.e)(null, null, ru, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "minimumThickness" in uu,
            get: uu => uu.minimumThickness,
            set: (uu, Eu) => {
              uu.minimumThickness = Eu
            }
          },
          metadata: Eu
        }, rE, QE), (0, du.e)(null, null, Qu, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: uu => "maximumThickness" in uu,
            get: uu => uu.maximumThickness,
            set: (uu, Eu) => {
              uu.maximumThickness = Eu
            }
          },
          metadata: Eu
        }, iE, WE), (0, du.e)(null, null, iu, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: uu => "useThicknessAsDepth" in uu,
            get: uu => uu.useThicknessAsDepth,
            set: (uu, Eu) => {
              uu.useThicknessAsDepth = Eu
            }
          },
          metadata: Eu
        }, SE, IE), (0, du.e)(null, null, Su, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColor" in uu,
            get: uu => uu.tintColor,
            set: (uu, Eu) => {
              uu.tintColor = Eu
            }
          },
          metadata: Eu
        }, FE, BE), (0, du.e)(null, null, Iu, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "tintColorAtDistance" in uu,
            get: uu => uu.tintColorAtDistance,
            set: (uu, Eu) => {
              uu.tintColorAtDistance = Eu
            }
          },
          metadata: Eu
        }, LE, tE), (0, du.e)(null, null, Bu, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: uu => "dispersion" in uu,
            get: uu => uu.dispersion,
            set: (uu, Eu) => {
              uu.dispersion = Eu
            }
          },
          metadata: Eu
        }, xE, TE), (0, du.e)(null, null, Lu, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: uu => "diffusionDistance" in uu,
            get: uu => uu.diffusionDistance,
            set: (uu, Eu) => {
              uu.diffusionDistance = Eu
            }
          },
          metadata: Eu
        }, HE, AE), (0, du.e)(null, null, Au, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "translucencyColor" in uu,
            get: uu => uu.translucencyColor,
            set: (uu, Eu) => {
              uu.translucencyColor = Eu
            }
          },
          metadata: Eu
        }, jj, sj), (0, du.e)(null, null, uE, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: uu => "applyAlbedoAfterSubSurface" in uu,
            get: uu => uu.applyAlbedoAfterSubSurface,
            set: (uu, Eu) => {
              uu.applyAlbedoAfterSubSurface = Eu
            }
          },
          metadata: Eu
        }, qj, fj), (0, du.e)(null, null, EE, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: uu => "legacyTranslucency" in uu,
            get: uu => uu.legacyTranslucency,
            set: (uu, Eu) => {
              uu.legacyTranslucency = Eu
            }
          },
          metadata: Eu
        }, Cj, bj), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, uu.DEFAULT_LEGACY_TRANSLUCENCY = !1, uu
    })();
    var fE = ju(40614),
      CE = ju(40596),
      bE = ju(40624),
      cE = ju(40628),
      NE = ju(40634),
      OE = ju(40640),
      YE = ju(40648),
      hE = ju(40650),
      DE = ju(40153);
    const gE = {
      effect: null,
      subMesh: null
    };
    class ME extends((0, YE.b)((0, OE.c)(Iu.c))) {}
    class eE extends((0, Tu.f)(ME)) {
      constructor(uu) {
        super(uu), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class GE extends((0, hE.e)(Au.c)) {}
    let pE = (() => {
      var uu, Eu;
      let su, Uu = GE,
        Xu = [],
        lu = [];
      return uu = class extends Uu {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(uu) {
          this._realTimeFiltering = uu, this.tEu(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(uu) {
          this._realTimeFilteringQuality = uu, this.tEu(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, du.b)(this, Eu, "f")
        }
        set debugMode(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        constructor(ju, su) {
          super(ju, su, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new Wu.u(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = xu.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new xu.c(0, 0, 0), this._albedoColor = new xu.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new xu.c(1, 1, 1), this._reflectionColor = new xu.c(1, 1, 1), this._emissiveColor = new xu.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = uu.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ou.f(16), this._globalAmbientColor = new xu.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Eu.set(this, (0, du.g)(this, Xu, 0)), this.debugLimit = ((0, du.g)(this, lu), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new Lu(this), this.clearCoat = new uE(this), this.iridescence = new jE(this), this.anisotropy = new UE(this), this.sheen = new XE(this), this.subSurface = new qE(this), this.detailMap = new fE.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), nu.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Vu(this.hV()), this.prePassConfiguration = new tu.e
        }
        get hasRenderTargetTextures() {
          return !!(nu.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(uu, Eu, ju) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const su = Eu._drawWrapper;
          if (su.effect && this.isFrozen && su._wasPreviouslyReady && su._wasPreviouslyUsingInstances === ju) return !0;
          Eu.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Eu.materialDefines = new eE(this._eventInfo.defineNames));
          const Uu = Eu.materialDefines;
          if (this._isReadyForSubMesh(Eu)) return !0;
          const Zu = this.hV(),
            Xu = Zu.wO();
          if (Uu._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Zu.texturesEnabled)) {
            if (this._albedoTexture && nu.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && nu.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && nu.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && nu.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && nu.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const uu = this._getReflectionTexture();
            if (uu && nu.d.ReflectionTextureEnabled) {
              if (!uu.isReadyOrNotBlocking()) return !1;
              if (uu.irradianceTexture) {
                if (!uu.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!uu.sphericalPolynomial && uu.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && nu.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && nu.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (nu.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (Xu.getCaps().standardDerivatives && this._bumpTexture && nu.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && nu.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Uu, this._eventInfo.subMesh = Eu, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (Uu._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (Uu.AREALIGHTUSED || Uu.CLUSTLIGHT_BATCH)
            for (let bu = 0; bu < uu.lightSources.length; bu++)
              if (!uu.lightSources[bu]._isReady()) return !1;
          if (Xu.getCaps().standardDerivatives || uu.isVerticesDataPresent(Su.j.NormalKind) || (uu.createNormals(!0), Pu.b.Warn("PBRMaterial: Normals have been created for the mesh: " + uu.name)), !(0, zu.d)(Zu, uu, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const lu = Eu.effect,
            qu = Uu._areLightsDisposed,
            fu = this._prepareEffect(uu, Eu.getRenderingMesh(), Uu, this.onCompiled, this.onError, ju, null);
          let Cu = !1;
          if (fu)
            if (this._onEffectCreatedObservable && (gE.effect = fu, gE.subMesh = Eu, this._onEffectCreatedObservable.notifyObservers(gE)), this.allowShaderHotSwapping && lu && !fu.isReady()) {
              if (Uu.markAsUnprocessed(), Cu = this.isFrozen, qu) return Uu._areLightsDisposed = !0, !1
            } else Zu.resetCachedMaterial(), Eu.setEffect(fu, Uu, this._materialContext);
          return !(!Eu.effect || !Eu.effect.isReady()) && (Uu._renderId = Zu.getRenderId(), su._wasPreviouslyReady = !Cu, su._wasPreviouslyUsingInstances = !!ju, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(Eu, ju, su) {
          let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(Eu, ju, su, Xu, lu), !su.isDirty) return null;
          su.markAsProcessed();
          const qu = this.hV().wO(),
            fu = new yu.e;
          let Cu = 0;
          su.USESPHERICALINVERTEX && fu.addFallback(Cu++, "USESPHERICALINVERTEX"), su.FOG && fu.addFallback(Cu, "FOG"), su.SPECULARAA && fu.addFallback(Cu, "SPECULARAA"), su.POINTSIZE && fu.addFallback(Cu, "POINTSIZE"), su.LOGARITHMICDEPTH && fu.addFallback(Cu, "LOGARITHMICDEPTH"), su.PARALLAX && fu.addFallback(Cu, "PARALLAX"), su.PARALLAX_RHS && fu.addFallback(Cu, "PARALLAX_RHS"), su.PARALLAXOCCLUSION && fu.addFallback(Cu++, "PARALLAXOCCLUSION"), su.ENVIRONMENTBRDF && fu.addFallback(Cu++, "ENVIRONMENTBRDF"), su.TANGENT && fu.addFallback(Cu++, "TANGENT"), su.BUMP && fu.addFallback(Cu++, "BUMP"), Cu = (0, zu.I)(su, fu, this._maxSimultaneousLights, Cu), su.SPECULARTERM && fu.addFallback(Cu++, "SPECULARTERM"), su.USESPHERICALFROMREFLECTIONMAP && fu.addFallback(Cu++, "USESPHERICALFROMREFLECTIONMAP"), su.USEIRRADIANCEMAP && fu.addFallback(Cu++, "USEIRRADIANCEMAP"), su.LIGHTMAP && fu.addFallback(Cu++, "LIGHTMAP"), su.NORMAL && fu.addFallback(Cu++, "NORMAL"), su.AMBIENT && fu.addFallback(Cu++, "AMBIENT"), su.EMISSIVE && fu.addFallback(Cu++, "EMISSIVE"), su.VERTEXCOLOR && fu.addFallback(Cu++, "VERTEXCOLOR"), su.MORPHTARGETS && fu.addFallback(Cu++, "MORPHTARGETS"), su.MULTIVIEW && fu.addFallback(0, "MULTIVIEW");
          const bu = [Su.j.PositionKind];
          su.NORMAL && bu.push(Su.j.NormalKind), su.TANGENT && bu.push(Su.j.TangentKind);
          for (let uu = 1; uu <= 6; ++uu) su["UV" + uu] && bu.push(`uv${1===uu?"":uu}`);
          su.VERTEXCOLOR && bu.push(Su.j.ColorKind), (0, zu.P)(bu, Eu, su, fu), (0, zu.S)(bu, su), (0, zu.U)(bu, Eu, su), (0, zu.L)(bu, Eu, su);
          let cu = "pbr";
          const Nu = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            Ou = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, zu.ub)(Nu, Ou, !0);
          const Yu = ["Material", "Scene", "Mesh"],
            hu = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: su.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = fu, this._eventInfo.fallbackRank = Cu, this._eventInfo.defines = su, this._eventInfo.uniforms = Nu, this._eventInfo.attributes = bu, this._eventInfo.samplers = Ou, this._eventInfo.uniformBuffersNames = Yu, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Eu, this._eventInfo.indexParameters = hu, this._callbackPluginEventGeneric(128, this._eventInfo), NE.c.AddUniformsAndSamplers(Nu, Ou), tu.e.AddUniforms(Nu), tu.e.AddSamplers(Ou), (0, CE.e)(Nu), this._useVertexPulling) {
            const uu = ju?.geometry;
            uu && (this._vertexPullingMetadata = (0, bE.f)(uu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Eu) => {
              Nu.push(`vp_${Eu}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          Hu.d && (Hu.d.PrepareUniforms(Nu, su), Hu.d.PrepareSamplers(Ou, su)), (0, zu.vb)({
            uniformsNames: Nu,
            uniformBuffersNames: Yu,
            samplers: Ou,
            defines: su,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const Du = {};
          this.customShaderNameResolve && (cu = this.customShaderNameResolve(cu, Nu, Yu, Ou, su, bu, Du));
          const gu = su.toString(),
            Mu = qu.createEffect(cu, {
              attributes: bu,
              uniformsNames: Nu,
              uniformBuffersNames: Yu,
              samplers: Ou,
              defines: gu,
              fallbacks: fu,
              onCompiled: Uu,
              onError: Zu,
              indexParameters: hu,
              processFinalCode: Du.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: su.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, qu);
          return this._eventInfo.customCode = void 0, Mu
        }
        _prepareDefines(Eu, ju, su) {
          let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const Xu = ju.hasThinInstances,
            lu = this.hV(),
            qu = lu.wO();
          (0, zu.fb)(lu, Eu, su, !0, this._maxSimultaneousLights, this._disableLighting), su._needNormals = !0, (0, zu.lb)(lu, su);
          const fu = this.needAlphaBlendingForMesh(Eu) && this.hV().useOrderIndependentTransparency;
          if ((0, zu.qb)(lu, su, this.canRenderToMRT && !fu), (0, zu.mb)(lu, su, fu), NE.c.PrepareDefines(qu.currentRenderPassId, Eu, su), su.METALLICWORKFLOW = this.isMetallicWorkflow(), su._areTexturesDirty) {
            su._needUVs = !1;
            for (let uu = 1; uu <= 6; ++uu) su["MAINUV" + uu] = !1;
            if (lu.texturesEnabled) {
              su.ALBEDODIRECTUV = 0, su.BASE_WEIGHTDIRECTUV = 0, su.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, su.AMBIENTDIRECTUV = 0, su.OPACITYDIRECTUV = 0, su.EMISSIVEDIRECTUV = 0, su.REFLECTIVITYDIRECTUV = 0, su.MICROSURFACEMAPDIRECTUV = 0, su.METALLIC_REFLECTANCEDIRECTUV = 0, su.REFLECTANCEDIRECTUV = 0, su.BUMPDIRECTUV = 0, su.LIGHTMAPDIRECTUV = 0, qu.getCaps().textureLOD && (su.LODBASEDMICROSFURACE = !0), this._albedoTexture && nu.d.DiffuseTextureEnabled ? ((0, zu.jb)(this._albedoTexture, su, "ALBEDO"), su.GAMMAALBEDO = this._albedoTexture.gammaSpace) : su.ALBEDO = !1, this._baseWeightTexture && nu.d.BaseWeightTextureEnabled ? (0, zu.jb)(this._baseWeightTexture, su, "BASE_WEIGHT") : su.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && nu.d.BaseDiffuseRoughnessTextureEnabled ? (0, zu.jb)(this._baseDiffuseRoughnessTexture, su, "BASE_DIFFUSE_ROUGHNESS") : su.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && nu.d.AmbientTextureEnabled ? ((0, zu.jb)(this._ambientTexture, su, "AMBIENT"), su.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : su.AMBIENT = !1, this._opacityTexture && nu.d.OpacityTextureEnabled ? ((0, zu.jb)(this._opacityTexture, su, "OPACITY"), su.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : su.OPACITY = !1;
              const uu = this._getReflectionTexture(),
                Eu = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || qu.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, zu.eb)(lu, uu, su, this.realTimeFiltering, this.realTimeFilteringQuality, !Eu), this._lightmapTexture && nu.d.LightmapTextureEnabled ? ((0, zu.jb)(this._lightmapTexture, su, "LIGHTMAP"), su.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, su.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, su.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : su.LIGHTMAP = !1, this._emissiveTexture && nu.d.EmissiveTextureEnabled ? ((0, zu.jb)(this._emissiveTexture, su, "EMISSIVE"), su.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : su.EMISSIVE = !1, nu.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, zu.jb)(this._metallicTexture, su, "REFLECTIVITY"), su.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, su.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, su.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, su.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, su.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, zu.jb)(this._reflectivityTexture, su, "REFLECTIVITY"), su.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, su.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, su.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : su.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (su.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, zu.jb)(this._metallicReflectanceTexture, su, "METALLIC_REFLECTANCE"), su.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : su.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, zu.jb)(this._reflectanceTexture, su, "REFLECTANCE"), su.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : su.REFLECTANCE = !1) : (su.METALLIC_REFLECTANCE = !1, su.REFLECTANCE = !1), this._microSurfaceTexture ? (0, zu.jb)(this._microSurfaceTexture, su, "MICROSURFACEMAP") : su.MICROSURFACEMAP = !1) : (su.REFLECTIVITY = !1, su.MICROSURFACEMAP = !1), qu.getCaps().standardDerivatives && this._bumpTexture && nu.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, zu.jb)(this._bumpTexture, su, "BUMP"), this._useParallax && this._albedoTexture && nu.d.DiffuseTextureEnabled ? (su.PARALLAX = !0, su.PARALLAX_RHS = lu.useRightHandedSystem, su.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : su.PARALLAX = !1, su.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (su.BUMP = !1, su.PARALLAX = !1, su.PARALLAX_RHS = !1, su.PARALLAXOCCLUSION = !1, su.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && nu.d.ReflectionTextureEnabled ? (su.ENVIRONMENTBRDF = !0, su.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (su.ENVIRONMENTBRDF = !1, su.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? su.ALPHAFROMALBEDO = !0 : su.ALPHAFROMALBEDO = !1
            }
            su.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === uu.LIGHTFALLOFF_STANDARD ? (su.USEPHYSICALLIGHTFALLOFF = !1, su.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === uu.LIGHTFALLOFF_GLTF ? (su.USEPHYSICALLIGHTFALLOFF = !1, su.USEGLTFLIGHTFALLOFF = !0) : (su.USEPHYSICALLIGHTFALLOFF = !0, su.USEGLTFLIGHTFALLOFF = !1), su.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? su.TWOSIDEDLIGHTING = !0 : su.TWOSIDEDLIGHTING = !1, su.MIRRORED = !!lu._mirroredCameraPosition, su.SPECULARAA = qu.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(su._areTexturesDirty || su._areMiscDirty) && (su.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, su.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, su.ALPHABLEND = this.needAlphaBlendingForMesh(Eu), su.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, su.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), su._areTexturesDirty && (su.TEXTURE_REPETITION_MODE = qu.version > 1 || qu.isWebGPU ? this.textureRepetitionMode : 0), su._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(su), su.FORCENORMALFORWARD = this._forceNormalForward, su.RADIANCEOCCLUSION = this._useRadianceOcclusion, su.HORIZONOCCLUSION = this._useHorizonOcclusion, su._areMiscDirty && ((0, zu.kb)(Eu, lu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eu), su, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ju, this._isVertexOutputInvariant), su.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Eu.isVerticesDataPresent(Su.j.NormalKind), su.DEBUGMODE = this._debugMode), (0, zu.ab)(lu, qu, this, su, !!Uu, Zu, Xu), this._eventInfo.defines = su, this._eventInfo.mesh = Eu, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, zu.Z)(Eu, su, !0, !0, !0, this._transparencyMode !== uu.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(uu, Eu, ju) {
          const su = {
            clipPlane: !1,
            useInstances: !1,
            ...ju
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const ju = new eE(this._eventInfo.defineNames),
              Uu = this._prepareEffect(uu, uu, ju, void 0, void 0, su.useInstances, su.clipPlane);
            this._onEffectCreatedObservable && (gE.effect = Uu, gE.subMesh = null, this._onEffectCreatedObservable.notifyObservers(gE)), Uu.isReady() ? Eu && Eu(this) : Uu.onCompileObservable.add((() => {
              Eu && Eu(this)
            }))
          })()
        }
        buildUniformLayout() {
          const uu = this._uniformBuffer;
          uu.addUniform("vAlbedoInfos", 2), uu.addUniform("vBaseWeightInfos", 2), uu.addUniform("vBaseDiffuseRoughnessInfos", 2), uu.addUniform("vAmbientInfos", 4), uu.addUniform("vOpacityInfos", 2), uu.addUniform("vEmissiveInfos", 2), uu.addUniform("vLightmapInfos", 2), uu.addUniform("vReflectivityInfos", 3), uu.addUniform("vMicroSurfaceSamplerInfos", 2), uu.addUniform("vBumpInfos", 3), uu.addUniform("albedoMatrix", 16), uu.addUniform("baseWeightMatrix", 16), uu.addUniform("baseDiffuseRoughnessMatrix", 16), uu.addUniform("ambientMatrix", 16), uu.addUniform("opacityMatrix", 16), uu.addUniform("emissiveMatrix", 16), uu.addUniform("lightmapMatrix", 16), uu.addUniform("reflectivityMatrix", 16), uu.addUniform("microSurfaceSamplerMatrix", 16), uu.addUniform("bumpMatrix", 16), uu.addUniform("vTangentSpaceParams", 2), uu.addUniform("vAlbedoColor", 4), uu.addUniform("baseWeight", 1), uu.addUniform("baseDiffuseRoughness", 1), uu.addUniform("vLightingIntensity", 4), uu.addUniform("pointSize", 1), uu.addUniform("vReflectivityColor", 4), uu.addUniform("vEmissiveColor", 3), uu.addUniform("vAmbientColor", 3), uu.addUniform("vDebugMode", 2), uu.addUniform("vMetallicReflectanceFactors", 4), uu.addUniform("vMetallicReflectanceInfos", 2), uu.addUniform("metallicReflectanceMatrix", 16), uu.addUniform("vReflectanceInfos", 2), uu.addUniform("reflectanceMatrix", 16), uu.addUniform("cameraInfo", 4), uu.addUniform("vTextureRepetitionHexTilingParams", 4), (0, zu.rb)(uu, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(uu, Eu, ju) {
          const su = this.hV(),
            Uu = ju.materialDefines;
          if (!Uu) return;
          const Zu = ju.effect;
          if (!Zu) return;
          this._activeEffect = Zu, Eu.getMeshUniformBuffer().bindToEffect(Zu, "Mesh"), Eu.transferToEffect(uu);
          const Xu = su.wO();
          this._uniformBuffer.bindToEffect(Zu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, su, Eu, uu, this.isFrozen), NE.c.Bind(Xu.currentRenderPassId, this._activeEffect, Eu, uu, this);
          const lu = su.activeCamera;
          lu ? this._uniformBuffer.updateFloat4("cameraInfo", lu.minZ, lu.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const qu = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qu[0], qu[1], qu[2], qu[3]), this._eventInfo.subMesh = ju, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Uu.OBJECTSPACE_NORMALMAP && (uu.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const fu = this._mustRebind(su, Zu, ju, Eu.visibility),
            Cu = Xu._features.needToAlwaysBindUniformBuffers;
          (0, zu.h)(Eu, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, bE.e)(this._activeEffect, this._vertexPullingMetadata);
          let bu = null;
          const cu = this._uniformBuffer;
          if (fu) {
            if (this.bindViewProjection(Zu), bu = this._getReflectionTexture(), !cu.useUbo || !this.isFrozen || !cu.isSync || ju._drawWrapper._forceRebindOnNextCall) {
              if (su.texturesEnabled && (this._albedoTexture && nu.d.DiffuseTextureEnabled && (cu.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, zu.E)(this._albedoTexture, cu, "albedo")), this._baseWeightTexture && nu.d.BaseWeightTextureEnabled && (cu.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, zu.E)(this._baseWeightTexture, cu, "baseWeight")), this._baseDiffuseRoughnessTexture && nu.d.BaseDiffuseRoughnessTextureEnabled && (cu.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, zu.E)(this._baseDiffuseRoughnessTexture, cu, "baseDiffuseRoughness")), this._ambientTexture && nu.d.AmbientTextureEnabled && (cu.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, zu.E)(this._ambientTexture, cu, "ambient")), this._opacityTexture && nu.d.OpacityTextureEnabled && (cu.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, zu.E)(this._opacityTexture, cu, "opacity")), this._emissiveTexture && nu.d.EmissiveTextureEnabled && (cu.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, zu.E)(this._emissiveTexture, cu, "emissive")), this._lightmapTexture && nu.d.LightmapTextureEnabled && (cu.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, zu.E)(this._lightmapTexture, cu, "lightmap")), nu.d.SpecularTextureEnabled && (this._metallicTexture ? (cu.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, zu.E)(this._metallicTexture, cu, "reflectivity")) : this._reflectivityTexture && (cu.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, zu.E)(this._reflectivityTexture, cu, "reflectivity")), this._metallicReflectanceTexture && (cu.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, zu.E)(this._metallicReflectanceTexture, cu, "metallicReflectance")), this._reflectanceTexture && Uu.REFLECTANCE && (cu.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, zu.E)(this._reflectanceTexture, cu, "reflectance")), this._microSurfaceTexture && (cu.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, zu.E)(this._microSurfaceTexture, cu, "microSurfaceSampler"))), this._bumpTexture && Xu.getCaps().standardDerivatives && nu.d.BumpTextureEnabled && !this._disableBumpMap && (cu.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, zu.E)(this._bumpTexture, cu, "bump"), su._mirroredCameraPosition ? cu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : cu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, zu.m)(su, Uu, cu, this._reflectionColor, bu, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && cu.updateFloat("pointSize", this.pointSize), Uu.METALLICWORKFLOW) {
                xu.m.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, xu.m.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const uu = this.subSurface?._indexOfRefraction ?? 1.5,
                  Eu = 1;
                xu.m.Color4[0].b = uu;
                const ju = Math.pow((uu - Eu) / (uu + Eu), 2);
                xu.m.Color4[0].a = ju, cu.updateDirectColor4("vReflectivityColor", xu.m.Color4[0]), cu.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else cu.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              cu.updateColor3("vEmissiveColor", nu.d.EmissiveTextureEnabled ? this._emissiveColor : xu.c.BlackReadOnly), !Uu.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? cu.updateColor4("vAlbedoColor", this._albedoColor, 1) : cu.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), cu.updateFloat("baseWeight", this._baseWeight), cu.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * su.environmentIntensity, this._lightingInfos.w = this._specularIntensity, cu.updateVector4("vLightingIntensity", this._lightingInfos), su.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), cu.updateColor3("vAmbientColor", this._globalAmbientColor), cu.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            su.texturesEnabled && (this._albedoTexture && nu.d.DiffuseTextureEnabled && cu.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && nu.d.BaseWeightTextureEnabled && cu.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && nu.d.BaseDiffuseRoughnessTextureEnabled && cu.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && nu.d.AmbientTextureEnabled && cu.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && nu.d.OpacityTextureEnabled && cu.setTexture("opacitySampler", this._opacityTexture), (0, zu.o)(su, Uu, cu, bu, this.realTimeFiltering), Uu.ENVIRONMENTBRDF && cu.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && nu.d.EmissiveTextureEnabled && cu.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && nu.d.LightmapTextureEnabled && cu.setTexture("lightmapSampler", this._lightmapTexture), nu.d.SpecularTextureEnabled && (this._metallicTexture ? cu.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && cu.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && cu.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && Uu.REFLECTANCE && cu.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && cu.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && Xu.getCaps().standardDerivatives && nu.d.BumpTextureEnabled && !this._disableBumpMap && cu.setTexture("bumpSampler", this._bumpTexture)), this.hV().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Eu) && this.hV().depthPeelingRenderer.bind(Zu), this._eventInfo.subMesh = ju, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, CE.f)(this._activeEffect, this, su), this.bindEyePosition(Zu)
          } else Cu && (this._needToBindSceneUbo = !0);
          !fu && this.isFrozen && !Cu || !su.lightsEnabled || this._disableLighting || (0, zu.r)(su, Eu, this._activeEffect, Uu, this._maxSimultaneousLights), !fu && this.isFrozen || ((su.fogEnabled && Eu.applyFog && su.fogMode !== iu.f.FOGMODE_NONE || bu || this.subSurface.refractionTexture || Eu.receiveShadows || Uu.PREPASS || Uu.CLUSTLIGHT_BATCH) && this.bindView(Zu), (0, zu.j)(su, Eu, this._activeEffect, !0), Uu.NUM_MORPH_INFLUENCERS && (0, zu.x)(Eu, this._activeEffect), Uu.BAKED_VERTEX_ANIMATION_TEXTURE && Eu.bakedVertexAnimationManager?.bind(Zu, Uu.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, zu.u)(Uu, this._activeEffect, su)), this._afterBind(Eu, this._activeEffect, ju), cu.update()
        }
        getAnimatables() {
          const uu = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && uu.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && uu.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && uu.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && uu.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && uu.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && uu.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && uu.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? uu.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && uu.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && uu.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && uu.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && uu.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && uu.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && uu.push(this._microSurfaceTexture), uu
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.hV().environmentTexture
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
          const uu = this.hV().enableSubSurfaceForPrePass();
          return uu && (uu.enabled = !0), !0
        }
        dispose(uu, Eu) {
          this._breakShaderLoadedCheck = !0, Eu && (this._environmentBRDFTexture && this.hV().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(uu, Eu)
        }
      }, Eu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Uu[Symbol.metadata] ?? null) : void 0;
        su = [(0, au.e)("_markAllSubMeshesAsMiscDirty")], (0, du.e)(uu, null, su, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: uu => "debugMode" in uu,
            get: uu => uu.debugMode,
            set: (uu, Eu) => {
              uu.debugMode = Eu
            }
          },
          metadata: Eu
        }, Xu, lu), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu.PBRMATERIAL_OPAQUE = Zu.b.MATERIAL_OPAQUE, uu.PBRMATERIAL_ALPHATEST = Zu.b.MATERIAL_ALPHATEST, uu.PBRMATERIAL_ALPHABLEND = Zu.b.MATERIAL_ALPHABLEND, uu.PBRMATERIAL_ALPHATESTANDBLEND = Zu.b.MATERIAL_ALPHATESTANDBLEND, uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, uu.LIGHTFALLOFF_PHYSICAL = 0, uu.LIGHTFALLOFF_GLTF = 1, uu.LIGHTFALLOFF_STANDARD = 2, uu.ForceGLSL = !1, uu._ShaderLoader = new cE.b((() => [Promise.all([ju.e(322), ju.e(333)]).then((() => ju(61757))), Promise.all([ju.e(327), ju.e(323), ju.e(384), ju.e(336), ju.e(383)]).then((() => ju(61774)))]), (() => [Promise.all([ju.e(341), ju.e(343), ju.e(350)]).then((() => ju(61851))), Promise.all([ju.e(341), ju.e(344), ju.e(387), ju.e(354), ju.e(386)]).then((() => ju(61874)))])), uu
    })();
    Object.getOwnPropertyDescriptor(pE.prototype, "decalMap") || Object.defineProperty(pE.prototype, "decalMap", (0, DE.d)("PBRBaseMaterial", "decalMap")), (0, ju(42109).c)();
    var wE = ju(40272);
    var JE = ju(40356),
      dE = ju(42085),
      aE = ju(40108),
      PE = ju(40118),
      oE = ju(40206);
    let kE = !1;
    const mE = new xu.g,
      vE = new xu.g;
    class KE extends dE.b {
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
          for (let Eu = 0; Eu < this._textures.length; Eu++) this._textures[Eu].wrapU = uu
      }
      set wrapV(uu) {
        if (this._textures)
          for (let Eu = 0; Eu < this._textures.length; Eu++) this._textures[Eu].wrapV = uu
      }
      constructor(uu, Eu, ju, su, Uu, Zu) {
        const Xu = !(!Uu || !Uu.generateMipMaps) && Uu.generateMipMaps,
          lu = !(!Uu || !Uu.generateDepthTexture) && Uu.generateDepthTexture,
          qu = Uu && Uu.depthTextureFormat ? Uu.depthTextureFormat : 15,
          fu = !Uu || void 0 === Uu.doNotChangeAspectRatio || Uu.doNotChangeAspectRatio,
          Cu = !(!Uu || !Uu.drawOnlyOnFirstAttachmentByDefault) && Uu.drawOnlyOnFirstAttachmentByDefault;
        if (super(uu, Eu, su, Xu, fu, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), kE || (kE = !0, PE.ThinEngine.prototype.restoreSingleAttachment = function() {
            const uu = this._gl;
            this.bindAttachments([uu.BACK])
          }, PE.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const uu = this._gl;
            this.bindAttachments([uu.COLOR_ATTACHMENT0])
          }, PE.ThinEngine.prototype.buildTextureLayout = function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const ju = this._gl,
              su = [];
            if (Eu) su.push(ju.BACK);
            else
              for (let Uu = 0; Uu < uu.length; Uu++) uu[Uu] ? su.push(ju["COLOR_ATTACHMENT" + Uu]) : su.push(ju.NONE);
            return su
          }, PE.ThinEngine.prototype.bindAttachments = function(uu) {
            const Eu = this._gl,
              ju = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, ju)
              for (let su = 0; su < uu.length; su++) uu[su] !== Eu.NONE && ju[su] && (0, oE.e)(ju[su].format) && (this._integerMRTAttachmentsMask |= 1 << su);
            Eu.drawBuffers(uu)
          }, PE.ThinEngine.prototype.clearAttachments = function(uu, Eu, ju, su) {
            let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const Xu = this._currentRenderTarget?.textures;
            let lu = !1;
            if (ju && uu && Xu)
              for (let qu = 0; qu < Eu.length; qu++) {
                const uu = Xu[qu];
                if (Eu[qu] !== this._gl.NONE && uu && (0, oE.e)(uu.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  lu = !0;
                  break
                }
              }
            if (!lu || !uu || !Xu) return this.bindAttachments(Eu), void this.clear(uu, ju, su, Uu, Zu);
            this.bindAttachments(Eu), this._applyColorWriteState();
            for (let qu = 0; qu < Eu.length; qu++) {
              const ju = Xu[qu];
              if (Eu[qu] !== this._gl.NONE && ju) {
                let Eu = uu;
                if ((0, oE.e)(ju.format)) {
                  const su = (0, oE.i)(ju.type);
                  Eu = su ? mE : vE;
                  const Uu = su ? 255 : 1;
                  Eu.r = Math.round(uu.r * Uu), Eu.g = Math.round(uu.g * Uu), Eu.b = Math.round(uu.b * Uu), Eu.a = Math.round(uu.a * Uu)
                }
                this._clearColorAttachment(qu, Eu, ju.format, ju.type)
              }
            }
            if (su || Uu) {
              const uu = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, su, Uu, Zu)
              } finally {
                this._integerMRTAttachmentsMask = uu
              }
            }
          }, PE.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ju = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, uu.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(uu), Eu || this.generateMipMapsMultiFramebuffer(uu), ju && (uu._MSAAFramebuffer && this._bindUnboundFramebuffer(uu._framebuffer), ju()), this._bindUnboundFramebuffer(null)
          }, PE.ThinEngine.prototype.createMultipleRenderTarget = function(uu, Eu) {
            let ju, su = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              Uu = !1,
              Zu = !0,
              Xu = !1,
              lu = !1,
              qu = 1,
              fu = 1,
              Cu = [],
              bu = [],
              cu = [],
              Nu = [],
              Ou = [],
              Yu = [],
              hu = [],
              Du = [],
              gu = [],
              Mu = !1;
            const eu = this._createHardwareRenderTargetWrapper(!0, !1, uu);
            void 0 !== Eu && (Uu = void 0 !== Eu.generateMipMaps && Eu.generateMipMaps, Zu = void 0 === Eu.generateDepthBuffer || Eu.generateDepthBuffer, Xu = void 0 !== Eu.generateStencilBuffer && Eu.generateStencilBuffer, lu = void 0 !== Eu.generateDepthTexture && Eu.generateDepthTexture, qu = Eu.IXu ?? 1, fu = Eu.samples ?? fu, Cu = Eu.types || Cu, bu = Eu.samplingModes || bu, cu = Eu.useSRGBBuffers || cu, Nu = Eu.formats || Nu, Ou = Eu.targetTypes || Ou, Yu = Eu.faceIndex || Yu, hu = Eu.layerIndex || hu, Du = Eu.layerCounts || Du, gu = Eu.labels || gu, Mu = Eu.dontCreateTextures ?? !1, this.uY > 1 && (13 === Eu.depthTextureFormat || 17 === Eu.depthTextureFormat || 16 === Eu.depthTextureFormat || 14 === Eu.depthTextureFormat || 18 === Eu.depthTextureFormat) && (ju = Eu.depthTextureFormat)), void 0 === ju && (ju = Xu ? 13 : 14);
            const Gu = this._gl,
              pu = this._currentFramebuffer,
              wu = Gu.createFramebuffer();
            this._bindUnboundFramebuffer(wu);
            const Ju = uu.width ?? uu,
              du = uu.height ?? uu,
              au = [],
              ou = [],
              ku = this.uY > 1 && (13 === ju || 17 === ju || 18 === ju);
            eu.label = Eu?.label ?? "MultiRenderTargetWrapper", eu._framebuffer = wu, eu._generateDepthBuffer = lu || Zu, eu._generateStencilBuffer = lu ? ku : Xu, eu._depthStencilBuffer = this._setupFramebufferDepthAttachments(eu._generateStencilBuffer, eu._generateDepthBuffer, Ju, du, 1, ju), eu._attachments = ou;
            for (let mu = 0; mu < qu; mu++) {
              let uu = bu[mu] || 3,
                Eu = Cu[mu] || 0,
                ju = cu[mu] || !1;
              const su = Nu[mu] || 5,
                Zu = Ou[mu] || 3553,
                Xu = Du[mu] ?? 1;
              (1 !== Eu || this._caps.textureFloatLinearFiltering) && (2 !== Eu || this._caps.textureHalfFloatLinearFiltering) || (uu = 1);
              const lu = this._getSamplingParameters(uu, Uu);
              1 !== Eu || this._caps.textureFloat || (Eu = 0, Pu.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), ju = ju && this._caps.supportSRGBBuffers && (this.uY > 1 || this.isWebGPU);
              const qu = this.uY > 1,
                fu = Gu[qu ? "COLOR_ATTACHMENT" + mu : "COLOR_ATTACHMENT" + mu + "_WEBGL"];
              if (ou.push(fu), -1 === Zu || Mu) continue;
              const Yu = new aE.c(this, 6);
              au[mu] = Yu, Gu.activeTexture(Gu["TEXTURE" + mu]), Gu.bindTexture(Zu, Yu._hardwareTexture.underlyingResource), Gu.texParameteri(Zu, Gu.TEXTURE_MAG_FILTER, lu.mag), Gu.texParameteri(Zu, Gu.TEXTURE_MIN_FILTER, lu.min), Gu.texParameteri(Zu, Gu.TEXTURE_WRAP_S, Gu.CLAMP_TO_EDGE), Gu.texParameteri(Zu, Gu.TEXTURE_WRAP_T, Gu.CLAMP_TO_EDGE);
              const hu = this._getRGBABufferInternalSizedFormat(Eu, su, ju),
                pu = this._getInternalFormat(su),
                wu = this._getWebGLTextureType(Eu);
              if (!qu || 35866 !== Zu && 32879 !== Zu)
                if (34067 === Zu) {
                  for (let uu = 0; uu < 6; uu++) Gu.texImage2D(Gu.TEXTURE_CUBE_MAP_POSITIVE_X + uu, 0, hu, Ju, du, 0, pu, wu, null);
                  Yu.isCube = !0
                } else Gu.texImage2D(Gu.TEXTURE_2D, 0, hu, Ju, du, 0, pu, wu, null);
              else 35866 === Zu ? Yu.is2DArray = !0 : Yu.is3D = !0, Yu.baseDepth = Yu.depth = Xu, Gu.texImage3D(Zu, 0, hu, Ju, du, Xu, 0, pu, wu, null);
              Uu && Gu.generateMipmap(Zu), this._bindTextureDirectly(Zu, null), Yu.baseWidth = Ju, Yu.baseHeight = du, Yu.width = Ju, Yu.height = du, Yu.isReady = !0, Yu.samples = 1, Yu.generateMipMaps = Uu, Yu.samplingMode = uu, Yu.type = Eu, Yu._useSRGBBuffer = ju, Yu.format = su, Yu.label = gu[mu] ?? eu.label + "-Texture" + mu, this._internalTexturesCache.push(Yu)
            }
            if (lu && this._caps.depthTextureExtension && !Mu) {
              const uu = new aE.c(this, 14);
              let Eu = 5,
                su = Gu.DEPTH_COMPONENT16,
                Zu = Gu.DEPTH_COMPONENT,
                Xu = Gu.UNSIGNED_SHORT,
                lu = Gu.DEPTH_ATTACHMENT;
              this.uY < 2 ? su = Gu.DEPTH_COMPONENT : 14 === ju ? (Eu = 1, Xu = Gu.FLOAT, su = Gu.DEPTH_COMPONENT32F) : 18 === ju ? (Eu = 0, Xu = Gu.FLOAT_32_UNSIGNED_INT_24_8_REV, su = Gu.DEPTH32F_STENCIL8, Zu = Gu.DEPTH_STENCIL, lu = Gu.DEPTH_STENCIL_ATTACHMENT) : 16 === ju ? (Eu = 0, Xu = Gu.UNSIGNED_INT, su = Gu.DEPTH_COMPONENT24, lu = Gu.DEPTH_ATTACHMENT) : 13 !== ju && 17 !== ju || (Eu = 12, Xu = Gu.UNSIGNED_INT_24_8, su = Gu.DEPTH24_STENCIL8, Zu = Gu.DEPTH_STENCIL, lu = Gu.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(Gu.TEXTURE_2D, uu, !0), Gu.texParameteri(Gu.TEXTURE_2D, Gu.TEXTURE_MAG_FILTER, Gu.NEAREST), Gu.texParameteri(Gu.TEXTURE_2D, Gu.TEXTURE_MIN_FILTER, Gu.NEAREST), Gu.texParameteri(Gu.TEXTURE_2D, Gu.TEXTURE_WRAP_S, Gu.CLAMP_TO_EDGE), Gu.texParameteri(Gu.TEXTURE_2D, Gu.TEXTURE_WRAP_T, Gu.CLAMP_TO_EDGE), Gu.texImage2D(Gu.TEXTURE_2D, 0, su, Ju, du, 0, Zu, Xu, null), Gu.framebufferTexture2D(Gu.FRAMEBUFFER, lu, Gu.TEXTURE_2D, uu._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(Gu.TEXTURE_2D, null), eu._depthStencilTexture = uu, eu._depthStencilTextureWithStencil = ku, uu.baseWidth = Ju, uu.baseHeight = du, uu.width = Ju, uu.height = du, uu.isReady = !0, uu.samples = 1, uu.generateMipMaps = Uu, uu.samplingMode = 1, uu.format = ju, uu.type = Eu, uu.label = eu.label + "-DepthStencil", au[qu] = uu, this._internalTexturesCache.push(uu)
            }
            if (eu.setTextures(au), su && Gu.drawBuffers(ou), this._bindUnboundFramebuffer(pu), eu.setLayerAndFaceIndices(hu, Yu), this.resetTextureCache(), Mu) {
              if (fu > 1) {
                const uu = Gu.createFramebuffer();
                if (!uu) throw new Error("Unable to create multi sampled framebuffer");
                eu._samples = fu, eu._MSAAFramebuffer = uu, qu > 0 && su && (this._bindUnboundFramebuffer(uu), Gu.drawBuffers(ou), this._bindUnboundFramebuffer(pu))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(eu, fu, su);
            return eu
          }, PE.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(uu, Eu) {
            let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.uY < 2 || !uu) return 1;
            if (uu.samples === Eu) return Eu;
            const su = this._gl;
            Eu = Math.min(Eu, this.getCaps().maxMSAASamples), uu._depthStencilBuffer && (su.deleteRenderbuffer(uu._depthStencilBuffer), uu._depthStencilBuffer = null), uu._MSAAFramebuffer && (su.deleteFramebuffer(uu._MSAAFramebuffer), uu._MSAAFramebuffer = null);
            const Uu = uu._attachments.length;
            for (let Xu = 0; Xu < Uu; Xu++) {
              const Eu = uu.textures[Xu]._hardwareTexture;
              Eu?.releaseMSAARenderBuffers()
            }
            if (Eu > 1 && "function" === typeof su.renderbufferStorageMultisample) {
              const Zu = su.createFramebuffer();
              if (!Zu) throw new Error("Unable to create multi sampled framebuffer");
              uu._MSAAFramebuffer = Zu, this._bindUnboundFramebuffer(Zu);
              const Xu = [];
              for (let ju = 0; ju < Uu; ju++) {
                const Uu = uu.textures[ju],
                  Zu = Uu._hardwareTexture,
                  lu = su[this.uY > 1 ? "COLOR_ATTACHMENT" + ju : "COLOR_ATTACHMENT" + ju + "_WEBGL"],
                  qu = this._createRenderBuffer(Uu.width, Uu.height, Eu, -1, this._getRGBABufferInternalSizedFormat(Uu.type, Uu.format, Uu._useSRGBBuffer), lu);
                if (!qu) throw new Error("Unable to create multi sampled framebuffer");
                Zu.addMSAARenderBuffer(qu), Uu.samples = Eu, Xu.push(lu)
              }
              ju && su.drawBuffers(Xu)
            } else this._bindUnboundFramebuffer(uu._framebuffer);
            const Zu = uu._depthStencilTexture ? uu._depthStencilTexture.format : void 0;
            return uu._depthStencilBuffer = this._setupFramebufferDepthAttachments(uu._generateStencilBuffer, uu._generateDepthBuffer, uu.width, uu.height, Eu, Zu), this._bindUnboundFramebuffer(null), uu._samples = Eu, Eu
          }, PE.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(uu) {
            const Eu = uu,
              ju = this._gl;
            if (Eu.isMulti)
              for (let su = 0; su < Eu._attachments.length; su++) {
                const uu = Eu.textures[su];
                !uu?.generateMipMaps || uu?.isCube || uu?.is3D || (this._bindTextureDirectly(ju.TEXTURE_2D, uu, !0), ju.generateMipmap(ju.TEXTURE_2D), this._bindTextureDirectly(ju.TEXTURE_2D, null))
              }
          }, PE.ThinEngine.prototype.resolveMultiFramebuffer = function(uu) {
            const Eu = uu,
              ju = this._gl;
            if (!Eu._MSAAFramebuffer || !Eu.isMulti) return;
            let su = Eu.resolveMSAAColors ? ju.COLOR_BUFFER_BIT : 0;
            su |= Eu._generateDepthBuffer && Eu.resolveMSAADepth ? ju.DEPTH_BUFFER_BIT : 0, su |= Eu._generateStencilBuffer && Eu.resolveMSAAStencil ? ju.STENCIL_BUFFER_BIT : 0;
            const Uu = Eu._attachments,
              Zu = Uu.length;
            ju.bindFramebuffer(ju.READ_FRAMEBUFFER, Eu._MSAAFramebuffer), ju.bindFramebuffer(ju.DRAW_FRAMEBUFFER, Eu._framebuffer);
            for (let Xu = 0; Xu < Zu; Xu++) {
              const uu = Eu.textures[Xu];
              for (let Eu = 0; Eu < Zu; Eu++) Uu[Eu] = ju.NONE;
              Uu[Xu] = ju[this.uY > 1 ? "COLOR_ATTACHMENT" + Xu : "COLOR_ATTACHMENT" + Xu + "_WEBGL"], ju.readBuffer(Uu[Xu]), ju.drawBuffers(Uu), ju.blitFramebuffer(0, 0, uu.width, uu.height, 0, 0, uu.width, uu.height, su, ju.NEAREST)
            }
            for (let Xu = 0; Xu < Zu; Xu++) Uu[Xu] = ju[this.uY > 1 ? "COLOR_ATTACHMENT" + Xu : "COLOR_ATTACHMENT" + Xu + "_WEBGL"];
            ju.drawBuffers(Uu), ju.bindFramebuffer(this._gl.FRAMEBUFFER, Eu._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = Zu;
        const bu = [],
          cu = [],
          Nu = [],
          Ou = [],
          Yu = [],
          hu = [],
          Du = [],
          gu = [];
        this._initTypes(ju, bu, cu, Nu, Ou, Yu, hu, Du, gu, Uu);
        const Mu = !Uu || void 0 === Uu.generateDepthBuffer || Uu.generateDepthBuffer,
          eu = !(!Uu || void 0 === Uu.generateStencilBuffer) && Uu.generateStencilBuffer,
          Gu = Uu && Uu.samples ? Uu.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: cu,
          generateMipMaps: Xu,
          generateDepthBuffer: Mu,
          generateStencilBuffer: eu,
          generateDepthTexture: lu,
          depthTextureFormat: qu,
          types: bu,
          IXu: ju,
          useSRGBBuffers: Nu,
          samples: Gu,
          formats: Ou,
          targetTypes: Yu,
          faceIndex: hu,
          layerIndex: Du,
          layerCounts: gu,
          labels: Zu,
          label: uu
        }, this._count = ju, this._drawOnlyOnFirstAttachmentByDefault = Cu, ju > 0 && (this._createInternalTextures(), this._createTextures(Zu))
      }
      _initTypes(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        for (let Cu = 0; Cu < uu; Cu++) fu && fu.types && void 0 !== fu.types[Cu] ? Eu.push(fu.types[Cu]) : Eu.push(fu && fu.defaultType ? fu.defaultType : 0), fu && fu.samplingModes && void 0 !== fu.samplingModes[Cu] ? ju.push(fu.samplingModes[Cu]) : ju.push(ku.g.BILINEAR_SAMPLINGMODE), fu && fu.useSRGBBuffers && void 0 !== fu.useSRGBBuffers[Cu] ? su.push(fu.useSRGBBuffers[Cu]) : su.push(!1), fu && fu.formats && void 0 !== fu.formats[Cu] ? Uu.push(fu.formats[Cu]) : Uu.push(5), fu && fu.targetTypes && void 0 !== fu.targetTypes[Cu] ? Zu.push(fu.targetTypes[Cu]) : Zu.push(3553), fu && fu.faceIndex && void 0 !== fu.faceIndex[Cu] ? Xu.push(fu.faceIndex[Cu]) : Xu.push(0), fu && fu.layerIndex && void 0 !== fu.layerIndex[Cu] ? lu.push(fu.layerIndex[Cu]) : lu.push(0), fu && fu.layerCounts && void 0 !== fu.layerCounts[Cu] ? qu.push(fu.layerCounts[Cu]) : qu.push(1)
      }
      _createInternaTextureIndexMapping() {
        const uu = {},
          Eu = [];
        if (!this._renderTarget) return Eu;
        const ju = this._renderTarget.textures;
        for (let su = 0; su < ju.length; su++) {
          const Uu = ju[su];
          if (!Uu) continue;
          const Zu = uu[Uu.uniqueId];
          void 0 !== Zu ? Eu[su] = Zu : uu[Uu.uniqueId] = su
        }
        return Eu
      }
      _rebuild() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || uu) return;
        const su = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), Eu && (this._releaseTextures(), this._createTextures(ju));
        const Uu = this._renderTarget.textures;
        for (let Zu = 0; Zu < Uu.length; Zu++) {
          const uu = this._textures[Zu];
          void 0 !== su[Zu] && this._renderTarget.setTexture(Uu[su[Zu]], Zu), uu._texture = Uu[Zu], uu._texture && (uu._noMipmap = !uu._texture.useMipMaps, uu._useSRGBBuffer = uu._texture._useSRGBBuffer)
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
        const Eu = this._renderTarget.textures;
        this._textures = [];
        for (let ju = 0; ju < Eu.length; ju++) {
          const su = new ku.g(null, this.hV());
          uu?.[ju] && (su.name = uu[ju]), su._texture = Eu[ju], su._texture && (su._noMipmap = !su._texture.useMipMaps, su._useSRGBBuffer = su._texture._useSRGBBuffer), this._textures.push(su)
        }
      }
      setInternalTexture(uu, Eu) {
        let ju = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === Eu && (this._texture = uu), this.renderTarget.setTexture(uu, Eu, ju), this.textures[Eu] || (this.textures[Eu] = new ku.g(null, this.hV()), this.textures[Eu].name = this._textureNames?.[Eu] ?? this.textures[Eu].name), this.textures[Eu]._texture = uu, this.textures[Eu]._noMipmap = !uu.useMipMaps, this.textures[Eu]._useSRGBBuffer = uu._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[Eu] = uu.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[Eu] = uu.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[Eu] = uu._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[Eu])) {
          let ju;
          ju = uu.is2DArray ? 35866 : uu.isCube ? 34067 : uu.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[Eu] = ju
        }
      }
      setLayerAndFaceIndex(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[uu] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[uu] = Eu), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[uu] = ju), this.renderTarget.setLayerAndFaceIndex(uu, Eu, ju))
      }
      setLayerAndFaceIndices(uu, Eu) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = uu, this._multiRenderTargetOptions.faceIndex = Eu, this.renderTarget.setLayerAndFaceIndices(uu, Eu))
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
      updateCount(uu, Eu, ju) {
        this._multiRenderTargetOptions.IXu = uu, this._count = uu;
        const su = [],
          Uu = [],
          Zu = [],
          Xu = [],
          lu = [],
          qu = [],
          fu = [],
          Cu = [];
        this._textureNames = ju, this._initTypes(uu, su, Uu, Zu, Xu, lu, qu, fu, Cu, Eu), this._multiRenderTargetOptions.types = su, this._multiRenderTargetOptions.samplingModes = Uu, this._multiRenderTargetOptions.useSRGBBuffers = Zu, this._multiRenderTargetOptions.formats = Xu, this._multiRenderTargetOptions.targetTypes = lu, this._multiRenderTargetOptions.faceIndex = qu, this._multiRenderTargetOptions.layerIndex = fu, this._multiRenderTargetOptions.layerCounts = Cu, this._multiRenderTargetOptions.labels = ju, this._rebuild(!1, !0, ju)
      }
      _unbindFrameBuffer(uu, Eu) {
        this._renderTarget && uu.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(Eu)
        }))
      }
      dispose() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), uu ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const uu = this._renderTarget?.textures;
        if (uu) {
          for (let Eu = uu.length - 1; Eu >= 0; Eu--) this._textures[Eu]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var VE = ju(40422);
    class rE {
      constructor(uu) {
        this.name = VE.b.NAME_GEOMETRYBUFFERRENDERER, this.vY = uu
      }
      register() {
        this.vY._gatherRenderTargetsStage.registerStep(VE.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(uu) {
        this.vY._geometryBufferRenderer && uu.push(this.vY._geometryBufferRenderer.getGBuffer())
      }
    }
    let QE = !1;
    var iE;
    ! function(uu) {
      uu[uu.Small = 0] = "Small", uu[uu.Medium = 1] = "Medium", uu[uu.Large = 2] = "Large", uu[uu.ExtraLarge = 3] = "ExtraLarge"
    }(iE || (iE = {}));
    const WE = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      SE = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class IE {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(uu) {
        if (uu && this._enableMeshBlendTag && !this._scene.wO().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(uu, Eu) {
        uu === IE.POSITION_TEXTURE_TYPE ? (this._positionIndex = Eu, this._enablePosition = !0) : uu === IE.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = Eu, this._enableVelocity = !0) : uu === IE.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = Eu, this._enableVelocityLinear = !0) : uu === IE.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = Eu, this._enableReflectivity = !0) : uu === IE.DEPTH_TEXTURE_TYPE ? (this._depthIndex = Eu, this._enableDepth = !0) : uu === IE.NORMAL_TEXTURE_TYPE ? (this._normalIndex = Eu, this._enableNormal = !0) : uu === IE.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = Eu, this._enableScreenspaceDepth = !0) : uu === IE.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = Eu, this._enableIrradiance = !0) : uu === IE.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = Eu, this._enableObjectId = !0) : uu === IE.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = Eu, this._enableMeshBlendTag = !0)
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
          case IE.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case IE.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case IE.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case IE.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case IE.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case IE.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case IE.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case IE.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case IE.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case IE.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const uu = this._scene.wO(),
            Eu = Math.min(uu.getCaps().maxDrawBuffers ?? 1, 8),
            ju = this._assignRenderTargetIndices()[0] + 1;
          if (uu.getCaps().drawBuffersExtension && ju > Eu) throw new Error(`GeometryBufferRenderer: ${ju} color attachments were requested, but this engine supports at most ${Eu}`)
        }
        this._enableObjectId = uu, uu || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(uu) {
        if (this._enableMeshBlendTag !== uu) {
          if (uu) {
            const uu = this._scene.wO();
            if (! function(uu) {
                return "NATIVE" !== uu.shaderPlatformName && (uu.isWebGPU || 2 === uu.uY)
              }(uu)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !uu.isWebGPU && !uu.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const Eu = Math.min(uu.getCaps().maxDrawBuffers ?? 1, 8),
                ju = this._assignRenderTargetIndices()[0] + 1;
              if (uu.getCaps().drawBuffersExtension && ju > Eu) throw new Error(`GeometryBufferRenderer: ${ju} color attachments were requested, but this engine supports at most ${Eu}`)
            }
          }
          this._enableMeshBlendTag = uu, uu || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get vY() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          su = arguments.length > 3 ? arguments[3] : void 0;
        var Uu;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new xu.g(0, 0, 0, 0), this._clearDepthColor = new xu.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = uu, this._ratioOrDimensions = Eu, this._useUbo = uu.wO().supportsUniformBuffers, this._depthFormat = ju, this._textureTypesAndFormats = su || {}, this._initShaderSourceAsync(), Uu = IE, QE || (QE = !0, Object.defineProperty(iu.f.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(uu) {
            uu && uu.isSupported && (this._geometryBufferRenderer = uu)
          },
          enumerable: !0,
          configurable: !0
        }), iu.f.prototype.enableGeometryBufferRenderer = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            ju = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new Uu(this, uu, Eu, ju), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, iu.f.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, Uu._SceneComponentInitialization = uu => {
          let Eu = uu._getComponent(VE.b.NAME_GEOMETRYBUFFERRENDERER);
          Eu || (Eu = new rE(uu), uu.usu(Eu))
        }), IE._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.wO().isWebGPU && !IE.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([ju.e(342).then((() => ju(62056))), Promise.all([ju.e(341), ju.e(353)]).then((() => ju(62062)))])) : await Promise.all([ju.e(325).then((() => ju(62067))), ju.e(324).then((() => ju(62071)))]), this._shadersLoaded = !0
      }
      isReady(uu, Eu) {
        if (!this._shadersLoaded) return !1;
        const ju = uu.oO();
        if (ju && ju.disableDepthWrite) return !1;
        if (function(uu) {
            return uu._isGaussianSplatting || "GaussianSplattingMesh" === (Eu = uu.getClassName()) || "GaussianSplattingStream" === Eu;
            var Eu
          }(uu.getMesh())) return !1;
        const su = [],
          Uu = [Su.j.PositionKind],
          Zu = uu.getMesh();
        Zu.isVerticesDataPresent(Su.j.NormalKind) && (su.push("#define HAS_NORMAL_ATTRIBUTE"), Uu.push(Su.j.NormalKind));
        let Xu = !1,
          lu = !1;
        if (ju) {
          let uu = !1;
          if (ju.needAlphaTestingForMesh(Zu) && ju.getAlphaTestTexture() && (su.push("#define ALPHATEST"), su.push(`#define ALPHATEST_UV${ju.getAlphaTestTexture().coordinatesIndex+1}`), uu = !0), (ju.bumpTexture || ju.normalTexture || ju.geometryNormalTexture) && nu.d.BumpTextureEnabled) {
            const Eu = ju.bumpTexture || ju.normalTexture || ju.geometryNormalTexture;
            su.push("#define BUMP"), su.push(`#define BUMP_UV${Eu.coordinatesIndex+1}`), uu = !0
          }
          if (this._enableReflectivity) {
            let Eu = !1;
            if ("PBRMetallicRoughnessMaterial" === ju.getClassName()) ju.metallicRoughnessTexture && (su.push("#define ORMTEXTURE"), su.push(`#define REFLECTIVITY_UV${ju.metallicRoughnessTexture.coordinatesIndex+1}`), su.push("#define METALLICWORKFLOW"), uu = !0, Eu = !0), null != ju.metallic && (su.push("#define METALLIC"), su.push("#define METALLICWORKFLOW"), Eu = !0), null != ju.roughness && (su.push("#define ROUGHNESS"), su.push("#define METALLICWORKFLOW"), Eu = !0), Eu && (ju.baseTexture && (su.push("#define ALBEDOTEXTURE"), su.push(`#define ALBEDO_UV${ju.baseTexture.coordinatesIndex+1}`), ju.baseTexture.gammaSpace && su.push("#define GAMMAALBEDO"), uu = !0), ju.baseColor && su.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === ju.getClassName()) ju.specularGlossinessTexture ? (su.push("#define SPECULARGLOSSINESSTEXTURE"), su.push(`#define REFLECTIVITY_UV${ju.specularGlossinessTexture.coordinatesIndex+1}`), uu = !0, ju.specularGlossinessTexture.gammaSpace && su.push("#define GAMMAREFLECTIVITYTEXTURE")) : ju.specularColor && su.push("#define REFLECTIVITYCOLOR"), null != ju.glossiness && su.push("#define GLOSSINESS");
            else if ("PBRMaterial" === ju.getClassName()) ju.metallicTexture && (su.push("#define ORMTEXTURE"), su.push(`#define REFLECTIVITY_UV${ju.metallicTexture.coordinatesIndex+1}`), su.push("#define METALLICWORKFLOW"), uu = !0, Eu = !0), null != ju.metallic && (su.push("#define METALLIC"), su.push("#define METALLICWORKFLOW"), Eu = !0), null != ju.roughness && (su.push("#define ROUGHNESS"), su.push("#define METALLICWORKFLOW"), Eu = !0), Eu ? (ju.albedoTexture && (su.push("#define ALBEDOTEXTURE"), su.push(`#define ALBEDO_UV${ju.albedoTexture.coordinatesIndex+1}`), ju.albedoTexture.gammaSpace && su.push("#define GAMMAALBEDO"), uu = !0), ju.albedoColor && su.push("#define ALBEDOCOLOR")) : (ju.reflectivityTexture ? (su.push("#define SPECULARGLOSSINESSTEXTURE"), su.push(`#define REFLECTIVITY_UV${ju.reflectivityTexture.coordinatesIndex+1}`), ju.reflectivityTexture.gammaSpace && su.push("#define GAMMAREFLECTIVITYTEXTURE"), uu = !0) : ju.reflectivityColor && su.push("#define REFLECTIVITYCOLOR"), null != ju.microSurface && su.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === ju.getClassName()) ju.specularTexture && (su.push("#define REFLECTIVITYTEXTURE"), su.push(`#define REFLECTIVITY_UV${ju.specularTexture.coordinatesIndex+1}`), ju.specularTexture.gammaSpace && su.push("#define GAMMAREFLECTIVITYTEXTURE"), uu = !0), ju.specularColor && su.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === ju.getClassName()) {
              const Eu = ju;
              su.push("#define METALLIC"), su.push("#define ROUGHNESS"), Eu._useRoughnessFromMetallicTextureGreen && Eu.baseMetalnessTexture ? (su.push("#define ORMTEXTURE"), su.push(`#define REFLECTIVITY_UV${Eu.baseMetalnessTexture.coordinatesIndex+1}`), uu = !0) : Eu.baseMetalnessTexture ? (su.push("#define METALLIC_TEXTURE"), su.push(`#define METALLIC_UV${Eu.baseMetalnessTexture.coordinatesIndex+1}`), uu = !0) : Eu.specularRoughnessTexture && (su.push("#define ROUGHNESS_TEXTURE"), su.push(`#define ROUGHNESS_UV${Eu.specularRoughnessTexture.coordinatesIndex+1}`), uu = !0), Eu.baseColorTexture && (su.push("#define ALBEDOTEXTURE"), su.push(`#define ALBEDO_UV${Eu.baseColorTexture.coordinatesIndex+1}`), Eu.baseColorTexture.gammaSpace && su.push("#define GAMMAALBEDO"), uu = !0), Eu.baseColor && su.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (su.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === ju.getClassName())) {
            const Eu = ju;
            Eu.subsurfaceWeight > 0 && Eu.subsurfaceWeightTexture && (su.push("#define SUBSURFACE_WEIGHT"), su.push(`#define SUBSURFACEWEIGHT_UV${Eu.subsurfaceWeightTexture.coordinatesIndex+1}`), uu = !0), Eu.transmissionWeight > 0 && Eu.transmissionWeightTexture && (su.push("#define TRANSMISSION_WEIGHT"), su.push(`#define TRANSMISSIONWEIGHT_UV${Eu.transmissionWeightTexture.coordinatesIndex+1}`), uu = !0)
          }
          uu && (su.push("#define NEED_UV"), Zu.isVerticesDataPresent(Su.j.UVKind) && (Uu.push(Su.j.UVKind), su.push("#define UV1"), Xu = !0), Zu.isVerticesDataPresent(Su.j.UV2Kind) && (Uu.push(Su.j.UV2Kind), su.push("#define UV2"), lu = !0))
        }
        if (this._enableDepth && (su.push("#define DEPTH"), su.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (su.push("#define NORMAL"), su.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (su.push("#define POSITION"), su.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (su.push("#define VELOCITY"), su.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Zu) && su.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (su.push("#define VELOCITY_LINEAR"), su.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(Zu) && su.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (su.push("#define REFLECTIVITY"), su.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (su.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), su.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          su.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), su.push("#define IRRADIANCE");
          const uu = this._scene;
          if (uu.environmentTexture) {
            const Eu = {};
            let Uu = !1,
              Zu = 0;
            "OpenPBRMaterial" !== ju.getClassName() && "StandardMaterial" !== ju.getClassName() && "PBRMetallicRoughnessMaterial" !== ju.getClassName() && "PBRSpecularGlossinessMaterial" !== ju.getClassName() && "PBRMaterial" !== ju.getClassName() || (Uu = !!ju.realtimeFiltering, Zu = ju.realtimeFilteringQuality || 0), (0, zu.eb)(uu, uu.environmentTexture, Eu, Uu, Zu, !0);
            for (const uu in Eu) Eu[uu] && su.push("#define " + uu);
            Eu.USEIRRADIANCEMAP || su.push("#define SPHERICAL_HARMONICS");
            const Xu = uu.postProcessRenderPipelineManager.supportedPipelines.find((uu => "IBLShadowsRenderPipeline" === uu.getClassName()));
            if (Xu) {
              const uu = Xu;
              uu._getAccumulatedTexture() && (su.push("#define IBL_SHADOW_TEXTURE"), uu.coloredShadows && su.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (su.push("#define OBJECT_ID"), su.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (su.push("#define MESH_BLEND_TAG"), su.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && su.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && su.push("#define ENCODE_NORMAL"), Zu.useBones && Zu.computeBonesUsingShaders && Zu.skeleton ? (Uu.push(Su.j.MatricesIndicesKind), Uu.push(Su.j.MatricesWeightsKind), Zu.numBoneInfluencers > 4 && (Uu.push(Su.j.MatricesIndicesExtraKind), Uu.push(Su.j.MatricesWeightsExtraKind)), su.push("#define NUM_BONE_INFLUENCERS " + Zu.numBoneInfluencers), su.push("#define BONETEXTURE " + Zu.skeleton.isUsingTextureForMatrices), su.push("#define BonesPerMesh " + (Zu.skeleton.bones.length + 1))) : (su.push("#define NUM_BONE_INFLUENCERS 0"), su.push("#define BONETEXTURE false"), su.push("#define BonesPerMesh 0"));
        const qu = Zu.morphTargetManager ? (0, zu.W)(Zu.morphTargetManager, su, Uu, Zu, !0, !0, !1, Xu, lu, !1) : 0;
        Eu && (su.push("#define INSTANCES"), (0, zu.zb)(Uu, this._enableVelocity || this._enableVelocityLinear), uu.getRenderingMesh().hasThinInstances && su.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? su.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : su.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, CE.k)(ju, this._scene, su);
        const fu = this._scene.wO(),
          Cu = uu._getDrawWrapper(void 0, !0),
          bu = Cu.defines,
          cu = su.join("\n");
        return bu !== cu && Cu.setEffect(fu.createEffect("geometry", {
          attributes: Uu,
          uniformsNames: SE,
          samplers: WE,
          defines: cu,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: qu
          },
          shaderLanguage: this.shaderLanguage
        }, fu), cu), Cu.effect.isReady()
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
          this._scene.wO().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.vY.wO()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.vY.wO().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const uu = [],
          Eu = [];
        let ju = 0;
        return this._enableDepth && (this._depthIndex = ju, ju++, uu.push("gBuffer_Depth"), Eu.push(this._textureTypesAndFormats[IE.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = ju, ju++, uu.push("gBuffer_Normal"), Eu.push(this._textureTypesAndFormats[IE.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = ju, ju++, uu.push("gBuffer_Position"), Eu.push(this._textureTypesAndFormats[IE.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = ju, ju++, uu.push("gBuffer_Velocity"), Eu.push(this._textureTypesAndFormats[IE.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = ju, ju++, uu.push("gBuffer_VelocityLinear"), Eu.push(this._textureTypesAndFormats[IE.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = ju, ju++, uu.push("gBuffer_Reflectivity"), Eu.push(this._textureTypesAndFormats[IE.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = ju, ju++, uu.push("gBuffer_ScreenspaceDepth"), Eu.push(this._textureTypesAndFormats[IE.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = ju, ju++, uu.push("gBuffer_Irradiance"), Eu.push(this._textureTypesAndFormats[IE.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = ju, ju++, uu.push("gBuffer_ObjectId"), Eu.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = ju, ju++, uu.push("gBuffer_MeshBlendTag"), Eu.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [ju, uu, Eu]
      }
      _createRenderTargets() {
        const uu = this._scene.wO(),
          [Eu, ju, su] = this._assignRenderTargetIndices(),
          Uu = Math.min(uu.getCaps().maxDrawBuffers ?? 1, 8);
        if (uu.getCaps().drawBuffersExtension && Eu > Uu) throw new Error(`GeometryBufferRenderer: ${Eu} color attachments were requested, but this engine supports at most ${Uu}`);
        let Xu = 0;
        uu._caps.textureFloat && uu._caps.textureFloatLinearFiltering ? Xu = 1 : uu._caps.textureHalfFloat && uu._caps.textureHalfFloatLinearFiltering && (Xu = 2);
        const lu = this._getRenderTargetDimensions(),
          qu = [],
          fu = [],
          Cu = [];
        for (const Zu of su) Zu ? (qu.push(Zu.textureType), fu.push(Zu.textureFormat), Cu.push(Zu.samplingMode ?? 2)) : (qu.push(Xu), fu.push(5), Cu.push(2));
        if (this._normalsAreUnsigned = 11 === qu[IE.NORMAL_TEXTURE_TYPE] || 13 === qu[IE.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new KE("gBuffer", lu, Eu, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: qu,
            formats: fu,
            samplingModes: Cu,
            depthTextureFormat: this._depthFormat
          }, ju.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = ku.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = ku.g.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const bu = [!0],
          cu = [!1],
          Nu = [!0];
        for (let Zu = 1; Zu < Eu; ++Zu) bu.push(!0), Nu.push(!1), cu.push(!0);
        const Ou = uu.buildTextureLayout(bu),
          Yu = uu.buildTextureLayout(cu),
          hu = uu.buildTextureLayout(Nu);
        this._multiRenderTarget.onClearObservable.add((uu => {
          const Eu = this.useSpecificClearForDepthTexture ? Yu : Ou;
          uu.clearAttachments(this._clearColor, Eu, !0, !0, !0), this.useSpecificClearForDepthTexture && uu.clearAttachments(this._clearDepthColor, hu, !0, !1, !1), uu.bindAttachments(Ou)
        })), this._resizeObserver = uu.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const Du = uu => {
          const Eu = uu.getRenderingMesh(),
            ju = uu.getEffectiveMesh(),
            su = this._scene,
            Uu = su.wO(),
            Xu = uu.oO();
          if (!Xu) return;
          if (ju._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[ju.uniqueId] && (this._previousTransformationMatrices[ju.uniqueId] = {
              zb: Wu.e.Identity(),
              viewProjection: su.getTransformMatrix()
            }, Eu.skeleton)) {
            const uu = Eu.skeleton.getTransformMatrices(Eu);
            this._previousBonesTransformationMatrices[Eu.uniqueId] = this._copyBonesTransformationMatrices(uu, new Float32Array(uu.length))
          }
          const lu = Eu._getInstancesRenderList(uu._id, !!uu.getReplacementMesh());
          if (lu.mustReturn) return;
          const qu = Uu.getCaps().instancedArrays && (null !== lu.visibleInstances[uu._id] || Eu.hasThinInstances),
            fu = ju.getWorldMatrix();
          if (this.isReady(uu, qu)) {
            const Cu = uu._getDrawWrapper();
            if (!Cu) return;
            const bu = Cu.effect;
            let cu;
            Uu.enableEffect(Cu), qu || Eu._bind(uu, bu, Xu.fillMode), this._useUbo ? ((0, zu.B)(bu, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (bu.setMatrix("viewProjection", su.getTransformMatrix()), bu.setMatrix("view", su.getViewMatrix()), this._scene.bindEyePosition(bu, "vEyePosition"));
            if (Eu._instanceDataStorage.isFrozen || !Xu.backFaceCulling && null === Xu.sideOrientation) cu = Eu._effectiveSideOrientation;
            else {
              const uu = ju._getWorldMatrixDeterminant();
              cu = Xu._getEffectiveOrientation(Eu), uu < 0 && (cu = cu === Zu.b.ClockWiseSideOrientation ? Zu.b.CounterClockWiseSideOrientation : Zu.b.ClockWiseSideOrientation)
            }
            if (Xu._preBind(Cu, cu), Xu.needAlphaTestingForMesh(ju)) {
              const uu = Xu.getAlphaTestTexture();
              uu && (bu.setTexture("diffuseSampler", uu), bu.setMatrix("diffuseMatrix", uu.getTextureMatrix()), bu.setFloat("alphaCutOff", Xu.alphaCutOff ?? .4))
            }
            if ((Xu.bumpTexture || Xu.normalTexture || Xu.geometryNormalTexture) && su.wO().getCaps().standardDerivatives && nu.d.BumpTextureEnabled) {
              const uu = Xu.bumpTexture || Xu.normalTexture || Xu.geometryNormalTexture;
              bu.setFloat3("vBumpInfos", uu.coordinatesIndex, 1 / uu.level, Xu.parallaxScaleBias), bu.setMatrix("bumpMatrix", uu.getTextureMatrix()), bu.setTexture("bumpSampler", uu), bu.setFloat2("vTangentSpaceParams", Xu.invertNormalMapX ? -1 : 1, Xu.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === Xu.getClassName()) null !== Xu.metallicRoughnessTexture && (bu.setTexture("reflectivitySampler", Xu.metallicRoughnessTexture), bu.setMatrix("reflectivityMatrix", Xu.metallicRoughnessTexture.getTextureMatrix())), null !== Xu.metallic && bu.setFloat("metallic", Xu.metallic), null !== Xu.roughness && bu.setFloat("glossiness", 1 - Xu.roughness), null !== Xu.baseTexture && (bu.setTexture("albedoSampler", Xu.baseTexture), bu.setMatrix("albedoMatrix", Xu.baseTexture.getTextureMatrix())), null !== Xu.baseColor && bu.setColor3("albedoColor", Xu.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === Xu.getClassName()) null !== Xu.specularGlossinessTexture ? (bu.setTexture("reflectivitySampler", Xu.specularGlossinessTexture), bu.setMatrix("reflectivityMatrix", Xu.specularGlossinessTexture.getTextureMatrix())) : null !== Xu.specularColor && bu.setColor3("reflectivityColor", Xu.specularColor), null !== Xu.glossiness && bu.setFloat("glossiness", Xu.glossiness);
            else if ("PBRMaterial" === Xu.getClassName()) null !== Xu.metallicTexture && (bu.setTexture("reflectivitySampler", Xu.metallicTexture), bu.setMatrix("reflectivityMatrix", Xu.metallicTexture.getTextureMatrix())), null !== Xu.metallic && bu.setFloat("metallic", Xu.metallic), null !== Xu.roughness && bu.setFloat("glossiness", 1 - Xu.roughness), null !== Xu.roughness || null !== Xu.metallic || null !== Xu.metallicTexture ? (null !== Xu.albedoTexture && (bu.setTexture("albedoSampler", Xu.albedoTexture), bu.setMatrix("albedoMatrix", Xu.albedoTexture.getTextureMatrix())), null !== Xu.albedoColor && bu.setColor3("albedoColor", Xu.albedoColor)) : (null !== Xu.reflectivityTexture ? (bu.setTexture("reflectivitySampler", Xu.reflectivityTexture), bu.setMatrix("reflectivityMatrix", Xu.reflectivityTexture.getTextureMatrix())) : null !== Xu.reflectivityColor && bu.setColor3("reflectivityColor", Xu.reflectivityColor), null !== Xu.microSurface && bu.setFloat("glossiness", Xu.microSurface));
            else if ("StandardMaterial" === Xu.getClassName()) null !== Xu.specularTexture && (bu.setTexture("reflectivitySampler", Xu.specularTexture), bu.setMatrix("reflectivityMatrix", Xu.specularTexture.getTextureMatrix())), null !== Xu.specularColor && bu.setColor3("reflectivityColor", Xu.specularColor);
            else if ("OpenPBRMaterial" === Xu.getClassName()) {
              const uu = Xu;
              uu._useRoughnessFromMetallicTextureGreen && uu.baseMetalnessTexture ? (bu.setTexture("reflectivitySampler", uu.baseMetalnessTexture), bu.setMatrix("reflectivityMatrix", uu.baseMetalnessTexture.getTextureMatrix())) : uu.baseMetalnessTexture ? (bu.setTexture("metallicSampler", uu.baseMetalnessTexture), bu.setMatrix("metallicMatrix", uu.baseMetalnessTexture.getTextureMatrix())) : uu.specularRoughnessTexture && (bu.setTexture("roughnessSampler", uu.specularRoughnessTexture), bu.setMatrix("roughnessMatrix", uu.specularRoughnessTexture.getTextureMatrix())), bu.setFloat("metallic", uu.baseMetalness), bu.setFloat("glossiness", 1 - uu.specularRoughness), null !== uu.baseColorTexture && (bu.setTexture("albedoSampler", uu.baseColorTexture), bu.setMatrix("albedoMatrix", uu.baseColorTexture.getTextureMatrix())), null !== uu.baseColor && bu.setColor3("albedoColor", uu.baseColor)
            }
            if (this._enableIrradiance && su.environmentTexture) {
              const uu = su.environmentTexture,
                Eu = su.postProcessRenderPipelineManager.supportedPipelines.find((uu => "IBLShadowsRenderPipeline" === uu.getClassName()));
              if (Eu) {
                const uu = Eu._getAccumulatedTexture();
                uu && (bu.setTexture("iblShadowSampler", uu), bu.setFloat2("shadowTextureSize", uu.getSize().width, uu.getSize().height))
              }
              if (bu.setMatrix("reflectionMatrix", uu.getReflectionTextureMatrix()), bu.setFloat2("vReflectionInfos", uu.level * su.iblIntensity, 0), bu.setTexture("reflectionSampler", uu), uu.irradianceTexture && (bu.setTexture("irradianceSampler", uu.irradianceTexture), uu.irradianceTexture._dominantDirection && bu.setVector3("vReflectionDominantDirection", uu.irradianceTexture._dominantDirection)), uu.sphericalPolynomial) {
                const Eu = uu.sphericalPolynomial;
                if (Eu.preScaledHarmonics) {
                  const uu = Eu.preScaledHarmonics;
                  bu.setVector3("vSphericalL00", uu.l00), bu.setVector3("vSphericalL1_1", uu.l1_1), bu.setVector3("vSphericalL10", uu.l10), bu.setVector3("vSphericalL11", uu.l11), bu.setVector3("vSphericalL2_2", uu.l2_2), bu.setVector3("vSphericalL2_1", uu.l2_1), bu.setVector3("vSphericalL20", uu.l20), bu.setVector3("vSphericalL21", uu.l21), bu.setVector3("vSphericalL22", uu.l22)
                } else bu.setFloat3("vSphericalX", Eu.x.x, Eu.x.y, Eu.x.z), bu.setFloat3("vSphericalY", Eu.y.x, Eu.y.y, Eu.y.z), bu.setFloat3("vSphericalZ", Eu.z.x, Eu.z.y, Eu.z.z), bu.setFloat3("vSphericalXX_ZZ", Eu.xx.x - Eu.zz.x, Eu.xx.y - Eu.zz.y, Eu.xx.z - Eu.zz.z), bu.setFloat3("vSphericalYY_ZZ", Eu.yy.x - Eu.zz.x, Eu.yy.y - Eu.zz.y, Eu.yy.z - Eu.zz.z), bu.setFloat3("vSphericalZZ", Eu.zz.x, Eu.zz.y, Eu.zz.z), bu.setFloat3("vSphericalXY", Eu.xy.x, Eu.xy.y, Eu.xy.z), bu.setFloat3("vSphericalYZ", Eu.yz.x, Eu.yz.y, Eu.yz.z), bu.setFloat3("vSphericalZX", Eu.zx.x, Eu.zx.y, Eu.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === Xu.getClassName()) {
                const uu = Xu;
                bu.setFloat("vSubsurfaceWeight", uu.subsurfaceWeight), uu.subsurfaceWeightTexture && (bu.setTexture("subsurfaceWeightSampler", uu.subsurfaceWeightTexture), bu.setMatrix("subsurfaceWeightMatrix", uu.subsurfaceWeightTexture.getTextureMatrix())), bu.setFloat("vTransmissionWeight", uu.transmissionWeight), uu.transmissionWeightTexture && (bu.setTexture("transmissionWeightSampler", uu.transmissionWeightTexture), bu.setMatrix("transmissionWeightMatrix", uu.transmissionWeightTexture.getTextureMatrix())), bu.setFloat("vTransmissionScatterAnisotropy", uu.transmissionScatterAnisotropy), bu.setFloat("vSubsurfaceScatterAnisotropy", uu.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, CE.f)(bu, Xu, this._scene), Eu.useBones && Eu.computeBonesUsingShaders && Eu.skeleton) {
              const uu = Eu.skeleton;
              if (uu.isUsingTextureForMatrices && bu.getUniformIndex("boneTextureInfo") > -1) {
                const ju = uu.getTransformMatrixTexture(Eu);
                bu.setTexture("boneSampler", ju), bu.setFloat2("boneTextureInfo", uu._textureWidth, uu._textureHeight)
              } else bu.setMatrices("mBones", Eu.skeleton.getTransformMatrices(Eu));
              (this._enableVelocity || this._enableVelocityLinear) && bu.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[Eu.uniqueId])
            }
            if ((0, zu.x)(Eu, bu), Eu.morphTargetManager && Eu.morphTargetManager.isUsingTextureForTargets && Eu.morphTargetManager._bind(bu), (this._enableVelocity || this._enableVelocityLinear) && (bu.setMatrix("previousWorld", this._previousTransformationMatrices[ju.uniqueId].zb), bu.setMatrix("previousViewProjection", this._previousTransformationMatrices[ju.uniqueId].viewProjection)), this._enableObjectId) {
              let uu = Eu.uniqueId;
              if (this.objectIdProvider) uu = (0, NE.h)(Eu, this.objectIdProvider);
              else if (uu > 16777215) throw new Error(`Invalid geometry object ID ${uu} for mesh "${Eu.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              bu.setFloat("objectId", uu)
            }
            if (this._enableMeshBlendTag) {
              const uu = this.meshBlendTagProvider ? (0, NE.d)(Eu, this.meshBlendTagProvider) : Eu.meshBlendingTag;
              bu.setInt("meshBlendTag", uu)
            }
            qu && Eu.hasThinInstances && bu.setMatrix("world", fu), Eu._processRendering(ju, uu, bu, Xu.fillMode, lu, qu, ((uu, Eu) => {
              uu || bu.setMatrix("world", Eu)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[ju.uniqueId].zb = fu.clone(), this._previousTransformationMatrices[ju.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), Eu.skeleton && this._copyBonesTransformationMatrices(Eu.skeleton.getTransformMatrices(Eu), this._previousBonesTransformationMatrices[ju.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (Eu, ju, su) => {
          if ((su || 0 === ju) && Eu.iG)
            for (let Uu = 0; Uu < Eu.iG.length; ++Uu) {
              const ju = Eu.iG[Uu],
                su = ju.oO(),
                Zu = ju.getRenderingMesh();
              if (!su) continue;
              const Xu = Zu._getInstancesRenderList(ju._id, !!ju.getReplacementMesh()),
                lu = uu.getCaps().instancedArrays && (null !== Xu.visibleInstances[ju._id] || Zu.hasThinInstances);
              if (!this.isReady(ju, lu)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (Eu, ju, su, Uu) => {
          let Zu;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.wO().bindAttachments(this._attachmentsFromPrePass)
          }
          if (Uu.length) {
            for (uu.setColorWrite(!1), Zu = 0; Zu < Uu.length; Zu++) Du(Uu.data[Zu]);
            uu.setColorWrite(!0)
          }
          for (Zu = 0; Zu < Eu.length; Zu++) Du(Eu.data[Zu]);
          for (uu.setDepthWrite(!1), Zu = 0; Zu < ju.length; Zu++) Du(ju.data[Zu]);
          if (this.renderTransparentMeshes)
            for (Zu = 0; Zu < su.length; Zu++) Du(su.data[Zu]);
          uu.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const uu = this._scene.wO();
        return {
          width: Math.max(1, Math.floor(uu.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(uu.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(uu, Eu) {
        for (let ju = 0; ju < uu.length; ju++) Eu[ju] = uu[ju];
        return Eu
      }
    }
    IE.ForceGLSL = !1, IE.DEPTH_TEXTURE_TYPE = 0, IE.NORMAL_TEXTURE_TYPE = 1, IE.POSITION_TEXTURE_TYPE = 2, IE.VELOCITY_TEXTURE_TYPE = 3, IE.REFLECTIVITY_TEXTURE_TYPE = 4, IE.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, IE.VELOCITY_LINEAR_TEXTURE_TYPE = 6, IE.IRRADIANCE_TEXTURE_TYPE = 7, IE.OBJECT_ID_TEXTURE_TYPE = 8, IE.MESH_BLEND_TAG_TEXTURE_TYPE = 9, IE._SceneComponentInitialization = uu => {
      throw (0, DE.h)("GeometryBufferRendererSceneComponent")
    };
    var FE = ju(37532);
    const BE = {
      effect: null,
      subMesh: null
    };

    function LE(uu) {
      if ("number" === typeof uu) return 1;
      if (uu instanceof Wu.p) return 2;
      if (uu instanceof Wu.t || uu instanceof xu.c) return 3;
      if (uu instanceof Wu.u || uu instanceof xu.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class tE {
      populateVectorFromLinkedProperties(uu) {
        const Eu = LE(uu);
        for (const ju in this.linkedProperties) {
          const uu = this.linkedProperties[ju],
            su = uu.numComponents;
          if (Eu < su || uu.targetUniformComponentOffset > Eu - su) return void(1 == su ? Pu.b.Error(`Float property ${uu.name} has an offset that is too large.`) : Pu.b.Error(`Vector${su} property ${uu.name} won't fit in Vector${Eu} or has an offset that is too large.`));
          "number" === typeof uu.value ? tE._tmpArray[uu.targetUniformComponentOffset] = uu.value : uu.value.toArray(tE._tmpArray, uu.targetUniformComponentOffset)
        }
        uu.sju(tE._tmpArray)
      }
      constructor(uu, Eu) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = uu, this.numComponents = Eu
      }
    }
    tE._tmpArray = [0, 0, 0, 0];
    class xE {
      constructor(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Zu = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = uu, this.targetUniformName = ju, this.defaultValue = Eu, this.value = Eu, this.targetUniformComponentNum = su, this.targetUniformComponentOffset = Uu, this.requiredDefine = Zu
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : LE(this.defaultValue)
      }
    }
    class TE {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(uu, Eu, ju) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = uu, this.samplerPrefix = Eu, this.textureDefine = ju
      }
    }
    class HE extends((0, YE.b)((0, OE.c)(Iu.c))) {}
    class AE extends(function(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(HE)) {}
    class nE extends((0, Tu.f)(AE)) {
      constructor(uu) {
        super(uu), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class yE extends((0, hE.e)(Au.c)) {}
    let zE = (() => {
        var uu, Eu, su, Uu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, mu, vu, Ku, Vu, iu, Iu, Fu, Bu, Lu, Tu, Au, Ru, uE, EE, jE, sE, UE, ZE, XE, lE, qE, fE, OE, YE, hE, DE, gE, ME, eE, GE, pE, dE, aE, PE, oE, kE, mE, vE, KE, VE, rE, QE, iE, WE, SE, FE, LE, HE, AE, zE, RE, uj, Ej, jj, sj, Uj, Zj, Xj, lj, qj, fj, Cj, bj, cj, Nj, Oj, Yj, hj, Dj, gj, Mj, ej, Gj, pj, wj, Jj, dj, aj, Pj, oj;
        let kj, mj, vj, Kj, Vj, rj, Qj, ij, Wj, Sj, Ij, Fj, Bj, Lj, tj, xj, Tj, Hj, Aj, nj, yj, zj, Rj, us, Es, ss, Us, Zs, Xs, ls, qs, fs, Cs, bs, cs, Ns, Os, Ys, hs, Ds, gs, Ms, es, Gs, ps, ws, ds, as, Ps, os, ks, ms, vs, Ks, Vs, rs, Qs, is, Ws, Ss, Is, Fs, Bs, Ls, ts, xs, Ts, Hs, As, ns, ys, zs, Rs, uU, EU, jU, sU, UU, ZU, XU, lU, qU, fU, CU, bU, cU, NU, OU, YU, hU, DU, gU, MU, eU, GU, pU, wU, JU, dU, aU, PU, oU, kU, mU, vU, KU = yE,
          VU = [],
          rU = [],
          QU = [],
          iU = [],
          WU = [],
          SU = [],
          IU = [],
          FU = [],
          BU = [],
          LU = [],
          tU = [],
          xU = [],
          TU = [],
          HU = [],
          AU = [],
          nU = [],
          yU = [],
          zU = [],
          RU = [],
          uZ = [],
          EZ = [],
          jZ = [],
          sZ = [],
          UZ = [],
          ZZ = [],
          XZ = [],
          lZ = [],
          qZ = [],
          fZ = [],
          CZ = [],
          bZ = [],
          cZ = [],
          NZ = [],
          OZ = [],
          YZ = [],
          hZ = [],
          DZ = [],
          gZ = [],
          MZ = [],
          eZ = [],
          GZ = [],
          pZ = [],
          wZ = [],
          JZ = [],
          dZ = [],
          aZ = [],
          PZ = [],
          oZ = [],
          kZ = [],
          mZ = [],
          vZ = [],
          KZ = [],
          VZ = [],
          rZ = [],
          QZ = [],
          iZ = [],
          WZ = [],
          SZ = [],
          IZ = [],
          FZ = [],
          BZ = [],
          LZ = [],
          tZ = [],
          xZ = [],
          TZ = [],
          HZ = [],
          AZ = [],
          nZ = [],
          yZ = [],
          zZ = [],
          RZ = [],
          uX = [],
          EX = [],
          jX = [],
          sX = [],
          UX = [],
          ZX = [],
          XX = [],
          lX = [],
          qX = [],
          fX = [],
          CX = [],
          bX = [],
          cX = [],
          NX = [],
          OX = [],
          YX = [],
          hX = [],
          DX = [],
          gX = [],
          MX = [],
          eX = [],
          GX = [],
          pX = [],
          wX = [],
          JX = [],
          dX = [],
          aX = [],
          PX = [],
          oX = [],
          kX = [],
          mX = [],
          vX = [],
          KX = [],
          VX = [],
          rX = [],
          QX = [],
          iX = [],
          WX = [],
          SX = [],
          IX = [],
          FX = [],
          BX = [],
          LX = [],
          tX = [],
          xX = [],
          TX = [],
          HX = [],
          AX = [],
          nX = [],
          yX = [],
          zX = [],
          RX = [],
          ul = [],
          El = [],
          jl = [],
          sl = [],
          Ul = [],
          Zl = [],
          Xl = [],
          ll = [],
          ql = [],
          fl = [],
          Cl = [],
          bl = [],
          cl = [],
          Nl = [],
          Ol = [],
          Yl = [],
          hl = [],
          Dl = [],
          gl = [],
          Ml = [],
          el = [],
          Gl = [],
          pl = [],
          wl = [],
          Jl = [],
          dl = [],
          al = [],
          Pl = [],
          ol = [],
          kl = [],
          ml = [],
          vl = [],
          Kl = [],
          Vl = [],
          rl = [],
          Ql = [],
          il = [],
          Wl = [],
          Sl = [],
          Il = [],
          Fl = [],
          Bl = [],
          Ll = [],
          tl = [],
          xl = [],
          Tl = [],
          Hl = [],
          Al = [],
          nl = [],
          yl = [],
          zl = [],
          Rl = [],
          uq = [],
          Eq = [],
          jq = [],
          sq = [],
          Uq = [],
          Zq = [],
          Xq = [],
          lq = [],
          qq = [],
          fq = [],
          Cq = [],
          bq = [],
          cq = [],
          Nq = [],
          Oq = [],
          Yq = [],
          hq = [],
          Dq = [],
          gq = [],
          Mq = [],
          eq = [],
          Gq = [],
          pq = [],
          wq = [],
          Jq = [],
          dq = [],
          aq = [],
          Pq = [],
          oq = [],
          kq = [];
        return uu = class extends KU {
          get baseWeight() {
            return (0, du.b)(this, Eu, "f")
          }
          set baseWeight(uu) {
            (0, du.d)(this, Eu, uu, "f")
          }
          get baseWeightTexture() {
            return (0, du.b)(this, su, "f")
          }
          set baseWeightTexture(uu) {
            (0, du.d)(this, su, uu, "f")
          }
          get baseColor() {
            return (0, du.b)(this, Uu, "f")
          }
          set baseColor(uu) {
            (0, du.d)(this, Uu, uu, "f")
          }
          get baseColorTexture() {
            return (0, du.b)(this, Xu, "f")
          }
          set baseColorTexture(uu) {
            (0, du.d)(this, Xu, uu, "f")
          }
          get baseDiffuseRoughness() {
            return (0, du.b)(this, lu, "f")
          }
          set baseDiffuseRoughness(uu) {
            (0, du.d)(this, lu, uu, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, du.b)(this, qu, "f")
          }
          set baseDiffuseRoughnessTexture(uu) {
            (0, du.d)(this, qu, uu, "f")
          }
          get baseMetalness() {
            return (0, du.b)(this, fu, "f")
          }
          set baseMetalness(uu) {
            (0, du.d)(this, fu, uu, "f")
          }
          get baseMetalnessTexture() {
            return (0, du.b)(this, Cu, "f")
          }
          set baseMetalnessTexture(uu) {
            (0, du.d)(this, Cu, uu, "f")
          }
          get specularWeight() {
            return (0, du.b)(this, bu, "f")
          }
          set specularWeight(uu) {
            (0, du.d)(this, bu, uu, "f")
          }
          get specularWeightTexture() {
            return (0, du.b)(this, cu, "f")
          }
          set specularWeightTexture(uu) {
            (0, du.d)(this, cu, uu, "f")
          }
          get specularColor() {
            return (0, du.b)(this, Nu, "f")
          }
          set specularColor(uu) {
            (0, du.d)(this, Nu, uu, "f")
          }
          get specularColorTexture() {
            return (0, du.b)(this, Ou, "f")
          }
          set specularColorTexture(uu) {
            (0, du.d)(this, Ou, uu, "f")
          }
          get specularRoughness() {
            return (0, du.b)(this, Yu, "f")
          }
          set specularRoughness(uu) {
            (0, du.d)(this, Yu, uu, "f")
          }
          get specularRoughnessTexture() {
            return (0, du.b)(this, hu, "f")
          }
          set specularRoughnessTexture(uu) {
            (0, du.d)(this, hu, uu, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, du.b)(this, Du, "f")
          }
          set specularRoughnessAnisotropy(uu) {
            (0, du.d)(this, Du, uu, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, du.b)(this, gu, "f")
          }
          set specularRoughnessAnisotropyTexture(uu) {
            (0, du.d)(this, gu, uu, "f")
          }
          get specularIor() {
            return (0, du.b)(this, Mu, "f")
          }
          set specularIor(uu) {
            (0, du.d)(this, Mu, uu, "f")
          }
          get transmissionWeight() {
            return (0, du.b)(this, eu, "f")
          }
          set transmissionWeight(uu) {
            (0, du.d)(this, eu, uu, "f")
          }
          get transmissionWeightTexture() {
            return (0, du.b)(this, Gu, "f")
          }
          set transmissionWeightTexture(uu) {
            (0, du.d)(this, Gu, uu, "f")
          }
          get transmissionColor() {
            return (0, du.b)(this, pu, "f")
          }
          set transmissionColor(uu) {
            (0, du.d)(this, pu, uu, "f")
          }
          get transmissionColorTexture() {
            return (0, du.b)(this, wu, "f")
          }
          set transmissionColorTexture(uu) {
            (0, du.d)(this, wu, uu, "f")
          }
          get transmissionDepth() {
            return (0, du.b)(this, Ju, "f")
          }
          set transmissionDepth(uu) {
            (0, du.d)(this, Ju, uu, "f")
          }
          get transmissionDepthTexture() {
            return (0, du.b)(this, mu, "f")
          }
          set transmissionDepthTexture(uu) {
            (0, du.d)(this, mu, uu, "f")
          }
          get transmissionScatter() {
            return (0, du.b)(this, vu, "f")
          }
          set transmissionScatter(uu) {
            (0, du.d)(this, vu, uu, "f")
          }
          get transmissionScatterTexture() {
            return (0, du.b)(this, Ku, "f")
          }
          set transmissionScatterTexture(uu) {
            (0, du.d)(this, Ku, uu, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, du.b)(this, Vu, "f")
          }
          set transmissionScatterAnisotropy(uu) {
            (0, du.d)(this, Vu, uu, "f")
          }
          get transmissionDispersionScale() {
            return (0, du.b)(this, iu, "f")
          }
          set transmissionDispersionScale(uu) {
            (0, du.d)(this, iu, uu, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, du.b)(this, Iu, "f")
          }
          set transmissionDispersionScaleTexture(uu) {
            (0, du.d)(this, Iu, uu, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, du.b)(this, Fu, "f")
          }
          set transmissionDispersionAbbeNumber(uu) {
            (0, du.d)(this, Fu, uu, "f")
          }
          get subsurfaceWeight() {
            return (0, du.b)(this, Bu, "f")
          }
          set subsurfaceWeight(uu) {
            (0, du.d)(this, Bu, uu, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, du.b)(this, Lu, "f")
          }
          set subsurfaceWeightTexture(uu) {
            (0, du.d)(this, Lu, uu, "f")
          }
          get subsurfaceColor() {
            return (0, du.b)(this, Tu, "f")
          }
          set subsurfaceColor(uu) {
            (0, du.d)(this, Tu, uu, "f")
          }
          get subsurfaceColorTexture() {
            return (0, du.b)(this, Au, "f")
          }
          set subsurfaceColorTexture(uu) {
            (0, du.d)(this, Au, uu, "f")
          }
          get subsurfaceRadius() {
            return (0, du.b)(this, Ru, "f")
          }
          set subsurfaceRadius(uu) {
            (0, du.d)(this, Ru, uu, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, du.b)(this, uE, "f")
          }
          set subsurfaceRadiusScale(uu) {
            (0, du.d)(this, uE, uu, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, du.b)(this, EE, "f")
          }
          set subsurfaceRadiusScaleTexture(uu) {
            (0, du.d)(this, EE, uu, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, du.b)(this, jE, "f")
          }
          set subsurfaceScatterAnisotropy(uu) {
            (0, du.d)(this, jE, uu, "f")
          }
          get coatWeight() {
            return (0, du.b)(this, sE, "f")
          }
          set coatWeight(uu) {
            (0, du.d)(this, sE, uu, "f")
          }
          get coatWeightTexture() {
            return (0, du.b)(this, UE, "f")
          }
          set coatWeightTexture(uu) {
            (0, du.d)(this, UE, uu, "f")
          }
          get coatColor() {
            return (0, du.b)(this, ZE, "f")
          }
          set coatColor(uu) {
            (0, du.d)(this, ZE, uu, "f")
          }
          get coatColorTexture() {
            return (0, du.b)(this, XE, "f")
          }
          set coatColorTexture(uu) {
            (0, du.d)(this, XE, uu, "f")
          }
          get coatRoughness() {
            return (0, du.b)(this, lE, "f")
          }
          set coatRoughness(uu) {
            (0, du.d)(this, lE, uu, "f")
          }
          get coatRoughnessTexture() {
            return (0, du.b)(this, qE, "f")
          }
          set coatRoughnessTexture(uu) {
            (0, du.d)(this, qE, uu, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, du.b)(this, fE, "f")
          }
          set coatRoughnessAnisotropy(uu) {
            (0, du.d)(this, fE, uu, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, du.b)(this, OE, "f")
          }
          set coatRoughnessAnisotropyTexture(uu) {
            (0, du.d)(this, OE, uu, "f")
          }
          get coatIor() {
            return (0, du.b)(this, YE, "f")
          }
          set coatIor(uu) {
            (0, du.d)(this, YE, uu, "f")
          }
          get coatDarkening() {
            return (0, du.b)(this, hE, "f")
          }
          set coatDarkening(uu) {
            (0, du.d)(this, hE, uu, "f")
          }
          get coatDarkeningTexture() {
            return (0, du.b)(this, DE, "f")
          }
          set coatDarkeningTexture(uu) {
            (0, du.d)(this, DE, uu, "f")
          }
          get fuzzWeight() {
            return (0, du.b)(this, gE, "f")
          }
          set fuzzWeight(uu) {
            (0, du.d)(this, gE, uu, "f")
          }
          get fuzzWeightTexture() {
            return (0, du.b)(this, ME, "f")
          }
          set fuzzWeightTexture(uu) {
            (0, du.d)(this, ME, uu, "f")
          }
          get fuzzColor() {
            return (0, du.b)(this, eE, "f")
          }
          set fuzzColor(uu) {
            (0, du.d)(this, eE, uu, "f")
          }
          get fuzzColorTexture() {
            return (0, du.b)(this, GE, "f")
          }
          set fuzzColorTexture(uu) {
            (0, du.d)(this, GE, uu, "f")
          }
          get fuzzRoughness() {
            return (0, du.b)(this, pE, "f")
          }
          set fuzzRoughness(uu) {
            (0, du.d)(this, pE, uu, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, du.b)(this, dE, "f")
          }
          set fuzzRoughnessTexture(uu) {
            (0, du.d)(this, dE, uu, "f")
          }
          get geometryThinWalled() {
            return (0, du.b)(this, aE, "f")
          }
          set geometryThinWalled(uu) {
            (0, du.d)(this, aE, uu, "f")
          }
          get geometryNormalTexture() {
            return (0, du.b)(this, PE, "f")
          }
          set geometryNormalTexture(uu) {
            (0, du.d)(this, PE, uu, "f")
          }
          get geometryTangent() {
            return (0, du.b)(this, oE, "f")
          }
          set geometryTangent(uu) {
            (0, du.d)(this, oE, uu, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(uu) {
            this.geometryTangent = new Wu.p(Math.cos(uu), Math.sin(uu))
          }
          get geometryTangentTexture() {
            return (0, du.b)(this, kE, "f")
          }
          set geometryTangentTexture(uu) {
            (0, du.d)(this, kE, uu, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, du.b)(this, mE, "f")
          }
          set geometryCoatNormalTexture(uu) {
            (0, du.d)(this, mE, uu, "f")
          }
          get geometryCoatTangent() {
            return (0, du.b)(this, vE, "f")
          }
          set geometryCoatTangent(uu) {
            (0, du.d)(this, vE, uu, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(uu) {
            this.geometryCoatTangent = new Wu.p(Math.cos(uu), Math.sin(uu))
          }
          get geometryCoatTangentTexture() {
            return (0, du.b)(this, KE, "f")
          }
          set geometryCoatTangentTexture(uu) {
            (0, du.d)(this, KE, uu, "f")
          }
          get geometryOpacity() {
            return (0, du.b)(this, VE, "f")
          }
          set geometryOpacity(uu) {
            (0, du.d)(this, VE, uu, "f")
          }
          get geometryOpacityTexture() {
            return (0, du.b)(this, rE, "f")
          }
          set geometryOpacityTexture(uu) {
            (0, du.d)(this, rE, uu, "f")
          }
          get geometryThickness() {
            return (0, du.b)(this, QE, "f")
          }
          set geometryThickness(uu) {
            (0, du.d)(this, QE, uu, "f")
          }
          get geometryThicknessTexture() {
            return (0, du.b)(this, iE, "f")
          }
          set geometryThicknessTexture(uu) {
            (0, du.d)(this, iE, uu, "f")
          }
          get emissionLuminance() {
            return (0, du.b)(this, WE, "f")
          }
          set emissionLuminance(uu) {
            (0, du.d)(this, WE, uu, "f")
          }
          get emissionColor() {
            return (0, du.b)(this, SE, "f")
          }
          set emissionColor(uu) {
            (0, du.d)(this, SE, uu, "f")
          }
          get emissionColorTexture() {
            return (0, du.b)(this, FE, "f")
          }
          set emissionColorTexture(uu) {
            (0, du.d)(this, FE, uu, "f")
          }
          get thinFilmWeight() {
            return (0, du.b)(this, LE, "f")
          }
          set thinFilmWeight(uu) {
            (0, du.d)(this, LE, uu, "f")
          }
          get thinFilmWeightTexture() {
            return (0, du.b)(this, HE, "f")
          }
          set thinFilmWeightTexture(uu) {
            (0, du.d)(this, HE, uu, "f")
          }
          get thinFilmThickness() {
            return (0, du.b)(this, AE, "f")
          }
          set thinFilmThickness(uu) {
            (0, du.d)(this, AE, uu, "f")
          }
          get thinFilmThicknessMin() {
            return (0, du.b)(this, zE, "f")
          }
          set thinFilmThicknessMin(uu) {
            (0, du.d)(this, zE, uu, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, du.b)(this, RE, "f")
          }
          set thinFilmThicknessTexture(uu) {
            (0, du.d)(this, RE, uu, "f")
          }
          get thinFilmIor() {
            return (0, du.b)(this, uj, "f")
          }
          set thinFilmIor(uu) {
            (0, du.d)(this, uj, uu, "f")
          }
          get ambientOcclusionTexture() {
            return (0, du.b)(this, Ej, "f")
          }
          set ambientOcclusionTexture(uu) {
            (0, du.d)(this, Ej, uu, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(uu) {
            this._sssQuality !== uu && (this._sssQuality = uu, this.tEu(1))
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
            return (0, du.b)(this, jj, "f")
          }
          set directIntensity(uu) {
            (0, du.d)(this, jj, uu, "f")
          }
          get environmentIntensity() {
            return (0, du.b)(this, sj, "f")
          }
          set environmentIntensity(uu) {
            (0, du.d)(this, sj, uu, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, du.b)(this, Uj, "f")
          }
          set useSpecularWeightFromTextureAlpha(uu) {
            (0, du.d)(this, Uj, uu, "f")
          }
          get forceAlphaTest() {
            return (0, du.b)(this, Zj, "f")
          }
          set forceAlphaTest(uu) {
            (0, du.d)(this, Zj, uu, "f")
          }
          get alphaCutOff() {
            return (0, du.b)(this, Xj, "f")
          }
          set alphaCutOff(uu) {
            (0, du.d)(this, Xj, uu, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, du.b)(this, lj, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(uu) {
            (0, du.d)(this, lj, uu, "f")
          }
          get useAmbientInGrayScale() {
            return (0, du.b)(this, qj, "f")
          }
          set useAmbientInGrayScale(uu) {
            (0, du.d)(this, qj, uu, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(xu.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === Zu.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(uu) {
            uu !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? Zu.b.LIGHTFALLOFF_PHYSICAL : Zu.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === Zu.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(uu) {
            uu !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? Zu.b.LIGHTFALLOFF_GLTF : Zu.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, du.b)(this, fj, "f")
          }
          set useObjectSpaceNormalMap(uu) {
            (0, du.d)(this, fj, uu, "f")
          }
          get useParallax() {
            return (0, du.b)(this, Cj, "f")
          }
          set useParallax(uu) {
            (0, du.d)(this, Cj, uu, "f")
          }
          get useParallaxOcclusion() {
            return (0, du.b)(this, bj, "f")
          }
          set useParallaxOcclusion(uu) {
            (0, du.d)(this, bj, uu, "f")
          }
          get parallaxScaleBias() {
            return (0, du.b)(this, cj, "f")
          }
          set parallaxScaleBias(uu) {
            (0, du.d)(this, cj, uu, "f")
          }
          get disableLighting() {
            return (0, du.b)(this, Nj, "f")
          }
          set disableLighting(uu) {
            (0, du.d)(this, Nj, uu, "f")
          }
          get forceIrradianceInFragment() {
            return (0, du.b)(this, Oj, "f")
          }
          set forceIrradianceInFragment(uu) {
            (0, du.d)(this, Oj, uu, "f")
          }
          get maxSimultaneousLights() {
            return (0, du.b)(this, Yj, "f")
          }
          set maxSimultaneousLights(uu) {
            (0, du.d)(this, Yj, uu, "f")
          }
          get invertNormalMapX() {
            return (0, du.b)(this, hj, "f")
          }
          set invertNormalMapX(uu) {
            (0, du.d)(this, hj, uu, "f")
          }
          get invertNormalMapY() {
            return (0, du.b)(this, Dj, "f")
          }
          set invertNormalMapY(uu) {
            (0, du.d)(this, Dj, uu, "f")
          }
          get twoSidedLighting() {
            return (0, du.b)(this, gj, "f")
          }
          set twoSidedLighting(uu) {
            (0, du.d)(this, gj, uu, "f")
          }
          get useAlphaFresnel() {
            return (0, du.b)(this, Mj, "f")
          }
          set useAlphaFresnel(uu) {
            (0, du.d)(this, Mj, uu, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, du.b)(this, ej, "f")
          }
          set useLinearAlphaFresnel(uu) {
            (0, du.d)(this, ej, uu, "f")
          }
          get environmentBRDFTexture() {
            return (0, du.b)(this, Gj, "f")
          }
          set environmentBRDFTexture(uu) {
            (0, du.d)(this, Gj, uu, "f")
          }
          get forceNormalForward() {
            return (0, du.b)(this, pj, "f")
          }
          set forceNormalForward(uu) {
            (0, du.d)(this, pj, uu, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, du.b)(this, wj, "f")
          }
          set enableSpecularAntiAliasing(uu) {
            (0, du.d)(this, wj, uu, "f")
          }
          get useHorizonOcclusion() {
            return (0, du.b)(this, Jj, "f")
          }
          set useHorizonOcclusion(uu) {
            (0, du.d)(this, Jj, uu, "f")
          }
          get useRadianceOcclusion() {
            return (0, du.b)(this, dj, "f")
          }
          set useRadianceOcclusion(uu) {
            (0, du.d)(this, dj, uu, "f")
          }
          get unlit() {
            return (0, du.b)(this, aj, "f")
          }
          set unlit(uu) {
            (0, du.d)(this, aj, uu, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, du.b)(this, Pj, "f")
          }
          set applyDecalMapAfterDetailMap(uu) {
            (0, du.d)(this, Pj, uu, "f")
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
            this._refractionHighQualityBlur !== uu && (this._refractionHighQualityBlur = uu, this.tEu(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(uu) {
            this._realTimeFiltering = uu, this.tEu(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(uu) {
            this._realTimeFilteringQuality = uu, this.tEu(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(uu) {
            this._fuzzSampleNumber = uu, this.tEu(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, du.b)(this, oj, "f")
          }
          set debugMode(uu) {
            (0, du.d)(this, oj, uu, "f")
          }
          constructor(ju, au) {
            super(ju, au, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), Eu.set(this, ((0, du.g)(this, VU), (0, du.g)(this, rU, void 0))), this._baseWeight = ((0, du.g)(this, QU), new xE("base_weight", 1, "vBaseWeight", 1)), su.set(this, (0, du.g)(this, iU, void 0)), this._baseWeightTexture = ((0, du.g)(this, WU), new TE("base_weight", "baseWeight", "BASE_WEIGHT")), Uu.set(this, (0, du.g)(this, SU, void 0)), this._baseColor = ((0, du.g)(this, IU), new xE("base_color", xu.c.White(), "vBaseColor", 4)), Xu.set(this, (0, du.g)(this, FU, void 0)), this._baseColorTexture = ((0, du.g)(this, BU), new TE("base_color", "baseColor", "BASE_COLOR")), lu.set(this, (0, du.g)(this, LU, void 0)), this._baseDiffuseRoughness = ((0, du.g)(this, tU), new xE("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), qu.set(this, (0, du.g)(this, xU, void 0)), this._baseDiffuseRoughnessTexture = ((0, du.g)(this, TU), new TE("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), fu.set(this, (0, du.g)(this, HU, void 0)), this._baseMetalness = ((0, du.g)(this, AU), new xE("base_metalness", 0, "vReflectanceInfo", 4, 0)), Cu.set(this, (0, du.g)(this, nU, void 0)), this._baseMetalnessTexture = ((0, du.g)(this, yU), new TE("base_metalness", "baseMetalness", "BASE_METALNESS")), bu.set(this, (0, du.g)(this, zU, void 0)), this._specularWeight = ((0, du.g)(this, RU), new xE("specular_weight", 1, "vReflectanceInfo", 4, 3)), cu.set(this, (0, du.g)(this, uZ, void 0)), this._specularWeightTexture = ((0, du.g)(this, EZ), new TE("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), Nu.set(this, (0, du.g)(this, jZ, void 0)), this._specularColor = ((0, du.g)(this, sZ), new xE("specular_color", xu.c.White(), "vSpecularColor", 4)), Ou.set(this, (0, du.g)(this, UZ, void 0)), this._specularColorTexture = ((0, du.g)(this, ZZ), new TE("specular_color", "specularColor", "SPECULAR_COLOR")), Yu.set(this, (0, du.g)(this, XZ, void 0)), this._specularRoughness = ((0, du.g)(this, lZ), new xE("specular_roughness", .3, "vReflectanceInfo", 4, 1)), hu.set(this, (0, du.g)(this, qZ, void 0)), this._specularRoughnessTexture = ((0, du.g)(this, fZ), new TE("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), Du.set(this, (0, du.g)(this, CZ, void 0)), this._specularRoughnessAnisotropy = ((0, du.g)(this, bZ), new xE("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), gu.set(this, (0, du.g)(this, cZ, void 0)), this._specularRoughnessAnisotropyTexture = ((0, du.g)(this, NZ), new TE("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), Mu.set(this, (0, du.g)(this, OZ, void 0)), this._specularIor = ((0, du.g)(this, YZ), new xE("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), eu.set(this, (0, du.g)(this, hZ, void 0)), this._transmissionWeight = ((0, du.g)(this, DZ), new xE("transmission_weight", 0, "vTransmissionWeight", 1)), Gu.set(this, (0, du.g)(this, gZ, void 0)), this._transmissionWeightTexture = ((0, du.g)(this, MZ), new TE("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), pu.set(this, (0, du.g)(this, eZ, void 0)), this._transmissionColor = ((0, du.g)(this, GZ), new xE("transmission_color", xu.c.White(), "vTransmissionColor", 3, 0)), wu.set(this, (0, du.g)(this, pZ, void 0)), this._transmissionColorTexture = ((0, du.g)(this, wZ), new TE("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), Ju.set(this, (0, du.g)(this, JZ, void 0)), this._transmissionDepth = ((0, du.g)(this, dZ), new xE("transmission_depth", 0, "vTransmissionDepth", 1, 0)), mu.set(this, (0, du.g)(this, aZ, void 0)), this._transmissionDepthTexture = ((0, du.g)(this, PZ), new TE("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), vu.set(this, (0, du.g)(this, oZ, void 0)), this._transmissionScatter = ((0, du.g)(this, kZ), new xE("transmission_scatter", xu.c.Black(), "vTransmissionScatter", 3, 0)), Ku.set(this, (0, du.g)(this, mZ, void 0)), this._transmissionScatterTexture = ((0, du.g)(this, vZ), new TE("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), Vu.set(this, (0, du.g)(this, KZ, void 0)), this._transmissionScatterAnisotropy = ((0, du.g)(this, VZ), new xE("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), iu.set(this, (0, du.g)(this, rZ, void 0)), this._transmissionDispersionScale = ((0, du.g)(this, QZ), new xE("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), Iu.set(this, (0, du.g)(this, iZ, void 0)), this._transmissionDispersionScaleTexture = ((0, du.g)(this, WZ), new TE("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), Fu.set(this, (0, du.g)(this, SZ, void 0)), this._transmissionDispersionAbbeNumber = ((0, du.g)(this, IZ), new xE("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), Bu.set(this, (0, du.g)(this, FZ, void 0)), this._subsurfaceWeight = ((0, du.g)(this, BZ), new xE("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), Lu.set(this, (0, du.g)(this, LZ, void 0)), this._subsurfaceWeightTexture = ((0, du.g)(this, tZ), new TE("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), Tu.set(this, (0, du.g)(this, xZ, void 0)), this._subsurfaceColor = ((0, du.g)(this, TZ), new xE("subsurface_color", new xu.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), Au.set(this, (0, du.g)(this, HZ, void 0)), this._subsurfaceColorTexture = ((0, du.g)(this, AZ), new TE("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), Ru.set(this, (0, du.g)(this, nZ, void 0)), this._subsurfaceRadius = ((0, du.g)(this, yZ), new xE("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), uE.set(this, (0, du.g)(this, zZ, void 0)), this._subsurfaceRadiusScale = ((0, du.g)(this, RZ), new xE("subsurface_radius_scale", new xu.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), EE.set(this, (0, du.g)(this, uX, void 0)), this._subsurfaceRadiusScaleTexture = ((0, du.g)(this, EX), new TE("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), jE.set(this, (0, du.g)(this, jX, void 0)), this._subsurfaceScatterAnisotropy = ((0, du.g)(this, sX), new xE("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), sE.set(this, (0, du.g)(this, UX, void 0)), this._coatWeight = ((0, du.g)(this, ZX), new xE("coat_weight", 0, "vCoatWeight", 1, 0)), UE.set(this, (0, du.g)(this, XX, void 0)), this._coatWeightTexture = ((0, du.g)(this, lX), new TE("coat_weight", "coatWeight", "COAT_WEIGHT")), ZE.set(this, (0, du.g)(this, qX, void 0)), this._coatColor = ((0, du.g)(this, fX), new xE("coat_color", xu.c.White(), "vCoatColor", 3, 0)), XE.set(this, (0, du.g)(this, CX, void 0)), this._coatColorTexture = ((0, du.g)(this, bX), new TE("coat_color", "coatColor", "COAT_COLOR")), lE.set(this, (0, du.g)(this, cX, void 0)), this._coatRoughness = ((0, du.g)(this, NX), new xE("coat_roughness", 0, "vCoatRoughness", 1, 0)), qE.set(this, (0, du.g)(this, OX, void 0)), this._coatRoughnessTexture = ((0, du.g)(this, YX), new TE("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), fE.set(this, (0, du.g)(this, hX, void 0)), this._coatRoughnessAnisotropy = ((0, du.g)(this, DX), new xE("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), OE.set(this, (0, du.g)(this, gX, void 0)), this._coatRoughnessAnisotropyTexture = ((0, du.g)(this, MX), new TE("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), YE.set(this, (0, du.g)(this, eX, void 0)), this._coatIor = ((0, du.g)(this, GX), new xE("coat_ior", 1.5, "vCoatIor", 1, 0)), hE.set(this, (0, du.g)(this, pX, void 0)), this._coatDarkening = ((0, du.g)(this, wX), new xE("coat_darkening", 1, "vCoatDarkening", 1, 0)), DE.set(this, (0, du.g)(this, JX, void 0)), this._coatDarkeningTexture = ((0, du.g)(this, dX), new TE("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, gE.set(this, (0, du.g)(this, aX, void 0)), this._fuzzWeight = ((0, du.g)(this, PX), new xE("fuzz_weight", 0, "vFuzzWeight", 1, 0)), ME.set(this, (0, du.g)(this, oX, void 0)), this._fuzzWeightTexture = ((0, du.g)(this, kX), new TE("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), eE.set(this, (0, du.g)(this, mX, void 0)), this._fuzzColor = ((0, du.g)(this, vX), new xE("fuzz_color", xu.c.White(), "vFuzzColor", 3, 0)), GE.set(this, (0, du.g)(this, KX, void 0)), this._fuzzColorTexture = ((0, du.g)(this, VX), new TE("fuzz_color", "fuzzColor", "FUZZ_COLOR")), pE.set(this, (0, du.g)(this, rX, void 0)), this._fuzzRoughness = ((0, du.g)(this, QX), new xE("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), dE.set(this, (0, du.g)(this, iX, void 0)), this._fuzzRoughnessTexture = ((0, du.g)(this, WX), new TE("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), aE.set(this, (0, du.g)(this, SX, void 0)), this._geometryThinWalled = ((0, du.g)(this, IX), new xE("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), PE.set(this, (0, du.g)(this, FX, void 0)), this._geometryNormalTexture = ((0, du.g)(this, BX), new TE("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), oE.set(this, (0, du.g)(this, LX, void 0)), this._geometryTangent = ((0, du.g)(this, tX), new xE("geometry_tangent", new Wu.p(1, 0), "vSpecularAnisotropy", 3, 0)), kE.set(this, (0, du.g)(this, xX, void 0)), this._geometryTangentTexture = ((0, du.g)(this, TX), new TE("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), mE.set(this, (0, du.g)(this, HX, void 0)), this._geometryCoatNormalTexture = ((0, du.g)(this, AX), new TE("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), vE.set(this, (0, du.g)(this, nX, void 0)), this._geometryCoatTangent = ((0, du.g)(this, yX), new xE("geometry_coat_tangent", new Wu.p(1, 0), "vGeometryCoatTangent", 2, 0)), KE.set(this, (0, du.g)(this, zX, void 0)), this._geometryCoatTangentTexture = ((0, du.g)(this, RX), new TE("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), VE.set(this, (0, du.g)(this, ul, void 0)), this._geometryOpacity = ((0, du.g)(this, El), new xE("geometry_opacity", 1, "vBaseColor", 4, 3)), rE.set(this, (0, du.g)(this, jl, void 0)), this._geometryOpacityTexture = ((0, du.g)(this, sl), new TE("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), QE.set(this, (0, du.g)(this, Ul, void 0)), this._geometryThickness = ((0, du.g)(this, Zl), new xE("geometry_thickness", 0, "vGeometryThickness", 1, 0)), iE.set(this, (0, du.g)(this, Xl, void 0)), this._geometryThicknessTexture = ((0, du.g)(this, ll), new TE("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), WE.set(this, (0, du.g)(this, ql, void 0)), this._emissionLuminance = ((0, du.g)(this, fl), new xE("emission_luminance", 1, "vLightingIntensity", 4, 1)), SE.set(this, (0, du.g)(this, Cl, void 0)), this._emissionColor = ((0, du.g)(this, bl), new xE("emission_color", xu.c.Black(), "vEmissionColor", 3)), FE.set(this, (0, du.g)(this, cl, void 0)), this._emissionColorTexture = ((0, du.g)(this, Nl), new TE("emission_color", "emissionColor", "EMISSION_COLOR")), LE.set(this, (0, du.g)(this, Ol, void 0)), this._thinFilmWeight = ((0, du.g)(this, Yl), new xE("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), HE.set(this, (0, du.g)(this, hl, void 0)), this._thinFilmWeightTexture = ((0, du.g)(this, Dl), new TE("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), AE.set(this, (0, du.g)(this, gl, void 0)), this._thinFilmThickness = ((0, du.g)(this, Ml), new xE("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), zE.set(this, (0, du.g)(this, el, void 0)), this._thinFilmThicknessMin = ((0, du.g)(this, Gl), new xE("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), RE.set(this, (0, du.g)(this, pl, void 0)), this._thinFilmThicknessTexture = ((0, du.g)(this, wl), new TE("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), uj.set(this, (0, du.g)(this, Jl, void 0)), this._thinFilmIor = ((0, du.g)(this, dl), new xE("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Ej.set(this, (0, du.g)(this, al, void 0)), this._ambientOcclusionTexture = ((0, du.g)(this, Pl), new TE("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = uu.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, jj.set(this, (0, du.g)(this, ol, 1)), sj.set(this, ((0, du.g)(this, kl), (0, du.g)(this, ml, 1))), Uj.set(this, ((0, du.g)(this, vl), (0, du.g)(this, Kl, !1))), Zj.set(this, ((0, du.g)(this, Vl), (0, du.g)(this, rl, !1))), Xj.set(this, ((0, du.g)(this, Ql), (0, du.g)(this, il, .4))), lj.set(this, ((0, du.g)(this, Wl), (0, du.g)(this, Sl, !1))), qj.set(this, ((0, du.g)(this, Il), (0, du.g)(this, Fl, !1))), fj.set(this, ((0, du.g)(this, Bl), (0, du.g)(this, Ll, !1))), Cj.set(this, ((0, du.g)(this, tl), (0, du.g)(this, xl, !1))), bj.set(this, ((0, du.g)(this, Tl), (0, du.g)(this, Hl, !1))), cj.set(this, ((0, du.g)(this, Al), (0, du.g)(this, nl, .05))), Nj.set(this, ((0, du.g)(this, yl), (0, du.g)(this, zl, !1))), Oj.set(this, ((0, du.g)(this, Rl), (0, du.g)(this, uq, !1))), Yj.set(this, ((0, du.g)(this, Eq), (0, du.g)(this, jq, 4))), hj.set(this, ((0, du.g)(this, sq), (0, du.g)(this, Uq, !1))), Dj.set(this, ((0, du.g)(this, Zq), (0, du.g)(this, Xq, !1))), gj.set(this, ((0, du.g)(this, lq), (0, du.g)(this, qq, !1))), Mj.set(this, ((0, du.g)(this, fq), (0, du.g)(this, Cq, !1))), ej.set(this, ((0, du.g)(this, bq), (0, du.g)(this, cq, !1))), Gj.set(this, ((0, du.g)(this, Nq), (0, du.g)(this, Oq, null))), pj.set(this, ((0, du.g)(this, Yq), (0, du.g)(this, hq, !1))), wj.set(this, ((0, du.g)(this, Dq), (0, du.g)(this, gq, !1))), Jj.set(this, ((0, du.g)(this, Mq), (0, du.g)(this, eq, !0))), dj.set(this, ((0, du.g)(this, Gq), (0, du.g)(this, pq, !0))), aj.set(this, ((0, du.g)(this, wq), (0, du.g)(this, Jq, !1))), Pj.set(this, ((0, du.g)(this, dq), (0, du.g)(this, aq, !1))), this._lightingInfos = ((0, du.g)(this, Pq), new Wu.u(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = Zu.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new ou.f(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, oj.set(this, (0, du.g)(this, oq, 0)), this.debugLimit = ((0, du.g)(this, kq), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = Zu.b.MATERIAL_OPAQUE, this.hV() && !this.hV()?.wO().isWebGPU && this.hV().wO().uY < 2 && Pu.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), uu._noiseTextures[this.hV().uniqueId] || (uu._noiseTextures[this.hV().uniqueId] = new ku.g(JE.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.hV(), !1, !0, 1), this.hV().wV.addOnce((() => {
              uu._noiseTextures[this.hV().uniqueId]?.dispose(), delete uu._noiseTextures[this.hV().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), nu.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), nu.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = Qu(this.hV()), this._environmentFuzzBRDFTexture = ru(this.hV()), this.prePassConfiguration = new tu.e, this._propertyList = {};
            for (const uu of Object.getOwnPropertyNames(this)) {
              const Eu = this[uu];
              Eu instanceof xE && (this._propertyList[uu] = Eu)
            }
            Object.keys(this._propertyList).forEach((uu => {
              const Eu = this._propertyList[uu];
              let ju = this._uniformsList[Eu.targetUniformName];
              ju ? ju.numComponents !== Eu.targetUniformComponentNum ? Pu.b.Error(`Uniform ${Eu.targetUniformName} already exists of size ${ju.numComponents}, but trying to set it to ${Eu.targetUniformComponentNum}.`) : ju.requiredDefine !== Eu.requiredDefine && (ju.requiredDefine = void 0) : (ju = new tE(Eu.targetUniformName, Eu.targetUniformComponentNum), ju.requiredDefine = Eu.requiredDefine, this._uniformsList[Eu.targetUniformName] = ju), "" === ju.firstLinkedKey && (ju.firstLinkedKey = Eu.name), ju.linkedProperties[Eu.name] = Eu
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const uu of Object.getOwnPropertyNames(this)) {
              const Eu = this[uu];
              Eu instanceof TE && (this._samplersList[uu] = Eu)
            }
            for (const uu in this._samplersList) {
              const Eu = this._samplersList[uu].textureDefine;
              this._samplerDefines[Eu] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[Eu + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[Eu + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(nu.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(nu.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== Zu.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(Eu) {
            let ju = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Uu = wE.e.Clone((() => new uu(Eu, this.hV())), this, {
              cloneTexturesOnlyOnce: ju
            });
            return Uu.id = Eu, Uu.name = Eu, this.stencil.copyTo(Uu.stencil), this._clonePlugins(Uu, su), Uu
          }
          serialize() {
            const uu = super.serialize();
            return uu.customType = "BABYLON.OpenPBRMaterial", uu
          }
          static Parse(Eu, ju, su) {
            const Uu = wE.e.Parse((() => new uu(Eu.name, ju)), Eu, ju, su);
            return Eu.stencil && Uu.stencil.parse(Eu.stencil, ju, su), Zu.b._ParsePlugins(Eu, Uu, ju, su), Uu
          }
          forceCompilation(uu, Eu, ju) {
            const su = {
              clipPlane: !1,
              useInstances: !1,
              ...ju
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const ju = new nE({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                Uu = this._prepareEffect(uu, uu, ju, void 0, void 0, su.useInstances, su.clipPlane);
              this._onEffectCreatedObservable && (BE.effect = Uu, BE.subMesh = null, this._onEffectCreatedObservable.notifyObservers(BE)), Uu.isReady() ? Eu && Eu(this) : Uu.onCompileObservable.add((() => {
                Eu && Eu(this)
              }))
            })()
          }
          isReadyForSubMesh(Eu, ju, su) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Uu = ju._drawWrapper;
            if (Uu.effect && this.isFrozen && Uu._wasPreviouslyReady && Uu._wasPreviouslyUsingInstances === su) return !0;
            ju.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ju.materialDefines = new nE({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const Zu = ju.materialDefines;
            if (this._isReadyForSubMesh(ju)) return !0;
            const Xu = this.hV(),
              lu = Xu.wO();
            if (Zu._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xu.texturesEnabled)) {
              for (const uu in this._samplersList) {
                const Eu = this._samplersList[uu];
                if (Eu.value && !Eu.value.isReadyOrNotBlocking()) return !1
              }
              const Eu = this._getRadianceTexture();
              if (Eu && nu.d.ReflectionTextureEnabled) {
                if (!Eu.isReadyOrNotBlocking()) return !1;
                if (Eu.irradianceTexture) {
                  if (!Eu.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!Eu.sphericalPolynomial && Eu.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && nu.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && nu.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && nu.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (uu._noiseTextures[Xu.uniqueId] && !uu._noiseTextures[Xu.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Zu, this._eventInfo.subMesh = ju, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Zu._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (Zu.AREALIGHTUSED)
              for (let uu = 0; uu < Eu.lightSources.length; uu++)
                if (!Eu.lightSources[uu]._isReady()) return !1;
            if (lu.getCaps().standardDerivatives || Eu.isVerticesDataPresent(Su.j.NormalKind) || (Eu.createNormals(!0), Pu.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + Eu.name)), !(0, zu.d)(Xu, Eu, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const qu = ju.effect,
              fu = Zu._areLightsDisposed,
              Cu = this._prepareEffect(Eu, ju.getRenderingMesh(), Zu, this.onCompiled, this.onError, su, null);
            let bu = !1;
            if (Cu)
              if (this._onEffectCreatedObservable && (BE.effect = Cu, BE.subMesh = ju, this._onEffectCreatedObservable.notifyObservers(BE)), this.allowShaderHotSwapping && qu && !Cu.isReady()) {
                if (Zu.markAsUnprocessed(), bu = this.isFrozen, fu) return Zu._areLightsDisposed = !0, !1
              } else Xu.resetCachedMaterial(), ju.setEffect(Cu, Zu, this._materialContext);
            return !(!ju.effect || !ju.effect.isReady()) && (Zu._renderId = Xu.getRenderId(), Uu._wasPreviouslyReady = !bu, Uu._wasPreviouslyUsingInstances = !!su, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const uu = this._uniformBuffer;
            uu.addUniform("vTangentSpaceParams", 2), uu.addUniform("vLightingIntensity", 4), uu.addUniform("pointSize", 1), uu.addUniform("vDebugMode", 2), uu.addUniform("renderTargetSize", 2), uu.addUniform("cameraInfo", 4), uu.addUniform("vTextureRepetitionHexTilingParams", 4), uu.addUniform("backgroundRefractionMatrix", 16), uu.addUniform("vBackgroundRefractionInfos", 3), (0, zu.rb)(uu, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((Eu => {
              uu.addUniform(Eu.name, Eu.numComponents)
            })), Object.values(this._samplersList).forEach((Eu => {
              uu.addUniform(Eu.samplerInfoName, 2), uu.addUniform(Eu.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(uu, Eu, ju, su) {
            if (0 === this.geometryThickness) uu.updateFloat("vGeometryThickness", 0);
            else {
              su.getRenderingMesh().getWorldMatrix().decompose(Wu.m.dO[0]);
              const Eu = Math.max(Math.abs(Wu.m.dO[0].x), Math.abs(Wu.m.dO[0].y), Math.abs(Wu.m.dO[0].z));
              uu.updateFloat("vGeometryThickness", this.geometryThickness * Eu)
            }
          }
          bindForSubMesh(Eu, ju, su) {
            const Uu = this.hV(),
              Zu = su.materialDefines;
            if (!Zu) return;
            const Xu = su.effect;
            if (!Xu) return;
            this._activeEffect = Xu, ju.getMeshUniformBuffer().bindToEffect(Xu, "Mesh"), ju.transferToEffect(Eu);
            const lu = Uu.wO();
            this._uniformBuffer.bindToEffect(Xu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Uu, ju, Eu, this.isFrozen), NE.c.Bind(lu.currentRenderPassId, this._activeEffect, ju, Eu, this);
            const qu = Uu.activeCamera;
            qu ? this._uniformBuffer.updateFloat4("cameraInfo", qu.minZ, qu.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const fu = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", fu[0], fu[1], fu[2], fu[3]), this._eventInfo.subMesh = su, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Zu.OBJECTSPACE_NORMALMAP && (Eu.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Cu = this._mustRebind(Uu, Xu, su, ju.visibility),
              bu = lu._features.needToAlwaysBindUniformBuffers;
            (0, zu.h)(ju, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, bE.e)(this._activeEffect, this._vertexPullingMetadata);
            const cu = this._uniformBuffer;
            if (Cu) {
              this.bindViewProjection(Xu);
              const Eu = this._getRadianceTexture();
              if (!cu.useUbo || !this.isFrozen || !cu.isSync || su._drawWrapper._forceRebindOnNextCall) {
                if (Uu.texturesEnabled) {
                  for (const uu in this._samplersList) {
                    const Eu = this._samplersList[uu];
                    Eu.value && (cu.updateFloat2(Eu.samplerInfoName, Eu.value.coordinatesIndex, Eu.value.level), (0, zu.E)(Eu.value, cu, Eu.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (Uu._mirroredCameraPosition ? cu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : cu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, zu.m)(Uu, Zu, cu, xu.c.White(), Eu, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && cu.updateFloat("pointSize", this.pointSize);
                const uu = this._uniformsArray;
                for (let Eu = 0, ju = uu.length; Eu < ju; Eu++) {
                  const ju = uu[Eu];
                  (void 0 === ju.requiredDefine || Zu[ju.requiredDefine]) && (4 === ju.numComponents ? (ju.populateVectorFromLinkedProperties(Wu.m.Vector4[0]), cu.updateVector4(ju.name, Wu.m.Vector4[0])) : 3 === ju.numComponents ? (ju.populateVectorFromLinkedProperties(Wu.m.dO[0]), cu.updateVector3(ju.name, Wu.m.dO[0])) : 2 === ju.numComponents ? (ju.populateVectorFromLinkedProperties(Wu.m.Vector2[0]), cu.updateFloat2(ju.name, Wu.m.Vector2[0].x, Wu.m.Vector2[0].y)) : 1 === ju.numComponents && cu.updateFloat(ju.name, ju.linkedProperties[ju.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * Uu.environmentIntensity, this._lightingInfos.w = 1, cu.updateVector4("vLightingIntensity", this._lightingInfos), cu.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (Uu.texturesEnabled) {
                for (const uu in this._samplersList) {
                  const Eu = this._samplersList[uu];
                  Eu.value && cu.setTexture(Eu.samplerName, Eu.value)
                }
                if ((0, zu.o)(Uu, Zu, cu, Eu, this.realTimeFiltering), Zu.ENVIRONMENTBRDF && cu.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), Zu.FUZZENVIRONMENTBRDF && cu.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), Zu.REFRACTED_BACKGROUND && (cu.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), cu.y_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), Wu.m.dO[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), cu.updateVector3("vBackgroundRefractionInfos", Wu.m.dO[1])), (Zu.ANISOTROPIC || Zu.FUZZ || Zu.REFRACTED_BACKGROUND || Zu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && cu.setTexture("blueNoiseSampler", uu._noiseTextures[this.hV().uniqueId]), Zu.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const uu = this.sssIrradianceTexture.getSize().width,
                    Eu = this.sssIrradianceTexture.getSize().height;
                  cu.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), cu.setTexture("sceneDepthSampler", this.sssDepthTexture), cu.updateFloat2("renderTargetSize", uu, Eu)
                }
              }
              this.hV().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ju) && this.hV().depthPeelingRenderer.bind(Xu), this._eventInfo.subMesh = su, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, CE.f)(this._activeEffect, this, Uu), this.bindEyePosition(Xu)
            } else bu && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, Uu, Uu.wO(), su), !Cu && this.isFrozen && !bu || !Uu.lightsEnabled || this._disableLighting || (0, zu.r)(Uu, ju, this._activeEffect, Zu, this._maxSimultaneousLights), !Cu && this.isFrozen || (this.bindView(Xu), (0, zu.j)(Uu, ju, this._activeEffect, !0), Zu.NUM_MORPH_INFLUENCERS && (0, zu.x)(ju, this._activeEffect), Zu.BAKED_VERTEX_ANIMATION_TEXTURE && ju.bakedVertexAnimationManager?.bind(Xu, Zu.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, zu.u)(Zu, this._activeEffect, Uu)), this._afterBind(ju, this._activeEffect, su), cu.update()
          }
          getAnimatables() {
            const uu = super.getAnimatables();
            for (const Eu in this._samplersList) {
              const ju = this._samplersList[Eu];
              ju.value && ju.value.animations && ju.value.animations.length > 0 && uu.push(ju.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && uu.push(this._radianceTexture), uu
          }
          getActiveTextures() {
            const uu = super.getActiveTextures();
            for (const Eu in this._samplersList) {
              const ju = this._samplersList[Eu];
              ju.value && uu.push(ju.value)
            }
            return this._radianceTexture && uu.push(this._radianceTexture), uu
          }
          hasTexture(uu) {
            if (super.hasTexture(uu)) return !0;
            for (const Eu in this._samplersList) {
              if (this._samplersList[Eu].value === uu) return !0
            }
            return this._radianceTexture === uu
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(uu, Eu) {
            if (this._breakShaderLoadedCheck = !0, Eu) {
              this._environmentBRDFTexture && this.hV().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.hV().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const uu in this._samplersList) {
                const Eu = this._samplersList[uu];
                Eu.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(uu, Eu)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.hV().environmentTexture
          }
          _prepareEffect(Eu, ju, su) {
            let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Zu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              Xu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              lu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(Eu, ju, su, Xu, lu), !su.isDirty) return null;
            su.markAsProcessed();
            const qu = this.hV().wO(),
              fu = new yu.e;
            let Cu = 0;
            su.USESPHERICALINVERTEX && fu.addFallback(Cu++, "USESPHERICALINVERTEX"), su.FOG && fu.addFallback(Cu, "FOG"), su.SPECULARAA && fu.addFallback(Cu, "SPECULARAA"), su.POINTSIZE && fu.addFallback(Cu, "POINTSIZE"), su.LOGARITHMICDEPTH && fu.addFallback(Cu, "LOGARITHMICDEPTH"), su.PARALLAX && fu.addFallback(Cu, "PARALLAX"), su.PARALLAX_RHS && fu.addFallback(Cu, "PARALLAX_RHS"), su.PARALLAXOCCLUSION && fu.addFallback(Cu++, "PARALLAXOCCLUSION"), su.ENVIRONMENTBRDF && fu.addFallback(Cu++, "ENVIRONMENTBRDF"), su.TANGENT && fu.addFallback(Cu++, "TANGENT"), Cu = (0, zu.I)(su, fu, this._maxSimultaneousLights, Cu), su.SPECULARTERM && fu.addFallback(Cu++, "SPECULARTERM"), su.USESPHERICALFROMREFLECTIONMAP && fu.addFallback(Cu++, "USESPHERICALFROMREFLECTIONMAP"), su.USEIRRADIANCEMAP && fu.addFallback(Cu++, "USEIRRADIANCEMAP"), su.NORMAL && fu.addFallback(Cu++, "NORMAL"), su.VERTEXCOLOR && fu.addFallback(Cu++, "VERTEXCOLOR"), su.MORPHTARGETS && fu.addFallback(Cu++, "MORPHTARGETS"), su.MULTIVIEW && fu.addFallback(0, "MULTIVIEW");
            const bu = [Su.j.PositionKind];
            su.NORMAL && bu.push(Su.j.NormalKind), su.TANGENT && bu.push(Su.j.TangentKind);
            for (let uu = 1; uu <= 6; ++uu) su["UV" + uu] && bu.push(`uv${1===uu?"":uu}`);
            su.VERTEXCOLOR && bu.push(Su.j.ColorKind), (0, zu.P)(bu, Eu, su, fu), (0, zu.S)(bu, su), (0, zu.U)(bu, Eu, su), (0, zu.L)(bu, Eu, su);
            let cu = "openpbr";
            const Nu = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const uu in this._uniformsList) Nu.push(uu);
            const Ou = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            su.FUZZENVIRONMENTBRDF && Ou.push("environmentFuzzBrdfSampler"), su.REFRACTED_BACKGROUND && Ou.push("backgroundRefractionSampler"), (su.ANISOTROPIC || su.FUZZ || su.REFRACTED_BACKGROUND || su.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && Ou.push("blueNoiseSampler"), su.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (Ou.push("sceneIrradianceSampler"), Ou.push("sceneDepthSampler"));
            for (const uu in this._samplersList) {
              const Eu = this._samplersList[uu];
              Ou.push(Eu.samplerName), Nu.push(Eu.samplerInfoName), Nu.push(Eu.samplerMatrixName)
            }(0, zu.ub)(Nu, Ou, !0);
            const Yu = ["Material", "Scene", "Mesh"],
              hu = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: su.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = fu, this._eventInfo.fallbackRank = Cu, this._eventInfo.defines = su, this._eventInfo.uniforms = Nu, this._eventInfo.attributes = bu, this._eventInfo.samplers = Ou, this._eventInfo.uniformBuffersNames = Yu, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Eu, this._eventInfo.indexParameters = hu, this._callbackPluginEventGeneric(128, this._eventInfo), NE.c.AddUniformsAndSamplers(Nu, Ou), tu.e.AddUniforms(Nu), tu.e.AddSamplers(Ou), (0, CE.e)(Nu), this._useVertexPulling) {
              const uu = ju?.geometry;
              uu && (this._vertexPullingMetadata = (0, bE.f)(uu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Eu) => {
                Nu.push(`vp_${Eu}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            Hu.d && (Hu.d.PrepareUniforms(Nu, su), Hu.d.PrepareSamplers(Ou, su)), (0, zu.vb)({
              uniformsNames: Nu,
              uniformBuffersNames: Yu,
              samplers: Ou,
              defines: su,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const Du = {};
            this.customShaderNameResolve && (cu = this.customShaderNameResolve(cu, Nu, Yu, Ou, su, bu, Du));
            const gu = su.toString(),
              Mu = qu.createEffect(cu, {
                attributes: bu,
                uniformsNames: Nu,
                uniformBuffersNames: Yu,
                samplers: Ou,
                defines: gu,
                fallbacks: fu,
                onCompiled: Uu,
                onError: Zu,
                indexParameters: hu,
                processFinalCode: Du.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: su.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, qu);
            return this._eventInfo.customCode = void 0, Mu
          }
          _prepareDefines(Eu, ju, su) {
            let Uu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              Xu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const lu = ju.hasThinInstances,
              qu = this.hV(),
              fu = qu.wO();
            (0, zu.fb)(qu, Eu, su, !0, this._maxSimultaneousLights, this._disableLighting), su._needNormals = !0, (0, zu.lb)(qu, su);
            const Cu = this.needAlphaBlendingForMesh(Eu) && this.hV().useOrderIndependentTransparency;
            if ((0, zu.qb)(qu, su, this.canRenderToMRT && !Cu), (0, zu.mb)(qu, su, Cu), NE.c.PrepareDefines(fu.currentRenderPassId, Eu, su), su._areTexturesDirty) {
              su._needUVs = !1;
              for (let uu = 1; uu <= 6; ++uu) su["MAINUV" + uu] = !1;
              if (qu.texturesEnabled) {
                for (const ju in this._samplersList) {
                  const uu = this._samplersList[ju];
                  uu.value ? ((0, zu.jb)(uu.value, su, uu.textureDefine), su[uu.textureDefine + "_GAMMA"] = uu.value.gammaSpace) : su[uu.textureDefine] = !1
                }
                const uu = this._getRadianceTexture(),
                  Eu = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || fu.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, zu.eb)(qu, uu, su, this.realTimeFiltering, this.realTimeFilteringQuality, !Eu), this._baseMetalnessTexture && (su.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), su.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, su.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, su.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, su.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, su.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, su.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, su.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, su.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, su.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, su.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, su.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && nu.d.DiffuseTextureEnabled ? (su.PARALLAX = !0, su.PARALLAX_RHS = qu.useRightHandedSystem, su.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : su.PARALLAX = !1, su.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (su.PARALLAX = !1, su.PARALLAX_RHS = !1, su.PARALLAXOCCLUSION = !1, su.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && nu.d.ReflectionTextureEnabled ? (su.ENVIRONMENTBRDF = !0, su.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (su.ENVIRONMENTBRDF = !1, su.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? su.FUZZENVIRONMENTBRDF = !0 : su.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  su.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && nu.d.RefractionTextureEnabled, su.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, su.REFRACTED_LIGHTS = !0;
                  const uu = this._getRadianceTexture();
                  uu ? (su.REFRACTED_ENVIRONMENT = nu.d.RefractionTextureEnabled, su.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.hV().useRightHandedSystem ? !uu.invertZ : uu.invertZ, su.REFRACTED_ENVIRONMENT_LOCAL_CUBE = uu.isCube && uu.boundingBoxSize) : su.REFRACTED_ENVIRONMENT = !1
                } else su.REFRACTED_BACKGROUND = !1, su.REFRACTED_LIGHTS = !1, su.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? su.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : su.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === Zu.b.LIGHTFALLOFF_STANDARD ? (su.USEPHYSICALLIGHTFALLOFF = !1, su.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === Zu.b.LIGHTFALLOFF_GLTF ? (su.USEPHYSICALLIGHTFALLOFF = !1, su.USEGLTFLIGHTFALLOFF = !0) : (su.USEPHYSICALLIGHTFALLOFF = !0, su.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? su.TWOSIDEDLIGHTING = !0 : su.TWOSIDEDLIGHTING = !1, su.MIRRORED = !!qu._mirroredCameraPosition, su.SPECULARAA = fu.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(su._areTexturesDirty || su._areMiscDirty) && (su.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, su.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, su.ALPHABLEND = this.needAlphaBlendingForMesh(Eu)), su._areTexturesDirty && (su.TEXTURE_REPETITION_MODE = fu.version > 1 || fu.isWebGPU ? this.textureRepetitionMode : 0), su._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(su), su.FORCENORMALFORWARD = this._forceNormalForward, su.RADIANCEOCCLUSION = this._useRadianceOcclusion, su.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && uu._noiseTextures[qu.uniqueId] && nu.d.ReflectionTextureEnabled ? (su.ANISOTROPIC = !0, Eu.isVerticesDataPresent(Su.j.TangentKind) || (su._needUVs = !0, su.MAINUV1 = !0), this._useGltfStyleAnisotropy && (su.USE_GLTF_STYLE_ANISOTROPY = !0), su.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, su.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (su.ANISOTROPIC = !1, su.USE_GLTF_STYLE_ANISOTROPY = !1, su.ANISOTROPIC_BASE = !1, su.ANISOTROPIC_COAT = !1), su.THIN_FILM = this.thinFilmWeight > 0, su.IRIDESCENCE = this.thinFilmWeight > 0, su.DISPERSION = this.transmissionDispersionScale > 0, su.SCATTERING = this.hasScattering;
            if (su.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, su.TRANSMISSION_SLAB = this.transmissionWeight > 0, su.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, su.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !su.PREPASS && (su.SUBSURFACE_SLAB || su.TRANSMISSION_SLAB_VOLUME)) {
              let uu = !1;
              if (!this.sssIrradianceTexture && qu.geometryBufferRenderer) {
                const Eu = qu.geometryBufferRenderer.getTextureIndex(IE.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = qu.geometryBufferRenderer.getGBuffer().textures[Eu], uu = !0
              }
              if (!this.sssDepthTexture && qu.geometryBufferRenderer) {
                const Eu = qu.geometryBufferRenderer.getTextureIndex(IE.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = qu.geometryBufferRenderer.getGBuffer().textures[Eu], uu = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (su.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, uu && (su.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            su.FUZZ = this.fuzzWeight > 0 && nu.d.ReflectionTextureEnabled, su.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, su.FUZZ ? (Eu.isVerticesDataPresent(Su.j.TangentKind) || (su._needUVs = !0, su.MAINUV1 = !0), this._environmentFuzzBRDFTexture = ru(this.hV()), su.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, su.FUZZENVIRONMENTBRDF = !1, su.FUZZ_IBL_SAMPLES = 0), su._areMiscDirty && ((0, zu.kb)(Eu, qu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eu), su, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ju, this._isVertexOutputInvariant), su.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !Eu.isVerticesDataPresent(Su.j.NormalKind), su.DEBUGMODE = this._debugMode), (0, zu.ab)(qu, fu, this, su, !!Uu, Xu, lu), this._eventInfo.defines = su, this._eventInfo.mesh = Eu, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, zu.Z)(Eu, su, !0, !0, !0, this._transparencyMode !== Zu.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, Eu = new WeakMap, su = new WeakMap, Uu = new WeakMap, Xu = new WeakMap, lu = new WeakMap, qu = new WeakMap, fu = new WeakMap, Cu = new WeakMap, bu = new WeakMap, cu = new WeakMap, Nu = new WeakMap, Ou = new WeakMap, Yu = new WeakMap, hu = new WeakMap, Du = new WeakMap, gu = new WeakMap, Mu = new WeakMap, eu = new WeakMap, Gu = new WeakMap, pu = new WeakMap, wu = new WeakMap, Ju = new WeakMap, mu = new WeakMap, vu = new WeakMap, Ku = new WeakMap, Vu = new WeakMap, iu = new WeakMap, Iu = new WeakMap, Fu = new WeakMap, Bu = new WeakMap, Lu = new WeakMap, Tu = new WeakMap, Au = new WeakMap, Ru = new WeakMap, uE = new WeakMap, EE = new WeakMap, jE = new WeakMap, sE = new WeakMap, UE = new WeakMap, ZE = new WeakMap, XE = new WeakMap, lE = new WeakMap, qE = new WeakMap, fE = new WeakMap, OE = new WeakMap, YE = new WeakMap, hE = new WeakMap, DE = new WeakMap, gE = new WeakMap, ME = new WeakMap, eE = new WeakMap, GE = new WeakMap, pE = new WeakMap, dE = new WeakMap, aE = new WeakMap, PE = new WeakMap, oE = new WeakMap, kE = new WeakMap, mE = new WeakMap, vE = new WeakMap, KE = new WeakMap, VE = new WeakMap, rE = new WeakMap, QE = new WeakMap, iE = new WeakMap, WE = new WeakMap, SE = new WeakMap, FE = new WeakMap, LE = new WeakMap, HE = new WeakMap, AE = new WeakMap, zE = new WeakMap, RE = new WeakMap, uj = new WeakMap, Ej = new WeakMap, jj = new WeakMap, sj = new WeakMap, Uj = new WeakMap, Zj = new WeakMap, Xj = new WeakMap, lj = new WeakMap, qj = new WeakMap, fj = new WeakMap, Cj = new WeakMap, bj = new WeakMap, cj = new WeakMap, Nj = new WeakMap, Oj = new WeakMap, Yj = new WeakMap, hj = new WeakMap, Dj = new WeakMap, gj = new WeakMap, Mj = new WeakMap, ej = new WeakMap, Gj = new WeakMap, pj = new WeakMap, wj = new WeakMap, Jj = new WeakMap, dj = new WeakMap, aj = new WeakMap, Pj = new WeakMap, oj = new WeakMap, (() => {
          const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(KU[Symbol.metadata] ?? null) : void 0;
          kj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], mj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], vj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Kj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Vj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], rj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Qj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ij = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Wj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Sj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ij = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Fj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Bj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Lj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], tj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], xj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Tj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Hj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Aj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], nj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], yj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], zj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Rj = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], us = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Es = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ss = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Us = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Zs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Xs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ls = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], qs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], fs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Cs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], bs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], cs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ns = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Os = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ys = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], hs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ds = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], gs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ms = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], es = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Gs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ps = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ws = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ds = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], as = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ps = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], os = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ks = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ms = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], vs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ks = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Vs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], rs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Qs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], is = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ws = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ss = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Is = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Fs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Bs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ls = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ts = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], xs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Ts = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Hs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], As = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ns = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], ys = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], zs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], Rs = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], uU = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], EU = [(0, au.d)("_markAllSubMeshesAsTexturesDirty")], jU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], sU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], UU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], ZU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], XU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], lU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], qU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, au.E)()], CU = [(0, au.E)()], bU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], cU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], NU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], OU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], YU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsLightsDirty")], hU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsLightsDirty")], gU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], MU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], eU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], GU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], pU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], wU = [(0, au.e)("_markAllSubMeshesAsTexturesDirty")], JU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], dU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], PU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], oU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], kU = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], mU = [(0, au.e)("_markAllSubMeshesAsMiscDirty")], vU = [(0, au.E)()], (0, du.e)(uu, null, kj, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseWeight" in uu,
              get: uu => uu.baseWeight,
              set: (uu, Eu) => {
                uu.baseWeight = Eu
              }
            },
            metadata: Eu
          }, rU, QU), (0, du.e)(uu, null, mj, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseWeightTexture" in uu,
              get: uu => uu.baseWeightTexture,
              set: (uu, Eu) => {
                uu.baseWeightTexture = Eu
              }
            },
            metadata: Eu
          }, iU, WU), (0, du.e)(uu, null, vj, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseColor" in uu,
              get: uu => uu.baseColor,
              set: (uu, Eu) => {
                uu.baseColor = Eu
              }
            },
            metadata: Eu
          }, SU, IU), (0, du.e)(uu, null, Kj, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseColorTexture" in uu,
              get: uu => uu.baseColorTexture,
              set: (uu, Eu) => {
                uu.baseColorTexture = Eu
              }
            },
            metadata: Eu
          }, FU, BU), (0, du.e)(uu, null, Vj, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseDiffuseRoughness" in uu,
              get: uu => uu.baseDiffuseRoughness,
              set: (uu, Eu) => {
                uu.baseDiffuseRoughness = Eu
              }
            },
            metadata: Eu
          }, LU, tU), (0, du.e)(uu, null, rj, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseDiffuseRoughnessTexture" in uu,
              get: uu => uu.baseDiffuseRoughnessTexture,
              set: (uu, Eu) => {
                uu.baseDiffuseRoughnessTexture = Eu
              }
            },
            metadata: Eu
          }, xU, TU), (0, du.e)(uu, null, Qj, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseMetalness" in uu,
              get: uu => uu.baseMetalness,
              set: (uu, Eu) => {
                uu.baseMetalness = Eu
              }
            },
            metadata: Eu
          }, HU, AU), (0, du.e)(uu, null, ij, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "baseMetalnessTexture" in uu,
              get: uu => uu.baseMetalnessTexture,
              set: (uu, Eu) => {
                uu.baseMetalnessTexture = Eu
              }
            },
            metadata: Eu
          }, nU, yU), (0, du.e)(uu, null, Wj, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularWeight" in uu,
              get: uu => uu.specularWeight,
              set: (uu, Eu) => {
                uu.specularWeight = Eu
              }
            },
            metadata: Eu
          }, zU, RU), (0, du.e)(uu, null, Sj, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularWeightTexture" in uu,
              get: uu => uu.specularWeightTexture,
              set: (uu, Eu) => {
                uu.specularWeightTexture = Eu
              }
            },
            metadata: Eu
          }, uZ, EZ), (0, du.e)(uu, null, Ij, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularColor" in uu,
              get: uu => uu.specularColor,
              set: (uu, Eu) => {
                uu.specularColor = Eu
              }
            },
            metadata: Eu
          }, jZ, sZ), (0, du.e)(uu, null, Fj, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularColorTexture" in uu,
              get: uu => uu.specularColorTexture,
              set: (uu, Eu) => {
                uu.specularColorTexture = Eu
              }
            },
            metadata: Eu
          }, UZ, ZZ), (0, du.e)(uu, null, Bj, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughness" in uu,
              get: uu => uu.specularRoughness,
              set: (uu, Eu) => {
                uu.specularRoughness = Eu
              }
            },
            metadata: Eu
          }, XZ, lZ), (0, du.e)(uu, null, Lj, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughnessTexture" in uu,
              get: uu => uu.specularRoughnessTexture,
              set: (uu, Eu) => {
                uu.specularRoughnessTexture = Eu
              }
            },
            metadata: Eu
          }, qZ, fZ), (0, du.e)(uu, null, tj, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughnessAnisotropy" in uu,
              get: uu => uu.specularRoughnessAnisotropy,
              set: (uu, Eu) => {
                uu.specularRoughnessAnisotropy = Eu
              }
            },
            metadata: Eu
          }, CZ, bZ), (0, du.e)(uu, null, xj, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularRoughnessAnisotropyTexture" in uu,
              get: uu => uu.specularRoughnessAnisotropyTexture,
              set: (uu, Eu) => {
                uu.specularRoughnessAnisotropyTexture = Eu
              }
            },
            metadata: Eu
          }, cZ, NZ), (0, du.e)(uu, null, Tj, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularIor" in uu,
              get: uu => uu.specularIor,
              set: (uu, Eu) => {
                uu.specularIor = Eu
              }
            },
            metadata: Eu
          }, OZ, YZ), (0, du.e)(uu, null, Hj, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionWeight" in uu,
              get: uu => uu.transmissionWeight,
              set: (uu, Eu) => {
                uu.transmissionWeight = Eu
              }
            },
            metadata: Eu
          }, hZ, DZ), (0, du.e)(uu, null, Aj, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionWeightTexture" in uu,
              get: uu => uu.transmissionWeightTexture,
              set: (uu, Eu) => {
                uu.transmissionWeightTexture = Eu
              }
            },
            metadata: Eu
          }, gZ, MZ), (0, du.e)(uu, null, nj, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionColor" in uu,
              get: uu => uu.transmissionColor,
              set: (uu, Eu) => {
                uu.transmissionColor = Eu
              }
            },
            metadata: Eu
          }, eZ, GZ), (0, du.e)(uu, null, yj, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionColorTexture" in uu,
              get: uu => uu.transmissionColorTexture,
              set: (uu, Eu) => {
                uu.transmissionColorTexture = Eu
              }
            },
            metadata: Eu
          }, pZ, wZ), (0, du.e)(uu, null, zj, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDepth" in uu,
              get: uu => uu.transmissionDepth,
              set: (uu, Eu) => {
                uu.transmissionDepth = Eu
              }
            },
            metadata: Eu
          }, JZ, dZ), (0, du.e)(uu, null, Rj, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDepthTexture" in uu,
              get: uu => uu.transmissionDepthTexture,
              set: (uu, Eu) => {
                uu.transmissionDepthTexture = Eu
              }
            },
            metadata: Eu
          }, aZ, PZ), (0, du.e)(uu, null, us, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionScatter" in uu,
              get: uu => uu.transmissionScatter,
              set: (uu, Eu) => {
                uu.transmissionScatter = Eu
              }
            },
            metadata: Eu
          }, oZ, kZ), (0, du.e)(uu, null, Es, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionScatterTexture" in uu,
              get: uu => uu.transmissionScatterTexture,
              set: (uu, Eu) => {
                uu.transmissionScatterTexture = Eu
              }
            },
            metadata: Eu
          }, mZ, vZ), (0, du.e)(uu, null, ss, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionScatterAnisotropy" in uu,
              get: uu => uu.transmissionScatterAnisotropy,
              set: (uu, Eu) => {
                uu.transmissionScatterAnisotropy = Eu
              }
            },
            metadata: Eu
          }, KZ, VZ), (0, du.e)(uu, null, Us, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDispersionScale" in uu,
              get: uu => uu.transmissionDispersionScale,
              set: (uu, Eu) => {
                uu.transmissionDispersionScale = Eu
              }
            },
            metadata: Eu
          }, rZ, QZ), (0, du.e)(uu, null, Zs, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDispersionScaleTexture" in uu,
              get: uu => uu.transmissionDispersionScaleTexture,
              set: (uu, Eu) => {
                uu.transmissionDispersionScaleTexture = Eu
              }
            },
            metadata: Eu
          }, iZ, WZ), (0, du.e)(uu, null, Xs, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: uu => "transmissionDispersionAbbeNumber" in uu,
              get: uu => uu.transmissionDispersionAbbeNumber,
              set: (uu, Eu) => {
                uu.transmissionDispersionAbbeNumber = Eu
              }
            },
            metadata: Eu
          }, SZ, IZ), (0, du.e)(uu, null, ls, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceWeight" in uu,
              get: uu => uu.subsurfaceWeight,
              set: (uu, Eu) => {
                uu.subsurfaceWeight = Eu
              }
            },
            metadata: Eu
          }, FZ, BZ), (0, du.e)(uu, null, qs, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceWeightTexture" in uu,
              get: uu => uu.subsurfaceWeightTexture,
              set: (uu, Eu) => {
                uu.subsurfaceWeightTexture = Eu
              }
            },
            metadata: Eu
          }, LZ, tZ), (0, du.e)(uu, null, fs, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceColor" in uu,
              get: uu => uu.subsurfaceColor,
              set: (uu, Eu) => {
                uu.subsurfaceColor = Eu
              }
            },
            metadata: Eu
          }, xZ, TZ), (0, du.e)(uu, null, Cs, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceColorTexture" in uu,
              get: uu => uu.subsurfaceColorTexture,
              set: (uu, Eu) => {
                uu.subsurfaceColorTexture = Eu
              }
            },
            metadata: Eu
          }, HZ, AZ), (0, du.e)(uu, null, bs, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceRadius" in uu,
              get: uu => uu.subsurfaceRadius,
              set: (uu, Eu) => {
                uu.subsurfaceRadius = Eu
              }
            },
            metadata: Eu
          }, nZ, yZ), (0, du.e)(uu, null, cs, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceRadiusScale" in uu,
              get: uu => uu.subsurfaceRadiusScale,
              set: (uu, Eu) => {
                uu.subsurfaceRadiusScale = Eu
              }
            },
            metadata: Eu
          }, zZ, RZ), (0, du.e)(uu, null, Ns, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceRadiusScaleTexture" in uu,
              get: uu => uu.subsurfaceRadiusScaleTexture,
              set: (uu, Eu) => {
                uu.subsurfaceRadiusScaleTexture = Eu
              }
            },
            metadata: Eu
          }, uX, EX), (0, du.e)(uu, null, Os, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "subsurfaceScatterAnisotropy" in uu,
              get: uu => uu.subsurfaceScatterAnisotropy,
              set: (uu, Eu) => {
                uu.subsurfaceScatterAnisotropy = Eu
              }
            },
            metadata: Eu
          }, jX, sX), (0, du.e)(uu, null, Ys, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatWeight" in uu,
              get: uu => uu.coatWeight,
              set: (uu, Eu) => {
                uu.coatWeight = Eu
              }
            },
            metadata: Eu
          }, UX, ZX), (0, du.e)(uu, null, hs, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatWeightTexture" in uu,
              get: uu => uu.coatWeightTexture,
              set: (uu, Eu) => {
                uu.coatWeightTexture = Eu
              }
            },
            metadata: Eu
          }, XX, lX), (0, du.e)(uu, null, Ds, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatColor" in uu,
              get: uu => uu.coatColor,
              set: (uu, Eu) => {
                uu.coatColor = Eu
              }
            },
            metadata: Eu
          }, qX, fX), (0, du.e)(uu, null, gs, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatColorTexture" in uu,
              get: uu => uu.coatColorTexture,
              set: (uu, Eu) => {
                uu.coatColorTexture = Eu
              }
            },
            metadata: Eu
          }, CX, bX), (0, du.e)(uu, null, Ms, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughness" in uu,
              get: uu => uu.coatRoughness,
              set: (uu, Eu) => {
                uu.coatRoughness = Eu
              }
            },
            metadata: Eu
          }, cX, NX), (0, du.e)(uu, null, es, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughnessTexture" in uu,
              get: uu => uu.coatRoughnessTexture,
              set: (uu, Eu) => {
                uu.coatRoughnessTexture = Eu
              }
            },
            metadata: Eu
          }, OX, YX), (0, du.e)(uu, null, Gs, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughnessAnisotropy" in uu,
              get: uu => uu.coatRoughnessAnisotropy,
              set: (uu, Eu) => {
                uu.coatRoughnessAnisotropy = Eu
              }
            },
            metadata: Eu
          }, hX, DX), (0, du.e)(uu, null, ps, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatRoughnessAnisotropyTexture" in uu,
              get: uu => uu.coatRoughnessAnisotropyTexture,
              set: (uu, Eu) => {
                uu.coatRoughnessAnisotropyTexture = Eu
              }
            },
            metadata: Eu
          }, gX, MX), (0, du.e)(uu, null, ws, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatIor" in uu,
              get: uu => uu.coatIor,
              set: (uu, Eu) => {
                uu.coatIor = Eu
              }
            },
            metadata: Eu
          }, eX, GX), (0, du.e)(uu, null, ds, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatDarkening" in uu,
              get: uu => uu.coatDarkening,
              set: (uu, Eu) => {
                uu.coatDarkening = Eu
              }
            },
            metadata: Eu
          }, pX, wX), (0, du.e)(uu, null, as, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "coatDarkeningTexture" in uu,
              get: uu => uu.coatDarkeningTexture,
              set: (uu, Eu) => {
                uu.coatDarkeningTexture = Eu
              }
            },
            metadata: Eu
          }, JX, dX), (0, du.e)(uu, null, Ps, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzWeight" in uu,
              get: uu => uu.fuzzWeight,
              set: (uu, Eu) => {
                uu.fuzzWeight = Eu
              }
            },
            metadata: Eu
          }, aX, PX), (0, du.e)(uu, null, os, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzWeightTexture" in uu,
              get: uu => uu.fuzzWeightTexture,
              set: (uu, Eu) => {
                uu.fuzzWeightTexture = Eu
              }
            },
            metadata: Eu
          }, oX, kX), (0, du.e)(uu, null, ks, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzColor" in uu,
              get: uu => uu.fuzzColor,
              set: (uu, Eu) => {
                uu.fuzzColor = Eu
              }
            },
            metadata: Eu
          }, mX, vX), (0, du.e)(uu, null, ms, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzColorTexture" in uu,
              get: uu => uu.fuzzColorTexture,
              set: (uu, Eu) => {
                uu.fuzzColorTexture = Eu
              }
            },
            metadata: Eu
          }, KX, VX), (0, du.e)(uu, null, vs, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzRoughness" in uu,
              get: uu => uu.fuzzRoughness,
              set: (uu, Eu) => {
                uu.fuzzRoughness = Eu
              }
            },
            metadata: Eu
          }, rX, QX), (0, du.e)(uu, null, Ks, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "fuzzRoughnessTexture" in uu,
              get: uu => uu.fuzzRoughnessTexture,
              set: (uu, Eu) => {
                uu.fuzzRoughnessTexture = Eu
              }
            },
            metadata: Eu
          }, iX, WX), (0, du.e)(uu, null, Vs, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryThinWalled" in uu,
              get: uu => uu.geometryThinWalled,
              set: (uu, Eu) => {
                uu.geometryThinWalled = Eu
              }
            },
            metadata: Eu
          }, SX, IX), (0, du.e)(uu, null, rs, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryNormalTexture" in uu,
              get: uu => uu.geometryNormalTexture,
              set: (uu, Eu) => {
                uu.geometryNormalTexture = Eu
              }
            },
            metadata: Eu
          }, FX, BX), (0, du.e)(uu, null, Qs, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryTangent" in uu,
              get: uu => uu.geometryTangent,
              set: (uu, Eu) => {
                uu.geometryTangent = Eu
              }
            },
            metadata: Eu
          }, LX, tX), (0, du.e)(uu, null, is, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryTangentTexture" in uu,
              get: uu => uu.geometryTangentTexture,
              set: (uu, Eu) => {
                uu.geometryTangentTexture = Eu
              }
            },
            metadata: Eu
          }, xX, TX), (0, du.e)(uu, null, Ws, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryCoatNormalTexture" in uu,
              get: uu => uu.geometryCoatNormalTexture,
              set: (uu, Eu) => {
                uu.geometryCoatNormalTexture = Eu
              }
            },
            metadata: Eu
          }, HX, AX), (0, du.e)(uu, null, Ss, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryCoatTangent" in uu,
              get: uu => uu.geometryCoatTangent,
              set: (uu, Eu) => {
                uu.geometryCoatTangent = Eu
              }
            },
            metadata: Eu
          }, nX, yX), (0, du.e)(uu, null, Is, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryCoatTangentTexture" in uu,
              get: uu => uu.geometryCoatTangentTexture,
              set: (uu, Eu) => {
                uu.geometryCoatTangentTexture = Eu
              }
            },
            metadata: Eu
          }, zX, RX), (0, du.e)(uu, null, Fs, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryOpacity" in uu,
              get: uu => uu.geometryOpacity,
              set: (uu, Eu) => {
                uu.geometryOpacity = Eu
              }
            },
            metadata: Eu
          }, ul, El), (0, du.e)(uu, null, Bs, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryOpacityTexture" in uu,
              get: uu => uu.geometryOpacityTexture,
              set: (uu, Eu) => {
                uu.geometryOpacityTexture = Eu
              }
            },
            metadata: Eu
          }, jl, sl), (0, du.e)(uu, null, Ls, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryThickness" in uu,
              get: uu => uu.geometryThickness,
              set: (uu, Eu) => {
                uu.geometryThickness = Eu
              }
            },
            metadata: Eu
          }, Ul, Zl), (0, du.e)(uu, null, ts, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "geometryThicknessTexture" in uu,
              get: uu => uu.geometryThicknessTexture,
              set: (uu, Eu) => {
                uu.geometryThicknessTexture = Eu
              }
            },
            metadata: Eu
          }, Xl, ll), (0, du.e)(uu, null, xs, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissionLuminance" in uu,
              get: uu => uu.emissionLuminance,
              set: (uu, Eu) => {
                uu.emissionLuminance = Eu
              }
            },
            metadata: Eu
          }, ql, fl), (0, du.e)(uu, null, Ts, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissionColor" in uu,
              get: uu => uu.emissionColor,
              set: (uu, Eu) => {
                uu.emissionColor = Eu
              }
            },
            metadata: Eu
          }, Cl, bl), (0, du.e)(uu, null, Hs, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissionColorTexture" in uu,
              get: uu => uu.emissionColorTexture,
              set: (uu, Eu) => {
                uu.emissionColorTexture = Eu
              }
            },
            metadata: Eu
          }, cl, Nl), (0, du.e)(uu, null, As, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmWeight" in uu,
              get: uu => uu.thinFilmWeight,
              set: (uu, Eu) => {
                uu.thinFilmWeight = Eu
              }
            },
            metadata: Eu
          }, Ol, Yl), (0, du.e)(uu, null, ns, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmWeightTexture" in uu,
              get: uu => uu.thinFilmWeightTexture,
              set: (uu, Eu) => {
                uu.thinFilmWeightTexture = Eu
              }
            },
            metadata: Eu
          }, hl, Dl), (0, du.e)(uu, null, ys, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmThickness" in uu,
              get: uu => uu.thinFilmThickness,
              set: (uu, Eu) => {
                uu.thinFilmThickness = Eu
              }
            },
            metadata: Eu
          }, gl, Ml), (0, du.e)(uu, null, zs, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmThicknessMin" in uu,
              get: uu => uu.thinFilmThicknessMin,
              set: (uu, Eu) => {
                uu.thinFilmThicknessMin = Eu
              }
            },
            metadata: Eu
          }, el, Gl), (0, du.e)(uu, null, Rs, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmThicknessTexture" in uu,
              get: uu => uu.thinFilmThicknessTexture,
              set: (uu, Eu) => {
                uu.thinFilmThicknessTexture = Eu
              }
            },
            metadata: Eu
          }, pl, wl), (0, du.e)(uu, null, uU, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: uu => "thinFilmIor" in uu,
              get: uu => uu.thinFilmIor,
              set: (uu, Eu) => {
                uu.thinFilmIor = Eu
              }
            },
            metadata: Eu
          }, Jl, dl), (0, du.e)(uu, null, EU, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "ambientOcclusionTexture" in uu,
              get: uu => uu.ambientOcclusionTexture,
              set: (uu, Eu) => {
                uu.ambientOcclusionTexture = Eu
              }
            },
            metadata: Eu
          }, al, Pl), (0, du.e)(uu, null, jU, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: uu => "directIntensity" in uu,
              get: uu => uu.directIntensity,
              set: (uu, Eu) => {
                uu.directIntensity = Eu
              }
            },
            metadata: Eu
          }, ol, kl), (0, du.e)(uu, null, sU, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: uu => "environmentIntensity" in uu,
              get: uu => uu.environmentIntensity,
              set: (uu, Eu) => {
                uu.environmentIntensity = Eu
              }
            },
            metadata: Eu
          }, ml, vl), (0, du.e)(uu, null, UU, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useSpecularWeightFromTextureAlpha" in uu,
              get: uu => uu.useSpecularWeightFromTextureAlpha,
              set: (uu, Eu) => {
                uu.useSpecularWeightFromTextureAlpha = Eu
              }
            },
            metadata: Eu
          }, Kl, Vl), (0, du.e)(uu, null, ZU, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceAlphaTest" in uu,
              get: uu => uu.forceAlphaTest,
              set: (uu, Eu) => {
                uu.forceAlphaTest = Eu
              }
            },
            metadata: Eu
          }, rl, Ql), (0, du.e)(uu, null, XU, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaCutOff" in uu,
              get: uu => uu.alphaCutOff,
              set: (uu, Eu) => {
                uu.alphaCutOff = Eu
              }
            },
            metadata: Eu
          }, il, Wl), (0, du.e)(uu, null, lU, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAmbientOcclusionFromMetallicTextureRed" in uu,
              get: uu => uu.useAmbientOcclusionFromMetallicTextureRed,
              set: (uu, Eu) => {
                uu.useAmbientOcclusionFromMetallicTextureRed = Eu
              }
            },
            metadata: Eu
          }, Sl, Il), (0, du.e)(uu, null, qU, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAmbientInGrayScale" in uu,
              get: uu => uu.useAmbientInGrayScale,
              set: (uu, Eu) => {
                uu.useAmbientInGrayScale = Eu
              }
            },
            metadata: Eu
          }, Fl, Bl), (0, du.e)(uu, null, fU, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: uu => "usePhysicalLightFalloff" in uu,
              get: uu => uu.usePhysicalLightFalloff
            },
            metadata: Eu
          }, null, VU), (0, du.e)(uu, null, CU, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: uu => "useGLTFLightFalloff" in uu,
              get: uu => uu.useGLTFLightFalloff
            },
            metadata: Eu
          }, null, VU), (0, du.e)(uu, null, bU, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "useObjectSpaceNormalMap" in uu,
              get: uu => uu.useObjectSpaceNormalMap,
              set: (uu, Eu) => {
                uu.useObjectSpaceNormalMap = Eu
              }
            },
            metadata: Eu
          }, Ll, tl), (0, du.e)(uu, null, cU, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallax" in uu,
              get: uu => uu.useParallax,
              set: (uu, Eu) => {
                uu.useParallax = Eu
              }
            },
            metadata: Eu
          }, xl, Tl), (0, du.e)(uu, null, NU, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallaxOcclusion" in uu,
              get: uu => uu.useParallaxOcclusion,
              set: (uu, Eu) => {
                uu.useParallaxOcclusion = Eu
              }
            },
            metadata: Eu
          }, Hl, Al), (0, du.e)(uu, null, OU, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: uu => "parallaxScaleBias" in uu,
              get: uu => uu.parallaxScaleBias,
              set: (uu, Eu) => {
                uu.parallaxScaleBias = Eu
              }
            },
            metadata: Eu
          }, nl, yl), (0, du.e)(uu, null, YU, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "disableLighting" in uu,
              get: uu => uu.disableLighting,
              set: (uu, Eu) => {
                uu.disableLighting = Eu
              }
            },
            metadata: Eu
          }, zl, Rl), (0, du.e)(uu, null, hU, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceIrradianceInFragment" in uu,
              get: uu => uu.forceIrradianceInFragment,
              set: (uu, Eu) => {
                uu.forceIrradianceInFragment = Eu
              }
            },
            metadata: Eu
          }, uq, Eq), (0, du.e)(uu, null, DU, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: uu => "maxSimultaneousLights" in uu,
              get: uu => uu.maxSimultaneousLights,
              set: (uu, Eu) => {
                uu.maxSimultaneousLights = Eu
              }
            },
            metadata: Eu
          }, jq, sq), (0, du.e)(uu, null, gU, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapX" in uu,
              get: uu => uu.invertNormalMapX,
              set: (uu, Eu) => {
                uu.invertNormalMapX = Eu
              }
            },
            metadata: Eu
          }, Uq, Zq), (0, du.e)(uu, null, MU, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapY" in uu,
              get: uu => uu.invertNormalMapY,
              set: (uu, Eu) => {
                uu.invertNormalMapY = Eu
              }
            },
            metadata: Eu
          }, Xq, lq), (0, du.e)(uu, null, eU, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "twoSidedLighting" in uu,
              get: uu => uu.twoSidedLighting,
              set: (uu, Eu) => {
                uu.twoSidedLighting = Eu
              }
            },
            metadata: Eu
          }, qq, fq), (0, du.e)(uu, null, GU, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAlphaFresnel" in uu,
              get: uu => uu.useAlphaFresnel,
              set: (uu, Eu) => {
                uu.useAlphaFresnel = Eu
              }
            },
            metadata: Eu
          }, Cq, bq), (0, du.e)(uu, null, pU, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: uu => "useLinearAlphaFresnel" in uu,
              get: uu => uu.useLinearAlphaFresnel,
              set: (uu, Eu) => {
                uu.useLinearAlphaFresnel = Eu
              }
            },
            metadata: Eu
          }, cq, Nq), (0, du.e)(uu, null, wU, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "environmentBRDFTexture" in uu,
              get: uu => uu.environmentBRDFTexture,
              set: (uu, Eu) => {
                uu.environmentBRDFTexture = Eu
              }
            },
            metadata: Eu
          }, Oq, Yq), (0, du.e)(uu, null, JU, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: uu => "forceNormalForward" in uu,
              get: uu => uu.forceNormalForward,
              set: (uu, Eu) => {
                uu.forceNormalForward = Eu
              }
            },
            metadata: Eu
          }, hq, Dq), (0, du.e)(uu, null, dU, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: uu => "enableSpecularAntiAliasing" in uu,
              get: uu => uu.enableSpecularAntiAliasing,
              set: (uu, Eu) => {
                uu.enableSpecularAntiAliasing = Eu
              }
            },
            metadata: Eu
          }, gq, Mq), (0, du.e)(uu, null, aU, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useHorizonOcclusion" in uu,
              get: uu => uu.useHorizonOcclusion,
              set: (uu, Eu) => {
                uu.useHorizonOcclusion = Eu
              }
            },
            metadata: Eu
          }, eq, Gq), (0, du.e)(uu, null, PU, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useRadianceOcclusion" in uu,
              get: uu => uu.useRadianceOcclusion,
              set: (uu, Eu) => {
                uu.useRadianceOcclusion = Eu
              }
            },
            metadata: Eu
          }, pq, wq), (0, du.e)(uu, null, oU, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: uu => "unlit" in uu,
              get: uu => uu.unlit,
              set: (uu, Eu) => {
                uu.unlit = Eu
              }
            },
            metadata: Eu
          }, Jq, dq), (0, du.e)(uu, null, kU, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "applyDecalMapAfterDetailMap" in uu,
              get: uu => uu.applyDecalMapAfterDetailMap,
              set: (uu, Eu) => {
                uu.applyDecalMapAfterDetailMap = Eu
              }
            },
            metadata: Eu
          }, aq, Pq), (0, du.e)(uu, null, mU, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "debugMode" in uu,
              get: uu => uu.debugMode,
              set: (uu, Eu) => {
                uu.debugMode = Eu
              }
            },
            metadata: Eu
          }, oq, kq), (0, du.e)(uu, null, vU, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: uu => "transparencyMode" in uu,
              get: uu => uu.transparencyMode
            },
            metadata: Eu
          }, null, VU), Eu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Eu
          })
        })(), uu.SSS_QUALITY_LOW = 0, uu.SSS_QUALITY_MEDIUM = 1, uu.SSS_QUALITY_HIGH = 2, uu._noiseTextures = {}, uu.ForceGLSL = !1, uu._ShaderLoader = new cE.b((() => [Promise.all([ju.e(322), ju.e(385)]).then((() => ju(61956))), Promise.all([ju.e(327), ju.e(323), ju.e(384), ju.e(389)]).then((() => ju(61965)))]), (() => [Promise.all([ju.e(341), ju.e(343), ju.e(388)]).then((() => ju(62004))), Promise.all([ju.e(341), ju.e(344), ju.e(387), ju.e(390)]).then((() => ju(62019)))])), uu
      })(),
      RE = !1;
    RE || (RE = !0, (0, Hu.g)(), (0, FE.f)("BABYLON.OpenPBRMaterial", zE));
    var uj = ju(37514);
    class Ej {
      constructor(uu) {
        this.name = VE.b.NAME_PROCEDURALTEXTURE, this.vY = uu
      }
      register() {
        this.vY._beforeClearStage.registerStep(VE.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.vY.proceduralTexturesEnabled) {
          JE.h.StartPerformanceCounter("Procedural textures", this.vY.proceduralTextures.length > 0);
          for (let uu = 0; uu < this.vY.proceduralTextures.length; uu++) {
            const Eu = this.vY.proceduralTextures[uu];
            Eu._shouldRender() && Eu.render()
          }
          JE.h.EndPerformanceCounter("Procedural textures", this.vY.proceduralTextures.length > 0)
        }
      }
    }
    var jj = ju(40589);
    let sj = (() => {
      var uu;
      let Eu, su, Uu, Xu, lu, qu = ku.g,
        fu = [],
        Cu = [],
        bu = [],
        cu = [],
        Nu = [],
        Ou = [],
        hu = [],
        Du = [],
        gu = [];
      return uu = class extends qu {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(uu, Eu, ju, su) {
          let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, su, !Zu), this.isEnabled = ((0, du.g)(this, fu), (0, du.g)(this, Cu, !0)), this.autoClear = ((0, du.g)(this, bu), (0, du.g)(this, cu, !0)), this.onGenerated = (0, du.g)(this, Nu), this.onGeneratedObservable = new uj.d, this.onBeforeGenerationObservable = new uj.d, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, du.g)(this, Ou, void 0), this._drawWrapper = (0, du.g)(this, hu), this._textures = {}, this._size = (0, du.g)(this, Du, void 0), this._textureType = (0, du.g)(this, gu), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === Uu || Uu instanceof ku.g ? (this._options = {}, this._fallbackTexture = Uu) : (this._options = Uu, this._fallbackTexture = Uu.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let qu = (su = this.hV() || Yu.b.LastCreatedScene)._getComponent(VE.b.NAME_PROCEDURALTEXTURE);
          qu || (qu = new Ej(su), su.usu(qu)), this._options.skipSceneRegistration || su.proceduralTextures.push(this), this._fullEngine = su.wO(), this.name = uu, this.isRenderTarget = !0, this._size = Eu, this._textureType = lu, this._generateMipMaps = Zu, this._drawWrapper = new jj.b(this._fullEngine), this.setFragment(ju);
          const Mu = this._createRtWrapper(Xu, Eu, Zu, lu);
          this._texture = Mu.texture;
          const eu = [];
          eu.push(1, 1), eu.push(-1, 1), eu.push(-1, -1), eu.push(1, -1), this._vertexBuffers[Su.j.PositionKind] = new Su.j(this._fullEngine, eu, Su.j.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(uu, Eu, ju, su) {
          return uu ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(Eu, {
            generateMipMaps: ju,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: su,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(Eu, {
            generateMipMaps: ju,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: su,
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
            Eu = [];
          Eu.push(0), Eu.push(1), Eu.push(2), Eu.push(0), Eu.push(2), Eu.push(3), this._indexBuffer = uu.createIndexBuffer(Eu)
        }
        _rebuild() {
          const uu = this._vertexBuffers[Su.j.PositionKind];
          uu && uu._rebuild(), this._createIndexBuffer(), this.refreshRate === dE.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = dE.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(uu) {
          if (this.isReady()) return void uu(this);
          const Eu = this.getEffect();
          Eu && Eu.executeWhenCompiled((() => {
            uu(this)
          }))
        }
        isReady() {
          const uu = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const Eu = this._getDefines();
          if (this._drawWrapper.effect && Eu === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const su = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== Eu && (this._cachedDefines = Eu, this._drawWrapper.effect = uu.createEffect(su, [Su.j.PositionKind], this._uniforms, this._samplers, Eu, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([ju.e(393).then((() => ju(62091))), this._options.extraInitializationsAsync()]) : await Promise.all([ju.e(394).then((() => ju(62098))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await ju.e(393).then((() => ju(62091))) : await ju.e(394).then((() => ju(62098)))
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
        resize(uu, Eu) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const ju = this._texture.isCube;
          this._rtWrapper.dispose();
          const su = this._createRtWrapper(ju, uu, Eu, this._textureType);
          this._texture = su.texture, this._size = uu, this._generateMipMaps = Eu
        }
        _checkUniform(uu) {
          -1 === this._uniforms.indexOf(uu) && this._uniforms.push(uu)
        }
        setTexture(uu, Eu) {
          return -1 === this._samplers.indexOf(uu) && this._samplers.push(uu), this._textures[uu] = Eu, this
        }
        setFloat(uu, Eu) {
          return this._checkUniform(uu), this._floats[uu] = Eu, this
        }
        setInt(uu, Eu) {
          return this._checkUniform(uu), this._ints[uu] = Eu, this
        }
        setFloats(uu, Eu) {
          return this._checkUniform(uu), this._floatsArrays[uu] = Eu, this
        }
        setColor3(uu, Eu) {
          return this._checkUniform(uu), this._colors3[uu] = Eu, this
        }
        setColor4(uu, Eu) {
          return this._checkUniform(uu), this._colors4[uu] = Eu, this
        }
        setVector2(uu, Eu) {
          return this._checkUniform(uu), this._vectors2[uu] = Eu, this
        }
        setVector3(uu, Eu) {
          return this._checkUniform(uu), this._vectors3[uu] = Eu, this
        }
        setVector4(uu, Eu) {
          return this._checkUniform(uu), this._vectors4[uu] = Eu, this
        }
        setMatrix(uu, Eu) {
          return this._checkUniform(uu), this._matrices[uu] = Eu, this
        }
        render(uu) {
          const Eu = this.hV();
          if (!Eu) return;
          const ju = this._fullEngine;
          if (ju.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), ju.setState(!1), !this.nodeMaterialSource) {
            for (const uu in this._textures) this._drawWrapper.effect.setTexture(uu, this._textures[uu]);
            for (const uu in this._ints) this._drawWrapper.effect.setInt(uu, this._ints[uu]);
            for (const uu in this._floats) this._drawWrapper.effect.setFloat(uu, this._floats[uu]);
            for (const uu in this._floatsArrays) this._drawWrapper.effect.setArray(uu, this._floatsArrays[uu]);
            for (const uu in this._colors3) this._drawWrapper.effect.setColor3(uu, this._colors3[uu]);
            for (const uu in this._colors4) {
              const Eu = this._colors4[uu];
              this._drawWrapper.effect.setFloat4(uu, Eu.r, Eu.g, Eu.b, Eu.a)
            }
            for (const uu in this._vectors2) this._drawWrapper.effect.setVector2(uu, this._vectors2[uu]);
            for (const uu in this._vectors3) this._drawWrapper.effect.setVector3(uu, this._vectors3[uu]);
            for (const uu in this._vectors4) this._drawWrapper.effect.setVector4(uu, this._vectors4[uu]);
            for (const uu in this._matrices) this._drawWrapper.effect.setMatrix(uu, this._matrices[uu])
          }
          if (!this._texture || !this._rtWrapper) return;
          ju._enableGPUDebugMarkers && ju._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const su = ju.currentViewport;
          if (this.isCube)
            for (let Uu = 0; Uu < 6; Uu++) ju.bindFramebuffer(this._rtWrapper, Uu, void 0, void 0, !0), ju.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", Uu), this.autoClear && ju.clear(Eu.clearColor, !0, !1, !1), ju.drawElementsType(Zu.b.TriangleFillMode, 0, 6), ju.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let uu = 1;
            this._rtWrapper.is3D ? uu = this._rtWrapper.depth : this._rtWrapper.is2DArray && (uu = this._rtWrapper.layers);
            for (let su = 0; su < uu; su++) {
              if (ju.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, su), ju.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== uu ? su / (uu - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", su);
                for (const uu in this._textures) this._drawWrapper.effect.setTexture(uu, this._textures[uu])
              }
              this.autoClear && ju.clear(Eu.clearColor, !0, !1, !1), ju.drawElementsType(Zu.b.TriangleFillMode, 0, 6), ju.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          su && ju.setViewport(su), this.isCube && ju.generateMipMapsForCubemap(this._texture, !0), ju._enableGPUDebugMarkers && ju._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const Eu = this.getSize(),
            ju = new uu(this.name, Eu.width, this._fragment, this.hV(), this._fallbackTexture, this._generateMipMaps);
          return ju.hasAlpha = this.hasAlpha, ju.level = this.level, ju.coordinatesMode = this.coordinatesMode, ju
        }
        dispose() {
          const uu = this.hV();
          if (!uu) return;
          const Eu = uu.proceduralTextures.indexOf(this);
          Eu >= 0 && uu.proceduralTextures.splice(Eu, 1);
          const ju = this._vertexBuffers[Su.j.PositionKind];
          ju && (ju.dispose(), this._vertexBuffers[Su.j.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const ju = "function" === typeof Symbol && Symbol.metadata ? Object.create(qu[Symbol.metadata] ?? null) : void 0;
        Eu = [(0, au.E)()], su = [(0, au.E)()], Uu = [(0, au.E)()], Xu = [(0, au.E)()], lu = [(0, au.E)()], (0, du.e)(uu, null, lu, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: uu => "refreshRate" in uu,
            get: uu => uu.refreshRate
          },
          metadata: ju
        }, null, fu), (0, du.e)(null, null, Eu, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Eu) => {
              uu.isEnabled = Eu
            }
          },
          metadata: ju
        }, Cu, bu), (0, du.e)(null, null, su, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: uu => "autoClear" in uu,
            get: uu => uu.autoClear,
            set: (uu, Eu) => {
              uu.autoClear = Eu
            }
          },
          metadata: ju
        }, cu, Nu), (0, du.e)(null, null, Uu, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: uu => "_generateMipMaps" in uu,
            get: uu => uu._generateMipMaps,
            set: (uu, Eu) => {
              uu._generateMipMaps = Eu
            }
          },
          metadata: ju
        }, Ou, hu), (0, du.e)(null, null, Xu, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: uu => "_size" in uu,
            get: uu => uu._size,
            set: (uu, Eu) => {
              uu._size = Eu
            }
          },
          metadata: ju
        }, Du, gu), ju && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ju
        })
      })(), uu
    })();

    function Uj(uu) {
      return "texture" in uu
    }

    function Zj(uu) {
      return "value" in uu
    }
    async function Xj(uu, Eu, su) {
      const Uu = [Eu.red, Eu.green, Eu.blue, Eu.alpha],
        Zu = [],
        Xu = [];
      for (let ju = 0; ju < 4; ju++) {
        const uu = Uu[ju];
        if (uu)
          if (Uj(uu)) {
            if (uu.sourceChannel < 0 || uu.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let Eu = Zu.indexOf(uu.texture); - 1 === Eu && (Eu = Zu.length, Zu.push(uu.texture)), Xu[ju] = Eu
          } else {
            if (!Zj(uu)) throw new Error("Invalid channel input configuration");
            if (uu.value < 0 || uu.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            Xu[ju] = -1
          }
        else Xu[ju] = -1
      }
      let lu = Eu.outputSize;
      if (!lu && Zu.length > 0) {
        let uu = 0;
        for (const Eu of Zu) {
          const ju = Eu.getSize(),
            su = Math.max(ju.width, ju.height);
          su > uu && (uu = su, lu = ju.width === ju.height ? uu : ju)
        }
      }
      lu = lu || 512;
      const qu = [],
        fu = new Set;
      for (let ju = 0; ju < 4; ju++) {
        const uu = Uu[ju],
          Eu = ["RED", "GREEN", "BLUE", "ALPHA"][ju];
        if (uu && Uj(uu)) {
          qu.push(`${Eu}_FROM_TEXTURE`);
          const uu = Xu[ju];
          fu.add(uu)
        }
      }
      fu.forEach((uu => {
        qu.push(`USE_TEXTURE${uu}`)
      }));
      const Cu = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: su.wO().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            su.wO().isWebGPU ? await Promise.all([ju.e(391).then((() => ju(62078)))]) : await Promise.all([ju.e(392).then((() => ju(62087)))])
          },
          skipSceneRegistration: !0
        },
        bu = new sj(uu, lu, "textureMerger", su, Cu);
      bu.refreshRate = -1, bu.defines = qu.length > 0 ? "#define " + qu.join("\n#define ") + "\n" : "";
      for (let ju = 0; ju < Zu.length; ju++) cu = Zu[ju], (Nu = bu).uOffset = cu.uOffset, Nu.vOffset = cu.vOffset, Nu.uScale = cu.uScale, Nu.vScale = cu.vScale, Nu.uAng = cu.uAng, Nu.vAng = cu.vAng, Nu.wAng = cu.wAng, Nu.uRotationCenter = cu.uRotationCenter, Nu.vRotationCenter = cu.vRotationCenter, bu.setTexture(`inputTexture${ju}`, Zu[ju]);
      var cu, Nu;
      for (let ju = 0; ju < 4; ju++) {
        const uu = Uu[ju],
          Eu = ["red", "green", "blue", "alpha"][ju];
        if (uu && Uj(uu)) {
          const su = Xu[ju];
          bu.setInt(`${Eu}TextureIndex`, su), bu.setInt(`${Eu}SourceChannel`, uu.sourceChannel)
        } else {
          let su;
          su = uu && Zj(uu) ? uu.value : 3 === ju ? 1 : 0, bu.setFloat(`${Eu}ConstantValue`, su)
        }
      }
      return await new Promise(((uu, Eu) => {
        bu.executeWhenReady((() => {
          try {
            bu.render(), uu(bu)
          } catch (ju) {
            Eu(ju instanceof Error ? ju : new Error(String(ju)))
          }
        }))
      }))
    }

    function lj(uu, Eu) {
      return {
        texture: uu,
        sourceChannel: Eu
      }
    }

    function qj(uu) {
      return {
        value: uu
      }
    }

    function fj(uu, Eu, ju, su) {
      return {
        red: uu,
        green: Eu,
        blue: ju,
        alpha: su
      }
    }
    var Cj = ju(40101),
      bj = ju(40186),
      cj = ju(37504),
      Nj = ju(40243),
      Oj = ju(40179);
    class Yj {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class hj extends Cj.c {
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
        return !!this._options?.enableMultiview || this.uY > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Yj;
        super(null), void 0 === uu.deterministicLockstep && (uu.deterministicLockstep = !1), void 0 !== uu.timeStep && (this._timeStep = uu.timeStep), void 0 === uu.lockstepMaxSteps && (uu.lockstepMaxSteps = 4), this._options = uu, cj.c.SetMatrixPrecision(!!uu.useHighPrecisionMatrix), this._caps = {
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
        }, uu.renderingCanvas && (this._renderingCanvas = uu.renderingCanvas), Pu.b.Log(`Babylon.js v${Cj.c.Version} - Null engine`);
        const Eu = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (Eu.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (Eu.Blob = function() {})
      }
      createVertexBuffer(uu) {
        const Eu = new bj.e;
        return Eu.references = 1, Eu
      }
      createIndexBuffer(uu) {
        const Eu = new bj.e;
        return Eu.references = 1, Eu
      }
      clear(uu, Eu, ju) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(uu, Eu, ju) {
        this._cachedViewport = uu
      }
      createUniformBuffer(uu) {
        const Eu = new bj.e;
        return Eu.references = 1, Eu.Mb = uu instanceof Array ? uu.length * Float32Array.BYTES_PER_ELEMENT : uu.byteLength, Eu
      }
      createDynamicUniformBuffer(uu) {
        return this.createUniformBuffer(uu)
      }
      updateUniformBuffer(uu, Eu, ju, su) {}
      bindUniformBufferBase(uu, Eu, ju) {}
      bindUniformBlock(uu, Eu, ju) {}
      createShaderProgram(uu, Eu, ju, su, Uu) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(uu, Eu) {
        return []
      }
      getAttributes(uu, Eu) {
        return []
      }
      bindSamplers(uu) {
        this._currentEffect = null
      }
      enableEffect(uu) {
        uu = null !== uu && (0, Oj.e)(uu) ? uu.effect : uu, this._currentEffect = uu, uu && (uu.onBind && uu.onBind(uu), uu._onBindObservable && uu._onBindObservable.notifyObservers(uu))
      }
      setStateCullFaceType(uu, Eu) {}
      setState(uu) {}
      setIntArray(uu, Eu) {
        return !0
      }
      setIntArray2(uu, Eu) {
        return !0
      }
      setIntArray3(uu, Eu) {
        return !0
      }
      setIntArray4(uu, Eu) {
        return !0
      }
      setFloatArray(uu, Eu) {
        return !0
      }
      setFloatArray2(uu, Eu) {
        return !0
      }
      setFloatArray3(uu, Eu) {
        return !0
      }
      setFloatArray4(uu, Eu) {
        return !0
      }
      setArray(uu, Eu) {
        return !0
      }
      setArray2(uu, Eu) {
        return !0
      }
      setArray3(uu, Eu) {
        return !0
      }
      setArray4(uu, Eu) {
        return !0
      }
      setMatrices(uu, Eu) {
        return !0
      }
      setMatrix3x3(uu, Eu) {
        return !0
      }
      setMatrix2x2(uu, Eu) {
        return !0
      }
      setFloat(uu, Eu) {
        return !0
      }
      setFloat2(uu, Eu, ju) {
        return !0
      }
      setFloat3(uu, Eu, ju, su) {
        return !0
      }
      setBool(uu, Eu) {
        return !0
      }
      setFloat4(uu, Eu, ju, su, Uu) {
        return !0
      }
      setAlphaMode(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[ju] !== uu && (this.alphaState.setAlphaBlend(0 !== uu, 0), Eu || this.setDepthWrite(0 === uu), this._alphaMode[ju] = uu)
      }
      bindBuffers(uu, Eu, ju) {}
      wipeCaches(uu) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, uu && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(uu, Eu, ju, su) {}
      drawElementsType(uu, Eu, ju, su) {}
      drawArraysType(uu, Eu, ju, su) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(uu) {}
      createTexture(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Xu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          lu = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const qu = new aE.c(this, 1),
          fu = String(uu);
        return qu.url = fu, qu.generateMipMaps = !Eu, qu.samplingMode = Uu, qu.invertY = ju, qu.baseWidth = this._options.textureSize, qu.baseHeight = this._options.textureSize, qu.width = this._options.textureSize, qu.height = this._options.textureSize, lu && (qu.format = lu), Xu && (qu._buffer = Xu), qu.isReady = !0, Zu && setTimeout((() => {
          Zu(qu)
        })), this._internalTexturesCache.push(qu), qu
      }
      _createHardwareRenderTargetWrapper(uu, Eu, ju) {
        const su = new Nj.b(uu, Eu, ju, this);
        return this._renderTargetWrapperCache.push(su), su
      }
      createRenderTargetTexture(uu, Eu) {
        const ju = this._createHardwareRenderTargetWrapper(!1, !1, uu),
          su = {};
        void 0 !== Eu && "object" === typeof Eu ? (su.generateMipMaps = Eu.generateMipMaps, su.generateDepthBuffer = void 0 === Eu.generateDepthBuffer || Eu.generateDepthBuffer, su.generateStencilBuffer = su.generateDepthBuffer && Eu.generateStencilBuffer, su.type = void 0 === Eu.type ? 0 : Eu.type, su.samplingMode = void 0 === Eu.samplingMode ? 3 : Eu.samplingMode) : (su.generateMipMaps = Eu, su.generateDepthBuffer = !0, su.generateStencilBuffer = !1, su.type = 0, su.samplingMode = 3);
        const Uu = new aE.c(this, 5);
        ju.setTexture(Uu);
        const Zu = uu.width || uu,
          Xu = uu.height || uu;
        return ju._generateDepthBuffer = su.generateDepthBuffer, ju._generateStencilBuffer = !!su.generateStencilBuffer, Uu.baseWidth = Zu, Uu.baseHeight = Xu, Uu.width = Zu, Uu.height = Xu, Uu.isReady = !0, Uu.samples = 1, Uu.generateMipMaps = !!su.generateMipMaps, Uu.samplingMode = su.samplingMode, Uu.type = su.type, this._internalTexturesCache.push(Uu), ju
      }
      createMultiviewRenderTargetTexture(uu, Eu) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const ju = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: uu,
            height: Eu
          }),
          su = new aE.c(this, 5, !0);
        return su.baseWidth = uu, su.baseHeight = Eu, su.width = uu, su.height = Eu, su.isMultiview = !0, su.isReady = !0, su.format = 5, su.samples = 1, ju.setTextures(su), ju
      }
      bindMultiviewFramebuffer(uu) {
        this.bindFramebuffer(uu, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(uu, Eu) {
        const ju = this._createHardwareRenderTargetWrapper(!1, !0, uu),
          su = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...Eu
          };
        su.generateStencilBuffer = su.generateDepthBuffer && su.generateStencilBuffer, (1 !== su.type || this._caps.textureFloatLinearFiltering) && (2 !== su.type || this._caps.textureHalfFloatLinearFiltering) || (su.samplingMode = 1), ju._generateDepthBuffer = su.generateDepthBuffer, ju._generateStencilBuffer = !!su.generateStencilBuffer;
        const Uu = new aE.c(this, 5);
        return Uu.baseWidth = uu, Uu.baseHeight = uu, Uu.width = uu, Uu.height = uu, Uu.isReady = !0, Uu.isCube = !0, Uu.samples = 1, Uu.generateMipMaps = !!su.generateMipMaps, Uu.samplingMode = su.samplingMode, Uu.type = su.type, this._internalTexturesCache.push(Uu), ju
      }
      updateTextureSamplingMode(uu, Eu) {
        Eu.samplingMode = uu
      }
      createRawTexture(uu, Eu, ju, su, Uu, Zu, Xu) {
        let lu = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qu = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          fu = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const Cu = new aE.c(this, 3);
        return Cu.baseWidth = Eu, Cu.baseHeight = ju, Cu.width = Eu, Cu.height = ju, Cu.format = su, Cu.generateMipMaps = Uu, Cu.samplingMode = Xu, Cu.invertY = Zu, Cu._compression = lu, Cu.type = qu, Cu._useSRGBBuffer = fu, this._doNotHandleContextLost || (Cu._bufferView = uu), Cu
      }
      updateRawTexture(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        uu && (uu._bufferView = Eu, uu.format = ju, uu.invertY = su, uu._compression = Uu, uu.type = Zu, uu._useSRGBBuffer = Xu)
      }
      bindFramebuffer(uu, Eu, ju, su, Uu) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = uu, this._currentFramebuffer = null, this._cachedViewport && !Uu && this.setViewport(this._cachedViewport, ju, su)
      }
      unBindFramebuffer(uu) {
        let Eu = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, Eu && Eu(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(uu) {
        const Eu = new bj.e;
        return Eu.references = 1, Eu.Mb = 1, Eu
      }
      updateDynamicTexture(uu, Eu, ju) {}
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
      updateDynamicIndexBuffer(uu, Eu) {}
      updateDynamicVertexBuffer(uu, Eu, ju, su) {}
      _bindTextureDirectly(uu, Eu) {
        return this._boundTexturesCache[this._activeChannel] !== Eu && (this._boundTexturesCache[this._activeChannel] = Eu, !0)
      }
      _bindTexture(uu, Eu) {
        uu < 0 || this._bindTextureDirectly(0, Eu)
      }
      _deleteBuffer(uu) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(uu) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(uu, Eu, ju, su, Uu) {}
      _uploadDataToTextureDirectly(uu, Eu) {}
      _uploadArrayBufferViewToTexture(uu, Eu) {}
      _uploadImageToTexture(uu, Eu) {}
    }
    ju(40290), ju(40332), ju(40287);
    async function Dj(uu) {
      const Eu = uu.getInternalTexture();
      if (!Eu || 1 !== Eu.source) return null;
      if (Eu.invertY) {
        const Eu = uu.hV()?.wO();
        if (!(Eu instanceof hj)) return null
      }
      const ju = Eu._buffer;
      let su, Zu = uu.mimeType;
      try {
        ju ? ArrayBuffer.isView(ju) ? su = ju.buffer.slice(ju.byteOffset, ju.byteOffset + ju.byteLength) : ju instanceof ArrayBuffer ? su = ju : ju instanceof Blob ? (su = await ju.arrayBuffer(), Zu = ju.type || Zu) : "string" === typeof ju ? (su = await Uu.Tools.LoadFileAsync(ju), Zu = (0, qu.e)(ju) || Zu) : "undefined" !== typeof HTMLImageElement && ju instanceof HTMLImageElement && (su = await Uu.Tools.LoadFileAsync(ju.src), Zu = (0, qu.e)(ju.src) || Zu) : (su = await Uu.Tools.LoadFileAsync(Eu.url), Zu = (0, qu.e)(Eu.url) || Zu)
      } catch {
        return null
      }
      if (su && !Zu && Eu.url) {
        const uu = Eu.url.match(/^data:([^;,]+)/);
        Zu = uu ? uu[1] : (0, qu.e)(Eu.url)
      }
      return su && Zu ? {
        data: su,
        mimeType: Zu
      } : null
    }
    const gj = 1e-6,
      Mj = new hu.Color3(.04, .04, .04),
      ej = 1024,
      Gj = hu.Color3.White(),
      pj = hu.Color3.BlackReadOnly;

    function wj(uu) {
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

    function Jj(uu, Eu, ju) {
      if (Eu < Mj.r) return 0;
      const su = Mj.r,
        Uu = uu * ju / (1 - Mj.r) + Eu - 2 * Mj.r,
        Zu = Uu * Uu - 4 * su * (Mj.r - Eu);
      return Mu.Clamp((-Uu + Math.sqrt(Zu)) / (2 * su), 0, 1)
    }

    function dj(uu) {
      const Eu = uu.diffuseColor.toLinearSpace(uu.hV().wO().useExactSrgbConversions).scale(.5),
        ju = uu.alpha,
        su = function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wu.p(0, 1),
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Wu.p(0, .1),
            su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Wu.p(0, .1),
            Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Wu.p(1300, .1);
          return function(uu, Eu, ju, su, Uu) {
            return (1 - uu) * (1 - uu) * (1 - uu) * Eu + 3 * (1 - uu) * (1 - uu) * uu * ju + 3 * (1 - uu) * uu * uu * su + uu * uu * uu * Uu
          }(Math.pow(uu / Uu.x, .333333), Eu.y, ju.y, su.y, Uu.y)
        }(Mu.Clamp(uu.specularPower, 0, ej));
      return {
        baseColorFactor: [Eu.r, Eu.g, Eu.b, ju],
        metallicFactor: 0,
        roughnessFactor: su
      }
    }

    function aj(uu, Eu) {
      Eu.needAlphaBlending() ? uu.alphaMode = "BLEND" : Eu.needAlphaTesting() && (uu.alphaMode = "MASK", uu.alphaCutoff = Eu.alphaCutOff)
    }

    function Pj(uu, Eu, ju) {
      const su = new Uint8Array(uu * Eu * 4);
      for (let Uu = 0; Uu < su.length; Uu += 4) su[Uu] = su[Uu + 1] = su[Uu + 2] = su[Uu + 3] = 255;
      return pu.d.CreateRGBATexture(su, uu, Eu, ju)
    }

    function oj(uu) {
      if (uu instanceof Uint8Array) {
        const Eu = uu.length,
          ju = new Float32Array(uu.length);
        for (let su = 0; su < Eu; ++su) ju[su] = uu[su] / 255;
        return ju
      }
      if (uu instanceof Float32Array) return uu;
      throw new Error("Unsupported pixel format!")
    }
    class kj {
      constructor(uu) {
        this._exporter = uu, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(uu) {
        return uu ? this._textureMap.get(uu.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(uu, Eu) {
        const ju = dj(uu),
          su = {
            name: uu.name
          };
        if (null == uu.backFaceCulling || uu.backFaceCulling || (uu.twoSidedLighting || Uu.Tools.Warn(uu.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), su.doubleSided = !0), Eu) {
          const Eu = [],
            Uu = uu.diffuseTexture;
          Uu && Eu.push(this.exportTextureAsync(Uu).then((uu => {
            uu && (ju.baseColorTexture = uu)
          })));
          const Zu = uu.bumpTexture;
          Zu && Eu.push(this.exportTextureAsync(Zu).then((uu => {
            uu && (su.normalTexture = uu, 1 !== Zu.level && (su.normalTexture.scale = Zu.level))
          })));
          const Xu = uu.emissiveTexture;
          Xu && (su.emissiveFactor = [1, 1, 1], Eu.push(this.exportTextureAsync(Xu).then((uu => {
            uu && (su.emissiveTexture = uu)
          }))));
          const lu = uu.ambientTexture;
          lu && Eu.push(this.exportTextureAsync(lu).then((uu => {
            if (uu) {
              const Eu = {
                index: uu.index
              };
              su.occlusionTexture = Eu
            }
          }))), Eu.length > 0 && (this._exporter._materialNeedsUVsSet.add(uu), await Promise.all(Eu))
        }(uu.alpha < 1 || uu.opacityTexture) && (uu.alphaMode === wu.e.ALPHA_COMBINE ? su.alphaMode = "BLEND" : Uu.Tools.Warn(uu.name + ": glTF 2.0 does not support alpha mode: " + uu.alphaMode.toString())), uu.emissiveColor && !uu.emissiveColor.equalsWithEpsilon(pj, gj) && (su.emissiveFactor = uu.emissiveColor.Osu()), su.pbrMetallicRoughness = ju, aj(su, uu), await this._finishMaterialAsync(su, uu);
        const Zu = this._exporter._materials;
        return Zu.push(su), Zu.length - 1
      }
      async _finishMaterialAsync(uu, Eu) {
        const ju = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", uu, Eu),
          su = [];
        for (const Uu of ju) su.push(this.exportTextureAsync(Uu));
        await Promise.all(su), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", uu, Eu)
      }
      _resizeTexturesToSameDimensions(uu, Eu, ju) {
        const su = uu ? uu.getSize() : {
            width: 0,
            height: 0
          },
          Uu = Eu ? Eu.getSize() : {
            width: 0,
            height: 0
          };
        let Zu, Xu;
        return su.width < Uu.width ? (Zu = uu && uu instanceof Gu.c ? eu.i.CreateResizedCopy(uu, Uu.width, Uu.height, !0) : Pj(Uu.width, Uu.height, ju), Xu = Eu) : su.width > Uu.width ? (Xu = Eu && Eu instanceof Gu.c ? eu.i.CreateResizedCopy(Eu, su.width, su.height, !0) : Pj(su.width, su.height, ju), Zu = uu) : (Zu = uu, Xu = Eu), {
          texture1: Zu,
          texture2: Xu
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(uu, Eu, ju) {
        const su = new Array;
        if (!uu && !Eu) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const Uu = uu ? uu.hV() : Eu ? Eu.hV() : null;
        if (Uu) {
          const Zu = this._resizeTexturesToSameDimensions(uu, Eu, Uu),
            Xu = Zu.texture1?.getSize();
          let lu, qu;
          const fu = Xu.width,
            Cu = Xu.height,
            bu = await Zu.texture1.readPixels(),
            cu = await Zu.texture2.readPixels();
          if (!bu) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (lu = oj(bu), !cu) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          qu = oj(cu);
          const Nu = qu.byteLength,
            Ou = new Uint8Array(Nu),
            Yu = new Uint8Array(Nu),
            Du = 4,
            gu = new hu.Color3(0, 0, 0);
          let Mu = 0,
            eu = 0;
          for (let uu = 0; uu < Cu; ++uu)
            for (let Eu = 0; Eu < fu; ++Eu) {
              const su = (fu * uu + Eu) * Du,
                Xu = {
                  diffuseColor: new hu.Color3(lu[su], lu[su + 1], lu[su + 2]).toLinearSpace(Uu.wO().useExactSrgbConversions).multiply(ju.diffuseColor),
                  specularColor: new hu.Color3(qu[su], qu[su + 1], qu[su + 2]).toLinearSpace(Uu.wO().useExactSrgbConversions).multiply(ju.specularColor),
                  glossiness: qu[su + 3] * ju.glossiness
                },
                Cu = this._convertSpecularGlossinessToMetallicRoughness(Xu);
              gu.r = Math.max(gu.r, Cu.baseColor.r), gu.g = Math.max(gu.g, Cu.baseColor.g), gu.b = Math.max(gu.b, Cu.baseColor.b), Mu = Math.max(Mu, Cu.metallic), eu = Math.max(eu, Cu.roughness), Yu[su] = 255 * Cu.baseColor.r, Yu[su + 1] = 255 * Cu.baseColor.g, Yu[su + 2] = 255 * Cu.baseColor.b, Yu[su + 3] = Zu.texture1.hasAlpha ? 255 * lu[su + 3] : 255, Ou[su] = 0, Ou[su + 1] = 255 * Cu.roughness, Ou[su + 2] = 255 * Cu.metallic, Ou[su + 3] = 255
            }
          const Gu = {
            baseColor: gu,
            metallic: Mu,
            roughness: eu
          };
          let pu = !1,
            wu = !1;
          for (let uu = 0; uu < Cu; ++uu)
            for (let Eu = 0; Eu < fu; ++Eu) {
              const ju = (fu * uu + Eu) * Du;
              Yu[ju] /= Gu.baseColor.r > gj ? Gu.baseColor.r : 1, Yu[ju + 1] /= Gu.baseColor.g > gj ? Gu.baseColor.g : 1, Yu[ju + 2] /= Gu.baseColor.b > gj ? Gu.baseColor.b : 1;
              const su = hu.Color3.FromInts(Yu[ju], Yu[ju + 1], Yu[ju + 2]).toGammaSpace(Uu.wO().useExactSrgbConversions);
              Yu[ju] = 255 * su.r, Yu[ju + 1] = 255 * su.g, Yu[ju + 2] = 255 * su.b, su.equalsWithEpsilon(Gj, gj) || (wu = !0), Ou[ju + 1] /= Gu.roughness > gj ? Gu.roughness : 1, Ou[ju + 2] /= Gu.metallic > gj ? Gu.metallic : 1;
              hu.Color3.FromInts(255, Ou[ju + 1], Ou[ju + 2]).equalsWithEpsilon(Gj, gj) || (pu = !0)
            }
          return pu && su.push((0, Ju.EncodeImageAsync)(Ou, fu, Cu).then((uu => {
            Gu.metallicRoughnessTextureData = uu
          }))), wu && su.push((0, Ju.EncodeImageAsync)(Yu, fu, Cu).then((uu => {
            Gu.baseColorTextureData = uu
          }))), await Promise.all(su).then((() => Gu))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(uu) {
        const Eu = this._getPerceivedBrightness(uu.diffuseColor),
          ju = this._getPerceivedBrightness(uu.specularColor),
          su = 1 - this._getMaxComponent(uu.specularColor),
          Uu = Jj(Eu, ju, su),
          Zu = uu.diffuseColor.scale(su / (1 - Mj.r) / Math.max(1 - Uu, gj)),
          Xu = uu.specularColor.subtract(Mj.scale(1 - Uu)).scale(1 / Math.max(Uu, gj));
        let lu = hu.Color3.Lerp(Zu, Xu, Uu * Uu);
        lu = lu.clampToRef(0, 1, lu);
        return {
          baseColor: lu,
          metallic: Uu,
          roughness: 1 - uu.glossiness
        }
      }
      _getPerceivedBrightness(uu) {
        return Math.sqrt(.299 * uu.r * uu.r + .587 * uu.g * uu.g + .114 * uu.b * uu.b)
      }
      _getMaxComponent(uu) {
        return Math.max(uu.r, Math.max(uu.g, uu.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        const fu = [],
          Cu = {
            baseColor: uu,
            metallic: Eu,
            roughness: ju
          };
        if (qu)
          if (Xu instanceof zE) {
            if (Xu.geometryOpacityTexture) {
              const uu = su && su.getInternalTexture() ? su.getInternalTexture().uniqueId : 0,
                Eu = Xu.geometryOpacityTexture && Xu.geometryOpacityTexture.getInternalTexture() ? Xu.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                ju = Number(`${uu}${Eu}`),
                Uu = this._textureMap.get(ju);
              Uu ? lu.baseColorTexture = Uu : fu.push(Xj("baseColorOpacityTexture", fj(su ? lj(su, 0) : qj(1), su ? lj(su, 1) : qj(1), su ? lj(su, 2) : qj(1), lj(Xu.geometryOpacityTexture, 0)), Xu.hV()).then((async uu => {
                const Eu = await this.exportTextureAsync(uu, ju);
                Eu && (lu.baseColorTexture = Eu)
              })))
            } else su && fu.push(this.exportTextureAsync(su).then((uu => {
              uu && (lu.baseColorTexture = uu)
            })));
            if (Xu._useMetallicFromMetallicTextureBlue && Uu) fu.push(this.exportTextureAsync(Uu).then((uu => {
              uu && (lu.metallicRoughnessTexture = uu)
            })));
            else if (Zu || Uu) {
              const uu = Uu && Uu.getInternalTexture() ? Uu.getInternalTexture().uniqueId : 0,
                Eu = Zu && Zu.getInternalTexture() ? Zu.getInternalTexture().uniqueId : 0,
                ju = Number(`${uu}${Eu}`),
                su = this._textureMap.get(ju);
              su ? lu.metallicRoughnessTexture = su : fu.push(Xj("MetalRoughTexture", fj(Xu.ambientOcclusionTexture ? lj(Xu.ambientOcclusionTexture, 0) : qj(1), Zu ? lj(Zu, 0) : qj(1), Uu ? lj(Uu, 0) : qj(1)), Xu.hV()).then((async uu => {
                const Eu = await this.exportTextureAsync(uu, ju);
                Eu && (lu.metallicRoughnessTexture = Eu)
              })))
            }
          } else su && fu.push(this.exportTextureAsync(su).then((uu => {
            uu && (lu.baseColorTexture = uu)
          }))), Uu && fu.push(this.exportTextureAsync(Uu).then((uu => {
            uu && (lu.metallicRoughnessTexture = uu)
          })));
        return fu.length > 0 && (this._exporter._materialNeedsUVsSet.add(Xu), await Promise.all(fu)), Cu
      }
      _getTextureSampler(uu) {
        const Eu = {};
        if (!uu || !(uu instanceof Gu.c)) return Eu;
        const ju = this._getGLTFTextureWrapMode(uu.wrapU);
        10497 !== ju && (Eu.wrapS = ju);
        const su = this._getGLTFTextureWrapMode(uu.wrapV);
        switch (10497 !== su && (Eu.wrapT = su), uu.samplingMode) {
          case Gu.c.LINEAR_LINEAR:
            Eu.magFilter = 9729, Eu.minFilter = 9729;
            break;
          case Gu.c.LINEAR_NEAREST:
            Eu.magFilter = 9729, Eu.minFilter = 9728;
            break;
          case Gu.c.NEAREST_LINEAR:
            Eu.magFilter = 9728, Eu.minFilter = 9729;
            break;
          case Gu.c.NEAREST_LINEAR_MIPLINEAR:
            Eu.magFilter = 9728, Eu.minFilter = 9987;
            break;
          case Gu.c.NEAREST_NEAREST:
            Eu.magFilter = 9728, Eu.minFilter = 9728;
            break;
          case Gu.c.NEAREST_LINEAR_MIPNEAREST:
            Eu.magFilter = 9728, Eu.minFilter = 9985;
            break;
          case Gu.c.LINEAR_NEAREST_MIPNEAREST:
            Eu.magFilter = 9729, Eu.minFilter = 9984;
            break;
          case Gu.c.LINEAR_NEAREST_MIPLINEAR:
            Eu.magFilter = 9729, Eu.minFilter = 9986;
            break;
          case Gu.c.NEAREST_NEAREST_MIPLINEAR:
            Eu.magFilter = 9728, Eu.minFilter = 9986;
            break;
          case Gu.c.LINEAR_LINEAR_MIPLINEAR:
            Eu.magFilter = 9729, Eu.minFilter = 9987;
            break;
          case Gu.c.LINEAR_LINEAR_MIPNEAREST:
            Eu.magFilter = 9729, Eu.minFilter = 9985;
            break;
          case Gu.c.NEAREST_NEAREST_MIPNEAREST:
            Eu.magFilter = 9728, Eu.minFilter = 9984
        }
        return Eu
      }
      _getGLTFTextureWrapMode(uu) {
        switch (uu) {
          case Gu.c.WRAP_ADDRESSMODE:
            return 10497;
          case Gu.c.CLAMP_ADDRESSMODE:
            return 33071;
          case Gu.c.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return Uu.Tools.Error(`Unsupported Texture Wrap Mode ${uu}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(uu, Eu, ju) {
        const su = {
            diffuseColor: uu._albedoColor,
            specularColor: uu._reflectivityColor,
            glossiness: uu._microSurface
          },
          Uu = uu._albedoTexture,
          Zu = uu._reflectivityTexture,
          Xu = uu._useMicroSurfaceFromReflectivityMapAlpha;
        if (Zu && !Xu) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((Uu || Zu) && ju) {
          this._exporter._materialNeedsUVsSet.add(uu);
          const ju = this._exportTextureSampler(Uu || Zu),
            Xu = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(Uu, Zu, su),
            lu = this._exporter._textures;
          if (Xu.baseColorTextureData) {
            const uu = await this._exportImageAsync(`baseColor${lu.length}`, Xu.baseColorTextureData);
            Eu.baseColorTexture = this._exportTextureInfo(uu, ju, Uu?.coordinatesIndex)
          }
          if (Xu.metallicRoughnessTextureData) {
            const uu = await this._exportImageAsync(`metallicRoughness${lu.length}`, Xu.metallicRoughnessTextureData);
            Eu.metallicRoughnessTexture = this._exportTextureInfo(uu, ju, Zu?.coordinatesIndex)
          }
          return Xu
        }
        return this._convertSpecularGlossinessToMetallicRoughness(su)
      }
      async exportPBRMaterialAsync(uu, Eu) {
        const ju = {},
          su = {
            name: uu.name
          },
          Uu = uu.isMetallicWorkflow();
        if (Uu) {
          const Eu = uu._albedoColor,
            su = uu.alpha;
          Eu && (ju.baseColorFactor = [Eu.r, Eu.g, Eu.b, su])
        }
        const Zu = Uu ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(uu._albedoColor, uu._metallic, uu._roughness, uu._albedoTexture, uu._metallicTexture, uu._metallicTexture, uu, ju, Eu) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(uu, ju, Eu);
        await this._setMetallicRoughnessPbrMaterialAsync(Zu, uu, su, ju, Eu), await this._finishMaterialAsync(su, uu);
        const Xu = this._exporter._materials;
        return Xu.push(su), Xu.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(uu, Eu, ju, su, Zu) {
        if (aj(ju, Eu), uu.baseColor.equalsWithEpsilon(Gj, gj) && Mu.WithinEpsilon(Eu.alpha, 1, gj) || (su.baseColorFactor = [uu.baseColor.r, uu.baseColor.g, uu.baseColor.b, Eu.alpha]), null != uu.metallic && 1 !== uu.metallic && (su.metallicFactor = uu.metallic), null != uu.roughness && 1 !== uu.roughness && (su.roughnessFactor = uu.roughness), null == Eu.backFaceCulling || Eu.backFaceCulling || (Eu._twoSidedLighting || Uu.Tools.Warn(Eu.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), ju.doubleSided = !0), Zu) {
          const uu = [],
            Uu = Eu instanceof pE ? Eu._bumpTexture : Eu.geometryNormalTexture;
          Uu && uu.push(this.exportTextureAsync(Uu).then((uu => {
            uu && (ju.normalTexture = uu, 1 !== Uu.level && (ju.normalTexture.scale = Uu.level))
          })));
          const Zu = Eu instanceof pE ? Eu._ambientTexture : Eu.ambientOcclusionTexture;
          Zu && uu.push(new Promise((async uu => {
            if (Eu instanceof zE && su.metallicRoughnessTexture) {
              const Eu = this._exportTextureSampler(Zu),
                ju = this._exporter._textures[su.metallicRoughnessTexture.index].source,
                Uu = this._exportTextureInfo(ju, Eu, Zu.coordinatesIndex);
              return this._textureMap.set(Zu.uniqueId, Uu), this._exporter._extensionsPostExportTextures("exporter", Uu, Zu), uu(Uu)
            }
            return uu(await this.exportTextureAsync(Zu))
          })).then((async uu => {
            if (uu) {
              const su = {
                index: uu.index,
                texCoord: uu.texCoord,
                extensions: uu.extensions
              };
              ju.occlusionTexture = su, su.strength = Eu instanceof pE ? Eu._ambientTextureStrength : Eu.ambientOcclusionTexture.level
            }
          })));
          const Xu = Eu instanceof pE ? Eu._emissiveTexture : Eu.emissionColorTexture;
          Xu && uu.push(this.exportTextureAsync(Xu).then((uu => {
            uu && (ju.emissiveTexture = uu)
          }))), uu.length > 0 && (this._exporter._materialNeedsUVsSet.add(Eu), await Promise.all(uu))
        }
        const Xu = Eu instanceof pE ? Eu._emissiveColor : Eu.emissionColor;
        Xu.equalsWithEpsilon(pj, gj) || (ju.emissiveFactor = Xu.Osu()), ju.pbrMetallicRoughness = su
      }
      async exportOpenPBRMaterialAsync(uu, Eu) {
        const ju = {},
          su = {
            name: uu.name
          },
          Uu = uu.baseColor,
          Zu = uu.geometryOpacity;
        Uu && (ju.baseColorFactor = [Uu.r, Uu.g, Uu.b, Zu]);
        const Xu = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(uu.baseColor, uu.baseMetalness, uu.specularRoughness, uu.baseColorTexture, uu.baseMetalnessTexture, uu.specularRoughnessTexture, uu, ju, Eu);
        await this._setMetallicRoughnessPbrMaterialAsync(Xu, uu, su, ju, Eu), await this._finishMaterialAsync(su, uu);
        const lu = this._exporter._materials;
        return lu.push(su), lu.length - 1
      }
      async exportTextureAsync(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = this._textureMap.get(Eu ?? uu.uniqueId);
        if (ju) return ju;
        const su = this._exportTextureSampler(uu),
          Uu = await this._exportTextureImageAsync(uu);
        return ju = this._exportTextureInfo(Uu, su, uu.coordinatesIndex), this._textureMap.set(Eu ?? uu.uniqueId, ju), this._exporter._extensionsPostExportTextures("exporter", ju, uu), ju
      }
      async _exportTextureImageAsync(uu) {
        const Eu = uu.mimeType ?? "none",
          ju = this._internalTextureToImage,
          su = uu.getInternalTexture().uniqueId;
        ju[su] = ju[su] || {};
        let Zu = ju[su][Eu];
        return void 0 === Zu && (Zu = (async () => {
          const ju = await Dj(uu);
          if (ju && wj(ju.mimeType) && ("none" === Eu || ju.mimeType === Eu)) return await this._exportImageAsync(uu.name, new Blob([ju.data], {
            type: ju.mimeType
          }));
          let su = "image/png";
          "none" !== Eu && (wj(Eu) ? su = Eu : (su = "image/png", Uu.Tools.Warn(`Unsupported media type: ${Eu}. Exporting texture as PNG.`)));
          const Zu = uu.getSize(),
            Xu = await (0, eu.e)(uu),
            lu = await (0, Ju.EncodeImageAsync)(Xu, Zu.width, Zu.height, su);
          return await this._exportImageAsync(uu.name, lu)
        })(), ju[su][Eu] = Zu), await Zu
      }
      async _exportImageAsync(uu, Eu) {
        const ju = this._exporter._images;
        let su;
        if (this._exporter._shouldUseGlb) {
          su = {
            name: uu,
            mimeType: Eu.type,
            bufferView: void 0
          };
          const ju = await Eu.arrayBuffer(),
            Uu = this._exporter._bufferManager.createBufferView(new Uint8Array(ju));
          this._exporter._bufferManager.setBufferView(su, Uu)
        } else {
          const Zu = uu.replace(/\.\/|\/|\.\\|\\/g, "_"),
            Xu = function(uu) {
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
            }(Eu.type);
          let lu = Zu + Xu;
          ju.some((uu => uu.uri === lu)) && (lu = `${Zu}_${Uu.Tools.RandomId()}${Xu}`), su = {
            name: uu,
            uri: lu
          }, this._exporter._imageData[lu] = Eu
        }
        return ju.push(su), ju.length - 1
      }
      _exportTextureInfo(uu, Eu, ju) {
        const su = this._exporter._textures;
        let Uu = su.findIndex((ju => ju.sampler == Eu && ju.source === uu)); - 1 === Uu && (Uu = su.length, su.push({
          source: uu,
          sampler: Eu
        }));
        const Zu = {
          index: Uu
        };
        return ju && (Zu.texCoord = ju), Zu
      }
      _exportTextureSampler(uu) {
        const Eu = this._getTextureSampler(uu),
          ju = this._exporter._samplers,
          su = ju.findIndex((uu => uu.minFilter === Eu.minFilter && uu.magFilter === Eu.magFilter && uu.wrapS === Eu.wrapS && uu.wrapT === Eu.wrapT));
        return -1 !== su ? su : (ju.push(Eu), ju.length - 1)
      }
    }
    var mj = ju(40319),
      vj = ju(40459);
    (0, vj.d)();
    var Kj = ju(37496);
    const Vj = su.Matrix.Compose(new su.dO(-1, 1, 1), su.Quaternion.Identity(), su.dO.Zero());

    function rj(uu, Eu) {
      if (!(uu instanceof bu.e)) return !1;
      if (Eu) {
        if (!uu.getWorldMatrix().equalsWithEpsilon(su.Matrix.IdentityReadOnly, Kj.c)) return !1
      } else {
        if (!uu.getWorldMatrix().multiplyToRef(Vj, su.TmpVectors.Matrix[0]).equalsWithEpsilon(su.Matrix.IdentityReadOnly, Kj.c)) return !1
      }
      return !(uu instanceof cu.c && uu.geometry)
    }
    const Qj = su.dO.ZeroReadOnly,
      ij = su.Quaternion.Identity(),
      Wj = su.dO.OneReadOnly,
      Sj = new su.dO(-1, 1, 1);

    function Ij(uu, Eu) {
      const {
        byteOffset: ju,
        byteStride: su,
        type: Uu,
        normalized: Zu
      } = uu, Xu = uu.getSize(), lu = Eu.reduce(((uu, Eu) => Eu.getTotalVertices() > uu ? Eu.getTotalVertices() : uu), -Number.MAX_VALUE);
      return {
        byteOffset: ju,
        byteStride: su,
        componentCount: Xu,
        type: Uu,
        count: lu * Xu,
        normalized: Zu,
        totalVertices: lu,
        kind: uu.getKind()
      }
    }

    function Fj(uu) {
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

    function Bj(uu) {
      switch (uu) {
        case Cu.e.PositionKind:
        case Cu.e.NormalKind:
        case Cu.e.TangentKind:
        case Cu.e.ColorKind:
        case Cu.e.MatricesIndicesKind:
        case Cu.e.MatricesIndicesExtraKind:
        case Cu.e.MatricesWeightsKind:
        case Cu.e.MatricesWeightsExtraKind:
        case Cu.e.UVKind:
        case Cu.e.UV2Kind:
        case Cu.e.UV3Kind:
        case Cu.e.UV4Kind:
        case Cu.e.UV5Kind:
        case Cu.e.UV6Kind:
          return !0
      }
      return !1
    }

    function Lj(uu) {
      const Eu = Math.sqrt(uu.x * uu.x + uu.y * uu.y + uu.z * uu.z);
      Eu > 0 && (uu.x /= Eu, uu.y /= Eu, uu.z /= Eu)
    }

    function tj(uu) {
      return uu.x *= -1, uu
    }

    function xj(uu) {
      if (uu.x * uu.x + uu.y * uu.y > .5) {
        const Eu = Math.abs(uu.x),
          ju = Math.abs(uu.y);
        if (Eu > ju) {
          const ju = Math.sign(uu.x);
          uu.x = Eu, uu.y *= -ju, uu.z *= -ju, uu.w *= ju
        } else {
          const Eu = Math.sign(uu.y);
          uu.x *= -Eu, uu.y = ju, uu.z *= Eu, uu.w *= -Eu
        }
      } else {
        const Eu = Math.abs(uu.z),
          ju = Math.abs(uu.w);
        if (Eu > ju) {
          const ju = Math.sign(uu.z);
          uu.x *= -ju, uu.y *= ju, uu.z = Eu, uu.w *= -ju
        } else {
          const Eu = Math.sign(uu.w);
          uu.x *= Eu, uu.y *= -Eu, uu.z *= -Eu, uu.w = ju
        }
      }
      return uu
    }

    function Tj(uu) {
      uu.T6(-uu.z, uu.w, uu.x, -uu.y)
    }

    function Hj(uu, Eu) {
      const ju = su.dO.FromArrayToRef(Eu.translation || [0, 0, 0], 0, su.TmpVectors.dO[0]),
        Uu = su.Quaternion.FromArrayToRef(Eu.rotation || [0, 0, 0, 1], 0, su.TmpVectors.Quaternion[0]),
        Zu = su.Matrix.ComposeToRef(Wj, Uu, ju, su.TmpVectors.Matrix[0]),
        Xu = su.dO.FromArrayToRef(uu.translation || [0, 0, 0], 0, su.TmpVectors.dO[2]),
        lu = su.Quaternion.FromArrayToRef(uu.rotation || [0, 0, 0, 1], 0, su.TmpVectors.Quaternion[1]),
        qu = su.Matrix.ComposeToRef(Wj, lu, Xu, su.TmpVectors.Matrix[1]);
      Zu.multiplyToRef(qu, qu), qu.decompose(void 0, Uu, ju), ju.equalsWithEpsilon(Qj, Kj.c) ? delete Eu.translation : Eu.translation = ju.Osu(), Uu.equalsWithEpsilon(ij, Kj.c) ? delete Eu.rotation : Eu.rotation = Uu.Osu(), Eu.scale && delete Eu.scale
    }

    function Aj(uu, Eu) {
      if (!(Eu instanceof bu.e)) return !1;
      if (!(1 === Eu.getChildren().length && 0 === uu.getChildren().length && uu.parent === Eu)) return !1;
      const ju = uu.hV(),
        su = uu instanceof vj.e && !ju.useRightHandedSystem ? Sj : Wj;
      return !!Eu.Of.equalsWithEpsilon(su, Kj.c) || (Pu.b.Warn(`Cannot collapse node ${uu.name} into parent node ${Eu.name} with modified scaling.`), !1)
    }

    function nj(uu) {
      if (uu instanceof Array) {
        const Eu = new Float32Array(uu);
        return new Uint8Array(Eu.buffer, Eu.byteOffset, Eu.byteLength)
      }
      return ArrayBuffer.isView(uu) ? new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength) : new Uint8Array(uu)
    }

    function yj(uu, Eu) {
      for (const [ju, su] of Object.entries(uu)) {
        const Uu = Eu[ju];
        (Array.isArray(su) && Array.isArray(Uu) && zj(su, Uu) || su === Uu) && delete uu[ju]
      }
      return uu
    }

    function zj(uu, Eu) {
      return uu.length === Eu.length && uu.every(((uu, ju) => uu === Eu[ju]))
    }
    const Rj = new Map([
      [Int8Array, (uu, Eu, ju) => uu.setInt8(Eu, ju)],
      [Uint8Array, (uu, Eu, ju) => uu.setUint8(Eu, ju)],
      [Uint8ClampedArray, (uu, Eu, ju) => uu.setUint8(Eu, ju)],
      [Int16Array, (uu, Eu, ju) => uu.setInt16(Eu, ju, !0)],
      [Uint16Array, (uu, Eu, ju) => uu.setUint16(Eu, ju, !0)],
      [Int32Array, (uu, Eu, ju) => uu.setInt32(Eu, ju, !0)],
      [Uint32Array, (uu, Eu, ju) => uu.setUint32(Eu, ju, !0)],
      [Float32Array, (uu, Eu, ju) => uu.setFloat32(Eu, ju, !0)],
      [Float64Array, (uu, Eu, ju) => uu.setFloat64(Eu, ju, !0)]
    ]);
    class us {
      writeTypedArray(uu) {
        this._checkGrowBuffer(uu.byteLength);
        const Eu = Rj.get(uu.constructor);
        for (let ju = 0; ju < uu.length; ju++) Eu(this._dataView, this._byteOffset, uu[ju]), this._byteOffset += uu.BYTES_PER_ELEMENT
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
        const Eu = this.byteOffset + uu;
        if (Eu > this._data.byteLength) {
          const uu = new Uint8Array(2 * Eu);
          uu.set(this._data), this._data = uu, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function Es(uu) {
      return uu % 4 === 0 ? 4 : uu % 2 === 0 ? 2 : 1
    }
    class ss {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(uu) {
        let Eu = 0;
        this._bufferViewToData.forEach((uu => {
          Eu += uu.byteLength
        }));
        const ju = new us(Eu),
          su = Array.from(this._bufferViewToData.keys()).sort(((uu, Eu) => Es(Eu.byteLength) - Es(uu.byteLength)));
        for (const Uu of su) {
          Uu.byteOffset = ju.byteOffset, uu.push(Uu);
          const Eu = uu.length - 1,
            su = this.getPropertiesWithBufferView(Uu);
          for (const uu of su) uu.bufferView = Eu;
          ju.writeTypedArray(this._bufferViewToData.get(Uu)), this._bufferViewToData.delete(Uu)
        }
        return ju.getOutputData()
      }
      createBufferView(uu, Eu) {
        const ju = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: uu.byteLength,
          byteStride: Eu
        };
        return this._bufferViewToData.set(ju, uu), ju
      }
      createAccessor(uu, Eu, ju, su, Uu, Zu, Xu) {
        this._verifyBufferView(uu);
        const lu = {
          bufferView: void 0,
          componentType: ju,
          count: su,
          type: Eu,
          min: Zu?.min,
          max: Zu?.max,
          normalized: Xu,
          byteOffset: Uu
        };
        return this.setBufferView(lu, uu), this._accessorToBufferView.set(lu, uu), lu
      }
      setBufferView(uu, Eu) {
        this._verifyBufferView(Eu);
        this.getPropertiesWithBufferView(Eu).push(uu)
      }
      removeBufferView(uu) {
        const Eu = this.getPropertiesWithBufferView(uu);
        for (const ju of Eu) void 0 !== ju.bufferView && delete ju.bufferView;
        this._bufferViewToData.delete(uu), this._bufferViewToProperties.delete(uu), this._accessorToBufferView.forEach(((Eu, ju) => {
          Eu === uu && (void 0 !== ju.byteOffset && delete ju.byteOffset, this._accessorToBufferView.delete(ju))
        }))
      }
      getBufferView(uu) {
        const Eu = this._accessorToBufferView.get(uu);
        return this._verifyBufferView(Eu), Eu
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
    var Us = ju(40462);
    (0, Us.f)();
    var Zs = ju(40711);
    (0, Zs.f)();
    var Xs = ju(40514),
      ls = ju(41319);
    (0, ls.f)();
    let qs = (() => {
      var uu;
      let Eu, ju, su = [],
        Uu = [],
        Zu = [],
        Xu = [];
      return uu = class {
        get influence() {
          return this._influence
        }
        set influence(uu) {
          if (this._influence === uu) return;
          const Eu = this._influence;
          this._influence = uu, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === Eu || 0 === uu)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(uu) {
          this._animationPropertiesOverride = uu
        }
        constructor(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            lu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = uu, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new uj.d, this._onDataLayoutChanged = new uj.d, this.id = (0, du.g)(this, su, void 0), this.morphTargetManager = ((0, du.g)(this, Uu), (0, du.g)(this, Zu, null)), this._animationPropertiesOverride = ((0, du.g)(this, Xu), null), this.id = uu, this.morphTargetManager = lu, this._scene = ju || Yu.b.LastCreatedScene, this.influence = Eu, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        FXu(uu) {
          const Eu = this.hasPositions;
          this._positions = uu, Eu !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(uu) {
          const Eu = this.hasNormals;
          this._normals = uu, Eu !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(uu) {
          const Eu = this.hasTangents;
          this._tangents = uu, Eu !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(uu) {
          const Eu = this.hasUVs;
          this._uvs = uu, Eu !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(uu) {
          const Eu = this.hasUV2s;
          this._uv2s = uu, Eu !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(uu) {
          const Eu = this.hasColors;
          this._colors = uu, Eu !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const Eu = wE.e.Clone((() => new uu(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return Eu._positions = this._positions, Eu._normals = this._normals, Eu._tangents = this._tangents, Eu._uvs = this._uvs, Eu._uv2s = this._uv2s, Eu._colors = this._colors, Eu
        }
        serialize() {
          const uu = {};
          return uu.name = this.name, uu.influence = this.influence, null != this.id && (uu.id = this.id), uu.uniqueId = this.uniqueId, uu.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (uu.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (uu.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (uu.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (uu.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (uu.colors = Array.prototype.slice.call(this.getColors())), wE.e.AppendSerializedAnimations(this, uu), uu
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(Eu, ju) {
          let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const Uu = new uu(Eu.name, Eu.influence, ju, su);
          if (Uu.FXu(Eu.positions), null != Eu.id && (Uu.id = Eu.id), Eu.normals && Uu.setNormals(Eu.normals), Eu.tangents && Uu.setTangents(Eu.tangents), Eu.uvs && Uu.setUVs(Eu.uvs), Eu.uv2s && Uu.setUV2s(Eu.uv2s), Eu.colors && Uu.setColors(Eu.colors), Eu.animations) {
            for (let uu = 0; uu < Eu.animations.length; uu++) {
              const ju = Eu.animations[uu],
                su = (0, FE.d)("BABYLON.Animation");
              su && Uu.animations.push(su.Parse(ju))
            }
            Eu.autoAnimate && ju && ju.beginAnimation(Uu, Eu.autoAnimateFrom, Eu.autoAnimateTo, Eu.autoAnimateLoop, Eu.autoAnimateSpeed || 1)
          }
          return Uu
        }
        static FromMesh(Eu, ju, su) {
          ju || (ju = Eu.name);
          const Uu = new uu(ju, su, Eu.hV(), Eu.morphTargetManager);
          return Uu.FXu(Eu.getVerticesData(Su.j.PositionKind)), Eu.isVerticesDataPresent(Su.j.NormalKind) && Uu.setNormals(Eu.getVerticesData(Su.j.NormalKind)), Eu.isVerticesDataPresent(Su.j.TangentKind) && Uu.setTangents(Eu.getVerticesData(Su.j.TangentKind)), Eu.isVerticesDataPresent(Su.j.UVKind) && Uu.setUVs(Eu.getVerticesData(Su.j.UVKind)), Eu.isVerticesDataPresent(Su.j.UV2Kind) && Uu.setUV2s(Eu.getVerticesData(Su.j.UV2Kind)), Eu.isVerticesDataPresent(Su.j.ColorKind) && Uu.setColors(Eu.getVerticesData(Su.j.ColorKind)), Uu
        }
      }, (() => {
        const lu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eu = [(0, au.E)()], ju = [(0, au.E)()], (0, du.e)(null, null, Eu, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: uu => "id" in uu,
            get: uu => uu.id,
            set: (uu, Eu) => {
              uu.id = Eu
            }
          },
          metadata: lu
        }, su, Uu), (0, du.e)(null, null, ju, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: uu => "morphTargetManager" in uu,
            get: uu => uu.morphTargetManager,
            set: (uu, Eu) => {
              uu.morphTargetManager = Eu
            }
          },
          metadata: lu
        }, Zu, Xu), lu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lu
        })
      })(), uu
    })();
    var fs, Cs = ju(41387),
      bs = ju(40508);
    ! function(uu) {
      uu[uu.INTANGENT = 0] = "INTANGENT", uu[uu.OUTTANGENT = 1] = "OUTTANGENT"
    }(fs || (fs = {}));
    class cs {
      static _IsTransformable(uu) {
        return uu && (uu instanceof bu.e || uu instanceof Us.e || uu instanceof bs.e)
      }
      static _CreateNodeAnimation(uu, Eu, ju, su, Zu) {
        if (this._IsTransformable(uu)) {
          const Xu = [],
            lu = [],
            qu = Eu.getKeys(),
            fu = cs._CalculateMinMaxKeyFrames(qu),
            Cu = cs._DeduceInterpolation(qu, ju, su),
            bu = Cu.interpolationType,
            cu = Cu.shouldBakeAnimation;
          if (cu ? cs._CreateBakedAnimation(uu, Eu, ju, fu.min, fu.max, Eu.framePerSecond, Zu, Xu, lu, fu, su) : "LINEAR" === bu || "STEP" === bu ? cs._CreateLinearOrStepAnimation(uu, Eu, ju, Xu, lu, su) : "CUBICSPLINE" === bu ? cs._CreateCubicSplineAnimation(uu, Eu, ju, Xu, lu, su) : cs._CreateBakedAnimation(uu, Eu, ju, fu.min, fu.max, Eu.framePerSecond, Zu, Xu, lu, fu, su), Xu.length && lu.length) {
            return {
              inputs: Xu,
              outputs: lu,
              samplerInterpolation: bu,
              inputsMin: cu ? fu.min : Uu.Tools.FloatRound(fu.min / Eu.framePerSecond),
              inputsMax: cu ? fu.max : Uu.Tools.FloatRound(fu.max / Eu.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(uu) {
        let Eu = null,
          ju = "VEC3",
          su = !1;
        const Zu = uu.targetProperty.split(".");
        switch (Zu[0]) {
          case "Of":
            Eu = "scale";
            break;
          case "position":
            Eu = "translation";
            break;
          case "rotation":
            ju = "VEC4", Eu = "rotation";
            break;
          case "rotationQuaternion":
            ju = "VEC4", su = !0, Eu = "rotation";
            break;
          case "influence":
            ju = "SCALAR", Eu = "weights";
            break;
          default:
            Uu.Tools.Error(`Unsupported animatable property ${Zu[0]}`)
        }
        return Eu ? {
          animationChannelTargetPath: Eu,
          dataAccessorType: ju,
          useQuaternion: su
        } : (Uu.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
        let bu;
        if (cs._IsTransformable(uu) && uu.animations)
          for (const cu of uu.animations) {
            if (Cu && !Cu(cu)) continue;
            const Uu = cs._DeduceAnimationInfo(cu);
            Uu && (bu = {
              name: cu.name,
              samplers: [],
              channels: []
            }, cs._AddAnimation(`${cu.name}`, cu.hasRunningRuntimeAnimations ? Eu : bu, uu, cu, Uu.dataAccessorType, Uu.animationChannelTargetPath, su, Zu, Xu, lu, Uu.useQuaternion, qu, fu), bu.samplers.length && bu.channels.length && ju.push(bu))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
        let bu;
        if (uu instanceof Cs.d) {
          const Uu = uu.morphTargetManager;
          if (Uu)
            for (let cu = 0; cu < Uu.numTargets; ++cu) {
              const Nu = Uu.getTarget(cu);
              for (const Ou of Nu.animations) {
                if (Cu && !Cu(Ou)) continue;
                const Nu = new ls.e(`${Ou.name}`, "influence", Ou.framePerSecond, Ou.dataType, Ou.ZU, Ou.enableBlending),
                  Yu = [],
                  hu = Ou.getKeys();
                for (let uu = 0; uu < hu.length; ++uu) {
                  const Eu = hu[uu];
                  for (let uu = 0; uu < Uu.numTargets; ++uu) uu == cu ? Yu.push(Eu) : Yu.push({
                    frame: Eu.frame,
                    value: 0
                  })
                }
                Nu.setKeys(Yu, !0);
                const Du = cs._DeduceAnimationInfo(Nu);
                Du && (bu = {
                  name: Nu.name,
                  samplers: [],
                  channels: []
                }, cs._AddAnimation(Ou.name, Ou.hasRunningRuntimeAnimations ? Eu : bu, uu, Nu, Du.dataAccessorType, Du.animationChannelTargetPath, su, Zu, Xu, lu, Du.useQuaternion, qu, fu, Uu.numTargets), bu.samplers.length && bu.channels.length && ju.push(bu))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
        let Cu;
        if (uu.animationGroups) {
          const bu = uu.animationGroups;
          for (const cu of bu) {
            const bu = new Map,
              Nu = new Map,
              Ou = new Set,
              Yu = cu.to - cu.from;
            Cu = {
              name: cu.name,
              channels: [],
              samplers: []
            };
            for (let Eu = 0; Eu < cu.targetedAnimations.length; ++Eu) {
              const fu = cu.targetedAnimations[Eu],
                Yu = fu.target,
                hu = fu.animation;
              if (qu && !qu(hu)) continue;
              const Du = lu.has(Yu);
              if (this._IsTransformable(Yu) || 1 === Yu.length && this._IsTransformable(Yu[0])) {
                const uu = cs._DeduceAnimationInfo(fu.animation);
                if (uu) {
                  const Eu = this._IsTransformable(Yu) ? Yu : this._IsTransformable(Yu[0]) ? Yu[0] : null;
                  Eu && cs._AddAnimation(`${hu.name}`, Cu, Eu, hu, uu.dataAccessorType, uu.animationChannelTargetPath, ju, su, Uu, Zu, uu.useQuaternion, Xu, Du)
                }
              } else if (Yu instanceof qs || 1 === Yu.length && Yu[0] instanceof qs) {
                if (cs._DeduceAnimationInfo(fu.animation)) {
                  const Eu = Yu instanceof qs ? Yu : Yu[0];
                  if (Eu) {
                    const ju = uu.morphTargetManagers.find((uu => {
                      for (let ju = 0; ju < uu.numTargets; ++ju)
                        if (uu.getTarget(ju) === Eu) return !0;
                      return !1
                    }));
                    if (ju) {
                      const su = uu.meshes.find((uu => uu.morphTargetManager === ju));
                      su && (bu.has(su) || bu.set(su, new Map), bu.get(su)?.set(Eu, hu), Ou.add(su), Nu.set(su, hu))
                    }
                  }
                }
              }
            }
            Ou.forEach((uu => {
              const Eu = uu.morphTargetManager;
              let lu = null;
              const qu = [],
                fu = Nu.get(uu).getKeys(),
                Ou = fu.length;
              for (let ju = 0; ju < Ou; ++ju)
                for (let su = 0; su < Eu.numTargets; ++su) {
                  const Uu = Eu.getTarget(su),
                    Zu = bu.get(uu);
                  if (Zu) {
                    const Eu = Zu.get(Uu);
                    Eu ? (lu || (lu = new ls.e(`${cu.name}_${uu.name}_MorphWeightAnimation`, "influence", Eu.framePerSecond, ls.e.ANIMATIONTYPE_FLOAT, Eu.ZU, Eu.enableBlending)), qu.push(Eu.getKeys()[ju])) : qu.push({
                      frame: cu.from + Yu / Ou * ju,
                      value: Uu.influence,
                      inTangent: fu[0].inTangent ? 0 : void 0,
                      outTangent: fu[0].outTangent ? 0 : void 0
                    })
                  }
                }
              lu.setKeys(qu, !0);
              const hu = cs._DeduceAnimationInfo(lu);
              hu && cs._AddAnimation(`${cu.name}_${uu.name}_MorphWeightAnimation`, Cu, uu, lu, hu.dataAccessorType, hu.animationChannelTargetPath, ju, su, Uu, Zu, hu.useQuaternion, Xu, !1, Eu?.numTargets)
            })), Cu.channels.length && Cu.samplers.length && (fu?.set(cu, Eu.length), Eu.push(Cu))
          }
        }
      }
      static _AddAnimation(uu, Eu, ju, Uu, Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou) {
        const Yu = cs._CreateNodeAnimation(ju, Uu, Xu, bu, cu);
        let hu, Du, gu, Mu, eu, Gu;
        if (Yu) {
          if (Ou) {
            let uu, Eu = 0;
            const ju = [];
            for (; Yu.inputs.length > 0;) uu = Yu.inputs.shift(), Eu % Ou == 0 && ju.push(uu), Eu++;
            Yu.inputs = ju
          }
          const uu = lu.get(ju),
            Uu = new Float32Array(Yu.inputs);
          hu = qu.createBufferView(Uu), Du = qu.createAccessor(hu, "SCALAR", 5126, Yu.inputs.length, void 0, {
            min: [Yu.inputsMin],
            max: [Yu.inputsMax]
          }), Cu.push(Du), gu = Cu.length - 1;
          const fu = new su.Quaternion,
            bu = new su.dO,
            cu = new su.dO,
            pu = ju instanceof Us.e,
            wu = Fj(Zu),
            Ju = new Float32Array(Yu.outputs.length * wu);
          Yu.outputs.forEach((function(uu, Eu) {
            let ju = uu;
            switch (Xu) {
              case "translation":
                Nu && (su.dO.FromArrayToRef(uu, 0, cu), tj(cu), cu.toArray(ju));
                break;
              case "rotation":
                4 === uu.length ? su.Quaternion.FromArrayToRef(uu, 0, fu) : (ju = new Array(4), su.dO.FromArrayToRef(uu, 0, bu), su.Quaternion.FromEulerVectorToRef(bu, fu)), Nu && (xj(fu), pu && Tj(fu)), fu.toArray(ju)
            }
            Ju.set(ju, Eu * wu)
          })), hu = qu.createBufferView(Ju), Du = qu.createAccessor(hu, Zu, 5126, Yu.outputs.length), Cu.push(Du), Mu = Cu.length - 1, eu = {
            interpolation: Yu.samplerInterpolation,
            input: gu,
            output: Mu
          }, Eu.samplers.push(eu), Gu = {
            sampler: Eu.samplers.length - 1,
            target: {
              node: uu,
              path: Xu
            }
          }, Eu.channels.push(Gu)
        }
      }
      static _CreateBakedAnimation(uu, Eu, ju, Zu, Xu, lu, qu, fu, Cu, bu, cu) {
        let Nu;
        const Ou = su.Quaternion.Identity();
        let Yu, hu, Du, gu, Mu, eu = null,
          Gu = null;
        bu.min = Uu.Tools.FloatRound(Zu / lu);
        const pu = Eu.getKeys();
        for (let su = 0, wu = pu.length; su < wu; ++su) {
          if (hu = pu[su], su + 1 < wu)
            if (Du = pu[su + 1], hu.value.equals && hu.value.equals(Du.value) || hu.value === Du.value) {
              if (0 !== su) continue;
              Mu = hu.frame
            } else Mu = Du.frame;
          else {
            if (gu = pu[su - 1], hu.value.equals && hu.value.equals(gu.value) || hu.value === gu.value) continue;
            Mu = Xu
          }
          if (Mu)
            for (let su = hu.frame; su <= Mu; su += qu) {
              if (Yu = Uu.Tools.FloatRound(su / lu), Yu === eu) continue;
              eu = Yu, Gu = Yu;
              const Zu = {
                key: 0,
                repeatCount: 0,
                ZU: Eu.ZU
              };
              Nu = Eu._interpolate(su, Zu), cs._SetInterpolatedValue(uu, Nu, Yu, Eu, ju, Ou, fu, Cu, cu)
            }
        }
        Gu && (bu.max = Gu)
      }
      static _ConvertFactorToVector3OrQuaternion(uu, Eu, ju, Zu, Xu) {
        const lu = cs._GetBasePositionRotationOrScale(Eu, Zu, Xu),
          qu = ju.targetProperty.split("."),
          fu = qu ? qu[1] : "",
          Cu = Xu ? su.Quaternion.FromArray(lu).normalize() : su.dO.FromArray(lu);
        switch (fu) {
          case "x":
          case "y":
          case "z":
            Cu[fu] = uu;
            break;
          case "w":
            Cu.w = uu;
            break;
          default:
            Uu.Tools.Error(`glTFAnimation: Unsupported component name "${fu}"!`)
        }
        return Cu
      }
      static _SetInterpolatedValue(uu, Eu, ju, Uu, Zu, Xu, lu, qu, fu) {
        let Cu;
        lu.push(ju), "weights" !== Zu ? (Uu.dataType === ls.e.ANIMATIONTYPE_FLOAT && (Eu = this._ConvertFactorToVector3OrQuaternion(Eu, uu, Uu, Zu, fu)), "rotation" === Zu ? (fu ? Xu = Eu : (Cu = Eu, su.Quaternion.RotationYawPitchRollToRef(Cu.y, Cu.x, Cu.z, Xu)), qu.push(Xu.Osu())) : (Cu = Eu, qu.push(Cu.Osu()))) : qu.push([Eu])
      }
      static _CreateLinearOrStepAnimation(uu, Eu, ju, su, Uu, Zu) {
        for (const Xu of Eu.getKeys()) su.push(Xu.frame / Eu.framePerSecond), cs._AddKeyframeValue(Xu, Eu, Uu, ju, uu, Zu)
      }
      static _CreateCubicSplineAnimation(uu, Eu, ju, su, Uu, Zu) {
        Eu.getKeys().forEach((function(Xu) {
          su.push(Xu.frame / Eu.framePerSecond), cs._AddSplineTangent(fs.INTANGENT, Uu, ju, "CUBICSPLINE", Xu, Zu), cs._AddKeyframeValue(Xu, Eu, Uu, ju, uu, Zu), cs._AddSplineTangent(fs.OUTTANGENT, Uu, ju, "CUBICSPLINE", Xu, Zu)
        }))
      }
      static _GetBasePositionRotationOrScale(uu, Eu, ju) {
        let Uu;
        if ("rotation" === Eu)
          if (ju) {
            Uu = (uu.rotationQuaternion ?? su.Quaternion.Identity()).Osu()
          } else {
            Uu = (uu.rotation ?? su.dO.Zero()).Osu()
          }
        else if ("translation" === Eu) {
          Uu = (uu.position ?? su.dO.Zero()).Osu()
        } else {
          Uu = (uu.Of ?? su.dO.One()).Osu()
        }
        return Uu
      }
      static _AddKeyframeValue(uu, Eu, ju, Zu, Xu, lu) {
        let qu;
        const fu = Eu.dataType;
        if (fu === ls.e.ANIMATIONTYPE_VECTOR3) {
          let Eu = uu.value.Osu();
          if ("rotation" === Zu) {
            const uu = su.dO.FromArray(Eu);
            Eu = su.Quaternion.RotationYawPitchRoll(uu.y, uu.x, uu.z).Osu()
          }
          ju.push(Eu)
        } else if (fu === ls.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === Zu) ju.push([uu.value]);
          else if (qu = this._ConvertFactorToVector3OrQuaternion(uu.value, Xu, Eu, Zu, lu), qu) {
            if ("rotation" === Zu) {
              const uu = lu ? qu : su.Quaternion.RotationYawPitchRoll(qu.y, qu.x, qu.z).normalize();
              ju.push(uu.Osu())
            }
            ju.push(qu.Osu())
          }
        } else fu === ls.e.ANIMATIONTYPE_QUATERNION ? ju.push(uu.value.normalize().Osu()) : Uu.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(uu, Eu, ju) {
        let su, Uu, Zu = !1;
        if ("rotation" === Eu && !ju) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let Xu = 0, lu = uu.length; Xu < lu; ++Xu)
          if (Uu = uu[Xu], Uu.inTangent || Uu.outTangent)
            if (su) {
              if ("CUBICSPLINE" !== su) {
                su = "LINEAR", Zu = !0;
                break
              }
            } else su = "CUBICSPLINE";
        else if (su) {
          if ("CUBICSPLINE" === su || Uu.interpolation && 1 === Uu.interpolation && "STEP" !== su) {
            su = "LINEAR", Zu = !0;
            break
          }
        } else su = Uu.interpolation && 1 === Uu.interpolation ? "STEP" : "LINEAR";
        return su || (su = "LINEAR"), {
          interpolationType: su,
          shouldBakeAnimation: Zu
        }
      }
      static _AddSplineTangent(uu, Eu, ju, Uu, Zu, Xu) {
        let lu;
        const qu = uu === fs.INTANGENT ? Zu.inTangent : Zu.outTangent;
        if ("CUBICSPLINE" === Uu) {
          if ("rotation" === ju)
            if (qu)
              if (Xu) lu = qu.Osu();
              else {
                const uu = qu;
                lu = su.Quaternion.RotationYawPitchRoll(uu.y, uu.x, uu.z).Osu()
              }
          else lu = [0, 0, 0, 0];
          else lu = "weights" === ju ? qu ? [qu] : [0] : qu ? qu.Osu() : [0, 0, 0];
          Eu.push(lu)
        }
      }
      static _CalculateMinMaxKeyFrames(uu) {
        let Eu = 1 / 0,
          ju = -1 / 0;
        return uu.forEach((function(uu) {
          Eu = Math.min(Eu, uu.frame), ju = Math.max(ju, uu.frame)
        })), {
          min: Eu,
          max: ju
        }
      }
    }

    function Ns(uu, Eu, ju, Zu, Xu, lu) {
      const qu = {
          attributes: {},
          influence: uu.influence,
          name: uu.name
        },
        fu = Eu.geometry;
      if (!fu) return Uu.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), qu;
      const bu = lu ? -1 : 1,
        cu = su.dO.Zero();
      let Nu, Ou;
      if (uu.hasPositions) {
        const Zu = uu.getPositions(),
          lu = fu.getVerticesData(Cu.e.PositionKind);
        if (lu) {
          const uu = new Float32Array(lu.length),
            Eu = [1 / 0, 1 / 0, 1 / 0],
            Uu = [-1 / 0, -1 / 0, -1 / 0];
          Ou = lu.length / 3, Nu = 0;
          for (let ju = Nu; ju < Ou; ++ju) {
            const Xu = su.dO.FromArray(lu, 3 * ju);
            su.dO.FromArray(Zu, 3 * ju).subtractToRef(Xu, cu), cu.x *= bu, Eu[0] = Math.min(Eu[0], cu.x), Uu[0] = Math.max(Uu[0], cu.x), Eu[1] = Math.min(Eu[1], cu.y), Uu[1] = Math.max(Uu[1], cu.y), Eu[2] = Math.min(Eu[2], cu.z), Uu[2] = Math.max(Uu[2], cu.z), uu[3 * ju] = cu.x, uu[3 * ju + 1] = cu.y, uu[3 * ju + 2] = cu.z
          }
          const fu = ju.createBufferView(uu, 12),
            Cu = ju.createAccessor(fu, "VEC3", 5126, Zu.length / 3, 0, {
              min: Eu,
              max: Uu
            });
          Xu.push(Cu), qu.attributes.POSITION = Xu.length - 1
        } else Uu.Tools.Warn(`Morph target positions for mesh ${Eu.name} were not exported. Mesh does not have position vertex data`)
      }
      if (uu.hasNormals) {
        const Zu = uu.getNormals(),
          lu = fu.getVerticesData(Cu.e.NormalKind);
        if (lu) {
          const uu = new Float32Array(lu.length);
          Ou = lu.length / 3, Nu = 0;
          for (let ju = Nu; ju < Ou; ++ju) {
            const Eu = su.dO.FromArray(lu, 3 * ju).normalize();
            su.dO.FromArray(Zu, 3 * ju).normalize().subtractToRef(Eu, cu), uu[3 * ju] = cu.x * bu, uu[3 * ju + 1] = cu.y, uu[3 * ju + 2] = cu.z
          }
          const Eu = ju.createBufferView(uu, 12),
            Uu = ju.createAccessor(Eu, "VEC3", 5126, Zu.length / 3, 0);
          Xu.push(Uu), qu.attributes.NORMAL = Xu.length - 1
        } else Uu.Tools.Warn(`Morph target normals for mesh ${Eu.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (uu.hasTangents) {
        const Zu = uu.getTangents(),
          lu = fu.getVerticesData(Cu.e.TangentKind);
        if (lu) {
          Ou = lu.length / 4;
          const uu = new Float32Array(3 * Ou);
          Nu = 0;
          for (let ju = Nu; ju < Ou; ++ju) {
            const Eu = su.dO.FromArray(lu, 4 * ju);
            Lj(Eu);
            const Uu = su.dO.FromArray(Zu, 3 * ju);
            Lj(Uu), Uu.subtractToRef(Eu, cu), uu[3 * ju] = cu.x * bu, uu[3 * ju + 1] = cu.y, uu[3 * ju + 2] = cu.z
          }
          const Eu = ju.createBufferView(uu, 12),
            Uu = ju.createAccessor(Eu, "VEC3", 5126, Ou, 0);
          Xu.push(Uu), qu.attributes.TANGENT = Xu.length - 1
        } else Uu.Tools.Warn(`Morph target tangents for mesh ${Eu.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (uu.hasColors) {
        const Zu = uu.getColors(),
          lu = fu.getVerticesData(Cu.e.ColorKind),
          bu = fu.getVertexBuffer(Cu.e.ColorKind);
        if (lu && bu) {
          const uu = bu.getSize();
          Ou = lu.length / uu;
          const Eu = new Float32Array(Ou * uu);
          Nu = 0;
          for (let ju = Nu; ju < Ou; ++ju)
            if (3 === uu) {
              const Uu = su.dO.FromArray(lu, ju * uu);
              su.dO.FromArray(Zu, ju * uu).subtractToRef(Uu, cu), Eu[3 * ju] = cu.x, Eu[3 * ju + 1] = cu.y, Eu[3 * ju + 2] = cu.z
            } else if (4 === uu) {
            const Uu = new su.Vector4,
              Xu = su.Vector4.FromArray(lu, ju * uu);
            su.Vector4.FromArray(Zu, ju * uu).subtractToRef(Xu, Uu), Eu[4 * ju] = Uu.x, Eu[4 * ju + 1] = Uu.y, Eu[4 * ju + 2] = Uu.z, Eu[4 * ju + 3] = Uu.w
          } else Uu.Tools.Warn(`Unsupported number of components for color attribute: ${uu}`);
          const fu = ju.createBufferView(Eu, 4 * uu),
            Cu = ju.createAccessor(fu, 3 === uu ? "VEC3" : "VEC4", 5126, Ou, 0);
          Xu.push(Cu), qu.attributes.COLOR_0 = Xu.length - 1
        } else Uu.Tools.Warn(`Morph target colors for mesh ${Eu.name} were not exported. Mesh does not have colors vertex data`)
      }
      return qu
    }
    var Os = ju(41838);
    class Ys {}
    Ys.DEFAULT_COLOR = xu.c.White(), Ys.DEFAULT_WIDTH_ATTENUATED = 1, Ys.DEFAULT_WIDTH = .1;
    var hs = ju(41317);
    class Ds {
      constructor(uu) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = uu
      }
      moveTo(uu, Eu) {
        this._currentPath = new hs.g(uu, Eu), this._tempPaths.push(this._currentPath)
      }
      lineTo(uu, Eu) {
        this._currentPath.addLineTo(uu, Eu)
      }
      quadraticCurveTo(uu, Eu, ju, su) {
        this._currentPath.addQuadraticCurveTo(uu, Eu, ju, su, this._resolution)
      }
      bezierCurveTo(uu, Eu, ju, su, Uu, Zu) {
        this._currentPath.addBezierCurveTo(uu, Eu, ju, su, Uu, Zu, this._resolution)
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

    function gs(uu, Eu, ju, su, Uu, Zu) {
      const Xu = Zu.glyphs[uu] || Zu.glyphs["?"];
      if (!Xu) return null;
      const lu = new Ds(Uu);
      if (Xu.o) {
        const uu = Xu.o.split(" ");
        for (let Uu = 0, Zu = uu.length; Uu < Zu;) {
          switch (uu[Uu++]) {
            case "m": {
              const Zu = parseInt(uu[Uu++]) * Eu + ju,
                Xu = parseInt(uu[Uu++]) * Eu + su;
              lu.moveTo(Zu, Xu);
              break
            }
            case "l": {
              const Zu = parseInt(uu[Uu++]) * Eu + ju,
                Xu = parseInt(uu[Uu++]) * Eu + su;
              lu.lineTo(Zu, Xu);
              break
            }
            case "q": {
              const Zu = parseInt(uu[Uu++]) * Eu + ju,
                Xu = parseInt(uu[Uu++]) * Eu + su,
                qu = parseInt(uu[Uu++]) * Eu + ju,
                fu = parseInt(uu[Uu++]) * Eu + su;
              lu.quadraticCurveTo(qu, fu, Zu, Xu);
              break
            }
            case "b": {
              const Zu = parseInt(uu[Uu++]) * Eu + ju,
                Xu = parseInt(uu[Uu++]) * Eu + su,
                qu = parseInt(uu[Uu++]) * Eu + ju,
                fu = parseInt(uu[Uu++]) * Eu + su,
                Cu = parseInt(uu[Uu++]) * Eu + ju,
                bu = parseInt(uu[Uu++]) * Eu + su;
              lu.bezierCurveTo(qu, fu, Cu, bu, Zu, Xu);
              break
            }
          }
        }
      }
      return lu.extractHoles(), {
        offsetX: Xu.ha * Eu,
        shapePath: lu
      }
    }

    function Ms(uu, Eu, ju, su) {
      const Uu = Array.from(uu),
        Zu = Eu / su.resolution,
        Xu = (su.boundingBox.yMax - su.boundingBox.yMin + su.underlineThickness) * Zu,
        lu = [];
      let qu = 0,
        fu = 0;
      for (let Cu = 0; Cu < Uu.length; Cu++) {
        const uu = Uu[Cu];
        if ("\n" === uu) qu = 0, fu -= Xu;
        else {
          const Eu = gs(uu, Zu, qu, fu, ju, su);
          Eu && (qu += Eu.offsetX, lu.push(Eu.shapePath))
        }
      }
      return lu
    }
    class es {
      static ConvertPoints(uu, Eu) {
        if (uu.length && Array.isArray(uu) && "number" === typeof uu[0]) return [uu];
        if (uu.length && Array.isArray(uu[0]) && "number" === typeof uu[0][0]) return uu;
        if (uu.length && !Array.isArray(uu[0]) && uu[0] instanceof Wu.t) {
          const Eu = [];
          for (let ju = 0; ju < uu.length; ju++) {
            const su = uu[ju];
            Eu.push(su.x, su.y, su.z)
          }
          return [Eu]
        }
        if (uu.length > 0 && Array.isArray(uu[0]) && uu[0].length > 0 && uu[0][0] instanceof Wu.t) {
          const Eu = [],
            ju = uu;
          for (const uu of ju) Eu.push(uu.flatMap((uu => [uu.x, uu.y, uu.z])));
          return Eu
        }
        if (uu instanceof Float32Array) {
          if (Eu?.floatArrayStride) {
            const ju = [],
              su = 3 * Eu.floatArrayStride;
            for (let Eu = 0; Eu < uu.length; Eu += su) {
              const Uu = new Array(su);
              for (let ju = 0; ju < su; ju++) Uu[ju] = uu[Eu + ju];
              ju.push(Uu)
            }
            return ju
          }
          return [Array.from(uu)]
        }
        if (uu.length && uu[0] instanceof Float32Array) {
          const Eu = [];
          for (const ju of uu) Eu.push(Array.from(ju));
          return Eu
        }
        return []
      }
      static OmitZeroLengthPredicate(uu, Eu, ju) {
        const su = [];
        return Eu.subtract(uu).lengthSquared() > 0 && su.push([uu, Eu]), ju.subtract(Eu).lengthSquared() > 0 && su.push([Eu, ju]), uu.subtract(ju).lengthSquared() > 0 && su.push([ju, uu]), 0 === su.length ? null : su
      }
      static OmitDuplicatesPredicate(uu, Eu, ju, su) {
        const Uu = [];
        return es._SearchInPoints(uu, Eu, su) || Uu.push([uu, Eu]), es._SearchInPoints(Eu, ju, su) || Uu.push([Eu, ju]), es._SearchInPoints(ju, uu, su) || Uu.push([ju, uu]), 0 === Uu.length ? null : Uu
      }
      static _SearchInPoints(uu, Eu, ju) {
        for (const su of ju)
          for (let ju = 0; ju < su.length; ju++)
            if (su[ju]?.equals(uu) && (su[ju + 1]?.equals(Eu) || su[ju - 1]?.equals(Eu))) return !0;
        return !1
      }
      static MeshesToLines(uu, Eu) {
        const ju = [];
        for (let su = 0; su < uu.length; su++) {
          const Uu = uu[su],
            Zu = Uu.getVerticesData(Su.j.PositionKind),
            Xu = Uu.Ysu();
          if (Zu && Xu)
            for (let uu = 0, lu = 0; uu < Xu.length; uu++) {
              const qu = 3 * Xu[lu++],
                fu = 3 * Xu[lu++],
                Cu = 3 * Xu[lu++],
                bu = new Wu.t(Zu[qu], Zu[qu + 1], Zu[qu + 2]),
                cu = new Wu.t(Zu[fu], Zu[fu + 1], Zu[fu + 2]),
                Nu = new Wu.t(Zu[Cu], Zu[Cu + 1], Zu[Cu + 2]);
              if (Eu) {
                const lu = Eu(bu, cu, Nu, ju, uu, qu, Uu, su, Zu, Xu);
                if (lu)
                  for (const uu of lu) ju.push(uu)
              } else ju.push([bu, cu], [cu, Nu], [Nu, bu])
            }
        }
        return ju
      }
      static ToVector3Array(uu) {
        if (Array.isArray(uu[0])) {
          const Eu = [],
            ju = uu;
          for (const uu of ju) {
            const ju = [];
            for (let Eu = 0; Eu < uu.length; Eu += 3) ju.push(new Wu.t(uu[Eu], uu[Eu + 1], uu[Eu + 2]));
            Eu.push(ju)
          }
          return Eu
        }
        const Eu = uu,
          ju = [];
        for (let su = 0; su < Eu.length; su += 3) ju.push(new Wu.t(Eu[su], Eu[su + 1], Eu[su + 2]));
        return ju
      }
      static ToNumberArray(uu) {
        return uu.flatMap((uu => [uu.x, uu.y, uu.z]))
      }
      static GetPointsCountInfo(uu) {
        const Eu = new Array(uu.length);
        let ju = 0;
        for (let su = uu.length; su--;) Eu[su] = uu[su].length / 3, ju += Eu[su];
        return {
          total: ju,
          counts: Eu
        }
      }
      static GetLineLength(uu) {
        if (0 === uu.length) return 0;
        let Eu;
        Eu = "number" === typeof uu[0] ? es.ToVector3Array(uu) : uu;
        const ju = Wu.m.dO[0];
        let su = 0;
        for (let Uu = 0; Uu < Eu.length - 1; Uu++) {
          const uu = Eu[Uu];
          su += Eu[Uu + 1].subtractToRef(uu, ju).length()
        }
        return su
      }
      static GetLineLengthArray(uu, Eu) {
        const ju = Eu ? new Float32Array(Eu, 0, uu.length / 3) : new Float32Array(uu.length / 3);
        let su = 0;
        for (let Uu = 0, Zu = uu.length / 3 - 1; Uu < Zu; Uu++) {
          let Eu = uu[3 * Uu + 0],
            Zu = uu[3 * Uu + 1],
            Xu = uu[3 * Uu + 2];
          Eu -= uu[3 * Uu + 3], Zu -= uu[3 * Uu + 4], Xu -= uu[3 * Uu + 5];
          su += Math.sqrt(Eu * Eu + Zu * Zu + Xu * Xu), ju[Uu + 1] = su
        }
        return ju
      }
      static SegmentizeSegmentByCount(uu, Eu, ju) {
        const su = [],
          Uu = Eu.subtract(uu),
          Zu = Wu.m.dO[0];
        Zu.k_(ju);
        const Xu = Wu.m.dO[1];
        Uu.divideToRef(Zu, Xu);
        let lu = uu.clone();
        su.push(lu);
        for (let qu = 0; qu < ju; qu++) lu = lu.clone(), su.push(lu.addInPlace(Xu));
        return su
      }
      static SegmentizeLineBySegmentLength(uu, Eu) {
        const ju = uu[0] instanceof Wu.t ? es.GetLineSegments(uu) : "number" === typeof uu[0] ? es.GetLineSegments(es.ToVector3Array(uu)) : uu,
          su = [];
        for (const Uu of ju)
          if (Uu.length > Eu) {
            const uu = es.SegmentizeSegmentByCount(Uu.point1, Uu.point2, Math.ceil(Uu.length / Eu));
            for (const Eu of uu) su.push(Eu)
          } else su.push(Uu.point1), su.push(Uu.point2);
        return su
      }
      static SegmentizeLineBySegmentCount(uu, Eu) {
        const ju = "number" === typeof uu[0] ? es.ToVector3Array(uu) : uu,
          su = es.GetLineLength(ju) / Eu;
        return es.SegmentizeLineBySegmentLength(ju, su)
      }
      static GetLineSegments(uu) {
        const Eu = [];
        for (let ju = 0; ju < uu.length - 1; ju++) {
          const su = uu[ju],
            Uu = uu[ju + 1],
            Zu = Uu.subtract(su).length();
          Eu.push({
            point1: su,
            point2: Uu,
            length: Zu
          })
        }
        return Eu
      }
      static GetMinMaxSegmentLength(uu) {
        const Eu = es.GetLineSegments(uu).sort((uu => uu.length));
        return {
          min: Eu[0].length,
          max: Eu[Eu.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Uu = Eu * ju;
        let Zu = 0,
          Xu = 0;
        const lu = uu.length;
        for (let fu = 0; fu < lu; fu++) {
          if (Uu <= Zu + uu[fu].length) {
            Xu = fu;
            break
          }
          Zu += uu[fu].length
        }
        const qu = (Uu - Zu) / uu[Xu].length;
        return uu[Xu].point2.subtractToRef(uu[Xu].point1, Wu.m.dO[0]), Wu.m.dO[0].scaleToRef(qu, Wu.m.dO[1]), su || Wu.m.dO[1].addInPlace(uu[Xu].point1), Wu.m.dO[1].clone()
      }
      static GetCircleLinePoints(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uu,
          Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / Eu;
        const Zu = [];
        for (let Xu = 0; Xu <= Eu; Xu++) Zu.push(new Wu.t(Math.cos(Xu * Uu) * uu, Math.sin(Xu * Uu) * su, ju));
        return Zu
      }
      static GetBezierLinePoints(uu, Eu, ju, su) {
        return hs.e.CreateQuadraticBezier(uu, Eu, ju, su).getPoints().flatMap((uu => [uu.x, uu.y, uu.z]))
      }
      static GetArrowCap(uu, Eu, ju, su, Uu) {
        let Zu = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [uu.clone(), uu.add(Eu.multiplyByFloats(ju, ju, ju))],
          widths: [su, Uu, Zu, Xu]
        }
      }
      static GetPointsFromText(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          Zu = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const Xu = [],
          lu = Ms(uu, Eu, ju, su);
        for (const qu of lu) {
          for (const uu of qu.paths) {
            const Eu = [],
              ju = uu.getPoints();
            for (const uu of ju) Eu.push(uu.x, uu.y, Uu);
            Xu.push(Eu)
          }
          if (Zu)
            for (const uu of qu.holes) {
              const Eu = [],
                ju = uu.getPoints();
              for (const uu of ju) Eu.push(uu.x, uu.y, Uu);
              Xu.push(Eu)
            }
        }
        return Xu
      }
      static Color3toRGBAUint8(uu) {
        const Eu = new Uint8Array(4 * uu.length);
        for (let ju = 0, su = 0; ju < uu.length; ju++) Eu[su++] = 255 * uu[ju].r, Eu[su++] = 255 * uu[ju].g, Eu[su++] = 255 * uu[ju].b, Eu[su++] = 255;
        return Eu
      }
      static CreateColorsTexture(uu, Eu, ju, su) {
        const Uu = su.wO().getCaps().maxTextureSize ?? 1,
          Zu = Eu.length > Uu ? Uu : Eu.length,
          Xu = Math.ceil(Eu.length / Uu);
        Xu > 1 && (Eu = [...Eu, ...Array(Zu * Xu - Eu.length).fill(Eu[0])]);
        const lu = es.Color3toRGBAUint8(Eu),
          qu = new pu.d(lu, Zu, Xu, Cj.c.TEXTUREFORMAT_RGBA, su, !1, !0, ju);
        return qu.name = uu, qu
      }
      static PrepareEmptyColorsTexture(uu) {
        if (!Ys.EmptyColorsTexture) {
          const Eu = new Uint8Array(4);
          Ys.EmptyColorsTexture = new pu.d(Eu, 1, 1, Cj.c.TEXTUREFORMAT_RGBA, uu, !1, !1, pu.d.NEAREST_NEAREST), Ys.EmptyColorsTexture.name = "grlEmptyColorsTexture", Ys.EmptyColorsTexture.wV.addOnce((() => {
            Ys.EmptyColorsTexture = null
          }))
        }
        return Ys.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        Ys.EmptyColorsTexture?.dispose(), Ys.EmptyColorsTexture = null
      }
      static BooleanToNumber(uu) {
        return uu ? 1 : 0
      }
    }
    class Gs extends Iu.c {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class ps extends Fu.b {
      isCompatible(uu) {
        return !0
      }
      constructor(uu, Eu, ju) {
        ju = ju || {
          color: Ys.DEFAULT_COLOR
        };
        const su = new Gs;
        su.GREASED_LINE_HAS_COLOR = !!ju.color && !ju.useColors, su.GREASED_LINE_SIZE_ATTENUATION = ju.sizeAttenuation ?? !1, su.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === ju.colorDistributionType, su.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (Eu ?? uu.hV()).useRightHandedSystem, su.GREASED_LINE_CAMERA_FACING = ju.cameraFacing ?? !0, super(uu, ps.GREASED_LINE_MATERIAL_NAME, 200, su, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = ju?.forceGLSL || ps.ForceGLSL, this._scene = Eu ?? uu.hV(), this._engine = this._scene.wO(), this._cameraFacing = ju.cameraFacing ?? !0, this.visibility = ju.visibility ?? 1, this.useDash = ju.useDash ?? !1, this.dashRatio = ju.dashRatio ?? .5, this.dashOffset = ju.dashOffset ?? 0, this.width = ju.width ? ju.width : ju.sizeAttenuation ? Ys.DEFAULT_WIDTH_ATTENUATED : Ys.DEFAULT_WIDTH, this._sizeAttenuation = ju.sizeAttenuation ?? !1, this.colorMode = ju.colorMode ?? 0, this._color = ju.color ?? null, this.useColors = ju.useColors ?? !1, this._colorsDistributionType = ju.colorDistributionType ?? 0, this.colorsSampling = ju.colorsSampling ?? pu.d.NEAREST_NEAREST, this._colors = ju.colors ?? null, this.dashCount = ju.dashCount ?? 1, this.resolution = ju.resolution ?? new Wu.p(this._engine.getRenderWidth(), this._engine.getRenderHeight()), ju.colorsTexture ? this.colorsTexture = ju.colorsTexture : this._colors ? this.colorsTexture = es.CreateColorsTexture(`${uu.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? Ys.DEFAULT_COLOR, es.PrepareEmptyColorsTexture(this._scene)), this._engine.wV.add((() => {
          es.DisposeEmptyColorsTexture()
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
        const Eu = [{
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
        return this._cameraFacing && Eu.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === uu && Eu.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: Eu,
          vertex: this._cameraFacing && this._isGLSL(uu) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(uu) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(uu) {
        if (this._cameraFacing) {
          uu.y_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || uu.y_("viewProjection", this._scene.getTransformMatrix());
          const Eu = Wu.m.Vector4[0];
          Eu.x = this._aspect, Eu.y = this._resolution.x, Eu.z = this._resolution.y, Eu.w = this.width, uu.updateVector4("grl_aspect_resolution_lineWidth", Eu)
        }
        const Eu = Wu.m.Vector4[0];
        Eu.x = es.BooleanToNumber(this.useDash), Eu.y = this._dashArray, Eu.z = this.dashOffset, Eu.w = this.dashRatio, uu.updateVector4("grl_dashOptions", Eu);
        const ju = Wu.m.Vector4[1];
        ju.x = this.colorMode, ju.y = this.visibility, ju.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, ju.w = es.BooleanToNumber(this.useColors), uu.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", ju), this._color && uu.updateColor3("grl_singleColor", this._color);
        const su = this.colorsTexture ?? Ys.EmptyColorsTexture;
        uu.setTexture("grl_colors", su), uu.updateFloat2("grl_textureSize", su?.getSize().width ?? 1, su?.getSize().height ?? 1)
      }
      prepareDefines(uu, Eu, ju) {
        uu.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, uu.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, uu.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, uu.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = Eu.useRightHandedSystem, uu.GREASED_LINE_CAMERA_FACING = this._cameraFacing, uu.GREASED_LINE_USE_OFFSETS = !!ju.offsets
      }
      getClassName() {
        return ps.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(Eu) ? function(uu, Eu) {
          if ("vertex" === uu) {
            const uu = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return Eu && (uu["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), uu
          }
          return "fragment" === uu ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(uu, this._cameraFacing) : function(uu, Eu) {
          if ("vertex" === uu) {
            const uu = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return Eu && (uu["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), uu
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = this._colors?.length ?? 0;
        if (this._colors = uu, null !== uu && 0 !== uu.length) {
          if (!Eu || ju)
            if (this.colorsTexture && su === uu.length && !ju) {
              const Eu = es.Color3toRGBAUint8(uu);
              this.colorsTexture.update(Eu)
            } else this.colorsTexture?.dispose(), this.colorsTexture = es.CreateColorsTexture(`${this._material.name}-colors-texture`, uu, this.colorsSampling, this._scene)
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== uu || null !== this._color && null === uu ? (this._color = uu, Eu || this.markAllDefinesAsDirty()) : this._color = uu
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
          Eu = {
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
        return this._colors && (Eu.colors = this._colors), this._color && (Eu.color = this._color), uu.greasedLineMaterialOptions = Eu, uu
      }
      parse(uu, Eu, ju) {
        super.parse(uu, Eu, ju);
        const su = uu.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), su.color && this.setColor(su.color, !0), su.colorDistributionType && (this.colorsDistributionType = su.colorDistributionType), su.colors && (this.colors = su.colors), su.colorsSampling && (this.colorsSampling = su.colorsSampling), su.colorMode && (this.colorMode = su.colorMode), su.useColors && (this.useColors = su.useColors), su.visibility && (this.visibility = su.visibility), su.useDash && (this.useDash = su.useDash), su.dashCount && (this.dashCount = su.dashCount), su.dashRatio && (this.dashRatio = su.dashRatio), su.dashOffset && (this.dashOffset = su.dashOffset), su.width && (this.width = su.width), su.sizeAttenuation && (this.sizeAttenuation = su.sizeAttenuation), su.resolution && (this.resolution = su.resolution), this.colors ? this.colorsTexture = es.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, Eu) : es.PrepareEmptyColorsTexture(Eu), this.markAllDefinesAsDirty()
      }
      copyTo(uu) {
        const Eu = uu;
        Eu.colorsTexture?.dispose(), this._colors && (Eu.colorsTexture = es.CreateColorsTexture(`${Eu._material.name}-colors-texture`, this._colors, Eu.colorsSampling, this._scene)), Eu.setColor(this.color, !0), Eu.colorsDistributionType = this.colorsDistributionType, Eu.colorsSampling = this.colorsSampling, Eu.colorMode = this.colorMode, Eu.useColors = this.useColors, Eu.visibility = this.visibility, Eu.useDash = this.useDash, Eu.dashCount = this.dashCount, Eu.dashRatio = this.dashRatio, Eu.dashOffset = this.dashOffset, Eu.width = this.width, Eu.sizeAttenuation = this.sizeAttenuation, Eu.resolution = this.resolution, Eu.markAllDefinesAsDirty()
      }
      _isGLSL(uu) {
        return 0 === uu || this._forceGLSL
      }
    }
    ps.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", ps.ForceGLSL = !1;
    var ws = ju(40661),
      ds = ju(40668),
      as = ju(39030),
      Ps = ju(40735),
      os = ju(40111);
    class ks extends Ps.q {
      constructor(uu, Eu, su) {
        const Uu = Eu.wO(),
          Zu = Uu.isWebGPU && !(su.forceGLSL || ks.ForceGLSL),
          Xu = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        Eu.useRightHandedSystem && Xu.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const lu = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        su.cameraFacing ? (Xu.push("GREASED_LINE_CAMERA_FACING"), lu.push("grl_previousAndSide", "grl_nextAndCounters")) : (lu.push("grl_slopes"), lu.push("grl_counters"));
        const qu = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (Zu || qu.push("world", "viewProjection", "view", "projection"), super(uu, Eu, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: Zu ? ["Scene", "Mesh"] : void 0,
            attributes: lu,
            uniforms: qu,
            samplers: Zu ? [] : ["grlColors"],
            defines: Xu,
            extraInitializationsAsync: async () => {
              Zu ? await Promise.all([ju.e(339).then((() => ju(62104))), ju.e(395).then((() => ju(62106)))]) : await Promise.all([ju.e(332).then((() => ju(62114))), ju.e(396).then((() => ju(62121)))])
            },
            shaderLanguage: Zu ? 1 : 0
          }), this._color = xu.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, su = su || {
            color: Ys.DEFAULT_COLOR
          }, this.visibility = su.visibility ?? 1, this.useDash = su.useDash ?? !1, this.dashRatio = su.dashRatio ?? .5, this.dashOffset = su.dashOffset ?? 0, this.dashCount = su.dashCount ?? 1, this.width = su.width ? su.width : su.sizeAttenuation && su.cameraFacing ? Ys.DEFAULT_WIDTH_ATTENUATED : Ys.DEFAULT_WIDTH, this.sizeAttenuation = su.sizeAttenuation ?? !1, this.color = su.color ?? xu.c.White(), this.useColors = su.useColors ?? !1, this.colorsDistributionType = su.colorDistributionType ?? 0, this.colorsSampling = su.colorsSampling ?? pu.d.NEAREST_NEAREST, this.colorMode = su.colorMode ?? 0, this._colors = su.colors ?? null, this._cameraFacing = su.cameraFacing ?? !0, this.resolution = su.resolution ?? new Wu.p(Uu.getRenderWidth(), Uu.getRenderHeight()), su.colorsTexture ? this.colorsTexture = su.colorsTexture : this._colors ? this.colorsTexture = es.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, Eu) : (this._color = this._color ?? Ys.DEFAULT_COLOR, this.colorsTexture = es.PrepareEmptyColorsTexture(Eu)), Zu) {
          const uu = new os.c;
          uu.setParameters(), uu.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", uu)
        }
        Uu.wV.add((() => {
          es.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== Ys.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new Wu.p(this._colorMode, this._colorsDistributionType))
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const su = this._colors?.length ?? 0;
        if (this._colors = uu, null !== uu && 0 !== uu.length) {
          if (!Eu || ju)
            if (this._colorsTexture && su === uu.length && !ju) {
              const Eu = es.Color3toRGBAUint8(uu);
              this._colorsTexture.update(Eu)
            } else this._colorsTexture && this._colorsTexture !== Ys.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = es.CreateColorsTexture(`${this.name}-colors-texture`, uu, this.colorsSampling, this.hV())
        } else {
          this._colorsTexture && this._colorsTexture !== Ys.EmptyColorsTexture && this._colorsTexture.dispose();
          const uu = this.hV();
          uu && (this.colorsTexture = es.PrepareEmptyColorsTexture(uu))
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
        this._useColors = uu, this.setFloat("grlUseColors", es.BooleanToNumber(uu))
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
        this._useDash = uu, this.setFloat("grlUseDash", es.BooleanToNumber(uu))
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
        this._sizeAttenuation = uu, this.setFloat("grlSizeAttenuation", es.BooleanToNumber(uu))
      }
      get color() {
        return this._color
      }
      set color(uu) {
        this.setColor(uu)
      }
      setColor(uu) {
        uu = uu ?? Ys.DEFAULT_COLOR, this._color = uu, this.setColor3("grlColor", uu)
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
          Eu = {
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
        return this._colors && (Eu.colors = this._colors), uu.greasedLineMaterialOptions = Eu, uu
      }
      parse(uu, Eu, ju) {
        const su = uu.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), su.color && (this.color = su.color), su.colorDistributionType && (this.colorsDistributionType = su.colorDistributionType), su.colorsSampling && (this.colorsSampling = su.colorsSampling), su.colorMode && (this.colorMode = su.colorMode), su.useColors && (this.useColors = su.useColors), su.visibility && (this.visibility = su.visibility), su.useDash && (this.useDash = su.useDash), su.dashCount && (this.dashCount = su.dashCount), su.dashRatio && (this.dashRatio = su.dashRatio), su.dashOffset && (this.dashOffset = su.dashOffset), su.width && (this.width = su.width), su.sizeAttenuation && (this.sizeAttenuation = su.sizeAttenuation), su.resolution && (this.resolution = su.resolution), su.colors ? this.colorsTexture = es.CreateColorsTexture(`${this.name}-colors-texture`, su.colors, this.colorsSampling, this.hV()) : this.colorsTexture = es.PrepareEmptyColorsTexture(Eu), this._cameraFacing = su.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var ms, vs, Ks;
    ks.ForceGLSL = !1,
      function(uu) {
        uu[uu.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", uu[uu.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(ms || (ms = {})),
      function(uu) {
        uu[uu.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", uu[uu.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", uu[uu.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(vs || (vs = {})),
      function(uu) {
        uu[uu.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", uu[uu.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", uu[uu.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", uu[uu.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", uu[uu.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(Ks || (Ks = {}));
    class Vs extends ws.e {
      constructor(uu, Eu, ju) {
        super(uu, Eu, null, null, !1, !1), this.name = uu, this._options = ju, this._lazy = !1, this._updatable = !1, this._engine = Eu.wO(), this._lazy = ju.lazy ?? !1, this._updatable = ju.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = ju.colorPointers ?? [], this._widths = ju.widths ?? new Array(ju.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(uu) {
        let Eu = 0;
        for (const su of this._points) Eu += su.length;
        const ju = Eu / 3 * 2 - this._widths.length;
        for (let su = 0; su < ju; su++) this._widths.push(uu)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.PO && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(uu, Eu) {
        for (const ju of uu) this._points.push(ju);
        this._lazy || this.setPoints(this._points, Eu)
      }
      dispose(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(uu, Eu)
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
        this.material instanceof ks && this.material.setDefine("GREASED_LINE_USE_OFFSETS", uu?.length > 0), this._offsets = uu, this._offsetsBuffer ? this._offsetsBuffer.update(uu) : this._createOffsetsBuffer(uu)
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
        if (this.material && this.material instanceof ks) return this.material;
        const uu = this.material?.pluginManager?.getPlugin(ps.GREASED_LINE_MATERIAL_NAME);
        return uu || void 0
      }
      get points() {
        const uu = [];
        return as.d.DeepCopy(this._points, uu), uu
      }
      setPoints(uu, Eu) {
        this._points = es.ConvertPoints(uu, Eu?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), Eu?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, Eu)
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
        const Eu = new ds.b;
        return Eu.positions = this._vertexPositions, Eu.indices = this._indices, Eu.uvs = this._uvs, uu && (Eu.normals = [], ds.b.ComputeNormals(this._vertexPositions, this._indices, Eu.normals)), Eu.applyToMesh(this, this._options.updatable), Eu
      }
      _createOffsetsBuffer(uu) {
        const Eu = this._scene.wO(),
          ju = new Su.b(Eu, uu, this._updatable, 3);
        this.setVerticesBuffer(ju.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = ju
      }
    }
    class rs {
      constructor(uu, Eu) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = uu, this.wasAddedByNoopNode = Eu
      }
      getIndicesAccessor(uu, Eu, ju, su, Uu) {
        return this._indicesAccessorMap.get(uu)?.get(Eu)?.get(ju)?.get(su)?.get(Uu)
      }
      setIndicesAccessor(uu, Eu, ju, su, Uu, Zu) {
        let Xu = this._indicesAccessorMap.get(uu);
        Xu || (Xu = new Map, this._indicesAccessorMap.set(uu, Xu));
        let lu = Xu.get(Eu);
        lu || (lu = new Map, Xu.set(Eu, lu));
        let qu = lu.get(ju);
        qu || (qu = new Map, lu.set(ju, qu));
        let fu = qu.get(su);
        fu || (fu = new Map, qu.set(su, fu)), fu.set(Uu, Zu)
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
      setVertexBufferView(uu, Eu) {
        this._vertexBufferViewMap.set(uu, Eu)
      }
      setRemappedBufferView(uu, Eu, ju) {
        this._remappedBufferView.set(uu, new Map), this._remappedBufferView.get(uu).set(Eu, ju)
      }
      getRemappedBufferView(uu, Eu) {
        return this._remappedBufferView.get(uu)?.get(Eu)
      }
      getVertexAccessor(uu, Eu, ju) {
        return this._vertexAccessorMap.get(uu)?.get(Eu)?.get(ju)
      }
      setVertexAccessor(uu, Eu, ju, su) {
        let Uu = this._vertexAccessorMap.get(uu);
        Uu || (Uu = new Map, this._vertexAccessorMap.set(uu, Uu));
        let Zu = Uu.get(Eu);
        Zu || (Zu = new Map, Uu.set(Eu, Zu)), Zu.set(ju, su)
      }
      hasVertexColorAlpha(uu) {
        return this._vertexMapColorAlpha.get(uu) || !1
      }
      setHasVertexColorAlpha(uu, Eu) {
        return this._vertexMapColorAlpha.set(uu, Eu)
      }
      getMesh(uu) {
        return this._meshMap.get(uu)
      }
      setMesh(uu, Eu) {
        this._meshMap.set(uu, Eu)
      }
      bindMorphDataToMesh(uu, Eu) {
        const ju = this._meshMorphTargetMap.get(uu) || [];
        this._meshMorphTargetMap.set(uu, ju), -1 === ju.indexOf(Eu) && ju.push(Eu)
      }
      getMorphTargetsFromMesh(uu) {
        return this._meshMorphTargetMap.get(uu)
      }
    }
    class Qs {
      _ApplyExtension(uu, Eu, ju, su) {
        if (ju >= Eu.length) return Promise.resolve(uu);
        const Uu = su(Eu[ju], uu);
        return Uu ? Uu.then((async uu => uu ? await this._ApplyExtension(uu, Eu, ju + 1, su) : null)) : this._ApplyExtension(uu, Eu, ju + 1, su)
      }
      _ApplyExtensions(uu, Eu) {
        const ju = [];
        for (const su of Qs._ExtensionNames) ju.push(this._extensions[su]);
        return this._ApplyExtension(uu, ju, 0, Eu)
      }
      _extensionsPostExportNodeAsync(uu, Eu, ju, su, Uu) {
        return this._ApplyExtensions(Eu, ((Eu, Zu) => Eu.postExportNodeAsync && Eu.postExportNodeAsync(uu, Zu, ju, su, Uu, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(uu, Eu, ju) {
        return this._ApplyExtensions(Eu, ((Eu, su) => Eu.postExportMaterialAsync && Eu.postExportMaterialAsync(uu, su, ju)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        return await Promise.all(Qs._ExtensionNames.map((async Uu => {
          const Zu = this._extensions[Uu];
          if (Zu.postExportMaterialAdditionalTexturesAsync) {
            const Uu = await Zu.postExportMaterialAdditionalTexturesAsync(uu, Eu, ju);
            su.push(...Uu)
          }
        }))), su
      }
      _extensionsPostExportTextures(uu, Eu, ju) {
        for (const su of Qs._ExtensionNames) {
          const Uu = this._extensions[su];
          Uu.postExportTexture && Uu.postExportTexture(uu, Eu, ju)
        }
      }
      _extensionsPostExportMeshPrimitive(uu) {
        for (const Eu of Qs._ExtensionNames) {
          const ju = this._extensions[Eu];
          ju.postExportMeshPrimitive && ju.postExportMeshPrimitive(uu, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const uu of Qs._ExtensionNames) {
          const Eu = this._extensions[uu];
          Eu.preGenerateBinaryAsync && await Eu.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(uu) {
        for (const Eu of Qs._ExtensionNames) {
          const ju = this._extensions[Eu];
          ju.enabled && uu(ju)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((uu => {
          var Eu, ju, su;
          uu.wasUsed && ((Eu = this._glTF).extensionsUsed || (Eu.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(uu.name) && this._glTF.extensionsUsed.push(uu.name), uu.required && ((ju = this._glTF).extensionsRequired || (ju.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(uu.name) && this._glTF.extensionsRequired.push(uu.name)), (su = this._glTF).extensions || (su.extensions = {}), uu.onExporting && uu.onExporting())
        }))
      }
      _loadExtensions() {
        for (const uu of Qs._ExtensionNames) {
          const Eu = Qs._ExtensionFactories[uu](this);
          this._extensions[uu] = Eu
        }
      }
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Yu.b.LastCreatedScene,
          Eu = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${Ou.c.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new kj(this), this._extensions = {}, this._bufferManager = new ss, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !uu) throw new Error("No scene available to export");
        this._babylonScene = uu, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: uu => uu?.WK?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...Eu
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
      static RegisterExtension(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        Qs.UnregisterExtension(uu) && Uu.Tools.Warn(`Extension with the name ${uu} already exists`), Qs._ExtensionFactories[uu] = Eu;
        const su = ju ?? 0;
        Qs._ExtensionOrders[uu] = su;
        let Zu = Qs._ExtensionNames.length;
        for (let Uu = 0; Uu < Qs._ExtensionNames.length; Uu++) {
          const uu = Qs._ExtensionNames[Uu];
          if (su < Qs._ExtensionOrders[uu]) {
            Zu = Uu;
            break
          }
        }
        Qs._ExtensionNames.splice(Zu, 0, uu)
      }
      static UnregisterExtension(uu) {
        if (!Qs._ExtensionFactories[uu]) return !1;
        delete Qs._ExtensionFactories[uu], delete Qs._ExtensionOrders[uu];
        const Eu = Qs._ExtensionNames.indexOf(uu);
        return -1 !== Eu && Qs._ExtensionNames.splice(Eu, 1), !0
      }
      _generateJSON(uu, Eu, ju) {
        const su = {
          byteLength: uu
        };
        return su.byteLength && (this._glTF.buffers = [su]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.vY = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (su.uri = Eu + ".bin"), ju ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(uu) {
        const Eu = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ju = this._generateJSON(Eu.byteLength, uu, !0),
          su = new Blob([Eu], {
            type: "application/octet-stream"
          }),
          Uu = uu + ".gltf",
          Zu = uu + ".bin",
          Xu = new fu;
        if (Xu.files[Uu] = ju, Xu.files[Zu] = su, this._imageData)
          for (const lu in this._imageData) Xu.files[lu] = this._imageData[lu];
        return Xu
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(uu) {
        const Eu = uu % 4;
        return 0 === Eu ? Eu : 4 - Eu
      }
      async generateGLBAsync(uu) {
        this._shouldUseGlb = !0;
        const Eu = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const ju = this._generateJSON(Eu.byteLength),
          su = uu + ".glb";
        let Uu, Zu = ju.length;
        if ("undefined" !== typeof TextEncoder) {
          Uu = (new TextEncoder).encode(ju), Zu = Uu.length
        }
        const Xu = this._getPadding(Zu),
          lu = this._getPadding(Eu.byteLength),
          qu = 28 + Zu + Xu + Eu.byteLength + lu,
          Cu = new us(qu);
        if (Cu.writeUInt32(1179937895), Cu.writeUInt32(2), Cu.writeUInt32(qu), Cu.writeUInt32(Zu + Xu), Cu.writeUInt32(1313821514), Uu) Cu.writeTypedArray(Uu);
        else {
          const uu = "_".charCodeAt(0);
          for (let Eu = 0; Eu < Zu; ++Eu) {
            const su = ju.charCodeAt(Eu);
            su != ju.codePointAt(Eu) ? Cu.writeUInt8(uu) : Cu.writeUInt8(su)
          }
        }
        for (let fu = 0; fu < Xu; ++fu) Cu.writeUInt8(32);
        Cu.writeUInt32(Eu.byteLength + lu), Cu.writeUInt32(5130562), Cu.writeTypedArray(Eu);
        for (let fu = 0; fu < lu; ++fu) Cu.writeUInt8(0);
        const bu = new fu;
        return bu.files[su] = new Blob([Cu.getOutputData()], {
          type: "application/octet-stream"
        }), bu
      }
      _setNodeTransformation(uu, Eu, ju) {
        if (Eu.getPivotPoint().equalsWithEpsilon(Qj, Kj.c) || Uu.Tools.Warn("Pivot points are not supported in the glTF serializer"), !Eu.position.equalsWithEpsilon(Qj, Kj.c)) {
          const Uu = su.TmpVectors.dO[0].yJ(Eu.position);
          ju && tj(Uu), uu.translation = Uu.Osu()
        }
        Eu.Of.equalsWithEpsilon(Wj, Kj.c) || (uu.scale = Eu.Of.Osu());
        const Zu = Eu.rotationQuaternion?.clone() || su.Quaternion.FromEulerAngles(Eu.rotation.x, Eu.rotation.y, Eu.rotation.z);
        Zu.equalsWithEpsilon(ij, Kj.c) || (ju && xj(Zu), uu.rotation = Zu.normalize().Osu())
      }
      _setCameraTransformation(uu, Eu, ju) {
        const Uu = su.TmpVectors.dO[0],
          Zu = su.TmpVectors.Quaternion[0],
          Xu = Eu.getWorldMatrix();
        if (Eu.parent) {
          const uu = Eu.parent.getWorldMatrix().invertToRef(su.TmpVectors.Matrix[0]);
          Xu.multiplyToRef(uu, su.TmpVectors.Matrix[1]).decompose(void 0, Zu, Uu)
        } else Xu.decompose(void 0, Zu, Uu);
        Uu.equalsWithEpsilon(Qj, Kj.c) || (ju && tj(Uu), uu.translation = Uu.Osu()), ju && xj(Zu), this._babylonScene.useRightHandedSystem || Tj(Zu), Zu.equalsWithEpsilon(ij, Kj.c) || (uu.rotation = Zu.Osu())
      }
      _listAvailableCameras() {
        for (const uu of this._babylonScene.cameras) {
          const Eu = {
            type: uu.mode === Us.e.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (uu.name && (Eu.name = uu.name), "perspective" === Eu.type) Eu.perspective = {
            aspectRatio: uu.wO().getAspectRatio(uu),
            yfov: uu.fovMode === Us.e.FOVMODE_VERTICAL_FIXED ? uu.fov : uu.fov * uu.wO().getAspectRatio(uu),
            znear: uu.minZ,
            zfar: uu.maxZ
          };
          else if ("orthographic" === Eu.type) {
            const ju = uu.orthoLeft && uu.orthoRight ? .5 * (uu.orthoRight - uu.orthoLeft) : .5 * uu.wO().getRenderWidth(),
              su = uu.orthoBottom && uu.orthoTop ? .5 * (uu.orthoTop - uu.orthoBottom) : .5 * uu.wO().getRenderHeight();
            Eu.orthographic = {
              xmag: ju,
              ymag: su,
              znear: uu.minZ,
              zfar: uu.maxZ
            }
          }
          this._camerasMap.set(uu, Eu)
        }
      }
      _exportAndAssignCameras() {
        const uu = Array.from(this._camerasMap.values());
        for (const Eu of uu) {
          const uu = this._nodesCameraMap.get(Eu);
          if (void 0 !== uu) {
            this._cameras.push(Eu);
            for (const Eu of uu) Eu.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const uu of this._babylonScene.skeletons) {
          if (uu.bones.length <= 0) continue;
          const Eu = {
            joints: []
          };
          this._skinMap.set(uu, Eu)
        }
      }
      _exportAndAssignSkeletons(uu) {
        for (const ju of this._babylonScene.skeletons) {
          if (ju.bones.length <= 0) continue;
          const Zu = this._skinMap.get(ju);
          if (void 0 == Zu) continue;
          const Xu = {};
          let lu = -1;
          for (let uu = 0; uu < ju.bones.length; ++uu) {
            const Eu = ju.bones[uu],
              su = Eu.getIndex() ?? uu; - 1 !== su && (Xu[su] = Eu, su > lu && (lu = su))
          }
          const qu = [];
          for (let ju = 0; ju <= lu; ++ju) {
            const lu = Xu[ju],
              fu = lu.getTransformNode(),
              Cu = fu ? this._nodeMap.get(fu) : void 0;
            if (void 0 === Cu) {
              Uu.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            Zu.joints.push(Cu);
            const bu = lu.getAbsoluteInverseBindMatrix().clone();
            uu.has(fu) && (Eu = bu, Vj.invertToRef(su.TmpVectors.Matrix[0]).multiplyToRef(Eu, Eu).multiplyToRef(Vj, Eu)), qu.push(bu)
          }
          const fu = this._nodesSkinMap.get(Zu);
          if (Zu.joints.length > 0 && void 0 !== fu) {
            const uu = new Float32Array(16 * qu.length);
            qu.forEach(((Eu, ju) => {
              uu.set(Eu.m, 16 * ju)
            }));
            const Eu = this._bufferManager.createBufferView(uu);
            this._accessors.push(this._bufferManager.createAccessor(Eu, "MAT4", 5126, qu.length)), Zu.inverseBindMatrices = this._accessors.length - 1, this._skins.push(Zu);
            const ju = this._skins.length - 1;
            for (const su of fu) su.skin = ju
          }
        }
        var Eu
      }
      async _exportSceneAsync() {
        const uu = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const Eu = this._options.metadataSelector(this._babylonScene.metadata);
          Eu && (uu.extras = Eu)
        }
        const Eu = new Array,
          ju = new Array,
          su = new Array,
          Uu = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let Zu;
        if (Uu && !this._options.includeCoordinateSystemConversionNodes)
          for (const fu of this._babylonScene.animationGroups)
            for (const uu of fu.targetedAnimations) {
              const Eu = uu.target;
              Eu instanceof bu.e && !Eu.parent && (Zu ?? (Zu = new Set)).add(Eu)
            }
        for (const fu of this._babylonScene.rootNodes) {
          const uu = fu.animations,
            Xu = !!uu && uu.length > 0 || Zu?.has(fu);
          Uu && !this._options.includeCoordinateSystemConversionNodes && rj(fu, this._babylonScene.useRightHandedSystem) && !Xu ? su.push(...fu.getChildren()) : this._babylonScene.useRightHandedSystem ? Eu.push(fu) : ju.push(fu)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const Xu = new rs(!0, !1);
        uu.nodes.push(...await this._exportNodesAsync(ju, Xu));
        const lu = new rs(!1, !1);
        uu.nodes.push(...await this._exportNodesAsync(Eu, lu));
        const qu = new rs(!1, !0);
        uu.nodes.push(...await this._exportNodesAsync(su, qu)), uu.nodes.length && this._scenes.push(uu), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(Xu.getNodesSet()), this._babylonScene.animationGroups.length && cs._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, Xu.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(uu) {
        return this._nodeMap.get(uu)
      }
      _getAnimationIndex(uu) {
        return this._animationGroupMap.get(uu)
      }
      _getCameraIndex(uu) {
        const Eu = this._camerasMap.get(uu);
        if (!Eu) return;
        const ju = this._cameras.indexOf(Eu);
        return ju >= 0 ? ju : void 0
      }
      _getMaterialIndex(uu) {
        return this._materialMap.get(uu)
      }
      _getRootIndex(uu, Eu) {
        switch (uu) {
          case "nodes":
            return this._getNodeIndex(Eu);
          case "animations":
            return this._getAnimationIndex(Eu);
          case "cameras":
            return this._getCameraIndex(Eu);
          case "materials":
            return this._getMaterialIndex(Eu);
          case "meshes": {
            const uu = this._getNodeIndex(Eu);
            return void 0 === uu ? void 0 : this._nodes[uu]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(Eu)?.index;
          case "images": {
            const uu = this._materialExporter.getTextureInfo(Eu)?.index;
            if (void 0 === uu) return;
            const ju = this._textures[uu];
            for (const Eu of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const uu = ju?.extensions?.[Eu]?.source;
              if ("number" === typeof uu) return uu
            }
            return ju?.source
          }
          case "samplers": {
            const uu = this._materialExporter.getTextureInfo(Eu)?.index;
            return void 0 === uu ? void 0 : this._textures[uu]?.sampler
          }
          case "skins": {
            const uu = this._skinMap.get(Eu),
              ju = uu ? this._skins.indexOf(uu) : -1;
            return ju >= 0 ? ju : void 0
          }
          case "scenes":
            return Eu === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(uu, Eu, ju) {
        const su = this._nodes[uu];
        if (!su) throw new Error(`Cannot write ${Eu}: glTF node ${uu} does not exist.`);
        su.extensions || (su.extensions = {}), su.extensions[Eu] = ju
      }
      _shouldExportNode(uu) {
        let Eu = this._shouldExportNodeMap.get(uu);
        return void 0 === Eu && (Eu = this._options.shouldExportNode(uu), this._shouldExportNodeMap.set(uu, Eu)), Eu
      }
      async _exportNodesAsync(uu, Eu) {
        const ju = new Array;
        this._exportBuffers(uu, Eu);
        for (const su of uu) await this._exportNodeAsync(su, ju, Eu);
        return ju
      }
      _collectBuffers(uu, Eu, ju, su, Uu) {
        if (this._shouldExportNode(uu) && uu instanceof cu.c && uu.geometry) {
          const Zu = uu.geometry.getVertexBuffers();
          if (Zu)
            for (const su in Zu) {
              if (!Bj(su)) continue;
              const Xu = Zu[su];
              Uu.setHasVertexColorAlpha(Xu, uu.hasVertexAlpha);
              const lu = Xu._buffer,
                qu = Eu.get(lu) || [];
              Eu.set(lu, qu), -1 === qu.indexOf(Xu) && qu.push(Xu);
              const fu = ju.get(Xu) || [];
              ju.set(Xu, fu), -1 === fu.indexOf(uu) && fu.push(uu)
            }
          const Xu = uu.morphTargetManager;
          if (Xu)
            for (let Eu = 0; Eu < Xu.numTargets; Eu++) {
              const ju = Xu.getTarget(Eu),
                Uu = su.get(ju) || [];
              su.set(ju, Uu), -1 === Uu.indexOf(uu) && Uu.push(uu)
            }
        }
        for (const Zu of uu.getChildren()) this._collectBuffers(Zu, Eu, ju, su, Uu)
      }
      _exportBuffers(uu, Eu) {
        const ju = new Map,
          su = new Map,
          Uu = new Map;
        for (const lu of uu) this._collectBuffers(lu, ju, su, Uu, Eu);
        const Zu = Array.from(ju.keys());
        for (const lu of Zu) {
          const uu = lu.getData();
          if (!uu) throw new Error("Buffer data is not available");
          const Uu = ju.get(lu);
          if (!Uu) continue;
          const Zu = Uu[0].byteStride;
          if (Uu.some((uu => uu.byteStride !== Zu))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const Xu = nj(uu).slice();
          for (const Eu of Uu) {
            const uu = su.get(Eu),
              {
                byteOffset: ju,
                byteStride: Uu,
                componentCount: Zu,
                type: lu,
                count: qu,
                normalized: fu,
                kind: bu
              } = Ij(Eu, uu);
            switch (bu) {
              case Cu.e.NormalKind:
              case Cu.e.TangentKind:
                (0, mj.h)(Xu, ju, Uu, Zu, lu, qu, fu, (uu => {
                  const Eu = Math.sqrt(uu[0] * uu[0] + uu[1] * uu[1] + uu[2] * uu[2]);
                  if (Eu > 0) {
                    const ju = 1 / Eu;
                    uu[0] *= ju, uu[1] *= ju, uu[2] *= ju
                  }
                }));
                break;
              case Cu.e.ColorKind: {
                const Eu = uu.filter((uu => uu.material instanceof Xs.StandardMaterial || null == uu.material)).length;
                if (0 == Eu) break;
                if (Eu != uu.length) {
                  Pu.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                lu == Cu.e.UNSIGNED_BYTE && Pu.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const su = new hu.Color3,
                  bu = new hu.b,
                  cu = this._babylonScene.wO().useExactSrgbConversions;
                (0, mj.h)(Xu, ju, Uu, Zu, lu, qu, fu, (uu => {
                  3 === uu.length ? (su.sju(uu, 0), su.toLinearSpaceToRef(su, cu), su.toArray(uu, 0)) : (bu.sju(uu, 0), bu.toLinearSpaceToRef(bu, cu), bu.toArray(uu, 0))
                }))
              }
            }
          }
          if (Eu.convertToRightHanded) {
            for (const uu of Uu) {
              const Eu = su.get(uu),
                {
                  byteOffset: ju,
                  byteStride: Uu,
                  componentCount: Zu,
                  type: lu,
                  count: qu,
                  normalized: fu,
                  kind: bu
                } = Ij(uu, Eu);
              switch (bu) {
                case Cu.e.PositionKind:
                case Cu.e.NormalKind:
                case Cu.e.TangentKind:
                  (0, mj.h)(Xu, ju, Uu, Zu, lu, qu, fu, (uu => {
                    uu[0] = -uu[0]
                  }))
              }
            }
            Eu.convertedToRightHandedBuffers.set(lu, Xu)
          }
          const qu = this._bufferManager.createBufferView(Xu, Zu);
          Eu.setVertexBufferView(lu, qu);
          const fu = new Map;
          for (const Eu of Uu) {
            const uu = su.get(Eu),
              {
                kind: ju,
                totalVertices: Uu
              } = Ij(Eu, uu);
            switch (ju) {
              case Cu.e.MatricesIndicesKind:
              case Cu.e.MatricesIndicesExtraKind:
                if (Eu.type == Cu.e.FLOAT) {
                  const uu = Eu.getFloatData(Uu);
                  null !== uu && fu.set(Eu, uu)
                }
            }
          }
          0 !== fu.size && Pu.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const bu = Array.from(fu.keys());
          for (const ju of bu) {
            const uu = fu.get(ju);
            if (!uu) continue;
            const su = uu.some((uu => uu >= 256)),
              Uu = new(su ? Uint16Array : Uint8Array)(uu.length);
            for (let Eu = 0; Eu < uu.length; Eu++) Uu[Eu] = uu[Eu];
            const Zu = this._bufferManager.createBufferView(Uu, 4 * (su ? 2 : 1));
            Eu.setRemappedBufferView(lu, ju, Zu)
          }
        }
        const Xu = Array.from(Uu.keys());
        for (const lu of Xu) {
          const uu = Uu.get(lu);
          if (!uu) continue;
          const ju = Ns(lu, uu[0], this._bufferManager, this._bufferViews, this._accessors, Eu.convertToRightHanded);
          for (const su of uu) Eu.bindMorphDataToMesh(su, ju)
        }
      }
      async _exportNodeAsync(uu, Eu, ju) {
        let su = this._nodeMap.get(uu);
        if (void 0 !== su) return void(Eu.includes(su) || Eu.push(su));
        const Uu = await this._createNodeAsync(uu, ju);
        if (Uu) {
          su = this._nodes.length, this._nodes.push(Uu), this._nodeMap.set(uu, su), ju.pushExportedNode(uu), Eu.push(su);
          const Zu = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            Xu = [];
          this._babylonScene.animationGroups.length || (cs._CreateMorphTargetAnimationFromMorphTargetAnimations(uu, Zu, Xu, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ju.convertToRightHanded, this._options.shouldExportAnimation), uu.animations.length && cs._CreateNodeAnimationFromNodeAnimations(uu, Zu, Xu, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, ju.convertToRightHanded, this._options.shouldExportAnimation)), Zu.channels.length && Zu.samplers.length && this._animations.push(Zu), Xu.forEach((uu => {
            uu.channels.length && uu.samplers.length && this._animations.push(uu)
          }))
        }
        const Zu = Uu ? [] : Eu;
        for (const Xu of uu.getChildren()) await this._exportNodeAsync(Xu, Zu, ju);
        Uu && Zu.length && (Uu.children = Zu)
      }
      async _createNodeAsync(uu, Eu) {
        if (!this._shouldExportNode(uu)) return null;
        const ju = {};
        if (uu.name && (ju.name = uu.name), uu.metadata) {
          const Eu = this._options.metadataSelector(uu.metadata);
          Eu && (ju.extras = Eu)
        }
        if (uu instanceof bu.e && (this._setNodeTransformation(ju, uu, Eu.convertToRightHanded), uu instanceof cu.c)) {
          const su = uu instanceof Nu.c ? uu.CUu : uu;
          if (su.iG && su.iG.length > 0 && (ju.mesh = await this._exportMeshAsync(su, Eu)), uu.skeleton) {
            const Eu = this._skinMap.get(uu.skeleton);
            void 0 !== Eu && (void 0 === this._nodesSkinMap.get(Eu) && this._nodesSkinMap.set(Eu, []), this._nodesSkinMap.get(Eu)?.push(ju))
          }
        }
        if (uu instanceof vj.e) {
          const su = this._camerasMap.get(uu);
          if (su) {
            void 0 === this._nodesCameraMap.get(su) && this._nodesCameraMap.set(su, []), this._setCameraTransformation(ju, uu, Eu.convertToRightHanded);
            const Uu = uu.parent;
            if (null !== Uu && Aj(uu, Uu)) {
              const uu = this._nodeMap.get(Uu);
              if (void 0 !== uu) {
                const Eu = this._nodes[uu];
                return Hj(ju, Eu), this._nodesCameraMap.get(su)?.push(Eu), null
              }
            }
            this._nodesCameraMap.get(su)?.push(ju)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", ju, uu, this._nodeMap, Eu.convertToRightHanded) ? ju : (Pu.b.Warn(`Not exporting node ${uu.name}`), null)
      }
      _exportIndices(uu, Eu, ju, su, Uu, Xu, lu, qu, fu) {
        let Cu = null;
        fu.mode = function(uu) {
          switch (uu) {
            case Zu.b.TriangleFillMode:
              return 4;
            case Zu.b.TriangleStripDrawMode:
              return 5;
            case Zu.b.TriangleFanDrawMode:
              return 6;
            case Zu.b.PointListDrawMode:
            case Zu.b.PointFillMode:
              return 0;
            case Zu.b.LineLoopDrawMode:
              return 2;
            case Zu.b.LineListDrawMode:
              return 1;
            case Zu.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${uu}`)
        }(Xu);
        const bu = lu !== Zu.b.CounterClockWiseSideOrientation && function(uu) {
          switch (uu) {
            case Zu.b.TriangleFillMode:
            case Zu.b.TriangleStripDrawMode:
            case Zu.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(Xu);
        if (bu) {
          if (Xu === Zu.b.TriangleStripDrawMode || Xu === Zu.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const lu = Eu ? new Uint32Array(su) : new Uint16Array(su);
          if (uu)
            for (let Eu = 0; Eu + 2 < su; Eu += 3) lu[Eu] = uu[ju + Eu] + Uu, lu[Eu + 1] = uu[ju + Eu + 2] + Uu, lu[Eu + 2] = uu[ju + Eu + 1] + Uu;
          else
            for (let uu = 0; uu + 2 < su; uu += 3) lu[uu] = uu, lu[uu + 1] = uu + 2, lu[uu + 2] = uu + 1;
          Cu = lu
        } else if (uu && 0 !== Uu) {
          const Zu = Eu ? new Uint32Array(su) : new Uint16Array(su);
          for (let Eu = 0; Eu < su; Eu++) Zu[Eu] = uu[ju + Eu] + Uu;
          Cu = Zu
        } else uu && (Cu = function(uu, Eu, ju, su) {
          let Uu = uu;
          return 0 === Eu && ju === uu.length || (Uu = Array.isArray(uu) ? uu.slice(Eu, Eu + ju) : uu.subarray(Eu, Eu + ju)), Uu instanceof Int32Array ? new Uint32Array(Uu.buffer, Uu.byteOffset, Uu.length) : Array.isArray(Uu) ? su ? new Uint32Array(Uu) : new Uint16Array(Uu) : Uu
        }(uu, ju, su, Eu));
        if (Cu) {
          let Zu = qu.getIndicesAccessor(uu, ju, su, Uu, bu);
          if (void 0 === Zu) {
            const Xu = this._bufferManager.createBufferView(Cu),
              lu = Eu ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(Xu, "SCALAR", lu, su, 0)), Zu = this._accessors.length - 1, qu.setIndicesAccessor(uu, ju, su, Uu, bu, Zu)
          }
          fu.indices = Zu
        }
      }
      _exportVertexBuffer(uu, Eu, ju, su, Uu, Zu) {
        const Xu = uu.getKind();
        if (!Bj(Xu)) return;
        if (Xu.startsWith("uv") && !this._options.exportUnusedUVs && (!Eu || !this._materialNeedsUVsSet.has(Eu))) return;
        let lu = Uu.getVertexAccessor(uu, ju, su);
        if (void 0 === lu) {
          const Eu = Uu.convertedToRightHandedBuffers.get(uu._buffer) || uu._buffer.getData(),
            Zu = Xu === Cu.e.PositionKind ? function(uu, Eu, ju, su) {
              const {
                byteOffset: Uu,
                byteStride: Zu,
                type: Xu,
                normalized: lu
              } = Eu, qu = Eu.getSize(), fu = new Array(qu).fill(1 / 0), Cu = new Array(qu).fill(-1 / 0);
              return (0, mj.h)(uu, Uu + ju * Zu, Zu, qu, Xu, su * qu, lu, (uu => {
                for (let Eu = 0; Eu < qu; Eu++) fu[Eu] = Math.min(fu[Eu], uu[Eu]), Cu[Eu] = Math.max(Cu[Eu], uu[Eu])
              })), {
                min: fu,
                max: Cu
              }
            }(Eu, uu, ju, su) : void 0,
            qu = (Xu === Cu.e.MatricesIndicesKind || Xu === Cu.e.MatricesIndicesExtraKind) && uu.type === Cu.e.FLOAT,
            fu = qu ? Cu.e.UNSIGNED_BYTE : uu.type,
            bu = qu ? void 0 : uu.normalized,
            cu = qu ? Uu.getRemappedBufferView(uu._buffer, uu) : Uu.getVertexBufferView(uu._buffer),
            Nu = uu.byteOffset + ju * uu.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(cu, function(uu, Eu) {
            if (uu == Cu.e.ColorKind) return Eu ? "VEC4" : "VEC3";
            switch (uu) {
              case Cu.e.PositionKind:
              case Cu.e.NormalKind:
                return "VEC3";
              case Cu.e.TangentKind:
              case Cu.e.MatricesIndicesKind:
              case Cu.e.MatricesIndicesExtraKind:
              case Cu.e.MatricesWeightsKind:
              case Cu.e.MatricesWeightsExtraKind:
                return "VEC4";
              case Cu.e.UVKind:
              case Cu.e.UV2Kind:
              case Cu.e.UV3Kind:
              case Cu.e.UV4Kind:
              case Cu.e.UV5Kind:
              case Cu.e.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${uu}`)
          }(Xu, Uu.hasVertexColorAlpha(uu)), fu, su, Nu, Zu, bu)), lu = this._accessors.length - 1, Uu.setVertexAccessor(uu, ju, su, lu)
        }
        Zu.attributes[function(uu) {
          switch (uu) {
            case Cu.e.PositionKind:
              return "POSITION";
            case Cu.e.NormalKind:
              return "NORMAL";
            case Cu.e.TangentKind:
              return "TANGENT";
            case Cu.e.ColorKind:
              return "COLOR_0";
            case Cu.e.UVKind:
              return "TEXCOORD_0";
            case Cu.e.UV2Kind:
              return "TEXCOORD_1";
            case Cu.e.UV3Kind:
              return "TEXCOORD_2";
            case Cu.e.UV4Kind:
              return "TEXCOORD_3";
            case Cu.e.UV5Kind:
              return "TEXCOORD_4";
            case Cu.e.UV6Kind:
              return "TEXCOORD_5";
            case Cu.e.MatricesIndicesKind:
              return "JOINTS_0";
            case Cu.e.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case Cu.e.MatricesWeightsKind:
              return "WEIGHTS_0";
            case Cu.e.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${uu}`)
        }(Xu)] = lu
      }
      async _exportMaterialAsync(uu, Eu, ju, su) {
        let Uu = this._materialMap.get(uu);
        if (void 0 === Uu) {
          const su = Eu && Object.keys(Eu).some((uu => uu.startsWith("uv")));
          if ((uu = uu instanceof Zs.b ? uu.M6[ju.materialIndex] : uu) instanceof pE) Uu = await this._materialExporter.exportPBRMaterialAsync(uu, su);
          else if (uu instanceof Xs.StandardMaterial) Uu = await this._materialExporter.exportStandardMaterialAsync(uu, su);
          else {
            if (!(uu instanceof zE)) return void Pu.b.Warn(`Unsupported material '${uu.name}' with type ${uu.getClassName()}`);
            Uu = await this._materialExporter.exportOpenPBRMaterialAsync(uu, su)
          }
          this._materialMap.set(uu, Uu)
        }
        su.material = Uu
      }
      async _exportMeshAsync(uu, Eu) {
        let ju = Eu.getMesh(uu);
        if (void 0 !== ju) return ju;
        const su = {
          primitives: []
        };
        ju = this._meshes.length, this._meshes.push(su), Eu.setMesh(uu, ju);
        const Uu = uu.isUnIndexed ? null : uu.Ysu(),
          Xu = uu.geometry?.getVertexBuffers(),
          lu = Eu.getMorphTargetsFromMesh(uu),
          qu = uu instanceof Os.e,
          fu = uu instanceof Vs,
          Cu = uu.iG;
        if (Xu && Cu && Cu.length > 0)
          for (const bu of Cu) {
            const ju = {
                attributes: {}
              },
              Cu = bu.oO() || this._babylonScene.defaultMaterial;
            if (fu) {
              const Eu = {
                  name: Cu.name
                },
                su = uu,
                Uu = hu.Color3.White(),
                Zu = su.material?.alpha ?? 1,
                Xu = su.greasedLineMaterial?.color ?? Uu;
              (!Xu.equalsWithEpsilon(Uu, Kj.c) || Zu < 1) && (Eu.pbrMetallicRoughness = {
                baseColorFactor: [...Xu.Osu(), Zu]
              }), this._materials.push(Eu), ju.material = this._materials.length - 1
            } else if (qu) {
              const Eu = {
                  name: Cu.name
                },
                su = uu;
              (!su.color.equalsWithEpsilon(hu.Color3.White(), Kj.c) || su.alpha < 1) && (Eu.pbrMetallicRoughness = {
                baseColorFactor: [...su.color.Osu(), su.alpha]
              }), this._materials.push(Eu), ju.material = this._materials.length - 1
            } else await this._exportMaterialAsync(Cu, Xu, bu, ju);
            const cu = qu || fu ? Zu.b.LineListDrawMode : uu.overrideRenderingFillMode ?? Cu.fillMode;
            let Nu = Cu._getEffectiveOrientation(uu);
            Eu.wasAddedByNoopNode && !uu.hV().useRightHandedSystem && (Nu = Nu === Zu.b.ClockWiseSideOrientation ? Zu.b.CounterClockWiseSideOrientation : Zu.b.ClockWiseSideOrientation), this._exportIndices(Uu, Uu ? (0, mj.b)(Uu, bu.indexCount, bu.indexStart, bu.verticesStart) : bu.verticesCount > 65535, Uu ? bu.indexStart : bu.verticesStart, Uu ? bu.indexCount : bu.verticesCount, -bu.verticesStart, cu, Nu, Eu, ju);
            for (const uu of Object.values(Xu)) this._exportVertexBuffer(uu, Cu, bu.verticesStart, bu.verticesCount, Eu, ju);
            if (lu) {
              ju.targets = [];
              for (const uu of lu) ju.targets.push(uu.attributes)
            }
            su.primitives.push(ju), this._extensionsPostExportMeshPrimitive(ju)
          }
        if (lu) {
          su.weights = [], su.extras || (su.extras = {}), su.extras.targetNames = [];
          for (const uu of lu) su.weights.push(uu.influence), su.extras.targetNames.push(uu.name)
        }
        return ju
      }
    }
    Qs._ExtensionNames = new Array, Qs._ExtensionFactories = {}, Qs._ExtensionOrders = {};
    class is {
      static async GLTFAsync(uu, Eu, ju) {
        ju && ju.exportWithoutWaitingForScene || await uu.whenReadyAsync();
        const su = new Qs(uu, ju),
          Uu = await su.generateGLTFAsync(Eu.replace(/\.[^/.]+$/, ""));
        return su.dispose(), Uu
      }
      static async GLBAsync(uu, Eu, ju) {
        ju && ju.exportWithoutWaitingForScene || await uu.whenReadyAsync();
        const su = new Qs(uu, ju),
          Uu = await su.generateGLBAsync(Eu.replace(/\.[^/.]+$/, ""));
        return su.dispose(), Uu
      }
    }
    const Ws = "EXT_mesh_gpu_instancing";

    function Ss(uu, Eu) {
      const ju = new Float32Array(3 * Eu);
      for (let su = 0; su < Eu; su++) ju[3 * su + 0] = uu[4 * su + 0], ju[3 * su + 1] = uu[4 * su + 1], ju[3 * su + 2] = uu[4 * su + 2];
      return ju
    }
    class Is {
      constructor(uu) {
        this.name = Ws, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(uu, Eu, ju, su, Uu, Zu) {
        return await new Promise((uu => {
          if (Eu && ju instanceof ws.e && ju.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const uu = Wu.t.Zero(),
              su = Wu.i.Identity(),
              Xu = Wu.t.One(),
              lu = ju.thinInstanceGetWorldMatrices(),
              qu = Wu.m.dO[2],
              fu = Wu.m.Quaternion[1],
              Cu = Wu.m.dO[3];
            let bu = !1,
              cu = !1,
              Nu = !1;
            const Ou = new Float32Array(3 * ju.F_),
              Yu = new Float32Array(4 * ju.F_),
              hu = new Float32Array(3 * ju.F_);
            let Du = 0;
            for (const Eu of lu) Eu.decompose(Cu, fu, qu), Uu && (tj(qu), xj(fu)), Ou.set(qu.Osu(), 3 * Du), Yu.set(fu.normalize().Osu(), 4 * Du), hu.set(Cu.Osu(), 3 * Du), bu = bu || !qu.equalsWithEpsilon(uu), cu = cu || !fu.equalsWithEpsilon(su), Nu = Nu || !Cu.equalsWithEpsilon(Xu), Du++;
            const gu = {
              attributes: {}
            };
            bu && (gu.attributes.TRANSLATION = this._buildAccessor(Ou, "VEC3", ju.F_, Zu)), cu && (gu.attributes.ROTATION = this._buildAccessor(Yu, "VEC4", ju.F_, Zu)), Nu && (gu.attributes.SCALE = this._buildAccessor(hu, "VEC3", ju.F_, Zu));
            let Mu = ju._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (Mu) {
              const uu = ju.F_,
                Eu = "VEC3";
              ju.hasVertexAlpha && Mu.length === 4 * uu ? (this._instanceColorWarned || (Pu.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), Mu = Ss(Mu, uu)) : Mu.length === 4 * uu && (Mu = Ss(Mu, uu)), Mu.length === 3 * uu && (gu.attributes._COLOR_0 = this._buildAccessor(Mu, Eu, uu, Zu))
            }
            Eu.extensions = Eu.extensions || {}, Eu.extensions[Ws] = gu
          }
          uu(Eu)
        }))
      }
      _buildAccessor(uu, Eu, ju, su) {
        const Uu = su.createBufferView(uu),
          Zu = su.createAccessor(Uu, Eu, 5126, ju);
        return this._exporter._accessors.push(Zu), this._exporter._accessors.length - 1
      }
    }
    let Fs = !1;

    function Bs() {
      Fs || (Fs = !0, Qs.RegisterExtension(Ws, (uu => new Is(uu))))
    }
    ju(40742);
    Bs();
    var Ls = ju(42129);

    function ts(uu, Eu, ju, su) {
      const Uu = uu;
      let Zu = null,
        Xu = null,
        lu = null,
        qu = null;
      const fu = {},
        Cu = Eu.find((uu => "POSITION" === uu.dracoName));
      if (!Cu) throw new Error("Draco: Missing position attribute for encoding.");
      if (!ju) {
        const uu = Cu.data.length / Cu.size;
        ju = new(uu > 65535 ? Uint32Array : Uint16Array)(uu);
        for (let Eu = 0; Eu < uu; Eu++) ju[Eu] = Eu
      }
      try {
        Zu = new Uu.Encoder, Xu = new Uu.MeshBuilder, lu = new Uu.Mesh, Xu.AddFacesToMesh(lu, ju.length / 3, ju);
        const uu = new Map([
          [Float32Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddFloatAttribute(Eu, ju, su, Uu, Zu)],
          [Uint32Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddUInt32Attribute(Eu, ju, su, Uu, Zu)],
          [Uint16Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddUInt16Attribute(Eu, ju, su, Uu, Zu)],
          [Uint8Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddUInt8Attribute(Eu, ju, su, Uu, Zu)],
          [Int32Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddInt32Attribute(Eu, ju, su, Uu, Zu)],
          [Int16Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddInt16Attribute(Eu, ju, su, Uu, Zu)],
          [Int8Array, (uu, Eu, ju, su, Uu, Zu) => uu.AddInt8Attribute(Eu, ju, su, Uu, Zu)]
        ]);
        for (const ju of Eu) {
          ju.data instanceof Uint8ClampedArray && (ju.data = new Uint8Array(ju.data));
          const Eu = uu.get(ju.data.constructor),
            qu = ju.data.length / ju.size;
          fu[ju.kind] = Eu(Xu, lu, Uu[ju.dracoName], qu, ju.size, ju.data), su.quantizationBits && su.quantizationBits[ju.dracoName] && Zu.SetAttributeQuantization(Uu[ju.dracoName], su.quantizationBits[ju.dracoName])
        }
        su.method && Zu.SetEncodingMethod(Uu[su.method]), void 0 !== su.encodeSpeed && void 0 !== su.decodeSpeed && Zu.SetSpeedOptions(su.encodeSpeed, su.decodeSpeed), qu = new Uu.DracoInt8Array;
        const Cu = Zu.EncodeMeshToDracoBuffer(lu, qu);
        if (Cu <= 0) throw new Error("Draco: Failed to encode.");
        const bu = new Int8Array(Cu);
        for (let Eu = 0; Eu < Cu; Eu++) bu[Eu] = qu.GetValue(Eu);
        return {
          data: bu,
          attributeIds: fu
        }
      } finally {
        lu && Uu.destroy(lu), Xu && Uu.destroy(Xu), Zu && Uu.destroy(Zu), qu && Uu.destroy(qu)
      }
    }

    function xs() {
      let uu;
      onmessage = Eu => {
        const ju = Eu.data;
        switch (ju.id) {
          case "init": {
            ju.url && importScripts(ju.url);
            const Eu = ju.wasmBinary ? {
              wasmBinary: ju.wasmBinary
            } : {};
            uu = DracoEncoderModule(Eu), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!uu) throw new Error("Draco: Encoder module is not available.");
            uu.then((uu => {
              const Eu = ts(uu, ju.attributes, ju.indices, ju.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: Eu
              }, Eu ? [Eu.data.buffer] : void 0)
            })).catch((uu => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: uu.message
              })
            }))
        }
      }
    }
    class Ts {
      constructor(uu) {
        if (uu.workerPool) return void(this._workerPoolPromise = Promise.resolve(uu.workerPool));
        const Eu = uu.wasmBinary,
          ju = uu.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          su = ju && "function" === typeof Worker && "function" === typeof URL,
          Uu = su || !uu.jsModule,
          Zu = uu.wasmUrl && uu.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: Uu ? JE.h.GetBabylonScriptURL(uu.wasmUrl, !0) : "",
            wasmBinaryPromise: Eu ? Promise.resolve(Eu) : JE.h.LoadFileAsync(JE.h.GetBabylonScriptURL(uu.wasmBinaryUrl, !0))
          } : {
            url: Uu ? JE.h.GetBabylonScriptURL(uu.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        su ? this._workerPoolPromise = Zu.wasmBinaryPromise.then((uu => {
          const Eu = this._getWorkerContent(),
            su = URL.createObjectURL(new Blob([Eu], {
              type: "application/javascript"
            }));
          return new Ls.b(ju, (() => async function(uu, Eu, ju) {
            return await new Promise(((su, Uu) => {
              const Zu = Eu => {
                  uu.removeEventListener("error", Zu), uu.removeEventListener("message", Xu), Uu(Eu)
                },
                Xu = Eu => {
                  "initDone" === Eu.data.id && (uu.removeEventListener("error", Zu), uu.removeEventListener("message", Xu), su(uu))
                };
              if (uu.addEventListener("error", Zu), uu.addEventListener("message", Xu), Eu) {
                const su = Eu.slice(0);
                uu.postMessage({
                  id: "init",
                  url: ju,
                  wasmBinary: su
                }, [su])
              } else uu.postMessage({
                id: "init",
                url: ju
              })
            }))
          }(new Worker(su), uu, Zu.url)))
        })) : this._modulePromise = Zu.wasmBinaryPromise.then((async Eu => {
          if (!this._isModuleAvailable() && !uu.jsModule) {
            if (!Zu.url) throw new Error("Draco codec module is not available");
            await JE.h.LoadBabylonScriptAsync(Zu.url)
          }
          return await this._createModuleAsync(Eu, uu.jsModule)
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

    function Hs() {
      const uu = uu => !!uu && "object" === typeof uu;
      for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
      return ju.reduce(((Eu, ju) => {
        const su = Object.keys(ju);
        for (const Uu of su) {
          const su = Eu[Uu],
            Zu = ju[Uu];
          Array.isArray(su) && Array.isArray(Zu) ? Eu[Uu] = su.concat(Zu) : uu(su) && uu(Zu) ? Eu[Uu] = Hs(su, Zu) : Eu[Uu] = Zu
        }
        return Eu
      }), {})
    }

    function As(uu) {
      return uu === Su.j.PositionKind ? "POSITION" : uu === Su.j.NormalKind ? "NORMAL" : uu === Su.j.ColorKind ? "COLOR" : uu.startsWith(Su.j.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const ns = {
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
    class ys extends Ts {
      static get DefaultAvailable() {
        return !!((uu = ys.DefaultConfiguration).wasmUrl && (uu.wasmBinary || uu.wasmBinaryUrl) && "object" === typeof WebAssembly || uu.fallbackUrl);
        var uu
      }
      static get Default() {
        return ys._Default ?? (ys._Default = new ys), ys._Default
      }
      static ResetDefault(uu) {
        ys._Default && (uu || ys._Default.dispose(), ys._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(uu, Eu) {
        return {
          module: await (Eu || DracoEncoderModule)({
            wasmBinary: uu
          })
        }
      }
      _getWorkerContent() {
        return `${ts}(${xs})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ys.DefaultConfiguration)
      }
      async _encodeAsync(uu, Eu, ju) {
        const su = ju ? Hs(ns, ju) : ns;
        if (this._workerPoolPromise) {
          const ju = await this._workerPoolPromise;
          return await new Promise(((Uu, Zu) => {
            ju.push(((ju, Xu) => {
              const lu = uu => {
                  ju.removeEventListener("error", lu), ju.removeEventListener("message", qu), Zu(uu), Xu()
                },
                qu = uu => {
                  "encodeMeshSuccess" === uu.data.id ? (ju.removeEventListener("error", lu), ju.removeEventListener("message", qu), Uu(uu.data.encodedMeshData), Xu()) : "encodeMeshError" === uu.data.id && (ju.removeEventListener("error", lu), ju.removeEventListener("message", qu), Zu(new Error(uu.data.errorMessage)), Xu())
                };
              ju.addEventListener("error", lu), ju.addEventListener("message", qu);
              const fu = [];
              for (const Eu of uu) fu.push(Eu.data.buffer);
              Eu && fu.push(Eu.buffer), ju.postMessage({
                id: "encodeMesh",
                attributes: uu,
                indices: Eu,
                options: su
              }, fu)
            }))
          }))
        }
        if (this._modulePromise) {
          return ts((await this._modulePromise).module, uu, Eu, su)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(uu, Eu) {
        if (0 == uu.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        uu instanceof ws.e && uu.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === Eu?.method && (Pu.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), Eu.method = "MESH_SEQUENTIAL_ENCODING");
        const ju = function(uu) {
            let Eu = uu.Ysu(void 0, !0);
            return !Eu || Eu instanceof Uint32Array || Eu instanceof Uint16Array || (Eu = ((0, mj.b)(Eu, Eu.length) ? Uint32Array : Uint16Array).from(Eu)), Eu
          }(uu),
          su = function(uu, Eu) {
            const ju = [];
            for (const su of uu.getVerticesDataKinds()) {
              if (Eu?.includes(su)) {
                if (su === Su.j.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const Uu = uu.getVertexBuffer(su),
                Zu = Uu.getSize(),
                Xu = (0, mj.s)(Uu.getData(), Zu, Uu.type, Uu.byteOffset, Uu.byteStride, uu.getTotalVertices(), !0);
              ju.push({
                kind: su,
                dracoName: As(su),
                size: Zu,
                data: Xu
              })
            }
            return ju
          }(uu, Eu?.excludedAttributes);
        return await this._encodeAsync(su, ju, Eu)
      }
    }
    ys.DefaultConfiguration = {
      wasmUrl: `${JE.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${JE.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${JE.h._DefaultCdnUrl}/draco_encoder.js`
    }, ys._Default = null;
    const zs = "KHR_draco_mesh_compression";
    class Rs {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = zs, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === uu.options.meshCompressionMethod && ys.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(uu, Eu, ju) {
        if (!this.enabled) return;
        if (4 !== uu.mode && 5 !== uu.mode) return void Pu.b.Warn("Cannot compress primitive with mode " + uu.mode + ".");
        const su = [],
          Uu = [];
        let Zu = null;
        if (void 0 !== uu.indices) {
          const Xu = ju[uu.indices],
            lu = Eu.getBufferView(Xu);
          Zu = Eu.getData(lu).slice(), su.push(lu), Uu.push(Xu)
        }
        const Xu = [];
        for (const [Cu, bu] of Object.entries(uu.attributes)) {
          const uu = ju[bu],
            Zu = Eu.getBufferView(uu),
            qu = Fj(uu.type),
            fu = (0, mj.s)(Eu.getData(Zu), qu, uu.componentType, uu.byteOffset || 0, Zu.byteStride || (0, mj.q)(uu.componentType) * qu, uu.count, !0);
          Xu.push({
            kind: Cu,
            dracoName: (lu = Cu, "POSITION" === lu ? "POSITION" : "NORMAL" === lu ? "NORMAL" : lu.startsWith("COLOR") ? "COLOR" : lu.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Fj(uu.type),
            data: fu
          }), su.push(Zu), Uu.push(uu)
        }
        var lu;
        const qu = {
            method: uu.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          fu = ys.Default._encodeAsync(Xu, Zu, qu).then((ju => {
            const Zu = {
                bufferView: -1,
                attributes: ju.attributeIds
              },
              Xu = Eu.createBufferView(ju.data);
            Eu.setBufferView(Zu, Xu);
            for (const uu of su) this._bufferViewsUsed.add(uu);
            for (const uu of Uu) this._accessorsUsed.add(uu);
            uu.extensions || (uu.extensions = {}), uu.extensions[zs] = Zu
          })).catch((uu => {
            Pu.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + uu.message)
          }));
        this._encodePromises.push(fu), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(uu) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((Eu => {
          uu.getPropertiesWithBufferView(Eu).every((uu => this._accessorsUsed.has(uu))) && uu.removeBufferView(Eu)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let uU = !1;

    function EU() {
      uU || (uU = !0, Qs.RegisterExtension(zs, (uu => new Rs(uu))))
    }
    EU();
    var jU = ju(41829);
    const sU = "KHR_lights_punctual",
      UU = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      ZU = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      XU = Wu.t.Backward();
    class lU {
      constructor(uu) {
        this.name = sU, this.enabled = !0, this.required = !1, this._exporter = uu
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[sU] = this._lights
      }
      async postExportNodeAsync(uu, Eu, ju, su, Uu) {
        return await new Promise((Zu => {
          if (!(ju instanceof bs.e)) return void Zu(Eu);
          const Xu = ju.getTypeID() == bs.e.LIGHTTYPEID_POINTLIGHT ? "point" : ju.getTypeID() == bs.e.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : ju.getTypeID() == bs.e.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!Xu || !(ju instanceof jU.b)) return Pu.b.Warn(`${uu}: Light ${ju.name} is not supported in ${sU}`), void Zu(Eu);
          if (ju.falloffType !== bs.e.FALLOFF_GLTF && Pu.b.Warn(`${uu}: Light falloff for ${ju.name} does not match the ${sU} specification!`), !ju.position.BXu(0, 0, 0)) {
            const uu = Wu.m.dO[0].yJ(ju.position);
            Uu && tj(uu), Eu.translation = uu.Osu()
          }
          if ("point" !== Xu) {
            const uu = ju.direction.normalizeToRef(Wu.m.dO[0]);
            Uu && tj(uu);
            const su = Wu.i.FromUnitVectorsToRef(XU, uu, Wu.m.Quaternion[0]);
            Wu.i.IsIdentity(su) || (Eu.rotation = su.Osu())
          }
          const lu = {
            type: Xu,
            name: ju.name,
            color: ju.diffuse.Osu(),
            intensity: ju.intensity,
            range: ju.range
          };
          if (yj(lu, UU), "spot" === Xu) {
            const uu = ju;
            lu.spot = {
              innerConeAngle: uu.innerAngle / 2,
              outerConeAngle: uu.angle / 2
            }, yj(lu.spot, ZU)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(lu);
          const qu = {
              light: this._lights.lights.length - 1
            },
            fu = ju.parent;
          if (fu && Aj(ju, fu)) {
            const uu = su.get(fu);
            if (uu) {
              const ju = this._exporter._nodes[uu];
              return Hj(Eu, ju), ju.extensions || (ju.extensions = {}), ju.extensions[sU] = qu, void Zu(null)
            }
          }
          Eu.extensions || (Eu.extensions = {}), Eu.extensions[sU] = qu, Zu(Eu)
        }))
      }
    }
    let qU = !1;

    function fU() {
      qU || (qU = !0, Qs.RegisterExtension(sU, (uu => new lU(uu))))
    }
    fU();
    const CU = "KHR_interactivity";
    class bU {
      constructor(uu) {
        this._exporter = uu, this.name = CU, this.enabled = !!uu.options.khrInteractivity, this.required = uu.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var uu, Eu, ju;
        const su = this._exporter.options.khrInteractivity;
        if (!su) return;
        const Uu = su.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: uu => this._exporter._getNodeIndex(uu),
          getAnimationIndex: uu => this._exporter._getAnimationIndex(uu),
          getCameraIndex: uu => this._exporter._getCameraIndex(uu),
          getMaterialIndex: uu => this._exporter._getMaterialIndex(uu),
          getRootIndex: (uu, Eu) => this._exporter._getRootIndex(uu, Eu),
          setNodeExtension: (uu, Eu, ju) => this._exporter._setNodeExtension(uu, Eu, ju)
        });
        this._exporter._glTF.extensions[CU] = Uu;
        for (const Zu of su.additionalExtensionsUsed)(uu = this._exporter._glTF).extensionsUsed || (uu.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Zu) && this._exporter._glTF.extensionsUsed.push(Zu);
        for (const Zu of su.additionalExtensionsRequired)(Eu = this._exporter._glTF).extensionsUsed || (Eu.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(Zu) && this._exporter._glTF.extensionsUsed.push(Zu), (ju = this._exporter._glTF).extensionsRequired || (ju.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(Zu) && this._exporter._glTF.extensionsRequired.push(Zu)
      }
    }
    let cU = !1;

    function NU() {
      cU || (cU = !0, Qs.RegisterExtension(CU, (uu => new bU(uu)), 200))
    }
    NU();
    const OU = "EXT_lights_area",
      YU = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      hU = {
        aspect: 1
      },
      DU = Wu.t.Backward();
    class gU {
      constructor(uu) {
        this.name = OU, this.enabled = !0, this.required = !1, this._exporter = uu
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[OU] = this._lights
      }
      async postExportNodeAsync(uu, Eu, ju, su, Uu) {
        return await new Promise((Zu => {
          if (!(ju instanceof bs.e)) return void Zu(Eu);
          const Xu = ju.getTypeID() == bs.e.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!Xu) return Pu.b.Warn(`${uu}: Light ${ju.name} is not supported in ${OU}`), void Zu(Eu);
          const lu = ju;
          if (lu.falloffType !== bs.e.FALLOFF_GLTF && Pu.b.Warn(`${uu}: Light falloff for ${ju.name} does not match the ${OU} specification!`), !lu.position.BXu(0, 0, 0)) {
            const uu = Wu.m.dO[0].yJ(lu.position);
            Uu && tj(uu), Eu.translation = uu.Osu()
          }
          const qu = Wu.t.Forward();
          Uu && tj(qu);
          const fu = Wu.i.FromUnitVectorsToRef(DU, qu, Wu.m.Quaternion[0]);
          Wu.i.IsIdentity(fu) || (Eu.rotation = fu.Osu());
          const Cu = {
            type: Xu,
            name: lu.name,
            color: lu.diffuse.Osu(),
            intensity: lu.intensity,
            size: lu.height,
            rect: {
              aspect: lu.width / lu.height
            }
          };
          yj(Cu, YU), Cu.rect && yj(Cu.rect, hU), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(Cu);
          const bu = {
              light: this._lights.lights.length - 1
            },
            cu = ju.parent;
          if (cu && Aj(lu, cu)) {
            const uu = su.get(cu);
            if (uu) {
              const ju = this._exporter._nodes[uu];
              return Hj(Eu, ju), ju.extensions || (ju.extensions = {}), ju.extensions[OU] = bu, void Zu(null)
            }
          }
          Eu.extensions || (Eu.extensions = {}), Eu.extensions[OU] = bu, Zu(Eu)
        }))
      }
    }
    let MU = !1;

    function eU() {
      MU || (MU = !0, Qs.RegisterExtension(OU, (uu => new gU(uu))))
    }
    eU();
    const GU = "KHR_materials_anisotropy";
    class pU {
      constructor(uu) {
        this.name = GU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof pE) {
          if (ju.anisotropy.isEnabled && !ju.anisotropy.legacy) return ju.anisotropy.texture && su.push(ju.anisotropy.texture), su
        } else if (ju instanceof zE && ju.specularRoughnessAnisotropy > 0) {
          const uu = function(uu) {
            const Eu = uu.specularRoughnessAnisotropyTexture,
              ju = uu.geometryTangentTexture;
            return `${Eu&&Eu.getInternalTexture()?Eu.getInternalTexture().uniqueId:"NoStrength"}_${ju&&ju.getInternalTexture()?ju.getInternalTexture().uniqueId:"NoTangent"}`
          }(ju);
          if (this._anisoTexturesMap[uu]) su.push(this._anisoTexturesMap[uu]);
          else {
            const Eu = await async function(uu) {
              const Eu = uu.hV(),
                ju = uu.specularRoughnessAnisotropyTexture,
                su = uu.geometryTangentTexture;
              return ju || su ? await Xj("AnisotropyTexture", fj(su ? lj(su, 0) : qj(1), su ? lj(su, 1) : qj(0), ju ? lj(ju, 0) : qj(1)), Eu) : null
            }(ju);
            Eu && (su.push(Eu), this._anisoTexturesMap[uu] = Eu)
          }
          return su
        }
        return []
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          var su;
          if (ju instanceof pE) {
            if (!ju.anisotropy.isEnabled || ju.anisotropy.legacy) return void uu(Eu);
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            const su = this._exporter._materialExporter.getTextureInfo(ju.anisotropy.texture),
              Uu = {
                anisotropyStrength: ju.anisotropy.intensity,
                anisotropyRotation: ju.anisotropy.angle,
                anisotropyTexture: su ?? void 0
              };
            null !== Uu.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[GU] = Uu
          } else if (ju instanceof zE && ju.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            let Uu = ju.specularRoughnessTexture;
            ju._useRoughnessFromMetallicTextureGreen && (Uu = ju.baseMetalnessTexture);
            const Zu = this._anisoTexturesMap[ju.id];
            if (!Uu && !Zu) {
              let su = ju.specularRoughness,
                Uu = ju.specularRoughnessAnisotropy;
              if (!ju._useGltfStyleAnisotropy) {
                const uu = function(uu, Eu) {
                  const ju = uu * uu,
                    su = ju * Math.sqrt(2 / (1 + (1 - Eu) * (1 - Eu))),
                    Uu = (1 - Eu) * su;
                  return {
                    newBaseRoughness: Math.sqrt(Uu),
                    newAnisotropyStrength: Math.min(Math.sqrt((su - ju) / Math.max(1 - ju, 1e-4)), 1)
                  }
                }(ju.specularRoughness, ju.specularRoughnessAnisotropy);
                su = uu.newBaseRoughness, Uu = uu.newAnisotropyStrength
              }
              Eu.pbrMetallicRoughness && (Eu.pbrMetallicRoughness.roughnessFactor = su);
              const Zu = {
                anisotropyStrength: Uu,
                anisotropyRotation: ju.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return Eu.extensions[GU] = Zu, uu(Eu)
            }
            const Xu = Zu ? this._exporter._materialExporter.getTextureInfo(Zu) : null,
              lu = {
                anisotropyStrength: ju.specularRoughnessAnisotropy,
                anisotropyRotation: ju.geometryTangentAngle,
                anisotropyTexture: Xu || void 0,
                extensions: {}
              };
            ju._useGltfStyleAnisotropy || (Eu.extensions.KHR_materials_openpbr = {}, (su = this._exporter._glTF).extensionsUsed || (su.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[GU] = lu
          }
          uu(Eu)
        }))
      }
    }
    let wU = !1;

    function JU() {
      wU || (wU = !0, Qs.RegisterExtension(GU, (uu => new pU(uu))))
    }
    JU();
    const dU = "KHR_materials_clearcoat";

    function aU(uu, Eu) {
      const ju = new ku.g(Eu.name, Eu.hV());
      return ju._texture = uu, ju.coordinatesIndex = Eu.coordinatesIndex, Eu instanceof ku.g && (ju.uOffset = Eu.uOffset, ju.vOffset = Eu.vOffset, ju.uScale = Eu.uScale, ju.vScale = Eu.vScale, ju.wAng = Eu.wAng), ju.wrapU = Eu.wrapU, ju.wrapV = Eu.wrapV, ju
    }
    class PU {
      constructor(uu) {
        this.name = dU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = uu
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
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof pE) {
          if (ju.clearCoat.isEnabled) return ju.clearCoat.texture && su.push(ju.clearCoat.texture), !ju.clearCoat.useRoughnessFromMainTexture && ju.clearCoat.textureRoughness && su.push(ju.clearCoat.textureRoughness), ju.clearCoat.bumpTexture && su.push(ju.clearCoat.bumpTexture), su
        } else if (ju instanceof zE && ju.coatWeight > 0) {
          let uu = !1;
          if (ju.coatWeightTexture ? ju.coatRoughnessTexture ? ju._useCoatRoughnessFromGreenChannel && ju.coatWeightTexture.getInternalTexture() === ju.coatRoughnessTexture.getInternalTexture() ? (su.push(ju.coatWeightTexture), su.push(ju.coatRoughnessTexture)) : uu = !0 : su.push(ju.coatWeightTexture) : ju.coatRoughnessTexture && (ju._useCoatRoughnessFromGreenChannel ? su.push(ju.coatRoughnessTexture) : uu = !0), uu) {
            const uu = function(uu) {
              const Eu = uu.coatWeightTexture,
                ju = Eu && Eu.getInternalTexture() ? Eu.getInternalTexture().uniqueId : "NoCoat",
                su = uu.coatRoughnessTexture;
              return `${ju}_${su&&su.getInternalTexture()?su.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ju);
            if (!this._cachedInternalTexturesMap[uu]) {
              const Eu = await async function(uu) {
                const Eu = uu.hV(),
                  ju = uu.coatWeightTexture,
                  su = uu.coatRoughnessTexture;
                return ju || su ? (await Xj("CoatTexture", fj(ju ? lj(ju, 0) : qj(1), su ? lj(su, uu._useCoatRoughnessFromGreenChannel ? 1 : 0) : qj(1)), Eu)).getInternalTexture() : null
              }(ju);
              Eu && (this._cachedInternalTexturesMap[uu] = Eu)
            }
            this._cachedInternalTexturesMap[uu] && (ju.coatWeightTexture && (this._mergedTexturesMap[ju.coatWeightTexture.uniqueId] = aU(this._cachedInternalTexturesMap[uu], ju.coatWeightTexture), su.push(this._mergedTexturesMap[ju.coatWeightTexture.uniqueId])), ju.coatRoughnessTexture && (this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId] = aU(this._cachedInternalTexturesMap[uu], ju.coatRoughnessTexture), su.push(this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId])))
          }
          return ju.geometryCoatNormalTexture && su.push(ju.geometryCoatNormalTexture), su
        }
        return []
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          if (ju instanceof pE) {
            if (!ju.clearCoat.isEnabled) return void uu(Eu);
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            const su = this._exporter._materialExporter.getTextureInfo(ju.clearCoat.texture);
            let Uu;
            Uu = ju.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ju.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ju.clearCoat.textureRoughness), ju.clearCoat.isTintEnabled && JE.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ju.name}`), ju.clearCoat.remapF0OnInterfaceChange && JE.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${ju.name}`);
            const Zu = this._exporter._materialExporter.getTextureInfo(ju.clearCoat.bumpTexture),
              Xu = {
                clearcoatFactor: ju.clearCoat.intensity,
                clearcoatTexture: su ?? void 0,
                clearcoatRoughnessFactor: ju.clearCoat.roughness,
                clearcoatRoughnessTexture: Uu ?? void 0,
                clearcoatNormalTexture: Zu ?? void 0
              };
            null === Xu.clearcoatTexture && null === Xu.clearcoatRoughnessTexture && null === Xu.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[dU] = Xu
          } else if (ju instanceof zE) {
            if (0 == ju.coatWeight) return void uu(Eu);
            let su, Uu, Zu, Xu;
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {}, ju.coatWeightTexture && (su = this._mergedTexturesMap[ju.coatWeightTexture.uniqueId], Uu = this._exporter._materialExporter.getTextureInfo(su)), ju.coatRoughnessTexture && (Zu = this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId], Xu = this._exporter._materialExporter.getTextureInfo(Zu)), ju.coatColorTexture && JE.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${ju.name}`);
            const lu = this._exporter._materialExporter.getTextureInfo(ju.geometryCoatNormalTexture),
              qu = {
                clearcoatFactor: ju.coatWeight,
                clearcoatTexture: Uu ?? void 0,
                clearcoatRoughnessFactor: ju.coatRoughness,
                clearcoatRoughnessTexture: Xu ?? void 0,
                clearcoatNormalTexture: lu ?? void 0
              };
            null === qu.clearcoatTexture && null === qu.clearcoatRoughnessTexture && null === qu.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[dU] = qu
          }
          uu(Eu)
        }))
      }
    }
    let oU = !1;

    function kU() {
      oU || (oU = !0, Qs.RegisterExtension(dU, (uu => new PU(uu))))
    }
    kU();
    const mU = "KHR_materials_coat";

    function vU(uu) {
      const Eu = uu.coatRoughnessAnisotropyTexture,
        ju = uu.geometryCoatTangentTexture;
      return `${Eu&&Eu.getInternalTexture()?Eu.getInternalTexture().uniqueId:"NoStrength"}_${ju&&ju.getInternalTexture()?ju.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function KU(uu, Eu) {
      const ju = new ku.g(Eu.name, Eu.hV());
      return ju._texture = uu, ju.coordinatesIndex = Eu.coordinatesIndex, Eu instanceof ku.g && (ju.uOffset = Eu.uOffset, ju.vOffset = Eu.vOffset, ju.uScale = Eu.uScale, ju.vScale = Eu.vScale, ju.wAng = Eu.wAng), ju.wrapU = Eu.wrapU, ju.wrapV = Eu.wrapV, ju
    }
    class VU {
      constructor(uu) {
        this.name = mU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = uu
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
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof pE) {
          if (ju.clearCoat.isEnabled) return ju.clearCoat.texture && su.push(ju.clearCoat.texture), !ju.clearCoat.useRoughnessFromMainTexture && ju.clearCoat.textureRoughness && su.push(ju.clearCoat.textureRoughness), ju.clearCoat.bumpTexture && su.push(ju.clearCoat.bumpTexture), ju.clearCoat.tintTexture && su.push(ju.clearCoat.tintTexture), su
        } else if (ju instanceof zE && ju.coatWeight > 0) {
          let uu = !1;
          if (ju.coatWeightTexture ? ju.coatRoughnessTexture ? ju._useCoatRoughnessFromGreenChannel && ju.coatWeightTexture.getInternalTexture() === ju.coatRoughnessTexture.getInternalTexture() ? (su.push(ju.coatWeightTexture), su.push(ju.coatRoughnessTexture)) : uu = !0 : su.push(ju.coatWeightTexture) : ju.coatRoughnessTexture && (ju._useCoatRoughnessFromGreenChannel ? su.push(ju.coatRoughnessTexture) : uu = !0), uu) {
            const uu = function(uu) {
              const Eu = uu.coatWeightTexture,
                ju = Eu && Eu.getInternalTexture() ? Eu.getInternalTexture().uniqueId : "NoCoat",
                su = uu.coatRoughnessTexture;
              return `${ju}_${su&&su.getInternalTexture()?su.getInternalTexture().uniqueId:"NoRoughness"}`
            }(ju);
            if (!this._cachedInternalTexturesMap[uu]) {
              const Eu = await async function(uu) {
                const Eu = uu.hV(),
                  ju = uu.coatWeightTexture,
                  su = uu.coatRoughnessTexture;
                return ju || su ? (await Xj("CoatTexture", fj(ju ? lj(ju, 0) : qj(1), su ? lj(su, uu._useCoatRoughnessFromGreenChannel ? 1 : 0) : qj(1)), Eu)).getInternalTexture() : null
              }(ju);
              Eu && (this._cachedInternalTexturesMap[uu] = Eu)
            }
            this._cachedInternalTexturesMap[uu] && (ju.coatWeightTexture && (this._mergedTexturesMap[ju.coatWeightTexture.uniqueId] = KU(this._cachedInternalTexturesMap[uu], ju.coatWeightTexture), su.push(this._mergedTexturesMap[ju.coatWeightTexture.uniqueId])), ju.coatRoughnessTexture && (this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId] = KU(this._cachedInternalTexturesMap[uu], ju.coatRoughnessTexture), su.push(this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId])))
          }
          if (ju.geometryCoatNormalTexture && su.push(ju.geometryCoatNormalTexture), ju.coatColorTexture && su.push(ju.coatColorTexture), ju.coatRoughnessAnisotropy > 0) {
            const uu = vU(ju);
            if (this._mergedTexturesMap[uu]) su.push(this._mergedTexturesMap[uu]);
            else {
              const Eu = await async function(uu) {
                const Eu = uu.hV(),
                  ju = uu.coatRoughnessAnisotropyTexture,
                  su = uu.geometryCoatTangentTexture;
                return ju || su ? await Xj("AnisotropyTexture", fj(su ? lj(su, 0) : qj(1), su ? lj(su, 1) : qj(0), ju ? lj(ju, 0) : qj(1)), Eu) : null
              }(ju);
              Eu && (su.push(Eu), this._mergedTexturesMap[uu] = Eu)
            }
            return su
          }
          return su
        }
        return []
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          var su;
          if (ju instanceof pE) {
            if (!ju.clearCoat.isEnabled) return void uu(Eu);
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            const su = this._exporter._materialExporter.getTextureInfo(ju.clearCoat.texture);
            let Uu, Zu;
            Uu = ju.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(ju.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(ju.clearCoat.textureRoughness), ju.clearCoat.isTintEnabled && (Zu = this._exporter._materialExporter.getTextureInfo(ju.clearCoat.tintTexture));
            const Xu = this._exporter._materialExporter.getTextureInfo(ju.clearCoat.bumpTexture),
              lu = ju.clearCoat.indexOfRefraction,
              qu = {
                coatFactor: ju.clearCoat.intensity,
                coatTexture: su ?? void 0,
                coatRoughnessFactor: ju.clearCoat.roughness,
                coatRoughnessTexture: Uu ?? void 0,
                coatNormalTexture: Xu ?? void 0,
                coatColorFactor: ju.clearCoat.tintColor.Osu(),
                coatColorTexture: Zu ?? void 0,
                coatIor: 1.5 !== lu ? lu : void 0
              };
            null === qu.coatTexture && null === qu.coatRoughnessTexture && null === qu.coatRoughnessTexture && null === qu.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[mU] = qu
          } else if (ju instanceof zE) {
            if (0 == ju.coatWeight) return void uu(Eu);
            let Uu, Zu, Xu, lu;
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {}, ju.coatWeightTexture && (Uu = this._mergedTexturesMap[ju.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[ju.coatWeightTexture.uniqueId] : ju.coatWeightTexture, Zu = this._exporter._materialExporter.getTextureInfo(Uu)), ju.coatRoughnessTexture && (Xu = this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ju.coatRoughnessTexture.uniqueId] : ju.coatRoughnessTexture, lu = this._exporter._materialExporter.getTextureInfo(Xu));
            const qu = this._exporter._materialExporter.getTextureInfo(ju.geometryCoatNormalTexture),
              fu = this._exporter._materialExporter.getTextureInfo(ju.coatColorTexture),
              Cu = ju.coatIor,
              bu = ju.coatDarkening,
              cu = ju.coatRoughnessTexture,
              Nu = vU(ju),
              Ou = this._mergedTexturesMap[Nu];
            let Yu, hu = 0,
              Du = 0;
            if (ju.coatRoughnessAnisotropy > 0) {
              if (cu || Ou) {
                const uu = Ou ? this._exporter._materialExporter.getTextureInfo(Ou) : null;
                hu = ju.coatRoughnessAnisotropy, Du = ju.geometryCoatTangentAngle, Yu = uu || void 0
              } else {
                let uu = ju.coatRoughness,
                  su = ju.coatRoughnessAnisotropy;
                if (!ju._useGltfStyleAnisotropy) {
                  const Eu = function(uu, Eu) {
                    const ju = uu * uu,
                      su = ju * Math.sqrt(2 / (1 + (1 - Eu) * (1 - Eu))),
                      Uu = (1 - Eu) * su;
                    return {
                      newBaseRoughness: Math.sqrt(Uu),
                      newAnisotropyStrength: Math.min(Math.sqrt((su - ju) / Math.max(1 - ju, 1e-4)), 1)
                    }
                  }(ju.coatRoughness, ju.coatRoughnessAnisotropy);
                  uu = Eu.newBaseRoughness, su = Eu.newAnisotropyStrength
                }
                Eu.pbrMetallicRoughness && (Eu.pbrMetallicRoughness.roughnessFactor = uu), hu = su, Du = ju.geometryCoatTangentAngle + .5 * Math.PI, Yu = void 0
              }
              ju._useGltfStyleAnisotropy || (Eu.extensions.KHR_materials_openpbr = {}, (su = this._exporter._glTF).extensionsUsed || (su.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const gu = {
              coatFactor: ju.coatWeight,
              coatTexture: Zu ?? void 0,
              coatRoughnessFactor: ju.coatRoughness,
              coatRoughnessTexture: lu ?? void 0,
              coatNormalTexture: qu ?? void 0,
              coatColorFactor: ju.coatColor.Osu(),
              coatColorTexture: fu ?? void 0,
              coatIor: 1.5 !== Cu ? Cu : void 0,
              coatDarkeningFactor: 1 !== bu ? bu : void 0,
              coatAnisotropyRotation: Du,
              coatAnisotropyStrength: hu,
              coatAnisotropyTexture: Yu
            };
            null === gu.coatTexture && null === gu.coatRoughnessTexture && null === gu.coatRoughnessTexture && null === gu.coatAnisotropyTexture && null === gu.coatColorTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[mU] = gu
          }
          uu(Eu)
        }))
      }
    }
    let rU = !1;

    function QU() {
      rU || (rU = !0, Qs.RegisterExtension(mU, (uu => new VU(uu))))
    }
    QU();
    let iU = (() => {
      var uu, Eu, ju, su, Uu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu, hu, Du, gu, Mu, eu, Gu, pu, wu, Ju, Pu, ou, ku, mu, vu, Ku, ru, Qu, iu, Wu, Su, Iu, Fu, Bu, Lu, tu, Tu, Hu, Au, nu, yu, zu, Ru, uE, EE, jE, sE, UE, ZE, XE, lE, qE, fE, CE, bE, cE, NE, OE, YE, hE, DE, gE, ME;
      let eE, GE, JE, dE, aE, PE, oE, kE, mE, vE, KE, VE, rE, QE, iE, WE, SE, IE, FE, BE, LE, tE, xE, TE, HE, AE, nE, yE, zE, RE, uj, Ej, jj, sj, Uj, Zj, Xj, lj, qj, fj, Cj, bj, cj, Nj, Oj, Yj, hj, Dj, gj, Mj, ej, Gj, pj, wj, Jj, dj, aj, Pj, oj, kj, mj, vj, Kj, Vj, rj, Qj, ij, Wj, Sj = pE,
        Ij = [],
        Fj = [],
        Bj = [],
        Lj = [],
        tj = [],
        xj = [],
        Tj = [],
        Hj = [],
        Aj = [],
        nj = [],
        yj = [],
        zj = [],
        Rj = [],
        us = [],
        Es = [],
        ss = [],
        Us = [],
        Zs = [],
        Xs = [],
        ls = [],
        qs = [],
        fs = [],
        Cs = [],
        bs = [],
        cs = [],
        Ns = [],
        Os = [],
        Ys = [],
        hs = [],
        Ds = [],
        gs = [],
        Ms = [],
        es = [],
        Gs = [],
        ps = [],
        ws = [],
        ds = [],
        as = [],
        Ps = [],
        os = [],
        ks = [],
        ms = [],
        vs = [],
        Ks = [],
        Vs = [],
        rs = [],
        Qs = [],
        is = [],
        Ws = [],
        Ss = [],
        Is = [],
        Fs = [],
        Bs = [],
        Ls = [],
        ts = [],
        xs = [],
        Ts = [],
        Hs = [],
        As = [],
        ns = [],
        ys = [],
        zs = [],
        Rs = [],
        uU = [],
        EU = [],
        jU = [],
        sU = [],
        UU = [],
        ZU = [],
        XU = [],
        lU = [],
        qU = [],
        fU = [],
        CU = [],
        bU = [],
        cU = [],
        NU = [],
        OU = [],
        YU = [],
        hU = [],
        DU = [],
        gU = [],
        MU = [],
        eU = [],
        GU = [],
        pU = [],
        wU = [],
        JU = [],
        dU = [],
        aU = [],
        PU = [],
        oU = [],
        kU = [],
        mU = [],
        vU = [],
        KU = [],
        VU = [],
        rU = [],
        QU = [],
        iU = [],
        WU = [],
        SU = [],
        IU = [],
        FU = [],
        BU = [],
        LU = [],
        tU = [],
        xU = [],
        TU = [],
        HU = [],
        AU = [],
        nU = [],
        yU = [],
        zU = [],
        RU = [],
        uZ = [],
        EZ = [],
        jZ = [],
        sZ = [],
        UZ = [],
        ZZ = [],
        XZ = [],
        lZ = [],
        qZ = [],
        fZ = [],
        CZ = [],
        bZ = [],
        cZ = [],
        NZ = [],
        OZ = [],
        YZ = [],
        hZ = [],
        DZ = [];
      return uu = class extends Sj {
        get directIntensity() {
          return (0, du.b)(this, Eu, "f")
        }
        set directIntensity(uu) {
          (0, du.d)(this, Eu, uu, "f")
        }
        get emissiveIntensity() {
          return (0, du.b)(this, ju, "f")
        }
        set emissiveIntensity(uu) {
          (0, du.d)(this, ju, uu, "f")
        }
        get environmentIntensity() {
          return (0, du.b)(this, su, "f")
        }
        set environmentIntensity(uu) {
          (0, du.d)(this, su, uu, "f")
        }
        get specularIntensity() {
          return (0, du.b)(this, Uu, "f")
        }
        set specularIntensity(uu) {
          (0, du.d)(this, Uu, uu, "f")
        }
        get disableBumpMap() {
          return (0, du.b)(this, Xu, "f")
        }
        set disableBumpMap(uu) {
          (0, du.d)(this, Xu, uu, "f")
        }
        get albedoTexture() {
          return (0, du.b)(this, lu, "f")
        }
        set albedoTexture(uu) {
          (0, du.d)(this, lu, uu, "f")
        }
        get baseWeightTexture() {
          return (0, du.b)(this, qu, "f")
        }
        set baseWeightTexture(uu) {
          (0, du.d)(this, qu, uu, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, du.b)(this, fu, "f")
        }
        set baseDiffuseRoughnessTexture(uu) {
          (0, du.d)(this, fu, uu, "f")
        }
        get ambientTexture() {
          return (0, du.b)(this, Cu, "f")
        }
        set ambientTexture(uu) {
          (0, du.d)(this, Cu, uu, "f")
        }
        get ambientTextureStrength() {
          return (0, du.b)(this, bu, "f")
        }
        set ambientTextureStrength(uu) {
          (0, du.d)(this, bu, uu, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, du.b)(this, cu, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(uu) {
          (0, du.d)(this, cu, uu, "f")
        }
        get opacityTexture() {
          return (0, du.b)(this, Nu, "f")
        }
        set opacityTexture(uu) {
          (0, du.d)(this, Nu, uu, "f")
        }
        get reflectionTexture() {
          return (0, du.b)(this, Ou, "f")
        }
        set reflectionTexture(uu) {
          (0, du.d)(this, Ou, uu, "f")
        }
        get emissiveTexture() {
          return (0, du.b)(this, Yu, "f")
        }
        set emissiveTexture(uu) {
          (0, du.d)(this, Yu, uu, "f")
        }
        get reflectivityTexture() {
          return (0, du.b)(this, hu, "f")
        }
        set reflectivityTexture(uu) {
          (0, du.d)(this, hu, uu, "f")
        }
        get metallicTexture() {
          return (0, du.b)(this, Du, "f")
        }
        set metallicTexture(uu) {
          (0, du.d)(this, Du, uu, "f")
        }
        get metallic() {
          return (0, du.b)(this, gu, "f")
        }
        set metallic(uu) {
          (0, du.d)(this, gu, uu, "f")
        }
        get roughness() {
          return (0, du.b)(this, Mu, "f")
        }
        set roughness(uu) {
          (0, du.d)(this, Mu, uu, "f")
        }
        get metallicF0Factor() {
          return (0, du.b)(this, eu, "f")
        }
        set metallicF0Factor(uu) {
          (0, du.d)(this, eu, uu, "f")
        }
        get metallicReflectanceColor() {
          return (0, du.b)(this, Gu, "f")
        }
        set metallicReflectanceColor(uu) {
          (0, du.d)(this, Gu, uu, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, du.b)(this, pu, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(uu) {
          (0, du.d)(this, pu, uu, "f")
        }
        get metallicReflectanceTexture() {
          return (0, du.b)(this, wu, "f")
        }
        set metallicReflectanceTexture(uu) {
          (0, du.d)(this, wu, uu, "f")
        }
        get reflectanceTexture() {
          return (0, du.b)(this, Ju, "f")
        }
        set reflectanceTexture(uu) {
          (0, du.d)(this, Ju, uu, "f")
        }
        get microSurfaceTexture() {
          return (0, du.b)(this, Pu, "f")
        }
        set microSurfaceTexture(uu) {
          (0, du.d)(this, Pu, uu, "f")
        }
        get bumpTexture() {
          return (0, du.b)(this, ou, "f")
        }
        set bumpTexture(uu) {
          (0, du.d)(this, ou, uu, "f")
        }
        get lightmapTexture() {
          return (0, du.b)(this, ku, "f")
        }
        set lightmapTexture(uu) {
          (0, du.d)(this, ku, uu, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(uu) {
          this.subSurface.refractionTexture = uu, uu ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, du.b)(this, mu, "f")
        }
        set ambientColor(uu) {
          (0, du.d)(this, mu, uu, "f")
        }
        get albedoColor() {
          return (0, du.b)(this, vu, "f")
        }
        set albedoColor(uu) {
          (0, du.d)(this, vu, uu, "f")
        }
        get baseWeight() {
          return (0, du.b)(this, Ku, "f")
        }
        set baseWeight(uu) {
          (0, du.d)(this, Ku, uu, "f")
        }
        get baseDiffuseRoughness() {
          return (0, du.b)(this, ru, "f")
        }
        set baseDiffuseRoughness(uu) {
          (0, du.d)(this, ru, uu, "f")
        }
        get reflectivityColor() {
          return (0, du.b)(this, Qu, "f")
        }
        set reflectivityColor(uu) {
          (0, du.d)(this, Qu, uu, "f")
        }
        get reflectionColor() {
          return (0, du.b)(this, iu, "f")
        }
        set reflectionColor(uu) {
          (0, du.d)(this, iu, uu, "f")
        }
        get emissiveColor() {
          return (0, du.b)(this, Wu, "f")
        }
        set emissiveColor(uu) {
          (0, du.d)(this, Wu, uu, "f")
        }
        get microSurface() {
          return (0, du.b)(this, Su, "f")
        }
        set microSurface(uu) {
          (0, du.d)(this, Su, uu, "f")
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
          return (0, du.b)(this, Iu, "f")
        }
        set useLightmapAsShadowmap(uu) {
          (0, du.d)(this, Iu, uu, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, du.b)(this, Fu, "f")
        }
        set useAlphaFromAlbedoTexture(uu) {
          (0, du.d)(this, Fu, uu, "f")
        }
        get forceAlphaTest() {
          return (0, du.b)(this, Bu, "f")
        }
        set forceAlphaTest(uu) {
          (0, du.d)(this, Bu, uu, "f")
        }
        get alphaCutOff() {
          return (0, du.b)(this, Lu, "f")
        }
        set alphaCutOff(uu) {
          (0, du.d)(this, Lu, uu, "f")
        }
        get useSpecularOverAlpha() {
          return (0, du.b)(this, tu, "f")
        }
        set useSpecularOverAlpha(uu) {
          (0, du.d)(this, tu, uu, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, du.b)(this, Tu, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(uu) {
          (0, du.d)(this, Tu, uu, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, du.b)(this, Hu, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(uu) {
          (0, du.d)(this, Hu, uu, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, du.b)(this, Au, "f")
        }
        set useRoughnessFromMetallicTextureGreen(uu) {
          (0, du.d)(this, Au, uu, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, du.b)(this, nu, "f")
        }
        set useMetallnessFromMetallicTextureBlue(uu) {
          (0, du.d)(this, nu, uu, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, du.b)(this, yu, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(uu) {
          (0, du.d)(this, yu, uu, "f")
        }
        get useAmbientInGrayScale() {
          return (0, du.b)(this, zu, "f")
        }
        set useAmbientInGrayScale(uu) {
          (0, du.d)(this, zu, uu, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, du.b)(this, Ru, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(uu) {
          (0, du.d)(this, Ru, uu, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === pE.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(uu) {
          uu !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? pE.LIGHTFALLOFF_PHYSICAL : pE.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === pE.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(uu) {
          uu !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = uu ? pE.LIGHTFALLOFF_GLTF : pE.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, du.b)(this, uE, "f")
        }
        set useRadianceOverAlpha(uu) {
          (0, du.d)(this, uE, uu, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, du.b)(this, EE, "f")
        }
        set useObjectSpaceNormalMap(uu) {
          (0, du.d)(this, EE, uu, "f")
        }
        get useParallax() {
          return (0, du.b)(this, jE, "f")
        }
        set useParallax(uu) {
          (0, du.d)(this, jE, uu, "f")
        }
        get useParallaxOcclusion() {
          return (0, du.b)(this, sE, "f")
        }
        set useParallaxOcclusion(uu) {
          (0, du.d)(this, sE, uu, "f")
        }
        get parallaxScaleBias() {
          return (0, du.b)(this, UE, "f")
        }
        set parallaxScaleBias(uu) {
          (0, du.d)(this, UE, uu, "f")
        }
        get disableLighting() {
          return (0, du.b)(this, ZE, "f")
        }
        set disableLighting(uu) {
          (0, du.d)(this, ZE, uu, "f")
        }
        get forceIrradianceInFragment() {
          return (0, du.b)(this, XE, "f")
        }
        set forceIrradianceInFragment(uu) {
          (0, du.d)(this, XE, uu, "f")
        }
        get maxSimultaneousLights() {
          return (0, du.b)(this, lE, "f")
        }
        set maxSimultaneousLights(uu) {
          (0, du.d)(this, lE, uu, "f")
        }
        get invertNormalMapX() {
          return (0, du.b)(this, qE, "f")
        }
        set invertNormalMapX(uu) {
          (0, du.d)(this, qE, uu, "f")
        }
        get invertNormalMapY() {
          return (0, du.b)(this, fE, "f")
        }
        set invertNormalMapY(uu) {
          (0, du.d)(this, fE, uu, "f")
        }
        get twoSidedLighting() {
          return (0, du.b)(this, CE, "f")
        }
        set twoSidedLighting(uu) {
          (0, du.d)(this, CE, uu, "f")
        }
        get useAlphaFresnel() {
          return (0, du.b)(this, bE, "f")
        }
        set useAlphaFresnel(uu) {
          (0, du.d)(this, bE, uu, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, du.b)(this, cE, "f")
        }
        set useLinearAlphaFresnel(uu) {
          (0, du.d)(this, cE, uu, "f")
        }
        get environmentBRDFTexture() {
          return (0, du.b)(this, NE, "f")
        }
        set environmentBRDFTexture(uu) {
          (0, du.d)(this, NE, uu, "f")
        }
        get forceNormalForward() {
          return (0, du.b)(this, OE, "f")
        }
        set forceNormalForward(uu) {
          (0, du.d)(this, OE, uu, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, du.b)(this, YE, "f")
        }
        set enableSpecularAntiAliasing(uu) {
          (0, du.d)(this, YE, uu, "f")
        }
        get useHorizonOcclusion() {
          return (0, du.b)(this, hE, "f")
        }
        set useHorizonOcclusion(uu) {
          (0, du.d)(this, hE, uu, "f")
        }
        get useRadianceOcclusion() {
          return (0, du.b)(this, DE, "f")
        }
        set useRadianceOcclusion(uu) {
          (0, du.d)(this, DE, uu, "f")
        }
        get unlit() {
          return (0, du.b)(this, gE, "f")
        }
        set unlit(uu) {
          (0, du.d)(this, gE, uu, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, du.b)(this, ME, "f")
        }
        set applyDecalMapAfterDetailMap(uu) {
          (0, du.d)(this, ME, uu, "f")
        }
        constructor(Zu, au) {
          super(Zu, au, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), Eu.set(this, ((0, du.g)(this, Ij), (0, du.g)(this, Fj, 1))), ju.set(this, ((0, du.g)(this, Bj), (0, du.g)(this, Lj, 1))), su.set(this, ((0, du.g)(this, tj), (0, du.g)(this, xj, 1))), Uu.set(this, ((0, du.g)(this, Tj), (0, du.g)(this, Hj, 1))), Xu.set(this, ((0, du.g)(this, Aj), (0, du.g)(this, nj, !1))), lu.set(this, ((0, du.g)(this, yj), (0, du.g)(this, zj, void 0))), qu.set(this, ((0, du.g)(this, Rj), (0, du.g)(this, us, void 0))), fu.set(this, ((0, du.g)(this, Es), (0, du.g)(this, ss, void 0))), Cu.set(this, ((0, du.g)(this, Us), (0, du.g)(this, Zs, void 0))), bu.set(this, ((0, du.g)(this, Xs), (0, du.g)(this, ls, 1))), cu.set(this, ((0, du.g)(this, qs), (0, du.g)(this, fs, uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), Nu.set(this, ((0, du.g)(this, Cs), (0, du.g)(this, bs, void 0))), Ou.set(this, ((0, du.g)(this, cs), (0, du.g)(this, Ns, void 0))), Yu.set(this, ((0, du.g)(this, Os), (0, du.g)(this, Ys, void 0))), hu.set(this, ((0, du.g)(this, hs), (0, du.g)(this, Ds, void 0))), Du.set(this, ((0, du.g)(this, gs), (0, du.g)(this, Ms, void 0))), gu.set(this, ((0, du.g)(this, es), (0, du.g)(this, Gs, void 0))), Mu.set(this, ((0, du.g)(this, ps), (0, du.g)(this, ws, void 0))), eu.set(this, ((0, du.g)(this, ds), (0, du.g)(this, as, 1))), Gu.set(this, ((0, du.g)(this, Ps), (0, du.g)(this, os, xu.c.White()))), pu.set(this, ((0, du.g)(this, ks), (0, du.g)(this, ms, !1))), wu.set(this, ((0, du.g)(this, vs), (0, du.g)(this, Ks, void 0))), Ju.set(this, ((0, du.g)(this, Vs), (0, du.g)(this, rs, void 0))), Pu.set(this, ((0, du.g)(this, Qs), (0, du.g)(this, is, void 0))), ou.set(this, ((0, du.g)(this, Ws), (0, du.g)(this, Ss, void 0))), ku.set(this, ((0, du.g)(this, Is), (0, du.g)(this, Fs, void 0))), mu.set(this, ((0, du.g)(this, Bs), (0, du.g)(this, Ls, new xu.c(0, 0, 0)))), vu.set(this, ((0, du.g)(this, ts), (0, du.g)(this, xs, new xu.c(1, 1, 1)))), Ku.set(this, ((0, du.g)(this, Ts), (0, du.g)(this, Hs, 1))), ru.set(this, ((0, du.g)(this, As), (0, du.g)(this, ns, void 0))), Qu.set(this, ((0, du.g)(this, ys), (0, du.g)(this, zs, new xu.c(1, 1, 1)))), iu.set(this, ((0, du.g)(this, Rs), (0, du.g)(this, uU, new xu.c(1, 1, 1)))), Wu.set(this, ((0, du.g)(this, EU), (0, du.g)(this, jU, new xu.c(0, 0, 0)))), Su.set(this, ((0, du.g)(this, sU), (0, du.g)(this, UU, 1))), Iu.set(this, ((0, du.g)(this, ZU), (0, du.g)(this, XU, !1))), Fu.set(this, ((0, du.g)(this, lU), (0, du.g)(this, qU, !1))), Bu.set(this, ((0, du.g)(this, fU), (0, du.g)(this, CU, !1))), Lu.set(this, ((0, du.g)(this, bU), (0, du.g)(this, cU, .4))), tu.set(this, ((0, du.g)(this, NU), (0, du.g)(this, OU, !0))), Tu.set(this, ((0, du.g)(this, YU), (0, du.g)(this, hU, !1))), Hu.set(this, ((0, du.g)(this, DU), (0, du.g)(this, gU, !0))), Au.set(this, ((0, du.g)(this, MU), (0, du.g)(this, eU, !1))), nu.set(this, ((0, du.g)(this, GU), (0, du.g)(this, pU, !1))), yu.set(this, ((0, du.g)(this, wU), (0, du.g)(this, JU, !1))), zu.set(this, ((0, du.g)(this, dU), (0, du.g)(this, aU, !1))), Ru.set(this, ((0, du.g)(this, PU), (0, du.g)(this, oU, !1))), uE.set(this, ((0, du.g)(this, kU), (0, du.g)(this, mU, !0))), EE.set(this, ((0, du.g)(this, vU), (0, du.g)(this, KU, !1))), jE.set(this, ((0, du.g)(this, VU), (0, du.g)(this, rU, !1))), sE.set(this, ((0, du.g)(this, QU), (0, du.g)(this, iU, !1))), UE.set(this, ((0, du.g)(this, WU), (0, du.g)(this, SU, .05))), ZE.set(this, ((0, du.g)(this, IU), (0, du.g)(this, FU, !1))), XE.set(this, ((0, du.g)(this, BU), (0, du.g)(this, LU, !1))), lE.set(this, ((0, du.g)(this, tU), (0, du.g)(this, xU, 4))), qE.set(this, ((0, du.g)(this, TU), (0, du.g)(this, HU, !1))), fE.set(this, ((0, du.g)(this, AU), (0, du.g)(this, nU, !1))), CE.set(this, ((0, du.g)(this, yU), (0, du.g)(this, zU, !1))), bE.set(this, ((0, du.g)(this, RU), (0, du.g)(this, uZ, !1))), cE.set(this, ((0, du.g)(this, EZ), (0, du.g)(this, jZ, !1))), NE.set(this, ((0, du.g)(this, sZ), (0, du.g)(this, UZ, null))), OE.set(this, ((0, du.g)(this, ZZ), (0, du.g)(this, XZ, !1))), YE.set(this, ((0, du.g)(this, lZ), (0, du.g)(this, qZ, !1))), hE.set(this, ((0, du.g)(this, fZ), (0, du.g)(this, CZ, !0))), DE.set(this, ((0, du.g)(this, bZ), (0, du.g)(this, cZ, !0))), gE.set(this, ((0, du.g)(this, NZ), (0, du.g)(this, OZ, !1))), ME.set(this, ((0, du.g)(this, YZ), (0, du.g)(this, hZ, !1))), (0, du.g)(this, DZ), this._environmentBRDFTexture = Vu(this.hV())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(Eu) {
          let ju = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Uu = wE.e.Clone((() => new uu(Eu, this.hV())), this, {
            cloneTexturesOnlyOnce: ju
          });
          return Uu.id = Eu, Uu.name = Eu, this.stencil.copyTo(Uu.stencil), this._clonePlugins(Uu, su), Uu
        }
        serialize() {
          const uu = super.serialize();
          return uu.customType = "BABYLON.PBRMaterial", uu
        }
        static Parse(Eu, ju, su) {
          const Uu = wE.e.Parse((() => new uu(Eu.name, ju)), Eu, ju, su);
          return Eu.stencil && Uu.stencil.parse(Eu.stencil, ju, su), Zu.b._ParsePlugins(Eu, Uu, ju, su), Eu.clearCoat && Uu.clearCoat.parse(Eu.clearCoat, ju, su), Eu.anisotropy && Uu.anisotropy.parse(Eu.anisotropy, ju, su), Eu.brdf && Uu.brdf.parse(Eu.brdf, ju, su), Eu.sheen && Uu.sheen.parse(Eu.sheen, ju, su), Eu.subSurface && Uu.subSurface.parse(Eu.subSurface, ju, su), Eu.iridescence && Uu.iridescence.parse(Eu.iridescence, ju, su), Uu
        }
      }, Eu = new WeakMap, ju = new WeakMap, su = new WeakMap, Uu = new WeakMap, Xu = new WeakMap, lu = new WeakMap, qu = new WeakMap, fu = new WeakMap, Cu = new WeakMap, bu = new WeakMap, cu = new WeakMap, Nu = new WeakMap, Ou = new WeakMap, Yu = new WeakMap, hu = new WeakMap, Du = new WeakMap, gu = new WeakMap, Mu = new WeakMap, eu = new WeakMap, Gu = new WeakMap, pu = new WeakMap, wu = new WeakMap, Ju = new WeakMap, Pu = new WeakMap, ou = new WeakMap, ku = new WeakMap, mu = new WeakMap, vu = new WeakMap, Ku = new WeakMap, ru = new WeakMap, Qu = new WeakMap, iu = new WeakMap, Wu = new WeakMap, Su = new WeakMap, Iu = new WeakMap, Fu = new WeakMap, Bu = new WeakMap, Lu = new WeakMap, tu = new WeakMap, Tu = new WeakMap, Hu = new WeakMap, Au = new WeakMap, nu = new WeakMap, yu = new WeakMap, zu = new WeakMap, Ru = new WeakMap, uE = new WeakMap, EE = new WeakMap, jE = new WeakMap, sE = new WeakMap, UE = new WeakMap, ZE = new WeakMap, XE = new WeakMap, lE = new WeakMap, qE = new WeakMap, fE = new WeakMap, CE = new WeakMap, bE = new WeakMap, cE = new WeakMap, NE = new WeakMap, OE = new WeakMap, YE = new WeakMap, hE = new WeakMap, DE = new WeakMap, gE = new WeakMap, ME = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sj[Symbol.metadata] ?? null) : void 0;
        eE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], GE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], JE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], dE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], aE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], oE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], kE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], mE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], KE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], VE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], rE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], iE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], SE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], IE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], FE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], BE = [(0, au.j)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], LE = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], tE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], xE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], HE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], AE = [(0, au.y)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty", null)], nE = [(0, au.j)("ambient"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], yE = [(0, au.j)("albedo"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], zE = [(0, au.E)("baseWeight"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], RE = [(0, au.E)("baseDiffuseRoughness"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], uj = [(0, au.j)("reflectivity"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Ej = [(0, au.j)("reflection"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], jj = [(0, au.j)("emissive"), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], sj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Uj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Zj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Xj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], lj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], qj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], fj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Cj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], bj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], cj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Nj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Oj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Yj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], hj = [(0, au.E)()], Dj = [(0, au.E)()], gj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Mj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], ej = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Gj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], pj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], wj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsLightsDirty")], Jj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], dj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsLightsDirty")], aj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Pj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], oj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], kj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], mj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], vj = [(0, au.e)("_markAllSubMeshesAsTexturesDirty")], Kj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Vj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], rj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], Qj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsTexturesDirty")], ij = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], Wj = [(0, au.E)(), (0, au.e)("_markAllSubMeshesAsMiscDirty")], (0, du.e)(uu, null, eE, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "directIntensity" in uu,
            get: uu => uu.directIntensity,
            set: (uu, Eu) => {
              uu.directIntensity = Eu
            }
          },
          metadata: Eu
        }, Fj, Bj), (0, du.e)(uu, null, GE, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "emissiveIntensity" in uu,
            get: uu => uu.emissiveIntensity,
            set: (uu, Eu) => {
              uu.emissiveIntensity = Eu
            }
          },
          metadata: Eu
        }, Lj, tj), (0, du.e)(uu, null, JE, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "environmentIntensity" in uu,
            get: uu => uu.environmentIntensity,
            set: (uu, Eu) => {
              uu.environmentIntensity = Eu
            }
          },
          metadata: Eu
        }, xj, Tj), (0, du.e)(uu, null, dE, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: uu => "specularIntensity" in uu,
            get: uu => uu.specularIntensity,
            set: (uu, Eu) => {
              uu.specularIntensity = Eu
            }
          },
          metadata: Eu
        }, Hj, Aj), (0, du.e)(uu, null, aE, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableBumpMap" in uu,
            get: uu => uu.disableBumpMap,
            set: (uu, Eu) => {
              uu.disableBumpMap = Eu
            }
          },
          metadata: Eu
        }, nj, yj), (0, du.e)(uu, null, PE, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "albedoTexture" in uu,
            get: uu => uu.albedoTexture,
            set: (uu, Eu) => {
              uu.albedoTexture = Eu
            }
          },
          metadata: Eu
        }, zj, Rj), (0, du.e)(uu, null, oE, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseWeightTexture" in uu,
            get: uu => uu.baseWeightTexture,
            set: (uu, Eu) => {
              uu.baseWeightTexture = Eu
            }
          },
          metadata: Eu
        }, us, Es), (0, du.e)(uu, null, kE, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseDiffuseRoughnessTexture" in uu,
            get: uu => uu.baseDiffuseRoughnessTexture,
            set: (uu, Eu) => {
              uu.baseDiffuseRoughnessTexture = Eu
            }
          },
          metadata: Eu
        }, ss, Us), (0, du.e)(uu, null, mE, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientTexture" in uu,
            get: uu => uu.ambientTexture,
            set: (uu, Eu) => {
              uu.ambientTexture = Eu
            }
          },
          metadata: Eu
        }, Zs, Xs), (0, du.e)(uu, null, vE, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientTextureStrength" in uu,
            get: uu => uu.ambientTextureStrength,
            set: (uu, Eu) => {
              uu.ambientTextureStrength = Eu
            }
          },
          metadata: Eu
        }, ls, qs), (0, du.e)(uu, null, KE, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientTextureImpactOnAnalyticalLights" in uu,
            get: uu => uu.ambientTextureImpactOnAnalyticalLights,
            set: (uu, Eu) => {
              uu.ambientTextureImpactOnAnalyticalLights = Eu
            }
          },
          metadata: Eu
        }, fs, Cs), (0, du.e)(uu, null, VE, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "opacityTexture" in uu,
            get: uu => uu.opacityTexture,
            set: (uu, Eu) => {
              uu.opacityTexture = Eu
            }
          },
          metadata: Eu
        }, bs, cs), (0, du.e)(uu, null, rE, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectionTexture" in uu,
            get: uu => uu.reflectionTexture,
            set: (uu, Eu) => {
              uu.reflectionTexture = Eu
            }
          },
          metadata: Eu
        }, Ns, Os), (0, du.e)(uu, null, QE, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "emissiveTexture" in uu,
            get: uu => uu.emissiveTexture,
            set: (uu, Eu) => {
              uu.emissiveTexture = Eu
            }
          },
          metadata: Eu
        }, Ys, hs), (0, du.e)(uu, null, iE, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectivityTexture" in uu,
            get: uu => uu.reflectivityTexture,
            set: (uu, Eu) => {
              uu.reflectivityTexture = Eu
            }
          },
          metadata: Eu
        }, Ds, gs), (0, du.e)(uu, null, WE, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicTexture" in uu,
            get: uu => uu.metallicTexture,
            set: (uu, Eu) => {
              uu.metallicTexture = Eu
            }
          },
          metadata: Eu
        }, Ms, es), (0, du.e)(uu, null, SE, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallic" in uu,
            get: uu => uu.metallic,
            set: (uu, Eu) => {
              uu.metallic = Eu
            }
          },
          metadata: Eu
        }, Gs, ps), (0, du.e)(uu, null, IE, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughness" in uu,
            get: uu => uu.roughness,
            set: (uu, Eu) => {
              uu.roughness = Eu
            }
          },
          metadata: Eu
        }, ws, ds), (0, du.e)(uu, null, FE, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicF0Factor" in uu,
            get: uu => uu.metallicF0Factor,
            set: (uu, Eu) => {
              uu.metallicF0Factor = Eu
            }
          },
          metadata: Eu
        }, as, Ps), (0, du.e)(uu, null, BE, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicReflectanceColor" in uu,
            get: uu => uu.metallicReflectanceColor,
            set: (uu, Eu) => {
              uu.metallicReflectanceColor = Eu
            }
          },
          metadata: Eu
        }, os, ks), (0, du.e)(uu, null, LE, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useOnlyMetallicFromMetallicReflectanceTexture" in uu,
            get: uu => uu.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (uu, Eu) => {
              uu.useOnlyMetallicFromMetallicReflectanceTexture = Eu
            }
          },
          metadata: Eu
        }, ms, vs), (0, du.e)(uu, null, tE, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "metallicReflectanceTexture" in uu,
            get: uu => uu.metallicReflectanceTexture,
            set: (uu, Eu) => {
              uu.metallicReflectanceTexture = Eu
            }
          },
          metadata: Eu
        }, Ks, Vs), (0, du.e)(uu, null, xE, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectanceTexture" in uu,
            get: uu => uu.reflectanceTexture,
            set: (uu, Eu) => {
              uu.reflectanceTexture = Eu
            }
          },
          metadata: Eu
        }, rs, Qs), (0, du.e)(uu, null, TE, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "microSurfaceTexture" in uu,
            get: uu => uu.microSurfaceTexture,
            set: (uu, Eu) => {
              uu.microSurfaceTexture = Eu
            }
          },
          metadata: Eu
        }, is, Ws), (0, du.e)(uu, null, HE, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "bumpTexture" in uu,
            get: uu => uu.bumpTexture,
            set: (uu, Eu) => {
              uu.bumpTexture = Eu
            }
          },
          metadata: Eu
        }, Ss, Is), (0, du.e)(uu, null, AE, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "lightmapTexture" in uu,
            get: uu => uu.lightmapTexture,
            set: (uu, Eu) => {
              uu.lightmapTexture = Eu
            }
          },
          metadata: Eu
        }, Fs, Bs), (0, du.e)(uu, null, nE, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "ambientColor" in uu,
            get: uu => uu.ambientColor,
            set: (uu, Eu) => {
              uu.ambientColor = Eu
            }
          },
          metadata: Eu
        }, Ls, ts), (0, du.e)(uu, null, yE, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "albedoColor" in uu,
            get: uu => uu.albedoColor,
            set: (uu, Eu) => {
              uu.albedoColor = Eu
            }
          },
          metadata: Eu
        }, xs, Ts), (0, du.e)(uu, null, zE, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseWeight" in uu,
            get: uu => uu.baseWeight,
            set: (uu, Eu) => {
              uu.baseWeight = Eu
            }
          },
          metadata: Eu
        }, Hs, As), (0, du.e)(uu, null, RE, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: uu => "baseDiffuseRoughness" in uu,
            get: uu => uu.baseDiffuseRoughness,
            set: (uu, Eu) => {
              uu.baseDiffuseRoughness = Eu
            }
          },
          metadata: Eu
        }, ns, ys), (0, du.e)(uu, null, uj, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectivityColor" in uu,
            get: uu => uu.reflectivityColor,
            set: (uu, Eu) => {
              uu.reflectivityColor = Eu
            }
          },
          metadata: Eu
        }, zs, Rs), (0, du.e)(uu, null, Ej, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "reflectionColor" in uu,
            get: uu => uu.reflectionColor,
            set: (uu, Eu) => {
              uu.reflectionColor = Eu
            }
          },
          metadata: Eu
        }, uU, EU), (0, du.e)(uu, null, jj, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: uu => "emissiveColor" in uu,
            get: uu => uu.emissiveColor,
            set: (uu, Eu) => {
              uu.emissiveColor = Eu
            }
          },
          metadata: Eu
        }, jU, sU), (0, du.e)(uu, null, sj, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: uu => "microSurface" in uu,
            get: uu => uu.microSurface,
            set: (uu, Eu) => {
              uu.microSurface = Eu
            }
          },
          metadata: Eu
        }, UU, ZU), (0, du.e)(uu, null, Uj, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLightmapAsShadowmap" in uu,
            get: uu => uu.useLightmapAsShadowmap,
            set: (uu, Eu) => {
              uu.useLightmapAsShadowmap = Eu
            }
          },
          metadata: Eu
        }, XU, lU), (0, du.e)(uu, null, Zj, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlphaFromAlbedoTexture" in uu,
            get: uu => uu.useAlphaFromAlbedoTexture,
            set: (uu, Eu) => {
              uu.useAlphaFromAlbedoTexture = Eu
            }
          },
          metadata: Eu
        }, qU, fU), (0, du.e)(uu, null, Xj, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceAlphaTest" in uu,
            get: uu => uu.forceAlphaTest,
            set: (uu, Eu) => {
              uu.forceAlphaTest = Eu
            }
          },
          metadata: Eu
        }, CU, bU), (0, du.e)(uu, null, lj, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: uu => "alphaCutOff" in uu,
            get: uu => uu.alphaCutOff,
            set: (uu, Eu) => {
              uu.alphaCutOff = Eu
            }
          },
          metadata: Eu
        }, cU, NU), (0, du.e)(uu, null, qj, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useSpecularOverAlpha" in uu,
            get: uu => uu.useSpecularOverAlpha,
            set: (uu, Eu) => {
              uu.useSpecularOverAlpha = Eu
            }
          },
          metadata: Eu
        }, OU, YU), (0, du.e)(uu, null, fj, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useMicroSurfaceFromReflectivityMapAlpha" in uu,
            get: uu => uu.useMicroSurfaceFromReflectivityMapAlpha,
            set: (uu, Eu) => {
              uu.useMicroSurfaceFromReflectivityMapAlpha = Eu
            }
          },
          metadata: Eu
        }, hU, DU), (0, du.e)(uu, null, Cj, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMetallicTextureAlpha" in uu,
            get: uu => uu.useRoughnessFromMetallicTextureAlpha,
            set: (uu, Eu) => {
              uu.useRoughnessFromMetallicTextureAlpha = Eu
            }
          },
          metadata: Eu
        }, gU, MU), (0, du.e)(uu, null, bj, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRoughnessFromMetallicTextureGreen" in uu,
            get: uu => uu.useRoughnessFromMetallicTextureGreen,
            set: (uu, Eu) => {
              uu.useRoughnessFromMetallicTextureGreen = Eu
            }
          },
          metadata: Eu
        }, eU, GU), (0, du.e)(uu, null, cj, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: uu => "useMetallnessFromMetallicTextureBlue" in uu,
            get: uu => uu.useMetallnessFromMetallicTextureBlue,
            set: (uu, Eu) => {
              uu.useMetallnessFromMetallicTextureBlue = Eu
            }
          },
          metadata: Eu
        }, pU, wU), (0, du.e)(uu, null, Nj, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAmbientOcclusionFromMetallicTextureRed" in uu,
            get: uu => uu.useAmbientOcclusionFromMetallicTextureRed,
            set: (uu, Eu) => {
              uu.useAmbientOcclusionFromMetallicTextureRed = Eu
            }
          },
          metadata: Eu
        }, JU, dU), (0, du.e)(uu, null, Oj, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAmbientInGrayScale" in uu,
            get: uu => uu.useAmbientInGrayScale,
            set: (uu, Eu) => {
              uu.useAmbientInGrayScale = Eu
            }
          },
          metadata: Eu
        }, aU, PU), (0, du.e)(uu, null, Yj, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAutoMicroSurfaceFromReflectivityMap" in uu,
            get: uu => uu.useAutoMicroSurfaceFromReflectivityMap,
            set: (uu, Eu) => {
              uu.useAutoMicroSurfaceFromReflectivityMap = Eu
            }
          },
          metadata: Eu
        }, oU, kU), (0, du.e)(uu, null, hj, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: uu => "usePhysicalLightFalloff" in uu,
            get: uu => uu.usePhysicalLightFalloff
          },
          metadata: Eu
        }, null, Ij), (0, du.e)(uu, null, Dj, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: uu => "useGLTFLightFalloff" in uu,
            get: uu => uu.useGLTFLightFalloff
          },
          metadata: Eu
        }, null, Ij), (0, du.e)(uu, null, gj, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRadianceOverAlpha" in uu,
            get: uu => uu.useRadianceOverAlpha,
            set: (uu, Eu) => {
              uu.useRadianceOverAlpha = Eu
            }
          },
          metadata: Eu
        }, mU, vU), (0, du.e)(uu, null, Mj, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "useObjectSpaceNormalMap" in uu,
            get: uu => uu.useObjectSpaceNormalMap,
            set: (uu, Eu) => {
              uu.useObjectSpaceNormalMap = Eu
            }
          },
          metadata: Eu
        }, KU, VU), (0, du.e)(uu, null, ej, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: uu => "useParallax" in uu,
            get: uu => uu.useParallax,
            set: (uu, Eu) => {
              uu.useParallax = Eu
            }
          },
          metadata: Eu
        }, rU, QU), (0, du.e)(uu, null, Gj, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: uu => "useParallaxOcclusion" in uu,
            get: uu => uu.useParallaxOcclusion,
            set: (uu, Eu) => {
              uu.useParallaxOcclusion = Eu
            }
          },
          metadata: Eu
        }, iU, WU), (0, du.e)(uu, null, pj, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: uu => "parallaxScaleBias" in uu,
            get: uu => uu.parallaxScaleBias,
            set: (uu, Eu) => {
              uu.parallaxScaleBias = Eu
            }
          },
          metadata: Eu
        }, SU, IU), (0, du.e)(uu, null, wj, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: uu => "disableLighting" in uu,
            get: uu => uu.disableLighting,
            set: (uu, Eu) => {
              uu.disableLighting = Eu
            }
          },
          metadata: Eu
        }, FU, BU), (0, du.e)(uu, null, Jj, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceIrradianceInFragment" in uu,
            get: uu => uu.forceIrradianceInFragment,
            set: (uu, Eu) => {
              uu.forceIrradianceInFragment = Eu
            }
          },
          metadata: Eu
        }, LU, tU), (0, du.e)(uu, null, dj, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: uu => "maxSimultaneousLights" in uu,
            get: uu => uu.maxSimultaneousLights,
            set: (uu, Eu) => {
              uu.maxSimultaneousLights = Eu
            }
          },
          metadata: Eu
        }, xU, TU), (0, du.e)(uu, null, aj, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertNormalMapX" in uu,
            get: uu => uu.invertNormalMapX,
            set: (uu, Eu) => {
              uu.invertNormalMapX = Eu
            }
          },
          metadata: Eu
        }, HU, AU), (0, du.e)(uu, null, Pj, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: uu => "invertNormalMapY" in uu,
            get: uu => uu.invertNormalMapY,
            set: (uu, Eu) => {
              uu.invertNormalMapY = Eu
            }
          },
          metadata: Eu
        }, nU, yU), (0, du.e)(uu, null, oj, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: uu => "twoSidedLighting" in uu,
            get: uu => uu.twoSidedLighting,
            set: (uu, Eu) => {
              uu.twoSidedLighting = Eu
            }
          },
          metadata: Eu
        }, zU, RU), (0, du.e)(uu, null, kj, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: uu => "useAlphaFresnel" in uu,
            get: uu => uu.useAlphaFresnel,
            set: (uu, Eu) => {
              uu.useAlphaFresnel = Eu
            }
          },
          metadata: Eu
        }, uZ, EZ), (0, du.e)(uu, null, mj, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: uu => "useLinearAlphaFresnel" in uu,
            get: uu => uu.useLinearAlphaFresnel,
            set: (uu, Eu) => {
              uu.useLinearAlphaFresnel = Eu
            }
          },
          metadata: Eu
        }, jZ, sZ), (0, du.e)(uu, null, vj, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: uu => "environmentBRDFTexture" in uu,
            get: uu => uu.environmentBRDFTexture,
            set: (uu, Eu) => {
              uu.environmentBRDFTexture = Eu
            }
          },
          metadata: Eu
        }, UZ, ZZ), (0, du.e)(uu, null, Kj, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: uu => "forceNormalForward" in uu,
            get: uu => uu.forceNormalForward,
            set: (uu, Eu) => {
              uu.forceNormalForward = Eu
            }
          },
          metadata: Eu
        }, XZ, lZ), (0, du.e)(uu, null, Vj, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: uu => "enableSpecularAntiAliasing" in uu,
            get: uu => uu.enableSpecularAntiAliasing,
            set: (uu, Eu) => {
              uu.enableSpecularAntiAliasing = Eu
            }
          },
          metadata: Eu
        }, qZ, fZ), (0, du.e)(uu, null, rj, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: uu => "useHorizonOcclusion" in uu,
            get: uu => uu.useHorizonOcclusion,
            set: (uu, Eu) => {
              uu.useHorizonOcclusion = Eu
            }
          },
          metadata: Eu
        }, CZ, bZ), (0, du.e)(uu, null, Qj, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: uu => "useRadianceOcclusion" in uu,
            get: uu => uu.useRadianceOcclusion,
            set: (uu, Eu) => {
              uu.useRadianceOcclusion = Eu
            }
          },
          metadata: Eu
        }, cZ, NZ), (0, du.e)(uu, null, ij, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: uu => "unlit" in uu,
            get: uu => uu.unlit,
            set: (uu, Eu) => {
              uu.unlit = Eu
            }
          },
          metadata: Eu
        }, OZ, YZ), (0, du.e)(uu, null, Wj, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: uu => "applyDecalMapAfterDetailMap" in uu,
            get: uu => uu.applyDecalMapAfterDetailMap,
            set: (uu, Eu) => {
              uu.applyDecalMapAfterDetailMap = Eu
            }
          },
          metadata: Eu
        }, hZ, DZ), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu.PBRMATERIAL_OPAQUE = pE.PBRMATERIAL_OPAQUE, uu.PBRMATERIAL_ALPHATEST = pE.PBRMATERIAL_ALPHATEST, uu.PBRMATERIAL_ALPHABLEND = pE.PBRMATERIAL_ALPHABLEND, uu.PBRMATERIAL_ALPHATESTANDBLEND = pE.PBRMATERIAL_ALPHATESTANDBLEND, uu.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = pE.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, uu
    })();
    const WU = "KHR_materials_diffuse_transmission";

    function SU(uu, Eu) {
      const ju = Eu.subSurface;
      let su = null;
      return ju.translucencyIntensityTexture ? su = ju.translucencyIntensityTexture : ju.thicknessTexture && ju.useMaskFromThicknessTexture && (su = ju.thicknessTexture), su && !ju.useGltfStyleTextures ? (Pu.b.Warn(`${uu}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${Eu.name}`, 1), null) : su
    }
    class IU {
      constructor(uu) {
        this.name = WU, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof iU && this._isExtensionEnabled(ju)) {
          const Eu = SU(uu, ju);
          return Eu && su.push(Eu), ju.subSurface.translucencyColorTexture && su.push(ju.subSurface.translucencyColorTexture), su
        }
        return su
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Eu = uu.subSurface;
        return !!Eu.isTranslucencyEnabled && (!uu.unlit && !Eu.useAlbedoToTintTranslucency && Eu.useGltfStyleTextures && 1 === Eu.volumeIndexOfRefraction && 0 === Eu.minimumThickness && 0 === Eu.maximumThickness)
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((su => {
          if (ju instanceof iU && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0;
            const su = ju.subSurface,
              Uu = SU(uu, ju),
              Zu = 0 == su.translucencyIntensity ? void 0 : su.translucencyIntensity,
              Xu = this._exporter._materialExporter.getTextureInfo(Uu) ?? void 0,
              lu = !su.translucencyColor || su.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : su.translucencyColor.Osu(),
              qu = this._exporter._materialExporter.getTextureInfo(su.translucencyColorTexture) ?? void 0,
              fu = {
                diffuseTransmissionFactor: Zu,
                diffuseTransmissionTexture: Xu,
                diffuseTransmissionColorFactor: lu,
                diffuseTransmissionColorTexture: qu
              };
            (Xu || qu) && this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions = Eu.extensions || {}, Eu.extensions[WU] = fu
          }
          su(Eu)
        }))
      }
    }
    let FU = !1;

    function BU() {
      FU || (FU = !0, Qs.RegisterExtension(WU, (uu => new IU(uu))))
    }
    BU();
    const LU = "KHR_materials_dispersion";
    class tU {
      constructor() {
        this.name = LU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Eu = uu.subSurface;
        return !(!Eu.isRefractionEnabled && !Eu.isDispersionEnabled)
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          if (ju instanceof iU && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0;
            const uu = {
              dispersion: ju.subSurface.dispersion
            };
            Eu.extensions = Eu.extensions || {}, Eu.extensions[LU] = uu
          }
          uu(Eu)
        }))
      }
    }
    let xU = !1;

    function TU() {
      xU || (xU = !0, Qs.RegisterExtension(LU, (() => new tU)))
    }
    TU();
    const HU = "KHR_materials_emissive_strength";
    class AU {
      constructor() {
        this.name = HU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(uu, Eu, ju) {
        return await new Promise((uu => {
          if (!(ju instanceof iU)) return uu(Eu);
          const su = ju.emissiveColor.scale(ju.emissiveIntensity),
            Uu = Math.max(...su.Osu());
          if (Uu > 1) {
            Eu.emissiveFactor = su.scale(1 / Uu).Osu(), this._wasUsed = !0;
            const uu = {
              emissiveStrength: Uu
            };
            Eu.extensions || (Eu.extensions = {}), Eu.extensions[HU] = uu
          } else Eu.emissiveFactor = su.Osu();
          return uu(Eu)
        }))
      }
    }
    let nU = !1;

    function yU() {
      nU || (nU = !0, Qs.RegisterExtension(HU, (() => new AU)))
    }
    yU();
    const zU = "KHR_materials_ior";
    class RU {
      constructor() {
        this.name = zU, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(uu) {
        return !uu.unlit && (uu instanceof zE ? 1.5 != uu.specularIor : uu instanceof iU && (void 0 != uu.indexOfRefraction && 1.5 != uu.indexOfRefraction))
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          if (ju instanceof iU && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0;
            const uu = {
              ior: ju.indexOfRefraction
            };
            Eu.extensions = Eu.extensions || {}, Eu.extensions[zU] = uu
          } else if (ju instanceof zE && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0;
            const uu = {
              ior: ju.specularIor
            };
            Eu.extensions = Eu.extensions || {}, Eu.extensions[zU] = uu
          }
          uu(Eu)
        }))
      }
    }
    let uZ = !1;

    function EZ() {
      uZ || (uZ = !0, Qs.RegisterExtension(zU, (() => new RU)))
    }
    EZ();
    const jZ = "KHR_materials_iridescence";
    class sZ {
      constructor(uu) {
        this.name = jZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof pE) {
          if (ju.iridescence.isEnabled) return ju.iridescence.texture && su.push(ju.iridescence.texture), ju.iridescence.thicknessTexture && ju.iridescence.thicknessTexture !== ju.iridescence.texture && su.push(ju.iridescence.thicknessTexture), su
        } else if (ju instanceof zE && ju.thinFilmWeight > 0) return ju.thinFilmWeightTexture && su.push(ju.thinFilmWeightTexture), ju.thinFilmThicknessTexture && ju.thinFilmThicknessTexture !== ju.thinFilmWeightTexture && su.push(ju.thinFilmThicknessTexture), su;
        return []
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          if (ju instanceof pE) {
            if (!ju.iridescence.isEnabled) return void uu(Eu);
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            const su = this._exporter._materialExporter.getTextureInfo(ju.iridescence.texture),
              Uu = this._exporter._materialExporter.getTextureInfo(ju.iridescence.thicknessTexture),
              Zu = {
                iridescenceFactor: ju.iridescence.intensity,
                iridescenceIor: ju.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: ju.iridescence.minimumThickness,
                iridescenceThicknessMaximum: ju.iridescence.maximumThickness,
                iridescenceTexture: su ?? void 0,
                iridescenceThicknessTexture: Uu ?? void 0
              };
            null === Zu.iridescenceTexture && null === Zu.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[jZ] = Zu
          } else if (ju instanceof zE) {
            if (ju.thinFilmWeight <= 0) return void uu(Eu);
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            const su = this._exporter._materialExporter.getTextureInfo(ju.thinFilmWeightTexture),
              Uu = this._exporter._materialExporter.getTextureInfo(ju.thinFilmThicknessTexture),
              Zu = {
                iridescenceFactor: ju.thinFilmWeight,
                iridescenceIor: ju.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * ju.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * ju.thinFilmThickness,
                iridescenceTexture: su ?? void 0,
                iridescenceThicknessTexture: Uu ?? void 0
              };
            null === Zu.iridescenceTexture && null === Zu.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[jZ] = Zu
          }
          uu(Eu)
        }))
      }
    }
    let UZ = !1;

    function ZZ() {
      UZ || (UZ = !0, Qs.RegisterExtension(jZ, (uu => new sZ(uu))))
    }
    ZZ();
    const XZ = "KHR_materials_sheen";
    class lZ {
      constructor(uu) {
        this.name = XZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        return ju instanceof iU && ju.sheen.isEnabled && ju.sheen.texture ? [ju.sheen.texture] : []
      }
      async postExportMaterialAsync(uu, Eu, ju) {
        return await new Promise((uu => {
          if (ju instanceof iU) {
            if (!ju.sheen.isEnabled) return void uu(Eu);
            this._wasUsed = !0, null == Eu.extensions && (Eu.extensions = {});
            const su = {
              sheenColorFactor: ju.sheen.color.Osu(),
              sheenRoughnessFactor: ju.sheen.roughness ?? 0
            };
            null === su.sheenColorTexture && null === su.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ju), ju.sheen.texture && (su.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(ju.sheen.texture) ?? void 0), ju.sheen.textureRoughness && !ju.sheen.useRoughnessFromMainTexture ? su.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ju.sheen.textureRoughness) ?? void 0 : ju.sheen.texture && ju.sheen.useRoughnessFromMainTexture && (su.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(ju.sheen.texture) ?? void 0), Eu.extensions[XZ] = su
          }
          uu(Eu)
        }))
      }
    }
    let qZ = !1;

    function fZ() {
      qZ || (qZ = !0, Qs.RegisterExtension(XZ, (uu => new lZ(uu))))
    }
    fZ();
    const CZ = "KHR_materials_fuzz";

    function bZ(uu, Eu) {
      const ju = new ku.g(Eu.name, Eu.hV());
      return ju._texture = uu, ju.coordinatesIndex = Eu.coordinatesIndex, Eu instanceof ku.g && (ju.uOffset = Eu.uOffset, ju.vOffset = Eu.vOffset, ju.uScale = Eu.uScale, ju.vScale = Eu.vScale, ju.wAng = Eu.wAng), ju.wrapU = Eu.wrapU, ju.wrapV = Eu.wrapV, ju
    }
    class cZ {
      constructor(uu) {
        this.name = CZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = uu
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
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        if (ju instanceof zE) {
          const uu = [];
          if (ju.fuzzWeight > 0) {
            ju.fuzzWeightTexture && uu.push(ju.fuzzWeightTexture);
            let Eu = !1;
            if (ju.fuzzRoughnessTexture && (ju._useFuzzRoughnessFromTextureAlpha ? uu.push(ju.fuzzRoughnessTexture) : Eu = !0), ju.fuzzColorTexture && !Eu && uu.push(ju.fuzzColorTexture), Eu) {
              const Eu = function(uu) {
                const Eu = uu.fuzzColorTexture,
                  ju = Eu && Eu.getInternalTexture() ? Eu.getInternalTexture().uniqueId : "NoFuzzColor",
                  su = uu.fuzzRoughnessTexture;
                return `FuzzColor_${ju}_FuzzRoughness_${su&&su.getInternalTexture()?su.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(ju);
              if (!this._cachedInternalTexturesMap[Eu]) {
                const uu = await async function(uu) {
                  const Eu = uu.hV(),
                    ju = uu.fuzzColorTexture,
                    su = uu.fuzzRoughnessTexture;
                  return ju || su ? (await Xj("FuzzTexture", fj(ju ? lj(ju, 0) : qj(1), ju ? lj(ju, 1) : qj(1), ju ? lj(ju, 2) : qj(1), su ? lj(su, uu._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : qj(1)), Eu)).getInternalTexture() : null
                }(ju);
                uu && (this._cachedInternalTexturesMap[Eu] = uu)
              }
              this._cachedInternalTexturesMap[Eu] && (ju.fuzzColorTexture && (this._mergedTexturesMap[ju.fuzzColorTexture.uniqueId] = bZ(this._cachedInternalTexturesMap[Eu], ju.fuzzColorTexture), uu.push(this._mergedTexturesMap[ju.fuzzColorTexture.uniqueId])), ju.fuzzRoughnessTexture && (this._mergedTexturesMap[ju.fuzzRoughnessTexture.uniqueId] = bZ(this._cachedInternalTexturesMap[Eu], ju.fuzzRoughnessTexture), uu.push(this._mergedTexturesMap[ju.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return uu
        }
        return []
      }
      async postExportMaterialAsync(uu, Eu, ju) {
        return await new Promise((uu => {
          if (ju instanceof zE) {
            if (0 == ju.fuzzWeight) return void uu(Eu);
            this._wasUsed = !0, null == Eu.extensions && (Eu.extensions = {});
            const su = {
              fuzzFactor: ju.fuzzWeight,
              fuzzColorFactor: ju.fuzzColor.Osu(),
              fuzzRoughnessFactor: ju.fuzzRoughness
            };
            let Uu, Zu;
            ju.fuzzWeightTexture && (su.fuzzTexture = this._exporter._materialExporter.getTextureInfo(ju.fuzzWeightTexture) ?? void 0), ju.fuzzColorTexture && (Uu = this._mergedTexturesMap[ju.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[ju.fuzzColorTexture.uniqueId] : ju.fuzzColorTexture, su.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(Uu) ?? void 0), ju.fuzzRoughnessTexture && (Zu = this._mergedTexturesMap[ju.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[ju.fuzzRoughnessTexture.uniqueId] : ju.fuzzRoughnessTexture, su.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(Zu) ?? void 0), null === su.fuzzColorTexture && null === su.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[CZ] = su
          }
          uu(Eu)
        }))
      }
    }
    let NZ = !1;

    function OZ() {
      NZ || (NZ = !0, Qs.RegisterExtension(CZ, (uu => new cZ(uu))))
    }
    OZ();
    const YZ = "KHR_materials_specular";
    class hZ {
      constructor(uu) {
        this.name = YZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        return ju instanceof iU && this._isExtensionEnabled(ju) ? (ju.metallicReflectanceTexture && su.push(ju.metallicReflectanceTexture), ju.reflectanceTexture && su.push(ju.reflectanceTexture), su) : su
      }
      _isExtensionEnabled(uu) {
        return !uu.unlit && (void 0 != uu.metallicF0Factor && 1 != uu.metallicF0Factor || void 0 != uu.metallicReflectanceColor && !uu.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(uu))
      }
      _hasTexturesExtension(uu) {
        return null != uu.metallicReflectanceTexture || null != uu.reflectanceTexture
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          var su;
          if (ju instanceof iU && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
            const uu = this._exporter._materialExporter.getTextureInfo(ju.metallicReflectanceTexture) ?? void 0,
              su = this._exporter._materialExporter.getTextureInfo(ju.reflectanceTexture) ?? void 0,
              Uu = {
                specularFactor: 1 == ju.metallicF0Factor ? void 0 : ju.metallicF0Factor,
                specularTexture: uu,
                specularColorFactor: ju.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : ju.metallicReflectanceColor.Osu(),
                specularColorTexture: su
              };
            this._hasTexturesExtension(ju) && this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[YZ] = Uu
          } else if (ju instanceof zE) {
            Eu.extensions = Eu.extensions || {};
            const Uu = this._exporter._materialExporter.getTextureInfo(ju.specularWeightTexture) ?? void 0,
              Zu = this._exporter._materialExporter.getTextureInfo(ju.specularColorTexture) ?? void 0,
              Xu = 1 == ju.specularWeight ? void 0 : ju.specularWeight,
              lu = ju.specularColor.equalsFloats(1, 1, 1) ? void 0 : ju.specularColor.Osu();
            if (!Zu && !Uu && void 0 === Xu && void 0 === lu) return uu(Eu);
            this._wasUsed = !0;
            const qu = {
                specularEdgeColorEnabled: !0
              },
              fu = {
                specularFactor: Xu,
                specularTexture: Uu,
                specularColorFactor: lu,
                specularColorTexture: Zu,
                extensions: {}
              };
            fu.extensions.EXT_materials_specular_edge_color = qu, (su = this._exporter._glTF).extensionsUsed || (su.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (Uu || Zu) && this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[YZ] = fu
          }
          uu(Eu)
        }))
      }
    }
    let DZ = !1;

    function gZ() {
      DZ || (DZ = !0, Qs.RegisterExtension(YZ, (uu => new hZ(uu))))
    }
    gZ();
    const MZ = "KHR_materials_transmission";
    class eZ {
      constructor(uu) {
        this.name = MZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof iU) {
          if (this._isExtensionEnabled(ju)) return ju.subSurface.refractionIntensityTexture && ju.subSurface.useGltfStyleTextures && su.push(ju.subSurface.refractionIntensityTexture), su
        } else ju instanceof zE && (ju.transmissionWeight > 0 && ju.transmissionWeightTexture && (su.push(ju.transmissionWeightTexture), ju.transmissionColorTexture && su.push(ju.transmissionColorTexture)), ju.subsurfaceWeight > 0 && ju.subsurfaceWeightTexture && su.push(ju.subsurfaceWeightTexture));
        return su
      }
      _isExtensionEnabled(uu) {
        if (uu instanceof zE && !uu.unlit) return uu.transmissionWeight > 0 || uu.subsurfaceWeight > 0;
        if (uu instanceof iU && !uu.unlit) {
          const Eu = uu.subSurface;
          return Eu.isRefractionEnabled && void 0 != Eu.refractionIntensity && 0 != Eu.refractionIntensity || null != Eu.refractionIntensityTexture && Eu.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(uu, Eu, ju) {
        if (!this._isExtensionEnabled(ju)) return Eu;
        if (ju instanceof iU) {
          this._wasUsed = !0;
          const su = ju.subSurface,
            Uu = {
              transmissionFactor: 0 === su.refractionIntensity ? void 0 : su.refractionIntensity
            };
          if (su.refractionIntensityTexture)
            if (su.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(ju);
              const uu = this._exporter._materialExporter.getTextureInfo(su.refractionIntensityTexture);
              uu && (Uu.transmissionTexture = uu)
            } else Pu.b.Warn(`${uu}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          Eu.extensions || (Eu.extensions = {}), Eu.extensions[MZ] = Uu
        } else if (ju instanceof zE) {
          this._wasUsed = !0;
          const uu = {
            transmissionFactor: (1 - ju.transmissionWeight) * ju.subsurfaceWeight + ju.transmissionWeight
          };
          if (ju.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ju);
            const Eu = this._exporter._materialExporter.getTextureInfo(ju.transmissionWeightTexture);
            Eu && (uu.transmissionTexture = Eu)
          } else if (ju.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(ju);
            const Eu = this._exporter._materialExporter.getTextureInfo(ju.subsurfaceWeightTexture);
            Eu && (uu.transmissionTexture = Eu)
          }
          if (0 == ju.transmissionDepth && (!ju.transmissionColor.equals(xu.c.White()) || ju.transmissionColorTexture) && Eu.pbrMetallicRoughness && (Eu.pbrMetallicRoughness.baseColorFactor || (Eu.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), Eu.pbrMetallicRoughness.baseColorFactor[0] *= ju.transmissionColor.r, Eu.pbrMetallicRoughness.baseColorFactor[1] *= ju.transmissionColor.g, Eu.pbrMetallicRoughness.baseColorFactor[2] *= ju.transmissionColor.b, ju.transmissionColorTexture && !Eu.pbrMetallicRoughness.baseColorTexture)) {
            const uu = this._exporter._materialExporter.getTextureInfo(ju.transmissionColorTexture);
            uu && (Eu.pbrMetallicRoughness.baseColorTexture = uu, this._exporter._materialNeedsUVsSet.add(ju))
          }
          Eu.extensions || (Eu.extensions = {}), Eu.extensions[MZ] = uu
        }
        return Eu
      }
    }
    let GZ = !1;

    function pZ() {
      GZ || (GZ = !0, Qs.RegisterExtension(MZ, (uu => new eZ(uu))))
    }
    pZ();
    var wZ = ju(40522);
    const JZ = "KHR_materials_unlit";
    class dZ {
      constructor() {
        this.name = JZ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          let su = !1;
          ju instanceof iU ? su = ju.unlit : ju instanceof wZ.e && (su = ju.disableLighting), su && (this._wasUsed = !0, null == Eu.extensions && (Eu.extensions = {}), Eu.extensions[JZ] = {}), uu(Eu)
        }))
      }
    }
    let aZ = !1;

    function PZ() {
      aZ || (aZ = !0, Qs.RegisterExtension(JZ, (() => new dZ)))
    }
    PZ();
    const oZ = "KHR_materials_volume";
    class kZ {
      constructor(uu) {
        this.name = oZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof iU) {
          if (this._isExtensionEnabled(ju)) return ju.subSurface.thicknessTexture && su.push(ju.subSurface.thicknessTexture), su
        } else ju instanceof zE && (ju.transmissionWeight > 0 || ju.subsurfaceWeight > 0) && ju.geometryThicknessTexture && su.push(ju.geometryThicknessTexture);
        return su
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Eu = uu.subSurface;
        return !(!Eu.isRefractionEnabled && !Eu.isTranslucencyEnabled) && (void 0 != Eu.maximumThickness && 0 != Eu.maximumThickness || void 0 != Eu.tintColorAtDistance && Eu.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != Eu.tintColor && Eu.tintColor != xu.c.White() || this._hasTexturesExtension(uu))
      }
      _hasTexturesExtension(uu) {
        return null != uu.subSurface.thicknessTexture
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          if (ju instanceof iU && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0;
            const uu = ju.subSurface,
              su = {
                thicknessFactor: 0 == uu.maximumThickness ? void 0 : uu.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(uu.thicknessTexture) ?? void 0,
                attenuationDistance: uu.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : uu.tintColorAtDistance,
                attenuationColor: uu.tintColor.equalsFloats(1, 1, 1) ? void 0 : uu.tintColor.Osu()
              };
            this._hasTexturesExtension(ju) && this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions = Eu.extensions || {}, Eu.extensions[oZ] = su
          } else if (ju instanceof zE) {
            const uu = ju.transmissionWeight > 0 && !ju.geometryThinWalled,
              su = ju.subsurfaceWeight > 0 && !ju.geometryThinWalled;
            if (uu || su) {
              this._wasUsed = !0;
              const Uu = ju.geometryThickness,
                Zu = this._exporter._materialExporter.getTextureInfo(ju.geometryThicknessTexture) ?? void 0;
              let Xu;
              Zu && this._exporter._materialNeedsUVsSet.add(ju);
              const lu = xu.c.White().Osu();
              if (uu && ju.transmissionDepth > 0) {
                const uu = 1 / ju.transmissionDepth;
                let Eu = new Wu.t(-Math.log(ju.transmissionColor.r) * uu, -Math.log(ju.transmissionColor.g) * uu, -Math.log(ju.transmissionColor.b) * uu);
                const su = new Wu.t(ju.transmissionScatter.r * uu, ju.transmissionScatter.g * uu, ju.transmissionScatter.b * uu),
                  Uu = Eu.subtract(su),
                  Zu = Math.min(Uu.x, Uu.y, Uu.z);
                Zu < 0 && (Uu.x = Uu.x - Zu, Uu.y = Uu.y - Zu, Uu.z = Uu.z - Zu), Eu = Uu.add(su);
                Xu = 1 / Math.max(Eu.x, Eu.y, Eu.z), lu[0] = Math.exp(-Eu.x * Xu), lu[1] = Math.exp(-Eu.y * Xu), lu[2] = Math.exp(-Eu.z * Xu)
              } else Xu = Number.MAX_VALUE, lu[0] = 1, lu[1] = 1, lu[2] = 1;
              let qu = 1;
              const fu = xu.c.White().Osu();
              if (su) {
                const uu = ju.subsurfaceRadius,
                  Eu = ju.subsurfaceRadiusScale,
                  su = new Wu.t(Eu.r, Eu.g, Eu.b).multiplyByFloats(uu, uu, uu),
                  Uu = new Wu.t(1 / Math.max(su.x, 1e-6), 1 / Math.max(su.y, 1e-6), 1 / Math.max(su.z, 1e-6));
                qu = 1 / Math.max(Uu.x, Uu.y, Uu.z), fu[0] = Math.exp(-Uu.x * qu), fu[1] = Math.exp(-Uu.y * qu), fu[2] = Math.exp(-Uu.z * qu)
              }
              const Cu = (1 - ju.transmissionWeight) * ju.subsurfaceWeight,
                bu = Cu + ju.transmissionWeight,
                cu = 1 / Math.max(bu, 1e-6),
                Nu = ju.transmissionWeight * cu,
                Ou = Cu * cu,
                Yu = lu.map(((uu, Eu) => uu * Nu + fu[Eu] * Ou)),
                hu = {
                  thicknessFactor: Uu,
                  thicknessTexture: Zu,
                  attenuationDistance: Xu * Nu + qu * Ou,
                  attenuationColor: Yu
                };
              Eu.extensions = Eu.extensions || {}, Eu.extensions[oZ] = hu
            }
          }
          uu(Eu)
        }))
      }
    }
    let mZ = !1;

    function vZ() {
      mZ || (mZ = !0, Qs.RegisterExtension(oZ, (uu => new kZ(uu))))
    }
    vZ();
    const KZ = "KHR_materials_volume_scatter";
    class VZ {
      constructor(uu) {
        this.name = KZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        return ju instanceof zE && (ju.transmissionWeight > 0 && ju.transmissionScatterTexture && su.push(ju.transmissionScatterTexture), ju.subsurfaceWeight > 0 && ju.subsurfaceColorTexture && su.push(ju.subsurfaceColorTexture)), su
      }
      _isExtensionEnabled(uu) {
        if (uu.unlit) return !1;
        const Eu = uu.transmissionWeight > 0 && !uu.geometryThinWalled && uu.transmissionDepth > 0 && !uu.transmissionScatter.equals(xu.c.Black()),
          ju = uu.subsurfaceWeight > 0 && !uu.geometryThinWalled;
        return !(!Eu && !ju)
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          if (ju instanceof zE && this._isExtensionEnabled(ju)) {
            this._wasUsed = !0;
            let uu = Wu.t.Zero(),
              su = 0;
            if (ju.transmissionWeight > 0) {
              uu = function(uu) {
                const Eu = new Wu.t(Math.sqrt(1 - uu.x), Math.sqrt(1 - uu.y), Math.sqrt(1 - uu.z)),
                  ju = new Wu.t(1, 1, 1),
                  su = ju.subtract(Eu),
                  Uu = ju.subtract(new Wu.t(.139, .139, .139).multiplyInPlace(Eu)),
                  Zu = ju.add(new Wu.t(1.17, 1.17, 1.17).multiplyInPlace(Eu));
                return su.multiplyInPlace(Uu).divideInPlace(Zu)
              }(new Wu.t(ju.transmissionScatter.r, ju.transmissionScatter.g, ju.transmissionScatter.b)), su = ju.transmissionScatterAnisotropy
            }
            const Uu = Wu.t.Zero();
            let Zu = 0;
            ju.subsurfaceWeight > 0 && (Uu.set(ju.subsurfaceColor.r, ju.subsurfaceColor.g, ju.subsurfaceColor.b), Zu = ju.subsurfaceScatterAnisotropy);
            const Xu = (1 - ju.transmissionWeight) * ju.subsurfaceWeight,
              lu = Xu + ju.transmissionWeight,
              qu = 1 / Math.max(lu, 1e-6),
              fu = ju.transmissionWeight * qu,
              Cu = Xu * qu,
              bu = {
                multiscatterColorFactor: uu.multiplyByFloats(fu, fu, fu).addInPlace(Uu.multiplyByFloats(Cu, Cu, Cu)).Osu(),
                scatterAnisotropy: su * fu + Zu * Cu
              };
            if (ju.subsurfaceWeight > 0 && ju.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(ju);
              const uu = this._exporter._materialExporter.getTextureInfo(ju.subsurfaceColorTexture);
              uu && (bu.multiscatterColorTexture = uu)
            } else if (ju.transmissionWeight > 0 && ju.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(ju);
              const uu = this._exporter._materialExporter.getTextureInfo(ju.transmissionScatterTexture);
              uu && (bu.multiscatterColorTexture = uu)
            }
            Eu.extensions = Eu.extensions || {}, Eu.extensions[KZ] = bu
          }
          uu(Eu)
        }))
      }
    }
    let rZ = !1;

    function QZ() {
      rZ || (rZ = !0, Qs.RegisterExtension(KZ, (uu => new VZ(uu)), 101))
    }
    QZ();
    const iZ = "KHR_materials_diffuse_roughness";
    class WZ {
      constructor(uu) {
        this.name = iZ, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(uu, Eu, ju) {
        const su = [];
        if (ju instanceof pE) {
          if (ju._baseDiffuseRoughness) return ju._baseDiffuseRoughnessTexture && su.push(ju._baseDiffuseRoughnessTexture), su
        } else if (ju instanceof zE && ju.baseDiffuseRoughness) return ju.baseDiffuseRoughnessTexture && su.push(ju.baseDiffuseRoughnessTexture), su;
        return []
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          let su = null,
            Uu = null;
          if (ju instanceof pE ? (su = ju._baseDiffuseRoughness, Uu = ju._baseDiffuseRoughnessTexture) : ju instanceof zE && (su = ju.baseDiffuseRoughness, Uu = ju.baseDiffuseRoughnessTexture), !su) return void uu(Eu);
          this._wasUsed = !0, Eu.extensions = Eu.extensions || {};
          const Zu = {
            diffuseRoughnessFactor: su,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(Uu) ?? void 0
          };
          null !== Zu.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(ju), Eu.extensions[iZ] = Zu, uu(Eu)
        }))
      }
    }
    let SZ = !1;

    function IZ() {
      SZ || (SZ = !0, Qs.RegisterExtension(iZ, (uu => new WZ(uu))))
    }
    IZ();
    const FZ = "KHR_materials_openpbr";
    class BZ {
      constructor() {
        this.name = FZ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(uu, Eu, ju) {
        return new Promise((uu => {
          ju instanceof zE && (this._wasUsed = !0, Eu.extensions = Eu.extensions || {}, Eu.extensions[FZ] = {}), uu(Eu)
        }))
      }
    }
    let LZ = !1;

    function tZ() {
      LZ || (LZ = !0, Qs.RegisterExtension(FZ, (() => new BZ)))
    }
    tZ();
    const xZ = "KHR_texture_transform";
    class TZ {
      constructor() {
        this.name = xZ, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(uu, Eu, ju) {
        if (ju.hV() || JE.h.Warn(`${uu}: "scene" is not defined for Babylon texture ${ju.name}!`), (0 !== ju.uAng || 0 !== ju.vAng) && (JE.h.Warn(`${uu}: Texture ${ju.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== ju.uRotationCenter || 0 !== ju.vRotationCenter)) return;
        const su = {};
        let Uu = !1;
        if (0 === ju.uOffset && 0 === ju.vOffset || (su.offset = [ju.uOffset, ju.vOffset], Uu = !0), 1 === ju.uScale && 1 === ju.vScale || (su.scale = [ju.uScale, ju.vScale], Uu = !0), 0 !== ju.wAng) {
          if (0 !== ju.uRotationCenter || 0 !== ju.vRotationCenter) {
            if (ju.homogeneousRotationInUVTransform && ju.uScale !== ju.vScale) return void JE.h.Warn(`${uu}: Texture ${ju.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${xZ}.`);
            JE.h.Warn(`${uu}: Texture ${ju.name} with non-origin rotation center will be exported using an adjusted offset with ${xZ}.`), su.offset = function(uu) {
              const {
                uOffset: Eu,
                vOffset: ju,
                uRotationCenter: su,
                vRotationCenter: Uu,
                uScale: Zu,
                vScale: Xu,
                wAng: lu
              } = uu, qu = Math.cos(lu), fu = Math.sin(lu), Cu = su * Zu, bu = Uu * Xu;
              return [Eu + (Cu * (1 - qu) + bu * fu), ju + (bu * (1 - qu) - Cu * fu)]
            }(ju)
          }
          su.rotation = -ju.wAng, Uu = !0
        }
        0 !== ju.coordinatesIndex && (su.texCoord = ju.coordinatesIndex, Uu = !0), Uu && (this._wasUsed = !0, Eu.extensions || (Eu.extensions = {}), Eu.extensions[xZ] = su)
      }
    }
    let HZ = !1;

    function AZ() {
      HZ || (HZ = !0, Qs.RegisterExtension(xZ, (() => new TZ)))
    }
    AZ();
    var nZ = ju(40294);
    const yZ = "KHR_texture_basisu";
    class zZ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = yZ, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      postExportTexture(uu, Eu) {
        const ju = this._exporter._textures[Eu.index],
          su = ju.source;
        if (void 0 === su) return;
        const Uu = this._exporter._images[su];
        "image/ktx2" === (Uu.mimeType || (0, nZ.h)(Uu.uri)) && (ju.source = void 0, ju.extensions || (ju.extensions = {}), ju.extensions[yZ] = {
          source: su
        }, this._wasUsed = !0)
      }
    }
    let RZ = !1;

    function uX() {
      RZ || (RZ = !0, Qs.RegisterExtension(yZ, (uu => new zZ(uu))))
    }
    uX();
    const EX = "EXT_texture_webp";
    class jX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = EX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      postExportTexture(uu, Eu) {
        const ju = this._exporter._textures[Eu.index],
          su = ju.source;
        if (void 0 === su) return;
        const Uu = this._exporter._images[su];
        "image/webp" === (Uu.mimeType || (0, nZ.h)(Uu.uri)) && (ju.source = void 0, ju.extensions || (ju.extensions = {}), ju.extensions[EX] = {
          source: su
        }, this._wasUsed = !0)
      }
    }
    let sX = !1;

    function UX() {
      sX || (sX = !0, Qs.RegisterExtension(EX, (uu => new jX(uu))))
    }
    UX();
    const ZX = "EXT_texture_avif";
    class XX {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(uu) {
        this.name = ZX, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = uu
      }
      dispose() {}
      postExportTexture(uu, Eu) {
        const ju = this._exporter._textures[Eu.index],
          su = ju.source;
        if (void 0 === su) return;
        const Uu = this._exporter._images[su];
        "image/avif" === (Uu.mimeType || (0, nZ.h)(Uu.uri)) && (ju.source = void 0, ju.extensions || (ju.extensions = {}), ju.extensions[ZX] = {
          source: su
        }, this._wasUsed = !0)
      }
    }
    let lX = !1;

    function qX() {
      lX || (lX = !0, Qs.RegisterExtension(ZX, (uu => new XX(uu))))
    }
    qX();
    class fX {
      static CreateSTL(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          Uu = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Zu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qu = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const fu = function(uu, Eu, ju) {
            const Uu = [3 * uu[ju], 3 * uu[ju + 1], 3 * uu[ju + 2]],
              Zu = [new su.dO(Eu[Uu[0]], Eu[Uu[0] + 2], Eu[Uu[0] + 1]), new su.dO(Eu[Uu[1]], Eu[Uu[1] + 2], Eu[Uu[1] + 1]), new su.dO(Eu[Uu[2]], Eu[Uu[2] + 2], Eu[Uu[2] + 1])],
              Xu = Zu[0].subtract(Zu[1]),
              lu = Zu[2].subtract(Zu[1]);
            return {
              v: Zu,
              n: su.dO.Cross(lu, Xu).normalize()
            }
          },
          bu = function(uu, Eu, ju, su) {
            return Eu = cu(uu, Eu, ju.x, su), Eu = cu(uu, Eu, ju.y, su), cu(uu, Eu, ju.z, su)
          },
          cu = function(uu, Eu, ju, su) {
            return uu.setFloat32(Eu, ju, su), Eu + 4
          },
          Ou = function(uu) {
            if (lu) {
              let Eu = uu;
              uu instanceof Nu.c && (Eu = uu.CUu);
              const ju = Eu.getVerticesData(Cu.e.PositionKind, !0, !0);
              if (!ju) return [];
              const Uu = su.dO.Zero();
              let Zu;
              for (Zu = 0; Zu < ju.length; Zu += 3) su.dO.TransformCoordinatesFromFloatsToRef(ju[Zu], ju[Zu + 1], ju[Zu + 2], uu.computeWorldMatrix(!0), Uu).toArray(ju, Zu);
              return ju
            }
            return uu.getVerticesData(Cu.e.PositionKind) || []
          };
        lu && (Xu = !0);
        let Yu = "",
          hu = 0,
          Du = 0;
        if (Uu) {
          for (let ju = 0; ju < uu.length; ju++) {
            const Eu = uu[ju].Ysu();
            hu += Eu ? Eu.length / 3 : 0
          }
          const Eu = new ArrayBuffer(84 + 50 * hu);
          Yu = new DataView(Eu), Du += 80, Yu.setUint32(Du, hu, Zu), Du += 4
        } else qu || (Yu = "solid stlmesh\r\n");
        for (let su = 0; su < uu.length; su++) {
          const Eu = uu[su];
          !Uu && qu && (Yu += "solid " + Eu.name + "\r\n"), !Xu && Eu instanceof Cs.d && Eu.bakeCurrentTransformIntoVertices();
          const ju = Ou(Eu),
            lu = Eu.Ysu() || [];
          for (let uu = 0; uu < lu.length; uu += 3) {
            const Eu = fu(lu, ju, uu);
            Uu ? (Du = bu(Yu, Du, Eu.n, Zu), Du = bu(Yu, Du, Eu.v[0], Zu), Du = bu(Yu, Du, Eu.v[1], Zu), Du = bu(Yu, Du, Eu.v[2], Zu), Du += 2) : (Yu += "\tfacet normal " + Eu.n.x + " " + Eu.n.y + " " + Eu.n.z + "\r\n", Yu += "\t\touter loop\r\n", Yu += "\t\t\tvertex " + Eu.v[0].x + " " + Eu.v[0].y + " " + Eu.v[0].z + "\r\n", Yu += "\t\t\tvertex " + Eu.v[1].x + " " + Eu.v[1].y + " " + Eu.v[1].z + "\r\n", Yu += "\t\t\tvertex " + Eu.v[2].x + " " + Eu.v[2].y + " " + Eu.v[2].z + "\r\n", Yu += "\t\tendloop\r\n", Yu += "\tendfacet\r\n")
          }!Uu && qu && (Yu += "endsolid " + name + "\r\n")
        }
        if (Uu || qu || (Yu += "endsolid stlmesh"), Eu) {
          const uu = document.createElement("a"),
            Eu = new Blob([Yu], {
              type: "application/octet-stream"
            });
          uu.href = window.URL.createObjectURL(Eu), uu.download = ju + ".stl", uu.click()
        }
        return Yu
      }
    }

    function CX(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        su = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Uu = [];
      for (let Zu = 0; Zu < uu.length / ju; Zu++) {
        const Xu = uu[Zu * ju] * (su ? -1 : 1),
          lu = uu[Zu * ju + 1],
          qu = uu[Zu * ju + 2];
        Uu.push(`(${Xu.toPrecision(Eu.precision)}, ${lu.toPrecision(Eu.precision)}, ${qu.toPrecision(Eu.precision)})`)
      }
      return Uu.join(", ")
    }

    function bX(uu, Eu) {
      const ju = [];
      for (let su = 0; su < uu.length / 2; su++) {
        const Uu = uu[2 * su],
          Zu = uu[2 * su + 1];
        ju.push(`(${Uu.toPrecision(Eu.precision)}, ${(1-Zu).toPrecision(Eu.precision)})`)
      }
      return ju.join(", ")
    }

    function cX(uu, Eu, ju, su) {
      const Uu = uu.getVerticesData(Cu.e.PositionKind),
        Zu = uu.getVerticesData(Cu.e.NormalKind);
      if (Uu && Zu) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${ju}"\n\t\tint[] faceVertexCounts = [${function(uu){const Eu=uu.Ysu()?.length?uu.getTotalIndices():uu.getTotalVertices();return Array(Eu/3).fill(3).join(", ")}(uu)}]\n\t\tint[] faceVertexIndices = [${function(uu){const Eu=uu.Ysu(),ju=Eu?.length??uu.getTotalVertices(),su=[];if(null!==Eu)for(let Uu=0;Uu<ju;Uu++)su.push(Eu[Uu]);else for(let Uu=0;Uu<ju;Uu++)su.push(Uu);return su.join(", ")}(uu)}]\n\t\tnormal3f[] normals = [${CX(Zu,Eu,void 0,su)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${CX(Uu,Eu,void 0,su)}]\n        ${function(uu,Eu){let ju="";for(let Uu=0;Uu<4;Uu++){const su=Uu>0?Uu:"",Zu=uu.getVerticesData(Cu.e.UVKind+(su?su+1:""));Zu&&(ju+=`\n\t\ttexCoord2f[] primvars:st${su} = [${bX(Zu,Eu)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const su=uu.getVerticesData(Cu.e.ColorKind);return su&&(ju+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        CX(su, Eu, su.length / uu.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),ju}(uu,Eu)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function NX(uu, Eu, ju, su) {
      return `\n        def "Geometry"\n        {\n        ${cX(uu,Eu,ju,su)}\n        }\n        `
    }

    function OX(uu) {
      let Eu = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return Eu += uu, fflate.strToU8(Eu)
    }

    function YX(uu) {
      const Eu = uu.m;
      return `( ${hX(Eu,0)}, ${hX(Eu,4)}, ${hX(Eu,8)}, ${hX(Eu,12)} )`
    }

    function hX(uu, Eu) {
      return `(${uu[Eu+0]}, ${uu[Eu+1]}, ${uu[Eu+2]}, ${uu[Eu+3]})`
    }

    function DX(uu, Eu) {
      const ju = "Object_" + uu.uniqueId,
        su = YX(Eu);
      return `def Xform "${ju}" (\n\tprepend references = @./geometries/Geometry_${uu.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${su}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${uu.material.uniqueId}>\n}\n\n`
    }

    function gX(uu) {
      switch (uu) {
        case wu.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case wu.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case wu.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function MX(uu) {
      return `(${uu.x}, ${uu.y})`
    }

    function eX(uu) {
      return `(${uu.r}, ${uu.g}, ${uu.b})`
    }

    function GX(uu) {
      return "image/jpeg" === uu || "image/png" === uu
    }

    function pX(uu, Eu, ju, Uu, Zu, Xu) {
      const lu = uu.getInternalTexture().uniqueId + "_" + uu.invertY,
        fu = uu.mimeType || (0, qu.e)(uu.getInternalTexture()?.url ?? ""),
        Cu = GX(fu) ? fu : "image/png",
        bu = "image/jpeg" === Cu ? "jpg" : "png";
      Zu[lu] = {
        texture: uu,
        mimeType: Cu,
        ext: bu
      };
      const cu = uu.coordinatesIndex > 0 ? "st" + uu.coordinatesIndex : "st",
        Nu = new su.Vector2(uu.uScale, uu.vScale),
        Ou = new su.Vector2(uu.uOffset, uu.vOffset),
        Yu = uu.wAng,
        hu = Math.sin(Yu),
        Du = Math.cos(Yu);
      return Ou.y = 1 - Ou.y - Nu.y, Ou.x += hu * Nu.x, Ou.y += (1 - Du) * Nu.y, `\n    def Shader "PrimvarReader_${ju}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${cu}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${ju}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${Eu.uniqueId}/PrimvarReader_${ju}.outputs:result>\n        float inputs:rotation = ${(Yu*(180/Math.PI)).toFixed(Xu.precision)}\n        float2 inputs:scale = ${MX(Nu)}\n        float2 inputs:translation = ${MX(Ou)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${uu.uniqueId}_${ju}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${lu}.${bu}@\n        float2 inputs:st.connect = </Root/Materials/Material_${Eu.uniqueId}/Transform2d_${ju}.outputs:result>\n        ${Uu?"float4 inputs:scale = "+function(uu){return`(${uu.r}, ${uu.g}, ${uu.b}, 1.0)`}(Uu):""}\n        token inputs:sourceColorSpace = "${uu.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${gX(uu.wrapU)}"\n        token inputs:wrapT = "${gX(uu.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${Eu.needAlphaBlending()||Eu.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function wX(uu, Eu, ju) {
      const su = "\t\t\t",
        Uu = [],
        Zu = [],
        {
          diffuseMap: Xu,
          diffuse: lu,
          alphaCutOff: qu,
          emissiveMap: fu,
          emissive: Cu,
          normalMap: bu,
          roughnessMap: cu,
          roughnessChannel: Nu,
          roughness: Ou,
          metalnessMap: Yu,
          metalnessChannel: Du,
          metalness: gu,
          aoMap: Mu,
          aoMapChannel: eu,
          aoMapIntensity: Gu,
          alphaMap: pu,
          ior: wu,
          clearCoatEnabled: Ju,
          clearCoat: du,
          clearCoatMap: au,
          clearCoatRoughness: Pu,
          clearCoatRoughnessMap: ou
        } = function(uu) {
          const Eu = {
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
          return uu instanceof Xs.StandardMaterial ? {
            ...Eu,
            diffuseMap: uu.diffuseTexture,
            diffuse: uu.diffuseColor,
            alphaCutOff: uu.alphaCutOff,
            emissiveMap: uu.emissiveTexture,
            emissive: uu.emissiveColor,
            roughness: 1,
            alphaMap: uu.opacityTexture
          } : uu instanceof pE ? {
            ...Eu,
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
          } : Eu
        }(uu);
      return null !== Xu ? (Uu.push(`${su}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Xu.uniqueId}_diffuse.outputs:rgb>`), uu.needAlphaBlending() ? Uu.push(`${su}float inputs:opacity.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Xu.uniqueId}_diffuse.outputs:a>`) : uu.needAlphaTesting() && (Uu.push(`${su}float inputs:opacity.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Xu.uniqueId}_diffuse.outputs:a>`), Uu.push(`${su}float inputs:opacityThreshold = ${qu}`)), Zu.push(pX(Xu, uu, "diffuse", lu, Eu, ju))) : Uu.push(`${su}color3f inputs:diffuseColor = ${eX(lu||hu.Color3.White())}`), null !== fu ? (Uu.push(`${su}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${fu.uniqueId}_emissive.outputs:rgb>`), Zu.push(pX(fu, uu, "emissive", Cu, Eu, ju))) : Cu && Cu.toLuminance() > 0 && Uu.push(`${su}color3f inputs:emissiveColor = ${eX(Cu)}`), null !== bu && (Uu.push(`${su}normal3f inputs:normal.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${bu.uniqueId}_normal.outputs:rgb>`), Zu.push(pX(bu, uu, "normal", null, Eu, ju))), null !== Mu && (Uu.push(`${su}float inputs:occlusion.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Mu.uniqueId}_occlusion.outputs:${eu}>`), Zu.push(pX(Mu, uu, "occlusion", new hu.Color3(Gu, Gu, Gu), Eu, ju))), null !== cu ? (Uu.push(`${su}float inputs:roughness.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${cu.uniqueId}_roughness.outputs:${Nu}>`), Zu.push(pX(cu, uu, "roughness", new hu.Color3(Ou, Ou, Ou), Eu, ju))) : Uu.push(`${su}float inputs:roughness = ${Ou}`), null !== Yu ? (Uu.push(`${su}float inputs:metallic.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${Yu.uniqueId}_metallic.outputs:${Du}>`), Zu.push(pX(Yu, uu, "metallic", new hu.Color3(gu, gu, gu), Eu, ju))) : Uu.push(`${su}float inputs:metallic = ${gu}`), null !== pu ? (Uu.push(`${su}float inputs:opacity.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${pu.uniqueId}_opacity.outputs:r>`), Uu.push(`${su}float inputs:opacityThreshold = 0.0001`), Zu.push(pX(pu, uu, "opacity", null, Eu, ju))) : Uu.push(`${su}float inputs:opacity = ${uu.alpha}`), Ju && (null !== au ? (Uu.push(`${su}float inputs:clearcoat.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${au.uniqueId}_clearcoat.outputs:r>`), Zu.push(pX(au, uu, "clearcoat", new hu.Color3(du, du, du), Eu, ju))) : Uu.push(`${su}float inputs:clearcoat = ${du}`), null !== ou ? (Uu.push(`${su}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${uu.uniqueId}/Texture_${ou.uniqueId}_clearcoatRoughness.outputs:g>`), Zu.push(pX(ou, uu, "clearcoatRoughness", new hu.Color3(Pu, Pu, Pu), Eu, ju))) : Uu.push(`${su}float inputs:clearcoatRoughness = ${Pu}`)), Uu.push(`${su}float inputs:ior = ${wu}`), `\n\tdef Material "Material_${uu.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${Uu.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${uu.uniqueId}/PreviewSurface.outputs:surface>\n\n${Zu.join("\n")}\n\n\t}\n`
    }

    function JX(uu) {
      uu.computeWorldMatrix(!0);
      const Eu = uu.getWorldMatrix().clone(),
        ju = uu.hV().useRightHandedSystem;
      let su = uu.material?._getEffectiveOrientation(uu) ?? uu.sideOrientation,
        Xu = !ju,
        lu = uu.parent;
      for (; lu;) {
        if (rj(lu, ju) && null === lu.parent) {
          ju || (Eu.multiplyToRef(lu.getWorldMatrix().invert(), Eu), su = su === Zu.b.ClockWiseSideOrientation ? Zu.b.CounterClockWiseSideOrientation : Zu.b.ClockWiseSideOrientation), Xu = !1;
          break
        }
        lu = lu.parent
      }
      return Eu.determinant() < 0 && Uu.Tools.Warn(`Mesh ${uu.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: Eu,
        windingOrder: su === Zu.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: Xu
      }
    }
    async function dX(uu, Eu, ju) {
      const Zu = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...Eu
      };
      "undefined" === typeof fflate && await Uu.Tools.LoadScriptAsync(Zu.fflateUrl);
      const Xu = {};
      Xu[Zu.modelFileName] = null;
      let lu = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      lu += function(uu) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===uu.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${uu.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${uu.planeAnchoringAlignment}"`:""}\n            `
      }(Zu);
      const qu = {};
      for (const su of uu.meshes) {
        if (0 === su.getTotalVertices()) continue;
        const uu = su,
          Eu = uu.geometry,
          fu = uu.material;
        if (!fu || !Eu || ju && !ju(uu)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(fu.getClassName())) {
          const ju = "geometries/Geometry_" + Eu.uniqueId + ".usda",
            {
              matrix: su,
              windingOrder: Uu,
              convertToRightHanded: Cu
            } = JX(uu);
          if (!(ju in Xu)) {
            const uu = NX(Eu, Zu, Uu, Cu);
            Xu[ju] = OX(uu)
          }
          fu.uniqueId in qu || (qu[fu.uniqueId] = fu), lu += DX(uu, su)
        } else Uu.Tools.Warn("USDZExportAsync does not support this material type: " + fu.getClassName())
      }
      uu.activeCamera && Zu.exportCamera && (lu += function(uu, Eu) {
        const ju = "Camera_" + uu.uniqueId,
          Uu = YX(su.Matrix.RotationY(Math.PI).multiply(uu.getWorldMatrix()));
        if (uu.mode === wu.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${ju}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Uu}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${uu.minZ.toPrecision(Eu.precision)}, ${uu.maxZ.toPrecision(Eu.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(uu.orthoLeft||1)+Math.abs(uu.orthoRight||1))).toPrecision(Eu.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(uu.orthoTop||1)+Math.abs(uu.orthoBottom||1))).toPrecision(Eu.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const su = uu.wO().getAspectRatio(uu),
            Zu = Eu.cameraSensorWidth || 35;
          return `def Camera "${ju}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Uu}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${uu.minZ.toPrecision(Eu.precision)}, ${uu.maxZ.toPrecision(Eu.precision)})\n\t\t\tfloat focalLength = ${(Zu/(2*Math.tan(.5*uu.fov))).toPrecision(Eu.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(Zu*su).toPrecision(Eu.precision)}\n\t\t\tfloat verticalAperture = ${(Zu/su).toPrecision(Eu.precision)}            \n\t\t}\n\t\n\t`
        }
      }(uu.activeCamera, Zu)), lu += "\n            }\n        }";
      const fu = {};
      lu += function(uu, Eu, ju) {
        const su = [];
        for (const Uu in uu) {
          const Zu = uu[Uu];
          su.push(wX(Zu, Eu, ju))
        }
        return `\n    def "Materials"\n{\n${su.join("")}\n}\n\n`
      }(qu, fu, Zu), lu += "\n    }", Xu[Zu.modelFileName] = fflate.strToU8(lu);
      for (const su in fu) {
        const {
          texture: uu,
          ext: Eu,
          mimeType: ju
        } = fu[su], Uu = await Dj(uu);
        if (Uu && GX(Uu.mimeType) && Uu.mimeType === ju) Xu[`textures/Texture_${su}.${Eu}`] = new Uint8Array(Uu.data);
        else {
          const Uu = uu.getSize(),
            Zu = await (0, eu.e)(uu),
            lu = await Ju.DumpTools.DumpDataAsync(Uu.width, Uu.height, Zu, ju, void 0, !1, !0);
          Xu[`textures/Texture_${su}.${Eu}`] = new Uint8Array(lu).slice()
        }
      }
      let Cu = 0;
      for (const su in Xu) {
        const uu = Xu[su];
        if (!uu) continue;
        Cu += 34 + su.length;
        const Eu = 63 & Cu;
        if (4 !== Eu) {
          const ju = new Uint8Array(64 - Eu);
          Xu[su] = [uu, {
            extra: {
              12345: ju
            }
          }]
        }
        Cu = uu.length
      }
      return fflate.zipSync(Xu, {
        level: 0
      })
    }
    var aX = ju(41321);
    class PX {
      static Export(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (!uu || 0 === uu.bones.length) throw new Error("Invalid or empty skeleton provided");
        let su = Eu;
        Eu && 0 !== Eu.length || (su = uu.animations.map((uu => uu.name)));
        let Uu = null;
        for (const fu of su) {
          const Eu = uu.getAnimationRange(fu);
          Eu && (Uu = Uu ? new aX.b("animation-range", Math.min(Uu.from, Eu.from), Math.max(Uu.to, Eu.to)) : Eu)
        }
        if (!Uu && (uu.animations.length > 0 && (Uu = uu.getAnimationRange(uu.animations[0].name)), !Uu)) throw new Error("No animation range found in skeleton");
        const Zu = ju || 1 / (uu.animations[0]?.framePerSecond || 30),
          Xu = this._BuildBoneHierarchy(uu, su);
        let lu = 0;
        for (const fu of Xu) fu.positionKeys.length > 0 && (lu = Math.max(lu, fu.positionKeys.length)), fu.rotationKeys.length > 0 && (lu = Math.max(lu, fu.rotationKeys.length));
        0 === lu && (lu = Math.floor((Uu.to - Uu.from) / Zu) + 1);
        let qu = "";
        return qu += "HIERARCHY\n", qu += this._ExportHierarchy(Xu, 0), qu += "MOTION\n", qu += `Frames: ${lu}\n`, qu += `Frame Time: ${Zu.toFixed(6)}\n`, qu += this._ExportMotionData(Xu, lu, 0, su), qu
      }
      static _BuildBoneHierarchy(uu, Eu) {
        const ju = new Map,
          su = [];
        for (const Uu of uu.bones) {
          const uu = {
            bone: Uu,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          ju.set(Uu, uu)
        }
        for (const Uu of uu.bones) {
          const uu = ju.get(Uu);
          if (Uu.animations.length > 0)
            for (const ju of Uu.animations) Eu.includes(ju.name) && ("position" === ju.targetProperty ? (uu.hasPositionChannels = !0, uu.positionKeys.push(...ju.getKeys())) : "rotationQuaternion" === ju.targetProperty && (uu.hasRotationChannels = !0, uu.rotationKeys.push(...ju.getKeys())));
          if (Uu.getParent()) {
            const Eu = ju.get(Uu.getParent());
            Eu && Eu.children.push(uu)
          } else su.push(uu)
        }
        return su
      }
      static _ExportHierarchy(uu, Eu) {
        let ju = "";
        const su = "    ".repeat(Eu);
        for (const Uu of uu) {
          const uu = Uu.bone;
          if (this._IsEndSite(Uu)) {
            ju += `${su}End Site\n`, ju += `${su}{\n`;
            const Eu = this._GetBoneOffset(uu);
            ju += `${su}    OFFSET ${Eu.x.toFixed(6)} ${Eu.y.toFixed(6)} ${Eu.z.toFixed(6)}\n`, ju += `${su}}\n`
          } else {
            ju += `${0===Eu?"ROOT":`${su}JOINT`} ${uu.name}\n`, ju += `${su}{\n`;
            const Zu = this._GetBoneOffset(uu);
            ju += `${su}    OFFSET ${Zu.x.toFixed(6)} ${Zu.y.toFixed(6)} ${Zu.z.toFixed(6)}\n`;
            const Xu = [];
            Uu.hasPositionChannels && Xu.push("Xposition", "Yposition", "Zposition"), Uu.hasRotationChannels && Xu.push("Zrotation", "Xrotation", "Yrotation"), Xu.length > 0 && (ju += `${su}    CHANNELS ${Xu.length} ${Xu.join(" ")}\n`), Uu.children.length > 0 && (ju += this._ExportHierarchy(Uu.children, Eu + 1)), ju += `${su}}\n`
          }
        }
        return ju
      }
      static _IsEndSite(uu) {
        return 0 === uu.children.length
      }
      static _GetBoneOffset(uu) {
        try {
          if (!uu.getParent()) return uu.getRestMatrix().getTranslation();
          return uu.getLocalMatrix().getTranslation()
        } catch (Eu) {
          return su.dO.Zero()
        }
      }
      static _ExportMotionData(uu, Eu, ju, su) {
        let Uu = "";
        for (let Zu = 0; Zu < Eu; Zu++) {
          const Eu = [];
          this._CollectFrameValues(uu, Zu + ju, Eu, su), Uu += Eu.map((uu => uu.toFixed(6))).join(" ") + "\n"
        }
        return Uu
      }
      static _CollectFrameValues(uu, Eu, ju, su) {
        for (const Uu of uu)
          if (!this._IsEndSite(Uu)) {
            if (Uu.hasPositionChannels) {
              const uu = this._GetPositionAtFrameIndex(Uu.positionKeys, Eu);
              ju.push(uu.x, uu.y, uu.z)
            }
            if (Uu.hasRotationChannels) {
              const uu = this._GetRotationAtFrameIndex(Uu.rotationKeys, Eu),
                su = this._QuaternionToEuler(uu);
              ju.push(su.z, su.x, su.y)
            }
            Uu.children.length > 0 && this._CollectFrameValues(Uu.children, Eu, ju, su)
          }
      }
      static _GetPositionAtFrameIndex(uu, Eu) {
        if (0 === uu.length) return su.dO.Zero();
        return uu[Math.max(0, Math.min(Eu, uu.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(uu, Eu) {
        if (0 === uu.length) return su.Quaternion.Identity();
        return uu[Math.max(0, Math.min(Eu, uu.length - 1))].value.clone()
      }
      static _QuaternionToEuler(uu) {
        const Eu = new su.Matrix;
        uu.toRotationMatrix(Eu);
        const ju = Eu.m;
        let Zu, Xu, lu;
        const qu = Math.sqrt(ju[0] * ju[0] + ju[1] * ju[1]);
        return qu > Kj.c ? (Zu = Math.atan2(ju[6], ju[10]), Xu = Math.atan2(-ju[2], qu), lu = Math.atan2(ju[1], ju[0])) : (Zu = Math.atan2(-ju[9], ju[5]), Xu = Math.atan2(-ju[2], qu), lu = 0), new su.dO(Uu.Tools.ToDegrees(Zu), Uu.Tools.ToDegrees(Xu), Uu.Tools.ToDegrees(lu))
      }
    }

    function oX(uu) {
      return "string" === typeof uu?.name
    }
    const kX = Symbol("__xml:meta$__"),
      mX = Symbol("__xml:name$__");

    function vX(uu, Eu) {
      Object.prototype.hasOwnProperty.call(uu.metadata, kX) || (uu.metadata[kX] = []), uu.metadata[kX].push(Eu)
    }

    function KX(uu) {
      return (Eu, ju) => {
        Eu[mX] = uu
      }
    }

    function VX() {
      return (uu, Eu) => vX(Eu, {
        kind: "none",
        prop: String(Eu.name),
        ignore: !0
      })
    }

    function rX(uu) {
      return (Eu, ju) => vX(ju, {
        kind: "attr",
        prop: String(ju.name),
        ...uu
      })
    }

    function QX(uu) {
      return (Eu, ju) => vX(ju, {
        kind: "elem",
        prop: String(ju.name),
        ...uu
      })
    }

    function iX(uu) {
      const Eu = "function" === typeof uu ? uu : uu?.constructor,
        ju = Eu?.[Symbol.metadata];
      if (!ju) return [];
      const su = [];
      let Uu = ju;
      for (; Uu;) Object.prototype.hasOwnProperty.call(Uu, kX) && su.push(...Uu[kX]), Uu = Object.getPrototypeOf(Uu);
      return su
    }

    function WX(uu) {
      const Eu = uu?.constructor?.[mX];
      return Eu || void 0
    }

    function SX(uu) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(uu)
    }

    function IX(uu) {
      if (oX(uu)) return uu;
      const Eu = (uu ?? "").trim();
      if (!Eu) return {
        name: ""
      };
      const ju = Eu.indexOf(":");
      if (-1 === ju) return {
        name: Eu
      };
      if (-1 !== Eu.indexOf(":", ju + 1)) return {
        name: Eu
      };
      const su = Eu.slice(0, ju),
        Uu = Eu.slice(ju + 1);
      return SX(su) && SX(Uu) ? {
        ns: su,
        name: Uu
      } : {
        name: Eu
      }
    }

    function FX(uu, Eu) {
      return Eu ? `${Eu}:${uu}` : uu
    }
    const BX = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      LX = Object.freeze({
        number: BX
      });

    function tX(uu) {
      const Eu = uu?.eps ?? BX.eps;
      return {
        eps: Eu,
        maxDecimalsCap: uu?.maxDecimalsCap ?? BX.maxDecimalsCap,
        trimTrailingZeros: uu?.trimTrailingZeros ?? BX.trimTrailingZeros,
        fixedDecimals: uu?.fixedDecimals,
        allowScientific: uu?.allowScientific ?? BX.allowScientific,
        snapNearZero: uu?.snapNearZero ?? BX.snapNearZero,
        zeroThreshold: uu?.zeroThreshold ?? Eu,
        perAttributeEps: uu?.perAttributeEps
      }
    }

    function xX(uu) {
      return {
        number: tX(uu?.number)
      }
    }
    class TX {
      constructor(uu) {
        if (this.o = uu, this._o = uu.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(uu) {
        if (!Number.isFinite(uu)) throw new Error(`Cannot format non-finite number: ${uu}`);
        const Eu = this._o,
          ju = this._clampInt(Eu.maxDecimalsCap ?? 15, 0, 20),
          su = Eu.trimTrailingZeros ?? !0,
          Uu = Eu.snapNearZero ?? !0,
          Zu = Eu.zeroThreshold ?? Eu.eps,
          Xu = 1 / Eu.eps;
        let lu, qu = Math.round(uu * Xu) / Xu;
        if (Object.is(qu, -0) && (qu = 0), Uu && Math.abs(qu) <= Zu && (qu = 0), lu = void 0 !== Eu.fixedDecimals ? this._clampInt(Eu.fixedDecimals, 0, ju) : this._clampInt(Math.ceil(-Math.log10(Eu.eps)), 0, ju), Eu.allowScientific, 0 === lu) return String(Math.trunc(qu));
        let fu = qu.toFixed(lu);
        if (su && void 0 === Eu.fixedDecimals && (fu = fu.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(fu)) throw new Error(`Scientific notation not allowed in XML output: ${fu}`);
        return fu
      }
      _clampInt(uu, Eu, ju) {
        return Number.isFinite(uu) ? (uu = Math.trunc(uu), Math.max(Eu, Math.min(ju, uu))) : Eu
      }
    }

    function HX(uu) {
      return uu instanceof Date
    }

    function AX(uu) {
      return "string" === typeof uu
    }

    function nX(uu) {
      return "string" === typeof uu || "number" === typeof uu || "boolean" === typeof uu || "bigint" === typeof uu || HX(uu)
    }

    function yX(uu) {
      return "number" === typeof uu || "boolean" === typeof uu || "bigint" === typeof uu || HX(uu)
    }
    class zX {
      constructor(uu, Eu) {
        this._ns = new Map, this._prefixCount = 0, this._builder = uu, this._format = xX(Eu), this._nFmt = new TX(this._format)
      }
      withNamespace() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        for (const su of Eu) this._assignNamespace(su);
        return this
      }
      serialize(uu, Eu) {
        if (!(Eu = Eu ?? WX(uu))) throw new Error("can not find name for given object");
        const ju = IX(Eu);
        ju.ns && this._assignNamespace(ju.ns, "xmlns"), this._gatherNamespaces(uu, new WeakSet);
        const su = this._builder.ele(null, ju.name);
        for (const [Uu, Zu] of Array.from(this._ns.entries())) su.att("xmlns", Zu, Uu);
        this._writeObjectContent(su, uu, (new WeakSet).add(uu)), this._builder.end()
      }
      _writeObject(uu, Eu, ju) {
        if (ju.has(Eu)) return;
        if (ju.add(Eu), Array.isArray(Eu)) {
          for (const su of Eu) yX(su) || (AX(su) ? this._builder.text(su) : this._writeObject(uu, su, ju));
          return
        }
        const su = WX(Eu);
        if (!su) return;
        const Uu = IX(su),
          Zu = this._getPrefix(Uu),
          Xu = FX(Uu.name, Zu);
        uu.ele(null, Xu), this._writeObjectContent(uu, Eu, ju), this._builder.end()
      }
      _getPrefix(uu) {
        if (uu.ns) {
          const Eu = this._ns.get(uu.ns.toLowerCase());
          if ("xmlns" !== Eu) return Eu
        }
      }
      _writeObjectContent(uu, Eu, ju) {
        const su = iX(Eu) ?? [],
          Uu = new Map;
        for (const Xu of su) {
          const uu = Uu.get(Xu.prop) ?? [];
          uu.push(Xu), Uu.set(Xu.prop, uu)
        }
        const Zu = Object.keys(Eu).sort(((uu, Eu) => {
          const ju = (Uu.get(uu) ?? []).some((uu => "attr" === uu.kind));
          return ju === (Uu.get(Eu) ?? []).some((uu => "attr" === uu.kind)) ? 0 : ju ? -1 : 1
        }));
        for (const Xu of Zu) {
          const su = Eu[Xu];
          if (null === su || void 0 === su) continue;
          const Zu = Uu.get(Xu);
          if (Zu) {
            if (Zu.some((uu => !0 === uu.ignore || "none" === uu.kind))) continue;
            for (const Eu of Zu) {
              const ju = Eu.name ?? Eu.prop.toLowerCase();
              if (ju) switch (Eu.kind) {
                case "attr": {
                  let Uu = null;
                  if ("number" === typeof su && this._nFmt && (Uu = this._nFmt.toString(su)), Eu.formatter) {
                    Uu = new Eu.formatter(this._format).toString(su)
                  }
                  if (Uu = Uu ?? su.toString(), Uu) {
                    const Eu = IX(ju),
                      su = this._getPrefix(Eu),
                      Zu = FX(Eu.name, su);
                    uu.att(null, Zu, Uu)
                  }
                  break
                }
              }
            }
          } else yX(su) || (AX(su) ? this._builder.text(su) : this._writeObject(uu, su, ju))
        }
      }
      _gatherNamespaces(uu, Eu) {
        if (Eu.has(uu)) return;
        if (Eu.add(uu), Array.isArray(uu)) {
          for (const ju of uu) nX(ju) || this._gatherNamespaces(ju, Eu);
          return
        }
        const ju = WX(uu);
        ju && this._assignNamespace(ju);
        const su = iX(uu) ?? [],
          Uu = new Map;
        for (const Xu of su) {
          const uu = Uu.get(Xu.prop) ?? [];
          uu.push(Xu), Uu.set(Xu.prop, uu)
        }
        const Zu = [];
        for (const Xu of Object.keys(uu)) {
          const Eu = uu[Xu];
          if (null === Eu || void 0 === Eu) continue;
          const ju = Uu.get(Xu);
          if (ju) {
            if (ju.some((uu => !0 === uu.ignore || "none" === uu.kind))) continue;
            for (const uu of ju) uu.name && this._assignNamespace(uu.name)
          }
          Zu.push(Eu)
        }
        for (const Xu of Zu) nX(Xu) || this._gatherNamespaces(Xu, Eu)
      }
      _assignNamespace(uu, Eu) {
        const ju = IX(uu);
        if (ju?.ns) {
          const uu = ju.ns.toLowerCase();
          this._ns.get(uu) || this._ns.set(uu, Eu ?? this._buildNsPrefix(uu))
        } else if ("xmlns" === Eu) {
          const uu = ju.name.toLowerCase();
          this._ns.get(uu) || this._ns.set(uu, Eu ?? this._buildNsPrefix(uu))
        }
      }
      _buildNsPrefix(uu) {
        let Eu, ju = !1;
        do {
          Eu = "ns" + this._prefixCount++;
          for (const uu of Array.from(this._ns.values()))
            if (uu === Eu) {
              ju = !0;
              break
            }
        } while (ju);
        return Eu
      }
    }
    class RX {}
    var ul;
    RX.OpenTag = "<", RX.CloseTag = ">", RX.Slash = "/", RX.Question = "?", RX.Quote = '"', RX.Equal = "=", RX.Space = " ", RX.Semicolon = ":", RX.Dec = "<?xml", RX.Xml = "xml", RX.Xmlns = "xmlns", RX.Xsi = "xsi", RX.VersionKeyword = "version", RX.EncodingKeyword = "encoding", RX.StandaloneKeyword = "standalone",
      function(uu) {
        uu[uu.Declaration = 0] = "Declaration", uu[uu.Tag = 1] = "Tag", uu[uu.Attribute = 2] = "Attribute", uu[uu.Text = 3] = "Text"
      }(ul || (ul = {}));
    class El {
      constructor(uu) {
        this._ctxStack = [], this._d = 0, this._w = uu
      }
      dec(uu, Eu, ju) {
        return this._w.write(RX.Dec), this._writeAttStr(RX.VersionKeyword, uu), Eu && this._writeAttStr(RX.EncodingKeyword, Eu), void 0 !== ju && this._writeAttStr(RX.StandaloneKeyword, ju ? "yes" : "no"), this._w.write(RX.Question, RX.CloseTag), this
      }
      att(uu, Eu, ju) {
        const su = this._peekContext();
        if (!su) throw new Error("att() without open element");
        if (su.closed) throw new Error(`att() after start tag closed for <${su.name}>`);
        if (this._isXmlnsDecl(uu, Eu)) {
          if (Eu === RX.Xmlns) su.defaultNs = ju, this._registerNamespace(su, "", ju), this._writeAttStr(RX.Xmlns, ju);
          else if (uu) this._registerNamespace(su, Eu, ju), this._writeAttStr(`${uu}:${Eu}`, ju);
          else {
            const uu = Eu.slice(6);
            this._registerNamespace(su, uu, ju), this._writeAttStr(Eu, ju)
          }
          return su.lastToken = ul.Attribute, this
        }
        let Uu = Eu;
        if (uu) {
          Uu = `${this._ensurePrefixDeclared(su,uu)}:${Eu}`
        }
        return su.lastToken = ul.Attribute, this._writeAttStr(Uu, ju), this
      }
      ele(uu, Eu) {
        const ju = this._peekContext();
        ju && this._closeOpenTagIfNeeded(ju);
        let su = Eu;
        if (uu) {
          su = `${this._lookupPrefix(uu)??uu}:${Eu}`
        }
        return this._pushContext(su, ++this._d), this._w.write(RX.OpenTag, su), this
      }
      text(uu) {
        const Eu = this._peekContext();
        if (!Eu) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(Eu), Eu.lastToken = ul.Text, this._w.write(this._escText(uu)), this
      }
      end() {
        const uu = this._popContext();
        return uu && (this._d--, uu.closed ? this._w.write(RX.OpenTag, RX.Slash, uu.name, RX.CloseTag) : this._w.write(RX.Slash, RX.CloseTag)), this
      }
      _pushContext(uu, Eu) {
        const ju = new El.Context(uu, Eu);
        return this._ctxStack.push(ju), ju
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
      _writeAttStr(uu, Eu) {
        this._w.write(RX.Space, uu, RX.Equal, RX.Quote, this._escAttr(Eu), RX.Quote)
      }
      _lookupPrefix(uu) {
        let Eu = this._ctxStack.length - 1;
        if (Eu >= 0)
          do {
            const ju = this._ctxStack[Eu--],
              su = ju.ns2prefix?.get(uu);
            if (su) return su
          } while (Eu >= 0)
      }
      _escText(uu) {
        return uu.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(uu) {
        return this._escText(uu).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(uu, Eu) {
        if (uu) return uu === RX.Xmlns;
        const ju = Eu.length,
          su = RX.Xmlns.length;
        return ju >= su && (Eu.startsWith(RX.Xmlns) && (Eu.length == su || Eu[su] == RX.Semicolon))
      }
      _registerNamespace(uu, Eu, ju) {
        if (Eu === RX.Xml || Eu === RX.Xmlns) throw new Error(`reserved prefix '${Eu}'`);
        const su = uu.prefix2ns.get(Eu);
        if (su && su !== ju) throw new Error(`prefix '${Eu}' already bound to a different namespace`);
        uu.ns2prefix.get(ju) || uu.ns2prefix.set(ju, Eu), uu.prefix2ns.set(Eu, ju)
      }
      _allocPrefix(uu) {
        let Eu = 1;
        for (;;) {
          const ju = "ns" + Eu++;
          if (!uu.prefix2ns.has(ju)) return ju
        }
      }
      _ensurePrefixDeclared(uu, Eu) {
        const ju = this._lookupPrefix(Eu);
        if (ju) return ju;
        if (uu.closed) throw new Error(`can not declare namespace after start tag closed for <${uu.name}>`);
        const su = this._allocPrefix(uu);
        return this._writeAttStr(`${RX.Xmlns}:${su}`, Eu), this._registerNamespace(uu, su, Eu), su
      }
      _closeOpenTagIfNeeded(uu) {
        uu.closed || (this._w.write(RX.CloseTag), uu.closed = !0)
      }
    }
    El.Context = class {
      constructor(uu, Eu) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = uu, this.depth = Eu
      }
    };
    class jl {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        if (0 === Eu.length) return this;
        const su = Eu.join("");
        return this._chunks.push(su), this.count += su.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class sl {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = uu, this._opts = Eu, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var uu = arguments.length, Eu = new Array(uu), ju = 0; ju < uu; ju++) Eu[ju] = arguments[ju];
        if (0 === Eu.length) return this;
        const su = Eu.join("");
        if (0 === su.length) return this;
        this._pending += su, this._pendingChars += su.length;
        const Uu = this._opts.flushChars ?? 65536;
        return this._pendingChars >= Uu && this.flush(), this
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
    const Ul = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      Zl = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var Xl, ll;
    ! function(uu) {
      uu.micron = "micron", uu.millimeter = "millimeter", uu.centimeter = "centimeter", uu.inch = "inch", uu.foot = "foot", uu.meter = "meter"
    }(Xl || (Xl = {})),
    function(uu) {
      uu.model = "model", uu.solidsupport = "solidsupport", uu.support = "support", uu.surface = "surface", uu.other = "other"
    }(ll || (ll = {}));
    const ql = "http://schemas.openxmlformats.org/package/2006/content-types",
      fl = "http://schemas.openxmlformats.org/package/2006/relationships";
    var Cl;
    ! function(uu) {
      uu.Relationships = "application/vnd.openxmlformats-package.relationships+xml", uu.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", uu.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", uu.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", uu.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", uu.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", uu.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", uu.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", uu.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", uu.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", uu.Png = "image/png", uu.Jpeg = "image/jpeg", uu.Tiff = "image/tiff", uu.Xml = "application/xml"
    }(Cl || (Cl = {}));
    const bl = "_rels/",
      cl = "3D/",
      Nl = "3dmodel.model",
      Ol = ".rels",
      Yl = "[Content_Types].xml";
    class hl {
      static IsKnown(uu) {
        return hl.Known.has(uu)
      }
      static IsThreeDimModel(uu) {
        return uu === hl.ThreeDimModel
      }
    }
    hl.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", hl.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", hl.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", hl.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", hl.Known = new Set([hl.ThreeDimModel, hl.Thumbnail, hl.PrintTicket, hl.MustPreserve]);
    let Dl = (() => {
        let uu, Eu, ju = [KX({
            ns: ql,
            name: "Types"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.items = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfContentTypes"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      gl = (() => {
        let uu, Eu, ju, su, Uu = [KX({
            ns: ql,
            name: "Default"
          })],
          Zu = [],
          Xu = [],
          lu = [],
          qu = [],
          fu = [];
        Eu = class {
          constructor(uu, Eu) {
            this.ext = (0, du.g)(this, Xu, void 0), this.ct = ((0, du.g)(this, lu), (0, du.g)(this, qu, void 0)), (0, du.g)(this, fu), this.ext = uu, this.ct = Eu
          }
        };
        return (0, du.h)(Eu, "ThreeMfContentType"), (() => {
          const Cu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: {
              ns: ql,
              name: "Extension"
            }
          })], su = [rX({
            name: {
              ns: ql,
              name: "ContentType"
            }
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: uu => "ext" in uu,
              get: uu => uu.ext,
              set: (uu, Eu) => {
                uu.ext = Eu
              }
            },
            metadata: Cu
          }, Xu, lu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: uu => "ct" in uu,
              get: uu => uu.ct,
              set: (uu, Eu) => {
                uu.ct = Eu
              }
            },
            metadata: Cu
          }, qu, fu), (0, du.e)(null, uu = {
            value: Eu
          }, Uu, {
            kind: "class",
            name: Eu.name,
            metadata: Cu
          }, null, Zu), Eu = uu.value, Cu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Cu
          }), (0, du.g)(Eu, Zu)
        })(), Eu
      })(),
      Ml = (() => {
        let uu, Eu, ju = [KX({
            ns: fl,
            name: "Relationships"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.items = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfRelationships"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      el = (() => {
        let uu, Eu, ju, su, Uu, Zu = [KX({
            ns: fl,
            name: "Relationship"
          })],
          Xu = [],
          lu = [],
          qu = [],
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        Eu = class {
          constructor(uu, Eu, ju) {
            this.id = (0, du.g)(this, lu, void 0), this.type = ((0, du.g)(this, qu), (0, du.g)(this, fu, void 0)), this.target = ((0, du.g)(this, Cu), (0, du.g)(this, bu, void 0)), (0, du.g)(this, cu), this.id = uu, this.type = Eu, this.target = ju
          }
        };
        return (0, du.h)(Eu, "ThreeMfRelationship"), (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "Id"
          })], su = [rX({
            name: "Type"
          })], Uu = [rX({
            name: "Target"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: uu => "id" in uu,
              get: uu => uu.id,
              set: (uu, Eu) => {
                uu.id = Eu
              }
            },
            metadata: Nu
          }, lu, qu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: uu => "type" in uu,
              get: uu => uu.type,
              set: (uu, Eu) => {
                uu.type = Eu
              }
            },
            metadata: Nu
          }, fu, Cu), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: uu => "target" in uu,
              get: uu => uu.target,
              set: (uu, Eu) => {
                uu.target = Eu
              }
            },
            metadata: Nu
          }, bu, cu), (0, du.e)(null, uu = {
            value: Eu
          }, Zu, {
            kind: "class",
            name: Eu.name,
            metadata: Nu
          }, null, Xu), Eu = uu.value, Nu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          }), (0, du.g)(Eu, Xu)
        })(), Eu
      })();
    class Gl {
      constructor(uu, Eu, ju) {
        this.contentTypes = uu, this.relationships = Eu, this.model = ju
      }
    }
    class pl {
      static Zero() {
        return new pl([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(uu) {
        this.values = uu
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class wl {
      constructor(uu) {
        this.o = uu, this._f = new TX(uu)
      }
      toString(uu) {
        return uu.values.map((uu => this._f.toString(uu))).join(" ")
      }
    }
    let Jl = (() => {
        let uu, Eu, ju, su, Uu, Zu = [KX({
            ns: Ul,
            name: "model"
          })],
          Xu = [],
          lu = [],
          qu = [],
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        Eu = class {
          constructor() {
            this.unit = (0, du.g)(this, lu, Xl.millimeter), this.requiredextensions = ((0, du.g)(this, qu), (0, du.g)(this, fu, void 0)), this.recommendedextensions = ((0, du.g)(this, Cu), (0, du.g)(this, bu, void 0)), this.metadata = (0, du.g)(this, cu)
          }
        };
        return (0, du.h)(Eu, "ThreeMfModel"), (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "unit"
          })], su = [rX({
            name: "requiredextensions"
          })], Uu = [rX({
            name: "recommendedextensions"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: uu => "unit" in uu,
              get: uu => uu.unit,
              set: (uu, Eu) => {
                uu.unit = Eu
              }
            },
            metadata: Nu
          }, lu, qu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: uu => "requiredextensions" in uu,
              get: uu => uu.requiredextensions,
              set: (uu, Eu) => {
                uu.requiredextensions = Eu
              }
            },
            metadata: Nu
          }, fu, Cu), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: uu => "recommendedextensions" in uu,
              get: uu => uu.recommendedextensions,
              set: (uu, Eu) => {
                uu.recommendedextensions = Eu
              }
            },
            metadata: Nu
          }, bu, cu), (0, du.e)(null, uu = {
            value: Eu
          }, Zu, {
            kind: "class",
            name: Eu.name,
            metadata: Nu
          }, null, Xu), Eu = uu.value, Nu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          })
        })(), Eu.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, du.g)(Eu, Xu), Eu
      })(),
      dl = (() => {
        let uu, Eu, ju, su, Uu, Zu = [KX({
            ns: Ul,
            name: "meta"
          })],
          Xu = [],
          lu = [],
          qu = [],
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        Eu = class {
          constructor(uu, Eu, ju, su) {
            this.name = (0, du.g)(this, lu, void 0), this.preserve = ((0, du.g)(this, qu), (0, du.g)(this, fu, void 0)), this.type = ((0, du.g)(this, Cu), (0, du.g)(this, bu, void 0)), this.value = (0, du.g)(this, cu), this.name = uu, this.value = Eu, this.preserve = ju, this.type = su
          }
        };
        return (0, du.h)(Eu, "ThreeMfMeta"), (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "name"
          })], su = [rX({
            name: "preserve"
          })], Uu = [rX({
            name: "type"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Eu) => {
                uu.name = Eu
              }
            },
            metadata: Nu
          }, lu, qu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: uu => "preserve" in uu,
              get: uu => uu.preserve,
              set: (uu, Eu) => {
                uu.preserve = Eu
              }
            },
            metadata: Nu
          }, fu, Cu), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: uu => "type" in uu,
              get: uu => uu.type,
              set: (uu, Eu) => {
                uu.type = Eu
              }
            },
            metadata: Nu
          }, bu, cu), (0, du.e)(null, uu = {
            value: Eu
          }, Zu, {
            kind: "class",
            name: Eu.name,
            metadata: Nu
          }, null, Xu), Eu = uu.value, Nu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          }), (0, du.g)(Eu, Xu)
        })(), Eu
      })(),
      al = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "metadatagroup"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfMetadataGroup"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      Pl = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "resources"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.object = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfResources"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      ol = (() => {
        let uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu = [KX({
            ns: Ul,
            name: "object"
          })],
          Cu = [],
          bu = [],
          cu = [],
          Nu = [],
          Ou = [],
          Yu = [],
          hu = [],
          Du = [],
          gu = [],
          Mu = [],
          eu = [],
          Gu = [],
          pu = [],
          wu = [],
          Ju = [];
        Eu = class {
          constructor(uu) {
            let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ll.model;
            this.id = (0, du.g)(this, bu, void 0), this.type = ((0, du.g)(this, cu), (0, du.g)(this, Nu, void 0)), this.thumbnail = ((0, du.g)(this, Ou), (0, du.g)(this, Yu, void 0)), this.partnumber = ((0, du.g)(this, hu), (0, du.g)(this, Du, void 0)), this.name = ((0, du.g)(this, gu), (0, du.g)(this, Mu, void 0)), this.pid = ((0, du.g)(this, eu), (0, du.g)(this, Gu, void 0)), this.pindex = ((0, du.g)(this, pu), (0, du.g)(this, wu, void 0)), this.metadatagroup = (0, du.g)(this, Ju), this.id = uu, this.type = Eu
          }
        };
        return (0, du.h)(Eu, "ThreeMfObject"), (() => {
          const au = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "id"
          })], su = [rX({
            name: "type"
          })], Uu = [rX({
            name: "thumbnail"
          })], Zu = [rX({
            name: "partnumber"
          })], Xu = [rX({
            name: "name"
          })], lu = [rX({
            name: "pid"
          })], qu = [rX({
            name: "pindex"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: uu => "id" in uu,
              get: uu => uu.id,
              set: (uu, Eu) => {
                uu.id = Eu
              }
            },
            metadata: au
          }, bu, cu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: uu => "type" in uu,
              get: uu => uu.type,
              set: (uu, Eu) => {
                uu.type = Eu
              }
            },
            metadata: au
          }, Nu, Ou), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: uu => "thumbnail" in uu,
              get: uu => uu.thumbnail,
              set: (uu, Eu) => {
                uu.thumbnail = Eu
              }
            },
            metadata: au
          }, Yu, hu), (0, du.e)(null, null, Zu, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: uu => "partnumber" in uu,
              get: uu => uu.partnumber,
              set: (uu, Eu) => {
                uu.partnumber = Eu
              }
            },
            metadata: au
          }, Du, gu), (0, du.e)(null, null, Xu, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Eu) => {
                uu.name = Eu
              }
            },
            metadata: au
          }, Mu, eu), (0, du.e)(null, null, lu, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: uu => "pid" in uu,
              get: uu => uu.pid,
              set: (uu, Eu) => {
                uu.pid = Eu
              }
            },
            metadata: au
          }, Gu, pu), (0, du.e)(null, null, qu, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: uu => "pindex" in uu,
              get: uu => uu.pindex,
              set: (uu, Eu) => {
                uu.pindex = Eu
              }
            },
            metadata: au
          }, wu, Ju), (0, du.e)(null, uu = {
            value: Eu
          }, fu, {
            kind: "class",
            name: Eu.name,
            metadata: au
          }, null, Cu), Eu = uu.value, au && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: au
          }), (0, du.g)(Eu, Cu)
        })(), Eu
      })(),
      kl = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "mesh"
          })],
          su = [];
        Eu = class {
          constructor(uu, Eu) {
            this.vertices = uu ?? new ml, this.triangles = Eu ?? new Kl
          }
        };
        return (0, du.h)(Eu, "ThreeMfMesh"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      ml = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "vertices"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfVertices"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      vl = (() => {
        let uu, Eu, ju, su, Uu, Zu = [KX({
            ns: Ul,
            name: "vertex"
          })],
          Xu = [],
          lu = [],
          qu = [],
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        Eu = class {
          constructor() {
            let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, du.g)(this, lu, void 0), this.y = ((0, du.g)(this, qu), (0, du.g)(this, fu, void 0)), this.z = ((0, du.g)(this, Cu), (0, du.g)(this, bu, void 0)), (0, du.g)(this, cu), this.x = uu, this.y = Eu, this.z = ju
          }
        };
        return (0, du.h)(Eu, "ThreeMfVertex"), (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "x"
          })], su = [rX({
            name: "y"
          })], Uu = [rX({
            name: "z"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: uu => "x" in uu,
              get: uu => uu.x,
              set: (uu, Eu) => {
                uu.x = Eu
              }
            },
            metadata: Nu
          }, lu, qu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: uu => "y" in uu,
              get: uu => uu.y,
              set: (uu, Eu) => {
                uu.y = Eu
              }
            },
            metadata: Nu
          }, fu, Cu), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: uu => "z" in uu,
              get: uu => uu.z,
              set: (uu, Eu) => {
                uu.z = Eu
              }
            },
            metadata: Nu
          }, bu, cu), (0, du.e)(null, uu = {
            value: Eu
          }, Zu, {
            kind: "class",
            name: Eu.name,
            metadata: Nu
          }, null, Xu), Eu = uu.value, Nu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          }), (0, du.g)(Eu, Xu)
        })(), Eu
      })(),
      Kl = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "triangles"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfTriangles"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      Vl = (() => {
        let uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu = [KX({
            ns: Ul,
            name: "triangle"
          })],
          Cu = [],
          bu = [],
          cu = [],
          Nu = [],
          Ou = [],
          Yu = [],
          hu = [],
          Du = [],
          gu = [],
          Mu = [],
          eu = [],
          Gu = [],
          pu = [],
          wu = [],
          Ju = [];
        Eu = class {
          constructor(uu, Eu, ju) {
            this.v1 = (0, du.g)(this, bu, void 0), this.v2 = ((0, du.g)(this, cu), (0, du.g)(this, Nu, void 0)), this.v3 = ((0, du.g)(this, Ou), (0, du.g)(this, Yu, void 0)), this.p1 = ((0, du.g)(this, hu), (0, du.g)(this, Du, void 0)), this.p2 = ((0, du.g)(this, gu), (0, du.g)(this, Mu, void 0)), this.p3 = ((0, du.g)(this, eu), (0, du.g)(this, Gu, void 0)), this.pid = ((0, du.g)(this, pu), (0, du.g)(this, wu, void 0)), (0, du.g)(this, Ju), this.v1 = uu, this.v2 = Eu, this.v3 = ju
          }
        };
        return (0, du.h)(Eu, "ThreeMfTriangle"), (() => {
          const au = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "v1"
          })], su = [rX({
            name: "v2"
          })], Uu = [rX({
            name: "v3"
          })], Zu = [rX({
            name: "p1"
          })], Xu = [rX({
            name: "p2"
          })], lu = [rX({
            name: "p3"
          })], qu = [rX({
            name: "pid"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: uu => "v1" in uu,
              get: uu => uu.v1,
              set: (uu, Eu) => {
                uu.v1 = Eu
              }
            },
            metadata: au
          }, bu, cu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: uu => "v2" in uu,
              get: uu => uu.v2,
              set: (uu, Eu) => {
                uu.v2 = Eu
              }
            },
            metadata: au
          }, Nu, Ou), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: uu => "v3" in uu,
              get: uu => uu.v3,
              set: (uu, Eu) => {
                uu.v3 = Eu
              }
            },
            metadata: au
          }, Yu, hu), (0, du.e)(null, null, Zu, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: uu => "p1" in uu,
              get: uu => uu.p1,
              set: (uu, Eu) => {
                uu.p1 = Eu
              }
            },
            metadata: au
          }, Du, gu), (0, du.e)(null, null, Xu, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: uu => "p2" in uu,
              get: uu => uu.p2,
              set: (uu, Eu) => {
                uu.p2 = Eu
              }
            },
            metadata: au
          }, Mu, eu), (0, du.e)(null, null, lu, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: uu => "p3" in uu,
              get: uu => uu.p3,
              set: (uu, Eu) => {
                uu.p3 = Eu
              }
            },
            metadata: au
          }, Gu, pu), (0, du.e)(null, null, qu, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: uu => "pid" in uu,
              get: uu => uu.pid,
              set: (uu, Eu) => {
                uu.pid = Eu
              }
            },
            metadata: au
          }, wu, Ju), (0, du.e)(null, uu = {
            value: Eu
          }, fu, {
            kind: "class",
            name: Eu.name,
            metadata: au
          }, null, Cu), Eu = uu.value, au && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: au
          }), (0, du.g)(Eu, Cu)
        })(), Eu
      })(),
      rl = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "components"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.component = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfComponents"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      Ql = (() => {
        let uu, Eu, ju, su, Uu = [KX({
            ns: Ul,
            name: "component"
          })],
          Zu = [],
          Xu = [],
          lu = [],
          qu = [],
          fu = [];
        Eu = class {
          constructor(uu, Eu) {
            this.objectid = (0, du.g)(this, Xu, void 0), this.transform = ((0, du.g)(this, lu), (0, du.g)(this, qu, void 0)), (0, du.g)(this, fu), this.objectid = uu, this.transform = Eu
          }
        };
        return (0, du.h)(Eu, "ThreeMfComponent"), (() => {
          const Cu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "objectid"
          })], su = [rX({
            name: "transform",
            formatter: wl
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: uu => "objectid" in uu,
              get: uu => uu.objectid,
              set: (uu, Eu) => {
                uu.objectid = Eu
              }
            },
            metadata: Cu
          }, Xu, lu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: uu => "transform" in uu,
              get: uu => uu.transform,
              set: (uu, Eu) => {
                uu.transform = Eu
              }
            },
            metadata: Cu
          }, qu, fu), (0, du.e)(null, uu = {
            value: Eu
          }, Uu, {
            kind: "class",
            name: Eu.name,
            metadata: Cu
          }, null, Zu), Eu = uu.value, Cu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Cu
          }), (0, du.g)(Eu, Zu)
        })(), Eu
      })(),
      il = (() => {
        let uu, Eu, ju, su = [KX({
            ns: Ul,
            name: "basematerials"
          })],
          Uu = [],
          Zu = [],
          Xu = [];
        Eu = class {
          constructor(uu) {
            this.id = (0, du.g)(this, Zu, void 0), this.base = ((0, du.g)(this, Xu), []), this.id = uu
          }
        };
        return (0, du.h)(Eu, "ThreeMfBaseMaterials"), (() => {
          const lu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "id"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: uu => "id" in uu,
              get: uu => uu.id,
              set: (uu, Eu) => {
                uu.id = Eu
              }
            },
            metadata: lu
          }, Zu, Xu), (0, du.e)(null, uu = {
            value: Eu
          }, su, {
            kind: "class",
            name: Eu.name,
            metadata: lu
          }, null, Uu), Eu = uu.value, lu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lu
          }), (0, du.g)(Eu, Uu)
        })(), Eu
      })(),
      Wl = (() => {
        let uu, Eu, ju, su, Uu = [KX({
            ns: Ul,
            name: "base"
          })],
          Zu = [],
          Xu = [],
          lu = [],
          qu = [],
          fu = [];
        Eu = class {
          constructor(uu, Eu) {
            this.name = (0, du.g)(this, Xu, void 0), this.displaycolor = ((0, du.g)(this, lu), (0, du.g)(this, qu, void 0)), (0, du.g)(this, fu), this.name = uu, this.displaycolor = Eu
          }
        };
        return (0, du.h)(Eu, "ThreeMfBase"), (() => {
          const Cu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "name"
          })], su = [rX({
            name: "displaycolor"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Eu) => {
                uu.name = Eu
              }
            },
            metadata: Cu
          }, Xu, lu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: uu => "displaycolor" in uu,
              get: uu => uu.displaycolor,
              set: (uu, Eu) => {
                uu.displaycolor = Eu
              }
            },
            metadata: Cu
          }, qu, fu), (0, du.e)(null, uu = {
            value: Eu
          }, Uu, {
            kind: "class",
            name: Eu.name,
            metadata: Cu
          }, null, Zu), Eu = uu.value, Cu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Cu
          }), (0, du.g)(Eu, Zu)
        })(), Eu
      })(),
      Sl = (() => {
        let uu, Eu, ju = [KX({
            ns: Ul,
            name: "build"
          })],
          su = [];
        Eu = class {
          constructor() {
            this.item = []
          }
        };
        return (0, du.h)(Eu, "ThreeMfBuild"), (() => {
          const Uu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, du.e)(null, uu = {
            value: Eu
          }, ju, {
            kind: "class",
            name: Eu.name,
            metadata: Uu
          }, null, su), Eu = uu.value, Uu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Uu
          }), (0, du.g)(Eu, su)
        })(), Eu
      })(),
      Il = (() => {
        let uu, Eu, ju, su, Uu, Zu = [KX({
            ns: Ul,
            name: "item"
          })],
          Xu = [],
          lu = [],
          qu = [],
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        Eu = class {
          constructor(uu, Eu, ju) {
            this.objectid = (0, du.g)(this, lu, void 0), this.transform = ((0, du.g)(this, qu), (0, du.g)(this, fu, void 0)), this.partnumber = ((0, du.g)(this, Cu), (0, du.g)(this, bu, void 0)), this.metadatagroup = (0, du.g)(this, cu), this.objectid = uu, this.transform = Eu, this.partnumber = ju
          }
        };
        return (0, du.h)(Eu, "ThreeMfItem"), (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ju = [rX({
            name: "objectid"
          })], su = [rX({
            name: "transform",
            formatter: wl
          })], Uu = [rX({
            name: "partnumber"
          })], (0, du.e)(null, null, ju, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: uu => "objectid" in uu,
              get: uu => uu.objectid,
              set: (uu, Eu) => {
                uu.objectid = Eu
              }
            },
            metadata: Nu
          }, lu, qu), (0, du.e)(null, null, su, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: uu => "transform" in uu,
              get: uu => uu.transform,
              set: (uu, Eu) => {
                uu.transform = Eu
              }
            },
            metadata: Nu
          }, fu, Cu), (0, du.e)(null, null, Uu, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: uu => "partnumber" in uu,
              get: uu => uu.partnumber,
              set: (uu, Eu) => {
                uu.partnumber = Eu
              }
            },
            metadata: Nu
          }, bu, cu), (0, du.e)(null, uu = {
            value: Eu
          }, Zu, {
            kind: "class",
            name: Eu.name,
            metadata: Nu
          }, null, Xu), Eu = uu.value, Nu && Object.defineProperty(Eu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          }), (0, du.g)(Eu, Xu)
        })(), Eu
      })();
    class Fl {
      constructor(uu, Eu) {
        this._object = new ol(uu, Eu)
      }
      withName(uu) {
        return this._object.name = uu, this
      }
      withThumbnail(uu) {
        return this._object.thumbnail = uu, this
      }
      withProperty(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = uu, this._object.id = Eu, this
      }
      build() {
        return this._object
      }
      reset(uu, Eu) {
        this._object = new ol(uu, Eu)
      }
    }
    class Bl extends Fl {
      constructor(uu) {
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ll.model), this._object.content = new rl
      }
      withComponent(uu, Eu) {
        return this._object.content.component.push(new Ql(uu, Eu)), this
      }
    }
    class Ll extends Fl {
      constructor(uu) {
        super(uu, ll.model)
      }
      withPostProcessHandlers(uu, Eu) {
        return this._vh = uu, this._th = Eu, this
      }
      withData(uu) {
        return this._object.content = this._buildMesh(uu), this
      }
      withMaterial(uu, Eu) {
        return this._object.pid = uu, this._object.pindex = Eu, this
      }
      _buildMesh(uu) {
        const Eu = this._buildVertices(uu.positions),
          ju = this._buildTriangle(uu.indices);
        return new kl(Eu, ju)
      }
      _buildVertices(uu) {
        const Eu = new ml;
        if (uu)
          for (let ju = 0; ju < uu.length;) {
            const su = uu[ju++],
              Uu = uu[ju++],
              Zu = uu[ju++];
            let Xu = new vl(su, Uu, Zu);
            this._vh && (Xu = this._vh(Xu)), Eu.vertex.push(Xu)
          }
        return Eu
      }
      _buildTriangle(uu) {
        const Eu = new Kl;
        if (uu)
          for (let ju = 0; ju < uu.length;) {
            const su = uu[ju++],
              Uu = uu[ju++],
              Zu = uu[ju++];
            let Xu = new Vl(su, Uu, Zu);
            this._th && (Xu = this._th(Xu)), Eu.triangle.push(Xu)
          }
        return Eu
      }
    }
    class tl {
      constructor(uu) {
        this._m = new il(uu)
      }
      withColor(uu, Eu) {
        this._m.base = this._m.base ?? [];
        let ju = this._m.base.find((Eu => Eu.name.toLowerCase() === uu.toLowerCase()));
        return ju ? (ju.displaycolor = this._rgbaToHex(Eu), this) : (ju = new Wl(uu, this._rgbaToHex(Eu)), this._m.base.push(ju), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(uu) {
        const Eu = uu => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(uu, 1 / 2.2)))),
          ju = Eu(uu.r).toString(16).padStart(2, "0").toUpperCase(),
          su = Eu(uu.g).toString(16).padStart(2, "0").toUpperCase(),
          Uu = Eu(uu.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof uu.a) {
          return `#${ju}${su}${Uu}${Math.round(Math.min(255,Math.max(0,255*uu.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${ju}${su}${Uu}`
      }
    }
    class xl {
      constructor() {
        this._model = new Jl, this._objects = new Map
      }
      withMetaData(uu, Eu, ju, su) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new dl(uu, Eu, ju, su)), this
      }
      withMaterial(uu) {
        return uu instanceof tl && (uu = uu.build()), uu && (this._model.resources = this._model.resources ?? new Pl, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(uu)), this
      }
      withMesh(uu) {
        return uu instanceof Ll && (uu = uu.build()), this._model.resources = this._model.resources ?? new Pl, this._model.resources.object.push(uu), this
      }
      withComponents(uu) {
        return uu instanceof Bl && (uu = uu.build()), this._model.resources = this._model.resources ?? new Pl, this._model.resources.object.push(uu), this
      }
      withBuild(uu, Eu, ju) {
        return this._model.build = this._model.build ?? new Sl, this._model.build.item?.push(new Il(uu, Eu, ju)), this
      }
      withUnit(uu) {
        return this._model.unit = uu, this
      }
      reset() {
        return this._model = new Jl, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    xl.KnownMetaSet = new Set(Jl.KnownMeta.map((uu => uu.toLowerCase())));
    class Tl {
      withContentType(uu) {
        this._cts || (this._cts = new Dl);
        const Eu = this._cts.items;
        return Eu.some((Eu => Eu.ext === uu.ext && Eu.ct === uu.ct)) || Eu.push(uu), this
      }
      withRelationship(uu) {
        this._rs || (this._rs = new Ml);
        const Eu = this._rs.items;
        return Eu.some((Eu => Eu.id === uu.id)) || Eu.push(uu), this.withContentType(new gl("rels", Cl.Relationships)), this
      }
      withModel(uu) {
        return uu instanceof xl && (uu = uu.build()), this._m = uu, this.withContentType(new gl("model", Cl.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const uu = `${cl}${Nl}`;
        if (!this._rs) {
          const Eu = `/${uu}`;
          this.withRelationship(new el("rel0", hl.ThreeDimModel, Eu))
        }
        return new Gl(this._cts, this._rs, this._m)
      }
    }
    class Hl {
      constructor(uu) {
        this._o = uu
      }
      get options() {
        return this._o
      }
      async serializeAsync(uu) {
        const Eu = await this.ensureZipLibReadyAsync();
        if (!Eu) return;
        const ju = Eu.Zip,
          su = Eu.ZipDeflate;
        if (!ju || !su) throw new Error("fflate Zip / ZipDeflate not available");
        const Uu = function(uu, Eu, ju) {
          const Uu = new su(Eu, {
            level: 6
          });
          uu.add(Uu);
          const Zu = function(uu) {
              return {
                push: (Eu, ju) => uu.push(Eu, ju)
              }
            }(Uu),
            Xu = new sl(Zu),
            lu = new El(Xu).dec("1.0", "UTF-8");
          new zX(lu).serialize(ju), Xu.finish()
        };
        for (var Zu = arguments.length, Xu = new Array(Zu > 1 ? Zu - 1 : 0), lu = 1; lu < Zu; lu++) Xu[lu - 1] = arguments[lu];
        const qu = this.toDocument(...Xu);
        if (!qu) return;
        const fu = new ju(uu);
        Uu(fu, Yl, qu.contentTypes), Uu(fu, `${bl}${Ol}`, qu.relationships), Uu(fu, `${cl}${Nl}`, qu.model), fu.end()
      }
      toDocument() {
        const uu = (new xl).withUnit(this._o?.unit ?? Xl.millimeter);
        if (this.options.metadata)
          for (const Uu in this.options.metadata) uu.withMetaData(Uu, this.options.metadata[Uu]);
        for (var Eu = arguments.length, ju = new Array(Eu), su = 0; su < Eu; su++) ju[su] = arguments[su];
        return (new Tl).withModel(this.toModel(uu, ...ju)).build()
      }
    }
    class Al {
      static async SerializeToMemoryAsync(uu) {
        const Eu = new Array;
        let ju = 0;
        for (var su = arguments.length, Uu = new Array(su > 1 ? su - 1 : 0), Zu = 1; Zu < su; Zu++) Uu[Zu - 1] = arguments[Zu];
        if (await uu.serializeAsync((function(uu, su, Uu) {
            Eu.push(su), ju += su.length
          }), ...Uu), !ju) return;
        const Xu = new Uint8Array(ju);
        let lu = 0;
        for (const qu of Eu) Xu.set(qu, lu), lu += qu.length;
        return Xu
      }
    }
    class nl {}
    nl.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class yl {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = uu, this._to = Eu, this._step = ju, this._i = uu
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
    class zl extends Hl {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...zl.DefaultOptions,
          ...uu
        })
      }
      toModel(uu) {
        for (var Eu = arguments.length, ju = new Array(Eu > 1 ? Eu - 1 : 0), su = 1; su < Eu; su++) ju[su - 1] = arguments[su];
        ju = ju.filter((uu => uu instanceof Cs.d || uu instanceof Nu.c));
        const Uu = new yl,
          Zu = uu,
          Xu = new Map,
          lu = this.options.exportInstances ? [] : null;
        for (let qu = 0; qu < ju.length; qu++) {
          const uu = ju[qu];
          if (uu instanceof Nu.c) {
            lu?.push(uu);
            continue
          }
          const Eu = uu.name || `mesh${qu}`,
            su = uu.getWorldMatrix(),
            fu = this._handleBabylonTo3mfMatrixTransformToRef(su, pl.Zero()),
            Cu = uu.iG;
          if (void 0 === Cu) continue;
          const bu = 1 == Cu.length;
          for (let ju = 0; ju < Cu.length; ju++) {
            const su = Cu[ju],
              lu = this._extractSubMesh(uu, su);
            if (lu) {
              const uu = bu ? `${Eu}` : `${Eu}_${ju}`,
                qu = new Ll(Uu.next()).withData(lu).withName(uu).build();
              Zu.withMesh(qu), Zu.withBuild(qu.id, fu), Xu.set(su, qu)
            }
          }
        }
        if (lu && lu.length) {
          const uu = this._groupBy(lu, (uu => uu.CUu));
          for (const [Eu, ju] of Array.from(uu.entries()))
            if (ju && ju.length)
              for (let uu = 0; uu < ju.length; uu++) {
                const su = ju[uu].getWorldMatrix(),
                  Uu = Eu.iG;
                for (let uu = 0; uu < Uu.length; uu++) {
                  const Eu = Uu[uu],
                    ju = Xu.get(Eu);
                  ju && Zu.withBuild(ju.id, this._handleBabylonTo3mfMatrixTransformToRef(su, pl.Zero()))
                }
              }
        }
        return Zu.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const uu = globalThis;
          return uu.fflate || await Uu.Tools.LoadScriptAsync(nl.FFLATEUrl), uu.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(uu, Eu) {
        const ju = uu.Ysu();
        if (!ju) return;
        const su = uu.getVerticesData(zl._PositionKind);
        if (!su) return;
        if (0 == Eu.indexStart && Eu.indexCount == ju.length) return {
          positions: su,
          indices: ju
        };
        const Uu = Eu.indexStart,
          Zu = new Map,
          Xu = [],
          lu = new Uint32Array(Eu.indexCount);
        for (let qu = 0; qu < Eu.indexCount; qu++) {
          const uu = ju[Uu + qu];
          let Eu = Zu.get(uu);
          if (void 0 === Eu) {
            Eu = Zu.size, Zu.set(uu, Eu);
            const ju = 3 * uu;
            Xu.push(su[ju], su[ju + 1], su[ju + 2])
          }
          lu[qu] = Eu
        }
        return {
          positions: new Float32Array(Xu),
          indices: lu
        }
      }
      _groupBy(uu, Eu) {
        const ju = new Map;
        for (const su of uu) {
          const uu = Eu(su),
            Uu = ju.get(uu);
          Uu ? Uu.push(su) : ju.set(uu, [su])
        }
        return ju
      }
      _handleBabylonTo3mfMatrixTransformToRef(uu, Eu) {
        const ju = uu.multiplyToRef(zl._R_BJS_TO_3MF, Wu.e.Zero()).m;
        return Eu.values = [ju[0], ju[1], ju[2], ju[4], ju[5], ju[6], ju[8], ju[9], ju[10], ju[12], ju[13], ju[14]], Eu
      }
    }
    zl.DefaultOptions = {
      unit: Xl.meter,
      exportInstances: !1
    }, zl._PositionKind = "position", zl._R_BJS_TO_3MF = Wu.e.RotationX(Math.PI / 2).multiply(Wu.e.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);