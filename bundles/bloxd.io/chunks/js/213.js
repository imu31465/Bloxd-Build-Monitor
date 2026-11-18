export const id = 213;
export const ids = [213, 217];
export const modules = {
  40538: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB = dB(40463),
      yB = dB(38741);
    let pB = !1;

    function lB() {
      pB || (pB = !0, yB.b.prototype._sphericalPolynomialTargetSize = 0, yB.b.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(yB.b.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = VB.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
              this._texture._sphericalPolynomial = BB, this._texture._sphericalPolynomialComputed = !0
            }))), null
          }
          return null
        },
        set: function(BB) {
          this._texture && (this._texture._sphericalPolynomial = BB)
        },
        enumerable: !0,
        configurable: !0
      }))
    }
  },
  36180: (BB, TB, dB) => {
    dB.d(TB, {
      Color3: () => VB.c,
      d: () => VB.d
    });
    var VB = dB(36183);
    (0, VB.f)()
  },
  36688: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(36690);
    class yB {
      static GetPlanes(BB) {
        const TB = [];
        for (let dB = 0; dB < 6; dB++) TB.push(new VB.d(0, 0, 0, 0));
        return yB.GetPlanesToRef(BB, TB), TB
      }
      static GetNearPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[2], TB.normal.y = dB[7] + dB[6], TB.normal.z = dB[11] + dB[10], TB.d = dB[15] + dB[14], TB.normalize()
      }
      static GetFarPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[2], TB.normal.y = dB[7] - dB[6], TB.normal.z = dB[11] - dB[10], TB.d = dB[15] - dB[14], TB.normalize()
      }
      static GetLeftPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[0], TB.normal.y = dB[7] + dB[4], TB.normal.z = dB[11] + dB[8], TB.d = dB[15] + dB[12], TB.normalize()
      }
      static GetRightPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[0], TB.normal.y = dB[7] - dB[4], TB.normal.z = dB[11] - dB[8], TB.d = dB[15] - dB[12], TB.normalize()
      }
      static GetTopPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[1], TB.normal.y = dB[7] - dB[5], TB.normal.z = dB[11] - dB[9], TB.d = dB[15] - dB[13], TB.normalize()
      }
      static GetBottomPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[1], TB.normal.y = dB[7] + dB[5], TB.normal.z = dB[11] + dB[9], TB.d = dB[15] + dB[13], TB.normalize()
      }
      static GetPlanesToRef(BB, TB) {
        yB.GetNearPlaneToRef(BB, TB[0]), yB.GetFarPlaneToRef(BB, TB[1]), yB.GetLeftPlaneToRef(BB, TB[2]), yB.GetRightPlaneToRef(BB, TB[3]), yB.GetTopPlaneToRef(BB, TB[4]), yB.GetBottomPlaneToRef(BB, TB[5])
      }
      static IsPointInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; dB++)
          if (TB[dB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  36690: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(36126);
    class yB {
      constructor(BB, TB, dB, yB) {
        this.normal = new VB.p(BB, TB, dB), this.d = yB
      }
      FVB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let TB = 0;
        return 0 !== BB && (TB = 1 / BB), this.normal.x *= TB, this.normal.y *= TB, this.normal.z *= TB, this.d *= TB, this
      }
      transform(BB) {
        const TB = yB._TmpMatrix;
        BB.invertToRef(TB);
        const dB = TB.m,
          VB = this.normal.x,
          pB = this.normal.y,
          lB = this.normal.z,
          JB = this.d,
          YB = VB * dB[0] + pB * dB[1] + lB * dB[2] + JB * dB[3],
          gB = VB * dB[4] + pB * dB[5] + lB * dB[6] + JB * dB[7],
          oB = VB * dB[8] + pB * dB[9] + lB * dB[10] + JB * dB[11],
          kB = VB * dB[12] + pB * dB[13] + lB * dB[14] + JB * dB[15];
        return new yB(YB, gB, oB, kB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, TB, dB) {
        const VB = TB.x - BB.x,
          yB = TB.y - BB.y,
          pB = TB.z - BB.z,
          lB = dB.x - BB.x,
          JB = dB.y - BB.y,
          YB = dB.z - BB.z,
          gB = yB * YB - pB * JB,
          oB = pB * lB - VB * YB,
          kB = VB * JB - yB * lB,
          LB = Math.sqrt(gB * gB + oB * oB + kB * kB);
        let OB;
        return OB = 0 !== LB ? 1 / LB : 0, this.normal.x = gB * OB, this.normal.y = oB * OB, this.normal.z = kB * OB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, TB) {
        return VB.p.Dot(this.normal, BB) <= TB
      }
      signedDistanceTo(BB) {
        return VB.p.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new yB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, TB, dB) {
        const VB = new yB(0, 0, 0, 0);
        return VB.copyFromPoints(BB, TB, dB), VB
      }
      static FromPositionAndNormal(BB, TB) {
        const dB = new yB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, TB, dB)
      }
      static FromPositionAndNormalToRef(BB, TB, dB) {
        return dB.normal.bdB(TB), dB.normal.normalize(), dB.d = -BB.dot(dB.normal), dB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, TB, dB) {
        const yB = -(TB.x * BB.x + TB.y * BB.y + TB.z * BB.z);
        return VB.p.Dot(dB, TB) + yB
      }
    }
    yB._TmpMatrix = VB.b.Identity()
  },
  36119: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      Matrix: () => VB.b,
      Quaternion: () => VB.f,
      RegisterMathVector: () => VB.i,
      TmpVectors: () => VB.j,
      Vector2: () => VB.l,
      RD: () => VB.p,
      Vector4: () => VB.r
    });
    var VB = dB(36126);
    (0, VB.i)()
  },
  37029: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      constructor(BB, TB, dB, VB) {
        this.x = BB, this.y = TB, this.width = dB, this.height = VB
      }
      toGlobal(BB, TB) {
        return new VB(this.x * BB, this.y * TB, this.width * BB, this.height * TB)
      }
      toGlobalToRef(BB, TB, dB) {
        return dB.x = this.x * BB, dB.y = this.y * TB, dB.width = this.width * BB, dB.height = this.height * TB, this
      }
      clone() {
        return new VB(this.x, this.y, this.width, this.height)
      }
    }
  },
  40463: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => gB
    });
    var VB = dB(36126),
      yB = dB(36157),
      pB = dB(38732),
      lB = dB(36132),
      JB = dB(36183);
    class YB {
      constructor(BB, TB, dB, VB) {
        this.name = BB, this.worldAxisForNormal = TB, this.worldAxisForFileX = dB, this.worldAxisForFileY = VB
      }
    }
    class gB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.jU()?.PD().flushFramebuffer();
        const TB = BB.getSize().width,
          dB = BB._sphericalPolynomialTargetSize,
          VB = dB > 0 ? this._NearestPow2Floor(dB) : 0,
          yB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          pB = VB > 0 && VB < TB && yB,
          lB = pB ? Math.max(0, Math.round(Math.log2(TB / VB))) : 0,
          JB = pB ? Math.max(1, Math.floor(TB / Math.pow(2, lB))) : TB,
          YB = BB.readPixels(0, lB, void 0, !1),
          gB = BB.readPixels(1, lB, void 0, !1);
        let oB, kB;
        BB.isRenderTarget ? (oB = BB.readPixels(3, lB, void 0, !1), kB = BB.readPixels(2, lB, void 0, !1)) : (oB = BB.readPixels(2, lB, void 0, !1), kB = BB.readPixels(3, lB, void 0, !1));
        const LB = BB.readPixels(4, lB, void 0, !1),
          OB = BB.readPixels(5, lB, void 0, !1),
          DB = BB.gammaSpace,
          uB = VB > 0 && VB < TB && !pB;
        return new Promise((BB => {
          Promise.all([gB, YB, oB, kB, LB, OB]).then((dB => {
            let [yB, pB, lB, YB, gB, oB] = dB, kB = JB;
            if (uB) {
              const BB = 4;
              yB = this._DownsampleFace(yB, TB, VB, BB), pB = this._DownsampleFace(pB, TB, VB, BB), lB = this._DownsampleFace(lB, TB, VB, BB), YB = this._DownsampleFace(YB, TB, VB, BB), gB = this._DownsampleFace(gB, TB, VB, BB), oB = this._DownsampleFace(oB, TB, VB, BB), kB = VB
            }
            const LB = {
              size: kB,
              right: pB,
              left: yB,
              up: lB,
              down: YB,
              front: gB,
              back: oB,
              format: 5,
              type: yB instanceof Float32Array ? 1 : 0,
              gammaSpace: DB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(LB))
          }))
        }))
      }
      static _AreaElement(BB, TB) {
        return Math.atan2(BB * TB, Math.sqrt(BB * BB + TB * TB + 1))
      }
      static _DownsampleFace(BB, TB, dB, VB) {
        const yB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          pB = dB * dB * VB,
          lB = new Float32Array(pB),
          JB = TB / dB,
          YB = 1 / (JB * JB);
        for (let oB = 0; oB < dB; oB++) {
          const BB = Math.floor(oB * JB),
            pB = Math.floor((oB + 1) * JB);
          for (let gB = 0; gB < dB; gB++) {
            const kB = Math.floor(gB * JB),
              LB = Math.floor((gB + 1) * JB),
              OB = (oB * dB + gB) * VB;
            for (let dB = 0; dB < VB; dB++) {
              let JB = 0;
              for (let lB = BB; lB < pB; lB++)
                for (let BB = kB; BB < LB; BB++) JB += yB[(lB * TB + BB) * VB + dB];
              lB[OB + dB] = JB * YB
            }
          }
        }
        if (BB instanceof Float32Array) return lB;
        const gB = new(0, BB.constructor)(pB);
        for (let oB = 0; oB < pB; oB++) gB[oB] = lB[oB] + .5 | 0;
        return gB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = TB > 0 ? this._NearestPow2Floor(TB) : 0;
        if (dB > 0 && BB.size > dB) {
          const TB = 5 === BB.format ? 4 : 3,
            VB = ["right", "left", "up", "down", "front", "back"],
            yB = {};
          for (const pB of VB) yB[pB] = this._DownsampleFace(BB[pB], BB.size, dB, TB);
          BB = {
            ...BB,
            ...yB,
            size: dB
          }
        }
        const VB = new pB.b;
        let YB = 0;
        const gB = 2 / BB.size,
          oB = gB,
          kB = .5 * gB,
          LB = kB - 1;
        for (let pB = 0; pB < 6; pB++) {
          const TB = this._FileFaces[pB],
            dB = BB[TB.name];
          let OB = LB;
          const DB = 5 === BB.format ? 4 : 3;
          for (let pB = 0; pB < BB.size; pB++) {
            let uB = LB;
            for (let oB = 0; oB < BB.size; oB++) {
              const LB = TB.worldAxisForFileX.scale(uB).add(TB.worldAxisForFileY.scale(OB)).add(TB.worldAxisForNormal);
              LB.normalize();
              const HB = this._AreaElement(uB - kB, OB - kB) - this._AreaElement(uB - kB, OB + kB) - this._AreaElement(uB + kB, OB - kB) + this._AreaElement(uB + kB, OB + kB);
              let EB = dB[pB * BB.size * DB + oB * DB + 0],
                vB = dB[pB * BB.size * DB + oB * DB + 1],
                mB = dB[pB * BB.size * DB + oB * DB + 2];
              isNaN(EB) && (EB = 0), isNaN(vB) && (vB = 0), isNaN(mB) && (mB = 0), 0 === BB.type && (EB /= 255, vB /= 255, mB /= 255), BB.gammaSpace && (EB = Math.pow((0, yB.Clamp)(EB), lB.j), vB = Math.pow((0, yB.Clamp)(vB), lB.j), mB = Math.pow((0, yB.Clamp)(mB), lB.j));
              const iB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(EB, vB, mB);
                if (BB > iB) {
                  const TB = iB / BB;
                  EB *= TB, vB *= TB, mB *= TB
                }
              } else EB = (0, yB.Clamp)(EB, 0, iB), vB = (0, yB.Clamp)(vB, 0, iB), mB = (0, yB.Clamp)(mB, 0, iB);
              const NB = new JB.c(EB, vB, mB);
              VB.addLight(LB, NB, HB), YB += HB, uB += gB
            }
            OB += oB
          }
        }
        const OB = 6 * (4 * Math.PI) / 6 / YB;
        return VB.scaleInPlace(OB), VB.convertIncidentRadianceToIrradiance(), VB.convertIrradianceToLambertianRadiance(), pB.d.FromHarmonics(VB)
      }
    }
    gB._FileFaces = [new YB("right", new VB.p(1, 0, 0), new VB.p(0, 0, -1), new VB.p(0, -1, 0)), new YB("left", new VB.p(-1, 0, 0), new VB.p(0, 0, 1), new VB.p(0, -1, 0)), new YB("up", new VB.p(0, 1, 0), new VB.p(1, 0, 0), new VB.p(0, 0, 1)), new YB("down", new VB.p(0, -1, 0), new VB.p(1, 0, 0), new VB.p(0, 0, -1)), new YB("front", new VB.p(0, 0, 1), new VB.p(1, 0, 0), new VB.p(0, -1, 0)), new YB("back", new VB.p(0, 0, -1), new VB.p(-1, 0, 0), new VB.p(0, -1, 0))], gB.MAX_HDRI_VALUE = 4096, gB.PRESERVE_CLAMPED_COLORS = !1
  },
  40275: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.j,
      e: () => VB.s
    });
    var VB = dB(38790);
    (0, VB.x)()
  },
  36822: (BB, TB, dB) => {
    function VB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const TB = 16 * Math.random() | 0;
        return ("x" === BB ? TB : 3 & TB | 8).toString(16)
      }))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  40506: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(40496),
      yB = dB(40510);
    class pB {
      static ExpandRGBDTexture(BB) {
        const TB = BB._texture;
        if (!TB || !BB.isRGBD) return;
        const yB = TB.PD(),
          pB = yB.getCaps(),
          lB = TB.isReady;
        let JB = !1;
        pB.textureHalfFloatRender && pB.textureHalfFloatLinearFiltering ? (JB = !0, TB.type = 2) : pB.textureFloatRender && pB.textureFloatLinearFiltering && (JB = !0, TB.type = 1), JB && (TB.isReady = !1, TB._isRGBD = !1, TB.invertY = !1);
        const YB = async () => {
          const pB = yB.isWebGPU,
            lB = pB ? 1 : 0;
          TB.isReady = !1, pB ? await dB.e(322).then((() => dB(59938))) : await dB.e(304).then((() => dB(59942)));
          const JB = new VB.e("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, yB, !1, void 0, TB.type, void 0, null, !1, void 0, lB);
          JB.externalTextureSamplerBinding = !0;
          const YB = yB.createRenderTargetTexture(TB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: TB.samplingMode,
            type: TB.type,
            format: 5
          });
          JB.onEffectCreatedObservable.addOnce((dB => {
            dB.executeWhenCompiled((() => {
              JB.onApply = BB => {
                BB._bindTexture("textureSampler", TB), BB.setFloat2("scale", 1, 1)
              }, BB.jU()?.postProcessManager.directRender([JB], YB, !0), yB.restoreDefaultFramebuffer(), yB._releaseTexture(TB), JB && JB.dispose(), YB._swapAndDie(TB), TB.isReady = !0
            }))
          }))
        };
        JB && (lB ? YB() : BB.onLoadObservable.addOnce(YB))
      }
      static async EncodeTextureToRGBD(BB, TB) {
        let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return TB.PD().isWebGPU ? await dB.e(323).then((() => dB(59964))) : await dB.e(305).then((() => dB(59959))), await (0, yB.d)("rgbdEncode", BB, TB, VB, 1, 5)
      }
    }
  },
  59711: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AsyncLoop: () => VB.c,
      RegisterTools: () => VB.g,
      Tools: () => VB.h,
      className: () => VB.i
    });
    var VB = dB(38848);
    (0, VB.g)()
  },
  40546: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    class VB {
      constructor(BB) {
        this._pendingActions = new Array, this._workerInfos = BB.map((BB => ({
          workerPromise: Promise.resolve(BB),
          idle: !0
        })))
      }
      dispose() {
        for (const BB of this._workerInfos) BB.workerPromise.then((BB => {
          BB.terminate()
        }));
        this._workerInfos.length = 0, this._pendingActions.length = 0
      }
      push(BB) {
        this._executeOnIdleWorker(BB) || this._pendingActions.push(BB)
      }
      _executeOnIdleWorker(BB) {
        for (const TB of this._workerInfos)
          if (TB.idle) return this._execute(TB, BB), !0;
        return !1
      }
      _execute(BB, TB) {
        BB.idle = !1, BB.workerPromise.then((dB => {
          TB(dB, (() => {
            const TB = this._pendingActions.shift();
            TB ? this._execute(BB, TB) : BB.idle = !0
          }))
        }))
      }
    }
    class yB extends VB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = TB, this._options = dB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const TB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(TB), this._execute(TB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, TB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((dB, VB) => {
          TB(dB, (() => {
            VB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const TB = this._workerInfos.indexOf(BB); - 1 !== TB && this._workerInfos.splice(TB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    yB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  59741: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AbstractThreeMfSerializer: () => xJ,
      BVHExporter: () => wl,
      ContentTypeFileName: () => uJ,
      DefaultXmlSerializerFormatOptions: () => hl,
      DefaultXmlSerializerNumberOptions: () => Wl,
      EXT_lights_area: () => Ey,
      EXT_mesh_gpu_instancing: () => aV,
      EXT_texture_avif: () => ll,
      EXT_texture_webp: () => dl,
      GLTF2Export: () => PV,
      GLTFData: () => gB,
      GetXmlFieldMeta: () => Ql,
      GetXmlName: () => Rl,
      IsQualifiedName: () => Ul,
      KHR_draco_mesh_compression: () => nV,
      KHR_interactivity: () => oy,
      KHR_lights_punctual: () => ly,
      KHR_materials_anisotropy: () => Ny,
      KHR_materials_clearcoat: () => zy,
      KHR_materials_coat: () => Iy,
      KHR_materials_diffuse_roughness: () => Rp,
      KHR_materials_diffuse_transmission: () => ay,
      KHR_materials_dispersion: () => hy,
      KHR_materials_emissive_strength: () => xy,
      KHR_materials_fuzz: () => kp,
      KHR_materials_ior: () => ny,
      KHR_materials_iridescence: () => dp,
      KHR_materials_openpbr: () => Wp,
      KHR_materials_sheen: () => lp,
      KHR_materials_specular: () => Hp,
      KHR_materials_transmission: () => ip,
      KHR_materials_unlit: () => Mp,
      KHR_materials_volume: () => Fp,
      KHR_materials_volume_scatter: () => cp,
      KHR_texture_basisu: () => np,
      KHR_texture_transform: () => qp,
      Known3mfRelationshipTypes: () => HJ,
      KnownI3mfContentType: () => oJ,
      Matrix3d: () => tJ,
      MatrixFormatter: () => fJ,
      ModelFileName: () => OJ,
      NumberFormatter: () => ql,
      OBJExport: () => lB,
      Object3dDirName: () => LJ,
      OpenXmlContentTypesNamespace: () => YJ,
      OpenXmlRelationshipsNamespace: () => gJ,
      RegisterEXT_lights_area: () => my,
      RegisterEXT_mesh_gpu_instancing: () => XV,
      RegisterEXT_texture_avif: () => Yl,
      RegisterEXT_texture_webp: () => yl,
      RegisterKHR_draco_mesh_compression: () => By,
      RegisterKHR_interactivity: () => Ly,
      RegisterKHR_lights_punctual: () => Yy,
      RegisterKHR_materials_anisotropy: () => fy,
      RegisterKHR_materials_clearcoat: () => Uy,
      RegisterKHR_materials_coat: () => Sy,
      RegisterKHR_materials_diffuse_roughness: () => Zp,
      RegisterKHR_materials_diffuse_transmission: () => Xy,
      RegisterKHR_materials_dispersion: () => Gy,
      RegisterKHR_materials_emissive_strength: () => Ay,
      RegisterKHR_materials_fuzz: () => Op,
      RegisterKHR_materials_ior: () => Bp,
      RegisterKHR_materials_iridescence: () => yp,
      RegisterKHR_materials_openpbr: () => Cp,
      RegisterKHR_materials_sheen: () => Yp,
      RegisterKHR_materials_specular: () => vp,
      RegisterKHR_materials_transmission: () => tp,
      RegisterKHR_materials_unlit: () => wp,
      RegisterKHR_materials_volume: () => rp,
      RegisterKHR_materials_volume_scatter: () => Pp,
      RegisterKHR_texture_basisu: () => Bl,
      RegisterKHR_texture_transform: () => jp,
      RelationshipDirName: () => kJ,
      RelationshipFileName: () => DJ,
      ResolveFormatOptions: () => Gl,
      ResolveNumberOptions: () => Cl,
      STLExport: () => gl,
      ST_ObjectType: () => JJ,
      ST_Unit: () => lJ,
      StringXmlWriter: () => dJ,
      ThreeDimModelNamespace: () => yJ,
      ThreeMf: () => jJ,
      ThreeMfBase: () => RJ,
      ThreeMfBaseMaterials: () => QJ,
      ThreeMfBuild: () => aJ,
      ThreeMfComponent: () => PJ,
      ThreeMfComponents: () => SJ,
      ThreeMfComponentsBuilder: () => WJ,
      ThreeMfContentType: () => vJ,
      ThreeMfContentTypes: () => EJ,
      ThreeMfDocument: () => NJ,
      ThreeMfDocumentBuilder: () => qJ,
      ThreeMfItem: () => ZJ,
      ThreeMfMaterialBuilder: () => CJ,
      ThreeMfMesh: () => FJ,
      ThreeMfMeshBuilder: () => hJ,
      ThreeMfMeta: () => MJ,
      ThreeMfMetadataGroup: () => zJ,
      ThreeMfModel: () => sJ,
      ThreeMfModelBuilder: () => GJ,
      ThreeMfObject: () => UJ,
      ThreeMfObjectBuilder: () => XJ,
      ThreeMfRelationship: () => iJ,
      ThreeMfRelationships: () => mJ,
      ThreeMfResources: () => wJ,
      ThreeMfSerializer: () => nJ,
      ThreeMfSerializerGlobalConfiguration: () => AJ,
      ThreeMfTriangle: () => cJ,
      ThreeMfTriangles: () => IJ,
      ThreeMfVertex: () => rJ,
      ThreeMfVertices: () => KJ,
      ToQualifiedString: () => Xl,
      TokenType: () => BJ,
      TriangleSetsNamespace: () => pJ,
      USDZExportAsync: () => Ml,
      Utf8XmlWriterToBytes: () => VJ,
      XmlAttr: () => Sl,
      XmlBuilder: () => TJ,
      XmlElem: () => Pl,
      XmlIgnore: () => cl,
      XmlName: () => Il,
      XmlNameToParts: () => Zl,
      XmlSerializer: () => nl,
      _ConvertToGLTFPBRMetallicRoughness: () => zd,
      _SolveMetallic: () => Md,
      __IGLTFExporterExtension: () => JB
    });
    var VB = dB(36119),
      yB = dB(59711),
      pB = dB(39040);
    class lB {
      static OBJ(BB, TB, dB, lB) {
        const JB = [];
        let YB = 1,
          gB = 1;
        TB && (dB || (dB = "mat"), JB.push("mtllib " + dB + ".mtl"));
        for (let oB = 0; oB < BB.length; oB++) {
          const dB = BB[oB],
            kB = dB.name || `mesh${oB}}`;
          JB.push(`o ${kB}`);
          let LB = null;
          if (lB) {
            const BB = dB.computeWorldMatrix(!0);
            LB = new VB.Matrix, BB.invertToRef(LB), dB.bakeTransformIntoVertices(BB)
          }
          if (TB) {
            const BB = dB.material;
            BB && JB.push("usemtl " + BB.id)
          }
          const OB = dB.geometry;
          if (!OB) {
            yB.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const DB = OB.getVerticesData("position"),
            uB = OB.getVerticesData("normal"),
            HB = OB.getVerticesData("uv"),
            EB = OB.elB();
          let vB = 0,
            mB = 0;
          if (!DB || !EB) {
            yB.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const iB = BB[0].jU().useRightHandedSystem ? 1 : -1;
          for (let BB = 0; BB < DB.length; BB += 3) JB.push("v " + DB[BB] * iB + " " + DB[BB + 1] + " " + DB[BB + 2]), vB++;
          if (null != uB)
            for (let BB = 0; BB < uB.length; BB += 3) JB.push("vn " + uB[BB] * iB + " " + uB[BB + 1] + " " + uB[BB + 2]);
          if (null != HB)
            for (let BB = 0; BB < HB.length; BB += 2) JB.push("vt " + HB[BB] + " " + HB[BB + 1]), mB++;
          const NB = ["", "", ""],
            tB = (dB.material || dB.jU().defaultMaterial)._getEffectiveOrientation(dB),
            [fB, sB] = tB === pB.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let BB = 0; BB < EB.length; BB += 3) {
            const TB = [String(EB[BB] + YB), String(EB[BB + fB] + YB), String(EB[BB + sB] + YB)],
              dB = [String(EB[BB] + gB), String(EB[BB + fB] + gB), String(EB[BB + sB] + gB)],
              VB = TB,
              yB = null != HB ? dB : NB,
              pB = null != uB ? TB : NB;
            JB.push("f " + VB[0] + "/" + yB[0] + "/" + pB[0] + " " + VB[1] + "/" + yB[1] + "/" + pB[1] + " " + VB[2] + "/" + yB[2] + "/" + pB[2])
          }
          lB && LB && dB.bakeTransformIntoVertices(LB), YB += vB, gB += mB
        }
        return JB.join("\n")
      }
      static MTL(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const dB = [],
          VB = BB.material;
        dB.push("newmtl " + TB), dB.push("  Ns " + VB.specularPower.toFixed(4)), dB.push("  Ni 1.5000"), dB.push("  d " + VB.alpha.toFixed(4)), dB.push("  Tr 0.0000"), dB.push("  Tf 1.0000 1.0000 1.0000"), dB.push("  illum 2"), dB.push("  Ka " + VB.ambientColor.r.toFixed(4) + " " + VB.ambientColor.g.toFixed(4) + " " + VB.ambientColor.b.toFixed(4)), dB.push("  Kd " + VB.diffuseColor.r.toFixed(4) + " " + VB.diffuseColor.g.toFixed(4) + " " + VB.diffuseColor.b.toFixed(4)), dB.push("  Ks " + VB.specularColor.r.toFixed(4) + " " + VB.specularColor.g.toFixed(4) + " " + VB.specularColor.b.toFixed(4)), dB.push("  Ke " + VB.emissiveColor.r.toFixed(4) + " " + VB.emissiveColor.g.toFixed(4) + " " + VB.emissiveColor.b.toFixed(4));
        VB.ambientTexture && dB.push("  map_Ka " + VB.ambientTexture.name), VB.diffuseTexture && dB.push("  map_Kd " + VB.diffuseTexture.name), VB.specularTexture && dB.push("  map_Ks " + VB.specularTexture.name), VB.bumpTexture && dB.push("  map_bump -imfchan z " + VB.bumpTexture.name), VB.opacityTexture && dB.push("  map_d " + VB.opacityTexture.name);
        return dB.join("\n")
      }
    }
    var JB = 0,
      YB = dB(40275);
    class gB {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const BB in this.files) {
          const TB = this.files[BB],
            dB = new Blob([TB], {
              type: (0, YB.c)(BB)
            });
          yB.Tools.Download(dB, BB)
        }
      }
    }
    var oB = dB(39994),
      kB = dB(39949),
      LB = dB(40347),
      OB = dB(39955),
      DB = dB(38562),
      uB = dB(36148),
      HB = dB(36180),
      EB = dB(36157);
    const vB = EB.HighestCommonFactor,
      mB = {
        ...EB,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: vB
      };
    var iB = dB(40510),
      NB = dB(39976),
      tB = dB(40310),
      fB = dB(40312),
      sB = dB(40532);
    (0, sB.RegisterDumpTools)();
    var MB = dB(38745),
      zB = dB(38750),
      wB = dB(37651),
      UB = dB(38861),
      FB = dB(39218),
      KB = dB(40506);
    let rB = 0;
    const IB = (BB, TB, dB, VB) => {
        if (!BB[dB]) {
          const yB = BB.useDelayedTextureLoading;
          BB.useDelayedTextureLoading = !1;
          const pB = BB._blockEntityCollection;
          BB._blockEntityCollection = !1;
          const lB = FB.f.CreateFromBase64String(TB, VB + rB++, BB, !0, !1, FB.f.BILINEAR_SAMPLINGMODE);
          BB._blockEntityCollection = pB;
          const JB = BB.PD().getLoadedTexturesCache(),
            YB = JB.indexOf(lB.getInternalTexture()); - 1 !== YB && JB.splice(YB, 1), lB.isRGBD = !0, lB.wrapU = FB.f.CLAMP_ADDRESSMODE, lB.wrapV = FB.f.CLAMP_ADDRESSMODE, BB[dB] = lB, BB.useDelayedTextureLoading = yB, KB.b.ExpandRGBDTexture(lB);
          const gB = BB.PD().onContextRestoredObservable.add((() => {
            lB.isRGBD = !0;
            const TB = BB.onBeforeRenderObservable.add((() => {
              lB.isReady() && (BB.onBeforeRenderObservable.remove(TB), KB.b.ExpandRGBDTexture(lB))
            }))
          }));
          BB.lF.add((() => {
            BB.PD().onContextRestoredObservable.remove(gB)
          }))
        }
        return BB[dB]
      },
      cB = BB => IB(BB, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      SB = BB => IB(BB, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      PB = BB => IB(BB, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var QB = dB(38843),
      RB = dB(36126),
      aB = dB(38897),
      ZB = dB(39034),
      XB = dB(39099);
    class WB extends ZB.d {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let hB = (() => {
      var BB, TB, dB, VB, yB, pB, lB, JB, YB, gB;
      let oB, kB, LB, OB, DB, uB, HB, EB, vB, mB = XB.b,
        iB = [],
        NB = [],
        tB = [],
        fB = [],
        sB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [];
      return BB = class extends mB {
        get useEnergyConservation() {
          return (0, MB.b)(this, TB, "f")
        }
        set useEnergyConservation(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, MB.b)(this, dB, "f")
        }
        set useSmithVisibilityHeightCorrelated(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get useSphericalHarmonics() {
          return (0, MB.b)(this, VB, "f")
        }
        set useSphericalHarmonics(BB) {
          (0, MB.f)(this, VB, BB, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, MB.b)(this, yB, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(BB) {
          (0, MB.f)(this, yB, BB, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, MB.b)(this, pB, "f")
        }
        set mixIblRadianceWithIrradiance(BB) {
          (0, MB.f)(this, pB, BB, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, MB.b)(this, lB, "f")
        }
        set useLegacySpecularEnergyConservation(BB) {
          (0, MB.f)(this, lB, BB, "f")
        }
        get baseDiffuseModel() {
          return (0, MB.b)(this, JB, "f")
        }
        set baseDiffuseModel(BB) {
          (0, MB.f)(this, JB, BB, "f")
        }
        get dielectricSpecularModel() {
          return (0, MB.b)(this, YB, "f")
        }
        set dielectricSpecularModel(BB) {
          (0, MB.f)(this, YB, BB, "f")
        }
        get conductorSpecularModel() {
          return (0, MB.b)(this, gB, "f")
        }
        set conductorSpecularModel(BB) {
          (0, MB.f)(this, gB, BB, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(oB) {
          let kB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(oB, "PBRBRDF", 90, new WB, kB), this._useEnergyConservation = BB.DEFAULT_USE_ENERGY_CONSERVATION, TB.set(this, (0, MB.h)(this, iB, BB.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, MB.h)(this, NB), BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), dB.set(this, (0, MB.h)(this, tB, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, MB.h)(this, fB), BB.DEFAULT_USE_SPHERICAL_HARMONICS), VB.set(this, (0, MB.h)(this, sB, BB.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, MB.h)(this, wB), BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), yB.set(this, (0, MB.h)(this, UB, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, MB.h)(this, FB), BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), pB.set(this, (0, MB.h)(this, KB, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, MB.h)(this, rB), BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), lB.set(this, (0, MB.h)(this, IB, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, MB.h)(this, cB), BB.DEFAULT_DIFFUSE_MODEL), JB.set(this, (0, MB.h)(this, SB, BB.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, MB.h)(this, PB), BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL), YB.set(this, (0, MB.h)(this, QB, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, MB.h)(this, RB), BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL), gB.set(this, (0, MB.h)(this, aB, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, MB.h)(this, ZB), this._internalMarkAllSubMeshesAsMiscDirty = oB._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(BB) {
          BB.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, BB.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, BB.SPHERICAL_HARMONICS = this._useSphericalHarmonics, BB.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, BB.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, BB.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, BB.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, BB.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, BB.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, yB = new WeakMap, pB = new WeakMap, lB = new WeakMap, JB = new WeakMap, YB = new WeakMap, gB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(mB[Symbol.metadata] ?? null) : void 0;
        oB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], kB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], LB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], OB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], DB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], uB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], HB = [(0, zB.W)("baseDiffuseModel"), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], EB = [(0, zB.W)("dielectricSpecularModel"), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], vB = [(0, zB.W)("conductorSpecularModel"), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], (0, MB.g)(BB, null, oB, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useEnergyConservation" in BB,
            get: BB => BB.useEnergyConservation,
            set: (BB, TB) => {
              BB.useEnergyConservation = TB
            }
          },
          metadata: TB
        }, iB, NB), (0, MB.g)(BB, null, kB, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSmithVisibilityHeightCorrelated" in BB,
            get: BB => BB.useSmithVisibilityHeightCorrelated,
            set: (BB, TB) => {
              BB.useSmithVisibilityHeightCorrelated = TB
            }
          },
          metadata: TB
        }, tB, fB), (0, MB.g)(BB, null, LB, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSphericalHarmonics" in BB,
            get: BB => BB.useSphericalHarmonics,
            set: (BB, TB) => {
              BB.useSphericalHarmonics = TB
            }
          },
          metadata: TB
        }, sB, wB), (0, MB.g)(BB, null, OB, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularGlossinessInputEnergyConservation" in BB,
            get: BB => BB.useSpecularGlossinessInputEnergyConservation,
            set: (BB, TB) => {
              BB.useSpecularGlossinessInputEnergyConservation = TB
            }
          },
          metadata: TB
        }, UB, FB), (0, MB.g)(BB, null, DB, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: BB => "mixIblRadianceWithIrradiance" in BB,
            get: BB => BB.mixIblRadianceWithIrradiance,
            set: (BB, TB) => {
              BB.mixIblRadianceWithIrradiance = TB
            }
          },
          metadata: TB
        }, KB, rB), (0, MB.g)(BB, null, uB, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLegacySpecularEnergyConservation" in BB,
            get: BB => BB.useLegacySpecularEnergyConservation,
            set: (BB, TB) => {
              BB.useLegacySpecularEnergyConservation = TB
            }
          },
          metadata: TB
        }, IB, cB), (0, MB.g)(BB, null, HB, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseModel" in BB,
            get: BB => BB.baseDiffuseModel,
            set: (BB, TB) => {
              BB.baseDiffuseModel = TB
            }
          },
          metadata: TB
        }, SB, PB), (0, MB.g)(BB, null, EB, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "dielectricSpecularModel" in BB,
            get: BB => BB.dielectricSpecularModel,
            set: (BB, TB) => {
              BB.dielectricSpecularModel = TB
            }
          },
          metadata: TB
        }, QB, RB), (0, MB.g)(BB, null, vB, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "conductorSpecularModel" in BB,
            get: BB => BB.conductorSpecularModel,
            set: (BB, TB) => {
              BB.conductorSpecularModel = TB
            }
          },
          metadata: TB
        }, aB, ZB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB.DEFAULT_USE_ENERGY_CONSERVATION = !0, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, BB.DEFAULT_USE_SPHERICAL_HARMONICS = !0, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, BB.DEFAULT_DIFFUSE_MODEL = 0, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, BB
    })();
    var CB = dB(39028),
      GB = dB(36183),
      qB = dB(39030),
      xB = dB(38863),
      jB = dB(39080),
      AB = dB(39078),
      bB = dB(39088),
      nB = dB(39073);
    class eB extends ZB.d {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let BT = (() => {
      var BB, TB, dB, VB, yB, pB, lB, JB, YB, gB;
      let oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB = XB.b,
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [],
        WB = [],
        hB = [],
        CB = [],
        qB = [],
        xB = [],
        jB = [],
        bB = [],
        BT = [],
        TT = [],
        dT = [],
        VT = [],
        yT = [],
        pT = [],
        lT = [],
        JT = [];
      return BB = class extends sB {
        get isEnabled() {
          return (0, MB.b)(this, TB, "f")
        }
        set isEnabled(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, MB.b)(this, dB, "f")
        }
        set indexOfRefraction(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get texture() {
          return (0, MB.b)(this, VB, "f")
        }
        set texture(BB) {
          (0, MB.f)(this, VB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, MB.b)(this, yB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, MB.f)(this, yB, BB, "f")
        }
        get textureRoughness() {
          return (0, MB.b)(this, pB, "f")
        }
        set textureRoughness(BB) {
          (0, MB.f)(this, pB, BB, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, MB.b)(this, lB, "f")
        }
        set remapF0OnInterfaceChange(BB) {
          (0, MB.f)(this, lB, BB, "f")
        }
        get bumpTexture() {
          return (0, MB.b)(this, JB, "f")
        }
        set bumpTexture(BB) {
          (0, MB.f)(this, JB, BB, "f")
        }
        get isTintEnabled() {
          return (0, MB.b)(this, YB, "f")
        }
        set isTintEnabled(BB) {
          (0, MB.f)(this, YB, BB, "f")
        }
        get tintTexture() {
          return (0, MB.b)(this, gB, "f")
        }
        set tintTexture(BB) {
          (0, MB.f)(this, gB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(oB) {
          let kB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(oB, "PBRClearCoat", 100, new eB, kB), this._isEnabled = !1, TB.set(this, (0, MB.h)(this, wB, !1)), this.intensity = ((0, MB.h)(this, UB), (0, MB.h)(this, FB, 1)), this.roughness = ((0, MB.h)(this, KB), (0, MB.h)(this, rB, 0)), this._indexOfRefraction = ((0, MB.h)(this, IB), BB._DefaultIndexOfRefraction), dB.set(this, (0, MB.h)(this, cB, BB._DefaultIndexOfRefraction)), this._texture = ((0, MB.h)(this, SB), null), VB.set(this, (0, MB.h)(this, PB, null)), this._useRoughnessFromMainTexture = ((0, MB.h)(this, QB), !0), yB.set(this, (0, MB.h)(this, RB, !0)), this._textureRoughness = ((0, MB.h)(this, aB), null), pB.set(this, (0, MB.h)(this, ZB, null)), this._remapF0OnInterfaceChange = ((0, MB.h)(this, WB), !0), lB.set(this, (0, MB.h)(this, hB, !0)), this._bumpTexture = ((0, MB.h)(this, CB), null), JB.set(this, (0, MB.h)(this, qB, null)), this._isTintEnabled = ((0, MB.h)(this, xB), !1), YB.set(this, (0, MB.h)(this, jB, !1)), this.tintColor = ((0, MB.h)(this, bB), (0, MB.h)(this, BT, GB.c.White())), this.tintColorAtDistance = ((0, MB.h)(this, TT), (0, MB.h)(this, dT, 1)), this.tintThickness = ((0, MB.h)(this, VT), (0, MB.h)(this, yT, 1)), this._tintTexture = ((0, MB.h)(this, pT), null), gB.set(this, (0, MB.h)(this, lT, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, MB.h)(this, JT), this._internalMarkAllSubMeshesAsTexturesDirty = oB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, TB, dB) {
          if (!this._isEnabled) return !0;
          const VB = this._material._disableBumpMap;
          if (BB._areTexturesDirty && TB.texturesEnabled) {
            if (this._texture && AB.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && AB.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (dB.getCaps().standardDerivatives && this._bumpTexture && AB.d.ClearCoatBumpTextureEnabled && !VB && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && AB.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(TB, dB) {
          this._isEnabled ? (TB.CLEARCOAT = !0, TB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, TB.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, TB._areTexturesDirty && dB.texturesEnabled && (this._texture && AB.d.ClearCoatTextureEnabled ? (0, nB.S)(this._texture, TB, "CLEARCOAT_TEXTURE") : TB.CLEARCOAT_TEXTURE = !1, this._textureRoughness && AB.d.ClearCoatTextureEnabled ? (0, nB.S)(this._textureRoughness, TB, "CLEARCOAT_TEXTURE_ROUGHNESS") : TB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && AB.d.ClearCoatBumpTextureEnabled ? (0, nB.S)(this._bumpTexture, TB, "CLEARCOAT_BUMP") : TB.CLEARCOAT_BUMP = !1, TB.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === BB._DefaultIndexOfRefraction, this._isTintEnabled ? (TB.CLEARCOAT_TINT = !0, this._tintTexture && AB.d.ClearCoatTintTextureEnabled ? ((0, nB.S)(this._tintTexture, TB, "CLEARCOAT_TINT_TEXTURE"), TB.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : TB.CLEARCOAT_TINT_TEXTURE = !1) : (TB.CLEARCOAT_TINT = !1, TB.CLEARCOAT_TINT_TEXTURE = !1))) : (TB.CLEARCOAT = !1, TB.CLEARCOAT_TEXTURE = !1, TB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, TB.CLEARCOAT_BUMP = !1, TB.CLEARCOAT_TINT = !1, TB.CLEARCOAT_TINT_TEXTURE = !1, TB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, TB.CLEARCOAT_DEFAULTIOR = !1, TB.CLEARCOAT_TEXTUREDIRECTUV = 0, TB.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, TB.CLEARCOAT_BUMPDIRECTUV = 0, TB.CLEARCOAT_REMAP_F0 = !1, TB.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, TB.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(BB, TB, dB, VB) {
          if (!this._isEnabled) return;
          const yB = VB.materialDefines,
            pB = this._material.isFrozen,
            lB = this._material._disableBumpMap,
            JB = this._material._invertNormalMapX,
            YB = this._material._invertNormalMapY;
          if (!BB.useUbo || !pB || !BB.isSync) {
            (this._texture || this._textureRoughness) && AB.d.ClearCoatTextureEnabled && (BB.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, nB.u)(this._texture, BB, "clearCoat"), this._textureRoughness && !yB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, nB.u)(this._textureRoughness, BB, "clearCoatRoughness")), this._bumpTexture && dB.getCaps().standardDerivatives && AB.d.ClearCoatTextureEnabled && !lB && (BB.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, nB.u)(this._bumpTexture, BB, "clearCoatBump"), TB._mirroredCameraPosition ? BB.updateFloat2("vClearCoatTangentSpaceParams", JB ? 1 : -1, YB ? 1 : -1) : BB.updateFloat2("vClearCoatTangentSpaceParams", JB ? -1 : 1, YB ? -1 : 1)), this._tintTexture && AB.d.ClearCoatTintTextureEnabled && (BB.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, nB.u)(this._tintTexture, BB, "clearCoatTint")), BB.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const VB = 1 - this._indexOfRefraction,
              pB = 1 + this._indexOfRefraction,
              gB = Math.pow(-VB / pB, 2),
              oB = 1 / this._indexOfRefraction;
            BB.updateFloat4("vClearCoatRefractionParams", gB, oB, VB, pB), this._isTintEnabled && (BB.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), BB.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          TB.texturesEnabled && (this._texture && AB.d.ClearCoatTextureEnabled && BB.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !yB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && AB.d.ClearCoatTextureEnabled && BB.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && dB.getCaps().standardDerivatives && AB.d.ClearCoatBumpTextureEnabled && !lB && BB.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && AB.d.ClearCoatTintTextureEnabled && BB.setTexture("clearCoatTintSampler", this._tintTexture))
        }
        hasTexture(BB) {
          return this._texture === BB || (this._textureRoughness === BB || (this._bumpTexture === BB || this._tintTexture === BB))
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture), this._textureRoughness && BB.push(this._textureRoughness), this._bumpTexture && BB.push(this._bumpTexture), this._tintTexture && BB.push(this._tintTexture)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && BB.push(this._textureRoughness), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._tintTexture && this._tintTexture.animations && this._tintTexture.animations.length > 0 && BB.push(this._tintTexture)
        }
        dispose(BB) {
          BB && (this._texture?.dispose(), this._textureRoughness?.dispose(), this._bumpTexture?.dispose(), this._tintTexture?.dispose())
        }
        getClassName() {
          return "PBRClearCoatConfiguration"
        }
        addFallbacks(BB, TB, dB) {
          return BB.CLEARCOAT_BUMP && TB.addFallback(dB++, "CLEARCOAT_BUMP"), BB.CLEARCOAT_TINT && TB.addFallback(dB++, "CLEARCOAT_TINT"), BB.CLEARCOAT && TB.addFallback(dB++, "CLEARCOAT"), dB
        }
        getSamplers(BB) {
          BB.push("clearCoatSampler", "clearCoatRoughnessSampler", "clearCoatBumpSampler", "clearCoatTintSampler")
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
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, yB = new WeakMap, pB = new WeakMap, lB = new WeakMap, JB = new WeakMap, YB = new WeakMap, gB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(sB[Symbol.metadata] ?? null) : void 0;
        oB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], kB = [(0, zB.W)()], LB = [(0, zB.W)()], OB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], EB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], vB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, zB.s)()], NB = [(0, zB.W)()], tB = [(0, zB.W)()], fB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], (0, MB.g)(BB, null, oB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, TB) => {
              BB.isEnabled = TB
            }
          },
          metadata: TB
        }, wB, UB), (0, MB.g)(BB, null, OB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, TB) => {
              BB.indexOfRefraction = TB
            }
          },
          metadata: TB
        }, cB, SB), (0, MB.g)(BB, null, DB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, TB) => {
              BB.texture = TB
            }
          },
          metadata: TB
        }, PB, QB), (0, MB.g)(BB, null, uB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, TB) => {
              BB.useRoughnessFromMainTexture = TB
            }
          },
          metadata: TB
        }, RB, aB), (0, MB.g)(BB, null, HB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, TB) => {
              BB.textureRoughness = TB
            }
          },
          metadata: TB
        }, ZB, WB), (0, MB.g)(BB, null, EB, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: BB => "remapF0OnInterfaceChange" in BB,
            get: BB => BB.remapF0OnInterfaceChange,
            set: (BB, TB) => {
              BB.remapF0OnInterfaceChange = TB
            }
          },
          metadata: TB
        }, hB, CB), (0, MB.g)(BB, null, vB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, TB) => {
              BB.bumpTexture = TB
            }
          },
          metadata: TB
        }, qB, xB), (0, MB.g)(BB, null, mB, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTintEnabled" in BB,
            get: BB => BB.isTintEnabled,
            set: (BB, TB) => {
              BB.isTintEnabled = TB
            }
          },
          metadata: TB
        }, jB, bB), (0, MB.g)(BB, null, fB, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintTexture" in BB,
            get: BB => BB.tintTexture,
            set: (BB, TB) => {
              BB.tintTexture = TB
            }
          },
          metadata: TB
        }, lT, JT), (0, MB.g)(null, null, kB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, TB) => {
              BB.intensity = TB
            }
          },
          metadata: TB
        }, FB, KB), (0, MB.g)(null, null, LB, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, TB) => {
              BB.roughness = TB
            }
          },
          metadata: TB
        }, rB, IB), (0, MB.g)(null, null, iB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, TB) => {
              BB.tintColor = TB
            }
          },
          metadata: TB
        }, BT, TT), (0, MB.g)(null, null, NB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, TB) => {
              BB.tintColorAtDistance = TB
            }
          },
          metadata: TB
        }, dT, VT), (0, MB.g)(null, null, tB, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintThickness" in BB,
            get: BB => BB.tintThickness,
            set: (BB, TB) => {
              BB.tintThickness = TB
            }
          },
          metadata: TB
        }, yT, pT), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB._DefaultIndexOfRefraction = 1.5, BB
    })();
    class TT extends ZB.d {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let dT = (() => {
      var BB, TB, dB, VB;
      let yB, pB, lB, JB, YB, gB, oB, kB = XB.b,
        LB = [],
        OB = [],
        DB = [],
        uB = [],
        HB = [],
        EB = [],
        vB = [],
        mB = [],
        iB = [],
        NB = [],
        tB = [],
        fB = [],
        sB = [],
        wB = [];
      return BB = class extends kB {
        get isEnabled() {
          return (0, MB.b)(this, TB, "f")
        }
        set isEnabled(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        get texture() {
          return (0, MB.b)(this, dB, "f")
        }
        set texture(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get thicknessTexture() {
          return (0, MB.b)(this, VB, "f")
        }
        set thicknessTexture(BB) {
          (0, MB.f)(this, VB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(yB) {
          let pB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yB, "PBRIridescence", 110, new TT, pB), this._isEnabled = !1, TB.set(this, (0, MB.h)(this, LB, !1)), this.intensity = ((0, MB.h)(this, OB), (0, MB.h)(this, DB, 1)), this.minimumThickness = ((0, MB.h)(this, uB), (0, MB.h)(this, HB, BB._DefaultMinimumThickness)), this.maximumThickness = ((0, MB.h)(this, EB), (0, MB.h)(this, vB, BB._DefaultMaximumThickness)), this.indexOfRefraction = ((0, MB.h)(this, mB), (0, MB.h)(this, iB, BB._DefaultIndexOfRefraction)), this._texture = ((0, MB.h)(this, NB), null), dB.set(this, (0, MB.h)(this, tB, null)), this._thicknessTexture = ((0, MB.h)(this, fB), null), VB.set(this, (0, MB.h)(this, sB, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, MB.h)(this, wB), this._internalMarkAllSubMeshesAsTexturesDirty = yB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, TB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && TB.texturesEnabled) {
            if (this._texture && AB.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && AB.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, TB) {
          this._isEnabled ? (BB.IRIDESCENCE = !0, BB._areTexturesDirty && TB.texturesEnabled && (this._texture && AB.d.IridescenceTextureEnabled ? (0, nB.S)(this._texture, BB, "IRIDESCENCE_TEXTURE") : BB.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && AB.d.IridescenceTextureEnabled ? (0, nB.S)(this._thicknessTexture, BB, "IRIDESCENCE_THICKNESS_TEXTURE") : BB.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (BB.IRIDESCENCE = !1, BB.IRIDESCENCE_TEXTURE = !1, BB.IRIDESCENCE_THICKNESS_TEXTURE = !1, BB.IRIDESCENCE_TEXTUREDIRECTUV = 0, BB.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(BB, TB) {
          if (!this._isEnabled) return;
          const dB = this._material.isFrozen;
          BB.useUbo && dB && BB.isSync || ((this._texture || this._thicknessTexture) && AB.d.IridescenceTextureEnabled && (BB.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, nB.u)(this._texture, BB, "iridescence"), this._thicknessTexture && (0, nB.u)(this._thicknessTexture, BB, "iridescenceThickness")), BB.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), TB.texturesEnabled && (this._texture && AB.d.IridescenceTextureEnabled && BB.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && AB.d.IridescenceTextureEnabled && BB.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
        }
        hasTexture(BB) {
          return this._texture === BB || this._thicknessTexture === BB
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture), this._thicknessTexture && BB.push(this._thicknessTexture)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture), this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && BB.push(this._thicknessTexture)
        }
        dispose(BB) {
          BB && (this._texture?.dispose(), this._thicknessTexture?.dispose())
        }
        getClassName() {
          return "PBRIridescenceConfiguration"
        }
        addFallbacks(BB, TB, dB) {
          return BB.IRIDESCENCE && TB.addFallback(dB++, "IRIDESCENCE"), dB
        }
        getSamplers(BB) {
          BB.push("iridescenceSampler", "iridescenceThicknessSampler")
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
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
        yB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, zB.W)()], lB = [(0, zB.W)()], JB = [(0, zB.W)()], YB = [(0, zB.W)()], gB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], (0, MB.g)(BB, null, yB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, TB) => {
              BB.isEnabled = TB
            }
          },
          metadata: TB
        }, LB, OB), (0, MB.g)(BB, null, gB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, TB) => {
              BB.texture = TB
            }
          },
          metadata: TB
        }, tB, fB), (0, MB.g)(BB, null, oB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, TB) => {
              BB.thicknessTexture = TB
            }
          },
          metadata: TB
        }, sB, wB), (0, MB.g)(null, null, pB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, TB) => {
              BB.intensity = TB
            }
          },
          metadata: TB
        }, DB, uB), (0, MB.g)(null, null, lB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, TB) => {
              BB.minimumThickness = TB
            }
          },
          metadata: TB
        }, HB, EB), (0, MB.g)(null, null, JB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, TB) => {
              BB.maximumThickness = TB
            }
          },
          metadata: TB
        }, vB, mB), (0, MB.g)(null, null, YB, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, TB) => {
              BB.indexOfRefraction = TB
            }
          },
          metadata: TB
        }, iB, NB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB._DefaultMinimumThickness = 100, BB._DefaultMaximumThickness = 400, BB._DefaultIndexOfRefraction = 1.3, BB
    })();
    class VT extends ZB.d {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let yT = (() => {
      var BB, TB, dB, VB;
      let yB, pB, lB, JB, YB, gB = XB.b,
        oB = [],
        kB = [],
        LB = [],
        OB = [],
        DB = [],
        uB = [],
        HB = [],
        EB = [],
        vB = [],
        mB = [];
      return BB = class extends gB {
        get isEnabled() {
          return (0, MB.b)(this, TB, "f")
        }
        set isEnabled(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        set angle(BB) {
          this.direction.x = Math.cos(BB), this.direction.y = Math.sin(BB)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, MB.b)(this, dB, "f")
        }
        set texture(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get legacy() {
          return (0, MB.b)(this, VB, "f")
        }
        set legacy(BB) {
          (0, MB.f)(this, VB, BB, "f")
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
        constructor(BB) {
          let yB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "PBRAnisotropic", 110, new VT, yB), this._isEnabled = !1, TB.set(this, (0, MB.h)(this, oB, !1)), this.intensity = ((0, MB.h)(this, kB), (0, MB.h)(this, LB, 1)), this.direction = ((0, MB.h)(this, OB), (0, MB.h)(this, DB, new RB.l(1, 0))), this._texture = ((0, MB.h)(this, uB), null), dB.set(this, (0, MB.h)(this, HB, null)), this._legacy = ((0, MB.h)(this, EB), !1), VB.set(this, (0, MB.h)(this, vB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, MB.h)(this, mB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = BB._dirtyCallbacks[16]
        }
        isReadyForSubMesh(BB, TB) {
          return !this._isEnabled || !(BB._areTexturesDirty && TB.texturesEnabled && this._texture && AB.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(BB, TB, dB) {
          this._isEnabled ? (BB.ANISOTROPIC = this._isEnabled, this._isEnabled && !dB.isVerticesDataPresent(aB.m.TangentKind) && (BB._needUVs = !0, BB.MAINUV1 = !0), BB._areTexturesDirty && TB.texturesEnabled && (this._texture && AB.d.AnisotropicTextureEnabled ? (0, nB.S)(this._texture, BB, "ANISOTROPIC_TEXTURE") : BB.ANISOTROPIC_TEXTURE = !1), BB._areMiscDirty && (BB.ANISOTROPIC_LEGACY = this._legacy)) : (BB.ANISOTROPIC = !1, BB.ANISOTROPIC_TEXTURE = !1, BB.ANISOTROPIC_TEXTUREDIRECTUV = 0, BB.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(BB, TB) {
          if (!this._isEnabled) return;
          const dB = this._material.isFrozen;
          BB.useUbo && dB && BB.isSync || (this._texture && AB.d.AnisotropicTextureEnabled && (BB.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, nB.u)(this._texture, BB, "anisotropy")), BB.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), TB.texturesEnabled && this._texture && AB.d.AnisotropicTextureEnabled && BB.setTexture("anisotropySampler", this._texture)
        }
        hasTexture(BB) {
          return this._texture === BB
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture)
        }
        dispose(BB) {
          BB && this._texture && this._texture.dispose()
        }
        getClassName() {
          return "PBRAnisotropicConfiguration"
        }
        addFallbacks(BB, TB, dB) {
          return BB.ANISOTROPIC && TB.addFallback(dB++, "ANISOTROPIC"), dB
        }
        getSamplers(BB) {
          BB.push("anisotropySampler")
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
        parse(BB, TB, dB) {
          super.parse(BB, TB, dB), void 0 === BB.legacy && (this.legacy = !0)
        }
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(gB[Symbol.metadata] ?? null) : void 0;
        yB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, zB.W)()], lB = [(0, zB.Q)()], JB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], YB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], (0, MB.g)(BB, null, yB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, TB) => {
              BB.isEnabled = TB
            }
          },
          metadata: TB
        }, oB, kB), (0, MB.g)(BB, null, JB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, TB) => {
              BB.texture = TB
            }
          },
          metadata: TB
        }, HB, EB), (0, MB.g)(BB, null, YB, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacy" in BB,
            get: BB => BB.legacy,
            set: (BB, TB) => {
              BB.legacy = TB
            }
          },
          metadata: TB
        }, vB, mB), (0, MB.g)(null, null, pB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, TB) => {
              BB.intensity = TB
            }
          },
          metadata: TB
        }, LB, OB), (0, MB.g)(null, null, lB, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: BB => "direction" in BB,
            get: BB => BB.direction,
            set: (BB, TB) => {
              BB.direction = TB
            }
          },
          metadata: TB
        }, DB, uB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB
    })();
    class pT extends ZB.d {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let lT = (() => {
      var BB, TB, dB, VB, yB, pB, lB, JB;
      let YB, gB, oB, kB, LB, OB, DB, uB, HB, EB = XB.b,
        vB = [],
        mB = [],
        iB = [],
        NB = [],
        tB = [],
        fB = [],
        sB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [];
      return BB = class extends EB {
        get isEnabled() {
          return (0, MB.b)(this, TB, "f")
        }
        set isEnabled(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, MB.b)(this, dB, "f")
        }
        set linkSheenWithAlbedo(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get texture() {
          return (0, MB.b)(this, VB, "f")
        }
        set texture(BB) {
          (0, MB.f)(this, VB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, MB.b)(this, yB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, MB.f)(this, yB, BB, "f")
        }
        get roughness() {
          return (0, MB.b)(this, pB, "f")
        }
        set roughness(BB) {
          (0, MB.f)(this, pB, BB, "f")
        }
        get textureRoughness() {
          return (0, MB.b)(this, lB, "f")
        }
        set textureRoughness(BB) {
          (0, MB.f)(this, lB, BB, "f")
        }
        get albedoScaling() {
          return (0, MB.b)(this, JB, "f")
        }
        set albedoScaling(BB) {
          (0, MB.f)(this, JB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let YB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "Sheen", 120, new pT, YB), this._isEnabled = !1, TB.set(this, (0, MB.h)(this, vB, !1)), this._linkSheenWithAlbedo = ((0, MB.h)(this, mB), !1), dB.set(this, (0, MB.h)(this, iB, !1)), this.intensity = ((0, MB.h)(this, NB), (0, MB.h)(this, tB, 1)), this.color = ((0, MB.h)(this, fB), (0, MB.h)(this, sB, GB.c.White())), this._texture = ((0, MB.h)(this, wB), null), VB.set(this, (0, MB.h)(this, UB, null)), this._useRoughnessFromMainTexture = ((0, MB.h)(this, FB), !0), yB.set(this, (0, MB.h)(this, KB, !0)), this._roughness = ((0, MB.h)(this, rB), null), pB.set(this, (0, MB.h)(this, IB, null)), this._textureRoughness = ((0, MB.h)(this, cB), null), lB.set(this, (0, MB.h)(this, SB, null)), this._albedoScaling = ((0, MB.h)(this, PB), !1), JB.set(this, (0, MB.h)(this, QB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, MB.h)(this, RB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, TB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && TB.texturesEnabled) {
            if (this._texture && AB.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && AB.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, TB) {
          this._isEnabled ? (BB.SHEEN = !0, BB.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, BB.SHEEN_ROUGHNESS = null !== this._roughness, BB.SHEEN_ALBEDOSCALING = this._albedoScaling, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, BB._areTexturesDirty && TB.texturesEnabled && (this._texture && AB.d.SheenTextureEnabled ? ((0, nB.S)(this._texture, BB, "SHEEN_TEXTURE"), BB.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : BB.SHEEN_TEXTURE = !1, this._textureRoughness && AB.d.SheenTextureEnabled ? (0, nB.S)(this._textureRoughness, BB, "SHEEN_TEXTURE_ROUGHNESS") : BB.SHEEN_TEXTURE_ROUGHNESS = !1)) : (BB.SHEEN = !1, BB.SHEEN_TEXTURE = !1, BB.SHEEN_TEXTURE_ROUGHNESS = !1, BB.SHEEN_LINKWITHALBEDO = !1, BB.SHEEN_ROUGHNESS = !1, BB.SHEEN_ALBEDOSCALING = !1, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, BB.SHEEN_GAMMATEXTURE = !1, BB.SHEEN_TEXTUREDIRECTUV = 0, BB.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(BB, TB, dB, VB) {
          if (!this._isEnabled) return;
          const yB = VB.materialDefines,
            pB = this._material.isFrozen;
          BB.useUbo && pB && BB.isSync || ((this._texture || this._textureRoughness) && AB.d.SheenTextureEnabled && (BB.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, nB.u)(this._texture, BB, "sheen"), this._textureRoughness && !yB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, nB.u)(this._textureRoughness, BB, "sheenRoughness")), BB.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && BB.updateFloat("vSheenRoughness", this._roughness)), TB.texturesEnabled && (this._texture && AB.d.SheenTextureEnabled && BB.setTexture("sheenSampler", this._texture), this._textureRoughness && !yB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && AB.d.SheenTextureEnabled && BB.setTexture("sheenRoughnessSampler", this._textureRoughness))
        }
        hasTexture(BB) {
          return this._texture === BB || this._textureRoughness === BB
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture), this._textureRoughness && BB.push(this._textureRoughness)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture), this._textureRoughness && this._textureRoughness.animations && this._textureRoughness.animations.length > 0 && BB.push(this._textureRoughness)
        }
        dispose(BB) {
          BB && (this._texture?.dispose(), this._textureRoughness?.dispose())
        }
        getClassName() {
          return "PBRSheenConfiguration"
        }
        addFallbacks(BB, TB, dB) {
          return BB.SHEEN && TB.addFallback(dB++, "SHEEN"), dB
        }
        getSamplers(BB) {
          BB.push("sheenSampler", "sheenRoughnessSampler")
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
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, yB = new WeakMap, pB = new WeakMap, lB = new WeakMap, JB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(EB[Symbol.metadata] ?? null) : void 0;
        YB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, zB.W)()], kB = [(0, zB.s)()], LB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], (0, MB.g)(BB, null, YB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, TB) => {
              BB.isEnabled = TB
            }
          },
          metadata: TB
        }, vB, mB), (0, MB.g)(BB, null, gB, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkSheenWithAlbedo" in BB,
            get: BB => BB.linkSheenWithAlbedo,
            set: (BB, TB) => {
              BB.linkSheenWithAlbedo = TB
            }
          },
          metadata: TB
        }, iB, NB), (0, MB.g)(BB, null, LB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, TB) => {
              BB.texture = TB
            }
          },
          metadata: TB
        }, UB, FB), (0, MB.g)(BB, null, OB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, TB) => {
              BB.useRoughnessFromMainTexture = TB
            }
          },
          metadata: TB
        }, KB, rB), (0, MB.g)(BB, null, DB, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, TB) => {
              BB.roughness = TB
            }
          },
          metadata: TB
        }, IB, cB), (0, MB.g)(BB, null, uB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, TB) => {
              BB.textureRoughness = TB
            }
          },
          metadata: TB
        }, SB, PB), (0, MB.g)(BB, null, HB, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoScaling" in BB,
            get: BB => BB.albedoScaling,
            set: (BB, TB) => {
              BB.albedoScaling = TB
            }
          },
          metadata: TB
        }, QB, RB), (0, MB.g)(null, null, oB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, TB) => {
              BB.intensity = TB
            }
          },
          metadata: TB
        }, tB, fB), (0, MB.g)(null, null, kB, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: BB => "color" in BB,
            get: BB => BB.color,
            set: (BB, TB) => {
              BB.color = TB
            }
          },
          metadata: TB
        }, sB, wB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB
    })();
    class JT extends ZB.d {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let YT = (() => {
      var BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB;
      let EB, vB, mB, iB, NB, tB, fB, sB, wB, UB, FB, KB, rB, IB, cB, SB, PB, QB, aB, ZB, WB, hB, CB, qB, xB, jB, bB, eB, BT, TT, dT = XB.b,
        VT = [],
        yT = [],
        pT = [],
        lT = [],
        YT = [],
        gT = [],
        oT = [],
        kT = [],
        LT = [],
        OT = [],
        DT = [],
        uT = [],
        HT = [],
        ET = [],
        vT = [],
        mT = [],
        iT = [],
        NT = [],
        tT = [],
        fT = [],
        sT = [],
        MT = [],
        zT = [],
        wT = [],
        UT = [],
        FT = [],
        KT = [],
        rT = [],
        IT = [],
        cT = [],
        ST = [],
        PT = [],
        QT = [],
        RT = [],
        aT = [],
        ZT = [],
        XT = [],
        WT = [],
        hT = [],
        CT = [],
        GT = [],
        qT = [],
        xT = [],
        jT = [],
        AT = [],
        bT = [],
        nT = [],
        eT = [],
        Bd = [],
        Td = [],
        dd = [],
        Vd = [],
        yd = [],
        pd = [],
        ld = [],
        Jd = [],
        Yd = [],
        gd = [],
        od = [],
        kd = [];
      return BB = class extends dT {
        get isRefractionEnabled() {
          return (0, MB.b)(this, TB, "f")
        }
        set isRefractionEnabled(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        get isTranslucencyEnabled() {
          return (0, MB.b)(this, dB, "f")
        }
        set isTranslucencyEnabled(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get isDispersionEnabled() {
          return (0, MB.b)(this, VB, "f")
        }
        set isDispersionEnabled(BB) {
          (0, MB.f)(this, VB, BB, "f")
        }
        get isScatteringEnabled() {
          return (0, MB.b)(this, yB, "f")
        }
        set isScatteringEnabled(BB) {
          (0, MB.f)(this, yB, BB, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(BB) {
          this._scene.enableSubSurfaceForPrePass() && BB && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(BB))
        }
        get useAlbedoToTintRefraction() {
          return (0, MB.b)(this, pB, "f")
        }
        set useAlbedoToTintRefraction(BB) {
          (0, MB.f)(this, pB, BB, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, MB.b)(this, lB, "f")
        }
        set useAlbedoToTintTranslucency(BB) {
          (0, MB.f)(this, lB, BB, "f")
        }
        get thicknessTexture() {
          return (0, MB.b)(this, JB, "f")
        }
        set thicknessTexture(BB) {
          (0, MB.f)(this, JB, BB, "f")
        }
        get refractionTexture() {
          return (0, MB.b)(this, YB, "f")
        }
        set refractionTexture(BB) {
          (0, MB.f)(this, YB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, MB.b)(this, gB, "f")
        }
        set indexOfRefraction(BB) {
          (0, MB.f)(this, gB, BB, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(BB) {
          const TB = BB >= 1 ? BB : -1;
          this._volumeIndexOfRefraction !== TB && (this._volumeIndexOfRefraction = TB, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, MB.b)(this, oB, "f")
        }
        set invertRefractionY(BB) {
          (0, MB.f)(this, oB, BB, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, MB.b)(this, kB, "f")
        }
        set linkRefractionWithTransparency(BB) {
          (0, MB.f)(this, kB, BB, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, MB.b)(this, LB, "f")
        }
        set useMaskFromThicknessTexture(BB) {
          (0, MB.f)(this, LB, BB, "f")
        }
        get refractionIntensityTexture() {
          return (0, MB.b)(this, OB, "f")
        }
        set refractionIntensityTexture(BB) {
          (0, MB.f)(this, OB, BB, "f")
        }
        get translucencyIntensityTexture() {
          return (0, MB.b)(this, DB, "f")
        }
        set translucencyIntensityTexture(BB) {
          (0, MB.f)(this, DB, BB, "f")
        }
        get translucencyColorTexture() {
          return (0, MB.b)(this, uB, "f")
        }
        set translucencyColorTexture(BB) {
          (0, MB.f)(this, uB, BB, "f")
        }
        get useGltfStyleTextures() {
          return (0, MB.b)(this, HB, "f")
        }
        set useGltfStyleTextures(BB) {
          (0, MB.f)(this, HB, BB, "f")
        }
        get legacyTransluceny() {
          return this.legacyTranslucency
        }
        set legacyTransluceny(BB) {
          this.legacyTranslucency = BB
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
        constructor(EB) {
          let vB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(EB, "PBRSubSurface", 130, new JT, vB), this._isRefractionEnabled = !1, TB.set(this, (0, MB.h)(this, VT, !1)), this._isTranslucencyEnabled = ((0, MB.h)(this, yT), !1), dB.set(this, (0, MB.h)(this, pT, !1)), this._isDispersionEnabled = ((0, MB.h)(this, lT), !1), VB.set(this, (0, MB.h)(this, YT, !1)), this._isScatteringEnabled = ((0, MB.h)(this, gT), !1), yB.set(this, (0, MB.h)(this, oT, !1)), this._scatteringDiffusionProfileIndex = ((0, MB.h)(this, kT), (0, MB.h)(this, LT, 0)), this.refractionIntensity = ((0, MB.h)(this, OT), (0, MB.h)(this, DT, 1)), this.translucencyIntensity = ((0, MB.h)(this, uT), (0, MB.h)(this, HT, 1)), this._useAlbedoToTintRefraction = ((0, MB.h)(this, ET), !1), pB.set(this, (0, MB.h)(this, vT, !1)), this._useAlbedoToTintTranslucency = ((0, MB.h)(this, mT), !1), lB.set(this, (0, MB.h)(this, iT, !1)), this._thicknessTexture = ((0, MB.h)(this, NT), null), JB.set(this, (0, MB.h)(this, tT, null)), this._refractionTexture = ((0, MB.h)(this, fT), null), YB.set(this, (0, MB.h)(this, sT, null)), this._indexOfRefraction = ((0, MB.h)(this, MT), 1.5), gB.set(this, (0, MB.h)(this, zT, 1.5)), this._volumeIndexOfRefraction = ((0, MB.h)(this, wT), (0, MB.h)(this, UT, -1)), this._invertRefractionY = ((0, MB.h)(this, FT), !1), oB.set(this, (0, MB.h)(this, KT, !1)), this._linkRefractionWithTransparency = ((0, MB.h)(this, rT), !1), kB.set(this, (0, MB.h)(this, IT, !1)), this.minimumThickness = ((0, MB.h)(this, cT), (0, MB.h)(this, ST, 0)), this.maximumThickness = ((0, MB.h)(this, PT), (0, MB.h)(this, QT, 1)), this.useThicknessAsDepth = ((0, MB.h)(this, RT), (0, MB.h)(this, aT, !1)), this.tintColor = ((0, MB.h)(this, ZT), (0, MB.h)(this, XT, GB.c.White())), this.tintColorAtDistance = ((0, MB.h)(this, WT), (0, MB.h)(this, hT, 1)), this.dispersion = ((0, MB.h)(this, CT), (0, MB.h)(this, GT, 0)), this.diffusionDistance = ((0, MB.h)(this, qT), (0, MB.h)(this, xT, GB.c.White())), this._useMaskFromThicknessTexture = ((0, MB.h)(this, jT), !1), LB.set(this, (0, MB.h)(this, AT, !1)), this._refractionIntensityTexture = ((0, MB.h)(this, bT), null), OB.set(this, (0, MB.h)(this, nT, null)), this._translucencyIntensityTexture = ((0, MB.h)(this, eT), null), DB.set(this, (0, MB.h)(this, Bd, null)), this.translucencyColor = ((0, MB.h)(this, Td), (0, MB.h)(this, dd, null)), this._translucencyColorTexture = ((0, MB.h)(this, Vd), null), uB.set(this, (0, MB.h)(this, yd, null)), this._useGltfStyleTextures = ((0, MB.h)(this, pd), !0), HB.set(this, (0, MB.h)(this, ld, !0)), this.applyAlbedoAfterSubSurface = ((0, MB.h)(this, Jd), (0, MB.h)(this, Yd, BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, MB.h)(this, gd), (0, MB.h)(this, od, BB.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, MB.h)(this, kd), this._scene = EB.jU(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = EB._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = EB._dirtyCallbacks[32]
        }
        isReadyForSubMesh(BB, TB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (BB._areTexturesDirty && TB.texturesEnabled) {
            if (this._thicknessTexture && AB.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && AB.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && AB.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && AB.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getRefractionTexture(TB);
            if (BB && AB.d.RefractionTextureEnabled && !BB.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, TB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return BB.SUBSURFACE = !1, BB.SS_DISPERSION = !1, BB.SS_TRANSLUCENCY = !1, BB.SS_SCATTERING = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, BB.SS_HAS_THICKNESS = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (BB._areTexturesDirty) {
            if (BB.SUBSURFACE = !0, BB.SS_DISPERSION = this._isDispersionEnabled, BB.SS_TRANSLUCENCY = this._isTranslucencyEnabled, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, BB.SS_SCATTERING = this._isScatteringEnabled, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_HAS_THICKNESS = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, BB._areTexturesDirty && TB.texturesEnabled && (this._thicknessTexture && AB.d.ThicknessTextureEnabled && (0, nB.S)(this._thicknessTexture, BB, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && AB.d.RefractionIntensityTextureEnabled && (0, nB.S)(this._refractionIntensityTexture, BB, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && AB.d.TranslucencyIntensityTextureEnabled && (0, nB.S)(this._translucencyIntensityTexture, BB, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && AB.d.TranslucencyColorTextureEnabled && ((0, nB.S)(this._translucencyColorTexture, BB, "SS_TRANSLUCENCYCOLOR_TEXTURE"), BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), BB.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, BB.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && TB.texturesEnabled) {
              const dB = this._getRefractionTexture(TB);
              dB && AB.d.RefractionTextureEnabled && (BB.SS_REFRACTION = !0, BB.SS_REFRACTIONMAP_3D = dB.isCube, BB.SS_GAMMAREFRACTION = dB.gammaSpace, BB.SS_RGBDREFRACTION = dB.isRGBD, BB.SS_LINEARSPECULARREFRACTION = dB.linearSpecularLOD, BB.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && dB.isCube ? !dB.invertZ : dB.invertZ, BB.SS_LODINREFRACTIONALPHA = dB.lodLevelInAlpha, BB.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, BB.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = dB.isCube && dB.boundingBoxSize, BB.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (BB.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(BB, TB, dB, VB) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) BB.updateFloat2("vThicknessParam", 0, 0);
            else {
              VB.getRenderingMesh().getWorldMatrix().decompose(RB.j.RD[0]);
              const TB = Math.max(Math.abs(RB.j.RD[0].x), Math.abs(RB.j.RD[0].y), Math.abs(RB.j.RD[0].z));
              BB.updateFloat2("vThicknessParam", this.minimumThickness * TB, (this.maximumThickness - this.minimumThickness) * TB)
            }
        }
        bindForSubMesh(BB, TB, dB, VB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const yB = VB.materialDefines,
            pB = this._material.isFrozen,
            lB = this._material.realTimeFiltering,
            JB = yB.LODBASEDMICROSFURACE,
            YB = this._getRefractionTexture(TB);
          if (!BB.useUbo || !pB || !BB.isSync) {
            if (this._thicknessTexture && AB.d.ThicknessTextureEnabled && (BB.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, nB.u)(this._thicknessTexture, BB, "thickness")), this._refractionIntensityTexture && AB.d.RefractionIntensityTextureEnabled && yB.SS_REFRACTIONINTENSITY_TEXTURE && (BB.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, nB.u)(this._refractionIntensityTexture, BB, "refractionIntensity")), this._translucencyColorTexture && AB.d.TranslucencyColorTextureEnabled && yB.SS_TRANSLUCENCYCOLOR_TEXTURE && (BB.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, nB.u)(this._translucencyColorTexture, BB, "translucencyColor")), this._translucencyIntensityTexture && AB.d.TranslucencyIntensityTextureEnabled && yB.SS_TRANSLUCENCYINTENSITY_TEXTURE && (BB.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, nB.u)(this._translucencyIntensityTexture, BB, "translucencyIntensity")), YB && AB.d.RefractionTextureEnabled) {
              BB.i6("refractionMatrix", YB.getRefractionTextureMatrix());
              let TB = 1;
              YB.isCube || YB.depth && (TB = YB.depth);
              const dB = YB.getSize().width,
                VB = this.volumeIndexOfRefraction;
              if (BB.updateFloat4("vRefractionInfos", YB.level, 1 / VB, TB, this._invertRefractionY ? -1 : 1), BB.updateFloat4("vRefractionMicrosurfaceInfos", dB, YB.lodGenerationScale, YB.lodGenerationOffset, 1 / this.indexOfRefraction), lB && BB.updateFloat2("vRefractionFilteringInfo", dB, Math.log2(dB)), YB.boundingBoxSize) {
                const TB = YB;
                BB.updateVector3("vRefractionPosition", TB.boundingBoxPosition), BB.updateVector3("vRefractionSize", TB.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && BB.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), BB.updateColor3("vDiffusionDistance", this.diffusionDistance), BB.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), BB.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), BB.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), BB.updateFloat("dispersion", this.dispersion)
          }
          TB.texturesEnabled && (this._thicknessTexture && AB.d.ThicknessTextureEnabled && BB.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && AB.d.RefractionIntensityTextureEnabled && yB.SS_REFRACTIONINTENSITY_TEXTURE && BB.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && AB.d.TranslucencyIntensityTextureEnabled && yB.SS_TRANSLUCENCYINTENSITY_TEXTURE && BB.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && AB.d.TranslucencyColorTextureEnabled && yB.SS_TRANSLUCENCYCOLOR_TEXTURE && BB.setTexture("translucencyColorSampler", this._translucencyColorTexture), YB && AB.d.RefractionTextureEnabled && (JB ? BB.setTexture("refractionSampler", YB) : (BB.setTexture("refractionSampler", YB._lodTextureMid || YB), BB.setTexture("refractionSamplerLow", YB._lodTextureLow || YB), BB.setTexture("refractionSamplerHigh", YB._lodTextureHigh || YB))))
        }
        _getRefractionTexture(BB) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? BB.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(BB) {
          AB.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && BB.push(this._refractionTexture)
        }
        hasTexture(BB) {
          return this._thicknessTexture === BB || (this._refractionTexture === BB || (this._refractionIntensityTexture === BB || (this._translucencyIntensityTexture === BB || this._translucencyColorTexture === BB)))
        }
        hasRenderTargetTextures() {
          return !!(AB.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
        }
        getActiveTextures(BB) {
          this._thicknessTexture && BB.push(this._thicknessTexture), this._refractionTexture && BB.push(this._refractionTexture), this._refractionIntensityTexture && BB.push(this._refractionIntensityTexture), this._translucencyColorTexture && BB.push(this._translucencyColorTexture), this._translucencyIntensityTexture && BB.push(this._translucencyIntensityTexture)
        }
        getAnimatables(BB) {
          this._thicknessTexture && this._thicknessTexture.animations && this._thicknessTexture.animations.length > 0 && BB.push(this._thicknessTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && BB.push(this._refractionTexture), this._refractionIntensityTexture && this._refractionIntensityTexture.animations && this._refractionIntensityTexture.animations.length > 0 && BB.push(this._refractionIntensityTexture), this._translucencyColorTexture && this._translucencyColorTexture.animations && this._translucencyColorTexture.animations.length > 0 && BB.push(this._translucencyColorTexture), this._translucencyIntensityTexture && this._translucencyIntensityTexture.animations && this._translucencyIntensityTexture.animations.length > 0 && BB.push(this._translucencyIntensityTexture)
        }
        dispose(BB) {
          BB && (this._thicknessTexture && this._thicknessTexture.dispose(), this._refractionTexture && this._refractionTexture.dispose(), this._refractionIntensityTexture && this._refractionIntensityTexture.dispose(), this._translucencyColorTexture && this._translucencyColorTexture.dispose(), this._translucencyIntensityTexture && this._translucencyIntensityTexture.dispose())
        }
        getClassName() {
          return "PBRSubSurfaceConfiguration"
        }
        addFallbacks(BB, TB, dB) {
          return BB.SS_SCATTERING && TB.addFallback(dB++, "SS_SCATTERING"), BB.SS_TRANSLUCENCY && TB.addFallback(dB++, "SS_TRANSLUCENCY"), dB
        }
        getSamplers(BB) {
          BB.push("thicknessSampler", "refractionIntensitySampler", "translucencyIntensitySampler", "refractionSampler", "refractionSamplerLow", "refractionSamplerHigh", "translucencyColorSampler")
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
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, yB = new WeakMap, pB = new WeakMap, lB = new WeakMap, JB = new WeakMap, YB = new WeakMap, gB = new WeakMap, oB = new WeakMap, kB = new WeakMap, LB = new WeakMap, OB = new WeakMap, DB = new WeakMap, uB = new WeakMap, HB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(dT[Symbol.metadata] ?? null) : void 0;
        EB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], vB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, zB.W)(), (0, zB.i)("_markScenePrePassDirty")], NB = [(0, zB.W)()], tB = [(0, zB.W)()], fB = [(0, zB.W)()], sB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], wB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, zB.W)()], IB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], SB = [(0, zB.W)()], PB = [(0, zB.W)()], QB = [(0, zB.W)()], aB = [(0, zB.s)()], ZB = [(0, zB.W)()], WB = [(0, zB.W)()], hB = [(0, zB.s)()], CB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], xB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], jB = [(0, zB.s)()], bB = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], eB = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], BT = [(0, zB.W)()], TT = [(0, zB.W)()], (0, MB.g)(BB, null, EB, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRefractionEnabled" in BB,
            get: BB => BB.isRefractionEnabled,
            set: (BB, TB) => {
              BB.isRefractionEnabled = TB
            }
          },
          metadata: TB
        }, VT, yT), (0, MB.g)(BB, null, vB, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTranslucencyEnabled" in BB,
            get: BB => BB.isTranslucencyEnabled,
            set: (BB, TB) => {
              BB.isTranslucencyEnabled = TB
            }
          },
          metadata: TB
        }, pT, lT), (0, MB.g)(BB, null, mB, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isDispersionEnabled" in BB,
            get: BB => BB.isDispersionEnabled,
            set: (BB, TB) => {
              BB.isDispersionEnabled = TB
            }
          },
          metadata: TB
        }, YT, gT), (0, MB.g)(BB, null, iB, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isScatteringEnabled" in BB,
            get: BB => BB.isScatteringEnabled,
            set: (BB, TB) => {
              BB.isScatteringEnabled = TB
            }
          },
          metadata: TB
        }, oT, kT), (0, MB.g)(BB, null, sB, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintRefraction" in BB,
            get: BB => BB.useAlbedoToTintRefraction,
            set: (BB, TB) => {
              BB.useAlbedoToTintRefraction = TB
            }
          },
          metadata: TB
        }, vT, mT), (0, MB.g)(BB, null, wB, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintTranslucency" in BB,
            get: BB => BB.useAlbedoToTintTranslucency,
            set: (BB, TB) => {
              BB.useAlbedoToTintTranslucency = TB
            }
          },
          metadata: TB
        }, iT, NT), (0, MB.g)(BB, null, UB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, TB) => {
              BB.thicknessTexture = TB
            }
          },
          metadata: TB
        }, tT, fT), (0, MB.g)(BB, null, FB, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionTexture" in BB,
            get: BB => BB.refractionTexture,
            set: (BB, TB) => {
              BB.refractionTexture = TB
            }
          },
          metadata: TB
        }, sT, MT), (0, MB.g)(BB, null, KB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, TB) => {
              BB.indexOfRefraction = TB
            }
          },
          metadata: TB
        }, zT, wT), (0, MB.g)(BB, null, IB, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertRefractionY" in BB,
            get: BB => BB.invertRefractionY,
            set: (BB, TB) => {
              BB.invertRefractionY = TB
            }
          },
          metadata: TB
        }, KT, rT), (0, MB.g)(BB, null, cB, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkRefractionWithTransparency" in BB,
            get: BB => BB.linkRefractionWithTransparency,
            set: (BB, TB) => {
              BB.linkRefractionWithTransparency = TB
            }
          },
          metadata: TB
        }, IT, cT), (0, MB.g)(BB, null, CB, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMaskFromThicknessTexture" in BB,
            get: BB => BB.useMaskFromThicknessTexture,
            set: (BB, TB) => {
              BB.useMaskFromThicknessTexture = TB
            }
          },
          metadata: TB
        }, AT, bT), (0, MB.g)(BB, null, qB, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensityTexture" in BB,
            get: BB => BB.refractionIntensityTexture,
            set: (BB, TB) => {
              BB.refractionIntensityTexture = TB
            }
          },
          metadata: TB
        }, nT, eT), (0, MB.g)(BB, null, xB, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensityTexture" in BB,
            get: BB => BB.translucencyIntensityTexture,
            set: (BB, TB) => {
              BB.translucencyIntensityTexture = TB
            }
          },
          metadata: TB
        }, Bd, Td), (0, MB.g)(BB, null, bB, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColorTexture" in BB,
            get: BB => BB.translucencyColorTexture,
            set: (BB, TB) => {
              BB.translucencyColorTexture = TB
            }
          },
          metadata: TB
        }, yd, pd), (0, MB.g)(BB, null, eB, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGltfStyleTextures" in BB,
            get: BB => BB.useGltfStyleTextures,
            set: (BB, TB) => {
              BB.useGltfStyleTextures = TB
            }
          },
          metadata: TB
        }, ld, Jd), (0, MB.g)(null, null, NB, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scatteringDiffusionProfileIndex" in BB,
            get: BB => BB._scatteringDiffusionProfileIndex,
            set: (BB, TB) => {
              BB._scatteringDiffusionProfileIndex = TB
            }
          },
          metadata: TB
        }, LT, OT), (0, MB.g)(null, null, tB, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensity" in BB,
            get: BB => BB.refractionIntensity,
            set: (BB, TB) => {
              BB.refractionIntensity = TB
            }
          },
          metadata: TB
        }, DT, uT), (0, MB.g)(null, null, fB, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensity" in BB,
            get: BB => BB.translucencyIntensity,
            set: (BB, TB) => {
              BB.translucencyIntensity = TB
            }
          },
          metadata: TB
        }, HT, ET), (0, MB.g)(null, null, rB, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "_volumeIndexOfRefraction" in BB,
            get: BB => BB._volumeIndexOfRefraction,
            set: (BB, TB) => {
              BB._volumeIndexOfRefraction = TB
            }
          },
          metadata: TB
        }, UT, FT), (0, MB.g)(null, null, SB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, TB) => {
              BB.minimumThickness = TB
            }
          },
          metadata: TB
        }, ST, PT), (0, MB.g)(null, null, PB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, TB) => {
              BB.maximumThickness = TB
            }
          },
          metadata: TB
        }, QT, RT), (0, MB.g)(null, null, QB, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useThicknessAsDepth" in BB,
            get: BB => BB.useThicknessAsDepth,
            set: (BB, TB) => {
              BB.useThicknessAsDepth = TB
            }
          },
          metadata: TB
        }, aT, ZT), (0, MB.g)(null, null, aB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, TB) => {
              BB.tintColor = TB
            }
          },
          metadata: TB
        }, XT, WT), (0, MB.g)(null, null, ZB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, TB) => {
              BB.tintColorAtDistance = TB
            }
          },
          metadata: TB
        }, hT, CT), (0, MB.g)(null, null, WB, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: BB => "dispersion" in BB,
            get: BB => BB.dispersion,
            set: (BB, TB) => {
              BB.dispersion = TB
            }
          },
          metadata: TB
        }, GT, qT), (0, MB.g)(null, null, hB, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffusionDistance" in BB,
            get: BB => BB.diffusionDistance,
            set: (BB, TB) => {
              BB.diffusionDistance = TB
            }
          },
          metadata: TB
        }, xT, jT), (0, MB.g)(null, null, jB, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColor" in BB,
            get: BB => BB.translucencyColor,
            set: (BB, TB) => {
              BB.translucencyColor = TB
            }
          },
          metadata: TB
        }, dd, Vd), (0, MB.g)(null, null, BT, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyAlbedoAfterSubSurface" in BB,
            get: BB => BB.applyAlbedoAfterSubSurface,
            set: (BB, TB) => {
              BB.applyAlbedoAfterSubSurface = TB
            }
          },
          metadata: TB
        }, Yd, gd), (0, MB.g)(null, null, TT, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacyTranslucency" in BB,
            get: BB => BB.legacyTranslucency,
            set: (BB, TB) => {
              BB.legacyTranslucency = TB
            }
          },
          metadata: TB
        }, od, kd), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, BB.DEFAULT_LEGACY_TRANSLUCENCY = !1, BB
    })();
    var gT = dB(39090),
      oT = dB(39075),
      kT = dB(39101),
      LT = dB(39108),
      OT = dB(39117),
      DT = dB(39119),
      uT = dB(39126),
      HT = dB(39130),
      ET = dB(38629);
    const vT = {
      effect: null,
      subMesh: null
    };
    class mT extends((0, uT.c)((0, DT.b)(ZB.d))) {}
    class iT extends((0, qB.h)(mT)) {
      constructor(BB) {
        super(BB), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class NT extends((0, HT.c)(jB.c)) {}
    let tT = (() => {
      var BB, TB;
      let VB, yB = NT,
        lB = [],
        JB = [];
      return BB = class extends yB {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(BB) {
          this._realTimeFiltering = BB, this.VdB(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(BB) {
          this._realTimeFilteringQuality = BB, this.VdB(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, MB.b)(this, TB, "f")
        }
        set debugMode(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        constructor(dB, VB) {
          super(dB, VB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new RB.r(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = GB.c.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new GB.c(0, 0, 0), this._albedoColor = new GB.c(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new GB.c(1, 1, 1), this._reflectionColor = new GB.c(1, 1, 1), this._emissiveColor = new GB.c(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = BB.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new UB.g(16), this._globalAmbientColor = new GB.c(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, TB.set(this, (0, MB.h)(this, lB, 0)), this.debugLimit = ((0, MB.h)(this, JB), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new hB(this), this.clearCoat = new BT(this), this.iridescence = new dT(this), this.anisotropy = new yT(this), this.sheen = new lT(this), this.subSurface = new YT(this), this.detailMap = new gT.b(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), AB.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = cB(this.jU()), this.prePassConfiguration = new CB.e
        }
        get hasRenderTargetTextures() {
          return !!(AB.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
        }
        get isPrePassCapable() {
          return !this.disableDepthWrite
        }
        getClassName() {
          return "PBRBaseMaterial"
        }
        get _disableAlphaBlending() {
          return this._transparencyMode === BB.PBRMATERIAL_OPAQUE || this._transparencyMode === BB.PBRMATERIAL_ALPHATEST || this.subSurface?.disableAlphaBlending
        }
        needAlphaBlending() {
          return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromAlbedoTexture())
        }
        needAlphaTesting() {
          return this._hasTransparencyMode ? this._transparencyModeIsTest : !this.subSurface?.disableAlphaBlending && (this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === BB.PBRMATERIAL_ALPHATEST))
        }
        _shouldUseAlphaFromAlbedoTexture() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha && this._useAlphaFromAlbedoTexture && this._transparencyMode !== BB.PBRMATERIAL_OPAQUE
        }
        _hasAlphaChannel() {
          return null != this._albedoTexture && this._albedoTexture.hasAlpha || null != this._opacityTexture
        }
        getAlphaTestTexture() {
          return this._albedoTexture
        }
        isReadyForSubMesh(BB, TB, dB) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const VB = TB._drawWrapper;
          if (VB.effect && this.isFrozen && VB._wasPreviouslyReady && VB._wasPreviouslyUsingInstances === dB) return !0;
          TB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), TB.materialDefines = new iT(this._eventInfo.defineNames));
          const yB = TB.materialDefines;
          if (this._isReadyForSubMesh(TB)) return !0;
          const pB = this.jU(),
            lB = pB.PD();
          if (yB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, pB.texturesEnabled)) {
            if (this._albedoTexture && AB.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && AB.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && AB.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && AB.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && AB.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getReflectionTexture();
            if (BB && AB.d.ReflectionTextureEnabled) {
              if (!BB.isReadyOrNotBlocking()) return !1;
              if (BB.irradianceTexture) {
                if (!BB.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!BB.sphericalPolynomial && BB.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && AB.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && AB.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (AB.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (lB.getCaps().standardDerivatives && this._bumpTexture && AB.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && AB.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = yB, this._eventInfo.subMesh = TB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (yB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (yB.AREALIGHTUSED || yB.CLUSTLIGHT_BATCH)
            for (let kB = 0; kB < BB.lightSources.length; kB++)
              if (!BB.lightSources[kB]._isReady()) return !1;
          if (lB.getCaps().standardDerivatives || BB.isVerticesDataPresent(aB.m.NormalKind) || (BB.createNormals(!0), wB.b.Warn("PBRMaterial: Normals have been created for the mesh: " + BB.name)), !(0, nB.d)(pB, BB, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const JB = TB.effect,
            YB = yB._areLightsDisposed,
            gB = this._prepareEffect(BB, TB.getRenderingMesh(), yB, this.onCompiled, this.onError, dB, null);
          let oB = !1;
          if (gB)
            if (this._onEffectCreatedObservable && (vT.effect = gB, vT.subMesh = TB, this._onEffectCreatedObservable.notifyObservers(vT)), this.allowShaderHotSwapping && JB && !gB.isReady()) {
              if (yB.markAsUnprocessed(), oB = this.isFrozen, YB) return yB._areLightsDisposed = !0, !1
            } else pB.resetCachedMaterial(), TB.setEffect(gB, yB, this._materialContext);
          return !(!TB.effect || !TB.effect.isReady()) && (yB._renderId = pB.getRenderId(), VB._wasPreviouslyReady = !oB, VB._wasPreviouslyUsingInstances = !!dB, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(TB, dB, VB) {
          let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(TB, dB, VB, lB, JB), !VB.isDirty) return null;
          VB.markAsProcessed();
          const YB = this.jU().PD(),
            gB = new bB.d;
          let oB = 0;
          VB.USESPHERICALINVERTEX && gB.addFallback(oB++, "USESPHERICALINVERTEX"), VB.FOG && gB.addFallback(oB, "FOG"), VB.SPECULARAA && gB.addFallback(oB, "SPECULARAA"), VB.POINTSIZE && gB.addFallback(oB, "POINTSIZE"), VB.LOGARITHMICDEPTH && gB.addFallback(oB, "LOGARITHMICDEPTH"), VB.PARALLAX && gB.addFallback(oB, "PARALLAX"), VB.PARALLAX_RHS && gB.addFallback(oB, "PARALLAX_RHS"), VB.PARALLAXOCCLUSION && gB.addFallback(oB++, "PARALLAXOCCLUSION"), VB.ENVIRONMENTBRDF && gB.addFallback(oB++, "ENVIRONMENTBRDF"), VB.TANGENT && gB.addFallback(oB++, "TANGENT"), VB.BUMP && gB.addFallback(oB++, "BUMP"), oB = (0, nB.x)(VB, gB, this._maxSimultaneousLights, oB), VB.SPECULARTERM && gB.addFallback(oB++, "SPECULARTERM"), VB.USESPHERICALFROMREFLECTIONMAP && gB.addFallback(oB++, "USESPHERICALFROMREFLECTIONMAP"), VB.USEIRRADIANCEMAP && gB.addFallback(oB++, "USEIRRADIANCEMAP"), VB.LIGHTMAP && gB.addFallback(oB++, "LIGHTMAP"), VB.NORMAL && gB.addFallback(oB++, "NORMAL"), VB.AMBIENT && gB.addFallback(oB++, "AMBIENT"), VB.EMISSIVE && gB.addFallback(oB++, "EMISSIVE"), VB.VERTEXCOLOR && gB.addFallback(oB++, "VERTEXCOLOR"), VB.MORPHTARGETS && gB.addFallback(oB++, "MORPHTARGETS"), VB.MULTIVIEW && gB.addFallback(0, "MULTIVIEW");
          const kB = [aB.m.PositionKind];
          VB.NORMAL && kB.push(aB.m.NormalKind), VB.TANGENT && kB.push(aB.m.TangentKind);
          for (let BB = 1; BB <= 6; ++BB) VB["UV" + BB] && kB.push(`uv${1===BB?"":BB}`);
          VB.VERTEXCOLOR && kB.push(aB.m.ColorKind), (0, nB.D)(kB, TB, VB, gB), (0, nB.F)(kB, VB), (0, nB.G)(kB, TB, VB), (0, nB.A)(kB, TB, VB);
          let LB = "pbr";
          const OB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            DB = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, nB.jb)(OB, DB, !0);
          const uB = ["Material", "Scene", "Mesh"],
            HB = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: VB.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = gB, this._eventInfo.fallbackRank = oB, this._eventInfo.defines = VB, this._eventInfo.uniforms = OB, this._eventInfo.attributes = kB, this._eventInfo.samplers = DB, this._eventInfo.uniformBuffersNames = uB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = TB, this._eventInfo.indexParameters = HB, this._callbackPluginEventGeneric(128, this._eventInfo), OT.e.AddUniformsAndSamplers(OB, DB), CB.e.AddUniforms(OB), CB.e.AddSamplers(DB), (0, oT.c)(OB), this._useVertexPulling) {
            const BB = dB?.geometry;
            BB && (this._vertexPullingMetadata = (0, kT.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, TB) => {
              OB.push(`vp_${TB}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          xB.b && (xB.b.PrepareUniforms(OB, VB), xB.b.PrepareSamplers(DB, VB)), (0, nB.nb)({
            uniformsNames: OB,
            uniformBuffersNames: uB,
            samplers: DB,
            defines: VB,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const EB = {};
          this.customShaderNameResolve && (LB = this.customShaderNameResolve(LB, OB, uB, DB, VB, kB, EB));
          const vB = VB.toString(),
            mB = YB.createEffect(LB, {
              attributes: kB,
              uniformsNames: OB,
              uniformBuffersNames: uB,
              samplers: DB,
              defines: vB,
              fallbacks: gB,
              onCompiled: yB,
              onError: pB,
              indexParameters: HB,
              processFinalCode: EB.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: VB.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, YB);
          return this._eventInfo.customCode = void 0, mB
        }
        _prepareDefines(TB, dB, VB) {
          let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const lB = dB.hasThinInstances,
            JB = this.jU(),
            YB = JB.PD();
          (0, nB.Q)(JB, TB, VB, !0, this._maxSimultaneousLights, this._disableLighting), VB._needNormals = !0, (0, nB.Z)(JB, VB);
          const gB = this.needAlphaBlendingForMesh(TB) && this.jU().useOrderIndependentTransparency;
          if ((0, nB.bb)(JB, VB, this.canRenderToMRT && !gB), (0, nB._)(JB, VB, gB), OT.e.PrepareDefines(YB.currentRenderPassId, TB, VB), VB.METALLICWORKFLOW = this.isMetallicWorkflow(), VB._areTexturesDirty) {
            VB._needUVs = !1;
            for (let BB = 1; BB <= 6; ++BB) VB["MAINUV" + BB] = !1;
            if (JB.texturesEnabled) {
              VB.ALBEDODIRECTUV = 0, VB.BASE_WEIGHTDIRECTUV = 0, VB.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, VB.AMBIENTDIRECTUV = 0, VB.OPACITYDIRECTUV = 0, VB.EMISSIVEDIRECTUV = 0, VB.REFLECTIVITYDIRECTUV = 0, VB.MICROSURFACEMAPDIRECTUV = 0, VB.METALLIC_REFLECTANCEDIRECTUV = 0, VB.REFLECTANCEDIRECTUV = 0, VB.BUMPDIRECTUV = 0, VB.LIGHTMAPDIRECTUV = 0, YB.getCaps().textureLOD && (VB.LODBASEDMICROSFURACE = !0), this._albedoTexture && AB.d.DiffuseTextureEnabled ? ((0, nB.S)(this._albedoTexture, VB, "ALBEDO"), VB.GAMMAALBEDO = this._albedoTexture.gammaSpace) : VB.ALBEDO = !1, this._baseWeightTexture && AB.d.BaseWeightTextureEnabled ? (0, nB.S)(this._baseWeightTexture, VB, "BASE_WEIGHT") : VB.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && AB.d.BaseDiffuseRoughnessTextureEnabled ? (0, nB.S)(this._baseDiffuseRoughnessTexture, VB, "BASE_DIFFUSE_ROUGHNESS") : VB.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && AB.d.AmbientTextureEnabled ? ((0, nB.S)(this._ambientTexture, VB, "AMBIENT"), VB.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : VB.AMBIENT = !1, this._opacityTexture && AB.d.OpacityTextureEnabled ? ((0, nB.S)(this._opacityTexture, VB, "OPACITY"), VB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : VB.OPACITY = !1;
              const BB = this._getReflectionTexture(),
                TB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || YB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, nB.P)(JB, BB, VB, this.realTimeFiltering, this.realTimeFilteringQuality, !TB), this._lightmapTexture && AB.d.LightmapTextureEnabled ? ((0, nB.S)(this._lightmapTexture, VB, "LIGHTMAP"), VB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, VB.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, VB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : VB.LIGHTMAP = !1, this._emissiveTexture && AB.d.EmissiveTextureEnabled ? ((0, nB.S)(this._emissiveTexture, VB, "EMISSIVE"), VB.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : VB.EMISSIVE = !1, AB.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, nB.S)(this._metallicTexture, VB, "REFLECTIVITY"), VB.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, VB.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, VB.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, VB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, VB.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, nB.S)(this._reflectivityTexture, VB, "REFLECTIVITY"), VB.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, VB.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, VB.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : VB.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (VB.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, nB.S)(this._metallicReflectanceTexture, VB, "METALLIC_REFLECTANCE"), VB.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : VB.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, nB.S)(this._reflectanceTexture, VB, "REFLECTANCE"), VB.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : VB.REFLECTANCE = !1) : (VB.METALLIC_REFLECTANCE = !1, VB.REFLECTANCE = !1), this._microSurfaceTexture ? (0, nB.S)(this._microSurfaceTexture, VB, "MICROSURFACEMAP") : VB.MICROSURFACEMAP = !1) : (VB.REFLECTIVITY = !1, VB.MICROSURFACEMAP = !1), YB.getCaps().standardDerivatives && this._bumpTexture && AB.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, nB.S)(this._bumpTexture, VB, "BUMP"), this._useParallax && this._albedoTexture && AB.d.DiffuseTextureEnabled ? (VB.PARALLAX = !0, VB.PARALLAX_RHS = JB.useRightHandedSystem, VB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : VB.PARALLAX = !1, VB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (VB.BUMP = !1, VB.PARALLAX = !1, VB.PARALLAX_RHS = !1, VB.PARALLAXOCCLUSION = !1, VB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && AB.d.ReflectionTextureEnabled ? (VB.ENVIRONMENTBRDF = !0, VB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (VB.ENVIRONMENTBRDF = !1, VB.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? VB.ALPHAFROMALBEDO = !0 : VB.ALPHAFROMALBEDO = !1
            }
            VB.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === BB.LIGHTFALLOFF_STANDARD ? (VB.USEPHYSICALLIGHTFALLOFF = !1, VB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === BB.LIGHTFALLOFF_GLTF ? (VB.USEPHYSICALLIGHTFALLOFF = !1, VB.USEGLTFLIGHTFALLOFF = !0) : (VB.USEPHYSICALLIGHTFALLOFF = !0, VB.USEGLTFLIGHTFALLOFF = !1), VB.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? VB.TWOSIDEDLIGHTING = !0 : VB.TWOSIDEDLIGHTING = !1, VB.MIRRORED = !!JB._mirroredCameraPosition, VB.SPECULARAA = YB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(VB._areTexturesDirty || VB._areMiscDirty) && (VB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, VB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, VB.ALPHABLEND = this.needAlphaBlendingForMesh(TB), VB.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, VB.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), VB._areTexturesDirty && (VB.TEXTURE_REPETITION_MODE = YB.version > 1 || YB.isWebGPU ? this.textureRepetitionMode : 0), VB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(VB), VB.FORCENORMALFORWARD = this._forceNormalForward, VB.RADIANCEOCCLUSION = this._useRadianceOcclusion, VB.HORIZONOCCLUSION = this._useHorizonOcclusion, VB._areMiscDirty && ((0, nB.W)(TB, JB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(TB), VB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, dB, this._isVertexOutputInvariant), VB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !TB.isVerticesDataPresent(aB.m.NormalKind), VB.DEBUGMODE = this._debugMode), (0, nB.L)(JB, YB, this, VB, !!yB, pB, lB), this._eventInfo.defines = VB, this._eventInfo.mesh = TB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, nB.I)(TB, VB, !0, !0, !0, this._transparencyMode !== BB.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(BB, TB, dB) {
          const VB = {
            clipPlane: !1,
            useInstances: !1,
            ...dB
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const dB = new iT(this._eventInfo.defineNames),
              yB = this._prepareEffect(BB, BB, dB, void 0, void 0, VB.useInstances, VB.clipPlane);
            this._onEffectCreatedObservable && (vT.effect = yB, vT.subMesh = null, this._onEffectCreatedObservable.notifyObservers(vT)), yB.isReady() ? TB && TB(this) : yB.onCompileObservable.add((() => {
              TB && TB(this)
            }))
          })()
        }
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          BB.addUniform("vAlbedoInfos", 2), BB.addUniform("vBaseWeightInfos", 2), BB.addUniform("vBaseDiffuseRoughnessInfos", 2), BB.addUniform("vAmbientInfos", 4), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vReflectivityInfos", 3), BB.addUniform("vMicroSurfaceSamplerInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("albedoMatrix", 16), BB.addUniform("baseWeightMatrix", 16), BB.addUniform("baseDiffuseRoughnessMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("reflectivityMatrix", 16), BB.addUniform("microSurfaceSamplerMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vAlbedoColor", 4), BB.addUniform("baseWeight", 1), BB.addUniform("baseDiffuseRoughness", 1), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vReflectivityColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vAmbientColor", 3), BB.addUniform("vDebugMode", 2), BB.addUniform("vMetallicReflectanceFactors", 4), BB.addUniform("vMetallicReflectanceInfos", 2), BB.addUniform("metallicReflectanceMatrix", 16), BB.addUniform("vReflectanceInfos", 2), BB.addUniform("reflectanceMatrix", 16), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, nB.fb)(BB, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(BB, TB, dB) {
          const VB = this.jU(),
            yB = dB.materialDefines;
          if (!yB) return;
          const pB = dB.effect;
          if (!pB) return;
          this._activeEffect = pB, TB.getMeshUniformBuffer().bindToEffect(pB, "Mesh"), TB.transferToEffect(BB);
          const lB = VB.PD();
          this._uniformBuffer.bindToEffect(pB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, VB, TB, BB, this.isFrozen), OT.e.Bind(lB.currentRenderPassId, this._activeEffect, TB, BB, this);
          const JB = VB.activeCamera;
          JB ? this._uniformBuffer.updateFloat4("cameraInfo", JB.minZ, JB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const YB = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", YB[0], YB[1], YB[2], YB[3]), this._eventInfo.subMesh = dB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), yB.OBJECTSPACE_NORMALMAP && (BB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const gB = this._mustRebind(VB, pB, dB, TB.visibility),
            oB = lB._features.needToAlwaysBindUniformBuffers;
          (0, nB.f)(TB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, kT.b)(this._activeEffect, this._vertexPullingMetadata);
          let kB = null;
          const LB = this._uniformBuffer;
          if (gB) {
            if (this.bindViewProjection(pB), kB = this._getReflectionTexture(), !LB.useUbo || !this.isFrozen || !LB.isSync || dB._drawWrapper._forceRebindOnNextCall) {
              if (VB.texturesEnabled && (this._albedoTexture && AB.d.DiffuseTextureEnabled && (LB.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, nB.u)(this._albedoTexture, LB, "albedo")), this._baseWeightTexture && AB.d.BaseWeightTextureEnabled && (LB.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, nB.u)(this._baseWeightTexture, LB, "baseWeight")), this._baseDiffuseRoughnessTexture && AB.d.BaseDiffuseRoughnessTextureEnabled && (LB.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, nB.u)(this._baseDiffuseRoughnessTexture, LB, "baseDiffuseRoughness")), this._ambientTexture && AB.d.AmbientTextureEnabled && (LB.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, nB.u)(this._ambientTexture, LB, "ambient")), this._opacityTexture && AB.d.OpacityTextureEnabled && (LB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, nB.u)(this._opacityTexture, LB, "opacity")), this._emissiveTexture && AB.d.EmissiveTextureEnabled && (LB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, nB.u)(this._emissiveTexture, LB, "emissive")), this._lightmapTexture && AB.d.LightmapTextureEnabled && (LB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, nB.u)(this._lightmapTexture, LB, "lightmap")), AB.d.SpecularTextureEnabled && (this._metallicTexture ? (LB.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, nB.u)(this._metallicTexture, LB, "reflectivity")) : this._reflectivityTexture && (LB.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, nB.u)(this._reflectivityTexture, LB, "reflectivity")), this._metallicReflectanceTexture && (LB.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, nB.u)(this._metallicReflectanceTexture, LB, "metallicReflectance")), this._reflectanceTexture && yB.REFLECTANCE && (LB.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, nB.u)(this._reflectanceTexture, LB, "reflectance")), this._microSurfaceTexture && (LB.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, nB.u)(this._microSurfaceTexture, LB, "microSurfaceSampler"))), this._bumpTexture && lB.getCaps().standardDerivatives && AB.d.BumpTextureEnabled && !this._disableBumpMap && (LB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, nB.u)(this._bumpTexture, LB, "bump"), VB._mirroredCameraPosition ? LB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : LB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, nB.j)(VB, yB, LB, this._reflectionColor, kB, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && LB.updateFloat("pointSize", this.pointSize), yB.METALLICWORKFLOW) {
                GB.h.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, GB.h.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const BB = this.subSurface?._indexOfRefraction ?? 1.5,
                  TB = 1;
                GB.h.Color4[0].b = BB;
                const dB = Math.pow((BB - TB) / (BB + TB), 2);
                GB.h.Color4[0].a = dB, LB.updateDirectColor4("vReflectivityColor", GB.h.Color4[0]), LB.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else LB.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              LB.updateColor3("vEmissiveColor", AB.d.EmissiveTextureEnabled ? this._emissiveColor : GB.c.BlackReadOnly), !yB.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? LB.updateColor4("vAlbedoColor", this._albedoColor, 1) : LB.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), LB.updateFloat("baseWeight", this._baseWeight), LB.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * VB.environmentIntensity, this._lightingInfos.w = this._specularIntensity, LB.updateVector4("vLightingIntensity", this._lightingInfos), VB.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), LB.updateColor3("vAmbientColor", this._globalAmbientColor), LB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            VB.texturesEnabled && (this._albedoTexture && AB.d.DiffuseTextureEnabled && LB.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && AB.d.BaseWeightTextureEnabled && LB.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && AB.d.BaseDiffuseRoughnessTextureEnabled && LB.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && AB.d.AmbientTextureEnabled && LB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && AB.d.OpacityTextureEnabled && LB.setTexture("opacitySampler", this._opacityTexture), (0, nB.m)(VB, yB, LB, kB, this.realTimeFiltering), yB.ENVIRONMENTBRDF && LB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && AB.d.EmissiveTextureEnabled && LB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && AB.d.LightmapTextureEnabled && LB.setTexture("lightmapSampler", this._lightmapTexture), AB.d.SpecularTextureEnabled && (this._metallicTexture ? LB.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && LB.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && LB.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && yB.REFLECTANCE && LB.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && LB.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && lB.getCaps().standardDerivatives && AB.d.BumpTextureEnabled && !this._disableBumpMap && LB.setTexture("bumpSampler", this._bumpTexture)), this.jU().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(TB) && this.jU().depthPeelingRenderer.bind(pB), this._eventInfo.subMesh = dB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oT.d)(this._activeEffect, this, VB), this.bindEyePosition(pB)
          } else oB && (this._needToBindSceneUbo = !0);
          !gB && this.isFrozen && !oB || !VB.lightsEnabled || this._disableLighting || (0, nB.n)(VB, TB, this._activeEffect, yB, this._maxSimultaneousLights), !gB && this.isFrozen || ((VB.fogEnabled && TB.applyFog && VB.fogMode !== QB.g.FOGMODE_NONE || kB || this.subSurface.refractionTexture || TB.receiveShadows || yB.PREPASS || yB.CLUSTLIGHT_BATCH) && this.bindView(pB), (0, nB.h)(VB, TB, this._activeEffect, !0), yB.NUM_MORPH_INFLUENCERS && (0, nB.q)(TB, this._activeEffect), yB.BAKED_VERTEX_ANIMATION_TEXTURE && TB.bakedVertexAnimationManager?.bind(pB, yB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, nB.p)(yB, this._activeEffect, VB)), this._afterBind(TB, this._activeEffect, dB), LB.update()
        }
        getAnimatables() {
          const BB = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && BB.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && BB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && BB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? BB.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && BB.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && BB.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && BB.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && BB.push(this._microSurfaceTexture), BB
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.jU().environmentTexture
        }
        getActiveTextures() {
          const BB = super.getActiveTextures();
          return this._albedoTexture && BB.push(this._albedoTexture), this._baseWeightTexture && BB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && BB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && BB.push(this._ambientTexture), this._opacityTexture && BB.push(this._opacityTexture), this._reflectionTexture && BB.push(this._reflectionTexture), this._emissiveTexture && BB.push(this._emissiveTexture), this._reflectivityTexture && BB.push(this._reflectivityTexture), this._metallicTexture && BB.push(this._metallicTexture), this._metallicReflectanceTexture && BB.push(this._metallicReflectanceTexture), this._reflectanceTexture && BB.push(this._reflectanceTexture), this._microSurfaceTexture && BB.push(this._microSurfaceTexture), this._bumpTexture && BB.push(this._bumpTexture), this._lightmapTexture && BB.push(this._lightmapTexture), BB
        }
        hasTexture(BB) {
          return !!super.hasTexture(BB) || (this._albedoTexture === BB || (this._baseWeightTexture === BB || (this._baseDiffuseRoughnessTexture === BB || (this._ambientTexture === BB || (this._opacityTexture === BB || (this._reflectionTexture === BB || (this._emissiveTexture === BB || (this._reflectivityTexture === BB || (this._metallicTexture === BB || (this._metallicReflectanceTexture === BB || (this._reflectanceTexture === BB || (this._microSurfaceTexture === BB || (this._bumpTexture === BB || this._lightmapTexture === BB)))))))))))))
        }
        setPrePassRenderer() {
          if (!this.subSurface?.isScatteringEnabled) return !1;
          const BB = this.jU().enableSubSurfaceForPrePass();
          return BB && (BB.enabled = !0), !0
        }
        dispose(BB, TB) {
          this._breakShaderLoadedCheck = !0, TB && (this._environmentBRDFTexture && this.jU().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, TB)
        }
      }, TB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
        VB = [(0, zB.i)("_markAllSubMeshesAsMiscDirty")], (0, MB.g)(BB, null, VB, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "debugMode" in BB,
            get: BB => BB.debugMode,
            set: (BB, TB) => {
              BB.debugMode = TB
            }
          },
          metadata: TB
        }, lB, JB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB.PBRMATERIAL_OPAQUE = pB.b.MATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = pB.b.MATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = pB.b.MATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = pB.b.MATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.ForceGLSL = !1, BB._ShaderLoader = new LT.b((() => [Promise.all([dB.e(297), dB.e(308)]).then((() => dB(60078))), Promise.all([dB.e(302), dB.e(298), dB.e(362), dB.e(311), dB.e(361)]).then((() => dB(60093)))]), (() => [Promise.all([dB.e(316), dB.e(318), dB.e(325)]).then((() => dB(60181))), Promise.all([dB.e(316), dB.e(319), dB.e(365), dB.e(329), dB.e(364)]).then((() => dB(60208)))])), BB
    })();
    Object.getOwnPropertyDescriptor(tT.prototype, "decalMap") || Object.defineProperty(tT.prototype, "decalMap", (0, ET.d)("PBRBaseMaterial", "decalMap")), (0, dB(40538).e)();
    var fT = dB(38772);
    var sT = dB(38848),
      MT = dB(40516),
      zT = dB(38569),
      wT = dB(38584),
      UT = dB(38702);
    let FT = !1;
    const KT = new GB.d,
      rT = new GB.d;
    class IT extends MT.b {
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
      set wrapU(BB) {
        if (this._textures)
          for (let TB = 0; TB < this._textures.length; TB++) this._textures[TB].wrapU = BB
      }
      set wrapV(BB) {
        if (this._textures)
          for (let TB = 0; TB < this._textures.length; TB++) this._textures[TB].wrapV = BB
      }
      constructor(BB, TB, dB, VB, yB, pB) {
        const lB = !(!yB || !yB.generateMipMaps) && yB.generateMipMaps,
          JB = !(!yB || !yB.generateDepthTexture) && yB.generateDepthTexture,
          YB = yB && yB.depthTextureFormat ? yB.depthTextureFormat : 15,
          gB = !yB || void 0 === yB.doNotChangeAspectRatio || yB.doNotChangeAspectRatio,
          oB = !(!yB || !yB.drawOnlyOnFirstAttachmentByDefault) && yB.drawOnlyOnFirstAttachmentByDefault;
        if (super(BB, TB, VB, lB, gB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), FT || (FT = !0, wT.ThinEngine.prototype.restoreSingleAttachment = function() {
            const BB = this._gl;
            this.bindAttachments([BB.BACK])
          }, wT.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const BB = this._gl;
            this.bindAttachments([BB.COLOR_ATTACHMENT0])
          }, wT.ThinEngine.prototype.buildTextureLayout = function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const dB = this._gl,
              VB = [];
            if (TB) VB.push(dB.BACK);
            else
              for (let yB = 0; yB < BB.length; yB++) BB[yB] ? VB.push(dB["COLOR_ATTACHMENT" + yB]) : VB.push(dB.NONE);
            return VB
          }, wT.ThinEngine.prototype.bindAttachments = function(BB) {
            const TB = this._gl,
              dB = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, dB)
              for (let VB = 0; VB < BB.length; VB++) BB[VB] !== TB.NONE && dB[VB] && (0, UT.h)(dB[VB].format) && (this._integerMRTAttachmentsMask |= 1 << VB);
            TB.drawBuffers(BB)
          }, wT.ThinEngine.prototype.clearAttachments = function(BB, TB, dB, VB) {
            let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const lB = this._currentRenderTarget?.textures;
            let JB = !1;
            if (dB && BB && lB)
              for (let YB = 0; YB < TB.length; YB++) {
                const BB = lB[YB];
                if (TB[YB] !== this._gl.NONE && BB && (0, UT.h)(BB.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  JB = !0;
                  break
                }
              }
            if (!JB || !BB || !lB) return this.bindAttachments(TB), void this.clear(BB, dB, VB, yB, pB);
            this.bindAttachments(TB), this._applyColorWriteState();
            for (let YB = 0; YB < TB.length; YB++) {
              const dB = lB[YB];
              if (TB[YB] !== this._gl.NONE && dB) {
                let TB = BB;
                if ((0, UT.h)(dB.format)) {
                  const VB = (0, UT.l)(dB.type);
                  TB = VB ? KT : rT;
                  const yB = VB ? 255 : 1;
                  TB.r = Math.round(BB.r * yB), TB.g = Math.round(BB.g * yB), TB.b = Math.round(BB.b * yB), TB.a = Math.round(BB.a * yB)
                }
                this._clearColorAttachment(YB, TB, dB.format, dB.type)
              }
            }
            if (VB || yB) {
              const BB = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, VB, yB, pB)
              } finally {
                this._integerMRTAttachmentsMask = BB
              }
            }
          }, wT.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              dB = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, BB.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(BB), TB || this.generateMipMapsMultiFramebuffer(BB), dB && (BB._MSAAFramebuffer && this._bindUnboundFramebuffer(BB._framebuffer), dB()), this._bindUnboundFramebuffer(null)
          }, wT.ThinEngine.prototype.createMultipleRenderTarget = function(BB, TB) {
            let dB, VB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              yB = !1,
              pB = !0,
              lB = !1,
              JB = !1,
              YB = 1,
              gB = 1,
              oB = [],
              kB = [],
              LB = [],
              OB = [],
              DB = [],
              uB = [],
              HB = [],
              EB = [],
              vB = [],
              mB = !1;
            const iB = this._createHardwareRenderTargetWrapper(!0, !1, BB);
            void 0 !== TB && (yB = void 0 !== TB.generateMipMaps && TB.generateMipMaps, pB = void 0 === TB.generateDepthBuffer || TB.generateDepthBuffer, lB = void 0 !== TB.generateStencilBuffer && TB.generateStencilBuffer, JB = void 0 !== TB.generateDepthTexture && TB.generateDepthTexture, YB = TB.BJB ?? 1, gB = TB.samples ?? gB, oB = TB.types || oB, kB = TB.samplingModes || kB, LB = TB.useSRGBBuffers || LB, OB = TB.formats || OB, DB = TB.targetTypes || DB, uB = TB.faceIndex || uB, HB = TB.layerIndex || HB, EB = TB.layerCounts || EB, vB = TB.labels || vB, mB = TB.dontCreateTextures ?? !1, this.Lu > 1 && (13 === TB.depthTextureFormat || 17 === TB.depthTextureFormat || 16 === TB.depthTextureFormat || 14 === TB.depthTextureFormat || 18 === TB.depthTextureFormat) && (dB = TB.depthTextureFormat)), void 0 === dB && (dB = lB ? 13 : 14);
            const NB = this._gl,
              tB = this._currentFramebuffer,
              fB = NB.createFramebuffer();
            this._bindUnboundFramebuffer(fB);
            const sB = BB.width ?? BB,
              MB = BB.height ?? BB,
              zB = [],
              UB = [],
              FB = this.Lu > 1 && (13 === dB || 17 === dB || 18 === dB);
            iB.label = TB?.label ?? "MultiRenderTargetWrapper", iB._framebuffer = fB, iB._generateDepthBuffer = JB || pB, iB._generateStencilBuffer = JB ? FB : lB, iB._depthStencilBuffer = this._setupFramebufferDepthAttachments(iB._generateStencilBuffer, iB._generateDepthBuffer, sB, MB, 1, dB), iB._attachments = UB;
            for (let KB = 0; KB < YB; KB++) {
              let BB = kB[KB] || 3,
                TB = oB[KB] || 0,
                dB = LB[KB] || !1;
              const VB = OB[KB] || 5,
                pB = DB[KB] || 3553,
                lB = EB[KB] ?? 1;
              (1 !== TB || this._caps.textureFloatLinearFiltering) && (2 !== TB || this._caps.textureHalfFloatLinearFiltering) || (BB = 1);
              const JB = this._getSamplingParameters(BB, yB);
              1 !== TB || this._caps.textureFloat || (TB = 0, wB.b.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), dB = dB && this._caps.supportSRGBBuffers && (this.Lu > 1 || this.isWebGPU);
              const YB = this.Lu > 1,
                gB = NB[YB ? "COLOR_ATTACHMENT" + KB : "COLOR_ATTACHMENT" + KB + "_WEBGL"];
              if (UB.push(gB), -1 === pB || mB) continue;
              const uB = new zT.e(this, 6);
              zB[KB] = uB, NB.activeTexture(NB["TEXTURE" + KB]), NB.bindTexture(pB, uB._hardwareTexture.underlyingResource), NB.texParameteri(pB, NB.TEXTURE_MAG_FILTER, JB.mag), NB.texParameteri(pB, NB.TEXTURE_MIN_FILTER, JB.min), NB.texParameteri(pB, NB.TEXTURE_WRAP_S, NB.CLAMP_TO_EDGE), NB.texParameteri(pB, NB.TEXTURE_WRAP_T, NB.CLAMP_TO_EDGE);
              const HB = this._getRGBABufferInternalSizedFormat(TB, VB, dB),
                tB = this._getInternalFormat(VB),
                fB = this._getWebGLTextureType(TB);
              if (!YB || 35866 !== pB && 32879 !== pB)
                if (34067 === pB) {
                  for (let BB = 0; BB < 6; BB++) NB.texImage2D(NB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, HB, sB, MB, 0, tB, fB, null);
                  uB.isCube = !0
                } else NB.texImage2D(NB.TEXTURE_2D, 0, HB, sB, MB, 0, tB, fB, null);
              else 35866 === pB ? uB.is2DArray = !0 : uB.is3D = !0, uB.baseDepth = uB.depth = lB, NB.texImage3D(pB, 0, HB, sB, MB, lB, 0, tB, fB, null);
              yB && NB.generateMipmap(pB), this._bindTextureDirectly(pB, null), uB.baseWidth = sB, uB.baseHeight = MB, uB.width = sB, uB.height = MB, uB.isReady = !0, uB.samples = 1, uB.generateMipMaps = yB, uB.samplingMode = BB, uB.type = TB, uB._useSRGBBuffer = dB, uB.format = VB, uB.label = vB[KB] ?? iB.label + "-Texture" + KB, this._internalTexturesCache.push(uB)
            }
            if (JB && this._caps.depthTextureExtension && !mB) {
              const BB = new zT.e(this, 14);
              let TB = 5,
                VB = NB.DEPTH_COMPONENT16,
                pB = NB.DEPTH_COMPONENT,
                lB = NB.UNSIGNED_SHORT,
                JB = NB.DEPTH_ATTACHMENT;
              this.Lu < 2 ? VB = NB.DEPTH_COMPONENT : 14 === dB ? (TB = 1, lB = NB.FLOAT, VB = NB.DEPTH_COMPONENT32F) : 18 === dB ? (TB = 0, lB = NB.FLOAT_32_UNSIGNED_INT_24_8_REV, VB = NB.DEPTH32F_STENCIL8, pB = NB.DEPTH_STENCIL, JB = NB.DEPTH_STENCIL_ATTACHMENT) : 16 === dB ? (TB = 0, lB = NB.UNSIGNED_INT, VB = NB.DEPTH_COMPONENT24, JB = NB.DEPTH_ATTACHMENT) : 13 !== dB && 17 !== dB || (TB = 12, lB = NB.UNSIGNED_INT_24_8, VB = NB.DEPTH24_STENCIL8, pB = NB.DEPTH_STENCIL, JB = NB.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(NB.TEXTURE_2D, BB, !0), NB.texParameteri(NB.TEXTURE_2D, NB.TEXTURE_MAG_FILTER, NB.NEAREST), NB.texParameteri(NB.TEXTURE_2D, NB.TEXTURE_MIN_FILTER, NB.NEAREST), NB.texParameteri(NB.TEXTURE_2D, NB.TEXTURE_WRAP_S, NB.CLAMP_TO_EDGE), NB.texParameteri(NB.TEXTURE_2D, NB.TEXTURE_WRAP_T, NB.CLAMP_TO_EDGE), NB.texImage2D(NB.TEXTURE_2D, 0, VB, sB, MB, 0, pB, lB, null), NB.framebufferTexture2D(NB.FRAMEBUFFER, JB, NB.TEXTURE_2D, BB._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(NB.TEXTURE_2D, null), iB._depthStencilTexture = BB, iB._depthStencilTextureWithStencil = FB, BB.baseWidth = sB, BB.baseHeight = MB, BB.width = sB, BB.height = MB, BB.isReady = !0, BB.samples = 1, BB.generateMipMaps = yB, BB.samplingMode = 1, BB.format = dB, BB.type = TB, BB.label = iB.label + "-DepthStencil", zB[YB] = BB, this._internalTexturesCache.push(BB)
            }
            if (iB.setTextures(zB), VB && NB.drawBuffers(UB), this._bindUnboundFramebuffer(tB), iB.setLayerAndFaceIndices(HB, uB), this.resetTextureCache(), mB) {
              if (gB > 1) {
                const BB = NB.createFramebuffer();
                if (!BB) throw new Error("Unable to create multi sampled framebuffer");
                iB._samples = gB, iB._MSAAFramebuffer = BB, YB > 0 && VB && (this._bindUnboundFramebuffer(BB), NB.drawBuffers(UB), this._bindUnboundFramebuffer(tB))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(iB, gB, VB);
            return iB
          }, wT.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(BB, TB) {
            let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.Lu < 2 || !BB) return 1;
            if (BB.samples === TB) return TB;
            const VB = this._gl;
            TB = Math.min(TB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (VB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (VB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
            const yB = BB._attachments.length;
            for (let lB = 0; lB < yB; lB++) {
              const TB = BB.textures[lB]._hardwareTexture;
              TB?.releaseMSAARenderBuffers()
            }
            if (TB > 1 && "function" === typeof VB.renderbufferStorageMultisample) {
              const pB = VB.createFramebuffer();
              if (!pB) throw new Error("Unable to create multi sampled framebuffer");
              BB._MSAAFramebuffer = pB, this._bindUnboundFramebuffer(pB);
              const lB = [];
              for (let dB = 0; dB < yB; dB++) {
                const yB = BB.textures[dB],
                  pB = yB._hardwareTexture,
                  JB = VB[this.Lu > 1 ? "COLOR_ATTACHMENT" + dB : "COLOR_ATTACHMENT" + dB + "_WEBGL"],
                  YB = this._createRenderBuffer(yB.width, yB.height, TB, -1, this._getRGBABufferInternalSizedFormat(yB.type, yB.format, yB._useSRGBBuffer), JB);
                if (!YB) throw new Error("Unable to create multi sampled framebuffer");
                pB.addMSAARenderBuffer(YB), yB.samples = TB, lB.push(JB)
              }
              dB && VB.drawBuffers(lB)
            } else this._bindUnboundFramebuffer(BB._framebuffer);
            const pB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
            return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, TB, pB), this._bindUnboundFramebuffer(null), BB._samples = TB, TB
          }, wT.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(BB) {
            const TB = BB,
              dB = this._gl;
            if (TB.isMulti)
              for (let VB = 0; VB < TB._attachments.length; VB++) {
                const BB = TB.textures[VB];
                !BB?.generateMipMaps || BB?.isCube || BB?.is3D || (this._bindTextureDirectly(dB.TEXTURE_2D, BB, !0), dB.generateMipmap(dB.TEXTURE_2D), this._bindTextureDirectly(dB.TEXTURE_2D, null))
              }
          }, wT.ThinEngine.prototype.resolveMultiFramebuffer = function(BB) {
            const TB = BB,
              dB = this._gl;
            if (!TB._MSAAFramebuffer || !TB.isMulti) return;
            let VB = TB.resolveMSAAColors ? dB.COLOR_BUFFER_BIT : 0;
            VB |= TB._generateDepthBuffer && TB.resolveMSAADepth ? dB.DEPTH_BUFFER_BIT : 0, VB |= TB._generateStencilBuffer && TB.resolveMSAAStencil ? dB.STENCIL_BUFFER_BIT : 0;
            const yB = TB._attachments,
              pB = yB.length;
            dB.bindFramebuffer(dB.READ_FRAMEBUFFER, TB._MSAAFramebuffer), dB.bindFramebuffer(dB.DRAW_FRAMEBUFFER, TB._framebuffer);
            for (let lB = 0; lB < pB; lB++) {
              const BB = TB.textures[lB];
              for (let TB = 0; TB < pB; TB++) yB[TB] = dB.NONE;
              yB[lB] = dB[this.Lu > 1 ? "COLOR_ATTACHMENT" + lB : "COLOR_ATTACHMENT" + lB + "_WEBGL"], dB.readBuffer(yB[lB]), dB.drawBuffers(yB), dB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, VB, dB.NEAREST)
            }
            for (let lB = 0; lB < pB; lB++) yB[lB] = dB[this.Lu > 1 ? "COLOR_ATTACHMENT" + lB : "COLOR_ATTACHMENT" + lB + "_WEBGL"];
            dB.drawBuffers(yB), dB.bindFramebuffer(this._gl.FRAMEBUFFER, TB._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = pB;
        const kB = [],
          LB = [],
          OB = [],
          DB = [],
          uB = [],
          HB = [],
          EB = [],
          vB = [];
        this._initTypes(dB, kB, LB, OB, DB, uB, HB, EB, vB, yB);
        const mB = !yB || void 0 === yB.generateDepthBuffer || yB.generateDepthBuffer,
          iB = !(!yB || void 0 === yB.generateStencilBuffer) && yB.generateStencilBuffer,
          NB = yB && yB.samples ? yB.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: LB,
          generateMipMaps: lB,
          generateDepthBuffer: mB,
          generateStencilBuffer: iB,
          generateDepthTexture: JB,
          depthTextureFormat: YB,
          types: kB,
          BJB: dB,
          useSRGBBuffers: OB,
          samples: NB,
          formats: DB,
          targetTypes: uB,
          faceIndex: HB,
          layerIndex: EB,
          layerCounts: vB,
          labels: pB,
          label: BB
        }, this._count = dB, this._drawOnlyOnFirstAttachmentByDefault = oB, dB > 0 && (this._createInternalTextures(), this._createTextures(pB))
      }
      _initTypes(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        for (let oB = 0; oB < BB; oB++) gB && gB.types && void 0 !== gB.types[oB] ? TB.push(gB.types[oB]) : TB.push(gB && gB.defaultType ? gB.defaultType : 0), gB && gB.samplingModes && void 0 !== gB.samplingModes[oB] ? dB.push(gB.samplingModes[oB]) : dB.push(FB.f.BILINEAR_SAMPLINGMODE), gB && gB.useSRGBBuffers && void 0 !== gB.useSRGBBuffers[oB] ? VB.push(gB.useSRGBBuffers[oB]) : VB.push(!1), gB && gB.formats && void 0 !== gB.formats[oB] ? yB.push(gB.formats[oB]) : yB.push(5), gB && gB.targetTypes && void 0 !== gB.targetTypes[oB] ? pB.push(gB.targetTypes[oB]) : pB.push(3553), gB && gB.faceIndex && void 0 !== gB.faceIndex[oB] ? lB.push(gB.faceIndex[oB]) : lB.push(0), gB && gB.layerIndex && void 0 !== gB.layerIndex[oB] ? JB.push(gB.layerIndex[oB]) : JB.push(0), gB && gB.layerCounts && void 0 !== gB.layerCounts[oB] ? YB.push(gB.layerCounts[oB]) : YB.push(1)
      }
      _createInternaTextureIndexMapping() {
        const BB = {},
          TB = [];
        if (!this._renderTarget) return TB;
        const dB = this._renderTarget.textures;
        for (let VB = 0; VB < dB.length; VB++) {
          const yB = dB[VB];
          if (!yB) continue;
          const pB = BB[yB.uniqueId];
          void 0 !== pB ? TB[VB] = pB : BB[yB.uniqueId] = VB
        }
        return TB
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || BB) return;
        const VB = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), TB && (this._releaseTextures(), this._createTextures(dB));
        const yB = this._renderTarget.textures;
        for (let pB = 0; pB < yB.length; pB++) {
          const BB = this._textures[pB];
          void 0 !== VB[pB] && this._renderTarget.setTexture(yB[VB[pB]], pB), BB._texture = yB[pB], BB._texture && (BB._noMipmap = !BB._texture.useMipMaps, BB._useSRGBBuffer = BB._texture._useSRGBBuffer)
        }
        1 !== this.samples && this._renderTarget.setSamples(this.samples, !this._drawOnlyOnFirstAttachmentByDefault, !0)
      }
      _createInternalTextures() {
        this._renderTarget = this._getEngine().createMultipleRenderTarget(this._size, this._multiRenderTargetOptions, !this._drawOnlyOnFirstAttachmentByDefault), this._texture = this._renderTarget.texture
      }
      _releaseTextures() {
        if (this._textures)
          for (let BB = 0; BB < this._textures.length; BB++) this._textures[BB]._texture = null, this._textures[BB].dispose()
      }
      _createTextures(BB) {
        const TB = this._renderTarget.textures;
        this._textures = [];
        for (let dB = 0; dB < TB.length; dB++) {
          const VB = new FB.f(null, this.jU());
          BB?.[dB] && (VB.name = BB[dB]), VB._texture = TB[dB], VB._texture && (VB._noMipmap = !VB._texture.useMipMaps, VB._useSRGBBuffer = VB._texture._useSRGBBuffer), this._textures.push(VB)
        }
      }
      setInternalTexture(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === TB && (this._texture = BB), this.renderTarget.setTexture(BB, TB, dB), this.textures[TB] || (this.textures[TB] = new FB.f(null, this.jU()), this.textures[TB].name = this._textureNames?.[TB] ?? this.textures[TB].name), this.textures[TB]._texture = BB, this.textures[TB]._noMipmap = !BB.useMipMaps, this.textures[TB]._useSRGBBuffer = BB._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[TB] = BB.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[TB] = BB.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[TB] = BB._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[TB])) {
          let dB;
          dB = BB.is2DArray ? 35866 : BB.isCube ? 34067 : BB.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[TB] = dB
        }
      }
      setLayerAndFaceIndex(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[BB] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[BB] = TB), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[BB] = dB), this.renderTarget.setLayerAndFaceIndex(BB, TB, dB))
      }
      setLayerAndFaceIndices(BB, TB) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = BB, this._multiRenderTargetOptions.faceIndex = TB, this.renderTarget.setLayerAndFaceIndices(BB, TB))
      }
      get samples() {
        return this._samples
      }
      set samples(BB) {
        this._renderTarget ? this._samples = this._renderTarget.setSamples(BB) : this._samples = BB
      }
      resize(BB) {
        this._processSizeParameter(BB), this._rebuild(!1, void 0, this._textureNames)
      }
      updateCount(BB, TB, dB) {
        this._multiRenderTargetOptions.BJB = BB, this._count = BB;
        const VB = [],
          yB = [],
          pB = [],
          lB = [],
          JB = [],
          YB = [],
          gB = [],
          oB = [];
        this._textureNames = dB, this._initTypes(BB, VB, yB, pB, lB, JB, YB, gB, oB, TB), this._multiRenderTargetOptions.types = VB, this._multiRenderTargetOptions.samplingModes = yB, this._multiRenderTargetOptions.useSRGBBuffers = pB, this._multiRenderTargetOptions.formats = lB, this._multiRenderTargetOptions.targetTypes = JB, this._multiRenderTargetOptions.faceIndex = YB, this._multiRenderTargetOptions.layerIndex = gB, this._multiRenderTargetOptions.layerCounts = oB, this._multiRenderTargetOptions.labels = dB, this._rebuild(!1, !0, dB)
      }
      _unbindFrameBuffer(BB, TB) {
        this._renderTarget && BB.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(TB)
        }))
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), BB ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const BB = this._renderTarget?.textures;
        if (BB) {
          for (let TB = BB.length - 1; TB >= 0; TB--) this._textures[TB]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var cT = dB(38927);
    class ST {
      constructor(BB) {
        this.name = cT.b.NAME_GEOMETRYBUFFERRENDERER, this.Gu = BB
      }
      register() {
        this.Gu._gatherRenderTargetsStage.registerStep(cT.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(BB) {
        this.Gu._geometryBufferRenderer && BB.push(this.Gu._geometryBufferRenderer.getGBuffer())
      }
    }
    let PT = !1;
    var QT;
    ! function(BB) {
      BB[BB.Small = 0] = "Small", BB[BB.Medium = 1] = "Medium", BB[BB.Large = 2] = "Large", BB[BB.ExtraLarge = 3] = "ExtraLarge"
    }(QT || (QT = {}));
    const RT = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      aT = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class ZT {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(BB) {
        if (BB && this._enableMeshBlendTag && !this._scene.PD().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
        this._renderTransparentMeshes = BB
      }
      get normalsAreUnsigned() {
        return this._normalsAreUnsigned
      }
      _linkPrePassRenderer(BB) {
        if (this._enableObjectId || this._enableMeshBlendTag) throw new Error("GeometryBufferRenderer: object ID and mesh-blending tag textures are not supported when linked to the PrePassRenderer");
        this._linkedWithPrePass = !0, this._prePassRenderer = BB, this._multiRenderTarget && (this._multiRenderTarget.onClearObservable.clear(), this._multiRenderTarget.onClearObservable.add((() => {})))
      }
      _unlinkPrePassRenderer() {
        this._linkedWithPrePass = !1, this._createRenderTargets()
      }
      _resetLayout() {
        this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableReflectivity = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._attachmentsFromPrePass = []
      }
      _forceTextureType(BB, TB) {
        BB === ZT.POSITION_TEXTURE_TYPE ? (this._positionIndex = TB, this._enablePosition = !0) : BB === ZT.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = TB, this._enableVelocity = !0) : BB === ZT.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = TB, this._enableVelocityLinear = !0) : BB === ZT.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = TB, this._enableReflectivity = !0) : BB === ZT.DEPTH_TEXTURE_TYPE ? (this._depthIndex = TB, this._enableDepth = !0) : BB === ZT.NORMAL_TEXTURE_TYPE ? (this._normalIndex = TB, this._enableNormal = !0) : BB === ZT.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = TB, this._enableScreenspaceDepth = !0) : BB === ZT.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = TB, this._enableIrradiance = !0) : BB === ZT.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = TB, this._enableObjectId = !0) : BB === ZT.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = TB, this._enableMeshBlendTag = !0)
      }
      _setAttachments(BB) {
        this._attachmentsFromPrePass = BB
      }
      _linkInternalTexture(BB) {
        this._multiRenderTarget.setInternalTexture(BB, 0, !1)
      }
      get renderList() {
        return this._multiRenderTarget.renderList
      }
      set renderList(BB) {
        this._multiRenderTarget.renderList = BB
      }
      get isSupported() {
        return this._multiRenderTarget.isSupported
      }
      getTextureIndex(BB) {
        switch (BB) {
          case ZT.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case ZT.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case ZT.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case ZT.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case ZT.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case ZT.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case ZT.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case ZT.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case ZT.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case ZT.MESH_BLEND_TAG_TEXTURE_TYPE:
            return this._meshBlendTagIndex;
          default:
            return -1
        }
      }
      get enableDepth() {
        return this._enableDepth
      }
      set enableDepth(BB) {
        this._enableDepth = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableNormal() {
        return this._enableNormal
      }
      set enableNormal(BB) {
        this._enableNormal = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enablePosition() {
        return this._enablePosition
      }
      set enablePosition(BB) {
        this._enablePosition = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableVelocity() {
        return this._enableVelocity
      }
      set enableVelocity(BB) {
        this._enableVelocity = BB, BB || (this._previousTransformationMatrices = {}), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets()), this._scene.needsPreviousWorldMatrices = BB
      }
      get enableVelocityLinear() {
        return this._enableVelocityLinear
      }
      set enableVelocityLinear(BB) {
        this._enableVelocityLinear = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableReflectivity() {
        return this._enableReflectivity
      }
      set enableReflectivity(BB) {
        this._enableReflectivity = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableScreenspaceDepth() {
        return this._enableScreenspaceDepth
      }
      set enableScreenspaceDepth(BB) {
        this._enableScreenspaceDepth = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableIrradiance() {
        return this._enableIrradiance
      }
      set enableIrradiance(BB) {
        this._enableIrradiance = BB, this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableObjectId() {
        return this._enableObjectId
      }
      set enableObjectId(BB) {
        if (BB && this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: object ID textures are not supported when linked to the PrePassRenderer");
        if (BB && 1 !== this.samples) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (BB && !this._enableObjectId && !this._linkedWithPrePass) {
          const BB = this._scene.PD(),
            TB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
            dB = this._assignRenderTargetIndices()[0] + 1;
          if (BB.getCaps().drawBuffersExtension && dB > TB) throw new Error(`GeometryBufferRenderer: ${dB} color attachments were requested, but this engine supports at most ${TB}`)
        }
        this._enableObjectId = BB, BB || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(BB) {
        if (this._enableMeshBlendTag !== BB) {
          if (BB) {
            const BB = this._scene.PD();
            if (! function(BB) {
                return "NATIVE" !== BB.shaderPlatformName && (BB.isWebGPU || 2 === BB.Lu)
              }(BB)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !BB.isWebGPU && !BB.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const TB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
                dB = this._assignRenderTargetIndices()[0] + 1;
              if (BB.getCaps().drawBuffersExtension && dB > TB) throw new Error(`GeometryBufferRenderer: ${dB} color attachments were requested, but this engine supports at most ${TB}`)
            }
          }
          this._enableMeshBlendTag = BB, BB || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get Gu() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        var yB;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new GB.d(0, 0, 0, 0), this._clearDepthColor = new GB.d(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = BB, this._ratioOrDimensions = TB, this._useUbo = BB.PD().supportsUniformBuffers, this._depthFormat = dB, this._textureTypesAndFormats = VB || {}, this._initShaderSourceAsync(), yB = ZT, PT || (PT = !0, Object.defineProperty(QB.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(BB) {
            BB && BB.isSupported && (this._geometryBufferRenderer = BB)
          },
          enumerable: !0,
          configurable: !0
        }), QB.g.prototype.enableGeometryBufferRenderer = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            dB = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new yB(this, BB, TB, dB), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, QB.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, yB._SceneComponentInitialization = BB => {
          let TB = BB._getComponent(cT.b.NAME_GEOMETRYBUFFERRENDERER);
          TB || (TB = new ST(BB), BB.OVB(TB))
        }), ZT._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.PD().isWebGPU && !ZT.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([dB.e(317).then((() => dB(60371))), Promise.all([dB.e(316), dB.e(328)]).then((() => dB(60376)))])) : await Promise.all([dB.e(300).then((() => dB(60385))), dB.e(299).then((() => dB(60390)))]), this._shadersLoaded = !0
      }
      isReady(BB, TB) {
        if (!this._shadersLoaded) return !1;
        const dB = BB.XD();
        if (dB && dB.disableDepthWrite) return !1;
        if (function(BB) {
            return BB._isGaussianSplatting || "GaussianSplattingMesh" === (TB = BB.getClassName()) || "GaussianSplattingStream" === TB;
            var TB
          }(BB.getMesh())) return !1;
        const VB = [],
          yB = [aB.m.PositionKind],
          pB = BB.getMesh();
        pB.isVerticesDataPresent(aB.m.NormalKind) && (VB.push("#define HAS_NORMAL_ATTRIBUTE"), yB.push(aB.m.NormalKind));
        let lB = !1,
          JB = !1;
        if (dB) {
          let BB = !1;
          if (dB.needAlphaTestingForMesh(pB) && dB.getAlphaTestTexture() && (VB.push("#define ALPHATEST"), VB.push(`#define ALPHATEST_UV${dB.getAlphaTestTexture().coordinatesIndex+1}`), BB = !0), (dB.bumpTexture || dB.normalTexture || dB.geometryNormalTexture) && AB.d.BumpTextureEnabled) {
            const TB = dB.bumpTexture || dB.normalTexture || dB.geometryNormalTexture;
            VB.push("#define BUMP"), VB.push(`#define BUMP_UV${TB.coordinatesIndex+1}`), BB = !0
          }
          if (this._enableReflectivity) {
            let TB = !1;
            if ("PBRMetallicRoughnessMaterial" === dB.getClassName()) dB.metallicRoughnessTexture && (VB.push("#define ORMTEXTURE"), VB.push(`#define REFLECTIVITY_UV${dB.metallicRoughnessTexture.coordinatesIndex+1}`), VB.push("#define METALLICWORKFLOW"), BB = !0, TB = !0), null != dB.metallic && (VB.push("#define METALLIC"), VB.push("#define METALLICWORKFLOW"), TB = !0), null != dB.roughness && (VB.push("#define ROUGHNESS"), VB.push("#define METALLICWORKFLOW"), TB = !0), TB && (dB.baseTexture && (VB.push("#define ALBEDOTEXTURE"), VB.push(`#define ALBEDO_UV${dB.baseTexture.coordinatesIndex+1}`), dB.baseTexture.gammaSpace && VB.push("#define GAMMAALBEDO"), BB = !0), dB.baseColor && VB.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === dB.getClassName()) dB.specularGlossinessTexture ? (VB.push("#define SPECULARGLOSSINESSTEXTURE"), VB.push(`#define REFLECTIVITY_UV${dB.specularGlossinessTexture.coordinatesIndex+1}`), BB = !0, dB.specularGlossinessTexture.gammaSpace && VB.push("#define GAMMAREFLECTIVITYTEXTURE")) : dB.specularColor && VB.push("#define REFLECTIVITYCOLOR"), null != dB.glossiness && VB.push("#define GLOSSINESS");
            else if ("PBRMaterial" === dB.getClassName()) dB.metallicTexture && (VB.push("#define ORMTEXTURE"), VB.push(`#define REFLECTIVITY_UV${dB.metallicTexture.coordinatesIndex+1}`), VB.push("#define METALLICWORKFLOW"), BB = !0, TB = !0), null != dB.metallic && (VB.push("#define METALLIC"), VB.push("#define METALLICWORKFLOW"), TB = !0), null != dB.roughness && (VB.push("#define ROUGHNESS"), VB.push("#define METALLICWORKFLOW"), TB = !0), TB ? (dB.albedoTexture && (VB.push("#define ALBEDOTEXTURE"), VB.push(`#define ALBEDO_UV${dB.albedoTexture.coordinatesIndex+1}`), dB.albedoTexture.gammaSpace && VB.push("#define GAMMAALBEDO"), BB = !0), dB.albedoColor && VB.push("#define ALBEDOCOLOR")) : (dB.reflectivityTexture ? (VB.push("#define SPECULARGLOSSINESSTEXTURE"), VB.push(`#define REFLECTIVITY_UV${dB.reflectivityTexture.coordinatesIndex+1}`), dB.reflectivityTexture.gammaSpace && VB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0) : dB.reflectivityColor && VB.push("#define REFLECTIVITYCOLOR"), null != dB.microSurface && VB.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === dB.getClassName()) dB.specularTexture && (VB.push("#define REFLECTIVITYTEXTURE"), VB.push(`#define REFLECTIVITY_UV${dB.specularTexture.coordinatesIndex+1}`), dB.specularTexture.gammaSpace && VB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0), dB.specularColor && VB.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === dB.getClassName()) {
              const TB = dB;
              VB.push("#define METALLIC"), VB.push("#define ROUGHNESS"), TB._useRoughnessFromMetallicTextureGreen && TB.baseMetalnessTexture ? (VB.push("#define ORMTEXTURE"), VB.push(`#define REFLECTIVITY_UV${TB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : TB.baseMetalnessTexture ? (VB.push("#define METALLIC_TEXTURE"), VB.push(`#define METALLIC_UV${TB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : TB.specularRoughnessTexture && (VB.push("#define ROUGHNESS_TEXTURE"), VB.push(`#define ROUGHNESS_UV${TB.specularRoughnessTexture.coordinatesIndex+1}`), BB = !0), TB.baseColorTexture && (VB.push("#define ALBEDOTEXTURE"), VB.push(`#define ALBEDO_UV${TB.baseColorTexture.coordinatesIndex+1}`), TB.baseColorTexture.gammaSpace && VB.push("#define GAMMAALBEDO"), BB = !0), TB.baseColor && VB.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (VB.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === dB.getClassName())) {
            const TB = dB;
            TB.subsurfaceWeight > 0 && TB.subsurfaceWeightTexture && (VB.push("#define SUBSURFACE_WEIGHT"), VB.push(`#define SUBSURFACEWEIGHT_UV${TB.subsurfaceWeightTexture.coordinatesIndex+1}`), BB = !0), TB.transmissionWeight > 0 && TB.transmissionWeightTexture && (VB.push("#define TRANSMISSION_WEIGHT"), VB.push(`#define TRANSMISSIONWEIGHT_UV${TB.transmissionWeightTexture.coordinatesIndex+1}`), BB = !0)
          }
          BB && (VB.push("#define NEED_UV"), pB.isVerticesDataPresent(aB.m.UVKind) && (yB.push(aB.m.UVKind), VB.push("#define UV1"), lB = !0), pB.isVerticesDataPresent(aB.m.UV2Kind) && (yB.push(aB.m.UV2Kind), VB.push("#define UV2"), JB = !0))
        }
        if (this._enableDepth && (VB.push("#define DEPTH"), VB.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (VB.push("#define NORMAL"), VB.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (VB.push("#define POSITION"), VB.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (VB.push("#define VELOCITY"), VB.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(pB) && VB.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (VB.push("#define VELOCITY_LINEAR"), VB.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(pB) && VB.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (VB.push("#define REFLECTIVITY"), VB.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (VB.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), VB.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          VB.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), VB.push("#define IRRADIANCE");
          const BB = this._scene;
          if (BB.environmentTexture) {
            const TB = {};
            let yB = !1,
              pB = 0;
            "OpenPBRMaterial" !== dB.getClassName() && "StandardMaterial" !== dB.getClassName() && "PBRMetallicRoughnessMaterial" !== dB.getClassName() && "PBRSpecularGlossinessMaterial" !== dB.getClassName() && "PBRMaterial" !== dB.getClassName() || (yB = !!dB.realtimeFiltering, pB = dB.realtimeFilteringQuality || 0), (0, nB.P)(BB, BB.environmentTexture, TB, yB, pB, !0);
            for (const BB in TB) TB[BB] && VB.push("#define " + BB);
            TB.USEIRRADIANCEMAP || VB.push("#define SPHERICAL_HARMONICS");
            const lB = BB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
            if (lB) {
              const BB = lB;
              BB._getAccumulatedTexture() && (VB.push("#define IBL_SHADOW_TEXTURE"), BB.coloredShadows && VB.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (VB.push("#define OBJECT_ID"), VB.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (VB.push("#define MESH_BLEND_TAG"), VB.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && VB.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && VB.push("#define ENCODE_NORMAL"), pB.useBones && pB.computeBonesUsingShaders && pB.skeleton ? (yB.push(aB.m.MatricesIndicesKind), yB.push(aB.m.MatricesWeightsKind), pB.numBoneInfluencers > 4 && (yB.push(aB.m.MatricesIndicesExtraKind), yB.push(aB.m.MatricesWeightsExtraKind)), VB.push("#define NUM_BONE_INFLUENCERS " + pB.numBoneInfluencers), VB.push("#define BONETEXTURE " + pB.skeleton.isUsingTextureForMatrices), VB.push("#define BonesPerMesh " + (pB.skeleton.bones.length + 1))) : (VB.push("#define NUM_BONE_INFLUENCERS 0"), VB.push("#define BONETEXTURE false"), VB.push("#define BonesPerMesh 0"));
        const YB = pB.morphTargetManager ? (0, nB.H)(pB.morphTargetManager, VB, yB, pB, !0, !0, !1, lB, JB, !1) : 0;
        TB && (VB.push("#define INSTANCES"), (0, nB.qb)(yB, this._enableVelocity || this._enableVelocityLinear), BB.getRenderingMesh().hasThinInstances && VB.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? VB.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : VB.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, oT.g)(dB, this._scene, VB);
        const gB = this._scene.PD(),
          oB = BB._getDrawWrapper(void 0, !0),
          kB = oB.defines,
          LB = VB.join("\n");
        return kB !== LB && oB.setEffect(gB.createEffect("geometry", {
          attributes: yB,
          uniformsNames: aT,
          samplers: RT,
          defines: LB,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: YB
          },
          shaderLanguage: this.shaderLanguage
        }, gB), LB), oB.effect.isReady()
      }
      getGBuffer() {
        return this._multiRenderTarget
      }
      get samples() {
        return this._multiRenderTarget.samples
      }
      set samples(BB) {
        if (this._enableObjectId && 1 !== BB) throw new Error("GeometryBufferRenderer: object ID textures currently require samples to be 1");
        if (this._enableMeshBlendTag && 1 !== BB) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
        this._multiRenderTarget.samples = BB
      }
      dispose() {
        if (this._resizeObserver) {
          this._scene.PD().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.Gu.PD()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.Gu.PD().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const BB = [],
          TB = [];
        let dB = 0;
        return this._enableDepth && (this._depthIndex = dB, dB++, BB.push("gBuffer_Depth"), TB.push(this._textureTypesAndFormats[ZT.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = dB, dB++, BB.push("gBuffer_Normal"), TB.push(this._textureTypesAndFormats[ZT.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = dB, dB++, BB.push("gBuffer_Position"), TB.push(this._textureTypesAndFormats[ZT.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = dB, dB++, BB.push("gBuffer_Velocity"), TB.push(this._textureTypesAndFormats[ZT.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = dB, dB++, BB.push("gBuffer_VelocityLinear"), TB.push(this._textureTypesAndFormats[ZT.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = dB, dB++, BB.push("gBuffer_Reflectivity"), TB.push(this._textureTypesAndFormats[ZT.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = dB, dB++, BB.push("gBuffer_ScreenspaceDepth"), TB.push(this._textureTypesAndFormats[ZT.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = dB, dB++, BB.push("gBuffer_Irradiance"), TB.push(this._textureTypesAndFormats[ZT.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = dB, dB++, BB.push("gBuffer_ObjectId"), TB.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = dB, dB++, BB.push("gBuffer_MeshBlendTag"), TB.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [dB, BB, TB]
      }
      _createRenderTargets() {
        const BB = this._scene.PD(),
          [TB, dB, VB] = this._assignRenderTargetIndices(),
          yB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8);
        if (BB.getCaps().drawBuffersExtension && TB > yB) throw new Error(`GeometryBufferRenderer: ${TB} color attachments were requested, but this engine supports at most ${yB}`);
        let lB = 0;
        BB._caps.textureFloat && BB._caps.textureFloatLinearFiltering ? lB = 1 : BB._caps.textureHalfFloat && BB._caps.textureHalfFloatLinearFiltering && (lB = 2);
        const JB = this._getRenderTargetDimensions(),
          YB = [],
          gB = [],
          oB = [];
        for (const pB of VB) pB ? (YB.push(pB.textureType), gB.push(pB.textureFormat), oB.push(pB.samplingMode ?? 2)) : (YB.push(lB), gB.push(5), oB.push(2));
        if (this._normalsAreUnsigned = 11 === YB[ZT.NORMAL_TEXTURE_TYPE] || 13 === YB[ZT.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new IT("gBuffer", JB, TB, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: YB,
            formats: gB,
            samplingModes: oB,
            depthTextureFormat: this._depthFormat
          }, dB.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = FB.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = FB.f.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const kB = [!0],
          LB = [!1],
          OB = [!0];
        for (let pB = 1; pB < TB; ++pB) kB.push(!0), OB.push(!1), LB.push(!0);
        const DB = BB.buildTextureLayout(kB),
          uB = BB.buildTextureLayout(LB),
          HB = BB.buildTextureLayout(OB);
        this._multiRenderTarget.onClearObservable.add((BB => {
          const TB = this.useSpecificClearForDepthTexture ? uB : DB;
          BB.clearAttachments(this._clearColor, TB, !0, !0, !0), this.useSpecificClearForDepthTexture && BB.clearAttachments(this._clearDepthColor, HB, !0, !1, !1), BB.bindAttachments(DB)
        })), this._resizeObserver = BB.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const EB = BB => {
          const TB = BB.getRenderingMesh(),
            dB = BB.getEffectiveMesh(),
            VB = this._scene,
            yB = VB.PD(),
            lB = BB.XD();
          if (!lB) return;
          if (dB._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[dB.uniqueId] && (this._previousTransformationMatrices[dB.uniqueId] = {
              JL: RB.b.Identity(),
              viewProjection: VB.getTransformMatrix()
            }, TB.skeleton)) {
            const BB = TB.skeleton.getTransformMatrices(TB);
            this._previousBonesTransformationMatrices[TB.uniqueId] = this._copyBonesTransformationMatrices(BB, new Float32Array(BB.length))
          }
          const JB = TB._getInstancesRenderList(BB._id, !!BB.getReplacementMesh());
          if (JB.mustReturn) return;
          const YB = yB.getCaps().instancedArrays && (null !== JB.visibleInstances[BB._id] || TB.hasThinInstances),
            gB = dB.getWorldMatrix();
          if (this.isReady(BB, YB)) {
            const oB = BB._getDrawWrapper();
            if (!oB) return;
            const kB = oB.effect;
            let LB;
            yB.enableEffect(oB), YB || TB._bind(BB, kB, lB.fillMode), this._useUbo ? ((0, nB.r)(kB, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (kB.setMatrix("viewProjection", VB.getTransformMatrix()), kB.setMatrix("view", VB.getViewMatrix()), this._scene.bindEyePosition(kB, "vEyePosition"));
            if (TB._instanceDataStorage.isFrozen || !lB.backFaceCulling && null === lB.sideOrientation) LB = TB._effectiveSideOrientation;
            else {
              const BB = dB._getWorldMatrixDeterminant();
              LB = lB._getEffectiveOrientation(TB), BB < 0 && (LB = LB === pB.b.ClockWiseSideOrientation ? pB.b.CounterClockWiseSideOrientation : pB.b.ClockWiseSideOrientation)
            }
            if (lB._preBind(oB, LB), lB.needAlphaTestingForMesh(dB)) {
              const BB = lB.getAlphaTestTexture();
              BB && (kB.setTexture("diffuseSampler", BB), kB.setMatrix("diffuseMatrix", BB.getTextureMatrix()), kB.setFloat("alphaCutOff", lB.alphaCutOff ?? .4))
            }
            if ((lB.bumpTexture || lB.normalTexture || lB.geometryNormalTexture) && VB.PD().getCaps().standardDerivatives && AB.d.BumpTextureEnabled) {
              const BB = lB.bumpTexture || lB.normalTexture || lB.geometryNormalTexture;
              kB.setFloat3("vBumpInfos", BB.coordinatesIndex, 1 / BB.level, lB.parallaxScaleBias), kB.setMatrix("bumpMatrix", BB.getTextureMatrix()), kB.setTexture("bumpSampler", BB), kB.setFloat2("vTangentSpaceParams", lB.invertNormalMapX ? -1 : 1, lB.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === lB.getClassName()) null !== lB.metallicRoughnessTexture && (kB.setTexture("reflectivitySampler", lB.metallicRoughnessTexture), kB.setMatrix("reflectivityMatrix", lB.metallicRoughnessTexture.getTextureMatrix())), null !== lB.metallic && kB.setFloat("metallic", lB.metallic), null !== lB.roughness && kB.setFloat("glossiness", 1 - lB.roughness), null !== lB.baseTexture && (kB.setTexture("albedoSampler", lB.baseTexture), kB.setMatrix("albedoMatrix", lB.baseTexture.getTextureMatrix())), null !== lB.baseColor && kB.setColor3("albedoColor", lB.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === lB.getClassName()) null !== lB.specularGlossinessTexture ? (kB.setTexture("reflectivitySampler", lB.specularGlossinessTexture), kB.setMatrix("reflectivityMatrix", lB.specularGlossinessTexture.getTextureMatrix())) : null !== lB.specularColor && kB.setColor3("reflectivityColor", lB.specularColor), null !== lB.glossiness && kB.setFloat("glossiness", lB.glossiness);
            else if ("PBRMaterial" === lB.getClassName()) null !== lB.metallicTexture && (kB.setTexture("reflectivitySampler", lB.metallicTexture), kB.setMatrix("reflectivityMatrix", lB.metallicTexture.getTextureMatrix())), null !== lB.metallic && kB.setFloat("metallic", lB.metallic), null !== lB.roughness && kB.setFloat("glossiness", 1 - lB.roughness), null !== lB.roughness || null !== lB.metallic || null !== lB.metallicTexture ? (null !== lB.albedoTexture && (kB.setTexture("albedoSampler", lB.albedoTexture), kB.setMatrix("albedoMatrix", lB.albedoTexture.getTextureMatrix())), null !== lB.albedoColor && kB.setColor3("albedoColor", lB.albedoColor)) : (null !== lB.reflectivityTexture ? (kB.setTexture("reflectivitySampler", lB.reflectivityTexture), kB.setMatrix("reflectivityMatrix", lB.reflectivityTexture.getTextureMatrix())) : null !== lB.reflectivityColor && kB.setColor3("reflectivityColor", lB.reflectivityColor), null !== lB.microSurface && kB.setFloat("glossiness", lB.microSurface));
            else if ("StandardMaterial" === lB.getClassName()) null !== lB.specularTexture && (kB.setTexture("reflectivitySampler", lB.specularTexture), kB.setMatrix("reflectivityMatrix", lB.specularTexture.getTextureMatrix())), null !== lB.specularColor && kB.setColor3("reflectivityColor", lB.specularColor);
            else if ("OpenPBRMaterial" === lB.getClassName()) {
              const BB = lB;
              BB._useRoughnessFromMetallicTextureGreen && BB.baseMetalnessTexture ? (kB.setTexture("reflectivitySampler", BB.baseMetalnessTexture), kB.setMatrix("reflectivityMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.baseMetalnessTexture ? (kB.setTexture("metallicSampler", BB.baseMetalnessTexture), kB.setMatrix("metallicMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.specularRoughnessTexture && (kB.setTexture("roughnessSampler", BB.specularRoughnessTexture), kB.setMatrix("roughnessMatrix", BB.specularRoughnessTexture.getTextureMatrix())), kB.setFloat("metallic", BB.baseMetalness), kB.setFloat("glossiness", 1 - BB.specularRoughness), null !== BB.baseColorTexture && (kB.setTexture("albedoSampler", BB.baseColorTexture), kB.setMatrix("albedoMatrix", BB.baseColorTexture.getTextureMatrix())), null !== BB.baseColor && kB.setColor3("albedoColor", BB.baseColor)
            }
            if (this._enableIrradiance && VB.environmentTexture) {
              const BB = VB.environmentTexture,
                TB = VB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
              if (TB) {
                const BB = TB._getAccumulatedTexture();
                BB && (kB.setTexture("iblShadowSampler", BB), kB.setFloat2("shadowTextureSize", BB.getSize().width, BB.getSize().height))
              }
              if (kB.setMatrix("reflectionMatrix", BB.getReflectionTextureMatrix()), kB.setFloat2("vReflectionInfos", BB.level * VB.iblIntensity, 0), kB.setTexture("reflectionSampler", BB), BB.irradianceTexture && (kB.setTexture("irradianceSampler", BB.irradianceTexture), BB.irradianceTexture._dominantDirection && kB.setVector3("vReflectionDominantDirection", BB.irradianceTexture._dominantDirection)), BB.sphericalPolynomial) {
                const TB = BB.sphericalPolynomial;
                if (TB.preScaledHarmonics) {
                  const BB = TB.preScaledHarmonics;
                  kB.setVector3("vSphericalL00", BB.l00), kB.setVector3("vSphericalL1_1", BB.l1_1), kB.setVector3("vSphericalL10", BB.l10), kB.setVector3("vSphericalL11", BB.l11), kB.setVector3("vSphericalL2_2", BB.l2_2), kB.setVector3("vSphericalL2_1", BB.l2_1), kB.setVector3("vSphericalL20", BB.l20), kB.setVector3("vSphericalL21", BB.l21), kB.setVector3("vSphericalL22", BB.l22)
                } else kB.setFloat3("vSphericalX", TB.x.x, TB.x.y, TB.x.z), kB.setFloat3("vSphericalY", TB.y.x, TB.y.y, TB.y.z), kB.setFloat3("vSphericalZ", TB.z.x, TB.z.y, TB.z.z), kB.setFloat3("vSphericalXX_ZZ", TB.xx.x - TB.zz.x, TB.xx.y - TB.zz.y, TB.xx.z - TB.zz.z), kB.setFloat3("vSphericalYY_ZZ", TB.yy.x - TB.zz.x, TB.yy.y - TB.zz.y, TB.yy.z - TB.zz.z), kB.setFloat3("vSphericalZZ", TB.zz.x, TB.zz.y, TB.zz.z), kB.setFloat3("vSphericalXY", TB.xy.x, TB.xy.y, TB.xy.z), kB.setFloat3("vSphericalYZ", TB.yz.x, TB.yz.y, TB.yz.z), kB.setFloat3("vSphericalZX", TB.zx.x, TB.zx.y, TB.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === lB.getClassName()) {
                const BB = lB;
                kB.setFloat("vSubsurfaceWeight", BB.subsurfaceWeight), BB.subsurfaceWeightTexture && (kB.setTexture("subsurfaceWeightSampler", BB.subsurfaceWeightTexture), kB.setMatrix("subsurfaceWeightMatrix", BB.subsurfaceWeightTexture.getTextureMatrix())), kB.setFloat("vTransmissionWeight", BB.transmissionWeight), BB.transmissionWeightTexture && (kB.setTexture("transmissionWeightSampler", BB.transmissionWeightTexture), kB.setMatrix("transmissionWeightMatrix", BB.transmissionWeightTexture.getTextureMatrix())), kB.setFloat("vTransmissionScatterAnisotropy", BB.transmissionScatterAnisotropy), kB.setFloat("vSubsurfaceScatterAnisotropy", BB.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, oT.d)(kB, lB, this._scene), TB.useBones && TB.computeBonesUsingShaders && TB.skeleton) {
              const BB = TB.skeleton;
              if (BB.isUsingTextureForMatrices && kB.getUniformIndex("boneTextureInfo") > -1) {
                const dB = BB.getTransformMatrixTexture(TB);
                kB.setTexture("boneSampler", dB), kB.setFloat2("boneTextureInfo", BB._textureWidth, BB._textureHeight)
              } else kB.setMatrices("mBones", TB.skeleton.getTransformMatrices(TB));
              (this._enableVelocity || this._enableVelocityLinear) && kB.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[TB.uniqueId])
            }
            if ((0, nB.q)(TB, kB), TB.morphTargetManager && TB.morphTargetManager.isUsingTextureForTargets && TB.morphTargetManager._bind(kB), (this._enableVelocity || this._enableVelocityLinear) && (kB.setMatrix("previousWorld", this._previousTransformationMatrices[dB.uniqueId].JL), kB.setMatrix("previousViewProjection", this._previousTransformationMatrices[dB.uniqueId].viewProjection)), this._enableObjectId) {
              let BB = TB.uniqueId;
              if (this.objectIdProvider) BB = (0, OT.j)(TB, this.objectIdProvider);
              else if (BB > 16777215) throw new Error(`Invalid geometry object ID ${BB} for mesh "${TB.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              kB.setFloat("objectId", BB)
            }
            if (this._enableMeshBlendTag) {
              const BB = this.meshBlendTagProvider ? (0, OT.g)(TB, this.meshBlendTagProvider) : TB.meshBlendingTag;
              kB.setInt("meshBlendTag", BB)
            }
            YB && TB.hasThinInstances && kB.setMatrix("world", gB), TB._processRendering(dB, BB, kB, lB.fillMode, JB, YB, ((BB, TB) => {
              BB || kB.setMatrix("world", TB)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[dB.uniqueId].JL = gB.clone(), this._previousTransformationMatrices[dB.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), TB.skeleton && this._copyBonesTransformationMatrices(TB.skeleton.getTransformMatrices(TB), this._previousBonesTransformationMatrices[dB.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (TB, dB, VB) => {
          if ((VB || 0 === dB) && TB.oN)
            for (let yB = 0; yB < TB.oN.length; ++yB) {
              const dB = TB.oN[yB],
                VB = dB.XD(),
                pB = dB.getRenderingMesh();
              if (!VB) continue;
              const lB = pB._getInstancesRenderList(dB._id, !!dB.getReplacementMesh()),
                JB = BB.getCaps().instancedArrays && (null !== lB.visibleInstances[dB._id] || pB.hasThinInstances);
              if (!this.isReady(dB, JB)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (TB, dB, VB, yB) => {
          let pB;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.PD().bindAttachments(this._attachmentsFromPrePass)
          }
          if (yB.length) {
            for (BB.setColorWrite(!1), pB = 0; pB < yB.length; pB++) EB(yB.data[pB]);
            BB.setColorWrite(!0)
          }
          for (pB = 0; pB < TB.length; pB++) EB(TB.data[pB]);
          for (BB.setDepthWrite(!1), pB = 0; pB < dB.length; pB++) EB(dB.data[pB]);
          if (this.renderTransparentMeshes)
            for (pB = 0; pB < VB.length; pB++) EB(VB.data[pB]);
          BB.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const BB = this._scene.PD();
        return {
          width: Math.max(1, Math.floor(BB.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(BB.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(BB, TB) {
        for (let dB = 0; dB < BB.length; dB++) TB[dB] = BB[dB];
        return TB
      }
    }
    ZT.ForceGLSL = !1, ZT.DEPTH_TEXTURE_TYPE = 0, ZT.NORMAL_TEXTURE_TYPE = 1, ZT.POSITION_TEXTURE_TYPE = 2, ZT.VELOCITY_TEXTURE_TYPE = 3, ZT.REFLECTIVITY_TEXTURE_TYPE = 4, ZT.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, ZT.VELOCITY_LINEAR_TEXTURE_TYPE = 6, ZT.IRRADIANCE_TEXTURE_TYPE = 7, ZT.OBJECT_ID_TEXTURE_TYPE = 8, ZT.MESH_BLEND_TAG_TEXTURE_TYPE = 9, ZT._SceneComponentInitialization = BB => {
      throw (0, ET.i)("GeometryBufferRendererSceneComponent")
    };
    var XT = dB(36166);
    const WT = {
      effect: null,
      subMesh: null
    };

    function hT(BB) {
      if ("number" === typeof BB) return 1;
      if (BB instanceof RB.l) return 2;
      if (BB instanceof RB.p || BB instanceof GB.c) return 3;
      if (BB instanceof RB.r || BB instanceof GB.d) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class CT {
      populateVectorFromLinkedProperties(BB) {
        const TB = hT(BB);
        for (const dB in this.linkedProperties) {
          const BB = this.linkedProperties[dB],
            VB = BB.numComponents;
          if (TB < VB || BB.targetUniformComponentOffset > TB - VB) return void(1 == VB ? wB.b.Error(`Float property ${BB.name} has an offset that is too large.`) : wB.b.Error(`Vector${VB} property ${BB.name} won't fit in Vector${TB} or has an offset that is too large.`));
          "number" === typeof BB.value ? CT._tmpArray[BB.targetUniformComponentOffset] = BB.value : BB.value.toArray(CT._tmpArray, BB.targetUniformComponentOffset)
        }
        BB.HdB(CT._tmpArray)
      }
      constructor(BB, TB) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = BB, this.numComponents = TB
      }
    }
    CT._tmpArray = [0, 0, 0, 0];
    class GT {
      constructor(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          pB = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = BB, this.targetUniformName = dB, this.defaultValue = TB, this.value = TB, this.targetUniformComponentNum = VB, this.targetUniformComponentOffset = yB, this.requiredDefine = pB
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : hT(this.defaultValue)
      }
    }
    class qT {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(BB, TB, dB) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = BB, this.samplerPrefix = TB, this.textureDefine = dB
      }
    }
    class xT extends((0, uT.c)((0, DT.b)(ZB.d))) {}
    class jT extends(function(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(xT)) {}
    class AT extends((0, qB.h)(jT)) {
      constructor(BB) {
        super(BB), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class bT extends((0, HT.c)(jB.c)) {}
    let nT = (() => {
        var BB, TB, VB, yB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, KB, rB, IB, cB, QB, ZB, XB, WB, hB, qB, jB, eB, BT, TT, dT, VT, yT, pT, lT, JT, YT, gT, DT, uT, HT, ET, vT, mT, iT, NT, tT, MT, zT, wT, UT, FT, KT, rT, IT, cT, ST, PT, QT, RT, aT, XT, hT, xT, jT, nT, eT, Bd, Td, dd, Vd, yd, pd, ld, Jd, Yd, gd, od, kd, Ld, Od, Dd, ud, Hd, Ed, vd, md, Nd, td, fd, sd, Md, zd, wd, Ud, Fd;
        let Kd, rd, Id, cd, Sd, Pd, Qd, Rd, ad, Zd, Xd, Wd, hd, Cd, Gd, qd, xd, jd, Ad, bd, nd, ed, BV, TV, dV, VV, yV, pV, lV, JV, YV, gV, oV, kV, LV, OV, DV, uV, HV, EV, vV, mV, iV, NV, tV, fV, sV, MV, zV, wV, UV, FV, KV, rV, IV, cV, SV, PV, QV, RV, aV, ZV, XV, WV, hV, CV, GV, qV, xV, jV, AV, bV, nV, eV, By, Ty, dy, Vy, yy, py, ly, Jy, Yy, gy, oy, ky, Ly, Oy, Dy, uy, Hy, Ey, vy, my, iy, Ny, ty, fy, sy, My, zy, wy, Uy, Fy, Ky, ry = bT,
          Iy = [],
          cy = [],
          Sy = [],
          Py = [],
          Qy = [],
          Ry = [],
          ay = [],
          Zy = [],
          Xy = [],
          Wy = [],
          hy = [],
          Cy = [],
          Gy = [],
          qy = [],
          xy = [],
          jy = [],
          Ay = [],
          by = [],
          ny = [],
          ey = [],
          Bp = [],
          Tp = [],
          dp = [],
          Vp = [],
          yp = [],
          pp = [],
          lp = [],
          Jp = [],
          Yp = [],
          gp = [],
          op = [],
          kp = [],
          Lp = [],
          Op = [],
          Dp = [],
          Hp = [],
          Ep = [],
          vp = [],
          mp = [],
          ip = [],
          Np = [],
          tp = [],
          fp = [],
          sp = [],
          Mp = [],
          zp = [],
          wp = [],
          Up = [],
          Fp = [],
          Kp = [],
          rp = [],
          Ip = [],
          cp = [],
          Sp = [],
          Pp = [],
          Qp = [],
          Rp = [],
          ap = [],
          Zp = [],
          Xp = [],
          Wp = [],
          hp = [],
          Cp = [],
          Gp = [],
          qp = [],
          xp = [],
          jp = [],
          Ap = [],
          bp = [],
          np = [],
          ep = [],
          Bl = [],
          Tl = [],
          dl = [],
          Vl = [],
          yl = [],
          pl = [],
          ll = [],
          Jl = [],
          Yl = [],
          gl = [],
          ol = [],
          kl = [],
          Ll = [],
          Ol = [],
          Dl = [],
          ul = [],
          Hl = [],
          El = [],
          vl = [],
          ml = [],
          il = [],
          Nl = [],
          tl = [],
          fl = [],
          sl = [],
          Ml = [],
          zl = [],
          wl = [],
          Ul = [],
          Fl = [],
          Kl = [],
          rl = [],
          Il = [],
          cl = [],
          Sl = [],
          Pl = [],
          Ql = [],
          Rl = [],
          al = [],
          Zl = [],
          Xl = [],
          Wl = [],
          hl = [],
          Cl = [],
          Gl = [],
          ql = [],
          xl = [],
          jl = [],
          Al = [],
          bl = [],
          nl = [],
          el = [],
          BJ = [],
          TJ = [],
          dJ = [],
          VJ = [],
          yJ = [],
          pJ = [],
          lJ = [],
          JJ = [],
          YJ = [],
          gJ = [],
          oJ = [],
          kJ = [],
          LJ = [],
          OJ = [],
          DJ = [],
          uJ = [],
          HJ = [],
          EJ = [],
          vJ = [],
          mJ = [],
          iJ = [],
          NJ = [],
          tJ = [],
          fJ = [],
          sJ = [],
          MJ = [],
          zJ = [],
          wJ = [],
          UJ = [],
          FJ = [],
          KJ = [],
          rJ = [],
          IJ = [],
          cJ = [],
          SJ = [],
          PJ = [],
          QJ = [],
          RJ = [],
          aJ = [],
          ZJ = [],
          XJ = [],
          WJ = [],
          hJ = [],
          CJ = [],
          GJ = [],
          qJ = [],
          xJ = [],
          jJ = [],
          AJ = [],
          bJ = [],
          nJ = [],
          eJ = [],
          BY = [],
          TY = [],
          dY = [],
          VY = [],
          yY = [],
          pY = [],
          lY = [],
          JY = [],
          YY = [],
          gY = [],
          oY = [],
          kY = [],
          LY = [],
          OY = [],
          DY = [],
          uY = [],
          HY = [],
          EY = [],
          vY = [],
          mY = [],
          iY = [],
          NY = [],
          tY = [],
          fY = [],
          sY = [],
          MY = [],
          zY = [],
          wY = [],
          UY = [],
          FY = [];
        return BB = class extends ry {
          get baseWeight() {
            return (0, MB.b)(this, TB, "f")
          }
          set baseWeight(BB) {
            (0, MB.f)(this, TB, BB, "f")
          }
          get baseWeightTexture() {
            return (0, MB.b)(this, VB, "f")
          }
          set baseWeightTexture(BB) {
            (0, MB.f)(this, VB, BB, "f")
          }
          get baseColor() {
            return (0, MB.b)(this, yB, "f")
          }
          set baseColor(BB) {
            (0, MB.f)(this, yB, BB, "f")
          }
          get baseColorTexture() {
            return (0, MB.b)(this, lB, "f")
          }
          set baseColorTexture(BB) {
            (0, MB.f)(this, lB, BB, "f")
          }
          get baseDiffuseRoughness() {
            return (0, MB.b)(this, JB, "f")
          }
          set baseDiffuseRoughness(BB) {
            (0, MB.f)(this, JB, BB, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, MB.b)(this, YB, "f")
          }
          set baseDiffuseRoughnessTexture(BB) {
            (0, MB.f)(this, YB, BB, "f")
          }
          get baseMetalness() {
            return (0, MB.b)(this, gB, "f")
          }
          set baseMetalness(BB) {
            (0, MB.f)(this, gB, BB, "f")
          }
          get baseMetalnessTexture() {
            return (0, MB.b)(this, oB, "f")
          }
          set baseMetalnessTexture(BB) {
            (0, MB.f)(this, oB, BB, "f")
          }
          get specularWeight() {
            return (0, MB.b)(this, kB, "f")
          }
          set specularWeight(BB) {
            (0, MB.f)(this, kB, BB, "f")
          }
          get specularWeightTexture() {
            return (0, MB.b)(this, LB, "f")
          }
          set specularWeightTexture(BB) {
            (0, MB.f)(this, LB, BB, "f")
          }
          get specularColor() {
            return (0, MB.b)(this, OB, "f")
          }
          set specularColor(BB) {
            (0, MB.f)(this, OB, BB, "f")
          }
          get specularColorTexture() {
            return (0, MB.b)(this, DB, "f")
          }
          set specularColorTexture(BB) {
            (0, MB.f)(this, DB, BB, "f")
          }
          get specularRoughness() {
            return (0, MB.b)(this, uB, "f")
          }
          set specularRoughness(BB) {
            (0, MB.f)(this, uB, BB, "f")
          }
          get specularRoughnessTexture() {
            return (0, MB.b)(this, HB, "f")
          }
          set specularRoughnessTexture(BB) {
            (0, MB.f)(this, HB, BB, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, MB.b)(this, EB, "f")
          }
          set specularRoughnessAnisotropy(BB) {
            (0, MB.f)(this, EB, BB, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, MB.b)(this, vB, "f")
          }
          set specularRoughnessAnisotropyTexture(BB) {
            (0, MB.f)(this, vB, BB, "f")
          }
          get specularIor() {
            return (0, MB.b)(this, mB, "f")
          }
          set specularIor(BB) {
            (0, MB.f)(this, mB, BB, "f")
          }
          get transmissionWeight() {
            return (0, MB.b)(this, iB, "f")
          }
          set transmissionWeight(BB) {
            (0, MB.f)(this, iB, BB, "f")
          }
          get transmissionWeightTexture() {
            return (0, MB.b)(this, NB, "f")
          }
          set transmissionWeightTexture(BB) {
            (0, MB.f)(this, NB, BB, "f")
          }
          get transmissionColor() {
            return (0, MB.b)(this, tB, "f")
          }
          set transmissionColor(BB) {
            (0, MB.f)(this, tB, BB, "f")
          }
          get transmissionColorTexture() {
            return (0, MB.b)(this, fB, "f")
          }
          set transmissionColorTexture(BB) {
            (0, MB.f)(this, fB, BB, "f")
          }
          get transmissionDepth() {
            return (0, MB.b)(this, sB, "f")
          }
          set transmissionDepth(BB) {
            (0, MB.f)(this, sB, BB, "f")
          }
          get transmissionDepthTexture() {
            return (0, MB.b)(this, KB, "f")
          }
          set transmissionDepthTexture(BB) {
            (0, MB.f)(this, KB, BB, "f")
          }
          get transmissionScatter() {
            return (0, MB.b)(this, rB, "f")
          }
          set transmissionScatter(BB) {
            (0, MB.f)(this, rB, BB, "f")
          }
          get transmissionScatterTexture() {
            return (0, MB.b)(this, IB, "f")
          }
          set transmissionScatterTexture(BB) {
            (0, MB.f)(this, IB, BB, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, MB.b)(this, cB, "f")
          }
          set transmissionScatterAnisotropy(BB) {
            (0, MB.f)(this, cB, BB, "f")
          }
          get transmissionDispersionScale() {
            return (0, MB.b)(this, QB, "f")
          }
          set transmissionDispersionScale(BB) {
            (0, MB.f)(this, QB, BB, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, MB.b)(this, ZB, "f")
          }
          set transmissionDispersionScaleTexture(BB) {
            (0, MB.f)(this, ZB, BB, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, MB.b)(this, XB, "f")
          }
          set transmissionDispersionAbbeNumber(BB) {
            (0, MB.f)(this, XB, BB, "f")
          }
          get subsurfaceWeight() {
            return (0, MB.b)(this, WB, "f")
          }
          set subsurfaceWeight(BB) {
            (0, MB.f)(this, WB, BB, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, MB.b)(this, hB, "f")
          }
          set subsurfaceWeightTexture(BB) {
            (0, MB.f)(this, hB, BB, "f")
          }
          get subsurfaceColor() {
            return (0, MB.b)(this, qB, "f")
          }
          set subsurfaceColor(BB) {
            (0, MB.f)(this, qB, BB, "f")
          }
          get subsurfaceColorTexture() {
            return (0, MB.b)(this, jB, "f")
          }
          set subsurfaceColorTexture(BB) {
            (0, MB.f)(this, jB, BB, "f")
          }
          get subsurfaceRadius() {
            return (0, MB.b)(this, eB, "f")
          }
          set subsurfaceRadius(BB) {
            (0, MB.f)(this, eB, BB, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, MB.b)(this, BT, "f")
          }
          set subsurfaceRadiusScale(BB) {
            (0, MB.f)(this, BT, BB, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, MB.b)(this, TT, "f")
          }
          set subsurfaceRadiusScaleTexture(BB) {
            (0, MB.f)(this, TT, BB, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, MB.b)(this, dT, "f")
          }
          set subsurfaceScatterAnisotropy(BB) {
            (0, MB.f)(this, dT, BB, "f")
          }
          get coatWeight() {
            return (0, MB.b)(this, VT, "f")
          }
          set coatWeight(BB) {
            (0, MB.f)(this, VT, BB, "f")
          }
          get coatWeightTexture() {
            return (0, MB.b)(this, yT, "f")
          }
          set coatWeightTexture(BB) {
            (0, MB.f)(this, yT, BB, "f")
          }
          get coatColor() {
            return (0, MB.b)(this, pT, "f")
          }
          set coatColor(BB) {
            (0, MB.f)(this, pT, BB, "f")
          }
          get coatColorTexture() {
            return (0, MB.b)(this, lT, "f")
          }
          set coatColorTexture(BB) {
            (0, MB.f)(this, lT, BB, "f")
          }
          get coatRoughness() {
            return (0, MB.b)(this, JT, "f")
          }
          set coatRoughness(BB) {
            (0, MB.f)(this, JT, BB, "f")
          }
          get coatRoughnessTexture() {
            return (0, MB.b)(this, YT, "f")
          }
          set coatRoughnessTexture(BB) {
            (0, MB.f)(this, YT, BB, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, MB.b)(this, gT, "f")
          }
          set coatRoughnessAnisotropy(BB) {
            (0, MB.f)(this, gT, BB, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, MB.b)(this, DT, "f")
          }
          set coatRoughnessAnisotropyTexture(BB) {
            (0, MB.f)(this, DT, BB, "f")
          }
          get coatIor() {
            return (0, MB.b)(this, uT, "f")
          }
          set coatIor(BB) {
            (0, MB.f)(this, uT, BB, "f")
          }
          get coatDarkening() {
            return (0, MB.b)(this, HT, "f")
          }
          set coatDarkening(BB) {
            (0, MB.f)(this, HT, BB, "f")
          }
          get coatDarkeningTexture() {
            return (0, MB.b)(this, ET, "f")
          }
          set coatDarkeningTexture(BB) {
            (0, MB.f)(this, ET, BB, "f")
          }
          get fuzzWeight() {
            return (0, MB.b)(this, vT, "f")
          }
          set fuzzWeight(BB) {
            (0, MB.f)(this, vT, BB, "f")
          }
          get fuzzWeightTexture() {
            return (0, MB.b)(this, mT, "f")
          }
          set fuzzWeightTexture(BB) {
            (0, MB.f)(this, mT, BB, "f")
          }
          get fuzzColor() {
            return (0, MB.b)(this, iT, "f")
          }
          set fuzzColor(BB) {
            (0, MB.f)(this, iT, BB, "f")
          }
          get fuzzColorTexture() {
            return (0, MB.b)(this, NT, "f")
          }
          set fuzzColorTexture(BB) {
            (0, MB.f)(this, NT, BB, "f")
          }
          get fuzzRoughness() {
            return (0, MB.b)(this, tT, "f")
          }
          set fuzzRoughness(BB) {
            (0, MB.f)(this, tT, BB, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, MB.b)(this, MT, "f")
          }
          set fuzzRoughnessTexture(BB) {
            (0, MB.f)(this, MT, BB, "f")
          }
          get geometryThinWalled() {
            return (0, MB.b)(this, zT, "f")
          }
          set geometryThinWalled(BB) {
            (0, MB.f)(this, zT, BB, "f")
          }
          get geometryNormalTexture() {
            return (0, MB.b)(this, wT, "f")
          }
          set geometryNormalTexture(BB) {
            (0, MB.f)(this, wT, BB, "f")
          }
          get geometryTangent() {
            return (0, MB.b)(this, UT, "f")
          }
          set geometryTangent(BB) {
            (0, MB.f)(this, UT, BB, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(BB) {
            this.geometryTangent = new RB.l(Math.cos(BB), Math.sin(BB))
          }
          get geometryTangentTexture() {
            return (0, MB.b)(this, FT, "f")
          }
          set geometryTangentTexture(BB) {
            (0, MB.f)(this, FT, BB, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, MB.b)(this, KT, "f")
          }
          set geometryCoatNormalTexture(BB) {
            (0, MB.f)(this, KT, BB, "f")
          }
          get geometryCoatTangent() {
            return (0, MB.b)(this, rT, "f")
          }
          set geometryCoatTangent(BB) {
            (0, MB.f)(this, rT, BB, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(BB) {
            this.geometryCoatTangent = new RB.l(Math.cos(BB), Math.sin(BB))
          }
          get geometryCoatTangentTexture() {
            return (0, MB.b)(this, IT, "f")
          }
          set geometryCoatTangentTexture(BB) {
            (0, MB.f)(this, IT, BB, "f")
          }
          get geometryOpacity() {
            return (0, MB.b)(this, cT, "f")
          }
          set geometryOpacity(BB) {
            (0, MB.f)(this, cT, BB, "f")
          }
          get geometryOpacityTexture() {
            return (0, MB.b)(this, ST, "f")
          }
          set geometryOpacityTexture(BB) {
            (0, MB.f)(this, ST, BB, "f")
          }
          get geometryThickness() {
            return (0, MB.b)(this, PT, "f")
          }
          set geometryThickness(BB) {
            (0, MB.f)(this, PT, BB, "f")
          }
          get geometryThicknessTexture() {
            return (0, MB.b)(this, QT, "f")
          }
          set geometryThicknessTexture(BB) {
            (0, MB.f)(this, QT, BB, "f")
          }
          get emissionLuminance() {
            return (0, MB.b)(this, RT, "f")
          }
          set emissionLuminance(BB) {
            (0, MB.f)(this, RT, BB, "f")
          }
          get emissionColor() {
            return (0, MB.b)(this, aT, "f")
          }
          set emissionColor(BB) {
            (0, MB.f)(this, aT, BB, "f")
          }
          get emissionColorTexture() {
            return (0, MB.b)(this, XT, "f")
          }
          set emissionColorTexture(BB) {
            (0, MB.f)(this, XT, BB, "f")
          }
          get thinFilmWeight() {
            return (0, MB.b)(this, hT, "f")
          }
          set thinFilmWeight(BB) {
            (0, MB.f)(this, hT, BB, "f")
          }
          get thinFilmWeightTexture() {
            return (0, MB.b)(this, xT, "f")
          }
          set thinFilmWeightTexture(BB) {
            (0, MB.f)(this, xT, BB, "f")
          }
          get thinFilmThickness() {
            return (0, MB.b)(this, jT, "f")
          }
          set thinFilmThickness(BB) {
            (0, MB.f)(this, jT, BB, "f")
          }
          get thinFilmThicknessMin() {
            return (0, MB.b)(this, nT, "f")
          }
          set thinFilmThicknessMin(BB) {
            (0, MB.f)(this, nT, BB, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, MB.b)(this, eT, "f")
          }
          set thinFilmThicknessTexture(BB) {
            (0, MB.f)(this, eT, BB, "f")
          }
          get thinFilmIor() {
            return (0, MB.b)(this, Bd, "f")
          }
          set thinFilmIor(BB) {
            (0, MB.f)(this, Bd, BB, "f")
          }
          get ambientOcclusionTexture() {
            return (0, MB.b)(this, Td, "f")
          }
          set ambientOcclusionTexture(BB) {
            (0, MB.f)(this, Td, BB, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(BB) {
            this._sssQuality !== BB && (this._sssQuality = BB, this.VdB(1))
          }
          get sssIrradianceTexture() {
            return this._sssIrradianceTexture
          }
          set sssIrradianceTexture(BB) {
            this._sssIrradianceTexture !== BB && (this._sssIrradianceTexture = BB, this._markAllSubMeshesAsTexturesDirty())
          }
          get sssDepthTexture() {
            return this._sssDepthTexture
          }
          set sssDepthTexture(BB) {
            this._sssDepthTexture !== BB && (this._sssDepthTexture = BB, this._markAllSubMeshesAsTexturesDirty())
          }
          get directIntensity() {
            return (0, MB.b)(this, dd, "f")
          }
          set directIntensity(BB) {
            (0, MB.f)(this, dd, BB, "f")
          }
          get environmentIntensity() {
            return (0, MB.b)(this, Vd, "f")
          }
          set environmentIntensity(BB) {
            (0, MB.f)(this, Vd, BB, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, MB.b)(this, yd, "f")
          }
          set useSpecularWeightFromTextureAlpha(BB) {
            (0, MB.f)(this, yd, BB, "f")
          }
          get forceAlphaTest() {
            return (0, MB.b)(this, pd, "f")
          }
          set forceAlphaTest(BB) {
            (0, MB.f)(this, pd, BB, "f")
          }
          get alphaCutOff() {
            return (0, MB.b)(this, ld, "f")
          }
          set alphaCutOff(BB) {
            (0, MB.f)(this, ld, BB, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, MB.b)(this, Jd, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(BB) {
            (0, MB.f)(this, Jd, BB, "f")
          }
          get useAmbientInGrayScale() {
            return (0, MB.b)(this, Yd, "f")
          }
          set useAmbientInGrayScale(BB) {
            (0, MB.f)(this, Yd, BB, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(GB.c.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === pB.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(BB) {
            BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? pB.b.LIGHTFALLOFF_PHYSICAL : pB.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === pB.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(BB) {
            BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? pB.b.LIGHTFALLOFF_GLTF : pB.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, MB.b)(this, gd, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, MB.f)(this, gd, BB, "f")
          }
          get useParallax() {
            return (0, MB.b)(this, od, "f")
          }
          set useParallax(BB) {
            (0, MB.f)(this, od, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, MB.b)(this, kd, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, MB.f)(this, kd, BB, "f")
          }
          get parallaxScaleBias() {
            return (0, MB.b)(this, Ld, "f")
          }
          set parallaxScaleBias(BB) {
            (0, MB.f)(this, Ld, BB, "f")
          }
          get disableLighting() {
            return (0, MB.b)(this, Od, "f")
          }
          set disableLighting(BB) {
            (0, MB.f)(this, Od, BB, "f")
          }
          get forceIrradianceInFragment() {
            return (0, MB.b)(this, Dd, "f")
          }
          set forceIrradianceInFragment(BB) {
            (0, MB.f)(this, Dd, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, MB.b)(this, ud, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, MB.f)(this, ud, BB, "f")
          }
          get invertNormalMapX() {
            return (0, MB.b)(this, Hd, "f")
          }
          set invertNormalMapX(BB) {
            (0, MB.f)(this, Hd, BB, "f")
          }
          get invertNormalMapY() {
            return (0, MB.b)(this, Ed, "f")
          }
          set invertNormalMapY(BB) {
            (0, MB.f)(this, Ed, BB, "f")
          }
          get twoSidedLighting() {
            return (0, MB.b)(this, vd, "f")
          }
          set twoSidedLighting(BB) {
            (0, MB.f)(this, vd, BB, "f")
          }
          get useAlphaFresnel() {
            return (0, MB.b)(this, md, "f")
          }
          set useAlphaFresnel(BB) {
            (0, MB.f)(this, md, BB, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, MB.b)(this, Nd, "f")
          }
          set useLinearAlphaFresnel(BB) {
            (0, MB.f)(this, Nd, BB, "f")
          }
          get environmentBRDFTexture() {
            return (0, MB.b)(this, td, "f")
          }
          set environmentBRDFTexture(BB) {
            (0, MB.f)(this, td, BB, "f")
          }
          get forceNormalForward() {
            return (0, MB.b)(this, fd, "f")
          }
          set forceNormalForward(BB) {
            (0, MB.f)(this, fd, BB, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, MB.b)(this, sd, "f")
          }
          set enableSpecularAntiAliasing(BB) {
            (0, MB.f)(this, sd, BB, "f")
          }
          get useHorizonOcclusion() {
            return (0, MB.b)(this, Md, "f")
          }
          set useHorizonOcclusion(BB) {
            (0, MB.f)(this, Md, BB, "f")
          }
          get useRadianceOcclusion() {
            return (0, MB.b)(this, zd, "f")
          }
          set useRadianceOcclusion(BB) {
            (0, MB.f)(this, zd, BB, "f")
          }
          get unlit() {
            return (0, MB.b)(this, wd, "f")
          }
          set unlit(BB) {
            (0, MB.f)(this, wd, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, MB.b)(this, Ud, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, MB.f)(this, Ud, BB, "f")
          }
          get backgroundRefractionTexture() {
            return this._backgroundRefractionTexture
          }
          set backgroundRefractionTexture(BB) {
            this._backgroundRefractionTexture = BB, this._markAllSubMeshesAsTexturesDirty()
          }
          get refractionHighQualityBlur() {
            return this._refractionHighQualityBlur
          }
          set refractionHighQualityBlur(BB) {
            this._refractionHighQualityBlur !== BB && (this._refractionHighQualityBlur = BB, this.VdB(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(BB) {
            this._realTimeFiltering = BB, this.VdB(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(BB) {
            this._realTimeFilteringQuality = BB, this.VdB(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(BB) {
            this._fuzzSampleNumber = BB, this.VdB(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, MB.b)(this, Fd, "f")
          }
          set debugMode(BB) {
            (0, MB.f)(this, Fd, BB, "f")
          }
          constructor(dB, zB) {
            super(dB, zB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), TB.set(this, ((0, MB.h)(this, Iy), (0, MB.h)(this, cy, void 0))), this._baseWeight = ((0, MB.h)(this, Sy), new GT("base_weight", 1, "vBaseWeight", 1)), VB.set(this, (0, MB.h)(this, Py, void 0)), this._baseWeightTexture = ((0, MB.h)(this, Qy), new qT("base_weight", "baseWeight", "BASE_WEIGHT")), yB.set(this, (0, MB.h)(this, Ry, void 0)), this._baseColor = ((0, MB.h)(this, ay), new GT("base_color", GB.c.White(), "vBaseColor", 4)), lB.set(this, (0, MB.h)(this, Zy, void 0)), this._baseColorTexture = ((0, MB.h)(this, Xy), new qT("base_color", "baseColor", "BASE_COLOR")), JB.set(this, (0, MB.h)(this, Wy, void 0)), this._baseDiffuseRoughness = ((0, MB.h)(this, hy), new GT("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), YB.set(this, (0, MB.h)(this, Cy, void 0)), this._baseDiffuseRoughnessTexture = ((0, MB.h)(this, Gy), new qT("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), gB.set(this, (0, MB.h)(this, qy, void 0)), this._baseMetalness = ((0, MB.h)(this, xy), new GT("base_metalness", 0, "vReflectanceInfo", 4, 0)), oB.set(this, (0, MB.h)(this, jy, void 0)), this._baseMetalnessTexture = ((0, MB.h)(this, Ay), new qT("base_metalness", "baseMetalness", "BASE_METALNESS")), kB.set(this, (0, MB.h)(this, by, void 0)), this._specularWeight = ((0, MB.h)(this, ny), new GT("specular_weight", 1, "vReflectanceInfo", 4, 3)), LB.set(this, (0, MB.h)(this, ey, void 0)), this._specularWeightTexture = ((0, MB.h)(this, Bp), new qT("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), OB.set(this, (0, MB.h)(this, Tp, void 0)), this._specularColor = ((0, MB.h)(this, dp), new GT("specular_color", GB.c.White(), "vSpecularColor", 4)), DB.set(this, (0, MB.h)(this, Vp, void 0)), this._specularColorTexture = ((0, MB.h)(this, yp), new qT("specular_color", "specularColor", "SPECULAR_COLOR")), uB.set(this, (0, MB.h)(this, pp, void 0)), this._specularRoughness = ((0, MB.h)(this, lp), new GT("specular_roughness", .3, "vReflectanceInfo", 4, 1)), HB.set(this, (0, MB.h)(this, Jp, void 0)), this._specularRoughnessTexture = ((0, MB.h)(this, Yp), new qT("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), EB.set(this, (0, MB.h)(this, gp, void 0)), this._specularRoughnessAnisotropy = ((0, MB.h)(this, op), new GT("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), vB.set(this, (0, MB.h)(this, kp, void 0)), this._specularRoughnessAnisotropyTexture = ((0, MB.h)(this, Lp), new qT("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), mB.set(this, (0, MB.h)(this, Op, void 0)), this._specularIor = ((0, MB.h)(this, Dp), new GT("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), iB.set(this, (0, MB.h)(this, Hp, void 0)), this._transmissionWeight = ((0, MB.h)(this, Ep), new GT("transmission_weight", 0, "vTransmissionWeight", 1)), NB.set(this, (0, MB.h)(this, vp, void 0)), this._transmissionWeightTexture = ((0, MB.h)(this, mp), new qT("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), tB.set(this, (0, MB.h)(this, ip, void 0)), this._transmissionColor = ((0, MB.h)(this, Np), new GT("transmission_color", GB.c.White(), "vTransmissionColor", 3, 0)), fB.set(this, (0, MB.h)(this, tp, void 0)), this._transmissionColorTexture = ((0, MB.h)(this, fp), new qT("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), sB.set(this, (0, MB.h)(this, sp, void 0)), this._transmissionDepth = ((0, MB.h)(this, Mp), new GT("transmission_depth", 0, "vTransmissionDepth", 1, 0)), KB.set(this, (0, MB.h)(this, zp, void 0)), this._transmissionDepthTexture = ((0, MB.h)(this, wp), new qT("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), rB.set(this, (0, MB.h)(this, Up, void 0)), this._transmissionScatter = ((0, MB.h)(this, Fp), new GT("transmission_scatter", GB.c.Black(), "vTransmissionScatter", 3, 0)), IB.set(this, (0, MB.h)(this, Kp, void 0)), this._transmissionScatterTexture = ((0, MB.h)(this, rp), new qT("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), cB.set(this, (0, MB.h)(this, Ip, void 0)), this._transmissionScatterAnisotropy = ((0, MB.h)(this, cp), new GT("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), QB.set(this, (0, MB.h)(this, Sp, void 0)), this._transmissionDispersionScale = ((0, MB.h)(this, Pp), new GT("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), ZB.set(this, (0, MB.h)(this, Qp, void 0)), this._transmissionDispersionScaleTexture = ((0, MB.h)(this, Rp), new qT("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), XB.set(this, (0, MB.h)(this, ap, void 0)), this._transmissionDispersionAbbeNumber = ((0, MB.h)(this, Zp), new GT("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), WB.set(this, (0, MB.h)(this, Xp, void 0)), this._subsurfaceWeight = ((0, MB.h)(this, Wp), new GT("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), hB.set(this, (0, MB.h)(this, hp, void 0)), this._subsurfaceWeightTexture = ((0, MB.h)(this, Cp), new qT("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), qB.set(this, (0, MB.h)(this, Gp, void 0)), this._subsurfaceColor = ((0, MB.h)(this, qp), new GT("subsurface_color", new GB.c(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), jB.set(this, (0, MB.h)(this, xp, void 0)), this._subsurfaceColorTexture = ((0, MB.h)(this, jp), new qT("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), eB.set(this, (0, MB.h)(this, Ap, void 0)), this._subsurfaceRadius = ((0, MB.h)(this, bp), new GT("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), BT.set(this, (0, MB.h)(this, np, void 0)), this._subsurfaceRadiusScale = ((0, MB.h)(this, ep), new GT("subsurface_radius_scale", new GB.c(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), TT.set(this, (0, MB.h)(this, Bl, void 0)), this._subsurfaceRadiusScaleTexture = ((0, MB.h)(this, Tl), new qT("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), dT.set(this, (0, MB.h)(this, dl, void 0)), this._subsurfaceScatterAnisotropy = ((0, MB.h)(this, Vl), new GT("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), VT.set(this, (0, MB.h)(this, yl, void 0)), this._coatWeight = ((0, MB.h)(this, pl), new GT("coat_weight", 0, "vCoatWeight", 1, 0)), yT.set(this, (0, MB.h)(this, ll, void 0)), this._coatWeightTexture = ((0, MB.h)(this, Jl), new qT("coat_weight", "coatWeight", "COAT_WEIGHT")), pT.set(this, (0, MB.h)(this, Yl, void 0)), this._coatColor = ((0, MB.h)(this, gl), new GT("coat_color", GB.c.White(), "vCoatColor", 3, 0)), lT.set(this, (0, MB.h)(this, ol, void 0)), this._coatColorTexture = ((0, MB.h)(this, kl), new qT("coat_color", "coatColor", "COAT_COLOR")), JT.set(this, (0, MB.h)(this, Ll, void 0)), this._coatRoughness = ((0, MB.h)(this, Ol), new GT("coat_roughness", 0, "vCoatRoughness", 1, 0)), YT.set(this, (0, MB.h)(this, Dl, void 0)), this._coatRoughnessTexture = ((0, MB.h)(this, ul), new qT("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), gT.set(this, (0, MB.h)(this, Hl, void 0)), this._coatRoughnessAnisotropy = ((0, MB.h)(this, El), new GT("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), DT.set(this, (0, MB.h)(this, vl, void 0)), this._coatRoughnessAnisotropyTexture = ((0, MB.h)(this, ml), new qT("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), uT.set(this, (0, MB.h)(this, il, void 0)), this._coatIor = ((0, MB.h)(this, Nl), new GT("coat_ior", 1.5, "vCoatIor", 1, 0)), HT.set(this, (0, MB.h)(this, tl, void 0)), this._coatDarkening = ((0, MB.h)(this, fl), new GT("coat_darkening", 1, "vCoatDarkening", 1, 0)), ET.set(this, (0, MB.h)(this, sl, void 0)), this._coatDarkeningTexture = ((0, MB.h)(this, Ml), new qT("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, vT.set(this, (0, MB.h)(this, zl, void 0)), this._fuzzWeight = ((0, MB.h)(this, wl), new GT("fuzz_weight", 0, "vFuzzWeight", 1, 0)), mT.set(this, (0, MB.h)(this, Ul, void 0)), this._fuzzWeightTexture = ((0, MB.h)(this, Fl), new qT("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), iT.set(this, (0, MB.h)(this, Kl, void 0)), this._fuzzColor = ((0, MB.h)(this, rl), new GT("fuzz_color", GB.c.White(), "vFuzzColor", 3, 0)), NT.set(this, (0, MB.h)(this, Il, void 0)), this._fuzzColorTexture = ((0, MB.h)(this, cl), new qT("fuzz_color", "fuzzColor", "FUZZ_COLOR")), tT.set(this, (0, MB.h)(this, Sl, void 0)), this._fuzzRoughness = ((0, MB.h)(this, Pl), new GT("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), MT.set(this, (0, MB.h)(this, Ql, void 0)), this._fuzzRoughnessTexture = ((0, MB.h)(this, Rl), new qT("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), zT.set(this, (0, MB.h)(this, al, void 0)), this._geometryThinWalled = ((0, MB.h)(this, Zl), new GT("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), wT.set(this, (0, MB.h)(this, Xl, void 0)), this._geometryNormalTexture = ((0, MB.h)(this, Wl), new qT("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), UT.set(this, (0, MB.h)(this, hl, void 0)), this._geometryTangent = ((0, MB.h)(this, Cl), new GT("geometry_tangent", new RB.l(1, 0), "vSpecularAnisotropy", 3, 0)), FT.set(this, (0, MB.h)(this, Gl, void 0)), this._geometryTangentTexture = ((0, MB.h)(this, ql), new qT("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), KT.set(this, (0, MB.h)(this, xl, void 0)), this._geometryCoatNormalTexture = ((0, MB.h)(this, jl), new qT("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), rT.set(this, (0, MB.h)(this, Al, void 0)), this._geometryCoatTangent = ((0, MB.h)(this, bl), new GT("geometry_coat_tangent", new RB.l(1, 0), "vGeometryCoatTangent", 2, 0)), IT.set(this, (0, MB.h)(this, nl, void 0)), this._geometryCoatTangentTexture = ((0, MB.h)(this, el), new qT("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), cT.set(this, (0, MB.h)(this, BJ, void 0)), this._geometryOpacity = ((0, MB.h)(this, TJ), new GT("geometry_opacity", 1, "vBaseColor", 4, 3)), ST.set(this, (0, MB.h)(this, dJ, void 0)), this._geometryOpacityTexture = ((0, MB.h)(this, VJ), new qT("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), PT.set(this, (0, MB.h)(this, yJ, void 0)), this._geometryThickness = ((0, MB.h)(this, pJ), new GT("geometry_thickness", 0, "vGeometryThickness", 1, 0)), QT.set(this, (0, MB.h)(this, lJ, void 0)), this._geometryThicknessTexture = ((0, MB.h)(this, JJ), new qT("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), RT.set(this, (0, MB.h)(this, YJ, void 0)), this._emissionLuminance = ((0, MB.h)(this, gJ), new GT("emission_luminance", 1, "vLightingIntensity", 4, 1)), aT.set(this, (0, MB.h)(this, oJ, void 0)), this._emissionColor = ((0, MB.h)(this, kJ), new GT("emission_color", GB.c.Black(), "vEmissionColor", 3)), XT.set(this, (0, MB.h)(this, LJ, void 0)), this._emissionColorTexture = ((0, MB.h)(this, OJ), new qT("emission_color", "emissionColor", "EMISSION_COLOR")), hT.set(this, (0, MB.h)(this, DJ, void 0)), this._thinFilmWeight = ((0, MB.h)(this, uJ), new GT("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), xT.set(this, (0, MB.h)(this, HJ, void 0)), this._thinFilmWeightTexture = ((0, MB.h)(this, EJ), new qT("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), jT.set(this, (0, MB.h)(this, vJ, void 0)), this._thinFilmThickness = ((0, MB.h)(this, mJ), new GT("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), nT.set(this, (0, MB.h)(this, iJ, void 0)), this._thinFilmThicknessMin = ((0, MB.h)(this, NJ), new GT("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), eT.set(this, (0, MB.h)(this, tJ, void 0)), this._thinFilmThicknessTexture = ((0, MB.h)(this, fJ), new qT("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Bd.set(this, (0, MB.h)(this, sJ, void 0)), this._thinFilmIor = ((0, MB.h)(this, MJ), new GT("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), Td.set(this, (0, MB.h)(this, zJ, void 0)), this._ambientOcclusionTexture = ((0, MB.h)(this, wJ), new qT("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = BB.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, dd.set(this, (0, MB.h)(this, UJ, 1)), Vd.set(this, ((0, MB.h)(this, FJ), (0, MB.h)(this, KJ, 1))), yd.set(this, ((0, MB.h)(this, rJ), (0, MB.h)(this, IJ, !1))), pd.set(this, ((0, MB.h)(this, cJ), (0, MB.h)(this, SJ, !1))), ld.set(this, ((0, MB.h)(this, PJ), (0, MB.h)(this, QJ, .4))), Jd.set(this, ((0, MB.h)(this, RJ), (0, MB.h)(this, aJ, !1))), Yd.set(this, ((0, MB.h)(this, ZJ), (0, MB.h)(this, XJ, !1))), gd.set(this, ((0, MB.h)(this, WJ), (0, MB.h)(this, hJ, !1))), od.set(this, ((0, MB.h)(this, CJ), (0, MB.h)(this, GJ, !1))), kd.set(this, ((0, MB.h)(this, qJ), (0, MB.h)(this, xJ, !1))), Ld.set(this, ((0, MB.h)(this, jJ), (0, MB.h)(this, AJ, .05))), Od.set(this, ((0, MB.h)(this, bJ), (0, MB.h)(this, nJ, !1))), Dd.set(this, ((0, MB.h)(this, eJ), (0, MB.h)(this, BY, !1))), ud.set(this, ((0, MB.h)(this, TY), (0, MB.h)(this, dY, 4))), Hd.set(this, ((0, MB.h)(this, VY), (0, MB.h)(this, yY, !1))), Ed.set(this, ((0, MB.h)(this, pY), (0, MB.h)(this, lY, !1))), vd.set(this, ((0, MB.h)(this, JY), (0, MB.h)(this, YY, !1))), md.set(this, ((0, MB.h)(this, gY), (0, MB.h)(this, oY, !1))), Nd.set(this, ((0, MB.h)(this, kY), (0, MB.h)(this, LY, !1))), td.set(this, ((0, MB.h)(this, OY), (0, MB.h)(this, DY, null))), fd.set(this, ((0, MB.h)(this, uY), (0, MB.h)(this, HY, !1))), sd.set(this, ((0, MB.h)(this, EY), (0, MB.h)(this, vY, !1))), Md.set(this, ((0, MB.h)(this, mY), (0, MB.h)(this, iY, !0))), zd.set(this, ((0, MB.h)(this, NY), (0, MB.h)(this, tY, !0))), wd.set(this, ((0, MB.h)(this, fY), (0, MB.h)(this, sY, !1))), Ud.set(this, ((0, MB.h)(this, MY), (0, MB.h)(this, zY, !1))), this._lightingInfos = ((0, MB.h)(this, wY), new RB.r(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = pB.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new UB.g(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, Fd.set(this, (0, MB.h)(this, UY, 0)), this.debugLimit = ((0, MB.h)(this, FY), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = pB.b.MATERIAL_OPAQUE, this.jU() && !this.jU()?.PD().isWebGPU && this.jU().PD().Lu < 2 && wB.b.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), BB._noiseTextures[this.jU().uniqueId] || (BB._noiseTextures[this.jU().uniqueId] = new FB.f(sT.h.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.jU(), !1, !0, 1), this.jU().lF.addOnce((() => {
              BB._noiseTextures[this.jU().uniqueId]?.dispose(), delete BB._noiseTextures[this.jU().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), AB.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), AB.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = PB(this.jU()), this._environmentFuzzBRDFTexture = SB(this.jU()), this.prePassConfiguration = new CB.e, this._propertyList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const TB = this[BB];
              TB instanceof GT && (this._propertyList[BB] = TB)
            }
            Object.keys(this._propertyList).forEach((BB => {
              const TB = this._propertyList[BB];
              let dB = this._uniformsList[TB.targetUniformName];
              dB ? dB.numComponents !== TB.targetUniformComponentNum ? wB.b.Error(`Uniform ${TB.targetUniformName} already exists of size ${dB.numComponents}, but trying to set it to ${TB.targetUniformComponentNum}.`) : dB.requiredDefine !== TB.requiredDefine && (dB.requiredDefine = void 0) : (dB = new CT(TB.targetUniformName, TB.targetUniformComponentNum), dB.requiredDefine = TB.requiredDefine, this._uniformsList[TB.targetUniformName] = dB), "" === dB.firstLinkedKey && (dB.firstLinkedKey = TB.name), dB.linkedProperties[TB.name] = TB
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const TB = this[BB];
              TB instanceof qT && (this._samplersList[BB] = TB)
            }
            for (const BB in this._samplersList) {
              const TB = this._samplersList[BB].textureDefine;
              this._samplerDefines[TB] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[TB + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[TB + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(AB.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(AB.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
          set transparencyMode(BB) {
            this._transparencyMode !== BB && (this._transparencyMode = BB, this._markAllSubMeshesAsTexturesAndMiscDirty())
          }
          _shouldUseAlphaFromBaseColorTexture() {
            return this._hasAlphaChannel() && this._transparencyMode !== pB.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
          }
          _hasAlphaChannel() {
            return null != this.baseColorTexture && this.baseColorTexture.hasAlpha && this._useAlphaFromBaseColorTexture || null != this.geometryOpacityTexture
          }
          needAlphaBlending() {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture
          }
          needAlphaBlendingForMesh(BB) {
            return this.geometryOpacity < 1 || null != this.geometryOpacityTexture || super.needAlphaBlendingForMesh(BB)
          }
          clone(TB) {
            let dB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const yB = fT.c.Clone((() => new BB(TB, this.jU())), this, {
              cloneTexturesOnlyOnce: dB
            });
            return yB.id = TB, yB.name = TB, this.stencil.copyTo(yB.stencil), this._clonePlugins(yB, VB), yB
          }
          serialize() {
            const BB = super.serialize();
            return BB.customType = "BABYLON.OpenPBRMaterial", BB
          }
          static Parse(TB, dB, VB) {
            const yB = fT.c.Parse((() => new BB(TB.name, dB)), TB, dB, VB);
            return TB.stencil && yB.stencil.parse(TB.stencil, dB, VB), pB.b._ParsePlugins(TB, yB, dB, VB), yB
          }
          forceCompilation(BB, TB, dB) {
            const VB = {
              clipPlane: !1,
              useInstances: !1,
              ...dB
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const dB = new AT({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                yB = this._prepareEffect(BB, BB, dB, void 0, void 0, VB.useInstances, VB.clipPlane);
              this._onEffectCreatedObservable && (WT.effect = yB, WT.subMesh = null, this._onEffectCreatedObservable.notifyObservers(WT)), yB.isReady() ? TB && TB(this) : yB.onCompileObservable.add((() => {
                TB && TB(this)
              }))
            })()
          }
          isReadyForSubMesh(TB, dB, VB) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const yB = dB._drawWrapper;
            if (yB.effect && this.isFrozen && yB._wasPreviouslyReady && yB._wasPreviouslyUsingInstances === VB) return !0;
            dB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), dB.materialDefines = new AT({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const pB = dB.materialDefines;
            if (this._isReadyForSubMesh(dB)) return !0;
            const lB = this.jU(),
              JB = lB.PD();
            if (pB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, lB.texturesEnabled)) {
              for (const BB in this._samplersList) {
                const TB = this._samplersList[BB];
                if (TB.value && !TB.value.isReadyOrNotBlocking()) return !1
              }
              const TB = this._getRadianceTexture();
              if (TB && AB.d.ReflectionTextureEnabled) {
                if (!TB.isReadyOrNotBlocking()) return !1;
                if (TB.irradianceTexture) {
                  if (!TB.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!TB.sphericalPolynomial && TB.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && AB.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && AB.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && AB.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (BB._noiseTextures[lB.uniqueId] && !BB._noiseTextures[lB.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = pB, this._eventInfo.subMesh = dB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (pB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (pB.AREALIGHTUSED)
              for (let BB = 0; BB < TB.lightSources.length; BB++)
                if (!TB.lightSources[BB]._isReady()) return !1;
            if (JB.getCaps().standardDerivatives || TB.isVerticesDataPresent(aB.m.NormalKind) || (TB.createNormals(!0), wB.b.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + TB.name)), !(0, nB.d)(lB, TB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const YB = dB.effect,
              gB = pB._areLightsDisposed,
              oB = this._prepareEffect(TB, dB.getRenderingMesh(), pB, this.onCompiled, this.onError, VB, null);
            let kB = !1;
            if (oB)
              if (this._onEffectCreatedObservable && (WT.effect = oB, WT.subMesh = dB, this._onEffectCreatedObservable.notifyObservers(WT)), this.allowShaderHotSwapping && YB && !oB.isReady()) {
                if (pB.markAsUnprocessed(), kB = this.isFrozen, gB) return pB._areLightsDisposed = !0, !1
              } else lB.resetCachedMaterial(), dB.setEffect(oB, pB, this._materialContext);
            return !(!dB.effect || !dB.effect.isReady()) && (pB._renderId = lB.getRenderId(), yB._wasPreviouslyReady = !kB, yB._wasPreviouslyUsingInstances = !!VB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vDebugMode", 2), BB.addUniform("renderTargetSize", 2), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), BB.addUniform("backgroundRefractionMatrix", 16), BB.addUniform("vBackgroundRefractionInfos", 3), (0, nB.fb)(BB, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((TB => {
              BB.addUniform(TB.name, TB.numComponents)
            })), Object.values(this._samplersList).forEach((TB => {
              BB.addUniform(TB.samplerInfoName, 2), BB.addUniform(TB.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(BB, TB, dB, VB) {
            if (0 === this.geometryThickness) BB.updateFloat("vGeometryThickness", 0);
            else {
              VB.getRenderingMesh().getWorldMatrix().decompose(RB.j.RD[0]);
              const TB = Math.max(Math.abs(RB.j.RD[0].x), Math.abs(RB.j.RD[0].y), Math.abs(RB.j.RD[0].z));
              BB.updateFloat("vGeometryThickness", this.geometryThickness * TB)
            }
          }
          bindForSubMesh(TB, dB, VB) {
            const yB = this.jU(),
              pB = VB.materialDefines;
            if (!pB) return;
            const lB = VB.effect;
            if (!lB) return;
            this._activeEffect = lB, dB.getMeshUniformBuffer().bindToEffect(lB, "Mesh"), dB.transferToEffect(TB);
            const JB = yB.PD();
            this._uniformBuffer.bindToEffect(lB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, yB, dB, TB, this.isFrozen), OT.e.Bind(JB.currentRenderPassId, this._activeEffect, dB, TB, this);
            const YB = yB.activeCamera;
            YB ? this._uniformBuffer.updateFloat4("cameraInfo", YB.minZ, YB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const gB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", gB[0], gB[1], gB[2], gB[3]), this._eventInfo.subMesh = VB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), pB.OBJECTSPACE_NORMALMAP && (TB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const oB = this._mustRebind(yB, lB, VB, dB.visibility),
              kB = JB._features.needToAlwaysBindUniformBuffers;
            (0, nB.f)(dB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, kT.b)(this._activeEffect, this._vertexPullingMetadata);
            const LB = this._uniformBuffer;
            if (oB) {
              this.bindViewProjection(lB);
              const TB = this._getRadianceTexture();
              if (!LB.useUbo || !this.isFrozen || !LB.isSync || VB._drawWrapper._forceRebindOnNextCall) {
                if (yB.texturesEnabled) {
                  for (const BB in this._samplersList) {
                    const TB = this._samplersList[BB];
                    TB.value && (LB.updateFloat2(TB.samplerInfoName, TB.value.coordinatesIndex, TB.value.level), (0, nB.u)(TB.value, LB, TB.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (yB._mirroredCameraPosition ? LB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : LB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, nB.j)(yB, pB, LB, GB.c.White(), TB, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && LB.updateFloat("pointSize", this.pointSize);
                const BB = this._uniformsArray;
                for (let TB = 0, dB = BB.length; TB < dB; TB++) {
                  const dB = BB[TB];
                  (void 0 === dB.requiredDefine || pB[dB.requiredDefine]) && (4 === dB.numComponents ? (dB.populateVectorFromLinkedProperties(RB.j.Vector4[0]), LB.updateVector4(dB.name, RB.j.Vector4[0])) : 3 === dB.numComponents ? (dB.populateVectorFromLinkedProperties(RB.j.RD[0]), LB.updateVector3(dB.name, RB.j.RD[0])) : 2 === dB.numComponents ? (dB.populateVectorFromLinkedProperties(RB.j.Vector2[0]), LB.updateFloat2(dB.name, RB.j.Vector2[0].x, RB.j.Vector2[0].y)) : 1 === dB.numComponents && LB.updateFloat(dB.name, dB.linkedProperties[dB.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * yB.environmentIntensity, this._lightingInfos.w = 1, LB.updateVector4("vLightingIntensity", this._lightingInfos), LB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (yB.texturesEnabled) {
                for (const BB in this._samplersList) {
                  const TB = this._samplersList[BB];
                  TB.value && LB.setTexture(TB.samplerName, TB.value)
                }
                if ((0, nB.m)(yB, pB, LB, TB, this.realTimeFiltering), pB.ENVIRONMENTBRDF && LB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), pB.FUZZENVIRONMENTBRDF && LB.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), pB.REFRACTED_BACKGROUND && (LB.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), LB.i6("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), RB.j.RD[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), LB.updateVector3("vBackgroundRefractionInfos", RB.j.RD[1])), (pB.ANISOTROPIC || pB.FUZZ || pB.REFRACTED_BACKGROUND || pB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && LB.setTexture("blueNoiseSampler", BB._noiseTextures[this.jU().uniqueId]), pB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const BB = this.sssIrradianceTexture.getSize().width,
                    TB = this.sssIrradianceTexture.getSize().height;
                  LB.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), LB.setTexture("sceneDepthSampler", this.sssDepthTexture), LB.updateFloat2("renderTargetSize", BB, TB)
                }
              }
              this.jU().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(dB) && this.jU().depthPeelingRenderer.bind(lB), this._eventInfo.subMesh = VB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, oT.d)(this._activeEffect, this, yB), this.bindEyePosition(lB)
            } else kB && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, yB, yB.PD(), VB), !oB && this.isFrozen && !kB || !yB.lightsEnabled || this._disableLighting || (0, nB.n)(yB, dB, this._activeEffect, pB, this._maxSimultaneousLights), !oB && this.isFrozen || (this.bindView(lB), (0, nB.h)(yB, dB, this._activeEffect, !0), pB.NUM_MORPH_INFLUENCERS && (0, nB.q)(dB, this._activeEffect), pB.BAKED_VERTEX_ANIMATION_TEXTURE && dB.bakedVertexAnimationManager?.bind(lB, pB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, nB.p)(pB, this._activeEffect, yB)), this._afterBind(dB, this._activeEffect, VB), LB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            for (const TB in this._samplersList) {
              const dB = this._samplersList[TB];
              dB.value && dB.value.animations && dB.value.animations.length > 0 && BB.push(dB.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && BB.push(this._radianceTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            for (const TB in this._samplersList) {
              const dB = this._samplersList[TB];
              dB.value && BB.push(dB.value)
            }
            return this._radianceTexture && BB.push(this._radianceTexture), BB
          }
          hasTexture(BB) {
            if (super.hasTexture(BB)) return !0;
            for (const TB in this._samplersList) {
              if (this._samplersList[TB].value === BB) return !0
            }
            return this._radianceTexture === BB
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(BB, TB) {
            if (this._breakShaderLoadedCheck = !0, TB) {
              this._environmentBRDFTexture && this.jU().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.jU().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const BB in this._samplersList) {
                const TB = this._samplersList[BB];
                TB.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, TB)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.jU().environmentTexture
          }
          _prepareEffect(TB, dB, VB) {
            let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(TB, dB, VB, lB, JB), !VB.isDirty) return null;
            VB.markAsProcessed();
            const YB = this.jU().PD(),
              gB = new bB.d;
            let oB = 0;
            VB.USESPHERICALINVERTEX && gB.addFallback(oB++, "USESPHERICALINVERTEX"), VB.FOG && gB.addFallback(oB, "FOG"), VB.SPECULARAA && gB.addFallback(oB, "SPECULARAA"), VB.POINTSIZE && gB.addFallback(oB, "POINTSIZE"), VB.LOGARITHMICDEPTH && gB.addFallback(oB, "LOGARITHMICDEPTH"), VB.PARALLAX && gB.addFallback(oB, "PARALLAX"), VB.PARALLAX_RHS && gB.addFallback(oB, "PARALLAX_RHS"), VB.PARALLAXOCCLUSION && gB.addFallback(oB++, "PARALLAXOCCLUSION"), VB.ENVIRONMENTBRDF && gB.addFallback(oB++, "ENVIRONMENTBRDF"), VB.TANGENT && gB.addFallback(oB++, "TANGENT"), oB = (0, nB.x)(VB, gB, this._maxSimultaneousLights, oB), VB.SPECULARTERM && gB.addFallback(oB++, "SPECULARTERM"), VB.USESPHERICALFROMREFLECTIONMAP && gB.addFallback(oB++, "USESPHERICALFROMREFLECTIONMAP"), VB.USEIRRADIANCEMAP && gB.addFallback(oB++, "USEIRRADIANCEMAP"), VB.NORMAL && gB.addFallback(oB++, "NORMAL"), VB.VERTEXCOLOR && gB.addFallback(oB++, "VERTEXCOLOR"), VB.MORPHTARGETS && gB.addFallback(oB++, "MORPHTARGETS"), VB.MULTIVIEW && gB.addFallback(0, "MULTIVIEW");
            const kB = [aB.m.PositionKind];
            VB.NORMAL && kB.push(aB.m.NormalKind), VB.TANGENT && kB.push(aB.m.TangentKind);
            for (let BB = 1; BB <= 6; ++BB) VB["UV" + BB] && kB.push(`uv${1===BB?"":BB}`);
            VB.VERTEXCOLOR && kB.push(aB.m.ColorKind), (0, nB.D)(kB, TB, VB, gB), (0, nB.F)(kB, VB), (0, nB.G)(kB, TB, VB), (0, nB.A)(kB, TB, VB);
            let LB = "openpbr";
            const OB = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const BB in this._uniformsList) OB.push(BB);
            const DB = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            VB.FUZZENVIRONMENTBRDF && DB.push("environmentFuzzBrdfSampler"), VB.REFRACTED_BACKGROUND && DB.push("backgroundRefractionSampler"), (VB.ANISOTROPIC || VB.FUZZ || VB.REFRACTED_BACKGROUND || VB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && DB.push("blueNoiseSampler"), VB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (DB.push("sceneIrradianceSampler"), DB.push("sceneDepthSampler"));
            for (const BB in this._samplersList) {
              const TB = this._samplersList[BB];
              DB.push(TB.samplerName), OB.push(TB.samplerInfoName), OB.push(TB.samplerMatrixName)
            }(0, nB.jb)(OB, DB, !0);
            const uB = ["Material", "Scene", "Mesh"],
              HB = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: VB.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = gB, this._eventInfo.fallbackRank = oB, this._eventInfo.defines = VB, this._eventInfo.uniforms = OB, this._eventInfo.attributes = kB, this._eventInfo.samplers = DB, this._eventInfo.uniformBuffersNames = uB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = TB, this._eventInfo.indexParameters = HB, this._callbackPluginEventGeneric(128, this._eventInfo), OT.e.AddUniformsAndSamplers(OB, DB), CB.e.AddUniforms(OB), CB.e.AddSamplers(DB), (0, oT.c)(OB), this._useVertexPulling) {
              const BB = dB?.geometry;
              BB && (this._vertexPullingMetadata = (0, kT.e)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, TB) => {
                OB.push(`vp_${TB}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            xB.b && (xB.b.PrepareUniforms(OB, VB), xB.b.PrepareSamplers(DB, VB)), (0, nB.nb)({
              uniformsNames: OB,
              uniformBuffersNames: uB,
              samplers: DB,
              defines: VB,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const EB = {};
            this.customShaderNameResolve && (LB = this.customShaderNameResolve(LB, OB, uB, DB, VB, kB, EB));
            const vB = VB.toString(),
              mB = YB.createEffect(LB, {
                attributes: kB,
                uniformsNames: OB,
                uniformBuffersNames: uB,
                samplers: DB,
                defines: vB,
                fallbacks: gB,
                onCompiled: yB,
                onError: pB,
                indexParameters: HB,
                processFinalCode: EB.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: VB.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, YB);
            return this._eventInfo.customCode = void 0, mB
          }
          _prepareDefines(TB, dB, VB) {
            let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              lB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const JB = dB.hasThinInstances,
              YB = this.jU(),
              gB = YB.PD();
            (0, nB.Q)(YB, TB, VB, !0, this._maxSimultaneousLights, this._disableLighting), VB._needNormals = !0, (0, nB.Z)(YB, VB);
            const oB = this.needAlphaBlendingForMesh(TB) && this.jU().useOrderIndependentTransparency;
            if ((0, nB.bb)(YB, VB, this.canRenderToMRT && !oB), (0, nB._)(YB, VB, oB), OT.e.PrepareDefines(gB.currentRenderPassId, TB, VB), VB._areTexturesDirty) {
              VB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) VB["MAINUV" + BB] = !1;
              if (YB.texturesEnabled) {
                for (const dB in this._samplersList) {
                  const BB = this._samplersList[dB];
                  BB.value ? ((0, nB.S)(BB.value, VB, BB.textureDefine), VB[BB.textureDefine + "_GAMMA"] = BB.value.gammaSpace) : VB[BB.textureDefine] = !1
                }
                const BB = this._getRadianceTexture(),
                  TB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || gB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, nB.P)(YB, BB, VB, this.realTimeFiltering, this.realTimeFilteringQuality, !TB), this._baseMetalnessTexture && (VB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), VB.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, VB.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, VB.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, VB.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, VB.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, VB.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, VB.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, VB.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, VB.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, VB.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, VB.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && AB.d.DiffuseTextureEnabled ? (VB.PARALLAX = !0, VB.PARALLAX_RHS = YB.useRightHandedSystem, VB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : VB.PARALLAX = !1, VB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (VB.PARALLAX = !1, VB.PARALLAX_RHS = !1, VB.PARALLAXOCCLUSION = !1, VB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && AB.d.ReflectionTextureEnabled ? (VB.ENVIRONMENTBRDF = !0, VB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (VB.ENVIRONMENTBRDF = !1, VB.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? VB.FUZZENVIRONMENTBRDF = !0 : VB.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  VB.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && AB.d.RefractionTextureEnabled, VB.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, VB.REFRACTED_LIGHTS = !0;
                  const BB = this._getRadianceTexture();
                  BB ? (VB.REFRACTED_ENVIRONMENT = AB.d.RefractionTextureEnabled, VB.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.jU().useRightHandedSystem ? !BB.invertZ : BB.invertZ, VB.REFRACTED_ENVIRONMENT_LOCAL_CUBE = BB.isCube && BB.boundingBoxSize) : VB.REFRACTED_ENVIRONMENT = !1
                } else VB.REFRACTED_BACKGROUND = !1, VB.REFRACTED_LIGHTS = !1, VB.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? VB.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : VB.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === pB.b.LIGHTFALLOFF_STANDARD ? (VB.USEPHYSICALLIGHTFALLOFF = !1, VB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === pB.b.LIGHTFALLOFF_GLTF ? (VB.USEPHYSICALLIGHTFALLOFF = !1, VB.USEGLTFLIGHTFALLOFF = !0) : (VB.USEPHYSICALLIGHTFALLOFF = !0, VB.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? VB.TWOSIDEDLIGHTING = !0 : VB.TWOSIDEDLIGHTING = !1, VB.MIRRORED = !!YB._mirroredCameraPosition, VB.SPECULARAA = gB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(VB._areTexturesDirty || VB._areMiscDirty) && (VB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, VB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, VB.ALPHABLEND = this.needAlphaBlendingForMesh(TB)), VB._areTexturesDirty && (VB.TEXTURE_REPETITION_MODE = gB.version > 1 || gB.isWebGPU ? this.textureRepetitionMode : 0), VB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(VB), VB.FORCENORMALFORWARD = this._forceNormalForward, VB.RADIANCEOCCLUSION = this._useRadianceOcclusion, VB.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && BB._noiseTextures[YB.uniqueId] && AB.d.ReflectionTextureEnabled ? (VB.ANISOTROPIC = !0, TB.isVerticesDataPresent(aB.m.TangentKind) || (VB._needUVs = !0, VB.MAINUV1 = !0), this._useGltfStyleAnisotropy && (VB.USE_GLTF_STYLE_ANISOTROPY = !0), VB.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, VB.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (VB.ANISOTROPIC = !1, VB.USE_GLTF_STYLE_ANISOTROPY = !1, VB.ANISOTROPIC_BASE = !1, VB.ANISOTROPIC_COAT = !1), VB.THIN_FILM = this.thinFilmWeight > 0, VB.IRIDESCENCE = this.thinFilmWeight > 0, VB.DISPERSION = this.transmissionDispersionScale > 0, VB.SCATTERING = this.hasScattering;
            if (VB.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, VB.TRANSMISSION_SLAB = this.transmissionWeight > 0, VB.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, VB.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !VB.PREPASS && (VB.SUBSURFACE_SLAB || VB.TRANSMISSION_SLAB_VOLUME)) {
              let BB = !1;
              if (!this.sssIrradianceTexture && YB.geometryBufferRenderer) {
                const TB = YB.geometryBufferRenderer.getTextureIndex(ZT.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = YB.geometryBufferRenderer.getGBuffer().textures[TB], BB = !0
              }
              if (!this.sssDepthTexture && YB.geometryBufferRenderer) {
                const TB = YB.geometryBufferRenderer.getTextureIndex(ZT.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = YB.geometryBufferRenderer.getGBuffer().textures[TB], BB = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (VB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, BB && (VB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            VB.FUZZ = this.fuzzWeight > 0 && AB.d.ReflectionTextureEnabled, VB.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, VB.FUZZ ? (TB.isVerticesDataPresent(aB.m.TangentKind) || (VB._needUVs = !0, VB.MAINUV1 = !0), this._environmentFuzzBRDFTexture = SB(this.jU()), VB.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, VB.FUZZENVIRONMENTBRDF = !1, VB.FUZZ_IBL_SAMPLES = 0), VB._areMiscDirty && ((0, nB.W)(TB, YB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(TB), VB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, dB, this._isVertexOutputInvariant), VB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !TB.isVerticesDataPresent(aB.m.NormalKind), VB.DEBUGMODE = this._debugMode), (0, nB.L)(YB, gB, this, VB, !!yB, lB, JB), this._eventInfo.defines = VB, this._eventInfo.mesh = TB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, nB.I)(TB, VB, !0, !0, !0, this._transparencyMode !== pB.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, TB = new WeakMap, VB = new WeakMap, yB = new WeakMap, lB = new WeakMap, JB = new WeakMap, YB = new WeakMap, gB = new WeakMap, oB = new WeakMap, kB = new WeakMap, LB = new WeakMap, OB = new WeakMap, DB = new WeakMap, uB = new WeakMap, HB = new WeakMap, EB = new WeakMap, vB = new WeakMap, mB = new WeakMap, iB = new WeakMap, NB = new WeakMap, tB = new WeakMap, fB = new WeakMap, sB = new WeakMap, KB = new WeakMap, rB = new WeakMap, IB = new WeakMap, cB = new WeakMap, QB = new WeakMap, ZB = new WeakMap, XB = new WeakMap, WB = new WeakMap, hB = new WeakMap, qB = new WeakMap, jB = new WeakMap, eB = new WeakMap, BT = new WeakMap, TT = new WeakMap, dT = new WeakMap, VT = new WeakMap, yT = new WeakMap, pT = new WeakMap, lT = new WeakMap, JT = new WeakMap, YT = new WeakMap, gT = new WeakMap, DT = new WeakMap, uT = new WeakMap, HT = new WeakMap, ET = new WeakMap, vT = new WeakMap, mT = new WeakMap, iT = new WeakMap, NT = new WeakMap, tT = new WeakMap, MT = new WeakMap, zT = new WeakMap, wT = new WeakMap, UT = new WeakMap, FT = new WeakMap, KT = new WeakMap, rT = new WeakMap, IT = new WeakMap, cT = new WeakMap, ST = new WeakMap, PT = new WeakMap, QT = new WeakMap, RT = new WeakMap, aT = new WeakMap, XT = new WeakMap, hT = new WeakMap, xT = new WeakMap, jT = new WeakMap, nT = new WeakMap, eT = new WeakMap, Bd = new WeakMap, Td = new WeakMap, dd = new WeakMap, Vd = new WeakMap, yd = new WeakMap, pd = new WeakMap, ld = new WeakMap, Jd = new WeakMap, Yd = new WeakMap, gd = new WeakMap, od = new WeakMap, kd = new WeakMap, Ld = new WeakMap, Od = new WeakMap, Dd = new WeakMap, ud = new WeakMap, Hd = new WeakMap, Ed = new WeakMap, vd = new WeakMap, md = new WeakMap, Nd = new WeakMap, td = new WeakMap, fd = new WeakMap, sd = new WeakMap, Md = new WeakMap, zd = new WeakMap, wd = new WeakMap, Ud = new WeakMap, Fd = new WeakMap, (() => {
          const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(ry[Symbol.metadata] ?? null) : void 0;
          Kd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], rd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Id = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], cd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Sd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Pd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Qd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Rd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], ad = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Zd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Xd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Wd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], hd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Cd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Gd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], qd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], xd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], jd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Ad = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], bd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], nd = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], ed = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], BV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], TV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], dV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], VV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], yV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], pV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], lV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], JV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], YV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], gV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], oV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], kV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], LV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], OV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], DV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], uV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], HV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], EV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], vV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], mV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], iV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], NV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], tV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], fV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], sV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], MV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], zV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], wV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], UV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], FV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], KV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], rV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], IV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], cV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], SV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], PV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], QV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], RV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], aV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], ZV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], XV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], WV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], hV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], CV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], GV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], qV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], xV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], jV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], AV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], bV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], nV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], eV = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], By = [(0, zB.e)("_markAllSubMeshesAsTexturesDirty")], Ty = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], dy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Vy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], yy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], py = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], ly = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Jy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Yy = [(0, zB.W)()], gy = [(0, zB.W)()], oy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], ky = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Ly = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Oy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Dy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsLightsDirty")], uy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Hy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsLightsDirty")], Ey = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], vy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], my = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], iy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Ny = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], ty = [(0, zB.i)("_markAllSubMeshesAsTexturesDirty")], fy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], sy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], My = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], zy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], wy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], Uy = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], Fy = [(0, zB.i)("_markAllSubMeshesAsMiscDirty")], Ky = [(0, zB.W)()], (0, MB.g)(BB, null, Kd, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeight" in BB,
              get: BB => BB.baseWeight,
              set: (BB, TB) => {
                BB.baseWeight = TB
              }
            },
            metadata: TB
          }, cy, Sy), (0, MB.g)(BB, null, rd, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeightTexture" in BB,
              get: BB => BB.baseWeightTexture,
              set: (BB, TB) => {
                BB.baseWeightTexture = TB
              }
            },
            metadata: TB
          }, Py, Qy), (0, MB.g)(BB, null, Id, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColor" in BB,
              get: BB => BB.baseColor,
              set: (BB, TB) => {
                BB.baseColor = TB
              }
            },
            metadata: TB
          }, Ry, ay), (0, MB.g)(BB, null, cd, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColorTexture" in BB,
              get: BB => BB.baseColorTexture,
              set: (BB, TB) => {
                BB.baseColorTexture = TB
              }
            },
            metadata: TB
          }, Zy, Xy), (0, MB.g)(BB, null, Sd, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughness" in BB,
              get: BB => BB.baseDiffuseRoughness,
              set: (BB, TB) => {
                BB.baseDiffuseRoughness = TB
              }
            },
            metadata: TB
          }, Wy, hy), (0, MB.g)(BB, null, Pd, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughnessTexture" in BB,
              get: BB => BB.baseDiffuseRoughnessTexture,
              set: (BB, TB) => {
                BB.baseDiffuseRoughnessTexture = TB
              }
            },
            metadata: TB
          }, Cy, Gy), (0, MB.g)(BB, null, Qd, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalness" in BB,
              get: BB => BB.baseMetalness,
              set: (BB, TB) => {
                BB.baseMetalness = TB
              }
            },
            metadata: TB
          }, qy, xy), (0, MB.g)(BB, null, Rd, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalnessTexture" in BB,
              get: BB => BB.baseMetalnessTexture,
              set: (BB, TB) => {
                BB.baseMetalnessTexture = TB
              }
            },
            metadata: TB
          }, jy, Ay), (0, MB.g)(BB, null, ad, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeight" in BB,
              get: BB => BB.specularWeight,
              set: (BB, TB) => {
                BB.specularWeight = TB
              }
            },
            metadata: TB
          }, by, ny), (0, MB.g)(BB, null, Zd, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeightTexture" in BB,
              get: BB => BB.specularWeightTexture,
              set: (BB, TB) => {
                BB.specularWeightTexture = TB
              }
            },
            metadata: TB
          }, ey, Bp), (0, MB.g)(BB, null, Xd, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, TB) => {
                BB.specularColor = TB
              }
            },
            metadata: TB
          }, Tp, dp), (0, MB.g)(BB, null, Wd, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColorTexture" in BB,
              get: BB => BB.specularColorTexture,
              set: (BB, TB) => {
                BB.specularColorTexture = TB
              }
            },
            metadata: TB
          }, Vp, yp), (0, MB.g)(BB, null, hd, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughness" in BB,
              get: BB => BB.specularRoughness,
              set: (BB, TB) => {
                BB.specularRoughness = TB
              }
            },
            metadata: TB
          }, pp, lp), (0, MB.g)(BB, null, Cd, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessTexture" in BB,
              get: BB => BB.specularRoughnessTexture,
              set: (BB, TB) => {
                BB.specularRoughnessTexture = TB
              }
            },
            metadata: TB
          }, Jp, Yp), (0, MB.g)(BB, null, Gd, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropy" in BB,
              get: BB => BB.specularRoughnessAnisotropy,
              set: (BB, TB) => {
                BB.specularRoughnessAnisotropy = TB
              }
            },
            metadata: TB
          }, gp, op), (0, MB.g)(BB, null, qd, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropyTexture" in BB,
              get: BB => BB.specularRoughnessAnisotropyTexture,
              set: (BB, TB) => {
                BB.specularRoughnessAnisotropyTexture = TB
              }
            },
            metadata: TB
          }, kp, Lp), (0, MB.g)(BB, null, xd, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularIor" in BB,
              get: BB => BB.specularIor,
              set: (BB, TB) => {
                BB.specularIor = TB
              }
            },
            metadata: TB
          }, Op, Dp), (0, MB.g)(BB, null, jd, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeight" in BB,
              get: BB => BB.transmissionWeight,
              set: (BB, TB) => {
                BB.transmissionWeight = TB
              }
            },
            metadata: TB
          }, Hp, Ep), (0, MB.g)(BB, null, Ad, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeightTexture" in BB,
              get: BB => BB.transmissionWeightTexture,
              set: (BB, TB) => {
                BB.transmissionWeightTexture = TB
              }
            },
            metadata: TB
          }, vp, mp), (0, MB.g)(BB, null, bd, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColor" in BB,
              get: BB => BB.transmissionColor,
              set: (BB, TB) => {
                BB.transmissionColor = TB
              }
            },
            metadata: TB
          }, ip, Np), (0, MB.g)(BB, null, nd, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColorTexture" in BB,
              get: BB => BB.transmissionColorTexture,
              set: (BB, TB) => {
                BB.transmissionColorTexture = TB
              }
            },
            metadata: TB
          }, tp, fp), (0, MB.g)(BB, null, ed, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepth" in BB,
              get: BB => BB.transmissionDepth,
              set: (BB, TB) => {
                BB.transmissionDepth = TB
              }
            },
            metadata: TB
          }, sp, Mp), (0, MB.g)(BB, null, BV, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepthTexture" in BB,
              get: BB => BB.transmissionDepthTexture,
              set: (BB, TB) => {
                BB.transmissionDepthTexture = TB
              }
            },
            metadata: TB
          }, zp, wp), (0, MB.g)(BB, null, TV, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatter" in BB,
              get: BB => BB.transmissionScatter,
              set: (BB, TB) => {
                BB.transmissionScatter = TB
              }
            },
            metadata: TB
          }, Up, Fp), (0, MB.g)(BB, null, dV, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterTexture" in BB,
              get: BB => BB.transmissionScatterTexture,
              set: (BB, TB) => {
                BB.transmissionScatterTexture = TB
              }
            },
            metadata: TB
          }, Kp, rp), (0, MB.g)(BB, null, VV, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterAnisotropy" in BB,
              get: BB => BB.transmissionScatterAnisotropy,
              set: (BB, TB) => {
                BB.transmissionScatterAnisotropy = TB
              }
            },
            metadata: TB
          }, Ip, cp), (0, MB.g)(BB, null, yV, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScale" in BB,
              get: BB => BB.transmissionDispersionScale,
              set: (BB, TB) => {
                BB.transmissionDispersionScale = TB
              }
            },
            metadata: TB
          }, Sp, Pp), (0, MB.g)(BB, null, pV, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScaleTexture" in BB,
              get: BB => BB.transmissionDispersionScaleTexture,
              set: (BB, TB) => {
                BB.transmissionDispersionScaleTexture = TB
              }
            },
            metadata: TB
          }, Qp, Rp), (0, MB.g)(BB, null, lV, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionAbbeNumber" in BB,
              get: BB => BB.transmissionDispersionAbbeNumber,
              set: (BB, TB) => {
                BB.transmissionDispersionAbbeNumber = TB
              }
            },
            metadata: TB
          }, ap, Zp), (0, MB.g)(BB, null, JV, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeight" in BB,
              get: BB => BB.subsurfaceWeight,
              set: (BB, TB) => {
                BB.subsurfaceWeight = TB
              }
            },
            metadata: TB
          }, Xp, Wp), (0, MB.g)(BB, null, YV, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeightTexture" in BB,
              get: BB => BB.subsurfaceWeightTexture,
              set: (BB, TB) => {
                BB.subsurfaceWeightTexture = TB
              }
            },
            metadata: TB
          }, hp, Cp), (0, MB.g)(BB, null, gV, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColor" in BB,
              get: BB => BB.subsurfaceColor,
              set: (BB, TB) => {
                BB.subsurfaceColor = TB
              }
            },
            metadata: TB
          }, Gp, qp), (0, MB.g)(BB, null, oV, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColorTexture" in BB,
              get: BB => BB.subsurfaceColorTexture,
              set: (BB, TB) => {
                BB.subsurfaceColorTexture = TB
              }
            },
            metadata: TB
          }, xp, jp), (0, MB.g)(BB, null, kV, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadius" in BB,
              get: BB => BB.subsurfaceRadius,
              set: (BB, TB) => {
                BB.subsurfaceRadius = TB
              }
            },
            metadata: TB
          }, Ap, bp), (0, MB.g)(BB, null, LV, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScale" in BB,
              get: BB => BB.subsurfaceRadiusScale,
              set: (BB, TB) => {
                BB.subsurfaceRadiusScale = TB
              }
            },
            metadata: TB
          }, np, ep), (0, MB.g)(BB, null, OV, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScaleTexture" in BB,
              get: BB => BB.subsurfaceRadiusScaleTexture,
              set: (BB, TB) => {
                BB.subsurfaceRadiusScaleTexture = TB
              }
            },
            metadata: TB
          }, Bl, Tl), (0, MB.g)(BB, null, DV, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceScatterAnisotropy" in BB,
              get: BB => BB.subsurfaceScatterAnisotropy,
              set: (BB, TB) => {
                BB.subsurfaceScatterAnisotropy = TB
              }
            },
            metadata: TB
          }, dl, Vl), (0, MB.g)(BB, null, uV, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeight" in BB,
              get: BB => BB.coatWeight,
              set: (BB, TB) => {
                BB.coatWeight = TB
              }
            },
            metadata: TB
          }, yl, pl), (0, MB.g)(BB, null, HV, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeightTexture" in BB,
              get: BB => BB.coatWeightTexture,
              set: (BB, TB) => {
                BB.coatWeightTexture = TB
              }
            },
            metadata: TB
          }, ll, Jl), (0, MB.g)(BB, null, EV, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColor" in BB,
              get: BB => BB.coatColor,
              set: (BB, TB) => {
                BB.coatColor = TB
              }
            },
            metadata: TB
          }, Yl, gl), (0, MB.g)(BB, null, vV, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColorTexture" in BB,
              get: BB => BB.coatColorTexture,
              set: (BB, TB) => {
                BB.coatColorTexture = TB
              }
            },
            metadata: TB
          }, ol, kl), (0, MB.g)(BB, null, mV, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughness" in BB,
              get: BB => BB.coatRoughness,
              set: (BB, TB) => {
                BB.coatRoughness = TB
              }
            },
            metadata: TB
          }, Ll, Ol), (0, MB.g)(BB, null, iV, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessTexture" in BB,
              get: BB => BB.coatRoughnessTexture,
              set: (BB, TB) => {
                BB.coatRoughnessTexture = TB
              }
            },
            metadata: TB
          }, Dl, ul), (0, MB.g)(BB, null, NV, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropy" in BB,
              get: BB => BB.coatRoughnessAnisotropy,
              set: (BB, TB) => {
                BB.coatRoughnessAnisotropy = TB
              }
            },
            metadata: TB
          }, Hl, El), (0, MB.g)(BB, null, tV, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropyTexture" in BB,
              get: BB => BB.coatRoughnessAnisotropyTexture,
              set: (BB, TB) => {
                BB.coatRoughnessAnisotropyTexture = TB
              }
            },
            metadata: TB
          }, vl, ml), (0, MB.g)(BB, null, fV, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatIor" in BB,
              get: BB => BB.coatIor,
              set: (BB, TB) => {
                BB.coatIor = TB
              }
            },
            metadata: TB
          }, il, Nl), (0, MB.g)(BB, null, sV, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkening" in BB,
              get: BB => BB.coatDarkening,
              set: (BB, TB) => {
                BB.coatDarkening = TB
              }
            },
            metadata: TB
          }, tl, fl), (0, MB.g)(BB, null, MV, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkeningTexture" in BB,
              get: BB => BB.coatDarkeningTexture,
              set: (BB, TB) => {
                BB.coatDarkeningTexture = TB
              }
            },
            metadata: TB
          }, sl, Ml), (0, MB.g)(BB, null, zV, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeight" in BB,
              get: BB => BB.fuzzWeight,
              set: (BB, TB) => {
                BB.fuzzWeight = TB
              }
            },
            metadata: TB
          }, zl, wl), (0, MB.g)(BB, null, wV, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeightTexture" in BB,
              get: BB => BB.fuzzWeightTexture,
              set: (BB, TB) => {
                BB.fuzzWeightTexture = TB
              }
            },
            metadata: TB
          }, Ul, Fl), (0, MB.g)(BB, null, UV, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColor" in BB,
              get: BB => BB.fuzzColor,
              set: (BB, TB) => {
                BB.fuzzColor = TB
              }
            },
            metadata: TB
          }, Kl, rl), (0, MB.g)(BB, null, FV, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColorTexture" in BB,
              get: BB => BB.fuzzColorTexture,
              set: (BB, TB) => {
                BB.fuzzColorTexture = TB
              }
            },
            metadata: TB
          }, Il, cl), (0, MB.g)(BB, null, KV, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughness" in BB,
              get: BB => BB.fuzzRoughness,
              set: (BB, TB) => {
                BB.fuzzRoughness = TB
              }
            },
            metadata: TB
          }, Sl, Pl), (0, MB.g)(BB, null, rV, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughnessTexture" in BB,
              get: BB => BB.fuzzRoughnessTexture,
              set: (BB, TB) => {
                BB.fuzzRoughnessTexture = TB
              }
            },
            metadata: TB
          }, Ql, Rl), (0, MB.g)(BB, null, IV, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThinWalled" in BB,
              get: BB => BB.geometryThinWalled,
              set: (BB, TB) => {
                BB.geometryThinWalled = TB
              }
            },
            metadata: TB
          }, al, Zl), (0, MB.g)(BB, null, cV, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryNormalTexture" in BB,
              get: BB => BB.geometryNormalTexture,
              set: (BB, TB) => {
                BB.geometryNormalTexture = TB
              }
            },
            metadata: TB
          }, Xl, Wl), (0, MB.g)(BB, null, SV, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangent" in BB,
              get: BB => BB.geometryTangent,
              set: (BB, TB) => {
                BB.geometryTangent = TB
              }
            },
            metadata: TB
          }, hl, Cl), (0, MB.g)(BB, null, PV, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangentTexture" in BB,
              get: BB => BB.geometryTangentTexture,
              set: (BB, TB) => {
                BB.geometryTangentTexture = TB
              }
            },
            metadata: TB
          }, Gl, ql), (0, MB.g)(BB, null, QV, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatNormalTexture" in BB,
              get: BB => BB.geometryCoatNormalTexture,
              set: (BB, TB) => {
                BB.geometryCoatNormalTexture = TB
              }
            },
            metadata: TB
          }, xl, jl), (0, MB.g)(BB, null, RV, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangent" in BB,
              get: BB => BB.geometryCoatTangent,
              set: (BB, TB) => {
                BB.geometryCoatTangent = TB
              }
            },
            metadata: TB
          }, Al, bl), (0, MB.g)(BB, null, aV, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangentTexture" in BB,
              get: BB => BB.geometryCoatTangentTexture,
              set: (BB, TB) => {
                BB.geometryCoatTangentTexture = TB
              }
            },
            metadata: TB
          }, nl, el), (0, MB.g)(BB, null, ZV, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacity" in BB,
              get: BB => BB.geometryOpacity,
              set: (BB, TB) => {
                BB.geometryOpacity = TB
              }
            },
            metadata: TB
          }, BJ, TJ), (0, MB.g)(BB, null, XV, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacityTexture" in BB,
              get: BB => BB.geometryOpacityTexture,
              set: (BB, TB) => {
                BB.geometryOpacityTexture = TB
              }
            },
            metadata: TB
          }, dJ, VJ), (0, MB.g)(BB, null, WV, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThickness" in BB,
              get: BB => BB.geometryThickness,
              set: (BB, TB) => {
                BB.geometryThickness = TB
              }
            },
            metadata: TB
          }, yJ, pJ), (0, MB.g)(BB, null, hV, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThicknessTexture" in BB,
              get: BB => BB.geometryThicknessTexture,
              set: (BB, TB) => {
                BB.geometryThicknessTexture = TB
              }
            },
            metadata: TB
          }, lJ, JJ), (0, MB.g)(BB, null, CV, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionLuminance" in BB,
              get: BB => BB.emissionLuminance,
              set: (BB, TB) => {
                BB.emissionLuminance = TB
              }
            },
            metadata: TB
          }, YJ, gJ), (0, MB.g)(BB, null, GV, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColor" in BB,
              get: BB => BB.emissionColor,
              set: (BB, TB) => {
                BB.emissionColor = TB
              }
            },
            metadata: TB
          }, oJ, kJ), (0, MB.g)(BB, null, qV, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColorTexture" in BB,
              get: BB => BB.emissionColorTexture,
              set: (BB, TB) => {
                BB.emissionColorTexture = TB
              }
            },
            metadata: TB
          }, LJ, OJ), (0, MB.g)(BB, null, xV, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeight" in BB,
              get: BB => BB.thinFilmWeight,
              set: (BB, TB) => {
                BB.thinFilmWeight = TB
              }
            },
            metadata: TB
          }, DJ, uJ), (0, MB.g)(BB, null, jV, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeightTexture" in BB,
              get: BB => BB.thinFilmWeightTexture,
              set: (BB, TB) => {
                BB.thinFilmWeightTexture = TB
              }
            },
            metadata: TB
          }, HJ, EJ), (0, MB.g)(BB, null, AV, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThickness" in BB,
              get: BB => BB.thinFilmThickness,
              set: (BB, TB) => {
                BB.thinFilmThickness = TB
              }
            },
            metadata: TB
          }, vJ, mJ), (0, MB.g)(BB, null, bV, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessMin" in BB,
              get: BB => BB.thinFilmThicknessMin,
              set: (BB, TB) => {
                BB.thinFilmThicknessMin = TB
              }
            },
            metadata: TB
          }, iJ, NJ), (0, MB.g)(BB, null, nV, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessTexture" in BB,
              get: BB => BB.thinFilmThicknessTexture,
              set: (BB, TB) => {
                BB.thinFilmThicknessTexture = TB
              }
            },
            metadata: TB
          }, tJ, fJ), (0, MB.g)(BB, null, eV, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmIor" in BB,
              get: BB => BB.thinFilmIor,
              set: (BB, TB) => {
                BB.thinFilmIor = TB
              }
            },
            metadata: TB
          }, sJ, MJ), (0, MB.g)(BB, null, By, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientOcclusionTexture" in BB,
              get: BB => BB.ambientOcclusionTexture,
              set: (BB, TB) => {
                BB.ambientOcclusionTexture = TB
              }
            },
            metadata: TB
          }, zJ, wJ), (0, MB.g)(BB, null, Ty, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "directIntensity" in BB,
              get: BB => BB.directIntensity,
              set: (BB, TB) => {
                BB.directIntensity = TB
              }
            },
            metadata: TB
          }, UJ, FJ), (0, MB.g)(BB, null, dy, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentIntensity" in BB,
              get: BB => BB.environmentIntensity,
              set: (BB, TB) => {
                BB.environmentIntensity = TB
              }
            },
            metadata: TB
          }, KJ, rJ), (0, MB.g)(BB, null, Vy, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularWeightFromTextureAlpha" in BB,
              get: BB => BB.useSpecularWeightFromTextureAlpha,
              set: (BB, TB) => {
                BB.useSpecularWeightFromTextureAlpha = TB
              }
            },
            metadata: TB
          }, IJ, cJ), (0, MB.g)(BB, null, yy, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAlphaTest" in BB,
              get: BB => BB.forceAlphaTest,
              set: (BB, TB) => {
                BB.forceAlphaTest = TB
              }
            },
            metadata: TB
          }, SJ, PJ), (0, MB.g)(BB, null, py, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, TB) => {
                BB.alphaCutOff = TB
              }
            },
            metadata: TB
          }, QJ, RJ), (0, MB.g)(BB, null, ly, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
              get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
              set: (BB, TB) => {
                BB.useAmbientOcclusionFromMetallicTextureRed = TB
              }
            },
            metadata: TB
          }, aJ, ZJ), (0, MB.g)(BB, null, Jy, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientInGrayScale" in BB,
              get: BB => BB.useAmbientInGrayScale,
              set: (BB, TB) => {
                BB.useAmbientInGrayScale = TB
              }
            },
            metadata: TB
          }, XJ, WJ), (0, MB.g)(BB, null, Yy, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "usePhysicalLightFalloff" in BB,
              get: BB => BB.usePhysicalLightFalloff
            },
            metadata: TB
          }, null, Iy), (0, MB.g)(BB, null, gy, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGLTFLightFalloff" in BB,
              get: BB => BB.useGLTFLightFalloff
            },
            metadata: TB
          }, null, Iy), (0, MB.g)(BB, null, oy, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, TB) => {
                BB.useObjectSpaceNormalMap = TB
              }
            },
            metadata: TB
          }, hJ, CJ), (0, MB.g)(BB, null, ky, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, TB) => {
                BB.useParallax = TB
              }
            },
            metadata: TB
          }, GJ, qJ), (0, MB.g)(BB, null, Ly, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, TB) => {
                BB.useParallaxOcclusion = TB
              }
            },
            metadata: TB
          }, xJ, jJ), (0, MB.g)(BB, null, Oy, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, TB) => {
                BB.parallaxScaleBias = TB
              }
            },
            metadata: TB
          }, AJ, bJ), (0, MB.g)(BB, null, Dy, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, TB) => {
                BB.disableLighting = TB
              }
            },
            metadata: TB
          }, nJ, eJ), (0, MB.g)(BB, null, uy, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceIrradianceInFragment" in BB,
              get: BB => BB.forceIrradianceInFragment,
              set: (BB, TB) => {
                BB.forceIrradianceInFragment = TB
              }
            },
            metadata: TB
          }, BY, TY), (0, MB.g)(BB, null, Hy, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, TB) => {
                BB.maxSimultaneousLights = TB
              }
            },
            metadata: TB
          }, dY, VY), (0, MB.g)(BB, null, Ey, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, TB) => {
                BB.invertNormalMapX = TB
              }
            },
            metadata: TB
          }, yY, pY), (0, MB.g)(BB, null, vy, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, TB) => {
                BB.invertNormalMapY = TB
              }
            },
            metadata: TB
          }, lY, JY), (0, MB.g)(BB, null, my, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, TB) => {
                BB.twoSidedLighting = TB
              }
            },
            metadata: TB
          }, YY, gY), (0, MB.g)(BB, null, iy, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFresnel" in BB,
              get: BB => BB.useAlphaFresnel,
              set: (BB, TB) => {
                BB.useAlphaFresnel = TB
              }
            },
            metadata: TB
          }, oY, kY), (0, MB.g)(BB, null, Ny, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLinearAlphaFresnel" in BB,
              get: BB => BB.useLinearAlphaFresnel,
              set: (BB, TB) => {
                BB.useLinearAlphaFresnel = TB
              }
            },
            metadata: TB
          }, LY, OY), (0, MB.g)(BB, null, ty, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentBRDFTexture" in BB,
              get: BB => BB.environmentBRDFTexture,
              set: (BB, TB) => {
                BB.environmentBRDFTexture = TB
              }
            },
            metadata: TB
          }, DY, uY), (0, MB.g)(BB, null, fy, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceNormalForward" in BB,
              get: BB => BB.forceNormalForward,
              set: (BB, TB) => {
                BB.forceNormalForward = TB
              }
            },
            metadata: TB
          }, HY, EY), (0, MB.g)(BB, null, sy, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: BB => "enableSpecularAntiAliasing" in BB,
              get: BB => BB.enableSpecularAntiAliasing,
              set: (BB, TB) => {
                BB.enableSpecularAntiAliasing = TB
              }
            },
            metadata: TB
          }, vY, mY), (0, MB.g)(BB, null, My, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useHorizonOcclusion" in BB,
              get: BB => BB.useHorizonOcclusion,
              set: (BB, TB) => {
                BB.useHorizonOcclusion = TB
              }
            },
            metadata: TB
          }, iY, NY), (0, MB.g)(BB, null, zy, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useRadianceOcclusion" in BB,
              get: BB => BB.useRadianceOcclusion,
              set: (BB, TB) => {
                BB.useRadianceOcclusion = TB
              }
            },
            metadata: TB
          }, tY, fY), (0, MB.g)(BB, null, wy, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unlit" in BB,
              get: BB => BB.unlit,
              set: (BB, TB) => {
                BB.unlit = TB
              }
            },
            metadata: TB
          }, sY, MY), (0, MB.g)(BB, null, Uy, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, TB) => {
                BB.applyDecalMapAfterDetailMap = TB
              }
            },
            metadata: TB
          }, zY, wY), (0, MB.g)(BB, null, Fy, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "debugMode" in BB,
              get: BB => BB.debugMode,
              set: (BB, TB) => {
                BB.debugMode = TB
              }
            },
            metadata: TB
          }, UY, FY), (0, MB.g)(BB, null, Ky, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "transparencyMode" in BB,
              get: BB => BB.transparencyMode
            },
            metadata: TB
          }, null, Iy), TB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TB
          })
        })(), BB.SSS_QUALITY_LOW = 0, BB.SSS_QUALITY_MEDIUM = 1, BB.SSS_QUALITY_HIGH = 2, BB._noiseTextures = {}, BB.ForceGLSL = !1, BB._ShaderLoader = new LT.b((() => [Promise.all([dB.e(297), dB.e(363)]).then((() => dB(60284))), Promise.all([dB.e(302), dB.e(298), dB.e(362), dB.e(367)]).then((() => dB(60297)))]), (() => [Promise.all([dB.e(316), dB.e(318), dB.e(366)]).then((() => dB(60339))), Promise.all([dB.e(316), dB.e(319), dB.e(365), dB.e(368)]).then((() => dB(60345)))])), BB
      })(),
      eT = !1;
    eT || (eT = !0, (0, xB.f)(), (0, XT.g)("BABYLON.OpenPBRMaterial", nT));
    var Bd = dB(36150);
    class Td {
      constructor(BB) {
        this.name = cT.b.NAME_PROCEDURALTEXTURE, this.Gu = BB
      }
      register() {
        this.Gu._beforeClearStage.registerStep(cT.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.Gu.proceduralTexturesEnabled) {
          sT.h.StartPerformanceCounter("Procedural textures", this.Gu.proceduralTextures.length > 0);
          for (let BB = 0; BB < this.Gu.proceduralTextures.length; BB++) {
            const TB = this.Gu.proceduralTextures[BB];
            TB._shouldRender() && TB.render()
          }
          sT.h.EndPerformanceCounter("Procedural textures", this.Gu.proceduralTextures.length > 0)
        }
      }
    }
    var dd = dB(39069);
    let Vd = (() => {
      var BB;
      let TB, VB, yB, lB, JB, YB = FB.f,
        gB = [],
        oB = [],
        kB = [],
        LB = [],
        OB = [],
        DB = [],
        HB = [],
        EB = [],
        vB = [];
      return BB = class extends YB {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(BB, TB, dB, VB) {
          let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, VB, !pB), this.isEnabled = ((0, MB.h)(this, gB), (0, MB.h)(this, oB, !0)), this.autoClear = ((0, MB.h)(this, kB), (0, MB.h)(this, LB, !0)), this.onGenerated = (0, MB.h)(this, OB), this.onGeneratedObservable = new Bd.e, this.onBeforeGenerationObservable = new Bd.e, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, MB.h)(this, DB, void 0), this._drawWrapper = (0, MB.h)(this, HB), this._textures = {}, this._size = (0, MB.h)(this, EB, void 0), this._textureType = (0, MB.h)(this, vB), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === yB || yB instanceof FB.f ? (this._options = {}, this._fallbackTexture = yB) : (this._options = yB, this._fallbackTexture = yB.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let YB = (VB = this.jU() || uB.c.LastCreatedScene)._getComponent(cT.b.NAME_PROCEDURALTEXTURE);
          YB || (YB = new Td(VB), VB.OVB(YB)), this._options.skipSceneRegistration || VB.proceduralTextures.push(this), this._fullEngine = VB.PD(), this.name = BB, this.isRenderTarget = !0, this._size = TB, this._textureType = JB, this._generateMipMaps = pB, this._drawWrapper = new dd.b(this._fullEngine), this.setFragment(dB);
          const mB = this._createRtWrapper(lB, TB, pB, JB);
          this._texture = mB.texture;
          const iB = [];
          iB.push(1, 1), iB.push(-1, 1), iB.push(-1, -1), iB.push(1, -1), this._vertexBuffers[aB.m.PositionKind] = new aB.m(this._fullEngine, iB, aB.m.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(BB, TB, dB, VB) {
          return BB ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(TB, {
            generateMipMaps: dB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: VB,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(TB, {
            generateMipMaps: dB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: VB,
            ...this._options
          }), this._rtWrapper.is3D && (this.setFloat("layer", 0), this.setInt("layerNum", 0))), this._rtWrapper
        }
        getEffect() {
          return this._drawWrapper.effect
        }
        _setEffect(BB) {
          this._drawWrapper.effect = BB
        }
        getContent() {
          return this._contentData && this._frameId === this._contentUpdateId || (this._contentData ? this._contentData.then((BB => {
            this._contentData = this.readPixels(0, 0, BB), this._contentUpdateId = this._frameId
          })) : (this._contentData = this.readPixels(0, 0), this._contentUpdateId = this._frameId)), this._contentData
        }
        _createIndexBuffer() {
          const BB = this._fullEngine,
            TB = [];
          TB.push(0), TB.push(1), TB.push(2), TB.push(0), TB.push(2), TB.push(3), this._indexBuffer = BB.createIndexBuffer(TB)
        }
        _rebuild() {
          const BB = this._vertexBuffers[aB.m.PositionKind];
          BB && BB._rebuild(), this._createIndexBuffer(), this.refreshRate === MT.b.REFRESHRATE_RENDER_ONCE && (this.refreshRate = MT.b.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(BB) {
          if (this.isReady()) return void BB(this);
          const TB = this.getEffect();
          TB && TB.executeWhenCompiled((() => {
            BB(this)
          }))
        }
        isReady() {
          const BB = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const TB = this._getDefines();
          if (this._drawWrapper.effect && TB === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const VB = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== TB && (this._cachedDefines = TB, this._drawWrapper.effect = BB.createEffect(VB, [aB.m.PositionKind], this._uniforms, this._samplers, TB, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([dB.e(371).then((() => dB(60403))), this._options.extraInitializationsAsync()]) : await Promise.all([dB.e(372).then((() => dB(60409))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await dB.e(371).then((() => dB(60403))) : await dB.e(372).then((() => dB(60409)))
          }))), this._drawWrapper.effect.isReady()
        }
        resetRefreshCounter() {
          this._currentRefreshId = -1
        }
        setFragment(BB) {
          this._fragment = BB
        }
        get refreshRate() {
          return this._refreshRate
        }
        set refreshRate(BB) {
          this._refreshRate = BB, this.resetRefreshCounter()
        }
        _shouldRender() {
          return this.isEnabled && this.isReady() && this._texture ? !this._fallbackTextureUsed && (-1 === this._currentRefreshId || this.refreshRate === this._currentRefreshId ? (this._currentRefreshId = 1, this._frameId++, !0) : (this._currentRefreshId++, !1)) : (this._texture && (this._texture.isReady = !1), !1)
        }
        getRenderSize() {
          return this._size
        }
        resize(BB, TB) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const dB = this._texture.isCube;
          this._rtWrapper.dispose();
          const VB = this._createRtWrapper(dB, BB, TB, this._textureType);
          this._texture = VB.texture, this._size = BB, this._generateMipMaps = TB
        }
        _checkUniform(BB) {
          -1 === this._uniforms.indexOf(BB) && this._uniforms.push(BB)
        }
        setTexture(BB, TB) {
          return -1 === this._samplers.indexOf(BB) && this._samplers.push(BB), this._textures[BB] = TB, this
        }
        setFloat(BB, TB) {
          return this._checkUniform(BB), this._floats[BB] = TB, this
        }
        setInt(BB, TB) {
          return this._checkUniform(BB), this._ints[BB] = TB, this
        }
        setFloats(BB, TB) {
          return this._checkUniform(BB), this._floatsArrays[BB] = TB, this
        }
        setColor3(BB, TB) {
          return this._checkUniform(BB), this._colors3[BB] = TB, this
        }
        setColor4(BB, TB) {
          return this._checkUniform(BB), this._colors4[BB] = TB, this
        }
        setVector2(BB, TB) {
          return this._checkUniform(BB), this._vectors2[BB] = TB, this
        }
        setVector3(BB, TB) {
          return this._checkUniform(BB), this._vectors3[BB] = TB, this
        }
        setVector4(BB, TB) {
          return this._checkUniform(BB), this._vectors4[BB] = TB, this
        }
        setMatrix(BB, TB) {
          return this._checkUniform(BB), this._matrices[BB] = TB, this
        }
        render(BB) {
          const TB = this.jU();
          if (!TB) return;
          const dB = this._fullEngine;
          if (dB.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), dB.setState(!1), !this.nodeMaterialSource) {
            for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB]);
            for (const BB in this._ints) this._drawWrapper.effect.setInt(BB, this._ints[BB]);
            for (const BB in this._floats) this._drawWrapper.effect.setFloat(BB, this._floats[BB]);
            for (const BB in this._floatsArrays) this._drawWrapper.effect.setArray(BB, this._floatsArrays[BB]);
            for (const BB in this._colors3) this._drawWrapper.effect.setColor3(BB, this._colors3[BB]);
            for (const BB in this._colors4) {
              const TB = this._colors4[BB];
              this._drawWrapper.effect.setFloat4(BB, TB.r, TB.g, TB.b, TB.a)
            }
            for (const BB in this._vectors2) this._drawWrapper.effect.setVector2(BB, this._vectors2[BB]);
            for (const BB in this._vectors3) this._drawWrapper.effect.setVector3(BB, this._vectors3[BB]);
            for (const BB in this._vectors4) this._drawWrapper.effect.setVector4(BB, this._vectors4[BB]);
            for (const BB in this._matrices) this._drawWrapper.effect.setMatrix(BB, this._matrices[BB])
          }
          if (!this._texture || !this._rtWrapper) return;
          dB._enableGPUDebugMarkers && dB._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const VB = dB.currentViewport;
          if (this.isCube)
            for (let yB = 0; yB < 6; yB++) dB.bindFramebuffer(this._rtWrapper, yB, void 0, void 0, !0), dB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", yB), this.autoClear && dB.clear(TB.clearColor, !0, !1, !1), dB.drawElementsType(pB.b.TriangleFillMode, 0, 6), dB.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let BB = 1;
            this._rtWrapper.is3D ? BB = this._rtWrapper.depth : this._rtWrapper.is2DArray && (BB = this._rtWrapper.layers);
            for (let VB = 0; VB < BB; VB++) {
              if (dB.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, VB), dB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== BB ? VB / (BB - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", VB);
                for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB])
              }
              this.autoClear && dB.clear(TB.clearColor, !0, !1, !1), dB.drawElementsType(pB.b.TriangleFillMode, 0, 6), dB.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          VB && dB.setViewport(VB), this.isCube && dB.generateMipMapsForCubemap(this._texture, !0), dB._enableGPUDebugMarkers && dB._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const TB = this.getSize(),
            dB = new BB(this.name, TB.width, this._fragment, this.jU(), this._fallbackTexture, this._generateMipMaps);
          return dB.hasAlpha = this.hasAlpha, dB.level = this.level, dB.coordinatesMode = this.coordinatesMode, dB
        }
        dispose() {
          const BB = this.jU();
          if (!BB) return;
          const TB = BB.proceduralTextures.indexOf(this);
          TB >= 0 && BB.proceduralTextures.splice(TB, 1);
          const dB = this._vertexBuffers[aB.m.PositionKind];
          dB && (dB.dispose(), this._vertexBuffers[aB.m.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(YB[Symbol.metadata] ?? null) : void 0;
        TB = [(0, zB.W)()], VB = [(0, zB.W)()], yB = [(0, zB.W)()], lB = [(0, zB.W)()], JB = [(0, zB.W)()], (0, MB.g)(BB, null, JB, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: BB => "refreshRate" in BB,
            get: BB => BB.refreshRate
          },
          metadata: dB
        }, null, gB), (0, MB.g)(null, null, TB, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, TB) => {
              BB.isEnabled = TB
            }
          },
          metadata: dB
        }, oB, kB), (0, MB.g)(null, null, VB, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: BB => "autoClear" in BB,
            get: BB => BB.autoClear,
            set: (BB, TB) => {
              BB.autoClear = TB
            }
          },
          metadata: dB
        }, LB, OB), (0, MB.g)(null, null, yB, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: BB => "_generateMipMaps" in BB,
            get: BB => BB._generateMipMaps,
            set: (BB, TB) => {
              BB._generateMipMaps = TB
            }
          },
          metadata: dB
        }, DB, HB), (0, MB.g)(null, null, lB, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: BB => "_size" in BB,
            get: BB => BB._size,
            set: (BB, TB) => {
              BB._size = TB
            }
          },
          metadata: dB
        }, EB, vB), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB
    })();

    function yd(BB) {
      return "texture" in BB
    }

    function pd(BB) {
      return "value" in BB
    }
    async function ld(BB, TB, VB) {
      const yB = [TB.red, TB.green, TB.blue, TB.alpha],
        pB = [],
        lB = [];
      for (let dB = 0; dB < 4; dB++) {
        const BB = yB[dB];
        if (BB)
          if (yd(BB)) {
            if (BB.sourceChannel < 0 || BB.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let TB = pB.indexOf(BB.texture); - 1 === TB && (TB = pB.length, pB.push(BB.texture)), lB[dB] = TB
          } else {
            if (!pd(BB)) throw new Error("Invalid channel input configuration");
            if (BB.value < 0 || BB.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            lB[dB] = -1
          }
        else lB[dB] = -1
      }
      let JB = TB.outputSize;
      if (!JB && pB.length > 0) {
        let BB = 0;
        for (const TB of pB) {
          const dB = TB.getSize(),
            VB = Math.max(dB.width, dB.height);
          VB > BB && (BB = VB, JB = dB.width === dB.height ? BB : dB)
        }
      }
      JB = JB || 512;
      const YB = [],
        gB = new Set;
      for (let dB = 0; dB < 4; dB++) {
        const BB = yB[dB],
          TB = ["RED", "GREEN", "BLUE", "ALPHA"][dB];
        if (BB && yd(BB)) {
          YB.push(`${TB}_FROM_TEXTURE`);
          const BB = lB[dB];
          gB.add(BB)
        }
      }
      gB.forEach((BB => {
        YB.push(`USE_TEXTURE${BB}`)
      }));
      const oB = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: VB.PD().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            VB.PD().isWebGPU ? await Promise.all([dB.e(369).then((() => dB(60395)))]) : await Promise.all([dB.e(370).then((() => dB(60397)))])
          },
          skipSceneRegistration: !0
        },
        kB = new Vd(BB, JB, "textureMerger", VB, oB);
      kB.refreshRate = -1, kB.defines = YB.length > 0 ? "#define " + YB.join("\n#define ") + "\n" : "";
      for (let dB = 0; dB < pB.length; dB++) LB = pB[dB], (OB = kB).uOffset = LB.uOffset, OB.vOffset = LB.vOffset, OB.uScale = LB.uScale, OB.vScale = LB.vScale, OB.uAng = LB.uAng, OB.vAng = LB.vAng, OB.wAng = LB.wAng, OB.uRotationCenter = LB.uRotationCenter, OB.vRotationCenter = LB.vRotationCenter, kB.setTexture(`inputTexture${dB}`, pB[dB]);
      var LB, OB;
      for (let dB = 0; dB < 4; dB++) {
        const BB = yB[dB],
          TB = ["red", "green", "blue", "alpha"][dB];
        if (BB && yd(BB)) {
          const VB = lB[dB];
          kB.setInt(`${TB}TextureIndex`, VB), kB.setInt(`${TB}SourceChannel`, BB.sourceChannel)
        } else {
          let VB;
          VB = BB && pd(BB) ? BB.value : 3 === dB ? 1 : 0, kB.setFloat(`${TB}ConstantValue`, VB)
        }
      }
      return await new Promise(((BB, TB) => {
        kB.executeWhenReady((() => {
          try {
            kB.render(), BB(kB)
          } catch (dB) {
            TB(dB instanceof Error ? dB : new Error(String(dB)))
          }
        }))
      }))
    }

    function Jd(BB, TB) {
      return {
        texture: BB,
        sourceChannel: TB
      }
    }

    function Yd(BB) {
      return {
        value: BB
      }
    }

    function gd(BB, TB, dB, VB) {
      return {
        red: BB,
        green: TB,
        blue: dB,
        alpha: VB
      }
    }
    var od = dB(38565),
      kd = dB(38684),
      Ld = dB(36140),
      Od = dB(38730),
      Dd = dB(38671);
    class ud {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class Hd extends od.d {
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
        return !!this._options?.enableMultiview || this.Lu > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new ud;
        super(null), void 0 === BB.deterministicLockstep && (BB.deterministicLockstep = !1), void 0 !== BB.timeStep && (this._timeStep = BB.timeStep), void 0 === BB.lockstepMaxSteps && (BB.lockstepMaxSteps = 4), this._options = BB, Ld.c.SetMatrixPrecision(!!BB.useHighPrecisionMatrix), this._caps = {
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
        }, BB.enableMultiview && (this._caps.multiview = {
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
        }, BB.renderingCanvas && (this._renderingCanvas = BB.renderingCanvas), wB.b.Log(`Babylon.js v${od.d.Version} - Null engine`);
        const TB = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (TB.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (TB.Blob = function() {})
      }
      createVertexBuffer(BB) {
        const TB = new kd.b;
        return TB.references = 1, TB
      }
      createIndexBuffer(BB) {
        const TB = new kd.b;
        return TB.references = 1, TB
      }
      clear(BB, TB, dB) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(BB, TB, dB) {
        this._cachedViewport = BB
      }
      createUniformBuffer(BB) {
        const TB = new kd.b;
        return TB.references = 1, TB.Kk = BB instanceof Array ? BB.length * Float32Array.BYTES_PER_ELEMENT : BB.byteLength, TB
      }
      createDynamicUniformBuffer(BB) {
        return this.createUniformBuffer(BB)
      }
      updateUniformBuffer(BB, TB, dB, VB) {}
      bindUniformBufferBase(BB, TB, dB) {}
      bindUniformBlock(BB, TB, dB) {}
      createShaderProgram(BB, TB, dB, VB, yB) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(BB, TB) {
        return []
      }
      getAttributes(BB, TB) {
        return []
      }
      bindSamplers(BB) {
        this._currentEffect = null
      }
      enableEffect(BB) {
        BB = null !== BB && (0, Dd.d)(BB) ? BB.effect : BB, this._currentEffect = BB, BB && (BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setStateCullFaceType(BB, TB) {}
      setState(BB) {}
      setIntArray(BB, TB) {
        return !0
      }
      setIntArray2(BB, TB) {
        return !0
      }
      setIntArray3(BB, TB) {
        return !0
      }
      setIntArray4(BB, TB) {
        return !0
      }
      setFloatArray(BB, TB) {
        return !0
      }
      setFloatArray2(BB, TB) {
        return !0
      }
      setFloatArray3(BB, TB) {
        return !0
      }
      setFloatArray4(BB, TB) {
        return !0
      }
      setArray(BB, TB) {
        return !0
      }
      setArray2(BB, TB) {
        return !0
      }
      setArray3(BB, TB) {
        return !0
      }
      setArray4(BB, TB) {
        return !0
      }
      setMatrices(BB, TB) {
        return !0
      }
      setMatrix3x3(BB, TB) {
        return !0
      }
      setMatrix2x2(BB, TB) {
        return !0
      }
      setFloat(BB, TB) {
        return !0
      }
      setFloat2(BB, TB, dB) {
        return !0
      }
      setFloat3(BB, TB, dB, VB) {
        return !0
      }
      setBool(BB, TB) {
        return !0
      }
      setFloat4(BB, TB, dB, VB, yB) {
        return !0
      }
      setAlphaMode(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[dB] !== BB && (this.alphaState.setAlphaBlend(0 !== BB, 0), TB || this.setDepthWrite(0 === BB), this._alphaMode[dB] = BB)
      }
      bindBuffers(BB, TB, dB) {}
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, BB && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(BB, TB, dB, VB) {}
      drawElementsType(BB, TB, dB, VB) {}
      drawArraysType(BB, TB, dB, VB) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(BB) {}
      createTexture(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          lB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          JB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const YB = new zT.e(this, 1),
          gB = String(BB);
        return YB.url = gB, YB.generateMipMaps = !TB, YB.samplingMode = yB, YB.invertY = dB, YB.baseWidth = this._options.textureSize, YB.baseHeight = this._options.textureSize, YB.width = this._options.textureSize, YB.height = this._options.textureSize, JB && (YB.format = JB), lB && (YB._buffer = lB), YB.isReady = !0, pB && setTimeout((() => {
          pB(YB)
        })), this._internalTexturesCache.push(YB), YB
      }
      _createHardwareRenderTargetWrapper(BB, TB, dB) {
        const VB = new Od.e(BB, TB, dB, this);
        return this._renderTargetWrapperCache.push(VB), VB
      }
      createRenderTargetTexture(BB, TB) {
        const dB = this._createHardwareRenderTargetWrapper(!1, !1, BB),
          VB = {};
        void 0 !== TB && "object" === typeof TB ? (VB.generateMipMaps = TB.generateMipMaps, VB.generateDepthBuffer = void 0 === TB.generateDepthBuffer || TB.generateDepthBuffer, VB.generateStencilBuffer = VB.generateDepthBuffer && TB.generateStencilBuffer, VB.type = void 0 === TB.type ? 0 : TB.type, VB.samplingMode = void 0 === TB.samplingMode ? 3 : TB.samplingMode) : (VB.generateMipMaps = TB, VB.generateDepthBuffer = !0, VB.generateStencilBuffer = !1, VB.type = 0, VB.samplingMode = 3);
        const yB = new zT.e(this, 5);
        dB.setTexture(yB);
        const pB = BB.width || BB,
          lB = BB.height || BB;
        return dB._generateDepthBuffer = VB.generateDepthBuffer, dB._generateStencilBuffer = !!VB.generateStencilBuffer, yB.baseWidth = pB, yB.baseHeight = lB, yB.width = pB, yB.height = lB, yB.isReady = !0, yB.samples = 1, yB.generateMipMaps = !!VB.generateMipMaps, yB.samplingMode = VB.samplingMode, yB.type = VB.type, this._internalTexturesCache.push(yB), dB
      }
      createMultiviewRenderTargetTexture(BB, TB) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const dB = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: BB,
            height: TB
          }),
          VB = new zT.e(this, 5, !0);
        return VB.baseWidth = BB, VB.baseHeight = TB, VB.width = BB, VB.height = TB, VB.isMultiview = !0, VB.isReady = !0, VB.format = 5, VB.samples = 1, dB.setTextures(VB), dB
      }
      bindMultiviewFramebuffer(BB) {
        this.bindFramebuffer(BB, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(BB, TB) {
        const dB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
          VB = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...TB
          };
        VB.generateStencilBuffer = VB.generateDepthBuffer && VB.generateStencilBuffer, (1 !== VB.type || this._caps.textureFloatLinearFiltering) && (2 !== VB.type || this._caps.textureHalfFloatLinearFiltering) || (VB.samplingMode = 1), dB._generateDepthBuffer = VB.generateDepthBuffer, dB._generateStencilBuffer = !!VB.generateStencilBuffer;
        const yB = new zT.e(this, 5);
        return yB.baseWidth = BB, yB.baseHeight = BB, yB.width = BB, yB.height = BB, yB.isReady = !0, yB.isCube = !0, yB.samples = 1, yB.generateMipMaps = !!VB.generateMipMaps, yB.samplingMode = VB.samplingMode, yB.type = VB.type, this._internalTexturesCache.push(yB), dB
      }
      updateTextureSamplingMode(BB, TB) {
        TB.samplingMode = BB
      }
      createRawTexture(BB, TB, dB, VB, yB, pB, lB) {
        let JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          YB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          gB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const oB = new zT.e(this, 3);
        return oB.baseWidth = TB, oB.baseHeight = dB, oB.width = TB, oB.height = dB, oB.format = VB, oB.generateMipMaps = yB, oB.samplingMode = lB, oB.invertY = pB, oB._compression = JB, oB.type = YB, oB._useSRGBBuffer = gB, this._doNotHandleContextLost || (oB._bufferView = BB), oB
      }
      updateRawTexture(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        BB && (BB._bufferView = TB, BB.format = dB, BB.invertY = VB, BB._compression = yB, BB.type = pB, BB._useSRGBBuffer = lB)
      }
      bindFramebuffer(BB, TB, dB, VB, yB) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._currentFramebuffer = null, this._cachedViewport && !yB && this.setViewport(this._cachedViewport, dB, VB)
      }
      unBindFramebuffer(BB) {
        let TB = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, TB && TB(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(BB) {
        const TB = new kd.b;
        return TB.references = 1, TB.Kk = 1, TB
      }
      updateDynamicTexture(BB, TB, dB) {}
      areAllEffectsReady() {
        return !0
      }
      getError() {
        return 0
      }
      _getUnpackAlignement() {
        return 1
      }
      _unpackFlipY(BB) {}
      updateDynamicIndexBuffer(BB, TB) {}
      updateDynamicVertexBuffer(BB, TB, dB, VB) {}
      _bindTextureDirectly(BB, TB) {
        return this._boundTexturesCache[this._activeChannel] !== TB && (this._boundTexturesCache[this._activeChannel] = TB, !0)
      }
      _bindTexture(BB, TB) {
        BB < 0 || this._bindTextureDirectly(0, TB)
      }
      _deleteBuffer(BB) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(BB) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(BB, TB, dB, VB, yB) {}
      _uploadDataToTextureDirectly(BB, TB) {}
      _uploadArrayBufferViewToTexture(BB, TB) {}
      _uploadImageToTexture(BB, TB) {}
    }
    dB(38788), dB(38830), dB(38780);
    async function Ed(BB) {
      const TB = BB.getInternalTexture();
      if (!TB || 1 !== TB.source) return null;
      if (TB.invertY) {
        const TB = BB.jU()?.PD();
        if (!(TB instanceof Hd)) return null
      }
      const dB = TB._buffer;
      let VB, pB = BB.mimeType;
      try {
        dB ? ArrayBuffer.isView(dB) ? VB = dB.buffer.slice(dB.byteOffset, dB.byteOffset + dB.byteLength) : dB instanceof ArrayBuffer ? VB = dB : dB instanceof Blob ? (VB = await dB.arrayBuffer(), pB = dB.type || pB) : "string" === typeof dB ? (VB = await yB.Tools.LoadFileAsync(dB), pB = (0, YB.c)(dB) || pB) : "undefined" !== typeof HTMLImageElement && dB instanceof HTMLImageElement && (VB = await yB.Tools.LoadFileAsync(dB.src), pB = (0, YB.c)(dB.src) || pB) : (VB = await yB.Tools.LoadFileAsync(TB.url), pB = (0, YB.c)(TB.url) || pB)
      } catch {
        return null
      }
      if (VB && !pB && TB.url) {
        const BB = TB.url.match(/^data:([^;,]+)/);
        pB = BB ? BB[1] : (0, YB.c)(TB.url)
      }
      return VB && pB ? {
        data: VB,
        mimeType: pB
      } : null
    }
    const vd = 1e-6,
      md = new HB.Color3(.04, .04, .04),
      Nd = 1024,
      td = HB.Color3.White(),
      fd = HB.Color3.BlackReadOnly;

    function sd(BB) {
      switch (BB) {
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

    function Md(BB, TB, dB) {
      if (TB < md.r) return 0;
      const VB = md.r,
        yB = BB * dB / (1 - md.r) + TB - 2 * md.r,
        pB = yB * yB - 4 * VB * (md.r - TB);
      return mB.Clamp((-yB + Math.sqrt(pB)) / (2 * VB), 0, 1)
    }

    function zd(BB) {
      const TB = BB.diffuseColor.toLinearSpace(BB.jU().PD().useExactSrgbConversions).scale(.5),
        dB = BB.alpha,
        VB = function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new RB.l(0, 1),
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new RB.l(0, .1),
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new RB.l(0, .1),
            yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new RB.l(1300, .1);
          return function(BB, TB, dB, VB, yB) {
            return (1 - BB) * (1 - BB) * (1 - BB) * TB + 3 * (1 - BB) * (1 - BB) * BB * dB + 3 * (1 - BB) * BB * BB * VB + BB * BB * BB * yB
          }(Math.pow(BB / yB.x, .333333), TB.y, dB.y, VB.y, yB.y)
        }(mB.Clamp(BB.specularPower, 0, Nd));
      return {
        baseColorFactor: [TB.r, TB.g, TB.b, dB],
        metallicFactor: 0,
        roughnessFactor: VB
      }
    }

    function wd(BB, TB) {
      TB.needAlphaBlending() ? BB.alphaMode = "BLEND" : TB.needAlphaTesting() && (BB.alphaMode = "MASK", BB.alphaCutoff = TB.alphaCutOff)
    }

    function Ud(BB, TB, dB) {
      const VB = new Uint8Array(BB * TB * 4);
      for (let yB = 0; yB < VB.length; yB += 4) VB[yB] = VB[yB + 1] = VB[yB + 2] = VB[yB + 3] = 255;
      return tB.d.CreateRGBATexture(VB, BB, TB, dB)
    }

    function Fd(BB) {
      if (BB instanceof Uint8Array) {
        const TB = BB.length,
          dB = new Float32Array(BB.length);
        for (let VB = 0; VB < TB; ++VB) dB[VB] = BB[VB] / 255;
        return dB
      }
      if (BB instanceof Float32Array) return BB;
      throw new Error("Unsupported pixel format!")
    }
    class Kd {
      constructor(BB) {
        this._exporter = BB, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(BB) {
        return BB ? this._textureMap.get(BB.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(BB, TB) {
        const dB = zd(BB),
          VB = {
            name: BB.name
          };
        if (null == BB.backFaceCulling || BB.backFaceCulling || (BB.twoSidedLighting || yB.Tools.Warn(BB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), VB.doubleSided = !0), TB) {
          const TB = [],
            yB = BB.diffuseTexture;
          yB && TB.push(this.exportTextureAsync(yB).then((BB => {
            BB && (dB.baseColorTexture = BB)
          })));
          const pB = BB.bumpTexture;
          pB && TB.push(this.exportTextureAsync(pB).then((BB => {
            BB && (VB.normalTexture = BB, 1 !== pB.level && (VB.normalTexture.scale = pB.level))
          })));
          const lB = BB.emissiveTexture;
          lB && (VB.emissiveFactor = [1, 1, 1], TB.push(this.exportTextureAsync(lB).then((BB => {
            BB && (VB.emissiveTexture = BB)
          }))));
          const JB = BB.ambientTexture;
          JB && TB.push(this.exportTextureAsync(JB).then((BB => {
            if (BB) {
              const TB = {
                index: BB.index
              };
              VB.occlusionTexture = TB
            }
          }))), TB.length > 0 && (this._exporter._materialNeedsUVsSet.add(BB), await Promise.all(TB))
        }(BB.alpha < 1 || BB.opacityTexture) && (BB.alphaMode === fB.c.ALPHA_COMBINE ? VB.alphaMode = "BLEND" : yB.Tools.Warn(BB.name + ": glTF 2.0 does not support alpha mode: " + BB.alphaMode.toString())), BB.emissiveColor && !BB.emissiveColor.equalsWithEpsilon(fd, vd) && (VB.emissiveFactor = BB.emissiveColor.FVB()), VB.pbrMetallicRoughness = dB, wd(VB, BB), await this._finishMaterialAsync(VB, BB);
        const pB = this._exporter._materials;
        return pB.push(VB), pB.length - 1
      }
      async _finishMaterialAsync(BB, TB) {
        const dB = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", BB, TB),
          VB = [];
        for (const yB of dB) VB.push(this.exportTextureAsync(yB));
        await Promise.all(VB), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", BB, TB)
      }
      _resizeTexturesToSameDimensions(BB, TB, dB) {
        const VB = BB ? BB.getSize() : {
            width: 0,
            height: 0
          },
          yB = TB ? TB.getSize() : {
            width: 0,
            height: 0
          };
        let pB, lB;
        return VB.width < yB.width ? (pB = BB && BB instanceof NB.b ? iB.j.CreateResizedCopy(BB, yB.width, yB.height, !0) : Ud(yB.width, yB.height, dB), lB = TB) : VB.width > yB.width ? (lB = TB && TB instanceof NB.b ? iB.j.CreateResizedCopy(TB, VB.width, VB.height, !0) : Ud(VB.width, VB.height, dB), pB = BB) : (pB = BB, lB = TB), {
          texture1: pB,
          texture2: lB
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(BB, TB, dB) {
        const VB = new Array;
        if (!BB && !TB) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const yB = BB ? BB.jU() : TB ? TB.jU() : null;
        if (yB) {
          const pB = this._resizeTexturesToSameDimensions(BB, TB, yB),
            lB = pB.texture1?.getSize();
          let JB, YB;
          const gB = lB.width,
            oB = lB.height,
            kB = await pB.texture1.readPixels(),
            LB = await pB.texture2.readPixels();
          if (!kB) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (JB = Fd(kB), !LB) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          YB = Fd(LB);
          const OB = YB.byteLength,
            DB = new Uint8Array(OB),
            uB = new Uint8Array(OB),
            EB = 4,
            vB = new HB.Color3(0, 0, 0);
          let mB = 0,
            iB = 0;
          for (let BB = 0; BB < oB; ++BB)
            for (let TB = 0; TB < gB; ++TB) {
              const VB = (gB * BB + TB) * EB,
                lB = {
                  diffuseColor: new HB.Color3(JB[VB], JB[VB + 1], JB[VB + 2]).toLinearSpace(yB.PD().useExactSrgbConversions).multiply(dB.diffuseColor),
                  specularColor: new HB.Color3(YB[VB], YB[VB + 1], YB[VB + 2]).toLinearSpace(yB.PD().useExactSrgbConversions).multiply(dB.specularColor),
                  glossiness: YB[VB + 3] * dB.glossiness
                },
                oB = this._convertSpecularGlossinessToMetallicRoughness(lB);
              vB.r = Math.max(vB.r, oB.baseColor.r), vB.g = Math.max(vB.g, oB.baseColor.g), vB.b = Math.max(vB.b, oB.baseColor.b), mB = Math.max(mB, oB.metallic), iB = Math.max(iB, oB.roughness), uB[VB] = 255 * oB.baseColor.r, uB[VB + 1] = 255 * oB.baseColor.g, uB[VB + 2] = 255 * oB.baseColor.b, uB[VB + 3] = pB.texture1.hasAlpha ? 255 * JB[VB + 3] : 255, DB[VB] = 0, DB[VB + 1] = 255 * oB.roughness, DB[VB + 2] = 255 * oB.metallic, DB[VB + 3] = 255
            }
          const NB = {
            baseColor: vB,
            metallic: mB,
            roughness: iB
          };
          let tB = !1,
            fB = !1;
          for (let BB = 0; BB < oB; ++BB)
            for (let TB = 0; TB < gB; ++TB) {
              const dB = (gB * BB + TB) * EB;
              uB[dB] /= NB.baseColor.r > vd ? NB.baseColor.r : 1, uB[dB + 1] /= NB.baseColor.g > vd ? NB.baseColor.g : 1, uB[dB + 2] /= NB.baseColor.b > vd ? NB.baseColor.b : 1;
              const VB = HB.Color3.FromInts(uB[dB], uB[dB + 1], uB[dB + 2]).toGammaSpace(yB.PD().useExactSrgbConversions);
              uB[dB] = 255 * VB.r, uB[dB + 1] = 255 * VB.g, uB[dB + 2] = 255 * VB.b, VB.equalsWithEpsilon(td, vd) || (fB = !0), DB[dB + 1] /= NB.roughness > vd ? NB.roughness : 1, DB[dB + 2] /= NB.metallic > vd ? NB.metallic : 1;
              HB.Color3.FromInts(255, DB[dB + 1], DB[dB + 2]).equalsWithEpsilon(td, vd) || (tB = !0)
            }
          return tB && VB.push((0, sB.EncodeImageAsync)(DB, gB, oB).then((BB => {
            NB.metallicRoughnessTextureData = BB
          }))), fB && VB.push((0, sB.EncodeImageAsync)(uB, gB, oB).then((BB => {
            NB.baseColorTextureData = BB
          }))), await Promise.all(VB).then((() => NB))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(BB) {
        const TB = this._getPerceivedBrightness(BB.diffuseColor),
          dB = this._getPerceivedBrightness(BB.specularColor),
          VB = 1 - this._getMaxComponent(BB.specularColor),
          yB = Md(TB, dB, VB),
          pB = BB.diffuseColor.scale(VB / (1 - md.r) / Math.max(1 - yB, vd)),
          lB = BB.specularColor.subtract(md.scale(1 - yB)).scale(1 / Math.max(yB, vd));
        let JB = HB.Color3.Lerp(pB, lB, yB * yB);
        JB = JB.clampToRef(0, 1, JB);
        return {
          baseColor: JB,
          metallic: yB,
          roughness: 1 - BB.glossiness
        }
      }
      _getPerceivedBrightness(BB) {
        return Math.sqrt(.299 * BB.r * BB.r + .587 * BB.g * BB.g + .114 * BB.b * BB.b)
      }
      _getMaxComponent(BB) {
        return Math.max(BB.r, Math.max(BB.g, BB.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(BB, TB, dB, VB, yB, pB, lB, JB, YB) {
        const gB = [],
          oB = {
            baseColor: BB,
            metallic: TB,
            roughness: dB
          };
        if (YB)
          if (lB instanceof nT) {
            if (lB.geometryOpacityTexture) {
              const BB = VB && VB.getInternalTexture() ? VB.getInternalTexture().uniqueId : 0,
                TB = lB.geometryOpacityTexture && lB.geometryOpacityTexture.getInternalTexture() ? lB.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                dB = Number(`${BB}${TB}`),
                yB = this._textureMap.get(dB);
              yB ? JB.baseColorTexture = yB : gB.push(ld("baseColorOpacityTexture", gd(VB ? Jd(VB, 0) : Yd(1), VB ? Jd(VB, 1) : Yd(1), VB ? Jd(VB, 2) : Yd(1), Jd(lB.geometryOpacityTexture, 0)), lB.jU()).then((async BB => {
                const TB = await this.exportTextureAsync(BB, dB);
                TB && (JB.baseColorTexture = TB)
              })))
            } else VB && gB.push(this.exportTextureAsync(VB).then((BB => {
              BB && (JB.baseColorTexture = BB)
            })));
            if (lB._useMetallicFromMetallicTextureBlue && yB) gB.push(this.exportTextureAsync(yB).then((BB => {
              BB && (JB.metallicRoughnessTexture = BB)
            })));
            else if (pB || yB) {
              const BB = yB && yB.getInternalTexture() ? yB.getInternalTexture().uniqueId : 0,
                TB = pB && pB.getInternalTexture() ? pB.getInternalTexture().uniqueId : 0,
                dB = Number(`${BB}${TB}`),
                VB = this._textureMap.get(dB);
              VB ? JB.metallicRoughnessTexture = VB : gB.push(ld("MetalRoughTexture", gd(lB.ambientOcclusionTexture ? Jd(lB.ambientOcclusionTexture, 0) : Yd(1), pB ? Jd(pB, 0) : Yd(1), yB ? Jd(yB, 0) : Yd(1)), lB.jU()).then((async BB => {
                const TB = await this.exportTextureAsync(BB, dB);
                TB && (JB.metallicRoughnessTexture = TB)
              })))
            }
          } else VB && gB.push(this.exportTextureAsync(VB).then((BB => {
            BB && (JB.baseColorTexture = BB)
          }))), yB && gB.push(this.exportTextureAsync(yB).then((BB => {
            BB && (JB.metallicRoughnessTexture = BB)
          })));
        return gB.length > 0 && (this._exporter._materialNeedsUVsSet.add(lB), await Promise.all(gB)), oB
      }
      _getTextureSampler(BB) {
        const TB = {};
        if (!BB || !(BB instanceof NB.b)) return TB;
        const dB = this._getGLTFTextureWrapMode(BB.wrapU);
        10497 !== dB && (TB.wrapS = dB);
        const VB = this._getGLTFTextureWrapMode(BB.wrapV);
        switch (10497 !== VB && (TB.wrapT = VB), BB.samplingMode) {
          case NB.b.LINEAR_LINEAR:
            TB.magFilter = 9729, TB.minFilter = 9729;
            break;
          case NB.b.LINEAR_NEAREST:
            TB.magFilter = 9729, TB.minFilter = 9728;
            break;
          case NB.b.NEAREST_LINEAR:
            TB.magFilter = 9728, TB.minFilter = 9729;
            break;
          case NB.b.NEAREST_LINEAR_MIPLINEAR:
            TB.magFilter = 9728, TB.minFilter = 9987;
            break;
          case NB.b.NEAREST_NEAREST:
            TB.magFilter = 9728, TB.minFilter = 9728;
            break;
          case NB.b.NEAREST_LINEAR_MIPNEAREST:
            TB.magFilter = 9728, TB.minFilter = 9985;
            break;
          case NB.b.LINEAR_NEAREST_MIPNEAREST:
            TB.magFilter = 9729, TB.minFilter = 9984;
            break;
          case NB.b.LINEAR_NEAREST_MIPLINEAR:
            TB.magFilter = 9729, TB.minFilter = 9986;
            break;
          case NB.b.NEAREST_NEAREST_MIPLINEAR:
            TB.magFilter = 9728, TB.minFilter = 9986;
            break;
          case NB.b.LINEAR_LINEAR_MIPLINEAR:
            TB.magFilter = 9729, TB.minFilter = 9987;
            break;
          case NB.b.LINEAR_LINEAR_MIPNEAREST:
            TB.magFilter = 9729, TB.minFilter = 9985;
            break;
          case NB.b.NEAREST_NEAREST_MIPNEAREST:
            TB.magFilter = 9728, TB.minFilter = 9984
        }
        return TB
      }
      _getGLTFTextureWrapMode(BB) {
        switch (BB) {
          case NB.b.WRAP_ADDRESSMODE:
            return 10497;
          case NB.b.CLAMP_ADDRESSMODE:
            return 33071;
          case NB.b.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return yB.Tools.Error(`Unsupported Texture Wrap Mode ${BB}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(BB, TB, dB) {
        const VB = {
            diffuseColor: BB._albedoColor,
            specularColor: BB._reflectivityColor,
            glossiness: BB._microSurface
          },
          yB = BB._albedoTexture,
          pB = BB._reflectivityTexture,
          lB = BB._useMicroSurfaceFromReflectivityMapAlpha;
        if (pB && !lB) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((yB || pB) && dB) {
          this._exporter._materialNeedsUVsSet.add(BB);
          const dB = this._exportTextureSampler(yB || pB),
            lB = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(yB, pB, VB),
            JB = this._exporter._textures;
          if (lB.baseColorTextureData) {
            const BB = await this._exportImageAsync(`baseColor${JB.length}`, lB.baseColorTextureData);
            TB.baseColorTexture = this._exportTextureInfo(BB, dB, yB?.coordinatesIndex)
          }
          if (lB.metallicRoughnessTextureData) {
            const BB = await this._exportImageAsync(`metallicRoughness${JB.length}`, lB.metallicRoughnessTextureData);
            TB.metallicRoughnessTexture = this._exportTextureInfo(BB, dB, pB?.coordinatesIndex)
          }
          return lB
        }
        return this._convertSpecularGlossinessToMetallicRoughness(VB)
      }
      async exportPBRMaterialAsync(BB, TB) {
        const dB = {},
          VB = {
            name: BB.name
          },
          yB = BB.isMetallicWorkflow();
        if (yB) {
          const TB = BB._albedoColor,
            VB = BB.alpha;
          TB && (dB.baseColorFactor = [TB.r, TB.g, TB.b, VB])
        }
        const pB = yB ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB._albedoColor, BB._metallic, BB._roughness, BB._albedoTexture, BB._metallicTexture, BB._metallicTexture, BB, dB, TB) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(BB, dB, TB);
        await this._setMetallicRoughnessPbrMaterialAsync(pB, BB, VB, dB, TB), await this._finishMaterialAsync(VB, BB);
        const lB = this._exporter._materials;
        return lB.push(VB), lB.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(BB, TB, dB, VB, pB) {
        if (wd(dB, TB), BB.baseColor.equalsWithEpsilon(td, vd) && mB.WithinEpsilon(TB.alpha, 1, vd) || (VB.baseColorFactor = [BB.baseColor.r, BB.baseColor.g, BB.baseColor.b, TB.alpha]), null != BB.metallic && 1 !== BB.metallic && (VB.metallicFactor = BB.metallic), null != BB.roughness && 1 !== BB.roughness && (VB.roughnessFactor = BB.roughness), null == TB.backFaceCulling || TB.backFaceCulling || (TB._twoSidedLighting || yB.Tools.Warn(TB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), dB.doubleSided = !0), pB) {
          const BB = [],
            yB = TB instanceof tT ? TB._bumpTexture : TB.geometryNormalTexture;
          yB && BB.push(this.exportTextureAsync(yB).then((BB => {
            BB && (dB.normalTexture = BB, 1 !== yB.level && (dB.normalTexture.scale = yB.level))
          })));
          const pB = TB instanceof tT ? TB._ambientTexture : TB.ambientOcclusionTexture;
          pB && BB.push(new Promise((async BB => {
            if (TB instanceof nT && VB.metallicRoughnessTexture) {
              const TB = this._exportTextureSampler(pB),
                dB = this._exporter._textures[VB.metallicRoughnessTexture.index].source,
                yB = this._exportTextureInfo(dB, TB, pB.coordinatesIndex);
              return this._textureMap.set(pB.uniqueId, yB), this._exporter._extensionsPostExportTextures("exporter", yB, pB), BB(yB)
            }
            return BB(await this.exportTextureAsync(pB))
          })).then((async BB => {
            if (BB) {
              const VB = {
                index: BB.index,
                texCoord: BB.texCoord,
                extensions: BB.extensions
              };
              dB.occlusionTexture = VB, VB.strength = TB instanceof tT ? TB._ambientTextureStrength : TB.ambientOcclusionTexture.level
            }
          })));
          const lB = TB instanceof tT ? TB._emissiveTexture : TB.emissionColorTexture;
          lB && BB.push(this.exportTextureAsync(lB).then((BB => {
            BB && (dB.emissiveTexture = BB)
          }))), BB.length > 0 && (this._exporter._materialNeedsUVsSet.add(TB), await Promise.all(BB))
        }
        const lB = TB instanceof tT ? TB._emissiveColor : TB.emissionColor;
        lB.equalsWithEpsilon(fd, vd) || (dB.emissiveFactor = lB.FVB()), dB.pbrMetallicRoughness = VB
      }
      async exportOpenPBRMaterialAsync(BB, TB) {
        const dB = {},
          VB = {
            name: BB.name
          },
          yB = BB.baseColor,
          pB = BB.geometryOpacity;
        yB && (dB.baseColorFactor = [yB.r, yB.g, yB.b, pB]);
        const lB = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB.baseColor, BB.baseMetalness, BB.specularRoughness, BB.baseColorTexture, BB.baseMetalnessTexture, BB.specularRoughnessTexture, BB, dB, TB);
        await this._setMetallicRoughnessPbrMaterialAsync(lB, BB, VB, dB, TB), await this._finishMaterialAsync(VB, BB);
        const JB = this._exporter._materials;
        return JB.push(VB), JB.length - 1
      }
      async exportTextureAsync(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = this._textureMap.get(TB ?? BB.uniqueId);
        if (dB) return dB;
        const VB = this._exportTextureSampler(BB),
          yB = await this._exportTextureImageAsync(BB);
        return dB = this._exportTextureInfo(yB, VB, BB.coordinatesIndex), this._textureMap.set(TB ?? BB.uniqueId, dB), this._exporter._extensionsPostExportTextures("exporter", dB, BB), dB
      }
      async _exportTextureImageAsync(BB) {
        const TB = BB.mimeType ?? "none",
          dB = this._internalTextureToImage,
          VB = BB.getInternalTexture().uniqueId;
        dB[VB] = dB[VB] || {};
        let pB = dB[VB][TB];
        return void 0 === pB && (pB = (async () => {
          const dB = await Ed(BB);
          if (dB && sd(dB.mimeType) && ("none" === TB || dB.mimeType === TB)) return await this._exportImageAsync(BB.name, new Blob([dB.data], {
            type: dB.mimeType
          }));
          let VB = "image/png";
          "none" !== TB && (sd(TB) ? VB = TB : (VB = "image/png", yB.Tools.Warn(`Unsupported media type: ${TB}. Exporting texture as PNG.`)));
          const pB = BB.getSize(),
            lB = await (0, iB.h)(BB),
            JB = await (0, sB.EncodeImageAsync)(lB, pB.width, pB.height, VB);
          return await this._exportImageAsync(BB.name, JB)
        })(), dB[VB][TB] = pB), await pB
      }
      async _exportImageAsync(BB, TB) {
        const dB = this._exporter._images;
        let VB;
        if (this._exporter._shouldUseGlb) {
          VB = {
            name: BB,
            mimeType: TB.type,
            bufferView: void 0
          };
          const dB = await TB.arrayBuffer(),
            yB = this._exporter._bufferManager.createBufferView(new Uint8Array(dB));
          this._exporter._bufferManager.setBufferView(VB, yB)
        } else {
          const pB = BB.replace(/\.\/|\/|\.\\|\\/g, "_"),
            lB = function(BB) {
              switch (BB) {
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
            }(TB.type);
          let JB = pB + lB;
          dB.some((BB => BB.uri === JB)) && (JB = `${pB}_${yB.Tools.RandomId()}${lB}`), VB = {
            name: BB,
            uri: JB
          }, this._exporter._imageData[JB] = TB
        }
        return dB.push(VB), dB.length - 1
      }
      _exportTextureInfo(BB, TB, dB) {
        const VB = this._exporter._textures;
        let yB = VB.findIndex((dB => dB.sampler == TB && dB.source === BB)); - 1 === yB && (yB = VB.length, VB.push({
          source: BB,
          sampler: TB
        }));
        const pB = {
          index: yB
        };
        return dB && (pB.texCoord = dB), pB
      }
      _exportTextureSampler(BB) {
        const TB = this._getTextureSampler(BB),
          dB = this._exporter._samplers,
          VB = dB.findIndex((BB => BB.minFilter === TB.minFilter && BB.magFilter === TB.magFilter && BB.wrapS === TB.wrapS && BB.wrapT === TB.wrapT));
        return -1 !== VB ? VB : (dB.push(TB), dB.length - 1)
      }
    }
    var rd = dB(38819),
      Id = dB(38968);
    (0, Id.e)();
    var cd = dB(36132);
    const Sd = VB.Matrix.Compose(new VB.RD(-1, 1, 1), VB.Quaternion.Identity(), VB.RD.Zero());

    function Pd(BB, TB) {
      if (!(BB instanceof kB.c)) return !1;
      if (TB) {
        if (!BB.getWorldMatrix().equalsWithEpsilon(VB.Matrix.IdentityReadOnly, cd.b)) return !1
      } else {
        if (!BB.getWorldMatrix().multiplyToRef(Sd, VB.TmpVectors.Matrix[0]).equalsWithEpsilon(VB.Matrix.IdentityReadOnly, cd.b)) return !1
      }
      return !(BB instanceof LB.e && BB.geometry)
    }
    const Qd = VB.RD.ZeroReadOnly,
      Rd = VB.Quaternion.Identity(),
      ad = VB.RD.OneReadOnly,
      Zd = new VB.RD(-1, 1, 1);

    function Xd(BB, TB) {
      const {
        byteOffset: dB,
        byteStride: VB,
        type: yB,
        normalized: pB
      } = BB, lB = BB.getSize(), JB = TB.reduce(((BB, TB) => TB.getTotalVertices() > BB ? TB.getTotalVertices() : BB), -Number.MAX_VALUE);
      return {
        byteOffset: dB,
        byteStride: VB,
        componentCount: lB,
        type: yB,
        count: JB * lB,
        normalized: pB,
        totalVertices: JB,
        kind: BB.getKind()
      }
    }

    function Wd(BB) {
      switch (BB) {
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

    function hd(BB) {
      switch (BB) {
        case oB.f.PositionKind:
        case oB.f.NormalKind:
        case oB.f.TangentKind:
        case oB.f.ColorKind:
        case oB.f.MatricesIndicesKind:
        case oB.f.MatricesIndicesExtraKind:
        case oB.f.MatricesWeightsKind:
        case oB.f.MatricesWeightsExtraKind:
        case oB.f.UVKind:
        case oB.f.UV2Kind:
        case oB.f.UV3Kind:
        case oB.f.UV4Kind:
        case oB.f.UV5Kind:
        case oB.f.UV6Kind:
          return !0
      }
      return !1
    }

    function Cd(BB) {
      const TB = Math.sqrt(BB.x * BB.x + BB.y * BB.y + BB.z * BB.z);
      TB > 0 && (BB.x /= TB, BB.y /= TB, BB.z /= TB)
    }

    function Gd(BB) {
      return BB.x *= -1, BB
    }

    function qd(BB) {
      if (BB.x * BB.x + BB.y * BB.y > .5) {
        const TB = Math.abs(BB.x),
          dB = Math.abs(BB.y);
        if (TB > dB) {
          const dB = Math.sign(BB.x);
          BB.x = TB, BB.y *= -dB, BB.z *= -dB, BB.w *= dB
        } else {
          const TB = Math.sign(BB.y);
          BB.x *= -TB, BB.y = dB, BB.z *= TB, BB.w *= -TB
        }
      } else {
        const TB = Math.abs(BB.z),
          dB = Math.abs(BB.w);
        if (TB > dB) {
          const dB = Math.sign(BB.z);
          BB.x *= -dB, BB.y *= dB, BB.z = TB, BB.w *= -dB
        } else {
          const TB = Math.sign(BB.w);
          BB.x *= TB, BB.y *= -TB, BB.z *= -TB, BB.w = dB
        }
      }
      return BB
    }

    function xd(BB) {
      BB.YBB(-BB.z, BB.w, BB.x, -BB.y)
    }

    function jd(BB, TB) {
      const dB = VB.RD.FromArrayToRef(TB.translation || [0, 0, 0], 0, VB.TmpVectors.RD[0]),
        yB = VB.Quaternion.FromArrayToRef(TB.rotation || [0, 0, 0, 1], 0, VB.TmpVectors.Quaternion[0]),
        pB = VB.Matrix.ComposeToRef(ad, yB, dB, VB.TmpVectors.Matrix[0]),
        lB = VB.RD.FromArrayToRef(BB.translation || [0, 0, 0], 0, VB.TmpVectors.RD[2]),
        JB = VB.Quaternion.FromArrayToRef(BB.rotation || [0, 0, 0, 1], 0, VB.TmpVectors.Quaternion[1]),
        YB = VB.Matrix.ComposeToRef(ad, JB, lB, VB.TmpVectors.Matrix[1]);
      pB.multiplyToRef(YB, YB), YB.decompose(void 0, yB, dB), dB.equalsWithEpsilon(Qd, cd.b) ? delete TB.translation : TB.translation = dB.FVB(), yB.equalsWithEpsilon(Rd, cd.b) ? delete TB.rotation : TB.rotation = yB.FVB(), TB.scale && delete TB.scale
    }

    function Ad(BB, TB) {
      if (!(TB instanceof kB.c)) return !1;
      if (!(1 === TB.getChildren().length && 0 === BB.getChildren().length && BB.parent === TB)) return !1;
      const dB = BB.jU(),
        VB = BB instanceof Id.h && !dB.useRightHandedSystem ? Zd : ad;
      return !!TB.al.equalsWithEpsilon(VB, cd.b) || (wB.b.Warn(`Cannot collapse node ${BB.name} into parent node ${TB.name} with modified scaling.`), !1)
    }

    function bd(BB) {
      if (BB instanceof Array) {
        const TB = new Float32Array(BB);
        return new Uint8Array(TB.buffer, TB.byteOffset, TB.byteLength)
      }
      return ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB)
    }

    function nd(BB, TB) {
      for (const [dB, VB] of Object.entries(BB)) {
        const yB = TB[dB];
        (Array.isArray(VB) && Array.isArray(yB) && ed(VB, yB) || VB === yB) && delete BB[dB]
      }
      return BB
    }

    function ed(BB, TB) {
      return BB.length === TB.length && BB.every(((BB, dB) => BB === TB[dB]))
    }
    const BV = new Map([
      [Int8Array, (BB, TB, dB) => BB.setInt8(TB, dB)],
      [Uint8Array, (BB, TB, dB) => BB.setUint8(TB, dB)],
      [Uint8ClampedArray, (BB, TB, dB) => BB.setUint8(TB, dB)],
      [Int16Array, (BB, TB, dB) => BB.setInt16(TB, dB, !0)],
      [Uint16Array, (BB, TB, dB) => BB.setUint16(TB, dB, !0)],
      [Int32Array, (BB, TB, dB) => BB.setInt32(TB, dB, !0)],
      [Uint32Array, (BB, TB, dB) => BB.setUint32(TB, dB, !0)],
      [Float32Array, (BB, TB, dB) => BB.setFloat32(TB, dB, !0)],
      [Float64Array, (BB, TB, dB) => BB.setFloat64(TB, dB, !0)]
    ]);
    class TV {
      writeTypedArray(BB) {
        this._checkGrowBuffer(BB.byteLength);
        const TB = BV.get(BB.constructor);
        for (let dB = 0; dB < BB.length; dB++) TB(this._dataView, this._byteOffset, BB[dB]), this._byteOffset += BB.BYTES_PER_ELEMENT
      }
      constructor(BB) {
        this._data = new Uint8Array(BB), this._dataView = new DataView(this._data.buffer), this._byteOffset = 0
      }
      get byteOffset() {
        return this._byteOffset
      }
      getOutputData() {
        return new Uint8Array(this._data.buffer, 0, this._byteOffset)
      }
      writeUInt8(BB) {
        this._checkGrowBuffer(1), this._dataView.setUint8(this._byteOffset, BB), this._byteOffset++
      }
      writeInt8(BB) {
        this._checkGrowBuffer(1), this._dataView.setInt8(this._byteOffset, BB), this._byteOffset++
      }
      writeInt16(BB) {
        this._checkGrowBuffer(2), this._dataView.setInt16(this._byteOffset, BB, !0), this._byteOffset += 2
      }
      writeUInt16(BB) {
        this._checkGrowBuffer(2), this._dataView.setUint16(this._byteOffset, BB, !0), this._byteOffset += 2
      }
      writeInt32(BB) {
        this._checkGrowBuffer(4), this._dataView.setInt32(this._byteOffset, BB, !0), this._byteOffset += 4
      }
      writeUInt32(BB) {
        this._checkGrowBuffer(4), this._dataView.setUint32(this._byteOffset, BB, !0), this._byteOffset += 4
      }
      writeFloat32(BB) {
        this._checkGrowBuffer(4), this._dataView.setFloat32(this._byteOffset, BB, !0), this._byteOffset += 4
      }
      writeFloat64(BB) {
        this._checkGrowBuffer(8), this._dataView.setFloat64(this._byteOffset, BB, !0), this._byteOffset += 8
      }
      _checkGrowBuffer(BB) {
        const TB = this.byteOffset + BB;
        if (TB > this._data.byteLength) {
          const BB = new Uint8Array(2 * TB);
          BB.set(this._data), this._data = BB, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function dV(BB) {
      return BB % 4 === 0 ? 4 : BB % 2 === 0 ? 2 : 1
    }
    class VV {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(BB) {
        let TB = 0;
        this._bufferViewToData.forEach((BB => {
          TB += BB.byteLength
        }));
        const dB = new TV(TB),
          VB = Array.from(this._bufferViewToData.keys()).sort(((BB, TB) => dV(TB.byteLength) - dV(BB.byteLength)));
        for (const yB of VB) {
          yB.byteOffset = dB.byteOffset, BB.push(yB);
          const TB = BB.length - 1,
            VB = this.getPropertiesWithBufferView(yB);
          for (const BB of VB) BB.bufferView = TB;
          dB.writeTypedArray(this._bufferViewToData.get(yB)), this._bufferViewToData.delete(yB)
        }
        return dB.getOutputData()
      }
      createBufferView(BB, TB) {
        const dB = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: BB.byteLength,
          byteStride: TB
        };
        return this._bufferViewToData.set(dB, BB), dB
      }
      createAccessor(BB, TB, dB, VB, yB, pB, lB) {
        this._verifyBufferView(BB);
        const JB = {
          bufferView: void 0,
          componentType: dB,
          count: VB,
          type: TB,
          min: pB?.min,
          max: pB?.max,
          normalized: lB,
          byteOffset: yB
        };
        return this.setBufferView(JB, BB), this._accessorToBufferView.set(JB, BB), JB
      }
      setBufferView(BB, TB) {
        this._verifyBufferView(TB);
        this.getPropertiesWithBufferView(TB).push(BB)
      }
      removeBufferView(BB) {
        const TB = this.getPropertiesWithBufferView(BB);
        for (const dB of TB) void 0 !== dB.bufferView && delete dB.bufferView;
        this._bufferViewToData.delete(BB), this._bufferViewToProperties.delete(BB), this._accessorToBufferView.forEach(((TB, dB) => {
          TB === BB && (void 0 !== dB.byteOffset && delete dB.byteOffset, this._accessorToBufferView.delete(dB))
        }))
      }
      getBufferView(BB) {
        const TB = this._accessorToBufferView.get(BB);
        return this._verifyBufferView(TB), TB
      }
      getPropertiesWithBufferView(BB) {
        return this._verifyBufferView(BB), this._bufferViewToProperties.set(BB, this._bufferViewToProperties.get(BB) ?? []), this._bufferViewToProperties.get(BB)
      }
      getData(BB) {
        return this._verifyBufferView(BB), this._bufferViewToData.get(BB)
      }
      _verifyBufferView(BB) {
        if (void 0 === BB || !this._bufferViewToData.has(BB)) throw new Error(`BufferView ${BB} not found in BufferManager.`)
      }
    }
    var yV = dB(38974);
    (0, yV.f)();
    var pV = dB(39191);
    (0, pV.c)();
    var lV = dB(39019),
      JV = dB(39945);
    (0, JV.g)();
    let YV = (() => {
      var BB;
      let TB, dB, VB = [],
        yB = [],
        pB = [],
        lB = [];
      return BB = class {
        get influence() {
          return this._influence
        }
        set influence(BB) {
          if (this._influence === BB) return;
          const TB = this._influence;
          this._influence = BB, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === TB || 0 === BB)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(BB) {
          this._animationPropertiesOverride = BB
        }
        constructor(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = BB, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Bd.e, this._onDataLayoutChanged = new Bd.e, this.id = (0, MB.h)(this, VB, void 0), this.morphTargetManager = ((0, MB.h)(this, yB), (0, MB.h)(this, pB, null)), this._animationPropertiesOverride = ((0, MB.h)(this, lB), null), this.id = BB, this.morphTargetManager = JB, this._scene = dB || uB.c.LastCreatedScene, this.influence = TB, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        TJB(BB) {
          const TB = this.hasPositions;
          this._positions = BB, TB !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(BB) {
          const TB = this.hasNormals;
          this._normals = BB, TB !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(BB) {
          const TB = this.hasTangents;
          this._tangents = BB, TB !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(BB) {
          const TB = this.hasUVs;
          this._uvs = BB, TB !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(BB) {
          const TB = this.hasUV2s;
          this._uv2s = BB, TB !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(BB) {
          const TB = this.hasColors;
          this._colors = BB, TB !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const TB = fT.c.Clone((() => new BB(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return TB._positions = this._positions, TB._normals = this._normals, TB._tangents = this._tangents, TB._uvs = this._uvs, TB._uv2s = this._uv2s, TB._colors = this._colors, TB
        }
        serialize() {
          const BB = {};
          return BB.name = this.name, BB.influence = this.influence, null != this.id && (BB.id = this.id), BB.uniqueId = this.uniqueId, BB.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (BB.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (BB.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (BB.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (BB.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (BB.colors = Array.prototype.slice.call(this.getColors())), fT.c.AppendSerializedAnimations(this, BB), BB
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(TB, dB) {
          let VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const yB = new BB(TB.name, TB.influence, dB, VB);
          if (yB.TJB(TB.positions), null != TB.id && (yB.id = TB.id), TB.normals && yB.setNormals(TB.normals), TB.tangents && yB.setTangents(TB.tangents), TB.uvs && yB.setUVs(TB.uvs), TB.uv2s && yB.setUV2s(TB.uv2s), TB.colors && yB.setColors(TB.colors), TB.animations) {
            for (let BB = 0; BB < TB.animations.length; BB++) {
              const dB = TB.animations[BB],
                VB = (0, XT.e)("BABYLON.Animation");
              VB && yB.animations.push(VB.Parse(dB))
            }
            TB.autoAnimate && dB && dB.beginAnimation(yB, TB.autoAnimateFrom, TB.autoAnimateTo, TB.autoAnimateLoop, TB.autoAnimateSpeed || 1)
          }
          return yB
        }
        static FromMesh(TB, dB, VB) {
          dB || (dB = TB.name);
          const yB = new BB(dB, VB, TB.jU(), TB.morphTargetManager);
          return yB.TJB(TB.getVerticesData(aB.m.PositionKind)), TB.isVerticesDataPresent(aB.m.NormalKind) && yB.setNormals(TB.getVerticesData(aB.m.NormalKind)), TB.isVerticesDataPresent(aB.m.TangentKind) && yB.setTangents(TB.getVerticesData(aB.m.TangentKind)), TB.isVerticesDataPresent(aB.m.UVKind) && yB.setUVs(TB.getVerticesData(aB.m.UVKind)), TB.isVerticesDataPresent(aB.m.UV2Kind) && yB.setUV2s(TB.getVerticesData(aB.m.UV2Kind)), TB.isVerticesDataPresent(aB.m.ColorKind) && yB.setColors(TB.getVerticesData(aB.m.ColorKind)), yB
        }
      }, (() => {
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, zB.W)()], dB = [(0, zB.W)()], (0, MB.g)(null, null, TB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, TB) => {
              BB.id = TB
            }
          },
          metadata: JB
        }, VB, yB), (0, MB.g)(null, null, dB, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: BB => "morphTargetManager" in BB,
            get: BB => BB.morphTargetManager,
            set: (BB, TB) => {
              BB.morphTargetManager = TB
            }
          },
          metadata: JB
        }, pB, lB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })(), BB
    })();
    var gV, oV = dB(40003),
      kV = dB(39016);
    ! function(BB) {
      BB[BB.INTANGENT = 0] = "INTANGENT", BB[BB.OUTTANGENT = 1] = "OUTTANGENT"
    }(gV || (gV = {}));
    class LV {
      static _IsTransformable(BB) {
        return BB && (BB instanceof kB.c || BB instanceof yV.b || BB instanceof kV.c)
      }
      static _CreateNodeAnimation(BB, TB, dB, VB, pB) {
        if (this._IsTransformable(BB)) {
          const lB = [],
            JB = [],
            YB = TB.getKeys(),
            gB = LV._CalculateMinMaxKeyFrames(YB),
            oB = LV._DeduceInterpolation(YB, dB, VB),
            kB = oB.interpolationType,
            LB = oB.shouldBakeAnimation;
          if (LB ? LV._CreateBakedAnimation(BB, TB, dB, gB.min, gB.max, TB.framePerSecond, pB, lB, JB, gB, VB) : "LINEAR" === kB || "STEP" === kB ? LV._CreateLinearOrStepAnimation(BB, TB, dB, lB, JB, VB) : "CUBICSPLINE" === kB ? LV._CreateCubicSplineAnimation(BB, TB, dB, lB, JB, VB) : LV._CreateBakedAnimation(BB, TB, dB, gB.min, gB.max, TB.framePerSecond, pB, lB, JB, gB, VB), lB.length && JB.length) {
            return {
              inputs: lB,
              outputs: JB,
              samplerInterpolation: kB,
              inputsMin: LB ? gB.min : yB.Tools.FloatRound(gB.min / TB.framePerSecond),
              inputsMax: LB ? gB.max : yB.Tools.FloatRound(gB.max / TB.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(BB) {
        let TB = null,
          dB = "VEC3",
          VB = !1;
        const pB = BB.targetProperty.split(".");
        switch (pB[0]) {
          case "al":
            TB = "scale";
            break;
          case "position":
            TB = "translation";
            break;
          case "rotation":
            dB = "VEC4", TB = "rotation";
            break;
          case "rotationQuaternion":
            dB = "VEC4", VB = !0, TB = "rotation";
            break;
          case "influence":
            dB = "SCALAR", TB = "weights";
            break;
          default:
            yB.Tools.Error(`Unsupported animatable property ${pB[0]}`)
        }
        return TB ? {
          animationChannelTargetPath: TB,
          dataAccessorType: dB,
          useQuaternion: VB
        } : (yB.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
        let kB;
        if (LV._IsTransformable(BB) && BB.animations)
          for (const LB of BB.animations) {
            if (oB && !oB(LB)) continue;
            const yB = LV._DeduceAnimationInfo(LB);
            yB && (kB = {
              name: LB.name,
              samplers: [],
              channels: []
            }, LV._AddAnimation(`${LB.name}`, LB.hasRunningRuntimeAnimations ? TB : kB, BB, LB, yB.dataAccessorType, yB.animationChannelTargetPath, VB, pB, lB, JB, yB.useQuaternion, YB, gB), kB.samplers.length && kB.channels.length && dB.push(kB))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
        let kB;
        if (BB instanceof oV.c) {
          const yB = BB.morphTargetManager;
          if (yB)
            for (let LB = 0; LB < yB.numTargets; ++LB) {
              const OB = yB.getTarget(LB);
              for (const DB of OB.animations) {
                if (oB && !oB(DB)) continue;
                const OB = new JV.c(`${DB.name}`, "influence", DB.framePerSecond, DB.dataType, DB.Py, DB.enableBlending),
                  uB = [],
                  HB = DB.getKeys();
                for (let BB = 0; BB < HB.length; ++BB) {
                  const TB = HB[BB];
                  for (let BB = 0; BB < yB.numTargets; ++BB) BB == LB ? uB.push(TB) : uB.push({
                    frame: TB.frame,
                    value: 0
                  })
                }
                OB.setKeys(uB, !0);
                const EB = LV._DeduceAnimationInfo(OB);
                EB && (kB = {
                  name: OB.name,
                  samplers: [],
                  channels: []
                }, LV._AddAnimation(DB.name, DB.hasRunningRuntimeAnimations ? TB : kB, BB, OB, EB.dataAccessorType, EB.animationChannelTargetPath, VB, pB, lB, JB, EB.useQuaternion, YB, gB, yB.numTargets), kB.samplers.length && kB.channels.length && dB.push(kB))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        let oB;
        if (BB.animationGroups) {
          const kB = BB.animationGroups;
          for (const LB of kB) {
            const kB = new Map,
              OB = new Map,
              DB = new Set,
              uB = LB.to - LB.from;
            oB = {
              name: LB.name,
              channels: [],
              samplers: []
            };
            for (let TB = 0; TB < LB.targetedAnimations.length; ++TB) {
              const gB = LB.targetedAnimations[TB],
                uB = gB.target,
                HB = gB.animation;
              if (YB && !YB(HB)) continue;
              const EB = JB.has(uB);
              if (this._IsTransformable(uB) || 1 === uB.length && this._IsTransformable(uB[0])) {
                const BB = LV._DeduceAnimationInfo(gB.animation);
                if (BB) {
                  const TB = this._IsTransformable(uB) ? uB : this._IsTransformable(uB[0]) ? uB[0] : null;
                  TB && LV._AddAnimation(`${HB.name}`, oB, TB, HB, BB.dataAccessorType, BB.animationChannelTargetPath, dB, VB, yB, pB, BB.useQuaternion, lB, EB)
                }
              } else if (uB instanceof YV || 1 === uB.length && uB[0] instanceof YV) {
                if (LV._DeduceAnimationInfo(gB.animation)) {
                  const TB = uB instanceof YV ? uB : uB[0];
                  if (TB) {
                    const dB = BB.morphTargetManagers.find((BB => {
                      for (let dB = 0; dB < BB.numTargets; ++dB)
                        if (BB.getTarget(dB) === TB) return !0;
                      return !1
                    }));
                    if (dB) {
                      const VB = BB.meshes.find((BB => BB.morphTargetManager === dB));
                      VB && (kB.has(VB) || kB.set(VB, new Map), kB.get(VB)?.set(TB, HB), DB.add(VB), OB.set(VB, HB))
                    }
                  }
                }
              }
            }
            DB.forEach((BB => {
              const TB = BB.morphTargetManager;
              let JB = null;
              const YB = [],
                gB = OB.get(BB).getKeys(),
                DB = gB.length;
              for (let dB = 0; dB < DB; ++dB)
                for (let VB = 0; VB < TB.numTargets; ++VB) {
                  const yB = TB.getTarget(VB),
                    pB = kB.get(BB);
                  if (pB) {
                    const TB = pB.get(yB);
                    TB ? (JB || (JB = new JV.c(`${LB.name}_${BB.name}_MorphWeightAnimation`, "influence", TB.framePerSecond, JV.c.ANIMATIONTYPE_FLOAT, TB.Py, TB.enableBlending)), YB.push(TB.getKeys()[dB])) : YB.push({
                      frame: LB.from + uB / DB * dB,
                      value: yB.influence,
                      inTangent: gB[0].inTangent ? 0 : void 0,
                      outTangent: gB[0].outTangent ? 0 : void 0
                    })
                  }
                }
              JB.setKeys(YB, !0);
              const HB = LV._DeduceAnimationInfo(JB);
              HB && LV._AddAnimation(`${LB.name}_${BB.name}_MorphWeightAnimation`, oB, BB, JB, HB.dataAccessorType, HB.animationChannelTargetPath, dB, VB, yB, pB, HB.useQuaternion, lB, !1, TB?.numTargets)
            })), oB.channels.length && oB.samplers.length && (gB?.set(LB, TB.length), TB.push(oB))
          }
        }
      }
      static _AddAnimation(BB, TB, dB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB) {
        const uB = LV._CreateNodeAnimation(dB, yB, lB, kB, LB);
        let HB, EB, vB, mB, iB, NB;
        if (uB) {
          if (DB) {
            let BB, TB = 0;
            const dB = [];
            for (; uB.inputs.length > 0;) BB = uB.inputs.shift(), TB % DB == 0 && dB.push(BB), TB++;
            uB.inputs = dB
          }
          const BB = JB.get(dB),
            yB = new Float32Array(uB.inputs);
          HB = YB.createBufferView(yB), EB = YB.createAccessor(HB, "SCALAR", 5126, uB.inputs.length, void 0, {
            min: [uB.inputsMin],
            max: [uB.inputsMax]
          }), oB.push(EB), vB = oB.length - 1;
          const gB = new VB.Quaternion,
            kB = new VB.RD,
            LB = new VB.RD,
            tB = dB instanceof yV.b,
            fB = Wd(pB),
            sB = new Float32Array(uB.outputs.length * fB);
          uB.outputs.forEach((function(BB, TB) {
            let dB = BB;
            switch (lB) {
              case "translation":
                OB && (VB.RD.FromArrayToRef(BB, 0, LB), Gd(LB), LB.toArray(dB));
                break;
              case "rotation":
                4 === BB.length ? VB.Quaternion.FromArrayToRef(BB, 0, gB) : (dB = new Array(4), VB.RD.FromArrayToRef(BB, 0, kB), VB.Quaternion.FromEulerVectorToRef(kB, gB)), OB && (qd(gB), tB && xd(gB)), gB.toArray(dB)
            }
            sB.set(dB, TB * fB)
          })), HB = YB.createBufferView(sB), EB = YB.createAccessor(HB, pB, 5126, uB.outputs.length), oB.push(EB), mB = oB.length - 1, iB = {
            interpolation: uB.samplerInterpolation,
            input: vB,
            output: mB
          }, TB.samplers.push(iB), NB = {
            sampler: TB.samplers.length - 1,
            target: {
              node: BB,
              path: lB
            }
          }, TB.channels.push(NB)
        }
      }
      static _CreateBakedAnimation(BB, TB, dB, pB, lB, JB, YB, gB, oB, kB, LB) {
        let OB;
        const DB = VB.Quaternion.Identity();
        let uB, HB, EB, vB, mB, iB = null,
          NB = null;
        kB.min = yB.Tools.FloatRound(pB / JB);
        const tB = TB.getKeys();
        for (let VB = 0, fB = tB.length; VB < fB; ++VB) {
          if (HB = tB[VB], VB + 1 < fB)
            if (EB = tB[VB + 1], HB.value.equals && HB.value.equals(EB.value) || HB.value === EB.value) {
              if (0 !== VB) continue;
              mB = HB.frame
            } else mB = EB.frame;
          else {
            if (vB = tB[VB - 1], HB.value.equals && HB.value.equals(vB.value) || HB.value === vB.value) continue;
            mB = lB
          }
          if (mB)
            for (let VB = HB.frame; VB <= mB; VB += YB) {
              if (uB = yB.Tools.FloatRound(VB / JB), uB === iB) continue;
              iB = uB, NB = uB;
              const pB = {
                key: 0,
                repeatCount: 0,
                Py: TB.Py
              };
              OB = TB._interpolate(VB, pB), LV._SetInterpolatedValue(BB, OB, uB, TB, dB, DB, gB, oB, LB)
            }
        }
        NB && (kB.max = NB)
      }
      static _ConvertFactorToVector3OrQuaternion(BB, TB, dB, pB, lB) {
        const JB = LV._GetBasePositionRotationOrScale(TB, pB, lB),
          YB = dB.targetProperty.split("."),
          gB = YB ? YB[1] : "",
          oB = lB ? VB.Quaternion.FromArray(JB).normalize() : VB.RD.FromArray(JB);
        switch (gB) {
          case "x":
          case "y":
          case "z":
            oB[gB] = BB;
            break;
          case "w":
            oB.w = BB;
            break;
          default:
            yB.Tools.Error(`glTFAnimation: Unsupported component name "${gB}"!`)
        }
        return oB
      }
      static _SetInterpolatedValue(BB, TB, dB, yB, pB, lB, JB, YB, gB) {
        let oB;
        JB.push(dB), "weights" !== pB ? (yB.dataType === JV.c.ANIMATIONTYPE_FLOAT && (TB = this._ConvertFactorToVector3OrQuaternion(TB, BB, yB, pB, gB)), "rotation" === pB ? (gB ? lB = TB : (oB = TB, VB.Quaternion.RotationYawPitchRollToRef(oB.y, oB.x, oB.z, lB)), YB.push(lB.FVB())) : (oB = TB, YB.push(oB.FVB()))) : YB.push([TB])
      }
      static _CreateLinearOrStepAnimation(BB, TB, dB, VB, yB, pB) {
        for (const lB of TB.getKeys()) VB.push(lB.frame / TB.framePerSecond), LV._AddKeyframeValue(lB, TB, yB, dB, BB, pB)
      }
      static _CreateCubicSplineAnimation(BB, TB, dB, VB, yB, pB) {
        TB.getKeys().forEach((function(lB) {
          VB.push(lB.frame / TB.framePerSecond), LV._AddSplineTangent(gV.INTANGENT, yB, dB, "CUBICSPLINE", lB, pB), LV._AddKeyframeValue(lB, TB, yB, dB, BB, pB), LV._AddSplineTangent(gV.OUTTANGENT, yB, dB, "CUBICSPLINE", lB, pB)
        }))
      }
      static _GetBasePositionRotationOrScale(BB, TB, dB) {
        let yB;
        if ("rotation" === TB)
          if (dB) {
            yB = (BB.rotationQuaternion ?? VB.Quaternion.Identity()).FVB()
          } else {
            yB = (BB.rotation ?? VB.RD.Zero()).FVB()
          }
        else if ("translation" === TB) {
          yB = (BB.position ?? VB.RD.Zero()).FVB()
        } else {
          yB = (BB.al ?? VB.RD.One()).FVB()
        }
        return yB
      }
      static _AddKeyframeValue(BB, TB, dB, pB, lB, JB) {
        let YB;
        const gB = TB.dataType;
        if (gB === JV.c.ANIMATIONTYPE_VECTOR3) {
          let TB = BB.value.FVB();
          if ("rotation" === pB) {
            const BB = VB.RD.FromArray(TB);
            TB = VB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).FVB()
          }
          dB.push(TB)
        } else if (gB === JV.c.ANIMATIONTYPE_FLOAT) {
          if ("weights" === pB) dB.push([BB.value]);
          else if (YB = this._ConvertFactorToVector3OrQuaternion(BB.value, lB, TB, pB, JB), YB) {
            if ("rotation" === pB) {
              const BB = JB ? YB : VB.Quaternion.RotationYawPitchRoll(YB.y, YB.x, YB.z).normalize();
              dB.push(BB.FVB())
            }
            dB.push(YB.FVB())
          }
        } else gB === JV.c.ANIMATIONTYPE_QUATERNION ? dB.push(BB.value.normalize().FVB()) : yB.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(BB, TB, dB) {
        let VB, yB, pB = !1;
        if ("rotation" === TB && !dB) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let lB = 0, JB = BB.length; lB < JB; ++lB)
          if (yB = BB[lB], yB.inTangent || yB.outTangent)
            if (VB) {
              if ("CUBICSPLINE" !== VB) {
                VB = "LINEAR", pB = !0;
                break
              }
            } else VB = "CUBICSPLINE";
        else if (VB) {
          if ("CUBICSPLINE" === VB || yB.interpolation && 1 === yB.interpolation && "STEP" !== VB) {
            VB = "LINEAR", pB = !0;
            break
          }
        } else VB = yB.interpolation && 1 === yB.interpolation ? "STEP" : "LINEAR";
        return VB || (VB = "LINEAR"), {
          interpolationType: VB,
          shouldBakeAnimation: pB
        }
      }
      static _AddSplineTangent(BB, TB, dB, yB, pB, lB) {
        let JB;
        const YB = BB === gV.INTANGENT ? pB.inTangent : pB.outTangent;
        if ("CUBICSPLINE" === yB) {
          if ("rotation" === dB)
            if (YB)
              if (lB) JB = YB.FVB();
              else {
                const BB = YB;
                JB = VB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).FVB()
              }
          else JB = [0, 0, 0, 0];
          else JB = "weights" === dB ? YB ? [YB] : [0] : YB ? YB.FVB() : [0, 0, 0];
          TB.push(JB)
        }
      }
      static _CalculateMinMaxKeyFrames(BB) {
        let TB = 1 / 0,
          dB = -1 / 0;
        return BB.forEach((function(BB) {
          TB = Math.min(TB, BB.frame), dB = Math.max(dB, BB.frame)
        })), {
          min: TB,
          max: dB
        }
      }
    }

    function OV(BB, TB, dB, pB, lB, JB) {
      const YB = {
          attributes: {},
          influence: BB.influence,
          name: BB.name
        },
        gB = TB.geometry;
      if (!gB) return yB.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), YB;
      const kB = JB ? -1 : 1,
        LB = VB.RD.Zero();
      let OB, DB;
      if (BB.hasPositions) {
        const pB = BB.getPositions(),
          JB = gB.getVerticesData(oB.f.PositionKind);
        if (JB) {
          const BB = new Float32Array(JB.length),
            TB = [1 / 0, 1 / 0, 1 / 0],
            yB = [-1 / 0, -1 / 0, -1 / 0];
          DB = JB.length / 3, OB = 0;
          for (let dB = OB; dB < DB; ++dB) {
            const lB = VB.RD.FromArray(JB, 3 * dB);
            VB.RD.FromArray(pB, 3 * dB).subtractToRef(lB, LB), LB.x *= kB, TB[0] = Math.min(TB[0], LB.x), yB[0] = Math.max(yB[0], LB.x), TB[1] = Math.min(TB[1], LB.y), yB[1] = Math.max(yB[1], LB.y), TB[2] = Math.min(TB[2], LB.z), yB[2] = Math.max(yB[2], LB.z), BB[3 * dB] = LB.x, BB[3 * dB + 1] = LB.y, BB[3 * dB + 2] = LB.z
          }
          const gB = dB.createBufferView(BB, 12),
            oB = dB.createAccessor(gB, "VEC3", 5126, pB.length / 3, 0, {
              min: TB,
              max: yB
            });
          lB.push(oB), YB.attributes.POSITION = lB.length - 1
        } else yB.Tools.Warn(`Morph target positions for mesh ${TB.name} were not exported. Mesh does not have position vertex data`)
      }
      if (BB.hasNormals) {
        const pB = BB.getNormals(),
          JB = gB.getVerticesData(oB.f.NormalKind);
        if (JB) {
          const BB = new Float32Array(JB.length);
          DB = JB.length / 3, OB = 0;
          for (let dB = OB; dB < DB; ++dB) {
            const TB = VB.RD.FromArray(JB, 3 * dB).normalize();
            VB.RD.FromArray(pB, 3 * dB).normalize().subtractToRef(TB, LB), BB[3 * dB] = LB.x * kB, BB[3 * dB + 1] = LB.y, BB[3 * dB + 2] = LB.z
          }
          const TB = dB.createBufferView(BB, 12),
            yB = dB.createAccessor(TB, "VEC3", 5126, pB.length / 3, 0);
          lB.push(yB), YB.attributes.NORMAL = lB.length - 1
        } else yB.Tools.Warn(`Morph target normals for mesh ${TB.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (BB.hasTangents) {
        const pB = BB.getTangents(),
          JB = gB.getVerticesData(oB.f.TangentKind);
        if (JB) {
          DB = JB.length / 4;
          const BB = new Float32Array(3 * DB);
          OB = 0;
          for (let dB = OB; dB < DB; ++dB) {
            const TB = VB.RD.FromArray(JB, 4 * dB);
            Cd(TB);
            const yB = VB.RD.FromArray(pB, 3 * dB);
            Cd(yB), yB.subtractToRef(TB, LB), BB[3 * dB] = LB.x * kB, BB[3 * dB + 1] = LB.y, BB[3 * dB + 2] = LB.z
          }
          const TB = dB.createBufferView(BB, 12),
            yB = dB.createAccessor(TB, "VEC3", 5126, DB, 0);
          lB.push(yB), YB.attributes.TANGENT = lB.length - 1
        } else yB.Tools.Warn(`Morph target tangents for mesh ${TB.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (BB.hasColors) {
        const pB = BB.getColors(),
          JB = gB.getVerticesData(oB.f.ColorKind),
          kB = gB.getVertexBuffer(oB.f.ColorKind);
        if (JB && kB) {
          const BB = kB.getSize();
          DB = JB.length / BB;
          const TB = new Float32Array(DB * BB);
          OB = 0;
          for (let dB = OB; dB < DB; ++dB)
            if (3 === BB) {
              const yB = VB.RD.FromArray(JB, dB * BB);
              VB.RD.FromArray(pB, dB * BB).subtractToRef(yB, LB), TB[3 * dB] = LB.x, TB[3 * dB + 1] = LB.y, TB[3 * dB + 2] = LB.z
            } else if (4 === BB) {
            const yB = new VB.Vector4,
              lB = VB.Vector4.FromArray(JB, dB * BB);
            VB.Vector4.FromArray(pB, dB * BB).subtractToRef(lB, yB), TB[4 * dB] = yB.x, TB[4 * dB + 1] = yB.y, TB[4 * dB + 2] = yB.z, TB[4 * dB + 3] = yB.w
          } else yB.Tools.Warn(`Unsupported number of components for color attribute: ${BB}`);
          const gB = dB.createBufferView(TB, 4 * BB),
            oB = dB.createAccessor(gB, 3 === BB ? "VEC3" : "VEC4", 5126, DB, 0);
          lB.push(oB), YB.attributes.COLOR_0 = lB.length - 1
        } else yB.Tools.Warn(`Morph target colors for mesh ${TB.name} were not exported. Mesh does not have colors vertex data`)
      }
      return YB
    }
    var DV = dB(40304);
    class uV {}
    uV.DEFAULT_COLOR = GB.c.White(), uV.DEFAULT_WIDTH_ATTENUATED = 1, uV.DEFAULT_WIDTH = .1;
    var HV = dB(39938);
    class EV {
      constructor(BB) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = BB
      }
      moveTo(BB, TB) {
        this._currentPath = new HV.j(BB, TB), this._tempPaths.push(this._currentPath)
      }
      lineTo(BB, TB) {
        this._currentPath.addLineTo(BB, TB)
      }
      quadraticCurveTo(BB, TB, dB, VB) {
        this._currentPath.addQuadraticCurveTo(BB, TB, dB, VB, this._resolution)
      }
      bezierCurveTo(BB, TB, dB, VB, yB, pB) {
        this._currentPath.addBezierCurveTo(BB, TB, dB, VB, yB, pB, this._resolution)
      }
      extractHoles() {
        for (const BB of this._tempPaths) BB.area() > 0 ? this._holes.push(BB) : this._paths.push(BB);
        if (!this._paths.length && this._holes.length) {
          const BB = this._holes;
          this._holes = this._paths, this._paths = BB
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

    function vV(BB, TB, dB, VB, yB, pB) {
      const lB = pB.glyphs[BB] || pB.glyphs["?"];
      if (!lB) return null;
      const JB = new EV(yB);
      if (lB.o) {
        const BB = lB.o.split(" ");
        for (let yB = 0, pB = BB.length; yB < pB;) {
          switch (BB[yB++]) {
            case "m": {
              const pB = parseInt(BB[yB++]) * TB + dB,
                lB = parseInt(BB[yB++]) * TB + VB;
              JB.moveTo(pB, lB);
              break
            }
            case "l": {
              const pB = parseInt(BB[yB++]) * TB + dB,
                lB = parseInt(BB[yB++]) * TB + VB;
              JB.lineTo(pB, lB);
              break
            }
            case "q": {
              const pB = parseInt(BB[yB++]) * TB + dB,
                lB = parseInt(BB[yB++]) * TB + VB,
                YB = parseInt(BB[yB++]) * TB + dB,
                gB = parseInt(BB[yB++]) * TB + VB;
              JB.quadraticCurveTo(YB, gB, pB, lB);
              break
            }
            case "b": {
              const pB = parseInt(BB[yB++]) * TB + dB,
                lB = parseInt(BB[yB++]) * TB + VB,
                YB = parseInt(BB[yB++]) * TB + dB,
                gB = parseInt(BB[yB++]) * TB + VB,
                oB = parseInt(BB[yB++]) * TB + dB,
                kB = parseInt(BB[yB++]) * TB + VB;
              JB.bezierCurveTo(YB, gB, oB, kB, pB, lB);
              break
            }
          }
        }
      }
      return JB.extractHoles(), {
        offsetX: lB.ha * TB,
        shapePath: JB
      }
    }

    function mV(BB, TB, dB, VB) {
      const yB = Array.from(BB),
        pB = TB / VB.resolution,
        lB = (VB.boundingBox.yMax - VB.boundingBox.yMin + VB.underlineThickness) * pB,
        JB = [];
      let YB = 0,
        gB = 0;
      for (let oB = 0; oB < yB.length; oB++) {
        const BB = yB[oB];
        if ("\n" === BB) YB = 0, gB -= lB;
        else {
          const TB = vV(BB, pB, YB, gB, dB, VB);
          TB && (YB += TB.offsetX, JB.push(TB.shapePath))
        }
      }
      return JB
    }
    class iV {
      static ConvertPoints(BB, TB) {
        if (BB.length && Array.isArray(BB) && "number" === typeof BB[0]) return [BB];
        if (BB.length && Array.isArray(BB[0]) && "number" === typeof BB[0][0]) return BB;
        if (BB.length && !Array.isArray(BB[0]) && BB[0] instanceof RB.p) {
          const TB = [];
          for (let dB = 0; dB < BB.length; dB++) {
            const VB = BB[dB];
            TB.push(VB.x, VB.y, VB.z)
          }
          return [TB]
        }
        if (BB.length > 0 && Array.isArray(BB[0]) && BB[0].length > 0 && BB[0][0] instanceof RB.p) {
          const TB = [],
            dB = BB;
          for (const BB of dB) TB.push(BB.flatMap((BB => [BB.x, BB.y, BB.z])));
          return TB
        }
        if (BB instanceof Float32Array) {
          if (TB?.floatArrayStride) {
            const dB = [],
              VB = 3 * TB.floatArrayStride;
            for (let TB = 0; TB < BB.length; TB += VB) {
              const yB = new Array(VB);
              for (let dB = 0; dB < VB; dB++) yB[dB] = BB[TB + dB];
              dB.push(yB)
            }
            return dB
          }
          return [Array.from(BB)]
        }
        if (BB.length && BB[0] instanceof Float32Array) {
          const TB = [];
          for (const dB of BB) TB.push(Array.from(dB));
          return TB
        }
        return []
      }
      static OmitZeroLengthPredicate(BB, TB, dB) {
        const VB = [];
        return TB.subtract(BB).lengthSquared() > 0 && VB.push([BB, TB]), dB.subtract(TB).lengthSquared() > 0 && VB.push([TB, dB]), BB.subtract(dB).lengthSquared() > 0 && VB.push([dB, BB]), 0 === VB.length ? null : VB
      }
      static OmitDuplicatesPredicate(BB, TB, dB, VB) {
        const yB = [];
        return iV._SearchInPoints(BB, TB, VB) || yB.push([BB, TB]), iV._SearchInPoints(TB, dB, VB) || yB.push([TB, dB]), iV._SearchInPoints(dB, BB, VB) || yB.push([dB, BB]), 0 === yB.length ? null : yB
      }
      static _SearchInPoints(BB, TB, dB) {
        for (const VB of dB)
          for (let dB = 0; dB < VB.length; dB++)
            if (VB[dB]?.equals(BB) && (VB[dB + 1]?.equals(TB) || VB[dB - 1]?.equals(TB))) return !0;
        return !1
      }
      static MeshesToLines(BB, TB) {
        const dB = [];
        for (let VB = 0; VB < BB.length; VB++) {
          const yB = BB[VB],
            pB = yB.getVerticesData(aB.m.PositionKind),
            lB = yB.elB();
          if (pB && lB)
            for (let BB = 0, JB = 0; BB < lB.length; BB++) {
              const YB = 3 * lB[JB++],
                gB = 3 * lB[JB++],
                oB = 3 * lB[JB++],
                kB = new RB.p(pB[YB], pB[YB + 1], pB[YB + 2]),
                LB = new RB.p(pB[gB], pB[gB + 1], pB[gB + 2]),
                OB = new RB.p(pB[oB], pB[oB + 1], pB[oB + 2]);
              if (TB) {
                const JB = TB(kB, LB, OB, dB, BB, YB, yB, VB, pB, lB);
                if (JB)
                  for (const BB of JB) dB.push(BB)
              } else dB.push([kB, LB], [LB, OB], [OB, kB])
            }
        }
        return dB
      }
      static ToVector3Array(BB) {
        if (Array.isArray(BB[0])) {
          const TB = [],
            dB = BB;
          for (const BB of dB) {
            const dB = [];
            for (let TB = 0; TB < BB.length; TB += 3) dB.push(new RB.p(BB[TB], BB[TB + 1], BB[TB + 2]));
            TB.push(dB)
          }
          return TB
        }
        const TB = BB,
          dB = [];
        for (let VB = 0; VB < TB.length; VB += 3) dB.push(new RB.p(TB[VB], TB[VB + 1], TB[VB + 2]));
        return dB
      }
      static ToNumberArray(BB) {
        return BB.flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetPointsCountInfo(BB) {
        const TB = new Array(BB.length);
        let dB = 0;
        for (let VB = BB.length; VB--;) TB[VB] = BB[VB].length / 3, dB += TB[VB];
        return {
          total: dB,
          counts: TB
        }
      }
      static GetLineLength(BB) {
        if (0 === BB.length) return 0;
        let TB;
        TB = "number" === typeof BB[0] ? iV.ToVector3Array(BB) : BB;
        const dB = RB.j.RD[0];
        let VB = 0;
        for (let yB = 0; yB < TB.length - 1; yB++) {
          const BB = TB[yB];
          VB += TB[yB + 1].subtractToRef(BB, dB).length()
        }
        return VB
      }
      static GetLineLengthArray(BB, TB) {
        const dB = TB ? new Float32Array(TB, 0, BB.length / 3) : new Float32Array(BB.length / 3);
        let VB = 0;
        for (let yB = 0, pB = BB.length / 3 - 1; yB < pB; yB++) {
          let TB = BB[3 * yB + 0],
            pB = BB[3 * yB + 1],
            lB = BB[3 * yB + 2];
          TB -= BB[3 * yB + 3], pB -= BB[3 * yB + 4], lB -= BB[3 * yB + 5];
          VB += Math.sqrt(TB * TB + pB * pB + lB * lB), dB[yB + 1] = VB
        }
        return dB
      }
      static SegmentizeSegmentByCount(BB, TB, dB) {
        const VB = [],
          yB = TB.subtract(BB),
          pB = RB.j.RD[0];
        pB.A4(dB);
        const lB = RB.j.RD[1];
        yB.divideToRef(pB, lB);
        let JB = BB.clone();
        VB.push(JB);
        for (let YB = 0; YB < dB; YB++) JB = JB.clone(), VB.push(JB.addInPlace(lB));
        return VB
      }
      static SegmentizeLineBySegmentLength(BB, TB) {
        const dB = BB[0] instanceof RB.p ? iV.GetLineSegments(BB) : "number" === typeof BB[0] ? iV.GetLineSegments(iV.ToVector3Array(BB)) : BB,
          VB = [];
        for (const yB of dB)
          if (yB.length > TB) {
            const BB = iV.SegmentizeSegmentByCount(yB.point1, yB.point2, Math.ceil(yB.length / TB));
            for (const TB of BB) VB.push(TB)
          } else VB.push(yB.point1), VB.push(yB.point2);
        return VB
      }
      static SegmentizeLineBySegmentCount(BB, TB) {
        const dB = "number" === typeof BB[0] ? iV.ToVector3Array(BB) : BB,
          VB = iV.GetLineLength(dB) / TB;
        return iV.SegmentizeLineBySegmentLength(dB, VB)
      }
      static GetLineSegments(BB) {
        const TB = [];
        for (let dB = 0; dB < BB.length - 1; dB++) {
          const VB = BB[dB],
            yB = BB[dB + 1],
            pB = yB.subtract(VB).length();
          TB.push({
            point1: VB,
            point2: yB,
            length: pB
          })
        }
        return TB
      }
      static GetMinMaxSegmentLength(BB) {
        const TB = iV.GetLineSegments(BB).sort((BB => BB.length));
        return {
          min: TB[0].length,
          max: TB[TB.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const yB = TB * dB;
        let pB = 0,
          lB = 0;
        const JB = BB.length;
        for (let gB = 0; gB < JB; gB++) {
          if (yB <= pB + BB[gB].length) {
            lB = gB;
            break
          }
          pB += BB[gB].length
        }
        const YB = (yB - pB) / BB[lB].length;
        return BB[lB].point2.subtractToRef(BB[lB].point1, RB.j.RD[0]), RB.j.RD[0].scaleToRef(YB, RB.j.RD[1]), VB || RB.j.RD[1].addInPlace(BB[lB].point1), RB.j.RD[1].clone()
      }
      static GetCircleLinePoints(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / TB;
        const pB = [];
        for (let lB = 0; lB <= TB; lB++) pB.push(new RB.p(Math.cos(lB * yB) * BB, Math.sin(lB * yB) * VB, dB));
        return pB
      }
      static GetBezierLinePoints(BB, TB, dB, VB) {
        return HV.g.CreateQuadraticBezier(BB, TB, dB, VB).getPoints().flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetArrowCap(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [BB.clone(), BB.add(TB.multiplyByFloats(dB, dB, dB))],
          widths: [VB, yB, pB, lB]
        }
      }
      static GetPointsFromText(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const lB = [],
          JB = mV(BB, TB, dB, VB);
        for (const YB of JB) {
          for (const BB of YB.paths) {
            const TB = [],
              dB = BB.getPoints();
            for (const BB of dB) TB.push(BB.x, BB.y, yB);
            lB.push(TB)
          }
          if (pB)
            for (const BB of YB.holes) {
              const TB = [],
                dB = BB.getPoints();
              for (const BB of dB) TB.push(BB.x, BB.y, yB);
              lB.push(TB)
            }
        }
        return lB
      }
      static Color3toRGBAUint8(BB) {
        const TB = new Uint8Array(4 * BB.length);
        for (let dB = 0, VB = 0; dB < BB.length; dB++) TB[VB++] = 255 * BB[dB].r, TB[VB++] = 255 * BB[dB].g, TB[VB++] = 255 * BB[dB].b, TB[VB++] = 255;
        return TB
      }
      static CreateColorsTexture(BB, TB, dB, VB) {
        const yB = VB.PD().getCaps().maxTextureSize ?? 1,
          pB = TB.length > yB ? yB : TB.length,
          lB = Math.ceil(TB.length / yB);
        lB > 1 && (TB = [...TB, ...Array(pB * lB - TB.length).fill(TB[0])]);
        const JB = iV.Color3toRGBAUint8(TB),
          YB = new tB.d(JB, pB, lB, od.d.TEXTUREFORMAT_RGBA, VB, !1, !0, dB);
        return YB.name = BB, YB
      }
      static PrepareEmptyColorsTexture(BB) {
        if (!uV.EmptyColorsTexture) {
          const TB = new Uint8Array(4);
          uV.EmptyColorsTexture = new tB.d(TB, 1, 1, od.d.TEXTUREFORMAT_RGBA, BB, !1, !1, tB.d.NEAREST_NEAREST), uV.EmptyColorsTexture.name = "grlEmptyColorsTexture", uV.EmptyColorsTexture.lF.addOnce((() => {
            uV.EmptyColorsTexture = null
          }))
        }
        return uV.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        uV.EmptyColorsTexture?.dispose(), uV.EmptyColorsTexture = null
      }
      static BooleanToNumber(BB) {
        return BB ? 1 : 0
      }
    }
    class NV extends ZB.d {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class tV extends XB.b {
      isCompatible(BB) {
        return !0
      }
      constructor(BB, TB, dB) {
        dB = dB || {
          color: uV.DEFAULT_COLOR
        };
        const VB = new NV;
        VB.GREASED_LINE_HAS_COLOR = !!dB.color && !dB.useColors, VB.GREASED_LINE_SIZE_ATTENUATION = dB.sizeAttenuation ?? !1, VB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === dB.colorDistributionType, VB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (TB ?? BB.jU()).useRightHandedSystem, VB.GREASED_LINE_CAMERA_FACING = dB.cameraFacing ?? !0, super(BB, tV.GREASED_LINE_MATERIAL_NAME, 200, VB, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = dB?.forceGLSL || tV.ForceGLSL, this._scene = TB ?? BB.jU(), this._engine = this._scene.PD(), this._cameraFacing = dB.cameraFacing ?? !0, this.visibility = dB.visibility ?? 1, this.useDash = dB.useDash ?? !1, this.dashRatio = dB.dashRatio ?? .5, this.dashOffset = dB.dashOffset ?? 0, this.width = dB.width ? dB.width : dB.sizeAttenuation ? uV.DEFAULT_WIDTH_ATTENUATED : uV.DEFAULT_WIDTH, this._sizeAttenuation = dB.sizeAttenuation ?? !1, this.colorMode = dB.colorMode ?? 0, this._color = dB.color ?? null, this.useColors = dB.useColors ?? !1, this._colorsDistributionType = dB.colorDistributionType ?? 0, this.colorsSampling = dB.colorsSampling ?? tB.d.NEAREST_NEAREST, this._colors = dB.colors ?? null, this.dashCount = dB.dashCount ?? 1, this.resolution = dB.resolution ?? new RB.l(this._engine.getRenderWidth(), this._engine.getRenderHeight()), dB.colorsTexture ? this.colorsTexture = dB.colorsTexture : this._colors ? this.colorsTexture = iV.CreateColorsTexture(`${BB.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? uV.DEFAULT_COLOR, iV.PrepareEmptyColorsTexture(this._scene)), this._engine.lF.add((() => {
          iV.DisposeEmptyColorsTexture()
        }))
      }
      getAttributes(BB) {
        BB.push("grl_offsets"), BB.push("grl_widths"), BB.push("grl_colorPointers"), BB.push("grl_counters"), this._cameraFacing ? (BB.push("grl_previousAndSide"), BB.push("grl_nextAndCounters")) : BB.push("grl_slopes")
      }
      getSamplers(BB) {
        BB.push("grl_colors")
      }
      getActiveTextures(BB) {
        this.colorsTexture && BB.push(this.colorsTexture)
      }
      getUniforms() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        const TB = [{
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
        return this._cameraFacing && TB.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === BB && TB.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: TB,
          vertex: this._cameraFacing && this._isGLSL(BB) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(BB) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(BB) {
        if (this._cameraFacing) {
          BB.i6("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || BB.i6("viewProjection", this._scene.getTransformMatrix());
          const TB = RB.j.Vector4[0];
          TB.x = this._aspect, TB.y = this._resolution.x, TB.z = this._resolution.y, TB.w = this.width, BB.updateVector4("grl_aspect_resolution_lineWidth", TB)
        }
        const TB = RB.j.Vector4[0];
        TB.x = iV.BooleanToNumber(this.useDash), TB.y = this._dashArray, TB.z = this.dashOffset, TB.w = this.dashRatio, BB.updateVector4("grl_dashOptions", TB);
        const dB = RB.j.Vector4[1];
        dB.x = this.colorMode, dB.y = this.visibility, dB.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, dB.w = iV.BooleanToNumber(this.useColors), BB.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", dB), this._color && BB.updateColor3("grl_singleColor", this._color);
        const VB = this.colorsTexture ?? uV.EmptyColorsTexture;
        BB.setTexture("grl_colors", VB), BB.updateFloat2("grl_textureSize", VB?.getSize().width ?? 1, VB?.getSize().height ?? 1)
      }
      prepareDefines(BB, TB, dB) {
        BB.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, BB.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, BB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, BB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = TB.useRightHandedSystem, BB.GREASED_LINE_CAMERA_FACING = this._cameraFacing, BB.GREASED_LINE_USE_OFFSETS = !!dB.offsets
      }
      getClassName() {
        return tV.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(TB) ? function(BB, TB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return TB && (BB["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), BB
          }
          return "fragment" === BB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(BB, this._cameraFacing) : function(BB, TB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return TB && (BB["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), BB
          }
          return "fragment" === BB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying grlCounters: f32;\n                    varying grlColorPointer: 32;\n\n                    var grl_colors: texture_2d<f32>;\n                    var grl_colorsSampler: sampler;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    let grlColorMode: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.x;\n                    let grlVisibility: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.y;\n                    let grlColorsWidth: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.z;\n                    let grlUseColors: f32 = uniforms.grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    let grlUseDash: f32 = uniforms.grl_dashOptions.x;\n                    let grlDashArray: f32 = uniforms.grl_dashOptions.y;\n                    let grlDashOffset: f32 = uniforms.grl_dashOptions.z;\n                    let grlDashRatio: f32 = uniforms.grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(fragmentInputs.grlCounters, grlVisibility);\n                    if (grlFinalColor.a == 0.0) {\n                        discard;\n                    }\n\n                    if (grlUseDash == 1.0) {\n                        let dashPosition = (fragmentInputs.grlCounters + grlDashOffset) % grlDashArray;\n                        grlFinalColor.a *= ceil(dashPosition - (grlDashArray * grlDashRatio));\n\n                        if (grlFinalColor.a == 0.0) {\n                            discard;\n                        }\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor = vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor += vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor *= vec4f(uniforms.grl_singleColor, grlFinalColor.a);\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, vec2f(fragmentInputs.grlCounters, 0.));\n                            #else\n                                let lookup: vec2f = vec2(fract(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x), 1.0 - floor(fragmentInputs.grlColorPointer / uniforms.grl_textureSize.x) / max(uniforms.grl_textureSize.y - 1.0, 1.0));\n                                let grlColor: vec4f = textureSample(grl_colors, grl_colorsSampler, lookup);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n\n\n                "
          } : null
        }(BB, this._cameraFacing)
      }
      dispose() {
        this.colorsTexture?.dispose(), super.dispose()
      }
      get colors() {
        return this._colors
      }
      set colors(BB) {
        this.setColors(BB)
      }
      setColors(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!TB || dB)
            if (this.colorsTexture && VB === BB.length && !dB) {
              const TB = iV.Color3toRGBAUint8(BB);
              this.colorsTexture.update(TB)
            } else this.colorsTexture?.dispose(), this.colorsTexture = iV.CreateColorsTexture(`${this._material.name}-colors-texture`, BB, this.colorsSampling, this._scene)
        } else this.colorsTexture?.dispose()
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(BB) {
        this._dashCount = BB, this._dashArray = 1 / BB
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(BB) {
        this._sizeAttenuation = BB, this.markAllDefinesAsDirty()
      }
      get color() {
        return this._color
      }
      set color(BB) {
        this.setColor(BB)
      }
      setColor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== BB || null !== this._color && null === BB ? (this._color = BB, TB || this.markAllDefinesAsDirty()) : this._color = BB
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(BB) {
        this._colorsDistributionType = BB, this.markAllDefinesAsDirty()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(BB) {
        this._aspect = BB.x / BB.y, this._resolution = BB
      }
      serialize() {
        const BB = super.serialize(),
          TB = {
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
        return this._colors && (TB.colors = this._colors), this._color && (TB.color = this._color), BB.greasedLineMaterialOptions = TB, BB
      }
      parse(BB, TB, dB) {
        super.parse(BB, TB, dB);
        const VB = BB.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), VB.color && this.setColor(VB.color, !0), VB.colorDistributionType && (this.colorsDistributionType = VB.colorDistributionType), VB.colors && (this.colors = VB.colors), VB.colorsSampling && (this.colorsSampling = VB.colorsSampling), VB.colorMode && (this.colorMode = VB.colorMode), VB.useColors && (this.useColors = VB.useColors), VB.visibility && (this.visibility = VB.visibility), VB.useDash && (this.useDash = VB.useDash), VB.dashCount && (this.dashCount = VB.dashCount), VB.dashRatio && (this.dashRatio = VB.dashRatio), VB.dashOffset && (this.dashOffset = VB.dashOffset), VB.width && (this.width = VB.width), VB.sizeAttenuation && (this.sizeAttenuation = VB.sizeAttenuation), VB.resolution && (this.resolution = VB.resolution), this.colors ? this.colorsTexture = iV.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, TB) : iV.PrepareEmptyColorsTexture(TB), this.markAllDefinesAsDirty()
      }
      copyTo(BB) {
        const TB = BB;
        TB.colorsTexture?.dispose(), this._colors && (TB.colorsTexture = iV.CreateColorsTexture(`${TB._material.name}-colors-texture`, this._colors, TB.colorsSampling, this._scene)), TB.setColor(this.color, !0), TB.colorsDistributionType = this.colorsDistributionType, TB.colorsSampling = this.colorsSampling, TB.colorMode = this.colorMode, TB.useColors = this.useColors, TB.visibility = this.visibility, TB.useDash = this.useDash, TB.dashCount = this.dashCount, TB.dashRatio = this.dashRatio, TB.dashOffset = this.dashOffset, TB.width = this.width, TB.sizeAttenuation = this.sizeAttenuation, TB.resolution = this.resolution, TB.markAllDefinesAsDirty()
      }
      _isGLSL(BB) {
        return 0 === BB || this._forceGLSL
      }
    }
    tV.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", tV.ForceGLSL = !1;
    var fV = dB(39143),
      sV = dB(39156),
      MV = dB(37646),
      zV = dB(39216),
      wV = dB(38576);
    class UV extends zV.l {
      constructor(BB, TB, VB) {
        const yB = TB.PD(),
          pB = yB.isWebGPU && !(VB.forceGLSL || UV.ForceGLSL),
          lB = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        TB.useRightHandedSystem && lB.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const JB = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        VB.cameraFacing ? (lB.push("GREASED_LINE_CAMERA_FACING"), JB.push("grl_previousAndSide", "grl_nextAndCounters")) : (JB.push("grl_slopes"), JB.push("grl_counters"));
        const YB = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (pB || YB.push("world", "viewProjection", "view", "projection"), super(BB, TB, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: pB ? ["Scene", "Mesh"] : void 0,
            attributes: JB,
            uniforms: YB,
            samplers: pB ? [] : ["grlColors"],
            defines: lB,
            extraInitializationsAsync: async () => {
              pB ? await Promise.all([dB.e(314).then((() => dB(60418))), dB.e(373).then((() => dB(60421)))]) : await Promise.all([dB.e(307).then((() => dB(60429))), dB.e(374).then((() => dB(60432)))])
            },
            shaderLanguage: pB ? 1 : 0
          }), this._color = GB.c.White(), this._colorsDistributionType = 0, this._colorsTexture = null, VB = VB || {
            color: uV.DEFAULT_COLOR
          }, this.visibility = VB.visibility ?? 1, this.useDash = VB.useDash ?? !1, this.dashRatio = VB.dashRatio ?? .5, this.dashOffset = VB.dashOffset ?? 0, this.dashCount = VB.dashCount ?? 1, this.width = VB.width ? VB.width : VB.sizeAttenuation && VB.cameraFacing ? uV.DEFAULT_WIDTH_ATTENUATED : uV.DEFAULT_WIDTH, this.sizeAttenuation = VB.sizeAttenuation ?? !1, this.color = VB.color ?? GB.c.White(), this.useColors = VB.useColors ?? !1, this.colorsDistributionType = VB.colorDistributionType ?? 0, this.colorsSampling = VB.colorsSampling ?? tB.d.NEAREST_NEAREST, this.colorMode = VB.colorMode ?? 0, this._colors = VB.colors ?? null, this._cameraFacing = VB.cameraFacing ?? !0, this.resolution = VB.resolution ?? new RB.l(yB.getRenderWidth(), yB.getRenderHeight()), VB.colorsTexture ? this.colorsTexture = VB.colorsTexture : this._colors ? this.colorsTexture = iV.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, TB) : (this._color = this._color ?? uV.DEFAULT_COLOR, this.colorsTexture = iV.PrepareEmptyColorsTexture(TB)), pB) {
          const BB = new wV.e;
          BB.setParameters(), BB.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", BB)
        }
        yB.lF.add((() => {
          iV.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== uV.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new RB.l(this._colorMode, this._colorsDistributionType))
      }
      updateLazy() {
        this._colors && this.setColors(this._colors, !1, !0)
      }
      get colors() {
        return this._colors
      }
      set colors(BB) {
        this.setColors(BB)
      }
      setColors(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!TB || dB)
            if (this._colorsTexture && VB === BB.length && !dB) {
              const TB = iV.Color3toRGBAUint8(BB);
              this._colorsTexture.update(TB)
            } else this._colorsTexture && this._colorsTexture !== uV.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = iV.CreateColorsTexture(`${this.name}-colors-texture`, BB, this.colorsSampling, this.jU())
        } else {
          this._colorsTexture && this._colorsTexture !== uV.EmptyColorsTexture && this._colorsTexture.dispose();
          const BB = this.jU();
          BB && (this.colorsTexture = iV.PrepareEmptyColorsTexture(BB))
        }
      }
      get colorsTexture() {
        return this._colorsTexture ?? null
      }
      set colorsTexture(BB) {
        this._colorsTexture = BB, this.setFloat("grlColorsWidth", this._colorsTexture.getSize().width), this.setTexture("grlColors", this._colorsTexture)
      }
      get width() {
        return this._width
      }
      set width(BB) {
        this._width = BB, this.setFloat("grlWidth", BB)
      }
      get useColors() {
        return this._useColors
      }
      set useColors(BB) {
        this._useColors = BB, this.setFloat("grlUseColors", iV.BooleanToNumber(BB))
      }
      get colorsSampling() {
        return this._colorsSampling
      }
      set colorsSampling(BB) {
        this._colorsSampling = BB
      }
      get visibility() {
        return this._visibility
      }
      set visibility(BB) {
        this._visibility = BB, this.setFloat("grlVisibility", BB)
      }
      get useDash() {
        return this._useDash
      }
      set useDash(BB) {
        this._useDash = BB, this.setFloat("grlUseDash", iV.BooleanToNumber(BB))
      }
      get dashOffset() {
        return this._dashOffset
      }
      set dashOffset(BB) {
        this._dashOffset = BB, this.setFloat("grlDashOffset", BB)
      }
      get dashRatio() {
        return this._dashRatio
      }
      set dashRatio(BB) {
        this._dashRatio = BB, this.setFloat("grlDashRatio", BB)
      }
      get dashCount() {
        return this._dashCount
      }
      set dashCount(BB) {
        this._dashCount = BB, this._dashArray = 1 / BB, this.setFloat("grlDashArray", this._dashArray)
      }
      get sizeAttenuation() {
        return this._sizeAttenuation
      }
      set sizeAttenuation(BB) {
        this._sizeAttenuation = BB, this.setFloat("grlSizeAttenuation", iV.BooleanToNumber(BB))
      }
      get color() {
        return this._color
      }
      set color(BB) {
        this.setColor(BB)
      }
      setColor(BB) {
        BB = BB ?? uV.DEFAULT_COLOR, this._color = BB, this.setColor3("grlColor", BB)
      }
      get colorsDistributionType() {
        return this._colorsDistributionType
      }
      set colorsDistributionType(BB) {
        this._colorsDistributionType = BB, this._setColorModeAndColorDistributionType()
      }
      get colorMode() {
        return this._colorMode
      }
      set colorMode(BB) {
        this._colorMode = BB, this._setColorModeAndColorDistributionType()
      }
      get resolution() {
        return this._resolution
      }
      set resolution(BB) {
        this._resolution = BB, this.setVector2("grlResolution", BB), this.setFloat("grlAspect", BB.x / BB.y)
      }
      serialize() {
        const BB = super.serialize(),
          TB = {
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
        return this._colors && (TB.colors = this._colors), BB.greasedLineMaterialOptions = TB, BB
      }
      parse(BB, TB, dB) {
        const VB = BB.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), VB.color && (this.color = VB.color), VB.colorDistributionType && (this.colorsDistributionType = VB.colorDistributionType), VB.colorsSampling && (this.colorsSampling = VB.colorsSampling), VB.colorMode && (this.colorMode = VB.colorMode), VB.useColors && (this.useColors = VB.useColors), VB.visibility && (this.visibility = VB.visibility), VB.useDash && (this.useDash = VB.useDash), VB.dashCount && (this.dashCount = VB.dashCount), VB.dashRatio && (this.dashRatio = VB.dashRatio), VB.dashOffset && (this.dashOffset = VB.dashOffset), VB.width && (this.width = VB.width), VB.sizeAttenuation && (this.sizeAttenuation = VB.sizeAttenuation), VB.resolution && (this.resolution = VB.resolution), VB.colors ? this.colorsTexture = iV.CreateColorsTexture(`${this.name}-colors-texture`, VB.colors, this.colorsSampling, this.jU()) : this.colorsTexture = iV.PrepareEmptyColorsTexture(TB), this._cameraFacing = VB.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var FV, KV, rV;
    UV.ForceGLSL = !1,
      function(BB) {
        BB[BB.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", BB[BB.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(FV || (FV = {})),
      function(BB) {
        BB[BB.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", BB[BB.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", BB[BB.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(KV || (KV = {})),
      function(BB) {
        BB[BB.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", BB[BB.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", BB[BB.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", BB[BB.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", BB[BB.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(rV || (rV = {}));
    class IV extends fV.e {
      constructor(BB, TB, dB) {
        super(BB, TB, null, null, !1, !1), this.name = BB, this._options = dB, this._lazy = !1, this._updatable = !1, this._engine = TB.PD(), this._lazy = dB.lazy ?? !1, this._updatable = dB.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = dB.colorPointers ?? [], this._widths = dB.widths ?? new Array(dB.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(BB) {
        let TB = 0;
        for (const VB of this._points) TB += VB.length;
        const dB = TB / 3 * 2 - this._widths.length;
        for (let VB = 0; VB < dB; VB++) this._widths.push(BB)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.ZD && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(BB, TB) {
        for (const dB of BB) this._points.push(dB);
        this._lazy || this.setPoints(this._points, TB)
      }
      dispose(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(BB, TB)
      }
      isLazy() {
        return this._lazy
      }
      get uvs() {
        return this._uvs
      }
      set uvs(BB) {
        this._uvs = BB instanceof Float32Array ? BB : new Float32Array(BB), this._createVertexBuffers()
      }
      get offsets() {
        return this._offsets
      }
      set offsets(BB) {
        this.material instanceof UV && this.material.setDefine("GREASED_LINE_USE_OFFSETS", BB?.length > 0), this._offsets = BB, this._offsetsBuffer ? this._offsetsBuffer.update(BB) : this._createOffsetsBuffer(BB)
      }
      get widths() {
        return this._widths
      }
      set widths(BB) {
        this._widths = BB, this._lazy || this._widthsBuffer && this._widthsBuffer.update(BB)
      }
      get colorPointers() {
        return this._colorPointers
      }
      set colorPointers(BB) {
        this._colorPointers = BB, this._lazy || this._colorPointersBuffer && this._colorPointersBuffer.update(BB)
      }
      get greasedLineMaterial() {
        if (this.material && this.material instanceof UV) return this.material;
        const BB = this.material?.pluginManager?.getPlugin(tV.GREASED_LINE_MATERIAL_NAME);
        return BB || void 0
      }
      get points() {
        const BB = [];
        return MV.b.DeepCopy(this._points, BB), BB
      }
      setPoints(BB, TB) {
        this._points = iV.ConvertPoints(BB, TB?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), TB?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, TB)
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
      serialize(BB) {
        super.serialize(BB), BB.type = this.getClassName(), BB.lineOptions = this._createLineOptions()
      }
      _createVertexBuffers() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = new sV.d;
        return TB.positions = this._vertexPositions, TB.indices = this._indices, TB.uvs = this._uvs, BB && (TB.normals = [], sV.d.ComputeNormals(this._vertexPositions, this._indices, TB.normals)), TB.applyToMesh(this, this._options.updatable), TB
      }
      _createOffsetsBuffer(BB) {
        const TB = this._scene.PD(),
          dB = new aB.d(TB, BB, this._updatable, 3);
        this.setVerticesBuffer(dB.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = dB
      }
    }
    class cV {
      constructor(BB, TB) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = BB, this.wasAddedByNoopNode = TB
      }
      getIndicesAccessor(BB, TB, dB, VB, yB) {
        return this._indicesAccessorMap.get(BB)?.get(TB)?.get(dB)?.get(VB)?.get(yB)
      }
      setIndicesAccessor(BB, TB, dB, VB, yB, pB) {
        let lB = this._indicesAccessorMap.get(BB);
        lB || (lB = new Map, this._indicesAccessorMap.set(BB, lB));
        let JB = lB.get(TB);
        JB || (JB = new Map, lB.set(TB, JB));
        let YB = JB.get(dB);
        YB || (YB = new Map, JB.set(dB, YB));
        let gB = YB.get(VB);
        gB || (gB = new Map, YB.set(VB, gB)), gB.set(yB, pB)
      }
      pushExportedNode(BB) {
        this._exportedNodes.has(BB) || this._exportedNodes.add(BB)
      }
      getNodesSet() {
        return this._exportedNodes
      }
      getVertexBufferView(BB) {
        return this._vertexBufferViewMap.get(BB)
      }
      setVertexBufferView(BB, TB) {
        this._vertexBufferViewMap.set(BB, TB)
      }
      setRemappedBufferView(BB, TB, dB) {
        this._remappedBufferView.set(BB, new Map), this._remappedBufferView.get(BB).set(TB, dB)
      }
      getRemappedBufferView(BB, TB) {
        return this._remappedBufferView.get(BB)?.get(TB)
      }
      getVertexAccessor(BB, TB, dB) {
        return this._vertexAccessorMap.get(BB)?.get(TB)?.get(dB)
      }
      setVertexAccessor(BB, TB, dB, VB) {
        let yB = this._vertexAccessorMap.get(BB);
        yB || (yB = new Map, this._vertexAccessorMap.set(BB, yB));
        let pB = yB.get(TB);
        pB || (pB = new Map, yB.set(TB, pB)), pB.set(dB, VB)
      }
      hasVertexColorAlpha(BB) {
        return this._vertexMapColorAlpha.get(BB) || !1
      }
      setHasVertexColorAlpha(BB, TB) {
        return this._vertexMapColorAlpha.set(BB, TB)
      }
      getMesh(BB) {
        return this._meshMap.get(BB)
      }
      setMesh(BB, TB) {
        this._meshMap.set(BB, TB)
      }
      bindMorphDataToMesh(BB, TB) {
        const dB = this._meshMorphTargetMap.get(BB) || [];
        this._meshMorphTargetMap.set(BB, dB), -1 === dB.indexOf(TB) && dB.push(TB)
      }
      getMorphTargetsFromMesh(BB) {
        return this._meshMorphTargetMap.get(BB)
      }
    }
    class SV {
      _ApplyExtension(BB, TB, dB, VB) {
        if (dB >= TB.length) return Promise.resolve(BB);
        const yB = VB(TB[dB], BB);
        return yB ? yB.then((async BB => BB ? await this._ApplyExtension(BB, TB, dB + 1, VB) : null)) : this._ApplyExtension(BB, TB, dB + 1, VB)
      }
      _ApplyExtensions(BB, TB) {
        const dB = [];
        for (const VB of SV._ExtensionNames) dB.push(this._extensions[VB]);
        return this._ApplyExtension(BB, dB, 0, TB)
      }
      _extensionsPostExportNodeAsync(BB, TB, dB, VB, yB) {
        return this._ApplyExtensions(TB, ((TB, pB) => TB.postExportNodeAsync && TB.postExportNodeAsync(BB, pB, dB, VB, yB, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(BB, TB, dB) {
        return this._ApplyExtensions(TB, ((TB, VB) => TB.postExportMaterialAsync && TB.postExportMaterialAsync(BB, VB, dB)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        return await Promise.all(SV._ExtensionNames.map((async yB => {
          const pB = this._extensions[yB];
          if (pB.postExportMaterialAdditionalTexturesAsync) {
            const yB = await pB.postExportMaterialAdditionalTexturesAsync(BB, TB, dB);
            VB.push(...yB)
          }
        }))), VB
      }
      _extensionsPostExportTextures(BB, TB, dB) {
        for (const VB of SV._ExtensionNames) {
          const yB = this._extensions[VB];
          yB.postExportTexture && yB.postExportTexture(BB, TB, dB)
        }
      }
      _extensionsPostExportMeshPrimitive(BB) {
        for (const TB of SV._ExtensionNames) {
          const dB = this._extensions[TB];
          dB.postExportMeshPrimitive && dB.postExportMeshPrimitive(BB, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const BB of SV._ExtensionNames) {
          const TB = this._extensions[BB];
          TB.preGenerateBinaryAsync && await TB.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(BB) {
        for (const TB of SV._ExtensionNames) {
          const dB = this._extensions[TB];
          dB.enabled && BB(dB)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((BB => {
          var TB, dB, VB;
          BB.wasUsed && ((TB = this._glTF).extensionsUsed || (TB.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(BB.name) && this._glTF.extensionsUsed.push(BB.name), BB.required && ((dB = this._glTF).extensionsRequired || (dB.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(BB.name) && this._glTF.extensionsRequired.push(BB.name)), (VB = this._glTF).extensions || (VB.extensions = {}), BB.onExporting && BB.onExporting())
        }))
      }
      _loadExtensions() {
        for (const BB of SV._ExtensionNames) {
          const TB = SV._ExtensionFactories[BB](this);
          this._extensions[BB] = TB
        }
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : uB.c.LastCreatedScene,
          TB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${DB.d.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Kd(this), this._extensions = {}, this._bufferManager = new VV, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !BB) throw new Error("No scene available to export");
        this._babylonScene = BB, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: BB => BB?.IU?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...TB
        }, this._loadExtensions()
      }
      dispose() {
        for (const BB in this._extensions) {
          this._extensions[BB].dispose()
        }
      }
      get options() {
        return this._options
      }
      static RegisterExtension(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        SV.UnregisterExtension(BB) && yB.Tools.Warn(`Extension with the name ${BB} already exists`), SV._ExtensionFactories[BB] = TB;
        const VB = dB ?? 0;
        SV._ExtensionOrders[BB] = VB;
        let pB = SV._ExtensionNames.length;
        for (let yB = 0; yB < SV._ExtensionNames.length; yB++) {
          const BB = SV._ExtensionNames[yB];
          if (VB < SV._ExtensionOrders[BB]) {
            pB = yB;
            break
          }
        }
        SV._ExtensionNames.splice(pB, 0, BB)
      }
      static UnregisterExtension(BB) {
        if (!SV._ExtensionFactories[BB]) return !1;
        delete SV._ExtensionFactories[BB], delete SV._ExtensionOrders[BB];
        const TB = SV._ExtensionNames.indexOf(BB);
        return -1 !== TB && SV._ExtensionNames.splice(TB, 1), !0
      }
      _generateJSON(BB, TB, dB) {
        const VB = {
          byteLength: BB
        };
        return VB.byteLength && (this._glTF.buffers = [VB]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.Gu = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (VB.uri = TB + ".bin"), dB ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(BB) {
        const TB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const dB = this._generateJSON(TB.byteLength, BB, !0),
          VB = new Blob([TB], {
            type: "application/octet-stream"
          }),
          yB = BB + ".gltf",
          pB = BB + ".bin",
          lB = new gB;
        if (lB.files[yB] = dB, lB.files[pB] = VB, this._imageData)
          for (const JB in this._imageData) lB.files[JB] = this._imageData[JB];
        return lB
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(BB) {
        const TB = BB % 4;
        return 0 === TB ? TB : 4 - TB
      }
      async generateGLBAsync(BB) {
        this._shouldUseGlb = !0;
        const TB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const dB = this._generateJSON(TB.byteLength),
          VB = BB + ".glb";
        let yB, pB = dB.length;
        if ("undefined" !== typeof TextEncoder) {
          yB = (new TextEncoder).encode(dB), pB = yB.length
        }
        const lB = this._getPadding(pB),
          JB = this._getPadding(TB.byteLength),
          YB = 28 + pB + lB + TB.byteLength + JB,
          oB = new TV(YB);
        if (oB.writeUInt32(1179937895), oB.writeUInt32(2), oB.writeUInt32(YB), oB.writeUInt32(pB + lB), oB.writeUInt32(1313821514), yB) oB.writeTypedArray(yB);
        else {
          const BB = "_".charCodeAt(0);
          for (let TB = 0; TB < pB; ++TB) {
            const VB = dB.charCodeAt(TB);
            VB != dB.codePointAt(TB) ? oB.writeUInt8(BB) : oB.writeUInt8(VB)
          }
        }
        for (let gB = 0; gB < lB; ++gB) oB.writeUInt8(32);
        oB.writeUInt32(TB.byteLength + JB), oB.writeUInt32(5130562), oB.writeTypedArray(TB);
        for (let gB = 0; gB < JB; ++gB) oB.writeUInt8(0);
        const kB = new gB;
        return kB.files[VB] = new Blob([oB.getOutputData()], {
          type: "application/octet-stream"
        }), kB
      }
      _setNodeTransformation(BB, TB, dB) {
        if (TB.getPivotPoint().equalsWithEpsilon(Qd, cd.b) || yB.Tools.Warn("Pivot points are not supported in the glTF serializer"), !TB.position.equalsWithEpsilon(Qd, cd.b)) {
          const yB = VB.TmpVectors.RD[0].bdB(TB.position);
          dB && Gd(yB), BB.translation = yB.FVB()
        }
        TB.al.equalsWithEpsilon(ad, cd.b) || (BB.scale = TB.al.FVB());
        const pB = TB.rotationQuaternion?.clone() || VB.Quaternion.FromEulerAngles(TB.rotation.x, TB.rotation.y, TB.rotation.z);
        pB.equalsWithEpsilon(Rd, cd.b) || (dB && qd(pB), BB.rotation = pB.normalize().FVB())
      }
      _setCameraTransformation(BB, TB, dB) {
        const yB = VB.TmpVectors.RD[0],
          pB = VB.TmpVectors.Quaternion[0],
          lB = TB.getWorldMatrix();
        if (TB.parent) {
          const BB = TB.parent.getWorldMatrix().invertToRef(VB.TmpVectors.Matrix[0]);
          lB.multiplyToRef(BB, VB.TmpVectors.Matrix[1]).decompose(void 0, pB, yB)
        } else lB.decompose(void 0, pB, yB);
        yB.equalsWithEpsilon(Qd, cd.b) || (dB && Gd(yB), BB.translation = yB.FVB()), dB && qd(pB), this._babylonScene.useRightHandedSystem || xd(pB), pB.equalsWithEpsilon(Rd, cd.b) || (BB.rotation = pB.FVB())
      }
      _listAvailableCameras() {
        for (const BB of this._babylonScene.cameras) {
          const TB = {
            type: BB.mode === yV.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (BB.name && (TB.name = BB.name), "perspective" === TB.type) TB.perspective = {
            aspectRatio: BB.PD().getAspectRatio(BB),
            yfov: BB.fovMode === yV.b.FOVMODE_VERTICAL_FIXED ? BB.fov : BB.fov * BB.PD().getAspectRatio(BB),
            znear: BB.minZ,
            zfar: BB.maxZ
          };
          else if ("orthographic" === TB.type) {
            const dB = BB.orthoLeft && BB.orthoRight ? .5 * (BB.orthoRight - BB.orthoLeft) : .5 * BB.PD().getRenderWidth(),
              VB = BB.orthoBottom && BB.orthoTop ? .5 * (BB.orthoTop - BB.orthoBottom) : .5 * BB.PD().getRenderHeight();
            TB.orthographic = {
              xmag: dB,
              ymag: VB,
              znear: BB.minZ,
              zfar: BB.maxZ
            }
          }
          this._camerasMap.set(BB, TB)
        }
      }
      _exportAndAssignCameras() {
        const BB = Array.from(this._camerasMap.values());
        for (const TB of BB) {
          const BB = this._nodesCameraMap.get(TB);
          if (void 0 !== BB) {
            this._cameras.push(TB);
            for (const TB of BB) TB.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const BB of this._babylonScene.skeletons) {
          if (BB.bones.length <= 0) continue;
          const TB = {
            joints: []
          };
          this._skinMap.set(BB, TB)
        }
      }
      _exportAndAssignSkeletons(BB) {
        for (const dB of this._babylonScene.skeletons) {
          if (dB.bones.length <= 0) continue;
          const pB = this._skinMap.get(dB);
          if (void 0 == pB) continue;
          const lB = {};
          let JB = -1;
          for (let BB = 0; BB < dB.bones.length; ++BB) {
            const TB = dB.bones[BB],
              VB = TB.getIndex() ?? BB; - 1 !== VB && (lB[VB] = TB, VB > JB && (JB = VB))
          }
          const YB = [];
          for (let dB = 0; dB <= JB; ++dB) {
            const JB = lB[dB],
              gB = JB.getTransformNode(),
              oB = gB ? this._nodeMap.get(gB) : void 0;
            if (void 0 === oB) {
              yB.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            pB.joints.push(oB);
            const kB = JB.getAbsoluteInverseBindMatrix().clone();
            BB.has(gB) && (TB = kB, Sd.invertToRef(VB.TmpVectors.Matrix[0]).multiplyToRef(TB, TB).multiplyToRef(Sd, TB)), YB.push(kB)
          }
          const gB = this._nodesSkinMap.get(pB);
          if (pB.joints.length > 0 && void 0 !== gB) {
            const BB = new Float32Array(16 * YB.length);
            YB.forEach(((TB, dB) => {
              BB.set(TB.m, 16 * dB)
            }));
            const TB = this._bufferManager.createBufferView(BB);
            this._accessors.push(this._bufferManager.createAccessor(TB, "MAT4", 5126, YB.length)), pB.inverseBindMatrices = this._accessors.length - 1, this._skins.push(pB);
            const dB = this._skins.length - 1;
            for (const VB of gB) VB.skin = dB
          }
        }
        var TB
      }
      async _exportSceneAsync() {
        const BB = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const TB = this._options.metadataSelector(this._babylonScene.metadata);
          TB && (BB.extras = TB)
        }
        const TB = new Array,
          dB = new Array,
          VB = new Array,
          yB = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let pB;
        if (yB && !this._options.includeCoordinateSystemConversionNodes)
          for (const gB of this._babylonScene.animationGroups)
            for (const BB of gB.targetedAnimations) {
              const TB = BB.target;
              TB instanceof kB.c && !TB.parent && (pB ?? (pB = new Set)).add(TB)
            }
        for (const gB of this._babylonScene.rootNodes) {
          const BB = gB.animations,
            lB = !!BB && BB.length > 0 || pB?.has(gB);
          yB && !this._options.includeCoordinateSystemConversionNodes && Pd(gB, this._babylonScene.useRightHandedSystem) && !lB ? VB.push(...gB.getChildren()) : this._babylonScene.useRightHandedSystem ? TB.push(gB) : dB.push(gB)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const lB = new cV(!0, !1);
        BB.nodes.push(...await this._exportNodesAsync(dB, lB));
        const JB = new cV(!1, !1);
        BB.nodes.push(...await this._exportNodesAsync(TB, JB));
        const YB = new cV(!1, !0);
        BB.nodes.push(...await this._exportNodesAsync(VB, YB)), BB.nodes.length && this._scenes.push(BB), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(lB.getNodesSet()), this._babylonScene.animationGroups.length && LV._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, lB.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(BB) {
        return this._nodeMap.get(BB)
      }
      _getAnimationIndex(BB) {
        return this._animationGroupMap.get(BB)
      }
      _getCameraIndex(BB) {
        const TB = this._camerasMap.get(BB);
        if (!TB) return;
        const dB = this._cameras.indexOf(TB);
        return dB >= 0 ? dB : void 0
      }
      _getMaterialIndex(BB) {
        return this._materialMap.get(BB)
      }
      _getRootIndex(BB, TB) {
        switch (BB) {
          case "nodes":
            return this._getNodeIndex(TB);
          case "animations":
            return this._getAnimationIndex(TB);
          case "cameras":
            return this._getCameraIndex(TB);
          case "materials":
            return this._getMaterialIndex(TB);
          case "meshes": {
            const BB = this._getNodeIndex(TB);
            return void 0 === BB ? void 0 : this._nodes[BB]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(TB)?.index;
          case "images": {
            const BB = this._materialExporter.getTextureInfo(TB)?.index;
            if (void 0 === BB) return;
            const dB = this._textures[BB];
            for (const TB of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const BB = dB?.extensions?.[TB]?.source;
              if ("number" === typeof BB) return BB
            }
            return dB?.source
          }
          case "samplers": {
            const BB = this._materialExporter.getTextureInfo(TB)?.index;
            return void 0 === BB ? void 0 : this._textures[BB]?.sampler
          }
          case "skins": {
            const BB = this._skinMap.get(TB),
              dB = BB ? this._skins.indexOf(BB) : -1;
            return dB >= 0 ? dB : void 0
          }
          case "scenes":
            return TB === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(BB, TB, dB) {
        const VB = this._nodes[BB];
        if (!VB) throw new Error(`Cannot write ${TB}: glTF node ${BB} does not exist.`);
        VB.extensions || (VB.extensions = {}), VB.extensions[TB] = dB
      }
      _shouldExportNode(BB) {
        let TB = this._shouldExportNodeMap.get(BB);
        return void 0 === TB && (TB = this._options.shouldExportNode(BB), this._shouldExportNodeMap.set(BB, TB)), TB
      }
      async _exportNodesAsync(BB, TB) {
        const dB = new Array;
        this._exportBuffers(BB, TB);
        for (const VB of BB) await this._exportNodeAsync(VB, dB, TB);
        return dB
      }
      _collectBuffers(BB, TB, dB, VB, yB) {
        if (this._shouldExportNode(BB) && BB instanceof LB.e && BB.geometry) {
          const pB = BB.geometry.getVertexBuffers();
          if (pB)
            for (const VB in pB) {
              if (!hd(VB)) continue;
              const lB = pB[VB];
              yB.setHasVertexColorAlpha(lB, BB.hasVertexAlpha);
              const JB = lB._buffer,
                YB = TB.get(JB) || [];
              TB.set(JB, YB), -1 === YB.indexOf(lB) && YB.push(lB);
              const gB = dB.get(lB) || [];
              dB.set(lB, gB), -1 === gB.indexOf(BB) && gB.push(BB)
            }
          const lB = BB.morphTargetManager;
          if (lB)
            for (let TB = 0; TB < lB.numTargets; TB++) {
              const dB = lB.getTarget(TB),
                yB = VB.get(dB) || [];
              VB.set(dB, yB), -1 === yB.indexOf(BB) && yB.push(BB)
            }
        }
        for (const pB of BB.getChildren()) this._collectBuffers(pB, TB, dB, VB, yB)
      }
      _exportBuffers(BB, TB) {
        const dB = new Map,
          VB = new Map,
          yB = new Map;
        for (const JB of BB) this._collectBuffers(JB, dB, VB, yB, TB);
        const pB = Array.from(dB.keys());
        for (const JB of pB) {
          const BB = JB.getData();
          if (!BB) throw new Error("Buffer data is not available");
          const yB = dB.get(JB);
          if (!yB) continue;
          const pB = yB[0].byteStride;
          if (yB.some((BB => BB.byteStride !== pB))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const lB = bd(BB).slice();
          for (const TB of yB) {
            const BB = VB.get(TB),
              {
                byteOffset: dB,
                byteStride: yB,
                componentCount: pB,
                type: JB,
                count: YB,
                normalized: gB,
                kind: kB
              } = Xd(TB, BB);
            switch (kB) {
              case oB.f.NormalKind:
              case oB.f.TangentKind:
                (0, rd.g)(lB, dB, yB, pB, JB, YB, gB, (BB => {
                  const TB = Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2]);
                  if (TB > 0) {
                    const dB = 1 / TB;
                    BB[0] *= dB, BB[1] *= dB, BB[2] *= dB
                  }
                }));
                break;
              case oB.f.ColorKind: {
                const TB = BB.filter((BB => BB.material instanceof lV.StandardMaterial || null == BB.material)).length;
                if (0 == TB) break;
                if (TB != BB.length) {
                  wB.b.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                JB == oB.f.UNSIGNED_BYTE && wB.b.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const VB = new HB.Color3,
                  kB = new HB.d,
                  LB = this._babylonScene.PD().useExactSrgbConversions;
                (0, rd.g)(lB, dB, yB, pB, JB, YB, gB, (BB => {
                  3 === BB.length ? (VB.HdB(BB, 0), VB.toLinearSpaceToRef(VB, LB), VB.toArray(BB, 0)) : (kB.HdB(BB, 0), kB.toLinearSpaceToRef(kB, LB), kB.toArray(BB, 0))
                }))
              }
            }
          }
          if (TB.convertToRightHanded) {
            for (const BB of yB) {
              const TB = VB.get(BB),
                {
                  byteOffset: dB,
                  byteStride: yB,
                  componentCount: pB,
                  type: JB,
                  count: YB,
                  normalized: gB,
                  kind: kB
                } = Xd(BB, TB);
              switch (kB) {
                case oB.f.PositionKind:
                case oB.f.NormalKind:
                case oB.f.TangentKind:
                  (0, rd.g)(lB, dB, yB, pB, JB, YB, gB, (BB => {
                    BB[0] = -BB[0]
                  }))
              }
            }
            TB.convertedToRightHandedBuffers.set(JB, lB)
          }
          const YB = this._bufferManager.createBufferView(lB, pB);
          TB.setVertexBufferView(JB, YB);
          const gB = new Map;
          for (const TB of yB) {
            const BB = VB.get(TB),
              {
                kind: dB,
                totalVertices: yB
              } = Xd(TB, BB);
            switch (dB) {
              case oB.f.MatricesIndicesKind:
              case oB.f.MatricesIndicesExtraKind:
                if (TB.type == oB.f.FLOAT) {
                  const BB = TB.getFloatData(yB);
                  null !== BB && gB.set(TB, BB)
                }
            }
          }
          0 !== gB.size && wB.b.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const kB = Array.from(gB.keys());
          for (const dB of kB) {
            const BB = gB.get(dB);
            if (!BB) continue;
            const VB = BB.some((BB => BB >= 256)),
              yB = new(VB ? Uint16Array : Uint8Array)(BB.length);
            for (let TB = 0; TB < BB.length; TB++) yB[TB] = BB[TB];
            const pB = this._bufferManager.createBufferView(yB, 4 * (VB ? 2 : 1));
            TB.setRemappedBufferView(JB, dB, pB)
          }
        }
        const lB = Array.from(yB.keys());
        for (const JB of lB) {
          const BB = yB.get(JB);
          if (!BB) continue;
          const dB = OV(JB, BB[0], this._bufferManager, this._bufferViews, this._accessors, TB.convertToRightHanded);
          for (const VB of BB) TB.bindMorphDataToMesh(VB, dB)
        }
      }
      async _exportNodeAsync(BB, TB, dB) {
        let VB = this._nodeMap.get(BB);
        if (void 0 !== VB) return void(TB.includes(VB) || TB.push(VB));
        const yB = await this._createNodeAsync(BB, dB);
        if (yB) {
          VB = this._nodes.length, this._nodes.push(yB), this._nodeMap.set(BB, VB), dB.pushExportedNode(BB), TB.push(VB);
          const pB = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            lB = [];
          this._babylonScene.animationGroups.length || (LV._CreateMorphTargetAnimationFromMorphTargetAnimations(BB, pB, lB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, dB.convertToRightHanded, this._options.shouldExportAnimation), BB.animations.length && LV._CreateNodeAnimationFromNodeAnimations(BB, pB, lB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, dB.convertToRightHanded, this._options.shouldExportAnimation)), pB.channels.length && pB.samplers.length && this._animations.push(pB), lB.forEach((BB => {
            BB.channels.length && BB.samplers.length && this._animations.push(BB)
          }))
        }
        const pB = yB ? [] : TB;
        for (const lB of BB.getChildren()) await this._exportNodeAsync(lB, pB, dB);
        yB && pB.length && (yB.children = pB)
      }
      async _createNodeAsync(BB, TB) {
        if (!this._shouldExportNode(BB)) return null;
        const dB = {};
        if (BB.name && (dB.name = BB.name), BB.metadata) {
          const TB = this._options.metadataSelector(BB.metadata);
          TB && (dB.extras = TB)
        }
        if (BB instanceof kB.c && (this._setNodeTransformation(dB, BB, TB.convertToRightHanded), BB instanceof LB.e)) {
          const VB = BB instanceof OB.e ? BB.myB : BB;
          if (VB.oN && VB.oN.length > 0 && (dB.mesh = await this._exportMeshAsync(VB, TB)), BB.skeleton) {
            const TB = this._skinMap.get(BB.skeleton);
            void 0 !== TB && (void 0 === this._nodesSkinMap.get(TB) && this._nodesSkinMap.set(TB, []), this._nodesSkinMap.get(TB)?.push(dB))
          }
        }
        if (BB instanceof Id.h) {
          const VB = this._camerasMap.get(BB);
          if (VB) {
            void 0 === this._nodesCameraMap.get(VB) && this._nodesCameraMap.set(VB, []), this._setCameraTransformation(dB, BB, TB.convertToRightHanded);
            const yB = BB.parent;
            if (null !== yB && Ad(BB, yB)) {
              const BB = this._nodeMap.get(yB);
              if (void 0 !== BB) {
                const TB = this._nodes[BB];
                return jd(dB, TB), this._nodesCameraMap.get(VB)?.push(TB), null
              }
            }
            this._nodesCameraMap.get(VB)?.push(dB)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", dB, BB, this._nodeMap, TB.convertToRightHanded) ? dB : (wB.b.Warn(`Not exporting node ${BB.name}`), null)
      }
      _exportIndices(BB, TB, dB, VB, yB, lB, JB, YB, gB) {
        let oB = null;
        gB.mode = function(BB) {
          switch (BB) {
            case pB.b.TriangleFillMode:
              return 4;
            case pB.b.TriangleStripDrawMode:
              return 5;
            case pB.b.TriangleFanDrawMode:
              return 6;
            case pB.b.PointListDrawMode:
            case pB.b.PointFillMode:
              return 0;
            case pB.b.LineLoopDrawMode:
              return 2;
            case pB.b.LineListDrawMode:
              return 1;
            case pB.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${BB}`)
        }(lB);
        const kB = JB !== pB.b.CounterClockWiseSideOrientation && function(BB) {
          switch (BB) {
            case pB.b.TriangleFillMode:
            case pB.b.TriangleStripDrawMode:
            case pB.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(lB);
        if (kB) {
          if (lB === pB.b.TriangleStripDrawMode || lB === pB.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const JB = TB ? new Uint32Array(VB) : new Uint16Array(VB);
          if (BB)
            for (let TB = 0; TB + 2 < VB; TB += 3) JB[TB] = BB[dB + TB] + yB, JB[TB + 1] = BB[dB + TB + 2] + yB, JB[TB + 2] = BB[dB + TB + 1] + yB;
          else
            for (let BB = 0; BB + 2 < VB; BB += 3) JB[BB] = BB, JB[BB + 1] = BB + 2, JB[BB + 2] = BB + 1;
          oB = JB
        } else if (BB && 0 !== yB) {
          const pB = TB ? new Uint32Array(VB) : new Uint16Array(VB);
          for (let TB = 0; TB < VB; TB++) pB[TB] = BB[dB + TB] + yB;
          oB = pB
        } else BB && (oB = function(BB, TB, dB, VB) {
          let yB = BB;
          return 0 === TB && dB === BB.length || (yB = Array.isArray(BB) ? BB.slice(TB, TB + dB) : BB.subarray(TB, TB + dB)), yB instanceof Int32Array ? new Uint32Array(yB.buffer, yB.byteOffset, yB.length) : Array.isArray(yB) ? VB ? new Uint32Array(yB) : new Uint16Array(yB) : yB
        }(BB, dB, VB, TB));
        if (oB) {
          let pB = YB.getIndicesAccessor(BB, dB, VB, yB, kB);
          if (void 0 === pB) {
            const lB = this._bufferManager.createBufferView(oB),
              JB = TB ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(lB, "SCALAR", JB, VB, 0)), pB = this._accessors.length - 1, YB.setIndicesAccessor(BB, dB, VB, yB, kB, pB)
          }
          gB.indices = pB
        }
      }
      _exportVertexBuffer(BB, TB, dB, VB, yB, pB) {
        const lB = BB.getKind();
        if (!hd(lB)) return;
        if (lB.startsWith("uv") && !this._options.exportUnusedUVs && (!TB || !this._materialNeedsUVsSet.has(TB))) return;
        let JB = yB.getVertexAccessor(BB, dB, VB);
        if (void 0 === JB) {
          const TB = yB.convertedToRightHandedBuffers.get(BB._buffer) || BB._buffer.getData(),
            pB = lB === oB.f.PositionKind ? function(BB, TB, dB, VB) {
              const {
                byteOffset: yB,
                byteStride: pB,
                type: lB,
                normalized: JB
              } = TB, YB = TB.getSize(), gB = new Array(YB).fill(1 / 0), oB = new Array(YB).fill(-1 / 0);
              return (0, rd.g)(BB, yB + dB * pB, pB, YB, lB, VB * YB, JB, (BB => {
                for (let TB = 0; TB < YB; TB++) gB[TB] = Math.min(gB[TB], BB[TB]), oB[TB] = Math.max(oB[TB], BB[TB])
              })), {
                min: gB,
                max: oB
              }
            }(TB, BB, dB, VB) : void 0,
            YB = (lB === oB.f.MatricesIndicesKind || lB === oB.f.MatricesIndicesExtraKind) && BB.type === oB.f.FLOAT,
            gB = YB ? oB.f.UNSIGNED_BYTE : BB.type,
            kB = YB ? void 0 : BB.normalized,
            LB = YB ? yB.getRemappedBufferView(BB._buffer, BB) : yB.getVertexBufferView(BB._buffer),
            OB = BB.byteOffset + dB * BB.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(LB, function(BB, TB) {
            if (BB == oB.f.ColorKind) return TB ? "VEC4" : "VEC3";
            switch (BB) {
              case oB.f.PositionKind:
              case oB.f.NormalKind:
                return "VEC3";
              case oB.f.TangentKind:
              case oB.f.MatricesIndicesKind:
              case oB.f.MatricesIndicesExtraKind:
              case oB.f.MatricesWeightsKind:
              case oB.f.MatricesWeightsExtraKind:
                return "VEC4";
              case oB.f.UVKind:
              case oB.f.UV2Kind:
              case oB.f.UV3Kind:
              case oB.f.UV4Kind:
              case oB.f.UV5Kind:
              case oB.f.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${BB}`)
          }(lB, yB.hasVertexColorAlpha(BB)), gB, VB, OB, pB, kB)), JB = this._accessors.length - 1, yB.setVertexAccessor(BB, dB, VB, JB)
        }
        pB.attributes[function(BB) {
          switch (BB) {
            case oB.f.PositionKind:
              return "POSITION";
            case oB.f.NormalKind:
              return "NORMAL";
            case oB.f.TangentKind:
              return "TANGENT";
            case oB.f.ColorKind:
              return "COLOR_0";
            case oB.f.UVKind:
              return "TEXCOORD_0";
            case oB.f.UV2Kind:
              return "TEXCOORD_1";
            case oB.f.UV3Kind:
              return "TEXCOORD_2";
            case oB.f.UV4Kind:
              return "TEXCOORD_3";
            case oB.f.UV5Kind:
              return "TEXCOORD_4";
            case oB.f.UV6Kind:
              return "TEXCOORD_5";
            case oB.f.MatricesIndicesKind:
              return "JOINTS_0";
            case oB.f.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case oB.f.MatricesWeightsKind:
              return "WEIGHTS_0";
            case oB.f.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${BB}`)
        }(lB)] = JB
      }
      async _exportMaterialAsync(BB, TB, dB, VB) {
        let yB = this._materialMap.get(BB);
        if (void 0 === yB) {
          const VB = TB && Object.keys(TB).some((BB => BB.startsWith("uv")));
          if ((BB = BB instanceof pV.b ? BB.yBB[dB.materialIndex] : BB) instanceof tT) yB = await this._materialExporter.exportPBRMaterialAsync(BB, VB);
          else if (BB instanceof lV.StandardMaterial) yB = await this._materialExporter.exportStandardMaterialAsync(BB, VB);
          else {
            if (!(BB instanceof nT)) return void wB.b.Warn(`Unsupported material '${BB.name}' with type ${BB.getClassName()}`);
            yB = await this._materialExporter.exportOpenPBRMaterialAsync(BB, VB)
          }
          this._materialMap.set(BB, yB)
        }
        VB.material = yB
      }
      async _exportMeshAsync(BB, TB) {
        let dB = TB.getMesh(BB);
        if (void 0 !== dB) return dB;
        const VB = {
          primitives: []
        };
        dB = this._meshes.length, this._meshes.push(VB), TB.setMesh(BB, dB);
        const yB = BB.isUnIndexed ? null : BB.elB(),
          lB = BB.geometry?.getVertexBuffers(),
          JB = TB.getMorphTargetsFromMesh(BB),
          YB = BB instanceof DV.c,
          gB = BB instanceof IV,
          oB = BB.oN;
        if (lB && oB && oB.length > 0)
          for (const kB of oB) {
            const dB = {
                attributes: {}
              },
              oB = kB.XD() || this._babylonScene.defaultMaterial;
            if (gB) {
              const TB = {
                  name: oB.name
                },
                VB = BB,
                yB = HB.Color3.White(),
                pB = VB.material?.alpha ?? 1,
                lB = VB.greasedLineMaterial?.color ?? yB;
              (!lB.equalsWithEpsilon(yB, cd.b) || pB < 1) && (TB.pbrMetallicRoughness = {
                baseColorFactor: [...lB.FVB(), pB]
              }), this._materials.push(TB), dB.material = this._materials.length - 1
            } else if (YB) {
              const TB = {
                  name: oB.name
                },
                VB = BB;
              (!VB.color.equalsWithEpsilon(HB.Color3.White(), cd.b) || VB.alpha < 1) && (TB.pbrMetallicRoughness = {
                baseColorFactor: [...VB.color.FVB(), VB.alpha]
              }), this._materials.push(TB), dB.material = this._materials.length - 1
            } else await this._exportMaterialAsync(oB, lB, kB, dB);
            const LB = YB || gB ? pB.b.LineListDrawMode : BB.overrideRenderingFillMode ?? oB.fillMode;
            let OB = oB._getEffectiveOrientation(BB);
            TB.wasAddedByNoopNode && !BB.jU().useRightHandedSystem && (OB = OB === pB.b.ClockWiseSideOrientation ? pB.b.CounterClockWiseSideOrientation : pB.b.ClockWiseSideOrientation), this._exportIndices(yB, yB ? (0, rd.c)(yB, kB.indexCount, kB.indexStart, kB.verticesStart) : kB.verticesCount > 65535, yB ? kB.indexStart : kB.verticesStart, yB ? kB.indexCount : kB.verticesCount, -kB.verticesStart, LB, OB, TB, dB);
            for (const BB of Object.values(lB)) this._exportVertexBuffer(BB, oB, kB.verticesStart, kB.verticesCount, TB, dB);
            if (JB) {
              dB.targets = [];
              for (const BB of JB) dB.targets.push(BB.attributes)
            }
            VB.primitives.push(dB), this._extensionsPostExportMeshPrimitive(dB)
          }
        if (JB) {
          VB.weights = [], VB.extras || (VB.extras = {}), VB.extras.targetNames = [];
          for (const BB of JB) VB.weights.push(BB.influence), VB.extras.targetNames.push(BB.name)
        }
        return dB
      }
    }
    SV._ExtensionNames = new Array, SV._ExtensionFactories = {}, SV._ExtensionOrders = {};
    class PV {
      static async GLTFAsync(BB, TB, dB) {
        dB && dB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const VB = new SV(BB, dB),
          yB = await VB.generateGLTFAsync(TB.replace(/\.[^/.]+$/, ""));
        return VB.dispose(), yB
      }
      static async GLBAsync(BB, TB, dB) {
        dB && dB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const VB = new SV(BB, dB),
          yB = await VB.generateGLBAsync(TB.replace(/\.[^/.]+$/, ""));
        return VB.dispose(), yB
      }
    }
    const QV = "EXT_mesh_gpu_instancing";

    function RV(BB, TB) {
      const dB = new Float32Array(3 * TB);
      for (let VB = 0; VB < TB; VB++) dB[3 * VB + 0] = BB[4 * VB + 0], dB[3 * VB + 1] = BB[4 * VB + 1], dB[3 * VB + 2] = BB[4 * VB + 2];
      return dB
    }
    class aV {
      constructor(BB) {
        this.name = QV, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(BB, TB, dB, VB, yB, pB) {
        return await new Promise((BB => {
          if (TB && dB instanceof fV.e && dB.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const BB = RB.p.Zero(),
              VB = RB.f.Identity(),
              lB = RB.p.One(),
              JB = dB.thinInstanceGetWorldMatrices(),
              YB = RB.j.RD[2],
              gB = RB.j.Quaternion[1],
              oB = RB.j.RD[3];
            let kB = !1,
              LB = !1,
              OB = !1;
            const DB = new Float32Array(3 * dB.K9),
              uB = new Float32Array(4 * dB.K9),
              HB = new Float32Array(3 * dB.K9);
            let EB = 0;
            for (const TB of JB) TB.decompose(oB, gB, YB), yB && (Gd(YB), qd(gB)), DB.set(YB.FVB(), 3 * EB), uB.set(gB.normalize().FVB(), 4 * EB), HB.set(oB.FVB(), 3 * EB), kB = kB || !YB.equalsWithEpsilon(BB), LB = LB || !gB.equalsWithEpsilon(VB), OB = OB || !oB.equalsWithEpsilon(lB), EB++;
            const vB = {
              attributes: {}
            };
            kB && (vB.attributes.TRANSLATION = this._buildAccessor(DB, "VEC3", dB.K9, pB)), LB && (vB.attributes.ROTATION = this._buildAccessor(uB, "VEC4", dB.K9, pB)), OB && (vB.attributes.SCALE = this._buildAccessor(HB, "VEC3", dB.K9, pB));
            let mB = dB._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (mB) {
              const BB = dB.K9,
                TB = "VEC3";
              dB.hasVertexAlpha && mB.length === 4 * BB ? (this._instanceColorWarned || (wB.b.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), mB = RV(mB, BB)) : mB.length === 4 * BB && (mB = RV(mB, BB)), mB.length === 3 * BB && (vB.attributes._COLOR_0 = this._buildAccessor(mB, TB, BB, pB))
            }
            TB.extensions = TB.extensions || {}, TB.extensions[QV] = vB
          }
          BB(TB)
        }))
      }
      _buildAccessor(BB, TB, dB, VB) {
        const yB = VB.createBufferView(BB),
          pB = VB.createAccessor(yB, TB, 5126, dB);
        return this._exporter._accessors.push(pB), this._exporter._accessors.length - 1
      }
    }
    let ZV = !1;

    function XV() {
      ZV || (ZV = !0, SV.RegisterExtension(QV, (BB => new aV(BB))))
    }
    dB(39222);
    XV();
    var WV = dB(40546);

    function hV(BB, TB, dB, VB) {
      const yB = BB;
      let pB = null,
        lB = null,
        JB = null,
        YB = null;
      const gB = {},
        oB = TB.find((BB => "POSITION" === BB.dracoName));
      if (!oB) throw new Error("Draco: Missing position attribute for encoding.");
      if (!dB) {
        const BB = oB.data.length / oB.size;
        dB = new(BB > 65535 ? Uint32Array : Uint16Array)(BB);
        for (let TB = 0; TB < BB; TB++) dB[TB] = TB
      }
      try {
        pB = new yB.Encoder, lB = new yB.MeshBuilder, JB = new yB.Mesh, lB.AddFacesToMesh(JB, dB.length / 3, dB);
        const BB = new Map([
          [Float32Array, (BB, TB, dB, VB, yB, pB) => BB.AddFloatAttribute(TB, dB, VB, yB, pB)],
          [Uint32Array, (BB, TB, dB, VB, yB, pB) => BB.AddUInt32Attribute(TB, dB, VB, yB, pB)],
          [Uint16Array, (BB, TB, dB, VB, yB, pB) => BB.AddUInt16Attribute(TB, dB, VB, yB, pB)],
          [Uint8Array, (BB, TB, dB, VB, yB, pB) => BB.AddUInt8Attribute(TB, dB, VB, yB, pB)],
          [Int32Array, (BB, TB, dB, VB, yB, pB) => BB.AddInt32Attribute(TB, dB, VB, yB, pB)],
          [Int16Array, (BB, TB, dB, VB, yB, pB) => BB.AddInt16Attribute(TB, dB, VB, yB, pB)],
          [Int8Array, (BB, TB, dB, VB, yB, pB) => BB.AddInt8Attribute(TB, dB, VB, yB, pB)]
        ]);
        for (const dB of TB) {
          dB.data instanceof Uint8ClampedArray && (dB.data = new Uint8Array(dB.data));
          const TB = BB.get(dB.data.constructor),
            YB = dB.data.length / dB.size;
          gB[dB.kind] = TB(lB, JB, yB[dB.dracoName], YB, dB.size, dB.data), VB.quantizationBits && VB.quantizationBits[dB.dracoName] && pB.SetAttributeQuantization(yB[dB.dracoName], VB.quantizationBits[dB.dracoName])
        }
        VB.method && pB.SetEncodingMethod(yB[VB.method]), void 0 !== VB.encodeSpeed && void 0 !== VB.decodeSpeed && pB.SetSpeedOptions(VB.encodeSpeed, VB.decodeSpeed), YB = new yB.DracoInt8Array;
        const oB = pB.EncodeMeshToDracoBuffer(JB, YB);
        if (oB <= 0) throw new Error("Draco: Failed to encode.");
        const kB = new Int8Array(oB);
        for (let TB = 0; TB < oB; TB++) kB[TB] = YB.GetValue(TB);
        return {
          data: kB,
          attributeIds: gB
        }
      } finally {
        JB && yB.destroy(JB), lB && yB.destroy(lB), pB && yB.destroy(pB), YB && yB.destroy(YB)
      }
    }

    function CV() {
      let BB;
      onmessage = TB => {
        const dB = TB.data;
        switch (dB.id) {
          case "init": {
            dB.url && importScripts(dB.url);
            const TB = dB.wasmBinary ? {
              wasmBinary: dB.wasmBinary
            } : {};
            BB = DracoEncoderModule(TB), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!BB) throw new Error("Draco: Encoder module is not available.");
            BB.then((BB => {
              const TB = hV(BB, dB.attributes, dB.indices, dB.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: TB
              }, TB ? [TB.data.buffer] : void 0)
            })).catch((BB => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: BB.message
              })
            }))
        }
      }
    }
    class GV {
      constructor(BB) {
        if (BB.workerPool) return void(this._workerPoolPromise = Promise.resolve(BB.workerPool));
        const TB = BB.wasmBinary,
          dB = BB.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          VB = dB && "function" === typeof Worker && "function" === typeof URL,
          yB = VB || !BB.jsModule,
          pB = BB.wasmUrl && BB.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: yB ? sT.h.GetBabylonScriptURL(BB.wasmUrl, !0) : "",
            wasmBinaryPromise: TB ? Promise.resolve(TB) : sT.h.LoadFileAsync(sT.h.GetBabylonScriptURL(BB.wasmBinaryUrl, !0))
          } : {
            url: yB ? sT.h.GetBabylonScriptURL(BB.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        VB ? this._workerPoolPromise = pB.wasmBinaryPromise.then((BB => {
          const TB = this._getWorkerContent(),
            VB = URL.createObjectURL(new Blob([TB], {
              type: "application/javascript"
            }));
          return new WV.c(dB, (() => async function(BB, TB, dB) {
            return await new Promise(((VB, yB) => {
              const pB = TB => {
                  BB.removeEventListener("error", pB), BB.removeEventListener("message", lB), yB(TB)
                },
                lB = TB => {
                  "initDone" === TB.data.id && (BB.removeEventListener("error", pB), BB.removeEventListener("message", lB), VB(BB))
                };
              if (BB.addEventListener("error", pB), BB.addEventListener("message", lB), TB) {
                const VB = TB.slice(0);
                BB.postMessage({
                  id: "init",
                  url: dB,
                  wasmBinary: VB
                }, [VB])
              } else BB.postMessage({
                id: "init",
                url: dB
              })
            }))
          }(new Worker(VB), BB, pB.url)))
        })) : this._modulePromise = pB.wasmBinaryPromise.then((async TB => {
          if (!this._isModuleAvailable() && !BB.jsModule) {
            if (!pB.url) throw new Error("Draco codec module is not available");
            await sT.h.LoadBabylonScriptAsync(pB.url)
          }
          return await this._createModuleAsync(TB, BB.jsModule)
        }))
      }
      async whenReadyAsync() {
        this._workerPoolPromise ? await this._workerPoolPromise : this._modulePromise && await this._modulePromise
      }
      dispose() {
        this._workerPoolPromise && this._workerPoolPromise.then((BB => {
          BB.dispose()
        })), delete this._workerPoolPromise, delete this._modulePromise
      }
    }

    function qV() {
      const BB = BB => !!BB && "object" === typeof BB;
      for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
      return dB.reduce(((TB, dB) => {
        const VB = Object.keys(dB);
        for (const yB of VB) {
          const VB = TB[yB],
            pB = dB[yB];
          Array.isArray(VB) && Array.isArray(pB) ? TB[yB] = VB.concat(pB) : BB(VB) && BB(pB) ? TB[yB] = qV(VB, pB) : TB[yB] = pB
        }
        return TB
      }), {})
    }

    function xV(BB) {
      return BB === aB.m.PositionKind ? "POSITION" : BB === aB.m.NormalKind ? "NORMAL" : BB === aB.m.ColorKind ? "COLOR" : BB.startsWith(aB.m.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const jV = {
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
    class AV extends GV {
      static get DefaultAvailable() {
        return !!((BB = AV.DefaultConfiguration).wasmUrl && (BB.wasmBinary || BB.wasmBinaryUrl) && "object" === typeof WebAssembly || BB.fallbackUrl);
        var BB
      }
      static get Default() {
        return AV._Default ?? (AV._Default = new AV), AV._Default
      }
      static ResetDefault(BB) {
        AV._Default && (BB || AV._Default.dispose(), AV._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(BB, TB) {
        return {
          module: await (TB || DracoEncoderModule)({
            wasmBinary: BB
          })
        }
      }
      _getWorkerContent() {
        return `${hV}(${CV})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AV.DefaultConfiguration)
      }
      async _encodeAsync(BB, TB, dB) {
        const VB = dB ? qV(jV, dB) : jV;
        if (this._workerPoolPromise) {
          const dB = await this._workerPoolPromise;
          return await new Promise(((yB, pB) => {
            dB.push(((dB, lB) => {
              const JB = BB => {
                  dB.removeEventListener("error", JB), dB.removeEventListener("message", YB), pB(BB), lB()
                },
                YB = BB => {
                  "encodeMeshSuccess" === BB.data.id ? (dB.removeEventListener("error", JB), dB.removeEventListener("message", YB), yB(BB.data.encodedMeshData), lB()) : "encodeMeshError" === BB.data.id && (dB.removeEventListener("error", JB), dB.removeEventListener("message", YB), pB(new Error(BB.data.errorMessage)), lB())
                };
              dB.addEventListener("error", JB), dB.addEventListener("message", YB);
              const gB = [];
              for (const TB of BB) gB.push(TB.data.buffer);
              TB && gB.push(TB.buffer), dB.postMessage({
                id: "encodeMesh",
                attributes: BB,
                indices: TB,
                options: VB
              }, gB)
            }))
          }))
        }
        if (this._modulePromise) {
          return hV((await this._modulePromise).module, BB, TB, VB)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(BB, TB) {
        if (0 == BB.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        BB instanceof fV.e && BB.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === TB?.method && (wB.b.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), TB.method = "MESH_SEQUENTIAL_ENCODING");
        const dB = function(BB) {
            let TB = BB.elB(void 0, !0);
            return !TB || TB instanceof Uint32Array || TB instanceof Uint16Array || (TB = ((0, rd.c)(TB, TB.length) ? Uint32Array : Uint16Array).from(TB)), TB
          }(BB),
          VB = function(BB, TB) {
            const dB = [];
            for (const VB of BB.getVerticesDataKinds()) {
              if (TB?.includes(VB)) {
                if (VB === aB.m.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const yB = BB.getVertexBuffer(VB),
                pB = yB.getSize(),
                lB = (0, rd.s)(yB.getData(), pB, yB.type, yB.byteOffset, yB.byteStride, BB.getTotalVertices(), !0);
              dB.push({
                kind: VB,
                dracoName: xV(VB),
                size: pB,
                data: lB
              })
            }
            return dB
          }(BB, TB?.excludedAttributes);
        return await this._encodeAsync(VB, dB, TB)
      }
    }
    AV.DefaultConfiguration = {
      wasmUrl: `${sT.h._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${sT.h._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${sT.h._DefaultCdnUrl}/draco_encoder.js`
    }, AV._Default = null;
    const bV = "KHR_draco_mesh_compression";
    class nV {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = bV, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === BB.options.meshCompressionMethod && AV.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(BB, TB, dB) {
        if (!this.enabled) return;
        if (4 !== BB.mode && 5 !== BB.mode) return void wB.b.Warn("Cannot compress primitive with mode " + BB.mode + ".");
        const VB = [],
          yB = [];
        let pB = null;
        if (void 0 !== BB.indices) {
          const lB = dB[BB.indices],
            JB = TB.getBufferView(lB);
          pB = TB.getData(JB).slice(), VB.push(JB), yB.push(lB)
        }
        const lB = [];
        for (const [oB, kB] of Object.entries(BB.attributes)) {
          const BB = dB[kB],
            pB = TB.getBufferView(BB),
            YB = Wd(BB.type),
            gB = (0, rd.s)(TB.getData(pB), YB, BB.componentType, BB.byteOffset || 0, pB.byteStride || (0, rd.p)(BB.componentType) * YB, BB.count, !0);
          lB.push({
            kind: oB,
            dracoName: (JB = oB, "POSITION" === JB ? "POSITION" : "NORMAL" === JB ? "NORMAL" : JB.startsWith("COLOR") ? "COLOR" : JB.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Wd(BB.type),
            data: gB
          }), VB.push(pB), yB.push(BB)
        }
        var JB;
        const YB = {
            method: BB.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          gB = AV.Default._encodeAsync(lB, pB, YB).then((dB => {
            const pB = {
                bufferView: -1,
                attributes: dB.attributeIds
              },
              lB = TB.createBufferView(dB.data);
            TB.setBufferView(pB, lB);
            for (const BB of VB) this._bufferViewsUsed.add(BB);
            for (const BB of yB) this._accessorsUsed.add(BB);
            BB.extensions || (BB.extensions = {}), BB.extensions[bV] = pB
          })).catch((BB => {
            wB.b.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + BB.message)
          }));
        this._encodePromises.push(gB), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(BB) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((TB => {
          BB.getPropertiesWithBufferView(TB).every((BB => this._accessorsUsed.has(BB))) && BB.removeBufferView(TB)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let eV = !1;

    function By() {
      eV || (eV = !0, SV.RegisterExtension(bV, (BB => new nV(BB))))
    }
    By();
    var Ty = dB(40298);
    const dy = "KHR_lights_punctual",
      Vy = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      yy = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      py = RB.p.Backward();
    class ly {
      constructor(BB) {
        this.name = dy, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[dy] = this._lights
      }
      async postExportNodeAsync(BB, TB, dB, VB, yB) {
        return await new Promise((pB => {
          if (!(dB instanceof kV.c)) return void pB(TB);
          const lB = dB.getTypeID() == kV.c.LIGHTTYPEID_POINTLIGHT ? "point" : dB.getTypeID() == kV.c.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : dB.getTypeID() == kV.c.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!lB || !(dB instanceof Ty.d)) return wB.b.Warn(`${BB}: Light ${dB.name} is not supported in ${dy}`), void pB(TB);
          if (dB.falloffType !== kV.c.FALLOFF_GLTF && wB.b.Warn(`${BB}: Light falloff for ${dB.name} does not match the ${dy} specification!`), !dB.position.dJB(0, 0, 0)) {
            const BB = RB.j.RD[0].bdB(dB.position);
            yB && Gd(BB), TB.translation = BB.FVB()
          }
          if ("point" !== lB) {
            const BB = dB.direction.normalizeToRef(RB.j.RD[0]);
            yB && Gd(BB);
            const VB = RB.f.FromUnitVectorsToRef(py, BB, RB.j.Quaternion[0]);
            RB.f.IsIdentity(VB) || (TB.rotation = VB.FVB())
          }
          const JB = {
            type: lB,
            name: dB.name,
            color: dB.diffuse.FVB(),
            intensity: dB.intensity,
            range: dB.range
          };
          if (nd(JB, Vy), "spot" === lB) {
            const BB = dB;
            JB.spot = {
              innerConeAngle: BB.innerAngle / 2,
              outerConeAngle: BB.angle / 2
            }, nd(JB.spot, yy)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(JB);
          const YB = {
              light: this._lights.lights.length - 1
            },
            gB = dB.parent;
          if (gB && Ad(dB, gB)) {
            const BB = VB.get(gB);
            if (BB) {
              const dB = this._exporter._nodes[BB];
              return jd(TB, dB), dB.extensions || (dB.extensions = {}), dB.extensions[dy] = YB, void pB(null)
            }
          }
          TB.extensions || (TB.extensions = {}), TB.extensions[dy] = YB, pB(TB)
        }))
      }
    }
    let Jy = !1;

    function Yy() {
      Jy || (Jy = !0, SV.RegisterExtension(dy, (BB => new ly(BB))))
    }
    Yy();
    const gy = "KHR_interactivity";
    class oy {
      constructor(BB) {
        this._exporter = BB, this.name = gy, this.enabled = !!BB.options.khrInteractivity, this.required = BB.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var BB, TB, dB;
        const VB = this._exporter.options.khrInteractivity;
        if (!VB) return;
        const yB = VB.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: BB => this._exporter._getNodeIndex(BB),
          getAnimationIndex: BB => this._exporter._getAnimationIndex(BB),
          getCameraIndex: BB => this._exporter._getCameraIndex(BB),
          getMaterialIndex: BB => this._exporter._getMaterialIndex(BB),
          getRootIndex: (BB, TB) => this._exporter._getRootIndex(BB, TB),
          setNodeExtension: (BB, TB, dB) => this._exporter._setNodeExtension(BB, TB, dB)
        });
        this._exporter._glTF.extensions[gy] = yB;
        for (const pB of VB.additionalExtensionsUsed)(BB = this._exporter._glTF).extensionsUsed || (BB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(pB) && this._exporter._glTF.extensionsUsed.push(pB);
        for (const pB of VB.additionalExtensionsRequired)(TB = this._exporter._glTF).extensionsUsed || (TB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(pB) && this._exporter._glTF.extensionsUsed.push(pB), (dB = this._exporter._glTF).extensionsRequired || (dB.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(pB) && this._exporter._glTF.extensionsRequired.push(pB)
      }
    }
    let ky = !1;

    function Ly() {
      ky || (ky = !0, SV.RegisterExtension(gy, (BB => new oy(BB)), 200))
    }
    Ly();
    const Oy = "EXT_lights_area",
      Dy = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      uy = {
        aspect: 1
      },
      Hy = RB.p.Backward();
    class Ey {
      constructor(BB) {
        this.name = Oy, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[Oy] = this._lights
      }
      async postExportNodeAsync(BB, TB, dB, VB, yB) {
        return await new Promise((pB => {
          if (!(dB instanceof kV.c)) return void pB(TB);
          const lB = dB.getTypeID() == kV.c.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!lB) return wB.b.Warn(`${BB}: Light ${dB.name} is not supported in ${Oy}`), void pB(TB);
          const JB = dB;
          if (JB.falloffType !== kV.c.FALLOFF_GLTF && wB.b.Warn(`${BB}: Light falloff for ${dB.name} does not match the ${Oy} specification!`), !JB.position.dJB(0, 0, 0)) {
            const BB = RB.j.RD[0].bdB(JB.position);
            yB && Gd(BB), TB.translation = BB.FVB()
          }
          const YB = RB.p.Forward();
          yB && Gd(YB);
          const gB = RB.f.FromUnitVectorsToRef(Hy, YB, RB.j.Quaternion[0]);
          RB.f.IsIdentity(gB) || (TB.rotation = gB.FVB());
          const oB = {
            type: lB,
            name: JB.name,
            color: JB.diffuse.FVB(),
            intensity: JB.intensity,
            size: JB.height,
            rect: {
              aspect: JB.width / JB.height
            }
          };
          nd(oB, Dy), oB.rect && nd(oB.rect, uy), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(oB);
          const kB = {
              light: this._lights.lights.length - 1
            },
            LB = dB.parent;
          if (LB && Ad(JB, LB)) {
            const BB = VB.get(LB);
            if (BB) {
              const dB = this._exporter._nodes[BB];
              return jd(TB, dB), dB.extensions || (dB.extensions = {}), dB.extensions[Oy] = kB, void pB(null)
            }
          }
          TB.extensions || (TB.extensions = {}), TB.extensions[Oy] = kB, pB(TB)
        }))
      }
    }
    let vy = !1;

    function my() {
      vy || (vy = !0, SV.RegisterExtension(Oy, (BB => new Ey(BB))))
    }
    my();
    const iy = "KHR_materials_anisotropy";
    class Ny {
      constructor(BB) {
        this.name = iy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof tT) {
          if (dB.anisotropy.isEnabled && !dB.anisotropy.legacy) return dB.anisotropy.texture && VB.push(dB.anisotropy.texture), VB
        } else if (dB instanceof nT && dB.specularRoughnessAnisotropy > 0) {
          const BB = function(BB) {
            const TB = BB.specularRoughnessAnisotropyTexture,
              dB = BB.geometryTangentTexture;
            return `${TB&&TB.getInternalTexture()?TB.getInternalTexture().uniqueId:"NoStrength"}_${dB&&dB.getInternalTexture()?dB.getInternalTexture().uniqueId:"NoTangent"}`
          }(dB);
          if (this._anisoTexturesMap[BB]) VB.push(this._anisoTexturesMap[BB]);
          else {
            const TB = await async function(BB) {
              const TB = BB.jU(),
                dB = BB.specularRoughnessAnisotropyTexture,
                VB = BB.geometryTangentTexture;
              return dB || VB ? await ld("AnisotropyTexture", gd(VB ? Jd(VB, 0) : Yd(1), VB ? Jd(VB, 1) : Yd(0), dB ? Jd(dB, 0) : Yd(1)), TB) : null
            }(dB);
            TB && (VB.push(TB), this._anisoTexturesMap[BB] = TB)
          }
          return VB
        }
        return []
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          var VB;
          if (dB instanceof tT) {
            if (!dB.anisotropy.isEnabled || dB.anisotropy.legacy) return void BB(TB);
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            const VB = this._exporter._materialExporter.getTextureInfo(dB.anisotropy.texture),
              yB = {
                anisotropyStrength: dB.anisotropy.intensity,
                anisotropyRotation: dB.anisotropy.angle,
                anisotropyTexture: VB ?? void 0
              };
            null !== yB.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[iy] = yB
          } else if (dB instanceof nT && dB.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            let yB = dB.specularRoughnessTexture;
            dB._useRoughnessFromMetallicTextureGreen && (yB = dB.baseMetalnessTexture);
            const pB = this._anisoTexturesMap[dB.id];
            if (!yB && !pB) {
              let VB = dB.specularRoughness,
                yB = dB.specularRoughnessAnisotropy;
              if (!dB._useGltfStyleAnisotropy) {
                const BB = function(BB, TB) {
                  const dB = BB * BB,
                    VB = dB * Math.sqrt(2 / (1 + (1 - TB) * (1 - TB))),
                    yB = (1 - TB) * VB;
                  return {
                    newBaseRoughness: Math.sqrt(yB),
                    newAnisotropyStrength: Math.min(Math.sqrt((VB - dB) / Math.max(1 - dB, 1e-4)), 1)
                  }
                }(dB.specularRoughness, dB.specularRoughnessAnisotropy);
                VB = BB.newBaseRoughness, yB = BB.newAnisotropyStrength
              }
              TB.pbrMetallicRoughness && (TB.pbrMetallicRoughness.roughnessFactor = VB);
              const pB = {
                anisotropyStrength: yB,
                anisotropyRotation: dB.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return TB.extensions[iy] = pB, BB(TB)
            }
            const lB = pB ? this._exporter._materialExporter.getTextureInfo(pB) : null,
              JB = {
                anisotropyStrength: dB.specularRoughnessAnisotropy,
                anisotropyRotation: dB.geometryTangentAngle,
                anisotropyTexture: lB || void 0,
                extensions: {}
              };
            dB._useGltfStyleAnisotropy || (TB.extensions.KHR_materials_openpbr = {}, (VB = this._exporter._glTF).extensionsUsed || (VB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[iy] = JB
          }
          BB(TB)
        }))
      }
    }
    let ty = !1;

    function fy() {
      ty || (ty = !0, SV.RegisterExtension(iy, (BB => new Ny(BB))))
    }
    fy();
    const sy = "KHR_materials_clearcoat";

    function My(BB, TB) {
      const dB = new FB.f(TB.name, TB.jU());
      return dB._texture = BB, dB.coordinatesIndex = TB.coordinatesIndex, TB instanceof FB.f && (dB.uOffset = TB.uOffset, dB.vOffset = TB.vOffset, dB.uScale = TB.uScale, dB.vScale = TB.vScale, dB.wAng = TB.wAng), dB.wrapU = TB.wrapU, dB.wrapV = TB.wrapV, dB
    }
    class zy {
      constructor(BB) {
        this.name = sy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
      }
      dispose() {
        for (const BB of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[BB].dispose()
        }
        this._mergedTexturesMap = {};
        for (const BB of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[BB].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof tT) {
          if (dB.clearCoat.isEnabled) return dB.clearCoat.texture && VB.push(dB.clearCoat.texture), !dB.clearCoat.useRoughnessFromMainTexture && dB.clearCoat.textureRoughness && VB.push(dB.clearCoat.textureRoughness), dB.clearCoat.bumpTexture && VB.push(dB.clearCoat.bumpTexture), VB
        } else if (dB instanceof nT && dB.coatWeight > 0) {
          let BB = !1;
          if (dB.coatWeightTexture ? dB.coatRoughnessTexture ? dB._useCoatRoughnessFromGreenChannel && dB.coatWeightTexture.getInternalTexture() === dB.coatRoughnessTexture.getInternalTexture() ? (VB.push(dB.coatWeightTexture), VB.push(dB.coatRoughnessTexture)) : BB = !0 : VB.push(dB.coatWeightTexture) : dB.coatRoughnessTexture && (dB._useCoatRoughnessFromGreenChannel ? VB.push(dB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const TB = BB.coatWeightTexture,
                dB = TB && TB.getInternalTexture() ? TB.getInternalTexture().uniqueId : "NoCoat",
                VB = BB.coatRoughnessTexture;
              return `${dB}_${VB&&VB.getInternalTexture()?VB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(dB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const TB = await async function(BB) {
                const TB = BB.jU(),
                  dB = BB.coatWeightTexture,
                  VB = BB.coatRoughnessTexture;
                return dB || VB ? (await ld("CoatTexture", gd(dB ? Jd(dB, 0) : Yd(1), VB ? Jd(VB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : Yd(1)), TB)).getInternalTexture() : null
              }(dB);
              TB && (this._cachedInternalTexturesMap[BB] = TB)
            }
            this._cachedInternalTexturesMap[BB] && (dB.coatWeightTexture && (this._mergedTexturesMap[dB.coatWeightTexture.uniqueId] = My(this._cachedInternalTexturesMap[BB], dB.coatWeightTexture), VB.push(this._mergedTexturesMap[dB.coatWeightTexture.uniqueId])), dB.coatRoughnessTexture && (this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId] = My(this._cachedInternalTexturesMap[BB], dB.coatRoughnessTexture), VB.push(this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId])))
          }
          return dB.geometryCoatNormalTexture && VB.push(dB.geometryCoatNormalTexture), VB
        }
        return []
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          if (dB instanceof tT) {
            if (!dB.clearCoat.isEnabled) return void BB(TB);
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            const VB = this._exporter._materialExporter.getTextureInfo(dB.clearCoat.texture);
            let yB;
            yB = dB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(dB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(dB.clearCoat.textureRoughness), dB.clearCoat.isTintEnabled && sT.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${dB.name}`), dB.clearCoat.remapF0OnInterfaceChange && sT.h.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${dB.name}`);
            const pB = this._exporter._materialExporter.getTextureInfo(dB.clearCoat.bumpTexture),
              lB = {
                clearcoatFactor: dB.clearCoat.intensity,
                clearcoatTexture: VB ?? void 0,
                clearcoatRoughnessFactor: dB.clearCoat.roughness,
                clearcoatRoughnessTexture: yB ?? void 0,
                clearcoatNormalTexture: pB ?? void 0
              };
            null === lB.clearcoatTexture && null === lB.clearcoatRoughnessTexture && null === lB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[sy] = lB
          } else if (dB instanceof nT) {
            if (0 == dB.coatWeight) return void BB(TB);
            let VB, yB, pB, lB;
            this._wasUsed = !0, TB.extensions = TB.extensions || {}, dB.coatWeightTexture && (VB = this._mergedTexturesMap[dB.coatWeightTexture.uniqueId], yB = this._exporter._materialExporter.getTextureInfo(VB)), dB.coatRoughnessTexture && (pB = this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId], lB = this._exporter._materialExporter.getTextureInfo(pB)), dB.coatColorTexture && sT.h.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${dB.name}`);
            const JB = this._exporter._materialExporter.getTextureInfo(dB.geometryCoatNormalTexture),
              YB = {
                clearcoatFactor: dB.coatWeight,
                clearcoatTexture: yB ?? void 0,
                clearcoatRoughnessFactor: dB.coatRoughness,
                clearcoatRoughnessTexture: lB ?? void 0,
                clearcoatNormalTexture: JB ?? void 0
              };
            null === YB.clearcoatTexture && null === YB.clearcoatRoughnessTexture && null === YB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[sy] = YB
          }
          BB(TB)
        }))
      }
    }
    let wy = !1;

    function Uy() {
      wy || (wy = !0, SV.RegisterExtension(sy, (BB => new zy(BB))))
    }
    Uy();
    const Fy = "KHR_materials_coat";

    function Ky(BB) {
      const TB = BB.coatRoughnessAnisotropyTexture,
        dB = BB.geometryCoatTangentTexture;
      return `${TB&&TB.getInternalTexture()?TB.getInternalTexture().uniqueId:"NoStrength"}_${dB&&dB.getInternalTexture()?dB.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function ry(BB, TB) {
      const dB = new FB.f(TB.name, TB.jU());
      return dB._texture = BB, dB.coordinatesIndex = TB.coordinatesIndex, TB instanceof FB.f && (dB.uOffset = TB.uOffset, dB.vOffset = TB.vOffset, dB.uScale = TB.uScale, dB.vScale = TB.vScale, dB.wAng = TB.wAng), dB.wrapU = TB.wrapU, dB.wrapV = TB.wrapV, dB
    }
    class Iy {
      constructor(BB) {
        this.name = Fy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
      }
      dispose() {
        for (const BB of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[BB].dispose()
        }
        this._mergedTexturesMap = {};
        for (const BB of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[BB].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof tT) {
          if (dB.clearCoat.isEnabled) return dB.clearCoat.texture && VB.push(dB.clearCoat.texture), !dB.clearCoat.useRoughnessFromMainTexture && dB.clearCoat.textureRoughness && VB.push(dB.clearCoat.textureRoughness), dB.clearCoat.bumpTexture && VB.push(dB.clearCoat.bumpTexture), dB.clearCoat.tintTexture && VB.push(dB.clearCoat.tintTexture), VB
        } else if (dB instanceof nT && dB.coatWeight > 0) {
          let BB = !1;
          if (dB.coatWeightTexture ? dB.coatRoughnessTexture ? dB._useCoatRoughnessFromGreenChannel && dB.coatWeightTexture.getInternalTexture() === dB.coatRoughnessTexture.getInternalTexture() ? (VB.push(dB.coatWeightTexture), VB.push(dB.coatRoughnessTexture)) : BB = !0 : VB.push(dB.coatWeightTexture) : dB.coatRoughnessTexture && (dB._useCoatRoughnessFromGreenChannel ? VB.push(dB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const TB = BB.coatWeightTexture,
                dB = TB && TB.getInternalTexture() ? TB.getInternalTexture().uniqueId : "NoCoat",
                VB = BB.coatRoughnessTexture;
              return `${dB}_${VB&&VB.getInternalTexture()?VB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(dB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const TB = await async function(BB) {
                const TB = BB.jU(),
                  dB = BB.coatWeightTexture,
                  VB = BB.coatRoughnessTexture;
                return dB || VB ? (await ld("CoatTexture", gd(dB ? Jd(dB, 0) : Yd(1), VB ? Jd(VB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : Yd(1)), TB)).getInternalTexture() : null
              }(dB);
              TB && (this._cachedInternalTexturesMap[BB] = TB)
            }
            this._cachedInternalTexturesMap[BB] && (dB.coatWeightTexture && (this._mergedTexturesMap[dB.coatWeightTexture.uniqueId] = ry(this._cachedInternalTexturesMap[BB], dB.coatWeightTexture), VB.push(this._mergedTexturesMap[dB.coatWeightTexture.uniqueId])), dB.coatRoughnessTexture && (this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId] = ry(this._cachedInternalTexturesMap[BB], dB.coatRoughnessTexture), VB.push(this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId])))
          }
          if (dB.geometryCoatNormalTexture && VB.push(dB.geometryCoatNormalTexture), dB.coatColorTexture && VB.push(dB.coatColorTexture), dB.coatRoughnessAnisotropy > 0) {
            const BB = Ky(dB);
            if (this._mergedTexturesMap[BB]) VB.push(this._mergedTexturesMap[BB]);
            else {
              const TB = await async function(BB) {
                const TB = BB.jU(),
                  dB = BB.coatRoughnessAnisotropyTexture,
                  VB = BB.geometryCoatTangentTexture;
                return dB || VB ? await ld("AnisotropyTexture", gd(VB ? Jd(VB, 0) : Yd(1), VB ? Jd(VB, 1) : Yd(0), dB ? Jd(dB, 0) : Yd(1)), TB) : null
              }(dB);
              TB && (VB.push(TB), this._mergedTexturesMap[BB] = TB)
            }
            return VB
          }
          return VB
        }
        return []
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          var VB;
          if (dB instanceof tT) {
            if (!dB.clearCoat.isEnabled) return void BB(TB);
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            const VB = this._exporter._materialExporter.getTextureInfo(dB.clearCoat.texture);
            let yB, pB;
            yB = dB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(dB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(dB.clearCoat.textureRoughness), dB.clearCoat.isTintEnabled && (pB = this._exporter._materialExporter.getTextureInfo(dB.clearCoat.tintTexture));
            const lB = this._exporter._materialExporter.getTextureInfo(dB.clearCoat.bumpTexture),
              JB = dB.clearCoat.indexOfRefraction,
              YB = {
                coatFactor: dB.clearCoat.intensity,
                coatTexture: VB ?? void 0,
                coatRoughnessFactor: dB.clearCoat.roughness,
                coatRoughnessTexture: yB ?? void 0,
                coatNormalTexture: lB ?? void 0,
                coatColorFactor: dB.clearCoat.tintColor.FVB(),
                coatColorTexture: pB ?? void 0,
                coatIor: 1.5 !== JB ? JB : void 0
              };
            null === YB.coatTexture && null === YB.coatRoughnessTexture && null === YB.coatRoughnessTexture && null === YB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Fy] = YB
          } else if (dB instanceof nT) {
            if (0 == dB.coatWeight) return void BB(TB);
            let yB, pB, lB, JB;
            this._wasUsed = !0, TB.extensions = TB.extensions || {}, dB.coatWeightTexture && (yB = this._mergedTexturesMap[dB.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[dB.coatWeightTexture.uniqueId] : dB.coatWeightTexture, pB = this._exporter._materialExporter.getTextureInfo(yB)), dB.coatRoughnessTexture && (lB = this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[dB.coatRoughnessTexture.uniqueId] : dB.coatRoughnessTexture, JB = this._exporter._materialExporter.getTextureInfo(lB));
            const YB = this._exporter._materialExporter.getTextureInfo(dB.geometryCoatNormalTexture),
              gB = this._exporter._materialExporter.getTextureInfo(dB.coatColorTexture),
              oB = dB.coatIor,
              kB = dB.coatDarkening,
              LB = dB.coatRoughnessTexture,
              OB = Ky(dB),
              DB = this._mergedTexturesMap[OB];
            let uB, HB = 0,
              EB = 0;
            if (dB.coatRoughnessAnisotropy > 0) {
              if (LB || DB) {
                const BB = DB ? this._exporter._materialExporter.getTextureInfo(DB) : null;
                HB = dB.coatRoughnessAnisotropy, EB = dB.geometryCoatTangentAngle, uB = BB || void 0
              } else {
                let BB = dB.coatRoughness,
                  VB = dB.coatRoughnessAnisotropy;
                if (!dB._useGltfStyleAnisotropy) {
                  const TB = function(BB, TB) {
                    const dB = BB * BB,
                      VB = dB * Math.sqrt(2 / (1 + (1 - TB) * (1 - TB))),
                      yB = (1 - TB) * VB;
                    return {
                      newBaseRoughness: Math.sqrt(yB),
                      newAnisotropyStrength: Math.min(Math.sqrt((VB - dB) / Math.max(1 - dB, 1e-4)), 1)
                    }
                  }(dB.coatRoughness, dB.coatRoughnessAnisotropy);
                  BB = TB.newBaseRoughness, VB = TB.newAnisotropyStrength
                }
                TB.pbrMetallicRoughness && (TB.pbrMetallicRoughness.roughnessFactor = BB), HB = VB, EB = dB.geometryCoatTangentAngle + .5 * Math.PI, uB = void 0
              }
              dB._useGltfStyleAnisotropy || (TB.extensions.KHR_materials_openpbr = {}, (VB = this._exporter._glTF).extensionsUsed || (VB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const vB = {
              coatFactor: dB.coatWeight,
              coatTexture: pB ?? void 0,
              coatRoughnessFactor: dB.coatRoughness,
              coatRoughnessTexture: JB ?? void 0,
              coatNormalTexture: YB ?? void 0,
              coatColorFactor: dB.coatColor.FVB(),
              coatColorTexture: gB ?? void 0,
              coatIor: 1.5 !== oB ? oB : void 0,
              coatDarkeningFactor: 1 !== kB ? kB : void 0,
              coatAnisotropyRotation: EB,
              coatAnisotropyStrength: HB,
              coatAnisotropyTexture: uB
            };
            null === vB.coatTexture && null === vB.coatRoughnessTexture && null === vB.coatRoughnessTexture && null === vB.coatAnisotropyTexture && null === vB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Fy] = vB
          }
          BB(TB)
        }))
      }
    }
    let cy = !1;

    function Sy() {
      cy || (cy = !0, SV.RegisterExtension(Fy, (BB => new Iy(BB))))
    }
    Sy();
    let Py = (() => {
      var BB, TB, dB, VB, yB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB, EB, vB, mB, iB, NB, tB, fB, sB, wB, UB, FB, KB, rB, IB, SB, PB, QB, RB, aB, ZB, XB, WB, hB, CB, qB, xB, jB, AB, bB, nB, eB, BT, TT, dT, VT, yT, pT, lT, JT, YT, gT, oT, kT, LT, OT, DT, uT, HT, ET, vT, mT;
      let iT, NT, sT, MT, zT, wT, UT, FT, KT, rT, IT, cT, ST, PT, QT, RT, aT, ZT, XT, WT, hT, CT, GT, qT, xT, jT, AT, bT, nT, eT, Bd, Td, dd, Vd, yd, pd, ld, Jd, Yd, gd, od, kd, Ld, Od, Dd, ud, Hd, Ed, vd, md, Nd, td, fd, sd, Md, zd, wd, Ud, Fd, Kd, rd, Id, cd, Sd, Pd, Qd, Rd, ad, Zd = tT,
        Xd = [],
        Wd = [],
        hd = [],
        Cd = [],
        Gd = [],
        qd = [],
        xd = [],
        jd = [],
        Ad = [],
        bd = [],
        nd = [],
        ed = [],
        BV = [],
        TV = [],
        dV = [],
        VV = [],
        yV = [],
        pV = [],
        lV = [],
        JV = [],
        YV = [],
        gV = [],
        oV = [],
        kV = [],
        LV = [],
        OV = [],
        DV = [],
        uV = [],
        HV = [],
        EV = [],
        vV = [],
        mV = [],
        iV = [],
        NV = [],
        tV = [],
        fV = [],
        sV = [],
        MV = [],
        zV = [],
        wV = [],
        UV = [],
        FV = [],
        KV = [],
        rV = [],
        IV = [],
        cV = [],
        SV = [],
        PV = [],
        QV = [],
        RV = [],
        aV = [],
        ZV = [],
        XV = [],
        WV = [],
        hV = [],
        CV = [],
        GV = [],
        qV = [],
        xV = [],
        jV = [],
        AV = [],
        bV = [],
        nV = [],
        eV = [],
        By = [],
        Ty = [],
        dy = [],
        Vy = [],
        yy = [],
        py = [],
        ly = [],
        Jy = [],
        Yy = [],
        gy = [],
        oy = [],
        ky = [],
        Ly = [],
        Oy = [],
        Dy = [],
        uy = [],
        Hy = [],
        Ey = [],
        vy = [],
        my = [],
        iy = [],
        Ny = [],
        ty = [],
        fy = [],
        sy = [],
        My = [],
        zy = [],
        wy = [],
        Uy = [],
        Fy = [],
        Ky = [],
        ry = [],
        Iy = [],
        cy = [],
        Sy = [],
        Py = [],
        Qy = [],
        Ry = [],
        ay = [],
        Zy = [],
        Xy = [],
        Wy = [],
        hy = [],
        Cy = [],
        Gy = [],
        qy = [],
        xy = [],
        jy = [],
        Ay = [],
        by = [],
        ny = [],
        ey = [],
        Bp = [],
        Tp = [],
        dp = [],
        Vp = [],
        yp = [],
        pp = [],
        lp = [],
        Jp = [],
        Yp = [],
        gp = [],
        op = [],
        kp = [],
        Lp = [],
        Op = [],
        Dp = [],
        Hp = [],
        Ep = [];
      return BB = class extends Zd {
        get directIntensity() {
          return (0, MB.b)(this, TB, "f")
        }
        set directIntensity(BB) {
          (0, MB.f)(this, TB, BB, "f")
        }
        get emissiveIntensity() {
          return (0, MB.b)(this, dB, "f")
        }
        set emissiveIntensity(BB) {
          (0, MB.f)(this, dB, BB, "f")
        }
        get environmentIntensity() {
          return (0, MB.b)(this, VB, "f")
        }
        set environmentIntensity(BB) {
          (0, MB.f)(this, VB, BB, "f")
        }
        get specularIntensity() {
          return (0, MB.b)(this, yB, "f")
        }
        set specularIntensity(BB) {
          (0, MB.f)(this, yB, BB, "f")
        }
        get disableBumpMap() {
          return (0, MB.b)(this, lB, "f")
        }
        set disableBumpMap(BB) {
          (0, MB.f)(this, lB, BB, "f")
        }
        get albedoTexture() {
          return (0, MB.b)(this, JB, "f")
        }
        set albedoTexture(BB) {
          (0, MB.f)(this, JB, BB, "f")
        }
        get baseWeightTexture() {
          return (0, MB.b)(this, YB, "f")
        }
        set baseWeightTexture(BB) {
          (0, MB.f)(this, YB, BB, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, MB.b)(this, gB, "f")
        }
        set baseDiffuseRoughnessTexture(BB) {
          (0, MB.f)(this, gB, BB, "f")
        }
        get ambientTexture() {
          return (0, MB.b)(this, oB, "f")
        }
        set ambientTexture(BB) {
          (0, MB.f)(this, oB, BB, "f")
        }
        get ambientTextureStrength() {
          return (0, MB.b)(this, kB, "f")
        }
        set ambientTextureStrength(BB) {
          (0, MB.f)(this, kB, BB, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, MB.b)(this, LB, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(BB) {
          (0, MB.f)(this, LB, BB, "f")
        }
        get opacityTexture() {
          return (0, MB.b)(this, OB, "f")
        }
        set opacityTexture(BB) {
          (0, MB.f)(this, OB, BB, "f")
        }
        get reflectionTexture() {
          return (0, MB.b)(this, DB, "f")
        }
        set reflectionTexture(BB) {
          (0, MB.f)(this, DB, BB, "f")
        }
        get emissiveTexture() {
          return (0, MB.b)(this, uB, "f")
        }
        set emissiveTexture(BB) {
          (0, MB.f)(this, uB, BB, "f")
        }
        get reflectivityTexture() {
          return (0, MB.b)(this, HB, "f")
        }
        set reflectivityTexture(BB) {
          (0, MB.f)(this, HB, BB, "f")
        }
        get metallicTexture() {
          return (0, MB.b)(this, EB, "f")
        }
        set metallicTexture(BB) {
          (0, MB.f)(this, EB, BB, "f")
        }
        get metallic() {
          return (0, MB.b)(this, vB, "f")
        }
        set metallic(BB) {
          (0, MB.f)(this, vB, BB, "f")
        }
        get roughness() {
          return (0, MB.b)(this, mB, "f")
        }
        set roughness(BB) {
          (0, MB.f)(this, mB, BB, "f")
        }
        get metallicF0Factor() {
          return (0, MB.b)(this, iB, "f")
        }
        set metallicF0Factor(BB) {
          (0, MB.f)(this, iB, BB, "f")
        }
        get metallicReflectanceColor() {
          return (0, MB.b)(this, NB, "f")
        }
        set metallicReflectanceColor(BB) {
          (0, MB.f)(this, NB, BB, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, MB.b)(this, tB, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(BB) {
          (0, MB.f)(this, tB, BB, "f")
        }
        get metallicReflectanceTexture() {
          return (0, MB.b)(this, fB, "f")
        }
        set metallicReflectanceTexture(BB) {
          (0, MB.f)(this, fB, BB, "f")
        }
        get reflectanceTexture() {
          return (0, MB.b)(this, sB, "f")
        }
        set reflectanceTexture(BB) {
          (0, MB.f)(this, sB, BB, "f")
        }
        get microSurfaceTexture() {
          return (0, MB.b)(this, wB, "f")
        }
        set microSurfaceTexture(BB) {
          (0, MB.f)(this, wB, BB, "f")
        }
        get bumpTexture() {
          return (0, MB.b)(this, UB, "f")
        }
        set bumpTexture(BB) {
          (0, MB.f)(this, UB, BB, "f")
        }
        get lightmapTexture() {
          return (0, MB.b)(this, FB, "f")
        }
        set lightmapTexture(BB) {
          (0, MB.f)(this, FB, BB, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(BB) {
          this.subSurface.refractionTexture = BB, BB ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, MB.b)(this, KB, "f")
        }
        set ambientColor(BB) {
          (0, MB.f)(this, KB, BB, "f")
        }
        get albedoColor() {
          return (0, MB.b)(this, rB, "f")
        }
        set albedoColor(BB) {
          (0, MB.f)(this, rB, BB, "f")
        }
        get baseWeight() {
          return (0, MB.b)(this, IB, "f")
        }
        set baseWeight(BB) {
          (0, MB.f)(this, IB, BB, "f")
        }
        get baseDiffuseRoughness() {
          return (0, MB.b)(this, SB, "f")
        }
        set baseDiffuseRoughness(BB) {
          (0, MB.f)(this, SB, BB, "f")
        }
        get reflectivityColor() {
          return (0, MB.b)(this, PB, "f")
        }
        set reflectivityColor(BB) {
          (0, MB.f)(this, PB, BB, "f")
        }
        get reflectionColor() {
          return (0, MB.b)(this, QB, "f")
        }
        set reflectionColor(BB) {
          (0, MB.f)(this, QB, BB, "f")
        }
        get emissiveColor() {
          return (0, MB.b)(this, RB, "f")
        }
        set emissiveColor(BB) {
          (0, MB.f)(this, RB, BB, "f")
        }
        get microSurface() {
          return (0, MB.b)(this, aB, "f")
        }
        set microSurface(BB) {
          (0, MB.f)(this, aB, BB, "f")
        }
        get indexOfRefraction() {
          return this.subSurface.indexOfRefraction
        }
        set indexOfRefraction(BB) {
          this.subSurface.indexOfRefraction = BB
        }
        get invertRefractionY() {
          return this.subSurface.invertRefractionY
        }
        set invertRefractionY(BB) {
          this.subSurface.invertRefractionY = BB
        }
        get linkRefractionWithTransparency() {
          return this.subSurface.linkRefractionWithTransparency
        }
        set linkRefractionWithTransparency(BB) {
          this.subSurface.linkRefractionWithTransparency = BB, BB && (this.subSurface.isRefractionEnabled = !0)
        }
        get useLightmapAsShadowmap() {
          return (0, MB.b)(this, ZB, "f")
        }
        set useLightmapAsShadowmap(BB) {
          (0, MB.f)(this, ZB, BB, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, MB.b)(this, XB, "f")
        }
        set useAlphaFromAlbedoTexture(BB) {
          (0, MB.f)(this, XB, BB, "f")
        }
        get forceAlphaTest() {
          return (0, MB.b)(this, WB, "f")
        }
        set forceAlphaTest(BB) {
          (0, MB.f)(this, WB, BB, "f")
        }
        get alphaCutOff() {
          return (0, MB.b)(this, hB, "f")
        }
        set alphaCutOff(BB) {
          (0, MB.f)(this, hB, BB, "f")
        }
        get useSpecularOverAlpha() {
          return (0, MB.b)(this, CB, "f")
        }
        set useSpecularOverAlpha(BB) {
          (0, MB.f)(this, CB, BB, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, MB.b)(this, qB, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(BB) {
          (0, MB.f)(this, qB, BB, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, MB.b)(this, xB, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(BB) {
          (0, MB.f)(this, xB, BB, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, MB.b)(this, jB, "f")
        }
        set useRoughnessFromMetallicTextureGreen(BB) {
          (0, MB.f)(this, jB, BB, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, MB.b)(this, AB, "f")
        }
        set useMetallnessFromMetallicTextureBlue(BB) {
          (0, MB.f)(this, AB, BB, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, MB.b)(this, bB, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(BB) {
          (0, MB.f)(this, bB, BB, "f")
        }
        get useAmbientInGrayScale() {
          return (0, MB.b)(this, nB, "f")
        }
        set useAmbientInGrayScale(BB) {
          (0, MB.f)(this, nB, BB, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, MB.b)(this, eB, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(BB) {
          (0, MB.f)(this, eB, BB, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === tT.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(BB) {
          BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? tT.LIGHTFALLOFF_PHYSICAL : tT.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === tT.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(BB) {
          BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? tT.LIGHTFALLOFF_GLTF : tT.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, MB.b)(this, BT, "f")
        }
        set useRadianceOverAlpha(BB) {
          (0, MB.f)(this, BT, BB, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, MB.b)(this, TT, "f")
        }
        set useObjectSpaceNormalMap(BB) {
          (0, MB.f)(this, TT, BB, "f")
        }
        get useParallax() {
          return (0, MB.b)(this, dT, "f")
        }
        set useParallax(BB) {
          (0, MB.f)(this, dT, BB, "f")
        }
        get useParallaxOcclusion() {
          return (0, MB.b)(this, VT, "f")
        }
        set useParallaxOcclusion(BB) {
          (0, MB.f)(this, VT, BB, "f")
        }
        get parallaxScaleBias() {
          return (0, MB.b)(this, yT, "f")
        }
        set parallaxScaleBias(BB) {
          (0, MB.f)(this, yT, BB, "f")
        }
        get disableLighting() {
          return (0, MB.b)(this, pT, "f")
        }
        set disableLighting(BB) {
          (0, MB.f)(this, pT, BB, "f")
        }
        get forceIrradianceInFragment() {
          return (0, MB.b)(this, lT, "f")
        }
        set forceIrradianceInFragment(BB) {
          (0, MB.f)(this, lT, BB, "f")
        }
        get maxSimultaneousLights() {
          return (0, MB.b)(this, JT, "f")
        }
        set maxSimultaneousLights(BB) {
          (0, MB.f)(this, JT, BB, "f")
        }
        get invertNormalMapX() {
          return (0, MB.b)(this, YT, "f")
        }
        set invertNormalMapX(BB) {
          (0, MB.f)(this, YT, BB, "f")
        }
        get invertNormalMapY() {
          return (0, MB.b)(this, gT, "f")
        }
        set invertNormalMapY(BB) {
          (0, MB.f)(this, gT, BB, "f")
        }
        get twoSidedLighting() {
          return (0, MB.b)(this, oT, "f")
        }
        set twoSidedLighting(BB) {
          (0, MB.f)(this, oT, BB, "f")
        }
        get useAlphaFresnel() {
          return (0, MB.b)(this, kT, "f")
        }
        set useAlphaFresnel(BB) {
          (0, MB.f)(this, kT, BB, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, MB.b)(this, LT, "f")
        }
        set useLinearAlphaFresnel(BB) {
          (0, MB.f)(this, LT, BB, "f")
        }
        get environmentBRDFTexture() {
          return (0, MB.b)(this, OT, "f")
        }
        set environmentBRDFTexture(BB) {
          (0, MB.f)(this, OT, BB, "f")
        }
        get forceNormalForward() {
          return (0, MB.b)(this, DT, "f")
        }
        set forceNormalForward(BB) {
          (0, MB.f)(this, DT, BB, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, MB.b)(this, uT, "f")
        }
        set enableSpecularAntiAliasing(BB) {
          (0, MB.f)(this, uT, BB, "f")
        }
        get useHorizonOcclusion() {
          return (0, MB.b)(this, HT, "f")
        }
        set useHorizonOcclusion(BB) {
          (0, MB.f)(this, HT, BB, "f")
        }
        get useRadianceOcclusion() {
          return (0, MB.b)(this, ET, "f")
        }
        set useRadianceOcclusion(BB) {
          (0, MB.f)(this, ET, BB, "f")
        }
        get unlit() {
          return (0, MB.b)(this, vT, "f")
        }
        set unlit(BB) {
          (0, MB.f)(this, vT, BB, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, MB.b)(this, mT, "f")
        }
        set applyDecalMapAfterDetailMap(BB) {
          (0, MB.f)(this, mT, BB, "f")
        }
        constructor(pB, zB) {
          super(pB, zB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), TB.set(this, ((0, MB.h)(this, Xd), (0, MB.h)(this, Wd, 1))), dB.set(this, ((0, MB.h)(this, hd), (0, MB.h)(this, Cd, 1))), VB.set(this, ((0, MB.h)(this, Gd), (0, MB.h)(this, qd, 1))), yB.set(this, ((0, MB.h)(this, xd), (0, MB.h)(this, jd, 1))), lB.set(this, ((0, MB.h)(this, Ad), (0, MB.h)(this, bd, !1))), JB.set(this, ((0, MB.h)(this, nd), (0, MB.h)(this, ed, void 0))), YB.set(this, ((0, MB.h)(this, BV), (0, MB.h)(this, TV, void 0))), gB.set(this, ((0, MB.h)(this, dV), (0, MB.h)(this, VV, void 0))), oB.set(this, ((0, MB.h)(this, yV), (0, MB.h)(this, pV, void 0))), kB.set(this, ((0, MB.h)(this, lV), (0, MB.h)(this, JV, 1))), LB.set(this, ((0, MB.h)(this, YV), (0, MB.h)(this, gV, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), OB.set(this, ((0, MB.h)(this, oV), (0, MB.h)(this, kV, void 0))), DB.set(this, ((0, MB.h)(this, LV), (0, MB.h)(this, OV, void 0))), uB.set(this, ((0, MB.h)(this, DV), (0, MB.h)(this, uV, void 0))), HB.set(this, ((0, MB.h)(this, HV), (0, MB.h)(this, EV, void 0))), EB.set(this, ((0, MB.h)(this, vV), (0, MB.h)(this, mV, void 0))), vB.set(this, ((0, MB.h)(this, iV), (0, MB.h)(this, NV, void 0))), mB.set(this, ((0, MB.h)(this, tV), (0, MB.h)(this, fV, void 0))), iB.set(this, ((0, MB.h)(this, sV), (0, MB.h)(this, MV, 1))), NB.set(this, ((0, MB.h)(this, zV), (0, MB.h)(this, wV, GB.c.White()))), tB.set(this, ((0, MB.h)(this, UV), (0, MB.h)(this, FV, !1))), fB.set(this, ((0, MB.h)(this, KV), (0, MB.h)(this, rV, void 0))), sB.set(this, ((0, MB.h)(this, IV), (0, MB.h)(this, cV, void 0))), wB.set(this, ((0, MB.h)(this, SV), (0, MB.h)(this, PV, void 0))), UB.set(this, ((0, MB.h)(this, QV), (0, MB.h)(this, RV, void 0))), FB.set(this, ((0, MB.h)(this, aV), (0, MB.h)(this, ZV, void 0))), KB.set(this, ((0, MB.h)(this, XV), (0, MB.h)(this, WV, new GB.c(0, 0, 0)))), rB.set(this, ((0, MB.h)(this, hV), (0, MB.h)(this, CV, new GB.c(1, 1, 1)))), IB.set(this, ((0, MB.h)(this, GV), (0, MB.h)(this, qV, 1))), SB.set(this, ((0, MB.h)(this, xV), (0, MB.h)(this, jV, void 0))), PB.set(this, ((0, MB.h)(this, AV), (0, MB.h)(this, bV, new GB.c(1, 1, 1)))), QB.set(this, ((0, MB.h)(this, nV), (0, MB.h)(this, eV, new GB.c(1, 1, 1)))), RB.set(this, ((0, MB.h)(this, By), (0, MB.h)(this, Ty, new GB.c(0, 0, 0)))), aB.set(this, ((0, MB.h)(this, dy), (0, MB.h)(this, Vy, 1))), ZB.set(this, ((0, MB.h)(this, yy), (0, MB.h)(this, py, !1))), XB.set(this, ((0, MB.h)(this, ly), (0, MB.h)(this, Jy, !1))), WB.set(this, ((0, MB.h)(this, Yy), (0, MB.h)(this, gy, !1))), hB.set(this, ((0, MB.h)(this, oy), (0, MB.h)(this, ky, .4))), CB.set(this, ((0, MB.h)(this, Ly), (0, MB.h)(this, Oy, !0))), qB.set(this, ((0, MB.h)(this, Dy), (0, MB.h)(this, uy, !1))), xB.set(this, ((0, MB.h)(this, Hy), (0, MB.h)(this, Ey, !0))), jB.set(this, ((0, MB.h)(this, vy), (0, MB.h)(this, my, !1))), AB.set(this, ((0, MB.h)(this, iy), (0, MB.h)(this, Ny, !1))), bB.set(this, ((0, MB.h)(this, ty), (0, MB.h)(this, fy, !1))), nB.set(this, ((0, MB.h)(this, sy), (0, MB.h)(this, My, !1))), eB.set(this, ((0, MB.h)(this, zy), (0, MB.h)(this, wy, !1))), BT.set(this, ((0, MB.h)(this, Uy), (0, MB.h)(this, Fy, !0))), TT.set(this, ((0, MB.h)(this, Ky), (0, MB.h)(this, ry, !1))), dT.set(this, ((0, MB.h)(this, Iy), (0, MB.h)(this, cy, !1))), VT.set(this, ((0, MB.h)(this, Sy), (0, MB.h)(this, Py, !1))), yT.set(this, ((0, MB.h)(this, Qy), (0, MB.h)(this, Ry, .05))), pT.set(this, ((0, MB.h)(this, ay), (0, MB.h)(this, Zy, !1))), lT.set(this, ((0, MB.h)(this, Xy), (0, MB.h)(this, Wy, !1))), JT.set(this, ((0, MB.h)(this, hy), (0, MB.h)(this, Cy, 4))), YT.set(this, ((0, MB.h)(this, Gy), (0, MB.h)(this, qy, !1))), gT.set(this, ((0, MB.h)(this, xy), (0, MB.h)(this, jy, !1))), oT.set(this, ((0, MB.h)(this, Ay), (0, MB.h)(this, by, !1))), kT.set(this, ((0, MB.h)(this, ny), (0, MB.h)(this, ey, !1))), LT.set(this, ((0, MB.h)(this, Bp), (0, MB.h)(this, Tp, !1))), OT.set(this, ((0, MB.h)(this, dp), (0, MB.h)(this, Vp, null))), DT.set(this, ((0, MB.h)(this, yp), (0, MB.h)(this, pp, !1))), uT.set(this, ((0, MB.h)(this, lp), (0, MB.h)(this, Jp, !1))), HT.set(this, ((0, MB.h)(this, Yp), (0, MB.h)(this, gp, !0))), ET.set(this, ((0, MB.h)(this, op), (0, MB.h)(this, kp, !0))), vT.set(this, ((0, MB.h)(this, Lp), (0, MB.h)(this, Op, !1))), mT.set(this, ((0, MB.h)(this, Dp), (0, MB.h)(this, Hp, !1))), (0, MB.h)(this, Ep), this._environmentBRDFTexture = cB(this.jU())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(TB) {
          let dB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const yB = fT.c.Clone((() => new BB(TB, this.jU())), this, {
            cloneTexturesOnlyOnce: dB
          });
          return yB.id = TB, yB.name = TB, this.stencil.copyTo(yB.stencil), this._clonePlugins(yB, VB), yB
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.PBRMaterial", BB
        }
        static Parse(TB, dB, VB) {
          const yB = fT.c.Parse((() => new BB(TB.name, dB)), TB, dB, VB);
          return TB.stencil && yB.stencil.parse(TB.stencil, dB, VB), pB.b._ParsePlugins(TB, yB, dB, VB), TB.clearCoat && yB.clearCoat.parse(TB.clearCoat, dB, VB), TB.anisotropy && yB.anisotropy.parse(TB.anisotropy, dB, VB), TB.brdf && yB.brdf.parse(TB.brdf, dB, VB), TB.sheen && yB.sheen.parse(TB.sheen, dB, VB), TB.subSurface && yB.subSurface.parse(TB.subSurface, dB, VB), TB.iridescence && yB.iridescence.parse(TB.iridescence, dB, VB), yB
        }
      }, TB = new WeakMap, dB = new WeakMap, VB = new WeakMap, yB = new WeakMap, lB = new WeakMap, JB = new WeakMap, YB = new WeakMap, gB = new WeakMap, oB = new WeakMap, kB = new WeakMap, LB = new WeakMap, OB = new WeakMap, DB = new WeakMap, uB = new WeakMap, HB = new WeakMap, EB = new WeakMap, vB = new WeakMap, mB = new WeakMap, iB = new WeakMap, NB = new WeakMap, tB = new WeakMap, fB = new WeakMap, sB = new WeakMap, wB = new WeakMap, UB = new WeakMap, FB = new WeakMap, KB = new WeakMap, rB = new WeakMap, IB = new WeakMap, SB = new WeakMap, PB = new WeakMap, QB = new WeakMap, RB = new WeakMap, aB = new WeakMap, ZB = new WeakMap, XB = new WeakMap, WB = new WeakMap, hB = new WeakMap, CB = new WeakMap, qB = new WeakMap, xB = new WeakMap, jB = new WeakMap, AB = new WeakMap, bB = new WeakMap, nB = new WeakMap, eB = new WeakMap, BT = new WeakMap, TT = new WeakMap, dT = new WeakMap, VT = new WeakMap, yT = new WeakMap, pT = new WeakMap, lT = new WeakMap, JT = new WeakMap, YT = new WeakMap, gT = new WeakMap, oT = new WeakMap, kT = new WeakMap, LT = new WeakMap, OT = new WeakMap, DT = new WeakMap, uT = new WeakMap, HT = new WeakMap, ET = new WeakMap, vT = new WeakMap, mT = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Zd[Symbol.metadata] ?? null) : void 0;
        iT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], NT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], sT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], zT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], wT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], UT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], FT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], KT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], rT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], ST = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], RT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], aT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], ZT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], XT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], WT = [(0, zB.s)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], CT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], GT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], qT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], xT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, zB.M)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty", null)], AT = [(0, zB.s)("ambient"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], bT = [(0, zB.s)("albedo"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], nT = [(0, zB.W)("baseWeight"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], eT = [(0, zB.W)("baseDiffuseRoughness"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Bd = [(0, zB.s)("reflectivity"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Td = [(0, zB.s)("reflection"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], dd = [(0, zB.s)("emissive"), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Vd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], yd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], pd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], ld = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Jd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Yd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], gd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], od = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], kd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Ld = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Od = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Dd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], ud = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Hd = [(0, zB.W)()], Ed = [(0, zB.W)()], vd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], md = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Nd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], td = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], fd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], sd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsLightsDirty")], Md = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], zd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsLightsDirty")], wd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Ud = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Fd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Kd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], rd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Id = [(0, zB.i)("_markAllSubMeshesAsTexturesDirty")], cd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Sd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Pd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Qd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsTexturesDirty")], Rd = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], ad = [(0, zB.W)(), (0, zB.i)("_markAllSubMeshesAsMiscDirty")], (0, MB.g)(BB, null, iT, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "directIntensity" in BB,
            get: BB => BB.directIntensity,
            set: (BB, TB) => {
              BB.directIntensity = TB
            }
          },
          metadata: TB
        }, Wd, hd), (0, MB.g)(BB, null, NT, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveIntensity" in BB,
            get: BB => BB.emissiveIntensity,
            set: (BB, TB) => {
              BB.emissiveIntensity = TB
            }
          },
          metadata: TB
        }, Cd, Gd), (0, MB.g)(BB, null, sT, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentIntensity" in BB,
            get: BB => BB.environmentIntensity,
            set: (BB, TB) => {
              BB.environmentIntensity = TB
            }
          },
          metadata: TB
        }, qd, xd), (0, MB.g)(BB, null, MT, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "specularIntensity" in BB,
            get: BB => BB.specularIntensity,
            set: (BB, TB) => {
              BB.specularIntensity = TB
            }
          },
          metadata: TB
        }, jd, Ad), (0, MB.g)(BB, null, zT, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableBumpMap" in BB,
            get: BB => BB.disableBumpMap,
            set: (BB, TB) => {
              BB.disableBumpMap = TB
            }
          },
          metadata: TB
        }, bd, nd), (0, MB.g)(BB, null, wT, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoTexture" in BB,
            get: BB => BB.albedoTexture,
            set: (BB, TB) => {
              BB.albedoTexture = TB
            }
          },
          metadata: TB
        }, ed, BV), (0, MB.g)(BB, null, UT, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeightTexture" in BB,
            get: BB => BB.baseWeightTexture,
            set: (BB, TB) => {
              BB.baseWeightTexture = TB
            }
          },
          metadata: TB
        }, TV, dV), (0, MB.g)(BB, null, FT, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughnessTexture" in BB,
            get: BB => BB.baseDiffuseRoughnessTexture,
            set: (BB, TB) => {
              BB.baseDiffuseRoughnessTexture = TB
            }
          },
          metadata: TB
        }, VV, yV), (0, MB.g)(BB, null, KT, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTexture" in BB,
            get: BB => BB.ambientTexture,
            set: (BB, TB) => {
              BB.ambientTexture = TB
            }
          },
          metadata: TB
        }, pV, lV), (0, MB.g)(BB, null, rT, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureStrength" in BB,
            get: BB => BB.ambientTextureStrength,
            set: (BB, TB) => {
              BB.ambientTextureStrength = TB
            }
          },
          metadata: TB
        }, JV, YV), (0, MB.g)(BB, null, IT, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureImpactOnAnalyticalLights" in BB,
            get: BB => BB.ambientTextureImpactOnAnalyticalLights,
            set: (BB, TB) => {
              BB.ambientTextureImpactOnAnalyticalLights = TB
            }
          },
          metadata: TB
        }, gV, oV), (0, MB.g)(BB, null, cT, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "opacityTexture" in BB,
            get: BB => BB.opacityTexture,
            set: (BB, TB) => {
              BB.opacityTexture = TB
            }
          },
          metadata: TB
        }, kV, LV), (0, MB.g)(BB, null, ST, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionTexture" in BB,
            get: BB => BB.reflectionTexture,
            set: (BB, TB) => {
              BB.reflectionTexture = TB
            }
          },
          metadata: TB
        }, OV, DV), (0, MB.g)(BB, null, PT, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveTexture" in BB,
            get: BB => BB.emissiveTexture,
            set: (BB, TB) => {
              BB.emissiveTexture = TB
            }
          },
          metadata: TB
        }, uV, HV), (0, MB.g)(BB, null, QT, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityTexture" in BB,
            get: BB => BB.reflectivityTexture,
            set: (BB, TB) => {
              BB.reflectivityTexture = TB
            }
          },
          metadata: TB
        }, EV, vV), (0, MB.g)(BB, null, RT, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicTexture" in BB,
            get: BB => BB.metallicTexture,
            set: (BB, TB) => {
              BB.metallicTexture = TB
            }
          },
          metadata: TB
        }, mV, iV), (0, MB.g)(BB, null, aT, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallic" in BB,
            get: BB => BB.metallic,
            set: (BB, TB) => {
              BB.metallic = TB
            }
          },
          metadata: TB
        }, NV, tV), (0, MB.g)(BB, null, ZT, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, TB) => {
              BB.roughness = TB
            }
          },
          metadata: TB
        }, fV, sV), (0, MB.g)(BB, null, XT, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicF0Factor" in BB,
            get: BB => BB.metallicF0Factor,
            set: (BB, TB) => {
              BB.metallicF0Factor = TB
            }
          },
          metadata: TB
        }, MV, zV), (0, MB.g)(BB, null, WT, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceColor" in BB,
            get: BB => BB.metallicReflectanceColor,
            set: (BB, TB) => {
              BB.metallicReflectanceColor = TB
            }
          },
          metadata: TB
        }, wV, UV), (0, MB.g)(BB, null, hT, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useOnlyMetallicFromMetallicReflectanceTexture" in BB,
            get: BB => BB.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (BB, TB) => {
              BB.useOnlyMetallicFromMetallicReflectanceTexture = TB
            }
          },
          metadata: TB
        }, FV, KV), (0, MB.g)(BB, null, CT, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceTexture" in BB,
            get: BB => BB.metallicReflectanceTexture,
            set: (BB, TB) => {
              BB.metallicReflectanceTexture = TB
            }
          },
          metadata: TB
        }, rV, IV), (0, MB.g)(BB, null, GT, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectanceTexture" in BB,
            get: BB => BB.reflectanceTexture,
            set: (BB, TB) => {
              BB.reflectanceTexture = TB
            }
          },
          metadata: TB
        }, cV, SV), (0, MB.g)(BB, null, qT, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurfaceTexture" in BB,
            get: BB => BB.microSurfaceTexture,
            set: (BB, TB) => {
              BB.microSurfaceTexture = TB
            }
          },
          metadata: TB
        }, PV, QV), (0, MB.g)(BB, null, xT, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, TB) => {
              BB.bumpTexture = TB
            }
          },
          metadata: TB
        }, RV, aV), (0, MB.g)(BB, null, jT, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "lightmapTexture" in BB,
            get: BB => BB.lightmapTexture,
            set: (BB, TB) => {
              BB.lightmapTexture = TB
            }
          },
          metadata: TB
        }, ZV, XV), (0, MB.g)(BB, null, AT, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientColor" in BB,
            get: BB => BB.ambientColor,
            set: (BB, TB) => {
              BB.ambientColor = TB
            }
          },
          metadata: TB
        }, WV, hV), (0, MB.g)(BB, null, bT, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoColor" in BB,
            get: BB => BB.albedoColor,
            set: (BB, TB) => {
              BB.albedoColor = TB
            }
          },
          metadata: TB
        }, CV, GV), (0, MB.g)(BB, null, nT, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeight" in BB,
            get: BB => BB.baseWeight,
            set: (BB, TB) => {
              BB.baseWeight = TB
            }
          },
          metadata: TB
        }, qV, xV), (0, MB.g)(BB, null, eT, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughness" in BB,
            get: BB => BB.baseDiffuseRoughness,
            set: (BB, TB) => {
              BB.baseDiffuseRoughness = TB
            }
          },
          metadata: TB
        }, jV, AV), (0, MB.g)(BB, null, Bd, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityColor" in BB,
            get: BB => BB.reflectivityColor,
            set: (BB, TB) => {
              BB.reflectivityColor = TB
            }
          },
          metadata: TB
        }, bV, nV), (0, MB.g)(BB, null, Td, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionColor" in BB,
            get: BB => BB.reflectionColor,
            set: (BB, TB) => {
              BB.reflectionColor = TB
            }
          },
          metadata: TB
        }, eV, By), (0, MB.g)(BB, null, dd, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveColor" in BB,
            get: BB => BB.emissiveColor,
            set: (BB, TB) => {
              BB.emissiveColor = TB
            }
          },
          metadata: TB
        }, Ty, dy), (0, MB.g)(BB, null, Vd, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurface" in BB,
            get: BB => BB.microSurface,
            set: (BB, TB) => {
              BB.microSurface = TB
            }
          },
          metadata: TB
        }, Vy, yy), (0, MB.g)(BB, null, yd, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLightmapAsShadowmap" in BB,
            get: BB => BB.useLightmapAsShadowmap,
            set: (BB, TB) => {
              BB.useLightmapAsShadowmap = TB
            }
          },
          metadata: TB
        }, py, ly), (0, MB.g)(BB, null, pd, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFromAlbedoTexture" in BB,
            get: BB => BB.useAlphaFromAlbedoTexture,
            set: (BB, TB) => {
              BB.useAlphaFromAlbedoTexture = TB
            }
          },
          metadata: TB
        }, Jy, Yy), (0, MB.g)(BB, null, ld, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceAlphaTest" in BB,
            get: BB => BB.forceAlphaTest,
            set: (BB, TB) => {
              BB.forceAlphaTest = TB
            }
          },
          metadata: TB
        }, gy, oy), (0, MB.g)(BB, null, Jd, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: BB => "alphaCutOff" in BB,
            get: BB => BB.alphaCutOff,
            set: (BB, TB) => {
              BB.alphaCutOff = TB
            }
          },
          metadata: TB
        }, ky, Ly), (0, MB.g)(BB, null, Yd, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularOverAlpha" in BB,
            get: BB => BB.useSpecularOverAlpha,
            set: (BB, TB) => {
              BB.useSpecularOverAlpha = TB
            }
          },
          metadata: TB
        }, Oy, Dy), (0, MB.g)(BB, null, gd, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMicroSurfaceFromReflectivityMapAlpha" in BB,
            get: BB => BB.useMicroSurfaceFromReflectivityMapAlpha,
            set: (BB, TB) => {
              BB.useMicroSurfaceFromReflectivityMapAlpha = TB
            }
          },
          metadata: TB
        }, uy, Hy), (0, MB.g)(BB, null, od, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureAlpha" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureAlpha,
            set: (BB, TB) => {
              BB.useRoughnessFromMetallicTextureAlpha = TB
            }
          },
          metadata: TB
        }, Ey, vy), (0, MB.g)(BB, null, kd, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureGreen" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureGreen,
            set: (BB, TB) => {
              BB.useRoughnessFromMetallicTextureGreen = TB
            }
          },
          metadata: TB
        }, my, iy), (0, MB.g)(BB, null, Ld, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMetallnessFromMetallicTextureBlue" in BB,
            get: BB => BB.useMetallnessFromMetallicTextureBlue,
            set: (BB, TB) => {
              BB.useMetallnessFromMetallicTextureBlue = TB
            }
          },
          metadata: TB
        }, Ny, ty), (0, MB.g)(BB, null, Od, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
            get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
            set: (BB, TB) => {
              BB.useAmbientOcclusionFromMetallicTextureRed = TB
            }
          },
          metadata: TB
        }, fy, sy), (0, MB.g)(BB, null, Dd, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientInGrayScale" in BB,
            get: BB => BB.useAmbientInGrayScale,
            set: (BB, TB) => {
              BB.useAmbientInGrayScale = TB
            }
          },
          metadata: TB
        }, My, zy), (0, MB.g)(BB, null, ud, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAutoMicroSurfaceFromReflectivityMap" in BB,
            get: BB => BB.useAutoMicroSurfaceFromReflectivityMap,
            set: (BB, TB) => {
              BB.useAutoMicroSurfaceFromReflectivityMap = TB
            }
          },
          metadata: TB
        }, wy, Uy), (0, MB.g)(BB, null, Hd, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "usePhysicalLightFalloff" in BB,
            get: BB => BB.usePhysicalLightFalloff
          },
          metadata: TB
        }, null, Xd), (0, MB.g)(BB, null, Ed, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGLTFLightFalloff" in BB,
            get: BB => BB.useGLTFLightFalloff
          },
          metadata: TB
        }, null, Xd), (0, MB.g)(BB, null, vd, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOverAlpha" in BB,
            get: BB => BB.useRadianceOverAlpha,
            set: (BB, TB) => {
              BB.useRadianceOverAlpha = TB
            }
          },
          metadata: TB
        }, Fy, Ky), (0, MB.g)(BB, null, md, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useObjectSpaceNormalMap" in BB,
            get: BB => BB.useObjectSpaceNormalMap,
            set: (BB, TB) => {
              BB.useObjectSpaceNormalMap = TB
            }
          },
          metadata: TB
        }, ry, Iy), (0, MB.g)(BB, null, Nd, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallax" in BB,
            get: BB => BB.useParallax,
            set: (BB, TB) => {
              BB.useParallax = TB
            }
          },
          metadata: TB
        }, cy, Sy), (0, MB.g)(BB, null, td, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallaxOcclusion" in BB,
            get: BB => BB.useParallaxOcclusion,
            set: (BB, TB) => {
              BB.useParallaxOcclusion = TB
            }
          },
          metadata: TB
        }, Py, Qy), (0, MB.g)(BB, null, fd, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: BB => "parallaxScaleBias" in BB,
            get: BB => BB.parallaxScaleBias,
            set: (BB, TB) => {
              BB.parallaxScaleBias = TB
            }
          },
          metadata: TB
        }, Ry, ay), (0, MB.g)(BB, null, sd, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableLighting" in BB,
            get: BB => BB.disableLighting,
            set: (BB, TB) => {
              BB.disableLighting = TB
            }
          },
          metadata: TB
        }, Zy, Xy), (0, MB.g)(BB, null, Md, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceIrradianceInFragment" in BB,
            get: BB => BB.forceIrradianceInFragment,
            set: (BB, TB) => {
              BB.forceIrradianceInFragment = TB
            }
          },
          metadata: TB
        }, Wy, hy), (0, MB.g)(BB, null, zd, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxSimultaneousLights" in BB,
            get: BB => BB.maxSimultaneousLights,
            set: (BB, TB) => {
              BB.maxSimultaneousLights = TB
            }
          },
          metadata: TB
        }, Cy, Gy), (0, MB.g)(BB, null, wd, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapX" in BB,
            get: BB => BB.invertNormalMapX,
            set: (BB, TB) => {
              BB.invertNormalMapX = TB
            }
          },
          metadata: TB
        }, qy, xy), (0, MB.g)(BB, null, Ud, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapY" in BB,
            get: BB => BB.invertNormalMapY,
            set: (BB, TB) => {
              BB.invertNormalMapY = TB
            }
          },
          metadata: TB
        }, jy, Ay), (0, MB.g)(BB, null, Fd, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "twoSidedLighting" in BB,
            get: BB => BB.twoSidedLighting,
            set: (BB, TB) => {
              BB.twoSidedLighting = TB
            }
          },
          metadata: TB
        }, by, ny), (0, MB.g)(BB, null, Kd, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFresnel" in BB,
            get: BB => BB.useAlphaFresnel,
            set: (BB, TB) => {
              BB.useAlphaFresnel = TB
            }
          },
          metadata: TB
        }, ey, Bp), (0, MB.g)(BB, null, rd, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLinearAlphaFresnel" in BB,
            get: BB => BB.useLinearAlphaFresnel,
            set: (BB, TB) => {
              BB.useLinearAlphaFresnel = TB
            }
          },
          metadata: TB
        }, Tp, dp), (0, MB.g)(BB, null, Id, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentBRDFTexture" in BB,
            get: BB => BB.environmentBRDFTexture,
            set: (BB, TB) => {
              BB.environmentBRDFTexture = TB
            }
          },
          metadata: TB
        }, Vp, yp), (0, MB.g)(BB, null, cd, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceNormalForward" in BB,
            get: BB => BB.forceNormalForward,
            set: (BB, TB) => {
              BB.forceNormalForward = TB
            }
          },
          metadata: TB
        }, pp, lp), (0, MB.g)(BB, null, Sd, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: BB => "enableSpecularAntiAliasing" in BB,
            get: BB => BB.enableSpecularAntiAliasing,
            set: (BB, TB) => {
              BB.enableSpecularAntiAliasing = TB
            }
          },
          metadata: TB
        }, Jp, Yp), (0, MB.g)(BB, null, Pd, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useHorizonOcclusion" in BB,
            get: BB => BB.useHorizonOcclusion,
            set: (BB, TB) => {
              BB.useHorizonOcclusion = TB
            }
          },
          metadata: TB
        }, gp, op), (0, MB.g)(BB, null, Qd, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOcclusion" in BB,
            get: BB => BB.useRadianceOcclusion,
            set: (BB, TB) => {
              BB.useRadianceOcclusion = TB
            }
          },
          metadata: TB
        }, kp, Lp), (0, MB.g)(BB, null, Rd, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: BB => "unlit" in BB,
            get: BB => BB.unlit,
            set: (BB, TB) => {
              BB.unlit = TB
            }
          },
          metadata: TB
        }, Op, Dp), (0, MB.g)(BB, null, ad, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyDecalMapAfterDetailMap" in BB,
            get: BB => BB.applyDecalMapAfterDetailMap,
            set: (BB, TB) => {
              BB.applyDecalMapAfterDetailMap = TB
            }
          },
          metadata: TB
        }, Hp, Ep), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB.PBRMATERIAL_OPAQUE = tT.PBRMATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = tT.PBRMATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = tT.PBRMATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = tT.PBRMATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = tT.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, BB
    })();
    const Qy = "KHR_materials_diffuse_transmission";

    function Ry(BB, TB) {
      const dB = TB.subSurface;
      let VB = null;
      return dB.translucencyIntensityTexture ? VB = dB.translucencyIntensityTexture : dB.thicknessTexture && dB.useMaskFromThicknessTexture && (VB = dB.thicknessTexture), VB && !dB.useGltfStyleTextures ? (wB.b.Warn(`${BB}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${TB.name}`, 1), null) : VB
    }
    class ay {
      constructor(BB) {
        this.name = Qy, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof Py && this._isExtensionEnabled(dB)) {
          const TB = Ry(BB, dB);
          return TB && VB.push(TB), dB.subSurface.translucencyColorTexture && VB.push(dB.subSurface.translucencyColorTexture), VB
        }
        return VB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const TB = BB.subSurface;
        return !!TB.isTranslucencyEnabled && (!BB.unlit && !TB.useAlbedoToTintTranslucency && TB.useGltfStyleTextures && 1 === TB.volumeIndexOfRefraction && 0 === TB.minimumThickness && 0 === TB.maximumThickness)
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((VB => {
          if (dB instanceof Py && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0;
            const VB = dB.subSurface,
              yB = Ry(BB, dB),
              pB = 0 == VB.translucencyIntensity ? void 0 : VB.translucencyIntensity,
              lB = this._exporter._materialExporter.getTextureInfo(yB) ?? void 0,
              JB = !VB.translucencyColor || VB.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : VB.translucencyColor.FVB(),
              YB = this._exporter._materialExporter.getTextureInfo(VB.translucencyColorTexture) ?? void 0,
              gB = {
                diffuseTransmissionFactor: pB,
                diffuseTransmissionTexture: lB,
                diffuseTransmissionColorFactor: JB,
                diffuseTransmissionColorTexture: YB
              };
            (lB || YB) && this._exporter._materialNeedsUVsSet.add(dB), TB.extensions = TB.extensions || {}, TB.extensions[Qy] = gB
          }
          VB(TB)
        }))
      }
    }
    let Zy = !1;

    function Xy() {
      Zy || (Zy = !0, SV.RegisterExtension(Qy, (BB => new ay(BB))))
    }
    Xy();
    const Wy = "KHR_materials_dispersion";
    class hy {
      constructor() {
        this.name = Wy, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const TB = BB.subSurface;
        return !(!TB.isRefractionEnabled && !TB.isDispersionEnabled)
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          if (dB instanceof Py && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0;
            const BB = {
              dispersion: dB.subSurface.dispersion
            };
            TB.extensions = TB.extensions || {}, TB.extensions[Wy] = BB
          }
          BB(TB)
        }))
      }
    }
    let Cy = !1;

    function Gy() {
      Cy || (Cy = !0, SV.RegisterExtension(Wy, (() => new hy)))
    }
    Gy();
    const qy = "KHR_materials_emissive_strength";
    class xy {
      constructor() {
        this.name = qy, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(BB, TB, dB) {
        return await new Promise((BB => {
          if (!(dB instanceof Py)) return BB(TB);
          const VB = dB.emissiveColor.scale(dB.emissiveIntensity),
            yB = Math.max(...VB.FVB());
          if (yB > 1) {
            TB.emissiveFactor = VB.scale(1 / yB).FVB(), this._wasUsed = !0;
            const BB = {
              emissiveStrength: yB
            };
            TB.extensions || (TB.extensions = {}), TB.extensions[qy] = BB
          } else TB.emissiveFactor = VB.FVB();
          return BB(TB)
        }))
      }
    }
    let jy = !1;

    function Ay() {
      jy || (jy = !0, SV.RegisterExtension(qy, (() => new xy)))
    }
    Ay();
    const by = "KHR_materials_ior";
    class ny {
      constructor() {
        this.name = by, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (BB instanceof nT ? 1.5 != BB.specularIor : BB instanceof Py && (void 0 != BB.indexOfRefraction && 1.5 != BB.indexOfRefraction))
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          if (dB instanceof Py && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0;
            const BB = {
              ior: dB.indexOfRefraction
            };
            TB.extensions = TB.extensions || {}, TB.extensions[by] = BB
          } else if (dB instanceof nT && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0;
            const BB = {
              ior: dB.specularIor
            };
            TB.extensions = TB.extensions || {}, TB.extensions[by] = BB
          }
          BB(TB)
        }))
      }
    }
    let ey = !1;

    function Bp() {
      ey || (ey = !0, SV.RegisterExtension(by, (() => new ny)))
    }
    Bp();
    const Tp = "KHR_materials_iridescence";
    class dp {
      constructor(BB) {
        this.name = Tp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof tT) {
          if (dB.iridescence.isEnabled) return dB.iridescence.texture && VB.push(dB.iridescence.texture), dB.iridescence.thicknessTexture && dB.iridescence.thicknessTexture !== dB.iridescence.texture && VB.push(dB.iridescence.thicknessTexture), VB
        } else if (dB instanceof nT && dB.thinFilmWeight > 0) return dB.thinFilmWeightTexture && VB.push(dB.thinFilmWeightTexture), dB.thinFilmThicknessTexture && dB.thinFilmThicknessTexture !== dB.thinFilmWeightTexture && VB.push(dB.thinFilmThicknessTexture), VB;
        return []
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          if (dB instanceof tT) {
            if (!dB.iridescence.isEnabled) return void BB(TB);
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            const VB = this._exporter._materialExporter.getTextureInfo(dB.iridescence.texture),
              yB = this._exporter._materialExporter.getTextureInfo(dB.iridescence.thicknessTexture),
              pB = {
                iridescenceFactor: dB.iridescence.intensity,
                iridescenceIor: dB.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: dB.iridescence.minimumThickness,
                iridescenceThicknessMaximum: dB.iridescence.maximumThickness,
                iridescenceTexture: VB ?? void 0,
                iridescenceThicknessTexture: yB ?? void 0
              };
            null === pB.iridescenceTexture && null === pB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Tp] = pB
          } else if (dB instanceof nT) {
            if (dB.thinFilmWeight <= 0) return void BB(TB);
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            const VB = this._exporter._materialExporter.getTextureInfo(dB.thinFilmWeightTexture),
              yB = this._exporter._materialExporter.getTextureInfo(dB.thinFilmThicknessTexture),
              pB = {
                iridescenceFactor: dB.thinFilmWeight,
                iridescenceIor: dB.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * dB.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * dB.thinFilmThickness,
                iridescenceTexture: VB ?? void 0,
                iridescenceThicknessTexture: yB ?? void 0
              };
            null === pB.iridescenceTexture && null === pB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Tp] = pB
          }
          BB(TB)
        }))
      }
    }
    let Vp = !1;

    function yp() {
      Vp || (Vp = !0, SV.RegisterExtension(Tp, (BB => new dp(BB))))
    }
    yp();
    const pp = "KHR_materials_sheen";
    class lp {
      constructor(BB) {
        this.name = pp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        return dB instanceof Py && dB.sheen.isEnabled && dB.sheen.texture ? [dB.sheen.texture] : []
      }
      async postExportMaterialAsync(BB, TB, dB) {
        return await new Promise((BB => {
          if (dB instanceof Py) {
            if (!dB.sheen.isEnabled) return void BB(TB);
            this._wasUsed = !0, null == TB.extensions && (TB.extensions = {});
            const VB = {
              sheenColorFactor: dB.sheen.color.FVB(),
              sheenRoughnessFactor: dB.sheen.roughness ?? 0
            };
            null === VB.sheenColorTexture && null === VB.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(dB), dB.sheen.texture && (VB.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(dB.sheen.texture) ?? void 0), dB.sheen.textureRoughness && !dB.sheen.useRoughnessFromMainTexture ? VB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(dB.sheen.textureRoughness) ?? void 0 : dB.sheen.texture && dB.sheen.useRoughnessFromMainTexture && (VB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(dB.sheen.texture) ?? void 0), TB.extensions[pp] = VB
          }
          BB(TB)
        }))
      }
    }
    let Jp = !1;

    function Yp() {
      Jp || (Jp = !0, SV.RegisterExtension(pp, (BB => new lp(BB))))
    }
    Yp();
    const gp = "KHR_materials_fuzz";

    function op(BB, TB) {
      const dB = new FB.f(TB.name, TB.jU());
      return dB._texture = BB, dB.coordinatesIndex = TB.coordinatesIndex, TB instanceof FB.f && (dB.uOffset = TB.uOffset, dB.vOffset = TB.vOffset, dB.uScale = TB.uScale, dB.vScale = TB.vScale, dB.wAng = TB.wAng), dB.wrapU = TB.wrapU, dB.wrapV = TB.wrapV, dB
    }
    class kp {
      constructor(BB) {
        this.name = gp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
      }
      dispose() {
        for (const BB of Object.keys(this._mergedTexturesMap)) {
          this._mergedTexturesMap[BB].dispose()
        }
        this._mergedTexturesMap = {};
        for (const BB of Object.keys(this._cachedInternalTexturesMap)) {
          this._cachedInternalTexturesMap[BB].dispose()
        }
        this._cachedInternalTexturesMap = {}
      }
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        if (dB instanceof nT) {
          const BB = [];
          if (dB.fuzzWeight > 0) {
            dB.fuzzWeightTexture && BB.push(dB.fuzzWeightTexture);
            let TB = !1;
            if (dB.fuzzRoughnessTexture && (dB._useFuzzRoughnessFromTextureAlpha ? BB.push(dB.fuzzRoughnessTexture) : TB = !0), dB.fuzzColorTexture && !TB && BB.push(dB.fuzzColorTexture), TB) {
              const TB = function(BB) {
                const TB = BB.fuzzColorTexture,
                  dB = TB && TB.getInternalTexture() ? TB.getInternalTexture().uniqueId : "NoFuzzColor",
                  VB = BB.fuzzRoughnessTexture;
                return `FuzzColor_${dB}_FuzzRoughness_${VB&&VB.getInternalTexture()?VB.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(dB);
              if (!this._cachedInternalTexturesMap[TB]) {
                const BB = await async function(BB) {
                  const TB = BB.jU(),
                    dB = BB.fuzzColorTexture,
                    VB = BB.fuzzRoughnessTexture;
                  return dB || VB ? (await ld("FuzzTexture", gd(dB ? Jd(dB, 0) : Yd(1), dB ? Jd(dB, 1) : Yd(1), dB ? Jd(dB, 2) : Yd(1), VB ? Jd(VB, BB._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : Yd(1)), TB)).getInternalTexture() : null
                }(dB);
                BB && (this._cachedInternalTexturesMap[TB] = BB)
              }
              this._cachedInternalTexturesMap[TB] && (dB.fuzzColorTexture && (this._mergedTexturesMap[dB.fuzzColorTexture.uniqueId] = op(this._cachedInternalTexturesMap[TB], dB.fuzzColorTexture), BB.push(this._mergedTexturesMap[dB.fuzzColorTexture.uniqueId])), dB.fuzzRoughnessTexture && (this._mergedTexturesMap[dB.fuzzRoughnessTexture.uniqueId] = op(this._cachedInternalTexturesMap[TB], dB.fuzzRoughnessTexture), BB.push(this._mergedTexturesMap[dB.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return BB
        }
        return []
      }
      async postExportMaterialAsync(BB, TB, dB) {
        return await new Promise((BB => {
          if (dB instanceof nT) {
            if (0 == dB.fuzzWeight) return void BB(TB);
            this._wasUsed = !0, null == TB.extensions && (TB.extensions = {});
            const VB = {
              fuzzFactor: dB.fuzzWeight,
              fuzzColorFactor: dB.fuzzColor.FVB(),
              fuzzRoughnessFactor: dB.fuzzRoughness
            };
            let yB, pB;
            dB.fuzzWeightTexture && (VB.fuzzTexture = this._exporter._materialExporter.getTextureInfo(dB.fuzzWeightTexture) ?? void 0), dB.fuzzColorTexture && (yB = this._mergedTexturesMap[dB.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[dB.fuzzColorTexture.uniqueId] : dB.fuzzColorTexture, VB.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(yB) ?? void 0), dB.fuzzRoughnessTexture && (pB = this._mergedTexturesMap[dB.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[dB.fuzzRoughnessTexture.uniqueId] : dB.fuzzRoughnessTexture, VB.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(pB) ?? void 0), null === VB.fuzzColorTexture && null === VB.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[gp] = VB
          }
          BB(TB)
        }))
      }
    }
    let Lp = !1;

    function Op() {
      Lp || (Lp = !0, SV.RegisterExtension(gp, (BB => new kp(BB))))
    }
    Op();
    const Dp = "KHR_materials_specular";
    class Hp {
      constructor(BB) {
        this.name = Dp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        return dB instanceof Py && this._isExtensionEnabled(dB) ? (dB.metallicReflectanceTexture && VB.push(dB.metallicReflectanceTexture), dB.reflectanceTexture && VB.push(dB.reflectanceTexture), VB) : VB
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (void 0 != BB.metallicF0Factor && 1 != BB.metallicF0Factor || void 0 != BB.metallicReflectanceColor && !BB.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.metallicReflectanceTexture || null != BB.reflectanceTexture
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          var VB;
          if (dB instanceof Py && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0, TB.extensions = TB.extensions || {};
            const BB = this._exporter._materialExporter.getTextureInfo(dB.metallicReflectanceTexture) ?? void 0,
              VB = this._exporter._materialExporter.getTextureInfo(dB.reflectanceTexture) ?? void 0,
              yB = {
                specularFactor: 1 == dB.metallicF0Factor ? void 0 : dB.metallicF0Factor,
                specularTexture: BB,
                specularColorFactor: dB.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : dB.metallicReflectanceColor.FVB(),
                specularColorTexture: VB
              };
            this._hasTexturesExtension(dB) && this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Dp] = yB
          } else if (dB instanceof nT) {
            TB.extensions = TB.extensions || {};
            const yB = this._exporter._materialExporter.getTextureInfo(dB.specularWeightTexture) ?? void 0,
              pB = this._exporter._materialExporter.getTextureInfo(dB.specularColorTexture) ?? void 0,
              lB = 1 == dB.specularWeight ? void 0 : dB.specularWeight,
              JB = dB.specularColor.equalsFloats(1, 1, 1) ? void 0 : dB.specularColor.FVB();
            if (!pB && !yB && void 0 === lB && void 0 === JB) return BB(TB);
            this._wasUsed = !0;
            const YB = {
                specularEdgeColorEnabled: !0
              },
              gB = {
                specularFactor: lB,
                specularTexture: yB,
                specularColorFactor: JB,
                specularColorTexture: pB,
                extensions: {}
              };
            gB.extensions.EXT_materials_specular_edge_color = YB, (VB = this._exporter._glTF).extensionsUsed || (VB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (yB || pB) && this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Dp] = gB
          }
          BB(TB)
        }))
      }
    }
    let Ep = !1;

    function vp() {
      Ep || (Ep = !0, SV.RegisterExtension(Dp, (BB => new Hp(BB))))
    }
    vp();
    const mp = "KHR_materials_transmission";
    class ip {
      constructor(BB) {
        this.name = mp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof Py) {
          if (this._isExtensionEnabled(dB)) return dB.subSurface.refractionIntensityTexture && dB.subSurface.useGltfStyleTextures && VB.push(dB.subSurface.refractionIntensityTexture), VB
        } else dB instanceof nT && (dB.transmissionWeight > 0 && dB.transmissionWeightTexture && (VB.push(dB.transmissionWeightTexture), dB.transmissionColorTexture && VB.push(dB.transmissionColorTexture)), dB.subsurfaceWeight > 0 && dB.subsurfaceWeightTexture && VB.push(dB.subsurfaceWeightTexture));
        return VB
      }
      _isExtensionEnabled(BB) {
        if (BB instanceof nT && !BB.unlit) return BB.transmissionWeight > 0 || BB.subsurfaceWeight > 0;
        if (BB instanceof Py && !BB.unlit) {
          const TB = BB.subSurface;
          return TB.isRefractionEnabled && void 0 != TB.refractionIntensity && 0 != TB.refractionIntensity || null != TB.refractionIntensityTexture && TB.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(BB, TB, dB) {
        if (!this._isExtensionEnabled(dB)) return TB;
        if (dB instanceof Py) {
          this._wasUsed = !0;
          const VB = dB.subSurface,
            yB = {
              transmissionFactor: 0 === VB.refractionIntensity ? void 0 : VB.refractionIntensity
            };
          if (VB.refractionIntensityTexture)
            if (VB.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(dB);
              const BB = this._exporter._materialExporter.getTextureInfo(VB.refractionIntensityTexture);
              BB && (yB.transmissionTexture = BB)
            } else wB.b.Warn(`${BB}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          TB.extensions || (TB.extensions = {}), TB.extensions[mp] = yB
        } else if (dB instanceof nT) {
          this._wasUsed = !0;
          const BB = {
            transmissionFactor: (1 - dB.transmissionWeight) * dB.subsurfaceWeight + dB.transmissionWeight
          };
          if (dB.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(dB);
            const TB = this._exporter._materialExporter.getTextureInfo(dB.transmissionWeightTexture);
            TB && (BB.transmissionTexture = TB)
          } else if (dB.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(dB);
            const TB = this._exporter._materialExporter.getTextureInfo(dB.subsurfaceWeightTexture);
            TB && (BB.transmissionTexture = TB)
          }
          if (0 == dB.transmissionDepth && (!dB.transmissionColor.equals(GB.c.White()) || dB.transmissionColorTexture) && TB.pbrMetallicRoughness && (TB.pbrMetallicRoughness.baseColorFactor || (TB.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), TB.pbrMetallicRoughness.baseColorFactor[0] *= dB.transmissionColor.r, TB.pbrMetallicRoughness.baseColorFactor[1] *= dB.transmissionColor.g, TB.pbrMetallicRoughness.baseColorFactor[2] *= dB.transmissionColor.b, dB.transmissionColorTexture && !TB.pbrMetallicRoughness.baseColorTexture)) {
            const BB = this._exporter._materialExporter.getTextureInfo(dB.transmissionColorTexture);
            BB && (TB.pbrMetallicRoughness.baseColorTexture = BB, this._exporter._materialNeedsUVsSet.add(dB))
          }
          TB.extensions || (TB.extensions = {}), TB.extensions[mp] = BB
        }
        return TB
      }
    }
    let Np = !1;

    function tp() {
      Np || (Np = !0, SV.RegisterExtension(mp, (BB => new ip(BB))))
    }
    tp();
    var fp = dB(39024);
    const sp = "KHR_materials_unlit";
    class Mp {
      constructor() {
        this.name = sp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          let VB = !1;
          dB instanceof Py ? VB = dB.unlit : dB instanceof fp.e && (VB = dB.disableLighting), VB && (this._wasUsed = !0, null == TB.extensions && (TB.extensions = {}), TB.extensions[sp] = {}), BB(TB)
        }))
      }
    }
    let zp = !1;

    function wp() {
      zp || (zp = !0, SV.RegisterExtension(sp, (() => new Mp)))
    }
    wp();
    const Up = "KHR_materials_volume";
    class Fp {
      constructor(BB) {
        this.name = Up, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof Py) {
          if (this._isExtensionEnabled(dB)) return dB.subSurface.thicknessTexture && VB.push(dB.subSurface.thicknessTexture), VB
        } else dB instanceof nT && (dB.transmissionWeight > 0 || dB.subsurfaceWeight > 0) && dB.geometryThicknessTexture && VB.push(dB.geometryThicknessTexture);
        return VB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const TB = BB.subSurface;
        return !(!TB.isRefractionEnabled && !TB.isTranslucencyEnabled) && (void 0 != TB.maximumThickness && 0 != TB.maximumThickness || void 0 != TB.tintColorAtDistance && TB.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != TB.tintColor && TB.tintColor != GB.c.White() || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.subSurface.thicknessTexture
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          if (dB instanceof Py && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0;
            const BB = dB.subSurface,
              VB = {
                thicknessFactor: 0 == BB.maximumThickness ? void 0 : BB.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(BB.thicknessTexture) ?? void 0,
                attenuationDistance: BB.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : BB.tintColorAtDistance,
                attenuationColor: BB.tintColor.equalsFloats(1, 1, 1) ? void 0 : BB.tintColor.FVB()
              };
            this._hasTexturesExtension(dB) && this._exporter._materialNeedsUVsSet.add(dB), TB.extensions = TB.extensions || {}, TB.extensions[Up] = VB
          } else if (dB instanceof nT) {
            const BB = dB.transmissionWeight > 0 && !dB.geometryThinWalled,
              VB = dB.subsurfaceWeight > 0 && !dB.geometryThinWalled;
            if (BB || VB) {
              this._wasUsed = !0;
              const yB = dB.geometryThickness,
                pB = this._exporter._materialExporter.getTextureInfo(dB.geometryThicknessTexture) ?? void 0;
              let lB;
              pB && this._exporter._materialNeedsUVsSet.add(dB);
              const JB = GB.c.White().FVB();
              if (BB && dB.transmissionDepth > 0) {
                const BB = 1 / dB.transmissionDepth;
                let TB = new RB.p(-Math.log(dB.transmissionColor.r) * BB, -Math.log(dB.transmissionColor.g) * BB, -Math.log(dB.transmissionColor.b) * BB);
                const VB = new RB.p(dB.transmissionScatter.r * BB, dB.transmissionScatter.g * BB, dB.transmissionScatter.b * BB),
                  yB = TB.subtract(VB),
                  pB = Math.min(yB.x, yB.y, yB.z);
                pB < 0 && (yB.x = yB.x - pB, yB.y = yB.y - pB, yB.z = yB.z - pB), TB = yB.add(VB);
                lB = 1 / Math.max(TB.x, TB.y, TB.z), JB[0] = Math.exp(-TB.x * lB), JB[1] = Math.exp(-TB.y * lB), JB[2] = Math.exp(-TB.z * lB)
              } else lB = Number.MAX_VALUE, JB[0] = 1, JB[1] = 1, JB[2] = 1;
              let YB = 1;
              const gB = GB.c.White().FVB();
              if (VB) {
                const BB = dB.subsurfaceRadius,
                  TB = dB.subsurfaceRadiusScale,
                  VB = new RB.p(TB.r, TB.g, TB.b).multiplyByFloats(BB, BB, BB),
                  yB = new RB.p(1 / Math.max(VB.x, 1e-6), 1 / Math.max(VB.y, 1e-6), 1 / Math.max(VB.z, 1e-6));
                YB = 1 / Math.max(yB.x, yB.y, yB.z), gB[0] = Math.exp(-yB.x * YB), gB[1] = Math.exp(-yB.y * YB), gB[2] = Math.exp(-yB.z * YB)
              }
              const oB = (1 - dB.transmissionWeight) * dB.subsurfaceWeight,
                kB = oB + dB.transmissionWeight,
                LB = 1 / Math.max(kB, 1e-6),
                OB = dB.transmissionWeight * LB,
                DB = oB * LB,
                uB = JB.map(((BB, TB) => BB * OB + gB[TB] * DB)),
                HB = {
                  thicknessFactor: yB,
                  thicknessTexture: pB,
                  attenuationDistance: lB * OB + YB * DB,
                  attenuationColor: uB
                };
              TB.extensions = TB.extensions || {}, TB.extensions[Up] = HB
            }
          }
          BB(TB)
        }))
      }
    }
    let Kp = !1;

    function rp() {
      Kp || (Kp = !0, SV.RegisterExtension(Up, (BB => new Fp(BB))))
    }
    rp();
    const Ip = "KHR_materials_volume_scatter";
    class cp {
      constructor(BB) {
        this.name = Ip, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        return dB instanceof nT && (dB.transmissionWeight > 0 && dB.transmissionScatterTexture && VB.push(dB.transmissionScatterTexture), dB.subsurfaceWeight > 0 && dB.subsurfaceColorTexture && VB.push(dB.subsurfaceColorTexture)), VB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const TB = BB.transmissionWeight > 0 && !BB.geometryThinWalled && BB.transmissionDepth > 0 && !BB.transmissionScatter.equals(GB.c.Black()),
          dB = BB.subsurfaceWeight > 0 && !BB.geometryThinWalled;
        return !(!TB && !dB)
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          if (dB instanceof nT && this._isExtensionEnabled(dB)) {
            this._wasUsed = !0;
            let BB = RB.p.Zero(),
              VB = 0;
            if (dB.transmissionWeight > 0) {
              BB = function(BB) {
                const TB = new RB.p(Math.sqrt(1 - BB.x), Math.sqrt(1 - BB.y), Math.sqrt(1 - BB.z)),
                  dB = new RB.p(1, 1, 1),
                  VB = dB.subtract(TB),
                  yB = dB.subtract(new RB.p(.139, .139, .139).multiplyInPlace(TB)),
                  pB = dB.add(new RB.p(1.17, 1.17, 1.17).multiplyInPlace(TB));
                return VB.multiplyInPlace(yB).divideInPlace(pB)
              }(new RB.p(dB.transmissionScatter.r, dB.transmissionScatter.g, dB.transmissionScatter.b)), VB = dB.transmissionScatterAnisotropy
            }
            const yB = RB.p.Zero();
            let pB = 0;
            dB.subsurfaceWeight > 0 && (yB.set(dB.subsurfaceColor.r, dB.subsurfaceColor.g, dB.subsurfaceColor.b), pB = dB.subsurfaceScatterAnisotropy);
            const lB = (1 - dB.transmissionWeight) * dB.subsurfaceWeight,
              JB = lB + dB.transmissionWeight,
              YB = 1 / Math.max(JB, 1e-6),
              gB = dB.transmissionWeight * YB,
              oB = lB * YB,
              kB = {
                multiscatterColorFactor: BB.multiplyByFloats(gB, gB, gB).addInPlace(yB.multiplyByFloats(oB, oB, oB)).FVB(),
                scatterAnisotropy: VB * gB + pB * oB
              };
            if (dB.subsurfaceWeight > 0 && dB.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(dB);
              const BB = this._exporter._materialExporter.getTextureInfo(dB.subsurfaceColorTexture);
              BB && (kB.multiscatterColorTexture = BB)
            } else if (dB.transmissionWeight > 0 && dB.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(dB);
              const BB = this._exporter._materialExporter.getTextureInfo(dB.transmissionScatterTexture);
              BB && (kB.multiscatterColorTexture = BB)
            }
            TB.extensions = TB.extensions || {}, TB.extensions[Ip] = kB
          }
          BB(TB)
        }))
      }
    }
    let Sp = !1;

    function Pp() {
      Sp || (Sp = !0, SV.RegisterExtension(Ip, (BB => new cp(BB)), 101))
    }
    Pp();
    const Qp = "KHR_materials_diffuse_roughness";
    class Rp {
      constructor(BB) {
        this.name = Qp, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, TB, dB) {
        const VB = [];
        if (dB instanceof tT) {
          if (dB._baseDiffuseRoughness) return dB._baseDiffuseRoughnessTexture && VB.push(dB._baseDiffuseRoughnessTexture), VB
        } else if (dB instanceof nT && dB.baseDiffuseRoughness) return dB.baseDiffuseRoughnessTexture && VB.push(dB.baseDiffuseRoughnessTexture), VB;
        return []
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          let VB = null,
            yB = null;
          if (dB instanceof tT ? (VB = dB._baseDiffuseRoughness, yB = dB._baseDiffuseRoughnessTexture) : dB instanceof nT && (VB = dB.baseDiffuseRoughness, yB = dB.baseDiffuseRoughnessTexture), !VB) return void BB(TB);
          this._wasUsed = !0, TB.extensions = TB.extensions || {};
          const pB = {
            diffuseRoughnessFactor: VB,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(yB) ?? void 0
          };
          null !== pB.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(dB), TB.extensions[Qp] = pB, BB(TB)
        }))
      }
    }
    let ap = !1;

    function Zp() {
      ap || (ap = !0, SV.RegisterExtension(Qp, (BB => new Rp(BB))))
    }
    Zp();
    const Xp = "KHR_materials_openpbr";
    class Wp {
      constructor() {
        this.name = Xp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(BB, TB, dB) {
        return new Promise((BB => {
          dB instanceof nT && (this._wasUsed = !0, TB.extensions = TB.extensions || {}, TB.extensions[Xp] = {}), BB(TB)
        }))
      }
    }
    let hp = !1;

    function Cp() {
      hp || (hp = !0, SV.RegisterExtension(Xp, (() => new Wp)))
    }
    Cp();
    const Gp = "KHR_texture_transform";
    class qp {
      constructor() {
        this.name = Gp, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(BB, TB, dB) {
        if (dB.jU() || sT.h.Warn(`${BB}: "scene" is not defined for Babylon texture ${dB.name}!`), (0 !== dB.uAng || 0 !== dB.vAng) && (sT.h.Warn(`${BB}: Texture ${dB.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== dB.uRotationCenter || 0 !== dB.vRotationCenter)) return;
        const VB = {};
        let yB = !1;
        if (0 === dB.uOffset && 0 === dB.vOffset || (VB.offset = [dB.uOffset, dB.vOffset], yB = !0), 1 === dB.uScale && 1 === dB.vScale || (VB.scale = [dB.uScale, dB.vScale], yB = !0), 0 !== dB.wAng) {
          if (0 !== dB.uRotationCenter || 0 !== dB.vRotationCenter) {
            if (dB.homogeneousRotationInUVTransform && dB.uScale !== dB.vScale) return void sT.h.Warn(`${BB}: Texture ${dB.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${Gp}.`);
            sT.h.Warn(`${BB}: Texture ${dB.name} with non-origin rotation center will be exported using an adjusted offset with ${Gp}.`), VB.offset = function(BB) {
              const {
                uOffset: TB,
                vOffset: dB,
                uRotationCenter: VB,
                vRotationCenter: yB,
                uScale: pB,
                vScale: lB,
                wAng: JB
              } = BB, YB = Math.cos(JB), gB = Math.sin(JB), oB = VB * pB, kB = yB * lB;
              return [TB + (oB * (1 - YB) + kB * gB), dB + (kB * (1 - YB) - oB * gB)]
            }(dB)
          }
          VB.rotation = -dB.wAng, yB = !0
        }
        0 !== dB.coordinatesIndex && (VB.texCoord = dB.coordinatesIndex, yB = !0), yB && (this._wasUsed = !0, TB.extensions || (TB.extensions = {}), TB.extensions[Gp] = VB)
      }
    }
    let xp = !1;

    function jp() {
      xp || (xp = !0, SV.RegisterExtension(Gp, (() => new qp)))
    }
    jp();
    var Ap = dB(38790);
    const bp = "KHR_texture_basisu";
    class np {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = bp, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, TB) {
        const dB = this._exporter._textures[TB.index],
          VB = dB.source;
        if (void 0 === VB) return;
        const yB = this._exporter._images[VB];
        "image/ktx2" === (yB.mimeType || (0, Ap.j)(yB.uri)) && (dB.source = void 0, dB.extensions || (dB.extensions = {}), dB.extensions[bp] = {
          source: VB
        }, this._wasUsed = !0)
      }
    }
    let ep = !1;

    function Bl() {
      ep || (ep = !0, SV.RegisterExtension(bp, (BB => new np(BB))))
    }
    Bl();
    const Tl = "EXT_texture_webp";
    class dl {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = Tl, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, TB) {
        const dB = this._exporter._textures[TB.index],
          VB = dB.source;
        if (void 0 === VB) return;
        const yB = this._exporter._images[VB];
        "image/webp" === (yB.mimeType || (0, Ap.j)(yB.uri)) && (dB.source = void 0, dB.extensions || (dB.extensions = {}), dB.extensions[Tl] = {
          source: VB
        }, this._wasUsed = !0)
      }
    }
    let Vl = !1;

    function yl() {
      Vl || (Vl = !0, SV.RegisterExtension(Tl, (BB => new dl(BB))))
    }
    yl();
    const pl = "EXT_texture_avif";
    class ll {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = pl, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, TB) {
        const dB = this._exporter._textures[TB.index],
          VB = dB.source;
        if (void 0 === VB) return;
        const yB = this._exporter._images[VB];
        "image/avif" === (yB.mimeType || (0, Ap.j)(yB.uri)) && (dB.source = void 0, dB.extensions || (dB.extensions = {}), dB.extensions[pl] = {
          source: VB
        }, this._wasUsed = !0)
      }
    }
    let Jl = !1;

    function Yl() {
      Jl || (Jl = !0, SV.RegisterExtension(pl, (BB => new ll(BB))))
    }
    Yl();
    class gl {
      static CreateSTL(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          JB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          YB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const gB = function(BB, TB, dB) {
            const yB = [3 * BB[dB], 3 * BB[dB + 1], 3 * BB[dB + 2]],
              pB = [new VB.RD(TB[yB[0]], TB[yB[0] + 2], TB[yB[0] + 1]), new VB.RD(TB[yB[1]], TB[yB[1] + 2], TB[yB[1] + 1]), new VB.RD(TB[yB[2]], TB[yB[2] + 2], TB[yB[2] + 1])],
              lB = pB[0].subtract(pB[1]),
              JB = pB[2].subtract(pB[1]);
            return {
              v: pB,
              n: VB.RD.Cross(JB, lB).normalize()
            }
          },
          kB = function(BB, TB, dB, VB) {
            return TB = LB(BB, TB, dB.x, VB), TB = LB(BB, TB, dB.y, VB), LB(BB, TB, dB.z, VB)
          },
          LB = function(BB, TB, dB, VB) {
            return BB.setFloat32(TB, dB, VB), TB + 4
          },
          DB = function(BB) {
            if (JB) {
              let TB = BB;
              BB instanceof OB.e && (TB = BB.myB);
              const dB = TB.getVerticesData(oB.f.PositionKind, !0, !0);
              if (!dB) return [];
              const yB = VB.RD.Zero();
              let pB;
              for (pB = 0; pB < dB.length; pB += 3) VB.RD.TransformCoordinatesFromFloatsToRef(dB[pB], dB[pB + 1], dB[pB + 2], BB.computeWorldMatrix(!0), yB).toArray(dB, pB);
              return dB
            }
            return BB.getVerticesData(oB.f.PositionKind) || []
          };
        JB && (lB = !0);
        let uB = "",
          HB = 0,
          EB = 0;
        if (yB) {
          for (let dB = 0; dB < BB.length; dB++) {
            const TB = BB[dB].elB();
            HB += TB ? TB.length / 3 : 0
          }
          const TB = new ArrayBuffer(84 + 50 * HB);
          uB = new DataView(TB), EB += 80, uB.setUint32(EB, HB, pB), EB += 4
        } else YB || (uB = "solid stlmesh\r\n");
        for (let VB = 0; VB < BB.length; VB++) {
          const TB = BB[VB];
          !yB && YB && (uB += "solid " + TB.name + "\r\n"), !lB && TB instanceof oV.c && TB.bakeCurrentTransformIntoVertices();
          const dB = DB(TB),
            JB = TB.elB() || [];
          for (let BB = 0; BB < JB.length; BB += 3) {
            const TB = gB(JB, dB, BB);
            yB ? (EB = kB(uB, EB, TB.n, pB), EB = kB(uB, EB, TB.v[0], pB), EB = kB(uB, EB, TB.v[1], pB), EB = kB(uB, EB, TB.v[2], pB), EB += 2) : (uB += "\tfacet normal " + TB.n.x + " " + TB.n.y + " " + TB.n.z + "\r\n", uB += "\t\touter loop\r\n", uB += "\t\t\tvertex " + TB.v[0].x + " " + TB.v[0].y + " " + TB.v[0].z + "\r\n", uB += "\t\t\tvertex " + TB.v[1].x + " " + TB.v[1].y + " " + TB.v[1].z + "\r\n", uB += "\t\t\tvertex " + TB.v[2].x + " " + TB.v[2].y + " " + TB.v[2].z + "\r\n", uB += "\t\tendloop\r\n", uB += "\tendfacet\r\n")
          }!yB && YB && (uB += "endsolid " + name + "\r\n")
        }
        if (yB || YB || (uB += "endsolid stlmesh"), TB) {
          const BB = document.createElement("a"),
            TB = new Blob([uB], {
              type: "application/octet-stream"
            });
          BB.href = window.URL.createObjectURL(TB), BB.download = dB + ".stl", BB.click()
        }
        return uB
      }
    }

    function ol(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const yB = [];
      for (let pB = 0; pB < BB.length / dB; pB++) {
        const lB = BB[pB * dB] * (VB ? -1 : 1),
          JB = BB[pB * dB + 1],
          YB = BB[pB * dB + 2];
        yB.push(`(${lB.toPrecision(TB.precision)}, ${JB.toPrecision(TB.precision)}, ${YB.toPrecision(TB.precision)})`)
      }
      return yB.join(", ")
    }

    function kl(BB, TB) {
      const dB = [];
      for (let VB = 0; VB < BB.length / 2; VB++) {
        const yB = BB[2 * VB],
          pB = BB[2 * VB + 1];
        dB.push(`(${yB.toPrecision(TB.precision)}, ${(1-pB).toPrecision(TB.precision)})`)
      }
      return dB.join(", ")
    }

    function Ll(BB, TB, dB, VB) {
      const yB = BB.getVerticesData(oB.f.PositionKind),
        pB = BB.getVerticesData(oB.f.NormalKind);
      if (yB && pB) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${dB}"\n\t\tint[] faceVertexCounts = [${function(BB){const TB=BB.elB()?.length?BB.getTotalIndices():BB.getTotalVertices();return Array(TB/3).fill(3).join(", ")}(BB)}]\n\t\tint[] faceVertexIndices = [${function(BB){const TB=BB.elB(),dB=TB?.length??BB.getTotalVertices(),VB=[];if(null!==TB)for(let yB=0;yB<dB;yB++)VB.push(TB[yB]);else for(let yB=0;yB<dB;yB++)VB.push(yB);return VB.join(", ")}(BB)}]\n\t\tnormal3f[] normals = [${ol(pB,TB,void 0,VB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${ol(yB,TB,void 0,VB)}]\n        ${function(BB,TB){let dB="";for(let yB=0;yB<4;yB++){const VB=yB>0?yB:"",pB=BB.getVerticesData(oB.f.UVKind+(VB?VB+1:""));pB&&(dB+=`\n\t\ttexCoord2f[] primvars:st${VB} = [${kl(pB,TB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const VB=BB.getVerticesData(oB.f.ColorKind);return VB&&(dB+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        ol(VB, TB, VB.length / BB.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),dB}(BB,TB)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function Ol(BB, TB, dB, VB) {
      return `\n        def "Geometry"\n        {\n        ${Ll(BB,TB,dB,VB)}\n        }\n        `
    }

    function Dl(BB) {
      let TB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return TB += BB, fflate.strToU8(TB)
    }

    function ul(BB) {
      const TB = BB.m;
      return `( ${Hl(TB,0)}, ${Hl(TB,4)}, ${Hl(TB,8)}, ${Hl(TB,12)} )`
    }

    function Hl(BB, TB) {
      return `(${BB[TB+0]}, ${BB[TB+1]}, ${BB[TB+2]}, ${BB[TB+3]})`
    }

    function El(BB, TB) {
      const dB = "Object_" + BB.uniqueId,
        VB = ul(TB);
      return `def Xform "${dB}" (\n\tprepend references = @./geometries/Geometry_${BB.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${VB}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${BB.material.uniqueId}>\n}\n\n`
    }

    function vl(BB) {
      switch (BB) {
        case fB.c.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case fB.c.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case fB.c.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function ml(BB) {
      return `(${BB.x}, ${BB.y})`
    }

    function il(BB) {
      return `(${BB.r}, ${BB.g}, ${BB.b})`
    }

    function Nl(BB) {
      return "image/jpeg" === BB || "image/png" === BB
    }

    function tl(BB, TB, dB, yB, pB, lB) {
      const JB = BB.getInternalTexture().uniqueId + "_" + BB.invertY,
        gB = BB.mimeType || (0, YB.c)(BB.getInternalTexture()?.url ?? ""),
        oB = Nl(gB) ? gB : "image/png",
        kB = "image/jpeg" === oB ? "jpg" : "png";
      pB[JB] = {
        texture: BB,
        mimeType: oB,
        ext: kB
      };
      const LB = BB.coordinatesIndex > 0 ? "st" + BB.coordinatesIndex : "st",
        OB = new VB.Vector2(BB.uScale, BB.vScale),
        DB = new VB.Vector2(BB.uOffset, BB.vOffset),
        uB = BB.wAng,
        HB = Math.sin(uB),
        EB = Math.cos(uB);
      return DB.y = 1 - DB.y - OB.y, DB.x += HB * OB.x, DB.y += (1 - EB) * OB.y, `\n    def Shader "PrimvarReader_${dB}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${LB}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${dB}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${TB.uniqueId}/PrimvarReader_${dB}.outputs:result>\n        float inputs:rotation = ${(uB*(180/Math.PI)).toFixed(lB.precision)}\n        float2 inputs:scale = ${ml(OB)}\n        float2 inputs:translation = ${ml(DB)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${BB.uniqueId}_${dB}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${JB}.${kB}@\n        float2 inputs:st.connect = </Root/Materials/Material_${TB.uniqueId}/Transform2d_${dB}.outputs:result>\n        ${yB?"float4 inputs:scale = "+function(BB){return`(${BB.r}, ${BB.g}, ${BB.b}, 1.0)`}(yB):""}\n        token inputs:sourceColorSpace = "${BB.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${vl(BB.wrapU)}"\n        token inputs:wrapT = "${vl(BB.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${TB.needAlphaBlending()||TB.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function fl(BB, TB, dB) {
      const VB = "\t\t\t",
        yB = [],
        pB = [],
        {
          diffuseMap: lB,
          diffuse: JB,
          alphaCutOff: YB,
          emissiveMap: gB,
          emissive: oB,
          normalMap: kB,
          roughnessMap: LB,
          roughnessChannel: OB,
          roughness: DB,
          metalnessMap: uB,
          metalnessChannel: EB,
          metalness: vB,
          aoMap: mB,
          aoMapChannel: iB,
          aoMapIntensity: NB,
          alphaMap: tB,
          ior: fB,
          clearCoatEnabled: sB,
          clearCoat: MB,
          clearCoatMap: zB,
          clearCoatRoughness: wB,
          clearCoatRoughnessMap: UB
        } = function(BB) {
          const TB = {
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
          return BB instanceof lV.StandardMaterial ? {
            ...TB,
            diffuseMap: BB.diffuseTexture,
            diffuse: BB.diffuseColor,
            alphaCutOff: BB.alphaCutOff,
            emissiveMap: BB.emissiveTexture,
            emissive: BB.emissiveColor,
            roughness: 1,
            alphaMap: BB.opacityTexture
          } : BB instanceof tT ? {
            ...TB,
            diffuseMap: BB._albedoTexture,
            diffuse: BB._albedoColor,
            alphaCutOff: BB._alphaCutOff,
            emissiveMap: BB._emissiveTexture,
            emissive: BB._emissiveColor,
            normalMap: BB._bumpTexture,
            roughnessMap: BB._metallicTexture,
            roughnessChannel: BB._useRoughnessFromMetallicTextureAlpha ? "a" : "g",
            roughness: BB._roughness ?? 1,
            metalnessMap: BB._metallicTexture,
            metalnessChannel: BB._useMetallnessFromMetallicTextureBlue ? "b" : "r",
            metalness: BB._metallic ?? 0,
            aoMap: BB._ambientTexture,
            aoMapChannel: BB._useAmbientInGrayScale ? "r" : "rgb",
            aoMapIntensity: BB._ambientTextureStrength,
            alphaMap: BB._opacityTexture,
            ior: BB.subSurface.indexOfRefraction,
            clearCoatEnabled: BB.clearCoat.isEnabled,
            clearCoat: BB.clearCoat.intensity,
            clearCoatMap: BB.clearCoat.texture,
            clearCoatRoughness: BB.clearCoat.roughness,
            clearCoatRoughnessMap: BB.clearCoat.useRoughnessFromMainTexture ? BB.clearCoat.texture : BB.clearCoat.textureRoughness
          } : TB
        }(BB);
      return null !== lB ? (yB.push(`${VB}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${lB.uniqueId}_diffuse.outputs:rgb>`), BB.needAlphaBlending() ? yB.push(`${VB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${lB.uniqueId}_diffuse.outputs:a>`) : BB.needAlphaTesting() && (yB.push(`${VB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${lB.uniqueId}_diffuse.outputs:a>`), yB.push(`${VB}float inputs:opacityThreshold = ${YB}`)), pB.push(tl(lB, BB, "diffuse", JB, TB, dB))) : yB.push(`${VB}color3f inputs:diffuseColor = ${il(JB||HB.Color3.White())}`), null !== gB ? (yB.push(`${VB}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${gB.uniqueId}_emissive.outputs:rgb>`), pB.push(tl(gB, BB, "emissive", oB, TB, dB))) : oB && oB.toLuminance() > 0 && yB.push(`${VB}color3f inputs:emissiveColor = ${il(oB)}`), null !== kB && (yB.push(`${VB}normal3f inputs:normal.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${kB.uniqueId}_normal.outputs:rgb>`), pB.push(tl(kB, BB, "normal", null, TB, dB))), null !== mB && (yB.push(`${VB}float inputs:occlusion.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${mB.uniqueId}_occlusion.outputs:${iB}>`), pB.push(tl(mB, BB, "occlusion", new HB.Color3(NB, NB, NB), TB, dB))), null !== LB ? (yB.push(`${VB}float inputs:roughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${LB.uniqueId}_roughness.outputs:${OB}>`), pB.push(tl(LB, BB, "roughness", new HB.Color3(DB, DB, DB), TB, dB))) : yB.push(`${VB}float inputs:roughness = ${DB}`), null !== uB ? (yB.push(`${VB}float inputs:metallic.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${uB.uniqueId}_metallic.outputs:${EB}>`), pB.push(tl(uB, BB, "metallic", new HB.Color3(vB, vB, vB), TB, dB))) : yB.push(`${VB}float inputs:metallic = ${vB}`), null !== tB ? (yB.push(`${VB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${tB.uniqueId}_opacity.outputs:r>`), yB.push(`${VB}float inputs:opacityThreshold = 0.0001`), pB.push(tl(tB, BB, "opacity", null, TB, dB))) : yB.push(`${VB}float inputs:opacity = ${BB.alpha}`), sB && (null !== zB ? (yB.push(`${VB}float inputs:clearcoat.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${zB.uniqueId}_clearcoat.outputs:r>`), pB.push(tl(zB, BB, "clearcoat", new HB.Color3(MB, MB, MB), TB, dB))) : yB.push(`${VB}float inputs:clearcoat = ${MB}`), null !== UB ? (yB.push(`${VB}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${UB.uniqueId}_clearcoatRoughness.outputs:g>`), pB.push(tl(UB, BB, "clearcoatRoughness", new HB.Color3(wB, wB, wB), TB, dB))) : yB.push(`${VB}float inputs:clearcoatRoughness = ${wB}`)), yB.push(`${VB}float inputs:ior = ${fB}`), `\n\tdef Material "Material_${BB.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${yB.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${BB.uniqueId}/PreviewSurface.outputs:surface>\n\n${pB.join("\n")}\n\n\t}\n`
    }

    function sl(BB) {
      BB.computeWorldMatrix(!0);
      const TB = BB.getWorldMatrix().clone(),
        dB = BB.jU().useRightHandedSystem;
      let VB = BB.material?._getEffectiveOrientation(BB) ?? BB.sideOrientation,
        lB = !dB,
        JB = BB.parent;
      for (; JB;) {
        if (Pd(JB, dB) && null === JB.parent) {
          dB || (TB.multiplyToRef(JB.getWorldMatrix().invert(), TB), VB = VB === pB.b.ClockWiseSideOrientation ? pB.b.CounterClockWiseSideOrientation : pB.b.ClockWiseSideOrientation), lB = !1;
          break
        }
        JB = JB.parent
      }
      return TB.determinant() < 0 && yB.Tools.Warn(`Mesh ${BB.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: TB,
        windingOrder: VB === pB.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: lB
      }
    }
    async function Ml(BB, TB, dB) {
      const pB = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...TB
      };
      "undefined" === typeof fflate && await yB.Tools.LoadScriptAsync(pB.fflateUrl);
      const lB = {};
      lB[pB.modelFileName] = null;
      let JB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      JB += function(BB) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===BB.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${BB.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${BB.planeAnchoringAlignment}"`:""}\n            `
      }(pB);
      const YB = {};
      for (const VB of BB.meshes) {
        if (0 === VB.getTotalVertices()) continue;
        const BB = VB,
          TB = BB.geometry,
          gB = BB.material;
        if (!gB || !TB || dB && !dB(BB)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(gB.getClassName())) {
          const dB = "geometries/Geometry_" + TB.uniqueId + ".usda",
            {
              matrix: VB,
              windingOrder: yB,
              convertToRightHanded: oB
            } = sl(BB);
          if (!(dB in lB)) {
            const BB = Ol(TB, pB, yB, oB);
            lB[dB] = Dl(BB)
          }
          gB.uniqueId in YB || (YB[gB.uniqueId] = gB), JB += El(BB, VB)
        } else yB.Tools.Warn("USDZExportAsync does not support this material type: " + gB.getClassName())
      }
      BB.activeCamera && pB.exportCamera && (JB += function(BB, TB) {
        const dB = "Camera_" + BB.uniqueId,
          yB = ul(VB.Matrix.RotationY(Math.PI).multiply(BB.getWorldMatrix()));
        if (BB.mode === fB.c.ORTHOGRAPHIC_CAMERA) return `def Camera "${dB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${yB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(TB.precision)}, ${BB.maxZ.toPrecision(TB.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(BB.orthoLeft||1)+Math.abs(BB.orthoRight||1))).toPrecision(TB.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(BB.orthoTop||1)+Math.abs(BB.orthoBottom||1))).toPrecision(TB.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const VB = BB.PD().getAspectRatio(BB),
            pB = TB.cameraSensorWidth || 35;
          return `def Camera "${dB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${yB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(TB.precision)}, ${BB.maxZ.toPrecision(TB.precision)})\n\t\t\tfloat focalLength = ${(pB/(2*Math.tan(.5*BB.fov))).toPrecision(TB.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(pB*VB).toPrecision(TB.precision)}\n\t\t\tfloat verticalAperture = ${(pB/VB).toPrecision(TB.precision)}            \n\t\t}\n\t\n\t`
        }
      }(BB.activeCamera, pB)), JB += "\n            }\n        }";
      const gB = {};
      JB += function(BB, TB, dB) {
        const VB = [];
        for (const yB in BB) {
          const pB = BB[yB];
          VB.push(fl(pB, TB, dB))
        }
        return `\n    def "Materials"\n{\n${VB.join("")}\n}\n\n`
      }(YB, gB, pB), JB += "\n    }", lB[pB.modelFileName] = fflate.strToU8(JB);
      for (const VB in gB) {
        const {
          texture: BB,
          ext: TB,
          mimeType: dB
        } = gB[VB], yB = await Ed(BB);
        if (yB && Nl(yB.mimeType) && yB.mimeType === dB) lB[`textures/Texture_${VB}.${TB}`] = new Uint8Array(yB.data);
        else {
          const yB = BB.getSize(),
            pB = await (0, iB.h)(BB),
            JB = await sB.DumpTools.DumpDataAsync(yB.width, yB.height, pB, dB, void 0, !1, !0);
          lB[`textures/Texture_${VB}.${TB}`] = new Uint8Array(JB).slice()
        }
      }
      let oB = 0;
      for (const VB in lB) {
        const BB = lB[VB];
        if (!BB) continue;
        oB += 34 + VB.length;
        const TB = 63 & oB;
        if (4 !== TB) {
          const dB = new Uint8Array(64 - TB);
          lB[VB] = [BB, {
            extra: {
              12345: dB
            }
          }]
        }
        oB = BB.length
      }
      return fflate.zipSync(lB, {
        level: 0
      })
    }
    var zl = dB(39947);
    class wl {
      static Export(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          dB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || 0 === BB.bones.length) throw new Error("Invalid or empty skeleton provided");
        let VB = TB;
        TB && 0 !== TB.length || (VB = BB.animations.map((BB => BB.name)));
        let yB = null;
        for (const gB of VB) {
          const TB = BB.getAnimationRange(gB);
          TB && (yB = yB ? new zl.e("animation-range", Math.min(yB.from, TB.from), Math.max(yB.to, TB.to)) : TB)
        }
        if (!yB && (BB.animations.length > 0 && (yB = BB.getAnimationRange(BB.animations[0].name)), !yB)) throw new Error("No animation range found in skeleton");
        const pB = dB || 1 / (BB.animations[0]?.framePerSecond || 30),
          lB = this._BuildBoneHierarchy(BB, VB);
        let JB = 0;
        for (const gB of lB) gB.positionKeys.length > 0 && (JB = Math.max(JB, gB.positionKeys.length)), gB.rotationKeys.length > 0 && (JB = Math.max(JB, gB.rotationKeys.length));
        0 === JB && (JB = Math.floor((yB.to - yB.from) / pB) + 1);
        let YB = "";
        return YB += "HIERARCHY\n", YB += this._ExportHierarchy(lB, 0), YB += "MOTION\n", YB += `Frames: ${JB}\n`, YB += `Frame Time: ${pB.toFixed(6)}\n`, YB += this._ExportMotionData(lB, JB, 0, VB), YB
      }
      static _BuildBoneHierarchy(BB, TB) {
        const dB = new Map,
          VB = [];
        for (const yB of BB.bones) {
          const BB = {
            bone: yB,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          dB.set(yB, BB)
        }
        for (const yB of BB.bones) {
          const BB = dB.get(yB);
          if (yB.animations.length > 0)
            for (const dB of yB.animations) TB.includes(dB.name) && ("position" === dB.targetProperty ? (BB.hasPositionChannels = !0, BB.positionKeys.push(...dB.getKeys())) : "rotationQuaternion" === dB.targetProperty && (BB.hasRotationChannels = !0, BB.rotationKeys.push(...dB.getKeys())));
          if (yB.getParent()) {
            const TB = dB.get(yB.getParent());
            TB && TB.children.push(BB)
          } else VB.push(BB)
        }
        return VB
      }
      static _ExportHierarchy(BB, TB) {
        let dB = "";
        const VB = "    ".repeat(TB);
        for (const yB of BB) {
          const BB = yB.bone;
          if (this._IsEndSite(yB)) {
            dB += `${VB}End Site\n`, dB += `${VB}{\n`;
            const TB = this._GetBoneOffset(BB);
            dB += `${VB}    OFFSET ${TB.x.toFixed(6)} ${TB.y.toFixed(6)} ${TB.z.toFixed(6)}\n`, dB += `${VB}}\n`
          } else {
            dB += `${0===TB?"ROOT":`${VB}JOINT`} ${BB.name}\n`, dB += `${VB}{\n`;
            const pB = this._GetBoneOffset(BB);
            dB += `${VB}    OFFSET ${pB.x.toFixed(6)} ${pB.y.toFixed(6)} ${pB.z.toFixed(6)}\n`;
            const lB = [];
            yB.hasPositionChannels && lB.push("Xposition", "Yposition", "Zposition"), yB.hasRotationChannels && lB.push("Zrotation", "Xrotation", "Yrotation"), lB.length > 0 && (dB += `${VB}    CHANNELS ${lB.length} ${lB.join(" ")}\n`), yB.children.length > 0 && (dB += this._ExportHierarchy(yB.children, TB + 1)), dB += `${VB}}\n`
          }
        }
        return dB
      }
      static _IsEndSite(BB) {
        return 0 === BB.children.length
      }
      static _GetBoneOffset(BB) {
        try {
          if (!BB.getParent()) return BB.getRestMatrix().getTranslation();
          return BB.getLocalMatrix().getTranslation()
        } catch (TB) {
          return VB.RD.Zero()
        }
      }
      static _ExportMotionData(BB, TB, dB, VB) {
        let yB = "";
        for (let pB = 0; pB < TB; pB++) {
          const TB = [];
          this._CollectFrameValues(BB, pB + dB, TB, VB), yB += TB.map((BB => BB.toFixed(6))).join(" ") + "\n"
        }
        return yB
      }
      static _CollectFrameValues(BB, TB, dB, VB) {
        for (const yB of BB)
          if (!this._IsEndSite(yB)) {
            if (yB.hasPositionChannels) {
              const BB = this._GetPositionAtFrameIndex(yB.positionKeys, TB);
              dB.push(BB.x, BB.y, BB.z)
            }
            if (yB.hasRotationChannels) {
              const BB = this._GetRotationAtFrameIndex(yB.rotationKeys, TB),
                VB = this._QuaternionToEuler(BB);
              dB.push(VB.z, VB.x, VB.y)
            }
            yB.children.length > 0 && this._CollectFrameValues(yB.children, TB, dB, VB)
          }
      }
      static _GetPositionAtFrameIndex(BB, TB) {
        if (0 === BB.length) return VB.RD.Zero();
        return BB[Math.max(0, Math.min(TB, BB.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(BB, TB) {
        if (0 === BB.length) return VB.Quaternion.Identity();
        return BB[Math.max(0, Math.min(TB, BB.length - 1))].value.clone()
      }
      static _QuaternionToEuler(BB) {
        const TB = new VB.Matrix;
        BB.toRotationMatrix(TB);
        const dB = TB.m;
        let pB, lB, JB;
        const YB = Math.sqrt(dB[0] * dB[0] + dB[1] * dB[1]);
        return YB > cd.b ? (pB = Math.atan2(dB[6], dB[10]), lB = Math.atan2(-dB[2], YB), JB = Math.atan2(dB[1], dB[0])) : (pB = Math.atan2(-dB[9], dB[5]), lB = Math.atan2(-dB[2], YB), JB = 0), new VB.RD(yB.Tools.ToDegrees(pB), yB.Tools.ToDegrees(lB), yB.Tools.ToDegrees(JB))
      }
    }

    function Ul(BB) {
      return "string" === typeof BB?.name
    }
    const Fl = Symbol("__xml:meta$__"),
      Kl = Symbol("__xml:name$__");

    function rl(BB, TB) {
      Object.prototype.hasOwnProperty.call(BB.metadata, Fl) || (BB.metadata[Fl] = []), BB.metadata[Fl].push(TB)
    }

    function Il(BB) {
      return (TB, dB) => {
        TB[Kl] = BB
      }
    }

    function cl() {
      return (BB, TB) => rl(TB, {
        kind: "none",
        prop: String(TB.name),
        ignore: !0
      })
    }

    function Sl(BB) {
      return (TB, dB) => rl(dB, {
        kind: "attr",
        prop: String(dB.name),
        ...BB
      })
    }

    function Pl(BB) {
      return (TB, dB) => rl(dB, {
        kind: "elem",
        prop: String(dB.name),
        ...BB
      })
    }

    function Ql(BB) {
      const TB = "function" === typeof BB ? BB : BB?.constructor,
        dB = TB?.[Symbol.metadata];
      if (!dB) return [];
      const VB = [];
      let yB = dB;
      for (; yB;) Object.prototype.hasOwnProperty.call(yB, Fl) && VB.push(...yB[Fl]), yB = Object.getPrototypeOf(yB);
      return VB
    }

    function Rl(BB) {
      const TB = BB?.constructor?.[Kl];
      return TB || void 0
    }

    function al(BB) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(BB)
    }

    function Zl(BB) {
      if (Ul(BB)) return BB;
      const TB = (BB ?? "").trim();
      if (!TB) return {
        name: ""
      };
      const dB = TB.indexOf(":");
      if (-1 === dB) return {
        name: TB
      };
      if (-1 !== TB.indexOf(":", dB + 1)) return {
        name: TB
      };
      const VB = TB.slice(0, dB),
        yB = TB.slice(dB + 1);
      return al(VB) && al(yB) ? {
        ns: VB,
        name: yB
      } : {
        name: TB
      }
    }

    function Xl(BB, TB) {
      return TB ? `${TB}:${BB}` : BB
    }
    const Wl = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      hl = Object.freeze({
        number: Wl
      });

    function Cl(BB) {
      const TB = BB?.eps ?? Wl.eps;
      return {
        eps: TB,
        maxDecimalsCap: BB?.maxDecimalsCap ?? Wl.maxDecimalsCap,
        trimTrailingZeros: BB?.trimTrailingZeros ?? Wl.trimTrailingZeros,
        fixedDecimals: BB?.fixedDecimals,
        allowScientific: BB?.allowScientific ?? Wl.allowScientific,
        snapNearZero: BB?.snapNearZero ?? Wl.snapNearZero,
        zeroThreshold: BB?.zeroThreshold ?? TB,
        perAttributeEps: BB?.perAttributeEps
      }
    }

    function Gl(BB) {
      return {
        number: Cl(BB?.number)
      }
    }
    class ql {
      constructor(BB) {
        if (this.o = BB, this._o = BB.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(BB) {
        if (!Number.isFinite(BB)) throw new Error(`Cannot format non-finite number: ${BB}`);
        const TB = this._o,
          dB = this._clampInt(TB.maxDecimalsCap ?? 15, 0, 20),
          VB = TB.trimTrailingZeros ?? !0,
          yB = TB.snapNearZero ?? !0,
          pB = TB.zeroThreshold ?? TB.eps,
          lB = 1 / TB.eps;
        let JB, YB = Math.round(BB * lB) / lB;
        if (Object.is(YB, -0) && (YB = 0), yB && Math.abs(YB) <= pB && (YB = 0), JB = void 0 !== TB.fixedDecimals ? this._clampInt(TB.fixedDecimals, 0, dB) : this._clampInt(Math.ceil(-Math.log10(TB.eps)), 0, dB), TB.allowScientific, 0 === JB) return String(Math.trunc(YB));
        let gB = YB.toFixed(JB);
        if (VB && void 0 === TB.fixedDecimals && (gB = gB.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(gB)) throw new Error(`Scientific notation not allowed in XML output: ${gB}`);
        return gB
      }
      _clampInt(BB, TB, dB) {
        return Number.isFinite(BB) ? (BB = Math.trunc(BB), Math.max(TB, Math.min(dB, BB))) : TB
      }
    }

    function xl(BB) {
      return BB instanceof Date
    }

    function jl(BB) {
      return "string" === typeof BB
    }

    function Al(BB) {
      return "string" === typeof BB || "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || xl(BB)
    }

    function bl(BB) {
      return "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || xl(BB)
    }
    class nl {
      constructor(BB, TB) {
        this._ns = new Map, this._prefixCount = 0, this._builder = BB, this._format = Gl(TB), this._nFmt = new ql(this._format)
      }
      withNamespace() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        for (const VB of TB) this._assignNamespace(VB);
        return this
      }
      serialize(BB, TB) {
        if (!(TB = TB ?? Rl(BB))) throw new Error("can not find name for given object");
        const dB = Zl(TB);
        dB.ns && this._assignNamespace(dB.ns, "xmlns"), this._gatherNamespaces(BB, new WeakSet);
        const VB = this._builder.ele(null, dB.name);
        for (const [yB, pB] of Array.from(this._ns.entries())) VB.att("xmlns", pB, yB);
        this._writeObjectContent(VB, BB, (new WeakSet).add(BB)), this._builder.end()
      }
      _writeObject(BB, TB, dB) {
        if (dB.has(TB)) return;
        if (dB.add(TB), Array.isArray(TB)) {
          for (const VB of TB) bl(VB) || (jl(VB) ? this._builder.text(VB) : this._writeObject(BB, VB, dB));
          return
        }
        const VB = Rl(TB);
        if (!VB) return;
        const yB = Zl(VB),
          pB = this._getPrefix(yB),
          lB = Xl(yB.name, pB);
        BB.ele(null, lB), this._writeObjectContent(BB, TB, dB), this._builder.end()
      }
      _getPrefix(BB) {
        if (BB.ns) {
          const TB = this._ns.get(BB.ns.toLowerCase());
          if ("xmlns" !== TB) return TB
        }
      }
      _writeObjectContent(BB, TB, dB) {
        const VB = Ql(TB) ?? [],
          yB = new Map;
        for (const lB of VB) {
          const BB = yB.get(lB.prop) ?? [];
          BB.push(lB), yB.set(lB.prop, BB)
        }
        const pB = Object.keys(TB).sort(((BB, TB) => {
          const dB = (yB.get(BB) ?? []).some((BB => "attr" === BB.kind));
          return dB === (yB.get(TB) ?? []).some((BB => "attr" === BB.kind)) ? 0 : dB ? -1 : 1
        }));
        for (const lB of pB) {
          const VB = TB[lB];
          if (null === VB || void 0 === VB) continue;
          const pB = yB.get(lB);
          if (pB) {
            if (pB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const TB of pB) {
              const dB = TB.name ?? TB.prop.toLowerCase();
              if (dB) switch (TB.kind) {
                case "attr": {
                  let yB = null;
                  if ("number" === typeof VB && this._nFmt && (yB = this._nFmt.toString(VB)), TB.formatter) {
                    yB = new TB.formatter(this._format).toString(VB)
                  }
                  if (yB = yB ?? VB.toString(), yB) {
                    const TB = Zl(dB),
                      VB = this._getPrefix(TB),
                      pB = Xl(TB.name, VB);
                    BB.att(null, pB, yB)
                  }
                  break
                }
              }
            }
          } else bl(VB) || (jl(VB) ? this._builder.text(VB) : this._writeObject(BB, VB, dB))
        }
      }
      _gatherNamespaces(BB, TB) {
        if (TB.has(BB)) return;
        if (TB.add(BB), Array.isArray(BB)) {
          for (const dB of BB) Al(dB) || this._gatherNamespaces(dB, TB);
          return
        }
        const dB = Rl(BB);
        dB && this._assignNamespace(dB);
        const VB = Ql(BB) ?? [],
          yB = new Map;
        for (const lB of VB) {
          const BB = yB.get(lB.prop) ?? [];
          BB.push(lB), yB.set(lB.prop, BB)
        }
        const pB = [];
        for (const lB of Object.keys(BB)) {
          const TB = BB[lB];
          if (null === TB || void 0 === TB) continue;
          const dB = yB.get(lB);
          if (dB) {
            if (dB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const BB of dB) BB.name && this._assignNamespace(BB.name)
          }
          pB.push(TB)
        }
        for (const lB of pB) Al(lB) || this._gatherNamespaces(lB, TB)
      }
      _assignNamespace(BB, TB) {
        const dB = Zl(BB);
        if (dB?.ns) {
          const BB = dB.ns.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, TB ?? this._buildNsPrefix(BB))
        } else if ("xmlns" === TB) {
          const BB = dB.name.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, TB ?? this._buildNsPrefix(BB))
        }
      }
      _buildNsPrefix(BB) {
        let TB, dB = !1;
        do {
          TB = "ns" + this._prefixCount++;
          for (const BB of Array.from(this._ns.values()))
            if (BB === TB) {
              dB = !0;
              break
            }
        } while (dB);
        return TB
      }
    }
    class el {}
    var BJ;
    el.OpenTag = "<", el.CloseTag = ">", el.Slash = "/", el.Question = "?", el.Quote = '"', el.Equal = "=", el.Space = " ", el.Semicolon = ":", el.Dec = "<?xml", el.Xml = "xml", el.Xmlns = "xmlns", el.Xsi = "xsi", el.VersionKeyword = "version", el.EncodingKeyword = "encoding", el.StandaloneKeyword = "standalone",
      function(BB) {
        BB[BB.Declaration = 0] = "Declaration", BB[BB.Tag = 1] = "Tag", BB[BB.Attribute = 2] = "Attribute", BB[BB.Text = 3] = "Text"
      }(BJ || (BJ = {}));
    class TJ {
      constructor(BB) {
        this._ctxStack = [], this._d = 0, this._w = BB
      }
      dec(BB, TB, dB) {
        return this._w.write(el.Dec), this._writeAttStr(el.VersionKeyword, BB), TB && this._writeAttStr(el.EncodingKeyword, TB), void 0 !== dB && this._writeAttStr(el.StandaloneKeyword, dB ? "yes" : "no"), this._w.write(el.Question, el.CloseTag), this
      }
      att(BB, TB, dB) {
        const VB = this._peekContext();
        if (!VB) throw new Error("att() without open element");
        if (VB.closed) throw new Error(`att() after start tag closed for <${VB.name}>`);
        if (this._isXmlnsDecl(BB, TB)) {
          if (TB === el.Xmlns) VB.defaultNs = dB, this._registerNamespace(VB, "", dB), this._writeAttStr(el.Xmlns, dB);
          else if (BB) this._registerNamespace(VB, TB, dB), this._writeAttStr(`${BB}:${TB}`, dB);
          else {
            const BB = TB.slice(6);
            this._registerNamespace(VB, BB, dB), this._writeAttStr(TB, dB)
          }
          return VB.lastToken = BJ.Attribute, this
        }
        let yB = TB;
        if (BB) {
          yB = `${this._ensurePrefixDeclared(VB,BB)}:${TB}`
        }
        return VB.lastToken = BJ.Attribute, this._writeAttStr(yB, dB), this
      }
      ele(BB, TB) {
        const dB = this._peekContext();
        dB && this._closeOpenTagIfNeeded(dB);
        let VB = TB;
        if (BB) {
          VB = `${this._lookupPrefix(BB)??BB}:${TB}`
        }
        return this._pushContext(VB, ++this._d), this._w.write(el.OpenTag, VB), this
      }
      text(BB) {
        const TB = this._peekContext();
        if (!TB) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(TB), TB.lastToken = BJ.Text, this._w.write(this._escText(BB)), this
      }
      end() {
        const BB = this._popContext();
        return BB && (this._d--, BB.closed ? this._w.write(el.OpenTag, el.Slash, BB.name, el.CloseTag) : this._w.write(el.Slash, el.CloseTag)), this
      }
      _pushContext(BB, TB) {
        const dB = new TJ.Context(BB, TB);
        return this._ctxStack.push(dB), dB
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
      _writeAttStr(BB, TB) {
        this._w.write(el.Space, BB, el.Equal, el.Quote, this._escAttr(TB), el.Quote)
      }
      _lookupPrefix(BB) {
        let TB = this._ctxStack.length - 1;
        if (TB >= 0)
          do {
            const dB = this._ctxStack[TB--],
              VB = dB.ns2prefix?.get(BB);
            if (VB) return VB
          } while (TB >= 0)
      }
      _escText(BB) {
        return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(BB) {
        return this._escText(BB).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(BB, TB) {
        if (BB) return BB === el.Xmlns;
        const dB = TB.length,
          VB = el.Xmlns.length;
        return dB >= VB && (TB.startsWith(el.Xmlns) && (TB.length == VB || TB[VB] == el.Semicolon))
      }
      _registerNamespace(BB, TB, dB) {
        if (TB === el.Xml || TB === el.Xmlns) throw new Error(`reserved prefix '${TB}'`);
        const VB = BB.prefix2ns.get(TB);
        if (VB && VB !== dB) throw new Error(`prefix '${TB}' already bound to a different namespace`);
        BB.ns2prefix.get(dB) || BB.ns2prefix.set(dB, TB), BB.prefix2ns.set(TB, dB)
      }
      _allocPrefix(BB) {
        let TB = 1;
        for (;;) {
          const dB = "ns" + TB++;
          if (!BB.prefix2ns.has(dB)) return dB
        }
      }
      _ensurePrefixDeclared(BB, TB) {
        const dB = this._lookupPrefix(TB);
        if (dB) return dB;
        if (BB.closed) throw new Error(`can not declare namespace after start tag closed for <${BB.name}>`);
        const VB = this._allocPrefix(BB);
        return this._writeAttStr(`${el.Xmlns}:${VB}`, TB), this._registerNamespace(BB, VB, TB), VB
      }
      _closeOpenTagIfNeeded(BB) {
        BB.closed || (this._w.write(el.CloseTag), BB.closed = !0)
      }
    }
    TJ.Context = class {
      constructor(BB, TB) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = BB, this.depth = TB
      }
    };
    class dJ {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        if (0 === TB.length) return this;
        const VB = TB.join("");
        return this._chunks.push(VB), this.count += VB.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class VJ {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = BB, this._opts = TB, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        if (0 === TB.length) return this;
        const VB = TB.join("");
        if (0 === VB.length) return this;
        this._pending += VB, this._pendingChars += VB.length;
        const yB = this._opts.flushChars ?? 65536;
        return this._pendingChars >= yB && this.flush(), this
      }
      flush() {
        if (0 === this._pendingChars) return this;
        const BB = this._encoder.encode(this._pending);
        return this._sink.push(BB), this.count += BB.length, this._pending = "", this._pendingChars = 0, this
      }
      finish() {
        this.flush(), this._sink.push(new Uint8Array(0), !0)
      }
      clear() {
        this._pending = "", this._pendingChars = 0, this.count = 0
      }
    }
    const yJ = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      pJ = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var lJ, JJ;
    ! function(BB) {
      BB.micron = "micron", BB.millimeter = "millimeter", BB.centimeter = "centimeter", BB.inch = "inch", BB.foot = "foot", BB.meter = "meter"
    }(lJ || (lJ = {})),
    function(BB) {
      BB.model = "model", BB.solidsupport = "solidsupport", BB.support = "support", BB.surface = "surface", BB.other = "other"
    }(JJ || (JJ = {}));
    const YJ = "http://schemas.openxmlformats.org/package/2006/content-types",
      gJ = "http://schemas.openxmlformats.org/package/2006/relationships";
    var oJ;
    ! function(BB) {
      BB.Relationships = "application/vnd.openxmlformats-package.relationships+xml", BB.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", BB.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", BB.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", BB.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", BB.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", BB.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", BB.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", BB.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", BB.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", BB.Png = "image/png", BB.Jpeg = "image/jpeg", BB.Tiff = "image/tiff", BB.Xml = "application/xml"
    }(oJ || (oJ = {}));
    const kJ = "_rels/",
      LJ = "3D/",
      OJ = "3dmodel.model",
      DJ = ".rels",
      uJ = "[Content_Types].xml";
    class HJ {
      static IsKnown(BB) {
        return HJ.Known.has(BB)
      }
      static IsThreeDimModel(BB) {
        return BB === HJ.ThreeDimModel
      }
    }
    HJ.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", HJ.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", HJ.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", HJ.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", HJ.Known = new Set([HJ.ThreeDimModel, HJ.Thumbnail, HJ.PrintTicket, HJ.MustPreserve]);
    let EJ = (() => {
        let BB, TB, dB = [Il({
            ns: YJ,
            name: "Types"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfContentTypes"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      vJ = (() => {
        let BB, TB, dB, VB, yB = [Il({
            ns: YJ,
            name: "Default"
          })],
          pB = [],
          lB = [],
          JB = [],
          YB = [],
          gB = [];
        TB = class {
          constructor(BB, TB) {
            this.ext = (0, MB.h)(this, lB, void 0), this.ct = ((0, MB.h)(this, JB), (0, MB.h)(this, YB, void 0)), (0, MB.h)(this, gB), this.ext = BB, this.ct = TB
          }
        };
        return (0, MB.i)(TB, "ThreeMfContentType"), (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: {
              ns: YJ,
              name: "Extension"
            }
          })], VB = [Sl({
            name: {
              ns: YJ,
              name: "ContentType"
            }
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: BB => "ext" in BB,
              get: BB => BB.ext,
              set: (BB, TB) => {
                BB.ext = TB
              }
            },
            metadata: oB
          }, lB, JB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: BB => "ct" in BB,
              get: BB => BB.ct,
              set: (BB, TB) => {
                BB.ct = TB
              }
            },
            metadata: oB
          }, YB, gB), (0, MB.g)(null, BB = {
            value: TB
          }, yB, {
            kind: "class",
            name: TB.name,
            metadata: oB
          }, null, pB), TB = BB.value, oB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          }), (0, MB.h)(TB, pB)
        })(), TB
      })(),
      mJ = (() => {
        let BB, TB, dB = [Il({
            ns: gJ,
            name: "Relationships"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfRelationships"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      iJ = (() => {
        let BB, TB, dB, VB, yB, pB = [Il({
            ns: gJ,
            name: "Relationship"
          })],
          lB = [],
          JB = [],
          YB = [],
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        TB = class {
          constructor(BB, TB, dB) {
            this.id = (0, MB.h)(this, JB, void 0), this.type = ((0, MB.h)(this, YB), (0, MB.h)(this, gB, void 0)), this.target = ((0, MB.h)(this, oB), (0, MB.h)(this, kB, void 0)), (0, MB.h)(this, LB), this.id = BB, this.type = TB, this.target = dB
          }
        };
        return (0, MB.i)(TB, "ThreeMfRelationship"), (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "Id"
          })], VB = [Sl({
            name: "Type"
          })], yB = [Sl({
            name: "Target"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, TB) => {
                BB.id = TB
              }
            },
            metadata: OB
          }, JB, YB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, TB) => {
                BB.type = TB
              }
            },
            metadata: OB
          }, gB, oB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: BB => "target" in BB,
              get: BB => BB.target,
              set: (BB, TB) => {
                BB.target = TB
              }
            },
            metadata: OB
          }, kB, LB), (0, MB.g)(null, BB = {
            value: TB
          }, pB, {
            kind: "class",
            name: TB.name,
            metadata: OB
          }, null, lB), TB = BB.value, OB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          }), (0, MB.h)(TB, lB)
        })(), TB
      })();
    class NJ {
      constructor(BB, TB, dB) {
        this.contentTypes = BB, this.relationships = TB, this.model = dB
      }
    }
    class tJ {
      static Zero() {
        return new tJ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(BB) {
        this.values = BB
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class fJ {
      constructor(BB) {
        this.o = BB, this._f = new ql(BB)
      }
      toString(BB) {
        return BB.values.map((BB => this._f.toString(BB))).join(" ")
      }
    }
    let sJ = (() => {
        let BB, TB, dB, VB, yB, pB = [Il({
            ns: yJ,
            name: "model"
          })],
          lB = [],
          JB = [],
          YB = [],
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        TB = class {
          constructor() {
            this.unit = (0, MB.h)(this, JB, lJ.millimeter), this.requiredextensions = ((0, MB.h)(this, YB), (0, MB.h)(this, gB, void 0)), this.recommendedextensions = ((0, MB.h)(this, oB), (0, MB.h)(this, kB, void 0)), this.metadata = (0, MB.h)(this, LB)
          }
        };
        return (0, MB.i)(TB, "ThreeMfModel"), (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "unit"
          })], VB = [Sl({
            name: "requiredextensions"
          })], yB = [Sl({
            name: "recommendedextensions"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unit" in BB,
              get: BB => BB.unit,
              set: (BB, TB) => {
                BB.unit = TB
              }
            },
            metadata: OB
          }, JB, YB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "requiredextensions" in BB,
              get: BB => BB.requiredextensions,
              set: (BB, TB) => {
                BB.requiredextensions = TB
              }
            },
            metadata: OB
          }, gB, oB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "recommendedextensions" in BB,
              get: BB => BB.recommendedextensions,
              set: (BB, TB) => {
                BB.recommendedextensions = TB
              }
            },
            metadata: OB
          }, kB, LB), (0, MB.g)(null, BB = {
            value: TB
          }, pB, {
            kind: "class",
            name: TB.name,
            metadata: OB
          }, null, lB), TB = BB.value, OB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          })
        })(), TB.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, MB.h)(TB, lB), TB
      })(),
      MJ = (() => {
        let BB, TB, dB, VB, yB, pB = [Il({
            ns: yJ,
            name: "meta"
          })],
          lB = [],
          JB = [],
          YB = [],
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        TB = class {
          constructor(BB, TB, dB, VB) {
            this.name = (0, MB.h)(this, JB, void 0), this.preserve = ((0, MB.h)(this, YB), (0, MB.h)(this, gB, void 0)), this.type = ((0, MB.h)(this, oB), (0, MB.h)(this, kB, void 0)), this.value = (0, MB.h)(this, LB), this.name = BB, this.value = TB, this.preserve = dB, this.type = VB
          }
        };
        return (0, MB.i)(TB, "ThreeMfMeta"), (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "name"
          })], VB = [Sl({
            name: "preserve"
          })], yB = [Sl({
            name: "type"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, TB) => {
                BB.name = TB
              }
            },
            metadata: OB
          }, JB, YB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: BB => "preserve" in BB,
              get: BB => BB.preserve,
              set: (BB, TB) => {
                BB.preserve = TB
              }
            },
            metadata: OB
          }, gB, oB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, TB) => {
                BB.type = TB
              }
            },
            metadata: OB
          }, kB, LB), (0, MB.g)(null, BB = {
            value: TB
          }, pB, {
            kind: "class",
            name: TB.name,
            metadata: OB
          }, null, lB), TB = BB.value, OB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          }), (0, MB.h)(TB, lB)
        })(), TB
      })(),
      zJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "metadatagroup"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfMetadataGroup"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      wJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "resources"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.object = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfResources"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      UJ = (() => {
        let BB, TB, dB, VB, yB, pB, lB, JB, YB, gB = [Il({
            ns: yJ,
            name: "object"
          })],
          oB = [],
          kB = [],
          LB = [],
          OB = [],
          DB = [],
          uB = [],
          HB = [],
          EB = [],
          vB = [],
          mB = [],
          iB = [],
          NB = [],
          tB = [],
          fB = [],
          sB = [];
        TB = class {
          constructor(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.model;
            this.id = (0, MB.h)(this, kB, void 0), this.type = ((0, MB.h)(this, LB), (0, MB.h)(this, OB, void 0)), this.thumbnail = ((0, MB.h)(this, DB), (0, MB.h)(this, uB, void 0)), this.partnumber = ((0, MB.h)(this, HB), (0, MB.h)(this, EB, void 0)), this.name = ((0, MB.h)(this, vB), (0, MB.h)(this, mB, void 0)), this.pid = ((0, MB.h)(this, iB), (0, MB.h)(this, NB, void 0)), this.pindex = ((0, MB.h)(this, tB), (0, MB.h)(this, fB, void 0)), this.metadatagroup = (0, MB.h)(this, sB), this.id = BB, this.type = TB
          }
        };
        return (0, MB.i)(TB, "ThreeMfObject"), (() => {
          const zB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "id"
          })], VB = [Sl({
            name: "type"
          })], yB = [Sl({
            name: "thumbnail"
          })], pB = [Sl({
            name: "partnumber"
          })], lB = [Sl({
            name: "name"
          })], JB = [Sl({
            name: "pid"
          })], YB = [Sl({
            name: "pindex"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, TB) => {
                BB.id = TB
              }
            },
            metadata: zB
          }, kB, LB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, TB) => {
                BB.type = TB
              }
            },
            metadata: zB
          }, OB, DB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: BB => "thumbnail" in BB,
              get: BB => BB.thumbnail,
              set: (BB, TB) => {
                BB.thumbnail = TB
              }
            },
            metadata: zB
          }, uB, HB), (0, MB.g)(null, null, pB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, TB) => {
                BB.partnumber = TB
              }
            },
            metadata: zB
          }, EB, vB), (0, MB.g)(null, null, lB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, TB) => {
                BB.name = TB
              }
            },
            metadata: zB
          }, mB, iB), (0, MB.g)(null, null, JB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, TB) => {
                BB.pid = TB
              }
            },
            metadata: zB
          }, NB, tB), (0, MB.g)(null, null, YB, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: BB => "pindex" in BB,
              get: BB => BB.pindex,
              set: (BB, TB) => {
                BB.pindex = TB
              }
            },
            metadata: zB
          }, fB, sB), (0, MB.g)(null, BB = {
            value: TB
          }, gB, {
            kind: "class",
            name: TB.name,
            metadata: zB
          }, null, oB), TB = BB.value, zB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zB
          }), (0, MB.h)(TB, oB)
        })(), TB
      })(),
      FJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "mesh"
          })],
          VB = [];
        TB = class {
          constructor(BB, TB) {
            this.vertices = BB ?? new KJ, this.triangles = TB ?? new IJ
          }
        };
        return (0, MB.i)(TB, "ThreeMfMesh"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      KJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "vertices"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfVertices"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      rJ = (() => {
        let BB, TB, dB, VB, yB, pB = [Il({
            ns: yJ,
            name: "vertex"
          })],
          lB = [],
          JB = [],
          YB = [],
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        TB = class {
          constructor() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, MB.h)(this, JB, void 0), this.y = ((0, MB.h)(this, YB), (0, MB.h)(this, gB, void 0)), this.z = ((0, MB.h)(this, oB), (0, MB.h)(this, kB, void 0)), (0, MB.h)(this, LB), this.x = BB, this.y = TB, this.z = dB
          }
        };
        return (0, MB.i)(TB, "ThreeMfVertex"), (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "x"
          })], VB = [Sl({
            name: "y"
          })], yB = [Sl({
            name: "z"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: BB => "x" in BB,
              get: BB => BB.x,
              set: (BB, TB) => {
                BB.x = TB
              }
            },
            metadata: OB
          }, JB, YB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: BB => "y" in BB,
              get: BB => BB.y,
              set: (BB, TB) => {
                BB.y = TB
              }
            },
            metadata: OB
          }, gB, oB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: BB => "z" in BB,
              get: BB => BB.z,
              set: (BB, TB) => {
                BB.z = TB
              }
            },
            metadata: OB
          }, kB, LB), (0, MB.g)(null, BB = {
            value: TB
          }, pB, {
            kind: "class",
            name: TB.name,
            metadata: OB
          }, null, lB), TB = BB.value, OB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          }), (0, MB.h)(TB, lB)
        })(), TB
      })(),
      IJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "triangles"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfTriangles"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      cJ = (() => {
        let BB, TB, dB, VB, yB, pB, lB, JB, YB, gB = [Il({
            ns: yJ,
            name: "triangle"
          })],
          oB = [],
          kB = [],
          LB = [],
          OB = [],
          DB = [],
          uB = [],
          HB = [],
          EB = [],
          vB = [],
          mB = [],
          iB = [],
          NB = [],
          tB = [],
          fB = [],
          sB = [];
        TB = class {
          constructor(BB, TB, dB) {
            this.v1 = (0, MB.h)(this, kB, void 0), this.v2 = ((0, MB.h)(this, LB), (0, MB.h)(this, OB, void 0)), this.v3 = ((0, MB.h)(this, DB), (0, MB.h)(this, uB, void 0)), this.p1 = ((0, MB.h)(this, HB), (0, MB.h)(this, EB, void 0)), this.p2 = ((0, MB.h)(this, vB), (0, MB.h)(this, mB, void 0)), this.p3 = ((0, MB.h)(this, iB), (0, MB.h)(this, NB, void 0)), this.pid = ((0, MB.h)(this, tB), (0, MB.h)(this, fB, void 0)), (0, MB.h)(this, sB), this.v1 = BB, this.v2 = TB, this.v3 = dB
          }
        };
        return (0, MB.i)(TB, "ThreeMfTriangle"), (() => {
          const zB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "v1"
          })], VB = [Sl({
            name: "v2"
          })], yB = [Sl({
            name: "v3"
          })], pB = [Sl({
            name: "p1"
          })], lB = [Sl({
            name: "p2"
          })], JB = [Sl({
            name: "p3"
          })], YB = [Sl({
            name: "pid"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: BB => "v1" in BB,
              get: BB => BB.v1,
              set: (BB, TB) => {
                BB.v1 = TB
              }
            },
            metadata: zB
          }, kB, LB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: BB => "v2" in BB,
              get: BB => BB.v2,
              set: (BB, TB) => {
                BB.v2 = TB
              }
            },
            metadata: zB
          }, OB, DB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: BB => "v3" in BB,
              get: BB => BB.v3,
              set: (BB, TB) => {
                BB.v3 = TB
              }
            },
            metadata: zB
          }, uB, HB), (0, MB.g)(null, null, pB, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: BB => "p1" in BB,
              get: BB => BB.p1,
              set: (BB, TB) => {
                BB.p1 = TB
              }
            },
            metadata: zB
          }, EB, vB), (0, MB.g)(null, null, lB, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: BB => "p2" in BB,
              get: BB => BB.p2,
              set: (BB, TB) => {
                BB.p2 = TB
              }
            },
            metadata: zB
          }, mB, iB), (0, MB.g)(null, null, JB, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: BB => "p3" in BB,
              get: BB => BB.p3,
              set: (BB, TB) => {
                BB.p3 = TB
              }
            },
            metadata: zB
          }, NB, tB), (0, MB.g)(null, null, YB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, TB) => {
                BB.pid = TB
              }
            },
            metadata: zB
          }, fB, sB), (0, MB.g)(null, BB = {
            value: TB
          }, gB, {
            kind: "class",
            name: TB.name,
            metadata: zB
          }, null, oB), TB = BB.value, zB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zB
          }), (0, MB.h)(TB, oB)
        })(), TB
      })(),
      SJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "components"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.component = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfComponents"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      PJ = (() => {
        let BB, TB, dB, VB, yB = [Il({
            ns: yJ,
            name: "component"
          })],
          pB = [],
          lB = [],
          JB = [],
          YB = [],
          gB = [];
        TB = class {
          constructor(BB, TB) {
            this.objectid = (0, MB.h)(this, lB, void 0), this.transform = ((0, MB.h)(this, JB), (0, MB.h)(this, YB, void 0)), (0, MB.h)(this, gB), this.objectid = BB, this.transform = TB
          }
        };
        return (0, MB.i)(TB, "ThreeMfComponent"), (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "objectid"
          })], VB = [Sl({
            name: "transform",
            formatter: fJ
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, TB) => {
                BB.objectid = TB
              }
            },
            metadata: oB
          }, lB, JB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, TB) => {
                BB.transform = TB
              }
            },
            metadata: oB
          }, YB, gB), (0, MB.g)(null, BB = {
            value: TB
          }, yB, {
            kind: "class",
            name: TB.name,
            metadata: oB
          }, null, pB), TB = BB.value, oB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          }), (0, MB.h)(TB, pB)
        })(), TB
      })(),
      QJ = (() => {
        let BB, TB, dB, VB = [Il({
            ns: yJ,
            name: "basematerials"
          })],
          yB = [],
          pB = [],
          lB = [];
        TB = class {
          constructor(BB) {
            this.id = (0, MB.h)(this, pB, void 0), this.base = ((0, MB.h)(this, lB), []), this.id = BB
          }
        };
        return (0, MB.i)(TB, "ThreeMfBaseMaterials"), (() => {
          const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "id"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, TB) => {
                BB.id = TB
              }
            },
            metadata: JB
          }, pB, lB), (0, MB.g)(null, BB = {
            value: TB
          }, VB, {
            kind: "class",
            name: TB.name,
            metadata: JB
          }, null, yB), TB = BB.value, JB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JB
          }), (0, MB.h)(TB, yB)
        })(), TB
      })(),
      RJ = (() => {
        let BB, TB, dB, VB, yB = [Il({
            ns: yJ,
            name: "base"
          })],
          pB = [],
          lB = [],
          JB = [],
          YB = [],
          gB = [];
        TB = class {
          constructor(BB, TB) {
            this.name = (0, MB.h)(this, lB, void 0), this.displaycolor = ((0, MB.h)(this, JB), (0, MB.h)(this, YB, void 0)), (0, MB.h)(this, gB), this.name = BB, this.displaycolor = TB
          }
        };
        return (0, MB.i)(TB, "ThreeMfBase"), (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "name"
          })], VB = [Sl({
            name: "displaycolor"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, TB) => {
                BB.name = TB
              }
            },
            metadata: oB
          }, lB, JB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: BB => "displaycolor" in BB,
              get: BB => BB.displaycolor,
              set: (BB, TB) => {
                BB.displaycolor = TB
              }
            },
            metadata: oB
          }, YB, gB), (0, MB.g)(null, BB = {
            value: TB
          }, yB, {
            kind: "class",
            name: TB.name,
            metadata: oB
          }, null, pB), TB = BB.value, oB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          }), (0, MB.h)(TB, pB)
        })(), TB
      })(),
      aJ = (() => {
        let BB, TB, dB = [Il({
            ns: yJ,
            name: "build"
          })],
          VB = [];
        TB = class {
          constructor() {
            this.item = []
          }
        };
        return (0, MB.i)(TB, "ThreeMfBuild"), (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, MB.g)(null, BB = {
            value: TB
          }, dB, {
            kind: "class",
            name: TB.name,
            metadata: yB
          }, null, VB), TB = BB.value, yB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          }), (0, MB.h)(TB, VB)
        })(), TB
      })(),
      ZJ = (() => {
        let BB, TB, dB, VB, yB, pB = [Il({
            ns: yJ,
            name: "item"
          })],
          lB = [],
          JB = [],
          YB = [],
          gB = [],
          oB = [],
          kB = [],
          LB = [];
        TB = class {
          constructor(BB, TB, dB) {
            this.objectid = (0, MB.h)(this, JB, void 0), this.transform = ((0, MB.h)(this, YB), (0, MB.h)(this, gB, void 0)), this.partnumber = ((0, MB.h)(this, oB), (0, MB.h)(this, kB, void 0)), this.metadatagroup = (0, MB.h)(this, LB), this.objectid = BB, this.transform = TB, this.partnumber = dB
          }
        };
        return (0, MB.i)(TB, "ThreeMfItem"), (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          dB = [Sl({
            name: "objectid"
          })], VB = [Sl({
            name: "transform",
            formatter: fJ
          })], yB = [Sl({
            name: "partnumber"
          })], (0, MB.g)(null, null, dB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, TB) => {
                BB.objectid = TB
              }
            },
            metadata: OB
          }, JB, YB), (0, MB.g)(null, null, VB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, TB) => {
                BB.transform = TB
              }
            },
            metadata: OB
          }, gB, oB), (0, MB.g)(null, null, yB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, TB) => {
                BB.partnumber = TB
              }
            },
            metadata: OB
          }, kB, LB), (0, MB.g)(null, BB = {
            value: TB
          }, pB, {
            kind: "class",
            name: TB.name,
            metadata: OB
          }, null, lB), TB = BB.value, OB && Object.defineProperty(TB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          }), (0, MB.h)(TB, lB)
        })(), TB
      })();
    class XJ {
      constructor(BB, TB) {
        this._object = new UJ(BB, TB)
      }
      withName(BB) {
        return this._object.name = BB, this
      }
      withThumbnail(BB) {
        return this._object.thumbnail = BB, this
      }
      withProperty(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = BB, this._object.id = TB, this
      }
      build() {
        return this._object
      }
      reset(BB, TB) {
        this._object = new UJ(BB, TB)
      }
    }
    class WJ extends XJ {
      constructor(BB) {
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.model), this._object.content = new SJ
      }
      withComponent(BB, TB) {
        return this._object.content.component.push(new PJ(BB, TB)), this
      }
    }
    class hJ extends XJ {
      constructor(BB) {
        super(BB, JJ.model)
      }
      withPostProcessHandlers(BB, TB) {
        return this._vh = BB, this._th = TB, this
      }
      withData(BB) {
        return this._object.content = this._buildMesh(BB), this
      }
      withMaterial(BB, TB) {
        return this._object.pid = BB, this._object.pindex = TB, this
      }
      _buildMesh(BB) {
        const TB = this._buildVertices(BB.positions),
          dB = this._buildTriangle(BB.indices);
        return new FJ(TB, dB)
      }
      _buildVertices(BB) {
        const TB = new KJ;
        if (BB)
          for (let dB = 0; dB < BB.length;) {
            const VB = BB[dB++],
              yB = BB[dB++],
              pB = BB[dB++];
            let lB = new rJ(VB, yB, pB);
            this._vh && (lB = this._vh(lB)), TB.vertex.push(lB)
          }
        return TB
      }
      _buildTriangle(BB) {
        const TB = new IJ;
        if (BB)
          for (let dB = 0; dB < BB.length;) {
            const VB = BB[dB++],
              yB = BB[dB++],
              pB = BB[dB++];
            let lB = new cJ(VB, yB, pB);
            this._th && (lB = this._th(lB)), TB.triangle.push(lB)
          }
        return TB
      }
    }
    class CJ {
      constructor(BB) {
        this._m = new QJ(BB)
      }
      withColor(BB, TB) {
        this._m.base = this._m.base ?? [];
        let dB = this._m.base.find((TB => TB.name.toLowerCase() === BB.toLowerCase()));
        return dB ? (dB.displaycolor = this._rgbaToHex(TB), this) : (dB = new RJ(BB, this._rgbaToHex(TB)), this._m.base.push(dB), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(BB) {
        const TB = BB => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(BB, 1 / 2.2)))),
          dB = TB(BB.r).toString(16).padStart(2, "0").toUpperCase(),
          VB = TB(BB.g).toString(16).padStart(2, "0").toUpperCase(),
          yB = TB(BB.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof BB.a) {
          return `#${dB}${VB}${yB}${Math.round(Math.min(255,Math.max(0,255*BB.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${dB}${VB}${yB}`
      }
    }
    class GJ {
      constructor() {
        this._model = new sJ, this._objects = new Map
      }
      withMetaData(BB, TB, dB, VB) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new MJ(BB, TB, dB, VB)), this
      }
      withMaterial(BB) {
        return BB instanceof CJ && (BB = BB.build()), BB && (this._model.resources = this._model.resources ?? new wJ, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(BB)), this
      }
      withMesh(BB) {
        return BB instanceof hJ && (BB = BB.build()), this._model.resources = this._model.resources ?? new wJ, this._model.resources.object.push(BB), this
      }
      withComponents(BB) {
        return BB instanceof WJ && (BB = BB.build()), this._model.resources = this._model.resources ?? new wJ, this._model.resources.object.push(BB), this
      }
      withBuild(BB, TB, dB) {
        return this._model.build = this._model.build ?? new aJ, this._model.build.item?.push(new ZJ(BB, TB, dB)), this
      }
      withUnit(BB) {
        return this._model.unit = BB, this
      }
      reset() {
        return this._model = new sJ, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    GJ.KnownMetaSet = new Set(sJ.KnownMeta.map((BB => BB.toLowerCase())));
    class qJ {
      withContentType(BB) {
        this._cts || (this._cts = new EJ);
        const TB = this._cts.items;
        return TB.some((TB => TB.ext === BB.ext && TB.ct === BB.ct)) || TB.push(BB), this
      }
      withRelationship(BB) {
        this._rs || (this._rs = new mJ);
        const TB = this._rs.items;
        return TB.some((TB => TB.id === BB.id)) || TB.push(BB), this.withContentType(new vJ("rels", oJ.Relationships)), this
      }
      withModel(BB) {
        return BB instanceof GJ && (BB = BB.build()), this._m = BB, this.withContentType(new vJ("model", oJ.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const BB = `${LJ}${OJ}`;
        if (!this._rs) {
          const TB = `/${BB}`;
          this.withRelationship(new iJ("rel0", HJ.ThreeDimModel, TB))
        }
        return new NJ(this._cts, this._rs, this._m)
      }
    }
    class xJ {
      constructor(BB) {
        this._o = BB
      }
      get options() {
        return this._o
      }
      async serializeAsync(BB) {
        const TB = await this.ensureZipLibReadyAsync();
        if (!TB) return;
        const dB = TB.Zip,
          VB = TB.ZipDeflate;
        if (!dB || !VB) throw new Error("fflate Zip / ZipDeflate not available");
        const yB = function(BB, TB, dB) {
          const yB = new VB(TB, {
            level: 6
          });
          BB.add(yB);
          const pB = function(BB) {
              return {
                push: (TB, dB) => BB.push(TB, dB)
              }
            }(yB),
            lB = new VJ(pB),
            JB = new TJ(lB).dec("1.0", "UTF-8");
          new nl(JB).serialize(dB), lB.finish()
        };
        for (var pB = arguments.length, lB = new Array(pB > 1 ? pB - 1 : 0), JB = 1; JB < pB; JB++) lB[JB - 1] = arguments[JB];
        const YB = this.toDocument(...lB);
        if (!YB) return;
        const gB = new dB(BB);
        yB(gB, uJ, YB.contentTypes), yB(gB, `${kJ}${DJ}`, YB.relationships), yB(gB, `${LJ}${OJ}`, YB.model), gB.end()
      }
      toDocument() {
        const BB = (new GJ).withUnit(this._o?.unit ?? lJ.millimeter);
        if (this.options.metadata)
          for (const yB in this.options.metadata) BB.withMetaData(yB, this.options.metadata[yB]);
        for (var TB = arguments.length, dB = new Array(TB), VB = 0; VB < TB; VB++) dB[VB] = arguments[VB];
        return (new qJ).withModel(this.toModel(BB, ...dB)).build()
      }
    }
    class jJ {
      static async SerializeToMemoryAsync(BB) {
        const TB = new Array;
        let dB = 0;
        for (var VB = arguments.length, yB = new Array(VB > 1 ? VB - 1 : 0), pB = 1; pB < VB; pB++) yB[pB - 1] = arguments[pB];
        if (await BB.serializeAsync((function(BB, VB, yB) {
            TB.push(VB), dB += VB.length
          }), ...yB), !dB) return;
        const lB = new Uint8Array(dB);
        let JB = 0;
        for (const YB of TB) lB.set(YB, JB), JB += YB.length;
        return lB
      }
    }
    class AJ {}
    AJ.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class bJ {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = BB, this._to = TB, this._step = dB, this._i = BB
      }
      next() {
        if (this._i < this._to) throw new Error("ST_ResourceID out of bound");
        const BB = this._i;
        return this._i += this._step, BB
      }
      reset() {
        return this._i = this._from, this
      }
    }
    class nJ extends xJ {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...nJ.DefaultOptions,
          ...BB
        })
      }
      toModel(BB) {
        for (var TB = arguments.length, dB = new Array(TB > 1 ? TB - 1 : 0), VB = 1; VB < TB; VB++) dB[VB - 1] = arguments[VB];
        dB = dB.filter((BB => BB instanceof oV.c || BB instanceof OB.e));
        const yB = new bJ,
          pB = BB,
          lB = new Map,
          JB = this.options.exportInstances ? [] : null;
        for (let YB = 0; YB < dB.length; YB++) {
          const BB = dB[YB];
          if (BB instanceof OB.e) {
            JB?.push(BB);
            continue
          }
          const TB = BB.name || `mesh${YB}`,
            VB = BB.getWorldMatrix(),
            gB = this._handleBabylonTo3mfMatrixTransformToRef(VB, tJ.Zero()),
            oB = BB.oN;
          if (void 0 === oB) continue;
          const kB = 1 == oB.length;
          for (let dB = 0; dB < oB.length; dB++) {
            const VB = oB[dB],
              JB = this._extractSubMesh(BB, VB);
            if (JB) {
              const BB = kB ? `${TB}` : `${TB}_${dB}`,
                YB = new hJ(yB.next()).withData(JB).withName(BB).build();
              pB.withMesh(YB), pB.withBuild(YB.id, gB), lB.set(VB, YB)
            }
          }
        }
        if (JB && JB.length) {
          const BB = this._groupBy(JB, (BB => BB.myB));
          for (const [TB, dB] of Array.from(BB.entries()))
            if (dB && dB.length)
              for (let BB = 0; BB < dB.length; BB++) {
                const VB = dB[BB].getWorldMatrix(),
                  yB = TB.oN;
                for (let BB = 0; BB < yB.length; BB++) {
                  const TB = yB[BB],
                    dB = lB.get(TB);
                  dB && pB.withBuild(dB.id, this._handleBabylonTo3mfMatrixTransformToRef(VB, tJ.Zero()))
                }
              }
        }
        return pB.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const BB = globalThis;
          return BB.fflate || await yB.Tools.LoadScriptAsync(AJ.FFLATEUrl), BB.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(BB, TB) {
        const dB = BB.elB();
        if (!dB) return;
        const VB = BB.getVerticesData(nJ._PositionKind);
        if (!VB) return;
        if (0 == TB.indexStart && TB.indexCount == dB.length) return {
          positions: VB,
          indices: dB
        };
        const yB = TB.indexStart,
          pB = new Map,
          lB = [],
          JB = new Uint32Array(TB.indexCount);
        for (let YB = 0; YB < TB.indexCount; YB++) {
          const BB = dB[yB + YB];
          let TB = pB.get(BB);
          if (void 0 === TB) {
            TB = pB.size, pB.set(BB, TB);
            const dB = 3 * BB;
            lB.push(VB[dB], VB[dB + 1], VB[dB + 2])
          }
          JB[YB] = TB
        }
        return {
          positions: new Float32Array(lB),
          indices: JB
        }
      }
      _groupBy(BB, TB) {
        const dB = new Map;
        for (const VB of BB) {
          const BB = TB(VB),
            yB = dB.get(BB);
          yB ? yB.push(VB) : dB.set(BB, [VB])
        }
        return dB
      }
      _handleBabylonTo3mfMatrixTransformToRef(BB, TB) {
        const dB = BB.multiplyToRef(nJ._R_BJS_TO_3MF, RB.b.Zero()).m;
        return TB.values = [dB[0], dB[1], dB[2], dB[4], dB[5], dB[6], dB[8], dB[9], dB[10], dB[12], dB[13], dB[14]], TB
      }
    }
    nJ.DefaultOptions = {
      unit: lJ.meter,
      exportInstances: !1
    }, nJ._PositionKind = "position", nJ._R_BJS_TO_3MF = RB.b.RotationX(Math.PI / 2).multiply(RB.b.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);