export const id = 235;
export const ids = [235, 241];
export const modules = {
  41916: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(41862),
      nB = zB(40062);
    let dB = !1;

    function IB() {
      dB || (dB = !0, nB.c.prototype._sphericalPolynomialTargetSize = 0, nB.c.prototype.forceSphericalPolynomialsRecompute = function() {
        this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
      }, Object.defineProperty(nB.c.prototype, "sphericalPolynomial", {
        get: function() {
          if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
            if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = QB.b.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialComputed = !0 : this._texture._sphericalPolynomialPromise.then((BB => {
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
  37372: (BB, jB, zB) => {
    zB.d(jB, {
      Color3: () => QB.d,
      c: () => QB.g
    });
    var QB = zB(37379);
    (0, QB.k)()
  },
  37865: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = zB(37869);
    class nB {
      static GetPlanes(BB) {
        const jB = [];
        for (let zB = 0; zB < 6; zB++) jB.push(new QB.c(0, 0, 0, 0));
        return nB.GetPlanesToRef(BB, jB), jB
      }
      static GetNearPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[2], jB.normal.y = zB[7] + zB[6], jB.normal.z = zB[11] + zB[10], jB.d = zB[15] + zB[14], jB.normalize()
      }
      static GetFarPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[2], jB.normal.y = zB[7] - zB[6], jB.normal.z = zB[11] - zB[10], jB.d = zB[15] - zB[14], jB.normalize()
      }
      static GetLeftPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[0], jB.normal.y = zB[7] + zB[4], jB.normal.z = zB[11] + zB[8], jB.d = zB[15] + zB[12], jB.normalize()
      }
      static GetRightPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[0], jB.normal.y = zB[7] - zB[4], jB.normal.z = zB[11] - zB[8], jB.d = zB[15] - zB[12], jB.normalize()
      }
      static GetTopPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[1], jB.normal.y = zB[7] - zB[5], jB.normal.z = zB[11] - zB[9], jB.d = zB[15] - zB[13], jB.normalize()
      }
      static GetBottomPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[1], jB.normal.y = zB[7] + zB[5], jB.normal.z = zB[11] + zB[9], jB.d = zB[15] + zB[13], jB.normalize()
      }
      static GetPlanesToRef(BB, jB) {
        nB.GetNearPlaneToRef(BB, jB[0]), nB.GetFarPlaneToRef(BB, jB[1]), nB.GetLeftPlaneToRef(BB, jB[2]), nB.GetRightPlaneToRef(BB, jB[3]), nB.GetTopPlaneToRef(BB, jB[4]), nB.GetBottomPlaneToRef(BB, jB[5])
      }
      static IsPointInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; zB++)
          if (jB[zB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37869: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37171);
    class nB {
      constructor(BB, jB, zB, nB) {
        this.normal = new QB.m(BB, jB, zB), this.d = nB
      }
      nQB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let jB = 0;
        return 0 !== BB && (jB = 1 / BB), this.normal.x *= jB, this.normal.y *= jB, this.normal.z *= jB, this.d *= jB, this
      }
      transform(BB) {
        const jB = nB._TmpMatrix;
        BB.invertToRef(jB);
        const zB = jB.m,
          QB = this.normal.x,
          dB = this.normal.y,
          IB = this.normal.z,
          NB = this.d,
          uB = QB * zB[0] + dB * zB[1] + IB * zB[2] + NB * zB[3],
          UB = QB * zB[4] + dB * zB[5] + IB * zB[6] + NB * zB[7],
          aB = QB * zB[8] + dB * zB[9] + IB * zB[10] + NB * zB[11],
          pB = QB * zB[12] + dB * zB[13] + IB * zB[14] + NB * zB[15];
        return new nB(uB, UB, aB, pB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, jB, zB) {
        const QB = jB.x - BB.x,
          nB = jB.y - BB.y,
          dB = jB.z - BB.z,
          IB = zB.x - BB.x,
          NB = zB.y - BB.y,
          uB = zB.z - BB.z,
          UB = nB * uB - dB * NB,
          aB = dB * IB - QB * uB,
          pB = QB * NB - nB * IB,
          rB = Math.sqrt(UB * UB + aB * aB + pB * pB);
        let sB;
        return sB = 0 !== rB ? 1 / rB : 0, this.normal.x = UB * sB, this.normal.y = aB * sB, this.normal.z = pB * sB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, jB) {
        return QB.m.Dot(this.normal, BB) <= jB
      }
      signedDistanceTo(BB) {
        return QB.m.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new nB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, jB, zB) {
        const QB = new nB(0, 0, 0, 0);
        return QB.copyFromPoints(BB, jB, zB), QB
      }
      static FromPositionAndNormal(BB, jB) {
        const zB = new nB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, jB, zB)
      }
      static FromPositionAndNormalToRef(BB, jB, zB) {
        return zB.normal.jH(jB), zB.normal.normalize(), zB.d = -BB.dot(zB.normal), zB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, jB, zB) {
        const nB = -(jB.x * BB.x + jB.y * BB.y + jB.z * BB.z);
        return QB.m.Dot(zB, jB) + nB
      }
    }
    nB._TmpMatrix = QB.c.Identity()
  },
  37166: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      Matrix: () => QB.c,
      Quaternion: () => QB.d,
      RegisterMathVector: () => QB.e,
      TmpVectors: () => QB.h,
      Vector2: () => QB.i,
      KJ: () => QB.m,
      Vector4: () => QB.n
    });
    var QB = zB(37171);
    (0, QB.e)()
  },
  38170: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor(BB, jB, zB, QB) {
        this.x = BB, this.y = jB, this.width = zB, this.height = QB
      }
      toGlobal(BB, jB) {
        return new QB(this.x * BB, this.y * jB, this.width * BB, this.height * jB)
      }
      toGlobalToRef(BB, jB, zB) {
        return zB.x = this.x * BB, zB.y = this.y * jB, zB.width = this.width * BB, zB.height = this.height * jB, this
      }
      clone() {
        return new QB(this.x, this.y, this.width, this.height)
      }
    }
  },
  41862: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => UB
    });
    var QB = zB(37171),
      nB = zB(37208),
      dB = zB(40056),
      IB = zB(37178),
      NB = zB(37379);
    class uB {
      constructor(BB, jB, zB, QB) {
        this.name = BB, this.worldAxisForNormal = jB, this.worldAxisForFileX = zB, this.worldAxisForFileY = QB
      }
    }
    class UB {
      static _NearestPow2Floor(BB) {
        return BB <= 1 ? 1 : 1 << Math.floor(Math.log2(BB))
      }
      static ConvertCubeMapTextureToSphericalPolynomial(BB) {
        if (!BB.isCube) return null;
        BB.aY()?.wJ().flushFramebuffer();
        const jB = BB.getSize().width,
          zB = BB._sphericalPolynomialTargetSize,
          QB = zB > 0 ? this._NearestPow2Floor(zB) : 0,
          nB = !BB.noMipmap && !0 === BB._texture?.generateMipMaps,
          dB = QB > 0 && QB < jB && nB,
          IB = dB ? Math.max(0, Math.round(Math.log2(jB / QB))) : 0,
          NB = dB ? Math.max(1, Math.floor(jB / Math.pow(2, IB))) : jB,
          uB = BB.readPixels(0, IB, void 0, !1),
          UB = BB.readPixels(1, IB, void 0, !1);
        let aB, pB;
        BB.isRenderTarget ? (aB = BB.readPixels(3, IB, void 0, !1), pB = BB.readPixels(2, IB, void 0, !1)) : (aB = BB.readPixels(2, IB, void 0, !1), pB = BB.readPixels(3, IB, void 0, !1));
        const rB = BB.readPixels(4, IB, void 0, !1),
          sB = BB.readPixels(5, IB, void 0, !1),
          JB = BB.gammaSpace,
          mB = QB > 0 && QB < jB && !dB;
        return new Promise((BB => {
          Promise.all([UB, uB, aB, pB, rB, sB]).then((zB => {
            let [nB, dB, IB, uB, UB, aB] = zB, pB = NB;
            if (mB) {
              const BB = 4;
              nB = this._DownsampleFace(nB, jB, QB, BB), dB = this._DownsampleFace(dB, jB, QB, BB), IB = this._DownsampleFace(IB, jB, QB, BB), uB = this._DownsampleFace(uB, jB, QB, BB), UB = this._DownsampleFace(UB, jB, QB, BB), aB = this._DownsampleFace(aB, jB, QB, BB), pB = QB
            }
            const rB = {
              size: pB,
              right: dB,
              left: nB,
              up: IB,
              down: uB,
              front: UB,
              back: aB,
              format: 5,
              type: nB instanceof Float32Array ? 1 : 0,
              gammaSpace: JB
            };
            BB(this.ConvertCubeMapToSphericalPolynomial(rB))
          }))
        }))
      }
      static _AreaElement(BB, jB) {
        return Math.atan2(BB * jB, Math.sqrt(BB * BB + jB * jB + 1))
      }
      static _DownsampleFace(BB, jB, zB, QB) {
        const nB = BB instanceof Float32Array ? BB : Float32Array.from(BB),
          dB = zB * zB * QB,
          IB = new Float32Array(dB),
          NB = jB / zB,
          uB = 1 / (NB * NB);
        for (let aB = 0; aB < zB; aB++) {
          const BB = Math.floor(aB * NB),
            dB = Math.floor((aB + 1) * NB);
          for (let UB = 0; UB < zB; UB++) {
            const pB = Math.floor(UB * NB),
              rB = Math.floor((UB + 1) * NB),
              sB = (aB * zB + UB) * QB;
            for (let zB = 0; zB < QB; zB++) {
              let NB = 0;
              for (let IB = BB; IB < dB; IB++)
                for (let BB = pB; BB < rB; BB++) NB += nB[(IB * jB + BB) * QB + zB];
              IB[sB + zB] = NB * uB
            }
          }
        }
        if (BB instanceof Float32Array) return IB;
        const UB = new(0, BB.constructor)(dB);
        for (let aB = 0; aB < dB; aB++) UB[aB] = IB[aB] + .5 | 0;
        return UB
      }
      static ConvertCubeMapToSphericalPolynomial(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = jB > 0 ? this._NearestPow2Floor(jB) : 0;
        if (zB > 0 && BB.size > zB) {
          const jB = 5 === BB.format ? 4 : 3,
            QB = ["right", "left", "up", "down", "front", "back"],
            nB = {};
          for (const dB of QB) nB[dB] = this._DownsampleFace(BB[dB], BB.size, zB, jB);
          BB = {
            ...BB,
            ...nB,
            size: zB
          }
        }
        const QB = new dB.d;
        let uB = 0;
        const UB = 2 / BB.size,
          aB = UB,
          pB = .5 * UB,
          rB = pB - 1;
        for (let dB = 0; dB < 6; dB++) {
          const jB = this._FileFaces[dB],
            zB = BB[jB.name];
          let sB = rB;
          const JB = 5 === BB.format ? 4 : 3;
          for (let dB = 0; dB < BB.size; dB++) {
            let mB = rB;
            for (let aB = 0; aB < BB.size; aB++) {
              const rB = jB.worldAxisForFileX.scale(mB).add(jB.worldAxisForFileY.scale(sB)).add(jB.worldAxisForNormal);
              rB.normalize();
              const yB = this._AreaElement(mB - pB, sB - pB) - this._AreaElement(mB - pB, sB + pB) - this._AreaElement(mB + pB, sB - pB) + this._AreaElement(mB + pB, sB + pB);
              let kB = zB[dB * BB.size * JB + aB * JB + 0],
                GB = zB[dB * BB.size * JB + aB * JB + 1],
                LB = zB[dB * BB.size * JB + aB * JB + 2];
              isNaN(kB) && (kB = 0), isNaN(GB) && (GB = 0), isNaN(LB) && (LB = 0), 0 === BB.type && (kB /= 255, GB /= 255, LB /= 255), BB.gammaSpace && (kB = Math.pow((0, nB.Clamp)(kB), IB.h), GB = Math.pow((0, nB.Clamp)(GB), IB.h), LB = Math.pow((0, nB.Clamp)(LB), IB.h));
              const gB = this.MAX_HDRI_VALUE;
              if (this.PRESERVE_CLAMPED_COLORS) {
                const BB = Math.max(kB, GB, LB);
                if (BB > gB) {
                  const jB = gB / BB;
                  kB *= jB, GB *= jB, LB *= jB
                }
              } else kB = (0, nB.Clamp)(kB, 0, gB), GB = (0, nB.Clamp)(GB, 0, gB), LB = (0, nB.Clamp)(LB, 0, gB);
              const tB = new NB.d(kB, GB, LB);
              QB.addLight(rB, tB, yB), uB += yB, mB += UB
            }
            sB += aB
          }
        }
        const sB = 6 * (4 * Math.PI) / 6 / uB;
        return QB.scaleInPlace(sB), QB.convertIncidentRadianceToIrradiance(), QB.convertIrradianceToLambertianRadiance(), dB.h.FromHarmonics(QB)
      }
    }
    UB._FileFaces = [new uB("right", new QB.m(1, 0, 0), new QB.m(0, 0, -1), new QB.m(0, -1, 0)), new uB("left", new QB.m(-1, 0, 0), new QB.m(0, 0, 1), new QB.m(0, -1, 0)), new uB("up", new QB.m(0, 1, 0), new QB.m(1, 0, 0), new QB.m(0, 0, 1)), new uB("down", new QB.m(0, -1, 0), new QB.m(1, 0, 0), new QB.m(0, 0, -1)), new uB("front", new QB.m(0, 0, 1), new QB.m(1, 0, 0), new QB.m(0, -1, 0)), new uB("back", new QB.m(0, 0, -1), new QB.m(-1, 0, 0), new QB.m(0, -1, 0))], UB.MAX_HDRI_VALUE = 4096, UB.PRESERVE_CLAMPED_COLORS = !1
  },
  41640: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB.j,
      c: () => QB.r
    });
    var QB = zB(40108);
    (0, QB.y)()
  },
  37987: (BB, jB, zB) => {
    function QB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const jB = 16 * Math.random() | 0;
        return ("x" === BB ? jB : 3 & jB | 8).toString(16)
      }))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  41898: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(41892),
      nB = zB(41900);
    class dB {
      static ExpandRGBDTexture(BB) {
        const jB = BB._texture;
        if (!jB || !BB.isRGBD) return;
        const nB = jB.wJ(),
          dB = nB.getCaps(),
          IB = jB.isReady;
        let NB = !1;
        dB.textureHalfFloatRender && dB.textureHalfFloatLinearFiltering ? (NB = !0, jB.type = 2) : dB.textureFloatRender && dB.textureFloatLinearFiltering && (NB = !0, jB.type = 1), NB && (jB.isReady = !1, jB._isRGBD = !1, jB.invertY = !1);
        const uB = async () => {
          const dB = nB.isWebGPU,
            IB = dB ? 1 : 0;
          jB.isReady = !1, dB ? await zB.e(347).then((() => zB(61543))) : await zB.e(329).then((() => zB(61545)));
          const NB = new QB.d("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, nB, !1, void 0, jB.type, void 0, null, !1, void 0, IB);
          NB.externalTextureSamplerBinding = !0;
          const uB = nB.createRenderTargetTexture(jB.width, {
            generateDepthBuffer: !1,
            generateMipMaps: !1,
            generateStencilBuffer: !1,
            samplingMode: jB.samplingMode,
            type: jB.type,
            format: 5
          });
          NB.onEffectCreatedObservable.addOnce((zB => {
            zB.executeWhenCompiled((() => {
              NB.onApply = BB => {
                BB._bindTexture("textureSampler", jB), BB.setFloat2("scale", 1, 1)
              }, BB.aY()?.postProcessManager.directRender([NB], uB, !0), nB.restoreDefaultFramebuffer(), nB._releaseTexture(jB), NB && NB.dispose(), uB._swapAndDie(jB), jB.isReady = !0
            }))
          }))
        };
        NB && (IB ? uB() : BB.onLoadObservable.addOnce(uB))
      }
      static async EncodeTextureToRGBD(BB, jB) {
        let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return jB.wJ().isWebGPU ? await zB.e(348).then((() => zB(61553))) : await zB.e(330).then((() => zB(61551))), await (0, nB.e)("rgbdEncode", BB, jB, QB, 1, 5)
      }
    }
  },
  61413: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AsyncLoop: () => QB.e,
      RegisterTools: () => QB.h,
      Tools: () => QB.i,
      className: () => QB.l
    });
    var QB = zB(40164);
    (0, QB.h)()
  },
  41934: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    class QB {
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
        for (const jB of this._workerInfos)
          if (jB.idle) return this._execute(jB, BB), !0;
        return !1
      }
      _execute(BB, jB) {
        BB.idle = !1, BB.workerPromise.then((zB => {
          jB(zB, (() => {
            const jB = this._pendingActions.shift();
            jB ? this._execute(BB, jB) : BB.idle = !0
          }))
        }))
      }
    }
    class nB extends QB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nB.DefaultOptions;
        super([]), this._maxWorkers = BB, this._createWorkerAsync = jB, this._options = zB
      }
      push(BB) {
        if (!this._executeOnIdleWorker(BB))
          if (this._workerInfos.length < this._maxWorkers) {
            const jB = {
              workerPromise: this._createWorkerAsync(),
              idle: !1
            };
            this._workerInfos.push(jB), this._execute(jB, BB)
          } else this._pendingActions.push(BB)
      }
      _execute(BB, jB) {
        BB.timeoutId && (clearTimeout(BB.timeoutId), delete BB.timeoutId), super._execute(BB, ((zB, QB) => {
          jB(zB, (() => {
            QB(), BB.idle && (BB.timeoutId = setTimeout((() => {
              BB.workerPromise.then((BB => {
                BB.terminate()
              }));
              const jB = this._workerInfos.indexOf(BB); - 1 !== jB && this._workerInfos.splice(jB, 1)
            }), this._options.idleTimeElapsedBeforeRelease))
          }))
        }))
      }
    }
    nB.DefaultOptions = {
      idleTimeElapsedBeforeRelease: 1e3
    }
  },
  61444: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AbstractThreeMfSerializer: () => vN,
      BVHExporter: () => DI,
      ContentTypeFileName: () => GN,
      DefaultXmlSerializerFormatOptions: () => KI,
      DefaultXmlSerializerNumberOptions: () => xI,
      EXT_lights_area: () => yn,
      EXT_mesh_gpu_instancing: () => AQ,
      EXT_texture_avif: () => UI,
      EXT_texture_webp: () => dI,
      GLTF2Export: () => hQ,
      GLTFData: () => UB,
      GetXmlFieldMeta: () => PI,
      GetXmlName: () => WI,
      IsQualifiedName: () => FI,
      KHR_draco_mesh_compression: () => vQ,
      KHR_interactivity: () => Un,
      KHR_lights_punctual: () => dn,
      KHR_materials_anisotropy: () => gn,
      KHR_materials_clearcoat: () => qn,
      KHR_materials_coat: () => Vn,
      KHR_materials_diffuse_roughness: () => Wd,
      KHR_materials_diffuse_transmission: () => Pn,
      KHR_materials_dispersion: () => xn,
      KHR_materials_emissive_strength: () => bn,
      KHR_materials_fuzz: () => Jd,
      KHR_materials_ior: () => Bd,
      KHR_materials_iridescence: () => nd,
      KHR_materials_openpbr: () => xd,
      KHR_materials_sheen: () => ud,
      KHR_materials_specular: () => Gd,
      KHR_materials_transmission: () => Sd,
      KHR_materials_unlit: () => od,
      KHR_materials_volume: () => Yd,
      KHR_materials_volume_scatter: () => Zd,
      KHR_texture_basisu: () => jI,
      KHR_texture_transform: () => bd,
      Known3mfRelationshipTypes: () => LN,
      KnownI3mfContentType: () => sN,
      Matrix3d: () => iN,
      MatrixFormatter: () => qN,
      ModelFileName: () => yN,
      NumberFormatter: () => bI,
      OBJExport: () => IB,
      Object3dDirName: () => mN,
      OpenXmlContentTypesNamespace: () => pN,
      OpenXmlRelationshipsNamespace: () => rN,
      RegisterEXT_lights_area: () => Gn,
      RegisterEXT_mesh_gpu_instancing: () => PQ,
      RegisterEXT_texture_avif: () => pI,
      RegisterEXT_texture_webp: () => NI,
      RegisterKHR_draco_mesh_compression: () => OQ,
      RegisterKHR_interactivity: () => pn,
      RegisterKHR_lights_punctual: () => Nn,
      RegisterKHR_materials_anisotropy: () => Sn,
      RegisterKHR_materials_clearcoat: () => Hn,
      RegisterKHR_materials_coat: () => Xn,
      RegisterKHR_materials_diffuse_roughness: () => ld,
      RegisterKHR_materials_diffuse_transmission: () => en,
      RegisterKHR_materials_dispersion: () => Cn,
      RegisterKHR_materials_emissive_strength: () => Rn,
      RegisterKHR_materials_fuzz: () => yd,
      RegisterKHR_materials_ior: () => zd,
      RegisterKHR_materials_iridescence: () => Id,
      RegisterKHR_materials_openpbr: () => Cd,
      RegisterKHR_materials_sheen: () => pd,
      RegisterKHR_materials_specular: () => gd,
      RegisterKHR_materials_transmission: () => Ed,
      RegisterKHR_materials_unlit: () => Dd,
      RegisterKHR_materials_volume: () => hd,
      RegisterKHR_materials_volume_scatter: () => Td,
      RegisterKHR_texture_basisu: () => QI,
      RegisterKHR_texture_transform: () => Rd,
      RelationshipDirName: () => JN,
      RelationshipFileName: () => kN,
      ResolveFormatOptions: () => cI,
      ResolveNumberOptions: () => CI,
      STLExport: () => rI,
      ST_ObjectType: () => aN,
      ST_Unit: () => UN,
      StringXmlWriter: () => dN,
      ThreeDimModelNamespace: () => NN,
      ThreeMf: () => RN,
      ThreeMfBase: () => WN,
      ThreeMfBaseMaterials: () => PN,
      ThreeMfBuild: () => eN,
      ThreeMfComponent: () => TN,
      ThreeMfComponents: () => AN,
      ThreeMfComponentsBuilder: () => xN,
      ThreeMfContentType: () => tN,
      ThreeMfContentTypes: () => gN,
      ThreeMfDocument: () => EN,
      ThreeMfDocumentBuilder: () => bN,
      ThreeMfItem: () => lN,
      ThreeMfMaterialBuilder: () => CN,
      ThreeMfMesh: () => YN,
      ThreeMfMeshBuilder: () => KN,
      ThreeMfMeta: () => oN,
      ThreeMfMetadataGroup: () => HN,
      ThreeMfModel: () => fN,
      ThreeMfModelBuilder: () => cN,
      ThreeMfObject: () => FN,
      ThreeMfObjectBuilder: () => wN,
      ThreeMfRelationship: () => MN,
      ThreeMfRelationships: () => SN,
      ThreeMfResources: () => DN,
      ThreeMfSerializer: () => ju,
      ThreeMfSerializerGlobalConfiguration: () => ON,
      ThreeMfTriangle: () => ZN,
      ThreeMfTriangles: () => XN,
      ThreeMfVertex: () => hN,
      ThreeMfVertices: () => VN,
      ToQualifiedString: () => wI,
      TokenType: () => QN,
      TriangleSetsNamespace: () => uN,
      USDZExportAsync: () => oI,
      Utf8XmlWriterToBytes: () => IN,
      XmlAttr: () => AI,
      XmlBuilder: () => nN,
      XmlElem: () => TI,
      XmlIgnore: () => ZI,
      XmlName: () => XI,
      XmlNameToParts: () => lI,
      XmlSerializer: () => jN,
      _ConvertToGLTFPBRMetallicRoughness: () => iz,
      _SolveMetallic: () => Ez,
      __IGLTFExporterExtension: () => NB
    });
    var QB = zB(37166),
      nB = zB(61413),
      dB = zB(40380);
    class IB {
      static OBJ(BB, jB, zB, IB) {
        const NB = [];
        let uB = 1,
          UB = 1;
        jB && (zB || (zB = "mat"), NB.push("mtllib " + zB + ".mtl"));
        for (let aB = 0; aB < BB.length; aB++) {
          const zB = BB[aB],
            pB = zB.name || `mesh${aB}}`;
          NB.push(`o ${pB}`);
          let rB = null;
          if (IB) {
            const BB = zB.computeWorldMatrix(!0);
            rB = new QB.Matrix, BB.invertToRef(rB), zB.bakeTransformIntoVertices(BB)
          }
          if (jB) {
            const BB = zB.material;
            BB && NB.push("usemtl " + BB.id)
          }
          const sB = zB.geometry;
          if (!sB) {
            nB.Tools.Warn("No geometry is present on the mesh");
            continue
          }
          const JB = sB.getVerticesData("position"),
            mB = sB.getVerticesData("normal"),
            yB = sB.getVerticesData("uv"),
            kB = sB.dQB();
          let GB = 0,
            LB = 0;
          if (!JB || !kB) {
            nB.Tools.Warn("There are no position vertices or indices on the mesh!");
            continue
          }
          const gB = BB[0].aY().useRightHandedSystem ? 1 : -1;
          for (let BB = 0; BB < JB.length; BB += 3) NB.push("v " + JB[BB] * gB + " " + JB[BB + 1] + " " + JB[BB + 2]), GB++;
          if (null != mB)
            for (let BB = 0; BB < mB.length; BB += 3) NB.push("vn " + mB[BB] * gB + " " + mB[BB + 1] + " " + mB[BB + 2]);
          if (null != yB)
            for (let BB = 0; BB < yB.length; BB += 2) NB.push("vt " + yB[BB] + " " + yB[BB + 1]), LB++;
          const tB = ["", "", ""],
            SB = (zB.material || zB.aY().defaultMaterial)._getEffectiveOrientation(zB),
            [MB, EB] = SB === dB.b.ClockWiseSideOrientation ? [2, 1] : [1, 2];
          for (let BB = 0; BB < kB.length; BB += 3) {
            const jB = [String(kB[BB] + uB), String(kB[BB + MB] + uB), String(kB[BB + EB] + uB)],
              zB = [String(kB[BB] + UB), String(kB[BB + MB] + UB), String(kB[BB + EB] + UB)],
              QB = jB,
              nB = null != yB ? zB : tB,
              dB = null != mB ? jB : tB;
            NB.push("f " + QB[0] + "/" + nB[0] + "/" + dB[0] + " " + QB[1] + "/" + nB[1] + "/" + dB[1] + " " + QB[2] + "/" + nB[2] + "/" + dB[2])
          }
          IB && rB && zB.bakeTransformIntoVertices(rB), uB += GB, UB += LB
        }
        return NB.join("\n")
      }
      static MTL(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "mat1";
        const zB = [],
          QB = BB.material;
        zB.push("newmtl " + jB), zB.push("  Ns " + QB.specularPower.toFixed(4)), zB.push("  Ni 1.5000"), zB.push("  d " + QB.alpha.toFixed(4)), zB.push("  Tr 0.0000"), zB.push("  Tf 1.0000 1.0000 1.0000"), zB.push("  illum 2"), zB.push("  Ka " + QB.ambientColor.r.toFixed(4) + " " + QB.ambientColor.g.toFixed(4) + " " + QB.ambientColor.b.toFixed(4)), zB.push("  Kd " + QB.diffuseColor.r.toFixed(4) + " " + QB.diffuseColor.g.toFixed(4) + " " + QB.diffuseColor.b.toFixed(4)), zB.push("  Ks " + QB.specularColor.r.toFixed(4) + " " + QB.specularColor.g.toFixed(4) + " " + QB.specularColor.b.toFixed(4)), zB.push("  Ke " + QB.emissiveColor.r.toFixed(4) + " " + QB.emissiveColor.g.toFixed(4) + " " + QB.emissiveColor.b.toFixed(4));
        QB.ambientTexture && zB.push("  map_Ka " + QB.ambientTexture.name), QB.diffuseTexture && zB.push("  map_Kd " + QB.diffuseTexture.name), QB.specularTexture && zB.push("  map_Ks " + QB.specularTexture.name), QB.bumpTexture && zB.push("  map_bump -imfchan z " + QB.bumpTexture.name), QB.opacityTexture && zB.push("  map_d " + QB.opacityTexture.name);
        return zB.join("\n")
      }
    }
    var NB = 0,
      uB = zB(41640);
    class UB {
      constructor() {
        this.files = {}
      }
      get glTFFiles() {
        return this.files
      }
      downloadFiles() {
        for (const BB in this.files) {
          const jB = this.files[BB],
            zB = new Blob([jB], {
              type: (0, uB.b)(BB)
            });
          nB.Tools.Download(zB, BB)
        }
      }
    }
    var aB = zB(41251),
      pB = zB(41200),
      rB = zB(41718),
      sB = zB(41208),
      JB = zB(39895),
      mB = zB(37197),
      yB = zB(37372),
      kB = zB(37208);
    const GB = kB.HighestCommonFactor,
      LB = {
        ...kB,
        TwoPi: 2 * Math.PI,
        Sign: Math.sign,
        Log2: Math.log2,
        HCF: GB
      };
    var gB = zB(41900),
      tB = zB(41227),
      SB = zB(41682),
      MB = zB(41686),
      EB = zB(41914);
    (0, EB.RegisterDumpTools)();
    var iB = zB(40066),
      qB = zB(40068),
      fB = zB(38783),
      oB = zB(40171),
      HB = zB(40580),
      DB = zB(41898);
    let FB = 0;
    const YB = (BB, jB, zB, QB) => {
        if (!BB[zB]) {
          const nB = BB.useDelayedTextureLoading;
          BB.useDelayedTextureLoading = !1;
          const dB = BB._blockEntityCollection;
          BB._blockEntityCollection = !1;
          const IB = HB.i.CreateFromBase64String(jB, QB + FB++, BB, !0, !1, HB.i.BILINEAR_SAMPLINGMODE);
          BB._blockEntityCollection = dB;
          const NB = BB.wJ().getLoadedTexturesCache(),
            uB = NB.indexOf(IB.getInternalTexture()); - 1 !== uB && NB.splice(uB, 1), IB.isRGBD = !0, IB.wrapU = HB.i.CLAMP_ADDRESSMODE, IB.wrapV = HB.i.CLAMP_ADDRESSMODE, BB[zB] = IB, BB.useDelayedTextureLoading = nB, DB.c.ExpandRGBDTexture(IB);
          const UB = BB.wJ().lJ.add((() => {
            IB.isRGBD = !0;
            const jB = BB.onBeforeRenderObservable.add((() => {
              IB.isReady() && (BB.onBeforeRenderObservable.remove(jB), DB.c.ExpandRGBDTexture(IB))
            }))
          }));
          BB.pY.add((() => {
            BB.wJ().lJ.remove(UB)
          }))
        }
        return BB[zB]
      },
      VB = BB => YB(BB, "data:image/png;base64,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", "environmentBRDFTexture", "EnvironmentBRDFTexture"),
      hB = BB => YB(BB, "data:image/png;base64,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", "environmentFuzzBRDFTexture", "EnvironmentFuzzBRDFTexture"),
      XB = BB => YB(BB, "data:image/png;base64,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", "openPBREnvironmentBRDFTexture", "OpenPBREnvironmentBRDFTexture");
    var ZB = zB(40156),
      AB = zB(37171),
      TB = zB(40211),
      PB = zB(40376),
      WB = zB(40457);
    class eB extends PB.b {
      constructor() {
        super(...arguments), this.BRDF_V_HEIGHT_CORRELATED = !1, this.MS_BRDF_ENERGY_CONSERVATION = !1, this.SPHERICAL_HARMONICS = !1, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !1, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 0, this.CONDUCTOR_SPECULAR_MODEL = 0
      }
    }
    let lB = (() => {
      var BB, jB, zB, QB, nB, dB, IB, NB, uB, UB;
      let aB, pB, rB, sB, JB, mB, yB, kB, GB, LB = WB.c,
        gB = [],
        tB = [],
        SB = [],
        MB = [],
        EB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [];
      return BB = class extends LB {
        get useEnergyConservation() {
          return (0, iB.b)(this, jB, "f")
        }
        set useEnergyConservation(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        get useSmithVisibilityHeightCorrelated() {
          return (0, iB.b)(this, zB, "f")
        }
        set useSmithVisibilityHeightCorrelated(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get useSphericalHarmonics() {
          return (0, iB.b)(this, QB, "f")
        }
        set useSphericalHarmonics(BB) {
          (0, iB.d)(this, QB, BB, "f")
        }
        get useSpecularGlossinessInputEnergyConservation() {
          return (0, iB.b)(this, nB, "f")
        }
        set useSpecularGlossinessInputEnergyConservation(BB) {
          (0, iB.d)(this, nB, BB, "f")
        }
        get mixIblRadianceWithIrradiance() {
          return (0, iB.b)(this, dB, "f")
        }
        set mixIblRadianceWithIrradiance(BB) {
          (0, iB.d)(this, dB, BB, "f")
        }
        get useLegacySpecularEnergyConservation() {
          return (0, iB.b)(this, IB, "f")
        }
        set useLegacySpecularEnergyConservation(BB) {
          (0, iB.d)(this, IB, BB, "f")
        }
        get baseDiffuseModel() {
          return (0, iB.b)(this, NB, "f")
        }
        set baseDiffuseModel(BB) {
          (0, iB.d)(this, NB, BB, "f")
        }
        get dielectricSpecularModel() {
          return (0, iB.b)(this, uB, "f")
        }
        set dielectricSpecularModel(BB) {
          (0, iB.d)(this, uB, BB, "f")
        }
        get conductorSpecularModel() {
          return (0, iB.b)(this, UB, "f")
        }
        set conductorSpecularModel(BB) {
          (0, iB.d)(this, UB, BB, "f")
        }
        _markAllSubMeshesAsMiscDirty() {
          this._internalMarkAllSubMeshesAsMiscDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(aB) {
          let pB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(aB, "PBRBRDF", 90, new eB, pB), this._useEnergyConservation = BB.DEFAULT_USE_ENERGY_CONSERVATION, jB.set(this, (0, iB.g)(this, gB, BB.DEFAULT_USE_ENERGY_CONSERVATION)), this._useSmithVisibilityHeightCorrelated = ((0, iB.g)(this, tB), BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED), zB.set(this, (0, iB.g)(this, SB, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED)), this._useSphericalHarmonics = ((0, iB.g)(this, MB), BB.DEFAULT_USE_SPHERICAL_HARMONICS), QB.set(this, (0, iB.g)(this, EB, BB.DEFAULT_USE_SPHERICAL_HARMONICS)), this._useSpecularGlossinessInputEnergyConservation = ((0, iB.g)(this, fB), BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION), nB.set(this, (0, iB.g)(this, oB, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION)), this._mixIblRadianceWithIrradiance = ((0, iB.g)(this, HB), BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE), dB.set(this, (0, iB.g)(this, DB, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE)), this._useLegacySpecularEnergyConservation = ((0, iB.g)(this, FB), BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION), IB.set(this, (0, iB.g)(this, YB, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION)), this._baseDiffuseModel = ((0, iB.g)(this, VB), BB.DEFAULT_DIFFUSE_MODEL), NB.set(this, (0, iB.g)(this, hB, BB.DEFAULT_DIFFUSE_MODEL)), this._dielectricSpecularModel = ((0, iB.g)(this, XB), BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL), uB.set(this, (0, iB.g)(this, ZB, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL)), this._conductorSpecularModel = ((0, iB.g)(this, AB), BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL), UB.set(this, (0, iB.g)(this, TB, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL)), this._internalMarkAllSubMeshesAsMiscDirty = (0, iB.g)(this, PB), this._internalMarkAllSubMeshesAsMiscDirty = aB._dirtyCallbacks[16], this._enable(!0)
        }
        prepareDefines(BB) {
          BB.BRDF_V_HEIGHT_CORRELATED = this._useSmithVisibilityHeightCorrelated, BB.MS_BRDF_ENERGY_CONSERVATION = this._useEnergyConservation && this._useSmithVisibilityHeightCorrelated, BB.SPHERICAL_HARMONICS = this._useSphericalHarmonics, BB.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = this._useSpecularGlossinessInputEnergyConservation, BB.MIX_IBL_RADIANCE_WITH_IRRADIANCE = this._mixIblRadianceWithIrradiance && !this._material._disableLighting, BB.LEGACY_SPECULAR_ENERGY_CONSERVATION = this._useLegacySpecularEnergyConservation, BB.BASE_DIFFUSE_MODEL = this._baseDiffuseModel, BB.DIELECTRIC_SPECULAR_MODEL = this._dielectricSpecularModel, BB.CONDUCTOR_SPECULAR_MODEL = this._conductorSpecularModel
        }
        getClassName() {
          return "PBRBRDFConfiguration"
        }
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, nB = new WeakMap, dB = new WeakMap, IB = new WeakMap, NB = new WeakMap, uB = new WeakMap, UB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(LB[Symbol.metadata] ?? null) : void 0;
        aB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], pB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], rB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], sB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], JB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], mB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], yB = [(0, qB.A)("baseDiffuseModel"), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], kB = [(0, qB.A)("dielectricSpecularModel"), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], GB = [(0, qB.A)("conductorSpecularModel"), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], (0, iB.e)(BB, null, aB, {
          kind: "accessor",
          name: "useEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useEnergyConservation" in BB,
            get: BB => BB.useEnergyConservation,
            set: (BB, jB) => {
              BB.useEnergyConservation = jB
            }
          },
          metadata: jB
        }, gB, tB), (0, iB.e)(BB, null, pB, {
          kind: "accessor",
          name: "useSmithVisibilityHeightCorrelated",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSmithVisibilityHeightCorrelated" in BB,
            get: BB => BB.useSmithVisibilityHeightCorrelated,
            set: (BB, jB) => {
              BB.useSmithVisibilityHeightCorrelated = jB
            }
          },
          metadata: jB
        }, SB, MB), (0, iB.e)(BB, null, rB, {
          kind: "accessor",
          name: "useSphericalHarmonics",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSphericalHarmonics" in BB,
            get: BB => BB.useSphericalHarmonics,
            set: (BB, jB) => {
              BB.useSphericalHarmonics = jB
            }
          },
          metadata: jB
        }, EB, fB), (0, iB.e)(BB, null, sB, {
          kind: "accessor",
          name: "useSpecularGlossinessInputEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularGlossinessInputEnergyConservation" in BB,
            get: BB => BB.useSpecularGlossinessInputEnergyConservation,
            set: (BB, jB) => {
              BB.useSpecularGlossinessInputEnergyConservation = jB
            }
          },
          metadata: jB
        }, oB, HB), (0, iB.e)(BB, null, JB, {
          kind: "accessor",
          name: "mixIblRadianceWithIrradiance",
          static: !1,
          private: !1,
          access: {
            has: BB => "mixIblRadianceWithIrradiance" in BB,
            get: BB => BB.mixIblRadianceWithIrradiance,
            set: (BB, jB) => {
              BB.mixIblRadianceWithIrradiance = jB
            }
          },
          metadata: jB
        }, DB, FB), (0, iB.e)(BB, null, mB, {
          kind: "accessor",
          name: "useLegacySpecularEnergyConservation",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLegacySpecularEnergyConservation" in BB,
            get: BB => BB.useLegacySpecularEnergyConservation,
            set: (BB, jB) => {
              BB.useLegacySpecularEnergyConservation = jB
            }
          },
          metadata: jB
        }, YB, VB), (0, iB.e)(BB, null, yB, {
          kind: "accessor",
          name: "baseDiffuseModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseModel" in BB,
            get: BB => BB.baseDiffuseModel,
            set: (BB, jB) => {
              BB.baseDiffuseModel = jB
            }
          },
          metadata: jB
        }, hB, XB), (0, iB.e)(BB, null, kB, {
          kind: "accessor",
          name: "dielectricSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "dielectricSpecularModel" in BB,
            get: BB => BB.dielectricSpecularModel,
            set: (BB, jB) => {
              BB.dielectricSpecularModel = jB
            }
          },
          metadata: jB
        }, ZB, AB), (0, iB.e)(BB, null, GB, {
          kind: "accessor",
          name: "conductorSpecularModel",
          static: !1,
          private: !1,
          access: {
            has: BB => "conductorSpecularModel" in BB,
            get: BB => BB.conductorSpecularModel,
            set: (BB, jB) => {
              BB.conductorSpecularModel = jB
            }
          },
          metadata: jB
        }, TB, PB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB.DEFAULT_USE_ENERGY_CONSERVATION = !0, BB.DEFAULT_USE_SMITH_VISIBILITY_HEIGHT_CORRELATED = !0, BB.DEFAULT_USE_SPHERICAL_HARMONICS = !0, BB.DEFAULT_USE_SPECULAR_GLOSSINESS_INPUT_ENERGY_CONSERVATION = !0, BB.DEFAULT_MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, BB.DEFAULT_USE_LEGACY_SPECULAR_ENERGY_CONSERVATION = !0, BB.DEFAULT_DIFFUSE_MODEL = 0, BB.DEFAULT_DIELECTRIC_SPECULAR_MODEL = 0, BB.DEFAULT_CONDUCTOR_SPECULAR_MODEL = 0, BB
    })();
    var wB = zB(40364),
      xB = zB(37379),
      KB = zB(40373),
      CB = zB(40180),
      cB = zB(40438),
      bB = zB(40435),
      vB = zB(40445),
      RB = zB(40428);
    class OB extends PB.b {
      constructor() {
        super(...arguments), this.CLEARCOAT = !1, this.CLEARCOAT_DEFAULTIOR = !1, this.CLEARCOAT_TEXTURE = !1, this.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this.CLEARCOAT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, this.CLEARCOAT_BUMP = !1, this.CLEARCOAT_BUMPDIRECTUV = 0, this.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, this.CLEARCOAT_REMAP_F0 = !1, this.CLEARCOAT_TINT = !1, this.CLEARCOAT_TINT_TEXTURE = !1, this.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, this.CLEARCOAT_TINT_GAMMATEXTURE = !1
      }
    }
    let Bj = (() => {
      var BB, jB, zB, QB, nB, dB, IB, NB, uB, UB;
      let aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB = WB.c,
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [],
        eB = [],
        lB = [],
        wB = [],
        KB = [],
        CB = [],
        cB = [],
        vB = [],
        Bj = [],
        jj = [],
        zj = [],
        Qj = [],
        nj = [],
        dj = [],
        Ij = [],
        Nj = [];
      return BB = class extends EB {
        get isEnabled() {
          return (0, iB.b)(this, jB, "f")
        }
        set isEnabled(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, iB.b)(this, zB, "f")
        }
        set indexOfRefraction(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get texture() {
          return (0, iB.b)(this, QB, "f")
        }
        set texture(BB) {
          (0, iB.d)(this, QB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, iB.b)(this, nB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, iB.d)(this, nB, BB, "f")
        }
        get textureRoughness() {
          return (0, iB.b)(this, dB, "f")
        }
        set textureRoughness(BB) {
          (0, iB.d)(this, dB, BB, "f")
        }
        get remapF0OnInterfaceChange() {
          return (0, iB.b)(this, IB, "f")
        }
        set remapF0OnInterfaceChange(BB) {
          (0, iB.d)(this, IB, BB, "f")
        }
        get bumpTexture() {
          return (0, iB.b)(this, NB, "f")
        }
        set bumpTexture(BB) {
          (0, iB.d)(this, NB, BB, "f")
        }
        get isTintEnabled() {
          return (0, iB.b)(this, uB, "f")
        }
        set isTintEnabled(BB) {
          (0, iB.d)(this, uB, BB, "f")
        }
        get tintTexture() {
          return (0, iB.b)(this, UB, "f")
        }
        set tintTexture(BB) {
          (0, iB.d)(this, UB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(aB) {
          let pB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(aB, "PBRClearCoat", 100, new OB, pB), this._isEnabled = !1, jB.set(this, (0, iB.g)(this, fB, !1)), this.intensity = ((0, iB.g)(this, oB), (0, iB.g)(this, HB, 1)), this.roughness = ((0, iB.g)(this, DB), (0, iB.g)(this, FB, 0)), this._indexOfRefraction = ((0, iB.g)(this, YB), BB._DefaultIndexOfRefraction), zB.set(this, (0, iB.g)(this, VB, BB._DefaultIndexOfRefraction)), this._texture = ((0, iB.g)(this, hB), null), QB.set(this, (0, iB.g)(this, XB, null)), this._useRoughnessFromMainTexture = ((0, iB.g)(this, ZB), !0), nB.set(this, (0, iB.g)(this, AB, !0)), this._textureRoughness = ((0, iB.g)(this, TB), null), dB.set(this, (0, iB.g)(this, PB, null)), this._remapF0OnInterfaceChange = ((0, iB.g)(this, eB), !0), IB.set(this, (0, iB.g)(this, lB, !0)), this._bumpTexture = ((0, iB.g)(this, wB), null), NB.set(this, (0, iB.g)(this, KB, null)), this._isTintEnabled = ((0, iB.g)(this, CB), !1), uB.set(this, (0, iB.g)(this, cB, !1)), this.tintColor = ((0, iB.g)(this, vB), (0, iB.g)(this, Bj, xB.d.White())), this.tintColorAtDistance = ((0, iB.g)(this, jj), (0, iB.g)(this, zj, 1)), this.tintThickness = ((0, iB.g)(this, Qj), (0, iB.g)(this, nj, 1)), this._tintTexture = ((0, iB.g)(this, dj), null), UB.set(this, (0, iB.g)(this, Ij, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, iB.g)(this, Nj), this._internalMarkAllSubMeshesAsTexturesDirty = aB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, jB, zB) {
          if (!this._isEnabled) return !0;
          const QB = this._material._disableBumpMap;
          if (BB._areTexturesDirty && jB.texturesEnabled) {
            if (this._texture && bB.d.ClearCoatTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && bB.d.ClearCoatTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1;
            if (zB.getCaps().standardDerivatives && this._bumpTexture && bB.d.ClearCoatBumpTextureEnabled && !QB && !this._bumpTexture.isReady()) return !1;
            if (this._isTintEnabled && this._tintTexture && bB.d.ClearCoatTintTextureEnabled && !this._tintTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(jB, zB) {
          this._isEnabled ? (jB.CLEARCOAT = !0, jB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, jB.CLEARCOAT_REMAP_F0 = this._remapF0OnInterfaceChange, jB._areTexturesDirty && zB.texturesEnabled && (this._texture && bB.d.ClearCoatTextureEnabled ? (0, RB.cb)(this._texture, jB, "CLEARCOAT_TEXTURE") : jB.CLEARCOAT_TEXTURE = !1, this._textureRoughness && bB.d.ClearCoatTextureEnabled ? (0, RB.cb)(this._textureRoughness, jB, "CLEARCOAT_TEXTURE_ROUGHNESS") : jB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, this._bumpTexture && bB.d.ClearCoatBumpTextureEnabled ? (0, RB.cb)(this._bumpTexture, jB, "CLEARCOAT_BUMP") : jB.CLEARCOAT_BUMP = !1, jB.CLEARCOAT_DEFAULTIOR = this._indexOfRefraction === BB._DefaultIndexOfRefraction, this._isTintEnabled ? (jB.CLEARCOAT_TINT = !0, this._tintTexture && bB.d.ClearCoatTintTextureEnabled ? ((0, RB.cb)(this._tintTexture, jB, "CLEARCOAT_TINT_TEXTURE"), jB.CLEARCOAT_TINT_GAMMATEXTURE = this._tintTexture.gammaSpace) : jB.CLEARCOAT_TINT_TEXTURE = !1) : (jB.CLEARCOAT_TINT = !1, jB.CLEARCOAT_TINT_TEXTURE = !1))) : (jB.CLEARCOAT = !1, jB.CLEARCOAT_TEXTURE = !1, jB.CLEARCOAT_TEXTURE_ROUGHNESS = !1, jB.CLEARCOAT_BUMP = !1, jB.CLEARCOAT_TINT = !1, jB.CLEARCOAT_TINT_TEXTURE = !1, jB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, jB.CLEARCOAT_DEFAULTIOR = !1, jB.CLEARCOAT_TEXTUREDIRECTUV = 0, jB.CLEARCOAT_TEXTURE_ROUGHNESSDIRECTUV = 0, jB.CLEARCOAT_BUMPDIRECTUV = 0, jB.CLEARCOAT_REMAP_F0 = !1, jB.CLEARCOAT_TINT_TEXTUREDIRECTUV = 0, jB.CLEARCOAT_TINT_GAMMATEXTURE = !1)
        }
        bindForSubMesh(BB, jB, zB, QB) {
          if (!this._isEnabled) return;
          const nB = QB.materialDefines,
            dB = this._material.isFrozen,
            IB = this._material._disableBumpMap,
            NB = this._material._invertNormalMapX,
            uB = this._material._invertNormalMapY;
          if (!BB.useUbo || !dB || !BB.isSync) {
            (this._texture || this._textureRoughness) && bB.d.ClearCoatTextureEnabled && (BB.updateFloat4("vClearCoatInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, RB.A)(this._texture, BB, "clearCoat"), this._textureRoughness && !nB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, RB.A)(this._textureRoughness, BB, "clearCoatRoughness")), this._bumpTexture && zB.getCaps().standardDerivatives && bB.d.ClearCoatTextureEnabled && !IB && (BB.updateFloat2("vClearCoatBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level), (0, RB.A)(this._bumpTexture, BB, "clearCoatBump"), jB._mirroredCameraPosition ? BB.updateFloat2("vClearCoatTangentSpaceParams", NB ? 1 : -1, uB ? 1 : -1) : BB.updateFloat2("vClearCoatTangentSpaceParams", NB ? -1 : 1, uB ? -1 : 1)), this._tintTexture && bB.d.ClearCoatTintTextureEnabled && (BB.updateFloat2("vClearCoatTintInfos", this._tintTexture.coordinatesIndex, this._tintTexture.level), (0, RB.A)(this._tintTexture, BB, "clearCoatTint")), BB.updateFloat2("vClearCoatParams", this.intensity, this.roughness);
            const QB = 1 - this._indexOfRefraction,
              dB = 1 + this._indexOfRefraction,
              UB = Math.pow(-QB / dB, 2),
              aB = 1 / this._indexOfRefraction;
            BB.updateFloat4("vClearCoatRefractionParams", UB, aB, QB, dB), this._isTintEnabled && (BB.updateFloat4("vClearCoatTintParams", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintThickness)), BB.updateFloat("clearCoatColorAtDistance", Math.max(1e-5, this.tintColorAtDistance)))
          }
          jB.texturesEnabled && (this._texture && bB.d.ClearCoatTextureEnabled && BB.setTexture("clearCoatSampler", this._texture), this._textureRoughness && !nB.CLEARCOAT_USE_ROUGHNESS_FROM_MAINTEXTURE && bB.d.ClearCoatTextureEnabled && BB.setTexture("clearCoatRoughnessSampler", this._textureRoughness), this._bumpTexture && zB.getCaps().standardDerivatives && bB.d.ClearCoatBumpTextureEnabled && !IB && BB.setTexture("clearCoatBumpSampler", this._bumpTexture), this._isTintEnabled && this._tintTexture && bB.d.ClearCoatTintTextureEnabled && BB.setTexture("clearCoatTintSampler", this._tintTexture))
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
        addFallbacks(BB, jB, zB) {
          return BB.CLEARCOAT_BUMP && jB.addFallback(zB++, "CLEARCOAT_BUMP"), BB.CLEARCOAT_TINT && jB.addFallback(zB++, "CLEARCOAT_TINT"), BB.CLEARCOAT && jB.addFallback(zB++, "CLEARCOAT"), zB
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
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, nB = new WeakMap, dB = new WeakMap, IB = new WeakMap, NB = new WeakMap, uB = new WeakMap, UB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(EB[Symbol.metadata] ?? null) : void 0;
        aB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, qB.A)()], rB = [(0, qB.A)()], sB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], kB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, qB.i)()], tB = [(0, qB.A)()], SB = [(0, qB.A)()], MB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], (0, iB.e)(BB, null, aB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, jB) => {
              BB.isEnabled = jB
            }
          },
          metadata: jB
        }, fB, oB), (0, iB.e)(BB, null, sB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, jB) => {
              BB.indexOfRefraction = jB
            }
          },
          metadata: jB
        }, VB, hB), (0, iB.e)(BB, null, JB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, jB) => {
              BB.texture = jB
            }
          },
          metadata: jB
        }, XB, ZB), (0, iB.e)(BB, null, mB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, jB) => {
              BB.useRoughnessFromMainTexture = jB
            }
          },
          metadata: jB
        }, AB, TB), (0, iB.e)(BB, null, yB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, jB) => {
              BB.textureRoughness = jB
            }
          },
          metadata: jB
        }, PB, eB), (0, iB.e)(BB, null, kB, {
          kind: "accessor",
          name: "remapF0OnInterfaceChange",
          static: !1,
          private: !1,
          access: {
            has: BB => "remapF0OnInterfaceChange" in BB,
            get: BB => BB.remapF0OnInterfaceChange,
            set: (BB, jB) => {
              BB.remapF0OnInterfaceChange = jB
            }
          },
          metadata: jB
        }, lB, wB), (0, iB.e)(BB, null, GB, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, jB) => {
              BB.bumpTexture = jB
            }
          },
          metadata: jB
        }, KB, CB), (0, iB.e)(BB, null, LB, {
          kind: "accessor",
          name: "isTintEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTintEnabled" in BB,
            get: BB => BB.isTintEnabled,
            set: (BB, jB) => {
              BB.isTintEnabled = jB
            }
          },
          metadata: jB
        }, cB, vB), (0, iB.e)(BB, null, MB, {
          kind: "accessor",
          name: "tintTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintTexture" in BB,
            get: BB => BB.tintTexture,
            set: (BB, jB) => {
              BB.tintTexture = jB
            }
          },
          metadata: jB
        }, Ij, Nj), (0, iB.e)(null, null, pB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, jB) => {
              BB.intensity = jB
            }
          },
          metadata: jB
        }, HB, DB), (0, iB.e)(null, null, rB, {
          kind: "field",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, jB) => {
              BB.roughness = jB
            }
          },
          metadata: jB
        }, FB, YB), (0, iB.e)(null, null, gB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, jB) => {
              BB.tintColor = jB
            }
          },
          metadata: jB
        }, Bj, jj), (0, iB.e)(null, null, tB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, jB) => {
              BB.tintColorAtDistance = jB
            }
          },
          metadata: jB
        }, zj, Qj), (0, iB.e)(null, null, SB, {
          kind: "field",
          name: "tintThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintThickness" in BB,
            get: BB => BB.tintThickness,
            set: (BB, jB) => {
              BB.tintThickness = jB
            }
          },
          metadata: jB
        }, nj, dj), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB._DefaultIndexOfRefraction = 1.5, BB
    })();
    class jj extends PB.b {
      constructor() {
        super(...arguments), this.IRIDESCENCE = !1, this.IRIDESCENCE_TEXTURE = !1, this.IRIDESCENCE_TEXTUREDIRECTUV = 0, this.IRIDESCENCE_THICKNESS_TEXTURE = !1, this.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0
      }
    }
    let zj = (() => {
      var BB, jB, zB, QB;
      let nB, dB, IB, NB, uB, UB, aB, pB = WB.c,
        rB = [],
        sB = [],
        JB = [],
        mB = [],
        yB = [],
        kB = [],
        GB = [],
        LB = [],
        gB = [],
        tB = [],
        SB = [],
        MB = [],
        EB = [],
        fB = [];
      return BB = class extends pB {
        get isEnabled() {
          return (0, iB.b)(this, jB, "f")
        }
        set isEnabled(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        get texture() {
          return (0, iB.b)(this, zB, "f")
        }
        set texture(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get thicknessTexture() {
          return (0, iB.b)(this, QB, "f")
        }
        set thicknessTexture(BB) {
          (0, iB.d)(this, QB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(nB) {
          let dB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(nB, "PBRIridescence", 110, new jj, dB), this._isEnabled = !1, jB.set(this, (0, iB.g)(this, rB, !1)), this.intensity = ((0, iB.g)(this, sB), (0, iB.g)(this, JB, 1)), this.minimumThickness = ((0, iB.g)(this, mB), (0, iB.g)(this, yB, BB._DefaultMinimumThickness)), this.maximumThickness = ((0, iB.g)(this, kB), (0, iB.g)(this, GB, BB._DefaultMaximumThickness)), this.indexOfRefraction = ((0, iB.g)(this, LB), (0, iB.g)(this, gB, BB._DefaultIndexOfRefraction)), this._texture = ((0, iB.g)(this, tB), null), zB.set(this, (0, iB.g)(this, SB, null)), this._thicknessTexture = ((0, iB.g)(this, MB), null), QB.set(this, (0, iB.g)(this, EB, null)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, iB.g)(this, fB), this._internalMarkAllSubMeshesAsTexturesDirty = nB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, jB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && jB.texturesEnabled) {
            if (this._texture && bB.d.IridescenceTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._thicknessTexture && bB.d.IridescenceTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, jB) {
          this._isEnabled ? (BB.IRIDESCENCE = !0, BB._areTexturesDirty && jB.texturesEnabled && (this._texture && bB.d.IridescenceTextureEnabled ? (0, RB.cb)(this._texture, BB, "IRIDESCENCE_TEXTURE") : BB.IRIDESCENCE_TEXTURE = !1, this._thicknessTexture && bB.d.IridescenceTextureEnabled ? (0, RB.cb)(this._thicknessTexture, BB, "IRIDESCENCE_THICKNESS_TEXTURE") : BB.IRIDESCENCE_THICKNESS_TEXTURE = !1)) : (BB.IRIDESCENCE = !1, BB.IRIDESCENCE_TEXTURE = !1, BB.IRIDESCENCE_THICKNESS_TEXTURE = !1, BB.IRIDESCENCE_TEXTUREDIRECTUV = 0, BB.IRIDESCENCE_THICKNESS_TEXTUREDIRECTUV = 0)
        }
        bindForSubMesh(BB, jB) {
          if (!this._isEnabled) return;
          const zB = this._material.isFrozen;
          BB.useUbo && zB && BB.isSync || ((this._texture || this._thicknessTexture) && bB.d.IridescenceTextureEnabled && (BB.updateFloat4("vIridescenceInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._thicknessTexture?.coordinatesIndex ?? 0, this._thicknessTexture?.level ?? 0), this._texture && (0, RB.A)(this._texture, BB, "iridescence"), this._thicknessTexture && (0, RB.A)(this._thicknessTexture, BB, "iridescenceThickness")), BB.updateFloat4("vIridescenceParams", this.intensity, this.indexOfRefraction, this.minimumThickness, this.maximumThickness)), jB.texturesEnabled && (this._texture && bB.d.IridescenceTextureEnabled && BB.setTexture("iridescenceSampler", this._texture), this._thicknessTexture && bB.d.IridescenceTextureEnabled && BB.setTexture("iridescenceThicknessSampler", this._thicknessTexture))
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
        addFallbacks(BB, jB, zB) {
          return BB.IRIDESCENCE && jB.addFallback(zB++, "IRIDESCENCE"), zB
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
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(pB[Symbol.metadata] ?? null) : void 0;
        nB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, qB.A)()], IB = [(0, qB.A)()], NB = [(0, qB.A)()], uB = [(0, qB.A)()], UB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], aB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], (0, iB.e)(BB, null, nB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, jB) => {
              BB.isEnabled = jB
            }
          },
          metadata: jB
        }, rB, sB), (0, iB.e)(BB, null, UB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, jB) => {
              BB.texture = jB
            }
          },
          metadata: jB
        }, SB, MB), (0, iB.e)(BB, null, aB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, jB) => {
              BB.thicknessTexture = jB
            }
          },
          metadata: jB
        }, EB, fB), (0, iB.e)(null, null, dB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, jB) => {
              BB.intensity = jB
            }
          },
          metadata: jB
        }, JB, mB), (0, iB.e)(null, null, IB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, jB) => {
              BB.minimumThickness = jB
            }
          },
          metadata: jB
        }, yB, kB), (0, iB.e)(null, null, NB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, jB) => {
              BB.maximumThickness = jB
            }
          },
          metadata: jB
        }, GB, LB), (0, iB.e)(null, null, uB, {
          kind: "field",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, jB) => {
              BB.indexOfRefraction = jB
            }
          },
          metadata: jB
        }, gB, tB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB._DefaultMinimumThickness = 100, BB._DefaultMaximumThickness = 400, BB._DefaultIndexOfRefraction = 1.3, BB
    })();
    class Qj extends PB.b {
      constructor() {
        super(...arguments), this.ANISOTROPIC = !1, this.ANISOTROPIC_TEXTURE = !1, this.ANISOTROPIC_TEXTUREDIRECTUV = 0, this.ANISOTROPIC_LEGACY = !1, this.MAINUV1 = !1
      }
    }
    let nj = (() => {
      var BB, jB, zB, QB;
      let nB, dB, IB, NB, uB, UB = WB.c,
        aB = [],
        pB = [],
        rB = [],
        sB = [],
        JB = [],
        mB = [],
        yB = [],
        kB = [],
        GB = [],
        LB = [];
      return BB = class extends UB {
        get isEnabled() {
          return (0, iB.b)(this, jB, "f")
        }
        set isEnabled(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        set angle(BB) {
          this.direction.x = Math.cos(BB), this.direction.y = Math.sin(BB)
        }
        get angle() {
          return Math.atan2(this.direction.y, this.direction.x)
        }
        get texture() {
          return (0, iB.b)(this, zB, "f")
        }
        set texture(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get legacy() {
          return (0, iB.b)(this, QB, "f")
        }
        set legacy(BB) {
          (0, iB.d)(this, QB, BB, "f")
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
          let nB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "PBRAnisotropic", 110, new Qj, nB), this._isEnabled = !1, jB.set(this, (0, iB.g)(this, aB, !1)), this.intensity = ((0, iB.g)(this, pB), (0, iB.g)(this, rB, 1)), this.direction = ((0, iB.g)(this, sB), (0, iB.g)(this, JB, new AB.i(1, 0))), this._texture = ((0, iB.g)(this, mB), null), zB.set(this, (0, iB.g)(this, yB, null)), this._legacy = ((0, iB.g)(this, kB), !1), QB.set(this, (0, iB.g)(this, GB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, iB.g)(this, LB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1], this._internalMarkAllSubMeshesAsMiscDirty = BB._dirtyCallbacks[16]
        }
        isReadyForSubMesh(BB, jB) {
          return !this._isEnabled || !(BB._areTexturesDirty && jB.texturesEnabled && this._texture && bB.d.AnisotropicTextureEnabled && !this._texture.isReadyOrNotBlocking())
        }
        prepareDefinesBeforeAttributes(BB, jB, zB) {
          this._isEnabled ? (BB.ANISOTROPIC = this._isEnabled, this._isEnabled && !zB.isVerticesDataPresent(TB.l.TangentKind) && (BB._needUVs = !0, BB.MAINUV1 = !0), BB._areTexturesDirty && jB.texturesEnabled && (this._texture && bB.d.AnisotropicTextureEnabled ? (0, RB.cb)(this._texture, BB, "ANISOTROPIC_TEXTURE") : BB.ANISOTROPIC_TEXTURE = !1), BB._areMiscDirty && (BB.ANISOTROPIC_LEGACY = this._legacy)) : (BB.ANISOTROPIC = !1, BB.ANISOTROPIC_TEXTURE = !1, BB.ANISOTROPIC_TEXTUREDIRECTUV = 0, BB.ANISOTROPIC_LEGACY = !1)
        }
        bindForSubMesh(BB, jB) {
          if (!this._isEnabled) return;
          const zB = this._material.isFrozen;
          BB.useUbo && zB && BB.isSync || (this._texture && bB.d.AnisotropicTextureEnabled && (BB.updateFloat2("vAnisotropyInfos", this._texture.coordinatesIndex, this._texture.level), (0, RB.A)(this._texture, BB, "anisotropy")), BB.updateFloat3("vAnisotropy", this.direction.x, this.direction.y, this.intensity)), jB.texturesEnabled && this._texture && bB.d.AnisotropicTextureEnabled && BB.setTexture("anisotropySampler", this._texture)
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
        addFallbacks(BB, jB, zB) {
          return BB.ANISOTROPIC && jB.addFallback(zB++, "ANISOTROPIC"), zB
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
        parse(BB, jB, zB) {
          super.parse(BB, jB, zB), void 0 === BB.legacy && (this.legacy = !0)
        }
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(UB[Symbol.metadata] ?? null) : void 0;
        nB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, qB.A)()], IB = [(0, qB.w)()], NB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], (0, iB.e)(BB, null, nB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, jB) => {
              BB.isEnabled = jB
            }
          },
          metadata: jB
        }, aB, pB), (0, iB.e)(BB, null, NB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, jB) => {
              BB.texture = jB
            }
          },
          metadata: jB
        }, yB, kB), (0, iB.e)(BB, null, uB, {
          kind: "accessor",
          name: "legacy",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacy" in BB,
            get: BB => BB.legacy,
            set: (BB, jB) => {
              BB.legacy = jB
            }
          },
          metadata: jB
        }, GB, LB), (0, iB.e)(null, null, dB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, jB) => {
              BB.intensity = jB
            }
          },
          metadata: jB
        }, rB, sB), (0, iB.e)(null, null, IB, {
          kind: "field",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: BB => "direction" in BB,
            get: BB => BB.direction,
            set: (BB, jB) => {
              BB.direction = jB
            }
          },
          metadata: jB
        }, JB, mB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB
    })();
    class dj extends PB.b {
      constructor() {
        super(...arguments), this.SHEEN = !1, this.SHEEN_TEXTURE = !1, this.SHEEN_GAMMATEXTURE = !1, this.SHEEN_TEXTURE_ROUGHNESS = !1, this.SHEEN_TEXTUREDIRECTUV = 0, this.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0, this.SHEEN_LINKWITHALBEDO = !1, this.SHEEN_ROUGHNESS = !1, this.SHEEN_ALBEDOSCALING = !1, this.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1
      }
    }
    let Ij = (() => {
      var BB, jB, zB, QB, nB, dB, IB, NB;
      let uB, UB, aB, pB, rB, sB, JB, mB, yB, kB = WB.c,
        GB = [],
        LB = [],
        gB = [],
        tB = [],
        SB = [],
        MB = [],
        EB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [];
      return BB = class extends kB {
        get isEnabled() {
          return (0, iB.b)(this, jB, "f")
        }
        set isEnabled(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        get linkSheenWithAlbedo() {
          return (0, iB.b)(this, zB, "f")
        }
        set linkSheenWithAlbedo(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get texture() {
          return (0, iB.b)(this, QB, "f")
        }
        set texture(BB) {
          (0, iB.d)(this, QB, BB, "f")
        }
        get useRoughnessFromMainTexture() {
          return (0, iB.b)(this, nB, "f")
        }
        set useRoughnessFromMainTexture(BB) {
          (0, iB.d)(this, nB, BB, "f")
        }
        get roughness() {
          return (0, iB.b)(this, dB, "f")
        }
        set roughness(BB) {
          (0, iB.d)(this, dB, BB, "f")
        }
        get textureRoughness() {
          return (0, iB.b)(this, IB, "f")
        }
        set textureRoughness(BB) {
          (0, iB.d)(this, IB, BB, "f")
        }
        get albedoScaling() {
          return (0, iB.b)(this, NB, "f")
        }
        set albedoScaling(BB) {
          (0, iB.d)(this, NB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let uB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "Sheen", 120, new dj, uB), this._isEnabled = !1, jB.set(this, (0, iB.g)(this, GB, !1)), this._linkSheenWithAlbedo = ((0, iB.g)(this, LB), !1), zB.set(this, (0, iB.g)(this, gB, !1)), this.intensity = ((0, iB.g)(this, tB), (0, iB.g)(this, SB, 1)), this.color = ((0, iB.g)(this, MB), (0, iB.g)(this, EB, xB.d.White())), this._texture = ((0, iB.g)(this, fB), null), QB.set(this, (0, iB.g)(this, oB, null)), this._useRoughnessFromMainTexture = ((0, iB.g)(this, HB), !0), nB.set(this, (0, iB.g)(this, DB, !0)), this._roughness = ((0, iB.g)(this, FB), null), dB.set(this, (0, iB.g)(this, YB, null)), this._textureRoughness = ((0, iB.g)(this, VB), null), IB.set(this, (0, iB.g)(this, hB, null)), this._albedoScaling = ((0, iB.g)(this, XB), !1), NB.set(this, (0, iB.g)(this, ZB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, iB.g)(this, AB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, jB) {
          if (!this._isEnabled) return !0;
          if (BB._areTexturesDirty && jB.texturesEnabled) {
            if (this._texture && bB.d.SheenTextureEnabled && !this._texture.isReadyOrNotBlocking()) return !1;
            if (this._textureRoughness && bB.d.SheenTextureEnabled && !this._textureRoughness.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, jB) {
          this._isEnabled ? (BB.SHEEN = !0, BB.SHEEN_LINKWITHALBEDO = this._linkSheenWithAlbedo, BB.SHEEN_ROUGHNESS = null !== this._roughness, BB.SHEEN_ALBEDOSCALING = this._albedoScaling, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = this._useRoughnessFromMainTexture, BB._areTexturesDirty && jB.texturesEnabled && (this._texture && bB.d.SheenTextureEnabled ? ((0, RB.cb)(this._texture, BB, "SHEEN_TEXTURE"), BB.SHEEN_GAMMATEXTURE = this._texture.gammaSpace) : BB.SHEEN_TEXTURE = !1, this._textureRoughness && bB.d.SheenTextureEnabled ? (0, RB.cb)(this._textureRoughness, BB, "SHEEN_TEXTURE_ROUGHNESS") : BB.SHEEN_TEXTURE_ROUGHNESS = !1)) : (BB.SHEEN = !1, BB.SHEEN_TEXTURE = !1, BB.SHEEN_TEXTURE_ROUGHNESS = !1, BB.SHEEN_LINKWITHALBEDO = !1, BB.SHEEN_ROUGHNESS = !1, BB.SHEEN_ALBEDOSCALING = !1, BB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE = !1, BB.SHEEN_GAMMATEXTURE = !1, BB.SHEEN_TEXTUREDIRECTUV = 0, BB.SHEEN_TEXTURE_ROUGHNESSDIRECTUV = 0)
        }
        bindForSubMesh(BB, jB, zB, QB) {
          if (!this._isEnabled) return;
          const nB = QB.materialDefines,
            dB = this._material.isFrozen;
          BB.useUbo && dB && BB.isSync || ((this._texture || this._textureRoughness) && bB.d.SheenTextureEnabled && (BB.updateFloat4("vSheenInfos", this._texture?.coordinatesIndex ?? 0, this._texture?.level ?? 0, this._textureRoughness?.coordinatesIndex ?? 0, this._textureRoughness?.level ?? 0), this._texture && (0, RB.A)(this._texture, BB, "sheen"), this._textureRoughness && !nB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && (0, RB.A)(this._textureRoughness, BB, "sheenRoughness")), BB.updateFloat4("vSheenColor", this.color.r, this.color.g, this.color.b, this.intensity), null !== this._roughness && BB.updateFloat("vSheenRoughness", this._roughness)), jB.texturesEnabled && (this._texture && bB.d.SheenTextureEnabled && BB.setTexture("sheenSampler", this._texture), this._textureRoughness && !nB.SHEEN_USE_ROUGHNESS_FROM_MAINTEXTURE && bB.d.SheenTextureEnabled && BB.setTexture("sheenRoughnessSampler", this._textureRoughness))
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
        addFallbacks(BB, jB, zB) {
          return BB.SHEEN && jB.addFallback(zB++, "SHEEN"), zB
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
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, nB = new WeakMap, dB = new WeakMap, IB = new WeakMap, NB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
        uB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], aB = [(0, qB.A)()], pB = [(0, qB.i)()], rB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], sB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], mB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], (0, iB.e)(BB, null, uB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, jB) => {
              BB.isEnabled = jB
            }
          },
          metadata: jB
        }, GB, LB), (0, iB.e)(BB, null, UB, {
          kind: "accessor",
          name: "linkSheenWithAlbedo",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkSheenWithAlbedo" in BB,
            get: BB => BB.linkSheenWithAlbedo,
            set: (BB, jB) => {
              BB.linkSheenWithAlbedo = jB
            }
          },
          metadata: jB
        }, gB, tB), (0, iB.e)(BB, null, rB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, jB) => {
              BB.texture = jB
            }
          },
          metadata: jB
        }, oB, HB), (0, iB.e)(BB, null, sB, {
          kind: "accessor",
          name: "useRoughnessFromMainTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMainTexture" in BB,
            get: BB => BB.useRoughnessFromMainTexture,
            set: (BB, jB) => {
              BB.useRoughnessFromMainTexture = jB
            }
          },
          metadata: jB
        }, DB, FB), (0, iB.e)(BB, null, JB, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, jB) => {
              BB.roughness = jB
            }
          },
          metadata: jB
        }, YB, VB), (0, iB.e)(BB, null, mB, {
          kind: "accessor",
          name: "textureRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "textureRoughness" in BB,
            get: BB => BB.textureRoughness,
            set: (BB, jB) => {
              BB.textureRoughness = jB
            }
          },
          metadata: jB
        }, hB, XB), (0, iB.e)(BB, null, yB, {
          kind: "accessor",
          name: "albedoScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoScaling" in BB,
            get: BB => BB.albedoScaling,
            set: (BB, jB) => {
              BB.albedoScaling = jB
            }
          },
          metadata: jB
        }, ZB, AB), (0, iB.e)(null, null, aB, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "intensity" in BB,
            get: BB => BB.intensity,
            set: (BB, jB) => {
              BB.intensity = jB
            }
          },
          metadata: jB
        }, SB, MB), (0, iB.e)(null, null, pB, {
          kind: "field",
          name: "color",
          static: !1,
          private: !1,
          access: {
            has: BB => "color" in BB,
            get: BB => BB.color,
            set: (BB, jB) => {
              BB.color = jB
            }
          },
          metadata: jB
        }, EB, fB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB
    })();
    class Nj extends PB.b {
      constructor() {
        super(...arguments), this.SUBSURFACE = !1, this.SS_REFRACTION = !1, this.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_TRANSLUCENCY = !1, this.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, this.SS_SCATTERING = !1, this.SS_DISPERSION = !1, this.SS_THICKNESSANDMASK_TEXTURE = !1, this.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, this.SS_HAS_THICKNESS = !1, this.SS_REFRACTIONINTENSITY_TEXTURE = !1, this.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, this.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, this.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, this.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, this.SS_REFRACTIONMAP_3D = !1, this.SS_REFRACTIONMAP_OPPOSITEZ = !1, this.SS_LODINREFRACTIONALPHA = !1, this.SS_GAMMAREFRACTION = !1, this.SS_RGBDREFRACTION = !1, this.SS_LINEARSPECULARREFRACTION = !1, this.SS_LINKREFRACTIONTOTRANSPARENCY = !1, this.SS_ALBEDOFORREFRACTIONTINT = !1, this.SS_ALBEDOFORTRANSLUCENCYTINT = !1, this.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.SS_USE_THICKNESS_AS_DEPTH = !1, this.SS_USE_GLTF_TEXTURES = !1, this.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1, this.SS_TRANSLUCENCY_LEGACY = !1
      }
    }
    let uj = (() => {
      var BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB;
      let kB, GB, LB, gB, tB, SB, MB, EB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, TB, PB, eB, lB, wB, KB, CB, cB, vB, OB, Bj, jj, zj = WB.c,
        Qj = [],
        nj = [],
        dj = [],
        Ij = [],
        uj = [],
        Uj = [],
        aj = [],
        pj = [],
        rj = [],
        sj = [],
        Jj = [],
        mj = [],
        yj = [],
        kj = [],
        Gj = [],
        Lj = [],
        gj = [],
        tj = [],
        Sj = [],
        Mj = [],
        Ej = [],
        ij = [],
        qj = [],
        fj = [],
        oj = [],
        Hj = [],
        Dj = [],
        Fj = [],
        Yj = [],
        Vj = [],
        hj = [],
        Xj = [],
        Zj = [],
        Aj = [],
        Tj = [],
        Pj = [],
        Wj = [],
        ej = [],
        lj = [],
        wj = [],
        xj = [],
        Kj = [],
        Cj = [],
        cj = [],
        bj = [],
        vj = [],
        Rj = [],
        Oj = [],
        Bz = [],
        jz = [],
        zz = [],
        Qz = [],
        nz = [],
        dz = [],
        Iz = [],
        Nz = [],
        uz = [],
        Uz = [],
        az = [],
        pz = [];
      return BB = class extends zj {
        get isRefractionEnabled() {
          return (0, iB.b)(this, jB, "f")
        }
        set isRefractionEnabled(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        get isTranslucencyEnabled() {
          return (0, iB.b)(this, zB, "f")
        }
        set isTranslucencyEnabled(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get isDispersionEnabled() {
          return (0, iB.b)(this, QB, "f")
        }
        set isDispersionEnabled(BB) {
          (0, iB.d)(this, QB, BB, "f")
        }
        get isScatteringEnabled() {
          return (0, iB.b)(this, nB, "f")
        }
        set isScatteringEnabled(BB) {
          (0, iB.d)(this, nB, BB, "f")
        }
        get scatteringDiffusionProfile() {
          return this._scene.subSurfaceConfiguration ? this._scene.subSurfaceConfiguration.ssDiffusionProfileColors[this._scatteringDiffusionProfileIndex] : null
        }
        set scatteringDiffusionProfile(BB) {
          this._scene.enableSubSurfaceForPrePass() && BB && (this._scatteringDiffusionProfileIndex = this._scene.subSurfaceConfiguration.addDiffusionProfile(BB))
        }
        get useAlbedoToTintRefraction() {
          return (0, iB.b)(this, dB, "f")
        }
        set useAlbedoToTintRefraction(BB) {
          (0, iB.d)(this, dB, BB, "f")
        }
        get useAlbedoToTintTranslucency() {
          return (0, iB.b)(this, IB, "f")
        }
        set useAlbedoToTintTranslucency(BB) {
          (0, iB.d)(this, IB, BB, "f")
        }
        get thicknessTexture() {
          return (0, iB.b)(this, NB, "f")
        }
        set thicknessTexture(BB) {
          (0, iB.d)(this, NB, BB, "f")
        }
        get refractionTexture() {
          return (0, iB.b)(this, uB, "f")
        }
        set refractionTexture(BB) {
          (0, iB.d)(this, uB, BB, "f")
        }
        get indexOfRefraction() {
          return (0, iB.b)(this, UB, "f")
        }
        set indexOfRefraction(BB) {
          (0, iB.d)(this, UB, BB, "f")
        }
        get volumeIndexOfRefraction() {
          return this._volumeIndexOfRefraction >= 1 ? this._volumeIndexOfRefraction : this._indexOfRefraction
        }
        set volumeIndexOfRefraction(BB) {
          const jB = BB >= 1 ? BB : -1;
          this._volumeIndexOfRefraction !== jB && (this._volumeIndexOfRefraction = jB, this._markAllSubMeshesAsTexturesDirty())
        }
        get invertRefractionY() {
          return (0, iB.b)(this, aB, "f")
        }
        set invertRefractionY(BB) {
          (0, iB.d)(this, aB, BB, "f")
        }
        get linkRefractionWithTransparency() {
          return (0, iB.b)(this, pB, "f")
        }
        set linkRefractionWithTransparency(BB) {
          (0, iB.d)(this, pB, BB, "f")
        }
        get useMaskFromThicknessTexture() {
          return (0, iB.b)(this, rB, "f")
        }
        set useMaskFromThicknessTexture(BB) {
          (0, iB.d)(this, rB, BB, "f")
        }
        get refractionIntensityTexture() {
          return (0, iB.b)(this, sB, "f")
        }
        set refractionIntensityTexture(BB) {
          (0, iB.d)(this, sB, BB, "f")
        }
        get translucencyIntensityTexture() {
          return (0, iB.b)(this, JB, "f")
        }
        set translucencyIntensityTexture(BB) {
          (0, iB.d)(this, JB, BB, "f")
        }
        get translucencyColorTexture() {
          return (0, iB.b)(this, mB, "f")
        }
        set translucencyColorTexture(BB) {
          (0, iB.d)(this, mB, BB, "f")
        }
        get useGltfStyleTextures() {
          return (0, iB.b)(this, yB, "f")
        }
        set useGltfStyleTextures(BB) {
          (0, iB.d)(this, yB, BB, "f")
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
        constructor(kB) {
          let GB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kB, "PBRSubSurface", 130, new Nj, GB), this._isRefractionEnabled = !1, jB.set(this, (0, iB.g)(this, Qj, !1)), this._isTranslucencyEnabled = ((0, iB.g)(this, nj), !1), zB.set(this, (0, iB.g)(this, dj, !1)), this._isDispersionEnabled = ((0, iB.g)(this, Ij), !1), QB.set(this, (0, iB.g)(this, uj, !1)), this._isScatteringEnabled = ((0, iB.g)(this, Uj), !1), nB.set(this, (0, iB.g)(this, aj, !1)), this._scatteringDiffusionProfileIndex = ((0, iB.g)(this, pj), (0, iB.g)(this, rj, 0)), this.refractionIntensity = ((0, iB.g)(this, sj), (0, iB.g)(this, Jj, 1)), this.translucencyIntensity = ((0, iB.g)(this, mj), (0, iB.g)(this, yj, 1)), this._useAlbedoToTintRefraction = ((0, iB.g)(this, kj), !1), dB.set(this, (0, iB.g)(this, Gj, !1)), this._useAlbedoToTintTranslucency = ((0, iB.g)(this, Lj), !1), IB.set(this, (0, iB.g)(this, gj, !1)), this._thicknessTexture = ((0, iB.g)(this, tj), null), NB.set(this, (0, iB.g)(this, Sj, null)), this._refractionTexture = ((0, iB.g)(this, Mj), null), uB.set(this, (0, iB.g)(this, Ej, null)), this._indexOfRefraction = ((0, iB.g)(this, ij), 1.5), UB.set(this, (0, iB.g)(this, qj, 1.5)), this._volumeIndexOfRefraction = ((0, iB.g)(this, fj), (0, iB.g)(this, oj, -1)), this._invertRefractionY = ((0, iB.g)(this, Hj), !1), aB.set(this, (0, iB.g)(this, Dj, !1)), this._linkRefractionWithTransparency = ((0, iB.g)(this, Fj), !1), pB.set(this, (0, iB.g)(this, Yj, !1)), this.minimumThickness = ((0, iB.g)(this, Vj), (0, iB.g)(this, hj, 0)), this.maximumThickness = ((0, iB.g)(this, Xj), (0, iB.g)(this, Zj, 1)), this.useThicknessAsDepth = ((0, iB.g)(this, Aj), (0, iB.g)(this, Tj, !1)), this.tintColor = ((0, iB.g)(this, Pj), (0, iB.g)(this, Wj, xB.d.White())), this.tintColorAtDistance = ((0, iB.g)(this, ej), (0, iB.g)(this, lj, 1)), this.dispersion = ((0, iB.g)(this, wj), (0, iB.g)(this, xj, 0)), this.diffusionDistance = ((0, iB.g)(this, Kj), (0, iB.g)(this, Cj, xB.d.White())), this._useMaskFromThicknessTexture = ((0, iB.g)(this, cj), !1), rB.set(this, (0, iB.g)(this, bj, !1)), this._refractionIntensityTexture = ((0, iB.g)(this, vj), null), sB.set(this, (0, iB.g)(this, Rj, null)), this._translucencyIntensityTexture = ((0, iB.g)(this, Oj), null), JB.set(this, (0, iB.g)(this, Bz, null)), this.translucencyColor = ((0, iB.g)(this, jz), (0, iB.g)(this, zz, null)), this._translucencyColorTexture = ((0, iB.g)(this, Qz), null), mB.set(this, (0, iB.g)(this, nz, null)), this._useGltfStyleTextures = ((0, iB.g)(this, dz), !0), yB.set(this, (0, iB.g)(this, Iz, !0)), this.applyAlbedoAfterSubSurface = ((0, iB.g)(this, Nz), (0, iB.g)(this, uz, BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE)), this.legacyTranslucency = ((0, iB.g)(this, Uz), (0, iB.g)(this, az, BB.DEFAULT_LEGACY_TRANSLUCENCY)), this._scene = (0, iB.g)(this, pz), this._scene = kB.aY(), this.registerForExtraEvents = !0, this._internalMarkAllSubMeshesAsTexturesDirty = kB._dirtyCallbacks[1], this._internalMarkScenePrePassDirty = kB._dirtyCallbacks[32]
        }
        isReadyForSubMesh(BB, jB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return !0;
          if (BB._areTexturesDirty && jB.texturesEnabled) {
            if (this._thicknessTexture && bB.d.ThicknessTextureEnabled && !this._thicknessTexture.isReadyOrNotBlocking()) return !1;
            if (this._refractionIntensityTexture && bB.d.RefractionIntensityTextureEnabled && !this._refractionIntensityTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyColorTexture && bB.d.TranslucencyColorTextureEnabled && !this._translucencyColorTexture.isReadyOrNotBlocking()) return !1;
            if (this._translucencyIntensityTexture && bB.d.TranslucencyIntensityTextureEnabled && !this._translucencyIntensityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getRefractionTexture(jB);
            if (BB && bB.d.RefractionTextureEnabled && !BB.isReadyOrNotBlocking()) return !1
          }
          return !0
        }
        prepareDefinesBeforeAttributes(BB, jB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return BB.SUBSURFACE = !1, BB.SS_DISPERSION = !1, BB.SS_TRANSLUCENCY = !1, BB.SS_SCATTERING = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_THICKNESSANDMASK_TEXTUREDIRECTUV = 0, BB.SS_HAS_THICKNESS = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTUREDIRECTUV = 0, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTUREDIRECTUV = 0, BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = !1, void(BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = !1);
          if (BB._areTexturesDirty) {
            if (BB.SUBSURFACE = !0, BB.SS_DISPERSION = this._isDispersionEnabled, BB.SS_TRANSLUCENCY = this._isTranslucencyEnabled, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_TRANSLUCENCY_LEGACY = this.legacyTranslucency, BB.SS_SCATTERING = this._isScatteringEnabled, BB.SS_THICKNESSANDMASK_TEXTURE = !1, BB.SS_REFRACTIONINTENSITY_TEXTURE = !1, BB.SS_TRANSLUCENCYINTENSITY_TEXTURE = !1, BB.SS_HAS_THICKNESS = !1, BB.SS_USE_GLTF_TEXTURES = !1, BB.SS_REFRACTION = !1, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = !1, BB.SS_REFRACTIONMAP_3D = !1, BB.SS_GAMMAREFRACTION = !1, BB.SS_RGBDREFRACTION = !1, BB.SS_LINEARSPECULARREFRACTION = !1, BB.SS_REFRACTIONMAP_OPPOSITEZ = !1, BB.SS_LODINREFRACTIONALPHA = !1, BB.SS_LINKREFRACTIONTOTRANSPARENCY = !1, BB.SS_ALBEDOFORREFRACTIONTINT = !1, BB.SS_ALBEDOFORTRANSLUCENCYTINT = !1, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = !1, BB.SS_USE_THICKNESS_AS_DEPTH = !1, BB.SS_TRANSLUCENCYCOLOR_TEXTURE = !1, BB.SS_APPLY_ALBEDO_AFTER_SUBSURFACE = this.applyAlbedoAfterSubSurface, BB._areTexturesDirty && jB.texturesEnabled && (this._thicknessTexture && bB.d.ThicknessTextureEnabled && (0, RB.cb)(this._thicknessTexture, BB, "SS_THICKNESSANDMASK_TEXTURE"), this._refractionIntensityTexture && bB.d.RefractionIntensityTextureEnabled && (0, RB.cb)(this._refractionIntensityTexture, BB, "SS_REFRACTIONINTENSITY_TEXTURE"), this._translucencyIntensityTexture && bB.d.TranslucencyIntensityTextureEnabled && (0, RB.cb)(this._translucencyIntensityTexture, BB, "SS_TRANSLUCENCYINTENSITY_TEXTURE"), this._translucencyColorTexture && bB.d.TranslucencyColorTextureEnabled && ((0, RB.cb)(this._translucencyColorTexture, BB, "SS_TRANSLUCENCYCOLOR_TEXTURE"), BB.SS_TRANSLUCENCYCOLOR_TEXTURE_GAMMA = this._translucencyColorTexture.gammaSpace)), BB.SS_HAS_THICKNESS = this.maximumThickness - this.minimumThickness !== 0, BB.SS_USE_GLTF_TEXTURES = this._useGltfStyleTextures, BB.SS_REFRACTION_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._refractionIntensityTexture, BB.SS_TRANSLUCENCY_USE_INTENSITY_FROM_THICKNESS = this._useMaskFromThicknessTexture && !this._translucencyIntensityTexture, this._isRefractionEnabled && jB.texturesEnabled) {
              const zB = this._getRefractionTexture(jB);
              zB && bB.d.RefractionTextureEnabled && (BB.SS_REFRACTION = !0, BB.SS_REFRACTIONMAP_3D = zB.isCube, BB.SS_GAMMAREFRACTION = zB.gammaSpace, BB.SS_RGBDREFRACTION = zB.isRGBD, BB.SS_LINEARSPECULARREFRACTION = zB.linearSpecularLOD, BB.SS_REFRACTIONMAP_OPPOSITEZ = this._scene.useRightHandedSystem && zB.isCube ? !zB.invertZ : zB.invertZ, BB.SS_LODINREFRACTIONALPHA = zB.lodLevelInAlpha, BB.SS_LINKREFRACTIONTOTRANSPARENCY = this._linkRefractionWithTransparency, BB.SS_ALBEDOFORREFRACTIONTINT = this._useAlbedoToTintRefraction, BB.SS_USE_LOCAL_REFRACTIONMAP_CUBIC = zB.isCube && zB.boundingBoxSize, BB.SS_USE_THICKNESS_AS_DEPTH = this.useThicknessAsDepth)
            }
            this._isTranslucencyEnabled && (BB.SS_ALBEDOFORTRANSLUCENCYTINT = this._useAlbedoToTintTranslucency)
          }
        }
        hardBindForSubMesh(BB, jB, zB, QB) {
          if (this._isRefractionEnabled || this._isTranslucencyEnabled || this._isScatteringEnabled)
            if (0 === this.maximumThickness && 0 === this.minimumThickness) BB.updateFloat2("vThicknessParam", 0, 0);
            else {
              QB.getRenderingMesh().getWorldMatrix().decompose(AB.h.KJ[0]);
              const jB = Math.max(Math.abs(AB.h.KJ[0].x), Math.abs(AB.h.KJ[0].y), Math.abs(AB.h.KJ[0].z));
              BB.updateFloat2("vThicknessParam", this.minimumThickness * jB, (this.maximumThickness - this.minimumThickness) * jB)
            }
        }
        bindForSubMesh(BB, jB, zB, QB) {
          if (!this._isRefractionEnabled && !this._isTranslucencyEnabled && !this._isScatteringEnabled) return;
          const nB = QB.materialDefines,
            dB = this._material.isFrozen,
            IB = this._material.realTimeFiltering,
            NB = nB.LODBASEDMICROSFURACE,
            uB = this._getRefractionTexture(jB);
          if (!BB.useUbo || !dB || !BB.isSync) {
            if (this._thicknessTexture && bB.d.ThicknessTextureEnabled && (BB.updateFloat2("vThicknessInfos", this._thicknessTexture.coordinatesIndex, this._thicknessTexture.level), (0, RB.A)(this._thicknessTexture, BB, "thickness")), this._refractionIntensityTexture && bB.d.RefractionIntensityTextureEnabled && nB.SS_REFRACTIONINTENSITY_TEXTURE && (BB.updateFloat2("vRefractionIntensityInfos", this._refractionIntensityTexture.coordinatesIndex, this._refractionIntensityTexture.level), (0, RB.A)(this._refractionIntensityTexture, BB, "refractionIntensity")), this._translucencyColorTexture && bB.d.TranslucencyColorTextureEnabled && nB.SS_TRANSLUCENCYCOLOR_TEXTURE && (BB.updateFloat2("vTranslucencyColorInfos", this._translucencyColorTexture.coordinatesIndex, this._translucencyColorTexture.level), (0, RB.A)(this._translucencyColorTexture, BB, "translucencyColor")), this._translucencyIntensityTexture && bB.d.TranslucencyIntensityTextureEnabled && nB.SS_TRANSLUCENCYINTENSITY_TEXTURE && (BB.updateFloat2("vTranslucencyIntensityInfos", this._translucencyIntensityTexture.coordinatesIndex, this._translucencyIntensityTexture.level), (0, RB.A)(this._translucencyIntensityTexture, BB, "translucencyIntensity")), uB && bB.d.RefractionTextureEnabled) {
              BB.l_("refractionMatrix", uB.getRefractionTextureMatrix());
              let jB = 1;
              uB.isCube || uB.depth && (jB = uB.depth);
              const zB = uB.getSize().width,
                QB = this.volumeIndexOfRefraction;
              if (BB.updateFloat4("vRefractionInfos", uB.level, 1 / QB, jB, this._invertRefractionY ? -1 : 1), BB.updateFloat4("vRefractionMicrosurfaceInfos", zB, uB.lodGenerationScale, uB.lodGenerationOffset, 1 / this.indexOfRefraction), IB && BB.updateFloat2("vRefractionFilteringInfo", zB, Math.log2(zB)), uB.boundingBoxSize) {
                const jB = uB;
                BB.updateVector3("vRefractionPosition", jB.boundingBoxPosition), BB.updateVector3("vRefractionSize", jB.boundingBoxSize)
              }
            }
            this._isScatteringEnabled && BB.updateFloat("scatteringDiffusionProfile", this._scatteringDiffusionProfileIndex), BB.updateColor3("vDiffusionDistance", this.diffusionDistance), BB.updateFloat4("vTintColor", this.tintColor.r, this.tintColor.g, this.tintColor.b, Math.max(1e-5, this.tintColorAtDistance)), BB.updateColor4("vTranslucencyColor", this.translucencyColor ?? this.tintColor, 0), BB.updateFloat3("vSubSurfaceIntensity", this.refractionIntensity, this.translucencyIntensity, 0), BB.updateFloat("dispersion", this.dispersion)
          }
          jB.texturesEnabled && (this._thicknessTexture && bB.d.ThicknessTextureEnabled && BB.setTexture("thicknessSampler", this._thicknessTexture), this._refractionIntensityTexture && bB.d.RefractionIntensityTextureEnabled && nB.SS_REFRACTIONINTENSITY_TEXTURE && BB.setTexture("refractionIntensitySampler", this._refractionIntensityTexture), this._translucencyIntensityTexture && bB.d.TranslucencyIntensityTextureEnabled && nB.SS_TRANSLUCENCYINTENSITY_TEXTURE && BB.setTexture("translucencyIntensitySampler", this._translucencyIntensityTexture), this._translucencyColorTexture && bB.d.TranslucencyColorTextureEnabled && nB.SS_TRANSLUCENCYCOLOR_TEXTURE && BB.setTexture("translucencyColorSampler", this._translucencyColorTexture), uB && bB.d.RefractionTextureEnabled && (NB ? BB.setTexture("refractionSampler", uB) : (BB.setTexture("refractionSampler", uB._lodTextureMid || uB), BB.setTexture("refractionSamplerLow", uB._lodTextureLow || uB), BB.setTexture("refractionSamplerHigh", uB._lodTextureHigh || uB))))
        }
        _getRefractionTexture(BB) {
          return this._refractionTexture ? this._refractionTexture : this._isRefractionEnabled ? BB.environmentTexture : null
        }
        get disableAlphaBlending() {
          return this._isRefractionEnabled && this._linkRefractionWithTransparency
        }
        fillRenderTargetTextures(BB) {
          bB.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && BB.push(this._refractionTexture)
        }
        hasTexture(BB) {
          return this._thicknessTexture === BB || (this._refractionTexture === BB || (this._refractionIntensityTexture === BB || (this._translucencyIntensityTexture === BB || this._translucencyColorTexture === BB)))
        }
        hasRenderTargetTextures() {
          return !!(bB.d.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget)
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
        addFallbacks(BB, jB, zB) {
          return BB.SS_SCATTERING && jB.addFallback(zB++, "SS_SCATTERING"), BB.SS_TRANSLUCENCY && jB.addFallback(zB++, "SS_TRANSLUCENCY"), zB
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
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, nB = new WeakMap, dB = new WeakMap, IB = new WeakMap, NB = new WeakMap, uB = new WeakMap, UB = new WeakMap, aB = new WeakMap, pB = new WeakMap, rB = new WeakMap, sB = new WeakMap, JB = new WeakMap, mB = new WeakMap, yB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(zj[Symbol.metadata] ?? null) : void 0;
        kB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], gB = [(0, qB.A)(), (0, qB.e)("_markScenePrePassDirty")], tB = [(0, qB.A)()], SB = [(0, qB.A)()], MB = [(0, qB.A)()], EB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], fB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, qB.A)()], YB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], VB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], hB = [(0, qB.A)()], XB = [(0, qB.A)()], ZB = [(0, qB.A)()], TB = [(0, qB.i)()], PB = [(0, qB.A)()], eB = [(0, qB.A)()], lB = [(0, qB.i)()], wB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], KB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], CB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, qB.i)()], vB = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Bj = [(0, qB.A)()], jj = [(0, qB.A)()], (0, iB.e)(BB, null, kB, {
          kind: "accessor",
          name: "isRefractionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isRefractionEnabled" in BB,
            get: BB => BB.isRefractionEnabled,
            set: (BB, jB) => {
              BB.isRefractionEnabled = jB
            }
          },
          metadata: jB
        }, Qj, nj), (0, iB.e)(BB, null, GB, {
          kind: "accessor",
          name: "isTranslucencyEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isTranslucencyEnabled" in BB,
            get: BB => BB.isTranslucencyEnabled,
            set: (BB, jB) => {
              BB.isTranslucencyEnabled = jB
            }
          },
          metadata: jB
        }, dj, Ij), (0, iB.e)(BB, null, LB, {
          kind: "accessor",
          name: "isDispersionEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isDispersionEnabled" in BB,
            get: BB => BB.isDispersionEnabled,
            set: (BB, jB) => {
              BB.isDispersionEnabled = jB
            }
          },
          metadata: jB
        }, uj, Uj), (0, iB.e)(BB, null, gB, {
          kind: "accessor",
          name: "isScatteringEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isScatteringEnabled" in BB,
            get: BB => BB.isScatteringEnabled,
            set: (BB, jB) => {
              BB.isScatteringEnabled = jB
            }
          },
          metadata: jB
        }, aj, pj), (0, iB.e)(BB, null, EB, {
          kind: "accessor",
          name: "useAlbedoToTintRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintRefraction" in BB,
            get: BB => BB.useAlbedoToTintRefraction,
            set: (BB, jB) => {
              BB.useAlbedoToTintRefraction = jB
            }
          },
          metadata: jB
        }, Gj, Lj), (0, iB.e)(BB, null, fB, {
          kind: "accessor",
          name: "useAlbedoToTintTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlbedoToTintTranslucency" in BB,
            get: BB => BB.useAlbedoToTintTranslucency,
            set: (BB, jB) => {
              BB.useAlbedoToTintTranslucency = jB
            }
          },
          metadata: jB
        }, gj, tj), (0, iB.e)(BB, null, oB, {
          kind: "accessor",
          name: "thicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "thicknessTexture" in BB,
            get: BB => BB.thicknessTexture,
            set: (BB, jB) => {
              BB.thicknessTexture = jB
            }
          },
          metadata: jB
        }, Sj, Mj), (0, iB.e)(BB, null, HB, {
          kind: "accessor",
          name: "refractionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionTexture" in BB,
            get: BB => BB.refractionTexture,
            set: (BB, jB) => {
              BB.refractionTexture = jB
            }
          },
          metadata: jB
        }, Ej, ij), (0, iB.e)(BB, null, DB, {
          kind: "accessor",
          name: "indexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "indexOfRefraction" in BB,
            get: BB => BB.indexOfRefraction,
            set: (BB, jB) => {
              BB.indexOfRefraction = jB
            }
          },
          metadata: jB
        }, qj, fj), (0, iB.e)(BB, null, YB, {
          kind: "accessor",
          name: "invertRefractionY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertRefractionY" in BB,
            get: BB => BB.invertRefractionY,
            set: (BB, jB) => {
              BB.invertRefractionY = jB
            }
          },
          metadata: jB
        }, Dj, Fj), (0, iB.e)(BB, null, VB, {
          kind: "accessor",
          name: "linkRefractionWithTransparency",
          static: !1,
          private: !1,
          access: {
            has: BB => "linkRefractionWithTransparency" in BB,
            get: BB => BB.linkRefractionWithTransparency,
            set: (BB, jB) => {
              BB.linkRefractionWithTransparency = jB
            }
          },
          metadata: jB
        }, Yj, Vj), (0, iB.e)(BB, null, wB, {
          kind: "accessor",
          name: "useMaskFromThicknessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMaskFromThicknessTexture" in BB,
            get: BB => BB.useMaskFromThicknessTexture,
            set: (BB, jB) => {
              BB.useMaskFromThicknessTexture = jB
            }
          },
          metadata: jB
        }, bj, vj), (0, iB.e)(BB, null, KB, {
          kind: "accessor",
          name: "refractionIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensityTexture" in BB,
            get: BB => BB.refractionIntensityTexture,
            set: (BB, jB) => {
              BB.refractionIntensityTexture = jB
            }
          },
          metadata: jB
        }, Rj, Oj), (0, iB.e)(BB, null, CB, {
          kind: "accessor",
          name: "translucencyIntensityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensityTexture" in BB,
            get: BB => BB.translucencyIntensityTexture,
            set: (BB, jB) => {
              BB.translucencyIntensityTexture = jB
            }
          },
          metadata: jB
        }, Bz, jz), (0, iB.e)(BB, null, vB, {
          kind: "accessor",
          name: "translucencyColorTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColorTexture" in BB,
            get: BB => BB.translucencyColorTexture,
            set: (BB, jB) => {
              BB.translucencyColorTexture = jB
            }
          },
          metadata: jB
        }, nz, dz), (0, iB.e)(BB, null, OB, {
          kind: "accessor",
          name: "useGltfStyleTextures",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGltfStyleTextures" in BB,
            get: BB => BB.useGltfStyleTextures,
            set: (BB, jB) => {
              BB.useGltfStyleTextures = jB
            }
          },
          metadata: jB
        }, Iz, Nz), (0, iB.e)(null, null, tB, {
          kind: "field",
          name: "_scatteringDiffusionProfileIndex",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scatteringDiffusionProfileIndex" in BB,
            get: BB => BB._scatteringDiffusionProfileIndex,
            set: (BB, jB) => {
              BB._scatteringDiffusionProfileIndex = jB
            }
          },
          metadata: jB
        }, rj, sj), (0, iB.e)(null, null, SB, {
          kind: "field",
          name: "refractionIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "refractionIntensity" in BB,
            get: BB => BB.refractionIntensity,
            set: (BB, jB) => {
              BB.refractionIntensity = jB
            }
          },
          metadata: jB
        }, Jj, mj), (0, iB.e)(null, null, MB, {
          kind: "field",
          name: "translucencyIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyIntensity" in BB,
            get: BB => BB.translucencyIntensity,
            set: (BB, jB) => {
              BB.translucencyIntensity = jB
            }
          },
          metadata: jB
        }, yj, kj), (0, iB.e)(null, null, FB, {
          kind: "field",
          name: "_volumeIndexOfRefraction",
          static: !1,
          private: !1,
          access: {
            has: BB => "_volumeIndexOfRefraction" in BB,
            get: BB => BB._volumeIndexOfRefraction,
            set: (BB, jB) => {
              BB._volumeIndexOfRefraction = jB
            }
          },
          metadata: jB
        }, oj, Hj), (0, iB.e)(null, null, hB, {
          kind: "field",
          name: "minimumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "minimumThickness" in BB,
            get: BB => BB.minimumThickness,
            set: (BB, jB) => {
              BB.minimumThickness = jB
            }
          },
          metadata: jB
        }, hj, Xj), (0, iB.e)(null, null, XB, {
          kind: "field",
          name: "maximumThickness",
          static: !1,
          private: !1,
          access: {
            has: BB => "maximumThickness" in BB,
            get: BB => BB.maximumThickness,
            set: (BB, jB) => {
              BB.maximumThickness = jB
            }
          },
          metadata: jB
        }, Zj, Aj), (0, iB.e)(null, null, ZB, {
          kind: "field",
          name: "useThicknessAsDepth",
          static: !1,
          private: !1,
          access: {
            has: BB => "useThicknessAsDepth" in BB,
            get: BB => BB.useThicknessAsDepth,
            set: (BB, jB) => {
              BB.useThicknessAsDepth = jB
            }
          },
          metadata: jB
        }, Tj, Pj), (0, iB.e)(null, null, TB, {
          kind: "field",
          name: "tintColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColor" in BB,
            get: BB => BB.tintColor,
            set: (BB, jB) => {
              BB.tintColor = jB
            }
          },
          metadata: jB
        }, Wj, ej), (0, iB.e)(null, null, PB, {
          kind: "field",
          name: "tintColorAtDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "tintColorAtDistance" in BB,
            get: BB => BB.tintColorAtDistance,
            set: (BB, jB) => {
              BB.tintColorAtDistance = jB
            }
          },
          metadata: jB
        }, lj, wj), (0, iB.e)(null, null, eB, {
          kind: "field",
          name: "dispersion",
          static: !1,
          private: !1,
          access: {
            has: BB => "dispersion" in BB,
            get: BB => BB.dispersion,
            set: (BB, jB) => {
              BB.dispersion = jB
            }
          },
          metadata: jB
        }, xj, Kj), (0, iB.e)(null, null, lB, {
          kind: "field",
          name: "diffusionDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffusionDistance" in BB,
            get: BB => BB.diffusionDistance,
            set: (BB, jB) => {
              BB.diffusionDistance = jB
            }
          },
          metadata: jB
        }, Cj, cj), (0, iB.e)(null, null, cB, {
          kind: "field",
          name: "translucencyColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "translucencyColor" in BB,
            get: BB => BB.translucencyColor,
            set: (BB, jB) => {
              BB.translucencyColor = jB
            }
          },
          metadata: jB
        }, zz, Qz), (0, iB.e)(null, null, Bj, {
          kind: "field",
          name: "applyAlbedoAfterSubSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyAlbedoAfterSubSurface" in BB,
            get: BB => BB.applyAlbedoAfterSubSurface,
            set: (BB, jB) => {
              BB.applyAlbedoAfterSubSurface = jB
            }
          },
          metadata: jB
        }, uz, Uz), (0, iB.e)(null, null, jj, {
          kind: "field",
          name: "legacyTranslucency",
          static: !1,
          private: !1,
          access: {
            has: BB => "legacyTranslucency" in BB,
            get: BB => BB.legacyTranslucency,
            set: (BB, jB) => {
              BB.legacyTranslucency = jB
            }
          },
          metadata: jB
        }, az, pz), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB.DEFAULT_APPLY_ALBEDO_AFTERSUBSURFACE = !1, BB.DEFAULT_LEGACY_TRANSLUCENCY = !1, BB
    })();
    var Uj = zB(40451),
      aj = zB(40432),
      pj = zB(40466),
      rj = zB(40473),
      sj = zB(40475),
      Jj = zB(40478),
      mj = zB(40482),
      yj = zB(40491),
      kj = zB(39965);
    const Gj = {
      effect: null,
      subMesh: null
    };
    class Lj extends((0, mj.b)((0, Jj.d)(PB.b))) {}
    class gj extends((0, KB.e)(Lj)) {
      constructor(BB) {
        super(BB), this.PBR = !0, this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.ALBEDO = !1, this.GAMMAALBEDO = !1, this.ALBEDODIRECTUV = 0, this.VERTEXCOLOR = !1, this.BASE_WEIGHT = !1, this.BASE_WEIGHTDIRECTUV = 0, this.BASE_DIFFUSE_ROUGHNESS = !1, this.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.AMBIENTINGRAYSCALE = !1, this.OPACITY = !1, this.VERTEXALPHA = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHAFROMALBEDO = !1, this.ALPHATESTVALUE = "0.5", this.SPECULAROVERALPHA = !1, this.RADIANCEOVERALPHA = !1, this.ALPHAFRESNEL = !1, this.LINEARALPHAFRESNEL = !1, this.PREMULTIPLYALPHA = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.GAMMAEMISSIVE = !1, this.REFLECTIVITY = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.MICROSURFACEFROMREFLECTIVITYMAP = !1, this.MICROSURFACEAUTOMATIC = !1, this.LODBASEDMICROSFURACE = !1, this.MICROSURFACEMAP = !1, this.MICROSURFACEMAPDIRECTUV = 0, this.METALLICWORKFLOW = !1, this.ROUGHNESSSTOREINMETALMAPALPHA = !1, this.ROUGHNESSSTOREINMETALMAPGREEN = !1, this.METALLNESSSTOREINMETALMAPBLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.METALLIC_REFLECTANCE = !1, this.METALLIC_REFLECTANCE_GAMMA = !1, this.METALLIC_REFLECTANCEDIRECTUV = 0, this.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = !1, this.REFLECTANCE = !1, this.REFLECTANCE_GAMMA = !1, this.REFLECTANCEDIRECTUV = 0, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.NORMAL = !1, this.TANGENT = !1, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.USELIGHTMAPASSHADOWMAP = !1, this.GAMMALIGHTMAP = !1, this.RGBDLIGHTMAP = !1, this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1, this.LINEARSPECULARREFLECTION = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.PBR = !0, this.NORMALXYSCALE = !0
      }
    }
    class tj extends((0, yj.d)(cB.e)) {}
    let Sj = (() => {
      var BB, jB;
      let QB, nB = tj,
        IB = [],
        NB = [];
      return BB = class extends nB {
        get realTimeFiltering() {
          return this._realTimeFiltering
        }
        set realTimeFiltering(BB) {
          this._realTimeFiltering = BB, this.DjB(1)
        }
        get realTimeFilteringQuality() {
          return this._realTimeFilteringQuality
        }
        set realTimeFilteringQuality(BB) {
          this._realTimeFilteringQuality = BB, this.DjB(1)
        }
        get canRenderToMRT() {
          return !0
        }
        get debugMode() {
          return (0, iB.b)(this, jB, "f")
        }
        set debugMode(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        constructor(zB, QB) {
          super(zB, QB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._directIntensity = 1, this._emissiveIntensity = 1, this._environmentIntensity = 1, this._specularIntensity = 1, this._lightingInfos = new AB.n(this._directIntensity, this._emissiveIntensity, this._environmentIntensity, this._specularIntensity), this._disableBumpMap = !1, this._albedoTexture = null, this._baseWeightTexture = null, this._baseDiffuseRoughnessTexture = null, this._ambientTexture = null, this._ambientTextureStrength = 1, this._ambientTextureImpactOnAnalyticalLights = BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, this._opacityTexture = null, this._reflectionTexture = null, this._emissiveTexture = null, this._reflectivityTexture = null, this._metallicTexture = null, this._metallic = null, this._roughness = null, this._metallicF0Factor = 1, this._metallicReflectanceColor = xB.d.White(), this._useOnlyMetallicFromMetallicReflectanceTexture = !1, this._metallicReflectanceTexture = null, this._reflectanceTexture = null, this._microSurfaceTexture = null, this._bumpTexture = null, this._lightmapTexture = null, this._ambientColor = new xB.d(0, 0, 0), this._albedoColor = new xB.d(1, 1, 1), this._baseWeight = 1, this._baseDiffuseRoughness = null, this._reflectivityColor = new xB.d(1, 1, 1), this._reflectionColor = new xB.d(1, 1, 1), this._emissiveColor = new xB.d(0, 0, 0), this._microSurface = .9, this._useLightmapAsShadowmap = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromAlbedoTexture = !1, this._useSpecularOverAlpha = !0, this._useMicroSurfaceFromReflectivityMapAlpha = !1, this._useRoughnessFromMetallicTextureAlpha = !0, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallnessFromMetallicTextureBlue = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useAmbientInGrayScale = !1, this._useAutoMicroSurfaceFromReflectivityMap = !1, this._lightFalloff = BB.LIGHTFALLOFF_PHYSICAL, this._useRadianceOverAlpha = !0, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new oB.i(16), this._globalAmbientColor = new xB.d(0, 0, 0), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, jB.set(this, (0, iB.g)(this, IB, 0)), this.debugLimit = ((0, iB.g)(this, NB), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this.brdf = new lB(this), this.clearCoat = new Bj(this), this.iridescence = new zj(this), this.anisotropy = new nj(this), this.sheen = new Ij(this), this.subSurface = new uj(this), this.detailMap = new Uj.e(this), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), bB.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = VB(this.aY()), this.prePassConfiguration = new wB.e
        }
        get hasRenderTargetTextures() {
          return !!(bB.d.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures
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
        isReadyForSubMesh(BB, jB, zB) {
          this._uniformBufferLayoutBuilt || this.buildUniformLayout();
          const QB = jB._drawWrapper;
          if (QB.effect && this.isFrozen && QB._wasPreviouslyReady && QB._wasPreviouslyUsingInstances === zB) return !0;
          jB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), jB.materialDefines = new gj(this._eventInfo.defineNames));
          const nB = jB.materialDefines;
          if (this._isReadyForSubMesh(jB)) return !0;
          const dB = this.aY(),
            IB = dB.wJ();
          if (nB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, dB.texturesEnabled)) {
            if (this._albedoTexture && bB.d.DiffuseTextureEnabled && !this._albedoTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseWeightTexture && bB.d.BaseWeightTextureEnabled && !this._baseWeightTexture.isReadyOrNotBlocking()) return !1;
            if (this._baseDiffuseRoughnessTexture && bB.d.BaseDiffuseRoughnessTextureEnabled && !this._baseDiffuseRoughnessTexture.isReadyOrNotBlocking()) return !1;
            if (this._ambientTexture && bB.d.AmbientTextureEnabled && !this._ambientTexture.isReadyOrNotBlocking()) return !1;
            if (this._opacityTexture && bB.d.OpacityTextureEnabled && !this._opacityTexture.isReadyOrNotBlocking()) return !1;
            const BB = this._getReflectionTexture();
            if (BB && bB.d.ReflectionTextureEnabled) {
              if (!BB.isReadyOrNotBlocking()) return !1;
              if (BB.irradianceTexture) {
                if (!BB.irradianceTexture.isReadyOrNotBlocking()) return !1
              } else if (!BB.sphericalPolynomial && BB.getInternalTexture()?._sphericalPolynomialPromise) return !1
            }
            if (this._lightmapTexture && bB.d.LightmapTextureEnabled && !this._lightmapTexture.isReadyOrNotBlocking()) return !1;
            if (this._emissiveTexture && bB.d.EmissiveTextureEnabled && !this._emissiveTexture.isReadyOrNotBlocking()) return !1;
            if (bB.d.SpecularTextureEnabled) {
              if (this._metallicTexture) {
                if (!this._metallicTexture.isReadyOrNotBlocking()) return !1
              } else if (this._reflectivityTexture && !this._reflectivityTexture.isReadyOrNotBlocking()) return !1;
              if (this._metallicReflectanceTexture && !this._metallicReflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._reflectanceTexture && !this._reflectanceTexture.isReadyOrNotBlocking()) return !1;
              if (this._microSurfaceTexture && !this._microSurfaceTexture.isReadyOrNotBlocking()) return !1
            }
            if (IB.getCaps().standardDerivatives && this._bumpTexture && bB.d.BumpTextureEnabled && !this._disableBumpMap && !this._bumpTexture.isReady()) return !1;
            if (this._environmentBRDFTexture && bB.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1
          }
          if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = nB, this._eventInfo.subMesh = jB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
          if (nB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
          if (nB.AREALIGHTUSED || nB.CLUSTLIGHT_BATCH)
            for (let pB = 0; pB < BB.lightSources.length; pB++)
              if (!BB.lightSources[pB]._isReady()) return !1;
          if (IB.getCaps().standardDerivatives || BB.isVerticesDataPresent(TB.l.NormalKind) || (BB.createNormals(!0), fB.c.Warn("PBRMaterial: Normals have been created for the mesh: " + BB.name)), !(0, RB.c)(dB, BB, this._maxSimultaneousLights, this._disableLighting)) return !1;
          const NB = jB.effect,
            uB = nB._areLightsDisposed,
            UB = this._prepareEffect(BB, jB.getRenderingMesh(), nB, this.onCompiled, this.onError, zB, null);
          let aB = !1;
          if (UB)
            if (this._onEffectCreatedObservable && (Gj.effect = UB, Gj.subMesh = jB, this._onEffectCreatedObservable.notifyObservers(Gj)), this.allowShaderHotSwapping && NB && !UB.isReady()) {
              if (nB.markAsUnprocessed(), aB = this.isFrozen, uB) return nB._areLightsDisposed = !0, !1
            } else dB.resetCachedMaterial(), jB.setEffect(UB, nB, this._materialContext);
          return !(!jB.effect || !jB.effect.isReady()) && (nB._renderId = dB.getRenderId(), QB._wasPreviouslyReady = !aB, QB._wasPreviouslyUsingInstances = !!zB, this._checkScenePerformancePriority(), !0)
        }
        isMetallicWorkflow() {
          return !(null == this._metallic && null == this._roughness && !this._metallicTexture)
        }
        _prepareEffect(jB, zB, QB) {
          let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
            NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
          if (this._prepareDefines(jB, zB, QB, IB, NB), !QB.isDirty) return null;
          QB.markAsProcessed();
          const uB = this.aY().wJ(),
            UB = new vB.c;
          let aB = 0;
          QB.USESPHERICALINVERTEX && UB.addFallback(aB++, "USESPHERICALINVERTEX"), QB.FOG && UB.addFallback(aB, "FOG"), QB.SPECULARAA && UB.addFallback(aB, "SPECULARAA"), QB.POINTSIZE && UB.addFallback(aB, "POINTSIZE"), QB.LOGARITHMICDEPTH && UB.addFallback(aB, "LOGARITHMICDEPTH"), QB.PARALLAX && UB.addFallback(aB, "PARALLAX"), QB.PARALLAX_RHS && UB.addFallback(aB, "PARALLAX_RHS"), QB.PARALLAXOCCLUSION && UB.addFallback(aB++, "PARALLAXOCCLUSION"), QB.ENVIRONMENTBRDF && UB.addFallback(aB++, "ENVIRONMENTBRDF"), QB.TANGENT && UB.addFallback(aB++, "TANGENT"), QB.BUMP && UB.addFallback(aB++, "BUMP"), aB = (0, RB.E)(QB, UB, this._maxSimultaneousLights, aB), QB.SPECULARTERM && UB.addFallback(aB++, "SPECULARTERM"), QB.USESPHERICALFROMREFLECTIONMAP && UB.addFallback(aB++, "USESPHERICALFROMREFLECTIONMAP"), QB.USEIRRADIANCEMAP && UB.addFallback(aB++, "USEIRRADIANCEMAP"), QB.LIGHTMAP && UB.addFallback(aB++, "LIGHTMAP"), QB.NORMAL && UB.addFallback(aB++, "NORMAL"), QB.AMBIENT && UB.addFallback(aB++, "AMBIENT"), QB.EMISSIVE && UB.addFallback(aB++, "EMISSIVE"), QB.VERTEXCOLOR && UB.addFallback(aB++, "VERTEXCOLOR"), QB.MORPHTARGETS && UB.addFallback(aB++, "MORPHTARGETS"), QB.MULTIVIEW && UB.addFallback(0, "MULTIVIEW");
          const pB = [TB.l.PositionKind];
          QB.NORMAL && pB.push(TB.l.NormalKind), QB.TANGENT && pB.push(TB.l.TangentKind);
          for (let BB = 1; BB <= 6; ++BB) QB["UV" + BB] && pB.push(`uv${1===BB?"":BB}`);
          QB.VERTEXCOLOR && pB.push(TB.l.ColorKind), (0, RB.J)(pB, jB, QB, UB), (0, RB.K)(pB, QB), (0, RB.N)(pB, jB, QB), (0, RB.H)(pB, jB, QB);
          let rB = "pbr";
          const sB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vAlbedoColor", "baseWeight", "baseDiffuseRoughness", "vReflectivityColor", "vMetallicReflectanceFactors", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vAlbedoInfos", "vBaseWeightInfos", "vBaseDiffuseRoughnessInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vReflectivityInfos", "vMetallicReflectanceInfos", "vReflectanceInfos", "vMicroSurfaceSamplerInfos", "vBumpInfos", "vLightmapInfos", "mBones", "albedoMatrix", "baseWeightMatrix", "baseDiffuseRoughnessMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "reflectivityMatrix", "normalMatrix", "microSurfaceSamplerMatrix", "bumpMatrix", "lightmapMatrix", "metallicReflectanceMatrix", "reflectanceMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
            JB = ["albedoSampler", "baseWeightSampler", "baseDiffuseRoughnessSampler", "reflectivitySampler", "ambientSampler", "emissiveSampler", "bumpSampler", "lightmapSampler", "opacitySampler", "microSurfaceSampler", "environmentBrdfSampler", "boneSampler", "metallicReflectanceSampler", "reflectanceSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
          (0, RB.rb)(sB, JB, !0);
          const mB = ["Material", "Scene", "Mesh"],
            yB = {
              maxSimultaneousLights: this._maxSimultaneousLights,
              maxSimultaneousMorphTargets: QB.NUM_MORPH_INFLUENCERS
            };
          if (this._eventInfo.fallbacks = UB, this._eventInfo.fallbackRank = aB, this._eventInfo.defines = QB, this._eventInfo.uniforms = sB, this._eventInfo.attributes = pB, this._eventInfo.samplers = JB, this._eventInfo.uniformBuffersNames = mB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = jB, this._eventInfo.indexParameters = yB, this._callbackPluginEventGeneric(128, this._eventInfo), sj.c.AddUniformsAndSamplers(sB, JB), wB.e.AddUniforms(sB), wB.e.AddSamplers(JB), (0, aj.c)(sB), this._useVertexPulling) {
            const BB = zB?.geometry;
            BB && (this._vertexPullingMetadata = (0, pj.d)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, jB) => {
              sB.push(`vp_${jB}_info`)
            })))
          } else this._vertexPullingMetadata = null;
          CB.c && (CB.c.PrepareUniforms(sB, QB), CB.c.PrepareSamplers(JB, QB)), (0, RB.vb)({
            uniformsNames: sB,
            uniformBuffersNames: mB,
            samplers: JB,
            defines: QB,
            maxSimultaneousLights: this._maxSimultaneousLights,
            shaderLanguage: this._shaderLanguage
          });
          const kB = {};
          this.customShaderNameResolve && (rB = this.customShaderNameResolve(rB, sB, mB, JB, QB, pB, kB));
          const GB = QB.toString(),
            LB = uB.createEffect(rB, {
              attributes: pB,
              uniformsNames: sB,
              uniformBuffersNames: mB,
              samplers: JB,
              defines: GB,
              fallbacks: UB,
              onCompiled: nB,
              onError: dB,
              indexParameters: yB,
              processFinalCode: kB.processFinalCode,
              processCodeAfterIncludes: this._eventInfo.customCode,
              multiTarget: QB.PREPASS,
              shaderLanguage: this._shaderLanguage,
              extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
            }, uB);
          return this._eventInfo.customCode = void 0, LB
        }
        _prepareDefines(jB, zB, QB) {
          let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
          const IB = zB.hasThinInstances,
            NB = this.aY(),
            uB = NB.wJ();
          (0, RB.ab)(NB, jB, QB, !0, this._maxSimultaneousLights, this._disableLighting), QB._needNormals = !0, (0, RB.gb)(NB, QB);
          const UB = this.needAlphaBlendingForMesh(jB) && this.aY().useOrderIndependentTransparency;
          if ((0, RB.lb)(NB, QB, this.canRenderToMRT && !UB), (0, RB.hb)(NB, QB, UB), sj.c.PrepareDefines(uB.currentRenderPassId, jB, QB), QB.METALLICWORKFLOW = this.isMetallicWorkflow(), QB._areTexturesDirty) {
            QB._needUVs = !1;
            for (let BB = 1; BB <= 6; ++BB) QB["MAINUV" + BB] = !1;
            if (NB.texturesEnabled) {
              QB.ALBEDODIRECTUV = 0, QB.BASE_WEIGHTDIRECTUV = 0, QB.BASE_DIFFUSE_ROUGHNESSDIRECTUV = 0, QB.AMBIENTDIRECTUV = 0, QB.OPACITYDIRECTUV = 0, QB.EMISSIVEDIRECTUV = 0, QB.REFLECTIVITYDIRECTUV = 0, QB.MICROSURFACEMAPDIRECTUV = 0, QB.METALLIC_REFLECTANCEDIRECTUV = 0, QB.REFLECTANCEDIRECTUV = 0, QB.BUMPDIRECTUV = 0, QB.LIGHTMAPDIRECTUV = 0, uB.getCaps().textureLOD && (QB.LODBASEDMICROSFURACE = !0), this._albedoTexture && bB.d.DiffuseTextureEnabled ? ((0, RB.cb)(this._albedoTexture, QB, "ALBEDO"), QB.GAMMAALBEDO = this._albedoTexture.gammaSpace) : QB.ALBEDO = !1, this._baseWeightTexture && bB.d.BaseWeightTextureEnabled ? (0, RB.cb)(this._baseWeightTexture, QB, "BASE_WEIGHT") : QB.BASE_WEIGHT = !1, this._baseDiffuseRoughnessTexture && bB.d.BaseDiffuseRoughnessTextureEnabled ? (0, RB.cb)(this._baseDiffuseRoughnessTexture, QB, "BASE_DIFFUSE_ROUGHNESS") : QB.BASE_DIFFUSE_ROUGHNESS = !1, this._ambientTexture && bB.d.AmbientTextureEnabled ? ((0, RB.cb)(this._ambientTexture, QB, "AMBIENT"), QB.AMBIENTINGRAYSCALE = this._useAmbientInGrayScale) : QB.AMBIENT = !1, this._opacityTexture && bB.d.OpacityTextureEnabled ? ((0, RB.cb)(this._opacityTexture, QB, "OPACITY"), QB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB) : QB.OPACITY = !1;
              const BB = this._getReflectionTexture(),
                jB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || uB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
              (0, RB.Y)(NB, BB, QB, this.realTimeFiltering, this.realTimeFilteringQuality, !jB), this._lightmapTexture && bB.d.LightmapTextureEnabled ? ((0, RB.cb)(this._lightmapTexture, QB, "LIGHTMAP"), QB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, QB.GAMMALIGHTMAP = this._lightmapTexture.gammaSpace, QB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD) : QB.LIGHTMAP = !1, this._emissiveTexture && bB.d.EmissiveTextureEnabled ? ((0, RB.cb)(this._emissiveTexture, QB, "EMISSIVE"), QB.GAMMAEMISSIVE = this._emissiveTexture.gammaSpace) : QB.EMISSIVE = !1, bB.d.SpecularTextureEnabled ? (this._metallicTexture ? ((0, RB.cb)(this._metallicTexture, QB, "REFLECTIVITY"), QB.ROUGHNESSSTOREINMETALMAPALPHA = this._useRoughnessFromMetallicTextureAlpha, QB.ROUGHNESSSTOREINMETALMAPGREEN = !this._useRoughnessFromMetallicTextureAlpha && this._useRoughnessFromMetallicTextureGreen, QB.METALLNESSSTOREINMETALMAPBLUE = this._useMetallnessFromMetallicTextureBlue, QB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed, QB.REFLECTIVITY_GAMMA = !1) : this._reflectivityTexture ? ((0, RB.cb)(this._reflectivityTexture, QB, "REFLECTIVITY"), QB.MICROSURFACEFROMREFLECTIVITYMAP = this._useMicroSurfaceFromReflectivityMapAlpha, QB.MICROSURFACEAUTOMATIC = this._useAutoMicroSurfaceFromReflectivityMap, QB.REFLECTIVITY_GAMMA = this._reflectivityTexture.gammaSpace) : QB.REFLECTIVITY = !1, this._metallicReflectanceTexture || this._reflectanceTexture ? (QB.METALLIC_REFLECTANCE_USE_ALPHA_ONLY = this._useOnlyMetallicFromMetallicReflectanceTexture, this._metallicReflectanceTexture ? ((0, RB.cb)(this._metallicReflectanceTexture, QB, "METALLIC_REFLECTANCE"), QB.METALLIC_REFLECTANCE_GAMMA = this._metallicReflectanceTexture.gammaSpace) : QB.METALLIC_REFLECTANCE = !1, this._reflectanceTexture && (!this._metallicReflectanceTexture || this._metallicReflectanceTexture && this._useOnlyMetallicFromMetallicReflectanceTexture) ? ((0, RB.cb)(this._reflectanceTexture, QB, "REFLECTANCE"), QB.REFLECTANCE_GAMMA = this._reflectanceTexture.gammaSpace) : QB.REFLECTANCE = !1) : (QB.METALLIC_REFLECTANCE = !1, QB.REFLECTANCE = !1), this._microSurfaceTexture ? (0, RB.cb)(this._microSurfaceTexture, QB, "MICROSURFACEMAP") : QB.MICROSURFACEMAP = !1) : (QB.REFLECTIVITY = !1, QB.MICROSURFACEMAP = !1), uB.getCaps().standardDerivatives && this._bumpTexture && bB.d.BumpTextureEnabled && !this._disableBumpMap ? ((0, RB.cb)(this._bumpTexture, QB, "BUMP"), this._useParallax && this._albedoTexture && bB.d.DiffuseTextureEnabled ? (QB.PARALLAX = !0, QB.PARALLAX_RHS = NB.useRightHandedSystem, QB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : QB.PARALLAX = !1, QB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (QB.BUMP = !1, QB.PARALLAX = !1, QB.PARALLAX_RHS = !1, QB.PARALLAXOCCLUSION = !1, QB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && bB.d.ReflectionTextureEnabled ? (QB.ENVIRONMENTBRDF = !0, QB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (QB.ENVIRONMENTBRDF = !1, QB.ENVIRONMENTBRDF_RGBD = !1), this._shouldUseAlphaFromAlbedoTexture() ? QB.ALPHAFROMALBEDO = !0 : QB.ALPHAFROMALBEDO = !1
            }
            QB.SPECULAROVERALPHA = this._useSpecularOverAlpha, this._lightFalloff === BB.LIGHTFALLOFF_STANDARD ? (QB.USEPHYSICALLIGHTFALLOFF = !1, QB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === BB.LIGHTFALLOFF_GLTF ? (QB.USEPHYSICALLIGHTFALLOFF = !1, QB.USEGLTFLIGHTFALLOFF = !0) : (QB.USEPHYSICALLIGHTFALLOFF = !0, QB.USEGLTFLIGHTFALLOFF = !1), QB.RADIANCEOVERALPHA = this._useRadianceOverAlpha, !this.backFaceCulling && this._twoSidedLighting ? QB.TWOSIDEDLIGHTING = !0 : QB.TWOSIDEDLIGHTING = !1, QB.MIRRORED = !!NB._mirroredCameraPosition, QB.SPECULARAA = uB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
          }(QB._areTexturesDirty || QB._areMiscDirty) && (QB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, QB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, QB.ALPHABLEND = this.needAlphaBlendingForMesh(jB), QB.ALPHAFRESNEL = this._useAlphaFresnel || this._useLinearAlphaFresnel, QB.LINEARALPHAFRESNEL = this._useLinearAlphaFresnel), QB._areTexturesDirty && (QB.TEXTURE_REPETITION_MODE = uB.version > 1 || uB.isWebGPU ? this.textureRepetitionMode : 0), QB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(QB), QB.FORCENORMALFORWARD = this._forceNormalForward, QB.RADIANCEOCCLUSION = this._useRadianceOcclusion, QB.HORIZONOCCLUSION = this._useHorizonOcclusion, QB._areMiscDirty && ((0, RB.db)(jB, NB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(jB), QB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zB, this._isVertexOutputInvariant), QB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !jB.isVerticesDataPresent(TB.l.NormalKind), QB.DEBUGMODE = this._debugMode), (0, RB.U)(NB, uB, this, QB, !!nB, dB, IB), this._eventInfo.defines = QB, this._eventInfo.mesh = jB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, RB.S)(jB, QB, !0, !0, !0, this._transparencyMode !== BB.PBRMATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
        }
        forceCompilation(BB, jB, zB) {
          const QB = {
            clipPlane: !1,
            useInstances: !1,
            ...zB
          };
          this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
          (() => {
            if (this._breakShaderLoadedCheck) return;
            const zB = new gj(this._eventInfo.defineNames),
              nB = this._prepareEffect(BB, BB, zB, void 0, void 0, QB.useInstances, QB.clipPlane);
            this._onEffectCreatedObservable && (Gj.effect = nB, Gj.subMesh = null, this._onEffectCreatedObservable.notifyObservers(Gj)), nB.isReady() ? jB && jB(this) : nB.onCompileObservable.add((() => {
              jB && jB(this)
            }))
          })()
        }
        buildUniformLayout() {
          const BB = this._uniformBuffer;
          BB.addUniform("vAlbedoInfos", 2), BB.addUniform("vBaseWeightInfos", 2), BB.addUniform("vBaseDiffuseRoughnessInfos", 2), BB.addUniform("vAmbientInfos", 4), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vReflectivityInfos", 3), BB.addUniform("vMicroSurfaceSamplerInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("albedoMatrix", 16), BB.addUniform("baseWeightMatrix", 16), BB.addUniform("baseDiffuseRoughnessMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("reflectivityMatrix", 16), BB.addUniform("microSurfaceSamplerMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vAlbedoColor", 4), BB.addUniform("baseWeight", 1), BB.addUniform("baseDiffuseRoughness", 1), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vReflectivityColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vAmbientColor", 3), BB.addUniform("vDebugMode", 2), BB.addUniform("vMetallicReflectanceFactors", 4), BB.addUniform("vMetallicReflectanceInfos", 2), BB.addUniform("metallicReflectanceMatrix", 16), BB.addUniform("vReflectanceInfos", 2), BB.addUniform("reflectanceMatrix", 16), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, RB.nb)(BB, !0, !0, !0, !0, !0), super.buildUniformLayout()
        }
        bindForSubMesh(BB, jB, zB) {
          const QB = this.aY(),
            nB = zB.materialDefines;
          if (!nB) return;
          const dB = zB.effect;
          if (!dB) return;
          this._activeEffect = dB, jB.getMeshUniformBuffer().bindToEffect(dB, "Mesh"), jB.transferToEffect(BB);
          const IB = QB.wJ();
          this._uniformBuffer.bindToEffect(dB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, QB, jB, BB, this.isFrozen), sj.c.Bind(IB.currentRenderPassId, this._activeEffect, jB, BB, this);
          const NB = QB.activeCamera;
          NB ? this._uniformBuffer.updateFloat4("cameraInfo", NB.minZ, NB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
          const uB = this.textureRepetitionHexTilingParams;
          this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", uB[0], uB[1], uB[2], uB[3]), this._eventInfo.subMesh = zB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), nB.OBJECTSPACE_NORMALMAP && (BB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
          const UB = this._mustRebind(QB, dB, zB, jB.visibility),
            aB = IB._features.needToAlwaysBindUniformBuffers;
          (0, RB.f)(jB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, pj.c)(this._activeEffect, this._vertexPullingMetadata);
          let pB = null;
          const rB = this._uniformBuffer;
          if (UB) {
            if (this.bindViewProjection(dB), pB = this._getReflectionTexture(), !rB.useUbo || !this.isFrozen || !rB.isSync || zB._drawWrapper._forceRebindOnNextCall) {
              if (QB.texturesEnabled && (this._albedoTexture && bB.d.DiffuseTextureEnabled && (rB.updateFloat2("vAlbedoInfos", this._albedoTexture.coordinatesIndex, this._albedoTexture.level), (0, RB.A)(this._albedoTexture, rB, "albedo")), this._baseWeightTexture && bB.d.BaseWeightTextureEnabled && (rB.updateFloat2("vBaseWeightInfos", this._baseWeightTexture.coordinatesIndex, this._baseWeightTexture.level), (0, RB.A)(this._baseWeightTexture, rB, "baseWeight")), this._baseDiffuseRoughnessTexture && bB.d.BaseDiffuseRoughnessTextureEnabled && (rB.updateFloat2("vBaseDiffuseRoughnessInfos", this._baseDiffuseRoughnessTexture.coordinatesIndex, this._baseDiffuseRoughnessTexture.level), (0, RB.A)(this._baseDiffuseRoughnessTexture, rB, "baseDiffuseRoughness")), this._ambientTexture && bB.d.AmbientTextureEnabled && (rB.updateFloat4("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level, this._ambientTextureStrength, this._ambientTextureImpactOnAnalyticalLights), (0, RB.A)(this._ambientTexture, rB, "ambient")), this._opacityTexture && bB.d.OpacityTextureEnabled && (rB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, RB.A)(this._opacityTexture, rB, "opacity")), this._emissiveTexture && bB.d.EmissiveTextureEnabled && (rB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, RB.A)(this._emissiveTexture, rB, "emissive")), this._lightmapTexture && bB.d.LightmapTextureEnabled && (rB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, RB.A)(this._lightmapTexture, rB, "lightmap")), bB.d.SpecularTextureEnabled && (this._metallicTexture ? (rB.updateFloat3("vReflectivityInfos", this._metallicTexture.coordinatesIndex, this._metallicTexture.level, this._ambientTextureStrength), (0, RB.A)(this._metallicTexture, rB, "reflectivity")) : this._reflectivityTexture && (rB.updateFloat3("vReflectivityInfos", this._reflectivityTexture.coordinatesIndex, this._reflectivityTexture.level, 1), (0, RB.A)(this._reflectivityTexture, rB, "reflectivity")), this._metallicReflectanceTexture && (rB.updateFloat2("vMetallicReflectanceInfos", this._metallicReflectanceTexture.coordinatesIndex, this._metallicReflectanceTexture.level), (0, RB.A)(this._metallicReflectanceTexture, rB, "metallicReflectance")), this._reflectanceTexture && nB.REFLECTANCE && (rB.updateFloat2("vReflectanceInfos", this._reflectanceTexture.coordinatesIndex, this._reflectanceTexture.level), (0, RB.A)(this._reflectanceTexture, rB, "reflectance")), this._microSurfaceTexture && (rB.updateFloat2("vMicroSurfaceSamplerInfos", this._microSurfaceTexture.coordinatesIndex, this._microSurfaceTexture.level), (0, RB.A)(this._microSurfaceTexture, rB, "microSurfaceSampler"))), this._bumpTexture && IB.getCaps().standardDerivatives && bB.d.BumpTextureEnabled && !this._disableBumpMap && (rB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, this._bumpTexture.level, this._parallaxScaleBias), (0, RB.A)(this._bumpTexture, rB, "bump"), QB._mirroredCameraPosition ? rB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : rB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, RB.n)(QB, nB, rB, this._reflectionColor, pB, this.realTimeFiltering, !0, !0, !0, !0, !0)), this.pointsCloud && rB.updateFloat("pointSize", this.pointSize), nB.METALLICWORKFLOW) {
                xB.o.Color4[0].r = void 0 === this._metallic || null === this._metallic ? 1 : this._metallic, xB.o.Color4[0].g = void 0 === this._roughness || null === this._roughness ? 1 : this._roughness;
                const BB = this.subSurface?._indexOfRefraction ?? 1.5,
                  jB = 1;
                xB.o.Color4[0].b = BB;
                const zB = Math.pow((BB - jB) / (BB + jB), 2);
                xB.o.Color4[0].a = zB, rB.updateDirectColor4("vReflectivityColor", xB.o.Color4[0]), rB.updateColor4("vMetallicReflectanceFactors", this._metallicReflectanceColor, this._metallicF0Factor)
              } else rB.updateColor4("vReflectivityColor", this._reflectivityColor, this._microSurface);
              rB.updateColor3("vEmissiveColor", bB.d.EmissiveTextureEnabled ? this._emissiveColor : xB.d.BlackReadOnly), !nB.SS_REFRACTION && this.subSurface?._linkRefractionWithTransparency ? rB.updateColor4("vAlbedoColor", this._albedoColor, 1) : rB.updateColor4("vAlbedoColor", this._albedoColor, this.alpha), rB.updateFloat("baseWeight", this._baseWeight), rB.updateFloat("baseDiffuseRoughness", this._baseDiffuseRoughness || 0), this._lightingInfos.x = this._directIntensity, this._lightingInfos.y = this._emissiveIntensity, this._lightingInfos.z = this._environmentIntensity * QB.environmentIntensity, this._lightingInfos.w = this._specularIntensity, rB.updateVector4("vLightingIntensity", this._lightingInfos), QB.ambientColor.multiplyToRef(this._ambientColor, this._globalAmbientColor), rB.updateColor3("vAmbientColor", this._globalAmbientColor), rB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
            }
            QB.texturesEnabled && (this._albedoTexture && bB.d.DiffuseTextureEnabled && rB.setTexture("albedoSampler", this._albedoTexture), this._baseWeightTexture && bB.d.BaseWeightTextureEnabled && rB.setTexture("baseWeightSampler", this._baseWeightTexture), this._baseDiffuseRoughnessTexture && bB.d.BaseDiffuseRoughnessTextureEnabled && rB.setTexture("baseDiffuseRoughnessSampler", this._baseDiffuseRoughnessTexture), this._ambientTexture && bB.d.AmbientTextureEnabled && rB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && bB.d.OpacityTextureEnabled && rB.setTexture("opacitySampler", this._opacityTexture), (0, RB.q)(QB, nB, rB, pB, this.realTimeFiltering), nB.ENVIRONMENTBRDF && rB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), this._emissiveTexture && bB.d.EmissiveTextureEnabled && rB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && bB.d.LightmapTextureEnabled && rB.setTexture("lightmapSampler", this._lightmapTexture), bB.d.SpecularTextureEnabled && (this._metallicTexture ? rB.setTexture("reflectivitySampler", this._metallicTexture) : this._reflectivityTexture && rB.setTexture("reflectivitySampler", this._reflectivityTexture), this._metallicReflectanceTexture && rB.setTexture("metallicReflectanceSampler", this._metallicReflectanceTexture), this._reflectanceTexture && nB.REFLECTANCE && rB.setTexture("reflectanceSampler", this._reflectanceTexture), this._microSurfaceTexture && rB.setTexture("microSurfaceSampler", this._microSurfaceTexture)), this._bumpTexture && IB.getCaps().standardDerivatives && bB.d.BumpTextureEnabled && !this._disableBumpMap && rB.setTexture("bumpSampler", this._bumpTexture)), this.aY().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(jB) && this.aY().depthPeelingRenderer.bind(dB), this._eventInfo.subMesh = zB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, aj.g)(this._activeEffect, this, QB), this.bindEyePosition(dB)
          } else aB && (this._needToBindSceneUbo = !0);
          !UB && this.isFrozen && !aB || !QB.lightsEnabled || this._disableLighting || (0, RB.t)(QB, jB, this._activeEffect, nB, this._maxSimultaneousLights), !UB && this.isFrozen || ((QB.fogEnabled && jB.applyFog && QB.fogMode !== ZB.g.FOGMODE_NONE || pB || this.subSurface.refractionTexture || jB.receiveShadows || nB.PREPASS || nB.CLUSTLIGHT_BATCH) && this.bindView(dB), (0, RB.j)(QB, jB, this._activeEffect, !0), nB.NUM_MORPH_INFLUENCERS && (0, RB.y)(jB, this._activeEffect), nB.BAKED_VERTEX_ANIMATION_TEXTURE && jB.bakedVertexAnimationManager?.bind(dB, nB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, RB.x)(nB, this._activeEffect, QB)), this._afterBind(jB, this._activeEffect, zB), rB.update()
        }
        getAnimatables() {
          const BB = super.getAnimatables();
          return this._albedoTexture && this._albedoTexture.animations && this._albedoTexture.animations.length > 0 && BB.push(this._albedoTexture), this._baseWeightTexture && this._baseWeightTexture.animations && this._baseWeightTexture.animations.length > 0 && BB.push(this._baseWeightTexture), this._baseDiffuseRoughnessTexture && this._baseDiffuseRoughnessTexture.animations && this._baseDiffuseRoughnessTexture.animations.length > 0 && BB.push(this._baseDiffuseRoughnessTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._metallicTexture && this._metallicTexture.animations && this._metallicTexture.animations.length > 0 ? BB.push(this._metallicTexture) : this._reflectivityTexture && this._reflectivityTexture.animations && this._reflectivityTexture.animations.length > 0 && BB.push(this._reflectivityTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._metallicReflectanceTexture && this._metallicReflectanceTexture.animations && this._metallicReflectanceTexture.animations.length > 0 && BB.push(this._metallicReflectanceTexture), this._reflectanceTexture && this._reflectanceTexture.animations && this._reflectanceTexture.animations.length > 0 && BB.push(this._reflectanceTexture), this._microSurfaceTexture && this._microSurfaceTexture.animations && this._microSurfaceTexture.animations.length > 0 && BB.push(this._microSurfaceTexture), BB
        }
        _getReflectionTexture() {
          return this._reflectionTexture ? this._reflectionTexture : this.aY().environmentTexture
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
          const BB = this.aY().enableSubSurfaceForPrePass();
          return BB && (BB.enabled = !0), !0
        }
        dispose(BB, jB) {
          this._breakShaderLoadedCheck = !0, jB && (this._environmentBRDFTexture && this.aY().environmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._albedoTexture?.dispose(), this._baseWeightTexture?.dispose(), this._baseDiffuseRoughnessTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._metallicTexture?.dispose(), this._reflectivityTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._metallicReflectanceTexture?.dispose(), this._reflectanceTexture?.dispose(), this._microSurfaceTexture?.dispose()), this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, jB)
        }
      }, jB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(nB[Symbol.metadata] ?? null) : void 0;
        QB = [(0, qB.e)("_markAllSubMeshesAsMiscDirty")], (0, iB.e)(BB, null, QB, {
          kind: "accessor",
          name: "debugMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "debugMode" in BB,
            get: BB => BB.debugMode,
            set: (BB, jB) => {
              BB.debugMode = jB
            }
          },
          metadata: jB
        }, IB, NB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB.PBRMATERIAL_OPAQUE = dB.b.MATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = dB.b.MATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = dB.b.MATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = dB.b.MATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = 0, BB.LIGHTFALLOFF_PHYSICAL = 0, BB.LIGHTFALLOFF_GLTF = 1, BB.LIGHTFALLOFF_STANDARD = 2, BB.ForceGLSL = !1, BB._ShaderLoader = new rj.c((() => [Promise.all([zB.e(322), zB.e(333)]).then((() => zB(61682))), Promise.all([zB.e(327), zB.e(323), zB.e(384), zB.e(336), zB.e(383)]).then((() => zB(61712)))]), (() => [Promise.all([zB.e(341), zB.e(343), zB.e(350)]).then((() => zB(61798))), Promise.all([zB.e(341), zB.e(344), zB.e(387), zB.e(354), zB.e(386)]).then((() => zB(61825)))])), BB
    })();
    Object.getOwnPropertyDescriptor(Sj.prototype, "decalMap") || Object.defineProperty(Sj.prototype, "decalMap", (0, kj.f)("PBRBaseMaterial", "decalMap")), (0, zB(41916).b)();
    var Mj = zB(40086);
    var Ej = zB(40164),
      ij = zB(41904),
      qj = zB(39913),
      fj = zB(39922),
      oj = zB(40025);
    let Hj = !1;
    const Dj = new xB.g,
      Fj = new xB.g;
    class Yj extends ij.c {
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
          for (let jB = 0; jB < this._textures.length; jB++) this._textures[jB].wrapU = BB
      }
      set wrapV(BB) {
        if (this._textures)
          for (let jB = 0; jB < this._textures.length; jB++) this._textures[jB].wrapV = BB
      }
      constructor(BB, jB, zB, QB, nB, dB) {
        const IB = !(!nB || !nB.generateMipMaps) && nB.generateMipMaps,
          NB = !(!nB || !nB.generateDepthTexture) && nB.generateDepthTexture,
          uB = nB && nB.depthTextureFormat ? nB.depthTextureFormat : 15,
          UB = !nB || void 0 === nB.doNotChangeAspectRatio || nB.doNotChangeAspectRatio,
          aB = !(!nB || !nB.drawOnlyOnFirstAttachmentByDefault) && nB.drawOnlyOnFirstAttachmentByDefault;
        if (super(BB, jB, QB, IB, UB, void 0, void 0, void 0, void 0, void 0, void 0, void 0, !0), Hj || (Hj = !0, fj.ThinEngine.prototype.restoreSingleAttachment = function() {
            const BB = this._gl;
            this.bindAttachments([BB.BACK])
          }, fj.ThinEngine.prototype.restoreSingleAttachmentForRenderTarget = function() {
            const BB = this._gl;
            this.bindAttachments([BB.COLOR_ATTACHMENT0])
          }, fj.ThinEngine.prototype.buildTextureLayout = function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const zB = this._gl,
              QB = [];
            if (jB) QB.push(zB.BACK);
            else
              for (let nB = 0; nB < BB.length; nB++) BB[nB] ? QB.push(zB["COLOR_ATTACHMENT" + nB]) : QB.push(zB.NONE);
            return QB
          }, fj.ThinEngine.prototype.bindAttachments = function(BB) {
            const jB = this._gl,
              zB = this._currentRenderTarget?.textures;
            if (this._integerMRTAttachmentsMask = 0, zB)
              for (let QB = 0; QB < BB.length; QB++) BB[QB] !== jB.NONE && zB[QB] && (0, oj.i)(zB[QB].format) && (this._integerMRTAttachmentsMask |= 1 << QB);
            jB.drawBuffers(BB)
          }, fj.ThinEngine.prototype.clearAttachments = function(BB, jB, zB, QB) {
            let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            const IB = this._currentRenderTarget?.textures;
            let NB = !1;
            if (zB && BB && IB)
              for (let uB = 0; uB < jB.length; uB++) {
                const BB = IB[uB];
                if (jB[uB] !== this._gl.NONE && BB && (0, oj.i)(BB.format)) {
                  if (this._webGLVersion < 2) throw new Error("ThinEngine.clearAttachments: integer MRT attachments require WebGL2");
                  NB = !0;
                  break
                }
              }
            if (!NB || !BB || !IB) return this.bindAttachments(jB), void this.clear(BB, zB, QB, nB, dB);
            this.bindAttachments(jB), this._applyColorWriteState();
            for (let uB = 0; uB < jB.length; uB++) {
              const zB = IB[uB];
              if (jB[uB] !== this._gl.NONE && zB) {
                let jB = BB;
                if ((0, oj.i)(zB.format)) {
                  const QB = (0, oj.j)(zB.type);
                  jB = QB ? Dj : Fj;
                  const nB = QB ? 255 : 1;
                  jB.r = Math.round(BB.r * nB), jB.g = Math.round(BB.g * nB), jB.b = Math.round(BB.b * nB), jB.a = Math.round(BB.a * nB)
                }
                this._clearColorAttachment(uB, jB, zB.format, zB.type)
              }
            }
            if (QB || nB) {
              const BB = this._integerMRTAttachmentsMask;
              this._integerMRTAttachmentsMask = 0;
              try {
                this.clear(null, !1, QB, nB, dB)
              } finally {
                this._integerMRTAttachmentsMask = BB
              }
            }
          }, fj.ThinEngine.prototype.unBindMultiColorAttachmentFramebuffer = function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zB = arguments.length > 2 ? arguments[2] : void 0;
            this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, BB.disableAutomaticMSAAResolve || this.resolveMultiFramebuffer(BB), jB || this.generateMipMapsMultiFramebuffer(BB), zB && (BB._MSAAFramebuffer && this._bindUnboundFramebuffer(BB._framebuffer), zB()), this._bindUnboundFramebuffer(null)
          }, fj.ThinEngine.prototype.createMultipleRenderTarget = function(BB, jB) {
            let zB, QB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              nB = !1,
              dB = !0,
              IB = !1,
              NB = !1,
              uB = 1,
              UB = 1,
              aB = [],
              pB = [],
              rB = [],
              sB = [],
              JB = [],
              mB = [],
              yB = [],
              kB = [],
              GB = [],
              LB = !1;
            const gB = this._createHardwareRenderTargetWrapper(!0, !1, BB);
            void 0 !== jB && (nB = void 0 !== jB.generateMipMaps && jB.generateMipMaps, dB = void 0 === jB.generateDepthBuffer || jB.generateDepthBuffer, IB = void 0 !== jB.generateStencilBuffer && jB.generateStencilBuffer, NB = void 0 !== jB.generateDepthTexture && jB.generateDepthTexture, uB = jB.DIB ?? 1, UB = jB.samples ?? UB, aB = jB.types || aB, pB = jB.samplingModes || pB, rB = jB.useSRGBBuffers || rB, sB = jB.formats || sB, JB = jB.targetTypes || JB, mB = jB.faceIndex || mB, yB = jB.layerIndex || yB, kB = jB.layerCounts || kB, GB = jB.labels || GB, LB = jB.dontCreateTextures ?? !1, this.gm > 1 && (13 === jB.depthTextureFormat || 17 === jB.depthTextureFormat || 16 === jB.depthTextureFormat || 14 === jB.depthTextureFormat || 18 === jB.depthTextureFormat) && (zB = jB.depthTextureFormat)), void 0 === zB && (zB = IB ? 13 : 14);
            const tB = this._gl,
              SB = this._currentFramebuffer,
              MB = tB.createFramebuffer();
            this._bindUnboundFramebuffer(MB);
            const EB = BB.width ?? BB,
              iB = BB.height ?? BB,
              qB = [],
              oB = [],
              HB = this.gm > 1 && (13 === zB || 17 === zB || 18 === zB);
            gB.label = jB?.label ?? "MultiRenderTargetWrapper", gB._framebuffer = MB, gB._generateDepthBuffer = NB || dB, gB._generateStencilBuffer = NB ? HB : IB, gB._depthStencilBuffer = this._setupFramebufferDepthAttachments(gB._generateStencilBuffer, gB._generateDepthBuffer, EB, iB, 1, zB), gB._attachments = oB;
            for (let DB = 0; DB < uB; DB++) {
              let BB = pB[DB] || 3,
                jB = aB[DB] || 0,
                zB = rB[DB] || !1;
              const QB = sB[DB] || 5,
                dB = JB[DB] || 3553,
                IB = kB[DB] ?? 1;
              (1 !== jB || this._caps.textureFloatLinearFiltering) && (2 !== jB || this._caps.textureHalfFloatLinearFiltering) || (BB = 1);
              const NB = this._getSamplingParameters(BB, nB);
              1 !== jB || this._caps.textureFloat || (jB = 0, fB.c.Warn("Float textures are not supported. Render target forced to TEXTURETYPE_UNSIGNED_BYTE type")), zB = zB && this._caps.supportSRGBBuffers && (this.gm > 1 || this.isWebGPU);
              const uB = this.gm > 1,
                UB = tB[uB ? "COLOR_ATTACHMENT" + DB : "COLOR_ATTACHMENT" + DB + "_WEBGL"];
              if (oB.push(UB), -1 === dB || LB) continue;
              const mB = new qj.d(this, 6);
              qB[DB] = mB, tB.activeTexture(tB["TEXTURE" + DB]), tB.bindTexture(dB, mB._hardwareTexture.underlyingResource), tB.texParameteri(dB, tB.TEXTURE_MAG_FILTER, NB.mag), tB.texParameteri(dB, tB.TEXTURE_MIN_FILTER, NB.min), tB.texParameteri(dB, tB.TEXTURE_WRAP_S, tB.CLAMP_TO_EDGE), tB.texParameteri(dB, tB.TEXTURE_WRAP_T, tB.CLAMP_TO_EDGE);
              const yB = this._getRGBABufferInternalSizedFormat(jB, QB, zB),
                SB = this._getInternalFormat(QB),
                MB = this._getWebGLTextureType(jB);
              if (!uB || 35866 !== dB && 32879 !== dB)
                if (34067 === dB) {
                  for (let BB = 0; BB < 6; BB++) tB.texImage2D(tB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, yB, EB, iB, 0, SB, MB, null);
                  mB.isCube = !0
                } else tB.texImage2D(tB.TEXTURE_2D, 0, yB, EB, iB, 0, SB, MB, null);
              else 35866 === dB ? mB.is2DArray = !0 : mB.is3D = !0, mB.baseDepth = mB.depth = IB, tB.texImage3D(dB, 0, yB, EB, iB, IB, 0, SB, MB, null);
              nB && tB.generateMipmap(dB), this._bindTextureDirectly(dB, null), mB.baseWidth = EB, mB.baseHeight = iB, mB.width = EB, mB.height = iB, mB.isReady = !0, mB.samples = 1, mB.generateMipMaps = nB, mB.samplingMode = BB, mB.type = jB, mB._useSRGBBuffer = zB, mB.format = QB, mB.label = GB[DB] ?? gB.label + "-Texture" + DB, this._internalTexturesCache.push(mB)
            }
            if (NB && this._caps.depthTextureExtension && !LB) {
              const BB = new qj.d(this, 14);
              let jB = 5,
                QB = tB.DEPTH_COMPONENT16,
                dB = tB.DEPTH_COMPONENT,
                IB = tB.UNSIGNED_SHORT,
                NB = tB.DEPTH_ATTACHMENT;
              this.gm < 2 ? QB = tB.DEPTH_COMPONENT : 14 === zB ? (jB = 1, IB = tB.FLOAT, QB = tB.DEPTH_COMPONENT32F) : 18 === zB ? (jB = 0, IB = tB.FLOAT_32_UNSIGNED_INT_24_8_REV, QB = tB.DEPTH32F_STENCIL8, dB = tB.DEPTH_STENCIL, NB = tB.DEPTH_STENCIL_ATTACHMENT) : 16 === zB ? (jB = 0, IB = tB.UNSIGNED_INT, QB = tB.DEPTH_COMPONENT24, NB = tB.DEPTH_ATTACHMENT) : 13 !== zB && 17 !== zB || (jB = 12, IB = tB.UNSIGNED_INT_24_8, QB = tB.DEPTH24_STENCIL8, dB = tB.DEPTH_STENCIL, NB = tB.DEPTH_STENCIL_ATTACHMENT), this._bindTextureDirectly(tB.TEXTURE_2D, BB, !0), tB.texParameteri(tB.TEXTURE_2D, tB.TEXTURE_MAG_FILTER, tB.NEAREST), tB.texParameteri(tB.TEXTURE_2D, tB.TEXTURE_MIN_FILTER, tB.NEAREST), tB.texParameteri(tB.TEXTURE_2D, tB.TEXTURE_WRAP_S, tB.CLAMP_TO_EDGE), tB.texParameteri(tB.TEXTURE_2D, tB.TEXTURE_WRAP_T, tB.CLAMP_TO_EDGE), tB.texImage2D(tB.TEXTURE_2D, 0, QB, EB, iB, 0, dB, IB, null), tB.framebufferTexture2D(tB.FRAMEBUFFER, NB, tB.TEXTURE_2D, BB._hardwareTexture.underlyingResource, 0), this._bindTextureDirectly(tB.TEXTURE_2D, null), gB._depthStencilTexture = BB, gB._depthStencilTextureWithStencil = HB, BB.baseWidth = EB, BB.baseHeight = iB, BB.width = EB, BB.height = iB, BB.isReady = !0, BB.samples = 1, BB.generateMipMaps = nB, BB.samplingMode = 1, BB.format = zB, BB.type = jB, BB.label = gB.label + "-DepthStencil", qB[uB] = BB, this._internalTexturesCache.push(BB)
            }
            if (gB.setTextures(qB), QB && tB.drawBuffers(oB), this._bindUnboundFramebuffer(SB), gB.setLayerAndFaceIndices(yB, mB), this.resetTextureCache(), LB) {
              if (UB > 1) {
                const BB = tB.createFramebuffer();
                if (!BB) throw new Error("Unable to create multi sampled framebuffer");
                gB._samples = UB, gB._MSAAFramebuffer = BB, uB > 0 && QB && (this._bindUnboundFramebuffer(BB), tB.drawBuffers(oB), this._bindUnboundFramebuffer(SB))
              }
            } else this.updateMultipleRenderTargetTextureSampleCount(gB, UB, QB);
            return gB
          }, fj.ThinEngine.prototype.updateMultipleRenderTargetTextureSampleCount = function(BB, jB) {
            let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.gm < 2 || !BB) return 1;
            if (BB.samples === jB) return jB;
            const QB = this._gl;
            jB = Math.min(jB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (QB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (QB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
            const nB = BB._attachments.length;
            for (let IB = 0; IB < nB; IB++) {
              const jB = BB.textures[IB]._hardwareTexture;
              jB?.releaseMSAARenderBuffers()
            }
            if (jB > 1 && "function" === typeof QB.renderbufferStorageMultisample) {
              const dB = QB.createFramebuffer();
              if (!dB) throw new Error("Unable to create multi sampled framebuffer");
              BB._MSAAFramebuffer = dB, this._bindUnboundFramebuffer(dB);
              const IB = [];
              for (let zB = 0; zB < nB; zB++) {
                const nB = BB.textures[zB],
                  dB = nB._hardwareTexture,
                  NB = QB[this.gm > 1 ? "COLOR_ATTACHMENT" + zB : "COLOR_ATTACHMENT" + zB + "_WEBGL"],
                  uB = this._createRenderBuffer(nB.width, nB.height, jB, -1, this._getRGBABufferInternalSizedFormat(nB.type, nB.format, nB._useSRGBBuffer), NB);
                if (!uB) throw new Error("Unable to create multi sampled framebuffer");
                dB.addMSAARenderBuffer(uB), nB.samples = jB, IB.push(NB)
              }
              zB && QB.drawBuffers(IB)
            } else this._bindUnboundFramebuffer(BB._framebuffer);
            const dB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
            return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, jB, dB), this._bindUnboundFramebuffer(null), BB._samples = jB, jB
          }, fj.ThinEngine.prototype.generateMipMapsMultiFramebuffer = function(BB) {
            const jB = BB,
              zB = this._gl;
            if (jB.isMulti)
              for (let QB = 0; QB < jB._attachments.length; QB++) {
                const BB = jB.textures[QB];
                !BB?.generateMipMaps || BB?.isCube || BB?.is3D || (this._bindTextureDirectly(zB.TEXTURE_2D, BB, !0), zB.generateMipmap(zB.TEXTURE_2D), this._bindTextureDirectly(zB.TEXTURE_2D, null))
              }
          }, fj.ThinEngine.prototype.resolveMultiFramebuffer = function(BB) {
            const jB = BB,
              zB = this._gl;
            if (!jB._MSAAFramebuffer || !jB.isMulti) return;
            let QB = jB.resolveMSAAColors ? zB.COLOR_BUFFER_BIT : 0;
            QB |= jB._generateDepthBuffer && jB.resolveMSAADepth ? zB.DEPTH_BUFFER_BIT : 0, QB |= jB._generateStencilBuffer && jB.resolveMSAAStencil ? zB.STENCIL_BUFFER_BIT : 0;
            const nB = jB._attachments,
              dB = nB.length;
            zB.bindFramebuffer(zB.READ_FRAMEBUFFER, jB._MSAAFramebuffer), zB.bindFramebuffer(zB.DRAW_FRAMEBUFFER, jB._framebuffer);
            for (let IB = 0; IB < dB; IB++) {
              const BB = jB.textures[IB];
              for (let jB = 0; jB < dB; jB++) nB[jB] = zB.NONE;
              nB[IB] = zB[this.gm > 1 ? "COLOR_ATTACHMENT" + IB : "COLOR_ATTACHMENT" + IB + "_WEBGL"], zB.readBuffer(nB[IB]), zB.drawBuffers(nB), zB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, QB, zB.NEAREST)
            }
            for (let IB = 0; IB < dB; IB++) nB[IB] = zB[this.gm > 1 ? "COLOR_ATTACHMENT" + IB : "COLOR_ATTACHMENT" + IB + "_WEBGL"];
            zB.drawBuffers(nB), zB.bindFramebuffer(this._gl.FRAMEBUFFER, jB._MSAAFramebuffer)
          }), !this.isSupported) return void this.dispose();
        this._textureNames = dB;
        const pB = [],
          rB = [],
          sB = [],
          JB = [],
          mB = [],
          yB = [],
          kB = [],
          GB = [];
        this._initTypes(zB, pB, rB, sB, JB, mB, yB, kB, GB, nB);
        const LB = !nB || void 0 === nB.generateDepthBuffer || nB.generateDepthBuffer,
          gB = !(!nB || void 0 === nB.generateStencilBuffer) && nB.generateStencilBuffer,
          tB = nB && nB.samples ? nB.samples : 1;
        this._multiRenderTargetOptions = {
          samplingModes: rB,
          generateMipMaps: IB,
          generateDepthBuffer: LB,
          generateStencilBuffer: gB,
          generateDepthTexture: NB,
          depthTextureFormat: uB,
          types: pB,
          DIB: zB,
          useSRGBBuffers: sB,
          samples: tB,
          formats: JB,
          targetTypes: mB,
          faceIndex: yB,
          layerIndex: kB,
          layerCounts: GB,
          labels: dB,
          label: BB
        }, this._count = zB, this._drawOnlyOnFirstAttachmentByDefault = aB, zB > 0 && (this._createInternalTextures(), this._createTextures(dB))
      }
      _initTypes(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        for (let aB = 0; aB < BB; aB++) UB && UB.types && void 0 !== UB.types[aB] ? jB.push(UB.types[aB]) : jB.push(UB && UB.defaultType ? UB.defaultType : 0), UB && UB.samplingModes && void 0 !== UB.samplingModes[aB] ? zB.push(UB.samplingModes[aB]) : zB.push(HB.i.BILINEAR_SAMPLINGMODE), UB && UB.useSRGBBuffers && void 0 !== UB.useSRGBBuffers[aB] ? QB.push(UB.useSRGBBuffers[aB]) : QB.push(!1), UB && UB.formats && void 0 !== UB.formats[aB] ? nB.push(UB.formats[aB]) : nB.push(5), UB && UB.targetTypes && void 0 !== UB.targetTypes[aB] ? dB.push(UB.targetTypes[aB]) : dB.push(3553), UB && UB.faceIndex && void 0 !== UB.faceIndex[aB] ? IB.push(UB.faceIndex[aB]) : IB.push(0), UB && UB.layerIndex && void 0 !== UB.layerIndex[aB] ? NB.push(UB.layerIndex[aB]) : NB.push(0), UB && UB.layerCounts && void 0 !== UB.layerCounts[aB] ? uB.push(UB.layerCounts[aB]) : uB.push(1)
      }
      _createInternaTextureIndexMapping() {
        const BB = {},
          jB = [];
        if (!this._renderTarget) return jB;
        const zB = this._renderTarget.textures;
        for (let QB = 0; QB < zB.length; QB++) {
          const nB = zB[QB];
          if (!nB) continue;
          const dB = BB[nB.uniqueId];
          void 0 !== dB ? jB[QB] = dB : BB[nB.uniqueId] = QB
        }
        return jB
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (this._count < 1 || BB) return;
        const QB = this._createInternaTextureIndexMapping();
        this.releaseInternalTextures(), this._createInternalTextures(), jB && (this._releaseTextures(), this._createTextures(zB));
        const nB = this._renderTarget.textures;
        for (let dB = 0; dB < nB.length; dB++) {
          const BB = this._textures[dB];
          void 0 !== QB[dB] && this._renderTarget.setTexture(nB[QB[dB]], dB), BB._texture = nB[dB], BB._texture && (BB._noMipmap = !BB._texture.useMipMaps, BB._useSRGBBuffer = BB._texture._useSRGBBuffer)
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
        const jB = this._renderTarget.textures;
        this._textures = [];
        for (let zB = 0; zB < jB.length; zB++) {
          const QB = new HB.i(null, this.aY());
          BB?.[zB] && (QB.name = BB[zB]), QB._texture = jB[zB], QB._texture && (QB._noMipmap = !QB._texture.useMipMaps, QB._useSRGBBuffer = QB._texture._useSRGBBuffer), this._textures.push(QB)
        }
      }
      setInternalTexture(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (this.renderTarget && (0 === jB && (this._texture = BB), this.renderTarget.setTexture(BB, jB, zB), this.textures[jB] || (this.textures[jB] = new HB.i(null, this.aY()), this.textures[jB].name = this._textureNames?.[jB] ?? this.textures[jB].name), this.textures[jB]._texture = BB, this.textures[jB]._noMipmap = !BB.useMipMaps, this.textures[jB]._useSRGBBuffer = BB._useSRGBBuffer, this._count = this.renderTarget.textures ? this.renderTarget.textures.length : 0, this._multiRenderTargetOptions.types && (this._multiRenderTargetOptions.types[jB] = BB.type), this._multiRenderTargetOptions.samplingModes && (this._multiRenderTargetOptions.samplingModes[jB] = BB.samplingMode), this._multiRenderTargetOptions.useSRGBBuffers && (this._multiRenderTargetOptions.useSRGBBuffers[jB] = BB._useSRGBBuffer), this._multiRenderTargetOptions.targetTypes && -1 !== this._multiRenderTargetOptions.targetTypes[jB])) {
          let zB;
          zB = BB.is2DArray ? 35866 : BB.isCube ? 34067 : BB.is3D ? 32879 : 3553, this._multiRenderTargetOptions.targetTypes[jB] = zB
        }
      }
      setLayerAndFaceIndex(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        this.textures[BB] && this.renderTarget && (this._multiRenderTargetOptions.layerIndex && (this._multiRenderTargetOptions.layerIndex[BB] = jB), this._multiRenderTargetOptions.faceIndex && (this._multiRenderTargetOptions.faceIndex[BB] = zB), this.renderTarget.setLayerAndFaceIndex(BB, jB, zB))
      }
      setLayerAndFaceIndices(BB, jB) {
        this.renderTarget && (this._multiRenderTargetOptions.layerIndex = BB, this._multiRenderTargetOptions.faceIndex = jB, this.renderTarget.setLayerAndFaceIndices(BB, jB))
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
      updateCount(BB, jB, zB) {
        this._multiRenderTargetOptions.DIB = BB, this._count = BB;
        const QB = [],
          nB = [],
          dB = [],
          IB = [],
          NB = [],
          uB = [],
          UB = [],
          aB = [];
        this._textureNames = zB, this._initTypes(BB, QB, nB, dB, IB, NB, uB, UB, aB, jB), this._multiRenderTargetOptions.types = QB, this._multiRenderTargetOptions.samplingModes = nB, this._multiRenderTargetOptions.useSRGBBuffers = dB, this._multiRenderTargetOptions.formats = IB, this._multiRenderTargetOptions.targetTypes = NB, this._multiRenderTargetOptions.faceIndex = uB, this._multiRenderTargetOptions.layerIndex = UB, this._multiRenderTargetOptions.layerCounts = aB, this._multiRenderTargetOptions.labels = zB, this._rebuild(!1, !0, zB)
      }
      _unbindFrameBuffer(BB, jB) {
        this._renderTarget && BB.unBindMultiColorAttachmentFramebuffer(this._renderTarget, this.isCube, (() => {
          this.onAfterRenderObservable.notifyObservers(jB)
        }))
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._releaseTextures(), BB ? this._texture = null : this.releaseInternalTextures(), super.dispose()
      }
      releaseInternalTextures() {
        const BB = this._renderTarget?.textures;
        if (BB) {
          for (let jB = BB.length - 1; jB >= 0; jB--) this._textures[jB]._texture = null;
          this._renderTarget?.dispose(), this._renderTarget = null
        }
      }
    }
    var Vj = zB(40247);
    class hj {
      constructor(BB) {
        this.name = Vj.b.NAME_GEOMETRYBUFFERRENDERER, this.ny = BB
      }
      register() {
        this.ny._gatherRenderTargetsStage.registerStep(Vj.b.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER, this, this._gatherRenderTargets)
      }
      rebuild() {}
      dispose() {}
      _gatherRenderTargets(BB) {
        this.ny._geometryBufferRenderer && BB.push(this.ny._geometryBufferRenderer.getGBuffer())
      }
    }
    let Xj = !1;
    var Zj;
    ! function(BB) {
      BB[BB.Small = 0] = "Small", BB[BB.Medium = 1] = "Medium", BB[BB.Large = 2] = "Large", BB[BB.ExtraLarge = 3] = "ExtraLarge"
    }(Zj || (Zj = {}));
    const Aj = ["diffuseSampler", "bumpSampler", "reflectivitySampler", "albedoSampler", "morphTargets", "boneSampler", "transmissionWeightSampler", "subsurfaceWeightSampler", "iblShadowSampler"],
      Tj = ["world", "mBones", "viewProjection", "diffuseMatrix", "alphaCutOff", "view", "previousWorld", "previousViewProjection", "mPreviousBones", "bumpMatrix", "reflectivityMatrix", "albedoMatrix", "reflectivityColor", "albedoColor", "reflectionMatrix", "vTransmissionWeight", "vSubsurfaceWeight", "vEyePosition", "vTransmissionScatterAnisotropy", "vSubsurfaceScatterAnisotropy", "shadowTextureSize", "metallic", "glossiness", "vTangentSpaceParams", "vBumpInfos", "morphTargetInfluences", "morphTargetCount", "morphTargetTextureInfo", "morphTargetTextureIndices", "boneTextureInfo", "objectId", "meshBlendTag"];
    class Pj {
      get renderTransparentMeshes() {
        return this._renderTransparentMeshes
      }
      set renderTransparentMeshes(BB) {
        if (BB && this._enableMeshBlendTag && !this._scene.wJ().getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
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
      _forceTextureType(BB, jB) {
        BB === Pj.POSITION_TEXTURE_TYPE ? (this._positionIndex = jB, this._enablePosition = !0) : BB === Pj.VELOCITY_TEXTURE_TYPE ? (this._velocityIndex = jB, this._enableVelocity = !0) : BB === Pj.VELOCITY_LINEAR_TEXTURE_TYPE ? (this._velocityLinearIndex = jB, this._enableVelocityLinear = !0) : BB === Pj.REFLECTIVITY_TEXTURE_TYPE ? (this._reflectivityIndex = jB, this._enableReflectivity = !0) : BB === Pj.DEPTH_TEXTURE_TYPE ? (this._depthIndex = jB, this._enableDepth = !0) : BB === Pj.NORMAL_TEXTURE_TYPE ? (this._normalIndex = jB, this._enableNormal = !0) : BB === Pj.SCREENSPACE_DEPTH_TEXTURE_TYPE ? (this._screenspaceDepthIndex = jB, this._enableScreenspaceDepth = !0) : BB === Pj.IRRADIANCE_TEXTURE_TYPE ? (this._irradianceIndex = jB, this._enableIrradiance = !0) : BB === Pj.OBJECT_ID_TEXTURE_TYPE ? (this._objectIdIndex = jB, this._enableObjectId = !0) : BB === Pj.MESH_BLEND_TAG_TEXTURE_TYPE && (this._meshBlendTagIndex = jB, this._enableMeshBlendTag = !0)
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
          case Pj.POSITION_TEXTURE_TYPE:
            return this._positionIndex;
          case Pj.VELOCITY_TEXTURE_TYPE:
            return this._velocityIndex;
          case Pj.VELOCITY_LINEAR_TEXTURE_TYPE:
            return this._velocityLinearIndex;
          case Pj.REFLECTIVITY_TEXTURE_TYPE:
            return this._reflectivityIndex;
          case Pj.DEPTH_TEXTURE_TYPE:
            return this._depthIndex;
          case Pj.NORMAL_TEXTURE_TYPE:
            return this._normalIndex;
          case Pj.SCREENSPACE_DEPTH_TEXTURE_TYPE:
            return this._screenspaceDepthIndex;
          case Pj.IRRADIANCE_TEXTURE_TYPE:
            return this._irradianceIndex;
          case Pj.OBJECT_ID_TEXTURE_TYPE:
            return this._objectIdIndex;
          case Pj.MESH_BLEND_TAG_TEXTURE_TYPE:
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
          const BB = this._scene.wJ(),
            jB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
            zB = this._assignRenderTargetIndices()[0] + 1;
          if (BB.getCaps().drawBuffersExtension && zB > jB) throw new Error(`GeometryBufferRenderer: ${zB} color attachments were requested, but this engine supports at most ${jB}`)
        }
        this._enableObjectId = BB, BB || (this._objectIdIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
      }
      get enableMeshBlendingTag() {
        return this._enableMeshBlendTag
      }
      set enableMeshBlendingTag(BB) {
        if (this._enableMeshBlendTag !== BB) {
          if (BB) {
            const BB = this._scene.wJ();
            if (! function(BB) {
                return "NATIVE" !== BB.shaderPlatformName && (BB.isWebGPU || 2 === BB.gm)
              }(BB)) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require WebGL2 or WebGPU");
            if (this.renderTransparentMeshes && !BB.isWebGPU && !BB.getCaps().blendParametersPerTarget) throw new Error("GeometryBufferRenderer: transparent mesh-blending tags require per-target blend parameters");
            if (this._linkedWithPrePass) throw new Error("GeometryBufferRenderer: mesh-blending tag textures are not supported when linked to the PrePassRenderer");
            if (1 !== this.samples) throw new Error("GeometryBufferRenderer: mesh-blending tag textures require samples to be 1");
            if (!this._enableMeshBlendTag) {
              const jB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8),
                zB = this._assignRenderTargetIndices()[0] + 1;
              if (BB.getCaps().drawBuffersExtension && zB > jB) throw new Error(`GeometryBufferRenderer: ${zB} color attachments were requested, but this engine supports at most ${jB}`)
            }
          }
          this._enableMeshBlendTag = BB, BB || (this._meshBlendTagIndex = -1), this._linkedWithPrePass || (this.dispose(), this._createRenderTargets())
        }
      }
      get ny() {
        return this._scene
      }
      get ratio() {
        return "object" === typeof this._ratioOrDimensions ? 1 : this._ratioOrDimensions
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        var nB;
        this._previousTransformationMatrices = {}, this._previousBonesTransformationMatrices = {}, this.excludedSkinnedMeshesFromVelocity = [], this._renderTransparentMeshes = !0, this.generateNormalsInWorldSpace = !1, this._normalsAreUnsigned = !1, this._resizeObserver = null, this._enableDepth = !0, this._enableNormal = !0, this._enablePosition = !1, this._enableVelocity = !1, this._enableVelocityLinear = !1, this._enableReflectivity = !1, this._enableScreenspaceDepth = !1, this._enableIrradiance = !1, this._enableObjectId = !1, this._enableMeshBlendTag = !1, this._clearColor = new xB.g(0, 0, 0, 0), this._clearDepthColor = new xB.g(0, 0, 0, 1), this._positionIndex = -1, this._velocityIndex = -1, this._velocityLinearIndex = -1, this._reflectivityIndex = -1, this._depthIndex = -1, this._normalIndex = -1, this._screenspaceDepthIndex = -1, this._irradianceIndex = -1, this._objectIdIndex = -1, this._meshBlendTagIndex = -1, this._linkedWithPrePass = !1, this.generateIrradianceWithScatterMask = !1, this.useSpecificClearForDepthTexture = !1, this._shaderLanguage = 0, this._shadersLoaded = !1, this._scene = BB, this._ratioOrDimensions = jB, this._useUbo = BB.wJ().supportsUniformBuffers, this._depthFormat = zB, this._textureTypesAndFormats = QB || {}, this._initShaderSourceAsync(), nB = Pj, Xj || (Xj = !0, Object.defineProperty(ZB.g.prototype, "geometryBufferRenderer", {
          get: function() {
            return this._geometryBufferRenderer
          },
          set: function(BB) {
            BB && BB.isSupported && (this._geometryBufferRenderer = BB)
          },
          enumerable: !0,
          configurable: !0
        }), ZB.g.prototype.enableGeometryBufferRenderer = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
            jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 15,
            zB = arguments.length > 2 ? arguments[2] : void 0;
          return this._geometryBufferRenderer || (this._geometryBufferRenderer = new nB(this, BB, jB, zB), this._geometryBufferRenderer.isSupported || (this._geometryBufferRenderer = null)), this._geometryBufferRenderer
        }, ZB.g.prototype.disableGeometryBufferRenderer = function() {
          this._geometryBufferRenderer && (this._geometryBufferRenderer.dispose(), this._geometryBufferRenderer = null)
        }, nB._SceneComponentInitialization = BB => {
          let jB = BB._getComponent(Vj.b.NAME_GEOMETRYBUFFERRENDERER);
          jB || (jB = new hj(BB), BB.wzB(jB))
        }), Pj._SceneComponentInitialization(this._scene), this._createRenderTargets()
      }
      async _initShaderSourceAsync() {
        this._scene.wJ().isWebGPU && !Pj.ForceGLSL ? (this._shaderLanguage = 1, await Promise.all([zB.e(342).then((() => zB(61996))), Promise.all([zB.e(341), zB.e(353)]).then((() => zB(62004)))])) : await Promise.all([zB.e(325).then((() => zB(62008))), zB.e(324).then((() => zB(62012)))]), this._shadersLoaded = !0
      }
      isReady(BB, jB) {
        if (!this._shadersLoaded) return !1;
        const zB = BB.bJ();
        if (zB && zB.disableDepthWrite) return !1;
        if (function(BB) {
            return BB._isGaussianSplatting || "GaussianSplattingMesh" === (jB = BB.getClassName()) || "GaussianSplattingStream" === jB;
            var jB
          }(BB.getMesh())) return !1;
        const QB = [],
          nB = [TB.l.PositionKind],
          dB = BB.getMesh();
        dB.isVerticesDataPresent(TB.l.NormalKind) && (QB.push("#define HAS_NORMAL_ATTRIBUTE"), nB.push(TB.l.NormalKind));
        let IB = !1,
          NB = !1;
        if (zB) {
          let BB = !1;
          if (zB.needAlphaTestingForMesh(dB) && zB.getAlphaTestTexture() && (QB.push("#define ALPHATEST"), QB.push(`#define ALPHATEST_UV${zB.getAlphaTestTexture().coordinatesIndex+1}`), BB = !0), (zB.bumpTexture || zB.normalTexture || zB.geometryNormalTexture) && bB.d.BumpTextureEnabled) {
            const jB = zB.bumpTexture || zB.normalTexture || zB.geometryNormalTexture;
            QB.push("#define BUMP"), QB.push(`#define BUMP_UV${jB.coordinatesIndex+1}`), BB = !0
          }
          if (this._enableReflectivity) {
            let jB = !1;
            if ("PBRMetallicRoughnessMaterial" === zB.getClassName()) zB.metallicRoughnessTexture && (QB.push("#define ORMTEXTURE"), QB.push(`#define REFLECTIVITY_UV${zB.metallicRoughnessTexture.coordinatesIndex+1}`), QB.push("#define METALLICWORKFLOW"), BB = !0, jB = !0), null != zB.metallic && (QB.push("#define METALLIC"), QB.push("#define METALLICWORKFLOW"), jB = !0), null != zB.roughness && (QB.push("#define ROUGHNESS"), QB.push("#define METALLICWORKFLOW"), jB = !0), jB && (zB.baseTexture && (QB.push("#define ALBEDOTEXTURE"), QB.push(`#define ALBEDO_UV${zB.baseTexture.coordinatesIndex+1}`), zB.baseTexture.gammaSpace && QB.push("#define GAMMAALBEDO"), BB = !0), zB.baseColor && QB.push("#define ALBEDOCOLOR"));
            else if ("PBRSpecularGlossinessMaterial" === zB.getClassName()) zB.specularGlossinessTexture ? (QB.push("#define SPECULARGLOSSINESSTEXTURE"), QB.push(`#define REFLECTIVITY_UV${zB.specularGlossinessTexture.coordinatesIndex+1}`), BB = !0, zB.specularGlossinessTexture.gammaSpace && QB.push("#define GAMMAREFLECTIVITYTEXTURE")) : zB.specularColor && QB.push("#define REFLECTIVITYCOLOR"), null != zB.glossiness && QB.push("#define GLOSSINESS");
            else if ("PBRMaterial" === zB.getClassName()) zB.metallicTexture && (QB.push("#define ORMTEXTURE"), QB.push(`#define REFLECTIVITY_UV${zB.metallicTexture.coordinatesIndex+1}`), QB.push("#define METALLICWORKFLOW"), BB = !0, jB = !0), null != zB.metallic && (QB.push("#define METALLIC"), QB.push("#define METALLICWORKFLOW"), jB = !0), null != zB.roughness && (QB.push("#define ROUGHNESS"), QB.push("#define METALLICWORKFLOW"), jB = !0), jB ? (zB.albedoTexture && (QB.push("#define ALBEDOTEXTURE"), QB.push(`#define ALBEDO_UV${zB.albedoTexture.coordinatesIndex+1}`), zB.albedoTexture.gammaSpace && QB.push("#define GAMMAALBEDO"), BB = !0), zB.albedoColor && QB.push("#define ALBEDOCOLOR")) : (zB.reflectivityTexture ? (QB.push("#define SPECULARGLOSSINESSTEXTURE"), QB.push(`#define REFLECTIVITY_UV${zB.reflectivityTexture.coordinatesIndex+1}`), zB.reflectivityTexture.gammaSpace && QB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0) : zB.reflectivityColor && QB.push("#define REFLECTIVITYCOLOR"), null != zB.microSurface && QB.push("#define GLOSSINESS"));
            else if ("StandardMaterial" === zB.getClassName()) zB.specularTexture && (QB.push("#define REFLECTIVITYTEXTURE"), QB.push(`#define REFLECTIVITY_UV${zB.specularTexture.coordinatesIndex+1}`), zB.specularTexture.gammaSpace && QB.push("#define GAMMAREFLECTIVITYTEXTURE"), BB = !0), zB.specularColor && QB.push("#define REFLECTIVITYCOLOR");
            else if ("OpenPBRMaterial" === zB.getClassName()) {
              const jB = zB;
              QB.push("#define METALLIC"), QB.push("#define ROUGHNESS"), jB._useRoughnessFromMetallicTextureGreen && jB.baseMetalnessTexture ? (QB.push("#define ORMTEXTURE"), QB.push(`#define REFLECTIVITY_UV${jB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : jB.baseMetalnessTexture ? (QB.push("#define METALLIC_TEXTURE"), QB.push(`#define METALLIC_UV${jB.baseMetalnessTexture.coordinatesIndex+1}`), BB = !0) : jB.specularRoughnessTexture && (QB.push("#define ROUGHNESS_TEXTURE"), QB.push(`#define ROUGHNESS_UV${jB.specularRoughnessTexture.coordinatesIndex+1}`), BB = !0), jB.baseColorTexture && (QB.push("#define ALBEDOTEXTURE"), QB.push(`#define ALBEDO_UV${jB.baseColorTexture.coordinatesIndex+1}`), jB.baseColorTexture.gammaSpace && QB.push("#define GAMMAALBEDO"), BB = !0), jB.baseColor && QB.push("#define ALBEDOCOLOR")
            }
          }
          if (this._enableIrradiance && this.generateIrradianceWithScatterMask && (QB.push("#define IRRADIANCE_SCATTER_MASK"), "OpenPBRMaterial" === zB.getClassName())) {
            const jB = zB;
            jB.subsurfaceWeight > 0 && jB.subsurfaceWeightTexture && (QB.push("#define SUBSURFACE_WEIGHT"), QB.push(`#define SUBSURFACEWEIGHT_UV${jB.subsurfaceWeightTexture.coordinatesIndex+1}`), BB = !0), jB.transmissionWeight > 0 && jB.transmissionWeightTexture && (QB.push("#define TRANSMISSION_WEIGHT"), QB.push(`#define TRANSMISSIONWEIGHT_UV${jB.transmissionWeightTexture.coordinatesIndex+1}`), BB = !0)
          }
          BB && (QB.push("#define NEED_UV"), dB.isVerticesDataPresent(TB.l.UVKind) && (nB.push(TB.l.UVKind), QB.push("#define UV1"), IB = !0), dB.isVerticesDataPresent(TB.l.UV2Kind) && (nB.push(TB.l.UV2Kind), QB.push("#define UV2"), NB = !0))
        }
        if (this._enableDepth && (QB.push("#define DEPTH"), QB.push("#define DEPTH_INDEX " + this._depthIndex)), this._enableNormal && (QB.push("#define NORMAL"), QB.push("#define NORMAL_INDEX " + this._normalIndex)), this._enablePosition && (QB.push("#define POSITION"), QB.push("#define POSITION_INDEX " + this._positionIndex)), this._enableVelocity && (QB.push("#define VELOCITY"), QB.push("#define VELOCITY_INDEX " + this._velocityIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(dB) && QB.push("#define BONES_VELOCITY_ENABLED")), this._enableVelocityLinear && (QB.push("#define VELOCITY_LINEAR"), QB.push("#define VELOCITY_LINEAR_INDEX " + this._velocityLinearIndex), -1 === this.excludedSkinnedMeshesFromVelocity.indexOf(dB) && QB.push("#define BONES_VELOCITY_ENABLED")), this._enableReflectivity && (QB.push("#define REFLECTIVITY"), QB.push("#define REFLECTIVITY_INDEX " + this._reflectivityIndex)), this._enableScreenspaceDepth && -1 !== this._screenspaceDepthIndex && (QB.push("#define SCREENSPACE_DEPTH_INDEX " + this._screenspaceDepthIndex), QB.push("#define SCREENSPACE_DEPTH")), this._enableIrradiance && -1 !== this._irradianceIndex) {
          QB.push("#define IRRADIANCE_INDEX " + this._irradianceIndex), QB.push("#define IRRADIANCE");
          const BB = this._scene;
          if (BB.environmentTexture) {
            const jB = {};
            let nB = !1,
              dB = 0;
            "OpenPBRMaterial" !== zB.getClassName() && "StandardMaterial" !== zB.getClassName() && "PBRMetallicRoughnessMaterial" !== zB.getClassName() && "PBRSpecularGlossinessMaterial" !== zB.getClassName() && "PBRMaterial" !== zB.getClassName() || (nB = !!zB.realtimeFiltering, dB = zB.realtimeFilteringQuality || 0), (0, RB.Y)(BB, BB.environmentTexture, jB, nB, dB, !0);
            for (const BB in jB) jB[BB] && QB.push("#define " + BB);
            jB.USEIRRADIANCEMAP || QB.push("#define SPHERICAL_HARMONICS");
            const IB = BB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
            if (IB) {
              const BB = IB;
              BB._getAccumulatedTexture() && (QB.push("#define IBL_SHADOW_TEXTURE"), BB.coloredShadows && QB.push("#define COLORED_IBL_SHADOWS"))
            }
          }
        }
        this._enableObjectId && (QB.push("#define OBJECT_ID"), QB.push("#define OBJECT_ID_INDEX " + this._objectIdIndex)), this._enableMeshBlendTag && (QB.push("#define MESH_BLEND_TAG"), QB.push("#define MESH_BLEND_TAG_INDEX " + this._meshBlendTagIndex)), this.generateNormalsInWorldSpace && QB.push("#define NORMAL_WORLDSPACE"), this._normalsAreUnsigned && QB.push("#define ENCODE_NORMAL"), dB.useBones && dB.computeBonesUsingShaders && dB.skeleton ? (nB.push(TB.l.MatricesIndicesKind), nB.push(TB.l.MatricesWeightsKind), dB.numBoneInfluencers > 4 && (nB.push(TB.l.MatricesIndicesExtraKind), nB.push(TB.l.MatricesWeightsExtraKind)), QB.push("#define NUM_BONE_INFLUENCERS " + dB.numBoneInfluencers), QB.push("#define BONETEXTURE " + dB.skeleton.isUsingTextureForMatrices), QB.push("#define BonesPerMesh " + (dB.skeleton.bones.length + 1))) : (QB.push("#define NUM_BONE_INFLUENCERS 0"), QB.push("#define BONETEXTURE false"), QB.push("#define BonesPerMesh 0"));
        const uB = dB.morphTargetManager ? (0, RB.Q)(dB.morphTargetManager, QB, nB, dB, !0, !0, !1, IB, NB, !1) : 0;
        jB && (QB.push("#define INSTANCES"), (0, RB.xb)(nB, this._enableVelocity || this._enableVelocityLinear), BB.getRenderingMesh().hasThinInstances && QB.push("#define THIN_INSTANCES")), this._linkedWithPrePass ? QB.push("#define SCENE_MRT_COUNT " + this._attachmentsFromPrePass.length) : QB.push("#define SCENE_MRT_COUNT " + this._multiRenderTarget.textures.length), (0, aj.l)(zB, this._scene, QB);
        const UB = this._scene.wJ(),
          aB = BB._getDrawWrapper(void 0, !0),
          pB = aB.defines,
          rB = QB.join("\n");
        return pB !== rB && aB.setEffect(UB.createEffect("geometry", {
          attributes: nB,
          uniformsNames: Tj,
          samplers: Aj,
          defines: rB,
          onCompiled: null,
          fallbacks: null,
          onError: null,
          uniformBuffersNames: ["Scene"],
          indexParameters: {
            buffersCount: this._multiRenderTarget.textures.length - 1,
            maxSimultaneousMorphTargets: uB
          },
          shaderLanguage: this.shaderLanguage
        }, UB), rB), aB.effect.isReady()
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
          this._scene.wJ().onResizeObservable.remove(this._resizeObserver), this._resizeObserver = null
        }
        this._multiRenderTarget?.renderTarget && this.ny.wJ()._currentRenderTarget === this._multiRenderTarget.renderTarget && this.ny.wJ().unBindFramebuffer(this._multiRenderTarget?.renderTarget), this.getGBuffer().dispose()
      }
      _assignRenderTargetIndices() {
        const BB = [],
          jB = [];
        let zB = 0;
        return this._enableDepth && (this._depthIndex = zB, zB++, BB.push("gBuffer_Depth"), jB.push(this._textureTypesAndFormats[Pj.DEPTH_TEXTURE_TYPE])), this._enableNormal && (this._normalIndex = zB, zB++, BB.push("gBuffer_Normal"), jB.push(this._textureTypesAndFormats[Pj.NORMAL_TEXTURE_TYPE])), this._enablePosition && (this._positionIndex = zB, zB++, BB.push("gBuffer_Position"), jB.push(this._textureTypesAndFormats[Pj.POSITION_TEXTURE_TYPE])), this._enableVelocity && (this._velocityIndex = zB, zB++, BB.push("gBuffer_Velocity"), jB.push(this._textureTypesAndFormats[Pj.VELOCITY_TEXTURE_TYPE])), this._enableVelocityLinear && (this._velocityLinearIndex = zB, zB++, BB.push("gBuffer_VelocityLinear"), jB.push(this._textureTypesAndFormats[Pj.VELOCITY_LINEAR_TEXTURE_TYPE])), this._enableReflectivity && (this._reflectivityIndex = zB, zB++, BB.push("gBuffer_Reflectivity"), jB.push(this._textureTypesAndFormats[Pj.REFLECTIVITY_TEXTURE_TYPE])), this._enableScreenspaceDepth && (this._screenspaceDepthIndex = zB, zB++, BB.push("gBuffer_ScreenspaceDepth"), jB.push(this._textureTypesAndFormats[Pj.SCREENSPACE_DEPTH_TEXTURE_TYPE])), this._enableIrradiance && (this._irradianceIndex = zB, zB++, BB.push("gBuffer_Irradiance"), jB.push(this._textureTypesAndFormats[Pj.IRRADIANCE_TEXTURE_TYPE])), this._enableObjectId && (this._objectIdIndex = zB, zB++, BB.push("gBuffer_ObjectId"), jB.push({
          textureType: 0,
          textureFormat: 5,
          samplingMode: 1
        })), this._enableMeshBlendTag && (this._meshBlendTagIndex = zB, zB++, BB.push("gBuffer_MeshBlendTag"), jB.push({
          textureType: 0,
          textureFormat: 8,
          samplingMode: 1
        })), [zB, BB, jB]
      }
      _createRenderTargets() {
        const BB = this._scene.wJ(),
          [jB, zB, QB] = this._assignRenderTargetIndices(),
          nB = Math.min(BB.getCaps().maxDrawBuffers ?? 1, 8);
        if (BB.getCaps().drawBuffersExtension && jB > nB) throw new Error(`GeometryBufferRenderer: ${jB} color attachments were requested, but this engine supports at most ${nB}`);
        let IB = 0;
        BB._caps.textureFloat && BB._caps.textureFloatLinearFiltering ? IB = 1 : BB._caps.textureHalfFloat && BB._caps.textureHalfFloatLinearFiltering && (IB = 2);
        const NB = this._getRenderTargetDimensions(),
          uB = [],
          UB = [],
          aB = [];
        for (const dB of QB) dB ? (uB.push(dB.textureType), UB.push(dB.textureFormat), aB.push(dB.samplingMode ?? 2)) : (uB.push(IB), UB.push(5), aB.push(2));
        if (this._normalsAreUnsigned = 11 === uB[Pj.NORMAL_TEXTURE_TYPE] || 13 === uB[Pj.NORMAL_TEXTURE_TYPE], this._multiRenderTarget = new Yj("gBuffer", NB, jB, this._scene, {
            generateMipMaps: !1,
            generateDepthTexture: !0,
            types: uB,
            formats: UB,
            samplingModes: aB,
            depthTextureFormat: this._depthFormat
          }, zB.concat("gBuffer_DepthBuffer")), !this.isSupported) return;
        this._multiRenderTarget.wrapU = HB.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.wrapV = HB.i.CLAMP_ADDRESSMODE, this._multiRenderTarget.refreshRate = 1, this._multiRenderTarget.renderParticles = !1, this._multiRenderTarget.renderList = null;
        const pB = [!0],
          rB = [!1],
          sB = [!0];
        for (let dB = 1; dB < jB; ++dB) pB.push(!0), sB.push(!1), rB.push(!0);
        const JB = BB.buildTextureLayout(pB),
          mB = BB.buildTextureLayout(rB),
          yB = BB.buildTextureLayout(sB);
        this._multiRenderTarget.onClearObservable.add((BB => {
          const jB = this.useSpecificClearForDepthTexture ? mB : JB;
          BB.clearAttachments(this._clearColor, jB, !0, !0, !0), this.useSpecificClearForDepthTexture && BB.clearAttachments(this._clearDepthColor, yB, !0, !1, !1), BB.bindAttachments(JB)
        })), this._resizeObserver = BB.onResizeObservable.add((() => {
          this._multiRenderTarget && this._multiRenderTarget.resize(this._getRenderTargetDimensions())
        }));
        const kB = BB => {
          const jB = BB.getRenderingMesh(),
            zB = BB.getEffectiveMesh(),
            QB = this._scene,
            nB = QB.wJ(),
            IB = BB.bJ();
          if (!IB) return;
          if (zB._internalAbstractMeshDataInfo._isActiveIntermediate = !1, (this._enableVelocity || this._enableVelocityLinear) && !this._previousTransformationMatrices[zB.uniqueId] && (this._previousTransformationMatrices[zB.uniqueId] = {
              zr: AB.c.Identity(),
              viewProjection: QB.getTransformMatrix()
            }, jB.skeleton)) {
            const BB = jB.skeleton.getTransformMatrices(jB);
            this._previousBonesTransformationMatrices[jB.uniqueId] = this._copyBonesTransformationMatrices(BB, new Float32Array(BB.length))
          }
          const NB = jB._getInstancesRenderList(BB._id, !!BB.getReplacementMesh());
          if (NB.mustReturn) return;
          const uB = nB.getCaps().instancedArrays && (null !== NB.visibleInstances[BB._id] || jB.hasThinInstances),
            UB = zB.getWorldMatrix();
          if (this.isReady(BB, uB)) {
            const aB = BB._getDrawWrapper();
            if (!aB) return;
            const pB = aB.effect;
            let rB;
            nB.enableEffect(aB), uB || jB._bind(BB, pB, IB.fillMode), this._useUbo ? ((0, RB.z)(pB, this._scene.getSceneUniformBuffer()), this._scene.finalizeSceneUbo()) : (pB.setMatrix("viewProjection", QB.getTransformMatrix()), pB.setMatrix("view", QB.getViewMatrix()), this._scene.bindEyePosition(pB, "vEyePosition"));
            if (jB._instanceDataStorage.isFrozen || !IB.backFaceCulling && null === IB.sideOrientation) rB = jB._effectiveSideOrientation;
            else {
              const BB = zB._getWorldMatrixDeterminant();
              rB = IB._getEffectiveOrientation(jB), BB < 0 && (rB = rB === dB.b.ClockWiseSideOrientation ? dB.b.CounterClockWiseSideOrientation : dB.b.ClockWiseSideOrientation)
            }
            if (IB._preBind(aB, rB), IB.needAlphaTestingForMesh(zB)) {
              const BB = IB.getAlphaTestTexture();
              BB && (pB.setTexture("diffuseSampler", BB), pB.setMatrix("diffuseMatrix", BB.getTextureMatrix()), pB.setFloat("alphaCutOff", IB.alphaCutOff ?? .4))
            }
            if ((IB.bumpTexture || IB.normalTexture || IB.geometryNormalTexture) && QB.wJ().getCaps().standardDerivatives && bB.d.BumpTextureEnabled) {
              const BB = IB.bumpTexture || IB.normalTexture || IB.geometryNormalTexture;
              pB.setFloat3("vBumpInfos", BB.coordinatesIndex, 1 / BB.level, IB.parallaxScaleBias), pB.setMatrix("bumpMatrix", BB.getTextureMatrix()), pB.setTexture("bumpSampler", BB), pB.setFloat2("vTangentSpaceParams", IB.invertNormalMapX ? -1 : 1, IB.invertNormalMapY ? -1 : 1)
            }
            if (this._enableReflectivity)
              if ("PBRMetallicRoughnessMaterial" === IB.getClassName()) null !== IB.metallicRoughnessTexture && (pB.setTexture("reflectivitySampler", IB.metallicRoughnessTexture), pB.setMatrix("reflectivityMatrix", IB.metallicRoughnessTexture.getTextureMatrix())), null !== IB.metallic && pB.setFloat("metallic", IB.metallic), null !== IB.roughness && pB.setFloat("glossiness", 1 - IB.roughness), null !== IB.baseTexture && (pB.setTexture("albedoSampler", IB.baseTexture), pB.setMatrix("albedoMatrix", IB.baseTexture.getTextureMatrix())), null !== IB.baseColor && pB.setColor3("albedoColor", IB.baseColor);
              else if ("PBRSpecularGlossinessMaterial" === IB.getClassName()) null !== IB.specularGlossinessTexture ? (pB.setTexture("reflectivitySampler", IB.specularGlossinessTexture), pB.setMatrix("reflectivityMatrix", IB.specularGlossinessTexture.getTextureMatrix())) : null !== IB.specularColor && pB.setColor3("reflectivityColor", IB.specularColor), null !== IB.glossiness && pB.setFloat("glossiness", IB.glossiness);
            else if ("PBRMaterial" === IB.getClassName()) null !== IB.metallicTexture && (pB.setTexture("reflectivitySampler", IB.metallicTexture), pB.setMatrix("reflectivityMatrix", IB.metallicTexture.getTextureMatrix())), null !== IB.metallic && pB.setFloat("metallic", IB.metallic), null !== IB.roughness && pB.setFloat("glossiness", 1 - IB.roughness), null !== IB.roughness || null !== IB.metallic || null !== IB.metallicTexture ? (null !== IB.albedoTexture && (pB.setTexture("albedoSampler", IB.albedoTexture), pB.setMatrix("albedoMatrix", IB.albedoTexture.getTextureMatrix())), null !== IB.albedoColor && pB.setColor3("albedoColor", IB.albedoColor)) : (null !== IB.reflectivityTexture ? (pB.setTexture("reflectivitySampler", IB.reflectivityTexture), pB.setMatrix("reflectivityMatrix", IB.reflectivityTexture.getTextureMatrix())) : null !== IB.reflectivityColor && pB.setColor3("reflectivityColor", IB.reflectivityColor), null !== IB.microSurface && pB.setFloat("glossiness", IB.microSurface));
            else if ("StandardMaterial" === IB.getClassName()) null !== IB.specularTexture && (pB.setTexture("reflectivitySampler", IB.specularTexture), pB.setMatrix("reflectivityMatrix", IB.specularTexture.getTextureMatrix())), null !== IB.specularColor && pB.setColor3("reflectivityColor", IB.specularColor);
            else if ("OpenPBRMaterial" === IB.getClassName()) {
              const BB = IB;
              BB._useRoughnessFromMetallicTextureGreen && BB.baseMetalnessTexture ? (pB.setTexture("reflectivitySampler", BB.baseMetalnessTexture), pB.setMatrix("reflectivityMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.baseMetalnessTexture ? (pB.setTexture("metallicSampler", BB.baseMetalnessTexture), pB.setMatrix("metallicMatrix", BB.baseMetalnessTexture.getTextureMatrix())) : BB.specularRoughnessTexture && (pB.setTexture("roughnessSampler", BB.specularRoughnessTexture), pB.setMatrix("roughnessMatrix", BB.specularRoughnessTexture.getTextureMatrix())), pB.setFloat("metallic", BB.baseMetalness), pB.setFloat("glossiness", 1 - BB.specularRoughness), null !== BB.baseColorTexture && (pB.setTexture("albedoSampler", BB.baseColorTexture), pB.setMatrix("albedoMatrix", BB.baseColorTexture.getTextureMatrix())), null !== BB.baseColor && pB.setColor3("albedoColor", BB.baseColor)
            }
            if (this._enableIrradiance && QB.environmentTexture) {
              const BB = QB.environmentTexture,
                jB = QB.postProcessRenderPipelineManager.supportedPipelines.find((BB => "IBLShadowsRenderPipeline" === BB.getClassName()));
              if (jB) {
                const BB = jB._getAccumulatedTexture();
                BB && (pB.setTexture("iblShadowSampler", BB), pB.setFloat2("shadowTextureSize", BB.getSize().width, BB.getSize().height))
              }
              if (pB.setMatrix("reflectionMatrix", BB.getReflectionTextureMatrix()), pB.setFloat2("vReflectionInfos", BB.level * QB.iblIntensity, 0), pB.setTexture("reflectionSampler", BB), BB.irradianceTexture && (pB.setTexture("irradianceSampler", BB.irradianceTexture), BB.irradianceTexture._dominantDirection && pB.setVector3("vReflectionDominantDirection", BB.irradianceTexture._dominantDirection)), BB.sphericalPolynomial) {
                const jB = BB.sphericalPolynomial;
                if (jB.preScaledHarmonics) {
                  const BB = jB.preScaledHarmonics;
                  pB.setVector3("vSphericalL00", BB.l00), pB.setVector3("vSphericalL1_1", BB.l1_1), pB.setVector3("vSphericalL10", BB.l10), pB.setVector3("vSphericalL11", BB.l11), pB.setVector3("vSphericalL2_2", BB.l2_2), pB.setVector3("vSphericalL2_1", BB.l2_1), pB.setVector3("vSphericalL20", BB.l20), pB.setVector3("vSphericalL21", BB.l21), pB.setVector3("vSphericalL22", BB.l22)
                } else pB.setFloat3("vSphericalX", jB.x.x, jB.x.y, jB.x.z), pB.setFloat3("vSphericalY", jB.y.x, jB.y.y, jB.y.z), pB.setFloat3("vSphericalZ", jB.z.x, jB.z.y, jB.z.z), pB.setFloat3("vSphericalXX_ZZ", jB.xx.x - jB.zz.x, jB.xx.y - jB.zz.y, jB.xx.z - jB.zz.z), pB.setFloat3("vSphericalYY_ZZ", jB.yy.x - jB.zz.x, jB.yy.y - jB.zz.y, jB.yy.z - jB.zz.z), pB.setFloat3("vSphericalZZ", jB.zz.x, jB.zz.y, jB.zz.z), pB.setFloat3("vSphericalXY", jB.xy.x, jB.xy.y, jB.xy.z), pB.setFloat3("vSphericalYZ", jB.yz.x, jB.yz.y, jB.yz.z), pB.setFloat3("vSphericalZX", jB.zx.x, jB.zx.y, jB.zx.z)
              }
              if (this.generateIrradianceWithScatterMask && "OpenPBRMaterial" === IB.getClassName()) {
                const BB = IB;
                pB.setFloat("vSubsurfaceWeight", BB.subsurfaceWeight), BB.subsurfaceWeightTexture && (pB.setTexture("subsurfaceWeightSampler", BB.subsurfaceWeightTexture), pB.setMatrix("subsurfaceWeightMatrix", BB.subsurfaceWeightTexture.getTextureMatrix())), pB.setFloat("vTransmissionWeight", BB.transmissionWeight), BB.transmissionWeightTexture && (pB.setTexture("transmissionWeightSampler", BB.transmissionWeightTexture), pB.setMatrix("transmissionWeightMatrix", BB.transmissionWeightTexture.getTextureMatrix())), pB.setFloat("vTransmissionScatterAnisotropy", BB.transmissionScatterAnisotropy), pB.setFloat("vSubsurfaceScatterAnisotropy", BB.subsurfaceScatterAnisotropy)
              }
            }
            if ((0, aj.g)(pB, IB, this._scene), jB.useBones && jB.computeBonesUsingShaders && jB.skeleton) {
              const BB = jB.skeleton;
              if (BB.isUsingTextureForMatrices && pB.getUniformIndex("boneTextureInfo") > -1) {
                const zB = BB.getTransformMatrixTexture(jB);
                pB.setTexture("boneSampler", zB), pB.setFloat2("boneTextureInfo", BB._textureWidth, BB._textureHeight)
              } else pB.setMatrices("mBones", jB.skeleton.getTransformMatrices(jB));
              (this._enableVelocity || this._enableVelocityLinear) && pB.setMatrices("mPreviousBones", this._previousBonesTransformationMatrices[jB.uniqueId])
            }
            if ((0, RB.y)(jB, pB), jB.morphTargetManager && jB.morphTargetManager.isUsingTextureForTargets && jB.morphTargetManager._bind(pB), (this._enableVelocity || this._enableVelocityLinear) && (pB.setMatrix("previousWorld", this._previousTransformationMatrices[zB.uniqueId].zr), pB.setMatrix("previousViewProjection", this._previousTransformationMatrices[zB.uniqueId].viewProjection)), this._enableObjectId) {
              let BB = jB.uniqueId;
              if (this.objectIdProvider) BB = (0, sj.h)(jB, this.objectIdProvider);
              else if (BB > 16777215) throw new Error(`Invalid geometry object ID ${BB} for mesh "${jB.name}". Object IDs must be integers between 0 and 0xFFFFFF.`);
              pB.setFloat("objectId", BB)
            }
            if (this._enableMeshBlendTag) {
              const BB = this.meshBlendTagProvider ? (0, sj.f)(jB, this.meshBlendTagProvider) : jB.meshBlendingTag;
              pB.setInt("meshBlendTag", BB)
            }
            uB && jB.hasThinInstances && pB.setMatrix("world", UB), jB._processRendering(zB, BB, pB, IB.fillMode, NB, uB, ((BB, jB) => {
              BB || pB.setMatrix("world", jB)
            }))
          }(this._enableVelocity || this._enableVelocityLinear) && (this._previousTransformationMatrices[zB.uniqueId].zr = UB.clone(), this._previousTransformationMatrices[zB.uniqueId].viewProjection = this._scene.getTransformMatrix().clone(), jB.skeleton && this._copyBonesTransformationMatrices(jB.skeleton.getTransformMatrices(jB), this._previousBonesTransformationMatrices[zB.uniqueId]))
        };
        this._multiRenderTarget.customIsReadyFunction = (jB, zB, QB) => {
          if ((QB || 0 === zB) && jB.cL)
            for (let nB = 0; nB < jB.cL.length; ++nB) {
              const zB = jB.cL[nB],
                QB = zB.bJ(),
                dB = zB.getRenderingMesh();
              if (!QB) continue;
              const IB = dB._getInstancesRenderList(zB._id, !!zB.getReplacementMesh()),
                NB = BB.getCaps().instancedArrays && (null !== IB.visibleInstances[zB._id] || dB.hasThinInstances);
              if (!this.isReady(zB, NB)) return !1
            }
          return !0
        }, this._multiRenderTarget.customRenderFunction = (jB, zB, QB, nB) => {
          let dB;
          if (this._linkedWithPrePass) {
            if (!this._prePassRenderer.enabled) return;
            this._scene.wJ().bindAttachments(this._attachmentsFromPrePass)
          }
          if (nB.length) {
            for (BB.setColorWrite(!1), dB = 0; dB < nB.length; dB++) kB(nB.data[dB]);
            BB.setColorWrite(!0)
          }
          for (dB = 0; dB < jB.length; dB++) kB(jB.data[dB]);
          for (BB.setDepthWrite(!1), dB = 0; dB < zB.length; dB++) kB(zB.data[dB]);
          if (this.renderTransparentMeshes)
            for (dB = 0; dB < QB.length; dB++) kB(QB.data[dB]);
          BB.setDepthWrite(!0)
        }
      }
      _getRenderTargetDimensions() {
        if ("object" === typeof this._ratioOrDimensions) return {
          width: Math.max(1, Math.floor(this._ratioOrDimensions.width)),
          height: Math.max(1, Math.floor(this._ratioOrDimensions.height))
        };
        const BB = this._scene.wJ();
        return {
          width: Math.max(1, Math.floor(BB.getRenderWidth() * this._ratioOrDimensions)),
          height: Math.max(1, Math.floor(BB.getRenderHeight() * this._ratioOrDimensions))
        }
      }
      _copyBonesTransformationMatrices(BB, jB) {
        for (let zB = 0; zB < BB.length; zB++) jB[zB] = BB[zB];
        return jB
      }
    }
    Pj.ForceGLSL = !1, Pj.DEPTH_TEXTURE_TYPE = 0, Pj.NORMAL_TEXTURE_TYPE = 1, Pj.POSITION_TEXTURE_TYPE = 2, Pj.VELOCITY_TEXTURE_TYPE = 3, Pj.REFLECTIVITY_TEXTURE_TYPE = 4, Pj.SCREENSPACE_DEPTH_TEXTURE_TYPE = 5, Pj.VELOCITY_LINEAR_TEXTURE_TYPE = 6, Pj.IRRADIANCE_TEXTURE_TYPE = 7, Pj.OBJECT_ID_TEXTURE_TYPE = 8, Pj.MESH_BLEND_TAG_TEXTURE_TYPE = 9, Pj._SceneComponentInitialization = BB => {
      throw (0, kj.k)("GeometryBufferRendererSceneComponent")
    };
    var Wj = zB(37222);
    const ej = {
      effect: null,
      subMesh: null
    };

    function lj(BB) {
      if ("number" === typeof BB) return 1;
      if (BB instanceof AB.i) return 2;
      if (BB instanceof AB.m || BB instanceof xB.d) return 3;
      if (BB instanceof AB.n || BB instanceof xB.g) return 4;
      throw new Error("Unsupported OpenPBR property type.")
    }
    class wj {
      populateVectorFromLinkedProperties(BB) {
        const jB = lj(BB);
        for (const zB in this.linkedProperties) {
          const BB = this.linkedProperties[zB],
            QB = BB.numComponents;
          if (jB < QB || BB.targetUniformComponentOffset > jB - QB) return void(1 == QB ? fB.c.Error(`Float property ${BB.name} has an offset that is too large.`) : fB.c.Error(`Vector${QB} property ${BB.name} won't fit in Vector${jB} or has an offset that is too large.`));
          "number" === typeof BB.value ? wj._tmpArray[BB.targetUniformComponentOffset] = BB.value : BB.value.toArray(wj._tmpArray, BB.targetUniformComponentOffset)
        }
        BB.ljB(wj._tmpArray)
      }
      constructor(BB, jB) {
        this.linkedProperties = {}, this.firstLinkedKey = "", this.name = BB, this.numComponents = jB
      }
    }
    wj._tmpArray = [0, 0, 0, 0];
    class xj {
      constructor(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        this.targetUniformComponentNum = 4, this.targetUniformComponentOffset = 0, this.name = BB, this.targetUniformName = zB, this.defaultValue = jB, this.value = jB, this.targetUniformComponentNum = QB, this.targetUniformComponentOffset = nB, this.requiredDefine = dB
      }
      get numComponents() {
        return "number" === typeof this.defaultValue ? 1 : lj(this.defaultValue)
      }
    }
    class Kj {
      get samplerName() {
        return this.samplerPrefix + "Sampler"
      }
      get samplerInfoName() {
        return "v" + this.samplerPrefix.charAt(0).toUpperCase() + this.samplerPrefix.slice(1) + "Infos"
      }
      get samplerMatrixName() {
        return this.samplerPrefix + "Matrix"
      }
      constructor(BB, jB, zB) {
        this.value = null, this.samplerPrefix = "", this.textureDefine = "", this.name = BB, this.samplerPrefix = jB, this.textureDefine = zB
      }
    }
    class Cj extends((0, mj.b)((0, Jj.d)(PB.b))) {}
    class cj extends(function(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.REFLECTION = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.INVERTCUBICMAP = !1, this.USESPHERICALFROMREFLECTIONMAP = !1, this.USEIRRADIANCEMAP = !1, this.USE_IRRADIANCE_DOMINANT_DIRECTION = !1, this.USESPHERICALINVERTEX = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.LODINREFLECTIONALPHA = !1, this.GAMMAREFLECTION = !1, this.RGBDREFLECTION = !1
        }
      }
    }(Cj)) {}
    class bj extends((0, KB.e)(cj)) {
      constructor(BB) {
        super(BB), this.NUM_SAMPLES = "0", this.REALTIME_FILTERING = !1, this.IBL_CDF_FILTERING = !1, this.LIGHTCOUNT = 0, this.VERTEXCOLOR = !1, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.VERTEXALPHA = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHABLEND = !1, this.ALPHA_FROM_BASE_COLOR_TEXTURE = !1, this.ALPHATESTVALUE = "0.5", this.PREMULTIPLYALPHA = !1, this.REFLECTIVITY_GAMMA = !1, this.REFLECTIVITYDIRECTUV = 0, this.SPECULARTERM = !1, this.LODBASEDMICROSFURACE = !0, this.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = !1, this.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = !1, this.AOSTOREINMETALMAPRED = !1, this.SPECULAR_WEIGHT_IN_ALPHA = !1, this.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = !1, this.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = !1, this.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = !1, this.USE_GLTF_STYLE_ANISOTROPY = !1, this.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = !1, this.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = !1, this.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = !1, this.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = !1, this.ENVIRONMENTBRDF = !1, this.ENVIRONMENTBRDF_RGBD = !1, this.FUZZENVIRONMENTBRDF = !1, this.NORMAL = !1, this.TANGENT = !1, this.OBJECTSPACE_NORMALMAP = !1, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.NORMALXYSCALE = !0, this.ANISOTROPIC = !1, this.ANISOTROPIC_OPENPBR = !0, this.ANISOTROPIC_BASE = !1, this.ANISOTROPIC_COAT = !1, this.FUZZ_IBL_SAMPLES = 6, this.REFRACTION_HIGH_QUALITY_BLUR = !1, this.FUZZ = !1, this.THIN_FILM = !1, this.IRIDESCENCE = !1, this.DISPERSION = !1, this.SCATTERING = !1, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !1, this.SSS_SAMPLE_COUNT = 16, this.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !1, this.TRANSMISSION_SLAB = !1, this.TRANSMISSION_SLAB_VOLUME = !1, this.SUBSURFACE_SLAB = !1, this.GEOMETRY_THIN_WALLED = !1, this.REFRACTED_BACKGROUND = !1, this.REFRACTED_LIGHTS = !1, this.REFRACTED_ENVIRONMENT = !1, this.REFRACTED_ENVIRONMENT_OPPOSITEZ = !1, this.REFRACTED_ENVIRONMENT_LOCAL_CUBE = !1, this.RADIANCEOCCLUSION = !1, this.HORIZONOCCLUSION = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.NONUNIFORMSCALING = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.USEPHYSICALLIGHTFALLOFF = !1, this.USEGLTFLIGHTFALLOFF = !1, this.TWOSIDEDLIGHTING = !1, this.MIRRORED = !1, this.SHADOWFLOAT = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.POINTSIZE = !1, this.FOG = !1, this.LOGARITHMICDEPTH = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.FORCENORMALFORWARD = !1, this.SPECULARAA = !1, this.UNLIT = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.DEBUGMODE = 0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.BRDF_V_HEIGHT_CORRELATED = !0, this.MS_BRDF_ENERGY_CONSERVATION = !0, this.SPHERICAL_HARMONICS = !0, this.SPECULAR_GLOSSINESS_ENERGY_CONSERVATION = !0, this.MIX_IBL_RADIANCE_WITH_IRRADIANCE = !0, this.LEGACY_SPECULAR_ENERGY_CONSERVATION = !1, this.BASE_DIFFUSE_MODEL = 0, this.DIELECTRIC_SPECULAR_MODEL = 1, this.CONDUCTOR_SPECULAR_MODEL = 1, this.rebuild()
      }
      reset() {
        super.reset(), this.ALPHATESTVALUE = "0.5", this.NORMALXYSCALE = !0
      }
    }
    class vj extends((0, yj.d)(cB.e)) {}
    let Rj = (() => {
        var BB, jB, QB, nB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, DB, FB, YB, VB, ZB, PB, WB, eB, lB, KB, cB, OB, Bj, jj, zj, Qj, nj, dj, Ij, Nj, uj, Uj, Jj, mj, yj, kj, Gj, Lj, gj, tj, Sj, ij, qj, fj, oj, Hj, Dj, Fj, Yj, Vj, hj, Xj, Zj, Aj, Tj, Wj, lj, Cj, cj, Rj, Oj, Bz, jz, zz, Qz, nz, dz, Iz, Nz, uz, Uz, az, pz, rz, sz, Jz, mz, yz, kz, Gz, Lz, gz, tz, Sz, Mz, Ez, iz, qz, fz, oz;
        let Hz, Dz, Fz, Yz, Vz, hz, Xz, Zz, Az, Tz, Pz, Wz, ez, lz, wz, xz, Kz, Cz, cz, bz, vz, Rz, Oz, BQ, jQ, zQ, QQ, nQ, dQ, IQ, NQ, uQ, UQ, aQ, pQ, rQ, sQ, JQ, mQ, yQ, kQ, GQ, LQ, gQ, tQ, SQ, MQ, EQ, iQ, qQ, fQ, oQ, HQ, DQ, FQ, YQ, VQ, hQ, XQ, ZQ, AQ, TQ, PQ, WQ, eQ, lQ, wQ, xQ, KQ, CQ, cQ, bQ, vQ, RQ, OQ, Bn, jn, zn, Qn, nn, dn, In, Nn, un, Un, an, pn, rn, sn, Jn, mn, yn, kn, Gn, Ln, gn, tn, Sn, Mn, En, qn, fn, Hn, Dn, Fn, Yn = vj,
          Vn = [],
          hn = [],
          Xn = [],
          Zn = [],
          An = [],
          Tn = [],
          Pn = [],
          Wn = [],
          en = [],
          wn = [],
          xn = [],
          Kn = [],
          Cn = [],
          cn = [],
          bn = [],
          vn = [],
          Rn = [],
          On = [],
          Bd = [],
          jd = [],
          zd = [],
          Qd = [],
          nd = [],
          dd = [],
          Id = [],
          Nd = [],
          ud = [],
          Ud = [],
          pd = [],
          rd = [],
          sd = [],
          Jd = [],
          md = [],
          yd = [],
          kd = [],
          Gd = [],
          Ld = [],
          gd = [],
          td = [],
          Sd = [],
          Md = [],
          Ed = [],
          qd = [],
          fd = [],
          od = [],
          Hd = [],
          Dd = [],
          Fd = [],
          Yd = [],
          Vd = [],
          hd = [],
          Xd = [],
          Zd = [],
          Ad = [],
          Td = [],
          Pd = [],
          Wd = [],
          ed = [],
          ld = [],
          wd = [],
          xd = [],
          Kd = [],
          Cd = [],
          cd = [],
          bd = [],
          vd = [],
          Rd = [],
          Od = [],
          BI = [],
          jI = [],
          zI = [],
          QI = [],
          nI = [],
          dI = [],
          II = [],
          NI = [],
          uI = [],
          UI = [],
          aI = [],
          pI = [],
          rI = [],
          sI = [],
          JI = [],
          mI = [],
          yI = [],
          kI = [],
          GI = [],
          LI = [],
          gI = [],
          tI = [],
          SI = [],
          MI = [],
          EI = [],
          iI = [],
          qI = [],
          fI = [],
          oI = [],
          HI = [],
          DI = [],
          FI = [],
          YI = [],
          VI = [],
          hI = [],
          XI = [],
          ZI = [],
          AI = [],
          TI = [],
          PI = [],
          WI = [],
          eI = [],
          lI = [],
          wI = [],
          xI = [],
          KI = [],
          CI = [],
          cI = [],
          bI = [],
          vI = [],
          RI = [],
          OI = [],
          BN = [],
          jN = [],
          zN = [],
          QN = [],
          nN = [],
          dN = [],
          IN = [],
          NN = [],
          uN = [],
          UN = [],
          aN = [],
          pN = [],
          rN = [],
          sN = [],
          JN = [],
          mN = [],
          yN = [],
          kN = [],
          GN = [],
          LN = [],
          gN = [],
          tN = [],
          SN = [],
          MN = [],
          EN = [],
          iN = [],
          qN = [],
          fN = [],
          oN = [],
          HN = [],
          DN = [],
          FN = [],
          YN = [],
          VN = [],
          hN = [],
          XN = [],
          ZN = [],
          AN = [],
          TN = [],
          PN = [],
          WN = [],
          eN = [],
          lN = [],
          wN = [],
          xN = [],
          KN = [],
          CN = [],
          cN = [],
          bN = [],
          vN = [],
          RN = [],
          ON = [],
          Bu = [],
          ju = [],
          zu = [],
          Qu = [],
          nu = [],
          du = [],
          Iu = [],
          Nu = [],
          uu = [],
          Uu = [],
          au = [],
          pu = [],
          ru = [],
          su = [],
          Ju = [],
          mu = [],
          yu = [],
          ku = [],
          Gu = [],
          Lu = [],
          gu = [],
          tu = [],
          Su = [],
          Mu = [],
          Eu = [],
          iu = [],
          qu = [],
          fu = [],
          ou = [],
          Hu = [],
          Du = [],
          Fu = [],
          Yu = [];
        return BB = class extends Yn {
          get baseWeight() {
            return (0, iB.b)(this, jB, "f")
          }
          set baseWeight(BB) {
            (0, iB.d)(this, jB, BB, "f")
          }
          get baseWeightTexture() {
            return (0, iB.b)(this, QB, "f")
          }
          set baseWeightTexture(BB) {
            (0, iB.d)(this, QB, BB, "f")
          }
          get baseColor() {
            return (0, iB.b)(this, nB, "f")
          }
          set baseColor(BB) {
            (0, iB.d)(this, nB, BB, "f")
          }
          get baseColorTexture() {
            return (0, iB.b)(this, IB, "f")
          }
          set baseColorTexture(BB) {
            (0, iB.d)(this, IB, BB, "f")
          }
          get baseDiffuseRoughness() {
            return (0, iB.b)(this, NB, "f")
          }
          set baseDiffuseRoughness(BB) {
            (0, iB.d)(this, NB, BB, "f")
          }
          get baseDiffuseRoughnessTexture() {
            return (0, iB.b)(this, uB, "f")
          }
          set baseDiffuseRoughnessTexture(BB) {
            (0, iB.d)(this, uB, BB, "f")
          }
          get baseMetalness() {
            return (0, iB.b)(this, UB, "f")
          }
          set baseMetalness(BB) {
            (0, iB.d)(this, UB, BB, "f")
          }
          get baseMetalnessTexture() {
            return (0, iB.b)(this, aB, "f")
          }
          set baseMetalnessTexture(BB) {
            (0, iB.d)(this, aB, BB, "f")
          }
          get specularWeight() {
            return (0, iB.b)(this, pB, "f")
          }
          set specularWeight(BB) {
            (0, iB.d)(this, pB, BB, "f")
          }
          get specularWeightTexture() {
            return (0, iB.b)(this, rB, "f")
          }
          set specularWeightTexture(BB) {
            (0, iB.d)(this, rB, BB, "f")
          }
          get specularColor() {
            return (0, iB.b)(this, sB, "f")
          }
          set specularColor(BB) {
            (0, iB.d)(this, sB, BB, "f")
          }
          get specularColorTexture() {
            return (0, iB.b)(this, JB, "f")
          }
          set specularColorTexture(BB) {
            (0, iB.d)(this, JB, BB, "f")
          }
          get specularRoughness() {
            return (0, iB.b)(this, mB, "f")
          }
          set specularRoughness(BB) {
            (0, iB.d)(this, mB, BB, "f")
          }
          get specularRoughnessTexture() {
            return (0, iB.b)(this, yB, "f")
          }
          set specularRoughnessTexture(BB) {
            (0, iB.d)(this, yB, BB, "f")
          }
          get specularRoughnessAnisotropy() {
            return (0, iB.b)(this, kB, "f")
          }
          set specularRoughnessAnisotropy(BB) {
            (0, iB.d)(this, kB, BB, "f")
          }
          get specularRoughnessAnisotropyTexture() {
            return (0, iB.b)(this, GB, "f")
          }
          set specularRoughnessAnisotropyTexture(BB) {
            (0, iB.d)(this, GB, BB, "f")
          }
          get specularIor() {
            return (0, iB.b)(this, LB, "f")
          }
          set specularIor(BB) {
            (0, iB.d)(this, LB, BB, "f")
          }
          get transmissionWeight() {
            return (0, iB.b)(this, gB, "f")
          }
          set transmissionWeight(BB) {
            (0, iB.d)(this, gB, BB, "f")
          }
          get transmissionWeightTexture() {
            return (0, iB.b)(this, tB, "f")
          }
          set transmissionWeightTexture(BB) {
            (0, iB.d)(this, tB, BB, "f")
          }
          get transmissionColor() {
            return (0, iB.b)(this, SB, "f")
          }
          set transmissionColor(BB) {
            (0, iB.d)(this, SB, BB, "f")
          }
          get transmissionColorTexture() {
            return (0, iB.b)(this, MB, "f")
          }
          set transmissionColorTexture(BB) {
            (0, iB.d)(this, MB, BB, "f")
          }
          get transmissionDepth() {
            return (0, iB.b)(this, EB, "f")
          }
          set transmissionDepth(BB) {
            (0, iB.d)(this, EB, BB, "f")
          }
          get transmissionDepthTexture() {
            return (0, iB.b)(this, DB, "f")
          }
          set transmissionDepthTexture(BB) {
            (0, iB.d)(this, DB, BB, "f")
          }
          get transmissionScatter() {
            return (0, iB.b)(this, FB, "f")
          }
          set transmissionScatter(BB) {
            (0, iB.d)(this, FB, BB, "f")
          }
          get transmissionScatterTexture() {
            return (0, iB.b)(this, YB, "f")
          }
          set transmissionScatterTexture(BB) {
            (0, iB.d)(this, YB, BB, "f")
          }
          get transmissionScatterAnisotropy() {
            return (0, iB.b)(this, VB, "f")
          }
          set transmissionScatterAnisotropy(BB) {
            (0, iB.d)(this, VB, BB, "f")
          }
          get transmissionDispersionScale() {
            return (0, iB.b)(this, ZB, "f")
          }
          set transmissionDispersionScale(BB) {
            (0, iB.d)(this, ZB, BB, "f")
          }
          get transmissionDispersionScaleTexture() {
            return (0, iB.b)(this, PB, "f")
          }
          set transmissionDispersionScaleTexture(BB) {
            (0, iB.d)(this, PB, BB, "f")
          }
          get transmissionDispersionAbbeNumber() {
            return (0, iB.b)(this, WB, "f")
          }
          set transmissionDispersionAbbeNumber(BB) {
            (0, iB.d)(this, WB, BB, "f")
          }
          get subsurfaceWeight() {
            return (0, iB.b)(this, eB, "f")
          }
          set subsurfaceWeight(BB) {
            (0, iB.d)(this, eB, BB, "f")
          }
          get subsurfaceWeightTexture() {
            return (0, iB.b)(this, lB, "f")
          }
          set subsurfaceWeightTexture(BB) {
            (0, iB.d)(this, lB, BB, "f")
          }
          get subsurfaceColor() {
            return (0, iB.b)(this, KB, "f")
          }
          set subsurfaceColor(BB) {
            (0, iB.d)(this, KB, BB, "f")
          }
          get subsurfaceColorTexture() {
            return (0, iB.b)(this, cB, "f")
          }
          set subsurfaceColorTexture(BB) {
            (0, iB.d)(this, cB, BB, "f")
          }
          get subsurfaceRadius() {
            return (0, iB.b)(this, OB, "f")
          }
          set subsurfaceRadius(BB) {
            (0, iB.d)(this, OB, BB, "f")
          }
          get subsurfaceRadiusScale() {
            return (0, iB.b)(this, Bj, "f")
          }
          set subsurfaceRadiusScale(BB) {
            (0, iB.d)(this, Bj, BB, "f")
          }
          get subsurfaceRadiusScaleTexture() {
            return (0, iB.b)(this, jj, "f")
          }
          set subsurfaceRadiusScaleTexture(BB) {
            (0, iB.d)(this, jj, BB, "f")
          }
          get subsurfaceScatterAnisotropy() {
            return (0, iB.b)(this, zj, "f")
          }
          set subsurfaceScatterAnisotropy(BB) {
            (0, iB.d)(this, zj, BB, "f")
          }
          get coatWeight() {
            return (0, iB.b)(this, Qj, "f")
          }
          set coatWeight(BB) {
            (0, iB.d)(this, Qj, BB, "f")
          }
          get coatWeightTexture() {
            return (0, iB.b)(this, nj, "f")
          }
          set coatWeightTexture(BB) {
            (0, iB.d)(this, nj, BB, "f")
          }
          get coatColor() {
            return (0, iB.b)(this, dj, "f")
          }
          set coatColor(BB) {
            (0, iB.d)(this, dj, BB, "f")
          }
          get coatColorTexture() {
            return (0, iB.b)(this, Ij, "f")
          }
          set coatColorTexture(BB) {
            (0, iB.d)(this, Ij, BB, "f")
          }
          get coatRoughness() {
            return (0, iB.b)(this, Nj, "f")
          }
          set coatRoughness(BB) {
            (0, iB.d)(this, Nj, BB, "f")
          }
          get coatRoughnessTexture() {
            return (0, iB.b)(this, uj, "f")
          }
          set coatRoughnessTexture(BB) {
            (0, iB.d)(this, uj, BB, "f")
          }
          get coatRoughnessAnisotropy() {
            return (0, iB.b)(this, Uj, "f")
          }
          set coatRoughnessAnisotropy(BB) {
            (0, iB.d)(this, Uj, BB, "f")
          }
          get coatRoughnessAnisotropyTexture() {
            return (0, iB.b)(this, Jj, "f")
          }
          set coatRoughnessAnisotropyTexture(BB) {
            (0, iB.d)(this, Jj, BB, "f")
          }
          get coatIor() {
            return (0, iB.b)(this, mj, "f")
          }
          set coatIor(BB) {
            (0, iB.d)(this, mj, BB, "f")
          }
          get coatDarkening() {
            return (0, iB.b)(this, yj, "f")
          }
          set coatDarkening(BB) {
            (0, iB.d)(this, yj, BB, "f")
          }
          get coatDarkeningTexture() {
            return (0, iB.b)(this, kj, "f")
          }
          set coatDarkeningTexture(BB) {
            (0, iB.d)(this, kj, BB, "f")
          }
          get fuzzWeight() {
            return (0, iB.b)(this, Gj, "f")
          }
          set fuzzWeight(BB) {
            (0, iB.d)(this, Gj, BB, "f")
          }
          get fuzzWeightTexture() {
            return (0, iB.b)(this, Lj, "f")
          }
          set fuzzWeightTexture(BB) {
            (0, iB.d)(this, Lj, BB, "f")
          }
          get fuzzColor() {
            return (0, iB.b)(this, gj, "f")
          }
          set fuzzColor(BB) {
            (0, iB.d)(this, gj, BB, "f")
          }
          get fuzzColorTexture() {
            return (0, iB.b)(this, tj, "f")
          }
          set fuzzColorTexture(BB) {
            (0, iB.d)(this, tj, BB, "f")
          }
          get fuzzRoughness() {
            return (0, iB.b)(this, Sj, "f")
          }
          set fuzzRoughness(BB) {
            (0, iB.d)(this, Sj, BB, "f")
          }
          get fuzzRoughnessTexture() {
            return (0, iB.b)(this, ij, "f")
          }
          set fuzzRoughnessTexture(BB) {
            (0, iB.d)(this, ij, BB, "f")
          }
          get geometryThinWalled() {
            return (0, iB.b)(this, qj, "f")
          }
          set geometryThinWalled(BB) {
            (0, iB.d)(this, qj, BB, "f")
          }
          get geometryNormalTexture() {
            return (0, iB.b)(this, fj, "f")
          }
          set geometryNormalTexture(BB) {
            (0, iB.d)(this, fj, BB, "f")
          }
          get geometryTangent() {
            return (0, iB.b)(this, oj, "f")
          }
          set geometryTangent(BB) {
            (0, iB.d)(this, oj, BB, "f")
          }
          get geometryTangentAngle() {
            return Math.atan2(this.geometryTangent.y, this.geometryTangent.x)
          }
          set geometryTangentAngle(BB) {
            this.geometryTangent = new AB.i(Math.cos(BB), Math.sin(BB))
          }
          get geometryTangentTexture() {
            return (0, iB.b)(this, Hj, "f")
          }
          set geometryTangentTexture(BB) {
            (0, iB.d)(this, Hj, BB, "f")
          }
          get geometryCoatNormalTexture() {
            return (0, iB.b)(this, Dj, "f")
          }
          set geometryCoatNormalTexture(BB) {
            (0, iB.d)(this, Dj, BB, "f")
          }
          get geometryCoatTangent() {
            return (0, iB.b)(this, Fj, "f")
          }
          set geometryCoatTangent(BB) {
            (0, iB.d)(this, Fj, BB, "f")
          }
          get geometryCoatTangentAngle() {
            return Math.atan2(this.geometryCoatTangent.y, this.geometryCoatTangent.x)
          }
          set geometryCoatTangentAngle(BB) {
            this.geometryCoatTangent = new AB.i(Math.cos(BB), Math.sin(BB))
          }
          get geometryCoatTangentTexture() {
            return (0, iB.b)(this, Yj, "f")
          }
          set geometryCoatTangentTexture(BB) {
            (0, iB.d)(this, Yj, BB, "f")
          }
          get geometryOpacity() {
            return (0, iB.b)(this, Vj, "f")
          }
          set geometryOpacity(BB) {
            (0, iB.d)(this, Vj, BB, "f")
          }
          get geometryOpacityTexture() {
            return (0, iB.b)(this, hj, "f")
          }
          set geometryOpacityTexture(BB) {
            (0, iB.d)(this, hj, BB, "f")
          }
          get geometryThickness() {
            return (0, iB.b)(this, Xj, "f")
          }
          set geometryThickness(BB) {
            (0, iB.d)(this, Xj, BB, "f")
          }
          get geometryThicknessTexture() {
            return (0, iB.b)(this, Zj, "f")
          }
          set geometryThicknessTexture(BB) {
            (0, iB.d)(this, Zj, BB, "f")
          }
          get emissionLuminance() {
            return (0, iB.b)(this, Aj, "f")
          }
          set emissionLuminance(BB) {
            (0, iB.d)(this, Aj, BB, "f")
          }
          get emissionColor() {
            return (0, iB.b)(this, Tj, "f")
          }
          set emissionColor(BB) {
            (0, iB.d)(this, Tj, BB, "f")
          }
          get emissionColorTexture() {
            return (0, iB.b)(this, Wj, "f")
          }
          set emissionColorTexture(BB) {
            (0, iB.d)(this, Wj, BB, "f")
          }
          get thinFilmWeight() {
            return (0, iB.b)(this, lj, "f")
          }
          set thinFilmWeight(BB) {
            (0, iB.d)(this, lj, BB, "f")
          }
          get thinFilmWeightTexture() {
            return (0, iB.b)(this, Cj, "f")
          }
          set thinFilmWeightTexture(BB) {
            (0, iB.d)(this, Cj, BB, "f")
          }
          get thinFilmThickness() {
            return (0, iB.b)(this, cj, "f")
          }
          set thinFilmThickness(BB) {
            (0, iB.d)(this, cj, BB, "f")
          }
          get thinFilmThicknessMin() {
            return (0, iB.b)(this, Rj, "f")
          }
          set thinFilmThicknessMin(BB) {
            (0, iB.d)(this, Rj, BB, "f")
          }
          get thinFilmThicknessTexture() {
            return (0, iB.b)(this, Oj, "f")
          }
          set thinFilmThicknessTexture(BB) {
            (0, iB.d)(this, Oj, BB, "f")
          }
          get thinFilmIor() {
            return (0, iB.b)(this, Bz, "f")
          }
          set thinFilmIor(BB) {
            (0, iB.d)(this, Bz, BB, "f")
          }
          get ambientOcclusionTexture() {
            return (0, iB.b)(this, jz, "f")
          }
          set ambientOcclusionTexture(BB) {
            (0, iB.d)(this, jz, BB, "f")
          }
          get sssQuality() {
            return this._sssQuality
          }
          set sssQuality(BB) {
            this._sssQuality !== BB && (this._sssQuality = BB, this.DjB(1))
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
            return (0, iB.b)(this, zz, "f")
          }
          set directIntensity(BB) {
            (0, iB.d)(this, zz, BB, "f")
          }
          get environmentIntensity() {
            return (0, iB.b)(this, Qz, "f")
          }
          set environmentIntensity(BB) {
            (0, iB.d)(this, Qz, BB, "f")
          }
          get useSpecularWeightFromTextureAlpha() {
            return (0, iB.b)(this, nz, "f")
          }
          set useSpecularWeightFromTextureAlpha(BB) {
            (0, iB.d)(this, nz, BB, "f")
          }
          get forceAlphaTest() {
            return (0, iB.b)(this, dz, "f")
          }
          set forceAlphaTest(BB) {
            (0, iB.d)(this, dz, BB, "f")
          }
          get alphaCutOff() {
            return (0, iB.b)(this, Iz, "f")
          }
          set alphaCutOff(BB) {
            (0, iB.d)(this, Iz, BB, "f")
          }
          get useAmbientOcclusionFromMetallicTextureRed() {
            return (0, iB.b)(this, Nz, "f")
          }
          set useAmbientOcclusionFromMetallicTextureRed(BB) {
            (0, iB.d)(this, Nz, BB, "f")
          }
          get useAmbientInGrayScale() {
            return (0, iB.b)(this, uz, "f")
          }
          set useAmbientInGrayScale(BB) {
            (0, iB.d)(this, uz, BB, "f")
          }
          get hasTransparency() {
            return this.subsurfaceWeight > 0 || this.transmissionWeight > 0
          }
          get hasScattering() {
            return this.transmissionWeight > 0 && this.transmissionDepth > 0 && !this.transmissionScatter.equals(xB.d.BlackReadOnly) || this.subsurfaceWeight > 0
          }
          get usePhysicalLightFalloff() {
            return this._lightFalloff === dB.b.LIGHTFALLOFF_PHYSICAL
          }
          set usePhysicalLightFalloff(BB) {
            BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? dB.b.LIGHTFALLOFF_PHYSICAL : dB.b.LIGHTFALLOFF_STANDARD)
          }
          get useGLTFLightFalloff() {
            return this._lightFalloff === dB.b.LIGHTFALLOFF_GLTF
          }
          set useGLTFLightFalloff(BB) {
            BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? dB.b.LIGHTFALLOFF_GLTF : dB.b.LIGHTFALLOFF_STANDARD)
          }
          get useObjectSpaceNormalMap() {
            return (0, iB.b)(this, Uz, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, iB.d)(this, Uz, BB, "f")
          }
          get useParallax() {
            return (0, iB.b)(this, az, "f")
          }
          set useParallax(BB) {
            (0, iB.d)(this, az, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, iB.b)(this, pz, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, iB.d)(this, pz, BB, "f")
          }
          get parallaxScaleBias() {
            return (0, iB.b)(this, rz, "f")
          }
          set parallaxScaleBias(BB) {
            (0, iB.d)(this, rz, BB, "f")
          }
          get disableLighting() {
            return (0, iB.b)(this, sz, "f")
          }
          set disableLighting(BB) {
            (0, iB.d)(this, sz, BB, "f")
          }
          get forceIrradianceInFragment() {
            return (0, iB.b)(this, Jz, "f")
          }
          set forceIrradianceInFragment(BB) {
            (0, iB.d)(this, Jz, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, iB.b)(this, mz, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, iB.d)(this, mz, BB, "f")
          }
          get invertNormalMapX() {
            return (0, iB.b)(this, yz, "f")
          }
          set invertNormalMapX(BB) {
            (0, iB.d)(this, yz, BB, "f")
          }
          get invertNormalMapY() {
            return (0, iB.b)(this, kz, "f")
          }
          set invertNormalMapY(BB) {
            (0, iB.d)(this, kz, BB, "f")
          }
          get twoSidedLighting() {
            return (0, iB.b)(this, Gz, "f")
          }
          set twoSidedLighting(BB) {
            (0, iB.d)(this, Gz, BB, "f")
          }
          get useAlphaFresnel() {
            return (0, iB.b)(this, Lz, "f")
          }
          set useAlphaFresnel(BB) {
            (0, iB.d)(this, Lz, BB, "f")
          }
          get useLinearAlphaFresnel() {
            return (0, iB.b)(this, gz, "f")
          }
          set useLinearAlphaFresnel(BB) {
            (0, iB.d)(this, gz, BB, "f")
          }
          get environmentBRDFTexture() {
            return (0, iB.b)(this, tz, "f")
          }
          set environmentBRDFTexture(BB) {
            (0, iB.d)(this, tz, BB, "f")
          }
          get forceNormalForward() {
            return (0, iB.b)(this, Sz, "f")
          }
          set forceNormalForward(BB) {
            (0, iB.d)(this, Sz, BB, "f")
          }
          get enableSpecularAntiAliasing() {
            return (0, iB.b)(this, Mz, "f")
          }
          set enableSpecularAntiAliasing(BB) {
            (0, iB.d)(this, Mz, BB, "f")
          }
          get useHorizonOcclusion() {
            return (0, iB.b)(this, Ez, "f")
          }
          set useHorizonOcclusion(BB) {
            (0, iB.d)(this, Ez, BB, "f")
          }
          get useRadianceOcclusion() {
            return (0, iB.b)(this, iz, "f")
          }
          set useRadianceOcclusion(BB) {
            (0, iB.d)(this, iz, BB, "f")
          }
          get unlit() {
            return (0, iB.b)(this, qz, "f")
          }
          set unlit(BB) {
            (0, iB.d)(this, qz, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, iB.b)(this, fz, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, iB.d)(this, fz, BB, "f")
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
            this._refractionHighQualityBlur !== BB && (this._refractionHighQualityBlur = BB, this.DjB(1))
          }
          get realTimeFiltering() {
            return this._realTimeFiltering
          }
          set realTimeFiltering(BB) {
            this._realTimeFiltering = BB, this.DjB(1)
          }
          get realTimeFilteringQuality() {
            return this._realTimeFilteringQuality
          }
          set realTimeFilteringQuality(BB) {
            this._realTimeFilteringQuality = BB, this.DjB(1)
          }
          get fuzzSampleNumber() {
            return this._fuzzSampleNumber
          }
          set fuzzSampleNumber(BB) {
            this._fuzzSampleNumber = BB, this.DjB(1)
          }
          get canRenderToMRT() {
            return !0
          }
          get debugMode() {
            return (0, iB.b)(this, oz, "f")
          }
          set debugMode(BB) {
            (0, iB.d)(this, oz, BB, "f")
          }
          constructor(zB, qB) {
            super(zB, qB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), jB.set(this, ((0, iB.g)(this, Vn), (0, iB.g)(this, hn, void 0))), this._baseWeight = ((0, iB.g)(this, Xn), new xj("base_weight", 1, "vBaseWeight", 1)), QB.set(this, (0, iB.g)(this, Zn, void 0)), this._baseWeightTexture = ((0, iB.g)(this, An), new Kj("base_weight", "baseWeight", "BASE_WEIGHT")), nB.set(this, (0, iB.g)(this, Tn, void 0)), this._baseColor = ((0, iB.g)(this, Pn), new xj("base_color", xB.d.White(), "vBaseColor", 4)), IB.set(this, (0, iB.g)(this, Wn, void 0)), this._baseColorTexture = ((0, iB.g)(this, en), new Kj("base_color", "baseColor", "BASE_COLOR")), NB.set(this, (0, iB.g)(this, wn, void 0)), this._baseDiffuseRoughness = ((0, iB.g)(this, xn), new xj("base_diffuse_roughness", 0, "vBaseDiffuseRoughness", 1)), uB.set(this, (0, iB.g)(this, Kn, void 0)), this._baseDiffuseRoughnessTexture = ((0, iB.g)(this, Cn), new Kj("base_diffuse_roughness", "baseDiffuseRoughness", "BASE_DIFFUSE_ROUGHNESS")), UB.set(this, (0, iB.g)(this, cn, void 0)), this._baseMetalness = ((0, iB.g)(this, bn), new xj("base_metalness", 0, "vReflectanceInfo", 4, 0)), aB.set(this, (0, iB.g)(this, vn, void 0)), this._baseMetalnessTexture = ((0, iB.g)(this, Rn), new Kj("base_metalness", "baseMetalness", "BASE_METALNESS")), pB.set(this, (0, iB.g)(this, On, void 0)), this._specularWeight = ((0, iB.g)(this, Bd), new xj("specular_weight", 1, "vReflectanceInfo", 4, 3)), rB.set(this, (0, iB.g)(this, jd, void 0)), this._specularWeightTexture = ((0, iB.g)(this, zd), new Kj("specular_weight", "specularWeight", "SPECULAR_WEIGHT")), sB.set(this, (0, iB.g)(this, Qd, void 0)), this._specularColor = ((0, iB.g)(this, nd), new xj("specular_color", xB.d.White(), "vSpecularColor", 4)), JB.set(this, (0, iB.g)(this, dd, void 0)), this._specularColorTexture = ((0, iB.g)(this, Id), new Kj("specular_color", "specularColor", "SPECULAR_COLOR")), mB.set(this, (0, iB.g)(this, Nd, void 0)), this._specularRoughness = ((0, iB.g)(this, ud), new xj("specular_roughness", .3, "vReflectanceInfo", 4, 1)), yB.set(this, (0, iB.g)(this, Ud, void 0)), this._specularRoughnessTexture = ((0, iB.g)(this, pd), new Kj("specular_roughness", "specularRoughness", "SPECULAR_ROUGHNESS")), kB.set(this, (0, iB.g)(this, rd, void 0)), this._specularRoughnessAnisotropy = ((0, iB.g)(this, sd), new xj("specular_roughness_anisotropy", 0, "vSpecularAnisotropy", 3, 2)), GB.set(this, (0, iB.g)(this, Jd, void 0)), this._specularRoughnessAnisotropyTexture = ((0, iB.g)(this, md), new Kj("specular_roughness_anisotropy", "specularRoughnessAnisotropy", "SPECULAR_ROUGHNESS_ANISOTROPY")), LB.set(this, (0, iB.g)(this, yd, void 0)), this._specularIor = ((0, iB.g)(this, kd), new xj("specular_ior", 1.5, "vReflectanceInfo", 4, 2)), gB.set(this, (0, iB.g)(this, Gd, void 0)), this._transmissionWeight = ((0, iB.g)(this, Ld), new xj("transmission_weight", 0, "vTransmissionWeight", 1)), tB.set(this, (0, iB.g)(this, gd, void 0)), this._transmissionWeightTexture = ((0, iB.g)(this, td), new Kj("transmission_weight", "transmissionWeight", "TRANSMISSION_WEIGHT")), SB.set(this, (0, iB.g)(this, Sd, void 0)), this._transmissionColor = ((0, iB.g)(this, Md), new xj("transmission_color", xB.d.White(), "vTransmissionColor", 3, 0)), MB.set(this, (0, iB.g)(this, Ed, void 0)), this._transmissionColorTexture = ((0, iB.g)(this, qd), new Kj("transmission_color", "transmissionColor", "TRANSMISSION_COLOR")), EB.set(this, (0, iB.g)(this, fd, void 0)), this._transmissionDepth = ((0, iB.g)(this, od), new xj("transmission_depth", 0, "vTransmissionDepth", 1, 0)), DB.set(this, (0, iB.g)(this, Hd, void 0)), this._transmissionDepthTexture = ((0, iB.g)(this, Dd), new Kj("transmission_depth", "transmissionDepth", "TRANSMISSION_DEPTH")), FB.set(this, (0, iB.g)(this, Fd, void 0)), this._transmissionScatter = ((0, iB.g)(this, Yd), new xj("transmission_scatter", xB.d.Black(), "vTransmissionScatter", 3, 0)), YB.set(this, (0, iB.g)(this, Vd, void 0)), this._transmissionScatterTexture = ((0, iB.g)(this, hd), new Kj("transmission_scatter", "transmissionScatter", "TRANSMISSION_SCATTER")), VB.set(this, (0, iB.g)(this, Xd, void 0)), this._transmissionScatterAnisotropy = ((0, iB.g)(this, Zd), new xj("transmission_scatter_anisotropy", 0, "vTransmissionScatterAnisotropy", 1, 0)), ZB.set(this, (0, iB.g)(this, Ad, void 0)), this._transmissionDispersionScale = ((0, iB.g)(this, Td), new xj("transmission_dispersion_scale", 0, "vTransmissionDispersionScale", 1, 0)), PB.set(this, (0, iB.g)(this, Pd, void 0)), this._transmissionDispersionScaleTexture = ((0, iB.g)(this, Wd), new Kj("transmission_dispersion_scale", "transmissionDispersionScale", "TRANSMISSION_DISPERSION_SCALE")), WB.set(this, (0, iB.g)(this, ed, void 0)), this._transmissionDispersionAbbeNumber = ((0, iB.g)(this, ld), new xj("transmission_dispersion_abbe_number", 20, "vTransmissionDispersionAbbeNumber", 1, 0)), eB.set(this, (0, iB.g)(this, wd, void 0)), this._subsurfaceWeight = ((0, iB.g)(this, xd), new xj("subsurface_weight", 0, "vSubsurfaceWeight", 1, 0, "SUBSURFACE_SLAB")), lB.set(this, (0, iB.g)(this, Kd, void 0)), this._subsurfaceWeightTexture = ((0, iB.g)(this, Cd), new Kj("subsurface_weight", "subsurfaceWeight", "SUBSURFACE_WEIGHT")), KB.set(this, (0, iB.g)(this, cd, void 0)), this._subsurfaceColor = ((0, iB.g)(this, bd), new xj("subsurface_color", new xB.d(.8, .8, .8), "vSubsurfaceColor", 3, 0, "SUBSURFACE_SLAB")), cB.set(this, (0, iB.g)(this, vd, void 0)), this._subsurfaceColorTexture = ((0, iB.g)(this, Rd), new Kj("subsurface_color", "subsurfaceColor", "SUBSURFACE_COLOR")), OB.set(this, (0, iB.g)(this, Od, void 0)), this._subsurfaceRadius = ((0, iB.g)(this, BI), new xj("subsurface_radius", .1, "vSubsurfaceRadius", 1, 0, "SUBSURFACE_SLAB")), Bj.set(this, (0, iB.g)(this, jI, void 0)), this._subsurfaceRadiusScale = ((0, iB.g)(this, zI), new xj("subsurface_radius_scale", new xB.d(1, .5, .25), "vSubsurfaceRadiusScale", 3, 0, "SUBSURFACE_SLAB")), jj.set(this, (0, iB.g)(this, QI, void 0)), this._subsurfaceRadiusScaleTexture = ((0, iB.g)(this, nI), new Kj("subsurface_radius_scale", "subsurfaceRadiusScale", "SUBSURFACE_RADIUS_SCALE")), zj.set(this, (0, iB.g)(this, dI, void 0)), this._subsurfaceScatterAnisotropy = ((0, iB.g)(this, II), new xj("subsurface_scatter_anisotropy", 0, "vSubsurfaceScatterAnisotropy", 1, 0, "SUBSURFACE_SLAB")), Qj.set(this, (0, iB.g)(this, NI, void 0)), this._coatWeight = ((0, iB.g)(this, uI), new xj("coat_weight", 0, "vCoatWeight", 1, 0)), nj.set(this, (0, iB.g)(this, UI, void 0)), this._coatWeightTexture = ((0, iB.g)(this, aI), new Kj("coat_weight", "coatWeight", "COAT_WEIGHT")), dj.set(this, (0, iB.g)(this, pI, void 0)), this._coatColor = ((0, iB.g)(this, rI), new xj("coat_color", xB.d.White(), "vCoatColor", 3, 0)), Ij.set(this, (0, iB.g)(this, sI, void 0)), this._coatColorTexture = ((0, iB.g)(this, JI), new Kj("coat_color", "coatColor", "COAT_COLOR")), Nj.set(this, (0, iB.g)(this, mI, void 0)), this._coatRoughness = ((0, iB.g)(this, yI), new xj("coat_roughness", 0, "vCoatRoughness", 1, 0)), uj.set(this, (0, iB.g)(this, kI, void 0)), this._coatRoughnessTexture = ((0, iB.g)(this, GI), new Kj("coat_roughness", "coatRoughness", "COAT_ROUGHNESS")), Uj.set(this, (0, iB.g)(this, LI, void 0)), this._coatRoughnessAnisotropy = ((0, iB.g)(this, gI), new xj("coat_roughness_anisotropy", 0, "vCoatRoughnessAnisotropy", 1)), Jj.set(this, (0, iB.g)(this, tI, void 0)), this._coatRoughnessAnisotropyTexture = ((0, iB.g)(this, SI), new Kj("coat_roughness_anisotropy", "coatRoughnessAnisotropy", "COAT_ROUGHNESS_ANISOTROPY")), mj.set(this, (0, iB.g)(this, MI, void 0)), this._coatIor = ((0, iB.g)(this, EI), new xj("coat_ior", 1.5, "vCoatIor", 1, 0)), yj.set(this, (0, iB.g)(this, iI, void 0)), this._coatDarkening = ((0, iB.g)(this, qI), new xj("coat_darkening", 1, "vCoatDarkening", 1, 0)), kj.set(this, (0, iB.g)(this, fI, void 0)), this._coatDarkeningTexture = ((0, iB.g)(this, oI), new Kj("coat_darkening", "coatDarkening", "COAT_DARKENING")), this.useCoatRoughnessFromWeightTexture = !1, Gj.set(this, (0, iB.g)(this, HI, void 0)), this._fuzzWeight = ((0, iB.g)(this, DI), new xj("fuzz_weight", 0, "vFuzzWeight", 1, 0)), Lj.set(this, (0, iB.g)(this, FI, void 0)), this._fuzzWeightTexture = ((0, iB.g)(this, YI), new Kj("fuzz_weight", "fuzzWeight", "FUZZ_WEIGHT")), gj.set(this, (0, iB.g)(this, VI, void 0)), this._fuzzColor = ((0, iB.g)(this, hI), new xj("fuzz_color", xB.d.White(), "vFuzzColor", 3, 0)), tj.set(this, (0, iB.g)(this, XI, void 0)), this._fuzzColorTexture = ((0, iB.g)(this, ZI), new Kj("fuzz_color", "fuzzColor", "FUZZ_COLOR")), Sj.set(this, (0, iB.g)(this, AI, void 0)), this._fuzzRoughness = ((0, iB.g)(this, TI), new xj("fuzz_roughness", .5, "vFuzzRoughness", 1, 0)), ij.set(this, (0, iB.g)(this, PI, void 0)), this._fuzzRoughnessTexture = ((0, iB.g)(this, WI), new Kj("fuzz_roughness", "fuzzRoughness", "FUZZ_ROUGHNESS")), qj.set(this, (0, iB.g)(this, eI, void 0)), this._geometryThinWalled = ((0, iB.g)(this, lI), new xj("geometry_thin_walled", 0, "vGeometryThinWalled", 1, 0)), fj.set(this, (0, iB.g)(this, wI, void 0)), this._geometryNormalTexture = ((0, iB.g)(this, xI), new Kj("geometry_normal", "geometryNormal", "GEOMETRY_NORMAL")), oj.set(this, (0, iB.g)(this, KI, void 0)), this._geometryTangent = ((0, iB.g)(this, CI), new xj("geometry_tangent", new AB.i(1, 0), "vSpecularAnisotropy", 3, 0)), Hj.set(this, (0, iB.g)(this, cI, void 0)), this._geometryTangentTexture = ((0, iB.g)(this, bI), new Kj("geometry_tangent", "geometryTangent", "GEOMETRY_TANGENT")), Dj.set(this, (0, iB.g)(this, vI, void 0)), this._geometryCoatNormalTexture = ((0, iB.g)(this, RI), new Kj("geometry_coat_normal", "geometryCoatNormal", "GEOMETRY_COAT_NORMAL")), Fj.set(this, (0, iB.g)(this, OI, void 0)), this._geometryCoatTangent = ((0, iB.g)(this, BN), new xj("geometry_coat_tangent", new AB.i(1, 0), "vGeometryCoatTangent", 2, 0)), Yj.set(this, (0, iB.g)(this, jN, void 0)), this._geometryCoatTangentTexture = ((0, iB.g)(this, zN), new Kj("geometry_coat_tangent", "geometryCoatTangent", "GEOMETRY_COAT_TANGENT")), Vj.set(this, (0, iB.g)(this, QN, void 0)), this._geometryOpacity = ((0, iB.g)(this, nN), new xj("geometry_opacity", 1, "vBaseColor", 4, 3)), hj.set(this, (0, iB.g)(this, dN, void 0)), this._geometryOpacityTexture = ((0, iB.g)(this, IN), new Kj("geometry_opacity", "geometryOpacity", "GEOMETRY_OPACITY")), Xj.set(this, (0, iB.g)(this, NN, void 0)), this._geometryThickness = ((0, iB.g)(this, uN), new xj("geometry_thickness", 0, "vGeometryThickness", 1, 0)), Zj.set(this, (0, iB.g)(this, UN, void 0)), this._geometryThicknessTexture = ((0, iB.g)(this, aN), new Kj("geometry_thickness", "geometryThickness", "GEOMETRY_THICKNESS")), Aj.set(this, (0, iB.g)(this, pN, void 0)), this._emissionLuminance = ((0, iB.g)(this, rN), new xj("emission_luminance", 1, "vLightingIntensity", 4, 1)), Tj.set(this, (0, iB.g)(this, sN, void 0)), this._emissionColor = ((0, iB.g)(this, JN), new xj("emission_color", xB.d.Black(), "vEmissionColor", 3)), Wj.set(this, (0, iB.g)(this, mN, void 0)), this._emissionColorTexture = ((0, iB.g)(this, yN), new Kj("emission_color", "emissionColor", "EMISSION_COLOR")), lj.set(this, (0, iB.g)(this, kN, void 0)), this._thinFilmWeight = ((0, iB.g)(this, GN), new xj("thin_film_weight", 0, "vThinFilmWeight", 1, 0)), Cj.set(this, (0, iB.g)(this, LN, void 0)), this._thinFilmWeightTexture = ((0, iB.g)(this, gN), new Kj("thin_film_weight", "thinFilmWeight", "THIN_FILM_WEIGHT")), cj.set(this, (0, iB.g)(this, tN, void 0)), this._thinFilmThickness = ((0, iB.g)(this, SN), new xj("thin_film_thickness", .5, "vThinFilmThickness", 2, 0)), Rj.set(this, (0, iB.g)(this, MN, void 0)), this._thinFilmThicknessMin = ((0, iB.g)(this, EN), new xj("thin_film_thickness_min", 0, "vThinFilmThickness", 2, 1)), Oj.set(this, (0, iB.g)(this, iN, void 0)), this._thinFilmThicknessTexture = ((0, iB.g)(this, qN), new Kj("thin_film_thickness", "thinFilmThickness", "THIN_FILM_THICKNESS")), Bz.set(this, (0, iB.g)(this, fN, void 0)), this._thinFilmIor = ((0, iB.g)(this, oN), new xj("thin_film_ior", 1.4, "vThinFilmIor", 1, 0)), jz.set(this, (0, iB.g)(this, HN, void 0)), this._ambientOcclusionTexture = ((0, iB.g)(this, DN), new Kj("ambient_occlusion", "ambientOcclusion", "AMBIENT_OCCLUSION")), this._sssQuality = BB.SSS_QUALITY_MEDIUM, this._sssIrradianceTexture = null, this._sssDepthTexture = null, this._uniformsList = {}, this._uniformsArray = [], this._samplersList = {}, this._samplerDefines = {}, zz.set(this, (0, iB.g)(this, FN, 1)), Qz.set(this, ((0, iB.g)(this, YN), (0, iB.g)(this, VN, 1))), nz.set(this, ((0, iB.g)(this, hN), (0, iB.g)(this, XN, !1))), dz.set(this, ((0, iB.g)(this, ZN), (0, iB.g)(this, AN, !1))), Iz.set(this, ((0, iB.g)(this, TN), (0, iB.g)(this, PN, .4))), Nz.set(this, ((0, iB.g)(this, WN), (0, iB.g)(this, eN, !1))), uz.set(this, ((0, iB.g)(this, lN), (0, iB.g)(this, wN, !1))), Uz.set(this, ((0, iB.g)(this, xN), (0, iB.g)(this, KN, !1))), az.set(this, ((0, iB.g)(this, CN), (0, iB.g)(this, cN, !1))), pz.set(this, ((0, iB.g)(this, bN), (0, iB.g)(this, vN, !1))), rz.set(this, ((0, iB.g)(this, RN), (0, iB.g)(this, ON, .05))), sz.set(this, ((0, iB.g)(this, Bu), (0, iB.g)(this, ju, !1))), Jz.set(this, ((0, iB.g)(this, zu), (0, iB.g)(this, Qu, !1))), mz.set(this, ((0, iB.g)(this, nu), (0, iB.g)(this, du, 4))), yz.set(this, ((0, iB.g)(this, Iu), (0, iB.g)(this, Nu, !1))), kz.set(this, ((0, iB.g)(this, uu), (0, iB.g)(this, Uu, !1))), Gz.set(this, ((0, iB.g)(this, au), (0, iB.g)(this, pu, !1))), Lz.set(this, ((0, iB.g)(this, ru), (0, iB.g)(this, su, !1))), gz.set(this, ((0, iB.g)(this, Ju), (0, iB.g)(this, mu, !1))), tz.set(this, ((0, iB.g)(this, yu), (0, iB.g)(this, ku, null))), Sz.set(this, ((0, iB.g)(this, Gu), (0, iB.g)(this, Lu, !1))), Mz.set(this, ((0, iB.g)(this, gu), (0, iB.g)(this, tu, !1))), Ez.set(this, ((0, iB.g)(this, Su), (0, iB.g)(this, Mu, !0))), iz.set(this, ((0, iB.g)(this, Eu), (0, iB.g)(this, iu, !0))), qz.set(this, ((0, iB.g)(this, qu), (0, iB.g)(this, fu, !1))), fz.set(this, ((0, iB.g)(this, ou), (0, iB.g)(this, Hu, !1))), this._lightingInfos = ((0, iB.g)(this, Du), new AB.n(this.directIntensity, 1, this.environmentIntensity, 1)), this._radianceTexture = null, this._useSpecularWeightFromAlpha = !1, this._useSpecularWeightFromSpecularColorTexture = !1, this._useSpecularRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessAnisotropyFromTangentTexture = !1, this._useCoatRoughnessFromGreenChannel = !1, this._useGltfStyleAnisotropy = !1, this._useFuzzRoughnessFromTextureAlpha = !1, this._useSubsurfaceWeightFromTextureAlpha = !1, this._useHorizonOcclusion = !0, this._useRadianceOcclusion = !0, this._useAlphaFromBaseColorTexture = !1, this._useAmbientOcclusionFromMetallicTextureRed = !1, this._useRoughnessFromMetallicTextureGreen = !1, this._useMetallicFromMetallicTextureBlue = !1, this._useThinFilmThicknessFromTextureGreen = !1, this._useGeometryThicknessFromGreenChannel = !1, this._lightFalloff = dB.b.LIGHTFALLOFF_PHYSICAL, this._useObjectSpaceNormalMap = !1, this._useParallax = !1, this._useParallaxOcclusion = !1, this._parallaxScaleBias = .05, this._disableLighting = !1, this._maxSimultaneousLights = 4, this._invertNormalMapX = !1, this._invertNormalMapY = !1, this._twoSidedLighting = !1, this._alphaCutOff = .4, this._useAlphaFresnel = !1, this._useLinearAlphaFresnel = !1, this._environmentBRDFTexture = null, this._environmentFuzzBRDFTexture = null, this._backgroundRefractionTexture = null, this._refractionHighQualityBlur = !0, this._forceIrradianceInFragment = !1, this._realTimeFiltering = !1, this._realTimeFilteringQuality = 8, this._fuzzSampleNumber = 4, this._forceNormalForward = !1, this._enableSpecularAntiAliasing = !1, this._renderTargets = new oB.i(16), this._unlit = !1, this._applyDecalMapAfterDetailMap = !1, this._debugMode = 0, this._breakShaderLoadedCheck = !1, this._vertexPullingMetadata = null, oz.set(this, (0, iB.g)(this, Fu, 0)), this.debugLimit = ((0, iB.g)(this, Yu), -1), this.debugFactor = 1, this._cacheHasRenderTargetTextures = !1, this._transparencyMode = dB.b.MATERIAL_OPAQUE, this.aY() && !this.aY()?.wJ().isWebGPU && this.aY().wJ().gm < 2 && fB.c.Error("OpenPBRMaterial: WebGL 2.0 or above is required for this material."), BB._noiseTextures[this.aY().uniqueId] || (BB._noiseTextures[this.aY().uniqueId] = new HB.i(Ej.i.GetAssetUrl("https://assets.babylonjs.com/core/blue_noise/blue_noise_rgb.png"), this.aY(), !1, !0, 1), this.aY().pY.addOnce((() => {
              BB._noiseTextures[this.aY().uniqueId]?.dispose(), delete BB._noiseTextures[this.aY().uniqueId]
            }))), this._attachImageProcessingConfiguration(null), this.getRenderTargetTextures = () => (this._renderTargets.reset(), bB.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget && this._renderTargets.push(this._radianceTexture), bB.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget && this._renderTargets.push(this._backgroundRefractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets), this._environmentBRDFTexture = XB(this.aY()), this._environmentFuzzBRDFTexture = hB(this.aY()), this.prePassConfiguration = new wB.e, this._propertyList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const jB = this[BB];
              jB instanceof xj && (this._propertyList[BB] = jB)
            }
            Object.keys(this._propertyList).forEach((BB => {
              const jB = this._propertyList[BB];
              let zB = this._uniformsList[jB.targetUniformName];
              zB ? zB.numComponents !== jB.targetUniformComponentNum ? fB.c.Error(`Uniform ${jB.targetUniformName} already exists of size ${zB.numComponents}, but trying to set it to ${jB.targetUniformComponentNum}.`) : zB.requiredDefine !== jB.requiredDefine && (zB.requiredDefine = void 0) : (zB = new wj(jB.targetUniformName, jB.targetUniformComponentNum), zB.requiredDefine = jB.requiredDefine, this._uniformsList[jB.targetUniformName] = zB), "" === zB.firstLinkedKey && (zB.firstLinkedKey = jB.name), zB.linkedProperties[jB.name] = jB
            })), this._uniformsArray = Object.values(this._uniformsList), this._samplersList = {};
            for (const BB of Object.getOwnPropertyNames(this)) {
              const jB = this[BB];
              jB instanceof Kj && (this._samplersList[BB] = jB)
            }
            for (const BB in this._samplersList) {
              const jB = this._samplersList[BB].textureDefine;
              this._samplerDefines[jB] = {
                type: "boolean",
                default: !1
              }, this._samplerDefines[jB + "DIRECTUV"] = {
                type: "number",
                default: 0
              }, this._samplerDefines[jB + "_GAMMA"] = {
                type: "boolean",
                default: !1
              }
            }
            this._baseWeight, this._baseWeightTexture, this._baseColor, this._baseColorTexture, this._baseDiffuseRoughness, this._baseDiffuseRoughnessTexture, this._baseMetalness, this._baseMetalnessTexture, this._specularWeight, this._specularWeightTexture, this._specularColor, this._specularColorTexture, this._specularRoughness, this._specularIor, this._specularRoughnessTexture, this._specularRoughnessAnisotropy, this._specularRoughnessAnisotropyTexture, this._transmissionWeight, this._transmissionWeightTexture, this._transmissionColor, this._transmissionColorTexture, this._transmissionDepth, this._transmissionDepthTexture, this._transmissionScatter, this._transmissionScatterTexture, this._transmissionScatterAnisotropy, this._transmissionDispersionScale, this._transmissionDispersionScaleTexture, this._transmissionDispersionAbbeNumber, this._subsurfaceWeight, this._subsurfaceWeightTexture, this._subsurfaceColor, this._subsurfaceColorTexture, this._subsurfaceRadius, this._subsurfaceRadiusScale, this._subsurfaceRadiusScaleTexture, this._subsurfaceScatterAnisotropy, this._coatWeight, this._coatWeightTexture, this._coatColor, this._coatColorTexture, this._coatRoughness, this._coatRoughnessTexture, this._coatRoughnessAnisotropy, this._coatRoughnessAnisotropyTexture, this._coatIor, this._coatDarkening, this._coatDarkeningTexture, this._fuzzWeight, this._fuzzWeightTexture, this._fuzzColor, this._fuzzColorTexture, this._fuzzRoughness, this._fuzzRoughnessTexture, this._geometryThinWalled, this._geometryNormalTexture, this._geometryTangent, this._geometryTangentTexture, this._geometryCoatNormalTexture, this._geometryCoatTangent, this._geometryCoatTangentTexture, this._geometryOpacity, this._geometryOpacityTexture, this._geometryThickness, this._geometryThicknessTexture, this._thinFilmWeight, this._thinFilmWeightTexture, this._thinFilmThickness, this._thinFilmThicknessMin, this._thinFilmThicknessTexture, this._thinFilmIor, this._emissionLuminance, this._emissionColor, this._emissionColorTexture, this._ambientOcclusionTexture
          }
          get hasRenderTargetTextures() {
            return !!(bB.d.ReflectionTextureEnabled && this._radianceTexture && this._radianceTexture.isRenderTarget) || (!!(bB.d.RefractionTextureEnabled && this._backgroundRefractionTexture && this._backgroundRefractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
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
            return this._hasAlphaChannel() && this._transparencyMode !== dB.b.MATERIAL_OPAQUE && !this.geometryOpacityTexture
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
          clone(jB) {
            let zB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const nB = Mj.b.Clone((() => new BB(jB, this.aY())), this, {
              cloneTexturesOnlyOnce: zB
            });
            return nB.id = jB, nB.name = jB, this.stencil.copyTo(nB.stencil), this._clonePlugins(nB, QB), nB
          }
          serialize() {
            const BB = super.serialize();
            return BB.customType = "BABYLON.OpenPBRMaterial", BB
          }
          static Parse(jB, zB, QB) {
            const nB = Mj.b.Parse((() => new BB(jB.name, zB)), jB, zB, QB);
            return jB.stencil && nB.stencil.parse(jB.stencil, zB, QB), dB.b._ParsePlugins(jB, nB, zB, QB), nB
          }
          forceCompilation(BB, jB, zB) {
            const QB = {
              clipPlane: !1,
              useInstances: !1,
              ...zB
            };
            this._uniformBufferLayoutBuilt || this.buildUniformLayout(), this._callbackPluginEventGeneric(4, this._eventInfo);
            (() => {
              if (this._breakShaderLoadedCheck) return;
              const zB = new bj({
                  ...this._eventInfo.defineNames || {},
                  ...this._samplerDefines || {}
                }),
                nB = this._prepareEffect(BB, BB, zB, void 0, void 0, QB.useInstances, QB.clipPlane);
              this._onEffectCreatedObservable && (ej.effect = nB, ej.subMesh = null, this._onEffectCreatedObservable.notifyObservers(ej)), nB.isReady() ? jB && jB(this) : nB.onCompileObservable.add((() => {
                jB && jB(this)
              }))
            })()
          }
          isReadyForSubMesh(jB, zB, QB) {
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const nB = zB._drawWrapper;
            if (nB.effect && this.isFrozen && nB._wasPreviouslyReady && nB._wasPreviouslyUsingInstances === QB) return !0;
            zB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zB.materialDefines = new bj({
              ...this._eventInfo.defineNames || {},
              ...this._samplerDefines || {}
            }));
            const dB = zB.materialDefines;
            if (this._isReadyForSubMesh(zB)) return !0;
            const IB = this.aY(),
              NB = IB.wJ();
            if (dB._areTexturesDirty && (this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, IB.texturesEnabled)) {
              for (const BB in this._samplersList) {
                const jB = this._samplersList[BB];
                if (jB.value && !jB.value.isReadyOrNotBlocking()) return !1
              }
              const jB = this._getRadianceTexture();
              if (jB && bB.d.ReflectionTextureEnabled) {
                if (!jB.isReadyOrNotBlocking()) return !1;
                if (jB.irradianceTexture) {
                  if (!jB.irradianceTexture.isReadyOrNotBlocking()) return !1
                } else if (!jB.sphericalPolynomial && jB.getInternalTexture()?._sphericalPolynomialPromise) return !1
              }
              if (this._environmentBRDFTexture && bB.d.ReflectionTextureEnabled && !this._environmentBRDFTexture.isReady()) return !1;
              if (this._environmentFuzzBRDFTexture && bB.d.ReflectionTextureEnabled && !this._environmentFuzzBRDFTexture.isReady()) return !1;
              if (this._backgroundRefractionTexture && bB.d.RefractionTextureEnabled && !this._backgroundRefractionTexture.isReadyOrNotBlocking()) return !1;
              if (BB._noiseTextures[IB.uniqueId] && !BB._noiseTextures[IB.uniqueId].isReady()) return !1;
              if (this._sssIrradianceTexture && this._sssDepthTexture) {
                if (!this._sssIrradianceTexture.isReady()) return !1;
                if (!this._sssDepthTexture.isReady()) return !1
              }
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = dB, this._eventInfo.subMesh = zB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (dB._areImageProcessingDirty && this._imageProcessingConfiguration && !this._imageProcessingConfiguration.isReady()) return !1;
            if (dB.AREALIGHTUSED)
              for (let BB = 0; BB < jB.lightSources.length; BB++)
                if (!jB.lightSources[BB]._isReady()) return !1;
            if (NB.getCaps().standardDerivatives || jB.isVerticesDataPresent(TB.l.NormalKind) || (jB.createNormals(!0), fB.c.Warn("OpenPBRMaterial: Normals have been created for the mesh: " + jB.name)), !(0, RB.c)(IB, jB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            const uB = zB.effect,
              UB = dB._areLightsDisposed,
              aB = this._prepareEffect(jB, zB.getRenderingMesh(), dB, this.onCompiled, this.onError, QB, null);
            let pB = !1;
            if (aB)
              if (this._onEffectCreatedObservable && (ej.effect = aB, ej.subMesh = zB, this._onEffectCreatedObservable.notifyObservers(ej)), this.allowShaderHotSwapping && uB && !aB.isReady()) {
                if (dB.markAsUnprocessed(), pB = this.isFrozen, UB) return dB._areLightsDisposed = !0, !1
              } else IB.resetCachedMaterial(), zB.setEffect(aB, dB, this._materialContext);
            return !(!zB.effect || !zB.effect.isReady()) && (dB._renderId = IB.getRenderId(), nB._wasPreviouslyReady = !pB, nB._wasPreviouslyUsingInstances = !!QB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("vLightingIntensity", 4), BB.addUniform("pointSize", 1), BB.addUniform("vDebugMode", 2), BB.addUniform("renderTargetSize", 2), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), BB.addUniform("backgroundRefractionMatrix", 16), BB.addUniform("vBackgroundRefractionInfos", 3), (0, RB.nb)(BB, !0, !0, !0, !0, !0), Object.values(this._uniformsList).forEach((jB => {
              BB.addUniform(jB.name, jB.numComponents)
            })), Object.values(this._samplersList).forEach((jB => {
              BB.addUniform(jB.samplerInfoName, 2), BB.addUniform(jB.samplerMatrixName, 16)
            })), super.buildUniformLayout()
          }
          bindPropertiesForSubMesh(BB, jB, zB, QB) {
            if (0 === this.geometryThickness) BB.updateFloat("vGeometryThickness", 0);
            else {
              QB.getRenderingMesh().getWorldMatrix().decompose(AB.h.KJ[0]);
              const jB = Math.max(Math.abs(AB.h.KJ[0].x), Math.abs(AB.h.KJ[0].y), Math.abs(AB.h.KJ[0].z));
              BB.updateFloat("vGeometryThickness", this.geometryThickness * jB)
            }
          }
          bindForSubMesh(jB, zB, QB) {
            const nB = this.aY(),
              dB = QB.materialDefines;
            if (!dB) return;
            const IB = QB.effect;
            if (!IB) return;
            this._activeEffect = IB, zB.getMeshUniformBuffer().bindToEffect(IB, "Mesh"), zB.transferToEffect(jB);
            const NB = nB.wJ();
            this._uniformBuffer.bindToEffect(IB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, nB, zB, jB, this.isFrozen), sj.c.Bind(NB.currentRenderPassId, this._activeEffect, zB, jB, this);
            const uB = nB.activeCamera;
            uB ? this._uniformBuffer.updateFloat4("cameraInfo", uB.minZ, uB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const UB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", UB[0], UB[1], UB[2], UB[3]), this._eventInfo.subMesh = QB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), dB.OBJECTSPACE_NORMALMAP && (jB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const aB = this._mustRebind(nB, IB, QB, zB.visibility),
              pB = NB._features.needToAlwaysBindUniformBuffers;
            (0, RB.f)(zB, this._activeEffect, this.prePassConfiguration), this._vertexPullingMetadata && (0, pj.c)(this._activeEffect, this._vertexPullingMetadata);
            const rB = this._uniformBuffer;
            if (aB) {
              this.bindViewProjection(IB);
              const jB = this._getRadianceTexture();
              if (!rB.useUbo || !this.isFrozen || !rB.isSync || QB._drawWrapper._forceRebindOnNextCall) {
                if (nB.texturesEnabled) {
                  for (const BB in this._samplersList) {
                    const jB = this._samplersList[BB];
                    jB.value && (rB.updateFloat2(jB.samplerInfoName, jB.value.coordinatesIndex, jB.value.level), (0, RB.A)(jB.value, rB, jB.samplerPrefix))
                  }(this.geometryNormalTexture || this.geometryCoatNormalTexture) && (nB._mirroredCameraPosition ? rB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : rB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), (0, RB.n)(nB, dB, rB, xB.d.White(), jB, this.realTimeFiltering, !0, !0, !0, !0, !0)
                }
                this.pointsCloud && rB.updateFloat("pointSize", this.pointSize);
                const BB = this._uniformsArray;
                for (let jB = 0, zB = BB.length; jB < zB; jB++) {
                  const zB = BB[jB];
                  (void 0 === zB.requiredDefine || dB[zB.requiredDefine]) && (4 === zB.numComponents ? (zB.populateVectorFromLinkedProperties(AB.h.Vector4[0]), rB.updateVector4(zB.name, AB.h.Vector4[0])) : 3 === zB.numComponents ? (zB.populateVectorFromLinkedProperties(AB.h.KJ[0]), rB.updateVector3(zB.name, AB.h.KJ[0])) : 2 === zB.numComponents ? (zB.populateVectorFromLinkedProperties(AB.h.Vector2[0]), rB.updateFloat2(zB.name, AB.h.Vector2[0].x, AB.h.Vector2[0].y)) : 1 === zB.numComponents && rB.updateFloat(zB.name, zB.linkedProperties[zB.firstLinkedKey].value))
                }
                this._lightingInfos.x = this.directIntensity, this._lightingInfos.y = this.emissionLuminance, this._lightingInfos.z = this.environmentIntensity * nB.environmentIntensity, this._lightingInfos.w = 1, rB.updateVector4("vLightingIntensity", this._lightingInfos), rB.updateFloat2("vDebugMode", this.debugLimit, this.debugFactor)
              }
              if (nB.texturesEnabled) {
                for (const BB in this._samplersList) {
                  const jB = this._samplersList[BB];
                  jB.value && rB.setTexture(jB.samplerName, jB.value)
                }
                if ((0, RB.q)(nB, dB, rB, jB, this.realTimeFiltering), dB.ENVIRONMENTBRDF && rB.setTexture("environmentBrdfSampler", this._environmentBRDFTexture), dB.FUZZENVIRONMENTBRDF && rB.setTexture("environmentFuzzBrdfSampler", this._environmentFuzzBRDFTexture), dB.REFRACTED_BACKGROUND && (rB.setTexture("backgroundRefractionSampler", this._backgroundRefractionTexture), rB.l_("backgroundRefractionMatrix", this._backgroundRefractionTexture.getReflectionTextureMatrix()), AB.h.KJ[1].set(Math.log2(this._backgroundRefractionTexture.getSize().width), 0, 0), rB.updateVector3("vBackgroundRefractionInfos", AB.h.KJ[1])), (dB.ANISOTROPIC || dB.FUZZ || dB.REFRACTED_BACKGROUND || dB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && rB.setTexture("blueNoiseSampler", BB._noiseTextures[this.aY().uniqueId]), dB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && this.sssIrradianceTexture && this.sssDepthTexture) {
                  const BB = this.sssIrradianceTexture.getSize().width,
                    jB = this.sssIrradianceTexture.getSize().height;
                  rB.setTexture("sceneIrradianceSampler", this.sssIrradianceTexture), rB.setTexture("sceneDepthSampler", this.sssDepthTexture), rB.updateFloat2("renderTargetSize", BB, jB)
                }
              }
              this.aY().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zB) && this.aY().depthPeelingRenderer.bind(IB), this._eventInfo.subMesh = QB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, aj.g)(this._activeEffect, this, nB), this.bindEyePosition(IB)
            } else pB && (this._needToBindSceneUbo = !0);
            this.bindPropertiesForSubMesh(this._uniformBuffer, nB, nB.wJ(), QB), !aB && this.isFrozen && !pB || !nB.lightsEnabled || this._disableLighting || (0, RB.t)(nB, zB, this._activeEffect, dB, this._maxSimultaneousLights), !aB && this.isFrozen || (this.bindView(IB), (0, RB.j)(nB, zB, this._activeEffect, !0), dB.NUM_MORPH_INFLUENCERS && (0, RB.y)(zB, this._activeEffect), dB.BAKED_VERTEX_ANIMATION_TEXTURE && zB.bakedVertexAnimationManager?.bind(IB, dB.INSTANCES), this._imageProcessingConfiguration.bind(this._activeEffect), (0, RB.x)(dB, this._activeEffect, nB)), this._afterBind(zB, this._activeEffect, QB), rB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            for (const jB in this._samplersList) {
              const zB = this._samplersList[jB];
              zB.value && zB.value.animations && zB.value.animations.length > 0 && BB.push(zB.value)
            }
            return this._radianceTexture && this._radianceTexture.animations && this._radianceTexture.animations.length > 0 && BB.push(this._radianceTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            for (const jB in this._samplersList) {
              const zB = this._samplersList[jB];
              zB.value && BB.push(zB.value)
            }
            return this._radianceTexture && BB.push(this._radianceTexture), BB
          }
          hasTexture(BB) {
            if (super.hasTexture(BB)) return !0;
            for (const jB in this._samplersList) {
              if (this._samplersList[jB].value === BB) return !0
            }
            return this._radianceTexture === BB
          }
          setPrePassRenderer() {
            return !1
          }
          dispose(BB, jB) {
            if (this._breakShaderLoadedCheck = !0, jB) {
              this._environmentBRDFTexture && this.aY().openPBREnvironmentBRDFTexture !== this._environmentBRDFTexture && this._environmentBRDFTexture.dispose(), this._environmentFuzzBRDFTexture && this.aY().environmentFuzzBRDFTexture !== this._environmentFuzzBRDFTexture && this._environmentFuzzBRDFTexture.dispose(), this._backgroundRefractionTexture = null;
              for (const BB in this._samplersList) {
                const jB = this._samplersList[BB];
                jB.value?.dispose()
              }
              this._radianceTexture?.dispose()
            }
            this._renderTargets.dispose(), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, jB)
          }
          _getRadianceTexture() {
            return this._radianceTexture ? this._radianceTexture : this.aY().environmentTexture
          }
          _prepareEffect(jB, zB, QB) {
            let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
              IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
              NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
            if (this._prepareDefines(jB, zB, QB, IB, NB), !QB.isDirty) return null;
            QB.markAsProcessed();
            const uB = this.aY().wJ(),
              UB = new vB.c;
            let aB = 0;
            QB.USESPHERICALINVERTEX && UB.addFallback(aB++, "USESPHERICALINVERTEX"), QB.FOG && UB.addFallback(aB, "FOG"), QB.SPECULARAA && UB.addFallback(aB, "SPECULARAA"), QB.POINTSIZE && UB.addFallback(aB, "POINTSIZE"), QB.LOGARITHMICDEPTH && UB.addFallback(aB, "LOGARITHMICDEPTH"), QB.PARALLAX && UB.addFallback(aB, "PARALLAX"), QB.PARALLAX_RHS && UB.addFallback(aB, "PARALLAX_RHS"), QB.PARALLAXOCCLUSION && UB.addFallback(aB++, "PARALLAXOCCLUSION"), QB.ENVIRONMENTBRDF && UB.addFallback(aB++, "ENVIRONMENTBRDF"), QB.TANGENT && UB.addFallback(aB++, "TANGENT"), aB = (0, RB.E)(QB, UB, this._maxSimultaneousLights, aB), QB.SPECULARTERM && UB.addFallback(aB++, "SPECULARTERM"), QB.USESPHERICALFROMREFLECTIONMAP && UB.addFallback(aB++, "USESPHERICALFROMREFLECTIONMAP"), QB.USEIRRADIANCEMAP && UB.addFallback(aB++, "USEIRRADIANCEMAP"), QB.NORMAL && UB.addFallback(aB++, "NORMAL"), QB.VERTEXCOLOR && UB.addFallback(aB++, "VERTEXCOLOR"), QB.MORPHTARGETS && UB.addFallback(aB++, "MORPHTARGETS"), QB.MULTIVIEW && UB.addFallback(0, "MULTIVIEW");
            const pB = [TB.l.PositionKind];
            QB.NORMAL && pB.push(TB.l.NormalKind), QB.TANGENT && pB.push(TB.l.TangentKind);
            for (let BB = 1; BB <= 6; ++BB) QB["UV" + BB] && pB.push(`uv${1===BB?"":BB}`);
            QB.VERTEXCOLOR && pB.push(TB.l.ColorKind), (0, RB.J)(pB, jB, QB, UB), (0, RB.K)(pB, QB), (0, RB.N)(pB, jB, QB), (0, RB.H)(pB, jB, QB);
            let rB = "openpbr";
            const sB = ["world", "view", "viewProjection", "projection", "vEyePosition", "inverseProjection", "renderTargetSize", "vLightsType", "visibility", "vFogInfos", "vFogColor", "pointSize", "mBones", "normalMatrix", "vLightingIntensity", "logarithmicDepthConstant", "vTangentSpaceParams", "boneTextureInfo", "vDebugMode", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams", "backgroundRefractionMatrix", "vBackgroundRefractionInfos"];
            for (const BB in this._uniformsList) sB.push(BB);
            const JB = ["environmentBrdfSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
            QB.FUZZENVIRONMENTBRDF && JB.push("environmentFuzzBrdfSampler"), QB.REFRACTED_BACKGROUND && JB.push("backgroundRefractionSampler"), (QB.ANISOTROPIC || QB.FUZZ || QB.REFRACTED_BACKGROUND || QB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING) && JB.push("blueNoiseSampler"), QB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING && (JB.push("sceneIrradianceSampler"), JB.push("sceneDepthSampler"));
            for (const BB in this._samplersList) {
              const jB = this._samplersList[BB];
              JB.push(jB.samplerName), sB.push(jB.samplerInfoName), sB.push(jB.samplerMatrixName)
            }(0, RB.rb)(sB, JB, !0);
            const mB = ["Material", "Scene", "Mesh"],
              yB = {
                maxSimultaneousLights: this._maxSimultaneousLights,
                maxSimultaneousMorphTargets: QB.NUM_MORPH_INFLUENCERS
              };
            if (this._eventInfo.fallbacks = UB, this._eventInfo.fallbackRank = aB, this._eventInfo.defines = QB, this._eventInfo.uniforms = sB, this._eventInfo.attributes = pB, this._eventInfo.samplers = JB, this._eventInfo.uniformBuffersNames = mB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = jB, this._eventInfo.indexParameters = yB, this._callbackPluginEventGeneric(128, this._eventInfo), sj.c.AddUniformsAndSamplers(sB, JB), wB.e.AddUniforms(sB), wB.e.AddSamplers(JB), (0, aj.c)(sB), this._useVertexPulling) {
              const BB = zB?.geometry;
              BB && (this._vertexPullingMetadata = (0, pj.d)(BB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, jB) => {
                sB.push(`vp_${jB}_info`)
              })))
            } else this._vertexPullingMetadata = null;
            CB.c && (CB.c.PrepareUniforms(sB, QB), CB.c.PrepareSamplers(JB, QB)), (0, RB.vb)({
              uniformsNames: sB,
              uniformBuffersNames: mB,
              samplers: JB,
              defines: QB,
              maxSimultaneousLights: this._maxSimultaneousLights,
              shaderLanguage: this._shaderLanguage
            });
            const kB = {};
            this.customShaderNameResolve && (rB = this.customShaderNameResolve(rB, sB, mB, JB, QB, pB, kB));
            const GB = QB.toString(),
              LB = uB.createEffect(rB, {
                attributes: pB,
                uniformsNames: sB,
                uniformBuffersNames: mB,
                samplers: JB,
                defines: GB,
                fallbacks: UB,
                onCompiled: nB,
                onError: dB,
                indexParameters: yB,
                processFinalCode: kB.processFinalCode,
                processCodeAfterIncludes: this._eventInfo.customCode,
                multiTarget: QB.PREPASS,
                shaderLanguage: this._shaderLanguage,
                extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
              }, uB);
            return this._eventInfo.customCode = void 0, LB
          }
          _prepareDefines(jB, zB, QB) {
            let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
              IB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            const NB = zB.hasThinInstances,
              uB = this.aY(),
              UB = uB.wJ();
            (0, RB.ab)(uB, jB, QB, !0, this._maxSimultaneousLights, this._disableLighting), QB._needNormals = !0, (0, RB.gb)(uB, QB);
            const aB = this.needAlphaBlendingForMesh(jB) && this.aY().useOrderIndependentTransparency;
            if ((0, RB.lb)(uB, QB, this.canRenderToMRT && !aB), (0, RB.hb)(uB, QB, aB), sj.c.PrepareDefines(UB.currentRenderPassId, jB, QB), QB._areTexturesDirty) {
              QB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) QB["MAINUV" + BB] = !1;
              if (uB.texturesEnabled) {
                for (const zB in this._samplersList) {
                  const BB = this._samplersList[zB];
                  BB.value ? ((0, RB.cb)(BB.value, QB, BB.textureDefine), QB[BB.textureDefine + "_GAMMA"] = BB.value.gammaSpace) : QB[BB.textureDefine] = !1
                }
                const BB = this._getRadianceTexture(),
                  jB = this._forceIrradianceInFragment || this.realTimeFiltering || this._twoSidedLighting || UB.getCaps().maxVaryingVectors <= 8 || null != this._baseDiffuseRoughnessTexture;
                if ((0, RB.Y)(uB, BB, QB, this.realTimeFiltering, this.realTimeFilteringQuality, !jB), this._baseMetalnessTexture && (QB.AOSTOREINMETALMAPRED = this._useAmbientOcclusionFromMetallicTextureRed), QB.SPECULAR_WEIGHT_IN_ALPHA = this._useSpecularWeightFromAlpha, QB.SPECULAR_WEIGHT_FROM_SPECULAR_COLOR_TEXTURE = this._useSpecularWeightFromSpecularColorTexture, QB.SPECULAR_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useSpecularRoughnessAnisotropyFromTangentTexture, QB.COAT_ROUGHNESS_ANISOTROPY_FROM_TANGENT_TEXTURE = this._useCoatRoughnessAnisotropyFromTangentTexture, QB.COAT_ROUGHNESS_FROM_GREEN_CHANNEL = this._useCoatRoughnessFromGreenChannel, QB.SPECULAR_ROUGHNESS_FROM_METALNESS_TEXTURE_GREEN = this._useRoughnessFromMetallicTextureGreen, QB.FUZZ_ROUGHNESS_FROM_TEXTURE_ALPHA = this._useFuzzRoughnessFromTextureAlpha, QB.SUBSURFACE_WEIGHT_FROM_TEXTURE_ALPHA = this._useSubsurfaceWeightFromTextureAlpha, QB.BASE_METALNESS_FROM_METALNESS_TEXTURE_BLUE = this._useMetallicFromMetallicTextureBlue, QB.THIN_FILM_THICKNESS_FROM_THIN_FILM_TEXTURE = this._useThinFilmThicknessFromTextureGreen, QB.GEOMETRY_THICKNESS_FROM_GREEN_CHANNEL = this._useGeometryThicknessFromGreenChannel, this.geometryNormalTexture ? (this._useParallax && this.baseColorTexture && bB.d.DiffuseTextureEnabled ? (QB.PARALLAX = !0, QB.PARALLAX_RHS = uB.useRightHandedSystem, QB.PARALLAXOCCLUSION = !!this._useParallaxOcclusion) : QB.PARALLAX = !1, QB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap) : (QB.PARALLAX = !1, QB.PARALLAX_RHS = !1, QB.PARALLAXOCCLUSION = !1, QB.OBJECTSPACE_NORMALMAP = !1), this._environmentBRDFTexture && bB.d.ReflectionTextureEnabled ? (QB.ENVIRONMENTBRDF = !0, QB.ENVIRONMENTBRDF_RGBD = this._environmentBRDFTexture.isRGBD) : (QB.ENVIRONMENTBRDF = !1, QB.ENVIRONMENTBRDF_RGBD = !1), this._environmentFuzzBRDFTexture ? QB.FUZZENVIRONMENTBRDF = !0 : QB.FUZZENVIRONMENTBRDF = !1, this.hasTransparency) {
                  QB.REFRACTED_BACKGROUND = !!this._backgroundRefractionTexture && bB.d.RefractionTextureEnabled, QB.REFRACTION_HIGH_QUALITY_BLUR = this._refractionHighQualityBlur, QB.REFRACTED_LIGHTS = !0;
                  const BB = this._getRadianceTexture();
                  BB ? (QB.REFRACTED_ENVIRONMENT = bB.d.RefractionTextureEnabled, QB.REFRACTED_ENVIRONMENT_OPPOSITEZ = this.aY().useRightHandedSystem ? !BB.invertZ : BB.invertZ, QB.REFRACTED_ENVIRONMENT_LOCAL_CUBE = BB.isCube && BB.boundingBoxSize) : QB.REFRACTED_ENVIRONMENT = !1
                } else QB.REFRACTED_BACKGROUND = !1, QB.REFRACTED_LIGHTS = !1, QB.REFRACTED_ENVIRONMENT = !1;
                this._shouldUseAlphaFromBaseColorTexture() ? QB.ALPHA_FROM_BASE_COLOR_TEXTURE = !0 : QB.ALPHA_FROM_BASE_COLOR_TEXTURE = !1
              }
              this._lightFalloff === dB.b.LIGHTFALLOFF_STANDARD ? (QB.USEPHYSICALLIGHTFALLOFF = !1, QB.USEGLTFLIGHTFALLOFF = !1) : this._lightFalloff === dB.b.LIGHTFALLOFF_GLTF ? (QB.USEPHYSICALLIGHTFALLOFF = !1, QB.USEGLTFLIGHTFALLOFF = !0) : (QB.USEPHYSICALLIGHTFALLOFF = !0, QB.USEGLTFLIGHTFALLOFF = !1), !this.backFaceCulling && this._twoSidedLighting ? QB.TWOSIDEDLIGHTING = !0 : QB.TWOSIDEDLIGHTING = !1, QB.MIRRORED = !!uB._mirroredCameraPosition, QB.SPECULARAA = UB.getCaps().standardDerivatives && this._enableSpecularAntiAliasing
            }(QB._areTexturesDirty || QB._areMiscDirty) && (QB.ALPHATESTVALUE = `${this._alphaCutOff}${this._alphaCutOff%1===0?".":""}`, QB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, QB.ALPHABLEND = this.needAlphaBlendingForMesh(jB)), QB._areTexturesDirty && (QB.TEXTURE_REPETITION_MODE = UB.version > 1 || UB.isWebGPU ? this.textureRepetitionMode : 0), QB._areImageProcessingDirty && this._imageProcessingConfiguration && this._imageProcessingConfiguration.prepareDefines(QB), QB.FORCENORMALFORWARD = this._forceNormalForward, QB.RADIANCEOCCLUSION = this._useRadianceOcclusion, QB.HORIZONOCCLUSION = this._useHorizonOcclusion, (this.specularRoughnessAnisotropy > 0 || this.coatRoughnessAnisotropy > 0) && BB._noiseTextures[uB.uniqueId] && bB.d.ReflectionTextureEnabled ? (QB.ANISOTROPIC = !0, jB.isVerticesDataPresent(TB.l.TangentKind) || (QB._needUVs = !0, QB.MAINUV1 = !0), this._useGltfStyleAnisotropy && (QB.USE_GLTF_STYLE_ANISOTROPY = !0), QB.ANISOTROPIC_BASE = this.specularRoughnessAnisotropy > 0, QB.ANISOTROPIC_COAT = this.coatRoughnessAnisotropy > 0) : (QB.ANISOTROPIC = !1, QB.USE_GLTF_STYLE_ANISOTROPY = !1, QB.ANISOTROPIC_BASE = !1, QB.ANISOTROPIC_COAT = !1), QB.THIN_FILM = this.thinFilmWeight > 0, QB.IRIDESCENCE = this.thinFilmWeight > 0, QB.DISPERSION = this.transmissionDispersionScale > 0, QB.SCATTERING = this.hasScattering;
            if (QB.SSS_SAMPLE_COUNT = [8, 16, 32][this._sssQuality] ?? 16, QB.TRANSMISSION_SLAB = this.transmissionWeight > 0, QB.TRANSMISSION_SLAB_VOLUME = this.transmissionWeight > 0 && this.transmissionDepth > 0, QB.SUBSURFACE_SLAB = this.subsurfaceWeight > 0, !QB.PREPASS && (QB.SUBSURFACE_SLAB || QB.TRANSMISSION_SLAB_VOLUME)) {
              let BB = !1;
              if (!this.sssIrradianceTexture && uB.geometryBufferRenderer) {
                const jB = uB.geometryBufferRenderer.getTextureIndex(Pj.IRRADIANCE_TEXTURE_TYPE);
                this.sssIrradianceTexture = uB.geometryBufferRenderer.getGBuffer().textures[jB], BB = !0
              }
              if (!this.sssDepthTexture && uB.geometryBufferRenderer) {
                const jB = uB.geometryBufferRenderer.getTextureIndex(Pj.SCREENSPACE_DEPTH_TEXTURE_TYPE);
                this.sssDepthTexture = uB.geometryBufferRenderer.getGBuffer().textures[jB], BB = !0
              }
              this.sssIrradianceTexture && this.sssDepthTexture && (QB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING = !0, BB && (QB.USE_IRRADIANCE_TEXTURE_FOR_SCATTERING_GBUFFER = !0))
            }
            QB.FUZZ = this.fuzzWeight > 0 && bB.d.ReflectionTextureEnabled, QB.GEOMETRY_THIN_WALLED = 0 != this.geometryThinWalled, QB.FUZZ ? (jB.isVerticesDataPresent(TB.l.TangentKind) || (QB._needUVs = !0, QB.MAINUV1 = !0), this._environmentFuzzBRDFTexture = hB(this.aY()), QB.FUZZ_IBL_SAMPLES = this.fuzzSampleNumber) : (this._environmentFuzzBRDFTexture = null, QB.FUZZENVIRONMENTBRDF = !1, QB.FUZZ_IBL_SAMPLES = 0), QB._areMiscDirty && ((0, RB.db)(jB, uB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(jB), QB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zB, this._isVertexOutputInvariant), QB.UNLIT = this._unlit || (this.pointsCloud || this.wireframe) && !jB.isVerticesDataPresent(TB.l.NormalKind), QB.DEBUGMODE = this._debugMode), (0, RB.U)(uB, UB, this, QB, !!nB, IB, NB), this._eventInfo.defines = QB, this._eventInfo.mesh = jB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, RB.S)(jB, QB, !0, !0, !0, this._transparencyMode !== dB.b.MATERIAL_OPAQUE), this._callbackPluginEventPrepareDefines(this._eventInfo)
          }
        }, jB = new WeakMap, QB = new WeakMap, nB = new WeakMap, IB = new WeakMap, NB = new WeakMap, uB = new WeakMap, UB = new WeakMap, aB = new WeakMap, pB = new WeakMap, rB = new WeakMap, sB = new WeakMap, JB = new WeakMap, mB = new WeakMap, yB = new WeakMap, kB = new WeakMap, GB = new WeakMap, LB = new WeakMap, gB = new WeakMap, tB = new WeakMap, SB = new WeakMap, MB = new WeakMap, EB = new WeakMap, DB = new WeakMap, FB = new WeakMap, YB = new WeakMap, VB = new WeakMap, ZB = new WeakMap, PB = new WeakMap, WB = new WeakMap, eB = new WeakMap, lB = new WeakMap, KB = new WeakMap, cB = new WeakMap, OB = new WeakMap, Bj = new WeakMap, jj = new WeakMap, zj = new WeakMap, Qj = new WeakMap, nj = new WeakMap, dj = new WeakMap, Ij = new WeakMap, Nj = new WeakMap, uj = new WeakMap, Uj = new WeakMap, Jj = new WeakMap, mj = new WeakMap, yj = new WeakMap, kj = new WeakMap, Gj = new WeakMap, Lj = new WeakMap, gj = new WeakMap, tj = new WeakMap, Sj = new WeakMap, ij = new WeakMap, qj = new WeakMap, fj = new WeakMap, oj = new WeakMap, Hj = new WeakMap, Dj = new WeakMap, Fj = new WeakMap, Yj = new WeakMap, Vj = new WeakMap, hj = new WeakMap, Xj = new WeakMap, Zj = new WeakMap, Aj = new WeakMap, Tj = new WeakMap, Wj = new WeakMap, lj = new WeakMap, Cj = new WeakMap, cj = new WeakMap, Rj = new WeakMap, Oj = new WeakMap, Bz = new WeakMap, jz = new WeakMap, zz = new WeakMap, Qz = new WeakMap, nz = new WeakMap, dz = new WeakMap, Iz = new WeakMap, Nz = new WeakMap, uz = new WeakMap, Uz = new WeakMap, az = new WeakMap, pz = new WeakMap, rz = new WeakMap, sz = new WeakMap, Jz = new WeakMap, mz = new WeakMap, yz = new WeakMap, kz = new WeakMap, Gz = new WeakMap, Lz = new WeakMap, gz = new WeakMap, tz = new WeakMap, Sz = new WeakMap, Mz = new WeakMap, Ez = new WeakMap, iz = new WeakMap, qz = new WeakMap, fz = new WeakMap, oz = new WeakMap, (() => {
          const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yn[Symbol.metadata] ?? null) : void 0;
          Hz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Fz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], hz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Az = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Tz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Wz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], ez = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], lz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], wz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], xz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Cz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], bz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], vz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], BQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], jQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], zQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], QQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], nQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], dQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], IQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], NQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], uQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], UQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], aQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], pQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], rQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], sQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], JQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], mQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], yQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], kQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], GQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], LQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], gQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], SQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], MQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], EQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], iQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], qQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], fQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], oQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], HQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], DQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], FQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], YQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], VQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], hQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], XQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], ZQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], AQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], TQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], PQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], WQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], eQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], lQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], wQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], xQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], KQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], CQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], cQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], bQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], vQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], RQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], OQ = [(0, qB.b)("_markAllSubMeshesAsTexturesDirty")], Bn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], jn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], zn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Qn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], nn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], dn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], In = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Nn = [(0, qB.A)()], un = [(0, qB.A)()], Un = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], an = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], pn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], rn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], sn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsLightsDirty")], Jn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], mn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsLightsDirty")], yn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], kn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Gn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Ln = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], gn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], tn = [(0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Sn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Mn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], En = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], qn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], fn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], Hn = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], Dn = [(0, qB.e)("_markAllSubMeshesAsMiscDirty")], Fn = [(0, qB.A)()], (0, iB.e)(BB, null, Hz, {
            kind: "accessor",
            name: "baseWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeight" in BB,
              get: BB => BB.baseWeight,
              set: (BB, jB) => {
                BB.baseWeight = jB
              }
            },
            metadata: jB
          }, hn, Xn), (0, iB.e)(BB, null, Dz, {
            kind: "accessor",
            name: "baseWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseWeightTexture" in BB,
              get: BB => BB.baseWeightTexture,
              set: (BB, jB) => {
                BB.baseWeightTexture = jB
              }
            },
            metadata: jB
          }, Zn, An), (0, iB.e)(BB, null, Fz, {
            kind: "accessor",
            name: "baseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColor" in BB,
              get: BB => BB.baseColor,
              set: (BB, jB) => {
                BB.baseColor = jB
              }
            },
            metadata: jB
          }, Tn, Pn), (0, iB.e)(BB, null, Yz, {
            kind: "accessor",
            name: "baseColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseColorTexture" in BB,
              get: BB => BB.baseColorTexture,
              set: (BB, jB) => {
                BB.baseColorTexture = jB
              }
            },
            metadata: jB
          }, Wn, en), (0, iB.e)(BB, null, Vz, {
            kind: "accessor",
            name: "baseDiffuseRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughness" in BB,
              get: BB => BB.baseDiffuseRoughness,
              set: (BB, jB) => {
                BB.baseDiffuseRoughness = jB
              }
            },
            metadata: jB
          }, wn, xn), (0, iB.e)(BB, null, hz, {
            kind: "accessor",
            name: "baseDiffuseRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseDiffuseRoughnessTexture" in BB,
              get: BB => BB.baseDiffuseRoughnessTexture,
              set: (BB, jB) => {
                BB.baseDiffuseRoughnessTexture = jB
              }
            },
            metadata: jB
          }, Kn, Cn), (0, iB.e)(BB, null, Xz, {
            kind: "accessor",
            name: "baseMetalness",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalness" in BB,
              get: BB => BB.baseMetalness,
              set: (BB, jB) => {
                BB.baseMetalness = jB
              }
            },
            metadata: jB
          }, cn, bn), (0, iB.e)(BB, null, Zz, {
            kind: "accessor",
            name: "baseMetalnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "baseMetalnessTexture" in BB,
              get: BB => BB.baseMetalnessTexture,
              set: (BB, jB) => {
                BB.baseMetalnessTexture = jB
              }
            },
            metadata: jB
          }, vn, Rn), (0, iB.e)(BB, null, Az, {
            kind: "accessor",
            name: "specularWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeight" in BB,
              get: BB => BB.specularWeight,
              set: (BB, jB) => {
                BB.specularWeight = jB
              }
            },
            metadata: jB
          }, On, Bd), (0, iB.e)(BB, null, Tz, {
            kind: "accessor",
            name: "specularWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularWeightTexture" in BB,
              get: BB => BB.specularWeightTexture,
              set: (BB, jB) => {
                BB.specularWeightTexture = jB
              }
            },
            metadata: jB
          }, jd, zd), (0, iB.e)(BB, null, Pz, {
            kind: "accessor",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, jB) => {
                BB.specularColor = jB
              }
            },
            metadata: jB
          }, Qd, nd), (0, iB.e)(BB, null, Wz, {
            kind: "accessor",
            name: "specularColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColorTexture" in BB,
              get: BB => BB.specularColorTexture,
              set: (BB, jB) => {
                BB.specularColorTexture = jB
              }
            },
            metadata: jB
          }, dd, Id), (0, iB.e)(BB, null, ez, {
            kind: "accessor",
            name: "specularRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughness" in BB,
              get: BB => BB.specularRoughness,
              set: (BB, jB) => {
                BB.specularRoughness = jB
              }
            },
            metadata: jB
          }, Nd, ud), (0, iB.e)(BB, null, lz, {
            kind: "accessor",
            name: "specularRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessTexture" in BB,
              get: BB => BB.specularRoughnessTexture,
              set: (BB, jB) => {
                BB.specularRoughnessTexture = jB
              }
            },
            metadata: jB
          }, Ud, pd), (0, iB.e)(BB, null, wz, {
            kind: "accessor",
            name: "specularRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropy" in BB,
              get: BB => BB.specularRoughnessAnisotropy,
              set: (BB, jB) => {
                BB.specularRoughnessAnisotropy = jB
              }
            },
            metadata: jB
          }, rd, sd), (0, iB.e)(BB, null, xz, {
            kind: "accessor",
            name: "specularRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularRoughnessAnisotropyTexture" in BB,
              get: BB => BB.specularRoughnessAnisotropyTexture,
              set: (BB, jB) => {
                BB.specularRoughnessAnisotropyTexture = jB
              }
            },
            metadata: jB
          }, Jd, md), (0, iB.e)(BB, null, Kz, {
            kind: "accessor",
            name: "specularIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularIor" in BB,
              get: BB => BB.specularIor,
              set: (BB, jB) => {
                BB.specularIor = jB
              }
            },
            metadata: jB
          }, yd, kd), (0, iB.e)(BB, null, Cz, {
            kind: "accessor",
            name: "transmissionWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeight" in BB,
              get: BB => BB.transmissionWeight,
              set: (BB, jB) => {
                BB.transmissionWeight = jB
              }
            },
            metadata: jB
          }, Gd, Ld), (0, iB.e)(BB, null, cz, {
            kind: "accessor",
            name: "transmissionWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionWeightTexture" in BB,
              get: BB => BB.transmissionWeightTexture,
              set: (BB, jB) => {
                BB.transmissionWeightTexture = jB
              }
            },
            metadata: jB
          }, gd, td), (0, iB.e)(BB, null, bz, {
            kind: "accessor",
            name: "transmissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColor" in BB,
              get: BB => BB.transmissionColor,
              set: (BB, jB) => {
                BB.transmissionColor = jB
              }
            },
            metadata: jB
          }, Sd, Md), (0, iB.e)(BB, null, vz, {
            kind: "accessor",
            name: "transmissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionColorTexture" in BB,
              get: BB => BB.transmissionColorTexture,
              set: (BB, jB) => {
                BB.transmissionColorTexture = jB
              }
            },
            metadata: jB
          }, Ed, qd), (0, iB.e)(BB, null, Rz, {
            kind: "accessor",
            name: "transmissionDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepth" in BB,
              get: BB => BB.transmissionDepth,
              set: (BB, jB) => {
                BB.transmissionDepth = jB
              }
            },
            metadata: jB
          }, fd, od), (0, iB.e)(BB, null, Oz, {
            kind: "accessor",
            name: "transmissionDepthTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDepthTexture" in BB,
              get: BB => BB.transmissionDepthTexture,
              set: (BB, jB) => {
                BB.transmissionDepthTexture = jB
              }
            },
            metadata: jB
          }, Hd, Dd), (0, iB.e)(BB, null, BQ, {
            kind: "accessor",
            name: "transmissionScatter",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatter" in BB,
              get: BB => BB.transmissionScatter,
              set: (BB, jB) => {
                BB.transmissionScatter = jB
              }
            },
            metadata: jB
          }, Fd, Yd), (0, iB.e)(BB, null, jQ, {
            kind: "accessor",
            name: "transmissionScatterTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterTexture" in BB,
              get: BB => BB.transmissionScatterTexture,
              set: (BB, jB) => {
                BB.transmissionScatterTexture = jB
              }
            },
            metadata: jB
          }, Vd, hd), (0, iB.e)(BB, null, zQ, {
            kind: "accessor",
            name: "transmissionScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionScatterAnisotropy" in BB,
              get: BB => BB.transmissionScatterAnisotropy,
              set: (BB, jB) => {
                BB.transmissionScatterAnisotropy = jB
              }
            },
            metadata: jB
          }, Xd, Zd), (0, iB.e)(BB, null, QQ, {
            kind: "accessor",
            name: "transmissionDispersionScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScale" in BB,
              get: BB => BB.transmissionDispersionScale,
              set: (BB, jB) => {
                BB.transmissionDispersionScale = jB
              }
            },
            metadata: jB
          }, Ad, Td), (0, iB.e)(BB, null, nQ, {
            kind: "accessor",
            name: "transmissionDispersionScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionScaleTexture" in BB,
              get: BB => BB.transmissionDispersionScaleTexture,
              set: (BB, jB) => {
                BB.transmissionDispersionScaleTexture = jB
              }
            },
            metadata: jB
          }, Pd, Wd), (0, iB.e)(BB, null, dQ, {
            kind: "accessor",
            name: "transmissionDispersionAbbeNumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "transmissionDispersionAbbeNumber" in BB,
              get: BB => BB.transmissionDispersionAbbeNumber,
              set: (BB, jB) => {
                BB.transmissionDispersionAbbeNumber = jB
              }
            },
            metadata: jB
          }, ed, ld), (0, iB.e)(BB, null, IQ, {
            kind: "accessor",
            name: "subsurfaceWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeight" in BB,
              get: BB => BB.subsurfaceWeight,
              set: (BB, jB) => {
                BB.subsurfaceWeight = jB
              }
            },
            metadata: jB
          }, wd, xd), (0, iB.e)(BB, null, NQ, {
            kind: "accessor",
            name: "subsurfaceWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceWeightTexture" in BB,
              get: BB => BB.subsurfaceWeightTexture,
              set: (BB, jB) => {
                BB.subsurfaceWeightTexture = jB
              }
            },
            metadata: jB
          }, Kd, Cd), (0, iB.e)(BB, null, uQ, {
            kind: "accessor",
            name: "subsurfaceColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColor" in BB,
              get: BB => BB.subsurfaceColor,
              set: (BB, jB) => {
                BB.subsurfaceColor = jB
              }
            },
            metadata: jB
          }, cd, bd), (0, iB.e)(BB, null, UQ, {
            kind: "accessor",
            name: "subsurfaceColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceColorTexture" in BB,
              get: BB => BB.subsurfaceColorTexture,
              set: (BB, jB) => {
                BB.subsurfaceColorTexture = jB
              }
            },
            metadata: jB
          }, vd, Rd), (0, iB.e)(BB, null, aQ, {
            kind: "accessor",
            name: "subsurfaceRadius",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadius" in BB,
              get: BB => BB.subsurfaceRadius,
              set: (BB, jB) => {
                BB.subsurfaceRadius = jB
              }
            },
            metadata: jB
          }, Od, BI), (0, iB.e)(BB, null, pQ, {
            kind: "accessor",
            name: "subsurfaceRadiusScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScale" in BB,
              get: BB => BB.subsurfaceRadiusScale,
              set: (BB, jB) => {
                BB.subsurfaceRadiusScale = jB
              }
            },
            metadata: jB
          }, jI, zI), (0, iB.e)(BB, null, rQ, {
            kind: "accessor",
            name: "subsurfaceRadiusScaleTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceRadiusScaleTexture" in BB,
              get: BB => BB.subsurfaceRadiusScaleTexture,
              set: (BB, jB) => {
                BB.subsurfaceRadiusScaleTexture = jB
              }
            },
            metadata: jB
          }, QI, nI), (0, iB.e)(BB, null, sQ, {
            kind: "accessor",
            name: "subsurfaceScatterAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "subsurfaceScatterAnisotropy" in BB,
              get: BB => BB.subsurfaceScatterAnisotropy,
              set: (BB, jB) => {
                BB.subsurfaceScatterAnisotropy = jB
              }
            },
            metadata: jB
          }, dI, II), (0, iB.e)(BB, null, JQ, {
            kind: "accessor",
            name: "coatWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeight" in BB,
              get: BB => BB.coatWeight,
              set: (BB, jB) => {
                BB.coatWeight = jB
              }
            },
            metadata: jB
          }, NI, uI), (0, iB.e)(BB, null, mQ, {
            kind: "accessor",
            name: "coatWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatWeightTexture" in BB,
              get: BB => BB.coatWeightTexture,
              set: (BB, jB) => {
                BB.coatWeightTexture = jB
              }
            },
            metadata: jB
          }, UI, aI), (0, iB.e)(BB, null, yQ, {
            kind: "accessor",
            name: "coatColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColor" in BB,
              get: BB => BB.coatColor,
              set: (BB, jB) => {
                BB.coatColor = jB
              }
            },
            metadata: jB
          }, pI, rI), (0, iB.e)(BB, null, kQ, {
            kind: "accessor",
            name: "coatColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatColorTexture" in BB,
              get: BB => BB.coatColorTexture,
              set: (BB, jB) => {
                BB.coatColorTexture = jB
              }
            },
            metadata: jB
          }, sI, JI), (0, iB.e)(BB, null, GQ, {
            kind: "accessor",
            name: "coatRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughness" in BB,
              get: BB => BB.coatRoughness,
              set: (BB, jB) => {
                BB.coatRoughness = jB
              }
            },
            metadata: jB
          }, mI, yI), (0, iB.e)(BB, null, LQ, {
            kind: "accessor",
            name: "coatRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessTexture" in BB,
              get: BB => BB.coatRoughnessTexture,
              set: (BB, jB) => {
                BB.coatRoughnessTexture = jB
              }
            },
            metadata: jB
          }, kI, GI), (0, iB.e)(BB, null, gQ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropy",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropy" in BB,
              get: BB => BB.coatRoughnessAnisotropy,
              set: (BB, jB) => {
                BB.coatRoughnessAnisotropy = jB
              }
            },
            metadata: jB
          }, LI, gI), (0, iB.e)(BB, null, tQ, {
            kind: "accessor",
            name: "coatRoughnessAnisotropyTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatRoughnessAnisotropyTexture" in BB,
              get: BB => BB.coatRoughnessAnisotropyTexture,
              set: (BB, jB) => {
                BB.coatRoughnessAnisotropyTexture = jB
              }
            },
            metadata: jB
          }, tI, SI), (0, iB.e)(BB, null, SQ, {
            kind: "accessor",
            name: "coatIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatIor" in BB,
              get: BB => BB.coatIor,
              set: (BB, jB) => {
                BB.coatIor = jB
              }
            },
            metadata: jB
          }, MI, EI), (0, iB.e)(BB, null, MQ, {
            kind: "accessor",
            name: "coatDarkening",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkening" in BB,
              get: BB => BB.coatDarkening,
              set: (BB, jB) => {
                BB.coatDarkening = jB
              }
            },
            metadata: jB
          }, iI, qI), (0, iB.e)(BB, null, EQ, {
            kind: "accessor",
            name: "coatDarkeningTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "coatDarkeningTexture" in BB,
              get: BB => BB.coatDarkeningTexture,
              set: (BB, jB) => {
                BB.coatDarkeningTexture = jB
              }
            },
            metadata: jB
          }, fI, oI), (0, iB.e)(BB, null, iQ, {
            kind: "accessor",
            name: "fuzzWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeight" in BB,
              get: BB => BB.fuzzWeight,
              set: (BB, jB) => {
                BB.fuzzWeight = jB
              }
            },
            metadata: jB
          }, HI, DI), (0, iB.e)(BB, null, qQ, {
            kind: "accessor",
            name: "fuzzWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzWeightTexture" in BB,
              get: BB => BB.fuzzWeightTexture,
              set: (BB, jB) => {
                BB.fuzzWeightTexture = jB
              }
            },
            metadata: jB
          }, FI, YI), (0, iB.e)(BB, null, fQ, {
            kind: "accessor",
            name: "fuzzColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColor" in BB,
              get: BB => BB.fuzzColor,
              set: (BB, jB) => {
                BB.fuzzColor = jB
              }
            },
            metadata: jB
          }, VI, hI), (0, iB.e)(BB, null, oQ, {
            kind: "accessor",
            name: "fuzzColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzColorTexture" in BB,
              get: BB => BB.fuzzColorTexture,
              set: (BB, jB) => {
                BB.fuzzColorTexture = jB
              }
            },
            metadata: jB
          }, XI, ZI), (0, iB.e)(BB, null, HQ, {
            kind: "accessor",
            name: "fuzzRoughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughness" in BB,
              get: BB => BB.fuzzRoughness,
              set: (BB, jB) => {
                BB.fuzzRoughness = jB
              }
            },
            metadata: jB
          }, AI, TI), (0, iB.e)(BB, null, DQ, {
            kind: "accessor",
            name: "fuzzRoughnessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "fuzzRoughnessTexture" in BB,
              get: BB => BB.fuzzRoughnessTexture,
              set: (BB, jB) => {
                BB.fuzzRoughnessTexture = jB
              }
            },
            metadata: jB
          }, PI, WI), (0, iB.e)(BB, null, FQ, {
            kind: "accessor",
            name: "geometryThinWalled",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThinWalled" in BB,
              get: BB => BB.geometryThinWalled,
              set: (BB, jB) => {
                BB.geometryThinWalled = jB
              }
            },
            metadata: jB
          }, eI, lI), (0, iB.e)(BB, null, YQ, {
            kind: "accessor",
            name: "geometryNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryNormalTexture" in BB,
              get: BB => BB.geometryNormalTexture,
              set: (BB, jB) => {
                BB.geometryNormalTexture = jB
              }
            },
            metadata: jB
          }, wI, xI), (0, iB.e)(BB, null, VQ, {
            kind: "accessor",
            name: "geometryTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangent" in BB,
              get: BB => BB.geometryTangent,
              set: (BB, jB) => {
                BB.geometryTangent = jB
              }
            },
            metadata: jB
          }, KI, CI), (0, iB.e)(BB, null, hQ, {
            kind: "accessor",
            name: "geometryTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryTangentTexture" in BB,
              get: BB => BB.geometryTangentTexture,
              set: (BB, jB) => {
                BB.geometryTangentTexture = jB
              }
            },
            metadata: jB
          }, cI, bI), (0, iB.e)(BB, null, XQ, {
            kind: "accessor",
            name: "geometryCoatNormalTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatNormalTexture" in BB,
              get: BB => BB.geometryCoatNormalTexture,
              set: (BB, jB) => {
                BB.geometryCoatNormalTexture = jB
              }
            },
            metadata: jB
          }, vI, RI), (0, iB.e)(BB, null, ZQ, {
            kind: "accessor",
            name: "geometryCoatTangent",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangent" in BB,
              get: BB => BB.geometryCoatTangent,
              set: (BB, jB) => {
                BB.geometryCoatTangent = jB
              }
            },
            metadata: jB
          }, OI, BN), (0, iB.e)(BB, null, AQ, {
            kind: "accessor",
            name: "geometryCoatTangentTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryCoatTangentTexture" in BB,
              get: BB => BB.geometryCoatTangentTexture,
              set: (BB, jB) => {
                BB.geometryCoatTangentTexture = jB
              }
            },
            metadata: jB
          }, jN, zN), (0, iB.e)(BB, null, TQ, {
            kind: "accessor",
            name: "geometryOpacity",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacity" in BB,
              get: BB => BB.geometryOpacity,
              set: (BB, jB) => {
                BB.geometryOpacity = jB
              }
            },
            metadata: jB
          }, QN, nN), (0, iB.e)(BB, null, PQ, {
            kind: "accessor",
            name: "geometryOpacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryOpacityTexture" in BB,
              get: BB => BB.geometryOpacityTexture,
              set: (BB, jB) => {
                BB.geometryOpacityTexture = jB
              }
            },
            metadata: jB
          }, dN, IN), (0, iB.e)(BB, null, WQ, {
            kind: "accessor",
            name: "geometryThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThickness" in BB,
              get: BB => BB.geometryThickness,
              set: (BB, jB) => {
                BB.geometryThickness = jB
              }
            },
            metadata: jB
          }, NN, uN), (0, iB.e)(BB, null, eQ, {
            kind: "accessor",
            name: "geometryThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "geometryThicknessTexture" in BB,
              get: BB => BB.geometryThicknessTexture,
              set: (BB, jB) => {
                BB.geometryThicknessTexture = jB
              }
            },
            metadata: jB
          }, UN, aN), (0, iB.e)(BB, null, lQ, {
            kind: "accessor",
            name: "emissionLuminance",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionLuminance" in BB,
              get: BB => BB.emissionLuminance,
              set: (BB, jB) => {
                BB.emissionLuminance = jB
              }
            },
            metadata: jB
          }, pN, rN), (0, iB.e)(BB, null, wQ, {
            kind: "accessor",
            name: "emissionColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColor" in BB,
              get: BB => BB.emissionColor,
              set: (BB, jB) => {
                BB.emissionColor = jB
              }
            },
            metadata: jB
          }, sN, JN), (0, iB.e)(BB, null, xQ, {
            kind: "accessor",
            name: "emissionColorTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissionColorTexture" in BB,
              get: BB => BB.emissionColorTexture,
              set: (BB, jB) => {
                BB.emissionColorTexture = jB
              }
            },
            metadata: jB
          }, mN, yN), (0, iB.e)(BB, null, KQ, {
            kind: "accessor",
            name: "thinFilmWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeight" in BB,
              get: BB => BB.thinFilmWeight,
              set: (BB, jB) => {
                BB.thinFilmWeight = jB
              }
            },
            metadata: jB
          }, kN, GN), (0, iB.e)(BB, null, CQ, {
            kind: "accessor",
            name: "thinFilmWeightTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmWeightTexture" in BB,
              get: BB => BB.thinFilmWeightTexture,
              set: (BB, jB) => {
                BB.thinFilmWeightTexture = jB
              }
            },
            metadata: jB
          }, LN, gN), (0, iB.e)(BB, null, cQ, {
            kind: "accessor",
            name: "thinFilmThickness",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThickness" in BB,
              get: BB => BB.thinFilmThickness,
              set: (BB, jB) => {
                BB.thinFilmThickness = jB
              }
            },
            metadata: jB
          }, tN, SN), (0, iB.e)(BB, null, bQ, {
            kind: "accessor",
            name: "thinFilmThicknessMin",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessMin" in BB,
              get: BB => BB.thinFilmThicknessMin,
              set: (BB, jB) => {
                BB.thinFilmThicknessMin = jB
              }
            },
            metadata: jB
          }, MN, EN), (0, iB.e)(BB, null, vQ, {
            kind: "accessor",
            name: "thinFilmThicknessTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmThicknessTexture" in BB,
              get: BB => BB.thinFilmThicknessTexture,
              set: (BB, jB) => {
                BB.thinFilmThicknessTexture = jB
              }
            },
            metadata: jB
          }, iN, qN), (0, iB.e)(BB, null, RQ, {
            kind: "accessor",
            name: "thinFilmIor",
            static: !1,
            private: !1,
            access: {
              has: BB => "thinFilmIor" in BB,
              get: BB => BB.thinFilmIor,
              set: (BB, jB) => {
                BB.thinFilmIor = jB
              }
            },
            metadata: jB
          }, fN, oN), (0, iB.e)(BB, null, OQ, {
            kind: "accessor",
            name: "ambientOcclusionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientOcclusionTexture" in BB,
              get: BB => BB.ambientOcclusionTexture,
              set: (BB, jB) => {
                BB.ambientOcclusionTexture = jB
              }
            },
            metadata: jB
          }, HN, DN), (0, iB.e)(BB, null, Bn, {
            kind: "accessor",
            name: "directIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "directIntensity" in BB,
              get: BB => BB.directIntensity,
              set: (BB, jB) => {
                BB.directIntensity = jB
              }
            },
            metadata: jB
          }, FN, YN), (0, iB.e)(BB, null, jn, {
            kind: "accessor",
            name: "environmentIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentIntensity" in BB,
              get: BB => BB.environmentIntensity,
              set: (BB, jB) => {
                BB.environmentIntensity = jB
              }
            },
            metadata: jB
          }, VN, hN), (0, iB.e)(BB, null, zn, {
            kind: "accessor",
            name: "useSpecularWeightFromTextureAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularWeightFromTextureAlpha" in BB,
              get: BB => BB.useSpecularWeightFromTextureAlpha,
              set: (BB, jB) => {
                BB.useSpecularWeightFromTextureAlpha = jB
              }
            },
            metadata: jB
          }, XN, ZN), (0, iB.e)(BB, null, Qn, {
            kind: "accessor",
            name: "forceAlphaTest",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceAlphaTest" in BB,
              get: BB => BB.forceAlphaTest,
              set: (BB, jB) => {
                BB.forceAlphaTest = jB
              }
            },
            metadata: jB
          }, AN, TN), (0, iB.e)(BB, null, nn, {
            kind: "accessor",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, jB) => {
                BB.alphaCutOff = jB
              }
            },
            metadata: jB
          }, PN, WN), (0, iB.e)(BB, null, dn, {
            kind: "accessor",
            name: "useAmbientOcclusionFromMetallicTextureRed",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
              get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
              set: (BB, jB) => {
                BB.useAmbientOcclusionFromMetallicTextureRed = jB
              }
            },
            metadata: jB
          }, eN, lN), (0, iB.e)(BB, null, In, {
            kind: "accessor",
            name: "useAmbientInGrayScale",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAmbientInGrayScale" in BB,
              get: BB => BB.useAmbientInGrayScale,
              set: (BB, jB) => {
                BB.useAmbientInGrayScale = jB
              }
            },
            metadata: jB
          }, wN, xN), (0, iB.e)(BB, null, Nn, {
            kind: "getter",
            name: "usePhysicalLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "usePhysicalLightFalloff" in BB,
              get: BB => BB.usePhysicalLightFalloff
            },
            metadata: jB
          }, null, Vn), (0, iB.e)(BB, null, un, {
            kind: "getter",
            name: "useGLTFLightFalloff",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGLTFLightFalloff" in BB,
              get: BB => BB.useGLTFLightFalloff
            },
            metadata: jB
          }, null, Vn), (0, iB.e)(BB, null, Un, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, jB) => {
                BB.useObjectSpaceNormalMap = jB
              }
            },
            metadata: jB
          }, KN, CN), (0, iB.e)(BB, null, an, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, jB) => {
                BB.useParallax = jB
              }
            },
            metadata: jB
          }, cN, bN), (0, iB.e)(BB, null, pn, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, jB) => {
                BB.useParallaxOcclusion = jB
              }
            },
            metadata: jB
          }, vN, RN), (0, iB.e)(BB, null, rn, {
            kind: "accessor",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, jB) => {
                BB.parallaxScaleBias = jB
              }
            },
            metadata: jB
          }, ON, Bu), (0, iB.e)(BB, null, sn, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, jB) => {
                BB.disableLighting = jB
              }
            },
            metadata: jB
          }, ju, zu), (0, iB.e)(BB, null, Jn, {
            kind: "accessor",
            name: "forceIrradianceInFragment",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceIrradianceInFragment" in BB,
              get: BB => BB.forceIrradianceInFragment,
              set: (BB, jB) => {
                BB.forceIrradianceInFragment = jB
              }
            },
            metadata: jB
          }, Qu, nu), (0, iB.e)(BB, null, mn, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, jB) => {
                BB.maxSimultaneousLights = jB
              }
            },
            metadata: jB
          }, du, Iu), (0, iB.e)(BB, null, yn, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, jB) => {
                BB.invertNormalMapX = jB
              }
            },
            metadata: jB
          }, Nu, uu), (0, iB.e)(BB, null, kn, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, jB) => {
                BB.invertNormalMapY = jB
              }
            },
            metadata: jB
          }, Uu, au), (0, iB.e)(BB, null, Gn, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, jB) => {
                BB.twoSidedLighting = jB
              }
            },
            metadata: jB
          }, pu, ru), (0, iB.e)(BB, null, Ln, {
            kind: "accessor",
            name: "useAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFresnel" in BB,
              get: BB => BB.useAlphaFresnel,
              set: (BB, jB) => {
                BB.useAlphaFresnel = jB
              }
            },
            metadata: jB
          }, su, Ju), (0, iB.e)(BB, null, gn, {
            kind: "accessor",
            name: "useLinearAlphaFresnel",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLinearAlphaFresnel" in BB,
              get: BB => BB.useLinearAlphaFresnel,
              set: (BB, jB) => {
                BB.useLinearAlphaFresnel = jB
              }
            },
            metadata: jB
          }, mu, yu), (0, iB.e)(BB, null, tn, {
            kind: "accessor",
            name: "environmentBRDFTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "environmentBRDFTexture" in BB,
              get: BB => BB.environmentBRDFTexture,
              set: (BB, jB) => {
                BB.environmentBRDFTexture = jB
              }
            },
            metadata: jB
          }, ku, Gu), (0, iB.e)(BB, null, Sn, {
            kind: "accessor",
            name: "forceNormalForward",
            static: !1,
            private: !1,
            access: {
              has: BB => "forceNormalForward" in BB,
              get: BB => BB.forceNormalForward,
              set: (BB, jB) => {
                BB.forceNormalForward = jB
              }
            },
            metadata: jB
          }, Lu, gu), (0, iB.e)(BB, null, Mn, {
            kind: "accessor",
            name: "enableSpecularAntiAliasing",
            static: !1,
            private: !1,
            access: {
              has: BB => "enableSpecularAntiAliasing" in BB,
              get: BB => BB.enableSpecularAntiAliasing,
              set: (BB, jB) => {
                BB.enableSpecularAntiAliasing = jB
              }
            },
            metadata: jB
          }, tu, Su), (0, iB.e)(BB, null, En, {
            kind: "accessor",
            name: "useHorizonOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useHorizonOcclusion" in BB,
              get: BB => BB.useHorizonOcclusion,
              set: (BB, jB) => {
                BB.useHorizonOcclusion = jB
              }
            },
            metadata: jB
          }, Mu, Eu), (0, iB.e)(BB, null, qn, {
            kind: "accessor",
            name: "useRadianceOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useRadianceOcclusion" in BB,
              get: BB => BB.useRadianceOcclusion,
              set: (BB, jB) => {
                BB.useRadianceOcclusion = jB
              }
            },
            metadata: jB
          }, iu, qu), (0, iB.e)(BB, null, fn, {
            kind: "accessor",
            name: "unlit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unlit" in BB,
              get: BB => BB.unlit,
              set: (BB, jB) => {
                BB.unlit = jB
              }
            },
            metadata: jB
          }, fu, ou), (0, iB.e)(BB, null, Hn, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, jB) => {
                BB.applyDecalMapAfterDetailMap = jB
              }
            },
            metadata: jB
          }, Hu, Du), (0, iB.e)(BB, null, Dn, {
            kind: "accessor",
            name: "debugMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "debugMode" in BB,
              get: BB => BB.debugMode,
              set: (BB, jB) => {
                BB.debugMode = jB
              }
            },
            metadata: jB
          }, Fu, Yu), (0, iB.e)(BB, null, Fn, {
            kind: "getter",
            name: "transparencyMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "transparencyMode" in BB,
              get: BB => BB.transparencyMode
            },
            metadata: jB
          }, null, Vn), jB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jB
          })
        })(), BB.SSS_QUALITY_LOW = 0, BB.SSS_QUALITY_MEDIUM = 1, BB.SSS_QUALITY_HIGH = 2, BB._noiseTextures = {}, BB.ForceGLSL = !1, BB._ShaderLoader = new rj.c((() => [Promise.all([zB.e(322), zB.e(385)]).then((() => zB(61916))), Promise.all([zB.e(327), zB.e(323), zB.e(384), zB.e(389)]).then((() => zB(61931)))]), (() => [Promise.all([zB.e(341), zB.e(343), zB.e(388)]).then((() => zB(61965))), Promise.all([zB.e(341), zB.e(344), zB.e(387), zB.e(390)]).then((() => zB(61972)))])), BB
      })(),
      Oj = !1;
    Oj || (Oj = !0, (0, CB.e)(), (0, Wj.d)("BABYLON.OpenPBRMaterial", Rj));
    var Bz = zB(37202);
    class jz {
      constructor(BB) {
        this.name = Vj.b.NAME_PROCEDURALTEXTURE, this.ny = BB
      }
      register() {
        this.ny._beforeClearStage.registerStep(Vj.b.STEP_BEFORECLEAR_PROCEDURALTEXTURE, this, this._beforeClear)
      }
      rebuild() {}
      dispose() {}
      _beforeClear() {
        if (this.ny.proceduralTexturesEnabled) {
          Ej.i.StartPerformanceCounter("Procedural textures", this.ny.proceduralTextures.length > 0);
          for (let BB = 0; BB < this.ny.proceduralTextures.length; BB++) {
            const jB = this.ny.proceduralTextures[BB];
            jB._shouldRender() && jB.render()
          }
          Ej.i.EndPerformanceCounter("Procedural textures", this.ny.proceduralTextures.length > 0)
        }
      }
    }
    var zz = zB(40423);
    let Qz = (() => {
      var BB;
      let jB, QB, nB, IB, NB, uB = HB.i,
        UB = [],
        aB = [],
        pB = [],
        rB = [],
        sB = [],
        JB = [],
        yB = [],
        kB = [],
        GB = [];
      return BB = class extends uB {
        get shaderLanguage() {
          return this._shaderLanguage
        }
        constructor(BB, jB, zB, QB) {
          let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
            IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
            NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
          super(null, QB, !dB), this.isEnabled = ((0, iB.g)(this, UB), (0, iB.g)(this, aB, !0)), this.autoClear = ((0, iB.g)(this, pB), (0, iB.g)(this, rB, !0)), this.onGenerated = (0, iB.g)(this, sB), this.onGeneratedObservable = new Bz.c, this.onBeforeGenerationObservable = new Bz.c, this.nodeMaterialSource = null, this.defines = "", this._generateMipMaps = (0, iB.g)(this, JB, void 0), this._drawWrapper = (0, iB.g)(this, yB), this._textures = {}, this._size = (0, iB.g)(this, kB, void 0), this._textureType = (0, iB.g)(this, GB), this._currentRefreshId = -1, this._frameId = -1, this._refreshRate = 1, this._vertexBuffers = {}, this._uniforms = new Array, this._samplers = new Array, this._floats = {}, this._ints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors4 = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._matrices = {}, this._fallbackTextureUsed = !1, this._cachedDefines = null, this._contentUpdateId = -1, this._rtWrapper = null, null === nB || nB instanceof HB.i ? (this._options = {}, this._fallbackTexture = nB) : (this._options = nB, this._fallbackTexture = nB.fallbackTexture ?? null), this._shaderLanguage = this._options.shaderLanguage ?? 0;
          let uB = (QB = this.aY() || mB.c.LastCreatedScene)._getComponent(Vj.b.NAME_PROCEDURALTEXTURE);
          uB || (uB = new jz(QB), QB.wzB(uB)), this._options.skipSceneRegistration || QB.proceduralTextures.push(this), this._fullEngine = QB.wJ(), this.name = BB, this.isRenderTarget = !0, this._size = jB, this._textureType = NB, this._generateMipMaps = dB, this._drawWrapper = new zz.e(this._fullEngine), this.setFragment(zB);
          const LB = this._createRtWrapper(IB, jB, dB, NB);
          this._texture = LB.texture;
          const gB = [];
          gB.push(1, 1), gB.push(-1, 1), gB.push(-1, -1), gB.push(1, -1), this._vertexBuffers[TB.l.PositionKind] = new TB.l(this._fullEngine, gB, TB.l.PositionKind, !1, !1, 2), this._createIndexBuffer()
        }
        _createRtWrapper(BB, jB, zB, QB) {
          return BB ? (this._rtWrapper = this._fullEngine.createRenderTargetCubeTexture(jB, {
            generateMipMaps: zB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: QB,
            ...this._options
          }), this.setFloat("face", 0)) : (this._rtWrapper = this._fullEngine.createRenderTargetTexture(jB, {
            generateMipMaps: zB,
            generateDepthBuffer: !1,
            generateStencilBuffer: !1,
            type: QB,
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
            jB = [];
          jB.push(0), jB.push(1), jB.push(2), jB.push(0), jB.push(2), jB.push(3), this._indexBuffer = BB.createIndexBuffer(jB)
        }
        _rebuild() {
          const BB = this._vertexBuffers[TB.l.PositionKind];
          BB && BB._rebuild(), this._createIndexBuffer(), this.refreshRate === ij.c.REFRESHRATE_RENDER_ONCE && (this.refreshRate = ij.c.REFRESHRATE_RENDER_ONCE)
        }
        reset() {
          this._drawWrapper.effect?.dispose(), this._drawWrapper.effect = null, this._cachedDefines = null
        }
        _getDefines() {
          return this.defines
        }
        executeWhenReady(BB) {
          if (this.isReady()) return void BB(this);
          const jB = this.getEffect();
          jB && jB.executeWhenCompiled((() => {
            BB(this)
          }))
        }
        isReady() {
          const BB = this._fullEngine;
          if (this.nodeMaterialSource) return this._drawWrapper.effect?.isReady() ?? !1;
          if (!this._fragment) return !1;
          if (this._fallbackTextureUsed) return !0;
          if (!this._texture) return !1;
          const jB = this._getDefines();
          if (this._drawWrapper.effect && jB === this._cachedDefines && this._drawWrapper.effect.isReady()) return !0;
          const QB = {
            vertex: "procedural",
            fragmentElement: this._fragment.fragmentElement,
            fragmentSource: this._fragment.fragmentSource,
            fragment: "string" === typeof this._fragment ? this._fragment : void 0
          };
          return this._cachedDefines !== jB && (this._cachedDefines = jB, this._drawWrapper.effect = BB.createEffect(QB, [TB.l.PositionKind], this._uniforms, this._samplers, jB, void 0, void 0, (() => {
            this._rtWrapper?.dispose(), this._rtWrapper = this._texture = null, this._fallbackTexture && (this._texture = this._fallbackTexture._texture, this._texture && this._texture.incrementReferences()), this._fallbackTextureUsed = !0
          }), void 0, this._shaderLanguage, (async () => {
            this._options.extraInitializationsAsync ? 1 === this.shaderLanguage ? await Promise.all([zB.e(393).then((() => zB(62032))), this._options.extraInitializationsAsync()]) : await Promise.all([zB.e(394).then((() => zB(62040))), this._options.extraInitializationsAsync()]) : 1 === this.shaderLanguage ? await zB.e(393).then((() => zB(62032))) : await zB.e(394).then((() => zB(62040)))
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
        resize(BB, jB) {
          if (this._fallbackTextureUsed || !this._rtWrapper || !this._texture) return;
          const zB = this._texture.isCube;
          this._rtWrapper.dispose();
          const QB = this._createRtWrapper(zB, BB, jB, this._textureType);
          this._texture = QB.texture, this._size = BB, this._generateMipMaps = jB
        }
        _checkUniform(BB) {
          -1 === this._uniforms.indexOf(BB) && this._uniforms.push(BB)
        }
        setTexture(BB, jB) {
          return -1 === this._samplers.indexOf(BB) && this._samplers.push(BB), this._textures[BB] = jB, this
        }
        setFloat(BB, jB) {
          return this._checkUniform(BB), this._floats[BB] = jB, this
        }
        setInt(BB, jB) {
          return this._checkUniform(BB), this._ints[BB] = jB, this
        }
        setFloats(BB, jB) {
          return this._checkUniform(BB), this._floatsArrays[BB] = jB, this
        }
        setColor3(BB, jB) {
          return this._checkUniform(BB), this._colors3[BB] = jB, this
        }
        setColor4(BB, jB) {
          return this._checkUniform(BB), this._colors4[BB] = jB, this
        }
        setVector2(BB, jB) {
          return this._checkUniform(BB), this._vectors2[BB] = jB, this
        }
        setVector3(BB, jB) {
          return this._checkUniform(BB), this._vectors3[BB] = jB, this
        }
        setVector4(BB, jB) {
          return this._checkUniform(BB), this._vectors4[BB] = jB, this
        }
        setMatrix(BB, jB) {
          return this._checkUniform(BB), this._matrices[BB] = jB, this
        }
        render(BB) {
          const jB = this.aY();
          if (!jB) return;
          const zB = this._fullEngine;
          if (zB.enableEffect(this._drawWrapper), this.onBeforeGenerationObservable.notifyObservers(this), zB.setState(!1), !this.nodeMaterialSource) {
            for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB]);
            for (const BB in this._ints) this._drawWrapper.effect.setInt(BB, this._ints[BB]);
            for (const BB in this._floats) this._drawWrapper.effect.setFloat(BB, this._floats[BB]);
            for (const BB in this._floatsArrays) this._drawWrapper.effect.setArray(BB, this._floatsArrays[BB]);
            for (const BB in this._colors3) this._drawWrapper.effect.setColor3(BB, this._colors3[BB]);
            for (const BB in this._colors4) {
              const jB = this._colors4[BB];
              this._drawWrapper.effect.setFloat4(BB, jB.r, jB.g, jB.b, jB.a)
            }
            for (const BB in this._vectors2) this._drawWrapper.effect.setVector2(BB, this._vectors2[BB]);
            for (const BB in this._vectors3) this._drawWrapper.effect.setVector3(BB, this._vectors3[BB]);
            for (const BB in this._vectors4) this._drawWrapper.effect.setVector4(BB, this._vectors4[BB]);
            for (const BB in this._matrices) this._drawWrapper.effect.setMatrix(BB, this._matrices[BB])
          }
          if (!this._texture || !this._rtWrapper) return;
          zB._enableGPUDebugMarkers && zB._debugPushGroup?.(`procedural texture generation for ${this.name}`);
          const QB = zB.currentViewport;
          if (this.isCube)
            for (let nB = 0; nB < 6; nB++) zB.bindFramebuffer(this._rtWrapper, nB, void 0, void 0, !0), zB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._drawWrapper.effect.setFloat("face", nB), this.autoClear && zB.clear(jB.clearColor, !0, !1, !1), zB.drawElementsType(dB.b.TriangleFillMode, 0, 6), zB.unBindFramebuffer(this._rtWrapper, !0);
          else {
            let BB = 1;
            this._rtWrapper.is3D ? BB = this._rtWrapper.depth : this._rtWrapper.is2DArray && (BB = this._rtWrapper.layers);
            for (let QB = 0; QB < BB; QB++) {
              if (zB.bindFramebuffer(this._rtWrapper, 0, void 0, void 0, !0, 0, QB), zB.bindBuffers(this._vertexBuffers, this._indexBuffer, this._drawWrapper.effect), this._rtWrapper.is3D || this._rtWrapper.is2DArray) {
                this._drawWrapper.effect?.setFloat("layer", 1 !== BB ? QB / (BB - 1) : 0), this._drawWrapper.effect?.setInt("layerNum", QB);
                for (const BB in this._textures) this._drawWrapper.effect.setTexture(BB, this._textures[BB])
              }
              this.autoClear && zB.clear(jB.clearColor, !0, !1, !1), zB.drawElementsType(dB.b.TriangleFillMode, 0, 6), zB.unBindFramebuffer(this._rtWrapper, !this._generateMipMaps)
            }
          }
          QB && zB.setViewport(QB), this.isCube && zB.generateMipMapsForCubemap(this._texture, !0), zB._enableGPUDebugMarkers && zB._debugPopGroup?.(), this.onGenerated && this.onGenerated(), this.onGeneratedObservable.notifyObservers(this)
        }
        clone() {
          const jB = this.getSize(),
            zB = new BB(this.name, jB.width, this._fragment, this.aY(), this._fallbackTexture, this._generateMipMaps);
          return zB.hasAlpha = this.hasAlpha, zB.level = this.level, zB.coordinatesMode = this.coordinatesMode, zB
        }
        dispose() {
          const BB = this.aY();
          if (!BB) return;
          const jB = BB.proceduralTextures.indexOf(this);
          jB >= 0 && BB.proceduralTextures.splice(jB, 1);
          const zB = this._vertexBuffers[TB.l.PositionKind];
          zB && (zB.dispose(), this._vertexBuffers[TB.l.PositionKind] = null), this._indexBuffer && this._fullEngine._releaseBuffer(this._indexBuffer) && (this._indexBuffer = null), this.onGeneratedObservable.clear(), this.onBeforeGenerationObservable.clear(), super.dispose()
        }
      }, (() => {
        const zB = "function" === typeof Symbol && Symbol.metadata ? Object.create(uB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, qB.A)()], QB = [(0, qB.A)()], nB = [(0, qB.A)()], IB = [(0, qB.A)()], NB = [(0, qB.A)()], (0, iB.e)(BB, null, NB, {
          kind: "getter",
          name: "refreshRate",
          static: !1,
          private: !1,
          access: {
            has: BB => "refreshRate" in BB,
            get: BB => BB.refreshRate
          },
          metadata: zB
        }, null, UB), (0, iB.e)(null, null, jB, {
          kind: "field",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, jB) => {
              BB.isEnabled = jB
            }
          },
          metadata: zB
        }, aB, pB), (0, iB.e)(null, null, QB, {
          kind: "field",
          name: "autoClear",
          static: !1,
          private: !1,
          access: {
            has: BB => "autoClear" in BB,
            get: BB => BB.autoClear,
            set: (BB, jB) => {
              BB.autoClear = jB
            }
          },
          metadata: zB
        }, rB, sB), (0, iB.e)(null, null, nB, {
          kind: "field",
          name: "_generateMipMaps",
          static: !1,
          private: !1,
          access: {
            has: BB => "_generateMipMaps" in BB,
            get: BB => BB._generateMipMaps,
            set: (BB, jB) => {
              BB._generateMipMaps = jB
            }
          },
          metadata: zB
        }, JB, yB), (0, iB.e)(null, null, IB, {
          kind: "field",
          name: "_size",
          static: !1,
          private: !1,
          access: {
            has: BB => "_size" in BB,
            get: BB => BB._size,
            set: (BB, jB) => {
              BB._size = jB
            }
          },
          metadata: zB
        }, kB, GB), zB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zB
        })
      })(), BB
    })();

    function nz(BB) {
      return "texture" in BB
    }

    function dz(BB) {
      return "value" in BB
    }
    async function Iz(BB, jB, QB) {
      const nB = [jB.red, jB.green, jB.blue, jB.alpha],
        dB = [],
        IB = [];
      for (let zB = 0; zB < 4; zB++) {
        const BB = nB[zB];
        if (BB)
          if (nz(BB)) {
            if (BB.sourceChannel < 0 || BB.sourceChannel > 3) throw new Error("Source channel must be between 0 and 3 (R, G, B, A)");
            let jB = dB.indexOf(BB.texture); - 1 === jB && (jB = dB.length, dB.push(BB.texture)), IB[zB] = jB
          } else {
            if (!dz(BB)) throw new Error("Invalid channel input configuration");
            if (BB.value < 0 || BB.value > 1) throw new Error("Constant value must be between 0.0 and 1.0");
            IB[zB] = -1
          }
        else IB[zB] = -1
      }
      let NB = jB.outputSize;
      if (!NB && dB.length > 0) {
        let BB = 0;
        for (const jB of dB) {
          const zB = jB.getSize(),
            QB = Math.max(zB.width, zB.height);
          QB > BB && (BB = QB, NB = zB.width === zB.height ? BB : zB)
        }
      }
      NB = NB || 512;
      const uB = [],
        UB = new Set;
      for (let zB = 0; zB < 4; zB++) {
        const BB = nB[zB],
          jB = ["RED", "GREEN", "BLUE", "ALPHA"][zB];
        if (BB && nz(BB)) {
          uB.push(`${jB}_FROM_TEXTURE`);
          const BB = IB[zB];
          UB.add(BB)
        }
      }
      UB.forEach((BB => {
        uB.push(`USE_TEXTURE${BB}`)
      }));
      const aB = {
          type: 2,
          format: 5,
          samplingMode: 1,
          generateDepthBuffer: !1,
          generateMipMaps: !1,
          shaderLanguage: QB.wJ().isWebGPU ? 1 : 0,
          extraInitializationsAsync: async () => {
            QB.wJ().isWebGPU ? await Promise.all([zB.e(391).then((() => zB(62021)))]) : await Promise.all([zB.e(392).then((() => zB(62027)))])
          },
          skipSceneRegistration: !0
        },
        pB = new Qz(BB, NB, "textureMerger", QB, aB);
      pB.refreshRate = -1, pB.defines = uB.length > 0 ? "#define " + uB.join("\n#define ") + "\n" : "";
      for (let zB = 0; zB < dB.length; zB++) rB = dB[zB], (sB = pB).uOffset = rB.uOffset, sB.vOffset = rB.vOffset, sB.uScale = rB.uScale, sB.vScale = rB.vScale, sB.uAng = rB.uAng, sB.vAng = rB.vAng, sB.wAng = rB.wAng, sB.uRotationCenter = rB.uRotationCenter, sB.vRotationCenter = rB.vRotationCenter, pB.setTexture(`inputTexture${zB}`, dB[zB]);
      var rB, sB;
      for (let zB = 0; zB < 4; zB++) {
        const BB = nB[zB],
          jB = ["red", "green", "blue", "alpha"][zB];
        if (BB && nz(BB)) {
          const QB = IB[zB];
          pB.setInt(`${jB}TextureIndex`, QB), pB.setInt(`${jB}SourceChannel`, BB.sourceChannel)
        } else {
          let QB;
          QB = BB && dz(BB) ? BB.value : 3 === zB ? 1 : 0, pB.setFloat(`${jB}ConstantValue`, QB)
        }
      }
      return await new Promise(((BB, jB) => {
        pB.executeWhenReady((() => {
          try {
            pB.render(), BB(pB)
          } catch (zB) {
            jB(zB instanceof Error ? zB : new Error(String(zB)))
          }
        }))
      }))
    }

    function Nz(BB, jB) {
      return {
        texture: BB,
        sourceChannel: jB
      }
    }

    function uz(BB) {
      return {
        value: BB
      }
    }

    function Uz(BB, jB, zB, QB) {
      return {
        red: BB,
        green: jB,
        blue: zB,
        alpha: QB
      }
    }
    var az = zB(39904),
      pz = zB(40008),
      rz = zB(37194),
      sz = zB(40053),
      Jz = zB(39997);
    class mz {
      constructor() {
        this.renderWidth = 512, this.renderHeight = 256, this.textureSize = 512, this.deterministicLockstep = !1, this.lockstepMaxSteps = 4
      }
    }
    class yz extends az.b {
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
        return !!this._options?.enableMultiview || this.gm > 1 && !this.disableUniformBuffers
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new mz;
        super(null), void 0 === BB.deterministicLockstep && (BB.deterministicLockstep = !1), void 0 !== BB.timeStep && (this._timeStep = BB.timeStep), void 0 === BB.lockstepMaxSteps && (BB.lockstepMaxSteps = 4), this._options = BB, rz.b.SetMatrixPrecision(!!BB.useHighPrecisionMatrix), this._caps = {
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
        }, BB.renderingCanvas && (this._renderingCanvas = BB.renderingCanvas), fB.c.Log(`Babylon.js v${az.b.Version} - Null engine`);
        const jB = "undefined" !== typeof self ? self : "undefined" !== typeof global ? global : window;
        "undefined" === typeof URL && (jB.URL = {
          createObjectURL: function() {},
          revokeObjectURL: function() {}
        }), "undefined" === typeof Blob && (jB.Blob = function() {})
      }
      createVertexBuffer(BB) {
        const jB = new pz.e;
        return jB.references = 1, jB
      }
      createIndexBuffer(BB) {
        const jB = new pz.e;
        return jB.references = 1, jB
      }
      clear(BB, jB, zB) {}
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._options.renderWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._options.renderHeight
      }
      setViewport(BB, jB, zB) {
        this._cachedViewport = BB
      }
      createUniformBuffer(BB) {
        const jB = new pz.e;
        return jB.references = 1, jB.Ep = BB instanceof Array ? BB.length * Float32Array.BYTES_PER_ELEMENT : BB.byteLength, jB
      }
      createDynamicUniformBuffer(BB) {
        return this.createUniformBuffer(BB)
      }
      updateUniformBuffer(BB, jB, zB, QB) {}
      bindUniformBufferBase(BB, jB, zB) {}
      bindUniformBlock(BB, jB, zB) {}
      createShaderProgram(BB, jB, zB, QB, nB) {
        return {
          __SPECTOR_rebuildProgram: null
        }
      }
      getUniforms(BB, jB) {
        return []
      }
      getAttributes(BB, jB) {
        return []
      }
      bindSamplers(BB) {
        this._currentEffect = null
      }
      enableEffect(BB) {
        BB = null !== BB && (0, Jz.e)(BB) ? BB.effect : BB, this._currentEffect = BB, BB && (BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setStateCullFaceType(BB, jB) {}
      setState(BB) {}
      setIntArray(BB, jB) {
        return !0
      }
      setIntArray2(BB, jB) {
        return !0
      }
      setIntArray3(BB, jB) {
        return !0
      }
      setIntArray4(BB, jB) {
        return !0
      }
      setFloatArray(BB, jB) {
        return !0
      }
      setFloatArray2(BB, jB) {
        return !0
      }
      setFloatArray3(BB, jB) {
        return !0
      }
      setFloatArray4(BB, jB) {
        return !0
      }
      setArray(BB, jB) {
        return !0
      }
      setArray2(BB, jB) {
        return !0
      }
      setArray3(BB, jB) {
        return !0
      }
      setArray4(BB, jB) {
        return !0
      }
      setMatrices(BB, jB) {
        return !0
      }
      setMatrix3x3(BB, jB) {
        return !0
      }
      setMatrix2x2(BB, jB) {
        return !0
      }
      setFloat(BB, jB) {
        return !0
      }
      setFloat2(BB, jB, zB) {
        return !0
      }
      setFloat3(BB, jB, zB, QB) {
        return !0
      }
      setBool(BB, jB) {
        return !0
      }
      setFloat4(BB, jB, zB, QB, nB) {
        return !0
      }
      setAlphaMode(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._alphaMode[zB] !== BB && (this.alphaState.setAlphaBlend(0 !== BB, 0), jB || this.setDepthWrite(0 === BB), this._alphaMode[zB] = BB)
      }
      bindBuffers(BB, jB, zB) {}
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames || (this.resetTextureCache(), this._currentEffect = null, BB && (this._currentProgram = null, this._stencilStateComposer.reset(), this.depthCullingState.reset(), this.alphaState.reset()), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null)
      }
      draw(BB, jB, zB, QB) {}
      drawElementsType(BB, jB, zB, QB) {}
      drawArraysType(BB, jB, zB, QB) {}
      _createTexture() {
        return {}
      }
      _releaseTexture(BB) {}
      createTexture(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          IB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          NB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
        const uB = new qj.d(this, 1),
          UB = String(BB);
        return uB.url = UB, uB.generateMipMaps = !jB, uB.samplingMode = nB, uB.invertY = zB, uB.baseWidth = this._options.textureSize, uB.baseHeight = this._options.textureSize, uB.width = this._options.textureSize, uB.height = this._options.textureSize, NB && (uB.format = NB), IB && (uB._buffer = IB), uB.isReady = !0, dB && setTimeout((() => {
          dB(uB)
        })), this._internalTexturesCache.push(uB), uB
      }
      _createHardwareRenderTargetWrapper(BB, jB, zB) {
        const QB = new sz.d(BB, jB, zB, this);
        return this._renderTargetWrapperCache.push(QB), QB
      }
      createRenderTargetTexture(BB, jB) {
        const zB = this._createHardwareRenderTargetWrapper(!1, !1, BB),
          QB = {};
        void 0 !== jB && "object" === typeof jB ? (QB.generateMipMaps = jB.generateMipMaps, QB.generateDepthBuffer = void 0 === jB.generateDepthBuffer || jB.generateDepthBuffer, QB.generateStencilBuffer = QB.generateDepthBuffer && jB.generateStencilBuffer, QB.type = void 0 === jB.type ? 0 : jB.type, QB.samplingMode = void 0 === jB.samplingMode ? 3 : jB.samplingMode) : (QB.generateMipMaps = jB, QB.generateDepthBuffer = !0, QB.generateStencilBuffer = !1, QB.type = 0, QB.samplingMode = 3);
        const nB = new qj.d(this, 5);
        zB.setTexture(nB);
        const dB = BB.width || BB,
          IB = BB.height || BB;
        return zB._generateDepthBuffer = QB.generateDepthBuffer, zB._generateStencilBuffer = !!QB.generateStencilBuffer, nB.baseWidth = dB, nB.baseHeight = IB, nB.width = dB, nB.height = IB, nB.isReady = !0, nB.samples = 1, nB.generateMipMaps = !!QB.generateMipMaps, nB.samplingMode = QB.samplingMode, nB.type = QB.type, this._internalTexturesCache.push(nB), zB
      }
      createMultiviewRenderTargetTexture(BB, jB) {
        if (!this.getCaps().multiview) throw new Error("Multiview is not supported");
        const zB = this._createHardwareRenderTargetWrapper(!1, !1, {
            width: BB,
            height: jB
          }),
          QB = new qj.d(this, 5, !0);
        return QB.baseWidth = BB, QB.baseHeight = jB, QB.width = BB, QB.height = jB, QB.isMultiview = !0, QB.isReady = !0, QB.format = 5, QB.samples = 1, zB.setTextures(QB), zB
      }
      bindMultiviewFramebuffer(BB) {
        this.bindFramebuffer(BB, void 0, void 0, void 0, !0)
      }
      createRenderTargetCubeTexture(BB, jB) {
        const zB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
          QB = {
            generateMipMaps: !0,
            generateDepthBuffer: !0,
            generateStencilBuffer: !1,
            type: 0,
            samplingMode: 3,
            format: 5,
            ...jB
          };
        QB.generateStencilBuffer = QB.generateDepthBuffer && QB.generateStencilBuffer, (1 !== QB.type || this._caps.textureFloatLinearFiltering) && (2 !== QB.type || this._caps.textureHalfFloatLinearFiltering) || (QB.samplingMode = 1), zB._generateDepthBuffer = QB.generateDepthBuffer, zB._generateStencilBuffer = !!QB.generateStencilBuffer;
        const nB = new qj.d(this, 5);
        return nB.baseWidth = BB, nB.baseHeight = BB, nB.width = BB, nB.height = BB, nB.isReady = !0, nB.isCube = !0, nB.samples = 1, nB.generateMipMaps = !!QB.generateMipMaps, nB.samplingMode = QB.samplingMode, nB.type = QB.type, this._internalTexturesCache.push(nB), zB
      }
      updateTextureSamplingMode(BB, jB) {
        jB.samplingMode = BB
      }
      createRawTexture(BB, jB, zB, QB, nB, dB, IB) {
        let NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          uB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          UB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const aB = new qj.d(this, 3);
        return aB.baseWidth = jB, aB.baseHeight = zB, aB.width = jB, aB.height = zB, aB.format = QB, aB.generateMipMaps = nB, aB.samplingMode = IB, aB.invertY = dB, aB._compression = NB, aB.type = uB, aB._useSRGBBuffer = UB, this._doNotHandleContextLost || (aB._bufferView = BB), aB
      }
      updateRawTexture(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        BB && (BB._bufferView = jB, BB.format = zB, BB.invertY = QB, BB._compression = nB, BB.type = dB, BB._useSRGBBuffer = IB)
      }
      bindFramebuffer(BB, jB, zB, QB, nB) {
        this._currentRenderTarget && this.unBindFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._currentFramebuffer = null, this._cachedViewport && !nB && this.setViewport(this._cachedViewport, zB, QB)
      }
      unBindFramebuffer(BB) {
        let jB = arguments.length > 2 ? arguments[2] : void 0;
        this._currentRenderTarget = null, jB && jB(), this._currentFramebuffer = null
      }
      createDynamicVertexBuffer(BB) {
        const jB = new pz.e;
        return jB.references = 1, jB.Ep = 1, jB
      }
      updateDynamicTexture(BB, jB, zB) {}
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
      updateDynamicIndexBuffer(BB, jB) {}
      updateDynamicVertexBuffer(BB, jB, zB, QB) {}
      _bindTextureDirectly(BB, jB) {
        return this._boundTexturesCache[this._activeChannel] !== jB && (this._boundTexturesCache[this._activeChannel] = jB, !0)
      }
      _bindTexture(BB, jB) {
        BB < 0 || this._bindTextureDirectly(0, jB)
      }
      _deleteBuffer(BB) {}
      releaseEffects() {}
      displayLoadingUI() {}
      hideLoadingUI() {}
      set loadingUIText(BB) {}
      flushFramebuffer() {}
      _uploadCompressedDataToTextureDirectly(BB, jB, zB, QB, nB) {}
      _uploadDataToTextureDirectly(BB, jB) {}
      _uploadArrayBufferViewToTexture(BB, jB) {}
      _uploadImageToTexture(BB, jB) {}
    }
    zB(40101), zB(40137), zB(40092);
    async function kz(BB) {
      const jB = BB.getInternalTexture();
      if (!jB || 1 !== jB.source) return null;
      if (jB.invertY) {
        const jB = BB.aY()?.wJ();
        if (!(jB instanceof yz)) return null
      }
      const zB = jB._buffer;
      let QB, dB = BB.mimeType;
      try {
        zB ? ArrayBuffer.isView(zB) ? QB = zB.buffer.slice(zB.byteOffset, zB.byteOffset + zB.byteLength) : zB instanceof ArrayBuffer ? QB = zB : zB instanceof Blob ? (QB = await zB.arrayBuffer(), dB = zB.type || dB) : "string" === typeof zB ? (QB = await nB.Tools.LoadFileAsync(zB), dB = (0, uB.b)(zB) || dB) : "undefined" !== typeof HTMLImageElement && zB instanceof HTMLImageElement && (QB = await nB.Tools.LoadFileAsync(zB.src), dB = (0, uB.b)(zB.src) || dB) : (QB = await nB.Tools.LoadFileAsync(jB.url), dB = (0, uB.b)(jB.url) || dB)
      } catch {
        return null
      }
      if (QB && !dB && jB.url) {
        const BB = jB.url.match(/^data:([^;,]+)/);
        dB = BB ? BB[1] : (0, uB.b)(jB.url)
      }
      return QB && dB ? {
        data: QB,
        mimeType: dB
      } : null
    }
    const Gz = 1e-6,
      Lz = new yB.Color3(.04, .04, .04),
      gz = 1024,
      tz = yB.Color3.White(),
      Sz = yB.Color3.BlackReadOnly;

    function Mz(BB) {
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

    function Ez(BB, jB, zB) {
      if (jB < Lz.r) return 0;
      const QB = Lz.r,
        nB = BB * zB / (1 - Lz.r) + jB - 2 * Lz.r,
        dB = nB * nB - 4 * QB * (Lz.r - jB);
      return LB.Clamp((-nB + Math.sqrt(dB)) / (2 * QB), 0, 1)
    }

    function iz(BB) {
      const jB = BB.diffuseColor.toLinearSpace(BB.aY().wJ().useExactSrgbConversions).scale(.5),
        zB = BB.alpha,
        QB = function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new AB.i(0, 1),
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new AB.i(0, .1),
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AB.i(0, .1),
            nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new AB.i(1300, .1);
          return function(BB, jB, zB, QB, nB) {
            return (1 - BB) * (1 - BB) * (1 - BB) * jB + 3 * (1 - BB) * (1 - BB) * BB * zB + 3 * (1 - BB) * BB * BB * QB + BB * BB * BB * nB
          }(Math.pow(BB / nB.x, .333333), jB.y, zB.y, QB.y, nB.y)
        }(LB.Clamp(BB.specularPower, 0, gz));
      return {
        baseColorFactor: [jB.r, jB.g, jB.b, zB],
        metallicFactor: 0,
        roughnessFactor: QB
      }
    }

    function qz(BB, jB) {
      jB.needAlphaBlending() ? BB.alphaMode = "BLEND" : jB.needAlphaTesting() && (BB.alphaMode = "MASK", BB.alphaCutoff = jB.alphaCutOff)
    }

    function fz(BB, jB, zB) {
      const QB = new Uint8Array(BB * jB * 4);
      for (let nB = 0; nB < QB.length; nB += 4) QB[nB] = QB[nB + 1] = QB[nB + 2] = QB[nB + 3] = 255;
      return SB.c.CreateRGBATexture(QB, BB, jB, zB)
    }

    function oz(BB) {
      if (BB instanceof Uint8Array) {
        const jB = BB.length,
          zB = new Float32Array(BB.length);
        for (let QB = 0; QB < jB; ++QB) zB[QB] = BB[QB] / 255;
        return zB
      }
      if (BB instanceof Float32Array) return BB;
      throw new Error("Unsupported pixel format!")
    }
    class Hz {
      constructor(BB) {
        this._exporter = BB, this._textureMap = new Map, this._internalTextureToImage = {}
      }
      getTextureInfo(BB) {
        return BB ? this._textureMap.get(BB.uniqueId) ?? null : null
      }
      async exportStandardMaterialAsync(BB, jB) {
        const zB = iz(BB),
          QB = {
            name: BB.name
          };
        if (null == BB.backFaceCulling || BB.backFaceCulling || (BB.twoSidedLighting || nB.Tools.Warn(BB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), QB.doubleSided = !0), jB) {
          const jB = [],
            nB = BB.diffuseTexture;
          nB && jB.push(this.exportTextureAsync(nB).then((BB => {
            BB && (zB.baseColorTexture = BB)
          })));
          const dB = BB.bumpTexture;
          dB && jB.push(this.exportTextureAsync(dB).then((BB => {
            BB && (QB.normalTexture = BB, 1 !== dB.level && (QB.normalTexture.scale = dB.level))
          })));
          const IB = BB.emissiveTexture;
          IB && (QB.emissiveFactor = [1, 1, 1], jB.push(this.exportTextureAsync(IB).then((BB => {
            BB && (QB.emissiveTexture = BB)
          }))));
          const NB = BB.ambientTexture;
          NB && jB.push(this.exportTextureAsync(NB).then((BB => {
            if (BB) {
              const jB = {
                index: BB.index
              };
              QB.occlusionTexture = jB
            }
          }))), jB.length > 0 && (this._exporter._materialNeedsUVsSet.add(BB), await Promise.all(jB))
        }(BB.alpha < 1 || BB.opacityTexture) && (BB.alphaMode === MB.e.ALPHA_COMBINE ? QB.alphaMode = "BLEND" : nB.Tools.Warn(BB.name + ": glTF 2.0 does not support alpha mode: " + BB.alphaMode.toString())), BB.emissiveColor && !BB.emissiveColor.equalsWithEpsilon(Sz, Gz) && (QB.emissiveFactor = BB.emissiveColor.nQB()), QB.pbrMetallicRoughness = zB, qz(QB, BB), await this._finishMaterialAsync(QB, BB);
        const dB = this._exporter._materials;
        return dB.push(QB), dB.length - 1
      }
      async _finishMaterialAsync(BB, jB) {
        const zB = await this._exporter._extensionsPostExportMaterialAdditionalTexturesAsync("exportMaterial", BB, jB),
          QB = [];
        for (const nB of zB) QB.push(this.exportTextureAsync(nB));
        await Promise.all(QB), await this._exporter._extensionsPostExportMaterialAsync("exportMaterial", BB, jB)
      }
      _resizeTexturesToSameDimensions(BB, jB, zB) {
        const QB = BB ? BB.getSize() : {
            width: 0,
            height: 0
          },
          nB = jB ? jB.getSize() : {
            width: 0,
            height: 0
          };
        let dB, IB;
        return QB.width < nB.width ? (dB = BB && BB instanceof tB.d ? gB.m.CreateResizedCopy(BB, nB.width, nB.height, !0) : fz(nB.width, nB.height, zB), IB = jB) : QB.width > nB.width ? (IB = jB && jB instanceof tB.d ? gB.m.CreateResizedCopy(jB, QB.width, QB.height, !0) : fz(QB.width, QB.height, zB), dB = BB) : (dB = BB, IB = jB), {
          texture1: dB,
          texture2: IB
        }
      }
      async _convertSpecularGlossinessTexturesToMetallicRoughnessAsync(BB, jB, zB) {
        const QB = new Array;
        if (!BB && !jB) return await Promise.reject("diffuse and specular glossiness textures are not defined!");
        const nB = BB ? BB.aY() : jB ? jB.aY() : null;
        if (nB) {
          const dB = this._resizeTexturesToSameDimensions(BB, jB, nB),
            IB = dB.texture1?.getSize();
          let NB, uB;
          const UB = IB.width,
            aB = IB.height,
            pB = await dB.texture1.readPixels(),
            rB = await dB.texture2.readPixels();
          if (!pB) return await Promise.reject("Failed to retrieve pixels from diffuse texture!");
          if (NB = oz(pB), !rB) return await Promise.reject("Failed to retrieve pixels from specular glossiness texture!");
          uB = oz(rB);
          const sB = uB.byteLength,
            JB = new Uint8Array(sB),
            mB = new Uint8Array(sB),
            kB = 4,
            GB = new yB.Color3(0, 0, 0);
          let LB = 0,
            gB = 0;
          for (let BB = 0; BB < aB; ++BB)
            for (let jB = 0; jB < UB; ++jB) {
              const QB = (UB * BB + jB) * kB,
                IB = {
                  diffuseColor: new yB.Color3(NB[QB], NB[QB + 1], NB[QB + 2]).toLinearSpace(nB.wJ().useExactSrgbConversions).multiply(zB.diffuseColor),
                  specularColor: new yB.Color3(uB[QB], uB[QB + 1], uB[QB + 2]).toLinearSpace(nB.wJ().useExactSrgbConversions).multiply(zB.specularColor),
                  glossiness: uB[QB + 3] * zB.glossiness
                },
                aB = this._convertSpecularGlossinessToMetallicRoughness(IB);
              GB.r = Math.max(GB.r, aB.baseColor.r), GB.g = Math.max(GB.g, aB.baseColor.g), GB.b = Math.max(GB.b, aB.baseColor.b), LB = Math.max(LB, aB.metallic), gB = Math.max(gB, aB.roughness), mB[QB] = 255 * aB.baseColor.r, mB[QB + 1] = 255 * aB.baseColor.g, mB[QB + 2] = 255 * aB.baseColor.b, mB[QB + 3] = dB.texture1.hasAlpha ? 255 * NB[QB + 3] : 255, JB[QB] = 0, JB[QB + 1] = 255 * aB.roughness, JB[QB + 2] = 255 * aB.metallic, JB[QB + 3] = 255
            }
          const tB = {
            baseColor: GB,
            metallic: LB,
            roughness: gB
          };
          let SB = !1,
            MB = !1;
          for (let BB = 0; BB < aB; ++BB)
            for (let jB = 0; jB < UB; ++jB) {
              const zB = (UB * BB + jB) * kB;
              mB[zB] /= tB.baseColor.r > Gz ? tB.baseColor.r : 1, mB[zB + 1] /= tB.baseColor.g > Gz ? tB.baseColor.g : 1, mB[zB + 2] /= tB.baseColor.b > Gz ? tB.baseColor.b : 1;
              const QB = yB.Color3.FromInts(mB[zB], mB[zB + 1], mB[zB + 2]).toGammaSpace(nB.wJ().useExactSrgbConversions);
              mB[zB] = 255 * QB.r, mB[zB + 1] = 255 * QB.g, mB[zB + 2] = 255 * QB.b, QB.equalsWithEpsilon(tz, Gz) || (MB = !0), JB[zB + 1] /= tB.roughness > Gz ? tB.roughness : 1, JB[zB + 2] /= tB.metallic > Gz ? tB.metallic : 1;
              yB.Color3.FromInts(255, JB[zB + 1], JB[zB + 2]).equalsWithEpsilon(tz, Gz) || (SB = !0)
            }
          return SB && QB.push((0, EB.EncodeImageAsync)(JB, UB, aB).then((BB => {
            tB.metallicRoughnessTextureData = BB
          }))), MB && QB.push((0, EB.EncodeImageAsync)(mB, UB, aB).then((BB => {
            tB.baseColorTextureData = BB
          }))), await Promise.all(QB).then((() => tB))
        }
        return await Promise.reject("_ConvertSpecularGlossinessTexturesToMetallicRoughness: Scene from textures is missing!")
      }
      _convertSpecularGlossinessToMetallicRoughness(BB) {
        const jB = this._getPerceivedBrightness(BB.diffuseColor),
          zB = this._getPerceivedBrightness(BB.specularColor),
          QB = 1 - this._getMaxComponent(BB.specularColor),
          nB = Ez(jB, zB, QB),
          dB = BB.diffuseColor.scale(QB / (1 - Lz.r) / Math.max(1 - nB, Gz)),
          IB = BB.specularColor.subtract(Lz.scale(1 - nB)).scale(1 / Math.max(nB, Gz));
        let NB = yB.Color3.Lerp(dB, IB, nB * nB);
        NB = NB.clampToRef(0, 1, NB);
        return {
          baseColor: NB,
          metallic: nB,
          roughness: 1 - BB.glossiness
        }
      }
      _getPerceivedBrightness(BB) {
        return Math.sqrt(.299 * BB.r * BB.r + .587 * BB.g * BB.g + .114 * BB.b * BB.b)
      }
      _getMaxComponent(BB) {
        return Math.max(BB.r, Math.max(BB.g, BB.b))
      }
      async _convertMetalRoughFactorsToMetallicRoughnessAsync(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        const UB = [],
          aB = {
            baseColor: BB,
            metallic: jB,
            roughness: zB
          };
        if (uB)
          if (IB instanceof Rj) {
            if (IB.geometryOpacityTexture) {
              const BB = QB && QB.getInternalTexture() ? QB.getInternalTexture().uniqueId : 0,
                jB = IB.geometryOpacityTexture && IB.geometryOpacityTexture.getInternalTexture() ? IB.geometryOpacityTexture.getInternalTexture().uniqueId : 0,
                zB = Number(`${BB}${jB}`),
                nB = this._textureMap.get(zB);
              nB ? NB.baseColorTexture = nB : UB.push(Iz("baseColorOpacityTexture", Uz(QB ? Nz(QB, 0) : uz(1), QB ? Nz(QB, 1) : uz(1), QB ? Nz(QB, 2) : uz(1), Nz(IB.geometryOpacityTexture, 0)), IB.aY()).then((async BB => {
                const jB = await this.exportTextureAsync(BB, zB);
                jB && (NB.baseColorTexture = jB)
              })))
            } else QB && UB.push(this.exportTextureAsync(QB).then((BB => {
              BB && (NB.baseColorTexture = BB)
            })));
            if (IB._useMetallicFromMetallicTextureBlue && nB) UB.push(this.exportTextureAsync(nB).then((BB => {
              BB && (NB.metallicRoughnessTexture = BB)
            })));
            else if (dB || nB) {
              const BB = nB && nB.getInternalTexture() ? nB.getInternalTexture().uniqueId : 0,
                jB = dB && dB.getInternalTexture() ? dB.getInternalTexture().uniqueId : 0,
                zB = Number(`${BB}${jB}`),
                QB = this._textureMap.get(zB);
              QB ? NB.metallicRoughnessTexture = QB : UB.push(Iz("MetalRoughTexture", Uz(IB.ambientOcclusionTexture ? Nz(IB.ambientOcclusionTexture, 0) : uz(1), dB ? Nz(dB, 0) : uz(1), nB ? Nz(nB, 0) : uz(1)), IB.aY()).then((async BB => {
                const jB = await this.exportTextureAsync(BB, zB);
                jB && (NB.metallicRoughnessTexture = jB)
              })))
            }
          } else QB && UB.push(this.exportTextureAsync(QB).then((BB => {
            BB && (NB.baseColorTexture = BB)
          }))), nB && UB.push(this.exportTextureAsync(nB).then((BB => {
            BB && (NB.metallicRoughnessTexture = BB)
          })));
        return UB.length > 0 && (this._exporter._materialNeedsUVsSet.add(IB), await Promise.all(UB)), aB
      }
      _getTextureSampler(BB) {
        const jB = {};
        if (!BB || !(BB instanceof tB.d)) return jB;
        const zB = this._getGLTFTextureWrapMode(BB.wrapU);
        10497 !== zB && (jB.wrapS = zB);
        const QB = this._getGLTFTextureWrapMode(BB.wrapV);
        switch (10497 !== QB && (jB.wrapT = QB), BB.samplingMode) {
          case tB.d.LINEAR_LINEAR:
            jB.magFilter = 9729, jB.minFilter = 9729;
            break;
          case tB.d.LINEAR_NEAREST:
            jB.magFilter = 9729, jB.minFilter = 9728;
            break;
          case tB.d.NEAREST_LINEAR:
            jB.magFilter = 9728, jB.minFilter = 9729;
            break;
          case tB.d.NEAREST_LINEAR_MIPLINEAR:
            jB.magFilter = 9728, jB.minFilter = 9987;
            break;
          case tB.d.NEAREST_NEAREST:
            jB.magFilter = 9728, jB.minFilter = 9728;
            break;
          case tB.d.NEAREST_LINEAR_MIPNEAREST:
            jB.magFilter = 9728, jB.minFilter = 9985;
            break;
          case tB.d.LINEAR_NEAREST_MIPNEAREST:
            jB.magFilter = 9729, jB.minFilter = 9984;
            break;
          case tB.d.LINEAR_NEAREST_MIPLINEAR:
            jB.magFilter = 9729, jB.minFilter = 9986;
            break;
          case tB.d.NEAREST_NEAREST_MIPLINEAR:
            jB.magFilter = 9728, jB.minFilter = 9986;
            break;
          case tB.d.LINEAR_LINEAR_MIPLINEAR:
            jB.magFilter = 9729, jB.minFilter = 9987;
            break;
          case tB.d.LINEAR_LINEAR_MIPNEAREST:
            jB.magFilter = 9729, jB.minFilter = 9985;
            break;
          case tB.d.NEAREST_NEAREST_MIPNEAREST:
            jB.magFilter = 9728, jB.minFilter = 9984
        }
        return jB
      }
      _getGLTFTextureWrapMode(BB) {
        switch (BB) {
          case tB.d.WRAP_ADDRESSMODE:
            return 10497;
          case tB.d.CLAMP_ADDRESSMODE:
            return 33071;
          case tB.d.MIRROR_ADDRESSMODE:
            return 33648;
          default:
            return nB.Tools.Error(`Unsupported Texture Wrap Mode ${BB}!`), 10497
        }
      }
      async _convertSpecGlossFactorsToMetallicRoughnessAsync(BB, jB, zB) {
        const QB = {
            diffuseColor: BB._albedoColor,
            specularColor: BB._reflectivityColor,
            glossiness: BB._microSurface
          },
          nB = BB._albedoTexture,
          dB = BB._reflectivityTexture,
          IB = BB._useMicroSurfaceFromReflectivityMapAlpha;
        if (dB && !IB) return await Promise.reject("_ConvertPBRMaterial: Glossiness values not included in the reflectivity texture are currently not supported");
        if ((nB || dB) && zB) {
          this._exporter._materialNeedsUVsSet.add(BB);
          const zB = this._exportTextureSampler(nB || dB),
            IB = await this._convertSpecularGlossinessTexturesToMetallicRoughnessAsync(nB, dB, QB),
            NB = this._exporter._textures;
          if (IB.baseColorTextureData) {
            const BB = await this._exportImageAsync(`baseColor${NB.length}`, IB.baseColorTextureData);
            jB.baseColorTexture = this._exportTextureInfo(BB, zB, nB?.coordinatesIndex)
          }
          if (IB.metallicRoughnessTextureData) {
            const BB = await this._exportImageAsync(`metallicRoughness${NB.length}`, IB.metallicRoughnessTextureData);
            jB.metallicRoughnessTexture = this._exportTextureInfo(BB, zB, dB?.coordinatesIndex)
          }
          return IB
        }
        return this._convertSpecularGlossinessToMetallicRoughness(QB)
      }
      async exportPBRMaterialAsync(BB, jB) {
        const zB = {},
          QB = {
            name: BB.name
          },
          nB = BB.isMetallicWorkflow();
        if (nB) {
          const jB = BB._albedoColor,
            QB = BB.alpha;
          jB && (zB.baseColorFactor = [jB.r, jB.g, jB.b, QB])
        }
        const dB = nB ? await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB._albedoColor, BB._metallic, BB._roughness, BB._albedoTexture, BB._metallicTexture, BB._metallicTexture, BB, zB, jB) : await this._convertSpecGlossFactorsToMetallicRoughnessAsync(BB, zB, jB);
        await this._setMetallicRoughnessPbrMaterialAsync(dB, BB, QB, zB, jB), await this._finishMaterialAsync(QB, BB);
        const IB = this._exporter._materials;
        return IB.push(QB), IB.length - 1
      }
      async _setMetallicRoughnessPbrMaterialAsync(BB, jB, zB, QB, dB) {
        if (qz(zB, jB), BB.baseColor.equalsWithEpsilon(tz, Gz) && LB.WithinEpsilon(jB.alpha, 1, Gz) || (QB.baseColorFactor = [BB.baseColor.r, BB.baseColor.g, BB.baseColor.b, jB.alpha]), null != BB.metallic && 1 !== BB.metallic && (QB.metallicFactor = BB.metallic), null != BB.roughness && 1 !== BB.roughness && (QB.roughnessFactor = BB.roughness), null == jB.backFaceCulling || jB.backFaceCulling || (jB._twoSidedLighting || nB.Tools.Warn(jB.name + ": Back-face culling disabled and two-sided lighting disabled is not supported in glTF."), zB.doubleSided = !0), dB) {
          const BB = [],
            nB = jB instanceof Sj ? jB._bumpTexture : jB.geometryNormalTexture;
          nB && BB.push(this.exportTextureAsync(nB).then((BB => {
            BB && (zB.normalTexture = BB, 1 !== nB.level && (zB.normalTexture.scale = nB.level))
          })));
          const dB = jB instanceof Sj ? jB._ambientTexture : jB.ambientOcclusionTexture;
          dB && BB.push(new Promise((async BB => {
            if (jB instanceof Rj && QB.metallicRoughnessTexture) {
              const jB = this._exportTextureSampler(dB),
                zB = this._exporter._textures[QB.metallicRoughnessTexture.index].source,
                nB = this._exportTextureInfo(zB, jB, dB.coordinatesIndex);
              return this._textureMap.set(dB.uniqueId, nB), this._exporter._extensionsPostExportTextures("exporter", nB, dB), BB(nB)
            }
            return BB(await this.exportTextureAsync(dB))
          })).then((async BB => {
            if (BB) {
              const QB = {
                index: BB.index,
                texCoord: BB.texCoord,
                extensions: BB.extensions
              };
              zB.occlusionTexture = QB, QB.strength = jB instanceof Sj ? jB._ambientTextureStrength : jB.ambientOcclusionTexture.level
            }
          })));
          const IB = jB instanceof Sj ? jB._emissiveTexture : jB.emissionColorTexture;
          IB && BB.push(this.exportTextureAsync(IB).then((BB => {
            BB && (zB.emissiveTexture = BB)
          }))), BB.length > 0 && (this._exporter._materialNeedsUVsSet.add(jB), await Promise.all(BB))
        }
        const IB = jB instanceof Sj ? jB._emissiveColor : jB.emissionColor;
        IB.equalsWithEpsilon(Sz, Gz) || (zB.emissiveFactor = IB.nQB()), zB.pbrMetallicRoughness = QB
      }
      async exportOpenPBRMaterialAsync(BB, jB) {
        const zB = {},
          QB = {
            name: BB.name
          },
          nB = BB.baseColor,
          dB = BB.geometryOpacity;
        nB && (zB.baseColorFactor = [nB.r, nB.g, nB.b, dB]);
        const IB = await this._convertMetalRoughFactorsToMetallicRoughnessAsync(BB.baseColor, BB.baseMetalness, BB.specularRoughness, BB.baseColorTexture, BB.baseMetalnessTexture, BB.specularRoughnessTexture, BB, zB, jB);
        await this._setMetallicRoughnessPbrMaterialAsync(IB, BB, QB, zB, jB), await this._finishMaterialAsync(QB, BB);
        const NB = this._exporter._materials;
        return NB.push(QB), NB.length - 1
      }
      async exportTextureAsync(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = this._textureMap.get(jB ?? BB.uniqueId);
        if (zB) return zB;
        const QB = this._exportTextureSampler(BB),
          nB = await this._exportTextureImageAsync(BB);
        return zB = this._exportTextureInfo(nB, QB, BB.coordinatesIndex), this._textureMap.set(jB ?? BB.uniqueId, zB), this._exporter._extensionsPostExportTextures("exporter", zB, BB), zB
      }
      async _exportTextureImageAsync(BB) {
        const jB = BB.mimeType ?? "none",
          zB = this._internalTextureToImage,
          QB = BB.getInternalTexture().uniqueId;
        zB[QB] = zB[QB] || {};
        let dB = zB[QB][jB];
        return void 0 === dB && (dB = (async () => {
          const zB = await kz(BB);
          if (zB && Mz(zB.mimeType) && ("none" === jB || zB.mimeType === jB)) return await this._exportImageAsync(BB.name, new Blob([zB.data], {
            type: zB.mimeType
          }));
          let QB = "image/png";
          "none" !== jB && (Mz(jB) ? QB = jB : (QB = "image/png", nB.Tools.Warn(`Unsupported media type: ${jB}. Exporting texture as PNG.`)));
          const dB = BB.getSize(),
            IB = await (0, gB.i)(BB),
            NB = await (0, EB.EncodeImageAsync)(IB, dB.width, dB.height, QB);
          return await this._exportImageAsync(BB.name, NB)
        })(), zB[QB][jB] = dB), await dB
      }
      async _exportImageAsync(BB, jB) {
        const zB = this._exporter._images;
        let QB;
        if (this._exporter._shouldUseGlb) {
          QB = {
            name: BB,
            mimeType: jB.type,
            bufferView: void 0
          };
          const zB = await jB.arrayBuffer(),
            nB = this._exporter._bufferManager.createBufferView(new Uint8Array(zB));
          this._exporter._bufferManager.setBufferView(QB, nB)
        } else {
          const dB = BB.replace(/\.\/|\/|\.\\|\\/g, "_"),
            IB = function(BB) {
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
            }(jB.type);
          let NB = dB + IB;
          zB.some((BB => BB.uri === NB)) && (NB = `${dB}_${nB.Tools.RandomId()}${IB}`), QB = {
            name: BB,
            uri: NB
          }, this._exporter._imageData[NB] = jB
        }
        return zB.push(QB), zB.length - 1
      }
      _exportTextureInfo(BB, jB, zB) {
        const QB = this._exporter._textures;
        let nB = QB.findIndex((zB => zB.sampler == jB && zB.source === BB)); - 1 === nB && (nB = QB.length, QB.push({
          source: BB,
          sampler: jB
        }));
        const dB = {
          index: nB
        };
        return zB && (dB.texCoord = zB), dB
      }
      _exportTextureSampler(BB) {
        const jB = this._getTextureSampler(BB),
          zB = this._exporter._samplers,
          QB = zB.findIndex((BB => BB.minFilter === jB.minFilter && BB.magFilter === jB.magFilter && BB.wrapS === jB.wrapS && BB.wrapT === jB.wrapT));
        return -1 !== QB ? QB : (zB.push(jB), zB.length - 1)
      }
    }
    var Dz = zB(40125),
      Fz = zB(40292);
    (0, Fz.d)();
    var Yz = zB(37178);
    const Vz = QB.Matrix.Compose(new QB.KJ(-1, 1, 1), QB.Quaternion.Identity(), QB.KJ.Zero());

    function hz(BB, jB) {
      if (!(BB instanceof pB.e)) return !1;
      if (jB) {
        if (!BB.getWorldMatrix().equalsWithEpsilon(QB.Matrix.IdentityReadOnly, Yz.c)) return !1
      } else {
        if (!BB.getWorldMatrix().multiplyToRef(Vz, QB.TmpVectors.Matrix[0]).equalsWithEpsilon(QB.Matrix.IdentityReadOnly, Yz.c)) return !1
      }
      return !(BB instanceof rB.e && BB.geometry)
    }
    const Xz = QB.KJ.ZeroReadOnly,
      Zz = QB.Quaternion.Identity(),
      Az = QB.KJ.OneReadOnly,
      Tz = new QB.KJ(-1, 1, 1);

    function Pz(BB, jB) {
      const {
        byteOffset: zB,
        byteStride: QB,
        type: nB,
        normalized: dB
      } = BB, IB = BB.getSize(), NB = jB.reduce(((BB, jB) => jB.getTotalVertices() > BB ? jB.getTotalVertices() : BB), -Number.MAX_VALUE);
      return {
        byteOffset: zB,
        byteStride: QB,
        componentCount: IB,
        type: nB,
        count: NB * IB,
        normalized: dB,
        totalVertices: NB,
        kind: BB.getKind()
      }
    }

    function Wz(BB) {
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

    function ez(BB) {
      switch (BB) {
        case aB.d.PositionKind:
        case aB.d.NormalKind:
        case aB.d.TangentKind:
        case aB.d.ColorKind:
        case aB.d.MatricesIndicesKind:
        case aB.d.MatricesIndicesExtraKind:
        case aB.d.MatricesWeightsKind:
        case aB.d.MatricesWeightsExtraKind:
        case aB.d.UVKind:
        case aB.d.UV2Kind:
        case aB.d.UV3Kind:
        case aB.d.UV4Kind:
        case aB.d.UV5Kind:
        case aB.d.UV6Kind:
          return !0
      }
      return !1
    }

    function lz(BB) {
      const jB = Math.sqrt(BB.x * BB.x + BB.y * BB.y + BB.z * BB.z);
      jB > 0 && (BB.x /= jB, BB.y /= jB, BB.z /= jB)
    }

    function wz(BB) {
      return BB.x *= -1, BB
    }

    function xz(BB) {
      if (BB.x * BB.x + BB.y * BB.y > .5) {
        const jB = Math.abs(BB.x),
          zB = Math.abs(BB.y);
        if (jB > zB) {
          const zB = Math.sign(BB.x);
          BB.x = jB, BB.y *= -zB, BB.z *= -zB, BB.w *= zB
        } else {
          const jB = Math.sign(BB.y);
          BB.x *= -jB, BB.y = zB, BB.z *= jB, BB.w *= -jB
        }
      } else {
        const jB = Math.abs(BB.z),
          zB = Math.abs(BB.w);
        if (jB > zB) {
          const zB = Math.sign(BB.z);
          BB.x *= -zB, BB.y *= zB, BB.z = jB, BB.w *= -zB
        } else {
          const jB = Math.sign(BB.w);
          BB.x *= jB, BB.y *= -jB, BB.z *= -jB, BB.w = zB
        }
      }
      return BB
    }

    function Kz(BB) {
      BB.U3(-BB.z, BB.w, BB.x, -BB.y)
    }

    function Cz(BB, jB) {
      const zB = QB.KJ.FromArrayToRef(jB.translation || [0, 0, 0], 0, QB.TmpVectors.KJ[0]),
        nB = QB.Quaternion.FromArrayToRef(jB.rotation || [0, 0, 0, 1], 0, QB.TmpVectors.Quaternion[0]),
        dB = QB.Matrix.ComposeToRef(Az, nB, zB, QB.TmpVectors.Matrix[0]),
        IB = QB.KJ.FromArrayToRef(BB.translation || [0, 0, 0], 0, QB.TmpVectors.KJ[2]),
        NB = QB.Quaternion.FromArrayToRef(BB.rotation || [0, 0, 0, 1], 0, QB.TmpVectors.Quaternion[1]),
        uB = QB.Matrix.ComposeToRef(Az, NB, IB, QB.TmpVectors.Matrix[1]);
      dB.multiplyToRef(uB, uB), uB.decompose(void 0, nB, zB), zB.equalsWithEpsilon(Xz, Yz.c) ? delete jB.translation : jB.translation = zB.nQB(), nB.equalsWithEpsilon(Zz, Yz.c) ? delete jB.rotation : jB.rotation = nB.nQB(), jB.scale && delete jB.scale
    }

    function cz(BB, jB) {
      if (!(jB instanceof pB.e)) return !1;
      if (!(1 === jB.getChildren().length && 0 === BB.getChildren().length && BB.parent === jB)) return !1;
      const zB = BB.aY(),
        QB = BB instanceof Fz.g && !zB.useRightHandedSystem ? Tz : Az;
      return !!jB.pp.equalsWithEpsilon(QB, Yz.c) || (fB.c.Warn(`Cannot collapse node ${BB.name} into parent node ${jB.name} with modified scaling.`), !1)
    }

    function bz(BB) {
      if (BB instanceof Array) {
        const jB = new Float32Array(BB);
        return new Uint8Array(jB.buffer, jB.byteOffset, jB.byteLength)
      }
      return ArrayBuffer.isView(BB) ? new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength) : new Uint8Array(BB)
    }

    function vz(BB, jB) {
      for (const [zB, QB] of Object.entries(BB)) {
        const nB = jB[zB];
        (Array.isArray(QB) && Array.isArray(nB) && Rz(QB, nB) || QB === nB) && delete BB[zB]
      }
      return BB
    }

    function Rz(BB, jB) {
      return BB.length === jB.length && BB.every(((BB, zB) => BB === jB[zB]))
    }
    const Oz = new Map([
      [Int8Array, (BB, jB, zB) => BB.setInt8(jB, zB)],
      [Uint8Array, (BB, jB, zB) => BB.setUint8(jB, zB)],
      [Uint8ClampedArray, (BB, jB, zB) => BB.setUint8(jB, zB)],
      [Int16Array, (BB, jB, zB) => BB.setInt16(jB, zB, !0)],
      [Uint16Array, (BB, jB, zB) => BB.setUint16(jB, zB, !0)],
      [Int32Array, (BB, jB, zB) => BB.setInt32(jB, zB, !0)],
      [Uint32Array, (BB, jB, zB) => BB.setUint32(jB, zB, !0)],
      [Float32Array, (BB, jB, zB) => BB.setFloat32(jB, zB, !0)],
      [Float64Array, (BB, jB, zB) => BB.setFloat64(jB, zB, !0)]
    ]);
    class BQ {
      writeTypedArray(BB) {
        this._checkGrowBuffer(BB.byteLength);
        const jB = Oz.get(BB.constructor);
        for (let zB = 0; zB < BB.length; zB++) jB(this._dataView, this._byteOffset, BB[zB]), this._byteOffset += BB.BYTES_PER_ELEMENT
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
        const jB = this.byteOffset + BB;
        if (jB > this._data.byteLength) {
          const BB = new Uint8Array(2 * jB);
          BB.set(this._data), this._data = BB, this._dataView = new DataView(this._data.buffer)
        }
      }
    }

    function jQ(BB) {
      return BB % 4 === 0 ? 4 : BB % 2 === 0 ? 2 : 1
    }
    class zQ {
      constructor() {
        this._bufferViewToData = new Map, this._bufferViewToProperties = new Map, this._accessorToBufferView = new Map
      }
      generateBinary(BB) {
        let jB = 0;
        this._bufferViewToData.forEach((BB => {
          jB += BB.byteLength
        }));
        const zB = new BQ(jB),
          QB = Array.from(this._bufferViewToData.keys()).sort(((BB, jB) => jQ(jB.byteLength) - jQ(BB.byteLength)));
        for (const nB of QB) {
          nB.byteOffset = zB.byteOffset, BB.push(nB);
          const jB = BB.length - 1,
            QB = this.getPropertiesWithBufferView(nB);
          for (const BB of QB) BB.bufferView = jB;
          zB.writeTypedArray(this._bufferViewToData.get(nB)), this._bufferViewToData.delete(nB)
        }
        return zB.getOutputData()
      }
      createBufferView(BB, jB) {
        const zB = {
          buffer: 0,
          byteOffset: void 0,
          byteLength: BB.byteLength,
          byteStride: jB
        };
        return this._bufferViewToData.set(zB, BB), zB
      }
      createAccessor(BB, jB, zB, QB, nB, dB, IB) {
        this._verifyBufferView(BB);
        const NB = {
          bufferView: void 0,
          componentType: zB,
          count: QB,
          type: jB,
          min: dB?.min,
          max: dB?.max,
          normalized: IB,
          byteOffset: nB
        };
        return this.setBufferView(NB, BB), this._accessorToBufferView.set(NB, BB), NB
      }
      setBufferView(BB, jB) {
        this._verifyBufferView(jB);
        this.getPropertiesWithBufferView(jB).push(BB)
      }
      removeBufferView(BB) {
        const jB = this.getPropertiesWithBufferView(BB);
        for (const zB of jB) void 0 !== zB.bufferView && delete zB.bufferView;
        this._bufferViewToData.delete(BB), this._bufferViewToProperties.delete(BB), this._accessorToBufferView.forEach(((jB, zB) => {
          jB === BB && (void 0 !== zB.byteOffset && delete zB.byteOffset, this._accessorToBufferView.delete(zB))
        }))
      }
      getBufferView(BB) {
        const jB = this._accessorToBufferView.get(BB);
        return this._verifyBufferView(jB), jB
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
    var QQ = zB(40301);
    (0, QQ.f)();
    var nQ = zB(40555);
    (0, nQ.f)();
    var dQ = zB(40350),
      IQ = zB(41191);
    (0, IQ.h)();
    let NQ = (() => {
      var BB;
      let jB, zB, QB = [],
        nB = [],
        dB = [],
        IB = [];
      return BB = class {
        get influence() {
          return this._influence
        }
        set influence(BB) {
          if (this._influence === BB) return;
          const jB = this._influence;
          this._influence = BB, this.onInfluenceChanged.hasObservers() && this.onInfluenceChanged.notifyObservers(0 === jB || 0 === BB)
        }
        get animationPropertiesOverride() {
          return !this._animationPropertiesOverride && this._scene ? this._scene.animationPropertiesOverride : this._animationPropertiesOverride
        }
        set animationPropertiesOverride(BB) {
          this._animationPropertiesOverride = BB
        }
        constructor(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            NB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = BB, this.animations = [], this._positions = null, this._normals = null, this._tangents = null, this._uvs = null, this._uv2s = null, this._colors = null, this._uniqueId = 0, this.onInfluenceChanged = new Bz.c, this._onDataLayoutChanged = new Bz.c, this.id = (0, iB.g)(this, QB, void 0), this.morphTargetManager = ((0, iB.g)(this, nB), (0, iB.g)(this, dB, null)), this._animationPropertiesOverride = ((0, iB.g)(this, IB), null), this.id = BB, this.morphTargetManager = NB, this._scene = zB || mB.c.LastCreatedScene, this.influence = jB, this._scene && (this._uniqueId = this._scene.getUniqueId())
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
        FIB(BB) {
          const jB = this.hasPositions;
          this._positions = BB, jB !== this.hasPositions && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getPositions() {
          return this._positions
        }
        setNormals(BB) {
          const jB = this.hasNormals;
          this._normals = BB, jB !== this.hasNormals && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getNormals() {
          return this._normals
        }
        setTangents(BB) {
          const jB = this.hasTangents;
          this._tangents = BB, jB !== this.hasTangents && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getTangents() {
          return this._tangents
        }
        setUVs(BB) {
          const jB = this.hasUVs;
          this._uvs = BB, jB !== this.hasUVs && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUVs() {
          return this._uvs
        }
        setUV2s(BB) {
          const jB = this.hasUV2s;
          this._uv2s = BB, jB !== this.hasUV2s && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getUV2s() {
          return this._uv2s
        }
        setColors(BB) {
          const jB = this.hasColors;
          this._colors = BB, jB !== this.hasColors && this._onDataLayoutChanged.notifyObservers(void 0)
        }
        getColors() {
          return this._colors
        }
        clone() {
          const jB = Mj.b.Clone((() => new BB(this.name, this.influence, this._scene, this.morphTargetManager)), this);
          return jB._positions = this._positions, jB._normals = this._normals, jB._tangents = this._tangents, jB._uvs = this._uvs, jB._uv2s = this._uv2s, jB._colors = this._colors, jB
        }
        serialize() {
          const BB = {};
          return BB.name = this.name, BB.influence = this.influence, null != this.id && (BB.id = this.id), BB.uniqueId = this.uniqueId, BB.positions = Array.prototype.slice.call(this.getPositions()), this.hasNormals && (BB.normals = Array.prototype.slice.call(this.getNormals())), this.hasTangents && (BB.tangents = Array.prototype.slice.call(this.getTangents())), this.hasUVs && (BB.uvs = Array.prototype.slice.call(this.getUVs())), this.hasUV2s && (BB.uv2s = Array.prototype.slice.call(this.getUV2s())), this.hasColors && (BB.colors = Array.prototype.slice.call(this.getColors())), Mj.b.AppendSerializedAnimations(this, BB), BB
        }
        getClassName() {
          return "MorphTarget"
        }
        static Parse(jB, zB) {
          let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
          const nB = new BB(jB.name, jB.influence, zB, QB);
          if (nB.FIB(jB.positions), null != jB.id && (nB.id = jB.id), jB.normals && nB.setNormals(jB.normals), jB.tangents && nB.setTangents(jB.tangents), jB.uvs && nB.setUVs(jB.uvs), jB.uv2s && nB.setUV2s(jB.uv2s), jB.colors && nB.setColors(jB.colors), jB.animations) {
            for (let BB = 0; BB < jB.animations.length; BB++) {
              const zB = jB.animations[BB],
                QB = (0, Wj.b)("BABYLON.Animation");
              QB && nB.animations.push(QB.Parse(zB))
            }
            jB.autoAnimate && zB && zB.beginAnimation(nB, jB.autoAnimateFrom, jB.autoAnimateTo, jB.autoAnimateLoop, jB.autoAnimateSpeed || 1)
          }
          return nB
        }
        static FromMesh(jB, zB, QB) {
          zB || (zB = jB.name);
          const nB = new BB(zB, QB, jB.aY(), jB.morphTargetManager);
          return nB.FIB(jB.getVerticesData(TB.l.PositionKind)), jB.isVerticesDataPresent(TB.l.NormalKind) && nB.setNormals(jB.getVerticesData(TB.l.NormalKind)), jB.isVerticesDataPresent(TB.l.TangentKind) && nB.setTangents(jB.getVerticesData(TB.l.TangentKind)), jB.isVerticesDataPresent(TB.l.UVKind) && nB.setUVs(jB.getVerticesData(TB.l.UVKind)), jB.isVerticesDataPresent(TB.l.UV2Kind) && nB.setUV2s(jB.getVerticesData(TB.l.UV2Kind)), jB.isVerticesDataPresent(TB.l.ColorKind) && nB.setColors(jB.getVerticesData(TB.l.ColorKind)), nB
        }
      }, (() => {
        const NB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [(0, qB.A)()], zB = [(0, qB.A)()], (0, iB.e)(null, null, jB, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: BB => "id" in BB,
            get: BB => BB.id,
            set: (BB, jB) => {
              BB.id = jB
            }
          },
          metadata: NB
        }, QB, nB), (0, iB.e)(null, null, zB, {
          kind: "field",
          name: "morphTargetManager",
          static: !1,
          private: !1,
          access: {
            has: BB => "morphTargetManager" in BB,
            get: BB => BB.morphTargetManager,
            set: (BB, jB) => {
              BB.morphTargetManager = jB
            }
          },
          metadata: NB
        }, dB, IB), NB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: NB
        })
      })(), BB
    })();
    var uQ, UQ = zB(41254),
      aQ = zB(40344);
    ! function(BB) {
      BB[BB.INTANGENT = 0] = "INTANGENT", BB[BB.OUTTANGENT = 1] = "OUTTANGENT"
    }(uQ || (uQ = {}));
    class pQ {
      static _IsTransformable(BB) {
        return BB && (BB instanceof pB.e || BB instanceof QQ.b || BB instanceof aQ.b)
      }
      static _CreateNodeAnimation(BB, jB, zB, QB, dB) {
        if (this._IsTransformable(BB)) {
          const IB = [],
            NB = [],
            uB = jB.getKeys(),
            UB = pQ._CalculateMinMaxKeyFrames(uB),
            aB = pQ._DeduceInterpolation(uB, zB, QB),
            pB = aB.interpolationType,
            rB = aB.shouldBakeAnimation;
          if (rB ? pQ._CreateBakedAnimation(BB, jB, zB, UB.min, UB.max, jB.framePerSecond, dB, IB, NB, UB, QB) : "LINEAR" === pB || "STEP" === pB ? pQ._CreateLinearOrStepAnimation(BB, jB, zB, IB, NB, QB) : "CUBICSPLINE" === pB ? pQ._CreateCubicSplineAnimation(BB, jB, zB, IB, NB, QB) : pQ._CreateBakedAnimation(BB, jB, zB, UB.min, UB.max, jB.framePerSecond, dB, IB, NB, UB, QB), IB.length && NB.length) {
            return {
              inputs: IB,
              outputs: NB,
              samplerInterpolation: pB,
              inputsMin: rB ? UB.min : nB.Tools.FloatRound(UB.min / jB.framePerSecond),
              inputsMax: rB ? UB.max : nB.Tools.FloatRound(UB.max / jB.framePerSecond)
            }
          }
        }
        return null
      }
      static _DeduceAnimationInfo(BB) {
        let jB = null,
          zB = "VEC3",
          QB = !1;
        const dB = BB.targetProperty.split(".");
        switch (dB[0]) {
          case "pp":
            jB = "scale";
            break;
          case "position":
            jB = "translation";
            break;
          case "rotation":
            zB = "VEC4", jB = "rotation";
            break;
          case "rotationQuaternion":
            zB = "VEC4", QB = !0, jB = "rotation";
            break;
          case "influence":
            zB = "SCALAR", jB = "weights";
            break;
          default:
            nB.Tools.Error(`Unsupported animatable property ${dB[0]}`)
        }
        return jB ? {
          animationChannelTargetPath: jB,
          dataAccessorType: zB,
          useQuaternion: QB
        } : (nB.Tools.Error("animation channel target path and data accessor type could be deduced"), null)
      }
      static _CreateNodeAnimationFromNodeAnimations(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
        let pB;
        if (pQ._IsTransformable(BB) && BB.animations)
          for (const rB of BB.animations) {
            if (aB && !aB(rB)) continue;
            const nB = pQ._DeduceAnimationInfo(rB);
            nB && (pB = {
              name: rB.name,
              samplers: [],
              channels: []
            }, pQ._AddAnimation(`${rB.name}`, rB.hasRunningRuntimeAnimations ? jB : pB, BB, rB, nB.dataAccessorType, nB.animationChannelTargetPath, QB, dB, IB, NB, nB.useQuaternion, uB, UB), pB.samplers.length && pB.channels.length && zB.push(pB))
          }
      }
      static _CreateMorphTargetAnimationFromMorphTargetAnimations(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
        let pB;
        if (BB instanceof UQ.e) {
          const nB = BB.morphTargetManager;
          if (nB)
            for (let rB = 0; rB < nB.numTargets; ++rB) {
              const sB = nB.getTarget(rB);
              for (const JB of sB.animations) {
                if (aB && !aB(JB)) continue;
                const sB = new IQ.e(`${JB.name}`, "influence", JB.framePerSecond, JB.dataType, JB.cQ, JB.enableBlending),
                  mB = [],
                  yB = JB.getKeys();
                for (let BB = 0; BB < yB.length; ++BB) {
                  const jB = yB[BB];
                  for (let BB = 0; BB < nB.numTargets; ++BB) BB == rB ? mB.push(jB) : mB.push({
                    frame: jB.frame,
                    value: 0
                  })
                }
                sB.setKeys(mB, !0);
                const kB = pQ._DeduceAnimationInfo(sB);
                kB && (pB = {
                  name: sB.name,
                  samplers: [],
                  channels: []
                }, pQ._AddAnimation(JB.name, JB.hasRunningRuntimeAnimations ? jB : pB, BB, sB, kB.dataAccessorType, kB.animationChannelTargetPath, QB, dB, IB, NB, kB.useQuaternion, uB, UB, nB.numTargets), pB.samplers.length && pB.channels.length && zB.push(pB))
              }
            }
        }
      }
      static _CreateNodeAndMorphAnimationFromAnimationGroups(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        let aB;
        if (BB.animationGroups) {
          const pB = BB.animationGroups;
          for (const rB of pB) {
            const pB = new Map,
              sB = new Map,
              JB = new Set,
              mB = rB.to - rB.from;
            aB = {
              name: rB.name,
              channels: [],
              samplers: []
            };
            for (let jB = 0; jB < rB.targetedAnimations.length; ++jB) {
              const UB = rB.targetedAnimations[jB],
                mB = UB.target,
                yB = UB.animation;
              if (uB && !uB(yB)) continue;
              const kB = NB.has(mB);
              if (this._IsTransformable(mB) || 1 === mB.length && this._IsTransformable(mB[0])) {
                const BB = pQ._DeduceAnimationInfo(UB.animation);
                if (BB) {
                  const jB = this._IsTransformable(mB) ? mB : this._IsTransformable(mB[0]) ? mB[0] : null;
                  jB && pQ._AddAnimation(`${yB.name}`, aB, jB, yB, BB.dataAccessorType, BB.animationChannelTargetPath, zB, QB, nB, dB, BB.useQuaternion, IB, kB)
                }
              } else if (mB instanceof NQ || 1 === mB.length && mB[0] instanceof NQ) {
                if (pQ._DeduceAnimationInfo(UB.animation)) {
                  const jB = mB instanceof NQ ? mB : mB[0];
                  if (jB) {
                    const zB = BB.morphTargetManagers.find((BB => {
                      for (let zB = 0; zB < BB.numTargets; ++zB)
                        if (BB.getTarget(zB) === jB) return !0;
                      return !1
                    }));
                    if (zB) {
                      const QB = BB.meshes.find((BB => BB.morphTargetManager === zB));
                      QB && (pB.has(QB) || pB.set(QB, new Map), pB.get(QB)?.set(jB, yB), JB.add(QB), sB.set(QB, yB))
                    }
                  }
                }
              }
            }
            JB.forEach((BB => {
              const jB = BB.morphTargetManager;
              let NB = null;
              const uB = [],
                UB = sB.get(BB).getKeys(),
                JB = UB.length;
              for (let zB = 0; zB < JB; ++zB)
                for (let QB = 0; QB < jB.numTargets; ++QB) {
                  const nB = jB.getTarget(QB),
                    dB = pB.get(BB);
                  if (dB) {
                    const jB = dB.get(nB);
                    jB ? (NB || (NB = new IQ.e(`${rB.name}_${BB.name}_MorphWeightAnimation`, "influence", jB.framePerSecond, IQ.e.ANIMATIONTYPE_FLOAT, jB.cQ, jB.enableBlending)), uB.push(jB.getKeys()[zB])) : uB.push({
                      frame: rB.from + mB / JB * zB,
                      value: nB.influence,
                      inTangent: UB[0].inTangent ? 0 : void 0,
                      outTangent: UB[0].outTangent ? 0 : void 0
                    })
                  }
                }
              NB.setKeys(uB, !0);
              const yB = pQ._DeduceAnimationInfo(NB);
              yB && pQ._AddAnimation(`${rB.name}_${BB.name}_MorphWeightAnimation`, aB, BB, NB, yB.dataAccessorType, yB.animationChannelTargetPath, zB, QB, nB, dB, yB.useQuaternion, IB, !1, jB?.numTargets)
            })), aB.channels.length && aB.samplers.length && (UB?.set(rB, jB.length), jB.push(aB))
          }
        }
      }
      static _AddAnimation(BB, jB, zB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB) {
        const mB = pQ._CreateNodeAnimation(zB, nB, IB, pB, rB);
        let yB, kB, GB, LB, gB, tB;
        if (mB) {
          if (JB) {
            let BB, jB = 0;
            const zB = [];
            for (; mB.inputs.length > 0;) BB = mB.inputs.shift(), jB % JB == 0 && zB.push(BB), jB++;
            mB.inputs = zB
          }
          const BB = NB.get(zB),
            nB = new Float32Array(mB.inputs);
          yB = uB.createBufferView(nB), kB = uB.createAccessor(yB, "SCALAR", 5126, mB.inputs.length, void 0, {
            min: [mB.inputsMin],
            max: [mB.inputsMax]
          }), aB.push(kB), GB = aB.length - 1;
          const UB = new QB.Quaternion,
            pB = new QB.KJ,
            rB = new QB.KJ,
            SB = zB instanceof QQ.b,
            MB = Wz(dB),
            EB = new Float32Array(mB.outputs.length * MB);
          mB.outputs.forEach((function(BB, jB) {
            let zB = BB;
            switch (IB) {
              case "translation":
                sB && (QB.KJ.FromArrayToRef(BB, 0, rB), wz(rB), rB.toArray(zB));
                break;
              case "rotation":
                4 === BB.length ? QB.Quaternion.FromArrayToRef(BB, 0, UB) : (zB = new Array(4), QB.KJ.FromArrayToRef(BB, 0, pB), QB.Quaternion.FromEulerVectorToRef(pB, UB)), sB && (xz(UB), SB && Kz(UB)), UB.toArray(zB)
            }
            EB.set(zB, jB * MB)
          })), yB = uB.createBufferView(EB), kB = uB.createAccessor(yB, dB, 5126, mB.outputs.length), aB.push(kB), LB = aB.length - 1, gB = {
            interpolation: mB.samplerInterpolation,
            input: GB,
            output: LB
          }, jB.samplers.push(gB), tB = {
            sampler: jB.samplers.length - 1,
            target: {
              node: BB,
              path: IB
            }
          }, jB.channels.push(tB)
        }
      }
      static _CreateBakedAnimation(BB, jB, zB, dB, IB, NB, uB, UB, aB, pB, rB) {
        let sB;
        const JB = QB.Quaternion.Identity();
        let mB, yB, kB, GB, LB, gB = null,
          tB = null;
        pB.min = nB.Tools.FloatRound(dB / NB);
        const SB = jB.getKeys();
        for (let QB = 0, MB = SB.length; QB < MB; ++QB) {
          if (yB = SB[QB], QB + 1 < MB)
            if (kB = SB[QB + 1], yB.value.equals && yB.value.equals(kB.value) || yB.value === kB.value) {
              if (0 !== QB) continue;
              LB = yB.frame
            } else LB = kB.frame;
          else {
            if (GB = SB[QB - 1], yB.value.equals && yB.value.equals(GB.value) || yB.value === GB.value) continue;
            LB = IB
          }
          if (LB)
            for (let QB = yB.frame; QB <= LB; QB += uB) {
              if (mB = nB.Tools.FloatRound(QB / NB), mB === gB) continue;
              gB = mB, tB = mB;
              const dB = {
                key: 0,
                repeatCount: 0,
                cQ: jB.cQ
              };
              sB = jB._interpolate(QB, dB), pQ._SetInterpolatedValue(BB, sB, mB, jB, zB, JB, UB, aB, rB)
            }
        }
        tB && (pB.max = tB)
      }
      static _ConvertFactorToVector3OrQuaternion(BB, jB, zB, dB, IB) {
        const NB = pQ._GetBasePositionRotationOrScale(jB, dB, IB),
          uB = zB.targetProperty.split("."),
          UB = uB ? uB[1] : "",
          aB = IB ? QB.Quaternion.FromArray(NB).normalize() : QB.KJ.FromArray(NB);
        switch (UB) {
          case "x":
          case "y":
          case "z":
            aB[UB] = BB;
            break;
          case "w":
            aB.w = BB;
            break;
          default:
            nB.Tools.Error(`glTFAnimation: Unsupported component name "${UB}"!`)
        }
        return aB
      }
      static _SetInterpolatedValue(BB, jB, zB, nB, dB, IB, NB, uB, UB) {
        let aB;
        NB.push(zB), "weights" !== dB ? (nB.dataType === IQ.e.ANIMATIONTYPE_FLOAT && (jB = this._ConvertFactorToVector3OrQuaternion(jB, BB, nB, dB, UB)), "rotation" === dB ? (UB ? IB = jB : (aB = jB, QB.Quaternion.RotationYawPitchRollToRef(aB.y, aB.x, aB.z, IB)), uB.push(IB.nQB())) : (aB = jB, uB.push(aB.nQB()))) : uB.push([jB])
      }
      static _CreateLinearOrStepAnimation(BB, jB, zB, QB, nB, dB) {
        for (const IB of jB.getKeys()) QB.push(IB.frame / jB.framePerSecond), pQ._AddKeyframeValue(IB, jB, nB, zB, BB, dB)
      }
      static _CreateCubicSplineAnimation(BB, jB, zB, QB, nB, dB) {
        jB.getKeys().forEach((function(IB) {
          QB.push(IB.frame / jB.framePerSecond), pQ._AddSplineTangent(uQ.INTANGENT, nB, zB, "CUBICSPLINE", IB, dB), pQ._AddKeyframeValue(IB, jB, nB, zB, BB, dB), pQ._AddSplineTangent(uQ.OUTTANGENT, nB, zB, "CUBICSPLINE", IB, dB)
        }))
      }
      static _GetBasePositionRotationOrScale(BB, jB, zB) {
        let nB;
        if ("rotation" === jB)
          if (zB) {
            nB = (BB.rotationQuaternion ?? QB.Quaternion.Identity()).nQB()
          } else {
            nB = (BB.rotation ?? QB.KJ.Zero()).nQB()
          }
        else if ("translation" === jB) {
          nB = (BB.position ?? QB.KJ.Zero()).nQB()
        } else {
          nB = (BB.pp ?? QB.KJ.One()).nQB()
        }
        return nB
      }
      static _AddKeyframeValue(BB, jB, zB, dB, IB, NB) {
        let uB;
        const UB = jB.dataType;
        if (UB === IQ.e.ANIMATIONTYPE_VECTOR3) {
          let jB = BB.value.nQB();
          if ("rotation" === dB) {
            const BB = QB.KJ.FromArray(jB);
            jB = QB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).nQB()
          }
          zB.push(jB)
        } else if (UB === IQ.e.ANIMATIONTYPE_FLOAT) {
          if ("weights" === dB) zB.push([BB.value]);
          else if (uB = this._ConvertFactorToVector3OrQuaternion(BB.value, IB, jB, dB, NB), uB) {
            if ("rotation" === dB) {
              const BB = NB ? uB : QB.Quaternion.RotationYawPitchRoll(uB.y, uB.x, uB.z).normalize();
              zB.push(BB.nQB())
            }
            zB.push(uB.nQB())
          }
        } else UB === IQ.e.ANIMATIONTYPE_QUATERNION ? zB.push(BB.value.normalize().nQB()) : nB.Tools.Error("glTFAnimation: Unsupported key frame values for animation!")
      }
      static _DeduceInterpolation(BB, jB, zB) {
        let QB, nB, dB = !1;
        if ("rotation" === jB && !zB) return {
          interpolationType: "LINEAR",
          shouldBakeAnimation: !0
        };
        for (let IB = 0, NB = BB.length; IB < NB; ++IB)
          if (nB = BB[IB], nB.inTangent || nB.outTangent)
            if (QB) {
              if ("CUBICSPLINE" !== QB) {
                QB = "LINEAR", dB = !0;
                break
              }
            } else QB = "CUBICSPLINE";
        else if (QB) {
          if ("CUBICSPLINE" === QB || nB.interpolation && 1 === nB.interpolation && "STEP" !== QB) {
            QB = "LINEAR", dB = !0;
            break
          }
        } else QB = nB.interpolation && 1 === nB.interpolation ? "STEP" : "LINEAR";
        return QB || (QB = "LINEAR"), {
          interpolationType: QB,
          shouldBakeAnimation: dB
        }
      }
      static _AddSplineTangent(BB, jB, zB, nB, dB, IB) {
        let NB;
        const uB = BB === uQ.INTANGENT ? dB.inTangent : dB.outTangent;
        if ("CUBICSPLINE" === nB) {
          if ("rotation" === zB)
            if (uB)
              if (IB) NB = uB.nQB();
              else {
                const BB = uB;
                NB = QB.Quaternion.RotationYawPitchRoll(BB.y, BB.x, BB.z).nQB()
              }
          else NB = [0, 0, 0, 0];
          else NB = "weights" === zB ? uB ? [uB] : [0] : uB ? uB.nQB() : [0, 0, 0];
          jB.push(NB)
        }
      }
      static _CalculateMinMaxKeyFrames(BB) {
        let jB = 1 / 0,
          zB = -1 / 0;
        return BB.forEach((function(BB) {
          jB = Math.min(jB, BB.frame), zB = Math.max(zB, BB.frame)
        })), {
          min: jB,
          max: zB
        }
      }
    }

    function rQ(BB, jB, zB, dB, IB, NB) {
      const uB = {
          attributes: {},
          influence: BB.influence,
          name: BB.name
        },
        UB = jB.geometry;
      if (!UB) return nB.Tools.Warn("Attempted to export morph target data from a mesh without geometry. This should not happen."), uB;
      const pB = NB ? -1 : 1,
        rB = QB.KJ.Zero();
      let sB, JB;
      if (BB.hasPositions) {
        const dB = BB.getPositions(),
          NB = UB.getVerticesData(aB.d.PositionKind);
        if (NB) {
          const BB = new Float32Array(NB.length),
            jB = [1 / 0, 1 / 0, 1 / 0],
            nB = [-1 / 0, -1 / 0, -1 / 0];
          JB = NB.length / 3, sB = 0;
          for (let zB = sB; zB < JB; ++zB) {
            const IB = QB.KJ.FromArray(NB, 3 * zB);
            QB.KJ.FromArray(dB, 3 * zB).subtractToRef(IB, rB), rB.x *= pB, jB[0] = Math.min(jB[0], rB.x), nB[0] = Math.max(nB[0], rB.x), jB[1] = Math.min(jB[1], rB.y), nB[1] = Math.max(nB[1], rB.y), jB[2] = Math.min(jB[2], rB.z), nB[2] = Math.max(nB[2], rB.z), BB[3 * zB] = rB.x, BB[3 * zB + 1] = rB.y, BB[3 * zB + 2] = rB.z
          }
          const UB = zB.createBufferView(BB, 12),
            aB = zB.createAccessor(UB, "VEC3", 5126, dB.length / 3, 0, {
              min: jB,
              max: nB
            });
          IB.push(aB), uB.attributes.POSITION = IB.length - 1
        } else nB.Tools.Warn(`Morph target positions for mesh ${jB.name} were not exported. Mesh does not have position vertex data`)
      }
      if (BB.hasNormals) {
        const dB = BB.getNormals(),
          NB = UB.getVerticesData(aB.d.NormalKind);
        if (NB) {
          const BB = new Float32Array(NB.length);
          JB = NB.length / 3, sB = 0;
          for (let zB = sB; zB < JB; ++zB) {
            const jB = QB.KJ.FromArray(NB, 3 * zB).normalize();
            QB.KJ.FromArray(dB, 3 * zB).normalize().subtractToRef(jB, rB), BB[3 * zB] = rB.x * pB, BB[3 * zB + 1] = rB.y, BB[3 * zB + 2] = rB.z
          }
          const jB = zB.createBufferView(BB, 12),
            nB = zB.createAccessor(jB, "VEC3", 5126, dB.length / 3, 0);
          IB.push(nB), uB.attributes.NORMAL = IB.length - 1
        } else nB.Tools.Warn(`Morph target normals for mesh ${jB.name} were not exported. Mesh does not have normals vertex data`)
      }
      if (BB.hasTangents) {
        const dB = BB.getTangents(),
          NB = UB.getVerticesData(aB.d.TangentKind);
        if (NB) {
          JB = NB.length / 4;
          const BB = new Float32Array(3 * JB);
          sB = 0;
          for (let zB = sB; zB < JB; ++zB) {
            const jB = QB.KJ.FromArray(NB, 4 * zB);
            lz(jB);
            const nB = QB.KJ.FromArray(dB, 3 * zB);
            lz(nB), nB.subtractToRef(jB, rB), BB[3 * zB] = rB.x * pB, BB[3 * zB + 1] = rB.y, BB[3 * zB + 2] = rB.z
          }
          const jB = zB.createBufferView(BB, 12),
            nB = zB.createAccessor(jB, "VEC3", 5126, JB, 0);
          IB.push(nB), uB.attributes.TANGENT = IB.length - 1
        } else nB.Tools.Warn(`Morph target tangents for mesh ${jB.name} were not exported. Mesh does not have tangents vertex data`)
      }
      if (BB.hasColors) {
        const dB = BB.getColors(),
          NB = UB.getVerticesData(aB.d.ColorKind),
          pB = UB.getVertexBuffer(aB.d.ColorKind);
        if (NB && pB) {
          const BB = pB.getSize();
          JB = NB.length / BB;
          const jB = new Float32Array(JB * BB);
          sB = 0;
          for (let zB = sB; zB < JB; ++zB)
            if (3 === BB) {
              const nB = QB.KJ.FromArray(NB, zB * BB);
              QB.KJ.FromArray(dB, zB * BB).subtractToRef(nB, rB), jB[3 * zB] = rB.x, jB[3 * zB + 1] = rB.y, jB[3 * zB + 2] = rB.z
            } else if (4 === BB) {
            const nB = new QB.Vector4,
              IB = QB.Vector4.FromArray(NB, zB * BB);
            QB.Vector4.FromArray(dB, zB * BB).subtractToRef(IB, nB), jB[4 * zB] = nB.x, jB[4 * zB + 1] = nB.y, jB[4 * zB + 2] = nB.z, jB[4 * zB + 3] = nB.w
          } else nB.Tools.Warn(`Unsupported number of components for color attribute: ${BB}`);
          const UB = zB.createBufferView(jB, 4 * BB),
            aB = zB.createAccessor(UB, 3 === BB ? "VEC3" : "VEC4", 5126, JB, 0);
          IB.push(aB), uB.attributes.COLOR_0 = IB.length - 1
        } else nB.Tools.Warn(`Morph target colors for mesh ${jB.name} were not exported. Mesh does not have colors vertex data`)
      }
      return uB
    }
    var sQ = zB(41674);
    class JQ {}
    JQ.DEFAULT_COLOR = xB.d.White(), JQ.DEFAULT_WIDTH_ATTENUATED = 1, JQ.DEFAULT_WIDTH = .1;
    var mQ = zB(41182);
    class yQ {
      constructor(BB) {
        this._paths = [], this._tempPaths = [], this._holes = [], this._resolution = BB
      }
      moveTo(BB, jB) {
        this._currentPath = new mQ.g(BB, jB), this._tempPaths.push(this._currentPath)
      }
      lineTo(BB, jB) {
        this._currentPath.addLineTo(BB, jB)
      }
      quadraticCurveTo(BB, jB, zB, QB) {
        this._currentPath.addQuadraticCurveTo(BB, jB, zB, QB, this._resolution)
      }
      bezierCurveTo(BB, jB, zB, QB, nB, dB) {
        this._currentPath.addBezierCurveTo(BB, jB, zB, QB, nB, dB, this._resolution)
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

    function kQ(BB, jB, zB, QB, nB, dB) {
      const IB = dB.glyphs[BB] || dB.glyphs["?"];
      if (!IB) return null;
      const NB = new yQ(nB);
      if (IB.o) {
        const BB = IB.o.split(" ");
        for (let nB = 0, dB = BB.length; nB < dB;) {
          switch (BB[nB++]) {
            case "m": {
              const dB = parseInt(BB[nB++]) * jB + zB,
                IB = parseInt(BB[nB++]) * jB + QB;
              NB.moveTo(dB, IB);
              break
            }
            case "l": {
              const dB = parseInt(BB[nB++]) * jB + zB,
                IB = parseInt(BB[nB++]) * jB + QB;
              NB.lineTo(dB, IB);
              break
            }
            case "q": {
              const dB = parseInt(BB[nB++]) * jB + zB,
                IB = parseInt(BB[nB++]) * jB + QB,
                uB = parseInt(BB[nB++]) * jB + zB,
                UB = parseInt(BB[nB++]) * jB + QB;
              NB.quadraticCurveTo(uB, UB, dB, IB);
              break
            }
            case "b": {
              const dB = parseInt(BB[nB++]) * jB + zB,
                IB = parseInt(BB[nB++]) * jB + QB,
                uB = parseInt(BB[nB++]) * jB + zB,
                UB = parseInt(BB[nB++]) * jB + QB,
                aB = parseInt(BB[nB++]) * jB + zB,
                pB = parseInt(BB[nB++]) * jB + QB;
              NB.bezierCurveTo(uB, UB, aB, pB, dB, IB);
              break
            }
          }
        }
      }
      return NB.extractHoles(), {
        offsetX: IB.ha * jB,
        shapePath: NB
      }
    }

    function GQ(BB, jB, zB, QB) {
      const nB = Array.from(BB),
        dB = jB / QB.resolution,
        IB = (QB.boundingBox.yMax - QB.boundingBox.yMin + QB.underlineThickness) * dB,
        NB = [];
      let uB = 0,
        UB = 0;
      for (let aB = 0; aB < nB.length; aB++) {
        const BB = nB[aB];
        if ("\n" === BB) uB = 0, UB -= IB;
        else {
          const jB = kQ(BB, dB, uB, UB, zB, QB);
          jB && (uB += jB.offsetX, NB.push(jB.shapePath))
        }
      }
      return NB
    }
    class LQ {
      static ConvertPoints(BB, jB) {
        if (BB.length && Array.isArray(BB) && "number" === typeof BB[0]) return [BB];
        if (BB.length && Array.isArray(BB[0]) && "number" === typeof BB[0][0]) return BB;
        if (BB.length && !Array.isArray(BB[0]) && BB[0] instanceof AB.m) {
          const jB = [];
          for (let zB = 0; zB < BB.length; zB++) {
            const QB = BB[zB];
            jB.push(QB.x, QB.y, QB.z)
          }
          return [jB]
        }
        if (BB.length > 0 && Array.isArray(BB[0]) && BB[0].length > 0 && BB[0][0] instanceof AB.m) {
          const jB = [],
            zB = BB;
          for (const BB of zB) jB.push(BB.flatMap((BB => [BB.x, BB.y, BB.z])));
          return jB
        }
        if (BB instanceof Float32Array) {
          if (jB?.floatArrayStride) {
            const zB = [],
              QB = 3 * jB.floatArrayStride;
            for (let jB = 0; jB < BB.length; jB += QB) {
              const nB = new Array(QB);
              for (let zB = 0; zB < QB; zB++) nB[zB] = BB[jB + zB];
              zB.push(nB)
            }
            return zB
          }
          return [Array.from(BB)]
        }
        if (BB.length && BB[0] instanceof Float32Array) {
          const jB = [];
          for (const zB of BB) jB.push(Array.from(zB));
          return jB
        }
        return []
      }
      static OmitZeroLengthPredicate(BB, jB, zB) {
        const QB = [];
        return jB.subtract(BB).lengthSquared() > 0 && QB.push([BB, jB]), zB.subtract(jB).lengthSquared() > 0 && QB.push([jB, zB]), BB.subtract(zB).lengthSquared() > 0 && QB.push([zB, BB]), 0 === QB.length ? null : QB
      }
      static OmitDuplicatesPredicate(BB, jB, zB, QB) {
        const nB = [];
        return LQ._SearchInPoints(BB, jB, QB) || nB.push([BB, jB]), LQ._SearchInPoints(jB, zB, QB) || nB.push([jB, zB]), LQ._SearchInPoints(zB, BB, QB) || nB.push([zB, BB]), 0 === nB.length ? null : nB
      }
      static _SearchInPoints(BB, jB, zB) {
        for (const QB of zB)
          for (let zB = 0; zB < QB.length; zB++)
            if (QB[zB]?.equals(BB) && (QB[zB + 1]?.equals(jB) || QB[zB - 1]?.equals(jB))) return !0;
        return !1
      }
      static MeshesToLines(BB, jB) {
        const zB = [];
        for (let QB = 0; QB < BB.length; QB++) {
          const nB = BB[QB],
            dB = nB.getVerticesData(TB.l.PositionKind),
            IB = nB.dQB();
          if (dB && IB)
            for (let BB = 0, NB = 0; BB < IB.length; BB++) {
              const uB = 3 * IB[NB++],
                UB = 3 * IB[NB++],
                aB = 3 * IB[NB++],
                pB = new AB.m(dB[uB], dB[uB + 1], dB[uB + 2]),
                rB = new AB.m(dB[UB], dB[UB + 1], dB[UB + 2]),
                sB = new AB.m(dB[aB], dB[aB + 1], dB[aB + 2]);
              if (jB) {
                const NB = jB(pB, rB, sB, zB, BB, uB, nB, QB, dB, IB);
                if (NB)
                  for (const BB of NB) zB.push(BB)
              } else zB.push([pB, rB], [rB, sB], [sB, pB])
            }
        }
        return zB
      }
      static ToVector3Array(BB) {
        if (Array.isArray(BB[0])) {
          const jB = [],
            zB = BB;
          for (const BB of zB) {
            const zB = [];
            for (let jB = 0; jB < BB.length; jB += 3) zB.push(new AB.m(BB[jB], BB[jB + 1], BB[jB + 2]));
            jB.push(zB)
          }
          return jB
        }
        const jB = BB,
          zB = [];
        for (let QB = 0; QB < jB.length; QB += 3) zB.push(new AB.m(jB[QB], jB[QB + 1], jB[QB + 2]));
        return zB
      }
      static ToNumberArray(BB) {
        return BB.flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetPointsCountInfo(BB) {
        const jB = new Array(BB.length);
        let zB = 0;
        for (let QB = BB.length; QB--;) jB[QB] = BB[QB].length / 3, zB += jB[QB];
        return {
          total: zB,
          counts: jB
        }
      }
      static GetLineLength(BB) {
        if (0 === BB.length) return 0;
        let jB;
        jB = "number" === typeof BB[0] ? LQ.ToVector3Array(BB) : BB;
        const zB = AB.h.KJ[0];
        let QB = 0;
        for (let nB = 0; nB < jB.length - 1; nB++) {
          const BB = jB[nB];
          QB += jB[nB + 1].subtractToRef(BB, zB).length()
        }
        return QB
      }
      static GetLineLengthArray(BB, jB) {
        const zB = jB ? new Float32Array(jB, 0, BB.length / 3) : new Float32Array(BB.length / 3);
        let QB = 0;
        for (let nB = 0, dB = BB.length / 3 - 1; nB < dB; nB++) {
          let jB = BB[3 * nB + 0],
            dB = BB[3 * nB + 1],
            IB = BB[3 * nB + 2];
          jB -= BB[3 * nB + 3], dB -= BB[3 * nB + 4], IB -= BB[3 * nB + 5];
          QB += Math.sqrt(jB * jB + dB * dB + IB * IB), zB[nB + 1] = QB
        }
        return zB
      }
      static SegmentizeSegmentByCount(BB, jB, zB) {
        const QB = [],
          nB = jB.subtract(BB),
          dB = AB.h.KJ[0];
        dB.S_(zB);
        const IB = AB.h.KJ[1];
        nB.divideToRef(dB, IB);
        let NB = BB.clone();
        QB.push(NB);
        for (let uB = 0; uB < zB; uB++) NB = NB.clone(), QB.push(NB.addInPlace(IB));
        return QB
      }
      static SegmentizeLineBySegmentLength(BB, jB) {
        const zB = BB[0] instanceof AB.m ? LQ.GetLineSegments(BB) : "number" === typeof BB[0] ? LQ.GetLineSegments(LQ.ToVector3Array(BB)) : BB,
          QB = [];
        for (const nB of zB)
          if (nB.length > jB) {
            const BB = LQ.SegmentizeSegmentByCount(nB.point1, nB.point2, Math.ceil(nB.length / jB));
            for (const jB of BB) QB.push(jB)
          } else QB.push(nB.point1), QB.push(nB.point2);
        return QB
      }
      static SegmentizeLineBySegmentCount(BB, jB) {
        const zB = "number" === typeof BB[0] ? LQ.ToVector3Array(BB) : BB,
          QB = LQ.GetLineLength(zB) / jB;
        return LQ.SegmentizeLineBySegmentLength(zB, QB)
      }
      static GetLineSegments(BB) {
        const jB = [];
        for (let zB = 0; zB < BB.length - 1; zB++) {
          const QB = BB[zB],
            nB = BB[zB + 1],
            dB = nB.subtract(QB).length();
          jB.push({
            point1: QB,
            point2: nB,
            length: dB
          })
        }
        return jB
      }
      static GetMinMaxSegmentLength(BB) {
        const jB = LQ.GetLineSegments(BB).sort((BB => BB.length));
        return {
          min: jB[0].length,
          max: jB[jB.length - 1].length
        }
      }
      static GetPositionOnLineByVisibility(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nB = jB * zB;
        let dB = 0,
          IB = 0;
        const NB = BB.length;
        for (let UB = 0; UB < NB; UB++) {
          if (nB <= dB + BB[UB].length) {
            IB = UB;
            break
          }
          dB += BB[UB].length
        }
        const uB = (nB - dB) / BB[IB].length;
        return BB[IB].point2.subtractToRef(BB[IB].point1, AB.h.KJ[0]), AB.h.KJ[0].scaleToRef(uB, AB.h.KJ[1]), QB || AB.h.KJ[1].addInPlace(BB[IB].point1), AB.h.KJ[1].clone()
      }
      static GetCircleLinePoints(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2 * Math.PI / jB;
        const dB = [];
        for (let IB = 0; IB <= jB; IB++) dB.push(new AB.m(Math.cos(IB * nB) * BB, Math.sin(IB * nB) * QB, zB));
        return dB
      }
      static GetBezierLinePoints(BB, jB, zB, QB) {
        return mQ.f.CreateQuadraticBezier(BB, jB, zB, QB).getPoints().flatMap((BB => [BB.x, BB.y, BB.z]))
      }
      static GetArrowCap(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        return {
          points: [BB.clone(), BB.add(jB.multiplyByFloats(zB, zB, zB))],
          widths: [QB, nB, dB, IB]
        }
      }
      static GetPointsFromText(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        const IB = [],
          NB = GQ(BB, jB, zB, QB);
        for (const uB of NB) {
          for (const BB of uB.paths) {
            const jB = [],
              zB = BB.getPoints();
            for (const BB of zB) jB.push(BB.x, BB.y, nB);
            IB.push(jB)
          }
          if (dB)
            for (const BB of uB.holes) {
              const jB = [],
                zB = BB.getPoints();
              for (const BB of zB) jB.push(BB.x, BB.y, nB);
              IB.push(jB)
            }
        }
        return IB
      }
      static Color3toRGBAUint8(BB) {
        const jB = new Uint8Array(4 * BB.length);
        for (let zB = 0, QB = 0; zB < BB.length; zB++) jB[QB++] = 255 * BB[zB].r, jB[QB++] = 255 * BB[zB].g, jB[QB++] = 255 * BB[zB].b, jB[QB++] = 255;
        return jB
      }
      static CreateColorsTexture(BB, jB, zB, QB) {
        const nB = QB.wJ().getCaps().maxTextureSize ?? 1,
          dB = jB.length > nB ? nB : jB.length,
          IB = Math.ceil(jB.length / nB);
        IB > 1 && (jB = [...jB, ...Array(dB * IB - jB.length).fill(jB[0])]);
        const NB = LQ.Color3toRGBAUint8(jB),
          uB = new SB.c(NB, dB, IB, az.b.TEXTUREFORMAT_RGBA, QB, !1, !0, zB);
        return uB.name = BB, uB
      }
      static PrepareEmptyColorsTexture(BB) {
        if (!JQ.EmptyColorsTexture) {
          const jB = new Uint8Array(4);
          JQ.EmptyColorsTexture = new SB.c(jB, 1, 1, az.b.TEXTUREFORMAT_RGBA, BB, !1, !1, SB.c.NEAREST_NEAREST), JQ.EmptyColorsTexture.name = "grlEmptyColorsTexture", JQ.EmptyColorsTexture.pY.addOnce((() => {
            JQ.EmptyColorsTexture = null
          }))
        }
        return JQ.EmptyColorsTexture
      }
      static DisposeEmptyColorsTexture() {
        JQ.EmptyColorsTexture?.dispose(), JQ.EmptyColorsTexture = null
      }
      static BooleanToNumber(BB) {
        return BB ? 1 : 0
      }
    }
    class gQ extends PB.b {
      constructor() {
        super(...arguments), this.GREASED_LINE_HAS_COLOR = !1, this.GREASED_LINE_SIZE_ATTENUATION = !1, this.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = !1, this.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = !1, this.GREASED_LINE_CAMERA_FACING = !0, this.GREASED_LINE_USE_OFFSETS = !1
      }
    }
    class tQ extends WB.c {
      isCompatible(BB) {
        return !0
      }
      constructor(BB, jB, zB) {
        zB = zB || {
          color: JQ.DEFAULT_COLOR
        };
        const QB = new gQ;
        QB.GREASED_LINE_HAS_COLOR = !!zB.color && !zB.useColors, QB.GREASED_LINE_SIZE_ATTENUATION = zB.sizeAttenuation ?? !1, QB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === zB.colorDistributionType, QB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = (jB ?? BB.aY()).useRightHandedSystem, QB.GREASED_LINE_CAMERA_FACING = zB.cameraFacing ?? !0, super(BB, tQ.GREASED_LINE_MATERIAL_NAME, 200, QB, !0, !0), this.colorsTexture = null, this._forceGLSL = !1, this._forceGLSL = zB?.forceGLSL || tQ.ForceGLSL, this._scene = jB ?? BB.aY(), this._engine = this._scene.wJ(), this._cameraFacing = zB.cameraFacing ?? !0, this.visibility = zB.visibility ?? 1, this.useDash = zB.useDash ?? !1, this.dashRatio = zB.dashRatio ?? .5, this.dashOffset = zB.dashOffset ?? 0, this.width = zB.width ? zB.width : zB.sizeAttenuation ? JQ.DEFAULT_WIDTH_ATTENUATED : JQ.DEFAULT_WIDTH, this._sizeAttenuation = zB.sizeAttenuation ?? !1, this.colorMode = zB.colorMode ?? 0, this._color = zB.color ?? null, this.useColors = zB.useColors ?? !1, this._colorsDistributionType = zB.colorDistributionType ?? 0, this.colorsSampling = zB.colorsSampling ?? SB.c.NEAREST_NEAREST, this._colors = zB.colors ?? null, this.dashCount = zB.dashCount ?? 1, this.resolution = zB.resolution ?? new AB.i(this._engine.getRenderWidth(), this._engine.getRenderHeight()), zB.colorsTexture ? this.colorsTexture = zB.colorsTexture : this._colors ? this.colorsTexture = LQ.CreateColorsTexture(`${BB.name}-colors-texture`, this._colors, this.colorsSampling, this._scene) : (this._color = this._color ?? JQ.DEFAULT_COLOR, LQ.PrepareEmptyColorsTexture(this._scene)), this._engine.pY.add((() => {
          LQ.DisposeEmptyColorsTexture()
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
        const jB = [{
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
        return this._cameraFacing && jB.push({
          name: "grl_projection",
          size: 16,
          type: "mat4"
        }, {
          name: "grl_aspect_resolution_lineWidth",
          size: 4,
          type: "vec4"
        }), 1 === BB && jB.push({
          name: "viewProjection",
          size: 16,
          type: "mat4"
        }), {
          ubo: jB,
          vertex: this._cameraFacing && this._isGLSL(BB) ? "\n                    uniform vec4 grl_aspect_resolution_lineWidth;\n                    uniform mat4 grl_projection;\n    " : "",
          fragment: this._isGLSL(BB) ? "\n                    uniform vec4 grl_dashOptions;\n                    uniform vec2 grl_textureSize;\n                    uniform vec4 grl_colorMode_visibility_colorsWidth_useColors;\n                    uniform vec3 grl_singleColor;\n    " : ""
        }
      }
      get isEnabled() {
        return !0
      }
      bindForSubMesh(BB) {
        if (this._cameraFacing) {
          BB.l_("grl_projection", this._scene.getProjectionMatrix()), this._isGLSL(this._material.shaderLanguage) || BB.l_("viewProjection", this._scene.getTransformMatrix());
          const jB = AB.h.Vector4[0];
          jB.x = this._aspect, jB.y = this._resolution.x, jB.z = this._resolution.y, jB.w = this.width, BB.updateVector4("grl_aspect_resolution_lineWidth", jB)
        }
        const jB = AB.h.Vector4[0];
        jB.x = LQ.BooleanToNumber(this.useDash), jB.y = this._dashArray, jB.z = this.dashOffset, jB.w = this.dashRatio, BB.updateVector4("grl_dashOptions", jB);
        const zB = AB.h.Vector4[1];
        zB.x = this.colorMode, zB.y = this.visibility, zB.z = this.colorsTexture ? this.colorsTexture.getSize().width : 0, zB.w = LQ.BooleanToNumber(this.useColors), BB.updateVector4("grl_colorMode_visibility_colorsWidth_useColors", zB), this._color && BB.updateColor3("grl_singleColor", this._color);
        const QB = this.colorsTexture ?? JQ.EmptyColorsTexture;
        BB.setTexture("grl_colors", QB), BB.updateFloat2("grl_textureSize", QB?.getSize().width ?? 1, QB?.getSize().height ?? 1)
      }
      prepareDefines(BB, jB, zB) {
        BB.GREASED_LINE_HAS_COLOR = !!this.color && !this.useColors, BB.GREASED_LINE_SIZE_ATTENUATION = this._sizeAttenuation, BB.GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE = 1 === this._colorsDistributionType, BB.GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM = jB.useRightHandedSystem, BB.GREASED_LINE_CAMERA_FACING = this._cameraFacing, BB.GREASED_LINE_USE_OFFSETS = !!zB.offsets
      }
      getClassName() {
        return tQ.GREASED_LINE_MATERIAL_NAME
      }
      getCustomCode(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._isGLSL(jB) ? function(BB, jB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute float grl_widths;\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute vec3 grl_offsets;\n                #endif\n                attribute float grl_colorPointers;\n                varying float grlCounters;\n                varying float grlColorPointer;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute vec4 grl_previousAndSide;\n                    attribute vec4 grl_nextAndCounters;\n\n                    vec2 grlFix( vec4 i, float aspect ) {\n                        vec2 res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute vec3 grl_slopes;\n                    attribute float grl_counters;\n                #endif\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    vec3 grlPositionOffset = grl_offsets;\n                #else\n                    vec3 grlPositionOffset = vec3(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (grl_slopes * grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                grlColorPointer = grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    float grlAspect = grl_aspect_resolution_lineWidth.x;\n                    float grlBaseWidth = grl_aspect_resolution_lineWidth.w;\n\n                    vec3 grlPrevious = grl_previousAndSide.xyz;\n                    float grlSide = grl_previousAndSide.w;\n\n                    vec3 grlNext = grl_nextAndCounters.xyz;\n                    grlCounters = grl_nextAndCounters.w;\n                    float grlWidth = grlBaseWidth * grl_widths;\n                    \n                    vec3 worldDir = normalize(grlNext - grlPrevious);\n                    vec3 nearPosition = positionUpdated + (worldDir * 0.01);\n                    mat4 grlMatrix = viewProjection * finalWorld;\n                    vec4 grlFinalPosition = grlMatrix * vec4(positionUpdated , 1.0);\n                    vec4 screenNearPos = grlMatrix * vec4(nearPosition, 1.0);\n                    vec2 grlLinePosition = grlFix(grlFinalPosition, grlAspect);\n                    vec2 grlLineNearPosition = grlFix(screenNearPos, grlAspect);\n                    vec2 grlDir = normalize(grlLineNearPosition - grlLinePosition);\n\n                    vec4 grlNormal = vec4(-grlDir.y, grlDir.x, 0., 1.);\n\n                    #ifdef GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM\n                        grlNormal.xy *= -.5 * grlWidth;\n                    #else\n                        grlNormal.xy *= .5 * grlWidth;\n                    #endif\n\n                    grlNormal *= grl_projection;\n\n                    #ifdef GREASED_LINE_SIZE_ATTENUATION\n                        grlNormal.xy *= grlFinalPosition.w;\n                        grlNormal.xy /= (vec4(grl_aspect_resolution_lineWidth.yz, 0., 1.) * grl_projection).xy;\n                    #endif\n\n                    grlFinalPosition.xy += grlNormal.xy * grlSide;\n                    gl_Position = grlFinalPosition;\n\n                    vPositionW = vec3(grlFinalPosition);\n                #else\n                    grlCounters = grl_counters;\n                #endif\n                "
            };
            return jB && (BB["!gl_Position\\=viewProjection\\*worldPos;"] = "//"), BB
          }
          return "fragment" === BB ? {
            CUSTOM_FRAGMENT_DEFINITIONS: "\n                    #ifdef PBR\n                         #define grlFinalColor finalColor\n                    #else\n                         #define grlFinalColor color\n                    #endif\n\n                    varying float grlCounters;\n                    varying float grlColorPointer;\n                    uniform sampler2D grl_colors;\n                ",
            CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR: "\n                    float grlColorMode = grl_colorMode_visibility_colorsWidth_useColors.x;\n                    float grlVisibility = grl_colorMode_visibility_colorsWidth_useColors.y;\n                    float grlColorsWidth = grl_colorMode_visibility_colorsWidth_useColors.z;\n                    float grlUseColors = grl_colorMode_visibility_colorsWidth_useColors.w;\n\n                    float grlUseDash = grl_dashOptions.x;\n                    float grlDashArray = grl_dashOptions.y;\n                    float grlDashOffset = grl_dashOptions.z;\n                    float grlDashRatio = grl_dashOptions.w;\n\n                    grlFinalColor.a *= step(grlCounters, grlVisibility);\n                    if(grlFinalColor.a == 0.) discard;\n\n                    if(grlUseDash == 1.){\n                        grlFinalColor.a *= ceil(mod(grlCounters + grlDashOffset, grlDashArray) - (grlDashArray * grlDashRatio));\n                        if (grlFinalColor.a == 0.) discard;\n                    }\n\n                    #ifdef GREASED_LINE_HAS_COLOR\n                        if (grlColorMode == 0.) {\n                            grlFinalColor.rgb = grl_singleColor;\n                        } else if (grlColorMode == 1.) {\n                            grlFinalColor.rgb += grl_singleColor;\n                        } else if (grlColorMode == 2.) {\n                            grlFinalColor.rgb *= grl_singleColor;\n                        }\n                    #else\n                        if (grlUseColors == 1.) {\n                            #ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\n                                vec4 grlColor = texture2D(grl_colors, vec2(grlCounters, 0.), 0.);\n                            #else\n                                vec2 lookup = vec2(fract(grlColorPointer / grl_textureSize.x), 1.0 - floor(grlColorPointer / grl_textureSize.x) / max(grl_textureSize.y - 1.0, 1.0));\n                                vec4 grlColor = texture2D(grl_colors, lookup, 0.0);\n                            #endif\n                            if (grlColorMode == 0.) {\n                                grlFinalColor = grlColor;\n                            } else if (grlColorMode == 1.) {\n                                grlFinalColor += grlColor;\n                            } else if (grlColorMode == 2.) {\n                                grlFinalColor *= grlColor;\n                            }\n                        }\n                    #endif\n                "
          } : null
        }(BB, this._cameraFacing) : function(BB, jB) {
          if ("vertex" === BB) {
            const BB = {
              CUSTOM_VERTEX_DEFINITIONS: "\n                attribute grl_widths: f32;\n                attribute grl_colorPointers: f32;\n                varying grlCounters: f32;\n                varying grlColorPointer: f32;\n\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    attribute grl_offsets: vec3f;   \n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    attribute grl_previousAndSide : vec4f;\n                    attribute grl_nextAndCounters : vec4f;\n\n                    fn grlFix(i: vec4f, aspect: f32) -> vec2f {\n                        var res = i.xy / i.w;\n                        res.x *= aspect;\n                        return res;\n                    }\n                #else\n                    attribute grl_slopes: f32;\n                    attribute grl_counters: f32;\n                #endif\n\n\n                ",
              CUSTOM_VERTEX_UPDATE_POSITION: "\n                #ifdef GREASED_LINE_USE_OFFSETS\n                    var grlPositionOffset: vec3f = input.grl_offsets;\n                #else\n                    var grlPositionOffset = vec3f(0.);\n                #endif\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n                    positionUpdated += grlPositionOffset;\n                #else\n                    positionUpdated = (positionUpdated + grlPositionOffset) + (input.grl_slopes * input.grl_widths);\n                #endif\n                ",
              CUSTOM_VERTEX_MAIN_END: "\n                vertexOutputs.grlColorPointer = input.grl_colorPointers;\n\n                #ifdef GREASED_LINE_CAMERA_FACING\n\n                    let grlAspect: f32 = uniforms.grl_aspect_resolution_lineWidth.x;\n                    let grlBaseWidth: f32 = uniforms.grl_aspect_resolution_lineWidth.w;\n\n                    let grlPrevious: vec3f = input.grl_previousAndSide.xyz;\n                    let grlSide: f32 = input.grl_previousAndSide.w;\n\n                    let grlNext: vec3f = input.grl_nextAndCounters.xyz;\n                    vertexOutputs.grlCounters = input.grl_nextAndCounters.w;\n\n                    let grlWidth: f32 = grlBaseWidth * input.grl_widths;\n\n                    let worldDir: vec3f = normalize(grlNext - grlPrevious);\n                    let nearPosition: vec3f = positionUpdated + (worldDir * 0.01);\n                    let grlMatrix: mat4x4f = uniforms.viewProjection * finalWorld;\n                    let grlFinalPosition: vec4f = grlMatrix * vec4f(positionUpdated, 1.0); \n                    let screenNearPos: vec4f = grlMatrix * vec4(nearPosition, 1.0);\n                    let grlLinePosition: vec2f = grlFix(grlFinalPosition, grlAspect);\n                    let grlLineNearPosition: vec2f = grlFix(screenNearPos, grlAspect);\n                    let grlDir: vec2f = normalize(grlLineNearPosition - grlLinePosition);\n\n                    var grlNormal: vec4f = vec4f(-grlDir.y, grlDir.x, 0.0, 1.0);\n\n                    let grlHalfWidth: f32 = 0.5 * grlWidth;\n                    #if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\n                        grlNormal.x *= -grlHalfWidth;\n                        grlNormal.y *= -grlHalfWidth;\n                    #else\n                        grlNormal.x *= grlHalfWidth;\n                        grlNormal.y *= grlHalfWidth;\n                    #endif\n\n                    grlNormal *= uniforms.grl_projection;\n\n                    #if defined(GREASED_LINE_SIZE_ATTENUATION)\n                        grlNormal.x *= grlFinalPosition.w;\n                        grlNormal.y *= grlFinalPosition.w;\n\n                        let pr = vec4f(uniforms.grl_aspect_resolution_lineWidth.yz, 0.0, 1.0) * uniforms.grl_projection;\n                        grlNormal.x /= pr.x;\n                        grlNormal.y /= pr.y;\n                    #endif\n\n                    vertexOutputs.position = vec4f(grlFinalPosition.xy + grlNormal.xy * grlSide, grlFinalPosition.z, grlFinalPosition.w);\n                    vertexOutputs.vPositionW = vertexOutputs.position.xyz;\n                \n                #else\n                    vertexOutputs.grlCounters = input.grl_counters;\n                #endif\n                "
            };
            return jB && (BB["!vertexOutputs\\.position\\s=\\sscene\\.viewProjection\\s\\*\\sworldPos;"] = "//"), BB
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!jB || zB)
            if (this.colorsTexture && QB === BB.length && !zB) {
              const jB = LQ.Color3toRGBAUint8(BB);
              this.colorsTexture.update(jB)
            } else this.colorsTexture?.dispose(), this.colorsTexture = LQ.CreateColorsTexture(`${this._material.name}-colors-texture`, BB, this.colorsSampling, this._scene)
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        null === this._color && null !== BB || null !== this._color && null === BB ? (this._color = BB, jB || this.markAllDefinesAsDirty()) : this._color = BB
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
          jB = {
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
        return this._colors && (jB.colors = this._colors), this._color && (jB.color = this._color), BB.greasedLineMaterialOptions = jB, BB
      }
      parse(BB, jB, zB) {
        super.parse(BB, jB, zB);
        const QB = BB.greasedLineMaterialOptions;
        this.colorsTexture?.dispose(), QB.color && this.setColor(QB.color, !0), QB.colorDistributionType && (this.colorsDistributionType = QB.colorDistributionType), QB.colors && (this.colors = QB.colors), QB.colorsSampling && (this.colorsSampling = QB.colorsSampling), QB.colorMode && (this.colorMode = QB.colorMode), QB.useColors && (this.useColors = QB.useColors), QB.visibility && (this.visibility = QB.visibility), QB.useDash && (this.useDash = QB.useDash), QB.dashCount && (this.dashCount = QB.dashCount), QB.dashRatio && (this.dashRatio = QB.dashRatio), QB.dashOffset && (this.dashOffset = QB.dashOffset), QB.width && (this.width = QB.width), QB.sizeAttenuation && (this.sizeAttenuation = QB.sizeAttenuation), QB.resolution && (this.resolution = QB.resolution), this.colors ? this.colorsTexture = LQ.CreateColorsTexture(`${this._material.name}-colors-texture`, this.colors, this.colorsSampling, jB) : LQ.PrepareEmptyColorsTexture(jB), this.markAllDefinesAsDirty()
      }
      copyTo(BB) {
        const jB = BB;
        jB.colorsTexture?.dispose(), this._colors && (jB.colorsTexture = LQ.CreateColorsTexture(`${jB._material.name}-colors-texture`, this._colors, jB.colorsSampling, this._scene)), jB.setColor(this.color, !0), jB.colorsDistributionType = this.colorsDistributionType, jB.colorsSampling = this.colorsSampling, jB.colorMode = this.colorMode, jB.useColors = this.useColors, jB.visibility = this.visibility, jB.useDash = this.useDash, jB.dashCount = this.dashCount, jB.dashRatio = this.dashRatio, jB.dashOffset = this.dashOffset, jB.width = this.width, jB.sizeAttenuation = this.sizeAttenuation, jB.resolution = this.resolution, jB.markAllDefinesAsDirty()
      }
      _isGLSL(BB) {
        return 0 === BB || this._forceGLSL
      }
    }
    tQ.GREASED_LINE_MATERIAL_NAME = "GreasedLinePluginMaterial", tQ.ForceGLSL = !1;
    var SQ = zB(40504),
      MQ = zB(40519),
      EQ = zB(38780),
      iQ = zB(40576),
      qQ = zB(39919);
    class fQ extends iQ.l {
      constructor(BB, jB, QB) {
        const nB = jB.wJ(),
          dB = nB.isWebGPU && !(QB.forceGLSL || fQ.ForceGLSL),
          IB = ["COLOR_DISTRIBUTION_TYPE_LINE 1.", "COLOR_DISTRIBUTION_TYPE_SEGMENT 0.", "COLOR_MODE_SET 0.", "COLOR_MODE_ADD 1.", "COLOR_MODE_MULTIPLY 2."];
        jB.useRightHandedSystem && IB.push("GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM");
        const NB = ["position", "grl_widths", "grl_offsets", "grl_colorPointers"];
        QB.cameraFacing ? (IB.push("GREASED_LINE_CAMERA_FACING"), NB.push("grl_previousAndSide", "grl_nextAndCounters")) : (NB.push("grl_slopes"), NB.push("grl_counters"));
        const uB = ["grlColorsWidth", "grlUseColors", "grlWidth", "grlColor", "grl_colorModeAndColorDistributionType", "grlResolution", "grlAspect", "grlAizeAttenuation", "grlDashArray", "grlDashOffset", "grlDashRatio", "grlUseDash", "grlVisibility", "grlColors"];
        if (dB || uB.push("world", "viewProjection", "view", "projection"), super(BB, jB, {
            vertex: "greasedLine",
            fragment: "greasedLine"
          }, {
            uniformBuffers: dB ? ["Scene", "Mesh"] : void 0,
            attributes: NB,
            uniforms: uB,
            samplers: dB ? [] : ["grlColors"],
            defines: IB,
            extraInitializationsAsync: async () => {
              dB ? await Promise.all([zB.e(339).then((() => zB(62045))), zB.e(395).then((() => zB(62048)))]) : await Promise.all([zB.e(332).then((() => zB(62055))), zB.e(396).then((() => zB(62058)))])
            },
            shaderLanguage: dB ? 1 : 0
          }), this._color = xB.d.White(), this._colorsDistributionType = 0, this._colorsTexture = null, QB = QB || {
            color: JQ.DEFAULT_COLOR
          }, this.visibility = QB.visibility ?? 1, this.useDash = QB.useDash ?? !1, this.dashRatio = QB.dashRatio ?? .5, this.dashOffset = QB.dashOffset ?? 0, this.dashCount = QB.dashCount ?? 1, this.width = QB.width ? QB.width : QB.sizeAttenuation && QB.cameraFacing ? JQ.DEFAULT_WIDTH_ATTENUATED : JQ.DEFAULT_WIDTH, this.sizeAttenuation = QB.sizeAttenuation ?? !1, this.color = QB.color ?? xB.d.White(), this.useColors = QB.useColors ?? !1, this.colorsDistributionType = QB.colorDistributionType ?? 0, this.colorsSampling = QB.colorsSampling ?? SB.c.NEAREST_NEAREST, this.colorMode = QB.colorMode ?? 0, this._colors = QB.colors ?? null, this._cameraFacing = QB.cameraFacing ?? !0, this.resolution = QB.resolution ?? new AB.i(nB.getRenderWidth(), nB.getRenderHeight()), QB.colorsTexture ? this.colorsTexture = QB.colorsTexture : this._colors ? this.colorsTexture = LQ.CreateColorsTexture(`${this.name}-colors-texture`, this._colors, this.colorsSampling, jB) : (this._color = this._color ?? JQ.DEFAULT_COLOR, this.colorsTexture = LQ.PrepareEmptyColorsTexture(jB)), dB) {
          const BB = new qQ.c;
          BB.setParameters(), BB.samplingMode = this.colorsSampling, this.setTextureSampler("grlColorsSampler", BB)
        }
        nB.pY.add((() => {
          LQ.DisposeEmptyColorsTexture()
        }))
      }
      dispose() {
        this._colorsTexture && this._colorsTexture !== JQ.EmptyColorsTexture && this._colorsTexture.dispose(), super.dispose()
      }
      _setColorModeAndColorDistributionType() {
        this.setVector2("grl_colorModeAndColorDistributionType", new AB.i(this._colorMode, this._colorsDistributionType))
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = this._colors?.length ?? 0;
        if (this._colors = BB, null !== BB && 0 !== BB.length) {
          if (!jB || zB)
            if (this._colorsTexture && QB === BB.length && !zB) {
              const jB = LQ.Color3toRGBAUint8(BB);
              this._colorsTexture.update(jB)
            } else this._colorsTexture && this._colorsTexture !== JQ.EmptyColorsTexture && this._colorsTexture.dispose(), this.colorsTexture = LQ.CreateColorsTexture(`${this.name}-colors-texture`, BB, this.colorsSampling, this.aY())
        } else {
          this._colorsTexture && this._colorsTexture !== JQ.EmptyColorsTexture && this._colorsTexture.dispose();
          const BB = this.aY();
          BB && (this.colorsTexture = LQ.PrepareEmptyColorsTexture(BB))
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
        this._useColors = BB, this.setFloat("grlUseColors", LQ.BooleanToNumber(BB))
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
        this._useDash = BB, this.setFloat("grlUseDash", LQ.BooleanToNumber(BB))
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
        this._sizeAttenuation = BB, this.setFloat("grlSizeAttenuation", LQ.BooleanToNumber(BB))
      }
      get color() {
        return this._color
      }
      set color(BB) {
        this.setColor(BB)
      }
      setColor(BB) {
        BB = BB ?? JQ.DEFAULT_COLOR, this._color = BB, this.setColor3("grlColor", BB)
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
          jB = {
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
        return this._colors && (jB.colors = this._colors), BB.greasedLineMaterialOptions = jB, BB
      }
      parse(BB, jB, zB) {
        const QB = BB.greasedLineMaterialOptions;
        this._colorsTexture?.dispose(), QB.color && (this.color = QB.color), QB.colorDistributionType && (this.colorsDistributionType = QB.colorDistributionType), QB.colorsSampling && (this.colorsSampling = QB.colorsSampling), QB.colorMode && (this.colorMode = QB.colorMode), QB.useColors && (this.useColors = QB.useColors), QB.visibility && (this.visibility = QB.visibility), QB.useDash && (this.useDash = QB.useDash), QB.dashCount && (this.dashCount = QB.dashCount), QB.dashRatio && (this.dashRatio = QB.dashRatio), QB.dashOffset && (this.dashOffset = QB.dashOffset), QB.width && (this.width = QB.width), QB.sizeAttenuation && (this.sizeAttenuation = QB.sizeAttenuation), QB.resolution && (this.resolution = QB.resolution), QB.colors ? this.colorsTexture = LQ.CreateColorsTexture(`${this.name}-colors-texture`, QB.colors, this.colorsSampling, this.aY()) : this.colorsTexture = LQ.PrepareEmptyColorsTexture(jB), this._cameraFacing = QB.cameraFacing ?? !0, this.setDefine("GREASED_LINE_CAMERA_FACING", this._cameraFacing)
      }
    }
    var oQ, HQ, DQ;
    fQ.ForceGLSL = !1,
      function(BB) {
        BB[BB.POINTS_MODE_POINTS = 0] = "POINTS_MODE_POINTS", BB[BB.POINTS_MODE_PATHS = 1] = "POINTS_MODE_PATHS"
      }(oQ || (oQ = {})),
      function(BB) {
        BB[BB.FACES_MODE_SINGLE_SIDED = 0] = "FACES_MODE_SINGLE_SIDED", BB[BB.FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING = 1] = "FACES_MODE_SINGLE_SIDED_NO_BACKFACE_CULLING", BB[BB.FACES_MODE_DOUBLE_SIDED = 2] = "FACES_MODE_DOUBLE_SIDED"
      }(HQ || (HQ = {})),
      function(BB) {
        BB[BB.AUTO_DIRECTIONS_FROM_FIRST_SEGMENT = 0] = "AUTO_DIRECTIONS_FROM_FIRST_SEGMENT", BB[BB.AUTO_DIRECTIONS_FROM_ALL_SEGMENTS = 1] = "AUTO_DIRECTIONS_FROM_ALL_SEGMENTS", BB[BB.AUTO_DIRECTIONS_ENHANCED = 2] = "AUTO_DIRECTIONS_ENHANCED", BB[BB.AUTO_DIRECTIONS_FACE_TO = 3] = "AUTO_DIRECTIONS_FACE_TO", BB[BB.AUTO_DIRECTIONS_NONE = 99] = "AUTO_DIRECTIONS_NONE"
      }(DQ || (DQ = {}));
    class FQ extends SQ.b {
      constructor(BB, jB, zB) {
        super(BB, jB, null, null, !1, !1), this.name = BB, this._options = zB, this._lazy = !1, this._updatable = !1, this._engine = jB.wJ(), this._lazy = zB.lazy ?? !1, this._updatable = zB.updatable ?? !1, this._vertexPositions = [], this._indices = [], this._uvs = [], this._points = [], this._colorPointers = zB.colorPointers ?? [], this._widths = zB.widths ?? new Array(zB.points.length).fill(1)
      }
      getClassName() {
        return "GreasedLineMesh"
      }
      _updateWidthsWithValue(BB) {
        let jB = 0;
        for (const QB of this._points) jB += QB.length;
        const zB = jB / 3 * 2 - this._widths.length;
        for (let QB = 0; QB < zB; QB++) this._widths.push(BB)
      }
      updateLazy() {
        this._setPoints(this._points), this._options.colorPointers || this._updateColorPointers(), this._createVertexBuffers(this._options.ribbonOptions?.smoothShading), !this.cJ && this.refreshBoundingInfo(), this.greasedLineMaterial?.updateLazy()
      }
      addPoints(BB, jB) {
        for (const zB of BB) this._points.push(zB);
        this._lazy || this.setPoints(this._points, jB)
      }
      dispose(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        super.dispose(BB, jB)
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
        this.material instanceof fQ && this.material.setDefine("GREASED_LINE_USE_OFFSETS", BB?.length > 0), this._offsets = BB, this._offsetsBuffer ? this._offsetsBuffer.update(BB) : this._createOffsetsBuffer(BB)
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
        if (this.material && this.material instanceof fQ) return this.material;
        const BB = this.material?.pluginManager?.getPlugin(tQ.GREASED_LINE_MATERIAL_NAME);
        return BB || void 0
      }
      get points() {
        const BB = [];
        return EQ.e.DeepCopy(this._points, BB), BB
      }
      setPoints(BB, jB) {
        this._points = LQ.ConvertPoints(BB, jB?.pointsOptions ?? this._options.pointsOptions), this._updateWidths(), jB?.colorPointers || this._updateColorPointers(), this._setPoints(this._points, jB)
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
        const jB = new MQ.e;
        return jB.positions = this._vertexPositions, jB.indices = this._indices, jB.uvs = this._uvs, BB && (jB.normals = [], MQ.e.ComputeNormals(this._vertexPositions, this._indices, jB.normals)), jB.applyToMesh(this, this._options.updatable), jB
      }
      _createOffsetsBuffer(BB) {
        const jB = this._scene.wJ(),
          zB = new TB.e(jB, BB, this._updatable, 3);
        this.setVerticesBuffer(zB.createVertexBuffer("grl_offsets", 0, 3)), this._offsetsBuffer = zB
      }
    }
    class YQ {
      constructor(BB, jB) {
        this._indicesAccessorMap = new Map, this._vertexBufferViewMap = new Map, this._vertexAccessorMap = new Map, this._remappedBufferView = new Map, this._meshMorphTargetMap = new Map, this._vertexMapColorAlpha = new Map, this._exportedNodes = new Set, this._meshMap = new Map, this.convertedToRightHandedBuffers = new Map, this.convertToRightHanded = BB, this.wasAddedByNoopNode = jB
      }
      getIndicesAccessor(BB, jB, zB, QB, nB) {
        return this._indicesAccessorMap.get(BB)?.get(jB)?.get(zB)?.get(QB)?.get(nB)
      }
      setIndicesAccessor(BB, jB, zB, QB, nB, dB) {
        let IB = this._indicesAccessorMap.get(BB);
        IB || (IB = new Map, this._indicesAccessorMap.set(BB, IB));
        let NB = IB.get(jB);
        NB || (NB = new Map, IB.set(jB, NB));
        let uB = NB.get(zB);
        uB || (uB = new Map, NB.set(zB, uB));
        let UB = uB.get(QB);
        UB || (UB = new Map, uB.set(QB, UB)), UB.set(nB, dB)
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
      setVertexBufferView(BB, jB) {
        this._vertexBufferViewMap.set(BB, jB)
      }
      setRemappedBufferView(BB, jB, zB) {
        this._remappedBufferView.set(BB, new Map), this._remappedBufferView.get(BB).set(jB, zB)
      }
      getRemappedBufferView(BB, jB) {
        return this._remappedBufferView.get(BB)?.get(jB)
      }
      getVertexAccessor(BB, jB, zB) {
        return this._vertexAccessorMap.get(BB)?.get(jB)?.get(zB)
      }
      setVertexAccessor(BB, jB, zB, QB) {
        let nB = this._vertexAccessorMap.get(BB);
        nB || (nB = new Map, this._vertexAccessorMap.set(BB, nB));
        let dB = nB.get(jB);
        dB || (dB = new Map, nB.set(jB, dB)), dB.set(zB, QB)
      }
      hasVertexColorAlpha(BB) {
        return this._vertexMapColorAlpha.get(BB) || !1
      }
      setHasVertexColorAlpha(BB, jB) {
        return this._vertexMapColorAlpha.set(BB, jB)
      }
      getMesh(BB) {
        return this._meshMap.get(BB)
      }
      setMesh(BB, jB) {
        this._meshMap.set(BB, jB)
      }
      bindMorphDataToMesh(BB, jB) {
        const zB = this._meshMorphTargetMap.get(BB) || [];
        this._meshMorphTargetMap.set(BB, zB), -1 === zB.indexOf(jB) && zB.push(jB)
      }
      getMorphTargetsFromMesh(BB) {
        return this._meshMorphTargetMap.get(BB)
      }
    }
    class VQ {
      _ApplyExtension(BB, jB, zB, QB) {
        if (zB >= jB.length) return Promise.resolve(BB);
        const nB = QB(jB[zB], BB);
        return nB ? nB.then((async BB => BB ? await this._ApplyExtension(BB, jB, zB + 1, QB) : null)) : this._ApplyExtension(BB, jB, zB + 1, QB)
      }
      _ApplyExtensions(BB, jB) {
        const zB = [];
        for (const QB of VQ._ExtensionNames) zB.push(this._extensions[QB]);
        return this._ApplyExtension(BB, zB, 0, jB)
      }
      _extensionsPostExportNodeAsync(BB, jB, zB, QB, nB) {
        return this._ApplyExtensions(jB, ((jB, dB) => jB.postExportNodeAsync && jB.postExportNodeAsync(BB, dB, zB, QB, nB, this._bufferManager)))
      }
      _extensionsPostExportMaterialAsync(BB, jB, zB) {
        return this._ApplyExtensions(jB, ((jB, QB) => jB.postExportMaterialAsync && jB.postExportMaterialAsync(BB, QB, zB)))
      }
      async _extensionsPostExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        return await Promise.all(VQ._ExtensionNames.map((async nB => {
          const dB = this._extensions[nB];
          if (dB.postExportMaterialAdditionalTexturesAsync) {
            const nB = await dB.postExportMaterialAdditionalTexturesAsync(BB, jB, zB);
            QB.push(...nB)
          }
        }))), QB
      }
      _extensionsPostExportTextures(BB, jB, zB) {
        for (const QB of VQ._ExtensionNames) {
          const nB = this._extensions[QB];
          nB.postExportTexture && nB.postExportTexture(BB, jB, zB)
        }
      }
      _extensionsPostExportMeshPrimitive(BB) {
        for (const jB of VQ._ExtensionNames) {
          const zB = this._extensions[jB];
          zB.postExportMeshPrimitive && zB.postExportMeshPrimitive(BB, this._bufferManager, this._accessors)
        }
      }
      async _extensionsPreGenerateBinaryAsync() {
        for (const BB of VQ._ExtensionNames) {
          const jB = this._extensions[BB];
          jB.preGenerateBinaryAsync && await jB.preGenerateBinaryAsync(this._bufferManager)
        }
      }
      _forEachExtensions(BB) {
        for (const jB of VQ._ExtensionNames) {
          const zB = this._extensions[jB];
          zB.enabled && BB(zB)
        }
      }
      _extensionsOnExporting() {
        this._forEachExtensions((BB => {
          var jB, zB, QB;
          BB.wasUsed && ((jB = this._glTF).extensionsUsed || (jB.extensionsUsed = []), -1 === this._glTF.extensionsUsed.indexOf(BB.name) && this._glTF.extensionsUsed.push(BB.name), BB.required && ((zB = this._glTF).extensionsRequired || (zB.extensionsRequired = []), -1 === this._glTF.extensionsRequired.indexOf(BB.name) && this._glTF.extensionsRequired.push(BB.name)), (QB = this._glTF).extensions || (QB.extensions = {}), BB.onExporting && BB.onExporting())
        }))
      }
      _loadExtensions() {
        for (const BB of VQ._ExtensionNames) {
          const jB = VQ._ExtensionFactories[BB](this);
          this._extensions[BB] = jB
        }
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mB.c.LastCreatedScene,
          jB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._glTF = {
            asset: {
              generator: `Babylon.js v${JB.b.Version}`,
              version: "2.0"
            }
          }, this._animations = [], this._accessors = [], this._bufferViews = [], this._cameras = [], this._images = [], this._materials = [], this._meshes = [], this._nodes = [], this._samplers = [], this._scenes = [], this._skins = [], this._textures = [], this._imageData = {}, this._shouldUseGlb = !1, this._materialExporter = new Hz(this), this._extensions = {}, this._bufferManager = new zQ, this._shouldExportNodeMap = new Map, this._nodeMap = new Map, this._animationGroupMap = new Map, this._materialMap = new Map, this._camerasMap = new Map, this._nodesCameraMap = new Map, this._skinMap = new Map, this._nodesSkinMap = new Map, this._materialNeedsUVsSet = new Set, !BB) throw new Error("No scene available to export");
        this._babylonScene = BB, this._options = {
          shouldExportNode: () => !0,
          shouldExportAnimation: () => !0,
          metadataSelector: BB => BB?.sF?.extras,
          animationSampleRate: 1 / 60,
          exportWithoutWaitingForScene: !1,
          exportUnusedUVs: !1,
          removeNoopRootNodes: !0,
          includeCoordinateSystemConversionNodes: !1,
          meshCompressionMethod: "None",
          khrInteractivity: void 0,
          ...jB
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
      static RegisterExtension(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
        VQ.UnregisterExtension(BB) && nB.Tools.Warn(`Extension with the name ${BB} already exists`), VQ._ExtensionFactories[BB] = jB;
        const QB = zB ?? 0;
        VQ._ExtensionOrders[BB] = QB;
        let dB = VQ._ExtensionNames.length;
        for (let nB = 0; nB < VQ._ExtensionNames.length; nB++) {
          const BB = VQ._ExtensionNames[nB];
          if (QB < VQ._ExtensionOrders[BB]) {
            dB = nB;
            break
          }
        }
        VQ._ExtensionNames.splice(dB, 0, BB)
      }
      static UnregisterExtension(BB) {
        if (!VQ._ExtensionFactories[BB]) return !1;
        delete VQ._ExtensionFactories[BB], delete VQ._ExtensionOrders[BB];
        const jB = VQ._ExtensionNames.indexOf(BB);
        return -1 !== jB && VQ._ExtensionNames.splice(jB, 1), !0
      }
      _generateJSON(BB, jB, zB) {
        const QB = {
          byteLength: BB
        };
        return QB.byteLength && (this._glTF.buffers = [QB]), this._nodes && this._nodes.length && (this._glTF.nodes = this._nodes), this._meshes && this._meshes.length && (this._glTF.meshes = this._meshes), this._scenes && this._scenes.length && (this._glTF.scenes = this._scenes, this._glTF.ny = 0), this._cameras && this._cameras.length && (this._glTF.cameras = this._cameras), this._bufferViews && this._bufferViews.length && (this._glTF.bufferViews = this._bufferViews), this._accessors && this._accessors.length && (this._glTF.accessors = this._accessors), this._animations && this._animations.length && (this._glTF.animations = this._animations), this._materials && this._materials.length && (this._glTF.materials = this._materials), this._textures && this._textures.length && (this._glTF.textures = this._textures), this._samplers && this._samplers.length && (this._glTF.samplers = this._samplers), this._skins && this._skins.length && (this._glTF.skins = this._skins), this._images && this._images.length && (this._glTF.images = this._images), this._shouldUseGlb || (QB.uri = jB + ".bin"), zB ? JSON.stringify(this._glTF, null, 2) : JSON.stringify(this._glTF)
      }
      async generateGLTFAsync(BB) {
        const jB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const zB = this._generateJSON(jB.byteLength, BB, !0),
          QB = new Blob([jB], {
            type: "application/octet-stream"
          }),
          nB = BB + ".gltf",
          dB = BB + ".bin",
          IB = new UB;
        if (IB.files[nB] = zB, IB.files[dB] = QB, this._imageData)
          for (const NB in this._imageData) IB.files[NB] = this._imageData[NB];
        return IB
      }
      async _generateBinaryAsync() {
        return await this._exportSceneAsync(), await this._extensionsPreGenerateBinaryAsync(), this._bufferManager.generateBinary(this._bufferViews)
      }
      _getPadding(BB) {
        const jB = BB % 4;
        return 0 === jB ? jB : 4 - jB
      }
      async generateGLBAsync(BB) {
        this._shouldUseGlb = !0;
        const jB = await this._generateBinaryAsync();
        this._extensionsOnExporting();
        const zB = this._generateJSON(jB.byteLength),
          QB = BB + ".glb";
        let nB, dB = zB.length;
        if ("undefined" !== typeof TextEncoder) {
          nB = (new TextEncoder).encode(zB), dB = nB.length
        }
        const IB = this._getPadding(dB),
          NB = this._getPadding(jB.byteLength),
          uB = 28 + dB + IB + jB.byteLength + NB,
          aB = new BQ(uB);
        if (aB.writeUInt32(1179937895), aB.writeUInt32(2), aB.writeUInt32(uB), aB.writeUInt32(dB + IB), aB.writeUInt32(1313821514), nB) aB.writeTypedArray(nB);
        else {
          const BB = "_".charCodeAt(0);
          for (let jB = 0; jB < dB; ++jB) {
            const QB = zB.charCodeAt(jB);
            QB != zB.codePointAt(jB) ? aB.writeUInt8(BB) : aB.writeUInt8(QB)
          }
        }
        for (let UB = 0; UB < IB; ++UB) aB.writeUInt8(32);
        aB.writeUInt32(jB.byteLength + NB), aB.writeUInt32(5130562), aB.writeTypedArray(jB);
        for (let UB = 0; UB < NB; ++UB) aB.writeUInt8(0);
        const pB = new UB;
        return pB.files[QB] = new Blob([aB.getOutputData()], {
          type: "application/octet-stream"
        }), pB
      }
      _setNodeTransformation(BB, jB, zB) {
        if (jB.getPivotPoint().equalsWithEpsilon(Xz, Yz.c) || nB.Tools.Warn("Pivot points are not supported in the glTF serializer"), !jB.position.equalsWithEpsilon(Xz, Yz.c)) {
          const nB = QB.TmpVectors.KJ[0].jH(jB.position);
          zB && wz(nB), BB.translation = nB.nQB()
        }
        jB.pp.equalsWithEpsilon(Az, Yz.c) || (BB.scale = jB.pp.nQB());
        const dB = jB.rotationQuaternion?.clone() || QB.Quaternion.FromEulerAngles(jB.rotation.x, jB.rotation.y, jB.rotation.z);
        dB.equalsWithEpsilon(Zz, Yz.c) || (zB && xz(dB), BB.rotation = dB.normalize().nQB())
      }
      _setCameraTransformation(BB, jB, zB) {
        const nB = QB.TmpVectors.KJ[0],
          dB = QB.TmpVectors.Quaternion[0],
          IB = jB.getWorldMatrix();
        if (jB.parent) {
          const BB = jB.parent.getWorldMatrix().invertToRef(QB.TmpVectors.Matrix[0]);
          IB.multiplyToRef(BB, QB.TmpVectors.Matrix[1]).decompose(void 0, dB, nB)
        } else IB.decompose(void 0, dB, nB);
        nB.equalsWithEpsilon(Xz, Yz.c) || (zB && wz(nB), BB.translation = nB.nQB()), zB && xz(dB), this._babylonScene.useRightHandedSystem || Kz(dB), dB.equalsWithEpsilon(Zz, Yz.c) || (BB.rotation = dB.nQB())
      }
      _listAvailableCameras() {
        for (const BB of this._babylonScene.cameras) {
          const jB = {
            type: BB.mode === QQ.b.PERSPECTIVE_CAMERA ? "perspective" : "orthographic"
          };
          if (BB.name && (jB.name = BB.name), "perspective" === jB.type) jB.perspective = {
            aspectRatio: BB.wJ().getAspectRatio(BB),
            yfov: BB.fovMode === QQ.b.FOVMODE_VERTICAL_FIXED ? BB.fov : BB.fov * BB.wJ().getAspectRatio(BB),
            znear: BB.minZ,
            zfar: BB.maxZ
          };
          else if ("orthographic" === jB.type) {
            const zB = BB.orthoLeft && BB.orthoRight ? .5 * (BB.orthoRight - BB.orthoLeft) : .5 * BB.wJ().getRenderWidth(),
              QB = BB.orthoBottom && BB.orthoTop ? .5 * (BB.orthoTop - BB.orthoBottom) : .5 * BB.wJ().getRenderHeight();
            jB.orthographic = {
              xmag: zB,
              ymag: QB,
              znear: BB.minZ,
              zfar: BB.maxZ
            }
          }
          this._camerasMap.set(BB, jB)
        }
      }
      _exportAndAssignCameras() {
        const BB = Array.from(this._camerasMap.values());
        for (const jB of BB) {
          const BB = this._nodesCameraMap.get(jB);
          if (void 0 !== BB) {
            this._cameras.push(jB);
            for (const jB of BB) jB.camera = this._cameras.length - 1
          }
        }
      }
      _listAvailableSkeletons() {
        for (const BB of this._babylonScene.skeletons) {
          if (BB.bones.length <= 0) continue;
          const jB = {
            joints: []
          };
          this._skinMap.set(BB, jB)
        }
      }
      _exportAndAssignSkeletons(BB) {
        for (const zB of this._babylonScene.skeletons) {
          if (zB.bones.length <= 0) continue;
          const dB = this._skinMap.get(zB);
          if (void 0 == dB) continue;
          const IB = {};
          let NB = -1;
          for (let BB = 0; BB < zB.bones.length; ++BB) {
            const jB = zB.bones[BB],
              QB = jB.getIndex() ?? BB; - 1 !== QB && (IB[QB] = jB, QB > NB && (NB = QB))
          }
          const uB = [];
          for (let zB = 0; zB <= NB; ++zB) {
            const NB = IB[zB],
              UB = NB.getTransformNode(),
              aB = UB ? this._nodeMap.get(UB) : void 0;
            if (void 0 === aB) {
              nB.Tools.Warn("Exporting a bone without a linked transform node is currently unsupported.");
              continue
            }
            dB.joints.push(aB);
            const pB = NB.getAbsoluteInverseBindMatrix().clone();
            BB.has(UB) && (jB = pB, Vz.invertToRef(QB.TmpVectors.Matrix[0]).multiplyToRef(jB, jB).multiplyToRef(Vz, jB)), uB.push(pB)
          }
          const UB = this._nodesSkinMap.get(dB);
          if (dB.joints.length > 0 && void 0 !== UB) {
            const BB = new Float32Array(16 * uB.length);
            uB.forEach(((jB, zB) => {
              BB.set(jB.m, 16 * zB)
            }));
            const jB = this._bufferManager.createBufferView(BB);
            this._accessors.push(this._bufferManager.createAccessor(jB, "MAT4", 5126, uB.length)), dB.inverseBindMatrices = this._accessors.length - 1, this._skins.push(dB);
            const zB = this._skins.length - 1;
            for (const QB of UB) QB.skin = zB
          }
        }
        var jB
      }
      async _exportSceneAsync() {
        const BB = {
          nodes: []
        };
        if (this._babylonScene.metadata) {
          const jB = this._options.metadataSelector(this._babylonScene.metadata);
          jB && (BB.extras = jB)
        }
        const jB = new Array,
          zB = new Array,
          QB = new Array,
          nB = this._options.removeNoopRootNodes && !this._options.khrInteractivity;
        let dB;
        if (nB && !this._options.includeCoordinateSystemConversionNodes)
          for (const UB of this._babylonScene.animationGroups)
            for (const BB of UB.targetedAnimations) {
              const jB = BB.target;
              jB instanceof pB.e && !jB.parent && (dB ?? (dB = new Set)).add(jB)
            }
        for (const UB of this._babylonScene.rootNodes) {
          const BB = UB.animations,
            IB = !!BB && BB.length > 0 || dB?.has(UB);
          nB && !this._options.includeCoordinateSystemConversionNodes && hz(UB, this._babylonScene.useRightHandedSystem) && !IB ? QB.push(...UB.getChildren()) : this._babylonScene.useRightHandedSystem ? jB.push(UB) : zB.push(UB)
        }
        this._listAvailableCameras(), this._listAvailableSkeletons();
        const IB = new YQ(!0, !1);
        BB.nodes.push(...await this._exportNodesAsync(zB, IB));
        const NB = new YQ(!1, !1);
        BB.nodes.push(...await this._exportNodesAsync(jB, NB));
        const uB = new YQ(!1, !0);
        BB.nodes.push(...await this._exportNodesAsync(QB, uB)), BB.nodes.length && this._scenes.push(BB), this._exportAndAssignCameras(), this._exportAndAssignSkeletons(IB.getNodesSet()), this._babylonScene.animationGroups.length && pQ._CreateNodeAndMorphAnimationFromAnimationGroups(this._babylonScene, this._animations, this._nodeMap, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, IB.getNodesSet(), this._options.shouldExportAnimation, this._animationGroupMap)
      }
      _getNodeIndex(BB) {
        return this._nodeMap.get(BB)
      }
      _getAnimationIndex(BB) {
        return this._animationGroupMap.get(BB)
      }
      _getCameraIndex(BB) {
        const jB = this._camerasMap.get(BB);
        if (!jB) return;
        const zB = this._cameras.indexOf(jB);
        return zB >= 0 ? zB : void 0
      }
      _getMaterialIndex(BB) {
        return this._materialMap.get(BB)
      }
      _getRootIndex(BB, jB) {
        switch (BB) {
          case "nodes":
            return this._getNodeIndex(jB);
          case "animations":
            return this._getAnimationIndex(jB);
          case "cameras":
            return this._getCameraIndex(jB);
          case "materials":
            return this._getMaterialIndex(jB);
          case "meshes": {
            const BB = this._getNodeIndex(jB);
            return void 0 === BB ? void 0 : this._nodes[BB]?.mesh
          }
          case "textures":
            return this._materialExporter.getTextureInfo(jB)?.index;
          case "images": {
            const BB = this._materialExporter.getTextureInfo(jB)?.index;
            if (void 0 === BB) return;
            const zB = this._textures[BB];
            for (const jB of ["KHR_texture_basisu", "EXT_texture_webp", "EXT_texture_avif"]) {
              const BB = zB?.extensions?.[jB]?.source;
              if ("number" === typeof BB) return BB
            }
            return zB?.source
          }
          case "samplers": {
            const BB = this._materialExporter.getTextureInfo(jB)?.index;
            return void 0 === BB ? void 0 : this._textures[BB]?.sampler
          }
          case "skins": {
            const BB = this._skinMap.get(jB),
              zB = BB ? this._skins.indexOf(BB) : -1;
            return zB >= 0 ? zB : void 0
          }
          case "scenes":
            return jB === this._babylonScene && this._scenes.length > 0 ? 0 : void 0
        }
      }
      _setNodeExtension(BB, jB, zB) {
        const QB = this._nodes[BB];
        if (!QB) throw new Error(`Cannot write ${jB}: glTF node ${BB} does not exist.`);
        QB.extensions || (QB.extensions = {}), QB.extensions[jB] = zB
      }
      _shouldExportNode(BB) {
        let jB = this._shouldExportNodeMap.get(BB);
        return void 0 === jB && (jB = this._options.shouldExportNode(BB), this._shouldExportNodeMap.set(BB, jB)), jB
      }
      async _exportNodesAsync(BB, jB) {
        const zB = new Array;
        this._exportBuffers(BB, jB);
        for (const QB of BB) await this._exportNodeAsync(QB, zB, jB);
        return zB
      }
      _collectBuffers(BB, jB, zB, QB, nB) {
        if (this._shouldExportNode(BB) && BB instanceof rB.e && BB.geometry) {
          const dB = BB.geometry.getVertexBuffers();
          if (dB)
            for (const QB in dB) {
              if (!ez(QB)) continue;
              const IB = dB[QB];
              nB.setHasVertexColorAlpha(IB, BB.hasVertexAlpha);
              const NB = IB._buffer,
                uB = jB.get(NB) || [];
              jB.set(NB, uB), -1 === uB.indexOf(IB) && uB.push(IB);
              const UB = zB.get(IB) || [];
              zB.set(IB, UB), -1 === UB.indexOf(BB) && UB.push(BB)
            }
          const IB = BB.morphTargetManager;
          if (IB)
            for (let jB = 0; jB < IB.numTargets; jB++) {
              const zB = IB.getTarget(jB),
                nB = QB.get(zB) || [];
              QB.set(zB, nB), -1 === nB.indexOf(BB) && nB.push(BB)
            }
        }
        for (const dB of BB.getChildren()) this._collectBuffers(dB, jB, zB, QB, nB)
      }
      _exportBuffers(BB, jB) {
        const zB = new Map,
          QB = new Map,
          nB = new Map;
        for (const NB of BB) this._collectBuffers(NB, zB, QB, nB, jB);
        const dB = Array.from(zB.keys());
        for (const NB of dB) {
          const BB = NB.getData();
          if (!BB) throw new Error("Buffer data is not available");
          const nB = zB.get(NB);
          if (!nB) continue;
          const dB = nB[0].byteStride;
          if (nB.some((BB => BB.byteStride !== dB))) throw new Error("Vertex buffers pointing to the same buffer must have the same byte stride");
          const IB = bz(BB).slice();
          for (const jB of nB) {
            const BB = QB.get(jB),
              {
                byteOffset: zB,
                byteStride: nB,
                componentCount: dB,
                type: NB,
                count: uB,
                normalized: UB,
                kind: pB
              } = Pz(jB, BB);
            switch (pB) {
              case aB.d.NormalKind:
              case aB.d.TangentKind:
                (0, Dz.e)(IB, zB, nB, dB, NB, uB, UB, (BB => {
                  const jB = Math.sqrt(BB[0] * BB[0] + BB[1] * BB[1] + BB[2] * BB[2]);
                  if (jB > 0) {
                    const zB = 1 / jB;
                    BB[0] *= zB, BB[1] *= zB, BB[2] *= zB
                  }
                }));
                break;
              case aB.d.ColorKind: {
                const jB = BB.filter((BB => BB.material instanceof dQ.StandardMaterial || null == BB.material)).length;
                if (0 == jB) break;
                if (jB != BB.length) {
                  fB.c.Warn("Not converting vertex color space, as buffer is shared by StandardMaterials and other material types. Results may look incorrect.");
                  break
                }
                NB == aB.d.UNSIGNED_BYTE && fB.c.Warn("Converting uint8 vertex colors to linear space. Results may look incorrect.");
                const QB = new yB.Color3,
                  pB = new yB.c,
                  rB = this._babylonScene.wJ().useExactSrgbConversions;
                (0, Dz.e)(IB, zB, nB, dB, NB, uB, UB, (BB => {
                  3 === BB.length ? (QB.ljB(BB, 0), QB.toLinearSpaceToRef(QB, rB), QB.toArray(BB, 0)) : (pB.ljB(BB, 0), pB.toLinearSpaceToRef(pB, rB), pB.toArray(BB, 0))
                }))
              }
            }
          }
          if (jB.convertToRightHanded) {
            for (const BB of nB) {
              const jB = QB.get(BB),
                {
                  byteOffset: zB,
                  byteStride: nB,
                  componentCount: dB,
                  type: NB,
                  count: uB,
                  normalized: UB,
                  kind: pB
                } = Pz(BB, jB);
              switch (pB) {
                case aB.d.PositionKind:
                case aB.d.NormalKind:
                case aB.d.TangentKind:
                  (0, Dz.e)(IB, zB, nB, dB, NB, uB, UB, (BB => {
                    BB[0] = -BB[0]
                  }))
              }
            }
            jB.convertedToRightHandedBuffers.set(NB, IB)
          }
          const uB = this._bufferManager.createBufferView(IB, dB);
          jB.setVertexBufferView(NB, uB);
          const UB = new Map;
          for (const jB of nB) {
            const BB = QB.get(jB),
              {
                kind: zB,
                totalVertices: nB
              } = Pz(jB, BB);
            switch (zB) {
              case aB.d.MatricesIndicesKind:
              case aB.d.MatricesIndicesExtraKind:
                if (jB.type == aB.d.FLOAT) {
                  const BB = jB.getFloatData(nB);
                  null !== BB && UB.set(jB, BB)
                }
            }
          }
          0 !== UB.size && fB.c.Warn("Joint indices conversion needed: some joint indices are stored as floats in Babylon but GLTF requires UNSIGNED BYTES. We will perform the conversion but this might lead to unused data in the buffer.");
          const pB = Array.from(UB.keys());
          for (const zB of pB) {
            const BB = UB.get(zB);
            if (!BB) continue;
            const QB = BB.some((BB => BB >= 256)),
              nB = new(QB ? Uint16Array : Uint8Array)(BB.length);
            for (let jB = 0; jB < BB.length; jB++) nB[jB] = BB[jB];
            const dB = this._bufferManager.createBufferView(nB, 4 * (QB ? 2 : 1));
            jB.setRemappedBufferView(NB, zB, dB)
          }
        }
        const IB = Array.from(nB.keys());
        for (const NB of IB) {
          const BB = nB.get(NB);
          if (!BB) continue;
          const zB = rQ(NB, BB[0], this._bufferManager, this._bufferViews, this._accessors, jB.convertToRightHanded);
          for (const QB of BB) jB.bindMorphDataToMesh(QB, zB)
        }
      }
      async _exportNodeAsync(BB, jB, zB) {
        let QB = this._nodeMap.get(BB);
        if (void 0 !== QB) return void(jB.includes(QB) || jB.push(QB));
        const nB = await this._createNodeAsync(BB, zB);
        if (nB) {
          QB = this._nodes.length, this._nodes.push(nB), this._nodeMap.set(BB, QB), zB.pushExportedNode(BB), jB.push(QB);
          const dB = {
              name: "runtime animations",
              channels: [],
              samplers: []
            },
            IB = [];
          this._babylonScene.animationGroups.length || (pQ._CreateMorphTargetAnimationFromMorphTargetAnimations(BB, dB, IB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, zB.convertToRightHanded, this._options.shouldExportAnimation), BB.animations.length && pQ._CreateNodeAnimationFromNodeAnimations(BB, dB, IB, this._nodeMap, this._nodes, this._bufferManager, this._bufferViews, this._accessors, this._animationSampleRate, zB.convertToRightHanded, this._options.shouldExportAnimation)), dB.channels.length && dB.samplers.length && this._animations.push(dB), IB.forEach((BB => {
            BB.channels.length && BB.samplers.length && this._animations.push(BB)
          }))
        }
        const dB = nB ? [] : jB;
        for (const IB of BB.getChildren()) await this._exportNodeAsync(IB, dB, zB);
        nB && dB.length && (nB.children = dB)
      }
      async _createNodeAsync(BB, jB) {
        if (!this._shouldExportNode(BB)) return null;
        const zB = {};
        if (BB.name && (zB.name = BB.name), BB.metadata) {
          const jB = this._options.metadataSelector(BB.metadata);
          jB && (zB.extras = jB)
        }
        if (BB instanceof pB.e && (this._setNodeTransformation(zB, BB, jB.convertToRightHanded), BB instanceof rB.e)) {
          const QB = BB instanceof sB.c ? BB.vQB : BB;
          if (QB.cL && QB.cL.length > 0 && (zB.mesh = await this._exportMeshAsync(QB, jB)), BB.skeleton) {
            const jB = this._skinMap.get(BB.skeleton);
            void 0 !== jB && (void 0 === this._nodesSkinMap.get(jB) && this._nodesSkinMap.set(jB, []), this._nodesSkinMap.get(jB)?.push(zB))
          }
        }
        if (BB instanceof Fz.g) {
          const QB = this._camerasMap.get(BB);
          if (QB) {
            void 0 === this._nodesCameraMap.get(QB) && this._nodesCameraMap.set(QB, []), this._setCameraTransformation(zB, BB, jB.convertToRightHanded);
            const nB = BB.parent;
            if (null !== nB && cz(BB, nB)) {
              const BB = this._nodeMap.get(nB);
              if (void 0 !== BB) {
                const jB = this._nodes[BB];
                return Cz(zB, jB), this._nodesCameraMap.get(QB)?.push(jB), null
              }
            }
            this._nodesCameraMap.get(QB)?.push(zB)
          }
        }
        return await this._extensionsPostExportNodeAsync("exportNodeAsync", zB, BB, this._nodeMap, jB.convertToRightHanded) ? zB : (fB.c.Warn(`Not exporting node ${BB.name}`), null)
      }
      _exportIndices(BB, jB, zB, QB, nB, IB, NB, uB, UB) {
        let aB = null;
        UB.mode = function(BB) {
          switch (BB) {
            case dB.b.TriangleFillMode:
              return 4;
            case dB.b.TriangleStripDrawMode:
              return 5;
            case dB.b.TriangleFanDrawMode:
              return 6;
            case dB.b.PointListDrawMode:
            case dB.b.PointFillMode:
              return 0;
            case dB.b.LineLoopDrawMode:
              return 2;
            case dB.b.LineListDrawMode:
              return 1;
            case dB.b.LineStripDrawMode:
              return 3
          }
          throw new Error(`Unknown fill mode: ${BB}`)
        }(IB);
        const pB = NB !== dB.b.CounterClockWiseSideOrientation && function(BB) {
          switch (BB) {
            case dB.b.TriangleFillMode:
            case dB.b.TriangleStripDrawMode:
            case dB.b.TriangleFanDrawMode:
              return !0
          }
          return !1
        }(IB);
        if (pB) {
          if (IB === dB.b.TriangleStripDrawMode || IB === dB.b.TriangleFanDrawMode) throw new Error("Triangle strip/fan fill mode is not implemented");
          const NB = jB ? new Uint32Array(QB) : new Uint16Array(QB);
          if (BB)
            for (let jB = 0; jB + 2 < QB; jB += 3) NB[jB] = BB[zB + jB] + nB, NB[jB + 1] = BB[zB + jB + 2] + nB, NB[jB + 2] = BB[zB + jB + 1] + nB;
          else
            for (let BB = 0; BB + 2 < QB; BB += 3) NB[BB] = BB, NB[BB + 1] = BB + 2, NB[BB + 2] = BB + 1;
          aB = NB
        } else if (BB && 0 !== nB) {
          const dB = jB ? new Uint32Array(QB) : new Uint16Array(QB);
          for (let jB = 0; jB < QB; jB++) dB[jB] = BB[zB + jB] + nB;
          aB = dB
        } else BB && (aB = function(BB, jB, zB, QB) {
          let nB = BB;
          return 0 === jB && zB === BB.length || (nB = Array.isArray(BB) ? BB.slice(jB, jB + zB) : BB.subarray(jB, jB + zB)), nB instanceof Int32Array ? new Uint32Array(nB.buffer, nB.byteOffset, nB.length) : Array.isArray(nB) ? QB ? new Uint32Array(nB) : new Uint16Array(nB) : nB
        }(BB, zB, QB, jB));
        if (aB) {
          let dB = uB.getIndicesAccessor(BB, zB, QB, nB, pB);
          if (void 0 === dB) {
            const IB = this._bufferManager.createBufferView(aB),
              NB = jB ? 5125 : 5123;
            this._accessors.push(this._bufferManager.createAccessor(IB, "SCALAR", NB, QB, 0)), dB = this._accessors.length - 1, uB.setIndicesAccessor(BB, zB, QB, nB, pB, dB)
          }
          UB.indices = dB
        }
      }
      _exportVertexBuffer(BB, jB, zB, QB, nB, dB) {
        const IB = BB.getKind();
        if (!ez(IB)) return;
        if (IB.startsWith("uv") && !this._options.exportUnusedUVs && (!jB || !this._materialNeedsUVsSet.has(jB))) return;
        let NB = nB.getVertexAccessor(BB, zB, QB);
        if (void 0 === NB) {
          const jB = nB.convertedToRightHandedBuffers.get(BB._buffer) || BB._buffer.getData(),
            dB = IB === aB.d.PositionKind ? function(BB, jB, zB, QB) {
              const {
                byteOffset: nB,
                byteStride: dB,
                type: IB,
                normalized: NB
              } = jB, uB = jB.getSize(), UB = new Array(uB).fill(1 / 0), aB = new Array(uB).fill(-1 / 0);
              return (0, Dz.e)(BB, nB + zB * dB, dB, uB, IB, QB * uB, NB, (BB => {
                for (let jB = 0; jB < uB; jB++) UB[jB] = Math.min(UB[jB], BB[jB]), aB[jB] = Math.max(aB[jB], BB[jB])
              })), {
                min: UB,
                max: aB
              }
            }(jB, BB, zB, QB) : void 0,
            uB = (IB === aB.d.MatricesIndicesKind || IB === aB.d.MatricesIndicesExtraKind) && BB.type === aB.d.FLOAT,
            UB = uB ? aB.d.UNSIGNED_BYTE : BB.type,
            pB = uB ? void 0 : BB.normalized,
            rB = uB ? nB.getRemappedBufferView(BB._buffer, BB) : nB.getVertexBufferView(BB._buffer),
            sB = BB.byteOffset + zB * BB.byteStride;
          this._accessors.push(this._bufferManager.createAccessor(rB, function(BB, jB) {
            if (BB == aB.d.ColorKind) return jB ? "VEC4" : "VEC3";
            switch (BB) {
              case aB.d.PositionKind:
              case aB.d.NormalKind:
                return "VEC3";
              case aB.d.TangentKind:
              case aB.d.MatricesIndicesKind:
              case aB.d.MatricesIndicesExtraKind:
              case aB.d.MatricesWeightsKind:
              case aB.d.MatricesWeightsExtraKind:
                return "VEC4";
              case aB.d.UVKind:
              case aB.d.UV2Kind:
              case aB.d.UV3Kind:
              case aB.d.UV4Kind:
              case aB.d.UV5Kind:
              case aB.d.UV6Kind:
                return "VEC2"
            }
            throw new Error(`Unknown kind ${BB}`)
          }(IB, nB.hasVertexColorAlpha(BB)), UB, QB, sB, dB, pB)), NB = this._accessors.length - 1, nB.setVertexAccessor(BB, zB, QB, NB)
        }
        dB.attributes[function(BB) {
          switch (BB) {
            case aB.d.PositionKind:
              return "POSITION";
            case aB.d.NormalKind:
              return "NORMAL";
            case aB.d.TangentKind:
              return "TANGENT";
            case aB.d.ColorKind:
              return "COLOR_0";
            case aB.d.UVKind:
              return "TEXCOORD_0";
            case aB.d.UV2Kind:
              return "TEXCOORD_1";
            case aB.d.UV3Kind:
              return "TEXCOORD_2";
            case aB.d.UV4Kind:
              return "TEXCOORD_3";
            case aB.d.UV5Kind:
              return "TEXCOORD_4";
            case aB.d.UV6Kind:
              return "TEXCOORD_5";
            case aB.d.MatricesIndicesKind:
              return "JOINTS_0";
            case aB.d.MatricesIndicesExtraKind:
              return "JOINTS_1";
            case aB.d.MatricesWeightsKind:
              return "WEIGHTS_0";
            case aB.d.MatricesWeightsExtraKind:
              return "WEIGHTS_1"
          }
          throw new Error(`Unknown kind: ${BB}`)
        }(IB)] = NB
      }
      async _exportMaterialAsync(BB, jB, zB, QB) {
        let nB = this._materialMap.get(BB);
        if (void 0 === nB) {
          const QB = jB && Object.keys(jB).some((BB => BB.startsWith("uv")));
          if ((BB = BB instanceof nQ.b ? BB.Y5[zB.materialIndex] : BB) instanceof Sj) nB = await this._materialExporter.exportPBRMaterialAsync(BB, QB);
          else if (BB instanceof dQ.StandardMaterial) nB = await this._materialExporter.exportStandardMaterialAsync(BB, QB);
          else {
            if (!(BB instanceof Rj)) return void fB.c.Warn(`Unsupported material '${BB.name}' with type ${BB.getClassName()}`);
            nB = await this._materialExporter.exportOpenPBRMaterialAsync(BB, QB)
          }
          this._materialMap.set(BB, nB)
        }
        QB.material = nB
      }
      async _exportMeshAsync(BB, jB) {
        let zB = jB.getMesh(BB);
        if (void 0 !== zB) return zB;
        const QB = {
          primitives: []
        };
        zB = this._meshes.length, this._meshes.push(QB), jB.setMesh(BB, zB);
        const nB = BB.isUnIndexed ? null : BB.dQB(),
          IB = BB.geometry?.getVertexBuffers(),
          NB = jB.getMorphTargetsFromMesh(BB),
          uB = BB instanceof sQ.d,
          UB = BB instanceof FQ,
          aB = BB.cL;
        if (IB && aB && aB.length > 0)
          for (const pB of aB) {
            const zB = {
                attributes: {}
              },
              aB = pB.bJ() || this._babylonScene.defaultMaterial;
            if (UB) {
              const jB = {
                  name: aB.name
                },
                QB = BB,
                nB = yB.Color3.White(),
                dB = QB.material?.alpha ?? 1,
                IB = QB.greasedLineMaterial?.color ?? nB;
              (!IB.equalsWithEpsilon(nB, Yz.c) || dB < 1) && (jB.pbrMetallicRoughness = {
                baseColorFactor: [...IB.nQB(), dB]
              }), this._materials.push(jB), zB.material = this._materials.length - 1
            } else if (uB) {
              const jB = {
                  name: aB.name
                },
                QB = BB;
              (!QB.color.equalsWithEpsilon(yB.Color3.White(), Yz.c) || QB.alpha < 1) && (jB.pbrMetallicRoughness = {
                baseColorFactor: [...QB.color.nQB(), QB.alpha]
              }), this._materials.push(jB), zB.material = this._materials.length - 1
            } else await this._exportMaterialAsync(aB, IB, pB, zB);
            const rB = uB || UB ? dB.b.LineListDrawMode : BB.overrideRenderingFillMode ?? aB.fillMode;
            let sB = aB._getEffectiveOrientation(BB);
            jB.wasAddedByNoopNode && !BB.aY().useRightHandedSystem && (sB = sB === dB.b.ClockWiseSideOrientation ? dB.b.CounterClockWiseSideOrientation : dB.b.ClockWiseSideOrientation), this._exportIndices(nB, nB ? (0, Dz.b)(nB, pB.indexCount, pB.indexStart, pB.verticesStart) : pB.verticesCount > 65535, nB ? pB.indexStart : pB.verticesStart, nB ? pB.indexCount : pB.verticesCount, -pB.verticesStart, rB, sB, jB, zB);
            for (const BB of Object.values(IB)) this._exportVertexBuffer(BB, aB, pB.verticesStart, pB.verticesCount, jB, zB);
            if (NB) {
              zB.targets = [];
              for (const BB of NB) zB.targets.push(BB.attributes)
            }
            QB.primitives.push(zB), this._extensionsPostExportMeshPrimitive(zB)
          }
        if (NB) {
          QB.weights = [], QB.extras || (QB.extras = {}), QB.extras.targetNames = [];
          for (const BB of NB) QB.weights.push(BB.influence), QB.extras.targetNames.push(BB.name)
        }
        return zB
      }
    }
    VQ._ExtensionNames = new Array, VQ._ExtensionFactories = {}, VQ._ExtensionOrders = {};
    class hQ {
      static async GLTFAsync(BB, jB, zB) {
        zB && zB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const QB = new VQ(BB, zB),
          nB = await QB.generateGLTFAsync(jB.replace(/\.[^/.]+$/, ""));
        return QB.dispose(), nB
      }
      static async GLBAsync(BB, jB, zB) {
        zB && zB.exportWithoutWaitingForScene || await BB.whenReadyAsync();
        const QB = new VQ(BB, zB),
          nB = await QB.generateGLBAsync(jB.replace(/\.[^/.]+$/, ""));
        return QB.dispose(), nB
      }
    }
    const XQ = "EXT_mesh_gpu_instancing";

    function ZQ(BB, jB) {
      const zB = new Float32Array(3 * jB);
      for (let QB = 0; QB < jB; QB++) zB[3 * QB + 0] = BB[4 * QB + 0], zB[3 * QB + 1] = BB[4 * QB + 1], zB[3 * QB + 2] = BB[4 * QB + 2];
      return zB
    }
    class AQ {
      constructor(BB) {
        this.name = XQ, this.enabled = !0, this.required = !1, this._instanceColorWarned = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportNodeAsync(BB, jB, zB, QB, nB, dB) {
        return await new Promise((BB => {
          if (jB && zB instanceof SQ.b && zB.hasThinInstances && this._exporter) {
            this._wasUsed = !0;
            const BB = AB.m.Zero(),
              QB = AB.d.Identity(),
              IB = AB.m.One(),
              NB = zB.thinInstanceGetWorldMatrices(),
              uB = AB.h.KJ[2],
              UB = AB.h.Quaternion[1],
              aB = AB.h.KJ[3];
            let pB = !1,
              rB = !1,
              sB = !1;
            const JB = new Float32Array(3 * zB.F_),
              mB = new Float32Array(4 * zB.F_),
              yB = new Float32Array(3 * zB.F_);
            let kB = 0;
            for (const jB of NB) jB.decompose(aB, UB, uB), nB && (wz(uB), xz(UB)), JB.set(uB.nQB(), 3 * kB), mB.set(UB.normalize().nQB(), 4 * kB), yB.set(aB.nQB(), 3 * kB), pB = pB || !uB.equalsWithEpsilon(BB), rB = rB || !UB.equalsWithEpsilon(QB), sB = sB || !aB.equalsWithEpsilon(IB), kB++;
            const GB = {
              attributes: {}
            };
            pB && (GB.attributes.TRANSLATION = this._buildAccessor(JB, "VEC3", zB.F_, dB)), rB && (GB.attributes.ROTATION = this._buildAccessor(mB, "VEC4", zB.F_, dB)), sB && (GB.attributes.SCALE = this._buildAccessor(yB, "VEC3", zB.F_, dB));
            let LB = zB._userThinInstanceBuffersStorage?.data?.instanceColor;
            if (LB) {
              const BB = zB.F_,
                jB = "VEC3";
              zB.hasVertexAlpha && LB.length === 4 * BB ? (this._instanceColorWarned || (fB.c.Warn("EXT_mesh_gpu_instancing: Exporting instance colors as RGB, alpha channel of instance color is not exported"), this._instanceColorWarned = !0), LB = ZQ(LB, BB)) : LB.length === 4 * BB && (LB = ZQ(LB, BB)), LB.length === 3 * BB && (GB.attributes._COLOR_0 = this._buildAccessor(LB, jB, BB, dB))
            }
            jB.extensions = jB.extensions || {}, jB.extensions[XQ] = GB
          }
          BB(jB)
        }))
      }
      _buildAccessor(BB, jB, zB, QB) {
        const nB = QB.createBufferView(BB),
          dB = QB.createAccessor(nB, jB, 5126, zB);
        return this._exporter._accessors.push(dB), this._exporter._accessors.length - 1
      }
    }
    let TQ = !1;

    function PQ() {
      TQ || (TQ = !0, VQ.RegisterExtension(XQ, (BB => new AQ(BB))))
    }
    zB(40584);
    PQ();
    var WQ = zB(41934);

    function eQ(BB, jB, zB, QB) {
      const nB = BB;
      let dB = null,
        IB = null,
        NB = null,
        uB = null;
      const UB = {},
        aB = jB.find((BB => "POSITION" === BB.dracoName));
      if (!aB) throw new Error("Draco: Missing position attribute for encoding.");
      if (!zB) {
        const BB = aB.data.length / aB.size;
        zB = new(BB > 65535 ? Uint32Array : Uint16Array)(BB);
        for (let jB = 0; jB < BB; jB++) zB[jB] = jB
      }
      try {
        dB = new nB.Encoder, IB = new nB.MeshBuilder, NB = new nB.Mesh, IB.AddFacesToMesh(NB, zB.length / 3, zB);
        const BB = new Map([
          [Float32Array, (BB, jB, zB, QB, nB, dB) => BB.AddFloatAttribute(jB, zB, QB, nB, dB)],
          [Uint32Array, (BB, jB, zB, QB, nB, dB) => BB.AddUInt32Attribute(jB, zB, QB, nB, dB)],
          [Uint16Array, (BB, jB, zB, QB, nB, dB) => BB.AddUInt16Attribute(jB, zB, QB, nB, dB)],
          [Uint8Array, (BB, jB, zB, QB, nB, dB) => BB.AddUInt8Attribute(jB, zB, QB, nB, dB)],
          [Int32Array, (BB, jB, zB, QB, nB, dB) => BB.AddInt32Attribute(jB, zB, QB, nB, dB)],
          [Int16Array, (BB, jB, zB, QB, nB, dB) => BB.AddInt16Attribute(jB, zB, QB, nB, dB)],
          [Int8Array, (BB, jB, zB, QB, nB, dB) => BB.AddInt8Attribute(jB, zB, QB, nB, dB)]
        ]);
        for (const zB of jB) {
          zB.data instanceof Uint8ClampedArray && (zB.data = new Uint8Array(zB.data));
          const jB = BB.get(zB.data.constructor),
            uB = zB.data.length / zB.size;
          UB[zB.kind] = jB(IB, NB, nB[zB.dracoName], uB, zB.size, zB.data), QB.quantizationBits && QB.quantizationBits[zB.dracoName] && dB.SetAttributeQuantization(nB[zB.dracoName], QB.quantizationBits[zB.dracoName])
        }
        QB.method && dB.SetEncodingMethod(nB[QB.method]), void 0 !== QB.encodeSpeed && void 0 !== QB.decodeSpeed && dB.SetSpeedOptions(QB.encodeSpeed, QB.decodeSpeed), uB = new nB.DracoInt8Array;
        const aB = dB.EncodeMeshToDracoBuffer(NB, uB);
        if (aB <= 0) throw new Error("Draco: Failed to encode.");
        const pB = new Int8Array(aB);
        for (let jB = 0; jB < aB; jB++) pB[jB] = uB.GetValue(jB);
        return {
          data: pB,
          attributeIds: UB
        }
      } finally {
        NB && nB.destroy(NB), IB && nB.destroy(IB), dB && nB.destroy(dB), uB && nB.destroy(uB)
      }
    }

    function lQ() {
      let BB;
      onmessage = jB => {
        const zB = jB.data;
        switch (zB.id) {
          case "init": {
            zB.url && importScripts(zB.url);
            const jB = zB.wasmBinary ? {
              wasmBinary: zB.wasmBinary
            } : {};
            BB = DracoEncoderModule(jB), postMessage({
              id: "initDone"
            });
            break
          }
          case "encodeMesh":
            if (!BB) throw new Error("Draco: Encoder module is not available.");
            BB.then((BB => {
              const jB = eQ(BB, zB.attributes, zB.indices, zB.options);
              postMessage({
                id: "encodeMeshSuccess",
                encodedMeshData: jB
              }, jB ? [jB.data.buffer] : void 0)
            })).catch((BB => {
              postMessage({
                id: "encodeMeshError",
                errorMessage: BB.message
              })
            }))
        }
      }
    }
    class wQ {
      constructor(BB) {
        if (BB.workerPool) return void(this._workerPoolPromise = Promise.resolve(BB.workerPool));
        const jB = BB.wasmBinary,
          zB = BB.numWorkers ?? ("object" === typeof navigator && navigator.hardwareConcurrency ? Math.min(Math.floor(.5 * navigator.hardwareConcurrency), 4) : 1),
          QB = zB && "function" === typeof Worker && "function" === typeof URL,
          nB = QB || !BB.jsModule,
          dB = BB.wasmUrl && BB.wasmBinaryUrl && "object" === typeof WebAssembly ? {
            url: nB ? Ej.i.GetBabylonScriptURL(BB.wasmUrl, !0) : "",
            wasmBinaryPromise: jB ? Promise.resolve(jB) : Ej.i.LoadFileAsync(Ej.i.GetBabylonScriptURL(BB.wasmBinaryUrl, !0))
          } : {
            url: nB ? Ej.i.GetBabylonScriptURL(BB.fallbackUrl) : "",
            wasmBinaryPromise: Promise.resolve(void 0)
          };
        QB ? this._workerPoolPromise = dB.wasmBinaryPromise.then((BB => {
          const jB = this._getWorkerContent(),
            QB = URL.createObjectURL(new Blob([jB], {
              type: "application/javascript"
            }));
          return new WQ.c(zB, (() => async function(BB, jB, zB) {
            return await new Promise(((QB, nB) => {
              const dB = jB => {
                  BB.removeEventListener("error", dB), BB.removeEventListener("message", IB), nB(jB)
                },
                IB = jB => {
                  "initDone" === jB.data.id && (BB.removeEventListener("error", dB), BB.removeEventListener("message", IB), QB(BB))
                };
              if (BB.addEventListener("error", dB), BB.addEventListener("message", IB), jB) {
                const QB = jB.slice(0);
                BB.postMessage({
                  id: "init",
                  url: zB,
                  wasmBinary: QB
                }, [QB])
              } else BB.postMessage({
                id: "init",
                url: zB
              })
            }))
          }(new Worker(QB), BB, dB.url)))
        })) : this._modulePromise = dB.wasmBinaryPromise.then((async jB => {
          if (!this._isModuleAvailable() && !BB.jsModule) {
            if (!dB.url) throw new Error("Draco codec module is not available");
            await Ej.i.LoadBabylonScriptAsync(dB.url)
          }
          return await this._createModuleAsync(jB, BB.jsModule)
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

    function xQ() {
      const BB = BB => !!BB && "object" === typeof BB;
      for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
      return zB.reduce(((jB, zB) => {
        const QB = Object.keys(zB);
        for (const nB of QB) {
          const QB = jB[nB],
            dB = zB[nB];
          Array.isArray(QB) && Array.isArray(dB) ? jB[nB] = QB.concat(dB) : BB(QB) && BB(dB) ? jB[nB] = xQ(QB, dB) : jB[nB] = dB
        }
        return jB
      }), {})
    }

    function KQ(BB) {
      return BB === TB.l.PositionKind ? "POSITION" : BB === TB.l.NormalKind ? "NORMAL" : BB === TB.l.ColorKind ? "COLOR" : BB.startsWith(TB.l.UVKind) ? "TEX_COORD" : "GENERIC"
    }
    const CQ = {
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
    class cQ extends wQ {
      static get DefaultAvailable() {
        return !!((BB = cQ.DefaultConfiguration).wasmUrl && (BB.wasmBinary || BB.wasmBinaryUrl) && "object" === typeof WebAssembly || BB.fallbackUrl);
        var BB
      }
      static get Default() {
        return cQ._Default ?? (cQ._Default = new cQ), cQ._Default
      }
      static ResetDefault(BB) {
        cQ._Default && (BB || cQ._Default.dispose(), cQ._Default = null)
      }
      _isModuleAvailable() {
        return "undefined" !== typeof DracoEncoderModule
      }
      async _createModuleAsync(BB, jB) {
        return {
          module: await (jB || DracoEncoderModule)({
            wasmBinary: BB
          })
        }
      }
      _getWorkerContent() {
        return `${eQ}(${lQ})()`
      }
      constructor() {
        super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cQ.DefaultConfiguration)
      }
      async _encodeAsync(BB, jB, zB) {
        const QB = zB ? xQ(CQ, zB) : CQ;
        if (this._workerPoolPromise) {
          const zB = await this._workerPoolPromise;
          return await new Promise(((nB, dB) => {
            zB.push(((zB, IB) => {
              const NB = BB => {
                  zB.removeEventListener("error", NB), zB.removeEventListener("message", uB), dB(BB), IB()
                },
                uB = BB => {
                  "encodeMeshSuccess" === BB.data.id ? (zB.removeEventListener("error", NB), zB.removeEventListener("message", uB), nB(BB.data.encodedMeshData), IB()) : "encodeMeshError" === BB.data.id && (zB.removeEventListener("error", NB), zB.removeEventListener("message", uB), dB(new Error(BB.data.errorMessage)), IB())
                };
              zB.addEventListener("error", NB), zB.addEventListener("message", uB);
              const UB = [];
              for (const jB of BB) UB.push(jB.data.buffer);
              jB && UB.push(jB.buffer), zB.postMessage({
                id: "encodeMesh",
                attributes: BB,
                indices: jB,
                options: QB
              }, UB)
            }))
          }))
        }
        if (this._modulePromise) {
          return eQ((await this._modulePromise).module, BB, jB, QB)
        }
        throw new Error("Draco: Encoder module is not available")
      }
      async encodeMeshAsync(BB, jB) {
        if (0 == BB.getTotalVertices()) throw new Error("Draco: Cannot encode geometry with no vertices.");
        BB instanceof SQ.b && BB.morphTargetManager && "MESH_EDGEBREAKER_ENCODING" === jB?.method && (fB.c.Warn("Draco: Cannot use EDGEBREAKER encoding method with morph targets. Falling back to SEQUENTIAL method."), jB.method = "MESH_SEQUENTIAL_ENCODING");
        const zB = function(BB) {
            let jB = BB.dQB(void 0, !0);
            return !jB || jB instanceof Uint32Array || jB instanceof Uint16Array || (jB = ((0, Dz.b)(jB, jB.length) ? Uint32Array : Uint16Array).from(jB)), jB
          }(BB),
          QB = function(BB, jB) {
            const zB = [];
            for (const QB of BB.getVerticesDataKinds()) {
              if (jB?.includes(QB)) {
                if (QB === TB.l.PositionKind) throw new Error("Draco: Cannot exclude position attribute from encoding.");
                continue
              }
              const nB = BB.getVertexBuffer(QB),
                dB = nB.getSize(),
                IB = (0, Dz.t)(nB.getData(), dB, nB.type, nB.byteOffset, nB.byteStride, BB.getTotalVertices(), !0);
              zB.push({
                kind: QB,
                dracoName: KQ(QB),
                size: dB,
                data: IB
              })
            }
            return zB
          }(BB, jB?.excludedAttributes);
        return await this._encodeAsync(QB, zB, jB)
      }
    }
    cQ.DefaultConfiguration = {
      wasmUrl: `${Ej.i._DefaultCdnUrl}/draco_encoder_wasm_wrapper.js`,
      wasmBinaryUrl: `${Ej.i._DefaultCdnUrl}/draco_encoder.wasm`,
      fallbackUrl: `${Ej.i._DefaultCdnUrl}/draco_encoder.js`
    }, cQ._Default = null;
    const bQ = "KHR_draco_mesh_compression";
    class vQ {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = bQ, this.required = !0, this._bufferViewsUsed = new Set, this._accessorsUsed = new Set, this._encodePromises = [], this._wasUsed = !1, this.enabled = "Draco" === BB.options.meshCompressionMethod && cQ.DefaultAvailable
      }
      dispose() {}
      postExportMeshPrimitive(BB, jB, zB) {
        if (!this.enabled) return;
        if (4 !== BB.mode && 5 !== BB.mode) return void fB.c.Warn("Cannot compress primitive with mode " + BB.mode + ".");
        const QB = [],
          nB = [];
        let dB = null;
        if (void 0 !== BB.indices) {
          const IB = zB[BB.indices],
            NB = jB.getBufferView(IB);
          dB = jB.getData(NB).slice(), QB.push(NB), nB.push(IB)
        }
        const IB = [];
        for (const [aB, pB] of Object.entries(BB.attributes)) {
          const BB = zB[pB],
            dB = jB.getBufferView(BB),
            uB = Wz(BB.type),
            UB = (0, Dz.t)(jB.getData(dB), uB, BB.componentType, BB.byteOffset || 0, dB.byteStride || (0, Dz.p)(BB.componentType) * uB, BB.count, !0);
          IB.push({
            kind: aB,
            dracoName: (NB = aB, "POSITION" === NB ? "POSITION" : "NORMAL" === NB ? "NORMAL" : NB.startsWith("COLOR") ? "COLOR" : NB.startsWith("TEXCOORD") ? "TEX_COORD" : "GENERIC"),
            size: Wz(BB.type),
            data: UB
          }), QB.push(dB), nB.push(BB)
        }
        var NB;
        const uB = {
            method: BB.targets ? "MESH_SEQUENTIAL_ENCODING" : "MESH_EDGEBREAKER_ENCODING"
          },
          UB = cQ.Default._encodeAsync(IB, dB, uB).then((zB => {
            const dB = {
                bufferView: -1,
                attributes: zB.attributeIds
              },
              IB = jB.createBufferView(zB.data);
            jB.setBufferView(dB, IB);
            for (const BB of QB) this._bufferViewsUsed.add(BB);
            for (const BB of nB) this._accessorsUsed.add(BB);
            BB.extensions || (BB.extensions = {}), BB.extensions[bQ] = dB
          })).catch((BB => {
            fB.c.Error("KHR_draco_mesh_compression: Failed to export Draco-encoded primitive. Resulting glTF may be invalid. " + BB.message)
          }));
        this._encodePromises.push(UB), this._wasUsed = !0
      }
      async preGenerateBinaryAsync(BB) {
        this.enabled && (await Promise.all(this._encodePromises), this._bufferViewsUsed.forEach((jB => {
          BB.getPropertiesWithBufferView(jB).every((BB => this._accessorsUsed.has(BB))) && BB.removeBufferView(jB)
        })), this._bufferViewsUsed.clear(), this._accessorsUsed.clear())
      }
    }
    let RQ = !1;

    function OQ() {
      RQ || (RQ = !0, VQ.RegisterExtension(bQ, (BB => new vQ(BB))))
    }
    OQ();
    var Bn = zB(41668);
    const jn = "KHR_lights_punctual",
      zn = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        range: Number.MAX_VALUE
      },
      Qn = {
        innerConeAngle: 0,
        outerConeAngle: Math.PI / 4
      },
      nn = AB.m.Backward();
    class dn {
      constructor(BB) {
        this.name = jn, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[jn] = this._lights
      }
      async postExportNodeAsync(BB, jB, zB, QB, nB) {
        return await new Promise((dB => {
          if (!(zB instanceof aQ.b)) return void dB(jB);
          const IB = zB.getTypeID() == aQ.b.LIGHTTYPEID_POINTLIGHT ? "point" : zB.getTypeID() == aQ.b.LIGHTTYPEID_DIRECTIONALLIGHT ? "directional" : zB.getTypeID() == aQ.b.LIGHTTYPEID_SPOTLIGHT ? "spot" : null;
          if (!IB || !(zB instanceof Bn.b)) return fB.c.Warn(`${BB}: Light ${zB.name} is not supported in ${jn}`), void dB(jB);
          if (zB.falloffType !== aQ.b.FALLOFF_GLTF && fB.c.Warn(`${BB}: Light falloff for ${zB.name} does not match the ${jn} specification!`), !zB.position.YIB(0, 0, 0)) {
            const BB = AB.h.KJ[0].jH(zB.position);
            nB && wz(BB), jB.translation = BB.nQB()
          }
          if ("point" !== IB) {
            const BB = zB.direction.normalizeToRef(AB.h.KJ[0]);
            nB && wz(BB);
            const QB = AB.d.FromUnitVectorsToRef(nn, BB, AB.h.Quaternion[0]);
            AB.d.IsIdentity(QB) || (jB.rotation = QB.nQB())
          }
          const NB = {
            type: IB,
            name: zB.name,
            color: zB.diffuse.nQB(),
            intensity: zB.intensity,
            range: zB.range
          };
          if (vz(NB, zn), "spot" === IB) {
            const BB = zB;
            NB.spot = {
              innerConeAngle: BB.innerAngle / 2,
              outerConeAngle: BB.angle / 2
            }, vz(NB.spot, Qn)
          }
          this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(NB);
          const uB = {
              light: this._lights.lights.length - 1
            },
            UB = zB.parent;
          if (UB && cz(zB, UB)) {
            const BB = QB.get(UB);
            if (BB) {
              const zB = this._exporter._nodes[BB];
              return Cz(jB, zB), zB.extensions || (zB.extensions = {}), zB.extensions[jn] = uB, void dB(null)
            }
          }
          jB.extensions || (jB.extensions = {}), jB.extensions[jn] = uB, dB(jB)
        }))
      }
    }
    let In = !1;

    function Nn() {
      In || (In = !0, VQ.RegisterExtension(jn, (BB => new dn(BB))))
    }
    Nn();
    const un = "KHR_interactivity";
    class Un {
      constructor(BB) {
        this._exporter = BB, this.name = un, this.enabled = !!BB.options.khrInteractivity, this.required = BB.options.khrInteractivity?.required ?? !1
      }
      dispose() {
        this._exporter = null
      }
      get wasUsed() {
        return this.enabled
      }
      onExporting() {
        var BB, jB, zB;
        const QB = this._exporter.options.khrInteractivity;
        if (!QB) return;
        const nB = QB.build({
          getNodeCount: () => this._exporter._nodes.length,
          getNodeIndex: BB => this._exporter._getNodeIndex(BB),
          getAnimationIndex: BB => this._exporter._getAnimationIndex(BB),
          getCameraIndex: BB => this._exporter._getCameraIndex(BB),
          getMaterialIndex: BB => this._exporter._getMaterialIndex(BB),
          getRootIndex: (BB, jB) => this._exporter._getRootIndex(BB, jB),
          setNodeExtension: (BB, jB, zB) => this._exporter._setNodeExtension(BB, jB, zB)
        });
        this._exporter._glTF.extensions[un] = nB;
        for (const dB of QB.additionalExtensionsUsed)(BB = this._exporter._glTF).extensionsUsed || (BB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(dB) && this._exporter._glTF.extensionsUsed.push(dB);
        for (const dB of QB.additionalExtensionsRequired)(jB = this._exporter._glTF).extensionsUsed || (jB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf(dB) && this._exporter._glTF.extensionsUsed.push(dB), (zB = this._exporter._glTF).extensionsRequired || (zB.extensionsRequired = []), -1 === this._exporter._glTF.extensionsRequired.indexOf(dB) && this._exporter._glTF.extensionsRequired.push(dB)
      }
    }
    let an = !1;

    function pn() {
      an || (an = !0, VQ.RegisterExtension(un, (BB => new Un(BB)), 200))
    }
    pn();
    const rn = "EXT_lights_area",
      sn = {
        name: "",
        color: [1, 1, 1],
        intensity: 1,
        size: 1
      },
      Jn = {
        aspect: 1
      },
      mn = AB.m.Backward();
    class yn {
      constructor(BB) {
        this.name = rn, this.enabled = !0, this.required = !1, this._exporter = BB
      }
      dispose() {
        this._lights = null
      }
      get wasUsed() {
        return !!this._lights
      }
      onExporting() {
        this._exporter._glTF.extensions[rn] = this._lights
      }
      async postExportNodeAsync(BB, jB, zB, QB, nB) {
        return await new Promise((dB => {
          if (!(zB instanceof aQ.b)) return void dB(jB);
          const IB = zB.getTypeID() == aQ.b.LIGHTTYPEID_RECT_AREALIGHT ? "rect" : null;
          if (!IB) return fB.c.Warn(`${BB}: Light ${zB.name} is not supported in ${rn}`), void dB(jB);
          const NB = zB;
          if (NB.falloffType !== aQ.b.FALLOFF_GLTF && fB.c.Warn(`${BB}: Light falloff for ${zB.name} does not match the ${rn} specification!`), !NB.position.YIB(0, 0, 0)) {
            const BB = AB.h.KJ[0].jH(NB.position);
            nB && wz(BB), jB.translation = BB.nQB()
          }
          const uB = AB.m.Forward();
          nB && wz(uB);
          const UB = AB.d.FromUnitVectorsToRef(mn, uB, AB.h.Quaternion[0]);
          AB.d.IsIdentity(UB) || (jB.rotation = UB.nQB());
          const aB = {
            type: IB,
            name: NB.name,
            color: NB.diffuse.nQB(),
            intensity: NB.intensity,
            size: NB.height,
            rect: {
              aspect: NB.width / NB.height
            }
          };
          vz(aB, sn), aB.rect && vz(aB.rect, Jn), this._lights || (this._lights = {
            lights: []
          }), this._lights.lights.push(aB);
          const pB = {
              light: this._lights.lights.length - 1
            },
            rB = zB.parent;
          if (rB && cz(NB, rB)) {
            const BB = QB.get(rB);
            if (BB) {
              const zB = this._exporter._nodes[BB];
              return Cz(jB, zB), zB.extensions || (zB.extensions = {}), zB.extensions[rn] = pB, void dB(null)
            }
          }
          jB.extensions || (jB.extensions = {}), jB.extensions[rn] = pB, dB(jB)
        }))
      }
    }
    let kn = !1;

    function Gn() {
      kn || (kn = !0, VQ.RegisterExtension(rn, (BB => new yn(BB))))
    }
    Gn();
    const Ln = "KHR_materials_anisotropy";
    class gn {
      constructor(BB) {
        this.name = Ln, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._anisoTexturesMap = {}, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Sj) {
          if (zB.anisotropy.isEnabled && !zB.anisotropy.legacy) return zB.anisotropy.texture && QB.push(zB.anisotropy.texture), QB
        } else if (zB instanceof Rj && zB.specularRoughnessAnisotropy > 0) {
          const BB = function(BB) {
            const jB = BB.specularRoughnessAnisotropyTexture,
              zB = BB.geometryTangentTexture;
            return `${jB&&jB.getInternalTexture()?jB.getInternalTexture().uniqueId:"NoStrength"}_${zB&&zB.getInternalTexture()?zB.getInternalTexture().uniqueId:"NoTangent"}`
          }(zB);
          if (this._anisoTexturesMap[BB]) QB.push(this._anisoTexturesMap[BB]);
          else {
            const jB = await async function(BB) {
              const jB = BB.aY(),
                zB = BB.specularRoughnessAnisotropyTexture,
                QB = BB.geometryTangentTexture;
              return zB || QB ? await Iz("AnisotropyTexture", Uz(QB ? Nz(QB, 0) : uz(1), QB ? Nz(QB, 1) : uz(0), zB ? Nz(zB, 0) : uz(1)), jB) : null
            }(zB);
            jB && (QB.push(jB), this._anisoTexturesMap[BB] = jB)
          }
          return QB
        }
        return []
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          var QB;
          if (zB instanceof Sj) {
            if (!zB.anisotropy.isEnabled || zB.anisotropy.legacy) return void BB(jB);
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            const QB = this._exporter._materialExporter.getTextureInfo(zB.anisotropy.texture),
              nB = {
                anisotropyStrength: zB.anisotropy.intensity,
                anisotropyRotation: zB.anisotropy.angle,
                anisotropyTexture: QB ?? void 0
              };
            null !== nB.anisotropyTexture && this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Ln] = nB
          } else if (zB instanceof Rj && zB.specularRoughnessAnisotropy > 0) {
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            let nB = zB.specularRoughnessTexture;
            zB._useRoughnessFromMetallicTextureGreen && (nB = zB.baseMetalnessTexture);
            const dB = this._anisoTexturesMap[zB.id];
            if (!nB && !dB) {
              let QB = zB.specularRoughness,
                nB = zB.specularRoughnessAnisotropy;
              if (!zB._useGltfStyleAnisotropy) {
                const BB = function(BB, jB) {
                  const zB = BB * BB,
                    QB = zB * Math.sqrt(2 / (1 + (1 - jB) * (1 - jB))),
                    nB = (1 - jB) * QB;
                  return {
                    newBaseRoughness: Math.sqrt(nB),
                    newAnisotropyStrength: Math.min(Math.sqrt((QB - zB) / Math.max(1 - zB, 1e-4)), 1)
                  }
                }(zB.specularRoughness, zB.specularRoughnessAnisotropy);
                QB = BB.newBaseRoughness, nB = BB.newAnisotropyStrength
              }
              jB.pbrMetallicRoughness && (jB.pbrMetallicRoughness.roughnessFactor = QB);
              const dB = {
                anisotropyStrength: nB,
                anisotropyRotation: zB.geometryTangentAngle + .5 * Math.PI,
                anisotropyTexture: void 0
              };
              return jB.extensions[Ln] = dB, BB(jB)
            }
            const IB = dB ? this._exporter._materialExporter.getTextureInfo(dB) : null,
              NB = {
                anisotropyStrength: zB.specularRoughnessAnisotropy,
                anisotropyRotation: zB.geometryTangentAngle,
                anisotropyTexture: IB || void 0,
                extensions: {}
              };
            zB._useGltfStyleAnisotropy || (jB.extensions.KHR_materials_openpbr = {}, (QB = this._exporter._glTF).extensionsUsed || (QB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr")), this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Ln] = NB
          }
          BB(jB)
        }))
      }
    }
    let tn = !1;

    function Sn() {
      tn || (tn = !0, VQ.RegisterExtension(Ln, (BB => new gn(BB))))
    }
    Sn();
    const Mn = "KHR_materials_clearcoat";

    function En(BB, jB) {
      const zB = new HB.i(jB.name, jB.aY());
      return zB._texture = BB, zB.coordinatesIndex = jB.coordinatesIndex, jB instanceof HB.i && (zB.uOffset = jB.uOffset, zB.vOffset = jB.vOffset, zB.uScale = jB.uScale, zB.vScale = jB.vScale, zB.wAng = jB.wAng), zB.wrapU = jB.wrapU, zB.wrapV = jB.wrapV, zB
    }
    class qn {
      constructor(BB) {
        this.name = Mn, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Sj) {
          if (zB.clearCoat.isEnabled) return zB.clearCoat.texture && QB.push(zB.clearCoat.texture), !zB.clearCoat.useRoughnessFromMainTexture && zB.clearCoat.textureRoughness && QB.push(zB.clearCoat.textureRoughness), zB.clearCoat.bumpTexture && QB.push(zB.clearCoat.bumpTexture), QB
        } else if (zB instanceof Rj && zB.coatWeight > 0) {
          let BB = !1;
          if (zB.coatWeightTexture ? zB.coatRoughnessTexture ? zB._useCoatRoughnessFromGreenChannel && zB.coatWeightTexture.getInternalTexture() === zB.coatRoughnessTexture.getInternalTexture() ? (QB.push(zB.coatWeightTexture), QB.push(zB.coatRoughnessTexture)) : BB = !0 : QB.push(zB.coatWeightTexture) : zB.coatRoughnessTexture && (zB._useCoatRoughnessFromGreenChannel ? QB.push(zB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const jB = BB.coatWeightTexture,
                zB = jB && jB.getInternalTexture() ? jB.getInternalTexture().uniqueId : "NoCoat",
                QB = BB.coatRoughnessTexture;
              return `${zB}_${QB&&QB.getInternalTexture()?QB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(zB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const jB = await async function(BB) {
                const jB = BB.aY(),
                  zB = BB.coatWeightTexture,
                  QB = BB.coatRoughnessTexture;
                return zB || QB ? (await Iz("CoatTexture", Uz(zB ? Nz(zB, 0) : uz(1), QB ? Nz(QB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : uz(1)), jB)).getInternalTexture() : null
              }(zB);
              jB && (this._cachedInternalTexturesMap[BB] = jB)
            }
            this._cachedInternalTexturesMap[BB] && (zB.coatWeightTexture && (this._mergedTexturesMap[zB.coatWeightTexture.uniqueId] = En(this._cachedInternalTexturesMap[BB], zB.coatWeightTexture), QB.push(this._mergedTexturesMap[zB.coatWeightTexture.uniqueId])), zB.coatRoughnessTexture && (this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId] = En(this._cachedInternalTexturesMap[BB], zB.coatRoughnessTexture), QB.push(this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId])))
          }
          return zB.geometryCoatNormalTexture && QB.push(zB.geometryCoatNormalTexture), QB
        }
        return []
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          if (zB instanceof Sj) {
            if (!zB.clearCoat.isEnabled) return void BB(jB);
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            const QB = this._exporter._materialExporter.getTextureInfo(zB.clearCoat.texture);
            let nB;
            nB = zB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(zB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(zB.clearCoat.textureRoughness), zB.clearCoat.isTintEnabled && Ej.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${zB.name}`), zB.clearCoat.remapF0OnInterfaceChange && Ej.i.Warn(`Clear Color F0 remapping is not supported for glTF export. Ignoring for: ${zB.name}`);
            const dB = this._exporter._materialExporter.getTextureInfo(zB.clearCoat.bumpTexture),
              IB = {
                clearcoatFactor: zB.clearCoat.intensity,
                clearcoatTexture: QB ?? void 0,
                clearcoatRoughnessFactor: zB.clearCoat.roughness,
                clearcoatRoughnessTexture: nB ?? void 0,
                clearcoatNormalTexture: dB ?? void 0
              };
            null === IB.clearcoatTexture && null === IB.clearcoatRoughnessTexture && null === IB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Mn] = IB
          } else if (zB instanceof Rj) {
            if (0 == zB.coatWeight) return void BB(jB);
            let QB, nB, dB, IB;
            this._wasUsed = !0, jB.extensions = jB.extensions || {}, zB.coatWeightTexture && (QB = this._mergedTexturesMap[zB.coatWeightTexture.uniqueId], nB = this._exporter._materialExporter.getTextureInfo(QB)), zB.coatRoughnessTexture && (dB = this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId], IB = this._exporter._materialExporter.getTextureInfo(dB)), zB.coatColorTexture && Ej.i.Warn(`Clear Color tint is not supported for glTF export. Ignoring for: ${zB.name}`);
            const NB = this._exporter._materialExporter.getTextureInfo(zB.geometryCoatNormalTexture),
              uB = {
                clearcoatFactor: zB.coatWeight,
                clearcoatTexture: nB ?? void 0,
                clearcoatRoughnessFactor: zB.coatRoughness,
                clearcoatRoughnessTexture: IB ?? void 0,
                clearcoatNormalTexture: NB ?? void 0
              };
            null === uB.clearcoatTexture && null === uB.clearcoatRoughnessTexture && null === uB.clearcoatRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Mn] = uB
          }
          BB(jB)
        }))
      }
    }
    let fn = !1;

    function Hn() {
      fn || (fn = !0, VQ.RegisterExtension(Mn, (BB => new qn(BB))))
    }
    Hn();
    const Dn = "KHR_materials_coat";

    function Fn(BB) {
      const jB = BB.coatRoughnessAnisotropyTexture,
        zB = BB.geometryCoatTangentTexture;
      return `${jB&&jB.getInternalTexture()?jB.getInternalTexture().uniqueId:"NoStrength"}_${zB&&zB.getInternalTexture()?zB.getInternalTexture().uniqueId:"NoTangent"}`
    }

    function Yn(BB, jB) {
      const zB = new HB.i(jB.name, jB.aY());
      return zB._texture = BB, zB.coordinatesIndex = jB.coordinatesIndex, jB instanceof HB.i && (zB.uOffset = jB.uOffset, zB.vOffset = jB.vOffset, zB.uScale = jB.uScale, zB.vScale = jB.vScale, zB.wAng = jB.wAng), zB.wrapU = jB.wrapU, zB.wrapV = jB.wrapV, zB
    }
    class Vn {
      constructor(BB) {
        this.name = Dn, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Sj) {
          if (zB.clearCoat.isEnabled) return zB.clearCoat.texture && QB.push(zB.clearCoat.texture), !zB.clearCoat.useRoughnessFromMainTexture && zB.clearCoat.textureRoughness && QB.push(zB.clearCoat.textureRoughness), zB.clearCoat.bumpTexture && QB.push(zB.clearCoat.bumpTexture), zB.clearCoat.tintTexture && QB.push(zB.clearCoat.tintTexture), QB
        } else if (zB instanceof Rj && zB.coatWeight > 0) {
          let BB = !1;
          if (zB.coatWeightTexture ? zB.coatRoughnessTexture ? zB._useCoatRoughnessFromGreenChannel && zB.coatWeightTexture.getInternalTexture() === zB.coatRoughnessTexture.getInternalTexture() ? (QB.push(zB.coatWeightTexture), QB.push(zB.coatRoughnessTexture)) : BB = !0 : QB.push(zB.coatWeightTexture) : zB.coatRoughnessTexture && (zB._useCoatRoughnessFromGreenChannel ? QB.push(zB.coatRoughnessTexture) : BB = !0), BB) {
            const BB = function(BB) {
              const jB = BB.coatWeightTexture,
                zB = jB && jB.getInternalTexture() ? jB.getInternalTexture().uniqueId : "NoCoat",
                QB = BB.coatRoughnessTexture;
              return `${zB}_${QB&&QB.getInternalTexture()?QB.getInternalTexture().uniqueId:"NoRoughness"}`
            }(zB);
            if (!this._cachedInternalTexturesMap[BB]) {
              const jB = await async function(BB) {
                const jB = BB.aY(),
                  zB = BB.coatWeightTexture,
                  QB = BB.coatRoughnessTexture;
                return zB || QB ? (await Iz("CoatTexture", Uz(zB ? Nz(zB, 0) : uz(1), QB ? Nz(QB, BB._useCoatRoughnessFromGreenChannel ? 1 : 0) : uz(1)), jB)).getInternalTexture() : null
              }(zB);
              jB && (this._cachedInternalTexturesMap[BB] = jB)
            }
            this._cachedInternalTexturesMap[BB] && (zB.coatWeightTexture && (this._mergedTexturesMap[zB.coatWeightTexture.uniqueId] = Yn(this._cachedInternalTexturesMap[BB], zB.coatWeightTexture), QB.push(this._mergedTexturesMap[zB.coatWeightTexture.uniqueId])), zB.coatRoughnessTexture && (this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId] = Yn(this._cachedInternalTexturesMap[BB], zB.coatRoughnessTexture), QB.push(this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId])))
          }
          if (zB.geometryCoatNormalTexture && QB.push(zB.geometryCoatNormalTexture), zB.coatColorTexture && QB.push(zB.coatColorTexture), zB.coatRoughnessAnisotropy > 0) {
            const BB = Fn(zB);
            if (this._mergedTexturesMap[BB]) QB.push(this._mergedTexturesMap[BB]);
            else {
              const jB = await async function(BB) {
                const jB = BB.aY(),
                  zB = BB.coatRoughnessAnisotropyTexture,
                  QB = BB.geometryCoatTangentTexture;
                return zB || QB ? await Iz("AnisotropyTexture", Uz(QB ? Nz(QB, 0) : uz(1), QB ? Nz(QB, 1) : uz(0), zB ? Nz(zB, 0) : uz(1)), jB) : null
              }(zB);
              jB && (QB.push(jB), this._mergedTexturesMap[BB] = jB)
            }
            return QB
          }
          return QB
        }
        return []
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          var QB;
          if (zB instanceof Sj) {
            if (!zB.clearCoat.isEnabled) return void BB(jB);
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            const QB = this._exporter._materialExporter.getTextureInfo(zB.clearCoat.texture);
            let nB, dB;
            nB = zB.clearCoat.useRoughnessFromMainTexture ? this._exporter._materialExporter.getTextureInfo(zB.clearCoat.texture) : this._exporter._materialExporter.getTextureInfo(zB.clearCoat.textureRoughness), zB.clearCoat.isTintEnabled && (dB = this._exporter._materialExporter.getTextureInfo(zB.clearCoat.tintTexture));
            const IB = this._exporter._materialExporter.getTextureInfo(zB.clearCoat.bumpTexture),
              NB = zB.clearCoat.indexOfRefraction,
              uB = {
                coatFactor: zB.clearCoat.intensity,
                coatTexture: QB ?? void 0,
                coatRoughnessFactor: zB.clearCoat.roughness,
                coatRoughnessTexture: nB ?? void 0,
                coatNormalTexture: IB ?? void 0,
                coatColorFactor: zB.clearCoat.tintColor.nQB(),
                coatColorTexture: dB ?? void 0,
                coatIor: 1.5 !== NB ? NB : void 0
              };
            null === uB.coatTexture && null === uB.coatRoughnessTexture && null === uB.coatRoughnessTexture && null === uB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Dn] = uB
          } else if (zB instanceof Rj) {
            if (0 == zB.coatWeight) return void BB(jB);
            let nB, dB, IB, NB;
            this._wasUsed = !0, jB.extensions = jB.extensions || {}, zB.coatWeightTexture && (nB = this._mergedTexturesMap[zB.coatWeightTexture.uniqueId] ? this._mergedTexturesMap[zB.coatWeightTexture.uniqueId] : zB.coatWeightTexture, dB = this._exporter._materialExporter.getTextureInfo(nB)), zB.coatRoughnessTexture && (IB = this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId] ? this._mergedTexturesMap[zB.coatRoughnessTexture.uniqueId] : zB.coatRoughnessTexture, NB = this._exporter._materialExporter.getTextureInfo(IB));
            const uB = this._exporter._materialExporter.getTextureInfo(zB.geometryCoatNormalTexture),
              UB = this._exporter._materialExporter.getTextureInfo(zB.coatColorTexture),
              aB = zB.coatIor,
              pB = zB.coatDarkening,
              rB = zB.coatRoughnessTexture,
              sB = Fn(zB),
              JB = this._mergedTexturesMap[sB];
            let mB, yB = 0,
              kB = 0;
            if (zB.coatRoughnessAnisotropy > 0) {
              if (rB || JB) {
                const BB = JB ? this._exporter._materialExporter.getTextureInfo(JB) : null;
                yB = zB.coatRoughnessAnisotropy, kB = zB.geometryCoatTangentAngle, mB = BB || void 0
              } else {
                let BB = zB.coatRoughness,
                  QB = zB.coatRoughnessAnisotropy;
                if (!zB._useGltfStyleAnisotropy) {
                  const jB = function(BB, jB) {
                    const zB = BB * BB,
                      QB = zB * Math.sqrt(2 / (1 + (1 - jB) * (1 - jB))),
                      nB = (1 - jB) * QB;
                    return {
                      newBaseRoughness: Math.sqrt(nB),
                      newAnisotropyStrength: Math.min(Math.sqrt((QB - zB) / Math.max(1 - zB, 1e-4)), 1)
                    }
                  }(zB.coatRoughness, zB.coatRoughnessAnisotropy);
                  BB = jB.newBaseRoughness, QB = jB.newAnisotropyStrength
                }
                jB.pbrMetallicRoughness && (jB.pbrMetallicRoughness.roughnessFactor = BB), yB = QB, kB = zB.geometryCoatTangentAngle + .5 * Math.PI, mB = void 0
              }
              zB._useGltfStyleAnisotropy || (jB.extensions.KHR_materials_openpbr = {}, (QB = this._exporter._glTF).extensionsUsed || (QB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("KHR_materials_openpbr") && this._exporter._glTF.extensionsUsed.push("KHR_materials_openpbr"))
            }
            const GB = {
              coatFactor: zB.coatWeight,
              coatTexture: dB ?? void 0,
              coatRoughnessFactor: zB.coatRoughness,
              coatRoughnessTexture: NB ?? void 0,
              coatNormalTexture: uB ?? void 0,
              coatColorFactor: zB.coatColor.nQB(),
              coatColorTexture: UB ?? void 0,
              coatIor: 1.5 !== aB ? aB : void 0,
              coatDarkeningFactor: 1 !== pB ? pB : void 0,
              coatAnisotropyRotation: kB,
              coatAnisotropyStrength: yB,
              coatAnisotropyTexture: mB
            };
            null === GB.coatTexture && null === GB.coatRoughnessTexture && null === GB.coatRoughnessTexture && null === GB.coatAnisotropyTexture && null === GB.coatColorTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Dn] = GB
          }
          BB(jB)
        }))
      }
    }
    let hn = !1;

    function Xn() {
      hn || (hn = !0, VQ.RegisterExtension(Dn, (BB => new Vn(BB))))
    }
    Xn();
    let Zn = (() => {
      var BB, jB, zB, QB, nB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, fB, oB, HB, DB, FB, YB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, KB, CB, cB, bB, vB, RB, OB, Bj, jj, zj, Qj, nj, dj, Ij, Nj, uj, Uj, aj, pj, rj, sj, Jj, mj, yj, kj, Gj, Lj;
      let gj, tj, Ej, ij, qj, fj, oj, Hj, Dj, Fj, Yj, Vj, hj, Xj, Zj, Aj, Tj, Pj, Wj, ej, lj, wj, xj, Kj, Cj, cj, bj, vj, Rj, Oj, Bz, jz, zz, Qz, nz, dz, Iz, Nz, uz, Uz, az, pz, rz, sz, Jz, mz, yz, kz, Gz, Lz, gz, tz, Sz, Mz, Ez, iz, qz, fz, oz, Hz, Dz, Fz, Yz, Vz, hz, Xz, Zz, Az, Tz = Sj,
        Pz = [],
        Wz = [],
        ez = [],
        lz = [],
        wz = [],
        xz = [],
        Kz = [],
        Cz = [],
        cz = [],
        bz = [],
        vz = [],
        Rz = [],
        Oz = [],
        BQ = [],
        jQ = [],
        zQ = [],
        QQ = [],
        nQ = [],
        dQ = [],
        IQ = [],
        NQ = [],
        uQ = [],
        UQ = [],
        aQ = [],
        pQ = [],
        rQ = [],
        sQ = [],
        JQ = [],
        mQ = [],
        yQ = [],
        kQ = [],
        GQ = [],
        LQ = [],
        gQ = [],
        tQ = [],
        SQ = [],
        MQ = [],
        EQ = [],
        iQ = [],
        qQ = [],
        fQ = [],
        oQ = [],
        HQ = [],
        DQ = [],
        FQ = [],
        YQ = [],
        VQ = [],
        hQ = [],
        XQ = [],
        ZQ = [],
        AQ = [],
        TQ = [],
        PQ = [],
        WQ = [],
        eQ = [],
        lQ = [],
        wQ = [],
        xQ = [],
        KQ = [],
        CQ = [],
        cQ = [],
        bQ = [],
        vQ = [],
        RQ = [],
        OQ = [],
        Bn = [],
        jn = [],
        zn = [],
        Qn = [],
        nn = [],
        dn = [],
        In = [],
        Nn = [],
        un = [],
        Un = [],
        an = [],
        pn = [],
        rn = [],
        sn = [],
        Jn = [],
        mn = [],
        yn = [],
        kn = [],
        Gn = [],
        Ln = [],
        gn = [],
        tn = [],
        Sn = [],
        Mn = [],
        En = [],
        qn = [],
        fn = [],
        Hn = [],
        Dn = [],
        Fn = [],
        Yn = [],
        Vn = [],
        hn = [],
        Xn = [],
        Zn = [],
        An = [],
        Tn = [],
        Pn = [],
        Wn = [],
        en = [],
        wn = [],
        xn = [],
        Kn = [],
        Cn = [],
        cn = [],
        bn = [],
        vn = [],
        Rn = [],
        On = [],
        Bd = [],
        jd = [],
        zd = [],
        Qd = [],
        nd = [],
        dd = [],
        Id = [],
        Nd = [],
        ud = [],
        Ud = [],
        pd = [],
        rd = [],
        sd = [],
        Jd = [],
        md = [],
        yd = [],
        kd = [],
        Gd = [],
        Ld = [];
      return BB = class extends Tz {
        get directIntensity() {
          return (0, iB.b)(this, jB, "f")
        }
        set directIntensity(BB) {
          (0, iB.d)(this, jB, BB, "f")
        }
        get emissiveIntensity() {
          return (0, iB.b)(this, zB, "f")
        }
        set emissiveIntensity(BB) {
          (0, iB.d)(this, zB, BB, "f")
        }
        get environmentIntensity() {
          return (0, iB.b)(this, QB, "f")
        }
        set environmentIntensity(BB) {
          (0, iB.d)(this, QB, BB, "f")
        }
        get specularIntensity() {
          return (0, iB.b)(this, nB, "f")
        }
        set specularIntensity(BB) {
          (0, iB.d)(this, nB, BB, "f")
        }
        get disableBumpMap() {
          return (0, iB.b)(this, IB, "f")
        }
        set disableBumpMap(BB) {
          (0, iB.d)(this, IB, BB, "f")
        }
        get albedoTexture() {
          return (0, iB.b)(this, NB, "f")
        }
        set albedoTexture(BB) {
          (0, iB.d)(this, NB, BB, "f")
        }
        get baseWeightTexture() {
          return (0, iB.b)(this, uB, "f")
        }
        set baseWeightTexture(BB) {
          (0, iB.d)(this, uB, BB, "f")
        }
        get baseDiffuseRoughnessTexture() {
          return (0, iB.b)(this, UB, "f")
        }
        set baseDiffuseRoughnessTexture(BB) {
          (0, iB.d)(this, UB, BB, "f")
        }
        get ambientTexture() {
          return (0, iB.b)(this, aB, "f")
        }
        set ambientTexture(BB) {
          (0, iB.d)(this, aB, BB, "f")
        }
        get ambientTextureStrength() {
          return (0, iB.b)(this, pB, "f")
        }
        set ambientTextureStrength(BB) {
          (0, iB.d)(this, pB, BB, "f")
        }
        get ambientTextureImpactOnAnalyticalLights() {
          return (0, iB.b)(this, rB, "f")
        }
        set ambientTextureImpactOnAnalyticalLights(BB) {
          (0, iB.d)(this, rB, BB, "f")
        }
        get opacityTexture() {
          return (0, iB.b)(this, sB, "f")
        }
        set opacityTexture(BB) {
          (0, iB.d)(this, sB, BB, "f")
        }
        get reflectionTexture() {
          return (0, iB.b)(this, JB, "f")
        }
        set reflectionTexture(BB) {
          (0, iB.d)(this, JB, BB, "f")
        }
        get emissiveTexture() {
          return (0, iB.b)(this, mB, "f")
        }
        set emissiveTexture(BB) {
          (0, iB.d)(this, mB, BB, "f")
        }
        get reflectivityTexture() {
          return (0, iB.b)(this, yB, "f")
        }
        set reflectivityTexture(BB) {
          (0, iB.d)(this, yB, BB, "f")
        }
        get metallicTexture() {
          return (0, iB.b)(this, kB, "f")
        }
        set metallicTexture(BB) {
          (0, iB.d)(this, kB, BB, "f")
        }
        get metallic() {
          return (0, iB.b)(this, GB, "f")
        }
        set metallic(BB) {
          (0, iB.d)(this, GB, BB, "f")
        }
        get roughness() {
          return (0, iB.b)(this, LB, "f")
        }
        set roughness(BB) {
          (0, iB.d)(this, LB, BB, "f")
        }
        get metallicF0Factor() {
          return (0, iB.b)(this, gB, "f")
        }
        set metallicF0Factor(BB) {
          (0, iB.d)(this, gB, BB, "f")
        }
        get metallicReflectanceColor() {
          return (0, iB.b)(this, tB, "f")
        }
        set metallicReflectanceColor(BB) {
          (0, iB.d)(this, tB, BB, "f")
        }
        get useOnlyMetallicFromMetallicReflectanceTexture() {
          return (0, iB.b)(this, SB, "f")
        }
        set useOnlyMetallicFromMetallicReflectanceTexture(BB) {
          (0, iB.d)(this, SB, BB, "f")
        }
        get metallicReflectanceTexture() {
          return (0, iB.b)(this, MB, "f")
        }
        set metallicReflectanceTexture(BB) {
          (0, iB.d)(this, MB, BB, "f")
        }
        get reflectanceTexture() {
          return (0, iB.b)(this, EB, "f")
        }
        set reflectanceTexture(BB) {
          (0, iB.d)(this, EB, BB, "f")
        }
        get microSurfaceTexture() {
          return (0, iB.b)(this, fB, "f")
        }
        set microSurfaceTexture(BB) {
          (0, iB.d)(this, fB, BB, "f")
        }
        get bumpTexture() {
          return (0, iB.b)(this, oB, "f")
        }
        set bumpTexture(BB) {
          (0, iB.d)(this, oB, BB, "f")
        }
        get lightmapTexture() {
          return (0, iB.b)(this, HB, "f")
        }
        set lightmapTexture(BB) {
          (0, iB.d)(this, HB, BB, "f")
        }
        get refractionTexture() {
          return this.subSurface.refractionTexture
        }
        set refractionTexture(BB) {
          this.subSurface.refractionTexture = BB, BB ? this.subSurface.isRefractionEnabled = !0 : this.subSurface.linkRefractionWithTransparency || (this.subSurface.isRefractionEnabled = !1)
        }
        get ambientColor() {
          return (0, iB.b)(this, DB, "f")
        }
        set ambientColor(BB) {
          (0, iB.d)(this, DB, BB, "f")
        }
        get albedoColor() {
          return (0, iB.b)(this, FB, "f")
        }
        set albedoColor(BB) {
          (0, iB.d)(this, FB, BB, "f")
        }
        get baseWeight() {
          return (0, iB.b)(this, YB, "f")
        }
        set baseWeight(BB) {
          (0, iB.d)(this, YB, BB, "f")
        }
        get baseDiffuseRoughness() {
          return (0, iB.b)(this, hB, "f")
        }
        set baseDiffuseRoughness(BB) {
          (0, iB.d)(this, hB, BB, "f")
        }
        get reflectivityColor() {
          return (0, iB.b)(this, XB, "f")
        }
        set reflectivityColor(BB) {
          (0, iB.d)(this, XB, BB, "f")
        }
        get reflectionColor() {
          return (0, iB.b)(this, ZB, "f")
        }
        set reflectionColor(BB) {
          (0, iB.d)(this, ZB, BB, "f")
        }
        get emissiveColor() {
          return (0, iB.b)(this, AB, "f")
        }
        set emissiveColor(BB) {
          (0, iB.d)(this, AB, BB, "f")
        }
        get microSurface() {
          return (0, iB.b)(this, TB, "f")
        }
        set microSurface(BB) {
          (0, iB.d)(this, TB, BB, "f")
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
          return (0, iB.b)(this, PB, "f")
        }
        set useLightmapAsShadowmap(BB) {
          (0, iB.d)(this, PB, BB, "f")
        }
        get useAlphaFromAlbedoTexture() {
          return (0, iB.b)(this, WB, "f")
        }
        set useAlphaFromAlbedoTexture(BB) {
          (0, iB.d)(this, WB, BB, "f")
        }
        get forceAlphaTest() {
          return (0, iB.b)(this, eB, "f")
        }
        set forceAlphaTest(BB) {
          (0, iB.d)(this, eB, BB, "f")
        }
        get alphaCutOff() {
          return (0, iB.b)(this, lB, "f")
        }
        set alphaCutOff(BB) {
          (0, iB.d)(this, lB, BB, "f")
        }
        get useSpecularOverAlpha() {
          return (0, iB.b)(this, wB, "f")
        }
        set useSpecularOverAlpha(BB) {
          (0, iB.d)(this, wB, BB, "f")
        }
        get useMicroSurfaceFromReflectivityMapAlpha() {
          return (0, iB.b)(this, KB, "f")
        }
        set useMicroSurfaceFromReflectivityMapAlpha(BB) {
          (0, iB.d)(this, KB, BB, "f")
        }
        get useRoughnessFromMetallicTextureAlpha() {
          return (0, iB.b)(this, CB, "f")
        }
        set useRoughnessFromMetallicTextureAlpha(BB) {
          (0, iB.d)(this, CB, BB, "f")
        }
        get useRoughnessFromMetallicTextureGreen() {
          return (0, iB.b)(this, cB, "f")
        }
        set useRoughnessFromMetallicTextureGreen(BB) {
          (0, iB.d)(this, cB, BB, "f")
        }
        get useMetallnessFromMetallicTextureBlue() {
          return (0, iB.b)(this, bB, "f")
        }
        set useMetallnessFromMetallicTextureBlue(BB) {
          (0, iB.d)(this, bB, BB, "f")
        }
        get useAmbientOcclusionFromMetallicTextureRed() {
          return (0, iB.b)(this, vB, "f")
        }
        set useAmbientOcclusionFromMetallicTextureRed(BB) {
          (0, iB.d)(this, vB, BB, "f")
        }
        get useAmbientInGrayScale() {
          return (0, iB.b)(this, RB, "f")
        }
        set useAmbientInGrayScale(BB) {
          (0, iB.d)(this, RB, BB, "f")
        }
        get useAutoMicroSurfaceFromReflectivityMap() {
          return (0, iB.b)(this, OB, "f")
        }
        set useAutoMicroSurfaceFromReflectivityMap(BB) {
          (0, iB.d)(this, OB, BB, "f")
        }
        get usePhysicalLightFalloff() {
          return this._lightFalloff === Sj.LIGHTFALLOFF_PHYSICAL
        }
        set usePhysicalLightFalloff(BB) {
          BB !== this.usePhysicalLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? Sj.LIGHTFALLOFF_PHYSICAL : Sj.LIGHTFALLOFF_STANDARD)
        }
        get useGLTFLightFalloff() {
          return this._lightFalloff === Sj.LIGHTFALLOFF_GLTF
        }
        set useGLTFLightFalloff(BB) {
          BB !== this.useGLTFLightFalloff && (this._markAllSubMeshesAsTexturesDirty(), this._lightFalloff = BB ? Sj.LIGHTFALLOFF_GLTF : Sj.LIGHTFALLOFF_STANDARD)
        }
        get useRadianceOverAlpha() {
          return (0, iB.b)(this, Bj, "f")
        }
        set useRadianceOverAlpha(BB) {
          (0, iB.d)(this, Bj, BB, "f")
        }
        get useObjectSpaceNormalMap() {
          return (0, iB.b)(this, jj, "f")
        }
        set useObjectSpaceNormalMap(BB) {
          (0, iB.d)(this, jj, BB, "f")
        }
        get useParallax() {
          return (0, iB.b)(this, zj, "f")
        }
        set useParallax(BB) {
          (0, iB.d)(this, zj, BB, "f")
        }
        get useParallaxOcclusion() {
          return (0, iB.b)(this, Qj, "f")
        }
        set useParallaxOcclusion(BB) {
          (0, iB.d)(this, Qj, BB, "f")
        }
        get parallaxScaleBias() {
          return (0, iB.b)(this, nj, "f")
        }
        set parallaxScaleBias(BB) {
          (0, iB.d)(this, nj, BB, "f")
        }
        get disableLighting() {
          return (0, iB.b)(this, dj, "f")
        }
        set disableLighting(BB) {
          (0, iB.d)(this, dj, BB, "f")
        }
        get forceIrradianceInFragment() {
          return (0, iB.b)(this, Ij, "f")
        }
        set forceIrradianceInFragment(BB) {
          (0, iB.d)(this, Ij, BB, "f")
        }
        get maxSimultaneousLights() {
          return (0, iB.b)(this, Nj, "f")
        }
        set maxSimultaneousLights(BB) {
          (0, iB.d)(this, Nj, BB, "f")
        }
        get invertNormalMapX() {
          return (0, iB.b)(this, uj, "f")
        }
        set invertNormalMapX(BB) {
          (0, iB.d)(this, uj, BB, "f")
        }
        get invertNormalMapY() {
          return (0, iB.b)(this, Uj, "f")
        }
        set invertNormalMapY(BB) {
          (0, iB.d)(this, Uj, BB, "f")
        }
        get twoSidedLighting() {
          return (0, iB.b)(this, aj, "f")
        }
        set twoSidedLighting(BB) {
          (0, iB.d)(this, aj, BB, "f")
        }
        get useAlphaFresnel() {
          return (0, iB.b)(this, pj, "f")
        }
        set useAlphaFresnel(BB) {
          (0, iB.d)(this, pj, BB, "f")
        }
        get useLinearAlphaFresnel() {
          return (0, iB.b)(this, rj, "f")
        }
        set useLinearAlphaFresnel(BB) {
          (0, iB.d)(this, rj, BB, "f")
        }
        get environmentBRDFTexture() {
          return (0, iB.b)(this, sj, "f")
        }
        set environmentBRDFTexture(BB) {
          (0, iB.d)(this, sj, BB, "f")
        }
        get forceNormalForward() {
          return (0, iB.b)(this, Jj, "f")
        }
        set forceNormalForward(BB) {
          (0, iB.d)(this, Jj, BB, "f")
        }
        get enableSpecularAntiAliasing() {
          return (0, iB.b)(this, mj, "f")
        }
        set enableSpecularAntiAliasing(BB) {
          (0, iB.d)(this, mj, BB, "f")
        }
        get useHorizonOcclusion() {
          return (0, iB.b)(this, yj, "f")
        }
        set useHorizonOcclusion(BB) {
          (0, iB.d)(this, yj, BB, "f")
        }
        get useRadianceOcclusion() {
          return (0, iB.b)(this, kj, "f")
        }
        set useRadianceOcclusion(BB) {
          (0, iB.d)(this, kj, BB, "f")
        }
        get unlit() {
          return (0, iB.b)(this, Gj, "f")
        }
        set unlit(BB) {
          (0, iB.d)(this, Gj, BB, "f")
        }
        get applyDecalMapAfterDetailMap() {
          return (0, iB.b)(this, Lj, "f")
        }
        set applyDecalMapAfterDetailMap(BB) {
          (0, iB.d)(this, Lj, BB, "f")
        }
        constructor(dB, qB) {
          super(dB, qB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2]), jB.set(this, ((0, iB.g)(this, Pz), (0, iB.g)(this, Wz, 1))), zB.set(this, ((0, iB.g)(this, ez), (0, iB.g)(this, lz, 1))), QB.set(this, ((0, iB.g)(this, wz), (0, iB.g)(this, xz, 1))), nB.set(this, ((0, iB.g)(this, Kz), (0, iB.g)(this, Cz, 1))), IB.set(this, ((0, iB.g)(this, cz), (0, iB.g)(this, bz, !1))), NB.set(this, ((0, iB.g)(this, vz), (0, iB.g)(this, Rz, void 0))), uB.set(this, ((0, iB.g)(this, Oz), (0, iB.g)(this, BQ, void 0))), UB.set(this, ((0, iB.g)(this, jQ), (0, iB.g)(this, zQ, void 0))), aB.set(this, ((0, iB.g)(this, QQ), (0, iB.g)(this, nQ, void 0))), pB.set(this, ((0, iB.g)(this, dQ), (0, iB.g)(this, IQ, 1))), rB.set(this, ((0, iB.g)(this, NQ), (0, iB.g)(this, uQ, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS))), sB.set(this, ((0, iB.g)(this, UQ), (0, iB.g)(this, aQ, void 0))), JB.set(this, ((0, iB.g)(this, pQ), (0, iB.g)(this, rQ, void 0))), mB.set(this, ((0, iB.g)(this, sQ), (0, iB.g)(this, JQ, void 0))), yB.set(this, ((0, iB.g)(this, mQ), (0, iB.g)(this, yQ, void 0))), kB.set(this, ((0, iB.g)(this, kQ), (0, iB.g)(this, GQ, void 0))), GB.set(this, ((0, iB.g)(this, LQ), (0, iB.g)(this, gQ, void 0))), LB.set(this, ((0, iB.g)(this, tQ), (0, iB.g)(this, SQ, void 0))), gB.set(this, ((0, iB.g)(this, MQ), (0, iB.g)(this, EQ, 1))), tB.set(this, ((0, iB.g)(this, iQ), (0, iB.g)(this, qQ, xB.d.White()))), SB.set(this, ((0, iB.g)(this, fQ), (0, iB.g)(this, oQ, !1))), MB.set(this, ((0, iB.g)(this, HQ), (0, iB.g)(this, DQ, void 0))), EB.set(this, ((0, iB.g)(this, FQ), (0, iB.g)(this, YQ, void 0))), fB.set(this, ((0, iB.g)(this, VQ), (0, iB.g)(this, hQ, void 0))), oB.set(this, ((0, iB.g)(this, XQ), (0, iB.g)(this, ZQ, void 0))), HB.set(this, ((0, iB.g)(this, AQ), (0, iB.g)(this, TQ, void 0))), DB.set(this, ((0, iB.g)(this, PQ), (0, iB.g)(this, WQ, new xB.d(0, 0, 0)))), FB.set(this, ((0, iB.g)(this, eQ), (0, iB.g)(this, lQ, new xB.d(1, 1, 1)))), YB.set(this, ((0, iB.g)(this, wQ), (0, iB.g)(this, xQ, 1))), hB.set(this, ((0, iB.g)(this, KQ), (0, iB.g)(this, CQ, void 0))), XB.set(this, ((0, iB.g)(this, cQ), (0, iB.g)(this, bQ, new xB.d(1, 1, 1)))), ZB.set(this, ((0, iB.g)(this, vQ), (0, iB.g)(this, RQ, new xB.d(1, 1, 1)))), AB.set(this, ((0, iB.g)(this, OQ), (0, iB.g)(this, Bn, new xB.d(0, 0, 0)))), TB.set(this, ((0, iB.g)(this, jn), (0, iB.g)(this, zn, 1))), PB.set(this, ((0, iB.g)(this, Qn), (0, iB.g)(this, nn, !1))), WB.set(this, ((0, iB.g)(this, dn), (0, iB.g)(this, In, !1))), eB.set(this, ((0, iB.g)(this, Nn), (0, iB.g)(this, un, !1))), lB.set(this, ((0, iB.g)(this, Un), (0, iB.g)(this, an, .4))), wB.set(this, ((0, iB.g)(this, pn), (0, iB.g)(this, rn, !0))), KB.set(this, ((0, iB.g)(this, sn), (0, iB.g)(this, Jn, !1))), CB.set(this, ((0, iB.g)(this, mn), (0, iB.g)(this, yn, !0))), cB.set(this, ((0, iB.g)(this, kn), (0, iB.g)(this, Gn, !1))), bB.set(this, ((0, iB.g)(this, Ln), (0, iB.g)(this, gn, !1))), vB.set(this, ((0, iB.g)(this, tn), (0, iB.g)(this, Sn, !1))), RB.set(this, ((0, iB.g)(this, Mn), (0, iB.g)(this, En, !1))), OB.set(this, ((0, iB.g)(this, qn), (0, iB.g)(this, fn, !1))), Bj.set(this, ((0, iB.g)(this, Hn), (0, iB.g)(this, Dn, !0))), jj.set(this, ((0, iB.g)(this, Fn), (0, iB.g)(this, Yn, !1))), zj.set(this, ((0, iB.g)(this, Vn), (0, iB.g)(this, hn, !1))), Qj.set(this, ((0, iB.g)(this, Xn), (0, iB.g)(this, Zn, !1))), nj.set(this, ((0, iB.g)(this, An), (0, iB.g)(this, Tn, .05))), dj.set(this, ((0, iB.g)(this, Pn), (0, iB.g)(this, Wn, !1))), Ij.set(this, ((0, iB.g)(this, en), (0, iB.g)(this, wn, !1))), Nj.set(this, ((0, iB.g)(this, xn), (0, iB.g)(this, Kn, 4))), uj.set(this, ((0, iB.g)(this, Cn), (0, iB.g)(this, cn, !1))), Uj.set(this, ((0, iB.g)(this, bn), (0, iB.g)(this, vn, !1))), aj.set(this, ((0, iB.g)(this, Rn), (0, iB.g)(this, On, !1))), pj.set(this, ((0, iB.g)(this, Bd), (0, iB.g)(this, jd, !1))), rj.set(this, ((0, iB.g)(this, zd), (0, iB.g)(this, Qd, !1))), sj.set(this, ((0, iB.g)(this, nd), (0, iB.g)(this, dd, null))), Jj.set(this, ((0, iB.g)(this, Id), (0, iB.g)(this, Nd, !1))), mj.set(this, ((0, iB.g)(this, ud), (0, iB.g)(this, Ud, !1))), yj.set(this, ((0, iB.g)(this, pd), (0, iB.g)(this, rd, !0))), kj.set(this, ((0, iB.g)(this, sd), (0, iB.g)(this, Jd, !0))), Gj.set(this, ((0, iB.g)(this, md), (0, iB.g)(this, yd, !1))), Lj.set(this, ((0, iB.g)(this, kd), (0, iB.g)(this, Gd, !1))), (0, iB.g)(this, Ld), this._environmentBRDFTexture = VB(this.aY())
        }
        getClassName() {
          return "PBRMaterial"
        }
        clone(jB) {
          let zB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const nB = Mj.b.Clone((() => new BB(jB, this.aY())), this, {
            cloneTexturesOnlyOnce: zB
          });
          return nB.id = jB, nB.name = jB, this.stencil.copyTo(nB.stencil), this._clonePlugins(nB, QB), nB
        }
        serialize() {
          const BB = super.serialize();
          return BB.customType = "BABYLON.PBRMaterial", BB
        }
        static Parse(jB, zB, QB) {
          const nB = Mj.b.Parse((() => new BB(jB.name, zB)), jB, zB, QB);
          return jB.stencil && nB.stencil.parse(jB.stencil, zB, QB), dB.b._ParsePlugins(jB, nB, zB, QB), jB.clearCoat && nB.clearCoat.parse(jB.clearCoat, zB, QB), jB.anisotropy && nB.anisotropy.parse(jB.anisotropy, zB, QB), jB.brdf && nB.brdf.parse(jB.brdf, zB, QB), jB.sheen && nB.sheen.parse(jB.sheen, zB, QB), jB.subSurface && nB.subSurface.parse(jB.subSurface, zB, QB), jB.iridescence && nB.iridescence.parse(jB.iridescence, zB, QB), nB
        }
      }, jB = new WeakMap, zB = new WeakMap, QB = new WeakMap, nB = new WeakMap, IB = new WeakMap, NB = new WeakMap, uB = new WeakMap, UB = new WeakMap, aB = new WeakMap, pB = new WeakMap, rB = new WeakMap, sB = new WeakMap, JB = new WeakMap, mB = new WeakMap, yB = new WeakMap, kB = new WeakMap, GB = new WeakMap, LB = new WeakMap, gB = new WeakMap, tB = new WeakMap, SB = new WeakMap, MB = new WeakMap, EB = new WeakMap, fB = new WeakMap, oB = new WeakMap, HB = new WeakMap, DB = new WeakMap, FB = new WeakMap, YB = new WeakMap, hB = new WeakMap, XB = new WeakMap, ZB = new WeakMap, AB = new WeakMap, TB = new WeakMap, PB = new WeakMap, WB = new WeakMap, eB = new WeakMap, lB = new WeakMap, wB = new WeakMap, KB = new WeakMap, CB = new WeakMap, cB = new WeakMap, bB = new WeakMap, vB = new WeakMap, RB = new WeakMap, OB = new WeakMap, Bj = new WeakMap, jj = new WeakMap, zj = new WeakMap, Qj = new WeakMap, nj = new WeakMap, dj = new WeakMap, Ij = new WeakMap, Nj = new WeakMap, uj = new WeakMap, Uj = new WeakMap, aj = new WeakMap, pj = new WeakMap, rj = new WeakMap, sj = new WeakMap, Jj = new WeakMap, mj = new WeakMap, yj = new WeakMap, kj = new WeakMap, Gj = new WeakMap, Lj = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(Tz[Symbol.metadata] ?? null) : void 0;
        gj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], tj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Ej = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], ij = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], qj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], fj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], oj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Hj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Dj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Fj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Yj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Vj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], hj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Xj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Zj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Aj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Tj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Pj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Wj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], ej = [(0, qB.i)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], lj = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], wj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], xj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Kj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Cj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], cj = [(0, qB.v)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty", null)], bj = [(0, qB.i)("ambient"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], vj = [(0, qB.i)("albedo"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Rj = [(0, qB.A)("baseWeight"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Oj = [(0, qB.A)("baseDiffuseRoughness"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, qB.i)("reflectivity"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, qB.i)("reflection"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], zz = [(0, qB.i)("emissive"), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Qz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], nz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Iz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Nz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], uz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], az = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], pz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], sz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Jz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, qB.A)()], kz = [(0, qB.A)()], Gz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Lz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], gz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Mz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsLightsDirty")], Ez = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], iz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsLightsDirty")], qz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], oz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Hz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Fz = [(0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Yz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Vz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], hz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], Az = [(0, qB.A)(), (0, qB.e)("_markAllSubMeshesAsMiscDirty")], (0, iB.e)(BB, null, gj, {
          kind: "accessor",
          name: "directIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "directIntensity" in BB,
            get: BB => BB.directIntensity,
            set: (BB, jB) => {
              BB.directIntensity = jB
            }
          },
          metadata: jB
        }, Wz, ez), (0, iB.e)(BB, null, tj, {
          kind: "accessor",
          name: "emissiveIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveIntensity" in BB,
            get: BB => BB.emissiveIntensity,
            set: (BB, jB) => {
              BB.emissiveIntensity = jB
            }
          },
          metadata: jB
        }, lz, wz), (0, iB.e)(BB, null, Ej, {
          kind: "accessor",
          name: "environmentIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentIntensity" in BB,
            get: BB => BB.environmentIntensity,
            set: (BB, jB) => {
              BB.environmentIntensity = jB
            }
          },
          metadata: jB
        }, xz, Kz), (0, iB.e)(BB, null, ij, {
          kind: "accessor",
          name: "specularIntensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "specularIntensity" in BB,
            get: BB => BB.specularIntensity,
            set: (BB, jB) => {
              BB.specularIntensity = jB
            }
          },
          metadata: jB
        }, Cz, cz), (0, iB.e)(BB, null, qj, {
          kind: "accessor",
          name: "disableBumpMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableBumpMap" in BB,
            get: BB => BB.disableBumpMap,
            set: (BB, jB) => {
              BB.disableBumpMap = jB
            }
          },
          metadata: jB
        }, bz, vz), (0, iB.e)(BB, null, fj, {
          kind: "accessor",
          name: "albedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoTexture" in BB,
            get: BB => BB.albedoTexture,
            set: (BB, jB) => {
              BB.albedoTexture = jB
            }
          },
          metadata: jB
        }, Rz, Oz), (0, iB.e)(BB, null, oj, {
          kind: "accessor",
          name: "baseWeightTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeightTexture" in BB,
            get: BB => BB.baseWeightTexture,
            set: (BB, jB) => {
              BB.baseWeightTexture = jB
            }
          },
          metadata: jB
        }, BQ, jQ), (0, iB.e)(BB, null, Hj, {
          kind: "accessor",
          name: "baseDiffuseRoughnessTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughnessTexture" in BB,
            get: BB => BB.baseDiffuseRoughnessTexture,
            set: (BB, jB) => {
              BB.baseDiffuseRoughnessTexture = jB
            }
          },
          metadata: jB
        }, zQ, QQ), (0, iB.e)(BB, null, Dj, {
          kind: "accessor",
          name: "ambientTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTexture" in BB,
            get: BB => BB.ambientTexture,
            set: (BB, jB) => {
              BB.ambientTexture = jB
            }
          },
          metadata: jB
        }, nQ, dQ), (0, iB.e)(BB, null, Fj, {
          kind: "accessor",
          name: "ambientTextureStrength",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureStrength" in BB,
            get: BB => BB.ambientTextureStrength,
            set: (BB, jB) => {
              BB.ambientTextureStrength = jB
            }
          },
          metadata: jB
        }, IQ, NQ), (0, iB.e)(BB, null, Yj, {
          kind: "accessor",
          name: "ambientTextureImpactOnAnalyticalLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientTextureImpactOnAnalyticalLights" in BB,
            get: BB => BB.ambientTextureImpactOnAnalyticalLights,
            set: (BB, jB) => {
              BB.ambientTextureImpactOnAnalyticalLights = jB
            }
          },
          metadata: jB
        }, uQ, UQ), (0, iB.e)(BB, null, Vj, {
          kind: "accessor",
          name: "opacityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "opacityTexture" in BB,
            get: BB => BB.opacityTexture,
            set: (BB, jB) => {
              BB.opacityTexture = jB
            }
          },
          metadata: jB
        }, aQ, pQ), (0, iB.e)(BB, null, hj, {
          kind: "accessor",
          name: "reflectionTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionTexture" in BB,
            get: BB => BB.reflectionTexture,
            set: (BB, jB) => {
              BB.reflectionTexture = jB
            }
          },
          metadata: jB
        }, rQ, sQ), (0, iB.e)(BB, null, Xj, {
          kind: "accessor",
          name: "emissiveTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveTexture" in BB,
            get: BB => BB.emissiveTexture,
            set: (BB, jB) => {
              BB.emissiveTexture = jB
            }
          },
          metadata: jB
        }, JQ, mQ), (0, iB.e)(BB, null, Zj, {
          kind: "accessor",
          name: "reflectivityTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityTexture" in BB,
            get: BB => BB.reflectivityTexture,
            set: (BB, jB) => {
              BB.reflectivityTexture = jB
            }
          },
          metadata: jB
        }, yQ, kQ), (0, iB.e)(BB, null, Aj, {
          kind: "accessor",
          name: "metallicTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicTexture" in BB,
            get: BB => BB.metallicTexture,
            set: (BB, jB) => {
              BB.metallicTexture = jB
            }
          },
          metadata: jB
        }, GQ, LQ), (0, iB.e)(BB, null, Tj, {
          kind: "accessor",
          name: "metallic",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallic" in BB,
            get: BB => BB.metallic,
            set: (BB, jB) => {
              BB.metallic = jB
            }
          },
          metadata: jB
        }, gQ, tQ), (0, iB.e)(BB, null, Pj, {
          kind: "accessor",
          name: "roughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughness" in BB,
            get: BB => BB.roughness,
            set: (BB, jB) => {
              BB.roughness = jB
            }
          },
          metadata: jB
        }, SQ, MQ), (0, iB.e)(BB, null, Wj, {
          kind: "accessor",
          name: "metallicF0Factor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicF0Factor" in BB,
            get: BB => BB.metallicF0Factor,
            set: (BB, jB) => {
              BB.metallicF0Factor = jB
            }
          },
          metadata: jB
        }, EQ, iQ), (0, iB.e)(BB, null, ej, {
          kind: "accessor",
          name: "metallicReflectanceColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceColor" in BB,
            get: BB => BB.metallicReflectanceColor,
            set: (BB, jB) => {
              BB.metallicReflectanceColor = jB
            }
          },
          metadata: jB
        }, qQ, fQ), (0, iB.e)(BB, null, lj, {
          kind: "accessor",
          name: "useOnlyMetallicFromMetallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useOnlyMetallicFromMetallicReflectanceTexture" in BB,
            get: BB => BB.useOnlyMetallicFromMetallicReflectanceTexture,
            set: (BB, jB) => {
              BB.useOnlyMetallicFromMetallicReflectanceTexture = jB
            }
          },
          metadata: jB
        }, oQ, HQ), (0, iB.e)(BB, null, wj, {
          kind: "accessor",
          name: "metallicReflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "metallicReflectanceTexture" in BB,
            get: BB => BB.metallicReflectanceTexture,
            set: (BB, jB) => {
              BB.metallicReflectanceTexture = jB
            }
          },
          metadata: jB
        }, DQ, FQ), (0, iB.e)(BB, null, xj, {
          kind: "accessor",
          name: "reflectanceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectanceTexture" in BB,
            get: BB => BB.reflectanceTexture,
            set: (BB, jB) => {
              BB.reflectanceTexture = jB
            }
          },
          metadata: jB
        }, YQ, VQ), (0, iB.e)(BB, null, Kj, {
          kind: "accessor",
          name: "microSurfaceTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurfaceTexture" in BB,
            get: BB => BB.microSurfaceTexture,
            set: (BB, jB) => {
              BB.microSurfaceTexture = jB
            }
          },
          metadata: jB
        }, hQ, XQ), (0, iB.e)(BB, null, Cj, {
          kind: "accessor",
          name: "bumpTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpTexture" in BB,
            get: BB => BB.bumpTexture,
            set: (BB, jB) => {
              BB.bumpTexture = jB
            }
          },
          metadata: jB
        }, ZQ, AQ), (0, iB.e)(BB, null, cj, {
          kind: "accessor",
          name: "lightmapTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "lightmapTexture" in BB,
            get: BB => BB.lightmapTexture,
            set: (BB, jB) => {
              BB.lightmapTexture = jB
            }
          },
          metadata: jB
        }, TQ, PQ), (0, iB.e)(BB, null, bj, {
          kind: "accessor",
          name: "ambientColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "ambientColor" in BB,
            get: BB => BB.ambientColor,
            set: (BB, jB) => {
              BB.ambientColor = jB
            }
          },
          metadata: jB
        }, WQ, eQ), (0, iB.e)(BB, null, vj, {
          kind: "accessor",
          name: "albedoColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "albedoColor" in BB,
            get: BB => BB.albedoColor,
            set: (BB, jB) => {
              BB.albedoColor = jB
            }
          },
          metadata: jB
        }, lQ, wQ), (0, iB.e)(BB, null, Rj, {
          kind: "accessor",
          name: "baseWeight",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseWeight" in BB,
            get: BB => BB.baseWeight,
            set: (BB, jB) => {
              BB.baseWeight = jB
            }
          },
          metadata: jB
        }, xQ, KQ), (0, iB.e)(BB, null, Oj, {
          kind: "accessor",
          name: "baseDiffuseRoughness",
          static: !1,
          private: !1,
          access: {
            has: BB => "baseDiffuseRoughness" in BB,
            get: BB => BB.baseDiffuseRoughness,
            set: (BB, jB) => {
              BB.baseDiffuseRoughness = jB
            }
          },
          metadata: jB
        }, CQ, cQ), (0, iB.e)(BB, null, Bz, {
          kind: "accessor",
          name: "reflectivityColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectivityColor" in BB,
            get: BB => BB.reflectivityColor,
            set: (BB, jB) => {
              BB.reflectivityColor = jB
            }
          },
          metadata: jB
        }, bQ, vQ), (0, iB.e)(BB, null, jz, {
          kind: "accessor",
          name: "reflectionColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "reflectionColor" in BB,
            get: BB => BB.reflectionColor,
            set: (BB, jB) => {
              BB.reflectionColor = jB
            }
          },
          metadata: jB
        }, RQ, OQ), (0, iB.e)(BB, null, zz, {
          kind: "accessor",
          name: "emissiveColor",
          static: !1,
          private: !1,
          access: {
            has: BB => "emissiveColor" in BB,
            get: BB => BB.emissiveColor,
            set: (BB, jB) => {
              BB.emissiveColor = jB
            }
          },
          metadata: jB
        }, Bn, jn), (0, iB.e)(BB, null, Qz, {
          kind: "accessor",
          name: "microSurface",
          static: !1,
          private: !1,
          access: {
            has: BB => "microSurface" in BB,
            get: BB => BB.microSurface,
            set: (BB, jB) => {
              BB.microSurface = jB
            }
          },
          metadata: jB
        }, zn, Qn), (0, iB.e)(BB, null, nz, {
          kind: "accessor",
          name: "useLightmapAsShadowmap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLightmapAsShadowmap" in BB,
            get: BB => BB.useLightmapAsShadowmap,
            set: (BB, jB) => {
              BB.useLightmapAsShadowmap = jB
            }
          },
          metadata: jB
        }, nn, dn), (0, iB.e)(BB, null, dz, {
          kind: "accessor",
          name: "useAlphaFromAlbedoTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFromAlbedoTexture" in BB,
            get: BB => BB.useAlphaFromAlbedoTexture,
            set: (BB, jB) => {
              BB.useAlphaFromAlbedoTexture = jB
            }
          },
          metadata: jB
        }, In, Nn), (0, iB.e)(BB, null, Iz, {
          kind: "accessor",
          name: "forceAlphaTest",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceAlphaTest" in BB,
            get: BB => BB.forceAlphaTest,
            set: (BB, jB) => {
              BB.forceAlphaTest = jB
            }
          },
          metadata: jB
        }, un, Un), (0, iB.e)(BB, null, Nz, {
          kind: "accessor",
          name: "alphaCutOff",
          static: !1,
          private: !1,
          access: {
            has: BB => "alphaCutOff" in BB,
            get: BB => BB.alphaCutOff,
            set: (BB, jB) => {
              BB.alphaCutOff = jB
            }
          },
          metadata: jB
        }, an, pn), (0, iB.e)(BB, null, uz, {
          kind: "accessor",
          name: "useSpecularOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useSpecularOverAlpha" in BB,
            get: BB => BB.useSpecularOverAlpha,
            set: (BB, jB) => {
              BB.useSpecularOverAlpha = jB
            }
          },
          metadata: jB
        }, rn, sn), (0, iB.e)(BB, null, Uz, {
          kind: "accessor",
          name: "useMicroSurfaceFromReflectivityMapAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMicroSurfaceFromReflectivityMapAlpha" in BB,
            get: BB => BB.useMicroSurfaceFromReflectivityMapAlpha,
            set: (BB, jB) => {
              BB.useMicroSurfaceFromReflectivityMapAlpha = jB
            }
          },
          metadata: jB
        }, Jn, mn), (0, iB.e)(BB, null, az, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureAlpha" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureAlpha,
            set: (BB, jB) => {
              BB.useRoughnessFromMetallicTextureAlpha = jB
            }
          },
          metadata: jB
        }, yn, kn), (0, iB.e)(BB, null, pz, {
          kind: "accessor",
          name: "useRoughnessFromMetallicTextureGreen",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRoughnessFromMetallicTextureGreen" in BB,
            get: BB => BB.useRoughnessFromMetallicTextureGreen,
            set: (BB, jB) => {
              BB.useRoughnessFromMetallicTextureGreen = jB
            }
          },
          metadata: jB
        }, Gn, Ln), (0, iB.e)(BB, null, rz, {
          kind: "accessor",
          name: "useMetallnessFromMetallicTextureBlue",
          static: !1,
          private: !1,
          access: {
            has: BB => "useMetallnessFromMetallicTextureBlue" in BB,
            get: BB => BB.useMetallnessFromMetallicTextureBlue,
            set: (BB, jB) => {
              BB.useMetallnessFromMetallicTextureBlue = jB
            }
          },
          metadata: jB
        }, gn, tn), (0, iB.e)(BB, null, sz, {
          kind: "accessor",
          name: "useAmbientOcclusionFromMetallicTextureRed",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientOcclusionFromMetallicTextureRed" in BB,
            get: BB => BB.useAmbientOcclusionFromMetallicTextureRed,
            set: (BB, jB) => {
              BB.useAmbientOcclusionFromMetallicTextureRed = jB
            }
          },
          metadata: jB
        }, Sn, Mn), (0, iB.e)(BB, null, Jz, {
          kind: "accessor",
          name: "useAmbientInGrayScale",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAmbientInGrayScale" in BB,
            get: BB => BB.useAmbientInGrayScale,
            set: (BB, jB) => {
              BB.useAmbientInGrayScale = jB
            }
          },
          metadata: jB
        }, En, qn), (0, iB.e)(BB, null, mz, {
          kind: "accessor",
          name: "useAutoMicroSurfaceFromReflectivityMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAutoMicroSurfaceFromReflectivityMap" in BB,
            get: BB => BB.useAutoMicroSurfaceFromReflectivityMap,
            set: (BB, jB) => {
              BB.useAutoMicroSurfaceFromReflectivityMap = jB
            }
          },
          metadata: jB
        }, fn, Hn), (0, iB.e)(BB, null, yz, {
          kind: "getter",
          name: "usePhysicalLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "usePhysicalLightFalloff" in BB,
            get: BB => BB.usePhysicalLightFalloff
          },
          metadata: jB
        }, null, Pz), (0, iB.e)(BB, null, kz, {
          kind: "getter",
          name: "useGLTFLightFalloff",
          static: !1,
          private: !1,
          access: {
            has: BB => "useGLTFLightFalloff" in BB,
            get: BB => BB.useGLTFLightFalloff
          },
          metadata: jB
        }, null, Pz), (0, iB.e)(BB, null, Gz, {
          kind: "accessor",
          name: "useRadianceOverAlpha",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOverAlpha" in BB,
            get: BB => BB.useRadianceOverAlpha,
            set: (BB, jB) => {
              BB.useRadianceOverAlpha = jB
            }
          },
          metadata: jB
        }, Dn, Fn), (0, iB.e)(BB, null, Lz, {
          kind: "accessor",
          name: "useObjectSpaceNormalMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "useObjectSpaceNormalMap" in BB,
            get: BB => BB.useObjectSpaceNormalMap,
            set: (BB, jB) => {
              BB.useObjectSpaceNormalMap = jB
            }
          },
          metadata: jB
        }, Yn, Vn), (0, iB.e)(BB, null, gz, {
          kind: "accessor",
          name: "useParallax",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallax" in BB,
            get: BB => BB.useParallax,
            set: (BB, jB) => {
              BB.useParallax = jB
            }
          },
          metadata: jB
        }, hn, Xn), (0, iB.e)(BB, null, tz, {
          kind: "accessor",
          name: "useParallaxOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useParallaxOcclusion" in BB,
            get: BB => BB.useParallaxOcclusion,
            set: (BB, jB) => {
              BB.useParallaxOcclusion = jB
            }
          },
          metadata: jB
        }, Zn, An), (0, iB.e)(BB, null, Sz, {
          kind: "accessor",
          name: "parallaxScaleBias",
          static: !1,
          private: !1,
          access: {
            has: BB => "parallaxScaleBias" in BB,
            get: BB => BB.parallaxScaleBias,
            set: (BB, jB) => {
              BB.parallaxScaleBias = jB
            }
          },
          metadata: jB
        }, Tn, Pn), (0, iB.e)(BB, null, Mz, {
          kind: "accessor",
          name: "disableLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "disableLighting" in BB,
            get: BB => BB.disableLighting,
            set: (BB, jB) => {
              BB.disableLighting = jB
            }
          },
          metadata: jB
        }, Wn, en), (0, iB.e)(BB, null, Ez, {
          kind: "accessor",
          name: "forceIrradianceInFragment",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceIrradianceInFragment" in BB,
            get: BB => BB.forceIrradianceInFragment,
            set: (BB, jB) => {
              BB.forceIrradianceInFragment = jB
            }
          },
          metadata: jB
        }, wn, xn), (0, iB.e)(BB, null, iz, {
          kind: "accessor",
          name: "maxSimultaneousLights",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxSimultaneousLights" in BB,
            get: BB => BB.maxSimultaneousLights,
            set: (BB, jB) => {
              BB.maxSimultaneousLights = jB
            }
          },
          metadata: jB
        }, Kn, Cn), (0, iB.e)(BB, null, qz, {
          kind: "accessor",
          name: "invertNormalMapX",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapX" in BB,
            get: BB => BB.invertNormalMapX,
            set: (BB, jB) => {
              BB.invertNormalMapX = jB
            }
          },
          metadata: jB
        }, cn, bn), (0, iB.e)(BB, null, fz, {
          kind: "accessor",
          name: "invertNormalMapY",
          static: !1,
          private: !1,
          access: {
            has: BB => "invertNormalMapY" in BB,
            get: BB => BB.invertNormalMapY,
            set: (BB, jB) => {
              BB.invertNormalMapY = jB
            }
          },
          metadata: jB
        }, vn, Rn), (0, iB.e)(BB, null, oz, {
          kind: "accessor",
          name: "twoSidedLighting",
          static: !1,
          private: !1,
          access: {
            has: BB => "twoSidedLighting" in BB,
            get: BB => BB.twoSidedLighting,
            set: (BB, jB) => {
              BB.twoSidedLighting = jB
            }
          },
          metadata: jB
        }, On, Bd), (0, iB.e)(BB, null, Hz, {
          kind: "accessor",
          name: "useAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useAlphaFresnel" in BB,
            get: BB => BB.useAlphaFresnel,
            set: (BB, jB) => {
              BB.useAlphaFresnel = jB
            }
          },
          metadata: jB
        }, jd, zd), (0, iB.e)(BB, null, Dz, {
          kind: "accessor",
          name: "useLinearAlphaFresnel",
          static: !1,
          private: !1,
          access: {
            has: BB => "useLinearAlphaFresnel" in BB,
            get: BB => BB.useLinearAlphaFresnel,
            set: (BB, jB) => {
              BB.useLinearAlphaFresnel = jB
            }
          },
          metadata: jB
        }, Qd, nd), (0, iB.e)(BB, null, Fz, {
          kind: "accessor",
          name: "environmentBRDFTexture",
          static: !1,
          private: !1,
          access: {
            has: BB => "environmentBRDFTexture" in BB,
            get: BB => BB.environmentBRDFTexture,
            set: (BB, jB) => {
              BB.environmentBRDFTexture = jB
            }
          },
          metadata: jB
        }, dd, Id), (0, iB.e)(BB, null, Yz, {
          kind: "accessor",
          name: "forceNormalForward",
          static: !1,
          private: !1,
          access: {
            has: BB => "forceNormalForward" in BB,
            get: BB => BB.forceNormalForward,
            set: (BB, jB) => {
              BB.forceNormalForward = jB
            }
          },
          metadata: jB
        }, Nd, ud), (0, iB.e)(BB, null, Vz, {
          kind: "accessor",
          name: "enableSpecularAntiAliasing",
          static: !1,
          private: !1,
          access: {
            has: BB => "enableSpecularAntiAliasing" in BB,
            get: BB => BB.enableSpecularAntiAliasing,
            set: (BB, jB) => {
              BB.enableSpecularAntiAliasing = jB
            }
          },
          metadata: jB
        }, Ud, pd), (0, iB.e)(BB, null, hz, {
          kind: "accessor",
          name: "useHorizonOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useHorizonOcclusion" in BB,
            get: BB => BB.useHorizonOcclusion,
            set: (BB, jB) => {
              BB.useHorizonOcclusion = jB
            }
          },
          metadata: jB
        }, rd, sd), (0, iB.e)(BB, null, Xz, {
          kind: "accessor",
          name: "useRadianceOcclusion",
          static: !1,
          private: !1,
          access: {
            has: BB => "useRadianceOcclusion" in BB,
            get: BB => BB.useRadianceOcclusion,
            set: (BB, jB) => {
              BB.useRadianceOcclusion = jB
            }
          },
          metadata: jB
        }, Jd, md), (0, iB.e)(BB, null, Zz, {
          kind: "accessor",
          name: "unlit",
          static: !1,
          private: !1,
          access: {
            has: BB => "unlit" in BB,
            get: BB => BB.unlit,
            set: (BB, jB) => {
              BB.unlit = jB
            }
          },
          metadata: jB
        }, yd, kd), (0, iB.e)(BB, null, Az, {
          kind: "accessor",
          name: "applyDecalMapAfterDetailMap",
          static: !1,
          private: !1,
          access: {
            has: BB => "applyDecalMapAfterDetailMap" in BB,
            get: BB => BB.applyDecalMapAfterDetailMap,
            set: (BB, jB) => {
              BB.applyDecalMapAfterDetailMap = jB
            }
          },
          metadata: jB
        }, Gd, Ld), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB.PBRMATERIAL_OPAQUE = Sj.PBRMATERIAL_OPAQUE, BB.PBRMATERIAL_ALPHATEST = Sj.PBRMATERIAL_ALPHATEST, BB.PBRMATERIAL_ALPHABLEND = Sj.PBRMATERIAL_ALPHABLEND, BB.PBRMATERIAL_ALPHATESTANDBLEND = Sj.PBRMATERIAL_ALPHATESTANDBLEND, BB.DEFAULT_AO_ON_ANALYTICAL_LIGHTS = Sj.DEFAULT_AO_ON_ANALYTICAL_LIGHTS, BB
    })();
    const An = "KHR_materials_diffuse_transmission";

    function Tn(BB, jB) {
      const zB = jB.subSurface;
      let QB = null;
      return zB.translucencyIntensityTexture ? QB = zB.translucencyIntensityTexture : zB.thicknessTexture && zB.useMaskFromThicknessTexture && (QB = zB.thicknessTexture), QB && !zB.useGltfStyleTextures ? (fB.c.Warn(`${BB}: Translucency intensity texture is not supported when useGltfStyleTextures = false. Ignoring for: ${jB.name}`, 1), null) : QB
    }
    class Pn {
      constructor(BB) {
        this.name = An, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Zn && this._isExtensionEnabled(zB)) {
          const jB = Tn(BB, zB);
          return jB && QB.push(jB), zB.subSurface.translucencyColorTexture && QB.push(zB.subSurface.translucencyColorTexture), QB
        }
        return QB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const jB = BB.subSurface;
        return !!jB.isTranslucencyEnabled && (!BB.unlit && !jB.useAlbedoToTintTranslucency && jB.useGltfStyleTextures && 1 === jB.volumeIndexOfRefraction && 0 === jB.minimumThickness && 0 === jB.maximumThickness)
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((QB => {
          if (zB instanceof Zn && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0;
            const QB = zB.subSurface,
              nB = Tn(BB, zB),
              dB = 0 == QB.translucencyIntensity ? void 0 : QB.translucencyIntensity,
              IB = this._exporter._materialExporter.getTextureInfo(nB) ?? void 0,
              NB = !QB.translucencyColor || QB.translucencyColor.equalsFloats(1, 1, 1) ? void 0 : QB.translucencyColor.nQB(),
              uB = this._exporter._materialExporter.getTextureInfo(QB.translucencyColorTexture) ?? void 0,
              UB = {
                diffuseTransmissionFactor: dB,
                diffuseTransmissionTexture: IB,
                diffuseTransmissionColorFactor: NB,
                diffuseTransmissionColorTexture: uB
              };
            (IB || uB) && this._exporter._materialNeedsUVsSet.add(zB), jB.extensions = jB.extensions || {}, jB.extensions[An] = UB
          }
          QB(jB)
        }))
      }
    }
    let Wn = !1;

    function en() {
      Wn || (Wn = !0, VQ.RegisterExtension(An, (BB => new Pn(BB))))
    }
    en();
    const wn = "KHR_materials_dispersion";
    class xn {
      constructor() {
        this.name = wn, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const jB = BB.subSurface;
        return !(!jB.isRefractionEnabled && !jB.isDispersionEnabled)
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          if (zB instanceof Zn && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0;
            const BB = {
              dispersion: zB.subSurface.dispersion
            };
            jB.extensions = jB.extensions || {}, jB.extensions[wn] = BB
          }
          BB(jB)
        }))
      }
    }
    let Kn = !1;

    function Cn() {
      Kn || (Kn = !0, VQ.RegisterExtension(wn, (() => new xn)))
    }
    Cn();
    const cn = "KHR_materials_emissive_strength";
    class bn {
      constructor() {
        this.name = cn, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAsync(BB, jB, zB) {
        return await new Promise((BB => {
          if (!(zB instanceof Zn)) return BB(jB);
          const QB = zB.emissiveColor.scale(zB.emissiveIntensity),
            nB = Math.max(...QB.nQB());
          if (nB > 1) {
            jB.emissiveFactor = QB.scale(1 / nB).nQB(), this._wasUsed = !0;
            const BB = {
              emissiveStrength: nB
            };
            jB.extensions || (jB.extensions = {}), jB.extensions[cn] = BB
          } else jB.emissiveFactor = QB.nQB();
          return BB(jB)
        }))
      }
    }
    let vn = !1;

    function Rn() {
      vn || (vn = !0, VQ.RegisterExtension(cn, (() => new bn)))
    }
    Rn();
    const On = "KHR_materials_ior";
    class Bd {
      constructor() {
        this.name = On, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (BB instanceof Rj ? 1.5 != BB.specularIor : BB instanceof Zn && (void 0 != BB.indexOfRefraction && 1.5 != BB.indexOfRefraction))
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          if (zB instanceof Zn && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0;
            const BB = {
              ior: zB.indexOfRefraction
            };
            jB.extensions = jB.extensions || {}, jB.extensions[On] = BB
          } else if (zB instanceof Rj && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0;
            const BB = {
              ior: zB.specularIor
            };
            jB.extensions = jB.extensions || {}, jB.extensions[On] = BB
          }
          BB(jB)
        }))
      }
    }
    let jd = !1;

    function zd() {
      jd || (jd = !0, VQ.RegisterExtension(On, (() => new Bd)))
    }
    zd();
    const Qd = "KHR_materials_iridescence";
    class nd {
      constructor(BB) {
        this.name = Qd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Sj) {
          if (zB.iridescence.isEnabled) return zB.iridescence.texture && QB.push(zB.iridescence.texture), zB.iridescence.thicknessTexture && zB.iridescence.thicknessTexture !== zB.iridescence.texture && QB.push(zB.iridescence.thicknessTexture), QB
        } else if (zB instanceof Rj && zB.thinFilmWeight > 0) return zB.thinFilmWeightTexture && QB.push(zB.thinFilmWeightTexture), zB.thinFilmThicknessTexture && zB.thinFilmThicknessTexture !== zB.thinFilmWeightTexture && QB.push(zB.thinFilmThicknessTexture), QB;
        return []
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          if (zB instanceof Sj) {
            if (!zB.iridescence.isEnabled) return void BB(jB);
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            const QB = this._exporter._materialExporter.getTextureInfo(zB.iridescence.texture),
              nB = this._exporter._materialExporter.getTextureInfo(zB.iridescence.thicknessTexture),
              dB = {
                iridescenceFactor: zB.iridescence.intensity,
                iridescenceIor: zB.iridescence.indexOfRefraction,
                iridescenceThicknessMinimum: zB.iridescence.minimumThickness,
                iridescenceThicknessMaximum: zB.iridescence.maximumThickness,
                iridescenceTexture: QB ?? void 0,
                iridescenceThicknessTexture: nB ?? void 0
              };
            null === dB.iridescenceTexture && null === dB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Qd] = dB
          } else if (zB instanceof Rj) {
            if (zB.thinFilmWeight <= 0) return void BB(jB);
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            const QB = this._exporter._materialExporter.getTextureInfo(zB.thinFilmWeightTexture),
              nB = this._exporter._materialExporter.getTextureInfo(zB.thinFilmThicknessTexture),
              dB = {
                iridescenceFactor: zB.thinFilmWeight,
                iridescenceIor: zB.thinFilmIor,
                iridescenceThicknessMinimum: 1e3 * zB.thinFilmThicknessMin,
                iridescenceThicknessMaximum: 1e3 * zB.thinFilmThickness,
                iridescenceTexture: QB ?? void 0,
                iridescenceThicknessTexture: nB ?? void 0
              };
            null === dB.iridescenceTexture && null === dB.iridescenceThicknessTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Qd] = dB
          }
          BB(jB)
        }))
      }
    }
    let dd = !1;

    function Id() {
      dd || (dd = !0, VQ.RegisterExtension(Qd, (BB => new nd(BB))))
    }
    Id();
    const Nd = "KHR_materials_sheen";
    class ud {
      constructor(BB) {
        this.name = Nd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        return zB instanceof Zn && zB.sheen.isEnabled && zB.sheen.texture ? [zB.sheen.texture] : []
      }
      async postExportMaterialAsync(BB, jB, zB) {
        return await new Promise((BB => {
          if (zB instanceof Zn) {
            if (!zB.sheen.isEnabled) return void BB(jB);
            this._wasUsed = !0, null == jB.extensions && (jB.extensions = {});
            const QB = {
              sheenColorFactor: zB.sheen.color.nQB(),
              sheenRoughnessFactor: zB.sheen.roughness ?? 0
            };
            null === QB.sheenColorTexture && null === QB.sheenRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zB), zB.sheen.texture && (QB.sheenColorTexture = this._exporter._materialExporter.getTextureInfo(zB.sheen.texture) ?? void 0), zB.sheen.textureRoughness && !zB.sheen.useRoughnessFromMainTexture ? QB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(zB.sheen.textureRoughness) ?? void 0 : zB.sheen.texture && zB.sheen.useRoughnessFromMainTexture && (QB.sheenRoughnessTexture = this._exporter._materialExporter.getTextureInfo(zB.sheen.texture) ?? void 0), jB.extensions[Nd] = QB
          }
          BB(jB)
        }))
      }
    }
    let Ud = !1;

    function pd() {
      Ud || (Ud = !0, VQ.RegisterExtension(Nd, (BB => new ud(BB))))
    }
    pd();
    const rd = "KHR_materials_fuzz";

    function sd(BB, jB) {
      const zB = new HB.i(jB.name, jB.aY());
      return zB._texture = BB, zB.coordinatesIndex = jB.coordinatesIndex, jB instanceof HB.i && (zB.uOffset = jB.uOffset, zB.vOffset = jB.vOffset, zB.uScale = jB.uScale, zB.vScale = jB.vScale, zB.wAng = jB.wAng), zB.wrapU = jB.wrapU, zB.wrapV = jB.wrapV, zB
    }
    class Jd {
      constructor(BB) {
        this.name = rd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._mergedTexturesMap = {}, this._cachedInternalTexturesMap = {}, this._exporter = BB
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
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        if (zB instanceof Rj) {
          const BB = [];
          if (zB.fuzzWeight > 0) {
            zB.fuzzWeightTexture && BB.push(zB.fuzzWeightTexture);
            let jB = !1;
            if (zB.fuzzRoughnessTexture && (zB._useFuzzRoughnessFromTextureAlpha ? BB.push(zB.fuzzRoughnessTexture) : jB = !0), zB.fuzzColorTexture && !jB && BB.push(zB.fuzzColorTexture), jB) {
              const jB = function(BB) {
                const jB = BB.fuzzColorTexture,
                  zB = jB && jB.getInternalTexture() ? jB.getInternalTexture().uniqueId : "NoFuzzColor",
                  QB = BB.fuzzRoughnessTexture;
                return `FuzzColor_${zB}_FuzzRoughness_${QB&&QB.getInternalTexture()?QB.getInternalTexture().uniqueId:"NoFuzzRoughness"}`
              }(zB);
              if (!this._cachedInternalTexturesMap[jB]) {
                const BB = await async function(BB) {
                  const jB = BB.aY(),
                    zB = BB.fuzzColorTexture,
                    QB = BB.fuzzRoughnessTexture;
                  return zB || QB ? (await Iz("FuzzTexture", Uz(zB ? Nz(zB, 0) : uz(1), zB ? Nz(zB, 1) : uz(1), zB ? Nz(zB, 2) : uz(1), QB ? Nz(QB, BB._useFuzzRoughnessFromTextureAlpha ? 3 : 0) : uz(1)), jB)).getInternalTexture() : null
                }(zB);
                BB && (this._cachedInternalTexturesMap[jB] = BB)
              }
              this._cachedInternalTexturesMap[jB] && (zB.fuzzColorTexture && (this._mergedTexturesMap[zB.fuzzColorTexture.uniqueId] = sd(this._cachedInternalTexturesMap[jB], zB.fuzzColorTexture), BB.push(this._mergedTexturesMap[zB.fuzzColorTexture.uniqueId])), zB.fuzzRoughnessTexture && (this._mergedTexturesMap[zB.fuzzRoughnessTexture.uniqueId] = sd(this._cachedInternalTexturesMap[jB], zB.fuzzRoughnessTexture), BB.push(this._mergedTexturesMap[zB.fuzzRoughnessTexture.uniqueId])))
            }
          }
          return BB
        }
        return []
      }
      async postExportMaterialAsync(BB, jB, zB) {
        return await new Promise((BB => {
          if (zB instanceof Rj) {
            if (0 == zB.fuzzWeight) return void BB(jB);
            this._wasUsed = !0, null == jB.extensions && (jB.extensions = {});
            const QB = {
              fuzzFactor: zB.fuzzWeight,
              fuzzColorFactor: zB.fuzzColor.nQB(),
              fuzzRoughnessFactor: zB.fuzzRoughness
            };
            let nB, dB;
            zB.fuzzWeightTexture && (QB.fuzzTexture = this._exporter._materialExporter.getTextureInfo(zB.fuzzWeightTexture) ?? void 0), zB.fuzzColorTexture && (nB = this._mergedTexturesMap[zB.fuzzColorTexture.uniqueId] ? this._mergedTexturesMap[zB.fuzzColorTexture.uniqueId] : zB.fuzzColorTexture, QB.fuzzColorTexture = this._exporter._materialExporter.getTextureInfo(nB) ?? void 0), zB.fuzzRoughnessTexture && (dB = this._mergedTexturesMap[zB.fuzzRoughnessTexture.uniqueId] ? this._mergedTexturesMap[zB.fuzzRoughnessTexture.uniqueId] : zB.fuzzRoughnessTexture, QB.fuzzRoughnessTexture = this._exporter._materialExporter.getTextureInfo(dB) ?? void 0), null === QB.fuzzColorTexture && null === QB.fuzzRoughnessTexture || this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[rd] = QB
          }
          BB(jB)
        }))
      }
    }
    let md = !1;

    function yd() {
      md || (md = !0, VQ.RegisterExtension(rd, (BB => new Jd(BB))))
    }
    yd();
    const kd = "KHR_materials_specular";
    class Gd {
      constructor(BB) {
        this.name = kd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        return zB instanceof Zn && this._isExtensionEnabled(zB) ? (zB.metallicReflectanceTexture && QB.push(zB.metallicReflectanceTexture), zB.reflectanceTexture && QB.push(zB.reflectanceTexture), QB) : QB
      }
      _isExtensionEnabled(BB) {
        return !BB.unlit && (void 0 != BB.metallicF0Factor && 1 != BB.metallicF0Factor || void 0 != BB.metallicReflectanceColor && !BB.metallicReflectanceColor.equalsFloats(1, 1, 1) || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.metallicReflectanceTexture || null != BB.reflectanceTexture
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          var QB;
          if (zB instanceof Zn && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0, jB.extensions = jB.extensions || {};
            const BB = this._exporter._materialExporter.getTextureInfo(zB.metallicReflectanceTexture) ?? void 0,
              QB = this._exporter._materialExporter.getTextureInfo(zB.reflectanceTexture) ?? void 0,
              nB = {
                specularFactor: 1 == zB.metallicF0Factor ? void 0 : zB.metallicF0Factor,
                specularTexture: BB,
                specularColorFactor: zB.metallicReflectanceColor.equalsFloats(1, 1, 1) ? void 0 : zB.metallicReflectanceColor.nQB(),
                specularColorTexture: QB
              };
            this._hasTexturesExtension(zB) && this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[kd] = nB
          } else if (zB instanceof Rj) {
            jB.extensions = jB.extensions || {};
            const nB = this._exporter._materialExporter.getTextureInfo(zB.specularWeightTexture) ?? void 0,
              dB = this._exporter._materialExporter.getTextureInfo(zB.specularColorTexture) ?? void 0,
              IB = 1 == zB.specularWeight ? void 0 : zB.specularWeight,
              NB = zB.specularColor.equalsFloats(1, 1, 1) ? void 0 : zB.specularColor.nQB();
            if (!dB && !nB && void 0 === IB && void 0 === NB) return BB(jB);
            this._wasUsed = !0;
            const uB = {
                specularEdgeColorEnabled: !0
              },
              UB = {
                specularFactor: IB,
                specularTexture: nB,
                specularColorFactor: NB,
                specularColorTexture: dB,
                extensions: {}
              };
            UB.extensions.EXT_materials_specular_edge_color = uB, (QB = this._exporter._glTF).extensionsUsed || (QB.extensionsUsed = []), -1 === this._exporter._glTF.extensionsUsed.indexOf("EXT_materials_specular_edge_color") && this._exporter._glTF.extensionsUsed.push("EXT_materials_specular_edge_color"), (nB || dB) && this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[kd] = UB
          }
          BB(jB)
        }))
      }
    }
    let Ld = !1;

    function gd() {
      Ld || (Ld = !0, VQ.RegisterExtension(kd, (BB => new Gd(BB))))
    }
    gd();
    const td = "KHR_materials_transmission";
    class Sd {
      constructor(BB) {
        this.name = td, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Zn) {
          if (this._isExtensionEnabled(zB)) return zB.subSurface.refractionIntensityTexture && zB.subSurface.useGltfStyleTextures && QB.push(zB.subSurface.refractionIntensityTexture), QB
        } else zB instanceof Rj && (zB.transmissionWeight > 0 && zB.transmissionWeightTexture && (QB.push(zB.transmissionWeightTexture), zB.transmissionColorTexture && QB.push(zB.transmissionColorTexture)), zB.subsurfaceWeight > 0 && zB.subsurfaceWeightTexture && QB.push(zB.subsurfaceWeightTexture));
        return QB
      }
      _isExtensionEnabled(BB) {
        if (BB instanceof Rj && !BB.unlit) return BB.transmissionWeight > 0 || BB.subsurfaceWeight > 0;
        if (BB instanceof Zn && !BB.unlit) {
          const jB = BB.subSurface;
          return jB.isRefractionEnabled && void 0 != jB.refractionIntensity && 0 != jB.refractionIntensity || null != jB.refractionIntensityTexture && jB.useGltfStyleTextures
        }
        return !1
      }
      async postExportMaterialAsync(BB, jB, zB) {
        if (!this._isExtensionEnabled(zB)) return jB;
        if (zB instanceof Zn) {
          this._wasUsed = !0;
          const QB = zB.subSurface,
            nB = {
              transmissionFactor: 0 === QB.refractionIntensity ? void 0 : QB.refractionIntensity
            };
          if (QB.refractionIntensityTexture)
            if (QB.useGltfStyleTextures) {
              this._exporter._materialNeedsUVsSet.add(zB);
              const BB = this._exporter._materialExporter.getTextureInfo(QB.refractionIntensityTexture);
              BB && (nB.transmissionTexture = BB)
            } else fB.c.Warn(`${BB}: Exporting a subsurface refraction intensity texture without \`useGltfStyleTextures\` is not supported`);
          jB.extensions || (jB.extensions = {}), jB.extensions[td] = nB
        } else if (zB instanceof Rj) {
          this._wasUsed = !0;
          const BB = {
            transmissionFactor: (1 - zB.transmissionWeight) * zB.subsurfaceWeight + zB.transmissionWeight
          };
          if (zB.transmissionWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(zB);
            const jB = this._exporter._materialExporter.getTextureInfo(zB.transmissionWeightTexture);
            jB && (BB.transmissionTexture = jB)
          } else if (zB.subsurfaceWeightTexture) {
            this._exporter._materialNeedsUVsSet.add(zB);
            const jB = this._exporter._materialExporter.getTextureInfo(zB.subsurfaceWeightTexture);
            jB && (BB.transmissionTexture = jB)
          }
          if (0 == zB.transmissionDepth && (!zB.transmissionColor.equals(xB.d.White()) || zB.transmissionColorTexture) && jB.pbrMetallicRoughness && (jB.pbrMetallicRoughness.baseColorFactor || (jB.pbrMetallicRoughness.baseColorFactor = [1, 1, 1, 1]), jB.pbrMetallicRoughness.baseColorFactor[0] *= zB.transmissionColor.r, jB.pbrMetallicRoughness.baseColorFactor[1] *= zB.transmissionColor.g, jB.pbrMetallicRoughness.baseColorFactor[2] *= zB.transmissionColor.b, zB.transmissionColorTexture && !jB.pbrMetallicRoughness.baseColorTexture)) {
            const BB = this._exporter._materialExporter.getTextureInfo(zB.transmissionColorTexture);
            BB && (jB.pbrMetallicRoughness.baseColorTexture = BB, this._exporter._materialNeedsUVsSet.add(zB))
          }
          jB.extensions || (jB.extensions = {}), jB.extensions[td] = BB
        }
        return jB
      }
    }
    let Md = !1;

    function Ed() {
      Md || (Md = !0, VQ.RegisterExtension(td, (BB => new Sd(BB))))
    }
    Ed();
    var qd = zB(40355);
    const fd = "KHR_materials_unlit";
    class od {
      constructor() {
        this.name = fd, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      get wasUsed() {
        return this._wasUsed
      }
      dispose() {}
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          let QB = !1;
          zB instanceof Zn ? QB = zB.unlit : zB instanceof qd.e && (QB = zB.disableLighting), QB && (this._wasUsed = !0, null == jB.extensions && (jB.extensions = {}), jB.extensions[fd] = {}), BB(jB)
        }))
      }
    }
    let Hd = !1;

    function Dd() {
      Hd || (Hd = !0, VQ.RegisterExtension(fd, (() => new od)))
    }
    Dd();
    const Fd = "KHR_materials_volume";
    class Yd {
      constructor(BB) {
        this.name = Fd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Zn) {
          if (this._isExtensionEnabled(zB)) return zB.subSurface.thicknessTexture && QB.push(zB.subSurface.thicknessTexture), QB
        } else zB instanceof Rj && (zB.transmissionWeight > 0 || zB.subsurfaceWeight > 0) && zB.geometryThicknessTexture && QB.push(zB.geometryThicknessTexture);
        return QB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const jB = BB.subSurface;
        return !(!jB.isRefractionEnabled && !jB.isTranslucencyEnabled) && (void 0 != jB.maximumThickness && 0 != jB.maximumThickness || void 0 != jB.tintColorAtDistance && jB.tintColorAtDistance != Number.POSITIVE_INFINITY || void 0 != jB.tintColor && jB.tintColor != xB.d.White() || this._hasTexturesExtension(BB))
      }
      _hasTexturesExtension(BB) {
        return null != BB.subSurface.thicknessTexture
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          if (zB instanceof Zn && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0;
            const BB = zB.subSurface,
              QB = {
                thicknessFactor: 0 == BB.maximumThickness ? void 0 : BB.maximumThickness,
                thicknessTexture: this._exporter._materialExporter.getTextureInfo(BB.thicknessTexture) ?? void 0,
                attenuationDistance: BB.tintColorAtDistance == Number.POSITIVE_INFINITY ? void 0 : BB.tintColorAtDistance,
                attenuationColor: BB.tintColor.equalsFloats(1, 1, 1) ? void 0 : BB.tintColor.nQB()
              };
            this._hasTexturesExtension(zB) && this._exporter._materialNeedsUVsSet.add(zB), jB.extensions = jB.extensions || {}, jB.extensions[Fd] = QB
          } else if (zB instanceof Rj) {
            const BB = zB.transmissionWeight > 0 && !zB.geometryThinWalled,
              QB = zB.subsurfaceWeight > 0 && !zB.geometryThinWalled;
            if (BB || QB) {
              this._wasUsed = !0;
              const nB = zB.geometryThickness,
                dB = this._exporter._materialExporter.getTextureInfo(zB.geometryThicknessTexture) ?? void 0;
              let IB;
              dB && this._exporter._materialNeedsUVsSet.add(zB);
              const NB = xB.d.White().nQB();
              if (BB && zB.transmissionDepth > 0) {
                const BB = 1 / zB.transmissionDepth;
                let jB = new AB.m(-Math.log(zB.transmissionColor.r) * BB, -Math.log(zB.transmissionColor.g) * BB, -Math.log(zB.transmissionColor.b) * BB);
                const QB = new AB.m(zB.transmissionScatter.r * BB, zB.transmissionScatter.g * BB, zB.transmissionScatter.b * BB),
                  nB = jB.subtract(QB),
                  dB = Math.min(nB.x, nB.y, nB.z);
                dB < 0 && (nB.x = nB.x - dB, nB.y = nB.y - dB, nB.z = nB.z - dB), jB = nB.add(QB);
                IB = 1 / Math.max(jB.x, jB.y, jB.z), NB[0] = Math.exp(-jB.x * IB), NB[1] = Math.exp(-jB.y * IB), NB[2] = Math.exp(-jB.z * IB)
              } else IB = Number.MAX_VALUE, NB[0] = 1, NB[1] = 1, NB[2] = 1;
              let uB = 1;
              const UB = xB.d.White().nQB();
              if (QB) {
                const BB = zB.subsurfaceRadius,
                  jB = zB.subsurfaceRadiusScale,
                  QB = new AB.m(jB.r, jB.g, jB.b).multiplyByFloats(BB, BB, BB),
                  nB = new AB.m(1 / Math.max(QB.x, 1e-6), 1 / Math.max(QB.y, 1e-6), 1 / Math.max(QB.z, 1e-6));
                uB = 1 / Math.max(nB.x, nB.y, nB.z), UB[0] = Math.exp(-nB.x * uB), UB[1] = Math.exp(-nB.y * uB), UB[2] = Math.exp(-nB.z * uB)
              }
              const aB = (1 - zB.transmissionWeight) * zB.subsurfaceWeight,
                pB = aB + zB.transmissionWeight,
                rB = 1 / Math.max(pB, 1e-6),
                sB = zB.transmissionWeight * rB,
                JB = aB * rB,
                mB = NB.map(((BB, jB) => BB * sB + UB[jB] * JB)),
                yB = {
                  thicknessFactor: nB,
                  thicknessTexture: dB,
                  attenuationDistance: IB * sB + uB * JB,
                  attenuationColor: mB
                };
              jB.extensions = jB.extensions || {}, jB.extensions[Fd] = yB
            }
          }
          BB(jB)
        }))
      }
    }
    let Vd = !1;

    function hd() {
      Vd || (Vd = !0, VQ.RegisterExtension(Fd, (BB => new Yd(BB))))
    }
    hd();
    const Xd = "KHR_materials_volume_scatter";
    class Zd {
      constructor(BB) {
        this.name = Xd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        return zB instanceof Rj && (zB.transmissionWeight > 0 && zB.transmissionScatterTexture && QB.push(zB.transmissionScatterTexture), zB.subsurfaceWeight > 0 && zB.subsurfaceColorTexture && QB.push(zB.subsurfaceColorTexture)), QB
      }
      _isExtensionEnabled(BB) {
        if (BB.unlit) return !1;
        const jB = BB.transmissionWeight > 0 && !BB.geometryThinWalled && BB.transmissionDepth > 0 && !BB.transmissionScatter.equals(xB.d.Black()),
          zB = BB.subsurfaceWeight > 0 && !BB.geometryThinWalled;
        return !(!jB && !zB)
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          if (zB instanceof Rj && this._isExtensionEnabled(zB)) {
            this._wasUsed = !0;
            let BB = AB.m.Zero(),
              QB = 0;
            if (zB.transmissionWeight > 0) {
              BB = function(BB) {
                const jB = new AB.m(Math.sqrt(1 - BB.x), Math.sqrt(1 - BB.y), Math.sqrt(1 - BB.z)),
                  zB = new AB.m(1, 1, 1),
                  QB = zB.subtract(jB),
                  nB = zB.subtract(new AB.m(.139, .139, .139).multiplyInPlace(jB)),
                  dB = zB.add(new AB.m(1.17, 1.17, 1.17).multiplyInPlace(jB));
                return QB.multiplyInPlace(nB).divideInPlace(dB)
              }(new AB.m(zB.transmissionScatter.r, zB.transmissionScatter.g, zB.transmissionScatter.b)), QB = zB.transmissionScatterAnisotropy
            }
            const nB = AB.m.Zero();
            let dB = 0;
            zB.subsurfaceWeight > 0 && (nB.set(zB.subsurfaceColor.r, zB.subsurfaceColor.g, zB.subsurfaceColor.b), dB = zB.subsurfaceScatterAnisotropy);
            const IB = (1 - zB.transmissionWeight) * zB.subsurfaceWeight,
              NB = IB + zB.transmissionWeight,
              uB = 1 / Math.max(NB, 1e-6),
              UB = zB.transmissionWeight * uB,
              aB = IB * uB,
              pB = {
                multiscatterColorFactor: BB.multiplyByFloats(UB, UB, UB).addInPlace(nB.multiplyByFloats(aB, aB, aB)).nQB(),
                scatterAnisotropy: QB * UB + dB * aB
              };
            if (zB.subsurfaceWeight > 0 && zB.subsurfaceColorTexture) {
              this._exporter._materialNeedsUVsSet.add(zB);
              const BB = this._exporter._materialExporter.getTextureInfo(zB.subsurfaceColorTexture);
              BB && (pB.multiscatterColorTexture = BB)
            } else if (zB.transmissionWeight > 0 && zB.transmissionScatterTexture) {
              this._exporter._materialNeedsUVsSet.add(zB);
              const BB = this._exporter._materialExporter.getTextureInfo(zB.transmissionScatterTexture);
              BB && (pB.multiscatterColorTexture = BB)
            }
            jB.extensions = jB.extensions || {}, jB.extensions[Xd] = pB
          }
          BB(jB)
        }))
      }
    }
    let Ad = !1;

    function Td() {
      Ad || (Ad = !0, VQ.RegisterExtension(Xd, (BB => new Zd(BB)), 101))
    }
    Td();
    const Pd = "KHR_materials_diffuse_roughness";
    class Wd {
      constructor(BB) {
        this.name = Pd, this.enabled = !0, this.required = !1, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      async postExportMaterialAdditionalTexturesAsync(BB, jB, zB) {
        const QB = [];
        if (zB instanceof Sj) {
          if (zB._baseDiffuseRoughness) return zB._baseDiffuseRoughnessTexture && QB.push(zB._baseDiffuseRoughnessTexture), QB
        } else if (zB instanceof Rj && zB.baseDiffuseRoughness) return zB.baseDiffuseRoughnessTexture && QB.push(zB.baseDiffuseRoughnessTexture), QB;
        return []
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          let QB = null,
            nB = null;
          if (zB instanceof Sj ? (QB = zB._baseDiffuseRoughness, nB = zB._baseDiffuseRoughnessTexture) : zB instanceof Rj && (QB = zB.baseDiffuseRoughness, nB = zB.baseDiffuseRoughnessTexture), !QB) return void BB(jB);
          this._wasUsed = !0, jB.extensions = jB.extensions || {};
          const dB = {
            diffuseRoughnessFactor: QB,
            diffuseRoughnessTexture: this._exporter._materialExporter.getTextureInfo(nB) ?? void 0
          };
          null !== dB.diffuseRoughnessTexture && this._exporter._materialNeedsUVsSet.add(zB), jB.extensions[Pd] = dB, BB(jB)
        }))
      }
    }
    let ed = !1;

    function ld() {
      ed || (ed = !0, VQ.RegisterExtension(Pd, (BB => new Wd(BB))))
    }
    ld();
    const wd = "KHR_materials_openpbr";
    class xd {
      constructor() {
        this.name = wd, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportMaterialAsync(BB, jB, zB) {
        return new Promise((BB => {
          zB instanceof Rj && (this._wasUsed = !0, jB.extensions = jB.extensions || {}, jB.extensions[wd] = {}), BB(jB)
        }))
      }
    }
    let Kd = !1;

    function Cd() {
      Kd || (Kd = !0, VQ.RegisterExtension(wd, (() => new xd)))
    }
    Cd();
    const cd = "KHR_texture_transform";
    class bd {
      constructor() {
        this.name = cd, this.enabled = !0, this.required = !1, this._wasUsed = !1
      }
      dispose() {}
      get wasUsed() {
        return this._wasUsed
      }
      postExportTexture(BB, jB, zB) {
        if (zB.aY() || Ej.i.Warn(`${BB}: "scene" is not defined for Babylon texture ${zB.name}!`), (0 !== zB.uAng || 0 !== zB.vAng) && (Ej.i.Warn(`${BB}: Texture ${zB.name} with rotation in the u or v axis is not supported in glTF.`), 0 !== zB.uRotationCenter || 0 !== zB.vRotationCenter)) return;
        const QB = {};
        let nB = !1;
        if (0 === zB.uOffset && 0 === zB.vOffset || (QB.offset = [zB.uOffset, zB.vOffset], nB = !0), 1 === zB.uScale && 1 === zB.vScale || (QB.scale = [zB.uScale, zB.vScale], nB = !0), 0 !== zB.wAng) {
          if (0 !== zB.uRotationCenter || 0 !== zB.vRotationCenter) {
            if (zB.homogeneousRotationInUVTransform && zB.uScale !== zB.vScale) return void Ej.i.Warn(`${BB}: Texture ${zB.name} with homogenousRotationInUVTransform, non-uniform scaling, and non-zero rotation cannot be exported with ${cd}.`);
            Ej.i.Warn(`${BB}: Texture ${zB.name} with non-origin rotation center will be exported using an adjusted offset with ${cd}.`), QB.offset = function(BB) {
              const {
                uOffset: jB,
                vOffset: zB,
                uRotationCenter: QB,
                vRotationCenter: nB,
                uScale: dB,
                vScale: IB,
                wAng: NB
              } = BB, uB = Math.cos(NB), UB = Math.sin(NB), aB = QB * dB, pB = nB * IB;
              return [jB + (aB * (1 - uB) + pB * UB), zB + (pB * (1 - uB) - aB * UB)]
            }(zB)
          }
          QB.rotation = -zB.wAng, nB = !0
        }
        0 !== zB.coordinatesIndex && (QB.texCoord = zB.coordinatesIndex, nB = !0), nB && (this._wasUsed = !0, jB.extensions || (jB.extensions = {}), jB.extensions[cd] = QB)
      }
    }
    let vd = !1;

    function Rd() {
      vd || (vd = !0, VQ.RegisterExtension(cd, (() => new bd)))
    }
    Rd();
    var Od = zB(40108);
    const BI = "KHR_texture_basisu";
    class jI {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = BI, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, jB) {
        const zB = this._exporter._textures[jB.index],
          QB = zB.source;
        if (void 0 === QB) return;
        const nB = this._exporter._images[QB];
        "image/ktx2" === (nB.mimeType || (0, Od.j)(nB.uri)) && (zB.source = void 0, zB.extensions || (zB.extensions = {}), zB.extensions[BI] = {
          source: QB
        }, this._wasUsed = !0)
      }
    }
    let zI = !1;

    function QI() {
      zI || (zI = !0, VQ.RegisterExtension(BI, (BB => new jI(BB))))
    }
    QI();
    const nI = "EXT_texture_webp";
    class dI {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = nI, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, jB) {
        const zB = this._exporter._textures[jB.index],
          QB = zB.source;
        if (void 0 === QB) return;
        const nB = this._exporter._images[QB];
        "image/webp" === (nB.mimeType || (0, Od.j)(nB.uri)) && (zB.source = void 0, zB.extensions || (zB.extensions = {}), zB.extensions[nI] = {
          source: QB
        }, this._wasUsed = !0)
      }
    }
    let II = !1;

    function NI() {
      II || (II = !0, VQ.RegisterExtension(nI, (BB => new dI(BB))))
    }
    NI();
    const uI = "EXT_texture_avif";
    class UI {
      get wasUsed() {
        return this._wasUsed
      }
      constructor(BB) {
        this.name = uI, this.enabled = !0, this.required = !0, this._wasUsed = !1, this._exporter = BB
      }
      dispose() {}
      postExportTexture(BB, jB) {
        const zB = this._exporter._textures[jB.index],
          QB = zB.source;
        if (void 0 === QB) return;
        const nB = this._exporter._images[QB];
        "image/avif" === (nB.mimeType || (0, Od.j)(nB.uri)) && (zB.source = void 0, zB.extensions || (zB.extensions = {}), zB.extensions[uI] = {
          source: QB
        }, this._wasUsed = !0)
      }
    }
    let aI = !1;

    function pI() {
      aI || (aI = !0, VQ.RegisterExtension(uI, (BB => new UI(BB))))
    }
    pI();
    class rI {
      static CreateSTL(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "stlmesh",
          nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          dB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          NB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          uB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        const UB = function(BB, jB, zB) {
            const nB = [3 * BB[zB], 3 * BB[zB + 1], 3 * BB[zB + 2]],
              dB = [new QB.KJ(jB[nB[0]], jB[nB[0] + 2], jB[nB[0] + 1]), new QB.KJ(jB[nB[1]], jB[nB[1] + 2], jB[nB[1] + 1]), new QB.KJ(jB[nB[2]], jB[nB[2] + 2], jB[nB[2] + 1])],
              IB = dB[0].subtract(dB[1]),
              NB = dB[2].subtract(dB[1]);
            return {
              v: dB,
              n: QB.KJ.Cross(NB, IB).normalize()
            }
          },
          pB = function(BB, jB, zB, QB) {
            return jB = rB(BB, jB, zB.x, QB), jB = rB(BB, jB, zB.y, QB), rB(BB, jB, zB.z, QB)
          },
          rB = function(BB, jB, zB, QB) {
            return BB.setFloat32(jB, zB, QB), jB + 4
          },
          JB = function(BB) {
            if (NB) {
              let jB = BB;
              BB instanceof sB.c && (jB = BB.vQB);
              const zB = jB.getVerticesData(aB.d.PositionKind, !0, !0);
              if (!zB) return [];
              const nB = QB.KJ.Zero();
              let dB;
              for (dB = 0; dB < zB.length; dB += 3) QB.KJ.TransformCoordinatesFromFloatsToRef(zB[dB], zB[dB + 1], zB[dB + 2], BB.computeWorldMatrix(!0), nB).toArray(zB, dB);
              return zB
            }
            return BB.getVerticesData(aB.d.PositionKind) || []
          };
        NB && (IB = !0);
        let mB = "",
          yB = 0,
          kB = 0;
        if (nB) {
          for (let zB = 0; zB < BB.length; zB++) {
            const jB = BB[zB].dQB();
            yB += jB ? jB.length / 3 : 0
          }
          const jB = new ArrayBuffer(84 + 50 * yB);
          mB = new DataView(jB), kB += 80, mB.setUint32(kB, yB, dB), kB += 4
        } else uB || (mB = "solid stlmesh\r\n");
        for (let QB = 0; QB < BB.length; QB++) {
          const jB = BB[QB];
          !nB && uB && (mB += "solid " + jB.name + "\r\n"), !IB && jB instanceof UQ.e && jB.bakeCurrentTransformIntoVertices();
          const zB = JB(jB),
            NB = jB.dQB() || [];
          for (let BB = 0; BB < NB.length; BB += 3) {
            const jB = UB(NB, zB, BB);
            nB ? (kB = pB(mB, kB, jB.n, dB), kB = pB(mB, kB, jB.v[0], dB), kB = pB(mB, kB, jB.v[1], dB), kB = pB(mB, kB, jB.v[2], dB), kB += 2) : (mB += "\tfacet normal " + jB.n.x + " " + jB.n.y + " " + jB.n.z + "\r\n", mB += "\t\touter loop\r\n", mB += "\t\t\tvertex " + jB.v[0].x + " " + jB.v[0].y + " " + jB.v[0].z + "\r\n", mB += "\t\t\tvertex " + jB.v[1].x + " " + jB.v[1].y + " " + jB.v[1].z + "\r\n", mB += "\t\t\tvertex " + jB.v[2].x + " " + jB.v[2].y + " " + jB.v[2].z + "\r\n", mB += "\t\tendloop\r\n", mB += "\tendfacet\r\n")
          }!nB && uB && (mB += "endsolid " + name + "\r\n")
        }
        if (nB || uB || (mB += "endsolid stlmesh"), jB) {
          const BB = document.createElement("a"),
            jB = new Blob([mB], {
              type: "application/octet-stream"
            });
          BB.href = window.URL.createObjectURL(jB), BB.download = zB + ".stl", BB.click()
        }
        return mB
      }
    }

    function sI(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
        QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nB = [];
      for (let dB = 0; dB < BB.length / zB; dB++) {
        const IB = BB[dB * zB] * (QB ? -1 : 1),
          NB = BB[dB * zB + 1],
          uB = BB[dB * zB + 2];
        nB.push(`(${IB.toPrecision(jB.precision)}, ${NB.toPrecision(jB.precision)}, ${uB.toPrecision(jB.precision)})`)
      }
      return nB.join(", ")
    }

    function JI(BB, jB) {
      const zB = [];
      for (let QB = 0; QB < BB.length / 2; QB++) {
        const nB = BB[2 * QB],
          dB = BB[2 * QB + 1];
        zB.push(`(${nB.toPrecision(jB.precision)}, ${(1-dB).toPrecision(jB.precision)})`)
      }
      return zB.join(", ")
    }

    function mI(BB, jB, zB, QB) {
      const nB = BB.getVerticesData(aB.d.PositionKind),
        dB = BB.getVerticesData(aB.d.NormalKind);
      if (nB && dB) return `\n\tdef Mesh "Geometry"\n\t{\n        uniform token orientation = "${zB}"\n\t\tint[] faceVertexCounts = [${function(BB){const jB=BB.dQB()?.length?BB.getTotalIndices():BB.getTotalVertices();return Array(jB/3).fill(3).join(", ")}(BB)}]\n\t\tint[] faceVertexIndices = [${function(BB){const jB=BB.dQB(),zB=jB?.length??BB.getTotalVertices(),QB=[];if(null!==jB)for(let nB=0;nB<zB;nB++)QB.push(jB[nB]);else for(let nB=0;nB<zB;nB++)QB.push(nB);return QB.join(", ")}(BB)}]\n\t\tnormal3f[] normals = [${sI(dB,jB,void 0,QB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)\n\t\tpoint3f[] points = [${sI(nB,jB,void 0,QB)}]\n        ${function(BB,jB){let zB="";for(let nB=0;nB<4;nB++){const QB=nB>0?nB:"",dB=BB.getVerticesData(aB.d.UVKind+(QB?QB+1:""));dB&&(zB+=`\n\t\ttexCoord2f[] primvars:st${QB} = [${JI(dB,jB)}] (\n\t\t\tinterpolation = "vertex"\n\t\t)`)}const QB=BB.getVerticesData(aB.d.ColorKind);return QB&&(zB+=`\
      n\ tcolor3f[] primvars: displayColor = [$ {
        sI(QB, jB, QB.length / BB.getTotalVertices())
      }](\n\ t\ tinterpolation = "vertex"\
        n\ t\ t)`),zB}(BB,jB)}\n\t\tuniform token subdivisionScheme = "none"\n\t}\n`
    }

    function yI(BB, jB, zB, QB) {
      return `\n        def "Geometry"\n        {\n        ${mI(BB,jB,zB,QB)}\n        }\n        `
    }

    function kI(BB) {
      let jB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      return jB += BB, fflate.strToU8(jB)
    }

    function GI(BB) {
      const jB = BB.m;
      return `( ${LI(jB,0)}, ${LI(jB,4)}, ${LI(jB,8)}, ${LI(jB,12)} )`
    }

    function LI(BB, jB) {
      return `(${BB[jB+0]}, ${BB[jB+1]}, ${BB[jB+2]}, ${BB[jB+3]})`
    }

    function gI(BB, jB) {
      const zB = "Object_" + BB.uniqueId,
        QB = GI(jB);
      return `def Xform "${zB}" (\n\tprepend references = @./geometries/Geometry_${BB.geometry.uniqueId}.usda@</Geometry>\n\tprepend apiSchemas = ["MaterialBindingAPI"]\n)\n{\n\tmatrix4d xformOp:transform = ${QB}\n\tuniform token[] xformOpOrder = ["xformOp:transform"]\t\n\n    rel material:binding = </Root/Materials/Material_${BB.material.uniqueId}>\n}\n\n`
    }

    function tI(BB) {
      switch (BB) {
        case MB.e.TEXTURE_CLAMP_ADDRESSMODE:
          return "clamp";
        case MB.e.TEXTURE_MIRROR_ADDRESSMODE:
          return "mirror";
        case MB.e.TEXTURE_WRAP_ADDRESSMODE:
        default:
          return "repeat"
      }
    }

    function SI(BB) {
      return `(${BB.x}, ${BB.y})`
    }

    function MI(BB) {
      return `(${BB.r}, ${BB.g}, ${BB.b})`
    }

    function EI(BB) {
      return "image/jpeg" === BB || "image/png" === BB
    }

    function iI(BB, jB, zB, nB, dB, IB) {
      const NB = BB.getInternalTexture().uniqueId + "_" + BB.invertY,
        UB = BB.mimeType || (0, uB.b)(BB.getInternalTexture()?.url ?? ""),
        aB = EI(UB) ? UB : "image/png",
        pB = "image/jpeg" === aB ? "jpg" : "png";
      dB[NB] = {
        texture: BB,
        mimeType: aB,
        ext: pB
      };
      const rB = BB.coordinatesIndex > 0 ? "st" + BB.coordinatesIndex : "st",
        sB = new QB.Vector2(BB.uScale, BB.vScale),
        JB = new QB.Vector2(BB.uOffset, BB.vOffset),
        mB = BB.wAng,
        yB = Math.sin(mB),
        kB = Math.cos(mB);
      return JB.y = 1 - JB.y - sB.y, JB.x += yB * sB.x, JB.y += (1 - kB) * sB.y, `\n    def Shader "PrimvarReader_${zB}"\n    {\n        uniform token info:id = "UsdPrimvarReader_float2"\n        float2 inputs:fallback = (0.0, 0.0)\n        token inputs:varname = "${rB}"\n        float2 outputs:result\n    }\n\n    def Shader "Transform2d_${zB}"\n    {\n        uniform token info:id = "UsdTransform2d"\n        token inputs:in.connect = </Root/Materials/Material_${jB.uniqueId}/PrimvarReader_${zB}.outputs:result>\n        float inputs:rotation = ${(mB*(180/Math.PI)).toFixed(IB.precision)}\n        float2 inputs:scale = ${SI(sB)}\n        float2 inputs:translation = ${SI(JB)}\n        float2 outputs:result\n    }\n\n    def Shader "Texture_${BB.uniqueId}_${zB}"\n    {\n        uniform token info:id = "UsdUVTexture"\n        asset inputs:file = @textures/Texture_${NB}.${pB}@\n        float2 inputs:st.connect = </Root/Materials/Material_${jB.uniqueId}/Transform2d_${zB}.outputs:result>\n        ${nB?"float4 inputs:scale = "+function(BB){return`(${BB.r}, ${BB.g}, ${BB.b}, 1.0)`}(nB):""}\n        token inputs:sourceColorSpace = "${BB.gammaSpace?"sRGB":"raw"}"\n        token inputs:wrapS = "${tI(BB.wrapU)}"\n        token inputs:wrapT = "${tI(BB.wrapV)}"\n        float outputs:r\n        float outputs:g\n        float outputs:b\n        float3 outputs:rgb\n        ${jB.needAlphaBlending()||jB.needAlphaTesting()?"float outputs:a":""}\n    }`
    }

    function qI(BB, jB, zB) {
      const QB = "\t\t\t",
        nB = [],
        dB = [],
        {
          diffuseMap: IB,
          diffuse: NB,
          alphaCutOff: uB,
          emissiveMap: UB,
          emissive: aB,
          normalMap: pB,
          roughnessMap: rB,
          roughnessChannel: sB,
          roughness: JB,
          metalnessMap: mB,
          metalnessChannel: kB,
          metalness: GB,
          aoMap: LB,
          aoMapChannel: gB,
          aoMapIntensity: tB,
          alphaMap: SB,
          ior: MB,
          clearCoatEnabled: EB,
          clearCoat: iB,
          clearCoatMap: qB,
          clearCoatRoughness: fB,
          clearCoatRoughnessMap: oB
        } = function(BB) {
          const jB = {
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
          return BB instanceof dQ.StandardMaterial ? {
            ...jB,
            diffuseMap: BB.diffuseTexture,
            diffuse: BB.diffuseColor,
            alphaCutOff: BB.alphaCutOff,
            emissiveMap: BB.emissiveTexture,
            emissive: BB.emissiveColor,
            roughness: 1,
            alphaMap: BB.opacityTexture
          } : BB instanceof Sj ? {
            ...jB,
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
          } : jB
        }(BB);
      return null !== IB ? (nB.push(`${QB}color3f inputs:diffuseColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${IB.uniqueId}_diffuse.outputs:rgb>`), BB.needAlphaBlending() ? nB.push(`${QB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${IB.uniqueId}_diffuse.outputs:a>`) : BB.needAlphaTesting() && (nB.push(`${QB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${IB.uniqueId}_diffuse.outputs:a>`), nB.push(`${QB}float inputs:opacityThreshold = ${uB}`)), dB.push(iI(IB, BB, "diffuse", NB, jB, zB))) : nB.push(`${QB}color3f inputs:diffuseColor = ${MI(NB||yB.Color3.White())}`), null !== UB ? (nB.push(`${QB}color3f inputs:emissiveColor.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${UB.uniqueId}_emissive.outputs:rgb>`), dB.push(iI(UB, BB, "emissive", aB, jB, zB))) : aB && aB.toLuminance() > 0 && nB.push(`${QB}color3f inputs:emissiveColor = ${MI(aB)}`), null !== pB && (nB.push(`${QB}normal3f inputs:normal.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${pB.uniqueId}_normal.outputs:rgb>`), dB.push(iI(pB, BB, "normal", null, jB, zB))), null !== LB && (nB.push(`${QB}float inputs:occlusion.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${LB.uniqueId}_occlusion.outputs:${gB}>`), dB.push(iI(LB, BB, "occlusion", new yB.Color3(tB, tB, tB), jB, zB))), null !== rB ? (nB.push(`${QB}float inputs:roughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${rB.uniqueId}_roughness.outputs:${sB}>`), dB.push(iI(rB, BB, "roughness", new yB.Color3(JB, JB, JB), jB, zB))) : nB.push(`${QB}float inputs:roughness = ${JB}`), null !== mB ? (nB.push(`${QB}float inputs:metallic.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${mB.uniqueId}_metallic.outputs:${kB}>`), dB.push(iI(mB, BB, "metallic", new yB.Color3(GB, GB, GB), jB, zB))) : nB.push(`${QB}float inputs:metallic = ${GB}`), null !== SB ? (nB.push(`${QB}float inputs:opacity.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${SB.uniqueId}_opacity.outputs:r>`), nB.push(`${QB}float inputs:opacityThreshold = 0.0001`), dB.push(iI(SB, BB, "opacity", null, jB, zB))) : nB.push(`${QB}float inputs:opacity = ${BB.alpha}`), EB && (null !== qB ? (nB.push(`${QB}float inputs:clearcoat.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${qB.uniqueId}_clearcoat.outputs:r>`), dB.push(iI(qB, BB, "clearcoat", new yB.Color3(iB, iB, iB), jB, zB))) : nB.push(`${QB}float inputs:clearcoat = ${iB}`), null !== oB ? (nB.push(`${QB}float inputs:clearcoatRoughness.connect = </Root/Materials/Material_${BB.uniqueId}/Texture_${oB.uniqueId}_clearcoatRoughness.outputs:g>`), dB.push(iI(oB, BB, "clearcoatRoughness", new yB.Color3(fB, fB, fB), jB, zB))) : nB.push(`${QB}float inputs:clearcoatRoughness = ${fB}`)), nB.push(`${QB}float inputs:ior = ${MB}`), `\n\tdef Material "Material_${BB.uniqueId}"\n\t{\n\t\tdef Shader "PreviewSurface"\n\t\t{\n\t\t\tuniform token info:id = "UsdPreviewSurface"\n${nB.join("\n")}\n\t\t\tint inputs:useSpecularWorkflow = 0\n\t\t\ttoken outputs:surface\n\t\t}\n\n\t\ttoken outputs:surface.connect = </Root/Materials/Material_${BB.uniqueId}/PreviewSurface.outputs:surface>\n\n${dB.join("\n")}\n\n\t}\n`
    }

    function fI(BB) {
      BB.computeWorldMatrix(!0);
      const jB = BB.getWorldMatrix().clone(),
        zB = BB.aY().useRightHandedSystem;
      let QB = BB.material?._getEffectiveOrientation(BB) ?? BB.sideOrientation,
        IB = !zB,
        NB = BB.parent;
      for (; NB;) {
        if (hz(NB, zB) && null === NB.parent) {
          zB || (jB.multiplyToRef(NB.getWorldMatrix().invert(), jB), QB = QB === dB.b.ClockWiseSideOrientation ? dB.b.CounterClockWiseSideOrientation : dB.b.ClockWiseSideOrientation), IB = !1;
          break
        }
        NB = NB.parent
      }
      return jB.determinant() < 0 && nB.Tools.Warn(`Mesh ${BB.name} has a negative scale, which may look incorrect in destinations like QuickLook.`), {
        matrix: jB,
        windingOrder: QB === dB.b.ClockWiseSideOrientation ? "leftHanded" : "rightHanded",
        convertToRightHanded: IB
      }
    }
    async function oI(BB, jB, zB) {
      const dB = {
        fflateUrl: "https://unpkg.com/fflate@0.8.2",
        includeAnchoringProperties: !0,
        anchoringType: "plane",
        planeAnchoringAlignment: "horizontal",
        modelFileName: "model.usda",
        precision: 5,
        exportCamera: !1,
        cameraSensorWidth: 35,
        ...jB
      };
      "undefined" === typeof fflate && await nB.Tools.LoadScriptAsync(dB.fflateUrl);
      const IB = {};
      IB[dB.modelFileName] = null;
      let NB = '#usda 1.0\n    (\n        customLayerData = {\n            string creator = "Babylon.js USDZExportAsync"\n        }\n        defaultPrim = "Root"\n        metersPerUnit = 1\n        upAxis = "Y"\n    )';
      NB += function(BB) {
        return `def Xform "Root"\n    {\n        def Scope "Scenes" (\n            kind = "sceneLibrary"\n        )\n        {\n            def Xform "Scene" (\n                customData = {\n                    bool preliminary_collidesWithEnvironment = 0\n                    string sceneName = "Scene"\n                }\n                sceneName = "Scene"\n            )\n            {${!0===BB.includeAnchoringProperties?`\n\t\ttoken preliminary:anchoring:type = "${BB.anchoringType}"\n\t\ttoken preliminary:planeAnchoring:alignment = "${BB.planeAnchoringAlignment}"`:""}\n            `
      }(dB);
      const uB = {};
      for (const QB of BB.meshes) {
        if (0 === QB.getTotalVertices()) continue;
        const BB = QB,
          jB = BB.geometry,
          UB = BB.material;
        if (!UB || !jB || zB && !zB(BB)) continue;
        if (-1 !== ["StandardMaterial", "PBRMaterial", "PBRMetallicRoughnessMaterial"].indexOf(UB.getClassName())) {
          const zB = "geometries/Geometry_" + jB.uniqueId + ".usda",
            {
              matrix: QB,
              windingOrder: nB,
              convertToRightHanded: aB
            } = fI(BB);
          if (!(zB in IB)) {
            const BB = yI(jB, dB, nB, aB);
            IB[zB] = kI(BB)
          }
          UB.uniqueId in uB || (uB[UB.uniqueId] = UB), NB += gI(BB, QB)
        } else nB.Tools.Warn("USDZExportAsync does not support this material type: " + UB.getClassName())
      }
      BB.activeCamera && dB.exportCamera && (NB += function(BB, jB) {
        const zB = "Camera_" + BB.uniqueId,
          nB = GI(QB.Matrix.RotationY(Math.PI).multiply(BB.getWorldMatrix()));
        if (BB.mode === MB.e.ORTHOGRAPHIC_CAMERA) return `def Camera "${zB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${nB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(jB.precision)}, ${BB.maxZ.toPrecision(jB.precision)})\n\t\t\tfloat horizontalAperture = ${(10*(Math.abs(BB.orthoLeft||1)+Math.abs(BB.orthoRight||1))).toPrecision(jB.precision)}\n\t\t\tfloat verticalAperture = ${(10*(Math.abs(BB.orthoTop||1)+Math.abs(BB.orthoBottom||1))).toPrecision(jB.precision)}\n\t\t\ttoken projection = "orthographic"\n\t\t}\n\t\n\t`;
        {
          const QB = BB.wJ().getAspectRatio(BB),
            dB = jB.cameraSensorWidth || 35;
          return `def Camera "${zB}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${nB}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${BB.minZ.toPrecision(jB.precision)}, ${BB.maxZ.toPrecision(jB.precision)})\n\t\t\tfloat focalLength = ${(dB/(2*Math.tan(.5*BB.fov))).toPrecision(jB.precision)}\n            token projection = "perspective"\n\t\t\tfloat horizontalAperture = ${(dB*QB).toPrecision(jB.precision)}\n\t\t\tfloat verticalAperture = ${(dB/QB).toPrecision(jB.precision)}            \n\t\t}\n\t\n\t`
        }
      }(BB.activeCamera, dB)), NB += "\n            }\n        }";
      const UB = {};
      NB += function(BB, jB, zB) {
        const QB = [];
        for (const nB in BB) {
          const dB = BB[nB];
          QB.push(qI(dB, jB, zB))
        }
        return `\n    def "Materials"\n{\n${QB.join("")}\n}\n\n`
      }(uB, UB, dB), NB += "\n    }", IB[dB.modelFileName] = fflate.strToU8(NB);
      for (const QB in UB) {
        const {
          texture: BB,
          ext: jB,
          mimeType: zB
        } = UB[QB], nB = await kz(BB);
        if (nB && EI(nB.mimeType) && nB.mimeType === zB) IB[`textures/Texture_${QB}.${jB}`] = new Uint8Array(nB.data);
        else {
          const nB = BB.getSize(),
            dB = await (0, gB.i)(BB),
            NB = await EB.DumpTools.DumpDataAsync(nB.width, nB.height, dB, zB, void 0, !1, !0);
          IB[`textures/Texture_${QB}.${jB}`] = new Uint8Array(NB).slice()
        }
      }
      let aB = 0;
      for (const QB in IB) {
        const BB = IB[QB];
        if (!BB) continue;
        aB += 34 + QB.length;
        const jB = 63 & aB;
        if (4 !== jB) {
          const zB = new Uint8Array(64 - jB);
          IB[QB] = [BB, {
            extra: {
              12345: zB
            }
          }]
        }
        aB = BB.length
      }
      return fflate.zipSync(IB, {
        level: 0
      })
    }
    var HI = zB(41197);
    class DI {
      static Export(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (!BB || 0 === BB.bones.length) throw new Error("Invalid or empty skeleton provided");
        let QB = jB;
        jB && 0 !== jB.length || (QB = BB.animations.map((BB => BB.name)));
        let nB = null;
        for (const UB of QB) {
          const jB = BB.getAnimationRange(UB);
          jB && (nB = nB ? new HI.b("animation-range", Math.min(nB.from, jB.from), Math.max(nB.to, jB.to)) : jB)
        }
        if (!nB && (BB.animations.length > 0 && (nB = BB.getAnimationRange(BB.animations[0].name)), !nB)) throw new Error("No animation range found in skeleton");
        const dB = zB || 1 / (BB.animations[0]?.framePerSecond || 30),
          IB = this._BuildBoneHierarchy(BB, QB);
        let NB = 0;
        for (const UB of IB) UB.positionKeys.length > 0 && (NB = Math.max(NB, UB.positionKeys.length)), UB.rotationKeys.length > 0 && (NB = Math.max(NB, UB.rotationKeys.length));
        0 === NB && (NB = Math.floor((nB.to - nB.from) / dB) + 1);
        let uB = "";
        return uB += "HIERARCHY\n", uB += this._ExportHierarchy(IB, 0), uB += "MOTION\n", uB += `Frames: ${NB}\n`, uB += `Frame Time: ${dB.toFixed(6)}\n`, uB += this._ExportMotionData(IB, NB, 0, QB), uB
      }
      static _BuildBoneHierarchy(BB, jB) {
        const zB = new Map,
          QB = [];
        for (const nB of BB.bones) {
          const BB = {
            bone: nB,
            children: [],
            hasPositionChannels: !1,
            hasRotationChannels: !1,
            positionKeys: [],
            rotationKeys: []
          };
          zB.set(nB, BB)
        }
        for (const nB of BB.bones) {
          const BB = zB.get(nB);
          if (nB.animations.length > 0)
            for (const zB of nB.animations) jB.includes(zB.name) && ("position" === zB.targetProperty ? (BB.hasPositionChannels = !0, BB.positionKeys.push(...zB.getKeys())) : "rotationQuaternion" === zB.targetProperty && (BB.hasRotationChannels = !0, BB.rotationKeys.push(...zB.getKeys())));
          if (nB.getParent()) {
            const jB = zB.get(nB.getParent());
            jB && jB.children.push(BB)
          } else QB.push(BB)
        }
        return QB
      }
      static _ExportHierarchy(BB, jB) {
        let zB = "";
        const QB = "    ".repeat(jB);
        for (const nB of BB) {
          const BB = nB.bone;
          if (this._IsEndSite(nB)) {
            zB += `${QB}End Site\n`, zB += `${QB}{\n`;
            const jB = this._GetBoneOffset(BB);
            zB += `${QB}    OFFSET ${jB.x.toFixed(6)} ${jB.y.toFixed(6)} ${jB.z.toFixed(6)}\n`, zB += `${QB}}\n`
          } else {
            zB += `${0===jB?"ROOT":`${QB}JOINT`} ${BB.name}\n`, zB += `${QB}{\n`;
            const dB = this._GetBoneOffset(BB);
            zB += `${QB}    OFFSET ${dB.x.toFixed(6)} ${dB.y.toFixed(6)} ${dB.z.toFixed(6)}\n`;
            const IB = [];
            nB.hasPositionChannels && IB.push("Xposition", "Yposition", "Zposition"), nB.hasRotationChannels && IB.push("Zrotation", "Xrotation", "Yrotation"), IB.length > 0 && (zB += `${QB}    CHANNELS ${IB.length} ${IB.join(" ")}\n`), nB.children.length > 0 && (zB += this._ExportHierarchy(nB.children, jB + 1)), zB += `${QB}}\n`
          }
        }
        return zB
      }
      static _IsEndSite(BB) {
        return 0 === BB.children.length
      }
      static _GetBoneOffset(BB) {
        try {
          if (!BB.getParent()) return BB.getRestMatrix().getTranslation();
          return BB.getLocalMatrix().getTranslation()
        } catch (jB) {
          return QB.KJ.Zero()
        }
      }
      static _ExportMotionData(BB, jB, zB, QB) {
        let nB = "";
        for (let dB = 0; dB < jB; dB++) {
          const jB = [];
          this._CollectFrameValues(BB, dB + zB, jB, QB), nB += jB.map((BB => BB.toFixed(6))).join(" ") + "\n"
        }
        return nB
      }
      static _CollectFrameValues(BB, jB, zB, QB) {
        for (const nB of BB)
          if (!this._IsEndSite(nB)) {
            if (nB.hasPositionChannels) {
              const BB = this._GetPositionAtFrameIndex(nB.positionKeys, jB);
              zB.push(BB.x, BB.y, BB.z)
            }
            if (nB.hasRotationChannels) {
              const BB = this._GetRotationAtFrameIndex(nB.rotationKeys, jB),
                QB = this._QuaternionToEuler(BB);
              zB.push(QB.z, QB.x, QB.y)
            }
            nB.children.length > 0 && this._CollectFrameValues(nB.children, jB, zB, QB)
          }
      }
      static _GetPositionAtFrameIndex(BB, jB) {
        if (0 === BB.length) return QB.KJ.Zero();
        return BB[Math.max(0, Math.min(jB, BB.length - 1))].value.clone()
      }
      static _GetRotationAtFrameIndex(BB, jB) {
        if (0 === BB.length) return QB.Quaternion.Identity();
        return BB[Math.max(0, Math.min(jB, BB.length - 1))].value.clone()
      }
      static _QuaternionToEuler(BB) {
        const jB = new QB.Matrix;
        BB.toRotationMatrix(jB);
        const zB = jB.m;
        let dB, IB, NB;
        const uB = Math.sqrt(zB[0] * zB[0] + zB[1] * zB[1]);
        return uB > Yz.c ? (dB = Math.atan2(zB[6], zB[10]), IB = Math.atan2(-zB[2], uB), NB = Math.atan2(zB[1], zB[0])) : (dB = Math.atan2(-zB[9], zB[5]), IB = Math.atan2(-zB[2], uB), NB = 0), new QB.KJ(nB.Tools.ToDegrees(dB), nB.Tools.ToDegrees(IB), nB.Tools.ToDegrees(NB))
      }
    }

    function FI(BB) {
      return "string" === typeof BB?.name
    }
    const YI = Symbol("__xml:meta$__"),
      VI = Symbol("__xml:name$__");

    function hI(BB, jB) {
      Object.prototype.hasOwnProperty.call(BB.metadata, YI) || (BB.metadata[YI] = []), BB.metadata[YI].push(jB)
    }

    function XI(BB) {
      return (jB, zB) => {
        jB[VI] = BB
      }
    }

    function ZI() {
      return (BB, jB) => hI(jB, {
        kind: "none",
        prop: String(jB.name),
        ignore: !0
      })
    }

    function AI(BB) {
      return (jB, zB) => hI(zB, {
        kind: "attr",
        prop: String(zB.name),
        ...BB
      })
    }

    function TI(BB) {
      return (jB, zB) => hI(zB, {
        kind: "elem",
        prop: String(zB.name),
        ...BB
      })
    }

    function PI(BB) {
      const jB = "function" === typeof BB ? BB : BB?.constructor,
        zB = jB?.[Symbol.metadata];
      if (!zB) return [];
      const QB = [];
      let nB = zB;
      for (; nB;) Object.prototype.hasOwnProperty.call(nB, YI) && QB.push(...nB[YI]), nB = Object.getPrototypeOf(nB);
      return QB
    }

    function WI(BB) {
      const jB = BB?.constructor?.[VI];
      return jB || void 0
    }

    function eI(BB) {
      return /^[A-Za-z_][A-Za-z0-9._-]*$/.test(BB)
    }

    function lI(BB) {
      if (FI(BB)) return BB;
      const jB = (BB ?? "").trim();
      if (!jB) return {
        name: ""
      };
      const zB = jB.indexOf(":");
      if (-1 === zB) return {
        name: jB
      };
      if (-1 !== jB.indexOf(":", zB + 1)) return {
        name: jB
      };
      const QB = jB.slice(0, zB),
        nB = jB.slice(zB + 1);
      return eI(QB) && eI(nB) ? {
        ns: QB,
        name: nB
      } : {
        name: jB
      }
    }

    function wI(BB, jB) {
      return jB ? `${jB}:${BB}` : BB
    }
    const xI = Object.freeze({
        eps: 1e-6,
        maxDecimalsCap: 15,
        trimTrailingZeros: !0,
        allowScientific: !1,
        snapNearZero: !0
      }),
      KI = Object.freeze({
        number: xI
      });

    function CI(BB) {
      const jB = BB?.eps ?? xI.eps;
      return {
        eps: jB,
        maxDecimalsCap: BB?.maxDecimalsCap ?? xI.maxDecimalsCap,
        trimTrailingZeros: BB?.trimTrailingZeros ?? xI.trimTrailingZeros,
        fixedDecimals: BB?.fixedDecimals,
        allowScientific: BB?.allowScientific ?? xI.allowScientific,
        snapNearZero: BB?.snapNearZero ?? xI.snapNearZero,
        zeroThreshold: BB?.zeroThreshold ?? jB,
        perAttributeEps: BB?.perAttributeEps
      }
    }

    function cI(BB) {
      return {
        number: CI(BB?.number)
      }
    }
    class bI {
      constructor(BB) {
        if (this.o = BB, this._o = BB.number, !Number.isFinite(this._o.eps) || this._o.eps <= 0) throw new Error("opts.eps must be a finite, positive number")
      }
      toString(BB) {
        if (!Number.isFinite(BB)) throw new Error(`Cannot format non-finite number: ${BB}`);
        const jB = this._o,
          zB = this._clampInt(jB.maxDecimalsCap ?? 15, 0, 20),
          QB = jB.trimTrailingZeros ?? !0,
          nB = jB.snapNearZero ?? !0,
          dB = jB.zeroThreshold ?? jB.eps,
          IB = 1 / jB.eps;
        let NB, uB = Math.round(BB * IB) / IB;
        if (Object.is(uB, -0) && (uB = 0), nB && Math.abs(uB) <= dB && (uB = 0), NB = void 0 !== jB.fixedDecimals ? this._clampInt(jB.fixedDecimals, 0, zB) : this._clampInt(Math.ceil(-Math.log10(jB.eps)), 0, zB), jB.allowScientific, 0 === NB) return String(Math.trunc(uB));
        let UB = uB.toFixed(NB);
        if (QB && void 0 === jB.fixedDecimals && (UB = UB.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(UB)) throw new Error(`Scientific notation not allowed in XML output: ${UB}`);
        return UB
      }
      _clampInt(BB, jB, zB) {
        return Number.isFinite(BB) ? (BB = Math.trunc(BB), Math.max(jB, Math.min(zB, BB))) : jB
      }
    }

    function vI(BB) {
      return BB instanceof Date
    }

    function RI(BB) {
      return "string" === typeof BB
    }

    function OI(BB) {
      return "string" === typeof BB || "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || vI(BB)
    }

    function BN(BB) {
      return "number" === typeof BB || "boolean" === typeof BB || "bigint" === typeof BB || vI(BB)
    }
    class jN {
      constructor(BB, jB) {
        this._ns = new Map, this._prefixCount = 0, this._builder = BB, this._format = cI(jB), this._nFmt = new bI(this._format)
      }
      withNamespace() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        for (const QB of jB) this._assignNamespace(QB);
        return this
      }
      serialize(BB, jB) {
        if (!(jB = jB ?? WI(BB))) throw new Error("can not find name for given object");
        const zB = lI(jB);
        zB.ns && this._assignNamespace(zB.ns, "xmlns"), this._gatherNamespaces(BB, new WeakSet);
        const QB = this._builder.ele(null, zB.name);
        for (const [nB, dB] of Array.from(this._ns.entries())) QB.att("xmlns", dB, nB);
        this._writeObjectContent(QB, BB, (new WeakSet).add(BB)), this._builder.end()
      }
      _writeObject(BB, jB, zB) {
        if (zB.has(jB)) return;
        if (zB.add(jB), Array.isArray(jB)) {
          for (const QB of jB) BN(QB) || (RI(QB) ? this._builder.text(QB) : this._writeObject(BB, QB, zB));
          return
        }
        const QB = WI(jB);
        if (!QB) return;
        const nB = lI(QB),
          dB = this._getPrefix(nB),
          IB = wI(nB.name, dB);
        BB.ele(null, IB), this._writeObjectContent(BB, jB, zB), this._builder.end()
      }
      _getPrefix(BB) {
        if (BB.ns) {
          const jB = this._ns.get(BB.ns.toLowerCase());
          if ("xmlns" !== jB) return jB
        }
      }
      _writeObjectContent(BB, jB, zB) {
        const QB = PI(jB) ?? [],
          nB = new Map;
        for (const IB of QB) {
          const BB = nB.get(IB.prop) ?? [];
          BB.push(IB), nB.set(IB.prop, BB)
        }
        const dB = Object.keys(jB).sort(((BB, jB) => {
          const zB = (nB.get(BB) ?? []).some((BB => "attr" === BB.kind));
          return zB === (nB.get(jB) ?? []).some((BB => "attr" === BB.kind)) ? 0 : zB ? -1 : 1
        }));
        for (const IB of dB) {
          const QB = jB[IB];
          if (null === QB || void 0 === QB) continue;
          const dB = nB.get(IB);
          if (dB) {
            if (dB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const jB of dB) {
              const zB = jB.name ?? jB.prop.toLowerCase();
              if (zB) switch (jB.kind) {
                case "attr": {
                  let nB = null;
                  if ("number" === typeof QB && this._nFmt && (nB = this._nFmt.toString(QB)), jB.formatter) {
                    nB = new jB.formatter(this._format).toString(QB)
                  }
                  if (nB = nB ?? QB.toString(), nB) {
                    const jB = lI(zB),
                      QB = this._getPrefix(jB),
                      dB = wI(jB.name, QB);
                    BB.att(null, dB, nB)
                  }
                  break
                }
              }
            }
          } else BN(QB) || (RI(QB) ? this._builder.text(QB) : this._writeObject(BB, QB, zB))
        }
      }
      _gatherNamespaces(BB, jB) {
        if (jB.has(BB)) return;
        if (jB.add(BB), Array.isArray(BB)) {
          for (const zB of BB) OI(zB) || this._gatherNamespaces(zB, jB);
          return
        }
        const zB = WI(BB);
        zB && this._assignNamespace(zB);
        const QB = PI(BB) ?? [],
          nB = new Map;
        for (const IB of QB) {
          const BB = nB.get(IB.prop) ?? [];
          BB.push(IB), nB.set(IB.prop, BB)
        }
        const dB = [];
        for (const IB of Object.keys(BB)) {
          const jB = BB[IB];
          if (null === jB || void 0 === jB) continue;
          const zB = nB.get(IB);
          if (zB) {
            if (zB.some((BB => !0 === BB.ignore || "none" === BB.kind))) continue;
            for (const BB of zB) BB.name && this._assignNamespace(BB.name)
          }
          dB.push(jB)
        }
        for (const IB of dB) OI(IB) || this._gatherNamespaces(IB, jB)
      }
      _assignNamespace(BB, jB) {
        const zB = lI(BB);
        if (zB?.ns) {
          const BB = zB.ns.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, jB ?? this._buildNsPrefix(BB))
        } else if ("xmlns" === jB) {
          const BB = zB.name.toLowerCase();
          this._ns.get(BB) || this._ns.set(BB, jB ?? this._buildNsPrefix(BB))
        }
      }
      _buildNsPrefix(BB) {
        let jB, zB = !1;
        do {
          jB = "ns" + this._prefixCount++;
          for (const BB of Array.from(this._ns.values()))
            if (BB === jB) {
              zB = !0;
              break
            }
        } while (zB);
        return jB
      }
    }
    class zN {}
    var QN;
    zN.OpenTag = "<", zN.CloseTag = ">", zN.Slash = "/", zN.Question = "?", zN.Quote = '"', zN.Equal = "=", zN.Space = " ", zN.Semicolon = ":", zN.Dec = "<?xml", zN.Xml = "xml", zN.Xmlns = "xmlns", zN.Xsi = "xsi", zN.VersionKeyword = "version", zN.EncodingKeyword = "encoding", zN.StandaloneKeyword = "standalone",
      function(BB) {
        BB[BB.Declaration = 0] = "Declaration", BB[BB.Tag = 1] = "Tag", BB[BB.Attribute = 2] = "Attribute", BB[BB.Text = 3] = "Text"
      }(QN || (QN = {}));
    class nN {
      constructor(BB) {
        this._ctxStack = [], this._d = 0, this._w = BB
      }
      dec(BB, jB, zB) {
        return this._w.write(zN.Dec), this._writeAttStr(zN.VersionKeyword, BB), jB && this._writeAttStr(zN.EncodingKeyword, jB), void 0 !== zB && this._writeAttStr(zN.StandaloneKeyword, zB ? "yes" : "no"), this._w.write(zN.Question, zN.CloseTag), this
      }
      att(BB, jB, zB) {
        const QB = this._peekContext();
        if (!QB) throw new Error("att() without open element");
        if (QB.closed) throw new Error(`att() after start tag closed for <${QB.name}>`);
        if (this._isXmlnsDecl(BB, jB)) {
          if (jB === zN.Xmlns) QB.defaultNs = zB, this._registerNamespace(QB, "", zB), this._writeAttStr(zN.Xmlns, zB);
          else if (BB) this._registerNamespace(QB, jB, zB), this._writeAttStr(`${BB}:${jB}`, zB);
          else {
            const BB = jB.slice(6);
            this._registerNamespace(QB, BB, zB), this._writeAttStr(jB, zB)
          }
          return QB.lastToken = QN.Attribute, this
        }
        let nB = jB;
        if (BB) {
          nB = `${this._ensurePrefixDeclared(QB,BB)}:${jB}`
        }
        return QB.lastToken = QN.Attribute, this._writeAttStr(nB, zB), this
      }
      ele(BB, jB) {
        const zB = this._peekContext();
        zB && this._closeOpenTagIfNeeded(zB);
        let QB = jB;
        if (BB) {
          QB = `${this._lookupPrefix(BB)??BB}:${jB}`
        }
        return this._pushContext(QB, ++this._d), this._w.write(zN.OpenTag, QB), this
      }
      text(BB) {
        const jB = this._peekContext();
        if (!jB) throw new Error("text() without open element");
        return this._closeOpenTagIfNeeded(jB), jB.lastToken = QN.Text, this._w.write(this._escText(BB)), this
      }
      end() {
        const BB = this._popContext();
        return BB && (this._d--, BB.closed ? this._w.write(zN.OpenTag, zN.Slash, BB.name, zN.CloseTag) : this._w.write(zN.Slash, zN.CloseTag)), this
      }
      _pushContext(BB, jB) {
        const zB = new nN.Context(BB, jB);
        return this._ctxStack.push(zB), zB
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
      _writeAttStr(BB, jB) {
        this._w.write(zN.Space, BB, zN.Equal, zN.Quote, this._escAttr(jB), zN.Quote)
      }
      _lookupPrefix(BB) {
        let jB = this._ctxStack.length - 1;
        if (jB >= 0)
          do {
            const zB = this._ctxStack[jB--],
              QB = zB.ns2prefix?.get(BB);
            if (QB) return QB
          } while (jB >= 0)
      }
      _escText(BB) {
        return BB.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      }
      _escAttr(BB) {
        return this._escText(BB).replace(/"/g, "&quot;").replace(/'/g, "&apos;")
      }
      _isXmlnsDecl(BB, jB) {
        if (BB) return BB === zN.Xmlns;
        const zB = jB.length,
          QB = zN.Xmlns.length;
        return zB >= QB && (jB.startsWith(zN.Xmlns) && (jB.length == QB || jB[QB] == zN.Semicolon))
      }
      _registerNamespace(BB, jB, zB) {
        if (jB === zN.Xml || jB === zN.Xmlns) throw new Error(`reserved prefix '${jB}'`);
        const QB = BB.prefix2ns.get(jB);
        if (QB && QB !== zB) throw new Error(`prefix '${jB}' already bound to a different namespace`);
        BB.ns2prefix.get(zB) || BB.ns2prefix.set(zB, jB), BB.prefix2ns.set(jB, zB)
      }
      _allocPrefix(BB) {
        let jB = 1;
        for (;;) {
          const zB = "ns" + jB++;
          if (!BB.prefix2ns.has(zB)) return zB
        }
      }
      _ensurePrefixDeclared(BB, jB) {
        const zB = this._lookupPrefix(jB);
        if (zB) return zB;
        if (BB.closed) throw new Error(`can not declare namespace after start tag closed for <${BB.name}>`);
        const QB = this._allocPrefix(BB);
        return this._writeAttStr(`${zN.Xmlns}:${QB}`, jB), this._registerNamespace(BB, QB, jB), QB
      }
      _closeOpenTagIfNeeded(BB) {
        BB.closed || (this._w.write(zN.CloseTag), BB.closed = !0)
      }
    }
    nN.Context = class {
      constructor(BB, jB) {
        this.name = "", this.closed = !1, this.lastToken = null, this.ns2prefix = new Map, this.prefix2ns = new Map, this.defaultNs = null, this.name = BB, this.depth = jB
      }
    };
    class dN {
      constructor() {
        this.count = 0, this._chunks = []
      }
      write() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        if (0 === jB.length) return this;
        const QB = jB.join("");
        return this._chunks.push(QB), this.count += QB.length, this
      }
      toString() {
        return this._chunks.join("")
      }
      clear() {
        this._chunks = [], this.count = 0
      }
    }
    class IN {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this._sink = BB, this._opts = jB, this.count = 0, this._encoder = new TextEncoder, this._pending = "", this._pendingChars = 0
      }
      write() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        if (0 === jB.length) return this;
        const QB = jB.join("");
        if (0 === QB.length) return this;
        this._pending += QB, this._pendingChars += QB.length;
        const nB = this._opts.flushChars ?? 65536;
        return this._pendingChars >= nB && this.flush(), this
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
    const NN = "http://schemas.microsoft.com/3dmanufacturing/core/2015/02",
      uN = "http://schemas.microsoft.com/3dmanufacturing/trianglesets/2021/07";
    var UN, aN;
    ! function(BB) {
      BB.micron = "micron", BB.millimeter = "millimeter", BB.centimeter = "centimeter", BB.inch = "inch", BB.foot = "foot", BB.meter = "meter"
    }(UN || (UN = {})),
    function(BB) {
      BB.model = "model", BB.solidsupport = "solidsupport", BB.support = "support", BB.surface = "surface", BB.other = "other"
    }(aN || (aN = {}));
    const pN = "http://schemas.openxmlformats.org/package/2006/content-types",
      rN = "http://schemas.openxmlformats.org/package/2006/relationships";
    var sN;
    ! function(BB) {
      BB.Relationships = "application/vnd.openxmlformats-package.relationships+xml", BB.Model = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml", BB.Materials = "application/vnd.ms-package.3dmanufacturing-material+xml", BB.Colors = "application/vnd.ms-package.3dmanufacturing-colors+xml", BB.Texture = "application/vnd.ms-package.3dmanufacturing-texture+xml", BB.Texture2D = "application/vnd.ms-package.3dmanufacturing-texture2d+xml", BB.Production = "application/vnd.ms-package.3dmanufacturing-production+xml", BB.Slice = "application/vnd.ms-package.3dmanufacturing-slice+xml", BB.BeamLattice = "application/vnd.ms-package.3dmanufacturing-beamlattice+xml", BB.SecureContent = "application/vnd.ms-package.3dmanufacturing-securecontent+xml", BB.Png = "image/png", BB.Jpeg = "image/jpeg", BB.Tiff = "image/tiff", BB.Xml = "application/xml"
    }(sN || (sN = {}));
    const JN = "_rels/",
      mN = "3D/",
      yN = "3dmodel.model",
      kN = ".rels",
      GN = "[Content_Types].xml";
    class LN {
      static IsKnown(BB) {
        return LN.Known.has(BB)
      }
      static IsThreeDimModel(BB) {
        return BB === LN.ThreeDimModel
      }
    }
    LN.ThreeDimModel = "http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel", LN.Thumbnail = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/thumbnail", LN.PrintTicket = "http://schemas.microsoft.com/3dmanufacturing/2013/01/printticket", LN.MustPreserve = "http://schemas.openxmlformats.org/package/2006/relationships/mustpreserve", LN.Known = new Set([LN.ThreeDimModel, LN.Thumbnail, LN.PrintTicket, LN.MustPreserve]);
    let gN = (() => {
        let BB, jB, zB = [XI({
            ns: pN,
            name: "Types"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfContentTypes"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      tN = (() => {
        let BB, jB, zB, QB, nB = [XI({
            ns: pN,
            name: "Default"
          })],
          dB = [],
          IB = [],
          NB = [],
          uB = [],
          UB = [];
        jB = class {
          constructor(BB, jB) {
            this.ext = (0, iB.g)(this, IB, void 0), this.ct = ((0, iB.g)(this, NB), (0, iB.g)(this, uB, void 0)), (0, iB.g)(this, UB), this.ext = BB, this.ct = jB
          }
        };
        return (0, iB.k)(jB, "ThreeMfContentType"), (() => {
          const aB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: {
              ns: pN,
              name: "Extension"
            }
          })], QB = [AI({
            name: {
              ns: pN,
              name: "ContentType"
            }
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "ext",
            static: !1,
            private: !1,
            access: {
              has: BB => "ext" in BB,
              get: BB => BB.ext,
              set: (BB, jB) => {
                BB.ext = jB
              }
            },
            metadata: aB
          }, IB, NB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "ct",
            static: !1,
            private: !1,
            access: {
              has: BB => "ct" in BB,
              get: BB => BB.ct,
              set: (BB, jB) => {
                BB.ct = jB
              }
            },
            metadata: aB
          }, uB, UB), (0, iB.e)(null, BB = {
            value: jB
          }, nB, {
            kind: "class",
            name: jB.name,
            metadata: aB
          }, null, dB), jB = BB.value, aB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aB
          }), (0, iB.g)(jB, dB)
        })(), jB
      })(),
      SN = (() => {
        let BB, jB, zB = [XI({
            ns: rN,
            name: "Relationships"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.items = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfRelationships"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      MN = (() => {
        let BB, jB, zB, QB, nB, dB = [XI({
            ns: rN,
            name: "Relationship"
          })],
          IB = [],
          NB = [],
          uB = [],
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        jB = class {
          constructor(BB, jB, zB) {
            this.id = (0, iB.g)(this, NB, void 0), this.type = ((0, iB.g)(this, uB), (0, iB.g)(this, UB, void 0)), this.target = ((0, iB.g)(this, aB), (0, iB.g)(this, pB, void 0)), (0, iB.g)(this, rB), this.id = BB, this.type = jB, this.target = zB
          }
        };
        return (0, iB.k)(jB, "ThreeMfRelationship"), (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "Id"
          })], QB = [AI({
            name: "Type"
          })], nB = [AI({
            name: "Target"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, jB) => {
                BB.id = jB
              }
            },
            metadata: sB
          }, NB, uB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, jB) => {
                BB.type = jB
              }
            },
            metadata: sB
          }, UB, aB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "target",
            static: !1,
            private: !1,
            access: {
              has: BB => "target" in BB,
              get: BB => BB.target,
              set: (BB, jB) => {
                BB.target = jB
              }
            },
            metadata: sB
          }, pB, rB), (0, iB.e)(null, BB = {
            value: jB
          }, dB, {
            kind: "class",
            name: jB.name,
            metadata: sB
          }, null, IB), jB = BB.value, sB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          }), (0, iB.g)(jB, IB)
        })(), jB
      })();
    class EN {
      constructor(BB, jB, zB) {
        this.contentTypes = BB, this.relationships = jB, this.model = zB
      }
    }
    class iN {
      static Zero() {
        return new iN([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      }
      constructor(BB) {
        this.values = BB
      }
      toString() {
        return this.values.join(" ")
      }
    }
    class qN {
      constructor(BB) {
        this.o = BB, this._f = new bI(BB)
      }
      toString(BB) {
        return BB.values.map((BB => this._f.toString(BB))).join(" ")
      }
    }
    let fN = (() => {
        let BB, jB, zB, QB, nB, dB = [XI({
            ns: NN,
            name: "model"
          })],
          IB = [],
          NB = [],
          uB = [],
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        jB = class {
          constructor() {
            this.unit = (0, iB.g)(this, NB, UN.millimeter), this.requiredextensions = ((0, iB.g)(this, uB), (0, iB.g)(this, UB, void 0)), this.recommendedextensions = ((0, iB.g)(this, aB), (0, iB.g)(this, pB, void 0)), this.metadata = (0, iB.g)(this, rB)
          }
        };
        return (0, iB.k)(jB, "ThreeMfModel"), (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "unit"
          })], QB = [AI({
            name: "requiredextensions"
          })], nB = [AI({
            name: "recommendedextensions"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "unit",
            static: !1,
            private: !1,
            access: {
              has: BB => "unit" in BB,
              get: BB => BB.unit,
              set: (BB, jB) => {
                BB.unit = jB
              }
            },
            metadata: sB
          }, NB, uB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "requiredextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "requiredextensions" in BB,
              get: BB => BB.requiredextensions,
              set: (BB, jB) => {
                BB.requiredextensions = jB
              }
            },
            metadata: sB
          }, UB, aB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "recommendedextensions",
            static: !1,
            private: !1,
            access: {
              has: BB => "recommendedextensions" in BB,
              get: BB => BB.recommendedextensions,
              set: (BB, jB) => {
                BB.recommendedextensions = jB
              }
            },
            metadata: sB
          }, pB, rB), (0, iB.e)(null, BB = {
            value: jB
          }, dB, {
            kind: "class",
            name: jB.name,
            metadata: sB
          }, null, IB), jB = BB.value, sB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          })
        })(), jB.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, iB.g)(jB, IB), jB
      })(),
      oN = (() => {
        let BB, jB, zB, QB, nB, dB = [XI({
            ns: NN,
            name: "meta"
          })],
          IB = [],
          NB = [],
          uB = [],
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        jB = class {
          constructor(BB, jB, zB, QB) {
            this.name = (0, iB.g)(this, NB, void 0), this.preserve = ((0, iB.g)(this, uB), (0, iB.g)(this, UB, void 0)), this.type = ((0, iB.g)(this, aB), (0, iB.g)(this, pB, void 0)), this.value = (0, iB.g)(this, rB), this.name = BB, this.value = jB, this.preserve = zB, this.type = QB
          }
        };
        return (0, iB.k)(jB, "ThreeMfMeta"), (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "name"
          })], QB = [AI({
            name: "preserve"
          })], nB = [AI({
            name: "type"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, jB) => {
                BB.name = jB
              }
            },
            metadata: sB
          }, NB, uB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "preserve",
            static: !1,
            private: !1,
            access: {
              has: BB => "preserve" in BB,
              get: BB => BB.preserve,
              set: (BB, jB) => {
                BB.preserve = jB
              }
            },
            metadata: sB
          }, UB, aB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, jB) => {
                BB.type = jB
              }
            },
            metadata: sB
          }, pB, rB), (0, iB.e)(null, BB = {
            value: jB
          }, dB, {
            kind: "class",
            name: jB.name,
            metadata: sB
          }, null, IB), jB = BB.value, sB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          }), (0, iB.g)(jB, IB)
        })(), jB
      })(),
      HN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "metadatagroup"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.metadata = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfMetadataGroup"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      DN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "resources"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.object = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfResources"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      FN = (() => {
        let BB, jB, zB, QB, nB, dB, IB, NB, uB, UB = [XI({
            ns: NN,
            name: "object"
          })],
          aB = [],
          pB = [],
          rB = [],
          sB = [],
          JB = [],
          mB = [],
          yB = [],
          kB = [],
          GB = [],
          LB = [],
          gB = [],
          tB = [],
          SB = [],
          MB = [],
          EB = [];
        jB = class {
          constructor(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aN.model;
            this.id = (0, iB.g)(this, pB, void 0), this.type = ((0, iB.g)(this, rB), (0, iB.g)(this, sB, void 0)), this.thumbnail = ((0, iB.g)(this, JB), (0, iB.g)(this, mB, void 0)), this.partnumber = ((0, iB.g)(this, yB), (0, iB.g)(this, kB, void 0)), this.name = ((0, iB.g)(this, GB), (0, iB.g)(this, LB, void 0)), this.pid = ((0, iB.g)(this, gB), (0, iB.g)(this, tB, void 0)), this.pindex = ((0, iB.g)(this, SB), (0, iB.g)(this, MB, void 0)), this.metadatagroup = (0, iB.g)(this, EB), this.id = BB, this.type = jB
          }
        };
        return (0, iB.k)(jB, "ThreeMfObject"), (() => {
          const qB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "id"
          })], QB = [AI({
            name: "type"
          })], nB = [AI({
            name: "thumbnail"
          })], dB = [AI({
            name: "partnumber"
          })], IB = [AI({
            name: "name"
          })], NB = [AI({
            name: "pid"
          })], uB = [AI({
            name: "pindex"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, jB) => {
                BB.id = jB
              }
            },
            metadata: qB
          }, pB, rB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "type",
            static: !1,
            private: !1,
            access: {
              has: BB => "type" in BB,
              get: BB => BB.type,
              set: (BB, jB) => {
                BB.type = jB
              }
            },
            metadata: qB
          }, sB, JB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "thumbnail",
            static: !1,
            private: !1,
            access: {
              has: BB => "thumbnail" in BB,
              get: BB => BB.thumbnail,
              set: (BB, jB) => {
                BB.thumbnail = jB
              }
            },
            metadata: qB
          }, mB, yB), (0, iB.e)(null, null, dB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, jB) => {
                BB.partnumber = jB
              }
            },
            metadata: qB
          }, kB, GB), (0, iB.e)(null, null, IB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, jB) => {
                BB.name = jB
              }
            },
            metadata: qB
          }, LB, gB), (0, iB.e)(null, null, NB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, jB) => {
                BB.pid = jB
              }
            },
            metadata: qB
          }, tB, SB), (0, iB.e)(null, null, uB, {
            kind: "field",
            name: "pindex",
            static: !1,
            private: !1,
            access: {
              has: BB => "pindex" in BB,
              get: BB => BB.pindex,
              set: (BB, jB) => {
                BB.pindex = jB
              }
            },
            metadata: qB
          }, MB, EB), (0, iB.e)(null, BB = {
            value: jB
          }, UB, {
            kind: "class",
            name: jB.name,
            metadata: qB
          }, null, aB), jB = BB.value, qB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qB
          }), (0, iB.g)(jB, aB)
        })(), jB
      })(),
      YN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "mesh"
          })],
          QB = [];
        jB = class {
          constructor(BB, jB) {
            this.vertices = BB ?? new VN, this.triangles = jB ?? new XN
          }
        };
        return (0, iB.k)(jB, "ThreeMfMesh"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      VN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "vertices"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.vertex = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfVertices"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      hN = (() => {
        let BB, jB, zB, QB, nB, dB = [XI({
            ns: NN,
            name: "vertex"
          })],
          IB = [],
          NB = [],
          uB = [],
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        jB = class {
          constructor() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x = (0, iB.g)(this, NB, void 0), this.y = ((0, iB.g)(this, uB), (0, iB.g)(this, UB, void 0)), this.z = ((0, iB.g)(this, aB), (0, iB.g)(this, pB, void 0)), (0, iB.g)(this, rB), this.x = BB, this.y = jB, this.z = zB
          }
        };
        return (0, iB.k)(jB, "ThreeMfVertex"), (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "x"
          })], QB = [AI({
            name: "y"
          })], nB = [AI({
            name: "z"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "x",
            static: !1,
            private: !1,
            access: {
              has: BB => "x" in BB,
              get: BB => BB.x,
              set: (BB, jB) => {
                BB.x = jB
              }
            },
            metadata: sB
          }, NB, uB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "y",
            static: !1,
            private: !1,
            access: {
              has: BB => "y" in BB,
              get: BB => BB.y,
              set: (BB, jB) => {
                BB.y = jB
              }
            },
            metadata: sB
          }, UB, aB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "z",
            static: !1,
            private: !1,
            access: {
              has: BB => "z" in BB,
              get: BB => BB.z,
              set: (BB, jB) => {
                BB.z = jB
              }
            },
            metadata: sB
          }, pB, rB), (0, iB.e)(null, BB = {
            value: jB
          }, dB, {
            kind: "class",
            name: jB.name,
            metadata: sB
          }, null, IB), jB = BB.value, sB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          }), (0, iB.g)(jB, IB)
        })(), jB
      })(),
      XN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "triangles"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.triangle = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfTriangles"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      ZN = (() => {
        let BB, jB, zB, QB, nB, dB, IB, NB, uB, UB = [XI({
            ns: NN,
            name: "triangle"
          })],
          aB = [],
          pB = [],
          rB = [],
          sB = [],
          JB = [],
          mB = [],
          yB = [],
          kB = [],
          GB = [],
          LB = [],
          gB = [],
          tB = [],
          SB = [],
          MB = [],
          EB = [];
        jB = class {
          constructor(BB, jB, zB) {
            this.v1 = (0, iB.g)(this, pB, void 0), this.v2 = ((0, iB.g)(this, rB), (0, iB.g)(this, sB, void 0)), this.v3 = ((0, iB.g)(this, JB), (0, iB.g)(this, mB, void 0)), this.p1 = ((0, iB.g)(this, yB), (0, iB.g)(this, kB, void 0)), this.p2 = ((0, iB.g)(this, GB), (0, iB.g)(this, LB, void 0)), this.p3 = ((0, iB.g)(this, gB), (0, iB.g)(this, tB, void 0)), this.pid = ((0, iB.g)(this, SB), (0, iB.g)(this, MB, void 0)), (0, iB.g)(this, EB), this.v1 = BB, this.v2 = jB, this.v3 = zB
          }
        };
        return (0, iB.k)(jB, "ThreeMfTriangle"), (() => {
          const qB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "v1"
          })], QB = [AI({
            name: "v2"
          })], nB = [AI({
            name: "v3"
          })], dB = [AI({
            name: "p1"
          })], IB = [AI({
            name: "p2"
          })], NB = [AI({
            name: "p3"
          })], uB = [AI({
            name: "pid"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "v1",
            static: !1,
            private: !1,
            access: {
              has: BB => "v1" in BB,
              get: BB => BB.v1,
              set: (BB, jB) => {
                BB.v1 = jB
              }
            },
            metadata: qB
          }, pB, rB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "v2",
            static: !1,
            private: !1,
            access: {
              has: BB => "v2" in BB,
              get: BB => BB.v2,
              set: (BB, jB) => {
                BB.v2 = jB
              }
            },
            metadata: qB
          }, sB, JB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "v3",
            static: !1,
            private: !1,
            access: {
              has: BB => "v3" in BB,
              get: BB => BB.v3,
              set: (BB, jB) => {
                BB.v3 = jB
              }
            },
            metadata: qB
          }, mB, yB), (0, iB.e)(null, null, dB, {
            kind: "field",
            name: "p1",
            static: !1,
            private: !1,
            access: {
              has: BB => "p1" in BB,
              get: BB => BB.p1,
              set: (BB, jB) => {
                BB.p1 = jB
              }
            },
            metadata: qB
          }, kB, GB), (0, iB.e)(null, null, IB, {
            kind: "field",
            name: "p2",
            static: !1,
            private: !1,
            access: {
              has: BB => "p2" in BB,
              get: BB => BB.p2,
              set: (BB, jB) => {
                BB.p2 = jB
              }
            },
            metadata: qB
          }, LB, gB), (0, iB.e)(null, null, NB, {
            kind: "field",
            name: "p3",
            static: !1,
            private: !1,
            access: {
              has: BB => "p3" in BB,
              get: BB => BB.p3,
              set: (BB, jB) => {
                BB.p3 = jB
              }
            },
            metadata: qB
          }, tB, SB), (0, iB.e)(null, null, uB, {
            kind: "field",
            name: "pid",
            static: !1,
            private: !1,
            access: {
              has: BB => "pid" in BB,
              get: BB => BB.pid,
              set: (BB, jB) => {
                BB.pid = jB
              }
            },
            metadata: qB
          }, MB, EB), (0, iB.e)(null, BB = {
            value: jB
          }, UB, {
            kind: "class",
            name: jB.name,
            metadata: qB
          }, null, aB), jB = BB.value, qB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qB
          }), (0, iB.g)(jB, aB)
        })(), jB
      })(),
      AN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "components"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.component = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfComponents"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      TN = (() => {
        let BB, jB, zB, QB, nB = [XI({
            ns: NN,
            name: "component"
          })],
          dB = [],
          IB = [],
          NB = [],
          uB = [],
          UB = [];
        jB = class {
          constructor(BB, jB) {
            this.objectid = (0, iB.g)(this, IB, void 0), this.transform = ((0, iB.g)(this, NB), (0, iB.g)(this, uB, void 0)), (0, iB.g)(this, UB), this.objectid = BB, this.transform = jB
          }
        };
        return (0, iB.k)(jB, "ThreeMfComponent"), (() => {
          const aB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "objectid"
          })], QB = [AI({
            name: "transform",
            formatter: qN
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, jB) => {
                BB.objectid = jB
              }
            },
            metadata: aB
          }, IB, NB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, jB) => {
                BB.transform = jB
              }
            },
            metadata: aB
          }, uB, UB), (0, iB.e)(null, BB = {
            value: jB
          }, nB, {
            kind: "class",
            name: jB.name,
            metadata: aB
          }, null, dB), jB = BB.value, aB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aB
          }), (0, iB.g)(jB, dB)
        })(), jB
      })(),
      PN = (() => {
        let BB, jB, zB, QB = [XI({
            ns: NN,
            name: "basematerials"
          })],
          nB = [],
          dB = [],
          IB = [];
        jB = class {
          constructor(BB) {
            this.id = (0, iB.g)(this, dB, void 0), this.base = ((0, iB.g)(this, IB), []), this.id = BB
          }
        };
        return (0, iB.k)(jB, "ThreeMfBaseMaterials"), (() => {
          const NB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "id"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "id",
            static: !1,
            private: !1,
            access: {
              has: BB => "id" in BB,
              get: BB => BB.id,
              set: (BB, jB) => {
                BB.id = jB
              }
            },
            metadata: NB
          }, dB, IB), (0, iB.e)(null, BB = {
            value: jB
          }, QB, {
            kind: "class",
            name: jB.name,
            metadata: NB
          }, null, nB), jB = BB.value, NB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: NB
          }), (0, iB.g)(jB, nB)
        })(), jB
      })(),
      WN = (() => {
        let BB, jB, zB, QB, nB = [XI({
            ns: NN,
            name: "base"
          })],
          dB = [],
          IB = [],
          NB = [],
          uB = [],
          UB = [];
        jB = class {
          constructor(BB, jB) {
            this.name = (0, iB.g)(this, IB, void 0), this.displaycolor = ((0, iB.g)(this, NB), (0, iB.g)(this, uB, void 0)), (0, iB.g)(this, UB), this.name = BB, this.displaycolor = jB
          }
        };
        return (0, iB.k)(jB, "ThreeMfBase"), (() => {
          const aB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "name"
          })], QB = [AI({
            name: "displaycolor"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, jB) => {
                BB.name = jB
              }
            },
            metadata: aB
          }, IB, NB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "displaycolor",
            static: !1,
            private: !1,
            access: {
              has: BB => "displaycolor" in BB,
              get: BB => BB.displaycolor,
              set: (BB, jB) => {
                BB.displaycolor = jB
              }
            },
            metadata: aB
          }, uB, UB), (0, iB.e)(null, BB = {
            value: jB
          }, nB, {
            kind: "class",
            name: jB.name,
            metadata: aB
          }, null, dB), jB = BB.value, aB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: aB
          }), (0, iB.g)(jB, dB)
        })(), jB
      })(),
      eN = (() => {
        let BB, jB, zB = [XI({
            ns: NN,
            name: "build"
          })],
          QB = [];
        jB = class {
          constructor() {
            this.item = []
          }
        };
        return (0, iB.k)(jB, "ThreeMfBuild"), (() => {
          const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          (0, iB.e)(null, BB = {
            value: jB
          }, zB, {
            kind: "class",
            name: jB.name,
            metadata: nB
          }, null, QB), jB = BB.value, nB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nB
          }), (0, iB.g)(jB, QB)
        })(), jB
      })(),
      lN = (() => {
        let BB, jB, zB, QB, nB, dB = [XI({
            ns: NN,
            name: "item"
          })],
          IB = [],
          NB = [],
          uB = [],
          UB = [],
          aB = [],
          pB = [],
          rB = [];
        jB = class {
          constructor(BB, jB, zB) {
            this.objectid = (0, iB.g)(this, NB, void 0), this.transform = ((0, iB.g)(this, uB), (0, iB.g)(this, UB, void 0)), this.partnumber = ((0, iB.g)(this, aB), (0, iB.g)(this, pB, void 0)), this.metadatagroup = (0, iB.g)(this, rB), this.objectid = BB, this.transform = jB, this.partnumber = zB
          }
        };
        return (0, iB.k)(jB, "ThreeMfItem"), (() => {
          const sB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zB = [AI({
            name: "objectid"
          })], QB = [AI({
            name: "transform",
            formatter: qN
          })], nB = [AI({
            name: "partnumber"
          })], (0, iB.e)(null, null, zB, {
            kind: "field",
            name: "objectid",
            static: !1,
            private: !1,
            access: {
              has: BB => "objectid" in BB,
              get: BB => BB.objectid,
              set: (BB, jB) => {
                BB.objectid = jB
              }
            },
            metadata: sB
          }, NB, uB), (0, iB.e)(null, null, QB, {
            kind: "field",
            name: "transform",
            static: !1,
            private: !1,
            access: {
              has: BB => "transform" in BB,
              get: BB => BB.transform,
              set: (BB, jB) => {
                BB.transform = jB
              }
            },
            metadata: sB
          }, UB, aB), (0, iB.e)(null, null, nB, {
            kind: "field",
            name: "partnumber",
            static: !1,
            private: !1,
            access: {
              has: BB => "partnumber" in BB,
              get: BB => BB.partnumber,
              set: (BB, jB) => {
                BB.partnumber = jB
              }
            },
            metadata: sB
          }, pB, rB), (0, iB.e)(null, BB = {
            value: jB
          }, dB, {
            kind: "class",
            name: jB.name,
            metadata: sB
          }, null, IB), jB = BB.value, sB && Object.defineProperty(jB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: sB
          }), (0, iB.g)(jB, IB)
        })(), jB
      })();
    class wN {
      constructor(BB, jB) {
        this._object = new FN(BB, jB)
      }
      withName(BB) {
        return this._object.name = BB, this
      }
      withThumbnail(BB) {
        return this._object.thumbnail = BB, this
      }
      withProperty(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this._object.pid = BB, this._object.id = jB, this
      }
      build() {
        return this._object
      }
      reset(BB, jB) {
        this._object = new FN(BB, jB)
      }
    }
    class xN extends wN {
      constructor(BB) {
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : aN.model), this._object.content = new AN
      }
      withComponent(BB, jB) {
        return this._object.content.component.push(new TN(BB, jB)), this
      }
    }
    class KN extends wN {
      constructor(BB) {
        super(BB, aN.model)
      }
      withPostProcessHandlers(BB, jB) {
        return this._vh = BB, this._th = jB, this
      }
      withData(BB) {
        return this._object.content = this._buildMesh(BB), this
      }
      withMaterial(BB, jB) {
        return this._object.pid = BB, this._object.pindex = jB, this
      }
      _buildMesh(BB) {
        const jB = this._buildVertices(BB.positions),
          zB = this._buildTriangle(BB.indices);
        return new YN(jB, zB)
      }
      _buildVertices(BB) {
        const jB = new VN;
        if (BB)
          for (let zB = 0; zB < BB.length;) {
            const QB = BB[zB++],
              nB = BB[zB++],
              dB = BB[zB++];
            let IB = new hN(QB, nB, dB);
            this._vh && (IB = this._vh(IB)), jB.vertex.push(IB)
          }
        return jB
      }
      _buildTriangle(BB) {
        const jB = new XN;
        if (BB)
          for (let zB = 0; zB < BB.length;) {
            const QB = BB[zB++],
              nB = BB[zB++],
              dB = BB[zB++];
            let IB = new ZN(QB, nB, dB);
            this._th && (IB = this._th(IB)), jB.triangle.push(IB)
          }
        return jB
      }
    }
    class CN {
      constructor(BB) {
        this._m = new PN(BB)
      }
      withColor(BB, jB) {
        this._m.base = this._m.base ?? [];
        let zB = this._m.base.find((jB => jB.name.toLowerCase() === BB.toLowerCase()));
        return zB ? (zB.displaycolor = this._rgbaToHex(jB), this) : (zB = new WN(BB, this._rgbaToHex(jB)), this._m.base.push(zB), this)
      }
      build() {
        return this._m
      }
      _rgbaToHex(BB) {
        const jB = BB => Math.round(Math.min(255, Math.max(0, 255 * Math.pow(BB, 1 / 2.2)))),
          zB = jB(BB.r).toString(16).padStart(2, "0").toUpperCase(),
          QB = jB(BB.g).toString(16).padStart(2, "0").toUpperCase(),
          nB = jB(BB.b).toString(16).padStart(2, "0").toUpperCase();
        if ("number" === typeof BB.a) {
          return `#${zB}${QB}${nB}${Math.round(Math.min(255,Math.max(0,255*BB.a))).toString(16).padStart(2,"0").toUpperCase()}`
        }
        return `#${zB}${QB}${nB}`
      }
    }
    class cN {
      constructor() {
        this._model = new fN, this._objects = new Map
      }
      withMetaData(BB, jB, zB, QB) {
        return this._model.metadata || (this._model.metadata = new Array), this._model.metadata.push(new oN(BB, jB, zB, QB)), this
      }
      withMaterial(BB) {
        return BB instanceof CN && (BB = BB.build()), BB && (this._model.resources = this._model.resources ?? new DN, this._model.resources.basematerials = this._model.resources.basematerials ?? [], this._model.resources.basematerials.push(BB)), this
      }
      withMesh(BB) {
        return BB instanceof KN && (BB = BB.build()), this._model.resources = this._model.resources ?? new DN, this._model.resources.object.push(BB), this
      }
      withComponents(BB) {
        return BB instanceof xN && (BB = BB.build()), this._model.resources = this._model.resources ?? new DN, this._model.resources.object.push(BB), this
      }
      withBuild(BB, jB, zB) {
        return this._model.build = this._model.build ?? new eN, this._model.build.item?.push(new lN(BB, jB, zB)), this
      }
      withUnit(BB) {
        return this._model.unit = BB, this
      }
      reset() {
        return this._model = new fN, this._objects = new Map, this
      }
      build() {
        if (!this._model.resources?.object?.length) throw new Error("Invalid state: resources MUST be defined ");
        if (!this._model.build?.item?.length) throw new Error("Invalid state: Build MUST be defined ");
        return this._model
      }
    }
    cN.KnownMetaSet = new Set(fN.KnownMeta.map((BB => BB.toLowerCase())));
    class bN {
      withContentType(BB) {
        this._cts || (this._cts = new gN);
        const jB = this._cts.items;
        return jB.some((jB => jB.ext === BB.ext && jB.ct === BB.ct)) || jB.push(BB), this
      }
      withRelationship(BB) {
        this._rs || (this._rs = new SN);
        const jB = this._rs.items;
        return jB.some((jB => jB.id === BB.id)) || jB.push(BB), this.withContentType(new tN("rels", sN.Relationships)), this
      }
      withModel(BB) {
        return BB instanceof cN && (BB = BB.build()), this._m = BB, this.withContentType(new tN("model", sN.Model)), this
      }
      build() {
        if (!this._m) throw new Error("Invalid state: you Must provide at least a model.");
        const BB = `${mN}${yN}`;
        if (!this._rs) {
          const jB = `/${BB}`;
          this.withRelationship(new MN("rel0", LN.ThreeDimModel, jB))
        }
        return new EN(this._cts, this._rs, this._m)
      }
    }
    class vN {
      constructor(BB) {
        this._o = BB
      }
      get options() {
        return this._o
      }
      async serializeAsync(BB) {
        const jB = await this.ensureZipLibReadyAsync();
        if (!jB) return;
        const zB = jB.Zip,
          QB = jB.ZipDeflate;
        if (!zB || !QB) throw new Error("fflate Zip / ZipDeflate not available");
        const nB = function(BB, jB, zB) {
          const nB = new QB(jB, {
            level: 6
          });
          BB.add(nB);
          const dB = function(BB) {
              return {
                push: (jB, zB) => BB.push(jB, zB)
              }
            }(nB),
            IB = new IN(dB),
            NB = new nN(IB).dec("1.0", "UTF-8");
          new jN(NB).serialize(zB), IB.finish()
        };
        for (var dB = arguments.length, IB = new Array(dB > 1 ? dB - 1 : 0), NB = 1; NB < dB; NB++) IB[NB - 1] = arguments[NB];
        const uB = this.toDocument(...IB);
        if (!uB) return;
        const UB = new zB(BB);
        nB(UB, GN, uB.contentTypes), nB(UB, `${JN}${kN}`, uB.relationships), nB(UB, `${mN}${yN}`, uB.model), UB.end()
      }
      toDocument() {
        const BB = (new cN).withUnit(this._o?.unit ?? UN.millimeter);
        if (this.options.metadata)
          for (const nB in this.options.metadata) BB.withMetaData(nB, this.options.metadata[nB]);
        for (var jB = arguments.length, zB = new Array(jB), QB = 0; QB < jB; QB++) zB[QB] = arguments[QB];
        return (new bN).withModel(this.toModel(BB, ...zB)).build()
      }
    }
    class RN {
      static async SerializeToMemoryAsync(BB) {
        const jB = new Array;
        let zB = 0;
        for (var QB = arguments.length, nB = new Array(QB > 1 ? QB - 1 : 0), dB = 1; dB < QB; dB++) nB[dB - 1] = arguments[dB];
        if (await BB.serializeAsync((function(BB, QB, nB) {
            jB.push(QB), zB += QB.length
          }), ...nB), !zB) return;
        const IB = new Uint8Array(zB);
        let NB = 0;
        for (const uB of jB) IB.set(uB, NB), NB += uB.length;
        return IB
      }
    }
    class ON {}
    ON.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Bu {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_SAFE_INTEGER,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._from = BB, this._to = jB, this._step = zB, this._i = BB
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
    class ju extends vN {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        super({
          ...ju.DefaultOptions,
          ...BB
        })
      }
      toModel(BB) {
        for (var jB = arguments.length, zB = new Array(jB > 1 ? jB - 1 : 0), QB = 1; QB < jB; QB++) zB[QB - 1] = arguments[QB];
        zB = zB.filter((BB => BB instanceof UQ.e || BB instanceof sB.c));
        const nB = new Bu,
          dB = BB,
          IB = new Map,
          NB = this.options.exportInstances ? [] : null;
        for (let uB = 0; uB < zB.length; uB++) {
          const BB = zB[uB];
          if (BB instanceof sB.c) {
            NB?.push(BB);
            continue
          }
          const jB = BB.name || `mesh${uB}`,
            QB = BB.getWorldMatrix(),
            UB = this._handleBabylonTo3mfMatrixTransformToRef(QB, iN.Zero()),
            aB = BB.cL;
          if (void 0 === aB) continue;
          const pB = 1 == aB.length;
          for (let zB = 0; zB < aB.length; zB++) {
            const QB = aB[zB],
              NB = this._extractSubMesh(BB, QB);
            if (NB) {
              const BB = pB ? `${jB}` : `${jB}_${zB}`,
                uB = new KN(nB.next()).withData(NB).withName(BB).build();
              dB.withMesh(uB), dB.withBuild(uB.id, UB), IB.set(QB, uB)
            }
          }
        }
        if (NB && NB.length) {
          const BB = this._groupBy(NB, (BB => BB.vQB));
          for (const [jB, zB] of Array.from(BB.entries()))
            if (zB && zB.length)
              for (let BB = 0; BB < zB.length; BB++) {
                const QB = zB[BB].getWorldMatrix(),
                  nB = jB.cL;
                for (let BB = 0; BB < nB.length; BB++) {
                  const jB = nB[BB],
                    zB = IB.get(jB);
                  zB && dB.withBuild(zB.id, this._handleBabylonTo3mfMatrixTransformToRef(QB, iN.Zero()))
                }
              }
        }
        return dB.build()
      }
      async ensureZipLibReadyAsync() {
        return this._fflateReadyPromise || (this._fflateReadyPromise = (async () => {
          const BB = globalThis;
          return BB.fflate || await nB.Tools.LoadScriptAsync(ON.FFLATEUrl), BB.fflate
        })()), await this._fflateReadyPromise
      }
      _extractSubMesh(BB, jB) {
        const zB = BB.dQB();
        if (!zB) return;
        const QB = BB.getVerticesData(ju._PositionKind);
        if (!QB) return;
        if (0 == jB.indexStart && jB.indexCount == zB.length) return {
          positions: QB,
          indices: zB
        };
        const nB = jB.indexStart,
          dB = new Map,
          IB = [],
          NB = new Uint32Array(jB.indexCount);
        for (let uB = 0; uB < jB.indexCount; uB++) {
          const BB = zB[nB + uB];
          let jB = dB.get(BB);
          if (void 0 === jB) {
            jB = dB.size, dB.set(BB, jB);
            const zB = 3 * BB;
            IB.push(QB[zB], QB[zB + 1], QB[zB + 2])
          }
          NB[uB] = jB
        }
        return {
          positions: new Float32Array(IB),
          indices: NB
        }
      }
      _groupBy(BB, jB) {
        const zB = new Map;
        for (const QB of BB) {
          const BB = jB(QB),
            nB = zB.get(BB);
          nB ? nB.push(QB) : zB.set(BB, [QB])
        }
        return zB
      }
      _handleBabylonTo3mfMatrixTransformToRef(BB, jB) {
        const zB = BB.multiplyToRef(ju._R_BJS_TO_3MF, AB.c.Zero()).m;
        return jB.values = [zB[0], zB[1], zB[2], zB[4], zB[5], zB[6], zB[8], zB[9], zB[10], zB[12], zB[13], zB[14]], jB
      }
    }
    ju.DefaultOptions = {
      unit: UN.meter,
      exportInstances: !1
    }, ju._PositionKind = "position", ju._R_BJS_TO_3MF = AB.c.RotationX(Math.PI / 2).multiply(AB.c.Scaling(1, -1, 1))
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);